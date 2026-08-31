const APP_VERSION = "20260831-contempla-al-cordero-v46";
const CACHE_PREFIX = "evgl-";
const SHELL_CACHE = `${CACHE_PREFIX}shell-${APP_VERSION}`;
const RUNTIME_CACHE = `${CACHE_PREFIX}runtime-${APP_VERSION}`;
const OFFLINE_ENTRIES_CACHE = `${CACHE_PREFIX}offline-entries-v1`;
const RUNTIME_LIMIT = 80;

const VERSIONED_SHELL = [
  `./styles.css?v=${APP_VERSION}`,
  `./app.js?v=${APP_VERSION}`,
  `./manifest.webmanifest?v=${APP_VERSION}`,
  `./data/site-index.json?v=${APP_VERSION}`,
];

const SHELL_RESOURCES = [
  "./",
  "./index.html",
  ...VERSIONED_SHELL,
  "./assets/icons/app-icon-192.png",
  "./assets/icons/app-icon-512.png",
  "./assets/icons/apple-touch-icon.png",
];

function scopedUrl(path) {
  return new URL(path, self.registration.scope).href;
}

async function cacheResponse(cache, request, response) {
  if (response?.ok && response.status === 200) {
    await cache.put(request, response.clone());
  }
  return response;
}

async function precacheInitialEntry(cache) {
  const indexRequest = new Request(scopedUrl(`data/site-index.json?v=${APP_VERSION}`), { cache: "reload" });
  const indexResponse = await fetch(indexRequest);
  if (!indexResponse.ok) return;
  await cache.put(indexRequest, indexResponse.clone());

  const index = await indexResponse.json();
  const initialEntry = index.entries?.at(-1);
  if (!initialEntry) return;

  const resources = [initialEntry.payloadPath, initialEntry.image?.publicPath].filter(Boolean);
  await Promise.all(resources.map(async (path) => {
    const request = new Request(scopedUrl(`${path}?v=${APP_VERSION}`), { cache: "reload" });
    try {
      const response = await fetch(request);
      await cacheResponse(cache, request, response);
    } catch {
      // The core shell remains installable even if optional initial content fails.
    }
  }));
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await caches.open(RUNTIME_CACHE);
    await cache.addAll(SHELL_RESOURCES);
    await precacheInitialEntry(cache);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
      const obsolete = name.startsWith(CACHE_PREFIX)
        && ![SHELL_CACHE, RUNTIME_CACHE, OFFLINE_ENTRIES_CACHE].includes(name);
      return obsolete ? caches.delete(name) : Promise.resolve(false);
    }));
    await self.clients.claim();
  })());
});

async function trimCache(cacheName, limit) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  const excess = Math.max(0, keys.length - limit);
  await Promise.all(keys.slice(0, excess).map((key) => cache.delete(key)));
}

async function broadcastNetworkState(online) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clients) client.postMessage({ type: online ? "NETWORK_AVAILABLE" : "OFFLINE_FALLBACK" });
}

async function networkFirst(request, fallbackPath = "") {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const response = await fetch(request);
    await cacheResponse(cache, request, response);
    await trimCache(RUNTIME_CACHE, RUNTIME_LIMIT);
    await broadcastNetworkState(true);
    return response;
  } catch {
    await broadcastNetworkState(false);
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (fallbackPath) {
      const fallback = await caches.match(scopedUrl(fallbackPath), { ignoreSearch: true });
      if (fallback) return fallback;
    }
    throw new Error("Recurso no disponible sin conexión");
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;
  const cache = await caches.open(RUNTIME_CACHE);
  const response = await fetch(request);
  await cacheResponse(cache, request, response);
  await trimCache(RUNTIME_CACHE, RUNTIME_LIMIT);
  return response;
}

async function staleWhileRevalidate(request, event) {
  const cached = await caches.match(request, { ignoreSearch: true });
  const update = (async () => {
    const cache = await caches.open(RUNTIME_CACHE);
    const response = await fetch(request);
    await cacheResponse(cache, request, response);
    await trimCache(RUNTIME_CACHE, RUNTIME_LIMIT);
    return response;
  })();

  if (cached) {
    event.waitUntil(update.catch(() => undefined));
    return cached;
  }
  return update;
}

async function partialAudioResponse(request, cached) {
  const range = request.headers.get("range") || "";
  const match = /^bytes=(\d*)-(\d*)$/i.exec(range.trim());
  if (!match) return new Response(null, { status: 416 });

  const bytes = await cached.arrayBuffer();
  const size = bytes.byteLength;
  const suffixLength = !match[1] && match[2] ? Number(match[2]) : 0;
  const start = suffixLength ? Math.max(0, size - suffixLength) : match[1] ? Number(match[1]) : 0;
  const end = suffixLength ? size - 1 : match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || start > end || start >= size) {
    return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
  }

  const headers = new Headers(cached.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Content-Length", String(end - start + 1));
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  return new Response(bytes.slice(start, end + 1), { status: 206, statusText: "Partial Content", headers });
}

async function serveAudio(request) {
  const cached = await caches.open(OFFLINE_ENTRIES_CACHE).then((cache) => cache.match(request));
  if (cached) {
    return request.headers.has("range") ? partialAudioResponse(request, cached) : cached;
  }
  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, "index.html"));
    return;
  }

  if (/\.(?:mp3|m4a|mp4|opus)$/i.test(url.pathname)) {
    event.respondWith(serveAudio(request));
    return;
  }

  if (url.pathname.endsWith(".json")) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (/\.(?:png|jpe?g|webp|svg)$/i.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request, event));
    return;
  }

  if (/\.(?:css|js|webmanifest)$/i.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
  }
});

function validatedResources(resources) {
  const scope = new URL(self.registration.scope);
  return [...new Set((Array.isArray(resources) ? resources : []).map((value) => {
    const url = new URL(value, scope);
    if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) {
      throw new Error("Recurso fuera del ámbito de la aplicación");
    }
    return url.href;
  }))];
}

async function saveOfflineEntry(resources) {
  const cache = await caches.open(OFFLINE_ENTRIES_CACHE);
  for (const url of validatedResources(resources)) {
    const request = new Request(url, { cache: "reload", credentials: "same-origin" });
    const response = await fetch(request);
    if (!response.ok || response.status !== 200) {
      throw new Error(`No se pudo guardar ${new URL(url).pathname}`);
    }
    await cache.delete(request, { ignoreSearch: true });
    await cache.put(request, response);
  }
  return { saved: true, resources: validatedResources(resources).length };
}

async function removeOfflineEntry(resources) {
  const cache = await caches.open(OFFLINE_ENTRIES_CACHE);
  const validated = validatedResources(resources);
  await Promise.all(validated.map((url) => cache.delete(url, { ignoreSearch: true })));
  return { saved: false, resources: validated.length };
}

async function offlineEntryStatus(resources) {
  const cache = await caches.open(OFFLINE_ENTRIES_CACHE);
  const validated = validatedResources(resources);
  const matches = await Promise.all(validated.map((url) => cache.match(url)));
  return { saved: validated.length > 0 && matches.every(Boolean), resources: validated.length };
}

self.addEventListener("message", (event) => {
  const port = event.ports?.[0];
  const reply = (payload) => port?.postMessage(payload);
  const task = (async () => {
    try {
      if (event.data?.type === "SAVE_OFFLINE_ENTRY") return reply({ ok: true, ...(await saveOfflineEntry(event.data.resources)) });
      if (event.data?.type === "REMOVE_OFFLINE_ENTRY") return reply({ ok: true, ...(await removeOfflineEntry(event.data.resources)) });
      if (event.data?.type === "OFFLINE_ENTRY_STATUS") return reply({ ok: true, ...(await offlineEntryStatus(event.data.resources)) });
      return reply({ ok: false, error: "Mensaje no reconocido" });
    } catch (error) {
      return reply({ ok: false, error: error.message || "No se pudo completar la operación offline" });
    }
  })();
  event.waitUntil(task);
});

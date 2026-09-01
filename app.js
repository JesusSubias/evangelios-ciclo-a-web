const ICONS = {
  book: `<svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5.8A2.8 2.8 0 0 1 6.8 3H20v16H6.8A2.8 2.8 0 0 0 4 21.8"/><path d="M4 19.5A2.8 2.8 0 0 1 6.8 17H20"/><path d="M8 7h8"/></svg>`,
  search: `<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
  bookmark: `<svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v16l-6-3.6-6 3.6z"/></svg>`,
  download: `<svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg>`,
  settings: `<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 .9-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5.9h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  chevron: `<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  calendar: `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,
  music: `<svg aria-hidden="true" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>`,
  clock: `<svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>`,
  info: `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  offline: `<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 17.5H6.5a4.5 4.5 0 0 1-.8-8.9A6.5 6.5 0 0 1 18 10.8a3.5 3.5 0 0 1-.5 6.7H16"/><path d="M12 11v10m0 0-3-3m3 3 3-3"/></svg>`,
  offlineSaved: `<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 18H6.2a4.2 4.2 0 0 1-.7-8.3A6.2 6.2 0 0 1 17.2 12a3.3 3.3 0 0 1 .3 6H16"/><path d="m9 16 2.2 2.2L16 13.5"/></svg>`,
  light: `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.3 14.5a6 6 0 1 1 7.4 0c-.9.7-1.2 1.4-1.2 2H9.5c0-.6-.3-1.3-1.2-2Z"/></svg>`,
  people: `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M14 15.5a4.5 4.5 0 0 1 6.5 4"/></svg>`,
};

const state = {
  manifest: null,
  entryPayloads: new Map(),
  entryLoadError: "",
  loadingEntryId: null,
  selectedId: null,
  query: "",
  season: "Todos",
  tab: "evangelio",
  lyricsExpanded: false,
  imageOpen: false,
  imageTrigger: "button",
  calendarOpen: false,
  calendarMonth: null,
  settingsOpen: false,
  toast: "",
  bookmarkedIds: new Set(),
  offlineSavedIds: new Set(),
  offlineSupported: "serviceWorker" in navigator,
  offlineReady: false,
  offlineBusyId: null,
  online: navigator.onLine,
  preferences: {
    expandLyrics: false,
    largeText: false,
  },
};

const STORAGE_KEYS = {
  bookmarks: "evgl.bookmarks",
  preferences: "evgl.preferences",
};
const DEFAULT_PREFERENCES = {
  expandLyrics: false,
  largeText: false,
};
const seasons = ["Todos", "Adviento", "Navidad", "Cuaresma", "Pascua", "Solemnidades", "Tiempo Ordinario"];
const seasonColors = {
  Adviento: "#6e3b96",
  Navidad: "#bd7d13",
  Cuaresma: "#7b3f4b",
  Pascua: "#3e7d3b",
  Solemnidades: "#b8872f",
  "Tiempo Ordinario": "#2f7f3b",
};

const app = document.querySelector("#app");
const DATA_VERSION = "20260901-el-cielo-letra-v53";
const OFFLINE_MESSAGE_TIMEOUT = 45000;
const calendarWeekdays = ["L", "M", "X", "J", "V", "S", "D"];
const monthFormatter = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" });
let toastTimer = null;
let eventsBound = false;
const entryPayloadRequests = new Map();
let selectionRequestId = 0;
let offlineStatusRequestId = 0;

async function init() {
  try {
    const response = await fetch(`data/site-index.json?v=${DATA_VERSION}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`No se pudo cargar el índice (${response.status})`);
    state.manifest = await response.json();
    loadStoredState();
    const initialEntry = chooseInitialEntry(state.manifest.entries);
    if (!initialEntry) throw new Error("No hay fichas dominicales disponibles");
    state.selectedId = initialEntry.id;
    state.lyricsExpanded = state.preferences.expandLyrics;
    render({ revealActiveEntry: true });
    await loadSelectedEntry({ revealActiveEntry: true });
  } catch (error) {
    app.innerHTML = `<div class="boot-screen"><p>${escapeHtml(error.message)}</p></div>`;
  }
}

function updateTopActions() {
  if (!state.manifest) return;
  app.dataset.network = state.online ? "online" : "offline";
  app.dataset.offlineReady = state.offlineReady ? "true" : "false";
  const region = app.querySelector(".top-actions-region");
  if (region) region.innerHTML = renderTopActions(selectedEntry());
}

function offlineEntryResources(entry) {
  return [
    entry.payloadPath,
    entry.image?.publicPath,
    entry.song?.audioPublicPath,
  ].filter(Boolean).map(versionedAssetPath);
}

async function sendOfflineMessage(type, resources) {
  const registration = await navigator.serviceWorker.ready;
  const worker = navigator.serviceWorker.controller || registration.active || registration.waiting;
  if (!worker) throw new Error("El modo sin conexión todavía no está preparado");

  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();
    const timeout = window.setTimeout(() => {
      channel.port1.close();
      reject(new Error("El guardado está tardando demasiado"));
    }, OFFLINE_MESSAGE_TIMEOUT);

    channel.port1.onmessage = (event) => {
      window.clearTimeout(timeout);
      channel.port1.close();
      if (event.data?.ok) resolve(event.data);
      else reject(new Error(event.data?.error || "No se pudo completar la operación sin conexión"));
    };
    worker.postMessage({ type, resources }, [channel.port2]);
  });
}

async function refreshOfflineEntryStatus(entryId) {
  if (!state.offlineReady || !entrySummary(entryId)) return;
  const requestId = ++offlineStatusRequestId;
  try {
    const result = await sendOfflineMessage("OFFLINE_ENTRY_STATUS", offlineEntryResources(entrySummary(entryId)));
    if (requestId !== offlineStatusRequestId) return;
    if (result.saved) state.offlineSavedIds.add(entryId);
    else state.offlineSavedIds.delete(entryId);
    if (state.selectedId === entryId) updateTopActions();
  } catch {
    // Offline support is progressive enhancement; reading remains available.
  }
}

async function registerOfflineSupport() {
  if (!state.offlineSupported) return;
  navigator.serviceWorker.addEventListener("message", handleServiceWorkerMessage);
  try {
    await navigator.serviceWorker.register(`sw.js?v=${encodeURIComponent(DATA_VERSION)}`, {
      scope: "./",
      updateViaCache: "none",
    });
    await navigator.serviceWorker.ready;
    state.offlineReady = true;
    updateTopActions();
    if (state.selectedId) refreshOfflineEntryStatus(state.selectedId);
  } catch {
    state.offlineReady = false;
    updateTopActions();
  }
}

function setNetworkState(online) {
  const wasOnline = state.online;
  state.online = online;
  updateTopActions();
  if (!state.manifest || wasOnline === state.online) return;
  showToast(state.online ? "Conexión recuperada" : "Sin conexión: usando contenido guardado");
}

function handleNetworkChange() {
  setNetworkState(navigator.onLine);
}

function handleServiceWorkerMessage(event) {
  if (event.data?.type === "OFFLINE_FALLBACK") setNetworkState(false);
  if (event.data?.type === "NETWORK_AVAILABLE") setNetworkState(true);
}

function entrySummary(entryId) {
  return state.manifest.entries.find((entry) => entry.id === entryId) || null;
}

async function fetchEntryPayload(entryId) {
  if (state.entryPayloads.has(entryId)) return state.entryPayloads.get(entryId);
  if (entryPayloadRequests.has(entryId)) return entryPayloadRequests.get(entryId);

  const summary = entrySummary(entryId);
  if (!summary) throw new Error("La ficha solicitada no existe");

  const request = fetch(versionedAssetPath(summary.payloadPath), { cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) throw new Error(`No se pudo cargar la ficha (${response.status})`);
      const payload = await response.json();
      if (payload.id !== entryId) throw new Error("La ficha recibida no coincide con la solicitada");
      state.entryPayloads.set(entryId, payload);
      return payload;
    })
    .finally(() => entryPayloadRequests.delete(entryId));

  entryPayloadRequests.set(entryId, request);
  return request;
}

async function loadSelectedEntry(options = {}) {
  const entryId = state.selectedId;
  const requestId = ++selectionRequestId;
  state.loadingEntryId = entryId;
  state.entryLoadError = "";

  try {
    await fetchEntryPayload(entryId);
    if (state.selectedId !== entryId || requestId !== selectionRequestId) return;
    state.loadingEntryId = null;
    render({
      preserveSidebarScroll: options.preserveSidebarScroll,
      revealActiveEntry: options.revealActiveEntry,
      updateLyrics: true,
    });
    refreshOfflineEntryStatus(entryId);
  } catch (error) {
    if (state.selectedId !== entryId || requestId !== selectionRequestId) return;
    state.loadingEntryId = null;
    state.entryLoadError = error.message || "No se pudo cargar el contenido de la ficha";
    render({ preserveSidebarScroll: options.preserveSidebarScroll, updateLyrics: true });
  }
}

function readStoredJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Preferences are optional; the app remains fully usable without storage.
  }
}

function loadStoredState() {
  const bookmarkIds = readStoredJson(STORAGE_KEYS.bookmarks, []);
  state.bookmarkedIds = new Set(Array.isArray(bookmarkIds) ? bookmarkIds : []);
  state.preferences = {
    ...DEFAULT_PREFERENCES,
    ...readStoredJson(STORAGE_KEYS.preferences, {}),
  };
}

function persistBookmarks() {
  writeStoredJson(STORAGE_KEYS.bookmarks, [...state.bookmarkedIds]);
}

function persistPreferences() {
  writeStoredJson(STORAGE_KEYS.preferences, state.preferences);
}

function localIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function sundayOfCurrentWeek(today = new Date()) {
  const sunday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12);
  sunday.setDate(sunday.getDate() + ((7 - sunday.getDay()) % 7));
  return localIsoDate(sunday);
}

function chooseInitialEntry(entries, today = new Date()) {
  if (!entries.length) return null;

  const targetSunday = sundayOfCurrentWeek(today);
  const orderedEntries = [...entries].sort((a, b) => a.isoDate.localeCompare(b.isoDate));
  return orderedEntries.find((entry) => entry.isoDate >= targetSunday) || orderedEntries.at(-1);
}

function versionedAssetPath(path) {
  const value = String(path || "");
  if (!value || value.startsWith("data:")) return value;
  return `${value}${value.includes("?") ? "&" : "?"}v=${encodeURIComponent(DATA_VERSION)}`;
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function filteredEntries() {
  const q = normalize(state.query);
  return state.manifest.entries.filter((entry) => {
    const matchesSeason = state.season === "Todos" || entry.season === state.season;
    const haystack = normalize(`${entry.dateLabel} ${entry.denomination} ${entry.refs} ${entry.song.title}`);
    return matchesSeason && (!q || haystack.includes(q));
  });
}

function selectedEntry() {
  const summary = entrySummary(state.selectedId) || state.manifest.entries[0];
  const payload = state.entryPayloads.get(summary.id);
  if (!payload) return summary;
  return {
    ...summary,
    ...payload,
    image: { ...summary.image, ...payload.image },
    song: { ...summary.song, ...payload.song },
  };
}

function selectedEntryIsReady() {
  return state.entryPayloads.has(state.selectedId);
}

function imageAlt(entry, complete = false) {
  const transcript = entry.image.textTranscript
    ? `. Texto visible en la ilustración: ${entry.image.textTranscript}`
    : "";
  return `${entry.denomination}${complete ? ", imagen completa" : ""}${transcript}`;
}

function captureSidebarScroll() {
  return {
    sidebar: document.querySelector(".sidebar")?.scrollTop ?? 0,
    entryList: document.querySelector(".entry-list")?.scrollTop ?? 0,
    windowX: window.scrollX,
    windowY: window.scrollY,
  };
}

function centerActiveEntryInIndex() {
  const sidebar = document.querySelector(".sidebar");
  const entryList = document.querySelector(".entry-list");
  const activeEntry = document.querySelector('.entry-button[data-active="true"]');
  if (!sidebar || !entryList || !activeEntry) return;

  const listStyle = getComputedStyle(entryList);
  const listScrolls = ["auto", "scroll"].includes(listStyle.overflowY)
    && entryList.scrollHeight > entryList.clientHeight;
  const container = listScrolls ? entryList : sidebar;
  const containerRect = container.getBoundingClientRect();
  const activeRect = activeEntry.getBoundingClientRect();
  const centeredTop = container.scrollTop
    + activeRect.top
    - containerRect.top
    - (container.clientHeight - activeRect.height) / 2;

  container.scrollTop = Math.max(0, centeredTop);
}

function restoreSidebarScroll(scrollState, revealActiveEntry = false) {
  const sidebar = document.querySelector(".sidebar");
  const entryList = document.querySelector(".entry-list");
  if (scrollState) {
    if (sidebar) sidebar.scrollTop = scrollState.sidebar;
    if (entryList) entryList.scrollTop = scrollState.entryList;
    window.scrollTo(scrollState.windowX, scrollState.windowY);
  }
  if (revealActiveEntry) {
    centerActiveEntryInIndex();
    requestAnimationFrame(centerActiveEntryInIndex);
    setTimeout(centerActiveEntryInIndex, 0);
  }
}

function ensureShell() {
  if (app.querySelector(".app-layout")) return;

  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">${ICONS.book}</div>
        <div class="brand-copy">
          <h1>Evangelios del domingo</h1>
          <span class="cycle">Ciclo A 2025-2026</span>
        </div>
      </div>
      <div class="top-actions-region"></div>
    </header>
    <div class="status-region" role="status" aria-live="polite" aria-atomic="true"></div>
    <main class="app-layout">
      <section class="reader" aria-label="Ficha dominical">
        <div class="reader-intro-region"></div>
        <div class="responsive-audio-slot" aria-label="Reproductor de la ficha"></div>
        <div class="reader-body-region"></div>
      </section>
      <aside class="song-panel" aria-label="Canción y letra">
        <div class="song-lyrics-region"></div>
      </aside>
      <aside class="sidebar" aria-label="Índice de domingos">
        <div class="sidebar-region"></div>
      </aside>
    </main>
  `;
  bindEvents();
}

function captureAudioPreferences() {
  const player = app.querySelector(".audio-player");
  if (!player) return null;
  return {
    volume: player.volume,
    playbackRate: player.playbackRate,
    muted: player.muted,
  };
}

function restoreAudioPreferences(preferences) {
  const player = app.querySelector(".audio-player");
  if (!player || !preferences) return;
  player.volume = preferences.volume;
  player.playbackRate = preferences.playbackRate;
  player.muted = preferences.muted;
}

function focusAfterRender(target) {
  if (!target) return;
  const applyFocus = () => {
    const selectors = {
      settings: ".settings-popover [data-setting]",
      settingsToggle: "[data-settings-toggle]",
      image: ".image-viewer button[data-close-image]",
      imageTrigger: "[data-open-image]",
      search: "#search",
      heading: ".reader-heading h2",
      bookmark: "[data-bookmark-toggle]",
      offline: "[data-offline-toggle]",
      calendarToggle: "[data-calendar-toggle]",
      calendarShift: "[data-calendar-shift]:not([disabled])",
      lyricsToggle: "#toggleLyrics",
    };
    const selector = target.startsWith("tab:")
      ? `[role="tab"][data-tab="${CSS.escape(target.slice(4))}"]`
      : target.startsWith("setting:")
        ? `[data-setting="${CSS.escape(target.slice(8))}"]`
        : target.startsWith("season:")
          ? `[data-season="${CSS.escape(target.slice(7))}"]`
          : target.startsWith("imageTrigger:")
            ? `[data-image-trigger="${CSS.escape(target.slice(13))}"]`
            : selectors[target];
    app.querySelector(selector)?.focus({ preventScroll: true });
  };
  queueMicrotask(applyFocus);
  requestAnimationFrame(applyFocus);
  setTimeout(applyFocus, 0);
}

function render(options = {}) {
  const scrollState = options.preserveSidebarScroll ? captureSidebarScroll() : null;
  const entry = selectedEntry();
  ensureShell();

  const entryChanged = app.dataset.entryId !== entry.id;
  const audioPreferences = entryChanged ? captureAudioPreferences() : null;
  app.dataset.entryId = entry.id;
  app.dataset.entryReady = selectedEntryIsReady() ? "true" : "false";
  app.dataset.largeText = state.preferences.largeText ? "true" : "false";
  app.dataset.network = state.online ? "online" : "offline";
  app.dataset.offlineReady = state.offlineReady ? "true" : "false";

  app.querySelector(".top-actions-region").innerHTML = renderTopActions(entry);
  app.querySelector(".status-region").innerHTML = state.toast
    ? `<div class="toast">${escapeHtml(state.toast)}</div>`
    : "";
  app.querySelector(".reader-intro-region").innerHTML = renderReaderIntro(entry);
  app.querySelector(".reader-body-region").innerHTML = renderReaderBody(entry);
  app.querySelector(".sidebar-region").innerHTML = renderSidebarContent();

  if (entryChanged) {
    app.querySelector(".responsive-audio-slot").innerHTML = renderSongAudio(entry);
    app.querySelector(".song-lyrics-region").innerHTML = renderSongLyrics(entry);
    restoreAudioPreferences(audioPreferences);
  } else if (options.updateLyrics) {
    app.querySelector(".song-lyrics-region").innerHTML = renderSongLyrics(entry);
  }

  restoreSidebarScroll(scrollState, options.revealActiveEntry);
  focusAfterRender(options.focusTarget);
}

function renderTopActions(entry) {
  const isBookmarked = state.bookmarkedIds.has(entry.id);
  const bookmarkLabel = isBookmarked ? "Quitar marcador" : "Marcar ficha";
  const audioPath = versionedAssetPath(entry.song.audioPublicPath);
  const isOfflineSaved = state.offlineSavedIds.has(entry.id);
  const isOfflineBusy = state.offlineBusyId === entry.id;
  const offlineActionLabel = isOfflineBusy
    ? "Guardando ficha sin conexión"
    : isOfflineSaved
      ? "Eliminar ficha guardada del dispositivo"
      : "Guardar ficha para usar sin conexión";
  const offlineLabel = state.online ? offlineActionLabel : `${offlineActionLabel} (sin conexión)`;
  const offlineDisabled = !state.offlineReady
    || isOfflineBusy
    || !selectedEntryIsReady()
    || (!state.online && !isOfflineSaved);
  return `
    <nav class="top-actions" aria-label="Acciones">
      <button class="icon-button" type="button" data-bookmark-toggle data-active="${isBookmarked}" aria-pressed="${isBookmarked}" title="${bookmarkLabel}" aria-label="${bookmarkLabel}">
        ${ICONS.bookmark}
      </button>
      ${state.offlineSupported ? `
        <button
          class="icon-button offline-button"
          type="button"
          data-offline-toggle
          data-active="${isOfflineSaved}"
          data-busy="${isOfflineBusy}"
          aria-pressed="${isOfflineSaved}"
          aria-busy="${isOfflineBusy}"
          title="${offlineLabel}"
          aria-label="${offlineLabel}"
          ${offlineDisabled ? "disabled" : ""}
        >
          ${isOfflineSaved ? ICONS.offlineSaved : ICONS.offline}
        </button>
      ` : ""}
      ${audioPath ? `
        <a class="icon-button" data-download-current href="${escapeHtml(audioPath)}" download title="Descargar audio de ${escapeHtml(entry.song.title)}" aria-label="Descargar audio de ${escapeHtml(entry.song.title)}">
          ${ICONS.download}
        </a>
      ` : `
        <button class="icon-button" type="button" disabled title="Audio pendiente" aria-label="Audio pendiente">
          ${ICONS.download}
        </button>
      `}
      <div class="settings-menu-wrap">
        <button class="icon-button" type="button" data-settings-toggle data-active="${state.settingsOpen}" aria-expanded="${state.settingsOpen}" aria-haspopup="dialog" aria-controls="settings-popover" title="Ajustes" aria-label="Ajustes">
          ${ICONS.settings}
        </button>
        ${state.settingsOpen ? renderSettingsPanel() : ""}
      </div>
    </nav>
  `;
}

function renderSettingsPanel() {
  return `
    <div class="settings-popover" id="settings-popover" role="dialog" aria-modal="true" aria-labelledby="settings-title">
      <h2 id="settings-title">Ajustes</h2>
      ${renderSettingToggle("expandLyrics", "Letra completa", state.preferences.expandLyrics)}
      ${renderSettingToggle("largeText", "Texto grande", state.preferences.largeText)}
    </div>
  `;
}

function renderSettingToggle(key, label, checked) {
  return `
    <button class="settings-row" type="button" data-setting="${key}" aria-pressed="${checked}">
      <span>${label}</span>
      <span class="switch" data-on="${checked}"><span></span></span>
    </button>
  `;
}

function renderSidebarContent() {
  const entries = filteredEntries();
  const extraSongs = state.manifest.songs.filter((song) => !song.includedInCycle).slice(0, 5);
  return `
    <div class="sidebar-content">
      <label class="search-box" for="search">
        ${ICONS.search}
        <span class="visually-hidden">Buscar domingo o canción</span>
        <input id="search" type="search" value="${escapeHtml(state.query)}" placeholder="Buscar domingo o canción" />
      </label>
      <h2 class="control-title">Filtrar por tiempo litúrgico</h2>
      <div class="season-grid" role="list">
        ${seasons.map((season) => `
          <button class="season-button" type="button" data-season="${escapeHtml(season)}" data-active="${state.season === season}">
            ${escapeHtml(season)}
          </button>
        `).join("")}
      </div>
      <h2 class="control-title">
        Domingos y fiestas
        <button class="calendar-toggle" type="button" data-calendar-toggle aria-expanded="${state.calendarOpen}" title="${state.calendarOpen ? "Cerrar calendario" : "Abrir calendario"}">
          ${ICONS.calendar}
        </button>
      </h2>
      ${state.calendarOpen ? renderCalendar(entries) : ""}
      ${entries.length ? `
        <div class="entry-list">
          ${entries.map(renderEntryButton).join("")}
        </div>
      ` : `<div class="no-results">No hay fichas que coincidan con la búsqueda.</div>`}
      <section class="library-block">
        <h2 class="control-title">Canciones extra</h2>
        <div class="extra-list">
          ${extraSongs.map((song) => `
            <div class="extra-song">
              <span>${escapeHtml(song.title)}</span>
              <span class="extra-actions">
                ${song.audioPublicPath ? `<a href="${escapeHtml(versionedAssetPath(song.audioPublicPath))}" title="Descargar audio de ${escapeHtml(song.title)}">${ICONS.download}</a>` : `<span title="Audio pendiente">${ICONS.clock}</span>`}
              </span>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function monthKeyFromIso(isoDate) {
  return isoDate.slice(0, 7);
}

function monthKeys() {
  return [...new Set(state.manifest.entries.map((entry) => monthKeyFromIso(entry.isoDate)))].sort();
}

function currentCalendarMonth() {
  return state.calendarMonth || monthKeyFromIso(selectedEntry().isoDate);
}

function shiftCalendarMonth(delta) {
  const months = monthKeys();
  const current = currentCalendarMonth();
  const currentIndex = Math.max(0, months.indexOf(current));
  const nextIndex = Math.min(months.length - 1, Math.max(0, currentIndex + delta));
  state.calendarMonth = months[nextIndex];
}

function renderCalendar(filtered) {
  const monthKey = currentCalendarMonth();
  const months = monthKeys();
  const [year, month] = monthKey.split("-").map(Number);
  const monthIndex = month - 1;
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const leadingBlanks = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  const entriesByDate = new Map(state.manifest.entries.map((entry) => [entry.isoDate, entry]));
  const visibleIds = new Set(filtered.map((entry) => entry.id));
  const cells = [];

  for (let index = 0; index < leadingBlanks; index += 1) cells.push({ type: "blank" });
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const entry = entriesByDate.get(dateKey);
    cells.push({ type: "day", day, entry, hiddenByFilters: entry ? !visibleIds.has(entry.id) : false });
  }
  while (cells.length % 7 !== 0) cells.push({ type: "blank" });

  const monthDate = new Date(year, monthIndex, 1);
  const monthLabel = monthFormatter.format(monthDate).replace(/^\p{Ll}/u, (letter) => letter.toUpperCase());
  const monthIndexInCycle = months.indexOf(monthKey);

  return `
    <section class="calendar-panel" aria-label="Calendario de domingos y fiestas">
      <div class="calendar-header">
        <button class="calendar-nav calendar-nav-prev" type="button" data-calendar-shift="-1" title="Mes anterior" ${monthIndexInCycle <= 0 ? "disabled" : ""}>
          ${ICONS.chevron}
        </button>
        <h3>${escapeHtml(monthLabel)}</h3>
        <button class="calendar-nav" type="button" data-calendar-shift="1" title="Mes siguiente" ${monthIndexInCycle >= months.length - 1 ? "disabled" : ""}>
          ${ICONS.chevron}
        </button>
      </div>
      <div class="calendar-grid" role="grid" aria-label="${escapeHtml(monthLabel)}">
        ${calendarWeekdays.map((day) => `<span class="calendar-weekday">${day}</span>`).join("")}
        ${cells.map((cell) => renderCalendarCell(cell)).join("")}
      </div>
    </section>
  `;
}

function renderCalendarCell(cell) {
  if (cell.type === "blank") return `<span class="calendar-cell calendar-cell-empty"></span>`;
  if (!cell.entry) return `<span class="calendar-cell">${cell.day}</span>`;

  const entry = cell.entry;
  const isActive = entry.id === state.selectedId;
  return `
    <button
      class="calendar-cell calendar-entry"
      type="button"
      data-calendar-entry="${escapeHtml(entry.id)}"
      data-active="${isActive}"
      data-muted="${cell.hiddenByFilters}"
      ${isActive ? 'aria-current="date"' : ""}
      title="${escapeHtml(`${entry.dateLabel} - ${entry.denomination}`)}"
      aria-label="${escapeHtml(`${entry.dateLabel}: ${entry.denomination}`)}"
    >
      <span>${cell.day}</span>
      <span class="calendar-dot" style="background:${seasonColors[entry.season] || "#b8872f"}"></span>
    </button>
  `;
}

function renderEntryButton(entry) {
  const isBookmarked = state.bookmarkedIds.has(entry.id);
  const isActive = entry.id === state.selectedId;
  return `
    <button class="entry-button" type="button" data-entry="${escapeHtml(entry.id)}" data-active="${isActive}" ${isActive ? 'aria-current="date"' : ""}>
      <span class="season-dot" style="background:${seasonColors[entry.season] || "#b8872f"}"></span>
      <span>
        <span class="entry-date">${escapeHtml(entry.dateLabel)}</span>
        <span class="entry-title">${escapeHtml(entry.denomination)}</span>
        <span class="entry-song">${escapeHtml(entry.song.title)}</span>
      </span>
      <span class="entry-flags">
        ${isBookmarked ? `<span class="entry-bookmark" title="Ficha marcada">${ICONS.bookmark}</span>` : ""}
        <span class="entry-chevron">${ICONS.chevron}</span>
      </span>
    </button>
  `;
}

function activeTabFor(entry) {
  return state.tab === "meeting" && !entry.meeting ? "evangelio" : state.tab;
}

function renderEntryLoadState(area) {
  if (state.entryLoadError) {
    return `
      <section class="entry-load-state entry-load-error" data-entry-error role="alert">
        ${ICONS.info}
        <div>
          <strong>No hemos podido abrir esta ficha</strong>
          <p>${escapeHtml(state.entryLoadError)}</p>
          <button class="ghost-button" type="button" data-retry-entry>Reintentar</button>
        </div>
      </section>
    `;
  }
  return `
    <section class="entry-load-state" data-entry-loading="${escapeHtml(area)}" aria-busy="true" aria-live="polite">
      <span class="loading-mark" aria-hidden="true"></span>
      <div>
        <strong>Cargando ${area === "lyrics" ? "la letra" : "el contenido"}…</strong>
        <p>Solo descargamos los datos de la ficha que estás consultando.</p>
      </div>
    </section>
  `;
}

function renderReaderIntro(entry) {
  const imagePath = versionedAssetPath(entry.image.publicPath || state.manifest.assets.cover);
  return `
    <div class="reader-intro">
      <figure class="hero-image">
        <button class="image-open-hitarea" type="button" data-open-image data-image-trigger="hitarea" aria-label="Ver imagen completa">
          <img src="${escapeHtml(imagePath)}" alt="${escapeHtml(imageAlt(entry))}" />
        </button>
        <button class="image-open-button" type="button" data-open-image data-image-trigger="button">Ver imagen completa</button>
      </figure>
      ${state.imageOpen ? renderImageViewer(entry, imagePath) : ""}
      <div class="reader-heading">
        <span class="date-label">Domingo ${escapeHtml(entry.dateLabel)}</span>
        <h2 tabindex="-1">${escapeHtml(entry.denomination)}</h2>
        <div class="meta-row">
          ${ICONS.book}
          <span>${escapeHtml(entry.refs)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderReaderBody(entry) {
  if (!selectedEntryIsReady()) {
    return `<div class="reader-body">${renderEntryLoadState("content")}</div>`;
  }
  const activeTab = activeTabFor(entry);
  const tabs = [
    { id: "evangelio", label: "Texto del Evangelio", icon: ICONS.book },
    { id: "pastoral", label: "Idea pastoral", icon: ICONS.light },
    ...(entry.meeting ? [{ id: "meeting", label: "Propuesta de reunión", icon: ICONS.people, className: "meeting-tab" }] : []),
  ];
  const activeTabId = `tab-${activeTab}`;
  return `
    <div class="reader-body">
      <div class="tabbar" role="tablist" aria-label="Contenido de la ficha">
        ${tabs.map((tab) => `
          <button
            class="tab-button${tab.className ? ` ${tab.className}` : ""}"
            id="tab-${tab.id}"
            type="button"
            role="tab"
            data-tab="${tab.id}"
            data-active="${activeTab === tab.id}"
            aria-selected="${activeTab === tab.id}"
            aria-controls="content-panel"
            tabindex="${activeTab === tab.id ? "0" : "-1"}"
          >${tab.icon} ${tab.label}</button>
        `).join("")}
      </div>
      <article
        class="content-panel${activeTab === "meeting" ? "" : " reading-measure"}"
        id="content-panel"
        role="tabpanel"
        aria-labelledby="${activeTabId}"
        data-content-mode="${activeTab}"
        tabindex="0"
      >
        ${activeTab === "evangelio" ? renderGospel(entry) : activeTab === "pastoral" ? renderPastoral(entry) : renderMeeting(entry.meeting)}
      </article>
      <p class="source-note">${escapeHtml(state.manifest.sourceNotice)}</p>
    </div>
  `;
}

function renderImageViewer(entry, imagePath) {
  return `
    <div class="image-viewer" role="dialog" aria-modal="true" aria-labelledby="image-viewer-title">
      <div class="image-viewer-backdrop" data-close-image></div>
      <div class="image-viewer-panel">
        <div class="image-viewer-header">
          <div>
            <strong id="image-viewer-title">${escapeHtml(entry.denomination)}</strong>
            <span>${escapeHtml(entry.dateLabel)}</span>
          </div>
          <button class="icon-button" type="button" data-close-image title="Cerrar imagen" aria-label="Cerrar imagen">×</button>
        </div>
        <img src="${escapeHtml(imagePath)}" alt="${escapeHtml(imageAlt(entry, true))}" />
      </div>
    </div>
  `;
}

function renderGospel(entry) {
  return `
    <h3>Texto del Evangelio</h3>
    <div class="gospel-blocks">
      ${entry.gospel.blocks.map((block) => {
        if (block.type === "heading") return `<div class="gospel-heading">${escapeHtml(block.text)}</div>`;
        if (block.type === "ellipsis") return `<div class="ellipsis">[...]</div>`;
        if (block.type === "verse") {
          return `<p class="verse"><span class="verse-label">${escapeHtml(block.label)}</span><span>${escapeHtml(block.text)}</span></p>`;
        }
        return `<p>${escapeHtml(block.text)}</p>`;
      }).join("")}
    </div>
  `;
}

function renderPastoral(entry) {
  return `
    <h3>Idea pastoral</h3>
    <div class="pastoral-text">${escapeHtml(entry.pastoral)}</div>
  `;
}

function renderMeeting(meeting) {
  return `
    <div class="meeting-intro">
      <div>
        <span class="meeting-kicker">Guion preparado · ${escapeHtml(meeting.duration)}</span>
        <h3>${escapeHtml(meeting.title).replace(/\s+(\S+)$/, "&nbsp;$1")}</h3>
        <p>${escapeHtml(meeting.subtitle)}</p>
      </div>
      ${meeting.deckPublicPath ? `
        <a class="meeting-download" href="${escapeHtml(versionedAssetPath(meeting.deckPublicPath))}" download>
          ${ICONS.download}<span>Descargar presentación<small>PowerPoint · .pptx</small></span>
        </a>
      ` : ""}
    </div>
    <section class="meeting-section meeting-key">
      <span class="section-eyebrow">Clave espiritual</span>
      <h4>${escapeHtml(meeting.key.title)}</h4>
      <p class="meeting-lead">${escapeHtml(meeting.key.text)}</p>
      <div class="meeting-steps">
        ${meeting.key.steps.map((step, index) => `
          <article><span>${index + 1}</span><h5>${escapeHtml(step.title)}</h5><p>${escapeHtml(step.text)}</p></article>
        `).join("")}
      </div>
      <blockquote>${escapeHtml(meeting.key.quote)}</blockquote>
    </section>
    <section class="meeting-section">
      <span class="section-eyebrow">${escapeHtml(meeting.resonancesEyebrow || "Cuatro resonancias bíblicas")}</span>
      <h4>${escapeHtml(meeting.resonancesTitle || "Una misma intuición desde cuatro ángulos")}</h4>
      <div class="resonance-grid">
        ${meeting.resonances.map((item) => `
          <article><span class="scripture-ref">${escapeHtml(item.ref)}</span><h5>${escapeHtml(item.title)}</h5><q>${escapeHtml(item.quote)}</q><p>${escapeHtml(item.text)}</p></article>
        `).join("")}
      </div>
      <p class="meeting-synthesis"><strong>Síntesis</strong>${escapeHtml(meeting.synthesis)}</p>
      <p class="meeting-question">${escapeHtml(meeting.question)}</p>
    </section>
    <section class="meeting-section agenda-section">
      <span class="section-eyebrow">Propuesta de reunión · ${escapeHtml(meeting.duration)}</span>
      <h4>${escapeHtml(meeting.agendaTitle || "Del ruido interior a una semilla concreta")}</h4>
      <ol class="meeting-agenda">
        ${meeting.agenda.map((item) => `
          <li><span class="agenda-time">${escapeHtml(item.time)}</span><div><h5>${escapeHtml(item.title)}</h5><p>${escapeHtml(item.instruction)}</p><p class="agenda-question">${escapeHtml(item.question)}</p></div></li>
        `).join("")}
      </ol>
      <p class="meeting-criterion"><strong>Criterio</strong>${escapeHtml(meeting.criterion)}</p>
    </section>
  `;
}

function renderSongAudio(entry) {
  const audioPath = versionedAssetPath(entry.song.audioPublicPath);
  return `
    <section class="song-audio" aria-label="Reproductor de ${escapeHtml(entry.song.title)}">
      <div class="song-header">
        <div>
          <h3>${escapeHtml(entry.song.title)}</h3>
        </div>
        <div class="panel-icon">${ICONS.music}</div>
      </div>
      <div class="rule"></div>
      <div class="audio-box">
        ${audioPath ? `
          <audio class="audio-player" controls preload="metadata" src="${escapeHtml(audioPath)}" aria-label="Escuchar ${escapeHtml(entry.song.title)}"></audio>
          <a class="download-link" href="${escapeHtml(audioPath)}" download>
            ${ICONS.download}
            Descargar audio
          </a>
        ` : `
          <div class="audio-missing">
            ${ICONS.clock}
            <span><strong>Audio pendiente</strong>Aún no hay audio disponible para esta canción.</span>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderSongLyrics(entry) {
  if (!selectedEntryIsReady()) {
    return `<section class="song-lyrics" aria-label="Letra de ${escapeHtml(entry.song.title)}">${renderEntryLoadState("lyrics")}</section>`;
  }
  return `
    <section class="song-lyrics" aria-label="Letra de ${escapeHtml(entry.song.title)}">
      <div class="rule"></div>
      <div class="lyrics-header">
        <h4>Letra</h4>
        <button class="ghost-button" type="button" id="toggleLyrics" aria-expanded="${state.lyricsExpanded}" aria-controls="lyrics-content">${state.lyricsExpanded ? "Vista breve" : "Ver completa"}</button>
      </div>
      <div class="lyrics-box" id="lyrics-content" data-expanded="${state.lyricsExpanded}">
        ${entry.song.lyrics.map((stanza) => `
          <div class="stanza">
            ${stanza.lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
          </div>
        `).join("")}
      </div>
      ${!state.lyricsExpanded ? `
        <div class="notice">
          ${ICONS.info}
          <span>Letra parcial mostrada. Abre la letra completa para preparar una celebración.</span>
        </div>
      ` : ""}
    </section>
  `;
}

function selectEntry(entryId) {
  if (!entrySummary(entryId)) return;
  state.selectedId = entryId;
  state.loadingEntryId = state.entryPayloads.has(entryId) ? null : entryId;
  state.entryLoadError = "";
  state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
  state.lyricsExpanded = state.preferences.expandLyrics;
  state.imageOpen = false;
  state.settingsOpen = false;
  render({ preserveSidebarScroll: true, revealActiveEntry: true, focusTarget: "heading" });
  refreshOfflineEntryStatus(entryId);
  if (!selectedEntryIsReady()) {
    loadSelectedEntry({ preserveSidebarScroll: true, revealActiveEntry: true });
  }
}

function activateTab(tabId) {
  state.tab = tabId;
  state.settingsOpen = false;
  render({ preserveSidebarScroll: true, focusTarget: `tab:${tabId}` });
}

function handleAppInput(event) {
  if (!event.target.matches("#search")) return;
  state.query = event.target.value;
  render({ preserveSidebarScroll: true, focusTarget: "search" });
}

function handleAppClick(event) {
  const control = event.target.closest("[data-close-image], [data-open-image], [data-season], [data-entry], [data-calendar-toggle], [data-bookmark-toggle], [data-offline-toggle], [data-settings-toggle], [data-setting], [data-calendar-shift], [data-calendar-entry], [data-tab], [data-retry-entry], #toggleLyrics");
  if (!control || !app.contains(control)) return;

  if (control.matches("[data-retry-entry]")) {
    loadSelectedEntry({ preserveSidebarScroll: true });
    render({ preserveSidebarScroll: true, updateLyrics: true });
    return;
  }

  if (control.matches("[data-close-image]")) {
    state.imageOpen = false;
    render({ preserveSidebarScroll: true, focusTarget: `imageTrigger:${state.imageTrigger}` });
    return;
  }

  if (control.matches("[data-open-image]")) {
    state.imageOpen = true;
    state.imageTrigger = control.dataset.imageTrigger || "button";
    state.settingsOpen = false;
    render({ preserveSidebarScroll: true, focusTarget: "image" });
    return;
  }

  if (control.matches("[data-season]")) {
    state.season = control.dataset.season;
    state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
    render({ preserveSidebarScroll: true, focusTarget: `season:${control.dataset.season}` });
    return;
  }

  if (control.matches("[data-entry]")) {
    selectEntry(control.dataset.entry);
    return;
  }

  if (control.matches("[data-calendar-toggle]")) {
    state.calendarOpen = !state.calendarOpen;
    state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
    render({ preserveSidebarScroll: true, focusTarget: "calendarToggle" });
    return;
  }

  if (control.matches("[data-bookmark-toggle]")) {
    toggleBookmark(selectedEntry());
    return;
  }

  if (control.matches("[data-offline-toggle]")) {
    toggleOfflineEntry(selectedEntry());
    return;
  }

  if (control.matches("[data-settings-toggle]")) {
    state.settingsOpen = !state.settingsOpen;
    state.imageOpen = false;
    render({
      preserveSidebarScroll: true,
      focusTarget: state.settingsOpen ? "settings" : "settingsToggle",
    });
    return;
  }

  if (control.matches("[data-setting]")) {
    togglePreference(control.dataset.setting);
    return;
  }

  if (control.matches("[data-calendar-shift]")) {
    shiftCalendarMonth(Number(control.dataset.calendarShift));
    render({ preserveSidebarScroll: true, focusTarget: "calendarShift" });
    return;
  }

  if (control.matches("[data-calendar-entry]")) {
    selectEntry(control.dataset.calendarEntry);
    return;
  }

  if (control.matches("[data-tab]")) {
    activateTab(control.dataset.tab);
    return;
  }

  if (control.matches("#toggleLyrics")) {
    state.lyricsExpanded = !state.lyricsExpanded;
    state.settingsOpen = false;
    render({ preserveSidebarScroll: true, updateLyrics: true, focusTarget: "lyricsToggle" });
  }
}

function handleAppKeydown(event) {
  const currentTab = event.target.closest('[role="tab"]');
  if (!currentTab) return;
  const tabs = [...app.querySelectorAll('[role="tab"]')];
  const currentIndex = tabs.indexOf(currentTab);
  let nextIndex = currentIndex;

  if (["ArrowRight", "ArrowDown"].includes(event.key)) nextIndex = (currentIndex + 1) % tabs.length;
  if (["ArrowLeft", "ArrowUp"].includes(event.key)) nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = tabs.length - 1;
  if (nextIndex === currentIndex && !["Home", "End"].includes(event.key)) return;

  event.preventDefault();
  activateTab(tabs[nextIndex].dataset.tab);
}

function focusableControls(container) {
  return [...container.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.hidden && element.getClientRects().length > 0);
}

function handleDocumentKeydown(event) {
  const dialog = state.imageOpen
    ? app.querySelector(".image-viewer")
    : state.settingsOpen
      ? app.querySelector(".settings-popover")
      : null;
  if (!dialog) return;

  if (event.key === "Escape") {
    event.preventDefault();
    const closingImage = state.imageOpen;
    state.imageOpen = false;
    state.settingsOpen = false;
    render({ focusTarget: closingImage ? `imageTrigger:${state.imageTrigger}` : "settingsToggle" });
    return;
  }

  if (event.key !== "Tab") return;
  const controls = focusableControls(dialog);
  if (!controls.length) return;
  const first = controls[0];
  const last = controls.at(-1);
  if (!dialog.contains(document.activeElement)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function bindEvents() {
  if (eventsBound) return;
  app.addEventListener("input", handleAppInput);
  app.addEventListener("click", handleAppClick);
  app.addEventListener("keydown", handleAppKeydown);
  document.addEventListener("keydown", handleDocumentKeydown);
  eventsBound = true;
}

function toggleBookmark(entry) {
  if (state.bookmarkedIds.has(entry.id)) {
    state.bookmarkedIds.delete(entry.id);
    persistBookmarks();
    showToast("Marcador quitado", "bookmark");
  } else {
    state.bookmarkedIds.add(entry.id);
    persistBookmarks();
    showToast("Ficha marcada", "bookmark");
  }
}

async function toggleOfflineEntry(entry) {
  if (!state.offlineReady || state.offlineBusyId) return;
  const wasSaved = state.offlineSavedIds.has(entry.id);
  if (!state.online && !wasSaved) {
    showToast("Conéctate para guardar esta ficha", "offline");
    return;
  }

  state.offlineBusyId = entry.id;
  updateTopActions();
  let message = "";
  try {
    const type = wasSaved ? "REMOVE_OFFLINE_ENTRY" : "SAVE_OFFLINE_ENTRY";
    const result = await sendOfflineMessage(type, offlineEntryResources(entry));
    if (result.saved) state.offlineSavedIds.add(entry.id);
    else state.offlineSavedIds.delete(entry.id);
    message = result.saved ? "Ficha y audio disponibles sin conexión" : "Copia sin conexión eliminada";
  } catch (error) {
    message = error.message || "No se pudo guardar la ficha";
  } finally {
    state.offlineBusyId = null;
    showToast(message, "offline");
  }
}

function togglePreference(key) {
  if (!Object.prototype.hasOwnProperty.call(state.preferences, key)) return;
  state.preferences[key] = !state.preferences[key];
  if (key === "expandLyrics") {
    state.lyricsExpanded = state.preferences.expandLyrics;
  }
  persistPreferences();
  render({ preserveSidebarScroll: true, updateLyrics: key === "expandLyrics", focusTarget: `setting:${key}` });
}

function showToast(message, focusTarget = "") {
  if (toastTimer) clearTimeout(toastTimer);
  state.toast = message;
  render({ preserveSidebarScroll: true, focusTarget });
  toastTimer = setTimeout(() => {
    state.toast = "";
    render({ preserveSidebarScroll: true });
  }, 1800);
}

window.addEventListener("online", handleNetworkChange);
window.addEventListener("offline", handleNetworkChange);

init();
registerOfflineSupport();

// Activate the current worker before loading app.js: older workers matched
// cached scripts while ignoring their version query, even after a page reload.
const version = new URL(import.meta.url).searchParams.get("v");
const workerUrl = new URL(`sw.js?v=${encodeURIComponent(version)}`, import.meta.url);

function waitForCurrentController(timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const finish = (error) => {
      clearTimeout(timer);
      navigator.serviceWorker.removeEventListener("controllerchange", check);
      if (error) reject(error);
      else resolve();
    };
    const check = () => {
      if (navigator.serviceWorker.controller?.scriptURL === workerUrl.href) finish();
    };
    const timer = setTimeout(() => finish(new Error("La actualización está tardando más de lo previsto.")), timeoutMs);
    navigator.serviceWorker.addEventListener("controllerchange", check);
    check();
  });
}

async function start() {
  if ("serviceWorker" in navigator && navigator.serviceWorker.controller?.scriptURL !== workerUrl.href) {
    try {
      await navigator.serviceWorker.register(workerUrl.href, { scope: "./", updateViaCache: "none" });
      await waitForCurrentController();
    } catch (error) {
      // A first visit can load directly. An old controlling worker must finish
      // updating before it is allowed to serve the application scripts.
      if (navigator.serviceWorker.controller) throw error;
    }
  }
  // Refresh the stylesheet after activation too; it may have been requested
  // while the previous worker still controlled this document.
  const stylesheet = document.querySelector('link[rel="stylesheet"]');
  if (stylesheet) {
    const fresh = stylesheet.cloneNode();
    fresh.href = new URL(`styles.css?v=${encodeURIComponent(version)}`, import.meta.url).href;
    await new Promise((resolve) => {
      fresh.onload = resolve;
      fresh.onerror = resolve;
      stylesheet.replaceWith(fresh);
    });
  }
  await import(new URL(`app.js?v=${encodeURIComponent(version)}`, import.meta.url).href);
}

start().catch(() => {
  const screen = document.querySelector(".boot-screen");
  if (!screen) return;
  const message = document.createElement("p");
  message.textContent = "No se ha podido completar la actualización. Comprueba la conexión y vuelve a intentarlo.";
  const retry = document.createElement("button");
  retry.type = "button";
  retry.textContent = "Reintentar";
  retry.addEventListener("click", () => window.location.reload());
  screen.replaceChildren(message, retry);
});

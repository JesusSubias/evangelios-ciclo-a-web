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
  light: `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.3 14.5a6 6 0 1 1 7.4 0c-.9.7-1.2 1.4-1.2 2H9.5c0-.6-.3-1.3-1.2-2Z"/></svg>`,
};

const state = {
  manifest: null,
  selectedId: null,
  query: "",
  season: "Todos",
  tab: "evangelio",
  lyricsExpanded: false,
  imageOpen: false,
  calendarOpen: false,
  calendarMonth: null,
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
const DATA_VERSION = "20260706-calendar-nav";
const calendarWeekdays = ["L", "M", "X", "J", "V", "S", "D"];
const monthFormatter = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" });

async function init() {
  try {
    const response = await fetch(`data/site-manifest.json?v=${DATA_VERSION}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`No se pudo cargar el manifest (${response.status})`);
    state.manifest = await response.json();
    state.selectedId = chooseInitialEntry(state.manifest.entries).id;
    render();
  } catch (error) {
    app.innerHTML = `<div class="boot-screen"><p>${escapeHtml(error.message)}</p></div>`;
  }
}

function chooseInitialEntry(entries) {
  const missingAudio = entries.find((entry) => !entry.song.audioPublicPath);
  return missingAudio || entries[0];
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
  return state.manifest.entries.find((entry) => entry.id === state.selectedId) || state.manifest.entries[0];
}

function captureSidebarScroll() {
  return {
    sidebar: document.querySelector(".sidebar")?.scrollTop ?? 0,
    entryList: document.querySelector(".entry-list")?.scrollTop ?? 0,
    windowX: window.scrollX,
    windowY: window.scrollY,
  };
}

function restoreSidebarScroll(scrollState) {
  if (!scrollState) return;
  requestAnimationFrame(() => {
    const sidebar = document.querySelector(".sidebar");
    const entryList = document.querySelector(".entry-list");
    if (sidebar) sidebar.scrollTop = scrollState.sidebar;
    if (entryList) entryList.scrollTop = scrollState.entryList;
    window.scrollTo(scrollState.windowX, scrollState.windowY);
  });
}

function render(options = {}) {
  const scrollState = options.preserveSidebarScroll ? captureSidebarScroll() : null;
  const entry = selectedEntry();
  app.innerHTML = `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">${ICONS.book}</div>
        <div class="brand-copy">
          <h1>Evangelios del domingo</h1>
          <span class="cycle">Ciclo A 2025-2026</span>
        </div>
      </div>
      <nav class="top-actions" aria-label="Acciones">
        <button class="icon-button" type="button" title="Favoritos">${ICONS.bookmark}</button>
        <button class="icon-button" type="button" title="Descargas">${ICONS.download}</button>
        <button class="icon-button" type="button" title="Ajustes">${ICONS.settings}</button>
      </nav>
    </header>
    <main class="app-layout">
      ${renderSidebar()}
      ${renderReader(entry)}
      ${renderSongPanel(entry)}
    </main>
  `;
  bindEvents();
  restoreSidebarScroll(scrollState);
}

function renderSidebar() {
  const entries = filteredEntries();
  const extraSongs = state.manifest.songs.filter((song) => !song.includedInCycle).slice(0, 5);
  return `
    <aside class="sidebar" aria-label="Indice de domingos">
      <label class="search-box">
        ${ICONS.search}
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
                ${song.audioPublicPath ? `<a href="${escapeHtml(song.audioPublicPath)}" title="Descargar audio de ${escapeHtml(song.title)}">${ICONS.download}</a>` : `<span title="Audio pendiente">${ICONS.clock}</span>`}
              </span>
            </div>
          `).join("")}
        </div>
      </section>
    </aside>
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
      title="${escapeHtml(`${entry.dateLabel} - ${entry.denomination}`)}"
      aria-label="${escapeHtml(`${entry.dateLabel}: ${entry.denomination}`)}"
    >
      <span>${cell.day}</span>
      <span class="calendar-dot" style="background:${seasonColors[entry.season] || "#b8872f"}"></span>
    </button>
  `;
}

function renderEntryButton(entry) {
  return `
    <button class="entry-button" type="button" data-entry="${escapeHtml(entry.id)}" data-active="${entry.id === state.selectedId}">
      <span class="season-dot" style="background:${seasonColors[entry.season] || "#b8872f"}"></span>
      <span>
        <span class="entry-date">${escapeHtml(entry.dateLabel)}</span>
        <span class="entry-title">${escapeHtml(entry.denomination)}</span>
        <span class="entry-song">${escapeHtml(entry.song.title)}</span>
      </span>
      <span class="entry-chevron">${ICONS.chevron}</span>
    </button>
  `;
}

function renderReader(entry) {
  const imagePath = entry.image.publicPath || state.manifest.assets.cover;
  return `
    <section class="reader" aria-label="Ficha dominical">
      <figure class="hero-image">
        <button class="image-open-hitarea" type="button" data-open-image aria-label="Ver imagen completa">
          <img src="${escapeHtml(imagePath)}" alt="${escapeHtml(entry.denomination)}" />
        </button>
        <button class="image-open-button" type="button" data-open-image>Ver imagen completa</button>
      </figure>
      ${state.imageOpen ? renderImageViewer(entry, imagePath) : ""}
      <div class="reader-heading">
        <span class="date-label">Domingo ${escapeHtml(entry.dateLabel)}</span>
        <h2>${escapeHtml(entry.denomination)}</h2>
        <div class="meta-row">
          ${ICONS.book}
          <span>${escapeHtml(entry.refs)}</span>
        </div>
      </div>
      <div class="tabbar" role="tablist" aria-label="Contenido de la ficha">
        <button class="tab-button" type="button" data-tab="evangelio" data-active="${state.tab === "evangelio"}">${ICONS.book} Texto del Evangelio</button>
        <button class="tab-button" type="button" data-tab="pastoral" data-active="${state.tab === "pastoral"}">${ICONS.light} Idea pastoral</button>
      </div>
      <article class="content-panel">
        ${state.tab === "evangelio" ? renderGospel(entry) : renderPastoral(entry)}
      </article>
      <p class="source-note">${escapeHtml(state.manifest.sourceNotice)}</p>
    </section>
  `;
}

function renderImageViewer(entry, imagePath) {
  return `
    <div class="image-viewer" role="dialog" aria-modal="true" aria-label="Imagen completa">
      <div class="image-viewer-backdrop" data-close-image></div>
      <div class="image-viewer-panel">
        <div class="image-viewer-header">
          <div>
            <strong>${escapeHtml(entry.denomination)}</strong>
            <span>${escapeHtml(entry.dateLabel)}</span>
          </div>
          <button class="icon-button" type="button" data-close-image title="Cerrar imagen">×</button>
        </div>
        <img src="${escapeHtml(imagePath)}" alt="${escapeHtml(entry.denomination)} completa" />
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

function renderSongPanel(entry) {
  return `
    <aside class="song-panel" aria-label="Cancion">
      <div class="song-header">
        <div>
          <h3>${escapeHtml(entry.song.title)}</h3>
        </div>
        <div class="panel-icon">${ICONS.music}</div>
      </div>
      <div class="rule"></div>
      <div class="audio-box">
        ${entry.song.audioPublicPath ? `
          <audio class="audio-player" controls preload="metadata" src="${escapeHtml(entry.song.audioPublicPath)}"></audio>
          <a class="download-link" href="${escapeHtml(entry.song.audioPublicPath)}" download>
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
      <div class="rule"></div>
      <div class="lyrics-header">
        <h4>Letra</h4>
        <button class="ghost-button" type="button" id="toggleLyrics">${state.lyricsExpanded ? "Vista breve" : "Ver completa"}</button>
      </div>
      <div class="lyrics-box" data-expanded="${state.lyricsExpanded}">
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
    </aside>
  `;
}

function bindEvents() {
  document.querySelector("#search")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
    document.querySelector("#search")?.focus();
  });

  document.querySelectorAll("[data-season]").forEach((button) => {
    button.addEventListener("click", () => {
      state.season = button.dataset.season;
      state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
      render();
    });
  });

  document.querySelectorAll("[data-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.entry;
      state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
      state.lyricsExpanded = false;
      state.imageOpen = false;
      render({ preserveSidebarScroll: true });
    });
  });

  document.querySelector("[data-calendar-toggle]")?.addEventListener("click", () => {
    state.calendarOpen = !state.calendarOpen;
    state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
    render({ preserveSidebarScroll: true });
  });

  document.querySelectorAll("[data-calendar-shift]").forEach((button) => {
    button.addEventListener("click", () => {
      shiftCalendarMonth(Number(button.dataset.calendarShift));
      render({ preserveSidebarScroll: true });
    });
  });

  document.querySelectorAll("[data-calendar-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedId = button.dataset.calendarEntry;
      state.calendarMonth = monthKeyFromIso(selectedEntry().isoDate);
      state.lyricsExpanded = false;
      state.imageOpen = false;
      render({ preserveSidebarScroll: true });
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      render({ preserveSidebarScroll: true });
    });
  });

  document.querySelector("#toggleLyrics")?.addEventListener("click", () => {
    state.lyricsExpanded = !state.lyricsExpanded;
    render({ preserveSidebarScroll: true });
  });

  document.querySelectorAll("[data-open-image]").forEach((button) => {
    button.addEventListener("click", () => {
      state.imageOpen = true;
      render({ preserveSidebarScroll: true });
    });
  });

  document.querySelectorAll("[data-close-image]").forEach((button) => {
    button.addEventListener("click", () => {
      state.imageOpen = false;
      render({ preserveSidebarScroll: true });
    });
  });

  document.addEventListener("keydown", handleEscapeClose, { once: true });
}

function handleEscapeClose(event) {
  if (event.key === "Escape" && state.imageOpen) {
    state.imageOpen = false;
    render();
  }
}

init();

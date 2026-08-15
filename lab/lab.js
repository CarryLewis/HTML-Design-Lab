async function loadIndex(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Could not load experiment index");
  }
  return response.json();
}

function experimentHref(experiment, fromLabFolder) {
  if (fromLabFolder) return experiment.path;
  return experiment.path.replace("../", "");
}

function renderRecent(container, data, fromLabFolder) {
  const featured = data.featured
    .map((id) => data.experiments.find((item) => item.id === id))
    .filter(Boolean);

  container.innerHTML = featured
    .map((item, index) => {
      const href = experimentHref(item, fromLabFolder);
      const n = String(index + 1).padStart(2, "0");
      return `<li>
        <a href="${href}">
          <span class="recent-idx">${n}</span>
          <span>
            <span class="recent-name">${item.name}</span>
            <span class="recent-short">${item.short}</span>
          </span>
          <span class="recent-meta">${item.category}</span>
        </a>
      </li>`;
    })
    .join("");
}

function renderGallery(container, experiments) {
  if (!experiments.length) {
    container.innerHTML = `<li class="empty-note">No experiments in this category yet.</li>`;
    return;
  }

  container.innerHTML = experiments
    .map((item) => {
      const uses = item.recommended_for.slice(0, 2).join(" · ");
      return `<li class="gallery-item">
        <div class="specimen" data-language="${item.visual_language}">
          <span>${item.visual_language}</span>
          <span>${item.category}</span>
        </div>
        <div class="gallery-body">
          <h2><a href="${item.path}">${item.name}</a></h2>
          <p>${item.short}</p>
          <div class="tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <div class="gallery-side">
          <span>${item.complexity} complexity</span>
          <span>${item.interaction}</span>
          <span>${uses}</span>
          <a href="${item.path}">Open</a>
        </div>
      </li>`;
    })
    .join("");
}

function initGallery(data) {
  const list = document.querySelector("[data-gallery]");
  const filters = document.querySelectorAll("[data-filter]");
  if (!list) return;

  const apply = (category) => {
    const next =
      category === "all"
        ? data.experiments
        : data.experiments.filter((item) => item.category === category);
    renderGallery(list, next);
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      apply(button.dataset.filter);
    });
  });

  const requested = new URLSearchParams(location.search).get("category");
  const start =
    document.querySelector(`[data-filter="${requested}"]`) ||
    document.querySelector('[data-filter="all"]');
  if (start) {
    filters.forEach((other) => other.setAttribute("aria-pressed", "false"));
    start.setAttribute("aria-pressed", "true");
    apply(start.dataset.filter);
  } else {
    apply("all");
  }
}

function initLanguageSwitcher() {
  const sheet = document.getElementById("language-sheet");
  const buttons = document.querySelectorAll("[data-lang]");
  if (!sheet || !buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      sheet.href = `../tokens/languages/${button.dataset.lang}.css`;
      buttons.forEach((other) => other.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
    });
  });
}

async function boot() {
  const root = document.body;
  const indexUrl = root.dataset.indexUrl;
  initLanguageSwitcher();

  if (!indexUrl) return;

  try {
    const data = await loadIndex(indexUrl);
    const recent = document.querySelector("[data-recent]");
    if (recent) {
      renderRecent(recent, data, root.dataset.fromLab === "true");
    }
    initGallery(data);
  } catch (error) {
    const recent = document.querySelector("[data-recent]");
    if (recent) {
      recent.innerHTML = `<li class="empty-note">Serve the lab over HTTP to load experiments. <code>python3 -m http.server 8080</code></li>`;
    }
    const gallery = document.querySelector("[data-gallery]");
    if (gallery) {
      gallery.innerHTML = `<li class="empty-note">Serve the lab over HTTP to load the index. <code>python3 -m http.server 8080</code></li>`;
    }
    console.warn(error);
  }
}

boot();

(() => {
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const themes = Array.isArray(window.THEME_DATA) ? window.THEME_DATA : [];
  const storageKey = "law-index-reader-state-v1";

  const $ = (selector) => document.querySelector(selector);
  const pad = (value) => String(value).padStart(2, "0");
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const defaultSaved = articles.filter((article) => article.initialSaved).map((article) => article.id);
  const defaultRead = articles.filter((article) => article.initialRead).map((article) => article.id);
  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (_) {
    stored = {};
  }

  const state = {
    view: "all",
    search: "",
    field: "all",
    type: "all",
    topic: "all",
    sort: "collected",
    saved: new Set(Array.isArray(stored.saved) ? stored.saved : defaultSaved),
    read: new Set(Array.isArray(stored.read) ? stored.read : defaultRead)
  };

  const saveState = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        saved: [...state.saved],
        read: [...state.read]
      }));
    } catch (_) {
      // Private browsing can reject storage; the page still works for this session.
    }
  };

  const tagMarkup = (article, limit = 4) => {
    const tags = [
      `<span class="tag type-tag${article.isPrimary ? " primary-tag" : ""}">${escapeHtml(article.typeLabel)}</span>`,
      ...article.themes.slice(0, limit - 1).map((theme) => `<span class="tag">${escapeHtml(theme)}</span>`)
    ];
    return tags.join("");
  };

  const findArticle = (id) => articles.find((article) => article.id === id);

  const buttonStateLabel = (article, action) => {
    if (action === "save") return state.saved.has(article.id) ? "保存を解除" : "保存";
    return state.read.has(article.id) ? "未読に戻す" : "既読にする";
  };

  const renderFeatured = () => {
    const featured = articles.find((article) => article.collected === "2026-09-01") || articles[0];
    if (!featured) return;
    $("#featuredArticle").innerHTML = `
      <div class="featured-main">
        <div class="article-number">${escapeHtml(featured.id)} / ${escapeHtml(featured.typeLabel)}</div>
        <h3 class="featured-title"><button type="button" data-open-detail="${escapeHtml(featured.id)}">${escapeHtml(featured.title)}</button></h3>
        <p class="featured-deck">${escapeHtml(featured.overview.join("。"))}。</p>
        <div class="meta-line">
          <span>${escapeHtml(featured.author)}</span>
          <span>${escapeHtml(featured.source)}</span>
          <span>公開 ${escapeHtml(featured.published)}</span>
          <span>${escapeHtml(featured.duration)}</span>
        </div>
        <div class="tag-row">${tagMarkup(featured)}</div>
        <div class="featured-actions">
          <a class="primary-button" href="${escapeHtml(featured.url)}" target="_blank" rel="noopener noreferrer">原文を読む <span>↗</span></a>
          <button class="secondary-button${state.saved.has(featured.id) ? " is-active" : ""}" type="button" data-action="save" data-id="${escapeHtml(featured.id)}"><span class="heart">${state.saved.has(featured.id) ? "♥" : "♡"}</span> ${buttonStateLabel(featured, "save")}</button>
          <button class="secondary-button${state.read.has(featured.id) ? " is-active" : ""}" type="button" data-action="read" data-id="${escapeHtml(featured.id)}">${state.read.has(featured.id) ? "✓ 既読" : "○ 未読"}</button>
        </div>
      </div>
      <div class="featured-side">
        <div>
          <span class="side-label">この記事で扱っていること</span>
          <ul class="subject-list">${featured.overview.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div class="structure-block">
          <span class="side-label">原文の構成</span>
          <ol class="structure-list">${featured.structure.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
        </div>
      </div>`;
  };

  const renderArticleRow = (article) => {
    const isSaved = state.saved.has(article.id);
    const isRead = state.read.has(article.id);
    return `
      <article class="article-row${isRead ? " is-read" : ""}">
        <div class="article-date">${escapeHtml(article.collected)}<br /><span>${isRead ? "READ" : "UNREAD"}</span></div>
        <div class="article-main">
          <button class="article-title-button" type="button" data-open-detail="${escapeHtml(article.id)}">${escapeHtml(article.title)}</button>
          <p class="article-deck">${escapeHtml(article.overview.slice(0, 2).join(" / "))}</p>
          <div class="article-tags">${tagMarkup(article, 3)}</div>
        </div>
        <div class="article-source"><strong>${escapeHtml(article.author)}</strong>${escapeHtml(article.source)}<br />公開 ${escapeHtml(article.published)}</div>
        <div class="article-duration">${escapeHtml(article.field)}<br />${escapeHtml(article.duration)}</div>
        <div class="article-actions">
          <button class="icon-button read-button${isRead ? " is-active" : ""}" type="button" data-action="read" data-id="${escapeHtml(article.id)}" aria-label="${buttonStateLabel(article, "read")}" title="${buttonStateLabel(article, "read")}">${isRead ? "✓" : "○"}</button>
          <button class="icon-button${isSaved ? " is-active" : ""}" type="button" data-action="save" data-id="${escapeHtml(article.id)}" aria-label="${buttonStateLabel(article, "save")}" title="${buttonStateLabel(article, "save")}">${isSaved ? "♥" : "♡"}</button>
        </div>
      </article>`;
  };

  const renderDialog = (article) => `
    <div class="dialog-kicker">${escapeHtml(article.id)} / ${escapeHtml(article.typeLabel)} / ${escapeHtml(article.field)}</div>
    <h2 id="dialogTitle" class="dialog-title">${escapeHtml(article.title)}</h2>
    <div class="meta-line"><span>${escapeHtml(article.author)}</span><span>${escapeHtml(article.source)}</span><span>公開 ${escapeHtml(article.published)}</span><span>収集 ${escapeHtml(article.collected)}</span></div>
    <div class="tag-row">${tagMarkup(article)}</div>
    <p class="dialog-deck">${escapeHtml(article.overview.join("。"))}。</p>
    <div class="dialog-section"><h3>この記事で扱っていること</h3><ul>${article.overview.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
    <div class="dialog-section"><h3>原文の構成</h3><ul>${article.structure.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
    <div class="dialog-section"><h3>${escapeHtml(article.relation.label)}</h3><p class="dialog-deck">${escapeHtml(article.relation.note)}</p>${article.primarySource ? `<a class="text-button" href="${escapeHtml(article.primarySource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.primarySource.label)}へ →</a>` : ""}</div>
    <div class="dialog-footer"><a class="primary-button" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">原文を読む <span>↗</span></a><button class="secondary-button" type="button" data-action="save" data-id="${escapeHtml(article.id)}"><span class="heart">${state.saved.has(article.id) ? "♥" : "♡"}</span> ${buttonStateLabel(article, "save")}</button></div>`;

  const renderSelectOptions = () => {
    const fields = [...new Set(articles.map((article) => article.field))].sort((a, b) => a.localeCompare(b, "ja"));
    const types = [...new Map(articles.map((article) => [article.type, article.typeLabel])).entries()];
    $("#fieldFilter").insertAdjacentHTML("beforeend", fields.map((field) => `<option value="${escapeHtml(field)}">${escapeHtml(field)}</option>`).join(""));
    $("#typeFilter").insertAdjacentHTML("beforeend", types.map(([type, label]) => `<option value="${escapeHtml(type)}">${escapeHtml(label)}</option>`).join(""));
  };

  const renderTopics = () => {
    const topicNames = [...new Set(articles.flatMap((article) => article.themes))].slice(0, 9);
    $("#topicFilters").innerHTML = `<button class="topic-chip${state.topic === "all" ? " is-active" : ""}" type="button" data-topic="all">すべて</button>${topicNames.map((topic) => `<button class="topic-chip${state.topic === topic ? " is-active" : ""}" type="button" data-topic="${escapeHtml(topic)}">${escapeHtml(topic)}</button>`).join("")}`;
  };

  const renderThemes = () => {
    $("#themeGrid").innerHTML = themes.map((theme, index) => `
      <button class="theme-card" type="button" data-topic="${escapeHtml(theme.name)}">
        <span class="theme-index">${pad(index + 1)} / TOPIC</span>
        <span class="theme-name">${escapeHtml(theme.name)}</span>
        <span class="theme-meta">${escapeHtml(theme.note)} · ${pad(theme.count)}本</span>
      </button>`).join("");
  };

  const filteredArticles = () => {
    const needle = state.search.trim().toLocaleLowerCase();
    const output = articles.filter((article) => {
      const searchable = [article.title, article.author, article.source, article.field, ...article.themes].join(" ").toLocaleLowerCase();
      const matchesSearch = !needle || searchable.includes(needle);
      const matchesField = state.field === "all" || article.field === state.field;
      const matchesType = state.type === "all" || article.type === state.type;
      const matchesTopic = state.topic === "all" || article.themes.includes(state.topic);
      const matchesView = state.view === "all" || (state.view === "unread" && !state.read.has(article.id)) || (state.view === "saved" && state.saved.has(article.id)) || (state.view === "primary" && article.isPrimary);
      return matchesSearch && matchesField && matchesType && matchesTopic && matchesView;
    });
    return output.sort((a, b) => {
      if (state.sort === "importance") return b.importance - a.importance || b.collected.localeCompare(a.collected);
      if (state.sort === "published") return b.published.localeCompare(a.published);
      return b.collected.localeCompare(a.collected) || a.id.localeCompare(b.id);
    });
  };

  const renderStats = (visibleCount) => {
    const unread = articles.filter((article) => !state.read.has(article.id)).length;
    const saved = articles.filter((article) => state.saved.has(article.id)).length;
    const primary = articles.filter((article) => article.isPrimary).length;
    $("#navArticleCount").textContent = pad(articles.length);
    $("#statusArticleCount").textContent = pad(articles.length);
    $("#headingArticleCount").textContent = `${pad(articles.length)}本`;
    $("#allTabCount").textContent = pad(articles.length);
    $("#unreadTabCount").textContent = pad(unread);
    $("#savedTabCount").textContent = pad(saved);
    $("#primaryTabCount").textContent = pad(primary);
    $("#visibleArticleCount").textContent = pad(visibleCount);
    $("#asidePrimaryCount").textContent = pad(primary);
    $("#asideSavedCount").textContent = pad(saved);
  };

  const viewLabel = { all: "全記事", unread: "未読記事", saved: "保存済み", primary: "一次資料" };
  const render = () => {
    const visible = filteredArticles();
    $("#articleList").innerHTML = visible.map(renderArticleRow).join("");
    $("#articleList").hidden = visible.length === 0;
    $("#emptyState").hidden = visible.length !== 0;
    $("#resultsLabel").textContent = `${viewLabel[state.view]}を表示中 / ${visible.length}件`;
    $("#searchInput").value = state.search;
    $("#fieldFilter").value = state.field;
    $("#typeFilter").value = state.type;
    $("#sortSelect").value = state.sort;
    document.querySelectorAll(".tab-button").forEach((button) => {
      const active = button.dataset.view === state.view;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    renderTopics();
    renderThemes();
    renderStats(visible.length);
    renderFeatured();
  };

  let toastTimer;
  const showToast = (message) => {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2100);
  };

  const openDialog = (article) => {
    if (!article) return;
    $("#dialogContent").innerHTML = renderDialog(article);
    $("#articleDialog").hidden = false;
    document.body.style.overflow = "hidden";
    $(".dialog-close").focus();
  };
  const closeDialog = () => {
    $("#articleDialog").hidden = true;
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-view]");
    if (tab) {
      state.view = tab.dataset.view;
      render();
      return;
    }
    const topic = event.target.closest("[data-topic]");
    if (topic) {
      state.topic = topic.dataset.topic;
      render();
      return;
    }
    const open = event.target.closest("[data-open-detail]");
    if (open) {
      openDialog(findArticle(open.dataset.openDetail));
      return;
    }
    const action = event.target.closest("[data-action]");
    if (action) {
      const article = findArticle(action.dataset.id);
      if (!article) return;
      if (action.dataset.action === "save") {
        state.saved.has(article.id) ? state.saved.delete(article.id) : state.saved.add(article.id);
        saveState();
        showToast(state.saved.has(article.id) ? "保存しました" : "保存から外しました");
      }
      if (action.dataset.action === "read") {
        state.read.has(article.id) ? state.read.delete(article.id) : state.read.add(article.id);
        saveState();
        showToast(state.read.has(article.id) ? "既読にしました" : "未読に戻しました");
      }
      render();
      if (!$("#articleDialog").hidden) openDialog(article);
      return;
    }
    if (event.target.closest("[data-close-dialog]") || event.target === $("#articleDialog")) closeDialog();
    if (event.target.closest("#clearFilters") || event.target.closest("#emptyClear")) {
      state.search = "";
      state.field = "all";
      state.type = "all";
      state.topic = "all";
      state.sort = "collected";
      state.view = "all";
      render();
    }
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  $("#fieldFilter").addEventListener("change", (event) => { state.field = event.target.value; render(); });
  $("#typeFilter").addEventListener("change", (event) => { state.type = event.target.value; render(); });
  $("#sortSelect").addEventListener("change", (event) => { state.sort = event.target.value; render(); });
  $("[data-focus-search]").addEventListener("click", () => { $("#searchInput").focus(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "SELECT") {
      event.preventDefault();
      $("#searchInput").focus();
    }
    if (event.key === "Escape" && !$("#articleDialog").hidden) closeDialog();
  });

  renderSelectOptions();
  render();
})();

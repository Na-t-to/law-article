(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((article) => article.status === "adopted");
  const collection = window.COLLECTION_STATUS || window.COLLECTION_META || {};
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const pad = (value) => String(value).padStart(2, "0");
  let selectedField = "all";

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const topicBySlug = (slug) => topics.find((topic) => topic.slug === slug);
  const latestUpdateFor = (topic) => updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topicBySlug(slug)).filter(Boolean);
  const topicNamesForArticle = (article) => topicsForArticle(article).map((topic) => topic.title);
  const issueTitlesForArticle = (article) => article.relatedIssues.map((id) => topics.flatMap((topic) => topic.issues).find((issue) => issue.id === id)?.title).filter(Boolean);
  const reformInfoForArticle = (article) => window.getLegalReformInfo?.(article, topics) || { isReform: false, stage: null, stageLabel: "" };
  const changeSummaryForArticle = (article) => {
    if (article.whatChanged) return article.whatChanged;
    const update = updates.filter((item) => article.primarySourceIds.includes(item.source) && item.affectedTopics.some((slug) => article.relatedTopics.includes(slug))).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
    if (update) return update.whatChanged;
    const issues = issueTitlesForArticle(article);
    return issues.length ? `整理変更なし／「${issues.slice(0, 2).join("」「")}」の参考資料を追加` : "整理変更なし／関連テーマの参考資料を追加";
  };

  const renderHomeArticles = () => {
    const recent = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 5);
    $("#homeArticleList").innerHTML = recent.map((article) => `<article class="article-row"><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time><div class="article-main-cell"><a class="article-title-link" href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><div class="article-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html">${escapeHtml(topic.title)} →</a>`).join("")}</div><a class="article-impact" href="article.html?id=${encodeURIComponent(article.id)}">${escapeHtml(changeSummaryForArticle(article))}</a></article>`).join("");
  };

  const renderTopicList = () => {
    const visibleTopics = topics.filter((topic) => selectedField === "all" || topic.categories.includes(selectedField)).sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));
    $("#topicList").innerHTML = visibleTopics.length ? visibleTopics.map((topic) => {
      const latest = latestUpdateFor(topic);
      return `<a class="topic-row" href="topics/${escapeHtml(topic.slug)}.html"><div class="topic-name-cell"><div class="topic-name-line"><strong>${escapeHtml(topic.title)}</strong>${topic.isNew ? `<span class="new-badge">NEW</span>` : ""}</div><div class="topic-categories">${topic.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join(" / ")}</div></div><div class="topic-stat"><strong>${pad(topic.issues.length)}</strong><span>論点</span></div><div class="topic-stat"><strong>${pad(topic.sourceIds.length)}</strong><span>主要資料</span></div><div class="topic-change"><strong>最終更新 <time datetime="${escapeHtml(topic.lastUpdated)}">${escapeHtml(topic.lastUpdated)}</time></strong><small>${latest ? escapeHtml(latest.headline) : ""}</small></div></a>`;
    }).join("") : `<div class="empty-inline">この分野のテーマはまだ登録されていません。</div>`;
    document.querySelectorAll("[data-field]").forEach((button) => button.classList.toggle("is-active", button.dataset.field === selectedField));
  };

  const renderReforms = () => {
    const reforms = articles.map((article) => ({ article, reform: reformInfoForArticle(article) })).filter(({ reform }) => reform.isReform).sort((left, right) => right.article.publishedAt.localeCompare(left.article.publishedAt)).slice(0, 6);
    $("#reformList").innerHTML = reforms.length ? reforms.map(({ article, reform }) => `<article class="reform-row"><span class="reform-stage" data-stage="${escapeHtml(reform.stage)}">${escapeHtml(reform.stageLabel)}</span><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time><div class="reform-main-cell"><a href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><div class="reform-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html">${escapeHtml(topic.title)} →</a>`).join("")}</div></article>`).join("") : `<div class="empty-inline">法改正に該当する記事・資料はまだありません。</div>`;
  };

  const renderFieldFilters = () => {
    const fieldOrder = ["すべて", "AI・デジタル", "個人情報", "労務", "契約", "消費者法", "情報セキュリティ", "会社法", "知的財産"];
    $("#fieldFilters").innerHTML = fieldOrder.map((field, index) => {
      const value = field === "すべて" ? "all" : field;
      const count = field === "すべて" ? topics.length : topics.filter((topic) => topic.categories.includes(field)).length;
      return `<button class="field-filter${selectedField === value ? " is-active" : ""}" type="button" data-field="${escapeHtml(value)}"><span>${escapeHtml(field)}</span><small>${pad(count)}</small></button>`;
    }).join("");
  };

  const searchResults = (value) => {
    const needle = value.trim().toLocaleLowerCase();
    if (!needle) return [];
    const topicMatches = topics.filter((topic) => {
      const issues = topic.issues.map((issue) => [issue.title, issue.conclusion, issue.exception, issue.uncertain, issue.views.map((view) => `${view.label} ${view.summary}`).join(" ")].join(" ")).join(" ");
      return [topic.title, topic.summary, topic.categories.join(" "), topic.overview.join(" "), issues, topic.practicalImpacts.join(" ")].join(" ").toLocaleLowerCase().includes(needle);
    }).map((topic) => ({ kind: "テーマ", title: topic.title, detail: `${topic.categories.join(" / ")} · ${topic.issues.length}論点`, href: `topics/${topic.slug}.html` }));
    const sourceMatches = sources.filter((source) => [source.title, source.authority, source.typeLabel, source.whyImportant].join(" ").toLocaleLowerCase().includes(needle)).map((source) => ({ kind: "資料", title: source.title, detail: `${source.authority} / ${source.typeLabel}`, href: source.url, external: true }));
    const articleMatches = articles.filter((article) => [article.title, article.publisher, article.summary, article.categories.join(" "), article.audience.join(" "), topicNamesForArticle(article).join(" ")].join(" ").toLocaleLowerCase().includes(needle)).map((article) => ({ kind: "記事・資料", title: article.title, detail: `${article.publisher} / ${article.sourceLabel}`, href: `article.html?id=${encodeURIComponent(article.id)}` }));
    const updateMatches = updates.filter((update) => [update.headline, update.summary, update.whatChanged, update.tags.join(" "), update.keyPoints.join(" ")].join(" ").toLocaleLowerCase().includes(needle)).map((update) => ({ kind: "更新", title: update.headline, detail: `${update.publishedAt} / ${update.typeLabel}`, href: `update.html?id=${encodeURIComponent(update.id)}` }));
    return [...articleMatches, ...topicMatches, ...updateMatches, ...sourceMatches].slice(0, 8);
  };

  const renderSearch = () => {
    const panel = $("#searchPanel");
    const value = $("#globalSearch").value;
    if (!value.trim()) { panel.hidden = true; panel.innerHTML = ""; return; }
    const results = searchResults(value);
    panel.hidden = false;
    panel.innerHTML = `<div class="search-panel-head"><span>検索結果</span><span>${results.length}件</span></div>${results.length ? results.map((result) => `<a class="search-result" href="${escapeHtml(result.href)}"${result.external ? ' target="_blank" rel="noopener noreferrer"' : ""}><span><strong>${escapeHtml(result.title)}</strong><small>${escapeHtml(result.detail)}</small></span><em>${escapeHtml(result.kind)} ↗</em></a>`).join("") : `<p class="search-empty">該当するテーマ・資料がありません。</p>`}`;
  };

  document.addEventListener("click", (event) => {
    const field = event.target.closest("[data-field]");
    if (field) { selectedField = field.dataset.field; renderFieldFilters(); renderTopicList(); return; }
    if (!event.target.closest(".search-section")) $("#searchPanel").hidden = true;
  });
  $("#globalSearch").addEventListener("input", renderSearch);
  $("[data-focus-search]").addEventListener("click", () => $("#globalSearch").focus());
  document.addEventListener("keydown", (event) => { if (event.key === "/" && document.activeElement.tagName !== "INPUT") { event.preventDefault(); $("#globalSearch").focus(); } if (event.key === "Escape") $("#searchPanel").hidden = true; });

  $("#topicCount").textContent = `${pad(topics.length)}テーマ`;
  if (collection.lastCollectedAt) {
    const last = new Date(collection.lastCollectedAt);
    $("#lastCollected").textContent = `最終収集 ${String(last.getMonth() + 1).padStart(2, "0")}.${String(last.getDate()).padStart(2, "0")} ${String(last.getHours()).padStart(2, "0")}:${String(last.getMinutes()).padStart(2, "0")}`;
  }
  $("#adoptedCount").textContent = `採用 ${pad(articles.length)}件`;
  renderHomeArticles();
  renderFieldFilters();
  renderTopicList();
  renderReforms();
})();

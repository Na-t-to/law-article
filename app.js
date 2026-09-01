(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const pad = (value) => String(value).padStart(2, "0");
  const topicBySlug = (slug) => topics.find((topic) => topic.slug === slug);
  let selectedField = "all";

  const latestUpdateFor = (topic) => updates.filter((update) => update.topic === topic.slug).sort((a, b) => b.date.localeCompare(a.date))[0];
  const topicCard = (topic, index, options = {}) => {
    const latest = latestUpdateFor(topic);
    return `<a class="topic-card" href="topics/${escapeHtml(topic.slug)}.html">
      <span class="topic-code">${pad(index + 1)} / TOPIC</span>
      <div><h3 class="topic-title">${escapeHtml(topic.title)}</h3><div class="topic-categories">${topic.categories.map((category) => `<span class="category-chip">${escapeHtml(category)}</span>`).join("")}</div></div>
      <p class="topic-summary">${escapeHtml(topic.summary)}</p>
      <div class="topic-status"><strong>${escapeHtml(topic.lastUpdated)}</strong> 最終更新${latest ? `<span class="status-badge">${escapeHtml(latest.typeLabel)}</span>` : ""}</div>
    </a>`;
  };

  const renderRecentTopics = () => {
    const filtered = topics.filter((topic) => selectedField === "all" || topic.categories.includes(selectedField));
    const ordered = [...filtered].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));
    $("#recentTopics").innerHTML = ordered.map((topic, index) => topicCard(topic, index)).join("");
    if (!ordered.length) $("#recentTopics").innerHTML = `<div class="empty-inline">この分野のテーマはまだ登録されていません。</div>`;
    document.querySelectorAll("[data-field]").forEach((button) => button.classList.toggle("is-active", button.dataset.field === selectedField));
  };

  const renderNewTopics = () => {
    const newTopics = topics.filter((topic) => topic.isNew);
    $("#newTopics").innerHTML = newTopics.map((topic) => `<a class="new-topic-card" href="topics/${escapeHtml(topic.slug)}.html"><div><div class="topic-code">NEW / ${escapeHtml(topic.lastUpdated)}</div><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.summary)}</p></div><div class="new-topic-meta"><span>${topic.categories.map(escapeHtml).join(" · ")}</span><span>テーマを見る →</span></div></a>`).join("");
    if (!newTopics.length) $("#newTopics").innerHTML = `<div class="empty-inline">新規テーマはありません。</div>`;
  };

  const renderFields = () => {
    const fieldCounts = new Map();
    topics.flatMap((topic) => topic.categories).forEach((field) => fieldCounts.set(field, (fieldCounts.get(field) || 0) + 1));
    const fields = ["個人情報", "AI・デジタル", "労務", "契約", "消費者法", "情報セキュリティ", "会社法", "知的財産"];
    $("#fieldGrid").innerHTML = fields.map((field, index) => `<button class="field-card${selectedField === field ? " is-active" : ""}" type="button" data-field="${escapeHtml(field)}"><span>${pad(index + 1)} / FIELD</span><strong>${escapeHtml(field)}</strong><small>${pad(fieldCounts.get(field) || 0)}テーマを確認 →</small></button>`).join("");
  };

  const sourceImportance = { "最高": 0, "高": 1, "中": 2 };
  const renderSources = () => {
    const selected = [...sources].sort((a, b) => (sourceImportance[a.importance] ?? 9) - (sourceImportance[b.importance] ?? 9) || b.publishedAt.localeCompare(a.publishedAt)).slice(0, 6);
    $("#importantSources").innerHTML = selected.map((source) => `<tr><td><strong class="source-title">${escapeHtml(source.title)}</strong><span class="source-authority">${escapeHtml(source.authority)}</span></td><td><span class="source-type">${escapeHtml(source.typeLabel)}</span></td><td><span class="source-date">${escapeHtml(source.publishedAt)}<br />重要度 ${escapeHtml(source.importance)}</span></td><td><p class="source-reason">${escapeHtml(source.whyImportant)}</p></td><td><a class="source-link" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(source.title)}を開く">↗</a></td></tr>`).join("");
  };

  const renderDates = () => {
    $("#importantDates").innerHTML = `<div class="date-card is-placeholder"><div class="date-label"><span>NO REGISTERED DATE</span><span>—</span></div><h3>現時点で登録された近日重要日程はありません</h3><p>施行日やパブリックコメント期限など、テーマの理解に影響する日付が確認できた場合だけ表示します。</p></div>`;
  };

  const resultMatches = (needle) => {
    const normalized = needle.trim().toLocaleLowerCase();
    if (!normalized) return [];
    const topicResults = topics.filter((topic) => {
      const issueText = topic.issues.map((issue) => [issue.title, issue.conclusion, issue.exception, issue.uncertain].join(" ")).join(" ");
      const practicalText = topic.practicalImpacts.join(" ");
      return [topic.title, topic.summary, topic.categories.join(" "), topic.overview.join(" "), issueText, practicalText].join(" ").toLocaleLowerCase().includes(normalized);
    }).map((topic) => ({ kind: "テーマ", title: topic.title, detail: `${topic.categories.join(" / ")} · ${topic.issues.length}論点`, href: `topics/${topic.slug}.html` }));
    const sourceResults = sources.filter((source) => [source.title, source.authority, source.typeLabel].join(" ").toLocaleLowerCase().includes(normalized)).map((source) => ({ kind: "資料", title: source.title, detail: `${source.authority} · ${source.typeLabel}`, href: source.url, external: true }));
    return [...topicResults, ...sourceResults].slice(0, 7);
  };

  const renderSearch = () => {
    const value = $("#globalSearch").value;
    const panel = $("#searchPanel");
    if (!value.trim()) { panel.hidden = true; panel.innerHTML = ""; return; }
    const results = resultMatches(value);
    panel.hidden = false;
    panel.innerHTML = `<div class="search-panel-head"><span>KNOWLEDGE SEARCH</span><span>${results.length}件</span></div>${results.length ? results.map((result) => `<a class="search-result" href="${escapeHtml(result.href)}"${result.external ? ' target="_blank" rel="noopener noreferrer"' : ""}><span><strong>${escapeHtml(result.title)}</strong><small>${escapeHtml(result.detail)}</small></span><span class="search-result-type">${escapeHtml(result.kind)} ↗</span></a>`).join("") : `<div class="search-empty">該当するテーマ・資料がありません。検索語を変えてみてください。</div>`}`;
  };

  const renderStats = () => {
    $("#navTopicCount").textContent = pad(topics.length);
    $("#statusTopicCount").textContent = pad(topics.length);
    $("#statusSourceCount").textContent = pad(sources.length);
  };

  $("#globalSearch").addEventListener("input", renderSearch);
  $("[data-focus-search]").addEventListener("click", () => { $("#globalSearch").focus(); });
  document.addEventListener("click", (event) => {
    const field = event.target.closest("[data-field]");
    if (field) {
      selectedField = selectedField === field.dataset.field ? "all" : field.dataset.field;
      renderFields();
      renderRecentTopics();
      document.querySelector("#topics").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (!event.target.closest(".search-zone")) $("#searchPanel").hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") { event.preventDefault(); $("#globalSearch").focus(); }
    if (event.key === "Escape") $("#searchPanel").hidden = true;
  });

  renderRecentTopics();
  renderNewTopics();
  renderFields();
  renderSources();
  renderDates();
  renderStats();
})();

(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const pad = (value) => String(value).padStart(2, "0");
  let selectedField = "all";

  const topicBySlug = (slug) => topics.find((topic) => topic.slug === slug);
  const sourceById = (id) => sources.find((source) => source.id === id);
  const issueById = (topicSlug, issueId) => topicBySlug(topicSlug)?.issues.find((issue) => issue.id === issueId);
  const latestUpdateFor = (topic) => updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];

  const renderTopicList = () => {
    const visibleTopics = topics.filter((topic) => selectedField === "all" || topic.categories.includes(selectedField)).sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));
    $("#topicList").innerHTML = visibleTopics.length ? visibleTopics.map((topic) => {
      const latest = latestUpdateFor(topic);
      return `<a class="topic-row" href="topics/${escapeHtml(topic.slug)}.html"><div class="topic-name-cell"><div class="topic-name-line"><strong>${escapeHtml(topic.title)}</strong>${topic.isNew ? `<span class="new-badge">NEW</span>` : ""}</div><div class="topic-categories">${topic.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join(" / ")}</div></div><div class="topic-stat"><strong>${pad(topic.issues.length)}</strong><span>論点</span></div><div class="topic-stat"><strong>${pad(topic.sourceIds.length)}</strong><span>主要資料</span></div><div class="topic-change"><strong>最終更新 <time datetime="${escapeHtml(topic.lastUpdated)}">${escapeHtml(topic.lastUpdated)}</time></strong><small>${latest ? escapeHtml(latest.headline) : ""}</small></div></a>`;
    }).join("") : `<div class="empty-inline">この分野のテーマはまだ登録されていません。</div>`;
    document.querySelectorAll("[data-field]").forEach((button) => button.classList.toggle("is-active", button.dataset.field === selectedField));
  };

  const renderFieldFilters = () => {
    const fieldOrder = ["すべて", "AI・デジタル", "個人情報", "労務", "契約", "消費者法", "情報セキュリティ", "会社法", "知的財産"];
    $("#fieldFilters").innerHTML = fieldOrder.map((field, index) => {
      const value = field === "すべて" ? "all" : field;
      const count = field === "すべて" ? topics.length : topics.filter((topic) => topic.categories.includes(field)).length;
      return `<button class="field-filter${selectedField === value ? " is-active" : ""}" type="button" data-field="${escapeHtml(value)}"><span>${escapeHtml(field)}</span><small>${pad(count)}</small></button>`;
    }).join("");
  };

  const renderChanges = () => {
    const recent = [...updates].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, 4);
    $("#recentChanges").innerHTML = recent.map((update) => {
      const source = sourceById(update.source);
      const primaryTopic = topicBySlug(update.affectedTopics[0]);
      const firstAffected = update.affectedIssues[0];
      const firstIssue = firstAffected ? issueById(firstAffected.topic, firstAffected.issue) : null;
      const issuePreview = firstIssue ? `「${firstIssue.title}」${update.affectedIssues.length > 1 ? `ほか${update.affectedIssues.length - 1}件` : ""}の整理を更新` : update.whatChanged;
      const issueRows = update.affectedIssues.map((affected) => {
        const affectedTopic = topicBySlug(affected.topic);
        const issue = issueById(affected.topic, affected.issue);
        return `<a class="update-issue-row" href="topics/${escapeHtml(affected.topic)}.html#${escapeHtml(affected.issue)}"><span><strong>${escapeHtml(affectedTopic?.title || "")}</strong><small>${escapeHtml(issue?.title || affected.issue)}</small></span><span class="update-delta"><del>${escapeHtml(affected.before)}</del><b>→</b><ins>${escapeHtml(affected.after)}</ins></span></a>`;
      }).join("");
      const shortDate = update.publishedAt.slice(5).replace("-", ".");
      return `<details class="update-card"><summary class="update-summary-row"><time datetime="${escapeHtml(update.publishedAt)}">${escapeHtml(shortDate)}</time><div class="update-summary-main"><div class="update-kicker"><strong>${escapeHtml(source?.authority || "LAW / INDEX")}</strong><span>${update.tags.map(escapeHtml).join(" / ")}</span></div><h3>${escapeHtml(update.headline)}</h3><div class="update-topic-preview"><strong>${escapeHtml(primaryTopic?.title || "")}</strong><span>${escapeHtml(issuePreview)}</span></div></div><span class="update-toggle"><span class="when-closed">詳細を見る →</span><span class="when-open">閉じる ↑</span></span></summary><div class="update-expanded"><p class="update-expanded-summary">${escapeHtml(update.summary)}</p><div class="update-impact"><strong class="update-impact-title">変更前 / 変更後</strong>${issueRows}</div><div class="update-points"><strong>要点</strong><ul>${update.keyPoints.slice(0, 3).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul></div><div class="update-actions">${source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">元資料を読む ↗</a>` : ""}<a href="update.html?id=${encodeURIComponent(update.id)}">更新ページを開く</a>${primaryTopic ? `<a href="topics/${escapeHtml(primaryTopic.slug)}.html">テーマ全体を見る →</a>` : ""}</div></div></details>`;
    }).join("");
  };

  const searchResults = (value) => {
    const needle = value.trim().toLocaleLowerCase();
    if (!needle) return [];
    const topicMatches = topics.filter((topic) => {
      const issues = topic.issues.map((issue) => [issue.title, issue.conclusion, issue.exception, issue.uncertain].join(" ")).join(" ");
      return [topic.title, topic.summary, topic.categories.join(" "), topic.overview.join(" "), issues, topic.practicalImpacts.join(" ")].join(" ").toLocaleLowerCase().includes(needle);
    }).map((topic) => ({ kind: "テーマ", title: topic.title, detail: `${topic.categories.join(" / ")} · ${topic.issues.length}論点`, href: `topics/${topic.slug}.html` }));
    const sourceMatches = sources.filter((source) => [source.title, source.authority, source.typeLabel, source.whyImportant].join(" ").toLocaleLowerCase().includes(needle)).map((source) => ({ kind: "資料", title: source.title, detail: `${source.authority} / ${source.typeLabel}`, href: source.url, external: true }));
    const updateMatches = updates.filter((update) => [update.headline, update.summary, update.whatChanged, update.tags.join(" "), update.keyPoints.join(" ")].join(" ").toLocaleLowerCase().includes(needle)).map((update) => ({ kind: "更新", title: update.headline, detail: `${update.publishedAt} / ${update.typeLabel}`, href: `update.html?id=${encodeURIComponent(update.id)}` }));
    return [...topicMatches, ...updateMatches, ...sourceMatches].slice(0, 8);
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
  renderFieldFilters();
  renderTopicList();
  renderChanges();
})();

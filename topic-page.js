(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const topic = topics.find((item) => item.slug === document.body.dataset.topic);
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const sourceById = (id) => sources.find((source) => source.id === id);

  if (!topic) {
    $("#topicPage").innerHTML = `<div class="missing-topic"><h1>このテーマはまだ登録されていません。</h1><a class="back-link" href="../index.html">← テーマ一覧へ戻る</a></div>`;
    return;
  }

  const sourceLinks = (ids) => ids.map((id) => {
    const source = sourceById(id);
    return source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>` : "";
  }).join("");

  const renderCurrent = () => {
    const summary = topic.currentSummary;
    const rows = [
      ["このテーマの要点", [...summary.facts, ...summary.interpretations], "key-points"],
      ["実務で見るところ", topic.practicalImpacts, "practical"],
      ["確認を続ける点", summary.uncertain, "watch-points"]
    ];
    return `<div class="current-list">${rows.map(([label, items, className]) => `<div class="current-row ${className || ""}"><h3>${escapeHtml(label)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}</div>`;
  };

  const renderIssues = () => `<div class="issue-list">${topic.issues.map((issue) => `<article class="issue-row" id="${escapeHtml(issue.id)}"><div class="issue-title"><h3>${escapeHtml(issue.title)}</h3></div><div class="issue-answer"><p><strong>この論点の要点</strong> ${escapeHtml(issue.conclusion)}</p><div class="issue-notes"><div><strong>検討時の条件</strong>${escapeHtml(issue.exception)}</div><div><strong>確認を続ける点</strong>${escapeHtml(issue.uncertain)}</div></div><div class="issue-sources"><strong>主な資料</strong>${sourceLinks(issue.sourceIds)}</div></div></article>`).join("")}</div>`;

  const renderSources = () => `<div class="source-list">${topic.sourceIds.map((id) => sourceById(id)).filter(Boolean).map((source) => `<a class="source-row" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><div><strong>${escapeHtml(source.title)}</strong><small>${escapeHtml(source.authority)}</small></div><span class="source-type">${escapeHtml(source.typeLabel)}</span><span class="source-date">公開 ${escapeHtml(source.publishedAt)}<br />重要度 ${escapeHtml(source.importance)}</span><span class="source-reason">${escapeHtml(source.whyImportant)}</span><span class="source-link">↗</span></a>`).join("")}</div>`;

  const renderHistory = () => {
    const history = updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    return `<div class="history-list">${history.map((update) => `<a class="history-row" href="../update.html?id=${encodeURIComponent(update.id)}"><time datetime="${escapeHtml(update.publishedAt)}">${escapeHtml(update.publishedAt)}</time><strong>${escapeHtml(update.typeLabel)}</strong><span><b>${escapeHtml(update.headline)}</b><small>${escapeHtml(update.whatChanged)}</small></span><em>→</em></a>`).join("")}</div>`;
  };

  document.title = `${topic.title} — 法務トピック知識ベース`;
  $("#topicPage").innerHTML = `<section class="detail-hero"><div class="detail-meta"><strong>最終確認 <time datetime="${escapeHtml(topic.lastVerified || topic.lastUpdated)}">${escapeHtml(topic.lastVerified || topic.lastUpdated)}</time></strong><span>${topic.categories.map(escapeHtml).join(" / ")}</span><span>${topic.issues.length}論点</span><span>${topic.sourceIds.length}主要資料</span></div><h1>${escapeHtml(topic.title)}</h1><p class="detail-summary">${escapeHtml(topic.summary)}</p></section><div class="detail-main"><section class="detail-section"><h2>テーマの要点</h2>${renderCurrent()}<p class="disclaimer">このページは、関連資料を論点別にたどるための索引です。個別案件への法的助言や、法的結論の保証を目的としません。</p></section><section class="detail-section"><h2>論点</h2>${renderIssues()}</section><section class="detail-section"><h2>主要資料</h2>${renderSources()}</section><section class="detail-section"><h2>更新履歴</h2>${renderHistory()}</section><a class="back-link" href="../index.html#topics">← テーマ一覧へ戻る</a></div>`;
})();

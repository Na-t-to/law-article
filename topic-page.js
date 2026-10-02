(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((item) => item.status === "adopted");
  const topic = topics.find((item) => item.slug === document.body.dataset.topic);
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const sourceById = (id) => sources.find((source) => source.id === id);
  const articleById = (id) => allArticles.find((article) => article.id === id);
  const articleOrder = new Map(articles.map((article, index) => [article.id, index]));
  const schema = window.KNOWLEDGE_SCHEMA || { issueStatus: {}, issueStage: {} };

  window.assertKnowledgeData?.(topics, sources, allArticles);

  if (!topic) {
    $("#topicPage").innerHTML = `<div class="missing-topic"><h1>このテーマはまだ登録されていません。</h1><a class="back-link" href="../topics.html">← テーマ一覧へ戻る</a></div>`;
    return;
  }

  const sourceLinks = (ids) => ids.map((id) => {
    const source = sourceById(id);
    return source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>` : "";
  }).join("");

  const renderViewLinks = (view) => {
    const sourceItems = view.sourceIds.map((id) => sourceById(id)).filter(Boolean).map((source) => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>`);
    const articleItems = view.articleIds.map((id) => articleById(id)).filter(Boolean).map((article) => `<a href="../article.html?id=${encodeURIComponent(article.id)}">${escapeHtml(article.publisher)}</a>`);
    return [...sourceItems, ...articleItems].join("");
  };

  const renderViews = (issue) => issue.views.length ? `<div class="issue-views"><strong>見解の分岐</strong>${issue.views.map((view) => `<div class="issue-view-row"><h4>${escapeHtml(view.label)}</h4><div><p>${escapeHtml(view.summary)}</p><div class="issue-view-links">${renderViewLinks(view)}</div></div></div>`).join("")}</div>` : "";

  const renderCurrent = () => {
    const summary = topic.currentSummary || {};
    const items = (value) => Array.isArray(value) ? value : [];
    const practical = [...new Set([...items(summary.implications), ...items(topic.practicalImpacts)])];
    const rows = [
      ["一次資料に基づく事実", items(summary.facts), "key-points"],
      ["解釈・整理", items(summary.interpretations), "interpretations"],
      ["実務で見るところ", practical, "practical"],
      ["確認を続ける点", items(summary.uncertain), "watch-points"]
    ];
    return `<div class="current-list">${rows.filter(([, entries]) => entries.length).map(([label, entries, className]) => `<div class="current-row ${className || ""}"><h3>${escapeHtml(label)}</h3><ul>${entries.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}</div>`;
  };

  const issueAliases = window.TOPIC_ISSUE_ALIASES?.[topic.slug] || {};
  const legacyIssueAnchors = (issue) => Object.entries(issueAliases).filter(([, target]) => target === issue.id).map(([oldId]) => `<span id="${escapeHtml(oldId)}" aria-hidden="true"></span>`).join("");
  const renderLegacyIssueGroups = () => {
    const groups = Object.entries(window.TOPIC_ISSUE_GROUP_ALIASES?.[topic.slug] || {});
    if (!groups.length) return "";
    return `<section class="detail-section"><h2>旧論点リンクの参照先</h2>${groups.map(([oldId, targets]) => `<div id="${escapeHtml(oldId)}"><p>以前の論点は、現在は次の論点に分けて整理しています。</p><ul>${targets.map((id) => topic.issues.find((issue) => issue.id === id)).filter(Boolean).map((issue) => `<li><a href="#${escapeHtml(issue.id)}">${escapeHtml(issue.title)}</a></li>`).join("")}</ul></div>`).join("")}</section>`;
  };

  const renderIssues = () => `<div class="issue-list">${topic.issues.map((issue) => `<article class="issue-row" id="${escapeHtml(issue.id)}">${legacyIssueAnchors(issue)}<div class="issue-title"><h3>${escapeHtml(issue.title)}</h3><div class="issue-state"><span data-state="${escapeHtml(issue.status)}">${escapeHtml(schema.issueStatus[issue.status] || issue.status)}</span>${issue.stage !== "not_applicable" ? `<span>${escapeHtml(schema.issueStage[issue.stage] || issue.stage)}</span>` : ""}</div></div><div class="issue-answer"><p><strong>この論点の要点</strong> ${escapeHtml(issue.conclusion)}</p>${renderViews(issue)}<div class="issue-notes"><div><strong>検討時の条件</strong>${escapeHtml(issue.exception || "条件の記載なし")}</div><div><strong>確認を続ける点</strong>${escapeHtml(issue.uncertain || "確認事項の記載なし")}</div></div><div class="issue-sources"><strong>主な資料</strong>${sourceLinks(issue.sourceIds)}</div></div></article>`).join("")}</div>`;

  const renderSources = () => `<div class="source-list">${topic.sourceIds.map((id) => sourceById(id)).filter(Boolean).map((source) => `<a class="source-row" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><div><strong>${escapeHtml(source.title)}</strong><small>${escapeHtml(source.authority)}</small></div><span class="source-type">${escapeHtml(source.typeLabel)}</span><span class="source-date">公開 ${escapeHtml(source.publishedAt || "公表日未登録")}<br />重要度 ${escapeHtml(source.importance)}</span><span class="source-reason">${escapeHtml(source.whyImportant)}</span><span class="source-link">↗</span></a>`).join("")}</div>`;

  const renderArticles = () => {
    const related = articles.filter((article) => article.relatedTopics.includes(topic.slug)).sort((a, b) => (b.collectedAt || "").localeCompare(a.collectedAt || "") || (articleOrder.get(b.id) ?? -1) - (articleOrder.get(a.id) ?? -1) || b.publishedAt.localeCompare(a.publishedAt));
    const columns = "92px minmax(280px, 1fr) 92px minmax(180px, .7fr) 18px";
    return related.length ? `<div class="topic-article-list"><div class="article-index-head topic-article-head" style="grid-template-columns:${columns}"><span>更新日</span><span>記事・資料</span><span>公開日</span><span>誰向けか</span><span></span></div>${related.map((article) => `<a class="topic-article-row" style="grid-template-columns:${columns}" href="../article.html?id=${encodeURIComponent(article.id)}"><time datetime="${escapeHtml(article.collectedAt || "")}">${escapeHtml(article.collectedAt || "—")}</time><div><strong>${escapeHtml(article.title)}</strong><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><time datetime="${escapeHtml(article.publishedAt)}" style="color:var(--muted)">${escapeHtml(article.publishedAt)}</time><span>${article.audience.slice(0, 2).map(escapeHtml).join(" / ")}</span><em>→</em></a>`).join("")}</div>` : `<p class="section-intro">関連する採用記事・資料はまだありません。</p>`;
  };

  const renderHistory = () => {
    const history = updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    return `<div class="history-list">${history.map((update) => `<a class="history-row" href="../update.html?id=${encodeURIComponent(update.id)}"><time datetime="${escapeHtml(update.publishedAt)}">${escapeHtml(update.publishedAt)}</time><strong>${escapeHtml(update.typeLabel)}</strong><span><b>${escapeHtml(update.headline)}</b><small>${escapeHtml(update.whatChanged)}</small></span><em>→</em></a>`).join("")}</div>`;
  };

  document.title = `${topic.title} — 法務トピック知識ベース`;
  $("#topicPage").innerHTML = `<section class="detail-hero"><div class="detail-meta"><strong>最終確認 <time datetime="${escapeHtml(topic.lastVerified || topic.lastUpdated)}">${escapeHtml(topic.lastVerified || topic.lastUpdated)}</time></strong><span>${topic.categories.map(escapeHtml).join(" / ")}</span><span>${topic.issues.length}論点</span><span>${topic.sourceIds.length}主要資料</span></div><h1>${escapeHtml(topic.title)}</h1><p class="detail-summary">${escapeHtml(topic.summary)}</p></section><div class="detail-main"><section class="detail-section"><h2>現在の整理</h2>${renderCurrent()}</section><section class="detail-section"><h2>論点</h2>${renderIssues()}</section>${renderLegacyIssueGroups()}<section class="detail-section"><h2>関連する記事・資料</h2>${renderArticles()}</section><section class="detail-section"><h2>主要な一次資料</h2>${renderSources()}</section><section class="detail-section"><h2>更新履歴</h2>${renderHistory()}</section><a class="back-link" href="../topics.html">← テーマ一覧へ戻る</a></div>`;
})();

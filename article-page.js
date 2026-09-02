(() => {
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const article = articles.find((item) => item.id === new URLSearchParams(window.location.search).get("id"));
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

  if (!article) {
    $("#articlePage").innerHTML = `<div class="missing-topic"><h1>この記事・資料は見つかりませんでした。</h1><a class="back-link" href="articles.html">← 記事・資料一覧へ戻る</a></div>`;
    return;
  }

  const relatedTopics = article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);
  const relatedIssues = article.relatedIssues.map((issueId) => {
    for (const topic of relatedTopics) {
      const issue = topic.issues.find((item) => item.id === issueId);
      if (issue) return { topic, issue };
    }
    return null;
  }).filter(Boolean);
  const primarySources = article.primarySourceIds.map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  const summaryParagraphs = String(article.summary || "").split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const summaryPoints = String(article.summary || "").length < 260 && Array.isArray(article.whyImportant) ? article.whyImportant : [];

  document.title = `${article.title} — LAW / INDEX`;
  $("#articlePage").innerHTML = `<section class="article-hero"><div class="detail-meta"><strong>${escapeHtml(article.sourceLabel)}</strong><span>${escapeHtml(article.publisher)}</span><span>公開 <time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time></span></div><div class="article-tags">${article.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}</div><h1>${escapeHtml(article.title)}</h1></section><div class="detail-main article-detail-main"><section class="detail-section article-summary-section"><h2>記事の要約</h2><div class="article-summary-copy">${summaryParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}${summaryPoints.length ? `<ul>${summaryPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>` : ""}</div></section><section class="article-original"><div><strong>元記事</strong><span>${escapeHtml(article.publisher)} / ${escapeHtml(article.publishedAt)}</span></div><a href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">元記事を読む ↗</a></section><section class="detail-section"><h2>誰が読むとよいか</h2><div class="audience-list">${article.audience.map((item, index) => `<div><strong>${index === 0 ? "◎" : index === 1 ? "○" : "△"}</strong><span>${escapeHtml(item)}</span></div>`).join("")}</div><p class="section-intro audience-reason">${escapeHtml(article.audienceReason)}</p></section><section class="detail-section"><h2>関連するテーマ・論点</h2><div class="related-shelf">${relatedIssues.map(({ topic, issue }) => `<a href="topics/${escapeHtml(topic.slug)}.html#${escapeHtml(issue.id)}"><strong>${escapeHtml(topic.title)}</strong><span>${escapeHtml(issue.title)}</span><em>→</em></a>`).join("")}</div></section><section class="detail-section"><h2>関連する一次資料</h2><div class="source-list">${primarySources.map((source) => `<a class="source-row compact-source-row" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><div><strong>${escapeHtml(source.title)}</strong><small>${escapeHtml(source.authority)}</small></div><span class="source-type">${escapeHtml(source.typeLabel)}</span><span class="source-date">公開 ${escapeHtml(source.publishedAt)}</span><span class="source-reason">${escapeHtml(source.whyImportant)}</span><span class="source-link">↗</span></a>`).join("")}</div></section><div class="update-bottom-actions"><a class="back-link" href="articles.html">← 記事・資料一覧へ戻る</a>${relatedTopics[0] ? `<a class="back-link" href="topics/${escapeHtml(relatedTopics[0].slug)}.html">${escapeHtml(relatedTopics[0].title)}を見る →</a>` : ""}</div><p class="disclaimer">一次資料と参考情報の役割を分けて整理しています。このページは個別案件への法的助言や法的結論の保証を目的としません。</p></div>`;
})();

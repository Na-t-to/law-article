(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const updateId = new URLSearchParams(window.location.search).get("id");
  const update = updates.find((item) => item.id === updateId);
  const topicBySlug = (slug) => topics.find((topic) => topic.slug === slug);

  if (!update) {
    $("#updatePage").innerHTML = `<div class="missing-topic"><h1>この更新は見つかりませんでした。</h1><a class="back-link" href="index.html#changes">← 最近の更新へ戻る</a></div>`;
    return;
  }

  const source = sources.find((item) => item.id === update.source);
  const affectedIssues = update.affectedIssues.map((affected) => {
    const topic = topicBySlug(affected.topic);
    const issue = topic?.issues.find((item) => item.id === affected.issue);
    return `<a class="affected-issue" href="topics/${escapeHtml(affected.topic)}.html#${escapeHtml(affected.issue)}"><div><span>${escapeHtml(topic?.title || "")}</span><h3>${escapeHtml(issue?.title || affected.issue)}</h3></div><div class="affected-delta"><p><strong>更新前</strong>${escapeHtml(affected.before)}</p><b>→</b><p><strong>更新後</strong>${escapeHtml(affected.after)}</p></div></a>`;
  }).join("");
  const primaryTopic = topicBySlug(update.affectedTopics[0]);

  document.title = `${update.headline} — LAW / INDEX`;
  $("#updatePage").innerHTML = `<section class="update-hero"><div class="detail-meta"><strong>更新日 <time datetime="${escapeHtml(update.publishedAt)}">${escapeHtml(update.publishedAt)}</time></strong><span>${escapeHtml(source?.authority || "LAW / INDEX")}</span><span>${escapeHtml(update.typeLabel)}</span><span>重要度 ${escapeHtml(update.importance)}</span></div><div class="update-tags">${update.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><h1>${escapeHtml(update.headline)}</h1><p class="detail-summary">${escapeHtml(update.summary)}</p></section><div class="detail-main update-main"><section class="detail-section"><h2>要点</h2><ul class="key-point-list">${update.keyPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul></section><section class="detail-section"><h2>影響した論点</h2><p class="section-intro">${escapeHtml(update.whatChanged)}</p><div class="affected-list">${affectedIssues}</div></section><section class="detail-section"><h2>更新前 / 更新後</h2><div class="before-after"><div><strong>更新前</strong><p>${escapeHtml(update.before)}</p></div><div><strong>更新後</strong><p>${escapeHtml(update.after)}</p></div></div></section><section class="detail-section"><h2>一次資料</h2>${source ? `<a class="primary-source" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><div><strong>${escapeHtml(source.title)}</strong><span>${escapeHtml(source.authority)} / ${escapeHtml(source.typeLabel)}</span><small>資料公開日 ${escapeHtml(source.publishedAt)}</small></div><p>${escapeHtml(source.whyImportant)}</p><b>元資料を開く ↗</b></a>` : `<p class="section-intro">紐づく一次資料は登録されていません。</p>`}</section><div class="update-bottom-actions"><a class="back-link" href="index.html#changes">← 最近の更新へ戻る</a>${primaryTopic ? `<a class="back-link" href="topics/${escapeHtml(primaryTopic.slug)}.html">${escapeHtml(primaryTopic.title)}を見る →</a>` : ""}</div><p class="disclaimer">一次資料の内容と、このサイトによる整理・実務上の示唆を分けて表示しています。個別案件への法的助言や、法的結論の保証を目的としません。</p></div>`;
})();

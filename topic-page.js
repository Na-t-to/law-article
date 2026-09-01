(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const slug = document.body.dataset.topic;
  const topic = topics.find((item) => item.slug === slug);
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const sourceById = (id) => sources.find((source) => source.id === id);

  if (!topic) {
    document.title = "テーマが見つかりません — LAW / INDEX";
    $("#topicPage").innerHTML = `<div class="missing-topic"><p class="eyebrow">404 / TOPIC NOT FOUND</p><h1>このテーマはまだ登録されていません。</h1><a class="back-link" href="../index.html">← テーマ一覧へ戻る</a></div>`;
    return;
  }

  const certaintyCard = (key, label, title, items, className) => `<article class="certainty-card ${className}"><span class="certainty-label">${escapeHtml(label)}</span><h3>${escapeHtml(title)}</h3><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`;

  const renderTopic = () => {
    document.title = `${topic.title} — 法務トピック知識ベース`;
    $("#topicPage").innerHTML = `
      <section class="detail-hero">
        <div><div class="detail-kicker">TOPIC / ${escapeHtml(topic.slug)} / ${topic.categories.map(escapeHtml).join(" · ")}</div><h1>${escapeHtml(topic.title)}</h1><p class="detail-summary">${escapeHtml(topic.summary)}</p></div>
        <div class="detail-meta"><strong>${escapeHtml(topic.lastUpdated)}</strong>最終整理更新<br />${topic.issues.length}つの論点 / ${topic.sourceIds.length}件の主要資料</div>
      </section>
      <div class="detail-grid">
        <div class="detail-main">
          <section class="detail-section"><div class="detail-section-head"><div><span class="eyebrow">01 / ORIENTATION</span><h2>概要</h2></div><span class="detail-section-label">はじめに読む</span></div><div class="overview-copy">${topic.overview.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div></section>
          <section class="detail-section"><div class="detail-section-head"><div><span class="eyebrow">02 / CURRENT POSITION</span><h2>現在の整理</h2></div><span class="detail-section-label">2026.09.01 時点</span></div><div class="certainty-grid">${certaintyCard("facts", "FACT / PRIMARY BASIS", "確定情報", topic.currentSummary.facts, "fact")}${certaintyCard("interpretations", "INTERPRETATION / ORGANIZED", "解釈・整理", topic.currentSummary.interpretations, "interpretation")}${certaintyCard("implications", "PRACTICE / CONSIDER", "実務上の示唆", topic.currentSummary.implications, "practical")}${certaintyCard("uncertain", "UNKNOWN / KEEP WATCHING", "未確定事項", topic.currentSummary.uncertain, "uncertain")}</div></section>
          <section class="detail-section"><div class="detail-section-head"><div><span class="eyebrow">03 / ISSUE MAP</span><h2>論点一覧</h2></div><span class="detail-section-label">結論 / 例外 / 未確定</span></div><div class="issue-list">${topic.issues.map((issue) => `<article class="issue-card"><div class="issue-head"><h3>${escapeHtml(issue.title)}</h3><span class="issue-state ${escapeHtml(issue.statusTone)}">${escapeHtml(issue.status)}</span></div><p class="issue-conclusion">${escapeHtml(issue.conclusion)}</p><div class="issue-subgrid"><div class="issue-note"><strong>例外・条件</strong>${escapeHtml(issue.exception)}</div><div class="issue-note"><strong>未確定</strong>${escapeHtml(issue.uncertain)}</div></div><div class="issue-sources">${issue.sourceIds.map((id) => { const source = sourceById(id); return source ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">根拠: ${escapeHtml(source.title)} ↗</a>` : ""; }).join("")}</div></article>`).join("")}</div></section>
          <section class="detail-section"><div class="detail-section-head"><div><span class="eyebrow">04 / PRACTICAL IMPACT</span><h2>実務への影響</h2></div><span class="detail-section-label">検討対象</span></div><ul class="impact-list">${topic.practicalImpacts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul><p class="detail-footnote">法令上直接求められる事項と、実務上検討しやすい対応を分けて確認してください。</p></section>
          <section class="detail-section"><div class="detail-section-head"><div><span class="eyebrow">05 / CHANGELOG</span><h2>更新履歴</h2></div><span class="detail-section-label">理解の変化</span></div><ul class="history-list">${topic.history.map((item) => `<li class="history-item"><span class="history-date">${escapeHtml(item.date)}</span><div><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.detail)}</p></div></li>`).join("")}</ul></section>
          <a class="back-link" href="../index.html#topics">← テーマ一覧へ戻る</a>
        </div>
        <aside class="detail-aside">
          <section class="detail-aside-card"><span class="eyebrow">EVIDENCE LAYER</span><h3>主要一次資料</h3><div class="source-stack">${topic.sourceIds.map((id) => { const source = sourceById(id); return source ? `<a class="source-card" href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer"><span class="source-pill">${escapeHtml(source.typeLabel)}</span><h3>${escapeHtml(source.title)}</h3><p>${escapeHtml(source.authority)} · ${escapeHtml(source.publishedAt)}</p><p>${escapeHtml(source.whyImportant)}</p></a>` : ""; }).join("")}</div></section>
          <section class="detail-aside-card"><span class="eyebrow">RECENT UPDATES</span><h3>最近の更新</h3><ul class="update-list">${topic.recentUpdateIds.map((id) => updates.find((update) => update.id === id)).filter(Boolean).map((update) => `<li class="update-item"><span class="update-date">${escapeHtml(update.date)}</span><div><strong>${escapeHtml(update.typeLabel)}</strong><p>${escapeHtml(update.summary)}</p></div></li>`).join("")}</ul></section>
          <section class="detail-aside-card"><div class="disclaimer">このページは資料の所在と現在の整理を確認するための知識ベースです。個別案件への法的助言や、法的結論の保証を目的としません。重要な判断では必ず原資料と専門家をご確認ください。</div></section>
        </aside>
      </div>`;
  };

  renderTopic();
})();

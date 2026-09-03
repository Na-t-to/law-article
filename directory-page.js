(() => {
  const page = document.body.dataset.directoryPage;
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((article) => article.status === "adopted");
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const pad = (value) => String(value).padStart(2, "0");

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const latestUpdateFor = (topic) => updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);

  if (page === "topics") {
    let selectedField = "all";
    const preferredFields = ["AI・デジタル", "個人情報", "労務", "契約", "会社法", "消費者法", "独占禁止法・競争法", "情報セキュリティ", "知的財産", "M&A", "国際取引"];
    const availableFields = [...new Set(topics.flatMap((topic) => topic.categories))];
    const fields = [...preferredFields.filter((field) => availableFields.includes(field)), ...availableFields.filter((field) => !preferredFields.includes(field)).sort((left, right) => left.localeCompare(right, "ja"))];

    const renderFilters = () => {
      document.querySelector("#fieldFilters").innerHTML = ["all", ...fields].map((field) => {
        const label = field === "all" ? "すべて" : field;
        const count = field === "all" ? topics.length : topics.filter((topic) => topic.categories.includes(field)).length;
        return `<button class="field-filter${selectedField === field ? " is-active" : ""}" type="button" data-field="${escapeHtml(field)}"><span>${escapeHtml(label)}</span><small>${pad(count)}</small></button>`;
      }).join("");
    };

    const renderTopics = () => {
      const visible = topics.filter((topic) => selectedField === "all" || topic.categories.includes(selectedField)).sort((left, right) => right.lastUpdated.localeCompare(left.lastUpdated));
      document.querySelector("#topicList").innerHTML = visible.length ? visible.map((topic) => {
        const latest = latestUpdateFor(topic);
        return `<a class="topic-row" href="topics/${escapeHtml(topic.slug)}.html"><div class="topic-name-cell"><div class="topic-name-line"><strong>${escapeHtml(topic.title)}</strong>${topic.isNew ? `<span class="new-badge">NEW</span>` : ""}</div><div class="topic-categories">${topic.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join(" / ")}</div></div><div class="topic-stat"><strong>${pad(topic.issues.length)}</strong><span>論点</span></div><div class="topic-stat"><strong>${pad(topic.sourceIds.length)}</strong><span>主要資料</span></div><div class="topic-change"><strong>最終更新 <time datetime="${escapeHtml(topic.lastUpdated)}">${escapeHtml(topic.lastUpdated)}</time></strong><small>${latest ? escapeHtml(latest.headline) : ""}</small></div></a>`;
      }).join("") : `<div class="empty-inline">この分野のテーマはまだ登録されていません。</div>`;
    };

    document.querySelector("#topicCount").innerHTML = `<strong>${pad(topics.length)}</strong><span>テーマ</span>`;
    document.querySelector("#fieldFilters").addEventListener("click", (event) => {
      const button = event.target.closest("[data-field]");
      if (!button) return;
      selectedField = button.dataset.field;
      renderFilters();
      renderTopics();
    });
    renderFilters();
    renderTopics();
  }

  if (page === "reforms") {
    const selectedLaw = new URLSearchParams(window.location.search).get("law");
    const reformInfo = (article) => window.getLegalReformInfo?.(article, topics) || { isReform: false, stage: null, stageLabel: "" };
    const reformLaw = (article) => {
      if (window.getLegalReformLaw) return window.getLegalReformLaw(article, topics);
      const topic = topicsForArticle(article)[0];
      return topic ? { id: `topic-${topic.slug}`, label: topic.title } : { id: "other-legal-reform", label: "その他の法改正・制度変更" };
    };
    const reforms = articles.map((article) => ({ article, reform: reformInfo(article), law: reformLaw(article) })).filter(({ reform }) => reform.isReform).sort((left, right) => right.article.publishedAt.localeCompare(left.article.publishedAt));
    const groups = [...reforms.reduce((map, item) => {
      if (!map.has(item.law.id)) map.set(item.law.id, { law: item.law, items: [] });
      map.get(item.law.id).items.push(item);
      return map;
    }, new Map()).values()].sort((left, right) => right.items[0].article.publishedAt.localeCompare(left.items[0].article.publishedAt));

    document.querySelector("#reformCount").innerHTML = `<strong>${pad(groups.length)}</strong><span>法令・制度</span>`;
    document.querySelector("#reformList").innerHTML = groups.length ? groups.map(({ law, items }, index) => `<details class="reform-law-group" id="law-${escapeHtml(law.id)}"${index < 2 || selectedLaw === law.id ? " open" : ""}><summary><div><strong>${escapeHtml(law.label)}</strong><small>最終更新 <time datetime="${escapeHtml(items[0].article.publishedAt)}">${escapeHtml(items[0].article.publishedAt)}</time></small></div><span>${pad(items.length)}件</span><em>記事を見る</em></summary><div class="reform-law-articles">${items.map(({ article, reform }) => `<article><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time><div><a href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><span class="reform-stage" data-stage="${escapeHtml(reform.stage)}">${escapeHtml(reform.stageLabel)}</span></article>`).join("")}</div></details>`).join("") : `<div class="empty-inline">法改正に該当する記事・資料はまだありません。</div>`;
    if (selectedLaw) document.querySelector(`#law-${CSS.escape(selectedLaw)}`)?.scrollIntoView({ block: "start" });
  }
})();

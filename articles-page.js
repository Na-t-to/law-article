(() => {
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((item) => item.status === "adopted");
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const query = new URLSearchParams(window.location.search);
  if (query.get("view") === "reforms") {
    query.delete("view");
    const suffix = query.toString();
    window.location.replace(`reforms.html${suffix ? `?${suffix}` : ""}`);
    return;
  }
  let selectedField = "all";
  let selectedLaw = query.get("law") || "all";
  let reformsOnly = query.get("view") === "reforms";
  let filtersExpanded = false;

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const fieldValues = [...new Set(articles.flatMap((article) => article.categories))];
  const preferredFieldOrder = [
    "AI・デジタル",
    "個人情報",
    "労務",
    "労務・人事",
    "契約",
    "契約・取引",
    "会社法",
    "M&A",
    "独占禁止法・競争法",
    "情報セキュリティ",
    "知的財産",
    "消費者法・表示",
    "危機管理・コンプライアンス",
    "国際取引"
  ];
  const primaryFields = [
    ...preferredFieldOrder.filter((field) => fieldValues.includes(field)),
    ...fieldValues.filter((field) => !preferredFieldOrder.includes(field))
  ].slice(0, 8);
  const secondaryFields = fieldValues.filter((field) => !primaryFields.includes(field));
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);
  const topicNames = (article) => topicsForArticle(article).map((topic) => topic.title);
  const isLegalReform = (article) => window.getLegalReformInfo?.(article, topics)?.isReform || false;
  const reformLaw = (article) => {
    if (window.getLegalReformLaw) return window.getLegalReformLaw(article, topics);
    const topic = topicsForArticle(article)[0];
    return topic ? { id: `topic-${topic.slug}`, label: topic.title } : { id: "other-legal-reform", label: "その他の法改正・制度変更" };
  };
  const reformItems = articles.filter(isLegalReform).map((article) => ({ article, law: reformLaw(article) }));
  const reformCount = reformItems.length;
  const reformLaws = [...reformItems.reduce((groups, item) => {
    if (!groups.has(item.law.id)) groups.set(item.law.id, { ...item.law, count: 0, latestAt: item.article.publishedAt });
    const group = groups.get(item.law.id);
    group.count += 1;
    if (item.article.publishedAt > group.latestAt) group.latestAt = item.article.publishedAt;
    return groups;
  }, new Map()).values()].sort((left, right) => right.latestAt.localeCompare(left.latestAt));
  if (selectedLaw !== "all" && !reformLaws.some((law) => law.id === selectedLaw)) selectedLaw = "all";
  const changeSummary = (article) => window.getKnowledgeArticleChangeSummary?.(article, topics, updates) || "整理変更なし／関連テーマの参考資料を追加";
  const compareCollectionOrder = (a, b) =>
    (b.collectedAt || "").localeCompare(a.collectedAt || "") ||
    (Number(b.__collectionBatch ?? -1) - Number(a.__collectionBatch ?? -1)) ||
    (Number(a.__collectionItem ?? 0) - Number(b.__collectionItem ?? 0)) ||
    (b.publishedAt || "").localeCompare(a.publishedAt || "");

  const articleRow = (article) => {
    const impact = changeSummary(article);
    return `<article class="article-row"><time class="article-added-date" datetime="${escapeHtml(article.collectedAt)}"><span>追加</span>${escapeHtml(article.collectedAt)}</time><div class="article-main-cell"><a class="article-title-link" href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><time class="article-published-date" datetime="${escapeHtml(article.publishedAt)}"><span>公開</span>${escapeHtml(article.publishedAt)}</time><div class="article-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html" aria-label="${escapeHtml(topic.title)}のテーマページへ">${escapeHtml(topic.title)} →</a>`).join("")}</div><a class="article-impact" href="article.html?id=${encodeURIComponent(article.id)}" title="${escapeHtml(impact)}">${escapeHtml(impact)}</a></article>`;
  };

  const fieldButton = (value, label) => {
    const count = value === "all" ? articles.length : articles.filter((article) => article.categories.includes(value)).length;
    const active = selectedField === value;
    return `<button class="field-filter${active ? " is-active" : ""}" type="button" data-article-field="${escapeHtml(value)}" aria-pressed="${active}"><span>${escapeHtml(label)}</span><small>${String(count).padStart(2, "0")}</small></button>`;
  };

  const renderFilters = () => {
    if (reformsOnly) {
      $("#articleFilters").innerHTML = `<button class="field-filter reform-filter" type="button" data-reform-filter><span>記事一覧へ戻る</span></button><button class="field-filter${selectedLaw === "all" ? " is-active" : ""}" type="button" data-reform-law="all"><span>法令すべて</span><small>${String(reformCount).padStart(2, "0")}</small></button>${reformLaws.map((law) => `<button class="field-filter${selectedLaw === law.id ? " is-active" : ""}" type="button" data-reform-law="${escapeHtml(law.id)}"><span>${escapeHtml(law.label)}</span><small>${String(law.count).padStart(2, "0")}</small></button>`).join("")}`;
      return;
    }

    const reformFilter = `<button class="field-filter reform-filter" type="button" data-reform-filter><span>法改正のみ</span><small>${String(reformCount).padStart(2, "0")}</small></button>`;
    const categoryFields = filtersExpanded ? [...primaryFields, ...secondaryFields] : primaryFields;
    const categoryButtons = fieldButton("all", "すべて") + categoryFields.map((field) => fieldButton(field, field)).join("");
    const moreButton = secondaryFields.length ? `<button class="field-filter filter-more${filtersExpanded ? " is-expanded" : ""}" type="button" data-filter-more aria-expanded="${filtersExpanded}"><span>${filtersExpanded ? (secondaryFields.includes(selectedField) ? "主要カテゴリへ戻る" : "カテゴリを閉じる") : "さらに表示"}</span><small>${filtersExpanded ? "−" : `+${secondaryFields.length}`}</small></button>` : "";
    $("#articleFilters").innerHTML = reformFilter + categoryButtons + moreButton;
  };

  const renderArticles = () => {
    const needle = $("#articleSearch").value.trim().toLocaleLowerCase();
    const visible = articles.filter((article) => !reformsOnly || isLegalReform(article)).filter((article) => !reformsOnly ? selectedField === "all" || article.categories.includes(selectedField) : selectedLaw === "all" || reformLaw(article).id === selectedLaw).filter((article) => {
      if (!needle) return true;
      return [article.title, article.publisher, article.summary, changeSummary(article), article.categories.join(" "), article.audience.join(" "), topicNames(article).join(" "), reformLaw(article).label].join(" ").toLocaleLowerCase().includes(needle);
    }).sort(compareCollectionOrder);
    $("#libraryCount").innerHTML = `<strong>${String(visible.length).padStart(2, "0")}</strong><span>件</span>`;
    $("#articleLibrary").classList.toggle("is-grouped", reformsOnly);
    if (!visible.length) { $("#articleLibrary").innerHTML = `<div class="empty-inline">条件に合う記事・資料はありません。</div>`; return; }
    if (!reformsOnly) { $("#articleLibrary").innerHTML = visible.map(articleRow).join(""); return; }
    const visibleGroups = reformLaws.map((law) => ({ law, articles: visible.filter((article) => reformLaw(article).id === law.id) })).filter((group) => group.articles.length);
    $("#articleLibrary").innerHTML = visibleGroups.map(({ law, articles: lawArticles }) => `<section class="reform-library-group" aria-labelledby="law-${escapeHtml(law.id)}"><div class="reform-library-heading"><h3 id="law-${escapeHtml(law.id)}">${escapeHtml(law.label)}</h3><span>${String(lawArticles.length).padStart(2, "0")}件</span></div><div class="article-index reform-library-articles">${lawArticles.map(articleRow).join("")}</div></section>`).join("");
  };

  $("#articleFilters").addEventListener("click", (event) => {
    const reformButton = event.target.closest("[data-reform-filter]");
    const field = event.target.closest("[data-article-field]");
    const lawButton = event.target.closest("[data-reform-law]");
    const moreButton = event.target.closest("[data-filter-more]");
    if (!reformButton && !field && !lawButton && !moreButton) return;

    if (reformButton) { reformsOnly = !reformsOnly; selectedField = "all"; selectedLaw = "all"; filtersExpanded = false; }
    if (field) {
      selectedField = field.dataset.articleField;
      if (secondaryFields.includes(selectedField)) filtersExpanded = true;
    }
    if (lawButton) selectedLaw = lawButton.dataset.reformLaw;
    if (moreButton) {
      if (filtersExpanded && secondaryFields.includes(selectedField)) selectedField = "all";
      filtersExpanded = !filtersExpanded;
    }

    const url = new URL(window.location.href);
    if (reformsOnly) url.searchParams.set("view", "reforms");
    else url.searchParams.delete("view");
    if (reformsOnly && selectedLaw !== "all") url.searchParams.set("law", selectedLaw);
    else url.searchParams.delete("law");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    renderFilters();
    renderArticles();
  });
  $("#articleSearch").addEventListener("input", renderArticles);
  renderFilters();
  renderArticles();
})();

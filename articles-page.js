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

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const fields = ["すべて", ...new Set(articles.flatMap((article) => article.categories))];
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);
  const topicNames = (article) => topicsForArticle(article).map((topic) => topic.title);
  const issueTitles = (article) => article.relatedIssues.map((id) => topics.flatMap((topic) => topic.issues).find((issue) => issue.id === id)?.title).filter(Boolean);
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
  const changeSummary = (article) => {
    if (article.whatChanged) return article.whatChanged;
    const update = updates.filter((item) => article.primarySourceIds.includes(item.source) && item.affectedTopics.some((slug) => article.relatedTopics.includes(slug))).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
    if (update) return update.whatChanged;
    const issues = issueTitles(article);
    return issues.length ? `整理変更なし／「${issues.slice(0, 2).join("」「")}」の参考資料を追加` : "整理変更なし／関連テーマの参考資料を追加";
  };

  const articleRow = (article) => `<article class="article-row"><time class="article-added-date" datetime="${escapeHtml(article.collectedAt)}"><span>追加</span>${escapeHtml(article.collectedAt)}</time><div class="article-main-cell"><a class="article-title-link" href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><time class="article-published-date" datetime="${escapeHtml(article.publishedAt)}"><span>公開</span>${escapeHtml(article.publishedAt)}</time><div class="article-topics">${topicsForArticle(article).map((topic) => `<a href="topics/${escapeHtml(topic.slug)}.html">${escapeHtml(topic.title)} →</a>`).join("")}</div><a class="article-impact" href="article.html?id=${encodeURIComponent(article.id)}">${escapeHtml(changeSummary(article))}</a></article>`;

  const renderFilters = () => {
    if (reformsOnly) {
      $("#articleFilters").innerHTML = `<button class="field-filter reform-filter" type="button" data-reform-filter><span>記事一覧へ戻る</span></button><button class="field-filter${selectedLaw === "all" ? " is-active" : ""}" type="button" data-reform-law="all"><span>法令すべて</span><small>${String(reformCount).padStart(2, "0")}</small></button>${reformLaws.map((law) => `<button class="field-filter${selectedLaw === law.id ? " is-active" : ""}" type="button" data-reform-law="${escapeHtml(law.id)}"><span>${escapeHtml(law.label)}</span><small>${String(law.count).padStart(2, "0")}</small></button>`).join("")}`;
      return;
    }
    const reformFilter = `<button class="field-filter reform-filter" type="button" data-reform-filter><span>法改正のみ</span><small>${String(reformCount).padStart(2, "0")}</small></button>`;
    $("#articleFilters").innerHTML = reformFilter + fields.map((field) => {
      const value = field === "すべて" ? "all" : field;
      const count = value === "all" ? articles.length : articles.filter((article) => article.categories.includes(value)).length;
      return `<button class="field-filter${selectedField === value ? " is-active" : ""}" type="button" data-article-field="${escapeHtml(value)}"><span>${escapeHtml(field)}</span><small>${String(count).padStart(2, "0")}</small></button>`;
    }).join("");
  };

  const renderArticles = () => {
    const needle = $("#articleSearch").value.trim().toLocaleLowerCase();
    const visible = articles.filter((article) => !reformsOnly || isLegalReform(article)).filter((article) => !reformsOnly ? selectedField === "all" || article.categories.includes(selectedField) : selectedLaw === "all" || reformLaw(article).id === selectedLaw).filter((article) => {
      if (!needle) return true;
      return [article.title, article.publisher, article.summary, changeSummary(article), article.categories.join(" "), article.audience.join(" "), topicNames(article).join(" "), reformLaw(article).label].join(" ").toLocaleLowerCase().includes(needle);
    }).sort((a, b) => (b.collectedAt || "").localeCompare(a.collectedAt || "") || b.publishedAt.localeCompare(a.publishedAt));
    $("#libraryCount").innerHTML = `<strong>${String(visible.length).padStart(2, "0")}</strong><span>件</span>`;
    $("#articleLibrary").classList.toggle("is-grouped", reformsOnly);
    if (!visible.length) { $("#articleLibrary").innerHTML = `<div class="empty-inline">条件に合う記事・資料はありません。</div>`; return; }
    if (!reformsOnly) { $("#articleLibrary").innerHTML = visible.map(articleRow).join(""); return; }
    const visibleGroups = reformLaws.map((law) => ({ law, articles: visible.filter((article) => reformLaw(article).id === law.id) })).filter((group) => group.articles.length);
    $("#articleLibrary").innerHTML = visibleGroups.map(({ law, articles: lawArticles }) => `<section class="reform-library-group" aria-labelledby="law-${escapeHtml(law.id)}"><div class="reform-library-heading"><h3 id="law-${escapeHtml(law.id)}">${escapeHtml(law.label)}</h3><span>${String(lawArticles.length).padStart(2, "0")}件</span></div><div class="article-index reform-library-articles">${lawArticles.map(articleRow).join("")}</div></section>`).join("");
  };

  $("#articleFilters").addEventListener("click", (event) => {
    const reformButton = event.target.closest("[data-reform-filter]");
    const fieldButton = event.target.closest("[data-article-field]");
    const lawButton = event.target.closest("[data-reform-law]");
    if (!reformButton && !fieldButton && !lawButton) return;
    if (reformButton) { reformsOnly = !reformsOnly; selectedField = "all"; selectedLaw = "all"; }
    if (fieldButton) selectedField = fieldButton.dataset.articleField;
    if (lawButton) selectedLaw = lawButton.dataset.reformLaw;
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

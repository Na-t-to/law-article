(() => {
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA.filter((item) => item.status === "adopted") : [];
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  let selectedField = "all";

  const fields = ["すべて", ...new Set(articles.flatMap((article) => article.categories))];
  const topicNames = (article) => article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)?.title).filter(Boolean);

  const renderFilters = () => {
    $("#articleFilters").innerHTML = fields.map((field) => {
      const value = field === "すべて" ? "all" : field;
      const count = value === "all" ? articles.length : articles.filter((article) => article.categories.includes(value)).length;
      return `<button class="field-filter${selectedField === value ? " is-active" : ""}" type="button" data-article-field="${escapeHtml(value)}"><span>${escapeHtml(field)}</span><small>${String(count).padStart(2, "0")}</small></button>`;
    }).join("");
  };

  const renderArticles = () => {
    const needle = $("#articleSearch").value.trim().toLocaleLowerCase();
    const visible = articles.filter((article) => selectedField === "all" || article.categories.includes(selectedField)).filter((article) => {
      if (!needle) return true;
      return [article.title, article.publisher, article.summary, article.categories.join(" "), article.audience.join(" "), topicNames(article).join(" ")].join(" ").toLocaleLowerCase().includes(needle);
    }).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
    $("#resultCount").textContent = `${String(visible.length).padStart(2, "0")}件`;
    $("#articleLibrary").innerHTML = visible.length ? visible.map((article) => `<a class="article-row" href="article.html?id=${encodeURIComponent(article.id)}"><time datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(article.publishedAt)}</time><div class="article-main-cell"><strong>${escapeHtml(article.title)}</strong><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small><span>${topicNames(article).map(escapeHtml).join(" / ")}</span></div><div class="article-fields">${article.categories.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}</div><div class="article-audience">${article.audience.slice(0, 2).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></a>`).join("") : `<div class="empty-inline">条件に合う記事・資料はありません。</div>`;
  };

  $("#libraryCount").innerHTML = `<strong>${String(articles.length).padStart(2, "0")}</strong><span>採用済み</span>`;
  $("#articleFilters").addEventListener("click", (event) => { const button = event.target.closest("[data-article-field]"); if (!button) return; selectedField = button.dataset.articleField; renderFilters(); renderArticles(); });
  $("#articleSearch").addEventListener("input", renderArticles);
  renderFilters();
  renderArticles();
})();

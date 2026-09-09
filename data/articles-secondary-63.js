(() => {
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const article = (window.ARTICLE_DATA || []).find((item) => item.id === "article-tmi-customer-harassment-2026");
  if (!article) return;

  article.primarySourceIds = addUniqueString(article.primarySourceIds, "source-customer-harassment-practical-2026");
  article.reformEventId = "customer-harassment-obligation-2026";
  article.reformStageAtPublication = "finalized_pending";
  article.reformStageSourceIds = ["source-customer-harassment-guideline-2026"];
  article.whatChanged = "整理変更なし／最終指針を現場の権限設計・記録・悪質事案対応・安全配慮義務まで落とす代表的な実務解説として、既存ARTICLEの一次資料・法改正参照を補強した。";
})();
(() => {
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const article = (window.ARTICLE_DATA || []).find((item) => item.id === "article-tmi-aml-identity-2026");
  if (!article) return;

  article.collectedAt = "2026-09-10";
  article.primarySourceIds = addUniqueString(article.primarySourceIds, "source-npa-aml-overview-2026");
  article.reformEventId = "aml-identity-verification-2027-rules";
  article.reformStageAtPublication = "finalized_pending";
  article.reformStageSourceIds = ["source-npa-aml-overview-2026"];
  article.whatChanged = "整理変更なし／2027年4月1日の本人確認方法厳格化について、既存のTMI実務解説を現行の一次資料・法改正イベントへ接続し直した。";
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "distribution-resale-price");
  if (!topic) return;

  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];
  const appendText = (base, value) => {
    const items = Array.isArray(base) ? base : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.sourceIds = appendUnique(topic.sourceIds, [
    "source-jftc-distribution-guideline-current-20260708",
    "source-jftc-rpm-faq-20260708"
  ]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, ["article-uchisaiwai-rpm-guideline-20260727"]);

  if (topic.currentSummary) {
    topic.currentSummary.facts = appendText(
      topic.currentSummary.facts,
      "公取委のQ&Aは、ユーザー販売までの費用として保管・輸送・広告宣伝だけでなく、荷造費、見本費、人件費、研修費、保険料等も取引実態に応じて含まれ得るとし、費用の内容と負担方法をメーカーと販売店で確認・明確化することを示している。"
    );
    topic.currentSummary.implications = appendText(
      topic.currentSummary.implications,
      "指定価格型の販売施策では、費用項目と負担方法を一方的に決めるだけでなく、販売店が不足費用を申し出て協議できるフローと精算方法まで設計・記録する。"
    );
  }

  const riskCostIssue = (topic.issues || []).find((issue) => issue && issue.id === "rpm-risk-cost-exception");
  if (riskCostIssue) {
    riskCostIssue.sourceIds = appendUnique(riskCostIssue.sourceIds, [
      "source-jftc-distribution-guideline-current-20260708",
      "source-jftc-rpm-faq-20260708"
    ]);
  }
})();

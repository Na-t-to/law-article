(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "business-human-rights-dd");
  if (!topic) return;

  const articleId = "article-na-human-rights-crisis-response-20260917";
  const issueId = "bhr-crisis-response";
  const guidelineSource = "source-meti-bhr-guideline-2022";
  const napSource = "source-mofa-bhr-nap-2025";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.summary = "日本政府の人権尊重ガイドラインと改定行動計画を基礎に、人権方針、リスク特定、人権DD、救済、サプライチェーン・M&Aへの実装に加え、人権問題が顕在化した後の危機管理・社内調査・被害者救済・経営エスカレーションまで企業法務向けに追う。";

  topic.overview = appendTextUnique(
    topic.overview,
    "人権問題が実際に申告・発覚した後は、国内法上の違反や責任の有無だけを確認して終えるのではなく、被害者への対応・救済、経営陣への情報共有、再発防止を、人権DDやグリーバンスの仕組みと接続して危機管理する必要がある。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "人権問題の危機管理では、従来型の不祥事調査のように法令違反・法的責任の有無だけを中心に据えるのではなく、負の人権影響と被害申告後の対応、救済、経営へのエスカレーションを併せて評価する実務設計が重要になる。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "人権問題の申告・発覚時に、被害者保護、事実調査、経営報告、救済・是正、対外説明、再発防止までを担当部門・判断権限・記録方法とともに危機対応フローとして定め、平時の人権DD・内部通報・グリーバンスと接続する。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "人権問題が申告・発覚した後の危機管理をどう設計するか",
      status: "interpreted",
      stage: "not_applicable",
      views: [],
      conclusion: "国内法上の違反・責任の有無だけで対応を終えず、負の人権影響の把握、被害申告後の対応、被害者への救済・是正、経営陣への情報共有、再発防止を、人権DD・グリーバンスと接続して進める。",
      exception: "政府ガイドラインや行動計画それ自体が一般の民間企業に新たな法定義務を創設するものではなく、個別法令、契約、海外規制上の義務・責任は別途確認する。",
      uncertain: "第三者調査の要否、被害者との対話や公表の範囲、救済措置の内容は、事案の性質、被害者の意向、関係者の権利、法的手続との関係に応じて個別に判断する必要がある。",
      sourceIds: [guidelineSource, napSource]
    });
  }

  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "人権問題発覚時の危機管理・社内調査",
    "被害者救済・経営エスカレーション"
  ]);
})();

(() => {
  const topicSlug = "human-subjects-medical-research-ethics-2026";
  const reformEventId = "human-research-ethics-guideline-2026-amendment";
  const sourceReview = "source-mext-medical-research-ethics-review-2025";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceReview,
      title: "人を対象とする生命科学・医学系研究に関する倫理指針 見直しの方向性について（取りまとめ）",
      type: "report",
      typeLabel: "一次資料・三省合同会議／倫理指針見直し",
      authority: "生命科学・医学系研究等における個人情報の取扱い等に関する合同会議",
      publishedAt: "2025-12-24",
      url: "https://www.mext.go.jp/content/20260220-mxt_life-000047500_10.pdf",
      importance: "最高",
      whyImportant: "個人情報保護法との上乗せ規律による複雑化、IC手続の簡素化、多機関共同研究の倫理審査の適正化など、2026年改正の政策目的と制度設計の方向性を確認できる基礎資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      lastVerified: "2026-09-13",
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceReview]),
      issues: (topic.issues || []).map((issue) => {
        if (!["human-research-ic-optout-2026", "human-research-multisite-review-2026", "human-research-transition-operations-2026"].includes(issue.id)) return issue;
        return { ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [sourceReview]) };
      })
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-mext-medical-research-ethics-review-2025",
      title: "人を対象とする生命科学・医学系研究に関する倫理指針 見直しの方向性について（取りまとめ）",
      publisher: "文部科学省",
      author: "生命科学・医学系研究等における個人情報の取扱い等に関する合同会議",
      publishedAt: "2025-12-24",
      collectedAt: "2026-09-13",
      url: "https://www.mext.go.jp/content/20260220-mxt_life-000047500_10.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・倫理指針見直しの方向性",
      status: "adopted",
      summary: "2026年改正に先立ち、個人情報保護法との上乗せ規律による複雑化、IC手続の簡素化、多機関共同研究の倫理審査の適正化等について、見直しの政策目的と方向性を整理した三省合同会議の取りまとめ。",
      whyImportant: [
        "最終改正の条文だけでは見えにくい『なぜこの規律を簡素化したのか』という背景を確認できる",
        "個人情報保護法と研究倫理指針の役割分担を制度設計の意図から理解できる",
        "多機関共同研究の一括倫理審査を進める政策背景を確認できる"
      ],
      audience: ["製薬・医療機器の法務・コンプライアンス", "研究開発・臨床研究担当", "研究倫理事務局・倫理審査委員会", "個人情報保護担当"],
      audienceReason: "2026年最終改正を、個人情報規律と倫理審査の見直し目的まで遡って理解するため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["human-research-ic-optout-2026", "human-research-multisite-review-2026", "human-research-transition-operations-2026"],
      primarySourceIds: [sourceReview],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceReview],
      whatChanged: "整理変更なし／2026年改正の背景となった個人情報規律・IC・一括倫理審査の見直し理由を制度形成過程から補強した。"
    }
  ]);
})();
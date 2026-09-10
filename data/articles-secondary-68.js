(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "advertising-display-control";
  const planSourceId = "source-cao-regulatory-reform-plan-2026-advertising";
  const wgSourceId = "source-cao-startup-wg13-total-premium-2026";
  const expertArticleId = "article-ikeda-someya-total-premium-review-2026";
  const reformEventId = "premium-representations-review-2026";
  const premiumIssueId = "display-premium-cap-review";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: wgSourceId,
      title: "第13回 スタートアップ・イノベーション促進ワーキング・グループ（総付景品上限額）",
      type: "guideline",
      typeLabel: "規制改革会議・検討資料",
      authority: "内閣府",
      publishedAt: "2026-04-13",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_04startup/260413/startup13.html",
      importance: "中",
      whyImportant: "総付景品の上限額見直しを議題として、消費者庁、事業者団体、実務家からの資料・意見を公開した公式会合ページ。7月の規制改革実施計画に至る検討過程を確認できる。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.sourceIds = addUniqueString(topic.sourceIds, wgSourceId);
    const premiumIssue = (topic.issues || []).find((issue) => issue.id === premiumIssueId);
    if (premiumIssue) premiumIssue.sourceIds = addUniqueString(premiumIssue.sourceIds, wgSourceId);
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === reformEventId);
  if (reformEvent) reformEvent.sourceIds = addUniqueString(reformEvent.sourceIds, wgSourceId);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: expertArticleId,
      title: "総付規制の見直しの観点",
      publisher: "池田・染谷法律事務所",
      author: "染谷隆明・竹蓋春香",
      publishedAt: "2026-04-13",
      collectedAt: "2026-09-10",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_04startup/260413/startup13_03.pdf",
      sourceType: "secondary",
      sourceLabel: "専門家提出資料・政策提言",
      status: "adopted",
      summary: "内閣府の規制改革ワーキング・グループに提出された実務家資料。総付規制について、物価・販売促進手法の変化、景品該当性やポイント・デジタルアイテム等をめぐる法令遵守コスト、執行状況、海外制度を材料に再点検を提言する。現行法の解釈そのものではなく、政策見直しに向けた一つの専門家意見として読む資料。",
      whyImportant: [
        "総付規制の見直しが単なる物価連動ではなく、ポイント・デジタル施策・複数キャンペーン等の実務上の判定コストとも結び付いていることを具体化している",
        "米国・ドイツ・フランス・台湾との比較や過去の執行状況を通じ、規制改革実施計画の背景にある論点を一次資料だけより立体的に把握できる",
        "政策提言であることを前提に読むことで、将来案と現在の景品表示法上の上限を混同せず制度見直しの射程を考えられる"
      ],
      audience: ["企業法務", "広告・マーケティング担当", "キャンペーン企画", "消費者法・規制対応担当"],
      audienceReason: "ポイント、デジタル特典、複数施策など現行の総付規制で判断が難しくなる実務場面と、制度見直しの政策的背景を把握するため。",
      categories: ["消費者法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [premiumIssueId, "display-advertiser-control"],
      primarySourceIds: [wgSourceId, planSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [wgSourceId],
      whatChanged: "整理変更なし／総付景品規制の政策見直しについて、現行上限の変更を先取りせず、実務上の判定コスト・販売促進手法の変化・比較法という検討背景を補強した。"
    }
  ]);
})();

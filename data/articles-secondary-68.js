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
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "advertising-display-control";
  const planSourceId = "source-cao-regulatory-reform-premiums-substantiation-2026";
  const wgSourceId = "source-cao-startup-wg13-total-premium-2026";
  const planArticleId = "article-cao-regulatory-reform-premiums-substantiation-2026";
  const expertArticleId = "article-ikeda-someya-total-premium-review-2026";
  const reformEventId = "premium-display-regulatory-review-2026";
  const premiumIssueId = "display-premium-cap-review-2026";
  const substantiationIssueId = "display-substantiation-ad-operation-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: planSourceId,
      title: "規制改革実施計画（総付景品の上限額引上げ・不実証広告規制の見直し）",
      type: "guideline",
      typeLabel: "閣議決定・制度見直し",
      authority: "内閣府",
      publishedAt: "2026-07-21",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/publication/program/260721/01_program.pdf",
      importance: "高",
      whyImportant: "2026年7月21日閣議決定の規制改革実施計画のうち、総付景品の上限額と不実証広告規制の運用について、令和8年度に検討を開始し令和9年度に結論を得る方針を示した一次資料。現行の上限額・合理的根拠資料の基準自体を変更した資料ではない。",
      topics: [topicSlug]
    },
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
    topic.summary = "No.1表示、口コミ・ステルスマーケティングに加え、総付景品の上限額と不実証広告規制の運用見直しを含め、広告主が表示根拠・販売促進施策・外部委託をどう管理するかを整理する。";
    topic.lastUpdated = "2026-09-10";
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = addUniqueString(topic.sourceIds, planSourceId);
    topic.sourceIds = addUniqueString(topic.sourceIds, wgSourceId);
    topic.issues = addUniqueById(topic.issues, [
      {
        id: premiumIssueId,
        title: "総付景品の上限額はいつ・どう見直されるか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "2026年7月21日の規制改革実施計画は、取引価額1,000円未満の場合の200円という定額部分と、1,000円以上の場合の取引価額20％という定率部分の双方について、令和8年度に検討を開始し、令和9年度に結論を得た上で速やかに必要な措置を講ずる方針を示した。現時点で上限額は変更されていない。",
        exception: "検討過程で示された具体的な引上げ幅や規制廃止を含む意見は政策提言であり、現行ルールや政府の確定方針として扱わない。",
        uncertain: "最終的な上限額、告示の改正内容、適用開始時期、将来の定期的な再点検の方法はいずれも今後の検討事項である。",
        sourceIds: [planSourceId, wgSourceId]
      },
      {
        id: substantiationIssueId,
        title: "不実証広告規制の調査・資料提出運用はどう見直されるか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "規制改革実施計画は、景品表示法7条2項の不実証広告規制について、事前調査や合理的根拠資料の提出要求時に消費者庁の考える表示上の印象・認識を可能な限り書面で説明することや、措置命令時に資料が合理的根拠に当たらない理由を具体的に説明・公表することを検討し、令和9年度に結論を得る方針を示した。",
        exception: "これは運用指針の改正を含む検討方針であり、現行の景品表示法7条2項や現在の合理的根拠資料の判断基準を直ちに変更するものではない。",
        uncertain: "事前調査時の説明方法、書面化の範囲、理由公表の粒度、運用指針の具体的な改正内容は未確定である。",
        sourceIds: [planSourceId]
      }
    ]);
    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "2026年7月21日閣議決定の規制改革実施計画は、総付景品の200円・20％という現行上限の双方と、不実証広告規制の調査・資料提出時の説明運用について、令和8年度に検討を開始し令和9年度に結論を得る方針を示した。現時点で現行ルール自体は変更されていない。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "総付景品の引上げや不実証広告規制の運用改善は政策検討中のため、キャンペーン・広告審査では現行の上限額と現行指針を適用し、将来の見直しを別トラックで追跡する必要がある。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "総付景品キャンペーンでは将来の引上げを先取りせず現行の200円・20％基準で審査し、消費者庁の調査結果・告示改正や不実証広告規制の運用指針改正が公表された時点で審査基準と証拠提出手順を更新する。"
      );
      topic.currentSummary.uncertain = addUniqueText(
        topic.currentSummary.uncertain,
        "総付景品の新たな上限額、不実証広告規制の具体的な運用改正、これらの適用開始時期はいずれも未確定である。"
      );
    }
    topic.overview = addUniqueText(
      topic.overview,
      "2026年の規制改革実施計画では、総付景品の上限額と不実証広告規制の運用が新たな見直し対象になったため、現在適用されるルールと将来の政策検討を分けて追います。"
    );
    topic.practicalImpacts = addUniqueString(topic.practicalImpacts, "総付景品キャンペーン設計");
    topic.practicalImpacts = addUniqueString(topic.practicalImpacts, "不実証広告対応・根拠資料提出");
  }

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "景品表示法・総付景品／不実証広告運用 2026年規制改革",
      eventType: "policy_review",
      lawId: "premium-representations-act",
      lawLabel: "景品表示法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [planSourceId, wgSourceId],
      sourceIds: [planSourceId, wgSourceId],
      articleIds: [planArticleId, expertArticleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: planArticleId,
      title: "規制改革実施計画―総付景品の上限額引上げ・不実証広告規制の見直し",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2026-07-21",
      collectedAt: "2026-09-10",
      url: "https://www8.cao.go.jp/kisei-kaikaku/kisei/publication/program/260721/01_program.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・閣議決定／制度見直し",
      status: "adopted",
      summary: "2026年7月21日閣議決定の規制改革実施計画。総付景品については現行の取引価額1,000円未満200円・1,000円以上20％の両方を調査・検討し、不実証広告規制については事前調査・合理的根拠資料提出要求時の説明や措置命令時の理由説明・公表を含む運用改善を検討する。いずれも令和8年度に検討開始、令和9年度に結論予定で、現時点のルール変更ではない。",
      whyImportant: [
        "総付景品の定額部分と定率部分の双方が正式な見直し対象になったことを一次資料で確認できる",
        "不実証広告規制について、消費者庁と事業者の意思疎通や合理的根拠資料を否定する理由の説明・公表まで検討対象が具体化されている",
        "現行ルールと将来の制度見直しを混同せず、広告・キャンペーン審査の更新時点を追跡できる"
      ],
      audience: ["企業法務", "広告・マーケティング担当", "コンプライアンス", "販売促進・キャンペーン担当"],
      audienceReason: "景品施策や表示根拠の審査で、現在守るべき基準を維持しつつ、2026～2027年度の制度・運用見直しを先回りし過ぎず追うため。",
      categories: ["消費者法", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [premiumIssueId, substantiationIssueId],
      primarySourceIds: [planSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [planSourceId],
      whatChanged: "景品表示法の現在の規律は維持されたまま、総付景品の上限額と不実証広告規制の運用が政府の正式な見直し対象となり、令和8年度検討開始・令和9年度結論という追跡軸が加わった。"
    },
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
      whatChanged: "整理補強／総付景品規制の政策見直しについて、現行上限の変更を先取りせず、実務上の判定コスト・販売促進手法の変化・比較法という検討背景を追加した。"
    }
  ]);
})();

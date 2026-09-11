(() => {
  const topicSlug = "ssbj-statutory-sustainability-disclosure";
  const sourceId = "source-fsa-edinet-taxonomy-2027-proposal";
  const articleId = "article-fsa-edinet-taxonomy-2027-proposal";
  const issueId = "ssbj-edinet-taxonomy-2027";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "2027年版EDINETタクソノミ（案）の公表について",
      type: "guidance",
      typeLabel: "一次資料・EDINETタクソノミ案／サステナビリティXBRL対応",
      authority: "金融庁",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/search/20260911.html",
      importance: "高",
      whyImportant: "SSBJ基準の法定開示をEDINETで提出するための2027年版タクソノミ案。サステナビリティ関連開示タクソノミを新設し、ISSBタクソノミをインポートして利用する実装方針と、提出書類ごとの適用時期を確認できる。2026年10月13日まで意見募集であり、最終版ではないことも明確である。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    const existingIssueIds = new Set((topic.issues || []).map((issue) => issue.id));
    const newIssue = {
      id: issueId,
      title: "SSBJ法定開示をEDINET・XBRLでどう実装するか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "金融庁の2027年版EDINETタクソノミ案では、サステナビリティ開示基準の適用に対応するため「サステナビリティ関連開示タクソノミ」を新設し、IFRS財団のISSBタクソノミをインポートして利用する。提出会社は、最終版の要素・作成ガイド・技術資料を前提に、SSBJ開示内容とXBRLタグ付け・EDINET提出工程を接続する準備が必要となる。",
      exception: "2026年9月11日時点ではパブリックコメント中の案であり、タクソノミ要素、作成ガイド、技術資料の内容は最終化まで変更され得る。EDINETタクソノミ案の公表それ自体を、新たなSSBJ開示義務や金商法改正と扱わない。",
      uncertain: "意見募集は2026年10月13日17時までであり、最終版の公表内容、要素の変更、実務上のタグ付け・検証手順は最終タクソノミと関連資料を確認する必要がある。",
      sourceIds: [sourceId]
    };

    return {
      ...topic,
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "金融庁は2026年9月11日、2027年版EDINETタクソノミ案を公表し、SSBJ基準の法定開示に対応する「サステナビリティ関連開示タクソノミ」を新設する案を示した。要素追加ではIFRS財団のISSBタクソノミをインポートして利用する。",
          "2027年版EDINETタクソノミ案は、有価証券報告書では2027年3月31日以後に終了する事業年度・特定期間に係る書類から、半期報告書では2027年4月1日以後に開始する事業年度・特定期間に係る書類から適用する案で、2026年10月13日17時まで意見募集が行われている。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "SSBJ対応は開示内容・第三者保証だけでなく、EDINET上のXBRLタグ設計、作成ガイド、提出システム・開示支援ベンダーとの接続まで実装対象が広がっている。もっとも、2027年版タクソノミは現時点では案なので、最終版と法定開示ルールを分けて管理する。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "SSBJ適用対象会社は、開示項目のデータオーナーとXBRLタグ付け担当を対応付け、EDINET提出システム・開示支援ベンダーを含むテスト工程を準備する。",
          "有価証券報告書・半期報告書・有価証券届出書・発行登録書で適用開始条件が異なるため、自社が提出する書類ごとに2027年版タクソノミへの切替時期を管理する。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "2027年版EDINETタクソノミ、XBRL作成ガイド、XBRL参考技術資料は2026年9月11日時点で案であり、パブリックコメントを踏まえた最終版の変更を確認する必要がある。"
        ])
      },
      issues: existingIssueIds.has(issueId) ? (topic.issues || []) : (topic.issues || []).concat([newIssue]),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["EDINET・XBRLタグ設計", "開示システム・提出テスト"])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "2027年版EDINETタクソノミ（案）の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-12",
      url: "https://www.fsa.go.jp/search/20260911.html",
      sourceType: "primary",
      sourceLabel: "一次資料・EDINETタクソノミ案／サステナビリティXBRL対応",
      status: "adopted",
      summary: "金融庁が公表した2027年版EDINETタクソノミ案。サステナビリティ開示基準の適用に対応して「サステナビリティ関連開示タクソノミ」を新設し、IFRS財団のISSBタクソノミをインポートして利用する。2027年3月期以降の有価証券報告書等について書類種別ごとの適用時期を示し、XBRL作成ガイド・参考技術資料も更新する案で、2026年10月13日まで意見募集が行われている。",
      whyImportant: [
        "SSBJ法定開示をEDINETへ実装する際のXBRL・タグ付けの公式な移行案を確認できる",
        "国内独自のサステナビリティ関連タクソノミとISSBタクソノミの接続方法が示され、開示システムやベンダー対応の前提になる",
        "有価証券報告書、半期報告書、有価証券届出書、発行登録書で異なる適用開始条件を一次資料から確認できる",
        "パブリックコメント段階の案であるため、確定済みのSSBJ義務と未確定の技術実装を分けて管理できる"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ", "経理・開示システム担当"],
      audienceReason: "SSBJ開示内容をEDINET上のXBRLタグ付けと提出工程へ落とし込み、2027年版タクソノミへの移行テストを準備するため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId],
      primarySourceIds: [sourceId],
      whatChanged: "論点更新／SSBJ法定開示の内容・第三者保証に加え、2027年版EDINETタクソノミ案によるXBRLタグ付け・提出実装を独立論点として追加した。"
    }
  ]);
})();

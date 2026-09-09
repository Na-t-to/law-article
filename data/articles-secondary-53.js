(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "consumer-contract-law-review-2026");
  if (topic) {
    topic.lastUpdated = "2026-09-09";
    topic.lastVerified = "2026-09-09";
    addUnique(topic.sourceIds, ["source-caa-consumer-contract-interim-draft-sep9-2026"]);
    addUnique(topic.currentSummary?.facts, [
      "2026年9月9日の第9回検討会では、計9回の審議を踏まえた『中間取りまとめ（案）』の9月版が提示された。消費者庁の公表ページ・資料はいずれも現時点で『案』表記であり、法案提出・法律成立・施行には至っていない。",
      "9月9日版は、継続的な消費者契約からの離脱について、解約妨害の禁止に加え、事業者が合理的な離脱方法を提供するよう努める規律、解約方法・条件の情報提供、契約更新・変更、消費者死亡時の対応手順まで一体で整理している。"
    ]);
    addUnique(topic.currentSummary?.interpretations, [
      "9月9日版は検討会の議論を中間的に集約した資料として実務上の方向性を読む価値が高いが、現行の消費者契約法上の義務を置き換える資料ではない。解約UI・電話受付・返金等の現行運用を点検しつつ、法案化・条文化・下位法令の具体化を別段階として追う必要がある。"
    ]);
    addUnique(topic.currentSummary?.implications, [
      "サブスクリプション等の継続契約では、解約申入れの受付拒否・不当な遅延、解約判断を左右する説明、解約導線、条件表示、契約更新・変更通知、契約者死亡時の手続を横断して棚卸しし、今後の法案化に備える。"
    ]);
    [
      "consumer-contract-vulnerability-release",
      "consumer-contract-cancellation-obstruction",
      "consumer-contract-cancellation-fees"
    ].forEach((issueId) => {
      const issue = (topic.issues || []).find((item) => item.id === issueId);
      if (issue) addUnique(issue.sourceIds, ["source-caa-consumer-contract-interim-draft-sep9-2026"]);
    });
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "consumer-contract-law-review-2026");
  if (reformEvent) {
    addUnique(reformEvent.sourceIds, ["source-caa-consumer-contract-interim-draft-sep9-2026"]);
    addUnique(reformEvent.matchSourceIds, ["source-caa-consumer-contract-interim-draft-sep9-2026"]);
  }
})();

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-caa-consumer-contract-interim-draft-sep9-2026",
    "title": "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ（案）（2026年9月9日版）",
    "type": "government_material",
    "typeLabel": "消費者庁・第9回検討会／中間取りまとめ案",
    "authority": "消費者庁",
    "publishedAt": "2026-09-09",
    "url": "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/assets/consumer_system_cms205_260909_04.pdf",
    "importance": "最高",
    "whyImportant": "2026年9月9日の第9回検討会で提示された最新の中間取りまとめ案。消費者の多様な脆弱性への配慮、継続契約からの離脱、解約妨害、更新・変更、死亡時対応、解約料等を、計9回の審議を踏まえて整理している。",
    "topics": ["consumer-contract-law-review-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-caa-consumer-contract-interim-draft-sep9-2026",
    "title": "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ（案）（2026年9月9日版）",
    "publisher": "消費者庁",
    "author": "消費者庁／消費者契約法検討会",
    "publishedAt": "2026-09-09",
    "collectedAt": "2026-09-09",
    "url": "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/047379.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・第9回検討会／消費者契約法見直し",
    "status": "adopted",
    "summary": "2026年9月9日の第9回消費者契約法検討会で提示された中間取りまとめ案の9月版。消費者の多様な脆弱性への配慮規定と指針・官民協議会、一定の場合の契約拘束力からの解放、継続契約の解約妨害禁止、合理的な離脱方法・解約条件の情報提供、契約更新・変更、死亡時対応、解約料条項の在り方を整理する。消費者庁の公表資料は現時点でも『案』であり、成立・施行済みの規律ではない。",
    "whyImportant": [
      "8月31日版の後の第9回審議を踏まえた最新の一次資料として、法案化前の到達点を確認できる",
      "解約妨害だけでなく、合理的な離脱方法、解約条件の情報提供、更新・変更、死亡時対応まで継続契約の運用全体を確認できる",
      "消費者の脆弱性への配慮規定、行政指針・官民協議会という新しい規律手法の方向を追える",
      "資料が『案』であることを維持しており、現行義務と将来の制度設計を混同せず読める"
    ],
    "audience": ["企業法務", "B2Cサービス・EC担当", "サブスクリプション事業担当", "カスタマーサポート・UX担当"],
    "audienceReason": "継続契約の解約受付・UI・説明・更新変更・死亡時対応を将来の消費者契約法見直しに照らして棚卸ししつつ、未成立案を現行法として扱わないため。",
    "categories": ["契約・取引", "消費者法・表示", "IT・デジタル"],
    "relatedTopics": ["consumer-contract-law-review-2026"],
    "relatedIssues": ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
    "primarySourceIds": ["source-caa-consumer-contract-interim-draft-sep9-2026", "source-consumer-contract-act-current"],
    "reformEventId": "consumer-contract-law-review-2026",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-caa-consumer-contract-interim-draft-sep9-2026"],
    "whatChanged": "中間取りまとめ案更新／第9回検討会の9月版を追加し、継続契約の離脱・解約妨害・更新変更・死亡時対応・解約料等の最新整理を反映。"
  }
]);

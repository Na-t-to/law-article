(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "economic-security-promotion-act-2026-oesa");
  if (topic) {
    addUnique(topic.sourceIds, ["source-cas-economic-security-review-12-2025"]);
    [
      "economic-security-critical-services-2026",
      "economic-security-medical-infrastructure-2026",
      "economic-security-oesa-jbic-2026",
      "economic-security-public-private-council-2026"
    ].forEach((issueId) => {
      const issue = (topic.issues || []).find((item) => item.id === issueId);
      if (issue) addUnique(issue.sourceIds, ["source-cas-economic-security-review-12-2025"]);
    });
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "economic-security-promotion-jbic-2026-amendment");
  if (reformEvent) {
    addUnique(reformEvent.relatedTopics, ["economic-security-promotion-act-2026-oesa"]);
    addUnique(reformEvent.sourceIds, ["source-cas-economic-security-review-12-2025"]);
    addUnique(reformEvent.matchSourceIds, ["source-cas-economic-security-review-12-2025"]);
  }
})();

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-cas-economic-security-review-12-2025",
    "title": "「経済安全保障法制に関する有識者会議」（第12回）議事要旨",
    "type": "government_material",
    "typeLabel": "内閣官房・制度見直し検討資料",
    "authority": "内閣官房",
    "publishedAt": "2025-11-14",
    "url": "https://www.cas.go.jp/jp/seisaku/keizai_anzen_hosyohousei/r7_dai12/gijiyoshi.pdf",
    "importance": "高",
    "whyImportant": "2026年改正に先立ち、経済安全保障推進法の見直し開始と、基幹インフラへの医療追加、サプライチェーン強靱化等の検討状況を確認できる公式の審議記録。後の成立法と検討段階を区別する基準になる。",
    "topics": ["economic-security-promotion-act-2026-oesa"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-amt-economic-security-promotion-reform-outlook-2025",
    "title": "経済安全保障推進法の2026年以降改正に向けた動向",
    "publisher": "アンダーソン・毛利・友常法律事務所",
    "author": "松本 拓・鈴木 潤・石川 雅人",
    "publishedAt": "2025-12-18",
    "collectedAt": "2026-09-09",
    "url": "https://www.amt-law.com/insights/newsletters/newsletter_20251218001_ja_001/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・制度見直し実務解説／経済安全保障推進法",
    "status": "adopted",
    "summary": "2026年改正前の検討段階で、経済安全保障推進法の見直しを、特定重要物資の供給に不可欠な役務への支援、医療分野の基幹インフラ追加、重要な海外事業の支援、経済安全保障シンクタンク、官民協議会、データセキュリティまで横断して整理した解説。後に成立した令和8年法律第38号の制度と比較することで、改正につながった論点と、当時は検討対象だった別論点を区別して立法経緯を追える。",
    "whyImportant": [
      "成立法の条文だけでは見えにくい、役務・医療・海外事業支援等がなぜ改正課題になったかを政府会議資料と結び付けて理解できる",
      "海底ケーブル敷設役務や医療DX・特定機能病院など、対象拡大の背景となった具体的なユースケースを確認できる",
      "シンクタンク・官民協議会に加え、当時検討されていたデータセキュリティも扱っており、最終的な2026年改正の射程と検討過程を混同せず比較できる",
      "現在の制度内容は成立後の一次資料で確認しつつ、2025年末時点の実務家による論点整理を立法経緯の高品質な補助線として使える"
    ],
    "audience": ["企業法務", "経済安全保障・リスク管理担当", "医療・インフラ事業者", "海外事業・投資担当"],
    "audienceReason": "2026年改正の現在地だけでなく、役務・医療・海外事業・官民協議会が制度化された背景と、検討過程で併走していた論点を区別して理解するため。",
    "categories": ["危機管理・コンプライアンス", "契約"],
    "relatedTopics": ["economic-security-promotion-act-2026-oesa"],
    "relatedIssues": ["economic-security-critical-services-2026", "economic-security-medical-infrastructure-2026", "economic-security-oesa-jbic-2026", "economic-security-public-private-council-2026"],
    "primarySourceIds": ["source-cas-economic-security-review-12-2025", "source-cao-economic-security-promotion-jbic-overview-2026"],
    "reformEventId": "economic-security-promotion-jbic-2026-amendment",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-cas-economic-security-review-12-2025"],
    "whatChanged": "バックフィル／2026年改正前の主要な検討論点を、後の成立法と比較して読めるアンダーソン・毛利・友常の実務解説を追加した。"
  }
]);

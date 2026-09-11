(() => {
  const topicSlug = "bank-subsidiary-business-succession";
  const reformEventId = "banking-regulations-investment-subsidiary-2026";
  const wgSourceId = "source-fsa-regional-finance-wg-report-2025";
  const articleId = "article-amt-regional-finance-investment-specialist-2026-02-20";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: wgSourceId,
      title: "金融審議会「地域金融力の強化に関するワーキング・グループ」報告書",
      type: "guideline",
      typeLabel: "一次資料・金融審議会ワーキング・グループ報告書",
      authority: "金融庁",
      publishedAt: "2025-12-18",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/tosin/20251218/01.pdf",
      importance: "高",
      whyImportant: "2026年6月の銀行法施行規則等改正に先立ち、投資専門会社の投資対象・業務範囲の緩和、事業承継会社・ベンチャービジネス会社の要件見直し等の政策的な方向性を整理した一次資料。最終改正で実施された事項と、中長期の検討課題として残された事項を区別する基礎になる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      lastVerified: "2026-09-12",
      sourceIds: addUniqueStrings(topic.sourceIds, [wgSourceId])
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) => {
    if (event.id !== reformEventId) return event;
    return {
      ...event,
      sourceIds: addUniqueStrings(event.sourceIds, [wgSourceId])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "「地域金融力の強化に関するワーキング・グループ」報告書の概要 ―投資専門会社を通じた資本性資金の供給の促進等について―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "戸塚 貴晴・村井 惠悟・中島 庸元",
      publishedAt: "2026-02-20",
      collectedAt: "2026-09-12",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260220001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／地域金融・銀行法",
      status: "adopted",
      summary: "2025年12月の金融審議会報告書をもとに、銀行等の投資専門会社を通じた資本性資金供給の見直しを実務目線で整理する。株式会社以外への資金供給、ベンチャービジネス会社・事業承継会社の要件緩和、M&A仲介の業務範囲追加といった後の2026年6月改正につながる事項に加え、業務範囲規制の更なる緩和、大口信用供与規制、銀行持株会社から一般持株会社への移行など中長期検討事項も区別している。",
      whyImportant: [
        "最終改正だけでは見えにくい規制緩和の政策目的と、投資専門会社を事業承継・成長支援に使う制度設計の背景を把握できる。",
        "2026年6月に実施された見直しと、報告書段階では中長期課題にとどまった論点を分けて読めるため、制度の射程を過大評価しにくい。",
        "投資対象の拡大だけでなくM&A仲介の追加まで一体で解説しており、資本参加とM&A支援を組み合わせる銀行グループの実務を検討しやすい。"
      ],
      audience: ["金融機関法務・企画", "M&A・事業承継担当", "企業法務", "ファンド・投資担当"],
      audienceReason: "2026年改正の成立過程と政策目的を確認し、最終化された規制緩和と今後の検討課題を分けて事業承継案件の制度設計に反映するため。",
      categories: ["事業再生・金融", "M&A"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "bank-investment-subsidiary-business-succession-scope",
        "bank-investment-subsidiary-ma-intermediation",
        "bank-investment-subsidiary-transaction-structure"
      ],
      primarySourceIds: [wgSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [wgSourceId],
      whatChanged: "整理変更なし／2026年6月改正の政策形成過程と、実施事項・中長期検討事項の切り分けを補完する実務解説をバックフィルした。"
    }
  ]);
})();

(() => {
  const topicSlug = "product-safety-four-acts-ecommerce-child-products";
  const sourceId = "source-mhlw-caa-product-safety-pledge-osh-2026";
  const articleId = "article-mhlw-product-safety-pledge-osh-2026";
  const issueId = "product-safety-pledge-unsafe-products";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "製品安全誓約（日本国）に新たに加わる対象製品（安全ではない製品）について",
      type: "guidance",
      typeLabel: "官民協働・製品安全誓約／対象製品追加",
      authority: "厚生労働省／消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.mhlw.go.jp/content/11303000/001747300.pdf",
      importance: "高",
      whyImportant: "オンラインマーケットプレイスの自主的な製品安全対応について、2026年9月10日から労働安全衛生法所管製品の一部を『安全ではない製品』として追加した一次資料。石綿含有製品や、厚生労働省の試験等で構造規格不適合が確認された防じんマスク、保護帽、墜落制止用器具等が対象となり、同日からKPI対象にも加わったことを確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    return {
      ...topic,
      summary: "2025年12月25日施行の製品安全4法改正を中心に、海外事業者の直接販売と国内管理人、取引デジタルプラットフォームへの危害防止要請、子供用特定製品・子供PSCマーク、中古品特例に加え、製品安全誓約によるOMの自主的な危険製品対応を整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      overview: addUniqueStrings(topic.overview, [
        "法定の製品安全4法上の措置とは別に、主要なオンラインマーケットプレイスは『製品安全誓約（日本国）』に参加し、リコール製品や安全ではない製品の出品削除等を自主的に行う。2026年9月10日からは、労働安全衛生法が規制する製品の一部もこの自主対応の対象に加わった。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "2026年9月10日から、製品安全誓約（日本国）の『安全ではない製品』の対象に労働安全衛生法所管製品の一部が追加された。対象は、石綿含有製品（疑いを含む。）と、厚生労働省による試験等で構造規格を具備しない事実が確認された同法42条の譲渡等制限機械等であり、防じんマスク、防毒マスク、保護帽、電動ファン付き呼吸用保護具、墜落制止用器具等が含まれる。",
          "製品安全誓約は、製品安全に係る法的枠組みを超えた官民協働の自主的な取組である。2026年9月10日時点で9のOM運営事業者・15のOMが署名しており、新たに追加された労働安全衛生法対象製品は同日からKPIの対象となった。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "EC・マーケットプレイスの危険製品対応では、製品安全4法に基づく届出・PSマーク・行政要請などの法定対応と、製品安全誓約に基づく自主的な出品削除・再出品防止を別レイヤーとして管理する必要がある。法令上の販売規制対象だけを商品監視ルールへ登録すると、誓約上の自主対応対象を取りこぼし得る。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "製品安全誓約に署名するOM運営事業者は、危険製品の検知・出品削除・再出品防止のルールへ、労働安全衛生法所管の石綿含有製品や構造規格不適合が確認された譲渡等制限機械等を追加し、厚生労働省・消費者庁からの対象製品情報を継続的に取り込む。",
          "商品安全・Trust & Safety・法務は、PSマーク等の法定販売要件と製品安全誓約の自主対応対象を商品マスタや監視ルール上で区別し、削除理由と根拠を記録できるようにする。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "製品安全誓約の対象法令・対象製品や署名OMは今後も追加・変更され得るため、消費者庁の対象製品一覧、所管省庁向け手引き、KPI更新を継続確認する必要がある。"
        ])
      },
      issues: addUniqueById(topic.issues, [
        {
          id: issueId,
          title: "製品安全誓約の対象拡張をOM運用へどう反映するか",
          status: "authoritative",
          stage: "not_applicable",
          views: [],
          conclusion: "製品安全誓約に署名するOMは、法定義務とは区別した自主的な製品安全対応として、規制当局から示されるリコール製品・安全ではない製品の情報を出品削除等の運用へ反映する。2026年9月10日からは、石綿含有製品と、厚生労働省の試験等で構造規格不適合が確認された労働安全衛生法42条の譲渡等制限機械等も対象に含まれる。",
          exception: "今回の追加は労働安全衛生法が全てのOM運営事業者へ一般的な出品削除義務を新設したものではなく、製品安全誓約という自主的取組の対象拡張である。また、労働安全衛生法が規制する全製品が一律に対象となるわけではない。",
          uncertain: "対象製品・署名事業者・具体的な運用指標は更新され得るため、消費者庁と各所管省庁の最新一覧・手引き・KPIを確認する。",
          sourceIds: [sourceId]
        }
      ]),
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["製品安全誓約・自主出品削除", "労働安全衛生法対象製品のOM監視"])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "製品安全誓約（日本国）の対象に「労働安全衛生法」が加わります",
      publisher: "厚生労働省／消費者庁",
      author: "厚生労働省／消費者庁",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/stf/newpage_76064.html",
      sourceType: "primary",
      sourceLabel: "一次資料・製品安全誓約／対象製品拡張",
      status: "adopted",
      summary: "主要オンラインマーケットプレイスが参加する製品安全誓約（日本国）について、2026年9月10日から労働安全衛生法所管製品の一部を『安全ではない製品』として対象に追加した公表資料。石綿含有製品と、厚生労働省の試験等で構造規格不適合が確認された防じんマスク、保護帽、墜落制止用器具等が追加され、同日からKPI対象となった。",
      whyImportant: [
        "ECの危険製品管理が製品安全4法の法定対象だけでは完結しないことを具体的に示す",
        "石綿含有製品や構造規格不適合の保護具等について、OMの自主削除対象へ追加された範囲を一次資料で確認できる",
        "法定の出品削除要請と、製品安全誓約に基づく自主対応を分けて運用設計する材料になる",
        "新対象が2026年9月10日からKPI対象となり、実施状況の継続確認につながる"
      ],
      audience: ["EC・マーケットプレイス担当", "企業法務", "商品安全・品質保証", "Trust & Safety"],
      audienceReason: "OM上の危険製品検知・出品削除・再出品防止を、法定義務と自主的な製品安全対応の双方から更新する必要があるため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId],
      primarySourceIds: [sourceId],
      whatChanged: "論点更新／製品安全誓約の対象に労働安全衛生法所管製品の一部が追加され、OMの自主対応範囲を製品安全4法の法定措置と分けて整理した。"
    }
  ]);
})();

(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const additions = [
    {
      id: "article-fsa-digital-bond-solicitation-final-2026",
      title: "『金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      sourceType: "primary",
      sourceLabel: "一次資料・内閣府令公布／パブリックコメント結果",
      status: "adopted",
      summary: "金融庁が3つの金商法関係府令改正を最終化した資料。本テーマでは、社債発行企業のグループ企業による社債勧誘について、発行企業自身の勧誘と同視できる一定の場合を金融商品取引業から除外する改正と、そのパブリックコメント回答を中心に収録する。改正は2026年9月15日公布、当該勧誘規制の緩和は9月16日施行。",
      whyImportant: [
        "案ではなく最終公布資料で、グループ企業による社債勧誘の適用除外が2026年9月16日に施行されたことを確認できる",
        "金融庁回答により、制度はブロックチェーンを用いたデジタル社債だけに限定されず、対面・ウェブ双方の勧誘が対象になり得ることが明確になった",
        "対象証券、発行企業の勧誘方針、実施報告、保証・資金供給等の要件が示され、単なるグループ企業というだけでは適用除外にならないことを実務設計に落とせる"
      ],
      audience: ["企業法務", "財務・資金調達", "IR", "証券・金融規制担当", "グループ会社管理"],
      audienceReason: "社債をグループ会社経由で個人・取引先等へ勧誘する場合の登録要否と、適用除外を支える社内方針・報告・信用補完の実装を確認するため。",
      categories: ["金融商品取引・開示・IR", "契約"],
      relatedTopics: ["digital-bond-solicitation-2026"],
      relatedIssues: ["digital-bond-group-solicitation-exemption", "digital-bond-solicitation-channel-scope"],
      primarySourceIds: ["source-fsa-digital-bond-solicitation-final-2026"],
      reformEventId: "fiea-digital-bond-solicitation-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-digital-bond-solicitation-final-2026"],
      legacyReformInference: false,
      whatChanged: "最終化・施行／グループ企業による社債勧誘について一定の場合を金融商品取引業から除外する府令改正が公布され、2026年9月16日に施行された。"
    },
    {
      id: "article-tmi-digital-municipal-bonds-2026",
      title: "〖Web3ブログ〗デジタル地方債に関する実務及び法改正の動向",
      publisher: "TMI総合法律事務所",
      author: "成本治男",
      publishedAt: "2026-04-24",
      collectedAt: "2026-09-16",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18285.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所解説・デジタル証券／社債ST",
      status: "adopted",
      summary: "デジタル地方債を主題にしつつ、その前提として民間のデジタル社債（社債ST）の金商法上・私法上の構造と発行事例を整理する実務解説。社債STを第一項有価証券として扱う規制面と、会社法・民法上は一般社債として権利移転・対抗要件を設計する面を分け、デジタル特典付きの従来型社債との違いも示す。",
      whyImportant: [
        "『デジタル社債』を一括りにせず、社債STの金商法上の分類と会社法・民法上の一般社債としての構造を分けて説明している",
        "振替社債のような権利推定効・善意取得制度が明文で存在しない点と、それをトークン記録・社債原簿・管理運用で補う実務上の課題を確認できる",
        "ブロックチェーン等を利用していても電子記録移転有価証券表示権利等には該当しない『デジタル特典付き社債』があることを具体例で区別している"
      ],
      audience: ["企業法務", "財務・資金調達", "新規事業・Web3担当", "証券・金融規制担当"],
      audienceReason: "デジタル社債の商品名称ではなく法的構造を基準に、発行・販売・権利管理・投資家向け特典を設計するため。",
      categories: ["金融商品取引・開示・IR", "契約"],
      relatedTopics: ["digital-bond-solicitation-2026"],
      relatedIssues: [],
      primarySourceIds: ["source-fsa-digital-bond-solicitation-final-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／社債STの金商法上の分類と一般社債としての私法構造、デジタル特典付き社債との区別を整理する基礎解説をバックフィルした。"
    }
  ];
  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-noandt-sell-buy-flip-wi-20260918",
      title: "Sell-Buy-Flip型の表明保証保険への実務対応―売主・買主双方の観点から",
      publisher: "長島・大野・常松法律事務所",
      author: "松本渉／嘉悦レオナルド裕悟／小林直登",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20260918-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／Sell-Buy-Flip型表明保証保険",
      status: "adopted",
      summary: "国内M&Aでも利用が増えるSell-Buy-Flip型の表明保証保険について、売主がNBI・プロセスノート等の初期手配を行い、独占交渉権付与後に買主へ引受審査・証券交渉をFlipする典型プロセスを整理した実務解説。売主側ではクリーン・エグジットとオークション運営、VDDによるDD負担の調整、買主側ではDD不足による付保対象外リスク、最終契約と保険証券の並行交渉を具体化する。特に、ノン・リコースは保険証券だけで成立するのではなく、保険金請求を唯一・排他的な救済手段とすること等をSPA側で整える必要がある点が重要。",
      whyImportant: [
        "Sell-Buy-Flipを、売主・買主・保険ブローカー・保険会社の役割と時系列に分解し、M&Aプロセスへそのまま落とし込める",
        "表明保証保険の利用には十分なDDが前提で、DD不足の事項が付保対象外となれば買主に残余リスクが残ることを明確にしている",
        "ノン・リコースは保険証券の性質だけで実現せず、SPAの救済制限・求償関係・表明保証条項と保険条件を突合する必要があるという契約実務上の付加価値が高い"
      ],
      audience: ["M&A法務", "経営企画・M&A", "PE・投資担当", "企業法務", "リスク管理・保険担当"],
      audienceReason: "表明保証保険を前提とした入札・DD・SPA交渉・保険手配の工程と、売主・買主の残余リスクを設計するため。",
      categories: ["M&A", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["ma-representation-warranty-insurance"],
      relatedIssues: ["ma-wi-dd-insurability", "ma-wi-sell-buy-flip", "ma-wi-non-recourse-spa"],
      primarySourceIds: ["source-civil-code-current", "source-insurance-act-current"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／Sell-Buy-Flip型表明保証保険を、DD、VDD、オークション、SPAのノン・リコース条項、保険証券交渉まで一体のM&A実務として整理した。"
    },
    {
      id: "article-noandt-synthetic-wi-20251006",
      title: "シンセティック表明保証保険（Synthetic W&I insurance）のM&A実務への示唆",
      publisher: "長島・大野・常松法律事務所",
      author: "松本渉／長野圭祐",
      publishedAt: "2025-10-06",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20251006-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／シンセティック表明保証保険",
      status: "adopted",
      summary: "売主がM&A契約上の表明保証を提供しない場合でも、保険証券上に擬似的な表明保証を設けて買主の損失をカバーするシンセティックW&Iを解説する。完全なシンセティック型と一部を保険側で補うpartially syntheticを区別し、Distressed M&A、上場会社M&A、売主が表明保証に消極的な案件等の利用場面を整理。売主の表明保証がなくても十分なDDは引受審査の前提であり、欺罔の場合の責任や、日本では商品認可との関係から海外関係法人を被保険者として海外で保険証券を発行する必要がある場合があるなど、実装上の制約まで扱う。",
      whyImportant: [
        "SPA上の表明保証がない場合でも、保険証券側に擬似的な表明保証を設けるという、通常のW&Iとは異なるリスク配分の選択肢を理解できる",
        "Distressed M&A、上場会社M&A、売主が表明保証に消極的な取引等、通常の表明保証保険では難しい局面への具体的な適用可能性を示している",
        "シンセティック型でもDDは省略できず、欺罔時の責任や商品認可・発行地の問題も残るため、『保険で契約・調査を代替できる』という誤解を避けられる"
      ],
      audience: ["M&A法務", "経営企画・M&A", "事業再生・PE", "企業法務", "リスク管理・保険担当"],
      audienceReason: "売主が十分な表明保証を提供できない又は提供したくない案件で、買主保護と売主のクリーン・エグジットを両立する選択肢と限界を検討するため。",
      categories: ["M&A", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["ma-representation-warranty-insurance"],
      relatedIssues: ["ma-wi-dd-insurability", "ma-wi-non-recourse-spa", "ma-wi-synthetic"],
      primarySourceIds: ["source-civil-code-current", "source-insurance-act-current"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／売主が表明保証を提供しない取引で使われるシンセティックW&Iについて、利用場面、DD、欺罔、商品提供上の制約を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-jftc-oki-hitachi-atm-merger-20260918",
      title: "沖電気工業・日立製作所・日立チャネルソリューションズによるATM等事業統合の企業結合審査結果",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918kiketsu_oh.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業結合審査結果",
      status: "adopted",
      summary: "沖電気工業のATM・営業店端末等事業と日立チャネルソリューションズの統合について、公取委が、水平・垂直・混合型の競争懸念を検討した上で、当事会社が申し出た問題解消措置を前提に第1次審査でクリアした事例。紙幣入出金部・通帳記帳部では統合後シェア100%、ATM完成品では約65%となり、上流投入物の供給拒絶やATM監視受託業者への仕様開示拒否による排除リスクも認定した。措置は販売競争情報へのアクセス制限、既存取引先への供給確約、監視事業者への情報開示・支援、監視受託者による継続監視・定期報告を含み、主要措置は実行日から5年間継続する。",
      whyImportant: [
        "統合後100%となる上流モジュールや約65%となるATM完成品を含む高集中案件で、水平型だけでなく投入物閉鎖・顧客閉鎖や商品拡大型の排除リスクまで具体的に評価した最新事例を確認できる",
        "問題解消措置が事業譲渡だけではなく、供給確約、必要情報の開示・支援、競争機微情報へのアクセス制限、監視受託者による継続監視・定期報告を組み合わせ得ることが分かる",
        "5年間の履行・監視という継続コストを伴うため、M&Aの事業計画、SPA上の規制対応義務、クロージング後のオペレーションへ問題解消措置を織り込む必要性が見える"
      ],
      audience: ["M&A法務", "競争法担当", "経営企画・M&A", "事業部門・サプライチェーン担当"],
      audienceReason: "高集中・垂直統合を含む案件で、どの事実が排除懸念を生み、どのような行動的措置とモニタリングを当局が受け入れ得るかを、案件設計と契約条件へ落とすため。",
      categories: ["M&A", "独占禁止法・競争法"],
      relatedTopics: ["merger-control-antitrust"],
      relatedIssues: ["mc-substantive-review", "mc-remedies", "mc-predeal-planning"],
      primarySourceIds: ["source-jftc-oki-hitachi-atm-merger-2026"],
      legacyReformInference: false,
      whatChanged: "整理補強／高集中・垂直・混合型の競争懸念を、供給確約・情報開示・情報遮断・監視受託者による5年間の監視という問題解消措置で処理した最新企業結合事例を追加。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

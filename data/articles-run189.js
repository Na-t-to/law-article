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

  const reformEventId = "fefta-inward-investment-2026-amendment";
  const existingAmendment = (window.ARTICLE_DATA || []).find((item) => item?.id === "article-mof-fefta-amendment-2026");
  if (existingAmendment) {
    existingAmendment.reformEventId = reformEventId;
    existingAmendment.reformStageAtPublication = "partially_effective";
    existingAmendment.reformStageSourceIds = ["source-mof-fefta-amendment-2026"];
    existingAmendment.legacyReformInference = false;
  }
  const existingTmiLower = (window.ARTICLE_DATA || []).find((item) => item?.id === "article-tmi-fefta-amendment-lower-2026");
  if (existingTmiLower) {
    existingTmiLower.reformEventId = reformEventId;
    existingTmiLower.reformStageAtPublication = "partially_effective";
    existingTmiLower.reformStageSourceIds = ["source-mof-fefta-amendment-2026"];
    existingTmiLower.legacyReformInference = false;
  }

  const additions = [
    {
      id: "article-mof-fefta-final-rules-2026-09-16",
      title: "2027年施行 外為法改正・対内直接投資審査制度の政省令・告示公布",
      publisher: "財務省",
      author: "財務省",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/press_release/20260908204517.html",
      sourceType: "primary",
      sourceLabel: "一次資料・財務省／2026年改正外為法の施行政省令・告示",
      status: "adopted",
      summary: "2026年改正外為法の施行に必要な政令・省令・告示の公布を公表した財務省資料。主要規定は2027年1月4日施行、経過措置を経て2月3日に全面適用され、間接取得、リスク軽減措置、みなし外国投資家、非指定業種への事後介入、指定業種等の具体ルールが確定した。",
      whyImportant: [
        "法案・改正法段階で政省令に委ねられていた間接取得の届出閾値や投資家類型を確定ルールで確認できる",
        "リスク軽減措置が届出・変更審査・勧告命令へ接続することが明確になり、投資後の継続管理まで契約実務へ落とせる",
        "2027年1月4日の施行と2月3日の全面適用が示され、施行日前後のM&Aスケジュールを具体的に設計できる"
      ],
      audience: ["M&A法務", "企業法務", "投資・ファンド担当", "経済安全保障担当"],
      audienceReason: "2027年施行に向け、クロスボーダーM&Aの届出要否、投資家DD、契約条件、リスク軽減措置の管理を確定ルールで更新するため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["fefta-inward-investment-screening"],
      relatedIssues: ["fdi-indirect-acquisition", "fdi-risk-mitigation", "fdi-high-risk-investor", "fdi-nondesignated-postcontrol", "fdi-industry-scope-2027"],
      primarySourceIds: ["source-mof-fefta-final-rules-2026", "source-mof-fefta-final-summary-2026", "source-mof-fefta-amendment-2026"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mof-fefta-final-rules-2026", "source-mof-fefta-final-summary-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／2026年改正外為法の施行政省令・告示が公布され、間接取得の閾値、リスク軽減措置、みなし外国投資家、非指定業種への事後介入、指定業種の見直しと2027年1月4日施行・2月3日全面適用を反映した。"
    },
    {
      id: "article-tmi-fefta-amendment-upper-2026",
      title: "外為法改正案について〔上〕",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-05-11",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18314.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／間接取得・リスク軽減措置",
      status: "adopted",
      summary: "2026年外為法改正案のうち、外国法人等を介した日本企業株式の間接取得とリスク軽減措置の明文化を、クロスボーダーM&A・グループ内持分移管への影響まで含めて解説する。記事は法案段階のため、現在の閾値・施行条件は9月16日の最終政省令・告示を優先する。",
      whyImportant: [
        "日本企業を直接買わない海外M&Aでも外為法届出が生じ得る理由を取引ストラクチャーから理解できる",
        "ファンドのグループ内持分移管や外国親会社の役員構成まで間接取得規制が波及し得る点を実務例で把握できる",
        "法案段階で未確定だった閾値を現在の最終ルールと比較することで、制度趣旨と最終的な線引きを理解しやすい"
      ],
      audience: ["M&A法務", "投資・ファンド担当", "企業法務", "クロスボーダー取引担当"],
      audienceReason: "間接取得規制を海外案件のDD・ストラクチャリングへ落とす具体的な視点を得るため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["fefta-inward-investment-screening"],
      relatedIssues: ["fdi-indirect-acquisition", "fdi-risk-mitigation"],
      primarySourceIds: ["source-diet-fefta-bill-2026", "source-mof-fefta-final-summary-2026"],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-diet-fefta-bill-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／間接取得とリスク軽減措置をクロスボーダーM&Aのストラクチャーへ落とす実務解説を補完した。"
    },
    {
      id: "article-amt-fefta-reform-2026",
      title: "対内直接投資審査制度に関する外為法改正案と動向",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "松本拓・武士俣隆介・伊原ひかり",
      publishedAt: "2026-03-27",
      collectedAt: "2026-09-17",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260327002_ja_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／対内直接投資審査制度の2026年改正",
      status: "adopted",
      summary: "2026年外為法改正案を、事前届出件数の増加、リスク軽減措置、最終親会社等の支配権変更、外国政府等の影響下にある居住者、非指定業種への投資リスク、執行体制強化という制度全体の流れから整理したニュースレター。現在の確定ルールは9月16日の政省令・告示を優先する。",
      whyImportant: [
        "改正項目を個別条文ではなく対内直接投資審査の運用強化という一つの制度設計として俯瞰できる",
        "最終親会社等の変更や外国政府等の影響という、形式的な株式取得だけでは見落としやすいリスク要因を整理している",
        "法案段階の問題意識と最終政省令・告示を比較することで、企業がDD項目をどこまで広げるべきかを考えやすい"
      ],
      audience: ["企業法務", "M&A法務", "経済安全保障担当", "投資・ファンド担当"],
      audienceReason: "2026年改正の全体像を、投資審査実務・支配関係・執行体制まで含めて把握するため。",
      categories: ["M&A", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["fefta-inward-investment-screening"],
      relatedIssues: ["fdi-indirect-acquisition", "fdi-risk-mitigation", "fdi-high-risk-investor", "fdi-nondesignated-postcontrol"],
      primarySourceIds: ["source-diet-fefta-bill-2026", "source-mof-fefta-final-summary-2026"],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-diet-fefta-bill-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／2026年外為法改正を投資審査制度全体の運用強化として俯瞰する実務解説を補完した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

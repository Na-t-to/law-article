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

  const topic = "cross-border-collection-payment-services-act-2026";
  const reformEventId = "payment-services-act-cross-border-collection-2025";
  const primarySources = ["source-fsa-payment-services-amendment-final-2026", "source-fsa-cross-border-collection-comments-2026"];
  const issues = ["cross-border-collection-scope-2026", "cross-border-collection-exemptions-2026", "cross-border-collection-user-protection-2026"];

  const additions = [
    {
      id: "article-fsa-payment-services-cross-border-collection-final-2026",
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2025年改正資金決済法／クロスボーダー収納代行",
      status: "adopted",
      summary: "2025年改正資金決済法の施行に向けた政令・内閣府令等を最終化した金融庁資料。資金移動業関係では、国境をまたいで行う収納代行について為替取引規制の適用を除外する類型を定め、改正法・政令・内閣府令等を原則2026年6月1日から施行・適用した。専用のパブリックコメント回答では、資金決済法2条の2の射程や各除外類型、利用者保護上の例外を具体化している。",
      whyImportant: [
        "クロスボーダー収納代行が為替取引となる制度と適用除外の下位ルールが最終化され、施行日も2026年6月1日と確定した公式資料である",
        "既存の収納代行・決済代行スキームについて、銀行業・資金移動業の登録要否を再点検するための基準になる",
        "同時公表の専用パブコメ回答により、国外事業者、多段階委託、銀行等への再委託、プラットフォーム等の具体的な境界を確認できる"
      ],
      audience: ["企業法務", "越境EC・プラットフォーム事業者", "決済・収納代行事業者", "FinTech・金融規制担当", "財務・AML担当"],
      audienceReason: "既存・新規の越境決済スキームについて、資金移動業等の規制対象性と適用除外を2026年6月施行の確定ルールで点検するため。",
      categories: ["契約", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: issues,
      primarySourceIds: primarySources,
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: primarySources,
      legacyReformInference: false,
      whatChanged: "バックフィル・確定ルールを収録／2025年改正資金決済法のクロスボーダー収納代行規制について、適用除外を含む下位法令が最終化され、2026年6月1日施行・適用が確定した。"
    },
    {
      id: "article-tmi-cross-border-collection-2026",
      title: "クロスボーダー収納代行に係る規制内容の解説",
      publisher: "TMI総合法律事務所",
      author: "清水秋帆",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18745.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／クロスボーダー収納代行",
      status: "adopted",
      summary: "2026年6月施行後のクロスボーダー収納代行規制を、資金決済法2条の2の射程、8つの適用除外類型、利用者保護上の除外不適用まで図解している実務解説。銀行等への再委託は銀行等が自らの為替取引として資金を受け入れる場合に限られ、自社名義口座を使うだけでは足りないこと、プラットフォームや再委託の責任分担、賭博・証券取引等に関するリスクまで整理する。",
      whyImportant: [
        "一次資料に散在する適用除外を、銀行等への再委託、エスクロー、プラットフォーム、グループ内、カード等の類型に分けて実務フローとして把握できる",
        "『銀行口座を使っている』『プラットフォームである』といった外形だけでは除外にならない具体例を示し、契約・資金フローのどこを見るべきかが分かる",
        "適用除外に入っても利用者保護上の理由で規制対象へ戻る場合を整理し、既存事業も含めた再点検を促している"
      ],
      audience: ["企業法務", "越境EC・マーケットプレイス", "決済・収納代行事業者", "FinTech担当", "事業開発・財務・AML担当"],
      audienceReason: "自社スキームを法令上の除外類型へ当てはめる際に、資金フロー・契約関係・責任分担の確認ポイントを具体化するため。",
      categories: ["契約", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: issues,
      primarySourceIds: primarySources,
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: primarySources,
      legacyReformInference: false,
      whatChanged: "実務解説を補完／クロスボーダー収納代行の8つの適用除外と、利用者保護上の理由で除外が外れる場合を、実際の契約・資金フローへ落とし込むための解説をバックフィルした。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

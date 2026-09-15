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

  const addition = {
    id: "article-nco-critical-infrastructure-safety-guideline-2026",
    title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
    publisher: "内閣官房 国家サイバー統括室",
    author: "内閣官房 国家サイバー統括室",
    publishedAt: "2026-09-11",
    collectedAt: "2026-09-15",
    url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
    sourceType: "primary",
    sourceLabel: "一次資料／重要インフラ・安全基準等策定ガイドライン／施行前",
    status: "adopted",
    summary: "重要インフラ統一基準に基づき、重要インフラ所管省庁等が各分野の安全基準等を策定・改定する際に参照する詳細事項を示す最終版ガイドライン。2026年9月11日に策定され、重要インフラ統一基準とともに2026年10月1日施行予定である。これにより、8月時点で意見募集されていた案が確定し、分野別安全基準等へ具体化するための共通参照文書が揃った。",
    whyImportant: [
      "重要インフラ統一基準から、所管省庁・業界団体が整備する分野別安全基準等へ対策を具体化する際の参照文書が最終化したことを一次資料で確認できる",
      "2026年10月1日の施行に向け、企業が自社分野の強制基準・推奨基準・業界ガイドライン・内規の改定を追う基準点になる",
      "サイバー対処能力強化法の届出・報告義務と、サイバーセキュリティ基本法に基づく重要インフラ統一基準・安全基準等の整備という別制度を切り分けて管理できる"
    ],
    audience: ["企業法務", "情報セキュリティ・CISO", "重要インフラ事業者", "IT調達・ベンダー管理"],
    audienceReason: "重要インフラ統一基準の施行準備を、案ではなく最終版ガイドラインを基準に分野別の安全基準等と社内統制へ落とし込むため。",
    categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
    relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
    relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
    primarySourceIds: ["source-nco-critical-infrastructure-safety-guideline-2026"],
    reformEventId: "critical-infrastructure-unified-standard-2026",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [
      "source-nco-critical-infrastructure-unified-standard-2026",
      "source-nco-critical-infrastructure-safety-guideline-2026"
    ],
    legacyReformInference: false,
    whatChanged: "施行準備更新／安全基準等策定ガイドラインが2026年9月11日に最終化され、重要インフラ統一基準から各分野の安全基準等へ具体化する共通参照文書が確定した。"
  };

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([addition]);
  }
})();

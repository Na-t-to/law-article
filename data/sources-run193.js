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

  const existingUnified = (window.SOURCE_DATA || []).find((item) => item?.id === "source-nco-critical-infrastructure-unified-standard-2026");
  if (existingUnified) {
    existingUnified.whyImportant = "2025年改正サイバーセキュリティ基本法に基づく重要インフラ統一基準の公式資料。2026年9月11日に確定した安全基準等策定ガイドラインとともに10月1日施行予定であり、分野横断の基準と、所管省庁・業界団体が整備する分野別安全基準等との関係を確認する基準点となる。";
  }

  const additions = [
    {
      id: "source-nco-critical-infrastructure-safety-guideline-20260911",
      title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
      type: "guideline",
      typeLabel: "政府ガイドライン・重要インフラ安全基準等策定",
      authority: "国家サイバー統括室",
      publishedAt: "2026-09-11",
      url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
      importance: "最高",
      whyImportant: "2026年9月11日に確定し、重要インフラ統一基準とともに10月1日施行予定の最終ガイドライン。重要インフラ所管省庁や業界団体等が分野別の安全基準等を策定する際に参照する詳細事項を示し、案段階から確定版へ移ったことを確認できる一次資料。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

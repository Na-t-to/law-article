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

  const additions = [{
    id: "source-ppc-privacy-rulemaking-basic-1-2026",
    title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則の整備に向けた基本的な考え方（案）について①",
    type: "guideline",
    typeLabel: "一次資料・政令／規則整備検討資料",
    authority: "個人情報保護委員会",
    publishedAt: "2026-09-16",
    url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
    importance: "最高",
    whyImportant: "2026年改正個人情報保護法の施行に向け、本人同意不要例外、16歳未満の子供、特定生体個人情報について、政令・規則・ガイドラインで具体化する方向を初めて詳細に示した一次資料。現行法上の判断と将来の施行準備を分けて設計するための基準になる。",
    topics: ["personal-information-protection-2026-amendment"]
  }];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

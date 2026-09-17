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
      id: "source-ppc-privacy-rules-basic-thinking-20260916",
      title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則の整備に向けた基本的な考え方（案）について①",
      type: "government_material",
      typeLabel: "一次資料・個人情報保護委員会／2026年改正法の下位ルール検討",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
      importance: "最高",
      whyImportant: "2026年改正個人情報保護法について、同意取得例外、16歳未満の子供、顔特徴データ等の政令・委員会規則を具体化する最初の基本的な考え方（案）。成立済みの改正法と、未確定の下位ルールを分けて施行準備を進める基準資料。",
      topics: ["personal-information-protection-2026-amendment"]
    },
    {
      id: "source-ppc-safeguards-guideline-review-20260916",
      title: "個人情報の保護に関する法律についてのガイドライン（通則編）等における安全管理措置の手法の例示の追加等の検討について",
      type: "government_material",
      typeLabel: "一次資料・個人情報保護委員会／安全管理措置ガイドライン見直し",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-2.pdf",
      importance: "最高",
      whyImportant: "クラウド、MFA、ゼロトラスト、特権アカウント管理、ランサムウェア等の横展開対策を踏まえて、安全管理措置の『講じなければならない措置』と『手法の例示』の関係を整理し直す検討資料。現行義務と将来の例示追加を混同しないための一次資料。",
      topics: ["privacy-enforcement-breach-response"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

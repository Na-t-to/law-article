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
    id: "source-meti-business-reorganization-guideline-2020",
    title: "事業再編実務指針～事業ポートフォリオと組織の変革に向けて～（事業再編ガイドライン）",
    type: "guideline",
    typeLabel: "経済産業省・事業再編実務指針",
    authority: "経済産業省",
    publishedAt: "2020-07-31",
    url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/pdf/20200731003-1.pdf",
    importance: "高",
    whyImportant: "事業ポートフォリオの不断の見直しと、事業の切出しを含む事業再編を企業価値向上の観点から整理し、経営陣・取締役会・投資家の役割、検討プロセス、ガバナンス上の実務指針を示す公式資料。個別のM&A契約や会社法手続そのものを定める法令ではないが、カーブアウトを行う経営判断・準備の基礎になる。",
    topics: ["carveout-ma-business-sale"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.SOURCE_DATA = existing.concat(addition);
  }
})();

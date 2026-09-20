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
      id: "source-mhlw-social-insurance-expansion-2025",
      title: "社会保険の加入対象の拡大について",
      type: "law",
      typeLabel: "年金制度改正法・被用者保険の適用拡大／公式解説",
      authority: "厚生労働省",
      publishedAt: "2025-06-20",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284_00021.html",
      importance: "最高",
      whyImportant: "2025年年金制度改正法による短時間労働者の賃金要件撤廃、企業規模要件の段階的縮小・撤廃、個人事業所の適用拡大、保険料負担軽減措置を一体で確認できる厚生労働省の公式ハブ。",
      topics: ["social-insurance-expansion-part-time-workers"]
    },
    {
      id: "source-jps-premium-adjustment-20260911",
      title: "保険料調整制度とは",
      type: "guideline",
      typeLabel: "日本年金機構・保険料調整制度／運用案内",
      authority: "日本年金機構",
      publishedAt: "2026-09-11",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      importance: "高",
      whyImportant: "2026年10月から始まる保険料調整制度について、対象事業所・対象被保険者、3年間の軽減、事業主の追加負担と後日の調整という実務上の仕組みを確認できる。",
      topics: ["social-insurance-expansion-part-time-workers"]
    }
  ];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
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
  const addition = {
    id: "source-mof-fatf-io4-dnfbps-20260918",
    title: "5次のトリセツ―FATF第5次対日相互審査で示す官民のチカラ― 第5回：IO4（DNFBPsの監督・予防措置）",
    type: "report",
    typeLabel: "一次資料・財務省／FATF第5次相互審査・DNFBPs",
    authority: "財務省",
    publishedAt: "2026-09-18",
    url: "https://www.mof.go.jp/public_relations/finance/202609/202609i.html",
    importance: "高",
    whyImportant: "FATF第5次相互審査で独立評価されるDNFBPsについて、参入管理、リスク理解、予防措置、監督・モニタリング、是正措置までIO4の6つの評価軸と先行審査国の指摘を日本当局が整理した一次資料。",
    topics: ["aml-kyc-criminal-proceeds"]
  };
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.SOURCE_DATA = existing.concat(addition);
})();

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
      id: "source-insurance-act-current",
      title: "保険法（平成20年法律第56号）",
      type: "law",
      typeLabel: "法令・e-Gov／保険法",
      authority: "e-Gov法令検索",
      publishedAt: "2008-06-06",
      url: "https://laws.e-gov.go.jp/law/420AC0000000056",
      importance: "高",
      whyImportant: "損害保険契約の成立、効力、保険給付、終了等の一般的な法的枠組みを定める。M&Aの表明保証保険についても、保険契約側の法的な基礎を確認する出発点となる。",
      topics: ["ma-representation-warranty-insurance"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
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
      id: "source-jftc-oki-hitachi-atm-merger-2026",
      title: "沖電気工業・日立製作所・日立チャネルソリューションズによるATM等事業統合の審査結果（概略）",
      type: "decision",
      typeLabel: "企業結合・個別審査事例",
      authority: "公正取引委員会",
      publishedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918_kiketsu_oh_gairyaku.pdf",
      importance: "高",
      whyImportant: "上流モジュールで統合後シェア100%、ATM完成品で約65%となる市場を含め、水平・垂直・混合型の競争懸念を、供給確約、情報開示・支援、情報遮断、監視受託者による継続監視・定期報告という5年間の問題解消措置で処理した具体例。",
      topics: ["merger-control-antitrust"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

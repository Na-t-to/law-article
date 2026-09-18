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
      id: "source-jftc-oki-hitachi-atm-merger-20260918",
      title: "沖電気工業株式会社、株式会社日立製作所及び日立チャネルソリューションズ株式会社によるATM、営業店端末等の事業の統合に関する審査結果について",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／ATM・営業店端末事業統合の企業結合審査",
      authority: "公正取引委員会",
      publishedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918kiketsu_oh.html",
      importance: "最高",
      whyImportant: "水平・垂直・混合型の競争懸念が同時に生じる企業結合について、競争機微情報の遮断、供給確約、監視サービスへの情報提供、モニタリングトラスティと定期報告を組み合わせた問題解消措置を前提に、公取委が排除措置命令を行わないとした最新の審査事例。",
      topics: ["merger-control-antitrust"]
    },
    {
      id: "source-fsa-etf-cash-setting-rule-20260918",
      title: "「投資信託及び投資法人に関する法律施行規則の一部を改正する内閣府令」の公布及びパブリックコメントの結果について",
      type: "law",
      typeLabel: "一次資料・金融庁／現物拠出型ETFの金銭設定に関する施行規則改正",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260918/20260918.html",
      importance: "高",
      whyImportant: "現物拠出型ETFについて、設定申込者の株券等所有割合が30％を超える構成銘柄に相当する部分を金銭で設定できるようにする内閣府令改正。2026年9月18日に公布・即日施行され、パブリックコメント回答で金銭設定の範囲と必要経費の負担も確認できる。",
      topics: ["securities-monitoring-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

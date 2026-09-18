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
      id: "article-jftc-oki-hitachi-atm-merger-20260918",
      title: "沖電気工業株式会社、株式会社日立製作所及び日立チャネルソリューションズ株式会社によるATM、営業店端末等の事業の統合に関する審査結果について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918kiketsu_oh.html",
      sourceType: "primary",
      sourceLabel: "一次資料・公取委／ATM・営業店端末事業統合の企業結合審査",
      status: "adopted",
      summary: "沖電気工業と日立チャネルソリューションズによるATM・営業店端末等の事業統合について、公取委が水平・垂直・混合型の企業結合を一体として審査した事例。紙幣入出金部・通帳記帳部では統合後シェア100％、ATM完成品では約65％となり、投入物閉鎖やATM監視受託業者の排除も懸念された。公取委は、競争機微情報へのアクセス・異動制限、既存取引先への供給確約、ATM監視に必要な情報提供、モニタリングトラスティによる履行監視・定期報告等の措置を前提に、競争を実質的に制限することにはならないと判断した。",
      whyImportant: [
        "水平型の高シェアだけでなく、川上市場からの投入物閉鎖と周辺サービスへの排除という垂直・混合型の懸念を同じ案件で確認できる",
        "事業譲渡だけでなく、供給確約・情報遮断・必要情報の提供・モニタリングトラスティという行動的措置を組み合わせた問題解消措置の設計例になる",
        "問題解消措置の一部を統合実行日から5年間継続し、4年経過時点で継続要否を公取委と協議するという履行監視の時間軸まで確認できる"
      ],
      audience: ["M&A法務", "独禁法・競争法担当", "経営企画", "事業部門", "コンプライアンス"],
      audienceReason: "高シェア・垂直統合を伴うM&Aで、競争懸念をどの市場で特定し、供給・情報・履行監視の措置へ落とすかを具体例から検討するため。",
      categories: ["M&A", "独占禁止法・競争法", "契約"],
      relatedTopics: ["merger-control-antitrust"],
      relatedIssues: ["mc-substantive-review", "mc-remedies", "mc-predeal-planning"],
      primarySourceIds: ["source-jftc-oki-hitachi-atm-merger-20260918"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／水平・垂直・混合型の競争懸念に対し、供給確約・情報遮断・モニタリングトラスティ等を組み合わせた2026年9月18日の企業結合審査事例を追加した。"
    },
    {
      id: "article-fsa-etf-cash-setting-rule-20260918",
      title: "「投資信託及び投資法人に関する法律施行規則の一部を改正する内閣府令」の公布及びパブリックコメントの結果について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／現物拠出型ETFの金銭設定に関する施行規則改正",
      status: "adopted",
      summary: "現物拠出型ETFの構成銘柄のうち、ETF設定申込者の株券等所有割合が30％を超える銘柄に相当する部分について、金銭で設定できるよう投資信託及び投資法人に関する法律施行規則を改正した確定資料。2026年7月28日から8月28日までの意見募集を経て、9月18日に公布・即日施行された。パブリックコメント回答では、30％を超える部分だけでなく当該銘柄に相当する部分を金銭のみで設定でき、対象銘柄を投資信託財産で取得するために必要な経費相当額も拠出させることが確認されている。",
      whyImportant: [
        "現物拠出型ETFの設定実務に直接影響する規制緩和が案段階を終え、2026年9月18日に即日施行されたことを確認できる",
        "30％基準の対象となる銘柄について、金銭設定の範囲と取得経費の負担をパブリックコメント回答まで含めて把握できる",
        "公開買付制度そのものの改正ではないことも金融庁が明示しており、ETF設定上の特例とTOB規制を混同せず整理できる"
      ],
      audience: ["投資運用会社の法務・コンプライアンス", "ETF商品企画・運用", "ファンドオペレーション", "証券会社・指定参加者", "受託銀行"],
      audienceReason: "現物拠出型ETFの設定条件、金銭拠出額・取得経費、社内システム・約款等の運用を施行済みの確定ルールに合わせて確認するため。",
      categories: ["金融商品取引・開示・IR"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-etf-cash-setting-2026"],
      primarySourceIds: ["source-fsa-etf-cash-setting-rule-20260918"],
      reformEventId: "investment-trust-etf-cash-setting-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-fsa-etf-cash-setting-rule-20260918"],
      legacyReformInference: false,
      whatChanged: "法改正情報更新／現物拠出型ETFの30％超構成銘柄に関する金銭設定を可能にする施行規則改正が2026年9月18日に公布・即日施行された。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

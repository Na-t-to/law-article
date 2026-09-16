(() => {
  const additions = [
    {
      id: "source-fsa-aml-account-info-sharing-2026",
      title: "『犯罪による収益の移転防止に関する法律施行規則の一部を改正する命令』の公布等及びパブリックコメントの結果等について",
      type: "law",
      typeLabel: "施行規則・監督指針改正",
      authority: "金融庁",
      publishedAt: "2026-06-26",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260626/20260626.html",
      importance: "最高",
      whyImportant: "不正利用口座に係る金融機関間情報共有について、預貯金取扱事業者の努力義務、監督指針上の参加・情報提供・リスク低減措置、2027年4月1日の施行・適用を確定した一次資料。",
      topics: ["aml-kyc-criminal-proceeds"]
    },
    {
      id: "source-fsa-bank-investment-subsidiary-2026",
      title: "『銀行法施行規則等の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      type: "law",
      typeLabel: "内閣府令・監督指針改正",
      authority: "金融庁",
      publishedAt: "2026-06-12",
      url: "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
      importance: "最高",
      whyImportant: "銀行グループの投資専門会社について、投資対象・資金供給手法、クロスオーバー投資、事業承継会社、M&A仲介等の業務範囲を拡充し、主要部分の2026年6月15日施行とリース会社関係の2027年4月1日施行を確定した一次資料。",
      topics: ["bank-investment-subsidiaries-business-succession-2026"]
    }
  ];
  const existing = new Set((window.SOURCE_DATA || []).map((item) => item.id));
  window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(additions.filter((item) => !existing.has(item.id)));
})();

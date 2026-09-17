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

  const article = {
    id: "article-tmi-dnfbp-aml-cft-20260917",
    title: "〖犯収法ブログ〗事業会社（DNFBPs）のAML/CFT対策",
    publisher: "TMI総合法律事務所",
    author: "TMI総合法律事務所",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-17",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・TMI／DNFBPsのAML/CFT対策",
    status: "adopted",
    summary: "JAFICの令和7年年次報告書が特集した指定非金融業者・職業専門家（DNFBPs）のAML/CFTを、事業会社の実務へ落とす解説。宅地建物取引業者、宝石・貴金属等取扱事業者、郵便物受取サービス業者等について、犯収法上の義務、所管省庁ガイドライン、リスクベース・アプローチ、有効性検証、疑わしい取引の届出を整理し、2027年のFATF第5次対日相互審査を見据えた監督強化にも触れる。リスクベースであっても取引時確認の法定要件を任意に緩和できるわけではないことを明示し、顧客管理、モニタリング、教育、内部監査、取締役会での議論までセルフチェックへ落とし込んでいる。",
    whyImportant: [
      "JAFICがDNFBPsからの疑わしい取引の届出を重点課題としている背景を、事業会社の顧客管理・モニタリング・届出フローへ具体化している",
      "リスクベース・アプローチを法定の本人確認義務を緩和できる考え方と誤解しないよう、ルールベースの義務との関係を明確にしている",
      "規程・統括管理者・リスク評価・教育・監査・取締役会での議論まで含むチェック項目があり、AML/CFT体制の有効性検証に使いやすい",
      "2026年の本人確認方法見直し・口座悪用対策と、DNFBPsに従来から求められるAML/CFT体制を一つの実務マップとして接続している"
    ],
    audience: ["企業法務", "AML/CFT担当", "コンプライアンス担当", "不動産・宝石貴金属等の特定事業者", "内部監査・リスク管理"],
    audienceReason: "金融機関以外の特定事業者が、犯収法上の義務を形式的な規程整備で終わらせず、顧客リスク評価、疑わしい取引の届出、モニタリング、内部監査まで含む実効的なAML/CFT体制へ落とすため。",
    categories: ["危機管理・コンプライアンス", "金融・資本市場"],
    relatedTopics: ["criminal-proceeds-aml-ekyc-2026-2027"],
    relatedIssues: ["aml-dnfbp-risk-based-effectiveness-2026"],
    primarySourceIds: ["source-npa-jafic-annual-report-2025-identity-review"],
    legacyReformInference: false,
    whatChanged: "既存の犯罪収益移転防止法テーマに、DNFBPsのリスクベース管理・疑わしい取引の届出・有効性検証という平時のAML/CFT運用を補強した。"
  };

  let current = window.ARTICLE_DATA || [];
  const ids = new Set(current.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    current = current.concat([article]);
    window.ARTICLE_DATA = current;
  }
})();

(() => {
  if (window.__LAW_INDEX_RUN253_ARTICLE_APPLIED__) return;
  window.__LAW_INDEX_RUN253_ARTICLE_APPLIED__ = true;

  const addition = {
    id: "article-tmi-dnfbp-aml-cft-2026",
    title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
    publisher: "TMI総合法律事務所",
    author: "TMI総合法律事務所",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-28",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／DNFBP・AML/CFT",
    status: "adopted",
    summary: "警察庁JAFICの令和7年年次報告を起点に、指定非金融業者・職業専門家（DNFBPs）の対象業種、犯罪収益移転防止法上の義務、所管省庁別ガイドライン、リスクベース・アプローチと有効性、疑わしい取引の届出を企業実務へ落とし込む解説。本人確認、継続的顧客管理、取引モニタリング、統括管理、教育、内部監査、経営層での点検までを一続きのAML/CFT態勢として確認できる。",
    whyImportant: [
      "DNFBPに該当する業種と所管省庁ごとのガイドラインを整理し、自社の適用関係を確認する入口になる",
      "リスクベース・アプローチは法定の本人確認を緩める考え方ではないことを明確にし、形式的な規程整備から有効性検証へ視点を進めている",
      "JAFIC年次報告の届出件数を踏まえ、疑わしい取引の届出がDNFBPの実務上の重点課題であることを具体化している",
      "統括管理者、内部規程、リスク評価書、継続的顧客管理、高リスク取引の承認、教育、モニタリング、内部監査まで自己点検項目へ分解している",
      "DNFBPに該当しない事業会社についても、取引先KYCへの協力や口座・サービス悪用等の周辺リスクを法定義務と区別して整理している"
    ],
    audience: [
      "企業法務",
      "コンプライアンス・AML/CFT",
      "不動産・宝石／貴金属等の対象事業者",
      "内部監査",
      "経営管理"
    ],
    audienceReason: "DNFBPに該当する事業会社が、法定の本人確認だけでなく、リスク評価・モニタリング・疑わしい取引の届出・教育・監査までAML/CFT態勢を点検するため。",
    categories: ["危機管理・コンプライアンス", "契約"],
    relatedTopics: ["aml-kyc-criminal-proceeds"],
    relatedIssues: [
      "aml-dnfbp-risk-based-governance",
      "aml-identity-verification-2027",
      "aml-2026-account-remittance"
    ],
    primarySourceIds: [
      "source-npa-jafic-annual-report-2025-dnfbp",
      "source-npa-aml-overview-2026",
      "source-npa-aml-amendment-2026"
    ],
    legacyReformInference: false,
    whatChanged: "テーマ更新／本人確認・口座対策中心だったAML整理に、DNFBPのリスクベース管理、有効性検証、疑わしい取引の届出、統括管理・内部監査を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  if (!existing.some((item) => item && (item.id === addition.id || item.url === addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
})();
(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  const topicSlug = "aml-kyc-criminal-proceeds";
  const reformEventId = "aml-identity-verification-2027-rules";
  const primarySourceId = "source-npa-aml-overview-2026";

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-aml-identity-verification-2026",
      title: "【犯収法ブログ】犯罪収益移転防止法施行規則の改正による本人確認方法の厳格化について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-03-30",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18168.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／犯収法・本人確認",
      status: "adopted",
      summary: "犯罪収益移転防止法施行規則の本人確認方法について、2025年・2026年の共同命令による段階改正を、現在利用できる方式と2027年4月1日以降の方式に分けて整理した実務解説。非対面取引では本人確認書類の外見画像や写しに依存する方式の廃止・縮小、対面取引ではICチップ読取りの原則化が進み、金融機関だけでなく、ファイナンスリース、クレジットカード、宅建、貴金属、郵便物受取サービス、士業等の特定事業者にシステム・規程・手順の見直しが必要となることを具体化している。",
      whyImportant: [
        "2027年4月1日の全面施行後に残る本人確認方式と廃止・厳格化される方式を、対面・非対面に分けて比較できる",
        "従来広く使われてきた身分証画像とセルフィーの組合せなど、画像情報だけに依存するeKYCが原則として利用できなくなる点を実務フローへ落とし込める",
        "ICチップ読取り、公的個人認証、転送不要郵便等の代替手段を踏まえ、システム改修だけでなく社内規程・業務マニュアル・例外対応まで準備対象を把握できる",
        "金融機関以外の特定事業者にも影響するため、犯収法対応を金融部門だけの論点として見落とさないための実務的な入口になる"
      ],
      audience: ["企業法務", "AML・コンプライアンス担当", "本人確認・eKYCプロダクト担当", "特定事業者の業務企画・オペレーション担当"],
      audienceReason: "2027年4月1日の本人確認方法の全面見直しに向け、現在の本人確認フローから廃止・厳格化対象を洗い出し、システム・規程・マニュアルの改修計画へつなげるため。",
      categories: ["危機管理・コンプライアンス", "AI・デジタル", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: [],
      primarySourceIds: [primarySourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [primarySourceId],
      whatChanged: "整理変更なし／2027年4月1日の本人確認方法厳格化について、対面・非対面の現行方式から新方式への移行と実務対応を補う二次資料を追加した。"
    }
  ]);
})();

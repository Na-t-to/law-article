(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat(additions.filter((item) => item && !existing.has(item.id)));
  };

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-amt-commercial-registry-address-nondisclosure-2024",
      title: "【コーポレート】商業登記における代表取締役等住所非表示措置の創設",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "盛里 吉博・野村 直弘",
      publishedAt: "2024-05-24",
      collectedAt: "2026-09-12",
      url: "https://www.amt-law.com/insights/newsletters/publication_0028401_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／代表取締役等住所非表示措置・申出手続と実務影響",
      status: "adopted",
      summary: "2024年10月1日施行の代表取締役等住所非表示措置について、創設経緯、申出が必要となる登記申請のタイミング、非表示後も市区町村まで表示される範囲、利害関係人による附属書類閲覧、融資・不動産取引・訴訟等への実務影響を整理する。単に『住所が非公開になる制度』と捉えず、登記自体は必要であり、申出時期と第三者による確認手段を含めて制度の射程を確認できる。",
      whyImportant: [
        "住所非表示措置は自動適用ではなく、設立、代表取締役等の就任・住所変更など所定の登記申請と同時に会社から申し出る必要があることを、手続の流れとして確認できる",
        "住所そのものの登記義務がなくなるわけではなく、登記事項証明書等では最小行政区画まで表示されるため、完全な住所秘匿制度ではないことを明確にできる",
        "法律上の利害関係を有する者は附属書類の閲覧を通じて住所を確認し得ることから、プライバシー保護と債権者・訴訟当事者の情報アクセスの両面を把握できる",
        "代表者住所を本人確認・与信・不動産取引等に利用してきた実務では、登記事項証明書だけで確認できなくなる場面が生じるため、代替確認手段や社内手順の見直しにつながる"
      ],
      audience: ["企業法務", "商業登記・コーポレート担当", "金融機関・与信担当", "訴訟・債権管理担当", "スタートアップ・経営者支援"],
      audienceReason: "住所非表示措置を利用する会社側の申出手続と、取引・与信・訴訟で代表者住所を確認する側の双方について、制度の限界と代替確認手段を実務フローへ落とすため。",
      categories: ["会社法・ガバナンス", "危機管理・コンプライアンス"],
      relatedTopics: ["commercial-registry-address-nondisclosure"],
      relatedIssues: ["registry-address-current-scope", "registry-address-request-timing", "registry-address-transaction-impact"],
      primarySourceIds: ["source-moj-registry-address-current"],
      whatChanged: "整理変更なし／2024年の現行制度について、申出時期、非表示範囲、利害関係人の附属書類閲覧、融資・取引確認への影響を実務解説で補強した。"
    }
  ]);
})();

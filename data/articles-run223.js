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
      id: "article-fsa-cyber-reporting-common-form-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／サイバー攻撃報告共通様式・監督指針改正",
      status: "adopted",
      summary: "2026年9月15日の関係省庁申合せ改正で、従来のDDoS攻撃事案・ランサムウェア事案の共通様式に加え、「その他サイバー攻撃等事案共通様式」が新設されたことを受け、金融庁が主要行、地域金融機関、保険、金融商品取引、資金移動、暗号資産等の監督指針・事務ガイドライン上のサイバー報告様式を共通様式へ移行した。改正後の監督指針等は2026年10月1日から適用される。",
      whyImportant: [
        "サイバー攻撃時の報告がDDoS・ランサムウェアだけでなくその他の攻撃類型まで共通様式化され、報告実務の具体的な入口が揃ったことを確認できる",
        "金融分野では監督指針・事務ガイドラインの既存様式が共通様式へ移行するため、インシデント対応規程、連絡網、報告テンプレートの更新に直結する",
        "金融庁が共通様式のプリセット版と新旧様式の項目対応を含む補足事項を併せて示しており、複数報告を同じ情報セットで処理する初動設計へ移行しやすい"
      ],
      audience: ["企業法務", "金融機関法務", "情報セキュリティ担当", "リスク管理・コンプライアンス", "インシデント対応責任者"],
      audienceReason: "2026年10月1日からの共通様式運用に合わせ、サイバーインシデント発生時の社内エスカレーション、提出先、様式、証跡保存を事前に更新するため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス", "金融商品取引・開示・IR"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-countermeasures-reporting"],
      primarySourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      reformEventId: "financial-cyber-common-reporting-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-fsa-cyber-reporting-common-form-20260918"],
      legacyReformInference: false,
      whatChanged: "施行準備を具体化／2026年9月15日の関係省庁申合せ改正と金融庁監督指針等の改正により、DDoS・ランサムウェア・その他サイバー攻撃等の3共通様式を用いる報告運用が2026年10月1日から始まることを追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

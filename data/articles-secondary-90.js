(() => {
  const topicSlug = "privacy-enforcement-breach-response";
  const sourceId = "source-digital-gss-incident-2026-09-11";
  const articleId = "article-digital-gss-incident-2026-09-11";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "ガバメントソリューションサービスへの不正アクセスによる職員等の個人情報の漏えいの可能性について",
      type: "incident",
      typeLabel: "一次資料・不正アクセス／個人情報漏えい事案",
      authority: "デジタル庁",
      publishedAt: "2026-09-11",
      url: "https://www.digital.go.jp/news/2026-0911-01",
      importance: "高",
      whyImportant: "政府共通の業務実施環境GSSについて、VPN機器の脆弱性を利用した侵入、保守運用担当者アカウントを用いた大量ファイルアクセスの検知、アカウント停止・通信遮断・外部専門事業者による調査、約24.6万件の個人情報漏えいの可能性と再発防止策をデジタル庁自身が公表した大規模インシデントの一次資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const issues = (topic.issues || []).map((issue) => {
      if (!["privacy-enforcement-safety-management", "privacy-incident-forensics-readiness"].includes(issue.id)) return issue;
      return {
        ...issue,
        sourceIds: addUniqueStrings(issue.sourceIds, [sourceId])
      };
    });

    return {
      ...topic,
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "ガバメントソリューションサービスへの不正アクセスによる職員等の個人情報の漏えいの可能性について",
      publisher: "デジタル庁",
      author: "省庁業務サービスグループ GSS班",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-11",
      url: "https://www.digital.go.jp/news/2026-0911-01",
      sourceType: "primary",
      sourceLabel: "一次資料・インシデント公表",
      status: "adopted",
      summary: "デジタル庁が運用する政府共通の業務実施環境GSSで発生した不正アクセス事案の公式公表。2026年6月25日に保守運用担当者アカウントによる大量ファイルアクセスを検知し、7月9日に第三者がVPN機器の脆弱性を利用して侵入していたことを確認した。アカウント停止と侵害機器の外部通信遮断後、外部専門事業者と調査した結果、職員・業務関係者等の氏名、メールアドレス、電話番号、住所等を含む約24.6万件の個人情報が外部に漏えいした可能性が判明した。",
      whyImportant: [
        "公開済み脆弱性への対応や外部接続経路の管理が、大規模な個人情報漏えいインシデントへ直結し得ることを示す具体的な一次事例として確認できる",
        "異常な大量アクセスの検知から、アカウント停止、侵害機器の通信遮断、外部専門事業者による被害範囲調査までの初動・調査の時系列を追える",
        "対象者の個別連絡、フィッシング等への注意喚起、脆弱性管理方法と外部接続方法の見直しまで、漏えい判明後の対応と再発防止の流れを確認できる"
      ],
      audience: ["企業法務", "プライバシー担当", "情報セキュリティ・CSIRT", "IT・システム運用"],
      audienceReason: "VPN・ネットワーク機器の脆弱性管理、特権・保守アカウントの監視、異常アクセス検知、フォレンジック調査、対象者連絡と再発防止を一つのインシデント対応フローとして点検する際の具体例になるため。",
      categories: ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["privacy-enforcement-safety-management", "privacy-incident-forensics-readiness"],
      primarySourceIds: [sourceId],
      whatChanged: "整理変更なし／VPN機器の脆弱性を起点とするGSS不正アクセスについて、検知・封じ込め・外部専門事業者による調査・対象者連絡・再発防止までを確認できる大規模インシデントの一次資料を参考資料として追加。"
    }
  ]);
})();

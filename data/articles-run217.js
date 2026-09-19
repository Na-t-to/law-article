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
      id: "article-nara-hospital-system-outage-report-20260831",
      title: "市立奈良病院におけるシステム障害に係る報告について",
      publisher: "奈良市",
      author: "奈良市・奈良市医療情報セキュリティ専門家会議",
      publishedAt: "2026-08-31",
      collectedAt: "2026-09-19",
      url: "https://www.city.nara.lg.jp/soshiki/93/273750.html",
      sourceType: "primary",
      sourceLabel: "一次資料・医療情報システム障害／セキュリティ制御・BCP",
      status: "adopted",
      summary: "市立奈良病院で2026年4月に発生した情報システム障害を外部専門家が検証した公式報告。外部攻撃ではなく、セキュリティ監視装置の監視対象変動とソフトウェア自動更新を契機に、十分に学習されていなかった院内通信が異常判定され、自動遮断が連鎖した。電子カルテ停止、救急受入れ約53時間停止等の影響と、更新・切戻し、自動遮断条件、ログ保存、緊急時の意思決定、関係事業者との役割分担を再発防止策として整理する。",
      whyImportant: [
        "『攻撃を防ぐためのセキュリティ制御』自体が誤検知・更新不具合を通じて重要業務の可用性を損なうリスクを、実際の重大インシデントから確認できる",
        "自動更新の停止・手動更新、更新前後の確認、切戻し、自動遮断の適用条件、ログ保存期間など、ベンダー管理・変更管理・BCPへ直結する具体策が示されている",
        "サイバー攻撃かシステム障害か直ちに判別できない初動での隔離・停止・段階復旧について、当時得られた情報を前提に合理性を評価しており、危機対応の意思決定記録にも示唆がある"
      ],
      audience: ["情報セキュリティ担当", "企業法務", "IT・システム部門", "リスク管理・BCP担当", "医療機関"],
      audienceReason: "セキュリティ製品・保守事業者を含むサプライチェーン管理で、更新・監視・自動遮断・ログ・復旧・緊急意思決定を契約と運用の両面から点検するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["cyber-supply-chain"],
      relatedIssues: ["cyber-vulnerability", "cyber-incident-chain"],
      primarySourceIds: ["source-nara-hospital-system-outage-report-20260831"],
      legacyReformInference: false,
      whatChanged: "テーマ補強／外部攻撃がなかった事案でも、セキュリティ製品の更新・誤検知・自動遮断が事業継続を止め得ることを、ベンダー連携・変更管理・ログ・復旧・意思決定の実例として追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

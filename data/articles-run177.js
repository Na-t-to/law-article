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
      id: "article-deloitte-trade-secret-guideline-2025",
      title: "営業秘密管理指針の改訂版の公表",
      publisher: "デロイト トーマツ グループ / DT弁護士法人",
      author: "菅 尋史・吉田 哲・稲田 瑞穂",
      publishedAt: "2025-09-01",
      collectedAt: "2026-09-16",
      url: "https://www.deloitte.com/jp/ja/services/legal/perspectives/legal-newsletter20250820.html",
      sourceType: "secondary",
      sourceLabel: "実務解説／営業秘密管理指針・2025年改訂",
      status: "adopted",
      summary: "2025年3月31日改訂の営業秘密管理指針について、テレワーク・クラウド・生成AI等を踏まえた秘密管理性、AI学習用データを含む公知情報の組合せ、ダークウェブへの流出、リバースエンジニアリングと非公知性の考え方を整理し、社内デューデリジェンス、NDA、AI利用ルール、研修まで企業の対応例へ落とした実務解説。",
      whyImportant: [
        "改訂指針の抽象的な要件を、部門別の秘密情報棚卸し、取引先との秘密保持契約、AI利用規程、研修という具体的な管理施策へ接続している",
        "生成AIへの入力・出力について、管理単位内外と企業外第三者への提供を分けて秘密管理性を検討する視点が得られる",
        "公知情報の組合せ、ダークウェブ、リバースエンジニアリングという新しい非公知性の論点を、AI学習データや製品解析の実務に引き付けて確認できる"
      ],
      audience: ["企業法務", "知的財産", "情報セキュリティ", "AI・データガバナンス"],
      audienceReason: "営業秘密管理規程を形式的に置くだけでなく、クラウド・生成AI・取引先共有・製品解析を含む現在の情報利用実態に合わせて管理単位、NDA、アクセス権限、AIルールを点検するため。",
      categories: ["知的財産", "危機管理・コンプライアンス", "AI・デジタル"],
      relatedTopics: ["trade-secret-management"],
      relatedIssues: ["ts-legal-protection", "ts-management-design", "ts-ai-cloud"],
      primarySourceIds: ["source-trade-secret-guideline-2025"],
      reformEventId: "trade-secret-management-guideline-2025-revision",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-trade-secret-guideline-2025"],
      legacyReformInference: false,
      whatChanged: "営業秘密管理テーマを補強／2025年改訂指針について、生成AI・クラウド・公知情報の組合せ・ダークウェブ・リバースエンジニアリングの具体論と、社内DD・NDA・AIルール等の実務対応を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

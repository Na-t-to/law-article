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
      id: "article-businesslawyers-oehashi-security-assignment-practice-20250623",
      title: "譲渡担保契約及び所有権留保契約に関する法律の概要と実務対応",
      publisher: "BUSINESS LAWYERS",
      author: "佐藤俊・辻田俊幸（弁護士法人大江橋法律事務所）",
      publishedAt: "2025-06-23",
      collectedAt: "2026-09-19",
      url: "https://www.businesslawyers.jp/articles/1469",
      sourceType: "secondary",
      sourceLabel: "実務解説・大江橋法律事務所／譲渡担保法の概要と実務対応",
      status: "adopted",
      summary: "2025年6月に公布された譲渡担保法・整備法を、譲渡担保権の効力、対抗要件・優劣、実行、倒産手続、所有権留保、登記制度まで横断して解説する実務記事。特に、集合動産では設定者の処分権限の範囲を、集合債権では設定者の取立権限とその喪失事由を契約に明記する重要性を示し、私的実行や倒産開始後の新規加入財産の扱いまで契約・回収実務へ落としている。",
      whyImportant: [
        "法改正の項目ごとに実務影響度を示し、施行前に優先して点検すべき契約・登記・回収手順を見分けやすい",
        "集合動産譲渡担保では設定者の処分権限が原則として認められる一方、その範囲を契約で制限できるため、処分権限の条項設計が従来以上に重要になることを具体化している",
        "集合債権譲渡担保では設定者の取立権限を契約で付与すること、実行通知や倒産開始による権限喪失、第三債務者への通知まで一連の運用として整理している",
        "占有改定劣後ルール、私的実行、倒産後の新規加入財産、所有権留保登記まで一つの記事で確認でき、一次資料と施行前の契約棚卸しをつなぐ実務解説として密度が高い"
      ],
      audience: ["企業法務", "金融・財務担当", "金融機関・ノンバンク", "債権管理・回収担当", "契約・取引管理担当"],
      audienceReason: "譲渡担保法の全体像を押さえつつ、集合動産・集合債権の契約条項、対抗要件、実行・倒産対応を施行前に具体的に見直す担当者に向くため。",
      categories: ["契約"],
      relatedTopics: ["security-assignment-retention-title"],
      relatedIssues: [
        "security-assignment-statutory-rules",
        "security-assignment-priority-preservation",
        "security-assignment-collection-authority",
        "security-assignment-enforcement-insolvency"
      ],
      primarySourceIds: ["source-moj-security-assignment-act-2025"],
      reformEventId: "security-assignment-retention-title-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-moj-security-assignment-act-2025"],
      whatChanged: "テーマ補強／集合動産の処分権限と集合債権の取立権限を契約条項へ落とす論点を追加し、優先順位・実行・倒産対応まで横断する実務解説を採用"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

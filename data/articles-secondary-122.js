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

  const articles = [
    {
      id: "article-tmi-largeholding-listed-subsidiary-2026",
      title: "大量保有報告制度の改正－上場子会社・上場関連会社を有する事業会社における対応",
      publisher: "TMI総合法律事務所",
      author: "谷口達哉",
      publishedAt: "2026-04-17",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18244.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／大量保有報告・重要提案行為等",
      status: "adopted",
      summary: "2026年5月1日施行の大量保有報告制度改正について、金融機関ではなく上場子会社・上場関連会社を保有する事業会社の視点から、『重要提案行為等』の具体的記載と役員派遣の扱いをケース別に整理する実務解説。子会社側の要望に応じた役員派遣と、親会社側の意思で行う役員派遣を区別し、資本業務提携契約に基づく指名権、暗黙の了解、方針変更時の変更報告書提出まで具体化している。",
      whyImportant: [
        "大量保有報告制度が機関投資家だけでなく、上場子会社・上場関連会社を5％超保有する事業会社にも直接関係することを実務フローとして示している",
        "重要提案行為等の3要件を、親会社から上場子会社等への役員派遣という頻出場面へ当てはめ、子会社側の要望に応じる場合と親会社側から提案する場合の境界を具体化している",
        "改正後は重要提案行為等の内容・時期・条件・目的を具体的に記載する必要があるため、資本業務提携契約、役員指名方針、変更報告書の社内エスカレーションを見直す材料になる"
      ],
      audience: ["企業法務", "上場会社のグループガバナンス担当", "IR・株主対応", "M&A・資本業務提携担当"],
      audienceReason: "上場子会社・関連会社への役員派遣や指名権の行使が重要提案行為等に当たるかを判定し、大量保有報告書・変更報告書の具体的記載と5営業日管理へ落とすため。",
      categories: ["M&A", "金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["tob-large-shareholding-2026"],
      relatedIssues: ["largeholder-important-proposal", "largeholder-reporting"],
      primarySourceIds: ["source-fsa-tob-largeholder-final-2025", "source-fsa-largeholder-dialogue-2025"],
      reformEventId: "financial-instruments-tob-largeholding-2024-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-tob-largeholder-final-2025"],
      whatChanged: "整理変更なし／上場子会社・上場関連会社を持つ事業会社について、役員派遣と重要提案行為等の判定・具体的記載をケーススタディで補う実務解説を追加した。"
    }
  ];

  const current = window.ARTICLE_DATA || [];
  const existingIds = new Set(current.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = current.concat(additions);
})();

(() => {
  const addUniqueString = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };
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

  const upper = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-not-generative-ai-publicity-part1-2026");
  if (upper) {
    upper.relatedTopics = addUniqueString(upper.relatedTopics, "generative-ai-likeness-publicity");
    upper.relatedIssues = addUniqueString(upper.relatedIssues, "ai-likeness-identification");
    upper.relatedIssues = addUniqueString(upper.relatedIssues, "ai-likeness-publicity-use");
    upper.relatedIssues = addUniqueString(upper.relatedIssues, "ai-likeness-provider-risk");
  }

  const additions = [
    {
      id: "article-not-generative-ai-publicity-part2-2026",
      title: "『肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―』のポイント（下）",
      publisher: "長島・大野・常松法律事務所",
      author: "東崎賢治・小槻英之・井原諄・富永有美",
      publishedAt: "2026-08-19",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260819-2/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／生成AI・肖像・声（下）",
      status: "adopted",
      summary: "法務省の2026年8月取りまとめ報告書について、肖像等をみだりに利用されない人格的利益を中心に、俳優の生成動画、歌手・声優の生成音源、性的な生成画像・音源、非営利利用、所属事務所への利用許諾・譲渡、故人の利用という7つの想定事例と実務上の留意点を整理する。",
      whyImportant: [
        "収益目的がない利用でも人格的利益の侵害が問題となり得ることを、パブリシティ権とは別の軸で確認できる",
        "性的ディープフェイクや声の無断合成を含む具体例から、生成物の公開前審査で確認すべき事情を抽出できる",
        "所属事務所へのライセンス・譲渡や故人の利用など、契約・権利処理の未確定部分を把握できる"
      ],
      audience: ["企業法務", "知的財産・コンテンツ担当", "広告・広報", "AIガバナンス・サービス企画"],
      audienceReason: "生成AI利用時の人格的利益への配慮、権利処理、削除・差止め対応を具体的な想定事例から設計するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: ["generative-ai-likeness-publicity"],
      relatedIssues: ["ai-likeness-legal-framework", "ai-likeness-personality-harm", "ai-publicity-remedies"],
      primarySourceIds: ["source-moj-ai-likeness-report-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／肖像・声をみだりに利用されない人格的利益、性的ディープフェイク、非営利利用、ライセンス・故人利用を7つの想定事例から読む実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url))));
})();

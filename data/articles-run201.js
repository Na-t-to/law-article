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
      id: "article-meti-unfair-competition-ai-likeness-hearing-20260911",
      title: "第30回 産業構造審議会 知的財産分科会 不正競争防止小委員会",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.youtube.com/watch?v=jgvgSwTx3GE",
      sourceType: "primary",
      sourceLabel: "一次資料・不正競争防止小委員会／生成AIの肖像・声に関する関係者ヒアリング",
      status: "adopted",
      summary: "2026年9月11日の不正競争防止小委員会で、生成AIによる肖像・声の無断利用について法務省と実演家・業界団体からヒアリングを行った公式会合。法務省の現行法解釈を踏まえつつ、声の明示的保護、本人以外の請求主体、AI学習用データの保護等を含む制度要望が示され、不正競争防止法による追加的な法的整備の要否が検討対象となった。法改正や新たな禁止行為を決定した会合ではない。",
      whyImportant: [
        "法務省の8月報告書による現行法解釈から一歩進み、不正競争防止法の制度見直しを含む政策検討が実際の審議会で扱われ始めたことを確認できる",
        "実演家・業界団体が、声の保護、請求主体、AI学習用データ、海外サービスへの対応等についてどの部分を現行法の課題として捉えているかを追える",
        "制度要望と現行法を混同せず、将来の改正可能性を企業のAI・コンテンツ契約や権利処理のモニタリング項目へ落とすための基礎資料になる"
      ],
      audience: ["企業法務", "知的財産担当", "AIガバナンス担当", "エンタテインメント・メディア", "広告・マーケティング", "AIサービス提供者"],
      audienceReason: "生成AIで実在人物の肖像・声を扱う事業について、現行法上の対応と将来の不競法見直しを分けて追跡するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: ["ai-publicity-voice-rights-2026"],
      relatedIssues: [
        "ai-publicity-voice-protection-2026",
        "ai-publicity-provider-dataset-liability-2026",
        "ai-publicity-ucpa-policy-review-2026"
      ],
      primarySourceIds: [
        "source-meti-unfair-competition-ai-likeness-hearing-20260911",
        "source-moj-ai-publicity-voice-report-2026"
      ],
      legacyReformInference: false,
      whatChanged: "テーマ更新／生成AIの肖像・声について、法務省による現行法解釈に加え、経産省の不正競争防止小委員会で追加的な制度整備の要否が実際に検討され始めたことを追加した。法改正決定とは扱わない。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

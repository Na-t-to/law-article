(() => {
  const filingSourceId = "source-ai-ip-principle-code-filing-2026";

  if (!(window.SOURCE_DATA || []).some((source) => source.id === filingSourceId)) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
      {
        id: filingSourceId,
        title: "生成AI知財プリンシプル・コードの届出開始日及び届出様式",
        type: "guideline",
        typeLabel: "運用案内・届出様式",
        authority: "内閣府 知的財産戦略推進事務局",
        publishedAt: "2026-09-08",
        url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
        importance: "高",
        whyImportant: "生成AI知財プリンシプル・コード1（4）に基づく受入れ届出について、2026年10月26日の開始日と届出様式を公式に示す運用案内。届出先等は開始日に案内されるため、開始前の準備と当日の最終確認を分けて管理できる。",
        topics: ["generative-ai-ip-principle-code"]
      }
    ]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "generative-ai-ip-principle-code");
  if (topic) {
    topic.lastUpdated = "2026-09-10";
    topic.lastVerified = "2026-09-10";

    const replaceByIncludes = (items, needle, replacement) => {
      if (!Array.isArray(items)) return;
      const index = items.findIndex((item) => typeof item === "string" && item.includes(needle));
      if (index >= 0) items[index] = replacement;
    };

    replaceByIncludes(
      topic.overview,
      "受入れ届出の開始時期",
      "原則は、モデル・学習・知財保護措置等の概要開示、権利侵害を主張する者からの照会対応、生成物と類似するコンテンツに関する利用者からの照会対応を柱とする。受入れ届出は2026年10月26日に開始され、届出様式は公表済み。届出先等は開始日に案内されるため、開始前の様式準備と当日の最終確認を分けて進める。"
    );
    replaceByIncludes(
      topic.currentSummary?.facts,
      "コード受入れに関する内閣府への届出開始時期",
      "内閣府知的財産戦略推進事務局は2026年9月8日、コード1（4）に基づく受入れ届出を2026年10月26日から開始すると案内し、届出様式を公表した。届出先等は開始日に案内するとしている。"
    );
    replaceByIncludes(
      topic.currentSummary?.implications,
      "受入れ届出の開始時期",
      "2026年10月26日の届出開始までに、公表済みの様式を使って実施・エクスプレイン方針と記載内容を準備し、開始日に公表される届出先等を確認する担当を決める。"
    );
    replaceByIncludes(
      topic.currentSummary?.uncertain,
      "受入れ届出の開始時期",
      "届出先等の提出方法と、受付開始後の一覧公表その他の運用詳細は2026年10月26日の公式案内以降を確認する必要がある。"
    );

    const acceptanceIssue = (topic.issues || []).find((issue) => issue.id === "ai-ip-code-acceptance");
    if (acceptanceIssue) {
      acceptanceIssue.status = "pending";
      acceptanceIssue.stage = "effective";
      acceptanceIssue.conclusion = "受入れ届出は2026年10月26日に開始され、届出様式は公表済み。開始前に原則ごとの実施・エクスプレイン方針と様式記載を準備し、開始日に公表される届出先等を確認する。";
      acceptanceIssue.uncertain = "届出先等の提出方法と、受付開始後の一覧公表その他の運用詳細は2026年10月26日の公式案内以降を確認する。";
      acceptanceIssue.sourceIds = Array.from(new Set([...(acceptanceIssue.sourceIds || []), filingSourceId]));
    }

    topic.sourceIds = Array.from(new Set([...(topic.sourceIds || []), filingSourceId]));
  }

  const codeArticle = (window.ARTICLE_DATA || []).find((article) => article.id === "article-ai-ip-principle-code-2026");
  if (codeArticle) {
    codeArticle.summary = "生成AI開発者・提供者に対し、モデル・学習・知財保護措置等の概要開示、権利侵害を主張する者からの照会、生成AI利用者からの類似コンテンツに関する照会への対応を、コンプライ・オア・エクスプレイン方式で求める最終版のプリンシプル・コード。2026年8月25日に公式公表され、概要開示の具体例も併せて掲載された。受入れ届出の具体的な運用は公式ページで継続案内される。";
    codeArticle.whyImportant = [
      "生成AIの知財対応を著作権法の解釈だけでなく、透明性・照会対応・対外説明という運用へ落とす公式の基準点になる",
      "自社が生成AI開発者・提供者に当たるかを確認し、モデル・学習・知財保護措置の説明可能性を棚卸しする契機になる",
      "受入れ表明・届出は、コード本体と別に公表される最新の運用案内を継続確認する必要がある"
    ];
    codeArticle.primarySourceIds = Array.from(new Set([...(codeArticle.primarySourceIds || []), filingSourceId]));
    codeArticle.whatChanged = "2026年9月8日に受入れ届出の開始日と様式が公表されたため、未確定だった開始時期の記載を更新し、運用案内ARTICLEへ接続した。";
  }

  if (!(window.ARTICLE_DATA || []).some((article) => article.id === "article-cas-ai-ip-principle-code-filing-2026")) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
      {
        id: "article-cas-ai-ip-principle-code-filing-2026",
        title: "生成AI知財プリンシプル・コードの届出開始日及び届出様式を公表",
        publisher: "内閣府 知的財産戦略推進事務局",
        author: "内閣府 知的財産戦略推進事務局",
        publishedAt: "2026-09-08",
        collectedAt: "2026-09-10",
        url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
        sourceType: "primary",
        sourceLabel: "一次資料・運用案内／届出様式",
        status: "adopted",
        summary: "生成AI知財プリンシプル・コード1（4）に基づく受入れ届出について、内閣府知的財産戦略推進事務局が2026年10月26日から受付を開始すると案内し、届出様式を公表した。届出先等は開始日に案内するとしている。コード自体の規範内容の改訂ではなく、受入れ表明・届出の運用が具体化した更新。",
        whyImportant: [
          "これまで未確定だった届出開始日が2026年10月26日と具体化し、社内の準備期限を置けるようになった",
          "届出様式が先行公表されたため、原則ごとの実施・エクスプレイン方針と対外説明を受付開始前にレビューできる",
          "届出自体はまだ開始しておらず、届出先等は開始日に案内されるため、準備完了と実際の提出を混同せず管理できる"
        ],
        audience: ["AI事業・プロダクト法務", "知的財産担当", "AIガバナンス・コンプライアンス"],
        audienceReason: "プリンシプル・コードの受入れを検討する企業が、2026年10月26日の受付開始に向けて様式・社内承認・提出確認を具体化するため。",
        categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
        relatedTopics: ["generative-ai-ip-principle-code"],
        relatedIssues: ["ai-ip-code-acceptance"],
        primarySourceIds: [filingSourceId],
        whatChanged: "2026年9月8日に、受入れ届出の開始日が2026年10月26日と公表され、届出様式が公開された。"
      }
    ]);
  }
})();

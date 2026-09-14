(() => {
  const topicSlug = "equal-pay-guideline-2026";
  const sourceId = "source-mhlw-equal-pay-2026";
  const issueId = "equal-pay-employment-management";
  const primaryArticleId = "article-mhlw-equal-pay-2026";
  const articleId = "article-not-equal-pay-guideline-practical-2026";

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

  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id).filter(Boolean));
    return (target || []).concat((additions || []).filter((item) => item && item.id && !existing.has(item.id)));
  };

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== topicSlug) return topic;
    const currentSummary = topic.currentSummary || {};
    return {
      ...topic,
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      overview: addUniqueStrings(topic.overview, [
        "2026年改正は待遇差の判断基準だけでなく、パート・有期雇用労働者の雇用管理指針も更新する。職業能力開発、公正な評価、過半数代表者の適正な選出・活動支援、正社員転換、待遇差の能動的な説明、労使コミュニケーションと外部公表まで、待遇制度を運用する周辺プロセスも点検対象となる。"
      ]),
      currentSummary: {
        ...currentSummary,
        facts: addUniqueStrings(currentSummary.facts, [
          "2026年4月28日に改正された雇用管理指針は、パート・有期雇用労働者の職業能力開発機会、公正な評価を踏まえた賃金決定、過半数代表者の適正な選出・活動支援、正社員転換措置、待遇差に関する分かりやすい説明、労使コミュニケーション、正社員転換制度の外部公表等を明確化・充実させている。"
        ]),
        interpretations: addUniqueStrings(currentSummary.interpretations, [
          "2026年10月対応を『不合理な待遇差の有無』と労働条件通知書の修正だけで終えず、教育訓練・評価、過半数代表者、転換制度、説明・対話といった雇用管理プロセスまで同じ改正対応として点検する必要がある。"
        ]),
        implications: addUniqueStrings(currentSummary.implications, [
          "パート・有期雇用労働者の教育訓練機会、評価基準と賃金反映、過半数代表者の選出手続・活動支援を確認する。",
          "正社員転換制度について複数の機会・本人意向の確認方法を整理し、制度内容・実績の社外公表と、待遇差について説明を求められる旨の積極的な周知を検討する。",
          "相談・面談・アンケート等でパート・有期雇用労働者の意見を把握し、雇用管理改善へ反映した記録を残す。"
        ]),
        uncertain: addUniqueStrings(currentSummary.uncertain, [])
      },
      issues: addUniqueById(topic.issues, [
        {
          id: issueId,
          title: "雇用管理指針の改正を人事制度・労使運用へどう落とすか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "待遇差の点検に加え、職業能力開発、公正な評価、過半数代表者の適正な選出・活動支援、正社員転換、待遇差の説明、労使コミュニケーションと外部公表を雇用管理プロセスとして確認する。",
          exception: "雇用管理指針には法的義務の具体化と努力事項・望ましい措置が含まれるため、すべてを同一の強制義務として扱わず、各項目の法的位置付けを確認する。",
          uncertain: "各社で必要となる教育訓練、評価制度、労使対話、外部公表の具体的な方法は、雇用区分・制度設計・労使関係に応じて異なる。",
          sourceIds: [sourceId]
        }
      ]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "職業能力開発・評価制度",
        "過半数代表者の選出・活動支援",
        "正社員転換制度・外部公表",
        "労使コミュニケーション・意見把握"
      ])
    };
  });

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (!article || article.id !== primaryArticleId) return article;
    return {
      ...article,
      relatedIssues: addUniqueStrings(article.relatedIssues, [issueId])
    };
  });

  const article = {
    id: articleId,
    title: "Practical Measures in Response to the Amendments to the Equal Pay for Equal Work Guidelines and Related Developments",
    publisher: "長島・大野・常松法律事務所",
    author: "緒方絵里子・田口涼太",
    publishedAt: "2026-09-07",
    collectedAt: "2026-09-14",
    url: "https://www.nagashima.com/en/publications/publication20260904-1/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／同一労働同一賃金（英語版）",
    status: "adopted",
    summary: "2026年10月1日施行・適用の同一労働同一賃金関係改正を、労働条件明示、待遇項目ごとの不合理性判断だけでなく、雇用管理指針の改正まで一体で整理した実務解説。教育訓練、公正な評価、過半数代表者の選出・活動支援、正社員転換、待遇差の能動的説明、労使対話、転換制度の外部公表まで、企業が見直すべき運用を具体化している。",
    whyImportant: [
      "既存の待遇差チェックに加え、雇用管理指針の改正を人事制度・労使運用へ落とす実務項目がまとまっている",
      "2026年10月1日から追加される労働条件明示について、通知書・雇用契約書へ説明請求権を記載するサンプル条項まで示している",
      "教育訓練、公正な評価、過半数代表者、正社員転換、説明・対話、外部公表を横断しており、法務だけでなく人事制度・労使コミュニケーションの改修範囲を把握できる",
      "厚生労働省の最終ガイドライン・雇用管理指針を前提とする施行直前の解説で、案段階ではなく確定したルールから対応を確認できる"
    ],
    audience: ["人事・労務", "企業法務", "報酬・人事制度担当", "労使関係・就業規則担当"],
    audienceReason: "2026年10月改正を通知書と待遇差点検だけでなく、教育訓練・評価・労使運用・正社員転換制度まで含む人事実務へ落とすため。",
    categories: ["労務", "契約"],
    relatedTopics: [topicSlug],
    relatedIssues: ["equal-pay-notice", "equal-pay-treatment-review", "equal-pay-explanation", issueId],
    primarySourceIds: [sourceId],
    reformEventId: "equal-pay-guideline-2026",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [sourceId],
    whatChanged: "既存テーマ補完／待遇差の判断基準だけでなく、改正雇用管理指針に基づく教育訓練・評価・過半数代表者・正社員転換・労使コミュニケーション・外部公表まで実務対応を拡張した。"
  };

  const currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat([article]);
  }
})();

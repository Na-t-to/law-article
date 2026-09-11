(() => {
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  // 2026-09-12: reconcile overlapping backfill entries against the canonical
  // topics/articles that were already loaded by the current manifest.
  const duplicateArticleIds = new Set([
    "article-tmi-aml-identity-verification-2026-03-30",
    "article-meti-corporate-takeover-guidelines-qa-2026",
    "article-not-corporate-takeover-guidelines-qa-2026",
    "article-tmi-securities-monitoring-policy-2026-part2"
  ]);
  const duplicateSourceIds = new Set([
    "source-meti-corporate-takeover-guidelines-qa-2026"
  ]);
  const duplicateTopicSlugs = new Set([
    "corporate-takeover-guidelines-2026"
  ]);

  window.ARTICLE_DATA = (window.ARTICLE_DATA || [])
    .filter((article) => !duplicateArticleIds.has(article.id))
    .map((article) => {
      if (article.id !== "article-tmi-aml-identity-2026") return article;
      return {
        ...article,
        author: "大塚尚・菊田行紘・野間敬和・野口真吾・片尾すみれ・片桐龍也",
        collectedAt: "2026-09-12",
        sourceLabel: "法律事務所・実務解説／本人確認方法の2027年厳格化",
        summary: "2025年・2026年の犯収法施行規則改正を横断し、2027年4月以降の本人確認方式を対面・非対面に分けて整理した実務解説。画像・写し中心の方式の廃止、ICチップ読取り、公的個人認証、残る代替方式を比較し、金融機関だけでなく特定事業者全体への影響と、システム・規程・マニュアルの移行まで具体化する。",
        whyImportant: [
          "複数の共同命令で段階的に変わった本人確認方式を2027年4月時点の姿に組み直している",
          "オンラインだけでなく対面取引、金融以外の特定事業者への影響まで具体化している",
          "法令上の方式差をシステム改修・本人確認ベンダー・社内規程・マニュアルの実務へ接続している"
        ],
        audience: ["企業法務", "AML・コンプライアンス", "プロダクト・IT", "本人確認業務担当", "特定事業者の管理部門"],
        audienceReason: "複数の改正命令を一体として読み、現行フローのどこが廃止・厳格化されるかと実装タスクを短時間で把握するため。",
        relatedTopics: addUniqueStrings(article.relatedTopics, ["aml-identity-verification-2027"]),
        relatedIssues: addUniqueStrings(article.relatedIssues, [
          "aml-kyc-nonface-image-methods",
          "aml-kyc-face-ic-reading",
          "aml-kyc-scope",
          "aml-kyc-system-operations"
        ]),
        primarySourceIds: addUniqueStrings(article.primarySourceIds, [
          "source-jafic-aml-rule-2025-order-3",
          "source-jafic-aml-rule-2026-order-1"
        ]),
        reformEventId: "aml-identity-verification-regulations-2027",
        reformStageAtPublication: "finalized_pending",
        reformStageSourceIds: ["source-jafic-aml-rule-2025-order-3", "source-jafic-aml-rule-2026-order-1"],
        whatChanged: "実務整理／既存のTMI解説を正本として再利用し、2027年本人確認厳格化の新しい詳細テーマにも接続して重複ARTICLEを解消した。"
      };
    });

  window.SOURCE_DATA = (window.SOURCE_DATA || []).filter((source) => !duplicateSourceIds.has(source.id));
  window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => !duplicateTopicSlugs.has(topic.slug));

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) => {
    if (event.id !== "aml-identity-verification-regulations-2027") return event;
    return {
      ...event,
      articleIds: addUniqueStrings(
        (event.articleIds || []).filter((id) => id !== "article-tmi-aml-identity-verification-2026-03-30"),
        ["article-tmi-aml-identity-2026"]
      )
    };
  });
})();
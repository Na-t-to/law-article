(() => {
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  const addUnique = (values, value) => uniq([...(Array.isArray(values) ? values : []), value]);
  const removeValue = (values, value) => (Array.isArray(values) ? values : []).filter((item) => item !== value);
  const replaceValues = (values, aliases) => uniq((Array.isArray(values) ? values : []).map((value) => aliases.get(value) || value));

  let topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  let sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  let articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];

  const topicAliases = new Map([
    ["corporate-takeover-guidelines", "listed-company-takeover-guidelines"],
    ["ssbj-sustainability-disclosure-2026", "ssbj-statutory-sustainability-disclosure"]
  ]);
  const sourceAliases = new Map([
    ["source-meti-takeover-guideline-20230831", "source-meti-corporate-takeover-guidelines-2023"]
  ]);
  const articleAliases = new Map([
    ["article-meti-takeover-guideline-20230831", "article-meti-corporate-takeover-guidelines-2023"]
  ]);
  const issueAliases = new Map([
    ["takeover-bona-fide-proposal", "takeover-serious-proposal"],
    ["takeover-qualitative-value", "takeover-qualitative-enterprise-value"],
    ["ssbj-mandatory-application-timing-2026", "ssbj-application-scope"],
    ["ssbj-scope3-safe-harbor-2026", "ssbj-scope3-liability"],
    ["ssbj-shk-ghg-practical-standard-2026", "ssbj-shk-practice-standard-2026"],
    ["ssbj-scope3-supply-chain-contract-risk-2026", "ssbj-supplychain-data"],
    ["display-price-conditions", "display-minimum-price-claims"]
  ]);

  // 景表法: 同じ金宝堂措置命令から二重に作られた最低価格表示の論点・要約を一つに戻す。
  const advertising = topics.find((topic) => topic && topic.slug === "advertising-display-control");
  if (advertising) {
    advertising.issues = (advertising.issues || []).filter((issue) => issue && issue.id !== "display-price-conditions");
    if (advertising.currentSummary) {
      advertising.currentSummary.facts = (advertising.currentSummary.facts || []).filter((value) => value !== "消費者庁は2026年9月18日、貸切ホールを用いる家族葬について『家族葬 10.45万円〜』等と表示しながら、実際には僅かな場合を除き30万8000円以上が必要だった表示を有利誤認として措置命令した。");
      advertising.currentSummary.interpretations = (advertising.currentSummary.interpretations || []).filter((value) => value !== "価格表示の審査では、低価格プランが形式的に存在するかだけでなく、広告全体から一般消費者がどのサービスをその価格で利用できると受け取るかと、実際の提供条件が一致しているかを見る必要がある。");
      advertising.currentSummary.implications = (advertising.currentSummary.implications || []).filter((value) => value !== "『○円〜』『最低○円』等の広告は、同時に訴求するサービス内容、適用条件、実際の販売・提供実績を広告審査で突合し、例外的にしか成立しない価格を中心表示に使わない。");
    }
    advertising.practicalImpacts = removeValue(advertising.practicalImpacts, "価格表示・最安値広告の審査");
  }

  // 企業買収行動指針: 2023年指針と2026年ポイント・Q&Aを同じ棚へ統合し、複数提案の論点だけを正本へ移す。
  const takeoverCanonical = topics.find((topic) => topic && topic.slug === "listed-company-takeover-guidelines");
  const takeoverDuplicate = topics.find((topic) => topic && topic.slug === "corporate-takeover-guidelines");
  if (takeoverCanonical) {
    takeoverCanonical.sourceIds = uniq([
      ...(takeoverCanonical.sourceIds || []),
      "source-meti-takeover-points-20260730",
      "source-meti-takeover-qa-20260730"
    ]);

    const sourceAdditions = new Map([
      ["takeover-desirable-acquisition", ["source-meti-takeover-qa-20260730"]],
      ["takeover-serious-proposal", ["source-meti-takeover-points-20260730", "source-meti-takeover-qa-20260730"]],
      ["takeover-qualitative-enterprise-value", ["source-meti-takeover-points-20260730", "source-meti-takeover-qa-20260730"]]
    ]);
    for (const issue of takeoverCanonical.issues || []) {
      if (sourceAdditions.has(issue.id)) issue.sourceIds = uniq([...(issue.sourceIds || []), ...sourceAdditions.get(issue.id)]);
    }

    const competing = (takeoverDuplicate?.issues || []).find((issue) => issue && issue.id === "takeover-competing-proposals");
    if (competing && !(takeoverCanonical.issues || []).some((issue) => issue && issue.id === competing.id)) {
      takeoverCanonical.issues = (takeoverCanonical.issues || []).concat({
        ...competing,
        sourceIds: uniq([
          "source-meti-corporate-takeover-guidelines-2023",
          "source-meti-corporate-takeover-guidelines-clarification-2026",
          "source-meti-takeover-points-20260730",
          "source-meti-takeover-qa-20260730"
        ])
      });
    }
    if (takeoverCanonical.currentSummary) {
      takeoverCanonical.currentSummary.interpretations = addUnique(
        takeoverCanonical.currentSummary.interpretations,
        "複数の真摯な買収提案がある場合、通常は最も企業価値向上に資する提案と最も株主利益を確保する提案が一致すると想定される。合理的な交渉努力を尽くしても両者が一致しない例外的な場面では、取締役会の判断根拠と株主への説明責任が特に重要になる。"
      );
      takeoverCanonical.currentSummary.implications = addUnique(
        takeoverCanonical.currentSummary.implications,
        "複数の真摯な提案が競合する場合は、買収価格だけでなく企業価値向上策も比較し、最高価格の提案と別の提案を選ぶときは判断過程と株主への説明根拠を残す。"
      );
    }
    takeoverCanonical.practicalImpacts = addUnique(takeoverCanonical.practicalImpacts, "複数買収提案の比較・選定");
    takeoverCanonical.lastUpdated = "2026-09-20";
    takeoverCanonical.lastVerified = "2026-09-20";
  }

  // SSBJ: SHK実務対応基準の一次資料を正本テーマへ移し、法定開示の段階施行と後日の指定告示を別イベントとして保つ。
  const ssbjCanonical = topics.find((topic) => topic && topic.slug === "ssbj-statutory-sustainability-disclosure");
  if (ssbjCanonical) {
    ssbjCanonical.sourceIds = addUnique(ssbjCanonical.sourceIds, "source-ssbj-shk-practical-standard-20260611");
    const shkIssue = (ssbjCanonical.issues || []).find((issue) => issue && issue.id === "ssbj-shk-practice-standard-2026");
    if (shkIssue) shkIssue.sourceIds = addUnique(shkIssue.sourceIds, "source-ssbj-shk-practical-standard-20260611");
    ssbjCanonical.lastVerified = "2026-09-20";
  }

  // 参照側を正本へ寄せる。
  for (const source of sources) {
    source.topics = replaceValues(source.topics, topicAliases);
  }
  for (const article of articles) {
    article.relatedTopics = replaceValues(article.relatedTopics, topicAliases);
    article.relatedIssues = replaceValues(article.relatedIssues, issueAliases);
    article.primarySourceIds = replaceValues(article.primarySourceIds, sourceAliases);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = replaceValues(article.reformStageSourceIds, sourceAliases);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = replaceValues(article.reformEffectiveDateSourceIds, sourceAliases);
  }
  for (const topic of topics) {
    topic.sourceIds = replaceValues(topic.sourceIds, sourceAliases);
    topic.referenceArticleIds = replaceValues(topic.referenceArticleIds, articleAliases);
    for (const issue of topic.issues || []) {
      issue.sourceIds = replaceValues(issue.sourceIds, sourceAliases);
      for (const view of issue.views || []) {
        view.sourceIds = replaceValues(view.sourceIds, sourceAliases);
        view.articleIds = replaceValues(view.articleIds, articleAliases);
      }
    }
  }
  for (const update of window.UPDATE_DATA || []) {
    if (update.source) update.source = sourceAliases.get(update.source) || update.source;
    update.affectedTopics = replaceValues(update.affectedTopics, topicAliases);
    if (Array.isArray(update.articleIds)) update.articleIds = replaceValues(update.articleIds, articleAliases);
  }
  for (const reform of reforms) {
    reform.relatedTopics = replaceValues(reform.relatedTopics, topicAliases);
    reform.sourceIds = replaceValues(reform.sourceIds, sourceAliases);
    reform.matchSourceIds = replaceValues(reform.matchSourceIds, sourceAliases);
    reform.effectiveDateSourceIds = replaceValues(reform.effectiveDateSourceIds, sourceAliases);
    reform.articleIds = replaceValues(reform.articleIds, articleAliases);
  }

  // SSBJの改正イベント境界を明確化する。
  const mandatoryDisclosure = reforms.find((event) => event && event.id === "ssbj-mandatory-disclosure-2026");
  if (mandatoryDisclosure) {
    mandatoryDisclosure.relatedTopics = ["ssbj-statutory-sustainability-disclosure"];
    mandatoryDisclosure.sourceIds = ["source-fsa-disclosure-ordinance-2026"];
    mandatoryDisclosure.effectiveDateSourceIds = ["source-fsa-disclosure-ordinance-2026"];
    mandatoryDisclosure.matchSourceIds = [];
    mandatoryDisclosure.articleIds = uniq((mandatoryDisclosure.articleIds || []).filter((id) => id !== "article-ssbj-shk-practical-standard-20260611"));
    mandatoryDisclosure.effectiveDateNote = "開示府令等は2026年2月20日に公布・施行。SSBJ基準の強制適用は、平均時価総額3兆円以上の東証プライム上場会社について2027年3月31日以後終了事業年度から、その他の平均時価総額1兆円以上の同市場上場会社について2028年3月31日以後終了事業年度から段階適用される。";
  }
  const shkDesignation = reforms.find((event) => event && event.id === "ssbj-shk-practice-standard-2026-designation");
  if (shkDesignation) {
    shkDesignation.relatedTopics = ["ssbj-statutory-sustainability-disclosure"];
    shkDesignation.sourceIds = uniq([...(shkDesignation.sourceIds || []), "source-ssbj-shk-practical-standard-20260611"]);
    shkDesignation.articleIds = addUnique(shkDesignation.articleIds, "article-fsa-ssbj-shk-practice-standard-designation-2026");
  }
  const directShkArticle = articles.find((article) => article && article.id === "article-ssbj-shk-practical-standard-20260611");
  if (directShkArticle) {
    directShkArticle.relatedTopics = ["ssbj-statutory-sustainability-disclosure"];
    directShkArticle.relatedIssues = ["ssbj-shk-practice-standard-2026"];
    directShkArticle.reformEventId = "ssbj-shk-practice-standard-2026-designation";
    directShkArticle.reformStageAtPublication = "finalized_pending";
    directShkArticle.reformStageSourceIds = ["source-ssbj-shk-practical-standard-20260611"];
    directShkArticle.legacyReformInference = false;
    if (shkDesignation) shkDesignation.articleIds = addUnique(shkDesignation.articleIds, directShkArticle.id);
  }

  // 重複レコードを公開データから除外する。個別の2026年ポイント・Q&A一次資料は残す。
  topics = topics.filter((topic) => !topicAliases.has(topic.slug));
  sources = sources.filter((source) => !sourceAliases.has(source.id));
  articles = articles.filter((article) => !articleAliases.has(article.id));

  const validTopicIds = new Set(topics.map((topic) => topic.slug));
  const validSourceIds = new Set(sources.map((source) => source.id));
  const validArticleIds = new Set(articles.map((article) => article.id));
  const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

  for (const source of sources) {
    source.topics = uniq((source.topics || []).filter((slug) => validTopicIds.has(slug)));
  }
  for (const topic of topics) {
    topic.sourceIds = uniq((topic.sourceIds || []).filter((id) => validSourceIds.has(id)));
    topic.referenceArticleIds = uniq((topic.referenceArticleIds || []).filter((id) => validArticleIds.has(id)));
    for (const issue of topic.issues || []) {
      issue.sourceIds = uniq((issue.sourceIds || []).filter((id) => validSourceIds.has(id)));
      for (const view of issue.views || []) {
        view.sourceIds = uniq((view.sourceIds || []).filter((id) => validSourceIds.has(id)));
        view.articleIds = uniq((view.articleIds || []).filter((id) => validArticleIds.has(id)));
      }
    }
  }
  for (const article of articles) {
    article.relatedTopics = uniq((article.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
    article.primarySourceIds = uniq((article.primarySourceIds || []).filter((id) => validSourceIds.has(id)));
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = uniq(article.reformStageSourceIds.filter((id) => validSourceIds.has(id)));
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = uniq(article.reformEffectiveDateSourceIds.filter((id) => validSourceIds.has(id)));
    const validIssueIds = new Set((article.relatedTopics || []).flatMap((slug) => (topicBySlug.get(slug)?.issues || []).map((issue) => issue.id)));
    article.relatedIssues = uniq((article.relatedIssues || []).filter((id) => validIssueIds.has(id)));
  }
  for (const reform of reforms) {
    reform.relatedTopics = uniq((reform.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
    reform.sourceIds = uniq((reform.sourceIds || []).filter((id) => validSourceIds.has(id)));
    reform.matchSourceIds = uniq((reform.matchSourceIds || []).filter((id) => validSourceIds.has(id)));
    reform.effectiveDateSourceIds = uniq((reform.effectiveDateSourceIds || []).filter((id) => validSourceIds.has(id)));
    reform.articleIds = uniq((reform.articleIds || []).filter((id) => validArticleIds.has(id)));
  }

  window.TOPIC_DATA = topics;
  window.SOURCE_DATA = sources;
  window.ARTICLE_DATA = articles;
})();

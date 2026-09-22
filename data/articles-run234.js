(() => {
  const uniq = (values = []) => [...new Set((Array.isArray(values) ? values : []).filter(Boolean))];
  const replaceValues = (values, aliases) => uniq((Array.isArray(values) ? values : []).map((value) => aliases.get(value) || value));

  let topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];

  const topicAliases = new Map([
    ["ai-civil-liability-governance-2026", "ai-civil-liability"]
  ]);
  const issueAliases = new Map([
    ["ai-civil-support-reliance-classification-2026", "ai-liability-classification"],
    ["ai-civil-user-duty-business-process-2026", "ai-liability-user-duty"],
    ["ai-civil-developer-provider-duty-2026", "ai-liability-provider-duty"],
    ["ai-civil-product-liability-update-2026", "ai-liability-physical-product"]
  ]);

  // 同じ経産省手引きを基礎に同一論点を重ねていたAI民事責任テーマを正本へ統合する。
  // 後発テーマだけに接続されていたPwCのAIエージェント実務解説は、正本テーマの参考解説として保持する。
  const canonical = topics.find((topic) => topic?.slug === "ai-civil-liability");
  if (canonical) {
    canonical.referenceArticleIds = uniq([
      ...(canonical.referenceArticleIds || []),
      "article-pwc-ai-agent-governance-civil-liability-2026"
    ]);
    canonical.lastUpdated = "2026-09-21";
    canonical.lastVerified = "2026-09-21";
  }

  for (const source of sources) {
    source.topics = replaceValues(source.topics, topicAliases);
  }
  for (const article of articles) {
    article.relatedTopics = replaceValues(article.relatedTopics, topicAliases);
    article.relatedIssues = replaceValues(article.relatedIssues, issueAliases);
  }
  for (const update of window.UPDATE_DATA || []) {
    update.affectedTopics = replaceValues(update.affectedTopics, topicAliases);
  }
  for (const reform of reforms) {
    reform.relatedTopics = replaceValues(reform.relatedTopics, topicAliases);
  }

  topics = topics.filter((topic) => !topicAliases.has(topic?.slug));

  const validTopicIds = new Set(topics.map((topic) => topic.slug));
  const validArticleIds = new Set(articles.map((article) => article.id));
  const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));

  for (const source of sources) {
    source.topics = uniq((source.topics || []).filter((slug) => validTopicIds.has(slug)));
  }
  for (const topic of topics) {
    topic.referenceArticleIds = uniq((topic.referenceArticleIds || []).filter((id) => validArticleIds.has(id)));
  }
  for (const article of articles) {
    article.relatedTopics = uniq((article.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
    const validIssueIds = new Set((article.relatedTopics || []).flatMap((slug) => (topicBySlug.get(slug)?.issues || []).map((issue) => issue.id)));
    article.relatedIssues = uniq((article.relatedIssues || []).filter((id) => validIssueIds.has(id)));
  }
  for (const reform of reforms) {
    reform.relatedTopics = uniq((reform.relatedTopics || []).filter((slug) => validTopicIds.has(slug)));
  }

  window.TOPIC_DATA = topics;
})();

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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  const article = {
    id: "article-pwc-cg-code-cyber-internal-audit-20260915",
    title: "2026年コーポレートガバナンス・コード改訂から考えるサイバーセキュリティリスクへの内部監査の役割期待",
    publisher: "PwC Japanグループ",
    author: "山口 太郎、雨宮 弦太、岩本 健太郎、福崎 紗甫里",
    publishedAt: "2026-09-15",
    collectedAt: "2026-09-22",
    url: "https://www.pwc.com/jp/ja/knowledge/column/awareness-cyber-security/revision-of-the-corporate-governance-code.html",
    sourceType: "secondary",
    sourceLabel: "実務解説・PwC／CGコード改訂とサイバーセキュリティ内部監査",
    status: "adopted",
    summary: "2026年コーポレートガバナンス・コード改訂で、原則4-4の解釈指針にサイバーセキュリティリスク、地政学的要因によるサプライチェーン途絶リスク、技術等の情報流出リスクが取締役会のリスク管理上の考慮事項として明記されたことを起点に、内部監査の役割を整理する。グローバル・多角化企業ではIT・OT、地域、事業会社等に統制責任が分散するため、3ラインモデルやアシュアランスマップを用いて、重要リスクが経営レベルで認識され、資源配分・是正責任・取締役会への報告が有効に機能しているかを内部監査が評価するという実装像を示す。",
    whyImportant: [
      "2026年CGコード改訂の原則4-4を、サイバーセキュリティを情シス部門だけの技術課題ではなく取締役会が監督する全社的リスクとして扱うガバナンス設計へ落としている",
      "内部監査を個別の技術統制チェックに限定せず、IT・OT、国内外拠点、事業部門、セキュリティ統括等に分散する責任を3ラインモデルで可視化し、全体として機能しているかを評価する視点が得られる",
      "取締役会へのリスク報告、残存リスク、是正責任、監査テーマの選定、人員・予算・専門性まで含め、コード改訂後に内部監査機能をどう高度化するかを具体的に検討できる"
    ],
    audience: ["上場会社の企業法務", "コーポレートガバナンス担当", "内部監査", "CISO・情報セキュリティ担当", "取締役会事務局"],
    audienceReason: "2026年CGコード改訂後、取締役会がサイバー等の重要リスクをどう監督し、内部監査をどのように活用・支援するかを実際のガバナンスと監査計画へ落とすため。",
    categories: ["会社法・ガバナンス", "情報セキュリティ", "危機管理・コンプライアンス"],
    relatedTopics: ["corporate-governance-code-2026"],
    relatedIssues: ["cg-code-board-function"],
    primarySourceIds: ["source-jpx-cg-code-2026", "source-fsa-cg-code-2026"],
    reformEventId: "corporate-governance-code-2026",
    reformStageAtPublication: "effective",
    reformStageSourceIds: ["source-jpx-cg-code-2026"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／2026年CGコード原則4-4の改訂を、サイバーセキュリティ等の重要リスクに対する取締役会の監督と、内部監査・3ラインモデルによる統制責任の可視化へ落とす解説を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "corporate-governance-code-2026");
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === article.reformEventId);
  if (reform && (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id)) {
    reform.articleIds = addUnique(reform.articleIds, article.id);
  }
})();
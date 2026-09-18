(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "securities-monitoring-2026");
  if (!topic) return;

  const issueId = "secm-public-fund-liquidity-2027";
  const sourceId = "source-fsa-public-fund-liquidity-guideline-20260916";
  const articleId = "article-fsa-public-fund-liquidity-guideline-20260916";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.summary = "証券取引等監視委員会の令和8事務年度証券モニタリング基本方針と前年度の事例集に加え、2027年10月から適用される公募投資信託の流動性リスク管理に関する監督指針改正を基礎に、顧客本位・適合性、サイバー・システムリスク、AML/CFT、業容変更・新商品、引受審査、利益相反、投資運用業の流動性リスク管理を追う。";

  topic.overview = appendTextUnique(
    topic.overview,
    "金融庁は2026年9月16日、IOSCOが2025年5月に公表した集団投資スキームの流動性リスク管理に関する勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すため、金融商品取引業者等向けの総合的な監督指針を改正した。改正後の監督指針は2027年10月1日から適用される。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "金融庁は2026年9月16日、公募投資信託の流動性リスク管理に関する監督指針改正を最終化し、2027年10月1日から適用すると公表した。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "今回の改正は、公募投資信託の流動性リスク管理を監督上の評価・モニタリングへ明確に組み込むものである。監督指針上の着眼点と、個別ファンドで採るべき具体的な管理手段を同一視せず、確定した監督指針、自主規制、商品設計・社内規程を分けて実装する必要がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "投資運用会社は2027年10月1日の適用に向け、公募投資信託の商品設計・解約条件・流動性リスク管理態勢・モニタリングを棚卸しし、監督指針の確定内容とのギャップを計画的に解消する。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "公募投資信託の流動性リスク管理を2027年10月適用へどう準備するか",
      status: "interpreted",
      stage: "enacted",
      views: [],
      conclusion: "金融庁はIOSCO勧告等を踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促す監督指針改正を最終化した。2027年10月1日の適用に向け、商品ごとの流動性リスク管理態勢と商品設計・解約条件等を確定した監督指針に照らして点検する。",
      exception: "監督指針は監督上の評価・着眼点を示すものであり、すべての公募投資信託について一つの管理手段を機械的に義務付けるものとして扱わない。具体的な対応はファンド特性、確定した自主規制・社内規程等と併せて確認する。",
      uncertain: "適用開始までの自主規制・実務運用の細部や各社の商品別対応は更新され得るため、2027年10月まで継続的な確認が必要である。",
      sourceIds: [sourceId]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "公募投資信託の流動性リスク管理・2027年10月適用準備"
  ]);
})();

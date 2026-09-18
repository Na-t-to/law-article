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

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "digital-commerce-tokusho-review");
  if (!topic) return;

  const sourceId = "source-caa-pionet-door-to-door-analysis-20260917";
  const issueId = "dt-ad-triggered-visit-sales";
  const articleId = "article-caa-pionet-door-to-door-analysis-20260917";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.summary = "SNS・チャット勧誘、UIによる意思決定への働きかけ、契約内容の確認・保存、プラットフォームの役割に加え、ネット広告を起点に消費者が訪問を依頼する取引や解約妨害の実態など、デジタル化で変化する取引導線を踏まえた特定商取引法等の見直しを、法制化前の検討段階から追う。";
  topic.overview = appendTextUnique(
    topic.overview,
    "消費者庁は2026年9月17日、PIO-NETの相談データを用いた訪問販売等の分析調査報告書を公表した。2015年度から2024年度にかけて、インターネット広告を見た消費者が事業者の訪問を依頼した相談の割合が大きく増えており、デジタル広告と対面取引を別々に見るだけでは捉えにくいトラブル構造が示されている。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "消費者庁の2026年9月17日PIO-NET分析では、訪問販売に関する相談のうちインターネット広告を見て来訪を要請した類型が2015年度4.1%から2024年度36.3%へ増加し、2024年度の当該類型では価格トラブル70.3%、勧誘手法31.5%、契約書面30.9%が確認された。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "ネット広告を見た消費者が自ら訪問を依頼したという形式だけで取引リスクを低く評価せず、広告表示、訪問依頼、現地見積り・勧誘、契約書面、解約までを一つの顧客導線として法務レビューする必要性が高まっている。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "住宅設備・修理等の訪問型サービスでは、ネット広告の価格表示から訪問時の見積り・追加提案、契約書面、クーリング・オフ・解約対応までのログと説明内容を横断して点検する。"
  );
  topic.currentSummary.uncertain = appendTextUnique(
    topic.currentSummary.uncertain,
    "PIO-NET分析は制度検討の基礎資料であり、それ自体が新たな禁止行為・表示義務・解約権を創設するものではない。調査で示された実態が最終的にどの法令・ガイドラインへ反映されるかは今後の検討を確認する必要がある。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "ネット広告から訪問依頼へ移る取引を、表示・訪問販売・解約規律でどう捉えるか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "ネット広告を起点に消費者が訪問を依頼する取引が増えており、広告上の価格・条件、訪問時の勧誘・見積り、契約書面、解約対応を分断せず一連の取引導線として検証する。消費者庁のPIO-NET分析は、この類型に価格・勧誘・書面トラブルが集中していることを示す基礎資料となる。",
      exception: "消費者から訪問を依頼した取引が一律に同じ法的評価になるわけではない。特定商取引法上の適用関係・除外、広告表示の評価、クーリング・オフ等は具体的な接触・勧誘・契約経緯に即して確認する。",
      uncertain: "2026年9月時点では制度見直しの検討段階であり、ネット広告起点の訪問依頼を対象とする新たな規律の範囲・要件・効果は確定していない。",
      sourceIds: [sourceId, "source-caa-digital-scta-interim-20260910"]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [
    "source-caa-digital-scta-interim-20260910",
    "source-egov-digital-scta-interim-comment-20260916",
    sourceId
  ]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [
    "article-caa-digital-scta-interim-20260910",
    "article-spring-dark-pattern-ui-20260909",
    articleId
  ]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "ネット広告から訪問見積り・契約・解約までの導線監査"
  ]);
})();

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
    id: "article-businesslawyers-mhm-customer-harassment-20260318",
    title: "2026年10月カスハラ対策が義務化！企業が講ずべき措置を解説 令和7年労働施策総合推進法改正の概要と企業への影響",
    publisher: "BUSINESS LAWYERS",
    author: "嶋村 直登、井村 俊介（森・濱田松本法律事務所外国法共同事業）",
    publishedAt: "2026-03-18",
    collectedAt: "2026-09-22",
    url: "https://www.businesslawyers.jp/articles/1457",
    sourceType: "secondary",
    sourceLabel: "実務解説・森・濱田松本／カスタマーハラスメント防止措置",
    status: "adopted",
    summary: "2026年10月1日施行のカスタマーハラスメント防止措置義務について、改正労働施策総合推進法と2026年2月26日公表の防止指針を基礎に、対象となる顧客等・言動の範囲、雇用管理上の措置、他社への協力、望ましい取組まで実務へ落とす解説。BtoBの取引先担当者やSNS上の言動も対象となり得ること、正当な申入れとの区別、トップ方針、管理者への即時報告、単独対応の回避、録音・録画、対応打切り、警察・本社・法務・弁護士へのエスカレーション、相談窓口・研修・プライバシー保護・不利益取扱い禁止等を具体化している。",
    whyImportant: [
      "法定義務の項目を列挙するだけでなく、現場が管理者へ即時報告する、労働者を一人で対応させない、録音・録画する、一定時間後に退店要請・通話終了を行う、犯罪に該当し得る言動は警察へ通報するなど、初動フローへ直接落とせる対応例がまとまっている",
      "BtoCの消費者だけでなくBtoBの取引先担当者、対面だけでなくSNS等のインターネット上の言動も対象となり得る一方、社会通念上許容される正当な申入れはカスハラに当たらないという境界を具体例から確認できる",
      "自社従業員等が他社労働者へカスハラを行った場合の協力努力義務や、フリーランス等の非雇用者への望ましい取組まで扱っており、接客部門だけでなく調達・営業・取引先管理を含む全社ルールとして設計する視点が得られる"
    ],
    audience: ["企業法務", "人事・労務", "コンプライアンス", "店舗・カスタマーサポート責任者", "営業・取引先管理担当"],
    audienceReason: "2026年10月1日の施行前に、方針・規程・マニュアル・相談窓口・管理者判断・記録・警察や法務へのエスカレーションを、指針の要求事項と対応付けて点検するため。",
    categories: ["労務", "危機管理・コンプライアンス"],
    relatedTopics: ["customer-harassment"],
    relatedIssues: ["ch-definition", "ch-response"],
    primarySourceIds: ["source-customer-harassment-guideline-2026", "source-customer-harassment-practical-2026"],
    reformEventId: "customer-harassment-obligation-2026",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-customer-harassment-guideline-2026"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／2026年10月1日のカスハラ防止措置義務を、定義・正当な申入れとの境界、現場初動、記録、相談、エスカレーション、取引先への協力まで具体的な運用へ落とす解説を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id);
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "customer-harassment");
  if (topic && articleExists) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === article.reformEventId);
  if (reform && articleExists) {
    reform.articleIds = addUnique(reform.articleIds, article.id);
  }
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
    id: "article-amt-companies-act-round6-employee-share-grants-20260206",
    title: "【コーポレート】会社法改正の最新動向―法制審議会会社法制部会第6回 議事詳細―",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "坂本 佳隆、佐賀 洋之、角田 怜央",
    publishedAt: "2026-02-06",
    collectedAt: "2026-09-22",
    url: "https://www.amt-law.com/insights/newsletters/newsletter_20260206001_ja_001/",
    sourceType: "secondary",
    sourceLabel: "実務解説・AMT／会社法制見直し・従業員株式報酬",
    status: "adopted",
    summary: "法制審議会会社法制（株式・株主総会等関係）部会第6回の二読議論を、使用人等への株式無償交付、株式交付制度、現物出資制度の三つに分けて詳細に整理する実務解説。使用人等への株式無償交付については、取締役会決議を基本として有利発行規制に服する案と、株主総会決議を要件として有利発行規制を外す案を比較し、労基法上の賃金該当性、子会社役職員への付与、希釈化、既存の金銭報酬債権の現物出資やストックオプション実務への波及まで検討している。",
    whyImportant: [
      "従業員への株式無償交付を単に『可能にするか』ではなく、取締役会決議と有利発行規制を組み合わせる案、株主総会決議と有利発行規制の適用除外を組み合わせる案の差まで追える",
      "賃金該当性が未整理のまま制度化すると労基法24条の通貨払原則と衝突し得ることを示し、現金賃金を減らさず付加的に付与する等の現行実務上の整理と会社法改正を接続している",
      "新制度の設計次第では、金銭報酬債権の現物出資やストックオプションといった既存スキームの有利発行・希釈化評価まで影響し得るため、制度導入時だけでなく既存プランの見直しにも使える"
    ],
    audience: ["企業法務", "人事・労務", "報酬制度担当", "上場会社のコーポレート担当", "株主総会・取締役会事務局"],
    audienceReason: "従業員向け株式報酬の会社法上の交付手続と労基法上の賃金規制を、株主総会決議・有利発行・希釈化・既存報酬スキームへの影響まで含めて検討するため。",
    categories: ["会社法・ガバナンス", "労務"],
    relatedTopics: ["employee-stock-compensation-wage-status", "companies-act-review-shareholders"],
    relatedIssues: ["employee-stock-direct-share-grant", "employee-stock-compensation-wage-status", "companies-act-employee-equity-compensation-wage"],
    primarySourceIds: ["source-companies-act-current", "source-labour-standards-act", "source-moj-company-law-interim-2026", "source-meti-equity-incentive-plan-20230331"],
    reformEventId: "companies-act-employee-share-grants-review-2026",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-moj-company-law-interim-2026"],
    legacyReformInference: false,
    whatChanged: "参考解説追加／使用人等への株式無償交付について、賃金該当性だけでなく、株主総会・取締役会決議、有利発行、希釈化、既存の現物出資・ストックオプション実務への波及まで補強した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id);
  for (const slug of article.relatedTopics || []) {
    const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === slug);
    if (topic && articleExists) topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === article.reformEventId);
  if (reform && articleExists) {
    reform.articleIds = addUnique(reform.articleIds, article.id);
  }
})();

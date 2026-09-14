(() => {
  const topicSlug = "fair-subcontract-transactions";
  const sourceId = "source-jftc-toridoll-payment-reduction-2026";
  const lawSourceId = "source-toriteki-law-2026";
  const issueId = "toriteki-payment-reduction";

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

  const source = {
    id: sourceId,
    title: "株式会社トリドールホールディングスに対する勧告について",
    type: "enforcement",
    typeLabel: "行政処分・勧告",
    authority: "公正取引委員会",
    publishedAt: "2026-09-09",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    importance: "高",
    whyImportant: "食品の製造委託代金から『システム利用料』名目で一律1.1%を控除した行為について、改正前の下請法と2026年1月施行後の取適法の双方で代金減額禁止違反として勧告された事例。控除名目ではなく実際の支払額・控除ロジックを点検する必要性と、制度移行期の適用関係を具体的に確認できる。",
    topics: [topicSlug]
  };

  const existingSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingSourceIds.has(source.id) && !existingSourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = existingSources.concat([source]);
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== topicSlug) return topic;
    const issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === issueId)) {
      issues.push({
        id: issueId,
        title: "システム利用料・事務手数料等を代金から控除してよいか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "受託事業者の責めに帰すべき理由がないのに、製造委託等代金からシステム利用料・事務手数料等の名目で金額を差し引くことは、名目や算定方法にかかわらず取適法上の代金減額として問題となり得る。支払明細・ERP等の自動控除を含め、契約上の代金額と実際の支払額の差額を点検する。",
        exception: "控除・相殺等の適法性は、受託事業者の責めに帰すべき理由の有無、費用の性質、当事者間の取引構造等により個別に確認する必要がある。単に費用負担の名称や事前合意があることだけで一律に許容されるとは限らない。",
        uncertain: "システム利用料以外の共同利用費、物流費、販促費等について、どの事実関係で代金減額又は他の禁止行為に当たるかは今後の執行事例も継続確認する。",
        sourceIds: [lawSourceId, sourceId]
      });
    }

    return {
      ...topic,
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings(topic.currentSummary?.facts, [
          "公正取引委員会は2026年9月9日、トリドールホールディングスが卸売業者を介して37名へ食品の製造を委託し、2024年8月から2026年7月まで『システム利用料』名目で代金から一律1.1%を減額したとして勧告した。2025年12月までの減額額は1億4741万1330円で、2026年1月以降の委託には取適法の代金減額禁止が適用された。"
        ]),
        interpretations: addUniqueStrings(topic.currentSummary?.interpretations, [
          "費用控除は契約・請求書の名称だけでなく、発注時に定めた代金額と実際の支払額の差、控除の根拠、受託側の責めに帰すべき事情の有無を基準に点検する。卸売業者等の第三者を介する支払フローでも、自社が控除条件を設計・決定している場合は実態を追う必要がある。"
        ]),
        implications: addUniqueStrings(topic.currentSummary?.implications, [
          "支払明細・ERP・購買システムの控除コードを棚卸しし、システム利用料、事務手数料、協力金、物流費等の定率・定額控除について、契約上の代金額との対応と法的根拠を確認する。",
          "商流に卸売業者・決済事業者等が入る場合も、最終的に受託事業者へいくら支払われ、控除額が誰へ帰属するかまで可視化する。"
        ])
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["支払控除・システム利用料", "ERP・支払明細の控除設定"])
    };
  });

  const article = {
    id: "article-jftc-toridoll-payment-reduction-2026",
    title: "株式会社トリドールホールディングスに対する勧告について",
    publisher: "公正取引委員会",
    author: "公正取引委員会",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-14",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    sourceType: "primary",
    sourceLabel: "一次資料・取適法／代金減額の勧告",
    status: "adopted",
    summary: "トリドールホールディングスが、卸売業者を介して37名へ食品の製造を委託した取引で、2024年8月から2026年7月まで代金から『システム利用料』名目で一律1.1%を控除していたことについて、公取委が代金減額禁止違反として勧告した事例。2025年12月までの委託には改正前下請法、2026年1月以降の委託には取適法が適用され、改正後期間については減額分に加えて法定の遅延利息の支払も求められた。",
    whyImportant: [
      "『システム利用料』という費用名目を付けても、受託事業者の責めに帰すべき理由なく発注代金から一律控除すれば代金減額として執行対象になることを、取適法施行後の具体例で確認できる",
      "卸売業者を介する商流でも、発注者が控除条件を設計している場合に、最終支払額と費用の帰属まで追う必要があることを示す",
      "2025年12月以前と2026年1月以降で旧下請法・取適法を切り分けており、継続取引が制度移行日をまたぐ場合の適用関係と、改正後期間の遅延利息まで確認できる"
    ],
    audience: ["企業法務", "購買・調達", "経理・財務", "コンプライアンス"],
    audienceReason: "取引先への支払明細、ERPの自動控除、システム利用料・事務手数料等の費用負担を点検し、契約上の代金額と実際の支払額が一致するかを確認するため。",
    categories: ["契約・取引", "独占禁止法・下請・フリーランス", "危機管理・コンプライアンス"],
    relatedTopics: [topicSlug],
    relatedIssues: [issueId, "toriteki-enforcement"],
    primarySourceIds: [sourceId, lawSourceId],
    legacyReformInference: false,
    whatChanged: "テーマ更新／『システム利用料』等の定率・定額控除を代金減額として点検する論点を追加し、取適法施行後の具体的な勧告事例を接続した。"
  };

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingArticleIds.has(article.id) && !existingArticleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat([article]);
  }
})();

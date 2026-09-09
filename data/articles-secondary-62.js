(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "fefta-inward-investment-screening";
  const reformEventId = "fefta-inward-investment-2026-amendment";
  const billSourceId = "source-shugiin-fefta-fdi-bill-2026";
  const jficSourceId = "source-mof-jfic-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: billSourceId,
      title: "第221回国会 閣法第27号 外国為替及び外国貿易法の一部を改正する法律案・審議経過",
      type: "law",
      typeLabel: "国会・法案審議経過",
      authority: "衆議院",
      publishedAt: "2026-03-17",
      url: "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/keika/1DE2076.htm",
      importance: "高",
      whyImportant: "法案提出から衆参両院の可決、2026年5月29日の成立、同年6月5日の公布までを一次資料で追跡でき、法案段階の記事と成立後の記事の時点を区別する根拠になる。",
      topics: [topicSlug]
    },
    {
      id: jficSourceId,
      title: "対日外国投資委員会（JFIC：Japan Foreign Investment Committee）",
      type: "guideline",
      typeLabel: "政府運用・会議資料",
      authority: "財務省",
      publishedAt: "2026-06-29",
      url: "https://www.mof.go.jp/policy/international_policy/gaitame_kawase/fdi/20260618215004.html",
      importance: "高",
      whyImportant: "改正外為法に基づく省庁横断の対内直接投資審査体制として、財務省と国家安全保障局を中心に関係省庁が連携するJFICの設置・運用を確認できる一次資料。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-10";
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = addUniqueString(addUniqueString(topic.sourceIds, billSourceId), jficSourceId);
    topic.issues = addUniqueById(topic.issues, [
      {
        id: "fdi-jfic-coordination",
        title: "JFICは対内直接投資審査で何を担うか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "財務省と国家安全保障局を中心に、外務省、経済産業省、防衛省その他の事業所管省庁が連携する対日外国投資委員会（JFIC）が設けられ、省庁横断で投資家属性、投資先事業・技術、取得態様等の情報・審査ノウハウを共有する。",
        exception: "個別投資案件を扱う性質上、会議や議事内容の全てが公開される仕組みではない。",
        uncertain: "JFIC創設後の審査運用やリスク軽減措置との接続は、今後の案件蓄積を通じて具体化していく。",
        sourceIds: ["source-mof-fefta-amendment-2026", jficSourceId]
      }
    ]);
    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(topic.currentSummary.facts, "2026年6月29日に対日外国投資委員会（JFIC）の第1回会合が開催され、財務省・国家安全保障局を中心とする省庁横断の対内直接投資審査体制が始動した。");
      topic.currentSummary.interpretations = addUniqueText(topic.currentSummary.interpretations, "2026年改正後の投資審査では、単一所管省庁との関係だけでなく、対象技術・安全保障リスクに応じた省庁横断の情報共有・審査を前提に案件準備を行う必要がある。");
      topic.currentSummary.implications = addUniqueText(topic.currentSummary.implications, "案件初期に対象会社の事業・技術と関係省庁を整理し、必要情報を一貫して説明できる当局対応体制を準備する。");
    }
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item.id === reformEventId);
  if (reform) {
    reform.sourceIds = addUniqueString(addUniqueString(reform.sourceIds, billSourceId), jficSourceId);
    reform.matchSourceIds = addUniqueString(reform.matchSourceIds, billSourceId);
    [
      "article-mof-fefta-amendment-2026",
      "article-businesslawyers-amt-fefta-2026",
      "article-tmi-fefta-amendment-upper-2026",
      "article-tmi-fefta-amendment-lower-2026"
    ].forEach((id) => {
      reform.articleIds = addUniqueString(reform.articleIds, id);
    });
  }
})();
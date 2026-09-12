(() => {
  const topicSlug = "insider-trading-information-management";
  const sourceId = "source-sesc-irom-tob-insider-2026";
  const issueId = "insider-tob-offeror-contract-counterparties";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && (item.id || item.slug)));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id || item.slug)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
      type: "enforcement",
      typeLabel: "一次資料・証券監視委／TOBインサイダー課徴金勧告",
      authority: "証券取引等監視委員会",
      publishedAt: "2026-09-11",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
      importance: "高",
      whyImportant: "公開買付者グループとのアドバイザリー契約の履行に関してTOB情報を知った外部者が、公開前に対象会社株式を自己計算で買い付けた事案について、金商法167条1項違反として課徴金勧告が行われた具体例。公開買付者側の外部アドバイザー・契約先まで売買制限と情報管理の対象に含める必要性を確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    const nextIssues = addUniqueById(topic.issues, [
      {
        id: issueId,
        title: "公開買付者側の契約先・外部アドバイザーをどう管理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "公開買付者等と契約を締結している者が、その契約の締結・履行に関して公開買付け等事実を知った場合、法定の除外事由がない限り、公表前の対象株式等の売買は金商法167条の規制対象となり得る。案件の売買制限・情報管理は社内メンバーだけでなく、公開買付者側の外部アドバイザーや契約先まで含めて設計する。",
        exception: "契約関係があるだけで一律に規制対象になるのではなく、公開買付け等事実を当該契約の締結・履行に関して知ったことなど、金商法167条所定の要件を満たす必要がある。",
        uncertain: "個別の業務委託・アドバイザリー関係が法定の契約締結者に当たるか、情報取得が契約の締結・履行に関するものかは事案ごとの事実関係による。",
        sourceIds: [sourceId]
      }
    ]);
    const currentSummary = topic.currentSummary ? { ...topic.currentSummary } : {};
    currentSummary.facts = addUniqueText(
      currentSummary.facts,
      "2026年9月11日、証券取引等監視委員会は、Blackstone Inc.の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関してアイロムグループ株式の公開買付け等事実を知り、公表前に6,600株を自己計算で買い付けたとして、615万円の課徴金納付命令を勧告した。"
    );
    currentSummary.interpretations = addUniqueText(
      currentSummary.interpretations,
      "TOB案件の情報管理は、買付者・対象会社の役職員だけでなく、公開買付者側の外部アドバイザーや業務委託先にも及ぶ。2026年改正で新たに議論される対象会社側の契約・交渉関係者の追加とは別に、公開買付者側の契約締結者については現行法でも規制が機能している。"
    );
    currentSummary.implications = addUniqueText(
      currentSummary.implications,
      "TOB・MBO案件では、公開買付者側のFA、コンサルタント、専門家その他の契約先についても、案件情報へのアクセス権、インサイダーリスト、株式売買制限、誓約・研修、情報伝達記録を案件開始時から管理する。"
    );
    return {
      ...topic,
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      sourceIds: addUniqueStrings(topic.sourceIds, [sourceId]),
      practicalImpacts: addUniqueText(topic.practicalImpacts, "公開買付者側アドバイザー・契約先の売買制限／情報管理"),
      currentSummary,
      issues: nextIssues
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-sesc-irom-tob-insider-2026",
      title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-13",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・TOBインサイダー課徴金勧告",
      status: "adopted",
      summary: "Blackstone Inc.の連結子会社とアドバイザリー契約を締結していた者が、その契約の履行に関してアイロムグループ株式の公開買付け等事実を知り、公表前に対象株式6,600株を自己計算で買い付けたとして、証券取引等監視委員会が金商法167条1項違反に基づく615万円の課徴金納付命令を勧告した事案。",
      whyImportant: [
        "公開買付者側の社外アドバイザー・契約先が、現行のTOBインサイダー規制の射程に入る具体的な執行例である",
        "案件の情報管理対象を買付者・対象会社の役職員だけに限定すると漏れ得ることを、実際の課徴金勧告から確認できる",
        "2026年改正で対象会社側の契約・交渉関係者を追加する議論と、現行法ですでに対象となる公開買付者側の契約締結者を区別して理解できる"
      ],
      audience: ["上場会社法務・コンプライアンス", "M&A担当", "PEファンド・投資会社", "FA・コンサルタント・外部専門家", "内部者取引管理担当"],
      audienceReason: "TOB・MBO案件で、社外関係者を含むインサイダーリスト、株式売買制限、NDA・誓約、アクセス管理の範囲を見直すため。",
      categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId],
      primarySourceIds: [sourceId],
      whatChanged: "実務補強／公開買付者側の外部アドバイザー・契約締結者が現行法のTOBインサイダー規制対象となる具体的な執行例を追加し、案件の情報管理対象を社外契約先まで明示的に拡張した。"
    }
  ]);
})();

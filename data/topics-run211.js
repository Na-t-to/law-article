(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "digital-commerce-tokusho-review");
  if (!topic) return;

  const sourceId = "source-caa-hope-group-door-to-door-order-20260918";
  const articleId = "article-caa-hope-group-door-to-door-order-20260918";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "関東経済産業局は2026年9月18日、HOPE Groupに対し訪問販売に関する9か月の一部業務停止命令等を行った。ネット広告の『550円（税込）～』『980円～』等を見て消費者自身が訪問を依頼した事例でも、依頼時に具体的な役務内容・金額を把握しておらず低額の取引を想定していたところ、訪問後に10万円・30万円を大きく超える契約を勧誘された事実関係が示されている。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "消費者が自ら訪問を依頼したという外形だけで訪問販売規制の適用外と判断せず、依頼時に把握していた役務内容・価格、取引意思の具体性、訪問後の見積り・勧誘内容を実際の顧客導線に即して確認する必要がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "暮らしのレスキュー等の訪問型サービスでは、ネット広告の最低価格表示、受付時の説明、訪問手配情報、現地見積り・追加提案、契約書面、支払、クーリング・オフ・返金までを一体で監査し、再委託・再々委託先の作業員にも同じルールを周知・統制する。"
  );

  for (const issueId of ["dt-ad-triggered-visit-sales", "dt-cancellation-contract"]) {
    const issue = (topic.issues || []).find((item) => item?.id === issueId);
    if (issue) issue.sourceIds = appendUnique(issue.sourceIds, [sourceId]);
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "訪問依頼型レスキューサービスの広告・現地見積り・クーリングオフ・委託先管理"
  ]);
})();
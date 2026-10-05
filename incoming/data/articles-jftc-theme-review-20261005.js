/* Full-theme source comparison: 2026-10-05.
 * Apply after all currently published data, at the end of the articles group.
 * Evidence: JFTC October 1 final release and current official primary materials.
 * This replaces the held proposal, not the already published source/article/update.
 */
(() => {
  const reviewedAt = "2026-10-05";
  const announcement = "source-jftc-ip-toriteki-freelance-20261001";
  const toriteki = announcement + "-toriteki-redline";
  const freelance = announcement + "-freelance-redline";
  const comments = announcement + "-comments";
  const articleId = "article-jftc-ip-toriteki-freelance-20261001";
  const patches = {
    "ip-knowhow-data-transactions": {
      issue: "iptx-value-compensation",
      sources: [announcement, toriteki, freelance, comments],
      facts: ["公正取引委員会は2026年10月1日、6月24日の知財取引指針を踏まえた取適法運用基準とフリーランス法の考え方の最終改正を公表した。知財等の譲渡・許諾等の範囲と対価を、各法の適用条件に応じて確認する必要がある。"],
      implications: ["知財等の提供範囲・対価を発注時に確認し、追加利用や権利譲渡を求める際は条件と価格の協議記録を残す。"],
      uncertain: ["適正な対価や変更・取消しに伴う費用・損失の具体額は個別取引に即して判断する。今回の改正公表資料から、独立した新たな施行日・猶予期限は確認していない。"]
    },
    "fair-subcontract-transactions": {
      issue: "toriteki-price-consultation",
      sources: [announcement, toriteki, comments],
      facts: ["2026年10月1日公表の改正運用基準は、知財等の利用範囲・目的の拡大による経済的価値の変動を、受託側の求めに応じて価格協議を適切に行うべき事情に追加した。また、予定を確保させた後の直前取消しに伴う費用・損失の扱いを明確化した。"],
      implications: ["知財の利用拡大に関する価格協議と、発注取消し・やり直し時の費用・損失の確認を、購買部門の承認フローに組み込む。"],
      uncertain: ["予定確保の期間、実施直前か、別の業務を実施できなくなったか、負担すべき費用・損失は個別判断となる。一律の日数や安全基準として扱わない。"]
    },
    "freelance-law": {
      issue: "freelance-notice",
      sources: [announcement, freelance, comments],
      facts: ["2026年10月1日公表の改正「考え方」は、知的財産権等にノウハウを含む技術上・営業上の秘密等を明記し、譲渡・許諾等の範囲明示と対価、予定を確保させた後の直前取消しに伴う費用・損失の扱いを整理した。"],
      implications: ["フリーランスへの発注通知の知財条件と、変更・取消し時の補償ルールを見直し、予定確保や作業状況を記録する。"],
      uncertain: ["キャンセルポリシーの存在だけで適法になるわけではなく、支払の有無・金額の定め方により違反となり得る。各義務・禁止行為の発注者属性や委託期間等の適用条件も個別に確認する。"]
    }
  };
  const topics = window.TOPIC_DATA;
  if (!Array.isArray(topics)) throw new Error("JFTC full-theme review requires the complete loaded TOPIC_DATA");
  const sources = new Set((window.SOURCE_DATA || []).map(source => source.id));
  if (!(window.ARTICLE_DATA || []).some(article => article.id === articleId)) {
    throw new Error("JFTC full-theme review must load after the published October 2 article");
  }
  for (const [slug, patch] of Object.entries(patches)) {
    const matches = topics.filter(topic => topic && topic.slug === slug);
    if (matches.length !== 1) throw new Error("JFTC review expected one topic: " + slug);
    const topic = matches[0];
    if (!topic.lastUpdated || !topic.lastVerified || topic.lastUpdated > reviewedAt || topic.lastVerified > reviewedAt) {
      throw new Error("JFTC review needs reconciliation with newer or undated content: " + slug);
    }
    if ((topic.issues || []).filter(issue => issue.id === patch.issue).length !== 1) {
      throw new Error("JFTC review target issue missing or duplicated: " + patch.issue);
    }
    for (const key of ["facts", "interpretations", "implications", "uncertain"]) {
      if (!Array.isArray(topic.currentSummary?.[key])) throw new Error("JFTC review summary shape changed: " + slug + "." + key);
    }
    for (const id of patch.sources) if (!sources.has(id)) throw new Error("JFTC review source missing: " + id);
  }
  const add = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  window.TOPIC_DATA = topics.map(topic => {
    const patch = patches[topic.slug];
    if (!patch) return topic;
    return {
      ...topic,
      lastUpdated: reviewedAt,
      lastVerified: reviewedAt,
      sourceIds: add(topic.sourceIds, patch.sources),
      referenceArticleIds: add(topic.referenceArticleIds, [articleId]),
      currentSummary: {
        ...topic.currentSummary,
        facts: add(topic.currentSummary.facts, patch.facts),
        implications: add(topic.currentSummary.implications, patch.implications),
        uncertain: add(topic.currentSummary.uncertain, patch.uncertain)
      },
      issues: topic.issues.map(issue => issue.id === patch.issue ? {...issue, sourceIds: add(issue.sourceIds, patch.sources)} : issue)
    };
  });
})();

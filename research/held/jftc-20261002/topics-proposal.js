(() => {
  const sourceIds = [
  "source-jftc-ip-toriteki-freelance-20261001",
  "source-jftc-ip-toriteki-freelance-20261001-toriteki-redline",
  "source-jftc-ip-toriteki-freelance-20261001-freelance-redline",
  "source-jftc-ip-toriteki-freelance-20261001-comments"
];
  const articleId = "article-jftc-ip-toriteki-freelance-20261001";
  const patches = {
  "ip-knowhow-data-transactions": {
    "facts": [
      "公正取引委員会は2026年10月1日、知財取引指針を踏まえた取適法運用基準とフリーランス法の考え方の最終改正を公表した。"
    ],
    "implications": [
      "知財等の提供範囲・対価を発注時に確認し、追加利用や権利譲渡を求める際は条件と価格の協議記録を残す。"
    ],
    "uncertain": [
      "適正な対価や費用・損失の具体額は個別取引に即して判断する。公表資料から独立した新たな施行日・猶予期限は確認していない。"
    ],
    "issue": "iptx-value-compensation"
  },
  "fair-subcontract-transactions": {
    "facts": [
      "2026年10月1日公表の改正運用基準は、知財等の利用範囲・目的の拡大による経済的価値の変動を価格協議の対象となる事情に追加し、予定を確保させた後の直前取消しに伴う費用・損失の扱いも明確化した。"
    ],
    "implications": [
      "知財の利用拡大に関する価格協議と、発注取消し・やり直し時の費用・損失の確認を、購買部門の承認フローに組み込む。"
    ],
    "uncertain": [
      "予定確保の期間、実施直前か、別の業務が不可能になったかは個別判断であり、一律の日数や安全基準は示されていない。"
    ],
    "issue": "toriteki-price-consultation"
  },
  "freelance-law": {
    "facts": [
      "2026年10月1日公表の改正「考え方」は、知財等にノウハウを含む秘密等を明記し、譲渡・許諾等の範囲明示と対価、予定を確保させた後の直前取消しの費用・損失を整理した。"
    ],
    "implications": [
      "フリーランスへの発注通知の知財条件と、変更・取消し時の補償ルールを見直し、予定確保や作業状況を記録する。"
    ],
    "uncertain": [
      "キャンセルポリシーの存在だけで適法になるわけではなく、支払の有無・金額の定め方により違反となり得る。各義務・禁止行為の適用条件も個別に確認する。"
    ],
    "issue": "freelance-notice"
  }
};
  const add = (items, additions) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...additions]));
  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map(topic => {
    const patch = topic && patches[topic.slug];
    if (!patch) return topic;
    const current = topic.currentSummary || {};
    return {
      ...topic,
      lastUpdated: "2026-10-02",
      // Preserve lastVerified: this batch checks the new announcement, not every existing theme assertion.
      sourceIds: add(topic.sourceIds, sourceIds),
      referenceArticleIds: add(topic.referenceArticleIds, [articleId]),
      currentSummary: {...current, facts: add(current.facts, patch.facts), implications: add(current.implications, patch.implications), uncertain: add(current.uncertain, patch.uncertain)},
      issues: (topic.issues || []).map(issue => issue && issue.id === patch.issue ? {...issue, sourceIds: add(issue.sourceIds, sourceIds)} : issue)
    };
  });
})();

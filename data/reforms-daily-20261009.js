// Verified October 9 daily batch. Guards preserve canonical records and reject stale replacements.
(() => {
  const current = window.REFORM_EVENT_DATA || [];
  const additions = [
  {
    "id": "workers-comp-late-onset-benefit-base-order-2026",
    "title": "遅発性疾病の労災給付基礎日額・メリット制の省令改正案",
    "eventType": "regulation_or_guideline",
    "lawId": "workers-compensation-insurance-act",
    "lawLabel": "労働者災害補償保険法等",
    "relatedTopics": [
      "workers-compensation-insurance-2026-reform"
    ],
    "effectiveDateStatus": "relative",
    "effectiveDateNote": "未確定の省令案では「公布の日」から施行。具体的な公布日・確定した施行日は未確認で、経過措置も最終省令の確認が必要。",
    "effectiveDateSourceIds": [
      "source-mhlw-late-onset-benefit-order-outline-20261009"
    ],
    "sourceIds": [
      "source-mhlw-late-onset-benefit-order-outline-20261009",
      "source-mhlw-late-onset-benefit-order-explanation-20261009"
    ],
    "matchSourceIds": [
      "source-mhlw-late-onset-benefit-order-outline-20261009",
      "source-mhlw-late-onset-benefit-order-explanation-20261009"
    ],
    "articleIds": [
      "article-mhlw-late-onset-benefit-order-20261008"
    ]
  },
  {
    "id": "drone-supply-policy-2026-october-proposal",
    "title": "無人航空機の安定供給確保方針・2026年10月改正案",
    "eventType": "regulation_or_guideline",
    "lawId": "drone-stable-supply-policy",
    "lawLabel": "経済安全保障推進法・無人航空機に係る安定供給確保を図るための取組方針",
    "relatedTopics": [
      "economic-security-tech-control",
      "supply-chain-security-scs-2026",
      "jc-star-iot-security-labeling"
    ],
    "effectiveDateStatus": "unknown",
    "effectiveDateNote": "意見公募段階。全文案の改定日・適用日は「令和8年●月●日」であり未確定。2026年11月3日は意見提出期限、2027年3月は案が言及するSCS評価制度の運用開始予定で、この方針の適用日ではない。",
    "effectiveDateSourceIds": [
      "source-meti-drone-supply-policy-draft-20261005",
      "source-meti-drone-supply-policy-redline-20261005"
    ],
    "sourceIds": [
      "source-egov-drone-supply-policy-proposal-20261005",
      "source-meti-drone-supply-policy-draft-20261005",
      "source-meti-drone-supply-policy-redline-20261005",
      "source-meti-drone-supply-policy-procedure-20261005"
    ],
    "matchSourceIds": [
      "source-egov-drone-supply-policy-proposal-20261005",
      "source-meti-drone-supply-policy-draft-20261005",
      "source-meti-drone-supply-policy-redline-20261005"
    ],
    "articleIds": [
      "article-meti-drone-supply-policy-proposal-20261005"
    ]
  },
  {
    "id": "fsa-penalty-hearing-digital-ordinances-2026",
    "title": "課徴金審判手続デジタル化・実施府令（2026年11月施行）",
    "eventType": "regulation_or_guideline",
    "lawId": "fsa-administrative-monetary-penalty-procedure",
    "lawLabel": "金融商品取引法・公認会計士法の課徴金審判手続",
    "relatedTopics": [
      "fsa-penalty-hearing-digitalization"
    ],
    "effectiveDateStatus": "confirmed",
    "effectiveDate": "2026-11-30",
    "effectiveDateNote": "金商法・公認会計士法の課徴金審判手続に係る両実施府令の施行日。2023年法律第79号附則1条5号及び第80号附則1条3号の部分に対応する。開始決定記録等と納付命令等の決定・変更処分の記録には、それぞれ附則2条の経過措置がある。",
    "effectiveDateSourceIds": [
      "source-fsa-penalty-hearing-digital-final-20260916",
      "source-fsa-penalty-hearing-fiea-ordinance-20260916",
      "source-fsa-penalty-hearing-cpa-ordinance-20260916"
    ],
    "matchSourceIds": [
      "source-fsa-penalty-hearing-digital-final-20260916",
      "source-fsa-penalty-hearing-digital-comments-20260916",
      "source-fsa-penalty-hearing-fiea-ordinance-20260916",
      "source-fsa-penalty-hearing-cpa-ordinance-20260916"
    ],
    "sourceIds": [
      "source-fsa-penalty-hearing-digital-final-20260916",
      "source-fsa-penalty-hearing-digital-comments-20260916",
      "source-fsa-penalty-hearing-fiea-ordinance-20260916",
      "source-fsa-penalty-hearing-cpa-ordinance-20260916"
    ],
    "articleIds": [
      "article-fsa-penalty-hearing-digital-final-20260916"
    ]
  }
];
  const replacements = [];
  const ids = new Set(current.map(item => item.id));
  for (const item of additions) {
    if (ids.has(item.id)) throw new Error(`Duplicate reforms ID: ${item.id}`);
    ids.add(item.id);
  }
  const patched = new Map();
  for (const patch of replacements) {
    const actual = current.find(item => item.id === patch.id);
    if (!actual || JSON.stringify(actual) !== JSON.stringify(patch.expected)) throw new Error(`Stale reforms replacement: ${patch.id}`);
    if (patched.has(patch.id)) throw new Error(`Duplicate reforms replacement: ${patch.id}`);
    patched.set(patch.id, patch.value);
  }
  window.REFORM_EVENT_DATA = [...current.map(item => patched.get(item.id) || item), ...additions];
})();

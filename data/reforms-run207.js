(() => {
  const additions = [
    {
      id: "fsa-public-fund-liquidity-guideline-2027",
      title: "金融商品取引業者等向け総合的監督指針・公募投資信託の流動性リスク管理（2027年10月）",
      eventType: "regulation_or_guideline",
      lawId: "fsa-securities-supervisory-guideline-public-fund-liquidity",
      lawLabel: "金融商品取引業者等向け総合的監督指針（公募投資信託の流動性リスク管理）",
      relatedTopics: ["securities-monitoring-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2027-10-01",
      effectiveDateNote: "金融庁が2026年9月16日に最終化した公募投資信託の流動性リスク管理に関する監督指針改正は2027年10月1日から適用される。資産運用業協会の自主規制改正は別個の規範として扱い、このイベントには混在させない。",
      effectiveDateSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      matchSourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      sourceIds: ["source-fsa-public-fund-liquidity-guideline-20260916"],
      articleIds: ["article-fsa-public-fund-liquidity-guideline-20260916"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

(() => {
  const additions = [
    {
      id: "specified-commercial-transactions-digital-review-2026-interim",
      title: "特定商取引法・デジタル取引規律 2026年見直し",
      eventType: "policy_review",
      lawId: "specified-commercial-transactions-act-digital-review",
      lawLabel: "特定商取引法・デジタル取引規律",
      relatedTopics: ["digital-commerce-tokusho-review", "digital-transactions-scta-review-2026"],
      effectiveDateStatus: "unknown",
      effectiveDateNote: "2026年9月時点は中間取りまとめ・意見募集段階であり、法案提出・成立・施行日は確定していない。PIO-NET分析は制度検討の基礎資料として接続し、それ自体を新ルールとして扱わない。",
      matchSourceIds: [
        "source-caa-digital-scta-interim-20260910",
        "source-egov-digital-scta-interim-comment-20260916"
      ],
      sourceIds: [
        "source-caa-digital-scta-interim-20260910",
        "source-egov-digital-scta-interim-comment-20260916",
        "source-caa-pionet-door-to-door-analysis-20260917"
      ],
      articleIds: [
        "article-caa-digital-scta-interim-20260910",
        "article-spring-dark-pattern-ui-20260909",
        "article-caa-pionet-door-to-door-analysis-20260917"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);

  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const consumerEvent = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "consumer-contract-law-review-2026");
  if (consumerEvent) {
    consumerEvent.relatedTopics = appendUnique(consumerEvent.relatedTopics, ["consumer-contract-act-review-2026"]);
    consumerEvent.sourceIds = appendUnique(consumerEvent.sourceIds, [
      "source-caa-consumer-contract-interim-20260910",
      "source-egov-consumer-contract-interim-comment-20260916"
    ]);
    consumerEvent.matchSourceIds = appendUnique(consumerEvent.matchSourceIds, [
      "source-caa-consumer-contract-interim-20260910",
      "source-egov-consumer-contract-interim-comment-20260916"
    ]);
    consumerEvent.articleIds = appendUnique(consumerEvent.articleIds, ["article-caa-consumer-contract-interim-20260910"]);
  }
})();

(() => {
  const additions = [
    {
      id: "fsa-supervisory-guidelines-cyber-reporting-2026",
      title: "金融庁監督指針等・サイバーインシデント共通報告様式対応（2026年10月）",
      eventType: "regulation_or_guideline",
      lawId: "fsa-supervisory-guidelines-cyber-incident-reporting",
      lawLabel: "金融庁監督指針等（サイバーインシデント報告様式）",
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-10-01",
      effectiveDateNote: "2026年9月18日に最終化された監督指針等の改正は2026年10月1日から適用。金融機関のコンピュータシステム障害・サイバーセキュリティ事案の報告様式を、関係省庁申合せに基づくDDoS・ランサムウェア・その他サイバー攻撃等の共通様式へ移行する。",
      effectiveDateSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      matchSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      sourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918", "source-cyber-report-form-notice-2026"],
      articleIds: ["article-fsa-cyber-common-reporting-guidelines-20260918"]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

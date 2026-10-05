// Bounded metadata repair reviewed against main 5cf5cbe on 2026-10-05.
// Apply after all existing article deltas. No legal prose, URLs, dates, event ownership,
// theme scope, or dataset IDs are changed. Old category labels remain searchable.
(() => {
  const unique = values => [...new Set(values)];
  const categoryChanges = [
  {
    "id": "article-miyake-fsa-financial-administration-policy-20260922",
    "before": [
      "危機管理・コンプライアンス",
      "金融規制",
      "AI・デジタル"
    ],
    "after": [
      "危機管理・コンプライアンス",
      "金融",
      "AI・デジタル"
    ],
    "aliases": [
      "金融規制"
    ]
  },
  {
    "id": "article-businesslawyers-miura-consumer-contract-2022-amendment-20230525",
    "before": [
      "消費者法・表示",
      "契約・取引"
    ],
    "after": [
      "消費者法・表示",
      "契約"
    ],
    "aliases": [
      "契約・取引"
    ]
  },
  {
    "id": "article-pwc-jsox-revision-points-20231206",
    "before": [
      "金融商品取引・開示・IR",
      "会社法・ガバナンス",
      "危機管理・コンプライアンス",
      "個人情報・AI・情報セキュリティ"
    ],
    "after": [
      "金融商品取引・開示・IR",
      "会社法・ガバナンス",
      "危機管理・コンプライアンス",
      "情報セキュリティ",
      "AI・デジタル"
    ],
    "aliases": [
      "個人情報・AI・情報セキュリティ"
    ]
  },
  {
    "id": "article-maku-tokusho-digital-dark-pattern-20260910",
    "before": [
      "消費者法・表示",
      "契約・取引",
      "電子契約"
    ],
    "after": [
      "消費者法・表示",
      "契約",
      "AI・デジタル"
    ],
    "aliases": [
      "契約・取引",
      "電子契約"
    ]
  },
  {
    "id": "article-morihamada-waste-outsourcing-resource-circulation-20260902",
    "before": [
      "契約・取引",
      "危機管理・コンプライアンス"
    ],
    "after": [
      "契約",
      "危機管理・コンプライアンス"
    ],
    "aliases": [
      "契約・取引"
    ]
  }
];
  const reverseTopicAdditions = {
  "source-privacy-law": [
    "personal-information-protection-2026-amendment",
    "privacy-enforcement-breach-response"
  ],
  "source-ai-guideline": [
    "ai-governance-liability"
  ],
  "source-privacy-law-2026-amendment": [
    "personal-information-protection-2026-amendment"
  ],
  "source-privacy-law-2026-rulemap": [
    "personal-information-protection-2026-amendment"
  ],
  "source-scs-evaluation-2026": [
    "supply-chain-security-scs-2026"
  ],
  "source-moj-ai-likeness-report-2026": [
    "ai-publicity-voice-rights-2026"
  ],
  "source-moj-company-law-interim-2026": [
    "employee-stock-compensation-wage-status"
  ],
  "source-meti-equity-incentive-plan-20230331": [
    "employee-stock-compensation-wage-status"
  ],
  "source-fsa-crossborder-collection-2026": [
    "crypto-e-money-service-intermediary"
  ],
  "source-whistleblower-guideline-2026": [
    "whistleblower-internal-reporting"
  ],
  "source-whistleblower-qa-2026": [
    "whistleblower-internal-reporting"
  ],
  "source-ssbj-ghg-amendment-2026": [
    "ssbj-statutory-sustainability-disclosure"
  ],
  "source-fsa-fiea-law-text-2026": [
    "crypto-assets-fiea-regulation-2026"
  ],
  "source-labour-standards-act": [
    "employee-stock-compensation-wage-status"
  ],
  "source-companies-act-current": [
    "startup-ma-guidance",
    "carveout-ma-business-sale"
  ],
  "source-fsa-fiea-law-2026": [
    "crypto-assets-fiea-regulation-2026",
    "startup-capital-markets-fiea-2026"
  ],
  "source-ppc-security-measures-guideline-review-2026": [
    "personal-information-protection-2026-amendment"
  ],
  "source-civil-code-current": [
    "ma-representation-warranty-insurance"
  ],
  "source-caa-consumer-contract-interim-draft-2026": [
    "consumer-law-digital-contract-review"
  ],
  "source-jsda-startup-growth-capital-report-2025": [
    "startup-capital-markets-fiea-2026"
  ],
  "source-fsa-growth-finance-ordinance-2026": [
    "digital-bond-solicitation-2026",
    "overseas-vf-foreign-fund-exemption-2026",
    "startup-capital-raising-fiea-2026"
  ],
  "source-fsa-public-fund-liquidity-guideline-2026": [
    "securities-monitoring-2026"
  ],
  "source-labor-contract-succession-act": [
    "carveout-ma-business-sale"
  ],
  "source-mhlw-business-transfer-guideline-20260120": [
    "carveout-ma-business-sale"
  ],
  "source-mhlw-meti-health-longevity-guideline-2025": [
    "consumer-nonclinical-testing-health-services"
  ],
  "source-mhlw-samd-applicability-2023": [
    "consumer-nonclinical-testing-health-services"
  ],
  "source-cao-economic-security-promotion-jbic-amendment-2026": [
    "economic-security-promotion-act-2026-oesa"
  ],
  "source-cao-economic-security-promotion-jbic-overview-2026": [
    "economic-security-promotion-act-2026-oesa"
  ],
  "source-mhlw-online-medical-care-implementation-2026": [
    "medical-care-act-online-medical-care-2026"
  ]
};
  const articles = window.ARTICLE_DATA || [];
  const sources = window.SOURCE_DATA || [];
  const topics = window.TOPIC_DATA || [];
  const byArticle = new Map(articles.map(a => [a.id, a]));
  const bySource = new Map(sources.map(s => [s.id, s]));
  const byTopic = new Map(topics.map(t => [t.slug, t]));
  // Preflight every planned edit before mutating any collection.
  for (const change of categoryChanges) {
    const article = byArticle.get(change.id);
    if (!article || ![JSON.stringify(change.before), JSON.stringify(change.after)].includes(JSON.stringify(article.categories))) throw new Error('Category repair baseline changed: '+change.id);
  }
  for (const [id, slugs] of Object.entries(reverseTopicAdditions)) {
    if (!bySource.has(id)) throw new Error('Reverse-source repair missing source: '+id);
    for (const slug of slugs) {
      const topic = byTopic.get(slug);
      const explicit = topic && ((topic.sourceIds || []).includes(id) || (topic.issues || []).some(issue => (issue.sourceIds || []).includes(id) || (issue.views || []).some(view => (view.sourceIds || []).includes(id))));
      if (!explicit) throw new Error('Reverse-source repair has no explicit citation: '+id+' / '+slug);
    }
  }
  window.ARTICLE_DATA = articles.map(article => {
    const change = categoryChanges.find(item => item.id === article.id);
    return change ? {...article, categories: [...change.after], categoryAliases: unique([...(article.categoryAliases || []), ...change.aliases])} : article;
  });
  window.SOURCE_DATA = sources.map(source => reverseTopicAdditions[source.id] ? {...source, topics: unique([...(source.topics || []), ...reverseTopicAdditions[source.id]])} : source);
})();

// Consolidate identical official instruments while preserving every former record.
// Identity verified against the official instruments; no new legal timing claim.
(() => {
  if (window.__LAW_INDEX_EVENT_IDENTITY_AUDIT_20261002__) return;
  const aliases = {
  "medical-research-ethics-guideline-2026-amendment": "human-research-ethics-guideline-2026-amendment",
  "copyright-act-record-performance-2026": "copyright-record-performance-communication-2026"
};
  const replacements = {
  "human-research-ethics-guideline-2026-amendment": {
    "id": "human-research-ethics-guideline-2026-amendment",
    "title": "生命科学・医学系研究倫理指針・2026年改正",
    "eventType": "regulation_or_guideline",
    "lawId": "human-subjects-medical-research-ethics-guideline",
    "lawLabel": "人を対象とする生命科学・医学系研究に関する倫理指針",
    "relatedTopics": [
      "human-subjects-medical-research-ethics-2026",
      "medical-research-ethics-privacy"
    ],
    "effectiveDateStatus": "confirmed",
    "effectiveDates": [
      "2026-12-01"
    ],
    "effectiveDateSourceIds": [
      "source-mext-human-research-ethics-guideline-2026",
      "source-mext-medical-research-ethics-amendment-20260828",
      "source-mhlw-medical-research-guideline-hub-2026"
    ],
    "matchSourceIds": [
      "source-mext-human-research-ethics-guideline-2026",
      "source-mext-medical-research-ethics-public-comment-20251226",
      "source-mext-medical-research-ethics-amendment-20260828",
      "source-mhlw-medical-research-guideline-hub-2026"
    ],
    "sourceIds": [
      "source-mext-human-research-ethics-guideline-2026",
      "source-mext-medical-research-ethics-public-comment-20251226",
      "source-mext-medical-research-ethics-amendment-20260828",
      "source-mhlw-medical-research-guideline-hub-2026",
      "source-mhlw-ai-pseudonymized-medical-data-20220331"
    ],
    "articleIds": [
      "article-tmi-generative-ai-medical-data-20260205"
    ]
  },
  "copyright-record-performance-communication-2026": {
    "id": "copyright-record-performance-communication-2026",
    "title": "著作権法・レコード演奏／伝達権創設（2026年改正）",
    "eventType": "law_amendment",
    "lawId": "copyright-act",
    "lawLabel": "著作権法",
    "relatedTopics": [
      "recorded-music-public-use-right-2026",
      "copyright-record-performance-right-2026"
    ],
    "effectiveDateStatus": "relative",
    "effectiveDateNote": "2026年6月24日公布／公布日から3年を超えない範囲内で政令で定める日",
    "effectiveDateSourceIds": [
      "source-bunka-copyright-bgm-right-2026",
      "source-mext-copyright-record-performance-law-2026"
    ],
    "matchSourceIds": [
      "source-bunka-copyright-bgm-right-2026",
      "source-mext-copyright-record-performance-law-2026",
      "source-mext-copyright-record-performance-enactment-20260617"
    ],
    "sourceIds": [
      "source-bunka-copyright-bgm-right-2026",
      "source-bunka-record-performance-report-2026",
      "source-mext-copyright-record-performance-law-2026",
      "source-mext-copyright-record-performance-enactment-20260617"
    ],
    "articleIds": [
      "article-mext-copyright-record-performance-law-2026",
      "article-amt-copyright-record-performance-2026",
      "article-not-copyright-record-performance-2026"
    ]
  }
};
  const metadata = {
  "medical-research-ethics-guideline-2026-amendment": {
    "canonicalId": "human-research-ethics-guideline-2026-amendment",
    "formerRecord": {
      "id": "medical-research-ethics-guideline-2026-amendment",
      "title": "生命科学・医学系研究倫理指針・2026年改正",
      "eventType": "regulation_or_guideline",
      "lawId": "medical-research-ethics-guideline",
      "lawLabel": "人を対象とする生命科学・医学系研究に関する倫理指針",
      "relatedTopics": [
        "medical-research-ethics-privacy"
      ],
      "effectiveDateStatus": "confirmed",
      "effectiveDate": "2026-12-01",
      "effectiveDateSourceIds": [
        "source-mext-medical-research-ethics-amendment-20260828",
        "source-mhlw-medical-research-guideline-hub-2026"
      ],
      "matchSourceIds": [
        "source-mext-medical-research-ethics-public-comment-20251226",
        "source-mext-medical-research-ethics-amendment-20260828",
        "source-mhlw-medical-research-guideline-hub-2026"
      ],
      "sourceIds": [
        "source-mext-medical-research-ethics-public-comment-20251226",
        "source-mext-medical-research-ethics-amendment-20260828",
        "source-mhlw-medical-research-guideline-hub-2026",
        "source-mhlw-ai-pseudonymized-medical-data-20220331"
      ],
      "articleIds": [
        "article-tmi-generative-ai-medical-data-20260205"
      ]
    }
  },
  "copyright-act-record-performance-2026": {
    "canonicalId": "copyright-record-performance-communication-2026",
    "formerRecord": {
      "id": "copyright-act-record-performance-2026",
      "title": "著作権法・2026年改正（レコード演奏・伝達権）",
      "eventType": "law_amendment",
      "lawId": "copyright-act",
      "lawLabel": "著作権法",
      "relatedTopics": [
        "copyright-record-performance-right-2026"
      ],
      "effectiveDateStatus": "relative",
      "effectiveDateNote": "公布日（2026年6月24日）から3年を超えない範囲内において政令で定める日から施行。",
      "effectiveDateSourceIds": [
        "source-mext-copyright-record-performance-law-2026"
      ],
      "matchSourceIds": [
        "source-mext-copyright-record-performance-law-2026",
        "source-mext-copyright-record-performance-enactment-20260617"
      ],
      "sourceIds": [
        "source-mext-copyright-record-performance-law-2026",
        "source-mext-copyright-record-performance-enactment-20260617"
      ],
      "articleIds": [
        "article-mext-copyright-record-performance-law-2026",
        "article-amt-copyright-record-performance-2026",
        "article-not-copyright-record-performance-2026"
      ]
    }
  }
};
  const events = window.REFORM_EVENT_DATA || [];
  for (const [oldId, canonicalId] of Object.entries(aliases)) {
    if (!events.some((event) => event.id === oldId) || !events.some((event) => event.id === canonicalId)) {
      throw new Error(`Event-identity proposal needs review against changed data: ${oldId}`);
    }
  }
  window.__LAW_INDEX_EVENT_IDENTITY_AUDIT_20261002__ = true;
  window.REFORM_EVENT_DATA = events
    .filter((event) => !Object.hasOwn(aliases, event.id))
    .map((event) => replacements[event.id] || event);
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => aliases[article.reformEventId]
    ? { ...article, reformEventId: aliases[article.reformEventId] } : article);
  window.REFORM_EVENT_ALIASES = Object.freeze({
    ...Object.fromEntries(Object.entries(window.REFORM_EVENT_ALIASES || {})
      .map(([oldId, canonicalId]) => [oldId, aliases[canonicalId] || canonicalId])),
    ...aliases
  });
  // Full former records preserve the original scalar date, legal-system ID,
  // exact timing note, all evidence links and article relationships.
  window.REFORM_EVENT_ALIAS_METADATA = Object.freeze({
    ...(window.REFORM_EVENT_ALIAS_METADATA || {}), ...metadata
  });
  // The directory renderer must resolve this before matching a ?law= query.
  window.REFORM_LAW_ALIASES = Object.freeze({
    ...(window.REFORM_LAW_ALIASES || {}),
    "medical-research-ethics-guideline": "human-subjects-medical-research-ethics-guideline"
  });
})();

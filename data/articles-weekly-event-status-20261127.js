(() => {
  // Load after legacy article deltas finish consolidating these three reform events.
  // The batch only amends event records; existing article records and URLs are untouched.
  const updates = [
  {
    "before": {
      "id": "registry-address-nondisclosure-expansion-2026",
      "title": "代表者等住所非表示措置・2026年対象拡大案",
      "eventType": "regulation_or_guideline",
      "lawId": "commercial-registry-address-nondisclosure",
      "lawLabel": "代表者等住所非表示措置（商業登記規則等）",
      "relatedTopics": [
        "commercial-registry-address-nondisclosure"
      ],
      "effectiveDateStatus": "planned",
      "effectiveDates": [
        "2026-12"
      ],
      "effectiveDateSourceIds": [
        "source-egov-registry-address-expansion-2026"
      ],
      "matchSourceIds": [
        "source-egov-registry-address-expansion-2026"
      ],
      "sourceIds": [
        "source-egov-registry-address-expansion-2026"
      ],
      "articleIds": []
    },
    "after": {
      "id": "registry-address-nondisclosure-expansion-2026",
      "title": "代表者等住所非表示措置・2026年対象拡大（法務省令第51号）",
      "eventType": "regulation_or_guideline",
      "lawId": "commercial-registry-address-nondisclosure",
      "lawLabel": "代表者等住所非表示措置（商業登記規則等）",
      "relatedTopics": [
        "commercial-registry-address-nondisclosure"
      ],
      "effectiveDateStatus": "confirmed",
      "effectiveDateSourceIds": [
        "source-moj-registry-address-ordinance-51-20261030",
        "source-moj-registry-address-circular-222-20261111"
      ],
      "matchSourceIds": [
        "source-egov-registry-address-expansion-2026"
      ],
      "sourceIds": [
        "source-egov-registry-address-expansion-2026",
        "source-moj-registry-address-ordinance-51-20261030",
        "source-moj-registry-address-circular-222-20261111"
      ],
      "articleIds": [],
      "effectiveDate": "2026-12-01",
      "effectiveDateNote": "令和8年法務省令第51号は2026年10月30日公布、12月1日施行。",
      "formalSourceIds": [
        "source-moj-registry-address-ordinance-51-20261030",
        "source-moj-registry-address-circular-222-20261111"
      ]
    }
  },
  {
    "before": {
      "id": "thp-guideline-secondary-prevention-2026",
      "title": "事業場における労働者の健康保持増進のための指針・二次予防拡充案（2026年）",
      "eventType": "regulation_or_guideline",
      "lawId": "workplace-health-promotion-thp-guideline",
      "lawLabel": "事業場における労働者の健康保持増進のための指針（THP指針）",
      "relatedTopics": [
        "treatment-work-support",
        "occupational-safety-health-reform"
      ],
      "effectiveDateStatus": "planned",
      "effectiveDate": "2026-10",
      "effectiveDateNote": "9月28日会議資料2-1の3頁は2026年10月の公示予定と公布日適用を示す。月までの予定であり、日付の確定を意味しない。10月5日に確認した厚労省のTHP政策ページ・公示一覧等では最終公示を確認できていない。",
      "effectiveDateSourceIds": [
        "source-mhlw-thp-revision-overview-20260928"
      ],
      "sourceIds": [
        "source-mhlw-thp-revision-overview-20260928",
        "source-mhlw-thp-revision-draft-20260928"
      ],
      "matchSourceIds": [
        "source-mhlw-thp-revision-overview-20260928",
        "source-mhlw-thp-revision-draft-20260928"
      ],
      "articleIds": []
    },
    "after": {
      "id": "thp-guideline-secondary-prevention-2026",
      "title": "事業場における労働者の健康保持増進のための指針・二次予防拡充（2026年改正）",
      "eventType": "regulation_or_guideline",
      "lawId": "workplace-health-promotion-thp-guideline",
      "lawLabel": "事業場における労働者の健康保持増進のための指針（THP指針）",
      "relatedTopics": [
        "treatment-work-support",
        "occupational-safety-health-reform"
      ],
      "effectiveDateStatus": "confirmed",
      "effectiveDate": "2026-10-19",
      "effectiveDateNote": "指針公示第13号の適用日は2026年10月19日。11月2日の本文訂正で適用日は変わらない。",
      "effectiveDateSourceIds": [
        "source-mhlw-thp-public-notice-13-20261019"
      ],
      "sourceIds": [
        "source-mhlw-thp-revision-overview-20260928",
        "source-mhlw-thp-revision-draft-20260928",
        "source-mhlw-thp-public-notice-13-20261019",
        "source-mhlw-thp-guideline-final-20261019"
      ],
      "matchSourceIds": [
        "source-mhlw-thp-revision-overview-20260928",
        "source-mhlw-thp-revision-draft-20260928"
      ],
      "articleIds": [],
      "formalSourceIds": [
        "source-mhlw-thp-public-notice-13-20261019",
        "source-mhlw-thp-guideline-final-20261019"
      ],
      "effectiveDateKind": "application"
    }
  },
  {
    "before": {
      "id": "important-varieties-act-2026-enactment",
      "title": "重要品種の育成及びその種苗の生産の振興に関する法律・2026年制定",
      "eventType": "new_law",
      "lawId": "important-varieties-breeding-production-act",
      "lawLabel": "重要品種の育成及びその種苗の生産の振興に関する法律",
      "relatedTopics": [
        "plant-variety-ip-important-varieties-2026"
      ],
      "effectiveDateStatus": "relative",
      "effectiveDateNote": "公布の日（2026年7月24日）から起算して6月を超えない範囲内で政令で定める日から施行。具体的な施行日は施行期日を定める一次資料で確認する。",
      "effectiveDateSourceIds": [
        "source-egov-important-varieties-act-2026",
        "source-shugiin-important-varieties-bill-2026",
        "source-maff-important-variety-law-2026"
      ],
      "matchSourceIds": [],
      "sourceIds": [
        "source-egov-important-varieties-act-2026",
        "source-shugiin-important-varieties-bill-2026",
        "source-egov-important-varieties-rule-draft-2026",
        "source-egov-important-varieties-basic-policy-draft-2026",
        "source-maff-important-variety-law-2026",
        "source-shugiin-important-varieties-act-2026-overview",
        "source-maff-important-variety-policy-draft-2026"
      ],
      "articleIds": [
        "article-maff-important-variety-policy-20260907"
      ],
      "effectiveDates": []
    },
    "after": {
      "id": "important-varieties-act-2026-enactment",
      "title": "重要品種の育成及びその種苗の生産の振興に関する法律・2026年制定",
      "eventType": "new_law",
      "lawId": "important-varieties-breeding-production-act",
      "lawLabel": "重要品種の育成及びその種苗の生産の振興に関する法律",
      "relatedTopics": [
        "plant-variety-ip-important-varieties-2026"
      ],
      "effectiveDateStatus": "confirmed",
      "effectiveDateNote": "令和8年政令第359号により2026年12月1日施行。2026年11月27日公布。",
      "effectiveDateSourceIds": [
        "source-kanpo-important-varieties-decrees-359-360-20261127"
      ],
      "matchSourceIds": [],
      "sourceIds": [
        "source-egov-important-varieties-act-2026",
        "source-shugiin-important-varieties-bill-2026",
        "source-egov-important-varieties-rule-draft-2026",
        "source-egov-important-varieties-basic-policy-draft-2026",
        "source-maff-important-variety-law-2026",
        "source-shugiin-important-varieties-act-2026-overview",
        "source-maff-important-variety-policy-draft-2026",
        "source-kanpo-important-varieties-decrees-359-360-20261127"
      ],
      "articleIds": [
        "article-maff-important-variety-policy-20260907"
      ],
      "effectiveDate": "2026-12-01",
      "formalSourceIds": [
        "source-kanpo-important-varieties-decrees-359-360-20261127"
      ]
    }
  }
];
  const stable = (value) => JSON.stringify(value, (_key, item) => item && typeof item === "object" && !Array.isArray(item)
    ? Object.fromEntries(Object.keys(item).sort().map(key => [key, item[key]])) : item);
  const events = window.REFORM_EVENT_DATA;
  const replacement = new Map();
  for (const {before, after} of updates) {
    const found = events.filter(event => event.id === before.id);
    if (found.length !== 1 || ![stable(before), stable(after)].includes(stable(found[0]))) {
      throw new Error("Unexpected weekly reform event baseline: " + before.id);
    }
    replacement.set(after.id, after);
  }
  window.REFORM_EVENT_DATA = events.map(event => replacement.get(event.id) || event);
})();

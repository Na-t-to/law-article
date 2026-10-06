// Verified daily-source additions; existing theme freshness dates remain unchanged.
(() => {
  const additions = [
  {
    "id": "architects-act-2026-contract-reform",
    "title": "建築士法・2026年改正（契約適正化部分）",
    "eventType": "law_amendment",
    "lawId": "architects-act",
    "lawLabel": "建築士法",
    "relatedTopics": [
      "architects-contracts-2026"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2027-04-01",
    "effectiveDateNote": "契約適正化部分（改正法附則1条2号）。2026年10月6日に施行期日政令等が閣議決定され、10月9日公布予定。公布前のため2027年4月1日を施行予定として表示する。資格要件等の改正はこの日付に含めない。",
    "effectiveDateSourceIds": [
      "source-mlit-architects-contract-decrees-20261006",
      "source-mlit-architects-contract-commencement-draft-20261006"
    ],
    "matchSourceIds": [
      "source-mlit-architects-contract-decrees-20261006",
      "source-mlit-architects-contract-commencement-draft-20261006"
    ],
    "sourceIds": [
      "source-mlit-architects-contract-decrees-20261006",
      "source-mlit-architects-contract-commencement-draft-20261006",
      "source-mlit-architects-act-amendment-text-20260731",
      "source-mlit-architects-act-amendment-redline-20260731",
      "source-mlit-architects-act-contract-outline-20261006",
      "source-mlit-architects-act-enactment-portal-2026"
    ],
    "articleIds": [
      "article-mlit-architects-contract-decrees-20261006"
    ]
  },
  {
    "id": "whistleblower-covered-laws-dbs-2026-proposal",
    "title": "公益通報対象法律政令・こども性暴力防止法追加案",
    "eventType": "regulation_or_guideline",
    "lawId": "whistleblower-covered-laws-order",
    "lawLabel": "公益通報者保護法別表第八号の法律を定める政令",
    "relatedTopics": [
      "whistleblower-internal-reporting",
      "child-sexual-violence-prevention-dbs"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2026-12-25",
    "effectiveDateNote": "案の施行期日はこども性暴力防止法の施行の日（2026年12月25日）。政令改正の最終確定前。",
    "effectiveDateSourceIds": [
      "source-caa-whistleblower-dbs-coverage-outline-20261001"
    ],
    "sourceIds": [
      "source-caa-whistleblower-dbs-coverage-proposal-20261001",
      "source-caa-whistleblower-dbs-coverage-outline-20261001"
    ],
    "matchSourceIds": [
      "source-caa-whistleblower-dbs-coverage-proposal-20261001",
      "source-caa-whistleblower-dbs-coverage-outline-20261001"
    ],
    "articleIds": [
      "article-caa-whistleblower-dbs-coverage-proposal-20261001"
    ]
  },
  {
    "id": "whistleblower-covered-laws-civil-court-2026-proposal",
    "title": "公益通報対象法律政令・民事裁判情報活用促進法追加案",
    "eventType": "regulation_or_guideline",
    "lawId": "whistleblower-covered-laws-order",
    "lawLabel": "公益通報者保護法別表第八号の法律を定める政令",
    "relatedTopics": [
      "whistleblower-internal-reporting",
      "civil-court-information-database"
    ],
    "effectiveDateStatus": "relative",
    "effectiveDateNote": "案では民事裁判情報の活用の促進に関する法律の施行の日。具体的暦日はこの案の概要に明示されておらず、政令改正も最終確定前。",
    "effectiveDateSourceIds": [
      "source-caa-whistleblower-civil-court-coverage-outline-20261001"
    ],
    "sourceIds": [
      "source-caa-whistleblower-civil-court-coverage-proposal-20261001",
      "source-caa-whistleblower-civil-court-coverage-outline-20261001"
    ],
    "matchSourceIds": [
      "source-caa-whistleblower-civil-court-coverage-proposal-20261001",
      "source-caa-whistleblower-civil-court-coverage-outline-20261001"
    ],
    "articleIds": [
      "article-caa-whistleblower-civil-court-coverage-proposal-20261001"
    ]
  },
  {
    "id": "fsa-critical-infrastructure-orders-2026-proposal",
    "title": "金融分野の基幹インフラ届出府令等・2026年改正案",
    "eventType": "regulation_or_guideline",
    "lawId": "economic-security-promotion-fsa-critical-infrastructure-orders",
    "lawLabel": "経済安全保障推進法・金融分野の特定社会基盤事業者指定等府令",
    "relatedTopics": [
      "economic-security-promotion-act-2026-oesa",
      "economic-security-tech-control"
    ],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2027-01-12",
    "effectiveDateNote": "2026年10月1日公表の府令等案の附則に2027年1月12日施行とある。意見募集・公布前の案であり未確定。",
    "effectiveDateSourceIds": [
      "source-fsa-critical-infrastructure-order-draft-20261001"
    ],
    "sourceIds": [
      "source-fsa-critical-infrastructure-orders-proposal-20261001",
      "source-fsa-critical-infrastructure-order-draft-20261001"
    ],
    "matchSourceIds": [
      "source-fsa-critical-infrastructure-orders-proposal-20261001",
      "source-fsa-critical-infrastructure-order-draft-20261001"
    ],
    "articleIds": [
      "article-fsa-critical-infrastructure-orders-proposal-20261001"
    ]
  }
];
  const current = window.REFORM_EVENT_DATA || [];
  const ids = new Set(current.map(item => item.id));
  for (const item of additions) {
    if (ids.has(item.id)) throw new Error(`Duplicate reforms ID: ${item.id}`);
    ids.add(item.id);
  }
  window.REFORM_EVENT_DATA = [...current, ...additions];
})();

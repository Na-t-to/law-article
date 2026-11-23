(() => {
 const before={
  "id": "privacy-security-measures-guideline-review-2026-2027",
  "title": "個人情報保護法ガイドライン（通則編）・安全管理措置例示 2026～2027年見直し",
  "eventType": "regulation_or_guideline",
  "lawId": "personal-information-protection-guideline-security-measures",
  "lawLabel": "個人情報保護法ガイドライン（通則編）・安全管理措置",
  "relatedTopics": [
    "privacy-enforcement-breach-response"
  ],
  "effectiveDateStatus": "planned",
  "effectiveDates": [
    "2027-04"
  ],
  "effectiveDateSourceIds": [
    "source-ppc-security-measures-guideline-review-2026"
  ],
  "effectiveDateNote": "2026年9月時点の予定では2027年4月に改正事項を施行",
  "articleIds": [
    "article-ppc-security-measures-guideline-review-2026"
  ],
  "matchSourceIds": [
    "source-ppc-security-measures-guideline-review-2026"
  ],
  "sourceIds": [
    "source-ppc-security-measures-guideline-review-2026"
  ]
};
 const after={
  "id": "privacy-security-measures-guideline-review-2026-2027",
  "title": "個人情報保護法ガイドライン（通則編）・安全管理措置例示 2026～2027年見直し",
  "eventType": "regulation_or_guideline",
  "lawId": "personal-information-protection-guideline-security-measures",
  "lawLabel": "個人情報保護法ガイドライン（通則編）・安全管理措置",
  "relatedTopics": [
    "privacy-enforcement-breach-response"
  ],
  "effectiveDateStatus": "unknown",
  "effectiveDateSourceIds": [
    "source-ppc-security-guideline-draft-240000133-general",
    "source-ppc-security-guideline-draft-240000133-overview"
  ],
  "effectiveDateNote": "2026年9月時点の2027年4月予定から可能な限り前倒しする方針。10月29日公示の告示案では具体的な月日は未記載。",
  "articleIds": [
    "article-ppc-security-measures-guideline-review-2026"
  ],
  "matchSourceIds": [
    "source-ppc-security-measures-guideline-review-2026"
  ],
  "sourceIds": [
    "source-ppc-security-measures-guideline-review-2026",
    "source-ppc-security-guideline-draft-240000133-docket",
    "source-ppc-security-guideline-draft-240000133-general",
    "source-ppc-security-guideline-draft-240000133-overview"
  ]
};
 const list=window.REFORM_EVENT_DATA || [];
 const matches=list.filter(r=>r.id===before.id);
 if(matches.length!==1)throw Error('Expected one PPC review event');
 // Later historical articles-run233 clears matchSourceIds; preserve both replay shapes.
 if(JSON.stringify(matches[0])===JSON.stringify(after)||JSON.stringify(matches[0])===JSON.stringify({...after,matchSourceIds:[]}))return;
 if(JSON.stringify(matches[0])!==JSON.stringify(before))throw Error('Unexpected PPC event baseline');
 window.REFORM_EVENT_DATA=list.map(r=>r.id===before.id?after:r);
})();

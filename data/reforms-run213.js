(() => {
  const additions = [
    {
      id: "child-sexual-violence-prevention-act-2024",
      title: "こども性暴力防止法（日本版DBS）施行",
      eventType: "new_law",
      lawId: "child-sexual-violence-prevention-act",
      lawLabel: "こども性暴力防止法",
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-12-25",
      effectiveDateNote: "学校設置者等及び民間教育保育等事業者による児童対象性暴力等の防止等のための措置に関する法律（令和6年法律第69号）は2024年6月26日に公布され、施行期日政令により2026年12月25日に施行される。",
      effectiveDateSourceIds: ["source-cfa-child-sexual-violence-prevention-portal-20260918"],
      matchSourceIds: ["source-cfa-child-sexual-violence-prevention-portal-20260918", "source-cfa-child-sexual-violence-qa-revision-20260918"],
      sourceIds: ["source-cfa-child-sexual-violence-prevention-portal-20260918", "source-cfa-child-sexual-violence-qa-revision-20260918"],
      articleIds: [
        "article-cfa-child-sexual-violence-prevention-portal-20260918",
        "article-cfa-child-sexual-violence-qa-revision-20260918",
        "article-tmi-child-dbs-employment-measures-20251031"
      ]
    },
    {
      id: "whistleblower-protection-act-2025-amendment",
      title: "公益通報者保護法 2025年改正",
      eventType: "law_amendment",
      lawId: "whistleblower-protection-act",
      lawLabel: "公益通報者保護法",
      relatedTopics: ["whistleblower-protection-2025-amendment"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-12-01",
      effectiveDateNote: "公益通報者保護法の一部を改正する法律（令和7年法律第62号）は2025年6月11日に公布され、2026年12月1日に施行される。改正法に対応する法定指針・指針解説も同日から施行される。",
      effectiveDateSourceIds: ["source-caa-whistleblower-overview-202609"],
      matchSourceIds: ["source-caa-whistleblower-amendment-20250611", "source-caa-whistleblower-guideline-commentary-20260331"],
      sourceIds: [
        "source-caa-whistleblower-amendment-20250611",
        "source-caa-whistleblower-overview-202609",
        "source-caa-whistleblower-guideline-commentary-20260331"
      ],
      articleIds: [
        "article-caa-whistleblower-amendment-20250611",
        "article-caa-whistleblower-guideline-commentary-20260331",
        "article-miyake-whistleblower-practical-20260428"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

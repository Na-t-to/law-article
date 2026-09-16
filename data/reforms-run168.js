(() => {
  const additions = [
    {
      id: "early-business-rehabilitation-act-2025",
      title: "早期事業再生法・2025年制定（2026年施行）",
      eventType: "new_law",
      lawId: "early-business-rehabilitation-act",
      lawLabel: "早期事業再生法",
      relatedTopics: ["early-business-rehabilitation-2025"],
      effectiveDateStatus: "confirmed",
      effectiveDate: "2026-12-11",
      effectiveDateSourceIds: ["source-meti-early-business-rehabilitation-rules-qa-2026"],
      matchSourceIds: ["source-meti-early-business-rehabilitation-rules-qa-2026"],
      sourceIds: ["source-egov-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026", "source-meti-early-business-rehabilitation-qa-2026"]
    },
    {
      id: "money-lending-growth-company-cross-border-review-2026",
      title: "貸金業法・成長企業向けクロスボーダー融資規制見直し",
      eventType: "policy_review",
      lawId: "money-lending-business-act",
      lawLabel: "貸金業法",
      relatedTopics: ["enterprise-value-security-business-lending"],
      effectiveDateStatus: "unknown",
      matchSourceIds: ["source-fsa-growth-company-funding-consultation-2026", "source-fsa-growth-company-cross-border-lending-2026"],
      sourceIds: ["source-fsa-growth-company-funding-consultation-2026", "source-fsa-growth-company-cross-border-lending-2026"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

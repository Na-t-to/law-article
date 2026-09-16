(() => {
  const additions = [
    {
      id: "privacy-security-measures-guideline-review-2026-2027",
      title: "個人情報保護法ガイドライン（通則編）・安全管理措置例示 2026～2027年見直し",
      eventType: "regulation_or_guideline",
      lawId: "personal-information-protection-guideline-security-measures",
      lawLabel: "個人情報保護法ガイドライン（通則編）・安全管理措置",
      relatedTopics: ["privacy-enforcement-breach-response"],
      effectiveDateStatus: "planned",
      effectiveDates: ["2027-04"],
      effectiveDateSourceIds: ["source-ppc-security-measures-guideline-review-2026"],
      effectiveDateNote: "2026年9月時点の予定では2027年4月に改正事項を施行",
      articleIds: ["article-ppc-security-measures-guideline-review-2026"],
      matchSourceIds: ["source-ppc-security-measures-guideline-review-2026"],
      sourceIds: ["source-ppc-security-measures-guideline-review-2026"]
    },
    {
      id: "labor-policy-customer-harassment-2025-amendment",
      title: "労働施策総合推進法・カスタマーハラスメント防止措置義務化",
      eventType: "law_amendment",
      lawId: "labor-policy-comprehensive-promotion-act",
      lawLabel: "労働施策総合推進法",
      relatedTopics: ["customer-harassment-jobseeker-sexual-harassment-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-mhlw-customer-harassment-2026"],
      articleIds: ["article-mhlw-customer-harassment-2026", "article-tmi-customer-harassment-practical-2026"],
      matchSourceIds: ["source-mhlw-customer-harassment-2026"],
      sourceIds: ["source-mhlw-customer-harassment-2026"]
    },
    {
      id: "equal-employment-jobseeker-sexual-harassment-2025-amendment",
      title: "男女雇用機会均等法・求職者等セクシュアルハラスメント防止措置義務化",
      eventType: "law_amendment",
      lawId: "equal-employment-opportunity-act",
      lawLabel: "男女雇用機会均等法",
      relatedTopics: ["customer-harassment-jobseeker-sexual-harassment-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"],
      articleIds: ["article-mhlw-jobseeker-sexual-harassment-2026"],
      matchSourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"],
      sourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"]
    }
  ];
  const existingIds = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existingIds.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

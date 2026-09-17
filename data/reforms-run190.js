(() => {
  const id = "patent-act-network-inventions-infringement-review-2026";
  if ((window.REFORM_EVENT_DATA || []).some((item) => item?.id === id)) return;
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat({
    id,
    title: "特許法・ネットワーク関連発明／侵害抑止 2025～2026年見直し",
    eventType: "policy_review",
    lawId: "patent-act",
    lawLabel: "特許法",
    relatedTopics: ["patent-network-inventions-infringement-review-2026"],
    matchSourceIds: [
      "source-jpo-patent-system-committee-56-2026",
      "source-jpo-patent-system-committee-57-2026"
    ],
    sourceIds: [
      "source-supreme-court-network-patent-2025",
      "source-jpo-patent-system-committee-56-2026",
      "source-jpo-patent-system-committee-57-2026"
    ],
    articleIds: [
      "article-jpo-patent-system-committee-56-2026",
      "article-tmi-patent-system-committee-56-2026",
      "article-tmi-patent-system-committee-57-2026"
    ]
  });
})();

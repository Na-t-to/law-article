(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "fair-subcontract-transactions");
  if (!topic) return;
  topic.lastVerified = "2026-09-28";
})();
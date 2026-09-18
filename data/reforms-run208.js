(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "distribution-guideline-rpm-2026-amendment");
  if (!event) return;

  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];
  event.sourceIds = appendUnique(event.sourceIds, [
    "source-jftc-distribution-guideline-current-20260708",
    "source-jftc-rpm-faq-20260708"
  ]);
  event.articleIds = appendUnique(event.articleIds, ["article-uchisaiwai-rpm-guideline-20260727"]);
})();

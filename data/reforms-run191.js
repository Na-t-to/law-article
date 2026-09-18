(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "privacy-law-2026-amendment");
  if (!event) return;
  const pushUnique = (list, value) => {
    if (!Array.isArray(list)) return;
    if (!list.includes(value)) list.push(value);
  };
  event.matchSourceIds = event.matchSourceIds || [];
  event.sourceIds = event.sourceIds || [];
  event.articleIds = event.articleIds || [];
  pushUnique(event.matchSourceIds, "source-ppc-privacy-rules-basic-thinking-20260916");
  pushUnique(event.sourceIds, "source-ppc-privacy-rules-basic-thinking-20260916");
  pushUnique(event.articleIds, "article-ppc-privacy-rules-basic-thinking-20260916");
  pushUnique(event.articleIds, "article-miyake-privacy-rules-20260917");
})();
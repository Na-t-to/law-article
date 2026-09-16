(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "privacy-law-2026-amendment");
  if (!event) return;

  const sourceId = "source-ppc-privacy-rulemaking-basic-1-2026";
  const articleId = "article-ppc-privacy-rulemaking-basic-1-2026";
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
  event.sourceIds = addUnique(event.sourceIds, sourceId);
  event.articleIds = addUnique(event.articleIds, articleId);
})();

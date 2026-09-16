(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "consumer-contract-law-review-2026");
  if (!event) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const sourceId = "source-caa-consumer-contract-interim-final-2026";
  event.sourceIds = addUnique(event.sourceIds, sourceId);
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
})();

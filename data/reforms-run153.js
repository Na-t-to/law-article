(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "privacy-law-2026-amendment");
  if (!event) return;
  const sourceId = "source-privacy-law-2026-roadmap-20260909";
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (!list.includes(value)) list.push(value);
    return list;
  };
  event.sourceIds = addUnique(event.sourceIds, sourceId);
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
})();

(() => {
  const sourceId = "source-nco-critical-infrastructure-safety-guideline-2026";
  const event = (window.REFORM_EVENT_DATA || []).find(
    (item) => item && item.id === "critical-infrastructure-unified-standard-2026"
  );
  if (!event) return;
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
  event.sourceIds = addUnique(event.sourceIds, sourceId);
})();

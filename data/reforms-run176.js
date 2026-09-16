(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "employee-social-insurance-expansion-2025-amendment");
  if (!event) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const sourceId = "source-jps-social-insurance-premium-adjustment-2026";
  event.sourceIds = addUnique(event.sourceIds, sourceId);
  event.matchSourceIds = addUnique(event.matchSourceIds, sourceId);
})();

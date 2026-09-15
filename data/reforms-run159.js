(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const consumerEvent = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "consumer-contract-law-review-2026");
  if (consumerEvent) {
    consumerEvent.matchSourceIds = addUnique(consumerEvent.matchSourceIds, "source-caa-consumer-contract-interim-final-2026");
    consumerEvent.sourceIds = addUnique(consumerEvent.sourceIds, "source-caa-consumer-contract-interim-final-2026");
  }
})();
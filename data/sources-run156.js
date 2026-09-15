(() => {
  const canonicalTopic = "insider-trading-information-management";
  const legacyTopic = "insider-trading-information-control";
  const migratedIds = new Set([
    "source-fsa-sesc-insider-qa-2024",
    "source-sesc-irom-insider-2026-09-11"
  ]);

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => {
    if (!source || !migratedIds.has(source.id)) return source;
    const topics = (source.topics || []).map((slug) => slug === legacyTopic ? canonicalTopic : slug);
    return { ...source, topics: [...new Set(topics.concat([canonicalTopic]))] };
  });
})();

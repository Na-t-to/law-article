(() => {
  const topicAliases = new Map([
    ["insider-trading-information-control", "insider-trading-information-management"],
    ["securities-monitoring-internal-controls", "securities-monitoring-2026"]
  ]);

  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) => {
    if (!source || !Array.isArray(source.topics)) return source;
    const topics = source.topics.map((slug) => topicAliases.get(slug) || slug);
    return topics.some((slug, index) => slug !== source.topics[index])
      ? { ...source, topics: [...new Set(topics)] }
      : source;
  });
})();

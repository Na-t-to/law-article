(() => {
  const removeIds = new Set([
    "critical-infrastructure-safety-guideline-2026",
    "fsa-cyber-reporting-supervisory-guidelines-2026"
  ]);
  const events = (Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : []).filter((event) => !removeIds.has(event && event.id));

  const critical = events.find((event) => event && event.id === "critical-infrastructure-unified-standard-2026");
  if (critical) {
    critical.relatedTopics = ["cyber-countermeasures-critical-infrastructure"];
    critical.effectiveDateSourceIds = [
      "source-nco-critical-infrastructure-unified-standard-2026",
      "source-nco-critical-infrastructure-safety-guideline-2026"
    ];
    critical.matchSourceIds = [
      "source-nco-critical-infrastructure-unified-standard-2026",
      "source-nco-critical-infrastructure-safety-guideline-2026"
    ];
    critical.sourceIds = [
      "source-nco-critical-infrastructure-unified-standard-2026",
      "source-nco-critical-infrastructure-safety-guideline-2026"
    ];
    critical.articleIds = [
      "article-nco-critical-infrastructure-unified-standard-2026",
      "article-amt-critical-infrastructure-unified-standard-2026",
      "article-nco-critical-infrastructure-safety-guideline-2026",
      "article-miyake-critical-infrastructure-safety-guideline-2026"
    ];
  }

  const fsa = events.find((event) => event && event.id === "fsa-supervisory-guidelines-cyber-reporting-2026");
  if (fsa) {
    fsa.relatedTopics = ["cyber-countermeasures-critical-infrastructure"];
    fsa.articleIds = ["article-fsa-cyber-common-reporting-guidelines-20260918"];
  }

  window.REFORM_EVENT_DATA = events;
})();

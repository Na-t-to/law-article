(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "fefta-inward-investment-2026-amendment");
  if (!event) return;

  const sources = ["source-mof-fefta-final-rules-2026", "source-mof-fefta-final-summary-2026"];
  event.eventType = "law_amendment";
  event.effectiveDateStatus = "phased";
  event.effectiveDates = appendUnique(event.effectiveDates, ["2026-06-05", "2027-01-04", "2027-02-03"]);
  event.effectiveDateNote = "省庁横断的な意見照会に関する一部規定は2026年6月5日施行。主要規定は2027年1月4日施行で、経過措置を踏まえ2027年2月3日に全面適用。";
  event.effectiveDateSourceIds = appendUnique(event.effectiveDateSourceIds, sources);
  event.matchSourceIds = appendUnique(event.matchSourceIds, sources);
  event.sourceIds = appendUnique(event.sourceIds, sources);
  event.articleIds = appendUnique(event.articleIds, [
    "article-mof-fefta-amendment-2026",
    "article-tmi-fefta-amendment-lower-2026",
    "article-mof-fefta-final-rules-2026-09-16",
    "article-tmi-fefta-amendment-upper-2026",
    "article-amt-fefta-reform-2026"
  ]);
})();

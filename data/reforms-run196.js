(() => {
  const event = {
    id: "regional-public-transport-act-2026-amendment",
    title: "地域交通法・2026年改正",
    eventType: "law_amendment",
    lawId: "regional-public-transport-revitalization-act",
    lawLabel: "地域公共交通の活性化及び再生に関する法律",
    relatedTopics: ["regional-public-transport-act-2026"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-10-16"],
    effectiveDateNote: "2026年9月4日公布の施行期日政令により、改正法は2026年10月16日に施行される。",
    effectiveDateSourceIds: ["source-mlit-regional-transport-effective-date-2026"],
    matchSourceIds: [
      "source-mlit-regional-transport-amendment-2026",
      "source-diet-regional-transport-law-history-2026",
      "source-mlit-regional-transport-effective-date-2026"
    ],
    sourceIds: [
      "source-mlit-regional-transport-amendment-2026",
      "source-diet-regional-transport-law-history-2026",
      "source-mlit-regional-transport-effective-date-2026"
    ],
    articleIds: [
      "article-mlit-regional-transport-effective-date-20260901",
      "article-tmi-regional-transport-amendment-20260710"
    ]
  };

  const exists = (window.REFORM_EVENT_DATA || []).some((item) => item && item.id === event.id);
  if (!exists) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([event]);
})();

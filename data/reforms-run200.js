(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "economic-security-promotion-jbic-2026-amendment");
  if (!event) return;

  const guideline = "source-cao-oesa-basic-guideline-20260911";
  const cabinet = "source-kantei-economic-security-cabinet-20260911";
  const gazette = "source-kanpo-economic-security-effective-20260916";

  event.effectiveDateStatus = "phased";
  event.effectiveDates = appendUnique(event.effectiveDates, ["2026-07-17", "2026-09-18"]);
  event.effectiveDateNote = "2026年6月17日公布。K Programの対象範囲拡大等の一部は2026年7月17日に施行済み。令和8年政令第288号により、改正法附則1条本文および3号に掲げる規定は2026年9月18日施行となり、OESA・JBIC関係、特定重要物資に不可欠な役務、官民協議会等が施行段階へ移る。医療分野の基幹インフラ追加は別段階で、公布から1年6か月以内の政令指定日までに施行される。";
  event.effectiveDateSourceIds = appendUnique(event.effectiveDateSourceIds, [cabinet, gazette]);
  event.matchSourceIds = appendUnique(event.matchSourceIds, [guideline, gazette]);
  event.sourceIds = appendUnique(event.sourceIds, [guideline, cabinet, gazette]);
  event.articleIds = appendUnique(event.articleIds, [
    "article-cao-oesa-basic-guideline-20260911",
    "article-kanpo-economic-security-effective-20260916"
  ]);
})();

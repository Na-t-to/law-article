(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item?.id === "critical-infrastructure-unified-standard-2026");
  if (!event) return;

  const sourceId = "source-nco-critical-infrastructure-safety-guideline-20260911";
  const pushUnique = (list, value) => {
    if (!Array.isArray(list) || list.includes(value)) return;
    list.push(value);
  };

  event.title = "重要インフラ統一基準・安全基準等策定ガイドライン（2026年）";
  event.lawLabel = "重要インフラ・サイバーセキュリティ統一基準等";
  event.sourceIds = event.sourceIds || [];
  event.matchSourceIds = event.matchSourceIds || [];
  event.effectiveDateSourceIds = event.effectiveDateSourceIds || [];
  pushUnique(event.sourceIds, sourceId);
  pushUnique(event.matchSourceIds, sourceId);
  pushUnique(event.effectiveDateSourceIds, sourceId);
})();

(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "employee-social-insurance-expansion-2025-amendment");
  if (!event) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  event.effectiveDateStatus = "phased";
  event.effectiveDates = ["2026-10-01", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"];
  event.effectiveDateNote = "短時間労働者の月額8.8万円の賃金要件撤廃と保険料調整制度は2026年10月1日。企業規模要件は2027年10月以降段階的に縮小し、2035年10月1日に撤廃。個人事業所の業種要件撤廃は2029年10月。賃金要件撤廃に伴い、特定減額特例対象者には別建ての資格取得・申出等の規律が整備される。";
  event.effectiveDateSourceIds = addUnique(event.effectiveDateSourceIds, "source-mhlw-social-insurance-wage-requirement-decree-2026");
  event.effectiveDateSourceIds = addUnique(event.effectiveDateSourceIds, "source-mhlw-social-insurance-wage-requirement-ordinance-2026");
  event.sourceIds = addUnique(event.sourceIds, "source-mhlw-social-insurance-wage-requirement-decree-2026");
  event.sourceIds = addUnique(event.sourceIds, "source-mhlw-social-insurance-wage-requirement-ordinance-2026");
})();

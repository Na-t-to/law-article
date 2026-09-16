(() => {
  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "cyber-countermeasures-act-2025");
  if (!event) return;
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (value && !target.includes(value)) target.push(value); });
  };
  const lawSource = "source-cyber-capability-act-2025";
  const orderSource = "source-cyber-reporting-order-2026";
  const exclusionSource = "source-cyber-reporting-exclusion-notice-2026";
  const formSource = "source-cyber-report-form-notice-2026";
  addUnique(event.sourceIds, [lawSource, orderSource, exclusionSource, formSource]);
  addUnique(event.effectiveDateSourceIds, [exclusionSource, formSource]);
  addUnique(event.articleIds || (event.articleIds = []), [
    "article-cyber-reporting-notices-2026-09-15",
    "article-businesslawyers-mhm-active-cyber-defense-2025",
    "article-miyake-cyber-countermeasures-2026"
  ]);
  event.effectiveDateStatus = "phased";
  event.effectiveDates = ["2026-10-01"];
  event.effectiveDateNote = "特別社会基盤事業者の特定重要電子計算機の届出・特定侵害事象等の報告に関する主要規定は2026年10月1日施行。通信情報の利用等を含む法全体には別の段階施行がある。";
})();

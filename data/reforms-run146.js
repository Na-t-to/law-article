(() => {
  const events = window.REFORM_EVENT_DATA || [];
  const event = events.find((item) => item?.id === "early-business-recovery-act-2025");
  if (!event) return;
  const appendUnique = (base = [], extra = []) => [...new Set([...(base || []), ...extra])];
  event.title = "早期事業再生法・2025年制定（2026年施行）";
  event.relatedTopics = appendUnique(event.relatedTopics, ["early-business-recovery"]);
  event.effectiveDateStatus = "confirmed";
  event.effectiveDates = ["2026-12-11"];
  event.effectiveDateSourceIds = appendUnique(event.effectiveDateSourceIds, [
    "source-early-business-rehabilitation-act-2025",
    "source-meti-early-business-recovery-rules-2026",
    "source-fsa-early-business-rehabilitation-financial-rules-2026"
  ]);
  event.matchSourceIds = appendUnique(event.matchSourceIds, [
    "source-early-business-rehabilitation-act-2025",
    "source-meti-early-business-recovery-rules-2026"
  ]);
  event.sourceIds = appendUnique(event.sourceIds, [
    "source-early-business-rehabilitation-act-2025",
    "source-meti-early-business-recovery-rules-2026",
    "source-meti-early-business-rehabilitation-working-group-report-2026",
    "source-fsa-early-business-rehabilitation-financial-rules-2026"
  ]);
})();

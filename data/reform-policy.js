(() => {
  const parseEffectiveDate = (value) => {
    const match = String(value || "").match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
    if (!match) return null;
    const [, year, month, day] = match;
    const monthNumber = Number(month);
    const dayNumber = day ? Number(day) : null;
    if (monthNumber < 1 || monthNumber > 12) return null;
    if (dayNumber !== null) {
      const date = new Date(Date.UTC(Number(year), monthNumber - 1, dayNumber));
      if (date.getUTCFullYear() !== Number(year) || date.getUTCMonth() !== monthNumber - 1 || date.getUTCDate() !== dayNumber) return null;
    }
    return {
      value: day ? `${year}-${month}-${day}` : `${year}-${month}`,
      sortKey: `${year}-${month}-${day || "31"}`,
      precision: day ? "day" : "month",
      label: day ? `${Number(year)}年${monthNumber}月${dayNumber}日施行` : `${Number(year)}年${monthNumber}月施行`
    };
  };

  const latestExplicitDate = (values) => {
    const dates = values.map(parseEffectiveDate).filter(Boolean);
    if (!dates.length) return null;
    return [...new Map(dates.map((date) => [date.value, date])).values()]
      .sort((left, right) => right.sortKey.localeCompare(left.sortKey))[0];
  };

  const hasEffectiveDateGrounding = (article) => {
    const grounding = Array.isArray(article.reformEffectiveDateSourceIds) ? article.reformEffectiveDateSourceIds : [];
    const primary = Array.isArray(article.primarySourceIds) ? article.primarySourceIds : [];
    return grounding.length > 0 && grounding.every((id) => primary.includes(id));
  };

  const getStrictLegalReformEffectiveDate = (article) => {
    if (!hasEffectiveDateGrounding(article)) return null;
    return latestExplicitDate([
      ...(Array.isArray(article.reformEffectiveDates) ? article.reformEffectiveDates : []),
      article.reformEffectiveDate
    ].filter(Boolean));
  };

  const hasEventEffectiveDateGrounding = (event) => {
    const grounding = Array.isArray(event.effectiveDateSourceIds) ? event.effectiveDateSourceIds : [];
    const sources = Array.isArray(event.sourceIds) ? event.sourceIds : [];
    return grounding.length > 0 && grounding.every((id) => sources.includes(id));
  };

  const getStrictReformEventEffectiveDate = (event) => {
    if (!event || !hasEventEffectiveDateGrounding(event)) return null;
    return latestExplicitDate([
      ...(Array.isArray(event.effectiveDates) ? event.effectiveDates : []),
      event.effectiveDate
    ].filter(Boolean));
  };

  const originalGetLegalReformInfo = window.getLegalReformInfo;
  if (typeof originalGetLegalReformInfo === "function") {
    window.getLegalReformInfo = (article, topics = []) => {
      const result = originalGetLegalReformInfo(article, topics);
      return article?.reformEventId ? { ...result, isReform: true } : result;
    };
  }

  window.parseLegalReformEffectiveDate = parseEffectiveDate;
  window.hasLegalReformEffectiveDateGrounding = hasEffectiveDateGrounding;
  window.getLegalReformEffectiveDate = getStrictLegalReformEffectiveDate;
  window.hasLegalReformEventEffectiveDateGrounding = hasEventEffectiveDateGrounding;
  window.getLegalReformEventEffectiveDate = getStrictReformEventEffectiveDate;
})();

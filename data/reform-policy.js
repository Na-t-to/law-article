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

  const hasEffectiveDateGrounding = (article) => {
    const grounding = Array.isArray(article.reformEffectiveDateSourceIds) ? article.reformEffectiveDateSourceIds : [];
    const primary = Array.isArray(article.primarySourceIds) ? article.primarySourceIds : [];
    return grounding.length > 0 && grounding.every((id) => primary.includes(id));
  };

  const getStrictLegalReformEffectiveDate = (article) => {
    if (!hasEffectiveDateGrounding(article)) return null;
    const explicitValues = [
      ...(Array.isArray(article.reformEffectiveDates) ? article.reformEffectiveDates : []),
      article.reformEffectiveDate
    ].filter(Boolean);
    const dates = explicitValues.map(parseEffectiveDate).filter(Boolean);
    if (!dates.length) return null;
    return [...new Map(dates.map((date) => [date.value, date])).values()]
      .sort((left, right) => right.sortKey.localeCompare(left.sortKey))[0];
  };

  window.parseLegalReformEffectiveDate = parseEffectiveDate;
  window.hasLegalReformEffectiveDateGrounding = hasEffectiveDateGrounding;
  window.getLegalReformEffectiveDate = getStrictLegalReformEffectiveDate;
})();

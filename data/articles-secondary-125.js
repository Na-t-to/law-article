(() => {
  const legacyGetLegalReformInfo = window.getLegalReformInfo;
  if (typeof legacyGetLegalReformInfo === "function") {
    window.getLegalReformInfo = (article, topics = []) => {
      const events = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
      const primarySourceIds = Array.isArray(article?.primarySourceIds) ? article.primarySourceIds : [];
      const hasExplicitEvent = !!article?.reformEventId || events.some((event) =>
        (Array.isArray(event?.articleIds) && event.articleIds.includes(article?.id)) ||
        (Array.isArray(event?.matchSourceIds) && event.matchSourceIds.some((id) => primarySourceIds.includes(id)))
      );
      if (article?.legacyReformInference === false && !hasExplicitEvent) {
        return { isReform: false, stage: null, stageLabel: "" };
      }
      return legacyGetLegalReformInfo(article, topics);
    };
  }
  const unique = (values) => [...new Set((values || []).filter(Boolean))];
  const replaceIds = (values, replacements) => unique((values || []).map((value) => replacements[value] || value));
  const categoryAliases = {
    "コーポレートガバナンス": "会社法・ガバナンス",
    "契約・取引": "契約",
    "IT・デジタル": "AI・デジタル",
    "労務・人事": "労務",
    "消費者法": "消費者法・表示"
  };
  const normalizeCategories = (values) => unique((values || []).map((value) => categoryAliases[value] || value));

  // The 2026-09-13 backfill re-added two already adopted final interim reports as
  // landing-page records. Keep the earlier evidence records (direct official PDFs)
  // as canonical and migrate every reference back to them before removing duplicates.
  const sourceAliases = {
    "source-caa-digital-tokusho-interim-final-2026": "source-caa-digital-tokusho-interim-2026",
    "source-caa-consumer-contract-interim-final-2026": "source-caa-consumer-contract-interim-draft-2026"
  };
  const articleAliases = {
    "article-caa-digital-tokusho-interim-final-2026": "article-caa-digital-tokusho-interim-2026",
    "article-caa-consumer-contract-interim-final-2026": "article-caa-consumer-contract-interim-draft-2026"
  };
  const reformAliases = {
    "digital-commerce-tokusho-review-2026": "digital-commerce-tokusho-2026-review"
  };

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => ({
    ...topic,
    categories: normalizeCategories(topic.categories),
    sourceIds: replaceIds(topic.sourceIds, sourceAliases),
    issues: (topic.issues || []).map((issue) => ({
      ...issue,
      sourceIds: replaceIds(issue.sourceIds, sourceAliases)
    }))
  }));

  window.UPDATE_DATA = (window.UPDATE_DATA || []).map((update) => ({
    ...update,
    categories: normalizeCategories(update.categories),
    sourceIds: replaceIds(update.sourceIds, sourceAliases),
    articleIds: replaceIds(update.articleIds, articleAliases)
  }));

  window.SOURCE_DATA = (window.SOURCE_DATA || [])
    .filter((source) => !sourceAliases[source.id])
    .map((source) => ({
      ...source,
      topics: unique(source.topics)
    }));

  window.ARTICLE_DATA = (window.ARTICLE_DATA || [])
    .filter((article) => !articleAliases[article.id])
    .map((article) => {
      const next = {
        ...article,
        categories: normalizeCategories(article.categories),
        primarySourceIds: replaceIds(article.primarySourceIds, sourceAliases),
        reformEventId: reformAliases[article.reformEventId] || article.reformEventId
      };
      if (Array.isArray(article.reformStageSourceIds)) next.reformStageSourceIds = replaceIds(article.reformStageSourceIds, sourceAliases);
      if (Array.isArray(article.reformEffectiveDateSourceIds)) next.reformEffectiveDateSourceIds = replaceIds(article.reformEffectiveDateSourceIds, sourceAliases);
      return next;
    });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || [])
    .filter((event) => !reformAliases[event.id])
    .map((event) => ({
      ...event,
      sourceIds: replaceIds(event.sourceIds, sourceAliases),
      matchSourceIds: replaceIds(event.matchSourceIds, sourceAliases),
      effectiveDateSourceIds: replaceIds(event.effectiveDateSourceIds, sourceAliases),
      articleIds: replaceIds(event.articleIds, articleAliases)
    }));

  const sourceById = new Map((window.SOURCE_DATA || []).map((source) => [source.id, source]));
  const caoMeeting = sourceById.get("source-cao-startup-wg13-total-premium-2026");
  if (caoMeeting) caoMeeting.url = "https://www8.cao.go.jp/kisei-kaikaku/kisei/meeting/wg/2501_04startup/260413/startup13_agenda.html";

  const addEvent = (event) => {
    if (!(window.REFORM_EVENT_DATA || []).some((item) => item.id === event.id)) {
      window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(event);
    }
  };
  const patchArticle = (id, patch) => {
    const article = (window.ARTICLE_DATA || []).find((item) => item.id === id);
    if (article) Object.assign(article, patch);
  };

  addEvent({
    id: "childcare-caregiver-leave-2024-amendment",
    title: "育児・介護休業法・2024年改正（2025年段階施行）",
    eventType: "law_amendment",
    lawId: "childcare-caregiver-leave-act",
    lawLabel: "育児・介護休業法",
    relatedTopics: ["childcare-caregiver-leave"],
    effectiveDateStatus: "phased",
    effectiveDates: ["2025-04-01", "2025-10-01"],
    effectiveDateNote: "令和6年改正法は2025年4月1日と10月1日に段階施行。",
    effectiveDateSourceIds: ["source-mhlw-childcare-caregiver-amendment-2024"],
    matchSourceIds: ["source-mhlw-childcare-caregiver-amendment-2024"],
    sourceIds: ["source-mhlw-childcare-caregiver-amendment-2024"]
  });
  patchArticle("article-mhlw-childcare-caregiver-amendment", {
    reformEventId: "childcare-caregiver-leave-2024-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-mhlw-childcare-caregiver-amendment-2024"]
  });
  patchArticle("article-not-childcare-caregiver-reform-2024", {
    reformEventId: "childcare-caregiver-leave-2024-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-mhlw-childcare-caregiver-amendment-2024"]
  });

  addEvent({
    id: "fefta-catchall-export-controls-2025-amendment",
    title: "外為法・補完的輸出規制 2025年見直し",
    eventType: "regulation_or_guideline",
    lawId: "foreign-exchange-act-export-controls",
    lawLabel: "外為法・補完的輸出規制",
    relatedTopics: ["economic-security-tech-control"],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2025-10-09"],
    effectiveDateSourceIds: ["source-meti-catchall-reform-2025"],
    matchSourceIds: ["source-meti-catchall-reform-2025"],
    sourceIds: ["source-meti-catchall-reform-2025"]
  });
  patchArticle("article-meti-catchall-reform-2025", {
    reformEventId: "fefta-catchall-export-controls-2025-amendment",
    reformStageAtPublication: "effective",
    reformStageSourceIds: ["source-meti-catchall-reform-2025"]
  });
  patchArticle("article-amt-catchall-reform-2025", {
    reformEventId: "fefta-catchall-export-controls-2025-amendment"
  });

  addEvent({
    id: "distribution-guideline-rpm-2026-amendment",
    title: "流通・取引慣行ガイドライン・2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "antimonopoly-distribution-guideline",
    lawLabel: "独占禁止法・流通取引慣行ガイドライン",
    relatedTopics: ["distribution-resale-price"],
    effectiveDateStatus: "unknown",
    matchSourceIds: ["source-jftc-distribution-guideline-2026"],
    sourceIds: ["source-jftc-distribution-guideline-2026"]
  });
  patchArticle("article-jftc-distribution-guideline-2026", {
    reformEventId: "distribution-guideline-rpm-2026-amendment",
    reformStageAtPublication: "effective",
    reformStageSourceIds: ["source-jftc-distribution-guideline-2026"]
  });
  patchArticle("article-amt-distribution-guideline-2026", {
    reformEventId: "distribution-guideline-rpm-2026-amendment"
  });

  // These records discuss enforcement, a judicial application, or an informational
  // publication. Their titles contain legacy trigger words such as 改正/改訂, but
  // they are not themselves law-reform events.
  for (const id of [
    "article-tmi-makino-stop-2026",
    "article-innoventier-daifuku-employee-invention-2026",
    "article-meti-employee-stock-compensation-guidebook-2023",
    "article-fsa-sesc-insider-qa-2024"
  ]) {
    patchArticle(id, { legacyReformInference: false });
  }
})();

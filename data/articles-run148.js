(() => {
  const addUnique = (array, value) => {
    if (!Array.isArray(array)) return [value];
    if (!array.includes(value)) array.push(value);
    return array;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "ma-restructuring-labor-contract-succession");
  if (topic) {
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    if (Array.isArray(topic.overview) && topic.overview.length >= 3) {
      topic.overview[2] = "2026年7月以降、厚生労働省の組織再編部会は、企業価値担保権対応に限らない組織再編全般の労働者保護について検討を再開している。2026年9月14日の第8回部会では、M&A調査会社へのヒアリングとEU・ドイツ・フランス・英国の事業移転時の労働法制を比較し、自動承継、承継拒否、労働条件変更、労使コミュニケーション等を検討素材とした。具体的な法改正内容はまだ決まっていない。";
    }
    if (topic.currentSummary && Array.isArray(topic.currentSummary.facts) && topic.currentSummary.facts.length >= 4) {
      topic.currentSummary.facts[3] = "2026年7月3日の組織再編部会で、海外法制・M&A実態・企業労組調査等を踏まえて論点整理を進める方針が示され、9月14日の第8回部会ではM&A調査会社へのヒアリングとEU・ドイツ・フランス・英国の事業移転時の労働法制比較が行われた。";
    }
    if (topic.currentSummary && Array.isArray(topic.currentSummary.interpretations) && topic.currentSummary.interpretations.length >= 3) {
      topic.currentSummary.interpretations[2] = "現在の組織再編部会は、事業譲渡への新たな承継ルール等を含め幅広い制度見直しを検討しているが、2026年9月14日時点でも実態把握・比較法調査の段階にある。EU等の自動承継制度や委員意見を日本の成立済みルールとして扱わない。";
    }
    if (topic.currentSummary && Array.isArray(topic.currentSummary.uncertain) && topic.currentSummary.uncertain.length >= 1) {
      topic.currentSummary.uncertain[0] = "組織再編全般に関する制度見直しは、2026年9月14日時点でもM&A実態・海外法制等の調査段階であり、事業譲渡、株式譲渡、会社分割等について新たな法的義務が導入されるかは確定していない。";
    }
    const issue = (topic.issues || []).find((item) => item && item.id === "reorganization-labor-review-2026");
    if (issue) {
      issue.conclusion = "厚生労働省の組織再編部会は、企業価値担保権対応後も組織再編全般の労働関係について検討を継続している。2026年9月14日の第8回部会ではM&A実態とEU・ドイツ・フランス・英国の事業移転法制を比較し、自動承継、承継拒否、労働条件変更、労使コミュニケーション等を検討素材とした。";
      issue.exception = "第8回部会の海外比較やヒアリング内容は制度設計の検討材料であり、日本の現行法を変更する確定方針・法案ではない。";
      issue.uncertain = "自動承継の範囲、承継拒否、労働条件変更、情報提供・協議等について、どの制度改正を行うか、法形式と時期はいずれも未確定である。";
      issue.sourceIds = addUnique(issue.sourceIds || [], "source-mhlw-reorg-labor-council-2026-09-14");
    }
    topic.sourceIds = addUnique(topic.sourceIds || [], "source-mhlw-reorg-labor-council-2026-09-14");
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "corporate-restructuring-labor-policy-review-2026");
  if (reform) {
    reform.matchSourceIds = addUnique(reform.matchSourceIds || [], "source-mhlw-reorg-labor-council-2026-09-14");
    reform.sourceIds = addUnique(reform.sourceIds || [], "source-mhlw-reorg-labor-council-2026-09-14");
    reform.articleIds = addUnique(reform.articleIds || [], "article-mhlw-reorganization-labor-council-2026-09");
  }

  const article = {
    id: "article-mhlw-reorganization-labor-council-2026-09",
    title: "第8回 労働政策審議会労働条件分科会『組織再編に伴う労働関係の調整に関する部会』（資料）",
    publisher: "厚生労働省",
    author: "厚生労働省／労働政策審議会",
    publishedAt: "2026-09-14",
    collectedAt: "2026-09-15",
    url: "https://www.mhlw.go.jp/stf/newpage_76153.html",
    sourceType: "primary",
    sourceLabel: "一次資料・審議会／組織再編の労働関係見直し",
    status: "adopted",
    summary: "2026年9月14日の第8回組織再編部会の資料。M&A調査会社から実務実態を聴取し、EU・ドイツ・フランス・英国の事業移転時の労働法制を比較して、自動承継の適用範囲、労働者による承継拒否、労働条件変更、情報提供・労使コミュニケーション等を検討素材としている。2026年5月の事業譲渡等指針改正で検討が完結せず、組織再編全般の労働者保護見直しが続いていることを確認できる。",
    whyImportant: [
      "2026年7月に示された調査方針が、M&A実態と海外法制の具体的な比較検討へ進んだことを確認できる",
      "EU・ドイツ・フランス・英国の事業移転時の自動承継、承継拒否、労働条件変更、情報提供・協議を日本の現行制度と比較できる",
      "今後の制度改正で焦点になり得る論点が具体化する一方、まだ検討資料であり確定ルールではないことを区別できる",
      "M&A・労務担当が、現行の会社分割・事業譲渡ルールと将来の制度見直しを混同せず継続監視する基準点になる"
    ],
    audience: ["企業法務", "人事・労務", "M&A担当", "制度調査担当"],
    audienceReason: "M&A・組織再編の労働者保護ルールについて、現行義務と将来の制度見直しを分けて追跡するため。",
    categories: ["労務", "M&A", "会社法・ガバナンス"],
    relatedTopics: ["ma-restructuring-labor-contract-succession"],
    relatedIssues: ["reorganization-labor-review-2026"],
    primarySourceIds: ["source-mhlw-reorg-labor-council-2026-09-14"],
    reformEventId: "corporate-restructuring-labor-policy-review-2026",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-mhlw-reorg-labor-council-2026-09-14"],
    legacyReformInference: false,
    whatChanged: "制度見直し追跡／2026年9月14日のM&A実態ヒアリングと海外法制比較を追加し、現行ルールと将来の制度検討を分離して追えるようにした。"
  };

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  let currentArticles = window.ARTICLE_DATA || [];
  const exists = currentArticles.some((item) => item && (item.id === article.id || normalizeUrl(item.url) === normalizeUrl(article.url)));
  if (!exists) currentArticles = currentArticles.concat([article]);
  window.ARTICLE_DATA = currentArticles;
})();

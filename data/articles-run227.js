(() => {
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

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "skill-development-employment-foreign-workers");
  if (topic) {
    topic.lastUpdated = "2026-09-20";
    topic.lastVerified = "2026-09-20";
    topic.sourceIds = addUnique(topic.sourceIds, "source-mhlw-foreign-worker-supervision-20260915");
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-mhlw-foreign-worker-supervision-20260915");
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "外国人雇用事業場の労働基準・安全衛生コンプライアンス");

    if (!(topic.issues || []).some((issue) => issue && issue.id === "foreign-worker-labor-compliance")) {
      topic.issues = (topic.issues || []).concat({
        id: "foreign-worker-labor-compliance",
        title: "技能実習生・特定技能外国人の受入れ現場で労働法令遵守をどう点検するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "外国人材の在留資格・受入れ制度への適合だけでなく、機械等の安全基準、健康診断後の医師意見聴取、時間外・休日・深夜労働の割増賃金など、実際の就労現場に適用される労働基準・安全衛生法令を継続的に点検する。",
        exception: "厚生労働省の監督指導は、労働基準関係法令違反が疑われる事業場を対象に実施されたものであり、公表された違反率を技能実習生・特定技能外国人を受け入れる全事業場の違反率と読むことはできない。",
        uncertain: "監督対象の選定事情や違反内容は年度・事業場ごとに異なるため、自社のリスク評価は業種、設備、労働時間、健康管理、過去の指摘等を踏まえて行う必要がある。",
        sourceIds: ["source-mhlw-foreign-worker-supervision-20260915"]
      });
    }

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUnique(
        topic.currentSummary.facts,
        "厚生労働省が2026年9月15日に公表した2025年の監督指導結果では、違反が疑われる事業場を対象とした監督で、技能実習生関係は13,148事業場中9,619事業場（73.2％）、特定技能外国人関係は8,082事業場中6,179事業場（76.5％）に労働基準関係法令違反が認められた。"
      );
      topic.currentSummary.interpretations = addUnique(
        topic.currentSummary.interpretations,
        "外国人受入れの適法性は在留資格・計画認定・支援体制だけでは完結せず、受入れ後の労働時間、割増賃金、機械安全、健康管理等を現場統制として回せるかまで含めて評価する必要がある。"
      );
      topic.currentSummary.implications = addUnique(
        topic.currentSummary.implications,
        "外国人材を受け入れる事業場では、入管・育成就労対応とは別に、労働時間・賃金台帳、割増賃金、安全装置、健康診断後措置など監督指導で問題になりやすい項目を定期監査へ組み込む。"
      );
    }
  }

  const additions = [
    {
      id: "article-mhlw-foreign-worker-supervision-20260915",
      title: "外国人技能実習生又は特定技能外国人を使用する事業場に対して行った令和7年の監督指導、送検等の状況",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-20",
      url: "https://www.mhlw.go.jp/stf/newpage_76095.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／外国人雇用事業場の監督指導",
      status: "adopted",
      summary: "厚生労働省が、2025年に外国人技能実習生又は特定技能外国人を使用する事業場へ実施した労働基準監督署等の監督指導・送検状況を公表した資料。技能実習生関係では13,148事業場中9,619事業場（73.2％）、特定技能外国人関係では8,082事業場中6,179事業場（76.5％）に労働基準関係法令違反が認められ、機械等の安全基準、健康診断後の医師意見聴取、時間外・休日・深夜労働の割増賃金などが主要な違反事項となっている。なお、監督指導は法令違反が疑われる事業場を対象としており、この割合は受入れ事業場全体の違反率を示すものではない。",
      whyImportant: [
        "育成就労・特定技能の制度要件だけでなく、受入れ現場の労働基準・安全衛生法令遵守が実際の監督リスクになることを一次資料で確認できる",
        "機械安全、健康診断後措置、割増賃金という具体的な頻出違反を、外国人雇用事業場の内部監査項目へ落とし込める",
        "高い違反率を全受入れ企業へ一般化せず、違反が疑われる事業場への監督結果という母集団の性質まで含めて読める"
      ],
      audience: ["人事・労務", "企業法務", "外国人採用担当", "工場・事業場管理者", "コンプライアンス担当"],
      audienceReason: "外国人材受入れの適法性を、在留資格や支援計画だけでなく、賃金・労働時間・安全衛生・健康管理の現場運用まで含めて点検するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["skill-development-employment-foreign-workers"],
      relatedIssues: ["foreign-worker-labor-compliance"],
      primarySourceIds: ["source-mhlw-foreign-worker-supervision-20260915"],
      legacyReformInference: false,
      whatChanged: "執行・監督実務補強／外国人材の受入れ制度対応に加え、労働時間・割増賃金・機械安全・健康管理等を現場コンプライアンスとして管理する論点を追加した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

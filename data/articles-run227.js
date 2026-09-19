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

  const article = {
    id: "article-miyake-consumer-contract-update-20260919",
    title: "消費者契約法アップデート　中間取りまとめとパブリックコメント～配慮規定・契約からの解放手段・サブスクの解約・解約料",
    publisher: "三宅法律事務所",
    author: "弁護士法人三宅法律事務所",
    publishedAt: "2026-09-19",
    collectedAt: "2026-09-20",
    url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E6%B6%88%E8%B2%BB%E8%80%85%E5%A5%91%E7%B4%84%E6%B3%95%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC/",
    sourceType: "secondary",
    sourceLabel: "実務解説・三宅法律事務所／消費者契約法中間取りまとめ",
    status: "adopted",
    summary: "2026年9月10日の消費者契約法検討会中間取りまとめと9月16日開始のパブリックコメントを、配慮規定、契約拘束力からの解放、継続契約の解約・更新、定型約款の重要変更通知、解約料へ分解して解説する実務資料。提案されている規律を一律の『義務化』として扱わず、重要変更時の個別通知、解約妨害の禁止・差止、努力義務・配慮という規律の強度の違いを整理し、現行法下でも解約導線、約款変更通知、解約料説明を先行点検できることを示している。中間取りまとめは法案ではなく、今後の法制的検討で変更され得る。",
    whyImportant: [
      "中間取りまとめの各提案を、明確な義務、禁止・差止対象、努力義務・配慮へ分けており、社内で『すべて義務化される』と過剰反応するのを防げる",
      "サブスクの解約妨害、合理的な離脱方法、自動更新、約款の重要変更通知、解約料を、プロダクト・規約・顧客対応の実装単位で点検できる",
      "解約導線、約款変更の通知設計、解約料の説明は現行法上の努力義務等とも整合するため、法案化を待たずに棚卸しできるという準備順序が具体的である"
    ],
    audience: ["企業法務", "消費者法務", "サブスクリプション事業担当", "EC・デジタルサービス担当", "プロダクト・UX担当"],
    audienceReason: "消費者契約法見直しを、提案段階であることを保ったまま、どこを今から点検し、どこを法制化後に確定すべきか切り分けるため。",
    categories: ["消費者法・表示", "契約・取引", "AI・デジタル"],
    relatedTopics: ["consumer-law-digital-contract-review"],
    relatedIssues: ["consumer-review-subscription-cancellation", "consumer-review-contract-change-notice", "consumer-review-vulnerability-principle"],
    primarySourceIds: ["source-caa-consumer-contract-interim-draft-2026"],
    reformEventId: "consumer-contract-act-review-2026",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-caa-consumer-contract-interim-draft-2026"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／消費者契約法の中間取りまとめについて、規律の強度の違いと、解約導線・約款変更通知・解約料説明を法案化前から棚卸しする実務順序を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat([article]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-law-digital-contract-review");
  if (topic) {
    topic.lastUpdated = "2026-09-20";
    topic.lastVerified = "2026-09-20";
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "規律の強度を分けた施行準備とパブリックコメント対応");
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "consumer-contract-act-review-2026");
  if (reform) reform.articleIds = addUnique(reform.articleIds, article.id);
})();
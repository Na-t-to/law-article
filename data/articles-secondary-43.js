(() => {
  const removeById = (items, id) => {
    if (!Array.isArray(items)) return;
    for (let i = items.length - 1; i >= 0; i -= 1) {
      if (items[i] && items[i].id === id) items.splice(i, 1);
    }
  };
  const removeTopic = (slug) => {
    if (!Array.isArray(window.TOPIC_DATA)) return;
    for (let i = window.TOPIC_DATA.length - 1; i >= 0; i -= 1) {
      if (window.TOPIC_DATA[i] && window.TOPIC_DATA[i].slug === slug) window.TOPIC_DATA.splice(i, 1);
    }
  };
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const canonicalSlug = "mobile-phone-illicit-use-id-verification-2026";
  const duplicateSlug = "mobile-communications-identity-verification";

  removeTopic(duplicateSlug);
  removeById(window.SOURCE_DATA, "source-sangiin-mobile-law-2026");
  removeById(window.REFORM_EVENT_DATA, "mobile-communications-act-2026-amendment");
  removeById(window.ARTICLE_DATA, "article-sangiin-mobile-law-2026");
  removeById(window.ARTICLE_DATA, "article-ushijima-mobile-law-2026");

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === canonicalSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-09";
    topic.lastVerified = "2026-09-09";
    addUnique(topic.sourceIds, ["source-egov-mobile-law-2026", "source-egov-mobile-id-rule-2026", "source-egov-mobile-id-rule-2027"]);
    addUnique(topic.practicalImpacts, ["非対面本人確認", "対面ICチップ読取り", "販売代理店・店舗マニュアル"]);
    addUnique(topic.currentSummary.facts, [
      "本人確認方法の見直しは2026年法律第25号の施行準備とは別の時間軸で進んでおり、令和8年総務省令第16号による非対面本人確認の見直しは2026年4月1日に施行済みである。",
      "令和8年総務省令第94号は2026年7月27日に公布され、2027年4月1日から対面契約時の本人確認をICチップ読取り中心へ見直す。"
    ]);
    addUnique(topic.currentSummary.interpretations, [
      "2026年法律第25号による対象役務・義務の拡張と、施行規則による本人確認方法の段階的見直しは同じ契約実務に影響するが、別の改正イベントとして施行時期を管理する方が誤解が少ない。"
    ]);
    addUnique(topic.currentSummary.implications, [
      "2026年4月施行済みの非対面本人確認方式を現行フローへ反映するとともに、2027年4月の対面ICチップ読取り原則化に向けて店舗端末・本人確認記録・販売代理店手順を準備する。"
    ]);
    if (!(topic.issues || []).some((item) => item.id === "mobile-id-nonface-2026")) {
      topic.issues.push({
        id: "mobile-id-nonface-2026",
        title: "非対面本人確認の2026年見直しをどう運用するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "令和8年総務省令第16号による本人確認方法の見直しは2026年4月1日に施行されているため、オンライン契約では現行の施行規則に沿った本人確認方法へ更新する。",
        exception: "経過措置が設けられた方法があるため、旧フローの利用可否は適用期間と条件を確認する。",
        uncertain: "今後の追加改正や本人確認技術の変更により利用可能な方式が変わり得る。",
        sourceIds: ["source-egov-mobile-id-rule-2026"]
      });
    }
    if (!(topic.issues || []).some((item) => item.id === "mobile-id-counter-2027")) {
      topic.issues.push({
        id: "mobile-id-counter-2027",
        title: "2027年4月の対面ICチップ読取り原則化へどう準備するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "令和8年総務省令第94号は2027年4月1日から対面契約時の本人確認をICチップ読取り中心へ見直す。店舗・代理店の読取環境、本人限定受取郵便、記録作成等を施行前に更新する。",
        exception: "本人確認書類の種類や契約方法に応じて複数の確認手段があり、すべての場面で同一方式になるわけではない。",
        uncertain: "端末導入、例外処理、本人確認書類更新等の実装細部は総務省資料・Q&A等を継続確認する。",
        sourceIds: ["source-egov-mobile-id-rule-2027"]
      });
    }
  }

  ["source-egov-mobile-law-2026", "source-egov-mobile-id-rule-2026", "source-egov-mobile-id-rule-2027"].forEach((sourceId) => {
    const source = (window.SOURCE_DATA || []).find((item) => item.id === sourceId);
    if (source) source.topics = [canonicalSlug];
  });

  const lawEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "mobile-phone-illicit-use-2026-amendment");
  if (lawEvent) {
    addUnique(lawEvent.sourceIds, ["source-egov-mobile-law-2026"]);
  }

  const idRulesEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "mobile-identity-verification-rules-2026-2027");
  if (idRulesEvent) idRulesEvent.relatedTopics = [canonicalSlug];

  ["article-egov-mobile-id-rule-2026", "article-egov-mobile-id-rule-2027", "article-miyake-mobile-id-2027"].forEach((articleId) => {
    const article = (window.ARTICLE_DATA || []).find((item) => item.id === articleId);
    if (article) article.relatedTopics = [canonicalSlug];
  });
})();

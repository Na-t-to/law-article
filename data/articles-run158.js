(() => {
  const topicSlug = "disability-employment-business-quality-review";
  const sourceId = "source-mhlw-disability-employment-rare-disease-review-2026";
  const issueId = "disability-employment-rate-rare-disease-individual-assessment";
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);

  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  if (topic) {
    topic.title = "障害者雇用制度見直し・雇用の質／雇用率";
    topic.summary = "障害者雇用ビジネス等を通じた雇用の質と、手帳を所持していない難病患者の個別判定・実雇用率算入など2026年の障害者雇用率制度見直しを、現行の事業主責任・雇用率と検討中の制度案を分けて整理する。";
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    topic.sourceIds = addUnique(topic.sourceIds, sourceId);
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "障害者雇用率・実雇用率の算定");
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "難病患者の雇用・個別判定への将来対応");

    topic.overview = addUnique(
      topic.overview,
      "2026年9月15日の第142回障害者雇用分科会では、障害者手帳を所持していない難病患者のうち、就労困難性が手帳所持者と同等以上の者を個別に判定し、まず実雇用率の算定対象とする方向が具体化されました。"
    );
    topic.overview = addUnique(
      topic.overview,
      "この個別判定制度は検討中であり、現行の実雇用率算定対象を直ちに拡張するものではありません。現在の2.7％の法定雇用率対応と、将来の制度改正に向けた準備を分けて管理します。"
    );

    topic.currentSummary = topic.currentSummary || {};
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "2026年9月15日の第142回障害者雇用分科会では、障害者手帳を所持していない難病患者のうち就労困難性が手帳所持者と同等以上の者について、個別判定により対象障害者として実雇用率へ算入する制度案が示された。"
    );
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "個別判定は、難病の医療費助成制度における医学的重症度、就労支援職による就労困難性アセスメント、医師の意見書等を材料に、都道府県労働局に置く審査委員会で判断する案が示されている。詳細基準はJEEDの2026～2028年度調査研究と国の専門家検討で具体化する方向である。"
    );
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "案では、個別判定を受けた者を実雇用率の算定対象とし、週所定労働時間10時間以上20時間未満の場合は0.5人として算定する方向が示される一方、重度区分によるダブルカウントは制度開始時には設けない方向で検討されている。"
    );
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "見直し案は、手帳を所持していない難病患者を一律に実雇用率へ算入する構造ではなく、医学的状態だけでなく実際の就労困難性を個別に確認し、現行の対象障害者と同等以上の就労困難性があるかを判定する方向である。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "企業は、2026年7月からの法定雇用率2.7％と現行の実雇用率算定ルールを引き続き基準とし、手帳を所持していない難病患者を制度案だけを根拠に先取りして算入しない。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "難病患者を雇用している企業は、本人の同意・プライバシーに配慮しつつ、将来の個別判定制度に備えて、就労上の制約、合理的配慮、勤務実績、支援機関との連携を説明できる運用を検討する。"
    );
    topic.currentSummary.uncertain = addUnique(
      topic.currentSummary.uncertain,
      "個別判定の最終基準、対象疾病、申請書類、審査委員会の運用、更新期間、制度開始時期、法改正・下位法令の形式は未確定である。"
    );

    if (!(topic.issues || []).some((issue) => issue && issue.id === issueId)) {
      topic.issues = (topic.issues || []).concat([{
        id: issueId,
        title: "手帳を所持していない難病患者を実雇用率へどう位置付ける案か",
        status: "pending",
        stage: "under_revision",
        views: [],
        conclusion: "2026年9月15日資料では、障害者手帳を所持していない難病患者のうち、就労困難性が手帳所持者と同等以上と個別判定された者を対象障害者として、まず実雇用率に算入する方向を検討している。医学的重症度、就労支援職のアセスメント、医師意見書等を材料に、都道府県労働局の審査委員会で判断する案である。",
        exception: "すべての難病患者を一律に対象とする案ではない。制度は検討中であり、現時点の実雇用率算定では現行法上の対象障害者の範囲を基準とし、提案を先取りして算入しない。",
        uncertain: "個別判定基準、対象疾病、更新期間、制度開始時期、重度区分の扱い、法改正・下位法令の具体的形式は未確定である。",
        sourceIds: ["source-mhlw-disability-employment-study-report-2026", sourceId]
      }]);
    }
  }

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

  const addition = {
    id: "article-mhlw-disability-employment-rare-disease-review-2026",
    title: "第142回労働政策審議会障害者雇用分科会 資料1『手帳を所持していない難病患者の位置付けについて』",
    publisher: "厚生労働省",
    author: "労働政策審議会障害者雇用分科会",
    publishedAt: "2026-09-14",
    collectedAt: "2026-09-15",
    url: "https://www.mhlw.go.jp/stf/newpage_76196.html",
    sourceType: "primary",
    sourceLabel: "一次資料／労働政策審議会／障害者雇用率制度見直し・検討中",
    status: "adopted",
    summary: "2026年9月15日の第142回障害者雇用分科会で、障害者手帳を所持していない難病患者のうち就労困難性が手帳所持者と同等以上の者を個別判定し、まず実雇用率の算定対象とする方向が具体化された。判定は難病の医療費助成上の重症度、就労支援職による就労困難性アセスメント、医師意見書等を用い、都道府県労働局の審査委員会で行う案で、JEEDの2026～2028年度調査研究等を踏まえて詳細設計する段階である。制度は未成立・未施行である。",
    whyImportant: [
      "手帳を所持していない難病患者が当然に実雇用率へ算入されるのではなく、就労困難性の個別判定を前提とする制度案であることを一次資料で確認できる",
      "医学的重症度、就労支援職のアセスメント、医師意見書、都道府県労働局の審査委員会という判定プロセスが具体化し、今後の人事実務への影響を見通しやすくなった",
      "短時間労働者の0.5カウントや更新制の方向も示される一方、現行制度は変わっていないため、企業が実雇用率を先取りして計算する誤りを防げる"
    ],
    audience: ["企業法務", "人事・障害者雇用担当", "労務・コンプライアンス担当"],
    audienceReason: "現行の法定雇用率2.7％・実雇用率算定ルールと、難病患者に関する将来の制度案を分離し、採用・雇用管理・将来対応を準備するため。",
    categories: ["労務", "危機管理・コンプライアンス"],
    relatedTopics: [topicSlug],
    relatedIssues: [issueId],
    primarySourceIds: [sourceId],
    reformEventId: "disability-employment-rate-rare-disease-2026-review",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: [sourceId],
    legacyReformInference: false,
    whatChanged: "制度検討具体化／手帳を所持していない難病患者について、就労困難性の個別判定を経た実雇用率算入、判定プロセス、短時間労働者の算定、更新制の方向が示された。"
  };

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([addition]);
  }
})();
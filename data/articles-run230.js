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
  const additions = [
    {
      id: "article-amt-startup-capital-fiea-20260918",
      title: "Expanding Capital-Raising Options for Startups: Japan’s 2026 Financial Instruments and Exchange Act Reform",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "野原新平、原田寛司、玉野志門",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260918001_en_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・アンダーソン・毛利・友常／2026年金商法改正・スタートアップ資金調達",
      status: "adopted",
      summary: "2026年金融商品取引法改正のうちスタートアップへの成長資金供給に焦点を当て、一般投資家向け募集の開示基準、特定投資家向け私募の勧誘対象、株式・ストックオプション報酬の開示規制という三つの変更を改正前後で整理する実務解説。2027年4月1日の施行を前提に、資金調達コストと調達手段の選択肢がどう変わるかを具体的に示している。",
      whyImportant: [
        "一般投資家向け募集について、届出免除が5億円未満へ拡大され、5億円以上10億円未満に簡易開示の段階が設けられるという改正前後の差分を一度に把握できる",
        "特定投資家となり得る一定の法人・個人を私募の勧誘対象へ広げることで、スタートアップが5億円超の資金調達を行う際の選択肢がどう増えるかを説明している",
        "役職員への株式・ストックオプション付与の一部を募集から外す見直しを、人材採用・インセンティブ設計の実務に結び付けている"
      ],
      audience: ["スタートアップ法務", "CFO・財務", "経営企画", "証券・キャピタルマーケッツ担当", "VC・投資担当"],
      audienceReason: "2027年4月1日以降のエクイティファイナンス、私募、株式報酬について、改正前後の開示負担と使える資金調達手段を早期に設計するため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      relatedIssues: ["startup-finance-disclosure-thresholds", "startup-finance-professional-placement", "startup-finance-equity-compensation"],
      primarySourceIds: ["source-fsa-fiea-law-2026", "source-egov-fiea-startup-capital-2027"],
      reformEventId: "fiea-startup-capital-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-fiea-startup-capital-2027"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年金商法改正のうち、募集開示、特定投資家私募、株式報酬の見直しをスタートアップの資金調達手段として独立整理した。"
    },
    {
      id: "article-fsa-vf-rule-20260915",
      title: "『金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-20",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／外国ファンド特例・ベンチャーファンド連携",
      status: "adopted",
      summary: "金融庁が2026年9月15日に公表した内閣府令改正の最終資料。国内スタートアップの海外進出促進のため、国内ベンチャーファンドから海外ベンチャーファンドへ出資する場合の外国ファンド特例の要件を緩和し、当該改正を9月16日から施行する。併せてグループ企業によるデジタル社債等の勧誘規制の緩和、券面不発行の預託証券の有価証券指定も実施する。",
      whyImportant: [
        "国内VCが海外VCへ出資する際の投資運用規制について、海外展開支援を目的とする外国ファンド特例の要件緩和が確定したことを一次資料で確認できる",
        "パブリックコメント結果、公布、2026年9月16日という施行日まで一つのページで追えるため、検討案と施行済みルールを混同しない",
        "スタートアップの海外進出支援を資金調達だけでなく、VC側のファンドストラクチャー・運用規制から確認できる"
      ],
      audience: ["VC・ファンド法務", "スタートアップ支援担当", "金融規制担当", "企業法務", "投資担当"],
      audienceReason: "国内ファンドから海外ベンチャーファンドへの出資を検討する際、改正後の外国ファンド特例の適用可能性と施行時点を確認するため。",
      categories: ["金融商品取引・開示・IR", "国際取引"],
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      relatedIssues: ["startup-finance-overseas-vf"],
      primarySourceIds: ["source-fsa-vf-rule-20260915"],
      reformEventId: "fiea-foreign-vf-rule-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-vf-rule-20260915"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／国内VCから海外VCへの出資に関する外国ファンド特例の要件緩和を、2026年9月16日施行の実務論点として追加した。"
    },
    {
      id: "article-miyake-cg-code-practical-20260722",
      title: "コーポレートガバナンス・コード（2026年改訂版）の実務対応― 確定版の解説／パブリックコメントの考え方／取締役会実効性評価質問事項 ―（コーポレートガバナンス・ニュース No.1）",
      publisher: "弁護士法人三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-07-22",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%82%B3%E3%83%BC%E3%83%9D%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AC%E3%83%90%E3%83%8A%E3%83%B3%E3%82%B9%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%89%EF%BC%882026%E5%B9%B4%E6%94%B9%E8%A8%82%E7%89%88%EF%BC%89/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／2026年コーポレートガバナンス・コード実装",
      status: "adopted",
      summary: "2026年改訂コーポレートガバナンス・コードを、確定版だけでなくパブリックコメント回答と取締役会実効性評価へ接続した実務解説。総会前の有価証券報告書提出、政策保有株式の売却を妨げない運用、成長投資・資源配分の議題設計を優先課題として示し、13テーマについて実務対応と取締役会実効性評価の設問例まで具体化している。",
      whyImportant: [
        "改訂内容の要約にとどまらず、2027年7月末のCG報告書対応から逆算し、開示文言ではなく取締役会の議題・年間工程を再設計する必要性を示している",
        "有価証券報告書の総会前提出について、株主総会日程・議決権行使基準日・会社法監査・金商法監査を含む工程全体の見直しとして実装論へ落としている",
        "成長投資・経営資源配分や内部統制・全社的リスク管理について、取締役会実効性評価の設問例まで示し、自己評価・改善サイクルへつなげられる",
        "政策保有株式では、CG報告書上の形式的コンプライだけでなく、売却意向を示した相手への取引縮減示唆等を含む実運用との不一致をリスクとして具体化している"
      ],
      audience: ["上場会社法務", "取締役会事務局", "経営企画・財務", "IR・開示担当", "内部監査"],
      audienceReason: "改訂コードをCG報告書の書換えだけで終わらせず、取締役会議題、年間工程、実効性評価、社内運用の見直しへ落とすため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: ["cg-code-principles-explain", "cg-code-growth-investment", "cg-code-board-function", "cg-code-pre-agm-disclosure", "cg-code-reporting-transition"],
      primarySourceIds: ["source-fsa-cg-code-2026", "source-jpx-cg-code-2026", "source-fsa-board-function-casebook-2026"],
      reformEventId: "corporate-governance-code-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jpx-cg-code-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／2026年改訂CGコードを、パブコメ回答、取締役会の議題・年間工程、実効性評価設問まで含む実装レベルで補強した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
(() => {
  const canonicalTopic = "social-insurance-expansion-2025";
  const topicAliases = new Set([
    canonicalTopic,
    "social-insurance-short-time-workers-2026",
    "social-insurance-expansion-part-time-workers",
    "social-insurance-expansion-pension-reform-2025"
  ]);
  const canonicalReform = "employee-social-insurance-expansion-2025-amendment";
  const reformAliases = new Set([
    canonicalReform,
    "pension-reform-2025-social-insurance-expansion",
    "pension-reform-social-insurance-expansion-2025"
  ]);

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
  const uniq = (values) => [...new Set((values || []).filter(Boolean))];
  const normalizeTopics = (values) => uniq((values || []).map((value) => topicAliases.has(value) ? canonicalTopic : value));

  const sourceAliases = new Map([
    ["source-mhlw-social-insurance-short-regular-sole-proprietor-2026", "source-mhlw-short-hours-self-employed-insurance-2026"],
    ["source-jps-social-insurance-premium-adjustment-2026", "source-jps-premium-adjustment-2026"],
    ["source-nenkin-short-time-expansion-20260916", "source-jps-social-insurance-expansion-2026-09-16"],
    ["source-nenkin-premium-adjustment-20260911", "source-jps-premium-adjustment-2026"],
    ["source-mhlw-short-hours-insured-status-20260914", "source-mhlw-shorttime-regular-worker-insurance-20260914"],
    ["source-mhlw-social-insurance-related-order-2026", "source-mhlw-social-insurance-wage-requirement-decree-2026"],
    ["source-jps-insurance-premium-adjustment-2026", "source-jps-premium-adjustment-2026"],
    ["source-jps-premium-adjustment-20260911", "source-jps-premium-adjustment-2026"],
    ["source-mhlw-pension-wage-threshold-decrees-20260911", "source-mhlw-pension-effective-notice-20260915"],
    ["source-mhlw-short-regular-self-employed-social-insurance-20260914", "source-mhlw-short-hours-self-employed-insurance-2026"]
  ]);
  const articleAliases = new Map([
    ["article-nenkin-short-time-expansion-20260916", "article-jps-social-insurance-expansion-2026-09-16"],
    ["article-nenkin-premium-adjustment-20260911", "article-jps-premium-adjustment-2026"],
    ["article-jps-premium-adjustment-20260911", "article-jps-premium-adjustment-2026"],
    ["article-jps-insurance-premium-adjustment-2026", "article-jps-premium-adjustment-2026"],
    ["article-tmi-pension-reform-20250620", "article-tmi-pension-reform-2025"],
    ["article-tmi-pension-reform-social-insurance-20250620", "article-tmi-pension-reform-2025"],
    ["article-tmi-labor-update-social-insurance-20260915", "article-tmi-labor-update-social-insurance-2026-09-15"],
    ["article-mhlw-short-hours-insured-status-20260914", "article-mhlw-shorttime-regular-worker-insurance-20260914"],
    ["article-mhlw-short-regular-self-employed-social-insurance-20260914", "article-mhlw-short-hours-self-employed-insurance-2026"]
  ]);
  const issueAliases = new Map([
    ["social-insurance-2026-wage-requirement", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-2027-enterprise-size", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-2026-premium-adjustment", "social-insurance-premium-adjustment-2026"],
    ["social-insurance-2029-individual-establishments", "social-insurance-individual-business-expansion-2029"],
    ["social-insurance-formal-qualification-substance-2026", "social-insurance-short-hours-qualification-2026"],
    ["social-insurance-wage-threshold-abolition", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-enterprise-size-expansion", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-individual-business-expansion", "social-insurance-individual-business-expansion-2029"],
    ["social-insurance-premium-adjustment", "social-insurance-premium-adjustment-2026"],
    ["social-insurance-short-regular-self-employed-qualification", "social-insurance-short-hours-qualification-2026"],
    ["social-insurance-wage-threshold", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-company-size", "social-insurance-short-time-coverage-expansion"],
    ["social-insurance-individual-business", "social-insurance-individual-business-expansion-2029"],
    ["social-insurance-substance-freelancer-shorttime", "social-insurance-short-hours-qualification-2026"],
    ["social-insurance-nominal-employment-qualification-2026", "social-insurance-short-hours-qualification-2026"]
  ]);

  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const seenSocialSourceIds = new Set();
  const seenSocialSourceUrls = new Set();
  window.SOURCE_DATA = existingSources.filter((source) => {
    if (!source) return false;
    const wasSocial = (source.topics || []).some((value) => topicAliases.has(value));
    if (wasSocial) source.topics = normalizeTopics(source.topics);
    if (!wasSocial) return true;
    const normalized = normalizeUrl(source.url);
    if (seenSocialSourceIds.has(source.id) || (normalized && seenSocialSourceUrls.has(normalized))) return false;
    if (source.id) seenSocialSourceIds.add(source.id);
    if (normalized) seenSocialSourceUrls.add(normalized);
    return true;
  });

  const validSourceIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id).filter(Boolean));
  const mapSourceIds = (values) => uniq((values || []).map((value) => sourceAliases.get(value) || value).filter((value) => validSourceIds.has(value)));

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  for (const article of existingArticles) {
    if (!article) continue;
    const isSocial = (article.relatedTopics || []).some((value) => topicAliases.has(value)) || reformAliases.has(article.reformEventId);
    if (!isSocial) continue;
    article.relatedTopics = normalizeTopics(article.relatedTopics);
    article.relatedIssues = uniq((article.relatedIssues || []).map((value) => issueAliases.get(value) || value));
    if (Array.isArray(article.primarySourceIds)) article.primarySourceIds = mapSourceIds(article.primarySourceIds);
    if (Array.isArray(article.reformStageSourceIds)) article.reformStageSourceIds = mapSourceIds(article.reformStageSourceIds);
    if (Array.isArray(article.reformEffectiveDateSourceIds)) article.reformEffectiveDateSourceIds = mapSourceIds(article.reformEffectiveDateSourceIds);
    if (reformAliases.has(article.reformEventId)) article.reformEventId = canonicalReform;
  }
  window.ARTICLE_DATA = existingArticles;

  const validArticleIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id).filter(Boolean));
  const mapArticleIds = (values) => uniq((values || []).map((value) => articleAliases.get(value) || value).filter((value) => validArticleIds.has(value)));

  const allTopics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const canonical = allTopics.find((item) => item && item.slug === canonicalTopic);
  const aliases = allTopics.filter((item) => item && topicAliases.has(item.slug));
  if (canonical) {
    canonical.lastUpdated = "2026-09-20";
    canonical.lastVerified = "2026-09-20";
    canonical.sourceIds = mapSourceIds(aliases.flatMap((item) => item.sourceIds || []));
    const linkedArticles = (window.ARTICLE_DATA || [])
      .filter((item) => item && (item.relatedTopics || []).includes(canonicalTopic))
      .map((item) => item.id);
    canonical.referenceArticleIds = mapArticleIds([
      ...aliases.flatMap((item) => item.referenceArticleIds || []),
      ...linkedArticles
    ]);
    canonical.practicalImpacts = uniq(aliases.flatMap((item) => item.practicalImpacts || []));

    canonical.issues = (canonical.issues || []).filter((issue) => issue && issue.id !== "social-insurance-nominal-employment-qualification-2026");
    for (const issue of canonical.issues) {
      issue.sourceIds = mapSourceIds(issue.sourceIds);
    }
    const qualification = canonical.issues.find((issue) => issue && issue.id === "social-insurance-short-hours-qualification-2026");
    if (qualification) {
      qualification.conclusion = "契約名義ではなく常用的使用関係の実態を確認し、報酬が経常的な業務対価といえないことと、業務が経常的な労務提供といえないことの双方に該当する場合は、原則として健康保険・厚生年金保険の被保険者資格を有しないものとして取り扱う。";
      qualification.exception = "二つの要素の一方だけに該当する場合や、会費等が報酬以下である場合でも直ちに資格の有無が決まるわけではなく、労働時間、業務内容、報酬と会費等の関係その他の就労実態を総合判断する。通常の短時間勤務者を一律に資格なしとするものではない。";
      qualification.uncertain = "個別案件でどの程度の勤務時間・業務内容・費用負担が常用的使用関係を否定するかは、一律の数値基準ではなく事実関係に応じて判断される。";
      qualification.sourceIds = mapSourceIds([
        ...(qualification.sourceIds || []),
        "source-mhlw-short-hours-self-employed-insurance-2026",
        "source-mhlw-shorttime-regular-worker-insurance-20260914",
        "source-mhlw-officer-self-employed-insurance-2026"
      ]);
    }
    const employerIssue = aliases
      .flatMap((item) => item.issues || [])
      .find((issue) => issue && issue.id === "social-insurance-employer-preparation");
    if (employerIssue && !canonical.issues.some((issue) => issue && issue.id === employerIssue.id)) {
      const cloned = { ...employerIssue, sourceIds: mapSourceIds(employerIssue.sourceIds) };
      canonical.issues.push(cloned);
    }
  }
  window.TOPIC_DATA = allTopics.filter((item) => item && (item.slug === canonicalTopic || !topicAliases.has(item.slug)));


  const allEvents = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const socialEvents = allEvents.filter((item) => item && reformAliases.has(item.id));
  const firstEventIndex = allEvents.findIndex((item) => item && reformAliases.has(item.id));
  const baseEvent = socialEvents.find((item) => item && item.id === canonicalReform) || socialEvents[0];
  if (baseEvent) {
    const normalizedEvent = {
      ...baseEvent,
      id: canonicalReform,
      title: "年金制度改正法・社会保険適用拡大（2025年改正）",
      eventType: "law_amendment",
      lawId: "pension-system-reform-act-2025",
      lawLabel: "年金制度改正法（令和7年法律第74号）",
      relatedTopics: [canonicalTopic],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-10-01", "2027-10-01", "2029-10-01", "2032-10-01", "2035-10-01"],
      effectiveDateNote: "短時間労働者の月額8.8万円の賃金要件撤廃と保険料調整制度は2026年10月1日。企業規模要件は2027年10月に36人以上、2029年10月に21人以上、2032年10月に11人以上へ段階的に縮小し、2035年10月1日に撤廃。常時5人以上を使用する個人事業所の業種要件は2029年10月1日に撤廃（既存の従来非適用業種事業所には経過措置）。",
      sourceIds: mapSourceIds(socialEvents.flatMap((item) => item.sourceIds || [])),
      matchSourceIds: mapSourceIds(socialEvents.flatMap((item) => item.matchSourceIds || [])),
      effectiveDateSourceIds: mapSourceIds(socialEvents.flatMap((item) => item.effectiveDateSourceIds || [])),
      articleIds: mapArticleIds(socialEvents.flatMap((item) => item.articleIds || []))
    };
    const rest = allEvents.filter((item) => !(item && reformAliases.has(item.id)));
    rest.splice(firstEventIndex < 0 ? rest.length : firstEventIndex, 0, normalizedEvent);
    window.REFORM_EVENT_DATA = rest;
  }

})();

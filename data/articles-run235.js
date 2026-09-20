(() => {
  const uniq = (values = []) => [...new Set((Array.isArray(values) ? values : []).filter(Boolean))];
  const addUnique = (values, value) => uniq([...(Array.isArray(values) ? values : []), value]);
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

  const sourceAdditions = [
    {
      id: "source-ppc-privacy-2026-subrules-basic-approach-20260916",
      title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則の整備に向けた基本的な考え方（案）について①（適正なデータ利活用の推進、リスクに適切に対応した規律①）",
      type: "guideline",
      typeLabel: "下位法令検討資料",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
      importance: "最高",
      whyImportant: "2026年改正個人情報保護法の施行に向け、同意不要例外、16歳未満の子供、顔特徴データ等について、政令・委員会規則・ガイドラインで具体化する候補と未確定事項を示す。最終ルールではなく検討案として読む必要がある。",
      topics: ["personal-information-protection-2026-amendment"]
    },
    {
      id: "source-fsa-cyber-common-reporting-forms-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "監督指針等・最終改正",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "高",
      whyImportant: "金融機関等のサイバーセキュリティ事案報告を関係省庁の共通様式へ移行し、DDoS・ランサムウェアに加えてその他サイバー攻撃等の共通様式を導入する監督指針等の最終改正と、2026年10月1日の適用日を確認できる。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    }
  ];

  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item?.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item?.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  const privacyTopic = (window.TOPIC_DATA || []).find((item) => item?.slug === "personal-information-protection-2026-amendment");
  if (privacyTopic) {
    privacyTopic.lastUpdated = "2026-09-21";
    privacyTopic.lastVerified = "2026-09-21";
    privacyTopic.sourceIds = addUnique(privacyTopic.sourceIds, "source-ppc-privacy-2026-subrules-basic-approach-20260916");
    privacyTopic.referenceArticleIds = addUnique(privacyTopic.referenceArticleIds, "article-ppc-privacy-2026-subrules-basic-approach-20260916");
    privacyTopic.referenceArticleIds = addUnique(privacyTopic.referenceArticleIds, "article-tmi-privacy-consent-exceptions-20260604");
    for (const issueId of ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"]) {
      const issue = (privacyTopic.issues || []).find((item) => item?.id === issueId);
      if (issue) issue.sourceIds = addUnique(issue.sourceIds, "source-ppc-privacy-2026-subrules-basic-approach-20260916");
    }
    if (privacyTopic.currentSummary) {
      privacyTopic.currentSummary.facts = addUnique(privacyTopic.currentSummary.facts, "個人情報保護委員会は2026年9月16日、改正法の政令・規則整備に向けた基本的な考え方（案）①を示し、同意不要例外、16歳未満の子供、顔特徴データ等について具体化の方向性を公表した。");
      privacyTopic.currentSummary.interpretations = addUnique(privacyTopic.currentSummary.interpretations, "同意不要例外では、本人以外の第三者との契約の履行に必要で本人の意思に沿うことが明らかな場合や、本人の求めに応じた契約締結前の措置などが規則で定める候補として示されたが、いずれも検討案であり最終ルールとして先取りしない。");
      privacyTopic.currentSummary.implications = addUnique(privacyTopic.currentSummary.implications, "契約履行、3-Dセキュア等の契約締結前処理、子供データ、顔認証・分析のデータフローを洗い出し、最終的な委員会規則・ガイドラインで対象範囲と周知・請求対応を再確認できるようにする。");
      privacyTopic.currentSummary.uncertain = addUnique(privacyTopic.currentSummary.uncertain, "2026年9月16日資料は政令・規則等の整備に向けた基本的な考え方（案）であり、同意不要例外の具体的範囲、顔特徴データの範囲・周知方法等は今後の委員会規則・ガイドラインで確定する。");
    }
  }

  const cyberTopic = (window.TOPIC_DATA || []).find((item) => item?.slug === "cyber-countermeasures-critical-infrastructure");
  if (cyberTopic) {
    cyberTopic.lastUpdated = "2026-09-21";
    cyberTopic.lastVerified = "2026-09-21";
    cyberTopic.sourceIds = addUnique(cyberTopic.sourceIds, "source-fsa-cyber-common-reporting-forms-20260918");
    cyberTopic.referenceArticleIds = addUnique(cyberTopic.referenceArticleIds, "article-fsa-cyber-common-reporting-forms-20260918");
    const reportingIssue = (cyberTopic.issues || []).find((item) => item?.id === "cyber-countermeasures-reporting");
    if (reportingIssue) reportingIssue.sourceIds = addUnique(reportingIssue.sourceIds, "source-fsa-cyber-common-reporting-forms-20260918");
    if (cyberTopic.currentSummary) {
      cyberTopic.currentSummary.facts = addUnique(cyberTopic.currentSummary.facts, "金融庁は2026年9月18日、金融機関等のサイバーセキュリティ事案報告について、DDoS・ランサムウェア・その他サイバー攻撃等の関係省庁共通様式へ移行する監督指針等の改正を公表し、2026年10月1日から適用するとした。");
      cyberTopic.currentSummary.interpretations = addUnique(cyberTopic.currentSummary.interpretations, "10月1日前後のサイバー報告対応では、サイバー対処能力強化法上の届出・報告と、各業法・監督指針等に基づく所管当局への報告を同一視せず、自社に適用される報告ルートと様式を制度ごとに確認する必要がある。");
      cyberTopic.currentSummary.implications = addUnique(cyberTopic.currentSummary.implications, "金融機関・金融サービス事業者では、10月1日までに旧報告様式から共通様式への切替え、社内インシデント票との項目対応、当局報告の担当・承認・証跡を確認する。");
    }
  }

  const reforms = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const privacyReform = reforms.find((item) => item?.id === "privacy-law-2026-amendment");
  if (privacyReform) privacyReform.sourceIds = addUnique(privacyReform.sourceIds, "source-ppc-privacy-2026-subrules-basic-approach-20260916");
  if (!reforms.some((item) => item?.id === "fsa-cyber-incident-reporting-forms-2026")) {
    reforms.push({
      id: "fsa-cyber-incident-reporting-forms-2026",
      title: "金融庁監督指針等・サイバーインシデント報告共通様式への移行",
      eventType: "regulation_or_guideline",
      lawId: "fsa-cyber-incident-reporting-guidelines",
      lawLabel: "金融庁監督指針等・サイバーインシデント報告",
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-10-01"],
      effectiveDateSourceIds: ["source-fsa-cyber-common-reporting-forms-20260918"],
      articleIds: ["article-fsa-cyber-common-reporting-forms-20260918"],
      sourceIds: ["source-fsa-cyber-common-reporting-forms-20260918"]
    });
  }
  window.REFORM_EVENT_DATA = reforms;

  const articleAdditions = [
    {
      id: "article-ppc-privacy-2026-subrules-basic-approach-20260916",
      title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則の整備に向けた基本的な考え方（案）について①（適正なデータ利活用の推進、リスクに適切に対応した規律①）",
      publisher: "個人情報保護委員会", author: "個人情報保護委員会", publishedAt: "2026-09-16", collectedAt: "2026-09-21",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf", sourceType: "primary", sourceLabel: "一次資料・個人情報保護委員会／政令・規則整備方針（案）①", status: "adopted",
      summary: "2026年改正個人情報保護法の施行に向け、個人情報保護委員会が政令・規則等で具体化する事項の検討方向を示した資料。本人同意を不要とする新たな例外について、本人以外の第三者との契約履行に必要で本人の意思に沿うことが明らかな場合や、本人の求めに応じた契約締結前の措置を規則で定める候補として示すほか、16歳未満の子供に関する法定代理人対応、顔特徴データ等の特定生体個人情報の範囲・周知・利用停止等の具体化を検討している。いずれも基本的な考え方の案であり、最終的な委員会規則・ガイドラインではない。",
      whyImportant: ["改正法だけでは抽象的だった同意不要例外について、家族等のための予約や本人の求めに応じた契約締結前の処理など、規則で定める候補となる具体場面を確認できる", "16歳未満の子供と顔特徴データ等について、法律で導入された規律のうち何が下位法令・ガイドラインでなお具体化待ちなのかを切り分けられる", "検討案と確定ルールを分けて管理することで、施行前のシステム・規程改修を進めつつ、未確定部分を先取りして固定するリスクを避けられる"],
      audience: ["企業法務", "プライバシー・個人情報保護担当", "プロダクト・データ担当", "EC・決済担当", "顔認証・カメラサービス担当"], audienceReason: "改正法対応で、同意取得画面、年齢・法定代理人対応、顔特徴データの周知・利用停止導線をどこまで先行設計し、何を最終ルール待ちにするか切り分けるため。",
      categories: ["個人情報", "AI・デジタル"], relatedTopics: ["personal-information-protection-2026-amendment"], relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"], primarySourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-2026-subrules-basic-approach-20260916"], reformEventId: "privacy-law-2026-amendment", reformStageAtPublication: "proposal", reformStageSourceIds: ["source-ppc-privacy-2026-subrules-basic-approach-20260916"], legacyReformInference: false,
      whatChanged: "下位法令検討更新／同意不要例外、16歳未満の子供、顔特徴データ等について、政令・規則・ガイドラインで具体化する候補と未確定事項を追加した。"
    },
    {
      id: "article-tmi-privacy-consent-exceptions-20260604", title: "[連載] 令和8年改正個人情報保護法研究：《第5回》同意取得に係る例外要件の緩和", publisher: "TMI総合法律事務所", author: "TMI総合法律事務所", publishedAt: "2026-06-04", collectedAt: "2026-09-21", url: "https://www.tmi.gr.jp/eyes/blog/2026/18421.html", sourceType: "secondary", sourceLabel: "実務解説・TMI／2026年個人情報保護法案・同意例外", status: "adopted",
      summary: "2026年個人情報保護法改正案の同意取得例外を、現行法との違いと実務上の未確定点から掘り下げる解説。契約履行に必要な取扱いの例外が外国第三者提供時の情報提供実務へ与える影響、要件の『必要やむを得ない』の厳格さ、本人と直接契約しない仲介事業者が使えるか、取得時点と後発事情の関係、公衆衛生等の例外で新設される『相当の理由』の射程などを論点化している。後に法律は成立したが、記事公開時点では法案段階であり、具体的な適用範囲は下位法令・ガイドラインでの確認が必要である。",
      whyImportant: ["同意例外を単なる負担軽減とせず、外国第三者提供で同意時の外国制度等の情報提供が不要となり得る実務インパクトまで具体化している", "『必要やむを得ない』の解釈、本人と直接契約しない仲介事業者、契約後に生じた事情など、一次資料だけでは見落としやすい境界事例を整理している", "GDPRの契約必要性との比較も踏まえ、例外を広く使えると決めつけず、規則・ガイドラインの具体化を待つべき不確実性を明示している"],
      audience: ["企業法務", "プライバシー・個人情報保護担当", "EC・旅行・決済サービス担当", "グローバルデータ管理担当", "プロダクト担当"], audienceReason: "同意取得を省略できる可能性のあるデータフローを棚卸ししつつ、契約関係・越境提供・取得時点によって例外の射程が変わる論点を先に把握するため。", categories: ["個人情報", "AI・デジタル", "国際取引"], relatedTopics: ["personal-information-protection-2026-amendment"], relatedIssues: ["privacy-2026-consent-exceptions"], primarySourceIds: ["source-privacy-law-2026-proposal", "source-privacy-law-2026-amendment"], reformEventId: "privacy-law-2026-amendment", reformStageAtPublication: "proposal", reformStageSourceIds: ["source-privacy-law-2026-proposal"], legacyReformInference: false,
      whatChanged: "実務解説補強／同意取得例外について、越境提供、契約必要性、仲介者、取得時点等の境界事例と未確定点を補強した。"
    },
    {
      id: "article-fsa-cyber-common-reporting-forms-20260918", title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について", publisher: "金融庁", author: "金融庁", publishedAt: "2026-09-18", collectedAt: "2026-09-21", url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html", sourceType: "primary", sourceLabel: "一次資料・金融庁／サイバーインシデント報告共通様式への移行", status: "adopted",
      summary: "関係省庁が2026年9月15日に改正したサイバー攻撃被害報告の申合せを受け、金融庁が各種監督指針・事務ガイドラインのサイバーセキュリティ事案報告を共通様式へ移行する最終改正。従来のDDoS攻撃事案・ランサムウェア事案に加えて『その他サイバー攻撃等事案共通様式』が新設され、主要行、地域金融機関、保険、金融商品取引業、貸金、資金移動、暗号資産等の広い業態で2026年10月1日から適用される。",
      whyImportant: ["金融機関等のサイバーインシデント報告について、パブリックコメント段階ではなく最終改正と2026年10月1日の適用日を一次資料で確認できる", "DDoS・ランサムウェア以外のサイバー攻撃等にも共通様式が整備され、旧様式からの切替えが必要になることを把握できる", "サイバー対処能力強化法上の報告と、各業法・監督指針に基づく金融庁報告を分けて社内報告ルート・様式を設計する材料になる"],
      audience: ["金融機関法務", "金融規制担当", "情報セキュリティ担当", "危機管理・BCP担当", "コンプライアンス担当"], audienceReason: "2026年10月1日の適用開始までに、サイバー事案の社内認知から金融庁報告までの様式、担当、承認、証跡を共通様式へ合わせるため。", categories: ["情報セキュリティ", "危機管理・コンプライアンス", "金融商品取引・開示・IR"], relatedTopics: ["cyber-countermeasures-critical-infrastructure"], relatedIssues: ["cyber-countermeasures-reporting"], primarySourceIds: ["source-fsa-cyber-common-reporting-forms-20260918"], reformEventId: "fsa-cyber-incident-reporting-forms-2026", reformStageAtPublication: "finalized_pending", reformStageSourceIds: ["source-fsa-cyber-common-reporting-forms-20260918"], reformEffectiveDates: ["2026-10-01"], reformEffectiveDateSourceIds: ["source-fsa-cyber-common-reporting-forms-20260918"], legacyReformInference: false,
      whatChanged: "監督指針更新／金融庁所管の幅広い金融事業者について、サイバー事案報告を関係省庁共通様式へ移行し、2026年10月1日から適用する最終改正を追加した。"
    }
  ];
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item?.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item?.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat(articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url))));
})();

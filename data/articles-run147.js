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

  const articles = [
    {
      id: "article-meti-ad-circumvention-applicant-guide-2026",
      title: "不当廉売関税（アンチダンピング関税）の課税の回避のために第三国から輸入される貨物等に対して関税を課することを求める書面の作成の手引き",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-04-24",
      collectedAt: "2026-09-15",
      url: "https://www.meti.go.jp/policy/external_economy/trade_control/boekikanri/trade-remedy/petition/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料／不当廉売関税・迂回防止制度申請手引き",
      status: "adopted",
      summary: "2026年4月1日に施行された不当廉売関税の迂回防止制度について、課税を求める申請書の作成に必要な情報・証拠への公式導線を示す経済産業省の手引き。第三国加工、軽微変更、輸入国での最終加工等による迂回について、調査開始を求める側がどのような事実を整理すべきかを確認する基礎資料となる。",
      whyImportant: [
        "迂回防止制度の施行後に公表された公式の申請実務資料であり、制度を実際に利用する際の入口になる",
        "供給国、加工工程、品目、輸入実績、国内産業への影響など、申請前に収集すべき証拠を具体化する手掛かりになる",
        "企業側では自社サプライチェーンが申請・調査の対象になり得る場合に、相手方がどの事実を立証しようとするかを逆算して確認できる"
      ],
      audience: ["企業法務", "貿易管理・通関担当", "調達・サプライチェーン担当", "製造業"],
      audienceReason: "アンチダンピング措置対象品を扱う取引について、迂回防止調査の申請・被申請双方の観点から必要情報と証拠を準備するため。",
      categories: ["国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["anti-dumping-anti-circumvention-2026"],
      relatedIssues: ["ad-circumvention-three-types", "ad-circumvention-investigation-procedure", "ad-circumvention-exclusion-economic-justification"],
      primarySourceIds: ["source-customs-tariff-amendment-2026", "source-mof-customs-amendment-bill-2026", "source-meti-ad-circumvention-applicant-guide-2026"],
      reformEventId: "customs-tariff-ad-circumvention-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-customs-tariff-amendment-2026", "source-mof-customs-amendment-bill-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／2026年施行の不当廉売関税迂回防止制度について、申請実務と必要証拠への公式導線を追加した。"
    },
    {
      id: "article-mof-ad-circumvention-guideline-update-2026",
      title: "「不当廉売関税に関する手続等についてのガイドライン」の改正について",
      publisher: "財務省・関税外国為替等審議会",
      author: "財務省関税局",
      publishedAt: "2026-06-23",
      collectedAt: "2026-09-15",
      url: "https://www.mof.go.jp/about_mof/councils/customs_foreign_exchange/sub-of_customs/proceedings_tokusyu/material/20260623/kanb20260623siryo7.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／施行済み・不当廉売関税迂回防止ガイドライン改正",
      status: "adopted",
      summary: "迂回防止制度の施行に伴う不当廉売関税ガイドライン改正を整理した財務省資料。原則10か月の調査について重要事実開示を8か月後とする標準工程、輸入・損害の調査対象期間、第三国・軽微変更・輸入国迂回の具体的要件、原措置の正常価格の利用、供給者の実質同一性、経済的正当性による除外申請の考慮要素まで示している。",
      whyImportant: [
        "法律・政省令だけでは分からない迂回防止調査の標準工程と証拠収集期間を一次資料で確認できる",
        "第三国迂回・軽微変更迂回・輸入国迂回ごとの要件と、部品価額・付加価値等の目安を把握できる",
        "経済的正当性について企業設立時期、設備投資、生産・輸出・販売開始、価格等を総合考慮する運用が示され、除外申請の準備に直結する",
        "原措置の正常価格と税率を基礎に迂回品を評価するため、通常の新規AD調査とは異なるリスク評価が必要だと分かる"
      ],
      audience: ["企業法務", "貿易管理・通関担当", "調達・サプライチェーン担当", "製造業"],
      audienceReason: "第三国加工や国内最終組立てを含む国際サプライチェーンについて、迂回該当性・調査対応・除外申請を制度の具体的運用から評価するため。",
      categories: ["国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["anti-dumping-anti-circumvention-2026"],
      relatedIssues: ["ad-circumvention-three-types", "ad-circumvention-duty-requirements", "ad-circumvention-investigation-procedure", "ad-circumvention-exclusion-economic-justification"],
      primarySourceIds: ["source-customs-tariff-amendment-2026", "source-mof-ad-circumvention-guideline-update-2026"],
      reformEventId: "customs-tariff-ad-circumvention-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-customs-tariff-amendment-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／迂回防止調査の標準工程、三類型の課税要件、経済的正当性・除外申請まで最終運用を整理した。"
    },
    {
      id: "article-amt-japan-ad-anti-circumvention-2026",
      title: "Japan’s 2026 Revision of the Customs Act and related laws: Introducing the Anti-Circumvention System for Anti-Dumping Measures",
      publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
      author: "Yutaka Shimoo・Naoko Takasaki・Shun Sawada",
      publishedAt: "2026-05-29",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260529001_en_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／2026年関税改正・AD迂回防止",
      status: "adopted",
      summary: "2026年改正で導入された不当廉売関税の迂回防止制度を、第三国迂回・軽微変更迂回・輸入国迂回の三類型、原措置の迂回品への拡張要件、ダンピング・マージンを再計算しない迅速化、原則10か月の調査期間という構造から説明する実務解説。通常の輸入・加工設計が新制度の対象となり得る点を国際取引企業向けに整理している。",
      whyImportant: [
        "三つの迂回類型をサプライチェーン上の具体的な加工・原産国・HS分類の変更として理解できる",
        "迂回の事実と国内産業への実質的損害が認められる場合に原措置が拡張されるという制度構造を簡潔に整理している",
        "原措置の正常価格を用いて迅速にダンピングを確認し、通常のAD調査より短い原則10か月で最終判断する点を実務リスクとして示している",
        "輸入・製造・調達を行う企業が2026年改正全体をサプライチェーン管理の観点から確認すべきことを示している"
      ],
      audience: ["企業法務", "貿易管理・通関担当", "調達・サプライチェーン担当", "製造業"],
      audienceReason: "海外加工、部品輸入、HS分類変更を伴う取引で、アンチダンピング措置の迂回と評価されるリスクを案件初期から確認するため。",
      categories: ["国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["anti-dumping-anti-circumvention-2026"],
      relatedIssues: ["ad-circumvention-three-types", "ad-circumvention-duty-requirements", "ad-circumvention-investigation-procedure"],
      primarySourceIds: ["source-customs-tariff-amendment-2026", "source-mof-customs-amendment-bill-2026", "source-meti-ad-circumvention-applicant-guide-2026", "source-mof-ad-circumvention-guideline-update-2026"],
      reformEventId: "customs-tariff-ad-circumvention-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-customs-tariff-amendment-2026", "source-mof-customs-amendment-bill-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／第三国・軽微変更・輸入国迂回の三類型と、原措置を迅速に拡張する制度構造を実務解説で補完した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

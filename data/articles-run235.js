(() => {
  const article = (window.ARTICLE_DATA || []).find(
    (item) => item && item.id === "article-ppc-privacy-rulemaking-basic-1-2026"
  );
  if (article) {
    article.reformStageAtPublication = "proposal";
    article.reformStageSourceIds = ["source-ppc-privacy-rulemaking-basic-1-2026"];
  }
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
  const addition = {
    id: "article-tmi-disability-discrimination-overview-20240625",
    title: "障害者差別解消法（１）障害者差別解消法の概要",
    publisher: "TMI総合法律事務所",
    author: "菊田行紘、遠山夏子、伊勢智子、水田進、森安博行、伊藤憲昭、伏見純子",
    publishedAt: "2024-06-25",
    collectedAt: "2026-09-21",
    url: "https://www.tmi.gr.jp/eyes/blog/2024/15869.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／障害者差別解消法の全体像",
    status: "adopted",
    summary: "2024年4月1日に施行された改正障害者差別解消法について、環境の整備、不当な差別的取扱い、合理的配慮という三つの柱を民間事業者の実務から概観する。合理的配慮が努力義務から法的義務へ変わった点に加え、主務大臣による報告徴収・助言・指導・勧告と、報告義務違反時の過料まで整理する。",
    whyImportant: [
      "改正後の民間事業者の対応を、環境整備・差別禁止・合理的配慮という三つの柱で一度に確認できる",
      "合理的配慮が画一的な措置ではなく、障害の状態や具体的な場面に応じて個別に検討されることを基本方針の例とともに説明している",
      "制度違反を直ちに罰則と捉えるのではなく、主務大臣の報告徴収・助言・指導・勧告という行政対応まで含めて全体像を把握できる"
    ],
    audience: ["企業法務", "コンプライアンス", "顧客対応・店舗運営", "サービス企画・UX"],
    audienceReason: "2024年改正後の障害者対応を社内ルールへ落とす前提として、民間事業者に課される義務と行政対応の全体像を把握するため。",
    categories: ["危機管理・コンプライアンス", "契約"],
    relatedTopics: ["disability-discrimination-reasonable-accommodation"],
    relatedIssues: [
      "disability-discrimination-scope-employment-boundary",
      "disability-discrimination-unjust-treatment",
      "disability-discrimination-reasonable-accommodation-duty",
      "disability-discrimination-operational-design"
    ],
    primarySourceIds: [
      "source-cao-disability-discrimination-act",
      "source-cao-disability-discrimination-basic-policy-2023",
      "source-cao-reasonable-accommodation-cases"
    ],
    legacyReformInference: false,
    whatChanged: "バックフィル／既存の合理的配慮・環境整備・不当な差別的取扱いの各論に対し、2024年改正後の制度全体像と行政対応を横断する導入解説を補完した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
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
  const addition = {
    id: "article-tmi-dnfbp-aml-cft-20260917",
    title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
    publisher: "TMI総合法律事務所",
    author: "TMI総合法律事務所",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-21",
    url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／DNFBPsのAML・CFT実装",
    status: "adopted",
    summary: "FATF第5次対日相互審査を見据え、特定非金融業者・職業専門家（DNFBPs）について、犯罪収益移転防止法上の取引時確認・記録保存・疑わしい取引の届出等の義務、業種別ガイドライン、リスクベース・アプローチ、内部管理・監査を事業会社の運用単位で整理する。形式的な体制整備だけでなく、疑わしい取引届出等の実績を含む有効性が問われることや、DNFBPsに該当しない事業会社でも自社サービスの悪用リスクを管理すべきことまで扱う。",
    whyImportant: [
      "財務省のIO4一次資料が示すDNFBPsの有効性評価を、取引時確認、記録保存、疑わしい取引届出、教育・規程・統括管理者・監査という具体的な社内統制へ落としている",
      "リスクベース・アプローチを法定の取引時確認義務を緩める考え方と誤解せず、法令上の最低線とリスクに応じた追加管理を分けて説明している",
      "犯収法上の特定事業者に該当しない企業についても、自社サービスのマネロン悪用、金融機関等による取引時確認への協力、組織的犯罪処罰法・外為法等を含む周辺リスクを実務上の管理対象として示している"
    ],
    audience: ["企業法務・コンプライアンス", "不動産・宝石等の特定事業者", "内部監査", "リスク管理", "事業企画"],
    audienceReason: "FATF第5次対日相互審査に向け、DNFBPとしての法定義務を一覧化するだけでなく、業種別ガイドライン、リスク評価、疑わしい取引届出、内部管理・監査を実際の業務フローへ落とすため。",
    categories: ["危機管理・コンプライアンス", "金融規制"],
    relatedTopics: ["aml-kyc-criminal-proceeds"],
    relatedIssues: ["aml-dnfbp-governance"],
    primarySourceIds: ["source-mof-fatf-io4-dnfbps-20260918", "source-npa-aml-overview-2026"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／財務省のIO4一次資料で整理したDNFBPの有効性論点に、犯収法上の義務、業種別ガイドライン、内部管理・監査、非対象企業のリスク管理という実装視点を追加した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
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
    id: "article-businesslawyers-miura-whistleblower-regulation-20260916",
    title: "改正公益通報者保護法を踏まえた内部通報規程のポイント",
    publisher: "BUSINESS LAWYERS",
    author: "坂尾 佑平（三浦法律事務所）",
    publishedAt: "2026-09-16",
    collectedAt: "2026-09-23",
    url: "https://www.businesslawyers.jp/practices/1496",
    sourceType: "secondary",
    sourceLabel: "実務解説・三浦法律事務所／公益通報者保護法・内部通報規程",
    status: "adopted",
    summary: "2025年改正公益通報者保護法と2026年3月31日改正の法定指針・指針解説を踏まえ、内部通報規程をどう改訂するかを条項レベルで整理する。特定受託業務従事者等を窓口利用者へ加える際の定義、通報妨害・通報者探索の禁止と正当理由がある場合の例外、内部窓口以外への公益通報に関して調査・是正が必要となる場合の独立性・対応業務・利益相反排除を、内部規程例に即して示し、改正点だけでなく制度全体の機能不全も併せて見直すべきとする。",
    whyImportant: [
      "改正法と法定指針の差分を抽象的に説明するだけでなく、フリーランス等の窓口利用者追加、通報妨害・通報者探索の禁止を内部規程の定義・禁止条項へどう落とすかを具体化している",
      "通報妨害・通報者探索には正当な理由が認められ得る場面があることも示しており、禁止を一律・機械的に書くのではなく、調査上必要な照会との境界を規程・教育へ反映できる",
      "内部通報窓口を経由しない公益通報でも調査・是正が必要な場合には、幹部からの独立性、適切な対応業務、利益相反排除を確保する必要があるという運用上の見落としを拾える",
      "法改正対応を条文差分の追記で終わらせず、既存の内部通報制度で機能していない仕組みがないかを規程全体から棚卸しする視点が得られる"
    ],
    audience: ["企業法務", "コンプライアンス", "内部通報窓口", "人事・労務", "内部監査"],
    audienceReason: "2026年12月1日の改正法施行前に、内部通報規程、窓口利用者の範囲、通報妨害・探索防止、独立性・利益相反管理、外部通報を認識した場合の調査是正フローを具体的に改訂するため。",
    categories: ["危機管理・コンプライアンス", "労務"],
    relatedTopics: ["whistleblower-internal-reporting"],
    relatedIssues: ["wb-retaliation-employment", "wb-system-controls"],
    primarySourceIds: ["source-caa-whistleblower-amendment-2025", "source-whistleblower-guideline-2026"],
    reformEventId: "whistleblower-protection-2025-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-caa-whistleblower-amendment-2025", "source-whistleblower-guideline-2026"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／改正公益通報者保護法と改正法定指針を、内部通報規程の利用者範囲、通報妨害・探索防止、外部通報事案の独立性・利益相反管理へ条項レベルで落とす解説を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id);
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "whistleblower-internal-reporting");
  if (topic && articleExists) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);
  }
  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === article.reformEventId);
  if (reform && articleExists) {
    reform.articleIds = addUnique(reform.articleIds, article.id);
  }
})();

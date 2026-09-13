(() => {
  const collectedAt = "2026-09-13";
  const topicSlug = "securities-monitoring-internal-controls";
  const policySourceId = "source-sesc-securities-monitoring-policy-2026";
  const casebookSourceId = "source-sesc-securities-monitoring-casebook-2026";

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

  const appendUnique = (target, additions, getId, getUrl) => {
    const current = target || [];
    const ids = new Set(current.map(getId).filter(Boolean));
    const urls = new Set(current.map(getUrl).map(normalizeUrl).filter(Boolean));
    const accepted = [];
    for (const item of additions || []) {
      const id = getId(item);
      const url = normalizeUrl(getUrl(item));
      if ((id && ids.has(id)) || (url && urls.has(url))) continue;
      accepted.push(item);
      if (id) ids.add(id);
      if (url) urls.add(url);
    }
    return current.concat(accepted);
  };

  window.SOURCE_DATA = appendUnique(
    window.SOURCE_DATA,
    [
      {
        id: policySourceId,
        title: "令和8事務年度 証券モニタリング基本方針",
        type: "guideline",
        typeLabel: "監督・検査方針／一次資料",
        authority: "証券取引等監視委員会",
        publishedAt: "2026-07-31",
        url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
        importance: "最高",
        whyImportant: "2026年7月から2027年6月までの証券モニタリングについて、業態横断・業態別の重点検証事項と検査の進め方を示す公式方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理・ガバナンス等の当年度の監督上の重点を確認できる。",
        topics: [topicSlug]
      },
      {
        id: casebookSourceId,
        title: "証券モニタリング概要・事例集（令和8年7月）",
        type: "report",
        typeLabel: "検査事例集／一次資料",
        authority: "証券取引等監視委員会",
        publishedAt: "2026-07-31",
        url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
        importance: "最高",
        whyImportant: "令和7事務年度の検査・モニタリングで把握された勧告・指摘と過年度の検査指摘事例を、業態・論点別に確認できる。翌年度方針の重点事項を具体的な内部管理上の失敗例へ落とす基礎資料。",
        topics: [topicSlug]
      }
    ],
    (item) => item && item.id,
    (item) => item && item.url
  );

  const topic = {
    slug: topicSlug,
    title: "証券モニタリング・金融商品取引業者の内部管理",
    categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
    summary: "証券取引等監視委員会の令和8事務年度方針と検査事例を基礎に、金融商品取引業者等の顧客本位・適合性、システムリスク、AML/CFT、ガバナンス・内部管理、業態別の重点検証事項を実務対応として整理する。",
    lastUpdated: collectedAt,
    lastVerified: collectedAt,
    isNew: true,
    overview: [
      "証券モニタリングは、金融商品取引業者等について法令違反の有無だけを見るのではなく、経営管理、内部管理、リスク管理、監査、危機管理を含む業務運営態勢の実効性をリスクベースで確認する行政運用です。",
      "令和8事務年度は2026年7月から2027年6月までを対象とし、顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢を業態横断の重点事項として掲げています。",
      "実務では、基本方針をチェックリスト化するだけでなく、前年度の検査指摘事例と自社の業態・商品・顧客・システム・株主構成等を対応させ、内部監査や改善計画へつなげる必要があります。"
    ],
    currentSummary: {
      facts: [
        "証券取引等監視委員会は2026年7月31日、令和8事務年度（2026年7月から2027年6月）の証券モニタリング基本方針を公表した。",
        "業態横断の重点事項は、顧客の最善の利益を勘案した業務運営・適合性、システムリスク、AML/CFT、内部管理態勢の実効性確保の4本柱で整理されている。",
        "規模・業態別には、大手・外資系・ネット系・準大手／地域証券、FX、投資運用、投資助言、第二種、登録金融機関、金融商品仲介等について、それぞれのリスクに応じた検証事項が示されている。",
        "同日公表の証券モニタリング概要・事例集は、令和7事務年度の検査結果と過年度の指摘事例を業態・論点別に掲載し、内部管理態勢の自主的な改善への活用を想定している。"
      ],
      interpretations: [
        "当年度の重点事項に名前が挙がっていない論点が直ちに低リスクになるわけではなく、過年度の指摘や自社固有のリスクを含めて管理する必要がある。",
        "監督上の重点は、規程の有無よりも業容・商品・顧客・システムの変化に内部管理が追随しているかという実効性の確認に寄っている。",
        "方針と事例集をセットで読むことで、抽象的な検証事項を商品審査、販売管理、サイバー対策、利益相反、外部委託、監査フォロー等の具体的な統制へ落とし込みやすい。"
      ],
      implications: [
        "コンプライアンス・内部監査部門は、令和8事務年度方針と前年度の検査指摘事例を自社のリスクアセスメント・監査計画へマッピングする。",
        "新商品・新サービス、主要株主・経営体制の変更、非対面化・外部委託等がある場合は、変更後の業容に内部管理・システム・監査が追随しているかを再点検する。",
        "顧客本位・適合性では対象顧客設定、説明方法、短期乗換え、社内ルール遵守のモニタリングを一連の販売管理として確認する。",
        "システムリスク、AML/CFT、利益相反等は、担当部署単独の論点ではなく経営課題・ガバナンスとしてエスカレーションと改善状況を追跡する。"
      ],
      uncertain: [
        "証券モニタリングの重点は事務年度ごとに更新されるため、2027年7月以降は次年度方針との入替え・差分確認が必要になる。",
        "個別業者で実際にどの事項が重点検証されるかは、業態、商品、顧客、過去の指摘、ビジネスモデル変更等のリスク特性により異なる。"
      ]
    },
    issues: [
      {
        id: "securities-monitoring-best-interest",
        title: "顧客本位・適合性・説明態勢をどう点検するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "複雑・高リスク商品の対象顧客設定、顧客属性とデジタル・リテラシーに応じた説明、合理性のない短期乗換えの防止、社内ルールの遵守状況を一連の販売管理として検証する。",
        exception: "重点項目は業態・商品・顧客構成によって具体化の仕方が異なり、一律の説明・審査手順を要求する趣旨ではない。",
        uncertain: "個別商品の合理的根拠適合性や説明水準は商品特性・対象顧客等に応じた個別検討が必要である。",
        sourceIds: [policySourceId, casebookSourceId]
      },
      {
        id: "securities-monitoring-system-risk",
        title: "不正アクセス・サイバー・AI脅威をシステムリスク管理へどう反映するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "監督指針やフロンティアAIによる脅威変化等を踏まえ、サイバー攻撃・不正アクセス・不正取引を含むシステムリスク管理を経営上の重大課題として点検する。",
        exception: "必要な対策はネット系証券に限られず、インターネット取引や重要システムを有する他の金商業者等でも自社リスクに応じて検討する。",
        uncertain: "技術的脅威と当局の具体的な期待水準は変化が速いため、監督指針・要請・業界対応を継続確認する必要がある。",
        sourceIds: [policySourceId]
      },
      {
        id: "securities-monitoring-aml",
        title: "AML/CFT態勢の定着・高度化をどう確認するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "マネロンガイドラインの『対応が求められる事項』を基礎に、態勢整備だけでなく運用への定着と高度化の状況を確認する。",
        exception: "顧客・商品・取引チャネル・地域等のリスク特性によって必要な管理は異なる。",
        uncertain: "改訂ガイドラインやリスク環境の変化に応じて、評価・モニタリングの内容は継続的な更新が必要である。",
        sourceIds: [policySourceId]
      },
      {
        id: "securities-monitoring-governance",
        title: "業容・株主・経営体制の変化に内部管理をどう追随させるか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "主要株主・経営体制・ビジネスモデル・業務運営拠点等の変化を起点に、変更後の業容へ内部管理、ガバナンス、内部監査、改善・再発防止が追随しているかを再評価する。",
        exception: "重大事故や法令違反が顕在化していなくても、業容に応じた内部管理の実効性自体が検証対象になり得る。",
        uncertain: "どの変化を重要変更として再評価するかは、業務規模・商品・システム・外部委託等の実態に応じた判断が必要である。",
        sourceIds: [policySourceId, casebookSourceId]
      },
      {
        id: "securities-monitoring-business-type",
        title: "業態別の重点事項を自社統制へどう落とすか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "大手・ネット系・地域証券、投資運用、投資助言、第二種、登録金融機関、仲介業者等の業態別検証事項を、自社の商品審査、販売、外部委託、利益相反、売買管理、監査等の統制へ対応付ける。",
        exception: "業態ラベルだけでチェック項目を固定せず、複数業態・新規サービス・買収後の事業変更など実際のリスク構造を優先する。",
        uncertain: "新規サービスやビジネスモデルの変化について、どの統制が十分かは検査事例や自主規制機関の運用を継続確認する必要がある。",
        sourceIds: [policySourceId, casebookSourceId]
      }
    ],
    sourceIds: [policySourceId, casebookSourceId],
    practicalImpacts: [
      "コンプライアンス・リスク評価",
      "内部監査計画・改善フォロー",
      "商品審査・販売管理",
      "サイバーセキュリティ・システムリスク管理",
      "AML/CFT",
      "利益相反・ガバナンス",
      "外部委託・新規サービス管理"
    ]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([topic]);
  }

  const articles = [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt,
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング／当年度基本方針",
      status: "adopted",
      summary: "令和8事務年度（2026年7月から2027年6月）の金融商品取引業者等に対する証券モニタリングの重点を、業態横断と規模・業態別に整理した証券取引等監視委員会の公式方針。顧客本位・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を横断項目とし、業態別の重点とリスクベースの検査方針を示す。",
      whyImportant: [
        "当年度に当局がどのリスクと内部管理を重点的に見るかを一次資料で確認できる",
        "法令違反の有無だけでなく、業容に応じた内部管理・ガバナンス・監査改善の実効性が検証対象になることが分かる",
        "業態横断事項と業態別事項を分けて、自社の監査・コンプライアンス計画へ落とし込める"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "経営企画・ガバナンス担当"],
      audienceReason: "当年度の検査・モニタリング重点を自社のリスク評価、内部監査計画、経営報告へ反映するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest", "securities-monitoring-system-risk", "securities-monitoring-aml", "securities-monitoring-governance", "securities-monitoring-business-type"],
      primarySourceIds: [policySourceId],
      whatChanged: "新テーマ／令和8事務年度の証券モニタリング重点を、内部管理・業態別の実務論点として整理した。"
    },
    {
      id: "article-sesc-securities-monitoring-casebook-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会事務局",
      publishedAt: "2026-07-31",
      collectedAt,
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券検査／モニタリング事例集",
      status: "adopted",
      summary: "令和7事務年度の証券モニタリングの概要、検査結果に基づく勧告・指摘、過年度の検査指摘事例を第一種、投資運用、投資助言、第二種、登録金融機関・仲介業者等の業態別にまとめた公式事例集。抽象的な監督方針を実際の失敗例・改善論点へ接続できる。",
      whyImportant: [
        "販売管理、売買管理、内部管理、利益相反等の指摘事例を業態別に確認できる",
        "当年度基本方針の重点が過去のどの失敗・勧告と接続しているかを検証できる",
        "規程整備だけでなく、運用不備・牽制不足・経営関与の問題を内部監査のケースとして使える"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "商品・営業管理担当"],
      audienceReason: "自社の統制を、実際の検査指摘・勧告事例と比較して弱点を抽出するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest", "securities-monitoring-governance", "securities-monitoring-business-type"],
      primarySourceIds: [casebookSourceId],
      whatChanged: "新テーマ／当年度方針を具体的な検査指摘・勧告事例へ接続する一次資料を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part1",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-07",
      collectedAt,
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・業態横断",
      status: "adopted",
      summary: "令和8事務年度方針の業態横断的な検証事項を、前年度方針と同日公表の事例集との比較で整理する実務解説。顧客本位・適合性、サイバー・システムリスク、フロンティアAIによる脅威変化、AML/CFT、内部管理の実効性について、前年からの記載変化や既存の検査指摘とのつながりを具体化している。",
      whyImportant: [
        "当年度方針の文言を前年との単純比較で終わらせず、削除された項目も過去の指摘から引き続き管理が必要と読む視点を示す",
        "サイバー・フロンティアAI、AML/CFT等を個別の技術論ではなく証券モニタリング上の内部管理課題として整理できる",
        "主要株主・経営体制・業容の変化に応じたガバナンスと監査改善の点検へ落とし込める"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "システムリスク・情報セキュリティ", "AML/CFT担当"],
      audienceReason: "当年度の業態横断的な重点を、前年との差分と検査事例を踏まえて自社の統制・監査項目へ翻訳するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "AI・デジタル"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-best-interest", "securities-monitoring-system-risk", "securities-monitoring-aml", "securities-monitoring-governance"],
      primarySourceIds: [policySourceId, casebookSourceId],
      whatChanged: "新テーマ／業態横断の検証事項を前年との差分と検査事例から実務統制へ翻訳する二次資料を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-policy-2026-part2",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-12",
      collectedAt,
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング・業態別",
      status: "adopted",
      summary: "令和8事務年度方針の規模・業態別の重点を、直近の行政処分・検査事例と結び付けて整理する実務解説。大手証券の法人関係情報・引受審査、ネット系の不正アクセス対策、準大手・地域証券の業容変化と新商品審査、投資運用業者の親会社取引・利益相反管理等を具体化している。",
      whyImportant: [
        "業態別重点の背景にある直近の勧告・行政処分を示し、当局がどの統制不備を問題視しているかを読み取りやすい",
        "買収後の業容拡大、新商品導入、NISA・ネット取引等で、事業拡大と内部管理態勢の整合を点検する観点が明確",
        "投資運用業の親会社取引では、利益相反管理と取引妥当性の事後検証という具体的な統制まで落とし込んでいる"
      ],
      audience: ["証券会社・投資運用業者等の法務・コンプライアンス", "内部監査", "商品審査・営業管理", "リスク管理担当"],
      audienceReason: "自社の業態・ビジネスモデルに該当する重点事項を、具体的な検査事例から統制・監査へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-governance", "securities-monitoring-business-type", "securities-monitoring-system-risk"],
      primarySourceIds: [policySourceId, casebookSourceId],
      whatChanged: "新テーマ／業態別の重点事項を直近の検査・行政処分事例と接続する二次資料を追加した。"
    }
  ];

  window.ARTICLE_DATA = appendUnique(
    window.ARTICLE_DATA,
    articles,
    (item) => item && item.id,
    (item) => item && item.url
  );
})();

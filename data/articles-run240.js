(() => {
  const TOPIC = "performer-entertainment-transactions";
  const SOURCE_GUIDELINE = "source-jftc-performer-entertainment-guideline-20250930";
  const SOURCE_SURVEY = "source-jftc-performer-entertainment-survey-20241226";
  const REFORM_EVENT = "performer-entertainment-transaction-guideline-2025";
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
      id: SOURCE_GUIDELINE,
      title: "実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針",
      type: "guideline",
      typeLabel: "内閣官房・公正取引委員会／実演家等取引適正化指針",
      authority: "内閣官房・公正取引委員会",
      publishedAt: "2025-09-30",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2025/sep/250930_geinoushishin.html",
      importance: "最高",
      whyImportant: "実演家と芸能事務所、放送事業者等、レコード会社との取引について、契約期間・競業避止・移籍独立、権利利用、報酬、契約条件の書面化、再録禁止等を独占禁止法等の観点から具体化し、17の採るべき行動と問題となり得る行動例を示す公式指針。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_SURVEY,
      title: "音楽・放送番組等の分野の実演家と芸能事務所との取引等に関する実態調査（クリエイター支援のための取引適正化に向けた実態調査）",
      type: "report",
      typeLabel: "公正取引委員会・実態調査",
      authority: "公正取引委員会",
      publishedAt: "2024-12-26",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2024/dec/241226_geinou.html",
      importance: "高",
      whyImportant: "芸能分野の契約期間、移籍・独立、競業避止、権利帰属・利用、報酬、放送事業者・レコード会社との取引等の実態を調査し、2025年の取引適正化指針の基礎となった公式報告。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshSources = sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (freshSources.length) window.SOURCE_DATA = existingSources.concat(freshSources);

  const topic = {
    slug: TOPIC,
    title: "実演家・芸能事務所等の取引適正化",
    categories: ["独占禁止法・競争法", "契約", "知的財産"],
    summary: "実演家と芸能事務所、放送事業者等、レコード会社との取引について、2025年9月30日の公式指針を基礎に、契約期間・競業避止、移籍・独立、権利利用、報酬、契約条件の書面化、再録禁止を企業実務向けに整理する。",
    lastUpdated: "2026-09-22",
    lastVerified: "2026-09-22",
    isNew: true,
    overview: [
      "内閣官房と公正取引委員会は2025年9月30日、2024年12月の実態調査を基に、実演家と芸能事務所、放送事業者等、レコード会社との取引について独占禁止法等の具体的な考え方を示す指針を公表した。",
      "指針は、芸能事務所について契約期間・更新、競業避止、移籍・独立、実演家の権利、報酬等を扱い、放送事業者等について契約条件の書面化と協議、レコード会社について再録禁止条項等を扱う。",
      "実務では、新規契約だけでなく既存の専属契約、更新条項、退所時の条件、権利帰属・利用許諾、報酬・費用控除、放送出演・レコーディング契約を棚卸しし、必要性・相当性と説明・協議の記録を確認する必要がある。",
      "この指針は芸能事務所だけの問題ではなく、放送事業者、番組制作会社、レコード会社、広告・スポンサー企業など、実演家の起用やコンテンツ取引に関わる企業のコンプライアンスにも関係する。"
    ],
    currentSummary: {
      facts: [
        "内閣官房と公正取引委員会は2025年9月30日、『実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針』を公表した。",
        "同指針は、2024年12月26日に公表された音楽・放送番組等の分野の実演家と芸能事務所との取引等に関する実態調査を基礎としている。",
        "指針は17の採るべき行動を示し、指針に沿わない行為により公正な競争を阻害するおそれがあるなど独占禁止法等に違反する場合には、公正取引委員会が厳正に対処する旨を示している。",
        "芸能事務所との関係では契約期間・更新、競業避止、移籍・独立、権利利用、報酬等、放送事業者等との関係では契約条件の書面化・協議、レコード会社との関係では再録禁止条項等が主要論点として整理されている。"
      ],
      interpretations: [
        "専属契約や競業避止条項は存在すること自体だけで評価せず、投資回収その他の目的、対象業務、期間、必要性・相当性、実演家の活動機会への影響を具体的に確認する必要がある。",
        "移籍・独立時の金銭支払、権利利用の制限、取引先への働き掛け等は、契約条項だけでなく実際の運用や業界内の協調行動を含めて競争制限効果を確認する必要がある。",
        "指針対応は新規ひな形の修正だけでは足りず、既存契約の棚卸し、説明・協議プロセス、報酬計算、権利管理、退所・契約終了フローまで一体で見直す方が実務上有効である。"
      ],
      implications: [
        "専属契約の契約期間、自動更新、事務所側だけの延長権、契約終了後の競業避止・活動制限を一覧化し、必要性・相当性を再点検する。",
        "移籍・独立時の金銭支払、退所後の活動や名称・成果物利用、他社への働き掛けに関する条項と実運用を確認する。",
        "実演家の著作隣接権等や名称・成果物に関する権利の帰属・利用許諾、報酬・二次使用料・SNS・ファンクラブ・グッズ収益、経費控除の説明と協議方法を整える。",
        "放送・番組制作の発注では報酬、業務内容、拘束期間、支払条件等を可能な限り書面・電子データで示し、実演家・芸能事務所が交渉できる機会を設ける。",
        "レコード契約の再録禁止は対象楽曲、期間、起算点、投資回収との関係を確認し、必要かつ相当な範囲へ限定する。"
      ],
      uncertain: [
        "優越的地位の有無や拘束条件付取引等への該当性は、当事者の取引上の地位、代替可能性、制限の目的・期間・範囲、競争への影響等の具体的事情により判断される。",
        "実演家が労働者、フリーランス、事業者のいずれとして扱われるか、また取引適正化関連法令が適用されるかは契約名だけでなく実態と各法の要件を個別に確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "performer-contract-period-noncompete",
        title: "専属契約の期間・更新・競業避止をどう設計するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "契約期間・更新条件を明確にし、事務所側の一方的な延長や契約終了後の競業避止・活動制限について、目的、対象、期間、必要性・相当性を具体的に確認する。営業秘密保護が目的であれば、競業避止ではなく秘密保持で対応できるかも検討する。",
        exception: "育成投資の回収や真に保護すべき営業秘密など合理的な利益が存在する場合でも、制限の範囲・期間が過度にならないかを別途検討する。",
        uncertain: "個別条項の適法性は実演家と事務所の関係、投資内容、制限期間、代替手段等に左右される。",
        sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
      },
      {
        id: "performer-transfer-independence",
        title: "移籍・独立を制限する条項・運用をどう見るか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "移籍・独立を不当に妨げる金銭負担、活動妨害、取引先への働き掛け、複数事務所や事業者団体による移籍制限等を避け、実演家が取引先を自由に選択できる環境を確保する。",
        exception: "契約終了時の精算や合理的な費用負担まで一律に否定されるわけではないが、契約上の根拠、算定方法、説明、移籍抑止効果を確認する。",
        uncertain: "個別の支払条件・権利処理が合理的かは契約内容と実際の負担・利益に応じて判断される。",
        sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
      },
      {
        id: "performer-rights-compensation",
        title: "実演家の権利利用・報酬・費用控除をどう整理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "実演家の実演から生じる権利等の帰属・利用条件と、報酬・二次使用料・SNS・ファンクラブ・グッズ等の収益配分、経費控除をできる限り明確化し、合理的な理由なく権利利用を妨げたり報酬条件を一方的に決めたりしない。",
        exception: "権利を芸能事務所へ帰属させること自体が直ちに問題となるわけではなく、利用許諾の合理性、対価、説明・協議、退所後の取扱いを含めて評価する。",
        uncertain: "著作権・著作隣接権、氏名・肖像等の具体的な権利関係は成果物・契約・利用態様により異なる。",
        sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
      },
      {
        id: "performer-broadcaster-written-terms",
        title: "放送・番組制作の契約条件をどう示し協議するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "放送事業者等は、業務依頼時に報酬額・支払条件・業務内容・拘束期間等を可能な限り書面や電子データで示し、芸能事務所・実演家が意見を述べ交渉できる機会を設けて十分に説明・協議する。",
        exception: "取引の緊急性や制作実務上すべての条件を当初から確定できない場合でも、確定した条件と未確定事項を区別し、後から一方的に不利益条件を押し付けない運用が必要となる。",
        uncertain: "各案件で必要な書面化の粒度や他の取引適正化法令の適用は当事者属性・取引内容により異なる。",
        sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
      },
      {
        id: "performer-recording-restrictions",
        title: "レコード契約の再録禁止をどこまで設定できるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "再録禁止は投資回収・収益確保のために必要な楽曲と必要かつ相当な期間に限定し、起算点も合理的に設定し、リリース後の期間等に応じて柔軟に見直す。",
        exception: "合理的な投資回収のための限定的な再録禁止まで一律に否定されるわけではない。",
        uncertain: "必要かつ相当な期間や対象楽曲の範囲は投資額、リリース状況、市場特性等により変わる。",
        sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
      },
      {
        id: "performer-existing-contract-review",
        title: "既存契約・運用を指針に合わせてどう棚卸しするか",
        status: "interpreted",
        stage: "not_applicable",
        views: [],
        conclusion: "新規契約だけでなく既存契約を対象に、専属期間・更新・競業避止、移籍独立、権利利用、報酬・費用、契約条件の書面化、再録禁止を横断して棚卸しし、条項と実際の運用が指針の目的・必要性・相当性・説明協議の考え方に合うか確認する。",
        exception: "指針の例示を機械的な禁止リストに置き換えず、各取引の目的、当事者の地位、代替手段、競争への影響を確認する。",
        uncertain: "個社の契約ポートフォリオや権利管理・報酬システムにより改訂優先順位と実装方法は異なる。",
        sourceIds: [SOURCE_GUIDELINE]
      }
    ],
    sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY],
    referenceArticleIds: [
      "article-noandt-performer-entertainment-guideline-20251127",
      "article-ushijima-performer-entertainment-guideline-20251002"
    ],
    practicalImpacts: [
      "専属契約・契約期間・自動更新",
      "競業避止・秘密保持",
      "移籍・独立・退所条件",
      "著作隣接権等の権利帰属・利用許諾",
      "報酬・二次使用料・収益配分・費用控除",
      "放送出演・番組制作の契約条件書面化",
      "レコード契約・再録禁止",
      "既存契約・運用の棚卸し"
    ]
  };
  const topicExists = (window.TOPIC_DATA || []).some((item) => item && item.slug === TOPIC);
  if (!topicExists) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topic);

  const reform = {
    id: REFORM_EVENT,
    title: "実演家等と芸能事務所等の取引適正化指針・2025年策定",
    eventType: "regulation_or_guideline",
    lawId: "performer-entertainment-transaction-guideline",
    lawLabel: "実演家等と芸能事務所、放送事業者等及びレコード会社との取引適正化指針",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2025-09-30"],
    effectiveDateNote: "2025年9月30日に最終指針を公表",
    effectiveDateSourceIds: [SOURCE_GUIDELINE],
    matchSourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY],
    sourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === REFORM_EVENT)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(reform);
  }

  const articles = [
    {
      id: "article-ushijima-performer-entertainment-guideline-20251002",
      title: "『実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針』の公表（令和7年9月30日公正取引委員会）",
      publisher: "牛島総合法律事務所",
      author: "猿倉健司・服部梓・宮城弥加",
      publishedAt: "2025-10-02",
      collectedAt: "2026-09-22",
      url: "https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20251002entertainment/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／実演家等取引適正化指針",
      status: "adopted",
      summary: "2025年9月30日の実演家等取引適正化指針について、芸能事務所・放送事業者等・レコード会社ごとの重要論点を具体的に解説する。専属契約の期間・更新、競業避止、移籍・独立の妨害、実演家の権利、報酬、契約条件の書面化、再録禁止を、2024年実態調査の問題事例と結び付けて整理し、必要性・相当性や代替手段まで踏み込む。",
      whyImportant: [
        "専属契約の長期化・一方的更新や契約終了後の競業避止について、育成投資・営業秘密等の目的と制限の必要性・相当性を分けて検討する視点が具体的である",
        "営業秘密保護が目的の場合には競業避止ではなく秘密保持で対応できるか、移籍独立時の活動妨害や業界内の共同制限をどう避けるかまで実務へ落とせる",
        "実演家の権利利用、報酬、放送事業者等の書面化、レコード会社の再録禁止まで、契約ひな形だけでなく既存運用の棚卸しに使える"
      ],
      audience: ["企業法務", "芸能・メディア事業者", "放送・番組制作", "レコード会社", "広告・コンテンツ担当"],
      audienceReason: "芸能・メディア分野で実演家との契約や起用、権利・報酬処理を行う企業が、既存契約と実運用を公式指針に照らして点検するため。",
      categories: ["独占禁止法・競争法", "契約", "知的財産"],
      relatedTopics: [TOPIC],
      relatedIssues: ["performer-contract-period-noncompete", "performer-transfer-independence", "performer-rights-compensation", "performer-broadcaster-written-terms", "performer-recording-restrictions", "performer-existing-contract-review"],
      primarySourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY],
      reformEventId: REFORM_EVENT,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [SOURCE_GUIDELINE],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／実演家と芸能事務所等の取引適正化指針を、専属期間・競業避止、移籍独立、権利・報酬、放送契約、再録禁止まで既存契約レビューへ落とす実務解説を追加した。"
    },
    {
      id: "article-noandt-performer-entertainment-guideline-20251127",
      title: "『実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針』の公表",
      publisher: "長島・大野・常松法律事務所",
      author: "伊藤伸明・小松諒・渡辺雄太",
      publishedAt: "2025-11-27",
      collectedAt: "2026-09-22",
      url: "https://www.nagashima.com/publications/publication20251127-1/",
      sourceType: "secondary",
      sourceLabel: "NO&T Competition Law Update／実演家等取引適正化指針",
      status: "adopted",
      summary: "2025年9月30日の公式指針が示す17の採るべき行動を、芸能事務所・放送事業者等・レコード会社の実務に即して整理する。契約期間・更新、競業避止、移籍・独立、権利利用、報酬・経費、放送出演条件の書面化、再録禁止について、既存契約も見直し対象となり得ること、独占禁止法だけでなく取引適正化関連法令も確認すべきことまで示す。",
      whyImportant: [
        "指針の17の行動を当事者別・論点別に整理しており、既存の芸能契約・出演契約・レコード契約を点検するチェックリストとして使いやすい",
        "退所時の金銭負担や移籍妨害、権利利用を許諾しない場合の説明、報酬・費用控除、放送発注時の条件提示など、条項だけでなく運用上のリスクが具体的である",
        "ノンコンピート、権利帰属、再録禁止等を一律禁止とせず、必要性・相当性、投資回収、代替手段を踏まえて設計する視点が得られる",
        "既存契約についても指針に照らした見直しが必要となり得ることと、公取委が問題行為へ厳正に対処する方針を踏まえ、対応優先度を判断できる"
      ],
      audience: ["企業法務", "芸能事務所", "放送・番組制作", "レコード会社", "広告・スポンサー担当", "コンプライアンス"],
      audienceReason: "実演家との直接契約だけでなく、番組・広告起用や権利利用を含むコンテンツ取引全体で、競争法・取引適正化リスクを点検するため。",
      categories: ["独占禁止法・競争法", "契約", "知的財産"],
      relatedTopics: [TOPIC],
      relatedIssues: ["performer-contract-period-noncompete", "performer-transfer-independence", "performer-rights-compensation", "performer-broadcaster-written-terms", "performer-recording-restrictions", "performer-existing-contract-review"],
      primarySourceIds: [SOURCE_GUIDELINE, SOURCE_SURVEY],
      reformEventId: REFORM_EVENT,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [SOURCE_GUIDELINE],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／公式指針の17の行動を芸能事務所・放送事業者等・レコード会社別に整理し、既存契約・報酬・権利・移籍独立・再録禁止の実務レビューへ接続した。"
    }
  ];
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshArticles = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (freshArticles.length) window.ARTICLE_DATA = existingArticles.concat(freshArticles);
})();

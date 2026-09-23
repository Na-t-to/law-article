(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item?.id === "article-mhm-ai-hr-20250821");
  if (!article) return;
  article.reformEventId = "employment-ai-guideline-2025";
  article.reformStageAtPublication = "effective";
  article.reformStageSourceIds = ["source-mhlw-employment-ai-hr-guide-20250904"];
})();

(() => {
  if (window.__LAW_INDEX_MEDICAL_RESEARCH_ETHICS_2026_APPLIED__) return;
  window.__LAW_INDEX_MEDICAL_RESEARCH_ETHICS_2026_APPLIED__ = true;

  const TOPIC = "medical-research-ethics-privacy";
  const REFORM = "medical-research-ethics-guideline-2026-amendment";
  const SOURCE_FINAL = "source-mext-medical-research-ethics-amendment-20260828";
  const SOURCE_HUB = "source-mhlw-medical-research-guideline-hub-2026";
  const SOURCE_COMMENT = "source-mext-medical-research-ethics-public-comment-20251226";
  const SOURCE_AI_NOTICE = "source-mhlw-ai-pseudonymized-medical-data-20220331";

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid", "mc_cid", "mc_eid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const sources = [
    {
      id: SOURCE_FINAL,
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      type: "guideline",
      typeLabel: "文部科学省・厚生労働省・経済産業省／生命・医学系研究倫理指針2026年改正",
      authority: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      importance: "最高",
      whyImportant: "2026年8月27日に告示され、12月1日から適用される生命・医学系研究倫理指針の改正内容を公式に整理する一次資料。IC・オプトアウト、仮名加工情報等、多機関共同研究の一括倫理審査、経過措置を確認できる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_HUB,
      title: "研究に関する指針について（人を対象とする生命科学・医学系研究に関する倫理指針）",
      type: "guideline",
      typeLabel: "厚生労働省・研究倫理指針公式ハブ",
      authority: "厚生労働省",
      publishedAt: "2026-08-27",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hokabunya/kenkyujigyou/i-kenkyu/index.html",
      importance: "最高",
      whyImportant: "令和8年8月27日改正の指針本文、新旧対照表、施行通知と従前の指針・ガイダンスをまとめて確認できる公式ハブ。2026年12月1日の適用開始に向けた正本確認の起点となる。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_COMMENT,
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部を改正する件（概要）に関するパブリック・コメント（意見公募手続）を実施します",
      type: "public_comment",
      typeLabel: "文部科学省・厚生労働省・経済産業省／生命・医学系研究倫理指針改正案",
      authority: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2025-12-26",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01591.html",
      importance: "高",
      whyImportant: "2025年12月26日から2026年1月25日まで実施された改正概要の意見募集。最終改正前のproposal段階を時系列で確認する基礎資料。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_AI_NOTICE,
      title: "仮名加工情報である医療情報のみを用いて行うAI画像診断機器等の開発・研究等への生命・医学系指針の適用等について",
      type: "guidance",
      typeLabel: "三省事務連絡／仮名加工医療情報とAI医療機器研究",
      authority: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2022-03-31",
      url: "https://www.mhlw.go.jp/content/000922490.pdf",
      importance: "高",
      whyImportant: "仮名加工情報である医療情報のみを用いたAI画像診断機器等の開発・研究にも生命・医学系指針が適用されることを明示した事務連絡。2026年改正前の実務上の出発点を確認できる。",
      topics: [TOPIC]
    }
  ];

  let currentSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  for (const source of sources) {
    if (sourceIds.has(source.id)) continue;
    if (sourceUrls.has(normalizeUrl(source.url))) continue;
    currentSources = currentSources.concat([source]);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  }
  window.SOURCE_DATA = currentSources;

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === TOPIC)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat({
      slug: TOPIC,
      title: "生命科学・医学系研究の倫理・個人情報",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      summary: "人を対象とする生命科学・医学系研究について、2026年12月1日適用の改正倫理指針を軸に、IC・オプトアウト、仮名加工情報等と個人情報保護法の関係、多機関共同研究の一括倫理審査、AI医療機器開発での医療データ利用を企業・研究機関の実務向けに整理する。",
      lastUpdated: "2026-09-23",
      lastVerified: "2026-09-23",
      isNew: true,
      overview: [
        "文部科学省・厚生労働省・経済産業省は2026年8月27日、生命・医学系研究倫理指針の改正を告示し、同年12月1日から適用することとした。",
        "改正は、研究を侵襲・介入研究、試料を用いる研究、試料を用いない研究に整理し、リスクに応じてIC又はオプトアウトを用いる構造へ簡素化する。",
        "仮名加工情報、匿名加工情報、個人関連情報については個人情報保護法の規定に則って取り扱う構造へ改め、従前の倫理指針による個人情報規律との重複を縮減する。",
        "多機関共同研究では一括倫理審査が通常審査対象で必須、その他の研究でも原則となるため、研究計画・データ提供・共同研究契約・審査運用をまとめて見直す必要がある。"
      ],
      currentSummary: {
        facts: [
          "2026年8月27日に改正指針が告示され、2026年12月1日から適用される。2026年11月30日までは原則として現行指針を前提に運用する必要がある。",
          "改正指針は『文書IC』『口頭IC』『適切な同意』をICに統一し、研究のリスクに応じてIC又はオプトアウトを用いる体系へ整理した。",
          "仮名加工情報、匿名加工情報、個人関連情報は、改正後は基本的に個人情報保護法の関係規定に則って取り扱う構造とされた。",
          "多機関共同研究の研究計画について、侵襲・介入研究等では一の倫理審査委員会による一括審査が必須となり、その他の研究でも一括審査が原則となる。",
          "現行指針等の下で実施中の研究は、個人情報保護関連法令・ガイドラインを遵守する場合に限り、経過措置により従前の例によることができる。"
        ],
        interpretations: [
          "2026年改正は単なる同意手続の緩和ではなく、研究リスクに応じた倫理手続と、個人情報保護法に基づくデータ規律を分けて組み直す変更と捉える方が安全である。",
          "医療データをAI・医療機器開発に利用する場合、個人情報保護法上の利用・提供根拠だけでなく、その活動が生命・医学系研究に該当するか、倫理審査・IC又はオプトアウトが必要かを別レイヤーで確認する必要がある。",
          "12月1日の適用開始に向け、データ類型、研究類型、審査方法、同意・オプトアウトの順に判定できる手順へSOP・研究計画書・契約フローを組み直すと運用しやすい。"
        ],
        implications: [
          "研究・開発案件を、侵襲・介入、試料利用、試料を用いない研究の三区分で棚卸しし、現行の同意文書・オプトアウト文書・倫理審査フローとの対応表を作る。",
          "仮名加工情報、匿名加工情報、個人関連情報を用いる研究では、個人情報保護法上の利用目的、第三者提供、共同利用等の根拠と、研究倫理上の手続を混同せず別々に確認する。",
          "多機関共同研究では、どの倫理審査委員会で一括審査するか、各機関の長の許可、データ提供時の確認、契約・責任分担を研究開始前に整理する。",
          "AI医療機器等の開発で既存医療データを利用する企業は、データ提供元医療機関との契約だけでなく、倫理審査・研究計画・オプトアウト等を開発スケジュールに織り込む。"
        ],
        uncertain: [
          "2026年8月27日時点で改正指針は確定したが、細かな運用は今後の改訂ガイダンス等で追加具体化される可能性があり、12月1日までの追加資料を継続確認する必要がある。",
          "個別研究でIC、オプトアウト、倫理審査委員会の許可等のどの手続が必要かは、研究の侵襲・介入性、試料の有無、データ類型、取得経緯、提供関係等によって変わる。"
        ]
      },
      issues: [
        {
          id: "medical-research-consent-optout-2026",
          title: "改正後のIC・オプトアウトをどう判定するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "2026年12月1日以降は、研究を侵襲・介入研究、試料を用いる研究、試料を用いない研究に分類し、研究対象者へのリスク、既存試料・情報の取得経緯、個人情報保護法上の例外事由や包括同意の有無等に応じてIC又はオプトアウトを判断する。",
          exception: "個人を識別できない既存試料で利用・提供により個人情報が取得されない場合など、ICもオプトアウトも不要となる類型がある。現行指針下で進行中の研究には経過措置がある。",
          uncertain: "具体的な文書・掲示内容、簡略化手続等は改訂ガイダンスも併せて確認する必要がある。",
          sourceIds: [SOURCE_FINAL, SOURCE_HUB]
        },
        {
          id: "medical-research-data-apppi-boundary-2026",
          title: "仮名加工情報等と個人情報保護法・倫理指針をどう切り分けるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "改正後は、仮名加工情報、匿名加工情報、個人関連情報について個人情報保護法の関係規定に則って取り扱う。研究全体に倫理指針が適用され得ることとは別に、これらのデータ類型について従前の指針上の上乗せ手続をそのまま残す構造ではない。",
          exception: "個人データや要配慮個人情報、試料を伴う研究などは別の手続が問題となり得るため、データを加工したという一点だけで研究倫理上の確認が不要になるわけではない。",
          uncertain: "共同利用、外国提供、提供元・提供先の役割等は個人情報保護法と倫理指針の双方から具体的なデータフローを確認する必要がある。",
          sourceIds: [SOURCE_FINAL, SOURCE_HUB]
        },
        {
          id: "medical-research-multi-institution-review-2026",
          title: "多機関共同研究の一括倫理審査をどう設計するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "改正後、侵襲・介入研究等の多機関共同研究では一の倫理審査委員会による一括審査が必須となり、その他の研究でも原則として一括審査を用いる。各機関での実施許可や責任分担と併せて運用を設計する。",
          exception: "その他の研究では迅速審査が可能であり、倫理審査委員会が必要と判断すれば迅速審査から通常審査へ変更できる。",
          uncertain: "研究機関間での申請主体、資料共有、変更審査、事故・逸脱報告等の詳細運用は各機関の規程と改訂ガイダンスを確認する必要がある。",
          sourceIds: [SOURCE_FINAL, SOURCE_HUB]
        },
        {
          id: "medical-research-ai-development-data",
          title: "AI医療機器開発で個人情報保護法と研究倫理をどう重ねるか",
          status: "interpreted",
          stage: "under_revision",
          views: [],
          conclusion: "AI医療機器等の研究開発で既存医療データを利用する場合は、個人情報保護法上の利用・提供スキームと、生命・医学系指針上の研究手続を分けて確認する。2026年12月1日以降は改正指針に合わせてデータ類型とIC・オプトアウト、倫理審査の要否を再判定する。",
          exception: "研究に該当しない業務や、個別法令・制度に基づくデータ利用は別整理となる。AI医療機器の薬事承認や性能評価に関する手続は薬機法・PMDAのルールも別途確認する。",
          uncertain: "AI開発の研究該当性、共同利用・第三者提供の構造、将来の追加学習やモデル更新を含む運用は案件ごとの事実関係に左右される。",
          sourceIds: [SOURCE_AI_NOTICE, SOURCE_FINAL]
        }
      ],
      sourceIds: [SOURCE_FINAL, SOURCE_HUB, SOURCE_COMMENT, SOURCE_AI_NOTICE]
    });
  }

  const reformEvent = {
    id: REFORM,
    title: "生命科学・医学系研究倫理指針・2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "medical-research-ethics-guideline",
    lawLabel: "人を対象とする生命科学・医学系研究に関する倫理指針",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDate: "2026-12-01",
    effectiveDateSourceIds: [SOURCE_FINAL, SOURCE_HUB],
    matchSourceIds: [SOURCE_COMMENT, SOURCE_FINAL, SOURCE_HUB],
    sourceIds: [SOURCE_COMMENT, SOURCE_FINAL, SOURCE_HUB, SOURCE_AI_NOTICE],
    articleIds: [
      "article-mext-medical-research-ethics-amendment-20260828",
      "article-tmi-medical-research-ethics-20260901",
      "article-tmi-generative-ai-medical-data-20260205"
    ]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === REFORM)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([reformEvent]);
  }

  const articles = [
    {
      id: "article-mext-medical-research-ethics-amendment-20260828",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      publisher: "文部科学省",
      author: "文部科学省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-23",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      sourceType: "primary",
      sourceLabel: "一次資料・三省／生命・医学系研究倫理指針2026年改正",
      status: "adopted",
      summary: "2026年8月27日に告示され、12月1日から適用される生命・医学系研究倫理指針の改正を整理する公式発表。研究類型に応じたIC・オプトアウトへの再編、仮名加工情報等を個人情報保護法に委ねる整理、多機関共同研究の一括倫理審査、既存研究への経過措置を示している。",
      whyImportant: [
        "12月1日から適用される確定ルールの主な変更点と経過措置を一つの一次資料で確認できる",
        "同意手続の簡素化だけでなく、個人情報保護法との役割分担と倫理審査の再設計を同時に追える",
        "医療機関、大学、製薬・医療機器企業等が研究SOP、共同研究契約、データ提供フローを見直す基準になる"
      ],
      audience: ["企業法務", "医薬・医療機器事業者", "研究開発担当", "大学・研究機関", "プライバシー担当", "倫理審査委員会事務局"],
      audienceReason: "2026年12月1日の適用開始前に、研究計画、同意・オプトアウト、データ利用、一括倫理審査を確定ルールへ合わせて改訂するため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["medical-research-consent-optout-2026", "medical-research-data-apppi-boundary-2026", "medical-research-multi-institution-review-2026"],
      primarySourceIds: [SOURCE_FINAL, SOURCE_HUB],
      reformEventId: REFORM,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [SOURCE_FINAL, SOURCE_HUB],
      legacyReformInference: false,
      whatChanged: "指針改正確定／IC・オプトアウト、個人情報保護法との役割分担、多機関共同研究の一括倫理審査を2026年12月1日適用の確定ルールとして追加した。"
    },
    {
      id: "article-tmi-medical-research-ethics-20260901",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-23",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／生命・医学系研究倫理指針2026年改正",
      status: "adopted",
      summary: "2026年改正の中でも大きく変わるIC手続を中心に、現行指針の複雑な『文書IC・口頭IC・適切な同意・オプトアウト』を、改正後のICとオプトアウトへどう整理するかを具体的な研究類型別に解説する。仮名加工情報・匿名加工情報・個人関連情報の上乗せ規律解消、既存試料・情報、外国提供、提供のみを行う者の手続まで企業・研究機関の運用へ落としている。",
      whyImportant: [
        "改正前後でIC・オプトアウトの判断フローがどう変わるかを研究類型ごとに比較できる",
        "仮名加工情報等について個人情報保護法の規定へ寄せる変更の実務的な意味を説明している",
        "既存試料・情報の利用・提供、外国提供、提供のみを行う者の手続まで、研究現場で迷いやすい論点を一続きで確認できる",
        "最終指針は確定した一方、ガイダンスも踏まえて手続を見直す必要があることを明示している"
      ],
      audience: ["企業法務", "医薬・医療機器事業者", "研究開発担当", "大学・研究機関", "プライバシー担当", "倫理審査委員会事務局"],
      audienceReason: "改正指針の条文だけでは追いにくいIC・オプトアウトとデータ利用の分岐を、実際の研究手続へ落とし込むため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["medical-research-consent-optout-2026", "medical-research-data-apppi-boundary-2026", "medical-research-ai-development-data"],
      primarySourceIds: [SOURCE_FINAL, SOURCE_HUB],
      reformEventId: REFORM,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [SOURCE_FINAL, SOURCE_HUB],
      legacyReformInference: false,
      whatChanged: "実務解説追加／2026年改正後のIC・オプトアウトと仮名加工情報等の扱いを研究類型別に具体化した。"
    },
    {
      id: "article-tmi-generative-ai-medical-data-20260205",
      title: "【ヘルスケア】生成AI医療機器開発における「データの壁」と法的解決策 ～仮名加工情報の共同利用スキームと薬事規制の最新動向～",
      publisher: "TMI総合法律事務所",
      author: "岡本敬史",
      publishedAt: "2026-02-05",
      collectedAt: "2026-09-23",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/17970.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／AI医療機器・医療データ利活用",
      status: "adopted",
      summary: "AI医療機器開発で診療目的に取得された医療データを研究開発へ利用する際の、個人情報保護法上の利用目的・第三者提供、仮名加工情報の共同利用、生命・医学系指針上の倫理審査・オプトアウト、薬機法上の承認・性能評価を横断して整理する。2026年改正がproposal段階だった時点の実務課題を示し、最終改正後の変更点を読む前提資料としても有用。",
      whyImportant: [
        "医療機関から企業へAI開発用データを流すときに、個人情報保護法、研究倫理、薬機法を別々のレイヤーで確認する必要性が分かる",
        "仮名加工情報の共同利用を使っても研究倫理上の手続が自動的に消えるわけではないという、実装上の落とし穴を示している",
        "2026年最終改正前の課題認識を残すことで、改正により何が簡素化され、何が依然として別途確認事項かを比較できる"
      ],
      audience: ["企業法務", "医療機器メーカー", "AI・データ開発担当", "医療機関", "プライバシー担当", "薬事担当"],
      audienceReason: "AI医療機器開発のデータフローを、個人情報、研究倫理、薬事の三層で設計し、2026年改正後の手順見直しへつなげるため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["medical-research-ai-development-data", "medical-research-data-apppi-boundary-2026"],
      primarySourceIds: [SOURCE_AI_NOTICE, SOURCE_COMMENT],
      reformEventId: REFORM,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [SOURCE_COMMENT],
      legacyReformInference: false,
      whatChanged: "バックフィル／AI医療機器開発の医療データ利用を、個人情報保護法・研究倫理・薬機法の横断実務として補強した。"
    }
  ];

  let currentArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  for (const article of articles) {
    if (articleIds.has(article.id) || articleUrls.has(normalizeUrl(article.url))) continue;
    currentArticles = currentArticles.concat([article]);
    articleIds.add(article.id);
    articleUrls.add(normalizeUrl(article.url));
  }
  window.ARTICLE_DATA = currentArticles;
})();

(() => {
  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === "article-jftc-antitrust-compliance-guide-2025");
  if (!article) return;

  article.title = "企業における独占禁止法コンプライアンスプログラムの整備・運用状況に関する実態調査／令和7年6月版ガイド";
  article.sourceLabel = "一次資料／独占禁止法コンプライアンス・実態調査／令和7年6月版ガイド";
  article.reformEventId = "jftc-antitrust-compliance-guide-2025";
  article.reformStageAtPublication = "effective";
  article.reformStageSourceIds = ["source-jftc-antitrust-compliance-guide-2025"];
})();

(() => {
  const TOPIC = "early-business-revitalization-act-2026";
  const SOURCE_LAW = "source-egov-early-business-revitalization-act-20250613";
  const SOURCE_IMPLEMENTATION = "source-meti-early-business-revitalization-rules-qa-20260630";
  const REFORM_EVENT = "early-business-revitalization-act-2026";
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
      id: SOURCE_LAW,
      title: "円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律（令和7年法律第67号）",
      type: "law",
      typeLabel: "早期事業再生法／e-Gov法令",
      authority: "e-Gov法令検索",
      publishedAt: "2025-06-13",
      url: "https://laws.e-gov.go.jp/law/507AC0000000067",
      importance: "最高",
      whyImportant: "2026年12月11日に施行される早期事業再生手続の根拠法。倒産前の事業者について、金融債権者の多数決と裁判所の認可により金融債務の権利変更を可能にする制度の条文を確認する基準点。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_IMPLEMENTATION,
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      type: "guideline",
      typeLabel: "経済産業省／施行規則・告示・Q&A公表",
      authority: "経済産業省",
      publishedAt: "2026-06-30",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      importance: "最高",
      whyImportant: "2026年12月11日の施行に向け、施行規則・資産評定基準を公布し、対象事業者、対象債権者・債権、一時停止、調査等の解釈を178項目のQ&Aで具体化した公式資料の入口。",
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
    title: "早期事業再生法／多数決型債務調整",
    categories: ["M&A", "契約", "会社法・ガバナンス"],
    summary: "2026年12月11日に施行される早期事業再生法について、倒産前の事業者が金融債権者の4分の3以上の多数決と裁判所の認可により金融債務を調整する新手続を、利用要件、対象債権、一時停止、権利変更、プレDIP、既存手続との使い分けから整理する。",
    lastUpdated: "2026-09-22",
    lastVerified: "2026-09-22",
    isNew: true,
    overview: [
      "早期事業再生法は、倒産状態に至る前の『経済的に窮境に陥るおそれのある事業者』を対象に、金融債務に限定した非公開の債務調整手続を創設する。",
      "指定確認調査機関による確認・調査と裁判所の認可を組み合わせ、対象債権者全員の同意ではなく、議決権総額の4分の3以上の同意等による多数決で非保全部分の権利変更を可能にする。",
      "2026年6月30日に施行規則・資産評定基準が公布され、経済産業省Q&Aにより金融機関等・貸付債権等、一時停止、例外弁済、会議運営、プレDIP等の実務が具体化された。",
      "実務では、債務者だけでなく銀行、リース会社、信用保証協会、外国金融機関等も、対象債権への該当性、議決権、一時停止、担保、手続選択を早期に確認する必要がある。"
    ],
    currentSummary: {
      facts: [
        "早期事業再生法（令和7年法律第67号）は2025年6月13日に公布され、2026年12月11日に施行される。",
        "手続は、経済産業大臣が指定する指定確認調査機関の関与の下で進み、金融債権者の多数決と裁判所の認可により対象債権の権利変更を可能にする。",
        "利用対象は倒産前の『経済的に窮境に陥るおそれのある事業者』で、法人格・業種・事業規模による一律の制限は設けられていない。",
        "多数決による権利変更は対象債権の非保全部分に限られ、担保で保全される部分は手続には取り込まれても多数決による減免・期限猶予等の対象とはならない。",
        "2026年6月30日に施行規則・資産評定基準が公布され、同時に制度解釈を示すQ&Aが公表された。"
      ],
      interpretations: [
        "本制度は、公開性・対象債権の広さを伴う法的整理と、全員同意を原則とする私的整理の中間に位置する第三の選択肢として理解すると、手続選択の比較がしやすい。",
        "多数決で処理できること自体よりも、対象債権者・対象債権を漏れなく確定し、担保の保全部分と非保全部分、議決権、清算価値保障を正確に整理することが実務の前提になる。",
        "反対債権者が想定される案件、ファイナンス・リース債権の調整が重要な案件、事業再生ADR等からの移行が必要な案件では、本制度を早期に選択肢へ入れる意味が大きい。"
      ],
      implications: [
        "債務者は資金繰り悪化が倒産状態へ進む前に、法3条の利用要件、対象金融債務、主要債権者の議決権構成を確認し、事業再生ADR等との手続比較を行う。",
        "金融機関・リース会社・保証協会等は、自社債権が対象債権となるか、担保による保全部分・非保全部分、議決権、例外弁済の対象を事前に整理する。",
        "一時停止要請を受けた金融機関は、それだけを理由に期限の利益喪失通知や預金拘束を行わないというQ&A上の整理を踏まえ、与信・回収・口座管理の社内フローを確認する。",
        "本手続中・先行する準則型私的整理中のプレDIPファイナンスについて、例外弁済や後続手続での保護の要件を資金調達時点で確認する。"
      ],
      uncertain: [
        "制度施行前で実際の案件蓄積がないため、指定確認調査機関の運用、債権者の投票行動、裁判所認可の実務、既存の事業再生ADR等との使い分けは施行後の実務形成を追う必要がある。",
        "対象債権の該当性、担保評価、清算価値保障、権利変更内容の相当性は個別案件の契約・担保・事業計画・資産状況に依存する。"
      ]
    },
    issues: [
      {
        id: "early-restructuring-eligibility",
        title: "どの段階・事業者が早期事業再生手続を利用できるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "法3条の確認要件に従い、倒産前の『経済的に窮境に陥るおそれ』があること、対象債権が制度上の貸付債権等であること、決議可決の見込みがないことが明らかでないこと、清算価値保障の見込み、法的整理が係属していないこと等を確認する。",
        exception: "企業規模による法令上の一律制限はなく、中小企業も利用できるが、案件規模や債権者構成によって既存の私的整理手続の方が適切な場合がある。",
        uncertain: "『経済的に窮境に陥るおそれ』への当てはめや利用時期は、資金繰り・収益・元本償還可能性等の具体的事情に左右される。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      },
      {
        id: "early-restructuring-target-claims",
        title: "どの金融債権者・債権が手続対象になるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "法2条と施行規則に基づき、銀行等だけでなく一定の証券会社、ファイナンス・リース事業者、信用保証協会、外国金融機関等を含む『金融機関等』が有する所定の貸付債権等を対象として整理し、対象となる特定の債権者を任意に除外しない。",
        exception: "主体ごとに対象となる債権の範囲が限定される場合があり、リースもすべての取引ではなく法令上の要件を満たすファイナンス・リース債権等に限られる。",
        uncertain: "複合的な金融取引、債権譲渡、代位弁済、保証関係等では、確認時点の債権者と債権原因を個別に精査する必要がある。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      },
      {
        id: "early-restructuring-vote-security",
        title: "4分の3多数決と担保付債権をどう扱うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "対象債権者集会では法定の多数決要件と裁判所認可を満たすことで権利変更を行う一方、担保付債権の保全部分は多数決による減免・期限猶予等の権利変更対象から除外し、非保全部分を権利変更対象として扱う。",
        exception: "担保付債権でも対象債権者・一時停止等の手続から当然に外れるわけではなく、手続上の取扱いと実体的な権利変更範囲を分けて確認する。",
        uncertain: "担保評価や議決権額、清算価値保障の具体的な判断は資産評定と個別債権の状況に依存する。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      },
      {
        id: "early-restructuring-standstill",
        title: "一時停止要請後に債権回収・失期・預金拘束をどう扱うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "指定確認調査機関の確認後は全対象債権者へ一時停止要請が行われ、対象債権の回収、相殺、担保権実行等が制限される。Q&A上、一時停止要請は原則として『支払の停止』や当然の期限の利益喪失事由とは扱わず、要請のみを理由とする預金拘束も行わないことが求められる。",
        exception: "任意の一時停止要請だけでは強制執行等を当然に止められないため、法定要件を満たす場合には裁判所による中止命令が問題となる。対象債権の弁済にも法令上の例外がある。",
        uncertain: "個別契約の失期条項、担保・相殺関係、例外弁済の可否は具体的な債権関係と法令・Q&Aに照らして確認する必要がある。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      },
      {
        id: "early-restructuring-predip-transition",
        title: "プレDIPと既存の私的整理からの移行をどう設計するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "本手続中または先行する一定の準則型私的整理手続中のプレDIPファイナンスについて、法令上の例外弁済・保護の仕組みを確認し、既存手続から移行する場合は省略可能な債権者会議等の要件も含めて移行計画を設計する。",
        exception: "純粋な合意型の私的整理がすべて同じ特例対象になるわけではなく、先行手続の種類と法令上の要件を確認する必要がある。",
        uncertain: "新規融資の条件、後続手続での取扱い、既存金融機関の合意形成は案件ごとに異なる。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      },
      {
        id: "early-restructuring-procedure-choice",
        title: "事業再生ADR・私的整理・法的整理とどう使い分けるか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "反対債権者の存在、対象金融債権の構成、ファイナンス・リースの重要性、事業価値毀損リスク、手続負担を比較し、全員同意型の私的整理で合意形成が難しい場合に早期事業再生手続を重要な代替・移行先として検討する。",
        exception: "多数決手続が常に優れるわけではなく、既存の準則型私的整理が迅速・柔軟に機能する案件では従来手続を維持する合理性がある。",
        uncertain: "制度施行後の実務蓄積がないため、実際の利用件数、債権者行動、ADR等からの移行パターンは今後の運用を見て更新する必要がある。",
        sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
      }
    ],
    sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
    referenceArticleIds: [
      "article-noandt-early-business-revitalization-20260911",
      "article-businesslawyers-early-business-revitalization-20260917"
    ],
    practicalImpacts: [
      "早期の資金繰り・再生手続選択",
      "金融債権者・対象債権の棚卸し",
      "ファイナンス・リース・保証協会・外国金融機関対応",
      "担保評価・議決権・4分の3多数決",
      "一時停止要請・失期・預金拘束",
      "プレDIPファイナンス",
      "事業再生ADR等からの移行",
      "裁判所認可・清算価値保障"
    ]
  };
  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === TOPIC)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(topic);
  }

  const reform = {
    id: REFORM_EVENT,
    title: "早期事業再生法・2026年施行",
    eventType: "new_law",
    lawId: "early-business-revitalization-act",
    lawLabel: "早期事業再生法（円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律）",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-12-11"],
    effectiveDateNote: "2026年12月11日施行",
    effectiveDateSourceIds: [SOURCE_LAW],
    matchSourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
    sourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION]
  };
  if (!(window.REFORM_EVENT_DATA || []).some((item) => item && item.id === REFORM_EVENT)) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(reform);
  }

  const articles = [
    {
      id: "article-noandt-early-business-revitalization-20260911",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐・髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-22",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "NO&T Restructuring Legal Update／早期事業再生手続",
      status: "adopted",
      summary: "2026年12月11日施行の早期事業再生法について、金融債権者の4分の3以上の多数決と裁判所認可による新しい倒産前債務調整手続を、対象債権者側と利用を検討する債務者側の双方から解説する。ファイナンス・リース、信用保証協会、外国金融機関、担保付債権の非保全部分、一時停止要請と期限の利益・預金拘束、プレDIP、事業再生ADR等からの移行まで、施行規則とQ&Aを使って実務上の判断点を具体化している。",
      whyImportant: [
        "銀行だけでなくファイナンス・リース債権者、信用保証協会、外国金融機関等まで対象債権者の射程を整理し、債権者側の初動確認に使える",
        "一時停止要請が原則として支払停止や当然の失期事由に当たらず、要請のみを理由とする預金拘束も避けるべきというQ&A上の運用を金融実務へ落としている",
        "プレDIPファイナンスと先行する準則型私的整理からの移行特例をまとめ、債務者がどの局面で本手続を選ぶかを比較できる",
        "反対債権者がいる場合やファイナンス・リース調整が重要な場合など、本制度が有効になり得る具体的な利用局面を示している"
      ],
      audience: ["企業法務", "財務・経営企画", "金融機関", "リース会社", "事業再生担当", "M&A・再編担当"],
      audienceReason: "施行前に、債務者・対象債権者の双方が自社の債権構成、一時停止対応、担保、プレDIP、既存再生手続との使い分けを準備するため。",
      categories: ["M&A", "契約", "会社法・ガバナンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["early-restructuring-target-claims", "early-restructuring-vote-security", "early-restructuring-standstill", "early-restructuring-predip-transition", "early-restructuring-procedure-choice"],
      primarySourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
      reformEventId: REFORM_EVENT,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年12月11日施行の早期事業再生法を、対象金融債権・4分の3多数決・一時停止・担保・プレDIP・既存再生手続との使い分けまで施行準備の実務へ接続した。"
    },
    {
      id: "article-businesslawyers-early-business-revitalization-20260917",
      title: "早期事業再生法の概要とポイント",
      publisher: "BUSINESS LAWYERS",
      author: "山口 みどり（森・濱田松本法律事務所外国法共同事業）",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-22",
      url: "https://www.businesslawyers.jp/articles/1484",
      sourceType: "secondary",
      sourceLabel: "BUSINESS LAWYERS／森・濱田松本弁護士による早期事業再生法解説",
      status: "adopted",
      summary: "早期事業再生法の制定背景から、対象事業者・対象債権、指定確認調査機関、一時停止・例外弁済、権利変更議案・事業再生計画、調査、債権者会議・集会、裁判所認可、既存手続からの移行、罰則までを法・施行規則・Q&Aに沿って体系的に解説する。特に、対象債権者を任意に除外できないこと、担保付債権は手続対象でも多数決による権利変更は非保全部分に限られること、利用要件や会議運営など施行前に確認すべき実装事項を一通り追える。",
      whyImportant: [
        "制度立案業務への従事経験を持つ執筆者が、法律・施行規則・Q&Aを横断して手続全体を一つの流れとして整理している",
        "対象事業者の要件、金融機関等・貸付債権等の範囲、担保付債権の保全部分と非保全部分の違いを条文・Q&A番号まで付して確認できる",
        "一時停止、例外弁済、指定確認調査機関の調査、債権者会議、裁判所認可までを連続して読めるため、社内の施行準備や案件初動のチェックリストに転用しやすい",
        "私的整理の全員同意と法的整理の公開性・対象範囲の間にある制度の位置付けを明確にし、手続選択の前提をつかめる"
      ],
      audience: ["企業法務", "財務・経営企画", "事業再生担当", "金融機関", "M&A・再編担当"],
      audienceReason: "早期事業再生法の全体像と法令上の手続要件を短時間で把握し、施行前の社内準備や案件発生時の論点チェックへ落とすため。",
      categories: ["M&A", "契約", "会社法・ガバナンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["early-restructuring-eligibility", "early-restructuring-target-claims", "early-restructuring-vote-security", "early-restructuring-standstill", "early-restructuring-predip-transition", "early-restructuring-procedure-choice"],
      primarySourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
      reformEventId: REFORM_EVENT,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [SOURCE_LAW, SOURCE_IMPLEMENTATION],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／早期事業再生法の利用要件から一時停止、権利変更、認可、既存手続からの移行までを法・施行規則・Q&Aで体系化した実務解説を追加した。"
    }
  ];
  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshArticles = articles.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (freshArticles.length) window.ARTICLE_DATA = existingArticles.concat(freshArticles);
})();

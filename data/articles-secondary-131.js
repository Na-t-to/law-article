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
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const earlyTopicSlug = "early-business-restructuring";
  const earlySourceId = "source-meti-early-business-restructuring-qna-2026";
  const earlyReformId = "early-business-restructuring-act-2025";
  const earlySource = {
    id: earlySourceId,
    title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
    type: "guideline",
    typeLabel: "経済産業省・早期事業再生法／施行規則・告示・Q&A",
    authority: "経済産業省",
    publishedAt: "2026-06-30",
    url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
    importance: "最高",
    whyImportant: "2026年12月11日施行予定の早期事業再生法について、制度詳細を定める施行規則・資産評定告示の公布とQ&Aの公表を一括して示す一次資料。対象となる金融機関等・貸付債権等、一時停止要請、指定確認調査機関、資産評定など施行準備の基準点になる。",
    topics: [earlyTopicSlug]
  };

  const earlyTopic = {
    slug: earlyTopicSlug,
    title: "早期事業再生法・多数決型債務調整",
    categories: ["契約", "M&A", "危機管理・コンプライアンス"],
    summary: "2026年12月11日施行予定の早期事業再生法について、利用要件、対象債権者・対象債権、多数決と裁判所認可、一時停止、ファイナンス・リースや保証協会付き融資、プレDIPファイナンス等の実務論点を整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "早期事業再生法は、倒産状態に至る前の事業者について、金融債権を中心に多数決と裁判所認可で権利変更を可能にする新しい事業再生手続を整備する。",
      "手続開始時の公示を伴わず、経済産業大臣が指定する指定確認調査機関の関与の下で基本的に裁判所外で進み、反対債権者への強制力が必要な局面などで裁判所が関与する。",
      "2026年6月30日に施行規則・告示が公布され、制度解釈を示すQ&Aも公表されたため、2026年12月11日の施行に向けて対象債権・一時停止・資産評定等の実務設計が具体化している。"
    ],
    currentSummary: {
      facts: [
        "早期事業再生法は2025年6月に成立し、2026年12月11日に施行予定である。",
        "経済的に窮境に陥るおそれのある事業者が利用でき、金融債権者の多数決（議決権総額の4分の3以上の同意等）と裁判所の認可により、反対債権者を含む一定の金融債権の権利変更を可能にする。",
        "経済産業省は2026年6月30日、金融機関等・貸付債権等の範囲、一時停止要請、指定確認調査機関、資産評定等を定める施行規則・告示を公布し、法令解釈を示すQ&Aを公表した。",
        "ファイナンス・リース債権、信用保証協会の求償権、一定の外国金融機関の債権も制度上の対象になり得るため、従来の私的整理より対象債権者の棚卸しが広くなる。"
      ],
      interpretations: [
        "この制度は法的整理と全員同意型の私的整理の中間に位置する『第三の手続』として、少数債権者の反対がある場合やファイナンス・リース債権の調整が重要な場合に選択肢となり得る。",
        "利用を検討する債務者は、申請前に金融機関・リース会社・保証協会・外国金融機関等を含む対象債権者と対象債権を漏れなく洗い出し、一時停止と資金繰りを同時に設計する必要がある。"
      ],
      implications: [
        "債務者側は、対象債権者・対象債権一覧、担保による保全部分と非保全部分、保証・リース・外国金融機関の有無を早期に棚卸しする。",
        "金融機関・リース会社側は、一時停止要請、弁済禁止、議決権、保全債権と非保全債権、権利変更議案の取扱いを既存の私的整理手続と分けて整理する。",
        "手続中の運転資金について、早期事業再生手続中のプレDIPファイナンスや先行する準則型私的整理手続からの移行時の扱いを事前に確認する。"
      ],
      uncertain: [
        "制度は2026年12月11日施行前であり、指定確認調査機関の実際の運用、案件形成、裁判所実務、金融機関・リース会社の対応慣行は施行後の事例蓄積を確認する必要がある。",
        "対象債権者全員の同意による柔軟な取扱いや、他の私的整理手続との選択・移行は案件の債権構成と資金繰りに応じた個別判断が必要になる。"
      ]
    },
    issues: [
      {
        id: "early-restructuring-eligibility-majority",
        title: "誰が利用でき、多数決でどこまで権利変更できるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "倒産状態に至る前の経済的に窮境に陥るおそれのある事業者が、指定確認調査機関の関与の下で手続を進め、議決権総額の4分の3以上の同意等と裁判所の認可により一定の非保全金融債権の権利変更を行う。",
        exception: "手続の対象は金融債権を中心に法令で画定され、商取引債権等を一律に多数決で変更する制度ではない。",
        uncertain: "具体的な利用判断は債務者の財務状況、再生可能性、債権構成、指定確認調査機関の確認等に依存する。",
        sourceIds: [earlySourceId]
      },
      {
        id: "early-restructuring-creditors-claims",
        title: "対象債権者・対象債権をどう確定するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "銀行等の貸付債権だけでなく、法令上の要件を満たすファイナンス・リース債権、信用保証協会の求償権、一定の外国金融機関等も対象となり得るため、確認申請前に貸付債権等一覧表を網羅的に作成する。",
        exception: "権利変更の対象となるのは非保全債権部分であり、保全債権部分の扱い、保証履行の時点、個別のリース契約の該当性等は法令・Q&Aに即して区別する。",
        uncertain: "複雑な担保・保証・外国法上の金融機関・リース契約では個別の該当性確認が必要になる。",
        sourceIds: [earlySourceId]
      },
      {
        id: "early-restructuring-standstill-financing",
        title: "一時停止要請と手続中の資金繰りをどう設計するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "一時停止要請と弁済禁止の対象・例外を確認し、預金拘束や期限の利益喪失を安易に生じさせない運用と、手続継続に必要なプレDIPファイナンス等の資金繰りを並行して設計する。",
        exception: "保全部分、少額債権、一定の先行私的整理手続中の資金等には法令上の例外が問題となり、全ての支払・資金調達を一律に扱うことはできない。",
        uncertain: "実際の金融機関対応やプレDIPファイナンスの供給条件は案件ごとの信用状況と施行後の実務に左右される。",
        sourceIds: [earlySourceId]
      },
      {
        id: "early-restructuring-procedure-choice",
        title: "事業再生ADR等とどう使い分けるか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "少数債権者の反対が見込まれる場合、ファイナンス・リース債権の調整が重要な場合、手続開始の公示を避けたい場合などでは早期事業再生手続が選択肢となる一方、全員同意が見込める場合や既存の準則型私的整理が適する場合は他手続も比較する。",
        exception: "どの手続が適切かは債権者構成、担保、資金繰り、事業価値、必要な強制力、スピード等で変わる。",
        uncertain: "施行前であり、事業再生ADR等からの移行や実務上の標準的な使い分けは今後の案件蓄積を確認する必要がある。",
        sourceIds: [earlySourceId]
      }
    ],
    sourceIds: [earlySourceId],
    practicalImpacts: [
      "再生手続の選択・取締役会説明",
      "対象債権者・対象債権一覧の作成",
      "金融機関・リース会社・保証協会との調整",
      "一時停止要請・弁済管理",
      "担保評価・非保全債権の算定",
      "プレDIPファイナンス・資金繰り"
    ]
  };

  const earlyArticles = [
    {
      id: "article-meti-early-business-restructuring-qna-2026",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-06-30",
      collectedAt: "2026-09-14",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      sourceType: "primary",
      sourceLabel: "一次資料・早期事業再生法／施行規則・告示・Q&A",
      status: "adopted",
      summary: "2026年12月11日施行予定の早期事業再生法について、制度詳細を定める施行規則と資産評定基準の告示を公布し、法令解釈を示すQ&Aを公表した経済産業省の一次資料。金融機関等・貸付債権等の範囲、指定確認調査機関の確認・調査事項、一時停止要請、労働組合等への通知、資産評定等が施行前に具体化された。",
      whyImportant: [
        "法律成立後に残っていた対象債権・一時停止・資産評定等の実務論点を施行規則・告示・Q&Aで確認できる",
        "2026年12月11日という施行日を一次資料で確認でき、施行準備の期限を設定できる",
        "債務者だけでなく金融機関、リース会社、信用保証協会等の対象債権者側でも、自社債権の取扱いを確認する入口になる"
      ],
      audience: ["企業法務", "経営企画・財務", "金融機関法務", "リース・保証実務", "事業再生担当"],
      audienceReason: "施行前に、利用要件・対象債権者・一時停止・資産評定等を一次資料で確認し、再生手続や債権管理の社内フローを準備するため。",
      categories: ["契約", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [earlyTopicSlug],
      relatedIssues: ["early-restructuring-eligibility-majority", "early-restructuring-creditors-claims", "early-restructuring-standstill-financing"],
      primarySourceIds: [earlySourceId],
      reformEventId: earlyReformId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [earlySourceId],
      whatChanged: "新テーマ／2026年12月11日施行予定の早期事業再生法について、施行規則・告示・Q&Aまで確定した現行制度を独立テーマとして整理した。"
    },
    {
      id: "article-nagashima-early-business-restructuring-2026",
      title: "〖2026年12月11日施行〗早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐・髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-14",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター・実務解説／事業再生・倒産",
      status: "adopted",
      summary: "施行規則・告示・経済産業省Q&Aまで踏まえ、早期事業再生手続を債務者と対象債権者双方の視点から整理した実務解説。法的整理でも全員同意型の私的整理でもない『第三の手続』としての位置付けに加え、担保付債権、ファイナンス・リース、保証協会付き融資、外国金融機関、一時停止要請、預金拘束、プレDIPファイナンス、他の私的整理との使い分けまで具体化する。",
      whyImportant: [
        "対象債権者・対象債権の範囲を、担保付債権、ファイナンス・リース、保証協会付き融資、外国金融機関まで分解しており、債権者リスト作成の実務に直接使える",
        "一時停止要請が原則として支払停止や当然の期限利益喪失を意味しないこと、要請だけを理由とする預金拘束を避けるべきことなど、資金繰り上の重要点を整理している",
        "早期事業再生手続中のプレDIPファイナンスと、先行する準則型私的整理手続中の資金の扱いを区別している",
        "事業再生ADR等との違いと、少数債権者の反対やファイナンス・リース債権の調整が重要な場面など、手続選択の判断軸を示している"
      ],
      audience: ["企業法務", "経営企画・財務", "金融機関法務", "リース・保証実務", "事業再生担当"],
      audienceReason: "条文・Q&Aを読むだけでは把握しにくい対象債権者の範囲、資金繰り、一時停止、他手続との選択を案件形成の流れに沿って確認するため。",
      categories: ["契約", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [earlyTopicSlug],
      relatedIssues: ["early-restructuring-eligibility-majority", "early-restructuring-creditors-claims", "early-restructuring-standstill-financing", "early-restructuring-procedure-choice"],
      primarySourceIds: [earlySourceId],
      reformEventId: earlyReformId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [earlySourceId],
      whatChanged: "バックフィル／施行規則・Q&Aを、対象債権者の棚卸し、一時停止、資金繰り、他の再生手続との選択へ落とす実務解説を追加した。"
    }
  ];

  const insiderSourceId = "source-sesc-irom-tob-insider-2026";
  const insiderTopicSlug = "insider-trading-information-management";
  const insiderIssueId = "insider-tob-bidder-contractors";
  const insiderSource = {
    id: insiderSourceId,
    title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
    type: "administrative_action",
    typeLabel: "一次資料・証券取引等監視委員会／TOBインサイダー取引",
    authority: "証券取引等監視委員会",
    publishedAt: "2026-09-11",
    url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
    importance: "高",
    whyImportant: "公開買付者の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関して公開買付け等事実を知り、公表前に対象会社株式を買い付けたとして課徴金納付命令を勧告された事案。公開買付者側の契約締結者まで情報管理・売買制限の射程に入ることを具体的に確認できる。",
    topics: [insiderTopicSlug]
  };
  const insiderArticle = {
    id: "article-sesc-irom-tob-insider-2026",
    title: "公開買付者との契約締結者によるアイロムグループ株式に係る内部者取引に対する課徴金納付命令の勧告について",
    publisher: "証券取引等監視委員会",
    author: "証券取引等監視委員会",
    publishedAt: "2026-09-11",
    collectedAt: "2026-09-14",
    url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260911-1.html",
    sourceType: "primary",
    sourceLabel: "一次資料・金商法／TOBインサイダー取引・課徴金勧告",
    status: "adopted",
    summary: "Blackstone Inc.の連結子会社とアドバイザリー契約を締結していた者が、その契約履行に関してアイロムグループ株式の公開買付け等事実を知りながら、公表前の2024年5月10日から13日に同株式6600株を合計1224万2800円で買い付けたとして、証券取引等監視委員会が2026年9月11日に課徴金615万円の納付命令を勧告した事案。",
    whyImportant: [
      "TOB案件の情報管理対象は買付者の役職員だけではなく、公開買付者と契約関係を持ち、その履行に関して情報へアクセスする外部者にも及び得ることを具体的な執行事例で確認できる",
      "アドバイザリー契約の締結自体ではなく、契約履行に関して公開買付け等事実を知ったという情報取得経路が明示されており、案件アクセス権と売買制限の設計に使える",
      "2026年改正で拡張される対象会社側アドバイザー等の規律とは別に、公開買付者側の契約締結者には従来法上の規制が既に問題となることを切り分けられる"
    ],
    audience: ["企業法務", "M&A担当", "証券コンプライアンス", "FA・コンサル・外部アドバイザー管理担当"],
    audienceReason: "TOB案件で情報へアクセスする外部委託先・アドバイザーを特定し、NDAだけでなくインサイダー登録、売買禁止、情報アクセス権限まで管理するため。",
    categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
    relatedTopics: [insiderTopicSlug],
    relatedIssues: [insiderIssueId],
    primarySourceIds: [insiderSourceId],
    whatChanged: "テーマ更新／TOBの公開買付者側についても、契約締結者が契約履行に関して公開買付け等事実を知った場合のインサイダー規制を、最新の課徴金勧告事例で独立論点として追加した。"
  };

  const allSources = [earlySource, insiderSource];
  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  allSources.forEach((source) => {
    if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
      currentSources.push(source);
      sourceIds.add(source.id);
      sourceUrls.add(normalizeUrl(source.url));
    }
  });
  window.SOURCE_DATA = currentSources;

  const currentTopics = window.TOPIC_DATA || [];
  if (!currentTopics.some((item) => item && item.slug === earlyTopicSlug)) currentTopics.push(earlyTopic);
  const insiderTopic = currentTopics.find((item) => item && item.slug === insiderTopicSlug);
  if (insiderTopic) {
    addUnique(insiderTopic.sourceIds, [insiderSourceId]);
    insiderTopic.lastUpdated = "2026-09-14";
    insiderTopic.lastVerified = "2026-09-14";
    if (insiderTopic.currentSummary) {
      addUnique(insiderTopic.currentSummary.facts, [
        "2026年9月11日、証券取引等監視委員会は、公開買付者の連結子会社とアドバイザリー契約を締結していた者が、契約履行に関して公開買付け等事実を知り、公表前に対象会社株式を買い付けた事案について課徴金納付命令を勧告した。"
      ]);
      addUnique(insiderTopic.currentSummary.interpretations, [
        "TOB案件の情報管理では、対象会社側の役職員・アドバイザーだけでなく、公開買付者側で契約履行に関して情報へ接する外部者もアクセス管理と売買制限の対象として棚卸しする必要がある。"
      ]);
      addUnique(insiderTopic.currentSummary.implications, [
        "公開買付者側のFA、コンサル、業務委託先等について、契約締結の有無、情報取得経路、案件アクセス権、インサイダー登録、売買禁止期間を一体で管理する。"
      ]);
    }
    if (!Array.isArray(insiderTopic.issues)) insiderTopic.issues = [];
    if (!insiderTopic.issues.some((item) => item && item.id === insiderIssueId)) {
      insiderTopic.issues.push({
        id: insiderIssueId,
        title: "公開買付者側の契約締結者まで情報管理をどう広げるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "公開買付者と契約を締結し、その契約の履行に関して公開買付け等事実を知った者は、金商法167条1項の規制対象となり得るため、公開買付者側のアドバイザー・業務委託先等も情報アクセス者として把握し、公表前の売買を制限する。",
        exception: "規制対象となるかは法定の立場、契約関係、情報取得経路、公開買付け等事実の内容、法定除外事由等により判断する必要があり、公開買付者と関係する外部者すべてが当然に規制対象となるわけではない。",
        uncertain: "具体的な契約関係や情報受領経路が複層的な案件では、誰がどの時点で会社関係者等に該当するか個別確認が必要である。",
        sourceIds: [insiderSourceId]
      });
    }
  }
  window.TOPIC_DATA = currentTopics;

  const currentReforms = window.REFORM_EVENT_DATA || [];
  if (!currentReforms.some((item) => item && item.id === earlyReformId)) {
    currentReforms.push({
      id: earlyReformId,
      title: "早期事業再生法・2025年成立（2026年施行）",
      eventType: "new_law",
      lawId: "early-business-restructuring-act",
      lawLabel: "早期事業再生法",
      relatedTopics: [earlyTopicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-11"],
      effectiveDateNote: "法律、施行規則及び資産評定基準は2026年12月11日施行予定。",
      effectiveDateSourceIds: [earlySourceId],
      matchSourceIds: [earlySourceId],
      sourceIds: [earlySourceId]
    });
  }
  window.REFORM_EVENT_DATA = currentReforms;

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  [...earlyArticles, insiderArticle].forEach((article) => {
    if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
      currentArticles.push(article);
      articleIds.add(article.id);
      articleUrls.add(normalizeUrl(article.url));
    }
  });
  window.ARTICLE_DATA = currentArticles;
})();

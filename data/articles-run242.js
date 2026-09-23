(() => {
  const TOPIC = "disability-discrimination-reasonable-accommodation";
  const SOURCE_AMENDMENT = "source-cao-disability-discrimination-amendment-20210604";
  const SOURCE_BASIC_POLICY = "source-cao-disability-discrimination-basic-policy-20230314";
  const REFORM = "disability-discrimination-act-2021-amendment";

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
  const uniq = (values = []) => Array.from(new Set((values || []).filter(Boolean)));

  const sourceAdditions = [
    {
      id: SOURCE_AMENDMENT,
      title: "障害を理由とする差別の解消の推進に関する法律の一部を改正する法律（令和3年法律第56号）",
      type: "law_amendment",
      typeLabel: "内閣府・障害者差別解消法2021年改正",
      authority: "内閣府",
      publishedAt: "2021-06-04",
      url: "https://www8.cao.go.jp/shougai/suishin/txt/law_r03-56.txt",
      importance: "最高",
      whyImportant: "民間事業者について努力義務だった合理的配慮の提供を法的義務へ改めた改正法。2024年4月1日に施行され、サービス提供・契約・施設利用等の場面における企業の対応基準を変えた。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_BASIC_POLICY,
      title: "障害を理由とする差別の解消の推進に関する基本方針（令和5年3月14日閣議決定）",
      type: "guideline",
      typeLabel: "内閣府・障害者差別解消法基本方針",
      authority: "内閣府",
      publishedAt: "2023-03-14",
      url: "https://www8.cao.go.jp/shougai/whitepaper/r07hakusho/zenbun/furoku_03.html",
      importance: "最高",
      whyImportant: "障害者差別解消法の対象範囲、不当な差別的取扱い、合理的配慮、過重な負担、環境の整備、建設的対話等について政府の基本的な考え方を示す。雇用分野は障害者雇用促進法の定めによることも明示する。",
      topics: [TOPIC]
    }
  ];
  let existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  for (const source of sourceAdditions) {
    if (sourceIds.has(source.id) || sourceUrls.has(normalizeUrl(source.url))) continue;
    existingSources = existingSources.concat(source);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  }
  window.SOURCE_DATA = existingSources;

  const topic = {
    slug: TOPIC,
    title: "障害者差別解消法・事業者の合理的配慮",
    categories: ["危機管理・コンプライアンス", "契約"],
    summary: "障害者差別解消法について、民間事業者に対する不当な差別的取扱いの禁止、2024年4月から法的義務となった合理的配慮、過重な負担、環境の整備、建設的対話を、顧客・利用者へのサービス提供実務の観点から整理する。雇用分野は障害者雇用促進法の別制度として切り分ける。",
    lastUpdated: "2026-09-23",
    lastVerified: "2026-09-23",
    isNew: true,
    overview: [
      "障害者差別解消法8条1項は民間事業者による不当な差別的取扱いを禁止し、2021年改正法の2024年4月1日施行により、同条2項の合理的配慮の提供も民間事業者の法的義務となった。",
      "合理的配慮は固定的な対応一覧ではなく、個々の場面で障害者から社会的障壁の除去を必要としている旨の意思の表明があり、実施に伴う負担が過重でない場合に、具体的な状況に応じて検討する必要がある。",
      "障害者差別解消法5条の『環境の整備』は、不特定多数を対象とする事前的な改善措置であり努力義務とされる。環境整備を進めることで、個別の合理的配慮を提供しやすくなる。",
      "このテーマは店舗・施設だけでなく、オンラインサービス、契約締結、受付・問い合わせ、説明方法等にも関係する。一方、雇用分野の合理的配慮は障害者雇用促進法の制度として別に確認する。"
    ],
    currentSummary: {
      facts: [
        "障害者差別解消法8条1項は、事業者が事業を行うに当たり、障害を理由として障害者でない者と不当な差別的取扱いをすることにより障害者の権利利益を侵害することを禁止している。",
        "2021年6月4日公布の改正法（令和3年法律第56号）は、民間事業者による合理的配慮の提供を努力義務から法的義務へ改め、2024年4月1日に施行された。",
        "2023年3月14日閣議決定の基本方針は、事業者を営利・非営利、個人・法人を問わず反復継続して事業を行う者と整理し、対面・オンラインなど提供形態を問わず事業活動が対象になり得るとしている。",
        "基本方針上、対象分野は障害者の日常生活・社会生活全般であるが、雇用分野は障害者雇用促進法の定めるところによる。",
        "障害者差別解消法5条の環境の整備は、施設・設備、情報アクセシビリティ、人的支援・体制等について不特定多数を対象に事前的改善を行う努力義務である。"
      ],
      interpretations: [
        "合理的配慮は『障害者には常に同じ対応をする』という画一的なルールではなく、本人が直面している社会的障壁、希望する対応、事業者側の負担を踏まえ、建設的対話を通じて代替手段も含めて個別に設計する義務として運用する必要がある。",
        "安全・人員・コスト等を理由に要望どおりの対応が難しい場合でも、抽象的な『対応できない』『危険』で終了せず、過重な負担や正当な理由を具体的事情から検討し、実現可能な代替案を探すことが重要になる。",
        "不当な差別的取扱いの禁止、個別の合理的配慮、事前的な環境の整備は別の義務・位置付けを持つが、実務では相互に関連するため、一つの顧客対応・サービス設計プロセスとして管理する方が機能しやすい。"
      ],
      implications: [
        "店舗・施設・オンラインサービス・コールセンター等で、利用拒否、条件付与、説明方法、本人確認、申込み・解約等の手続が障害を理由に一律に制限されていないかを点検する。",
        "合理的配慮の申出を受けた際に、本人の希望、社会的障壁、選択肢、過重な負担の有無、代替案、本人との対話内容を記録し、現場で判断できない場合のエスカレーション先を定める。",
        "従業員向けマニュアル・研修、相談窓口、事例共有を整備し、現場担当者の思い込みや過度な安全配慮だけでサービス拒否・制限へ進まない運用にする。",
        "物理的設備だけでなく、ウェブ・アプリ、文書、音声・文字・手話等のコミュニケーション手段、予約・受付フローを含め、環境整備によって個別対応の負荷を下げられないか検討する。"
      ],
      uncertain: [
        "正当な理由や過重な負担の有無、必要な合理的配慮の内容は、事業規模、費用・負担、事業目的、サービスの性質、安全性、代替手段、本人との対話等の具体的事情により変わる。",
        "各事業分野では主務大臣の対応指針が設けられているため、個別業種の実務では基本方針だけでなく所管省庁の最新の対応指針・事例も確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "dda-business-scope-employment-boundary",
        title: "どの事業者・取引場面が対象となり、雇用分野とどう切り分けるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "営利・非営利、個人・法人を問わず、反復継続して事業を行う者は対象になり得る。店舗等の対面取引に限らずオンラインでのサービス提供等も含めて確認する。一方、雇用分野は障害者雇用促進法の合理的配慮・差別禁止制度を適用する。",
        exception: "純粋な私的行為など『事業』に当たらない場面まで事業者規制として扱うものではない。",
        uncertain: "境界的な活動が事業に当たるかは、反復継続性、活動目的、提供主体等の実態に応じて確認する。",
        sourceIds: [SOURCE_BASIC_POLICY]
      },
      {
        id: "dda-unjust-discriminatory-treatment",
        title: "不当な差別的取扱いをどう見分けるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "障害を理由として、正当な理由なくサービス・機会の提供を拒否・制限し、障害者でない者には付さない条件を付けるなど、障害者の権利利益を侵害する取扱いを避ける。抽象的な安全懸念や担当者の思い込みだけで一律拒否せず、具体的事情を確認する。",
        exception: "正当な理由がある場合まで禁止されるわけではないが、目的に照らして客観的に正当化できるかを具体的に検討し、必要に応じて代替手段も確認する。",
        uncertain: "正当な理由の有無は、事案ごとの安全性、事業の目的・内容、第三者への影響等により判断が変わる。",
        sourceIds: [SOURCE_BASIC_POLICY]
      },
      {
        id: "dda-reasonable-accommodation-dialogue",
        title: "合理的配慮を建設的対話からどう設計するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "障害者から社会的障壁の除去を必要としている旨の意思の表明があった場合、過重な負担にならない範囲で、本人の状況と希望を確認し、必要かつ合理的な対応を建設的対話により検討する。申出の方法を形式的に限定せず、本人の意思を把握できるコミュニケーションを確保する。",
        exception: "本人が希望した方法を常にそのまま実施する義務ではなく、過重な負担等がある場合は実現可能な代替案を本人と検討する。",
        uncertain: "必要な配慮は障害特性、場面、技術、環境整備の状況等によって変わり、固定的な一覧だけでは判断できない。",
        sourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY]
      },
      {
        id: "dda-undue-burden-alternatives",
        title: "『過重な負担』と代替案をどう判断するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "事業への影響、実現可能性、費用・負担、事業規模、財務状況等を具体的・客観的に考慮して過重な負担を判断する。希望どおりの措置が難しい場合も、別の方法で社会的障壁を除去できないかを検討する。",
        exception: "単に手間や費用が発生することだけで直ちに過重な負担になるわけではない。",
        uncertain: "同じ配慮でも事業者の規模・設備・人員、継続性、場面ごとの安全性等で負担評価は変わり得る。",
        sourceIds: [SOURCE_BASIC_POLICY]
      },
      {
        id: "dda-environmental-improvements",
        title: "環境の整備を個別の合理的配慮とどう組み合わせるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "施設のバリアフリー化、情報アクセシビリティ、コミュニケーション手段、社内体制・研修等の事前的改善を進め、個別の合理的配慮を提供しやすい基盤を整える。環境の整備は努力義務だが、反復する個別対応を減らしサービス全体の利用可能性を高める観点で継続的に見直す。",
        exception: "環境の整備を行っていても、個別の場面で必要な合理的配慮の検討が不要になるわけではない。",
        uncertain: "どの環境整備を優先するかは利用者層、施設・サービス特性、費用、既存設備等によって異なる。",
        sourceIds: [SOURCE_BASIC_POLICY]
      }
    ],
    practicalImpacts: [
      "顧客・利用者対応マニュアルの見直し",
      "店舗・施設・オンラインサービスのアクセシビリティ点検",
      "合理的配慮の申出受付・記録・エスカレーション設計",
      "従業員研修・相談窓口・事例共有",
      "所管省庁の対応指針との突合"
    ],
    sourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
    referenceArticleIds: []
  };
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  if (!topics.some((item) => item && item.slug === TOPIC)) window.TOPIC_DATA = topics.concat(topic);

  const reformEvent = {
    id: REFORM,
    title: "障害者差別解消法・2021年改正（事業者の合理的配慮義務化）",
    eventType: "law_amendment",
    lawId: "disability-discrimination-act",
    lawLabel: "障害者差別解消法",
    relatedTopics: [TOPIC],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2024-04-01"],
    effectiveDateNote: "令和5年政令第60号により2024年4月1日施行",
    effectiveDateSourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
    matchSourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
    sourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY]
  };
  const reforms = Array.isArray(window.LAW_REFORM_DATA) ? window.LAW_REFORM_DATA : [];
  if (!reforms.some((item) => item && item.id === REFORM)) window.LAW_REFORM_DATA = reforms.concat(reformEvent);

  const articleAdditions = [
    {
      id: "article-tmi-disability-reasonable-accommodation-20251030",
      title: "【障害福祉】障害者差別解消法（4） 合理的配慮",
      publisher: "TMI総合法律事務所",
      publishedAt: "2025-10-30",
      collectedAt: "2026-09-23",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17586.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／障害者差別解消法・合理的配慮",
      status: "adopted",
      summary: "2024年4月から民間事業者にも法的義務となった合理的配慮について、対象事業者、具体例、建設的対話・相互理解、意思の表明、過重な負担、環境の整備との関係を体系的に整理する。合理的配慮は個別性が高く、本人との対話を通じて実現可能な方法を探す必要があることを実務例とともに示す。",
      whyImportant: [
        "合理的配慮を単なる『配慮事例集』としてではなく、意思の表明、建設的対話、過重な負担、環境の整備という判断プロセスで整理している",
        "営利・非営利、個人・法人を問わない事業者の範囲や、対面・オンラインを問わないサービス提供形態まで確認できる",
        "本人の希望どおりの方法が難しい場合でも、代替案を含めて相互理解を図るという現場運用へ落とし込みやすい"
      ],
      audience: ["企業法務", "コンプライアンス担当", "店舗・施設運営", "カスタマーサポート", "サービス企画・UX担当"],
      audienceReason: "顧客・利用者から合理的配慮の申出を受ける現場で、法的義務の要件と具体的な検討・対話プロセスを社内ルールへ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [TOPIC],
      relatedIssues: ["dda-business-scope-employment-boundary", "dda-reasonable-accommodation-dialogue", "dda-undue-burden-alternatives", "dda-environmental-improvements"],
      primarySourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
      reformEventId: REFORM,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
      whatChanged: "バックフィル／2024年施行後の合理的配慮について、意思の表明・建設的対話・過重な負担・環境整備を一連の実務フローとして整理する解説を追加した。"
    },
    {
      id: "article-tmi-disability-unjust-treatment-20260717",
      title: "【障害福祉】障害者差別解消法（6） 不当な差別的取扱いの禁止",
      publisher: "TMI総合法律事務所",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-23",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18585.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／障害者差別解消法・不当な差別的取扱い",
      status: "adopted",
      summary: "障害を理由とする利用拒否・条件付与等の不当な差別的取扱いについて、正当な理由の考え方と具体例を整理し、抽象的な安全懸念や担当者の思い込みで一律拒否せず、本人の状況確認、代替手段・合理的配慮の検討、マニュアル・研修・相談窓口・事例共有まで企業の体制整備へ落としている。",
      whyImportant: [
        "『危ない』『対応できない』といった抽象的な理由での一律拒否が問題になり得ることを、サービス利用・契約場面の具体例で確認できる",
        "不当な差別的取扱いと合理的配慮を別々の条文論で終わらせず、利用拒否の前に本人の状況と代替手段を確認する運用へ接続している",
        "社内マニュアル、研修、相談窓口、過去事例の共有という再発防止・判断品質の仕組みまで示している"
      ],
      audience: ["企業法務", "コンプライアンス担当", "店舗・施設運営", "カスタマーサポート", "事業部門"],
      audienceReason: "現場担当者による利用拒否・契約制限・条件付与が障害を理由とする不当な差別的取扱いにならないよう、判断基準とエスカレーションを整えるため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [TOPIC],
      relatedIssues: ["dda-unjust-discriminatory-treatment", "dda-reasonable-accommodation-dialogue"],
      primarySourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
      reformEventId: REFORM,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [SOURCE_AMENDMENT, SOURCE_BASIC_POLICY],
      whatChanged: "バックフィル／障害を理由とする利用拒否・条件付与を、正当な理由、代替手段、現場マニュアル・相談体制まで含めて管理する実務解説を追加した。"
    }
  ];

  let articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshArticles = articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (freshArticles.length) window.ARTICLE_DATA = articles.concat(freshArticles);

  const liveTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (liveTopic) {
    liveTopic.referenceArticleIds = uniq([...(liveTopic.referenceArticleIds || []), ...articleAdditions.map((item) => item.id).filter((id) => (window.ARTICLE_DATA || []).some((article) => article && article.id === id))]);
  }
})();

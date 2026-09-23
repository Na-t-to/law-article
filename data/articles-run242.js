(() => {
  if (window.__LAW_INDEX_RUN242_APPLIED__) return;
  window.__LAW_INDEX_RUN242_APPLIED__ = true;

  const PRIVACY_TOPIC = "personal-information-protection-2026-amendment";
  const CONSUMER_TOPIC = "consumer-contract-law-review-2026";
  const PRIVACY_REFORM = "privacy-law-2026-amendment";
  const CONSUMER_REFORM = "consumer-contract-law-review-2026";
  const PPC_SOURCE = "source-ppc-apppi-subrules-369-20260916";
  const CAA_INTERIM_SOURCE = "source-caa-consumer-contract-interim-final-20260910";
  const CAA_COMMENT_SOURCE = "source-caa-consumer-contract-public-comment-20260916";
  const PRIVACY_ARTICLE = "article-miyake-privacy-rule-design-20260918";
  const CONSUMER_ARTICLE = "article-miyake-consumer-contract-interim-20260919";

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const sources = [
    {
      id: PPC_SOURCE,
      title: "第369回個人情報保護委員会・改正法の政令・規則整備に向けた基本的な考え方（案）①",
      type: "admin_document",
      typeLabel: "個人情報保護委員会・施行準備資料",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260916/",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法について、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等の政令・委員会規則の具体化に初めて踏み込んだ基本的な考え方（案）を公表した一次資料。",
      topics: [PRIVACY_TOPIC]
    },
    {
      id: CAA_INTERIM_SOURCE,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "policy",
      typeLabel: "消費者庁・制度見直し中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/notice/entry/047482/",
      importance: "高",
      whyImportant: "消費者の多様な脆弱性、契約からの解放、継続的契約の解約妨害・更新・変更、解約料等について、検討会が案段階を経て正式な中間取りまとめとして公表した一次資料。",
      topics: [CONSUMER_TOPIC]
    },
    {
      id: CAA_COMMENT_SOURCE,
      title: "『消費者契約法検討会 中間取りまとめ』に関する御意見募集について",
      type: "public_comment",
      typeLabel: "消費者庁・パブリックコメント",
      authority: "消費者庁",
      publishedAt: "2026-09-16",
      url: "https://www.caa.go.jp/notice/entry/047564/",
      importance: "高",
      whyImportant: "2026年9月10日の中間取りまとめについて、法制的な検討に先立つ意見募集が開始されたことを示す一次資料。現時点では法案・成立法ではないことを区別して追う基準になる。",
      topics: [CONSUMER_TOPIC]
    }
  ];

  let currentSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  sources.forEach((source) => {
    if (sourceIds.has(source.id) || sourceUrls.has(normalizeUrl(source.url))) return;
    currentSources = currentSources.concat([source]);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  });
  window.SOURCE_DATA = currentSources;

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || (topic.slug !== PRIVACY_TOPIC && topic.slug !== CONSUMER_TOPIC)) return topic;
    const currentSummary = topic.currentSummary || {};
    if (topic.slug === PRIVACY_TOPIC) {
      const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
        if (!issue || !["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"].includes(issue.id)) return issue;
        return { ...issue, sourceIds: addUnique(issue.sourceIds, PPC_SOURCE) };
      });
      return {
        ...topic,
        lastUpdated: "2026-09-23",
        lastVerified: "2026-09-23",
        overview: addUnique(topic.overview, "2026年9月16日の第369回個人情報保護委員会では、改正法の施行に向け、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等について、政令・委員会規則でどこまで具体化するかの基本的な考え方（案）が初めて示された。"),
        currentSummary: {
          ...currentSummary,
          facts: addUniqueMany(currentSummary.facts, [
            "2026年9月16日、個人情報保護委員会は、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等を対象に、改正法の政令・規則整備に向けた基本的な考え方（案）を公表した。",
            "本人同意不要の新たな例外については、本人が同意する意思を有している又は同意すべき立場にあり、不測の権利利益侵害をもたらさないことが自明な場合という枠内で、規則による具体化を検討している。",
            "顔特徴データ等については、現時点で規律対象となる特定生体個人識別符号として顔特徴データを対象とする方向を示し、カメラ等の周辺で本人が十分認識できる分かりやすい周知方法等を検討している。"
          ]),
          interpretations: addUniqueMany(currentSummary.interpretations, [
            "同意不要例外は事業者側の利便性や同意取得負担を理由に広く使える仕組みではなく、本人側から見て同意が自明といえる類型に限定して具体化される方向である。",
            "顔特徴データ等の対応はプライバシーポリシーへの一般的記載だけでなく、カメラ等の設置場所における表示や利用停止等請求への導線まで含めて設計する必要がある。"
          ]),
          implications: addUniqueMany(currentSummary.implications, [
            "本人同意を不要とする新例外の利用を想定するデータフローでは、規則の類型に形式的に当てはめるだけでなく、本人の意思に反しないことと不測の権利利益侵害がないことを場面ごとに説明・記録できるようにする。",
            "子供向け・子供利用が想定されるサービスと顔認証・AIカメラ等について、2026年9月16�

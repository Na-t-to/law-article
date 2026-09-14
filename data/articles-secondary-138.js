(() => {
  const topicSlug = "disability-discrimination-reasonable-accommodation";
  const preferredSourceId = "source-cao-disability-discrimination-basic-policy-2023";
  const basicPolicyUrl = "https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/r05/pdf/honbun.pdf";

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

  const existingSources = window.SOURCE_DATA || [];
  const existingSourceByUrl = existingSources.find((item) => normalizeUrl(item && item.url) === normalizeUrl(basicPolicyUrl));
  const existingSourceById = existingSources.find((item) => item && item.id === preferredSourceId);
  const basicPolicySourceId = (existingSourceByUrl && existingSourceByUrl.id) || (existingSourceById && existingSourceById.id) || preferredSourceId;

  if (!existingSourceByUrl && !existingSourceById) {
    window.SOURCE_DATA = existingSources.concat([{
      id: preferredSourceId,
      title: "障害を理由とする差別の解消の推進に関する基本方針",
      type: "guideline",
      typeLabel: "基本方針・閣議決定",
      authority: "内閣府",
      publishedAt: "2023-03-14",
      url: basicPolicyUrl,
      importance: "最高",
      whyImportant: "障害者差別解消法に基づく不当な差別的取扱い、合理的配慮、環境の整備、正当な理由・過重な負担等の判断枠組みを示す現行の基本方針。2024年4月の民間事業者への合理的配慮提供義務化後の実務を読む基礎となる。",
      topics: [topicSlug]
    }]);
  } else {
    const source = existingSourceByUrl || existingSourceById;
    if (source) {
      source.topics = Array.isArray(source.topics) ? source.topics : [];
      if (!source.topics.includes(topicSlug)) source.topics.push(topicSlug);
    }
  }

  const topics = window.TOPIC_DATA || [];
  const topic = topics.find((item) => item && (item.slug === topicSlug || item.id === topicSlug));
  const topicIssues = topic && Array.isArray(topic.issues) ? topic.issues : [];
  const findIssueId = (terms) => {
    const issue = topicIssues.find((item) => {
      const text = `${item && item.id || ""} ${item && item.title || ""}`;
      return terms.every((term) => text.includes(term));
    });
    return issue && issue.id;
  };
  const compact = (values) => [...new Set(values.filter(Boolean))];

  const reasonableAccommodationIssueId = findIssueId(["合理的配慮"]);
  const environmentIssueId = findIssueId(["環境"]);
  const discriminationIssueId = findIssueId(["差別"]);

  if (topic) {
    topic.sourceIds = Array.isArray(topic.sourceIds) ? topic.sourceIds : [];
    if (!topic.sourceIds.includes(basicPolicySourceId)) topic.sourceIds.push(basicPolicySourceId);
    compact([reasonableAccommodationIssueId, environmentIssueId, discriminationIssueId]).forEach((issueId) => {
      const issue = topicIssues.find((item) => item && item.id === issueId);
      if (!issue) return;
      issue.sourceIds = Array.isArray(issue.sourceIds) ? issue.sourceIds : [];
      if (!issue.sourceIds.includes(basicPolicySourceId)) issue.sourceIds.push(basicPolicySourceId);
    });
  }

  const articles = [
    {
      id: "article-tmi-disability-discrimination-2025-reasonable-accommodation",
      title: "【障害福祉】障害者差別解消法（4） 合理的配慮",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘・伊勢智子・水田進・森安博行・伏見純子",
      publishedAt: "2025-10-30",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17586.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所ブログ・障害者差別解消法",
      status: "adopted",
      summary: "2024年4月から民間事業者にも法的義務となった合理的配慮について、意思の表明、過重な負担、建設的対話、代替措置、環境の整備との関係を具体例とともに整理する。『できる・できない』の二択ではなく、本人との対話を通じて実現可能な対応を探すという実務上の判断プロセスが分かる。",
      whyImportant: [
        "合理的配慮の提供義務を、意思の表明・過重な負担・建設的対話という判断要素に分解して確認できる",
        "過重な負担と判断する場合にも理由説明と代替措置の検討が重要であり、現場の一律拒否を避ける運用設計に使える",
        "個別対応である合理的配慮と、不特定多数向けの事前改善である環境の整備の役割分担を整理できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "店舗・サービス運営", "人事・研修担当"],
      audienceReason: "顧客・利用者から配慮を求められた際に、現場で何を確認し、どこまで代替案を検討するかを社内ルールへ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: compact([reasonableAccommodationIssueId, environmentIssueId]),
      primarySourceIds: [basicPolicySourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／合理的配慮の判断フローと建設的対話を具体化する実務解説を補完した。"
    },
    {
      id: "article-tmi-disability-discrimination-2026-environment",
      title: "【障害福祉】障害者差別解消法（5） 環境の整備",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘・伊勢智子・水田進・森安博行・伏見純子",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18050.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所ブログ・障害者差別解消法",
      status: "adopted",
      summary: "障害者差別解消法5条の『環境の整備』を、個別の合理的配慮に先立つ不特定多数向けの事前的改善措置として整理する。設備だけでなく、ウェブアクセシビリティ、研修、マニュアル、人的支援体制なども含み、合理的配慮を反復して提供する場面では事前整備へ切り替える方が有効であることを示す。",
      whyImportant: [
        "環境の整備をバリアフリー設備だけに限定せず、情報アクセシビリティや社内体制・研修まで含む継続的な予防措置として捉えられる",
        "同種の合理的配慮が繰り返し必要になる場合、個別対応を積み重ねるより事前整備へ移すという運用改善の考え方が分かる",
        "合理的配慮と環境の整備を別々の義務として扱うのではなく、事前整備が個別対応の負担と実現可能性を左右する関係を確認できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "施設・店舗運営", "Web・DX担当", "人事・研修担当"],
      audienceReason: "設備・ウェブ・マニュアル・研修等の事前整備と、個別の合理的配慮を一体で運用するため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: compact([environmentIssueId, reasonableAccommodationIssueId]),
      primarySourceIds: [basicPolicySourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／合理的配慮を支える事前的な環境整備の実務解説を補完した。"
    },
    {
      id: "article-tmi-disability-discrimination-2026-unjust-treatment",
      title: "【障害福祉】障害者差別解消法（6） 不当な差別的取扱いの禁止",
      publisher: "TMI総合法律事務所",
      author: "菊田行紘・伊勢智子・水田進・森安博行・橋本直記・伏見純子",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18585.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所ブログ・障害者差別解消法",
      status: "adopted",
      summary: "民間事業者にも禁止される不当な差別的取扱いについて、障害を理由とする不利益取扱いと『正当な理由』の判断を具体例で整理する。抽象的な安全懸念や『前例がない』『対応方法が分からない』だけでは足りず、個別事情を確認し、代替手段や合理的配慮を検討する必要があることを現場運用まで落とし込む。",
      whyImportant: [
        "サービス拒否・条件付加等が不当な差別的取扱いとなる場面と、正当な理由が認められ得る場面を具体例で比較できる",
        "正当な理由の判断を安全・財産保全・事業機能等の目的と必要性から個別に説明する必要があり、抽象的な懸念による一律拒否を避ける基準になる",
        "マニュアル、研修、相談窓口、事例蓄積まで含め、個人の思い込みに依存しない組織的な障害者対応へ落とし込める"
      ],
      audience: ["企業法務", "コンプライアンス担当", "店舗・サービス運営", "CS・相談窓口", "人事・研修担当"],
      audienceReason: "入店・契約・サービス提供の拒否や条件設定が問題になる場面で、正当な理由と合理的配慮を切り分けて判断し、現場判断を標準化するため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: compact([discriminationIssueId, reasonableAccommodationIssueId]),
      primarySourceIds: [basicPolicySourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／不当な差別的取扱いと正当な理由の実務判断、社内体制整備を補完した。"
    }
  ];

  const existingArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((article) => !existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url)));
  if (additions.length) window.ARTICLE_DATA = existingArticles.concat(additions);
})();

(() => {
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
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

  const FILING_SOURCE_ID = "source-ai-ip-principle-code-filing-2026";
  const VOICE_ARTICLE_ID = "article-uslf-ai-voice-training-contracts-20260904";
  const CODE_TOPIC = "generative-ai-ip-principle-code";
  const BROAD_AI_IP_TOPIC = "generative-ai-ip-rights";
  const LIKENESS_TOPIC = "generative-ai-likeness-publicity";

  const voiceArticle = {
    id: VOICE_ARTICLE_ID,
    title: "過去に収録したナレーション音源をAI学習に使ってよいか―法務省の解釈指針を踏まえて",
    publisher: "弁護士法人内田・鮫島法律事務所",
    author: "高瀬 亜富",
    publishedAt: "2026-09-04",
    collectedAt: "2026-09-22",
    url: "https://www.it-houmu.com/archives/2784",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／AI音声・契約・著作隣接権",
    status: "adopted",
    summary: "過去に収録した声優・ナレーターの音源を音声合成AIの学習へ転用する場面を、実演家・レコード製作者等の著作隣接権、既存の利用許諾契約、人格的利益・パブリシティ権の三層から整理する。著作権法30条の4が著作隣接権にも準用され得る一方、特定人物の声の再現目的では享受目的の併存が問題となり得ること、権利制限規定は契約上の目的外利用を免責しないこと、学習段階のパブリシティ権は未確定でも侵害予防請求の可能性が残ることを踏まえ、既存音源の棚卸しと追加許諾の設計まで示す。",
    whyImportant: [
      "『著作権法30条の4があるから学習できる』で止めず、著作隣接権・契約・人格的利益／パブリシティ権を別々に確認する必要性を具体的な音源利用へ落としている",
      "収録時の契約にAI学習の定めがない場合、30条の4による権利制限が成立しても契約上の目的外利用が別途問題になり得るという、既存素材の再利用で見落としやすい差分を示す",
      "追加許諾について、対象音源、学習範囲、生成物の用途、対価、期間、利用停止申入れへの対応を定めるという契約実装まで示している"
    ],
    audience: ["企業法務", "知的財産担当", "AI・コンテンツ開発担当", "広告・音声コンテンツ担当", "調達・契約担当"],
    audienceReason: "過去に取得した音声素材をAI学習へ転用する際、権利制限規定だけで判断せず、既存契約の許諾範囲と本人の声に関する民事上の利益まで含めて追加許諾の要否・条件を設計するため。",
    categories: ["AI・デジタル", "知的財産", "契約"],
    relatedTopics: [BROAD_AI_IP_TOPIC, LIKENESS_TOPIC],
    relatedIssues: ["ai-ip-training-generation", "ai-likeness-legal-framework", "ai-likeness-publicity-use", "ai-likeness-personality-harm"],
    primarySourceIds: ["source-bunka-ai-copyright-2024", "source-moj-ai-likeness-report-2026"],
    legacyReformInference: false,
    whatChanged: "バックフィル／既存音源のAI学習を、著作隣接権・契約・人格的利益／パブリシティ権の三層で判断し、追加許諾条項へ落とす実務解説を追加した。"
  };

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(voiceArticle.id) && !articleUrls.has(normalizeUrl(voiceArticle.url))) {
    window.ARTICLE_DATA = existingArticles.concat(voiceArticle);
  }

  const broadTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === BROAD_AI_IP_TOPIC);
  if (broadTopic && (window.ARTICLE_DATA || []).some((article) => article && article.id === VOICE_ARTICLE_ID)) {
    broadTopic.referenceArticleIds = uniq([...(broadTopic.referenceArticleIds || []), VOICE_ARTICLE_ID]);
  }
  const likenessTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === LIKENESS_TOPIC);
  if (likenessTopic && (window.ARTICLE_DATA || []).some((article) => article && article.id === VOICE_ARTICLE_ID)) {
    likenessTopic.referenceArticleIds = uniq([...(likenessTopic.referenceArticleIds || []), VOICE_ARTICLE_ID]);
  }

  const codeTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CODE_TOPIC);
  if (codeTopic && (window.SOURCE_DATA || []).some((source) => source && source.id === FILING_SOURCE_ID)) {
    codeTopic.lastVerified = "2026-09-22";
  }

  const updateAddition = {
    id: "update-ai-ip-principle-code-filing-20260908",
    source: FILING_SOURCE_ID,
    headline: "生成AI知財プリンシプル・コードの届出開始日・様式が確定",
    publishedAt: "2026-09-08",
    type: "summary-update",
    typeLabel: "運用更新",
    summary: "内閣府知的財産戦略推進事務局が、生成AI知財プリンシプル・コードの受入れ届出様式を公表し、2026年10月26日から受付を開始すると明示した。",
    whatChanged: "届出開始時期の案内待ちから、2026年10月26日の受付開始を前提に公開内容・届出様式・社内承認を仕上げる段階へ移った。",
    affectedTopics: [CODE_TOPIC],
    affectedIssues: [
      {
        topic: CODE_TOPIC,
        issue: "ai-ip-code-acceptance",
        before: "届出開始時期と公式様式の案内待ち",
        after: "2026年10月26日から受付開始。届出様式は公開済みで、届出先等は開始日に案内"
      }
    ],
    before: "最終コードは公表済みだが、受入れ届出の開始時期と様式は別途案内とされていた。",
    after: "届出様式が公開され、受付開始日は2026年10月26日に確定。受入れ予定事業者は具体的な提出準備へ移れる。",
    keyPoints: [
      "届出受付は2026年10月26日から開始",
      "届出様式は2026年9月8日に公表済み",
      "届出先等は受付開始日に案内されるため当日の公式確認を残す"
    ],
    importance: "重要",
    tags: ["AI・デジタル", "知的財産"],
    confidence: "fact"
  };
  const existingUpdates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  if (!existingUpdates.some((item) => item && item.id === updateAddition.id)) {
    window.UPDATE_DATA = existingUpdates.concat(updateAddition);
  }
})();

(() => {
  const ARTICLE_ID = "article-amt-electronic-signature-dx-20230815";
  const TOPIC = "electronic-contract";
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
    id: ARTICLE_ID,
    title: "電子署名を活用したDX の最新事情及び今後の展望",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "宮川 賢司、武部 太河、重松 圭太、沓水 一輝",
    publishedAt: "2023-08-15",
    collectedAt: "2026-09-22",
    url: "https://amt-law.com/insights/newsletters/publication_0026988_ja_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニューズレター／電子署名・契約DX",
    status: "adopted",
    summary: "電子契約の法的整理を前提に、実装段階で残るリスクを具体化する。グループメールアドレスでの締結、異なる電子署名サービス間の運用、PDF上の印影・サイン表示と証拠評価、タイムスタンプ・長期署名、紙と電子の混在、サイバー攻撃、公正証書が必要な契約類型を挙げ、取締役会議事録や商業登記で求められる電子署名の要件が場面ごとに異なることも整理する。2023年時点の制度見通しそのものではなく、現在も残る本人確認・証拠保存・権限管理の実務論点をバックフィル対象とする。",
    whyImportant: [
      "電子署名法3条の推定だけで終わらず、誰がどのアカウント・権限で締結したか、後から何を証拠として再現できるかという運用設計へ落としている",
      "グループメール、複数ベンダー、紙と電子の混在、タイムスタンプ・長期署名など、電子契約を導入した後に現場で詰まりやすい論点を横断的に確認できる",
      "取締役会議事録や商業登記など、単なる契約締結より厳格な電子署名・本人確認が必要になり得る場面を分けており、現在のデジタル庁・法務省資料と合わせて運用を更新しやすい"
    ],
    audience: ["企業法務", "契約管理担当", "コーポレートガバナンス担当", "情報システム・セキュリティ担当"],
    audienceReason: "電子契約サービスの選定・運用を、形式的な電子署名の有無ではなく、本人確認、権限、操作ログ、保存、他の法定手続との接続まで含めて設計・見直しするため。",
    categories: ["契約", "情報セキュリティ", "会社法・ガバナンス"],
    relatedTopics: [TOPIC],
    relatedIssues: ["econtract-identity", "econtract-log"],
    primarySourceIds: ["source-electronic-signature", "source-electronic-signature-qa-2024", "source-digital-sign-modernization-2025", "source-commercial-registry-remote-sign-2025"],
    legacyReformInference: false,
    whatChanged: "バックフィル／電子契約の証拠力を、本人確認・権限・複数サービス・長期保存・紙との混在・商業登記等の実装論点へ落とした実務解説を追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE_ID)) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, ARTICLE_ID);
  }
})();
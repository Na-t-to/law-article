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

  const FILING_SOURCE_ID = "source-ai-ip-principle-code-filing-20260908";
  const FILING_ARTICLE_ID = "article-ai-ip-principle-code-filing-20260908";
  const VOICE_ARTICLE_ID = "article-uslf-ai-voice-training-contracts-20260904";
  const CODE_TOPIC = "generative-ai-ip-principle-code";
  const BROAD_AI_IP_TOPIC = "generative-ai-ip-rights";
  const LIKENESS_TOPIC = "generative-ai-likeness-publicity";

  const sourceAddition = {
    id: FILING_SOURCE_ID,
    title: "生成AI知財プリンシプル・コードの届出開始日・届出様式",
    type: "guideline",
    typeLabel: "運用案内・届出",
    authority: "内閣府 知的財産戦略推進事務局",
    publishedAt: "2026-09-08",
    url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
    importance: "最高",
    whyImportant: "生成AI知財プリンシプル・コードの受入れ届出について、2026年10月26日の受付開始、届出様式の公表、届出先等は開始日に案内することを示す現行の公式運用ページ。",
    topics: [CODE_TOPIC, BROAD_AI_IP_TOPIC]
  };
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(sourceAddition.id) && !sourceUrls.has(normalizeUrl(sourceAddition.url))) {
    window.SOURCE_DATA = existingSources.concat(sourceAddition);
  }

  const filingArticle = {
    id: FILING_ARTICLE_ID,
    title: "生成AI知財プリンシプル・コードの届出開始日・届出様式を公表",
    publisher: "内閣府 知的財産戦略推進事務局",
    author: "内閣府 知的財産戦略推進事務局",
    publishedAt: "2026-09-08",
    collectedAt: "2026-09-22",
    url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
    sourceType: "primary",
    sourceLabel: "一次資料・運用更新／生成AI知財プリンシプル・コード",
    status: "adopted",
    summary: "生成AI知財プリンシプル・コードの受入れ届出について、内閣府知的財産戦略推進事務局が2026年9月8日に届出様式を公表し、受付を同年10月26日から開始すると明示した運用更新。届出先等は受付開始日に案内するとしている。",
    whyImportant: [
      "『届出開始時期は別途案内』だった状態から、2026年10月26日開始という具体的な準備期限へ移ったことを一次資料で確認できる",
      "届出様式が公開されたため、受入れを予定する事業者は原則ごとの実施・説明方針、公開内容、社内承認、届出情報を実際の様式に合わせて仕上げられる",
      "届出先等は開始日に公表予定であり、確定済みの開始日・様式と、なお開始日確認が必要な提出方法を分けて管理できる"
    ],
    audience: ["AIサービス提供事業者", "企業法務", "知的財産担当", "AIガバナンス担当"],
    audienceReason: "プリンシプル・コードの受入れを検討する事業者が、未定だった受付時期を具体的な準備日程へ落とし、様式に沿った社内確認を進めるため。",
    categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
    relatedTopics: [CODE_TOPIC, BROAD_AI_IP_TOPIC],
    relatedIssues: ["ai-ip-code-acceptance", "ai-ip-code-disclosure", "ai-ip-transparency"],
    primarySourceIds: [FILING_SOURCE_ID, "source-ai-ip-principle-code-2026"],
    legacyReformInference: false,
    whatChanged: "実質更新／受入れ届出の開始日が2026年10月26日に確定し、届出様式が公開されたため、開始時期待ちから具体的な届出準備へ整理を更新した。"
  };

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
  const additions = [filingArticle, voiceArticle].filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = existingArticles.concat(additions);

  const codeTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === CODE_TOPIC);
  if (codeTopic) {
    codeTopic.lastUpdated = "2026-09-22";
    codeTopic.lastVerified = "2026-09-22";
    codeTopic.sourceIds = uniq([...(codeTopic.sourceIds || []), FILING_SOURCE_ID]);
    codeTopic.referenceArticleIds = uniq([...(codeTopic.referenceArticleIds || []), FILING_ARTICLE_ID]);
    if (Array.isArray(codeTopic.overview)) {
      codeTopic.overview = codeTopic.overview.map((text) =>
        String(text).includes("受入れ届出の開始時期は公式ページで別途案内")
          ? "原則は、モデル・学習・知財保護措置等の概要開示、権利侵害を主張する者からの照会対応、生成物と類似するコンテンツに関する利用者からの照会対応を柱とする。2026年9月8日に届出様式と同年10月26日の受付開始が公表され、届出先等は受付開始日に案内される。"
          : text
      );
    }
    if (codeTopic.currentSummary) {
      if (Array.isArray(codeTopic.currentSummary.facts)) {
        codeTopic.currentSummary.facts = codeTopic.currentSummary.facts.map((text) =>
          String(text).includes("コード受入れに関する内閣府への届出開始時期")
            ? "2026年9月8日、内閣府知的財産戦略推進事務局はコード受入れの届出様式を公表し、受付を2026年10月26日から開始すると明示した。届出先等は受付開始日に公表するとしている。"
            : text
        );
      }
      if (Array.isArray(codeTopic.currentSummary.implications)) {
        codeTopic.currentSummary.implications = codeTopic.currentSummary.implications.map((text) =>
          String(text).includes("受入れ届出の開始時期と公式様式")
            ? "受入れを予定する場合、公開情報とエクスプレインの根拠、社内承認、届出様式への記載内容を10月26日の受付開始に向けて仕上げ、当日は公表される届出先・提出方法を確認する。"
            : text
        );
      }
      if (Array.isArray(codeTopic.currentSummary.uncertain)) {
        codeTopic.currentSummary.uncertain = codeTopic.currentSummary.uncertain.map((text) =>
          String(text).includes("受入れ届出の開始時期は2026年9月3日時点")
            ? "届出先・提出方法は2026年10月26日の受付開始日に案内するとされているため、開始日当日の公式情報を確認する必要がある。"
            : text
        );
      }
    }
    const acceptanceIssue = (codeTopic.issues || []).find((issue) => issue.id === "ai-ip-code-acceptance");
    if (acceptanceIssue) {
      acceptanceIssue.status = "pending";
      acceptanceIssue.stage = "effective";
      acceptanceIssue.conclusion = "原則ごとに実施・説明の方針と対外説明の根拠を整え、公開済みの届出様式に沿って2026年10月26日の受付開始へ準備する。届出先等は開始日に公式案内を確認する。";
      acceptanceIssue.sourceIds = uniq([...(acceptanceIssue.sourceIds || []), FILING_SOURCE_ID]);
    }
  }

  const broadTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === BROAD_AI_IP_TOPIC);
  if (broadTopic) {
    broadTopic.referenceArticleIds = uniq([...(broadTopic.referenceArticleIds || []), FILING_ARTICLE_ID, VOICE_ARTICLE_ID]);
  }
  const likenessTopic = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === LIKENESS_TOPIC);
  if (likenessTopic) {
    likenessTopic.referenceArticleIds = uniq([...(likenessTopic.referenceArticleIds || []), VOICE_ARTICLE_ID]);
  }

  const codeSource = (window.SOURCE_DATA || []).find((source) => source && source.id === "source-ai-ip-principle-code-2026");
  if (codeSource) {
    codeSource.whyImportant = "生成AI開発者・提供者に対し、透明性・知財保護に関する概要開示、権利者・利用者からの照会対応をコンプライ・オア・エクスプレイン方式で求める最終版の公式コード。2026年9月8日に届出様式と同年10月26日の受付開始が公表され、具体的な実装・届出準備の基準点になっている。";
  }

  const codeArticle = (window.ARTICLE_DATA || []).find((article) => article && article.id === "article-ai-ip-principle-code-2026");
  if (codeArticle) {
    codeArticle.summary = "生成AI開発者・提供者に対し、モデル・学習・知財保護措置等の概要開示、権利侵害を主張する者からの照会、生成AI利用者からの類似コンテンツに関する照会への対応を、コンプライ・オア・エクスプレイン方式で求める最終版のプリンシプル・コード。2026年8月25日に公式公表され、同年9月8日には届出様式と10月26日の受付開始が公表された。";
    codeArticle.primarySourceIds = uniq([...(codeArticle.primarySourceIds || []), FILING_SOURCE_ID]);
    codeArticle.whatChanged = "実質更新／最終コード公表後、2026年9月8日に受入れ届出様式と10月26日の受付開始が公表された運用状況を追記した。";
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
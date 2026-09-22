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
  const SOURCE_ID = "source-commercial-registry-remote-sign-2025";
  const TOPIC = "electronic-contract";
  const ARTICLE_ID = "article-amt-esign-dx-2023";
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];

  const source = (window.SOURCE_DATA || []).find((item) => item && item.id === SOURCE_ID);
  if (source) {
    source.title = "商業登記電子証明書のリモート署名方式の運用開始について";
    source.typeLabel = "商業登記・リモート署名／運用開始";
    source.authority = "デジタル庁・法務省";
    source.publishedAt = "2026-07-17";
    source.url = "https://www.digital.go.jp/news/aa53adcd-9b8a-4a1e-bc94-0f7cd5858324";
    source.importance = "高";
    source.whyImportant = "2026年7月21日からGビズIDと連携した商業登記電子証明書のリモート署名方式が実運用に入り、署名鍵をクラウド上で管理する方式、既存のファイル形式証明書との併存、利用開始手順等を確認できる現行の公式案内。";
  }

  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === ARTICLE_ID);
  if (article) {
    article.primarySourceIds = uniq([...(article.primarySourceIds || []), "source-digital-sign-modernization-2025", SOURCE_ID]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic) {
    topic.lastUpdated = "2026-09-22";
    topic.lastVerified = "2026-09-22";
    const oldFact = "商業登記電子証明書について、GビズIDと連携し署名鍵をクラウド上で管理するリモート署名方式が案内されており、法人代表者等の電子署名でも鍵管理・認可方法が更新されている。";
    const newFact = "商業登記電子証明書のリモート署名方式は2026年7月21日に運用開始され、GビズIDと連携して署名鍵をクラウド上で管理し、オンラインで電子署名を付与できるようになった。既存のファイル形式電子証明書も一定範囲で併存する。";
    if (topic.currentSummary && Array.isArray(topic.currentSummary.facts)) {
      const index = topic.currentSummary.facts.indexOf(oldFact);
      if (index >= 0) topic.currentSummary.facts[index] = newFact;
      else if (!topic.currentSummary.facts.includes(newFact)) topic.currentSummary.facts.push(newFact);
    }
  }
})();

(() => {
  const TOPIC = "ip-knowhow-data-transactions";
  const ISSUE = "iptx-warranty-liability";
  const CASE_SOURCE = "source-ip-high-court-ip-warranty-20231108";
  const ARTICLE_ID = "article-amt-ip-warranty-indemnity-20240326";
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

  const source = {
    id: CASE_SOURCE,
    title: "知財高裁令和5年11月8日判決（令和5年（ネ）第10064号 損害賠償等請求控訴事件）",
    type: "case",
    typeLabel: "知財高裁判決・非侵害保証／補償条項",
    authority: "知的財産高等裁判所",
    publishedAt: "2023-11-08",
    url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-92496.pdf",
    importance: "高",
    whyImportant: "売買契約の第三者知的財産権に関する非侵害保証・補償条項について、侵害事実確定後の損失補償だけでなく、侵害警告段階でも製造元が技術・権利関係等の必要情報を提供して買主に協力する義務を認める一方、訴訟提起や無効審判請求まで当然に義務付けられるものではないとした知財高裁判決。",
    topics: [TOPIC]
  };
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(sources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(sources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = sources.concat(source);
  }

  const article = {
    id: ARTICLE_ID,
    title: "売買契約における特許権等の非侵害保証及び補償条項に照らした売主の責任について判断を示した知財高裁判決",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "大石 裕太",
    publishedAt: "2024-03-26",
    collectedAt: "2026-09-22",
    url: "https://amt-law.com/insights/newsletters/publication_0028078_ja_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニューズレター／知財非侵害保証・補償条項",
    status: "adopted",
    summary: "知財高裁令和5年11月8日判決を基に、売買契約の非侵害保証・補償条項が、侵害事実の確定後に生じる損失補償義務だけでなく、条項文言と製造元の情報優位性によっては、第三者から侵害警告を受けた段階で技術的知見・権利関係その他の必要情報を提供し、買主が交渉上不当に不利にならないよう協力する義務まで含み得ることを整理する。他方、売主に訴訟提起や無効審判請求まで当然に求めるものではなく、買主側の経営判断で取引を断念した場合の損害との因果関係にも注意が必要とする。",
    whyImportant: [
      "『第三者権利を侵害しないことを保証する』『抵触した場合は売主の負担と責任で処理解決する』という典型的な文言から、侵害警告時の情報提供・協力義務まで具体的に認定した裁判例を契約ドラフトへ反映できる",
      "買主側が警告段階から防御・補償を求めるなら、『侵害した場合』だけでなく『侵害の主張・クレーム・紛争が生じた場合』をトリガーにし、通知、情報提供、防御方針、和解権限、費用負担を明示する必要性が分かる",
      "補償条項違反と損害賠償の範囲は別問題であり、買主自身の経営判断による取引中止では相当因果関係や過失相殺が問題になり得るという、責任分担の実務上の限界を確認できる"
    ],
    audience: ["企業法務", "知的財産担当", "調達・購買担当", "営業・事業部門", "契約書ひな形管理担当"],
    audienceReason: "製品・部品・システム等の売買や調達契約で第三者知財権の非侵害保証・補償条項を設計し、侵害警告を受けた後の通知・情報提供・防御・和解・費用負担をどこまで相手方へ求めるかを具体化するため。",
    categories: ["知的財産", "契約"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [CASE_SOURCE, "source-ip-knowhow-data-guideline-2026"],
    legacyReformInference: false,
    whatChanged: "整理変更なし／知財非侵害保証・補償条項について、侵害警告段階の情報提供・協力義務と、訴訟・無効審判まで当然には求められない限界を示す知財高裁判決の実務解説をバックフィルした。"
  };
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE_ID);
  const sourceExists = (window.SOURCE_DATA || []).some((item) => item && item.id === CASE_SOURCE);
  if (topic && articleExists) {
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, ARTICLE_ID);
    if (sourceExists) topic.sourceIds = addUnique(topic.sourceIds, CASE_SOURCE);
    const issue = (topic.issues || []).find((item) => item && item.id === ISSUE);
    if (issue && sourceExists) issue.sourceIds = addUnique(issue.sourceIds, CASE_SOURCE);
  }
})();

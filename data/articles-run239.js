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
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueMany = (list, values) => (values || []).reduce((next, value) => addUnique(next, value), Array.isArray(list) ? list : []);

  const sourceAdditions = [
    {
      id: "source-jfba-third-party-committee-guideline-20101217",
      title: "企業等不祥事における第三者委員会ガイドライン",
      type: "guideline",
      typeLabel: "日本弁護士連合会・第三者委員会ガイドライン",
      authority: "日本弁護士連合会",
      publishedAt: "2010-12-17",
      url: "https://www.nichibenren.or.jp/document/opinion/year/2010/100715_2.html",
      importance: "最高",
      whyImportant: "企業不祥事における第三者委員会について、企業からの独立性、調査範囲、原因分析、再発防止、公表等の実務上の考え方を示す発行主体の公式ガイドライン。第三者委員会という名称だけでなく、その目的・役割・独立性を具体的に検討する基準点になる。",
      topics: ["corporate-misconduct-investigations"]
    },
    {
      id: "source-supreme-court-investigation-committee-counsel-20220627",
      title: "最高裁令和4年（許）第3号 訴訟代理人による訴訟行為の排除を求める申立て却下決定に対する抗告審の取消決定に対する許可抗告事件（令和4年6月27日第一小法廷決定）",
      type: "case",
      typeLabel: "最高裁決定・責任調査委員会／訴訟代理人",
      authority: "最高裁判所",
      publishedAt: "2022-06-27",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-91275.pdf",
      importance: "最高",
      whyImportant: "会社が取締役の会社法423条1項に基づく損害賠償責任の有無等を調査するため設置した責任調査委員会の委員弁護士について、委員会の設置目的・職務内容・事情聴取時の説明等を具体的に踏まえ、後続の責任追及訴訟で会社の訴訟代理人となることを弁護士法25条2号・4号の類推適用により一律に排除できないとした最高裁決定。",
      topics: ["corporate-misconduct-investigations"]
    }
  ];

  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const acceptedSources = sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (acceptedSources.length) window.SOURCE_DATA = existingSources.concat(acceptedSources);

  const article = {
    id: "article-nishimura-investigation-committee-role-20250430",
    title: "第三者委員会、責任調査委員会等の調査委員会の役割・機能／シンガポールの贈収賄規制・執行状況と企業への影響について",
    publisher: "西村あさひ法律事務所・外国法共同事業",
    author: "木目田 裕",
    publishedAt: "2025-04-30",
    collectedAt: "2026-09-22",
    url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_crisis_management_250430",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニューズレター／第三者委員会・責任調査委員会",
    status: "adopted",
    summary: "ニューズレター第I部を収録対象とし、日弁連ガイドラインに準拠する第三者委員会と、取締役の会社法上の責任追及の要否等について監査役等へ法的助言を行う責任調査委員会を、その名称ではなく役割・機能から区別する。最高裁2022年6月27日決定を踏まえ、責任調査委員を務めた弁護士が後続の責任追及訴訟で会社の訴訟代理人となることを形式だけで一律に排除せず、委員会の設置目的、調査対象者への説明、具体的な利益相反・弊害を検討すべきと論じる。",
    whyImportant: [
      "不祥事の事実認定・原因分析・再発防止を担う第三者委員会と、取締役の法的責任の有無や責任追及訴訟の要否について助言する責任調査委員会を区別し、調査体制の選択を名称ではなく目的と機能から設計できる",
      "最高裁2022年6月27日決定を一次資料として、責任調査委員を務めた弁護士の後続訴訟代理を形式的に禁止するのではなく、委員会の設置目的・職務内容・事情聴取時の説明等から具体的に評価する視点を得られる",
      "責任追及の可能性がある役職員へのヒアリングでは、委員会の目的や供述が後の訴訟で使われ得ることを誤解なく説明するなど、調査対象者との関係での行為規範を実務へ落とし込める"
    ],
    audience: ["企業法務", "コンプライアンス", "内部監査", "取締役・監査役", "危機管理"],
    audienceReason: "不祥事発生後に、第三者委員会・責任調査委員会等のどの体制を採用し、委員の役割、独立性、調査対象者への説明、後続の責任追及や訴訟代理との関係をどう設計するかを判断するため。",
    categories: ["危機管理・コンプライアンス", "会社法・ガバナンス"],
    relatedTopics: ["corporate-misconduct-investigations"],
    relatedIssues: ["misconduct-investigation-structure-independence", "misconduct-investigation-counsel-conflicts"],
    primarySourceIds: [
      "source-jpx-misconduct-response-principles-20160224",
      "source-jfba-third-party-committee-guideline-20101217",
      "source-supreme-court-investigation-committee-counsel-20220627"
    ],
    legacyReformInference: false,
    whatChanged: "バックフィル／第三者委員会と責任調査委員会を役割・機能から区別し、最高裁2022年6月27日決定を踏まえて委員弁護士の後続訴訟代理と調査対象者への説明を具体的に整理する実務解説を追加した。"
  };

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "corporate-misconduct-investigations");
  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === article.id);
  if (topic && articleExists) {
    topic.lastUpdated = "2026-09-22";
    topic.lastVerified = "2026-09-22";
    topic.sourceIds = addUniqueMany(topic.sourceIds, [
      "source-jfba-third-party-committee-guideline-20101217",
      "source-supreme-court-investigation-committee-counsel-20220627"
    ]);
    topic.referenceArticleIds = addUnique(topic.referenceArticleIds, article.id);

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueMany(topic.currentSummary.facts, [
        "日本弁護士連合会の『企業等不祥事における第三者委員会ガイドライン』は2010年7月15日に策定され、同年12月17日に改訂された。第三者委員会の独立性、調査、原因分析、再発防止、公表等を整理する実務上の基準点となっている。",
        "最高裁は2022年6月27日、会社が取締役の責任の有無等を調査するため設置した責任調査委員会について、その設置目的・職務内容・事情聴取時の説明等を踏まえ、委員弁護士が後続の責任追及訴訟で会社の訴訟代理人となることを弁護士法25条2号・4号の類推適用で排除できないとした。"
      ]);
      topic.currentSummary.interpretations = addUnique(
        topic.currentSummary.interpretations,
        "第三者委員会と責任調査委員会は、どちらも外部弁護士等で構成され得るが、前者は不祥事の事実・原因・再発防止等を独立した立場から調査するのに対し、後者は取締役の責任追及の要否等について会社側へ法的助言する機能を持ち得るため、名称ではなく設置目的・依頼関係・職務内容から区別する必要がある。"
      );
      topic.currentSummary.implications = addUnique(
        topic.currentSummary.implications,
        "調査委員会を設置するときは、第三者委員会・責任調査委員会等の名称だけでなく、誰のために何を調査・判断する委員会か、調査結果が責任追及や訴訟で利用され得るかを文書化し、ヒアリング対象者にも誤解のない形で説明する。"
      );
    }

    const structure = (topic.issues || []).find((issue) => issue && issue.id === "misconduct-investigation-structure-independence");
    if (structure) {
      structure.sourceIds = addUnique(structure.sourceIds, "source-jfba-third-party-committee-guideline-20101217");
      structure.conclusion = "事案の規模・社会的影響・経営陣関与・内部統制への疑義等を踏まえ、必要な客観性・中立性・専門性を確保できる調査体制を選ぶ。第三者委員会、責任調査委員会その他の委員会は名称ではなく、設置目的・依頼関係・職務内容・情報アクセス等の実質から役割を区別する。";
    }

    const conflicts = (topic.issues || []).find((issue) => issue && issue.id === "misconduct-investigation-counsel-conflicts");
    if (conflicts) {
      conflicts.sourceIds = addUniqueMany(conflicts.sourceIds, [
        "source-jfba-third-party-committee-guideline-20101217",
        "source-supreme-court-investigation-committee-counsel-20220627"
      ]);
      conflicts.conclusion = "外部弁護士の役割は、特定の経営陣・通報者・部門の期待する結論ではなく、委員会の設置目的、依頼関係、職務内容と具体的な利益相反から定める。責任調査委員であったことだけを理由に後続の責任追及訴訟の代理を一律に排除せず、調査対象者への説明や実際の弊害を個別に確認する。";
      conflicts.exception = "日弁連ガイドラインに準拠する第三者委員会と、会社のために取締役責任の有無等を調査・助言する責任調査委員会は役割が異なり得る。調査弁護士と役員個人の代理人、社内の意思決定者等の役割も、利益相反や守秘関係を踏まえて区別する。";
    }

    topic.practicalImpacts = addUniqueMany(topic.practicalImpacts, [
      "第三者委員会・責任調査委員会の役割定義",
      "調査対象者への目的説明・後続訴訟との関係整理"
    ]);
  }
})();

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
  const uniq = (values = []) => [...new Set((values || []).filter(Boolean))];
  const ARTICLE_ID = "article-businesslawyers-specific-biometric-data-20260909";
  const TOPIC_ID = "personal-information-protection-2026-amendment";

  const article = {
    id: ARTICLE_ID,
    title: "特定生体個人情報とは？定義や具体例、企業に求められる対応など",
    publisher: "BUSINESS LAWYERS",
    author: "渡邉 雅之",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-22",
    url: "https://www.businesslawyers.jp/practices/1495",
    sourceType: "secondary",
    sourceLabel: "実務Q&A／2026年個人情報保護法・特定生体個人情報",
    status: "adopted",
    summary: "2026年改正個人情報保護法で新設される特定生体個人情報について、顔特徴データを中心に、要配慮個人情報とは別建ての規律であること、周知義務・オプトアウト第三者提供の禁止・違法性を要しない利用停止等請求という三本柱を整理する。さらに、顔認証・防犯カメラ連携システムの棚卸し、掲示・プライバシーポリシーの点検、利用停止等請求フロー、委託・共同利用と第三者提供の切り分け、本人照合のため取得する顔データの利用制限・ログ管理まで実装へ落とす。記事は2026年8月26日時点の下位法令検討を前提としており、その後の政令・規則・ガイドラインの検討状況は現行一次資料を併読する。",
    whyImportant: [
      "『顔データ＝要配慮個人情報』と整理せず、特定生体個人情報に固有の周知・オプトアウト提供禁止・利用停止等請求の規律を分けて確認できる",
      "顔認証や防犯カメラ連携の棚卸しから、施設掲示・プライバシーポリシー、利用停止等請求の受付・本人照合・削除まで、法改正を業務・システム要件へ落とし込める",
      "本人の利用停止等請求に応じるための本人照合で新たな顔データを取得し得るという実務上の難所について、取得・保存・削除ログと目的外利用の遮断まで含む統制を検討できる"
    ],
    audience: ["企業法務", "個人情報・プライバシー担当", "情報セキュリティ", "プロダクト・データ担当", "店舗・施設運営担当"],
    audienceReason: "顔認証・防犯カメラ連携その他の生体識別機能について、改正法施行前に対象システムを棚卸しし、周知、第三者提供、利用停止等請求の運用を具体的に設計するため。",
    categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
    relatedTopics: [TOPIC_ID],
    relatedIssues: ["privacy-2026-biometric"],
    primarySourceIds: [
      "source-privacy-law-2026-amendment",
      "source-privacy-law-2026-rulemap",
      "source-ppc-privacy-rulemaking-basic-1-2026"
    ],
    reformEventId: "privacy-law-2026-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-privacy-law-2026-amendment"],
    legacyReformInference: false,
    whatChanged: "実務解説補強／特定生体個人情報を、顔認証・防犯カメラ連携の棚卸し、周知、第三者提供、利用停止等請求、本人照合時のデータ統制まで落とす実務Q&Aを追加した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(article.id) && !urls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existing.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC_ID);
  if (topic && (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE_ID)) {
    topic.referenceArticleIds = uniq([...(topic.referenceArticleIds || []), ARTICLE_ID]);
  }
})();

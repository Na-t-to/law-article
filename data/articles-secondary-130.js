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
  const replaceText = (values, predicate, replacement) => {
    if (!Array.isArray(values)) return;
    const index = values.findIndex(predicate);
    if (index >= 0) values[index] = replacement;
    else values.push(replacement);
  };

  const sourceId = "source-ppc-privacy-2026-rulemaking-roadmap";
  const reformEventId = "privacy-law-2026-amendment";
  const source = {
    id: sourceId,
    title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則・ガイドライン等の整備に関する今後の進め方（案）",
    type: "guideline",
    typeLabel: "個人情報保護委員会・施行ルール整備ロードマップ",
    authority: "個人情報保護委員会",
    publishedAt: "2026-09-09",
    url: "https://www.ppc.go.jp/files/pdf/260909_shiryou-1.pdf",
    importance: "最高",
    whyImportant: "2026年改正個人情報保護法の下位ルールについて、子供・顔特徴データ・本人関与、統計作成等・委託先・漏えい等、連絡可能個人関連情報・オプトアウト・課徴金の順に議論し、意見交換・ヒアリングを経てパブリックコメントへ進む当面の工程を個人情報保護委員会が示した資料。",
    topics: ["personal-information-protection-2026-amendment", "ai-personal-data"]
  };
  const article = {
    id: "article-ppc-privacy-2026-rulemaking-roadmap",
    title: "2026年改正個人情報保護法 政令・規則・ガイドライン等の整備に関する今後の進め方",
    publisher: "個人情報保護委員会",
    author: "個人情報保護委員会事務局",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-14",
    url: "https://www.ppc.go.jp/files/pdf/260909_shiryou-1.pdf",
    sourceType: "primary",
    sourceLabel: "一次資料・改正法／下位ルール整備ロードマップ",
    status: "adopted",
    summary: "2026年改正個人情報保護法の政令・委員会規則・ガイドライン等について、2026年9月以降の検討順序とマルチステークホルダー連携プロセスを示した個人情報保護委員会の資料。9月中旬に子供・顔特徴データ・本人関与、9月下旬から10月上旬に統計作成等・委託先・漏えい等、10月中旬に連絡可能個人関連情報・オプトアウト・課徴金の基本的考え方を順次議論し、意見交換・事務局ヒアリングを経て具体案とパブリックコメントへ進む予定が示された。",
    whyImportant: [
      "8月26日の『政令・規則等で定める事項の全体像』から一歩進み、どの論点がいつ具体化され始めるかを追える",
      "AI開発に関係する統計作成等の特例と委託先規律は9月下旬から10月上旬の検討枠に置かれており、未確定事項を先取りせず監視時期を設定できる",
      "子供・顔特徴データ、連絡可能個人関連情報、課徴金なども順次議論され、消費者側・事業者側との意見交換とヒアリングを経てパブリックコメントへ進むため、施行準備の更新点を把握しやすい"
    ],
    audience: ["企業法務", "プライバシー担当", "AI・データ利活用担当", "情報セキュリティ・委託管理"],
    audienceReason: "改正法の下位ルールが未確定の段階で、論点ごとの検討時期と公表プロセスを把握し、社内規程・同意画面・委託契約・データ利用審査の改修を確定前に走らせ過ぎないため。",
    categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
    relatedTopics: ["personal-information-protection-2026-amendment", "ai-personal-data"],
    relatedIssues: [
      "privacy-2026-children",
      "privacy-2026-consent-exceptions",
      "privacy-2026-biometric",
      "privacy-2026-contactable-related-info",
      "privacy-2026-outsourcing",
      "privacy-2026-surcharge",
      "ai-statistical-use",
      "ai-outsourcing"
    ],
    primarySourceIds: [sourceId, "source-privacy-law-2026-amendment", "source-privacy-law-2026-rulemap"],
    reformEventId,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-privacy-law-2026-amendment"],
    whatChanged: "テーマ更新／2026年改正個人情報保護法の下位ルールについて、論点別の検討順序と意見交換・ヒアリング・パブリックコメントへ至る当面の工程が2026年9月9日に明示されたため、未確定事項の監視時期を具体化した。"
  };

  const currentSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingSourceIds.has(source.id) && !existingSourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = currentSources.concat(source);
  }

  const privacyTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "personal-information-protection-2026-amendment");
  if (privacyTopic) {
    addUnique(privacyTopic.sourceIds, [sourceId]);
    privacyTopic.lastUpdated = "2026-09-14";
    privacyTopic.lastVerified = "2026-09-14";
    if (privacyTopic.currentSummary) {
      addUnique(privacyTopic.currentSummary.facts, [
        "2026年9月9日、個人情報保護委員会は改正法の政令・規則・ガイドライン等について、9月中旬から10月中旬にかけて論点別に基本的な考え方を順次議論し、意見交換・事務局ヒアリングを経て具体案とパブリックコメントへ進む当面の工程を示した。"
      ]);
      replaceText(
        privacyTopic.currentSummary.uncertain,
        (text) => String(text).includes("特定生体個人情報の具体的範囲") || String(text).includes("政令・規則・ガイドライン・Q&A"),
        "特定生体個人情報、子供、同意不要例外、連絡可能個人関連情報、委託先規律、課徴金等の具体要件はなお未確定。ただし、2026年9月9日の工程では、子供・顔特徴データ・本人関与を9月中旬、統計作成等・委託先・漏えい等を9月下旬～10月上旬、連絡可能個人関連情報・オプトアウト・課徴金を10月中旬に順次議論し、その後に意見募集へ進む予定が示されている。"
      );
    }
  }

  const aiTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "ai-personal-data");
  if (aiTopic) {
    addUnique(aiTopic.sourceIds, [sourceId]);
    aiTopic.lastUpdated = "2026-09-14";
    aiTopic.lastVerified = "2026-09-14";
    if (aiTopic.currentSummary) {
      addUnique(aiTopic.currentSummary.facts, [
        "2026年9月9日の個人情報保護委員会資料では、統計作成等と委託先の下位ルールについて、2026年9月下旬から10月上旬に基本的な考え方を議論する当面の工程が示された。"
      ]);
      replaceText(
        aiTopic.currentSummary.uncertain,
        (text) => String(text).includes("改正法の統計作成等・AI開発の具体的な対象範囲"),
        "改正法の統計作成等・AI開発の具体的な対象範囲、公表事項、基準適合体制などはなお未確定。2026年9月9日の工程では、統計作成等と委託先について9月下旬～10月上旬に基本的な考え方を議論し、その後に意見交換・ヒアリングと具体案の検討を経てパブリックコメントへ進む予定が示されている。"
      );
    }
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === reformEventId);
  if (reform) {
    addUnique(reform.sourceIds, [sourceId]);
    addUnique(reform.matchSourceIds, [sourceId]);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingArticleIds.has(article.id) && !existingArticleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat(article);
  }
})();

(() => {
  const topicSlug = "insurance-agency-governance-comparison-sales-2025";
  const reformEventId = "insurance-business-act-2025-amendment";
  const sourceLawId = "source-fsa-insurance-business-act-2025-law";
  const sourceFinalRulesId = "source-fsa-insurance-business-act-2026-final-rules";
  const brokerIssueId = "insurance-broker-reform-2026";

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
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== topicSlug) return topic;
    const issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === brokerIssueId)) {
      issues.push({
        id: brokerIssueId,
        title: "保険仲立人の活用促進・協業ルールをどう使うか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2025年改正保険業法と施行ルールでは、保険仲立人について保証金制度、保険代理店等との協業、海外直接付保における媒介、不祥事件の届出等が見直された。企業が利用する場合は、代理店との役割の違い、媒介手数料、責任分界、必要な手続を取引類型ごとに確認する。",
        exception: "保証金、代理店等との協業、海外直接付保、媒介手数料等はそれぞれ適用要件が異なり、同じ『保険仲立人の活用』として一律に処理しない。",
        uncertain: "改正後にどの保険調達・媒介スキームで利用が定着するかは今後の市場実務を継続確認する必要がある。",
        sourceIds: [sourceLawId, sourceFinalRulesId]
      });
    }
    const facts = addUniqueStrings(topic.currentSummary?.facts, [
      "2025年改正保険業法と2026年施行ルールは、保険仲立人について保証金制度、保険代理店等との協業、海外直接付保における媒介、不祥事件届出等も見直しており、代理店ガバナンス強化と並行して販売・調達チャネルの選択肢を整備している。"
    ]);
    const implications = addUniqueStrings(topic.currentSummary?.implications, [
      "企業が保険仲立人を利用する場合は、保険代理店との役割・立場の違い、媒介手数料、海外直接付保、協業時の責任分界と手続を契約・調達フローに落として確認する。"
    ]);
    return {
      ...topic,
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts,
        implications
      },
      issues,
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["保険仲立人・媒介スキーム"])
    };
  });

  const articles = [
    {
      id: "article-amt-insurance-large-agency-draft-2026-03-06",
      title: "【金融法務】大規模乗合保険代理店等に関する内閣府令等の改正案の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井 惠悟・津江 紘輝・高野 聖也（監修：出張 智己・福田 直邦・若狭 一行）",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260306001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／大規模乗合保険代理店・施行準備",
      status: "adopted",
      summary: "2025年改正保険業法の施行準備について、特定大規模乗合保険募集人の本業に関する体制整備と、特定大規模乗合損害保険代理店の自動車修理業等の兼業に関する利益相反管理を分けて整理した実務解説。最終ルール公表前の記事なので、現在は2026年3月30日の確定規則と対照して改正案から最終ルールへの差分を読む資料として位置付ける。",
      whyImportant: [
        "大規模乗合代理店の規制を、本業の保険募集ガバナンスと兼業業務の利益相反管理に分けて説明しており、体制整備の対象を切り分けやすい",
        "責任者配置、苦情処理、内部監査等をどの主体・組織単位で持つかという施行準備の論点を実務に落としている",
        "公開時は改正案段階だったため、最終化後の現在は、案から確定ルールまでの制度形成過程と差分を確認する補助資料として使える"
      ],
      audience: ["保険代理店経営・法務", "保険会社法務・コンプライアンス", "内部監査", "保険募集管理担当"],
      audienceReason: "大規模乗合代理店の本業ガバナンスと兼業利益相反を分け、2026年6月施行の最終ルールへ自社体制を対応付けるため。",
      categories: ["契約", "危機管理・コンプライアンス", "消費者法・表示"],
      relatedTopics: [topicSlug],
      relatedIssues: ["insurance-large-multi-agency-governance-2026"],
      primarySourceIds: [sourceLawId, sourceFinalRulesId],
      reformEventId,
      whatChanged: "整理変更なし／大規模乗合代理店の本業ガバナンスと兼業利益相反を分けて読む施行準備期の実務解説をバックフィルした。"
    },
    {
      id: "article-amt-insurance-broker-reform-2026-05-22",
      title: "【金融法務】保険仲立人の活用促進等に向けた改正の概要",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村井 惠悟・津江 紘輝・高野 聖也（監修：出張 智己・福田 直邦・若狭 一行）",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260522001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／保険仲立人",
      status: "adopted",
      summary: "2025年改正保険業法・施行ルールのうち保険仲立人に焦点を当て、保証金制度、保険代理店等との協業、海外直接付保における活用、不祥事件の届出義務を整理した実務解説。大規模代理店の規制強化だけでなく、顧客側に立つ仲立人という別の販売・調達チャネルをどう活用するかを補完する。",
      whyImportant: [
        "保険仲立人の改正を保証金・代理店等との協業・海外直接付保・不祥事件届出という具体的な実務単位に分解している",
        "代理店ガバナンス強化と同時に進められた『保険仲立人の活用促進』という改革の別方向を独立して把握できる",
        "企業の保険調達でも、代理店と仲立人の立場・報酬・責任分界を再検討する材料になる"
      ],
      audience: ["企業法務・リスク管理", "保険会社", "保険仲立人", "保険代理店"],
      audienceReason: "保険調達・媒介スキームの選択肢として、改正後の保険仲立人の役割と手続を理解するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [brokerIssueId],
      primarySourceIds: [sourceLawId, sourceFinalRulesId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceFinalRulesId],
      whatChanged: "テーマ更新／保証金・協業・海外直接付保・不祥事件届出を横断する保険仲立人の論点と実務解説を追加した。"
    }
  ];

  const current = window.ARTICLE_DATA || [];
  const existingIds = new Set(current.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = current.concat(additions);
})();

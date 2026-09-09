(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const sourceId = "source-meti-unfair-competition-committee-29-ai-likeness-2026";
  const articleId = "article-meti-unfair-competition-committee-29-ai-likeness-2026";
  const reformEventId = "unfair-competition-ai-likeness-policy-review-2026";
  const topicSlug = "generative-ai-likeness-publicity";
  const issueId = "ai-likeness-legal-reform-review";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "第29回 産業構造審議会 知的財産分科会 不正競争防止小委員会",
      type: "guideline",
      typeLabel: "審議会資料・制度見直し",
      authority: "経済産業省",
      publishedAt: "2026-08-27",
      url: "https://www.meti.go.jp/shingikai/sankoshin/chiteki_zaisan/fusei_kyoso/029.html",
      importance: "高",
      whyImportant: "声や肖像の無断模倣等について、現行法の解釈・適用やガイドラインに加え、不正競争防止法改正を含むハードロー整備の必要性を正式な検討事項として位置付けた一次資料。具体的な改正案・施行時期はまだ示されていない。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-10";
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = addUniqueString(topic.sourceIds, sourceId);
    topic.issues = addUniqueById(topic.issues, [
      {
        id: issueId,
        title: "声・肖像の無断模倣への法整備はどう検討されているか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "2026年8月27日の第29回不正競争防止小委員会は、生成AI等による声・肖像の無断模倣について、不正競争防止法改正を含むハードロー整備の必要性を今後の検討事項に位置付けた。現時点で具体的な改正案や新たな権利・禁止行為は確定していない。",
        exception: "法務省が2026年8月7日に示したパブリシティ権等の解釈指針は現行法・判例法理の整理であり、この制度見直しとは別トラックで現在の法的評価に用いる。",
        uncertain: "保護対象、禁止行為、請求主体、救済方法、不正競争防止法を改正するかを含む制度の具体像は今後の審議で検討される。",
        sourceIds: [sourceId]
      }
    ]);
    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "2026年8月27日の第29回不正競争防止小委員会で、声や肖像の無断模倣等に対し、不正競争防止法改正を含むハードロー整備の必要性を検討することが正式な検討事項に加わった。具体的な改正案はまだ示されていない。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "現在のコンテンツ審査は法務省の解釈指針等に基づく現行法対応を続けつつ、将来のハードロー整備は別の施行準備トラックとして追跡する必要がある。"
      );
      topic.currentSummary.uncertain = addUniqueText(
        topic.currentSummary.uncertain,
        "不正競争防止法改正を含む法整備は検討開始段階であり、規律対象、権利主体、禁止行為、救済、施行時期はいずれも未確定である。"
      );
    }
  }

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "声・肖像の無断模倣に関する法整備・2026年見直し",
      eventType: "policy_review",
      lawId: "unfair-competition-prevention-act",
      lawLabel: "不正競争防止法・声／肖像の無断模倣対策",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [sourceId],
      sourceIds: [sourceId],
      articleIds: [articleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "第29回 不正競争防止小委員会―声や肖像の無断模倣等に対する法的整備の検討",
      publisher: "経済産業省",
      author: "産業構造審議会 知的財産分科会 不正競争防止小委員会",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/shingikai/sankoshin/chiteki_zaisan/fusei_kyoso/029.html",
      sourceType: "primary",
      sourceLabel: "一次資料・制度見直し",
      status: "adopted",
      summary: "生成AI等による俳優・声優等の声や肖像の無断模倣を念頭に、現行法の解釈・適用、ガイドライン、判例の蓄積に加え、不正競争防止法改正を含むハードロー整備の必要性を今後の検討事項として示した第29回不正競争防止小委員会の資料。法改正の具体案や施行時期はまだ確定していない。",
      whyImportant: [
        "既存の法務省解釈指針だけでは追えなかった『将来の法整備を正式に検討する段階へ移った』という制度上の変化を一次資料で確認できる",
        "不正競争防止法改正を含むハードロー整備が検討対象である一方、現時点で新しい禁止行為や権利が成立したわけではないことを区別できる",
        "生成AIで実在人物の顔・声を扱う企業が、現行法対応と将来制度のモニタリングを別々に管理する基準点になる"
      ],
      audience: ["企業法務", "知的財産担当", "AI・コンテンツ事業担当", "広告・マーケティング担当"],
      audienceReason: "実在人物の肖像・声を生成・利用する業務で、現在適用される法理と、今後の不正競争防止法等の制度見直しを混同せず追跡するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ai-likeness-legal-framework", "ai-likeness-publicity-use", issueId],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceId],
      whatChanged: "声・肖像の無断模倣について、現行法の解釈整理だけでなく、不正競争防止法改正を含むハードロー整備の正式な政策検討が始まったことをテーマへ反映した。具体的な改正内容・施行時期は未確定として分離管理する。"
    }
  ]);
})();

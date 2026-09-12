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

  const topicSlug = "ai-recruitment-rpo-employment-placement";
  const sourceId = "source-mhlw-specified-recruitment-info-stop-order-2026";
  const issueId = "recruitment-info-provider-filing-reporting";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "特定募集情報等提供事業者に対する事業停止命令について",
      type: "government_material",
      typeLabel: "一次資料・行政処分／特定募集情報等提供事業",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/stf/newpage_76028.html",
      importance: "高",
      whyImportant: "特定募集情報等提供事業者が法定の事業概況報告書を提出せず、2026年5月22日の業務改善命令にも従わなかったことを理由に、職業安定法43条の4に基づき、報告書提出まで全ての特定募集情報等提供事業を停止する命令が実際に発出されたことを確認できる。届出後の継続的な報告義務を運用上の実効性ある規制として捉える一次資料。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-12";
    topic.lastVerified = "2026-09-12";
    topic.sourceIds = addUniqueString(topic.sourceIds, sourceId);
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "特定募集情報等提供事業の届出・事業概況報告");

    if (!Array.isArray(topic.issues)) topic.issues = [];
    if (!topic.issues.some((issue) => issue.id === issueId)) {
      topic.issues.push({
        id: issueId,
        title: "特定募集情報等提供事業の届出・事業概況報告をどう管理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "求職者情報を収集して募集情報等提供に使用する特定募集情報等提供事業は、職業安定法上の届出だけでなく、法令所定の事業概況報告書を期限までに提出する継続的な管理が必要である。2026年9月11日には、報告書未提出と、その是正を求める業務改善命令への違反を理由に、報告書提出まで全事業を停止する命令が実際に発出された。",
        exception: "届出・報告義務の対象になるかは、単に求人情報を掲載するかではなく、労働者になろうとする者に関する情報を収集し、募集情報等提供に使用する特定募集情報等提供事業に該当するかを確認する必要がある。",
        uncertain: "個別サービスが職業紹介、特定募集情報等提供、その他の募集情報等提供のどれに該当するかは、サービス機能と実際の運用に応じて判断する必要があり、AI採用代行の境界明確化については別途2026年の制度検討が継続している。",
        sourceIds: [sourceId, "source-mhlw-recruitment-info-placement-boundary"]
      });
    }

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "特定募集情報等提供事業者には届出後も事業概況報告書の提出義務があり、厚生労働省は2026年9月11日、2025年6月1日時点の事業実施状況を記載した報告書を期限までに提出せず、2026年5月22日の業務改善命令にも違反した事業者に対し、報告書提出まで全ての特定募集情報等提供事業を停止する命令を発出した。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "職業紹介に当たらないようサービス機能を設計することだけでは雇用仲介規制対応は完結しない。特定募集情報等提供に該当する場合は、届出の有無に加え、事業概況報告など届出後の継続義務を期限管理・証跡管理へ落とす必要がある。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "HRTech・求人媒体・RPO事業者のコンプライアンス台帳では、職業紹介許可と特定募集情報等提供事業の届出を区別し、届出事項の変更、廃止、事業概況報告の期限と提出証跡まで一体で管理する。利用企業側のベンダー審査でも、必要な届出・許可の有無だけでなく、継続報告義務の履行状況を確認対象に含める。"
      );
    }
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-mhlw-specified-recruitment-info-stop-order-2026",
      title: "特定募集情報等提供事業者に対する事業停止命令について",
      publisher: "厚生労働省",
      author: "厚生労働省 職業安定局需給調整事業課 労働市場基盤整備室",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-12",
      url: "https://www.mhlw.go.jp/stf/newpage_76028.html",
      sourceType: "primary",
      sourceLabel: "一次資料・行政処分／特定募集情報等提供事業",
      status: "adopted",
      summary: "厚生労働省が、職業安定法43条の5に基づく事業概況報告書を期限までに提出せず、2026年5月22日の業務改善命令にも違反した特定募集情報等提供事業者に対し、同法43条の4に基づく事業停止命令を発出した資料。命令は、未提出の事業概況報告書が提出されるまで、全ての特定募集情報等提供事業を停止する内容である。",
      whyImportant: [
        "特定募集情報等提供事業は開始時の届出だけでなく、事業概況報告書の提出まで継続的な法令管理が必要であることを行政処分で確認できる",
        "業務改善命令に従わない場合、報告書提出まで事業全部の停止命令に進み得るため、求人媒体・HRTech事業者にとって報告期限管理が事業継続リスクになる",
        "AI採用代行・RPOの職業紹介該当性を検討する際にも、職業紹介に当たらない場合の受け皿となり得る募集情報等提供規制を『無規制』と誤解しないための実例になる"
      ],
      audience: ["HRTech・求人媒体事業者", "RPO・採用支援事業者", "企業法務", "人事・採用担当", "労務コンプライアンス担当"],
      audienceReason: "職業紹介と募集情報等提供の区分確認に加え、特定募集情報等提供事業へ該当した後の届出・事業概況報告・行政対応を継続的なコンプライアンス運用として設計するため。",
      categories: ["労務", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "rpo-contract-licensing-controls"],
      primarySourceIds: [sourceId, "source-mhlw-recruitment-info-placement-boundary"],
      whatChanged: "テーマ補強／特定募集情報等提供事業について、届出の要否だけでなく事業概況報告の継続義務と、未提出・改善命令違反から事業停止命令に至る実際の執行を独立論点として追加した。"
    }
  ]);
})();
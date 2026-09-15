(() => {
  const sourceId = "source-privacy-law-2026-roadmap-20260909";
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (!list.includes(value)) list.push(value);
    return list;
  };

  const patchTopic = (slug) => {
    const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === slug);
    if (!topic) return;
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    topic.sourceIds = addUnique(topic.sourceIds, sourceId);
    topic.currentSummary = topic.currentSummary || {};
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "個人情報保護委員会は2026年9月9日、改正法の政令・規則・ガイドライン等の整備工程を公表し、9月中旬から10月中旬にかけて論点別の『基本的な考え方』を順次議論した後、意見交換・ヒアリングを経て条文案とパブリックコメントへ進む方針を示した。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "施行準備では、子供・顔特徴データ・本人関与、統計作成等・委託先・漏えい等、連絡可能個人関連情報・オプトアウト・課徴金の各論点について、2026年秋以降の委員会資料を順次確認し、確定前の議論と最終ルールを分けて管理する。"
    );
    topic.currentSummary.uncertain = addUnique(
      topic.currentSummary.uncertain,
      "2026年9月9日時点の工程は審議・意見交換の予定を示すもので、政令・規則・ガイドラインの具体的内容や最終的なパブリックコメント時期は今後の委員会審議で変わり得る。"
    );
  };

  patchTopic("ai-personal-data");
  patchTopic("personal-information-protection-2026-amendment");

  const aiTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "ai-personal-data");
  if (aiTopic) {
    ["ai-statistical-use", "ai-outsourcing"].forEach((issueId) => {
      const issue = (aiTopic.issues || []).find((item) => item && item.id === issueId);
      if (issue) issue.sourceIds = addUnique(issue.sourceIds, sourceId);
    });
  }
})();

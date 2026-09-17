(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "ai-publicity-voice-rights-2026");
  if (!topic) return;

  const hearingSource = "source-meti-unfair-competition-ai-likeness-hearing-20260911";
  const mojSource = "source-moj-ai-publicity-voice-report-2026";
  const articleId = "article-meti-unfair-competition-ai-likeness-hearing-20260911";
  const issueId = "ai-publicity-ucpa-policy-review-2026";

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  topic.summary = "法務省の2026年8月『生成AIによるパブリシティ権侵害等に関する解釈指針』を軸に、生成AIで他人の肖像・声を生成・公開・サービス提供する場合の現行法上の論点を整理する。2026年9月11日には経済産業省の不正競争防止小委員会で関係者ヒアリングが行われ、不正競争防止法による追加的な制度整備の要否も検討対象となったが、法改正の方向・内容は未決である。";

  topic.overview = appendUnique(topic.overview, [
    "2026年9月11日の第30回不正競争防止小委員会では、法務省と実演家・業界団体から、生成AIによる肖像・声の無断利用についてヒアリングが行われた。現行法の解釈だけでなく、不正競争防止法による追加的な法的整備の必要性も検討対象となっているが、会合は関係者の実態・制度要望を聴く段階であり、改正案や新たな禁止行為が決定したわけではない。"
  ]);

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendUnique(topic.currentSummary.facts, [
    "2026年9月11日、第30回産業構造審議会知的財産分科会不正競争防止小委員会で、生成AIによる肖像・声の無断利用について法務省と実演家・業界団体からヒアリングが行われた。",
    "関係者からは、不正競争防止法上の保護対象として声をより明確に扱うこと、本人以外の団体・所属事務所等による権利行使、AI学習用の音声データ等の保護など複数の制度要望が示されたが、いずれも現時点で政府案・委員会合意ではない。"
  ]);
  topic.currentSummary.interpretations = appendUnique(topic.currentSummary.interpretations, [
    "法務省報告書が示す現行法の解釈と、経産省小委員会で示された将来の制度要望は区別して読む必要がある。9月11日時点で企業に新しい法定義務が追加されたわけではない。"
  ]);
  topic.currentSummary.implications = appendUnique(topic.currentSummary.implications, [
    "肖像・声を扱うAIサービス、広告、音声モデル、出演者契約では現行法に基づく権利処理を続けつつ、不競法上の保護対象、請求主体、学習用データ保護が今後どのように具体化されるかを継続確認する。"
  ]);
  topic.currentSummary.uncertain = appendUnique(topic.currentSummary.uncertain, [
    "不正競争防止法を改正するか、改正する場合に声・肖像をどの要件で保護し、誰に請求権を認め、AI学習用データをどう扱うかは未決であり、今後の小委員会審議を確認する必要がある。"
  ]);

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "不正競争防止法による肖像・声の保護は見直されるか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "2026年9月11日の不正競争防止小委員会で、生成AIによる肖像・声の無断利用について関係者ヒアリングが行われ、不正競争防止法による追加的な法的整備の要否が検討対象となった。現時点では制度案・改正内容は決まっていない。",
      exception: "業界団体等から示された『声』の明記、団体・所属事務所等による請求、AI学習用データの保護等は関係者の要望・提案であり、政府案や委員会の合意として扱わない。",
      uncertain: "今後の審議で、保護対象・要件、請求主体、学習段階と生成・利用段階の切分け、海外サービスへの執行、適法な創作との均衡をどのように制度化するかを確認する必要がある。",
      sourceIds: [hearingSource, mojSource]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [hearingSource]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["不正競争防止法の制度見直しモニタリング"]);
})();

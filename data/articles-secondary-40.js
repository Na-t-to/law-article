(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "ai-recruitment-rpo-employment-placement");
  if (topic) {
    topic.lastUpdated = "2026-09-09";
    topic.lastVerified = "2026-09-09";
    addUnique(topic.sourceIds, ["source-mhlw-ai-rpo-regulatory-plan-2026"]);

    const facts = topic.currentSummary && topic.currentSummary.facts;
    addUnique(facts, [
      "2026年7月21日閣議決定の規制改革実施計画は、AI採用代行について、AIによるスカウトメールの作成・送配信、AI面接、AIによる問合せ対応に関し職業紹介に該当しないものを明確化することを含め、職業紹介該当性と有料職業紹介事業の許可要否を速やかに検討し、結論後に厚生労働省の既存区分ページへ具体例を追記するなどの措置を講ずる方針を示している。",
      "同計画は、求職者から求職の申込みを受けたか疑義がある場合の考え方や、情報内容の加工・意思疎通の加工の範囲を含む基準の明確化と、明確化までの間に地方労働局ごとの判断差が生じないよう本省照会等で判断の統一性を確保する措置を、2026年度上期に行うとしている。",
      "さらに、AI採用代行の機能・内容・範囲の実態を調査し、人が同様のサービスを行う場合も含め、職業紹介に該当する機能について個人情報保護法との関係に留意しながら、帳簿記載義務等に不必要又は過大な許可要件・義務がないかを点検し、労働政策審議会の結論後に運用見直し等を行う方針が示されている。"
    ]);

    const interpretations = topic.currentSummary && topic.currentSummary.interpretations;
    addUnique(interpretations, [
      "規制改革実施計画は、AIスカウト、AI面接、AI問合せ対応を一律に職業紹介から外したものではない。今後『職業紹介に該当しないもの』を具体化するための検討・明確化を厚生労働省に求めた段階なので、具体例が公表されるまでは現行の区分基準で評価する。"
    ]);

    const implications = topic.currentSummary && topic.currentSummary.implications;
    addUnique(implications, [
      "AIスカウト、AI面接、AI問合せ対応を含むサービスは、2026年度上期に予定される厚生労働省の具体例・基準明確化が公表された時点で、職業紹介該当性、許可、契約上の役割分担、システム権限を再点検する。判断が難しい間は、地方労働局ごとの独自判断を前提にせず、厚生労働省本省への照会を含む現行の相談運用を確認する。"
    ]);

    const uncertain = topic.currentSummary && topic.currentSummary.uncertain;
    if (Array.isArray(uncertain)) {
      const oldText = "AIによるスカウト文面生成・候補者評価・面接支援など個別機能について、今後どのような具体例・判断要素が追加されるかは確定していない。";
      const index = uncertain.indexOf(oldText);
      const newText = "AIによるスカウトメールの作成・送配信、AI面接、AI問合せ対応について『職業紹介に該当しないもの』を明確化する方針は示されたが、具体例の最終文言・判断要素・対象範囲はまだ確定していない。";
      if (index >= 0) uncertain[index] = newText;
      else addUnique(uncertain, [newText]);
    }

    const issue = (topic.issues || []).find((item) => item.id === "rpo-ai-automated-acts-review");
    if (issue) {
      issue.conclusion = "2026年7月21日閣議決定の規制改革実施計画は、AIによるスカウトメールの作成・送配信、AI面接、AI問合せ対応について職業紹介に該当しないものを明確化することを含め、職業紹介該当性と許可要否、求職申込みの有無、情報・意思疎通の加工範囲を検討し、2026年度上期に具体例追記等の措置を講ずる方針を示している。ただし、新たなAI専用ルールや許可免除が既に施行されたわけではない。";
      issue.uncertain = "具体例の最終文言・判断要素、AI採用代行の実態調査を踏まえた許可要件・義務の見直し内容は未確定であり、厚生労働省の区分ページ更新と労働政策審議会の後続審議を確認する必要がある。";
      addUnique(issue.sourceIds, ["source-mhlw-ai-rpo-regulatory-plan-2026"]);
    }
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "employment-security-ai-rpo-2026-review");
  if (reformEvent) {
    addUnique(reformEvent.sourceIds, ["source-mhlw-ai-rpo-regulatory-plan-2026"]);
  }
})();

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-mhlw-ai-rpo-regulatory-plan-2026",
    "title": "「規制改革実施計画」について（第397回労働力需給制度部会 資料1）",
    "type": "government_material",
    "typeLabel": "一次資料・規制改革実施計画／AI採用代行",
    "authority": "厚生労働省",
    "publishedAt": "2026-08-27",
    "url": "https://www.mhlw.go.jp/content/11650000/001742798.pdf",
    "importance": "最高",
    "whyImportant": "AIスカウトメールの作成・送配信、AI面接、AI問合せ対応について職業紹介に該当しないものを明確化すること、求職申込み・情報加工・意思疎通加工の基準を明確化すること、2026年度上期の措置予定、地方労働局の判断統一、許可要件・義務の見直し方針まで具体的に示した中心一次資料。",
    "topics": ["ai-recruitment-rpo-employment-placement"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-mhlw-ai-rpo-regulatory-plan-2026",
    "title": "「規制改革実施計画」について（AIを活用した採用代行の職業安定法上の許可要否及び許可要件の明確化）",
    "publisher": "厚生労働省",
    "author": "厚生労働省 職業安定局需給調整事業課",
    "publishedAt": "2026-08-27",
    "collectedAt": "2026-09-09",
    "url": "https://www.mhlw.go.jp/content/11650000/001742798.pdf",
    "sourceType": "primary",
    "sourceLabel": "一次資料・規制改革実施計画／AI採用代行",
    "status": "adopted",
    "summary": "2026年7月21日閣議決定の規制改革実施計画を、第397回労働力需給制度部会向けに抜粋した資料。AI採用代行について、AIがスカウトメールを作成・送配信する行為、AI面接、AIによる問合せ対応のうち職業紹介に該当しないものを明確化することを含め、職業紹介該当性と有料職業紹介事業の許可要否を速やかに検討し、結論後に厚生労働省の区分ページへ具体例を追記する等の措置を講ずるとする。求職申込みの有無、情報内容・意思疎通の加工範囲の基準明確化、明確化までの地方労働局判断の統一、AI採用代行の実態調査を踏まえた許可要件・義務の見直しも示し、前二者は2026年度上期措置、実態調査・検討は2026年度に速やかに開始するとしている。",
    "whyImportant": [
      "AIスカウト、AI面接、AI問合せ対応という具体的機能について、厚生労働省が何を明確化する予定かを一次資料で確認できる",
      "『求職の申込みを受けたか』『情報内容・意思疎通をどこまで加工したか』という現行区分で曖昧になりやすい判断要素を明確化対象として特定している",
      "2026年度上期の具体例追記等、地方労働局の判断統一、許可要件・帳簿義務等の後続見直しという工程まで示され、次に何を監視すべきかが明確になる"
    ],
    "audience": ["企業法務", "人事・採用担当", "HRTech・RPO事業者", "AIプロダクト担当", "労務コンプライアンス担当"],
    "audienceReason": "AI採用サービスの機能ごとの許可要否を現行ルールで点検しつつ、2026年度上期に予定される公式な具体例・基準明確化へ迅速に追随するため。",
    "categories": ["労務", "AI・デジタル", "契約"],
    "relatedTopics": ["ai-recruitment-rpo-employment-placement"],
    "relatedIssues": ["rpo-ai-automated-acts-review", "rpo-contract-licensing-controls"],
    "primarySourceIds": ["source-mhlw-ai-rpo-regulatory-plan-2026", "source-mhlw-recruitment-info-placement-boundary"],
    "reformEventId": "employment-security-ai-rpo-2026-review",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-mhlw-ai-rpo-regulatory-plan-2026"],
    "whatChanged": "制度検討の具体化／AIスカウト・AI面接・AI問合せ対応の非該当例を含む職業紹介区分の明確化、2026年度上期の措置予定、地方労働局判断の統一、許可要件・義務見直しの工程を既存テーマへ反映した。"
  }
]);

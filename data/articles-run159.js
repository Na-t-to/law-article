(() => {
  const unique = (values) => [...new Set((values || []).filter(Boolean))];
  const addUnique = (values, value) => unique([...(values || []), value]);
  const replaceIds = (values, replacements) => unique((values || []).map((value) => replacements[value] || value));
  const sourceAliases = {
    "source-caa-consumer-contract-interim-final-2026": "source-caa-consumer-contract-interim-draft-2026",
    "source-caa-digital-tokusho-interim-final-2026": "source-caa-digital-tokusho-interim-2026"
  };
  const articleAliases = {
    "article-caa-consumer-contract-interim-final-2026": "article-caa-consumer-contract-interim-draft-2026",
    "article-caa-digital-tokusho-interim-final-2026": "article-caa-digital-tokusho-interim-2026"
  };
  const reformAliases = {
    "digital-transactions-tokusho-review-2026": "digital-commerce-tokusho-2026-review"
  };

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => ({
    ...topic,
    sourceIds: replaceIds(topic.sourceIds, sourceAliases),
    issues: (topic.issues || []).map((issue) => ({
      ...issue,
      sourceIds: replaceIds(issue.sourceIds, sourceAliases),
      views: (issue.views || []).map((view) => ({
        ...view,
        sourceIds: replaceIds(view.sourceIds, sourceAliases),
        articleIds: replaceIds(view.articleIds, articleAliases)
      }))
    }))
  }));

  window.UPDATE_DATA = (window.UPDATE_DATA || []).map((update) => ({
    ...update,
    sourceIds: replaceIds(update.sourceIds, sourceAliases),
    articleIds: replaceIds(update.articleIds, articleAliases)
  }));

  window.SOURCE_DATA = (window.SOURCE_DATA || [])
    .filter((source) => !sourceAliases[source.id])
    .map((source) => ({ ...source, topics: unique(source.topics) }));

  window.ARTICLE_DATA = (window.ARTICLE_DATA || [])
    .filter((article) => !articleAliases[article.id])
    .map((article) => {
      const next = {
        ...article,
        primarySourceIds: replaceIds(article.primarySourceIds, sourceAliases),
        reformEventId: reformAliases[article.reformEventId] || article.reformEventId
      };
      if (Array.isArray(article.reformStageSourceIds)) next.reformStageSourceIds = replaceIds(article.reformStageSourceIds, sourceAliases);
      if (Array.isArray(article.reformEffectiveDateSourceIds)) next.reformEffectiveDateSourceIds = replaceIds(article.reformEffectiveDateSourceIds, sourceAliases);
      return next;
    });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || [])
    .filter((event) => event && event.id !== "digital-transactions-tokusho-review-2026")
    .map((event) => ({
      ...event,
      sourceIds: replaceIds(event.sourceIds, sourceAliases),
      matchSourceIds: replaceIds(event.matchSourceIds, sourceAliases),
      effectiveDateSourceIds: replaceIds(event.effectiveDateSourceIds, sourceAliases),
      articleIds: replaceIds(event.articleIds, articleAliases)
    }));

  const consumerSourceId = "source-caa-consumer-contract-interim-draft-2026";
  const consumer = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === "consumer-contract-law-review-2026");
  if (consumer) {
    consumer.lastUpdated = "2026-09-15";
    consumer.lastVerified = "2026-09-15";
    consumer.sourceIds = addUnique(consumer.sourceIds, consumerSourceId);
    consumer.currentSummary = consumer.currentSummary || {};
    consumer.currentSummary.facts = (consumer.currentSummary.facts || []).filter((text) => {
      const value = String(text || "");
      return !value.includes("解約料については、消費者契約法9条1項1号自体の見直しは今回は行わず") &&
        !value.includes("2026年9月9日の第9回検討会で中間取りまとめ案が成案となり");
    });
    consumer.currentSummary.facts = addUnique(
      consumer.currentSummary.facts,
      "2026年9月10日の中間取りまとめは、解約料に関する消費者契約法9条1項1号の立証責任等について、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記し、引き続き検討する整理としている。"
    );
    consumer.currentSummary.interpretations = (consumer.currentSummary.interpretations || []).filter(
      (text) => !String(text || "").includes("解約料は条文上の基準を一律に変更する方向ではないため")
    );
    consumer.currentSummary.interpretations = addUnique(
      consumer.currentSummary.interpretations,
      "解約料の立証責任は正式な中間取りまとめでも制度選択が確定していない。A案・B案の比較検討が続いているため、現行法上の『平均的な損害』の判断と将来の制度案を分けて管理する必要がある。"
    );
    consumer.currentSummary.uncertain = addUnique(
      consumer.currentSummary.uncertain,
      "解約料についてA案・B案のどちらを採るか、価格差別目的の解約料に関する具体的基準、最終条文、施行時期は未確定である。"
    );

    const fees = (consumer.issues || []).find((issue) => issue && issue.id === "consumer-contract-cancellation-fees");
    if (fees) {
      fees.conclusion = "2026年9月10日の中間取りまとめは、消費者契約法9条1項1号の立証責任等について、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記しており、制度選択は未確定である。あわせて、解約料条項の説明に関する既存制度の拡充も検討されている。";
      fees.exception = "現行法の『平均的な損害』基準や不当条項規制は引き続き適用される。中間取りまとめを、立証責任転換が既に成立・施行したものとして扱わない。";
      fees.uncertain = "A案・B案のどちらを採るか、価格差別目的の解約料に関する具体的基準、説明制度の義務化範囲、最終条文、施行時期は未確定である。";
      fees.sourceIds = addUnique(replaceIds(fees.sourceIds, sourceAliases), consumerSourceId);
    }
  }

  const digitalSourceId = "source-caa-digital-tokusho-interim-2026";
  const digital = (window.TOPIC_DATA || []).find((topic) => topic && topic.slug === "digital-commerce-tokusho-review");
  if (digital) {
    digital.lastUpdated = "2026-09-15";
    digital.lastVerified = "2026-09-15";
    digital.sourceIds = addUnique(digital.sourceIds, digitalSourceId);
    digital.currentSummary = digital.currentSummary || {};
    digital.currentSummary.facts = (digital.currentSummary.facts || []).filter(
      (text) => !String(text || "").includes("2026年9月2日の第9回検討会で中間取りまとめ案が成案となり")
    );
    digital.currentSummary.facts = addUnique(
      digital.currentSummary.facts,
      "レスキュー商法について、中間取りまとめは、ウェブ上で著しく事実に相違する低価格を示して訪問を誘発し、比較検討等が困難な環境で合理的根拠なく表示価格とかけ離れた高額契約を勧誘する類型を違法行為・行政処分の対象とする方向を示している。"
    );
    digital.currentSummary.facts = addUnique(
      digital.currentSummary.facts,
      "点検商法等について、消費者が申込み・承諾の意思表示をする前に履行へ着手して原状回復を困難にする行為を違法行為・行政処分の対象とする方向や、クーリング・オフ後の履行拒否・不当遅延、悪質な妨害への対応強化が示されている。"
    );
    digital.currentSummary.interpretations = addUnique(
      digital.currentSummary.interpretations,
      "緊急駆け付け・点検型サービスでは、広告価格だけでなく、訪問前後の価格提示、見積り、消費者の意思確認、作業開始、クーリング・オフ対応まで一連の販売プロセスを法務レビューする必要性が高まっている。"
    );
    digital.currentSummary.implications = addUnique(
      digital.currentSummary.implications,
      "水回り・鍵・害虫駆除等の緊急駆け付けや点検型サービスでは、広告上の価格と実際の請求額の乖離、追加作業の説明、作業開始前の明示的な同意、クーリング・オフ時の対応を棚卸しする。"
    );
    digital.currentSummary.uncertain = addUnique(
      digital.currentSummary.uncertain,
      "レスキュー商法・点検商法の対象となる価格乖離や作業着手の具体的要件、行政処分の範囲、最終条文、施行時期は未確定である。"
    );

    const issueId = "dt-rescue-inspection-sales";
    if (!(digital.issues || []).some((issue) => issue && issue.id === issueId)) {
      digital.issues = (digital.issues || []).concat([{
        id: issueId,
        title: "レスキュー商法・点検商法の訪問販売規律をどう見直すか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "2026年9月10日の中間取りまとめは、著しく事実に相違する低価格表示で訪問を誘発した後に合理的根拠なく大幅に高い価格で勧誘する類型や、消費者の意思表示前に作業へ着手して原状回復を困難にする類型について、違法化・行政処分対象化を含む規律強化の方向を示している。クーリング・オフ後の履行拒否・不当遅延や悪質な妨害への対応強化も検討対象である。",
        exception: "消費者から訪問を依頼された取引を一律に違法とする整理ではなく、正当な緊急対応事業者へ過度な負担とならない制度設計も必要とされている。現行法上の訪問販売該当性や適用除外の判断は引き続き個別に行う。",
        uncertain: "対象となる価格表示・価格乖離・作業着手の具体的要件、行政処分の範囲、条文化、施行時期は未確定である。",
        sourceIds: [digitalSourceId]
      }]);
    }
  }

  const digitalEvent = (window.REFORM_EVENT_DATA || []).find((event) => event && event.id === "digital-commerce-tokusho-2026-review");
  if (digitalEvent) {
    digitalEvent.sourceIds = addUnique(replaceIds(digitalEvent.sourceIds, sourceAliases), digitalSourceId);
    digitalEvent.matchSourceIds = addUnique(replaceIds(digitalEvent.matchSourceIds, sourceAliases), digitalSourceId);
  }
})();
(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };
  const addSource = (item, sourceId) => {
    if (!item) return;
    item.sourceIds = addUnique(item.sourceIds, sourceId);
  };

  const consumerSourceId = "source-caa-consumer-contract-interim-final-2026";
  const consumer = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (consumer) {
    consumer.lastUpdated = "2026-09-15";
    consumer.lastVerified = "2026-09-15";
    consumer.sourceIds = addUnique(consumer.sourceIds, consumerSourceId);
    consumer.overview = (consumer.overview || []).filter((text) => {
      const value = String(text || "");
      return !value.includes("2026年8月31日") && !value.includes("9月9日の第9回");
    });
    consumer.overview = addUnique(
      consumer.overview,
      "2026年9月10日に検討会の正式な中間取りまとめが公表され、8月末の案段階から政策検討の中間到達点へ進みました。ただし、法案の成立・公布・施行ではなく、具体的な条文と施行時期は今後の検討事項です。"
    );

    consumer.currentSummary = consumer.currentSummary || {};
    consumer.currentSummary.facts = (consumer.currentSummary.facts || []).filter((text) => {
      const value = String(text || "");
      return !value.includes("2026年8月31日の第8回検討会") && !value.includes("一律の立証責任転換を見送り");
    });
    consumer.currentSummary.facts = addUnique(
      consumer.currentSummary.facts,
      "消費者庁の検討会は2026年9月10日、消費者の多様な脆弱性、継続的契約の解約妨害・更新・変更、解約料等を扱う正式な中間取りまとめを公表した。"
    );
    consumer.currentSummary.facts = addUnique(
      consumer.currentSummary.facts,
      "解約料に関する消費者契約法9条1項1号の立証責任等について、中間取りまとめは、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記し、引き続き検討する整理としている。"
    );
    consumer.currentSummary.interpretations = (consumer.currentSummary.interpretations || []).filter(
      (text) => !String(text || "").includes("解約料は条文上の基準を一律に変更する方向ではないため")
    );
    consumer.currentSummary.interpretations = addUnique(
      consumer.currentSummary.interpretations,
      "解約料の立証責任は、正式な中間取りまとめでも制度選択が確定していない。A案・B案の比較検討が続いているため、現行法上の『平均的な損害』の判断と将来の制度案を分けて管理する必要がある。"
    );
    consumer.currentSummary.uncertain = addUnique(
      consumer.currentSummary.uncertain,
      "中間取りまとめは政策検討の中間到達点であり、法案・条文、解約妨害や解約料規律の最終要件、施行時期は未確定である。"
    );

    const vulnerability = (consumer.issues || []).find((issue) => issue && issue.id === "consumer-contract-vulnerability-release");
    if (vulnerability) {
      vulnerability.conclusion = "2026年9月10日の中間取りまとめは、深刻な結果となる契約と事業者の認識等を軸に、一定の場合に消費者を契約の拘束力から解放する仕組みを引き続き検討しているが、要件・効果は未確定である。";
      addSource(vulnerability, consumerSourceId);
    }

    const cancellation = (consumer.issues || []).find((issue) => issue && issue.id === "consumer-contract-cancellation-obstruction");
    if (cancellation) {
      cancellation.conclusion = "2026年9月10日の中間取りまとめは、既存の解約権の行使を妨げる不実告知、申入れ拒否・不当遅延、欺罔・威迫、環境設計、解約後債務の不当な拒否・遅延等を規律し、差止請求の対象とする方向を示している。";
      addSource(cancellation, consumerSourceId);
    }

    const fees = (consumer.issues || []).find((issue) => issue && issue.id === "consumer-contract-cancellation-fees");
    if (fees) {
      fees.conclusion = "2026年9月10日の中間取りまとめは、消費者契約法9条1項1号の立証責任等について、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記しており、制度選択は未確定である。";
      fees.exception = "現行法の『平均的な損害』基準や不当条項規制は引き続き適用される。中間取りまとめを、立証責任転換が既に成立・施行したものとして扱わない。";
      fees.uncertain = "A案・B案のどちらを採るか、価格差別目的の解約料に関する具体的基準、最終条文、施行時期は未確定である。";
      addSource(fees, consumerSourceId);
    }
  }

  const digitalSourceId = "source-caa-digital-tokusho-interim-final-2026";
  const digital = (window.TOPIC_DATA || []).find((item) => item && item.slug === "digital-commerce-tokusho-review");
  if (digital) {
    digital.lastUpdated = "2026-09-15";
    digital.lastVerified = "2026-09-15";
    digital.sourceIds = addUnique(digital.sourceIds, digitalSourceId);
    digital.overview = (digital.overview || []).filter((text) => !String(text || "").includes("2026年9月2日の検討会"));
    digital.overview = addUnique(
      digital.overview,
      "2026年9月10日に正式な中間取りまとめが公表され、SNS・チャット型勧誘、申込み画面・UI、契約・解約、プラットフォームに加え、レスキュー商法・点検商法等を含む制度見直しの方向が整理されました。具体的な法案・条文・施行時期は未確定です。"
    );

    digital.currentSummary = digital.currentSummary || {};
    digital.currentSummary.facts = (digital.currentSummary.facts || []).filter(
      (text) => !String(text || "").includes("2026年9月2日の第9回デジタル取引・特定商取引法等検討会")
    );
    digital.currentSummary.facts = addUnique(
      digital.currentSummary.facts,
      "消費者庁のデジタル取引・特定商取引法等検討会は2026年9月10日、SNS・チャット等による勧誘、通信販売の表示・UI、契約・解約、プラットフォーム、レスキュー商法・点検商法等について正式な中間取りまとめを公表した。"
    );
    digital.currentSummary.facts = addUnique(
      digital.currentSummary.facts,
      "中間取りまとめは、ウェブ上で著しく低い価格を示して訪問を誘発した後、現場で合理的理由なく大幅に高い価格で勧誘する類型や、消費者の意思確認前に作業へ着手して原状回復を困難にする類型について、違法化・行政処分対象化を含む対応の方向を示している。"
    );
    digital.currentSummary.interpretations = addUnique(
      digital.currentSummary.interpretations,
      "緊急駆け付け・点検型サービスでは、広告価格だけでなく、訪問前後の価格提示、見積り、消費者の意思確認、作業開始、クーリング・オフ対応まで一連の販売プロセスを法務レビューする必要性が高まっている。"
    );
    digital.currentSummary.implications = addUnique(
      digital.currentSummary.implications,
      "水回り・鍵・害虫駆除等の緊急駆け付けや点検型サービスでは、広告上の最低価格と実際の請求額の乖離、追加作業の説明、作業開始前の明示的な同意、クーリング・オフ時の対応を棚卸しする。"
    );
    digital.currentSummary.uncertain = addUnique(
      digital.currentSummary.uncertain,
      "正式な中間取りまとめは制度改革の方向を示す政策文書であり、対象取引の最終的な法定要件、禁止行為、行政処分、法案・下位法令、施行時期は未確定である。"
    );

    for (const issueId of ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"]) {
      addSource((digital.issues || []).find((issue) => issue && issue.id === issueId), digitalSourceId);
    }

    const rescueIssueId = "dt-rescue-inspection-sales";
    if (!(digital.issues || []).some((issue) => issue && issue.id === rescueIssueId)) {
      digital.issues = (digital.issues || []).concat([{
        id: rescueIssueId,
        title: "レスキュー商法・点検商法の訪問販売規律をどう見直すか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "2026年9月10日の中間取りまとめは、ウェブ上の著しく低い価格表示等で訪問を誘発した後に合理的理由なく大幅に高い価格で勧誘する類型や、消費者の意思確認前に作業へ着手して原状回復を困難にする類型について、違法化・行政処分対象化を含む規律強化の方向を示している。クーリング・オフへの不当な妨害等への対応強化も検討対象である。",
        exception: "消費者から訪問を依頼された取引を一律に違法とする整理ではなく、正当な緊急対応事業者へ過度な負担とならない制度設計も必要とされている。現行法上の訪問販売該当性や適用除外の判断は引き続き個別に行う。",
        uncertain: "対象となる価格乖離・作業着手の具体的要件、行政処分の範囲、条文化、施行時期は未確定である。",
        sourceIds: [digitalSourceId]
      }]);
    }
  }
})();
(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const finalSource = "source-caa-consumer-contract-interim-final-2026";

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, finalSource);

  topic.overview = (Array.isArray(topic.overview) ? topic.overview : []).map((text) => {
    if (typeof text === "string" && text.includes("2026年8月31日") && text.includes("中間取りまとめ（案）")) {
      return "消費者庁の検討会は2026年9月9日の第9回会合までの審議を経て、9月10日に中間取りまとめを公表した。消費者の多様な脆弱性への対応、継続的な契約関係からの離脱、更新・変更、死亡時対応、解約料等を扱うが、現時点では政策検討の中間取りまとめであり成立法ではない。";
    }
    return text;
  });

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = (Array.isArray(topic.currentSummary.facts) ? topic.currentSummary.facts : [])
    .filter((text) => !(typeof text === "string" && text.includes("9月9日の第9回検討会でも同案を議題とする予定")));
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "2026年9月9日の第9回検討会までの審議を経て、消費者庁は9月10日に中間取りまとめを公表した。今後さらに内容の具体化とパブリックコメントが予定されており、現時点では法案・成立法ではない。"
  );
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "中間取りまとめは、継続的な消費者契約について、解約妨害の禁止に加えて、合理的な離脱方法の提供・配慮、解約方法・条件の情報提供、契約更新、契約変更、消費者死亡時の対応手順に関する規律を検討対象として整理した。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "サブスクリプション等の見直しは解約ボタンの有無だけで完結せず、更新前後の通知、契約条件変更の個別通知、死亡時の照会・解約手順まで含む契約ライフサイクル全体の設計課題として追う必要がある。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "継続課金・会員制サービスでは、解約導線に加えて、更新時通知、契約条件変更の通知方法、契約者死亡時に相続人等から照会・解約を受ける手順と必要書類を棚卸しする。"
  );
  topic.currentSummary.uncertain = (Array.isArray(topic.currentSummary.uncertain) ? topic.currentSummary.uncertain : [])
    .filter((text) => !(typeof text === "string" && text.includes("中間取りまとめ（案）")));
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "中間取りまとめは制度改正の方向を示す政策検討資料であり、配慮規定、契約拘束力からの解放、解約妨害の具体類型、更新・変更通知、解約料説明等の条文・下位法令・施行時期は今後の具体化を待つ必要がある。"
  );

  const issueById = new Map((Array.isArray(topic.issues) ? topic.issues : []).map((issue) => [issue && issue.id, issue]));
  const vulnerability = issueById.get("consumer-contract-vulnerability-release");
  if (vulnerability) {
    vulnerability.sourceIds = addUnique(vulnerability.sourceIds, finalSource);
    vulnerability.conclusion = "中間取りまとめは、深刻な結果となる内容の契約を中心に据え、消費者の脆弱性を考慮しつつ事業者の予見可能性を確保する観点から対象契約・要件を明確化し、事業者が深刻な結果となることを知っていたことを要件に取り入れる方向を検討している。";
    vulnerability.uncertain = "対象となる『深刻な結果』や契約類型、事業者の認識要件、法的効果の具体化は未確定であり、事業者に消費者側事情の積極調査を求めるものではないと整理されている。";
  }

  const cancellation = issueById.get("consumer-contract-cancellation-obstruction");
  if (cancellation) {
    cancellation.sourceIds = addUnique(cancellation.sourceIds, finalSource);
    cancellation.conclusion = "中間取りまとめは、既存の解約権の行使を妨げる不実告知、申入れ拒否・不当遅延、欺罔・威迫、不当な環境設計、解約後債務の不当な拒否・遅延等を禁止し、差止請求の対象とする方向を示している。";
    cancellation.exception = "解約妨害があっただけで新たな解約権を発生させたり契約終了を擬制したりする方向ではなく、消費者契約一般に新たな解約権を設けることにも慎重な整理が示されている。";
    cancellation.uncertain = "禁止される環境設計等の具体類型、合理的な離脱方法・情報提供の法的強度、条文化と施行時期は今後の具体化を待つ。";
  }

  const fees = issueById.get("consumer-contract-cancellation-fees");
  if (fees) {
    fees.sourceIds = addUnique(fees.sourceIds, finalSource);
    fees.conclusion = "中間取りまとめは、今回は消費者契約法9条1項1号の見直しや一律の立証責任転換を行わず、複数の解約条件がある場合の情報提供と、解約料の算定根拠に関する説明を強化する方向を示している。";
    fees.uncertain = "情報提供・説明をどこまで法的義務として具体化するか、業界ごとの自主規制をどう活用するか、将来9条1項1号自体を見直すかは今後の検討事項である。";
  }

  const ecTerms = issueById.get("consumer-contract-ec-standard-terms");
  if (ecTerms) ecTerms.sourceIds = addUnique(ecTerms.sourceIds, finalSource);

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "更新・契約変更・契約者死亡時を含む継続契約のライフサイクル設計");
})();

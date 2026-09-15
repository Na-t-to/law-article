(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "early-business-recovery");
  if (!topic) return;

  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
  topic.sourceIds = addUnique(topic.sourceIds, "source-early-business-rehabilitation-act-2025");

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "担保付債権では、対象債権として手続に参加することと、多数決による権利変更の対象となる非保全債権部分を分けて整理する必要がある。担保評価は議決権額や弁済額に直結するため、対象債権性だけで処理を終えない。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "手続開始時の公示を伴わない非公開型の制度であっても、上場会社では適時開示義務との関係を別途検討する必要があり、制度上の秘密性と開示要否を同一視しない。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "金融機関・リース会社・信用保証協会等は、対象債権性、担保による保全額、議決権、一時停止要請への対応を施行前に案件管理手順へ落とし込む。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "上場会社が制度利用を検討する場合は、非公開手続であることだけを理由に開示不要とせず、適時開示規則との関係を案件ごとに確認する。"
  );

  const claimsIssue = (topic.issues || []).find((item) => item && item.id === "ebr-financial-claims");
  if (claimsIssue) {
    claimsIssue.conclusion = "対象となる金融機関等・貸付債権等を確認した上で、担保付債権は対象債権として手続に参加し得ることと、多数決による権利変更の対象が非保全債権部分に限られることを分け、担保評価・議決権額まで確認する。ファイナンス・リース、保証協会付き融資、外国金融機関等もQ&Aと契約実態に沿って個別に整理する。";
    claimsIssue.exception = "対象債権に含まれることは、その全額が多数決で権利変更されることを意味しない。特に担保付債権は保全部分と非保全部分の切り分けが必要になる。";
    claimsIssue.uncertain = "担保目的物の評価や複雑なファイナンス構造では、保全・非保全額の確定について当事者間の調整が必要になる場面があり、施行後の実務運用を確認する必要がある。";
    claimsIssue.sourceIds = addUnique(claimsIssue.sourceIds, "source-early-business-rehabilitation-act-2025");
  }

  if (!(topic.issues || []).some((item) => item && item.id === "ebr-confidentiality-disclosure")) {
    topic.issues = (topic.issues || []).concat([{
      id: "ebr-confidentiality-disclosure",
      title: "非公開手続と上場会社の開示をどう両立するか",
      status: "interpreted",
      stage: "enacted",
      views: [],
      conclusion: "手続開始時の公示を伴わず対象債権者に限定して進められる制度上の非公開性と、上場会社に生じ得る適時開示上の検討を別々に評価する。",
      exception: "制度が非公開であることだけから、上場会社の開示義務が当然に否定されるわけではない。",
      uncertain: "どの時点・内容で開示が必要になるかは、具体的な再生手続の進行と適時開示規則に照らして個別判断が必要になる。",
      sourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-recovery-rules-2026"]
    }]);
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "リース・保証協会付き融資の債権整理");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "上場会社の適時開示判断");
})();

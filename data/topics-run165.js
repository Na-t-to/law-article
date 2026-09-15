(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "ssbj-statutory-sustainability-disclosure");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, "source-fsa-ssbj-shk-practice-standard-designation-2026");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "SHK制度のGHGデータとSSBJ開示の接続");

  const facts = topic.currentSummary?.facts;
  const interpretations = topic.currentSummary?.interpretations;
  const implications = topic.currentSummary?.implications;
  if (Array.isArray(facts) && !facts.some((value) => String(value).includes("実務対応基準第1号"))) {
    facts.push("2026年9月15日、金融庁はSSBJが2026年6月11日までに公表した基準を法定のサステナビリティ開示基準として指定する告示改正を公布・同日適用し、『サステナビリティ開示実務対応基準第1号』を指定対象へ追加した。実務対応基準第1号は、温対法のSHK制度が定める方法により測定・報告する温室効果ガス排出を用いて気候基準に従う場合の開示を扱う。");
  }
  if (Array.isArray(interpretations) && !interpretations.some((value) => String(value).includes("SHK制度"))) {
    interpretations.push("SHK制度の報告値を利用する場合でも、実務対応基準第1号の適用条件と気候基準上の開示要求を確認し、既存の行政報告値を流用すれば追加の開示統制が不要になるとは扱わない。");
  }
  if (Array.isArray(implications) && !implications.some((value) => String(value).includes("実務対応基準第1号"))) {
    implications.push("法定適用準備企業は、実務対応基準第1号を利用する場合、SHK制度で報告するGHGデータの対象範囲・集計ロジック・レビュー担当とSSBJ開示のデータ系統を照合し、その判断過程を開示統制の証跡として残す。");
  }

  const currentIssue = (topic.issues || []).find((item) => item && item.id === "ssbj-current-standard");
  if (currentIssue) {
    currentIssue.conclusion = "2026年3月のGHG排出開示に関する適用・一般・気候関連の3基準改正に加え、2026年9月15日からは『サステナビリティ開示実務対応基準第1号』も金融庁告示上の指定基準に追加されている。適用時にはSSBJの現行基準本文・改訂履歴・実務対応基準を確認する。";
    currentIssue.sourceIds = addUnique(currentIssue.sourceIds, "source-fsa-ssbj-shk-practice-standard-designation-2026");
  }

  if (!(topic.issues || []).some((item) => item && item.id === "ssbj-shk-practice-standard-2026")) {
    topic.issues = (topic.issues || []).concat([{
      id: "ssbj-shk-practice-standard-2026",
      title: "SHK制度のGHG報告値をSSBJ気候開示へどう接続するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "2026年9月15日から、温対法のSHK制度が定める方法により測定・報告する温室効果ガス排出を用いて『気候基準』に従う場合の開示を定めるSSBJ実務対応基準第1号が、金融庁告示上の指定基準に追加された。",
      exception: "SHK制度の報告値を用いることだけでSSBJ気候基準の全開示要求を満たすものではなく、実務対応基準第1号が対象とする範囲と気候基準の他の要求事項を分けて確認する。",
      uncertain: "個社でどのデータ系列を利用し、どの統制・証跡を追加するかは、SHK報告の算定境界、連結範囲、既存の開示プロセス等に応じて設計する必要がある。",
      sourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"]
    }]);
  }
})();
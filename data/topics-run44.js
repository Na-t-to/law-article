window.TOPIC_DATA=(Array.isArray(window.TOPIC_DATA)?window.TOPIC_DATA:[]).map(function(topic){
  if(topic.slug!=="advertising-display-control") return topic;
  var issues=Array.isArray(topic.issues)?topic.issues.slice():[];
  if(!issues.some(function(issue){return issue.id==="display-premium-cap-review";})){
    issues.push({
      id:"display-premium-cap-review",
      title:"総付景品の上限額はどう見直されるか",
      status:"pending",
      stage:"draft",
      views:[],
      conclusion:"現行の総付景品の上限は、取引価額が1,000円未満の場合200円、1,000円以上の場合は取引価額の20％である。2026年7月21日閣議決定の規制改革実施計画は、消費者庁に対し、定額部分・定率部分の双方について2026年度に検討を開始し、2027年度に結論を得て、結論後速やかに必要な措置を講ずることを求めている。",
      exception:"現時点で上限額の引上げ幅や新しい比率は決定しておらず、現行の200円・20％の上限が引き続き適用される。業種別景品告示など別の景品規制も当然には変更されない。",
      uncertain:"具体的な新上限、改定方法、将来の総付規制廃止の有無は未決定である。300円・30％等は実務家による提案例であり、政府の決定内容ではない。",
      sourceIds:["source-cao-regulatory-reform-plan-2026-advertising"]
    });
  }
  if(!issues.some(function(issue){return issue.id==="display-undemonstrated-ad-review";})){
    issues.push({
      id:"display-undemonstrated-ad-review",
      title:"不実証広告規制の運用はどう見直されるか",
      status:"pending",
      stage:"draft",
      views:[],
      conclusion:"規制改革実施計画は、不実証広告規制について2026年度に検討を開始し、2027年度に結論を得る方針を示した。事前調査・合理的根拠資料の提出要求時に消費者庁が一般消費者の印象・認識に関する考え方を可能な限り書面で説明すること、措置命令時に提出資料が合理的根拠資料に該当しない理由を具体的に説明・公表することなどが検討対象となっている。",
      exception:"現行の景品表示法7条2項に基づく合理的根拠資料の提出要求や、合理的根拠がない場合の取扱いが廃止・変更されたわけではなく、運用指針等の見直しが確定するまでは現行ルールが適用される。",
      uncertain:"運用指針の具体的な改正文言、説明・公表の範囲、実施時期は今後の検討・結論待ちである。",
      sourceIds:["source-cao-regulatory-reform-plan-2026-advertising"]
    });
  }
  var currentSummary=Object.assign({},topic.currentSummary||{});
  currentSummary.facts=(currentSummary.facts||[]).concat([
    "政府は2026年7月21日の規制改革実施計画で、総付景品の上限額と不実証広告規制の運用を見直す方針を閣議決定し、いずれも2026年度に検討開始、2027年度に結論、結論後速やかに措置する工程を示した。",
    "総付景品の現行上限は取引価額1,000円未満で200円、1,000円以上で取引価額の20％であり、見直しの結論が出るまではこの上限が維持される。"
  ]);
  currentSummary.interpretations=(currentSummary.interpretations||[]).concat([
    "規制改革実施計画は制度見直しの工程を確定したもので、総付景品の新しい上限額や不実証広告規制の新運用を既に確定・施行したものではない。法律事務所等が提示する具体的な引上げ案と、政府が決定した検討事項を分けて読む必要がある。"
  ]);
  currentSummary.implications=(currentSummary.implications||[]).concat([
    "景品キャンペーンは当面、現行の200円・20％基準で審査しつつ、2026年度から2027年度にかけての消費者庁の調査・結論と総付告示等の変更を継続確認する。",
    "効果・性能表示については合理的根拠資料の準備・保存を現行どおり続けつつ、事前調査・資料提出要求・措置命令での当局説明の在り方に関する運用指針の見直しを追う。"
  ]);
  currentSummary.uncertain=(currentSummary.uncertain||[]).concat([
    "総付景品の具体的な引上げ幅、不実証広告規制の運用指針改正内容はいずれも未確定で、2027年度の結論とその後の措置を待つ必要がある。"
  ]);
  return Object.assign({},topic,{
    summary:"No.1表示、口コミ・ステルスマーケティング、総付景品、不実証広告規制を中心に、広告主が表示根拠と販促施策・外部委託をどう管理するかを整理する。",
    lastUpdated:"2026-09-04",
    lastVerified:"2026-09-04",
    currentSummary:currentSummary,
    issues:issues,
    sourceIds:Array.from(new Set((topic.sourceIds||[]).concat(["source-cao-regulatory-reform-plan-2026-advertising"]))),
    practicalImpacts:Array.from(new Set((topic.practicalImpacts||[]).concat(["総付景品キャンペーン設計","効果・性能表示の根拠資料・当局対応"])))
  });
});

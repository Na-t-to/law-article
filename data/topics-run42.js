window.TOPIC_DATA=(Array.isArray(window.TOPIC_DATA)?window.TOPIC_DATA:[]).map(function(topic){
  if(topic.slug!=="freelance-law") return topic;
  var issues=Array.isArray(topic.issues)?topic.issues.slice():[];
  if(!issues.some(function(issue){return issue.id==="freelance-remuneration-reduction";})){
    issues.push({
      id:"freelance-remuneration-reduction",
      title:"報酬から振込手数料等を差し引いてよいか",
      status:"authoritative",
      stage:"effective",
      views:[],
      conclusion:"1か月以上行う業務委託について、2026年1月1日以降になされた委託では、フリーランスとの合意の有無にかかわらず、振込手数料を報酬額から差し引くことは報酬の減額に該当する。その他の控除も、特定受託事業者の責めに帰すべき事由があるか等を確認して判断する。",
      exception:"2026年1月1日より前になされた業務委託についても、合意した振込手数料負担の範囲を超えて実際の金融機関手数料より多く差し引くことは、報酬減額として問題になり得る。",
      uncertain:"振込手数料以外の費用控除・相殺・精算は、控除の性質、合意内容、委託期間、特定受託事業者の責めに帰すべき事由等を個別に確認する必要がある。",
      sourceIds:["source-freelance-law","source-jftc-freelance-interpretation-2025","source-jftc-jtop-freelance-recommendation-2026"]
    });
  }
  var currentSummary=Object.assign({},topic.currentSummary||{});
  currentSummary.facts=(currentSummary.facts||[]).concat(["公正取引委員会は2026年8月26日、ジェイトップがフリーランス138名への報酬から実際の振込手数料を超える合計481,031円を差し引いたとして、報酬減額禁止違反を理由に勧告した。2026年1月1日以降になされた1か月以上の業務委託では、合意の有無にかかわらず振込手数料を報酬から差し引くことが報酬減額に該当するとの考え方が適用されている。"]);
  currentSummary.implications=(currentSummary.implications||[]).concat(["振込手数料を受託者負担とする契約条項だけで処理せず、2026年1月1日以降の1か月以上の業務委託では報酬から控除しない支払設定へ改め、過去契約・振込設定・差引ロジックを点検する。"]);
  return Object.assign({},topic,{
    lastUpdated:"2026-09-04",
    lastVerified:"2026-09-04",
    currentSummary:currentSummary,
    issues:issues,
    sourceIds:Array.from(new Set((topic.sourceIds||[]).concat(["source-jftc-freelance-interpretation-2025","source-jftc-jtop-freelance-recommendation-2026"]))),
    practicalImpacts:Array.from(new Set((topic.practicalImpacts||[]).concat(["振込手数料・報酬控除の支払設定"])))
  });
});

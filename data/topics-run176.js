(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "social-insurance-expansion-2025");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (list, value) => addUnique(list, value);
  const qualificationSource = "source-mhlw-social-insurance-short-regular-sole-proprietor-2026";
  const adjustmentSource = "source-jps-social-insurance-premium-adjustment-2026";

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, qualificationSource);
  topic.sourceIds = addUnique(topic.sourceIds, adjustmentSource);

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUniqueText(
    topic.currentSummary.facts,
    "厚生労働省は2026年9月14日、個人事業主・フリーランス等を勤務時間が極端に短い正規型労働者として雇用する場合の健康保険・厚生年金保険の資格について、契約名義ではなく常用的使用関係の実態で判断する取扱いを明確化した。報酬の実質と経常的な労務提供の双方を欠く場合は、原則として被保険者資格を有しない。"
  );
  topic.currentSummary.facts = addUniqueText(
    topic.currentSummary.facts,
    "2026年10月以降の任意適用や2027年以降の適用拡大等で新たに加入対象となる一定の短時間労働者について、標準報酬月額12.6万円以下であれば、事業所からの申出により通算3年間本人の保険料負担を軽減する保険料調整制度が設けられている。"
  );
  topic.currentSummary.interpretations = addUniqueText(
    topic.currentSummary.interpretations,
    "社会保険の被保険者資格は、雇用契約の名称や短時間でも『正規』とする形式だけでなく、実際の労働時間・業務内容・指揮命令・報酬と会費等の資金関係を含む常用的使用関係から判断する。労働法上の労働者性判断と同一の問題として機械的に処理しない。"
  );
  topic.currentSummary.implications = addUniqueText(
    topic.currentSummary.implications,
    "個人事業主・フリーランスとの雇用併存契約では、極端に短い勤務、形式的な研修・情報共有、会費・広告費・掲載料・委託費等と給与の循環がないかを棚卸しし、実際の労務提供と報酬支払を記録できるようにする。"
  );
  topic.currentSummary.implications = addUniqueText(
    topic.currentSummary.implications,
    "適用拡大で新たに加入する短時間労働者がいる事業所は、保険料調整制度の対象事業所・対象者、申出期限、給与控除、事業主追加負担と還付の処理を加入判定と一体で確認する。"
  );
  topic.currentSummary.uncertain = addUniqueText(
    topic.currentSummary.uncertain,
    "名目的雇用が疑われる場合でも、通知の二つの判断要素のうち一方だけに該当する事案や、会費等が報酬以下である事案は、就労実態を踏まえた個別具体的な総合判断が必要となる。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue && issue.id === "social-insurance-nominal-employment-qualification-2026")) {
    topic.issues.push({
      id: "social-insurance-nominal-employment-qualification-2026",
      title: "短時間の正規型雇用と個人事業を組み合わせた場合の被保険者資格をどう判断するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "契約名義ではなく常用的使用関係の実態を確認し、報酬が経常的な業務対価といえないことと、業務が経常的な労務提供といえないことの双方に該当する場合は、原則として健康保険・厚生年金保険の被保険者資格を有しないものとして取り扱う。",
      exception: "二つの要素の一方だけに該当する場合や、会費等が報酬以下である場合でも直ちに資格の有無が決まるわけではなく、労働時間、業務内容、報酬と会費等の関係その他の就労実態を総合判断する。",
      uncertain: "個別案件でどの程度の勤務時間・業務内容・費用負担が常用的使用関係を否定するかは、一律の数値基準ではなく事実関係に応じて判断される。",
      sourceIds: [qualificationSource]
    });
  }

  if (!topic.issues.some((issue) => issue && issue.id === "social-insurance-premium-adjustment-2026")) {
    topic.issues.push({
      id: "social-insurance-premium-adjustment-2026",
      title: "適用拡大時の保険料調整制度を誰に・いつ適用できるか",
      status: "authoritative",
      stage: "enacted",
      views: [],
      conclusion: "対象事業所が期限内に申出を行うと、標準報酬月額12.6万円以下の対象短時間労働者について、事業主が一時的に保険料を追加負担することで本人負担を通算3年間軽減でき、事業主の追加負担分は原則として後の保険料から還付される。",
      exception: "制度は事業所単位で適用され、対象者の一部だけを選んで利用することはできない。対象外となる事業所・被保険者があり、保険料の納付状況等によっては追加負担分が還付されない場合もある。",
      uncertain: "事業所がどの適用拡大区分で対象となるか、申出期限や個々の被保険者の対象性は、加入時期・企業規模・標準報酬月額・複数事業所勤務等を確認して判断する。",
      sourceIds: [adjustmentSource]
    });
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "個人事業主・フリーランスとの雇用併存スキームの被保険者資格点検");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "保険料調整制度の申出・給与控除・還付管理");
})();

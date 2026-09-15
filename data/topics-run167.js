(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "social-insurance-expansion-2025");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, "source-mhlw-social-insurance-wage-requirement-decree-2026");
  topic.sourceIds = addUnique(topic.sourceIds, "source-mhlw-social-insurance-wage-requirement-ordinance-2026");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "2026年10月1日の賃金要件撤廃・対象者再判定");

  if (Array.isArray(topic.overview)) {
    topic.overview = topic.overview.map((value) => String(value).includes("2025年年金制度改正では")
      ? "2025年年金制度改正では、短時間労働者の被用者保険について、企業規模要件を段階的に縮小・撤廃するとともに、月額8.8万円以上とする賃金要件を撤廃することが定められました。2026年9月11日の関係政令により、賃金要件の撤廃日は2026年10月1日と確定しました。"
      : value);
  }

  const facts = topic.currentSummary?.facts;
  const interpretations = topic.currentSummary?.interpretations;
  const implications = topic.currentSummary?.implications;
  const uncertain = topic.currentSummary?.uncertain;

  if (Array.isArray(facts)) {
    topic.currentSummary.facts = facts.map((value) => String(value).includes("2025年6月20日に公布された年金制度改正法は")
      ? "2025年6月20日に公布された年金制度改正法は、短時間労働者の企業規模要件を2027年10月以降段階的に縮小し、2035年10月に撤廃する。月額8.8万円以上の賃金要件は、2026年9月11日の関係政令により2026年10月1日に撤廃されることが確定した。"
      : value);
    if (!topic.currentSummary.facts.some((value) => String(value).includes("特定減額特例対象者"))) {
      topic.currentSummary.facts.push("賃金要件撤廃後も、最低賃金法上の減額特例の対象となる特定減額特例対象者には、通常の短時間労働者とは別建ての資格取得・申出・資格喪失等の仕組みが設けられる。関係政令・省令は2026年10月1日から施行される。");
    }
  }

  if (Array.isArray(interpretations) && !interpretations.some((value) => String(value).includes("特定減額特例対象者"))) {
    interpretations.push("月額8.8万円の賃金要件がなくなっても、短時間労働者の適用判定は週所定労働時間、学生該当性、企業規模その他の要件を引き続き確認する。特定減額特例対象者は別建ての規律があるため、通常の短時間労働者と一律に扱わない。");
  }

  if (Array.isArray(implications)) {
    topic.currentSummary.implications = implications.map((value) => String(value).includes("2026年10月の賃金要件撤廃予定")
      ? "人事・給与部門は2026年10月1日の賃金要件撤廃と2027年以降の企業規模要件縮小を前提に、対象となり得る短時間労働者、雇用契約、資格取得届、給与控除、本人説明を棚卸しする。"
      : value);
  }

  if (Array.isArray(uncertain)) {
    topic.currentSummary.uncertain = uncertain.map((value) => String(value).includes("短時間労働者の賃金要件撤廃は厚生労働省が2026年10月予定")
      ? "特定減額特例対象者の個別の資格取得・申出・資格喪失手続は、本人の状態と最低賃金法上の減額特例の適用状況を確認した上で、関係政令・省令と日本年金機構の手続案内に沿って判断する。"
      : value);
  }

  const issue = (topic.issues || []).find((item) => item && item.id === "social-insurance-short-time-coverage-expansion");
  if (issue) {
    issue.conclusion = "週所定労働時間20時間以上等の要件を前提に、月額8.8万円以上の賃金要件は2026年10月1日に撤廃される。企業規模要件は2027年10月以降段階的に縮小され、2035年10月1日に撤廃される。";
    issue.exception = "学生除外など別の適用要件は残る。さらに、最低賃金法上の減額特例の対象となる特定減額特例対象者には別建ての資格取得・申出等の規律が置かれるため、賃金要件撤廃だけで全員を一律に加入対象と判断しない。";
    issue.uncertain = "特定減額特例対象者に該当する場合の具体的な届出・申出と資格取得時期は、個別の減額特例の状況と関係政省令・年金機構の手続案内を確認する。";
    issue.sourceIds = addUnique(issue.sourceIds, "source-mhlw-social-insurance-wage-requirement-decree-2026");
    issue.sourceIds = addUnique(issue.sourceIds, "source-mhlw-social-insurance-wage-requirement-ordinance-2026");
  }
})();

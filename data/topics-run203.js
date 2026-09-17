(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const socialSource = "source-mhlw-short-hours-insured-status-20260914";
  const socialArticle = "article-mhlw-short-hours-insured-status-20260914";
  const social = (window.TOPIC_DATA || []).find((item) => item?.slug === "social-insurance-short-time-workers-2026");
  if (social) {
    social.lastUpdated = "2026-09-18";
    social.lastVerified = "2026-09-18";
    social.sourceIds = appendUnique(social.sourceIds, [socialSource]);
    social.referenceArticleIds = appendUnique(social.referenceArticleIds, [socialArticle]);
    social.practicalImpacts = appendUnique(social.practicalImpacts, ["被保険者資格の実態判定", "個人事業主・短時間雇用の加入適否確認"]);
    social.currentSummary = social.currentSummary || {};
    social.currentSummary.facts = appendTextUnique(
      social.currentSummary.facts,
      "2026年9月14日、厚生労働省は、個人事業主等を勤務時間が極端に短い正規型労働者として雇用する事案について、契約の文言だけでなく労働時間・勤務内容・報酬の流れ等から常用的使用関係を総合判断する取扱いを明確化した。"
    );
    social.currentSummary.interpretations = appendTextUnique(
      social.currentSummary.interpretations,
      "短時間労働者の適用拡大で形式的な加入要件を確認するだけでは足りず、極端に短い勤務や会費徴収等を伴う場合は、実際に経常的な報酬・労務提供があるかを別途確認する必要がある。"
    );
    social.currentSummary.implications = appendTextUnique(
      social.currentSummary.implications,
      "個人事業主・フリーランスを極短時間の正規型労働者として雇用する場合は、会費・委託費等と報酬の関係、実労働時間、具体的な指揮命令・業務内容を記録し、被保険者資格の根拠を説明できる状態にする。"
    );
    const issueId = "social-insurance-formal-qualification-substance-2026";
    const issues = Array.isArray(social.issues) ? social.issues : [];
    if (!issues.some((issue) => issue?.id === issueId)) {
      issues.push({
        id: issueId,
        title: "極端に短い勤務・会費徴収等を伴う雇用の被保険者資格をどう判断するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "契約名称ではなく常用的使用関係の実態で判断し、報酬が業務の対価として経常的な支払いと認められず、かつ業務が経常的な労務提供と認められない場合は、原則として健康保険・厚生年金保険の被保険者資格を有しないものとして扱う。",
        exception: "二つの要件の一方だけに該当する場合や一般的な短時間雇用は一律に資格否定されず、労働日数、労働時間、就労形態、勤務内容等から個別具体的に常用的使用関係を総合判断する。",
        uncertain: "通知は主として、労働者である個人事業主等から会費等を徴収し不適切な社会保険適用が疑われる事案を想定しており、個々の雇用形態への適用は実態に即した判断が必要である。",
        sourceIds: [socialSource]
      });
      social.issues = issues;
    }
  }

  const productSource = "source-mhlw-product-safety-pledge-osha-20260910";
  const productArticle = "article-mhlw-product-safety-pledge-osha-20260910";
  const product = (window.TOPIC_DATA || []).find((item) => item?.slug === "product-safety-four-acts-ecommerce-child-products");
  if (product) {
    product.lastUpdated = "2026-09-18";
    product.lastVerified = "2026-09-18";
    product.sourceIds = appendUnique(product.sourceIds, [productSource]);
    product.referenceArticleIds = appendUnique(product.referenceArticleIds, [productArticle]);
    product.practicalImpacts = appendUnique(product.practicalImpacts, ["製品安全誓約の対象製品・自主対応の確認"]);
    product.currentSummary = product.currentSummary || {};
    product.currentSummary.facts = appendTextUnique(
      product.currentSummary.facts,
      "2026年9月10日、製品安全誓約（日本国）の対象に、労働安全衛生法が規制する一部製品が追加され、石綿含有製品や譲渡等制限機械等もオンラインマーケットプレイスの自主的な安全対応の対象となった。"
    );
    product.currentSummary.interpretations = appendTextUnique(
      product.currentSummary.interpretations,
      "製品安全誓約は法的枠組みを超えた官民協働の自主的取組であるため、製品安全4法や労働安全衛生法上の法定義務と、参加オンラインマーケットプレイスが誓約に基づき行う監視・削除等を分けて整理する。"
    );
    const dpf = (product.issues || []).find((issue) => issue?.id === "product-safety-dpf-measures");
    if (dpf) dpf.sourceIds = appendUnique(dpf.sourceIds, [productSource]);
  }
})();

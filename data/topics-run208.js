(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "distribution-resale-price");
  if (!topic) return;

  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];
  const appendText = (base, value) => {
    const items = Array.isArray(base) ? base : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.sourceIds = appendUnique(topic.sourceIds, [
    "source-jftc-distribution-guideline-current-20260708",
    "source-jftc-rpm-faq-20260708"
  ]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, ["article-uchisaiwai-rpm-guideline-20260727"]);

  if (topic.currentSummary) {
    topic.currentSummary.facts = appendText(
      topic.currentSummary.facts,
      "公取委のQ&Aは、ユーザー販売までの費用として保管・輸送・広告宣伝だけでなく、荷造費、見本費、人件費、研修費、保険料等も取引実態に応じて含まれ得るとし、費用の内容と負担方法をメーカーと販売店で確認・明確化することを示している。"
    );
    topic.currentSummary.implications = appendText(
      topic.currentSummary.implications,
      "指定価格型の販売施策では、費用項目と負担方法を一方的に決めるだけでなく、販売店が不足費用を申し出て協議できるフローと精算方法まで設計・記録する。"
    );
  }

  const riskCostIssue = (topic.issues || []).find((issue) => issue && issue.id === "rpm-risk-cost-exception");
  if (riskCostIssue) {
    riskCostIssue.sourceIds = appendUnique(riskCostIssue.sourceIds, [
      "source-jftc-distribution-guideline-current-20260708",
      "source-jftc-rpm-faq-20260708"
    ]);
  }
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "generative-ai-ip-principle-code");
  if (!topic) return;

  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];
  const appendText = (base, value) => {
    const items = Array.isArray(base) ? base : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.sourceIds = appendUnique(topic.sourceIds, ["source-ai-ip-principle-code-filing-20260908"]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, ["article-ai-ip-principle-code-filing-20260908"]);

  if (topic.currentSummary) {
    if (Array.isArray(topic.currentSummary.facts)) {
      topic.currentSummary.facts = topic.currentSummary.facts.map((text) =>
        text === "コード受入れに関する内閣府への届出開始時期は、公式ページで別途知らせるとされている。"
          ? "内閣府は2026年9月8日、コード受入れに関する届出を2026年10月26日から開始すると公表し、公式の届出様式も掲載した。届出先等は開始日に案内するとされている。"
          : text
      );
    }
    topic.currentSummary.implications = appendText(
      topic.currentSummary.implications,
      "コードの受入れを検討する生成AI事業者は、2026年10月26日の届出開始に向け、原則ごとの実施・説明方針、対外開示ページ、社内承認と公式様式への記載内容を対応付けて準備する。"
    );
    if (Array.isArray(topic.currentSummary.uncertain)) {
      topic.currentSummary.uncertain = topic.currentSummary.uncertain.map((text) => {
        if (text.includes("届出開始時期") || text.includes("届出の開始時期")) {
          return "届出開始日は2026年10月26日に確定したが、届出先等は開始日に案内するとされており、受入れ事業者一覧の公表方法を含む実運用は開始後も確認が必要である。";
        }
        return text;
      });
    }
  }

  const acceptanceIssue = (topic.issues || []).find((issue) => issue && issue.id === "ai-ip-code-acceptance");
  if (acceptanceIssue) {
    acceptanceIssue.status = "authoritative";
    acceptanceIssue.stage = "effective";
    acceptanceIssue.conclusion = "原則ごとに実施・説明の方針を決め、対外説明の根拠を保存する。内閣府への受入れ届出は2026年10月26日から開始し、9月8日に公式様式が公表されている。";
    acceptanceIssue.uncertain = "届出先等は2026年10月26日の開始日に案内するとされており、受入れ事業者一覧の公表方法や運用実務は開始後も確認する。";
    acceptanceIssue.sourceIds = appendUnique(acceptanceIssue.sourceIds, ["source-ai-ip-principle-code-filing-20260908"]);
  }
})();

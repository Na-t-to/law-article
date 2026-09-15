(() => {
  const addUnique = (array, value) => {
    if (!Array.isArray(array)) return [value];
    if (!array.includes(value)) array.push(value);
    return array;
  };

  const sourceId = "source-nco-critical-infrastructure-safety-guideline-2026";
  const articleId = "article-nco-critical-infrastructure-safety-guideline-2026";
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");

  if (topic) {
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    topic.sourceIds = addUnique(topic.sourceIds || [], sourceId);

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUnique(
        topic.currentSummary.facts || [],
        "2026年9月11日、国家サイバー統括室は重要インフラ統一基準を具体化する『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』の最終版を策定した。統一基準、同ガイドライン、改定行動計画はいずれも2026年10月1日施行予定である。"
      );
      topic.currentSummary.interpretations = addUnique(
        topic.currentSummary.interpretations || [],
        "安全基準等策定ガイドラインの最終化により、企業実務の焦点は『案の確定待ち』から、各所管省庁・業界団体が統一基準とガイドラインを分野別の安全基準等へどう反映するか、その反映内容を自社のガバナンス、リスク管理、サプライチェーン管理、障害対応へどう落とすかへ移る。"
      );
      topic.currentSummary.implications = addUnique(
        topic.currentSummary.implications || [],
        "2026年10月1日の施行に向け、最終版ガイドラインと自社分野の安全基準等を突き合わせ、経営層の関与、リスク評価、委託先・サプライチェーン管理、インシデント対応・復旧、監査・継続的改善の不足を確認する。"
      );
      if (Array.isArray(topic.currentSummary.uncertain)) {
        const index = topic.currentSummary.uncertain.findIndex((value) => String(value).includes("安全基準等策定ガイドライン"));
        const replacement = "安全基準等策定ガイドライン自体は2026年9月11日に最終化された。今後は、所管省庁・業界団体が各分野の安全基準等へどの内容をいつ反映するか、事業者側の具体的な評価・改善運用がどう定着するかを継続確認する必要がある。";
        if (index >= 0) topic.currentSummary.uncertain[index] = replacement;
        else topic.currentSummary.uncertain.push(replacement);
      }
    }

    const issue = (topic.issues || []).find((item) => item && item.id === "cyber-critical-infrastructure-unified-standard");
    if (issue) {
      issue.sourceIds = addUnique(issue.sourceIds || [], sourceId);
      issue.conclusion = "重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法に基づき、重要インフラ事業者等が分野・事業者横断的に実施すべき対策を促進するための政府機関の施策に関する統一基準であり、2026年10月1日施行予定である。2026年9月11日には安全基準等策定ガイドラインの最終版も策定され、企業は統一基準・同ガイドラインを踏まえて所管省庁・業界団体が整備する分野別安全基準等への反映を追う。";
      issue.uncertain = "安全基準等策定ガイドライン自体は最終化された。今後の確認点は、所管省庁・業界団体による分野別安全基準等への反映内容・時期と、事業者側での評価・改善運用の具体化である。";
    }
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "critical-infrastructure-unified-standard-2026");
  if (reform) {
    reform.effectiveDateSourceIds = addUnique(reform.effectiveDateSourceIds || [], sourceId);
    reform.matchSourceIds = addUnique(reform.matchSourceIds || [], sourceId);
    reform.sourceIds = addUnique(reform.sourceIds || [], sourceId);
    reform.articleIds = addUnique(reform.articleIds || [], articleId);
  }

  const article = {
    id: articleId,
    title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン（2026年9月11日策定）",
    publisher: "内閣官房 国家サイバー統括室",
    author: "内閣官房 国家サイバー統括室",
    publishedAt: "2026-09-11",
    collectedAt: "2026-09-15",
    url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
    sourceType: "primary",
    sourceLabel: "一次資料・重要インフラ安全基準等策定ガイドライン",
    status: "adopted",
    summary: "重要インフラ統一基準を受け、重要インフラ所管省庁や業界団体等が分野別の安全基準等を策定・改定する際に参照する詳細事項を示す最終ガイドライン。2026年9月11日に策定され、統一基準とともに2026年10月1日施行予定。重要インフラ防護を組織統治の一部として扱い、経営層の関与、リスクマネジメント、サプライチェーン・リスク、障害対応、監査・継続的改善等を分野横断で具体化する。",
    whyImportant: [
      "8月時点の案から最終版へ進み、重要インフラ統一基準を各分野の安全基準等へ落とすための参照文書が確定した",
      "サイバーセキュリティをシステム部門だけの技術課題ではなく、経営層を含む組織統治・リスクマネジメントの問題として確認できる",
      "サプライヤー・委託先との依存関係を含むサプライチェーン・リスクと、障害発生時の対応・復旧を一つの管理体系で点検できる",
      "2026年10月1日の施行前に、自社分野の省庁・業界基準へ何が反映されるかを追う基準点になる"
    ],
    audience: ["企業法務", "情報セキュリティ", "リスク管理", "重要インフラ事業者", "IT・クラウドベンダー"],
    audienceReason: "重要インフラ統一基準の施行準備について、最終化された横断ガイドラインと分野別ルールへの反映を切り分けて点検するため。",
    categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
    relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
    relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
    primarySourceIds: [sourceId, "source-nco-critical-infrastructure-unified-standard-2026"],
    reformEventId: "critical-infrastructure-unified-standard-2026",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [sourceId, "source-nco-critical-infrastructure-unified-standard-2026"],
    legacyReformInference: false,
    whatChanged: "安全基準等策定ガイドラインが案から最終版へ移行。重要インフラ統一基準の2026年10月1日施行に向け、分野別安全基準等へ落とす詳細事項が確定した。"
  };

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  let currentArticles = window.ARTICLE_DATA || [];
  const exists = currentArticles.some((item) => item && (item.id === article.id || normalizeUrl(item.url) === normalizeUrl(article.url)));
  if (!exists) currentArticles = currentArticles.concat([article]);
  window.ARTICLE_DATA = currentArticles;
})();

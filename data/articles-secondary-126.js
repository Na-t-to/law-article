(() => {
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
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const sourceId = "source-nco-critical-infrastructure-safety-guideline-2026";
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const issueId = "cyber-critical-infrastructure-unified-standard";
  const reformEventId = "critical-infrastructure-unified-standard-2026";
  const source = {
    id: sourceId,
    title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
    type: "guideline",
    typeLabel: "国家サイバー統括室・安全基準等策定ガイドライン（確定版）",
    authority: "国家サイバー統括室",
    publishedAt: "2026-09-11",
    url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
    importance: "最高",
    whyImportant: "重要インフラ所管省庁等が各分野の安全基準等を策定・改定する際に参照する確定版ガイドライン。2026年8月の案・意見募集段階を終え、重要インフラ統一基準とともに2026年10月1日から施行予定であることを確認できる。",
    topics: [topicSlug]
  };
  const article = {
    id: "article-nco-critical-infrastructure-safety-guideline-2026",
    title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
    publisher: "国家サイバー統括室",
    author: "国家サイバー統括室",
    publishedAt: "2026-09-11",
    collectedAt: "2026-09-13",
    url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
    sourceType: "primary",
    sourceLabel: "一次資料・重要インフラ／安全基準等策定ガイドライン確定版",
    status: "adopted",
    summary: "国家サイバー統括室が2026年9月11日に策定した、重要インフラ所管省庁等が各分野の安全基準等を策定・改定する際に参照するガイドラインの確定版。8月5日公表の案についての意見募集を経て確定し、7月31日決定の重要インフラ統一基準とともに10月1日から施行予定である。これにより、LAW / INDEXで未確定事項としていた『安全基準等策定ガイドラインの最終化』は解消し、今後の確認対象は各分野の安全基準等への具体的な反映へ移る。",
    whyImportant: [
      "8月公表の案・パブリックコメント段階から確定版へ進んだため、施行準備で参照すべき文書を最終版へ切り替えられる",
      "重要インフラ統一基準が各分野の安全基準等へ具体化される際の参照文書が確定し、所管省庁・業界団体の改定を追う基準点になる",
      "重要インフラ統一基準と同じ2026年10月1日に施行予定であり、サイバー対処能力強化法の直接義務とは別系統の基準整備を時系列で管理できる"
    ],
    audience: ["企業法務", "CISO・情報セキュリティ", "重要インフラ事業者の制度対応担当", "IT調達・委託先管理"],
    audienceReason: "10月1日の施行前に、案ではなく確定版を基準として、自社分野の安全基準等の改定状況と社内・委託先対応を確認するため。",
    categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
    relatedTopics: [topicSlug],
    relatedIssues: [issueId],
    primarySourceIds: [sourceId, "source-nco-critical-infrastructure-unified-standard-2026"],
    reformEventId,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [sourceId, "source-nco-critical-infrastructure-unified-standard-2026"],
    whatChanged: "テーマ更新／安全基準等策定ガイドラインが案・意見募集段階から2026年9月11日の確定版へ進んだため、未確定事項を解消し、今後の監視対象を各分野の安全基準等への反映へ更新した。"
  };

  const currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = currentSources.concat(source);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (topic) {
    addUnique(topic.sourceIds, [sourceId]);
    topic.lastUpdated = "2026-09-13";
    topic.lastVerified = "2026-09-13";
    if (topic.currentSummary) {
      addUnique(topic.currentSummary.facts, [
        "2026年9月11日、国家サイバー統括室は重要インフラ所管省庁等が安全基準等の策定・改定に当たって参照する『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』の確定版を策定した。重要インフラ統一基準とともに2026年10月1日施行予定である。"
      ]);
      addUnique(topic.currentSummary.implications, [
        "2026年10月1日の施行準備では、8月公表の案ではなく9月11日の確定版ガイドラインを参照し、自社分野の所管省庁・業界団体が安全基準等へどう反映するかを確認する。"
      ]);
      if (Array.isArray(topic.currentSummary.uncertain)) {
        topic.currentSummary.uncertain = topic.currentSummary.uncertain
          .filter((text) => !String(text).includes("安全基準等策定ガイドラインは2026年8月5日に案が公表"));
        addUnique(topic.currentSummary.uncertain, [
          "安全基準等策定ガイドライン自体は2026年9月11日に確定したが、各重要インフラ分野の安全基準等へどの項目をどの時期に反映するかは、所管省庁・業界団体の今後の改定を継続確認する必要がある。"
        ]);
      }
    }
    const issue = (topic.issues || []).find((item) => item && item.id === issueId);
    if (issue) {
      addUnique(issue.sourceIds, [sourceId]);
      issue.uncertain = "安全基準等策定ガイドラインは2026年9月11日に確定した。今後は、各重要インフラ分野の安全基準等への具体的な反映内容と改定時期を確認する必要がある。";
    }
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === reformEventId);
  if (reform) {
    addUnique(reform.sourceIds, [sourceId]);
    addUnique(reform.matchSourceIds, [sourceId]);
    addUnique(reform.effectiveDateSourceIds, [sourceId]);
  }

  const currentArticles = window.ARTICLE_DATA || [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = currentArticles.concat(article);
  }
})();

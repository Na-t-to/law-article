(() => {
  if (window.__LAW_INDEX_RUN247_APPLIED__) return;
  window.__LAW_INDEX_RUN247_APPLIED__ = true;

  const TOPIC = "insurance-agency-governance-comparison-sales-2025";
  const ISSUE = "insurance-broker-reform-2026";
  const REFORM = "insurance-business-act-2025-amendment";
  const SOURCE = "source-fsa-insurance-broker-reinsurance-fees-20250828";
  const FINAL_RULES = "source-fsa-insurance-business-act-2026-final-rules";
  const ARTICLE = "article-amt-insurance-broker-reinsurance-update-20260729";

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));

  const source = {
    id: SOURCE,
    title: "『保険会社向けの総合的な監督指針』等の一部改正（案）に対するパブリックコメントの結果等の公表について",
    type: "guideline",
    typeLabel: "監督指針・パブリックコメント結果／保険仲立人報酬",
    authority: "金融庁",
    publishedAt: "2025-08-28",
    url: "https://www.fsa.go.jp/news/r7/hoken/20250828/20250828.html",
    importance: "高",
    whyImportant: "2025年8月28日適用の改正監督指針とパブリックコメント結果。回答389・390で、再保険契約の締結の媒介に係る手数料等について監督指針V-4-4(1)の請求方法ルールを適用せず、海外再保険会社との取引を含む商慣習・法令・公序良俗に沿って取り扱う考え方を明示している。",
    topics: [TOPIC]
  };
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(sources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(sources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = sources.concat(source);
  }

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || issue.id !== ISSUE) return issue;
      return {
        ...issue,
        conclusion: "2025年改正保険業法と施行ルールでは、保険仲立人について保証金制度、保険代理店等との協業、海外直接付保、不祥事件届出等が見直された。2026年6月1日以後、保険仲立人が代理店と協業する場合は両者の役割の違いと業務分担を顧客へ説明し、仲立人側は顧客の同意を得る。再保険契約の媒介手数料等については、2025年8月28日改正監督指針で一般の企業保険向けV-4-4(1)の請求方法ルールを適用せず、商慣習・法令・公序良俗に沿って扱う整理が示されている。",
        exception: "一般の企業保険と再保険では仲立人報酬の請求方法に関する監督指針上の扱いが異なる。再保険について一般保険向けの請求方法ルールを機械的に当てはめない。また、保証金、代理店との協業、海外直接付保、不祥事件届出等はそれぞれ適用要件が異なる。",
        uncertain: "改正後にどの保険調達・媒介スキームで仲立人利用が定着するか、また金融庁が今後検討するとしている仲立人制度の追加見直し・国内再保険キャプティブ制度の具体化は継続確認する。",
        sourceIds: addUnique(issue.sourceIds, SOURCE)
      };
    });
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addUnique(topic.sourceIds, SOURCE),
      currentSummary: {
        ...currentSummary,
        facts: addUnique(currentSummary.facts, "保険仲立人と保険代理店の協業は2026年6月1日から可能となり、仲立人は両者の役割の違いと業務分担を顧客へ説明して同意を得る必要がある。再保険契約の媒介手数料等は2025年8月28日改正監督指針で一般の企業保険向け請求方法ルールの対象外とされ、商慣習・法令・公序良俗に沿う扱いが示されている。"),
        implications: addUnique(currentSummary.implications, "保険仲立人を使う企業は、代理店との協業時の説明・同意フローに加え、一般保険と再保険で報酬設計の監督上の扱いが異なることを契約・調達プロセスへ反映する。")
      }
    };
  });

  const article = {
    id: ARTICLE,
    title: "Recent Regulatory Updates Relevant to Insurance Brokers and Reinsurance",
    publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
    author: "Hiroki Tsue / Huan Lee (Henry) Tan / Tomoki Debari",
    publishedAt: "2026-07-29",
    collectedAt: "2026-09-24",
    url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260729001_en_001/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／保険仲立人・再保険",
    status: "adopted",
    summary: "2025～2026年の保険仲立人制度見直しを、保険代理店との協業と再保険仲介報酬の両面から整理する実務解説。2026年6月1日以後、仲立人と代理店の協業では役割・業務分担の説明と同意取得が必要となる。一方、再保険契約の媒介手数料等については、2025年8月28日改正監督指針で一般の企業保険向けV-4-4(1)の請求方法ルールを適用せず、海外再保険を含む商慣習・法令・公序良俗に沿って扱う整理が示されている。今後の仲立人制度の追加見直しや国内再保険キャプティブ制度の検討にも触れる。",
    whyImportant: [
      "既収録の2026年5月AMT解説が明示的に対象外としていた『媒介手数料の受領方法』を、再保険まで含めて補完できる",
      "保険仲立人と保険代理店の協業について、誰が誰に役割・業務分担を説明し、どの同意を得るかを施行後の実務フローとして確認できる",
      "再保険では一般の企業保険と同じ手数料請求ルールを機械的に適用しないことを、金融庁パブリックコメント回答389・390と照合して確認できる"
    ],
    audience: ["企業法務・リスク管理", "保険・再保険担当", "保険仲立人", "保険代理店", "金融法務・コンプライアンス"],
    audienceReason: "改正後の保険仲立人を使う際に、代理店との協業説明・同意、一般保険と再保険の報酬設計の違い、今後の制度見直しを実務へ落とすため。",
    categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
    relatedTopics: [TOPIC],
    relatedIssues: [ISSUE],
    primarySourceIds: [SOURCE, FINAL_RULES],
    reformEventId: REFORM,
    reformStageAtPublication: "effective",
    reformStageSourceIds: [FINAL_RULES, SOURCE],
    legacyReformInference: false,
    whatChanged: "テーマ更新／保険仲立人と代理店の協業時の説明・同意、および再保険契約の媒介手数料等が一般の企業保険向け請求方法ルールの対象外となる点を一次資料と実務解説で補強した。"
  };
  const articles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }
})();

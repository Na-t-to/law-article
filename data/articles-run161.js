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

  const additions = [
    {
      id: "article-jftc-toridoll-recommendation-2026",
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-15",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料／取適法・下請法／代金減額・委託事業者認定",
      status: "adopted",
      summary: "トリドールホールディングスが卸売業者を介して37の受注者へ食品製造を委託し、2024年8月から2026年7月まで代金から「システム利用料」名目で一律1.1％を控除した事案について、公正取引委員会が旧下請法・取適法の代金減額禁止違反として勧告した。卸売業者は注文・請求・支払等の事務手続を代行するにすぎず、製品仕様、受注者の選定、代金額を決定していたトリドールホールディングスを委託事業者と認定している。",
      whyImportant: [
        "商社・卸売業者を介する取引でも、製品仕様・受注者選定・代金額を誰が決めているかによって実質的な委託事業者を判定することを具体例で確認できる",
        "システム利用料、管理料、プラットフォーム料などの名目で確定した委託代金から一律控除する運用が、代金減額禁止のリスクになることを示す",
        "2025年12月までの委託には旧下請法、2026年1月以降の委託には取適法を適用し、取適法分には減額額への遅延利息まで求められる移行期の執行例である"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払管理", "事業部門"],
      audienceReason: "仲介業者を挟む発注スキームの適用判定と、委託代金から控除する各種手数料・利用料の監査ポイントを具体的な執行事例から確認するため。",
      categories: ["契約", "独占禁止法・取引適正化", "危機管理・コンプライアンス"],
      relatedTopics: ["fair-subcontract-transactions"],
      relatedIssues: ["toriteki-scope", "toriteki-intermediary-fee-reduction", "toriteki-enforcement"],
      primarySourceIds: ["source-jftc-toridoll-recommendation-2026"]
    },
    {
      id: "article-not-toriteki-amendment-practice-2025",
      title: "中小受託取引適正化法（改正下請法）の成立及び規則案等の公表",
      publisher: "長島・大野・常松法律事務所",
      author: "伊藤伸明・小山遥暉・西島達也",
      publishedAt: "2025-08-05",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20250805-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説／取適法・施行準備（2025年8月時点）",
      status: "adopted",
      summary: "取適法による従業員基準、特定運送委託、一方的な代金決定の禁止、支払条件等の変更を、企業の取引フローへどう落とすかまで整理した解説。特に、受託側従業員数の変動を個別追跡する負担から一律に取適法準拠フローを採用する選択肢、価格を引き上げた場合でも協議対応が不要とは限らない点、振込手数料等の控除見直しなど、一次資料だけでは見えにくい運用上の論点を示す。公表時点では一部下位ルールが案段階であったため、現在の最終ルールは関連一次資料で確認する必要がある。",
      whyImportant: [
        "従業員基準の追加を単なる適用範囲拡大としてではなく、取引先情報の更新方法や全取引を一律に準拠フローへ寄せる運用選択まで具体化している",
        "価格協議について、協議要求への対応・説明だけでなく、従来の買いたたき運用や労務費転嫁指針との関係を整理しており購買実務へ落とし込みやすい",
        "支払手段・振込手数料等を含む経理プロセスの見直しまで一つの取引フローとして把握できる"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払管理", "コンプライアンス"],
      audienceReason: "取適法の条文・運用基準を、自社の取引先管理、価格協議、発注・支払フローへ変換する際の実務設計を確認するため。",
      categories: ["契約", "独占禁止法・取引適正化", "危機管理・コンプライアンス"],
      relatedTopics: ["fair-subcontract-transactions"],
      relatedIssues: ["toriteki-scope", "toriteki-price-consultation", "toriteki-enforcement"],
      primarySourceIds: ["source-toriteki-law-2026", "source-toriteki-operation-2026"]
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "fair-subcontract-transactions");
  if (!topic) return;

  const addUnique = (array, value) => {
    const list = Array.isArray(array) ? array : [];
    if (!list.includes(value)) list.push(value);
    return list;
  };

  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
  topic.sourceIds = addUnique(topic.sourceIds, "source-jftc-toridoll-recommendation-2026");

  topic.currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
  topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "2026年9月9日のトリドールホールディングス勧告では、卸売業者が注文・請求・支払等の事務手続を代行していても、製品仕様・受注者選定・代金額を決定していたトリドールホールディングスが委託事業者と認定された。");
  topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "同勧告では、受注者37名への委託代金から「システム利用料」名目で例外なく一律1.1％を控除した運用が代金減額と認定され、2025年までの旧下請法分と2026年以降の取適法分の返還、取適法分については遅延利息の支払も求められた。");
  topic.currentSummary.interpretations = addUnique(topic.currentSummary.interpretations, "仲介者・商社・卸を挟む取引では、契約や請求の名義だけで適用関係を決めず、仕様、受注者選定、価格決定など製造委託等の実質を誰が支配しているかを確認する必要がある。");
  topic.currentSummary.interpretations = addUnique(topic.currentSummary.interpretations, "システム利用料・管理料・プラットフォーム料等の名目でも、受注者の責めに帰すべき理由なく確定した委託代金から控除する設計は、代金減額禁止の観点から個別に点検する必要がある。");

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "商社・卸売業者を介する発注では、仕様決定、委託先選定、価格決定、注文書発行、請求・支払の各主体を分解し、実質的な委託事業者を判定する。単なる事務代行を挟んだだけで取適法の適用が切れるとは扱わない。");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "支払データを抽出し、システム利用料、管理料、協力金、プラットフォーム料、振込関連費用等が委託代金から自動控除・相殺されていないかを監査する。");

  let issue = (topic.issues || []).find((item) => item.id === "toriteki-intermediary-fee-reduction");
  if (!issue) {
    issue = {
      id: "toriteki-intermediary-fee-reduction",
      title: "仲介業者を介する発注とシステム利用料等の控除をどう評価するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "商社・卸等が間に入っていても、その者が仕様・受注者選定・代金額等に関与せず事務手続を代行するにすぎない場合は、実質的に発注内容を決定する事業者が委託事業者となり得る。中小受託事業者の責めに帰すべき理由なく、確定した製造委託等代金からシステム利用料等を一律に差し引く運用は、代金減額禁止に抵触し得る。",
      exception: "仲介者自身が仕様、委託先選定、価格決定等に実質的に関与する場合や、控除が代金減額ではなく別個の取引として評価される事情がある場合は、契約関係と取引実態を個別に確認する。",
      uncertain: "仲介者の関与度や利用料の対価関係が異なるスキームは個別判断となるため、注文・請求・支払の名義だけで横展開しない。",
      sourceIds: ["source-toriteki-law-2026", "source-toriteki-operation-2026", "source-jftc-toridoll-recommendation-2026"]
    };
    topic.issues = (topic.issues || []).concat([issue]);
  } else {
    issue.sourceIds = addUnique(issue.sourceIds, "source-jftc-toridoll-recommendation-2026");
  }

  ["toriteki-scope", "toriteki-enforcement"].forEach((id) => {
    const existing = (topic.issues || []).find((item) => item.id === id);
    if (existing) existing.sourceIds = addUnique(existing.sourceIds, "source-jftc-toridoll-recommendation-2026");
  });
})();

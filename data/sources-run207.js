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
      id: "source-fsa-public-fund-liquidity-guideline-20260916",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／公募投資信託の流動性リスク管理",
      authority: "金融庁",
      publishedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      importance: "最高",
      whyImportant: "IOSCOの勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理に関する監督指針改正を最終化し、2027年10月1日の適用日を確定した一次資料。",
      topics: ["securities-monitoring-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

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
      id: "source-caa-pionet-door-to-door-analysis-20260917",
      title: "PIO-NETデータを用いた訪問販売等に関する分析調査報告書",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／訪問販売等のPIO-NET分析",
      authority: "消費者庁",
      publishedAt: "2026-09-17",
      url: "https://www.caa.go.jp/notice/assets/consumer_transaction_cms201_260917_01.pdf",
      importance: "高",
      whyImportant: "訪問販売等の相談データを分析し、ネット広告から消費者が訪問を依頼する取引の増加、価格・勧誘・契約書面・解約妨害のトラブル、連鎖販売取引で特定利益が後から示される実態を数量的に示す。特定商取引法等の今後の制度検討に用いる立法事実を確認できる一次資料。",
      topics: ["digital-commerce-tokusho-review", "digital-transactions-scta-review-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const canonicalTopicBySource = new Map([
    ["source-caa-digital-scta-interim-20260910", "digital-commerce-tokusho-review"],
    ["source-egov-digital-scta-interim-comment-20260916", "digital-commerce-tokusho-review"],
    ["source-caa-consumer-contract-interim-20260910", "consumer-contract-law-review-2026"],
    ["source-egov-consumer-contract-interim-comment-20260916", "consumer-contract-law-review-2026"]
  ]);
  for (const source of window.SOURCE_DATA || []) {
    const canonicalTopic = canonicalTopicBySource.get(source?.id);
    if (canonicalTopic) source.topics = appendUnique(source.topics, [canonicalTopic]);
  }
})();

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
      id: "source-meti-scs-policy-20260327",
      title: "サプライチェーン強化に向けたセキュリティ対策評価制度に関する制度構築方針",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／SCS評価制度・制度構築方針",
      authority: "経済産業省・内閣官房国家サイバー統括室",
      publishedAt: "2026-03-27",
      url: "https://www.meti.go.jp/press/2025/03/20260327001/20260327001.html",
      importance: "最高",
      whyImportant: "SCS評価制度の目的・位置付け、★3・★4の要求事項、制度開始目標、取引適正化との接続を最終方針として確認できる基礎一次資料。",
      topics: ["supply-chain-security-scs-2026"]
    },
    {
      id: "source-meti-scs-portal-20260706",
      title: "サプライチェーン強化に向けたセキュリティ対策評価制度（SCS評価制度）",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／SCS評価制度・FAQ",
      authority: "経済産業省",
      publishedAt: "2026-07-06",
      url: "https://www.meti.go.jp/policy/netsecurity/scs.html",
      importance: "高",
      whyImportant: "SCSが任意制度であり★取得自体は法令上の義務ではないこと、★3・★4の開始時期は2026年度末頃を予定していることをFAQで明示する現行案内。",
      topics: ["supply-chain-security-scs-2026"]
    },
    {
      id: "source-ipa-scs-details-20260421",
      title: "SCS評価制度の詳細情報",
      type: "government_material",
      typeLabel: "一次資料・IPA／SCS評価制度・評価スキーム",
      authority: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-04-21",
      url: "https://www.ipa.go.jp/security/scs/details.html",
      importance: "最高",
      whyImportant: "IPAが制度運営主体として、★3の専門家確認付き自己評価、★4の第三者評価・技術検証、運営体制、専門家・評価機関の要件を具体化している。",
      topics: ["supply-chain-security-scs-2026"]
    },
    {
      id: "source-jftc-cyber-partnership-20251226",
      title: "サプライチェーン全体のサイバーセキュリティ向上のための取引先とのパートナーシップの構築に向けた想定事例及び解説",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／セキュリティ対策要請と取適法・独占禁止法",
      authority: "公正取引委員会・経済産業省",
      publishedAt: "2025-12-26",
      url: "https://www.jftc.go.jp/security_jirei.html",
      importance: "最高",
      whyImportant: "発注側が取引先へ組織的なサイバーセキュリティ対策を求める場面について、価格交渉・費用負担と取適法・独占禁止法の関係を想定事例で示す一次資料。",
      topics: ["supply-chain-security-scs-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

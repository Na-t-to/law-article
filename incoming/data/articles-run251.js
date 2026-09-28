(() => {
  if (window.__LAW_INDEX_RUN251_ARTICLE_APPLIED__) return;
  window.__LAW_INDEX_RUN251_ARTICLE_APPLIED__ = true;

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

  const addition = {
    id: "article-jftc-petroleum-price-pass-through-20260925",
    title: "「石油関連製品等の価格転嫁に関する緊急調査」の結果について",
    publisher: "公正取引委員会",
    author: "公正取引委員会",
    publishedAt: "2026-09-25",
    collectedAt: "2026-09-28",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260925_kinkyu_chosa.html",
    sourceType: "primary",
    sourceLabel: "一次資料・価格転嫁緊急調査／独禁法・取適法の執行方針",
    status: "adopted",
    summary: "中東情勢に伴う石油関連製品等の価格高騰を受け、幅広い47業種の価格転嫁を調べた公取委の緊急調査。27,622名の回答等から、協議後に一部でも転嫁できた受注者は51.7％である一方、価格協議をまだ申し出ていない受注者が38.5％存在し、力関係や価格改定時期の商慣習が申出を妨げる事情も確認した。転嫁不受諾時の書面・メールによる理由回答は17.5％にとどまり、サプライチェーン下流ほど転嫁が進みにくい傾向を踏まえ、公取委は独禁法・取適法の執行と立入調査を継続する。",
    whyImportant: [
      "取適法の『適切な協議』を、制度説明だけでなく、受託側が協議を申し出られているか、発注側が理由をどう回答しているかという実際の運用点検へ落とせる",
      "価格転嫁が受け入れられない場合、書面・電子メール等による理由回答が乏しい実態を示しており、価格決定の判断記録と対外回答を社内フローとして設計する根拠になる",
      "一次受注者より二次・三次以降で転嫁が進みにくい傾向と、価格転嫁が円滑でない業種への厳正執行方針が示され、サプライチェーン全体の調達・取引先管理を点検する優先度が上がる"
    ],
    audience: ["企業法務", "購買・調達", "事業部の発注担当", "コンプライアンス", "経理・原価管理"],
    audienceReason: "コスト上昇局面の価格改定について、協議の受付、社内決裁、理由回答、記録保存を独占禁止法・取適法の双方から点検するため。",
    categories: ["契約", "危機管理・コンプライアンス"],
    relatedTopics: ["fair-subcontract-transactions"],
    relatedIssues: ["toriteki-price-consultation", "toriteki-enforcement"],
    primarySourceIds: ["source-jftc-petroleum-price-pass-through-20260925"],
    legacyReformInference: false,
    whatChanged: "テーマ更新／価格協議を申し出づらい事情、不受諾理由の書面回答、サプライチェーン下流での転嫁停滞という2026年9月の実態と、公取委の執行方針を価格協議プロセスへ反映した。"
  };

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = existing.concat(addition);
  }
})();
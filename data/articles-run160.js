(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const consumerSource = (window.SOURCE_DATA || []).find((source) => source && source.id === "source-caa-consumer-contract-interim-draft-2026");
  if (consumerSource) {
    consumerSource.whyImportant = "消費者の多様な脆弱性、継続的契約の解約妨害・更新・変更に加え、解約料について消費者契約法9条1項1号の立証責任等に関するA案・B案と説明制度拡充を示す、2026年9月10日の正式な中間取りまとめ。現時点では検討会の政策文書であり成立法ではない。";
  }

  const consumerArticle = (window.ARTICLE_DATA || []).find((article) => article && article.id === "article-caa-consumer-contract-interim-draft-2026");
  if (consumerArticle) {
    consumerArticle.summary = "消費者庁検討会が2026年9月10日に公表した正式な中間取りまとめ。消費者の多様な脆弱性への配慮、契約拘束力からの解放、継続的契約の解約妨害・更新・変更に加え、解約料について消費者契約法9条1項1号の立証責任等に関するA案・B案と説明制度拡充を示す。制度選択は未確定で、現時点では成立法ではない。";
    consumerArticle.whyImportant = (consumerArticle.whyImportant || []).filter((text) => !String(text || "").includes("9条1項1号自体を今回は見直さず"));
    consumerArticle.whyImportant = addUnique(consumerArticle.whyImportant, "解約料は立証責任等についてA案・B案を併記しており、単純に『立証責任転換を見送った』とは整理できない");
    consumerArticle.whatChanged = "2026年9月10日の正式な中間取りまとめを再確認し、解約料についてA案・B案が併記されている点を反映して、従来の『9条1項1号自体を見直さない』という粗い整理を修正した。";
  }

  const digitalArticle = (window.ARTICLE_DATA || []).find((article) => article && article.id === "article-caa-digital-tokusho-interim-2026");
  if (digitalArticle) {
    digitalArticle.relatedIssues = addUnique(digitalArticle.relatedIssues, "dt-rescue-inspection-sales");
    digitalArticle.summary = "消費者庁検討会が2026年9月10日に公表した正式な中間取りまとめ。SNS・メール等のチャット勧誘、表示・UIによる意思決定誘導、契約内容の電子的提供・保存、解約導線、デジタルプラットフォームの役割に加え、レスキュー商法・点検商法等の訪問型取引への規律強化を示す。現時点で新たな規律が成立・施行したものではない。";
    digitalArticle.whyImportant = addUnique(digitalArticle.whyImportant, "レスキュー商法・点検商法について、低価格表示と現場価格の著しい乖離、意思確認前の作業着手、クーリング・オフ妨害等を具体的な規制候補として追える");
    digitalArticle.whatChanged = "正式な中間取りまとめの内容を再確認し、レスキュー商法・点検商法の訪問型取引規律を独立論点として接続した。";
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
      id: "article-sesc-ecomic-market-manipulation-2026",
      title: "エコミック株式に係る相場操縦に対する課徴金納付命令の勧告について",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260915-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料／金融商品取引法・相場操縦／課徴金勧告",
      status: "adopted",
      summary: "エコミック株式について、2024年5月30日から6月12日までの10取引日に、自己の買い注文に売り注文を対当させる行為、成行・直前約定値より高い指値での買上がり、買い注文の重層的発注等を組み合わせた一連の売買・委託を行ったとして、証券取引等監視委員会が金商法159条2項1号違反を認定し、76万円の課徴金納付命令を勧告した事案。",
      whyImportant: [
        "対当売買、買上がり、重層注文という複数の売買形態が一連の相場操縦として評価された最新の具体例を確認できる",
        "単一注文ではなく10取引日の売買・委託全体を見て、売買が繁盛であるとの誤解と相場変動を生じさせる行為を認定している",
        "日本取引所自主規制法人からの情報提供を参考に実態解明したことが明記されており、取引所の売買審査と証券監視委の執行が接続していることを確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "証券・運用会社", "売買管理部門"],
      audienceReason: "相場操縦アラートの対象となる具体的な注文・売買形態と、複数日を通じた一連取引としての評価方法を最新の執行例から確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["market-manipulation-trading-controls"],
      relatedIssues: ["market-manipulation-prohibited-patterns", "market-manipulation-surveillance-response"],
      primarySourceIds: ["source-sesc-ecomic-market-manipulation-2026"],
      whatChanged: "新テーマ追加／対当売買・買上がり・重層注文を組み合わせた最新の相場操縦勧告を、売買パターンと監視連携の基準例として追加した。"
    },
    {
      id: "article-sesc-unfair-trading-casebook-2026",
      title: "金融商品取引法における課徴金事例集～不公正取引編～（令和7年度版）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-06-23",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/sesc/jirei/torichou/20260623.html",
      sourceType: "primary",
      sourceLabel: "一次資料／金融商品取引法・不公正取引／課徴金事例集",
      status: "adopted",
      summary: "証券取引等監視委員会が、主に2025年4月から2026年3月までの間に課徴金納付命令の勧告を行ったインサイダー取引・相場操縦等の不公正取引を分析した令和7年度版事例集。市場関係者の自己規律、市場の公正性・透明性、投資者保護の観点から、個別事案を横断して執行上の着眼点を確認できる。",
      whyImportant: [
        "単発の勧告だけでなく、年度を通じた不公正取引の執行事例を横断的に確認できる",
        "相場操縦・インサイダー取引の未然防止と市場関係者の自己規律強化を明示的な目的としており、内部管理・研修の基礎資料に使いやすい",
        "今後の個別勧告を評価する際に、過去事案との共通点や監視委の継続的な問題意識を比較する基準点になる"
      ],
      audience: ["企業法務", "コンプライアンス", "証券・運用会社", "内部監査"],
      audienceReason: "不公正取引の年間執行傾向と再発防止上の着眼点を横断的に把握し、売買管理ルールや研修へ反映するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["market-manipulation-trading-controls"],
      relatedIssues: ["market-manipulation-prohibited-patterns", "market-manipulation-surveillance-response"],
      primarySourceIds: ["source-sesc-unfair-trading-casebook-2026"],
      whatChanged: "新テーマ追加／直近年度の課徴金事例を横断する一次資料を、相場操縦の売買管理・再発防止を読む基礎資料として追加した。"
    },
    {
      id: "article-miura-closing-price-market-manipulation-2025",
      title: "危機管理INSIGHTS Vol.24：引値保証取引と相場操縦",
      publisher: "三浦法律事務所",
      author: "山口亮子",
      publishedAt: "2025-07-02",
      collectedAt: "2026-09-16",
      url: "https://note.com/miuraandpartners/n/n370301afbe36",
      sourceType: "secondary",
      sourceLabel: "実務解説／相場操縦・誘引目的／終値形成・引値保証取引",
      status: "adopted",
      summary: "2018年の日東電工株式の相場操縦に対する課徴金納付命令をめぐる2025年6月27日の東京地裁判決を解説し、誘引目的の意義と判断要素、実需・経済合理性との関係、終値直前の大量買付け、当時の自主規制ガイドライン・社内ルールを具体的に整理する。現実の売買需要や行為者にとって合理的な執行方法であることだけでは誘引目的が直ちに否定されないとした判示を、売買執行の管理へ落とし込める。",
      whyImportant: [
        "誘引目的を抽象論ではなく、取引の時期・数量・価格・方法、前後事情、動機・認識をどう総合評価するかまで具体化している",
        "実需があり経済合理性のある執行でも市場の公正な価格形成を害し得るという点を、指数構成銘柄入替えと引値保証取引の事案から理解できる",
        "立会終了前15分のヘッジ数量、買上がり、終値形成への関与など、社内売買管理ルールで見るべき具体的な観点を示している"
      ],
      audience: ["企業法務", "証券・運用会社", "コンプライアンス", "トレーディング・売買管理"],
      audienceReason: "相場操縦の誘引目的を判断する際に、正当な取引需要や合理的執行と市場への影響をどう切り分けるかを、判決と自主規制実務の双方から確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["market-manipulation-trading-controls"],
      relatedIssues: ["market-manipulation-inducement-purpose", "market-manipulation-surveillance-response"],
      primarySourceIds: ["source-fsa-nitto-market-manipulation-order-2018", "source-jpx-market-manipulation-guide"],
      whatChanged: "新テーマ追加／相場操縦の誘引目的について、実需・経済合理性だけでは否定されないという2025年東京地裁判決の実務的な判断要素を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

(() => {
  const ARTICLE_ID = "article-businesslawyers-mhm-early-business-recovery-20260917";
  const TOPIC = "early-business-recovery";
  const REFORM_EVENT = "early-business-recovery-act-2025";
  const PRIMARY_SOURCE = "source-meti-early-business-recovery-rules-2026";

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

  const article = {
    id: ARTICLE_ID,
    title: "早期事業再生法の概要とポイント",
    publisher: "BUSINESS LAWYERS",
    author: "山口 みどり",
    publishedAt: "2026-09-17",
    collectedAt: "2026-09-23",
    url: "https://www.businesslawyers.jp/articles/1484",
    sourceType: "secondary",
    sourceLabel: "法律事務所・施行準備／早期事業再生法",
    status: "adopted",
    summary: "2026年12月11日施行の早期事業再生法について、2026年6月30日に公布された施行規則・資産評定基準と経済産業省Q&Aまで踏まえ、対象事業者・対象債権、指定確認調査機関による確認・一時停止、権利変更議案と早期事業再生計画、労働組合等への通知・協議、対象債権者集会の多数決、裁判所の認可、先行する私的整理からの移行、プレDIPファイナンス等を一連の手続として整理する。全員同意が得られない金融債務調整に多数決と裁判所認可を導入する制度について、施行準備段階で確認すべき実務上の条件を具体化した解説。",
    whyImportant: [
      "法案段階の概説ではなく、施行規則・資産評定基準・経済産業省Q&Aまで反映した施行直前の実務解説として、手続開始から権利変更の効力発生までを通して確認できる",
      "対象債権の範囲、弁済禁止とその例外、議決権総額4分の3以上の多数決、裁判所の不認可事由・一般の利益（清算価値保障）など、債務者・金融債権者双方の意思決定に直結する論点を条文・Q&A単位で追える",
      "先行する準則型私的整理からの移行、プレDIPファイナンス、雇用への影響が見込まれる場合の労働組合等への通知・協議まで扱い、再生計画を財務・法務・労務横断で設計する視点を得られる",
      "執筆者が経済産業省で早期事業再生法の立案業務に従事した経歴を持ち、公式一次資料だけでは把握しにくい制度間のつながりを実務向けに整理している"
    ],
    audience: ["企業法務", "財務・経営企画", "事業再生担当", "金融機関・債権管理担当", "経営者"],
    audienceReason: "2026年12月11日の施行に向け、早期事業再生法を利用する側・金融債権者側の双方から、対象債権、手続開始、計画作成、多数決、裁判所認可、先行私的整理や資金繰りとの接続を実務フローとして確認するため。",
    categories: ["事業再生・倒産", "金融", "契約"],
    relatedTopics: [TOPIC],
    relatedIssues: [
      "early-recovery-commencement",
      "early-recovery-plan-vote",
      "early-recovery-court-approval",
      "early-recovery-opposition",
      "early-recovery-finance-governance"
    ],
    primarySourceIds: [PRIMARY_SOURCE],
    reformEventId: REFORM_EVENT,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [PRIMARY_SOURCE],
    legacyReformInference: false,
    whatChanged: "整理変更なし／施行規則・資産評定基準・経済産業省Q&Aまで踏まえ、早期事業再生法の対象債権、多数決、裁判所認可、先行私的整理・プレDIPファイナンス等を一連の手続として整理する施行準備解説を追加。"
  };

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat(article);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  const articleExists = (window.ARTICLE_DATA || []).some((item) => item && item.id === ARTICLE_ID);
  if (topic && articleExists) {
    topic.lastVerified = "2026-09-23";
  }
})();

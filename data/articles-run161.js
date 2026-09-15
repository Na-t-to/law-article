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

  const article = {
    id: "article-not-early-business-restructuring-20260911",
    title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
    publisher: "長島・大野・常松法律事務所",
    author: "鐘ヶ江洋祐・髙野紘輝",
    publishedAt: "2026-09-11",
    collectedAt: "2026-09-15",
    url: "https://www.nagashima.com/publications/publication20260911-1/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／早期事業再生法・対象債権者／対象債権",
    status: "adopted",
    summary: "最終的な施行規則・告示・Q&Aを踏まえ、早期事業再生手続の多数決・裁判所認可、指定確認調査機関、非公開性に加え、担保付債権、ファイナンス・リース、信用保証協会付き融資、外国金融機関等の扱いを債権者・債務者双方の観点から整理した実務解説。",
    whyImportant: [
      "対象債権に含まれることと、多数決による権利変更の対象となる非保全債権部分を分けて理解できる",
      "担保付債権について、担保評価と保全・非保全部分の切り分けが議決権・弁済額にどう関係するかを具体化している",
      "ファイナンス・リース債権や信用保証協会付き融資など、一般的な制度概要だけでは判断しにくい債権類型を実務目線で整理している",
      "非公開型の手続でも上場会社は適時開示との関係に留意が必要であることを明示している"
    ],
    audience: ["企業法務", "財務・経営企画", "金融機関・債権管理", "リース会社", "事業再生担当"],
    audienceReason: "早期事業再生手続への参加・利用時に、対象債権の範囲、担保評価、議決権、保証・リース、開示まで実務上の論点を具体化するため。",
    categories: ["契約", "会社法・ガバナンス", "事業再生・金融"],
    relatedTopics: ["early-business-recovery"],
    relatedIssues: ["ebr-financial-claims", "ebr-voting-court", "ebr-confidentiality-disclosure"],
    primarySourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-recovery-rules-2026"],
    reformEventId: "early-business-recovery-act-2025",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-early-business-rehabilitation-act-2025"],
    whatChanged: "論点精緻化／担保付債権、ファイナンス・リース、保証協会付き融資等について、対象債権性と多数決で変更できる範囲を分け、非公開手続と上場会社の適時開示を別論点として整理した。"
  };

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([article]);
  }
})();

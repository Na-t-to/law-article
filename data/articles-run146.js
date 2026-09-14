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

  const articles = [
    {
      id: "article-not-early-business-rehabilitation-2026-09",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江 洋祐・髙野 紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／早期事業再生法・施行対応",
      status: "adopted",
      summary: "施行規則・告示・Q&Aまで反映して早期事業再生手続の全体像を整理する最新実務解説。多数決と裁判所認可による非保全債権の権利変更、指定確認調査機関の役割、担保付債権、ファイナンス・リース、保証協会付き融資、外国金融機関、プレDIPファイナンスまで、債務者・対象債権者双方が施行前に確認すべき論点を具体化している。",
      whyImportant: [
        "2026年6月30日の最終施行規則・告示・Q&Aを織り込んだ施行直前の包括的な実務整理である",
        "非保全債権のみが多数決による権利変更対象となることと、保全債権も対象債権者通知等の対象となることを区別している",
        "ファイナンス・リース、保証協会付き融資、外国金融機関等について、対象債権者・議決権・例外弁済を具体的に説明している",
        "プレDIPファイナンスと事業再生ADR等からの移行を含め、制度選択と資金繰りを一体で考えられる"
      ],
      audience: ["企業法務", "事業再生担当", "財務・経営企画", "金融機関", "リース会社", "信用保証協会"],
      audienceReason: "施行直前の最終ルールを、債務者・金融債権者双方の実務フローへ落とし込むため。",
      categories: ["事業再生・金融", "契約"],
      relatedTopics: ["early-business-recovery"],
      relatedIssues: ["ebr-eligibility", "ebr-financial-claims", "ebr-voting-court", "ebr-process", "ebr-predip-followon"],
      primarySourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-recovery-rules-2026", "source-fsa-early-business-rehabilitation-financial-rules-2026"],
      reformEventId: "early-business-recovery-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-meti-early-business-recovery-rules-2026"],
      legacyReformInference: false,
      whatChanged: "既存テーマ補完／最終施行規則・告示・Q&Aを踏まえ、非保全債権、多数決、担保・リース・保証・外国金融機関、プレDIPまで施行対応を具体化した。"
    },
    {
      id: "article-amt-early-business-rehabilitation-report-2026-04",
      title: "経産省、早期事業再生法の施行に向けて「取りまとめ」を公表",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "四十山 千代子",
      publishedAt: "2026-04-17",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260417001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／早期事業再生法・制度設計",
      status: "adopted",
      summary: "経済産業省ワーキンググループの最終取りまとめを起点に、早期事業再生法の権利変更、議決権、対象債権、ファイナンス・リース債権、プレDIPファイナンスの保護を整理する。施行規則・Q&A公表前の制度形成過程を追うことで、最終ルールで重点化された論点の背景を理解できる。",
      whyImportant: [
        "権利変更・議決権・対象債権を別々に整理しており、多数決型手続の設計思想を把握しやすい",
        "ファイナンス・リース債権を独立論点として扱い、従来の私的整理との差分を理解できる",
        "プレDIPファイナンスの保護を取り上げ、早期再生に必要な新規資金供給と後続手続の関係を確認できる"
      ],
      audience: ["企業法務", "事業再生担当", "金融機関", "リース会社", "ファイナンス担当"],
      audienceReason: "最終ルールの前提となった制度設計上の論点と、金融実務への影響を理解するため。",
      categories: ["事業再生・金融", "契約"],
      relatedTopics: ["early-business-recovery"],
      relatedIssues: ["ebr-financial-claims", "ebr-voting-court", "ebr-predip-followon"],
      primarySourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-working-group-report-2026"],
      reformEventId: "early-business-recovery-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-early-business-rehabilitation-act-2025"],
      legacyReformInference: false,
      whatChanged: "既存テーマ補完／制度形成過程から権利変更、議決権、対象債権、ファイナンス・リース、プレDIPファイナンスの論点を補完した。"
    },
    {
      id: "article-amt-early-business-rehabilitation-finance-lease-2026-02",
      title: "早期事業再生手続における対象債権にファイナンス・リース債権を含めることとなった場合の諸論点",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "中山 孝雄・四十山 千代子・長谷川 稔洋",
      publishedAt: "2026-02-16",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260216002_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／早期事業再生法・ファイナンスリース",
      status: "adopted",
      summary: "早期事業再生手続の対象債権にファイナンス・リース債権を含める制度設計を専門的に検討する。ファイナンス・リース契約の定義、対象債権該当性、リース資産の資産評定、対象債権者への通知漏れ、対象外リース債権者を誤って取り込んだ場合の決議・認可への影響まで掘り下げる。",
      whyImportant: [
        "『リース』という名称ではなく、中途解約禁止・フルペイアウト等を踏まえた対象債権該当性の判断問題を具体化している",
        "リース資産の資産評定と非保全額・議決権の関係を扱い、金融機関貸付とは異なる難所を明示している",
        "通知漏れや誤分類が権利変更決議・認可・不服申立てへ及ぼす影響をケース別に整理している"
      ],
      audience: ["企業法務", "事業再生担当", "リース会社", "金融機関", "財務担当"],
      audienceReason: "ファイナンス・リースが対象債権に含まれる場合の契約判定、資産評価、通知・議決権管理を施行前に具体化するため。",
      categories: ["事業再生・金融", "契約"],
      relatedTopics: ["early-business-recovery"],
      relatedIssues: ["ebr-financial-claims", "ebr-voting-court"],
      primarySourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-working-group-report-2026"],
      reformEventId: "early-business-recovery-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-early-business-rehabilitation-act-2025"],
      legacyReformInference: false,
      whatChanged: "既存テーマ補完／ファイナンス・リースの対象債権該当性、資産評定、通知漏れ・誤分類が決議や認可へ与える影響を専門的に補完した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

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
      id: "article-meti-early-business-rehabilitation-rules-qa-2026",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-06-30",
      collectedAt: "2026-09-16",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      sourceType: "primary",
      sourceLabel: "一次資料／早期事業再生法・施行規則・Q&A",
      status: "adopted",
      summary: "2026年12月11日の早期事業再生法施行に向け、経済産業省が施行規則・資産評定基準の告示を最終化し、利用対象となる債務者、対象債権者・対象債権、手続、一時停止、計画、プレDIPファイナンス等を扱う178項目のQ&Aを公表した。",
      whyImportant: [
        "法律成立後の検討を経て、施行時点で使う規則・告示・Q&Aが揃った基準資料である",
        "金融機関だけでなくファイナンス・リース債権者や信用保証協会等を含む対象債権者・対象債権の実務を確認できる",
        "2026年12月11日の施行日を一次資料で確定し、成立・施行待ちの段階を正しく管理できる"
      ],
      audience: ["事業再生", "金融機関", "法務", "財務", "リース・保証"],
      audienceReason: "制度利用・債権者対応・担保評価・資金繰りの準備を、施行規則とQ&Aに基づいて進めるため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["early-business-rehabilitation-2025"],
      relatedIssues: ["early-business-rehabilitation-procedure-framework", "early-business-rehabilitation-secured-claims", "early-business-rehabilitation-finance-lease", "early-business-rehabilitation-predip"],
      primarySourceIds: ["source-egov-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026", "source-meti-early-business-rehabilitation-qa-2026"],
      reformEventId: "early-business-rehabilitation-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-meti-early-business-rehabilitation-rules-qa-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年12月11日施行の多数決型・金融債務限定の早期事業再生手続を、最終規則・Q&Aまで含めて整理した。"
    },
    {
      id: "article-not-early-business-rehabilitation-2026",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐・髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-16",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所解説／早期事業再生法・対象債権者実務",
      status: "adopted",
      summary: "施行規則・告示・178項目のQ&Aまで踏まえ、早期事業再生手続を法的整理でも全員同意型私的整理でもない『第三の手続』として整理し、対象債権者、非保全債権、担保、ファイナンス・リース、信用保証協会、外国金融機関、プレDIPファイナンス等の実務上の重要点を具体化する。",
      whyImportant: [
        "一次資料の条文順では見えにくい、債務者・金融機関・リース会社・保証協会それぞれの対応論点を手続の流れに沿って整理している",
        "担保付債権者は対象債権者に含まれ得る一方で権利変更は非保全部分が中心という区別を実務的に説明している",
        "ファイナンス・リースやプレDIPファイナンスなど、施行前に契約・与信管理へ落とし込む必要がある論点を最終規則・Q&Aベースで確認できる"
      ],
      audience: ["事業再生", "銀行・金融機関", "リース会社", "信用保証協会", "企業法務・財務"],
      audienceReason: "手続参加者ごとの権利・判断ポイントを、最終的な制度設計に即して具体的に準備するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["early-business-rehabilitation-2025"],
      relatedIssues: ["early-business-rehabilitation-procedure-framework", "early-business-rehabilitation-secured-claims", "early-business-rehabilitation-finance-lease", "early-business-rehabilitation-predip"],
      primarySourceIds: ["source-egov-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026", "source-meti-early-business-rehabilitation-qa-2026"],
      reformEventId: "early-business-rehabilitation-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-meti-early-business-rehabilitation-rules-qa-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／対象債権者・担保・リース・プレDIPを、施行前の契約・与信実務へ落とし込む参考解説を追加した。"
    },
    {
      id: "article-fsa-growth-company-cross-border-lending-wg-2026",
      title: "成長企業への資金供給の在り方等に関するワーキング・グループ（第1回）―事業者向け貸付け・クロスボーダー融資の規制柔構造化",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/seityousikin_wg/gijishidai/20260916.html",
      sourceType: "primary",
      sourceLabel: "一次資料／成長企業向け融資・貸金業規制見直し",
      status: "adopted",
      summary: "金融審議会の新WG第1回。日本成長戦略を踏まえた資金供給主体の多様化と事業者向け貸付けに係る貸金業規制の柔構造化を検討し、国内拠点を持たない外国金融機関等が一定の大企業等向けシンジケートローンへ参加する場合の貸金業登録要件等を具体的な論点として提示した。",
      whyImportant: [
        "成長企業向け資金供給について、エクイティだけでなく融資側の規制見直しが正式な金融審議会の検討テーマになった",
        "現行法上の外国銀行支店免許・貸金業登録を前提に、人的・財産的要件、3年更新、債権譲受規制等のどこを柔構造化するかが具体化した",
        "現段階は規制緩和案の検討であり、外国金融機関の無登録融資が解禁されたわけではないことを区別できる"
      ],
      audience: ["金融機関", "企業財務", "金融法務", "シンジケートローン", "海外金融機関"],
      audienceReason: "クロスボーダー融資の組成・参加要件と貸金業登録の将来変更を、現行法と提案段階を分けて追うため。",
      categories: ["契約・取引", "金融商品取引・開示・IR", "国際取引"],
      relatedTopics: ["enterprise-value-security-business-lending"],
      relatedIssues: ["growth-company-cross-border-lending-review-2026"],
      primarySourceIds: ["source-fsa-growth-company-funding-consultation-2026", "source-fsa-growth-company-cross-border-lending-2026"],
      reformEventId: "money-lending-growth-company-cross-border-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-fsa-growth-company-funding-consultation-2026", "source-fsa-growth-company-cross-border-lending-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／事業性融資の論点に、外国金融機関等による成長企業向けクロスボーダー融資と貸金業規制の柔構造化検討を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

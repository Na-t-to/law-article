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
      id: "article-meti-early-business-restructuring-qa-2026",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-06-30",
      collectedAt: "2026-09-15",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      sourceType: "primary",
      sourceLabel: "一次資料／早期事業再生法・施行規則／Q&A",
      status: "adopted",
      summary: "2026年12月11日の早期事業再生法施行に向け、施行規則と資産評定基準を公布し、制度の利用対象となる債務者、対象債権者・債権、指定確認調査機関、一時停止要請等について法令解釈を整理したQ&Aを公表した経済産業省の公式資料。",
      whyImportant: [
        "新制度を利用できる債務者と、手続の対象となる金融機関等・貸付債権等の範囲を施行前に確認できる",
        "指定確認調査機関の確認・調査、一時停止要請、労働組合等への通知、債務者に係る特例まで実務フローを追える",
        "担保評価の基礎となる資産評定基準と、対象債権者・債権を詳細化するQ&Aが一体で公表されている",
        "2026年12月11日の施行に向け、債務者側・金融債権者側の準備項目を一次資料から整理できる"
      ],
      audience: ["企業法務", "財務・経営企画", "金融機関", "事業再生担当", "M&A担当"],
      audienceReason: "新しい多数決型の事業再生手続について、自社が利用・参加する場合の対象性、必要資料、担保評価、手続フローを一次資料で確認するため。",
      categories: ["契約・取引", "M&A"],
      relatedTopics: ["early-business-restructuring-act-2026"],
      relatedIssues: ["early-restructuring-eligibility-and-process", "early-restructuring-voting-and-court-approval", "early-restructuring-target-creditors-and-claims"],
      primarySourceIds: ["source-meti-early-business-restructuring-qa-2026", "source-egov-early-business-restructuring-act"],
      reformEventId: "early-business-restructuring-act-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-early-business-restructuring-act"],
      whatChanged: "新規テーマ作成／2026年12月11日施行の早期事業再生法について、利用要件、多数決・裁判所認可、対象債権者・債権を施行規則・Q&Aと接続して整理した。"
    },
    {
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
      audience: ["企業法務", "財務・経営企画", "金融機関", "リース会社", "事業再生担当"],
      audienceReason: "早期事業再生手続への参加・利用時に、対象債権の範囲、担保評価、議決権、保証・リース、開示まで実務上の論点を具体化するため。",
      categories: ["契約・取引", "M&A"],
      relatedTopics: ["early-business-restructuring-act-2026"],
      relatedIssues: ["early-restructuring-voting-and-court-approval", "early-restructuring-target-creditors-and-claims", "early-restructuring-confidentiality-and-disclosure"],
      primarySourceIds: ["source-meti-early-business-restructuring-qa-2026", "source-egov-early-business-restructuring-act"],
      reformEventId: "early-business-restructuring-act-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-early-business-restructuring-act"],
      whatChanged: "実務解説補完／担保付債権、ファイナンス・リース、保証協会付き融資等について、対象債権性と多数決で変更できる範囲を分けて整理した。"
    },
    {
      id: "article-moj-security-assignment-act-2025",
      title: "『譲渡担保契約及び所有権留保契約に関する法律』（譲渡担保法）について",
      publisher: "法務省",
      author: "法務省民事局",
      publishedAt: "2025-06-16",
      collectedAt: "2026-09-15",
      url: "https://www.moj.go.jp/MINJI/minji07_00371.html",
      sourceType: "primary",
      sourceLabel: "一次資料／譲渡担保法・所有権留保法制",
      status: "adopted",
      summary: "2025年に成立・公布された譲渡担保法と整備法について、動産・債権等の譲渡担保・所有権留保の効力、実行、破産手続等での取扱いを成文化し、動産・債権譲渡登記制度等を見直す制度趣旨と関連資料をまとめた法務省の公式ページ。",
      whyImportant: [
        "判例・実務で形成されてきた譲渡担保・所有権留保のルールが、新法でどの範囲まで成文化されるかを公式資料から確認できる",
        "整備法による動産・債権譲渡登記制度の見直しまで含め、契約だけでなく公示・対抗要件の準備へつなげられる",
        "主要規定がまだ施行前で、具体的な施行日は政令待ちであることを確認できる",
        "法務省が随時更新する概要・パンフレット等の公式入口として、施行準備の基準資料になる"
      ],
      audience: ["企業法務", "金融法務", "財務", "融資・審査担当", "債権管理担当"],
      audienceReason: "ABL、在庫・機械・売掛債権担保、所有権留保取引の契約・公示・実行ルールが変わるため、施行前に既存実務との差分を把握するため。",
      categories: ["契約・取引"],
      relatedTopics: ["security-assignment-retention-title-act"],
      relatedIssues: ["security-assignment-new-statutory-framework", "security-assignment-effective-date-preparation"],
      primarySourceIds: ["source-moj-security-assignment-act-2025", "source-egov-security-assignment-act-2025"],
      reformEventId: "security-assignment-retention-title-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-security-assignment-act-2025"],
      whatChanged: "新規テーマ作成／譲渡担保・所有権留保の効力・実行・倒産時取扱いを成文化する新法と、関連する登記制度見直しを施行前ルールとして整理した。"
    },
    {
      id: "article-not-security-assignment-transition-20260715",
      title: "譲渡担保契約及び所有権留保契約に関する法律の経過措置と施行前に締結される譲渡担保契約に関する留意点",
      publisher: "長島・大野・常松法律事務所",
      author: "松尾博憲・淺野航平",
      publishedAt: "2026-07-15",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260715-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／譲渡担保法・経過措置",
      status: "adopted",
      summary: "譲渡担保法の施行前に締結済み・締結予定の譲渡担保契約について、新法が原則として施行前契約にも適用されることと、対抗要件・順位等に置かれた個別の経過措置を踏まえ、施行前の契約設計で留意すべき点を整理した実務解説。",
      whyImportant: [
        "『新法施行後に締結する契約だけを直せばよい』という誤解を避け、既存契約も棚卸し対象になることを把握できる",
        "施行前に既に生じた効力を維持する原則と、対抗要件・順位等の個別経過措置を分けて読める",
        "施行日前に新規締結・更新する譲渡担保契約について、将来の新法適用を見越した設計が必要な理由を具体化している",
        "施行日がまだ政令で確定していない段階でも先行してできる契約・担保台帳の準備を考える材料になる"
      ],
      audience: ["企業法務", "金融法務", "融資・審査担当", "債権管理担当", "契約管理担当"],
      audienceReason: "既存の譲渡担保契約・所有権留保取引と施行前に締結する新規契約について、経過措置を踏まえた改訂・公示対応を準備するため。",
      categories: ["契約・取引"],
      relatedTopics: ["security-assignment-retention-title-act"],
      relatedIssues: ["security-assignment-transition-pre-effective-contracts", "security-assignment-effective-date-preparation"],
      primarySourceIds: ["source-moj-security-assignment-act-2025", "source-egov-security-assignment-act-2025"],
      reformEventId: "security-assignment-retention-title-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-security-assignment-act-2025"],
      whatChanged: "実務解説補完／施行前契約にも原則適用される新法と個別経過措置を分け、既存契約・施行前契約の棚卸し論点を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((article) => !existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url)));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions);
})();

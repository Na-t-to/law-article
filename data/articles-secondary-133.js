(() => {
  const normalizeUrl = (value) => String(value || "")
    .trim()
    .replace(/#.*$/, "")
    .replace(/[?&](utm_[^=&]+|fbclid|gclid)=[^&]*/gi, "")
    .replace(/[?&]$/, "")
    .replace(/\/$/, "");

  const articles = [
    {
      id: "article-not-cg-code-2026-revision",
      title: "2026年コーポレートガバナンス・コードの改訂",
      publisher: "長島・大野・常松法律事務所",
      author: "田勢華也子、加藤綾夏",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-14",
      url: "https://www.nagashima.com/publications/publication20260827-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／2026年コーポレートガバナンス・コード",
      status: "adopted",
      summary: "2026年7月21日公表の改訂コーポレートガバナンス・コードについて、補充原則の廃止、基本原則・原則への規範集約、解釈指針の位置付けを整理したうえで、成長投資、取締役会の機能強化、有価証券報告書の株主総会前開示を中心に実務対応を解説する。形式的なコンプライではなく、自社の状況に即した原則の趣旨・精神の実践と丁寧なエクスプレイン、2027年7月末までのコーポレート・ガバナンス報告書への反映までを一連の移行実務として把握できる。",
      whyImportant: [
        "改訂版コードのプリンシプルベース化・スリム化を、チェックボックス型の対応ではなく自社のガバナンス実態と説明責任の見直しとして整理している",
        "成長投資、取締役会の機能強化、総会前開示という主要改訂を、資本配分・取締役会運営・株主の議決権行使環境という実務単位へ落としている",
        "2026年6月総会の有価証券報告書前倒し状況や会社法制見直しとの関係も示しており、2027年のCG報告書更新までの移行作業を設計しやすい"
      ],
      audience: ["企業法務", "コーポレート・ガバナンス担当", "IR・開示担当", "取締役会事務局"],
      audienceReason: "改訂版コードを条文対照だけで終わらせず、取締役会運営、資本配分、総会前開示、CG報告書の説明へつなげて移行対応を組み立てるため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: [
        "cg-code-principles-explain",
        "cg-code-growth-investment",
        "cg-code-board-function",
        "cg-code-pre-agm-disclosure",
        "cg-code-reporting-transition"
      ],
      primarySourceIds: ["source-jpx-cg-code-2026", "source-fsa-cg-code-2026"],
      reformEventId: "corporate-governance-code-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jpx-cg-code-2026", "source-fsa-cg-code-2026"],
      whatChanged: "バックフィル／2026年改訂CGコードを、プリンシプルベース化、成長投資、取締役会、総会前開示、2027年CG報告書更新まで一体で読む実務解説を追加した。"
    },
    {
      id: "article-tmi-child-sexual-violence-protected-scope-2026",
      title: "［連載］こども性暴力防止法　基礎解説（第2回） ―こども性暴力防止法の保護・防止の対象―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-05-21",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18370.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／こども性暴力防止法・保護対象／防止対象",
      status: "adopted",
      summary: "2026年12月25日施行のこども性暴力防止法について、法が保護する「児童等」と、対象事業者が把握・対応・防止措置を講じる対象となる「児童対象性暴力等」や不適切な行為の範囲を、施行ガイドラインを踏まえて整理する。対象事業・対象業務の判定だけでは見落としやすい、誰を何から保護する制度なのかという運用の入口を明確にし、相談・早期把握・研修・服務規律等へ接続する際の共通定義として使える。",
      whyImportant: [
        "保護対象となる児童等の範囲と、防止措置の対象となる行為類型を分けて整理しており、制度の対象範囲を職種だけで捉える誤りを避けられる",
        "児童対象性暴力等を、対象事業者に求められる把握、疑いへの対応、おそれがある場合の防止措置と結び付けて読める",
        "相談受付、研修、就業規則・服務規律、現場の初動基準を作る際に、公式ガイドラインの定義を実務フローへ落とし込む補助になる"
      ],
      audience: ["企業法務", "人事・労務", "学校法人・教育／保育事業者", "コンプライアンス担当"],
      audienceReason: "施行前に、保護対象者と防止対象行為の定義を相談・報告・研修・就業規則等の運用基準へ正確に反映するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-covered-business-work", "dbs-prevention-employment"],
      primarySourceIds: [
        "source-cfa-child-sexual-violence-guideline-2026",
        "source-cfa-child-sexual-violence-qa-2026"
      ],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [
        "source-cfa-child-sexual-violence-guideline-2026",
        "source-cfa-child-sexual-violence-qa-2026"
      ],
      whatChanged: "バックフィル／こども性暴力防止法の保護対象者と防止対象行為を、施行前の相談・研修・服務規律等へ接続する実務解説を追加した。"
    }
  ];

  const current = window.ARTICLE_DATA || [];
  const existingIds = new Set(current.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = current.concat(additions);
})();
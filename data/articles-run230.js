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
      id: "article-amt-startup-capital-fiea-20260918",
      title: "Expanding Capital-Raising Options for Startups: Japan’s 2026 Financial Instruments and Exchange Act Reform",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "野原新平、原田寛司、玉野志門",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260918001_en_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・アンダーソン・毛利・友常／2026年金商法改正・スタートアップ資金調達",
      status: "adopted",
      summary: "2026年金融商品取引法改正のうちスタートアップへの成長資金供給に焦点を当て、一般投資家向け募集の開示基準、特定投資家向け私募の勧誘対象、株式・ストックオプション報酬の開示規制という三つの変更を改正前後で整理する実務解説。2027年4月1日の施行を前提に、資金調達コストと調達手段の選択肢がどう変わるかを具体的に示している。",
      whyImportant: [
        "一般投資家向け募集について、届出免除が5億円未満へ拡大され、5億円以上10億円未満に簡易開示の段階が設けられるという改正前後の差分を一度に把握できる",
        "特定投資家となり得る一定の法人・個人を私募の勧誘対象へ広げることで、スタートアップが5億円超の資金調達を行う際の選択肢がどう増えるかを説明している",
        "役職員への株式・ストックオプション付与の一部を募集から外す見直しを、人材採用・インセンティブ設計の実務に結び付けている"
      ],
      audience: ["スタートアップ法務", "CFO・財務", "経営企画", "証券・キャピタルマーケッツ担当", "VC・投資担当"],
      audienceReason: "2027年4月1日以降のエクイティファイナンス、私募、株式報酬について、改正前後の開示負担と使える資金調達手段を早期に設計するため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      relatedIssues: ["startup-finance-disclosure-thresholds", "startup-finance-professional-placement", "startup-finance-equity-compensation"],
      primarySourceIds: ["source-fsa-fiea-law-2026", "source-egov-fiea-startup-capital-2027"],
      reformEventId: "fiea-startup-capital-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-fiea-startup-capital-2027"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年金商法改正のうち、募集開示、特定投資家私募、株式報酬の見直しをスタートアップの資金調達手段として独立整理した。"
    },
    {
      id: "article-fsa-vf-rule-20260915",
      title: "『金融商品取引法第二条に規定する定義に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-20",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/20260915.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／外国ファンド特例・ベンチャーファンド連携",
      status: "adopted",
      summary: "金融庁が2026年9月15日に公表した内閣府令改正の最終資料。国内スタートアップの海外進出促進のため、国内ベンチャーファンドから海外ベンチャーファンドへ出資する場合の外国ファンド特例の要件を緩和し、当該改正を9月16日から施行する。併せてグループ企業によるデジタル社債等の勧誘規制の緩和、券面不発行の預託証券の有価証券指定も実施する。",
      whyImportant: [
        "国内VCが海外VCへ出資する際の投資運用規制について、海外展開支援を目的とする外国ファンド特例の要件緩和が確定したことを一次資料で確認できる",
        "パブリックコメント結果、公布、2026年9月16日という施行日まで一つのページで追えるため、検討案と施行済みルールを混同しない",
        "スタートアップの海外進出支援を資金調達だけでなく、VC側のファンドストラクチャー・運用規制から確認できる"
      ],
      audience: ["VC・ファンド法務", "スタートアップ支援担当", "金融規制担当", "企業法務", "投資担当"],
      audienceReason: "国内ファンドから海外ベンチャーファンドへの出資を検討する際、改正後の外国ファンド特例の適用可能性と施行時点を確認するため。",
      categories: ["金融商品取引・開示・IR", "国際取引"],
      relatedTopics: ["startup-capital-raising-fiea-2026"],
      relatedIssues: ["startup-finance-overseas-vf"],
      primarySourceIds: ["source-fsa-vf-rule-20260915"],
      reformEventId: "fiea-foreign-vf-rule-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-vf-rule-20260915"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／国内VCから海外VCへの出資に関する外国ファンド特例の要件緩和を、2026年9月16日施行の実務論点として追加した。"
    },
    {
      id: "article-miyake-cg-code-practical-20260722",
      title: "コーポレートガバナンス・コード（2026年改訂版）の実務対応― 確定版の解説／パブリックコメントの考え方／取締役会実効性評価質問事項 ―（コーポレートガバナンス・ニュース No.1）",
      publisher: "弁護士法人三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-07-22",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%82%B3%E3%83%BC%E3%83%9D%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AC%E3%83%90%E3%83%8A%E3%83%B3%E3%82%B9%E3%83%BB%E3%82%B3%E3%83%BC%E3%83%89%EF%BC%882026%E5%B9%B4%E6%94%B9%E8%A8%82%E7%89%88%EF%BC%89/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／2026年コーポレートガバナンス・コード実装",
      status: "adopted",
      summary: "2026年改訂コーポレートガバナンス・コードを、確定版だけでなくパブリックコメント回答と取締役会実効性評価へ接続した実務解説。総会前の有価証券報告書提出、政策保有株式の売却を妨げない運用、成長投資・資源配分の議題設計を優先課題として示し、13テーマについて実務対応と取締役会実効性評価の設問例まで具体化している。",
      whyImportant: [
        "改訂内容の要約にとどまらず、2027年7月末のCG報告書対応から逆算し、開示文言ではなく取締役会の議題・年間工程を再設計する必要性を示している",
        "有価証券報告書の総会前提出について、株主総会日程・議決権行使基準日・会社法監査・金商法監査を含む工程全体の見直しとして実装論へ落としている",
        "成長投資・経営資源配分や内部統制・全社的リスク管理について、取締役会実効性評価の設問例まで示し、自己評価・改善サイクルへつなげられる",
        "政策保有株式では、CG報告書上の形式的コンプライだけでなく、売却意向を示した相手への取引縮減示唆等を含む実運用との不一致をリスクとして具体化している"
      ],
      audience: ["上場会社法務", "取締役会事務局", "経営企画・財務", "IR・開示担当", "内部監査"],
      audienceReason: "改訂コードをCG報告書の書換えだけで終わらせず、取締役会議題、年間工程、実効性評価、社内運用の見直しへ落とすため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: ["cg-code-principles-explain", "cg-code-growth-investment", "cg-code-board-function", "cg-code-pre-agm-disclosure", "cg-code-reporting-transition"],
      primarySourceIds: ["source-fsa-cg-code-2026", "source-jpx-cg-code-2026", "source-fsa-board-function-casebook-2026"],
      reformEventId: "corporate-governance-code-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jpx-cg-code-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／2026年改訂CGコードを、パブコメ回答、取締役会の議題・年間工程、実効性評価設問まで含む実装レベルで補強した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

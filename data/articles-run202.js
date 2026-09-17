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
      id: "article-fsa-ssbj-disclosure-ordinance-20260220",
      title: "『企業内容等の開示に関する内閣府令及び特定有価証券の内容等の開示に関する内閣府令の一部を改正する内閣府令』等の公布及びパブリックコメントの結果について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-02-20",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r7/shouken/20260220/20260220.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／SSBJ基準の強制適用・Scope3開示",
      status: "adopted",
      summary: "東証プライム市場上場会社のうち平均時価総額1兆円以上の会社にSSBJ基準に従うサステナビリティ開示を段階的に義務付ける開示府令等の確定資料。平均3兆円以上は2027年3月31日以後終了事業年度から先行適用され、その他の平均1兆円以上は2028年3月31日以後終了事業年度から対象となる。適用初年度と翌年度の二段階開示、Scope3・将来情報の推論過程と社内手続、Scope3のセーフハーバーも整理されている。",
      whyImportant: [
        "SSBJ強制適用の対象会社、平均時価総額の判定方法、適用開始事業年度を一次資料で確定できる",
        "有報での一括開示だけでなく、初年度等に使える二段階開示の選択肢を確認できる",
        "Scope3・将来情報の推論過程と社内手続の記載、Scope3セーフハーバーを開示統制へ落とす基礎になる"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ担当", "経理・財務", "内部統制", "取締役会事務局"],
      audienceReason: "SSBJ強制適用の対象・時期と、Scope3を含む開示プロセスの法定要件を確定資料から設計するため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス"],
      relatedTopics: ["ssbj-sustainability-disclosure-2026"],
      relatedIssues: [
        "ssbj-mandatory-application-timing-2026",
        "ssbj-scope3-safe-harbor-2026"
      ],
      primarySourceIds: ["source-fsa-ssbj-disclosure-ordinance-20260220"],
      reformEventId: "ssbj-mandatory-disclosure-2026",
      reformStageAtPublication: "finalized_pending",
      legacyReformInference: false,
      whatChanged: "新規テーマ／SSBJ基準の強制適用対象・段階適用、二段階開示、Scope3・将来情報の開示手続とセーフハーバーを確定資料から整理した。"
    },
    {
      id: "article-ssbj-shk-practical-standard-20260611",
      title: "サステナビリティ開示実務対応基準第1号『温対法におけるSHK制度の定める方法により測定し報告する温室効果ガス排出を用いて「気候基準」の定めに従う場合の開示』の公表",
      publisher: "サステナビリティ基準委員会",
      author: "サステナビリティ基準委員会（SSBJ）",
      publishedAt: "2026-06-11",
      collectedAt: "2026-09-18",
      url: "https://www.ssb-j.jp/jp/ssbj_standards/2026-0611.html",
      sourceType: "primary",
      sourceLabel: "一次資料・SSBJ／SHK制度と気候基準の実務対応基準",
      status: "adopted",
      summary: "温対法のSHK制度により測定・報告する温室効果ガス排出を用いてSSBJ気候基準に従う場合について、実務上見解が分かれていた点を明確化した実務対応基準第1号。SHK制度データの利用可否・方法が不明確なことで企業の実務負担や比較可能性に影響する懸念を受けて策定された。",
      whyImportant: [
        "SHK制度で既に測定・報告している排出量をSSBJ気候基準へどう接続するかという実務上の重複・差分問題を直接扱う",
        "SSBJ適用準備で見解が分かれていた点を基準設定主体自身が明確化した一次資料である",
        "2026年9月15日に金融庁告示上のサステナビリティ開示基準へ追加指定される基礎となった"
      ],
      audience: ["サステナビリティ担当", "開示・IR", "環境担当", "経理・財務", "上場会社法務"],
      audienceReason: "SHK制度対応で保有する排出量データをSSBJ気候開示へ利用する際の基準上の扱いを確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["ssbj-sustainability-disclosure-2026"],
      relatedIssues: ["ssbj-shk-ghg-practical-standard-2026"],
      primarySourceIds: ["source-ssbj-shk-practical-standard-20260611"],
      reformEventId: "ssbj-mandatory-disclosure-2026",
      reformStageAtPublication: "finalized_pending",
      legacyReformInference: false,
      whatChanged: "新規テーマ／SHK制度に基づく温室効果ガス排出をSSBJ気候基準で用いる場合の実務対応基準を追加した。"
    },
    {
      id: "article-tmi-ssbj-scope3-legal-risks-20260603",
      title: "シリーズ：サステナビリティ開示の動向（その②） SSBJ基準とスコープ3開示義務化の企業への影響",
      publisher: "TMI総合法律事務所",
      author: "戸田謙太郎・櫻木伸也",
      publishedAt: "2026-06-03",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18410.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI総合法律事務所／Scope3データ収集と取適法・営業秘密等",
      status: "adopted",
      summary: "Scope3開示を単なる排出量の算定・開示ではなく、サプライチェーン上の取引先から情報を収集・共有・利用する実務として捉え、独占禁止法、取適法・受託中小企業振興法、営業秘密の観点からリスクを整理する。データ提供負担とコストの透明化・協議、NDA、情報の分離管理、利用目的・アクセス権限・利用履歴の管理、サステナビリティ部門と法務・コンプライアンス部門の連携まで具体化している。",
      whyImportant: [
        "一次資料では薄い、Scope3データ収集が取引先との契約・取引条件へ波及する実務論点を具体化している",
        "中小受託事業者へのデータ提供要請について、負担内容・必要性・コスト分担・価格協議まで検討対象として示している",
        "原材料、調達先、製造工程等の情報が営業秘密になり得ることを踏まえ、NDA、目的制限、アクセス権限、利用履歴まで管理策へ落としている"
      ],
      audience: ["上場会社法務", "サステナビリティ担当", "調達・購買", "コンプライアンス", "情報管理", "開示・IR"],
      audienceReason: "Scope3対応をサステナビリティ部門だけで完結させず、取引先管理・契約・営業秘密・競争法リスクへ接続するため。",
      categories: ["金融商品取引・開示・IR", "独占禁止法・下請・フリーランス", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: ["ssbj-sustainability-disclosure-2026"],
      relatedIssues: ["ssbj-scope3-supply-chain-contract-risk-2026"],
      primarySourceIds: ["source-fsa-ssbj-disclosure-ordinance-20260220"],
      reformEventId: "ssbj-mandatory-disclosure-2026",
      reformStageAtPublication: "finalized_pending",
      legacyReformInference: false,
      whatChanged: "新規テーマ／Scope3開示を取引先データ収集、取適法・競争法、営業秘密、NDA・アクセス管理まで含む横断的な実務課題として整理する参考解説を追加した。"
    },
    {
      id: "article-fsa-ssbj-shk-designation-20260915",
      title: "『企業内容等の開示に関する内閣府令第十九条の九第五項に規定するサステナビリティ開示基準を指定する件の一部を改正する件』の公布及びパブリックコメントの結果について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260915/20260915.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／SHK実務対応基準の法定SSBJ基準への追加指定",
      status: "adopted",
      summary: "SSBJが2026年6月11日に公表した、温対法SHK制度の排出量をSSBJ気候基準に従う開示へ用いる場合の実務対応基準第1号を、開示府令19条の9第5項に規定するサステナビリティ開示基準として正式に追加指定した金融庁の確定資料。改正告示は2026年9月15日に公布され、同日から適用された。",
      whyImportant: [
        "6月時点ではSSBJが公表した基準だった実務対応基準第1号が、金融庁告示上の法定SSBJ基準へ組み込まれたことを確定できる",
        "SHK制度とSSBJ気候基準の接続について、企業の任意な便宜的運用ではなく正式な指定基準として扱う根拠になる",
        "2026年9月15日公布・同日適用という現在の制度状態を法改正情報へ反映できる"
      ],
      audience: ["上場会社法務", "開示・IR", "サステナビリティ担当", "環境担当", "経理・財務"],
      audienceReason: "SHK制度に関する実務対応基準が法定のSSBJ基準へ正式に追加された現行状態を確認するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["ssbj-sustainability-disclosure-2026"],
      relatedIssues: ["ssbj-shk-ghg-practical-standard-2026"],
      primarySourceIds: [
        "source-ssbj-shk-practical-standard-20260611",
        "source-fsa-ssbj-shk-designation-20260915"
      ],
      reformEventId: "ssbj-mandatory-disclosure-2026",
      reformStageAtPublication: "effective",
      legacyReformInference: false,
      whatChanged: "新規テーマ更新／SSBJ実務対応基準第1号が2026年9月15日に金融庁告示上のサステナビリティ開示基準へ追加指定され、同日適用となったことを反映した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

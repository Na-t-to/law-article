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

  const takeoverSources = ["source-meti-takeover-guidelines-2023", "source-meti-takeover-guidance-qa-2026"];
  const takeoverIssues = ["takeover-desirable-acquisition-price-2026", "takeover-bona-fide-proposal-review-2026", "takeover-enterprise-value-qualitative-factors-2026"];
  const vfSources = ["source-fsa-digital-bond-solicitation-final-2026", "source-fsa-overseas-vf-comments-2026"];
  const vfIssues = ["overseas-vf-foreign-fund-exemption-scope-2026", "overseas-vf-monitoring-lp-accountability-2026", "overseas-vf-solicitation-regulation-2026"];

  const additions = [
    {
      id: "article-meti-takeover-guidance-qa-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等を策定しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-17",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業買収における行動指針／2026年ポイント・Q&A",
      status: "adopted",
      summary: "2023年の『企業買収における行動指針』を維持することを前提に、指針の解釈、ポイント、Q&Aを2026年7月30日に公表した経産省資料。望ましい買収を価格だけで捉えないこと、真摯な買収提案・真摯な検討の判断枠組み、企業価値の定量・定性評価、買収価格との関係などを具体化する。",
      whyImportant: [
        "同意なき買収を含む上場会社M&Aで、取締役会が提案を受けた際の検討フレームを2023年指針より具体的に確認できる",
        "最高価格だけで提案を選ぶという単純化を否定しつつ、価格の重要性と企業価値の向上・株主共同の利益の関係を明確にしている",
        "経済安全保障やステークホルダー等の定性的要素を企業価値へどう接続するかについて、将来キャッシュフロー・割引率との関係を示している"
      ],
      audience: ["企業法務", "上場会社の取締役・取締役会事務局", "M&A担当", "経営企画", "IR・財務"],
      audienceReason: "買収提案の受領から情報収集、比較検討、意思決定、株主説明までの社内プロセスを、現在の経産省整理に合わせて設計するため。",
      categories: ["会社法・ガバナンス", "M&A"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: takeoverIssues,
      primarySourceIds: takeoverSources,
      legacyReformInference: false,
      whatChanged: "新テーマを追加／2023年の企業買収行動指針と2026年の解釈・ポイント・Q&Aをつなぎ、買収価格、真摯な提案・検討、企業価値評価の実務判断枠組みを整理した。"
    },
    {
      id: "article-not-takeover-guidance-qa-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-17",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／企業買収行動指針Q&A",
      status: "adopted",
      summary: "2026年のポイント・Q&Aを、取締役会が実際に買収提案へ対応する場面ごとに読み解く実務解説。望ましい買収、真摯な提案、情報収集と比較検討、定量・定性評価、買収価格と企業価値がずれる場面などを、2023年指針との関係を保ちながら具体化している。",
      whyImportant: [
        "一次資料のQ&Aを問ごとに分解し、取締役会が何を情報収集し、何を比較し、どこまで説明すべきかを実務フローとして把握できる",
        "具体性・目的の正当性・実現可能性を機械的なチェックリストにせず、総合判断として扱う点と、真摯な検討を避けるために恣意的に使わない点を明確にしている",
        "定性的要素を企業価値へ織り込む場合も、キャッシュフローや割引率への影響、定量化可能性、株主への説明可能性まで落としている"
      ],
      audience: ["企業法務", "上場会社取締役会事務局", "M&A担当", "経営企画", "アクティビスト・同意なき買収対応担当"],
      audienceReason: "経産省Q&Aを実際の取締役会資料、質問事項、比較検討、説明資料へ落とし込む際の論点を確認するため。",
      categories: ["会社法・ガバナンス", "M&A"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: takeoverIssues,
      primarySourceIds: takeoverSources,
      legacyReformInference: false,
      whatChanged: "実務解説を補完／企業買収行動指針Q&Aを、取締役会の情報収集・比較検討・企業価値評価・株主説明へ具体的に落とす解説をバックフィルした。"
    },
    {
      id: "article-fsa-overseas-vf-comments-2026",
      title: "海外ベンチャーファンドとの連携に関する投資運用規制の緩和―パブリックコメント結果",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260915/01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・外国ファンド特例／海外VF連携の2026年規制緩和",
      status: "adopted",
      summary: "2026年9月16日施行の定義府令改正について、海外VFとの連携に関する外国ファンド特例の緩和範囲を具体化した金融庁のパブリックコメント回答。国内VFのモニタリング・LP説明責任は維持されること、投資運用業の適用除外と持分勧誘の業規制は別であること、金商法61条3項との使い分け等を確認できる。",
      whyImportant: [
        "最終改正の狙いだけでなく、何が緩和され何が残るのかを金融庁の回答で切り分けられる",
        "国内VFの運用状況確認・LPへの説明責任がなくなったわけではないことを明示しており、ファンド運営実務の誤解を防げる",
        "外国ファンド特例は投資運用業の除外であって勧誘規制まで外さないことを明確にし、海外VFのGPに必要な登録・届出検討を残している"
      ],
      audience: ["企業法務", "ベンチャーキャピタル", "ファンド運営者", "金融規制担当", "スタートアップ投資担当"],
      audienceReason: "国内VFから海外VFへの出資を組成する際に、海外GPの投資運用業・勧誘規制と国内VFのLP説明・モニタリングを分けて確認するため。",
      categories: ["金融商品取引・開示・IR", "M&A", "国際取引"],
      relatedTopics: ["overseas-vf-foreign-fund-exemption-2026"],
      relatedIssues: vfIssues,
      primarySourceIds: vfSources,
      reformEventId: "fiea-overseas-vf-foreign-fund-exemption-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: vfSources,
      legacyReformInference: false,
      whatChanged: "新テーマを追加／2026年9月16日施行の外国ファンド特例の要件緩和について、投資運用業の除外範囲、国内VFのモニタリング・LP説明、勧誘規制との切り分けを整理した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

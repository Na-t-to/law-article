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
      id: "article-meti-takeover-guideline-20230831",
      title: "企業買収における行動指針―企業価値の向上と株主利益の確保に向けて―",
      publisher: "経済産業省",
      author: "経済産業省 経済産業政策局 産業組織課",
      publishedAt: "2023-08-31",
      collectedAt: "2026-09-19",
      url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業買収行動指針",
      status: "adopted",
      summary: "上場会社の経営支配権を取得する買収を中心に、買収者・対象会社の取締役会・株主が共有すべき原則論とベストプラクティスを整理した経済産業省の基礎指針。企業価値・株主共同の利益、株主意思、透明性を柱に、買収提案の受領・検討、取引条件の改善、情報開示、買収への対応方針・対抗措置までを包括的に示す。",
      whyImportant: [
        "同意なき買収を含む上場会社M&Aで、取締役会が何を基準に提案を検討すべきかを確認する出発点になる",
        "買収価格と企業価値、株主共同の利益、株主意思、透明性を別々の論点として整理できる",
        "2026年7月30日のポイント・Q&Aは本指針を改定せず趣旨を具体化したものなので、補足文書を読む前提となる"
      ],
      audience: ["上場会社法務", "経営企画・M&A", "取締役・取締役会事務局", "IR・株主対応"],
      audienceReason: "買収提案を受けた際の検討手順や取締役会資料、株主への説明を、単なる価格比較ではなく企業価値と株主利益の枠組みで設計するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-bona-fide-proposal", "takeover-competing-proposals"],
      primarySourceIds: ["source-meti-takeover-guideline-20230831"],
      legacyReformInference: false,
      whatChanged: "上場会社が買収提案を受けた際の判断を整理する新テーマの基礎資料として、2023年の企業買収行動指針を追加した。"
    },
    {
      id: "article-meti-takeover-points-qa-20260730",
      title: "『企業買収における行動指針』のポイント・Q&A等",
      publisher: "経済産業省",
      author: "経済産業省 経済産業政策局 産業組織課",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-19",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業買収行動指針の解釈・Q&A",
      status: "adopted",
      summary: "2023年の企業買収行動指針を維持することを前提に、その趣旨が十分に理解されていないとの問題意識から公表された『解釈について』『ポイント』『Q&A』。高い買収価格だけで望ましい買収が決まらないこと、真摯な買収提案と真摯な検討、定性的要素を企業価値へ織り込む条件、複数提案の比較など、取締役会が迷いやすい論点を具体化する。",
      whyImportant: [
        "2026年の研究会再開とパブリックコメントを経た確定版で、2023年指針の現在の公式な読み方を確認できる",
        "『最高価格を常に選ぶべき』『定性的要素は考慮できない』といった機械的な理解を修正できる",
        "真摯性、比較検討、許認可・資金裏付け、ステークホルダー・経済安全保障要素などを取締役会の実務手順へ落としやすい"
      ],
      audience: ["上場会社法務", "経営企画・M&A", "取締役・取締役会事務局", "IR・株主対応"],
      audienceReason: "買収提案の受領から比較・交渉・株主説明まで、2023年指針の抽象的な原則を具体的な判断項目へ変換するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-bona-fide-proposal", "takeover-qualitative-value", "takeover-competing-proposals"],
      primarySourceIds: ["source-meti-takeover-guideline-20230831", "source-meti-takeover-points-20260730", "source-meti-takeover-qa-20260730"],
      legacyReformInference: false,
      whatChanged: "企業買収行動指針の2026年補足文書を追加し、価格、真摯性、企業価値の定性評価、複数提案の比較という実務上の判断枠組みを明確化した。"
    },
    {
      id: "article-noandt-takeover-guideline-qa-20260804",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／上場会社M&A・買収提案対応",
      status: "adopted",
      summary: "2026年7月30日の企業買収行動指針のポイント・Q&Aを、取締役会が実際に買収提案を受けた場面に引き直して解説するニュースレター。望ましい買収、真摯な提案、比較検討、定量・定性評価、複数提案の選択をQ&Aごとに整理し、資金裏付け、独禁法・外為法等の許認可、シナジー・ディスシナジー、株主への説明まで実務項目へ落としている。",
      whyImportant: [
        "公式Q&Aを取締役会が何を確認し、どの資料を集め、何と比較すべきかという実務フローへ翻訳している",
        "従業員・取引先、サプライチェーン強靱化、技術流出、経済安全保障等を、将来キャッシュフロー・割引率との関係で説明する視点が具体的",
        "最高価格と最も企業価値向上に資する提案が一致しない例外場面でも、条件改善の合理的努力と株主への説明責任が重要だと整理している"
      ],
      audience: ["上場会社法務", "経営企画・M&A", "取締役・取締役会事務局", "IR・株主対応"],
      audienceReason: "公式文書を読むだけでは抽象的になりやすい買収提案対応を、取締役会の情報収集・比較・交渉・説明のチェックポイントへ落とすため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-bona-fide-proposal", "takeover-qualitative-value", "takeover-competing-proposals"],
      primarySourceIds: ["source-meti-takeover-guideline-20230831", "source-meti-takeover-points-20260730", "source-meti-takeover-qa-20260730"],
      legacyReformInference: false,
      whatChanged: "企業買収行動指針の公式Q&Aを、取締役会の情報収集・比較検討・条件交渉・株主説明へ落とし込む実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

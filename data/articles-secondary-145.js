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
      id: "article-noandt-takeover-guideline-qa-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤 遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-14",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／企業買収行動指針・Q&A",
      status: "adopted",
      summary: "2026年7月30日に公表された『企業買収における行動指針』のポイント・Q&Aを、対象会社の取締役会が実務で判断する順序に沿って整理する解説。高い買収価格だけで望ましい買収と決まらないこと、真摯な買収提案の具体性・目的の正当性・実現可能性、買収者の属性・資力・トラックレコードや許認可、買収案とスタンド・アローン等の比較、企業価値への定性的要素の反映、株主への説明責任まで具体化している。",
      whyImportant: [
        "Q&Aの各問を、買収価格、真摯性、情報収集、比較検討、説明責任という取締役会の判断フローへ組み替えており、提案受領時の実務に使いやすい",
        "真摯な買収提案の三要素を単なる足切り条件ではなく総合考慮として扱い、資金裏付け・許認可・支配株主の売却意思等の具体例を示している",
        "従業員・取引先、ガバナンス、サステナビリティ、経済安全保障等の定性的要素を、将来キャッシュフロー又は割引率への影響として企業価値評価へ接続する考え方を整理している"
      ],
      audience: ["企業法務", "取締役会事務局", "M&A担当", "経営企画"],
      audienceReason: "買収提案を受けた際に、価格比較だけに寄らず、真摯性、企業価値向上、実現可能性、戦略的選択肢、株主説明を一つの検討プロセスとして設計するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: [
        "takeover-guideline-desirable-acquisition",
        "takeover-guideline-sincere-proposal-review",
        "takeover-guideline-enterprise-value-factors",
        "takeover-guideline-board-process-disclosure"
      ],
      primarySourceIds: [
        "source-meti-takeover-guideline-2023",
        "source-meti-takeover-points-2026",
        "source-meti-takeover-qa-2026",
        "source-meti-takeover-comments-2026"
      ],
      legacyReformInference: false,
      whatChanged: "2023年指針自体の改訂ではない。2026年ポイント・Q&Aにより、買収価格と企業価値、真摯な提案・検討、定性的要素、株主説明の実務上の判断枠組みが具体化された。"
    },
    {
      id: "article-amt-takeover-guideline-points-2026",
      title: "【M&A】『企業買収における行動指針』のポイント及びQ&A等の公表① ―『企業買収における行動指針』のポイント等の概要―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "青柳 良則 / 佐橋 雄介",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260903001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／企業買収行動指針・ポイント",
      status: "adopted",
      summary: "2026年の『解釈について』『ポイント』『Q&A』が2023年指針を改訂せず、その趣旨を明確化する文書であることを確認した上で、平時の企業価値向上、望ましい買収、提案受領時の対応、真摯な提案・検討、買収に応じる場合、特別委員会、株主への情報・時間提供を体系的に解説する。パブリックコメント回答も参照し、高値の提案と企業価値が一致しない例外場面や、定性的要素の扱いを補足している。",
      whyImportant: [
        "2026年文書が指針の改訂ではなく趣旨の明確化であることを起点にしており、旧ルールと新ルールを誤って二重化せずに読める",
        "平時の事業計画・資本構成・事業ポートフォリオ・投資家対話を、買収提案受領後の比較検討・株主説明へつなぐ設計が明確である",
        "本ポイントとパブコメ回答を併読し、企業価値と買収価格、定性的価値、特別委員会、株主への情報・時間の提供という実務上の境界を補っている"
      ],
      audience: ["企業法務", "取締役会事務局", "M&A担当", "IR・経営企画"],
      audienceReason: "買収局面だけでなく、平時のガバナンス・資本市場との対話から提案受領後の取締役会・特別委員会・株主説明まで一連のプロセスを点検するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: [
        "takeover-guideline-scope-principles",
        "takeover-guideline-desirable-acquisition",
        "takeover-guideline-sincere-proposal-review",
        "takeover-guideline-enterprise-value-factors",
        "takeover-guideline-board-process-disclosure"
      ],
      primarySourceIds: [
        "source-meti-takeover-guideline-2023",
        "source-meti-takeover-interpretation-2026",
        "source-meti-takeover-points-2026",
        "source-meti-takeover-qa-2026",
        "source-meti-takeover-comments-2026"
      ],
      legacyReformInference: false,
      whatChanged: "整理変更なし／2026年ポイント・Q&Aを、平時から買収提案受領・特別委員会・株主判断までの実務フローとして補完した。"
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

(() => {
  const article = {
    id: "article-not-corporate-takeover-guidelines-points-qa-2026",
    title: "「企業買収における行動指針」のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
    publisher: "長島・大野・常松法律事務所",
    author: "斉藤遼太",
    publishedAt: "2026-08-04",
    collectedAt: "2026-09-13",
    url: "https://www.nagashima.com/publications/publication20260804-1/",
    sourceType: "secondary",
    sourceLabel: "法律事務所ニュースレター・上場会社M&A／企業買収行動指針",
    status: "adopted",
    summary: "2026年7月30日に経済産業省が公表した「企業買収における行動指針」の解釈、ポイント、Q&Aについて、Q&Aの各問を取締役会の具体的な判断工程へ落とし込んだ実務解説。高い買収価格だけで「望ましい買収」とはならない一方で価格が企業価値を示す重要な要素であること、真摯な買収提案の具体性・目的の正当性・実現可能性、買収者への追加質問、スタンド・アローン等との比較、定性的要素の定量化・説明、買収に応じる方針を決めた後も最高価格を機械的に選ぶ義務はないこと、最終的な買収成否は株主が決めることを一連のプロセスとして整理する。",
    whyImportant: [
      "買収者の属性・資力・トラックレコード、取引条件、許認可、シナジー／ディスシナジーなど、真摯な検討で取締役会が収集・比較すべき情報を具体的な項目に分解している",
      "高い買収価格を軽視しないことと、例外的に企業価値の向上により資する別提案を選び得ることを両立させ、価格と企業価値の関係を誤読しにくい",
      "米国デラウェア州法上のRevlon義務のような価格最大化義務を日本の指針が置いていない点と、株主への説明責任・最終判断権を区別しており、取締役会議事録や説明資料の設計に使いやすい"
    ],
    audience: ["企業法務", "上場会社の取締役会事務局", "M&A・経営企画", "コーポレートガバナンス担当"],
    audienceReason: "買収提案を受領した後の情報収集、真摯性判断、代替案比較、交渉、株主説明までを、2026年Q&Aの順序に沿って実務フローへ落とし込むため。",
    categories: ["M&A", "会社法・ガバナンス"],
    relatedTopics: ["listed-company-takeover-guidelines"],
    relatedIssues: ["takeover-guidelines-scope-principles", "takeover-desirable-acquisition", "takeover-serious-proposal", "takeover-sincere-review-comparison", "takeover-qualitative-enterprise-value"],
    primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-guidelines-clarification-2026"],
    whatChanged: "整理変更なし／2026年Q&Aを、取締役会の情報収集・比較検討・交渉・説明責任の具体的工程として読む長島・大野・常松の実務解説を補完した。"
  };

  const existing = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  if (!existing.has(article.id)) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(article);
})();

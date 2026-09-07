window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-mof-fdi-screening-advanced-2026",
    "title": "対内直接投資審査制度の高度化について",
    "type": "guideline",
    "typeLabel": "行政解説・2026年外為法改正／投資審査制度",
    "authority": "財務省",
    "publishedAt": "2026-08-19",
    "url": "https://www.mof.go.jp/public_relations/finance/202608/202608d.html",
    "importance": "最高",
    "whyImportant": "2026年改正外為法の対内直接投資審査を、リスク軽減措置、間接取得、高リスク主体の影響下にある国内投資、非指定業種への事後対応、省庁横断的な執行体制の三本柱から財務省が解説する。2026年6月29日に創設された対日外国投資委員会（JFIC）の構成・役割も確認できる。",
    "topics": ["fefta-inward-investment-screening"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-mof-fdi-screening-advanced-2026",
    "title": "対内直接投資審査制度の高度化について",
    "publisher": "財務省",
    "author": "春木 哲洋・柏木 郁文・知田 直樹・加藤 巴瑠薫",
    "publishedAt": "2026-08-19",
    "collectedAt": "2026-09-08",
    "url": "https://www.mof.go.jp/public_relations/finance/202608/202608d.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・行政解説／2026年外為法改正・対内直接投資審査",
    "status": "adopted",
    "summary": "2026年改正外為法による対内直接投資審査制度の高度化を財務省が体系的に解説した資料。リスク軽減措置の法定化、外国法人等を介した日本企業株式の間接取得、高リスク非居住者等の支配・影響下にある国内投資、非指定業種への投資後の介入措置を整理し、省庁横断的な審査体制として2026年6月29日に創設された対日外国投資委員会（JFIC）の構成・役割も示す。",
    "whyImportant": [
      "改正条文の項目を列挙するだけでなく、現行制度では捕捉できなかった間接取得や国内主体を介する投資をなぜ規制対象へ加えたかを政策目的から確認できる",
      "リスク軽減措置を届出事項・変更手続・勧告命令と結び付ける制度設計を、投資実行後の遵守まで含めて理解できる",
      "非指定業種でも高リスク投資家による投資後に安全保障上の懸念が生じた場合の介入枠組みを、従来の事後報告制度との違いから確認できる",
      "法69条の4に基づく省庁間連携とJFICの実際の設置・構成を一次資料で確認でき、法改正と執行体制の接続が分かる"
    ],
    "audience": ["M&A法務", "企業法務", "経営企画・投資担当", "経済安全保障・輸出管理担当"],
    "audienceReason": "クロスボーダーM&A・資本提携の初期段階で、投資家の支配関係、取得経路、対象事業の安全保障上の性質、クリアランス後の条件管理まで一体で検討するため。",
    "categories": ["M&A", "国際取引", "危機管理・コンプライアンス"],
    "relatedTopics": ["fefta-inward-investment-screening"],
    "relatedIssues": ["fdi-indirect-acquisition", "fdi-high-risk-investor", "fdi-nondesignated-postcontrol", "fdi-risk-mitigation"],
    "primarySourceIds": ["source-mof-fdi-screening-advanced-2026", "source-mof-fefta-amendment-2026"],
    "reformEventId": "fefta-inward-investment-2026-amendment",
    "reformStageAtPublication": "partially_effective",
    "reformStageSourceIds": ["source-mof-fefta-amendment-2026", "source-mof-fdi-screening-advanced-2026"],
    "whatChanged": "整理変更なし／2026年外為法改正の各規制を政策目的と制度構造から再確認し、JFICを含む省庁横断的な執行体制まで追える財務省解説を追加した。"
  }
]);

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "fefta-inward-investment-screening");
  if (topic) {
    topic.lastVerified = "2026-09-08";
    if (Array.isArray(topic.sourceIds) && !topic.sourceIds.includes("source-mof-fdi-screening-advanced-2026")) {
      topic.sourceIds.push("source-mof-fdi-screening-advanced-2026");
    }
  }

  const reform = (window.REFORM_EVENT_DATA || []).find((item) => item.id === "fefta-inward-investment-2026-amendment");
  if (reform) {
    reform.sourceIds = Array.isArray(reform.sourceIds) ? reform.sourceIds : [];
    if (!reform.sourceIds.includes("source-mof-fdi-screening-advanced-2026")) {
      reform.sourceIds.push("source-mof-fdi-screening-advanced-2026");
    }
    if (reform.effectiveDateStatus === "phased" && !Array.isArray(reform.effectiveDates)) {
      reform.effectiveDates = ["2026-06-05"];
    }
  }
})();

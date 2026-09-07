window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-jftc-ip-transaction-survey-2026",
    "title": "知的財産権・ノウハウ・データを対象とした優越的地位の濫用行為等に関する実態調査",
    "type": "report",
    "typeLabel": "実態調査・政策資料",
    "authority": "公正取引委員会",
    "publishedAt": "2026-03-11",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/mar/260311_chizai.html",
    "importance": "高",
    "whyImportant": "4万社へのアンケートと148社へのヒアリングを通じ、NDA、ノウハウ・データ開示、知財譲渡等で納得できない条件を受け入れた実態と独禁法等の考え方を整理し、2026年知財取引指針策定の事実的基礎となった。",
    "topics": ["ip-knowhow-data-transactions"]
  },
  {
    "id": "source-jftc-ip-transaction-wg-report-2026",
    "title": "知的財産取引適正化ワーキンググループ報告書",
    "type": "report",
    "typeLabel": "政策報告・制度背景",
    "authority": "公正取引委員会・中小企業庁・特許庁",
    "publishedAt": "2026-03-11",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/mar/260311_chizaiwg_hokokusho.html",
    "importance": "高",
    "whyImportant": "実態調査と専門的議論を踏まえ、知財取引における問題意識、独禁法上の指針策定、契約・情報管理・価値評価等の方向性を整理した最終指針の背景資料。",
    "topics": ["ip-knowhow-data-transactions"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-amt-ip-transaction-survey-guideline-2026",
    "title": "【独禁法・競争法】COMPETITION NEWSLETTER（2026年4月28日号）",
    "publisher": "アンダーソン・毛利・友常法律事務所",
    "author": "小島 諒万・膝舘 朗人（第II部）ほか",
    "publishedAt": "2026-04-28",
    "collectedAt": "2026-09-07",
    "url": "https://www.amt-law.com/insights/newsletters/newsletter_20260428003_ja_001/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所ニュースレター／知財取引実態調査・WG報告・指針案",
    "status": "adopted",
    "summary": "2026年3月の知財取引実態調査と知財取引適正化WG報告書を中心に、4万社アンケート・6,973社回答・148社ヒアリングという調査設計、NDA締結拒否・片務的NDA、ノウハウ／データ開示、著作権等の無償譲渡等の問題事例と独占禁止法上の考え方を整理し、当時公表された指針案まで概説する。最終指針公表前の記事なので、現在の規範確認は2026年6月24日の成案を優先する。",
    "whyImportant": [
      "指針の結論だけでなく、その前提となった大規模な実態調査と具体的な取引事例を読めるため、なぜこの指針が必要になったかを把握しやすい。",
      "NDA、ノウハウ・データの開示、知財譲渡等について、実態調査で確認された行為と優越的地位の濫用の考え方を対応させている。",
      "取適法・フリーランス法との適用可能性にも触れており、独占禁止法だけで取引適正化を閉じない読み方ができる。",
      "最終指針の背景資料として残す価値が高く、成案と併読することで案段階の政策形成と現行整理を分離できる。"
    ],
    "audience": ["企業法務", "独禁法・コンプライアンス担当", "知財担当", "購買・調達", "研究開発・事業開発"],
    "audienceReason": "知財取引条件のリスクを抽象的なルールだけでなく、実際に報告された取引事例と当局の問題意識から点検するため。",
    "categories": ["知的財産", "契約", "独占禁止法・競争法"],
    "relatedTopics": ["ip-knowhow-data-transactions"],
    "relatedIssues": ["iptx-information-disclosure", "iptx-value-compensation"],
    "primarySourceIds": ["source-jftc-ip-transaction-survey-2026", "source-jftc-ip-transaction-wg-report-2026", "source-ip-knowhow-data-guideline-2026"],
    "whatChanged": "整理補強／実態調査・WG報告書を基に、知財取引指針の背景となった問題事例と独禁法上の考え方を追加した。"
  }
]);

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "ip-knowhow-data-transactions");
  if (!topic) return;
  topic.lastVerified = "2026-09-07";
  topic.sourceIds = [...new Set([...(topic.sourceIds || []), "source-jftc-ip-transaction-survey-2026", "source-jftc-ip-transaction-wg-report-2026"] )];
  for (const id of ["iptx-information-disclosure", "iptx-value-compensation"]) {
    const issue = (topic.issues || []).find((item) => item.id === id);
    if (issue) issue.sourceIds = [...new Set([...(issue.sourceIds || []), "source-jftc-ip-transaction-survey-2026", "source-jftc-ip-transaction-wg-report-2026"] )];
  }
})();

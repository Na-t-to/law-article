window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-mhlw-worker-status-current",
    "title": "労働基準法における『労働者』とは",
    "type": "guideline",
    "typeLabel": "一次資料・労働者性の現行判断基準",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/keiyaku/index02.html",
    "importance": "最高",
    "whyImportant": "労働基準法9条の労働者性について、使用従属性、諾否の自由、指揮監督、拘束性、代替性、報酬の労務対償性、事業者性、専属性等の現行判断基準と、契約形式にかかわらず実態から総合判断することを厚生労働省が直接示す基準資料。",
    "topics": ["worker-status-outsourcing-platform"]
  },
  {
    "id": "source-mhlw-worker-status-study-group",
    "title": "労働基準法における『労働者』に関する研究会",
    "type": "report",
    "typeLabel": "一次資料・労働者性判断基準の見直し研究会",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/stf/shingi/other-roudou_558547_00032.html",
    "importance": "最高",
    "whyImportant": "2025年5月以降の労働者性判断基準の分析・研究について、各回の議題・資料・議事録を追える公式入口。研究会の継続状況と最終的な取りまとめを確認する基準点になる。",
    "topics": ["worker-status-outsourcing-platform"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "labor-standards-worker-status-review-2025",
    "title": "労働基準法・労働者性判断基準の見直し（2025年～）",
    "eventType": "policy_review",
    "lawId": "labor-standards-act-worker-status",
    "lawLabel": "労働基準法・労働者性判断基準",
    "relatedTopics": ["worker-status-outsourcing-platform"],
    "effectiveDateStatus": "unknown",
    "matchSourceIds": ["source-mhlw-worker-status-study5-2026", "source-mhlw-worker-status-study6-2026"],
    "sourceIds": ["source-mhlw-worker-status-current", "source-mhlw-worker-status-study-group", "source-mhlw-worker-status-study5-2026", "source-mhlw-worker-status-study6-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-businesslawyers-freelance-worker-status-2026",
    "title": "フリーランス（個人事業主）と労働者の違いは？労働者性チェックリストの例も紹介",
    "publisher": "BUSINESS LAWYERS",
    "author": "宇賀神 崇",
    "publishedAt": "2026-01-20",
    "collectedAt": "2026-09-07",
    "url": "https://www.businesslawyers.jp/articles/1394",
    "sourceType": "secondary",
    "sourceLabel": "実務解説・フリーランス労働者性チェック",
    "status": "adopted",
    "summary": "フリーランスを利用する企業向けに、諾否の自由、具体的な指揮監督、勤務時間・場所、代替性、報酬の労務対償性、事業者性、専属性その他の事情を具体的なチェック項目へ落とす。契約上の記載だけでなく、実際に仕事を断った例、常時監視、社内規程・肩書、人事考課、再委託、固定給等の運用事実から労働者性リスクを点検できる。",
    "whyImportant": [
      "抽象的な使用従属性の各要素を、企業が委託先監査で確認できる具体的な事実へ落としている",
      "契約書だけでなく、日々の指示、監視、肩書、評価、休暇、再委託、報酬等の実運用を確認すべきことが分かる",
      "フリーランス法の対象として扱う前提自体が、実態として労働者でないかの確認を要することを企業リスクと結び付けている"
    ],
    "audience": ["企業法務", "人事・労務", "調達・外注管理", "スタートアップ"],
    "audienceReason": "フリーランス・個人事業主との契約や委託運用を、労働者性の具体的事情に沿ってセルフチェックするため。",
    "categories": ["労務", "契約"],
    "relatedTopics": ["worker-status-outsourcing-platform"],
    "relatedIssues": ["worker-status-current-criteria"],
    "primarySourceIds": ["source-mhlw-worker-status-current", "source-labour-standards-act"],
    "whatChanged": "整理変更なし／現行の労働者性判断基準を、企業がフリーランスの契約・実運用を点検する具体的チェック項目へ落とす参考解説を追加した。"
  },
  {
    "id": "article-ohebashi-freelance-worker-status-2025",
    "title": "フリーランスの労働者性の判断基準",
    "publisher": "大江橋法律事務所",
    "author": "角野 真美",
    "publishedAt": "2025-04-01",
    "collectedAt": "2026-09-07",
    "url": "https://www.ohebashi.com/jp/newsletter/04_202504_Kadono.pdf",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・フリーランス労働者性／裁判例実務解説",
    "status": "adopted",
    "summary": "フリーランスの労働者性について現行の判断要素を整理した上で、エアースタジオ事件とNOVA事件を素材に、複数業務ごとの諾否の自由・拘束・報酬、雇用者と業務委託者の勤務条件の類似、契約上再委託可能でも実運用で容易でない場合など、裁判所が形式より実態をどう評価したかを企業側の留意点へ落とす。",
    "whyImportant": [
      "判断基準の項目説明だけでなく、近時の裁判例で具体的事実がどう労働者性へ評価されたかを追える",
      "同一人物に性質の異なる複数業務を委託する場合には業務ごとの実態確認が必要という実務上の注意を示している",
      "雇用労働者と業務委託者を同一業務で併用する場合、勤務条件・指揮監督等の実質的な類似がリスクになることを具体化している"
    ],
    "audience": ["企業法務", "人事・労務", "外注・フリーランス管理担当"],
    "audienceReason": "契約条項だけでは見落としやすい労働者性リスクを、裁判例に現れた実際の運用事実と比較して点検するため。",
    "categories": ["労務", "契約"],
    "relatedTopics": ["worker-status-outsourcing-platform"],
    "relatedIssues": ["worker-status-current-criteria"],
    "primarySourceIds": ["source-mhlw-worker-status-current", "source-labour-standards-act"],
    "whatChanged": "整理変更なし／裁判例で契約形式より実際の指揮監督・拘束・再委託・雇用者との勤務条件比較が重視された例を参考解説として追加した。"
  }
]);

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "worker-status-outsourcing-platform");
  if (!topic) return;
  topic.lastVerified = "2026-09-07";
  topic.sourceIds = [...new Set([...(topic.sourceIds || []), "source-mhlw-worker-status-current", "source-mhlw-worker-status-study-group"] )];
  const current = (topic.issues || []).find((item) => item.id === "worker-status-current-criteria");
  if (current) current.sourceIds = [...new Set([...(current.sourceIds || []), "source-mhlw-worker-status-current"] )];
  const review = (topic.issues || []).find((item) => item.id === "worker-status-criteria-review");
  if (review) review.sourceIds = [...new Set([...(review.sourceIds || []), "source-mhlw-worker-status-study-group"] )];
})();

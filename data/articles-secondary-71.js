(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const appendUnique = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  const topicSlug = "job-seeker-sexual-harassment";
  const amendmentSourceId = "source-mhlw-harassment-amendment-2025";
  const guidelineSourceId = "source-mhlw-jobseeker-sexual-harassment-guideline-2026";
  const qaSourceId = "source-mhlw-harassment-interpretation-qa-2026";
  const reformEventId = "equal-opportunity-jobseeker-sexual-harassment-2025";
  const articleIds = [
    "article-tokio-dr-jobseeker-sexual-harassment-2026",
    "article-fecc-jobseeker-sexual-harassment-practice-2026"
  ];

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: qaSourceId,
      title: "ハラスメント防止措置義務規定等における解釈事項について",
      type: "guideline",
      typeLabel: "行政Q&A・解釈事項",
      authority: "厚生労働省",
      publishedAt: "2026-04-24",
      url: "https://www.mhlw.go.jp/content/11900000/001695619.pdf",
      importance: "最高",
      whyImportant: "内定者、インターンシップ、OB・OG訪問、懇親の場、役員・顧客等、面談ルール、相談窓口の設計・周知など、施行実務で迷いやすい境界をQ&Aで具体化する。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = appendUnique(topic.sourceIds, [qaSourceId]);
    const sourceMap = {
      "jobseeker-sh-scope": [qaSourceId],
      "jobseeker-sh-recruiting-rules": [qaSourceId],
      "jobseeker-sh-consultation-response": [qaSourceId]
    };
    for (const issue of topic.issues || []) {
      if (sourceMap[issue.id]) issue.sourceIds = appendUnique(issue.sourceIds, sourceMap[issue.id]);
    }
  }

  const reformEvent = (window.REFORM_EVENT_DATA || []).find((item) => item.id === reformEventId);
  if (reformEvent) {
    reformEvent.sourceIds = appendUnique(reformEvent.sourceIds, [qaSourceId]);
    reformEvent.matchSourceIds = appendUnique(reformEvent.matchSourceIds, [qaSourceId]);
    reformEvent.articleIds = appendUnique(reformEvent.articleIds, articleIds);
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tokio-dr-jobseeker-sexual-harassment-2026",
      title: "求職者等に対するセクシュアルハラスメントの防止措置が義務化されます",
      publisher: "東京海上ディーアール株式会社",
      author: "飯野 晶",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-10",
      url: "https://www.tokio-dr.jp/publication/column/258.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・人事労務／採用ハラスメント",
      status: "adopted",
      summary: "求職者等セクハラ防止指針を基礎に、対象となる求職者等・求職活動等と、事業主が講ずべき11項目の措置を整理する。面談時間・場所・実施体制・SNSの指定、求職者向け相談窓口の周知など、従来の従業員向けハラスメント対策だけでは不足する採用場面固有の対応を具体化している。",
      whyImportant: [
        "求職者等には応募者だけでなくインターン、OB・OG訪問、教育・看護実習等の参加者が含まれ得ることを、採用実務の接点ごとに確認できる",
        "面談ルールと相談窓口の求職者向け周知という、既存の社内セクハラ規程をそのまま流用しただけでは抜けやすい義務を一覧できる",
        "法定義務と大学等との連携・第三者による類似行為への対応などの望ましい取組を分けて整理できる"
      ],
      audience: ["企業の人事・採用担当", "企業法務・コンプライアンス担当", "インターン・リクルーター制度の運営担当"],
      audienceReason: "2026年10月1日の施行前に、既存のハラスメント規程と採用現場の運用を照合し、求職者向けのルール・相談導線まで不足なく整備するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["jobseeker-sh-scope", "jobseeker-sh-recruiting-rules", "jobseeker-sh-consultation-response"],
      primarySourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId, guidelineSourceId],
      whatChanged: "既存テーマ補完／法定指針を採用場面の面談・SNS・相談導線へ落とし込む実務整理を追加した。"
    },
    {
      id: "article-fecc-jobseeker-sexual-harassment-practice-2026",
      title: "【社労士が解説】2026年10月法改正で『求職者等』も保護対象に。就活セクハラのリスクと、企業が今すぐ見直すべき採用実務のポイント",
      publisher: "福岡市雇用労働相談センター（FECC）",
      author: "野田 亜以子",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-10",
      url: "https://fukuoka-ecc.mhlw.go.jp/academia/professionalcolumn/column_260810/",
      sourceType: "secondary",
      sourceLabel: "専門家解説・採用実務／就活セクハラ",
      status: "adopted",
      summary: "2026年10月の義務化を採用実務へ落とし、面接質問、個人SNS・深夜連絡、OB・OG訪問や1対1の飲食等のリスク場面と、質問リスト、会社公式ツール、複数名対応、リクルーター研修、求職者向け相談窓口等の点検項目を示す。厚労省指針の抽象的な措置を採用プロセスのチェック項目へ変換する材料になる。",
      whyImportant: [
        "面接、オンライン連絡、OB・OG訪問など、ハラスメントが人事部門の目の届かない接点で起こり得ることを採用フロー単位で点検できる",
        "面接質問リスト、会社公式の連絡手段、複数名対応、リクルーター研修など、指針を予防統制へ落とす実装例が具体的",
        "相談窓口を置くだけでなく、事実確認・被害者配慮・行為者対応まで機能する運用を設計する必要性が分かる"
      ],
      audience: ["人事・採用責任者", "企業法務・労務担当", "採用面接官・リクルーター制度の運営担当"],
      audienceReason: "法令・指針のチェックだけでは見落としやすい採用接点を洗い出し、施行前の研修・ルール・相談体制の具体的な点検表へ落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["jobseeker-sh-scope", "jobseeker-sh-recruiting-rules", "jobseeker-sh-consultation-response"],
      primarySourceIds: [amendmentSourceId, guidelineSourceId, qaSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSourceId, guidelineSourceId],
      whatChanged: "既存テーマ補完／採用面接・SNS・OB・OG訪問等の具体的なリスク場面と予防統制の実装例を追加した。"
    }
  ]);
})();

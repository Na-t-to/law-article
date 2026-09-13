(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const sourceId = "source-meti-technology-management-dialogue-2024";
  const topicSlug = "economic-security-tech-control";
  const issueId = "econsec-tech-transfer-dialogue";
  const reformEventId = "fefta-technology-transfer-dialogue-2024";

  const sourceExists = (window.SOURCE_DATA || []).some((item) => item && item.id === sourceId);
  if (!sourceExists) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat({
      id: sourceId,
      title: "技術管理強化のための官民対話スキーム",
      type: "guideline",
      typeLabel: "安全保障貿易管理・制度運用／関係法令・Q&A",
      authority: "経済産業省",
      publishedAt: "2024-11-15",
      url: "https://www.meti.go.jp/policy/anpo/anpo08.html",
      importance: "最高",
      whyImportant: "重要管理対象技術の国外移転について、外為法55条の8に基づく事前報告、現行の対象技術告示、Q&A、報告様式を確認する公式の制度入口。2024年12月30日に事前報告スキームが施行され、対象技術はその後も改正されているため、取引時点の最新ルール確認の基準になる。",
      topics: [topicSlug]
    });
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (topic) {
    addUnique(topic.sourceIds, [sourceId]);
    topic.lastUpdated = "2026-09-13";
    topic.lastVerified = "2026-09-13";

    if (topic.currentSummary) {
      addUnique(topic.currentSummary.facts, [
        "2024年12月30日から、重要管理対象技術の国外移転について、外為法55条の8に基づく事前報告を起点に経済産業省と技術流出対策を確認する『技術管理強化のための官民対話スキーム』が施行されている。対象技術の告示は制度開始後も改正されている。"
      ]);
      addUnique(topic.currentSummary.interpretations, [
        "海外子会社への製造移転、外国企業への製造委託・ライセンス等では、契約締結だけでなく技術提供についての合意・社内意思決定より前に事前報告の要否を判定できるよう、技術管理と契約承認を接続する必要がある。"
      ]);
      addUnique(topic.currentSummary.implications, [
        "海外投資、製造委託、技術ライセンス、共同開発等の承認フローに、重要管理対象技術への該当性、提供先・仕向地、除外要件、経済産業省への事前相談・報告要否の確認を組み込む。"
      ]);
    }

    if (!Array.isArray(topic.issues)) topic.issues = [];
    if (!topic.issues.some((item) => item && item.id === issueId)) {
      topic.issues.push({
        id: issueId,
        title: "重要技術の国外移転で官民対話の事前報告をいつ組み込むか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "重要管理対象技術をグループA国以外へ、海外子会社への製造移転、外国企業への製造委託・ライセンス等の事業活動に伴って提供する場合は、現行告示とQ&Aを確認し、対象取引に該当するときは技術提供を決める契約・合意・社内意思決定より前に経済産業省へ報告する。",
        exception: "公知の技術、基礎科学分野の研究活動、一定の必要最小限の技術提供等は対象外となり得る。具体的な除外要件は現行の省令・告示・Q&Aを確認する。",
        uncertain: "対象技術やQ&Aは改正され得るほか、取引形態・提供情報・技術管理状況による個別判断が必要な場合があるため、判断が難しい案件は早期に経済産業省へ相談する。",
        sourceIds: [sourceId]
      });
    }
  }

  const reformExists = (window.REFORM_EVENT_DATA || []).some((item) => item && item.id === reformEventId);
  if (!reformExists) {
    window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat({
      id: reformEventId,
      title: "外為法・技術管理強化のための官民対話スキーム",
      eventType: "regulation_or_guideline",
      lawId: "foreign-exchange-act-export-control",
      lawLabel: "外為法・安全保障貿易管理（官民対話スキーム）",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2024-12-30"],
      effectiveDateNote: "重要管理対象技術の事前報告を求める告示は2024年12月30日施行。関連する省令改正は2024年10月30日に施行。",
      effectiveDateSourceIds: [sourceId],
      matchSourceIds: [sourceId],
      sourceIds: [sourceId]
    });
  }

  const articles = [
    {
      id: "article-meti-technology-management-dialogue-2024",
      title: "技術管理強化のための官民対話スキーム",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2024-11-15",
      collectedAt: "2026-09-13",
      url: "https://www.meti.go.jp/policy/anpo/anpo08.html",
      sourceType: "primary",
      sourceLabel: "一次資料・安全保障貿易管理／重要技術の国外移転事前報告",
      status: "adopted",
      summary: "重要管理対象技術を国外へ移転する一定の取引について、外為法55条の8に基づく事前報告を起点に経済産業省と技術流出対策を確認する官民対話スキームの公式ページ。2024年10月30日に関係省令・告示が公布され、事前報告を求める告示は同年12月30日に施行された。制度概要、Q&A、報告様式、現行の関係法令・対象技術告示を一つの入口から確認できる。",
      whyImportant: [
        "対象技術、報告要件、Q&A、報告様式を現行の一次資料で確認できる制度の基準点になる",
        "海外子会社への製造移転、製造委託、ライセンス等を検討する際に、契約・投資判断より前に安全保障貿易管理の確認を入れる必要性を把握できる",
        "対象技術の告示は制度開始後も改正されているため、古い対象リストを固定せず取引時点の最新ルールへ到達できる"
      ],
      audience: ["企業法務", "輸出管理・経済安全保障担当", "知財・技術管理", "海外事業・製造担当"],
      audienceReason: "重要技術の国外移転を伴う投資・委託・ライセンス等で、現行の事前報告要否と相談手続きを一次資料から確認するため。",
      categories: ["国際取引", "危機管理・コンプライアンス", "知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "econsec-tech-leakage", "econsec-export-control"],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "バックフィル／2024年末から施行されている重要技術の国外移転事前報告・官民対話スキームを、現行の制度入口として追加した。"
    },
    {
      id: "article-tmi-technology-management-dialogue-2024",
      title: "技術管理強化のための官民対話スキーム　―重要管理対象技術の国外移転に係る事前報告制度の概要―",
      publisher: "TMI総合法律事務所",
      author: "上野一英・櫻木伸也・張壮壮・伏見純子",
      publishedAt: "2024-12-20",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2024/16509.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／安全保障貿易管理・技術移転",
      status: "adopted",
      summary: "2024年12月30日の制度施行直前に、重要管理対象技術の国外移転に係る事前報告制度を、対象取引の要件、除外規定、報告タイミング、インフォームとの関係、罰則、既存契約への適用まで分解した実務解説。海外子会社・合弁会社への製造移転、製造委託、ライセンス等で、契約書の形式だけではなく実際に技術提供を決める合意・意思決定を基準に検討する必要があることを具体化する。",
      whyImportant: [
        "事前報告の4要件と除外規定を取引フローに沿って整理し、技術・仕向地・取引形態・除外要件を順に確認できる",
        "NDA締結だけでは直ちに報告対象とは限らない一方、NDAを契機に対象技術の提供が始まる場合は報告対象になり得るなど、契約実務上の境界を具体化している",
        "報告後30日という目安は法定の技術提供禁止期間ではないこと、必要に応じてインフォームがあり得ることを区別している",
        "制度施行前から存在する契約でも、施行後に新製品図面・製法等の新しい対象技術を追加提供する場合には報告対象となり得る点を示している"
      ],
      audience: ["企業法務", "輸出管理・経済安全保障担当", "知財・技術管理", "海外子会社・製造委託担当"],
      audienceReason: "海外移転案件のどの時点で報告要否を判定し、契約・社内承認・技術提供をどう同期させるかを具体化するため。",
      categories: ["国際取引", "危機管理・コンプライアンス", "知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "econsec-tech-leakage", "econsec-export-control"],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "バックフィル／官民対話スキームの報告要件・契約タイミング・除外・インフォーム・罰則を取引実務へ落とすTMI解説を追加した。"
    },
    {
      id: "article-amt-technology-management-dialogue-2024",
      title: "〖経済安全保障・通商〗半導体等の重要分野で対外技術移転に事前報告を義務付ける貿易管理上の官民対話スキームの創設および運用開始",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "松本 拓・田村 允",
      publishedAt: "2024-12-02",
      collectedAt: "2026-09-13",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20241202001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター・実務解説／安全保障貿易管理・技術移転",
      status: "adopted",
      summary: "官民対話スキームの最終省令・告示とパブリックコメント回答、Q&Aを、案段階からの変更と実務対応に重点を置いて整理した解説。公知技術・基礎研究・一定の必要最小限の技術提供が報告対象外となること、単純なNDA締結だけで直ちに報告が必要になるとは限らないこと、100％子会社への技術移転でも対象となり得ること、契約・合意・機関決定前の報告タイミング、制度開始前の契約に基づく施行後の新規技術提供の扱いなどを具体化する。",
      whyImportant: [
        "意見公募を経た最終ルールで何が案から変わったかを追えるため、制度開始時の実務判断の根拠を理解しやすい",
        "100％出資の海外子会社でも報告要否を別途確認する必要があることや、NDA・契約・社内決定のどこを基準にするかを具体例で示している",
        "概要資料の『原則30日』が法定の待機期間ではなく運用上の目安であることを区別し、早期相談・インフォームの可能性まで整理している",
        "施行前契約を一律に対象外とせず、施行後に新たな対象技術を提供する場合を切り分けており、継続契約の棚卸しに使える"
      ],
      audience: ["企業法務", "輸出管理・経済安全保障担当", "海外事業・投資担当", "知財・技術管理"],
      audienceReason: "制度開始時のパブコメ・Q&Aを踏まえ、海外子会社、製造委託、ライセンス、継続契約の実務フローに事前報告を組み込むため。",
      categories: ["国際取引", "危機管理・コンプライアンス", "知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: [issueId, "econsec-tech-leakage", "econsec-export-control"],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "バックフィル／案から最終ルールへの差分とQ&A上の実務ポイントを整理したAMT解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => item && item.url).filter(Boolean));
  const additions = articles.filter((article) => !existingIds.has(article.id) && !existingUrls.has(article.url));
  if (additions.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions);
})();

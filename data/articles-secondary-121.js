(() => {
  const normalizeUrl = (value) => String(value || "")
    .trim()
    .replace(/#.*$/, "")
    .replace(/[?&](utm_[^=&]+|fbclid|gclid)=[^&]*/gi, "")
    .replace(/[?&]$/, "")
    .replace(/\/$/, "");

  const topicSlug = "child-sexual-violence-prevention-dbs";
  const reformEventId = "child-sexual-violence-prevention-act-2024";
  const guidelineSourceId = "source-cfa-child-sexual-violence-guideline-2026";
  const qaSourceId = "source-cfa-child-sexual-violence-qa-2026";
  const checklistSourceId = "source-cfa-child-sexual-violence-checklist-2026";

  const articles = [
    {
      id: "article-tmi-child-sexual-violence-scope-2026",
      title: "［連載］こども性暴力防止法　基礎解説（第3回） ―こども性暴力防止法の適用対象（対象事業・対象業務）―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-10",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18558.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／こども性暴力防止法・対象事業／対象業務",
      status: "adopted",
      summary: "2026年12月25日施行のこども性暴力防止法について、義務事業者である学校設置者等と、認定を受けた場合に義務を負う民間教育保育等事業者を区別し、対象業務従事者を判断する際の支配性・継続性・閉鎖性の3要件を職種・働き方の具体例に沿って整理する実務解説。短期・スポット勤務、兼務、外部委託等で対象範囲を棚卸しする際の判断軸を補う。",
      whyImportant: [
        "対象事業者と対象業務従事者を同じ粒度で扱わず、事業類型と業務実態を分けて判定する手順が分かる",
        "支配性・継続性・閉鎖性の3要件について、継続的な接触、一時的イベント、職種全体が対象となる場合等の境界を具体化している",
        "スポットワーク、兼務、委託等を含め、施行前の従事者棚卸しを人事・現場の実データへ落とし込みやすい"
      ],
      audience: ["企業法務", "人事・労務", "学校法人・教育／保育事業者", "コンプライアンス担当"],
      audienceReason: "犯罪事実確認や防止措置の対象者を決める前提として、施設・事業・職種・実際の接触態様を単位に対象範囲を確定するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dbs-covered-business-work", "dbs-criminal-check"],
      primarySourceIds: [guidelineSourceId, qaSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [guidelineSourceId, qaSourceId],
      whatChanged: "バックフィル／対象事業・対象業務・対象従事者の境界を、支配性・継続性・閉鎖性と具体例から整理する実務解説を追加した。"
    },
    {
      id: "article-tmi-child-sexual-violence-certification-2026",
      title: "［連載］こども性暴力防止法　基礎解説（第4回） ―認定制度―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18597.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／こども性暴力防止法・認定制度",
      status: "adopted",
      summary: "学習塾・認可外保育等の民間教育保育等事業者が、学校設置者等と同等の性暴力防止措置を実施する体制について認定を受ける制度を、認定基準、申請単位、共同認定、GビズID・関連システム、認定マーク、変更・廃止届、取消しまで一連の運用として整理する。フランチャイズでは本部の認定が加盟店へ当然には及ばず、事業者・事業単位で申請を設計する必要があることも具体化している。",
      whyImportant: [
        "民間事業者の認定が任意の表示制度だけではなく、犯罪事実確認、相談・早期把握、対処規程、研修、情報管理等を実装する体制認定であることを把握できる",
        "フランチャイズ本部と加盟店、複数事業・複数事業所、共同認定の単位を具体的に整理しており、グループ運用の設計に使える",
        "オンライン申請、認定後の変更届・完了届・廃止届、必要的・裁量的取消しまで追っており、取得後の継続管理を含めて準備できる"
      ],
      audience: ["企業法務", "人事・労務", "学習塾・認可外保育等の民間教育保育事業者", "コンプライアンス担当"],
      audienceReason: "認定を取得するかの経営判断から、申請主体・事業単位、必要体制、認定後の継続管理までを一つの実務フローとして設計するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dbs-covered-business-work", "dbs-prevention-employment", "dbs-information-management"],
      primarySourceIds: [guidelineSourceId, qaSourceId, checklistSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [guidelineSourceId, qaSourceId],
      whatChanged: "バックフィル／民間教育保育等事業者の認定制度を、認定基準・申請単位・認定後管理まで実務フローとして整理する解説を追加した。"
    }
  ];

  const current = window.ARTICLE_DATA || [];
  const existingIds = new Set(current.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = current.concat(additions);
})();

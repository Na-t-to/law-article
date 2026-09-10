(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  const topicSlug = "child-sexual-violence-prevention-dbs";
  const reformEventId = "child-sexual-violence-prevention-act-2024";
  const stageSourceIds = [
    "source-cfa-child-sexual-violence-guideline-2026",
    "source-cfa-child-sexual-violence-qa-2026"
  ];

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-tmi-child-sexual-violence-scope-2026",
      title: "［連載］こども性暴力防止法　基礎解説（第3回） ―こども性暴力防止法の適用対象（対象事業・対象業務）―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-10",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18558.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／こども性暴力防止法・対象事業／対象業務",
      status: "adopted",
      summary: "こども家庭庁の同法アドバイザーを務める弁護士が、学校設置者等と民間教育保育等事業者という二つの事業者類型、対象業務従事者の範囲を施行ガイドライン・Q&Aに沿って整理する。特に、職種全体が対象になる場合と職種の一部だけが対象になり得る場合を分け、後者では支配性・継続性・閉鎖性の3要件を実態に照らして判断すること、オンラインでの双方向接触も閉鎖性の評価対象になり得ること、民間教育事業の認定対象要件まで具体化している。",
      whyImportant: [
        "『こどもと接する従業員』を一括して対象にせず、事業類型・職種・実際の接触態様を分けて対象者名簿を作るための判断軸が得られる",
        "支配性・継続性・閉鎖性の3要件を、スポット勤務、一時的接触、SNSや学習ツールを通じたオンライン接触などの境界事例へ落としている",
        "学校・保育・障害児支援等では職種ごとに『全体が対象』と『一部が対象になり得る』を区別しており、採用・配置・犯罪事実確認の対象範囲を棚卸ししやすい",
        "学習塾等の民間教育事業について、認定対象となる事業要件を具体的に確認できる"
      ],
      audience: ["学校・教育事業者の法務・人事", "保育・児童福祉事業者", "学習塾・スポーツクラブ等の民間教育事業者", "コンプライアンス・現場管理担当"],
      audienceReason: "施行前に、どの事業・施設・職種・従事者が対象になるかを実態ベースで確定し、採用・配置・犯罪事実確認の対象者管理へつなげるため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dbs-covered-business-work", "dbs-criminal-check"],
      primarySourceIds: [
        "source-cfa-child-sexual-violence-guideline-2026",
        "source-cfa-child-sexual-violence-qa-2026"
      ],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: stageSourceIds,
      whatChanged: "既存テーマ補強／対象事業・対象業務を、支配性・継続性・閉鎖性と職種別の境界から実務的に判定できる解説を追加した。"
    },
    {
      id: "article-tmi-child-sexual-violence-certification-2026",
      title: "［連載］こども性暴力防止法　基礎解説（第4回） ―認定制度―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18597.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／こども性暴力防止法・民間事業者認定",
      status: "adopted",
      summary: "学習塾やスポーツクラブ等の民間教育保育等事業者が利用する認定制度について、認定・共同認定の効果、申請要件、犯罪事実確認・早期把握・相談・対処規程・研修・情報管理の体制要件、欠格事由、事業単位の申請、フランチャイズでの事業者ごとの認定、GビズID・関連システムを使う申請手続まで施行ガイドラインに沿って整理する。認定を受けると対象事業について学校設置者等と同様の義務を負い、認定事業者マークを表示できる。",
      whyImportant: [
        "民間事業者にとって認定は単なるマーク取得ではなく、犯罪事実確認、早期把握、相談、対処規程、研修、情報管理を一体で実装する制度だと分かる",
        "フランチャイズ本部の認定が加盟店へ当然に及ばないことや、申請が原則として事業単位であることなど、複数法人・複数店舗で誤りやすい単位を具体化している",
        "認定申請前に責任者選任、業務管理、従事者への事前通知、確認書管理、報告・対応ルール等をどこまで準備するかをチェックできる",
        "GビズIDとこども性暴力防止法関連システムを使うオンライン手続まで説明しており、法務・人事だけでなく申請実務の工程へ落とし込める"
      ],
      audience: ["学習塾・スポーツクラブ等の民間教育事業者", "認可外保育等の認定対象事業者", "フランチャイズ本部・加盟店の法務・人事", "コンプライアンス・情報管理担当"],
      audienceReason: "認定を検討する民間事業者が、対象事業の判定から体制整備、申請単位、社内規程・情報管理、システム手続までを一つの準備工程として確認するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["dbs-covered-business-work", "dbs-criminal-check", "dbs-prevention-employment", "dbs-information-management"],
      primarySourceIds: [
        "source-cfa-child-sexual-violence-guideline-2026",
        "source-cfa-child-sexual-violence-qa-2026",
        "source-cfa-child-sexual-violence-checklist-2026"
      ],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: stageSourceIds,
      whatChanged: "既存テーマ補強／民間教育保育等事業者の認定を、体制要件・申請単位・フランチャイズ・システム手続まで実務工程として補完した。"
    }
  ]);
})();

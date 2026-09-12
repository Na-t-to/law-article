(() => {
  const topicSlug = "medical-research-ethics-guidelines-2026";
  const reformEventId = "medical-research-ethics-guidelines-2026-amendment";
  const sourceFinal = "source-mext-medical-research-ethics-guideline-2026-final";
  const sourceReview = "source-mext-medical-research-ethics-review-2025";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceFinal,
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      type: "guideline",
      typeLabel: "一次資料・三省告示／生命科学・医学系研究倫理指針",
      authority: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      importance: "最高",
      whyImportant: "2026年8月27日告示・同年12月1日施行の改正指針について、IC・オプトアウト、仮名加工情報等と個人情報保護法の関係、多機関共同研究の一括倫理審査、経過措置を公式に確認できる最終資料。",
      topics: [topicSlug]
    },
    {
      id: sourceReview,
      title: "人を対象とする生命科学・医学系研究に関する倫理指針 見直しの方向性について（取りまとめ）",
      type: "report",
      typeLabel: "一次資料・三省合同会議／倫理指針見直し",
      authority: "生命科学・医学系研究等における個人情報の取扱い等に関する合同会議",
      publishedAt: "2025-12-24",
      url: "https://www.mext.go.jp/content/20260220-mxt_life-000047500_10.pdf",
      importance: "最高",
      whyImportant: "個人情報保護法との二重規律による複雑化、IC手続の簡素化、多機関共同研究の倫理審査の適正化など、2026年改正の政策目的と制度設計の方向性を確認できる基礎資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "生命科学・医学系研究倫理指針／IC・個人情報",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      summary: "人を対象とする生命科学・医学系研究について、2026年12月1日施行の倫理指針改正を中心に、インフォームド・コンセント／オプトアウト、個人情報保護法との役割分担、多機関共同研究の一括倫理審査、既存研究の経過措置を整理する。",
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      isNew: true,
      overview: [
        "生命科学・医学系研究倫理指針は、日本の研究者等により実施される研究や日本国内で実施される人を対象とする生命科学・医学系研究について、研究対象者の保護と研究の適正な実施のための手続を定める。2026年8月27日に一部改正が告示され、同年12月1日から改正後の指針が適用される。",
        "今回の改正は、個人情報保護法の改正に応じて上乗せ規律を重ねた結果、指針が複雑化したことや、多機関共同研究の一括倫理審査が十分に普及していないこと等を背景とする。本人同意手続を研究リスクに応じて整理し、仮名加工情報・匿名加工情報・個人関連情報は基本的に個人情報保護法の規律へ委ねる。",
        "企業・研究機関の実務では、研究データの法的分類だけでなく、研究の類型、試料の有無、新規取得か既存利用か、他機関提供・外国提供の有無を組み合わせて、IC・オプトアウト・倫理審査の手続を決める必要がある。"
      ],
      currentSummary: {
        facts: [
          "文部科学省・厚生労働省・経済産業省は2026年8月27日に改正指針を告示し、2026年12月1日から施行する。",
          "同意手続は『文書IC』『口頭IC』『適切な同意』という複数の用語を『IC』へ整理し、研究対象者等へのリスクに応じてIC又はオプトアウトを使い分ける構造へ見直された。",
          "仮名加工情報、匿名加工情報及び個人関連情報の取扱いは、原則として個人情報保護法の関係規定に則って行う整理となり、倫理指針による個人情報規律の一部上乗せが解消される。",
          "多機関共同研究では、侵襲・介入研究について一の倫理審査委員会による一括審査が必須となり、その他の研究についても一括審査が原則となる。",
          "現行指針等に基づき実施中の研究は、個人情報保護関連法令・ガイドラインを遵守することを条件として、経過措置により従前の例によることができる。"
        ],
        interpretations: [
          "改正後は『個人情報保護法上どのデータ類型か』と『倫理指針上どの研究・試料利用類型か』を別々に確認した上で、最終的なIC・オプトアウト・倫理審査フローへ統合する設計が重要になる。",
          "既存試料・情報の利用でオプトアウトを使える場面が広がる一方、オプトアウトは無手続を意味せず、取得時の手続、個人情報保護法上の根拠、研究内容の特定、研究対象者への情報提供・拒否機会等を確認する必要がある。",
          "多機関共同研究の一括審査は、審査件数の削減だけでなく、主たる研究機関と共同研究機関の責任分担、申請資料・変更管理・審査結果の共有方法を標準化する運用課題を伴う。"
        ],
        implications: [
          "2026年12月1日までに、研究類型別のIC・オプトアウト判断表、説明文書・公開文書、試料・情報提供フロー、外国提供時の確認手順を改正指針に合わせて見直す。",
          "仮名加工情報・匿名加工情報・個人関連情報を研究に用いる場合は、倫理指針の手続だけで完結させず、個人情報保護法上の作成・利用・提供規律と社内データ管理を対応付ける。",
          "多機関共同研究を行う企業・大学・医療機関は、一括審査の申請主体、共同研究機関から収集する情報、変更申請、審査結果の伝達、記録保存をSOP等へ反映する。",
          "実施中研究については経過措置を使うか新指針へ移行するかを研究ごとに整理し、個人情報保護関連法令・ガイドラインへの適合も併せて確認する。"
        ],
        uncertain: [
          "2026年12月1日の施行後、一括倫理審査やIC・オプトアウトの具体的な運用は、倫理審査委員会・研究機関の実務蓄積や今後の関連資料の更新を継続確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "medical-research-ethics-applicability-transition",
          title: "改正指針の適用時期と実施中研究の経過措置をどう整理するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "改正指針は2026年12月1日から適用される。現行指針等に基づき既に実施中の研究は、個人情報保護関連法令・ガイドラインを遵守する場合に限り、経過措置により従前の例によることができる。",
          exception: "新規研究や施行後に新指針の適用を受ける手続については、経過措置を当然に前提とせず改正後の指針を確認する。",
          uncertain: "研究計画の変更がどの時点で新指針への移行を実務上必要とするかなど、個別研究の運用は研究機関・倫理審査委員会で確認が必要になる。",
          sourceIds: [sourceFinal]
        },
        {
          id: "medical-research-ethics-consent-optout",
          title: "ICとオプトアウトを研究類型ごとにどう使い分けるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "研究を侵襲・介入、試料を用いる研究、試料を用いない研究等に整理し、研究対象者へのリスク、試料・情報の新規取得か既存利用か等に応じてIC又はオプトアウトを選択する。従来の『文書IC』『口頭IC』『適切な同意』という用語はICへ整理される。",
          exception: "既存試料・情報の利用・提供、要配慮個人情報、外国提供等では個人情報保護法上の例外事由や追加要件が関係するため、単純な二択だけで判断しない。",
          uncertain: "研究類型の境界や各機関の標準書式・審査運用は施行後の実務も確認する必要がある。",
          sourceIds: [sourceFinal, sourceReview]
        },
        {
          id: "medical-research-ethics-privacy-alignment",
          title: "個人情報保護法と倫理指針の役割分担をどう設計するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "仮名加工情報、匿名加工情報及び個人関連情報については基本的に個人情報保護法の関係規定に則って取り扱い、倫理指針上の研究手続とは切り分けて確認する。",
          exception: "研究データが個人情報・要配慮個人情報等に該当する場合や、試料・情報の利用・提供を伴う場合には、個人情報保護法と倫理指針の双方の要件が重なる場面がある。",
          uncertain: "複数の法的データ類型を含む研究データセットでは、研究フローごとの分類・管理方法を実務で具体化する必要がある。",
          sourceIds: [sourceFinal, sourceReview]
        },
        {
          id: "medical-research-ethics-joint-review-implementation",
          title: "多機関共同研究の一括倫理審査をどう実装するか",
          status: "interpreted",
          stage: "enacted",
          views: [],
          conclusion: "侵襲・介入を伴う多機関共同研究では一の倫理審査委員会による一括審査を前提に、その他の多機関共同研究でも原則として一括審査を行えるよう、申請主体、共同研究機関の情報収集、変更管理、審査結果共有を研究体制に組み込む。",
          exception: "研究の種類により通常審査・迅速審査の扱いが異なり、倫理審査委員会が迅速審査から通常審査へ切り替えることも妨げられない。",
          uncertain: "共同研究機関間の具体的な役割分担・SOP・審査資料の標準化は、各研究体制と倫理審査委員会の運用に応じた設計が必要である。",
          sourceIds: [sourceFinal, sourceReview]
        }
      ],
      sourceIds: [sourceFinal, sourceReview]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "生命科学・医学系研究倫理指針・2026年改正",
      eventType: "regulation_or_guideline",
      lawId: "medical-research-ethics-guidelines",
      lawLabel: "人を対象とする生命科学・医学系研究に関する倫理指針",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-01"],
      effectiveDateSourceIds: [sourceFinal],
      matchSourceIds: [sourceFinal, sourceReview],
      sourceIds: [sourceFinal, sourceReview]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-mext-medical-research-ethics-guideline-2026-final",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      publisher: "文部科学省",
      author: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-13",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      sourceType: "primary",
      sourceLabel: "一次資料・生命科学／医学系研究倫理指針・2026年改正",
      status: "adopted",
      summary: "2026年8月27日に告示され、同年12月1日から施行される生命科学・医学系研究倫理指針の改正内容をまとめた三省の公式資料。IC手続の整理、仮名加工情報・匿名加工情報・個人関連情報と個人情報保護法の関係、多機関共同研究の一括倫理審査、実施中研究の経過措置を示す。",
      whyImportant: [
        "2026年12月1日から適用される最終ルールと施行日を一次資料で確認できる",
        "IC・オプトアウトの判断構造、個人情報保護法との役割分担、多機関共同研究の一括審査を一つの改正として把握できる",
        "実施中研究に対する経過措置まで確認でき、施行前の研究棚卸しに使える"
      ],
      audience: ["製薬・医療機器企業法務", "医療・ヘルスケア事業者", "研究開発・臨床研究担当", "個人情報保護担当", "倫理審査・コンプライアンス担当"],
      audienceReason: "研究開始・データ利用・共同研究・倫理審査の手続を2026年12月施行の新指針へ合わせるため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["medical-research-ethics-applicability-transition", "medical-research-ethics-consent-optout", "medical-research-ethics-privacy-alignment", "medical-research-ethics-joint-review-implementation"],
      primarySourceIds: [sourceFinal],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceFinal],
      whatChanged: "新規テーマ／2026年12月1日施行の生命科学・医学系研究倫理指針改正を、IC・個人情報・一括倫理審査・経過措置の4論点で整理した。"
    },
    {
      id: "article-mext-medical-research-ethics-review-2025",
      title: "人を対象とする生命科学・医学系研究に関する倫理指針 見直しの方向性について（取りまとめ）",
      publisher: "文部科学省",
      author: "生命科学・医学系研究等における個人情報の取扱い等に関する合同会議",
      publishedAt: "2025-12-24",
      collectedAt: "2026-09-13",
      url: "https://www.mext.go.jp/content/20260220-mxt_life-000047500_10.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・倫理指針見直しの方向性",
      status: "adopted",
      summary: "2026年改正に先立ち、個人情報保護法との上乗せ規律による複雑化、IC手続の簡素化、多機関共同研究の倫理審査の適正化等について、見直しの政策目的と方向性を整理した三省合同会議の取りまとめ。",
      whyImportant: [
        "最終改正の条文だけでは見えにくい『なぜこの規律を簡素化したのか』という背景を確認できる",
        "個人情報保護法と研究倫理指針の役割分担を制度設計の意図から理解できる",
        "多機関共同研究の一括倫理審査を進める政策背景を確認できる"
      ],
      audience: ["製薬・医療機器企業法務", "研究開発・臨床研究担当", "個人情報保護担当", "倫理審査・コンプライアンス担当"],
      audienceReason: "2026年最終改正を、個人情報規律と倫理審査の見直し目的まで遡って理解するため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["medical-research-ethics-consent-optout", "medical-research-ethics-privacy-alignment", "medical-research-ethics-joint-review-implementation"],
      primarySourceIds: [sourceReview],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceReview],
      whatChanged: "バックフィル／2026年改正の背景となった個人情報規律・IC・倫理審査の見直し理由を、制度形成過程から補強した。"
    },
    {
      id: "article-tmi-medical-research-ethics-guideline-2026",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所解説／生命科学・医学系研究倫理指針・個人情報",
      status: "adopted",
      summary: "2026年改正のうちIC手続と個人情報規律を中心に、研究類型・試料の有無・新規取得／既存利用・他機関提供・外国提供ごとの判断を実務的に整理した解説。仮名加工情報・匿名加工情報・個人関連情報は基本的に個人情報保護法へ委ねられること、既存試料・情報ではオプトアウトを利用できる場面が広がることを具体化する。",
      whyImportant: [
        "一次資料の改正項目を、研究類型ごとのIC・オプトアウト判断フローへ落としている",
        "仮名加工情報・匿名加工情報・個人関連情報について、倫理指針と個人情報保護法の役割分担を実務目線で確認できる",
        "既存試料・情報、要配慮個人情報、他機関提供、外国提供など、企業・研究機関が迷いやすい分岐を具体的に整理している"
      ],
      audience: ["製薬・医療機器企業法務", "医療・ヘルスケア事業者", "研究開発・臨床研究担当", "個人情報保護担当", "倫理審査・コンプライアンス担当"],
      audienceReason: "改正後のIC・オプトアウトと個人情報保護法上の要件を研究フローへ落とす際の実務的な判断材料を得るため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["medical-research-ethics-consent-optout", "medical-research-ethics-privacy-alignment"],
      primarySourceIds: [sourceFinal, sourceReview],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceFinal],
      whatChanged: "新規テーマ補強／IC・オプトアウトと個人情報保護法の分岐を、研究類型別の実務判断へ落とす高品質な解説を追加した。"
    }
  ]);
})();
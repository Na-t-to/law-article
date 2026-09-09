(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueTopicBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const humanPressId = "source-mhlw-human-research-ethics-2026-notice";
  const humanTextId = "source-mhlw-human-research-ethics-2026-text";
  const paymentPackageId = "source-fsa-payment-services-2025-amendment-orders-2026";
  const paymentNoticeId = "source-fsa-cross-border-collection-effective-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: humanPressId,
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      type: "guideline",
      typeLabel: "改正告示・適用開始案内",
      authority: "厚生労働省",
      publishedAt: "2026-08-28",
      url: "https://www.mhlw.go.jp/stf/newpage_75864.html",
      importance: "高",
      whyImportant: "文部科学省・厚生労働省・経済産業省による令和8年改正が2026年8月27日付で告示され、改正後指針を2026年12月1日から適用すると公式に示す一次資料。",
      topics: ["human-subject-life-medical-research-ethics-2026"]
    },
    {
      id: humanTextId,
      title: "研究に関する指針について（人を対象とする生命科学・医学系研究に関する倫理指針・令和8年一部改正）",
      type: "guideline",
      typeLabel: "指針本文・新旧対照表・施行通知",
      authority: "厚生労働省",
      publishedAt: "2026-08-27",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hokabunya/kenkyujigyou/i-kenkyu/index.html",
      importance: "高",
      whyImportant: "令和8年8月27日一部改正の倫理指針本文、新旧対照表、施行通知をまとめて確認できる公式資料ページ。改正内容を二次資料だけで判断しないための基礎資料。",
      topics: ["human-subject-life-medical-research-ethics-2026"]
    },
    {
      id: paymentPackageId,
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      type: "guideline",
      typeLabel: "政令・内閣府令等／パブリックコメント結果",
      authority: "金融庁",
      publishedAt: "2026-05-22",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      importance: "高",
      whyImportant: "2025年改正資金決済法について、クロスボーダー収納代行の適用除外類型を含む政令・内閣府令等の最終内容と、2026年6月1日の施行・適用開始を公式に示す一次資料。",
      topics: ["cross-border-collection-payment-services-2026"]
    },
    {
      id: paymentNoticeId,
      title: "クロスボーダー収納代行（国境をまたぐ収納代行）に関する相談窓口の終了について",
      type: "guideline",
      typeLabel: "施行案内",
      authority: "金融庁",
      publishedAt: "2026-05-22",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522-3/20260522-3.html",
      importance: "高",
      whyImportant: "クロスボーダー収納代行に関する改正法が2026年6月1日に施行されることを明示し、施行後の個別相談窓口を財務局等へ移す公式案内。",
      topics: ["cross-border-collection-payment-services-2026"]
    }
  ]);

  window.TOPIC_DATA = addUniqueTopicBySlug(window.TOPIC_DATA, [
    {
      slug: "human-subject-life-medical-research-ethics-2026",
      title: "生命科学・医学系研究倫理指針・2026年改正",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      summary: "人を対象とする生命科学・医学系研究の令和8年倫理指針改正について、2026年12月1日の適用開始、IC・オプトアウト手続の再編、加工情報等と個人情報保護法の関係、研究機関の移行対応を整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "文部科学省・厚生労働省・経済産業省は2026年8月27日、人を対象とする生命科学・医学系研究に関する倫理指針を一部改正し、改正後指針は2026年12月1日から適用される。",
        "今回の改正では、インフォームド・コンセント（IC）に関する従来の複雑な区分を整理し、ICとオプトアウトを中心とする構成へ大きく見直した。既存試料・情報を用いる研究では、取得経緯や個人情報保護法上の例外、包括同意の範囲等に応じて手続を判定する。",
        "仮名加工情報、匿名加工情報、個人関連情報については、個人情報保護法の各規定に則る整理が強まり、倫理指針による上乗せ規律が縮小する。研究データの分類と、個人情報保護法・倫理指針のどちらを基準に見るかを分ける必要がある。",
        "改正本文は確定しているが、研究機関の実務では今後のガイダンスも確認しながら、研究計画書、説明文書、同意書、オプトアウト文書、倫理審査手順、試料・情報提供フローを更新する必要がある。"
      ],
      currentSummary: {
        facts: [
          "令和8年8月27日付で倫理指針の一部改正が告示され、改正後指針は2026年12月1日から適用される。",
          "改正後指針は、従来の『文書IC』『口頭IC』『適切な同意』等の区分を整理し、ICとオプトアウトを中心に手続を再構成する。",
          "仮名加工情報、匿名加工情報、個人関連情報については、原則として個人情報保護法の関係規定に従う整理となり、倫理指針上の一部手続から外れる。"
        ],
        interpretations: [
          "『既存情報だからオプトアウトで足りる』と一律に処理せず、試料の有無、情報の種類、取得経緯、個人情報保護法上の例外、包括同意の範囲、提供先を順に確認する必要がある。",
          "個人情報保護法への委ね方が増えるため、研究倫理担当と個人情報保護担当が別々のチェックリストを持つだけではなく、同じデータ分類を共有して判断する方が事故を減らしやすい。"
        ],
        implications: [
          "2026年12月1日までに、新規研究・既存研究それぞれについてIC、オプトアウト、倫理審査、機関長許可の手順を棚卸しする。",
          "研究計画書、説明文書、同意書、情報公開文書、試料・情報提供記録のテンプレートを改正後指針へ合わせる。",
          "仮名加工情報・匿名加工情報・個人関連情報を使う研究では、倫理指針上の手続だけでなく個人情報保護法上の取得・利用・提供ルールを直接確認する。"
        ],
        uncertain: [
          "今後公表・更新されるガイダンスにより、IC簡略化、適切な手続、既存試料・情報の提供、外国提供等の具体的運用がさらに明確化される可能性がある。",
          "個別研究でIC又はオプトアウトのどちらが許容されるかは、侵襲・介入、試料の有無、情報の種類、取得時の同意、提供関係等によって異なる。"
        ]
      },
      issues: [
        {
          id: "research-ethics-guideline-2026-effective-date",
          title: "令和8年改正はいつから適用されるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "令和8年8月27日付で改正が告示され、改正後の倫理指針は2026年12月1日から適用される。",
          exception: "適用日前に実施中の研究については、経過的な取扱いを含め、施行通知・ガイダンスと各研究計画の状況を確認する。",
          uncertain: "適用開始後の個別運用は、今後のガイダンス更新も継続確認する。",
          sourceIds: [humanPressId, humanTextId]
        },
        {
          id: "research-ethics-ic-optout-2026",
          title: "ICとオプトアウトをどう選ぶか",
          status: "interpreted",
          stage: "enacted",
          views: [],
          conclusion: "改正後はICとオプトアウトを中心に整理し、侵襲・介入、試料の有無、新規取得か既存か、個人情報保護法上の例外、包括同意等を順に確認して手続を決める。",
          exception: "侵襲・介入を伴う研究や新たな試料取得など、ICを原則とする類型がある。既存試料・情報でも要件を満たさなければオプトアウトにできない。",
          uncertain: "『適切な手続を経て取得』等の具体的判断はガイダンスと個別事実の確認が必要。",
          sourceIds: [humanTextId, humanPressId]
        },
        {
          id: "research-ethics-processed-information-2026",
          title: "仮名加工・匿名加工・個人関連情報はどう扱うか",
          status: "interpreted",
          stage: "enacted",
          views: [],
          conclusion: "仮名加工情報、匿名加工情報、個人関連情報は個人情報保護法の関係規定に則る整理が強まり、改正後倫理指針のIC等に関する上乗せ規律の対象を切り分けて確認する。",
          exception: "情報の加工状態だけで研究倫理上の全ての義務がなくなるわけではなく、研究全体の倫理審査や他の指針規定、個人情報保護法上の義務を別途確認する。",
          uncertain: "個別データが法令上どの情報類型に当たるか、提供先で個人情報が取得されるか等は実態に即して判断する。",
          sourceIds: [humanTextId, humanPressId]
        },
        {
          id: "research-ethics-guidance-implementation-2026",
          title: "ガイダンスを踏まえた実務移行で何を更新するか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "改正本文を基準に先行して手順・文書を棚卸ししつつ、ガイダンスの公表・更新内容を反映して2026年12月1日までの運用切替を行う。",
          exception: "改正本文で確定している事項と、ガイダンスで具体化される運用を混同しない。",
          uncertain: "ガイダンスで示される具体例・手続の詳細は継続確認が必要。",
          sourceIds: [humanPressId, humanTextId]
        }
      ],
      sourceIds: [humanPressId, humanTextId],
      practicalImpacts: [
        "研究計画書・倫理審査申請",
        "説明文書・同意書・オプトアウト文書",
        "試料・情報の提供契約・提供記録",
        "個人情報保護・研究データ管理",
        "研究機関・医療機関・製薬／ヘルスケア企業の社内手順"
      ]
    },
    {
      slug: "cross-border-collection-payment-services-2026",
      title: "クロスボーダー収納代行・資金決済法2025年改正",
      categories: ["契約・取引", "国際取引", "危機管理・コンプライアンス"],
      summary: "2025年改正資金決済法で明確化されたクロスボーダー収納代行の為替取引規制について、2026年6月1日施行の要件、適用除外、再度規制対象となる高リスク類型、契約・資金フローの確認方法を整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "2025年改正資金決済法は、国内と国外の間で資金を移動させる収納代行について、一定の要件を満たすものを為替取引に該当すると明確化した。関係政令・内閣府令・事務ガイドラインとともに2026年6月1日から施行・適用されている。",
        "すべてのクロスボーダー収納代行が規制対象になるわけではなく、銀行等・資金移動業者への再委託、一定のエスクロー、取引プラットフォーム、グループ会社、国際ブランド、一定のカード・前払式支払手段取引など、内閣府令上の適用除外類型がある。",
        "適用除外の形式に当てはまっても、債務者の債務が資金受入時までに消滅しない場合、再委託で資金引渡しが阻害されるおそれがある場合、賭博資金や一定の有価証券・デリバティブ取引に係る場合などは、利用者保護上のリスクから為替取引に該当する。",
        "実務ではサービス名称だけで判定せず、誰が債権者・債務者か、誰から誰へ委託が連なるか、どの時点で弁済になるか、誰が資金を受け入れ・引き渡すか、国外要素がどこにあるかを契約と資金フローから確認する。"
      ],
      currentSummary: {
        facts: [
          "改正資金決済法、関係政令・内閣府令等及び事務ガイドラインは2026年6月1日から施行・適用されている。",
          "資金決済法2条の2は、一定の収納代行について為替取引該当性を明示し、クロスボーダー収納代行では利用者保護上問題が少ないものとして内閣府令で定める類型を除外する。",
          "適用除外類型に形式的に該当しても、利用者保護に欠けるおそれが大きい行為として内閣府令が定める場合は為替取引に該当する。"
        ],
        interpretations: [
          "『収納代行』というサービス名や、銀行口座を利用しているという事実だけでは適用除外を判断できない。契約上の委託関係、弁済の効果、資金の受入れ・引渡し主体を追う必要がある。",
          "プラットフォーム型やエスクロー型でも、契約成立への関与や再委託先の不履行時の責任設計によって評価が変わるため、利用規約と決済フローを一体で確認する。"
        ],
        implications: [
          "国内外をまたぐ代金回収・決済・マーケットプレイス・代理店スキームを一覧化し、資金決済法2条の2の要件と適用除外を再点検する。",
          "契約書・利用規約で、債権者、債務者、収納代行事業者、再委託先の役割、弁済時点、資金返還・引渡し責任を明確にする。",
          "適用除外を前提にする場合でも、高リスク類型への該当性と、事業モデル変更後も除外要件を維持できるかを継続確認する。"
        ],
        uncertain: [
          "個別スキームが為替取引に該当するかは、形式的な契約名称ではなく実際の資金移動と当事者関係によって判断が変わる。",
          "新規商品・決済方法や多段階の再委託を組み込む場合は、既存の適用除外に当然に収まるとは限らず、必要に応じて財務局等への相談も検討する。"
        ]
      },
      issues: [
        {
          id: "cross-border-collection-exchange-transaction",
          title: "クロスボーダー収納代行はいつ為替取引に当たるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "資金決済法2条の2の要件を満たし、国内から国外又は国外から国内へ資金を移動させる収納代行は、内閣府令上の適用除外に当たらない限り為替取引に該当する。",
          exception: "現金を直接交付して運ぶ行為や、内閣府令で利用者保護上問題が少ないものとされた類型など、条文・府令上の除外がある。",
          uncertain: "委託・債権譲渡・多段階委託が複雑な場合は、実態に沿って各要件を確認する必要がある。",
          sourceIds: [paymentPackageId, paymentNoticeId]
        },
        {
          id: "cross-border-collection-exemptions",
          title: "適用除外類型に該当するかをどう確認するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "銀行等・資金移動業者への再委託、一定のエスクロー・取引プラットフォーム、グループ会社、国際ブランド、一定のカード・前払式支払手段取引等について、府令上の要件をスキームごとに確認する。",
          exception: "銀行口座を使うだけ、広告や顧客紹介だけ、形式的にグループ会社を介在させるだけなどでは、各除外要件を満たさない場合がある。",
          uncertain: "個別のサービス機能と契約関係が各府令要件に該当するかは事実関係の確認が必要。",
          sourceIds: [paymentPackageId]
        },
        {
          id: "cross-border-collection-high-risk-fallback",
          title: "適用除外でも規制対象に戻る場合は何か",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "府令上の適用除外類型に該当しても、債務が資金受入時までに消滅しない場合、一定の再委託リスク、賭博資金、一定の有価証券・デリバティブ取引等の高リスク類型では為替取引に該当する。",
          exception: "高リスク類型の各要件は個別に確認し、語句が近いという理由だけで広げない。",
          uncertain: "法令・公序良俗違反に類する行為等、具体的事実への当てはめは個別判断を要する。",
          sourceIds: [paymentPackageId]
        },
        {
          id: "cross-border-collection-contract-fund-flow",
          title: "契約と資金フローをどう棚卸しするか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "債権の発生原因、委託・再委託、弁済の効果、資金受入れ・引渡し主体、国外要素を図示し、利用規約・委託契約・決済契約と突合して規制該当性を確認する。",
          exception: "既存サービスでも契約変更、決済事業者変更、国外拠点追加等により評価が変わり得る。",
          uncertain: "複雑な多段階スキームでは当局相談を含めた個別検討が必要。",
          sourceIds: [paymentPackageId, paymentNoticeId]
        }
      ],
      sourceIds: [paymentPackageId, paymentNoticeId],
      practicalImpacts: [
        "決済・収納代行スキーム設計",
        "利用規約・業務委託契約",
        "海外事業・マーケットプレイス",
        "資金フロー図・法令該当性メモ",
        "資金移動業登録・当局相談の要否"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: "human-research-ethics-guideline-2026",
      title: "人を対象とする生命科学・医学系研究倫理指針・2026年改正",
      eventType: "regulation_or_guideline",
      lawId: "human-research-ethics-guideline",
      lawLabel: "人を対象とする生命科学・医学系研究に関する倫理指針",
      relatedTopics: ["human-subject-life-medical-research-ethics-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-12-01"],
      effectiveDateSourceIds: [humanPressId],
      sourceIds: [humanPressId, humanTextId]
    },
    {
      id: "payment-services-act-2025-cross-border-collection",
      title: "資金決済法・2025年改正（クロスボーダー収納代行）",
      eventType: "law_amendment",
      lawId: "payment-services-act",
      lawLabel: "資金決済法",
      relatedTopics: ["cross-border-collection-payment-services-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-06-01"],
      effectiveDateSourceIds: [paymentPackageId],
      sourceIds: [paymentPackageId, paymentNoticeId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-mhlw-human-research-ethics-guideline-2026",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      publisher: "厚生労働省",
      author: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-10",
      url: "https://www.mhlw.go.jp/stf/newpage_75864.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正告示／適用開始案内",
      status: "adopted",
      summary: "文部科学省・厚生労働省・経済産業省が、人を対象とする生命科学・医学系研究に関する倫理指針を2026年8月27日付で一部改正したことを公表し、改正後指針を2026年12月1日から適用すると案内した一次資料。指針本文、新旧対照表、施行通知への入口も示す。",
      whyImportant: [
        "2026年12月1日の適用開始日を一次資料で確定できる",
        "研究計画・倫理審査・同意取得手順を改正前後で比較するための公式入口になる",
        "二次解説の要約だけでなく指針本文・新旧対照表・施行通知へ遡れる"
      ],
      audience: ["医療・ヘルスケア法務", "個人情報保護担当", "研究開発・倫理審査担当"],
      audienceReason: "人を対象とする研究を実施・支援する企業や研究機関が、2026年12月1日の運用切替に向けて公式資料を確認するため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["human-subject-life-medical-research-ethics-2026"],
      relatedIssues: ["research-ethics-guideline-2026-effective-date", "research-ethics-ic-optout-2026", "research-ethics-processed-information-2026"],
      primarySourceIds: [humanPressId, humanTextId],
      reformEventId: "human-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [humanPressId],
      whatChanged: "新規テーマ『生命科学・医学系研究倫理指針・2026年改正』を追加し、2026年12月1日の適用開始と改正後指針の公式一次資料を接続した。"
    },
    {
      id: "article-tmi-human-research-ethics-guideline-2026",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "令和8年改正のうち、特にインフォームド・コンセント手続の再編を詳しく解説する。従来の文書IC・口頭IC・適切な同意等の区分をICとオプトアウト中心に整理したこと、既存試料・情報、仮名加工・匿名加工・個人関連情報、外国提供等の扱いを、個人情報保護法との関係も含めて場合分けしている。",
      whyImportant: [
        "一次資料の新旧対照表だけでは追いにくいIC・オプトアウトの判断順序を研究場面別に整理している",
        "匿名加工情報等に対する倫理指針の上乗せ縮小と個人情報保護法への接続を具体的に説明している",
        "研究機関が説明文書・同意書・オプトアウト文書・提供手続をどこから見直すべきかを把握しやすい"
      ],
      audience: ["医療・ヘルスケア法務", "研究倫理担当", "個人情報保護担当"],
      audienceReason: "改正後指針を実際の研究手続へ落とす際に、研究類型ごとのIC・オプトアウト判断と個人情報保護法との接続を確認するため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["human-subject-life-medical-research-ethics-2026"],
      relatedIssues: ["research-ethics-ic-optout-2026", "research-ethics-processed-information-2026", "research-ethics-guidance-implementation-2026"],
      primarySourceIds: [humanPressId, humanTextId],
      reformEventId: "human-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [humanPressId],
      whatChanged: "新規テーマの実務解説として、IC・オプトアウトの再編と個人情報保護法への接続を研究類型別に補強した。"
    },
    {
      id: "article-fsa-payment-services-2025-amendment-orders-2026",
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-10",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      sourceType: "primary",
      sourceLabel: "一次資料・政令等公布／パブリックコメント結果",
      status: "adopted",
      summary: "2025年改正資金決済法に伴う政令・内閣府令等を金融庁が公布し、パブリックコメント結果を公表した資料。クロスボーダー収納代行について、為替取引規制から除外する具体的類型を定め、改正法・関係政令・内閣府令・事務ガイドライン等を2026年6月1日から施行・適用すると示す。",
      whyImportant: [
        "クロスボーダー収納代行の適用除外を定める下位法令とパブコメ回答を一括して確認できる",
        "2026年6月1日の施行・適用開始を一次資料で確認できる",
        "電子決済・暗号資産等を含む2025年改正全体の中で、収納代行規制の位置付けを確認できる"
      ],
      audience: ["決済・FinTech法務", "海外事業担当", "新規事業・プロダクト法務"],
      audienceReason: "国内外をまたぐ収納代行・決済スキームが改正資金決済法の対象になるかを一次資料で確認するため。",
      categories: ["契約・取引", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["cross-border-collection-payment-services-2026"],
      relatedIssues: ["cross-border-collection-exchange-transaction", "cross-border-collection-exemptions", "cross-border-collection-high-risk-fallback"],
      primarySourceIds: [paymentPackageId],
      reformEventId: "payment-services-act-2025-cross-border-collection",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [paymentPackageId],
      whatChanged: "新規テーマ『クロスボーダー収納代行・資金決済法2025年改正』を追加し、適用除外を具体化した政令・府令等と2026年6月1日の施行日を接続した。"
    },
    {
      id: "article-tmi-cross-border-collection-2026",
      title: "クロスボーダー収納代行に係る規制内容の解説",
      publisher: "TMI総合法律事務所",
      author: "清水秋帆",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-10",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18745.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2026年6月1日に施行されたクロスボーダー収納代行規制について、資金決済法2条の2の要件、銀行等への再委託、エスクロー、取引プラットフォーム、グループ会社、国際ブランド、カード・前払式支払手段等の適用除外を整理し、適用除外でも利用者保護上の高リスク類型では為替取引に戻る点までフローで説明する。",
      whyImportant: [
        "条文・府令・事務ガイドライン・パブコメ回答を、実際の決済スキーム判定に使える順序へ整理している",
        "適用除外を列挙するだけでなく、再委託責任や弁済時点など契約設計で結論が変わるポイントを具体化している",
        "新規事業だけでなく既存の海外代金回収・プラットフォーム決済も再点検すべきことが分かる"
      ],
      audience: ["決済・FinTech法務", "海外事業担当", "新規事業・プロダクト法務"],
      audienceReason: "クロスボーダー収納代行の適用除外を、サービス名称ではなく契約・委託関係・資金フローから判定するため。",
      categories: ["契約・取引", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["cross-border-collection-payment-services-2026"],
      relatedIssues: ["cross-border-collection-exchange-transaction", "cross-border-collection-exemptions", "cross-border-collection-high-risk-fallback", "cross-border-collection-contract-fund-flow"],
      primarySourceIds: [paymentPackageId, paymentNoticeId],
      reformEventId: "payment-services-act-2025-cross-border-collection",
      reformStageAtPublication: "effective",
      reformStageSourceIds: [paymentPackageId],
      whatChanged: "新規テーマの実務解説として、適用除外8類型と高リスク時の再規制、契約・資金フローによる判定方法を補強した。"
    }
  ]);
})();

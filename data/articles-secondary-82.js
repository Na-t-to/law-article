(() => {
  const topicSlug = "logistics-special-designation-consignee";
  const designationSourceId = "source-jftc-logistics-special-designation-2026";
  const surveySourceId = "source-jftc-logistics-survey-2026";
  const reformEventId = "logistics-special-designation-2026-amendment";
  const designationArticleId = "article-jftc-logistics-special-designation-2026";
  const surveyArticleId = "article-jftc-logistics-survey-2026";
  const tkiArticleId = "article-tki-logistics-special-designation-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: designationSourceId,
      title: "特定荷主が物品の運送又は保管を委託する場合等の特定の不公正な取引方法（令和9年4月1日施行）",
      type: "guidance",
      typeLabel: "特殊指定・改正告示",
      authority: "公正取引委員会",
      publishedAt: "2026-06-18",
      url: "https://www.jftc.go.jp/dk/guideline/tokuteiunsou.html",
      importance: "最高",
      whyImportant: "2027年4月1日に施行される改正物流特殊指定の本文。特定荷主・特定物流事業者の適用範囲、価格協議に応じない一方的な代金決定の禁止、特定着荷主・特定発荷主の定義と着荷主規制を直接確認できる。",
      topics: [topicSlug]
    },
    {
      id: surveySourceId,
      title: "令和7年度における荷主と物流事業者との取引に関する調査結果等について",
      type: "report",
      typeLabel: "執行・実態調査",
      authority: "公正取引委員会",
      publishedAt: "2026-06-25",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260625_buttokuchousakekka.html",
      importance: "高",
      whyImportant: "物流特殊指定の現行運用について、荷主105名への立入調査、779名への注意喚起と問題行為の類型を示す一次資料。2027年改正への準備で、契約条項だけでなく実際の荷役・変更・支払・価格決定の運用を点検する優先順位を付ける材料になる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "物流特殊指定・着荷主規制／荷待ち・荷役",
      categories: ["独占禁止法・競争法", "契約"],
      summary: "2027年4月1日に施行される改正物流特殊指定について、発荷主と物流事業者の取引だけでなく、新設される着荷主規制、価格協議、契約外の荷役・荷待ち・変更、直近の執行状況まで整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "物流特殊指定は、荷主と物流事業者の取引における優越的地位の濫用を物流分野に即して具体化する独占禁止法上の特殊指定である。",
        "2026年6月18日の改正告示は2027年4月1日に施行され、従来の発荷主と物流事業者の関係に加えて、一定の着荷主が運送事業者を通じて発荷主へ不当な負担を生じさせる行為を新たに規制する。",
        "このテーマでは、売買・製造等の取引、物流委託、納品現場の指示を分けずに、発荷主・着荷主・物流事業者の三者関係として点検する。"
      ],
      currentSummary: {
        facts: [
          "令和8年6月18日公正取引委員会告示第2号による改正物流特殊指定は2027年4月1日から施行される。",
          "2027年4月施行後の物流特殊指定は、特定荷主による支払遅延、減額、買いたたき、購入・利用強制、経済上の利益提供、変更・やり直しに加え、物流事業者が価格協議を求めたのに協議や必要な説明・情報提供をせず一方的に代金を決定する行為等を禁止する。",
          "改正では特定着荷主・特定発荷主の枠組みを設け、着荷主が運送事業者を通じて契約外の附帯業務等をさせたり、運送内容の変更・やり直しをさせたりすることで発荷主の利益を不当に害する行為を規制対象に加える。",
          "公取委の令和7年度調査では、問題が疑われる荷主105名に立入調査を行い、独占禁止法上の問題につながるおそれのある行為を行った荷主779名へ注意喚起文書を送付した。行為類型では不当な給付内容の変更・やり直し、支払遅延、買いたたきが多かった。"
        ],
        interpretations: [
          "改正後は、物流事業者との直接契約だけを見ても着荷主規制を評価できない。売買・製造等の取引で誰が着荷主となり、納品現場の要請が発荷主を通じて物流事業者へどう伝わり、追加費用を誰が負担するかを三者関係で確認する必要がある。",
          "価格改定の申入れに対し結論だけを返す運用ではなく、協議の機会、必要な説明・情報提供、検討経緯を記録できる購買・物流プロセスへ寄せることが重要になる。"
        ],
        implications: [
          "継続的な物流委託と納品取引を棚卸しし、自社が特定荷主・特定物流事業者・特定着荷主・特定発荷主のどの立場になり得るかを整理する。",
          "物流契約・売買契約・発注条件に、荷役、待機、再配達、納品日時変更等の作業範囲と追加費用の負担を反映し、現場が契約外作業を無償で要請しない運用を設ける。",
          "運賃・料金の改定要請を受けた場合の受付、協議、説明、決裁、記録保存のフローを調達・物流・法務で共通化する。",
          "直近の調査で指摘が多い変更・やり直し、支払遅延、買いたたきを優先して、契約と実運用の差を点検する。"
        ],
        uncertain: [
          "『発荷主の利益を不当に害する』かどうかや、規模基準によらず取引上の地位を基準に適用される場面は、個別の取引関係、合意、費用負担、現場での指示経路に左右される。",
          "公取委の物流特殊指定ガイドブックは現時点で2027年4月施行の改正内容を反映していないため、今後公表される改訂版・説明資料と施行後の執行事例を継続確認する。"
        ]
      },
      issues: [
        {
          id: "logistics-consignee-scope",
          title: "自社は特定着荷主・特定発荷主として新しい規制対象になるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "改正物流特殊指定は、一定の資本金・従業員規模の組合せに加え、取引上の優越・劣後関係を基準として特定着荷主・特定発荷主を定義し、販売・製造・修理等の継続取引で物品の引渡しを受ける場面を対象にする。",
          exception: "単に物品の受取場所になっているだけで当然に全ての取引が対象になるわけではなく、告示上の取引類型、継続性、当事者の規模・取引上の地位、運送委託関係を確認する。",
          uncertain: "取引上の地位による適用は個別事情を伴うため、形式的な規模判定だけで対象外と断定しない。",
          sourceIds: [designationSourceId]
        },
        {
          id: "logistics-consignee-extra-work",
          title: "着荷主が契約外の荷役・荷待ち・変更を求めると何が問題になるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "特定着荷主が、運送事業者を通じて特定発荷主に運送以外の役務等を提供させ、又は運送内容の変更・やり直しをさせることで特定発荷主の利益を不当に害する行為は、2027年4月から物流特殊指定上の禁止行為となる。",
          exception: "運送事業者が発荷主の指示・関与なく独自判断で対応した場合や、発荷主・運送事業者の責めに帰すべき事情がある場合などは、同じ評価にならないことがある。",
          uncertain: "事前合意の内容、追加費用の手当、現場での要請経路などを踏まえ『不当に害する』かを個別に確認する。",
          sourceIds: [designationSourceId]
        },
        {
          id: "logistics-price-negotiation",
          title: "運賃・料金の値上げ協議を断ったり説明なしで据え置いたりできるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "物流事業者に費用変動等が生じ、代金額の協議を求められたのに、協議に応じず、又は必要な説明・情報提供をせず一方的に代金を決定して利益を不当に害する行為は、2027年4月施行後の禁止行為に明記される。",
          exception: "協議した結果として価格を据え置くこと自体が直ちに禁止されるわけではなく、協議・説明の実質と価格決定の経緯が重要になる。",
          uncertain: "どの程度の説明・情報提供が必要かは、費用変動、取引内容、交渉経緯などに応じて個別判断となる。",
          sourceIds: [designationSourceId]
        },
        {
          id: "logistics-enforcement-priority",
          title: "物流委託のどこから優先して点検するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "直近の公取委調査で注意喚起が多かった変更・やり直し、支払遅延、買いたたきを優先し、契約条件だけでなく納品・検収・附帯作業・支払・価格改定の実運用まで点検するのが実務的である。",
          exception: "調査結果は現行物流特殊指定に基づく執行状況であり、2027年4月から新設される着荷主規制の違反実績を示すものではない。",
          uncertain: "施行後は着荷主規制を含む新しい類型で執行傾向が変わる可能性があるため、注意・警告・確約・排除措置命令等を継続確認する。",
          sourceIds: [surveySourceId, designationSourceId]
        }
      ],
      sourceIds: [designationSourceId, surveySourceId],
      practicalImpacts: [
        "物流委託・納品取引の棚卸し",
        "発荷主・着荷主・物流事業者の役割整理",
        "荷役・荷待ち・再配達の費用負担",
        "物流契約・売買契約・発注条件",
        "運賃改定の協議・説明記録",
        "納品現場の指示・エスカレーション"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "物流特殊指定・2026年改正（2027年施行）",
      eventType: "regulation_or_guideline",
      lawId: "antimonopoly-logistics-special-designation",
      lawLabel: "物流特殊指定",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: [designationSourceId],
      matchSourceIds: [designationSourceId],
      sourceIds: [designationSourceId],
      articleIds: [designationArticleId, tkiArticleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: designationArticleId,
      title: "特定荷主が物品の運送又は保管を委託する場合等の特定の不公正な取引方法（令和9年4月1日施行）",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-06-18",
      collectedAt: "2026-09-11",
      url: "https://www.jftc.go.jp/dk/guideline/tokuteiunsou.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正告示／施行準備",
      status: "adopted",
      summary: "2027年4月1日施行の改正物流特殊指定本文。発荷主と物流事業者の取引における禁止行為に加え、特定着荷主・特定発荷主を定義し、着荷主が運送事業者を通じて契約外の附帯業務や運送の変更・やり直しをさせ、発荷主の利益を不当に害する行為を新たに規制する。",
      whyImportant: [
        "着荷主規制の対象当事者と禁止行為を告示本文から直接確認できる",
        "価格協議に応じない一方的な代金決定など2027年4月以降の物流取引ルールを一覧できる",
        "発荷主・着荷主・物流事業者の三者関係を契約と現場運用へ落とす基準になる"
      ],
      audience: ["企業法務", "物流・サプライチェーン担当", "調達・購買", "営業・受発注担当"],
      audienceReason: "2027年4月の施行前に、自社が発荷主・着荷主のどちらで規制対象となるか、荷役・荷待ち・価格協議の運用をどこまで見直すか判断するため。",
      categories: ["独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["logistics-consignee-scope", "logistics-consignee-extra-work", "logistics-price-negotiation"],
      primarySourceIds: [designationSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [designationSourceId]
    },
    {
      id: surveyArticleId,
      title: "令和7年度における荷主と物流事業者との取引に関する調査結果等について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-06-25",
      collectedAt: "2026-09-11",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260625_buttokuchousakekka.html",
      sourceType: "primary",
      sourceLabel: "一次資料・執行／実態調査",
      status: "adopted",
      summary: "現行物流特殊指定の遵守状況を確認した公取委の令和7年度調査。問題が疑われる荷主105名への立入調査、779名への注意喚起を行い、不当な給付内容の変更・やり直し、支払遅延、買いたたきなどを主要な問題類型として示す。",
      whyImportant: [
        "物流特殊指定が実際にどの行為を重点的に見ているかを執行データから確認できる",
        "契約書だけでなく現場の変更・やり直しや支払・価格運用を点検すべきことが分かる",
        "2027年の着荷主規制施行前に既存物流取引の弱点を洗い出す優先順位を付けられる"
      ],
      audience: ["企業法務", "物流・サプライチェーン担当", "調達・購買", "コンプライアンス担当"],
      audienceReason: "法令の抽象的な禁止類型を、実際の調査・注意喚起で問題になっている業務へ対応付けるため。",
      categories: ["独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["logistics-enforcement-priority", "logistics-consignee-extra-work", "logistics-price-negotiation"],
      primarySourceIds: [surveySourceId]
    },
    {
      id: tkiArticleId,
      title: "取引適正化の新ルール全体像――『物流特殊指定』の改正と『支払告示』への実務対応",
      publisher: "東京国際法律事務所",
      author: "植村直輝・中村勇道",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-11",
      url: "https://www.tkilaw.com/11800",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2027年4月施行の物流特殊指定改正と支払告示を、パブリックコメント後の確定内容から整理する実務解説。着荷主規制について、事前合意と費用負担、運送事業者の独自判断との境界、協議経緯の記録まで具体化している。",
      whyImportant: [
        "着荷主・発荷主・運送事業者の指示経路を具体例で分け、告示本文だけでは読み取りにくい境界を示す",
        "契約外の附帯業務や変更について事前合意・費用負担・メール等の記録へ落とし込んでいる",
        "物流現場の依頼を契約・費用・証跡の管理へ変換する実務上の補助線になる"
      ],
      audience: ["企業法務", "物流・サプライチェーン担当", "調達・購買", "営業・受発注担当"],
      audienceReason: "改正物流特殊指定の着荷主規制を、納品現場での要請、費用負担、協議記録という具体的なチェック項目へつなげるため。",
      categories: ["独占禁止法・競争法", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["logistics-consignee-scope", "logistics-consignee-extra-work", "logistics-price-negotiation"],
      primarySourceIds: [designationSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [designationSourceId]
    }
  ]);
})();

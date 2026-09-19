(() => {
  const additions = [
    {
      slug: "ma-representation-warranty-insurance",
      title: "M&A表明保証・補償／表明保証保険（W&I）",
      categories: ["M&A", "契約・取引", "危機管理・コンプライアンス"],
      summary: "M&A契約の表明保証・補償と表明保証保険（W&I）を、DD、SPA、保険引受審査、クリーン・エグジット、Sell-Buy-Flip、シンセティックW&Iの関係から整理する。",
      lastUpdated: "2026-09-19",
      lastVerified: "2026-09-19",
      isNew: true,
      overview: [
        "表明保証保険（W&I insurance）は、M&A契約上の表明保証違反により被保険者が被る損害を保険でカバーする仕組みであり、国内M&Aでも利用が広がっている。もっとも、保険を付ければDDやSPA上のリスク配分が不要になるわけではなく、DD・表明保証条項・補償条項・保険証券を一体で設計する必要がある。",
        "2026年9月のNO&T解説が扱うSell-Buy-Flipでは、売主が概算見積り等の初期手配を行い、買主候補への独占交渉権付与後に買主へ保険手配の主体を切り替える。売主のクリーン・エグジットとオークション運営に適する一方、買主側ではDD不足により付保対象外となるリスクを引き受けないよう、保険の利用自体を所与とせず検討する必要がある。",
        "ノン・リコース型の案件では、保険証券が当然に売主の責任を遮断するのではない。保険金請求を買主の唯一・排他的な救済手段とすることや、保険会社から売主への求償を制限すること等をSPA側で整合的に定める必要がある。",
        "2025年10月のNO&T解説は、売主がM&A契約で表明保証を提供しない場合でも、保険証券上に擬似的な表明保証を設けるシンセティックW&Iを紹介する。Distressed M&A、上場会社M&A、売主が表明保証に消極的な案件等で選択肢となり得るが、適切なDDはなお前提であり、既知リスクや欺罔、商品認可・保険発行地等の論点も残る。"
      ],
      currentSummary: {
        facts: [
          "表明保証保険は、M&A契約の表明保証違反による損失を保険でカバーする取引リスク移転手段であり、実務では買主側保険が広く利用されている。",
          "Sell-Buy-Flipでは、売主側が保険ブローカーを通じてNBI（概算見積り）やプロセスノートを準備し、独占交渉権付与後に買主側へ引受審査・保険証券交渉を引き継ぐ。",
          "表明保証保険の引受けでは十分なDDが前提とされ、DDが不足した事項やDDで既に判明したリスクは付保対象外となり得る。",
          "シンセティックW&Iは、売主がSPAで表明保証を提供しない又は一部しか提供しない場合に、保険証券上で擬似的な表明保証を設けて買主を保護する構造である。"
        ],
        interpretations: [
          "表明保証保険はSPAの代替ではなく、SPAと保険証券の二層でリスク配分を設計する手段と捉える。特にノン・リコース型では、売主への請求制限・唯一の救済手段・保険会社の代位求償等をSPAと保険証券で矛盾なく整える必要がある。",
          "Sell-Buy-Flipは売主のクリーン・エグジットを促進する一方、買主には短いオークション日程の中で保険会社の引受審査に耐えるDDを行う負担が生じる。売主側ではVDDを用いて競争性とDDの十分性を両立させる設計が考えられる。",
          "シンセティックW&Iを使っても、保険会社が情報開示とDDを基礎に引受範囲を判断する構造は変わらない。表明保証を契約から消すことと、対象会社リスクの確認を省略することは別問題である。"
        ],
        implications: [
          "M&A初期段階でW&I利用方針を決め、DDスコープ、売主・買主の責任範囲、保険ブローカー・保険会社との交渉工程を全体スケジュールへ組み込む。",
          "オークションでSell-Buy-Flipを使う場合、NBI、プロセスノート、VDD、独占交渉権付与、引受審査、SPA・保険証券締結の順序と情報共有を事前に設計する。",
          "買主は、表明保証条項がSPAに存在するかだけでなく、その事項が実際に付保対象となるか、免責・既知リスク・DD不足がないかを確認する。",
          "売主がクリーン・エグジットを求める場合は、SPAの補償・救済制限と保険証券の求償・免責を突合し、保険だけでノン・リコースが実現するという前提を置かない。"
        ],
        uncertain: [
          "付保可能な表明保証、免責、保険料、必要なDDの深度は、案件・対象事業・保険会社・市場環境によって変わるため、個別案件で早期に保険ブローカー・保険会社へ確認する必要がある。",
          "シンセティックW&Iについては、日本国内での保険商品・認可実務や被保険者・保険証券の発行地等に制約が生じ得るため、利用時点の保険規制・商品提供状況を確認する必要がある。",
          "売主の欺罔等がある場合の責任・代位求償の帰結は、SPA、保険証券、事実関係によって異なり、シンセティックW&Iでも売主が当然に完全免責されるとは限らない。"
        ]
      },
      issues: [
        {
          id: "ma-wi-dd-insurability",
          title: "DDと付保可能性をどう連動させるか",
          status: "interpreted",
          stage: "not_applicable",
          views: [],
          conclusion: "表明保証保険を前提とする場合でも十分なDDを行い、保険会社の引受審査で必要となる情報・専門領域・深度をDDスコープへ反映する。DD不足や既知リスクが付保対象外となる可能性を買主側の残余リスクとして確認する。",
          exception: "必要なDD範囲は対象事業・表明保証事項・保険会社の引受方針によって異なり、全案件に共通する固定スコープはない。",
          uncertain: "個別論点がどの程度のDDを行えば付保対象となるかは案件ごとの引受審査で決まる。",
          sourceIds: ["source-civil-code-current", "source-insurance-act-current"]
        },
        {
          id: "ma-wi-sell-buy-flip",
          title: "Sell-Buy-Flipをオークションへどう組み込むか",
          status: "interpreted",
          stage: "not_applicable",
          views: [],
          conclusion: "売主がNBI・プロセスノート等を準備し、独占交渉権付与後に買主へ引受審査・証券交渉を移す工程を、DD・最終契約交渉と並行して設計する。売主側ではVDDも用い、競争性と付保に必要なDDの十分性を両立させる。",
          exception: "Sell-Buy-Flipはクリーン・エグジットが重要な案件や競争性の高いオークションに適しやすいが、すべてのM&Aで合理的な方式とは限らない。",
          uncertain: "Flipの時点、候補保険会社、費用負担、プロセスノートの内容は案件ごとに調整される。",
          sourceIds: ["source-civil-code-current", "source-insurance-act-current"]
        },
        {
          id: "ma-wi-non-recourse-spa",
          title: "ノン・リコースをSPAと保険証券でどう整合させるか",
          status: "interpreted",
          stage: "not_applicable",
          views: [],
          conclusion: "保険利用だけで売主の責任が消えると考えず、保険金請求を唯一・排他的な救済手段とするか、売主への請求制限・保険会社の代位求償をどう扱うかをSPAと保険証券で整合的に定める。",
          exception: "欺罔、基礎的表明保証、特別補償等について売主責任を残す設計もあり、ノン・リコースの範囲は契約ごとに異なる。",
          uncertain: "売主責任、免責、代位求償の具体的な境界は、SPAと保険証券の条項および準拠法・事実関係に依存する。",
          sourceIds: ["source-civil-code-current", "source-insurance-act-current"]
        },
        {
          id: "ma-wi-synthetic",
          title: "売主が表明保証を提供しない案件でシンセティックW&Iをどう使うか",
          status: "interpreted",
          stage: "not_applicable",
          views: [],
          conclusion: "売主がSPAで表明保証を提供しない又は限定する場合でも、保険証券上に擬似的な表明保証を置くシンセティックW&Iを選択肢として検討できる。ただし、十分なDD、付保範囲・免責、欺罔時の責任、商品提供・認可実務を別途確認する。",
          exception: "シンセティックW&IはDDを不要にする仕組みではなく、売主が表明保証を提供できない又は極めて消極的な局面等で検討される取引手法である。",
          uncertain: "日本国内での提供形態や海外関係法人を被保険者とする必要性等は商品・認可実務の変化があり得るため、利用時点で確認する。",
          sourceIds: ["source-civil-code-current", "source-insurance-act-current"]
        }
      ],
      sourceIds: ["source-civil-code-current", "source-insurance-act-current"],
      referenceArticleIds: [
        "article-noandt-sell-buy-flip-wi-20260918",
        "article-noandt-synthetic-wi-20251006"
      ],
      practicalImpacts: [
        "DDスコープと保険引受審査の連動",
        "Sell-Buy-Flipを含むM&Aプロセス設計",
        "SPAと保険証券のノン・リコース整合",
        "シンセティックW&Iによるリスク移転",
        "既知リスク・免責・求償の管理"
      ]
    }
  ];

  const existing = new Set((window.TOPIC_DATA || []).map((item) => item && item.slug));
  const fresh = additions.filter((item) => !existing.has(item.slug));
  if (fresh.length) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(fresh);
})();
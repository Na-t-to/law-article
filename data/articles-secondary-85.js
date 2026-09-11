(() => {
  const topicSlug = "home-work-allowance-overtime";
  const sourceId = "source-mhlw-home-work-allowance-overtime-2024";
  const primaryArticleId = "article-mhlw-home-work-allowance-overtime-2024";
  const secondaryArticleId = "article-tmi-home-work-allowance-overtime-2024";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "割増賃金の算定におけるいわゆる在宅勤務手当の取扱いについて（令和6年4月5日基発0405第6号）",
      type: "guidance",
      typeLabel: "行政通達・割増賃金／実費弁償",
      authority: "厚生労働省",
      publishedAt: "2024-04-05",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc8495&dataType=1&pageNo=1",
      importance: "最高",
      whyImportant: "在宅勤務手当について、労働基準法11条の賃金として割増賃金の算定基礎に入る場合と、合理的・客観的に算定した実費弁償として算入を要しない場合の境界、計算方法、既存制度を変更する際の不利益変更への留意を厚生労働省が明確化した一次資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "在宅勤務手当・割増賃金／実費弁償",
      categories: ["労務"],
      summary: "在宅勤務手当が賃金として割増賃金の算定基礎に入る場合と、合理的・客観的に算定した実費弁償として除外できる場合を、2024年4月5日厚生労働省通達を基準に整理する。",
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      isNew: true,
      overview: [
        "在宅勤務手当という名称だけで割増賃金の算定基礎から外せるわけではなく、労働基準法11条の賃金に当たるか、事業経営のために必要な実費の弁償と整理できるかで扱いが分かれる。",
        "2024年4月5日の厚生労働省通達は、実費弁償と整理するための外形、合理的・客観的な計算方法、渡切り定額手当の扱い、既存制度を変更する際の不利益変更への留意を示した。",
        "このテーマでは、給与計算だけでなく、就業規則・賃金規程、在宅勤務日数・費用データ、労使説明を一つの運用として整理する。"
      ],
      currentSummary: {
        facts: [
          "労働基準法37条5項と施行規則21条が定める割増賃金の算定基礎から除外される賃金に、在宅勤務手当という独立の除外項目はない。在宅勤務手当が労働基準法11条の賃金に当たる場合は、原則として割増賃金の算定基礎に算入する。",
          "一方、労働者が実際に負担した費用のうち業務使用分を特定し、その金額を精算することが外形上明らかで、就業規則等に在宅勤務の実態を踏まえた合理的・客観的な計算方法が明示されている場合は、実費弁償として賃金に該当せず、割増賃金の算定基礎への算入を要しない。",
          "在宅勤務に通常必要な費用として使わなかった場合にも返還不要の毎月5,000円などの渡切り定額手当は、厚生労働省通達上、実費弁償ではなく賃金に該当し、割増賃金の算定基礎に算入する。",
          "合理的・客観的な計算方法として、国税庁FAQの方法、その一部を簡略化した過去複数月の通信費・電気料金と在宅勤務日数による方法、実費を上回らないよう合理的・客観的に定めた1日単価に在宅勤務日数を乗じる方法などが示されている。",
          "既に割増賃金の算定基礎へ算入している在宅勤務手当を、実費弁償として算入しない扱いへ変更して割増賃金額が減少する場合は、労働条件の不利益変更に当たると考えられ、法令上の手続と事前の十分な労使協議が必要とされている。"
        ],
        interpretations: [
          "制度名を『在宅勤務手当』とするか『実費精算』とするかではなく、実際の支給条件、返還・精算の仕組み、算定式、在宅勤務実態との対応を確認して賃金性を判断する必要がある。",
          "給与計算上の算定基礎だけを変更せず、就業規則・賃金規程に置いた算定方法、在宅勤務日数の記録、通信費・電気料金等の根拠、定期的な再計算を一体で管理する方が通達の要件を説明しやすい。"
        ],
        implications: [
          "在宅勤務手当について、返還不要の定額給付、領収証等による実費精算、通信費・電気料金の按分、日額方式など現在の支給方法を棚卸しする。",
          "実費弁償として扱う場合は、就業規則等に合理的・客観的な計算方法を明示し、在宅勤務日数や費用データから算定根拠を再現できるようにする。",
          "定額方式を採る場合でも、実費を上回らない合理的・客観的な単価設定と見直しを行い、常態として実費を超える部分があればその超過額を賃金として扱う。",
          "従来算定基礎に含めていた手当を除外する場合は、割増賃金の減少、不利益変更、就業規則変更、個別同意や労使説明を別途確認する。"
        ],
        uncertain: [
          "個別企業の計算方法が合理的・客観的で実費を適切に反映しているかは、在宅勤務の頻度、費用構造、算定対象者の選び方、実費との乖離など具体的事情による。",
          "在宅勤務手当は労働法上の賃金性だけでなく、税務上の給与課税や社会保険上の報酬該当性も別制度として確認する必要があり、同じ名称の手当でも各制度の評価を混同しない。"
        ]
      },
      issues: [
        {
          id: "home-work-allowance-wage-or-expense",
          title: "在宅勤務手当は割増賃金の算定基礎に入るか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "在宅勤務手当が労働基準法11条の賃金に該当する場合は割増賃金の算定基礎に算入する。事業経営のために必要な実費を合理的・客観的に算定して弁償するものと整理できる場合は賃金に該当せず、算定基礎への算入を要しない。",
          exception: "手当の名称や在宅勤務者だけに支給していること自体では実費弁償にならず、実際の支給・精算方法を確認する。",
          uncertain: "実費弁償性は個別の制度設計と運用実態によるため、形式上の規程だけでなく実際の計算・精算記録も確認する。",
          sourceIds: [sourceId]
        },
        {
          id: "home-work-allowance-calculation",
          title: "実費弁償として除外できる計算方法は何か",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "就業規則等に在宅勤務の実態を踏まえた合理的・客観的な計算方法を明示し、実際の業務使用額を精算する。国税庁FAQの方法、過去複数月の費用と在宅勤務日数による簡略方式、実費を上回らない合理的な1日単価方式などが例示されている。",
          exception: "常態として支給額が実費を上回る場合は、その超過部分を賃金として割増賃金の算定基礎へ算入する。単価算定の対象者を高額になるよう恣意的に選ぶ方法も合理的・客観的とは認められない。",
          uncertain: "費用や在宅勤務実態が変動するため、一定期間ごとの再計算や実費との乖離確認が必要になる。",
          sourceIds: [sourceId]
        },
        {
          id: "home-work-allowance-fixed-payment",
          title: "返還不要の定額在宅勤務手当を実費弁償として扱えるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "在宅勤務に通常必要な費用として使用しなかった場合でも返還不要の渡切り定額手当は実費弁償に該当せず、賃金として割増賃金の算定基礎へ算入する。",
          exception: "定額的な支給方法そのものが常に否定されるわけではなく、実費を上回らないよう合理的・客観的に定めた1日単価を在宅勤務日数に連動させる方式などは実費弁償となり得る。",
          uncertain: "定額方式が実費弁償と評価できるかは、単価算定の根拠、実費との乖離、在宅勤務日数との連動、見直し方法を確認する。",
          sourceIds: [sourceId]
        },
        {
          id: "home-work-allowance-rule-change",
          title: "既存の在宅勤務手当制度を実費弁償方式へ変えるとき何を確認するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "現在の支給実態と割増賃金計算を確認したうえで、実費弁償方式へ変更するなら算定式・証跡・給与計算を整合させる。従来算定基礎に含めていた手当を除外して割増賃金が減少する場合は、不利益変更として就業規則変更の合理性、個別同意、周知・説明、労使協議を別途検討する。",
          exception: "実費弁償に該当することと、既存の労働条件を有効に変更できることは別問題であり、通達への形式的な適合だけで変更が当然に有効になるわけではない。",
          uncertain: "既存規程、労使慣行、労働者への不利益の程度、必要性、説明・交渉経緯等によって変更の有効性は個別に判断される。",
          sourceIds: [sourceId]
        }
      ],
      sourceIds: [sourceId],
      practicalImpacts: [
        "割増賃金・給与計算",
        "就業規則・賃金規程",
        "在宅勤務費用の実費精算",
        "在宅勤務日数・費用証跡",
        "労働条件の不利益変更・労使説明"
      ]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: primaryArticleId,
      title: "割増賃金の算定におけるいわゆる在宅勤務手当の取扱いについて（令和6年4月5日基発0405第6号）",
      publisher: "厚生労働省",
      author: "厚生労働省労働基準局",
      publishedAt: "2024-04-05",
      collectedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc8495&dataType=1&pageNo=1",
      sourceType: "primary",
      sourceLabel: "一次資料・行政通達／割増賃金",
      status: "adopted",
      summary: "在宅勤務手当について、賃金として割増賃金の算定基礎へ入る場合と、事業経営上必要な実費の弁償として算入を要しない場合を明確化した厚生労働省通達。実費弁償に必要な外形、合理的・客観的な計算方法、渡切り定額手当、既存制度変更時の不利益変更への留意を示す。",
      whyImportant: [
        "在宅勤務手当という名称ではなく、労働基準法11条の賃金か実費弁償かで割増賃金の扱いが分かれることを一次資料から確認できる",
        "通信費・電気料金等について実費弁償と整理し得る計算方法を複数例示しており、給与制度・就業規則へ落とし込みやすい",
        "既に算定基礎へ含めている手当を除外する変更は不利益変更となり得ることを明示し、制度設計と変更手続を切り分けられる"
      ],
      audience: ["人事・労務", "給与・勤怠", "企業法務"],
      audienceReason: "在宅勤務手当を新設・見直しする際に、割増賃金計算、実費精算、就業規則、労使説明を一体で確認するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["home-work-allowance-wage-or-expense", "home-work-allowance-calculation", "home-work-allowance-fixed-payment", "home-work-allowance-rule-change"],
      primarySourceIds: [sourceId],
      whatChanged: "新規テーマ／在宅勤務手当の賃金性と実費弁償の境界、割増賃金の算定基礎、合理的な計算方法、不利益変更を独立テーマとして整理した。"
    },
    {
      id: secondaryArticleId,
      title: "【労働法ブログ】在宅勤務手当と割増賃金の算定基礎への算入の要否（最新の行政通達による取扱いの明確化）",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2024-04-26",
      collectedAt: "2026-09-11",
      url: "https://www.tmi.gr.jp/eyes/blog/2024/15716.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2024年4月5日厚生労働省通達を基礎に、在宅勤務手当を実費弁償として割増賃金の算定基礎から外せる条件、通信費・電気料金等の具体的な計算方法、定額手当との境界、既存制度変更時の不利益変更を実務向けに整理する。",
      whyImportant: [
        "厚生労働省通達の抽象的な実費弁償要件を、就業規則への算定方法の明示、給与計算、費用データの持ち方まで具体化している",
        "合理的・客観的な日額単価や簡略計算と、実費超過部分が賃金となる境界を実務的に説明している",
        "算定基礎から外す制度変更について、就業規則の不利益変更、個別同意、労使慣行、説明・経過措置まで一次資料以上に踏み込んでいる"
      ],
      audience: ["人事・労務", "給与・勤怠", "企業法務"],
      audienceReason: "通達を実際の手当制度・給与規程へ反映し、既存制度を変更する際の労働契約上の論点まで確認するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["home-work-allowance-wage-or-expense", "home-work-allowance-calculation", "home-work-allowance-fixed-payment", "home-work-allowance-rule-change"],
      primarySourceIds: [sourceId],
      whatChanged: "整理変更なし／厚生労働省通達を実務へ落とす参考解説として、計算方法と制度変更時の労働条件変更リスクを補完した。"
    }
  ]);
})();

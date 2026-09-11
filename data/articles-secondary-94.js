(() => {
  const topicSlug = "corporate-takeover-guidelines-2026";
  const baseSourceId = "source-meti-corporate-takeover-guidelines-2023";
  const qaSourceId = "source-meti-corporate-takeover-guidelines-qa-2026";
  const primaryArticleId = "article-meti-corporate-takeover-guidelines-qa-2026";
  const notArticleId = "article-not-corporate-takeover-guidelines-qa-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: baseSourceId,
      title: "企業買収における行動指針－企業価値の向上と株主利益の確保に向けて－",
      type: "guidance",
      typeLabel: "一次資料・経済産業省ガイドライン",
      authority: "経済産業省",
      publishedAt: "2023-08-31",
      url: "https://www.meti.go.jp/shingikai/economy/kosei_baishu/pdf/20230831_2.pdf",
      importance: "最高",
      whyImportant: "上場会社の経営支配権を取得する買収を巡る当事者の行動について、企業価値の向上と株主利益の確保を軸に原則論・ベストプラクティスを示した基礎資料。2026年の解釈・ポイント・Q&Aも、この指針自体を維持することを前提に整理されている。",
      topics: [topicSlug]
    },
    {
      id: qaSourceId,
      title: "「企業買収における行動指針」の解釈・ポイント・Q&A",
      type: "guidance",
      typeLabel: "一次資料・経済産業省Q&A／解釈整理",
      authority: "経済産業省",
      publishedAt: "2026-07-30",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      importance: "最高",
      whyImportant: "2023年の企業買収行動指針を改定せず維持した上で、望ましい買収、真摯な買収提案、取締役会の真摯な検討、企業価値と買収価格、複数提案への対応、取締役の責任リスクなど、実務上認識が割れやすかった論点を具体化した公式資料。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "企業買収における行動指針・2026年Q&A／同意なき買収",
      categories: ["M&A", "会社法・ガバナンス"],
      summary: "上場会社の支配権取得を伴う買収について、2023年の企業買収行動指針と2026年の解釈・ポイント・Q&Aから、真摯な買収提案、取締役会の検討、企業価値と買収価格、複数提案への対応を整理する。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "2023年の企業買収行動指針は、上場会社の経営支配権を取得する買収を巡り、企業価値の向上と株主利益の確保を中心に、社会的に共有されるべき原則論とベストプラクティスを示す。",
        "経済産業省は2026年7月30日、指針そのものを改定するのではなく維持した上で、解釈・ポイント・Q&Aを公表し、実務上誤解や認識の乖離が生じやすかった判断枠組みを具体化した。",
        "対象会社の取締役会は、価格だけで機械的に提案を選ぶのでも、定性的な『企業価値』を理由に恣意的に拒絶するのでもなく、企業価値向上策、取引条件、実現可能性、シナジー・ディスシナジー等を比較し、判断過程と説明可能性を確保することが重要になる。"
      ],
      currentSummary: {
        facts: [
          "2026年7月30日の解釈・ポイント・Q&Aは、2023年の企業買収行動指針の基本的枠組みを変更するものではなく、その趣旨をより適切に理解するための補足資料として策定された。",
          "Q&Aは『望ましい買収』を、対象会社の企業価値が向上し、その増加分が適正な取引条件を通じて買収者と株主の間で公正に分配され、株主共同の利益が確保される一連の流れとして整理する。",
          "『真摯な買収提案』は、具体性、目的の正当性、実現可能性を踏まえて総合的に判断され、個別の例示に一つ該当しただけで直ちに真摯性が否定されるものではない。"
        ],
        interpretations: [
          "相応に高い買収価格は重要な要素だが、それだけで望ましい買収が決まるわけではない。他方、測定困難な定性的価値を過度に強調して経営陣の保身に使うことも避ける必要があり、将来キャッシュフロー又は割引率への合理的な影響として説明することが重要になる。",
          "真摯な検討は、買収者の属性・資力・トラックレコード、取引条件、許認可等の実現可能性を確認し、買収者の企業価値向上策とスタンド・アローン等の選択肢をシナジー・ディスシナジー双方から比較するプロセスとして捉えるのが実務的である。"
        ],
        implications: [
          "上場会社は同意なき買収提案を受領する前から、提案受領窓口、取締役会への報告、真摯性の初期評価、追加質問、企業価値向上策の比較、議事録・説明資料までを一連の対応プロセスとして準備する。",
          "買収者側は、ストラクチャー、対価、資金の裏付け、許認可、スケジュール、買収後の経営方針・企業価値向上策を具体化し、対象会社からの合理的な質問に定量情報を含めて答えられるようにする。",
          "複数提案がある場合は、価格だけでなく企業価値向上への寄与を比較しつつ、株主利益を確保するための条件引上げや他候補の模索等の合理的な努力と、最終判断の説明可能性を記録する。"
        ],
        uncertain: [
          "企業買収行動指針と2026年Q&Aは法令そのものではなくベストプラクティスを示す資料であり、具体的な取締役の善管注意義務・忠実義務違反の有無は個別事案の事実関係や裁判所の判断による。"
        ]
      },
      issues: [
        {
          id: "takeover-guidelines-2026-position",
          title: "2026年Q&Aは企業買収行動指針を改定したものか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "改定ではない。経済産業省は2023年の企業買収行動指針を維持することを前提に、指針の趣旨をより適切に理解するための解釈・ポイント・Q&Aを2026年7月30日に策定した。",
          exception: "補足資料によって実務上の判断枠組みは具体化されているため、指針本文が変わっていないことと、実務上参照すべき内容が増えていないことは同義ではない。",
          uncertain: "ベストプラクティスが個別の取締役責任判断にどの程度影響するかは、具体的な事案と裁判実務による。",
          sourceIds: [baseSourceId, qaSourceId]
        },
        {
          id: "takeover-bona-fide-offer",
          title: "どのような買収提案を『真摯な買収提案』として扱うか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "具体性、目的の正当性、実現可能性を踏まえて総合的に判断する。取引主要条件が不明確、経営方針が示されない、資金の裏付けがない、必要な許認可取得の蓋然性が低い等は真摯性を合理的に疑う要素になり得る。",
          exception: "各要素は総合考慮の例示であり、いずれか一つに該当すれば直ちに真摯性が否定されるわけではない。提案初期にはDDや資金調達交渉等で実現可能性を高める余地がある場合もある。",
          uncertain: "提案の具体性や実現可能性に必要な情報量は、買収ストラクチャー、規制業種、資金調達方法、交渉段階等によって異なる。",
          sourceIds: [qaSourceId]
        },
        {
          id: "takeover-sincere-consideration",
          title: "取締役会の『真摯な検討』では何を比較するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "企業価値の向上に資するかという観点から、買収者・出資者の属性や実績、取引条件、実現可能性を確認し、買収者の企業価値向上策と対象会社のスタンド・アローン等の選択肢を、シナジーとディスシナジーの双方を踏まえて比較する。定量的な比較が望ましい。",
          exception: "定量分析が困難な事項については合理的・説得的な定性的説明で補うことがあり得る。また、買収者への過度な質問を実質的な買収阻止手段として用いてはならない。",
          uncertain: "必要な比較の深度、外部専門家の利用、定量化の程度は、案件規模、提案内容、公表状況、競合提案の有無等で変わる。",
          sourceIds: [qaSourceId]
        },
        {
          id: "takeover-price-enterprise-value",
          title: "最も高い買収価格の提案を常に選ばなければならないか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "常に最高価格だけで決めるものではない。Q&Aは企業価値の向上と株主共同の利益の確保を区別し、高い買収価格を重要な要素としつつ、価格のみで『望ましい買収』を判断する考え方を否定している。",
          exception: "通常、最も企業価値向上に資する提案と最も株主利益が確保される提案は一致すると考えられ、対象会社が買収に応じる方針を決めた場合は、条件引上げや他候補の模索等、株主利益を確保する合理的な努力が求められる。",
          uncertain: "価格の低い提案を選ぶ合理性は、将来キャッシュフロー・割引率への影響やシナジー・ディスシナジー等をどこまで説得的に示せるかに左右される。",
          sourceIds: [qaSourceId]
        },
        {
          id: "takeover-board-discretion-director-duty",
          title: "買収提案を断った結果買収が成立すると取締役の責任になるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "2026年Q&Aは、取締役会が真摯な検討を行った上で買収に応じないと経営判断した場合、結果的に当該買収が成立しても、その判断自体が直ちに善管注意義務違反になることは基本的に想定されないと整理する。",
          exception: "指針は会社法上の善管注意義務・忠実義務を直接定めるものではなく、取締役には指針のベストプラクティスを参照し、企業価値向上のため適切な判断過程を踏むことが期待される。",
          uncertain: "個別案件における義務違反の有無は、情報収集、比較検討、利益相反、判断過程、説明内容等の具体的事実によって判断される。",
          sourceIds: [baseSourceId, qaSourceId]
        }
      ],
      sourceIds: [baseSourceId, qaSourceId],
      practicalImpacts: ["同意なき買収提案の受付・初期評価", "取締役会の情報収集・比較検討プロセス", "買収者への質問と回答資料", "企業価値向上策・スタンドアローン計画の定量比較", "複数買収提案の条件交渉・マーケットチェック", "取締役会議事録・株主への説明"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: primaryArticleId,
      title: "「企業買収における行動指針」のポイント・Q&A等を策定しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-12",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・企業買収行動指針／2026年Q&A",
      status: "adopted",
      summary: "経済産業省が2023年の企業買収行動指針を維持することを前提に、指針の解釈、ポイント、Q&Aを策定したもの。望ましい買収、真摯な買収提案、真摯な検討、企業価値と買収価格、複数提案の選択、取締役の責任リスクなど、上場会社M&Aで判断が割れやすい論点を具体化する。",
      whyImportant: ["2023年指針を改定したのではなく、基本的枠組みを維持したまま実務上の判断枠組みを具体化した資料であることを確認できる", "価格だけでなく企業価値向上をどう評価するか、真摯な買収提案・真摯な検討をどう判定するかの公式な基準線を確認できる", "同意なき買収や複数提案を受けた取締役会の情報収集・比較・説明責任を設計する一次資料になる"],
      audience: ["上場会社の企業法務", "取締役・取締役会事務局", "M&A・経営企画", "IR", "買収者・FA"],
      audienceReason: "支配権取得を伴う買収提案を受けた際の取締役会の判断枠組みと、買収者側が具体化すべき提案内容を公式資料から確認するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["takeover-guidelines-2026-position", "takeover-bona-fide-offer", "takeover-sincere-consideration", "takeover-price-enterprise-value", "takeover-board-discretion-director-duty"],
      primarySourceIds: [qaSourceId],
      whatChanged: "新規整理／企業買収行動指針と2026年の解釈・ポイント・Q&Aを一つの棚にまとめ、真摯な提案、取締役会の検討、企業価値と価格、取締役責任の論点を独立整理。"
    },
    {
      id: notArticleId,
      title: "「企業買収における行動指針」のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤 遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-12",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター・M&A／コーポレートガバナンス",
      status: "adopted",
      summary: "2026年の企業買収行動指針Q&Aを問ごとに読み解き、望ましい買収は最高価格だけで決まらないこと、真摯な提案の判断要素、取締役会による企業価値向上策の比較、定性的要素の扱い、複数提案と取締役責任までを取締役会実務へ落とした解説。",
      whyImportant: ["Q&Aの各問を取締役会が実際に検討する順序へ展開しており、提案受領後の情報収集・比較・説明の実務に直結する", "企業価値を将来キャッシュフローと割引率の観点から捉え、従業員・取引先・経済安全保障等の定性的要素をどこまで考慮できるかを整理している", "最高価格の提案と最も企業価値向上に資する提案が一致しない例外場面、合理的努力、善管注意義務リスクまで一続きで確認できる"],
      audience: ["上場会社の企業法務", "取締役会事務局", "M&A・経営企画", "買収者・FA", "コーポレートガバナンス担当"],
      audienceReason: "公式Q&Aの抽象的な判断枠組みを、買収提案の受領・情報収集・企業価値比較・複数提案の選択・株主説明という実務フローに落として理解するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["takeover-bona-fide-offer", "takeover-sincere-consideration", "takeover-price-enterprise-value", "takeover-board-discretion-director-duty"],
      primarySourceIds: [qaSourceId],
      whatChanged: "整理変更なし／2026年Q&Aの各問を取締役会の具体的な検討・説明プロセスへ落とす代表的な実務解説を追加。"
    }
  ]);
})();

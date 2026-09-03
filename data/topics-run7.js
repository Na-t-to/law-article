window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).concat([
  {
    slug: "tob-large-shareholding-2026",
    title: "公開買付・大量保有報告制度2026",
    categories: ["M&A", "開示・IR", "コーポレートガバナンス"],
    summary: "2026年5月施行の公開買付制度・大量保有報告制度改正を、株式取得、買収実務、株主対話、共同保有、デリバティブ、報告実務から整理する。",
    lastUpdated: "2026-09-02",
    lastVerified: "2026-09-02",
    isNew: true,
    overview: [
      "2024年金商法改正と2025年7月の最終政省令等により、公開買付制度と大量保有報告制度は2026年5月1日から大きく変わりました。",
      "公開買付けでは市場内取引を含む30％ルールなど買付手法に直結する変更があり、大量保有報告では共同保有者、重要提案行為、デリバティブ、報告事項が見直されています。",
      "このテーマでは、上場株式を取得する側だけでなく、買収提案を受ける会社、IR・株主対応、機関投資家との対話にも関係する実務資料をまとめます。"
    ],
    currentSummary: {
      facts: [
        "公開買付制度・大量保有報告制度の主要な改正政省令等は2025年7月4日に公布され、原則2026年5月1日から施行・適用された。",
        "公開買付制度では、株券等所有割合が30％を超える取得について市場内取引も含め義務的公開買付けの対象となる枠組みが導入された。",
        "大量保有報告制度では、共同保有者・重要提案行為等の明確化、一定のデリバティブのロングポジションに係る保有者規律、報告事項の見直し等が行われた。"
      ],
      interpretations: [
        "買付けを市場内・市場外のどちらで行うかだけでは公開買付義務を判断できず、30％到達、直前の取得、適用除外の条件まで一連の取得計画として確認する必要がある。",
        "機関投資家との対話では、対話そのものを避けるより、共同保有の合意や重要提案行為等の要件に照らして具体的な行為を整理する方が実務上有用である。",
        "デリバティブや保有目的の記載拡充により、提出直前の名義株式だけでなく、投資目的・権利・契約関係を早い段階で把握する必要性が高まっている。"
      ],
      implications: [
        "上場株式の取得計画では、30％基準、僅少買付け、並行買付け等の適用可能性を初期段階で確認する。",
        "大量保有報告の対象判定に、共同保有の合意、デリバティブ、重要な契約等を含めた情報収集項目を追加する。",
        "IR・株主対応では、機関投資家との対話や協働エンゲージメントで問題になる法的概念を共有する。",
        "2026年改正後の報告様式・Q&Aを基準に、提出チェックリストと社内エスカレーションを更新する。"
      ],
      uncertain: [
        "共同保有、重要提案行為等、デリバティブの目的要件などは個別事実への評価が残るため、今後の提出実務・当局運用・裁判例を継続確認する。"
      ]
    },
    issues: [
      { id: "tob-thirty-rule", title: "どの株式取得で公開買付けが必要になるか", status: "authoritative", stage: "effective", views: [], conclusion: "30％を超える取得を中心に、市場内外の取得方法、直前の取得、適用除外を合わせて判定する。", exception: "僅少買付けその他の適用除外があり、取得割合だけで一律には決まらない。", uncertain: "複雑な連続取引・関係者取引では個別の取得構造に沿った確認が必要。", sourceIds: ["source-fsa-tob-largeholder-final-2025"] },
      { id: "tob-transaction-design", title: "改正後に買付スキームをどう設計するか", status: "interpreted", stage: "effective", views: [], conclusion: "僅少買付け、並行買付け等の要件を取得目的・時期・割合と合わせ、案件開始時からスケジュールへ組み込む。", exception: "利用できる適用除外は保有割合、過去の取得、買付予定数の上限等で異なる。", uncertain: "新制度下の案件実績が蓄積することで実務慣行がさらに具体化する可能性がある。", sourceIds: ["source-fsa-tob-largeholder-final-2025"] },
      { id: "largeholder-joint-holder", title: "共同保有者・協働エンゲージメントをどう見るか", status: "interpreted", stage: "effective", views: [], conclusion: "共同取得・譲渡や議決権行使の合意を確認し、協働エンゲージメント特例の要件を満たすかを具体的に見る。", exception: "一定の金融商品取引業者等による個別の権利行使ごとの合意等には共同保有から除外される枠組みがある。", uncertain: "継続的な対話・複数の合意がある場合は事実関係ごとの評価が必要。", sourceIds: ["source-fsa-tob-largeholder-final-2025", "source-fsa-largeholder-dialogue-2025"] },
      { id: "largeholder-important-proposal", title: "投資先への対話が重要提案行為等に当たるか", status: "authoritative", stage: "effective", views: [], conclusion: "提案内容と、発行者の事業活動に重大な変更・影響を及ぼす目的があるかを分けて確認する。", exception: "単に会社提案議案への反対可能性や議決権行使内容を示唆するだけで直ちに該当するとは限らない。", uncertain: "提案の態様・強制性・目的は個別事案で評価される。", sourceIds: ["source-fsa-largeholder-dialogue-2025"] },
      { id: "largeholder-derivatives", title: "デリバティブのロングポジションをどう扱うか", status: "interpreted", stage: "effective", views: [], conclusion: "株券取得、重要提案行為、議決権行使への影響など一定の目的を伴うロングポジションでは保有者該当性を確認する。", exception: "現物決済を選べるだけで直ちに株券取得目的が認定されるわけではなく、具体的な目的を確認する。", uncertain: "目的の認定は事実関係に依存するため運用蓄積を要する。", sourceIds: ["source-fsa-tob-largeholder-final-2025", "source-fsa-largeholder-overview-2026"] },
      { id: "largeholder-reporting", title: "大量保有報告書の提出・記載をどう更新するか", status: "authoritative", stage: "effective", views: [], conclusion: "5％超の提出義務を基礎に、改正後の保有者範囲、保有目的、重要な契約等の記載を現行様式で確認する。", exception: "特例報告の適用や共同保有者の有無等により提出方法・計算が変わる。", uncertain: "2026年度の重点レビューを通じ、記載実務が具体化する可能性がある。", sourceIds: ["source-fsa-largeholder-overview-2026", "source-fsa-tob-largeholder-final-2025"] }
    ],
    sourceIds: ["source-fsa-tob-largeholder-final-2025", "source-fsa-largeholder-dialogue-2025", "source-fsa-largeholder-overview-2026"],
    practicalImpacts: ["公開買付要否判定", "株式取得スケジュール", "大量保有報告チェックリスト", "デリバティブ情報収集", "IR・株主対話", "共同保有者管理"]
  },
  {
    slug: "advertising-display-control",
    title: "景品表示法・広告表示管理",
    categories: ["消費者法", "危機管理・コンプライアンス"],
    summary: "No.1表示、口コミ・ステルスマーケティング等を中心に、広告主が表示根拠と外部委託・投稿施策をどう管理するかを整理する。",
    lastUpdated: "2026-09-02",
    lastVerified: "2026-09-02",
    isNew: true,
    overview: [
      "景品表示法の広告表示管理では、完成した文言だけでなく、表示を支える調査・データと、広告主が第三者の表示内容へどのように関与したかが問題になります。",
      "No.1表示については2024年の消費者庁実態調査が調査設計と広告主の確認責任を具体化し、ステルスマーケティングでは口コミへの便益提供を含む執行事例が出ています。",
      "このテーマでは、マーケティング施策を法務審査へ持ち込む際に確認すべき根拠、委託先、投稿・レビュー施策、記録・再発防止を資料から追います。"
    ],
    currentSummary: {
      facts: [
        "消費者庁の2024年No.1表示実態調査は、合理的な根拠の条件として比較対象、調査対象者、調査方法、表示と結果の対応を整理した。",
        "ステルスマーケティング告示は2023年10月1日から施行され、商品・サービスを供給する事業者の表示であることを一般消費者が判別しにくい表示を規制対象とする。",
        "2024年6月の措置命令では、Googleマップで星4・星5の口コミ投稿を条件に割引を与えた行為がステルスマーケティング告示に該当するとされた。"
      ],
      interpretations: [
        "広告審査では『No.1』という文言だけを見るのではなく、その表示が想起させる調査対象と実際の調査設計が一致しているかまで確認する必要がある。",
        "調査会社、広告代理店、インフルエンサー等へ外注しても、広告主側が根拠や表示の形成過程を把握できない状態はリスクを残す。",
        "口コミ・レビュー施策は第三者投稿の形式でも、報酬・割引・投稿条件など事業者の関与の程度から広告表示管理の対象になり得る。"
      ],
      implications: [
        "No.1・満足度・推奨率等の表示は、比較対象、回答者属性、設問、調査方法、結果原票を広告承認時に確認する。",
        "調査会社・広告代理店への委託条件に、根拠資料の提示・保存と調査方法の説明を組み込む。",
        "口コミ、レビュー、SNS投稿への割引・謝礼・クーポン等は、事業者の表示に当たるかと広告明示の方法を企画段階で確認する。",
        "表示根拠と第三者への依頼内容を後から追えるよう、承認・変更・証拠保存の担当を決める。"
      ],
      uncertain: [
        "表示全体から一般消費者が受ける認識や、第三者の自主性がどこまで残るかは個別施策によるため、執行事例の蓄積を継続確認する。"
      ]
    },
    issues: [
      { id: "display-no1-evidence", title: "No.1・満足度表示の根拠をどう確認するか", status: "authoritative", stage: "effective", views: [], conclusion: "比較対象、調査対象者、調査方法が適切で、表示内容と調査結果が対応しているかを広告主側で確認する。", exception: "表示文言や注記によって消費者が受ける認識が変わるため、調査の名称だけで適法性は決まらない。", uncertain: "『～したいNo.1』等の個別表示は表示全体に応じた判断が残る。", sourceIds: ["source-caa-no1-report-2024"] },
      { id: "display-advertiser-control", title: "広告主は委託先・根拠資料をどう管理するか", status: "interpreted", stage: "effective", views: [], conclusion: "広告主自身が表示根拠を確認し、表示に関する情報共有、担当者、根拠資料の保存、問題判明時の是正を運用として持つ。", exception: "必要な管理措置の具体的な程度は事業規模・表示内容・委託形態等で異なる。", uncertain: "新しい広告手法・生成AI利用等では既存の管理方法をどう適用するか継続確認が必要。", sourceIds: ["source-caa-no1-report-2024", "source-caa-stealth-guidebook-2024"] },
      { id: "display-stealth-marketing", title: "第三者投稿が事業者の表示になるのはいつか", status: "authoritative", stage: "effective", views: [], conclusion: "投稿内容の決定への関与、依頼・指示、便益提供等の実態から事業者の表示かを見て、広告であることが一般消費者に明瞭かを確認する。", exception: "第三者が自主的な意思で投稿し、事業者の表示内容決定への関与が認められない場合は事業者の表示とはならない。", uncertain: "新しいSNS・レビュー施策では関与の評価が事実関係に依存する。", sourceIds: ["source-caa-stealth-guidebook-2024", "source-caa-stealth-first-order-2024"] }
    ],
    sourceIds: ["source-caa-no1-report-2024", "source-caa-stealth-guidebook-2024", "source-caa-stealth-first-order-2024"],
    practicalImpacts: ["広告審査", "No.1調査の証拠管理", "広告代理店・調査会社管理", "口コミ・レビュー施策", "SNS・インフルエンサー施策", "表示根拠の保存・是正"]
  }
]);

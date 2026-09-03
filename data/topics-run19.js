window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).concat([
  {
    slug: "tender-offer-large-shareholding",
    title: "公開買付・大量保有報告制度",
    categories: ["会社法", "M&A", "金融商品取引・開示・IR"],
    summary: "2026年5月施行の公開買付制度・大量保有報告制度改正を中心に、30％ルール、市場内取得、僅少買付け、共同保有者、重要提案行為等を上場会社・投資家双方の実務から整理する。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "2026年5月1日から、公開買付制度は市場内取引（立会内）も30％ルールの対象となり、既に30％超を保有する者の追加取得にも原則としてTOBが必要となる一方、0.5％未満の僅少買付け等の例外が設けられました。",
      "大量保有報告制度では、共同保有者・重要提案行為等の範囲が見直され、現金決済型エクイティ・デリバティブやみなし共同保有者の規律も整備されています。",
      "この棚では、買収・株式取得のストラクチャー設計と、IR・アクティビスト対応や機関投資家の協働エンゲージメントを同じ制度変更として追います。"
    ],
    currentSummary: {
      facts: [
        "令和6年改正金商法に伴う政令・内閣府令・ガイドライン・Q&Aは一部を除き2026年5月1日から施行・適用された。",
        "公開買付けの30％ルールは市場内取引を対象に含み、僅少買付け等は所有割合の増加が0.5％未満であること等を要件とする。",
        "大量保有報告では共同保有者・重要提案行為等の範囲、現金決済型エクイティ・デリバティブ、みなし共同保有者等が見直された。"
      ],
      interpretations: [
        "M&Aの株式取得では、市場外・市場内という従来の区分だけでTOB要否を判断せず、取得後割合、直近6か月の取得、間接取得、特別関係者等を含めて確認する必要がある。",
        "投資家との対話や複数投資家の協働行動は、内容・合意の程度によって重要提案行為等や共同保有者の論点となるため、会社側も報告書だけでなく対話内容の背景を理解する必要がある。"
      ],
      implications: [
        "上場株式取得・M&Aの初期ストラクチャー検討にTOBチェックを組み込み、僅少買付けの6か月要件や間接取得も確認する。",
        "IR・株主対応では、大量保有報告の保有目的や共同保有関係の変化を、アクティビスト対応や同意なき買収への備えと結び付けてモニターする。"
      ],
      uncertain: [
        "間接取得の目的要件や共同保有・重要提案行為の具体的な境界は個別事実に依存し、今後の実務・当局対応の蓄積が重要になる。"
      ]
    },
    issues: [
      { id: "tob-30-percent-rule", title: "市場内取得を含む30％ルールでいつTOBが必要か", status: "authoritative", stage: "effective", views: [], conclusion: "市場内取引も含め、株券等所有割合が30％を超える取得等は原則として公開買付規制の対象になるため、取得方法だけでなく取得前後の割合と適用除外を確認する。", exception: "法令上の適用除外や僅少買付け等に該当する場合は公開買付けを要しない。", uncertain: "間接取得等の目的要件は個別事実の評価が必要。", sourceIds: ["source-fsa-tob-largeholding-final-2025"] },
      { id: "tob-de-minimis", title: "30％超保有者の少量追加取得はどこまで許されるか", status: "authoritative", stage: "effective", views: [], conclusion: "一定の条件の下、取得による所有割合の増加が0.5％未満で、原則として直前6か月に対象株券等の買付け等をしていない場合などは僅少買付け等の例外を検討できる。", exception: "公開買付け・適用除外買付け等や一連の取引の評価など、法令・Q&A上の細部を確認する必要がある。", uncertain: "複雑な取得履歴や特別関係者を介する取引では事実認定が問題になり得る。", sourceIds: ["source-fsa-tob-largeholding-final-2025"] },
      { id: "largeholding-important-proposal", title: "企業との対話はどこから重要提案行為等になるか", status: "authoritative", stage: "effective", views: [], conclusion: "投資先企業との対話の内容を、法令・大量保有Q&Aで整理された重要提案行為等の範囲に照らして判断する。", exception: "企業価値向上に向けた通常の対話が直ちに重要提案行為等になるわけではない。", uncertain: "個別の要求内容・具体性・意思決定への働きかけの程度で評価が変わる。", sourceIds: ["source-fsa-largeholding-dialogue-2025", "source-fsa-tob-largeholding-final-2025"] },
      { id: "largeholding-joint-holder", title: "協働エンゲージメントは共同保有に当たるか", status: "authoritative", stage: "effective", views: [], conclusion: "複数投資家が協働する場合でも、個別の権利行使についてどのような合意があるか等を確認し、共同保有者該当性を判断する。", exception: "中長期的な企業価値向上を目的とする意見交換や協働が当然に共同保有となるものではない。", uncertain: "合意の内容・証拠・継続性など具体的な事実関係に左右される。", sourceIds: ["source-fsa-largeholding-dialogue-2025", "source-fsa-tob-largeholding-final-2025"] },
      { id: "largeholding-derivatives", title: "現金決済型エクイティ・デリバティブをどう扱うか", status: "authoritative", stage: "effective", views: [], conclusion: "一定の要件を満たす現金決済型エクイティ・デリバティブは大量保有報告制度の対象となり得るため、権利の内容と株券等への換算方法を確認する。", exception: "すべてのデリバティブが一律に対象となるわけではなく、法令上の適用要件がある。", uncertain: "複雑なデリバティブ設計では個別検討が必要。", sourceIds: ["source-fsa-tob-largeholding-final-2025"] }
    ],
    sourceIds: ["source-fsa-tob-largeholding-final-2025", "source-fsa-largeholding-dialogue-2025"],
    practicalImpacts: ["TOB要否チェック", "株式取得ストラクチャー", "大量保有報告モニタリング", "IR・株主対話", "アクティビスト対応"]
  },
  {
    slug: "corporate-takeover-guidelines",
    title: "企業買収行動指針・同意なき買収",
    categories: ["会社法", "M&A", "コーポレートガバナンス"],
    summary: "企業買収行動指針と2026年のポイント・Q&Aを基礎に、望ましい買収、真摯な買収提案、取締役会の検討、情報取得・判断記録を整理する。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "経済産業省は2023年の企業買収行動指針を維持した上で、2026年7月30日にポイント・Q&A等を公表し、実務で誤解が生じやすい判断枠組みを具体化しました。",
      "Q&Aは、買収価格が高いことだけで望ましい買収と決める考え方を否定し、企業価値向上と株主共同の利益の双方を評価することを示しています。",
      "真摯な買収提案かどうかは具体性、目的の正当性、実現可能性を総合評価し、真摯な提案を受けた取締役会は企業価値向上の観点から情報を集めて検討します。"
    ],
    currentSummary: {
      facts: [
        "2026年7月30日のポイント・Q&A等は2023年指針を改定するものではなく、その趣旨と判断枠組みを具体化した資料である。",
        "真摯な買収提案は具体性、目的の正当性、実現可能性が合理的に疑われるかを総合的に検討する。",
        "取締役会は真摯な検討を行った上で、買収提案への対応だけでなくスタンドアローンや第三者との提携等も含む戦略的選択肢を判断できる。"
      ],
      interpretations: [
        "取締役会は高値提示だけで判断せず、買収者の属性・資力・トラックレコード、買収後の経営方針、許認可、条件・時期などを企業価値向上との関係で確認する必要がある。",
        "『真摯でない』との入口判断を広く使って検討を回避すると指針の趣旨に反するため、拒否・追加情報要求・検討継続の理由を記録できる状態が重要になる。"
      ],
      implications: [
        "同意なき買収提案を受領した場合の初動手順に、提案の具体性・目的・資金裏付け・許認可・買収後方針の確認項目を入れる。",
        "取締役会資料では買収価格だけでなく企業価値向上策、実現可能性、代替案を比較し、判断過程を残す。"
      ],
      uncertain: [
        "指針・Q&Aは法令上の一律ルールではなく、個々の買収提案への具体的な対応は会社の状況・提案内容・取締役の善管注意義務等に応じて判断される。"
      ]
    },
    issues: [
      { id: "takeover-desirable", title: "『望ましい買収』は何で判断するか", status: "authoritative", stage: "effective", views: [], conclusion: "企業価値が向上し、その増加分が適正な取引条件により買収者・株主間で公正に分配され、株主共同の利益が確保されるかを見る。", exception: "高い買収価格は重要な要素だが、それだけで望ましい買収と決まるものではない。", uncertain: "企業価値向上策の評価には将来予測が含まれる。", sourceIds: ["source-meti-takeover-guideline-qa-2026"] },
      { id: "takeover-bona-fide", title: "どの提案を『真摯な買収提案』として扱うか", status: "authoritative", stage: "effective", views: [], conclusion: "具体性、目的の正当性、実現可能性が合理的に疑われる事情を総合考慮し、真摯な提案か判断する。", exception: "資金裏付け不足等の例示の一つに当たるだけで直ちに真摯性が否定されるわけではない。", uncertain: "総合判断であり、提案の成熟度や交渉経緯によって評価が変わる。", sourceIds: ["source-meti-takeover-guideline-qa-2026"] },
      { id: "takeover-board-review", title: "取締役会は真摯な提案をどう検討するか", status: "authoritative", stage: "effective", views: [], conclusion: "企業価値向上の観点から、買収者、取引条件、実現可能性、買収後の経営方針等を検討し、買収に応じるか代替策を選ぶか判断する。", exception: "真摯な検討後の経営判断には一定の裁量がある。", uncertain: "必要な情報量・外部専門家関与等は案件の規模・緊急性・利益相反状況に応じる。", sourceIds: ["source-meti-takeover-guideline-qa-2026"] }
    ],
    sourceIds: ["source-meti-takeover-guideline-qa-2026"],
    practicalImpacts: ["買収提案受領時の初動", "取締役会資料", "情報要求リスト", "同意なき買収対応", "判断過程の記録"]
  },
  {
    slug: "early-business-recovery",
    title: "早期事業再生法・多数決型私的整理",
    categories: ["契約", "会社法", "事業再生・金融"],
    summary: "2026年12月11日施行の早期事業再生法について、金融債権者の多数決と裁判所認可、対象債権、指定確認調査機関、従来の私的整理との使い分けを整理する。",
    lastUpdated: "2026-09-03",
    lastVerified: "2026-09-03",
    isNew: true,
    overview: [
      "早期事業再生法は、倒産状態に至る前の事業者が、指定確認調査機関の関与の下で金融債権を調整する新しい事業再生手続で、2026年12月11日に施行されます。",
      "従来の準則型私的整理が金融債権者全員の同意を基本としてきたのに対し、一定の場合は総議決権額の4分の3以上の賛成と裁判所認可により反対債権者も拘束する権利変更を可能にします。",
      "対象は金融債権が中心で、取引債権・租税債権等を一律に巻き込む法的整理とは異なるため、資金繰りが悪化した際の第三の選択肢として手続の適合性を早い段階で見極める必要があります。"
    ],
    currentSummary: {
      facts: [
        "2026年6月30日に施行規則・資産評定基準・Q&Aが公表され、2026年12月11日の施行に向け制度詳細が具体化された。",
        "制度は経済的に窮境に陥るおそれのある事業者が早期に利用でき、手続開始時の公示を伴わず金融債権を中心に調整する。",
        "全員同意が得られない場合でも、原則として総議決権額の4分の3以上の賛成と裁判所認可により権利変更を成立させ得る。"
      ],
      interpretations: [
        "法的整理による信用・事業価値の毀損を避けたい一方、従来の私的整理では一部債権者の反対で全員同意が難しい案件が主要な利用場面になり得る。",
        "利用可能性の検討では、対象債権・担保部分、金融債権者構成、必要な多数、事業再生計画の実現可能性を早期に把握することが重要になる。"
      ],
      implications: [
        "事業会社は資金繰り危機が深刻化する前に、従来型私的整理・早期事業再生法・法的整理の選択肢を比較する。",
        "金融機関・債権管理部門は対象債権、担保評価、議決権、裁判所認可を見据えた意思決定・案件管理体制を準備する。"
      ],
      uncertain: [
        "新制度のため、裁判所認可の実務、指定確認調査機関の運用、従来手続からの移行などは施行後の事例蓄積を継続確認する必要がある。"
      ]
    },
    issues: [
      { id: "ebr-eligibility", title: "どの段階・事業者が制度を使えるか", status: "pending", stage: "enacted", views: [], conclusion: "倒産状態に至る前の経済的に窮境に陥るおそれのある事業者が、法令・Q&Aの利用要件を満たすか確認する。", exception: "事業者の状態や再生可能性等の要件を満たさない場合は利用できない。", uncertain: "制度開始後の利用判断・指定確認調査機関の運用蓄積が必要。", sourceIds: ["source-meti-early-business-recovery-rules-2026"] },
      { id: "ebr-financial-claims", title: "どの債権・担保が多数決の対象になるか", status: "pending", stage: "enacted", views: [], conclusion: "対象となる金融機関等・貸付債権等と、担保でカバーされる部分などの扱いを施行規則・Q&Aで確認する。", exception: "取引債権・租税債権などは制度の対象外であり、金融債権でも対象範囲の確認が必要。", uncertain: "担保価値や対象債権額の評価が争点となる案件では実務調整が必要。", sourceIds: ["source-meti-early-business-recovery-rules-2026"] },
      { id: "ebr-voting-court", title: "多数決と裁判所認可で何が変わるか", status: "pending", stage: "enacted", views: [], conclusion: "全員同意がない場合でも、原則として総議決権額の4分の3以上の賛成等と裁判所認可により権利変更を成立させ得る。", exception: "多数決だけで自動的に成立するのではなく、裁判所認可等の法定手続が必要。", uncertain: "認可判断や異議・不服申立てを含む実務は施行後の蓄積を要する。", sourceIds: ["source-meti-early-business-recovery-rules-2026"] },
      { id: "ebr-process", title: "従来の私的整理・法的整理とどう使い分けるか", status: "pending", stage: "enacted", views: [], conclusion: "全員同意の見込み、事業価値毀損リスク、対象債権、時間、必要なスポンサー・資金等を踏まえ、従来型私的整理、早期事業再生法、法的整理を比較する。", exception: "全員同意が現実的な案件では従来の私的整理が適する場合もある。", uncertain: "施行後の利用事例により典型的な選択場面が形成される。", sourceIds: ["source-meti-early-business-recovery-rules-2026"] }
    ],
    sourceIds: ["source-meti-early-business-recovery-rules-2026"],
    practicalImpacts: ["資金繰り危機の早期対応", "事業再生手続の選択", "金融債権者調整", "担保・議決権確認", "取締役会・経営会議の意思決定"]
  }
]);

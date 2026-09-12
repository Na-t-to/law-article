(() => {
  const topicSlug = "ip-intangible-assets-governance-disclosure";
  const sourceV2 = "source-cas-ip-intangible-governance-v2-2023";
  const sourcePractice = "source-jpo-ip-management-guidebook-2024";
  const sourceDisclosure = "source-jpo-ip-disclosure-guidebook-2025";
  const sourceGuidance = "source-cas-ip-intangible-guidance-2026";
  const sourceRevision = "source-cao-ip-intangible-guideline-revision-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceV2,
      title: "知財・無形資産ガバナンスガイドライン Ver.2.0",
      type: "guidance",
      typeLabel: "一次資料・内閣府／知財・無形資産ガバナンス",
      authority: "内閣府 知的財産戦略推進事務局",
      publishedAt: "2023-03-27",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/tyousakai/tousi_kentokai/index.html",
      importance: "最高",
      whyImportant: "知財・無形資産の投資・活用について、5つのプリンシプル、7つのアクションと企業・投資家・金融機関のコミュニケーション・フレームワークを示す基礎資料。上場会社だけでなく、非上場企業や金融機関との対話にも活用が想定されている。",
      topics: [topicSlug]
    },
    {
      id: sourcePractice,
      title: "知財経営への招待～知財・無形資産の投資・活用ガイドブック～",
      type: "guidance",
      typeLabel: "一次資料・特許庁／実践ガイドブック",
      authority: "特許庁",
      publishedAt: "2024-04-24",
      url: "https://www.meti.go.jp/press/2024/04/20240424005/20240424005.html",
      importance: "高",
      whyImportant: "知財・無形資産の投資・活用と情報開示を、企業が実際に着手できる実践事項と事例へ落とした公式ガイドブック。ガバナンス原則を経営・事業・知財部門の行動へ接続する資料になる。",
      topics: [topicSlug]
    },
    {
      id: sourceDisclosure,
      title: "企業成長の道筋～投資家との対話の質を高める知財・無形資産の開示～",
      type: "guidance",
      typeLabel: "一次資料・特許庁／開示・対話ガイドブック",
      authority: "特許庁",
      publishedAt: "2025-04-28",
      url: "https://www.meti.go.jp/press/2025/04/20250428002/20250428002.html",
      importance: "高",
      whyImportant: "知財・無形資産の開示について、企業と投資家の視点のギャップ、価値創造の道筋、建設的対話の進め方、チェックリストを整理した公式資料。IR・経営企画・知財・R&Dを横断する実務に使える。",
      topics: [topicSlug]
    },
    {
      id: sourceGuidance,
      title: "価値創造を加速する知財・無形資産投資・活用のガイダンス",
      type: "guidance",
      typeLabel: "一次資料・内閣府／2026年知財・無形資産投資・活用ガイダンス",
      authority: "内閣府 知的財産戦略推進事務局",
      publishedAt: "2026-08-03",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/tyousakai/tousi_kentokai/tousi_guidance.html",
      importance: "最高",
      whyImportant: "2026年改訂コーポレートガバナンス・コードを受け、知財・無形資産を成長投資の柱として取締役会等が扱う際の5つの主要ボトルネックと対応の方向性を具体化した現行ガイダンス。短期利益とのジレンマ、参入障壁・価格決定力、部門連携、人材配置、投資家発信まで一体で扱う。",
      topics: [topicSlug]
    },
    {
      id: sourceRevision,
      title: "小野田内閣府特命担当大臣記者会見要旨（知財・無形資産ガバナンスガイドライン改訂方針）",
      type: "guidance",
      typeLabel: "一次資料・内閣府／今後の改訂方針",
      authority: "内閣府",
      publishedAt: "2026-08-04",
      url: "https://www.cao.go.jp/minister/2602_k_onoda/kaiken/20260804.html",
      importance: "高",
      whyImportant: "2026年8月ガイダンスを踏まえ、企業等のフィードバックを取り込みながら、より具体的な原則・アクションを示す知財・無形資産ガバナンスガイドラインの改訂を2026年度中に行う予定であることを公式に確認できる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "知財・無形資産ガバナンス／開示",
      categories: ["会社法・ガバナンス", "知的財産", "金融商品取引・開示・IR"],
      summary: "知財・ブランド・データ・ノウハウ等の無形資産を、権利保護だけでなく経営戦略・成長投資・取締役会の監督・投資家対話へ接続するための政府ガイダンスと実務解説を追う。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "知財・無形資産は、保有件数や権利管理だけでは企業価値への寄与が見えにくい。政府資料は、経営戦略から逆算して創出・取得・強化・保護・収益化を設計し、競争優位や顧客価値、財務成果への因果を説明する方向へ重心を移している。",
        "2026年8月のガイダンスは、同年7月改訂のコーポレートガバナンス・コードを受け、取締役会等に期待される対応を5つの主要ボトルネックに沿って具体化した。特に、無形資産投資が短期利益を押し下げて見える問題、参入障壁・価格決定力への接続、部門連携・人材配置、中長期投資家への発信が一体の課題として扱われている。",
        "この領域は法令上の一律義務だけを整理する棚ではない。コーポレートガバナンス・コードと政府ガイダンスを背景に、経営・知財・R&D・事業・IRが何を共通言語にし、どこまで説明可能な価値創造ストーリーを作るかを見るための棚として扱う。"
      ],
      currentSummary: {
        facts: [
          "2023年3月の知財・無形資産ガバナンスガイドラインVer.2.0は、5つのプリンシプル、7つのアクションに加え、企業と投資家・金融機関の思考構造のギャップを埋めるコミュニケーション・フレームワークを示した。",
          "特許庁は2024年に投資・活用の実践ガイドブック、2025年に開示・投資家対話に焦点を当てたガイドブックを公表し、原則論から社内実装・開示へ資料を具体化している。",
          "2026年8月3日の新ガイダンスは、2026年改訂コーポレートガバナンス・コードを踏まえ、知財・無形資産を成長投資の重要な柱と位置付け、5つの主要ボトルネックに対する対応の方向性を具体例とともに示した。",
          "内閣府は2026年8月4日、企業等からのフィードバックも踏まえ、より具体的な原則・アクションを示す知財・無形資産ガバナンスガイドラインの改訂を2026年度中に行う予定と説明している。"
        ],
        interpretations: [
          "実務上の中心課題は『知財を何件持つか』ではなく、どの知財・無形資産がどの顧客価値・競争優位・収益力・将来成長を支えるかを因果で説明できる状態にすることへ移っている。",
          "無形資産投資は費用処理等によって短期利益を悪化させて見せることがあるため、単年度利益だけで投資を切らず、回収までの時間軸、先行指標、事業KPI、資本効率との接続を設計する必要がある。",
          "知財部門単独の権利管理では足りず、経営企画・事業・R&D・人事・IR等が同じ価値創造ストーリーを共有し、取締役会の監督と投資家対話まで一貫させることが求められる。"
        ],
        implications: [
          "中期経営計画や事業戦略ごとに、競争優位を支える知財・無形資産、必要な投資、回収時間軸、先行KPIと財務成果のつながりを可視化する。",
          "取締役会資料では知財件数や研究開発費の報告にとどめず、創出・取得・強化・保護・収益化の方針と、参入障壁・価格決定力・事業ポートフォリオへの寄与を議論できる形にする。",
          "統合報告書、コーポレート・ガバナンス報告書、決算説明等の開示では、投資額の多寡だけでなく、どの価値創造ストーリーのどこに効く投資かを一貫して説明する。"
        ],
        uncertain: [
          "2026年8月ガイダンスはソフトローであり、記載事項がそのまま一律の法的義務になるわけではない。上場会社については2026年改訂コーポレートガバナンス・コードとの関係を踏まえて自社の説明・対応を検討する必要がある。",
          "知財・無形資産ガバナンスガイドラインは2026年度中の改訂が予定されており、最終的な原則・アクションの内容や、現行Ver.2.0からの具体的な差分は未確定である。"
        ]
      },
      issues: [
        {
          id: "ip-intangible-board-strategy",
          title: "知財・無形資産を経営戦略と取締役会の監督へどう組み込むか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "自社の競争優位・顧客価値・成長シナリオから逆算し、必要な知財・無形資産の創出・取得・強化・保護・収益化を経営戦略として整理し、取締役会が成長投資として監督・説明できる形にする。",
          exception: "政府ガイダンスはソフトローであり、すべての企業に同一の体制やKPIを法的に強制するものではない。企業規模、事業モデル、上場状況等に応じて実装は異なる。",
          uncertain: "2026年度中に予定されるガバナンスガイドライン改訂で、原則・アクションがどこまで具体化されるかは未確定。",
          sourceIds: [sourceV2, sourceGuidance, sourceRevision]
        },
        {
          id: "ip-intangible-investment-return",
          title: "無形資産投資の効果と時間軸をどう可視化するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "短期利益だけで評価せず、投資対象、価値創造への因果パス、回収までの時間軸、先行KPI、事業・財務成果を組み合わせて、中長期投資としての合理性を説明できるようにする。",
          exception: "知財・無形資産の価値を単一の金額や指標へ機械的に換算することが目的ではなく、事業特性に応じて因果と不確実性を示すことが重要。",
          uncertain: "資本効率や財務指標との接続方法は業種・投資類型によって異なり、標準化された唯一のKPIセットは示されていない。",
          sourceIds: [sourcePractice, sourceGuidance]
        },
        {
          id: "ip-intangible-cross-functional-execution",
          title: "経営・事業・R&D・知財・IRをどう連携させるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "知財部門に閉じず、経営戦略・事業戦略と知財戦略をつなぐ責任者・会議体・人材配置を設け、投資判断から権利化・秘匿・標準化・収益化・開示まで部門横断で管理する。",
          exception: "専任組織の新設が必須という趣旨ではなく、既存の経営会議・事業審査・IRプロセスに統合する方法もあり得る。",
          uncertain: "望ましい組織形態や責任分界は企業規模・事業構造によって異なる。",
          sourceIds: [sourcePractice, sourceGuidance]
        },
        {
          id: "ip-intangible-disclosure-dialogue",
          title: "知財・無形資産を投資家へどう開示し対話するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "知財の保有実績を並べるのではなく、目指す企業像・事業戦略から顧客価値、競争優位、知財・無形資産の役割、投資・施策、事業・財務成果へ至る価値創造ストーリーを示し、投資家との対話で検証・改善する。",
          exception: "競争上重要な営業秘密や技術情報まで開示する必要はなく、秘密保持と資本市場への説明のバランスを取る。",
          uncertain: "開示の粒度やKPIは企業・業種ごとに異なり、2026年度中のガイドライン改訂で追加の具体化が行われる可能性がある。",
          sourceIds: [sourceV2, sourceDisclosure, sourceGuidance]
        }
      ],
      sourceIds: [sourceV2, sourcePractice, sourceDisclosure, sourceGuidance, sourceRevision],
      practicalImpacts: ["取締役会・経営会議の成長投資レビュー", "中期経営計画・事業ポートフォリオ", "知財戦略・オープン＆クローズ戦略", "研究開発・新規事業の投資評価", "知財・R&D・事業・経営企画・IRの部門連携", "統合報告書・コーポレートガバナンス報告書・IR対話"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-cas-ip-intangible-governance-v2-2023",
      title: "知財・無形資産ガバナンスガイドライン Ver.2.0",
      publisher: "内閣府 知的財産戦略推進事務局",
      author: "知財投資・活用戦略の有効な開示及びガバナンスに関する検討会",
      publishedAt: "2023-03-27",
      collectedAt: "2026-09-12",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/tyousakai/tousi_kentokai/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・知財／無形資産ガバナンス",
      status: "adopted",
      summary: "知財・無形資産の投資・活用を企業価値向上へ結び付けるため、5つのプリンシプル、7つのアクションと、企業・投資家・金融機関のコミュニケーション・フレームワークを示した政府ガイドライン。上場会社だけでなく、非上場企業・スタートアップや金融機関との対話への活用も想定する。",
      whyImportant: ["知財・無形資産ガバナンスを権利管理ではなく企業価値向上の経営課題として捉える基準点になる", "企業と投資家・金融機関の思考のギャップを埋める対話フレームワークを確認できる", "2024年以降の実践・開示ガイドブックと2026年ガイダンスを読む前提になる"],
      audience: ["取締役会事務局", "経営企画", "知的財産担当", "研究開発担当", "IR・開示担当", "企業法務"],
      audienceReason: "知財・無形資産を経営戦略、ガバナンス、投資家対話へ接続する政府側の基本構造を確認するため。",
      categories: ["会社法・ガバナンス", "知的財産", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ip-intangible-board-strategy", "ip-intangible-disclosure-dialogue"],
      primarySourceIds: [sourceV2]
    },
    {
      id: "article-jpo-ip-management-guidebook-2024",
      title: "知財経営への招待～知財・無形資産の投資・活用ガイドブック～",
      publisher: "特許庁",
      author: "特許庁",
      publishedAt: "2024-04-24",
      collectedAt: "2026-09-12",
      url: "https://www.meti.go.jp/press/2024/04/20240424005/20240424005.html",
      sourceType: "primary",
      sourceLabel: "一次資料・知財経営実践ガイド",
      status: "adopted",
      summary: "知財・無形資産の投資・活用や開示に着手する際の悩みを踏まえ、企業が実践すべき事項を具体化した特許庁のガイドブック。ガバナンス原則を、経営・事業・知財部門が実行できる行動と事例へ落とし込む。",
      whyImportant: ["ガバナンスガイドラインを実務へ移す際の着手点を確認できる", "経営戦略と知財・無形資産の投資・活用を結び付ける実践例を参照できる", "部門横断で知財経営を進める際の共通資料として使える"],
      audience: ["経営企画", "知的財産担当", "研究開発担当", "事業部門", "企業法務"],
      audienceReason: "抽象的なガバナンス原則から、実際の投資判断・部門連携・活用施策へ落とす際の参考になるため。",
      categories: ["会社法・ガバナンス", "知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ip-intangible-investment-return", "ip-intangible-cross-functional-execution"],
      primarySourceIds: [sourcePractice, sourceV2]
    },
    {
      id: "article-jpo-ip-disclosure-guidebook-2025",
      title: "企業成長の道筋～投資家との対話の質を高める知財・無形資産の開示～",
      publisher: "特許庁",
      author: "特許庁",
      publishedAt: "2025-04-28",
      collectedAt: "2026-09-12",
      url: "https://www.meti.go.jp/press/2025/04/20250428002/20250428002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・知財／無形資産開示・対話ガイド",
      status: "adopted",
      summary: "知財・無形資産の開示について企業と投資家の視点のギャップを整理し、企業成長の道筋を示すマインドセット、検討手順、先進事例、投資家ヒアリング、チェックリストをまとめた特許庁のガイドブック。",
      whyImportant: ["知財情報を単に増やすのではなく、投資家が理解できる価値創造ストーリーへ組み替える観点を得られる", "IR部門だけでなく経営・経営企画・知財・事業・R&Dが共同で開示を作る前提を確認できる", "投資家との対話から戦略を改善する双方向プロセスとして開示を扱える"],
      audience: ["IR・開示担当", "経営企画", "知的財産担当", "研究開発担当", "取締役会事務局"],
      audienceReason: "知財・無形資産を統合報告書等でどう見せ、投資家との対話につなげるかを具体的に設計するため。",
      categories: ["会社法・ガバナンス", "知的財産", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ip-intangible-disclosure-dialogue"],
      primarySourceIds: [sourceDisclosure, sourceV2]
    },
    {
      id: "article-cas-ip-intangible-guidance-2026",
      title: "価値創造を加速する知財・無形資産投資・活用のガイダンス",
      publisher: "内閣府 知的財産戦略推進事務局",
      author: "知財投資・活用戦略の有効な開示及びガバナンスに関する検討会",
      publishedAt: "2026-08-03",
      collectedAt: "2026-09-12",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/tyousakai/tousi_kentokai/tousi_guidance.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年知財／無形資産投資・活用ガイダンス",
      status: "adopted",
      summary: "2026年改訂コーポレートガバナンス・コードを受け、知財・無形資産を成長投資として扱う際の5つの主要ボトルネックと対応の方向性を示した政府ガイダンス。知財・無形資産を経営の根幹へ置き、参入障壁・価格決定力につなげる戦略、短期利益とのジレンマ、部門連携・人材配置、中長期投資家への発信までを一体で扱う。",
      whyImportant: ["2026年改訂CGコード後の知財・無形資産ガバナンスについて、取締役会等に期待される対応の現在地を確認できる", "知財投資を件数や費用ではなく、競争優位・顧客価値・価格決定力・成長への因果で捉える方向性が明確", "無形資産投資で短期利益が悪化して見える問題を、投資評価・時間軸・開示の設計課題として扱っている", "今後のガバナンスガイドライン改訂を追う基準点になる"],
      audience: ["取締役・執行役員", "取締役会事務局", "経営企画", "知的財産担当", "研究開発担当", "IR・開示担当", "企業法務"],
      audienceReason: "2026年CGコード改訂を知財・無形資産の観点から具体的な経営・ガバナンス実務へ落とすため。",
      categories: ["会社法・ガバナンス", "知的財産", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ip-intangible-board-strategy", "ip-intangible-investment-return", "ip-intangible-cross-functional-execution", "ip-intangible-disclosure-dialogue"],
      primarySourceIds: [sourceGuidance, sourceRevision],
      whatChanged: "2026年改訂コーポレートガバナンス・コードを踏まえ、知財・無形資産を成長投資・取締役会監督・投資家対話へ接続する具体的なガイダンスが公表された。"
    },
    {
      id: "article-pwc-ip-corporate-value-story-2026",
      title: "知的財産を企業価値につなげる価値創造ストーリーの構築",
      publisher: "PwC Japanグループ",
      author: "PwC Japanグループ",
      publishedAt: "2026-08-26",
      collectedAt: "2026-09-12",
      url: "https://www.pwc.com/jp/ja/knowledge/column/risk-consulting/intellectual-property-corporate-value.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・知財／無形資産ガバナンス",
      status: "adopted",
      summary: "2026年改訂コーポレートガバナンス・コードと8月の政府ガイダンスを踏まえ、知財を企業価値につなげる『価値創造ストーリー』の作り方を解説。目指す姿から創出価値、知財の貢献、戦略目標、具体施策へ落とす流れを示し、知財部門を権利管理から経営戦略へ接続する役割として捉える。",
      whyImportant: ["政府資料の抽象度を一段下げ、知財と企業価値の因果をどう組み立てるかを実務手順で理解できる", "競争優位、顧客価値、事業成果、財務成果へ知財がどう寄与するかを可視化する考え方が具体的", "知財部門・経営層・事業部門・IRの共通言語として価値創造マップを使う発想が得られる", "知財を『守る資産』に限定せず、戦略策定・見直しへ還元する役割まで示している"],
      audience: ["知的財産担当", "経営企画", "事業部門", "研究開発担当", "IR・開示担当", "企業法務"],
      audienceReason: "政府ガイダンスを自社の価値創造ストーリーと部門連携へ具体化する際の設計例として有用なため。",
      categories: ["会社法・ガバナンス", "知的財産", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ip-intangible-board-strategy", "ip-intangible-cross-functional-execution", "ip-intangible-disclosure-dialogue"],
      primarySourceIds: [sourceGuidance, sourceDisclosure]
    }
  ]);
})();
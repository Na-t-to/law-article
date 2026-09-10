(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "human-capital-disclosure-strategy-2026";
  const fsaSourceId = "source-fsa-disclosure-ordinance-2026";
  const visualizationSourceId = "source-meti-human-capital-visualization-guideline-2026";
  const reformEventId = "human-capital-disclosure-2026-amendment";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: visualizationSourceId,
      title: "人的資本可視化指針（改訂版）",
      type: "guideline",
      typeLabel: "政府指針・人的資本開示",
      authority: "内閣官房・金融庁・経済産業省",
      publishedAt: "2026-03-23",
      url: "https://www.meti.go.jp/press/2025/03/20260323003/20260323003.html",
      importance: "高",
      whyImportant: "経営戦略と人材戦略を連動させ、企業価値向上につながる人的資本投資と開示を設計するための政府指針。法定開示項目そのものではなく、何をどの文脈で投資家へ説明するかを検討する基準点になる。",
      topics: [topicSlug]
    }
  ]);

  const fsaSource = (window.SOURCE_DATA || []).find((item) => item.id === fsaSourceId);
  if (fsaSource) fsaSource.topics = addUniqueString(fsaSource.topics, topicSlug);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "人的資本開示・人材戦略（2026年改正）",
      categories: ["金融商品取引・開示・IR", "コーポレートガバナンス", "労務"],
      summary: "2026年開示府令改正で拡充された人的資本開示と、人的資本可視化指針（改訂版）を、法定開示事項と任意の戦略開示を分けながら、経営戦略・人材戦略・給与方針・指標・投資家対話まで整理する。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "2026年2月20日の開示府令改正により、2026年3月31日以後に終了する事業年度の有価証券報告書等から、連結ベースの企業戦略と関連付けた人材戦略、これを踏まえた従業員給与等の決定方針、提出会社の平均給与の対前年比増減率等の開示が追加された。",
        "人的資本可視化指針は2026年3月23日に改訂され、企業価値向上につながる人的資本投資と開示を、経営戦略と人材戦略の連動、投資家との対話、指標の選定という観点から整理している。指針自体は任意であり、開示府令上の法定義務とは分けて扱う。",
        "企業実務では、法定項目を埋めるだけでなく、企業戦略から必要な組織・人材像、現在とのギャップ、施策、KPI、給与・報酬方針を一貫した説明として組み立て、根拠データと社内承認を管理する必要がある。"
      ],
      currentSummary: {
        facts: [
          "2026年2月20日に開示府令が公布・施行され、人的資本開示に関する改正規定は2026年3月31日以後に終了する事業年度に係る有価証券報告書等から適用される。",
          "新たな法定開示事項には、連結ベースの企業戦略と関連付けた人材戦略、人材戦略を踏まえた従業員給与等の決定方針、提出会社の従業員の平均給与の対前年比増減率が含まれる。",
          "主として子会社の経営管理を行う会社については、最大人員会社に関する給与方針・平均給与・前年比増減率等の追加的な記載が必要となる場合がある。",
          "内閣官房・金融庁・経済産業省は2026年3月23日に人的資本可視化指針（改訂版）を公表し、経営戦略と人材戦略の連動、人的資本投資、指標、投資家との対話に資する開示の考え方を整理した。"
        ],
        interpretations: [
          "開示府令が定める法定記載事項と、人的資本可視化指針が示す任意の戦略的な開示設計は役割が異なる。法定事項の充足確認と、企業価値を説明するストーリー設計を別々に点検した上で接続する必要がある。",
          "人材戦略は抽象的な人材方針だけでなく、企業戦略上必要な人材・組織能力、現状とのギャップ、投資・施策、KPI、給与等の方針がどのようにつながるかを説明できる形で設計する方が、投資家対話にも社内意思決定にも使いやすい。",
          "給与の前年比増減率など単独の数値を示すだけでは、その変化が事業戦略・人材獲得・定着・生産性等とどう関係するかが伝わらないため、数値の背景と人材戦略上の位置付けを一体でレビューすることが重要になる。"
        ],
        implications: [
          "有価証券報告書の人的資本記載について、企業戦略と人材戦略の対応関係、給与等の決定方針、平均給与・前年比増減率の算定元データと承認者を棚卸しする。",
          "持株会社等は、最大人員会社の判定と追加開示の要否を確認し、グループ内の人事・給与データを収集する責任部署を明確にする。",
          "人的資本可視化指針を使う場合は、経営戦略から必要な人材・組織能力、ギャップ、施策、KPI、成果までの因果関係を整理し、開示する指標を自社の戦略に合わせて選ぶ。",
          "法務・IR・人事・経営企画で、法定開示の正確性と任意開示の一貫性を同じレビュー工程に乗せ、統合報告書等との表現差異も確認する。"
        ],
        uncertain: [
          "人的資本可視化指針は開示項目を一律に義務付けるものではなく、どの指標・説明が投資家対話に有用かは各社の戦略・業種・人材構成によって異なる。",
          "人的資本開示の実務慣行や投資家の期待水準は今後の開示事例の蓄積で変化し得るため、金融庁の好事例・審査動向等を継続確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "human-capital-required-disclosure",
          title: "2026年改正で何を法定開示する必要があるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2026年3月31日以後終了事業年度の有価証券報告書等では、連結ベースの企業戦略と関連付けた人材戦略、その戦略を踏まえた従業員給与等の決定方針、提出会社の平均給与の対前年比増減率等を新たに確認・記載する。",
          exception: "主として子会社の経営管理を行う会社には、最大人員会社に関する給与方針・平均給与等の特則がある。ストックオプション等の記載場所にも選択肢が設けられた。",
          uncertain: "個別会社の記載粒度や重要性判断は、事業・人材戦略と既存開示を踏まえて検討する。",
          sourceIds: [fsaSourceId]
        },
        {
          id: "human-capital-visualization-guideline-role",
          title: "人的資本可視化指針を法定開示とどう使い分けるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "人的資本可視化指針は、企業価値向上につながる人的資本投資と開示を経営戦略・人材戦略・指標・投資家対話のつながりから考える政府指針として利用し、開示府令上の法定項目そのものとは区別する。",
          exception: "指針は任意の考え方を示すものであり、掲載された項目・事例を全社が一律に開示すべき義務と扱わない。",
          uncertain: "自社にとって重要な指標や開示粒度は、戦略・業種・投資家との対話によって異なる。",
          sourceIds: [visualizationSourceId]
        },
        {
          id: "human-capital-strategy-investor-dialogue",
          title: "人材戦略と指標を投資家向けの説明へどうつなぐか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "企業戦略上必要な組織・人材像と現状のギャップを起点に、人的資本投資・人事施策・給与方針・KPI・成果の関係を整理し、なぜその指標を追うのかまで説明できる形で開示する。",
          exception: "指標数を増やすこと自体が目的ではなく、企業価値との関係が薄い指標を画一的に並べる必要はない。",
          uncertain: "投資家が重視する指標や説明は業種・成長段階・経営課題によって変わるため、対話を通じて継続的に見直す。",
          sourceIds: [visualizationSourceId, fsaSourceId]
        }
      ],
      sourceIds: [fsaSourceId, visualizationSourceId],
      practicalImpacts: [
        "有価証券報告書の人的資本開示",
        "人材戦略・給与方針",
        "人事・給与データの収集と統制",
        "持株会社の最大人員会社対応",
        "IR・統合報告書・投資家対話"
      ]
    }
  ]);

  const fsaArticle = (window.ARTICLE_DATA || []).find((item) => item.id === "article-fsa-disclosure-ordinance-2026");
  if (fsaArticle) {
    fsaArticle.relatedTopics = addUniqueString(fsaArticle.relatedTopics, topicSlug);
    fsaArticle.relatedIssues = addUniqueString(fsaArticle.relatedIssues, "human-capital-required-disclosure");
  }

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "人的資本開示・2026年開示府令改正",
      eventType: "regulation_or_guideline",
      lawId: "disclosure-ordinance-human-capital",
      lawLabel: "企業内容等の開示に関する内閣府令・人的資本開示",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-03-31"],
      effectiveDateNote: "改正府令は2026年2月20日公布・施行。人的資本開示の新規定は2026年3月31日以後に終了する事業年度に係る有価証券報告書等から適用。",
      effectiveDateSourceIds: [fsaSourceId],
      matchSourceIds: [fsaSourceId],
      sourceIds: [fsaSourceId],
      articleIds: ["article-ey-human-capital-disclosure-2026"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-meti-human-capital-visualization-guideline-2026",
      title: "人的資本可視化指針（改訂版）の公表",
      publisher: "経済産業省",
      author: "内閣官房・金融庁・経済産業省",
      publishedAt: "2026-03-23",
      collectedAt: "2026-09-10",
      url: "https://www.meti.go.jp/press/2025/03/20260323003/20260323003.html",
      sourceType: "primary",
      sourceLabel: "一次資料・政府指針／人的資本開示",
      status: "adopted",
      summary: "2022年版の人的資本可視化指針を改訂し、経営戦略と連動した人材戦略、企業価値向上につながる人的資本投資、投資家との建設的対話に資する開示を再整理した政府指針。別紙では戦略に焦点を当てた人的資本開示の考え方、付録では経営戦略と人材戦略の連動・指標の開示事例を示す。法定開示の義務項目そのものではなく、何をなぜ開示するかを設計する際の参照資料として位置付ける。",
      whyImportant: [
        "人的資本開示を指標の羅列ではなく、経営戦略と人材戦略の接続から設計する政府の現在の考え方を確認できる",
        "法定開示項目と任意の戦略的開示を混同せず、企業価値・投資家対話に有用な情報を選ぶための基準点になる",
        "人材戦略、人的資本投資、KPI、成果の因果関係を整理し、統合報告書や有価証券報告書の説明を整合させる材料になる"
      ],
      audience: ["人事・人的資本担当", "企業法務", "IR・開示担当", "経営企画"],
      audienceReason: "2026年の法定開示拡充を踏まえつつ、自社の人材戦略と開示指標を企業価値・投資家対話へどう接続するかを設計するため。",
      categories: ["金融商品取引・開示・IR", "コーポレートガバナンス", "労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["human-capital-visualization-guideline-role", "human-capital-strategy-investor-dialogue"],
      primarySourceIds: [visualizationSourceId],
      whatChanged: "新テーマ追加／2026年の法定人的資本開示と任意の人的資本可視化指針を分離し、経営戦略・人材戦略・指標・投資家対話の接続を追える棚を整備した。"
    },
    {
      id: "article-ey-human-capital-disclosure-2026",
      title: "最新法令等紹介―『企業内容等の開示に関する内閣府令』等の一部改正（人的資本開示）",
      publisher: "EY弁護士法人",
      author: "EY弁護士法人",
      publishedAt: "2026-04-07",
      collectedAt: "2026-09-10",
      url: "https://www.ey.com/ja_jp/technical/ey-japan-tax-library/tax-alerts/2026/tax-alerts-04-07",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／人的資本開示",
      status: "adopted",
      summary: "2026年2月20日の開示府令改正について、SSBJ対応と人的資本開示を分けて整理した実務解説。人的資本部分では、連結ベースの企業戦略と関連付けた人材戦略、給与等の決定方針、平均給与・前年比増減率、持株会社の最大人員会社に関する追加開示、従業員向けストックオプション等の記載場所まで、2026年3月期からの変更点を一覧で確認できる。",
      whyImportant: [
        "金融庁の改正内容を、上場会社が2026年3月期の有価証券報告書で確認すべき人的資本項目へ短く落としている",
        "持株会社について最大人員会社まで含めた給与方針・平均給与等の特則を実務上の注意点として確認できる",
        "人的資本開示の法定項目とSSBJ対応を同じ改正の中で区別しており、開示プロジェクトの役割分担を整理しやすい"
      ],
      audience: ["上場会社法務", "人事・人的資本担当", "IR・開示担当", "経理・財務"],
      audienceReason: "2026年3月期からの人的資本開示の追加事項を、金融庁一次資料と突合しながら有価証券報告書の作成チェックへ落とすため。",
      categories: ["金融商品取引・開示・IR", "コーポレートガバナンス", "労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["human-capital-required-disclosure"],
      primarySourceIds: [fsaSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [fsaSourceId],
      whatChanged: "新テーマ追加／2026年3月期から適用される人的資本開示の追加事項を、持株会社特則を含む実務チェック項目として補強した。"
    }
  ]);
})();

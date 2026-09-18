(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "distribution-resale-price");
  if (!topic) return;

  const appendUnique = (base, values) => [...new Set([...(Array.isArray(base) ? base : []), ...values])];
  const appendText = (base, value) => {
    const items = Array.isArray(base) ? base : [];
    if (!items.includes(value)) items.push(value);
    return items;
  };

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.sourceIds = appendUnique(topic.sourceIds, [
    "source-jftc-distribution-guideline-current-20260708",
    "source-jftc-rpm-faq-20260708"
  ]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, ["article-uchisaiwai-rpm-guideline-20260727"]);

  if (topic.currentSummary) {
    topic.currentSummary.facts = appendText(
      topic.currentSummary.facts,
      "公取委のQ&Aは、ユーザー販売までの費用として保管・輸送・広告宣伝だけでなく、荷造費、見本費、人件費、研修費、保険料等も取引実態に応じて含まれ得るとし、費用の内容と負担方法をメーカーと販売店で確認・明確化することを示している。"
    );
    topic.currentSummary.implications = appendText(
      topic.currentSummary.implications,
      "指定価格型の販売施策では、費用項目と負担方法を一方的に決めるだけでなく、販売店が不足費用を申し出て協議できるフローと精算方法まで設計・記録する。"
    );
  }

  const riskCostIssue = (topic.issues || []).find((issue) => issue && issue.id === "rpm-risk-cost-exception");
  if (riskCostIssue) {
    riskCostIssue.sourceIds = appendUnique(riskCostIssue.sourceIds, [
      "source-jftc-distribution-guideline-current-20260708",
      "source-jftc-rpm-faq-20260708"
    ]);
  }
})();

(() => {
  const additions = [
    {
      slug: "corporate-takeover-guidelines-2026",
      title: "企業買収行動指針／同意なき買収・取締役会対応",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      summary: "経済産業省の2023年『企業買収における行動指針』と2026年7月30日の解釈・ポイント・Q&Aを軸に、上場会社が買収提案を受けた場面での『望ましい買収』『真摯な買収提案』『真摯な検討』、企業価値と定性的要素、株主への説明・取引条件改善を整理する。2026年文書は指針自体を改訂するものではない。",
      lastUpdated: "2026-09-18",
      lastVerified: "2026-09-18",
      isNew: true,
      overview: [
        "2023年の企業買収行動指針は、上場会社の経営支配権を取得する買収を主な対象として、企業価値・株主共同の利益、株主意思、透明性の三原則と、買収提案を受けた取締役会の行動規範等を示すベストプラクティスである。法令そのものや、個別案件の結論を自動的に決めるセーフハーバーではない。",
        "経済産業省は2026年7月30日、指針を維持することを前提に、その趣旨の誤解を解くための『解釈について』『ポイント』『Q&A』を公表した。高い買収価格のみで望ましい買収が決まるわけではなく、真摯な買収提案の具体性・目的の正当性・実現可能性や、企業価値向上策の比較を総合的に検討する考え方が具体化されている。",
        "実務では、買収提案を受けてから初めて判断枠組みを作るのではなく、平時から事業計画・資本構成・事業ポートフォリオ、取締役会の独立性、投資家対話と情報開示を整え、買収提案の付議、情報要求、スタンド・アローン案との比較、株主への説明を記録可能なプロセスとして設計しておくことが重要になる。"
      ],
      currentSummary: {
        facts: [
          "企業買収行動指針は、企業価値・株主共同の利益の原則、株主意思の原則、透明性の原則を掲げ、上場会社の経営支配権取得を主な対象とする。",
          "経済産業省が2026年7月30日に公表した『解釈について』『ポイント』『Q&A』は、2023年指針の趣旨を明確化するものであり、指針を改訂・修正するものではない。",
          "『真摯な買収提案』は、具体性、目的の正当性、実現可能性を総合して判断し、例示された懸念要素の一つに該当しただけで直ちに真摯性が否定されるものではない。"
        ],
        interpretations: [
          "高い買収価格は重要な考慮要素だが、それだけで『望ましい買収』になるわけではなく、企業価値の向上と株主共同の利益の確保を分けて検討する必要がある。",
          "従業員・取引先、サステナビリティ、ガバナンス、サプライチェーン強靱化や技術流出防止等の定性的要素も、将来キャッシュフローや割引率への影響が合理的に見込まれる限り企業価値評価に織り込めるが、抽象的な価値を経営陣の保身のために強調してはならない。"
        ],
        implications: [
          "買収提案を速やかに取締役会へ付議・報告する基準と、提案の具体性・買収者の信用力を確認する初期トリアージを平時から定める。",
          "買収者の属性・資力・トラックレコード、買収後の経営方針、取引条件、資金調達、独禁法・外為法等の許認可見通しについて、追加情報を要求する項目を準備する。",
          "買収者の企業価値向上策と、スタンド・アローンや提携等の代替案を、中長期の企業価値、シナジー・ディスシナジーの双方から比較し、判断過程を取締役会資料・議事録へ残す。",
          "買収に応じる方針を決めた場合は、真摯な交渉や他候補の探索を含め、株主共同の利益を確保するために取引条件の改善を目指す合理的な努力を行う。"
        ],
        uncertain: [
          "指針・ポイント・Q&Aはベストプラクティスを示す行政資料であり、個別案件の取締役の善管注意義務・忠実義務、公開買付規制、外為法、独占禁止法その他の法的評価は案件ごとに別途確認する必要がある。",
          "定性的要素の企業価値への影響、情報要求の範囲、複数提案の比較や株主への説明の十分性は、対象会社・買収者・取引条件・市場環境によって変わる。"
        ]
      },
      issues: [
        {
          id: "takeover-guideline-desirable-acquisition",
          title: "買収価格が最も高い提案を選ばなければならないか",
          status: "authoritative",
          stage: "not_applicable",
          views: [],
          conclusion: "高い買収価格は重要な要素だが、それだけで『望ましい買収』とはならず、対象会社の企業価値の向上と株主共同の利益の確保の双方に資するかを基準に判断する。",
          exception: "買収に応じる方針を決定した場合は、株主共同の利益を確保するため、真摯な交渉や他の買収候補の模索等により取引条件の改善を目指す合理的な努力が求められる。最も企業価値を高める提案と最も高い価格の提案が一致しない判断は例外的で、株主への説得力のある説明が重要になる。",
          uncertain: "個別案件でどの提案が最も企業価値の向上に資するか、取締役会の法的義務がどのように評価されるかは具体的事情による。",
          sourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"]
        },
        {
          id: "takeover-guideline-serious-proposal",
          title: "『真摯な買収提案』をどう見分けるか",
          status: "authoritative",
          stage: "not_applicable",
          views: [],
          conclusion: "提案の具体性、買収目的の正当性、買収の実現可能性を総合的に確認し、これらが合理的に疑われる場合に真摯性を否定し得る。例示された事情を機械的な足切り基準として使わない。",
          exception: "資金調達や許認可等について提案初期に最終確定していない事情があっても、解消可能性や説明内容を含めて総合判断する。真摯性の概念を恣意的に広げて検討を避けることも適切ではない。",
          uncertain: "必要な具体性や実現可能性の水準は、取引構造、買収者の属性、規制対応の難易度等により異なる。",
          sourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"]
        },
        {
          id: "takeover-guideline-board-review",
          title: "取締役会は買収提案をどこまで『真摯に検討』する必要があるか",
          status: "authoritative",
          stage: "not_applicable",
          views: [],
          conclusion: "買収者の属性・資力・実績・買収後方針、取引条件、許認可等の実現可能性を確認し、必要な追加情報を求めた上で、買収者の企業価値向上策とスタンド・アローンや提携等の代替案を中長期の企業価値の観点から比較する。真摯に検討した後の選択には経営判断としての裁量がある。",
          exception: "公表された提案への対応や買収に応じない判断では株主への説明責任が問題となり得る。定量化が困難な事項についても、合理的・説得的な説明を準備する必要がある。",
          uncertain: "どの情報をどこまで取得・定量化するか、特別委員会の設置が必要か等は取引構造・利益相反・案件の重要性により個別判断となる。",
          sourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"]
        },
        {
          id: "takeover-guideline-qualitative-value",
          title: "従業員・取引先・サステナビリティ・経済安全保障を企業価値評価にどう織り込むか",
          status: "authoritative",
          stage: "not_applicable",
          views: [],
          conclusion: "一見定性的な要素でも、将来キャッシュフローの増加または割引率の低下につながることが合理的に見込まれる場合には企業価値評価で考慮できる。可能な範囲で定量化し、困難な場合は株主に対して説得力のある説明を行う。",
          exception: "測定困難な定性的価値を過度に強調して企業価値概念を曖昧にしたり、経営陣の保身のために利用したりすることは適切ではない。",
          uncertain: "ステークホルダー、サプライチェーン、技術流出、環境等が将来キャッシュフローや割引率へ与える影響の大きさ・蓋然性は案件ごとに異なる。",
          sourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"]
        }
      ],
      sourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"],
      referenceArticleIds: ["article-not-corporate-takeover-guidelines-20260804", "article-amt-corporate-takeover-guidelines-20260903"],
      practicalImpacts: [
        "取締役会・特別委員会の平時設計",
        "買収提案の初期トリアージ・付議基準",
        "買収者への情報要求・資金調達・許認可確認",
        "スタンド・アローン・代替戦略との比較評価",
        "株主への説明・取引条件交渉"
      ]
    }
  ];

  const existing = new Set((window.TOPIC_DATA || []).map((item) => item && item.slug));
  const fresh = additions.filter((item) => !existing.has(item.slug));
  if (fresh.length) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(fresh);
})();

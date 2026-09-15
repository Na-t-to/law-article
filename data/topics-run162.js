(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  if (!topics.some((item) => item && item.slug === "plant-variety-seed-act-2026")) {
    topics.push({
      slug: "plant-variety-seed-act-2026",
      title: "種苗法・重要品種育成／育成者権保護",
      categories: ["知的財産", "契約", "国際取引"],
      summary: "2026年の種苗法改正と重要品種の育成・種苗生産を支援する新法について、育成者権の存続期間、出願中・輸出段階の保護、損害賠償・立証、種苗の貸渡し、重要品種の育成・種苗生産計画を、施行済み部分と施行準備中の部分を分けて整理する。",
      lastUpdated: "2026-09-15",
      lastVerified: "2026-09-15",
      isNew: true,
      overview: [
        "2026年の種苗法改正は、日本の優良品種の海外流出対策と育成者権保護の強化を目的に、育成者権の存続期間延長、出願品種の輸出差止め、輸出目的保管への権利拡張、損害賠償・立証の強化、貸渡しへの保護等を導入します。",
        "育成者権の存続期間延長等は2026年7月24日に既に施行され、その他の主要改正は2026年12月1日施行です。現時点の権利範囲と12月以降のルールを混ぜずに管理します。",
        "同時に成立した重要品種の育成及びその種苗の生産の振興に関する法律は、国の基本方針、都道府県の基本計画、重要品種育成事業・種苗生産事業の認定等を設ける別制度です。2026年9月時点では基本方針案の審議が進んでおり、種苗法上の私権保護とは別の政策・支援枠組みとして追います。"
      ],
      currentSummary: {
        facts: [
          "種苗法の一部を改正する法律は2026年7月17日に成立し、7月24日に公布された。育成者権の存続期間延長と育成者権の効力が及ばない範囲の明確化は同日施行、その他の主要改正は2026年12月1日施行である。",
          "2026年7月24日時点で存続する育成者権は、原則として品種登録から35年、永年性植物は40年へ延長された。",
          "12月1日施行部分には、出願品種の輸出差止め、登録品種の種苗の輸出目的保管への権利拡張、損害賠償額算定の見直し、貸渡しへの育成者権の効力、優先審査、侵害訴訟での第三者意見募集等が含まれる。",
          "重要品種の育成及びその種苗の生産の振興に関する法律は2026年7月17日に成立し、7月24日に公布された。主要部分は公布から6か月以内の政令指定日施行で、2026年9月7日に同法に基づく基本方針案が審議会へ示された。"
        ],
        interpretations: [
          "2026年改正は権利期間の延長だけではなく、登録前・輸出前の段階から品種流出を止めやすくし、侵害時の損害回復・立証を強化する一連の権利行使インフラの見直しとして読む必要がある。",
          "重要品種法は育成者権そのものを拡張する制度ではなく、気候変動等に対応する重要品種の育成・種苗生産を基本方針・計画認定等で促進する政策制度であり、種苗法上の権利管理と分けて整理する。"
        ],
        implications: [
          "育成者権者・種苗会社は、保有品種ごとの権利存続期間、登録料納付、ライセンス期間、輸出制限の届出・表示を棚卸しする。",
          "輸出・物流・保管の契約では、12月1日以降の輸出目的保管規制を踏まえ、海外発送ラベル、保税区域、通関事業者への引渡し等のフローを点検する。",
          "ライセンス・販売・貸渡し契約は、種苗の貸渡しが育成者権の効力対象となる改正を踏まえて許諾範囲と対価設計を確認する。",
          "重要品種法の対象になり得る育種・種苗生産事業者は、基本方針、認定要件、都道府県基本計画等の最終化を追い、支援制度の利用可否を検討する。"
        ],
        uncertain: [
          "12月1日施行部分の表示・届出様式等には施行日までに省令等で具体化される事項が残る。",
          "重要品種法は主要部分が施行前であり、国の基本方針、都道府県基本計画、計画認定の具体的運用は今後の最終化を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "seed-act-breeders-right-extension",
          title: "育成者権の存続期間はどう延長されたか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2026年7月24日時点で存続する育成者権について、存続期間は原則として品種登録から35年、永年性植物は40年へ延長された。延長のための個別手続は不要だが、権利維持には登録料の納付が必要である。",
          exception: "2026年7月24日より前に既に消滅した育成者権が復活するものではなく、登録時期と植物区分を個別に確認する。",
          uncertain: "個別品種の存続状況は品種登録簿と登録料納付状況を確認する必要がある。",
          sourceIds: ["source-maff-seed-law-qa-2026"]
        },
        {
          id: "seed-act-export-protection",
          title: "出願中・輸出前の品種流出をどう止められるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "2026年12月1日から、一定の要件の下で出願品種の輸出差止めが可能となり、登録品種については海外持出し制限をした場合に輸出目的の保管にも育成者権の効力が及ぶ。",
          exception: "出願品種の差止めには書面による警告や回復困難な損害等の要件があり、登録品種の輸出目的保管も客観的な輸出目的を個別に確認する。",
          uncertain: "輸出制限表示・届出様式等の下位ルールは施行日までの最終化を確認する必要がある。",
          sourceIds: ["source-maff-seed-law-qa-2026"]
        },
        {
          id: "seed-act-remedies-leasing",
          title: "侵害時の損害・立証と種苗の貸渡しはどう変わるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "2026年12月1日から、育成者権侵害の損害賠償額算定が強化され、第三者意見募集等の立証支援が導入されるほか、登録品種の種苗の貸渡しにも育成者権の効力が及ぶ。",
          exception: "具体的な損害額や侵害の成否は利用数量、許諾条件、権利範囲、証拠等により個別に判断される。",
          uncertain: "第三者意見募集等の訴訟実務やライセンス市場への影響は施行後の運用蓄積を確認する必要がある。",
          sourceIds: ["source-maff-seed-law-qa-2026"]
        },
        {
          id: "important-varieties-framework",
          title: "重要品種法はどの育成・種苗生産を支援するか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "国の基本方針と都道府県の基本計画を基礎に、農林水産大臣が重要品種育成事業計画を、都道府県知事が重要品種の種苗生産に関する事業計画を認定する枠組みが設けられた。",
          exception: "種苗法上の育成者権の付与・侵害判断とは別制度であり、認定を受ければ育成者権が自動的に強化されるものではない。",
          uncertain: "主要部分は施行前であり、対象品種・認定基準・支援措置の具体的運用は基本方針・下位法令等の最終化を確認する必要がある。",
          sourceIds: ["source-maff-important-varieties-act-2026", "source-maff-important-varieties-policy-draft-2026"]
        },
        {
          id: "important-varieties-basic-policy",
          title: "重要品種法の基本方針はどこまで具体化したか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "2026年9月7日時点で、気候変動等対応品種育成・普及小委員会に基本方針案と説明資料が提示され、制度運用の具体化が進んでいる。",
          exception: "基本方針案は審議段階であり、最終方針として確定した内容と扱わない。",
          uncertain: "最終の基本方針、施行日、計画認定・都道府県基本計画の具体的な手続を継続確認する必要がある。",
          sourceIds: ["source-maff-important-varieties-policy-draft-2026", "source-maff-important-varieties-act-2026"]
        }
      ],
      sourceIds: ["source-maff-seed-law-qa-2026", "source-maff-important-varieties-act-2026", "source-maff-important-varieties-policy-draft-2026"],
      practicalImpacts: [
        "育成者権ポートフォリオ・登録料",
        "品種ライセンス・種苗販売契約",
        "海外持出し・輸出管理",
        "物流・保管・通関フロー",
        "侵害調査・損害立証",
        "種苗の貸渡し",
        "重要品種育成・種苗生産の計画認定"
      ]
    });
  }

  const econsec = topics.find((item) => item && item.slug === "economic-security-tech-control");
  if (econsec) {
    econsec.lastUpdated = "2026-09-15";
    econsec.lastVerified = "2026-09-15";
    econsec.sourceIds = addUnique(econsec.sourceIds, "source-mod-defense-transfer-principles-2026");
    econsec.currentSummary = econsec.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    econsec.currentSummary.facts = addUnique(econsec.currentSummary.facts, "政府は2026年4月21日、防衛装備移転三原則と運用指針を改正し、完成品の海外移転を救難・輸送・警戒・監視・掃海のいわゆる5類型に限定していた枠組みを見直した。");
    econsec.currentSummary.interpretations = addUnique(econsec.currentSummary.interpretations, "防衛装備の海外移転は制度上の対象範囲が広がったが、自由な輸出へ転換したわけではなく、移転先・用途・第三国移転等を案件ごとに三原則・運用指針と外為法等で審査する必要がある。");
    econsec.currentSummary.implications = addUnique(econsec.currentSummary.implications, "防衛・デュアルユース製品の海外案件では、製品該当性、移転先・最終需要者・用途、第三国移転、外為法許可、政府間調整・契約上の事後管理を案件初期から一体で確認する。");
    econsec.practicalImpacts = addUnique(econsec.practicalImpacts, "防衛装備移転・第三国移転管理");
    if (!(econsec.issues || []).some((issue) => issue.id === "econsec-defense-equipment-transfer")) {
      econsec.issues = (econsec.issues || []).concat([{
        id: "econsec-defense-equipment-transfer",
        title: "防衛装備移転三原則改正を輸出・技術移転案件へどう組み込むか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年4月21日改正により、完成品の防衛装備の海外移転を5類型に限定する枠組みは見直され、制度上はより広い移転案件を個別審査できるようになった。案件ごとに三原則・運用指針、外為法その他の規制、移転先・用途・第三国移転等を確認する。",
        exception: "移転が当然に認められるわけではなく、国際紛争助長回避、安全保障上の適切性、移転後管理、個別の輸出許可等の条件は引き続き確認が必要である。",
        uncertain: "改正後の具体的な許可・移転実績、契約上の事後管理、官民の審査実務は今後の案件蓄積を継続確認する必要がある。",
        sourceIds: ["source-mod-defense-transfer-principles-2026"]
      }]);
    }
  }

  window.TOPIC_DATA = topics;
})();

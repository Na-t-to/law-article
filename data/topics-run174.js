(() => {
  const topics = window.TOPIC_DATA || [];
  const pushUnique = (list, value) => {
    if (!Array.isArray(list)) return;
    if (!list.includes(value)) list.push(value);
  };

  const aml = topics.find((topic) => topic.slug === "aml-kyc-criminal-proceeds");
  if (aml) {
    aml.summary = "犯罪収益移転防止法について、2026年改正による口座・送金犯罪対策、2027年4月の本人確認方法厳格化、不正利用口座情報の金融機関間共有を、顧客管理・本人確認・取引モニタリング実務から整理する。";
    aml.lastUpdated = "2026-09-16";
    aml.lastVerified = "2026-09-16";
    aml.overview = aml.overview || [];
    pushUnique(aml.overview, "2026年6月26日に公布された施行規則・監督指針改正により、預貯金取扱事業者には、不正利用口座に関する情報の安全管理措置を定めた上で金融機関間で必要情報を共有し、受領情報を分析して必要なリスク低減策を講じることが2027年4月1日から求められる方向が確定した。本人確認方法の厳格化とは別のAML実装トラックとして管理する必要がある。");
    aml.currentSummary = aml.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    aml.currentSummary.facts = aml.currentSummary.facts || [];
    aml.currentSummary.interpretations = aml.currentSummary.interpretations || [];
    aml.currentSummary.implications = aml.currentSummary.implications || [];
    aml.currentSummary.uncertain = aml.currentSummary.uncertain || [];
    pushUnique(aml.currentSummary.facts, "2026年6月26日、金融庁は不正利用口座に係る金融機関間の情報共有を盛り込む犯罪収益移転防止法施行規則と監督指針の改正を公布・公表し、2027年4月1日から施行・適用するとした。");
    pushUnique(aml.currentSummary.facts, "改正施行規則は預貯金取扱事業者に対し、犯罪・犯罪収益の移転に利用された又はそのおそれがある口座について、情報の適正な取扱いと安全管理のための措置を定めた上で、必要情報を他の預貯金取扱事業者に提供し、受領情報を整理・分析して必要に応じAML上の措置を講じる努力義務を定める。");
    pushUnique(aml.currentSummary.interpretations, "2027年4月には、本人確認方法のICチップ・JPKI等への移行と、不正利用口座情報の金融機関間共有が同時に進む。前者は広い特定事業者、後者は主として預貯金取扱事業者を対象とするため、対象部門・システム・委託先を分けて対応計画を管理する方がよい。");
    pushUnique(aml.currentSummary.implications, "預貯金取扱事業者は2027年4月1日までに、不正利用口座情報を外部へ提供する際の判断基準、情報項目、権限管理・安全管理、受領情報の分析と取引制限・追加確認等への接続を業務フローとして設計する。");
    pushUnique(aml.currentSummary.uncertain, "情報共有の具体的な運営スキーム、共有データの粒度、誤検知時の取扱い等は、業界実装や当局運用の蓄積を継続確認する必要がある。");
    aml.issues = aml.issues || [];
    if (!aml.issues.some((issue) => issue.id === "aml-account-information-sharing-2027")) {
      aml.issues.push({
        id: "aml-account-information-sharing-2027",
        title: "不正利用口座情報の金融機関間共有をどう実装するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2027年4月1日から、預貯金取扱事業者は不正利用口座情報の適正取扱い・安全管理措置を定め、必要情報の提供と受領情報の整理・分析を行い、必要に応じて犯罪収益移転防止措置につなげる体制を整える。",
        exception: "この改正は全ての特定事業者に一律の金融機関間情報共有を求めるものではなく、預貯金取扱事業者を中心とする規律である。情報共有時の安全管理・適正取扱いも前提となる。",
        uncertain: "共有枠組みの具体的な運営、データ項目、誤検知・訂正等の実務は今後の運用を確認する必要がある。",
        sourceIds: ["source-fsa-aml-account-info-sharing-2026"]
      });
    }
    aml.sourceIds = aml.sourceIds || [];
    pushUnique(aml.sourceIds, "source-fsa-aml-account-info-sharing-2026");
    aml.practicalImpacts = aml.practicalImpacts || [];
    pushUnique(aml.practicalImpacts, "不正利用口座情報の金融機関間共有・安全管理");
    pushUnique(aml.practicalImpacts, "受領情報を使った取引モニタリング・リスク低減措置");
  }

  if (!topics.some((topic) => topic.slug === "bank-investment-subsidiaries-business-succession-2026")) {
    topics.push({
      slug: "bank-investment-subsidiaries-business-succession-2026",
      title: "銀行グループ投資専門子会社／事業承継・成長資金",
      categories: ["事業再生・金融", "M&A", "契約"],
      summary: "2026年6月の銀行法施行規則等改正について、銀行グループの投資専門子会社による資金供給対象・投資手法、上場企業を含む事業承継支援、M&A仲介業務、段階施行される業務範囲規制の緩和を整理する。",
      lastUpdated: "2026-09-16",
      lastVerified: "2026-09-16",
      isNew: true,
      overview: [
        "金融庁は2026年6月12日、銀行法施行規則等の改正を公布し、投資専門会社の投資対象・業務範囲を拡充した。主要部分は6月15日から施行・適用され、銀行等グループのリース会社に係る収入依存度規制の撤廃は2027年4月1日に施行される。",
        "投資専門子会社は、株式会社に限らず国内の会社その他の団体への資金供給が可能となり、合同会社への出資、匿名組合出資、信託受益権の取得等を含む資金供給手法が広がった。ベンチャー企業へのクロスオーバー投資、上場会社である事業承継会社への資金供給も可能となった。",
        "事業承継支援では、銀行本体の子会社規制・議決権保有規制が消えるわけではない。基準議決権数を超える出資や子会社化は、投資専門子会社を通じた制度要件と原則10年の保有期間等を確認して設計する必要がある。",
        "投資専門子会社の業務にはM&A仲介業務も追加されたため、資金供給と事業承継・M&A支援を一体で提供する場合の業務範囲・利益相反・グループ管理を確認する必要がある。"
      ],
      currentSummary: {
        facts: [
          "銀行法施行規則等の2026年改正は2026年6月12日に公布され、主要部分は6月15日から施行・適用された。リース子会社のファイナンス・リースに係る収入依存度規制の撤廃は2027年4月1日施行である。",
          "改正により、投資専門会社は株式会社以外の国内の会社その他の団体へも資金供給でき、ベンチャービジネス会社へのクロスオーバー投資、上場会社である事業承継会社への資金供給が可能となった。",
          "投資専門会社の業務範囲にはM&A仲介業務が追加され、ローントレーディングは銀行法施行規則等の特定取引として明確化された。",
          "TMIの実務解説では、事業承継会社について投資専門子会社を通じた基準議決権数超の保有等は原則10年に限られること、資金供給先の『会社その他の団体』は国内主体に限られることが、条文・パブリックコメント回答を踏まえて整理されている。"
        ],
        interpretations: [
          "今回の緩和は銀行本体が自由に事業会社へ投資できるようにするものではなく、投資専門子会社の業務範囲と銀行グループの子会社・議決権保有規制を組み合わせて適用する必要がある。",
          "事業承継案件では、対象会社が上場会社か否かだけでなく、承継支援の必要性、承継計画、出資主体、議決権比率、保有期間、投資手法を一体で確認する必要がある。",
          "合同会社・匿名組合・信託受益権等が利用可能になったことで、事業承継ファンドや成長資金供給のストラクチャー選択肢は増えるが、資金供給先が国内主体であること等の境界条件は残る。"
        ],
        implications: [
          "銀行・銀行持株会社は投資専門子会社の投資方針、審査基準、議決権管理、保有期間管理を改正後の対象・手法に合わせて更新する。",
          "事業承継案件では、承継計画と対象会社該当性を確認し、銀行本体と投資専門子会社のどちらが出資主体となるかを初期段階で整理する。",
          "合同会社、匿名組合、信託受益権等を使う場合は、投資専門子会社の業務範囲だけでなく、ファンド規制・金商法・税務・利益相反等の周辺論点も別途確認する。",
          "M&A仲介を資金供給と組み合わせる場合は、銀行グループ内の情報管理、利益相反、顧客説明、案件紹介プロセスを設計する。"
        ],
        uncertain: [
          "拡張された投資手法や上場会社への事業承継支援について、案件組成・保有期間管理・利益相反管理の市場慣行は今後の実例蓄積を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "bank-investment-subsidiary-funding-scope",
          title: "投資専門子会社はどの国内主体へどの方法で資金供給できるか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2026年6月15日以降、投資専門子会社は株式会社に限らず国内の会社その他の団体へ資金供給でき、貸付け・社債等・新株予約権・株式等に加え、信託受益権の取得や一定の組合契約等を通じた資金供給も可能となった。",
          exception: "資金供給先は国内の会社その他の団体に限られ、外国会社・外国LLC等への資金供給が当然に許容されるものではない。銀行グループの他の業務範囲規制も別途確認する。",
          uncertain: "新しい投資手法の実際の利用範囲やグループ管理の市場実務は今後の案件蓄積を確認する必要がある。",
          sourceIds: ["source-fsa-bank-investment-subsidiary-2026"]
        },
        {
          id: "bank-business-succession-listed-companies",
          title: "上場会社を含む事業承継会社へどう出資するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "改正後は上場会社も事業承継会社に含め得る。銀行本体の議決権保有規制を前提に、基準議決権数を超える出資等は投資専門子会社を通じ、事業承継会社の要件と原則10年の保有期間を確認して行う。",
          exception: "上場会社であることだけで事業承継会社になるわけではなく、代表者の事情に起因する承継支援の必要性と承継計画に基づく支援等の要件を満たす必要がある。",
          uncertain: "上場会社を対象とする事業承継支援の実例はまだ少なく、案件設計・出口の実務は継続確認が必要である。",
          sourceIds: ["source-fsa-bank-investment-subsidiary-2026"]
        },
        {
          id: "bank-investment-subsidiary-ma-intermediation",
          title: "投資専門子会社がM&A仲介を行う場合に何を確認するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "2026年6月15日以降、投資専門子会社の業務範囲にM&A仲介業務が追加された。資金供給・経営支援と組み合わせる場合も、許容業務の範囲とグループ内管理を前提に運用する。",
          exception: "業務範囲に追加されたことは、個別案件で生じる利益相反、顧客説明、情報管理等の論点を免除するものではない。",
          uncertain: "資金供給とM&A仲介を同一グループ内で組み合わせる際の実務慣行は今後の運用を確認する必要がある。",
          sourceIds: ["source-fsa-bank-investment-subsidiary-2026"]
        },
        {
          id: "bank-leasing-income-dependence-2027",
          title: "リース子会社の収入依存度規制撤廃をどう扱うか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "銀行等グループに属するリース会社のファイナンス・リースに係る収入依存度規制の撤廃は2027年4月1日に施行されるため、施行前の現行規制と施行後の業務設計を分けて管理する。",
          exception: "2026年6月15日に施行された投資専門会社関係の改正と施行日が異なる。",
          uncertain: "施行後のグループ内業務配分や管理実務は各社の事業モデルに応じて確認する必要がある。",
          sourceIds: ["source-fsa-bank-investment-subsidiary-2026"]
        }
      ],
      sourceIds: ["source-fsa-bank-investment-subsidiary-2026"],
      practicalImpacts: [
        "銀行グループの投資専門子会社・投資方針",
        "事業承継ファンド・上場会社への承継支援",
        "合同会社・匿名組合・信託受益権等を用いた資金供給",
        "M&A仲介・案件紹介と利益相反管理",
        "議決権比率・保有期間管理",
        "リース子会社の業務範囲・収入依存度管理"
      ]
    });
  }

  window.TOPIC_DATA = topics;
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "aml-kyc-criminal-proceeds");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  topic.lastUpdated = "2026-09-19";
  topic.lastVerified = "2026-09-19";
  topic.sourceIds = addUnique(topic.sourceIds, "source-npa-aml-annual-report-2025");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-npa-aml-annual-report-20260312");
  topic.referenceArticleIds = addUnique(topic.referenceArticleIds, "article-tmi-dnfbp-aml-cft-20260917");

  if (!(topic.issues || []).some((issue) => issue && issue.id === "aml-dnfbp-governance")) {
    topic.issues = (topic.issues || []).concat({
      id: "aml-dnfbp-governance",
      title: "DNFBPsのAML/CFT体制と疑わしい取引届出をどう実効化するか",
      status: "interpreted",
      stage: "effective",
      views: [],
      conclusion: "宅地建物取引業者、宝石・貴金属等取扱事業者、郵便物受取サービス業者等のDNFBPsでは、法定の取引時確認・記録・疑わしい取引届出を前提に、自社リスクの特定・評価、モニタリング、内部規程、教育、監査、経営レベルの関与まで一体で運用し、対策の有効性を検証する。",
      exception: "リスクベース・アプローチは、リスクが低い取引について法定の取引時確認要件を任意に省略できるという意味ではない。業種ごとの監督指針・ガイドラインと犯収法上の最低要件を分けて確認する。",
      uncertain: "FATF第5次対日相互審査を見据えた監督・アウトリーチの強度や業種別の具体的な検査運用は、各所管行政庁の今後のガイドライン・要請・執行状況を継続確認する必要がある。",
      sourceIds: ["source-npa-aml-annual-report-2025"]
    });
  }

  if (topic.currentSummary) {
    topic.currentSummary.facts = addUnique(
      topic.currentSummary.facts,
      "警察庁JAFICの令和7年年次報告書では、疑わしい取引の年間通知101万9,405件のうちDNFBPsは439件（約0.04％）で、金融機関からはDNFBPsに関係する疑わしい取引情報が確認される一方、対応するDNFBPs側の届出が確認されない例があり、潜在的な情報の存在が指摘されている。"
    );
    topic.currentSummary.interpretations = addUnique(
      topic.currentSummary.interpretations,
      "DNFBPsのAML/CFTは、取引時確認や記録保存を形式的に実施するだけでなく、リスク評価と疑わしい取引の検知・届出を実際に機能させる『有効性』の観点で、内部規程・教育・監査・経営関与までつなげて見る必要がある。"
    );
    topic.currentSummary.implications = addUnique(
      topic.currentSummary.implications,
      "DNFBPに該当する事業者は、自社の特定業務・特定取引、顧客リスク、疑わしい取引の判断基準、モニタリング、統括管理者、教育・内部監査、取締役会等への報告を一つのAML/CFT管理サイクルとして棚卸しする。"
    );
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "DNFBPのリスク評価・疑わしい取引届出");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "AML/CFT内部規程・教育・監査・経営報告");
})();

(() => {
  const addition = {
    slug: "corporate-restructuring-labor",
    title: "M&A・組織再編と労働契約承継／労使関係",
    categories: ["M&A", "労務", "会社法"],
    summary: "合併・事業譲渡・会社分割で異なる労働契約承継ルール、企業価値担保権の設定・実行時の労使対応、2026年に継続する組織再編時の労働者保護見直しを、現行ルールと政策提案を分けて整理する。",
    lastUpdated: "2026-09-20",
    lastVerified: "2026-09-20",
    isNew: true,
    overview: [
      "M&A・組織再編では、合併、事業譲渡、会社分割のどの法形式を選ぶかによって、労働契約の承継方法と必要な手続が異なる。取引契約のクロージング条件だけでなく、労働者・労働組合への説明、同意、協議を早期に設計する必要がある。",
      "2026年5月25日から、企業価値担保権の創設に対応した改正事業譲渡等指針が適用され、担保権の実行手続における管財人の情報提供・団体交渉・事前協議や、担保権設定時の会社による労使コミュニケーションが具体化された。",
      "一方、事業譲渡一般について雇用の承継ルールや労使協議をさらに法制化するかは確定していない。厚生労働省の部会では2026年9月時点でもM&A実務・諸外国法制を含めて検討が続いている。",
      "このテーマでは、施行済みの指針・現行法と、審議会での将来の制度見直しを混ぜず、取引類型ごとの労務デューデリジェンスと承継実務へ落とし込む。"
    ],
    currentSummary: {
      facts: [
        "厚生労働省は、合併・事業譲渡・会社分割について法令上の労働契約承継の仕組みが異なることを前提に、組織再編時の労働関係を検討している。",
        "企業価値担保権の創設を踏まえた事業譲渡等指針の改正は2026年1月20日に告示され、2026年5月25日から適用されている。",
        "改正指針は、企業価値担保権の実行手続における管財人の情報提供、団体交渉、労働者・労働組合等との協議と、担保権設定時の会社による労使コミュニケーションを扱う。",
        "厚生労働省の組織再編部会は2026年9月14日の第8回でも、M&A調査会社からのヒアリングと諸外国の労働法制を扱っており、より広い労働者保護の制度見直しは継続中である。"
      ],
      interpretations: [
        "取引スキームを決めた後に労務対応を付け足すのではなく、労働契約・労働協約・組合関係・承継対象者をデューデリジェンス段階で整理し、スキームごとの承継ルールとクロージング日程を合わせる必要がある。",
        "事業譲渡の個別同意は署名取得だけをゴールにせず、労働条件の差分、承継先、検討期間を含む説明プロセスとして設計する方が紛争予防に資する。",
        "企業価値担保権は金融・担保の制度である一方、実行時の事業価値維持には人材の承継が不可欠であり、平時の資金調達段階から労使コミュニケーションと情報管理を接続する必要がある。",
        "事業譲渡の雇用承継を自動化・法制化するかについては労使で意見が分かれており、現時点の指針を将来の法的義務として先取りしない。"
      ],
      implications: [
        "M&Aの初期段階で、予定する再編法形式と労働契約承継の方式を確定し、必要な説明・同意・協議の工程をディールスケジュールへ組み込む。",
        "事業譲渡では、労働者ごとの労働条件差分、承継先情報、説明記録、同意取得の検討期間を管理し、形式的な署名だけに依存しない。",
        "労働組合がある案件では、団体交渉・事前協議・労働協約の承継を個別労働契約の承継とは別に棚卸しする。",
        "企業価値担保権を利用する会社・金融機関は、設定時の情報提供と、実行局面での管財人・スポンサー・労使の役割を事前に確認する。",
        "制度見直しが進んだ場合に備え、組織再編部会の取りまとめ、法案、指針改定を継続確認する。"
      ],
      uncertain: [
        "事業譲渡一般について雇用の当然承継、労使協議の法的義務、譲受会社の手続義務等を新たに導入するかは、2026年9月時点で結論が出ていない。",
        "個別事案では、再編の法形式だけでなく、説明・同意の経緯、労働協約、組合活動、不当労働行為、再編前後の解雇・労働条件変更等の事実関係により評価が変わる。"
      ]
    },
    issues: [
      {
        id: "restructuring-labor-current-framework",
        title: "合併・事業譲渡・会社分割で労働契約承継ルールをどう分けるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "再編法形式ごとに労働契約承継の法的効果と手続を分け、合併・事業譲渡・会社分割を一律に扱わない。取引スキーム決定時に労働契約・労働協約・労働組合関係を同時に棚卸しする。",
        exception: "個別の承継可否や労働条件変更は、法形式だけでなく契約内容、対象事業との関係、個別同意、法定手続、労使関係等の具体的事実を確認する。",
        uncertain: "より広い組織再編時の労働者保護については厚生労働省で見直しが継続中であり、将来ルールが変わる可能性がある。",
        sourceIds: ["source-mhlw-restructuring-labor-council-20260703"]
      },
      {
        id: "restructuring-business-transfer-consent",
        title: "事業譲渡で労働者の真意に基づく同意と説明をどう確保するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "事業譲渡で個別の労働契約を移す場面では、承継先、労働条件、不利益の内容等を十分に説明し、労働者が理解・検討できる時間を確保した上で同意を得る運用を設計する。",
        exception: "署名・押印があることだけで、あらゆる労働条件変更や承継の有効性が当然に確定するわけではない。個別事案の説明内容・不利益・意思形成過程を確認する。",
        uncertain: "どの程度の説明・期間で十分か、譲受会社がどこまで説明・協議主体となるべきかは、案件の規模・再編目的・労使関係によって異なる。",
        sourceIds: ["source-mhlw-business-transfer-guideline-20260120", "source-mhlw-restructuring-labor-council-20260703"]
      },
      {
        id: "restructuring-enterprise-value-security-labor",
        title: "企業価値担保権の設定・実行時に労使対応をどう組み込むか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年5月25日適用の改正事業譲渡等指針を基準に、設定時は会社による労使コミュニケーションを促進し、実行手続では管財人の情報提供、団体交渉、労働者・労働組合等との事前協議を事業譲渡プロセスへ組み込む。",
        exception: "担保権設定時と実行手続開始後では主体・義務・望ましい対応が異なるため、同じ対応を一律に求める整理にしない。",
        uncertain: "企業価値担保権を用いた実案件の蓄積は始まった段階であり、管財人・スポンサー・労使間の具体的な運用は事例の蓄積を継続確認する。",
        sourceIds: ["source-mhlw-business-transfer-guideline-20260120", "source-mhlw-restructuring-labor-council-20260703"]
      },
      {
        id: "restructuring-labor-policy-review",
        title: "事業譲渡等の労働者保護をさらに法制化・強化するか",
        status: "disputed",
        stage: "draft",
        views: [
          {
            id: "worker-protection-strengthening",
            label: "労働者側委員の見解",
            summary: "事業譲渡でも雇用承継ルールや労働組合等との協議義務を法的に整備し、譲受会社の手続や会社分割における保護も強化すべきとする。",
            sourceIds: ["source-mhlw-restructuring-labor-council-20260703"],
            articleIds: ["article-mhlw-restructuring-labor-council-20260703"]
          },
          {
            id: "transaction-flexibility-caution",
            label: "使用者側委員等の慎重論",
            summary: "事業譲渡は多様で、当然承継等の一律の強行ルールは窮境時の事業譲渡や事業再生を難しくし、結果として救える雇用を失わせるおそれがあるため慎重に検討すべきとする。",
            sourceIds: ["source-mhlw-restructuring-labor-council-20260703"],
            articleIds: ["article-mhlw-restructuring-labor-council-20260703"]
          }
        ],
        conclusion: "2026年9月時点では結論未確定。厚生労働省の部会は裁判例、M&A実務、諸外国法制等を材料に検討を継続しており、現行指針と将来の法制化提案を分けて扱う。",
        exception: "2026年5月25日適用の企業価値担保権対応の指針改正は施行済みだが、事業譲渡一般について雇用の当然承継等を新たに義務付けたものではない。",
        uncertain: "部会の取りまとめ時期、法案化の有無、指針改定・法改正の具体的内容は未確定である。",
        sourceIds: ["source-mhlw-restructuring-labor-council-20260703", "source-mhlw-restructuring-labor-council-20260914"]
      }
    ],
    sourceIds: [
      "source-mhlw-business-transfer-guideline-20260120",
      "source-mhlw-restructuring-labor-council-20260703",
      "source-mhlw-restructuring-labor-council-20260914"
    ],
    referenceArticleIds: [
      "article-mhlw-business-transfer-guideline-amendment-20260120",
      "article-mhlw-restructuring-labor-council-20260703",
      "article-ey-restructuring-labor-enterprise-value-security-20260206"
    ],
    practicalImpacts: [
      "再編法形式と労働契約承継の初期設計",
      "労務デューデリジェンス・承継対象者管理",
      "労働者への説明・同意取得記録",
      "労働組合との団体交渉・事前協議",
      "企業価値担保権の設定・実行時の労使対応",
      "組織再編時の労働者保護見直しのモニタリング"
    ]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === addition.slug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(addition);
  }
})();

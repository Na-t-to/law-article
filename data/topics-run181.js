(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "personal-information-protection-2026-amendment");
  if (!topic) return;

  const sourceId = "source-ppc-privacy-rulemaking-basic-1-2026";
  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.overview = addUnique(
    topic.overview,
    "2026年9月16日の個人情報保護委員会では、2026年改正法の施行に向けた政令・規則整備の『基本的な考え方（案）』の第1弾として、本人同意が不要となる場合、16歳未満の子供の個人情報、顔特徴データ等の特定生体個人情報について具体的な論点と方向性が示されました。現時点では下位ルールの検討案であり、最終的な政令・規則・ガイドラインではありません。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "2026年9月16日の第369回個人情報保護委員会で、改正法の政令・規則整備に向けた基本的な考え方（案）の第1弾が示され、本人同意の例外、16歳未満の子供、特定生体個人情報が具体化対象となった。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "契約履行に関する本人同意不要例外の『必要やむを得ない』は、必要性があり、かつ他の手段では契約目的を達成できない場合に限定する方向で、単に業務上便利であるという理由だけでは足りない。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "家族によるホテル予約や3-Dセキュア等、本人以外が関与する契約・契約締結前のデータ共有について、同意不要例外を使えるかをデータフロー単位で確認し、必要性と代替手段の有無を記録する。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "顔特徴データを扱うカメラ・センサーでは、機器周辺や検知対象者が十分認識できる場所での周知を前提に、表示内容、利用停止等請求への導線、Web上の詳細説明を設計する。"
  );
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "2026年9月16日資料は政令・規則整備の基本的な考え方と論点の案であり、具体的な規則文言、周知事項・方法、例外類型は今後の委員会審議・ガイドライン等で変更・具体化され得る。"
  );

  const issueMap = new Map((topic.issues || []).map((issue) => [issue && issue.id, issue]));
  const consent = issueMap.get("privacy-2026-consent-exceptions");
  if (consent) {
    consent.sourceIds = addUnique(consent.sourceIds, sourceId);
    consent.conclusion = "改正法は契約履行のため必要やむを得ないことが明らかな場合等について本人同意の例外を拡張する。2026年9月16日の委員会資料では、『必要やむを得ない』を必要性があり他の手段では契約目的を達成できない場合に限定する方向が示され、本人以外の家族によるホテル予約や、契約締結前の3-Dセキュアに伴うデバイス情報提供等を追加的な規則対象の例として検討している。";
    consent.uncertain = "家族予約、契約締結前のデータ共有その他の類型は政令・規則整備に向けた案であり、最終的な規則文言・判断基準・ガイドライン上の例示は今後の審議を確認する。";
  }

  const children = issueMap.get("privacy-2026-children");
  if (children) {
    children.sourceIds = addUnique(children.sourceIds, sourceId);
    children.uncertain = "法定代理人の関与に関する例外や、違法行為等の有無を問わない利用停止等請求の例外は2026年9月16日の委員会資料で具体化の方向が示されたが、最終的な政令・規則・ガイドラインは今後の審議を確認する。";
  }

  const biometric = issueMap.get("privacy-2026-biometric");
  if (biometric) {
    biometric.sourceIds = addUnique(biometric.sourceIds, sourceId);
    biometric.conclusion = "改正法は特定生体個人情報について周知義務、利用停止等請求の特則、オプトアウト提供の禁止を設ける。2026年9月16日の委員会資料では、現段階の対象候補として顔特徴データを挙げ、周知方法についてカメラ・センサー周辺など検知対象者が十分認識できる場所での分かりやすい掲示を軸に具体化する方向が示された。";
    biometric.uncertain = "顔特徴データ以外を対象とするか、周知事項・周知方法、利用停止等請求の例外類型は政令・規則の検討段階であり、最終ルールを確認する必要がある。";
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "家族予約等の第三者契約に伴うデータ共有");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "3-Dセキュア等の契約締結前データ共有");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "顔認証・カメラ周辺の周知表示");
})();

(() => {
  const exists = (window.TOPIC_DATA || []).some((item) => item && item.slug === "public-investment-trust-liquidity-risk");
  if (exists) return;
  window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([{
    slug: "public-investment-trust-liquidity-risk",
    title: "公募投資信託・流動性リスク管理／2027年監督指針適用",
    categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
    summary: "公募投資信託について、保有資産の流動性と解約条件の整合、変動型の信託財産留保額などの流動性管理措置、IOSCOのLMT・ガバナンスの考え方を、2027年10月適用の監督指針改正と分けて整理する。",
    lastUpdated: "2026-09-17",
    lastVerified: "2026-09-17",
    isNew: true,
    overview: [
      "金融庁は2026年9月16日、公募投資信託の流動性リスク管理を対象とする監督指針改正を最終化し、2027年10月1日から適用すると公表しました。",
      "改正後の監督指針では、保有資産の流動性に応じた解約条件の設定や、変動型の信託財産留保額の導入など、公募投資信託の流動性に関する合理的な措置を講じているかが、投資運用業者に対する監督上の評価項目に加わります。",
      "背景には2025年のIOSCO改訂勧告・ガイダンスがあり、資産・ポートフォリオの流動性、解約条件、希釈化防止LMT、ガバナンスやストレス時対応を一体で考える流れがあります。ただし、IOSCOの具体的な分類閾値や全LMTがそのまま国内の法的義務になったわけではありません。"
    ],
    currentSummary: {
      facts: [
        "金融庁は2026年9月16日に監督指針改正を最終化し、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すための評価項目を新設した。",
        "新設項目は、保有資産の流動性に応じた解約条件の設定や変動型の信託財産留保額の導入など、公募投資信託の流動性に関する合理的な措置を講じているかを確認するもの。",
        "パブリックコメントを受け、当該評価項目の対象が公募投資信託であることが文言上明確化された。",
        "改正後の監督指針は2027年10月1日から適用される。"
      ],
      interpretations: [
        "監督指針の文言は、すべての公募投資信託に変動型の信託財産留保額を一律導入するよう命じるものではなく、資産の流動性と解約条件を踏まえた合理的な措置を評価する枠組みとして読む必要がある。",
        "IOSCOのLMTやカテゴリーアプローチは国内改正の背景を理解するうえで重要だが、国際ガイダンス上の例示的な分類比率や各ツールを、そのまま日本の確定した法的閾値・義務として扱わない。",
        "固定型の信託財産留保額を採用しているファンドでは、実際の流動性コストをどの程度反映できているかを検証し、必要に応じて変動型その他の措置との比較検討が必要になる。"
      ],
      implications: [
        "公募ファンドごとに、通常時・ストレス時の保有資産の換金性と、解約頻度・通知期間・受渡期間を棚卸しする。",
        "信託財産留保額を採用している場合は、固定額の設定根拠と実際の売買コスト・マーケットインパクトの乖離を確認し、変動型を含む代替手段を検討する。",
        "商品企画、運用、リスク管理、コンプライアンス、ファンド管理・システムの担当を横断して、2027年10月までの改修要否と実装スケジュールを整理する。",
        "IOSCOが示すガバナンス、ストレステスト、コンティンジェンシープラン、投資家開示も参考にしつつ、国内監督指針で明示された事項と国際的なベストプラクティスを区別して準備する。"
      ],
      uncertain: [
        "監督指針は合理的な措置の例として解約条件や変動型の信託財産留保額を挙げるにとどまり、ファンド類型ごとの具体的な実装水準や当局の検証実務は2027年10月の適用に向けてさらに具体化・蓄積する可能性がある。",
        "日本でどの希釈化防止LMTが実務上普及するか、信託財産留保額の変動化に伴うシステム・約款・販売実務の標準は現時点で確立していない。"
      ]
    },
    issues: [
      {
        id: "fund-liquidity-supervisory-guideline",
        title: "2027年適用の監督指針で何が評価対象になるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2027年10月1日から、投資運用業者の公募投資信託について、保有資産の流動性に応じた解約条件や変動型の信託財産留保額の導入など、流動性に関する合理的な措置を講じているかが監督上の評価項目となる。",
        exception: "監督指針自体も業務内容・規模等を踏まえた総合判断を前提としており、例示された特定の手段を採っていないことだけで直ちに不適切となるものではない。",
        uncertain: "合理的な措置の具体的水準やファンド類型別の検証実務は、適用開始後を含め今後の監督・市場実務で具体化していく可能性がある。",
        sourceIds: ["source-fsa-public-fund-liquidity-guideline-2026"]
      },
      {
        id: "fund-liquidity-redemption-lmt",
        title: "解約条件・信託財産留保額・LMTをどう設計するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "資産の流動性と解約条件を整合させ、設定・解約に伴う流動性コストや既存投資家への希釈化を踏まえて、変動型の信託財産留保額を含む合理的な流動性管理措置を検討する。",
        exception: "IOSCOのカテゴリー区分やスイング・プライシング等の各LMTは国際的なガイダンス・選択肢であり、2026年の国内監督指針改正が全てを一律に義務付けたものではない。",
        uncertain: "固定型の信託財産留保額をどの範囲で見直すか、変動型その他のLMTを導入する場合の約款・システム・販売実務は今後の業界実務を継続確認する。",
        sourceIds: ["source-fsa-public-fund-liquidity-guideline-2026", "source-fsa-iosco-fund-liquidity-2025"]
      }
    ],
    sourceIds: ["source-fsa-public-fund-liquidity-guideline-2026", "source-fsa-iosco-fund-liquidity-2025"],
    referenceArticleIds: ["article-fsa-public-fund-liquidity-guideline-2026", "article-pwc-fund-liquidity-regulation-2025"],
    practicalImpacts: ["公募投資信託の商品設計", "解約条件・通知期間・受渡期間", "信託財産留保額・LMT", "流動性ストレス管理", "商品・リスク・コンプライアンスのガバナンス", "ファンド管理システム"]
  }]);
})();

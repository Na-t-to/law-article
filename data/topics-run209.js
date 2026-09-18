(() => {
  const additions = [
    {
      slug: "jc-star-iot-security-labeling",
      title: "JC-STAR／IoT製品セキュリティ・ラベリングと調達",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      summary: "IoT製品のセキュリティ対策を共通基準で評価・可視化する任意制度JC-STARについて、対象製品、★1〜★4の評価方式、政府・企業調達での使い方、取得前の表示管理、上位レベルの整備状況を整理する。",
      lastUpdated: "2026-09-18",
      lastVerified: "2026-09-18",
      isNew: true,
      overview: [
        "JC-STARは、経済産業省の制度構築方針に基づきIPAが運営する、IoT製品のセキュリティ要件への適合性を確認・可視化する任意の多段階ラベリング制度である。★1は2025年3月25日に申請受付が始まり、対象製品や調達場面に応じて★2〜★4を整備する構造になっている。",
        "制度は法令上の一律の取得義務ではない一方、政府機関等の調達基準や各分野の調達・選定基準へ組み込む方向で活用が進められているため、製品ベンダーと調達側の双方にとって実務上の意味がある。",
        "適合ラベルは、そのレベルで想定する脅威に対する最低限のセキュリティ水準への適合を示すものであり、製品の完全・完璧なセキュリティを保証するものではない。ラベルの有無と、自社システムの重要度に応じた追加審査・運用管理を分けて考える必要がある。",
        "2026年6月には通信機器・ネットワークカメラ向け★3のセキュリティ要件・適合要件が公表された一方、評価ガイドはなお準備中である。制度の整備状況はレベル・製品類型ごとに確認する。"
      ],
      currentSummary: {
        facts: [
          "JC-STARは、IPを用いてインターネットへ直接・間接に接続する幅広いIoT製品を対象とする任意の多段階制度で、PC・スマートフォン等は原則として対象外とされる。",
          "★1・★2はベンダーの自己適合宣言を基礎にIPAがラベルを付与し、★3・★4は独立した第三者評価機関の評価報告書に基づいてIPAが認証・ラベルを付与する。",
          "★1の申請受付は2025年3月25日に開始されている。2026年6月12日には通信機器・ネットワークカメラの★3セキュリティ要件・適合要件が公表され、同日時点で★3評価ガイドは準備中とされている。",
          "IPAは、ラベル交付前に仮登録番号なしで『JC-STAR適合予定』『適合ラベル対応』『適合ラベル取得申請中』等と表示することを認めておらず、不正な表示には事実公表を含む対応の可能性を示している。"
        ],
        interpretations: [
          "調達側にとってJC-STARは製品セキュリティを比較する共通の証跡として有用だが、ラベルだけでシステム全体のサプライチェーン・リスクや運用上の安全性まで保証されるわけではない。",
          "ベンダー側では、対象製品の洗い出し、製品類型判定、要件とのGAP分析、実装、証跡整備、脆弱性情報の継続管理までを、法務・セキュリティ・製品部門の横断プロセスとして設計するのが実務的である。",
          "★2以上の整備・申請状況は製品類型ごとに進むため、古い解説記事の予定時期だけを基準にせず、IPAの現行ページで利用可能なレベルと評価手順を確認する必要がある。"
        ],
        implications: [
          "製品ベンダーは、自社製品がJC-STARの対象に入るかを棚卸しし、対象となる場合は適合基準とのGAP分析、対応計画、評価証跡、脆弱性受付・更新情報の運用を整える。",
          "調達側は、JC-STARラベルを最低要件・加点要素・確認資料のどこに位置付けるかをシステム重要度ごとに決め、必要に応じてベンダー体制、アップデート方針、契約上の報告義務等を追加確認する。",
          "営業・マーケティングは、申請受理前や仮登録番号取得前に『適合予定』『申請中』等と表示しないよう、製品ページ、提案書、カタログ、販売代理店向け資料の表示承認フローを設ける。",
          "海外展開では英国PSTI法・シンガポールCLSとの相互承認を活用し得るが、相互承認の対象要件や追加手続・言語対応を個別に確認する。"
        ],
        uncertain: [
          "★2〜★4の対象製品類型、申請受付時期、評価ガイドその他の運用資料は今後も順次整備・更新されるため、製品ごとに最新のIPA情報を確認する必要がある。",
          "民間企業の調達でどのレベルを要求するかは一律ではなく、業界基準、システム重要度、製品用途、他のセキュリティ審査との関係に応じて設計する必要がある。"
        ]
      },
      issues: [
        {
          id: "jcstar-voluntary-scope",
          title: "JC-STARは誰に何を義務付ける制度か",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "JC-STARはIoT製品のセキュリティ適合性を可視化する任意制度であり、対象製品のベンダーへ一律にラベル取得を法的義務として課す制度ではない。ただし政府機関等の調達基準への組込みが進んでおり、取引・調達上の要件として重要性を持ち得る。",
          exception: "個別の業法、調達基準、契約条件、海外法令等によって別途セキュリティ要求が課される場合は、JC-STARの任意性とは切り分けて確認する。",
          uncertain: "民間市場での要求水準や業界ごとの標準化は今後も変化し得る。",
          sourceIds: ["source-meti-jcstar-launch-20250325", "source-ipa-jcstar-procurement-20260709"]
        },
        {
          id: "jcstar-level-evaluation",
          title: "★1〜★4の評価方式と現在の整備状況をどう読むか",
          status: "authoritative",
          stage: "under_revision",
          views: [],
          conclusion: "★1・★2は自己適合宣言方式、★3・★4は第三者評価を基礎とする。★1は運用中で、通信機器・ネットワークカメラの★3要件は2026年6月に公表されたが、評価ガイド等は整備途上であるため、レベル・製品類型ごとに現行の申請・評価手順を確認する。",
          exception: "過去の制度説明資料や解説に記載された予定時期は、その後の整備状況を示す最新情報で上書きして確認する。",
          uncertain: "★2〜★4の全製品類型についての具体的な申請受付時期や評価手順は、今後の公表・更新を追う必要がある。",
          sourceIds: ["source-meti-jcstar-launch-20250325", "source-ipa-jcstar-portal-20260731", "source-ipa-jcstar-star3-20260612"]
        },
        {
          id: "jcstar-procurement-use",
          title: "調達側はラベルをどこまで選定基準に使うべきか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "JC-STARは製品セキュリティを共通の物差しで確認する手段として調達基準へ組み込めるが、ラベル取得だけで利用環境の全リスクを代替せず、システム重要度に応じた追加確認と組み合わせる。",
          exception: "政府機関等のガイドラインや業界基準で特定レベルが要求・推奨される場合は、その基準を優先して確認する。",
          uncertain: "民間企業における最低要求レベルや他の認証・監査との使い分けは、業界・用途ごとに異なる。",
          sourceIds: ["source-ipa-jcstar-procurement-20260709", "source-ipa-jcstar-portal-20260731"]
        },
        {
          id: "jcstar-label-claims",
          title: "取得前の『JC-STAR適合予定・申請中』表示をどう管理するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "IPAから受理番号が通知される前や、受理後でも仮登録番号を取得・表示していない状態で、『JC-STAR適合予定』『適合ラベル対応』『適合ラベル取得申請中』等の取得済み・取得見込みと誤認させる表示を行わない。",
          exception: "受理番号受領後、ラベル取得前に案内する場合は、IPAの手続に従って仮登録番号を取得し、その表示条件を守る。",
          uncertain: "個々の広告表現について景品表示法その他の法令上どのように評価されるかは、IPA制度上の表示ルールとは別に個別確認が必要。",
          sourceIds: ["source-ipa-jcstar-portal-20260731"]
        }
      ],
      sourceIds: [
        "source-meti-jcstar-launch-20250325",
        "source-ipa-jcstar-portal-20260731",
        "source-ipa-jcstar-procurement-20260709",
        "source-ipa-jcstar-star3-20260612"
      ],
      referenceArticleIds: [
        "article-meti-jcstar-launch-20250325",
        "article-ipa-jcstar-portal-20260731",
        "article-ipa-jcstar-procurement-20260709",
        "article-unitis-tmi-jcstar-20251208"
      ],
      workflowTags: [
        "IoT製品の対象判定と製品台帳",
        "JC-STAR要件とのGAP分析・証跡整備",
        "調達基準・ベンダー審査・契約条件",
        "適合ラベル表示・広告審査",
        "脆弱性情報・アップデート運用"
      ]
    }
  ];

  const existing = new Set((window.TOPIC_DATA || []).map((item) => item && item.slug));
  const fresh = additions.filter((item) => !existing.has(item.slug));
  if (fresh.length) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(fresh);
})();

(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    for (const value of values || []) if (value && !target.includes(value)) target.push(value);
  };

  const cyber = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");
  if (cyber) {
    cyber.lastUpdated = "2026-09-18";
    cyber.lastVerified = "2026-09-18";
    addUnique(cyber.sourceIds, ["source-fsa-cyber-common-reporting-guidelines-20260918"]);
    addUnique(cyber.overview, [
      "2026年9月18日、金融庁は監督指針・事務ガイドラインのサイバーインシデント報告様式改正を最終化した。9月15日の関係省庁申合せ改正で追加された『その他サイバー攻撃等事案共通様式』を含むDDoS・ランサムウェア・その他の共通様式へ、金融庁所管業者の従来報告様式を2026年10月1日から移行する。"
    ]);
    cyber.currentSummary = cyber.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    addUnique(cyber.currentSummary.facts, [
      "金融庁は2026年9月18日、主要行・地域金融機関・保険・金融商品取引業者・貸金・資金移動・暗号資産等に係る監督指針・事務ガイドラインの報告様式改正を最終化し、2026年10月1日から関係省庁共通様式へ移行することを確定した。"
    ]);
    addUnique(cyber.currentSummary.implications, [
      "金融庁所管業者は、従来のシステム障害・サイバー事案報告様式と共通様式の項目対応を確認し、CSIRT・法務・監督当局連絡のテンプレートと入力責任を2026年10月1日までに更新する。"
    ]);
    const issue = (cyber.issues || []).find((item) => item && item.id === "cyber-countermeasures-reporting");
    if (issue) addUnique(issue.sourceIds, ["source-fsa-cyber-common-reporting-guidelines-20260918"]);
    if (Array.isArray(cyber.referenceArticleIds)) addUnique(cyber.referenceArticleIds, ["article-fsa-cyber-common-reporting-guidelines-20260918"]);
    addUnique(cyber.practicalImpacts, ["金融庁監督下の金融機関等：サイバー報告様式を関係省庁共通様式へ移行"]);
  }

  const privacy = (window.TOPIC_DATA || []).find((item) => item && item.slug === "privacy-enforcement-breach-response");
  if (privacy) {
    privacy.lastUpdated = "2026-09-18";
    privacy.lastVerified = "2026-09-18";
    addUnique(privacy.sourceIds, ["source-ppc-forensics-keypoints-20260116"]);
    addUnique(privacy.overview, [
      "2026年1月16日の『不正アクセス発生時のフォレンジック調査の有効活用に向けた着眼点』は、平時の情報資産・ログ・対応フローの整備、初動の封じ込めと証拠保全、専門調査の選定・活用を一連の事故対応として整理している。フォレンジック会社への調査依頼そのものが法令上の一律義務であるとはしていない。"
    ]);
    privacy.currentSummary = privacy.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    addUnique(privacy.currentSummary.facts, [
      "個人情報保護法サイバーセキュリティ連絡会は2026年1月16日、不正アクセス時のフォレンジック活用について、情報資産の把握、適切なログ保管、対応フロー、早期の封じ込め、必要に応じた専門機関への相談、調査結果の原因・影響範囲・再発防止への利用を整理した。"
    ]);
    addUnique(privacy.currentSummary.interpretations, [
      "フォレンジックは漏えいの有無・侵入経路・被害範囲を確認する有力な手段だが、外部調査会社への依頼自体が個人情報保護法上の一律の法定義務というわけではない。事故の性質と必要性に応じて用いる。"
    ]);
    addUnique(privacy.currentSummary.implications, [
      "復旧を急ぐ場面でも証拠を失わないよう、平時から情報資産台帳、ログ取得・保管、エスカレーション、ネットワーク隔離、外部フォレンジック会社への連絡・発注手順をCSIRTと法務で確認する。"
    ]);
    const forensic = (privacy.issues || []).find((item) => item && item.id === "privacy-incident-forensics-readiness");
    if (forensic) {
      addUnique(forensic.sourceIds, ["source-ppc-forensics-keypoints-20260116"]);
      forensic.conclusion = "不正アクセス時の原因・侵害範囲・情報持出しの有無を判断できるよう、平時から情報資産、ネットワーク構成、必要なログ、社内外の対応フローを整え、事故時は封じ込めと証拠保全を両立しつつ必要に応じて専門調査を利用する。";
      forensic.exception = "フォレンジック会社への調査依頼自体が個人情報保護法やサイバー対処能力強化法により一律に義務付けられているわけではなく、事案ごとに調査の必要性・範囲を判断する。";
    }
    const breach = (privacy.issues || []).find((item) => item && item.id === "privacy-enforcement-breach-reporting");
    if (breach) addUnique(breach.sourceIds, ["source-ppc-forensics-keypoints-20260116"]);
    const safety = (privacy.issues || []).find((item) => item && item.id === "privacy-enforcement-safety-management");
    if (safety) addUnique(safety.sourceIds, ["source-ppc-forensics-keypoints-20260116"]);
    if (Array.isArray(privacy.referenceArticleIds)) addUnique(privacy.referenceArticleIds, ["article-ppc-forensics-keypoints-20260116", "article-miyake-ransomware-72h-20260918"]);
    addUnique(privacy.practicalImpacts, ["フォレンジック調査の平時準備・証拠保全"]);
  }
})();

(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    for (const value of values || []) if (value && !target.includes(value)) target.push(value);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "advertising-display-control");
  if (!topic) return;

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  if (!Array.isArray(topic.sourceIds)) topic.sourceIds = [];
  addUnique(topic.sourceIds, ["source-caa-kinpodo-funeral-price-order-20260918"]);

  topic.currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
  for (const key of ["facts", "interpretations", "implications", "uncertain"]) {
    if (!Array.isArray(topic.currentSummary[key])) topic.currentSummary[key] = [];
  }
  addUnique(topic.currentSummary.facts, [
    "消費者庁は2026年9月18日、株式会社金宝堂の家族葬サービスのテレビCMで『家族葬 10.45万円〜（税込）』等と表示し、最低料金10万4500円で提供されるかのように示した一方、実際には僅かな場合を除き30万8000円以上が必要だったとして、景品表示法5条2号の有利誤認で措置命令した。"
  ]);
  addUnique(topic.currentSummary.interpretations, [
    "最低価格・『○円〜』表示は文言だけを見るのではなく、その価格で実際に役務提供を受けられる条件・適用可能性と、表示全体から一般消費者が受ける認識を突合する必要がある。"
  ]);
  addUnique(topic.currentSummary.implications, [
    "料金広告の承認時に、料金表、必須費用・必須オプション、例外条件、広告価格で成立する実例を確認し、通常必要となる費用との大きな乖離を隠す『〜』表示になっていないかを審査する。"
  ]);

  if (!Array.isArray(topic.issues)) topic.issues = [];
  if (!topic.issues.some((item) => item && item.id === "display-minimum-price-claims")) {
    topic.issues.push({
      id: "display-minimum-price-claims",
      title: "『○円〜』などの最低価格表示をどう審査するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "最低価格・『○円〜』を表示する場合、一般消費者がその価格で役務提供を受けられる条件と実際の取引条件を確認する。2026年9月18日の金宝堂措置命令では、10万4500円から提供されるように表示していた一方、僅かな場合を除き30万8000円以上が必要であり、有利誤認と判断された。",
      exception: "『○円〜』という表現自体が一律に禁止されるわけではなく、表示全体から受ける最低価格の認識と、その価格で実際に取引できる条件・適用可能性を個別に確認する。",
      uncertain: "どの程度の適用例の少なさや追加費用が『実際のものよりも著しく有利』に当たるかは、表示内容と取引実態ごとの判断となる。",
      sourceIds: ["source-caa-kinpodo-funeral-price-order-20260918"]
    });
  }

  if (!Array.isArray(topic.referenceArticleIds)) topic.referenceArticleIds = [];
  addUnique(topic.referenceArticleIds, ["article-caa-kinpodo-funeral-price-order-20260918"]);
  if (Array.isArray(topic.practicalImpacts)) addUnique(topic.practicalImpacts, ["最低価格・『〜』表示と実取引条件の照合"]);
  if (Array.isArray(topic.workflowTags)) addUnique(topic.workflowTags, ["最低価格・『〜』表示と実取引条件の照合"]);
})();

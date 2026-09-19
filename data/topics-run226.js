(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  const advertising = (window.TOPIC_DATA || []).find((item) => item && item.slug === "advertising-display-control");
  if (advertising) {
    advertising.lastUpdated = "2026-09-20";
    advertising.lastVerified = "2026-09-20";
    advertising.sourceIds = addUnique(advertising.sourceIds, "source-caa-kinpodo-funeral-price-order-20260918");
    advertising.referenceArticleIds = addUnique(advertising.referenceArticleIds, "article-caa-kinpodo-funeral-price-order-20260918");

    if (!(advertising.issues || []).some((issue) => issue && issue.id === "display-price-conditions")) {
      advertising.issues = (advertising.issues || []).concat({
        id: "display-price-conditions",
        title: "広告の最低価格と実際にその価格で利用できる条件をどう一致させるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "広告で特定のサービス内容と最低価格を一体として訴求する場合、その価格で実際に当該サービスを利用できる条件・範囲が表示から受ける印象と対応しているかを確認する。例外的な場合を除き大幅に高い費用が必要なのに、広告されたサービスが低い最低価格から利用できるように示す表示は、有利誤認となり得る。",
        exception: "低価格の別プラン自体が実在していても、広告全体から消費者が認識する対象役務と当該低価格プランの内容が異なる場合には、それだけで表示の問題が解消されるとは限らない。",
        uncertain: "有利誤認の該当性は、価格表示だけでなく、同時に示された役務内容、音声・映像、注記、実際にその価格で利用できる割合・条件等を含む表示全体から個別に判断される。",
        sourceIds: ["source-caa-kinpodo-funeral-price-order-20260918"]
      });
    }

    if (advertising.currentSummary) {
      advertising.currentSummary.facts = addUnique(
        advertising.currentSummary.facts,
        "消費者庁は2026年9月18日、貸切ホールを用いる家族葬について『家族葬 10.45万円〜』等と表示しながら、実際には僅かな場合を除き30万8000円以上が必要だった表示を有利誤認として措置命令した。"
      );
      advertising.currentSummary.interpretations = addUnique(
        advertising.currentSummary.interpretations,
        "価格表示の審査では、低価格プランが形式的に存在するかだけでなく、広告全体から一般消費者がどのサービスをその価格で利用できると受け取るかと、実際の提供条件が一致しているかを見る必要がある。"
      );
      advertising.currentSummary.implications = addUnique(
        advertising.currentSummary.implications,
        "『○円〜』『最低○円』等の広告は、同時に訴求するサービス内容、適用条件、実際の販売・提供実績を広告審査で突合し、例外的にしか成立しない価格を中心表示に使わない。"
      );
    }

    advertising.practicalImpacts = addUnique(advertising.practicalImpacts, "価格表示・最安値広告の審査");
  }

  const consumerContract = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (consumerContract) {
    consumerContract.referenceArticleIds = addUnique(consumerContract.referenceArticleIds, "article-businesslawyers-mhm-terms-injunction-20260916");
    consumerContract.practicalImpacts = addUnique(consumerContract.practicalImpacts, "利用規約の免責・専属管轄・一方的変更・パスワード条項");
  }

  const customerHarassment = (window.TOPIC_DATA || []).find((item) => item && item.slug === "customer-harassment");
  if (customerHarassment) {
    customerHarassment.referenceArticleIds = addUnique(customerHarassment.referenceArticleIds, "article-businesslawyers-nishino-customer-harassment-line-20260915");
    customerHarassment.practicalImpacts = addUnique(customerHarassment.practicalImpacts, "カスハラ対応の打切り・エスカレーション基準");
  }
})();
(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueMany = (list, values) => (values || []).reduce((next, value) => addUnique(next, value), Array.isArray(list) ? list : []);

  const dbs = {
    slug: "child-sexual-violence-prevention-dbs",
    title: "こども性暴力防止法（日本版DBS）・人事／情報管理",
    categories: ["労務", "個人情報", "危機管理・コンプライアンス"],
    summary: "2026年12月25日施行のこども性暴力防止法について、対象事業・対象業務、犯罪事実確認、採用・配置、防止措置、情報管理、相談・調査・保護を、こども家庭庁の法令・ガイドライン・Q&Aと実務解説から整理する。",
    lastUpdated: "2026-09-20",
    lastVerified: "2026-09-20",
    isNew: true,
    overview: [
      "こども性暴力防止法は、学校・認可保育所等の学校設置者等に法定義務を課すとともに、一定の民間教育保育等事業者について認定を受けた場合の義務と表示制度を設ける。",
      "制度は犯罪事実確認だけでなく、初犯防止、早期把握、相談、調査、被害児童等の保護・支援、研修、防止措置、犯罪事実確認結果の厳格な情報管理を組み合わせる。",
      "2026年9月には施行ガイドライン・ひな型とQ&Aが相次いで更新され、採用時の誓約、就業規則、情報管理規程、対象従事者の判断など施行準備の具体像が増えている。"
    ],
    currentSummary: {
      facts: [
        "こども性暴力防止法は2024年6月19日に成立、同月26日に公布され、2026年12月25日に施行される。",
        "学校設置者等は対象業務に従事する教員等について法に基づく措置義務を負い、民間教育保育等事業者は認定を受けた場合に認定事業者等として同様の枠組みに入る。",
        "対象範囲は、児童等に対する支配性・継続性・閉鎖性という観点を踏まえて設定され、肩書や雇用形態だけでなく実際の業務内容を確認する。",
        "こども家庭庁は2026年9月2日に施行ガイドラインと各種ひな型を更新し、9月18日にQ&Aを改訂した。"
      ],
      interpretations: [
        "施行準備は対象者リストを作って犯罪事実確認を行うだけでは足りず、採用、配置、相談・調査・保護、研修、情報管理、漏えい時対応まで一つの統制として設計する必要がある。",
        "犯罪事実確認の『該当なし』という結果も保護対象となるため、外部から個々の従事者の確認結果を尋ねられても結果自体ではなく制度・体制を説明する運用が安全である。",
        "総合職等で将来こどもと接する可能性があるだけの採用では、性犯罪前科の確認を一律に行うのではなく、対象業務に就く可能性、確認の合理性・必要性、公正な採用選考、本人への説明を案件ごとに検討する必要がある。"
      ],
      implications: [
        "自社・法人の事業が義務対象か認定対象かを整理し、対象業務と対象従事者を職種名ではなく実際の業務からリスト化する。",
        "募集要項、誓約書、内定通知、就業規則、配置転換・防止措置の判断経路を公式ひな型を参照しつつ自社運用へ落とす。",
        "犯罪事実確認情報の閲覧者を必要最小限に絞り、権限設定、取扱記録、保存・廃棄、外部照会、漏えい時対応を情報管理規程へ反映する。",
        "相談、早期把握、調査、被害児童等の保護・支援、研修を犯罪歴確認とは別の安全確保措置として整える。"
      ],
      uncertain: [
        "対象業務の境界や採用・配置上の対応は事業類型・職務内容・労働関係法令との関係で個別判断が必要である。",
        "施行後の認定、犯罪事実確認、情報管理、監督の実務運用は今後の事例・Q&A更新を継続確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "dbs-scope-business-role",
        title: "どの事業・業務・従事者が対象になるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "学校設置者等の義務対象と認定を受ける民間教育保育等事業者を区別し、対象業務・対象従事者は支配性・継続性・閉鎖性等を踏まえ、実際の職務内容から判定する。",
        exception: "同じ事業者内でも全従業員が一律に対象となるとは限らず、派遣・業務委託等も契約名称だけで除外しない。",
        uncertain: "複合事業、兼務、短時間・スポット業務等はガイドライン・Q&Aと実態を照合して個別に確認する。",
        sourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918", "source-cfa-child-sexual-violence-qa-20260918"]
      },
      {
        id: "dbs-criminal-check-hiring",
        title: "犯罪事実確認と採用・配置をどう接続するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "対象業務に就く者の犯罪事実確認を法定手続に沿って行い、採用段階の誓約・内定条件や確認後の配置等を労働関係法令と整合させる。総合職等で将来対象業務に就く可能性にとどまる場合の前科確認は、合理性・必要性と公正採用の観点から慎重に判断する。",
        exception: "対象業務に従事することが明らかな職種と、将来の配属可能性しかない職種を同じ採用ルールで扱わない。",
        uncertain: "内定取消し、配置転換等の具体的な適法性は個別の労働契約・就業規則・事実関係により異なる。",
        sourceIds: ["source-cfa-child-sexual-violence-qa-20260918", "source-cfa-child-sexual-violence-templates-20260902"]
      },
      {
        id: "dbs-information-management",
        title: "犯罪事実確認結果を誰が見て、どう保存・回答するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "犯罪事実確認結果へのアクセスを必要最小限に絞り、権限、取扱記録、保存・廃棄、内部共有、外部照会、漏えい時対応を規程と実運用で統制する。『該当なし』も保護対象として扱う。",
        exception: "防止措置の検討・実施に必要な最小限の関係者への内部共有まで一律に禁止されるものではない。",
        uncertain: "組織規模・システム構成に応じた権限分離、記録保存の具体設計は各事業者で調整が必要。",
        sourceIds: ["source-cfa-child-sexual-violence-qa-20260918", "source-cfa-child-sexual-violence-templates-20260902"]
      },
      {
        id: "dbs-prevention-response",
        title: "犯罪事実確認以外の予防・相談・調査・保護をどう整えるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "初犯防止、早期把握、相談、事実確認・調査、被害児童等の保護・支援、研修、防止措置を一連の安全確保措置として整備する。",
        exception: "犯罪事実確認で問題がなかったことを、将来の性暴力リスクがないことの保証として扱わない。",
        uncertain: "具体的な相談・調査・支援の手順は施設類型、児童等との接点、既存の安全管理体制に応じて設計する必要がある。",
        sourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918", "source-cfa-child-sexual-violence-templates-20260902"]
      },
      {
        id: "dbs-employment-rules-templates",
        title: "求人・誓約・内定通知・就業規則をどう準備するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "こども家庭庁の募集要項・求人票、誓約書・内定通知書、就業規則等の参考例を基礎に、自社の対象業務・採用区分・配置運用に合う文言と承認フローへ調整する。",
        exception: "公式の参考例は個別企業へそのまま適用される強制文言ではなく、対象業務や既存規程との整合を確認する。",
        uncertain: "既存の就業規則・懲戒事由・配置権限との接続は各社の制度に応じた見直しが必要。",
        sourceIds: ["source-cfa-child-sexual-violence-templates-20260902", "source-cfa-child-sexual-violence-qa-20260918"]
      }
    ],
    sourceIds: [
      "source-cfa-child-sexual-violence-act-hub-20260918",
      "source-cfa-child-sexual-violence-qa-20260918",
      "source-cfa-child-sexual-violence-templates-20260902"
    ],
    referenceArticleIds: [
      "article-cfa-child-sexual-violence-qa-20260918",
      "article-miyake-japan-dbs-info-hiring-20260814",
      "article-tmi-child-sexual-violence-scope-20260710"
    ],
    practicalImpacts: [
      "対象事業・対象従事者リスト",
      "募集要項・採用条件・誓約書",
      "内定通知・配置転換・防止措置",
      "就業規則",
      "相談・調査・被害者保護",
      "情報管理規程・権限設定・ログ",
      "漏えい時対応",
      "研修・周知"
    ]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === dbs.slug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(dbs);
  }

  const privacy = (window.TOPIC_DATA || []).find((item) => item && item.slug === "personal-information-protection-2026-amendment");
  if (privacy) {
    privacy.lastUpdated = "2026-09-20";
    privacy.lastVerified = "2026-09-20";
    privacy.sourceIds = addUnique(privacy.sourceIds, "source-ppc-apppi-subrules-369-20260916");
    privacy.referenceArticleIds = addUniqueMany(privacy.referenceArticleIds, [
      "article-ppc-apppi-subrules-369-20260916",
      "article-miyake-apppi-subrules-20260918"
    ]);

    if (privacy.currentSummary) {
      privacy.currentSummary.facts = addUnique(privacy.currentSummary.facts, "個人情報保護委員会は2026年9月16日、2026年改正法の下位ルールについて、同意例外、16歳未満の者の個人情報等、顔特徴データに関する政令・規則の基本的な考え方（案）を公表した。最終的な政令・規則ではなく検討段階の資料である。");
      privacy.currentSummary.facts = addUnique(privacy.currentSummary.facts, "同日、改正法本体とは別に、安全管理措置ガイドライン別添の手法例示について、クラウド利用、認証、侵害拡大防止等を含む見直しの方向性も示された。");
      privacy.currentSummary.implications = addUnique(privacy.currentSummary.implications, "第三者提供・要配慮個人情報、16歳未満向けサービス、顔識別・生体データ、情報セキュリティ統制について、下位ルール案で影響する業務フローを先に棚卸しし、最終規則・ガイドラインとの差分を追えるようにする。");
      privacy.currentSummary.uncertain = addUnique(privacy.currentSummary.uncertain, "2026年9月16日の政令・規則資料と安全管理措置資料はいずれも検討段階であり、具体的要件・手法例示は今後の委員会審議・パブリックコメント等で変更され得る。");
    }

    const issueSourceMap = {
      "privacy-2026-consent-exceptions": "source-ppc-apppi-subrules-369-20260916",
      "privacy-2026-children": "source-ppc-apppi-subrules-369-20260916",
      "privacy-2026-biometric": "source-ppc-apppi-subrules-369-20260916"
    };
    (privacy.issues || []).forEach((issue) => {
      if (issue && issueSourceMap[issue.id]) issue.sourceIds = addUnique(issue.sourceIds, issueSourceMap[issue.id]);
    });

    if (!(privacy.issues || []).some((issue) => issue && issue.id === "privacy-2026-security-guideline")) {
      privacy.issues = (privacy.issues || []).concat({
        id: "privacy-2026-security-guideline",
        title: "安全管理措置ガイドラインの手法例示をどう更新するか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "個人情報保護委員会は、クラウドサービスの普及や近年のサイバー攻撃を踏まえ、安全管理措置ガイドライン別添の手法例示を追加・再整理する方向で検討している。現時点では検討資料として扱い、最終改訂後に自社統制との差分を確認する。",
        exception: "検討資料に挙げられた個々のセキュリティ手法を、現時点で全事業者に一律に課された法定義務として扱わない。",
        uncertain: "最終的な例示内容、表現、適用時期は今後の委員会審議・パブリックコメント等を経て確定する。",
        sourceIds: ["source-ppc-apppi-subrules-369-20260916"]
      });
    }
    privacy.practicalImpacts = addUnique(privacy.practicalImpacts, "安全管理措置ガイドライン改訂へのセキュリティ統制棚卸し");
  }
})();

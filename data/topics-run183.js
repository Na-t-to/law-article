(() => {
  const slug = "cyber-capability-enhancement-critical-infrastructure-2026";
  if ((window.TOPIC_DATA || []).some((item) => item && item.slug === slug)) return;
  window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([{
    slug,
    title: "サイバー対処能力強化法・重要インフラ／2026年10月施行",
    categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
    summary: "2026年10月1日に始まる特別社会基盤事業者の特定重要電子計算機の届出・特定侵害事象等の報告を中心に、ベンダー・委託先への波及、脆弱性情報連携、官民連携を追う。",
    lastUpdated: "2026-09-17",
    lastVerified: "2026-09-17",
    isNew: true,
    overview: [
      "サイバー対処能力強化法は2025年5月に成立・公布され、官民連携、通信情報の利用、アクセス・無害化、組織・体制整備を柱とする新たなサイバー安全保障法制です。企業実務では、特別社会基盤事業者の届出・報告、電気通信事業者、ITベンダー・システム供給者への影響を切り分けて読む必要があります。",
      "特別社会基盤事業者による特定重要電子計算機の届出・特定侵害事象等の報告に関する主要規定は2026年10月1日に施行されます。2026年9月15日の関係府省告示により、命令2条1項ただし書の指定対象と報告様式が施行直前に確定しました。",
      "9月15日告示第1号はMicrosoft WindowsとWindows Serverを命令2条1項ただし書の指定対象とし、告示第2号はDDoS、ランサムウェア、それ以外の特定侵害事象等について既存の関係省庁共通様式を使うことを定めています。届出上の除外と、特定重要電子計算機該当性・インシデント報告義務の有無は混同しないことが重要です。",
      "2026年9月14日にはIPAが、サイバー対処能力強化法に基づく内閣府からIPA・JPCERT/CCへの要請等を情報セキュリティ早期警戒パートナーシップへ組み込むガイドライン改訂案を公表しました。これはまだ案段階です。"
    ],
    currentSummary: {
      facts: [
        "特別社会基盤事業者は、特定重要電子計算機を導入した場合の届出と、一定の特定侵害事象等を認知した場合の報告について、法・施行令・関係府省令に従う必要がある。主要規定は2026年10月1日施行。",
        "2026年9月15日の告示第1号は、関係府省令2条1項ただし書の指定対象としてMicrosoft WindowsとWindows Serverを定め、同日告示第2号は報告様式をDDoS、ランサムウェア、その他の3区分で関係省庁共通様式へ接続した。いずれも2026年10月1日施行。",
        "IPAは2026年9月14日、サイバー対処能力強化法に基づく内閣府の要請等を踏まえて、IPA・JPCERT/CC・NICTと政府との脆弱性情報連携を早期警戒パートナーシップへ反映するガイドライン改訂案を公表し、9月24日まで意見を募集している。"
      ],
      interpretations: [
        "法の直接の届出・報告義務者と、システム供給者・クラウド・保守運用事業者等の協力主体は分けて整理する必要がある。直接の義務者でなくても、顧客である特別社会基盤事業者が法定報告を行うため、事故通知・ログ・原因調査・証跡提供等の契約実務が波及し得る。",
        "届出除外となる製品が指定されても、そのことだけで当該システムが特定重要電子計算機ではなくなる、または特定侵害事象等の報告対象外になるとは限らない。資産単位で届出と報告の要件を分けて確認する必要がある。",
        "アクセス・無害化は法定要件の下で政府機関が行う制度であり、民間企業に相手方システムへのハックバック権限を付与する制度ではない。"
      ],
      implications: [
        "指定事業者は、経済安全保障推進法対応の資産・調達台帳とサイバー対処能力強化法上の特定重要電子計算機の棚卸しを突合し、届出要否・期限・責任部署を確定する。",
        "インシデント報告では、DDoS・ランサムウェア・その他の共通様式に必要な情報を早期に埋められるよう、24時間連絡、ログ保全、委託先からの一次通知、原因・影響範囲の更新手順を整備する。",
        "クラウド・SIer・SOC・保守ベンダー等との契約では、事故通知期限、証跡・ログ提供、調査協力、再委託先からの情報取得、当局報告への協力を具体化する。"
      ],
      uncertain: [
        "2026年9月14日の情報セキュリティ早期警戒パートナーシップガイドラインは改訂案であり、最終版は意見募集後の成案を確認する必要がある。",
        "サイバー対処能力強化法には段階施行があり、通信情報の利用等を含む制度全体の施行時期を、2026年10月1日の特別社会基盤事業者向け届出・報告制度と同一視しない。"
      ]
    },
    issues: [
      {
        id: "cyber-capability-operator-scope",
        title: "誰が直接の届出・報告義務者になるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "直接の届出・報告義務は、法令上の特別社会基盤事業者が使用する特定重要電子計算機を基礎に判断する。企業グループに指定事業者がいることだけで親会社・他子会社が一律に義務者になるわけではなく、指定主体と具体的なシステム利用関係を確認する必要がある。",
        exception: "経済安全保障推進法上の指定や特定重要設備との関係、経過措置等により個別確認が必要な場面がある。",
        sourceIds: ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"]
      },
      {
        id: "cyber-capability-asset-reporting",
        title: "特定重要電子計算機の届出と特定侵害事象等の報告をどう実装するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月1日から、対象事業者は関係府省令に基づく届出・報告フローを運用する必要がある。9月15日告示で届出除外対象の指定と、DDoS・ランサムウェア・その他に対応する報告様式が確定した。",
        exception: "届出上の除外指定が、特定重要電子計算機の該当性やインシデント報告義務の対象外を当然に意味するわけではないため、届出と報告を別々に判定する。",
        sourceIds: ["source-cyber-reporting-order-2026", "source-cyber-reporting-exclusion-notice-2026", "source-cyber-report-form-notice-2026"]
      },
      {
        id: "cyber-capability-vendor-contract",
        title: "ベンダー・クラウド・委託先への実務負担をどう契約へ落とすか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "法定報告の直接義務者が特別社会基盤事業者でも、異常検知やログ・技術情報を委託先が先に保有する構造では、通知期限、ログ・証跡提供、原因調査、再委託先対応、当局報告への協力を契約・運用で具体化する必要がある。",
        exception: "個別ベンダーに法5条の報告義務が直接生じるとは限らず、法令上の義務と契約上の協力義務を区別する。",
        sourceIds: ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"]
      },
      {
        id: "cyber-capability-vulnerability-coordination",
        title: "脆弱性情報の政府連携はどう変わるか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "IPAの2026年9月14日改訂案では、サイバー対処能力強化法に基づく内閣府からIPA・JPCERT/CCへの要請等を前提に、政府への通知や関係機関間連携を早期警戒パートナーシップへ組み込む方向が示されている。",
        exception: "現時点では改訂案であり、最終ガイドラインの文言・運用は意見募集後の成案を確認する必要がある。",
        sourceIds: ["source-ipa-vulnerability-partnership-draft-2026"]
      },
      {
        id: "cyber-capability-private-hackback",
        title: "民間企業がアクセス・無害化を行えるのか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "サイバー対処能力強化法のアクセス・無害化措置は、法定要件の下で政府が実施する制度であり、民間企業に攻撃元等へ侵入する一般的なハックバック権限を与えるものではない。",
        exception: "民間企業による通常の防御措置、脅威情報共有、政府への協力等とは区別する。",
        sourceIds: ["source-cyber-capability-act-2025"]
      }
    ],
    sourceIds: [
      "source-cyber-capability-act-2025",
      "source-cyber-reporting-order-2026",
      "source-cyber-reporting-exclusion-notice-2026",
      "source-cyber-report-form-notice-2026",
      "source-ipa-vulnerability-partnership-draft-2026"
    ],
    practicalImpacts: ["特定重要電子計算機の棚卸し", "2026年10月1日施行", "DDoS・ランサムウェア報告", "ベンダー・クラウド契約", "脆弱性情報連携"]
  }]);
})();

window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "critical-infrastructure-cybersecurity-2026",
    "title": "重要インフラ・サイバー対処能力強化法／統一基準",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
    "summary": "2026年10月1日に向けて具体化する重要インフラのサイバーセキュリティ制度を、サイバー対処能力強化法に基づく特別社会基盤事業者の届出・報告義務と、重要インフラ統一基準に基づく政府施策・安全基準等の整備を分けて追う。直接の法的義務と、所管省庁・業界基準や委託先契約を通じて波及する実務対応を混同しないための棚。",
    "lastUpdated": "2026-09-07",
    "lastVerified": "2026-09-07",
    "isNew": true,
    "overview": [
      "サイバー対処能力強化法では、経済安全保障推進法上の特定社会基盤事業者のうち一定の特定重要電子計算機を使用する特別社会基盤事業者に、当該電子計算機の届出や特定侵害事象等の報告に関する制度が設けられ、これらの主要規定は2026年10月1日に施行されます。",
      "重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法を踏まえ、重要インフラ事業者等が分野横断的に講ずべき対策を促進するための政府機関の施策について統一的な基準を定めるもので、2026年10月1日の施行が予定されています。",
      "両制度は対象概念も法的効果も同一ではありません。企業側では、自社が直接の届出・報告義務者か、重要インフラの安全基準等を通じて対応が求められるか、ベンダー・クラウド・SOC等として契約上の対応が必要かを分けて確認する必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "重要電子計算機に対する不正な行為による被害の防止に関する法律（令和7年法律第42号）は2025年5月23日に公布され、附則1条本文に基づく施行期日は政令第46号により2026年10月1日とされた。",
        "2026年5月28日には、特別社会基盤事業者による特定重要電子計算機の届出及び特定侵害事象等の報告を具体化する8府省共同命令が公布され、2026年10月1日の施行に向けて制度整備が進んでいる。",
        "重要インフラ統一基準は2026年7月31日にサイバーセキュリティ戦略本部で決定され、国家サイバー統括室は2026年10月1日の施行予定としている。従来の行動計画の改定と安全基準等策定指針の廃止も同日に予定されている。",
        "重要インフラ統一基準は、政府機関における施策の基準と、所管省庁・業界団体等が策定する安全基準等において重要インフラ事業者等が講ずべき対策として規定されるべき事項から構成される。"
      ],
      "interpretations": [
        "『重要インフラ事業者等』『特定社会基盤事業者』『特別社会基盤事業者』は同義ではない。届出・報告義務の有無は業種名だけで判断せず、法人の指定状況と対象システムの使用関係を分けて確認する必要がある。",
        "重要インフラ統一基準は政府機関の施策を主な対象とする統一的な基準であり、基準の各項目をそのまま民間事業者への罰則付き直接義務と読むのは適切ではない。他方、所管省庁・業界団体の安全基準等を通じて、ガバナンス、リスク管理、サプライチェーン、ログ、監視、復旧等の対策へ具体化される。",
        "クラウド、SIer、SOC、MSSP、保守事業者等は、顧客が法定報告を行うために必要な検知情報・ログ・構成情報を先に保有することがあるため、直接義務者でない場合でも契約上の通知期限や調査協力の見直しが実務上重要になる。"
      ],
      "implications": [
        "経済安全保障推進法上の指定状況、グループ会社の指定状況、指定事業に用いるシステムの使用関係を確認し、所有者だけでなく利用主体・接続関係を含む資産台帳を整備する。",
        "法定報告、業法上の事故報告、個人情報漏えい報告、適時開示等を別々の要件・期限として整理し、インシデント発生時の判断者・連絡先・証拠保全手順を一本の対応表に落とす。",
        "委託先・クラウド・SOC等との契約では、一次通知の時間、24時間連絡先、ログ・証跡の提供、構成変更の共有、調査協力、再委託先からの情報取得を確認する。",
        "重要インフラ分野では、所管省庁・業界団体が統一基準を踏まえて安全基準等を具体化するため、自社のセキュリティ方針、CSIRT、監査、サプライチェーン管理、バックアップ、監視・復旧の既存ルールとの差分を継続確認する。"
      ],
      "uncertain": [
        "届出・報告制度の解説、様式、届出除外対象等については2026年7月から8月にかけて案が順次意見募集に付されており、2026年9月7日時点では最終資料の公表状況を個別に確認しながら運用へ反映する必要がある。",
        "重要インフラ統一基準を踏まえた安全基準等策定ガイドラインや各分野の実施計画・安全基準等は具体化途上であり、個々の事業者に求められる対策の詳細は所管分野ごとに更新され得る。"
      ]
    },
    "issues": [
      {
        "id": "cyber-capability-direct-scope",
        "title": "届出・報告の直接義務者と対象システムをどう判定するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "サイバー対処能力強化法上の届出・報告制度は、特定社会基盤事業者のうち法令上の特定重要電子計算機を使用する特別社会基盤事業者を中心に適用される。業種や取引関係だけで直接義務の有無を判断しない。",
        "exception": "グループ会社の指定、共同利用システム、クラウド等では所有者と使用主体が一致しないことがあるため、法人単位の指定確認とシステム単位の該当性確認を分ける。",
        "uncertain": "個別システムの該当性や届出除外の具体的な適用は、施行令・共同命令・今後の解説や所管省庁の運用を確認する必要がある。",
        "sourceIds": ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"]
      },
      {
        "id": "cyber-capability-notification-reporting",
        "title": "特定重要電子計算機の届出・インシデント報告をどう運用するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "特別社会基盤事業者には、特定重要電子計算機に関する届出と特定侵害事象等の報告制度が設けられ、主要規定は2026年10月1日に施行される。社内では検知から法務判断、当局報告までの情報経路を事前に設計する必要がある。",
        "exception": "法定報告と、業法上の事故報告、個人情報保護法上の漏えい報告、証券市場の適時開示等は目的・要件・期限が一致するとは限らない。",
        "uncertain": "制度解説・報告様式・除外対象等の最終運用資料は公表状況を継続確認する必要がある。",
        "sourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"]
      },
      {
        "id": "cyber-vendor-contract-ripple",
        "title": "クラウド・SIer・SOC・保守委託先へ何が波及するか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "顧客である特別社会基盤事業者が法定報告を行うため、委託先が先に把握するアラート、ログ、構成変更、脆弱性情報を迅速に顧客へ渡せる契約・運用が重要になる。取引があるだけで委託先が法4条・5条の直接義務者になるわけではない。",
        "exception": "電子計算機等供給者には法42条に基づく別の役割があり得るため、単なる委託先と製品・サービス供給者の法的位置付けを分けて確認する。",
        "uncertain": "顧客ごとの通知SLA、必要ログ、再委託管理、調査協力の具体水準は、顧客の法定義務・分野別基準・システム構成によって異なる。",
        "sourceIds": ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"]
      },
      {
        "id": "critical-infrastructure-unified-standard",
        "title": "重要インフラ統一基準を企業の安全基準・ガバナンスへどう反映するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "重要インフラ統一基準は2026年7月31日に決定され、2026年10月1日の施行が予定されている。政府機関の施策と所管省庁・業界団体等の安全基準等を通じ、分野横断的なレジリエンス確保を促進する枠組みとして扱う。",
        "exception": "統一基準の各記載を、サイバー対処能力強化法上の届出・報告義務や罰則と同一視しない。法的根拠・対象・効果が異なるため、別々に適用関係を確認する。",
        "uncertain": "安全基準等策定ガイドライン、分野別の実施計画・安全基準等の具体化により、企業側の実務対応は今後追加・更新される可能性がある。",
        "sourceIds": ["source-nco-critical-infrastructure-standard-2026"]
      }
    ],
    "sourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026", "source-nco-critical-infrastructure-standard-2026"],
    "practicalImpacts": ["適用対象・指定状況の確認", "重要システムの資産台帳", "インシデント報告・当局対応", "委託先・クラウド契約", "ログ・証拠保全", "取締役会・内部統制", "サプライチェーン管理", "事業継続・復旧"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-cyber-capability-act-2025",
    "title": "重要電子計算機に対する不正な行為による被害の防止に関する法律（令和7年法律第42号）",
    "type": "statute",
    "typeLabel": "一次資料・法律",
    "authority": "国",
    "publishedAt": "2025-05-23",
    "url": "https://laws.e-gov.go.jp/law/507AC0000000042",
    "importance": "最高",
    "whyImportant": "サイバー対処能力強化法の本文。特別社会基盤事業者の届出・報告、官民連携、電子計算機等供給者に関する制度等の法的根拠を確認する基礎資料。",
    "topics": ["critical-infrastructure-cybersecurity-2026"]
  },
  {
    "id": "source-cyber-capability-effective-date-order-2026",
    "title": "重要電子計算機に対する不正な行為による被害の防止に関する法律の施行期日を定める政令（令和8年政令第46号）",
    "type": "government_material",
    "typeLabel": "一次資料・施行期日政令",
    "authority": "内閣",
    "publishedAt": "2026-03-17",
    "url": "https://www.cao.go.jp/cybersecurity/pdf/sekoukijitsu.pdf",
    "importance": "最高",
    "whyImportant": "同法附則1条本文に基づく施行期日を2026年10月1日と定める一次資料。法改正メニューの施行日根拠として使用する。",
    "topics": ["critical-infrastructure-cybersecurity-2026"]
  },
  {
    "id": "source-cyber-reporting-order-2026",
    "title": "特別社会基盤事業者による特定侵害事象等の報告等に関する命令（令和8年8府省令第4号）",
    "type": "regulation",
    "typeLabel": "一次資料・府省令",
    "authority": "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
    "publishedAt": "2026-05-28",
    "url": "https://laws.e-gov.go.jp/law/508M60000F5A004",
    "importance": "最高",
    "whyImportant": "サイバー対処能力強化法4条・5条等に基づく特定重要電子計算機の届出・特定侵害事象等の報告制度を具体化する共同命令。",
    "topics": ["critical-infrastructure-cybersecurity-2026"]
  },
  {
    "id": "source-nco-critical-infrastructure-standard-2026",
    "title": "重要インフラのサイバーセキュリティ対策のための統一基準",
    "type": "government_material",
    "typeLabel": "一次資料・重要インフラ統一基準",
    "authority": "サイバーセキュリティ戦略本部／国家サイバー統括室",
    "publishedAt": "2026-07-31",
    "url": "https://www.cyber.go.jp/policy/group/infra/policy.html",
    "importance": "最高",
    "whyImportant": "2026年7月31日に決定された重要インフラ分野横断の統一基準。政府施策と安全基準等に規定されるべき事項を通じて、重要インフラ事業者等のレジリエンス確保を進める基礎資料。",
    "topics": ["critical-infrastructure-cybersecurity-2026"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "cyber-capability-reporting-2026",
    "title": "サイバー対処能力強化法・特定重要電子計算機の届出／特定侵害事象等の報告",
    "eventType": "new_law",
    "lawId": "cyber-capability-enhancement-act",
    "lawLabel": "サイバー対処能力強化法",
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "effectiveDateStatus": "confirmed",
    "effectiveDate": "2026-10-01",
    "effectiveDateSourceIds": ["source-cyber-capability-effective-date-order-2026"],
    "matchSourceIds": ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"],
    "sourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"]
  },
  {
    "id": "critical-infrastructure-unified-standard-2026",
    "title": "重要インフラ統一基準の施行",
    "eventType": "regulation_or_guideline",
    "lawId": "critical-infrastructure-unified-standard",
    "lawLabel": "重要インフラ統一基準",
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "effectiveDateStatus": "planned",
    "effectiveDate": "2026-10-01",
    "effectiveDateSourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "matchSourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "sourceIds": ["source-nco-critical-infrastructure-standard-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-cyber-capability-act-2025",
    "title": "重要電子計算機に対する不正な行為による被害の防止に関する法律（サイバー対処能力強化法）",
    "publisher": "e-Gov法令検索",
    "author": "国",
    "publishedAt": "2025-05-23",
    "collectedAt": "2026-09-07",
    "url": "https://laws.e-gov.go.jp/law/507AC0000000042",
    "sourceType": "primary",
    "sourceLabel": "一次資料・新法／サイバー対処能力強化法",
    "status": "adopted",
    "summary": "重要電子計算機に対する不正な行為による被害の防止を目的として、特別社会基盤事業者の届出・報告、官民の情報共有、電子計算機等供給者への対応要請等を定める法律。企業実務では、2026年10月1日に施行される特定重要電子計算機の届出・特定侵害事象等の報告制度をまず切り出して確認する必要がある。",
    "whyImportant": [
      "特別社会基盤事業者の直接義務を二次解説ではなく条文から確認できる",
      "重要インフラ政策上の概念と、法律上の特定社会基盤事業者・特別社会基盤事業者を混同しないための基礎資料になる",
      "届出・報告だけでなく電子計算機等供給者に関する制度も含むため、ITベンダー側の法的な位置付けを確認する入口になる"
    ],
    "audience": ["重要インフラ・基幹インフラ事業者の企業法務", "情報セキュリティ・CSIRT", "IT・クラウド事業者", "リスク管理・内部監査"],
    "audienceReason": "2026年10月の施行に向けて、自社の適用関係と届出・報告体制を一次資料から確認するため。",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "relatedIssues": ["cyber-capability-direct-scope", "cyber-capability-notification-reporting", "cyber-vendor-contract-ripple"],
    "primarySourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"],
    "reformEventId": "cyber-capability-reporting-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-cyber-capability-act-2025"],
    "whatChanged": "新規整理／サイバー対処能力強化法の企業向け届出・報告制度と委託先への波及を追うテーマを新設した。"
  },
  {
    "id": "article-cyber-reporting-order-2026",
    "title": "特別社会基盤事業者による特定侵害事象等の報告等に関する命令",
    "publisher": "e-Gov法令検索",
    "author": "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
    "publishedAt": "2026-05-28",
    "collectedAt": "2026-09-07",
    "url": "https://laws.e-gov.go.jp/law/508M60000F5A004",
    "sourceType": "primary",
    "sourceLabel": "一次資料・府省令／特定重要電子計算機の届出・特定侵害事象等の報告",
    "status": "adopted",
    "summary": "サイバー対処能力強化法4条・5条等に基づき、特別社会基盤事業者の特定重要電子計算機の届出と特定侵害事象等の報告制度を具体化する8府省共同命令。対象システムの棚卸し、届出事項、インシデント発生時の報告実務を設計する際の直接の根拠資料となる。",
    "whyImportant": [
      "法律本文だけでは分からない届出・報告制度の具体化を確認できる",
      "経済安全保障推進法上の指定と、実際に使用する電子計算機の関係をシステム棚卸しへ落とす際の根拠になる",
      "施行前に法務・CSIRT・IT部門で報告フローを設計する際、二次資料の要約だけに依存せず確認できる"
    ],
    "audience": ["特別社会基盤事業者の企業法務", "情報セキュリティ・CSIRT", "IT資産管理担当", "リスク管理・内部監査"],
    "audienceReason": "2026年10月1日の施行前に、対象システムと届出・報告実務を具体化するため。",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "relatedIssues": ["cyber-capability-direct-scope", "cyber-capability-notification-reporting"],
    "primarySourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"],
    "reformEventId": "cyber-capability-reporting-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-cyber-reporting-order-2026"],
    "whatChanged": "新規整理／2026年10月施行の届出・報告制度について、法律に加えて具体化命令を一次資料として接続した。"
  },
  {
    "id": "article-nco-critical-infrastructure-standard-2026",
    "title": "重要インフラのサイバーセキュリティ対策のための統一基準",
    "publisher": "国家サイバー統括室",
    "author": "サイバーセキュリティ戦略本部",
    "publishedAt": "2026-07-31",
    "collectedAt": "2026-09-07",
    "url": "https://www.cyber.go.jp/policy/group/infra/policy.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・統一基準／重要インフラサイバーセキュリティ",
    "status": "adopted",
    "summary": "2025年改正サイバーセキュリティ基本法を踏まえ、重要インフラ事業者等が分野・事業者横断的に講ずべき対策を促進するため、政府機関の施策について統一的な基準を定めたもの。2026年7月31日に決定され、10月1日の施行が予定されている。",
    "whyImportant": [
      "重要インフラ分野ごとにばらついていたサイバーセキュリティ施策を、分野横断で評価・改善する新しい政策基準の正本である",
      "所管省庁・業界団体等の安全基準等を通じて、組織統治、リスク評価、サプライチェーン、監視、復旧等へ具体化されるため、企業側の既存ルールとの差分確認に使える",
      "サイバー対処能力強化法の届出・報告義務とは別の制度であり、両者の対象・法的効果を切り分ける基礎資料になる"
    ],
    "audience": ["重要インフラ事業者の企業法務", "情報セキュリティ責任者", "リスク管理・内部監査", "サプライチェーン管理担当"],
    "audienceReason": "2026年10月の施行に向け、分野別安全基準等へ反映される横断的な要求事項を一次資料から確認するため。",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "relatedIssues": ["critical-infrastructure-unified-standard"],
    "primarySourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "reformEventId": "critical-infrastructure-unified-standard-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "whatChanged": "新規整理／重要インフラ統一基準を、サイバー対処能力強化法とは別の制度変更として新テーマに接続した。"
  },
  {
    "id": "article-amt-critical-infrastructure-standard-2026",
    "title": "サイバーセキュリティ戦略本部、「重要インフラのサイバーセキュリティ対策のための統一基準」等を決定",
    "publisher": "アンダーソン・毛利・友常法律事務所",
    "author": "清水 亘／石川 雅人",
    "publishedAt": "2026-09-04",
    "collectedAt": "2026-09-07",
    "url": "https://www.amt-law.com/insights/newsletters/ddrlc98_p/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／重要インフラ統一基準・サイバーセキュリティ2026",
    "status": "adopted",
    "summary": "重要インフラ統一基準の作成背景、行動計画との役割分担、適用範囲、安全基準等に規定されるべき事項を整理し、組織統治、識別、防御、検知、対応・復旧、AI等の技術・脅威動向への対応まで一覧化する。あわせてサイバーセキュリティ2026と脅威ハンティングの基本方針も位置付ける。",
    "whyImportant": [
      "統一基準が政府機関の施策を主な対象としつつ、安全基準等を通じて重要インフラ事業者側の対策へ落ちる仕組みを明確に説明している",
      "対象が16分野とされ、所管省庁が実施計画で対象事業者等を特定する方向を整理しており、自社がどの経路で影響を受けるか把握しやすい",
      "ガバナンス、予算・人材、CSIRT、監査、サプライチェーン、ログ、クラウド、監視、復旧等を一つの実務マップとして確認でき、一次資料の上積みが大きい"
    ],
    "audience": ["重要インフラ事業者の企業法務", "CISO・情報セキュリティ担当", "内部監査", "サプライチェーン・委託先管理担当"],
    "audienceReason": "統一基準の制度的位置付けと、今後安全基準等を通じて企業側へ具体化される対策を短時間で把握するため。",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "relatedIssues": ["critical-infrastructure-unified-standard", "cyber-vendor-contract-ripple"],
    "primarySourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "reformEventId": "critical-infrastructure-unified-standard-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-nco-critical-infrastructure-standard-2026"],
    "whatChanged": "整理変更なし／重要インフラ統一基準の制度的位置付け、適用範囲、安全基準等へ落ちる対策項目を実務解説として補完した。"
  },
  {
    "id": "article-miyake-cyber-capability-2026",
    "title": "2026年10月1日施行サイバー対処能力強化法―「自社は対象か」から始める、上場会社の届出・報告・契約実務―",
    "publisher": "三宅法律事務所",
    "author": "渡邉 雅之",
    "publishedAt": "2026-08-17",
    "collectedAt": "2026-09-07",
    "url": "https://www.miyake.gr.jp/notice/2026%E5%B9%B410%E6%9C%881%E6%97%A5%E6%96%BD%E8%A1%8C%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC%E5%AF%BE%E5%87%A6%E8%83%BD%E5%8A%9B%E5%BC%B7%E5%8C%96%E6%B3%95%E2%80%95-%E3%80%8C%E8%87%AA%E7%A4%BE%E3%81%AF/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／サイバー対処能力強化法・届出報告・契約実務",
    "status": "adopted",
    "summary": "サイバー対処能力強化法の企業影響を、直接義務者、IT・クラウド等の供給者、契約上影響を受ける委託先という複数の立場に分けて解説する。法人の指定とシステムの該当性を二段階で確認し、資産台帳、届出・報告フロー、委託先からの早期通知・ログ提供、他法令報告や適時開示との切り分けまで具体化している。",
    "whyImportant": [
      "『インフラ企業かどうか』だけで終わらず、特定社会基盤事業者の指定と特定重要電子計算機の使用を分けて確認する判定手順が明確である",
      "クラウド・SIer・SOC・保守事業者が顧客より先に異常を把握し得ることを踏まえ、一次通知期限、24時間連絡、ログ・証拠提供、調査協力を契約条項へ落としている",
      "法定報告と業法上の事故報告、個人情報漏えい報告、適時開示等を別々に管理すべきことを示し、法務・CSIRT・IRを横断する運用設計に使える",
      "通信情報制度とアクセス・無害化、企業側の届出・報告について施行時期と主体を分けて説明しており、制度全体を一括して理解する誤りを避けられる"
    ],
    "audience": ["上場会社・重要インフラ事業者の企業法務", "情報セキュリティ・CSIRT", "IT・クラウド・SOC事業者", "IR・リスク管理・内部監査"],
    "audienceReason": "2026年10月1日の施行前に、適用対象の確認から資産台帳、報告フロー、委託先契約、開示までを実務手順へ落とすため。",
    "categories": ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
    "relatedTopics": ["critical-infrastructure-cybersecurity-2026"],
    "relatedIssues": ["cyber-capability-direct-scope", "cyber-capability-notification-reporting", "cyber-vendor-contract-ripple"],
    "primarySourceIds": ["source-cyber-capability-act-2025", "source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"],
    "reformEventId": "cyber-capability-reporting-2026",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-cyber-capability-effective-date-order-2026", "source-cyber-reporting-order-2026"],
    "whatChanged": "整理変更なし／直接義務者の判定、法定報告、委託先契約、他法令報告・適時開示との切り分けを実務解説として補完した。"
  }
]);

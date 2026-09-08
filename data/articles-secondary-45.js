window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "telecom-external-transmission-user-info",
    "title": "電気通信事業法・外部送信規律／Cookie・タグ・SDK",
    "categories": ["個人情報", "情報セキュリティ"],
    "summary": "電気通信事業法27条の12の外部送信規律について、対象となるウェブサイト・アプリ、タグ・SDKごとの通知・公表、同意・オプトアウト、2026年の遵守状況調査と手引き案までを企業のWeb・アプリ運用から整理する。",
    "lastUpdated": "2026-09-09",
    "lastVerified": "2026-09-09",
    "isNew": true,
    "overview": [
      "外部送信規律は2022年の電気通信事業法改正で導入され、2023年6月16日に施行された。電気通信事業者だけでなく、登録・届出を要しない第三号事業を営む者も、法令で指定された電気通信役務を提供する場合には対象となり得る。",
      "対象事業者が利用者端末から利用者に関する情報を送信させる情報送信指令通信を行う場合、原則として、通知又は公表、同意取得、オプトアウト手段の提供のいずれかにより利用者へ確認の機会を与える必要がある。Cookieだけが対象ではなく、広告ID、閲覧履歴、タグ・SDK等による送信を含めて確認する。",
      "2026年8月に公表された利用者情報ワーキンググループ第2次報告書案では、アプリを提供していない対象ウェブサイトの遵守率が43.2％とされ、総務省による最低限の記載例、定期的な遵守状況調査、対応不十分な事業者への改善要求等が提言されている。",
      "同報告書案は、現行法上最低限必要な通知・公表等と、法令から一歩進んだベストプラクティスを分けた上で、利用者が実効的に選択できるオプトアウト等を推奨する方向を示している。ただし2026年9月9日時点では意見募集期間中の案であり、最終報告書として確定した内容ではない。"
    ],
    "currentSummary": {
      "facts": [
        "電気通信事業法27条の12は、総務省令で指定する電気通信役務をウェブサイト・アプリ等で提供する電気通信事業者又は第三号事業を営む者が情報送信指令通信を行う場合に、利用者へ確認の機会を付与する外部送信規律を定めている。",
        "通知又は公表を選ぶ場合は、送信される利用者情報の内容、送信先の氏名・名称、送信元及び送信先での利用目的等を、タグ・情報収集モジュール等の単位で確認して表示する必要がある。",
        "令和7年12月の総務省委託調査では、アプリを提供していない対象ウェブサイトの外部送信規律の遵守率は43.2％とされ、ウェブサイトはアプリより十分に遵守できていない傾向が示された。",
        "2026年8月20日から9月18日まで意見募集に付された第2次報告書案は、総務省が最低限の法令遵守を示す雛形を策定し、遵守状況を定期調査・公表し、対応不十分なウェブサイト運営事業者に改善を求めることを適当としている。",
        "第2次報告書案は、法令上の最低限の通知・公表に加えたベストプラクティスとして、利用者の自由な意思決定を歪めない形でのオプトアウト等により利用者関与の機会を確保する方向を示している。"
      ],
      "interpretations": [
        "外部送信規律への対応を『Cookieバナーを置く作業』に縮減すると、対象サービスの判定、Cookie以外のSDK・広告ID・閲覧履歴、送信先ごとの利用目的、実際の通信との不一致を見落としやすい。法務とWeb・アプリ運用部門で実装を棚卸しする必要がある。",
        "会社案内や自社商品の販売だけを目的とする自己需要のサイトは電気通信事業に該当しない場合がある一方、ニュース、動画、検索、マッチング等の情報提供機能を独立したサービスとして提供するサイト・アプリは対象になり得るため、会社単位ではなくサービス単位で検討した方がよい。",
        "2026年報告書案は外部送信規律そのものを改正するものではない。現行法上の最低限の義務と、雛形・定期調査・オプトアウト等の遵守促進・ベストプラクティス案を分けて管理する必要がある。",
        "一度公表ページを作成して終わりにせず、タグ・SDK・外部サービスの追加や仕様変更に伴って、実際に送信される情報、送信先、利用目的と公表内容を継続して一致させる運用が重要になる。"
      ],
      "implications": [
        "運営するWebサイト・アプリごとに、電気通信事業該当性と施行規則22条の2の27の対象役務類型を確認する。",
        "タグ、SDK、広告・解析・SNS連携等の外部サービスを棚卸しし、送信情報、送信先、送信元・送信先の利用目的、オプトアウト手段を台帳化する。",
        "外部送信ポリシー等の公表ページと実装された通信を定期的に照合し、タグ・SDK変更時に法務・プライバシー担当へ更新が連携される変更管理を設ける。",
        "2026年の第2次報告書・手引きが最終化された後、最低限の記載例、オプトアウト等の望ましい対応、総務省のモニタリング方針を自社運用へ反映する。"
      ],
      "uncertain": [
        "2026年9月9日時点の第2次報告書と手引きは意見募集段階の案であり、最終報告書で内容が変更される可能性がある。",
        "対象となる電気通信事業・自己需要の境界や個々の外部送信の適用除外は、サービス設計と実際の通信内容によって判断が変わり得る。"
      ]
    },
    "issues": [
      {
        "id": "external-transmission-scope",
        "title": "どのWebサイト・アプリが外部送信規律の対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "電気通信事業者又は第三号事業を営む者が、施行規則22条の2の27で指定された電気通信役務をWebサイト・アプリ等で提供する場合に対象となり得る。登録・届出の有無だけで対象外と判断せず、自己需要か他人需要か、提供サービスが指定類型に当たるかを確認する。",
        "exception": "会社案内や自社商品・サービスの周知・販売等、本来業務の遂行手段として自己需要のために提供するだけのWebサイト等は電気通信事業に該当しない場合がある。",
        "uncertain": "オウンドメディアや本来業務と独立した情報提供機能等はサービス設計により境界が変わるため、個別の機能・提供目的を確認する必要がある。",
        "sourceIds": ["source-egov-telecom-act-current", "source-egov-telecom-regulation-current"]
      },
      {
        "id": "external-transmission-disclosure",
        "title": "通知・公表では何をどの単位で示すか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "通知又は公表を選択する場合、情報送信指令通信ごとに、送信される利用者情報の内容、送信先、利用目的等を利用者が容易に確認できるようにする。Cookieに限らずタグ・SDK等を通じた送信を確認する。",
        "exception": "役務提供に真に必要な情報、一定のファーストパーティ識別符号、利用者の同意を得た情報、適法なオプトアウト措置の対象情報等には適用除外があり得る。",
        "uncertain": "送信先側の利用目的や保存期間等は外部サービスの仕様変更で変わり得るため、継続的な更新確認が必要になる。",
        "sourceIds": ["source-egov-telecom-act-current", "source-egov-telecom-regulation-current"]
      },
      {
        "id": "external-transmission-inventory-change-management",
        "title": "タグ・SDKと公表内容をどう継続管理するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "Web・アプリで利用するタグ、SDK、広告・解析等の外部サービスを継続的に棚卸しし、実際の送信情報・送信先・利用目的と公表内容を照合できる変更管理を設ける。",
        "exception": "必要な棚卸し頻度や自動検知ツールの要否は、サイト・アプリ数、更新頻度、外部サービス利用状況等によって異なる。",
        "uncertain": "外部サービスの仕様変更をどの方法で検知・把握するかは各社の開発・運用体制に応じた設計が必要である。",
        "sourceIds": ["source-egov-telecom-regulation-current", "source-mic-external-transmission-report-draft-2026"]
      },
      {
        "id": "external-transmission-2026-compliance-policy",
        "title": "2026年の遵守促進方策はどこまで確定しているか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "第2次報告書案は、総務省による最低限の記載例、定期的な遵守状況調査・公表、対応不十分な事業者への改善要求、業界団体との連携を提言しているが、2026年9月9日時点では意見募集段階である。",
        "exception": "現行の外部送信規律自体は既に施行済みであり、報告書の最終化を待たなければ現行法上の義務が生じないという意味ではない。",
        "uncertain": "意見募集後の最終報告書、手引き、実際の定期調査・改善要求の運用は今後確定する。",
        "sourceIds": ["source-mic-external-transmission-report-draft-2026"]
      },
      {
        "id": "external-transmission-optout-best-practice",
        "title": "通知・公表を超えてオプトアウト等を設けるべきか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "第2次報告書案は、法令上最低限の通知・公表とは別に、利用者関与のベストプラクティスとして、自由な意思決定を歪めない形でのオプトアウト等を提供する方向を示している。",
        "exception": "オプトアウト等は2026年報告書案が示す望ましい対応であり、現行法上すべての対象事業者に一律義務付けられた追加要件として扱わない。小規模事業者の実装負担等も考慮されている。",
        "uncertain": "最終報告書での推奨内容、同意とオプトアウトの位置付け、手引きの具体的なUI・導線例は意見募集後に変わり得る。",
        "sourceIds": ["source-mic-external-transmission-report-draft-2026"]
      }
    ],
    "sourceIds": ["source-egov-telecom-act-current", "source-egov-telecom-regulation-current", "source-egov-telecom-act-2023-external-transmission", "source-mic-external-transmission-report-draft-2026"],
    "practicalImpacts": ["Web・アプリ棚卸し", "Cookie・広告ID", "タグ・SDK管理", "外部送信ポリシー", "利用目的・送信先管理", "オプトアウト", "プライバシー・デジタルマーケティング", "変更管理"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-egov-telecom-act-current",
    "title": "電気通信事業法（第27条の12・情報送信指令通信に係る通知等）",
    "type": "law",
    "typeLabel": "一次資料・現行法／外部送信規律",
    "authority": "e-Gov法令検索",
    "publishedAt": "2026-05-27",
    "url": "https://laws.e-gov.go.jp/law/359AC0000000086/",
    "importance": "最高",
    "whyImportant": "外部送信規律の根拠となる電気通信事業法27条の12と、第三号事業等の現行定義を確認する中心一次資料。",
    "topics": ["telecom-external-transmission-user-info"]
  },
  {
    "id": "source-egov-telecom-regulation-current",
    "title": "電気通信事業法施行規則（外部送信規律の対象役務・通知等）",
    "type": "regulation",
    "typeLabel": "一次資料・現行省令／対象役務・通知事項",
    "authority": "e-Gov法令検索",
    "publishedAt": "2026-05-27",
    "url": "https://laws.e-gov.go.jp/law/360M50001000025/",
    "importance": "最高",
    "whyImportant": "外部送信規律の対象となる電気通信役務、通知・公表事項、適用除外等を現行省令で確認する一次資料。",
    "topics": ["telecom-external-transmission-user-info"]
  },
  {
    "id": "source-egov-telecom-act-2023-external-transmission",
    "title": "電気通信事業法（令和4年法律第70号による2023年6月16日施行時点）",
    "type": "law",
    "typeLabel": "一次資料・2022年改正／2023年6月施行",
    "authority": "e-Gov法令検索",
    "publishedAt": "2023-06-16",
    "url": "https://laws.e-gov.go.jp/law/359AC0000000086/20230616_504AC0000000070",
    "importance": "最高",
    "whyImportant": "2022年改正で追加された外部送信規律が2023年6月16日に施行された時点の法令本文を確認でき、改正イベントの施行日と27条の12を追える。",
    "topics": ["telecom-external-transmission-user-info"]
  },
  {
    "id": "source-mic-external-transmission-report-draft-2026",
    "title": "利用者情報ワーキンググループ第2次報告書（案）（利用者情報に係る外部送信規律の遵守に係る方策について）",
    "type": "government_material",
    "typeLabel": "一次資料・遵守方策／手引き案",
    "authority": "総務省 利用者情報に関するワーキンググループ",
    "publishedAt": "2026-08-20",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000319571",
    "importance": "最高",
    "whyImportant": "施行3年後の遵守状況、最低限の記載例、定期調査・改善要求、オプトアウト等のベストプラクティス、手引き案を一体で示す2026年の中心一次資料。",
    "topics": ["telecom-external-transmission-user-info"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "telecom-external-transmission-2022-amendment",
    "title": "電気通信事業法・2022年改正（外部送信規律）",
    "eventType": "law_amendment",
    "lawId": "telecommunications-business-act-external-transmission",
    "lawLabel": "電気通信事業法・外部送信規律",
    "relatedTopics": ["telecom-external-transmission-user-info"],
    "effectiveDateStatus": "confirmed",
    "effectiveDates": ["2023-06-16"],
    "effectiveDateSourceIds": ["source-egov-telecom-act-2023-external-transmission"],
    "matchSourceIds": ["source-egov-telecom-act-2023-external-transmission", "source-egov-telecom-regulation-current"],
    "sourceIds": ["source-egov-telecom-act-2023-external-transmission", "source-egov-telecom-regulation-current"],
    "articleIds": ["article-noandt-external-transmission-2023", "article-tmi-external-transmission-2023"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-mic-external-transmission-report-draft-2026",
    "title": "利用者情報ワーキンググループ第2次報告書（案）（利用者情報に係る外部送信規律の遵守に係る方策について）",
    "publisher": "総務省／e-Govパブリック・コメント",
    "author": "総務省 利用者情報に関するワーキンググループ",
    "publishedAt": "2026-08-20",
    "collectedAt": "2026-09-09",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000319571",
    "sourceType": "primary",
    "sourceLabel": "一次資料・外部送信規律／遵守方策・手引き案",
    "status": "adopted",
    "summary": "外部送信規律の施行3年後の遵守状況を調査し、アプリを提供していない対象ウェブサイトの遵守率43.2％などを踏まえて、総務省による最低限の記載例、遵守状況の定期調査・結果公表、対応不十分な事業者への改善要求、業界団体との連携を提言する第2次報告書案。法令上の最低限の通知・公表等と、利用者関与を高めるオプトアウト等のベストプラクティスを分け、独立した手引き案も収録する。2026年9月18日まで意見募集。",
    "whyImportant": [
      "制度導入後の実際の遵守率と、総務省が今後どのように遵守状況をモニタリング・改善していく方向かを一次資料で確認できる",
      "現行法の最低限の義務と、オプトアウト等の望ましいベストプラクティスを分けて読める",
      "一度ポリシーを置けば終わりではなく、実装・公表・利用者の理解まで含む継続運用へ重点が移っていることを確認できる",
      "最終化前の案であるため、確定ルールを先取りせず今後の手引き・運用を追う起点になる"
    ],
    "audience": ["企業法務", "個人情報・プライバシー担当", "Web・アプリ運用", "デジタルマーケティング", "情報セキュリティ担当"],
    "audienceReason": "現行の外部送信ポリシーとタグ・SDK管理を点検し、2026年の遵守促進策・手引き最終化に備えるため。",
    "categories": ["個人情報", "情報セキュリティ"],
    "relatedTopics": ["telecom-external-transmission-user-info"],
    "relatedIssues": ["external-transmission-inventory-change-management", "external-transmission-2026-compliance-policy", "external-transmission-optout-best-practice"],
    "primarySourceIds": ["source-mic-external-transmission-report-draft-2026", "source-egov-telecom-act-current", "source-egov-telecom-regulation-current"],
    "whatChanged": "運用具体化案／遵守率の低さを踏まえ、最低限の記載例、定期調査・改善要求、オプトアウト等のベストプラクティスを示す2026年第2次報告書案を追加した。"
  },
  {
    "id": "article-noandt-external-transmission-2023",
    "title": "改正電気通信事業法（2023年6月16日施行）における、利用者情報の外部送信規制のポイント（2023年5月31日更新版）",
    "publisher": "長島・大野・常松法律事務所",
    "author": "鈴木明美・中村彰男",
    "publishedAt": "2023-02-17",
    "collectedAt": "2026-09-09",
    "url": "https://www.nagashima.com/publications/publication20230217-1/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所ニューズレター・改正電気通信事業法／外部送信規律",
    "status": "adopted",
    "summary": "2023年6月施行の外部送信規律について、電気通信事業者・第三号事業者、自己需要と他人需要、対象となる4類型のサービス、情報送信指令通信、タグ・情報収集モジュールごとの通知・公表事項、適用除外を、ガイドライン解説・パブコメ結果・FAQまで横断して整理する。2023年5月31日に最終ガイドライン等を反映して更新された詳細解説。",
    "whyImportant": [
      "会社単位ではなくサービス単位で外部送信規律の対象性を判断するための具体例が豊富で、第三号事業者やオウンドメディアの境界を確認しやすい",
      "Cookieだけでなく広告ID・閲覧履歴・1st Party Cookieを含む情報送信指令通信の範囲を実務例で整理している",
      "タグ・SDKごとに送信情報、送信先、送信元・送信先の利用目的を確認するという公表実務へ法令を落としている"
    ],
    "audience": ["企業法務", "個人情報・プライバシー担当", "Web・アプリ運用", "デジタルマーケティング"],
    "audienceReason": "自社サイト・アプリの対象性と、タグ・SDKごとの公表事項を施行時の最終資料に照らして整理するため。",
    "categories": ["個人情報", "情報セキュリティ"],
    "relatedTopics": ["telecom-external-transmission-user-info"],
    "relatedIssues": ["external-transmission-scope", "external-transmission-disclosure", "external-transmission-inventory-change-management"],
    "primarySourceIds": ["source-egov-telecom-act-2023-external-transmission", "source-egov-telecom-regulation-current"],
    "reformEventId": "telecom-external-transmission-2022-amendment",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-egov-telecom-act-2023-external-transmission"],
    "whatChanged": "施行準備整理／2022年改正で導入された外部送信規律について、対象事業者・サービス、送信行為、公表事項、適用除外を実務単位で整理した代表的解説をバックフィルした。"
  },
  {
    "id": "article-tmi-external-transmission-2023",
    "title": "外部送信規律の施行（2023年6月）が間近です",
    "publisher": "TMI総合法律事務所",
    "author": "鈴木翔平",
    "publishedAt": "2023-04-13",
    "collectedAt": "2026-09-09",
    "url": "https://www.tmi.gr.jp/eyes/blog/2023/14531.html",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所実務解説・外部送信規律／Web・アプリ対応",
    "status": "adopted",
    "summary": "外部送信規律について、自己需要と他人需要、対象となる4類型、Cookie・広告識別子・IPアドレス等の情報送信指令通信、通知・公表・同意・オプトアウト、真に必要な情報の適用除外を整理した上で、実務対応を『タグ・SDKの特定→送信先・送信情報・利用目的の確認→公表文作成→Web・アプリ運用部門との連携』という手順に落としている。",
    "whyImportant": [
      "法務だけでは完結しない対応として、Web・アプリ・マーケティング部門を巻き込む具体的な作業順序を示している",
      "外部事業者だけでなく自社サーバへの送信指令も規律の射程に入り得ることや、真に必要な情報の例外を実務目線で整理している",
      "公表ページをタグ・SDK単位で作成し、すべての対象ページから到達できる導線を設けるという実装上の論点まで踏み込んでいる"
    ],
    "audience": ["企業法務", "個人情報・プライバシー担当", "Web・アプリ運用", "デジタルマーケティング", "情シス"],
    "audienceReason": "外部送信規律の法的整理を、タグ・SDK棚卸し、公表文、サイト導線、部門間の変更管理へ落とし込むため。",
    "categories": ["個人情報", "情報セキュリティ"],
    "relatedTopics": ["telecom-external-transmission-user-info"],
    "relatedIssues": ["external-transmission-scope", "external-transmission-disclosure", "external-transmission-inventory-change-management"],
    "primarySourceIds": ["source-egov-telecom-act-2023-external-transmission", "source-egov-telecom-regulation-current"],
    "reformEventId": "telecom-external-transmission-2022-amendment",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-egov-telecom-act-2023-external-transmission"],
    "whatChanged": "施行準備整理／外部送信規律をタグ・SDK棚卸し、公表文、サイト導線、Web・アプリ運用部門との連携へ具体化する実務解説をバックフィルした。"
  }
]);

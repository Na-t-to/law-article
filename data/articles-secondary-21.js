window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "mobile-phone-illicit-use-id-verification-2026",
    "title": "携帯電話不正利用防止法・2026年改正／データSIM・本人確認",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "summary": "2026年改正の携帯電話不正利用防止法について、本人確認対象のデータ通信への拡張、代表者等の権限確認、警察照会、多回線契約、既存利用者の経過措置と、施行に向けた下位ルール整備を整理する。",
    "lastUpdated": "2026-09-08",
    "lastVerified": "2026-09-08",
    "isNew": true,
    "overview": [
      "2026年5月29日に公布された令和8年法律第25号は、携帯電話不正利用防止法の対象を音声通信中心の制度から『携帯通信』へ広げ、一定のデータ通信サービスも本人確認等の対象に取り込む改正です。主要規定は公布から1年を超えない範囲内で政令により施行されます。",
      "改正法は、契約締結担当者が契約者本人と異なる場合の権限・地位の確認、警察署長による関係電気通信事業者への照会、個人の多回線契約について省令で定める数を超える部分の役務提供を拒める仕組みを追加します。",
      "施行時点で既にデータ通信サービスを利用している契約者にも経過措置として本人確認等が及びます。一方、対象となるデータ通信サービスの具体的範囲、多回線契約の具体的な回線数、確認方法・期限などは総務省令等で具体化されるため、成立済みの法律と施行準備中の下位ルールを分けて追う必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "改正法は2026年5月22日に成立し、同月29日に令和8年法律第25号として公布された。主要規定は公布の日から起算して1年を超えない範囲内で政令で定める日から施行され、附則第13条は公布日から施行される。",
        "改正後の法律は題名を『携帯通信事業者による契約者等の本人確認等及び携帯通信役務の不正な利用の防止に関する法律』へ改め、本人確認等の対象を音声通信に限定しない『携帯通信役務』へ拡張する。具体的な対象範囲は総務省令で定められる。",
        "契約締結の任に当たる自然人が契約相手方と異なる場合には、本人確認に加えて、その者の権限又は地位を総務省令で定める方法により確認する義務が追加される。",
        "警察署長が契約者確認の求めを行うため必要があると認めるとき、関係する電気通信事業者に照会して必要な事項の報告を求めることができる規定が追加される。",
        "個人が同時に利用できる通信可能端末設備の数が総務省令で定める数を超える場合、携帯通信事業者は超過部分について役務提供を拒否できる。具体的な回線数は法律では確定していない。"
      ],
      "interpretations": [
        "通信事業者の対応は新規契約時の本人確認だけでは終わらず、代理・法人契約の権限確認、本人確認記録、契約者確認への対応、多回線判定、既存データ通信契約の再確認まで契約管理フロー全体へ及ぶ。",
        "データ通信のみを提供するMVNO等も改正後の対象になり得るため、自社サービスが総務省令で定める対象役務に該当するかを施行ルールで確認する必要がある。",
        "多回線契約の上限や対象データ通信サービスについて研究会資料で具体案が示されていても、最終的な省令・Q&A等が確定するまでは成立済みルールとして扱わない。"
      ],
      "implications": [
        "対象事業者は、契約チャネルごとに本人確認、代理権・地位確認、記録保存の現行フローと改正後要件との差分を洗い出す。",
        "既存のデータ通信契約について、施行時利用者本人確認の対象判定、顧客への通知方法、確認未了時のサービス停止・解約フローを準備する。",
        "個人の複数回線契約について、回線数の集約方法、例外的な正当利用の確認、拒否判断と顧客説明を省令・Q&A確定後に実装する。",
        "警察からの照会・契約者確認に対応する窓口、情報検索、個人データ提供の記録・権限管理を既存の捜査機関対応フローと整合させる。"
      ],
      "uncertain": [
        "主要規定の具体的な施行日は2026年9月8日時点で政令により確定したものを確認できていない。",
        "本人確認等の対象となるデータ通信サービスの具体的範囲、多回線契約の具体的な回線数、代表者等の権限・地位の確認方法、施行時利用者本人確認の方法・期限は総務省令等の最終内容を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "mobile-id-data-service-scope",
        "title": "データ通信サービスはどこまで本人確認等の対象になるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は対象を音声通信に限定しない携帯通信役務へ拡張するが、実際に本人確認等の対象となるデータ通信サービスの具体的範囲は総務省令で定められるため、最終省令で自社サービスの該当性を確認する。",
        "exception": "法律上の『携帯通信役務』と、最終的に省令で本人確認等の対象として指定される役務の範囲を同一視しない。",
        "uncertain": "SMS機能、IoT用途等の具体的な線引きは施行ルールの確定を待つ必要がある。",
        "sourceIds": ["source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"]
      },
      {
        "id": "mobile-id-representative-authority",
        "title": "法人・代理契約で契約締結担当者の権限・地位をどう確認するか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "契約相手方と契約締結担当者が異なる場合、担当者本人の確認に加えて、契約相手方のために契約を締結する権限又は地位を総務省令で定める方法により確認し、関連事項を本人確認記録へ残す。",
        "exception": "具体的な確認方法は総務省令で定められるため、委任状等の特定手段を現時点で唯一の必須方法として固定しない。",
        "uncertain": "実務上認められる確認方法と記録項目の最終形は下位ルールを確認する。",
        "sourceIds": ["source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"]
      },
      {
        "id": "mobile-id-police-inquiry",
        "title": "警察署長から関係電気通信事業者への照会にどう対応するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、警察署長が契約者確認の求めを行うため必要があると認めるとき、電気通信事業者に照会して必要な事項の報告を求めることができる規定を追加する。対象事業者は法的根拠、対象情報、権限、記録を確認して対応する。",
        "exception": "個別照会で提供すべき情報の範囲は照会内容と保有情報により異なり、一般的な任意照会と同一に扱わない。",
        "uncertain": "施行後の照会様式・実務運用は行政・警察の運用を確認する。",
        "sourceIds": ["source-shugiin-mobile-id-amendment-text-2026"]
      },
      {
        "id": "mobile-id-multi-line-existing-users",
        "title": "多回線契約と既存データ通信契約をどう移行管理するか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "個人の利用可能回線数が省令で定める数を超える場合の超過部分について役務提供を拒める仕組みと、施行前から一定のデータ通信サービスを利用する契約者に本人確認等を行う経過措置を、施行ルールに沿って契約管理へ組み込む。",
        "exception": "多回線の具体的な上限数、正当利用の扱い、既存利用者本人確認の除外・期限・方法は法律本文だけでは確定しない。",
        "uncertain": "総務省令・Q&A等の最終内容と施行日を確認して、既存契約の移行日程を確定する。",
        "sourceIds": ["source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"]
      }
    ],
    "sourceIds": [
      "source-sangiin-mobile-id-amendment-2026",
      "source-shugiin-mobile-id-amendment-text-2026",
      "source-soumu-mobile-id-direction-2026"
    ],
    "practicalImpacts": [
      "通信サービスの本人確認",
      "MVNO・データSIM契約",
      "法人・代理契約",
      "本人確認記録",
      "多回線契約管理",
      "既存契約の再確認・移行",
      "警察・捜査機関照会対応"
    ]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-sangiin-mobile-id-amendment-2026",
    "title": "第221回国会 閣法33号・携帯電話不正利用防止法改正法の議案審議情報",
    "type": "law",
    "typeLabel": "一次資料・成立／公布・令和8年法律第25号",
    "authority": "参議院",
    "publishedAt": "2026-05-29",
    "url": "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221033.htm",
    "importance": "最高",
    "whyImportant": "2026年5月22日の成立、5月29日の公布、法律番号25、改正の主要項目と主要規定の施行が公布後1年以内の政令指定日であることを公式に確認できる。",
    "topics": ["mobile-phone-illicit-use-id-verification-2026"]
  },
  {
    "id": "source-shugiin-mobile-id-amendment-text-2026",
    "title": "携帯電話不正利用防止法の一部を改正する法律案（第221回国会・閣法33号）本文",
    "type": "law",
    "typeLabel": "一次資料・改正条文／政府提出法案本文",
    "authority": "衆議院",
    "publishedAt": "2026-03-24",
    "url": "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/honbun/houan/g22109033.htm",
    "importance": "最高",
    "whyImportant": "対象役務の拡張、代表者等の権限・地位確認、警察照会、多回線契約、施行時利用者本人確認、施行期日など改正条文を全文で確認できる。成立・公布状況は参議院の議案審議情報と併せて確認する。",
    "topics": ["mobile-phone-illicit-use-id-verification-2026"]
  },
  {
    "id": "source-soumu-mobile-id-direction-2026",
    "title": "『携帯電話不正利用防止法の改正に基づく制度整備の方向性について』の公表",
    "type": "government",
    "typeLabel": "一次資料・施行準備／下位ルールの方向性",
    "authority": "総務省",
    "publishedAt": "2026-08-03",
    "url": "https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000289.html",
    "importance": "最高",
    "whyImportant": "改正法の施行に向け、対象データ通信サービス、多回線契約、契約締結担当者の権限・地位確認等について研究会・WGで整理した制度整備の方向性を追える。最終的な省令等とは区別して参照する。",
    "topics": ["mobile-phone-illicit-use-id-verification-2026"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "mobile-phone-illicit-use-2026-amendment",
    "title": "携帯電話不正利用防止法・2026年改正",
    "eventType": "law_amendment",
    "lawId": "mobile-phone-illicit-use-prevention-act",
    "lawLabel": "携帯電話不正利用防止法（改正後：携帯通信事業者による契約者等の本人確認等及び携帯通信役務の不正な利用の防止に関する法律）",
    "relatedTopics": ["mobile-phone-illicit-use-id-verification-2026"],
    "effectiveDateStatus": "relative",
    "effectiveDateNote": "2026年5月29日公布。附則第13条は公布日施行。主要規定は公布の日から起算して1年を超えない範囲内において政令で定める日から施行。",
    "effectiveDateSourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026"],
    "matchSourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"],
    "sourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-sangiin-mobile-id-amendment-2026",
    "title": "携帯電話不正利用防止法の一部を改正する法律案（第221回国会・閣法33号）議案審議情報",
    "publisher": "参議院",
    "author": "参議院",
    "publishedAt": "2026-05-29",
    "collectedAt": "2026-09-08",
    "url": "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221033.htm",
    "sourceType": "primary",
    "sourceLabel": "一次資料・成立／公布・令和8年法律第25号",
    "status": "adopted",
    "summary": "2026年改正の成立・公布状況と改正要旨を確認できる国会一次資料。本人確認等の対象を音声通信以外にも広げること、短期滞在外国人への本人確認規定、契約締結担当者の権限・地位確認、警察署長から関係電気通信事業者への照会、多回線契約の役務提供拒否を定め、主要規定は公布後1年以内の政令指定日から施行するとしている。",
    "whyImportant": [
      "2026年5月22日の成立、5月29日の公布、令和8年法律第25号という法改正の現在地を公式に確認できる",
      "データ通信への対象拡張から多回線契約まで、改正の主要項目を国会の議案要旨で一度に確認できる",
      "主要規定が未施行であることを確認し、現行運用と施行準備を混同せずに管理できる"
    ],
    "audience": ["企業法務", "通信事業者・MVNO", "コンプライアンス担当", "本人確認・不正対策担当", "プロダクト・契約管理担当"],
    "audienceReason": "通信契約の本人確認・不正利用対策について、成立済み改正の範囲と施行前の準備事項を切り分けるため。",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "relatedTopics": ["mobile-phone-illicit-use-id-verification-2026"],
    "relatedIssues": ["mobile-id-data-service-scope", "mobile-id-representative-authority", "mobile-id-police-inquiry", "mobile-id-multi-line-existing-users"],
    "primarySourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026"],
    "reformEventId": "mobile-phone-illicit-use-2026-amendment",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026"],
    "whatChanged": "新規テーマ作成／2026年改正の成立・公布と、データ通信への本人確認拡張等を追う基準点を追加した。"
  },
  {
    "id": "article-soumu-mobile-id-direction-2026",
    "title": "『携帯電話不正利用防止法の改正に基づく制度整備の方向性について』の公表",
    "publisher": "総務省",
    "author": "総務省",
    "publishedAt": "2026-08-03",
    "collectedAt": "2026-09-08",
    "url": "https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000289.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・施行準備／制度整備の方向性",
    "status": "adopted",
    "summary": "2026年改正法の施行に向け、ICTサービスの利用環境の整備に関する研究会と不適正利用対策WGで行った議論を整理した総務省の公表資料。対象となるデータ通信サービス、多回線契約、契約締結担当者の権限・地位確認など、法律が総務省令へ委ねた事項の制度整備の方向性を追うための資料であり、最終的な省令・Q&A等とは区別して読む必要がある。",
    "whyImportant": [
      "成立済みの法律だけでは決まらない対象サービスや運用条件について、施行準備の検討状況を追える",
      "通信事業者が契約システム・本人確認・多回線判定・記録管理を改修する際の論点を先回りして洗い出せる",
      "研究会での方向性と、今後公布される最終省令・Q&A等を比較する基準になる"
    ],
    "audience": ["通信事業者・MVNO", "企業法務", "コンプライアンス担当", "本人確認・不正対策担当", "システム・契約管理担当"],
    "audienceReason": "施行日までに必要なシステム・規約・本人確認フロー改修を、未確定事項を確定ルールと誤認せず準備するため。",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "relatedTopics": ["mobile-phone-illicit-use-id-verification-2026"],
    "relatedIssues": ["mobile-id-data-service-scope", "mobile-id-representative-authority", "mobile-id-multi-line-existing-users"],
    "primarySourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"],
    "reformEventId": "mobile-phone-illicit-use-2026-amendment",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026"],
    "whatChanged": "施行準備補強／改正法が省令へ委ねた本人確認・多回線等の制度整備を追える一次資料を接続した。"
  },
  {
    "id": "article-ushijima-mobile-id-amendment-2026",
    "title": "携帯電話不正利用防止法　令和８年改正法の概要",
    "publisher": "牛島総合法律事務所",
    "author": "近藤綾香",
    "publishedAt": "2026-08-05",
    "collectedAt": "2026-09-08",
    "url": "https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20260805identification/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／2026年改正・施行準備",
    "status": "adopted",
    "summary": "2026年改正を、データ通信専用SIM、短期滞在外国人、警察照会、多回線契約、契約締結担当者の権限・地位確認、既存利用者の経過措置まで条文と国会審議・総務省検討資料を突き合わせて整理した実務解説。法律で確定した内容と今後省令等で決まる事項を分け、既存データ通信契約の再本人確認や確認未了時の役務提供拒否まで運用へ落としている。",
    "whyImportant": [
      "法改正の項目を並べるだけでなく、通信事業者の契約・本人確認・既存顧客移行フローへ具体化している",
      "データ通信専用SIMの対象範囲や多回線契約など、法律で確定した部分と総務省令等待ちの部分を区別して読める",
      "法人・代理契約の権限確認と本人確認記録、既存利用者への通知・再確認など見落としやすい実務対応をまとめて確認できる"
    ],
    "audience": ["通信事業者・MVNO", "企業法務", "コンプライアンス担当", "本人確認・不正対策担当", "契約・カスタマーサポート担当"],
    "audienceReason": "改正法対応を法令確認で終わらせず、契約・本人確認・記録・既存顧客対応の実装項目へ落とすため。",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "relatedTopics": ["mobile-phone-illicit-use-id-verification-2026"],
    "relatedIssues": ["mobile-id-data-service-scope", "mobile-id-representative-authority", "mobile-id-police-inquiry", "mobile-id-multi-line-existing-users"],
    "primarySourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026", "source-soumu-mobile-id-direction-2026"],
    "reformEventId": "mobile-phone-illicit-use-2026-amendment",
    "reformStageAtPublication": "finalized_pending",
    "reformStageSourceIds": ["source-sangiin-mobile-id-amendment-2026", "source-shugiin-mobile-id-amendment-text-2026"],
    "whatChanged": "実務解説追加／2026年改正を新規契約・法人代理契約・多回線・既存利用者移行まで運用単位で補強した。"
  }
]);
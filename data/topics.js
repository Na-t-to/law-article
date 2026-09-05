window.TOPIC_DATA = [
  {
    "slug": "ai-personal-data",
    "title": "生成AIと個人情報保護",
    "categories": [
      "AI・デジタル",
      "個人情報"
    ],
    "summary": "生成AIサービスへの個人情報入力、委託・第三者提供、海外移転に加え、2026年改正法で導入される統計作成等・AI開発の特例を、現行法と施行前ルールを区別して整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": false,
    "overview": [
      "生成AIを業務で使うとき、入力するデータが個人情報に当たるか、サービス提供者による取扱いがどのような関係になるかが問題になります。",
      "このテーマでは、個人情報保護法の条文と行政資料を基礎に、サービス利用時の確認事項を論点ごとに整理しています。",
      "2026年改正法は公布済みですが、原則としてまだ施行前です。現在の適法性判断と、改正法に向けた準備を混ぜずに追います。",
      "個別サービスの利用可否を一律に決めるのではなく、データの種類・利用目的・提供先・契約と運用を分けて確認することを目指します。"
    ],
    "currentSummary": {
      "facts": [
        "個人情報取扱事業者は、利用目的の達成に必要な範囲で個人情報を取り扱う必要がある。",
        "第三者提供や委託に当たるかは、サービスの提供形態とデータの取扱いを確認して判断する。",
        "安全管理措置は、取り扱うデータの性質とリスクに応じて講じる必要がある。",
        "2026年7月17日に改正法が公布され、一部を除き公布日から2年以内に政令で定める日から施行される。統計作成等と整理できるAI開発を含む一定の利用について、本人同意を不要とする特例が導入される。"
      ],
      "interpretations": [
        "生成AIサービスの利用では、入力データ・出力データ・ログ・学習利用の有無を一つの契約関係として確認する必要がある。",
        "社内利用規程だけでなく、利用目的、アクセス権限、保存期間を業務フローと対応させておくと更新に耐えやすい。",
        "改正法の特例は施行前なので、現行法上の本人同意・第三者提供等の判断を置き換えるものとして先取りしない。施行準備の論点として別に管理する。"
      ],
      "implications": [
        "入力前に個人情報の有無と匿名化・仮名化の可否を確認する。",
        "サービス選定時に、データ保持、学習利用、再委託、越境移転、削除方法を確認項目に含める。",
        "利用ログと承認記録を残し、問題発生時にどのデータがどこへ送られたか追えるようにする。",
        "AI開発やデータ共有では、将来の統計作成等の特例を利用し得るかと、施行前の現行法対応を分けて審査する。"
      ],
      "uncertain": [
        "サービスの仕様や契約条件が変わった場合に、既存の整理がそのまま維持できるかは個別確認が必要。",
        "改正法の統計作成等・AI開発の具体的な対象範囲、公表事項、基準適合体制などは政令・委員会規則・ガイドラインで今後具体化されるため、現時点で特例の適用可否を確定しない。"
      ]
    },
    "issues": [
      {
        "id": "ai-input",
        "title": "個人データをAIへ入力できるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "利用目的と安全管理の枠内で、入力データの種類・必要性・サービスの取扱いを確認する。",
        "exception": "要配慮個人情報や機微な社内情報は、より厳格な社内基準が必要になる。",
        "uncertain": "サービスごとの学習利用やログ保存の条件は、契約・設定の更新を継続確認する。",
        "sourceIds": [
          "source-privacy-law",
          "source-ppc-ai"
        ]
      },
      {
        "id": "ai-outsourcing",
        "title": "委託に該当するか",
        "status": "disputed",
        "stage": "not_applicable",
        "views": [
          {
            "id": "processor-view",
            "label": "委託として整理する見方",
            "summary": "提供者が利用者の指示の範囲でのみ処理し、独自利用をしない設計・契約であれば、委託として監督・契約管理する方向で整理する。",
            "sourceIds": [
              "source-ppc-ai",
              "source-privacy-law-2026-rulemap"
            ],
            "articleIds": [
              "article-na-privacy-processor-rules-2026"
            ]
          },
          {
            "id": "third-party-view",
            "label": "第三者提供として整理する見方",
            "summary": "提供者が入力情報を学習・改善その他の独自目的に使う場合は、委託の範囲を越え、第三者提供や利用目的との関係を別途検討する。",
            "sourceIds": [
              "source-privacy-law",
              "source-ppc-ai"
            ],
            "articleIds": [
              "article-ppc-ai-materials"
            ]
          }
        ],
        "conclusion": "サービス提供者が委託された業務の範囲で個人データを取り扱うのか、提供先自身の目的で使うのかを分けて確認する。",
        "exception": "同じサービスでもプラン・設定・契約によって評価が変わり得る。",
        "uncertain": "一般的なクラウド型AIサービスを一律に評価できるかは、サービス仕様の確認が前提。改正法の委託先規律も施行ルールを継続確認する。",
        "sourceIds": [
          "source-ppc-ai",
          "source-ai-guideline",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "ai-transfer",
        "title": "第三者提供・海外移転との関係",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "提供先、再委託先、データ処理地、本人への説明を分けて整理する。",
        "exception": "本人同意その他の適法化根拠が問題になる場合がある。",
        "uncertain": "各国の制度とサービス構造の変化に応じて更新が必要。",
        "sourceIds": [
          "source-privacy-law",
          "source-ppc-ai"
        ]
      },
      {
        "id": "ai-statistical-use",
        "title": "AI開発で統計作成等の特例を使えるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年改正法は、統計情報等の作成にのみ利用されることが担保される場合に、一定の個人データ等の第三者提供や公開されている要配慮個人情報の取得について本人同意を不要とする特例を設け、統計作成等と整理できるAI開発も対象に含める。",
        "exception": "改正法は原則としてまだ施行前であり、現在の取扱いは現行法を基準に判断する。",
        "uncertain": "対象となるAI開発の範囲、公表の内容・方法、基準適合体制などは委員会規則・ガイドライン等で具体化される。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      }
    ],
    "sourceIds": [
      "source-privacy-law",
      "source-ppc-ai",
      "source-ai-guideline",
      "source-privacy-law-2026-amendment",
      "source-privacy-law-2026-rulemap"
    ],
    "practicalImpacts": [
      "社内AI利用規程",
      "サービス選定票",
      "プライバシーポリシー",
      "アクセス権限・ログ保存",
      "委託契約・利用規約",
      "AI開発用データ共有の審査・施行準備"
    ]
  },
  {
    "slug": "customer-harassment",
    "title": "カスタマーハラスメント対策",
    "categories": [
      "労務",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年10月1日から全ての事業主に義務付けられるカスタマーハラスメント防止措置について、指針の定義と社内で整えるべき対応を整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "カスタマーハラスメントへの対応は、現場の接客技術だけでなく、従業員の安全確保・相談体制・顧客対応の権限設計に関係します。",
      "このテーマでは、行政の指針・相談対応の考え方を骨格に、社内規程と現場フローの接続を整理しています。",
      "何がハラスメントに当たるかを機械的に決めるのではなく、事実確認と記録に基づく段階的な対応を前提にします。"
    ],
    "currentSummary": {
      "facts": [
        "2026年10月1日から、全ての事業主にカスタマーハラスメント防止措置が義務付けられる。",
        "防止指針は、顧客等の言動、社会通念上許容される範囲を超えること、労働者の就業環境が害されることの三要素を全て満たすものと定義している。",
        "事業主が講ずべき措置には、方針の明確化・周知、相談体制、事実確認と被害者への配慮、再発防止、プライバシー保護、不利益取扱いの禁止が含まれる。"
      ],
      "interpretations": [
        "顧客対応部門だけに任せず、人事・法務・安全衛生を含むエスカレーションの設計が必要になる。",
        "任意のベストプラクティスではなく法定義務として、指針の各措置を規程・相談・初動・記録の運用へ対応付ける必要がある。"
      ],
      "implications": [
        "10月1日までに、カスタマーハラスメントを許容しない方針と対応内容を定め、労働者へ周知する。",
        "相談窓口、現場支援、管理者判断の役割を決め、相談に適切に対応できる体制を整える。",
        "事実確認、被害者への配慮、再発防止、悪質事案への対処、プライバシー保護を一つの対応手順にする。"
      ],
      "uncertain": [
        "業種・店舗形態・顧客接点によって適切な対応水準は異なり、単一のマニュアルでは足りない。",
        "個別事案は言動の内容・手段・経緯などを踏まえた総合判断が必要で、今後のQ&Aや業界別資料も継続確認する。"
      ]
    },
    "issues": [
      {
        "id": "ch-definition",
        "title": "何をカスタマーハラスメントとして扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "顧客等の言動、社会通念上許容される範囲の超過、就業環境の侵害という三要素を全て満たすかを総合判断する。",
        "exception": "正当な苦情や要望、合理的配慮の申出まで一律にカスタマーハラスメントとして扱わない。",
        "uncertain": "該当性は言動の内容・手段・経緯などにより変わるため、事実確認に基づく個別判断が必要。",
        "sourceIds": [
          "source-customer-harassment-guideline-2026"
        ]
      },
      {
        "id": "ch-response",
        "title": "相談・初動対応をどう設計するか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "方針周知、相談体制、事実確認、被害者への配慮、再発防止、悪質事案への対処、プライバシー保護を法定措置として整える。",
        "exception": "暴力や生命身体への危険がある場合は通常フローを短縮し、消費者の権利や障害者への合理的配慮にも留意する。",
        "uncertain": "派遣先・委託先を含む関係者間の役割分担は、契約と現場運用に応じた設計が必要。",
        "sourceIds": [
          "source-customer-harassment-guideline-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-customer-harassment-guideline-2026",
      "source-customer-guideline"
    ],
    "practicalImpacts": [
      "基本方針と社内周知",
      "相談窓口",
      "現場・管理者の対応手順",
      "事実確認・被害者配慮・再発防止の記録",
      "プライバシー保護と不利益取扱い禁止"
    ]
  },
  {
    "slug": "freelance-law",
    "title": "フリーランス新法と取引実務",
    "categories": [
      "契約",
      "労務"
    ],
    "summary": "フリーランスとの取引条件の明示、発注・検収・支払、禁止行為を、法令と実務フローの接点から整理する。契約書の修正だけでなく運用を対象にする。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": false,
    "overview": [
      "フリーランスとの取引では、契約書の文言だけでなく、発注時の明示・検収・支払・変更管理が法務と現場の両方に関係します。",
      "このテーマでは、法令・行政資料を一次資料として、契約テンプレートと依頼フローに影響する論点を整理しています。",
      "発注者の属性や取引類型によって適用関係が変わるため、対象確認を先に行います。"
    ],
    "currentSummary": {
      "facts": [
        "対象となる取引では、業務内容・報酬・支払期日などの取引条件を明示する必要がある。",
        "受領拒否、報酬減額、不当なやり直しなど、禁止される行為が整理されている。",
        "就業環境に関する配慮や、相談体制が問題となる場合がある。",
        "公正取引委員会は2026年9月2日、日本郵便に対し、特定受託事業者への取引条件の即時明示を行わなかったこと及び報酬支払期日を定めず法定期日までに支払わなかったことについて勧告した。",
        "公正取引委員会は2026年8月26日、ジェイトップがフリーランス138名への報酬から実際の振込手数料を超える合計481,031円を差し引いたとして、報酬減額禁止違反を理由に勧告した。2026年1月1日以降になされた1か月以上の業務委託では、合意の有無にかかわらず振込手数料を報酬から差し引くことが報酬減額に該当するとの考え方が適用されている。"
      ],
      "interpretations": [
        "契約書に必要事項を記載するだけでなく、発注システムやメールなど、実際に条件が伝わる経路を統一する必要がある。",
        "検収の遅れや仕様変更が、報酬・支払期日・やり直しの問題に連動しやすい。"
      ],
      "implications": [
        "発注前に対象者区分と取引条件を確認するチェックを入れる。",
        "契約書・発注書・検収記録・請求書を一つの取引単位で保存する。",
        "現場担当者が変更やキャンセルを判断する前に相談できるルートを作る。",
        "発注書・発注システムで明示事項を発注時点に確実に提示し、検収・支払システムまで含めて法定支払期限を超えない統制を置く。",
        "振込手数料を受託者負担とする契約条項だけで処理せず、2026年1月1日以降の1か月以上の業務委託では報酬から控除しない支払設定へ改め、過去契約・振込設定・差引ロジックを点検する。"
      ],
      "uncertain": [
        "取引の実態や当事者の属性で適用関係が変わるため、契約書の名称だけでは判断できない。",
        "業界ごとの慣行と法令上の義務の境界は、行政資料の更新を継続して確認する。"
      ]
    },
    "issues": [
      {
        "id": "freelance-scope",
        "title": "適用対象となる取引か",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "当事者の属性、委託内容、従業員の有無などを確認して対象関係を特定する。",
        "exception": "名称や契約形式ではなく、取引の実態を見る。",
        "uncertain": "複数の契約・発注経路がある場合は、取引単位で確認が必要。",
        "sourceIds": [
          "source-freelance-law"
        ]
      },
      {
        "id": "freelance-notice",
        "title": "取引条件をどう明示するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "明示事項を漏れなく、発注のタイミングで相手が確認できる方法により伝える。",
        "exception": "変更が生じた場合の再明示・記録も運用へ含める。",
        "uncertain": "社内システムの画面・メール・添付書式の組合せは各社で設計が必要。",
        "sourceIds": [
          "source-freelance-law",
          "source-freelance-enforcement-2026",
          "source-jftc-japanpost-freelance-2026"
        ]
      },
      {
        "id": "freelance-payment-deadline",
        "title": "報酬支払期日をどう設定・遵守するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "委託時に支払期日を適切に定め、給付受領日・役務提供日を起点とする法定の期限までに実際の支払が完了するよう発注・検収・経理フローを設計する。",
        "exception": "適用される支払期限や起算点は取引形態・役務提供の態様を確認して判断する。",
        "uncertain": "多数の継続発注やシステム連携がある場合、個々の発注・受領・支払の紐付け方法は各社で設計が必要。",
        "sourceIds": [
          "source-freelance-law",
          "source-jftc-japanpost-freelance-2026"
        ]
      },
      {
        "id": "freelance-remuneration-reduction",
        "title": "報酬から振込手数料等を差し引いてよいか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "1か月以上行う業務委託について、2026年1月1日以降になされた委託では、フリーランスとの合意の有無にかかわらず、振込手数料を報酬額から差し引くことは報酬の減額に該当する。その他の控除も、特定受託事業者の責めに帰すべき事由があるか等を確認して判断する。",
        "exception": "2026年1月1日より前になされた業務委託についても、合意した振込手数料負担の範囲を超えて実際の金融機関手数料より多く差し引くことは、報酬減額として問題になり得る。",
        "uncertain": "振込手数料以外の費用控除・相殺・精算は、控除の性質、合意内容、委託期間、特定受託事業者の責めに帰すべき事由等を個別に確認する必要がある。",
        "sourceIds": [
          "source-freelance-law",
          "source-jftc-freelance-interpretation-2025",
          "source-jftc-jtop-freelance-recommendation-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-freelance-law",
      "source-freelance-enforcement-2026",
      "source-jftc-japanpost-freelance-2026",
      "source-jftc-freelance-interpretation-2025",
      "source-jftc-jtop-freelance-recommendation-2026"
    ],
    "practicalImpacts": [
      "契約書テンプレート",
      "発注フォーム",
      "検収・支払フロー",
      "仕様変更の承認",
      "相談窓口",
      "支払期日・支払管理",
      "振込手数料・報酬控除の支払設定"
    ]
  },
  {
    "slug": "electronic-contract",
    "title": "電子契約の証拠力とログ管理",
    "categories": [
      "契約",
      "情報セキュリティ"
    ],
    "summary": "電子契約サービスを導入するときに、本人確認、意思表示、改ざん検知、保存・監査の論点をどう確認するか。法務と情報システムの共通言語を作る。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": false,
    "overview": [
      "電子契約は紙をPDFに置き換えるだけでなく、誰が・いつ・どの文書に・どのように同意したかを後から説明できる状態が重要です。",
      "このテーマでは、電子署名に関する公的資料を起点に、サービス選定・締結・保存・監査の論点を分解しています。",
      "証拠としての評価は契約の内容や紛争の事実関係にも左右されるため、サービス名だけで結論を出しません。"
    ],
    "currentSummary": {
      "facts": [
        "電子文書の真正な成立を説明するためには、本人性・非改ざん性・意思表示の経緯を確認できる資料が重要になる。",
        "電子署名サービスの機能や認証方法はサービスごとに異なる。",
        "保存時には、契約本文だけでなく締結時のログや関連証跡も検討対象になる。",
        "商業登記電子証明書について、GビズIDと連携し署名鍵をクラウド上で管理するリモート署名方式が案内されており、法人代表者等の電子署名でも鍵管理・認可方法が更新されている。"
      ],
      "interpretations": [
        "証拠力の検討は、署名方式だけでなく、アカウント管理・権限・監査ログ・保存手順を一つの統制として見る必要がある。",
        "法務のレビュー項目を情報システムのサービス評価表へ翻訳しておくと、更新時の比較がしやすい。"
      ],
      "implications": [
        "締結者のアカウント発行・退職時無効化・権限分離を確認する。",
        "監査ログの取得範囲、保存期間、エクスポート方法を確認する。",
        "契約書の版管理と、サービス上の締結記録を対応付ける。"
      ],
      "uncertain": [
        "紛争時の証拠評価は個別事情によるため、機能一覧だけで証拠力を保証できない。",
        "複数サービスをまたぐ締結や海外拠点を含む運用は、追加の法域・契約確認が必要。"
      ]
    },
    "issues": [
      {
        "id": "econtract-identity",
        "title": "本人確認と意思表示",
        "status": "disputed",
        "stage": "not_applicable",
        "views": [
          {
            "id": "presumption-view",
            "label": "電子署名法3条の推定を重視する見方",
            "summary": "署名鍵、認証、固有性、身元確認等を精査し、真正成立の推定が働く設計かを中心に評価する。",
            "sourceIds": [
              "source-electronic-signature",
              "source-electronic-signature-qa-2024"
            ],
            "articleIds": [
              "article-electronic-signature-qa-2024"
            ]
          },
          {
            "id": "evidence-view",
            "label": "証拠全体で評価する見方",
            "summary": "同条の推定が直ちに認められなくても契約が無効になるわけではなく、通知、権限、操作ログ、取引経緯を含む証拠全体から本人の意思を立証する。",
            "sourceIds": [
              "source-electronic-signature",
              "source-electronic-signature-qa-2024"
            ],
            "articleIds": [
              "article-electronic-signature-law"
            ]
          }
        ],
        "conclusion": "認証方法、本人への通知、権限設定、締結操作の記録を組み合わせて確認する。",
        "exception": "重要契約や代理権が関係する場合は、追加の確認手順を設ける。",
        "uncertain": "サービス仕様の変更で確認方法が変わる可能性がある。",
        "sourceIds": [
          "source-electronic-signature",
          "source-electronic-signature-qa-2024",
          "source-commercial-registry-remote-sign-2025",
          "source-digital-sign-modernization-2025"
        ]
      },
      {
        "id": "econtract-log",
        "title": "ログと保存",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "締結した文書と、日時・操作者・認証・変更履歴等を後から辿れるように保存する。",
        "exception": "保存先・保存期間は社内規程や関連制度とも調整する。",
        "uncertain": "クラウドサービス終了時の取り出し可能性は契約前に確認する。",
        "sourceIds": [
          "source-electronic-signature",
          "source-electronic-signature-qa-2024",
          "source-digital-sign-modernization-2025",
          "source-commercial-registry-remote-sign-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-electronic-signature",
      "source-electronic-signature-qa-2024",
      "source-digital-sign-modernization-2025",
      "source-commercial-registry-remote-sign-2025"
    ],
    "practicalImpacts": [
      "サービス選定票",
      "アカウント・権限管理",
      "締結ログ",
      "契約台帳",
      "保存・監査手順",
      "署名鍵・GビズIDの権限管理"
    ]
  },
  {
    "slug": "whistleblower-system",
    "title": "公益通報・内部通報制度",
    "categories": [
      "危機管理・コンプライアンス",
      "労務"
    ],
    "summary": "2026年12月1日施行の改正公益通報者保護法を軸に、通報者の範囲、不利益取扱い・報復、通報妨害・探索、窓口・調査・情報管理の体制整備に関する一次資料を整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "内部通報制度は、窓口を置くだけではなく、通報を受けた後の調査、情報管理、人事判断、是正までを一つの運用として設計する必要があります。",
      "2026年12月1日に改正公益通報者保護法が施行され、通報者保護の強化、フリーランス等への対象拡大、事業者の体制整備の徹底が予定されています。",
      "このテーマでは、改正法、消費者庁Q&A、改正指針の解説を棚としてまとめ、施行前の準備で参照すべき資料を論点別にたどれるようにします。",
      "個別の通報が保護要件を満たすかの結論を一律に示すのではなく、誰の通報か、どこへの通報か、どの措置・取扱いが問題かを分けて一次資料へ戻れる構成にします。"
    ],
    "currentSummary": {
      "facts": [
        "令和7年法律第62号による改正公益通報者保護法は、2026年12月1日に施行される。",
        "改正では、公益通報を理由とした解雇・懲戒への直罰規定と、通報から1年以内の解雇・懲戒について公益通報を理由とするものと推定する規定が新設される。",
        "公益通報者の範囲には、一定の業務委託関係にある特定受託業務従事者（フリーランス）や、関係終了後1年以内の者が追加される。",
        "事業者の体制整備では、従事者指定、内部通報窓口、幹部からの独立性、利益相反、不利益取扱い防止、範囲外共有・通報妨害・通報者探索の防止、記録・周知・教育・内部規程などが指針と解説で具体化されている。"
      ],
      "interpretations": [
        "施行準備は内部通報規程だけを改定するのでは足りず、受付・調査手順、人事・懲戒判断、業務委託管理、通報者情報へのアクセス管理を横断して確認する必要がある。",
        "経営幹部が関係する通報では、受付・調査の独立性と利益相反を避けるエスカレーション経路を事前に設計しておく必要がある。",
        "通報者を特定させる情報は、担当者を絞るだけでなく、閲覧権限やアクセス記録を含む情報管理として扱うと制度運用を検証しやすい。"
      ],
      "implications": [
        "従業員、派遣労働者、退職者、役員に加え、対象となるフリーランス・元フリーランスが利用できる通報経路と周知方法を棚卸しする。",
        "通報後の配置、評価、懲戒、契約解除・取引数量・報酬等の判断について、通報との関係を検証できる記録と承認手順を整える。",
        "通報者特定情報へのアクセス範囲を限定し、範囲外共有、通報妨害、通報者探索を防ぐルールと教育を更新する。",
        "外部窓口を利用する場合は、委託先との役割、情報授受、記録保存、経営幹部案件の報告経路を確認する。"
      ],
      "uncertain": [
        "個別の通報が公益通報として保護されるかは、通報者の関係、通報対象事実、通報先、通報時点など具体的事情により確認が必要。",
        "施行後の行政運用・裁判例によって、直罰・推定規定やフリーランス保護の実務上の評価が具体化されるため、2026年12月以降も継続して追う。"
      ]
    },
    "issues": [
      {
        "id": "whistleblower-scope",
        "title": "誰の・どの通報が保護対象か",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "従業員等に加えて一定のフリーランス・元フリーランスも対象となるため、通報者の関係、通報対象事実、通報先を分けて確認する。",
        "exception": "フリーランスに関する改正規定は2026年12月1日施行後の通報に適用されるなど、施行時期を区別する必要がある。",
        "uncertain": "個別の通報が各保護要件を満たすかは具体的事実関係の確認が必要。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-whistleblower-qa-2026"
        ]
      },
      {
        "id": "whistleblower-retaliation",
        "title": "不利益取扱い・報復をどう防ぐか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "解雇・懲戒だけでなく、人事上・経済待遇上・業務委託上の不利益な取扱いも視野に、通報後の判断を独立して検証できる手順と記録を整える。",
        "exception": "正当な業務・人事上の措置まで一律に禁止されるわけではなく、理由と手続を具体的に確認する必要がある。",
        "uncertain": "直罰・推定規定の施行後の運用は行政実務や裁判例を継続確認する。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-whistleblower-qa-2026",
          "source-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "whistleblower-system-design",
        "title": "窓口・調査・情報管理をどう設計するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "従事者指定、窓口、幹部からの独立性、利益相反排除、不利益取扱い防止、範囲外共有・通報妨害・通報者探索の防止、記録・周知・教育・内部規程を一つの制度として確認する。",
        "exception": "事業者の規模・組織・業態等に応じて具体的な実装は異なる。",
        "uncertain": "外部窓口やグループ会社をまたぐ運用では、権限・情報共有・調査責任の設計を個別に確認する。",
        "sourceIds": [
          "source-whistleblower-guideline-2026",
          "source-whistleblower-qa-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-caa-whistleblower-amendment-2025",
      "source-whistleblower-guideline-2026",
      "source-whistleblower-qa-2026"
    ],
    "practicalImpacts": [
      "内部通報規程",
      "内部・外部通報窓口",
      "調査・是正手順",
      "人事・懲戒判断の記録",
      "業務委託・フリーランスへの周知",
      "通報者情報のアクセス権限・ログ",
      "従事者・管理職向け教育"
    ]
  },
  {
    "slug": "ai-governance-liability",
    "title": "AIガバナンスと民事責任",
    "categories": [
      "AI・デジタル",
      "危機管理・コンプライアンス",
      "契約"
    ],
    "summary": "AIを業務へ組み込むとき、利用者・開発者・提供者の責任を、AIの役割、人の関与、業務プロセス、記録・モニタリングから整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "AIによる損害の責任は、AIという技術を使っただけで一律に決まるものではなく、AIが業務の中でどの役割を担い、誰がどのように判断・管理していたかによって検討されます。",
      "経済産業省の2026年手引きは、AI利用を『補助／支援型』と『依拠／代替型』に整理しつつ、不法行為責任や製造物責任の現行法上の考え方を想定事例で示しています。",
      "このテーマでは、事故後の責任論だけでなく、導入前のリスク評価、人の関与、精度・安全性の確認、説明、継続監視、判断記録を平時のAIガバナンスとして追います。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省は2026年4月9日、AI利活用時の民事責任について現行法の解釈適用の方向性を示す手引き第1.0版を公表した。",
        "手引きは、配送ルート最適化AI、弁護士業務支援AI、画像生成AI、取引審査AI、外観検査AI、AMR、AIエージェント等の想定事例を扱う。",
        "AIの利用形態を補助／支援型と依拠／代替型に整理し、利用者だけでなく開発者・提供者の設計上・説明上の措置も検討対象としている。",
        "依拠／代替型では、AI利用者の注意義務はAI単体の確認だけでなく、AIを組み込んだ業務プロセスの適正な構築・運用として検討される。"
      ],
      "interpretations": [
        "補助／支援型か依拠／代替型かのラベルだけで責任を決めず、実際の業務でAIにどこまで判断を委ねたか、人の関与がどこに残っていたかを具体化する必要がある。",
        "AIの出力精度だけでなく、導入可否の判断、エスカレーション、人による確認、利用後の監視・改善を一つの業務プロセスとして設計することが重要になる。",
        "平時にリスク評価と対応判断を記録しておくことは、事故後に当時どのような注意を尽くしたかを説明する材料にもなる。"
      ],
      "implications": [
        "AI利用申請・リスク評価で、用途、影響を受ける者、想定損害、人の関与、必要精度を記録する。",
        "高リスクな判断は、人へのエスカレーションや最終確認を業務手順として明示する。",
        "開発・提供者から、想定用途、性能限界、重要なリスク、更新内容を取得し、契約・運用へ反映する。",
        "導入後も出力品質・事故・ヒヤリハットを監視し、ルールや技術対策を更新する。"
      ],
      "uncertain": [
        "AIに関する国内裁判例の蓄積はまだ限定的で、手引きは新たな責任ルールを創設するものではない。",
        "補助／支援型と依拠／代替型の境界は実際の利用方法に左右され、同じAIサービスでも業務設計によって評価が変わり得る。"
      ]
    },
    "issues": [
      {
        "id": "ai-gov-classification",
        "title": "AIは補助・支援か、判断の依拠・代替か",
        "status": "disputed",
        "stage": "not_applicable",
        "views": [
          {
            "id": "classification-view",
            "label": "利用類型を起点にする見方",
            "summary": "補助・支援型か依拠・代替型かを先に分け、人が判断を保持している程度に応じて注意義務を検討する。",
            "sourceIds": [
              "source-ai-civil-liability-2026"
            ],
            "articleIds": [
              "article-tmi-ai-liability-substitute-2026"
            ]
          },
          {
            "id": "duty-view",
            "label": "具体的な注意義務を起点にする見方",
            "summary": "類型は整理の手掛かりにとどめ、名称ではなく用途、権限、人の確認、予見可能な損害から具体的な注意義務を判断する。",
            "sourceIds": [
              "source-ai-civil-liability-2026"
            ],
            "articleIds": [
              "article-not-ai-civil-liability-governance-2026"
            ]
          }
        ],
        "conclusion": "AIの名称ではなく、業務上どの程度判断を委ねているか、人がどこで確認・修正するかを事実として整理する。",
        "exception": "一つのAIでも用途や場面によって類型が変わり得る。",
        "uncertain": "訴訟では類型名そのものより具体的な注意義務が中心になる可能性がある。",
        "sourceIds": [
          "source-ai-civil-liability-2026"
        ]
      },
      {
        "id": "ai-gov-process",
        "title": "AIを組み込む業務プロセスをどう設計するか",
        "status": "disputed",
        "stage": "not_applicable",
        "views": [
          {
            "id": "human-oversight-view",
            "label": "人の関与を中心に設計する見方",
            "summary": "重要判断や高リスク回答ではHuman-in-the-loopとエスカレーションを厚くし、AIへの依拠を人が修正できる工程を重視する。",
            "sourceIds": [
              "source-ai-civil-liability-2026",
              "source-ai-guideline"
            ],
            "articleIds": [
              "article-tmi-ai-liability-substitute-2026"
            ]
          },
          {
            "id": "risk-based-view",
            "label": "リスク比例で自動化範囲を決める見方",
            "summary": "一律に人の最終確認を求めず、損害の重大性・発生確率・技術的対策を評価し、許容できる範囲では自動化を維持する。",
            "sourceIds": [
              "source-ai-guideline"
            ],
            "articleIds": [
              "article-tmi-ai-governance-2026"
            ]
          }
        ],
        "conclusion": "求める精度・安全性、AIに任せる範囲、人の関与、エスカレーションを業務全体として設計し、実際に運用する。",
        "exception": "消費者の重要な利益や生命・身体など高リスク領域では、より強い人の関与や安全措置が必要になり得る。",
        "uncertain": "必要な管理水準は用途・損害の重大性・技術水準により個別に変わる。",
        "sourceIds": [
          "source-ai-civil-liability-2026",
          "source-ai-guideline"
        ]
      },
      {
        "id": "ai-gov-provider",
        "title": "開発者・提供者に何を確認するか",
        "status": "disputed",
        "stage": "not_applicable",
        "views": [
          {
            "id": "user-control-view",
            "label": "利用者の業務管理を中心に見る見方",
            "summary": "利用目的、入力、出力確認、人の関与を決める利用者が、AIを組み込んだ業務プロセス全体の適切な構築・運用について主要な責任を負うと見る。",
            "sourceIds": [
              "source-ai-civil-liability-2026"
            ],
            "articleIds": [
              "article-tmi-ai-liability-substitute-2026"
            ]
          },
          {
            "id": "provider-design-view",
            "label": "開発者・提供者の設計と説明を重く見る見方",
            "summary": "利用者が制御できない性能、安全措置、既知のリスク、想定用途に関する情報は開発者・提供者側に偏在するため、その設計・警告・説明を責任判断で重視する。",
            "sourceIds": [
              "source-ai-civil-liability-2026",
              "source-ai-guideline"
            ],
            "articleIds": [
              "article-not-ai-civil-liability-governance-2026"
            ]
          }
        ],
        "conclusion": "想定用途、性能・安全性、既知のリスク、設計上の対策、利用者がリスク管理するために必要な情報を確認する。",
        "exception": "責任分担は契約内容や実際の開発・提供関係にも左右される。",
        "uncertain": "契約責任は手引きの主対象外であり、個別契約の検討が別途必要。",
        "sourceIds": [
          "source-ai-civil-liability-2026",
          "source-ai-guideline"
        ]
      },
      {
        "id": "ai-gov-records",
        "title": "リスク評価・判断・監視をどう記録するか",
        "status": "disputed",
        "stage": "effective",
        "views": [
          {
            "id": "traceability-view",
            "label": "広い追跡可能性を確保する見方",
            "summary": "導入判断、入力・出力、人の修正、性能監視、事故対応を連続して残し、事故時に判断過程と責任分担を再現できることを重視する。",
            "sourceIds": [
              "source-ai-guideline"
            ],
            "articleIds": [
              "article-tmi-ai-governance-2026"
            ]
          },
          {
            "id": "proportional-record-view",
            "label": "リスク比例で記録範囲を絞る見方",
            "summary": "一律の全件保存はコストや個人情報・機密管理の負担を増やすため、用途、損害の重大性、保存目的に応じて必要な記録だけを定める。",
            "sourceIds": [
              "source-ai-civil-liability-2026",
              "source-ai-guideline"
            ],
            "articleIds": [
              "article-not-ai-civil-liability-governance-2026"
            ]
          }
        ],
        "conclusion": "導入時のリスク評価、採用した対策、人の確認、性能監視、事故・改善の履歴を後から説明できる形で残す。",
        "exception": "すべてを同じ粒度で保存するのではなく、用途とリスクに応じて記録水準を決める。",
        "uncertain": "どの記録が法的責任判断で決定的になるかは個別事案による。",
        "sourceIds": [
          "source-ai-civil-liability-2026",
          "source-ai-guideline"
        ]
      }
    ],
    "sourceIds": [
      "source-ai-civil-liability-2026",
      "source-ai-guideline"
    ],
    "practicalImpacts": [
      "AI利用申請・リスク評価",
      "Human-in-the-loopルール",
      "AIサービス選定・契約",
      "出力品質・事故のモニタリング",
      "判断・承認ログ",
      "AIポリシー・社内規程"
    ]
  },
  {
    "slug": "cyber-supply-chain",
    "title": "サプライチェーン・サイバーセキュリティ",
    "categories": [
      "情報セキュリティ",
      "危機管理・コンプライアンス",
      "契約"
    ],
    "summary": "ソフトウェア・クラウド等の調達先を含むサプライチェーンのサイバーリスクを、取引先評価、契約、脆弱性対応、事故連携から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "サプライチェーンのサイバーセキュリティでは、取引先の評価や契約条項だけでなく、経営者が自社の事業リスクとして位置付け、CISO等へ必要な指示を出すところから管理を始める必要があります。",
      "サイバー事故は自社システムだけで完結せず、ソフトウェアベンダ、クラウド、委託先、再委託先を通じて事業へ波及します。",
      "2026年には、経済産業省等がSCS評価制度の構築方針とサイバーインフラ事業者向けガイドラインを公表し、取引先の対策をどう確認するかについて共通の材料が増えています。",
      "このテーマでは、情報システム部門だけでなく、法務・購買が調達基準、契約条項、脆弱性対応、インシデント時の情報連携をどう組み立てるかを追います。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省と内閣官房国家サイバー統括室は2026年3月27日、SCS評価制度の構築方針を公表し、2026年度末頃の制度開始を目指している。",
        "SCS評価制度は、サプライチェーン上の企業に求めるセキュリティ対策を共通化し、対策状況を可視化することを目的としている。",
        "2026年3月31日のサイバーインフラ事業者向けガイドラインは、ソフトウェアの開発・供給・運用事業者と顧客に求める責務・要求事項を整理し、評価チェックリストも提供している。",
        "顧客側も、要求事項を調達先の取組把握や選定に使うことが想定されている。",
        "経済産業省・IPAのサイバーセキュリティ経営ガイドラインVer.3.0は、経営者が認識すべき3原則と、CISO等へ指示すべき重要10項目を示し、サプライチェーン全体を通じた対策を経営課題として位置付けている。"
      ],
      "interpretations": [
        "ベンダー審査を独自質問票だけで行うのではなく、公的な評価制度・チェックリストを調達基準へ取り込む余地がある。",
        "契約締結時の保証だけでなく、脆弱性発見後の通知、修正、緊急対応、再委託先の管理まで継続的な取引管理として設計する必要がある。",
        "セキュリティ部門の技術評価と、法務・購買の契約条件・責任分担を同じベンダー管理プロセスへつなげると実効性を高めやすい。",
        "取引先のセキュリティ水準を確認する仕組みだけを導入しても、自社側のリスク許容度、責任者、投資判断、インシデント時の意思決定が曖昧なら、サプライチェーン管理は機能しにくい。"
      ],
      "implications": [
        "重要な委託先・ソフトウェアのリスク区分を付け、必要なセキュリティ水準と確認方法を決める。",
        "脆弱性の通知・修正期限、緊急時の連絡、インシデント報告、再委託・サブプロセッサ管理を契約・運用で確認する。",
        "SCS評価制度や公的チェックリストを、取引先選定・継続評価の材料として使えるか検討する。",
        "ベンダー起因の事故を想定し、情報共有、代替手段、復旧、社内外の意思決定経路を事前に整える。",
        "経営会議・取締役会へ報告するサイバーリスク、CISO等への権限・指示、委託先管理の責任分担を既存のセキュリティ規程やリスク管理規程と整合させる。"
      ],
      "uncertain": [
        "SCS評価制度は2026年度末頃の開始予定であり、運用開始後の評価結果の使われ方や業界ごとの要求水準は継続確認が必要。",
        "契約上どの水準の義務・責任を求めるべきかは、サービスの重要性、代替可能性、データ・システムへのアクセス等で変わる。"
      ]
    },
    "issues": [
      {
        "id": "cyber-vendor-selection",
        "title": "取引先をどの基準で評価・選定するか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "事業への影響度に応じて必要な対策水準を定め、公的評価制度やチェックリストも用いて取引先の取組を確認する。",
        "exception": "一律の要求ではなく、委託内容・接続範囲・扱う情報等に応じて深度を変える。",
        "uncertain": "SCS評価制度の実運用と取引実務への定着状況は開始後も確認する。",
        "sourceIds": [
          "source-scs-evaluation-2026",
          "source-cyber-infra-guideline-2026"
        ]
      },
      {
        "id": "cyber-contract",
        "title": "契約で何を決めておくか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "セキュリティ要件、脆弱性対応、インシデント通知、再委託、監査・情報提供、終了時の対応をサービスのリスクに応じて定める。",
        "exception": "標準約款型サービスでは交渉余地が限られるため、代替統制やサービス選定で補う場合がある。",
        "uncertain": "損害賠償・補償範囲などは取引ごとの契約交渉が必要。",
        "sourceIds": [
          "source-cyber-infra-guideline-2026"
        ]
      },
      {
        "id": "cyber-vulnerability",
        "title": "脆弱性発見後の対応をどう回すか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "資産・脆弱性を把握し、重要度に応じた修正・回避措置、ベンダー連携、意思決定を迅速に行える手順を持つ。",
        "exception": "直ちにパッチ適用できないシステムでは代替的な防御や停止判断が必要になる。",
        "uncertain": "AIによる攻撃高度化等で脅威と対応速度が変化するため継続的な見直しが必要。",
        "sourceIds": [
          "source-cyber-infra-guideline-2026"
        ]
      },
      {
        "id": "cyber-incident-chain",
        "title": "委託先で事故が起きたときどう連携するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "連絡先、通知対象、必要情報、初動・復旧の役割、再委託先からの情報取得を平時から決めておく。",
        "exception": "重大事故では通常の契約窓口だけでなく経営・法務・広報等への即時エスカレーションが必要になる。",
        "uncertain": "事故の種類や法令上の報告義務に応じて必要な連携先・期限は変わる。",
        "sourceIds": [
          "source-cyber-infra-guideline-2026",
          "source-scs-evaluation-2026"
        ]
      },
      {
        "id": "cyber-management-governance",
        "title": "経営層・CISOの責任とサプライチェーン管理をどう接続するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "経営者がサイバーリスクを事業リスクとして認識し、CISO等の責任者へ方針・体制・リスク管理・取引先管理を含む必要な指示を出す。",
        "exception": "必要な体制・投資水準は事業規模、保有情報、システム依存度、取引先との接続関係等によって異なる。",
        "uncertain": "SCS評価制度の普及により、取締役会・経営会議で求められる具体的な監督実務がさらに定着する可能性がある。",
        "sourceIds": [
          "source-cyber-management-guideline-v3-2023",
          "source-scs-evaluation-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-scs-evaluation-2026",
      "source-cyber-infra-guideline-2026",
      "source-cyber-management-guideline-v3-2023"
    ],
    "practicalImpacts": [
      "ベンダー審査票・調達基準",
      "セキュリティ条項・別紙",
      "脆弱性・パッチ管理",
      "インシデント通知・連携",
      "再委託先管理",
      "BCP・代替手段",
      "経営層へのサイバーリスク報告",
      "CISO等の権限・責任"
    ]
  },
  {
    "slug": "acquisition-guidelines",
    "title": "企業買収・買収提案対応",
    "categories": [
      "会社法・ガバナンス",
      "M&A"
    ],
    "summary": "上場会社が買収提案を受けたときの真摯性判断、取締役会の検討、企業価値評価、株主への説明を整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "経済産業省の企業買収行動指針は、上場会社の経営支配権を取得する買収について、企業価値の向上と株主共同の利益を中心に取締役会・買収者の行動を整理しています。",
      "2026年7月のポイント・Q&Aは基本枠組みを維持しつつ、真摯な買収提案や真摯な検討など、実務で判断が割れやすい概念を具体化しました。",
      "このテーマでは、提案受領から情報収集、比較検討、意思決定、株主への説明までを取締役会実務として追います。"
    ],
    "currentSummary": {
      "facts": [
        "2026年7月30日のポイント・Q&Aは、2023年の企業買収行動指針の基本的枠組みを変更せず、解釈を具体化した。",
        "真摯な買収提案は、具体性、目的の正当性、実現可能性を総合的に考慮して判断される。",
        "望ましい買収は高い買収価格だけで決まらず、企業価値の向上と株主共同の利益の双方に資するかが問題になる。"
      ],
      "interpretations": [
        "取締役会は『真摯でない』というラベルを入口で使うのではなく、提案の具体性、資金裏付け、許認可、買収後方針などを事実として確認する必要がある。",
        "買収者の企業価値向上策とスタンドアローン等の戦略的選択肢を比較し、可能な範囲で定量化し、難しい事項も説得的に説明することが求められる。",
        "ステークホルダーや経済安全保障の要素は、それ自体を抽象的に掲げるのではなく、将来キャッシュフローや割引率への合理的な影響として説明できるかが重要になる。"
      ],
      "implications": [
        "買収提案受領時のエスカレーション、初期評価、取締役会報告の手順を事前に決める。",
        "買収者へ確認する情報を、資金、許認可、経営方針、シナジー・ディスシナジー、実行条件に分けて用意する。",
        "買収案とスタンドアローン案の比較資料では、前提、定量評価、定性的要素の経済的影響を記録する。",
        "判断後に株主へ説明できるよう、検討過程と判断理由を取締役会資料・議事録へ残す。"
      ],
      "uncertain": [
        "個別の買収提案でどこまで情報収集・定量評価が必要かは、提案の内容、時間的制約、入手可能な情報により変わる。"
      ]
    },
    "issues": [
      {
        "id": "acq-sincere-proposal",
        "title": "真摯な買収提案かをどう判断するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "具体性、目的の正当性、実現可能性を総合考慮し、合理的に疑われる事情を事実として確認する。",
        "exception": "例示事項の一つに該当するだけで直ちに真摯性が否定されるわけではない。",
        "uncertain": "個別提案で必要な確認水準は事案により異なる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-2023",
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "acq-board-review",
        "title": "取締役会は何を比較・検討するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "買収者の価格・企業価値向上策と、スタンドアローンその他の戦略的選択肢を、実現可能性とシナジー・ディスシナジーを含めて比較する。",
        "exception": "定量分析が困難な事項は合理的・説得的な定性説明で補う余地がある。",
        "uncertain": "比較の具体的な粒度は会社・提案ごとに異なる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "acq-value-explanation",
        "title": "企業価値と株主への説明をどう組み立てるか",
        "status": "disputed",
        "stage": "effective",
        "views": [
          {
            "id": "shareholder-price-view",
            "label": "株主の選択と買収価格を重視する見方",
            "summary": "現在の株主に提示された価格と選択機会を中心に据え、取締役会が提案を恣意的に排除しないことを重視する。",
            "sourceIds": [
              "source-meti-corporate-takeover-guidelines-clarification-2026"
            ],
            "articleIds": [
              "article-meti-acquisition-guidelines-qa-2026"
            ]
          },
          {
            "id": "corporate-value-view",
            "label": "中長期の企業価値を重視する見方",
            "summary": "価格だけでなく、買収後の企業価値向上策、スタンドアローン、シナジー・ディスシナジーを比較し、定性的要素も合理的に説明することを重視する。",
            "sourceIds": [
              "source-meti-corporate-takeover-guidelines-clarification-2026"
            ],
            "articleIds": [
              "article-not-acquisition-guidelines-qa-2026"
            ]
          }
        ],
        "conclusion": "買収価格だけに依存せず、企業価値向上の見込みと株主共同の利益を分けて検討し、判断の合理性を説明できるようにする。",
        "exception": "定性的要素も将来キャッシュフローや割引率への合理的な影響があれば考慮し得る。",
        "uncertain": "株主への説明内容・程度は個別事案による。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-corporate-takeover-guidelines-2023",
      "source-meti-corporate-takeover-guidelines-clarification-2026"
    ],
    "practicalImpacts": [
      "買収提案受付・初期評価",
      "取締役会資料",
      "買収者への質問票",
      "企業価値比較",
      "議事録・判断記録",
      "株主・市場への説明"
    ]
  },
  {
    "slug": "tob-large-shareholding-2026",
    "title": "公開買付・大量保有報告制度2026",
    "categories": [
      "M&A",
      "金融商品取引・開示・IR",
      "会社法・ガバナンス"
    ],
    "summary": "2026年5月施行の公開買付制度・大量保有報告制度改正を、株式取得、買収実務、株主対話、共同保有、デリバティブ、報告実務から整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "2024年金商法改正と2025年7月の最終政省令等により、公開買付制度と大量保有報告制度は2026年5月1日から大きく変わりました。",
      "公開買付けでは市場内取引を含む30％ルールなど買付手法に直結する変更があり、大量保有報告では共同保有者、重要提案行為、デリバティブ、報告事項が見直されています。",
      "このテーマでは、上場株式を取得する側だけでなく、買収提案を受ける会社、IR・株主対応、機関投資家との対話にも関係する実務資料をまとめます。"
    ],
    "currentSummary": {
      "facts": [
        "公開買付制度・大量保有報告制度の主要な改正政省令等は2025年7月4日に公布され、原則2026年5月1日から施行・適用された。",
        "公開買付制度では、株券等所有割合が30％を超える取得について市場内取引も含め義務的公開買付けの対象となる枠組みが導入された。",
        "大量保有報告制度では、共同保有者・重要提案行為等の明確化、一定のデリバティブのロングポジションに係る保有者規律、報告事項の見直し等が行われた。"
      ],
      "interpretations": [
        "買付けを市場内・市場外のどちらで行うかだけでは公開買付義務を判断できず、30％到達、直前の取得、適用除外の条件まで一連の取得計画として確認する必要がある。",
        "機関投資家との対話では、対話そのものを避けるより、共同保有の合意や重要提案行為等の要件に照らして具体的な行為を整理する方が実務上有用である。",
        "デリバティブや保有目的の記載拡充により、提出直前の名義株式だけでなく、投資目的・権利・契約関係を早い段階で把握する必要性が高まっている。"
      ],
      "implications": [
        "上場株式の取得計画では、30％基準、僅少買付け、並行買付け等の適用可能性を初期段階で確認する。",
        "大量保有報告の対象判定に、共同保有の合意、デリバティブ、重要な契約等を含めた情報収集項目を追加する。",
        "IR・株主対応では、機関投資家との対話や協働エンゲージメントで問題になる法的概念を共有する。",
        "2026年改正後の報告様式・Q&Aを基準に、提出チェックリストと社内エスカレーションを更新する。"
      ],
      "uncertain": [
        "共同保有、重要提案行為等、デリバティブの目的要件などは個別事実への評価が残るため、今後の提出実務・当局運用・裁判例を継続確認する。"
      ]
    },
    "issues": [
      {
        "id": "tob-thirty-rule",
        "title": "どの株式取得で公開買付けが必要になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "30％を超える取得を中心に、市場内外の取得方法、直前の取得、適用除外を合わせて判定する。",
        "exception": "僅少買付けその他の適用除外があり、取得割合だけで一律には決まらない。",
        "uncertain": "複雑な連続取引・関係者取引では個別の取得構造に沿った確認が必要。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "tob-transaction-design",
        "title": "改正後に買付スキームをどう設計するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "僅少買付け、並行買付け等の要件を取得目的・時期・割合と合わせ、案件開始時からスケジュールへ組み込む。",
        "exception": "利用できる適用除外は保有割合、過去の取得、買付予定数の上限等で異なる。",
        "uncertain": "新制度下の案件実績が蓄積することで実務慣行がさらに具体化する可能性がある。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "largeholder-joint-holder",
        "title": "共同保有者・協働エンゲージメントをどう見るか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "共同取得・譲渡や議決権行使の合意を確認し、協働エンゲージメント特例の要件を満たすかを具体的に見る。",
        "exception": "一定の金融商品取引業者等による個別の権利行使ごとの合意等には共同保有から除外される枠組みがある。",
        "uncertain": "継続的な対話・複数の合意がある場合は事実関係ごとの評価が必要。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025",
          "source-fsa-largeholder-dialogue-2025"
        ]
      },
      {
        "id": "largeholder-important-proposal",
        "title": "投資先への対話が重要提案行為等に当たるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "提案内容と、発行者の事業活動に重大な変更・影響を及ぼす目的があるかを分けて確認する。",
        "exception": "単に会社提案議案への反対可能性や議決権行使内容を示唆するだけで直ちに該当するとは限らない。",
        "uncertain": "提案の態様・強制性・目的は個別事案で評価される。",
        "sourceIds": [
          "source-fsa-largeholder-dialogue-2025"
        ]
      },
      {
        "id": "largeholder-derivatives",
        "title": "デリバティブのロングポジションをどう扱うか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "株券取得、重要提案行為、議決権行使への影響など一定の目的を伴うロングポジションでは保有者該当性を確認する。",
        "exception": "現物決済を選べるだけで直ちに株券取得目的が認定されるわけではなく、具体的な目的を確認する。",
        "uncertain": "目的の認定は事実関係に依存するため運用蓄積を要する。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025",
          "source-fsa-largeholder-overview-2026"
        ]
      },
      {
        "id": "largeholder-reporting",
        "title": "大量保有報告書の提出・記載をどう更新するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "5％超の提出義務を基礎に、改正後の保有者範囲、保有目的、重要な契約等の記載を現行様式で確認する。",
        "exception": "特例報告の適用や共同保有者の有無等により提出方法・計算が変わる。",
        "uncertain": "2026年度の重点レビューを通じ、記載実務が具体化する可能性がある。",
        "sourceIds": [
          "source-fsa-largeholder-overview-2026",
          "source-fsa-tob-largeholder-final-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-tob-largeholder-final-2025",
      "source-fsa-largeholder-dialogue-2025",
      "source-fsa-largeholder-overview-2026"
    ],
    "practicalImpacts": [
      "公開買付要否判定",
      "株式取得スケジュール",
      "大量保有報告チェックリスト",
      "デリバティブ情報収集",
      "IR・株主対話",
      "共同保有者管理"
    ]
  },
  {
    "slug": "advertising-display-control",
    "title": "景品表示法・広告表示管理",
    "categories": [
      "消費者法・表示",
      "危機管理・コンプライアンス"
    ],
    "summary": "No.1表示、口コミ・ステルスマーケティング、総付景品、不実証広告規制を中心に、広告主が表示根拠と販促施策・外部委託をどう管理するかを整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "景品表示法の広告表示管理では、完成した文言だけでなく、表示を支える調査・データと、広告主が第三者の表示内容へどのように関与したかが問題になります。",
      "No.1表示については2024年の消費者庁実態調査が調査設計と広告主の確認責任を具体化し、ステルスマーケティングでは口コミへの便益提供を含む執行事例が出ています。",
      "このテーマでは、マーケティング施策を法務審査へ持ち込む際に確認すべき根拠、委託先、投稿・レビュー施策、記録・再発防止を資料から追います。"
    ],
    "currentSummary": {
      "facts": [
        "消費者庁の2024年No.1表示実態調査は、合理的な根拠の条件として比較対象、調査対象者、調査方法、表示と結果の対応を整理した。",
        "ステルスマーケティング告示は2023年10月1日から施行され、商品・サービスを供給する事業者の表示であることを一般消費者が判別しにくい表示を規制対象とする。",
        "2024年6月の措置命令では、Googleマップで星4・星5の口コミ投稿を条件に割引を与えた行為がステルスマーケティング告示に該当するとされた。",
        "政府は2026年7月21日の規制改革実施計画で、総付景品の上限額と不実証広告規制の運用を見直す方針を閣議決定し、いずれも2026年度に検討開始、2027年度に結論、結論後速やかに措置する工程を示した。",
        "総付景品の現行上限は取引価額1,000円未満で200円、1,000円以上で取引価額の20％であり、見直しの結論が出るまではこの上限が維持される。"
      ],
      "interpretations": [
        "広告審査では『No.1』という文言だけを見るのではなく、その表示が想起させる調査対象と実際の調査設計が一致しているかまで確認する必要がある。",
        "調査会社、広告代理店、インフルエンサー等へ外注しても、広告主側が根拠や表示の形成過程を把握できない状態はリスクを残す。",
        "口コミ・レビュー施策は第三者投稿の形式でも、報酬・割引・投稿条件など事業者の関与の程度から広告表示管理の対象になり得る。",
        "規制改革実施計画は制度見直しの工程を確定したもので、総付景品の新しい上限額や不実証広告規制の新運用を既に確定・施行したものではない。法律事務所等が提示する具体的な引上げ案と、政府が決定した検討事項を分けて読む必要がある。"
      ],
      "implications": [
        "No.1・満足度・推奨率等の表示は、比較対象、回答者属性、設問、調査方法、結果原票を広告承認時に確認する。",
        "調査会社・広告代理店への委託条件に、根拠資料の提示・保存と調査方法の説明を組み込む。",
        "口コミ、レビュー、SNS投稿への割引・謝礼・クーポン等は、事業者の表示に当たるかと広告明示の方法を企画段階で確認する。",
        "表示根拠と第三者への依頼内容を後から追えるよう、承認・変更・証拠保存の担当を決める。",
        "景品キャンペーンは当面、現行の200円・20％基準で審査しつつ、2026年度から2027年度にかけての消費者庁の調査・結論と総付告示等の変更を継続確認する。",
        "効果・性能表示については合理的根拠資料の準備・保存を現行どおり続けつつ、事前調査・資料提出要求・措置命令での当局説明の在り方に関する運用指針の見直しを追う。"
      ],
      "uncertain": [
        "表示全体から一般消費者が受ける認識や、第三者の自主性がどこまで残るかは個別施策によるため、執行事例の蓄積を継続確認する。",
        "総付景品の具体的な引上げ幅、不実証広告規制の運用指針改正内容はいずれも未確定で、2027年度の結論とその後の措置を待つ必要がある。"
      ]
    },
    "issues": [
      {
        "id": "display-no1-evidence",
        "title": "No.1・満足度表示の根拠をどう確認するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "比較対象、調査対象者、調査方法が適切で、表示内容と調査結果が対応しているかを広告主側で確認する。",
        "exception": "表示文言や注記によって消費者が受ける認識が変わるため、調査の名称だけで適法性は決まらない。",
        "uncertain": "『～したいNo.1』等の個別表示は表示全体に応じた判断が残る。",
        "sourceIds": [
          "source-caa-no1-report-2024"
        ]
      },
      {
        "id": "display-advertiser-control",
        "title": "広告主は委託先・根拠資料をどう管理するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "広告主自身が表示根拠を確認し、表示に関する情報共有、担当者、根拠資料の保存、問題判明時の是正を運用として持つ。",
        "exception": "必要な管理措置の具体的な程度は事業規模・表示内容・委託形態等で異なる。",
        "uncertain": "新しい広告手法・生成AI利用等では既存の管理方法をどう適用するか継続確認が必要。",
        "sourceIds": [
          "source-caa-no1-report-2024",
          "source-caa-stealth-guidebook-2024"
        ]
      },
      {
        "id": "display-stealth-marketing",
        "title": "第三者投稿が事業者の表示になるのはいつか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "投稿内容の決定への関与、依頼・指示、便益提供等の実態から事業者の表示かを見て、広告であることが一般消費者に明瞭かを確認する。",
        "exception": "第三者が自主的な意思で投稿し、事業者の表示内容決定への関与が認められない場合は事業者の表示とはならない。",
        "uncertain": "新しいSNS・レビュー施策では関与の評価が事実関係に依存する。",
        "sourceIds": [
          "source-caa-stealth-guidebook-2024",
          "source-caa-stealth-first-order-2024"
        ]
      },
      {
        "id": "display-premium-cap-review",
        "title": "総付景品の上限額はどう見直されるか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "現行の総付景品の上限は、取引価額が1,000円未満の場合200円、1,000円以上の場合は取引価額の20％である。2026年7月21日閣議決定の規制改革実施計画は、消費者庁に対し、定額部分・定率部分の双方について2026年度に検討を開始し、2027年度に結論を得て、結論後速やかに必要な措置を講ずることを求めている。",
        "exception": "現時点で上限額の引上げ幅や新しい比率は決定しておらず、現行の200円・20％の上限が引き続き適用される。業種別景品告示など別の景品規制も当然には変更されない。",
        "uncertain": "具体的な新上限、改定方法、将来の総付規制廃止の有無は未決定である。300円・30％等は実務家による提案例であり、政府の決定内容ではない。",
        "sourceIds": [
          "source-cao-regulatory-reform-plan-2026-advertising"
        ]
      },
      {
        "id": "display-undemonstrated-ad-review",
        "title": "不実証広告規制の運用はどう見直されるか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "規制改革実施計画は、不実証広告規制について2026年度に検討を開始し、2027年度に結論を得る方針を示した。事前調査・合理的根拠資料の提出要求時に消費者庁が一般消費者の印象・認識に関する考え方を可能な限り書面で説明すること、措置命令時に提出資料が合理的根拠資料に該当しない理由を具体的に説明・公表することなどが検討対象となっている。",
        "exception": "現行の景品表示法7条2項に基づく合理的根拠資料の提出要求や、合理的根拠がない場合の取扱いが廃止・変更されたわけではなく、運用指針等の見直しが確定するまでは現行ルールが適用される。",
        "uncertain": "運用指針の具体的な改正文言、説明・公表の範囲、実施時期は今後の検討・結論待ちである。",
        "sourceIds": [
          "source-cao-regulatory-reform-plan-2026-advertising"
        ]
      }
    ],
    "sourceIds": [
      "source-caa-no1-report-2024",
      "source-caa-stealth-guidebook-2024",
      "source-caa-stealth-first-order-2024",
      "source-cao-regulatory-reform-plan-2026-advertising"
    ],
    "practicalImpacts": [
      "広告審査",
      "No.1調査の証拠管理",
      "広告代理店・調査会社管理",
      "口コミ・レビュー施策",
      "SNS・インフルエンサー施策",
      "表示根拠の保存・是正",
      "総付景品キャンペーン設計",
      "効果・性能表示の根拠資料・当局対応"
    ]
  },
  {
    "slug": "economic-security-tech-control",
    "title": "経済安全保障・技術流出・輸出管理",
    "categories": [
      "国際取引",
      "危機管理・コンプライアンス",
      "知的財産",
      "情報セキュリティ"
    ],
    "summary": "経済安全保障上の事業リスクを、経営ガバナンス、重要情報の保護、技術流出対策、外為法上の輸出管理から企業実務向けに整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "経済安全保障への対応は、個別の輸出許可や情報管理だけでなく、サプライチェーン、技術、人材、共同研究、取引先、海外事業を含む経営上のリスク管理として扱われるようになっています。",
      "2025年から2026年にかけて、重要経済安保情報保護活用法の本格運用、補完的輸出規制の見直し、経済安全保障経営ガイドライン、技術流出対策ガイダンス第2版が相次いで整備されました。",
      "このテーマでは、経営・法務・知財・輸出管理・情報セキュリティが別々に対応するのではなく、どの場面で何を確認し、誰へエスカレーションするかを資料から追います。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省は2026年1月23日、経済安全保障上のリスクによる中長期的損失の抑制と企業価値の維持・向上を見据えた『経済安全保障経営ガイドライン（第1版）』を公表した。",
        "重要経済安保情報保護活用法は2025年5月16日に施行され、内閣府は同年5月2日に行政機関向け・適合事業者向けガイドラインと適性評価Q&Aを公表した。",
        "経済産業省は2026年4月27日、海外生産拠点・人を通じた流出に加え、共同研究と調達時のすり合わせを新たに扱う『技術流出対策ガイダンス第2版』を公表した。",
        "外為法上の補完的輸出規制は2025年10月9日に見直し後の制度が施行され、通常兵器キャッチオール規制等について手続フローや客観要件確認シートが更新された。"
      ],
      "interpretations": [
        "経済安全保障リスクは法令違反の有無だけでなく、特定国・特定取引先への依存、重要技術の流出、重要情報へのアクセス、規制変更による事業継続への影響を含めて経営判断へ組み込む必要がある。",
        "技術流出対策では秘密保持契約だけに依存せず、共同研究、調達、海外拠点、人の異動など技術が移転する場面ごとに、開示範囲・アクセス・記録・終了時対応を設計する方が実効的である。",
        "輸出管理では品目該当性だけでなく、用途・需要者・取引経路を確認し、キャッチオール規制の客観要件やインフォーム要件を案件審査へ組み込む必要がある。"
      ],
      "implications": [
        "経営・法務・事業・調達・知財・輸出管理の役割を決め、経済安全保障リスクを重要案件の審査項目へ組み込む。",
        "政府の重要情報を扱う可能性がある事業では、適合事業者認定、適性評価、施設・情報システム、事故対応等の要求事項を早期に確認する。",
        "共同研究、技術ライセンス、海外拠点、調達時のすり合わせでは、提供技術の特定、アクセス権、再提供、持出し、退職・終了時管理を点検する。",
        "輸出・技術提供では、仕向地、需要者、用途、外国ユーザーリスト、懸念情報を確認し、許可不要と判断した根拠も社内で追えるようにする。"
      ],
      "uncertain": [
        "国際情勢、指定情報、輸出管理対象品目・需要者情報は継続的に更新されるため、社内ルールを固定せず公的情報の更新を追う必要がある。",
        "個別取引で必要な管理水準は、技術の重要性、相手方、国・地域、契約関係、政府情報へのアクセス等によって大きく異なる。"
      ]
    },
    "issues": [
      {
        "id": "econsec-governance",
        "title": "経済安全保障リスクを経営・案件審査へどう組み込むか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "自社の重要事業・技術・依存関係を把握し、経済安全保障リスクを経営戦略と重要案件の審査・エスカレーションへ組み込む。",
        "exception": "必要な管理体制は事業内容・海外展開・技術の重要性等で異なる。",
        "uncertain": "国際情勢と政策変更により重点リスクは変化するため継続見直しが必要。",
        "sourceIds": [
          "source-meti-economic-security-management-2026"
        ]
      },
      {
        "id": "econsec-classified-info",
        "title": "重要経済安保情報を扱う企業は何を整えるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "重要経済安保情報の提供を受ける場合は、適合事業者認定、取扱者の適性評価、施設・情報システム・教育・事故対応等をガイドラインに沿って整える。",
        "exception": "すべての企業が認定対象になるわけではなく、政府から対象情報の提供を受ける事業関係が前提となる。",
        "uncertain": "指定・提供の実績や認定運用は今後も蓄積するため最新の運用資料を確認する。",
        "sourceIds": [
          "source-cao-security-clearance-guidelines-2025"
        ]
      },
      {
        "id": "econsec-tech-leakage",
        "title": "共同研究・調達・人を通じた技術流出をどう防ぐか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "技術を特定し、開示範囲、アクセス、相手方管理、記録、終了時対応を、海外拠点・人材・共同研究・調達の各場面に応じて設計する。",
        "exception": "研究開発や調達の円滑性を損なう一律制限ではなく、技術の重要性と相手方リスクに応じた管理が必要。",
        "uncertain": "新しい共同研究形態やAIを含むデータ・技術共有では個別の管理設計が残る。",
        "sourceIds": [
          "source-meti-tech-leakage-guidance-2026"
        ]
      },
      {
        "id": "econsec-export-control",
        "title": "キャッチオール規制と輸出審査をどう更新するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "リスト規制の該非判定に加え、仕向地、用途、需要者、懸念情報を確認し、補完的輸出規制の客観要件・インフォーム要件に沿って許可要否を判定する。",
        "exception": "適用される規制・許可の種類は貨物・技術、仕向地、用途・需要者等で異なる。",
        "uncertain": "外国ユーザーリストや規制品目は更新されるため取引時点の最新資料確認が必要。",
        "sourceIds": [
          "source-meti-catchall-reform-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-economic-security-management-2026",
      "source-cao-security-clearance-guidelines-2025",
      "source-meti-tech-leakage-guidance-2026",
      "source-meti-catchall-reform-2025"
    ],
    "practicalImpacts": [
      "経済安全保障リスク評価",
      "重要案件の承認・エスカレーション",
      "適合事業者・適性評価",
      "共同研究・技術移転契約",
      "海外拠点・人材管理",
      "輸出管理・用途需要者確認",
      "証跡・教育・事故対応"
    ]
  },
  {
    "slug": "generative-ai-ip-rights",
    "title": "生成AIと知的財産・肖像／声",
    "categories": [
      "AI・デジタル",
      "知的財産",
      "消費者法・表示"
    ],
    "summary": "生成AIの学習・生成・提供に伴う著作権、知財保護・透明性、肖像・声の無断利用を、文化庁・知的財産戦略本部・法務省の一次資料と実務解説から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "生成AIの知財リスクは、学習データの利用、生成物の利用、サービス提供者の透明性、人物の肖像・声の利用で問題になる法的根拠が異なります。",
      "文化庁は著作権について学習段階と生成・利用段階を分け、2026年8月には政府が生成AI事業者向けの知財保護・透明性プリンシプル・コードを確定しました。",
      "同じ2026年8月には、法務省が肖像・声等の無断利用についてパブリシティ権等の民事責任に関する解釈指針を公表しています。",
      "このテーマでは、AI一般のガバナンスではなく、知財・人格的利益・コンテンツ利用に関する具体的な権利処理と対外説明を追います。"
    ],
    "currentSummary": {
      "facts": [
        "文化庁の『AIと著作権に関する考え方について』は、AI学習段階と生成・利用段階を分け、著作権法30条の4、類似性、依拠性等の考え方を整理している。",
        "2026年8月25日に確定したプリンシプル・コードは、生成AI開発者・提供者にAIモデル・学習データ等の情報開示と権利者・利用者からの照会対応を求め、コンプライ・オア・エクスプレインを採る。",
        "法務省は2026年8月7日、生成AIの普及等を背景として、肖像・声等の無断利用に関するパブリシティ権等の民事責任を現行法・判例法理から整理した報告書を公表した。"
      ],
      "interpretations": [
        "『学習に使えるか』と『生成物を公開・販売できるか』は別の判断であり、同じ著作物についても段階ごとに確認する必要がある。",
        "生成AIサービス提供者は、知財侵害を避ける技術・運用だけでなく、モデルや学習データ、権利保護措置をどこまで外部へ説明するかが実務課題になる。",
        "人物の肖像・声を生成・利用する場合は、著作権の有無だけで審査を終えず、パブリシティ権その他の民事上の利益も確認する必要がある。"
      ],
      "implications": [
        "AIサービスの提供・調達時に、学習データ、知財保護措置、権利者照会、利用者照会への対応を確認項目に含める。",
        "画像・音声生成を広告や商品へ利用する場合、既存著作物との類似性・依拠性と、人物の肖像・声の権利処理を別々に審査する。",
        "生成AI利用規程やコンテンツ審査フローで、参照画像・プロンプト・生成物・利用目的・権利確認の記録を残す。"
      ],
      "uncertain": [
        "国内の生成AI著作権訴訟・裁判例の蓄積はなお限定的で、文化庁の考え方は個別事件の結論を直接決めるものではない。",
        "プリンシプル・コードの届出・運用実務や実効性は、適用開始後の事業者対応と政府のフォローアップを継続確認する必要がある。",
        "肖像・声の無断利用は事案の商業性、利用態様、本人の顧客吸引力等に左右され、個別案件の評価が必要になる。"
      ]
    },
    "issues": [
      {
        "id": "ai-ip-training-generation",
        "title": "AI学習と生成・利用の著作権判断をどう分けるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "学習段階では著作権法30条の4等の適用を確認し、生成・利用段階では既存著作物との類似性・依拠性等を別に評価する。",
        "exception": "著作権者の利益を不当に害する場合など、権利制限規定が適用されない場面がある。",
        "uncertain": "生成AI固有の国内裁判例の蓄積は限定的で、個別の学習・生成方法によって評価が変わる。",
        "sourceIds": [
          "source-bunka-ai-copyright-2024"
        ]
      },
      {
        "id": "ai-ip-transparency",
        "title": "生成AI事業者は何を開示するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "プリンシプル・コードに沿い、モデル・学習データ・知財保護措置等について原則を実施するか、実施しない理由を説明する。",
        "exception": "営業秘密、セキュリティその他の正当な非開示理由との調整が必要になる。",
        "uncertain": "届出開始後の具体的な開示実務や業界水準は今後の運用を確認する。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-rights-response",
        "title": "権利者・利用者からの照会にどう対応するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "生成AI事業者は、権利者やAI利用者からの知財・透明性に関する照会へ対応する仕組みを整え、説明可能性を確保する。",
        "exception": "照会内容により、権利侵害の有無、秘密情報、第三者情報の扱いを個別に整理する必要がある。",
        "uncertain": "回答範囲・速度・証拠保存などの実務慣行は運用開始後の蓄積を待つ部分がある。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-publicity",
        "title": "肖像・声を生成・利用するときの民事責任",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "著作権だけでなく、肖像・声の利用態様や商業的価値等を踏まえてパブリシティ権等の民事上の利益侵害を検討する。",
        "exception": "人物の著名性、利用目的、表現内容等により保護される利益と違法性判断が変わる。",
        "uncertain": "生成AIによる具体的利用類型について裁判例が十分に蓄積しているわけではなく、個別事案の評価が必要。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-ai-ip-principle-code-2026",
      "source-moj-ai-likeness-report-2026",
      "source-bunka-ai-copyright-2024"
    ],
    "practicalImpacts": [
      "AIサービス提供方針・透明性開示",
      "AIベンダー選定・契約",
      "生成物の知財レビュー",
      "広告・コンテンツ審査",
      "肖像・音声の権利処理",
      "プロンプト・参照素材・生成履歴の記録"
    ]
  },
  {
    "slug": "sustainability-disclosure-ssbj",
    "title": "SSBJ基準・サステナビリティ開示",
    "categories": [
      "金融商品取引・開示・IR",
      "会社法・ガバナンス",
      "危機管理・コンプライアンス"
    ],
    "summary": "SSBJ基準の法定開示への段階適用、温室効果ガス開示の現行基準、Scope3の責任・サプライチェーン法務を一次資料と実務解説から追う。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "金融庁は2026年2月、プライム市場の一定規模以上の上場会社にSSBJ基準準拠のサステナビリティ情報を有価証券報告書等で開示する制度を確定しました。",
      "SSBJ基準自体もISSB基準の改訂を受けて更新されるため、適用時期だけでなく現行基準と改訂履歴を追う必要があります。",
      "とくにScope3はサプライチェーン全体から情報を集めるため、開示責任だけでなく独禁法、取適法、営業秘密、契約・データ管理へ実務が広がります。"
    ],
    "currentSummary": {
      "facts": [
        "プライム市場上場会社のうち平均時価総額1兆円以上の会社にSSBJ基準準拠の開示が義務付けられ、平均時価総額は直前事業年度末とその前4事業年度末の時価総額の平均で判定する。",
        "原則は2028年3月31日以後終了事業年度から適用し、平均時価総額3兆円以上の会社は2027年3月31日以後終了事業年度から前倒しで適用される。",
        "適用開始年度と翌年度には二段階開示が認められ、将来情報・Scope3定量情報には推論過程等と社内開示手続の記載が求められる。",
        "SSBJは2026年3月、ISSBの2025年12月改訂を受けて適用基準・一般開示基準・気候関連開示基準を改正した。"
      ],
      "interpretations": [
        "SSBJ対応はサステナビリティ報告だけの作業ではなく、有価証券報告書の作成・レビュー・証拠化を含む開示統制の問題として扱う必要がある。",
        "Scope3の情報収集では、取引先への要求内容や事業者間のデータ共有が独禁法・取適法・営業秘密の問題を生み得るため、算定フローと契約・法務レビューを分断しない方がよい。"
      ],
      "implications": [
        "自社の平均時価総額から適用時期を判定し、二段階開示を使うかを含めて開示工程を設計する。",
        "Scope3・将来情報の算定根拠、推論過程、レビュー手続を後から説明できる形で記録する。",
        "サプライヤーから取得する排出量データの目的・範囲・利用・秘密保持を契約と運用で整理する。"
      ],
      "uncertain": [
        "SSBJ基準は国際基準の改訂に応じて更新されるため、適用開始までの追加改訂を継続確認する必要がある。",
        "Scope3の具体的な開示実務やセーフハーバーの運用は、制度適用後の実務蓄積を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ssbj-applicability",
        "title": "どの会社にいつSSBJ基準が義務化されるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "プライム市場の平均時価総額1兆円以上を対象とし、原則2028年3月31日以後終了事業年度、3兆円以上は2027年3月31日以後終了事業年度から適用する。",
        "exception": "上場後5事業年度を経過していない場合は、経過した事業年度末の平均で判定する。",
        "uncertain": "今後の制度変更や追加対象拡大は継続確認する。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "ssbj-two-step-disclosure",
        "title": "二段階開示をどう使うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "適用開始年度と翌年度は、所定のサステナビリティ情報を後から訂正報告書で提出する二段階開示が可能。",
        "exception": "提出期限や開示対象は改正府令・金融庁の考え方に従う。",
        "uncertain": "各社が実際にどの程度利用するかは適用開始後の実務を見る必要がある。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "ssbj-scope3-safe-harbor",
        "title": "Scope3・将来情報の責任リスクをどう抑えるか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "推論過程や差異要因、社内開示手続等を合理的な範囲で具体的に記載することが、Scope3定量情報の虚偽記載等の責任評価で重要になる。",
        "exception": "具体的記載をすれば常に免責されるという制度ではなく、事実関係ごとの評価が必要。",
        "uncertain": "実際の責任判断の蓄積は今後確認が必要。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "ssbj-current-standard",
        "title": "適用すべきSSBJ基準の現行版は何か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年3月にはGHG排出開示について適用・一般・気候関連の3基準が改正されており、基準本文と改訂履歴を確認する。",
        "exception": "国際基準の変更に応じて今後も改訂され得る。",
        "uncertain": "追加改訂の有無を継続監視する。",
        "sourceIds": [
          "source-ssbj-ghg-amendment-2026"
        ]
      },
      {
        "id": "ssbj-scope3-supplychain",
        "title": "Scope3の取引先データ収集をどう設計するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "排出量データの取得・共有は、必要性と範囲を限定し、競争上重要な情報、取引条件、営業秘密の扱いを含めて法務レビューする。",
        "exception": "環境目的であることだけで競争法上の問題が消えるわけではない。",
        "uncertain": "業界別のデータ共有スキームや取引実態によって評価が変わる。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026",
          "source-ssbj-ghg-amendment-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-disclosure-ordinance-2026",
      "source-ssbj-ghg-amendment-2026"
    ],
    "practicalImpacts": [
      "有価証券報告書の開示統制",
      "SSBJ適用判定・開示工程",
      "Scope3算定・証拠化",
      "サプライヤー情報収集",
      "データ共有・営業秘密管理",
      "取適法・独禁法レビュー"
    ]
  },
  {
    "slug": "companies-act-review-shareholders",
    "title": "会社法制見直し・株主総会／実質株主",
    "categories": [
      "会社法・ガバナンス",
      "金融商品取引・開示・IR"
    ],
    "summary": "会社法制（株式・株主総会等関係）の見直しを、中間試案を基礎にバーチャル総会、実質株主確認、株主提案、開示合理化など企業実務への影響から追う。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "法制審議会では、株式発行、株主総会、企業統治を広く対象に次期会社法制の見直しが進んでいます。",
      "2026年4月公表の中間試案には、バーチャルオンリー株主総会、実質株主確認制度、株主総会のデジタル化・会議体規律、株主提案権、事業報告等と有価証券報告書の開示合理化などが含まれます。",
      "まだ成立法ではないため、現行実務と将来の制度案を混同せず、総会・IR・株主管理に影響する論点を継続的に追う棚とします。"
    ],
    "currentSummary": {
      "facts": [
        "中間試案は、株式の発行の在り方、株主総会の在り方、企業統治その他の規律を3部構成で検討している。",
        "株主総会関係では、バーチャルオンリー株主総会、実質株主確認制度、招集・議決権行使のデジタル化、会議体規律、株主提案権の見直しが提示されている。",
        "企業統治等では、指名委員会等設置会社、責任限定契約、事業報告等と有価証券報告書の開示合理化が検討対象に含まれる。"
      ],
      "interpretations": [
        "実質株主確認制度は、名義株主の管理だけでなく、会社と投資家の対話や議決権行使の前提を変え得るため、総務・IR・法務の共同論点になる。",
        "総会前の有価証券報告書開示と会社法上の事業報告等の合理化は、開示書類を別々に作る現行工程そのものを見直す可能性がある。",
        "バーチャル総会や会議体規律の見直しは、定款・招集・通信障害対応・決議の瑕疵リスクを含めて追う必要がある。"
      ],
      "implications": [
        "総会運営、定款、招集通知、電子提供、議決権行使の現行フローを棚卸しし、制度案が確定した際の変更箇所を把握しておく。",
        "実質株主への照会・通知・エンゲージメントの現行運用を整理し、法改正案とのギャップを追う。",
        "有価証券報告書の総会前開示と事業報告等の作成工程を、法務・IR・経理・監査で横断して確認する。"
      ],
      "uncertain": [
        "中間試案は検討段階であり、最終要綱、法案、成立法の内容は確定していない。",
        "各制度の施行時期・経過措置・法務省令レベルの詳細は今後の審議を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "companies-act-virtual-meetings",
        "title": "バーチャル株主総会をどう制度化するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "バーチャルオンリー株主総会の実施要件、手続、決議取消しの特則、延期・続行等を会社法上の恒久制度として検討している。",
        "exception": "具体的な要件や対象会社は最終案で変更され得る。",
        "uncertain": "成立法・施行時期は未確定。",
        "sourceIds": [
          "source-moj-companies-act-interim-2026"
        ]
      },
      {
        "id": "companies-act-beneficial-shareholders",
        "title": "実質株主をどう確認・通知させるか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "会社から実質株主を確認する制度と、株主側から会社への通知を義務付ける制度の双方が検討されている。",
        "exception": "確認対象、通知事項、違反時の効果などは制度案の確定を待つ。",
        "uncertain": "最終要綱での制度設計は未確定。",
        "sourceIds": [
          "source-moj-companies-act-interim-2026"
        ]
      },
      {
        "id": "companies-act-meeting-body",
        "title": "株主総会を『会議体』としてどこまで合理化するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "事前の議決権行使がある場合の決議や書面決議など、総会・社債権者集会の手続合理化が検討されている。",
        "exception": "株主権保護との調整が必要。",
        "uncertain": "最終案の要件・効果は未確定。",
        "sourceIds": [
          "source-moj-companies-act-interim-2026"
        ]
      },
      {
        "id": "companies-act-shareholder-proposals",
        "title": "株主提案権の要件をどう見直すか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "議決権数要件や行使期限の見直しが検討されている。",
        "exception": "権利行使機会と会社側の総会準備負担の調整が必要。",
        "uncertain": "採用される案は未確定。",
        "sourceIds": [
          "source-moj-companies-act-interim-2026"
        ]
      },
      {
        "id": "companies-act-disclosure-rationalization",
        "title": "事業報告等と有価証券報告書をどう合理化するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "総会前の有価証券報告書開示を踏まえ、会社法上の事業報告等と金商法上の開示を合理化する案が検討されている。",
        "exception": "監査・開示責任・総会時期との整合が必要。",
        "uncertain": "一本化・省略の最終的な範囲は未確定。",
        "sourceIds": [
          "source-moj-companies-act-interim-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-companies-act-interim-2026"
    ],
    "practicalImpacts": [
      "株主総会運営・定款",
      "招集通知・電子提供",
      "実質株主の確認・エンゲージメント",
      "株主提案対応",
      "総会前有報開示",
      "事業報告等の作成・監査工程"
    ]
  },
  {
    "slug": "distribution-resale-price",
    "title": "流通取引・再販売価格拘束",
    "categories": [
      "独占禁止法・競争法",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "メーカー・卸・小売の価格政策と販路管理について、再販売価格拘束の原則、リスク・コスト負担による例外、EC・ポイント施策、営業現場の統制を一次資料と実務解説から追う。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "再販売価格拘束は、メーカー等が流通業者の販売価格を拘束する行為として独占禁止法上原則として問題になります。",
      "2026年7月の流通・取引慣行ガイドライン改正は、メーカーがユーザーへの販売に伴うリスクとコストを実質的に負担し、経済実態としてメーカー自身が販売していると評価できる場合などの考え方を具体化しました。",
      "同年8月のルックスオティカジャパン確約事案では、希望小売価格だけでなくポイント・クーポンによる実質価格やオンライン販売開始時期への介入も問題となった疑いが示され、営業・EC運用まで含めた管理が必要であることが分かります。"
    ],
    "currentSummary": {
      "facts": [
        "再販売価格維持行為は独占禁止法2条9項4号に定義され、同法19条により原則として禁止される。",
        "公正取引委員会は2026年7月8日、流通・取引慣行ガイドラインを改正し、メーカーがユーザーへの販売に伴うリスク・コストを実質的に負担する場合等の例を追加した。",
        "2026年8月6日のルックスオティカジャパン確約事案では、希望小売価格以上での販売、ポイント・クーポン等による実質値引きの抑制、一定期間のオンライン販売停止等を求めていた疑いが対象となった。",
        "確約計画の認定は、対象行為が独占禁止法違反であったことを公正取引委員会が認定したものではない。"
      ],
      "interpretations": [
        "価格の『推奨』と拘束の境界は文言だけでなく、値下げした販売店への働き掛け、苦情を受けた他店への介入、取引条件との結び付きなど実際の営業行動で判断する必要がある。",
        "メーカーが実質的な販売主体といえるかは契約名称ではなく、在庫、契約不適合、回収、保管、運送、広告などのリスクとコストを誰が負担しているかを具体的に確認する。",
        "ECでは販売価格だけでなくポイント・クーポン、販売開始時期、販路制限を組み合わせた運用が実質的な価格拘束にならないかを一体でレビューした方がよい。"
      ],
      "implications": [
        "希望小売価格やキャンペーン方針を販売店へ伝える際の営業文言、承認、エスカレーションを見直す。",
        "例外を検討する場合は、メーカー・流通業者間のリスクとコストの分担を契約と実運用の双方で記録する。",
        "ポイント、クーポン、EC販売時期、値引き広告への介入を価格政策のレビュー対象に含める。",
        "販売店から他店の価格に関する苦情を受けたとき、競争制限的な介入へつながらない対応ルールを用意する。"
      ],
      "uncertain": [
        "メーカーが負担すべきリスク・コストの具体的な範囲は個別の流通スキームによって異なり、形式的なチェックだけで例外該当性を確定できない。",
        "ルックスオティカジャパン事案は確約手続であり、問題となった各行為について違法性の司法判断・行政上の違反認定が示されたものではない。"
      ]
    },
    "issues": [
      {
        "id": "rpm-principle",
        "title": "価格の推奨と再販売価格拘束をどう区別するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "希望小売価格を参考情報として提示することと、流通業者に特定価格で販売するよう実効的に拘束することを分け、実際の働き掛けや取引条件を確認する。",
        "exception": "メーカー自身が経済実態としてユーザーへ販売していると評価できる場合等、再販売価格拘束に当たらない場面がある。",
        "uncertain": "拘束性は個別のコミュニケーションや取引関係によって評価が変わる。",
        "sourceIds": [
          "source-jftc-distribution-guideline-2026",
          "source-jftc-luxottica-commitment-2026"
        ]
      },
      {
        "id": "rpm-risk-cost-exception",
        "title": "メーカーが実質的な販売主体といえるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "在庫、契約不適合、回収、保管・運送、広告等のリスク・コストを誰が実質的に負担するかを確認し、メーカーがユーザーへの販売主体と評価できるかを判断する。",
        "exception": "契約書上メーカー負担と書くだけで足りず、実際の負担関係を確認する必要がある。",
        "uncertain": "全てのコストをどこまでメーカーが負担すべきかはスキームごとの検討が必要。",
        "sourceIds": [
          "source-jftc-distribution-guideline-2026"
        ]
      },
      {
        "id": "rpm-online-controls",
        "title": "EC・ポイント・クーポンへの介入をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "表示価格だけでなく、ポイント・クーポンによる実質価格やオンライン販売開始時期への働き掛けを含め、販売店の価格・販路の自主性を損なっていないか確認する。",
        "exception": "個別の施策が直ちに違法となるわけではなく、拘束性・取引実態を踏まえた判断が必要。",
        "uncertain": "確約事案は違反認定ではないため、具体的な限界は今後の執行・審判例等も継続確認する。",
        "sourceIds": [
          "source-jftc-luxottica-commitment-2026"
        ]
      },
      {
        "id": "rpm-compliance-controls",
        "title": "営業・流通部門の統制をどう置くか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "価格・販路方針の研修、販売店とのコミュニケーションルール、監査、苦情対応、違反疑義のエスカレーションを平時の統制として整える。",
        "exception": "必要な統制水準は業態、流通構造、価格政策の複雑さにより異なる。",
        "uncertain": "第三者モニタリング等の措置は確約事案固有の内容であり、全社に一律に必要な法的義務ではない。",
        "sourceIds": [
          "source-jftc-luxottica-commitment-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jftc-distribution-guideline-2026",
      "source-jftc-luxottica-commitment-2026"
    ],
    "practicalImpacts": [
      "販売店契約",
      "希望小売価格・価格政策",
      "EC・ポイント・クーポン",
      "営業コミュニケーション",
      "流通スキームのリスク・コスト配分",
      "独禁法研修・監査"
    ]
  },
  {
    "slug": "crossborder-collection-payment",
    "title": "クロスボーダー収納代行・資金決済規制",
    "categories": [
      "国際取引",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "海外を跨ぐ収納代行について、資金移動業規制の対象、銀行・資金移動業者、エスクロー、プラットフォーム等の除外類型と利用者保護上の例外を整理する。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "2026年6月1日に施行された改正資金決済法は、国境を跨ぐ収納代行の一部を為替取引として資金移動業規制の対象に組み込みました。",
      "一方、銀行・資金移動業者からの委託、一定のエスクローやプラットフォーム、同一グループ等については、政省令上の要件を満たす場合に規制対象から除外されます。",
      "このテーマでは、サービス名称から判断せず、誰から誰へ資金を移すのか、債務がいつ消滅するか、再委託があるか、不履行時に誰が責任を負うかという取引構造から登録要否を追います。"
    ],
    "currentSummary": {
      "facts": [
        "改正資金決済法と関係政省令は2026年6月1日に施行され、一定のクロスボーダー収納代行が資金移動業規制の対象となった。",
        "政省令は、銀行・資金移動業者からの委託、一定のエスクロー、プラットフォーム、同一グループ等について除外類型を定めている。",
        "除外類型に形式上該当しても、受領時に債務が消滅しない、再受託者の不履行について委託元が責任を負わないなど、利用者保護上のリスクが大きい場合には除外されないことがある。",
        "単に自社名義の銀行口座や資金移動業者のサービスを利用して収納するだけで、銀行等からの受託類型に当然に該当するわけではない。"
      ],
      "interpretations": [
        "登録要否は『収納代行』『決済代行』といったサービス名ではなく、債権者・債務者・収納者・再受託者の関係と資金移動の実態から判定する必要がある。",
        "プラットフォームやエスクローの除外を使う場合は、代金受領時の債務消滅と、再委託先が資金を渡さなかった場合の責任分担を契約上も運用上も確認する。",
        "海外グループ会社や外部決済事業者を含む多段階スキームでは、各段階の委託・再委託関係を図にして判定すると漏れを減らしやすい。"
      ],
      "implications": [
        "海外送金を伴う代金回収フローを、契約当事者、資金口座、債務消滅時点、再委託先まで図示する。",
        "除外類型を利用する場合は、その法令上の要件を契約条項と実際の資金フローの双方で確認する。",
        "プラットフォーム・エスクローでは、代金受領後の債務消滅と不履行時の補償・責任を明確にする。",
        "既存の海外収納代行スキームが改正後も登録不要かを再点検し、必要に応じて資金移動業者との委託形態や業務設計を見直す。"
      ],
      "uncertain": [
        "複合的な決済・収納スキームでは複数の除外類型が関係し得るため、個別の契約・資金フローによる確認が必要。",
        "施行後の監督・照会事例の蓄積はまだ限られており、金融庁の今後のQ&A・監督実務を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "crossborder-collection-scope",
        "title": "どの収納代行が資金移動業規制の対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "国境を跨ぐ資金移動を伴う収納代行について、当事者関係と資金フローを確認し、為替取引として登録が必要かを判定する。",
        "exception": "政省令が定める委託・エスクロー・プラットフォーム等の除外類型に該当する場合がある。",
        "uncertain": "複雑な多段階スキームは個別の事実確認が必要。",
        "sourceIds": [
          "source-fsa-crossborder-collection-2026"
        ]
      },
      {
        "id": "crossborder-collection-exemptions",
        "title": "どの委託・再委託が規制から除外されるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "銀行・資金移動業者からの一定の委託、エスクロー、プラットフォーム、同一グループ等の法令要件を取引段階ごとに確認する。",
        "exception": "銀行口座を利用しているだけで銀行等からの委託に該当するわけではない。",
        "uncertain": "再委託や複数事業者を介する場合は各段階の要件充足を確認する。",
        "sourceIds": [
          "source-fsa-crossborder-collection-2026"
        ]
      },
      {
        "id": "crossborder-collection-platform-escrow",
        "title": "プラットフォーム・エスクローの除外をどう使うか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "取引当事者間の債権債務、代金受領の効果、再委託関係、資金未達時の責任を整理し、政省令の要件と照合する。",
        "exception": "名目上プラットフォームやエスクローであっても、実際の責任・資金フローが要件と合わなければ除外されない。",
        "uncertain": "事業モデルごとの契約構造により評価が異なる。",
        "sourceIds": [
          "source-fsa-crossborder-collection-2026"
        ]
      },
      {
        "id": "crossborder-collection-user-protection",
        "title": "利用者保護上のリスクが高い取引をどう見分けるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "受領時の債務消滅、不履行時の責任、取扱対象取引等を確認し、利用者保護上のリスクが大きい類型に該当しないかを確認する。",
        "exception": "形式上の除外類型に該当しても、所定の高リスク要件に該当すれば規制除外が認められない場合がある。",
        "uncertain": "監督実務の具体例は今後の蓄積を追う必要がある。",
        "sourceIds": [
          "source-fsa-crossborder-collection-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-crossborder-collection-2026"
    ],
    "practicalImpacts": [
      "海外代金回収スキーム",
      "資金移動業登録要否",
      "EC・プラットフォーム契約",
      "エスクロー",
      "決済事業者への委託・再委託",
      "債務消滅・不履行時責任"
    ]
  },
  {
    "slug": "whistleblower-internal-reporting",
    "title": "内部通報・公益通報制度",
    "categories": [
      "危機管理・コンプライアンス",
      "労務",
      "契約"
    ],
    "summary": "2026年12月1日施行の改正公益通報者保護法を中心に、内部通報体制、従事者指定、通報妨害・通報者探索、不利益取扱い、フリーランス対応、記録・周知を一次資料と実務解説から追う。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "公益通報者保護法の令和7年改正は2026年12月1日に施行され、通報者保護と事業者の体制整備の双方が強化されます。",
      "改正では、フリーランス等への保護拡大、正当な理由のない通報妨害・通報者探索の禁止、通報後1年以内の解雇・懲戒に関する推定規定、公益通報を理由とする解雇・懲戒への直罰などが導入されます。",
      "法定指針も改正され、従事者の指定方法、経営幹部からの独立性、調査・是正、利益相反排除、不利益取扱い防止、記録・評価・周知など、企業が運用へ落とす事項が具体化されています。"
    ],
    "currentSummary": {
      "facts": [
        "令和7年改正公益通報者保護法は2025年6月11日に公布され、2026年12月1日に施行される。",
        "改正法は、公益通報者の範囲に特定受託業務従事者（フリーランス）及び業務委託関係終了後1年以内の元フリーランスを加え、公益通報を理由とする契約解除・取引停止・報酬減額等を禁止する。",
        "事業者による正当な理由のない通報妨害と通報者探索が禁止され、通報をしない旨の合意等は無効となり得る。",
        "公益通報後1年以内の解雇・懲戒について公益通報を理由としてされたものと推定する規定と、公益通報を理由として解雇・懲戒をした者への刑事罰が導入される。",
        "2026年3月31日公表の改正法定指針は、従事者指定、幹部からの独立性、調査・是正、利益相反排除、不利益取扱い・通報妨害・通報者探索の防止、記録・評価・周知等を具体化している。"
      ],
      "interpretations": [
        "内部通報窓口の設置だけでなく、誰を従事者として指定し、幹部関係事案を誰が扱い、調査後の是正をどう追跡するかまで運用として設計する必要がある。",
        "通報後の人事・懲戒措置では、公益通報とは別の正当な理由と判断経緯を客観的に記録しておく重要性が従来より高まる。",
        "秘密保持条項や社内調査中の口外制限は、正当な調査目的と公益通報を妨害する運用を区別して設計する必要がある。",
        "フリーランスを利用する企業では、契約開始時だけでなく契約終了後1年間も通報可能であることを踏まえ、窓口の周知方法とアクセス経路を整える必要がある。"
      ],
      "implications": [
        "内部通報規程、窓口案内、従事者指定書、調査・利益相反ルールを2026年12月1日の施行前に見直す。",
        "役員・退職者・フリーランス・元フリーランスを含む対象者別に、通報窓口と利用方法を周知できる状態にする。",
        "通報後の配置転換、評価、懲戒、契約終了等について、通報との関係を含む判断記録と承認経路を整える。",
        "通報対応の記録保存、定期評価・改善、運用実績の開示を継続運用に組み込む。"
      ],
      "uncertain": [
        "通報妨害や通報者探索について『正当な理由』が認められる範囲は個別事情に左右され、施行後の運用・裁判例も確認する必要がある。",
        "通報後1年以内の不利益取扱いに関する推定規定や直罰が実務でどのように適用されるかは、施行後の事例蓄積を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "wb-scope-freelance",
        "title": "誰が公益通報者として保護されるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "労働者・退職者・役員に加え、2026年12月1日以降は一定のフリーランス及び契約終了後1年以内の元フリーランスも対象として窓口・周知を設計する。",
        "exception": "具体的な保護要件や通報対象事実は通報先・立場ごとに異なるため、Q&A等で個別に確認する。",
        "uncertain": "複層的な再委託関係では、誰の役務提供先に関する通報かを取引構造から確認する必要がある。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-qa-2026"
        ]
      },
      {
        "id": "wb-system-controls",
        "title": "内部通報体制をどう整備するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "従事者を明確に指定し、幹部関係事案の独立性、調査・是正、利益相反排除を含む対応体制を規程と実運用で整える。",
        "exception": "常時使用する労働者数等により法定義務の適用関係は異なる。",
        "uncertain": "自社の組織規模・グループ構成に応じた窓口・調査体制の具体設計は個別検討が必要。",
        "sourceIds": [
          "source-caa-whistleblower-guideline-2026",
          "source-caa-whistleblower-qa-2026"
        ]
      },
      {
        "id": "wb-obstruction-search",
        "title": "通報妨害・通報者探索をどう防ぐか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "正当な理由なく通報しない旨を約束させたり、不利益を示唆したり、通報者を特定する目的の行為を行わないよう社内統制を置く。",
        "exception": "必要な調査のための情報確認など、正当な理由がある場合は一律に禁止されるわけではない。",
        "uncertain": "正当な理由の具体的限界は事案ごとの目的・必要性・方法を踏まえて判断する必要がある。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "wb-retaliation-employment",
        "title": "通報後の人事・懲戒・契約措置をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "公益通報を理由とする不利益取扱いを防止し、通報後の人事・懲戒等には独立した合理的理由と判断経緯を記録する。",
        "exception": "通報と無関係な正当な理由に基づく措置まで禁止されるものではない。",
        "uncertain": "推定規定や直罰の適用範囲は施行後の裁判例・執行例を継続確認する。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-qa-2026"
        ]
      },
      {
        "id": "wb-records-notice",
        "title": "記録・評価・周知をどう継続運用するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "通報対応記録を適切に保存し、体制を定期評価・改善するとともに、対象者へ窓口・保護措置・運用事項を周知する。",
        "exception": "運用実績の開示は秘密・信用・名誉・プライバシー等を害さない範囲で行う。",
        "uncertain": "具体的な保存期間や周知媒体は組織・契約関係に応じて設計する必要がある。",
        "sourceIds": [
          "source-caa-whistleblower-guideline-2026",
          "source-caa-whistleblower-qa-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-caa-whistleblower-amendment-2025",
      "source-caa-whistleblower-guideline-2026",
      "source-caa-whistleblower-qa-2026"
    ],
    "practicalImpacts": [
      "内部通報規程",
      "公益通報窓口",
      "従事者指定書・守秘義務",
      "社内調査・利益相反管理",
      "人事・懲戒判断記録",
      "秘密保持条項・口外制限",
      "フリーランス契約・窓口周知",
      "通報対応記録・定期評価"
    ]
  },
  {
    "slug": "women-advancement-disclosure",
    "title": "女性活躍推進法・男女間賃金差異／女性管理職比率",
    "categories": [
      "労務",
      "金融商品取引・開示・IR",
      "会社法・ガバナンス"
    ],
    "summary": "2026年4月1日施行の改正女性活躍推進法を中心に、男女間賃金差異と女性管理職比率の情報公表、行動計画・課題分析、女性の健康支援を企業実務として追う。",
    "lastUpdated": "2026-09-02",
    "lastVerified": "2026-09-02",
    "isNew": true,
    "overview": [
      "2025年改正により女性活躍推進法の期限が2036年3月31日まで延長され、企業の情報公表義務も強化されました。",
      "2026年4月1日から、常時雇用する労働者が101人以上の事業主では、男女間賃金差異と女性管理職比率が必須の情報公表項目になります。",
      "このテーマでは、数値を公表するだけでなく、差異の原因を把握し、一般事業主行動計画や人材配置・登用、働き方、女性の健康支援へどうつなげるかを一次資料と実務解説から確認します。"
    ],
    "currentSummary": {
      "facts": [
        "女性活躍推進法の延長等を含む令和7年法律第63号は2025年6月11日に公布され、女性活躍推進法の期限は2036年3月31日まで延長された。",
        "2026年4月1日から、常時雇用する労働者が101人以上の事業主について、男女間賃金差異と女性管理職比率の情報公表が必須となる。",
        "301人以上の事業主は必須2項目に加えて選択項目から2項目以上、101人以上300人以下の事業主は選択項目から1項目以上を公表する。",
        "改正施行後に事業年度が終了した場合、情報は新たな事業年度開始後速やかに公表し、この『速やかに』はおおむね事業年度終了後3か月以内と解されている。公表はその後おおむね年1回以上更新する。",
        "改正では、女性の健康上の特性に配慮した取組を事業主行動計画の策定等で考慮することも明確化された。"
      ],
      "interpretations": [
        "男女間賃金差異や女性管理職比率は、人事部門だけの公表作業ではなく、算出定義・基礎データ・公表時点・説明文を法務・IR・経理等と合わせる必要がある。",
        "比率だけでは格差の原因を特定できないため、職種、雇用区分、勤続、配置、育成、昇進、働き方などに分解し、行動計画の課題設定へつなげることが実務上重要になる。",
        "女性管理職比率は単独で見るより、女性労働者比率や管理職候補層・昇進プロセスとの関係を見ることで、登用上のボトルネックを把握しやすい。"
      ],
      "implications": [
        "自社が101人以上又は301人以上のどちらの区分に当たるかを確認し、必須・選択の公表項目を確定する。",
        "男女間賃金差異と女性管理職比率について、基礎データ、算出方法、集計責任者、公表場所、承認フローを決める。",
        "差異が生じる要因を分析し、必要に応じて公表時の説明欄と一般事業主行動計画の目標・施策を整合させる。",
        "女性の健康課題や、管理職を含む長時間労働・柔軟な働き方など、登用・就業継続を阻害する要因も人事施策として点検する。"
      ],
      "uncertain": [
        "具体的な初回公表時期は各社の事業年度や法施行との関係で変わるため、自社の決算期に即して通達・Q&Aを確認する必要がある。",
        "公表数値からどこまで原因を説明するか、どの改善施策を優先するかは企業ごとの人員構成・職種・配置・制度によって異なる。"
      ]
    },
    "issues": [
      {
        "id": "wad-scope-deadline",
        "title": "誰に公表義務があり、いつまでに公表するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年4月1日以降、常時雇用する労働者101人以上の事業主は男女間賃金差異と女性管理職比率を必須項目として公表し、施行後に終了する事業年度について新年度開始後おおむね3か月以内を目安に対応する。",
        "exception": "301人以上と101～300人では、必須項目以外に公表すべき選択項目数が異なる。",
        "uncertain": "初回公表日については自社の事業年度の終了日と適用関係を個別に確認する。",
        "sourceIds": [
          "source-women-advancement-law-2026",
          "source-women-advancement-mhlw-2026"
        ]
      },
      {
        "id": "wad-calculation-publication",
        "title": "男女間賃金差異・女性管理職比率をどう算出・公表するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "省令・通達・Q&Aの定義に沿って対象者と管理職範囲、賃金データを確定し、公表日を明示して継続的に更新する。",
        "exception": "雇用区分や人員換算等では注記が必要となる場合があり、管理職の定義も社内呼称だけで判断しない。",
        "uncertain": "複雑な職位制度・出向・雇用区分がある場合は個別の算出整理が必要。",
        "sourceIds": [
          "source-women-advancement-mhlw-2026"
        ]
      },
      {
        "id": "wad-cause-analysis",
        "title": "公表した差異の原因をどう分析・説明するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "賃金・管理職比率の差を職種、雇用区分、勤続、配置、育成、昇進、働き方等に分解し、改善すべき要因を行動計画へ反映する。",
        "exception": "単年度の比率だけから原因を断定せず、母集団や人員構成の変化も確認する。",
        "uncertain": "説明欄にどの粒度の原因・施策を記載するかは各社の状況と開示方針による。",
        "sourceIds": [
          "source-women-advancement-mhlw-2026"
        ]
      },
      {
        "id": "wad-action-plan-health",
        "title": "行動計画・女性の健康支援へどうつなげるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "状況把握・課題分析を一般事業主行動計画の目標・取組へ接続し、女性の健康上の特性や働き方も考慮して就業継続・登用を支える。",
        "exception": "健康課題を女性だけの問題として固定化せず、全社員の働き方や職場環境と合わせて検討する。",
        "uncertain": "必要な施策は業種、年齢構成、職種、働き方によって異なる。",
        "sourceIds": [
          "source-women-advancement-law-2026",
          "source-women-advancement-mhlw-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-women-advancement-law-2026",
      "source-women-advancement-mhlw-2026"
    ],
    "practicalImpacts": [
      "女性活躍推進法の情報公表",
      "女性の活躍推進企業データベース・自社サイト",
      "一般事業主行動計画",
      "人事・給与・IRデータ管理",
      "男女間賃金差異の説明",
      "管理職登用・育成",
      "女性の健康支援・働き方"
    ]
  },
  {
    "slug": "trade-secret-management",
    "title": "営業秘密・秘密情報管理",
    "categories": [
      "知的財産",
      "危機管理・コンプライアンス"
    ],
    "summary": "不正競争防止法上の営業秘密として保護を受けるための管理と、法的保護の水準を超えた秘密情報の漏えい防止・生成AI／クラウド利用・インシデント対応を企業実務として追う。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "営業秘密は、不正競争防止法上、有用性・秘密管理性・非公知性の3要件を満たす情報として保護されます。",
      "経済産業省の営業秘密管理指針は法的保護を受けるための最低限の管理水準を示し、秘密情報の保護ハンドブックはそれより広く、情報の選定、漏えい防止、契約・誓約、漏えい時対応までを扱います。",
      "このテーマでは、法的保護の要件だけでなく、テレワーク、クラウド、生成AI、人材移動など現在の情報利用環境で秘密管理をどう維持するかを一次資料と実務解説から確認します。"
    ],
    "currentSummary": {
      "facts": [
        "不正競争防止法上の営業秘密は、有用性、秘密管理性、非公知性の3要件を満たす情報である。",
        "令和5年改正不正競争防止法の営業秘密関係の措置は2024年4月1日に施行され、営業秘密等の保護強化と、国外で日本企業の営業秘密侵害が生じた場合の国際裁判管轄・日本法適用の明確化が行われた。",
        "営業秘密管理指針は2025年3月31日に改訂され、不正競争防止法上の保護を受けるために必要となる最低限の水準の対策を示している。",
        "秘密情報の保護ハンドブックは2024年2月に改訂され、秘密情報の決定、漏えい防止策、漏えい時対応などを企業の管理実務として扱っている。"
      ],
      "interpretations": [
        "営業秘密保護の実務では、情報を厳重に囲い込むこと自体より、どの情報を秘密とし、誰が秘密であると認識でき、実際の業務で守れる管理になっているかを確認することが重要になる。",
        "営業秘密管理指針と秘密情報の保護ハンドブックは役割が異なり、前者で法的保護の最低水準を確認し、後者で漏えい予防・人・契約・システム・初動対応を補う読み方が有用である。",
        "生成AIや外部クラウドへ営業秘密を入力する場面では、サービス提供者との秘密保持、セキュリティ措置、入力データの学習・二次利用、社内ルールとの整合をまとめて確認する必要がある。"
      ],
      "implications": [
        "自社の秘密情報を洗い出し、営業秘密として保護したい情報と、それ以外でも業務上秘密にすべき情報を区分する。",
        "秘密情報管理規程、アクセス権限、秘密表示、保管・持出し、退職時対応、取引先との秘密保持契約が実際の運用と一致しているか点検する。",
        "生成AI・クラウドサービスについて、利用可能サービス、入力可能な情報区分、学習利用、秘密保持、セキュリティ、例外承認の条件を明文化する。",
        "漏えい発生時の証拠保全、アクセス停止、関係者対応、法的措置、社内外報告の初動を事前に決めておく。"
      ],
      "uncertain": [
        "生成AIサービスへの営業秘密入力がどの条件で秘密管理性を失わせるかについて確立した判例・通説があるわけではなく、契約条件・技術仕様・社内運用を踏まえた判断が必要になる。",
        "必要な秘密管理措置の程度は企業規模、業態、職務、情報の性質、管理単位等によって異なるため、形式的な一律ルールだけでは判定できない。"
      ]
    },
    "issues": [
      {
        "id": "ts-legal-protection",
        "title": "どの情報が営業秘密として法的保護を受けるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "有用性・秘密管理性・非公知性の3要件を確認し、特に秘密管理意思が従業員等に認識可能な管理になっているかを営業秘密管理指針に沿って点検する。",
        "exception": "秘密情報として社内で重要でも、不正競争防止法上の3要件を満たさなければ営業秘密としての保護とは別に考える必要がある。",
        "uncertain": "秘密管理性に必要な具体的措置は情報・組織・利用状況によって異なる。",
        "sourceIds": [
          "source-ucpa-amendment-2023",
          "source-trade-secret-guideline-2025"
        ]
      },
      {
        "id": "ts-management-design",
        "title": "秘密情報の区分・アクセス・規程をどう設計するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "保有情報を洗い出して秘密とする情報を決め、情報の性質と利用実態に応じてアクセス、表示、保管、持出し、契約・誓約、教育等を組み合わせる。",
        "exception": "機密性を高めすぎて業務上守れない規程にすると、規程違反の常態化やシャドー利用を招く可能性がある。",
        "uncertain": "管理区分と具体的な統制の強さは各社のリスクと可用性を踏まえて設計する。",
        "sourceIds": [
          "source-trade-secret-guideline-2025",
          "source-secret-info-handbook-2024"
        ]
      },
      {
        "id": "ts-leak-response",
        "title": "秘密情報の漏えいをどう予防し、発生時にどう動くか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "従業員・退職者・委託先等の漏えい経路を踏まえて予防策を設け、漏えい時の証拠保全、アクセス制御、関係者対応、法的措置等の初動を準備する。",
        "exception": "すべての情報に同じ強度の対策を適用するのではなく、情報の重要度・漏えい可能性・業務影響に応じて選択する。",
        "uncertain": "個別インシデントの初動は侵害経路・契約関係・国外要素等で変わる。",
        "sourceIds": [
          "source-secret-info-handbook-2024",
          "source-ucpa-amendment-2023"
        ]
      },
      {
        "id": "ts-ai-cloud",
        "title": "生成AI・クラウドに営業秘密を入力してよいか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "一律禁止・一律許可ではなく、秘密保持条項、セキュリティ措置、学習・二次利用、サービス仕様、社内の情報区分と利用ルールを確認して利用条件を定める。",
        "exception": "入力データが学習や事業者独自目的に利用される場合、又は秘密保持・安全管理が不十分な場合は秘密管理性へのリスクが高まる。",
        "uncertain": "生成AIへの入力と秘密管理性の関係には確立した判例・通説がなく、企業が採用する法的見解と運用を整合させる必要がある。",
        "sourceIds": [
          "source-trade-secret-guideline-2025",
          "source-secret-info-handbook-2024"
        ]
      },
      {
        "id": "ts-limited-data",
        "title": "営業秘密と限定提供データをどう使い分けるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "秘密として管理する情報は営業秘密の要件を、複数者への提供・共有を前提とするデータは限定提供データの要件も確認し、保護の可能性を見据えて管理する。",
        "exception": "令和5年改正後、限定提供データの定義上は営業秘密が除外され、両制度の対象関係を確認する必要がある。",
        "uncertain": "個別データがどちらの要件を満たすかは提供形態・管理方法等に依存する。",
        "sourceIds": [
          "source-ucpa-amendment-2023",
          "source-trade-secret-guideline-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-ucpa-amendment-2023",
      "source-trade-secret-guideline-2025",
      "source-secret-info-handbook-2024"
    ],
    "practicalImpacts": [
      "秘密情報管理規程",
      "営業秘密管理",
      "秘密保持契約・誓約書",
      "アクセス権限・持出し管理",
      "退職・人材移動",
      "生成AI・クラウド利用ルール",
      "情報漏えい時の初動",
      "限定提供データ"
    ]
  },
  {
    "slug": "merger-control-antitrust",
    "title": "企業結合審査・M&A競争法",
    "categories": [
      "M&A",
      "独占禁止法・競争法",
      "契約"
    ],
    "summary": "M&A・経営統合における公取委の企業結合審査について、届出・相談、実体審査、届出不要案件、問題解消措置、2026年ガイドライン改定案を一次資料と実務解説から追う。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "企業結合審査は、届出基準を確認して終わる手続ではなく、案件初期のストラクチャー、DD、市場データ、SPA、クロージング条件、問題解消措置までM&A全体に影響します。",
      "このテーマでは、現在有効な企業結合ガイドラインと2026年2月改定の審査手続方針、主要審査事例を基礎に、実際の案件で何を準備するかを整理します。",
      "2026年7月17日に公表されたガイドライン改定案は、供給安定性、環境性能、投資・イノベーション、新商品創出などを競争促進効果として明記する方向を示しています。意見募集は8月31日に終了していますが、最終版が確認できるまでは現行ルールと分けて扱います。"
    ],
    "currentSummary": {
      "facts": [
        "現在の企業結合審査の実体判断は、2019年12月17日改定の企業結合ガイドラインを基礎に、市場画定、水平・垂直・混合型の競争影響、輸入・参入・効率性、問題解消措置等を検討する。",
        "企業結合審査の手続に関する対応方針は2026年2月2日に改定され、届出前相談、第1次・第2次審査、禁止期間、届出不要案件の取扱い等を示している。届出受理後は原則30日間の禁止期間があるが、公取委は必要があると認める場合に短縮できる。",
        "令和7年度は企業結合届出458件、届出不要案件の審査終了15件、当事会社の問題解消措置を前提に問題なしと判断した案件5件であった。主要11事例では内部文書、経済分析、海外当局との情報交換も用いられている。",
        "2026年7月17日のガイドライン改定案は、供給の安定性、環境性能、投資拡大・イノベーションによる新商品創出等を競争促進効果として明記し、輸入圧力や効率性等で長期間の市場状況を考慮する方向を示した。意見提出期限は2026年8月31日で終了したが、2026年9月3日時点で最終版は確認できない。"
      ],
      "interpretations": [
        "企業結合審査はクロージング直前の届出作業としてではなく、案件初期に競争上の重なり、必要資料、当局協議、問題解消措置の可能性を見立てて取引条件へ織り込む方が安全である。",
        "形式的に届出不要でも公取委が審査することがあり、特に高額買収や国内需要者への影響が想定される案件では国内との結び付きと競争影響を別途確認する必要がある。",
        "改定案が最終化された場合、シナジーの説明も単なるコスト削減にとどまらず、供給安定、環境性能、投資、研究開発、新商品、海外競争圧力などを検証可能な事業計画と証拠に結び付ける重要性が高まる。"
      ],
      "implications": [
        "案件初期に当事会社の事業重複、主要商品・顧客・競争者、市場シェア、代替性、輸入・参入状況を整理し、企業結合審査の難度を見立てる。",
        "SPAでは競争当局の承認を前提条件とするか、協力義務、問題解消措置の受入範囲、ロングストップ日、解除・費用負担をどう定めるか検討する。",
        "届出前相談や審査に備え、事業計画、取締役会資料、競争分析、顧客データ等が当局説明と矛盾しないかを早期に確認する。",
        "2026年改定案については、最終版・パブリックコメント結果が公表された時点で現行ルールとの差分を再確認する。"
      ],
      "uncertain": [
        "2026年7月の企業結合ガイドライン改定案は最終化前であり、競争促進効果や長期的市場状況に関する文言・運用が最終版で変更される可能性がある。",
        "個別案件で市場をどう画定し、どの競争懸念・効率性・問題解消措置が重視されるかは、業界構造、当事会社の内部資料、需要者の認識等により変わる。"
      ]
    },
    "issues": [
      {
        "id": "mc-filing-procedure",
        "title": "届出・届出前相談とクロージング日程をどう組むか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "届出要件を確認した上で、必要に応じ届出前相談を行い、届出受理後の原則30日の禁止期間と第2次審査の可能性を案件日程へ織り込む。",
        "exception": "公取委が必要と認める場合は禁止期間を短縮できるが、短縮を前提に日程を固定しない。",
        "uncertain": "審査に要する実期間は案件の競争上の複雑性、資料提出、問題解消措置の協議等に左右される。",
        "sourceIds": [
          "source-merger-procedure-2026"
        ]
      },
      {
        "id": "mc-non-notifiable",
        "title": "届出不要のM&Aでも公取委対応が必要か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "届出基準を下回っても企業結合審査の対象になり得るため、取引価額、国内売上・顧客・拠点等の国内関連性と競争影響を確認する。対応方針が相談を望ましいとする高額案件では早期相談を検討する。",
        "exception": "届出不要という事実だけで事前相談が常に必要になるわけではない。",
        "uncertain": "個別案件で公取委が職権審査を開始する可能性は、市場への影響や国内との結び付き等に依存する。",
        "sourceIds": [
          "source-merger-procedure-2026",
          "source-merger-cases-fy2025"
        ]
      },
      {
        "id": "mc-substantive-review",
        "title": "企業結合が競争を実質的に制限するかを何で判断するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "一定の取引分野を画定し、水平・垂直・混合型の類型に応じて当事会社・競争者の地位、輸入、参入、隣接市場、需要者圧力、効率性等を総合評価する。",
        "exception": "市場シェア等の数値だけで結論を出さず、競争の実態と将来変化を含めて個別に評価する。",
        "uncertain": "2026年改定案が最終化された場合、動的な競争促進効果や長期的市場状況の評価が現行記載から具体化される。",
        "sourceIds": [
          "source-merger-guideline-current",
          "source-merger-cases-fy2025",
          "source-merger-guideline-draft-2026"
        ]
      },
      {
        "id": "mc-dynamic-benefits",
        "title": "供給安定・環境・投資・イノベーションを競争促進効果として説明できるか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "2026年改定案は、供給安定性、環境性能、投資拡大・イノベーション、新商品創出等を競争促進効果として考慮し、輸入圧力・効率性等で長期の市場状況を考慮する方向を明記している。",
        "exception": "改定案の段階であり、現時点の審査をこの方向だけで先取りしない。",
        "uncertain": "最終文言、必要な立証の程度、実際の審査でどの程度重視されるかは今後の最終版・事例で確認する。",
        "sourceIds": [
          "source-merger-guideline-draft-2026",
          "source-merger-guideline-current"
        ]
      },
      {
        "id": "mc-remedies",
        "title": "競争懸念がある場合に問題解消措置をどう設計するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "競争上の問題に対応する事業譲渡その他の問題解消措置を検討し、履行可能性、継続コスト、モニタリング、案件価値への影響をM&A条件と合わせて評価する。",
        "exception": "問題解消措置を申し出れば必ず承認されるわけではなく、競争懸念を実効的に解消する内容である必要がある。",
        "uncertain": "必要な措置の範囲や監視方法は個別案件の市場・競争懸念により変わる。",
        "sourceIds": [
          "source-merger-guideline-current",
          "source-hino-fuso-merger-2026",
          "source-merger-cases-fy2025"
        ]
      },
      {
        "id": "mc-predeal-planning",
        "title": "競争法リスクをDD・SPA・投資判断へどう織り込むか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "競争法審査の難度、協議期間、問題解消措置の可能性と継続コストを案件初期に評価し、前提条件、協力義務、リスク分担、解除条件等へ反映する。",
        "exception": "規制承認リスクの配分は案件の交渉力、法域、戦略的重要性等で異なり、定型条項だけでは決められない。",
        "uncertain": "将来の当局判断を完全に予測することはできないため、シナリオ別に案件価値・日程を検討する。",
        "sourceIds": [
          "source-merger-procedure-2026",
          "source-merger-guideline-current"
        ]
      }
    ],
    "sourceIds": [
      "source-merger-guideline-current",
      "source-merger-procedure-2026",
      "source-merger-cases-fy2025",
      "source-hino-fuso-merger-2026",
      "source-merger-guideline-draft-2026"
    ],
    "practicalImpacts": [
      "M&A初期リスク評価",
      "競争法DD",
      "届出・届出前相談",
      "SPAの前提条件・協力義務",
      "ロングストップ日・解除条件",
      "問題解消措置",
      "当局提出資料・内部文書",
      "投資・イノベーション等の効果説明"
    ]
  },
  {
    "slug": "digital-commerce-tokusho-review",
    "title": "デジタル取引・特定商取引法見直し",
    "categories": [
      "消費者法・表示",
      "契約",
      "AI・デジタル"
    ],
    "summary": "SNS・チャット勧誘、UIによる意思決定への働きかけ、契約内容の確認・保存、プラットフォームの役割など、デジタル取引に合わせた特定商取引法等の見直しを、法制化前の検討段階から追う。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "消費者取引がウェブサイトだけでなくSNS、チャット、アプリへ広がる中、従来の訪問販売・電話勧誘販売・通信販売という類型だけでは捉えにくい勧誘やUI設計が問題になっています。",
      "消費者庁は2026年9月2日の検討会で中間とりまとめ案を公表し、SNS・チャット型勧誘、最終確認画面、契約内容の電子的提供、プラットフォームの関与などについて制度見直しの方向を整理しました。",
      "このテーマでは、2025年の基礎研究報告書と2026年の具体的な制度検討をつなぎ、現在の法令と将来の規制案を混同しない形で追います。"
    ],
    "currentSummary": {
      "facts": [
        "2026年9月2日の第9回デジタル取引・特定商取引法等検討会で、中間とりまとめ（案）が公表された。",
        "中間とりまとめ案では、事業者側から接触する、又は目的を明らかにしない誘引等によって消費者をSNS・チャットへ誘導する勧誘について、電話勧誘販売に類する規律を検討する方向が示されている。",
        "通信販売の最終確認画面について、支払総額等を消費者が明確に確認できる表示、情報を分散させて判断を妨げる表示への対応、契約内容を電子的に確認・保存できる仕組みなどが検討対象になっている。",
        "2025年6月のデジタル社会における消費取引研究会報告書は、AIを含む技術変化、消費者の意思決定環境、トラスト基盤、プラットフォーム等の役割を横断的に整理し、その後の法制度検討の基礎となった。"
      ],
      "interpretations": [
        "EC・SNSマーケティングでは、広告表示だけでなく、接触開始からチャット移行、申込み画面、契約確認、解約まで一連の導線を法務レビューの対象として見る必要性が高まっている。",
        "ダークパターンの問題は特定のデザイン名称を禁止するだけではなく、情報の出し方や選択肢の配置によって消費者の合理的な判断が妨げられていないかという設計問題として扱われる方向にある。",
        "制度見直しが具体化すれば、法務部門だけでなくマーケティング、プロダクト、CS、EC運用部門との共同レビューが必要になる。"
      ],
      "implications": [
        "SNS・チャット経由の販売フローについて、誰が接触を開始するか、広告・誘引時に販売目的が明示されているか、勧誘を拒絶した消費者への再接触がどう管理されているかを棚卸しする。",
        "申込み直前画面で価格、契約期間、解約条件、追加費用などが分散・埋没していないかを、画面単位ではなく導線全体で確認する。",
        "契約成立後に、消費者が契約条件を電子的に保存・再確認できる仕組みや、解約までの導線を確認する。",
        "今後の最終とりまとめ、法案、成立法、政省令・ガイドラインを確認し、施行内容が確定した段階で現行運用との差分を再評価する。"
      ],
      "uncertain": [
        "2026年9月2日時点の中間とりまとめは案であり、法案・成立法・施行内容ではない。最終とりまとめや法制化の過程で対象範囲、要件、効果が変更される可能性がある。",
        "SNS・チャット型勧誘の対象範囲、UI表示に求められる具体的水準、プラットフォームの義務・責任の範囲は今後の制度設計を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "dt-chat-solicitation",
        "title": "SNS・チャットによる勧誘をどこまで規制対象とするか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "事業者が販売目的を明示せず接触・誘引して消費者をSNSやチャットへ移行させるなど、消費者が不意打ち的な勧誘を受ける類型について、電話勧誘販売に類する規律を設ける方向が検討されている。",
        "exception": "消費者が自ら通常の通信販売サイトを訪れて購入する場合まで一律に同じ規律へ取り込むものとは整理されていない。",
        "uncertain": "対象となる誘引・接触の要件、表示義務、再勧誘禁止、クーリング・オフ等の最終的な制度内容は未確定。",
        "sourceIds": [
          "source-caa-digital-tokusho-interim-2026"
        ]
      },
      {
        "id": "dt-ui-steering",
        "title": "申込み画面・UIによる意思決定への働きかけをどう扱うか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "最終確認画面で支払総額等の重要事項を明瞭に示し、情報を分散させるなど消費者の確認を妨げる設計への対応を強化する方向が検討されている。",
        "exception": "UI上の工夫が直ちに違法となるわけではなく、現行法上の表示義務・誤認防止と将来の追加規律を区別して確認する。",
        "uncertain": "禁止・義務化される具体的な表示方法や判断基準は今後の法制化・ガイドラインを確認する必要がある。",
        "sourceIds": [
          "source-caa-digital-tokusho-interim-2026",
          "source-caa-digital-consumer-study-2025"
        ]
      },
      {
        "id": "dt-cancellation-contract",
        "title": "契約内容の確認・保存と解約導線をどう設計するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "オンライン契約でも消費者が契約条件を事後に確認できるよう、契約内容の電子的な提供・保存を含む仕組みを整える方向が検討されている。",
        "exception": "現行の通信販売規制、電子契約の証拠・保存実務など既存ルールは引き続き別途確認する必要がある。",
        "uncertain": "提供方法、保存期間、解約手続との関係など具体的義務は未確定。",
        "sourceIds": [
          "source-caa-digital-tokusho-interim-2026"
        ]
      },
      {
        "id": "dt-platform",
        "title": "デジタルプラットフォームは消費者保護にどこまで関与するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "デジタル取引では販売事業者だけでなく、取引の場・情報・導線を提供するプラットフォームを含めたトラスト基盤と役割分担が政策課題として整理されている。",
        "exception": "既存の取引デジタルプラットフォーム消費者保護法上の義務と、今後検討される追加的な役割を混同しない。",
        "uncertain": "新たな義務を課すか、対象事業者・取引をどう区切るかは今後の制度検討に依存する。",
        "sourceIds": [
          "source-caa-digital-consumer-study-2025",
          "source-caa-digital-tokusho-interim-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-caa-digital-tokusho-interim-2026",
      "source-caa-digital-consumer-study-2025"
    ],
    "practicalImpacts": [
      "EC・アプリの申込み導線",
      "SNS・チャット販売",
      "広告・マーケティング審査",
      "価格・契約期間・解約条件の表示",
      "電子的な契約内容の提供・保存",
      "カスタマーサポート・解約フロー",
      "プラットフォーム利用規約・出店管理"
    ]
  },
  {
    "slug": "childcare-caregiver-leave",
    "title": "育児・介護休業と両立支援",
    "categories": [
      "労務",
      "危機管理・コンプライアンス"
    ],
    "summary": "2025年4月・10月に施行された改正育児・介護休業法について、柔軟な働き方、個別周知・意向確認、男性育休取得状況の公表、介護離職防止を、法令と実務ツールから整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "令和6年改正育児・介護休業法は、2025年4月と10月に段階施行され、育児期の柔軟な働き方と介護離職防止について事業主の対応範囲を広げました。",
      "育児側では、子の看護等休暇、残業免除、テレワーク、3歳から小学校就学前までの柔軟な働き方、個別の意向聴取・配慮、男性育休取得状況の公表などを確認します。",
      "介護側では、制度を用意するだけでなく、雇用環境整備、介護に直面した労働者への個別周知・意向確認、40歳等での早期情報提供を実際の社内運用へ落とし込む必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "令和6年5月の改正育児・介護休業法は、2025年4月1日と10月1日を中心に段階的に施行され、現在は主要部分が施行済みである。",
        "2025年10月1日から、3歳から小学校就学前の子を養育する労働者について、事業主は法定の5類型から2つ以上の柔軟な働き方の措置を選択して講じ、対象労働者はその中から1つを選べる。",
        "仕事と育児の両立について、個別の意向聴取とその意向への配慮が義務化され、男性の育児休業等取得状況の公表義務は常時雇用する労働者300人超の事業主へ拡大された。",
        "介護離職防止について、雇用環境整備、介護に直面した労働者への個別周知・意向確認、40歳等の早期段階での情報提供が事業主義務となっている。",
        "厚生労働省は2025年8月、面談シート、個別周知・意向確認書、40歳情報提供、相談時の対話例などを含む実務支援ツールを公表した。"
      ],
      "interpretations": [
        "改正対応は就業規則の条文変更だけでは足りず、対象者を検知する人事データ、個別周知、意向聴取、管理職・相談窓口への連携、記録まで一つの業務フローとして設計する必要がある。",
        "意向への配慮は労働者の希望どおりの措置を常に実現する義務ではないが、聴取した内容を踏まえて検討し、対応困難な場合には理由説明を含む丁寧な対応が求められる。",
        "介護は申出が遅れやすいため、介護発生後の休業申請だけでなく、40歳等での早期情報提供と相談しやすい環境整備を前倒しして行うことが制度のポイントになる。"
      ],
      "implications": [
        "育児・介護休業規程、労使協定、申請書式、社内ポータルの説明を現在の施行内容と一致させる。",
        "3歳から就学前の子を持つ労働者への柔軟な働き方について、自社が採用する2つ以上の措置、利用条件、個別周知・意向確認の実施時期を明確にする。",
        "妊娠・出産、子が一定年齢に達する時期、介護申出、40歳到達など、個別対応のトリガーを人事システム・担当業務へ落とし込む。",
        "介護相談では休業制度の説明だけで終わらせず、面談、支援体制計画、ケアマネジャーとの連携準備など継続就業を前提とした支援を行う。"
      ],
      "uncertain": [
        "個々の労働者の意向へどこまで配慮すべきか、業務上困難な場合にどの代替措置を提示するかは、職務内容や会社の制度・体制によって個別検討が必要。",
        "法令・指針・Q&Aや行政の支援ツールは今後も更新され得るため、運用様式と社内説明を定期的に確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "cc-flexible-work",
        "title": "3歳から就学前の柔軟な働き方をどう整備するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "事業主は法定の5類型から2つ以上の措置を選択して用意し、対象労働者がその中から1つを選択できるようにする。措置選択前には過半数組合等への意見聴取の機会も設ける。",
        "exception": "職種や事業所の実情により選択する措置は異なり得るため、単一制度を全職種へ機械的に当てはめる必要はない。",
        "uncertain": "制度利用の具体的運用や個別事情への対応は就業実態に応じて継続的な見直しが必要。",
        "sourceIds": [
          "source-mhlw-childcare-caregiver-amendment-2024"
        ]
      },
      {
        "id": "cc-intention-accommodation",
        "title": "個別周知・意向確認、意向聴取・配慮をどう運用するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "対象時期に制度を個別周知し利用意向を確認するとともに、仕事と育児の両立に関する勤務条件等の意向を個別に聴取し、その内容へ配慮する運用を整える。",
        "exception": "聴取した希望どおりの措置を必ず実施する義務ではないが、意向を踏まえた検討を行い、対応困難な場合も丁寧に説明することが重要。",
        "uncertain": "職務変更、勤務場所、就業時間など個別事情への具体的配慮水準は事案ごとの検討が必要。",
        "sourceIds": [
          "source-mhlw-childcare-caregiver-amendment-2024"
        ]
      },
      {
        "id": "cc-child-nursing-overtime",
        "title": "子の看護等休暇・残業免除・テレワークの対象をどう更新するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "子の看護等休暇の対象・取得事由、所定外労働制限の対象、テレワークに関する努力義務・代替措置を2025年4月施行後の内容へ更新する。",
        "exception": "法定制度ごとに対象となる子の年齢、除外可能な労働者、義務か努力義務かが異なる。",
        "uncertain": "自社独自の上乗せ制度との関係やシステム上の対象者判定は個別設計が必要。",
        "sourceIds": [
          "source-mhlw-childcare-caregiver-amendment-2024"
        ]
      },
      {
        "id": "cc-leave-disclosure",
        "title": "男性育休取得状況の公表義務の対象か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "常時雇用する労働者が300人を超える事業主は、男性の育児休業等取得状況について法令に沿った公表を行う。",
        "exception": "公表する割合の選択肢や算定方法、事業年度との関係を厚労省資料で確認する。",
        "uncertain": "組織再編や雇用人数の変動がある場合の対象判定は事実関係に応じて確認する。",
        "sourceIds": [
          "source-mhlw-childcare-caregiver-amendment-2024"
        ]
      },
      {
        "id": "cc-caregiving-support",
        "title": "介護離職防止を制度説明から実際の支援へどう落とすか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "雇用環境整備、介護申出時の個別周知・意向確認、40歳等での早期情報提供を実施し、面談・相談・支援計画まで継続就業を支える運用へ接続する。",
        "exception": "介護休業は介護そのものを長期間担うためだけでなく、仕事と介護を両立する体制を整える期間という制度趣旨も踏まえて案内する。",
        "uncertain": "本人・家族の状況や利用可能な介護サービスに応じた支援内容は個別に異なる。",
        "sourceIds": [
          "source-mhlw-childcare-caregiver-amendment-2024",
          "source-mhlw-caregiver-support-tool-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-mhlw-childcare-caregiver-amendment-2024",
      "source-mhlw-caregiver-support-tool-2025"
    ],
    "practicalImpacts": [
      "育児・介護休業規程",
      "労使協定",
      "柔軟な勤務制度",
      "個別周知・意向確認",
      "意向聴取・配慮の記録",
      "男性育休取得状況の公表",
      "介護相談窓口",
      "40歳等への情報提供",
      "人事システムの対象者管理"
    ]
  },
  {
    "slug": "business-human-rights-dd",
    "title": "ビジネスと人権・人権デュー・ディリジェンス",
    "categories": [
      "危機管理・コンプライアンス",
      "国際取引",
      "M&A",
      "契約"
    ],
    "summary": "日本政府の人権尊重ガイドラインと改定行動計画を基礎に、人権方針、リスク特定、人権DD、救済、サプライチェーン・M&Aへの実装を企業法務向けに追う。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "日本政府は2022年に企業の人権尊重に関する業種横断のガイドラインを策定し、2023年には人権方針とリスク特定を具体化する実務参照資料を公表しました。",
      "2025年12月の改定『ビジネスと人権』行動計画は、企業に対し、負の人権影響の特定・評価・予防・軽減・対処等から成る人権デュー・ディリジェンスの導入を促進することへの期待を改めて示しています。",
      "実務では、法令違反の有無だけを調べるのではなく、どの人権に誰がどの程度の負の影響を受け得るかを起点に、リスクの高い領域を絞って調査し、取引先への働き掛け、契約、救済、M&A・PMIへつなぐ必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "日本政府は2022年9月13日、国連指導原則等の国際スタンダードを踏まえた『責任あるサプライチェーン等における人権尊重のためのガイドライン』を決定した。",
        "経済産業省は2023年4月、人権方針の記載項目例と、セクター・製品・地域等から人権リスクが重大な事業領域を特定・評価する手順を示す実務参照資料を公表した。",
        "政府は2025年12月24日に『ビジネスと人権』行動計画を改定し、8つの優先分野を示すとともに、企業による人権DD導入への期待を表明した。",
        "政府ガイドラインや行動計画は、それ自体を一般的な民間企業向けの法定義務として定めるものではなく、個別の法令・契約・海外規制等は別途確認する必要がある。"
      ],
      "interpretations": [
        "人権DDは取引先に質問票を一度配る作業ではなく、リスク特定、調査、予防・軽減、効果検証、説明・救済を継続する管理プロセスとして設計する方が政府資料の考え方に合う。",
        "全サプライヤーを同じ深さで調査するより、セクター、製品・サービス、地域、企業固有の事情から重大リスクを絞り、深刻度や発生可能性に応じて調査手段を変える方が実務的である。",
        "M&Aでは平時の人権DDと目的・時間制約が異なるため、買収前は重大リスクへ調査を絞り、契約条件とPMIで未解決事項を引き継ぐ設計が重要になる。"
      ],
      "implications": [
        "人権方針の承認主体、適用範囲、グループ会社・取引先への期待、重点課題を明確にする。",
        "セクター・製品・地域・企業固有のリスクを使ってリスクマッピングを行い、質問票、ヒアリング、現地調査、ステークホルダー対話等の深度を決める。",
        "取引先行動規範、契約条項、是正計画、エスカレーション、苦情処理・救済を、調達・法務・サステナビリティ部門で分断せず運用する。",
        "M&Aでは対象会社とバリューチェーンの重大な人権課題をDDへ組み込み、必要に応じてコベナンツ、前提条件、表明保証、案件中止、買収後の是正・人権DD統合を検討する。"
      ],
      "uncertain": [
        "企業ごとに優先すべき人権リスクは業種、地域、製品、取引構造によって大きく異なり、共通チェックリストだけで十分性を判断できない。",
        "海外の人権・環境DD法制や強制労働産品規制は変化が速く、日本企業への域外適用・取引先からの要求も含めて個別に追う必要がある。"
      ]
    },
    "issues": [
      {
        "id": "bhr-policy-scope",
        "title": "人権方針の適用範囲と社内外への期待をどう定めるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "経営陣の承認を前提に、自社・グループ会社・従業員・取引先等への適用・期待を明示し、事業方針と手続へ反映する。",
        "exception": "企業規模、事業、バリューチェーンにより具体的な適用範囲と記載内容は異なる。",
        "uncertain": "既存の企業理念・調達方針等との統合方法は各社で設計が必要。",
        "sourceIds": [
          "source-meti-bhr-guideline-2022",
          "source-meti-bhr-practical-reference-2023"
        ]
      },
      {
        "id": "bhr-risk-identification",
        "title": "どの人権リスクから調査を始めるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "セクター、製品・サービス、地域、企業固有のリスクから重大な事業領域を絞り、社内資料、質問票、ヒアリング、現地調査、ステークホルダー対話等を組み合わせて負の影響を特定・評価する。",
        "exception": "全取引先を同じ深さで調べることを前提とせず、重大性と発生可能性等に応じて優先順位を付ける。",
        "uncertain": "公開情報が乏しい地域・二次以降サプライヤー等では情報取得方法を個別に検討する必要がある。",
        "sourceIds": [
          "source-meti-bhr-guideline-2022",
          "source-meti-bhr-practical-reference-2023"
        ]
      },
      {
        "id": "bhr-dd-cycle",
        "title": "人権DDを継続的な管理プロセスへどう組み込むか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "負の影響の特定・評価だけで終わらせず、予防・軽減・対処、効果の確認、説明・情報開示を継続し、事業・取引条件の変更に応じて見直す。",
        "exception": "具体的な頻度・調査手段はリスクの性質と事業規模に応じて設計する。",
        "uncertain": "政府の今後の支援策や個別分野の制度化は継続確認が必要。",
        "sourceIds": [
          "source-meti-bhr-guideline-2022",
          "source-mofa-bhr-nap-2025"
        ]
      },
      {
        "id": "bhr-remedy-grievance",
        "title": "苦情処理・救済をどう実効化するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "人権への負の影響を引き起こした又は助長した場合の救済を念頭に、通報・苦情受付、調査、是正、再発防止、ステークホルダーとの対話を運用へ組み込む。",
        "exception": "適切な救済方法は影響の内容、関係性、ライツホルダーの状況で異なる。",
        "uncertain": "外部グリーバンス機構との連携や案件ごとの適切な救済水準は個別検討が必要。",
        "sourceIds": [
          "source-meti-bhr-guideline-2022",
          "source-mofa-bhr-nap-2025"
        ]
      },
      {
        "id": "bhr-ma-dd",
        "title": "M&Aで人権・サステナビリティDDをどう行うか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "買収対象の業種・地域・製品・バリューチェーンから重大リスクを絞り、M&A固有の時間・守秘制約を踏まえて調査し、発見事項を契約条件とPMI・買収後の人権DDへ引き継ぐ。",
        "exception": "平時の人権DDと同じ範囲・手法を短期間のM&A DDで完全に再現できるとは限らない。",
        "uncertain": "対象会社の情報開示範囲や競争関係によって、買収前に確認できる深度は案件ごとに変わる。",
        "sourceIds": [
          "source-meti-bhr-guideline-2022",
          "source-meti-bhr-practical-reference-2023"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-bhr-guideline-2022",
      "source-meti-bhr-practical-reference-2023",
      "source-mofa-bhr-nap-2025"
    ],
    "practicalImpacts": [
      "人権方針・取引先行動規範",
      "サプライチェーンのリスクマッピング",
      "質問票・ヒアリング・現地調査",
      "調達契約・是正計画",
      "苦情処理・救済",
      "M&A DD・契約条件",
      "PMI・買収後ガバナンス"
    ]
  },
  {
    "slug": "generative-ai-competition",
    "title": "生成AI・競争法／デジタル市場",
    "categories": [
      "独占禁止法・競争法",
      "AI・デジタル",
      "契約"
    ],
    "summary": "生成AIのインフラ・モデル・アプリ層における市場構造と、OS・APIアクセス制限、既存サービスへの統合・抱き合わせ、自社優遇や提携等を国内の競争政策資料から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "公正取引委員会は、生成AIをGPU・AIクラウド等のインフラ、基盤モデル、アプリケーションという複数の層が相互依存する市場として継続調査しています。",
      "2026年4月の実態調査報告書ver.2.0では、モバイルOSの専用機能へのアクセス制限、既存デジタルサービスへの生成AI統合や抱き合わせ、APIアクセス制限など、競争上の問題が生じ得る具体的な場面が再整理されました。",
      "このテーマでは、AIサービスの統合やアクセス制限それ自体を直ちに違法とみなすのではなく、市場での地位、競争者の排除・取引機会への影響、技術的必要性、代替手段等を製品・提携・契約設計と結び付けて読みます。"
    ],
    "currentSummary": {
      "facts": [
        "公正取引委員会は2026年4月16日、2025年のver.1.0後に国内外の事業者・有識者等約30者へ追加ヒアリングを行い、生成AI関連市場の概要更新、自動運転市場の追加、独占禁止法上の論点再整理を行ったver.2.0を公表した。",
        "ver.2.0は、GPU・AIクラウド・データ等のインフラ、基盤モデル、アプリケーションの各層と、AIエージェント等の市場動向を踏まえて競争上の論点を整理している。",
        "モバイルOSの専用機能へのアクセス制限や、既存デジタルサービスへの生成AIの統合・抱き合わせ、APIアクセス制限は、市場での地位や競争への影響等によって私的独占・不公正な取引方法等の問題となり得る。",
        "公取委は2021年からアルゴリズム・AIと競争政策を研究しており、価格設定、ランキング、パーソナライゼーション等を含むデジタル市場の競争問題を継続的に検討している。"
      ],
      "interpretations": [
        "生成AI機能の統合、専用機能へのアクセス条件、APIの提供条件は、それだけで違法になるのではなく、他社の取引機会をどの程度狭めるか、代替手段があるか、合理的な技術・セキュリティ上の理由があるかを具体的に見る必要がある。",
        "AIサービスの法務レビューでは、自社がOS、クラウド、既存デジタルサービスなど別の層で持つ優位性を、新しい生成AIサービスへ利用する設計になっていないかを確認すると論点を発見しやすい。",
        "クラウド、モデル、API等への依存が高いほど、切替コストやデータ移行・相互運用性が競争上の重要な条件になり得るため、アーキテクチャと契約条件を分けずに確認する必要がある。"
      ],
      "implications": [
        "OS・クラウド・大規模なデジタルサービスで強い地位を持つ事業者は、生成AI機能の統合、API変更、専用機能へのアクセス条件を変更する前に競争への影響を確認する。",
        "AIモデル・クラウド・アプリの提携契約では、独占・優先条件、APIアクセス、ライセンス、データ利用、移行・エクスポート、相互運用性を競争法の観点でも確認する。",
        "アクセス制限や差別的な取扱いに技術・品質・セキュリティ上の理由がある場合は、その必要性と範囲を説明できるよう意思決定記録を残す。"
      ],
      "uncertain": [
        "実態調査報告書は具体的な取引を一律に禁止するルールではなく、市場構造も急速に変化しているため、今後の個別執行、追加調査、スマホソフトウェア競争促進法の運用等を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ai-competition-market-structure",
        "title": "生成AIのどの層で市場力・依存関係が生じるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "インフラ、基盤モデル、アプリケーションの各層と、その間のアクセス・取引関係を分けて把握する。",
        "exception": "市場の境界や有力事業者は技術進展・新規参入で変化し得る。",
        "uncertain": "AIエージェント等の普及で市場構造が再編される可能性がある。",
        "sourceIds": [
          "source-jftc-generative-ai-market-v2-2026",
          "source-jftc-algorithm-ai-competition-2021"
        ]
      },
      {
        "id": "ai-competition-platform-access",
        "title": "OS・API・専用機能へのアクセス制限は問題になるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "有力なOS・プラットフォーム等が競争するAI事業者のアクセスを制限する場合、市場での地位、排除効果、合理的理由を確認する。",
        "exception": "安全性・品質・セキュリティ等の正当な目的に必要かつ相当な制限まで直ちに問題となるわけではない。",
        "uncertain": "具体的な違法性は市場画定、競争への影響、代替手段等に依存する。",
        "sourceIds": [
          "source-jftc-generative-ai-market-v2-2026"
        ]
      },
      {
        "id": "ai-competition-integration",
        "title": "既存デジタルサービスへのAI統合・抱き合わせをどう見るか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "既存サービスでの強い地位を利用した生成AIの統合・抱き合わせが、競争するAIサービスの取引機会を狭めるかを確認する。",
        "exception": "機能統合による利便性・品質向上など競争促進効果も考慮する。",
        "uncertain": "統合の態様と市場への実際の影響に応じて評価が変わる。",
        "sourceIds": [
          "source-jftc-generative-ai-market-v2-2026"
        ]
      },
      {
        "id": "ai-competition-partnership",
        "title": "提携・人材・自社優遇等をどうモニターするか",
        "status": "pending",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "AI事業者間・クラウド等との提携、人材獲得、自社優遇等について、競争者のアクセスや市場の集中への影響を継続確認する。",
        "exception": "提携や垂直統合には投資促進・効率化等の競争促進効果もある。",
        "uncertain": "急速な市場変化のため、公取委も追加情報を募りながら継続調査している。",
        "sourceIds": [
          "source-jftc-generative-ai-market-v2-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jftc-generative-ai-market-v2-2026",
      "source-jftc-algorithm-ai-competition-2021"
    ],
    "practicalImpacts": [
      "AI製品・機能レビュー",
      "OS・APIアクセス方針",
      "クラウド・モデル調達",
      "提携・独占条件",
      "相互運用・移行条件",
      "競争法レビュー記録"
    ]
  },
  {
    "slug": "ip-knowhow-data-transactions",
    "title": "知財・ノウハウ・データ取引の適正化",
    "categories": [
      "知的財産",
      "契約",
      "独占禁止法・競争法"
    ],
    "summary": "知的財産権・ノウハウ・データの開示、帰属、対価、共同研究開発、保証・責任分担を、2026年の知財取引指針と契約実務から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2026年6月、公正取引委員会・中小企業庁・特許庁は、全業種を対象に、知的財産権だけでなく権利化されていないノウハウやデータを含む取引について、優越的地位の濫用等の考え方と契約書ひな形を公表しました。",
      "実務では、NDAを結ぶかだけでなく、どこまで情報を開示するか、成果・既存知財を誰に帰属させるか、知財部分の価値をどう評価するか、保証・紛争リスクを誰が負担するかが一連の交渉問題になります。",
      "このテーマでは、指針をひな形の機械的な適用として使わず、取引上の力関係、貢献、対価、必要性を個別に説明できる契約交渉プロセスとして読みます。"
    ],
    "currentSummary": {
      "facts": [
        "2026年6月24日、公正取引委員会・中小企業庁・特許庁は『知的財産権・ノウハウ・データの適切な取引のための優越的地位の濫用等に関する指針』と附属の契約書ひな形を公表した。",
        "指針は特定業種に限定せず、知的財産権に加えて権利化されていないノウハウやデータの取引も対象とし、情報の管理、知的財産権等の価値の適切な評価等について独占禁止法上の考え方と実践例を示している。",
        "策定の背景には、公取委の実態調査で幅広い業種の問題事例が把握されたことと、知財取引適正化ワーキンググループでの検討がある。"
      ],
      "interpretations": [
        "契約書に知財帰属や情報開示条項が存在するだけで適否が決まるのではなく、相手方との取引上の地位、提供を求める必要性、成果への貢献、対価、交渉過程を合わせて見る必要がある。",
        "発注者の標準ひな形を変更不可として運用すると、個別案件の貢献度や既存技術、利用範囲を検討しないまま不合理な条件を押し付けるリスクがあるため、例外承認と交渉記録を残せる運用が重要になる。",
        "受注者側でも、開示情報を段階化し、既存知財・ノウハウを事前に特定しておくことが、成果物との混同や意図しない権利移転を防ぐために有効である。"
      ],
      "implications": [
        "NDA、共同研究開発、開発委託、業務委託、ライセンス等の標準条項について、情報開示、既存知財、成果帰属、利用範囲、対価、保証・責任分担を再点検する。",
        "知財・ノウハウ・データの提供を求める場合、取引目的との関係、必要範囲、対価や相手の負担を交渉時に説明・記録する。",
        "事業部だけで標準ひな形を押し切らないよう、知財条件の変更・例外・対価交渉を法務・知財部門へエスカレーションする基準を設ける。"
      ],
      "uncertain": [
        "指針は個別取引での優越的地位や不利益の評価を不要にするものではなく、今後の相談・調査・執行事例によって具体的な境界が蓄積すると考えられる。"
      ]
    },
    "issues": [
      {
        "id": "iptx-information-disclosure",
        "title": "ノウハウ・データをどこまで開示させてよいか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "取引目的との関係で必要な範囲を特定し、秘密保持、利用目的、管理方法を含めて合理的に設計する。",
        "exception": "品質確認・監査等の正当な目的があっても、必要範囲を超える情報取得は別途評価が必要。",
        "uncertain": "情報の必要性と相手方の不利益は個別の取引・技術内容に依存する。",
        "sourceIds": [
          "source-ip-knowhow-data-guideline-2026"
        ]
      },
      {
        "id": "iptx-value-compensation",
        "title": "知財・ノウハウの価値と対価をどう決めるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "成果物の製作対価と知財等の提供価値を意識し、貢献・利用範囲・事業価値等を踏まえて協議する。",
        "exception": "対価の切り分けや算定方法を一律に固定する必要はなく、取引実態に応じた合理的な方法を選べる。",
        "uncertain": "適正な対価の具体額は技術・市場・利用範囲等で大きく異なる。",
        "sourceIds": [
          "source-ip-knowhow-data-guideline-2026"
        ]
      },
      {
        "id": "iptx-rnd-ownership",
        "title": "共同研究・開発委託の成果帰属をどう決めるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "契約名称や費用負担だけで帰属を決めず、既存知財と成果を分け、創出への貢献や利用目的を踏まえて協議する。",
        "exception": "一方当事者への単独帰属自体が直ちに問題となるわけではなく、対価・貢献・交渉状況等を含めて評価する。",
        "uncertain": "複数社・大学等を含む研究開発では貢献の把握と権利関係が複雑化する。",
        "sourceIds": [
          "source-ip-knowhow-data-guideline-2026"
        ]
      },
      {
        "id": "iptx-warranty-liability",
        "title": "非侵害保証・紛争リスクをどこまで負わせるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "原因や支配可能性を無視して一方当事者へ責任を全面転嫁せず、役割・情報・対価に応じた保証と責任分担を設計する。",
        "exception": "取引内容に応じた合理的な保証・補償条項は利用できる。",
        "uncertain": "適切な責任範囲は製品・開発工程・第三者知財へのアクセス等により異なる。",
        "sourceIds": [
          "source-ip-knowhow-data-guideline-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-ip-knowhow-data-guideline-2026"
    ],
    "practicalImpacts": [
      "NDA・情報開示",
      "共同研究開発契約",
      "開発・業務委託",
      "知財帰属・ライセンス",
      "知財対価",
      "保証・責任制限",
      "標準ひな形の例外承認"
    ]
  },
  {
    "slug": "tender-offer-large-shareholding",
    "title": "公開買付・大量保有報告制度",
    "categories": [
      "会社法・ガバナンス",
      "M&A",
      "金融商品取引・開示・IR"
    ],
    "summary": "2026年5月施行の公開買付制度・大量保有報告制度改正を中心に、30％ルール、市場内取得、僅少買付け、共同保有者、重要提案行為等を上場会社・投資家双方の実務から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2026年5月1日から、公開買付制度は市場内取引（立会内）も30％ルールの対象となり、既に30％超を保有する者の追加取得にも原則としてTOBが必要となる一方、0.5％未満の僅少買付け等の例外が設けられました。",
      "大量保有報告制度では、共同保有者・重要提案行為等の範囲が見直され、現金決済型エクイティ・デリバティブやみなし共同保有者の規律も整備されています。",
      "この棚では、買収・株式取得のストラクチャー設計と、IR・アクティビスト対応や機関投資家の協働エンゲージメントを同じ制度変更として追います。"
    ],
    "currentSummary": {
      "facts": [
        "令和6年改正金商法に伴う政令・内閣府令・ガイドライン・Q&Aは一部を除き2026年5月1日から施行・適用された。",
        "公開買付けの30％ルールは市場内取引を対象に含み、僅少買付け等は所有割合の増加が0.5％未満であること等を要件とする。",
        "大量保有報告では共同保有者・重要提案行為等の範囲、現金決済型エクイティ・デリバティブ、みなし共同保有者等が見直された。"
      ],
      "interpretations": [
        "M&Aの株式取得では、市場外・市場内という従来の区分だけでTOB要否を判断せず、取得後割合、直近6か月の取得、間接取得、特別関係者等を含めて確認する必要がある。",
        "投資家との対話や複数投資家の協働行動は、内容・合意の程度によって重要提案行為等や共同保有者の論点となるため、会社側も報告書だけでなく対話内容の背景を理解する必要がある。"
      ],
      "implications": [
        "上場株式取得・M&Aの初期ストラクチャー検討にTOBチェックを組み込み、僅少買付けの6か月要件や間接取得も確認する。",
        "IR・株主対応では、大量保有報告の保有目的や共同保有関係の変化を、アクティビスト対応や同意なき買収への備えと結び付けてモニターする。"
      ],
      "uncertain": [
        "間接取得の目的要件や共同保有・重要提案行為の具体的な境界は個別事実に依存し、今後の実務・当局対応の蓄積が重要になる。"
      ]
    },
    "issues": [
      {
        "id": "tob-30-percent-rule",
        "title": "市場内取得を含む30％ルールでいつTOBが必要か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "市場内取引も含め、株券等所有割合が30％を超える取得等は原則として公開買付規制の対象になるため、取得方法だけでなく取得前後の割合と適用除外を確認する。",
        "exception": "法令上の適用除外や僅少買付け等に該当する場合は公開買付けを要しない。",
        "uncertain": "間接取得等の目的要件は個別事実の評価が必要。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "tob-de-minimis",
        "title": "30％超保有者の少量追加取得はどこまで許されるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "一定の条件の下、取得による所有割合の増加が0.5％未満で、原則として直前6か月に対象株券等の買付け等をしていない場合などは僅少買付け等の例外を検討できる。",
        "exception": "公開買付け・適用除外買付け等や一連の取引の評価など、法令・Q&A上の細部を確認する必要がある。",
        "uncertain": "複雑な取得履歴や特別関係者を介する取引では事実認定が問題になり得る。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "largeholding-important-proposal",
        "title": "企業との対話はどこから重要提案行為等になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "投資先企業との対話の内容を、法令・大量保有Q&Aで整理された重要提案行為等の範囲に照らして判断する。",
        "exception": "企業価値向上に向けた通常の対話が直ちに重要提案行為等になるわけではない。",
        "uncertain": "個別の要求内容・具体性・意思決定への働きかけの程度で評価が変わる。",
        "sourceIds": [
          "source-fsa-largeholder-dialogue-2025",
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "largeholding-joint-holder",
        "title": "協働エンゲージメントは共同保有に当たるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "複数投資家が協働する場合でも、個別の権利行使についてどのような合意があるか等を確認し、共同保有者該当性を判断する。",
        "exception": "中長期的な企業価値向上を目的とする意見交換や協働が当然に共同保有となるものではない。",
        "uncertain": "合意の内容・証拠・継続性など具体的な事実関係に左右される。",
        "sourceIds": [
          "source-fsa-largeholder-dialogue-2025",
          "source-fsa-tob-largeholder-final-2025"
        ]
      },
      {
        "id": "largeholding-derivatives",
        "title": "現金決済型エクイティ・デリバティブをどう扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "一定の要件を満たす現金決済型エクイティ・デリバティブは大量保有報告制度の対象となり得るため、権利の内容と株券等への換算方法を確認する。",
        "exception": "すべてのデリバティブが一律に対象となるわけではなく、法令上の適用要件がある。",
        "uncertain": "複雑なデリバティブ設計では個別検討が必要。",
        "sourceIds": [
          "source-fsa-tob-largeholder-final-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-tob-largeholder-final-2025",
      "source-fsa-largeholder-dialogue-2025"
    ],
    "practicalImpacts": [
      "TOB要否チェック",
      "株式取得ストラクチャー",
      "大量保有報告モニタリング",
      "IR・株主対話",
      "アクティビスト対応"
    ]
  },
  {
    "slug": "corporate-takeover-guidelines",
    "title": "企業買収行動指針・同意なき買収",
    "categories": [
      "会社法・ガバナンス",
      "M&A"
    ],
    "summary": "企業買収行動指針と2026年のポイント・Q&Aを基礎に、望ましい買収、真摯な買収提案、取締役会の検討、情報取得・判断記録を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "経済産業省は2023年の企業買収行動指針を維持した上で、2026年7月30日にポイント・Q&A等を公表し、実務で誤解が生じやすい判断枠組みを具体化しました。",
      "Q&Aは、買収価格が高いことだけで望ましい買収と決める考え方を否定し、企業価値向上と株主共同の利益の双方を評価することを示しています。",
      "真摯な買収提案かどうかは具体性、目的の正当性、実現可能性を総合評価し、真摯な提案を受けた取締役会は企業価値向上の観点から情報を集めて検討します。"
    ],
    "currentSummary": {
      "facts": [
        "2026年7月30日のポイント・Q&A等は2023年指針を改定するものではなく、その趣旨と判断枠組みを具体化した資料である。",
        "真摯な買収提案は具体性、目的の正当性、実現可能性が合理的に疑われるかを総合的に検討する。",
        "取締役会は真摯な検討を行った上で、買収提案への対応だけでなくスタンドアローンや第三者との提携等も含む戦略的選択肢を判断できる。"
      ],
      "interpretations": [
        "取締役会は高値提示だけで判断せず、買収者の属性・資力・トラックレコード、買収後の経営方針、許認可、条件・時期などを企業価値向上との関係で確認する必要がある。",
        "『真摯でない』との入口判断を広く使って検討を回避すると指針の趣旨に反するため、拒否・追加情報要求・検討継続の理由を記録できる状態が重要になる。"
      ],
      "implications": [
        "同意なき買収提案を受領した場合の初動手順に、提案の具体性・目的・資金裏付け・許認可・買収後方針の確認項目を入れる。",
        "取締役会資料では買収価格だけでなく企業価値向上策、実現可能性、代替案を比較し、判断過程を残す。"
      ],
      "uncertain": [
        "指針・Q&Aは法令上の一律ルールではなく、個々の買収提案への具体的な対応は会社の状況・提案内容・取締役の善管注意義務等に応じて判断される。"
      ]
    },
    "issues": [
      {
        "id": "takeover-desirable",
        "title": "『望ましい買収』は何で判断するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "企業価値が向上し、その増加分が適正な取引条件により買収者・株主間で公正に分配され、株主共同の利益が確保されるかを見る。",
        "exception": "高い買収価格は重要な要素だが、それだけで望ましい買収と決まるものではない。",
        "uncertain": "企業価値向上策の評価には将来予測が含まれる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-bona-fide",
        "title": "どの提案を『真摯な買収提案』として扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "具体性、目的の正当性、実現可能性が合理的に疑われる事情を総合考慮し、真摯な提案か判断する。",
        "exception": "資金裏付け不足等の例示の一つに当たるだけで直ちに真摯性が否定されるわけではない。",
        "uncertain": "総合判断であり、提案の成熟度や交渉経緯によって評価が変わる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-board-review",
        "title": "取締役会は真摯な提案をどう検討するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "企業価値向上の観点から、買収者、取引条件、実現可能性、買収後の経営方針等を検討し、買収に応じるか代替策を選ぶか判断する。",
        "exception": "真摯な検討後の経営判断には一定の裁量がある。",
        "uncertain": "必要な情報量・外部専門家関与等は案件の規模・緊急性・利益相反状況に応じる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-corporate-takeover-guidelines-clarification-2026"
    ],
    "practicalImpacts": [
      "買収提案受領時の初動",
      "取締役会資料",
      "情報要求リスト",
      "同意なき買収対応",
      "判断過程の記録"
    ]
  },
  {
    "slug": "early-business-recovery",
    "title": "早期事業再生法・多数決型私的整理",
    "categories": [
      "契約",
      "会社法・ガバナンス",
      "事業再生・金融"
    ],
    "summary": "2026年12月11日施行の早期事業再生法について、金融債権者の多数決と裁判所認可、対象債権、指定確認調査機関、従来の私的整理との使い分けを整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "早期事業再生法は、倒産状態に至る前の事業者が、指定確認調査機関の関与の下で金融債権を調整する新しい事業再生手続で、2026年12月11日に施行されます。",
      "従来の準則型私的整理が金融債権者全員の同意を基本としてきたのに対し、一定の場合は総議決権額の4分の3以上の賛成と裁判所認可により反対債権者も拘束する権利変更を可能にします。",
      "対象は金融債権が中心で、取引債権・租税債権等を一律に巻き込む法的整理とは異なるため、資金繰りが悪化した際の第三の選択肢として手続の適合性を早い段階で見極める必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "2026年6月30日に施行規則・資産評定基準・Q&Aが公表され、2026年12月11日の施行に向け制度詳細が具体化された。",
        "制度は経済的に窮境に陥るおそれのある事業者が早期に利用でき、手続開始時の公示を伴わず金融債権を中心に調整する。",
        "全員同意が得られない場合でも、原則として総議決権額の4分の3以上の賛成と裁判所認可により権利変更を成立させ得る。"
      ],
      "interpretations": [
        "法的整理による信用・事業価値の毀損を避けたい一方、従来の私的整理では一部債権者の反対で全員同意が難しい案件が主要な利用場面になり得る。",
        "利用可能性の検討では、対象債権・担保部分、金融債権者構成、必要な多数、事業再生計画の実現可能性を早期に把握することが重要になる。"
      ],
      "implications": [
        "事業会社は資金繰り危機が深刻化する前に、従来型私的整理・早期事業再生法・法的整理の選択肢を比較する。",
        "金融機関・債権管理部門は対象債権、担保評価、議決権、裁判所認可を見据えた意思決定・案件管理体制を準備する。"
      ],
      "uncertain": [
        "新制度のため、裁判所認可の実務、指定確認調査機関の運用、従来手続からの移行などは施行後の事例蓄積を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ebr-eligibility",
        "title": "どの段階・事業者が制度を使えるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "倒産状態に至る前の経済的に窮境に陥るおそれのある事業者が、法令・Q&Aの利用要件を満たすか確認する。",
        "exception": "事業者の状態や再生可能性等の要件を満たさない場合は利用できない。",
        "uncertain": "制度開始後の利用判断・指定確認調査機関の運用蓄積が必要。",
        "sourceIds": [
          "source-meti-early-business-recovery-rules-2026"
        ]
      },
      {
        "id": "ebr-financial-claims",
        "title": "どの債権・担保が多数決の対象になるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "対象となる金融機関等・貸付債権等と、担保でカバーされる部分などの扱いを施行規則・Q&Aで確認する。",
        "exception": "取引債権・租税債権などは制度の対象外であり、金融債権でも対象範囲の確認が必要。",
        "uncertain": "担保価値や対象債権額の評価が争点となる案件では実務調整が必要。",
        "sourceIds": [
          "source-meti-early-business-recovery-rules-2026"
        ]
      },
      {
        "id": "ebr-voting-court",
        "title": "多数決と裁判所認可で何が変わるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "全員同意がない場合でも、原則として総議決権額の4分の3以上の賛成等と裁判所認可により権利変更を成立させ得る。",
        "exception": "多数決だけで自動的に成立するのではなく、裁判所認可等の法定手続が必要。",
        "uncertain": "認可判断や異議・不服申立てを含む実務は施行後の蓄積を要する。",
        "sourceIds": [
          "source-meti-early-business-recovery-rules-2026"
        ]
      },
      {
        "id": "ebr-process",
        "title": "従来の私的整理・法的整理とどう使い分けるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "全員同意の見込み、事業価値毀損リスク、対象債権、時間、必要なスポンサー・資金等を踏まえ、従来型私的整理、早期事業再生法、法的整理を比較する。",
        "exception": "全員同意が現実的な案件では従来の私的整理が適する場合もある。",
        "uncertain": "施行後の利用事例により典型的な選択場面が形成される。",
        "sourceIds": [
          "source-meti-early-business-recovery-rules-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-early-business-recovery-rules-2026"
    ],
    "practicalImpacts": [
      "資金繰り危機の早期対応",
      "事業再生手続の選択",
      "金融債権者調整",
      "担保・議決権確認",
      "取締役会・経営会議の意思決定"
    ]
  },
  {
    "slug": "fefta-inward-investment-screening",
    "title": "外為法・対内直接投資審査",
    "categories": [
      "M&A",
      "国際取引",
      "危機管理・コンプライアンス"
    ],
    "summary": "外為法の対内直接投資審査について、現行の事前届出と2026年改正の間接取得・高リスク投資家・事後介入、リスク軽減措置、実際の中止勧告まで整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "クロスボーダーM&Aでは、会社法・TOB・企業結合審査とは別に外為法の投資審査が案件日程や実行可否を左右する。",
      "2026年6月5日公布の改正法は、外国法人を介した間接取得、高リスク非居住者等の影響下にある国内投資、非指定業種への事後介入などを追加した。",
      "主要部分は全面施行前なので、現行制度と施行前ルールを分け、政省令・告示の最終化を追う。"
    ],
    "currentSummary": {
      "facts": [
        "現行制度では、外国投資家による指定業種の一定の株式取得・行為等について原則として事前届出が必要で、免除制度もある。",
        "2026年改正法はリスク軽減措置、間接取得、高リスク主体の影響下にある国内投資、非指定業種への事後介入、省庁間連携を追加した。",
        "改正法の省庁間意見照会の一部は公布日から施行され、主要部分は公布から1年以内の政令指定日から施行される。",
        "2025年度の事前届出は3,401件。2026年4月には牧野フライス製作所の株式取得について中止勧告が公表された。"
      ],
      "interpretations": [
        "外為法チェックはクロージング直前の届出作業ではなく、対象会社の事業・技術、投資家属性、取得経路を初期DDで確認する方がよい。",
        "2026年改正後は海外持株会社レベルの買収や高リスク主体の影響を受ける国内投資主体も審査対象になり得るため、支配関係を上流まで見る必要がある。",
        "審査では禁止・許可の二択だけでなく、秘密情報アクセスや事業維持などのリスク軽減措置を案件条件へ落とす発想が重要になる。"
      ],
      "implications": [
        "案件開始時に投資家該当性、指定業種・コア業種、取得割合、行為類型、免除利用可否を確認する。",
        "直接取得だけでなく海外親会社・持株会社の買収による間接取得や投資主体への影響関係を確認する。",
        "事前届出案件はクロージング条件・ロングストップ日・当局対応分担を契約へ反映する。"
      ],
      "uncertain": [
        "2026年改正法の主要部分は全面施行前で、間接取得、高リスク主体、非指定業種への事後介入の具体的要件は最終政省令・告示の確認が必要。",
        "届出要否や安全保障上の懸念は対象会社の実際の事業・技術、投資家属性、取得後の関与内容に左右される。"
      ]
    },
    "issues": [
      {
        "id": "fdi-prior-notification",
        "title": "どの投資・行為で事前届出が必要か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "外国投資家該当性、指定業種・コア業種、取得割合・行為類型、免除制度の利用可否を順に確認する。",
        "exception": "免除制度の要件を満たす場合などは事前届出が不要となり得る。",
        "uncertain": "複数事業や新規事業では指定業種該当性の事実確認が必要。",
        "sourceIds": [
          "source-mof-fdi-annual-2025"
        ]
      },
      {
        "id": "fdi-indirect-acquisition",
        "title": "海外持株会社等の買収で日本企業を間接取得する場合どうなるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年改正法は、本邦企業株式等を保有する外国法人等を別の外国投資家が支配することを通じた間接取得を規制対象に追加する。",
        "exception": "具体的な範囲・閾値は施行ルールを確認する。",
        "uncertain": "主要部分は全面施行前で下位法令の最終内容を継続確認する。",
        "sourceIds": [
          "source-mof-fefta-amendment-2026",
          "source-mof-fefta-subrules-proposal-2026"
        ]
      },
      {
        "id": "fdi-risk-mitigation",
        "title": "安全保障上の懸念をリスク軽減措置でどう処理するか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年改正法は国の安全等のリスクをなくす措置を届出事項として明確化し、審査・変更勧告等と結び付ける。",
        "exception": "具体的な措置は対象事業・技術・投資家属性に応じて設計される。",
        "uncertain": "受入可能な措置の水準は案件ごとの当局審査と運用蓄積に依存する。",
        "sourceIds": [
          "source-mof-fefta-amendment-2026",
          "source-mof-fdi-annual-2025"
        ]
      },
      {
        "id": "fdi-high-risk-investor",
        "title": "高リスク非居住者等の影響下にある国内投資をどう見るか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "高リスク非居住者等の支配・影響下で、その者のために国内で行われる投資を事前届出等の対象とする改正が予定されている。",
        "exception": "通常の国内投資主体を一律に外国投資家とみなすものではない。",
        "uncertain": "具体的な高リスク主体や支配・影響要件は下位法令の最終化を待つ。",
        "sourceIds": [
          "source-mof-fefta-amendment-2026",
          "source-mof-fefta-subrules-proposal-2026"
        ]
      },
      {
        "id": "fdi-nondesignated-postcontrol",
        "title": "非指定業種への投資にも事後介入されるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、特にリスクの高い外国投資家による非指定業種への投資で安全保障リスクが生じた場合の事後措置を新設する。",
        "exception": "全ての非指定業種投資に一般的な事前届出を課す制度ではない。",
        "uncertain": "対象投資家・発動要件・命令内容は施行ルールを継続確認する。",
        "sourceIds": [
          "source-mof-fefta-amendment-2026",
          "source-mof-fefta-subrules-proposal-2026"
        ]
      },
      {
        "id": "fdi-enforcement-makino",
        "title": "中止勧告はどのような安全保障リスクで使われるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "牧野フライス事案では、防衛関連の生産・技術基盤への影響と技術・情報流出の可能性が審査され、中止勧告が行われた。",
        "exception": "個別事案であり、同じ業種なら当然に中止されるわけではない。",
        "uncertain": "今後の勧告・命令・リスク軽減措置の運用蓄積を追う必要がある。",
        "sourceIds": [
          "source-mof-makino-stop-2026",
          "source-mof-fdi-annual-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-mof-fefta-amendment-2026",
      "source-mof-fdi-annual-2025",
      "source-mof-makino-stop-2026",
      "source-mof-fefta-subrules-proposal-2026"
    ],
    "practicalImpacts": [
      "クロスボーダーM&Aの初期スクリーニング",
      "指定業種・コア業種確認",
      "投資家属性・支配関係のDD",
      "クロージング条件・案件日程",
      "情報アクセス・ガバナンス条件",
      "当局対応・リスク軽減措置"
    ]
  },
  {
    "slug": "payment-terms-60day-notice",
    "title": "支払条件・60日ルール／約束手形廃止",
    "categories": [
      "独占禁止法・競争法",
      "契約"
    ],
    "summary": "取適法と2027年4月施行の支払告示を中心に、製造委託等の60日ルール、取引上の地位、検収・締日、電子記録債権等、約束手形廃止と支払サイト短縮を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2026年1月施行の取適法に続き、公取委は規模要件から外れる製造委託等にも60日ルールを広げる支払告示を制定した。",
      "支払告示は2027年4月1日施行で、受託事業者の取引上の地位が劣っていない場合を除き、給付受領から60日経過後も代金を支払わないことを原則禁止する。",
      "2027年3月末の電子交換所での手形・小切手交換廃止も見据え、契約だけでなく発注・検収・締め・支払システムと資金繰りを一体で見直す。"
    ],
    "currentSummary": {
      "facts": [
        "取適法は2026年1月1日施行で、対象取引では60日以内の支払期日設定、支払遅延禁止、手形交付禁止等が適用される。",
        "支払告示は2027年4月1日施行で、製造委託等の代金を給付受領から60日経過後なお支払わないことを正当な理由がある場合を除き禁止する。",
        "支払告示に取適法と同じ規模要件はない一方、受託事業者の取引上の地位が劣っていない場合は対象外となる。",
        "公取委は2026年9月2日、手形・小切手交換廃止も踏まえ、対象外取引を含むサプライチェーン全体で支払サイト短縮を要請した。"
      ],
      "interpretations": [
        "取適法の規模基準だけで対象外と判断すると2027年4月以降の支払告示を取りこぼすため、取引類型と取引上の地位を別途確認する。",
        "60日管理は契約上の支払日だけでなく実際の給付受領日を起点にし、検収遅延や月末締めで超過しないようシステム管理する方が安全である。",
        "電子記録債権等へ変えるだけでなく、現金化時期、手数料負担、サイト全体が受託側へ不当に負担を移していないかを見る。"
      ],
      "implications": [
        "製造委託・修理委託・情報成果物作成委託・役務提供委託等を棚卸しし、取適法と支払告示の適用を記録する。",
        "契約・発注書の支払条件、締日、検収、ERPの支払日設定を各給付受領日から60日以内となるよう確認する。",
        "手形・小切手を使う取引は代替手段へ移行し、サイト短縮による資金繰りへの影響も調達・経理・財務で管理する。"
      ],
      "uncertain": [
        "『取引上の地位が劣っていない』か、60日超に『正当な理由』があるかは依存度、市場地位、取引先変更可能性、合意形成等の個別事情に左右される。",
        "対象外でも長期サイトや費用負担の押付けは優越的地位の濫用等の別規律や行政要請との関係を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "payment-toriteki-vs-notice",
        "title": "取適法の対象外なら60日ルールを気にしなくてよいか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "取適法の規模要件を満たさなくても、製造委託等で受託事業者の取引上の地位が劣る場合は支払告示の対象となり得る。",
        "exception": "受託事業者の地位が劣っていない場合や製造委託等に当たらない単純売買等は対象外。",
        "uncertain": "取引上の地位は依存度・市場地位・変更可能性等を総合判断する。",
        "sourceIds": [
          "source-jftc-payment-notice-2026",
          "source-jftc-payment-guideline-2026"
        ]
      },
      {
        "id": "payment-60day-start",
        "title": "60日はいつから数え、締日・検収をどう扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "原則として給付受領日、役務提供委託では役務提供日から起算し、60日経過後も未払いとならない支払日を設定する。",
        "exception": "正当な理由がある場合は告示上の余地がある。",
        "uncertain": "合意に基づく支払条件が正当な理由になるかは実質的な協議等を個別確認する。",
        "sourceIds": [
          "source-jftc-payment-guideline-2026"
        ]
      },
      {
        "id": "payment-electronic-methods",
        "title": "電子記録債権・ファクタリング等へ切り替えればよいか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "現金又はこれに準ずる支払手段を使い、60日以内に受託事業者が支払を受けられる状態か、手数料負担が不当でないかを確認する。",
        "exception": "取適法には手形禁止や満額を現金で受領できない支払手段への追加規律があり、両制度を混同しない。",
        "uncertain": "具体的な電子決済設計は契約条件・金融機関の仕組みと合わせて確認する。",
        "sourceIds": [
          "source-jftc-payment-guideline-2026",
          "source-jftc-payment-normalization-2026"
        ]
      },
      {
        "id": "payment-promissory-note-exit",
        "title": "約束手形廃止へ何をいつまでに変えるか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "2027年3月31日の電子交換所での手形・小切手交換廃止等を踏まえ、手形依存の支払を代替手段へ移し支払サイト自体も短縮する。",
        "exception": "代替手段への切替えだけで受注者に新たな資金・手数料負担を押し付けない。",
        "uncertain": "金融機関ごとの最終取扱日や決済サービス条件は各社で確認する。",
        "sourceIds": [
          "source-jftc-payment-normalization-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jftc-payment-notice-2026",
      "source-jftc-payment-guideline-2026",
      "source-jftc-payment-normalization-2026"
    ],
    "practicalImpacts": [
      "取引類型・適用法令の棚卸し",
      "契約書・発注書の支払条件",
      "検収・締日・ERP設定",
      "買掛金・支払サイト管理",
      "手形・小切手からの移行",
      "調達・経理・財務の連携"
    ]
  },
  {
    "slug": "ssbj-statutory-sustainability-disclosure",
    "title": "SSBJ・サステナビリティ法定開示",
    "categories": [
      "金融商品取引・開示・IR",
      "会社法・ガバナンス",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年2月の開示府令改正で法定適用が具体化したSSBJ基準について、適用対象・時期、二段階開示、Scope3の責任整理、基準への言及、サプライチェーンデータ収集まで整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "SSBJ基準は2025年3月に公表され、2026年3月に温室効果ガス排出の開示に関する改正が行われた。2026年2月の開示府令改正により、一定のプライム市場上場会社について有価証券報告書等での法定適用が具体化した。",
      "開示はサステナビリティ部門だけの作業ではなく、将来情報・Scope3・サプライヤーデータ・社内承認過程を含むため、法務、IR、経理、調達、事業部門の統制設計に直結する。",
      "任意にSSBJ基準の一部を参考にする場合と、SSBJ基準に準拠した法定開示を行う場合を混同せず、表現と根拠データを管理する。"
    ],
    "currentSummary": {
      "facts": [
        "開示府令は、東証プライム市場上場会社のうち平均時価総額1兆円以上の会社にSSBJ基準に従ったサステナビリティ開示を義務付ける。平均時価総額3兆円以上の会社は2027年3月31日以後終了事業年度から、1兆円以上の会社は2028年3月31日以後終了事業年度から適用される。",
        "適用開始年度とその翌年度は、一定の場合にSSBJ基準に基づく情報を後日訂正報告書で補う二段階開示が可能とされた。",
        "Scope3温室効果ガス排出量について、差異要因・推論過程・社内の開示手続等が一般に合理的な範囲で具体的に記載されている場合の責任に関する考え方が企業内容等開示ガイドラインに明示された。",
        "SSBJは、基準のすべての定めに準拠していない企業が『SSBJ基準を踏まえて』『考慮して』『参考にして』など、準拠しているかのような誤解を生じ得る表現を用いることは適切でないと注意喚起している。"
      ],
      "interpretations": [
        "法定化後は、任意のESGレポートの延長として文章だけを整えるのではなく、有価証券報告書の虚偽記載等リスクを前提に、データ生成・確認・承認の証跡を含めて開示統制を設計する必要がある。",
        "Scope3は取引先から情報を集めるため、情報要求の内容、目的外利用、秘密情報、費用負担、競争法・取適法との関係まで調達実務と接続して検討する。",
        "SSBJ準拠をうたう文言はマーケティング表現ではなく、基準全体への準拠状況を踏まえてレビューする。"
      ],
      "implications": [
        "自社の平均時価総額と適用年度を確定し、準備年度・初年度・二段階開示利用の工程を決める。",
        "ガバナンス、戦略、リスク管理、指標・目標ごとに情報オーナーと承認者を決め、元データと判断過程を保存する。",
        "Scope3の取引先データ収集では、依頼項目、利用目的、秘密保持、アクセス権限、更新頻度、費用負担を契約・運用に反映する。",
        "有価証券報告書でSSBJ基準に言及する場合は、準拠範囲と表現を法務・IRで確認する。"
      ],
      "uncertain": [
        "1兆円未満の会社への将来の適用拡大や保証制度の詳細は、今後の法令・金融庁の制度整備を継続確認する。",
        "Scope3や将来情報の具体的な合理性評価は、各社の算定方法、入手可能な情報、内部手続に左右される。"
      ]
    },
    "issues": [
      {
        "id": "ssbj-application-scope",
        "title": "いつからSSBJ基準の法定適用対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "東証プライム上場会社のうち平均時価総額3兆円以上は2027年3月31日以後終了事業年度から、1兆円以上は2028年3月31日以後終了事業年度から適用を確認する。",
        "exception": "上場後5事業年度未満の場合の平均時価総額の算定や経過措置は開示府令を確認する。",
        "uncertain": "1兆円未満への将来拡大は今後の制度整備を追う。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "ssbj-two-step-disclosure",
        "title": "二段階開示をどう使うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "適用開始年度と翌年度は、要件を満たす場合に翌期の半期報告書提出期限までの訂正報告書でSSBJ情報を補う方法を選択できる。",
        "exception": "二段階開示の選択状況等の記載が必要で、通常の開示統制が不要になるわけではない。",
        "uncertain": "個社の日程設計は決算・総会・半期報告の工程に依存する。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "ssbj-scope3-liability",
        "title": "Scope3の推計・第三者データをどう開示するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "差異要因、推論過程、社内の開示手続等を具体的に記載し、入手可能な情報と算定判断の証跡を残す。",
        "exception": "セーフハーバーは無条件の免責ではなく、合理的な記載・手続が前提となる。",
        "uncertain": "サプライヤーごとのデータ品質や推計手法は継続改善が必要。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026",
          "source-ssbj-standards-current"
        ]
      },
      {
        "id": "ssbj-reference-wording",
        "title": "SSBJ基準にどのように言及できるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "基準のすべての定めに準拠していない場合、準拠していると記述せず、利用者に準拠の誤解を生じさせる表現を避ける。",
        "exception": "将来の全面準拠予定や進捗を示す場合は、当期は全面準拠していない旨を明示する。",
        "uncertain": "個別表現が誤解を生じさせるかは開示全体の文脈を確認する。",
        "sourceIds": [
          "source-ssbj-reference-warning-2026"
        ]
      },
      {
        "id": "ssbj-supplychain-data",
        "title": "Scope3の取引先データ収集をどう設計するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "データ収集目的、項目、秘密保持、利用範囲、アクセス権限、費用負担を取引関係に応じて設計する。",
        "exception": "一律に過大な情報・コストを取引先へ要求すると別の法的リスクが生じ得る。",
        "uncertain": "業界・取引構造により合理的な収集方法は異なる。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026",
          "source-ssbj-standards-current"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-disclosure-ordinance-2026",
      "source-ssbj-standards-current",
      "source-ssbj-reference-warning-2026"
    ],
    "practicalImpacts": [
      "有価証券報告書の作成・レビュー",
      "開示統制・証跡管理",
      "Scope3算定・取引先データ収集",
      "IR・サステナビリティ表現",
      "調達契約・秘密情報管理"
    ]
  },
  {
    "slug": "agm-pre-disclosure-company-law-reform",
    "title": "株主総会・総会前開示／会社法制見直し",
    "categories": [
      "会社法・ガバナンス",
      "金融商品取引・開示・IR"
    ],
    "summary": "有価証券報告書の株主総会前開示をめぐる金融庁の実務対応と、株主総会・実質株主・バーチャル総会等を対象とする会社法制見直しを、現行ルールと検討中の制度に分けて整理する。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "金融庁は、投資家が株主総会前に有価証券報告書を確認できるよう、3週間以上前の提出を最も望ましい姿としつつ、まず前日ないし数日前の総会前開示を上場会社へ要請している。",
      "2026年2月の開示府令改正は総会前開示時の記載負担を一部軽減し、金融庁は実現方法、留意点、開示状況、好事例を継続公表している。",
      "2026年9月の金融審議会ディスクロージャーWGでは、事業報告と有価証券報告書の単純な統合にとどまらず、開示媒体の役割分担、相互参照、重要情報の所在、法定・任意開示の保証水準、総会前の利用可能性をどう設計するかが具体的な論点として提示された。",
      "同時に法制審議会では、バーチャル株主総会、実質株主確認、会議体としての株主総会、株主提案権等を含む会社法制の見直しが進んでいる。中間試案や金融審WGの意見は検討段階であり、現行法と区別して追う。"
    ],
    "currentSummary": {
      "facts": [
        "2025年3月28日の金融担当大臣要請は、有価証券報告書を株主総会の3週間以上前に提出することを最も望ましいとし、直ちに難しい会社には前日ないし数日前の提出を第一歩として検討するよう求めた。",
        "2026年2月20日の開示府令改正は、総会前開示を行う場合の定時株主総会・取締役会決議事項に関する有価証券報告書の記載負担を軽減し、2026年3月31日以後終了事業年度から適用された。",
        "金融庁の総会前開示ページは2026年7月17日時点で、実現方法、提出会社一覧、2026年3月期の開示状況、相談窓口、好事例等をまとめている。",
        "2026年9月4日の金融審議会ディスクロージャーWG第6回では、日本IR協議会、海外投資家NBIM、発行会社側委員から、開示の重複・媒体構成・法定開示と任意開示の役割・有報の提出時期について資料が提示された。",
        "法制審議会は2026年3月18日に会社法制見直しの中間試案を取りまとめ、バーチャル株主総会、実質株主確認制度、株主総会に関する規律等を検討している。中間試案は成立法ではない。"
      ],
      "interpretations": [
        "総会前開示は有報作成だけの問題ではなく、決算・監査・事業報告・招集通知・基準日・配当・総会日程を一体で設計する会社法務・IRの工程問題である。",
        "3週間以上前の開示を実現する方法は、現行日程の前倒しだけでなく、議決権基準日や総会開催時期の変更も含むため、定款・役員人事・四半期開示等への波及を比較する必要がある。",
        "会社法制見直しはまだ検討中であり、バーチャル総会や実質株主確認など将来制度を現行法上の義務として先取りしない。",
        "開示合理化は『事業報告と有報を一つにするか』だけでは足りず、各情報のホームとなる媒体、参照方式、法定・任意開示の役割と保証水準、総会前に利用可能な時期を一体で設計する問題として追う必要がある。"
      ],
      "implications": [
        "次回総会の工程表に有報提出日を明示し、総会前開示の実現方法を監査・IR・法務・経理で早期に決める。",
        "議決権基準日を変更する案では、定款、配当基準日、役員任期、名簿管理、招集通知等への影響を洗い出す。",
        "事業報告と有報の重複情報は、現行法で許容される一体開示・参照方法と今後の法制見直しを区別して管理する。",
        "会社法制見直しは中間試案以降の審議・要綱化・法案化を追い、確定した段階でテーマ更新する。",
        "有報・事業報告・CG報告書・統合報告書・決算説明資料について、重複項目、正本となる媒体、相互参照の可否、保証・レビュー範囲、公開時期を一覧化する。"
      ],
      "uncertain": [
        "総会前開示の最適な実現方法は各社の決算・監査・総会実務に左右される。",
        "会社法制見直しの各案は中間試案段階であり、最終的な制度内容・施行時期は未確定。",
        "2026年9月4日のディスクロージャーWG資料は各ステークホルダーの問題提起・意見であり、WGとして合意した制度案や確定ルールではない。"
      ]
    },
    "issues": [
      {
        "id": "agm-pre-disclosure-timing",
        "title": "有価証券報告書をいつ出すか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "3週間以上前を望ましい姿としつつ、自社の工程を踏まえて少なくとも総会前の提出を検討する。",
        "exception": "3週間前提出自体が一律の法定期限になったわけではない。",
        "uncertain": "各社の監査・決算工程により前倒し可能幅は異なる。",
        "sourceIds": [
          "source-fsa-agm-pre-disclosure-2026",
          "source-fsa-disclosure-ordinance-2026"
        ]
      },
      {
        "id": "agm-calendar-design",
        "title": "基準日・総会日程を変更して前倒しするか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "有報作成を大幅に前倒しする案と、議決権基準日・総会開催日を後ろ倒しする案等を、定款・配当・役員任期・開示工程への影響で比較する。",
        "exception": "全社に一つの最適解があるわけではない。",
        "uncertain": "投資家・株主名簿管理人等への影響も個別確認が必要。",
        "sourceIds": [
          "source-fsa-agm-pre-disclosure-2026"
        ]
      },
      {
        "id": "agm-disclosure-rationalization",
        "title": "事業報告と有報の重複をどう減らすか",
        "status": "pending",
        "stage": "under_revision",
        "views": [
          {
            "id": "agm-disclosure-investor-architecture",
            "label": "投資家側：単純統合より情報の所在・参照・具体性・タイミングを直す",
            "summary": "NBIMは、事業報告と有価証券報告書の統合は文書を一つ減らすだけで、重要情報が法定書類外にあること、記載の具体性、総会前の利用可能性、財務情報等との接続といった主要課題は解消しないと指摘する。各情報のホーム文書を決め、重複記載ではなく相互参照し、総会資料やSSBJ・財務情報との接続を高める方向を提案する。",
            "sourceIds": [
              "source-fsa-disclosure-wg6-2026"
            ],
            "articleIds": [
              "article-fsa-disclosure-wg6-2026"
            ]
          },
          {
            "id": "agm-disclosure-issuer-role-split",
            "label": "発行会社側：重複排除は必要だが法定開示への過度な集約は避ける",
            "summary": "発行会社側委員は、スクラップ＆ビルド、重複排除、参照方式を進める必要性を認めつつ、経営戦略や資本政策など対話型情報まで有価証券報告書へ過度に集約すると、投資家が期待する保証水準と実際の保証対象との間にギャップが生じ得ると指摘する。提出早期化も開示内容の整理・合理化と一体で検討すべきとの立場を示す。",
            "sourceIds": [
              "source-fsa-disclosure-wg6-2026"
            ],
            "articleIds": [
              "article-fsa-disclosure-wg6-2026"
            ]
          }
        ],
        "conclusion": "2026年開示府令改正による負担軽減を利用しつつ、将来の合理化は事業報告と有報の単純な一本化に限定せず、媒体ごとの役割、重複排除・参照、重要情報の所在、保証水準、総会前の利用可能性を含む開示体系全体として検討する。",
        "exception": "金融審議会第6回資料に示されたNBIM・発行会社側委員等の意見は検討材料であり、WGの合意や現行ルールではない。",
        "uncertain": "会社法制見直しと金融審議会の検討を通じ、どの情報をどの媒体へ置くか、参照方式や提出時期をどこまで制度化するかは未確定。",
        "sourceIds": [
          "source-fsa-disclosure-ordinance-2026",
          "source-moj-company-law-interim-2026",
          "source-fsa-disclosure-wg6-2026"
        ]
      },
      {
        "id": "agm-beneficial-shareholder",
        "title": "実質株主を会社がどう把握するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "中間試案で検討されている会社からの確認制度・株主側の通知制度を追い、成立までは現行の大量保有報告・株主名簿等の枠組みで対応する。",
        "exception": "中間試案は現行の法的義務ではない。",
        "uncertain": "対象株主、照会・回答義務、制裁等の最終設計は今後の審議次第。",
        "sourceIds": [
          "source-moj-company-law-interim-2026"
        ]
      },
      {
        "id": "agm-virtual-reform",
        "title": "バーチャル株主総会の会社法上の規律はどう変わるか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "中間試案のバーチャル株主総会に関する実施要件・手続・決議取消しの特則等を追う。",
        "exception": "現時点の開催可否は現行法・産業競争力強化法等の現行制度を基準に判断する。",
        "uncertain": "会社法へどの範囲を取り込むかは未確定。",
        "sourceIds": [
          "source-moj-company-law-interim-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-agm-pre-disclosure-2026",
      "source-fsa-disclosure-ordinance-2026",
      "source-moj-company-law-interim-2026",
      "source-fsa-disclosure-wg6-2026"
    ],
    "practicalImpacts": [
      "株主総会日程・基準日",
      "有価証券報告書・事業報告",
      "招集通知・定款",
      "IR・投資家対応",
      "実質株主・アクティビスト対応",
      "バーチャル株主総会"
    ]
  },
  {
    "slug": "generative-ai-ip-principle-code",
    "title": "生成AI知財プリンシプル・コード",
    "categories": [
      "AI・デジタル",
      "知的財産",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年8月25日に公表された生成AI知財プリンシプル・コードについて、対象事業者、コンプライ・オア・エクスプレイン、概要開示、権利者・利用者からの照会対応、社内の実装準備を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "内閣府知的財産戦略推進事務局は2026年8月25日、生成AIの技術進歩と知的財産権保護の両立を目的とするプリンシプル・コードを公表した。法的拘束力を持つ規制ではなく、生成AI事業者が原則を実施するか、実施しない場合は理由を説明するコンプライ・オア・エクスプレイン型のソフトローである。",
      "対象は生成AIシステムを構築して公衆へ提供する開発者と、生成AIシステムをアプリケーション等へ組み込んで公衆へサービス提供する提供者を中心とする。日本向けに提供する海外事業者も射程に入る。単なる社内利用や受託開発と外販サービスを同じ扱いにせず、実際の提供形態で該当性を確認する。",
      "原則は、モデル・学習・知財保護措置等の概要開示、権利侵害を主張する者からの照会対応、生成物と類似するコンテンツに関する利用者からの照会対応を柱とする。受入れ届出の開始時期は公式ページで別途案内するとされているため、現時点では届出開始を前提にしない。"
    ],
    "currentSummary": {
      "facts": [
        "2026年8月25日に最終版のプリンシプル・コードと概要開示対象事項の具体例が公式に公表された。",
        "コードは法的拘束力や罰則によるハードローではなく、コンプライ・オア・エクスプレイン方式で原則への対応状況を外部に説明する仕組みを採る。",
        "原則1は透明性と知的財産権保護のための概要開示、原則2は権利侵害を主張する者からのURL等を用いた開示要求への対応、原則3は生成物と同一・類似するコンテンツがある場合の利用者からの照会対応を扱う。",
        "コード受入れに関する内閣府への届出開始時期は、公式ページで別途知らせるとされている。"
      ],
      "interpretations": [
        "自社が対象になるかは、AIモデルを自社開発したかだけでは決まらない。外部モデルを組み込んだサービスを顧客へ提供する場合も、提供者としての該当性を確認する必要がある。",
        "法務・知財部門は、公開情報の作成だけでなく、学習データ・モデル来歴・知財保護措置を説明できる社内情報の所在、権利者や利用者からの照会を受け付ける窓口とエスカレーションを整える必要がある。",
        "コードの直接対象外となるAI利用企業でも、ベンダーの開示・照会体制を調達・契約・知財DDの評価材料として使う余地がある。"
      ],
      "implications": [
        "自社サービスが生成AI開発者・提供者のどちらに該当し得るかを製品・サービス単位で棚卸しする。",
        "原則1の開示候補について、公開可能情報、営業秘密・契約上非開示の情報、エクスプレインが必要な情報を分ける。",
        "権利者・利用者から学習データ等に関する照会を受けた場合の本人確認、受付、技術部門への照会、回答承認、記録保存を設計する。",
        "受入れ届出の開始時期と公式様式の公表を継続確認する。"
      ],
      "uncertain": [
        "受入れ届出の開始時期は2026年9月3日時点で別途公表待ちである。",
        "個別企業がどこまでの情報を開示し、どの事項をエクスプレインするかは、営業秘密、第三者との契約、技術的確認可能性を踏まえた個別判断となる。"
      ]
    },
    "issues": [
      {
        "id": "ai-ip-code-scope",
        "title": "自社はプリンシプル・コードの対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "公衆向けに生成AIシステムを構築・提供する開発者、または生成AIを組み込んだサービスを公衆へ提供する提供者に当たるかを、実際の提供形態から確認する。",
        "exception": "社内利用、グループ内利用、受託開発等は外部提供と区別して検討する。",
        "uncertain": "複合サービスやOEM等の境界事例では、コード本文・具体例とサービス実態を突合する。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-code-disclosure",
        "title": "原則1の概要開示をどう準備するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "モデル・学習・知財保護措置等について、公開できる概要、開示できない理由、参照URLを整理し、ウェブ上の説明と社内根拠を対応させる。",
        "exception": "営業秘密や第三者との秘密保持義務等により開示できない事項は、エクスプレインの要否を検討する。",
        "uncertain": "具体的な開示粒度は事業・契約・技術構成に左右される。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-code-rightsholder",
        "title": "権利者からの照会にどう対応するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "権利行使を準備する者等からURL等を示した照会を受けることを想定し、受付から技術確認、回答、記録までの担当と手順を用意する。",
        "exception": "技術的に確認できる情報や回答可能範囲には限界があり得るため、コードの例外・説明の扱いを確認する。",
        "uncertain": "個別照会でどこまで調査可能かは学習データの管理方法等に依存する。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-code-user-inquiry",
        "title": "生成AI利用者からの類似コンテンツ照会にどう対応するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "生成物と同一・類似する既存コンテンツが示された場合の照会受付と回答ルートを、権利者照会と混同せずに設計する。",
        "exception": "類似性の法的評価そのものと、学習データに含まれるか等の事実確認を分ける。",
        "uncertain": "技術的な追跡可能性や保有ログの範囲によって回答可能性が変わる。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      },
      {
        "id": "ai-ip-code-acceptance",
        "title": "コンプライ・オア・エクスプレインと受入れ届出をどう進めるか",
        "status": "pending",
        "stage": "effective",
        "views": [],
        "conclusion": "原則ごとに実施・説明の方針を決め、対外説明の根拠を保存する。内閣府への受入れ届出は開始時期の公式案内を待つ。",
        "exception": "コードは法令上の義務ではないが、受入れ表明後の説明の整合性や取引先からの評価を考慮する。",
        "uncertain": "届出開始時期、様式、一覧公表の運用詳細は今後の公式案内を確認する。",
        "sourceIds": [
          "source-ai-ip-principle-code-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-ai-ip-principle-code-2026"
    ],
    "practicalImpacts": [
      "生成AIサービスの該当性判定",
      "モデル・学習情報の対外開示",
      "知財保護措置の説明",
      "権利者・利用者の照会窓口",
      "AIベンダー選定・契約",
      "受入れ表明・届出準備"
    ]
  },
  {
    "slug": "ai-legal-support-attorney-act",
    "title": "AI法務業務支援・弁護士法72条",
    "categories": [
      "AI・デジタル",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年8月21日の法務省ガイドラインを基礎に、AI等の法務業務支援サービスと弁護士法72条の関係を、事件性、サービスの設計・機能、価値中立性、ガバナンス、利用企業のベンダー選定まで整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "法務省は2026年8月21日、2023年の契約書等関連業務支援サービスに関するガイドラインを補完・拡充し、ビジネス分野のAI等法務業務支援サービス全般と弁護士法72条との関係を整理する新ガイドラインを公表した。併せて今後のルールメイキングのロードマップも公表している。",
      "サービスが事件性のある案件に関する法律事務を取り扱うものと評価されるかは、単に生成AIを使うかどうかではなく、対象業務、設計、機能、表示、利用状況、提供者が把握した不適切利用への対応等を踏まえて検討する。",
      "利用企業側でも、AI法務サービスの用途を社内で限定し、紛争案件等をどこで弁護士へ切り替えるか、ベンダーがどのような利用制限・インシデント対応・ログ分析・エスカレーションを設けているかを確認する意味がある。"
    ],
    "currentSummary": {
      "facts": [
        "2026年8月21日の新ガイドラインは、2023年ガイドラインの契約書の作成・審査・管理という範囲を超え、ビジネス分野のAI等法務業務支援サービス一般を念頭に弁護士法72条との関係を整理する。",
        "法務省は同日に、AI等を活用した法務業務・支援の将来像を見据えたルールメイキングのロードマップも公表し、ガイドラインの範囲を超える継続検討を予定している。",
        "実務解説では、通常の企業法務に伴うリサーチ、法的問題点の検討、書面の作成・審査・管理、コンプライアンス、内部通報等の内部調査、新規業務スキーム、株主総会・取締役会等の支援について、サービス設計・機能・ガバナンスを踏まえた価値中立性の考え方が重要と整理されている。",
        "事件性のある案件での利用に特化した設計・機能や、不適切利用を認識しながら合理的な対応を取らずに提供を続ける場合は、弁護士法72条との関係でリスクが高まる。"
      ],
      "interpretations": [
        "利用者がプロンプトを入力する形式であっても、サービス側に法的助言等を自動生成する機能が組み込まれている場合、提供者側の行為として評価され得るため、『ユーザーが操作しているだけ』という説明に依存しない設計が必要になる。",
        "価値中立性はディスクレーマーだけで作れるものではなく、サービスが何を目的に設計され、どの機能を持ち、事件性のある利用を把握したとき何をするかを一体で見る必要がある。",
        "利用企業は、日常法務のAI利用と、対立当事者が存在する紛争・交渉・訴訟対応を分け、後者へ移行した時点の弁護士関与ルールを明文化すると運用しやすい。"
      ],
      "implications": [
        "AI法務サービスごとに想定用途と禁止・要承認用途を整理し、紛争案件や対外交渉に入る場合のエスカレーションを決める。",
        "ベンダー選定では、サービスの設計目的、出力機能、利用制限、警告、ログ・フィードバックの監視、違反利用を把握した場合の停止・相談案内を確認する。",
        "サービス提供者は、営業資料・UI・ディスクレーマー・利用規約と実際の機能が矛盾しないようにレビューする。",
        "法務部門・社内弁護士が利用する場合でも、AI出力を誰が精査し、どの案件で外部弁護士へ切り替えるかを業務手順に落とす。"
      ],
      "uncertain": [
        "ガイドラインは弁護士法72条に関する基本的な考え方を示すもので、個別サービスの適法性を一律に保証するものではない。",
        "AI技術・サービス形態の変化を踏まえたルールメイキングはロードマップに沿って継続されるため、将来の制度・ガイドライン更新を追う必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ai-legal-incident-scope",
        "title": "どの利用から『事件性』が問題になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "通常の企業法務支援と、権利義務の争い・疑義が顕在化した案件の処理を分け、後者を念頭に置いたサービス設計・利用かを確認する。",
        "exception": "単に法的論点を扱うだけで直ちに事件性のある法律事務になるわけではなく、案件の性質とサービスの実態を確認する。",
        "uncertain": "境界事例は契約関係、当事者間の対立状況、利用目的等によって変わる。",
        "sourceIds": [
          "source-moj-ai-legal-support-guideline-2026"
        ]
      },
      {
        "id": "ai-legal-value-neutral",
        "title": "サービスの価値中立性をどう判断するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "事件性のある案件での利用を目指した設計か、そうした利用に特化した機能を持つか、不適切利用を抑えるガバナンスがあるかを一体で確認する。",
        "exception": "警告や規約だけを置いても、サービス自体が紛争処理に特化した設計・機能であれば十分とは限らない。",
        "uncertain": "新しいエージェント機能等への具体的な当てはめはサービス実装に応じて検討する。",
        "sourceIds": [
          "source-moj-ai-legal-support-guideline-2026"
        ]
      },
      {
        "id": "ai-legal-governance",
        "title": "提供者にどのようなガバナンスが必要か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "適切な用途表示、利用制限、問い合わせ・フィードバック等から把握した不適切利用への合理的対応、必要に応じた利用停止や弁護士相談案内等を設計する。",
        "exception": "全プロンプトを常時監視することと、把握した不適切利用を放置しないことは分けて考える。",
        "uncertain": "必要な措置の具体的水準はサービスのリスクと利用形態による。",
        "sourceIds": [
          "source-moj-ai-legal-support-guideline-2026"
        ]
      },
      {
        "id": "ai-legal-user-procurement",
        "title": "利用企業はベンダー選定・社内利用をどう設計するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "用途、禁止用途、弁護士への切替基準と、ベンダーの設計・機能・ガバナンスを選定時に確認し、社内ルールへ反映する。",
        "exception": "社内弁護士が精査する利用やグループ内支援には別の整理があり得るため、利用主体と業務を分ける。",
        "uncertain": "自社固有の業務フローや契約条件に応じて適切な統制は変わる。",
        "sourceIds": [
          "source-moj-ai-legal-support-guideline-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-ai-legal-support-guideline-2026"
    ],
    "practicalImpacts": [
      "AI法務ツールのベンダー審査",
      "社内AI利用ルール",
      "紛争案件の弁護士エスカレーション",
      "サービスUI・利用規約・営業表示",
      "インシデント対応・利用停止",
      "法務AIの製品設計・ガバナンス"
    ]
  },
  {
    "slug": "whistleblower-protection-internal-reporting",
    "title": "公益通報者保護法・内部通報制度",
    "categories": [
      "危機管理・コンプライアンス",
      "労務",
      "契約"
    ],
    "summary": "公益通報者保護法と内部通報制度について、2026年12月1日施行の改正法・法定指針を基礎に、通報窓口、従事者指定、調査・是正、フリーランス対応、通報妨害・通報者探索、不利益取扱いの防止まで整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2025年6月11日に公布された改正公益通報者保護法は2026年12月1日に施行される。消費者庁は2026年3月31日に改正後の法定指針と指針の解説を公表し、同年5月以降はQ&Aや支援資料も更新している。",
      "改正では、公益通報者に現役・退任後1年以内のフリーランスを加え、通報妨害と通報者探索を禁止し、一定の不利益取扱いについて通報との因果関係を推定する仕組みや刑事罰を導入する。事業者側では従事者指定、内部通報体制、周知、独立性・利益相反排除、調査・是正の運用を見直す必要がある。",
      "内部通報制度の実務では、窓口の設置だけで足りない。誰を従事者として指定したかを記録し、幹部関与案件の独立性を確保し、外部通報を認知した場合にも必要な調査・是正へ切り替え、不利益取扱いを行う場合には正当な理由と意思決定過程を証拠化することが重要になる。"
    ],
    "currentSummary": {
      "facts": [
        "2025年改正法は2025年6月11日に公布され、2026年12月1日に施行される。",
        "消費者庁は2026年3月31日に改正後の法定指針と指針の解説を正式公表した。",
        "改正法は、特定受託業務従事者（フリーランス）と業務委託終了後1年以内の元フリーランスを保護対象に加え、契約解除、取引停止、報酬減額等の不利益取扱いを禁止する。",
        "正当な理由のない通報妨害・通報者探索は禁止され、一定の解雇等特定不利益取扱いについて通報後1年以内は通報を理由としたものと推定する規定が設けられる。",
        "従事者指定義務の履行確保について命令、立入検査、罰則が整備され、不利益取扱いの一部にも刑事罰が導入される。"
      ],
      "interpretations": [
        "従事者指定は、守秘義務と罰則の対象となり得る地位であることを本人に明らかにする方法で行い、氏名・所属・指定日等を記録する運用が安全である。",
        "内部窓口を経由しない通報や行政機関・報道機関等への外部通報を会社が認知した場合も、調査・是正が必要かを判断し、必要なら幹部からの独立性と利益相反排除を確保する。",
        "フリーランスが社内イントラネットへアクセスできない場合、窓口・手続・保護内容を業務委託時の書面等で周知するなど別の導線が必要になる。",
        "通報後の配転・評価・懲戒等は、改正法の推定規定の対象範囲だけでなく、一般的な不利益取扱い禁止との関係も踏まえ、正当な理由と検討過程を文書で残す必要がある。"
      ],
      "implications": [
        "内部通報規程、窓口案内、従事者指定書、受付票、調査手順を改正法対応版へ更新する。",
        "フリーランス・元フリーランスを含む対象者に窓口と保護内容が届くよう周知経路を見直す。",
        "幹部関与案件、外部通報を認知した案件について独立性確保と利益相反チェックを実装する。",
        "通報者に関する人事・契約上の措置では、決裁前に通報との因果関係、代替措置、客観資料を確認し記録する。",
        "2026年12月1日の施行までに研修、社内規程、委託先への案内、記録保存方法を一体で整備する。"
      ],
      "uncertain": [
        "改正法施行後の立入検査・命令・刑事罰を含む具体的な執行運用は今後の事例蓄積を確認する必要がある。",
        "個別の人事・契約措置が『不利益な取扱い』に当たるか、通報との因果関係が否定できるかは具体的事情による。"
      ]
    },
    "issues": [
      {
        "id": "whistleblower-system-duties",
        "title": "内部通報体制と従事者指定をどう整備するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "常時使用する労働者が300人を超える事業者は法定の体制整備義務・従事者指定義務に沿って、窓口、指定、独立性、調査・是正、利益相反排除、記録・周知を実装する。",
        "exception": "300人以下の事業者では法上の努力義務となる事項があるが、通報者保護やリスク管理の観点から制度整備の必要性は別途検討する。",
        "uncertain": "個別組織で必要な独立性や外部窓口の設計は規模・事業特性・通報リスクによる。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "whistleblower-protected-persons",
        "title": "フリーランス等の保護対象拡大にどう対応するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年12月1日以降は現役・業務委託終了後1年以内の特定受託業務従事者も保護対象となるため、窓口利用、周知、不利益取扱い防止を委託先管理に組み込む。",
        "exception": "誰が特定受託業務従事者に該当するかは契約名称ではなく実態と法定要件から確認する。",
        "uncertain": "グループ横断窓口や多段階委託での対象者への周知方法は各社の契約・IT環境に応じて設計する。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "whistleblower-obstruction-identification",
        "title": "通報妨害・通報者探索をどう防ぐか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "正当な理由のない通報妨害と通報者探索を禁止するルールを社内規程・研修・調査手続に反映し、違反があれば懲戒その他の措置をとれる体制を整える。",
        "exception": "調査・是正等に必要な範囲で通報者の特定につながる行為を行う場面では、目的と必要性を明確にし、情報共有範囲を限定する。",
        "uncertain": "『正当な理由』の具体的な境界は個別事案と今後の運用に依存する。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "whistleblower-retaliation",
        "title": "通報後の不利益取扱いをどう管理するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "公益通報を理由とする解雇・懲戒・減給・不利益な配置変更等を避け、通報後の人事・契約措置は客観的理由と意思決定資料を確認して通報との因果関係を検証する。",
        "exception": "改正法の1年間の推定規定は一定の解雇等特定不利益取扱いに適用されるが、それ以外の措置も一般の不利益取扱い禁止の対象になり得る。",
        "uncertain": "個別措置が通報を理由とするものかの認定は時系列、比較対象、従前評価、決裁過程等の事実関係に左右される。",
        "sourceIds": [
          "source-caa-whistleblower-amendment-2025",
          "source-caa-whistleblower-guideline-2026"
        ]
      },
      {
        "id": "whistleblower-external-report-response",
        "title": "外部通報を認知した場合に何をするか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "行政機関・報道機関等への通報や窓口外の内部通報を認知し、調査・是正等の対応が必要な場合は、独立性、調査・是正、利益相反排除の措置を講ずる。",
        "exception": "会社が外部通報の存在を認知していない段階で同じ対応を行うことまで当然に求められるわけではない。",
        "uncertain": "外部通報の存在又は可能性をどの時点で認知したと評価するかは事案ごとの事実関係による。",
        "sourceIds": [
          "source-caa-whistleblower-guideline-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-caa-whistleblower-amendment-2025",
      "source-caa-whistleblower-guideline-2026"
    ],
    "practicalImpacts": [
      "内部通報規程・窓口運用",
      "従事者指定・守秘義務",
      "フリーランスへの周知",
      "通報妨害・通報者探索防止",
      "人事・契約上の不利益取扱い管理",
      "独立性・利益相反排除",
      "調査・是正・記録保存"
    ]
  },
  {
    "slug": "economic-security-information-clearance",
    "title": "重要経済安保情報・セキュリティクリアランス",
    "categories": [
      "危機管理・コンプライアンス",
      "労務",
      "契約"
    ],
    "summary": "重要経済安保情報保護活用法に基づくセキュリティ・クリアランス制度について、適合事業者認定、適性評価、人事労務、情報管理、委託・下請、事故対応、初年度の運用実績を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "重要経済安保情報保護活用法は2024年5月17日に公布され、2025年5月16日に施行された。内閣府は2025年5月2日に行政機関向け・適合事業者向けのガイドラインとQ&Aを公表し、民間事業者が重要経済安保情報を取り扱うための認定・人員・情報管理の実務を具体化した。",
      "民間企業が重要経済安保情報を取り扱うには、事業者としての適合性と、実際に情報を扱う従業者の適性評価を分けて考える必要がある。適合事業者には内部規程、教育、施設・設備、情報管理体制等が求められ、適性評価には本人の同意と取得情報の目的外利用禁止が伴う。",
      "2026年6月26日の初回国会報告では、2025年5月16日から12月31日までに9機関で20件の情報指定、2機関で18件の適性評価、217件の適性評価調査依頼があった一方、同期間の適合事業者認定は0件だった。制度は施行済みだが、民間活用は初年度時点では立ち上がり段階にあったことが分かる。"
    ],
    "currentSummary": {
      "facts": [
        "重要経済安保情報保護活用法は2025年5月16日に施行された。",
        "内閣府は2025年5月2日に運用基準、行政機関向け・適合事業者向けガイドライン、Q&Aを公表した。",
        "適合事業者向けガイドラインは、認定申請、内部規程、教育、施設、情報の受領・作成・運搬・保管・廃棄、適性評価対象者の管理、事故対応等を扱う。",
        "2025年中の重要経済安保情報の指定は9機関20件で、年末時点の指定は19件。適性評価の実施は2機関18件、適性評価調査の依頼は11機関217件だった。",
        "2025年中の適合事業者認定は0件で、同意拒否3件、同意取下げ2件が報告されている。"
      ],
      "interpretations": [
        "セキュリティ・クリアランス対応は、法務・情報セキュリティだけで完結せず、人事、調達、施設管理、事業部門を含む社内体制の設計が必要になる。",
        "適性評価への同意は任意かつ真摯である必要があり、同意しない事実や評価結果等の情報は重要経済安保情報の保護以外の目的に利用できないため、採用・配転・評価・懲戒等との情報遮断を設計する必要がある。",
        "外部委託先の専門家や事業者が重要経済安保情報を扱う場合、元請の適合事業者認定だけで足りない場面があり、委託先の認定と行政機関を起点とした情報提供、契約上の保護措置を検討する。",
        "初回国会報告の適合事業者認定0件は制度が機能していないことを意味するものではなく、施行初年度の対象期間が短く、民間利用がなお立ち上げ段階であったことを示す運用データとして読むのが適切である。"
      ],
      "implications": [
        "重要経済安保情報を扱う可能性のある案件・官公庁取引を棚卸しし、認定取得の要否と時期を確認する。",
        "内部規程、情報管理責任者、アクセス権、教育、施設・端末・文書管理、事故報告の体制を適合事業者向けガイドラインと突合する。",
        "適性評価候補者の選定、同意取得、結果通知、個人情報保管、人事部門との情報分離、配転判断の手順を整える。",
        "委託・再委託で情報を扱う主体と情報の流れを洗い出し、行政機関との契約、委託先認定、情報提供経路を事前に確認する。",
        "国会報告やQ&Aの更新を追い、適合事業者認定と民間での取扱い実績が拡大した段階で運用を見直す。"
      ],
      "uncertain": [
        "2026年の適合事業者認定件数や民間取扱いの最新状況は、次回の公式国会報告等で更新確認が必要である。",
        "適性評価結果を踏まえた個別の配転・採用判断が目的外利用に当たるかは、情報の取得経路、目的、業務上の必要性等に左右される。",
        "元請・下請・外部専門家を含む具体的な情報提供・契約形態は、行政機関の案件運用と契約条件により異なり得る。"
      ]
    },
    "issues": [
      {
        "id": "economic-security-qualified-business",
        "title": "適合事業者の認定に何が必要か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "重要経済安保情報を民間事業者が取り扱う場合は、ガイドラインに沿って組織体制、内部規程、教育、施設・設備、情報管理等を整え、行政機関による適合事業者認定を受ける。",
        "exception": "重要経済安保情報に該当しない一般の機密情報や他制度の秘密情報には、それぞれ別の保護・契約ルールが適用される。",
        "uncertain": "個別案件で認定申請をいつ開始し、どの程度の設備・体制が必要かは扱う情報・契約先行政機関との調整による。",
        "sourceIds": [
          "source-cao-security-clearance-law-2024",
          "source-cao-security-clearance-guidelines-2025"
        ]
      },
      {
        "id": "economic-security-suitability-assessment",
        "title": "適性評価の対象者と同意をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "重要経済安保情報を実際に取り扱う従業者について、本人の任意かつ真摯な同意を得た上で適性評価を進め、対象者名簿・質問票・結果等を限定的に管理する。",
        "exception": "取扱い業務に就かない者まで一律に適性評価へ回すのではなく、業務上の必要性に基づいて候補者を選定する。",
        "uncertain": "候補者選定の具体的な人事基準や業務変更時の再評価の要否は個別事情と行政機関の運用を確認する。",
        "sourceIds": [
          "source-cao-security-clearance-law-2024",
          "source-cao-security-clearance-guidelines-2025"
        ]
      },
      {
        "id": "economic-security-hr-purpose-limit",
        "title": "適性評価情報を人事でどこまで使えるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "同意の有無、適性評価結果その他取得した個人情報は重要経済安保情報の保護以外の目的に利用・提供せず、採用、配転、評価、懲戒等への利用を制限する。",
        "exception": "重要経済安保情報を扱えないことにより業務上必要な配置変更等を検討する場面でも、評価結果そのものを別目的に使うことと、業務遂行上の配置判断を区別して検討する。",
        "uncertain": "個別の配置変更や採用判断が許容されるかは業務上の必要性、不利益の程度、取得情報の利用方法等により評価が分かれ得る。",
        "sourceIds": [
          "source-cao-security-clearance-law-2024",
          "source-cao-security-clearance-guidelines-2025"
        ]
      },
      {
        "id": "economic-security-outsourcing",
        "title": "委託・再委託で重要経済安保情報をどう扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "外部事業者が重要経済安保情報を扱う場合は、誰が適合事業者・従業者として要件を満たすかを確認し、行政機関を起点とする情報提供と契約上の保護措置を設計する。",
        "exception": "派遣労働者、役員、外部専門家等は立場により『従業者』該当性や別途の適合事業者認定の要否が異なる。",
        "uncertain": "元請・下請間の具体的な三者契約や情報提供方法は案件ごとの行政機関運用を確認する必要がある。",
        "sourceIds": [
          "source-cao-security-clearance-guidelines-2025"
        ]
      },
      {
        "id": "economic-security-operation-status",
        "title": "制度は実際にどこまで運用されているか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "毎年の国会報告で情報指定、適性評価、適合事業者認定等の実績を確認し、制度の民間利用の進展を追う。",
        "exception": "初回報告は2025年5月16日から12月31日までの短い対象期間であり、その数値を恒常的な運用規模とみなさない。",
        "uncertain": "2026年以降の適合事業者認定と民間取扱いの拡大状況は次回以降の公表を待つ。",
        "sourceIds": [
          "source-cao-security-clearance-report-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-cao-security-clearance-law-2024",
      "source-cao-security-clearance-guidelines-2025",
      "source-cao-security-clearance-report-2026"
    ],
    "practicalImpacts": [
      "適合事業者認定",
      "適性評価・本人同意",
      "人事情報の目的外利用制限",
      "機密情報管理・アクセス制御",
      "教育・施設・文書管理",
      "委託・再委託契約",
      "事故報告・監査",
      "官公庁取引・経済安全保障"
    ]
  },
  {
    "slug": "worker-status-outsourcing-platform",
    "title": "労働基準法・労働者性判断基準",
    "categories": [
      "労務",
      "契約"
    ],
    "summary": "業務委託・フリーランス・プラットフォームワーカーについて、労働基準法上の労働者性の現行判断基準と、厚生労働省研究会で進む判断基準見直し、AI・アルゴリズム管理を含む新しい働き方の論点を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "労働基準法上の労働者に当たるかは、契約書に『業務委託』『請負』『準委任』と書かれているかだけでは決まらず、実際の労務提供、指揮監督、報酬その他の事情を総合して判断される。現在は昭和60年の労働基準法研究会報告で整理された使用従属性等の判断要素が行政解釈・司法判断で一般的に用いられている。",
      "厚生労働省は2025年5月から『労働基準法における「労働者」に関する研究会』を開催し、約40年前に整理された判断基準が働き方の多様化、プラットフォーム就労、AI・アルゴリズムによる管理等へどう対応すべきかを検討している。2026年1月の第5回でこれまでの議論の整理（案）を検討し、同年7月の第6回ではプラットフォームワーカー調査を判断要素に沿って分析した。",
      "企業実務では、契約名称だけでなく、仕事を断る自由、業務遂行への指示、時間・場所の拘束、代替性、報酬設計、機材負担、専属性、GPS・評価・案件配分等のデジタル管理を、実態に即して確認・記録する必要がある。研究会資料は現時点で新しい法的基準を確定したものではないため、現行基準による判断と見直し動向を分けて追う。"
    ],
    "currentSummary": {
      "facts": [
        "労働基準法第9条は労働者を『事業又は事務所に使用される者で、賃金を支払われる者』と定義している。",
        "現在の労働者性判断では、指揮監督下の労働と報酬の労務対償性からなる使用従属性を中心に、事業者性や専属性等も含め、契約形式ではなく個別事案の実態を総合評価する考え方が一般的に用いられている。",
        "厚生労働省の労働者性研究会は2025年5月に開始され、2026年1月の第5回で『これまでの議論の整理（案）』を検討し、2026年7月の第6回でプラットフォームワーカーの働き方等に関する調査を追加して検討を継続している。",
        "第6回資料では、仕事の諾否、指揮命令、AI・アルゴリズムによる参照ルート、GPS等の位置情報、定期報告、研修、就業場所・時間、代替性、報酬、機材負担等が昭和60年報告の判断要素に沿って整理された。"
      ],
      "interpretations": [
        "業務委託契約の作成時だけで労働者性リスクを管理するのではなく、契約締結後の指示、評価、案件配分、報酬変更、稼働管理等の運用実態も継続して確認する必要がある。",
        "GPS、推奨ルート、評価スコア、案件配分等のデジタル機能は、それ自体で労働者性を決めるものではないが、実際にどの程度ワーカーの行動を拘束・誘導しているかという事実を確認する必要がある。",
        "研究会で議論されている組織への組み入れ、契約内容の一方的・定型的決定、経済的従属性、推定規定等は見直し候補の論点であり、現行基準に追加された確定要件として扱わない。"
      ],
      "implications": [
        "業務委託・フリーランス起用時のチェック項目に、諾否の自由、具体的指示、時間・場所の拘束、代替性、報酬、機材負担、専属性を含める。",
        "プラットフォームやアプリを介する業務では、GPS、レーティング、推奨ルート、案件提示・停止、インセンティブ等が実際にワーカーの行動へどう作用するかを仕様と運用の両面から確認する。",
        "契約書の文言と実際の運用が乖離しないよう、現場部門の指示方法、評価・アカウント管理、クライアントからの直接指示を定期的に点検する。",
        "M&A・労務DDでは、外注・個人事業主の契約一覧だけでなく、実際の稼働管理や報酬・評価データまで確認対象に含める。",
        "研究会の取りまとめや今後の制度対応が具体化した場合に、契約・運用チェックリストを現行法判断と分けて更新する。"
      ],
      "uncertain": [
        "第5回・第6回の研究会資料は議論の整理や検討素材であり、新しい労働者性判断基準を確定したものではない。研究会の最終的な取りまとめ、判断要素の修正、推定規定等の扱いは今後の検討を待つ必要がある。",
        "第6回で扱われたプラットフォームワーカー調査は、事業者・業界団体からの回答が中心であることなどの留意点が示されており、個々の業界・サービスへ一般化するときは追加の事実確認が必要である。"
      ]
    },
    "issues": [
      {
        "id": "worker-status-current-criteria",
        "title": "現行の労働者性を何で判断するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "契約名称ではなく、指揮監督下の労働と報酬の労務対償性を中心とする使用従属性、事業者性、専属性等の事情を個別事案の実態から総合評価する。",
        "exception": "業務の性質や安全確保上当然に必要な指示・時間場所の指定など、存在する事実を直ちに指揮監督関係の根拠と評価できない場合がある。",
        "uncertain": "個別の事実をどの程度重く評価するかは業種・働き方・裁判例により異なり、形式的な点数評価では確定できない。",
        "sourceIds": [
          "source-labour-standards-act",
          "source-mhlw-worker-status-study5-2026"
        ]
      },
      {
        "id": "worker-status-criteria-review",
        "title": "労働者性の判断基準はどう見直されようとしているか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "厚生労働省研究会で、昭和60年報告の判断要素、業務の性質による指示・拘束の評価、組織への組み入れ、契約内容の一方的・定型的決定、経済的従属性、推定規定等について検討が続いている。",
        "exception": "研究会資料は検討段階であり、現時点の法的判断を置き換える新基準ではない。",
        "uncertain": "最終的にどの判断要素を維持・修正・追加するか、法令改正・行政解釈の変更等へつながるかは未確定。",
        "sourceIds": [
          "source-mhlw-worker-status-study5-2026",
          "source-mhlw-worker-status-study6-2026"
        ]
      },
      {
        "id": "worker-status-platform-management",
        "title": "AI・アルゴリズム管理を労働者性判断でどう見るか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "GPS、推奨ルート、評価、案件配分、報告、インセンティブ等について、機能の存在だけでなく、ワーカーの行動をどの程度拘束・誘導し、指示や監視として作用しているかを実態から確認する。",
        "exception": "安全確保、トラブル対応、サービス品質等のための機能や案内が直ちに労働者性を基礎付けるわけではなく、目的・義務性・不利益との結び付き等を個別に見る必要がある。",
        "uncertain": "デジタル管理を既存の判断要素へどう位置付け、どの程度重く評価するかは研究会で検討中であり、確定した新基準はまだない。",
        "sourceIds": [
          "source-mhlw-worker-status-study6-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-labour-standards-act",
      "source-mhlw-worker-status-study5-2026",
      "source-mhlw-worker-status-study6-2026"
    ],
    "practicalImpacts": [
      "業務委託契約・フリーランス起用",
      "労働者性チェックリスト",
      "プラットフォーム・アプリ設計",
      "GPS・評価・案件配分等の運用",
      "M&A・労務DD",
      "労基署対応・紛争予防"
    ]
  },
  {
    "slug": "occupational-safety-health-reform",
    "title": "労働安全衛生法・安全衛生管理",
    "categories": [
      "労務",
      "契約"
    ],
    "summary": "2025年改正の労働安全衛生法・作業環境測定法について、個人事業者等の安全衛生対策、小規模事業場のストレスチェック、化学物質対策などの段階施行を、企業の発注・労務・安全衛生管理の観点から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2025年5月14日に公布された改正法は、個人事業者等を安全衛生上の保護対象・義務主体として位置づける措置、職場のメンタルヘルス対策、化学物質対策、機械等の安全、高年齢労働者対策を段階的に導入する。",
      "個人事業者等に関する措置や一部の化学物質・機械安全措置は2026年に施行されている一方、労働者50人未満の事業場へのストレスチェック義務化は2028年4月1日施行であり、改正内容を一括して『施行済み』と扱わない。",
      "企業実務では、自社従業員の安全衛生管理だけでなく、同一場所で働く個人事業者等への措置、注文者としての対応、委託先・現場運用、ストレスチェック実施体制の準備まで確認対象が広がる。"
    ],
    "currentSummary": {
      "facts": [
        "「労働安全衛生法及び作業環境測定法の一部を改正する法律」（令和7年法律第33号）は2025年5月14日に公布され、一部を除き2026年から段階的に施行されている。",
        "改正法は、労働者と同じ場所で働く個人事業者等を保護対象・義務主体として位置づけ、注文者等や個人事業者等自身が講ずべき措置を定めた。",
        "労働者数50人未満の事業場について、従来努力義務だったストレスチェックが2028年4月1日から義務化される。",
        "化学物質による健康障害防止、機械等による労働災害防止、高年齢労働者の労働災害防止についても施行時期を分けて制度整備が進んでいる。"
      ],
      "interpretations": [
        "安全衛生対応は雇用労働者だけを見る運用では足りず、業務委託・個人事業者が同一現場で作業する場合の情報提供、危険防止措置、注文者側の役割も契約・現場運用と合わせて確認する必要がある。",
        "50人未満事業場のストレスチェック義務化は施行まで準備期間があるが、実施者、情報管理、面接指導、プライバシー保護等の運用設計を施行直前まで放置しない方がよい。",
        "改正項目ごとに施行時期が異なるため、法改正対応表では『改正法全体』ではなく、自社に関係する義務と施行日を分けて管理する必要がある。"
      ],
      "implications": [
        "個人事業者・一人親方・フリーランスが入場する現場の安全衛生ルールと注文者側の役割を点検する。",
        "業務委託契約や現場ルールに、安全情報の共有、保護具、立入・作業調整、事故時連絡等の運用が実態と整合しているか確認する。",
        "50人未満の事業場を含め、2028年4月1日のストレスチェック義務化に向けた実施体制・委託先・情報管理を準備する。",
        "化学物質・機械安全・高年齢労働者対策について、自社に該当する段階施行事項を一覧化する。"
      ],
      "uncertain": [
        "改正法には施行済み事項と将来施行事項が混在する。個別義務の適用時期は、厚生労働省の特設ページ、政省令、通達等の最新情報を項目ごとに確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ohs-independent-contractors",
        "title": "個人事業者等への安全衛生対策をどう実装するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "改正法により、労働者と同じ場所で働く個人事業者等が保護対象・義務主体として位置づけられ、注文者等を含む関係者に安全衛生上の措置が求められる。",
        "exception": "適用される措置は作業場所、設備、危険有害業務、当事者の立場等で異なるため、個人事業者との取引で一律に同じ義務が生じるわけではない。",
        "uncertain": "具体的な措置内容は対象業務・現場ごとに政省令、通達、厚生労働省資料を確認する必要がある。",
        "sourceIds": [
          "source-mhlw-ohs-amendment-2025"
        ]
      },
      {
        "id": "ohs-small-stress-check",
        "title": "50人未満事業場のストレスチェック義務化にどう備えるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "労働者数50人未満の事業場でも2028年4月1日からストレスチェックが義務化されるため、実施体制、情報管理、労働者対応等を準備する。",
        "exception": "2028年3月31日までは従来の扱いが続くため、将来義務を現在すでに施行済みの義務として扱わない。",
        "uncertain": "実務運用では今後の通達・マニュアル更新も確認する必要がある。",
        "sourceIds": [
          "source-mhlw-ohs-amendment-2025",
          "source-mhlw-small-stress-check-2026"
        ]
      },
      {
        "id": "ohs-phased-measures",
        "title": "化学物質・機械安全等の段階施行をどう追うか",
        "status": "authoritative",
        "stage": "under_revision",
        "views": [],
        "conclusion": "化学物質、機械等、高年齢労働者対策は施行日が分かれているため、改正項目ごとに自社への適用と施行日を確認する。",
        "exception": "改正法全体の公布日や代表的な施行日だけでは、各義務の現在地を判断できない。",
        "uncertain": "一部の下位法令・運用資料は順次更新されるため、継続確認が必要である。",
        "sourceIds": [
          "source-mhlw-ohs-amendment-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-mhlw-ohs-amendment-2025",
      "source-mhlw-small-stress-check-2026"
    ],
    "practicalImpacts": [
      "安全衛生規程",
      "業務委託・個人事業者管理",
      "現場入場・作業ルール",
      "ストレスチェック",
      "化学物質管理",
      "委託先・注文者対応"
    ]
  },
  {
    "slug": "gx-ets-emissions-trading",
    "title": "GX推進法・排出量取引制度（GX-ETS）",
    "categories": [
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年度から本格稼働したGX推進法上の排出量取引制度について、対象事業者、排出目標量・排出実績量の確認、排出枠の割当・保有・償却、移行計画、市場整備を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2025年改正GX推進法により排出量取引制度が法定化され、2026年4月1日から本格稼働した。原則として前年度までの3年度平均のCO2直接排出量が10万トン以上の事業者が対象となる。",
      "対象事業者は排出目標量等を届け出、登録確認機関の確認を受ける。政府から排出枠の割当てを受け、排出実績量を報告し、実績と同量の排出枠を保有・償却する。排出枠は事業者間で取引できる。",
      "2026年度は制度開始年であり、届出・算定・確認等の実務が本格化する一方、取引市場の詳細など今後具体化する部分もあるため、施行済みの法定義務と市場設計中の事項を分けて追う。"
    ],
    "currentSummary": {
      "facts": [
        "GX推進法の改正部分は2026年4月1日に施行され、排出量取引制度が本格稼働している。",
        "制度対象は原則として事業活動に伴うCO2の直接排出量が前年度までの3年度平均で10万トン以上の事業者である。",
        "制度対象者は排出目標量等の届出、登録確認機関による確認、排出実績量の報告、排出枠の保有・償却、移行計画の作成・提出等を行う。",
        "経済産業省はERMS、届出・算定・報告・移行計画等の各種マニュアル、登録確認機関一覧等を公開している。"
      ],
      "interpretations": [
        "対象判定は単純な連結売上やグループ総排出量ではなく法令上の事業者単位・密接関係者制度を確認する必要があり、グループ会社ごとの排出量と共同届出の可否を分けて整理する必要がある。",
        "法務・サステナビリティ部門だけでは完結せず、排出量算定、登録確認機関との契約、移行計画、排出枠管理、組織再編時の手続を横断して管理する必要がある。",
        "排出枠市場の参加・取引ルールは制度開始後も具体化が続くため、施行済み義務と市場運用の検討事項を同じ確度で扱わない。"
      ],
      "implications": [
        "自社・グループ各社の3年度平均直接排出量を確認し、制度対象判定と共同届出の検討を行う。",
        "ERMS、登録確認機関、届出・算定・報告・移行計画の担当部門と年間スケジュールを決める。",
        "M&A、会社分割、事業譲渡等で対象事業の帰属が変わる場合の排出枠・届出手続を事前に確認する。",
        "排出枠の不足・余剰と取引方針、内部統制、会計・契約上の扱いを市場整備の進展に合わせて更新する。"
      ],
      "uncertain": [
        "排出枠取引市場の参加者要件、取引手続、公正取引確保、流動性確保等には今後具体化される事項が残るため、経済産業省・GX推進機構の最新資料を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "gx-ets-scope",
        "title": "誰がGX-ETSの制度対象者になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "原則として前年度までの3年度平均のCO2直接排出量が10万トン以上の事業者が制度対象となり、事業開始時期や密接関係者との共同届出等の特則も確認する。",
        "exception": "企業グループ全体の合算だけで自動的に対象判定する制度ではなく、法令上の事業者単位と共同届出の要件を分けて確認する。",
        "uncertain": "組織再編・新設事業等では算定期間や帰属の確認が必要になる。",
        "sourceIds": [
          "source-gx-act",
          "source-meti-gx-ets-2026"
        ]
      },
      {
        "id": "gx-ets-compliance-cycle",
        "title": "届出・割当・報告・償却をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "排出目標量等の届出と確認、排出枠の割当、排出実績量の報告、排出枠の保有・償却、移行計画を一連の年間コンプライアンスとして管理する。",
        "exception": "制度初年度には通常年度と異なる経過的スケジュールがあるため、一般的な期限だけで処理しない。",
        "uncertain": "具体的な提出・確認実務はマニュアル更新を継続確認する。",
        "sourceIds": [
          "source-gx-act",
          "source-meti-gx-ets-2026"
        ]
      },
      {
        "id": "gx-ets-market",
        "title": "排出枠取引市場の整備をどう追うか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "排出枠は取引可能であり、GX推進機構を中心とした市場整備が進められているため、市場参加、取引手続、価格安定、公正取引等の具体化を継続確認する。",
        "exception": "法定制度が施行済みであることと、取引市場の詳細ルールがすべて確定していることは同義ではない。",
        "uncertain": "市場参加者要件、流動性確保、公正取引規制等の細部には今後具体化される事項がある。",
        "sourceIds": [
          "source-meti-gx-ets-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-gx-act",
      "source-meti-gx-ets-2026"
    ],
    "practicalImpacts": [
      "排出量算定・報告",
      "登録確認機関との契約",
      "排出枠管理・取引",
      "移行計画",
      "M&A・組織再編",
      "サステナビリティ・内部統制"
    ]
  },
  {
    "slug": "aml-kyc-criminal-proceeds",
    "title": "犯罪収益移転防止法・本人確認／AML",
    "categories": [
      "危機管理・コンプライアンス",
      "契約"
    ],
    "summary": "犯罪収益移転防止法について、2026年改正による口座不正利用・送金犯罪対策と、2027年4月に向けて厳格化される本人確認方法を、顧客管理・オンボーディング実務から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2026年6月10日公布の改正犯罪収益移転防止法は、預貯金通帳等の不正譲渡に対する罰則引上げ、送金犯罪の創設、架空名義口座を利用した新たな措置を定めた。前二者は2026年7月10日に施行され、架空名義口座関係は公布から1年以内の政令指定日から施行される。",
      "本人確認方法についても施行規則の改正が段階的に進み、2027年4月1日から対面・非対面の本人確認方法が厳格化される。事業者は現在使っている確認方法が将来も利用できるかを確認する必要がある。",
      "企業実務では、法務だけでなく顧客オンボーディング、本人確認システム、委託先、利用規約・業務フロー、疑わしい取引管理を一体で更新する必要がある。"
    ],
    "currentSummary": {
      "facts": [
        "犯罪収益移転防止法は2026年6月10日に改正法が公布され、預貯金通帳等の不正譲渡等に対する罰則引上げと送金犯罪の創設は2026年7月10日に施行された。",
        "架空名義口座を利用した新たな措置は、公布日から1年を超えない範囲内で政令で定める日から施行される。",
        "警察庁JAFICは2026年8月7日時点の犯罪収益移転防止法の概要と、2026年中の複数の施行規則改正・パブリックコメント結果を公開している。",
        "本人確認方法の厳格化に関する施行規則改正は段階的に行われ、2027年4月1日から全面施行される。"
      ],
      "interpretations": [
        "2026年法改正の罰則・口座対策と、本人確認方法を変える施行規則改正は同じAML領域でも別の対応トラックとして管理した方がよい。",
        "本人確認の改正は書面だけの規程改訂では足りず、対面窓口、eKYC、ICチップ読取、委託先API等の現行フローを棚卸しし、廃止される方法への依存を把握する必要がある。",
        "犯罪収益移転防止法の対象事業者・対象取引は業種ごとに異なるため、一般的な本人確認強化を全取引に機械的に適用するのではなく、自社の法定義務と任意のリスク管理を区別する。"
      ],
      "implications": [
        "現在採用している対面・非対面の本人確認方法を一覧化し、2027年4月1日以降も利用可能か確認する。",
        "本人確認サービス・eKYCベンダーとの契約、仕様、移行スケジュールを確認する。",
        "口座・送金サービスを扱う場合は、2026年改正の罰則・送金犯罪・架空名義口座対策が自社の不正利用対策やモニタリングに与える影響を確認する。",
        "法務・コンプライアンス・プロダクト・オペレーションで、本人確認記録、疑わしい取引、アカウント停止等の運用を接続する。"
      ],
      "uncertain": [
        "架空名義口座に関する新措置の具体的施行日は政令指定を待つ部分がある。本人確認実務も下位法令・警察庁資料の更新を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "aml-2026-account-remittance",
        "title": "2026年改正の口座・送金犯罪対策をどう見るか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "預貯金通帳等の不正譲渡等への罰則引上げと送金犯罪の創設は2026年7月10日に施行されており、関連サービスの不正利用対策で現行法として確認する。",
        "exception": "改正法の全項目が同日に施行されたわけではなく、架空名義口座関係は別の施行日となる。",
        "uncertain": "個別サービスでどの行為が構成要件に当たるかは事案ごとに確認する。",
        "sourceIds": [
          "source-npa-aml-amendment-2026"
        ]
      },
      {
        "id": "aml-fictitious-account",
        "title": "架空名義口座に関する新措置はいつ適用されるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "架空名義口座を利用した新たな措置は2026年改正法で設けられ、公布から1年を超えない範囲内で政令で定める日から施行される。",
        "exception": "2026年7月10日に施行済みの他の改正事項と混同しない。",
        "uncertain": "具体的な施行日と運用詳細は最新の政令・警察庁資料を確認する必要がある。",
        "sourceIds": [
          "source-npa-aml-amendment-2026"
        ]
      },
      {
        "id": "aml-identity-verification-2027",
        "title": "2027年4月の本人確認方法厳格化にどう対応するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "段階的な施行規則改正により本人確認方法が見直され、2027年4月1日から全面施行されるため、現行の対面・非対面確認方法を移行前に点検する。",
        "exception": "対象事業者・取引ごとに法定の取引時確認義務が異なるため、自社の対象範囲を前提に実装する。",
        "uncertain": "システム・委託先の具体的な移行方法は最新の警察庁資料と提供事業者の仕様を確認する。",
        "sourceIds": [
          "source-npa-aml-overview-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-npa-aml-amendment-2026",
      "source-npa-aml-overview-2026"
    ],
    "practicalImpacts": [
      "本人確認・eKYC",
      "顧客オンボーディング",
      "AML・疑わしい取引管理",
      "本人確認ベンダー契約",
      "不正送金・口座対策",
      "システム改修"
    ]
  },
  {
    "slug": "cyber-countermeasures-critical-infrastructure",
    "title": "サイバー対処能力強化法・重要インフラ対応",
    "categories": [
      "情報セキュリティ",
      "危機管理・コンプライアンス",
      "契約"
    ],
    "summary": "サイバー対処能力強化法の直接的な届出・報告義務と、2025年改正サイバーセキュリティ基本法に基づく重要インフラ統一基準・分野別安全基準の整備を切り分け、重要インフラ事業者とITベンダーの施行対応を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "重要電子計算機に対する不正な行為による被害の防止に関する法律（令和7年法律第42号、いわゆるサイバー対処能力強化法）は2025年5月23日に公布され、施行期日を定める政令により2026年10月1日施行とされている。",
      "企業の中核的な直接義務は、経済安全保障推進法上の特定社会基盤事業者のうち、特定重要電子計算機を使用する特別社会基盤事業者について、対象システムの届出と特定侵害事象等の報告を行うことである。",
      "直接義務者でないITベンダー、クラウド、SOC、MSSP、SIer、保守事業者等にも、顧客の法定報告を支える通知、ログ提供、調査協力、脆弱性対応等が契約・運用上波及し得る。政府によるアクセス・無害化は、民間企業にハックバックの権限を与えるものではない。",
      "2026年7月31日、サイバーセキュリティ戦略本部は、2025年改正サイバーセキュリティ基本法に基づく「重要インフラのサイバーセキュリティ対策のための統一基準」を決定した。統一基準は2026年10月1日施行予定で、サイバー対処能力強化法の届出・報告義務とは別の制度として管理する。"
    ],
    "currentSummary": {
      "facts": [
        "サイバー対処能力強化法は2025年5月16日に成立し、同月23日に公布された。施行期日を定める政令は施行日を2026年10月1日としている。",
        "内閣府は法律、施行期日政令、施行令、特別社会基盤事業者による特定侵害事象等の報告等に関する命令、基本方針をまとめて公表している。",
        "中核的な届出・報告義務は、特定社会基盤事業者であり、かつ特定重要電子計算機を使用する特別社会基盤事業者を中心に課される。",
        "2026年5月28日に、特別社会基盤事業者による特定侵害事象等の報告等に関する命令が公布された。",
        "2026年7月31日に重要インフラ統一基準が決定され、2026年10月1日施行予定とされている。これに伴い、重要インフラ行動計画の改定と従来の安全基準等策定指針の廃止も同日施行予定である。"
      ],
      "interpretations": [
        "対象判定は業種名だけで終えず、まず法人が特定社会基盤事業者に指定されているかを確認し、そのうえで指定事業に使用するシステムが特定重要電子計算機に当たるかをシステム単位で確認する必要がある。",
        "自社が法4条・5条の直接義務者でなくても、重要インフラ企業へクラウド、監視、保守等を提供する場合には、顧客の報告期限に対応できる通知・ログ・調査協力を契約で設計する必要が生じ得る。",
        "能動的サイバー防御という政策用語から、民間企業が攻撃者のシステムへ自由に侵入・無害化できると理解してはならない。民間の技術的対処は刑法や不正アクセス禁止法等との関係を個別に検討する必要がある。",
        "重要インフラ統一基準は、重要インフラ事業者等が分野横断で講ずべき対策を促進するための政府機関の施策に関する統一基準であり、サイバー対処能力強化法が特別社会基盤事業者に課す届出・報告等の直接義務と同一視しない。企業実務では、所管省庁・業界団体が統一基準を踏まえて整備する安全基準等まで追う。"
      ],
      "implications": [
        "自社・グループ会社の特定社会基盤事業者指定状況と、指定事業に使用するシステムを棚卸しする。",
        "対象となる可能性があるシステムについて、資産台帳、インシデント認知・判断、届出・報告の社内ルートを整備する。",
        "クラウド、SOC、MSSP、SIer、保守等の契約で、通知トリガー・期限、ログ保存・提供、原因調査、脆弱性・パッチ、再委託、当局対応協力を確認する。",
        "政府のアクセス・無害化制度と民間企業の許される防御行為を分け、独自の攻撃者追跡・侵入機能を導入する場合は刑法・不正アクセス禁止法等を確認する。",
        "自社の分野に適用される安全基準等について、重要インフラ統一基準と今後確定する安全基準等策定ガイドラインを踏まえた改定状況を確認し、ガバナンス、リスク管理、サプライチェーン対策等を更新する。"
      ],
      "uncertain": [
        "2026年9月3日時点では10月1日の中核規定施行前であり、届出除外対象、報告様式、制度解説等について施行直前まで最終化・更新される資料があるため、内閣府・国家サイバー統括室の最新情報を継続確認する必要がある。",
        "重要インフラ統一基準を受けた安全基準等策定ガイドラインは2026年8月5日に案が公表され意見募集が行われた段階であり、最終版と各分野の安全基準等への反映を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "cyber-countermeasures-scope",
        "title": "誰が届出・報告の直接義務者になるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "特定社会基盤事業者であり、指定事業に使用する特定重要電子計算機を使用する特別社会基盤事業者が、中核的な届出・報告義務の対象となる。",
        "exception": "特定社会基盤事業者に指定されているだけで、その法人の全サーバー・PCが当然に対象になるわけではない。",
        "uncertain": "対象システムの具体的な該当性や除外対象は最新の政令・命令・告示・制度解説等を確認する。",
        "sourceIds": [
          "source-cao-cyber-countermeasures-law"
        ]
      },
      {
        "id": "cyber-countermeasures-reporting",
        "title": "2026年10月1日の届出・インシデント報告にどう備えるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年10月1日の施行に向け、特定重要電子計算機の届出と特定侵害事象等の報告について、対象資産、認知・判断、当局連絡、証跡保存の運用を準備する。",
        "exception": "制度解説や様式等には施行直前まで具体化される事項があるため、案段階の資料を最終ルールとして固定しない。",
        "uncertain": "2026年9月3日時点で一部の制度解説・様式・届出除外対象は最終確認が必要である。",
        "sourceIds": [
          "source-cao-cyber-countermeasures-law"
        ]
      },
      {
        "id": "cyber-countermeasures-vendor-contracts",
        "title": "ベンダー・クラウド・監視保守契約へ何を反映するか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "顧客が法定報告を行えるよう、委託先との契約・SLAで迅速な一次通知、ログ・証跡提供、原因調査、脆弱性・パッチ、再委託先からの情報取得、当局対応協力を確認する。",
        "exception": "法律がすべての委託先へ一律の通知時間を直接課しているわけではなく、顧客側の報告期限や監視体制等に応じて設計する。",
        "uncertain": "具体的な条項・時間軸は対象システム、業法、サービス構成、最終的な制度解説等により調整が必要である。",
        "sourceIds": [
          "source-cao-cyber-countermeasures-law"
        ]
      },
      {
        "id": "cyber-private-active-defense",
        "title": "民間企業はどこまで能動的に攻撃者へ対処できるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "政府のアクセス・無害化権限は民間企業への一般的なハックバック権限ではなく、民間企業が攻撃者端末等へ働きかける技術を用いる場合は刑法168条の2や不正アクセス禁止法等との関係を個別に評価する。",
        "exception": "自社環境内の防御・調査と、第三者の情報システムへ権限なくアクセスする行為を同列に扱わない。",
        "uncertain": "具体的な技術実装が各犯罪類型・違法性阻却等との関係でどう評価されるかは事案ごとの検討が必要である。",
        "sourceIds": [
          "source-penal-code",
          "source-unauthorized-access-act"
        ]
      },
      {
        "id": "cyber-critical-infrastructure-unified-standard",
        "title": "重要インフラ統一基準とサイバー対処能力強化法をどう切り分けるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法に基づき、重要インフラ事業者等が分野・事業者横断的に実施すべき対策を促進するための政府機関の施策に関する統一基準であり、2026年10月1日施行予定である。企業は、統一基準そのものだけでなく、所管省庁・業界団体が整備する安全基準等への反映を追う。",
        "exception": "統一基準を、サイバー対処能力強化法の届出・インシデント報告等の直接的な法定義務や、すべての重要インフラ事業者へ一律に罰則付き義務を課す文書と同一視しない。",
        "uncertain": "安全基準等策定ガイドラインは2026年8月5日公表の案について意見募集が行われており、最終版と各分野の安全基準等の改定内容を確認する必要がある。",
        "sourceIds": [
          "source-nco-critical-infrastructure-unified-standard-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-cao-cyber-countermeasures-law",
      "source-penal-code",
      "source-unauthorized-access-act",
      "source-nco-critical-infrastructure-unified-standard-2026"
    ],
    "practicalImpacts": [
      "サイバーインシデント報告",
      "IT資産台帳",
      "クラウド・SOC・保守契約",
      "SLA・ログ保存",
      "取締役会・内部統制",
      "ベンダー管理",
      "所管省庁・業界の安全基準等",
      "サイバーセキュリティ・ガバナンス"
    ]
  },
  {
    "slug": "smartphone-software-competition-act",
    "title": "スマホソフトウェア競争促進法・プラットフォーム対応",
    "categories": [
      "AI・デジタル",
      "契約"
    ],
    "summary": "スマホソフトウェア競争促進法について、特定ソフトウェアと指定事業者、アプリストア・OS機能・検索等に関する禁止・義務、デベロッパからのリクエストや申告、指定事業者の遵守報告を企業実務から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "スマートフォンにおいて利用される特定ソフトウェアに係る競争の促進に関する法律（令和6年法律第58号）は2024年6月19日に公布され、2025年12月18日に全面施行された。",
      "規律対象となる特定ソフトウェアはモバイルOS、アプリストア、ブラウザ、検索エンジンで、公正取引委員会はApple Inc.、iTunes株式会社、Google LLCを特定ソフトウェア事業者として指定している。",
      "公正取引委員会は施行後もデベロッパ向けFAQや法定の遵守報告書を公表している。遵守報告書は指定事業者自身の見解であり、公正取引委員会が適法性を確認した結果ではない。"
    ],
    "currentSummary": {
      "facts": [
        "スマホソフトウェア競争促進法は2024年6月12日に成立し、同月19日に公布され、2025年12月18日に全面施行された。",
        "対象となる特定ソフトウェアはモバイルOS、アプリストア、ブラウザ、検索エンジンである。",
        "公正取引委員会は2025年3月26日にApple Inc.、iTunes株式会社、Google LLCを規制事業者として指定した。",
        "公正取引委員会は2026年7月27日にデベロッパ向けFAQと令和7年度の遵守報告書を公表した。"
      ],
      "interpretations": [
        "アプリ事業者等は、指定事業者の規約だけで法的な可否を判断せず、OS機能利用、アプリ配布・決済、表示・検索等について法・下位法令・指針と照合し、必要に応じてリクエスト、相談、申告のルートを使う。",
        "セキュリティ確保等の正当化事由は無制限な例外ではなく、目的達成のために他の行為では困難かなど、指針・FAQが示す条件を確認する必要がある。",
        "遵守報告書は指定事業者の見解を理解する材料として有用だが、公正取引委員会の適法性判断として引用しない。"
      ],
      "implications": [
        "自社アプリ・サービスが、アプリストア、OS機能、ブラウザ、検索エンジンのどの規律と関係するかを整理する。",
        "指定事業者へのOS機能利用等のリクエスト、相談、情報提供、違反被疑事実の申告ルートを実務フローに組み込む。",
        "アプリ配布・決済・外部誘導、デフォルト設定、検索表示、データ利用等について、契約・規約変更と法令・指針を照合する。",
        "遵守報告書は指定事業者の説明と実際の運用の差分を確認する材料として読み、公取委の今後の対話・調査も追う。"
      ],
      "uncertain": [
        "施行後の実務は指定事業者の規約・実装、公正取引委員会との対話・調査、FAQ更新等によって具体化するため、法令・指針だけでなく最新の運用資料を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "smartphone-law-designated-providers",
        "title": "誰が何のソフトウェアについて規律対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "モバイルOS、アプリストア、ブラウザ、検索エンジンを対象に、公正取引委員会が指定した特定ソフトウェア事業者へ法定の義務・禁止事項が適用される。",
        "exception": "スマートフォンに関係するすべての事業者やソフトウェアが直接の指定対象になるわけではない。",
        "uncertain": "指定状況や対象サービスの変更は公正取引委員会の最新公表を確認する。",
        "sourceIds": [
          "source-jftc-smartphone-law-guidelines"
        ]
      },
      {
        "id": "smartphone-law-developer-access",
        "title": "デベロッパはOS機能・アプリ流通等の制約へどう対応できるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "指定事業者のOS機能利用等について、法・指針・FAQが定める要件に沿ってリクエストし、拒否や制約に問題がある場合は相談・情報提供・申告を検討できる。",
        "exception": "サイバーセキュリティの確保等の正当化事由が認められる場合があり、指定事業者に無条件の開放義務があるわけではない。",
        "uncertain": "個別リクエストの適格性、対応期間、代替手段の有無等は具体的事案と最新FAQを確認する。",
        "sourceIds": [
          "source-jftc-smartphone-law-guidelines",
          "source-jftc-smartphone-faq-2026"
        ]
      },
      {
        "id": "smartphone-law-search-self-preferencing",
        "title": "検索・AI検索の自社優遇規制をどう見るか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "指定された検索エンジンを用いた検索役務で商品・サービス情報を表示する場合、正当な理由のない自社優遇が禁止され、AIを使用した検索も法第9条の対象となり得る。",
        "exception": "優先的取扱いには正当な理由が認められる場合があり、目的やより競争制限的でない代替手段の有無等から判断される。",
        "uncertain": "個別のAI検索・表示機能がどのように規律対象となるかは具体的な機能・表示と運用を確認する必要がある。",
        "sourceIds": [
          "source-jftc-smartphone-faq-2026"
        ]
      },
      {
        "id": "smartphone-law-compliance-reports",
        "title": "指定事業者の遵守報告書をどう読むか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "指定事業者の遵守報告書は法定の透明性・モニタリング資料として利用するが、その内容は指定事業者の見解であって公正取引委員会の適法性判断ではない。",
        "exception": "報告書の記載があることだけで、規約や実際の運用が法に適合していると評価しない。",
        "uncertain": "公正取引委員会は状況確認と改善に向けた対話を継続しており、今後の調査・運用評価を追う必要がある。",
        "sourceIds": [
          "source-jftc-smartphone-compliance-2026",
          "source-jftc-smartphone-faq-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jftc-smartphone-law-guidelines",
      "source-jftc-smartphone-faq-2026",
      "source-jftc-smartphone-compliance-2026"
    ],
    "practicalImpacts": [
      "アプリストア規約・決済",
      "OS機能利用",
      "アプリ配布・外部誘導",
      "検索表示・自社優遇",
      "デベロッパ申告・相談",
      "プラットフォーム契約"
    ]
  },
  {
    "slug": "generative-ai-likeness-publicity",
    "title": "生成AI・肖像／声・パブリシティ権",
    "categories": [
      "AI・デジタル",
      "知的財産",
      "危機管理・コンプライアンス"
    ],
    "summary": "生成AIで実在人物の顔・声を再現・利用する場面について、パブリシティ権、肖像等をみだりに利用されない人格的利益、不正競争防止法の関係と、本人識別、収益化・広告、非営利利用、性的ディープフェイク、AIサービス提供者の責任を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "法務省は2026年8月7日、生成AIの普及等による肖像・声の無断利用を踏まえ、現行法と判例法理の適用を整理した検討会取りまとめ報告書を公表した。新法や省令ではなく、民法上の不法行為、判例上のパブリシティ権・人格的利益、不正競争防止法を生成AIの想定事例へ当てはめた解釈指針である。",
      "報告書は、人の声も人物識別情報かつ人格の象徴として保護対象となり得ること、生成物の本人性は顔立ち・声質等の類似性だけでなく、タイトル、説明、キャラクター名、公開文脈等の付加情報を合わせて評価することを整理している。",
      "このテーマでは、著作権の問題と混同せず、実在人物の商業的価値、人格・尊厳、商品・営業の出所表示という異なる利益を分け、コンテンツ制作、広告、AIサービス設計、権利処理へ落とし込む。"
    ],
    "currentSummary": {
      "facts": [
        "2026年8月7日の法務省取りまとめ報告書は、新しい法律・省令ではなく、現行の民法上の不法行為、判例法理、不正競争防止法を生成AIによる肖像・声の無断利用へ適用する際の解釈整理である。",
        "報告書は、声についても、人物を識別する情報であり人格の象徴であることから、パブリシティ権や人格的利益による保護の対象となり得ると整理している。",
        "生成された顔・声が本人の肖像・声の利用と評価されるかは、生成物自体の類似性に加え、本人名、タイトル、説明、キャラクター名、服装・言動、公開文脈等の付加情報を総合して本人を識別できるかで判断される。",
        "パブリシティ権は顧客吸引力の利用を問題とし、肖像・声それ自体を鑑賞対象の商品等として使う、商品を差別化する、広告に使うという典型例が示されているが、侵害場面はその三類型に限定されない。",
        "収益目的がない利用でも人格的利益の侵害が否定されるわけではなく、性的ディープフェイク等では著名人でない者についても肖像・声をみだりに利用されない利益の侵害が問題となる。"
      ],
      "interpretations": [
        "企業の確認では、①顧客吸引力を利用しているか、②本人の尊厳・私生活の平穏・自己像等を害するか、③肖像・声が商品等表示として機能しているかを別々に検討した方がよい。",
        "『AI生成である』との表示は一律の免責にならない。本人名等の表示が、パブリシティ権の場面ではむしろ本人を識別するための付加情報として働くことがある一方、不正競争防止法の混同判断では別の働きをし得る。",
        "権利処理では生成物の見た目・音声だけでなく、タイトル、説明文、広告コピー、キャラクター名等まで含め、誰を想起させる設計なのかを確認する必要がある。",
        "実在人物を容易に再現できること自体をサービスの訴求点として有償提供するなど、サービス設計が顧客吸引力の利用と強く結び付く場合には、利用者だけでなくAIサービス提供者側の責任も検討対象となる。"
      ],
      "implications": [
        "社内の生成AI利用ルール・コンテンツ審査に、著作権だけでなく肖像・声・パブリシティ権・人格的利益の確認項目を追加する。",
        "広告、SNS、動画・音声制作では、生成物の類似性に加え、人物名、キャラクター名、説明文、ハッシュタグ、広告コピー等の付加情報を確認する。",
        "タレント・声優・インフルエンサー等を想起させる生成物では、利用許諾の対象、媒体、期間、二次利用、AI学習・生成への利用可否を契約・権利管理と対応付ける。",
        "AIサービスの企画段階で、特定の実在人物を再現することを機能・広告上の売りにしていないか、権利侵害生成物への対応・削除導線を含めて確認する。",
        "問題コンテンツが見つかった場合に、URL、投稿日時、タイトル・説明、再生数・収益化状況など本人識別と損害評価に関係する情報を保存できる対応手順を整える。"
      ],
      "uncertain": [
        "生成AIによる肖像・声の無断利用について裁判例の蓄積はまだ乏しく、報告書の想定事例と異なるサービス設計・利用態様の評価には個別判断が残る。",
        "所属事務所・独占的ライセンシー等によるパブリシティ権に基づく請求や、本人死亡後のパブリシティ価値の扱いなど、報告書でも見解が一致していない論点がある。",
        "生成AIサービス提供者の責任が成立する具体的な境界や、不正競争防止法の改正を含む今後の制度整備は引き続き確認が必要である。"
      ]
    },
    "issues": [
      {
        "id": "ai-likeness-legal-framework",
        "title": "肖像・声をどの法的利益で保護するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "商業的な顧客吸引力はパブリシティ権、尊厳・私生活の平穏等は肖像・声をみだりに利用されない人格的利益、商品・営業の出所表示は不正競争防止法という異なる枠組みを分けて検討する。",
        "exception": "同じ生成物について複数の枠組みが同時に問題となり得るが、著名性、混同、損害、請求主体等の要件は同じではない。",
        "uncertain": "具体的な利用態様にどの法的構成を選択・併用するかは、権利者、表示の機能、利用目的等により変わる。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-likeness-identification",
        "title": "生成物を本人の肖像・声の利用と評価するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "顔立ち・声質・歌い方等の類似性だけでなく、本人名、タイトル、説明、キャラクター名、服装・言動、公開文脈等を総合し、受け手が本人と識別できるかを確認する。",
        "exception": "本人名を表示していても生成された声等がおよそ似ていない場合など、付加情報だけで常に本人の肖像・声を使用したことになるわけではない。",
        "uncertain": "どの程度の類似性と付加情報で識別可能と評価されるかは生成物・媒体・受け手の認識等による個別判断が残る。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-likeness-publicity-use",
        "title": "生成AIによる利用がパブリシティ権侵害になるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "本人の肖像・声の顧客吸引力を専ら利用する態様かを確認し、肖像・声それ自体を鑑賞対象とする商品等、商品差別化、広告利用等の典型例やそれに準ずる利用として評価する。",
        "exception": "人物が含まれるだけで直ちに侵害となるわけではなく、顧客吸引力の利用目的・態様を確認する。",
        "uncertain": "AIモデル・データセット・新しい生成サービスなど従来の三類型に直接当てはまらない利用の評価には個別検討が残る。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-likeness-personality-harm",
        "title": "非営利利用・性的ディープフェイク等をどう評価するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "収益目的がなくても、利用目的・態様・必要性、本人の地位・活動等を総合し、社会生活上受忍すべき限度を超えて尊厳、私生活の平穏、自己像等を害するかを検討する。",
        "exception": "非営利であることや著名人でないことだけで人格的利益の侵害が否定されるわけではない。",
        "uncertain": "具体的な受忍限度や救済の範囲は、生成内容、公開範囲、性的・侮辱的性質、被害の程度等によって変わる。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-likeness-provider-risk",
        "title": "生成AIサービス提供者側の責任をどう評価するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "モデル・サービスの提供それ自体は通常直ちに肖像等の利用とはならないが、実在人物の肖像・声を容易に生成できることを主要な訴求点として有償提供するなどの事情があれば、提供行為自体の責任も検討する。",
        "exception": "一般的な生成AIサービスを提供しているというだけで当然に利用者の権利侵害と同じ責任を負うわけではない。",
        "uncertain": "どの機能設計・広告・管理状況で提供者の責任や侵害予防請求が認められるかは今後の裁判例・制度整備も含めて確認が必要である。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-ai-likeness-report-2026"
    ],
    "practicalImpacts": [
      "生成AI利用規程・コンテンツ審査",
      "広告・SNS・動画／音声制作",
      "タレント・声優等の権利許諾契約",
      "AIサービス企画・利用規約・モデレーション",
      "削除請求・証拠保全・インシデント対応"
    ]
  },
  {
    "slug": "copyright-unmanaged-works-adjudication",
    "title": "著作権法・未管理著作物裁定制度",
    "categories": [
      "知的財産",
      "契約"
    ],
    "summary": "2026年4月1日に運用開始した未管理著作物裁定制度について、利用可否の意思を確認できない著作物等の要件、権利者情報の確認・連絡、従来の裁定制度との使い分け、最長3年の利用期間と取消し、権利者側の意思表示を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "2023年の著作権法改正で、集中管理されておらず利用可否に関する権利者の意思を確認できない公表著作物等について、文化庁長官の裁定と補償金の支払いにより時限的な利用を可能にする制度が創設され、2026年4月1日に運用が始まった。",
      "制度利用では、著作物の周辺情報、ウェブ検索、権利者・関係団体のサイト、分野横断権利情報検索システム等を確認し、判明した連絡先へ利用意思を照会する。利用ルールや許諾窓口が明示されている場合には、その意思表示を無視して制度を利用することはできない。",
      "従来の権利者不明等の場合の裁定制度も存続している。未管理著作物裁定制度は手続が簡素・迅速な一方、利用期間は最長3年で、権利者が現れた場合には裁定が取り消され得るため、利用期間と安定性を踏まえて制度を選ぶ。"
    ],
    "currentSummary": {
      "facts": [
        "未管理著作物裁定制度は著作権法67条の3に基づき2026年4月1日に運用開始した。",
        "対象は、集中管理されておらず、利用条件等が明示されていないなど、所定の確認・連絡を行っても利用可否に関する権利者の意思を確認できない公表著作物等である。",
        "判明した国内連絡先へ利用希望を伝え、到達後14日間応答がない場合には制度を利用できる可能性があるが、利用ルール・申請方法等の意思表示が明示されている場合はその表示に従う必要がある。",
        "裁定による利用期間は最長3年で、権利者の請求により裁定が取り消されることがある。従来の権利者不明等の場合の裁定制度は廃止されておらず、利用者が状況に応じて選択できる。"
      ],
      "interpretations": [
        "社史、デジタルアーカイブ、過去写真・記事等の再利用では、単に連絡が取れないことだけでなく、権利者による利用意思の表示がないかを先に確認し、その探索・連絡の証跡を申請単位で残す必要がある。",
        "短期間で利用を始めたい場合には新制度が使いやすい一方、長期間の安定利用が必要な案件では、従来制度や個別許諾の探索を含めて比較する方がよい。",
        "自社コンテンツを意図せず制度利用の対象にされたくない権利者側では、問い合わせ先だけでなく、利用の可否や申請方法等のルールをウェブサイト等に明示し、問い合わせを放置しない運用が重要になる。"
      ],
      "implications": [
        "再利用したい著作物ごとに、集中管理の有無、権利者情報、ウェブ上の利用ルール、連絡結果を記録する。",
        "分野横断権利情報検索システムや関係団体の情報を確認し、申請要件を満たす探索・連絡の証跡を保存する。",
        "利用期間、事業継続性、権利者出現時の差替え可能性を踏まえ、新制度・従来制度・個別許諾のどれを使うか決める。",
        "自社サイトの著作物について利用条件・問い合わせ先を明示し、権利処理の問い合わせを受け付ける担当と回答期限を決める。"
      ],
      "uncertain": [
        "どこまでの探索・確認が必要かは著作物の種類、掲載場所、権利者情報の所在等によって変わるため、実際の申請では文化庁の手引き・登録確認機関の案内を確認する必要がある。",
        "裁定で著作権・著作隣接権の利用が可能になっても、肖像権、パブリシティ権、個人情報、契約上の制限等の別の権利・義務が解消されるわけではない。"
      ]
    },
    "issues": [
      {
        "id": "unmanaged-works-eligibility",
        "title": "どの著作物等で未管理著作物裁定制度を使えるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "集中管理の有無、利用条件等の意思表示、権利者情報と連絡結果を確認し、所定の措置をとっても利用可否の意思を確認できない公表著作物等かを判断する。",
        "exception": "利用禁止、許諾条件、申請方法等が明示されている場合や、権利者から何らかの応答がある場合は、新制度を利用できないことがある。",
        "uncertain": "個別著作物で必要な探索・連絡の具体的範囲は手引きと申請時の事実関係を確認する。",
        "sourceIds": [
          "source-bunka-copyright-amendment-2023"
        ]
      },
      {
        "id": "unmanaged-works-search-contact",
        "title": "権利者情報の確認・連絡をどう行うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "著作物周辺、ウェブ検索、権利者・関係団体サイト、分野横断権利情報検索システム等を確認し、判明した連絡先へ利用意思を照会して経過を記録する。",
        "exception": "利用ルールや許諾窓口が明示されている場合には、その意思表示・手続を尊重する。",
        "uncertain": "著作物の分野や公表態様によって確認すべき情報源は異なる。",
        "sourceIds": [
          "source-bunka-copyright-amendment-2023"
        ]
      },
      {
        "id": "unmanaged-works-system-choice",
        "title": "新制度と従来の裁定制度をどう使い分けるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "迅速性、探索負担、必要な利用期間、権利者出現時の継続利用リスクを比較し、新制度・従来制度・個別許諾のいずれが案件に合うかを選ぶ。",
        "exception": "新制度は最長3年で裁定取消しがあり得る一方、従来制度は権利者探索の負担が重いなど制度設計が異なる。",
        "uncertain": "事業上どの程度の利用安定性が必要かは案件ごとに異なる。",
        "sourceIds": [
          "source-bunka-copyright-amendment-2023"
        ]
      },
      {
        "id": "unmanaged-works-rightsholder-display",
        "title": "権利者側は利用意思をどう表示・管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "自社コンテンツのウェブページ等に利用条件・禁止事項・許諾申請方法・問い合わせ先を明示し、利用照会へ応答できる管理体制を置く。",
        "exception": "単に連絡先を掲示しただけでは、利用可否に関する意思表示として十分でない場合がある。",
        "uncertain": "具体的な表示方法・粒度はコンテンツと許諾方針に応じて設計する。",
        "sourceIds": [
          "source-bunka-copyright-amendment-2023"
        ]
      }
    ],
    "sourceIds": [
      "source-bunka-copyright-amendment-2023"
    ],
    "practicalImpacts": [
      "社史・デジタルアーカイブの権利処理",
      "過去写真・記事・映像等の二次利用",
      "権利者探索・連絡記録",
      "裁定申請・補償金管理",
      "コンテンツ利用規約・許諾窓口"
    ]
  },
  {
    "slug": "product-safety-four-acts-ecommerce-child-products",
    "title": "製品安全4法・越境EC／子供PSC",
    "categories": [
      "消費者法・表示",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "2025年12月25日施行の製品安全4法改正を中心に、海外事業者の直接販売と国内管理人、取引デジタルプラットフォームへの危害防止要請、子供用特定製品・子供PSCマーク、中古品特例、2026年の対象製品追加を整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "消費生活用製品安全法、電気用品安全法、ガス事業法、液化石油ガス法の改正が2025年12月25日に施行され、PSマーク対象製品を日本の消費者へ直接販売する一定の海外事業者も規制対象となった。",
      "海外事業者には国内管理人の選任等が求められ、取引デジタルプラットフォーム提供者についても、危険な製品の出品削除等を国が要請できる仕組みが導入された。",
      "消費生活用製品安全法では子供用特定製品の制度が創設され、乳幼児用玩具・乳幼児用ベッドに続き、2026年7月8日から乳幼児用ベッドガードとベビーカーも対象に追加された。"
    ],
    "currentSummary": {
      "facts": [
        "2025年12月25日から、PSマーク対象製品を日本の消費者へ直接販売する一定の海外事業者は特定輸入事業者として製品安全4法の規制対象となり、技術基準適合等の義務と国内管理人の選任が求められる。",
        "改正法は、取引デジタルプラットフォーム上で安全上の問題がある製品が販売され、出品者による必要措置が期待できない場合等に、国がプラットフォーム提供者へ出品削除等を要請できる仕組みを設けた。",
        "子供用特定製品では、技術基準適合に加え対象年齢・使用上の注意等の警告表示と子供PSCマークが必要となる。第一弾として乳幼児用玩具・乳幼児用ベッドが指定された。",
        "2026年7月8日から、乳幼児用ベッドガードとベビーカーも子供用特定製品かつ特定製品に追加され、技術基準・警告表示等の販売規制の対象となった。"
      ],
      "interpretations": [
        "EC・マーケットプレイス運営では、出品者が国内事業者か海外の直接販売者か、PSマーク対象製品か、届出・国内管理人・表示要件を満たすかを出品前審査へ落とす必要がある。",
        "製造・輸入・販売の法的役割と、プラットフォーム上の販売主体・物流主体が一致しない場合があるため、契約書の名称だけでなく実際の販売経路を確認する。",
        "子供向け製品は対象製品が政令で追加され得るため、商品マスタと法令上の対象リストを対応させ、対象追加時に販売継続可否を更新できる管理が必要になる。"
      ],
      "implications": [
        "PSマーク対象製品と販売主体を商品・出品者単位で棚卸しし、海外直接販売者について届出・国内管理人を確認する。",
        "マーケットプレイスの出品審査、危険製品の通報、出品停止、行政要請への対応手順を整備する。",
        "子供用製品について技術基準、対象年齢・注意表示、子供PSCマーク、製造・輸入時期を商品マスタで確認する。",
        "仕入・販売契約で、法令適合、資料提出、事故報告、リコール、販売停止、当局対応の責任分担を明確にする。"
      ],
      "uncertain": [
        "個々の商品が特定製品・子供用特定製品に該当するかは、政令上の定義、用途、設計、対象年齢等を商品単位で確認する必要がある。",
        "中古品特例や経過措置、海外事業者・国内管理人の具体的な届出運用は、製品類型と販売時期に応じて最新FAQ・法令業務実施ガイドを確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "product-safety-overseas-direct-sale",
        "title": "海外事業者の日本向け直接販売をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "PSマーク対象製品を国内消費者へ直接販売する海外事業者について、特定輸入事業者としての届出、技術基準適合、国内管理人等の要件を確認する。",
        "exception": "製品類型や販売経路により製造・輸入・販売のどの規律が適用されるかは異なる。",
        "uncertain": "具体的な届出・国内管理人の運用は最新FAQ・ガイドを確認する。",
        "sourceIds": [
          "source-shikoku-product-safety-amendment-2025",
          "source-meti-product-safety-decree-2024"
        ]
      },
      {
        "id": "product-safety-dpf-measures",
        "title": "ECプラットフォーム上の危険製品へどう対応するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "危険製品の把握、出品者への措置要求、行政からの危害防止要請、出品停止・記録保存へ対応できる手順を整える。",
        "exception": "プラットフォーム提供者が製造・輸入事業者と同一の義務を一律に負うわけではなく、法定要件と自主管理を分ける。",
        "uncertain": "個別の行政要請や自主対応の水準は事故・製品・出品者の状況により異なる。",
        "sourceIds": [
          "source-shikoku-product-safety-amendment-2025",
          "source-meti-product-safety-decree-2024"
        ]
      },
      {
        "id": "product-safety-child-psc",
        "title": "子供用特定製品の技術基準・表示をどう確認するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "対象製品について技術基準適合、対象年齢・使用上の注意等の警告表示、子供PSCマーク等を確認し、適合しない製品を販売しない。",
        "exception": "製造・輸入時期や製品類型に応じて経過措置が適用される場合がある。",
        "uncertain": "対象製品は追加され得るため、最新の政令・技術基準を継続確認する。",
        "sourceIds": [
          "source-meti-product-safety-decree-2024",
          "source-meti-child-product-expansion-2026"
        ]
      },
      {
        "id": "product-safety-used-products",
        "title": "子供用特定製品の中古品をどう扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "中古品特例の要件、注意事項の表示・提供、製品状態等を確認した上で販売可否を判断する。",
        "exception": "新品と同じ表示義務がそのまま適用されない場合でも、安全性確認や情報提供が不要になるわけではない。",
        "uncertain": "製品類型・製造時期・販売態様ごとの経過措置と特例要件を最新ガイドで確認する。",
        "sourceIds": [
          "source-shikoku-product-safety-amendment-2025",
          "source-meti-product-safety-decree-2024"
        ]
      }
    ],
    "sourceIds": [
      "source-shikoku-product-safety-amendment-2025",
      "source-meti-product-safety-decree-2024",
      "source-meti-child-product-expansion-2026"
    ],
    "practicalImpacts": [
      "EC・マーケットプレイス出品審査",
      "海外販売者・国内管理人の確認",
      "PSマーク・子供PSCマーク管理",
      "商品マスタ・法令対象リスト",
      "仕入・販売契約",
      "事故・リコール・行政要請対応"
    ]
  },
  {
    "slug": "child-sexual-violence-prevention-dbs",
    "title": "こども性暴力防止法・日本版DBS",
    "categories": [
      "労務",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年12月25日施行のこども性暴力防止法について、対象事業・対象業務、犯罪事実確認（日本版DBS）、性暴力の予防・防止措置、採用・就業規則、情報管理を施行準備の流れで整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "こどもと接する教育・保育等の事業では、性犯罪歴の確認だけでなく、初犯防止、早期把握、相談・調査、防止措置、情報管理を一体で整える必要があります。",
      "このテーマでは、法律・施行ガイドライン・Q&Aを骨格に、誰が対象となるか、犯罪事実確認をどう組み込むか、就業規則や採用・研修・相談体制をどう準備するかを追います。",
      "犯罪事実確認は英国DBSを参考にした仕組みで『日本版DBS』とも呼ばれますが、制度全体は犯罪歴照会だけにとどまりません。"
    ],
    "currentSummary": {
      "facts": [
        "こども性暴力防止法は2024年6月19日に成立、同月26日に公布され、2026年12月25日に施行される。",
        "学校設置者等には法定の措置が義務付けられ、学習塾・認可外保育等の民間教育保育等事業者には認定制度を通じて同様の枠組みが設けられる。",
        "対象事業者には、対象業務従事者についての犯罪事実確認に加え、研修、早期把握・相談、疑いがある場合の調査・保護、防止措置、情報管理等が求められる。",
        "こども家庭庁は施行ガイドライン、Q&A、事業者向けチェックリスト、研修教材、各種ひな型、関連システム資料を公表している。"
      ],
      "interpretations": [
        "施行準備は人事だけで完結せず、対象業務の棚卸し、採用・就業規則、相談・報告体制、犯罪事実確認、機微情報の権限管理を法務・人事・現場・情報管理で接続する必要がある。",
        "『不適切な行為』は業務の必要性や児童等の年齢・発達・現場状況によって評価が変わるため、具体例をそのまま禁止リストにせず、自社業務に応じて服務規律と現場ルールへ落とす必要がある。"
      ],
      "implications": [
        "対象となる事業・施設と、こどもに接する対象業務従事者の範囲を先に確定する。",
        "募集要項・求人票、誓約書・内定通知、就業規則・服務規律を見直し、犯罪事実確認や不適切行為への対応を採用・雇用フローへ組み込む。",
        "従事者向け研修、相談窓口、性暴力等の疑いが生じた場合の報告・調査・保護・支援ルールを整備する。",
        "犯罪事実確認に関する情報管理規程、責任者、閲覧権限、記録管理を整備し、関連システム利用の準備を進める。"
      ],
      "uncertain": [
        "対象事業・対象業務への該当性は、個々の事業類型、施設、職務、こどもとの接触状況を確認して判断する必要がある。",
        "認定対象事業者の申請時期やシステム運用、Q&A・マニュアル等は施行に向けて更新され得るため、最新のこども家庭庁資料を継続確認する。"
      ]
    },
    "issues": [
      {
        "id": "dbs-covered-business-work",
        "title": "どの事業・業務・従事者が対象になるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "法令・施行ガイドラインの事業類型と、児童等と接する業務の要件に照らして、施設・業務・従事者単位で対象範囲を特定する。",
        "exception": "学校設置者等と認定対象の民間教育保育等事業者では制度上の位置付けが異なる。",
        "uncertain": "兼務者、委託先、短期・臨時従事者等は具体的な業務実態とガイドラインを確認して判定する。",
        "sourceIds": [
          "source-cfa-child-sexual-violence-guideline-2026",
          "source-cfa-child-sexual-violence-qa-2026"
        ]
      },
      {
        "id": "dbs-criminal-check",
        "title": "犯罪事実確認を採用・配置にどう組み込むか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "対象業務従事者について法定の犯罪事実確認を行い、確認結果に応じて法令上必要な防止措置を講じる体制を整える。",
        "exception": "施行時現職者など確認期限・申請時期に経過的な取扱いがあるため、全員を施行日に一斉確認する制度ではない。",
        "uncertain": "具体的な申請時期、システム手順等は最新マニュアル・行政案内を確認する。",
        "sourceIds": [
          "source-cfa-child-sexual-violence-guideline-2026",
          "source-cfa-child-sexual-violence-qa-2026",
          "source-cfa-child-sexual-violence-checklist-2026"
        ]
      },
      {
        "id": "dbs-prevention-employment",
        "title": "防止措置を採用・就業規則・現場運用へどう落とすか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "公式ひな型・チェックリストを基礎に、自社の業務実態に応じた募集・採用、服務規律、研修、相談・報告・調査・防止措置を施行前に接続する。",
        "exception": "不適切な行為の具体例は状況により評価が変わるため、例示だけで一律判断しない。",
        "uncertain": "業種・施設・対象者の特性に応じた具体的な現場ルールは各事業者で設計する必要がある。",
        "sourceIds": [
          "source-cfa-child-sexual-violence-guideline-2026",
          "source-cfa-child-sexual-violence-qa-2026",
          "source-cfa-child-sexual-violence-checklist-2026"
        ]
      },
      {
        "id": "dbs-information-management",
        "title": "犯罪事実確認情報をどう管理するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "犯罪事実確認に関する情報を扱う責任者・権限・規程を定め、法令・ガイドラインに沿った限定的な取扱いと情報管理を行う。",
        "exception": "必要な記録保存の有無や権限設計は事業者の体制・手続に応じて適切なひな型を選ぶ。",
        "uncertain": "関連システムの具体的運用やマニュアル更新を継続確認する。",
        "sourceIds": [
          "source-cfa-child-sexual-violence-guideline-2026",
          "source-cfa-child-sexual-violence-qa-2026",
          "source-cfa-child-sexual-violence-checklist-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-cfa-child-sexual-violence-guideline-2026",
      "source-cfa-child-sexual-violence-qa-2026",
      "source-cfa-child-sexual-violence-checklist-2026"
    ],
    "practicalImpacts": [
      "対象事業・対象業務の棚卸し",
      "採用募集・誓約書・内定通知",
      "就業規則・服務規律",
      "従事者研修",
      "相談・報告・調査・保護体制",
      "犯罪事実確認フロー",
      "情報管理規程・権限管理",
      "関連システム登録"
    ]
  },
  {
    "slug": "equal-pay-guideline-2026",
    "title": "同一労働同一賃金・2026年ガイドライン改正",
    "categories": [
      "労務",
      "契約"
    ],
    "summary": "2026年10月1日施行・適用のパート・有期雇用労働法施行規則、同一労働同一賃金ガイドライン、雇用管理指針等の改正について、雇入れ時の明示、待遇差の点検・説明、派遣労働者対応を一次資料と実務解説から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "厚生労働省は2026年4月28日、同一労働同一賃金に関する施行規則と告示を改正・公布し、同年10月1日から施行・適用する。パート・有期雇用労働者の雇入れ時の明示事項追加、同一労働同一賃金ガイドラインの改正、雇用管理指針の改正が柱となる。",
      "改正ガイドラインは、最高裁判例や施行後の運用を踏まえて、退職手当、賞与、無事故・家族・住宅手当、病気休暇・休職、夏季冬季休暇、褒賞、福利厚生等の考え方を明確化する。待遇差は雇用区分だけで説明せず、待遇ごとの性質・目的と職務内容・責任・配置変更範囲等の違いを対応させて確認する必要がある。",
      "派遣労働者についても2026年10月1日から明示事項やガイドライン等が改正される。派遣元・派遣先の情報提供、派遣先均等・均衡方式、労使協定方式、教育訓練・福利厚生等を、一般のパート・有期雇用とは分けて運用確認する。"
    ],
    "currentSummary": {
      "facts": [
        "改正後の省令・告示は2026年4月28日に公布され、2026年10月1日から施行・適用される。",
        "パート・有期雇用労働者の雇入れ時には、待遇の相違の内容・理由等について説明を求めることができる旨が明示事項へ追加される。",
        "同一労働同一賃金ガイドラインは最高裁判例等を踏まえて待遇項目の記載を追加・充実し、退職手当、各種手当、休暇・休職、福利厚生等について考え方を明確化する。",
        "派遣労働者についても雇入れ時・派遣時の明示、ガイドラインの明確化、派遣元・派遣先の連携等の改正が2026年10月1日から適用される。"
      ],
      "interpretations": [
        "企業は正社員と非正規労働者の制度が別であること自体を待遇差の理由にせず、各待遇の目的と職務・責任・配置・勤続等の差が対応しているかを待遇単位で説明できるようにする必要がある。",
        "施行対応は労働条件通知書の文言修正だけでは足りず、賃金・退職金・休暇・福利厚生等の待遇一覧、雇用区分別の比較、制度趣旨、説明資料、労使協議・質問対応の記録まで一体で整備する方が実務上扱いやすい。",
        "派遣労働者では派遣元のみで判断できない事項があるため、派遣先からの待遇情報提供や教育訓練・福利厚生の役割分担を契約・運用の両方から確認する必要がある。"
      ],
      "implications": [
        "2026年10月1日以後に使用する労働条件通知書・雇用契約書の様式を確認し、待遇差について説明を求めることができる旨を反映する。",
        "正社員、契約社員、パート、嘱託、無期転換社員、限定正社員等の待遇を項目別に一覧化し、賞与・退職手当・手当・休暇・福利厚生等の差を点検する。",
        "待遇ごとの性質・目的と差の理由を説明資料へ落とし、労働者から説明を求められた場合の窓口・回答・記録保存を決める。",
        "派遣元・派遣先は2026年改正対応の様式と情報提供フローを確認し、派遣契約・待遇決定・教育訓練・福利厚生の運用を点検する。"
      ],
      "uncertain": [
        "個別の待遇差が不合理かは、待遇の性質・目的、職務内容・責任、配置変更範囲、勤続等の具体的事情によって判断が変わる。",
        "改正後の行政指導・裁判実務で各待遇項目がどのように評価されるかは、2026年10月1日の施行後の事例を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "equal-pay-notice",
        "title": "雇入れ時の労働条件明示をどう変えるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年10月1日以後、パート・有期雇用労働者の雇入れ時に、待遇の相違の内容・理由等について説明を求めることができる旨を所定の明示事項として示す。",
        "exception": "一般の労働条件明示事項や既存の昇給・賞与・退職手当・相談窓口等の明示と混同せず、改正対応モデル様式を確認する。",
        "uncertain": "自社の通知書・電子交付システムでの具体的な表示位置や説明窓口は社内運用に応じて設計する。",
        "sourceIds": [
          "source-mhlw-equal-pay-2026"
        ]
      },
      {
        "id": "equal-pay-treatment-review",
        "title": "待遇差をどの単位・基準で点検するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "基本給、賞与、退職手当、各種手当、休暇・休職、福利厚生等を待遇ごとに分け、その性質・目的に照らして職務内容・責任・配置変更範囲その他の事情との関係から不合理な差がないか確認する。",
        "exception": "ガイドラインに具体例がない待遇を自動的に問題なしとせず、パート・有期雇用労働法8条・9条等の枠組みから個別に確認する。",
        "uncertain": "各社の制度趣旨と実運用により比較すべき事情・合理性の評価は異なる。",
        "sourceIds": [
          "source-mhlw-equal-pay-2026"
        ]
      },
      {
        "id": "equal-pay-explanation",
        "title": "待遇差の説明・記録をどう運用するか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "労働者から説明を求められてから理由を作るのではなく、待遇ごとの目的・比較要素・差の理由を平時から整理し、窓口、回答手順、記録保存を用意する。",
        "exception": "形式的な説明書の存在だけで個別の待遇差が合理化されるわけではなく、制度趣旨と実態の整合性を確認する。",
        "uncertain": "説明の具体的な粒度や必要資料は待遇項目と個別事情に応じて変わる。",
        "sourceIds": [
          "source-mhlw-equal-pay-2026"
        ]
      },
      {
        "id": "equal-pay-dispatch",
        "title": "派遣労働者の改正対応をどう分けて管理するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "派遣労働者について、2026年10月改正後の雇入れ時・派遣時の明示、派遣先均等・均衡方式または労使協定方式、派遣先からの待遇情報提供、教育訓練・福利厚生等を現行の公式資料・様式で確認する。",
        "exception": "パート・有期雇用労働者向けの社内手続をそのまま派遣労働者へ流用せず、派遣元・派遣先それぞれの法的役割を分ける。",
        "uncertain": "個別の派遣契約、比較対象労働者、労使協定の内容に応じて必要な確認事項は異なる。",
        "sourceIds": [
          "source-mhlw-dispatch-equal-pay-2026",
          "source-mhlw-equal-pay-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-mhlw-equal-pay-2026",
      "source-mhlw-dispatch-equal-pay-2026"
    ],
    "practicalImpacts": [
      "労働条件通知書・雇用契約書",
      "賃金・賞与・退職金制度",
      "家族手当・住宅手当等の各種手当",
      "病気休暇・夏季冬季休暇・休職制度",
      "福利厚生・褒賞・表彰",
      "待遇差の説明資料・相談窓口",
      "労使協議・質問回答の記録",
      "派遣元・派遣先の待遇情報提供・契約運用"
    ]
  },
  {
    "slug": "commercial-registry-address-nondisclosure",
    "title": "商業登記・代表者等住所非表示措置",
    "categories": [
      "会社法・ガバナンス",
      "危機管理・コンプライアンス"
    ],
    "summary": "商業登記における代表者等の住所非表示措置について、2024年からの現行制度と、2026年12月施行予定の全会社・支配人・各種法人等への対象拡大案を、申出タイミングと取引実務への影響まで含めて整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "現行制度は2024年10月1日から、一定の要件の下で株式会社の代表取締役、代表執行役、代表清算人の住所を最小行政区画までの表示にとどめる仕組みとして施行されている。",
      "2026年7月の改正省令案は、制度を全ての会社へ広げ、対象者を会社の代表者と支配人へ拡大するとともに、会社以外の法人、LPS・LLP等にも準用し、登記情報提供サービスにも反映する。施行は2026年12月予定である。",
      "申出は原則として住所を登記する登記申請と同時に行う必要があり、過去に登記済みの住所を遡って非表示にする仕組みではない。非表示後は融資・不動産取引・本人確認等で追加資料が必要になる可能性もある。"
    ],
    "currentSummary": {
      "facts": [
        "現行の代表取締役等住所非表示措置は2024年10月1日から施行され、株式会社の代表取締役、代表執行役、代表清算人を対象とする。",
        "非表示措置が講じられると、登記事項証明書等には住所の最小行政区画までが表示され、それより後ろの住所は表示されない。住所自体の登記義務は残る。",
        "現行制度の申出は、設立、就任・重任、住所変更等、対象住所を登記する申請と同時に行う必要があり、過去の登記済み住所へ遡って適用されない。",
        "2026年の改正省令案は、対象を全ての会社へ拡大し、会社の代表者と支配人、会社以外の法人やLPS・LLP等まで広げ、登記情報提供サービスでも同様の措置を行う。施行は2026年12月予定である。"
      ],
      "interpretations": [
        "2026年の対象拡大後は、株式会社だけを前提にした登記チェックリストでは足りず、グループ内の法人形態、支配人登記、任期の有無等を見て申出機会を管理する必要がある。",
        "非表示はプライバシー保護には有用だが、代表者住所を登記事項証明書で証明できなくなるため、融資・不動産・本人確認等で必要書類や確認フローが変わり得る。",
        "単独申出ができないという制約から、希望する法人・役員については次回の就任・重任・住所変更等の登記イベントを把握し、必要書類を前倒しで準備する運用が実務的である。"
      ],
      "implications": [
        "グループ会社・関連法人の法人形態と、代表者・清算人・支配人等の登記状況を棚卸しする。",
        "住所非表示を希望する役員等について、次の就任・重任・住所変更その他の登記予定と申出タイミングを管理する。",
        "非表示措置を利用する場合の添付書類、実質的支配者確認、本店実在性確認等の準備手順を登記担当・司法書士と共有する。",
        "融資、口座開設、不動産取引、KYC等で代表者住所の証明が必要になる場面を確認し、代替書類と社内窓口を決める。"
      ],
      "uncertain": [
        "2026年改正は省令案段階であり、最終的な条文・施行日・経過措置は結果公示・公布後に確認する必要がある。",
        "法人類型・役員構成・登記履歴により、実際に申出可能となる時点と必要書類は異なる。"
      ]
    },
    "issues": [
      {
        "id": "registry-address-current-scope",
        "title": "現行の住所非表示措置は誰に・どこまで適用されるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "現行制度では、一定の要件を満たす株式会社の代表取締役、代表執行役、代表清算人について、登記事項証明書等で住所の最小行政区画より後ろを表示しない措置を利用できる。",
        "exception": "住所の登記義務自体は免除されず、申請書には住所を記載する。既に登記された過去住所を遡って非表示にすることはできない。",
        "uncertain": "個別の申出可否・必要添付書類は、上場の有無、既存措置の有無、登記申請の内容等に応じて確認する。",
        "sourceIds": [
          "source-moj-registry-address-current"
        ]
      },
      {
        "id": "registry-address-expansion-draft",
        "title": "2026年改正案で対象はどこまで広がるか",
        "status": "authoritative",
        "stage": "draft",
        "views": [],
        "conclusion": "改正省令案は、商業登記規則上の対象を全ての会社と会社の代表者・支配人へ広げ、各種法人、特定目的会社、投資法人、LPS・LLP、一般社団・財団等にも準用し、登記情報提供サービスでも同様の措置を行う。",
        "exception": "現時点では省令案であり、最終公布前の内容を確定ルールとして扱わない。",
        "uncertain": "最終条文、施行日、経過措置、運用通達・申出様式は結果公示・公布後に再確認する必要がある。",
        "sourceIds": [
          "source-egov-registry-address-expansion-2026"
        ]
      },
      {
        "id": "registry-address-request-timing",
        "title": "申出のタイミングをどう管理するか",
        "status": "interpreted",
        "stage": "draft",
        "views": [],
        "conclusion": "住所を登記する申請と同時に申し出る制度であるため、対象者の登記イベントを管理し、申出希望と必要書類を事前にそろえる運用が必要になる。",
        "exception": "重任、本店移転、住所変更等で申出可能性が異なり、既に非表示措置が継続される場合もある。",
        "uncertain": "2026年対象拡大後の各法人類型・支配人等についての具体的な申出様式と細かな運用は最終ルールを待つ必要がある。",
        "sourceIds": [
          "source-moj-registry-address-current",
          "source-egov-registry-address-expansion-2026"
        ]
      },
      {
        "id": "registry-address-transaction-impact",
        "title": "非表示後の金融・不動産・本人確認をどう補うか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "非表示措置の利用可否だけでなく、代表者住所を証明する必要がある取引で何を代替資料とするかまで事前に確認する。",
        "exception": "必要書類や確認方法は金融機関、取引類型、相手方の本人確認方針等により異なる。",
        "uncertain": "対象拡大後に金融・不動産・AML実務がどこまで標準化されるかは継続確認が必要。",
        "sourceIds": [
          "source-moj-registry-address-current"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-registry-address-current",
      "source-egov-registry-address-expansion-2026"
    ],
    "practicalImpacts": [
      "商業・法人登記申請",
      "役員・支配人の住所管理",
      "グループ会社管理",
      "司法書士との登記運用",
      "融資・口座開設",
      "不動産取引",
      "本人確認・AML",
      "プライバシー保護"
    ]
  },
  {
    "slug": "civil-court-information-database",
    "title": "民事裁判情報データベース・判決情報活用",
    "categories": [
      "危機管理・コンプライアンス",
      "個人情報",
      "AI・デジタル",
      "情報セキュリティ"
    ],
    "summary": "民事裁判情報活用促進法に基づく判決情報等のデータベース化について、対象情報、仮名加工、指定法人、現在の一部施行と未施行の提供業務、将来の企業法務・判例調査への影響を追う。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "民事裁判情報活用促進法は2025年5月30日に公布され、民事・行政事件訴訟の電子判決書等を、法務大臣が指定する法人が管理・加工し利用者へ提供する仕組みを定めた。",
      "2026年1月15日に指定等の一部規定と施行規則が施行され、2026年4月10日には公益財団法人日弁連法務研究財団が全国唯一の指定法人として指定された。",
      "最高裁判所から指定法人への情報提供や、指定法人から利用者への提供など主要な業務規定には未施行部分が残り、現時点で全面的な提供サービスが開始済みとは扱わない。"
    ],
    "currentSummary": {
      "facts": [
        "法律上の民事裁判情報には、民事訴訟・行政事件訴訟における電子判決書、調書判決に係る電子調書、法務省令で定める一定の電子決定書等が含まれる。",
        "指定法人は最高裁判所から民事裁判情報の提供を受け、個人識別情報を削除・置換した仮名加工民事裁判情報を作成し、情報提供契約に基づき利用者へ提供する制度として設計されている。",
        "指定等の規定と施行規則の一部は2026年1月15日に施行され、法務大臣は2026年4月10日に公益財団法人日弁連法務研究財団を指定法人として指定した。",
        "最高裁から指定法人への情報提供、利用者への提供等の主要業務規定には未施行部分が残る。法律はこれらを公布から2年以内の政令で定める日に施行するとしている。"
      ],
      "interpretations": [
        "企業法務にとっては、判例データベース事業者等を通じた民事裁判情報へのアクセス量・網羅性が変わる可能性があり、リーガルリサーチと訴訟リスク分析の情報基盤として追う価値がある。",
        "制度開始時点では、個別判決を1件ずつ取得する一般向けサービスよりも、データベース事業者等が一次利用者となり二次サービスへ展開する形が想定されているため、利用条件・料金・再提供ルールの具体化が重要になる。",
        "仮名加工や閲覧制限情報の除外があるため、データベース化を『裁判記録が無制限に公開される制度』と理解しない方がよい。"
      ],
      "implications": [
        "民事裁判情報の全面提供開始日、指定法人の業務規程、料金、提供条件を継続確認する。",
        "判例データベースやリーガルリサーチサービスが新制度をどう取り込むかを確認し、社内の検索・調査手順へ反映する。",
        "訴訟対応では、電子判決情報の流通拡大を踏まえて、営業秘密・プライバシーに関する閲覧等制限の必要性を個別に検討する。",
        "リーガルデータをAI・分析へ利用する場合は、指定法人・二次提供者の利用条件、仮名加工、安全管理等を別途確認する。"
      ],
      "uncertain": [
        "主要な情報提供業務の具体的な開始日は現時点で確定情報として確認できず、公布から2年以内の政令指定日を待つ必要がある。",
        "指定法人の料金、情報提供契約、加工方法、二次利用・再提供の詳細は今後の業務規程・運用で具体化する部分が残る。"
      ]
    },
    "issues": [
      {
        "id": "civil-court-info-scope",
        "title": "どの裁判情報がデータベース化の対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "民事訴訟・行政事件訴訟で作成された電子判決書、調書判決に係る電子調書、法務省令で定める一定の電子決定書等が民事裁判情報となり、閲覧等制限に係る情報など法が除外するものは指定法人への提供対象から外れる。",
        "exception": "すべての訴訟記録や証拠が一律にデータベース化される制度ではない。対象となる電磁的記録と除外規定を個別に確認する。",
        "uncertain": "今後の法令・運用変更により対象となる決定等の範囲が変わる可能性がある。",
        "sourceIds": [
          "source-egov-civil-court-information-act",
          "source-egov-civil-court-information-rule"
        ]
      },
      {
        "id": "civil-court-info-designated-body",
        "title": "誰が情報を加工・提供するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "法務大臣が全国に一つ指定する非営利法人が民事裁判情報管理提供業務を担い、2026年4月10日に公益財団法人日弁連法務研究財団が指定された。",
        "exception": "指定されたことと、最高裁からの情報提供・利用者へのサービスが全面的に開始したことは区別する。",
        "uncertain": "業務規程、料金、提供契約等の実運用は今後の認可・準備状況を継続確認する必要がある。",
        "sourceIds": [
          "source-egov-civil-court-information-act",
          "source-moj-civil-court-information-designation"
        ]
      },
      {
        "id": "civil-court-info-provision-start",
        "title": "実際の情報提供はいつ・どの条件で始まるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "現在は制度の一部施行・指定法人決定まで進んでいるが、主要な情報提供業務には未施行部分があり、全面提供開始日と利用条件の確定を待つ必要がある。",
        "exception": "指定法人は全面施行前でも準備行為を行うことができるため、準備の進展をサービス開始と混同しない。",
        "uncertain": "全面提供の具体的な政令施行日、料金、契約条件、提供単位等は今後の公表を確認する。",
        "sourceIds": [
          "source-egov-civil-court-information-act",
          "source-moj-civil-court-information-designation"
        ]
      },
      {
        "id": "civil-court-info-corporate-use",
        "title": "企業法務の判例調査・データ利用はどう変わり得るか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "全面提供後は、判例DB等を通じて企業法務が参照できる民事裁判情報の量・検索性が変わる可能性があるため、利用サービスの収録範囲・利用条件を確認して調査手順へ反映する。",
        "exception": "実際の二次提供サービス、料金、検索機能、利用許諾は各事業者・指定法人の条件により異なる。",
        "uncertain": "AI学習・大規模分析・再提供等の具体的な許容範囲は、業務規程や契約条件の具体化を待って確認する必要がある。",
        "sourceIds": [
          "source-egov-civil-court-information-act"
        ]
      }
    ],
    "sourceIds": [
      "source-egov-civil-court-information-act",
      "source-egov-civil-court-information-rule",
      "source-moj-civil-court-information-designation"
    ],
    "practicalImpacts": [
      "判例・裁判例リサーチ",
      "訴訟リスク分析",
      "営業秘密・閲覧制限対応",
      "リーガルデータ利用",
      "判例データベース選定",
      "AI・データ分析の利用条件"
    ]
  },
  {
    "slug": "software-copyright-library-copying",
    "title": "ソフトウェア著作権・ライブラリ複製",
    "categories": [
      "知的財産",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "ソフトウェアライブラリ・SDK等について、プログラムの著作物性、ソースコード全体が開示されない場合の立証、複製・使用の認定、開発現場のライセンス・持込み管理を大阪地裁2026年判決から整理する。",
    "lastUpdated": "2026-09-03",
    "lastVerified": "2026-09-03",
    "isNew": true,
    "overview": [
      "大阪地裁は2026年4月23日、DICOM準拠の医療用システム開発キットであるライブラリ形式のプログラムについて著作物性と被告会社による複製・使用を認定した。",
      "裁判所は、ソースコード全体が開示されていないことだけで判断を止めず、開示部分、機能、処理の設計に多数の選択肢があることなどから創作性を検討した。",
      "企業実務では、第三者ライブラリ・SDKのライセンス管理、元従業員や外部ベンダーからのコード・バイナリ持込み、テストツールを含む開発資産の出所管理が重要になる。"
    ],
    "currentSummary": {
      "facts": [
        "対象となったプログラムはDICOM準拠の医療用システム開発キットで、C++のソースコードをコンパイル・リンクして利用されるライブラリ形式のプログラムだった。",
        "大阪地裁は、開示されたソースコード部分や、エラー処理、クラス化、マルチスレッド、データ保存・通信、メモリ利用等で選択の幅があることなどを踏まえてプログラムの著作物性を認めた。",
        "裁判所は被告会社による原告プログラムの複製・使用を認定し、プログラム使用差止め・消去、特定のファイル群・システムの事業利用差止め・廃棄、1001万4000円の支払等を命じた。",
        "一方で、原告が主張した対象の全てが認められたわけではなく、被告個人への請求等は棄却された。"
      ],
      "interpretations": [
        "ソフトウェアの著作物性を『ソースコード全体を比較できるか』だけで捉えず、どの処理についてどの程度の選択の幅があり、具体的表現に作成者の個性が現れているかを整理する必要がある。",
        "ライブラリやSDKは製品本体から見えにくくても、開発環境・テストツール・配布ファイルに残る可能性があるため、ライセンス台帳と技術的な出所確認を分離しない方がよい。",
        "転職者や委託先から持ち込まれたコード・バイナリについては、利用許諾の有無を口頭確認だけで済ませず、入手経路、ライセンス、使用範囲を証跡化することが紛争予防につながる。"
      ],
      "implications": [
        "利用中の第三者ライブラリ・SDKについて、入手元、ライセンス主体、許諾範囲、バージョン、組込み先を台帳化する。",
        "転職者・委託先・買収先等から持ち込まれるソース、オブジェクト、DLL、静的ライブラリ、テストツールの出所確認を開発プロセスへ入れる。",
        "契約上のライセンス条件と、実際のビルド・リンク・配布形態が一致しているかを法務と開発で確認する。",
        "紛争時に備え、リポジトリ履歴、ビルドログ、依存関係、SBOM、ライセンス証跡等を保存する。"
      ],
      "uncertain": [
        "プログラムの著作物性・複製の成否は、対象コードの内容、選択の幅、共通情報の性質、証拠状況等により個別に判断される。",
        "本判決の控訴の有無・上級審での判断や、関連する別件訴訟の進行は継続確認が必要である。"
      ]
    },
    "issues": [
      {
        "id": "software-copyright-creativity",
        "title": "ライブラリ形式のプログラムの著作物性をどう判断するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "具体的なプログラム表現について、処理方法や構造等に選択の幅があり、その選択・組合せに作成者の個性が表れているかを検討する。ソースコード全体が開示されていないことだけで当然に著作物性が否定されるわけではない。",
        "exception": "機能・規格・効率性等により表現が実質的に一義的となる部分やありふれた表現は、創作性の評価を分けて考える必要がある。",
        "uncertain": "他のライブラリ・SDKで同じ結論になるかは、具体的なコード、規格制約、選択の幅、立証資料に依存する。",
        "sourceIds": [
          "source-osaka-dc-software-copyright-2026"
        ]
      },
      {
        "id": "software-copyright-copying-proof",
        "title": "ソースコード全体を比較できない場合に複製をどう立証するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "対象プログラムの構成、被告側プログラムに残る原告由来の情報、開発・入手経緯その他の証拠を総合して、複製・使用の有無を判断する。",
        "exception": "共通する情報が規格上当然のものか、保護されない要素か、独自の表現を示すものかを区別する必要がある。",
        "uncertain": "必要となる技術鑑定・証拠保全の範囲は、プログラムの形式と争点に応じて異なる。",
        "sourceIds": [
          "source-osaka-dc-software-copyright-2026"
        ]
      },
      {
        "id": "software-copyright-license-control",
        "title": "開発現場のライブラリ・コード持込みをどう管理するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "ライブラリの入手元・許諾範囲・組込み先を記録し、コード・バイナリ・テストツールの持込みを開発プロセスで確認できるようにする。",
        "exception": "オープンソース、商用SDK、委託開発、買収先資産等では確認すべきライセンス条件と証跡が異なる。",
        "uncertain": "自動スキャンやSBOMだけで権利関係を完全に確認できるわけではなく、重要な依存物は契約・事実関係を個別に確認する必要がある。",
        "sourceIds": [
          "source-osaka-dc-software-copyright-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-osaka-dc-software-copyright-2026"
    ],
    "practicalImpacts": [
      "ソフトウェアライセンス管理",
      "開発リポジトリ・ビルド管理",
      "第三者ライブラリ・SDK利用",
      "転職者・委託先からのコード持込み",
      "テストツール管理",
      "SBOM・依存関係管理",
      "知財紛争・証拠保全"
    ]
  },
  {
    "slug": "recorded-music-public-use-right-2026",
    "title": "レコード演奏・伝達権（店舗BGM等）",
    "categories": [
      "知的財産",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "2026年著作権法改正で創設されたレコード演奏・伝達権について、店舗BGMやイベント等で商業用レコードを公に再生・伝達する場合の二次使用料、対象外となる利用、指定団体・二次使用料規程、施行までに具体化される徴収・分配実務を追う。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "2026年6月17日に成立し、6月24日に令和8年法律第48号として公布された著作権法改正により、実演家・レコード製作者にレコード演奏・伝達権が創設された。",
      "商業用レコードを公に再生したり、配信音源等を受信装置で公に伝達したりする利用について、実演家・レコード製作者が二次使用料を受ける仕組みであり、利用を拒絶できる許諾権ではない。",
      "施行日は2026年6月24日の公布から3年を超えない範囲内で政令により定められる。施行までに指定団体、二次使用料規程、具体的な徴収・分配・利用報告の仕組みが整備される。"
    ],
    "currentSummary": {
      "facts": [
        "著作権法の一部を改正する法律は2026年6月17日に成立し、同月24日に令和8年法律第48号として公布された。レコード演奏・伝達権に関する改正事項は、公布日から3年を超えない範囲内で政令で定める日に施行される。",
        "改正法は、商業用レコードに録音された実演・音を公に再生する行為と、公衆送信される商業用レコードを受信装置で公に伝達する行為について、実演家・レコード製作者が二次使用料を受ける権利を設けた。",
        "レコード演奏・伝達権は許諾権ではなく二次使用料請求権である。指定団体が指定された場合は指定団体が権利行使を担い、二次使用料規程の案の公示、利用者代表との協議、一定期間不成立の場合の文化庁長官による裁定、届出・公表という手続が設けられる。",
        "非営利・無料の再生等、現行の著作権の権利制限との均衡から一定の利用は二次使用料の対象外となる。"
      ],
      "interpretations": [
        "店舗・飲食店だけでなく、商業施設、ホテル、イベント、スポーツ競技会、文化芸術分野の発表会など、事業者が公衆に音源を聴かせる場面を横断して影響確認が必要になる。",
        "既に作詞家・作曲家等の著作権処理をしていても、実演家・レコード製作者に対する新たな二次使用料は別の権利処理として確認する必要がある。",
        "施行前の現時点では具体的な徴収額・徴収方法を確定事項として扱わず、指定団体と二次使用料規程、業務用BGM事業者等を通じた包括徴収、小規模事業者への減免等の具体化を追う必要がある。",
        "消費者向け音楽ストリーミングサービスを店舗BGM等に使う場合、新制度とは別にサービス利用規約上の商用利用制限が問題になり得るため、音源の入手経路と契約条件も併せて確認する。"
      ],
      "implications": [
        "店舗・施設・イベント等で公衆に音楽を聴かせる利用場面と、CD・ダウンロード音源・配信・業務用BGM等の音源経路を棚卸しする。",
        "BGMサービス契約、配信サービス利用規約、施設運営・イベント委託契約等について、二次使用料の支払主体、費用負担、利用報告・データ提供の分担を確認する。",
        "指定団体、二次使用料規程案、公示・協議、施行日を継続確認し、業界団体が利用者代表として協議する場合は社内の利用実態・事業規模を説明できるよう準備する。",
        "小規模事業者への減免、包括徴収、段階的な徴収開始等は検討事項であり、正式な規程・運用が示されるまでは自社への適用を断定しない。"
      ],
      "uncertain": [
        "具体的な施行日は政令で定められるため、2026年9月4日時点では未確定である。",
        "指定団体の指定、二次使用料の金額・区分、個別徴収と包括徴収の使い分け、小規模利用の減免、利用報告・分配データの具体的方法は今後の制度実装を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "bgm-right-scope",
        "title": "どのBGM・音源利用が二次使用料の対象になるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "商業用レコードを再生機器で公に再生して公衆に聴かせる場合や、公衆送信される商業用レコードを受信装置で公に伝達して公衆に聴かせる場合に、実演家・レコード製作者への二次使用料が問題となる。",
        "exception": "非営利・無料の再生等、著作権法上の権利制限との均衡から一定の場合は対象外となる。個別の利用が『公に』当たるか、商業用レコード等に当たるかは利用態様ごとに確認する。",
        "uncertain": "施行後の利用区分や実際の徴収対象の細分化は二次使用料規程等の具体化を待つ必要がある。",
        "sourceIds": [
          "source-bunka-copyright-bgm-right-2026",
          "source-bunka-record-performance-report-2026"
        ]
      },
      {
        "id": "bgm-right-remuneration-not-license",
        "title": "許諾を受けなければ音源を使えなくなるのか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "新設される権利は利用を許可・拒絶する許諾権ではなく、実演家・レコード製作者が二次使用料を受ける請求権として設計されている。",
        "exception": "楽曲の著作権者に対する演奏権等の処理や、音源・配信サービスの契約上必要な許諾は別問題であり、新制度だけで全ての権利処理が完結するわけではない。",
        "uncertain": "指定団体・管理事業者・BGMサービス事業者間の実際の手続がどこまで一体化されるかは今後の運用を確認する。",
        "sourceIds": [
          "source-bunka-copyright-bgm-right-2026",
          "source-bunka-record-performance-report-2026"
        ]
      },
      {
        "id": "bgm-right-fee-system",
        "title": "二次使用料規程と徴収方法はどう決まるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "指定団体は利用区分ごとの二次使用料規程案を公示し、利用者代表との協議や必要に応じた文化庁長官の裁定を経て規程を届け出・公表する。具体的な料金水準・徴収方法はまだ確定していない。",
        "exception": "規程に定める額を超える額は請求できない。利用者の業種・規模・利用態様等を踏まえた料金区分や減免等が検討されているが、現時点で具体的な適用を断定しない。",
        "uncertain": "指定団体、料金区分、徴収開始時期、包括徴収の対象、減免・猶予措置、利用報告の方法は今後の公示・協議・運用整備を確認する。",
        "sourceIds": [
          "source-bunka-copyright-bgm-right-2026",
          "source-bunka-record-performance-report-2026"
        ]
      },
      {
        "id": "bgm-right-business-prep",
        "title": "企業は施行前に何を確認しておくべきか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "自社が公衆に音楽を聴かせている場面と音源の調達経路・契約を整理し、新たな二次使用料と既存の著作権料・サービス料金を区別して確認できるようにする。",
        "exception": "業務用BGM事業者等を通じた包括徴収が採用される利用では、利用者が指定団体へ直接手続をする必要がない可能性がある。",
        "uncertain": "実際の申請・支払・利用報告が事業者単位、店舗単位、BGMサービス単位のどこで処理されるかは今後の運用設計による。",
        "sourceIds": [
          "source-bunka-copyright-bgm-right-2026",
          "source-bunka-record-performance-report-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-bunka-copyright-bgm-right-2026",
      "source-bunka-record-performance-report-2026"
    ],
    "practicalImpacts": [
      "店舗・飲食店・宿泊施設のBGM運用",
      "商業施設・イベント・スポーツ会場の音楽利用",
      "BGMサービス・音楽配信サービス契約",
      "知的財産・著作権管理",
      "利用料・予算管理",
      "利用報告・権利処理データ",
      "業界団体との協議対応"
    ]
  },
  {
    "slug": "corporate-governance-code-2026",
    "title": "コーポレートガバナンス・コード（2026年改訂）",
    "categories": [
      "会社法・ガバナンス",
      "金融商品取引・開示・IR"
    ],
    "summary": "2026年7月21日に施行されたコーポレートガバナンス・コード改訂について、プリンシプルベースへの回帰、補充原則の廃止と解釈指針、成長投資、取締役会の機能強化、有価証券報告書の株主総会前開示を中心に、上場会社の実務対応を追う。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "金融庁と東京証券取引所は2026年7月21日にコーポレートガバナンス・コードの2026年改訂版を公表し、東京証券取引所は同日、改訂に係る上場規程の一部改正を施行した。",
      "今回の改訂は、形式的なチェックリスト対応を減らし、各社が原則の趣旨・精神に照らして自社に適したガバナンスを実践し説明するプリンシプルベースの運用を強めることを狙っている。",
      "改訂では補充原則を廃止し、4つの基本原則と26の原則を中心とする体系に整理したうえで解釈指針を設け、成長投資、取締役会の機能強化、有価証券報告書の株主総会前開示を主要な改訂事項として扱っている。"
    ],
    "currentSummary": {
      "facts": [
        "東京証券取引所は2026年7月21日、コーポレートガバナンス・コード改訂に係る有価証券上場規程の一部改正を同日から施行した。",
        "2026年改訂版は従来の補充原則を廃止し、4つの基本原則と26の原則を中心に再編し、新たに解釈指針を設けた。",
        "改訂版では成長投資に向けた取組み、取締役会の機能強化、有価証券報告書の定時株主総会前開示の重要性が強調されている。",
        "金融庁と東京証券取引所は改訂版の確定とあわせて、改訂の概要、上場会社・投資家向けメッセージ、取締役会機能強化の事例集、パブリックコメント結果等を公表している。"
      ],
      "interpretations": [
        "改訂の趣旨は原則ごとの形式的な充足確認を増やすことではなく、自社の状況に応じて原則の趣旨・精神を踏まえた取組みを選び、その理由と実効性を投資家に説明できる状態をつくることにある。",
        "解釈指針は実務上の重要な参照材料だが、個々の記載を機械的なチェックボックスとして扱うより、基本原則・原則と序文の趣旨を合わせて検討する必要がある。",
        "成長投資、取締役会、有価証券報告書の総会前開示については、法務・総務だけで完結させず、経営企画、財務・IR、取締役会事務局、開示担当の実務をつなげて見直す必要がある。"
      ],
      "implications": [
        "現行のコーポレート・ガバナンス報告書と社内のガバナンス運用を、2026年改訂版の基本原則・原則・解釈指針に照らして棚卸しする。",
        "コンプライとする原則も含め、取組みの実態と説明内容が対応しているか確認し、形式的な定型文だけで済ませない。",
        "成長投資と資本配分の議論、取締役会の役割・運営・事前準備、投資家との対話を、開示内容と整合させる。",
        "有価証券報告書の総会前開示について、作成日程、監査・社内承認、株主総会資料との関係を確認する。"
      ],
      "uncertain": [
        "各社にとってどの取組み・説明が十分かは事業特性、上場市場、ガバナンス体制等により異なり、コードの文言だけから一律に決まるものではない。",
        "2027年7月末までに提出するコーポレート・ガバナンス報告書への反映など、移行実務の具体的な進め方は東京証券取引所の記載要領・更新資料と各社の提出時期を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "cg-code-principles-explain",
        "title": "プリンシプルベースとコンプライ・オア・エクスプレインはどう変わったか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "補充原則を廃止して基本原則・原則へ規範を集約し、解釈指針を参照しながら、各社が原則の趣旨・精神に照らして自社の取組みを判断・説明する体系へ整理された。",
        "exception": "解釈指針の個々の記載を実施していないことだけをもって直ちにコード違反と機械的に評価するものではない。",
        "uncertain": "各社の説明が十分かは会社の状況と取組みの実態に依存するため、投資家との対話や今後の好事例も確認する。",
        "sourceIds": [
          "source-jpx-cg-code-2026",
          "source-fsa-cg-code-2026"
        ]
      },
      {
        "id": "cg-code-growth-investment",
        "title": "成長投資と資本配分をどうガバナンスへ組み込むか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "成長投資を単なる投資額の開示ではなく、中長期的な企業価値向上に向けた経営判断、資本配分、取締役会の監督、投資家への説明と結び付けて検討する。",
        "exception": "具体的な投資水準や資本配分をコードが一律に定めるものではなく、自社の状況に応じた判断と説明が前提となる。",
        "uncertain": "投資家がどの説明を有用と評価するかは各社の事業特性等で異なるため、対話と開示実務の蓄積を継続確認する。",
        "sourceIds": [
          "source-jpx-cg-code-2026",
          "source-fsa-cg-code-2026"
        ]
      },
      {
        "id": "cg-code-board-function",
        "title": "取締役会の機能強化をどう実務へ落とすか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "取締役会の機能強化は形式的な体制整備だけでなく、企業価値向上に必要な論点を議論し意思決定・監督できる運営まで含めて見直す。",
        "exception": "最適な取締役会の構成や運営方法は会社の規模・事業・機関設計等によって異なる。",
        "uncertain": "金融庁の事例集や各社の開示・実務例を参照しつつ、自社に適した方法を継続的に検証する必要がある。",
        "sourceIds": [
          "source-fsa-cg-code-2026"
        ]
      },
      {
        "id": "cg-code-pre-agm-disclosure",
        "title": "有価証券報告書の株主総会前開示をどう扱うか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "改訂版は、株主が総会で適切に判断できる環境整備の一つとして有価証券報告書の総会前開示を位置付け、総会より十分前の情報提供を促している。",
        "exception": "個社の事情を無視して形式的な前倒しだけを求めるのではなく、困難な場合には原則の趣旨に照らした説明が問題となる。",
        "uncertain": "開示日程の前倒しと会社法上の事業報告等との関係については、並行する会社法制見直しや実務動向も継続確認する。",
        "sourceIds": [
          "source-jpx-cg-code-2026",
          "source-fsa-cg-code-2026"
        ]
      },
      {
        "id": "cg-code-reporting-transition",
        "title": "改訂版をコーポレート・ガバナンス報告書へいつ反映するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "報告書の文言だけを置換するのではなく、改訂版に沿った社内の取組みを確認したうえで、その実態を次回のコーポレート・ガバナンス報告書へ反映する。",
        "exception": "具体的な提出時期は各社の基準日・提出スケジュール等を確認する必要がある。",
        "uncertain": "東京証券取引所の記載要領や更新資料の追加・修正があれば、その内容を継続確認する。",
        "sourceIds": [
          "source-jpx-cg-code-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jpx-cg-code-2026",
      "source-fsa-cg-code-2026"
    ],
    "practicalImpacts": [
      "コーポレート・ガバナンス報告書",
      "取締役会運営・事前準備",
      "経営戦略・成長投資・資本配分",
      "IR・機関投資家との対話",
      "有価証券報告書の開示日程",
      "株主総会運営",
      "社内のガバナンス方針・規程"
    ]
  },
  {
    "slug": "film-anime-production-transactions",
    "title": "映画・アニメ制作取引の適正化",
    "categories": [
      "契約",
      "独占禁止法・競争法",
      "知的財産"
    ],
    "summary": "2026年6月22日に公表された映画・アニメ制作現場の取引適正化指針を基礎に、製作委員会・配信事業者、元請・下請制作会社、フリーランスの各取引段階について、契約条件、対価・著作権、追加作業・リテイク、支払を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "公正取引委員会と内閣府知的財産戦略推進事務局は2026年6月22日、2025年の実態調査を踏まえ、映画とアニメの制作現場について取引適正化指針を策定した。",
      "指針は製作委員会等・動画配信事業者と元請制作会社、元請制作会社と下請制作会社、制作会社とフリーランスという多層の取引を、独占禁止法、取適法、フリーランス法の観点から整理している。",
      "発注時の条件明示、対価交渉、著作権譲渡対価、発注取消し、制作期間の延期・追加作業・リテイク、支払遅延など、コンテンツ制作契約の実務に直結する具体例が示されている。"
    ],
    "currentSummary": {
      "facts": [
        "映画指針・アニメ指針はいずれも2026年6月22日に策定・公表され、独占禁止法、取適法、フリーランス法に照らした具体的な考え方を示している。",
        "制作委託では、取引条件を発注時に速やかに書面等で明示し、未定事項も確定後速やかに補充して明示することが求められる。",
        "制作委託費は要求クオリティ、物価上昇、制作期間等を踏まえて十分に協議し、著作権を譲渡させる場合は著作権の譲渡対価を含むことを明確にした上で交渉することが示されている。",
        "発注者側の事情による延期、追加業務、リテイク等で追加費用が発生する場合には追加の制作委託費を支払い、責任の所在が明確でないリテイクでも経緯を踏まえて合理的な負担割合を協議する考え方が示されている。",
        "多層の制作構造で上流の決裁・出資等が遅れていても、下流の取引について定めた支払期日までの支払を行う必要がある。"
      ],
      "interpretations": [
        "コンテンツ制作では一つの標準契約だけで対応せず、製作委員会・配信事業者、制作会社、フリーランスという取引段階ごとに当事者関係と適用法を確認する必要がある。",
        "著作権譲渡対価を制作委託費に含める場合でも、単に契約書に包括的な権利帰属条項を置くだけでなく、権利譲渡が取引条件であることと対価に含まれることを双方が認識して協議できる状態にすることが重要になる。",
        "創作物のクオリティを発注時に完全には定義できない事情があっても、『完成保証』を理由に追加作業・リテイクを無償で無制限に負担させる運用は避け、追加作業の原因と費用負担を協議する仕組みを設ける方がよい。"
      ],
      "implications": [
        "制作委託契約書・発注書の明示事項、発注時期、未定事項の補充フローを点検する。",
        "制作委託費、成功報酬・制作印税、著作権譲渡対価について、協議記録と価格決定根拠を残す。",
        "仕様変更、延期、追加作業、リテイク、発注取消しについて、承認手続と追加費用・損失負担のルールを整備する。",
        "製作委員会・動画配信事業者からフリーランスまでの支払期日と支払責任を取引段階ごとに確認する。",
        "既存契約の包括的な権利帰属・完成保証・無償修正条項が実際の運用で受注側へ一方的な負担を生じさせていないか確認する。"
      ],
      "uncertain": [
        "通常支払われる対価、合理的なリテイク費用負担、優越的地位の有無などは作品、当事者関係、交渉経緯、取引実態により個別に判断される。",
        "指針公表後の具体的な執行事例や業界標準契約・取引慣行の変化は今後も確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "content-production-applicable-rules",
        "title": "映画・アニメ制作ではどの取引段階にどの規律を見るか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "製作委員会等・動画配信事業者から元請制作会社、元請から下請制作会社、制作会社からフリーランスまでの各取引について、当事者関係に応じて独占禁止法、取適法、フリーランス法を確認する。",
        "exception": "各法の適用は資本金・従業員数、取引類型、フリーランス該当性、取引上の地位等により異なる。",
        "uncertain": "個別契約への適用は当事者と取引実態を確認して判断する。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026"
        ]
      },
      {
        "id": "content-production-terms-disclosure",
        "title": "制作開始前に取引条件をどこまで明示するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "発注時に定まっている取引条件を速やかに書面等で明示し、未定事項は十分に協議して可能な限り早く確定し、確定後直ちに補充して明示する。",
        "exception": "創作業務の性質上、発注時点で全ての詳細を確定できない場合があること自体は否定されていない。",
        "uncertain": "個別案件で未定とすることに合理性があるか、確定後の補充が適時かは実際の制作工程に即して確認する。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026"
        ]
      },
      {
        "id": "content-production-price-consultation",
        "title": "制作委託費・報酬と価格協議をどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "要求クオリティ、制作期間、人件費・物価等の事情を考慮し、受注者から価格協議の求めがあれば必要な説明・情報提供を行いながら十分に協議する。",
        "exception": "受注者の希望額を必ず受け入れる義務ではないが、協議を拒否したり事情を考慮せず著しく低い対価を定めたりしない。",
        "uncertain": "通常支払われる対価や必要な説明の水準は、職種、作品、作業量、取引継続性等により個別評価が残る。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026",
          "source-jftc-film-anime-survey-2025"
        ]
      },
      {
        "id": "content-production-copyright-compensation",
        "title": "著作権譲渡と制作委託費をどう交渉・明示するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "著作権を譲渡させる場合、譲渡対価を含む制作委託費について十分に協議し、著作権譲渡が取引条件であることと対価に含まれることが当事者間で認識できるようにする。",
        "exception": "著作権の帰属自体は著作権法29条や個別契約・制作実態により異なり、一律に製作委員会へ帰属するものではない。",
        "uncertain": "適正な譲渡対価の水準は作品・権利範囲・利用形態・交渉状況等によって異なる。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026"
        ]
      },
      {
        "id": "content-production-retakes-costs",
        "title": "追加作業・リテイクの費用を誰が負担するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "受注側に責任がない追加作業・延期・リテイクは追加費用を支払い、責任が曖昧な場合も経緯を踏まえて合理的な負担割合を十分に協議する。",
        "exception": "受注側の責めに帰すべき不履行の是正など、追加費用を発注者が負担すべきでない場合もある。",
        "uncertain": "創作物の品質評価と責任分担は案件ごとの仕様、指示、コミュニケーション記録に左右される。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026"
        ]
      },
      {
        "id": "content-production-payment-chain",
        "title": "多層の制作体制で支払遅延をどう防ぐか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "上流の決裁・出資・支払が完了していないことを理由に下流の制作委託費を遅らせず、各取引で定めた支払期日までに支払う。",
        "exception": "具体的な法定支払期日や禁止行為は各取引に適用される法令によって確認する。",
        "uncertain": "製作委員会方式や配信事業者を含む契約構造ごとに、実際の資金フローと契約上の支払責任を確認する必要がある。",
        "sourceIds": [
          "source-jftc-film-anime-guidelines-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-jftc-film-anime-guidelines-2026"
    ],
    "practicalImpacts": [
      "制作委託契約・発注書",
      "取引条件の早期明示",
      "制作委託費・価格協議",
      "著作権帰属・譲渡対価",
      "仕様変更・リテイク・追加費用",
      "発注取消し・損失負担",
      "支払期日・制作資金フロー",
      "フリーランス取引管理"
    ]
  },
  {
    "slug": "security-assignment-retention-title",
    "title": "譲渡担保法・所有権留保",
    "categories": [
      "契約"
    ],
    "summary": "2025年に成立・公布され、施行を控える譲渡担保法について、動産・債権の譲渡担保と所有権留保の法定化、対抗要件・順位、既存契約の経過措置、根譲渡担保、実行・倒産時の取扱いを、融資・債権管理・取引契約の実務から追う。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "2025年5月30日に『譲渡担保契約及び所有権留保契約に関する法律』と整備法が成立し、同年6月6日に公布された。",
      "新法は、これまで明文規定がなかった動産・債権等の譲渡担保・所有権留保について、効力、実行、倒産手続での取扱い等を定め、動産・債権譲渡登記制度も見直す。",
      "一部を除く施行日は公布日から2年6月を超えない範囲内の政令指定日で未確定だが、施行前に締結済み・締結予定の担保契約にも経過措置や順位保全の検討が必要となる。"
    ],
    "currentSummary": {
      "facts": [
        "譲渡担保法・整備法は2025年6月6日に公布され、一部を除き公布日から2年6月以内の政令指定日に施行される。",
        "譲渡担保法は動産・債権等を目的とする譲渡担保契約と所有権留保契約について、その効力、担保権・留保所有権の実行、破産手続等での取扱いを定める。",
        "整備法は動産・債権譲渡登記制度の見直しなど関係法令を整備する。"
      ],
      "interpretations": [
        "施行日が未確定でも、既存・新規の動産譲渡担保や債権譲渡担保について、対抗要件、契約条項、登記、倒産時の効力を現行実務のまま据え置けるとは限らないため、施行前から棚卸しを始める意味がある。",
        "特に占有改定だけで対抗要件を備えた既存の動産譲渡担保や、将来の譲渡を想定する根譲渡担保は、新法の順位・登記ルールを踏まえて契約と公示方法を見直す必要がある。"
      ],
      "implications": [
        "動産・債権譲渡担保、所有権留保を使う融資・売買取引を棚卸しする。",
        "占有改定、動産譲渡登記、債権譲渡登記など現在の対抗要件の取り方を確認する。",
        "施行日前に締結した契約への経過措置と順位保全の登記の要否を検討する。",
        "根譲渡担保の極度額・登記・将来の担保権譲渡を契約段階で確認する。",
        "私的実行や倒産時の効力を前提とした契約・回収手順を施行前に見直す。"
      ],
      "uncertain": [
        "具体的な施行日は2026年9月4日時点で政令により確定していない。",
        "順位保全の登記を含む登記実務の詳細は、施行に向けて整備される政省令・告示・登記運用を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "security-assignment-statutory-rules",
        "title": "譲渡担保・所有権留保の何が法定化されるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "動産・債権等の譲渡担保契約と所有権留保契約について、効力、実行、倒産手続での取扱い等が法律上明文化され、関連する動産・債権譲渡登記制度も見直される。",
        "exception": "対象財産・契約類型ごとの具体的な適用関係は条文と個別取引を確認する必要がある。",
        "uncertain": "施行に必要な下位法令・登記運用の具体化は継続確認が必要。",
        "sourceIds": [
          "source-moj-security-assignment-act-2025"
        ]
      },
      {
        "id": "security-assignment-transition",
        "title": "施行前に締結した譲渡担保契約をどう扱うか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "施行日前の契約だから一律に旧実務だけで処理できるとは考えず、経過措置ごとに新法の適用有無を確認する。",
        "exception": "新法の規定ごとに経過措置が異なるため、既存契約への適用を一括して判断しない。",
        "uncertain": "個々の既存契約について必要な修正・追加手続は担保目的物、対抗要件、契約時期等によって異なる。",
        "sourceIds": [
          "source-moj-security-assignment-act-2025"
        ]
      },
      {
        "id": "security-assignment-priority-preservation",
        "title": "占有改定による既存担保の順位をどう保全するか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "占有改定だけで対抗要件を備えた動産譲渡担保について、新法施行後の順位低下リスクと順位保全の登記の要否を確認する。",
        "exception": "順位関係は競合する担保の種類・対抗要件具備時期・経過措置の要件によって異なる。",
        "uncertain": "順位保全の登記の具体的な運用・記録事項は施行に向けた制度整備を確認する必要がある。",
        "sourceIds": [
          "source-moj-security-assignment-act-2025"
        ]
      },
      {
        "id": "security-assignment-root-security",
        "title": "根譲渡担保の極度額・登記をどう設計するか",
        "status": "interpreted",
        "stage": "enacted",
        "views": [],
        "conclusion": "根譲渡担保を設定する際は、被担保債権の将来譲渡・シンジケーション等の可能性を踏まえて、極度額と登記を契約段階で検討する。",
        "exception": "極度額を定める必要性や担保権譲渡の予定は個別の融資・取引構造によって異なる。",
        "uncertain": "具体的な登記実務や契約条項は施行準備資料と実務例の蓄積を確認する。",
        "sourceIds": [
          "source-moj-security-assignment-act-2025"
        ]
      },
      {
        "id": "security-assignment-enforcement-insolvency",
        "title": "担保実行・倒産時の取扱いをどう見直すか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "新法は譲渡担保権・留保所有権の実行と、破産手続等における権利の取扱いを法定するため、回収・私的実行・倒産対応の契約と手順を新法に照らして確認する必要がある。",
        "exception": "具体的な実行方法や倒産時の効力は担保類型、目的財産、契約内容等によって異なる。",
        "uncertain": "施行後の裁判例・実務運用が蓄積するまでは、条文と施行準備資料を基礎に個別判断する必要がある。",
        "sourceIds": [
          "source-moj-security-assignment-act-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-security-assignment-act-2025"
    ],
    "practicalImpacts": [
      "融資契約・担保設定契約",
      "動産・債権譲渡担保",
      "所有権留保",
      "ABL・在庫／売掛債権担保",
      "動産・債権譲渡登記",
      "占有改定・順位保全",
      "根譲渡担保",
      "債権管理・回収",
      "倒産対応"
    ]
  },
  {
    "slug": "startup-ma-guidance",
    "title": "スタートアップM&A・投資契約",
    "categories": [
      "M&A",
      "契約",
      "会社法・ガバナンス"
    ],
    "summary": "2026年5月に経済産業省が公表したスタートアップM&Aガイダンスを基礎に、IPOとM&Aのデュアルトラック、資金調達段階の投資契約・株主間契約、買い手側の体制・ソーシング、買収ストラクチャー、SO・コンバーティブル投資手段、契約・PMIを整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "経済産業省は2026年5月21日、スタートアップM&Aを成長・EXITの選択肢として活性化するため『スタートアップM&Aガイダンス』を公表した。",
      "ガイダンスは売り手に対して経営初期からIPOとM&Aを並列に考えるデュアルトラック、資本政策・ガバナンス設計を促し、買い手には経営トップ主導の体制、能動的なソーシング、シナジーの具体化などを示す。",
      "M&A実行時だけでなく、シード・アーリー期の優先残余財産分配、拒否権、先買権、ドラッグアロング、上場努力義務等が将来のM&A成立可能性に影響するため、投資契約の段階からEXITの選択肢を意識する必要がある。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省の2026年ガイダンスは、スタートアップの売り手・買い手双方に対し、M&Aを成長・EXITの有力な選択肢として検討するための実務上の留意事項を体系化している。",
        "売り手側ではIPOとM&Aを早期からフラットに検討するデュアルトラック、資本政策・ガバナンス、専門人材・外部専門家の活用が扱われている。",
        "買い手側では経営トップ主導のM&A体制、スタートアップ向けの柔軟な評価・意思決定、能動的ソーシング、シナジーの具体化、PMIまでを一体で扱っている。",
        "実行フェーズでは即時・段階的買収等のストラクチャー、新株予約権・コンバーティブル投資手段、表明保証・補償、リテンションなどが論点となる。"
      ],
      "interpretations": [
        "スタートアップM&Aの成否は売却交渉が始まってからの契約だけで決まらず、資金調達初期に設定した優先分配、拒否権、先買権、ドラッグアロング、EXIT義務等が将来の意思決定と経済合理性を左右する。",
        "買い手も通常の成熟企業M&Aと同じ評価・承認基準を機械的に当てはめるのではなく、スタートアップの成長性・不確実性を前提に、戦略、意思決定、価格、PMIをつなげた体制を設計する必要がある。"
      ],
      "implications": [
        "投資契約・株主間契約の優先分配、拒否権、先買権、ドラッグアロング、EXIT条項を将来のM&Aから逆算して点検する。",
        "IPO前提の上場努力義務を置いている場合、M&A等を含むEXIT選択肢との整合性を確認する。",
        "買い手側はスタートアップM&A用の案件発掘・評価・承認・PMI体制を整える。",
        "即時買収・段階的買収等の構造と、創業者・従業員のリテンションを一体で設計する。",
        "SO、CB、CE、J-KISS等の処理を最終契約の前提条件・クロージング手順へ落とす。"
      ],
      "uncertain": [
        "ガイダンスは一律の正解となる契約条項や買収方式を定めるものではなく、投資家構成、成長段階、買収目的等に応じた設計が必要。",
        "実務上の市場慣行や契約雛形がガイダンス公表後にどう変化するかは継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "startup-ma-dual-track",
        "title": "IPOとM&Aをいつから並列に検討するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "経営初期からIPOとM&Aをフラットに比較するデュアルトラックを意識し、資本政策・ガバナンスが後のM&Aを不必要に阻害しないようにする。",
        "exception": "IPOかM&Aのどちらを選ぶべきかを一律に決めるものではなく、会社の成長戦略・市場環境・株主構成等によって判断する。",
        "uncertain": "最適なEXIT時期・手法は個社の事業状況と市場環境に左右される。",
        "sourceIds": [
          "source-meti-startup-ma-guidance-2026"
        ]
      },
      {
        "id": "startup-ma-investment-contract",
        "title": "資金調達段階の投資契約をM&Aに備えてどう設計するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "M&Aの検討開始後に初めて株主間の権利を確認するのではなく、資金調達段階から将来の売却時の合意形成・分配を見据えて投資契約・株主間契約を設計する。",
        "exception": "投資家保護のための拒否権・優先権等が不要という意味ではなく、会社の成熟度・投資条件とのバランスで設計する。",
        "uncertain": "適切な分配構造や承認割合等はラウンド、投資家構成、企業価値等によって異なる。",
        "sourceIds": [
          "source-meti-startup-ma-guidance-2026"
        ]
      },
      {
        "id": "startup-ma-buyer-organization",
        "title": "買い手はスタートアップM&Aの体制・ソーシングをどう作るか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "スタートアップM&Aを経営トップ主導の成長戦略として位置付け、既存事業と異なる前提を扱える評価・意思決定体制を整え、自社戦略から能動的に候補を探索する。",
        "exception": "組織形態や承認プロセスは買い手企業の規模・事業・M&A経験等に応じて設計する。",
        "uncertain": "どの体制が最も有効かは案件蓄積やPMI実績を踏まえて継続的に見直す必要がある。",
        "sourceIds": [
          "source-meti-startup-ma-guidance-2026"
        ]
      },
      {
        "id": "startup-ma-structure-convertibles",
        "title": "買収ストラクチャーとSO・コンバーティブルをどう処理するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "スタートアップ特有の複雑な株主・権利構成を踏まえ、取得割合・時期とSO・コンバーティブルの処理、買収後のインセンティブを一体で設計する。",
        "exception": "最適な買収方式は支配権取得の必要性、事業リスク、株主構成、税務等によって異なる。",
        "uncertain": "個別商品・契約ごとの消滅、転換、買い取り等の処理は発行条件と当事者合意を確認する必要がある。",
        "sourceIds": [
          "source-meti-startup-ma-guidance-2026"
        ]
      },
      {
        "id": "startup-ma-contract-pmi",
        "title": "M&A契約とPMIでスタートアップ特有のリスクをどう配分するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "契約上のリスク配分だけでディールを完結させず、買収後の人材・事業価値を維持するPMIとリテンションまで含めて条件を設計する。",
        "exception": "表明保証・補償の範囲やリテンション手段は案件規模、DD結果、交渉力等により異なる。",
        "uncertain": "ガイダンス後の市場慣行・保険利用・報酬設計の変化は継続確認する。",
        "sourceIds": [
          "source-meti-startup-ma-guidance-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-startup-ma-guidance-2026"
    ],
    "practicalImpacts": [
      "投資契約・株主間契約",
      "優先残余財産分配",
      "拒否権・事前承認事項",
      "先買権・ドラッグアロング",
      "IPO／M&AのEXIT戦略",
      "買い手のM&A体制・ソーシング",
      "買収ストラクチャー",
      "SO・CB・CE・J-KISS",
      "表明保証・補償",
      "リテンション・PMI"
    ]
  },
  {
    "slug": "dispatch-contracting-compliance",
    "title": "労働者派遣・請負／偽装請負",
    "categories": [
      "労務",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "業務委託・請負と労働者派遣の区分、発注者による指揮命令の限界、システム開発や秘密管理での実務運用、無許可派遣・禁止業務への執行を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "労働者派遣と請負・業務委託の区分は契約名称では決まらず、発注者と受注者側労働者の指揮命令関係、受注者による労務管理、業務遂行上の独立性などを実態に即して判断する。",
      "厚生労働省は37号告示と疑義応答集で判断を具体化しており、2026年5月25日には第3集へQ8を追加し、アジャイル型以外のシステム開発にも同集Q1〜Q7の考え方が当てはまることを明示した。",
      "2026年9月3日には山口労働局の刑事告発が公表され、無許可派遣、建設業務への派遣、労働者供給について、実際に他社の指揮命令下で就労させる運用が刑事執行の対象となり得ることが確認できる。"
    ],
    "currentSummary": {
      "facts": [
        "厚生労働省は、労働者派遣を派遣先の指揮命令を受けて働く仕組みと整理し、請負との区分は契約形式ではなく37号告示に基づき実態で判断するとしている。",
        "37号告示の疑義応答集第3集は、準委任契約を含むシステム開発でも、発注者と受注者側労働者の間に指揮命令関係があれば労働者派遣に該当し得るとする。",
        "2026年5月25日追加のQ8により、第3集Q1〜Q7の考え方はアジャイル型以外のシステム開発にも適用されることが明示された。",
        "2026年9月3日公表の山口労働局事案では、無許可で労働者を繰り返し派遣・供給し、派遣が禁止される建設業務を他社の指揮命令下で行わせた疑いについて刑事告発が行われた。"
      ],
      "interpretations": [
        "発注者と受注者側担当者が同じ会議・チャット・プロジェクト管理ツールで密に協働しても、それだけで偽装請負になるわけではない。役割が明確で、受注者側担当者が自律的に業務を進め、発注者の連絡が業務遂行方法や労働時間の直接指示になっていないことが重要になる。",
        "秘密保持、情報セキュリティ、施設管理、安全衛生上のルールを設ける必要がある場合でも、個々の受注者従業員への指示経路、人員選定、労働時間管理まで発注者が握ると偽装請負リスクが高まるため、受注者の管理責任者を介する運用が有力となる。"
      ],
      "implications": [
        "業務委託・準委任・請負契約について、契約名称だけでなく実際の指揮命令、勤怠管理、人員配置、作業手順の決定主体を点検する。",
        "常駐委託やシステム開発では、発注者・受注者の役割、管理責任者、会議・チャットで許容する連絡の範囲を事前に設計する。",
        "スキルシートや担当者情報を求める場合、個人の指名・就業拒否へつながる運用になっていないか確認する。",
        "秘密保持誓約、端末・作業場所・アクセス制御等のセキュリティ要件は、必要性を明確にし、原則として受注者を通じて実施する。",
        "建設等の派遣禁止業務、派遣事業の許可、再委託・労働者供給の流れをサプライチェーン全体で確認する。"
      ],
      "uncertain": [
        "偽装請負に該当するかは、契約書だけではなく、会議・チャット・勤怠・人員配置・現場指示を含む個別の運用実態により判断される。",
        "秘密管理や安全衛生上必要な指示と、労働者への業務遂行上の直接指揮命令との境界は、目的・必要性・指示経路・実際の拘束の程度によって変わる。"
      ]
    },
    "issues": [
      {
        "id": "dispatch-contracting-classification",
        "title": "派遣と請負・業務委託をどう区分するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "契約名称ではなく、受注者が自ら労働者を管理し、業務を発注者から独立して処理しているかなど、37号告示に沿って実態で判断する。",
        "exception": "請負・準委任の形式でも、発注者が受注者側労働者へ直接指揮命令していれば労働者派遣に該当し得る。",
        "uncertain": "個別案件の区分は、実際の作業指示、労働時間管理、人員配置その他の運用を踏まえて判断される。",
        "sourceIds": [
          "source-mhlw-dispatch-contracting-guide",
          "source-mhlw-dispatch-contracting-qa3-2026"
        ]
      },
      {
        "id": "dispatch-system-development",
        "title": "システム開発の協働はどこまで許されるか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "発注者と受注者側担当者が対等に情報共有・技術的助言を行い、受注者側が自律的に業務を進める限り、密な協働や共通ツールの利用だけで直ちに偽装請負とはならない。",
        "exception": "発注者が受注者側担当者へ業務遂行方法や労働時間等を直接指示する場合は、指揮命令関係が認められ得る。",
        "uncertain": "チーム内の具体的なコミュニケーションが情報提供か指揮命令かは、実際の権限関係と運用により判断される。",
        "sourceIds": [
          "source-mhlw-dispatch-contracting-qa3-2026"
        ]
      },
      {
        "id": "dispatch-security-controls",
        "title": "秘密管理・セキュリティ上の指示をどう設計するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "秘密管理・セキュリティ上必要なルールは目的と必要性を明確にし、受注者の管理責任を維持できる指示経路で運用する。",
        "exception": "担当者情報の報告や秘密保持誓約等が直ちに偽装請負となるわけではないが、発注者による個人選定や直接の業務指示へ発展するとリスクが高まる。",
        "uncertain": "許容される管理の範囲は、扱う情報・設備・安全上の必要性と、受注者側の独立性の程度により異なる。",
        "sourceIds": [
          "source-mhlw-dispatch-contracting-guide"
        ]
      },
      {
        "id": "dispatch-management-routing",
        "title": "発注者の要望・指示を誰に伝えるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "発注者からの業務上の要望は受注者の管理責任者等へ伝え、受注者が自ら労働者への具体的指示を行う体制を実運用として確保する。",
        "exception": "発注者からの説明、情報共有、技術的助言が常に禁止されるわけではなく、受注者側の自律性を損なう指揮命令かどうかが問題となる。",
        "uncertain": "管理責任者の同席が不要な場面もあるため、肩書ではなく実際の権限と指示経路を確認する必要がある。",
        "sourceIds": [
          "source-mhlw-dispatch-contracting-guide",
          "source-mhlw-dispatch-contracting-qa3-2026"
        ]
      },
      {
        "id": "dispatch-prohibited-enforcement",
        "title": "無許可派遣・禁止業務・労働者供給の執行リスク",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "許可を受けずに他社の指揮命令下で労働者を就労させる運用や、建設等の派遣禁止業務、禁止される労働者供給は刑事告発を含む執行対象となり得る。",
        "exception": "適法な請負・業務委託や、法令上認められた労働者派遣・供給まで一律に禁止されるものではない。",
        "uncertain": "個別取引が派遣・労働者供給に当たるか、禁止業務に該当するかは具体的な契約・指揮命令・作業内容による。",
        "sourceIds": [
          "source-mhlw-dispatch-enforcement-yamaguchi-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-mhlw-dispatch-contracting-guide",
      "source-mhlw-dispatch-contracting-qa3-2026",
      "source-mhlw-dispatch-enforcement-yamaguchi-2026"
    ],
    "practicalImpacts": [
      "業務委託・請負・準委任契約",
      "常駐委託",
      "システム開発",
      "管理責任者・指示経路",
      "会議・チャット運用",
      "勤怠・人員配置",
      "秘密保持・情報セキュリティ",
      "建設等の派遣禁止業務",
      "再委託・労働者供給",
      "行政対応・刑事リスク"
    ]
  },
  {
    "slug": "insider-trading-information-management",
    "title": "インサイダー取引規制・重要情報管理",
    "categories": [
      "金融商品取引・開示・IR",
      "M&A",
      "危機管理・コンプライアンス"
    ],
    "summary": "上場会社・M&A案件でのインサイダー取引規制を、公開買付け情報の伝達、対象会社側アドバイザー、親会社判定、課徴金、海外グループや他人名義口座まで含む情報管理の実務として整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "インサイダー取引規制は、重要事実・公開買付け等事実の内容だけでなく、誰がどの立場で情報を知り、誰へ伝達したかによって適用関係が変わります。M&Aでは買付者側だけでなく、対象会社側の役職員・アドバイザーやグループ会社を含む情報アクセス管理が重要です。",
      "2026年7月1日から、インサイダー取引規制上の『親会社』は有価証券報告書等の記載に依拠せず、他の会社の意思決定機関を支配している会社を基準に判定する仕組みに変わりました。支配関係の変化とインサイダーリストの更新を連動させる必要があります。",
      "2026年7月に成立した金商法等改正では、公開買付けの対象会社と契約を締結・交渉している者などを規制対象へ広げるほか、他人名義口座を利用した不公正取引への課徴金強化等が盛り込まれました。有価証券に関する不公正取引規制等の見直しは公布後1年以内の政令指定日施行で、現時点では施行前です。",
      "証券取引等監視委員会のNIPPO事件では、海外居住者が公開買付け情報の伝達を受け、親族名義・親族計算の口座で取引した事案について課徴金納付命令が勧告されました。国境や口座名義だけで情報管理・取引監視の対象から外せないことが分かります。"
    ],
    "currentSummary": {
      "facts": [
        "2026年7月1日から、インサイダー取引規制上の『親会社』は、他の会社の意思決定機関を支配している会社を基準に判定する。",
        "2026年7月15日に成立した金商法等改正は、公開買付けの対象会社と契約を締結・交渉している者等への対象拡大や、不公正取引に対する課徴金制度の強化を含む。",
        "有価証券に関する不公正取引規制等の見直しは公布後1年以内の政令指定日施行で、2026年9月4日時点では施行前である。",
        "2026年6月26日公表のNIPPO事件では、海外居住者が親族名義・親族計算で株式を取得した行為について1,899万円の課徴金納付命令勧告が行われた。"
      ],
      "interpretations": [
        "M&A案件のインサイダー管理では、買付者側だけでなく対象会社側のFA、法律事務所その他の契約・交渉関係者まで情報アクセス者を洗い出す方向で準備する必要がある。",
        "金融審議会では情報の二次受領者以降を一律に規制対象へ加える案は採らず、対象会社側の特別な立場にある者を追加する方向が選ばれているため、単純に『情報を聞いた全員が同じ規制対象』とは整理できない。",
        "親会社該当性が有価証券報告書の記載更新を待たず実質支配で変わり得るため、組織再編・買収後の情報管理対象を法定開示の更新サイクルだけで管理すると漏れが生じ得る。"
      ],
      "implications": [
        "M&A案件ごとにインサイダーリスト、情報共有先、NDA、株式売買制限を見直し、対象会社側アドバイザー・委託先を含めて管理する。",
        "グループ再編や子会社化の際は、実質的な支配関係の発生時点で親会社・子会社の内部者管理対象を更新する。",
        "役職員向け売買ルールでは本人名義だけでなく、親族・他人名義口座の利用や情報伝達を明示的に禁止・監視対象とする。",
        "海外グループ会社や海外アドバイザーへの情報共有でも、アクセス権限、受領者記録、売買制限を国内案件と同じプロセスで管理する。"
      ],
      "uncertain": [
        "2026年改正の有価証券に関する不公正取引規制等については、具体的な政令指定施行日と下位法令・実務運用の最終形を引き続き確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "insider-tob-target-advisers",
        "title": "TOB対象会社側のアドバイザー等はいつ規制対象になるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年改正では、公開買付け等の対象会社と契約を締結・交渉している者など、対象会社側で公開買付け等事実へアクセスする一定の者を規制対象へ加える。施行前から案件の情報アクセス者をこの範囲で棚卸しすることが望ましい。",
        "exception": "情報の二次受領者以降を一律に規制対象へ追加する制度ではなく、法定の立場・情報受領経路を個別に確認する必要がある。",
        "uncertain": "改正規定の具体的な政令指定施行日と下位法令の最終内容は引き続き確認が必要。",
        "sourceIds": [
          "source-fsa-market-system-wg-insider-2025",
          "source-fsa-fiea-unfair-trading-explanation-2026",
          "source-fsa-fiea-law-2026"
        ]
      },
      {
        "id": "insider-parent-company-definition",
        "title": "インサイダー規制上の『親会社』をいつ更新するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年7月1日以降は、有価証券報告書等への記載の有無ではなく、他の会社の意思決定機関を支配しているかを基準に親会社を判定する。支配関係が生じた時点を起点に内部者管理を更新する。",
        "exception": "具体的な支配関係の判定は政令・内閣府令上の定義に従う必要があり、単なる資本関係だけで機械的に決めない。",
        "uncertain": "複雑な支配関係・共同支配等では個別の事実確認が必要。",
        "sourceIds": [
          "source-fsa-insider-parent-rule-2026",
          "source-fsa-market-system-wg-insider-2025"
        ]
      },
      {
        "id": "insider-penalties-account-assistance",
        "title": "他人名義口座・協力行為の課徴金リスクはどう変わるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "2026年改正では、他人名義・他人計算を利用して不公正取引を行う一定の場合の課徴金を加重し、口座提供など違反に協力した者への課徴金制度も設ける方向で規律が強化された。",
        "exception": "改正規定は施行前であり、施行前の事件へ新しい課徴金規定を遡及適用するものではない。",
        "uncertain": "具体的な施行日と運用・算定の実務は施行準備資料を継続確認する。",
        "sourceIds": [
          "source-fsa-fiea-unfair-trading-explanation-2026",
          "source-fsa-fiea-law-2026",
          "source-sesc-nippo-insider-2026"
        ]
      },
      {
        "id": "insider-crossborder-information-transmission",
        "title": "海外グループ・情報受領者・親族口座までどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "公開買付け等事実の伝達を受けた者による取引は、海外居住者であっても事実関係に応じて日本のインサイダー規制の対象となり得る。本人以外の名義・計算を使った取引も管理対象から外れない。",
        "exception": "規制対象となる情報受領者の範囲は法定の伝達経路・立場に依存し、海外関係者すべてが当然に対象となるわけではない。",
        "uncertain": "海外当局との協力や証拠収集は事案ごとに異なる。",
        "sourceIds": [
          "source-sesc-nippo-insider-2026",
          "source-fsa-market-system-wg-insider-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-market-system-wg-insider-2025",
      "source-fsa-insider-parent-rule-2026",
      "source-fsa-fiea-law-2026",
      "source-fsa-fiea-unfair-trading-explanation-2026",
      "source-sesc-nippo-insider-2026"
    ],
    "practicalImpacts": [
      "M&A案件のインサイダーリスト",
      "アドバイザー・委託先とのNDA／売買制限",
      "親会社判定・グループ情報管理",
      "役職員の株式売買ルール",
      "他人名義口座・情報伝達の監視"
    ]
  },
  {
    "slug": "ai-civil-liability",
    "title": "AI利活用と民事責任",
    "categories": [
      "AI・デジタル",
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "AIの開発・提供・利用によって第三者に損害が生じた場合の民事責任を、経済産業省の2026年手引きを基礎に、補助／支援型と依拠／代替型、利用者の確認・業務プロセス設計、開発者・提供者の設計・情報提供、フィジカルAIの製造物責任、紛争時の立証・手続まで整理する。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "経済産業省は2026年4月9日、AI利活用時の民事責任について、現行法上の不法行為法・製造物責任法をどのように解釈適用し得るかを整理した手引きを公表しました。新しい責任法を作る資料ではなく、現行法の適用を予測しやすくするための行政ガイダンスです。",
      "手引きは、最終的に人の判断・行動が介在することを予定する『補助／支援型AI』と、人の判断・行動の全部または一部を代替しAIの出力に依拠することを予定する『依拠／代替型AI』という二つの類型を整理しています。",
      "企業実務では類型名だけで責任が決まるわけではありません。AIをどの業務へ組み込み、人がどこで確認し、どのリスクを予見し、開発者・提供者からどの情報を得ていたかという具体的な事実が注意義務の判断に関わります。",
      "AIエージェントや自律走行ロボットのように人の個別確認を前提としない利用では、出力を一件ずつ確認することより、AIを組み込んだ業務プロセスの設計・運用、継続的なリスク管理、安全性に関する情報共有が重要になります。",
      "損害発生後は、AIの専門技術性や証拠の偏在を踏まえ、開発・提供・利用過程の文書やログ、文書提出命令、過失・欠陥の事実上の推定、因果関係の立証が問題となり得ます。平時のガバナンスと記録管理は、事故予防だけでなく紛争時に当時の合理的な判断を説明する基盤にもなります。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省は2026年4月9日に『AI利活用における民事責任の解釈適用に関する手引き〔第1.0版〕』を公表した。",
        "手引きは新たな法的責任を創設するものではなく、AI利活用に伴う損害について現行法がどのように解釈適用され得るかの方向性を示す。",
        "手引きはAIの利用形態を、補助／支援型AIと依拠／代替型AIの二類型に整理し、配送ルート最適化、弁護士業務支援、画像生成、取引審査、外観検査、AMR、AIエージェント等の想定事例を検討している。",
        "主な検討対象は不法行為法上の責任であり、フィジカルAI等については製造物責任法上の論点も扱われる。",
        "手引きは実体法上の責任判断に加え、AI事案における証拠偏在を踏まえた立証上の論点と、国境を跨ぐ紛争での国際裁判管轄・準拠法・外国判決等の承認執行にも言及している。"
      ],
      "interpretations": [
        "補助／支援型では、人が最終判断をするという形式だけで安全になるのではなく、利用者がAIの出力を実効的に検証できる体制と、開発者・提供者による機能・性能・重要リスクの説明が重要になる。",
        "依拠／代替型では、すべての出力を人が再確認することを前提としにくいため、注意義務の中心はAIを組み込んだ業務プロセスの適切な設計・運用へ移る。",
        "補助／支援型と依拠／代替型の分類は検討の出発点であり、訴訟では類型名そのものより、実際の利用態様と当時の予見可能性・回避可能性に即して具体的な注意義務が判断される。",
        "AI事業者ガイドラインへの適合・不適合だけで過失の有無が決まるわけではないが、合理的なリスク調査、体制構築、回避措置を講じていた事情は予見可能性や結果回避義務の評価で考慮され得る。",
        "AIの技術的専門性や証拠偏在があるからといって原告の立証責任が当然に転換するわけではなく、文書提出命令や過失・欠陥の事実上の推定等の既存法理を個別事情に応じて検討する。"
      ],
      "implications": [
        "AIを導入する業務ごとに、人の判断をどこへ残すか、AI出力をどの程度検証するか、異常時に誰が停止・是正するかを記録する。",
        "AIの機能・性能の限界、前提条件、既知の重要リスク、アップデートによる変更を、導入時だけでなく運用中も開発者・提供者と利用者の間で共有する。",
        "高リスクなAIでは、品質管理、内部統制、情報セキュリティ、労働安全衛生等の既存プロセスにAI固有のリスク確認を組み込む。",
        "事故や紛争に備え、導入時点の判断理由、前提にした性能情報、検証方法、リスク評価、事故後の対応を後から説明できる形で残す。",
        "訴訟や調査を見据え、モデル・設定・判定ログ・レビュー結果・リスク評価・提供者から受けた説明等について、必要性と秘密管理を踏まえた保存方針を設計する。"
      ],
      "uncertain": [
        "AIに関する民事責任の裁判例の蓄積はまだ十分ではなく、個別事案でどの程度の注意義務が認められるかは利用目的、性能、損害の性質、当時の技術水準等によって変わる。",
        "AIエージェントのように複数の処理を自律的に連結するシステムは、同じサービス内でも補助／支援的な場面と依拠／代替的な場面が混在し得るため、サービス名だけで一律に分類しない。",
        "過失・欠陥の事実上の推定や統計的リスクを用いた因果関係認定がAI事案でどこまで認められるかは確立しておらず、手引き自体も慎重な検討が必要な論点を含む。"
      ]
    },
    "issues": [
      {
        "id": "ai-liability-classification",
        "title": "補助／支援型と依拠／代替型をどう分けるか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "最終的に人の判断・行動を介在させることが予定されるかを出発点に、補助／支援型と依拠／代替型を整理する。ただし、責任判断は実際の利用態様と個別事情に基づく。",
        "exception": "AIエージェント等では一つのシステム内でも利用場面によって両類型が混在し得るため、製品名や導入形態だけで固定的に分類しない。",
        "uncertain": "具体的な裁判では類型の選択自体より、当時どのような注意義務を負っていたかが主要な争点となる可能性がある。",
        "sourceIds": [
          "source-meti-ai-civil-liability-guidance-2026"
        ]
      },
      {
        "id": "ai-liability-user-duty",
        "title": "AI利用者はどこまで出力を確認し、業務プロセスを設計するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "補助／支援型では人による実効的な検証を設計し、依拠／代替型では個々の出力確認だけでなく、AIを組み込んだ業務プロセス全体の適切な構築・運用とリスク管理を行う。",
        "exception": "必要な確認の程度は、AIの用途、損害の重大性、出力の検証可能性、技術水準、利用者が得ていた情報等によって異なる。",
        "uncertain": "業界別・ユースケース別に求められる具体的な確認水準は今後の裁判例や実務の蓄積に左右される。",
        "sourceIds": [
          "source-meti-ai-civil-liability-guidance-2026"
        ]
      },
      {
        "id": "ai-liability-provider-duty",
        "title": "AI開発者・提供者は何を設計・説明するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "AIの機能・性能の限界、使用方法、重要なリスク等を利用者が適切に判断できるよう示し、想定される利用態様に応じた安全性・リスク低減策を設計することが責任判断上の重要な事情となる。",
        "exception": "利用者が想定外の方法でAIを用いた場合も含め、開発者・提供者の責任が一律に決まるものではなく、予見可能性や具体的な情報提供・設計状況を確認する。",
        "uncertain": "AI分野で一般化できる単一の注意義務水準は確立しておらず、製品・サービスの性質や時点ごとの技術水準に依存する。",
        "sourceIds": [
          "source-meti-ai-civil-liability-guidance-2026"
        ]
      },
      {
        "id": "ai-liability-physical-product",
        "title": "フィジカルAIでは製造物責任と運用責任をどう分けるか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "AMR等のフィジカルAIでは製造物責任法上の欠陥と、利用者側の安全配慮・運用上の注意義務をそれぞれ検討し、引渡し後のアップデートや利用環境の変化を含めて継続的にリスク管理する。",
        "exception": "製造物責任の成否だけで利用者側の責任が当然に解消されるわけではなく、それぞれの責任要件と判断時点を分けて確認する。",
        "uncertain": "ソフトウェア更新や継続学習が製品の挙動へ影響する場合の具体的な評価は、製品構成と事故時の事実関係に依存する。",
        "sourceIds": [
          "source-meti-ai-civil-liability-guidance-2026"
        ]
      },
      {
        "id": "ai-liability-proof-procedure",
        "title": "AI事故の立証・証拠偏在にどう備えるか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "AI事案でも原則として既存の民事訴訟法・不法行為法・製造物責任法の枠組みで立証する。技術的専門性や証拠偏在がある場合には、文書提出命令、過失・欠陥の事実上の推定、統計的リスクと因果関係等の既存制度・法理が個別事情に応じて問題となり得る。",
        "exception": "AI事業者が保有する文書には営業秘密や自己利用文書に関する提出拒絶事由が問題となり得るほか、事実上の推定は原則的な立証責任を当然に転換するものではない。",
        "uncertain": "AI事案で過失・欠陥の事実上の推定や統計的因果関係の議論がどの範囲まで採用されるかは裁判例の蓄積がなく、慎重な個別判断が必要である。",
        "sourceIds": [
          "source-meti-ai-civil-liability-guidance-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-ai-civil-liability-guidance-2026"
    ],
    "practicalImpacts": [
      "AI導入審査・リスク評価",
      "AI利用規程・業務フロー",
      "開発・利用契約と責任分担",
      "性能・リスク情報の記録",
      "AIエージェントの自動化設計",
      "製品安全・事故対応",
      "訴訟・証拠保全"
    ]
  },
  {
    "slug": "fair-subcontract-transactions",
    "title": "取適法・受託取引",
    "categories": [
      "契約",
      "危機管理・コンプライアンス"
    ],
    "summary": "取適法の適用対象、価格協議、発注・支払、型等の保管、執行を、法務・購買・経理の取引プロセスとして整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "2026年1月に施行された取適法は、従来の資本金基準に加えて従業員基準を導入し、特定運送委託等も対象へ広げました。",
      "価格転嫁の局面では、単に値上げを受け入れたかではなく、受託側と適切な協議を行わずに代金額を決定したかが独立した問題になります。",
      "型等の無償保管については、公正取引委員会Q119が保管費用、廃棄・回収、継続保管の協議を具体化しており、2026年度も勧告が続いているため、製造委託の継続管理として独立して確認する必要があります。",
      "このテーマでは、対象判定、価格協議、発注・支払、型等の保管、違反把握後の是正を一連の取引管理として追います。"
    ],
    "currentSummary": {
      "facts": [
        "取適法は2026年1月1日に施行され、対象事業者の判定に従業員基準が追加された。",
        "対象取引には特定運送委託が加わり、適切な協議を行わない代金額決定も禁止行為として位置付けられた。",
        "公取委の令和7年度運用状況では勧告39件が公表され、不当な経済上の利益の提供要請が31件と最も多かった。",
        "公取委Q119は、金型・木型・治具・検具・製造設備等について、長期間発注しない等の事情がある場合は、受託側と協議して保管期間に応じた費用を支払い、廃棄・回収・継続保管も協議する必要があると示している。",
        "Q119は、受託側から請求がなくても保管費用を支払う必要があり、『最終稼働後1年間は無償でよい』という扱いは認めていない。",
        "2026年9月3日のニチリンに対する勧告では、25事業者に計1,048個の金型・治具を長期間無償保管させたことが問題となり、同社は不利益額の一部を含む978万9525円を支払った。"
      ],
      "interpretations": [
        "従来の下請法管理対象だけを引き継ぐと、新しい従業員基準や取引類型により対象漏れが生じ得るため、取引マスター自体の見直しが必要になる。",
        "価格協議の実効性は、最終価格だけでなく、相手の申出を受けてどの情報を確認し、どのように回答したかというプロセスでも説明できるようにする必要がある。",
        "契約・購買・経理を分断せず、発注条件、価格協議、検収、支払、是正まで同一取引として追える方が執行対応に強い。",
        "型等の管理では『1年以上発注がないか』だけを機械的な猶予期間として使わず、最終発注、次回の具体的な発注予定、再使用可能性、受託側の回収・廃棄希望を定期的に確認する必要がある。",
        "型等の所有権だけで保管費用の要否を判断せず、廃棄に委託者の承認が必要かなど、誰が型等を事実上管理しているかも確認する必要がある。"
      ],
      "implications": [
        "取引先の資本金だけでなく従業員数を含めて対象判定ロジックを更新する。",
        "価格改定要請を受けた場合の受付、情報収集、協議、決裁、回答を記録する。",
        "特定運送委託を含め、新たに対象となる発注類型を購買・物流部門と棚卸しする。",
        "違反可能性を把握した場合の自主申告、返金・原状回復、再発防止の経路を決める。",
        "金型・木型・治具・検具・製造設備等について、所有者、保管先、最終発注日、次回発注予定、再使用予定、廃棄権限、保管費用の負担を台帳で追う。",
        "稼働状況の常時把握が過度な負担となる場合も、受託側と協議したうえで少なくとも年度ごとに発注状況を確認し、保管期間に応じた費用を精算する運用を検討する。"
      ],
      "uncertain": [
        "新しい価格協議規制や拡張された対象範囲について、今後の勧告・指導事例の蓄積により実務上の境界がさらに具体化する可能性がある。",
        "型等について『長期間発注を行わない等』に該当するかは個別事案で異なり、Q119の4類型は主な違反事例の例示であって一律のセーフハーバーではない。"
      ]
    },
    "issues": [
      {
        "id": "toriteki-scope",
        "title": "どの取引・相手が取適法の対象になるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "資本金基準、従業員基準、委託内容を組み合わせ、取引単位で適用対象を判定する。",
        "exception": "取引類型ごとに要件が異なるため、相手企業の属性だけで一律に判断しない。",
        "uncertain": "組織再編や複合的な委託では具体的な取引関係の確認が必要。",
        "sourceIds": [
          "source-toriteki-law-2026"
        ]
      },
      {
        "id": "toriteki-price-consultation",
        "title": "価格協議をどこまで行えばよいか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "受託側の価格協議の申出を受け止め、必要な情報を踏まえて実質的な協議を行い、その過程を説明できるよう記録する。",
        "exception": "相手の要求額を必ず受け入れる義務ではなく、協議の内容と価格決定の合理性を個別に見る。",
        "uncertain": "今後の執行事例で、協議不足と評価される具体的な行為がさらに蓄積する。",
        "sourceIds": [
          "source-toriteki-law-2026",
          "source-toriteki-operation-2026"
        ]
      },
      {
        "id": "toriteki-tooling-storage",
        "title": "金型・治具等の保管費用と回収・廃棄をどう管理するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "長期間発注しない等の事情がある型等を受託側に保管させる場合は、受託側と協議して保管期間に応じた費用を支払い、廃棄・回収・継続保管の扱いも協議する。",
        "exception": "型等が受託側所有でも、廃棄に委託者の承認を要するなど委託者が事実上管理している場合は対象に含まれ得るため、所有権だけで保管費用の検討対象から外さない。",
        "uncertain": "Q119の『1年以上発注がない』等は過去の主な違反事例の例示であり、具体的にいつから費用負担が必要かは発注状況、再使用予定、当事者の協議等を踏まえて個別に確認する。",
        "sourceIds": [
          "source-toriteki-tooling-storage-qa",
          "source-jftc-nichirin-tooling-storage-2026"
        ]
      },
      {
        "id": "toriteki-enforcement",
        "title": "違反把握後にどう是正するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "自主点検、必要な返金・原状回復、再発防止を速やかに行い、事実関係と判断を記録する。",
        "exception": "自主申告の扱いは個別事案と公取委の運用による。",
        "uncertain": "取適法施行後の新規禁止行為については今後の勧告・指導の蓄積を継続確認する。",
        "sourceIds": [
          "source-toriteki-operation-2026",
          "source-jftc-nichirin-tooling-storage-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-toriteki-law-2026",
      "source-toriteki-operation-2026",
      "source-toriteki-tooling-storage-qa",
      "source-jftc-nichirin-tooling-storage-2026"
    ],
    "practicalImpacts": [
      "対象取引マスター",
      "価格協議フロー",
      "発注書・取引条件明示",
      "支払・検収",
      "物流委託管理",
      "金型・治具等の管理台帳",
      "保管費用・返却・廃棄の協議",
      "自主点検・是正"
    ]
  },
  {
    "slug": "listed-company-takeover-guidelines",
    "title": "上場会社M&A・企業買収行動指針",
    "categories": [
      "M&A"
    ],
    "summary": "経済産業省の「企業買収における行動指針」と2026年のポイント・Q&Aを基礎に、上場会社が経営支配権を取得する買収提案を受けた際の取締役会の対応、企業価値評価、真摯な検討、株主への説明を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "経済産業省は2023年8月31日、上場会社の経営支配権を取得する買収を主な対象として、企業価値・株主共同の利益、株主意思、透明性の3原則と、買収提案を巡るベストプラクティスを示す「企業買収における行動指針」を策定した。",
      "2026年7月30日には、指針の趣旨が十分に理解されていない可能性を踏まえ、「解釈について」「ポイント」「Q&A」を公表した。これらは2023年指針を改訂・修正するものではなく、既存の考え方を具体的な買収場面へ当てはめやすくするための明確化である。",
      "2026年の整理では、高い買収価格だけで「望ましい買収」とはならないこと、真摯な買収提案の具体性・目的の正当性・実現可能性、買収提案とスタンド・アローン等の企業価値向上策の比較、定性的な価値を企業価値評価へ織り込む場合の説明の仕方などが具体化された。"
    ],
    "currentSummary": {
      "facts": [
        "2023年の行動指針は、上場会社の経営支配権を取得する買収を主な対象とし、企業価値・株主共同の利益、株主意思、透明性の3原則を示している。",
        "2026年7月30日のポイント・Q&A等は、2023年指針を維持することを前提とする解釈の明確化であり、指針自体を改訂・修正したものではない。",
        "高い買収価格は買収後の企業価値を示す重要な要素だが、高値であることのみをもって「望ましい買収」と判断するものではない。",
        "「真摯な買収提案」は、具体性、目的の正当性、実現可能性を総合的に検討し、取締役会は真摯な提案を恣意的に排除せず真摯に検討することが基本とされる。"
      ],
      "interpretations": [
        "取締役会は真摯な検討を行った上で、買収提案への賛否だけでなく、スタンド・アローンや第三者との提携・協業を含む戦略的選択肢を比較し、経営判断として選択する余地を持つ。ただし、提案が公表された場合などには判断過程の合理性を株主へ説明できる準備が必要になる。",
        "従業員・取引先の貢献、サステナブルな事業活動、経済安全保障に対応する経営などの定性的要素も、将来キャッシュフロー又は割引率へ影響することが合理的に見込まれる場合は企業価値の検討要素になり得るが、経営陣の保身のための抽象的な反対理由として使うことはできない。"
      ],
      "implications": [
        "買収提案の受領時に、経営陣から取締役会へ速やかに報告・付議する基準と社内ルートを定める。",
        "真摯性の検討では、買収ストラクチャー、対価、実行条件・時期、買収後の経営方針、資金の裏付け、競争法・外為法等の許認可見込みを確認する。",
        "買収者の企業価値向上策と自社のスタンド・アローン等を、シナジー・ディスシナジー、実現可能性・時期を含めて可能な限り定量的に比較する。",
        "定量化が困難な要素を考慮する場合も、将来キャッシュフロー・割引率との関係や根拠資料を残し、株主へ説得力のある説明ができるようにする。",
        "従業員・取引先等から意向を確認する場合には、情報漏洩・インサイダー取引を防ぐ情報管理と、自由な意向表明を確保する。"
      ],
      "uncertain": [
        "行動指針と2026年のポイント・Q&Aは法令そのものではなく、具体的な買収案件でどの程度の検討・説明が求められるかは、提案内容、競合提案、会社の状況、取締役会の判断過程等により異なる。",
        "2026年の明確化後に蓄積する具体的な案件対応、裁判例、実務慣行により、取締役会の検討・説明の実務水準がさらに具体化する可能性がある。"
      ]
    },
    "issues": [
      {
        "id": "takeover-guidelines-scope-principles",
        "title": "企業買収行動指針はどの買収を対象とし、何を原則とするか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "上場会社の株式取得による経営支配権の取得を主な対象とし、企業価値・株主共同の利益、株主意思、透明性の3原則を基礎に、買収者・対象会社の行動を検討する。",
        "exception": "金銭対価の同意なき買収だけに限定されず、株式対価の株式取得や組織再編も対象に含まれ得る。個別の法令上の義務は会社法・金融商品取引法等を別途確認する。",
        "uncertain": "個別取引が指針の想定する買収局面にどの程度当てはまるかは、支配権取得の態様や取引構造により確認する。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-2023",
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-desirable-acquisition",
        "title": "高い買収価格なら「望ましい買収」と判断してよいか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "高い買収価格は重要な要素だが、それだけで望ましい買収になるわけではなく、対象会社の企業価値の向上と、その増加分の公正な分配を通じた株主共同の利益の確保の双方を検討する。",
        "exception": "全部買収を目的とする複数の真摯な提案では、企業価値の向上により資する提案と高い買収価格の提案は通常一致するとされ、高値を軽視してよいという意味ではない。",
        "uncertain": "買収価格と買収後企業価値が見合わないと判断する場合は、具体的な情報収集と説得力のある説明が特に重要となる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-2023",
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-serious-proposal",
        "title": "どの買収提案を「真摯な買収提案」として検討するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "具体性、目的の正当性、実現可能性を総合的に確認し、合理的な疑いがなければ真摯な買収提案として取締役会が真摯に検討する。",
        "exception": "主要条件が具体化していない、買収後の経営方針が示されない、資金の裏付けや必要な許認可の取得見込みが乏しい等の事情は真摯性を疑う要素になり得るが、一つの事情だけで機械的に排除するものではない。",
        "uncertain": "提案受領の初期段階ではDDや許認可対応により実現可能性を高める余地もあるため、どの時点で真摯性を否定できるかは事案により異なる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-sincere-review-comparison",
        "title": "取締役会は買収提案と自社戦略をどう比較するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "取締役会は必要な情報を買収者から収集し、買収提案とスタンド・アローン・提携等の戦略的選択肢を中長期的な企業価値の観点から比較した上で判断する。",
        "exception": "真摯に検討した結果、最高価格の提案や買収そのものを必ず選択しなければならないわけではないが、買収に応じる方針を決めた場合は取引条件の改善に向けた合理的な努力も必要となる。",
        "uncertain": "必要な比較の粒度、定量化の程度、株主への説明内容は案件の状況・情報の取得可能性・競合提案の有無等により異なる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      },
      {
        "id": "takeover-qualitative-enterprise-value",
        "title": "従業員・取引先・経済安全保障等を企業価値へどう反映するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "定性的要素を企業価値の検討に用いる場合は、企業の将来キャッシュフロー又は割引率への合理的な影響として説明し、可能な範囲で定量化する。",
        "exception": "測定困難な価値を抽象的に強調し、企業価値の概念を不明確にしたり経営陣の保身に利用したりしない。",
        "uncertain": "個々のステークホルダー要素・経済安全保障上の事情をどの程度定量化できるかは業種・案件・入手情報によって異なる。",
        "sourceIds": [
          "source-meti-corporate-takeover-guidelines-clarification-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-corporate-takeover-guidelines-2023",
      "source-meti-corporate-takeover-guidelines-clarification-2026"
    ],
    "practicalImpacts": [
      "買収提案受付・取締役会付議",
      "上場会社M&A",
      "同意なき買収対応",
      "企業価値評価",
      "スタンド・アローン比較",
      "買収者への質問・情報収集",
      "株主説明・情報開示",
      "ステークホルダー意向確認",
      "情報管理・インサイダー管理"
    ]
  },
  {
    "slug": "personal-information-protection-2026-amendment",
    "title": "個人情報保護法・2026年改正",
    "categories": [
      "個人情報",
      "AI・デジタル"
    ],
    "summary": "2026年7月に成立・公布された個人情報保護法改正について、子供の個人情報、同意取得の例外、特定生体個人情報、連絡可能個人関連情報、委託、課徴金を中心に、施行前の準備事項と未確定の下位ルールを整理する。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "2026年改正は、データ利活用を広げる規律と、子供・生体情報・個人へ到達できる個人関連情報・委託・不適正利用・エンフォースメントを強化する規律を一つの改正で扱う。AI開発だけに限らず、BtoCサービス、カメラ、広告・Cookie、委託・クラウド、データ提供、コンプライアンス全般に影響する。",
      "改正法は2026年7月10日に成立し、7月17日に公布された。一部を除き公布日から2年以内の政令指定日から施行されるため、現時点では現行法による判断と改正法への施行準備を分けて管理する必要がある。",
      "2026年8月26日には政令・規則等で定める事項の全体像案が示されており、個人情報保護委員会は今後も政令、規則、ガイドライン、Q&A等を具体化する予定である。"
    ],
    "currentSummary": {
      "facts": [
        "2026年4月7日に改正法案が閣議決定され第221回国会へ提出され、7月10日に成立、7月17日に公布された。",
        "改正法は、一部を除き、公布日から起算して2年以内の政令指定日から施行される。施行日や細部の要件は今後の政令・委員会規則・ガイドライン等で具体化される。",
        "主な改正には、16歳未満の子供の個人情報等に関する規律、同意取得の例外拡張、特定生体個人情報に関する規律、連絡可能個人関連情報等の不適正利用・不正取得の禁止、委託先に関する規律、課徴金制度の創設が含まれる。"
      ],
      "interpretations": [
        "改正対応はプライバシーポリシーの改訂だけでは足りず、年齢確認・同意取得画面、カメラ等の周知、Cookie等の個人関連情報の取得・利用、本人請求受付、委託契約・再委託、データ提供先の確認、違反時の調査記録まで業務フロー単位で棚卸しする必要がある。",
        "施行前の現時点では、改正法の新しい例外や義務を現行法上の適法性判断へ先取りして用いず、現在のルールと将来の実装準備を明確に分ける。"
      ],
      "implications": [
        "16歳未満の利用者があり得るサービスでは、年齢確認、法定代理人への通知・同意、利用停止等請求の受付方法を洗い出す。",
        "顔特徴データ等を扱うカメラ・認証・分析サービスでは、対象データ、周知方法、利用停止等請求への対応を確認する。",
        "本人同意を前提としているデータフローについて、新しい同意不要例外を利用し得る場面と、なお同意や別の手続が必要な場面を分けて整理する。",
        "Cookie ID、広告・端末識別子、メールアドレス等について、個人情報ではないという理由だけで取得・利用を自由と整理せず、取得元、利用態様、本人への働きかけ、外部提供の実態を棚卸しする。",
        "個人データの委託・再委託では、受託者の利用範囲、処理方法の決定主体、契約上の取決め、委託元の監督プロセスを点検する。",
        "課徴金対象となり得るデータ取引・利用について、取引先DD、契約、判断過程の文書化、違反発見時のエスカレーションを整備する。"
      ],
      "uncertain": [
        "特定生体個人情報の具体的範囲、子供の個人情報に関する『必要な措置』、同意不要例外の具体類型、連絡可能個人関連情報に含まれる識別子の具体的範囲と不適正利用・不正取得の解釈、委託先規律の適用要件、課徴金の算定・適用除外等は、今後の政令・規則・ガイドライン・Q&Aの整備を継続確認する必要がある。",
        "施行日は現時点で特定の日付として確定しておらず、個別規定の施行時期も今後の政令等を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "privacy-2026-children",
        "title": "16歳未満の子供の個人情報等をどう扱うか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、本人が16歳未満の場合、法所定の同意・通知等について原則として法定代理人を対象とする規律を設けるほか、一定の利用停止等・第三者提供停止請求を事業者側の違反の有無にかかわらず認める枠組みを導入する。未成年者の個人情報等について本人の最善の利益を優先して考慮する責務も設ける。",
        "exception": "規定ごとに対象年齢や例外が異なり、未成年者の最善の利益への配慮は16歳未満だけを対象とするものではない。",
        "uncertain": "年齢確認の方法、法定代理人対応の例外、『必要な措置』の具体化などは今後の政令・規則・ガイドライン・Q&Aを確認する。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "privacy-2026-consent-exceptions",
        "title": "本人同意が不要となる場面はどう広がるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、契約履行のため必要やむを得ないことが明らかな場合や、取得状況から本人の意思に反せず権利利益を害しないことが明らかな一定の場合などについて、目的外利用・要配慮個人情報の取得・第三者提供等に関する本人同意の例外を拡張する。生命・身体・財産の保護や公衆衛生等の場面でも、同意を得ないことについて相当の理由がある場合を追加する。",
        "exception": "新しい例外の要件を満たさない取扱いでは従来どおり本人同意等が必要であり、外国第三者提供や確認・記録義務など別の規律も個別に確認する。",
        "uncertain": "委員会規則で定める具体的な場合や、各例外の適用判断は今後の規則・ガイドライン・Q&Aによる具体化を確認する。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "privacy-2026-biometric",
        "title": "顔特徴データ等の特定生体個人情報に何が求められるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は特定生体個人情報について、取扱いに関する一定事項の周知、利用停止等・第三者提供停止請求に関する特則、オプトアウトによる第三者提供からの除外などの規律を設ける。",
        "exception": "すべての生体情報が同一の扱いになるわけではなく、特定生体個人情報に該当する具体的な情報の範囲は下位法令等で確認する必要がある。",
        "uncertain": "対象となる生体データの具体的範囲、周知事項・方法、本人請求への運用は今後の政令・規則・ガイドライン・Q&Aで具体化される。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "privacy-2026-contactable-related-info",
        "title": "連絡可能個人関連情報の取得・利用をどう見直すか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、個人関連情報のうち、所在地、電話番号、電子メールアドレス、特定の個人への情報伝達に利用できる一定の識別子等を含む『連絡可能個人関連情報』について、違法又は不当な行為を助長・誘発するおそれのある方法での利用と、偽りその他不正の手段による取得を禁止する。特定の個人への連絡等に利用できる記述を含む一定の仮名加工情報・匿名加工情報にも同趣旨の規律が及ぶ。",
        "exception": "連絡可能個人関連情報は個人関連情報であることが前提で、個人情報に該当する情報をこの類型として扱うものではない。またCookie ID等も一律に該当するのではなく、特定の個人への情報伝達に利用できるか等を個別に確認する。",
        "uncertain": "対象となる識別子の具体例、容易照合性、不適正利用・不正取得の具体的な適用場面、Cookie等を本人が気付かない態様で取得する場合の扱いは、今後の規則・ガイドライン・Q&Aによる具体化を確認する。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "privacy-2026-outsourcing",
        "title": "委託元・委託先の義務はどう変わるか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、受託者について委託された業務の範囲を超える利用等を直接規律するとともに、取扱方法を自ら決定しないなど一定の要件を満たす委託先について法第4章の一部義務を免除する枠組みを設ける。委託元の委託先監督義務は引き続き残る。",
        "exception": "委託先の義務免除は一律ではなく、法定要件に沿った取決めと実際の遵守が必要になる。再委託や外国での処理等は別の規律との関係も確認する。",
        "uncertain": "契約で求められる取決め、処理方法を『自ら決定しない』場合の範囲、再委託・国外処理との関係は今後の規則・ガイドライン・Q&Aによる具体化を確認する。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      },
      {
        "id": "privacy-2026-surcharge",
        "title": "課徴金制度に備えて何を管理するか",
        "status": "pending",
        "stage": "enacted",
        "views": [],
        "conclusion": "改正法は、個人情報の違法な取扱い等によって財産上の利益を得た一定の違反行為について、個人情報保護委員会が課徴金の納付を命ずる制度を設ける。すべての法違反が一律に課徴金対象となるわけではない。",
        "exception": "対象行為、適用除外、課徴金額の算定等は法定要件と今後の下位ルールを踏まえて判断し、違反があったというだけで課徴金対象と決めない。",
        "uncertain": "『相当の注意』等の具体的基準、対象行為の対価の算定、リニエンシーを含む運用の細部は今後の政令・規則・ガイドライン・Q&Aを確認する。",
        "sourceIds": [
          "source-privacy-law-2026-amendment",
          "source-privacy-law-2026-rulemap"
        ]
      }
    ],
    "sourceIds": [
      "source-privacy-law-2026-amendment",
      "source-privacy-law-2026-rulemap",
      "source-privacy-law-2026-proposal",
      "source-privacy-law"
    ],
    "practicalImpacts": [
      "プライバシーポリシー・Cookieポリシー",
      "年齢確認・法定代理人同意",
      "同意取得フロー",
      "顔認証・AIカメラ等の周知",
      "Cookie・広告ID等の取得／利用管理",
      "本人請求対応",
      "委託契約・再委託管理",
      "データ提供先DD・契約",
      "課徴金リスク管理・記録",
      "施行準備・下位ルール追跡"
    ]
  },
  {
    "slug": "serious-accident-crisis-management",
    "title": "重大事故・危機対応",
    "categories": [
      "危機管理・コンプライアンス",
      "労務"
    ],
    "summary": "死亡・重傷事故など企業活動に伴う重大事故について、初動、当局対応、役職員の過失判断、原因究明・再発防止と刑事責任追及の緊張関係を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "重大事故では、救護・現場安全・遺族対応などの初動と並行して、警察・労働基準監督署等の捜査・調査、原因究明、再発防止、対外説明、被害補償が進む。事故後の調査は、将来の安全確保と個人の法的責任の双方に関係するため、目的と評価時点を区別して整理する必要がある。",
      "福島第一原発事故をめぐる2025年の最高裁刑事決定と東京高裁株主代表訴訟判決は、予見可能性を抽象的な危険の有無だけで捉えず、問題となる具体的な結果回避措置や当時得られていた情報との関係で検討する素材になる。",
      "西村あさひの2026年8月31日ニューズレターは、重大事故の企業調査が再発防止のために厳しく要改善点を洗い出すほど、役職員の刑事責任追及の材料にもなり得るという構造的な緊張を指摘し、調査の独立性や制度上の対応案まで検討している。"
    ],
    "currentSummary": {
      "facts": [
        "最高裁2025年3月5日決定は、福島第一原発事故の業務上過失致死傷事件で、運転停止という結果回避措置を課すに足りる予見可能性を合理的疑いを超えて認定できないとして、無罪を是認した原判断を相当とした。",
        "東京高裁2025年6月6日判決は、福島第一原発事故をめぐる株主代表訴訟で、取締役らが事故発生前に必要な予見可能性を有していたとは認められないとして、任務懈怠を理由とする責任を否定した。",
        "西村あさひの2026年8月31日ニューズレターは、重大な死傷事故では原因究明・再発防止と、警察・労働基準監督署等による責任追及が並行する実務を整理している。"
      ],
      "interpretations": [
        "事故後に判明した要改善点があることと、事故当時に特定の役職員がその危険を予見し、具体的な回避措置を講じる義務を負っていたことは同じではない。再発防止調査と過失判断では評価時点と目的を分けて扱う必要がある。",
        "結果回避措置の負担が大きいほど、その措置を要求する前提となる予見可能性の具体性・現実性が重要になる。最高裁決定の補足意見が示した国への情報報告という別の措置は、法廷意見とは区別して読む必要がある。",
        "社内調査は再発防止のため仮説を広く検討し得るため、調査報告書で認定した改善可能性を、そのまま事故当時の個人過失と同視しない整理が重要になる。"
      ],
      "implications": [
        "事故発生直後の救護、現場安全、遺族対応、当局対応、対外説明について役割分担とエスカレーションを事前に決める。",
        "原因究明では、事故発生機序、当時入手可能だった情報、役職ごとの権限・職責、予見可能性、候補となる回避措置とその実行可能性を時系列で記録する。",
        "再発防止策の検討資料では、事故後に得られた知見や後知恵による改善提案と、事故当時の注意義務・過失評価に用いる事実を可能な限り区別する。",
        "重大事故では、調査委員会や外部専門家の独立性、証拠・実験データの保全、当局との情報共有方針を初期段階から設計する。"
      ],
      "uncertain": [
        "必要な予見可能性や結果回避措置は事故類型、法令上の安全義務、当時の知見、役職・権限、措置の負担等で変わるため、福島第一原発事件の判断を他の事故へ機械的に当てはめることはできない。",
        "事故後の改善措置を個人の刑事責任立証に用いることを制限する米国FRE407類似のルールは、西村あさひ記事が制度案として紹介するものであり、現在の日本法に同様の一般的証拠排除ルールがあるという整理ではない。",
        "第三者委員会方式も一律の法定義務ではなく、事故の性質、被害規模、当局調査、専門性、ステークホルダーの信頼確保等に応じて採否と設計を検討する。"
      ]
    },
    "issues": [
      {
        "id": "serious-accident-initial-response",
        "title": "重大事故の初動で何を優先するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "実務上は、人命救助・負傷者対応と現場の安全確保、遺族対応を最優先し、その後の復旧、対外説明、原因究明・再発防止、補償、当局対応へつなぐ。危機対応体制では各機能を同時並行で動かせる役割分担が必要になる。",
        "exception": "事故類型や法令上の緊急措置、消防・警察・労働基準監督署その他当局の指示によって具体的な優先順位は変わる。",
        "uncertain": "具体的な報告義務、現場保存、操業停止等は適用法令・事故状況ごとに確認する。",
        "sourceIds": []
      },
      {
        "id": "serious-accident-foreseeability-avoidance",
        "title": "役職員の予見可能性と結果回避措置をどう対応させるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "役職員の責任を検討する際は、事故の抽象的な危険性だけでなく、事故当時に得られていた情報からどの程度具体的な危険を予見できたかと、問題となる結果回避措置の内容・負担・実行可能性を対応させて評価する。",
        "exception": "民事上の善管注意義務と刑事上の過失では要件・立証の枠組みが同一ではなく、同じ事故でも結論が一致するとは限らない。",
        "uncertain": "どの程度の予見可能性がどの措置を要求するかは、事故類型、規制、職責、当時の知見、措置の負担等に応じた個別判断となる。",
        "sourceIds": [
          "source-tokyo-high-court-tepco-derivative-2025",
          "source-supreme-court-fukushima-criminal-2025"
        ]
      },
      {
        "id": "serious-accident-investigation-conflict",
        "title": "原因究明・再発防止と責任追及の緊張をどう管理するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "再発防止のための事故調査は、事故後の知見も用いて潜在的な改善点を広く洗い出す一方、個人の過失判断は事故当時の予見可能性・職責・回避可能性を問う。調査目的と評価時点を区別し、改善点の存在を直ちに当時の過失と同視しないことが重要になる。",
        "exception": "原因調査の結果が捜査・訴訟で証拠や検討材料となり得ること自体を一般に排除する現行日本法上のルールがあるわけではない。",
        "uncertain": "独立した第三者調査や将来の証拠法上の制度設計は選択肢・提案であり、個別事故で必要な調査体制は別途判断する。",
        "sourceIds": []
      }
    ],
    "sourceIds": [
      "source-tokyo-high-court-tepco-derivative-2025",
      "source-supreme-court-fukushima-criminal-2025"
    ],
    "practicalImpacts": [
      "重大事故対応マニュアル",
      "救護・現場安全・遺族対応",
      "警察・労働基準監督署等への対応",
      "社内事故調査・再発防止",
      "役職員の刑事・民事責任評価",
      "証拠・実験データ保全",
      "第三者調査・外部専門家",
      "対外説明・被害補償"
    ]
  },
  {
    "slug": "ai-publicity-likeness-rights",
    "title": "生成AI・肖像／声・パブリシティ権",
    "categories": [
      "知的財産",
      "AI・デジタル",
      "危機管理・コンプライアンス"
    ],
    "summary": "生成AIによる肖像・声等の生成・利用について、パブリシティ権、肖像等をみだりに利用されない権利、不法行為上の損害賠償・差止め、不正競争防止法、生成AI提供者等の関与を整理する。",
    "lastUpdated": "2026-09-04",
    "lastVerified": "2026-09-04",
    "isNew": true,
    "overview": [
      "法務省は2026年8月7日、生成AIの普及等に伴う肖像・声等の無断利用について、現行法及び判例法理を前提にパブリシティ権等の民事責任を整理した取りまとめ報告書を公表した。新たな権利や禁止規定を創設する資料ではなく、現行法上の解釈適用を想定事例ごとに整理する解釈指針として読む必要がある。",
      "報告書は、パブリシティ権及び肖像等をみだりに利用されない権利の侵害の有無に加え、損害賠償における損害の範囲、差止請求、不正競争防止法の適用などを検討対象としている。",
      "西村あさひの2026年8月12日ニューズレターは、生成AIを利用して肖像や声を生成する事業者の法的リスクという観点から解釈指針を読み解き、実務上の留意点を補足している。"
    ],
    "currentSummary": {
      "facts": [
        "法務省は2026年4月から5回の検討会を開催し、2026年8月7日に『肖像、声等の無断利用による民事責任の在り方に関する検討会取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―』を公表した。",
        "法務省は、現行法及び判例法理を踏まえ、複数の想定事例についてパブリシティ権、肖像等をみだりに利用されない権利、損害賠償、差止請求、不正競争防止法等を整理している。",
        "西村あさひは、同解釈指針を生成AIで肖像・声を生成する事業者がリスクを検討する際の基本的な解釈の基準になり得る資料として位置付けている。"
      ],
      "interpretations": [
        "生成AIを用いたという事情だけで権利侵害が肯定・否定されるわけではなく、誰の肖像・声をどのような態様・目的で利用したか、識別可能性や顧客吸引力の利用など、従来の判例法理と事案の具体的事情を踏まえて検討する必要がある。",
        "権利侵害が問題となる場合、損害賠償だけでなく差止請求や不正競争防止法の適用可能性も別途検討対象となるため、生成物の公開・広告利用・商品化の前に救済手段まで見据えた評価が必要になる。",
        "生成AIの開発者・提供者、利用事業者その他の関与者の責任は、サービスの設計・提供態様や具体的な関与の程度を踏まえて個別に検討する必要がある。"
      ],
      "implications": [
        "著名人その他の人物に似た肖像・声を広告、商品、広報、コンテンツ等で利用する場合は、生成AIで作成したことを理由に権利処理を省略せず、対象人物、利用目的、公開範囲、商業利用の有無を確認する。",
        "肖像・声の生成機能を提供する事業者は、禁止用途、権利侵害申告窓口、削除・停止措置、出力制御、ログ等を含め、権利侵害が疑われる場面への対応手順を設計する。",
        "契約・利用規約だけでリスクを利用者へ移転できるとは限らないため、サービス設計・審査・モニタリングと法務対応を分離せずに管理する。"
      ],
      "uncertain": [
        "生成AIを用いた肖像・声の利用に関する裁判例の蓄積は限定的であり、解釈指針自体も法令ではないため、個別事案の結論は今後の裁判実務等によって具体化する。",
        "学習段階、生成機能の提供段階、個別生成物の利用段階では関与者と問題となる行為が異なるため、一つの一般論で責任主体を固定できない。",
        "パブリシティ権、人格的利益、不正競争防止法等は保護目的・要件・救済が異なるため、同じ肖像・声利用でも論点ごとに要件を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ai-publicity-rights-scope",
        "title": "生成した肖像・声はどの権利との関係で問題になるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "生成AIによる肖像・声等の無断利用は、パブリシティ権や肖像等をみだりに利用されない権利など、現行法・判例法理上の保護利益との関係で検討する。AI生成であることだけを理由に権利処理が不要になるわけではない。",
        "exception": "保護される利益や侵害判断は、対象人物の識別可能性、利用目的・態様、顧客吸引力の利用等の具体的事情に左右される。",
        "uncertain": "生成AI特有の利用形態についての裁判例は限定的であり、個別類型の境界は今後の実務で具体化する。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-publicity-remedies",
        "title": "損害賠償・差止め・不正競争防止法をどう整理するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "権利侵害が問題となる場合、侵害成立だけでなく、損害の範囲、差止請求の可否、不正競争防止法の適用可能性をそれぞれ区別して検討する。",
        "exception": "各救済・法的構成には固有の要件があり、一つの権利侵害が認められたからといって他の救済が当然に認められるわけではない。",
        "uncertain": "生成AIによる大量生成・拡散等が損害評価や差止めの必要性にどのように反映されるかは事案ごとの判断となる。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      },
      {
        "id": "ai-publicity-provider-risk",
        "title": "生成AI提供者・利用事業者の責任をどう切り分けるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "生成AIサービスの提供者と個別生成物を利用する事業者の責任は、サービスの設計・機能、利用態様、具体的な関与、侵害発生への寄与等を踏まえて個別に検討する。",
        "exception": "利用規約で利用者に遵守義務を課していることだけで、提供者側の法的責任が常に否定されるわけではない。",
        "uncertain": "提供者側の責任が認められる具体的な境界は事案依存性が高く、今後の裁判例の蓄積を要する。",
        "sourceIds": [
          "source-moj-ai-likeness-report-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-ai-likeness-report-2026"
    ],
    "practicalImpacts": [
      "生成AI利用規程・ガイドライン",
      "広告・広報クリエイティブ審査",
      "肖像・声の権利処理",
      "生成AIサービス利用規約",
      "権利侵害申告・削除対応",
      "生成物の公開・商品化審査",
      "ログ・証拠保全"
    ]
  },
  {
    "slug": "law-enforcement-data-production",
    "title": "捜査機関のデータ提供命令・秘密保持対応",
    "categories": [
      "危機管理・コンプライアンス",
      "個人情報",
      "AI・デジタル",
      "情報セキュリティ",
      "契約"
    ],
    "summary": "捜査機関から電磁的記録提供命令や秘密保持命令を受けた企業について、提供対象・提供方法、通知制限、社内対応、契約条項、準抗告と事業継続を整理する。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "2025年改正刑事訴訟法で創設された電磁的記録提供命令の主要規定は2026年5月21日に施行され、捜査機関は裁判官の令状に基づき、必要な電磁的記録を記録媒体への記録・提出又は通信回線を通じたオンライン移転で提供させることができるようになった。",
      "同制度には秘密保持命令が組み合わされ、企業は一定期間、命令を受けたことや提供の有無を外部へ漏らすことを禁じられ得る。顧客・取引先への第三者開示通知条項や社内の事故・開示報告フローとの衝突を事前に整理する必要がある。",
      "TMI総合法律事務所の2026年6月8日解説は、法務・IT・経営へのエスカレーション、オンライン移転への技術対応、契約条項の点検、命令範囲が過大な場合の準抗告、業務継続に必要なデータの複写確保まで企業実務へ落とし込んでいる。"
    ],
    "currentSummary": {
      "facts": [
        "情報通信技術の進展等に対応するための刑事訴訟法等の一部を改正する法律（令和7年法律第39号）は2025年5月16日に成立、5月23日に公布され、電磁的記録提供命令・秘密保持命令に関する主要規定は2026年5月21日に施行された。",
        "電磁的記録提供命令は、犯罪捜査の必要がある場合に裁判官の令状に基づいて必要な電磁的記録の提供を命ずる強制処分で、記録媒体提出方式とオンライン移転方式が設けられている。",
        "秘密保持命令は、裁判官の許可を前提に、1年を超えない期間、電磁的記録提供命令を受けたことや提供・不提供の事実をみだりに漏らさないよう命ずる制度で、秘密にする必要がなくなった場合は取り消す仕組みがある。"
      ],
      "interpretations": [
        "企業の対応では、令状の存在だけで機械的に全データを渡すのではなく、命令の対象・必要性・被疑事実との関連性を確認し、対象外データを過剰に提供しない観点を持つ必要がある。",
        "秘密保持命令を受けた場合、顧客・取引先との契約や社内規程に第三者提供時の通知義務があっても、命令期間中は通知が法的に制約され得るため、法令・捜査対応の例外条項と命令取消後の通知手順を事前に設計しておくことが実務上重要になる。",
        "命令の範囲が被疑事実と無関係なデータまで及ぶ場合には準抗告を検討し、データ保有事業者として利用者の権利保護と事業継続の双方から対応を判断する必要がある。"
      ],
      "implications": [
        "命令受領窓口、法務、情報システム、外部弁護士、経営層へのエスカレーションを文書化し、夜間・休日を含む有事対応を確認する。",
        "オンライン移転を求められた場合に、対象データを特定・抽出し、安全に送信できる技術手順と記録方法を情報システム部門と整備する。",
        "顧客・取引先との契約について、第三者開示通知、法令・捜査機関対応の例外、秘密保持命令中の取扱い、命令取消後の通知、データ保管上の責任分担を点検する。",
        "対象範囲が過大な場合の準抗告、提供データの複写交付、端末・サーバ差押え時の業務継続策を事前に検討する。"
      ],
      "uncertain": [
        "秘密保持命令取消後に顧客等へ遡って通知すべきか、その時期・方法は契約内容、適用法令、捜査上の状況等によって個別判断となる。",
        "どの範囲のデータが被疑事実との関連性を欠き、準抗告等で争うべきかは個別事案に左右され、過去の差押え事例を新制度へ機械的に当てはめることはできない。",
        "改正法全体は段階施行であり、2026年5月21日に施行された電磁的記録提供命令等の規定と、今後施行される他の刑事手続IT化規定を混同しない。"
      ]
    },
    "issues": [
      {
        "id": "electronic-record-production-order-scope",
        "title": "電磁的記録提供命令は何をどの方法で求められる制度か",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "捜査機関は犯罪捜査の必要がある場合、裁判官の令状に基づき、必要な電磁的記録を記録媒体へ記録・移転して提出させる方法又は通信回線を通じて捜査機関が管理する記録媒体へ移転させる方法で提供を命ずることができる。",
        "exception": "命令の対象は捜査上必要な電磁的記録であり、改正法の附則でも被疑事件等と関連性を有しない個人情報をできる限り取得しないよう留意することが求められている。",
        "uncertain": "個別の令状でどこまでのデータが必要性・関連性を満たすかは事件とデータ構造に応じて判断される。",
        "sourceIds": [
          "source-moj-criminal-procedure-it-2025",
          "source-egov-criminal-procedure-electronic-record-2026"
        ]
      },
      {
        "id": "electronic-record-secrecy-order",
        "title": "秘密保持命令で何が制限されるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "捜査機関は裁判官の許可を受け、1年を超えない期間、電磁的記録提供命令を受けたこと及び対象記録を提供した又は提供しなかったことをみだりに漏らさないよう命ずることができる。秘密にする必要がなくなった場合は命令を取り消す仕組みがある。",
        "exception": "秘密保持命令が常に付されるわけではなく、裁判官の許可と捜査上の必要性を前提とする。",
        "uncertain": "命令取消後の顧客・取引先への通知の要否・時期・方法は契約や適用法令等に応じた個別判断となる。",
        "sourceIds": [
          "source-egov-criminal-procedure-electronic-record-2026"
        ]
      },
      {
        "id": "electronic-record-notification-contract",
        "title": "通知義務・契約条項をどう見直すか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "顧客・取引先データの第三者開示時に通知義務を負う契約では、法令又は捜査機関に基づく開示の例外、秘密保持命令中の通知制限、命令取消後の通知手順、データ保管・処理上の責任分担を平時に確認しておくことが望ましい。",
        "exception": "契約上の通知義務と秘密保持命令の具体的な優先関係は、条項内容や適用法令、命令の範囲に応じて検討する。",
        "uncertain": "国外法上の通知義務が併存する場合を含め、命令取消後に遡及的通知が必要かは一律に決まらない。",
        "sourceIds": [
          "source-egov-criminal-procedure-electronic-record-2026"
        ]
      },
      {
        "id": "electronic-record-quasi-appeal-business-continuity",
        "title": "過大な命令と事業継続へどう備えるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "命令範囲が被疑事実と無関係なデータまで及ぶと考えられる場合には準抗告を検討し、提供後の複写交付や端末・サーバが押収された場合の代替手段も含めて事業継続を確保する体制を準備する。",
        "exception": "準抗告を行うべきかは命令内容、対象データ、利用者の権利、捜査への影響、時間的制約等を踏まえた個別判断となる。",
        "uncertain": "旧来の差押えに関する裁判例が新制度の具体的運用でどのように参照されるかは今後の実務蓄積を要する。",
        "sourceIds": [
          "source-egov-criminal-procedure-electronic-record-2026"
        ]
      }
    ],
    "sourceIds": [
      "source-moj-criminal-procedure-it-2025",
      "source-egov-criminal-procedure-electronic-record-2026"
    ],
    "practicalImpacts": [
      "捜査機関対応マニュアル",
      "法務・IT・経営へのエスカレーション",
      "オンラインデータ抽出・送信",
      "第三者開示通知条項",
      "秘密保持命令対応",
      "準抗告・不服申立て",
      "顧客データ保護",
      "事業継続・複写確保"
    ]
  },
  {
    "slug": "ai-service-development-contracts",
    "title": "AIサービス利用・開発契約",
    "categories": [
      "契約",
      "個人情報",
      "AI・デジタル",
      "情報セキュリティ",
      "知的財産"
    ],
    "summary": "生成AIを含むAIサービスの利用・カスタマイズ・開発について、サービス構造、インプット／アウトプット、データ利用、権利帰属、責任分配、セキュリティ・ログ、AIエージェント固有のガードレールまで契約実務から整理する。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "経済産業省は2025年2月18日、生成AIの普及等を踏まえ、AIサービスの利用者側を主な想定読者とする「AIの利用・開発に関する契約チェックリスト」を公表した。汎用的AIサービスの利用、カスタマイズ、新規開発等を念頭に、インプットとアウトプットを起点として契約条件を点検する。",
      "2019年の「AI・データの利用に関する契約ガイドライン 1.1版」は、AI開発・利用契約の基本的な考え方やモデル契約を示す基礎資料として現在も参照価値があり、2025年チェックリストは生成AIの普及後に増えた利用者側の契約実務を補う位置付けで読む。",
      "契約だけでAIリスクを消せるわけではない。データの実際の利用方法、セキュリティ水準、アウトプットの確認方法、ガードレール、利用する基盤モデルの規約等を確認し、契約条項と技術・運用上の統制を対応させる。"
    ],
    "currentSummary": {
      "facts": [
        "経済産業省は2025年2月18日に「AIの利用・開発に関する契約チェックリスト」を公表し、社内法務・顧問弁護士だけでなく、契約を初期的に検討するビジネス部門も想定読者としている。",
        "チェックリストはAI関連サービスについて、インプットとアウトプットを中心に、特定、提供、使用・利用、外部提供、権利帰属等の契約条件を確認する考え方を示し、個人情報、セキュリティ、監査、ログ保存、規約改定等の留意点も扱う。",
        "2019年のAI・データ契約ガイドラインはAIモデルの開発・利用契約を中心に基本的な考え方とモデル契約を示しており、2025年チェックリストは生成AI等の普及後の利用局面を含む契約実務を補完している。"
      ],
      "interpretations": [
        "AIサービスの契約審査では、まず汎用サービスの利用なのか、ユーザ向けのカスタマイズなのか、新規システム開発なのかを整理し、そのサービス構造に応じて入力データ、生成物、処理成果、第三者サービスの利用関係を特定する。",
        "チェックリストにリスクが記載されているからといって、常に条項修正や契約断念が必要になるわけではない。交渉可能性、リスクの発生可能性・影響、契約外の技術的・組織的対策を含めて、どこまでリスクを受容・低減・分配するかを決める。",
        "AIエージェント等の開発では、自律的なアウトプットや複数の基盤モデルへの依存が増えるため、通常のシステム開発契約に加えて、ガードレール、出力事故時の責任分配、上流モデルの利用条件変更等を契約・設計双方から確認する。"
      ],
      "implications": [
        "契約審査の前に、利用するAIサービスの提供形態、利用目的、入力データ、出力・成果物、基盤モデル・外部サービス、社内外の利用者を図示して確認する。",
        "入力データについて、学習利用の有無・範囲、第三者提供、再利用、個人データ・秘密情報の取扱い、保存・削除、越境移転を契約条件と実運用の双方から確認する。",
        "出力について、利用条件、権利帰属、第三者権利侵害・不正確性等のリスク、保証・免責、責任上限、成果完成義務の有無をサービス類型に応じて整理する。",
        "セキュリティ水準、監査、ログ保存、規約変更、インシデント対応、ガードレール、基盤モデルの切替え・利用規約変更時の扱いを、契約雛形とAI調達・開発プロセスへ組み込む。"
      ],
      "uncertain": [
        "どの契約条件が適切かはAIサービスの用途、交渉力、リスク水準、技術構成等で異なり、経済産業省のチェックリストは特定の契約条項を一律に要求するものではない。",
        "生成AI・AIエージェントの技術や提供形態は変化が速く、既存ガイドラインの契約類型やモデル条項をそのまま当てはめず、利用時点のサービス仕様・規約・法令・ガイドラインを確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "ai-contract-service-structure",
        "title": "AIサービスの構造と契約類型をどう特定するか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "汎用的AIサービスの利用、ユーザ向けカスタマイズ、新規開発等のどの場面かを整理し、ユーザ・ベンダ・基盤モデル提供者その他の関係者、入力、出力、処理成果を特定したうえで契約条件を検討する。",
        "exception": "同一案件でも既製サービス利用と追加開発が混在することがあり、契約書の名称だけで類型を決めない。",
        "uncertain": "新しいAIサービス形態が既存類型のどこに当たるかは、実際の役割分担・技術構成・提供条件に応じて判断する。",
        "sourceIds": [
          "source-meti-ai-data-contract-guideline-2019",
          "source-meti-ai-contract-checklist-2025"
        ]
      },
      {
        "id": "ai-contract-input-output",
        "title": "インプット・アウトプットの利用条件と権利をどう決めるか",
        "status": "authoritative",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "入力情報と出力・処理成果について、何を対象とするか、提供・使用目的、学習利用、第三者提供、利用条件、権利帰属等を分けて確認し、データの性質と利用目的に応じて契約上の制限を設計する。",
        "exception": "データ、個人情報、秘密情報、著作物等では法的保護の根拠が異なり、単に『所有権』や『成果物帰属』だけで整理できない。",
        "uncertain": "ベンダのモデル改善・汎用学習への利用、生成物の権利関係、第三者サービスへの再提供等はサービス仕様・規約によって異なるため個別確認が必要である。",
        "sourceIds": [
          "source-meti-ai-data-contract-guideline-2019",
          "source-meti-ai-contract-checklist-2025"
        ]
      },
      {
        "id": "ai-contract-risk-allocation",
        "title": "AIの不確実性と責任を契約でどう分配するか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "出力の不正確性、第三者権利侵害、期待性能未達等のリスクについて、利用目的と検証可能性を踏まえて、完成義務・業務遂行義務、保証・免責、責任上限、検収・再実施、ガードレール等を組み合わせて分配する。",
        "exception": "契約条項の修正だけで技術的な不確実性を解消できるわけではなく、利用制限、人による確認、テスト、モニタリング等の契約外対策を含める必要がある。",
        "uncertain": "AIエージェントの自律性やフィジカル領域への作用が高い場合など、必要なガードレールと責任分配は用途・被害可能性により大きく異なる。",
        "sourceIds": [
          "source-meti-ai-contract-checklist-2025"
        ]
      },
      {
        "id": "ai-contract-security-upstream",
        "title": "セキュリティ・ログ・上流モデル依存をどう契約へ落とすか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "対象システムのセキュリティ水準、監査、ログ保存、規約改定、インシデント対応に加え、第三者の基盤モデルや外部AIサービスを利用する場合は、その利用条件・出力条件・変更可能性を確認し、自社契約と運用に反映する。",
        "exception": "ベンダが上流モデルの条件を自由に変更できない場合もあり、ユーザ・ベンダ間の契約だけでは固定できない外部依存を明示して代替・通知・変更管理を設計する。",
        "uncertain": "基盤モデルやサービス仕様は継続的に更新されるため、締結時点の規約確認だけで足りるかはサービスの重要度・変更頻度に応じて決める。",
        "sourceIds": [
          "source-meti-ai-contract-checklist-2025"
        ]
      }
    ],
    "sourceIds": [
      "source-meti-ai-data-contract-guideline-2019",
      "source-meti-ai-contract-checklist-2025"
    ],
    "practicalImpacts": [
      "AIサービス調達",
      "AI開発委託",
      "契約審査・雛形",
      "入力データ・学習利用",
      "生成物・成果物の権利",
      "保証・免責・責任上限",
      "セキュリティ・監査・ログ",
      "AIエージェントのガードレール",
      "基盤モデル・第三者サービス管理"
    ]
  },
  {
    "slug": "consumer-contract-law-review-2026",
    "title": "消費者契約法・2026年見直し（解約・解約料・脆弱性）",
    "categories": [
      "契約",
      "消費者法・表示",
      "AI・デジタル"
    ],
    "summary": "消費者契約法の2026年見直しについて、消費者の多様な脆弱性、継続的契約からの離脱・解約妨害、更新・変更、解約料と説明、EC利用規約の不当条項まで、現行法と検討中の案を分けて追う。",
    "lastUpdated": "2026-09-05",
    "lastVerified": "2026-09-05",
    "isNew": true,
    "overview": [
      "消費者庁の検討会は2026年8月31日、中間取りまとめ（案）を提示した。案は消費者の多様な脆弱性への対応、継続的な契約関係からの離脱、更新・変更、解約料、消費者の定義等を扱うが、現時点では検討会資料であり成立法ではない。",
      "継続的契約については、既に消費者が実体法上有する解約権の行使を妨げる行為を抑止する方向が中心で、消費者契約一般に新たな解約権を設けることには慎重な整理が示されている。解約妨害への直接的な民事効果は置かず、適格消費者団体による差止請求の対象とする方向が示されている。",
      "解約料については消費者契約法9条1項1号の立証責任転換を一律に導入せず、複数プランの解約条件や算定根拠の説明を強化する方向が示されている。現行の9条・10条や民法の定型約款規律は引き続き基礎となる。"
    ],
    "currentSummary": {
      "facts": [
        "2026年8月31日の第8回検討会で『中間取りまとめ（案）』が配布され、9月9日の第9回検討会でも同案を議題とする予定である。",
        "中間取りまとめ（案）は、解約妨害として不実告知、断定的判断、退去妨害・不退去、解約申入れの拒否・不当遅延、その他不当な解約妨害行為・環境設計、解約後の債務履行の不当な拒否・遅延等を規律する方向を示している。",
        "案は解約妨害に新たな解約権や解約擬制を結び付けず、適格消費者団体による差止請求の対象とする方向を示している。",
        "解約料については消費者契約法9条1項1号の一律の立証責任転換を見送り、解約条件が異なる複数の選択肢の情報提供や、算定根拠の説明に関する規律を強化する方向を示している。"
      ],
      "interpretations": [
        "サブスクリプション等の事業者は、約款の文言だけでなく、解約ボタンまでの導線、電話・チャット等の受付体制、折返し処理、返金・返品・データ削除等の解約後処理まで一連の運用として点検する必要がある。",
        "『環境設計』の具体的な禁止類型は下位法令で定めることが想定されており、いわゆるダークパターン一般が直ちに違法になると先取りしない。",
        "解約料は条文上の基準を一律に変更する方向ではないため、現行法上の有効性判断と、将来の説明・情報提供強化の検討を分けて管理する。",
        "EC利用規約では、消費者契約法の不当条項規制だけでなく、民法548条の2第2項の定型約款規律も重なり得るため、負担の重い条項の内容と表示方法を合わせて確認する。"
      ],
      "implications": [
        "継続課金・会員制サービスについて、解約申入れから完了までの所要時間、画面遷移、電話・チャットの受付状況、折返し分岐を計測する。",
        "解約後に必要となる返金、返品受領、データ削除、機器回収等の処理と期限を棚卸しする。",
        "違約金・解約料について、金額の算定根拠、通常費用以外の要素、複数プラン間の条件差を説明できる資料を整備する。",
        "EC利用規約で高額な違約金・手数料等を置く場合、条項の合理性だけでなく、購入・申込み画面で利用者が認識できる表示になっているかを確認する。"
      ],
      "uncertain": [
        "中間取りまとめは案であり、2026年9月9日の第9回検討会以降に内容が修正される可能性がある。",
        "解約妨害の受け皿となる『環境設計』の具体的な類型、条文化、法的効果、施行時期は未確定である。",
        "消費者の脆弱性を踏まえた契約拘束力からの解放について、最終的な要件・効果は未確定である。"
      ]
    },
    "issues": [
      {
        "id": "consumer-contract-vulnerability-release",
        "title": "消費者の多様な脆弱性と契約の拘束力をどう見直すか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "中間取りまとめ（案）は、深刻な結果となる契約と事業者の認識等を軸に、一定の場合に消費者を契約の拘束力から解放する仕組みを検討しているが、要件・効果は未確定である。",
        "exception": "事業者に消費者側の事情を積極的に調査することまで求める方向ではなく、脆弱性把握を理由とする過度な情報収集を正当化しない。",
        "uncertain": "『深刻な結果』の具体化や最終的な条文要件は今後の検討に委ねられている。",
        "sourceIds": [
          "source-caa-consumer-contract-interim-draft-2026"
        ]
      },
      {
        "id": "consumer-contract-cancellation-obstruction",
        "title": "継続的契約の解約妨害と合理的な離脱方法をどう規律するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "既存の解約権の行使を妨げる不実告知、申入れ拒否・不当遅延、欺罔・威迫、環境設計、解約後債務の不当な拒否・遅延等を禁止し、差止請求の対象とする方向が示されている。",
        "exception": "解約妨害があっただけで契約終了を擬制したり、消費者契約一般に新たな解約権を設けたりする方向は示されていない。",
        "uncertain": "環境設計の具体的な禁止類型、条文化、施行時期は未確定である。",
        "sourceIds": [
          "source-caa-consumer-contract-interim-draft-2026"
        ]
      },
      {
        "id": "consumer-contract-cancellation-fees",
        "title": "解約料・違約金の有効性と説明をどう設計するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "中間取りまとめ（案）は9条1項1号の一律の立証責任転換を行わず、複数プランの解約条件や算定根拠の情報提供・説明を強化する方向を示している。",
        "exception": "現行法の『平均的な損害』基準や不当条項規制は引き続き適用され、改正案が未成立であることを理由に現行の違約金条項が当然に有効となるわけではない。",
        "uncertain": "説明義務・努力義務の最終的な条文、対象範囲、施行時期は未確定である。",
        "sourceIds": [
          "source-consumer-contract-act-current",
          "source-caa-consumer-contract-interim-draft-2026"
        ]
      },
      {
        "id": "consumer-contract-ec-standard-terms",
        "title": "EC利用規約の定型約款・不当条項リスクをどう管理するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "EC利用規約は民法上の定型約款に該当し得るため、相手方の権利を制限・義務を加重する不意打ち的な条項は、条項内容、表示方法、取引実情等に照らして契約内容から排除され得る。消費者契約では消費者契約法10条等も併せて確認する。",
        "exception": "定型約款規律と消費者契約法では適用対象・判断の背景が異なるため、どちらか一方だけで条項の有効性を判断しない。",
        "uncertain": "具体的な条項の有効性は、負担の程度、表示方法、取引全体のバランス、利用者属性等の個別事情に左右される。",
        "sourceIds": [
          "source-consumer-contract-act-current",
          "source-civil-code-current"
        ]
      }
    ],
    "sourceIds": [
      "source-consumer-contract-act-current",
      "source-civil-code-current",
      "source-caa-consumer-contract-interim-draft-2026"
    ],
    "practicalImpacts": [
      "サブスクリプション・継続課金",
      "解約導線・UI",
      "コールセンター・解約受付",
      "返金・返品・データ削除",
      "解約料・違約金",
      "EC利用規約・定型約款",
      "消費者向け情報提供",
      "適格消費者団体対応"
    ]
  }
];

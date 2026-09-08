(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const aiTopic = (window.TOPIC_DATA || []).find((item) => item.slug === "ai-personal-data");
  if (aiTopic) {
    aiTopic.lastUpdated = "2026-09-09";
    aiTopic.lastVerified = "2026-09-09";
    addUnique(aiTopic.sourceIds, ["source-rizap-ai-upload-2026", "source-ihi-rizap-ai-incident-2026"]);
    addUnique(aiTopic.practicalImpacts, ["未承認AI・Shadow AI管理", "DLP・アクセス制御", "AI誤投入時のインシデント対応"]);
    addUnique(aiTopic.currentSummary.facts, [
      "2026年9月、特定保健指導業務で従業員が個人利用の外部生成AIへ個人情報・要配慮個人情報を含むデータを誤って投入した事案が公表された。委託元のIHIグループ健康保険組合では210名が対象とされ、自己申告で発覚した。"
    ]);
    addUnique(aiTopic.currentSummary.interpretations, [
      "生成AI事業者が入力データをモデル学習に利用しないことを確認できても、それだけで個人情報保護法上の利用目的、第三者提供・委託、安全管理、委託契約上のAI利用・再委託の問題がなくなるわけではない。",
      "未承認AIへの誤投入は生成AI固有の例外的事故というより、従来の情報持出し・誤送信に新しい送信先が加わったものとして、ルール・技術統制・ログ・申告・初動を一体で設計した方がよい。"
    ]);
    addUnique(aiTopic.currentSummary.implications, [
      "業務で利用可能な生成AIを明示し、未承認AIへのアクセス制御、DLP、端末・ブラウザ管理、ログ監視を、利用規程・教育・自己申告制度と組み合わせる。",
      "生成AIへの誤投入が判明した場合は、送信停止、ログ・証跡保全、AI事業者への保存・削除・学習利用等の照会、影響範囲確認、PPC報告・本人通知、委託元報告を通常の漏えい対応フローへ組み込む。"
    ]);
    if (!(aiTopic.issues || []).some((item) => item.id === "ai-shadow-use")) {
      aiTopic.issues.push({
        id: "ai-shadow-use",
        title: "未承認AI・Shadow AIへの誤投入をどう防ぐか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "未承認の外部生成AIへの業務データ投入を、利用禁止の周知だけでなく、公認AIの提供、アクセス制御・DLP・ログ等の技術的措置、教育・自己申告、事故時の証拠保全・報告フローを組み合わせて管理する。",
        exception: "必要な技術統制はデータの性質、端末・ネットワーク構成、業務上のAI利用必要性等で異なり、全ての外部AIを一律に遮断することだけが唯一の対策ではない。",
        uncertain: "生成AIサービスの保存・学習・管理機能や企業向けプランは変化するため、公認サービスの設定・契約も継続確認する必要がある。",
        sourceIds: ["source-privacy-law", "source-ppc-ai", "source-rizap-ai-upload-2026", "source-ihi-rizap-ai-incident-2026"]
      });
    }
  }

  const privacyTopic = (window.TOPIC_DATA || []).find((item) => item.slug === "privacy-enforcement-breach-response");
  if (privacyTopic) {
    privacyTopic.lastUpdated = "2026-09-09";
    privacyTopic.lastVerified = "2026-09-09";
    addUnique(privacyTopic.sourceIds, ["source-rizap-ai-upload-2026", "source-ihi-rizap-ai-incident-2026"]);
    addUnique(privacyTopic.practicalImpacts, ["未承認AI・Shadow AI事故対応"]);
    addUnique(privacyTopic.currentSummary.facts, [
      "2026年9月には、特定保健指導の委託先で従業員が個人利用の外部生成AIへ個人情報・要配慮個人情報を含むデータを誤投入した事案が公表され、委託元であるIHIグループ健康保険組合は対象者210名、委託先への原因究明・再発防止指示等を公表した。"
    ]);
    addUnique(privacyTopic.currentSummary.interpretations, [
      "漏えい・安全管理の点検対象には不正アクセスだけでなく、従業員が未承認クラウド・生成AIへ業務データを送信するShadow IT／Shadow AIも含め、委託元・委託先の双方で利用実態を把握できるようにする必要がある。"
    ]);
    addUnique(privacyTopic.currentSummary.implications, [
      "委託先が個人データを扱う業務で生成AIを利用できる範囲、未承認サービスの禁止、再委託・外部送信、ログ、事故時の即時報告を契約と運用で明確にする。"
    ]);
    const vendorIssue = (privacyTopic.issues || []).find((item) => item.id === "privacy-enforcement-vendor-supervision");
    if (vendorIssue) addUnique(vendorIssue.sourceIds, ["source-ihi-rizap-ai-incident-2026"]);
    const breachIssue = (privacyTopic.issues || []).find((item) => item.id === "privacy-enforcement-breach-reporting");
    if (breachIssue) addUnique(breachIssue.sourceIds, ["source-rizap-ai-upload-2026", "source-ihi-rizap-ai-incident-2026"]);
  }
})();

window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "mobile-communications-identity-verification",
    "title": "携帯電話不正利用防止法／SIM本人確認・多回線契約",
    "categories": ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス", "契約"],
    "summary": "携帯電話不正利用防止法の2026年改正によるデータ通信専用SIMへの本人確認拡大、多回線契約、法人・代理人の権限確認と、2026〜2027年の本人確認方法見直しを、通信事業者・販売代理店の契約実務から整理する。",
    "lastUpdated": "2026-09-09",
    "lastVerified": "2026-09-09",
    "isNew": true,
    "overview": [
      "2026年5月29日公布の改正法は、本人確認等の対象を音声通信中心の枠組みから携帯通信へ拡張し、データ通信専用SIM等を含む制度へ組み替える。主な規定は公布後1年以内の政令指定日に施行される。",
      "改正法は、本邦内に住居を有しない外国人の確認方法、契約締結担当者の権限・地位確認、警察署長の照会制度、多回線契約の役務提供拒否など、契約受付・本人確認・記録管理の実務に直接影響する規律を追加する。",
      "これとは別に、本人確認書類の偽変造対策として本人確認方法そのものも段階的に見直されている。2026年4月1日に非対面本人確認の見直しが施行され、2027年4月1日には対面契約でもICチップ読取りを原則とする改正省令が施行予定である。",
      "この棚では、2026年法律第25号による対象・義務の拡張と、施行規則による本人確認方法の見直しを同じ実務領域として読む一方、法改正イベントは別々に管理する。"
    ],
    "currentSummary": {
      "facts": [
        "2026年5月29日に令和8年法律第25号が公布され、本人確認等の対象となる役務に音声通信以外の携帯通信役務を追加する改正が成立した。主な規定は公布日から1年を超えない範囲で政令指定日に施行される。",
        "改正法は、契約相手と契約締結担当者が異なる場合に、その担当者の権限又は地位を確認する義務を追加する。",
        "個人の多回線契約については、一定数を超える通信可能端末設備に係る役務提供を拒否できる仕組みが新設され、具体的な回線数等は下位法令で定める。",
        "2026年4月1日には施行規則改正による非対面本人確認方法の見直しが施行された。さらに令和8年総務省令第94号が2026年7月27日に公布され、2027年4月1日から対面契約時の本人確認書類のICチップ読取りを原則化する。"
      ],
      "interpretations": [
        "通信事業者・MVNOは、従来の音声SIM向け本人確認フローをそのまま横展開するのではなく、対象役務、既存利用者の経過措置、短期滞在外国人、代理人・法人担当者、多回線契約を分けて要件を実装する必要がある。",
        "法人契約では回線数だけで不正利用を判定するのではなく、契約締結担当者が法人のために契約する権限・地位を持つかの確認と、その記録保存が重要になる。",
        "本人確認方法の見直しは、法改正の施行日とは別のタイムラインで進むため、2026年4月施行済みの方法、2027年4月施行予定の方法、2026年法律第25号の施行準備を混同しない方がよい。"
      ],
      "implications": [
        "自社が提供・媒介するSIM・通信サービスについて、改正法の対象となる役務と対象外となる役務を棚卸しする。",
        "法人・代理人契約では、代表権、委任状、電話確認、既知の取引関係等による権限・地位確認と本人確認記録への記載を受付フローへ組み込む。",
        "多回線契約について、下位法令・Q&Aで示される上限、正当利用の確認、例外承認、契約拒否・利用停止の判断ルールをシステムと規程へ反映する。",
        "2027年4月1日の対面ICチップ読取り原則化に向け、店舗端末、JPKI・IC読取環境、本人限定受取郵便、本人確認記録、販売代理店手順を更新する。",
        "既存のデータ通信専用SIM利用者に対する施行時本人確認が必要になる場合に備え、対象者特定、連絡手段、本人確認、未応答時の役務提供拒否までの運用を準備する。"
      ],
      "uncertain": [
        "2026年法律第25号の主要部分の具体的な施行日は、2026年9月9日時点で政令指定日が確認できない。",
        "データ通信専用SIMの具体的な対象範囲、多回線契約の上限、短期滞在外国人・既存利用者の確認方法等は下位法令・Q&A等の確定内容を継続確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "mobile-id-scope-data-sim", "title": "データ通信専用SIM等が本人確認義務の対象になるか", "status": "authoritative", "stage": "enacted", "views": [],
        "conclusion": "令和8年法律第25号は本人確認等の対象となる電気通信役務を音声通信以外にも拡大し、法律上の対象を『携帯通信』へ広げる。具体的な対象役務は下位法令と照合して判断する。",
        "exception": "すべてのデータ通信サービスが同じ取扱いになるとは限らず、具体的な対象範囲は総務省令等で定められる。",
        "uncertain": "SMS機能付きデータSIMやIoT用途等の具体的な線引きは、最終的な下位法令・Q&Aを確認する必要がある。",
        "sourceIds": ["source-egov-mobile-law-2026", "source-sangiin-mobile-law-2026"]
      },
      {
        "id": "mobile-id-authority-status", "title": "法人・代理人契約で担当者の権限・地位をどう確認するか", "status": "authoritative", "stage": "enacted", "views": [],
        "conclusion": "契約相手と契約締結担当者が異なる場合、改正法は担当者の本人確認に加え、契約締結の権限又は地位の確認を義務付ける。確認方法と記録事項を受付・保存フローに反映する。",
        "exception": "具体的な確認方法は下位法令で定められるため、常に委任状の取得だけが必要という意味ではない。",
        "uncertain": "総務省令・Q&Aで確定する確認手段と、販売代理店・オンライン契約での運用を継続確認する。",
        "sourceIds": ["source-egov-mobile-law-2026", "source-sangiin-mobile-law-2026"]
      },
      {
        "id": "mobile-id-multiline-refusal", "title": "個人の多回線契約をどのように制限するか", "status": "authoritative", "stage": "enacted", "views": [],
        "conclusion": "改正法は、特定の個人が同時に利用できる端末設備の数が一定数を超える場合、超過部分について役務提供を拒否できる仕組みを新設した。具体的な上限・正当利用の扱いは下位法令で確認する。",
        "exception": "法人契約や正当な複数回線利用を回線数だけで一律に拒否する仕組みではない。",
        "uncertain": "具体的な回線数、正当利用の確認方法、既存契約への適用は下位法令・Q&Aの最終内容を確認する必要がある。",
        "sourceIds": ["source-egov-mobile-law-2026", "source-sangiin-mobile-law-2026"]
      },
      {
        "id": "mobile-id-nonface-2026", "title": "非対面本人確認の2026年見直しをどう運用するか", "status": "authoritative", "stage": "effective", "views": [],
        "conclusion": "令和8年総務省令第16号による本人確認方法の見直しは2026年4月1日に施行されているため、オンライン契約では現行の施行規則に沿った本人確認方法へ更新する。",
        "exception": "経過措置が設けられた方法があるため、旧フローの利用可否は適用期間と条件を確認する。",
        "uncertain": "今後の追加改正や本人確認技術の変更により利用可能な方式が変わり得る。",
        "sourceIds": ["source-egov-mobile-id-rule-2026"]
      },
      {
        "id": "mobile-id-counter-2027", "title": "2027年4月の対面ICチップ読取り原則化へどう準備するか", "status": "authoritative", "stage": "enacted", "views": [],
        "conclusion": "令和8年総務省令第94号は2027年4月1日から対面契約時の本人確認をICチップ読取り中心へ見直す。店舗・代理店の読取環境、本人限定受取郵便、記録作成等を施行前に更新する。",
        "exception": "本人確認書類の種類や契約方法に応じて複数の確認手段があり、すべての場面で同一方式になるわけではない。",
        "uncertain": "端末導入、例外処理、本人確認書類更新等の実装細部は総務省資料・Q&A等を継続確認する。",
        "sourceIds": ["source-egov-mobile-id-rule-2027"]
      }
    ],
    "sourceIds": ["source-egov-mobile-law-2026", "source-sangiin-mobile-law-2026", "source-egov-mobile-id-rule-2026", "source-egov-mobile-id-rule-2027"],
    "practicalImpacts": ["SIM・通信サービスの対象判定", "本人確認フロー", "法人・代理人の権限確認", "多回線契約の受付制御", "販売代理店・店舗マニュアル", "本人確認記録", "既存利用者の経過措置"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {"id":"source-egov-mobile-law-2026","title":"携帯音声通信事業者による契約者等の本人確認等及び携帯音声通信役務の不正な利用の防止に関する法律（令和8年法律第25号による改正）","type":"law","typeLabel":"一次資料・改正法／携帯電話不正利用防止法","authority":"e-Gov法令検索","publishedAt":"2026-05-29","url":"https://laws.e-gov.go.jp/law/417AC1000000031/20260529_508AC0000000025","importance":"最高","whyImportant":"2026年改正後の条文と附則を確認でき、主要部分が公布後1年以内の政令指定日、一部が公布日又は公布20日後に施行されることを直接確認できる。","topics":["mobile-communications-identity-verification"]},
  {"id":"source-sangiin-mobile-law-2026","title":"携帯電話不正利用防止法・令和8年改正法案 議案審議情報・要旨","type":"government_material","typeLabel":"一次資料・法案審議／2026年改正","authority":"参議院","publishedAt":"2026-05-29","url":"https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221033.htm","importance":"最高","whyImportant":"データ通信への対象拡大、短期滞在外国人、契約担当者の権限・地位確認、警察照会、多回線契約拒否といった改正内容と成立・公布日を簡潔に確認できる国会一次資料。","topics":["mobile-communications-identity-verification"]},
  {"id":"source-egov-mobile-id-rule-2026","title":"携帯電話不正利用防止法施行規則の一部改正に関する意見募集結果（令和8年総務省令第16号）","type":"government_material","typeLabel":"一次資料・施行規則／非対面本人確認","authority":"e-Govパブリック・コメント／総務省","publishedAt":"2026-02-27","url":"https://public-comment.e-gov.go.jp/pcm/1040?CLASSNAME=PCM1040&Mode=1&id=145210605","importance":"最高","whyImportant":"本人確認方法見直しの最終化、令和8年総務省令第16号の公布と2026年4月1日施行を確認できる一次資料。","topics":["mobile-communications-identity-verification"]},
  {"id":"source-egov-mobile-id-rule-2027","title":"携帯電話不正利用防止法施行規則の一部改正に関する意見募集結果（令和8年総務省令第94号）","type":"government_material","typeLabel":"一次資料・施行規則／対面ICチップ本人確認","authority":"e-Govパブリック・コメント／総務省","publishedAt":"2026-07-27","url":"https://public-comment.e-gov.go.jp/pcm/1040?CLASSNAME=PCM1040&Mode=1&id=145210670","importance":"最高","whyImportant":"対面本人確認をICチップ読取り中心へ見直す令和8年総務省令第94号の最終化・公布を確認する中心一次資料。","topics":["mobile-communications-identity-verification"]},
  {"id":"source-rizap-ai-upload-2026","title":"当社における外部生成AIサービスへのお客様情報の誤ったアップロードに関するお詫びとお知らせ","type":"company_notice","typeLabel":"一次資料・インシデント公表／生成AI誤投入","authority":"RIZAP株式会社","publishedAt":"2026-09-03","url":"https://rizap.co.jp/news/vG81xYj7","importance":"高","whyImportant":"社員が個人利用の外部生成AIへ特定保健指導データを誤投入した事案について、対象情報、行政報告、生成AI事業者への確認、再発防止を当事者が公表した一次資料。","topics":["ai-personal-data","privacy-enforcement-breach-response"]},
  {"id":"source-ihi-rizap-ai-incident-2026","title":"特定保健指導業務の委託先における生成AI利用に関する事案発生について","type":"company_notice","typeLabel":"一次資料・委託元公表／生成AI・個人情報","authority":"IHIグループ健康保険組合","publishedAt":"2026-09-02","url":"https://www.ihikenpo.or.jp/asp/news/news.asp?articleid=189769&page=1","importance":"高","whyImportant":"委託元の立場から、対象者210名、自己申告による発覚、生成AI事業者への照会、委託先への原因究明・再発防止指示を確認でき、委託先管理と漏えい初動の具体例になる。","topics":["ai-personal-data","privacy-enforcement-breach-response"]}
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {"id":"mobile-communications-act-2026-amendment","title":"携帯電話不正利用防止法・2026年改正","eventType":"law_amendment","lawId":"mobile-phone-illicit-use-prevention-act","lawLabel":"携帯電話不正利用防止法","relatedTopics":["mobile-communications-identity-verification"],"effectiveDateStatus":"phased","effectiveDateNote":"一部は2026年5月29日の公布日又は公布日から20日経過日に施行／主要部分は公布後1年以内の政令指定日","effectiveDateSourceIds":["source-egov-mobile-law-2026"],"matchSourceIds":["source-egov-mobile-law-2026","source-sangiin-mobile-law-2026"],"sourceIds":["source-egov-mobile-law-2026","source-sangiin-mobile-law-2026"],"articleIds":["article-sangiin-mobile-law-2026","article-ushijima-mobile-law-2026"]},
  {"id":"mobile-identity-verification-rules-2026-2027","title":"携帯電話不正利用防止法施行規則・本人確認方法の段階的見直し","eventType":"regulation_or_guideline","lawId":"mobile-phone-illicit-use-prevention-act","lawLabel":"携帯電話不正利用防止法","relatedTopics":["mobile-communications-identity-verification"],"effectiveDateStatus":"phased","effectiveDates":["2026-04-01","2027-04-01"],"effectiveDateNote":"非対面本人確認方法の見直しは2026年4月1日施行／対面ICチップ読取り原則化等は2027年4月1日施行","effectiveDateSourceIds":["source-egov-mobile-id-rule-2026","source-egov-mobile-id-rule-2027"],"matchSourceIds":["source-egov-mobile-id-rule-2026","source-egov-mobile-id-rule-2027"],"sourceIds":["source-egov-mobile-id-rule-2026","source-egov-mobile-id-rule-2027"],"articleIds":["article-egov-mobile-id-rule-2026","article-egov-mobile-id-rule-2027","article-miyake-mobile-id-2027"]}
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {"id":"article-sangiin-mobile-law-2026","title":"携帯電話不正利用防止法・令和8年改正法案 議案審議情報・要旨","publisher":"参議院","author":"参議院","publishedAt":"2026-05-29","collectedAt":"2026-09-09","url":"https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221033.htm","sourceType":"primary","sourceLabel":"一次資料・2026年改正法","status":"adopted","summary":"令和8年法律第25号の成立・公布経過と改正要旨。本人確認等の対象を音声通信以外の携帯通信役務へ拡大し、短期滞在外国人向け確認、契約締結担当者の権限・地位確認、警察署長による電気通信事業者への照会、多回線契約の役務提供拒否を新設する。主要部分は公布後1年以内の政令指定日に施行される。","whyImportant":["2026年改正の対象拡大と新しい確認義務を国会一次資料で一度に確認できる","成立日・公布日と施行の枠組みをタイトル推定ではなく公式記録から確認できる","通信事業者・MVNO・販売代理店が下位法令で追うべき論点を把握できる"],"audience":["企業法務","通信事業者・MVNO","販売代理店管理","本人確認・不正利用対策担当"],"audienceReason":"改正法の対象範囲と施行準備項目を一次資料で確認するため。","categories":["個人情報","情報セキュリティ","契約"],"relatedTopics":["mobile-communications-identity-verification"],"relatedIssues":["mobile-id-scope-data-sim","mobile-id-authority-status","mobile-id-multiline-refusal"],"primarySourceIds":["source-sangiin-mobile-law-2026","source-egov-mobile-law-2026"],"reformEventId":"mobile-communications-act-2026-amendment","reformStageAtPublication":"partially_effective","reformStageSourceIds":["source-egov-mobile-law-2026"],"whatChanged":"データ通信への対象拡大、権限・地位確認、多回線契約拒否等を含む令和8年法律第25号の成立・公布を整理した。"},
  {"id":"article-ushijima-mobile-law-2026","title":"携帯電話不正利用防止法　令和8年改正法の概要","publisher":"牛島総合法律事務所","author":"近藤綾香","publishedAt":"2026-08-05","collectedAt":"2026-09-09","url":"https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20260805identification/","sourceType":"secondary","sourceLabel":"法律事務所ニューズレター・2026年改正実務","status":"adopted","summary":"2026年改正法を、データ通信専用SIM、短期滞在外国人、警察照会、多回線契約、法人・代理人の権限確認、既存利用者の経過措置に分けて解説。総務省の制度整備の方向性や国会答弁も参照し、対象役務、確認方法、記録事項、施行前の既存顧客対応まで具体化している。","whyImportant":["一次資料の改正項目を契約受付・本人確認・記録保存・既存顧客対応へ落としている","法人契約の偽装対策として権限・地位確認が追加された背景と想定確認方法を整理している","多回線上限やデータSIM対象範囲など未確定部分を確定ルールと混同せず、後続省令・Q&Aの確認点として示している"],"audience":["企業法務","通信事業者・MVNO","販売代理店管理","コンプライアンス担当"],"audienceReason":"改正法を実際の申込・本人確認・記録・既存利用者対応へ落とし込むため。","categories":["個人情報","危機管理・コンプライアンス","契約"],"relatedTopics":["mobile-communications-identity-verification"],"relatedIssues":["mobile-id-scope-data-sim","mobile-id-authority-status","mobile-id-multiline-refusal"],"primarySourceIds":["source-egov-mobile-law-2026","source-sangiin-mobile-law-2026"],"reformEventId":"mobile-communications-act-2026-amendment","reformStageAtPublication":"partially_effective","reformStageSourceIds":["source-egov-mobile-law-2026"],"whatChanged":"令和8年改正法について、データSIM・法人担当者・多回線・既存利用者という実務単位の対応事項を補完した。"},
  {"id":"article-egov-mobile-id-rule-2026","title":"携帯電話不正利用防止法施行規則の一部改正に関する意見募集結果（令和8年総務省令第16号）","publisher":"e-Govパブリック・コメント／総務省","author":"総務省 総合通信基盤局電気通信事業部利用環境課","publishedAt":"2026-02-27","collectedAt":"2026-09-09","url":"https://public-comment.e-gov.go.jp/pcm/1040?CLASSNAME=PCM1040&Mode=1&id=145210605","sourceType":"primary","sourceLabel":"一次資料・施行規則／2026年4月施行","status":"adopted","summary":"携帯電話契約の本人確認方法を見直す令和8年総務省令第16号について、意見募集結果、公布日、2026年4月1日の施行を確認できる一次資料。非対面本人確認等の現行フローを確認する起点になる。","whyImportant":["2026年4月1日に施行済みの本人確認方法改正を一次資料で確認できる","将来の2027年改正と混同せず、現在有効な本人確認方式を切り分けられる","パブリックコメント結果と最終省令への差異を確認する入口になる"],"audience":["通信事業者・MVNO","本人確認・eKYC担当","企業法務","販売代理店管理"],"audienceReason":"オンライン本人確認の現行ルールを施行済みの省令ベースで確認するため。","categories":["個人情報","情報セキュリティ","契約"],"relatedTopics":["mobile-communications-identity-verification"],"relatedIssues":["mobile-id-nonface-2026"],"primarySourceIds":["source-egov-mobile-id-rule-2026"],"reformEventId":"mobile-identity-verification-rules-2026-2027","reformStageAtPublication":"finalized_pending","reformStageSourceIds":["source-egov-mobile-id-rule-2026"],"whatChanged":"2026年4月1日施行の本人確認方法改正を、後続の2027年対面改正と分離して登録した。"},
  {"id":"article-egov-mobile-id-rule-2027","title":"携帯電話不正利用防止法施行規則の一部改正に関する意見募集結果（令和8年総務省令第94号）","publisher":"e-Govパブリック・コメント／総務省","author":"総務省 総合通信基盤局電気通信事業部利用環境課","publishedAt":"2026-07-27","collectedAt":"2026-09-09","url":"https://public-comment.e-gov.go.jp/pcm/1040?CLASSNAME=PCM1040&Mode=1&id=145210670","sourceType":"primary","sourceLabel":"一次資料・施行規則／2027年4月施行","status":"adopted","summary":"対面契約時の本人確認方法をICチップ読取り中心へ見直す令和8年総務省令第94号の意見募集結果・公布を示す一次資料。2027年4月1日の施行に向け、店舗・代理店の本人確認方式を更新する根拠資料となる。","whyImportant":["本人確認書類の偽変造対策として対面本人確認の方式が変わる最終省令を確認できる","パブコメ段階の案ではなく、2026年7月27日に公布された最終ルールを追える","2027年4月のシステム・店舗手順改修の根拠になる"],"audience":["通信事業者・MVNO","店舗・販売代理店管理","本人確認・eKYC担当","企業法務"],"audienceReason":"2027年4月の対面本人確認方式変更へ店舗・システムを準備するため。","categories":["個人情報","情報セキュリティ","契約"],"relatedTopics":["mobile-communications-identity-verification"],"relatedIssues":["mobile-id-counter-2027"],"primarySourceIds":["source-egov-mobile-id-rule-2027"],"reformEventId":"mobile-identity-verification-rules-2026-2027","reformStageAtPublication":"finalized_pending","reformStageSourceIds":["source-egov-mobile-id-rule-2027"],"whatChanged":"2027年4月施行予定の対面ICチップ読取り原則化を最終省令ベースで登録した。"},
  {"id":"article-miyake-mobile-id-2027","title":"携帯電話契約の本人確認の見直し―対面契約時のICチップ読取りの原則化及び本人限定受取郵便の要件変更―","publisher":"三宅法律事務所","author":"渡邉雅之","publishedAt":"2026-07-29","collectedAt":"2026-09-09","url":"https://www.miyake.gr.jp/notice/%E6%90%BA%E5%B8%AF%E9%9B%BB%E8%A9%B1%E5%A5%91%E7%B4%84%E3%81%AE%E6%9C%AC%E4%BA%BA%E7%A2%BA%E8%AA%8D%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97%E2%80%95-%E5%AF%BE%E9%9D%A2%E5%A5%91%E7%B4%84%E6%99%82%E3%81%AE/","sourceType":"secondary","sourceLabel":"法律事務所解説・本人確認実務","status":"adopted","summary":"2026年4月からの非対面本人確認見直しと、令和8年総務省令第94号による2027年4月の対面ICチップ読取り原則化を一連の本人確認実務として整理。本人確認書類の類型、IC読取・本人限定受取郵便、記録事項、経過措置、犯罪収益移転防止法の本人確認見直しとの関係まで具体的に解説する。","whyImportant":["施行規則の条文変更を店舗・非対面・郵送の具体的な本人確認方式へ展開している","2026年施行済み部分と2027年施行予定部分を時間軸で比較できる","通信事業者だけでなく販売代理店の端末・マニュアル・記録対応まで準備項目を把握しやすい"],"audience":["通信事業者・MVNO","店舗・販売代理店管理","本人確認・eKYC担当","企業法務"],"audienceReason":"法令改正を実際の本人確認方式・システム・店舗手順へ落とし込むため。","categories":["個人情報","情報セキュリティ","契約"],"relatedTopics":["mobile-communications-identity-verification"],"relatedIssues":["mobile-id-nonface-2026","mobile-id-counter-2027"],"primarySourceIds":["source-egov-mobile-id-rule-2026","source-egov-mobile-id-rule-2027"],"reformEventId":"mobile-identity-verification-rules-2026-2027","reformStageAtPublication":"partially_effective","reformStageSourceIds":["source-egov-mobile-id-rule-2026","source-egov-mobile-id-rule-2027"],"whatChanged":"2026年・2027年の本人確認方法見直しを、店舗・非対面・郵送・記録という実務フローで補完した。"},
  {"id":"article-ihi-rizap-shadow-ai-incident-2026","title":"特定保健指導業務の委託先における生成AI利用に関する事案発生について","publisher":"IHIグループ健康保険組合","author":"IHIグループ健康保険組合","publishedAt":"2026-09-02","collectedAt":"2026-09-09","url":"https://www.ihikenpo.or.jp/asp/news/news.asp?articleid=189769&page=1","sourceType":"primary","sourceLabel":"一次資料・生成AI／個人情報インシデント","status":"adopted","summary":"特定保健指導の委託先RIZAPで、従業員がデータ抽出作業中に個人で使用する生成AIへ対象者情報を参照させた事案について、委託元が公表。IHI関係では210名が対象で、自己申告により発覚し、生成AI事業者への照会、対象者連絡、委託先への原因究明・再発防止指示を行った。","whyImportant":["未承認・個人利用AIへの業務データ投入が実際の個人情報インシデントとして発生した一次事例","委託元から見た対象者把握、委託先報告、生成AI事業者照会、再発防止指示の流れを確認できる","要配慮個人情報を扱う委託業務でAI利用ルールと委託先監督を接続する必要性が分かる"],"audience":["企業法務","個人情報保護担当","AIガバナンス担当","情報セキュリティ担当","委託先管理担当"],"audienceReason":"未承認AIへの誤投入が起きた場合の委託元・委託先の初動と管理ポイントを具体事例から確認するため。","categories":["AI・デジタル","個人情報","情報セキュリティ","危機管理・コンプライアンス"],"relatedTopics":["ai-personal-data","privacy-enforcement-breach-response"],"relatedIssues":["ai-input","ai-outsourcing","ai-shadow-use","privacy-enforcement-vendor-supervision","privacy-enforcement-breach-reporting"],"primarySourceIds":["source-ihi-rizap-ai-incident-2026","source-rizap-ai-upload-2026","source-ppc-ai","source-privacy-law"],"whatChanged":"個人利用の外部生成AIへの業務データ誤投入を、AI入力・委託先管理・漏えい初動の具体事例として既存テーマへ追加した。"},
  {"id":"article-miyake-rizap-shadow-ai-2026","title":"生成AI時代の誤送信事故～RIZAP公表事例から学ぶShadow AI・個人情報保護・会社のガバナンス","publisher":"三宅法律事務所","author":"渡邉雅之","publishedAt":"2026-09-08","collectedAt":"2026-09-09","url":"https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E7%94%9F%E6%88%90ai%E6%99%82%E4%BB%A3%E3%81%AE%E8%AA%A4%E9%80%81%E4%BF%A1%E4%BA%8B%E6%95%85%EF%BD%9E/","sourceType":"secondary","sourceLabel":"法律事務所解説・Shadow AI／個人情報","status":"adopted","summary":"RIZAPの生成AI誤投入事案を、従来型の情報持出し・誤送信事故が生成AIという新しい送信先で生じたものとして整理。学習利用の有無だけでなく、利用目的、第三者提供・委託、安全管理、再委託、契約、ログ・削除、漏えい報告を検討し、未承認AI対策としてアクセス制御、DLP、端末・ブラウザ管理、ログ監視、公認AIの整備、自己申告制度を組み合わせる実務を提示する。","whyImportant":["『学習に利用されない設定なら安全』という短絡を避け、AIへの入力行為自体を個人情報保護・委託契約・安全管理から評価している","Shadow AIを禁止規程だけでなくDLP・アクセス制御・ログ・公認AI・教育・自己申告の組合せで管理する実務へ落としている","誤投入発覚後の送信停止、証拠保全、AI事業者への削除照会、影響範囲確認、PPC報告・本人通知、委託元報告まで初動を整理している"],"audience":["企業法務","個人情報保護担当","AIガバナンス担当","情報セキュリティ担当","情シス"],"audienceReason":"生成AI利用規程を現実のShadow AI・誤投入リスクと技術統制・インシデント対応へ接続するため。","categories":["AI・デジタル","個人情報","情報セキュリティ","危機管理・コンプライアンス"],"relatedTopics":["ai-personal-data","privacy-enforcement-breach-response"],"relatedIssues":["ai-input","ai-outsourcing","ai-shadow-use","privacy-enforcement-vendor-supervision","privacy-enforcement-breach-reporting"],"primarySourceIds":["source-rizap-ai-upload-2026","source-ihi-rizap-ai-incident-2026","source-ppc-ai","source-privacy-law"],"whatChanged":"RIZAP公表事例を起点に、未承認AIの予防統制と漏えい初動を既存のAI・個人情報テーマへ具体化した。"}
]);

(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const additions = [
    {
      id: "article-ppc-security-measures-guideline-review-2026",
      title: "個人情報保護法ガイドライン（通則編）等における安全管理措置の手法の例示の追加等の検討について",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-2.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・安全管理措置ガイドライン見直し／検討資料",
      status: "adopted",
      summary: "個人情報保護法ガイドライン（通則編）の安全管理措置について、2016年策定時から大きく変わっていない手法例を現代化する方向を示した検討資料。クラウド利用、多要素認証、ゼロトラスト、侵入後の横展開対策、特権アカウント最小化、侵害システムの隔離・停止等を例示候補とし、『講じなければならない措置』と非拘束的な『手法の例示』の対応関係も明確化する。2026年12月頃のパブコメ、2027年2月頃の決定、2027年4月施行を予定する。",
      whyImportant: [
        "安全管理措置の具体例がクラウド・MFA・ゼロトラスト・侵入後対策へ大きく更新される方向で、情報セキュリティとプライバシー管理の点検項目に直結する",
        "法的に求められる措置そのものと実装例を区別して再構成する方針が示され、例示を一律必須要件と誤解しないための重要な整理になる",
        "2027年4月までの検討工程が示されており、ガイドライン改正を継続追跡できる"
      ],
      audience: ["企業法務", "プライバシー・個人情報担当", "情報セキュリティ", "CSIRT", "委託先管理担当"],
      audienceReason: "現行義務と検討中の手法例を区別しつつ、クラウド・認証・アクセス制御・侵害後対応の管理基準を改正前から点検するため。",
      categories: ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-enforcement-safety-management", "privacy-incident-forensics-readiness"],
      primarySourceIds: ["source-ppc-security-measures-guideline-review-2026"],
      reformEventId: "privacy-security-measures-guideline-review-2026-2027",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-ppc-security-measures-guideline-review-2026"],
      legacyReformInference: false,
      whatChanged: "ガイドライン見直し開始／安全管理措置の手法例について、クラウド・MFA・ゼロトラスト・横展開対策等を取り込む方向と2027年4月までの改正工程が示された。現時点では検討案。"
    },
    {
      id: "article-ppc-unauthorized-access-warning-2024",
      title: "不正アクセスによる個人データ漏えい防止のための注意喚起",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会",
      publishedAt: "2024-12-11",
      collectedAt: "2026-09-17",
      url: "https://www.ppc.go.jp/news/careful_information/241211_alert_dataleakage/",
      sourceType: "primary",
      sourceLabel: "一次資料・不正アクセス／安全管理措置注意喚起",
      status: "adopted",
      summary: "ランサムウェア等の高度化を踏まえ、個人情報保護委員会が実際の漏えい等報告を分析して不正アクセスの原因と対策例を整理した注意喚起。公開済み脆弱性・パッチ遅延・弱い認証に加え、グループ会社や海外拠点を足掛かりにした侵入、組織間アクセス制御、委託先・クラウド管理等を含め、個人情報保護法23～25条の安全管理措置・従業者監督・委託先監督を経営・組織面から点検する材料を示す。",
      whyImportant: [
        "実際の漏えい報告から生じた失敗類型を、抽象的な安全管理義務ではなく具体的な点検項目へ落とせる",
        "グループ会社・海外拠点・委託先・クラウドまで含むサプライチェーン上の弱点を個人情報保護法の監督義務と接続できる",
        "2026年の安全管理措置ガイドライン見直しで追加される例示の背景を遡って理解できる"
      ],
      audience: ["企業法務", "個人情報保護担当", "情報セキュリティ", "IT統制", "委託先・グループ管理担当"],
      audienceReason: "脆弱性管理、認証、ネットワーク分離、グループ会社・委託先監督を、PPCの実際の監督目線で点検するため。",
      categories: ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-enforcement-safety-management", "privacy-enforcement-vendor-supervision"],
      primarySourceIds: ["source-ppc-unauthorized-access-warning-2024", "source-privacy-law"],
      legacyReformInference: false,
      whatChanged: "バックフィル／不正アクセスの失敗類型を、脆弱性・認証だけでなくグループ会社・海外拠点・委託先・クラウドまで含む安全管理チェックへ具体化した。"
    },
    {
      id: "article-noandt-cyber-supply-chain-reporting-2025",
      title: "サプライチェーンにおけるサイバーセキュリティリスク対応の近時の動向（3） ～DDoS・ランサムウェア攻撃におけるインシデント報告様式の統一化等～",
      publisher: "長島・大野・常松法律事務所",
      author: "工藤靖",
      publishedAt: "2025-08-19",
      collectedAt: "2026-09-17",
      url: "https://www.nagashima.com/publications/publication20250819-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・サイバーセキュリティ／サプライチェーン・インシデント報告",
      status: "adopted",
      summary: "サプライチェーン経由のサイバー攻撃を前提に、再委託先の管理、契約上のセキュリティ要求・可視化、DDoS・ランサムウェアの共通報告様式、個人情報保護法上の委託元・委託先の漏えい報告、インシデント時の原因・再発防止情報共有と責任分担を横断して整理する実務解説。再委託を同意事項とし対策状況を確認する設計や、委託先が事実関係を把握する場合の連名報告、情報共有と責任評価の緊張関係まで踏み込む。",
      whyImportant: [
        "一次資料だけでは分断されがちな委託先管理、サイバー報告、個人情報漏えい報告を一つのインシデント対応フローとして読める",
        "再委託先に直接契約拘束を及ぼせない場面で、同意・確認・協力義務をどのように上流契約へ落とすかが具体的",
        "事故時の情報共有が責任評価と衝突し得ることを踏まえ、契約上の責任分担やサイバー保険まで検討対象にしている"
      ],
      audience: ["企業法務", "情報セキュリティ", "CSIRT", "購買・委託先管理", "危機管理・コンプライアンス"],
      audienceReason: "サイバーインシデント時に必要な情報を委託先・再委託先から取得し、複数の当局報告と責任整理を並行して行える契約・運用を設計するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "個人情報", "契約・取引"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-enforcement-vendor-supervision", "privacy-enforcement-breach-reporting", "privacy-incident-forensics-readiness"],
      primarySourceIds: ["source-privacy-law", "source-ppc-unauthorized-access-warning-2024", "source-nco-cyber-common-reporting-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／委託先・再委託先管理を、契約上の協力義務、共通報告様式、個人情報漏えい報告、事故時の情報共有・責任分担まで一体で整理した。"
    },
    {
      id: "article-mhlw-customer-harassment-2026",
      title: "従業員を守るために ― カスタマーハラスメント対策の新ルール",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-08-20",
      collectedAt: "2026-09-17",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260820.html",
      sourceType: "primary",
      sourceLabel: "一次資料・労働施策総合推進法／カスタマーハラスメント",
      status: "adopted",
      summary: "2026年10月1日から事業主に義務化されるカスタマーハラスメント防止措置を厚生労働省が実務向けに整理した資料。顧客等の言動、社会通念上許容される範囲超過、就業環境侵害の3要素を全て満たす場合を対象とし、BtoB取引先やSNS上の言動も射程に含む。事業主には方針・対処内容の明確化、相談体制、事後対応、悪質事案への対処体制、プライバシー保護・不利益取扱い禁止等が求められる。",
      whyImportant: [
        "施行直前の厚労省公式資料で、通常の苦情とカスハラを分ける判断枠組みと必須措置をまとめて確認できる",
        "接客業だけでなくBtoBの取引先担当者や電話・SNSも対象となり得るため、幅広い企業の営業・CS・購買・現場運用に影響する",
        "悪質事案への対応方針や現場を一人で対応させない体制など、相談窓口設置だけでは足りない実装事項を確認できる"
      ],
      audience: ["人事・労務", "企業法務", "コンプライアンス", "営業・カスタマーサポート", "現場管理職"],
      audienceReason: "2026年10月1日までにカスハラ判断基準、対応マニュアル、エスカレーション、相談窓口、被害者保護を実装するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-jobseeker-sexual-harassment-2026"],
      relatedIssues: ["customer-harassment-definition-2026", "customer-harassment-employer-measures-2026"],
      primarySourceIds: ["source-mhlw-customer-harassment-2026"],
      reformEventId: "labor-policy-customer-harassment-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-customer-harassment-2026"],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-mhlw-customer-harassment-2026"],
      legacyReformInference: false,
      whatChanged: "施行準備／2026年10月1日からカスタマーハラスメント防止措置が義務化されるため、定義・相談体制・事後対応・悪質事案対処までを新テーマとして整理した。"
    },
    {
      id: "article-mhlw-jobseeker-sexual-harassment-2026",
      title: "求職活動等をする方を守るために ― 求職者等に対するセクシュアルハラスメント対策の新ルール",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-17",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260901.html",
      sourceType: "primary",
      sourceLabel: "一次資料・男女雇用機会均等法／求職者等セクシュアルハラスメント",
      status: "adopted",
      summary: "2026年10月1日から事業主に義務化される求職者等へのセクシュアルハラスメント防止措置を厚生労働省が整理した資料。採用応募者だけでなく、説明会、インターンシップ、教育・看護実習、OB・OG訪問を含み、SNS等のオンラインや通常の就業場所以外での言動も対象となり得る。方針・面談時間やSNS等のルール明確化、求職者等にも周知する相談窓口、迅速な事実確認、被害者配慮・行為者措置・再発防止、プライバシー保護等を求める。",
      whyImportant: [
        "従業員向けセクハラ対策の単純延長ではなく、採用・インターン・実習・OB/OG訪問の業務プロセスまで防止措置の対象が広がる",
        "面談時間・場所・SNSの種類等の接触ルールや、求職者等からアクセスできる相談窓口の周知まで具体的な実装事項が示されている",
        "2026年10月1日施行前に、採用担当者だけでなく現場社員やOB/OG訪問対応者を含めた管理体制を点検できる"
      ],
      audience: ["人事・採用", "企業法務", "コンプライアンス", "インターン・実習担当", "現場管理職"],
      audienceReason: "採用・インターン・実習・OB/OG訪問・SNS連絡について、方針、接触ルール、相談窓口、調査・是正フローを2026年10月1日までに整えるため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-jobseeker-sexual-harassment-2026"],
      relatedIssues: ["jobseeker-sexual-harassment-employer-measures-2026"],
      primarySourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"],
      reformEventId: "equal-employment-jobseeker-sexual-harassment-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"],
      legacyReformInference: false,
      whatChanged: "施行準備／2026年10月1日から求職者等セクシュアルハラスメント防止措置が義務化されるため、採用・インターン・実習・OB/OG訪問まで含む新論点を追加した。"
    },
    {
      id: "article-tmi-customer-harassment-practical-2026",
      title: "【労働法ブログ】企業におけるカスタマーハラスメント対策について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-04-02",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18180.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・労働法／カスタマーハラスメント",
      status: "adopted",
      summary: "2026年10月施行のカスハラ防止措置について、法定3要素、指針の具体例、事業主の義務、他社から事実確認等の協力を求められた場合の対応、望ましい措置を整理した実務解説。特に、現場で一人対応させないこと、録音・録画、一定時間後の退店要求・電話終了、警察通報・本社エスカレーションといった対処例を踏まえ、企業ごとのマニュアル、QA、研修、ロールプレイまで施行準備へ落としている。",
      whyImportant: [
        "厚労省の義務項目を、業種・業態に応じた対応マニュアル、現場QA、社内報告、警察通報、研修へ具体化している",
        "正当な苦情とカスハラの線引きだけでなく、行為発生後に現場がどこまで対応し、いつ管理職・本社へ上げるかを設計できる",
        "自社の労働者が他社労働者へカスハラをした場合の協力・懲戒等にも触れ、被害者側だけでないBtoB対応を整理できる"
      ],
      audience: ["人事・労務", "企業法務", "コンプライアンス", "店舗・CS・営業責任者", "研修・規程担当"],
      audienceReason: "法定措置を現場マニュアル、エスカレーション、研修、証拠化、他社との協力フローまで落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-jobseeker-sexual-harassment-2026"],
      relatedIssues: ["customer-harassment-definition-2026", "customer-harassment-employer-measures-2026"],
      primarySourceIds: ["source-mhlw-customer-harassment-2026"],
      reformEventId: "labor-policy-customer-harassment-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-customer-harassment-2026"],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-mhlw-customer-harassment-2026"],
      legacyReformInference: false,
      whatChanged: "実務具体化／カスハラ義務化について、法定措置から現場マニュアル・エスカレーション・研修・他社との協力まで実装単位へ落とした。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-meti-jcstar-launch-20250325",
      title: "IoT製品に対するセキュリティラベリング制度（JC-STAR）の運用を開始しました",
      publisher: "経済産業省",
      author: "経済産業省・独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2025-03-25",
      collectedAt: "2026-09-18",
      url: "https://www.meti.go.jp/press/2024/03/20250325007/20250325007.html",
      sourceType: "primary",
      sourceLabel: "一次資料・経済産業省／JC-STAR運用開始",
      status: "adopted",
      summary: "IoT製品のセキュリティ要件への適合性を共通基準で評価・可視化するJC-STARの運用開始資料。IP通信を行う幅広いIoT製品を対象とする任意の多段階制度で、★1は共通の最低限要件、★2〜★4は製品類型ごとの要件とする。★1・★2は自己適合宣言、★3・★4は第三者評価を基礎にラベルを付与し、政府調達等での活用や海外制度との相互承認も進める。",
      whyImportant: [
        "JC-STARを法令上の一律の取得義務と誤解せず、任意制度としての位置付けを公式資料から確認できる",
        "対象製品、★1〜★4の制度設計、自己適合宣言と第三者評価の違いを制度開始時点の一次資料で押さえられる",
        "製品ベンダー側の認証対応と、調達側の選定基準という二つの実務を同じ制度の中で整理できる"
      ],
      audience: ["IoT製品ベンダー法務", "情報セキュリティ", "製品開発・品質保証", "調達・購買", "コンプライアンス"],
      audienceReason: "JC-STARの制度上の位置付けと対象範囲、評価レベル、調達での使われ方を一次資料から確認するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-level-evaluation"],
      primarySourceIds: ["source-meti-jcstar-launch-20250325"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／JC-STARの制度開始、任意性、対象範囲、★1〜★4の評価方式を基礎資料として追加した。"
    },
    {
      id: "article-ipa-jcstar-portal-20260731",
      title: "セキュリティ要件適合評価及びラベリング制度（JC-STAR）",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-18",
      url: "https://www.ipa.go.jp/security/jc-star/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／JC-STAR現行制度ポータル",
      status: "adopted",
      summary: "IPAの現行JC-STARポータル。★1・★2は自己適合宣言、★3・★4は第三者評価を用いること、ラベルは想定脅威に対する最低限の水準への適合を示すもので完全なセキュリティを保証しないことを明示する。さらに、受理番号通知前や仮登録番号のない状態で『JC-STAR適合予定』『適合ラベル対応』『適合ラベル取得申請中』等と表示することを認めておらず、不正表示への対応可能性も示している。",
      whyImportant: [
        "制度レベルごとの評価方式と、ラベルが保証する範囲・保証しない範囲を現行公式ページで確認できる",
        "製品ページや提案書における『適合予定』『申請中』等の取得前表示について、IPAの明確な運用ルールが示されている",
        "法務・マーケティング・セキュリティが、申請手続と外部表示を同じ承認フローで管理する必要性を把握できる"
      ],
      audience: ["IoT製品ベンダー法務", "広報・マーケティング", "情報セキュリティ", "製品開発・品質保証", "調達・購買"],
      audienceReason: "最新の制度運用、ラベルの意味、取得前表示の管理を製品・広告・提案実務へ落とすため。",
      categories: ["個人情報・AI・情報セキュリティ", "消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-level-evaluation", "jcstar-procurement-use", "jcstar-label-claims"],
      primarySourceIds: ["source-ipa-jcstar-portal-20260731", "source-ipa-jcstar-star3-20260612"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／現行の評価方式、ラベルの限界、取得前の誤認表示ルールを追加した。"
    },
    {
      id: "article-ipa-jcstar-procurement-20260709",
      title: "JC-STAR活用に向けた取り組み",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-09",
      collectedAt: "2026-09-18",
      url: "https://www.ipa.go.jp/security/jc-star/leverage.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／JC-STARの調達・利活用",
      status: "adopted",
      summary: "JC-STARを政府機関等、重要インフラ事業者、地方公共団体等の調達要件へ組み込み、業界標準としてラベル製品の製造・販売・選定を促し、海外制度との相互承認によって適合評価負担を軽減する方向を示す公式資料。任意ラベルであっても、調達基準への採用を通じて企業取引上の重要性が高まる構造を確認できる。",
      whyImportant: [
        "『任意制度だから企業法務には関係が薄い』という見方では拾えない、調達・契約上の実務インパクトを確認できる",
        "調達側がラベルを最低要件・選定根拠として使う場面と、システム重要度に応じた追加審査の必要性を整理できる",
        "製品ベンダー側では、ラベル対応が政府・重要インフラ等の市場アクセスや提案条件に接続し得ることを把握できる"
      ],
      audience: ["調達・購買", "情報セキュリティ", "委託先・サプライチェーン管理", "IoT製品ベンダー法務", "営業企画"],
      audienceReason: "JC-STARを製品認証の話だけで終わらせず、調達条件・ベンダー選定・契約審査の証跡としてどう使うか検討するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-procurement-use"],
      primarySourceIds: ["source-ipa-jcstar-procurement-20260709", "source-meti-jcstar-launch-20250325"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／任意制度であるJC-STARが政府・重要インフラ等の調達基準へ接続する実務上の意味を整理した。"
    },
    {
      id: "article-unitis-tmi-jcstar-20251208",
      title: "JC-STAR制度の概要とセキュリティ業務への影響（対象製品、レベル、時期等）",
      publisher: "UNITIS",
      author: "寺門峻佑・田山翔・梶原尚樹（TMI総合法律事務所）",
      publishedAt: "2025-12-08",
      collectedAt: "2026-09-18",
      url: "https://unitis.jp/articles/18754/",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI総合法律事務所／JC-STARの製品・調達実務",
      status: "adopted",
      summary: "JC-STARをIoT製品ベンダーと調達・利用企業の双方から解説する実務記事。ベンダー側では、対象製品の洗い出し・製品類型判定、適合要件とのGAP分析、対応計画の策定・実施、申請・証跡整備を一連のプロセスとして整理する。調達側では、選定理由の明確化、最低限のセキュリティ水準の確保、サプライチェーンリスク低減、情報透明性の向上という活用価値を示す。制度スケジュールは公開時点の記載を含むため、現在の整備状況はIPA一次資料で補正して読む必要がある。",
      whyImportant: [
        "一次資料の制度説明を、対象製品の棚卸し、GAP分析、対応計画、申請・証跡というベンダーの実装フローへ落としている",
        "調達企業側のメリットを、選定理由、最低水準、サプライチェーンリスク、透明性という観点で整理している",
        "制度導入をセキュリティ部門だけの仕事にせず、法務・製品・営業・調達をまたぐ業務設計として読む価値がある"
      ],
      audience: ["IoT製品ベンダー法務", "情報セキュリティ", "製品開発・品質保証", "調達・購買", "コンプライアンス"],
      audienceReason: "公式要件を自社の製品台帳・GAP分析・証跡・調達フローへ変換する際の実務手順を把握するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-level-evaluation", "jcstar-procurement-use"],
      primarySourceIds: [
        "source-meti-jcstar-launch-20250325",
        "source-ipa-jcstar-portal-20260731",
        "source-ipa-jcstar-procurement-20260709",
        "source-ipa-jcstar-star3-20260612"
      ],
      legacyReformInference: false,
      whatChanged: "新規テーマ／JC-STARの公式要件を、製品棚卸し・GAP分析・証跡・調達判断へ落とす代表的な実務解説を追加した。"
    },
    {
      id: "article-tmi-dnfbp-aml-cft-20260917",
      title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI総合法律事務所／DNFBPsのAML・CFT",
      status: "adopted",
      summary: "金融機関以外の事業会社、とりわけ宅建業者、宝石・貴金属等取扱事業者、郵便物受取・電話受付代行・電話転送サービス等のDNFBPsについて、犯収法上の義務、各省庁ガイドライン、リスクベース・アプローチ、有効性検証を一体で整理する実務解説。2027年4月の本人確認方法厳格化、2026年改正による法人口座悪用対策も踏まえ、統括管理者、内部規程、リスク評価、教育、内部監査、取締役会での実質的議論、顧客管理・取引モニタリング、疑わしい取引の届出までセルフチェックに落としている。DNFBPsに該当しない事業会社については、犯収法上の特定事業者としての義務と、銀行等への確認協力・自社サービスや法人口座の悪用防止という一般的なコンプライアンス対応を区別している。",
      whyImportant: [
        "金融機関中心で語られがちなAML/CFTを、DNFBPsの事業会社に必要な統括管理・規程・リスク評価・教育・監査・取締役会議論まで具体化している",
        "『リスクベースだから法定の取引時確認要件を緩和できる』わけではないという境界を示し、法定義務とリスクに応じた追加措置を切り分けやすい",
        "DNFBPsに該当しない一般事業会社にも、犯収法上の特定事業者義務を拡張せず、法人口座やサービスの悪用・捜査協力・レピュテーションを別のリスク管理として整理できる"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "宅建・不動産事業", "宝石・貴金属等取扱事業", "本人確認・顧客管理担当"],
      audienceReason: "自社が犯収法上の特定事業者・DNFBPに当たるかを起点に、2026年改正と2027年本人確認厳格化を規程・システム・監査・経営報告へ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-2026-account-remittance", "aml-fictitious-account", "aml-identity-verification-2027"],
      primarySourceIds: ["source-npa-aml-amendment-2026", "source-npa-aml-overview-2026"],
      legacyReformInference: false,
      whatChanged: "既存AMLテーマ／金融機関以外のDNFBPsについて、法定義務・リスクベース・有効性検証・ガバナンスを実務フローへ落とす代表的解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-fsa-cyber-common-reporting-guidelines-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／サイバーインシデント共通報告様式",
      status: "adopted",
      summary: "2026年9月15日の関係省庁申合せ改正で『その他サイバー攻撃等事案共通様式』が追加されたことを受け、金融庁が所管業者のコンピュータシステム障害・サイバーセキュリティ事案の報告を、従来様式からDDoS・ランサムウェア・その他サイバー攻撃等の関係省庁共通様式へ移行するため、監督指針・事務ガイドラインを最終改正した資料。主要行、地域金融機関、保険、金融商品取引業者、貸金、資金移動、暗号資産等を横断し、2026年10月1日から適用される。",
      whyImportant: [
        "金融庁所管業者のサイバーインシデント報告様式の移行が案段階を終え、2026年10月1日の適用日と対象監督指針が確定した",
        "銀行・証券だけでなく保険、貸金、資金移動、暗号資産等を含む広い金融セクターで、CSIRTと当局報告のテンプレート更新に直結する",
        "2026年9月15日に確定した関係省庁共通様式と、金融庁の各業態別監督指針を同じ報告実務として接続できる"
      ],
      audience: ["金融機関の法務・コンプライアンス", "情報セキュリティ・CSIRT", "当局報告担当", "内部監査", "危機管理"],
      audienceReason: "2026年10月1日までに、従来の監督当局報告様式と新共通様式の項目対応、社内報告・承認・提出フローを最終化するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "金融商品取引・開示・IR"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-countermeasures-reporting"],
      primarySourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918", "source-cyber-report-form-notice-2026"],
      reformEventId: "fsa-supervisory-guidelines-cyber-reporting-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      legacyReformInference: false,
      whatChanged: "法改正情報更新／金融庁監督指針等のサイバーインシデント報告様式改正が最終化され、2026年10月1日から関係省庁共通様式へ移行することが確定した。"
    },
    {
      id: "article-ppc-forensics-keypoints-20260116",
      title: "不正アクセス発生時のフォレンジック調査の有効活用に向けた着眼点",
      publisher: "個人情報保護委員会",
      author: "個人情報保護法サイバーセキュリティ連絡会",
      publishedAt: "2026-01-16",
      collectedAt: "2026-09-18",
      url: "https://www.ppc.go.jp/files/pdf/260116_forensics_keypoints.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・個人情報保護法サイバーセキュリティ連絡会／フォレンジック",
      status: "adopted",
      summary: "不正アクセス発生時のフォレンジック調査を有効に使うため、平時の情報資産把握・ログ保管・対応フロー、事故時のエスカレーション・早期封じ込め・証拠保全、必要に応じた調査会社等への相談、調査報告の原因・侵害範囲・再発防止への活用を整理した一次資料。個人データの安全管理措置と事故対応を接続する一方、フォレンジック調査会社へ依頼すること自体が個人情報保護法やサイバー対処能力強化法上の一律の義務ではないことも明記する。",
      whyImportant: [
        "抽象的な安全管理措置を、情報資産台帳、ログ、対応フロー、封じ込め、証拠保全という事故対応の準備項目へ落とせる",
        "復旧を急いで証拠や侵入経路の手掛かりを失うリスクを避け、漏えいの有無・影響範囲・再発防止を説明できる調査設計につながる",
        "専門調査を有力な手段として示しつつ、外部フォレンジック会社への依頼自体を一律の法定義務としない境界が明確"
      ],
      audience: ["企業法務", "プライバシー・個人情報担当", "情報セキュリティ・CSIRT", "内部監査", "危機管理・BCP"],
      audienceReason: "事故が起きてから調査方法を決めるのではなく、平時に証拠・ログ・担当・外部専門家への連絡手順を準備し、復旧と法的評価を両立するため。",
      categories: ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-incident-forensics-readiness", "privacy-enforcement-safety-management", "privacy-enforcement-breach-reporting"],
      primarySourceIds: ["source-ppc-forensics-keypoints-20260116"],
      legacyReformInference: false,
      whatChanged: "バックフィル／不正アクセス対応について、平時のログ・資産把握から封じ込め・証拠保全・フォレンジック調査活用までを一次資料で補強した。"
    },
    {
      id: "article-miyake-ransomware-72h-20260918",
      title: "【動画解説・動画資料】法務・経営のためのサイバーセキュリティ用語　～ランサムウェア事案の『72時間』で読み解く実務地図",
      publisher: "弁護士法人三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-18",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E6%B3%95%E5%8B%99%E3%83%BB%E7%B5%8C%E5%96%B6%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B5%E3%82%A4/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／ランサムウェア事故対応・法務",
      status: "adopted",
      summary: "架空の中堅メーカーのランサムウェア事案を、侵入前から事故1か月後の取締役会までの時間軸で追い、EDR・SOC・CSIRT・ゼロトラスト等の技術用語を法務・監査・経営が『何を聞き返すか』へ変換する実務解説。トリアージ、封じ込め、フォレンジックと証拠保全、個人情報保護法26条等の報告・通知、適時開示・業法報告、公表文の確定事実と調査中事項の区別、取締役会での残余リスクまで一続きに整理する。2026年9月16日のPPC安全管理措置見直しは案段階であることを明示し、復旧を急ぐ現場と証拠を残す法務の衝突も扱う。",
      whyImportant: [
        "技術用語集ではなく、事故の時系列に沿って法務・監査・経営が確認すべき質問と判断ポイントへ変換している",
        "復旧、証拠保全、漏えい判断、当局報告、公表、取締役会説明を一つのインシデント対応フローとして読める",
        "PPCの2026年9月安全管理措置見直しを最終ルールと誤認せず、1月のフォレンジック一次資料と接続して実務準備へ落としている"
      ],
      audience: ["企業法務", "情報セキュリティ・CSIRT", "内部監査", "経営企画・取締役会事務局", "プライバシー担当"],
      audienceReason: "サイバー事故の初動から報告・公表・取締役会説明まで、技術担当との共通言語と判断順序を整えるため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "個人情報", "会社法・ガバナンス"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-incident-forensics-readiness", "privacy-enforcement-breach-reporting", "privacy-enforcement-safety-management"],
      primarySourceIds: ["source-ppc-forensics-keypoints-20260116", "source-ppc-security-measures-guideline-review-2026"],
      legacyReformInference: false,
      whatChanged: "新着実務解説／ランサムウェア事故の技術・法務・報告・公表・取締役会対応を72時間の時間軸で統合し、フォレンジック準備とPPC安全管理措置見直しへ接続した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

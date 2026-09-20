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
      id: "article-nco-critical-infra-framework-20260911",
      title: "重要インフラ統一基準・安全基準等策定ガイドライン（2026年）",
      publisher: "国家サイバー統括室",
      author: "内閣官房 国家サイバー統括室",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-20",
      url: "https://www.cyber.go.jp/policy/group/infra/policy.html",
      sourceType: "primary",
      sourceLabel: "一次資料・国家サイバー統括室／重要インフラ統一基準・ガイドライン",
      status: "adopted",
      summary: "2025年改正サイバーセキュリティ基本法を受け、重要インフラ分野横断で国の施策の共通基準となる『重要インフラ統一基準』と、安全基準等を具体化するためのガイドラインをまとめた公式資料。統一基準は2026年7月31日決定、ガイドラインは9月11日策定で、いずれも10月1日施行予定。経営層・CISOを含む組織全体のリスク管理、サプライチェーン、レジリエンス、監査・演習等を重視する。",
      whyImportant: [
        "重要インフラのサイバー対策を分野ごとの自主的取組だけでなく、国の施策に関する分野横断の統一基準として再整理した制度変更の現在地を確認できる",
        "サイバーセキュリティをIT部門だけの問題ではなく、経営上の重要事項、任務保証、リスクマネジメント、復旧力として読む基礎になる",
        "2026年10月1日の施行前に、各所管分野の安全基準・監督対応へつながる共通の論点を把握できる"
      ],
      audience: ["企業法務", "情報セキュリティ担当", "重要インフラ事業者", "リスク管理・内部監査", "経営企画"],
      audienceReason: "重要インフラ分野の2026年新枠組みを、経営・法務・セキュリティ統制へ落とすため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      relatedIssues: ["cyber-critical-infra-governance", "cyber-supply-chain-resilience"],
      primarySourceIds: ["source-nco-critical-infra-framework-20260911"],
      reformEventId: "critical-infrastructure-cybersecurity-framework-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-nco-critical-infra-framework-20260911"],
      legacyReformInference: false,
      whatChanged: "新制度整理／重要インフラ統一基準と安全基準等策定ガイドラインが確定し、2026年10月1日施行予定となったため追加した。"
    },
    {
      id: "article-fsa-cyber-common-reporting-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正―サイバー攻撃報告共通様式への移行",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／サイバー攻撃報告共通様式",
      status: "adopted",
      summary: "2026年9月15日の関係省庁申合せ改正を受け、従来のDDoS攻撃・ランサムウェア共通様式に加えて『その他サイバー攻撃等事案共通様式』を整備し、金融庁の各種監督指針等におけるサイバーセキュリティ事案報告を共通様式へ移行する最終改正。銀行、保険、金融商品取引業者、資金移動業者、暗号資産交換業者等の幅広い業態で2026年10月1日から適用される。",
      whyImportant: [
        "金融機関等のサイバー事故報告が、DDoS・ランサムウェアだけでなくその他のサイバー攻撃も含む共通様式へ切り替わる具体的な施行準備事項を確認できる",
        "複数の金融業態の監督指針等が一斉に改正されるため、グループ横断で報告項目・エスカレーション・提出手順を点検する起点になる",
        "2026年10月1日という確定した適用日と、最終改正後の資料を一次情報で確認できる"
      ],
      audience: ["金融法務", "金融機関の情報セキュリティ担当", "リスク管理・コンプライアンス", "インシデント対応担当"],
      audienceReason: "サイバー事案の監督当局報告を2026年10月1日からの共通様式へ切り替えるため。",
      categories: ["金融商品取引・開示・IR", "個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      relatedIssues: ["cyber-incident-reporting-financial"],
      primarySourceIds: ["source-fsa-cyber-common-reporting-20260918"],
      reformEventId: "financial-cyber-incident-reporting-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-cyber-common-reporting-20260918"],
      legacyReformInference: false,
      whatChanged: "施行準備更新／金融庁の監督指針等がサイバー攻撃報告の共通様式へ移行し、2026年10月1日から適用されることが確定したため追加した。"
    },
    {
      id: "article-ipa-ransomware-lessons-20260908",
      title: "ランサムウェア被害から学ぶ教訓集 ～経営者のためのランサムウェア対策ハンドブック～",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "IPA セキュリティセンター",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-20",
      url: "https://www.ipa.go.jp/security/todokede/crack-virus/ransomware_lessons_learned.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／ランサムウェア被害の教訓集",
      status: "adopted",
      summary: "国内のランサムウェア被害組織へのヒアリング等を基礎に、侵入型ランサムウェアの特徴と、経営者・情報システム部門・事業部門が平時から準備すべき事項を整理したIPAのハンドブック。暗号化の発覚時点では攻撃が最終段階に達していることを前提に、迅速な経営判断、侵害調査、復旧、業務継続、バックアップ、ログ、対外説明等を具体化する。",
      whyImportant: [
        "実際の国内被害事例を基礎に、技術対策だけでなく経営判断、業務継続、復旧、広報・説明までを一つのインシデント対応として読める",
        "暗号化が見つかった時点より前に侵入・横展開・データ持出しが進んでいるという前提から、ログ、EDR、バックアップ、初動体制を点検できる",
        "法務・コンプライアンスが情シス任せにせず、証拠保全、当局・警察対応、取引先説明等を事前にプレイブック化する基礎になる"
      ],
      audience: ["企業法務", "情報セキュリティ担当", "危機管理・BCP担当", "経営企画", "内部監査"],
      audienceReason: "ランサムウェア対応を平時の準備、初動、復旧、対外説明まで横断して演習・点検するため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "基礎資料追加／国内被害事例を基礎に、ランサムウェアの経営判断・初動・復旧・対外説明を整理したIPAの最新ハンドブックを追加した。"
    },
    {
      id: "article-miyake-critical-infra-guideline-20260913",
      title: "重要インフラ・サイバーセキュリティ新ガイドライン2026～パブリックコメント結果を踏まえた「経営・法務・実務」の読み方",
      publisher: "三宅法律事務所",
      author: "弁護士法人三宅法律事務所",
      publishedAt: "2026-09-13",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E9%87%8D%E8%A6%81%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9%E3%83%BB%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／重要インフラ新ガイドライン",
      status: "adopted",
      summary: "2026年9月11日に確定した重要インフラの安全基準等策定ガイドラインを、経営・法務・実務の観点から読み解く解説。CISOの任命・権限と取締役会、クラウド・委託先・サプライチェーン、IT／OT、完全防御からレジリエンスへの転換、委託契約のサイバー条項、ランサムウェア、AI・PQC対応、取締役会・法務の確認事項まで具体化している。",
      whyImportant: [
        "163頁のガイドラインを、経営層・CISO・取締役会・法務部門が実際に決める事項へ圧縮している",
        "委託先管理をセキュリティ審査だけで終わらせず、契約条項、サプライチェーン、クラウド、IT／OTの運用へ落としている",
        "『完全防御』ではなく検知・対応・復旧を含むレジリエンスへ転換する意味を、企業のガバナンスと危機管理に接続している"
      ],
      audience: ["企業法務", "重要インフラ事業者", "情報セキュリティ担当", "取締役会事務局", "リスク管理・内部監査"],
      audienceReason: "公式ガイドラインを取締役会・CISO・委託契約・サプライチェーン管理の具体的な対応へ落とすため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      relatedIssues: ["cyber-critical-infra-governance", "cyber-supply-chain-resilience"],
      primarySourceIds: ["source-nco-critical-infra-framework-20260911"],
      reformEventId: "critical-infrastructure-cybersecurity-framework-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-nco-critical-infra-framework-20260911"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／重要インフラ新ガイドラインを、CISO・取締役会・委託契約・サプライチェーン・復旧力の実装へ落とした解説を追加した。"
    },
    {
      id: "article-miyake-ransomware-lessons-20260910",
      title: "その時、会社は動けますか？～IPA「ランサムウェア被害から学ぶ教訓集」から読み解く法務・コンプライアンス担当者のための実務対応",
      publisher: "三宅法律事務所",
      author: "弁護士法人三宅法律事務所",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E3%81%9D%E3%81%AE%E6%99%82%E3%80%81%E4%BC%9A%E7%A4%BE%E3%81%AF%E5%8B%95%E3%81%91%E3%81%BE%E3%81%99/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／ランサムウェア危機管理",
      status: "adopted",
      summary: "IPAの2026年ランサムウェア教訓集を基礎に、被害時の危機管理、個人情報保護、証拠保全、対外説明、取締役会・監査等を法務・コンプライアンスの実務へ接続する解説。情シスに警察・当局対応、取引先説明、調査、復旧が集中して復旧自体を妨げる事例も踏まえ、役割分担と経営判断を平時から設計する必要性を示す。",
      whyImportant: [
        "IPAの技術・危機管理上の教訓を、当局報告、本人・取引先通知、証拠保全、公表、取締役会報告という法務タスクへ変換している",
        "事故時に情シスへ業務を集中させるリスクを示し、法務・広報・経営・外部専門家の役割分担を平時から決める示唆がある",
        "身代金対応や『漏えい』と『漏えいのおそれ』等、対外説明で確定事実と調査中事項を分ける危機管理の視点を持てる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "情報セキュリティ担当", "危機管理・広報", "取締役会事務局"],
      audienceReason: "ランサムウェア発生時に法務・情シス・広報・経営が同時並行で動くプレイブックを設計するため。",
      categories: ["個人情報・AI・情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cybersecurity-incident-response-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／IPAのランサムウェア教訓を、証拠保全、当局・取引先対応、対外説明、取締役会判断へ落とした実務解説を追加した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

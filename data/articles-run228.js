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
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "基礎資料追加／国内被害事例を基礎に、ランサムウェアの経営判断・初動・復旧・対外説明を整理したIPAの最新ハンドブックを追加した。"
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
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／IPAのランサムウェア教訓を、証拠保全、当局・取引先対応、対外説明、取締役会判断へ落とした実務解説を追加した。"
    },
    {
      id: "article-mhm-human-rights-ma-dd-20231002",
      title: "ビジネスと人権：「人権×M&A②：M&A DDにおける人権の観点」",
      publisher: "森・濱田松本法律事務所",
      author: "御代田有恒、足立悠馬",
      publishedAt: "2023-10-02",
      collectedAt: "2026-09-20",
      url: "https://www.mhmjapan.com/content/files/00068214/CRM_SUS_COR_231002.pdf",
      sourceType: "secondary",
      sourceLabel: "実務解説・森・濱田松本／M&A DDと人権",
      status: "adopted",
      summary: "M&A DDと人権DDの目的の違いを踏まえつつ、買収対象会社の人権課題をM&Aの時間・守秘・競争上の制約の中でどう調査し、取引条件とPMIへつなぐかを整理する実務解説。対象会社の事業、製品、地域、サプライチェーンから調査範囲を絞り、開示資料・質問・インタビュー、必要に応じて第三者ヒアリングや現地調査を組み合わせ、発見事項をコベナンツ、前提条件、表明保証、案件中止、買収後の是正・人権DD統合へ反映する考え方を示す。",
      whyImportant: [
        "M&A DDが対象会社の事業リスクを把握するのに対し、人権DDはライツホルダーへの負の影響の特定・是正・救済を目的とするという差を明確にしている",
        "限られたM&A期間でも、業種・製品・地域・サプライチェーンから重大な人権リスクを絞り、資料確認、質問、インタビュー、必要に応じた第三者・現地調査へ深度を変える手順が具体的",
        "発見した人権課題を調査結果で止めず、コベナンツ、前提条件、表明保証、案件中止、PMI後の是正・人権DD統合まで取引設計へ接続している"
      ],
      audience: ["企業法務", "M&A担当", "サステナビリティ担当", "コンプライアンス担当", "経営企画"],
      audienceReason: "M&Aの限られた情報・時間の中で人権課題をどこまで調べ、契約条件やPMIへどう引き継ぐかを設計するため。",
      categories: ["M&A", "危機管理・コンプライアンス", "国際取引", "契約"],
      relatedTopics: ["business-human-rights-dd"],
      relatedIssues: ["bhr-ma-dd"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／M&A DDと人権DDの違いを踏まえ、調査範囲・手法と、発見事項を契約条件・案件判断・PMIへつなぐ実務を補強した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");
  if (topic) {
    topic.lastUpdated = "2026-09-20";
    topic.lastVerified = "2026-09-20";
  }
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
  const addition = {
    id: "article-jftc-toridoll-deduction-20260909",
    title: "株式会社トリドールホールディングスに対する勧告について",
    publisher: "公正取引委員会",
    author: "公正取引委員会",
    publishedAt: "2026-09-09",
    collectedAt: "2026-09-20",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    sourceType: "primary",
    sourceLabel: "一次資料・公取委／取適法・旧下請法の代金減額勧告",
    status: "adopted",
    summary: "トリドールホールディングスが、卸売業者を介して食品製造を委託した受注者37名について、2024年8月から2026年7月まで、委託代金から「システム利用料」の名目で例外なく一律1.1％を減額したとして、公正取引委員会が旧下請法および現行の取適法に基づき勧告した事例。2025年12月までの減額額だけで1億4741万1330円に達し、2026年1月以降の取引については減額分に加えて取適法上の遅延利息の支払も求められた。",
    whyImportant: [
      "『システム利用料』という社内・取引上の費目名で処理していても、委託代金から一律に差し引く運用が代金減額として執行対象になった具体例を確認できる",
      "2025年12月までの委託には改正前の下請法、2026年1月以降の委託には現行取適法を適用する経過関係が同一事案で明示されている",
      "減額分の返還に加え、現行取適法が適用される取引では遅延利息まで勧告対象となっており、支払明細やERP上の控除項目を自主点検する材料になる"
    ],
    audience: ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
    audienceReason: "委託代金からシステム利用料・手数料等を控除する支払運用がないかを、最新の勧告事例に照らして点検するため。",
    categories: ["契約", "危機管理・コンプライアンス"],
    relatedTopics: ["fair-subcontract-transactions"],
    relatedIssues: ["toriteki-enforcement"],
    primarySourceIds: ["source-toriteki-law-2026"],
    legacyReformInference: false,
    whatChanged: "執行事例追加／『システム利用料』名目で委託代金を一律1.1％減額した事案について、旧下請法・現行取適法をまたぐ最新の勧告事例を追加した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.ARTICLE_DATA = existing.concat(addition);
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
  const addition = {
    id: "article-jftc-oki-hitachi-atm-merger-20260918",
    title: "沖電気工業株式会社、株式会社日立製作所及び日立チャネルソリューションズ株式会社によるATM、営業店端末等の事業の統合に関する審査結果について",
    publisher: "公正取引委員会",
    author: "公正取引委員会",
    publishedAt: "2026-09-18",
    collectedAt: "2026-09-20",
    url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260918kiketsu_oh.html",
    sourceType: "primary",
    sourceLabel: "一次資料・公取委／ATM・営業店端末事業統合の企業結合審査",
    status: "adopted",
    summary: "沖電気工業、日立製作所、日立チャネルソリューションズによるATM・営業店端末等の事業統合について、公正取引委員会が水平・垂直・混合型の競争影響を審査し、当事会社が申し出た問題解消措置を前提として独占禁止法上問題ないと判断した事例。紙幣入出金モジュール等では統合後シェア100％、ATM完成品では約65％となる市場があり、情報遮断、既存取引先への供給保証、監視事業者への情報提供、監視受託者によるモニタリング等を組み合わせて競争懸念に対応した。",
    whyImportant: [
      "高い市場シェアが生じる案件でも、市場ごとの競争懸念と問題解消措置を対応付けて審査する具体例として、企業結合ガイドラインの実務上の使われ方を確認できる",
      "部品・モジュールからATM完成品、監視サービスまでの垂直関係について、供給拒絶や競争上機微な情報へのアクセスがどのように競争懸念として評価されるかが具体的",
      "供給保証等の措置を5年間継続し、監視受託者によるモニタリングと公取委への報告、4年経過時の延長協議まで設けており、行動的問題解消措置の設計・履行管理の参考になる"
    ],
    audience: ["企業法務", "M&A担当", "経営企画", "独占禁止法・競争法担当"],
    audienceReason: "企業結合案件で競争懸念が生じる場合に、供給保証、情報遮断、第三者モニタリング等の問題解消措置を案件条件・実行後運用へどう落とすかを検討するため。",
    categories: ["M&A", "独占禁止法・競争法", "契約"],
    relatedTopics: ["merger-control-antitrust"],
    relatedIssues: ["mc-substantive-review", "mc-remedies"],
    primarySourceIds: ["source-jftc-oki-hitachi-atm-merger-20260918"],
    legacyReformInference: false,
    whatChanged: "審査事例追加／ATM・営業店端末等の高シェア事業統合について、供給保証・情報遮断・第三者モニタリング等の問題解消措置を前提に問題なしとした最新の企業結合審査事例を追加した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.ARTICLE_DATA = existing.concat(addition);
})();

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
      id: "article-caa-kinpodo-funeral-price-order-20260918",
      title: "株式会社金宝堂に対する景品表示法に基づく措置命令について",
      publisher: "消費者庁",
      author: "消費者庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.caa.go.jp/notice/entry/047522/",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／景品表示法措置命令",
      status: "adopted",
      summary: "消費者庁が、貸切ホールを用いる家族葬のテレビCMについて景品表示法5条2号の有利誤認を認定した措置命令。『1日1組 貸切ホール』『お得なプランがこの価格から』『家族葬 10.45万円〜（税込）』等と表示し、当該役務が最低10万4500円で提供されるかのように示していた一方、実際には僅かな場合を除き30万8000円以上が必要だったとされた。",
      whyImportant: [
        "『○円〜』という最低価格表示を、広告で同時に訴求するサービス内容と実際の適用条件まで含めて審査すべきことが具体例で分かる",
        "低価格の別プランが存在することと、広告された役務がその価格で利用できるとの印象が適切かは別問題であることを確認できる",
        "広告審査をクリエイティブ表現だけでなく、販売・提供実績や料金条件との突合へつなげる材料になる"
      ],
      audience: ["企業法務", "広告・マーケティング担当", "消費者法・表示担当", "コンプライアンス担当"],
      audienceReason: "最低価格・入口価格を使う広告で、表示上の役務内容と実際の料金条件がずれていないかを事前審査するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: ["advertising-display-control"],
      relatedIssues: ["display-price-conditions", "display-advertiser-control"],
      primarySourceIds: ["source-caa-kinpodo-funeral-price-order-20260918"],
      legacyReformInference: false,
      whatChanged: "執行事例追加／最低価格表示と広告で訴求するサービス内容・実際の提供条件の不一致が有利誤認となった最新の措置命令を追加した。"
    },
    {
      id: "article-businesslawyers-mhm-terms-injunction-20260916",
      title: "利用規約が無効に？差止請求事例を踏まえた見直しポイント",
      publisher: "BUSINESS LAWYERS",
      author: "嶋村 直登弁護士（森・濱田松本法律事務所外国法共同事業）",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-20",
      url: "https://www.businesslawyers.jp/articles/1370",
      sourceType: "secondary",
      sourceLabel: "実務解説・森・濱田松本／利用規約と差止請求",
      status: "adopted",
      summary: "消費者契約法8条〜10条と民法の定型約款規律を踏まえ、消費者適格団体による差止請求の公表事例から利用規約の見直しポイントを整理する実務解説。免責・自己責任条項、サービス停止時の責任、専属的合意管轄、一方的な規約変更、弁護士費用等の負担、ID・パスワード盗用時の利用者責任など、EC・デジタルサービスで使われやすい条項を具体的に検討している。",
      whyImportant: [
        "一見すると合理的に見える自己責任・免責文言でも、書き方によって消費者契約法8条の問題になり得ることを差止請求事例から点検できる",
        "規約変更を『掲載した時点で直ちに有効』とする条項や専属的合意管轄など、定型約款・消費者契約法10条の双方から確認すべき条項を具体化している",
        "適格消費者団体からの差止請求は大企業だけの問題ではなく、利用規約レビューを訴訟・公表リスクまで含めた継続管理として設計する示唆がある"
      ],
      audience: ["企業法務", "EC・SaaS事業者", "プロダクト担当", "消費者法・表示担当"],
      audienceReason: "BtoC利用規約の免責、責任分配、規約変更、管轄、ID・パスワード条項を、現行法と実際の差止請求例に照らして棚卸しするため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: ["consumer-contract-law-review-2026"],
      relatedIssues: ["consumer-contract-ec-standard-terms"],
      primarySourceIds: ["source-consumer-contract-act-current", "source-civil-code-current"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／EC・デジタルサービスの利用規約について、差止請求事例から免責・一方的変更・管轄・利用者責任等の具体的な見直しポイントを追加した。"
    },
    {
      id: "article-businesslawyers-nishino-customer-harassment-line-20260915",
      title: "カスハラ対策として始めるべき「拒否すべき一線」の明確化",
      publisher: "BUSINESS LAWYERS",
      author: "西野 肇弁護士（西野経営法律事務所）",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-20",
      url: "https://www.businesslawyers.jp/practices/1499",
      sourceType: "secondary",
      sourceLabel: "実務解説・カスハラ対応基準／西野経営法律事務所",
      status: "adopted",
      summary: "2026年10月1日のカスタマーハラスメント防止措置義務化を前に、法令上の『社会通念上許容される範囲を超えたもの』という抽象基準を、各社の基本方針・対応マニュアル・エスカレーションへ落とす方法を解説する。現場の感覚任せにせず、自社で起こりやすい言動、対応打切り、担当交代、場所・時間の変更、上司・管理部門への引継ぎ等を具体化し、事例を蓄積してマニュアルを更新することを提案している。",
      whyImportant: [
        "法的定義をそのまま現場へ渡すのではなく、業態ごとの具体例と判断・エスカレーション基準へ変換する実装方法を示している",
        "基本方針、現場マニュアル、担当交代・対応打切り、警察・弁護士連携までを一つの運用として考えられる",
        "記事中の数値基準等は法定の一律基準ではなく各社が設計する運用例であるため、法律上の定義と社内基準を分けて読める"
      ],
      audience: ["人事・労務", "企業法務", "顧客対応部門", "店舗・コールセンター管理者"],
      audienceReason: "カスハラ対策を方針の掲示だけで終わらせず、現場が迷わず使える判断・打切り・エスカレーションルールへ落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment"],
      relatedIssues: ["ch-definition", "ch-response"],
      primarySourceIds: ["source-customer-harassment-guideline-2026"],
      reformEventId: "customer-harassment-obligation-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-customer-harassment-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／カスハラの抽象的な法的定義を、業態別の拒否ライン、対応打切り、担当交代、エスカレーション等の現場基準へ落とす方法を追加した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
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
      id: "article-fsa-cyber-reporting-common-forms-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／サイバー被害報告の共通様式移行",
      status: "adopted",
      summary: "金融庁が、関係省庁の『サイバー攻撃による被害が発生した場合の報告手続等に関する申合せ』の2026年9月15日改正を受け、金融分野の監督指針・事務ガイドラインに定めるシステム障害・サイバーセキュリティ事案の報告様式を共通様式へ移行する最終改正を公表した一次資料。従来のDDoS・ランサムウェア共通様式に『その他サイバー攻撃等事案共通様式』が加わり、主要行、地域金融機関、保険、金融商品取引、貸金、前払式支払手段、資金移動、暗号資産等の幅広い監督指針・事務ガイドラインへ2026年10月1日から適用される。",
      whyImportant: [
        "金融機関等のサイバー事故報告が、個別の旧様式からDDoS・ランサムウェア・その他サイバー攻撃等の3つの共通様式へ移るため、インシデント対応手順と報告票を実務上更新する必要がある",
        "銀行・保険・証券だけでなく、貸金、金融サービス仲介、前払式支払手段、資金移動、暗号資産、電子決済手段等まで対象となる監督指針・事務ガイドラインが広い",
        "共通様式化と、サイバー対処能力強化法の直接的な届出・報告義務や重要インフラ統一基準は別制度であるため、報告トリガー・提出先・金融分野固有の補足事項を混同せず整理する必要がある"
      ],
      audience: ["金融機関法務・コンプライアンス", "サイバーセキュリティ担当", "インシデント対応担当", "リスク管理", "システム・運用担当"],
      audienceReason: "2026年10月1日の適用開始までに、旧様式から共通様式への項目対応、社内エスカレーション、当局提出フロー、金融分野の補足事項を実務へ反映するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-financial-common-reporting-forms"],
      primarySourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
      reformEventId: "fsa-cyber-reporting-common-forms-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"],
      legacyReformInference: false,
      whatChanged: "監督指針更新／金融分野のサイバー被害報告について、2026年10月1日から旧様式を関係省庁の3つの共通様式へ移行する最終改正を追加した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

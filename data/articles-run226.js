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
      id: "article-ppc-apppi-subrules-369-20260916",
      title: "第369回個人情報保護委員会―2026年改正法の政令・規則の基本的な考え方（案）／安全管理措置の見直し",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-20",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260916/",
      sourceType: "primary",
      sourceLabel: "一次資料・個人情報保護委員会／改正法下位ルール検討",
      status: "adopted",
      summary: "2026年改正個人情報保護法の施行に向け、個人情報保護委員会が、契約履行等に関する本人同意例外、16歳未満の者、顔特徴データ等について政令・規則の『基本的な考え方（案）』を示した第369回委員会資料。別議題では、安全管理措置ガイドライン別添の手法例示について、クラウド利用や近年のサイバー攻撃を踏まえた追加・再整理の検討も開始した。いずれも最終ルールではなく、今後の審議・パブリックコメント等を前提とする。",
      whyImportant: [
        "公布済みの2026年改正法について、同意例外、子供、顔特徴データの細目がどの方向で具体化されるかを一次資料から追える",
        "安全管理措置ガイドラインの改訂が改正法本体とは別スケジュールで進むため、法施行対応とセキュリティ統制の更新を分けて管理できる",
        "案段階の資料を成立済みルールとして扱わず、最終規則・ガイドラインとの差分管理を始める起点になる"
      ],
      audience: ["企業法務", "個人情報保護担当", "情報セキュリティ担当", "データ・AI事業担当", "プロダクト担当"],
      audienceReason: "改正法の下位ルールが具体化する前に、影響するデータフロー、子供向けサービス、生体認証、安全管理措置を棚卸しするため。",
      categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
      relatedTopics: ["personal-information-protection-2026-amendment"],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric", "privacy-2026-security-guideline"],
      primarySourceIds: ["source-ppc-apppi-subrules-369-20260916", "source-privacy-law-2026-amendment"],
      reformEventId: "privacy-law-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment"],
      legacyReformInference: false,
      whatChanged: "施行準備の具体化／2026年改正個人情報保護法の同意例外・子供・顔特徴データに関する下位ルール案と、安全管理措置ガイドライン見直しの検討開始を追加した。"
    },
    {
      id: "article-miyake-apppi-subrules-20260918",
      title: "政令・規則の整備が「中身」の議論へ―令和8年9月16日 第369回個人情報保護委員会 公表資料の解説",
      publisher: "三宅法律事務所",
      author: "弁護士法人三宅法律事務所",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E6%94%BF%E4%BB%A4%E3%83%BB%E8%A6%8F%E5%89%87%E3%81%AE%E6%95%B4%E5%82%99%E3%81%8C%E3%80%8C%E4%B8%AD%E8%BA%AB%E3%80%8D%E3%81%AE%E8%AD%B0%E8%AB%96%E3%81%B8%E2%80%95-%E4%BB%A4%E5%92%8C%EF%BC%98%E5%B9%B4/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／個人情報保護法下位ルール",
      status: "adopted",
      summary: "第369回個人情報保護委員会の資料を、2026年改正個人情報保護法の条文と実務対応へ接続して解説するニュースレター。同意例外、16歳未満の者、顔特徴データの政令・規則案だけでなく、安全管理措置ガイドライン別添の見直しが改正法本体より先行するスケジュールで進む点を整理し、企業が先に確認すべき業務・規程・セキュリティ統制を具体化している。",
      whyImportant: [
        "一次資料の論点を、第三者提供・契約履行、子供向けサービス、顔認証、安全管理措置という企業実務の単位へ分解している",
        "政令・規則の案と、別途進む安全管理措置ガイドライン改訂を混同せず、異なる対応期限として管理する視点が得られる",
        "最終ルール前に何を棚卸しし、どこを最終化後に更新するかという施行準備の順序が分かる"
      ],
      audience: ["企業法務", "個人情報保護担当", "情報セキュリティ担当", "データ・AI事業担当"],
      audienceReason: "改正法対応プロジェクトで、下位法令待ちの事項と先行して準備できる事項を切り分けるため。",
      categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
      relatedTopics: ["personal-information-protection-2026-amendment"],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric", "privacy-2026-security-guideline"],
      primarySourceIds: ["source-ppc-apppi-subrules-369-20260916", "source-privacy-law-2026-amendment"],
      reformEventId: "privacy-law-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／改正個人情報保護法の下位ルール案と、安全管理措置ガイドライン改訂の先行スケジュールを企業の施行準備へ落とした解説を追加した。"
    },
    {
      id: "article-cfa-child-sexual-violence-qa-20260918",
      title: "こども性暴力防止法に関するQ&A（令和8年9月18日改訂）",
      publisher: "こども家庭庁",
      author: "こども家庭庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-20",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/ce13b7a9/20260918_policies_child-safety_efforts_koseibouhou_91.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・こども家庭庁／こども性暴力防止法Q&A",
      status: "adopted",
      summary: "2026年12月25日施行のこども性暴力防止法について、対象事業・対象業務、犯罪事実確認、防止措置、情報管理等を具体化する公式Q&Aの2026年9月18日改訂版。新設された基礎編7-4-2では、将来こどもと接する可能性がある総合職等について採用選考段階から性犯罪前科の有無を誓約書等で確認することは一概に不適切ではない一方、合理性・必要性と公正な採用選考を踏まえた慎重な判断と本人への説明が必要と整理した。",
      whyImportant: [
        "法施行前の採用実務で、対象業務に就くことが明らかな職種と将来可能性にとどまる総合職等を分けて扱う公式整理が追加された",
        "内定取消し・配置転換等は犯罪事実確認だけで自動的に決めず、労働関係法令と採用・就業規則の設計を接続する必要があることが分かる",
        "対象従事者、派遣、情報管理、現職者対応など、施行直前に社内手続へ落とすための具体的な確認材料になる"
      ],
      audience: ["人事・労務", "企業法務", "教育・保育事業者", "個人情報・情報管理担当", "コンプライアンス担当"],
      audienceReason: "採用・配置・犯罪事実確認・情報管理の施行準備を、最新のこども家庭庁Q&Aに沿って点検するため。",
      categories: ["労務", "個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-scope-business-role", "dbs-criminal-check-hiring", "dbs-information-management", "dbs-employment-rules-templates"],
      primarySourceIds: ["source-cfa-child-sexual-violence-qa-20260918", "source-cfa-child-sexual-violence-act-hub-20260918"],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918"],
      legacyReformInference: false,
      whatChanged: "施行準備更新／2026年9月18日改訂Q&Aで、総合職等の採用段階における性犯罪前科確認の合理性・必要性など新しい実務論点が具体化されたため追加した。"
    },
    {
      id: "article-miyake-japan-dbs-info-hiring-20260814",
      title: "「性犯罪歴はありませんでした」と答えてはならない―日本版DBS対応の情報管理・採用・漏えい対応―",
      publisher: "三宅法律事務所",
      author: "弁護士法人三宅法律事務所",
      publishedAt: "2026-08-14",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%80%8C%E6%80%A7%E7%8A%AF%E7%BD%AA%E6%AD%B4%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93%E3%81%A7%E3%81%97%E3%81%9F%E3%80%8D%E3%81%A8%E7%AD%94%E3%81%88%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／日本版DBSの情報管理・採用",
      status: "adopted",
      summary: "こども性暴力防止法について、犯罪事実確認を単独の照会手続として扱わず、対象者特定、採用・配置、防止措置、情報管理、外部照会、漏えい対応まで実務の順序で整理する解説。特に『該当なし』の確認結果も厳格な情報管理対象であり、外部照会に個別結果を答える運用が『該当あり』を推知させ得るため、結果ではなく体制を説明する運用を提案している。",
      whyImportant: [
        "犯罪事実確認結果の閲覧者、記録、内部共有、外部照会、漏えい対応を一つの情報管理フローとして設計する具体像が得られる",
        "犯罪歴照会だけに偏らず、初犯防止、早期把握、相談、調査・保護、研修まで制度全体を実装する必要性を明確にしている",
        "公式ひな型・情報管理方針を、実際の採用・人事・外部説明の場面へどう落とすかが具体的で、一次資料の薄い要約にとどまらない"
      ],
      audience: ["人事・労務", "企業法務", "教育・保育事業者", "個人情報・情報管理担当", "危機管理担当"],
      audienceReason: "日本版DBS対応を、照会申請だけでなく採用・配置・情報管理・漏えい対応まで一連の社内フローとして実装するため。",
      categories: ["労務", "個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-criminal-check-hiring", "dbs-information-management", "dbs-prevention-response", "dbs-employment-rules-templates"],
      primarySourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918", "source-cfa-child-sexual-violence-qa-20260918", "source-cfa-child-sexual-violence-templates-20260902"],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／日本版DBSの犯罪事実確認結果を『該当なし』も含めて厳格管理し、採用・配置・外部照会・漏えい対応までつなぐ実務設計を追加した。"
    },
    {
      id: "article-tmi-child-sexual-violence-scope-20260710",
      title: "［連載］こども性暴力防止法 基礎解説（第3回）―適用対象（対象事業・対象業務）―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮弁護士・社会保険労務士",
      publishedAt: "2026-07-10",
      collectedAt: "2026-09-20",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18558.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／こども性暴力防止法の対象範囲",
      status: "adopted",
      summary: "こども性暴力防止法の対象事業者・対象業務従事者を、学校設置者等の義務対象と認定を受ける民間教育保育等事業者に分け、支配性・継続性・閉鎖性という考え方から解説する実務記事。職種名・雇用形態だけで判断せず、児童等との実際の接点や業務類型から対象範囲を切り分けるための整理が詳しい。",
      whyImportant: [
        "誰を対象従事者リストへ載せるかという施行準備の最初の判断を、事業類型と業務実態に分けて考えられる",
        "義務事業者と認定事業者等の制度差を押さえ、任意認定の民間事業まで一律の法定義務として扱う誤解を防げる",
        "支配性・継続性・閉鎖性を、派遣・委託・兼務・短時間業務を含む実際の職務分析へ落とす材料になる"
      ],
      audience: ["人事・労務", "企業法務", "教育・保育事業者", "事業企画・運営担当"],
      audienceReason: "自社のどの事業・職種・担当者が制度上の対象になるかを、施行前に業務単位で棚卸しするため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-scope-business-role"],
      primarySourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918", "source-cfa-child-sexual-violence-qa-20260918"],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-hub-20260918"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／こども性暴力防止法の義務事業者・認定事業者と対象業務を、支配性・継続性・閉鎖性から切り分ける実務整理を追加した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

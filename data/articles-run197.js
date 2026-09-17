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

  const paymentTopic = "payment-services-cross-border-collection-2026";
  const paymentEvent = "payment-services-act-cross-border-collection-2026";
  const paymentFinal = "source-fsa-payment-services-amendment-final-20260522";
  const paymentLaw = "source-shugiin-payment-services-law66-20250613";
  const cryptoTopic = "crypto-financial-instruments-reform-2026";
  const cryptoEvent = "fiea-2026-crypto-reform";
  const cryptoOverview = "source-fsa-fiea-payment-amendment-overview-20260715";
  const cryptoLaw = "source-fsa-fiea-payment-amendment-law-20260723";
  const cryptoEarly = "source-fsa-fiea-20day-effective-20260729";

  const additions = [
    {
      id: "article-fsa-payment-services-amendment-final-20260522",
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-05-22",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／最終政省令・パブコメ結果",
      status: "adopted",
      summary: "2025年資金決済法改正の最終的な政令・内閣府令・告示・事務ガイドラインを公表し、クロスボーダー収納代行の適用除外、資金移動業の新たな資産保全、第一種資金移動業の滞留規制緩和等と、2026年6月1日の主要規定施行を示す一次資料。",
      whyImportant: [
        "法案・パブコメ段階ではなく、施行される下位法令と金融庁の考え方を最終版で確認できる",
        "クロスボーダー収納代行の適用除外と資金移動業の制度変更を同じ改正の中で把握できる",
        "2026年6月1日という確定施行日を基準に、既存事業者の登録・経過措置対応を管理できる"
      ],
      audience: ["決済・FinTech事業者の法務", "越境EC・プラットフォーム事業者", "金融規制・コンプライアンス担当"],
      audienceReason: "自社の資金フローが為替取引規制に入るか、適用除外や登録対応が必要かを最終ルールで確認するため。",
      categories: ["契約", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [paymentTopic],
      relatedIssues: [
        "payment-services-2026-cross-border-definition",
        "payment-services-2026-cross-border-exemptions",
        "payment-services-2026-safeguarding-retention"
      ],
      primarySourceIds: [paymentFinal, paymentLaw],
      reformEventId: paymentEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [paymentFinal],
      legacyReformInference: false,
      whatChanged: "資金決済法2025年改正のクロスボーダー収納代行・資金移動業を新テーマ化し、最終下位法令と2026年6月1日施行を確定情報として整理した。"
    },
    {
      id: "article-tmi-cross-border-collection-20260827",
      title: "クロスボーダー収納代行に係る規制内容の解説",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18745.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／クロスボーダー収納代行",
      status: "adopted",
      summary: "2026年6月施行後のクロスボーダー収納代行規制を、資金決済法2条の2の要件、府令上の適用除外、除外から外れる利用者保護上高リスクな行為までフロー化して解説する。越境EC・プラットフォーム等の具体的な事業モデルへ当てはめやすい。",
      whyImportant: [
        "条文上の抽象的な『クロスボーダー収納代行』を受取人・債務者・資金受入れ・引渡し・越境性の要件へ分解している",
        "銀行等への再委託、エスクロー、取引プラットフォーム、グループ会社等の適用除外を具体例付きで整理している",
        "適用除外に形式的に該当しても利用者保護上の高リスク行為なら規制対象となる点を実務フローとして確認できる"
      ],
      audience: ["企業法務", "越境EC・マーケットプレイス担当", "決済・FinTech事業担当", "コンプライアンス"],
      audienceReason: "自社スキームを条文・府令の要件へ分解し、登録要否と契約・運用上の修正点を判定するため。",
      categories: ["契約", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [paymentTopic],
      relatedIssues: ["payment-services-2026-cross-border-definition", "payment-services-2026-cross-border-exemptions"],
      primarySourceIds: [paymentFinal, paymentLaw],
      reformEventId: paymentEvent,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [paymentFinal],
      legacyReformInference: false,
      whatChanged: "新テーマに、最終ルール施行後の適用除外・高リスク類型を事業モデルへ当てはめる実務解説を追加した。"
    },
    {
      id: "article-nishimura-cross-border-collection-20260717",
      title: "クロスボーダー収納代行に関する規制の見直しの概要",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "谷澤進・津島友洋",
      publishedAt: "2026-07-17",
      collectedAt: "2026-09-17",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/finance_law_260717",
      sourceType: "secondary",
      sourceLabel: "実務解説・西村あさひ／クロスボーダー収納代行",
      status: "adopted",
      summary: "従来は銀行業・資金移動業の登録が不要と整理される場面があったクロスボーダー収納代行について、2026年6月施行後にどの行為が為替取引となり、許認可検討が必要になるかを金融規制実務の観点から整理する。",
      whyImportant: [
        "改正前後の差分を『従来登録不要だった取引が為替取引となる』という事業者目線で示している",
        "国際金融法務・FinTechの観点から越境取引の規制影響を整理しており、一次資料の制度説明を補完する",
        "既存ビジネスの登録要否・経過措置を検討する入口として使いやすい"
      ],
      audience: ["金融・FinTech企業法務", "越境決済・EC事業担当", "コンプライアンス担当"],
      audienceReason: "改正前の整理に依拠した既存ビジネスを新規制へ移行させる際の差分を把握するため。",
      categories: ["契約", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: [paymentTopic],
      relatedIssues: ["payment-services-2026-cross-border-definition", "payment-services-2026-transition-registration"],
      primarySourceIds: [paymentFinal, paymentLaw],
      reformEventId: paymentEvent,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [paymentFinal],
      legacyReformInference: false,
      whatChanged: "新テーマに、改正前後の差分と既存事業者の許認可検討を整理する実務解説を追加した。"
    },
    {
      id: "article-fsa-fiea-payment-amendment-20260715",
      title: "金融商品取引法及び資金決済に関する法律の一部を改正する法律",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-07-15",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/common/diet/",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／2026年改正法",
      status: "adopted",
      summary: "2026年7月15日に成立した改正法について、暗号資産、サステナビリティ情報の開示・保証、スタートアップへの資金供給、不公正取引規制等の制度整備を示す金融庁の法案・成立法ページ。暗号資産規制の金商法移管を含む改正の公式な基準点となる。",
      whyImportant: [
        "暗号資産規制見直しが成立済みであることと、改正法全体の射程を一次資料で確認できる",
        "公布法令本文・説明資料・新旧対照条文への公式導線がまとまっている",
        "暗号資産だけでなく同じ改正法に含まれる他制度との混同を避けて、暗号資産部分を切り出して追える"
      ],
      audience: ["暗号資産・FinTech事業者の法務", "金融規制・コンプライアンス担当", "投資運用・助言事業者"],
      audienceReason: "成立済みの改正法を基準に、下位法令待ちの論点と既に確定した制度変更を切り分けるため。",
      categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
      relatedTopics: [cryptoTopic],
      relatedIssues: [
        "crypto-2026-fiea-transfer",
        "crypto-2026-disclosure-regime",
        "crypto-2026-business-scope-system-provider",
        "crypto-2026-insider-unfair-trading",
        "crypto-2026-transition-measures"
      ],
      primarySourceIds: [cryptoOverview, cryptoLaw],
      reformEventId: cryptoEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cryptoLaw],
      legacyReformInference: false,
      whatChanged: "暗号資産規制の金商法移管等を新テーマ化し、2026年7月成立・公布の改正法を基準資料として追加した。"
    },
    {
      id: "article-fsa-fiea-20day-effective-20260729",
      title: "令和8年金融商品取引法等改正（20日後施行）に係る政令の公布について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-07-29",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260729/20260729.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／先行施行",
      status: "adopted",
      summary: "2026年改正法のうち、無登録業に対する罰則引上げと証券取引等監視委員会の犯則調査権限追加に係る規定が2026年8月12日に先行施行されることを示す。暗号資産規制本体の施行待ちと区別するための資料。",
      whyImportant: [
        "同じ改正法の中で既に施行済みの部分と施行待ちの暗号資産規制本体を明確に分けられる",
        "無登録業・エンフォースメントの強化が先行して効力を持っていることを一次資料で確認できる",
        "法改正情報の段階ラベルを『全部未施行』『全部施行済み』のどちらにも誤らせない"
      ],
      audience: ["金融規制・コンプライアンス担当", "暗号資産・FinTech事業者", "金融商品取引業者"],
      audienceReason: "段階施行を正確に管理し、既に適用されるエンフォースメント規定と今後の本体施行を区別するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: [cryptoTopic],
      relatedIssues: ["crypto-2026-early-enforcement", "crypto-2026-transition-measures"],
      primarySourceIds: [cryptoLaw, cryptoEarly],
      reformEventId: cryptoEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cryptoLaw, cryptoEarly],
      legacyReformInference: false,
      whatChanged: "2026年改正法の段階施行を明示し、8月12日先行施行部分と暗号資産規制本体の施行待ちを分離した。"
    },
    {
      id: "article-businesslawyers-noandt-crypto-reform-20260828",
      title: "2027年施行 暗号資産に関する金商法・資金決済法改正の概要",
      publisher: "BUSINESS LAWYERS",
      author: "殿村桂司・高見柊・小泉遼平（長島・大野・常松法律事務所）",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-17",
      url: "https://www.businesslawyers.jp/articles/1568",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／BUSINESS LAWYERS・暗号資産規制",
      status: "adopted",
      summary: "2026年改正による暗号資産規制を、資金決済法から金商法への移管、情報公表、業規制、重要システム提供者、インサイダー・不公正取引、経過措置まで横断的に整理し、既存事業者・新規規制対象者の対応スケジュールを具体化する解説。",
      whyImportant: [
        "単なる『金商法移管』にとどまらず、発行者情報公表、投資運用・助言、レンディング、システム提供者まで新たな規制対象を整理している",
        "既存登録業者や新規に規制対象となる事業者の届出・登録申請・業務継続の経過措置を具体的に示している",
        "内閣府令等に委ねられた未確定事項を明示し、成立済みルールと今後の具体化を区別している"
      ],
      audience: ["暗号資産・Web3企業法務", "金融規制・コンプライアンス担当", "投資運用・助言事業者", "システム・ウォレット提供事業者"],
      audienceReason: "改正法の条文を自社の業態・情報管理・委託先・移行手続へ落とし、下位法令待ちの論点を切り分けるため。",
      categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
      relatedTopics: [cryptoTopic],
      relatedIssues: [
        "crypto-2026-fiea-transfer",
        "crypto-2026-disclosure-regime",
        "crypto-2026-business-scope-system-provider",
        "crypto-2026-insider-unfair-trading",
        "crypto-2026-transition-measures"
      ],
      primarySourceIds: [cryptoOverview, cryptoLaw, cryptoEarly],
      reformEventId: cryptoEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cryptoLaw],
      legacyReformInference: false,
      whatChanged: "新テーマに、暗号資産規制の移管・情報公表・業規制・インサイダー規制・経過措置を企業実務へ横断的に落とす解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

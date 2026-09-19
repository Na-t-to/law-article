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
      id: "article-meti-early-business-restructuring-qa-20260630",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-06-30",
      collectedAt: "2026-09-19",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      sourceType: "primary",
      sourceLabel: "一次資料・早期事業再生法／施行規則・Q&A",
      status: "adopted",
      summary: "2026年12月11日施行予定の早期事業再生法について、施行規則と資産評定基準を公布し、制度解釈を示すQ&Aを公表した経産省の公式資料。金融機関等・貸付債権等の範囲、指定確認調査機関による確認・調査、一時停止、労働組合等への通知、確認事業者の特例等が具体化された。",
      whyImportant: ["早期事業再生法の施行日が2026年12月11日であることを公式に確認できる", "法律だけでは分からない対象債権、一時停止、確認・調査、資産評定等の運用を施行規則・Q&Aで具体化している", "債務者・金融機関・リース事業者等が施行前に社内手続と契約運用を整えるための基準資料になる"],
      audience: ["企業法務", "事業再生担当", "財務・経営企画", "金融機関法務", "リース・与信管理担当"],
      audienceReason: "2026年12月11日の施行に向け、制度対象・手続・一時停止・資産評定等の公式ルールを確認するため。",
      categories: ["契約・取引", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: ["early-business-restructuring-act"],
      relatedIssues: ["early-restructuring-eligibility", "early-restructuring-target-claims", "early-restructuring-majority-court", "early-restructuring-standstill", "early-restructuring-predip-migration"],
      primarySourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEventId: "early-business-restructuring-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEffectiveDates: ["2026-12-11"],
      reformEffectiveDateSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／早期事業再生法について、2026年12月11日の施行日と施行規則・資産評定基準・Q&Aによる制度具体化を追加した。"
    },
    {
      id: "article-businesslawyers-mhm-early-business-restructuring-20260917",
      title: "早期事業再生法の概要とポイント",
      publisher: "BUSINESS LAWYERS",
      author: "山口みどり（森・濱田松本法律事務所外国法共同事業）",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-19",
      url: "https://www.businesslawyers.jp/articles/1484",
      sourceType: "secondary",
      sourceLabel: "実務解説・森・濱田松本／早期事業再生法",
      status: "adopted",
      summary: "早期事業再生法を、法的整理・私的整理との違い、利用対象、対象債権、確認、一時停止、対象債権者集会、裁判所認可、私的整理・法的整理への移行まで通して解説する。『経済的に窮境に陥るおそれ』の例示、金融機関等・貸付債権等の具体範囲、担保付債権の保全部分と非保全部分など、制度選択と準備に必要な実務上の境界が厚い。",
      whyImportant: ["対象事業者・対象債権を法令とQ&Aに沿って具体化し、どの案件で制度利用を検討できるか判断しやすい", "ファイナンス・リースや担保付債権など、一覧作成や権利変更範囲で誤りやすい論点を実務目線で整理している", "私的整理からの移行や法的整理との比較まで扱い、単なる制度要約を超えて手続選択へつなげられる"],
      audience: ["企業法務", "事業再生担当", "財務・経営企画", "金融機関法務", "再生アドバイザー"],
      audienceReason: "制度利用の入口から認可・移行までの全体像と、対象債権・担保・利用要件の実務上の境界を把握するため。",
      categories: ["契約・取引", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: ["early-business-restructuring-act"],
      relatedIssues: ["early-restructuring-eligibility", "early-restructuring-target-claims", "early-restructuring-majority-court", "early-restructuring-standstill", "early-restructuring-predip-migration"],
      primarySourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEventId: "early-business-restructuring-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEffectiveDates: ["2026-12-11"],
      reformEffectiveDateSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／利用対象、対象債権、担保付債権、確認・一時停止・認可・他手続への移行を一連の制度運用として整理した。"
    },
    {
      id: "article-noandt-early-business-restructuring-20260911",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐／髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／早期事業再生手続",
      status: "adopted",
      summary: "対象債権者・対象債権、一時停止、プレDIP、既存私的整理からの移行を、債務者だけでなく金融機関・リース債権者等の対応として具体化する実務解説。特に、一時停止要請は原則として『支払の停止』に当たらず、当然の期限の利益喪失や預金拘束へ直結させないというQ&Aの整理、担保付債権の非保全部分のみが多数決による権利変更対象となる点、プレDIPの後続法的整理での扱いが有用。",
      whyImportant: ["債権者側の回収・相殺・担保・失期・口座管理を一時停止要請へどう対応させるかを具体化している", "ファイナンス・リースや担保付債権について、手続対象と権利変更対象を分けて整理できる", "プレDIPと私的整理からの移行を扱い、施行後の資金繰り・手続選択に直接使える"],
      audience: ["金融機関法務", "リース・与信管理担当", "企業法務", "事業再生担当", "財務・経営企画"],
      audienceReason: "一時停止を受ける側の初動、対象債権管理、プレDIP、私的整理からの移行を施行前に業務へ落とすため。",
      categories: ["契約・取引", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: ["early-business-restructuring-act"],
      relatedIssues: ["early-restructuring-target-claims", "early-restructuring-standstill", "early-restructuring-predip-migration"],
      primarySourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEventId: "early-business-restructuring-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      reformEffectiveDates: ["2026-12-11"],
      reformEffectiveDateSourceIds: ["source-egov-early-business-restructuring-act", "source-meti-early-restructuring-rules-qa-20260630"],
      legacyReformInference: false,
      whatChanged: "債権者実務を補強／一時停止時の失期・預金拘束、担保付債権、プレDIP、既存私的整理からの移行を実務運用として追加した。"
    },
    {
      id: "article-caa-digital-transactions-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-19",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/",
      sourceType: "primary",
      sourceLabel: "一次資料・デジタル取引／特定商取引法等見直し",
      status: "adopted",
      summary: "インターネット取引の変化を踏まえ、SNS等の双方向メッセージによる不意打ち性の高い勧誘に電話勧誘販売に近い規律を設け、8日間のクーリング・オフ等を認める方向を示す。オンライン広告・UIではダークパターンへの一定程度包括的な規律、契約締結・解約場面の表示や導線の適正化などを検討する中間取りまとめ。いずれも提案段階であり成立済みルールではない。",
      whyImportant: ["SNS・チャット・メール等を用いた個別勧誘が従来の通信販売規制から独立した勧誘規制へ移る可能性を具体的に示している", "8日間のクーリング・オフや再勧誘規制など、販売フローへ大きく影響し得る提案を一次資料で確認できる", "ダークパターンをUI・表示設計の問題として制度化する方向が示され、法務とプロダクト設計の接点が明確になった"],
      audience: ["消費者法務", "EC・デジタルサービス法務", "プロダクト・UX担当", "マーケティング・営業", "企業法務"],
      audienceReason: "チャット販売、EC表示、UI、契約・解約導線が将来の特商法等見直しでどう規律され得るかを把握するため。",
      categories: ["消費者法・表示", "契約・取引", "電子契約"],
      relatedTopics: ["consumer-law-digital-contract-review"],
      relatedIssues: ["consumer-review-chat-solicitation", "consumer-review-dark-patterns"],
      primarySourceIds: ["source-caa-digital-transactions-interim-20260910"],
      reformEventId: "specified-commercial-transactions-digital-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-digital-transactions-interim-20260910"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／チャット等の不意打ち勧誘、8日間のクーリング・オフ、ダークパターン等について、特定商取引法等の見直し案を提案段階として追加した。"
    },
    {
      id: "article-caa-consumer-contract-interim-20260910",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-19",
      url: "https://www.caa.go.jp/notice/entry/047482/",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者契約法見直し／中間取りまとめ",
      status: "adopted",
      summary: "消費者の多様な脆弱性への配慮を促進する仕組みと、サブスクリプション等の継続的な消費者契約に関する一般的規律を提案する中間取りまとめ。継続契約では解約妨害の禁止、合理的な離脱方法、解約条件の情報提供、更新時の事前通知、重要な契約変更時の事前通知等が示され、解約妨害禁止と変更通知義務について差止請求制度との接続も提案されている。現時点では制度見直しの提案段階。",
      whyImportant: ["サブスク等の解約導線を個別業法ではなく消費者契約法の一般規律として扱う方向を確認できる", "解約妨害の禁止と、契約締結方法と比較した合理的な離脱方法の確保というプロダクト運用上の論点が明確になっている", "料金・解約条件等の重要変更時の事前通知を検討しており、約款変更と顧客通知の実務へ直接影響し得る"],
      audience: ["消費者法務", "サブスクリプション事業担当", "EC・デジタルサービス法務", "プロダクト・UX担当", "企業法務"],
      audienceReason: "継続契約の解約・更新・変更と、消費者の脆弱性への配慮が将来どのような一般ルールになり得るかを把握するため。",
      categories: ["消費者法・表示", "契約・取引", "電子契約"],
      relatedTopics: ["consumer-law-digital-contract-review"],
      relatedIssues: ["consumer-review-subscription-cancellation", "consumer-review-contract-change-notice", "consumer-review-vulnerability-principle"],
      primarySourceIds: ["source-caa-consumer-contract-interim-20260910"],
      reformEventId: "consumer-contract-act-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-consumer-contract-interim-20260910"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／解約妨害、合理的な離脱、更新・重要変更時の通知、多様な脆弱性への配慮を消費者契約法の見直し案として追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

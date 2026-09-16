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
      id: "article-cyber-capability-act-2025",
      title: "重要電子計算機に対する不正な行為による被害の防止に関する法律（サイバー対処能力強化法）",
      publisher: "e-Gov法令検索",
      author: "内閣府",
      publishedAt: "2025-05-23",
      collectedAt: "2026-09-17",
      url: "https://laws.e-gov.go.jp/law/507AC0000000042",
      sourceType: "primary",
      sourceLabel: "一次資料・サイバー対処能力強化法／制定法",
      status: "adopted",
      summary: "2025年5月に公布されたサイバー対処能力強化法。官民連携、通信情報の利用、アクセス・無害化等を制度化し、企業実務では特別社会基盤事業者に対する特定重要電子計算機の届出・特定侵害事象等の報告、政府との情報共有、ITベンダー等への脆弱性対応要請などが重要となる。2026年10月1日から始まる届出・報告制度は、施行令・関係府省令・9月15日告示と合わせて読む必要がある。",
      whyImportant: [
        "能動的サイバー防御をめぐる議論を、民間企業に直接関係する届出・報告・情報共有・ベンダー対応の法的根拠から確認できる",
        "経済安全保障推進法の基幹インフラ制度と重なる対象について、事前審査とは別にサイバー侵害時の届出・報告制度が加わる",
        "アクセス・無害化を民間企業のハックバック権限と誤解せず、政府権限と民間の協力義務を切り分ける基礎になる"
      ],
      audience: ["企業法務", "情報セキュリティ", "危機管理・コンプライアンス", "基幹インフラ事業者", "IT・クラウド事業者"],
      audienceReason: "2026年10月施行の企業向け制度を、下位法令・告示・委託契約対応まで一貫して整理するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      relatedIssues: ["cyber-capability-operator-scope", "cyber-capability-asset-reporting", "cyber-capability-vendor-contract", "cyber-capability-private-hackback"],
      primarySourceIds: ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"],
      reformEventId: "cyber-capability-critical-infrastructure-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cyber-capability-act-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／サイバー対処能力強化法の企業向け論点を、特別社会基盤事業者の届出・報告、ベンダー対応、政府のアクセス・無害化権限に分けて新しいテーマの骨格にした。"
    },
    {
      id: "article-cyber-reporting-notices-2026-09-15",
      title: "サイバー対処能力強化法の届出除外対象・特定侵害事象等の報告様式を定める2026年9月15日告示",
      publisher: "財務省ほか関係府省",
      author: "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-17",
      url: "https://www.mof.go.jp/about_mof/act/kokuji_tsuutatsu/kokuji/kokuji_r08.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年9月15日告示／届出除外・報告様式",
      status: "adopted",
      summary: "2026年10月1日の制度開始を前に、関係府省が告示2本を公布した。告示第1号は関係府省令2条1項ただし書の指定対象としてMicrosoft WindowsとWindows Serverを定め、告示第2号は特定侵害事象等の報告についてDDoS、ランサムウェア、その他の事象ごとに関係省庁の共通報告様式を指定した。両告示は法の施行日である2026年10月1日から施行される。",
      whyImportant: [
        "施行2週間前に、資産届出で扱う除外対象とインシデント報告様式という実装上の未確定部分が確定した",
        "DDoS・ランサムウェア等の既存共通様式へ接続されたため、社内CSIRTの報告フローと法定報告の入力項目を具体的に突合できる",
        "Windows等の指定を『当該システムは法の対象外』と広く読み過ぎないよう、届出と報告の判定を分ける必要がある"
      ],
      audience: ["基幹インフラ事業者", "企業法務", "情報セキュリティ", "CSIRT", "IT資産管理"],
      audienceReason: "2026年10月1日までに資産台帳・届出・報告様式・連絡体制を最終化するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      relatedIssues: ["cyber-capability-asset-reporting"],
      primarySourceIds: ["source-cyber-reporting-order-2026", "source-cyber-reporting-exclusion-notice-2026", "source-cyber-report-form-notice-2026"],
      reformEventId: "cyber-capability-critical-infrastructure-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cyber-reporting-exclusion-notice-2026", "source-cyber-report-form-notice-2026"],
      legacyReformInference: false,
      whatChanged: "施行準備具体化／2026年10月1日の届出・報告制度について、届出除外対象とDDoS・ランサムウェア等の報告様式が9月15日告示で確定した。"
    },
    {
      id: "article-ipa-vulnerability-partnership-draft-2026",
      title: "情報セキュリティ早期警戒パートナーシップガイドライン改訂案などの公開",
      publisher: "独立行政法人情報処理推進機構",
      author: "IPA セキュリティセンター",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-17",
      url: "https://www.ipa.go.jp/security/reports/vuln/kenkyukai-report2026.html",
      sourceType: "primary",
      sourceLabel: "一次資料・脆弱性情報取扱い／早期警戒パートナーシップ改訂案",
      status: "adopted",
      summary: "IPAが、サイバー対処能力強化法の施行に伴う脆弱性情報連携を反映するため、情報セキュリティ早期警戒パートナーシップガイドラインの改訂案を公表した。内閣府からIPA・JPCERT/CCへの法に基づく要請や、総務省からNICTへの同様の通知を前提に、IPAから内閣府への通知、JPCERT/CCとの協力、NICTとの連携を新たに記載する。意見募集は2026年9月24日までで、現時点では成案前。",
      whyImportant: [
        "サイバー対処能力強化法が既存の脆弱性届出・調整制度へどう接続されるかを具体的な情報フローで確認できる",
        "ソフトウェア・ITベンダーにとって、脆弱性情報がIPA・JPCERT/CCを経由して政府へ連携される経路を理解する材料になる",
        "告示新設ではなく法に基づく要請と既存ガイドライン改訂で対応する方針が示され、制度実装の形が変わった"
      ],
      audience: ["IT・ソフトウェア事業者", "企業法務", "情報セキュリティ", "PSIRT", "脆弱性対応担当"],
      audienceReason: "脆弱性発見・届出・調整・政府連携のフローを施行前に確認し、PSIRT等の運用を見直すため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      relatedIssues: ["cyber-capability-vulnerability-coordination"],
      primarySourceIds: ["source-ipa-vulnerability-partnership-draft-2026", "source-cyber-capability-act-2025"],
      legacyReformInference: false,
      whatChanged: "実装案具体化／サイバー対処能力強化法に基づく政府要請を、IPA・JPCERT/CC・NICTの既存の脆弱性情報連携へ組み込む改訂案が示された。現時点では案段階。"
    },
    {
      id: "article-businesslawyers-mhm-active-cyber-defense-2025",
      title: "能動的サイバー防御関連法の概要と民間企業への影響　一般企業、基幹インフラ事業者、電気通信事業者、ITベンダー",
      publisher: "BUSINESS LAWYERS",
      author: "蔦 大輔・嶋村 直登・𠮷澤 法之（森・濱田松本法律事務所外国法共同事業）",
      publishedAt: "2025-05-27",
      collectedAt: "2026-09-17",
      url: "https://www.businesslawyers.jp/articles/1465",
      sourceType: "secondary",
      sourceLabel: "実務解説・森・濱田松本／サイバー対処能力強化法",
      status: "adopted",
      summary: "成立直後のサイバー対処能力強化法を、①官民連携、②通信情報の利用、③アクセス・無害化、④組織・体制整備に分け、民間企業への直接・間接影響を整理した実務解説。特別社会基盤事業者だけでなく、基幹システムの開発・保守運用事業者、電気通信事業者、ITベンダーまで影響主体を分け、経済安全保障推進法との届出の違いや、ベンダーへの脆弱性対応要請・報告協力まで説明する。",
      whyImportant: [
        "『基幹インフラ事業者だけの法律』と捉えず、システム関連事業者・通信事業者・ITベンダーへの波及を主体別に整理できる",
        "経済安全保障推進法の事前審査と新法の事後的な届出・インシデント報告を比較しており、既存コンプライアンスとの統合を考えやすい",
        "成立直後の記事のため下位法令の詳細は後続一次資料で更新が必要だが、制度全体の構造と企業別の影響を読む価値が高い"
      ],
      audience: ["企業法務", "基幹インフラ事業者", "IT・クラウド事業者", "電気通信事業者", "情報セキュリティ"],
      audienceReason: "自社が直接の義務者か、顧客・製品・通信・委託を通じた波及先かを切り分けるため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      relatedIssues: ["cyber-capability-operator-scope", "cyber-capability-vendor-contract", "cyber-capability-private-hackback"],
      primarySourceIds: ["source-cyber-capability-act-2025"],
      reformEventId: "cyber-capability-critical-infrastructure-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cyber-capability-act-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／直接義務者だけでなく、基幹システム関連事業者・電気通信事業者・ITベンダーまで主体別に影響を分解し、テーマの射程を企業実務へ広げた。"
    },
    {
      id: "article-miyake-cyber-capability-practice-2026",
      title: "2026年10月1日施行サイバー対処能力強化法―『自社は対象か』から始める、上場会社の届出・報告・契約実務―",
      publisher: "三宅法律事務所",
      author: "三宅法律事務所",
      publishedAt: "2026-08-17",
      collectedAt: "2026-09-17",
      url: "https://www.miyake.gr.jp/notice/2026%E5%B9%B410%E6%9C%881%E6%97%A5%E6%96%BD%E8%A1%8C%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC%E5%AF%BE%E5%87%A6%E8%83%BD%E5%8A%9B%E5%BC%B7%E5%8C%96%E6%B3%95%E2%80%95-%E3%80%8C%E8%87%AA%E7%A4%BE%E3%81%AF/",
      sourceType: "secondary",
      sourceLabel: "実務解説・サイバー対処能力強化法／届出・報告・契約",
      status: "adopted",
      summary: "2026年10月施行を前提に、対象事業者の判定、特定重要電子計算機の資産台帳、届出・報告、クラウド・委託先との契約、取締役会・監査までを実務フローとして整理した解説。特に、指定子会社があっても親会社が自動的に義務者になるわけではないこと、クラウド事業者等が先に異常を検知し得る場合には通知期限・24時間連絡先・ログ・証跡提供を契約で具体化すべきこと、アクセス・無害化は政府の権限で民間のハックバックではないことを具体例で示す。",
      whyImportant: [
        "法令の要約ではなく、対象判定→資産台帳→報告フロー→委託契約→ガバナンスの順で施行準備へ落とし込んでいる",
        "クラウド・SIer・SOC等との契約で、事故通知の速度と法定報告をつなぐ具体的な不足項目を洗い出せる",
        "8月時点で未確定だった報告様式・届出除外対象は9月15日告示で確定したため、この記事を最新一次資料と組み合わせて読む価値が高い"
      ],
      audience: ["企業法務", "基幹インフラ事業者", "情報セキュリティ", "CSIRT", "調達・委託先管理", "取締役会・監査"],
      audienceReason: "施行直前の対応事項を、法律論だけでなく契約・資産管理・事故対応・経営監督へ落とすため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["cyber-capability-enhancement-critical-infrastructure-2026"],
      relatedIssues: ["cyber-capability-operator-scope", "cyber-capability-asset-reporting", "cyber-capability-vendor-contract", "cyber-capability-private-hackback"],
      primarySourceIds: ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"],
      reformEventId: "cyber-capability-critical-infrastructure-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cyber-capability-act-2025", "source-cyber-reporting-order-2026"],
      legacyReformInference: false,
      whatChanged: "バックフィル／施行準備を対象判定、資産台帳、当局報告、委託先通知・ログ提供、取締役会・監査まで一連の運用として具体化した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-sesc-monitoring-policy-20260731",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券監視委／2026事務年度の重点検証事項",
      status: "adopted",
      summary: "2026年7月から2027年6月までの金融商品取引業者等に対する証券モニタリング方針。業態横断では顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を掲げ、規模・業態別には引受審査、ネット取引の不正アクセス、業容変化・新商品審査、利益相反管理等を重点検証事項として示す。",
      whyImportant: [
        "金商業者等が2026事務年度に当局から重点的に検証される領域を一次資料で俯瞰できる",
        "複雑・高リスク商品の対象顧客設定やデジタル・リテラシーに応じた説明など、販売管理の具体的な着眼点が示されている",
        "主要株主・経営体制の変更、オンライン化、新商品・新サービス等の業容変化を内部管理態勢の実効性と結び付けて確認できる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "リスク管理", "経営企画", "システム・サイバーセキュリティ担当"],
      audienceReason: "年度の当局着眼点を自社のコンプライアンス・内部監査・リスク管理計画へ反映するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-cross-industry-priorities-2026", "secm-business-change-product-governance-2026", "secm-cyber-aml-2026", "secm-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-monitoring-policy-20260731"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／令和8事務年度の証券モニタリング重点を、業態横断・規模業態別の内部管理論点として整理した。"
    },
    {
      id: "article-sesc-monitoring-casebook-20260731",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券監視委／検査・モニタリング事例集",
      status: "adopted",
      summary: "2025年7月から2026年6月までの証券モニタリングで把握した問題点と取組をまとめた事例集。業容拡大に管理態勢が追い付かなかった証券会社、新興国債券の合理的根拠適合性、投資運用業者の忠実義務・利益相反など、年度方針の重点項目を具体的な失敗事例から確認できる。",
      whyImportant: [
        "年度方針の抽象的な着眼点を実際に当局が問題視した業務運営・内部管理の事例へ落とせる",
        "買収後のオンライン・NISA展開、新商品審査、システムリスク等を事業変更管理の観点から点検する材料になる",
        "合理的根拠適合性や親会社等との取引における利益相反管理など、形式的な規程では足りない統制上の失敗を把握できる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "商品審査", "投資運用業者", "経営管理"],
      audienceReason: "自社の内部管理を、抽象的なルールだけでなく直近の検査・モニタリング事例と照合して弱点を点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-cross-industry-priorities-2026", "secm-business-change-product-governance-2026", "secm-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-monitoring-casebook-20260731"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／前事務年度の具体的な検査・モニタリング事例を、2026事務年度の重点検証事項の背景資料として接続した。"
    },
    {
      id: "article-tmi-securities-monitoring-20260807",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／証券モニタリングの業態横断的重点",
      status: "adopted",
      summary: "令和8事務年度方針の業態横断的な4つの重点を前年度方針との差分と関連する監督指針・当局要請まで遡って解説する。顧客本位・適合性ではデジタル・リテラシーに応じた説明、システムリスクでは不正アクセス対策とフロンティアAI、AML/CFTでは2026年改正ガイドライン、内部管理では主要株主・経営体制変更や監査指摘への改善を具体化している。",
      whyImportant: [
        "年度方針の文言だけでなく前年度から何が具体化・統合されたかを比較し、優先順位を付けやすい",
        "不正アクセス、フロンティアAI、AML/CFTについて関連する監督指針・金融庁要請・ガイドラインまで接続し、実装すべき管理項目を追える",
        "当局方針を独立した新規制と誤解せず、既存ルールと直近の監督上の重点を分けて社内対応へ落とせる"
      ],
      audience: ["金融商品取引業者の法務・コンプライアンス", "内部監査", "システム・サイバーセキュリティ担当", "AML/CFT担当"],
      audienceReason: "当局の業態横断的な重点を、前年度との差分と既存の監督ルールへ遡って自社の管理計画へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-cross-industry-priorities-2026", "secm-cyber-aml-2026"],
      primarySourceIds: ["source-sesc-monitoring-policy-20260731", "source-sesc-monitoring-casebook-20260731"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／業態横断的重点を前年度との差分と関連する監督指針・ガイドラインへ接続する実務解説を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-20260812",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委「令和8事務年度 証券モニタリング基本方針」の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／証券モニタリングの規模・業態別重点",
      status: "adopted",
      summary: "令和8事務年度方針の規模・業態別の重点を、前年度の具体的な検査・行政処分事例と接続して解説する。大手証券の法人関係情報・引受審査、ネット証券のサイバー・取引時確認、準大手・地域証券の業容変化・新商品審査、投資運用業者の親会社取引・利益相反管理について、何を内部管理上確認すべきかを具体化する。",
      whyImportant: [
        "当局方針の業態別項目を、直近の問題事例と対応付けて『なぜその統制が重点なのか』まで理解できる",
        "買収後の事業転換やオンライン・NISA展開に対し、システム・法令確認・商品審査を同時に更新する必要性を具体例で示す",
        "投資運用業者の親会社等との取引について、承認だけでなく牽制機能と取引妥当性の事後検証まで見る実務上のポイントを示す"
      ],
      audience: ["証券会社の法務・コンプライアンス", "内部監査", "商品審査・引受審査", "投資運用業者", "経営管理"],
      audienceReason: "自社の業態に応じ、年度方針を直近の失敗事例と結び付けて内部管理・商品審査・利益相反管理の改善へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["secm-business-change-product-governance-2026", "secm-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-monitoring-policy-20260731", "source-sesc-monitoring-casebook-20260731"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／業態別の重点検証事項を、業容変更・新商品審査・引受審査・利益相反管理の具体的な内部統制課題へ接続した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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

  const articles = [
    {
      id: "article-sesc-securities-monitoring-policy-2026",
      title: "令和8事務年度 証券モニタリング基本方針",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング基本方針",
      status: "adopted",
      summary: "2026年7月から2027年6月までの金融商品取引業者等に対する証券モニタリングの重点を示す監視委の年度方針。業態横断では顧客の最善の利益・適合性、システムリスク、AML/CFT、内部管理態勢の実効性を掲げ、規模・業態別では大手証券、ネット系証券、準大手・地域証券、投資運用業者等について重点的な検証事項を示している。",
      whyImportant: [
        "金融商品取引業者等が2026年度に優先して点検すべき内部管理テーマを、監督・検査側の公式方針から確認できる",
        "顧客説明について、顧客属性やデジタル・リテラシーに応じて理解されるために必要な方法・程度を求める着眼点が明確になっている",
        "フロンティアAIによる脅威変化を含むシステムリスク、AML/CFT、内部管理態勢の実効性が横断重点として一つの方針に整理されている",
        "大手・ネット・地域証券、投資運用業者等の業態別重点を確認でき、自社のリスクベースの点検表を作りやすい"
      ],
      audience: ["金融商品取引業者", "金融法務・コンプライアンス", "内部監査", "リスク管理", "情報セキュリティ"],
      audienceReason: "年度の監視重点を、自社の販売・システム・AML/CFT・内部管理・業態固有リスクの点検計画へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-customer-conduct-2026", "securities-monitoring-cyber-ai-aml-2026", "securities-monitoring-business-model-products-2026", "securities-monitoring-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-policy-2026"],
      whatChanged: "新規テーマ作成／令和8事務年度の証券モニタリング重点を、顧客本位、システム・AI、AML/CFT、業容変化、業態別内部管理の棚として整理した。"
    },
    {
      id: "article-sesc-securities-monitoring-casebook-2026",
      title: "証券モニタリング概要・事例集（令和8年7月）",
      publisher: "証券取引等監視委員会",
      author: "証券取引等監視委員会",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
      sourceType: "primary",
      sourceLabel: "一次資料・証券モニタリング検査事例集",
      status: "adopted",
      summary: "2025年7月から2026年6月までの証券モニタリングを通じて把握した問題点と検査事例を整理した監視委の年次事例集。業容拡大に内部管理・システムが追いつかなかった事案、新商品の合理的根拠適合性の検討不足、銀証間の情報管理、投資運用業者の親会社等との利益相反など、年度方針の重点がどのような事実から形成されたかを確認できる。",
      whyImportant: [
        "抽象的な年度方針を、実際に指摘・行政処分につながった内部管理不備から逆算して読める",
        "買収後の事業転換や新商品・新サービス導入で、システム・コンプライアンス・経営管理を同時に拡張する必要性が具体的に分かる",
        "新商品の事前審査で商品特性、リスク、想定顧客、投資対象としての合理性を検討する必要性を事例で確認できる",
        "親会社等との取引では、形式的な利益相反規程ではなく、評価・意思決定・牽制の実効性が問われることを確認できる"
      ],
      audience: ["金融商品取引業者", "金融法務・コンプライアンス", "商品審査", "内部監査", "経営管理"],
      audienceReason: "自社の内部管理態勢を、実際の検査指摘・行政処分に照らして具体的に自己点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-customer-conduct-2026", "securities-monitoring-business-model-products-2026", "securities-monitoring-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-casebook-2026"],
      whatChanged: "論点補強／年度方針の重点を、直近の検査指摘・行政処分の具体例と対応付けて読める一次資料を追加した。"
    },
    {
      id: "article-tmi-securities-monitoring-2026-part1",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング（業態横断）",
      status: "adopted",
      summary: "令和8事務年度証券モニタリング基本方針のうち業態横断的な検証事項を、前年度方針との差分と直近の監督・検査動向から整理する実務解説。顧客説明が顧客属性・デジタルリテラシーに応じた『理解されるために必要な方法及び程度』へ具体化された点、不正アクセス対策の本格検証、フロンティアAIによる脅威変化への短期対応、2026年改正AML/CFTガイドライン、個々の業容に応じた内部管理態勢の実効性まで横断的に接続している。",
      whyImportant: [
        "前年度方針と比較することで、今年度に記載が具体化・移動・削除された項目と、なお実務上注意が必要な論点を切り分けられる",
        "顧客説明を単なる説明義務としてではなく、顧客属性・デジタルリテラシーに応じた理解可能性の設計として読む視点を得られる",
        "2025年の証券口座不正アクセス対策と2026年のフロンティアAI要請を、今年度のシステムリスク検証へどう接続するかが分かる",
        "AML/CFTガイドライン改正のうち、取引モニタリング後のリスク低減、新技術、外部委託先管理が監視上の重点になることを実務単位で確認できる"
      ],
      audience: ["金融商品取引業者", "金融法務・コンプライアンス", "営業管理", "AML/CFT担当", "情報セキュリティ"],
      audienceReason: "監視委の年度方針を、前年度との差分と既存の監督指針・ガイドライン・要請へつないで内部管理の点検項目へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-customer-conduct-2026", "securities-monitoring-cyber-ai-aml-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-policy-2026", "source-sesc-securities-monitoring-casebook-2026", "source-fsa-frontier-ai-financial-response-2026", "source-fsa-aml-guideline-2026"],
      whatChanged: "論点補強／年度方針の業態横断重点を前年度との差分、サイバー・AI要請、AML/CFT改正までつないで、内部管理の実務点検へ落とした。"
    },
    {
      id: "article-tmi-securities-monitoring-2026-part2",
      title: "【金商法業規制ブログ】令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井 宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／証券モニタリング（規模・業態別）",
      status: "adopted",
      summary: "令和8事務年度の規模・業態別検証事項を、直近の検査・行政処分事例と対応付けて解説する。大手証券の法人関係情報・引受審査、ネット系証券のサイバー・取引時確認、準大手・地域証券の業容変化と新商品審査、投資運用業者の親会社等との利益相反を取り上げ、方針の文言がどの実務リスクを念頭に置くかを具体化している。",
      whyImportant: [
        "大手証券について、2025年度には明示されていなかった法人関係情報管理と引受審査が新たな重点として示された背景を確認できる",
        "買収後に対面中心からネット取引・NISAへ業容を拡大した証券会社の事例から、事業転換と内部管理・システム整備を同期させる必要性が分かる",
        "コーラブル外債の事例を通じ、新商品委員会等で商品特性、リスク、想定顧客、投資合理性を具体的に分析する合理的根拠適合性の実装を確認できる",
        "投資運用業者の親会社物件取得事例から、利益相反管理では独立した評価・牽制と事後検証可能性が重要であることを具体的に把握できる"
      ],
      audience: ["証券会社", "投資運用業者", "金融法務・コンプライアンス", "商品審査", "内部監査"],
      audienceReason: "自社の業態に応じた今年度の重点を、実際の検査事例と結び付けて優先順位を付けるため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-business-model-products-2026", "securities-monitoring-conflicts-underwriting-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-policy-2026", "source-sesc-securities-monitoring-casebook-2026"],
      whatChanged: "論点補強／業態別の監視重点を、業容変化、新商品審査、引受審査、利益相反の直近検査事例と対応付けて具体化した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

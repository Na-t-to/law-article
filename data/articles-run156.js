(() => {
  const canonicalTopicSlug = "insider-trading-information-management";
  const legacyTopicSlug = "insider-trading-information-control";

  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const appendUnique = (base = [], extra = []) => [...new Set([...(base || []), ...(extra || [])])];

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

  const topics = window.TOPIC_DATA || [];
  const canonicalTopic = topics.find((item) => item && item.slug === canonicalTopicSlug);
  const legacyTopic = topics.find((item) => item && item.slug === legacyTopicSlug);

  if (canonicalTopic) {
    canonicalTopic.lastUpdated = "2026-09-15";
    canonicalTopic.lastVerified = "2026-09-15";

    if (legacyTopic) {
      canonicalTopic.sourceIds = appendUnique(canonicalTopic.sourceIds, legacyTopic.sourceIds);
      canonicalTopic.practicalImpacts = appendUnique(canonicalTopic.practicalImpacts, legacyTopic.practicalImpacts);

      const existingIssueIds = new Set((canonicalTopic.issues || []).map((issue) => issue && issue.id).filter(Boolean));
      const migratedIssues = (legacyTopic.issues || []).filter((issue) => issue && !existingIssueIds.has(issue.id));
      canonicalTopic.issues = (canonicalTopic.issues || []).concat(migratedIssues);

      canonicalTopic.currentSummary = canonicalTopic.currentSummary || {};
      for (const key of ["facts", "interpretations", "implications", "uncertain"]) {
        canonicalTopic.currentSummary[key] = appendUnique(
          canonicalTopic.currentSummary[key],
          legacyTopic.currentSummary && legacyTopic.currentSummary[key]
        );
      }
    }

    canonicalTopic.currentSummary = canonicalTopic.currentSummary || {};
    canonicalTopic.currentSummary.interpretations = addUnique(
      canonicalTopic.currentSummary.interpretations,
      "公開買付者側で契約履行により公開買付け等事実を知る者は現行法の金融商品取引法167条で規制対象となり得る一方、2026年改正で追加される対象会社側の契約・交渉関係者は施行前の拡張部分であり、両者を同じ制度段階として扱わない。"
    );
    canonicalTopic.currentSummary.implications = addUnique(
      canonicalTopic.currentSummary.implications,
      "公開買付者側でFA、コンサルタント、外部専門家その他の委託先へTOB情報を共有する場合は、NDAだけでなく、情報受領者の特定、売買制限、アクセス権限・ログ、情報遮断を案件管理へ組み込む。"
    );
  }

  if (legacyTopic) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).filter((topic) => topic && topic.slug !== legacyTopicSlug);
  }

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (!article) return article;
    const relatedTopics = (article.relatedTopics || []).map((slug) => slug === legacyTopicSlug ? canonicalTopicSlug : slug);
    return relatedTopics.some((slug, index) => slug !== (article.relatedTopics || [])[index])
      ? { ...article, relatedTopics: [...new Set(relatedTopics)] }
      : article;
  });

  const additions = [
    {
      id: "article-tmi-securities-monitoring-2026-part1",
      title: "令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第1回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18668.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／令和8事務年度証券モニタリング（第1回）",
      status: "adopted",
      summary: "証券取引等監視委員会の令和8事務年度証券モニタリング基本方針を前年度方針と比較し、業態横断の重点を実務向けに整理した解説。顧客の最善の利益・適合性、顧客属性やデジタル・リテラシーに応じた説明、法人関係情報管理、システムリスク・不正アクセス、フロンティアAI、AML/CFT等について、方針から明示的な記載が減った事項も直近の検査事例から重要性が失われたとは限らない点を指摘する。",
      whyImportant: [
        "年度方針の文言増減をそのまま優先順位の消滅と読まず、直近の検査事例と併せて内部管理の重点を判断する視点を得られる",
        "顧客属性・デジタルリテラシーに応じた説明、最善利益・適合性を販売・勧誘の具体的な態勢点検へ落とせる",
        "サイバー、不正取引、フロンティアAI、AML/CFTを別々の技術論ではなく、証券モニタリング上のシステム・内部管理リスクとして横断的に読める"
      ],
      audience: ["金融商品取引業者", "金融法務・コンプライアンス", "内部監査", "営業管理", "システムリスク管理"],
      audienceReason: "令和8事務年度の監視委方針を前年度との差分と検査実務から読み、販売・説明、情報管理、サイバー・AML/CFTの点検項目へ変換するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-customer-conduct-2026", "securities-monitoring-cyber-ai-aml-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-policy-2026", "source-sesc-securities-monitoring-casebook-2026", "source-fsa-frontier-ai-financial-response-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補完／令和8事務年度の横断的検証事項を前年度との差分と検査事例に照らして読み、顧客説明・情報管理・システムリスク・AML/CFTの実務へ落とした。"
    },
    {
      id: "article-tmi-securities-monitoring-2026-part2",
      title: "令和8事務年度の金融商品取引業者等に対する当局の証券モニタリングにおける主な検証事項～監視委『令和8事務年度 証券モニタリング基本方針』の解説～（第2回）",
      publisher: "TMI総合法律事務所",
      author: "岩井宏樹",
      publishedAt: "2026-08-12",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18670.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／令和8事務年度証券モニタリング（第2回）",
      status: "adopted",
      summary: "令和8事務年度証券モニタリング基本方針の規模・業態別の検証事項を、最近の検査・行政上の問題事例に対応付けて整理する解説。大手証券会社グループの法人関係情報管理・引受審査、ネット系証券のサイバー・取引時確認、準大手・地域証券の買収・業容変更と新商品審査、投資運用業者の親会社等との取引・利益相反管理について、具体的にどの統制が問われるかを示す。",
      whyImportant: [
        "年度方針の抽象的な重点を、証券会社・ネット系・準大手／地域・投資運用という業態別の内部管理項目へ変換できる",
        "買収後の業容転換や新商品導入で、登録・商品性だけでなくシステム、商品審査、コンプライアンス、経営管理のキャパシティを同時に見直す必要性を具体例で確認できる",
        "法人関係情報・引受審査、親会社等との取引・利益相反について、規程の有無ではなく牽制・審査・事後検証が機能しているかを見る視点を補強できる"
      ],
      audience: ["金融商品取引業者", "金融法務・コンプライアンス", "内部監査", "商品審査", "投資運用・利益相反管理担当"],
      audienceReason: "自社の業態・商品・資本関係に応じ、当局の年度重点を具体的な審査・牽制・モニタリング手順へ落とすため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["securities-monitoring-2026"],
      relatedIssues: ["securities-monitoring-business-model-products-2026", "securities-monitoring-conflicts-underwriting-2026", "securities-monitoring-cyber-ai-aml-2026"],
      primarySourceIds: ["source-sesc-securities-monitoring-policy-2026", "source-sesc-securities-monitoring-casebook-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補完／規模・業態別の重点を、法人関係情報・引受審査、買収後の態勢、新商品審査、親会社等との利益相反という具体的な統制へ接続した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(
    additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)))
  );
})();

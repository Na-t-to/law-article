(() => {
  const advertisingTopicSlug = "advertising-display-control";
  const advertisingIssueId = "advertising-environmental-label-greenwashing";
  const caaEnvironmentalLabelSourceId = "source-caa-environmental-label-report-2026";
  const moeEnvironmentalDisplaySourceId = "source-moe-environmental-display-guideline-2026";
  const takeoverTopicSlug = "listed-company-takeover-guidelines";
  const takeoverClarificationSourceId = "source-meti-corporate-takeover-guidelines-clarification-2026";
  const takeoverBaseSourceId = "source-meti-corporate-takeover-guidelines-2023";
  const cyberTopicSlug = "cyber-countermeasures-critical-infrastructure";
  const cyberIssueId = "cyber-critical-infrastructure-unified-standard";
  const cyberUnifiedStandardSourceId = "source-nco-critical-infrastructure-unified-standard-2026";
  const cyberReformEventId = "critical-infrastructure-unified-standard-2026";

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
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));

  const sources = [
    {
      id: moeEnvironmentalDisplaySourceId,
      title: "環境表示ガイドライン（令和8年3月改定版）",
      type: "guideline",
      typeLabel: "環境省・環境表示ガイドライン",
      authority: "環境省",
      publishedAt: "2026-03-31",
      url: "https://www.env.go.jp/press/press_03660.html",
      importance: "高",
      whyImportant: "自己宣言により環境表示を行う事業者等について、望ましい環境情報提供の基本事項を整理し、2026年改定でグリーンウォッシュ対応の国際動向等も拡充した行政ガイドライン。",
      topics: [advertisingTopicSlug]
    },
    {
      id: caaEnvironmentalLabelSourceId,
      title: "環境ラベルに関する実態調査報告書",
      type: "guideline",
      typeLabel: "消費者庁・景品表示法／環境ラベル実態調査",
      authority: "消費者庁",
      publishedAt: "2026-08-20",
      url: "https://www.caa.go.jp/policies/policy/representation/fair_labeling/survey/assets/representation_cms216_260820_02.pdf",
      importance: "最高",
      whyImportant: "環境ラベル139種類の実態調査と消費者調査を踏まえ、対象範囲、原材料使用割合・削減率、実証データ、第三者認証、表示内容の明確性について景品表示法上の考え方を具体化した一次資料。",
      topics: [advertisingTopicSlug]
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const sourceAdditions = sources.filter((item) => !existingSourceIds.has(item.id) && !existingSourceUrls.has(normalizeUrl(item.url)));
  if (sourceAdditions.length) window.SOURCE_DATA = currentSources.concat(sourceAdditions);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== advertisingTopicSlug) return topic;
    const issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === advertisingIssueId)) {
      issues.push({
        id: advertisingIssueId,
        title: "環境ラベル・グリーンウォッシュ表示をどう管理するか",
        status: "authoritative",
        stage: "not_applicable",
        views: [],
        conclusion: "環境ラベルは広告表示の一種として、何についての環境配慮かという対象範囲、原材料等の使用割合や削減率、環境効果を支える実証データ、第三者認証の有無、具体的な訴求内容を一般消費者が誤認しない形で明確に示す。",
        exception: "個々の表示が直ちに景品表示法違反となるかは、表示全体から一般消費者が受ける印象と実際の商品・サービスの内容を踏まえて判断されるため、特定情報の省略だけで機械的に結論を出さない。",
        uncertain: "2026年8月の実態調査報告書を踏まえた指導・措置命令等の執行事例は今後蓄積するため、具体的な表示審査の水準は継続確認する。",
        sourceIds: [caaEnvironmentalLabelSourceId, moeEnvironmentalDisplaySourceId]
      });
    }
    return {
      ...topic,
      summary: "No.1表示、口コミ・ステルスマーケティング、環境ラベル・グリーンウォッシュ、総付景品、不実証広告規制を中心に、広告主が表示根拠と販促施策・外部委託をどう管理するかを整理する。",
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      overview: addUniqueStrings(topic.overview, [
        "2026年には環境省が環境表示ガイドラインを改定し、消費者庁も環境ラベル139種類の実態調査を踏まえて景品表示法上の考え方を具体化した。環境配慮表示では、抽象的な『エコ』『グリーン』だけでなく、対象範囲・割合・効果の根拠・認証主体まで表示審査の対象として確認する。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings(topic.currentSummary?.facts, [
          "環境省は2026年3月31日、自己宣言による環境表示を行う事業者等を主な対象とする『環境表示ガイドライン』を改定し、5つの基本項目の見直しやグリーンウォッシュ対策の国際動向に関する参考情報の拡充を行った。",
          "消費者庁は2026年8月20日、環境ラベル139種類、事業者等18者へのヒアリング、一般消費者1,000名への調査を踏まえた『環境ラベルに関する実態調査報告書』を公表し、対象範囲、使用割合・削減率、実証データ、第三者認証、表示内容の明確性について景品表示法上の考え方を示した。"
        ]),
        interpretations: addUniqueStrings(topic.currentSummary?.interpretations, [
          "環境配慮表示はサステナビリティ部門だけで完結させず、マーケティングが使うラベル・文言と、調達・製造部門が持つ原材料比率・削減率・実証データ・認証情報を法務審査で対応付ける必要がある。"
        ]),
        implications: addUniqueStrings(topic.currentSummary?.implications, [
          "環境ラベルを使う商品・サービスについて、何を対象とする表示か、原材料等の使用割合・削減率が明確か、効果の実証データを保有しているか、第三者認証と誤認させるデザインになっていないか、抽象的な『エコ』『グリーン』だけで効果を過大に想起させないかを審査する。"
        ]),
        uncertain: addUniqueStrings(topic.currentSummary?.uncertain, [
          "環境ラベル実態調査報告書を踏まえた具体的な行政指導・措置命令等の執行実務は今後蓄積するため、表示審査の実務水準を継続確認する。"
        ])
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [caaEnvironmentalLabelSourceId, moeEnvironmentalDisplaySourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, ["環境ラベル・サステナビリティ広告"])
    };
  });

  const articles = [
    {
      id: "article-moe-environmental-display-guideline-2026-03-31",
      title: "『環境表示ガイドライン』の改定について",
      publisher: "環境省",
      author: "環境省",
      publishedAt: "2026-03-31",
      collectedAt: "2026-09-14",
      url: "https://www.env.go.jp/press/press_03660.html",
      sourceType: "primary",
      sourceLabel: "一次資料・環境表示／グリーンウォッシュ",
      status: "adopted",
      summary: "環境省が、自己宣言による環境表示を行う事業者・事業者団体を主な対象として、望ましい環境情報提供のあり方を整理する『環境表示ガイドライン』を2026年3月に改定した一次資料。5つの基本項目を見直し、グリーンウォッシュ対応の国際動向等も参考情報として拡充した。",
      whyImportant: [
        "環境配慮を訴求する広告・ラベルについて、景品表示法の執行だけでなく、自己宣言型の環境表示を設計する際の行政上のベストプラクティスを確認できる",
        "グリーンウォッシュを避けつつ環境価値を訴求するための表示設計を、サステナビリティ・マーケティング・法務の共通基準にしやすい",
        "同年8月の消費者庁『環境ラベルに関する実態調査報告書』と併読することで、望ましい表示と景品表示法上の誤認リスクを一体で点検できる"
      ],
      audience: ["企業法務", "広告・マーケティング", "サステナビリティ", "商品企画"],
      audienceReason: "環境配慮表示を設計・審査する際に、環境省が示す望ましい情報提供の考え方を確認するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [advertisingTopicSlug],
      relatedIssues: [advertisingIssueId],
      primarySourceIds: [moeEnvironmentalDisplaySourceId],
      legacyReformInference: false,
      whatChanged: "テーマ更新／環境ラベル・グリーンウォッシュ表示を審査する一次資料として、2026年改定の環境表示ガイドラインを追加した。"
    },
    {
      id: "article-caa-environmental-label-report-2026-08-20",
      title: "環境ラベルに関する実態調査報告書",
      publisher: "消費者庁",
      author: "消費者庁表示対策課",
      publishedAt: "2026-08-20",
      collectedAt: "2026-09-14",
      url: "https://www.caa.go.jp/notice/entry/047213/",
      sourceType: "primary",
      sourceLabel: "一次資料・景品表示法／環境ラベル",
      status: "adopted",
      summary: "消費者庁が環境ラベル139種類の実態、事業者等へのヒアリング、一般消費者1,000名への調査を踏まえ、環境配慮表示について景品表示法上の考え方を整理した報告書。対象範囲、原材料等の使用割合・削減率、効果の実証データ、第三者認証、抽象的な表示の明確性を具体的な審査項目として示す。",
      whyImportant: [
        "『商品全体か包装か』など訴求対象が不明確な表示、割合・削減率が不明確な表示、裏付けのない環境効果、第三者認証に見える自己ラベル等について、優良誤認表示となり得る考え方を具体化している",
        "『エコ』『グリーン』等の抽象的な文言・図柄が、一般消費者に実際以上の環境効果を想起させるリスクを示している",
        "消費者庁は報告書の考え方を周知し、不当表示等が疑われる事案には指導・是正を含め景品表示法に基づき厳正に対処する方針を示している"
      ],
      audience: ["企業法務", "広告・マーケティング", "サステナビリティ", "表示審査・商品企画"],
      audienceReason: "環境配慮ラベルやグリーン訴求を、表示対象・数値・証拠・認証・文言の5つの観点で点検する基準にするため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [advertisingTopicSlug],
      relatedIssues: [advertisingIssueId],
      primarySourceIds: [caaEnvironmentalLabelSourceId, moeEnvironmentalDisplaySourceId],
      legacyReformInference: false,
      whatChanged: "テーマ更新／環境ラベルの対象範囲・数値・裏付け・認証・明確性を景品表示法上の独立論点として追加した。"
    },
    {
      id: "article-mhm-environmental-label-greenwashing-2026-09-09",
      title: "『環境ラベルに関する実態調査報告書』が示すグリーンウォッシュ対応を踏まえた景品表示法上の留意点",
      publisher: "森・濱田松本法律事務所",
      author: "川端 健太・嶋村 直登・一井 梨緒",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-14",
      url: "https://org-www.morihamada.com/ja/insights/newsletters/145456",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／環境ラベル・グリーンウォッシュ",
      status: "adopted",
      summary: "消費者庁の2026年環境ラベル実態調査報告書を、グリーンウォッシュ対応と景品表示法の観点から読み解く実務解説。原材料等の使用割合やプラスチック削減率、表示対象の範囲、実証データ、第三者認証、抽象的な環境訴求について、事業者が広告審査でどこを明確化すべきかを具体化している。",
      whyImportant: [
        "一次資料の調査結果を、表示審査で使えるチェックポイントへ翻訳している",
        "環境配慮を訴求する割合・削減率が一部にとどまる場合に、100%又は大部分と誤認されないための表示方法を具体的に説明している",
        "今後の監視・執行で報告書が参照される可能性を踏まえ、サステナビリティ施策と景品表示法対応を同じレビュー工程へ落とし込みやすい"
      ],
      audience: ["企業法務", "広告・マーケティング", "サステナビリティ", "商品企画"],
      audienceReason: "消費者庁報告書を実務上の表示審査手順へ落とし込むため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: [advertisingTopicSlug],
      relatedIssues: [advertisingIssueId],
      primarySourceIds: [caaEnvironmentalLabelSourceId, moeEnvironmentalDisplaySourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／環境ラベル実態調査報告書の景品表示法上の射程と事業者の実務対応を補う高品質な二次資料を追加した。"
    },
    {
      id: "article-amt-takeover-guidelines-points-qa-2026-09-03",
      title: "【M&A】『企業買収における行動指針』のポイント及びQ&A等の公表① ―『企業買収における行動指針』のポイント等の概要―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "青柳 良則・佐橋 雄介",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260903001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／企業買収行動指針",
      status: "adopted",
      summary: "経済産業省が2026年7月30日に公表した『企業買収における行動指針』の解釈・ポイント・Q&Aについて、既存指針を改訂するものではないという位置付けと、企業価値・真摯な買収提案・取締役会の検討等の要点を整理する実務解説。",
      whyImportant: [
        "2026年の解釈整理が2023年行動指針の改訂ではなく、実務上の誤解を解く明確化であることを押さえられる",
        "企業価値・株主共同の利益、真摯な買収提案、取締役会の検討という指針の主要概念を、買収提案対応の実務から読み直せる",
        "同意なき買収や競合提案を含む場面で、取締役会が情報収集・比較・説明をどう組み立てるかを検討する補助資料になる"
      ],
      audience: ["上場会社法務", "取締役会事務局", "M&A担当", "コーポレート・ガバナンス担当"],
      audienceReason: "2026年のポイント・Q&Aを、買収提案受付から取締役会検討までの実務へつなぐため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: [takeoverTopicSlug],
      relatedIssues: [
        "takeover-guidelines-scope-principles",
        "takeover-desirable-acquisition",
        "takeover-serious-proposal",
        "takeover-sincere-review-comparison",
        "takeover-qualitative-enterprise-value"
      ],
      primarySourceIds: [takeoverClarificationSourceId, takeoverBaseSourceId],
      legacyReformInference: false,
      whatChanged: "整理変更なし／2026年の解釈・ポイント・Q&Aを上場会社の買収提案対応へ落とし込む実務解説をバックフィルした。"
    },
    {
      id: "article-amt-critical-infrastructure-cyber-standard-2026-09-04",
      title: "【サイバー＆AIセキュリティ】サイバーセキュリティ戦略本部、『重要インフラのサイバーセキュリティ対策のための統一基準』等を決定",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "清水 亘・石川 雅人",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/ddrlc98_p/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／重要インフラ・サイバーセキュリティ",
      status: "adopted",
      summary: "2026年7月31日に決定された重要インフラ統一基準と行動計画改定を軸に、適用範囲、安全基準等に規定されるべき事項を整理し、サイバーセキュリティ2026、Project YATA-Shield、脅威ハンティングの基本方針まで関連政策を横断して位置付ける実務解説。",
      whyImportant: [
        "統一基準の適用範囲と、各分野の安全基準等へ落とし込まれる事項を一続きで整理している",
        "重要インフラ対応を単独のガイドラインとしてではなく、政府の2026年度サイバー政策・AI高度化対応・脅威ハンティングと合わせて把握できる",
        "サイバー対処能力強化法の直接義務とは別系統で進む重要インフラ基準整備を、経営・セキュリティ・委託先管理の文脈へ接続しやすい"
      ],
      audience: ["企業法務", "CISO・情報セキュリティ", "重要インフラ事業者", "IT調達・委託先管理"],
      audienceReason: "重要インフラ統一基準と周辺の政府サイバー政策をまとめて把握し、自社分野の安全基準等への反映を追うため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: [cyberTopicSlug],
      relatedIssues: [cyberIssueId],
      primarySourceIds: [cyberUnifiedStandardSourceId],
      reformEventId: cyberReformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cyberUnifiedStandardSourceId],
      whatChanged: "整理変更なし／重要インフラ統一基準をサイバーセキュリティ2026等の周辺政策とつないで読む実務解説を追加した。"
    }
  ];

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const articleAdditions = articles.filter((item) => !existingArticleIds.has(item.id) && !existingArticleUrls.has(normalizeUrl(item.url)));
  if (articleAdditions.length) window.ARTICLE_DATA = currentArticles.concat(articleAdditions);
})();

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
      id: "article-cao-security-clearance-annual-report-20260626",
      title: "重要経済安保情報の指定及びその解除、適性評価の実施並びに適合事業者の認定の状況に関する報告",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2026-06-26",
      collectedAt: "2026-09-19",
      url: "https://www.cao.go.jp/keizai_anzen_hosho/kokkaihoukoku/kokkaihoukoku.html",
      sourceType: "primary",
      sourceLabel: "一次資料・内閣府／セキュリティ・クリアランス初年度運用報告",
      status: "adopted",
      summary: "重要経済安保情報保護活用法19条に基づく最初の国会報告。法施行後の2025年5月16日から12月31日までを対象に、9機関で20件の重要経済安保情報を指定し、年末時点では19件が存続、2機関・18件の適性評価を実施し、11機関から217件の適性評価調査要求があったことを公表した。一方、適合事業者の従業者に対する適性評価は0件、適合事業者の認定も0件であり、施行初年度の民間利用はまだ限定的だったことが分かる。",
      whyImportant: [
        "法制度の条文・ガイドラインだけでなく、施行初年度に指定・適性評価・適合事業者認定が実際にどこまで進んだかを公式統計で確認できる",
        "適性評価調査217件に対し、実際に完了した適性評価は18件、適合事業者の認定は0件という立ち上がりの時間差を把握できる",
        "適性評価の同意拒否3件・同意取下げ2件、独立公文書管理監による是正要求1件など、運用上のチェックポイントも確認できる"
      ],
      audience: ["経済安全保障・輸出管理担当", "企業法務・コンプライアンス", "人事・労務", "情報セキュリティ", "官公庁取引・研究開発部門"],
      audienceReason: "制度が施行済みであることだけでなく、民間事業者認定や従業者の適性評価が実務上どの段階にあるかを把握し、自社準備の緊急度と順序を判断するため。",
      categories: ["危機管理・コンプライアンス", "労務", "個人情報", "情報セキュリティ"],
      relatedTopics: ["economic-security-clearance"],
      relatedIssues: ["security-clearance-qualifying-business", "security-clearance-first-year-operation"],
      primarySourceIds: ["source-cao-security-clearance-annual-report-20260626", "source-egov-important-economic-security-information-act-2024"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／重要経済安保情報保護活用法の施行初年度について、情報指定・適性評価・適合事業者認定の実績を公式報告から整理した。"
    },
    {
      id: "article-amt-security-clearance-overview-20251226",
      title: "セキュリティ・クリアランス制度の概要を重要経済安保情報保護活用法に基づき解説",
      publisher: "BUSINESS LAWYERS",
      author: "中崎尚／藤田将貴／松本拓／石川雅人（アンダーソン・毛利・友常法律事務所外国法共同事業）",
      publishedAt: "2025-12-26",
      collectedAt: "2026-09-19",
      url: "https://www.businesslawyers.jp/articles/1402",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／重要経済安保情報保護活用法・セキュリティクリアランス",
      status: "adopted",
      summary: "重要経済安保情報保護活用法と施行令・運用基準・適合事業者向けガイドライン等を横断し、重要経済安保情報の指定、適合事業者認定、情報保全体制、適性評価、契約、罰則まで制度全体を実務向けに整理した解説。事業者認定では外国資本・役員等の影響、管理責任者、教育、施設設備などが審査要素となり、適性評価では本人同意、調査項目、10年以内の既往評価の扱い、事情変更報告等まで確認できる。",
      whyImportant: [
        "法律・施行令・運用基準・ガイドラインに分散した事業者側の義務と手続を、一つの業務フローとして確認できる",
        "適合事業者認定に必要な情報保全規程、施設、教育、責任者、外国資本等の確認事項を実務チェック項目へ落としやすい",
        "適性評価の調査項目、本人・事業者への通知範囲、10年以内の過去評価の扱い、事情変更時の報告まで人事運用に接続できる"
      ],
      audience: ["経済安全保障・輸出管理担当", "企業法務・コンプライアンス", "人事・労務", "情報セキュリティ", "官公庁取引・研究開発部門"],
      audienceReason: "制度の全体像を一次資料へ戻れる形で把握し、適合事業者認定と適性評価を社内規程・人事・セキュリティ運用へ落とすため。",
      categories: ["危機管理・コンプライアンス", "労務", "個人情報", "情報セキュリティ"],
      relatedTopics: ["economic-security-clearance"],
      relatedIssues: ["security-clearance-qualifying-business", "security-clearance-employee-consent-hr"],
      primarySourceIds: ["source-egov-important-economic-security-information-act-2024", "source-cao-security-clearance-business-guideline-20250502"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／適合事業者認定、情報保全体制、適性評価を法令・運用基準・ガイドライン横断で実務フローへ整理する解説を追加した。"
    },
    {
      id: "article-noandt-security-clearance-hr-part1-20250220",
      title: "セキュリティ・クリアランス制度下での人事労務管理（前編） ～従業員の新規募集・採用時の留意点～",
      publisher: "長島・大野・常松法律事務所",
      author: "細川智史／大澤大／湯浅諭／岡田忠志",
      publishedAt: "2025-02-20",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20250220-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／セキュリティクリアランスと採用・個人情報",
      status: "adopted",
      summary: "セキュリティ・クリアランス制度を採用実務から検討するニュースレター。適性評価は本人同意が前提であり、クリアランスを取得できなかった者の内定取消し・解雇は労働法上の要件を別途満たす必要があること、職種限定合意を明示する意義、採用前に適性評価を開始する選択肢、企業が評価結果を予測するため病歴・犯罪歴・国籍等を独自収集することに個人情報保護法・職業安定法上の制約があることを具体的に論じる。",
      whyImportant: [
        "『クリアランスが取れない＝当然に内定取消し・解雇できる』とは整理せず、制度上の取扱制限と労働法上の雇用判断を分けて検討できる",
        "クリアランス前提の採用では、職務範囲や職種限定合意を労働契約書・労働条件通知書へどう落とすかという実務課題が見える",
        "適性評価を予測するため企業が国籍・病歴・犯罪歴等を先回りして集めることの個人情報・募集採用規制上のリスクを具体化している"
      ],
      audience: ["人事・採用", "労務法務", "経済安全保障担当", "個人情報保護担当", "官公庁取引部門"],
      audienceReason: "セキュリティ・クリアランスが必要な職種の採用条件、内定時期、情報収集範囲、クリアランス不取得時の対応を雇用実務へ落とすため。",
      categories: ["労務", "個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["economic-security-clearance"],
      relatedIssues: ["security-clearance-employee-consent-hr", "security-clearance-recruitment-prescreening"],
      primarySourceIds: ["source-egov-important-economic-security-information-act-2024", "source-cao-security-clearance-business-guideline-20250502"],
      reformEventId: "important-economic-security-information-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cao-security-clearance-annual-report-20260626"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／セキュリティ・クリアランスを前提とする採用で、職種限定、内定・解雇、求職者の機微情報収集を分けて検討する実務論点を追加した。"
    },
    {
      id: "article-noandt-security-clearance-hr-part2-20250319",
      title: "セキュリティ・クリアランス制度下での人事労務管理（後編） ～既存従業員の取扱い・業務委託時の留意点～",
      publisher: "長島・大野・常松法律事務所",
      author: "細川智史／大澤大／湯浅諭／岡田忠志",
      publishedAt: "2025-03-19",
      collectedAt: "2026-09-19",
      url: "https://www.nagashima.com/publications/publication20250319-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／セキュリティクリアランスと既存従業員・委託",
      status: "adopted",
      summary: "既存従業員が適性評価へ同意しない又は適性が認められない場合の配置、人事上の不利益取扱い、既存従業員の機微情報収集、派遣・外部専門家・業務委託先による重要経済安保情報の取扱いを横断する解説。適性評価情報の目的外利用禁止として解雇・減給・降格・懲戒・不利益配置等が例示されること、外部専門家は所属先が別途適合事業者として認定される必要が生じ得ること、適合事業者間で直接情報を提供せず行政機関を起点にすることなどを具体化する。",
      whyImportant: [
        "既存従業員の配置転換と、適性評価結果を理由とする不利益取扱いの禁止を分けて考える必要性が分かる",
        "派遣労働者・役員・外部の弁護士やコンサルタント等で『従業者』の扱いが異なり得るため、委託契約だけでは情報取扱権限を決められないことを確認できる",
        "元請・下請を含む外部委託では、行政機関を起点とする情報提供と適合事業者認定を前提に契約構造を設計する必要があるという実務上の示唆が強い"
      ],
      audience: ["人事・労務", "企業法務・コンプライアンス", "調達・委託管理", "経済安全保障担当", "個人情報保護担当"],
      audienceReason: "既存従業員の配置・評価と、派遣・外部専門家・業務委託を含む情報取扱体制を、労働法と重要経済安保情報保護活用法の両面から設計するため。",
      categories: ["労務", "契約", "個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["economic-security-clearance"],
      relatedIssues: ["security-clearance-employee-consent-hr", "security-clearance-outsourcing"],
      primarySourceIds: ["source-egov-important-economic-security-information-act-2024", "source-cao-security-clearance-business-guideline-20250502"],
      reformEventId: "important-economic-security-information-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cao-security-clearance-annual-report-20260626"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／既存従業員への不利益取扱い制限と、派遣・外部専門家・委託先を含む情報取扱・契約構造の論点を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
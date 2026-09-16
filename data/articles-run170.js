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

  const topicSlug = "labor-standards-review-representative-holidays-2026";
  const additions = [
    {
      id: "article-mhlw-labor-standards-study-report-2025",
      title: "『労働基準関係法制研究会』の報告書を公表します",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2025-01-08",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/stf/newpage_48220.html",
      sourceType: "primary",
      sourceLabel: "一次資料・労働基準法制見直し／研究会報告書",
      status: "adopted",
      summary: "労働基準法制の中長期的な見直しについて、労働者・事業の概念、労使コミュニケーション、労働時間、休日・休暇、割増賃金等の課題と検討方向を包括的に整理した厚生労働省研究会の基礎報告書。2026年の労働政策審議会で具体化する論点の出発点として位置付けられる。",
      whyImportant: [
        "過半数代表制や休日・休暇を含む労働基準法制見直しの背景と制度目的を一次資料で遡れる",
        "個別の審議資料だけでは見えにくい、労使コミュニケーションと労働時間法制を一体で見直す全体像を確認できる",
        "2026年の審議資料が何を継承・具体化しているかを比較する基準になる"
      ],
      audience: ["人事・労務", "企業法務", "労働組合・労使協議担当", "勤怠・給与制度担当"],
      audienceReason: "今後の労働基準法改正に備え、制度見直しの背景と論点の射程を把握するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["labor-review-majority-representative-2026", "labor-review-statutory-holiday-consecutive-work-2026", "labor-review-annual-paid-leave-2026"],
      primarySourceIds: ["source-mhlw-labor-standards-study-report-2025", "source-labour-standards-act"],
      reformEventId: "labor-standards-act-review-2025-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-labor-standards-study-report-2025"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／労働基準法制見直しの基礎報告書を、過半数代表・休日・年休の2026年審議を読むための起点として追加した。"
    },
    {
      id: "article-mhlw-labor-conditions-subcommittee-205-20260916",
      title: "第211回労働政策審議会労働条件分科会（資料）―過半数代表制・法定休日・年次有給休暇",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/stf/newpage_76187.html",
      sourceType: "primary",
      sourceLabel: "一次資料・労働基準法制見直し／労政審論点資料",
      status: "adopted",
      summary: "労働政策審議会労働条件分科会の検討資料。過半数代表者への情報提供・便宜供与や不利益取扱い禁止、法定休日の事前特定・変更と13日を超える連続勤務の原則禁止、年休の時季指定・時間単位取得・賃金算定等を具体的な議論事項として提示する。いずれも2026年9月16日時点では検討段階で、成立済みルールではない。",
      whyImportant: [
        "労働基準法制見直しが、抽象的な研究会提言から具体的な制度設計論点へ進んだ現在地を確認できる",
        "過半数代表者の選出だけでなく、情報提供・活動環境・不利益取扱いまで使用者側の実務に影響し得る論点が示されている",
        "休日指定・連続勤務・年休管理と給与計算について、改正前にどの業務プロセスが影響を受ける可能性があるかを棚卸しできる"
      ],
      audience: ["人事・労務", "企業法務", "就業規則担当", "勤怠・給与システム担当", "労使協議担当"],
      audienceReason: "検討段階と現行義務を混同せず、将来改正が実務フローへ与える影響を先行して把握するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["labor-review-majority-representative-2026", "labor-review-statutory-holiday-consecutive-work-2026", "labor-review-annual-paid-leave-2026"],
      primarySourceIds: ["source-mhlw-labor-conditions-subcommittee-205-20260916", "source-mhlw-labor-standards-study-report-2025", "source-labour-standards-act"],
      reformEventId: "labor-standards-act-review-2025-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-labor-conditions-subcommittee-205-20260916"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／過半数代表制・法定休日・年次有給休暇について、2026年9月16日時点の具体的な検討論点を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

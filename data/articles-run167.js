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
      id: "article-mhlw-social-insurance-wage-requirement-decree-2026",
      title: "短時間労働者の賃金要件撤廃に伴う関係政令・省令の整備（令和8年9月11日）",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/hourei/doc/hourei/H260911T0010.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／社会保険・短時間労働者の賃金要件撤廃",
      status: "adopted",
      summary: "2025年年金制度改正で予定されていた短時間労働者の社会保険適用要件のうち月額8.8万円の賃金要件について、関係政令の施行日が2026年10月1日と確定した。あわせて、最低賃金法上の減額特例の対象となる特定減額特例対象者について、通常の短時間労働者と別建ての資格取得・申出・資格喪失等の取扱いを整備する。",
      whyImportant: [
        "これまで『2026年10月撤廃予定』として管理していた月額8.8万円の賃金要件について、2026年10月1日という施行日を一次資料で確定できる",
        "人事・給与部門は10月1日以降、週20時間以上等の残る要件を基準に対象者を再判定する必要がある",
        "最低賃金法上の特定減額特例対象者には別建ての資格取得・申出等の仕組みが置かれるため、賃金要件撤廃を理由に全員を一律に同じ取扱いとしない"
      ],
      audience: ["人事・労務", "給与・社会保険", "法務", "経営企画"],
      audienceReason: "2026年10月1日の賃金要件撤廃に合わせて短時間労働者の加入判定、本人説明、資格取得届等の運用を更新するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-short-time-coverage-expansion"],
      primarySourceIds: ["source-mhlw-social-insurance-wage-requirement-decree-2026", "source-mhlw-social-insurance-wage-requirement-ordinance-2026"],
      reformEventId: "employee-social-insurance-expansion-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-social-insurance-wage-requirement-decree-2026"],
      legacyReformInference: false,
      whatChanged: "法改正更新／短時間労働者の月額8.8万円の賃金要件について、撤廃日を『2026年10月予定』から『2026年10月1日施行確定』へ更新し、特定減額特例対象者の別建ての取扱いを追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

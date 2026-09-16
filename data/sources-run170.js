(() => {
  const topicSlug = "labor-standards-review-representative-holidays-2026";
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
      id: "source-mhlw-labor-standards-study-report-2025",
      title: "労働基準関係法制研究会 報告書",
      type: "report",
      typeLabel: "一次資料・厚生労働省／労働基準法制見直し",
      authority: "厚生労働省",
      publishedAt: "2025-01-08",
      url: "https://www.mhlw.go.jp/stf/newpage_48220.html",
      importance: "最高",
      whyImportant: "労働基準法における労働者・事業、労使コミュニケーション、労働時間・休日・休暇等について今後の制度見直しの方向性を包括的に整理した基礎資料。",
      topics: [topicSlug]
    },
    {
      id: "source-mhlw-labor-conditions-subcommittee-205-20260916",
      title: "第211回労働政策審議会労働条件分科会（資料）",
      type: "government",
      typeLabel: "一次資料・厚生労働省／労働基準法制見直し・論点資料",
      authority: "厚生労働省",
      publishedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/stf/newpage_76187.html",
      importance: "最高",
      whyImportant: "過半数代表制、法定休日、年次有給休暇について、2026年9月時点で労働政策審議会が検討する具体的論点を示す最新の一次資料。現行法と未確定の検討事項を区別して追える。",
      topics: [topicSlug]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);

  const laborStandardsAct = (window.SOURCE_DATA || []).find((item) => item && item.id === "source-labour-standards-act");
  if (laborStandardsAct) {
    laborStandardsAct.topics = Array.isArray(laborStandardsAct.topics) ? laborStandardsAct.topics : [];
    if (!laborStandardsAct.topics.includes(topicSlug)) laborStandardsAct.topics.push(topicSlug);
  }
})();

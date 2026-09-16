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
      id: "source-meti-ai-civil-liability-guide-2026",
      title: "「AI利活用における民事責任の解釈適用に関する手引き」を公表しました",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／AI利活用における民事責任の解釈適用に関する手引き",
      authority: "経済産業省",
      publishedAt: "2026-04-09",
      url: "https://www.meti.go.jp/press/2026/04/20260409001/20260409001.html",
      importance: "最高",
      whyImportant: "AIの開発・提供・利用に伴う民事責任について、不法行為法・製造物責任法等の現行法を具体的なAI利用場面へどう適用するかを政府として体系化した基礎資料。",
      topics: ["ai-civil-liability-governance-2026"]
    },
    {
      id: "source-moj-ai-publicity-voice-report-2026",
      title: "肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書の公表について",
      type: "government_material",
      typeLabel: "一次資料・法務省／生成AIによるパブリシティ権侵害等に関する解釈指針",
      authority: "法務省",
      publishedAt: "2026-08-07",
      url: "https://www.moj.go.jp/MINJI/minji05_00778.html",
      importance: "最高",
      whyImportant: "生成AIによる肖像・声の無断利用について、パブリシティ権、人格的利益、損害賠償・差止め、不正競争防止法等の現行法上の論点を想定事例で整理した公式報告書。",
      topics: ["ai-publicity-voice-rights-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

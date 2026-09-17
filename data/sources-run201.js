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
      id: "source-meti-unfair-competition-ai-likeness-hearing-20260911",
      title: "第30回 産業構造審議会 知的財産分科会 不正競争防止小委員会",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／生成AIによる肖像・声の無断利用に関する関係者ヒアリング",
      authority: "経済産業省",
      publishedAt: "2026-09-11",
      url: "https://www.youtube.com/watch?v=jgvgSwTx3GE",
      importance: "高",
      whyImportant: "生成AIによる肖像・声の無断利用について、法務省の現行法解釈と実演家・業界団体の制度要望を聴取し、不正競争防止法による追加的な法的整備の要否を検討する公式審議会資料として、制度見直しが実際の政策検討段階へ進んだことを確認できる。",
      topics: ["ai-publicity-voice-rights-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

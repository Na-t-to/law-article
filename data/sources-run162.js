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
      id: "source-maff-seed-law-qa-2026",
      title: "令和8年度種苗法改正に関するQ&A",
      type: "guideline",
      typeLabel: "改正法Q&A",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/r8kaisei_qa.html",
      importance: "最高",
      whyImportant: "2026年改正の施行日、育成者権の存続期間延長、出願品種の輸出差止め、輸出目的保管、損害賠償、貸渡し、優先審査、第三者意見募集等を公式Q&Aで具体化している。",
      topics: ["plant-variety-seed-act-2026"]
    },
    {
      id: "source-maff-important-varieties-act-2026",
      title: "第221回国会提出法律案・重要品種の育成及びその種苗の生産の振興に関する法律",
      type: "law",
      typeLabel: "新法・国会提出資料",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/law/bill/221.html",
      importance: "最高",
      whyImportant: "重要品種法の成立日・公布日・施行方式と、法律案・概要・要綱等を確認できる公式の基準点。",
      topics: ["plant-variety-seed-act-2026"]
    },
    {
      id: "source-maff-important-varieties-policy-draft-2026",
      title: "第1回気候変動等対応品種育成・普及小委員会 配布資料（基本方針案）",
      type: "proposal",
      typeLabel: "基本方針案・審議会資料",
      authority: "農林水産省",
      publishedAt: "2026-09-07",
      url: "https://www.maff.go.jp/j/council/seisaku/kikaku/hinsyu/260907.html",
      importance: "高",
      whyImportant: "重要品種法に基づく国の基本方針案と説明資料が示され、施行に向けた認定・普及制度の具体化を追える。",
      topics: ["plant-variety-seed-act-2026"]
    },
    {
      id: "source-mod-defense-transfer-principles-2026",
      title: "「防衛装備移転三原則」等の一部改正について",
      type: "guideline",
      typeLabel: "政府方針・運用指針改正",
      authority: "防衛省",
      publishedAt: "2026-04-21",
      url: "https://www.mod.go.jp/j/press/news/2026/04/21a.html",
      importance: "最高",
      whyImportant: "2026年4月21日に防衛装備移転三原則と運用指針を改正した公式資料で、改正後の海外移転枠組みを確認する基準点。",
      topics: ["economic-security-tech-control"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

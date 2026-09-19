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
      id: "source-npa-aml-annual-report-2025",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）",
      type: "report",
      typeLabel: "一次資料・警察庁JAFIC／AML年次報告書",
      authority: "警察庁 犯罪収益対策室（JAFIC）",
      publishedAt: "2026-03-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      importance: "高",
      whyImportant: "DNFBPsを特集し、疑わしい取引の届出状況、業種別のマネー・ローンダリングリスク、FATF第5次対日相互審査を見据えた取組、本人確認方法見直しを一次資料で確認できる。",
      topics: ["aml-kyc-criminal-proceeds"]
    },
    {
      id: "source-mhlw-business-transfer-guideline-20260120",
      title: "「事業譲渡又は合併を行うに当たって会社等が留意すべき事項に関する指針」の一部改正について",
      type: "guideline",
      typeLabel: "一次資料・厚生労働省／事業譲渡等指針2026年改正",
      authority: "厚生労働省",
      publishedAt: "2026-01-20",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudouseisaku/saihen/68297_00001.html",
      importance: "高",
      whyImportant: "企業価値担保権の創設を受けた事業譲渡等指針の改正内容と、2026年5月25日からの適用を公式に確認できる。管財人の情報提供・団体交渉・事前協議や、担保権設定時の労使コミュニケーションが実務に直結する。",
      topics: ["corporate-restructuring-labor"]
    },
    {
      id: "source-mhlw-restructuring-labor-council-20260703",
      title: "第7回 労働政策審議会 労働条件分科会 組織再編に伴う労働関係の調整に関する部会 議事録",
      type: "report",
      typeLabel: "一次資料・厚生労働省／組織再編労働関係部会（第7回）",
      authority: "厚生労働省",
      publishedAt: "2026-07-03",
      url: "https://www.mhlw.go.jp/stf/newpage_75551.html",
      importance: "高",
      whyImportant: "合併・事業譲渡・会社分割の現行制度と裁判例を整理した上で、事業譲渡時の雇用承継・労使協議を法制化すべきとの意見と、事業再生・取引の柔軟性を損なうため慎重であるべきとの意見の双方を確認できる。",
      topics: ["corporate-restructuring-labor"]
    },
    {
      id: "source-mhlw-restructuring-labor-council-20260914",
      title: "第8回 労働政策審議会 労働条件分科会 組織再編に伴う労働関係の調整に関する部会 資料",
      type: "report",
      typeLabel: "一次資料・厚生労働省／組織再編労働関係部会（第8回）",
      authority: "厚生労働省",
      publishedAt: "2026-09-14",
      url: "https://www.mhlw.go.jp/stf/newpage_76153.html",
      importance: "高",
      whyImportant: "2026年9月時点でも組織再編時の労働関係見直しが継続中であることを確認できる。M&A調査会社ヒアリングと諸外国法制の比較が行われ、最終的な制度設計は未確定である。",
      topics: ["corporate-restructuring-labor"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

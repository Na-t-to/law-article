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
      id: "source-cfa-child-sexual-violence-prevention-portal-20260918",
      title: "こども性暴力防止法（法令・ガイドライン・事業者向け資料）",
      type: "government_material",
      typeLabel: "こども家庭庁／こども性暴力防止法・施行準備資料",
      authority: "こども家庭庁",
      publishedAt: "2026-09-18",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou",
      importance: "最高",
      whyImportant: "こども性暴力防止法、施行期日政令、施行令・施行規則、2026年9月2日改訂の施行ガイドライン、事業者向けひな型、Q&A等を集約する現行の公式資料群。法律は2026年12月25日に施行される。",
      topics: ["child-sexual-violence-prevention-dbs"]
    },
    {
      id: "source-cfa-child-sexual-violence-qa-revision-20260918",
      title: "こども性暴力防止法に関するQ&Aの改訂について（周知依頼）",
      type: "government_material",
      typeLabel: "こども家庭庁／こども性暴力防止法Q&A改訂通知",
      authority: "こども家庭庁",
      publishedAt: "2026-09-18",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/bd3ee897/20260918_policies_child-safety_efforts_koseibouhou_90.pdf",
      importance: "高",
      whyImportant: "2026年9月2日の施行ガイドライン改訂等を踏まえ、事業者等から寄せられた照会を中心にQ&Aへ新規設問を追加し、既存設問を更新したことを示す最新の周知通知。施行直前の運用確認に使う。",
      topics: ["child-sexual-violence-prevention-dbs"]
    },
    {
      id: "source-caa-whistleblower-amendment-20250611",
      title: "公益通報者保護法の一部を改正する法律に関する資料",
      type: "law",
      typeLabel: "消費者庁／令和7年改正公益通報者保護法",
      authority: "消費者庁",
      publishedAt: "2025-06-11",
      url: "https://www.caa.go.jp/notice/entry/042574/",
      importance: "最高",
      whyImportant: "2025年6月11日に公布された公益通報者保護法の一部改正について、改正法資料へ到達する公式入口。2026年12月1日施行の企業対応を整理する基礎資料となる。",
      topics: ["whistleblower-protection-2025-amendment"]
    },
    {
      id: "source-caa-whistleblower-overview-202609",
      title: "公益通報者保護法と制度の概要（令和7年改正・改正指針）",
      type: "government_material",
      typeLabel: "消費者庁／公益通報者保護制度・令和7年改正の現行整理",
      authority: "消費者庁",
      publishedAt: "2026-09-02",
      url: "https://www.caa.go.jp/policies/policy/consumer_partnerships/whisleblower_protection_system/overview",
      importance: "最高",
      whyImportant: "令和7年改正法が2026年12月1日に施行されること、同日から施行される法定指針・指針解説、改正法準拠のハンドブック等を一体で確認できる現行の公式ページ。",
      topics: ["whistleblower-protection-2025-amendment"]
    },
    {
      id: "source-caa-whistleblower-guideline-commentary-20260331",
      title: "公益通報者保護法に基づく指針の解説の一部改正",
      type: "guideline",
      typeLabel: "消費者庁／公益通報者保護法・改正指針解説",
      authority: "消費者庁",
      publishedAt: "2026-03-31",
      url: "https://www.caa.go.jp/notice/entry/045670/",
      importance: "最高",
      whyImportant: "2025年改正法に伴う法定指針・指針解説の改正を確認する公式資料。内部公益通報対応体制を施行日までに具体化する際の直接的な実務基準となる。",
      topics: ["whistleblower-protection-2025-amendment"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

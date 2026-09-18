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
      id: "source-cfa-child-sexual-violence-qa-revision-20260918",
      title: "こども性暴力防止法に関するQ&Aの改訂について（周知依頼）",
      type: "government_material",
      typeLabel: "こども家庭庁／こども性暴力防止法Q&A改訂通知",
      authority: "こども家庭庁",
      publishedAt: "2026-09-18",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/bd3ee897/20260918_policies_child-safety_efforts_koseibouhou_90.pdf",
      importance: "高",
      whyImportant: "2026年9月2日の施行ガイドライン改訂等を踏まえ、事業者等から寄せられた照会を中心にQ&Aへ新規設問を追加し、既存設問を更新したことを示す最新の周知通知。2026年12月25日の施行直前の運用確認に使う。",
      topics: ["child-sexual-violence-prevention-dbs"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

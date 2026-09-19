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
      id: "source-egov-early-business-restructuring-act",
      title: "円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律（令和7年法律第67号）",
      type: "law",
      typeLabel: "法令・e-Gov／早期事業再生法",
      authority: "e-Gov法令検索",
      publishedAt: "2025-06-13",
      url: "https://laws.e-gov.go.jp/law/507AC0000000067",
      importance: "高",
      whyImportant: "金融債権者の多数決と裁判所の認可により倒産前の早期段階で金融債務を調整する新制度の中核法令。利用要件、対象債権者、権利変更、一時停止、プレDIP等の法的枠組みを確認できる。",
      topics: ["early-business-restructuring-act"]
    },
    {
      id: "source-meti-early-restructuring-rules-qa-20260630",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／施行規則・資産評定基準・Q&A",
      authority: "経済産業省",
      publishedAt: "2026-06-30",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      importance: "高",
      whyImportant: "2026年12月11日の施行日を確認できるほか、施行規則・資産評定基準と178項目のQ&Aへの入口となり、利用対象、対象債権、一時停止、例外弁済等の制度運用を具体化する。",
      topics: ["early-business-restructuring-act"]
    },
    {
      id: "source-caa-digital-transactions-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "report",
      typeLabel: "一次資料・消費者庁／デジタル取引・特定商取引法等見直し",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "高",
      whyImportant: "SNS等のチャット勧誘、クーリング・オフ、ダークパターン、インターネット通販の表示・解約等について、特定商取引法等の制度見直しの方向性を示す最新の中間取りまとめ。",
      topics: ["consumer-law-digital-contract-review"]
    },
    {
      id: "source-caa-consumer-contract-interim-20260910",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "report",
      typeLabel: "一次資料・消費者庁／消費者契約法見直し",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      importance: "高",
      whyImportant: "消費者の多様な脆弱性への配慮、サブスクリプション等の継続契約における解約妨害、合理的な離脱、更新通知、重要な契約変更時の通知等について、消費者契約法見直しの方向性を示す中間取りまとめ。",
      topics: ["consumer-law-digital-contract-review"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

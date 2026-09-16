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
      id: "source-egov-early-business-rehabilitation-act-2025",
      title: "円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律（令和7年法律第67号）",
      type: "law",
      typeLabel: "法令／早期事業再生法",
      authority: "e-Gov法令検索",
      publishedAt: "2025-06-13",
      url: "https://laws.e-gov.go.jp/law/507AC0000000067",
      importance: "最高",
      whyImportant: "早期事業再生手続の利用要件、対象債権、指定確認調査機関、多数決、裁判所の認可等を定める法的基礎。",
      topics: ["early-business-rehabilitation-2025"]
    },
    {
      id: "source-meti-early-business-rehabilitation-rules-qa-2026",
      title: "早期事業再生法の本年12月11日からの施行に向け、Q&A等を公表しました",
      type: "government",
      typeLabel: "一次資料・経済産業省／施行規則・告示・Q&A",
      authority: "経済産業省",
      publishedAt: "2026-06-30",
      url: "https://www.meti.go.jp/press/2026/06/20260630003/20260630003.html",
      importance: "最高",
      whyImportant: "2026年12月11日の施行日、施行規則・資産評定基準の最終化、178項目のQ&A公表を確認できる施行準備の基準資料。",
      topics: ["early-business-rehabilitation-2025"]
    },
    {
      id: "source-meti-early-business-rehabilitation-qa-2026",
      title: "円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律に関するQ&A",
      type: "guideline",
      typeLabel: "一次資料・経済産業省／早期事業再生法Q&A",
      authority: "経済産業省",
      publishedAt: "2026-06-30",
      url: "https://www.meti.go.jp/policy/economy/keiei_innovation/jigyosaisei/file/soukijugyousaiseihou_QA.pdf",
      importance: "最高",
      whyImportant: "利用対象となる債務者、対象債権者・対象債権、担保・リース、プレDIPファイナンス等について施行時点の解釈・運用をQ&A形式で整理する。",
      topics: ["early-business-rehabilitation-2025"]
    },
    {
      id: "source-fsa-growth-company-funding-consultation-2026",
      title: "金融審議会『成長企業への資金供給の在り方等に関する検討』諮問文",
      type: "government",
      typeLabel: "一次資料・金融庁／成長企業向け資金供給・貸金業規制見直し",
      authority: "金融庁",
      publishedAt: "2026-08-31",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/seityousikin_wg/gijishidai/20260916/01.pdf",
      importance: "最高",
      whyImportant: "日本成長戦略を踏まえ、成長投資・事業再構築を支える資金供給主体の多様化と事業者向け貸付けに係る貸金業規制の柔構造化を正式な検討事項とした諮問文。",
      topics: ["enterprise-value-security-business-lending"]
    },
    {
      id: "source-fsa-growth-company-cross-border-lending-2026",
      title: "成長企業への資金供給の在り方等に関するWG第1回事務局説明資料②（ご議論いただきたい事項）",
      type: "report",
      typeLabel: "一次資料・金融庁／クロスボーダー融資・貸金業法",
      authority: "金融庁",
      publishedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/singi/singi_kinyu/seityousikin_wg/gijishidai/20260916/06.pdf",
      importance: "最高",
      whyImportant: "国内拠点を持たない外国金融機関等による大企業等向けシンジケートローン参加について、貸金業登録の人的・財産的要件、更新制度、債権譲受規制等の柔構造化を検討課題として具体化した資料。",
      topics: ["enterprise-value-security-business-lending"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

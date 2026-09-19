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
      id: "source-caa-kinpodo-funeral-price-order-20260918",
      title: "株式会社金宝堂に対する景品表示法に基づく措置命令について",
      type: "guideline",
      typeLabel: "措置命令・執行事例",
      authority: "消費者庁",
      publishedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/entry/047522/",
      importance: "高",
      whyImportant: "広告されたサービス内容と最低価格の対応関係を、有利誤認として実際に執行した最新の一次資料。『○円〜』表示を実際の提供条件・価格分布と突合する重要性を確認できる。",
      topics: ["advertising-display-control"]
    }
  ];

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();
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
      id: "source-ppc-apppi-subrules-369-20260916",
      title: "第369回個人情報保護委員会（2026年改正法の政令・規則整備／安全管理措置見直し）",
      type: "report",
      typeLabel: "一次資料・個人情報保護委員会／第369回委員会",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260916/",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法について、同意例外、16歳未満の者、顔特徴データ等の政令・規則の基本的な考え方（案）と、安全管理措置ガイドラインの手法例示見直しを公式に示した委員会資料。下位ルールの最終決定前の検討資料として、施行準備と現行法対応を分けて読む基礎になる。",
      topics: ["personal-information-protection-2026-amendment"]
    },
    {
      id: "source-cfa-child-sexual-violence-act-hub-20260918",
      title: "こども性暴力防止法（法令・施行ガイドライン・Q&A）",
      type: "report",
      typeLabel: "一次資料・こども家庭庁／こども性暴力防止法",
      authority: "こども家庭庁",
      publishedAt: "2026-09-18",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou",
      importance: "高",
      whyImportant: "2024年成立・公布、2026年12月25日施行のこども性暴力防止法について、法律・政令・府令・告示、施行ガイドライン、Q&A、施行準備資料を一体で確認できる公式ハブ。制度の対象、施行日、犯罪事実確認以外の安全確保措置を確認する基礎資料となる。",
      topics: ["child-sexual-violence-prevention-dbs"]
    },
    {
      id: "source-cfa-child-sexual-violence-qa-20260918",
      title: "こども性暴力防止法に関するQ&A（令和8年9月18日改訂）",
      type: "report",
      typeLabel: "一次資料・こども家庭庁／こども性暴力防止法Q&A",
      authority: "こども家庭庁",
      publishedAt: "2026-09-18",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/ce13b7a9/20260918_policies_child-safety_efforts_koseibouhou_91.pdf",
      importance: "高",
      whyImportant: "2026年9月18日改訂版で、対象業務、採用段階の誓約書、犯罪事実確認、防止措置、情報管理等の実務的な設問が追加・更新された公式Q&A。総合職等の採用段階で性犯罪前科の有無を確認する場合の合理性・必要性、公正採用上の留意も具体化している。",
      topics: ["child-sexual-violence-prevention-dbs"]
    },
    {
      id: "source-cfa-child-sexual-violence-templates-20260902",
      title: "こども性暴力防止法施行ガイドライン・各種ひな型／参考例（2026年9月改訂）",
      type: "guideline",
      typeLabel: "一次資料・こども家庭庁／施行ガイドライン・実務ひな型",
      authority: "こども家庭庁",
      publishedAt: "2026-09-02",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou#guideline",
      importance: "高",
      whyImportant: "施行ガイドラインと、児童対象性暴力等対処規程、募集要項・求人票、誓約書・内定通知書、就業規則、取扱記録、権限設定表、情報管理規程などの公式参考例をまとめて確認できる。制度を採用・労務・情報管理の運用へ落とす際の直接的な参照資料となる。",
      topics: ["child-sexual-violence-prevention-dbs"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

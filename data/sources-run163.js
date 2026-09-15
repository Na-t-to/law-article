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
    { id: "source-maff-seed-act-amendment-2026", title: "種苗法の改正について（令和8年改正）", type: "government", typeLabel: "一次資料・農林水産省／2026年種苗法改正", authority: "農林水産省", publishedAt: "2026-07-17", url: "https://www.maff.go.jp/j/shokusan/syubyouhou/", importance: "最高", whyImportant: "2026年種苗法改正の成立、法律概要・条文・新旧対照表、Q&Aへの公式入口。改正内容を確認する基準資料。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-maff-seed-act-qa-2026", title: "令和8年度種苗法改正に関するQ&A", type: "government", typeLabel: "一次資料・農林水産省／2026年種苗法改正Q&A", authority: "農林水産省", publishedAt: "不明", url: "https://www.maff.go.jp/j/shokusan/syubyouhou/r8kaisei_qa.html", importance: "最高", whyImportant: "2026年7月24日と12月1日の段階施行、育成者権の存続期間延長の既存登録品種への適用、海外流出対策等の実務上の扱いを公式Q&Aで確認できる。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-egov-seed-act-current", title: "種苗法（平成10年法律第83号）", type: "law", typeLabel: "一次資料・e-Gov法令検索／種苗法", authority: "e-Gov法令検索", publishedAt: "不明", url: "https://laws.e-gov.go.jp/law/410AC0000000083", importance: "最高", whyImportant: "種苗法の現行条文と改正履歴を確認する法令原文。2026年改正の段階施行を条文レベルで追う基準になる。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-egov-important-varieties-act-2026", title: "重要品種の育成及びその種苗の生産の振興に関する法律（令和8年法律第71号）", type: "law", typeLabel: "一次資料・e-Gov法令検索／重要品種新法", authority: "e-Gov法令検索", publishedAt: "2026-07-24", url: "https://laws.e-gov.go.jp/law/508AC0000000071", importance: "最高", whyImportant: "重要品種の定義、基本方針、育成事業・種苗生産事業活動の計画認定、特例、施行期日の法的根拠を確認する法律原文。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-shugiin-important-varieties-bill-2026", title: "重要品種の育成及びその種苗の生産の振興に関する法律案（第221回国会閣法第46号）", type: "government", typeLabel: "一次資料・衆議院／重要品種新法案", authority: "衆議院", publishedAt: "2026-04-03", url: "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/honbun/houan/g22109046.htm", importance: "高", whyImportant: "成立した重要品種新法の制度骨格と附則の施行期日を、国会提出法案の条文で確認できる。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-egov-important-varieties-rule-draft-2026", title: "重要品種の育成及びその種苗の生産の振興に関する法律施行規則案についての意見・情報の募集について", type: "government", typeLabel: "一次資料・e-Govパブリックコメント／重要品種新法施行規則案", authority: "農林水産省・e-Gov", publishedAt: "2026-08-31", url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004400", importance: "高", whyImportant: "重要品種新法の認定申請・都道府県基本計画・種苗生産事業活動等の具体化に必要な施行規則案と、2026年9月29日までの意見募集状況を確認できる。", topics: ["plant-variety-seed-act-2026"] },
    { id: "source-egov-important-varieties-basic-policy-draft-2026", title: "重要品種の育成及びその種苗の生産の振興に関する基本的な方針案についての意見・情報の募集について", type: "government", typeLabel: "一次資料・e-Govパブリックコメント／重要品種基本方針案", authority: "農林水産省・e-Gov", publishedAt: "2026-09-08", url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004401", importance: "高", whyImportant: "重要品種新法5条に基づく国の基本方針案と、2026年10月7日までの意見募集状況を確認できる。施行後の認定・支援方針を読む重要な施行準備資料。", topics: ["plant-variety-seed-act-2026"] }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

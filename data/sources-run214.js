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

  const additions = [{
    id: "source-meti-equity-incentive-plan-20230331",
    title: "『「攻めの経営」を促す役員報酬～企業の持続的成長のためのインセンティブプラン導入の手引～』（2023年3月時点版）",
    type: "guideline",
    typeLabel: "一次資料・経済産業省／株式報酬実務指針",
    authority: "経済産業省",
    publishedAt: "2023-03-31",
    url: "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/pdf/230331incentiveplan.pdf",
    importance: "高",
    whyImportant: "従業員向け株式報酬に関するQ&Aを含み、Q80では労基法上の賃金に該当しないと整理し得る場合の考え方として、現金賃金を減額せず付加的に付与すること、労働契約・就業規則上賃金として支給するものとしないこと、現金賃金が労働の対償全体の主たる部分であることを示している。",
    topics: ["companies-act-review-shareholders"]
  }];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

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
      id: "source-jftc-distribution-guideline-current-20260708",
      title: "流通・取引慣行に関する独占禁止法上の指針",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／流通・取引慣行ガイドライン現行版",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/guideline/unyoukijun/ryutsutorihiki.html",
      importance: "高",
      whyImportant: "現行ガイドライン本文。1991年公表後の改正履歴に2026年7月8日改正を明記し、再販売価格維持、非価格制限その他の流通・取引慣行に関する独占禁止法上の考え方を確認できる。",
      topics: ["distribution-resale-price"]
    },
    {
      id: "source-jftc-rpm-faq-20260708",
      title: "よくある質問コーナー（独占禁止法）Q12-4・Q12-5",
      type: "government_material",
      typeLabel: "一次資料・公正取引委員会／指定価格制度・費用負担Q&A",
      authority: "公正取引委員会",
      publishedAt: "2026-07-08",
      url: "https://www.jftc.go.jp/dk/dk_qa.html",
      importance: "高",
      whyImportant: "いわゆる指定価格制度について、メーカーがユーザー販売までの危険・費用を負担し流通業者が単なる取次ぎとして機能する場合の考え方と、荷造費・人件費・研修費・保険料等を含む費用確認・負担方法を具体化する公式Q&A。",
      topics: ["distribution-resale-price"]
    },
    {
      id: "source-ai-ip-principle-code-filing-20260908",
      title: "生成AI知財プリンシプル・コードの届出開始日及び届出様式",
      type: "government_material",
      typeLabel: "一次資料・内閣府／届出運用",
      authority: "内閣府 知的財産戦略推進事務局",
      publishedAt: "2026-09-08",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
      importance: "高",
      whyImportant: "プリンシプル・コード1（4）に基づく受入れ届出を2026年10月26日から開始することと公式様式を示した運用資料。届出先等は開始日に案内するとされ、受入れ準備の具体的な日程管理に使える。",
      topics: ["generative-ai-ip-principle-code"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

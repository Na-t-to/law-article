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
      id: "article-npa-aml-annual-report-20260312",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）",
      publisher: "警察庁",
      author: "警察庁 犯罪収益対策室（JAFIC）",
      publishedAt: "2026-03-12",
      collectedAt: "2026-09-19",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・警察庁JAFIC／AML年次報告書",
      status: "adopted",
      summary: "犯罪収益移転防止法の施行状況とAML/CFTの国内外動向をまとめる年次報告書。令和7年版はDNFBPsを特集し、疑わしい取引の年間通知101万9,405件のうちDNFBPsは439件（約0.04％）にとどまり、金融機関側ではDNFBPsに関係する疑わしい取引情報が把握される一方、対応するDNFBPs側の届出が確認されない例を示す。2027年4月の本人確認方法見直しも特集している。",
      whyImportant: [
        "DNFBPsの疑わしい取引届出が全体に比して極めて少ないという当局の問題意識を一次資料で確認できる",
        "不動産、宝石・貴金属、郵便物受取等の業種でどのようなマネー・ローンダリングリスクが想定されているかを具体例とともに確認できる",
        "FATF第5次対日相互審査を見据え、DNFBPsのリスク理解・届出・アウトリーチの強化が政策課題であることを把握できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "不動産・貴金属等の特定事業者", "AML/CFT担当", "内部監査"],
      audienceReason: "自社がDNFBP・特定事業者に該当する場合のリスク評価、疑わしい取引届出、本人確認の見直しを、当局の最新の施行状況と問題意識から点検するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-dnfbp-governance", "aml-identity-verification-2027"],
      primarySourceIds: ["source-npa-aml-annual-report-2025"],
      legacyReformInference: false,
      whatChanged: "テーマ補強／DNFBPsの疑わしい取引届出・リスクベース対応の実効性と、2027年4月の本人確認見直しを警察庁年次報告書の一次資料で補強した。"
    },
    {
      id: "article-tmi-dnfbp-aml-cft-20260917",
      title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-19",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／DNFBPsのAML/CFT",
      status: "adopted",
      summary: "警察庁JAFICの令和7年年次報告書を起点に、宅地建物取引、宝石・貴金属、郵便物受取等のDNFBPsについて、犯収法上の義務、業種別ガイドライン、リスクベース・アプローチ、疑わしい取引届出、本人確認見直し、法人口座悪用防止を一体で整理する。形式的な規程整備で終わらず、統括管理者、リスク評価、教育、内部監査、取締役会等での実質的議論までセルフチェックへ落としている。",
      whyImportant: [
        "リスクベース・アプローチは法定の取引時確認要件を任意に緩和する考え方ではないと明確にし、ルール遵守とリスク管理を分けて理解できる",
        "疑わしい取引届出の少なさを『有効性』の問題として捉え、検知・監視・分析、取引拒絶判断、リスク評価への還元まで運用へ落としている",
        "内部規程、統括管理者、教育、内部監査、取締役会等の関与をチェック項目化しており、DNFBPのAML/CFTガバナンスを具体的に点検できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "宅地建物取引業者", "宝石・貴金属等取扱事業者", "内部監査・リスク管理"],
      audienceReason: "犯収法対応を取引時確認だけで終わらせず、自社リスクの評価、疑わしい取引の検知・届出、教育・監査・経営関与まで実装するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-dnfbp-governance", "aml-identity-verification-2027", "aml-2026-account-remittance"],
      primarySourceIds: ["source-npa-aml-annual-report-2025", "source-npa-aml-amendment-2026", "source-npa-aml-overview-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／DNFBPsのAML/CFTを、法定義務、リスク評価、疑わしい取引届出、モニタリング、内部規程・教育・監査・経営関与まで一つの運用サイクルとして整理した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

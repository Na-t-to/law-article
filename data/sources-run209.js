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
      id: "source-meti-jcstar-launch-20250325",
      title: "IoT製品に対するセキュリティラベリング制度（JC-STAR）の運用を開始しました",
      type: "government_material",
      typeLabel: "一次資料・経済産業省／JC-STAR運用開始",
      authority: "経済産業省・独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2025-03-25",
      url: "https://www.meti.go.jp/press/2024/03/20250325007/20250325007.html",
      importance: "最高",
      whyImportant: "JC-STARの運用開始、対象となるIoT製品、任意の多段階制度であること、★1・★2と★3・★4の評価方式、政府調達や国際相互承認への展開方針を確認できる制度開始時の公式資料。",
      topics: ["jc-star-iot-security-labeling"]
    },
    {
      id: "source-ipa-jcstar-portal-20260731",
      title: "セキュリティ要件適合評価及びラベリング制度（JC-STAR）",
      type: "government_material",
      typeLabel: "一次資料・IPA／JC-STAR現行制度ポータル",
      authority: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-31",
      url: "https://www.ipa.go.jp/security/jc-star/index.html",
      importance: "最高",
      whyImportant: "★1〜★4の位置付け、自己適合宣言と第三者評価の違い、ラベルが完全な安全を保証しないこと、申請前後の不正・誤認表示に関する現行運用をまとめて確認できる公式ポータル。",
      topics: ["jc-star-iot-security-labeling"]
    },
    {
      id: "source-ipa-jcstar-procurement-20260709",
      title: "JC-STAR活用に向けた取り組み",
      type: "government_material",
      typeLabel: "一次資料・IPA／JC-STARの調達・利活用",
      authority: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-09",
      url: "https://www.ipa.go.jp/security/jc-star/leverage.html",
      importance: "高",
      whyImportant: "政府機関等、重要インフラ、地方公共団体等の調達要件への組込み、業界での活用、国際相互承認というJC-STARの実利用の方向性を確認できる公式資料。",
      topics: ["jc-star-iot-security-labeling"]
    },
    {
      id: "source-ipa-jcstar-star3-20260612",
      title: "★3（レベル3）適合基準・評価手順（評価手法・評価ガイド）",
      type: "government_material",
      typeLabel: "一次資料・IPA／通信機器・ネットワークカメラ★3要件",
      authority: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-06-12",
      url: "https://www.ipa.go.jp/security/jc-star/tekigou-kizyun-guide/label3/index.html",
      importance: "高",
      whyImportant: "2026年6月に公表・更新された通信機器・ネットワークカメラ向け★3セキュリティ要件・適合要件と、評価ガイドがなお準備中であることを確認できる現行一次資料。",
      topics: ["jc-star-iot-security-labeling"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

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
      id: "source-fsa-cyber-common-reporting-guidelines-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "一次資料・金融庁／サイバーインシデント共通報告様式",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "最高",
      whyImportant: "2026年9月15日の関係省庁申合せ改正を受け、金融庁所管業者のコンピュータシステム障害・サイバーセキュリティ事案の報告をDDoS・ランサムウェア・その他サイバー攻撃等の共通様式へ移行する監督指針等の確定改正。2026年10月1日の適用日と対象となる監督指針・事務ガイドラインを確認できる。",
      topics: ["cyber-countermeasures-critical-infrastructure"]
    },
    {
      id: "source-ppc-forensics-keypoints-20260116",
      title: "不正アクセス発生時のフォレンジック調査の有効活用に向けた着眼点",
      type: "guideline",
      typeLabel: "一次資料・個人情報保護法サイバーセキュリティ連絡会／フォレンジック",
      authority: "個人情報保護法サイバーセキュリティ連絡会・個人情報保護委員会",
      publishedAt: "2026-01-16",
      url: "https://www.ppc.go.jp/files/pdf/260116_forensics_keypoints.pdf",
      importance: "最高",
      whyImportant: "不正アクセス対応について、平時の情報資産把握・ログ保管・対応フロー、初動の封じ込め・証拠保全、専門調査の利用と結果の活用を整理した実務資料。フォレンジック会社への調査依頼自体が個人情報保護法等で一律に義務付けられているわけではないことも明示する。",
      topics: ["privacy-enforcement-breach-response"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
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
      id: "source-caa-kinpodo-funeral-price-order-20260918",
      title: "株式会社金宝堂に対する景品表示法に基づく措置命令について",
      type: "government_material",
      typeLabel: "一次資料・消費者庁／有利誤認・最低価格表示",
      authority: "消費者庁",
      publishedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/entry/047522/",
      importance: "高",
      whyImportant: "家族葬サービスの『10.45万円〜』等の最低価格表示について、実際には僅かな場合を除き30万8000円以上が必要だったとして有利誤認と判断された最新の執行事例。最低価格・『〜』表示を実際の取引条件と照合する広告審査に使える。",
      topics: ["advertising-display-control"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

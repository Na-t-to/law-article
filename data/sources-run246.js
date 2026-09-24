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
  const topicSlug = "j-sox-internal-control-reporting";
  const additions = [
    {
      id: "source-fsa-jsox-standards-20230407",
      title: "財務報告に係る内部統制の評価及び監査の基準並びに財務報告に係る内部統制の評価及び監査に関する実施基準の改訂について（意見書）",
      type: "guideline",
      typeLabel: "企業会計審議会・内部統制基準／実施基準",
      authority: "金融庁・企業会計審議会",
      publishedAt: "2023-04-07",
      url: "https://www.fsa.go.jp/news/r4/sonota/20230407/20230407.html",
      importance: "最高",
      whyImportant: "J-SOX導入後の大きな制度改訂を確定した一次資料。評価範囲のリスクベース化、不正・経営者による無効化・ITリスク、ガバナンスとの関係、内部統制報告書の記載見直しの基準点になる。",
      topics: [topicSlug]
    },
    {
      id: "source-fsa-jsox-ordinance-guideline-20230630",
      title: "『財務計算に関する書類その他の情報の適正性を確保するための体制に関する内閣府令の一部を改正する内閣府令（案）』等に対するパブリックコメントの結果等について",
      type: "guideline",
      typeLabel: "内部統制府令・ガイドライン／施行情報",
      authority: "金融庁",
      publishedAt: "2023-06-30",
      url: "https://www.fsa.go.jp/news/r4/sonota/20230630-5/20230630-5.html",
      importance: "最高",
      whyImportant: "内部統制府令・ガイドラインの最終改正、重要な不備の是正状況や訂正理由等の追加記載事項、2024年4月1日の施行・適用を確認できる一次資料。",
      topics: [topicSlug]
    },
    {
      id: "source-fsa-jsox-qa-casebook-20230831",
      title: "『内部統制報告制度に関するQ&A』等の改訂について",
      type: "guideline",
      typeLabel: "金融庁Q&A・事例集",
      authority: "金融庁",
      publishedAt: "2023-08-31",
      url: "https://www.fsa.go.jp/news/r5/sonota/20230831-2/20230831-2.html",
      importance: "高",
      whyImportant: "2023年4月の基準・実施基準改訂を実務へ落とすQ&A・事例集。評価範囲の数値例や重要勘定例を固定的に運用しない考え方を具体化する。",
      topics: [topicSlug]
    },
    {
      id: "source-fsa-yuho-review-2026-jsox",
      title: "有価証券報告書レビュー及び大量保有報告書等のレビューについて（令和8年度）",
      type: "report",
      typeLabel: "金融庁・有価証券報告書レビュー",
      authority: "金融庁",
      publishedAt: "2026-03-27",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260327.html",
      importance: "高",
      whyImportant: "2026年度の開示レビューでも、2024年4月施行の内部統制報告書等に関する府令改正が法令改正等関係審査の対象であることを確認でき、施行後も評価・開示の実効性が継続点検されていることを示す。",
      topics: [topicSlug]
    }
  ];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

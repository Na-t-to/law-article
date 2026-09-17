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

  const paymentTopic = "payment-services-cross-border-collection-2026";
  const cryptoTopic = "crypto-financial-instruments-reform-2026";
  const additions = [
    {
      id: "source-fsa-payment-services-amendment-final-20260522",
      title: "令和7年資金決済法改正に係る政令の公布及びパブリックコメントの結果等について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／最終政省令・パブコメ結果",
      authority: "金融庁",
      publishedAt: "2026-05-22",
      url: "https://www.fsa.go.jp/news/r7/sonota/20260522/20260522.html",
      importance: "最高",
      whyImportant: "クロスボーダー収納代行の適用除外、資金移動業の新たな資産保全方法、第一種資金移動業の滞留規制緩和などの下位法令を確定し、主要規定とガイドラインの2026年6月1日施行・適用を確認できる。",
      topics: [paymentTopic]
    },
    {
      id: "source-shugiin-payment-services-law66-20250613",
      title: "資金決済に関する法律の一部を改正する法律（令和7年法律第66号）",
      type: "law_text",
      typeLabel: "一次資料・衆議院／公布法令",
      authority: "衆議院",
      publishedAt: "2025-06-13",
      url: "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/21720250613066.htm",
      importance: "最高",
      whyImportant: "クロスボーダー収納代行を為替取引として位置付ける法律本文と、既存事業者について施行後6か月の業務継続、期限内申請時は処分まで最長2年継続できる経過措置を確認できる。",
      topics: [paymentTopic]
    },
    {
      id: "source-fsa-fiea-payment-amendment-overview-20260715",
      title: "金融商品取引法及び資金決済に関する法律の一部を改正する法律（第221回国会）",
      type: "government_material",
      typeLabel: "一次資料・金融庁／成立法・関係資料",
      authority: "金融庁",
      publishedAt: "2026-07-15",
      url: "https://www.fsa.go.jp/common/diet/",
      importance: "最高",
      whyImportant: "2026年7月15日の成立と、暗号資産、サステナビリティ開示・保証、スタートアップ資金供給、不公正取引規制等を含む改正法の全体像を確認でき、法案段階と成立済みルールを区別する基準点になる。",
      topics: [cryptoTopic]
    },
    {
      id: "source-fsa-fiea-payment-amendment-law-20260723",
      title: "金融商品取引法及び資金決済に関する法律の一部を改正する法律（令和8年法律第64号）",
      type: "law_text",
      typeLabel: "一次資料・金融庁／公布法令本文",
      authority: "金融庁",
      publishedAt: "2026-07-23",
      url: "https://www.fsa.go.jp/common/diet/221/02/01.pdf",
      importance: "最高",
      whyImportant: "暗号資産取引規制の金商法移管、情報公表・業規制・不公正取引規制、経過措置と施行期日を含む公布法令本文。暗号資産規制本体が公布から1年以内の政令指定日施行であることを確認できる。",
      topics: [cryptoTopic]
    },
    {
      id: "source-fsa-fiea-20day-effective-20260729",
      title: "令和8年金融商品取引法等改正（20日後施行）に係る政令の公布について",
      type: "government_material",
      typeLabel: "一次資料・金融庁／先行施行",
      authority: "金融庁",
      publishedAt: "2026-07-29",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260729/20260729.html",
      importance: "高",
      whyImportant: "改正法のうち無登録業に対する罰則引上げと証券取引等監視委員会の犯則調査権限追加が2026年8月12日に先行施行されることを公式に確認でき、全面施行との混同を防げる。",
      topics: [cryptoTopic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

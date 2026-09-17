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

  const topic = "regional-public-transport-act-2026";
  const additions = [
    {
      id: "source-mlit-regional-transport-amendment-2026",
      title: "地域公共交通の活性化及び再生に関する法律の一部を改正する法律案を閣議決定",
      type: "government_material",
      typeLabel: "一次資料・国土交通省／2026年地域交通法改正概要",
      authority: "国土交通省",
      publishedAt: "2026-03-10",
      url: "https://www.mlit.go.jp/report/press/sogo12_hh_000505.html",
      importance: "最高",
      whyImportant: "2026年改正の制度内容を、自動車地域旅客運送サービス再構築事業、施設送迎者の協力、連携促進団体、モビリティデータの利活用等に分けて示す公式概要。公布後の制度内容を読む基礎資料として使える。",
      topics: [topic]
    },
    {
      id: "source-diet-regional-transport-law-history-2026",
      title: "第221回国会 地域公共交通の活性化及び再生に関する法律の一部を改正する法律案 審査経過概要",
      type: "government_material",
      typeLabel: "一次資料・衆議院／成立・公布経過",
      authority: "衆議院",
      publishedAt: "2026-06-10",
      url: "https://www.shugiin.go.jp/internet/itdb_iinkai.nsf/html/gianrireki/221_221_kakuho_23.htm",
      importance: "高",
      whyImportant: "2026年6月3日の成立と6月10日の法律第35号としての公布を確認でき、法案段階と成立済みルールを区別するための一次資料になる。",
      topics: [topic]
    },
    {
      id: "source-mlit-regional-transport-effective-date-2026",
      title: "地域公共交通の活性化及び再生に関する法律の一部を改正する法律の施行期日を定める政令を閣議決定",
      type: "government_material",
      typeLabel: "一次資料・国土交通省／施行期日",
      authority: "国土交通省",
      publishedAt: "2026-09-01",
      url: "https://www.mlit.go.jp/report/press/sogo12_hh_000539.html",
      importance: "最高",
      whyImportant: "2026年6月10日公布の改正法について、施行期日政令により2026年10月16日施行と確定したことを示す公式資料。施行準備の期限を判断する基準点になる。",
      topics: [topic]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

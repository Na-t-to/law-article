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
      id: "source-ppc-security-measures-guideline-review-2026",
      title: "個人情報の保護に関する法律についてのガイドライン（通則編）等における安全管理措置の手法の例示の追加等の検討について",
      type: "guideline",
      typeLabel: "一次資料・安全管理措置ガイドライン見直し／検討資料",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-2.pdf",
      importance: "最高",
      whyImportant: "2016年策定時から大きく変わっていない安全管理措置の手法例について、クラウド、多要素認証、ゼロトラスト、侵入後の横展開対策等を取り込む2026～2027年の見直し方向と工程を示した一次資料。",
      topics: ["privacy-enforcement-breach-response"]
    },
    {
      id: "source-ppc-unauthorized-access-warning-2024",
      title: "不正アクセスによる個人データ漏えい防止のための注意喚起",
      type: "guideline",
      typeLabel: "一次資料・個人情報保護委員会／不正アクセス注意喚起",
      authority: "個人情報保護委員会",
      publishedAt: "2024-12-11",
      url: "https://www.ppc.go.jp/news/careful_information/241211_alert_dataleakage/",
      importance: "最高",
      whyImportant: "実際の漏えい報告・監督事例を踏まえ、脆弱性・認証・グループ会社や海外拠点・委託先・クラウド等を起点とする不正アクセスの原因と対策を、個人情報保護法上の安全管理措置・委託先監督へ接続して示した基礎資料。",
      topics: ["privacy-enforcement-breach-response"]
    },
    {
      id: "source-nco-cyber-common-reporting-2025",
      title: "サイバー攻撃による被害発生時のインシデント報告様式の統一について",
      type: "government",
      typeLabel: "一次資料・国家サイバー統括室／DDoS・ランサムウェア共通報告様式",
      authority: "内閣官房 国家サイバー統括室",
      publishedAt: "2025-10-01",
      url: "https://www.cyber.go.jp/policy/group/cyber/yoshikiichigenka.html",
      importance: "高",
      whyImportant: "複数官公署へのサイバー攻撃被害報告の負担軽減と政府対応の迅速化を目的に、DDoS・ランサムウェアの共通報告様式と記載例を正式運用した一次資料。個人情報漏えい報告等と並行するインシデント報告実務の設計に関係する。",
      topics: ["privacy-enforcement-breach-response"]
    },
    {
      id: "source-mhlw-customer-harassment-2026",
      title: "従業員を守るために ― カスタマーハラスメント対策の新ルール",
      type: "government",
      typeLabel: "一次資料・厚生労働省／カスタマーハラスメント防止措置",
      authority: "厚生労働省",
      publishedAt: "2026-08-20",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260820.html",
      importance: "最高",
      whyImportant: "2026年10月1日から義務化されるカスタマーハラスメント防止措置について、法定の3要素と事業主が講ずべき方針、相談体制、事後対応、悪質事案への対処、プライバシー保護等を公式に整理した施行直前の実務資料。",
      topics: ["customer-harassment-jobseeker-sexual-harassment-2026"]
    },
    {
      id: "source-mhlw-jobseeker-sexual-harassment-2026",
      title: "求職活動等をする方を守るために ― 求職者等に対するセクシュアルハラスメント対策の新ルール",
      type: "government",
      typeLabel: "一次資料・厚生労働省／求職者等セクシュアルハラスメント防止措置",
      authority: "厚生労働省",
      publishedAt: "2026-09-01",
      url: "https://www.mhlw.go.jp/web_magazine/series/20260901.html",
      importance: "最高",
      whyImportant: "2026年10月1日から義務化される求職者等へのセクシュアルハラスメント防止措置について、採用面接・説明会・インターン・実習・OB/OG訪問・SNSを含む対象範囲と、事業主の具体的な措置を公式に整理した実務資料。",
      topics: ["customer-harassment-jobseeker-sexual-harassment-2026"]
    }
  ];

  const existingIds = new Set((window.SOURCE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.SOURCE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = (window.SOURCE_DATA || []).concat(fresh);
})();

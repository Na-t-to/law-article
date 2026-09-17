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
  const event = "regional-public-transport-act-2026-amendment";
  const amendmentSource = "source-mlit-regional-transport-amendment-2026";
  const historySource = "source-diet-regional-transport-law-history-2026";
  const effectiveSource = "source-mlit-regional-transport-effective-date-2026";

  const additions = [
    {
      id: "article-mlit-regional-transport-effective-date-20260901",
      title: "地域公共交通の活性化及び再生に関する法律の一部を改正する法律の施行期日を定める政令を閣議決定",
      publisher: "国土交通省",
      author: "国土交通省",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-17",
      url: "https://www.mlit.go.jp/report/press/sogo12_hh_000539.html",
      sourceType: "primary",
      sourceLabel: "一次資料・国土交通省／施行期日",
      status: "adopted",
      summary: "2026年6月10日公布の地域交通法改正について、施行期日を2026年10月16日とする政令の閣議決定を公表した資料。自動車地域旅客運送サービス再構築事業、連携促進団体、モビリティデータ利活用等の新制度について、施行準備の確定期限を示す。",
      whyImportant: [
        "改正地域交通法の施行日が2026年10月16日で確定したことを一次資料から確認できる",
        "法案・公布段階の『年内施行』という説明を、確定した施行スケジュールへ更新できる",
        "交通事業者や施設送迎者、自治体と連携する民間事業者の契約・労務・データ対応の準備期限を置ける"
      ],
      audience: ["交通事業者の法務・事業担当", "自治体連携を行う企業法務", "施設送迎を行う事業者", "データ・モビリティ事業担当"],
      audienceReason: "2026年10月16日の施行に向け、新制度の対象業務と契約・労務・データ対応を確定スケジュールで準備するため。",
      categories: ["契約", "労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: ["regional-transport-2026-effective-date-preparation"],
      primarySourceIds: [effectiveSource, amendmentSource, historySource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [effectiveSource],
      legacyReformInference: false,
      whatChanged: "地域交通法2026年改正を新テーマとして追加し、2026年10月16日の確定施行日を法改正イベントへ登録した。"
    },
    {
      id: "article-tmi-regional-transport-amendment-20260710",
      title: "改正地域交通法の要点と実務対応 ―『交通空白』による年間約10兆円の経済損失の解消に向けて―",
      publisher: "TMI総合法律事務所",
      author: "粟井勇貴",
      publishedAt: "2026-07-10",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18559.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／地域交通法改正",
      status: "adopted",
      summary: "改正地域交通法を、自治体主導の自動車地域旅客運送サービス再構築事業、モビリティデータ提供義務、連携促進団体の3本柱から整理し、施設送迎車両・ドライバーの提供時の労務・保険、自治体へのデータ提供時の利用目的・加工・費用・管理責任を契約実務へ落とす解説。",
      whyImportant: [
        "一次資料の制度説明を、ホテル・福祉施設・学校等が保有する送迎資源の提供という具体的な企業実務へ落としている",
        "ドライバー提供について、業務委託の指揮命令関係や複数事業者での労働時間管理、自動車保険まで確認すべき点を示す",
        "モビリティデータについて、提供対象・加工方法・費用・利用目的・管理主体をデータ提供契約で定めるという実務対応を提示している"
      ],
      audience: ["企業法務", "交通・モビリティ事業担当", "施設運営事業者", "人事・労務", "データ契約担当"],
      audienceReason: "新制度を許認可の説明だけで終わらせず、車両・人員・保険・データ契約の社内実装へ変換するため。",
      categories: ["契約", "労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: [
        "regional-transport-2026-reconstruction-project",
        "regional-transport-2026-facility-shuttle-cooperation",
        "regional-transport-2026-mobility-data",
        "regional-transport-2026-coordination-body"
      ],
      primarySourceIds: [amendmentSource, historySource, effectiveSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [historySource],
      legacyReformInference: false,
      whatChanged: "新テーマに、地域輸送資源の提供、労務・保険、モビリティデータ提供契約まで具体化した実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

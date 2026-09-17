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

  const topic = "economic-security-promotion-act-2026-oesa";
  const event = "economic-security-promotion-jbic-2026-amendment";
  const guideline = "source-cao-oesa-basic-guideline-20260911";
  const cabinet = "source-kantei-economic-security-cabinet-20260911";
  const gazette = "source-kanpo-economic-security-effective-20260916";

  const additions = [
    {
      id: "article-cao-oesa-basic-guideline-20260911",
      title: "特定海外事業の促進に関する基本指針",
      publisher: "内閣府",
      author: "内閣府",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.cao.go.jp/keizai_anzen_hosho/suishinhou/doc/kihonshishin5.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・内閣府／OESA基本指針",
      status: "adopted",
      summary: "2026年9月11日に閣議決定されたOESAの基本指針。国際輸送網の強靱化、特定社会基盤役務に用いる海外施設・設備、重要技術の海外展開等を対象として、特定海外事業計画の認定基準、実施体制・資金調達、情報管理、国内への裨益、人権尊重等を具体化する。",
      whyImportant: [
        "OESAが支援する海外事業の範囲を、制度創設法の抽象的な説明から具体的な対象類型へ落とし込んでいる",
        "認定では事業内容だけでなく、実施体制・資金調達とOESA情報の適切な管理体制を確認することが明示されている",
        "重要技術の流出防止、国内への裨益、人権尊重等を案件形成時の実務チェックへ変換できる"
      ],
      audience: ["企業法務", "海外事業・投資部門", "経済安全保障担当", "財務・資金調達担当"],
      audienceReason: "OESAの認定申請・事業計画・情報管理・JBIC支援の準備を確定した基本指針から設計するため。",
      categories: ["危機管理・コンプライアンス", "契約", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: ["economic-security-oesa-jbic-2026"],
      primarySourceIds: [guideline, cabinet],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [guideline, cabinet, gazette],
      legacyReformInference: false,
      whatChanged: "OESAについて、対象事業・認定基準・情報管理を『基本指針待ち』から確定した施行準備ルールへ更新した。"
    },
    {
      id: "article-kanpo-economic-security-effective-20260916",
      title: "改正経済安全保障推進法・JBIC法の施行期日政令（令和8年政令第288号）",
      publisher: "官報",
      author: "国",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.kanpo.go.jp/20260916/20260916g00206/20260916g002060000f.html",
      sourceType: "primary",
      sourceLabel: "一次資料・官報／施行期日政令・関係政省令等",
      status: "adopted",
      summary: "令和8年政令第288号により、改正法附則1条本文および3号に掲げる規定の施行日を2026年9月18日と定めた官報。OESA・JBIC関係、特定重要物資に不可欠な役務、官民協議会等の主要部分が施行段階へ移る一方、医療分野の基幹インフラ追加は別段階に残る。",
      whyImportant: [
        "公布後6か月・1年以内とされていた主要改正規定の具体的施行日を2026年9月18日と確定できる",
        "OESAを将来制度ではなく施行直前の実装対象として扱える",
        "医療分野の基幹インフラ追加まで同日に施行されるわけではないことを段階施行として切り分けられる"
      ],
      audience: ["企業法務", "経済安全保障担当", "海外事業・投資部門", "サプライチェーン担当"],
      audienceReason: "主要改正部分の施行日を確定し、9月18日以降の制度適用と医療分野の未施行部分を混同しないため。",
      categories: ["危機管理・コンプライアンス", "契約", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: ["economic-security-critical-services-2026", "economic-security-oesa-jbic-2026", "economic-security-public-private-council-2026", "economic-security-medical-infrastructure-2026"],
      primarySourceIds: [gazette, cabinet, guideline],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [gazette],
      legacyReformInference: false,
      whatChanged: "2026年改正の主要部分について、相対期日から2026年9月18日という確定施行日へ更新した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-atsumi-misconduct-investigation-process-20260507",
      title: "調査委員会を立ち上げて行う不正調査は何のために行うのか、不正調査はどのように行われるのか",
      publisher: "渥美坂井法律事務所・外国法共同事業",
      author: "山上秀明",
      publishedAt: "2026-05-07",
      collectedAt: "2026-09-21",
      url: "https://www.aplawjapan.com/publications/20260507",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／不正調査・調査委員会",
      status: "adopted",
      summary: "企業不祥事の不正調査を、徹底した事実調査、真因分析、再発防止、ステークホルダーへの説明を通じた信頼・持続可能性の回復という目的から整理し、内部調査・外部専門家を交えた調査・第三者委員会等の体制選択から、証拠収集、電子データの保全・デジタルフォレンジック、ヒアリング、通報窓口、調査報告書まで一連の調査実務を解説する。",
      whyImportant: [
        "第三者委員会を置くかどうかを名称の問題ではなく、不正の規模・社会的影響・経営陣関与と、必要な独立性・専門性から考える入口になる",
        "調査委員・補助者、事務局、対象資料、電子データ、ヒアリング、通報・アンケート、報告書という実査プロセスが一続きで整理され、初動から報告までの設計に使いやすい",
        "捜査・行政調査が処罰や行政目的に向く一方、企業自身の調査では類似案件、リスク管理体制、根本原因、再発防止まで確認する必要があるという役割分担を明確にしている"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "取締役・監査役", "危機管理"],
      audienceReason: "不正疑義の初動で、どの調査体制を採用し、証拠保全・ヒアリング・原因分析・再発防止・報告をどの順序で設計するかを具体化するため。",
      categories: ["危機管理・コンプライアンス", "会社法・ガバナンス"],
      relatedTopics: ["corporate-misconduct-investigations"],
      relatedIssues: [
        "misconduct-investigation-purpose-scope",
        "misconduct-investigation-structure-independence",
        "misconduct-investigation-evidence-reporting"
      ],
      primarySourceIds: ["source-jpx-misconduct-response-principles-20160224"],
      legacyReformInference: false,
      whatChanged: "バックフィル／不祥事調査の目的、調査体制の選択、証拠・フォレンジック・ヒアリング、報告書までを横断して追える実務解説を追加した。"
    },
    {
      id: "article-atsumi-external-counsel-corporation-client-20260915",
      title: "不正調査における外部弁護士の役割―法人を依頼者とするという視点",
      publisher: "渥美坂井法律事務所・外国法共同事業",
      author: "土居文代",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-21",
      url: "https://www.aplawjapan.com/publications/20260915",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／不正調査・外部弁護士",
      status: "adopted",
      summary: "役員・経営陣が関係する事案や通報案件、クロスボーダー企業の本社・日本法人間で認識差がある事案など、複数の利害が交錯する不正調査で、外部弁護士が特定の経営陣・通報者・社内部門ではなく法人それ自体を依頼者として調査・助言する視点を整理する。調査スコープ、ヒアリング、資料保全、結果報告に加え、経営判断の失敗と法的・コンプライアンス上の問題を区別する考え方まで扱う。",
      whyImportant: [
        "誰が調査を依頼したかに引っ張られず、法人として必要な事実・証拠・法的リスクを整理するという、利害対立下の調査の軸を明確にしている",
        "短期的な組織防衛や特定人物の責任追及を先に置かず、調査スコープ・ヒアリング・資料保全・報告・経営助言の各場面で法人の長期的利益を基準にする実装視点がある",
        "結果的に失敗した経営判断と、重要事実の秘匿、虚偽説明、利益相反、承認プロセスの意図的潜脱、法令・重大な社内規程違反等を分けて評価する視点を示している"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "取締役・監査役", "海外本社・グループ法務"],
      audienceReason: "役員関与や通報、親子会社・本社間の利害対立がある調査で、外部弁護士の役割、調査の中立性、法的評価と経営判断の境界を設計するため。",
      categories: ["危機管理・コンプライアンス", "会社法・ガバナンス"],
      relatedTopics: ["corporate-misconduct-investigations"],
      relatedIssues: [
        "misconduct-investigation-structure-independence",
        "misconduct-investigation-evidence-reporting",
        "misconduct-investigation-counsel-conflicts"
      ],
      primarySourceIds: ["source-jpx-misconduct-response-principles-20160224"],
      legacyReformInference: false,
      whatChanged: "新規採用／不正調査の一般的な手順に加え、組織内の利害対立下で外部弁護士が法人を依頼者として独立性を維持し、経営判断と法的問題を切り分ける実務視点を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "corporate-misconduct-investigations");
  if (!topic) return;
  const ids = [
    "article-atsumi-misconduct-investigation-process-20260507",
    "article-atsumi-external-counsel-corporation-client-20260915"
  ];
  const existing = Array.isArray(topic.referenceArticleIds) ? topic.referenceArticleIds.slice() : [];
  for (const id of ids) {
    if (!existing.includes(id) && (window.ARTICLE_DATA || []).some((article) => article && article.id === id)) existing.push(id);
  }
  topic.referenceArticleIds = existing;
})();

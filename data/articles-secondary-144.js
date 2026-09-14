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

  const articles = [
    {
      id: "article-eiko-daifuku-employee-invention-2026",
      title: "知財判例解説－職務発明規定の『不合理性』が問われた事例～ダイフク事件（知財高裁令和8年判決）～",
      publisher: "弁護士法人栄光 栄光綜合法律事務所",
      author: "井上 彰",
      publishedAt: "2026-06-01",
      collectedAt: "2026-09-14",
      url: "https://www.eiko.gr.jp/law/%E7%9F%A5%E8%B2%A1%E5%88%A4%E4%BE%8B%E8%A7%A3%E8%AA%AC%E3%80%80%EF%BC%8D%E8%81%B7%E5%8B%99%E7%99%BA%E6%98%8E%E8%A6%8F%E5%AE%9A%E3%81%AE%E3%80%8C%E4%B8%8D%E5%90%88%E7%90%86%E6%80%A7%E3%80%8D%E3%81%8C/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・判例実務解説／職務発明・特許法35条",
      status: "adopted",
      summary: "2026年3月24日の知財高裁ダイフク事件を、特許法35条5項の『協議・開示・意見聴取』の三つの手続要素から整理する実務解説。規程策定時に未入社だった従業員についても、入社後研修、社内システムでの常時閲覧、後の細則改定への意見提出等を踏まえて協議に準じる状況が認められた点や、報奨金支給通知で対象発明と問い合わせ窓口を示したことが意見聴取の機会として評価された点を、職務発明規程の運用チェック項目へ落としている。",
      whyImportant: [
        "判決の事実認定を、規程策定時の協議、継続的な開示、個別支給時の意見聴取という社内運用の三段階へ整理しており、職務発明規程の点検に使いやすい",
        "規程策定前に未入社だった従業員について、入社時研修・常時閲覧・後続改定への参加を組み合わせて手続の合理性を支えるという実務上の示唆を具体化している",
        "支給額そのものだけでなく、協議記録、最新版規程へのアクセス、支給通知における対象発明と問い合わせ先の明示を紛争予防の証拠設計として位置付けている"
      ],
      audience: ["企業法務", "知的財産部門", "人事・労務", "研究開発管理"],
      audienceReason: "職務発明規程の文言だけでなく、策定・周知・支給通知・問い合わせ対応まで含む運用記録を、特許法35条5項の不合理性判断に沿って点検するため。",
      categories: ["知的財産", "労務", "契約"],
      relatedTopics: ["employee-inventions-patent-act-35"],
      relatedIssues: ["employee-invention-reasonable-benefit-process", "employee-invention-prehire-rules"],
      primarySourceIds: ["source-patent-act-current-employee-invention", "source-jpo-employee-invention-guideline-2016", "source-iphc-daifuku-employee-invention-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／ダイフク事件について、協議・開示・意見聴取を職務発明規程の具体的な運用・記録へ落とす実務解説を補完した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "early-business-recovery-act-2025",
    "title": "早期事業再生法・2026年施行",
    "eventType": "new_law",
    "lawId": "early-business-recovery-act",
    "lawLabel": "早期事業再生法",
    "relatedTopics": ["early-business-recovery"],
    "effectiveDateStatus": "confirmed",
    "effectiveDates": ["2026-12-11"],
    "effectiveDateSourceIds": ["source-meti-early-business-recovery-rules-2026"],
    "matchSourceIds": ["source-meti-early-business-recovery-rules-2026"],
    "sourceIds": ["source-meti-early-business-recovery-rules-2026"],
    "articleIds": ["article-meti-early-business-recovery-2026", "article-amt-early-business-recovery-2026", "article-not-early-business-recovery-2026"]
  }
]);

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

  const articles = [
    {
      id: "article-not-early-business-recovery-2026",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐、髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-14",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／事業再生・倒産・早期事業再生法",
      status: "adopted",
      summary: "2026年12月11日施行の早期事業再生手続について、法・施行規則・告示・Q&Aを横断し、金融機関だけでなくファイナンス・リース債権者、信用保証協会、外国金融機関、担保付債権の取扱いを具体化する実務解説。一時停止要請と支払停止・期限の利益・預金口座の取扱い、対象債権者の漏れ、手続中の資金供給、事業再生ADR等との使い分けまで整理している。",
      whyImportant: [
        "多数決で変更できる非保全債権と、対象債権ではあるが多数決で変更できない保全債権を分け、担保評価・個別合意まで実務に落としている",
        "ファイナンス・リース、保証協会付き融資、外国金融機関、対象債権者の追加・漏れといった債権者リスト作成時の事故ポイントを具体的に拾っている",
        "一時停止要請を支払停止・期限の利益・預金凍結等の契約・銀行実務へ接続し、施行前に財務・法務が確認すべき論点を明確にしている",
        "反対債権者やリース債権の調整、事業再生ADRからの移行など、本手続を選択する場面を比較できる"
      ],
      audience: ["企業法務", "財務・経理", "事業再生担当", "金融機関", "リース会社", "経営企画"],
      audienceReason: "新制度の条文を読むだけでは見えにくい対象債権者の境界、一時停止、担保、手続選択を、実際の再生案件の準備項目へ落とすため。",
      categories: ["事業再生・金融", "契約", "会社法・ガバナンス"],
      relatedTopics: ["early-business-recovery"],
      relatedIssues: ["ebr-eligibility", "ebr-financial-claims", "ebr-voting-court", "ebr-process"],
      primarySourceIds: ["source-meti-early-business-recovery-rules-2026"],
      reformEventId: "early-business-recovery-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-meti-early-business-recovery-rules-2026"],
      whatChanged: "整理変更なし／対象債権者、担保付債権、一時停止、事業再生ADR等との使い分けを具体化する実務解説を補完した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

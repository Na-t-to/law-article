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

  const additions = [{
    id: "article-ppc-privacy-rulemaking-basic-1-2026",
    title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則の整備に向けた基本的な考え方（案）について①",
    publisher: "個人情報保護委員会",
    author: "個人情報保護委員会事務局",
    publishedAt: "2026-09-16",
    collectedAt: "2026-09-16",
    url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
    sourceType: "primary",
    sourceLabel: "一次資料・政令／規則整備検討資料",
    status: "adopted",
    summary: "2026年改正個人情報保護法の施行に向けた下位ルール整備の第1弾。本人同意が不要となる場合、16歳未満の子供の個人情報、顔特徴データ等の特定生体個人情報について、政令・委員会規則・ガイドラインで具体化する際の基本的な考え方と論点を示す。家族によるホテル予約や3-Dセキュアを例に同意不要例外を検討し、特定生体個人情報については現段階で顔特徴データを対象候補とし、カメラ等の周辺での分かりやすい周知を検討している。",
    whyImportant: [
      "2026年8月の下位ルール全体像から一段進み、本人同意不要例外・子供・生体情報について具体的な規則候補と判断軸が示された",
      "契約履行のため『必要やむを得ない』場合について、必要性に加えて他の手段では契約目的を達成できない場合に限定するという解釈が明示され、同意取得フローの見直しに直結する",
      "特定生体個人情報の対象候補と周知方法の方向が具体化され、顔認証・AIカメラ等の表示、本人請求、運用設計を施行前に準備できる"
    ],
    audience: ["企業法務", "プライバシー・個人情報担当", "情報セキュリティ", "プロダクト・EC担当", "AI・データ活用担当"],
    audienceReason: "改正法の施行前に、同意取得・第三者提供、子供向けサービス、顔認証・カメラのデータフローと画面・掲示・社内判断基準を具体化するため。",
    categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
    relatedTopics: ["personal-information-protection-2026-amendment"],
    relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"],
    primarySourceIds: ["source-ppc-privacy-rulemaking-basic-1-2026"],
    reformEventId: "privacy-law-2026-amendment",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-rulemaking-basic-1-2026"],
    legacyReformInference: false,
    whatChanged: "施行準備を具体化／2026年改正法について、本人同意不要例外、16歳未満の子供、特定生体個人情報の政令・規則整備に向けた判断軸と具体例が示された。改正法自体は成立・公布済みだが未施行で、下位ルールはなお検討段階。"
  }];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

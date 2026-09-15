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

  const addition = {
    id: "article-mhlw-disability-employment-rare-disease-review-2026",
    title: "第142回労働政策審議会障害者雇用分科会 資料1『手帳を所持していない難病患者の位置付けについて』",
    publisher: "厚生労働省",
    author: "労働政策審議会障害者雇用分科会",
    publishedAt: "2026-09-14",
    collectedAt: "2026-09-15",
    url: "https://www.mhlw.go.jp/stf/newpage_76196.html",
    sourceType: "primary",
    sourceLabel: "一次資料／労働政策審議会／障害者雇用率制度見直し・検討中",
    status: "adopted",
    summary: "2026年9月15日の第142回障害者雇用分科会で、障害者手帳を所持していない難病患者のうち就労困難性が手帳所持者と同等以上の者を個別判定し、まず実雇用率の算定対象とする方向が具体化された。判定は難病の医療費助成上の重症度、就労支援職による就労困難性アセスメント、医師意見書等を用い、都道府県労働局の審査委員会で行う案で、JEEDの2026～2028年度調査研究等を踏まえて詳細設計する段階である。制度は未成立・未施行である。",
    whyImportant: [
      "手帳を所持していない難病患者が当然に実雇用率へ算入されるのではなく、就労困難性の個別判定を前提とする制度案であることを一次資料で確認できる",
      "医学的重症度、就労支援職のアセスメント、医師意見書、都道府県労働局の審査委員会という判定プロセスが具体化し、今後の人事実務への影響を見通しやすくなった",
      "短時間労働者の0.5カウントや更新制の方向も示される一方、現行制度は変わっていないため、企業が実雇用率を先取りして計算する誤りを防げる"
    ],
    audience: ["企業法務", "人事・障害者雇用担当", "労務・コンプライアンス担当"],
    audienceReason: "現行の法定雇用率2.7％・実雇用率算定ルールと、難病患者に関する将来の制度案を分離し、採用・雇用管理・将来対応を準備するため。",
    categories: ["労務", "危機管理・コンプライアンス"],
    relatedTopics: ["disability-employment-business-quality-review"],
    relatedIssues: ["disability-employment-rate-rare-disease-individual-assessment"],
    primarySourceIds: ["source-mhlw-disability-employment-rare-disease-review-2026"],
    reformEventId: "disability-employment-rate-rare-disease-2026-review",
    reformStageAtPublication: "proposal",
    reformStageSourceIds: ["source-mhlw-disability-employment-rare-disease-review-2026"],
    legacyReformInference: false,
    whatChanged: "制度検討具体化／手帳を所持していない難病患者について、就労困難性の個別判定を経た実雇用率算入、判定プロセス、短時間労働者の算定、更新制の方向が示された。"
  };

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(addition.id) && !existingUrls.has(normalizeUrl(addition.url))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([addition]);
  }
})();
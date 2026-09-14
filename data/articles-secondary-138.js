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

  const article = {
    id: "article-meti-family-governance-guidance-2026",
    title: "「ファミリーガバナンス・ガイダンス」の公表について",
    publisher: "経済産業省",
    author: "経済産業省",
    publishedAt: "2026-06-05",
    collectedAt: "2026-09-14",
    url: "https://www.meti.go.jp/press/2026/06/20260605001/20260605001.html",
    sourceType: "primary",
    sourceLabel: "一次資料・行政ガイダンス／ファミリーガバナンス",
    status: "adopted",
    summary: "経済産業省が、ファミリービジネスの持続的成長を後押しするため、研究会・ヒアリング・パブリックコメントを経て取りまとめた最終ガイダンス。ファミリー内と、ファミリーと株主等のステークホルダーとの間で合意する事項を中心に、理念・価値観、意思決定、所有と経営への関与、承継、運用・見直しを整理する。主な対象は非上場の中堅規模のファミリービジネスだが、上場・非上場や規模を問わず参考となる任意規範として位置付けられている。",
    whyImportant: [
      "既存テーマの判断軸となっている経産省ガイダンス本体をARTICLEとして直接読めるようにし、二次解説だけに依存せず一次資料へ遡れる",
      "ガイダンス本体に加え、参考資料とチェックリストへの導線があり、理念・意思決定・所有と経営・承継・株主等との関係・運用見直しを自社で棚卸しする起点になる",
      "内容は任意であり各社の株主構成やステークホルダーとの関係等に応じて最適な形を検討するものだと明示されており、法的義務や画一的なベストプラクティスとして過度に読み込むことを防げる"
    ],
    audience: ["企業法務", "経営企画", "オーナー企業・ファミリービジネス経営者", "事業承継担当"],
    audienceReason: "ファミリー憲章、株主間契約、承継方針、経営参加ルール等を検討する際に、公式ガイダンスの射程と任意性を確認しながら自社のガバナンスを棚卸しするため。",
    categories: ["会社法・ガバナンス", "M&A", "契約"],
    relatedTopics: ["family-business-governance"],
    relatedIssues: [
      "family-governance-scope-voluntary",
      "family-governance-values-decision",
      "family-governance-ownership-succession",
      "family-governance-operation-review"
    ],
    primarySourceIds: ["source-meti-family-governance-guidance-2026"],
    legacyReformInference: false,
    whatChanged: "一次資料補完／ファミリーガバナンス・ガイダンス本体をARTICLEとして追加し、既存の実務解説と一次資料を往復できるようにした。"
  };

  const existingArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = existingArticles.concat([article]);
  }
})();

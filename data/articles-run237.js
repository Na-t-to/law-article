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
      id: "article-amt-board-effectiveness-third-party-20241028",
      title: "第三者を起用して行う取締役会の実効性評価のポイント ―インタビューまで行う場合の着手のタイミングにも留意―",
      publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
      author: "塚本英巨",
      publishedAt: "2024-10-28",
      collectedAt: "2026-09-21",
      url: "https://www.amt-law.com/insights/newsletters/publication_0029373_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／取締役会の実効性評価",
      status: "adopted",
      summary: "第三者を起用した取締役会の実効性評価について、アンケート項目の更新、評点・自由記載からの課題抽出、対応策の提示、取締役会での説明に加え、インタビューを組み合わせる場合の質問設計、対象者、実施順、記録、報告書、年間スケジュールまで具体的に整理する。2024年時点のCGコード補充原則4-11③を前提とするため条番号・体系は2026年改訂後の現行コードとして扱わず、金融庁の2026年取締役会機能強化事例集と併せて、実効性評価の運用方法を設計するための実務資料として位置付ける。",
      whyImportant: [
        "アンケートを毎年同じ設問で回すのではなく、会社法・CGコードの改訂、近時のガバナンス論点、他社例を踏まえて質問を追加・整理・統合し、本質的な課題を抽出するという評価設計の視点が具体的である",
        "評点と自由記載だけでは課題の深掘りに限界があることを前提に、アンケート結果からインタビュー質問を再構成し、第三者が記録・報告書・改善策までつなぐプロセスを示している",
        "4月・5月の取締役会で評価結果を議論する場合は年末・年明け頃から着手する必要があるなど、第三者選定、全取締役・監査役への面談、取りまとめまで含む現実的な年間スケジュールを検討できる",
        "2026年改訂コード後は旧補充原則番号をそのまま現行規範として読めない一方、金融庁の2026年事例集が引き続き実効性評価の設計・結果活用を扱っており、評価プロセスの具体化という点で現在も参照価値がある"
      ],
      audience: ["企業法務", "コーポレート・ガバナンス担当", "取締役会事務局", "取締役・監査役"],
      audienceReason: "取締役会の実効性評価を形式的なアンケートで終わらせず、質問設計、第三者の役割、インタビュー、課題抽出、改善策、結果討議まで一連のプロセスとして見直すため。",
      categories: ["会社法・ガバナンス"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: ["cg-code-board-function"],
      primarySourceIds: ["source-fsa-board-function-casebook-2026", "source-jpx-cg-code-2026"],
      legacyReformInference: false,
      whatChanged: "バックフィル／取締役会の実効性評価について、第三者を使うアンケート・インタビュー・報告・年間スケジュールを具体化する実務解説を追加した。2024年時点の旧コード番号は現行規範として扱わず、2026年公式事例集と接続して読む。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "corporate-governance-code-2026");
  if (!topic) return;
  const id = "article-amt-board-effectiveness-third-party-20241028";
  const existing = Array.isArray(topic.referenceArticleIds) ? topic.referenceArticleIds.slice() : [];
  if (!existing.includes(id) && (window.ARTICLE_DATA || []).some((article) => article && article.id === id)) existing.push(id);
  topic.referenceArticleIds = existing;
})();

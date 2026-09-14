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
      id: "article-mext-life-medical-research-ethics-amendment-2026",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      publisher: "文部科学省",
      author: "文部科学省 / 厚生労働省 / 経済産業省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-15",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      sourceType: "primary",
      sourceLabel: "一次資料・改正指針／施行情報",
      status: "adopted",
      summary: "2026年8月27日に告示された「人を対象とする生命科学・医学系研究に関する倫理指針」の改正について、改正理由、2026年12月1日の施行、経過措置、関連資料への導線をまとめた文部科学省の公式公表資料。個人情報保護法との重複による複雑化と、多機関共同研究の一括倫理審査・審査品質の課題を改正背景として示し、施行前から実施中の研究については個人情報保護関連法令・ガイドラインの遵守を前提に従前の例によることができる経過措置を明示する。",
      whyImportant: [
        "改正指針の施行日を2026年12月1日と公式に確認でき、新旧ルールの切替時点を確定できる",
        "個人情報保護法との重複整理と、多機関共同研究の倫理審査適正化という改正目的を一次資料から確認できる",
        "実施中研究の経過措置が示されており、既存研究を一律に新ルールへ切り替えるのではなく案件単位で移行管理できる"
      ],
      audience: ["企業法務", "個人情報・データガバナンス", "製薬・医療機器・ヘルスケア", "研究開発・倫理審査"],
      audienceReason: "研究データの利用・提供、共同研究、同意文書・倫理審査の運用を2026年12月施行に合わせて更新し、実施中研究の経過措置も正確に管理するため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["life-medical-research-ethics-guideline-2026"],
      relatedIssues: ["life-medical-ethics-scope-transition", "life-medical-ethics-privacy-alignment", "life-medical-ethics-multicenter-review"],
      primarySourceIds: ["source-mext-life-medical-research-ethics-guideline-2026", "source-mext-life-medical-research-ethics-amendment-2026"],
      reformEventId: "life-medical-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mext-life-medical-research-ethics-amendment-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／2026年12月1日施行の生命・医学系研究倫理指針改正について、個人情報保護法との役割分担、IC・オプトアウト、既存研究の経過措置、多機関共同研究の対応を整理した。"
    },
    {
      id: "article-tmi-life-medical-research-ethics-amendment-2026",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "溝端 俊介",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／生命・医学系研究倫理・個人情報",
      status: "adopted",
      summary: "2026年改正の生命・医学系研究倫理指針について、特にインフォームド・コンセントと個人情報の取扱いを実務目線で解説する。仮名加工情報・匿名加工情報・個人関連情報を個人情報保護法に委ねる整理、従来の「文書IC」「口頭IC」「適切な同意」をICへ集約する見直し、既存試料・情報の利用・提供でオプトアウトを用いる場面、研究者の異動等に伴う無断持出しへの注意、外国提供まで具体的に追える。",
      whyImportant: [
        "改正前の複雑な同意類型と改正後のIC／オプトアウト中心の構造を対比しており、研究手続の変更点を把握しやすい",
        "既存試料・情報について、個人情報保護法上の例外、包括同意の射程、取得時の適切な手続を組み合わせた判定フローを具体化している",
        "研究者の異動、他機関提供、外国提供など、一次資料だけでは運用へ落としにくいデータ移転場面の注意点を整理している"
      ],
      audience: ["企業法務", "個人情報・プライバシー", "製薬・医療機器・ヘルスケア", "大学・研究機関", "研究開発"],
      audienceReason: "改正指針を研究計画書・説明同意文書・オプトアウト・共同研究時のデータ提供手続へ具体的に落とし込むため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["life-medical-research-ethics-guideline-2026"],
      relatedIssues: ["life-medical-ethics-privacy-alignment", "life-medical-ethics-consent-optout", "life-medical-ethics-existing-data-sharing", "life-medical-ethics-scope-transition"],
      primarySourceIds: ["source-mext-life-medical-research-ethics-guideline-2026", "source-mext-life-medical-research-ethics-amendment-2026"],
      reformEventId: "life-medical-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mext-life-medical-research-ethics-amendment-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／改正指針のIC・オプトアウト、加工情報等と個人情報保護法の役割分担、既存試料・情報の二次利用・機関間提供を実務フローとして補完した。"
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

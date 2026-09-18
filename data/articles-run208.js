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
      id: "article-uchisaiwai-rpm-guideline-20260727",
      title: "メーカーの販売価格指定はどこまで許されるか｜流通・取引慣行ガイドライン改正",
      publisher: "内幸町国際総合法律事務所",
      author: "櫻町直樹",
      publishedAt: "2026-07-27",
      collectedAt: "2026-09-18",
      url: "https://uchisaiwai-law.com/n.sakura/blog/article20260727.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・内幸町国際総合法律事務所／指定価格制度と契約・費用負担",
      status: "adopted",
      summary: "2026年7月の流通・取引慣行ガイドライン改正を、メーカーの販売制度・契約実務へ落とした解説。売買・委託販売等の契約名ではなく、返品、在庫、契約不適合、滅失・毀損、代金回収不能の危険と、保管・配送・広告等の費用を誰が実際に負担するかが重要と整理する。メーカーが費用項目と負担方法を明示し、不足について販売店が協議を申し出られる仕組みを設けることや、取引基本契約・覚書・返品規程と実運用を突き合わせる実務チェックまで示す。",
      whyImportant: [
        "一次資料の『危険・費用をメーカーが負担する』という基準を、返品規程、費用精算、在庫・代金回収等の契約・運用項目へ具体化している",
        "費用項目をメーカーが一方的に決めるのではなく、販売店から不足を申し出て協議する手続まで含めた運用設計を確認できる",
        "ガイドライン改正に法令上の施行日があるわけではなく、独禁法の運用上の考え方を明確化したものだという境界も整理している"
      ],
      audience: ["企業法務", "販売店・代理店契約担当", "営業・流通担当", "経理・費用精算", "コンプライアンス担当"],
      audienceReason: "指定価格型の施策を契約条項だけでなく返品・費用・在庫・決済の実運用へ落とし込み、一次資料の要件をチェック可能な項目へ変換するため。",
      categories: ["独占禁止法・競争法", "契約", "危機管理・コンプライアンス"],
      relatedTopics: ["distribution-resale-price"],
      relatedIssues: ["rpm-principle", "rpm-risk-cost-exception"],
      primarySourceIds: [
        "source-jftc-distribution-guideline-2026",
        "source-jftc-distribution-guideline-current-20260708",
        "source-jftc-rpm-faq-20260708"
      ],
      reformEventId: "distribution-guideline-rpm-2026-amendment",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jftc-distribution-guideline-2026", "source-jftc-distribution-guideline-current-20260708"],
      legacyReformInference: false,
      whatChanged: "既存テーマ補完／ガイドラインの抽象基準を、返品・在庫・費用・協議・契約書と実運用の突合という企業実務へ落とし込む解説を追加した。"
    },
    {
      id: "article-ai-ip-principle-code-filing-20260908",
      title: "生成AI知財プリンシプル・コードの届出開始日及び届出様式",
      publisher: "内閣官房 知的財産戦略本部",
      author: "内閣府 知的財産戦略推進事務局",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-18",
      url: "https://www.cas.go.jp/jp/seisakukaigi/titeki2/ai_principle_code/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・運用開始案内",
      status: "adopted",
      summary: "2026年8月25日に確定した生成AI知財プリンシプル・コードについて、内閣府への受入れ届出を2026年10月26日から開始すると確定し、届出様式を公表した公式案内。届出先等は開始日に案内するとされているため、コードの法的性質を変えるものではないが、受入れを検討する生成AI開発者・提供者にとって準備期限を具体化する運用更新である。",
      whyImportant: [
        "これまで未確定だった受入れ届出の開始日が2026年10月26日に確定した",
        "公式様式が公表され、原則ごとのコンプライ・オア・エクスプレイン方針と対外説明を届出実務へ接続できる",
        "届出先等は10月26日に案内予定であり、確定事項と今後の運用情報を分けて追える"
      ],
      audience: ["企業法務", "知財担当", "AIサービス提供事業者", "AIガバナンス担当"],
      audienceReason: "プリンシプル・コードの受入れを検討する事業者が、抽象的な『今後開始』ではなく具体的な日程と公式様式を前提に社内承認・開示・届出準備を進めるため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: ["generative-ai-ip-principle-code"],
      relatedIssues: ["ai-ip-code-acceptance"],
      primarySourceIds: ["source-ai-ip-principle-code-2026", "source-ai-ip-principle-code-filing-20260908"],
      legacyReformInference: false,
      whatChanged: "既存テーマ更新／受入れ届出の開始日が2026年10月26日に確定し、公式様式が公表されたため、未確定だった運用準備を具体化した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

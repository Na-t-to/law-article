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
      id: "article-jftc-distribution-guideline-rpm-20260708",
      title: "『流通・取引慣行に関する独占禁止法上の指針』の改正について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-07-08",
      collectedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/jul/260708_soushi_ryutori.html",
      sourceType: "primary",
      sourceLabel: "一次資料・公正取引委員会／流通・取引慣行ガイドライン改正",
      status: "adopted",
      summary: "公正取引委員会が2026年7月8日に最終化した流通・取引慣行ガイドライン改正。再販売価格維持行為は原則として違法という基本を維持しつつ、売買形式であっても、メーカーが流通業者においてユーザーへの販売に至るまでに生じる危険・費用を自ら負担し、流通業者が単なる取次ぎとして機能して実質的にメーカーが販売していると認められる場合には、価格指示が通常問題とならないという考え方と具体例を追加した。公式Q&Aも同時に追加されている。",
      whyImportant: [
        "『指定価格制度』と呼ばれる販売施策について、再販売価格維持の原則禁止を崩さずに例外が成立する実質条件を一次資料で確認できる",
        "価格を指定できるかを契約名称ではなく、ユーザー販売までの危険・費用を誰が負担しているかという取引実態から評価する基準になる",
        "メーカー・卸・小売・ECの販売制度設計を、希望小売価格の運用、返品、在庫、物流、広告、代金回収等まで横断して見直す出発点になる"
      ],
      audience: ["メーカー法務・コンプライアンス", "営業企画・チャネル政策", "EC・マーケティング", "卸・小売との契約担当"],
      audienceReason: "販売価格を含むチャネル政策を設計・見直す際に、2026年改正後の公取委の公式な判断枠組みと例外条件を確認するため。",
      categories: ["独占禁止法・下請・フリーランス", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["resale-price-maintenance-distribution-2026"],
      relatedIssues: ["rpm-general-rule-2026", "rpm-specified-price-exception-2026"],
      primarySourceIds: [
        "source-jftc-distribution-guideline-rpm-20260708",
        "source-jftc-distribution-guideline-current-20260708",
        "source-jftc-rpm-faq-20260708"
      ],
      reformEventId: "jftc-distribution-guideline-rpm-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jftc-distribution-guideline-rpm-20260708", "source-jftc-distribution-guideline-current-20260708"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／再販売価格維持の原則禁止と、2026年7月に明確化された『単なる取次ぎ』の例外を分け、指定価格型販売施策の危険・費用負担を追える棚を追加した。"
    },
    {
      id: "article-jftc-luxottica-commitment-20260806",
      title: "ルックスオティカジャパン株式会社から申請があった確約計画の認定について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-08-06",
      collectedAt: "2026-09-18",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/aug/260806_dai1_LOJ/",
      sourceType: "primary",
      sourceLabel: "一次資料・公正取引委員会／Ray-Ban・Oakley再販売価格維持・確約計画",
      status: "adopted",
      summary: "Ray-Ban・Oakleyブランドのサングラスについて、推奨小売価格以上での販売、オンライン販売で実質的な購入価格を推奨小売価格未満にするポイント・クーポン等の付与を行わないこと、発売開始から一定期間オンライン販売を行わないこと等を小売業者へ要請した行為について、公取委が再販売価格拘束違反の疑いを認め、確約計画を認定した事例。認定された措置には行為の取りやめ、取締役会決議、取引先・消費者・役職員への周知、研修・監査、第三者監視、5年間の報告等が含まれる。本認定は違反そのものの認定ではない。",
      whyImportant: [
        "販売価格の直接指定だけでなく、ポイント・クーポンによる実質値引きやオンライン販売開始時期の制限が同じ販売政策の中で問題化した具体例を確認できる",
        "他の小売業者からの苦情等を契機に要請へ従わない販売店を把握して再度要請する運用まで含め、営業・モニタリング実務上のリスクを具体化できる",
        "確約手続における違反被疑行為と最終的な違反認定を区別しつつ、求められたコンプライアンス改善措置の水準を把握できる"
      ],
      audience: ["メーカー法務・コンプライアンス", "営業・営業企画", "EC・マーケティング", "内部監査"],
      audienceReason: "ブランド・価格政策を営業やEC運用へ落とす際に、価格・値引き・販売チャネルへの介入がどのような形で独禁法リスクとして現れるかを具体的に点検するため。",
      categories: ["独占禁止法・下請・フリーランス", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["resale-price-maintenance-distribution-2026"],
      relatedIssues: ["rpm-general-rule-2026", "rpm-online-sales-commitment-2026"],
      primarySourceIds: ["source-jftc-luxottica-commitment-20260806", "source-jftc-distribution-guideline-current-20260708"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／価格、ポイント・クーポン、オンライン販売時期の要請が組み合わさった2026年確約事例を追加し、販売政策の実装段階での独禁法リスクを具体化した。"
    },
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
      audience: ["メーカー法務", "販売店・代理店契約担当", "営業企画", "経理・費用精算", "コンプライアンス"],
      audienceReason: "指定価格型の施策を契約条項だけでなく返品・費用・在庫・決済の実運用へ落とし込み、一次資料の要件をチェック可能な項目へ変換するため。",
      categories: ["独占禁止法・下請・フリーランス", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["resale-price-maintenance-distribution-2026"],
      relatedIssues: ["rpm-general-rule-2026", "rpm-specified-price-exception-2026"],
      primarySourceIds: [
        "source-jftc-distribution-guideline-rpm-20260708",
        "source-jftc-distribution-guideline-current-20260708",
        "source-jftc-rpm-faq-20260708"
      ],
      reformEventId: "jftc-distribution-guideline-rpm-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jftc-distribution-guideline-rpm-20260708", "source-jftc-distribution-guideline-current-20260708"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／ガイドライン改正の抽象基準を、返品・在庫・費用・協議・契約書と実運用の突合という企業実務へ落とし込む解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

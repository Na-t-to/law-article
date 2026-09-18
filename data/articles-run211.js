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
      id: "article-caa-hope-group-door-to-door-order-20260918",
      title: "訪問販売業者【株式会社HOPE Group】に対する行政処分について",
      publisher: "消費者庁",
      author: "消費者庁・関東経済産業局",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-18",
      url: "https://www.caa.go.jp/notice/entry/047504/",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／暮らしのレスキューサービスの訪問販売行政処分",
      status: "adopted",
      summary: "水回り修理・害虫駆除等の訪問販売を行うHOPE Groupについて、関東経済産業局が9か月の一部業務停止命令等を行った特定商取引法の執行事例。ネット広告の『550円（税込）～』『980円～』等を見た消費者が自宅への訪問を依頼したものの、具体的な役務内容・金額を把握しておらず低額の取引を想定していたところ、訪問後に10万円・30万円を大きく超える契約を勧誘された事例が示されている。契約書面の記載不備、クーリング・オフに関する不実告知、返金義務の一部履行拒否、支払のためのATMへの連行も処分原因とされた。",
      whyImportant: [
        "消費者から訪問を依頼したという外形だけで訪問販売規制から外れるわけではなく、訪問依頼時に具体的な役務内容・金額を把握していたか、どの程度の取引意思があったかという実際の導線を確認すべきことが分かる",
        "低額のネット広告から訪問見積り、高額な現地契約、クーリング・オフ、返金までを一続きのコンプライアンス工程として点検する必要性を、具体的な執行事例で確認できる",
        "自社従業員だけでなく再委託・再々委託先の作業員まで再発防止策の周知対象とされており、訪問サービスの委託先管理に直結する"
      ],
      audience: ["消費者向けサービスの法務・コンプライアンス", "住宅修理・害虫駆除等の訪問サービス事業者", "EC・デジタルマーケティング", "CS・解約対応", "委託先管理担当"],
      audienceReason: "ネット広告から訪問依頼、現地見積り・契約、支払、クーリング・オフ・返金へ移る取引導線について、広告・営業・契約書面・解約対応・委託先管理を横断して点検するため。",
      categories: ["消費者法・表示", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["digital-commerce-tokusho-review"],
      relatedIssues: ["dt-ad-triggered-visit-sales", "dt-cancellation-contract"],
      primarySourceIds: ["source-caa-hope-group-door-to-door-order-20260918"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／PIO-NET分析で増加が示された『ネット広告起点で消費者が訪問を依頼する取引』について、2026年9月18日の具体的な特商法執行事例を追加。制度見直しの進捗ではなく、現行法の適用・運用事例として整理する。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
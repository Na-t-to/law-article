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
      id: "article-mhlw-short-hours-insured-status-20260914",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-18",
      url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／被保険者資格通知",
      status: "adopted",
      summary: "個人事業主等を勤務時間が極端に短い正規型労働者として雇用する事案について、健康保険・厚生年金保険の被保険者資格を契約形式ではなく常用的使用関係の実態で判断し、報酬の実質と業務の実質の双方を欠く場合は原則として資格を有しないとする取扱いを明確化した。",
      whyImportant: [
        "『正社員』『雇用契約』という名称だけでは被保険者資格が決まらず、労働時間・勤務内容・報酬の流れを含む実態で判断することを公式に明確化した",
        "労働者から徴収する会費等が報酬を上回る、又は自己負担した委託費等が実質的に報酬原資となるケースなど、形式加入を疑う具体例が示された",
        "極端に短い労働時間、自己研さん・情報共有・互助・自己事業の形式的な業務化など、経常的な労務提供に当たるかの確認ポイントを人事・社会保険実務へ落とせる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務・コンプライアンス"],
      audienceReason: "短時間雇用や個人事業主・フリーランスとの兼業形態で、社会保険加入の形式だけを整えるのではなく、常用的使用関係の実態と資格取得の適否を確認するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["social-insurance-short-time-workers-2026"],
      relatedIssues: ["social-insurance-formal-qualification-substance-2026"],
      primarySourceIds: ["source-mhlw-short-hours-insured-status-20260914"],
      legacyReformInference: false,
      whatChanged: "社会保険の適用拡大とは別に、極端に短い勤務時間・会費徴収等を伴う雇用について、被保険者資格を常用的使用関係の実態で判断する行政解釈を追加した。"
    },
    {
      id: "article-mhlw-product-safety-pledge-osha-20260910",
      title: "製品安全誓約（日本国）の対象に「労働安全衛生法」が加わります",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-18",
      url: "https://www.mhlw.go.jp/stf/newpage_76064.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／製品安全誓約",
      status: "adopted",
      summary: "オンラインマーケットプレイスの自主的な製品安全対応である『製品安全誓約（日本国）』の対象に、労働安全衛生法が規制する一部製品を追加した。石綿含有製品や譲渡等制限機械等も、安全ではない製品の削除・監視等を行う自主的取組の射程に入る。",
      whyImportant: [
        "製品安全4法だけでなく、労働安全衛生法上の禁止・安全基準違反製品までオンラインマーケットプレイスの安全管理対象が広がった",
        "石綿を重量0.1％を超えて含有する製品や譲渡等制限機械等など、出品審査・監視で見るべき対象類型を具体化できる",
        "製品安全誓約は法的枠組みを超える官民協働の自主的取組であり、法定義務とプラットフォームの自主対応を混同しない整理に使える"
      ],
      audience: ["EC・マーケットプレイス法務", "製品安全・品質保証", "コンプライアンス"],
      audienceReason: "オンラインマーケットプレイスの出品審査・危険製品監視について、法定規制と製品安全誓約上の自主的対応の双方を整理するため。",
      categories: ["消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: ["product-safety-four-acts-ecommerce-child-products"],
      relatedIssues: ["product-safety-dpf-measures"],
      primarySourceIds: ["source-mhlw-product-safety-pledge-osha-20260910"],
      legacyReformInference: false,
      whatChanged: "製品安全誓約の対象に労働安全衛生法上の一部規制製品が追加され、オンラインマーケットプレイスの自主的な危険製品対応の射程が広がった。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

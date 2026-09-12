(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat(additions.filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "product-safety-four-acts-ecommerce-child-products";
  const pledgeSourceId = "source-meti-product-safety-pledge-2023";
  const expansionSourceId = "source-caa-product-safety-pledge-expansion-2026";
  const platformIssueId = "product-safety-dpf-measures";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: pledgeSourceId,
      title: "リコール製品や安全ではない製品から消費者を守るための日本版「製品安全誓約」がスタートしました",
      type: "guideline",
      typeLabel: "官民協働・自主的取組／オンラインマーケットプレイス製品安全",
      authority: "経済産業省 / 消費者庁 等",
      publishedAt: "2023-06-29",
      url: "https://www.meti.go.jp/press/2023/06/20230629001/20230629001.html",
      importance: "高",
      whyImportant: "オンラインマーケットプレイス上のリコール製品・安全ではない製品について、法定規制とは別に、関係省庁と主要プラットフォーム事業者が出品削除、再出品防止、情報提供等を官民協働で運用する製品安全誓約の制度趣旨と12項目の取組を確認できる。",
      topics: [topicSlug]
    },
    {
      id: expansionSourceId,
      title: "製品安全誓約（日本国）に新たに加わる対象製品（安全ではない製品）について",
      type: "guideline",
      typeLabel: "官民協働・自主的取組／対象製品拡張",
      authority: "消費者庁 / 厚生労働省",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/product_safety_pledge/assets/consumer_safety_cms205_260910_04.pdf",
      importance: "高",
      whyImportant: "製品安全誓約の対象が労働安全衛生法所管製品へ拡張され、石綿含有製品等や、試験等で構造規格不適合が確認された一定の譲渡等制限機械等についても、署名オンラインマーケットプレイスの自主的な出品削除・再出品防止等の運用対象となることを確認できる。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.title = "製品安全4法・越境EC／子供PSC・製品安全誓約";
    topic.summary = "2025年12月25日施行の製品安全4法改正を中心に、海外事業者の直接販売と国内管理人、取引デジタルプラットフォームへの危害防止要請、子供用特定製品・子供PSCマーク、中古品特例、2026年の対象製品追加に加え、法的枠組みを超える官民協働の自主的取組である製品安全誓約を、法定規制と区別して整理する。";
    topic.lastUpdated = "2026-09-12";
    topic.lastVerified = "2026-09-12";
    topic.sourceIds = addUniqueString(addUniqueString(topic.sourceIds, pledgeSourceId), expansionSourceId);
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "製品安全誓約・出品削除／再出品防止運用");

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "製品安全誓約（日本国）は、関係省庁と主要なオンラインマーケットプレイス運営事業者が2023年6月29日に策定した、製品安全に係る法的枠組みを超えた官民協働の自主的取組であり、リコール製品・安全ではない製品の出品削除、再出品防止等を含む12項目の取組を署名事業者が実施する。"
      );
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "2026年9月10日、製品安全誓約の対象に、労働安全衛生法所管の石綿含有製品（疑いを含む）と、厚生労働省の試験等で構造規格不適合が確認された一定の譲渡等制限機械等が追加された。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "改正製品安全4法に基づく取引デジタルプラットフォームへの危害防止要請と、製品安全誓約に基づく署名事業者の自主的取組は別の規律層である。法定義務・行政要請と、自主的な出品削除・再出品防止・KPI管理を混同せず、一つの製品安全運用へ接続して管理する。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "製品安全誓約の署名オンラインマーケットプレイスは、対象製品リスト、規制当局からの削除要請の受付、出品削除の期限管理、再出品・悪質販売者への措置、KPI集計を更新し、製品安全4法以外の所管法令に基づく『安全ではない製品』も同じ運用で追えるようにする。"
      );
    }

    if (Array.isArray(topic.issues)) {
      topic.issues = topic.issues.map((issue) => {
        if (issue.id !== platformIssueId) return issue;
        return {
          ...issue,
          conclusion: "改正製品安全4法に基づく行政の危害防止要請と、製品安全誓約に基づく署名事業者の自主的な出品削除・再出品防止等を区別しつつ、危険製品の把握から出品停止・記録・再出品防止まで一連の運用として整える。",
          sourceIds: addUniqueString(addUniqueString(issue.sourceIds, pledgeSourceId), expansionSourceId)
        };
      });
    }
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-meti-product-safety-pledge-launch-2023",
      title: "リコール製品や安全ではない製品から消費者を守るための日本版「製品安全誓約」がスタートしました",
      publisher: "経済産業省",
      author: "経済産業省 / 消費者庁・総務省消防庁・国土交通省",
      publishedAt: "2023-06-29",
      collectedAt: "2026-09-12",
      url: "https://www.meti.go.jp/press/2023/06/20230629001/20230629001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・官民協働の自主的取組／製品安全誓約",
      status: "adopted",
      summary: "関係省庁と主要オンラインマーケットプレイス運営事業者が、リコール製品・安全ではない製品から消費者を保護するために2023年6月29日に開始した日本版『製品安全誓約』の公式資料。法的枠組みを超えた自主的取組であり、BtoC・CtoC双方のオンラインマーケットプレイスを対象に、出品削除、再出品防止、規制当局との情報連携等を12項目の取組として運用する。",
      whyImportant: [
        "オンラインマーケットプレイスの製品安全対応には、改正製品安全4法の法定規制とは別に、製品安全誓約という官民協働の自主的な運用層があることを確認できる",
        "リコール製品・安全ではない製品の出品削除だけでなく、再出品防止、販売者への情報提供、規制当局との連携までプラットフォーム運用の骨格を把握できる",
        "BtoCモールだけでなくCtoCのフリーマーケット・オークションも含むため、EC・プラットフォーム法務の製品安全フローを設計する基礎資料になる"
      ],
      audience: ["EC・オンラインマーケットプレイス担当", "企業法務", "品質保証・製品安全担当", "危機管理・コンプライアンス担当"],
      audienceReason: "法定の製品安全規制と、自主的な出品削除・再出品防止等を分けながら、オンラインマーケットプレイスの実際の製品安全運用を設計するため。",
      categories: ["消費者法・表示", "契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [platformIssueId],
      primarySourceIds: [pledgeSourceId],
      whatChanged: "バックフィル／改正製品安全4法とは別に、オンラインマーケットプレイスの出品削除・再出品防止等を官民協働で運用する製品安全誓約を、既存のプラットフォーム製品安全論点へ追加した。"
    },
    {
      id: "article-caa-product-safety-pledge-expansion-2026",
      title: "製品安全誓約（日本国）に新たに加わる対象製品（安全ではない製品）について",
      publisher: "消費者庁 / 厚生労働省",
      author: "消費者庁 消費者安全課 / 厚生労働省",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-12",
      url: "https://www.caa.go.jp/policies/policy/consumer_safety/product_safety_pledge/assets/consumer_safety_cms205_260910_04.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・製品安全誓約／労働安全衛生法所管製品の追加",
      status: "adopted",
      summary: "製品安全誓約の対象に、労働安全衛生法が規制する製品を2026年9月10日から追加した消費者庁・厚生労働省の公表資料。石綿含有製品（疑いを含む）に加え、厚生労働省の試験等で構造規格不適合が確認された防じん・防毒マスク、保護帽、墜落制止用器具等の一定の譲渡等制限機械等が、署名オンラインマーケットプレイスの自主的な出品削除・再出品防止等の対象に加わる。",
      whyImportant: [
        "製品安全誓約が製品安全4法の対象だけでなく、労働安全衛生法所管の製品へ実際に拡張されたことを確認できる",
        "プラットフォームの出品審査・削除ルールは、消費者向け製品安全法令だけでなく複数省庁・複数法令の『安全ではない製品』情報を取り込む運用が必要になる",
        "法的義務そのものの拡張ではなく、自主的取組の対象拡張であるため、法定規制と自主対応を誤って同一視せずに管理できる",
        "対象製品追加後のKPI集計も2026年9月10日から開始され、削除運用の実効性を継続的に追う入口になる"
      ],
      audience: ["EC・オンラインマーケットプレイス担当", "企業法務", "品質保証・製品安全担当", "危機管理・コンプライアンス担当"],
      audienceReason: "オンラインマーケットプレイスの禁止・制限商品リスト、行政からの削除要請、再出品防止、KPI管理を、新たに追加された労働安全衛生法所管製品まで更新するため。",
      categories: ["消費者法・表示", "契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [platformIssueId],
      primarySourceIds: [expansionSourceId, pledgeSourceId],
      whatChanged: "テーマ更新／製品安全誓約の対象が労働安全衛生法所管製品へ拡張されたため、ECプラットフォームの製品安全対応を法定の危害防止要請と自主的な出品削除・再出品防止の二層で整理した。"
    }
  ]);
})();

(() => {
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "fair-subcontract-transactions");
  if (topic) {
    topic.lastUpdated = "2026-09-09";
    topic.lastVerified = "2026-09-09";
    addUnique(topic.sourceIds, [
      "source-jftc-toriteki-text-2025",
      "source-jftc-toriteki-operating-standards-2025",
      "source-jftc-toridoll-recommendation-2026"
    ]);
    addUnique(topic.practicalImpacts, ["値引き・割戻金・手数料等の控除ルール"]);
    addUnique(topic.currentSummary?.facts, [
      "取適法第5条第1項第3号は、中小受託事業者の責めに帰すべき理由がないのに発注時に定めた製造委託等代金を減額することを禁止しており、減額の名目・方法・金額の多少を問わない。2026年9月9日のトリドールホールディングスに対する勧告では、『システム利用料』名目で代金の1.1%を一律控除した行為が、2025年12月までの委託について旧下請法、2026年1月以降の委託について取適法の代金減額禁止に違反するとされた。"
    ]);

    if (!(topic.issues || []).some((item) => item.id === "toriteki-price-reduction")) {
      topic.issues.push({
        "id": "toriteki-price-reduction",
        "title": "発注後の控除・割戻金は代金減額に当たるか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "中小受託事業者の責めに帰すべき理由がないのに、発注時に定めた代金から『協力金』『販売促進費』『システム利用料』『リベート』等の名目で額を差し引くことは、名目・方法・金額の多少を問わず原則として代金減額の禁止に当たる。割戻金を設ける場合は、運用基準が示す事前合意・書面等への記録・発注時の明示との関連付け・設定の合理性などを満たすか確認する。",
        "exception": "中小受託事業者の責めに帰すべき理由がある場合の相当額の減額や、運用基準が示す要件を満たす合理的なボリュームディスカウント等は、代金減額に当たらない場合がある。",
        "uncertain": "個別の控除・相殺・割戻金が許容されるかは、発注時の合意と明示、控除の目的・算定根拠、受託側の利益への影響、受託側の責めに帰すべき事情等を具体的に確認する必要がある。",
        "sourceIds": [
          "source-toriteki-law-2026",
          "source-jftc-toriteki-text-2025",
          "source-jftc-toriteki-operating-standards-2025",
          "source-jftc-toridoll-recommendation-2026"
        ]
      });
    }

    const enforcement = (topic.issues || []).find((item) => item.id === "toriteki-enforcement");
    if (enforcement) addUnique(enforcement.sourceIds, ["source-jftc-toridoll-recommendation-2026"]);
  }
})();

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-jftc-toriteki-text-2025",
    "title": "中小受託取引適正化法テキスト（令和7年11月）",
    "type": "guideline",
    "typeLabel": "法令テキスト・運用資料",
    "authority": "公正取引委員会・中小企業庁",
    "publishedAt": "2025-11-01",
    "url": "https://www.jftc.go.jp/toriteki/r7text.pdf",
    "importance": "最高",
    "whyImportant": "取適法の適用対象、義務・禁止事項、違反事例、運用基準等を一冊で確認できる公式テキスト。代金減額について、名目・方法・金額の多少を問わず発注後の減額が問題になることや、実際の違反名目を具体例から確認できる。",
    "topics": ["fair-subcontract-transactions"]
  },
  {
    "id": "source-jftc-toriteki-operating-standards-2025",
    "title": "製造委託等に係る中小受託事業者に対する代金の支払の遅延等の防止に関する法律の運用基準",
    "type": "guideline",
    "typeLabel": "運用基準",
    "authority": "公正取引委員会",
    "publishedAt": "2025-10-01",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2025/oct/251001_toriteki1-4.pdf",
    "importance": "最高",
    "whyImportant": "2026年1月施行の取適法について禁止行為の具体的な解釈と違反事例を示す公式基準。代金減額では、協力金・リベート・システム利用料等の名目による控除や、限定的に許容される割戻金の条件を確認する基準になる。",
    "topics": ["fair-subcontract-transactions"]
  },
  {
    "id": "source-jftc-toridoll-recommendation-2026",
    "title": "株式会社トリドールホールディングスに対する勧告について",
    "type": "enforcement",
    "typeLabel": "行政処分・勧告",
    "authority": "公正取引委員会",
    "publishedAt": "2026-09-09",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    "importance": "高",
    "whyImportant": "『システム利用料』名目で37事業者の代金から一律1.1%を控除した行為について、旧下請法と現行取適法の代金減額禁止をまたいで勧告された最新事例。名目ではなく実質で控除を管理し、新旧法の適用時点を取引単位で分ける必要性を確認できる。",
    "topics": ["fair-subcontract-transactions"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-jftc-toridoll-price-reduction-2026",
    "title": "株式会社トリドールホールディングスに対する勧告について",
    "publisher": "公正取引委員会",
    "author": "公正取引委員会",
    "publishedAt": "2026-09-09",
    "collectedAt": "2026-09-09",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・取適法／勧告（代金減額）",
    "status": "adopted",
    "summary": "トリドールホールディングスが、卸売業者を介して食品の製造を委託した37事業者について、2024年8月から2026年7月まで『システム利用料』名目で代金の1.1%を一律に控除したとして、公正取引委員会が2026年9月9日に勧告した事案。2025年12月までの委託には改正前の下請法、2026年1月以降の委託には現行の取適法が適用され、現行法分については控除額に加えて遅延利息の支払も求められた。",
    "whyImportant": [
      "『システム利用料』という費用名目でも、受託側の責めに帰すべき理由なく発注時の代金から一律控除すれば代金減額として執行対象になることを確認できる",
      "37事業者に対する一律1.1%控除という運用から、個別契約だけでなく発注・支払システム上の自動控除ルールそのものを点検する必要性が分かる",
      "2025年12月までの委託は旧下請法、2026年1月以降の委託は取適法という経過関係を同一事案で確認できる",
      "取適法施行後の減額分について遅延利息まで勧告対象となっており、違反把握後の返金範囲を検討する実務材料になる"
    ],
    "audience": ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
    "audienceReason": "仕入・製造委託の支払時に手数料、システム費、協力金等を控除する運用がないかを、契約・発注・経理システムまで通して点検するため。",
    "categories": ["契約", "独占禁止法・競争法", "危機管理・コンプライアンス"],
    "relatedTopics": ["fair-subcontract-transactions"],
    "relatedIssues": ["toriteki-price-reduction", "toriteki-enforcement"],
    "primarySourceIds": ["source-jftc-toridoll-recommendation-2026", "source-toriteki-law-2026"],
    "whatChanged": "論点更新／取適法の代金減額について、『システム利用料』名目の一律控除が実際に勧告対象となった最新事例と、新旧法の適用時点・原状回復の扱いを追加した。"
  },
  {
    "id": "article-businesslawyers-toriteki-price-reduction-2026",
    "title": "取適法が禁止する「代金の減額」に当たるのはどのような場合か",
    "publisher": "BUSINESS LAWYERS",
    "author": "山田 真吾（弁護士法人大江橋法律事務所）",
    "publishedAt": "2026-02-02",
    "collectedAt": "2026-09-09",
    "url": "https://www.businesslawyers.jp/practices/135",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／取適法・代金減額",
    "status": "adopted",
    "summary": "取適法5条1項3号の代金減額禁止を、PB商品の製造委託と割戻金を題材に具体化した大江橋法律事務所の実務解説。協力金・販売促進費・リベート、遡及的な単価引下げ、取引先都合のキャンセル、端数切捨て等が減額として問題となることを整理し、ボリュームディスカウントについては、事前合意・書面等への記録・発注時の明示との関連付け・数量増加と受託側利益を踏まえた合理性という運用基準上の条件まで説明している。",
    "whyImportant": [
      "『控除の名目』ではなく、発注時に決めた代金を受託側の責任なく後から減らしているかを見るという実務上の判断順序が分かる",
      "協力金、販促費、リベート、遡及単価、キャンセル、端数切捨てなど、経理・購買で起こりやすい控除を具体例で点検できる",
      "割戻金を一律禁止として処理せず、運用基準が認める限定的なボリュームディスカウントの要件まで確認できる",
      "一次資料の長い運用基準を、PB商品の発注・価格設定という企業実務へ落としており、契約条件と支払システムを同時に見直しやすい"
    ],
    "audience": ["企業法務", "購買・調達", "経理・支払担当", "営業企画・PB商品担当"],
    "audienceReason": "発注後の値引き・手数料・協力金・割戻金を、取適法の代金減額禁止に照らして契約条件と支払処理の両面から設計するため。",
    "categories": ["契約", "独占禁止法・競争法"],
    "relatedTopics": ["fair-subcontract-transactions"],
    "relatedIssues": ["toriteki-price-reduction"],
    "primarySourceIds": ["source-toriteki-law-2026", "source-jftc-toriteki-text-2025", "source-jftc-toriteki-operating-standards-2025"],
    "whatChanged": "論点更新／代金減額の禁止を、控除名目・遡及単価・割戻金の具体例と、限定的に許容されるボリュームディスカウントの条件まで実務化する解説を追加した。"
  }
]);

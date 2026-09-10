(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "fair-subcontract-transactions";
  const enforcementSourceId = "source-jftc-toridoll-reduction-2026";
  const enforcementArticleId = "article-jftc-toridoll-reduction-2026";
  const complianceArticleId = "article-na-toriteki-compliance-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: enforcementSourceId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      type: "guideline",
      typeLabel: "勧告・執行事例",
      authority: "公正取引委員会",
      publishedAt: "2026-09-09",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      importance: "高",
      whyImportant: "旧下請法から取適法への移行期間をまたいで継続した代金減額について、旧法・新法それぞれの減額禁止を適用して勧告した最新の執行事例。システム利用料等の名目による一律控除を発注・支払フローで点検する材料になる。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.sourceIds = addUniqueString(topic.sourceIds, enforcementSourceId);
    const enforcementIssue = (topic.issues || []).find((issue) => issue.id === "toriteki-enforcement");
    if (enforcementIssue) enforcementIssue.sourceIds = addUniqueString(enforcementIssue.sourceIds, enforcementSourceId);
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: enforcementArticleId,
      title: "株式会社トリドールホールディングスに対する勧告について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-10",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
      sourceType: "primary",
      sourceLabel: "一次資料・取適法／旧下請法の勧告",
      status: "adopted",
      summary: "公正取引委員会がトリドールホールディングスに対し、食品の製造を委託した受注者37名の代金から「システム利用料」名目で例外なく一律1.1％を減額していたとして勧告した事例。2025年12月までの委託には改正前下請法、2026年1月以降の委託には取適法を適用し、旧法期間だけでも減額額は1億4741万1330円に上る。取適法期間分については減額分と遅延利息の支払も勧告された。",
      whyImportant: [
        "旧下請法から取適法への制度移行をまたぐ継続行為について、委託時期に応じて旧法・新法を分けて適用する実例を確認できる",
        "システム利用料という費用名目であっても、受注者の責めに帰すべき理由なく委託代金から一律控除する運用が減額禁止の問題になることを具体的に確認できる",
        "調達・購買だけでなく、受発注システム、経理の控除項目、手数料・協賛金等の自動差引きを横断して点検する必要性が分かる"
      ],
      audience: ["企業法務", "購買・調達", "経理・支払担当", "コンプライアンス"],
      audienceReason: "取適法対応を契約書の確認だけで終わらせず、請求・支払システムに設定された控除や受注者負担を実データで点検するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["toriteki-enforcement"],
      primarySourceIds: [enforcementSourceId],
      whatChanged: "整理変更なし／取適法の減額禁止について、システム利用料名目の一律控除と旧法・新法の移行期間をまたぐ最新の勧告事例を追加した。"
    },
    {
      id: complianceArticleId,
      title: "中小受託取引適正化法（旧下請法）のコンプライアンスを考える",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "木目田 裕",
      publishedAt: "2026-02-27",
      collectedAt: "2026-09-10",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_crisis_management_260227",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／取適法コンプライアンス",
      status: "adopted",
      summary: "取適法違反がなぜ現場で生じるかを、単なる改正項目の紹介ではなく内部統制の設計から掘り下げる実務解説。双方合意や経済合理性があっても形式的な禁止規定への適合確認を省けないことを前提に、発注・検収・支払システムや契約ひな形へのルール実装、継続研修、法務への相談導線、さらに金型等の保管を含む自社サプライチェーンの把握までを違反予防策として整理する。",
      whyImportant: [
        "『双方が合意した』『経済合理性がある』ことを安全確認の代替にしないという、取適法コンプライアンス特有の思考上の落とし穴を明確にしている",
        "発注・検収・支払のシステムやマニュアル、契約ひな形に規制を埋め込み、現場が個別判断しなくても違反を防げる統制へ落とす視点がある",
        "金型等の無償保管や長年続く取引を例に、法務部だけでなく自社事業・サプライチェーンの可視化が違反予防の前提になることを示している"
      ],
      audience: ["企業法務", "購買・調達", "コンプライアンス", "内部監査", "経理・業務システム担当"],
      audienceReason: "取適法対応を研修や契約チェックの単発施策ではなく、取引データ・承認・システム・サプライチェーンを含む継続的な内部統制として設計するため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["toriteki-enforcement", "toriteki-tooling-storage", "toriteki-scope"],
      primarySourceIds: ["source-toriteki-law-2026"],
      whatChanged: "整理変更なし／取適法について、形式的な禁止規定を発注・検収・支払システムへ埋め込むこと、継続研修と相談導線、サプライチェーン把握という違反予防の実装論を補強した。"
    }
  ]);
})();

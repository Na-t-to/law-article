(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  const topicSlug = "fair-subcontract-transactions";

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-na-toriteki-compliance-2026",
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

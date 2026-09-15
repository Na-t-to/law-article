(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const consumerSource = (window.SOURCE_DATA || []).find((source) => source && source.id === "source-caa-consumer-contract-interim-draft-2026");
  if (consumerSource) {
    consumerSource.whyImportant = "消費者の多様な脆弱性、継続的契約の解約妨害・更新・変更に加え、解約料について消費者契約法9条1項1号の立証責任等に関するA案・B案と説明制度拡充を示す、2026年9月10日の正式な中間取りまとめ。現時点では検討会の政策文書であり成立法ではない。";
  }

  const consumerArticle = (window.ARTICLE_DATA || []).find((article) => article && article.id === "article-caa-consumer-contract-interim-draft-2026");
  if (consumerArticle) {
    consumerArticle.summary = "消費者庁検討会が2026年9月10日に公表した正式な中間取りまとめ。消費者の多様な脆弱性への配慮、契約拘束力からの解放、継続的契約の解約妨害・更新・変更に加え、解約料について消費者契約法9条1項1号の立証責任等に関するA案・B案と説明制度拡充を示す。制度選択は未確定で、現時点では成立法ではない。";
    consumerArticle.whyImportant = (consumerArticle.whyImportant || []).filter((text) => !String(text || "").includes("9条1項1号自体を今回は見直さず"));
    consumerArticle.whyImportant = addUnique(consumerArticle.whyImportant, "解約料は立証責任等についてA案・B案を併記しており、単純に『立証責任転換を見送った』とは整理できない");
    consumerArticle.whatChanged = "2026年9月10日の正式な中間取りまとめを再確認し、解約料についてA案・B案が併記されている点を反映して、従来の『9条1項1号自体を見直さない』という粗い整理を修正した。";
  }

  const digitalArticle = (window.ARTICLE_DATA || []).find((article) => article && article.id === "article-caa-digital-tokusho-interim-2026");
  if (digitalArticle) {
    digitalArticle.relatedIssues = addUnique(digitalArticle.relatedIssues, "dt-rescue-inspection-sales");
    digitalArticle.summary = "消費者庁検討会が2026年9月10日に公表した正式な中間取りまとめ。SNS・メール等のチャット勧誘、表示・UIによる意思決定誘導、契約内容の電子的提供・保存、解約導線、デジタルプラットフォームの役割に加え、レスキュー商法・点検商法等の訪問型取引への規律強化を示す。現時点で新たな規律が成立・施行したものではない。";
    digitalArticle.whyImportant = addUnique(digitalArticle.whyImportant, "レスキュー商法・点検商法について、低価格表示と現場価格の著しい乖離、意思確認前の作業着手、クーリング・オフ妨害等を具体的な規制候補として追える");
    digitalArticle.whatChanged = "正式な中間取りまとめの内容を再確認し、レスキュー商法・点検商法の訪問型取引規律を独立論点として接続した。";
  }
})();
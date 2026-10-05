// Correct two previously reviewed copyright timing distinctions.
// Evidence rechecked 2026-10-05; no theme-wide freshness claim.
(() => {
  if (window.__LAW_INDEX_HELD_COPYRIGHT_20261005__) return;
  const event = window.REFORM_EVENT_DATA.find((item) => item.id === "copyright-record-performance-communication-2026");
  const article = window.ARTICLE_DATA.find((item) => item.id === "article-bunka-unmanaged-works-handbook-2026");
  if (!event || event.effectiveDateStatus !== "relative" || event.effectiveDateNote !== "2026年6月24日公布／公布日から3年を超えない範囲内で政令で定める日") {
    throw new Error("Copyright commencement review baseline changed");
  }
  if (!article || article.publishedAt !== "2026-03-31" || article.reformStageAtPublication !== "effective") {
    throw new Error("Copyright handbook publication-stage baseline changed");
  }
  event.effectiveDateNote = "レコード演奏・伝達権の関係規定は、公布日（2026年6月24日）から3年を超えない範囲内で政令で定める日から施行。附則第4条（団体指定・二次使用料規程等の準備行為）と第5条（経過措置の政令委任）は公布日から施行。主要な二次使用料の支払義務が公布日から始まるものではない。";
  article.reformStageAtPublication = "finalized_pending";
  window.__LAW_INDEX_HELD_COPYRIGHT_20261005__ = true;
})();

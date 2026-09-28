(() => {
  if (window.__LAW_INDEX_RUN253_SOURCE_APPLIED__) return;
  window.__LAW_INDEX_RUN253_SOURCE_APPLIED__ = true;

  const addition = {
    id: "source-npa-jafic-annual-report-2025-dnfbp",
    title: "犯罪収益移転防止に関する年次報告書（令和7年）",
    type: "report",
    typeLabel: "一次資料・警察庁JAFIC／年次報告",
    authority: "警察庁 JAFIC",
    publishedAt: "2026-03-12",
    url: "https://www.npa.go.jp/news/release/2026/20260312001.html",
    importance: "高",
    whyImportant: "指定非金融業者・職業専門家（DNFBPs）を特集し、疑わしい取引の届出状況、業態別リスク、行政庁・特定事業者のAML/CFT対応を整理する一次資料。",
    topics: ["aml-kyc-criminal-proceeds"]
  };

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  if (!existing.some((item) => item && (item.id === addition.id || item.url === addition.url))) {
    window.SOURCE_DATA = existing.concat(addition);
  }
})();
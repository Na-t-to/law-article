// Official court PDF relocation verified by case number/date and HTTP 200.
// No legal proposition or verification date changes.
(() => {
  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((source) =>
    source.id === "source-ip-highcourt-dr-martens-position-mark-20230810"
      ? { ...source, url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-92311.pdf" }
      : source);
})();

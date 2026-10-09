// Same-document URL repairs verified on 2026-10-09. Applied after historical
// article deltas because articles-run246.js also appends court source records.
// Original URLs remain in metadata; no legal prose or freshness date changes.
(() => {
  const changes = [
    { key: "ARTICLE_DATA", id: "article-amt-critical-infrastructure-unified-standard-2026",
      previousUrl: "https://www.amt-law.com/insights/newsletters/ddrlc98_p/",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260904001_ja_001/" },
    { key: "SOURCE_DATA", id: "source-ip-highcourt-dr-martens-position-mark-20230810",
      previousUrl: "https://www.courts.go.jp/ip/app/files/hanrei_jp/311/092311_hanrei.pdf",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-92311.pdf" }
  ];
  // Validate every target before changing either array.
  for (const { key, id, previousUrl, url } of changes) {
    const rows = window[key];
    if (!Array.isArray(rows)) throw new Error(`Weekly URL repair: missing ${key}`);
    const matches = rows.filter((record) => record.id === id);
    if (matches.length !== 1) throw new Error(`Weekly URL repair: expected one ${id}`);
    if (![previousUrl, url].includes(matches[0].url)) throw new Error(`Weekly URL repair: unexpected previous URL for ${id}`);
    if (rows.some((record) => record.id !== id && record.url === url)) throw new Error(`Weekly URL repair would duplicate an article URL or source URL: ${id}`);
  }
  for (const { key, id, previousUrl, url } of changes) {
    window[key] = window[key].map((record) => record.id === id ? {
      ...record, url,
      previousUrls: [...new Set([...(record.previousUrls || []), previousUrl])]
    } : record);
  }
})();

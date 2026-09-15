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

  const additions = [{
    id: "article-fsa-ssbj-shk-practice-standard-designation-2026",
    title: "サステナビリティ開示基準を指定する件の一部改正（SSBJ実務対応基準第1号の追加）",
    publisher: "金融庁",
    author: "金融庁",
    publishedAt: "2026-09-15",
    collectedAt: "2026-09-16",
    url: "https://www.fsa.go.jp/news/r8/shouken/20260915/20260915.html",
    sourceType: "primary",
    sourceLabel: "一次資料／SSBJ・サステナビリティ法定開示",
    status: "adopted",
    summary: "金融庁が2026年9月15日に公布・同日適用したサステナビリティ開示基準指定告示の改正。SSBJが2026年6月11日までに公表した基準を指定対象とし、温対法のSHK制度が定める方法で測定・報告する温室効果ガス排出を用いて気候基準に従う場合の開示を扱う『サステナビリティ開示実務対応基準第1号』を追加した。",
    whyImportant: [
      "法定SSBJ開示で参照すべき指定基準の現行セットが2026年9月15日に更新されたことを一次資料で確認できる",
      "SHK制度で既に測定・報告するGHG排出データをSSBJ気候開示へ接続する際の制度上の入口が明確になった",
      "既存データの利用可能性と、SSBJ気候基準上の他の開示要求・開示統制を分けて設計する必要がある"
    ],
    audience: ["IR・開示", "サステナビリティ", "経理・財務", "法務", "環境・GX"],
    audienceReason: "法定SSBJ開示の準備において、SHK制度のGHG報告値をどの基準に基づき利用できるかを確認し、開示統制とデータ系統を設計するため。",
    categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス"],
    relatedTopics: ["ssbj-statutory-sustainability-disclosure"],
    relatedIssues: ["ssbj-current-standard", "ssbj-shk-practice-standard-2026"],
    primarySourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"],
    reformEventId: "ssbj-shk-practice-standard-2026-designation",
    reformStageAtPublication: "effective",
    reformStageSourceIds: ["source-fsa-ssbj-shk-practice-standard-designation-2026"],
    legacyReformInference: false,
    whatChanged: "既存テーマ更新／SSBJ実務対応基準第1号が2026年9月15日から法定の指定基準に追加されたため、現行基準とSHK制度のGHGデータを使う場合の整理を更新した。"
  }];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
(() => {
  const article = {
    id: "article-miyake-critical-infrastructure-safety-guideline-2026",
    title: "【動画解説・動画資料】重要インフラ・サイバーセキュリティ新ガイドライン2026～パブリックコメント結果を踏まえた「経営・法務・実務」の読み方",
    publisher: "三宅法律事務所",
    author: "渡邉雅之",
    publishedAt: "2026-09-13",
    collectedAt: "2026-09-13",
    url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E9%87%8D%E8%A6%81%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9%E3%83%BB%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／重要インフラ安全基準等策定ガイドライン",
    status: "adopted",
    summary: "国家サイバー統括室が2026年9月11日に策定した「重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン」とパブリックコメント結果を、経営・法務・実務の観点から読み解く解説。CISOの任命・権限と取締役会、クラウド・委託先・サプライチェーン・IT／OTの一体管理、検知・対応・復旧を含むレジリエンス、委託契約のサイバー条項、ランサムウェア、AIによる攻撃高速化、PQC対応まで、確定版を企業実務へ落とす観点を整理する。",
    whyImportant: [
      "確定した163頁のガイドラインを、取締役会・CISO・法務・現場が確認すべき実装論点へ圧縮している",
      "クラウド・委託先・サプライチェーン・IT／OTを分断せず、委託契約のサイバーセキュリティ条項まで一体で整理している",
      "「完全防御」ではなく重要サービスの維持・早期復旧という任務保証・レジリエンスの考え方を、経営責任と事故前ガバナンスへ接続している",
      "パブリックコメント後に追加・明確化された実務上のポイントまで確認でき、8月の案を前提とした解説より現在の対応検討に向く"
    ],
    audience: ["企業法務", "CISO・情報セキュリティ", "重要インフラ事業者", "IT・OT運用", "調達・委託先管理"],
    audienceReason: "2026年10月1日の施行予定を前に、分野別安全基準等への反映を待つだけでなく、取締役会・CISO・委託契約・サプライチェーン・復旧体制のギャップを先に洗い出すため。",
    categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
    relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
    relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
    primarySourceIds: ["source-nco-critical-infrastructure-unified-standard-2026"],
    reformEventId: "critical-infrastructure-unified-standard-2026",
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: ["source-nco-critical-infrastructure-unified-standard-2026"],
    whatChanged: "整理変更なし／9月11日に策定済みの安全基準等策定ガイドラインを、CISO・取締役会、クラウド／委託先、IT／OT、レジリエンス、契約条項、AI・PQCまで企業実務へ落とす参考解説を追加。"
  };

  const existing = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  if (!existing.has(article.id)) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(article);
})();

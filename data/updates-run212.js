(() => {
  const addition = {
    id: "update-critical-infrastructure-safety-guideline-2026-09-11",
    source: "source-nco-critical-infrastructure-safety-guideline-20260911",
    headline: "重要インフラ安全基準等策定ガイドラインが確定",
    publishedAt: "2026-09-11",
    type: "guideline-update",
    typeLabel: "施行準備",
    summary: "国家サイバー統括室が、8月の意見募集案を経て『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を2026年9月11日に確定した。重要インフラ統一基準とともに10月1日施行予定。",
    whatChanged: "『安全基準等策定ガイドラインは案段階で最終版待ち』だった整理を、9月11日確定・10月1日施行予定へ更新した。今後の確認対象は、各所管省庁・業界団体による分野別安全基準等への具体的反映と運用へ移る。",
    affectedTopics: ["cyber-countermeasures-critical-infrastructure"],
    affectedIssues: [
      {
        topic: "cyber-countermeasures-critical-infrastructure",
        issue: "cyber-critical-infrastructure-unified-standard",
        before: "安全基準等策定ガイドラインは2026年8月5日公表の案段階で、最終版を継続確認",
        after: "2026年9月11日に確定。重要インフラ統一基準とともに2026年10月1日施行予定"
      }
    ],
    before: "重要インフラ統一基準は確定していたが、安全基準等策定ガイドラインは案段階。",
    after: "統一基準と安全基準等策定ガイドラインの双方が確定し、2026年10月1日の施行へ移行。",
    keyPoints: [
      "安全基準等策定ガイドラインは2026年9月11日に確定",
      "重要インフラ統一基準とともに2026年10月1日施行予定",
      "次の追跡対象は各分野の安全基準等への反映と実運用"
    ],
    importance: "重要",
    tags: ["情報セキュリティ", "危機管理・コンプライアンス"],
    confidence: "fact"
  };

  if (!(window.UPDATE_DATA || []).some((item) => item?.id === addition.id)) {
    window.UPDATE_DATA = (window.UPDATE_DATA || []).concat([addition]);
  }
})();

(() => {
 const additions=[
  {
    "id": "article-ppc-security-guideline-draft-240000133",
    "title": "個人情報の安全管理措置、検知と被害拡大防止を明記へ：PPCがガイドライン改正案を公示",
    "publisher": "個人情報保護委員会",
    "author": "個人情報保護委員会事務局",
    "publishedAt": "2026-10-29",
    "collectedAt": "2026-11-23",
    "url": "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&id=240000133",
    "sourceType": "primary",
    "sourceLabel": "一次資料・意見募集／告示案",
    "status": "adopted",
    "summary": "個人情報保護委員会は10月29日、個人情報保護法ガイドライン（通則編）とマイナンバーガイドライン（事業者編・行政機関等編）の改正案を公示した。意見募集は11月27日23時59分まで。通則編の案では、技術的安全管理措置に不正アクセス等の早期検知と被害拡大防止を位置付け、具体的な手法の例を追加・整理する。",
    "whyImportant": [
      "通則編別添10-6(5)では、不正アクセス等の早期検知と被害拡大防止を講じる措置として明記する案。別添10-6(2)の多要素認証や、(5)のログ保管・分析等は手法の例示であり、全事業者に特定の手法や一律の保管期間を義務付ける趣旨ではない。",
      "施行時期：9月時点の資料では2027年4月を予定していたが、10月29日公示時の概要では可能な限り前倒しする方針。通則編の告示案の附則に具体的な月日は入っていない。",
      "実務上の示唆：法務・個人情報保護の担当者は情報セキュリティ担当と、今の検知・被害拡大防止の運用を確認し、告示の確定時に最終文と施行日を照合する。"
    ],
    "audience": [
      "企業法務",
      "個人情報保護担当",
      "情報セキュリティ担当"
    ],
    "audienceReason": "ガイドライン案の措置と手法例を区別し、既存の体制で点検すべき項目を把握するため。",
    "categories": [
      "個人情報",
      "情報セキュリティ",
      "危機管理・コンプライアンス"
    ],
    "relatedTopics": [
      "privacy-enforcement-breach-response"
    ],
    "relatedIssues": [
      "privacy-enforcement-safety-management",
      "privacy-incident-forensics-readiness"
    ],
    "primarySourceIds": [
      "source-ppc-security-guideline-draft-240000133-docket",
      "source-ppc-security-guideline-draft-240000133-general",
      "source-ppc-security-guideline-draft-240000133-overview"
    ],
    "reformEventId": "privacy-security-measures-guideline-review-2026-2027",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": [
      "source-ppc-security-guideline-draft-240000133-docket",
      "source-ppc-security-guideline-draft-240000133-general"
    ],
    "legacyReformInference": false,
    "whatChanged": "9月の検討資料に続く10月29日の意見募集を追加。旧資料の記述は当時のものとして維持し、既存イベントの現行施行予定の年月表示を外す。テーマ本文と確認日は変更しない。"
  }
];
 const rows=window.ARTICLE_DATA || [];
 for(const item of additions){
   const hits=rows.filter(x=>x.id===item.id);
   if(hits.length>1 || (hits.length===1 && JSON.stringify(hits[0])!==JSON.stringify(item)) || rows.some(x=>x.id!==item.id&&x.url===item.url)) throw Error('Conflicting PPC consultation item: '+item.id);
 }
 window.ARTICLE_DATA=[...rows,...additions.filter(i=>!rows.some(r=>r.id===i.id))];
})();

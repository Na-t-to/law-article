(() => {
 const additions=[
  {
    "id": "source-ppc-security-guideline-draft-240000133-docket",
    "title": "安全管理措置に関する個人情報保護法ガイドライン（通則編）等の改正案の意見募集",
    "type": "government_material",
    "typeLabel": "一次資料・意見募集",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-10-29",
    "url": "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&id=240000133",
    "importance": "高",
    "whyImportant": "通則編と特定個人情報ガイドライン2編の意見募集。公示日と受付締切日時を確認できる。",
    "topics": [
      "privacy-enforcement-breach-response"
    ]
  },
  {
    "id": "source-ppc-security-guideline-draft-240000133-general",
    "title": "個人情報の保護に関する法律についてのガイドライン（通則編）の一部を改正する告示（案）",
    "type": "government_material",
    "typeLabel": "一次資料・告示案／新旧対照表",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-10-29",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000323102",
    "importance": "高",
    "whyImportant": "通則編別添の改正案。技術的安全管理措置の規定と手法の例示、施行日が空欄の附則を確認できる。",
    "topics": [
      "privacy-enforcement-breach-response"
    ]
  },
  {
    "id": "source-ppc-security-guideline-draft-240000133-overview",
    "title": "安全管理措置の手法の例示の追加等について（改正案の概要）",
    "type": "government_material",
    "typeLabel": "一次資料・改正案概要",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-10-29",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000323105",
    "importance": "高",
    "whyImportant": "規定の位置付け、具体例、従前の2027年4月予定から可能な限り施行時期を前倒しする方針を確認できる。",
    "topics": [
      "privacy-enforcement-breach-response"
    ]
  }
];
 const rows=window.SOURCE_DATA || [];
 for(const item of additions){
   const hits=rows.filter(x=>x.id===item.id);
   if(hits.length>1 || (hits.length===1 && JSON.stringify(hits[0])!==JSON.stringify(item)) || rows.some(x=>x.id!==item.id&&x.url===item.url)) throw Error('Conflicting PPC consultation item: '+item.id);
 }
 window.SOURCE_DATA=[...rows,...additions.filter(i=>!rows.some(r=>r.id===i.id))];
})();

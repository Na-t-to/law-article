(() => {
  const additions = [
  {
    "id": "source-ppc-apppi-concrete-subrules-20261125",
    "title": "第377回 個人情報保護委員会 決定：政令・規則の具体的な内容について①",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-11-25",
    "url": "https://www.ppc.go.jp/files/pdf/261125_gutaitekinanaiyounitsuite_1.pdf",
    "type": "government_material",
    "typeLabel": "一次資料・個人情報保護委員会",
    "importance": "高",
    "whyImportant": "本人同意の例外と16歳未満の者の利用停止等請求、顔特徴データの対象範囲・周知方法と周知事項を具体化する委員会決定。公布された政令・規則ではない。",
    "topics": [
      "personal-information-protection-2026-amendment"
    ]
  },
  {
    "id": "source-ppc-apppi-rulemaking-schedule-20261125",
    "title": "政令・規則・ガイドライン等の整備に関する当面のスケジュール（11月25日更新）",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-11-25",
    "url": "https://www.ppc.go.jp/files/pdf/261125_kongonosusumekata.pdf",
    "type": "government_material",
    "typeLabel": "一次資料・個人情報保護委員会",
    "importance": "高",
    "whyImportant": "12月の追加検討と2027年1月下旬の政令・規則案を示した工程表。施行日や意見募集の締切を示す資料ではない。",
    "topics": [
      "personal-information-protection-2026-amendment"
    ]
  }
];
  const list = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        list.some(x => x.id !== item.id && x.url === item.url)) {
      throw new Error("Conflicting November 25 PPC subrules record: " + item.id);
    }
  }
  window.SOURCE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();

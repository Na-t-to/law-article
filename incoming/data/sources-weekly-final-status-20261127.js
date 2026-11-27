(() => {
  const additions = [
  {
    "id": "source-moj-registry-address-ordinance-51-20261030",
    "title": "商業登記規則等の一部を改正する省令（令和8年法務省令第51号）",
    "type": "ordinance",
    "typeLabel": "一次資料・公布省令",
    "authority": "法務省",
    "publishedAt": "2026-10-30",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000323326",
    "importance": "高",
    "whyImportant": "住所非表示の対象を拡大した商業登記規則第31条の3等の確定条文。",
    "topics": [
      "commercial-registry-address-nondisclosure"
    ]
  },
  {
    "id": "source-moj-registry-address-circular-222-20261111",
    "title": "商業登記規則等の一部を改正する省令の施行に伴う商業・法人登記事務の取扱いについて（法務省民商第222号）",
    "type": "administrative_notice",
    "typeLabel": "一次資料・法務省民事局長通達",
    "authority": "法務省",
    "publishedAt": "2026-11-11",
    "url": "https://www.moj.go.jp/content/001474435.pdf",
    "importance": "高",
    "whyImportant": "2026年12月1日の施行、対象となる登記と同時に申し出る手続、区分ごとの添付書面を確認できる。",
    "topics": [
      "commercial-registry-address-nondisclosure"
    ]
  },
  {
    "id": "source-mhlw-thp-public-notice-13-20261019",
    "title": "「事業場における労働者の健康保持増進のための指針」に関する公示（健康保持増進のための指針公示第13号）",
    "type": "guideline",
    "typeLabel": "一次資料・公示第13号",
    "authority": "厚生労働省",
    "publishedAt": "2026-10-19",
    "url": "https://www.mhlw.go.jp/stf/newpage_76807.html",
    "importance": "高",
    "whyImportant": "正式な適用日は2026年10月19日。11月2日の差し替えは本文訂正であり、適用日は変わらない。",
    "topics": [
      "treatment-work-support",
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-thp-guideline-final-20261019",
    "title": "事業場における労働者の健康保持増進のための指針（令和8年10月19日改正・11月2日訂正版）",
    "type": "guideline",
    "typeLabel": "一次資料・訂正反映済み指針",
    "authority": "厚生労働省",
    "publishedAt": "2026-10-19",
    "url": "https://www.mhlw.go.jp/content/11303000/001765372.pdf",
    "importance": "高",
    "whyImportant": "二次予防を明記した指針の確定本文。厚生労働省の11月2日正誤表反映版。",
    "topics": [
      "treatment-work-support",
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-kanpo-important-varieties-decrees-359-360-20261127",
    "title": "重要品種法の施行期日を定める政令（令和8年政令第359号）・同法施行令（第360号）",
    "type": "ordinance",
    "typeLabel": "一次資料・官報号外第258号3頁",
    "authority": "内閣府",
    "publishedAt": "2026-11-27",
    "url": "https://www.kanpo.go.jp/20261127/20261127g00258/pdf/20261127g00258full00010104.pdf#page=3",
    "importance": "高",
    "whyImportant": "政令第359号が重要品種法の施行期日を2026年12月1日と定め、第360号も同日施行。種苗法改正の施行日を定める政令とは別。",
    "topics": [
      "plant-variety-ip-important-varieties-2026"
    ]
  }
];
  const stable = (value) => JSON.stringify(value, (_key, item) => item && typeof item === "object" && !Array.isArray(item)
    ? Object.fromEntries(Object.keys(item).sort().map(key => [key, item[key]])) : item);
  const sources = window.SOURCE_DATA;
  for (const item of additions) {
    const matches = sources.filter(source => source.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && stable(matches[0]) !== stable(item))
      || sources.some(source => source.id !== item.id && source.url === item.url)) {
      throw new Error("Conflicting weekly formal source: " + item.id);
    }
  }
  window.SOURCE_DATA = [...sources, ...additions.filter(item => !sources.some(source => source.id === item.id))];
})();

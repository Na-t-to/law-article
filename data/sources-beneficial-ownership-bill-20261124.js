(() => {
  const additions = [
  {
    "id": "source-shugiin-222-bill-19-progress-20261124",
    "title": "第222回国会 閣法第19号・議案審議経過",
    "authority": "衆議院",
    "url": "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/keika/1DE36DE.htm",
    "type": "government_material",
    "typeLabel": "一次資料・衆議院／議案審議経過",
    "importance": "高",
    "whyImportant": "10月23日提出、11月24日に衆議院本会議で可決し、同日参議院が受理したことを確認できる。11月25日の照合時点では、参議院への付託・審議結果と公布の各欄は未記載。",
    "topics": [
      "aml-kyc-criminal-proceeds"
    ]
  },
  {
    "id": "source-shugiin-222-bill-19-text-20261023",
    "title": "第222回国会 閣法第19号・法人等の実質的支配者に係る情報の把握等に関する法律案（本文）",
    "authority": "衆議院",
    "publishedAt": "2026-10-23",
    "url": "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/honbun/houan/g22209019.htm",
    "type": "government_material",
    "typeLabel": "一次資料・内閣提出法律案",
    "importance": "高",
    "whyImportant": "第2～6条と附則第1～2条が、対象、情報の把握・初回届出・変更届と施行時期を示す。第10～12条は情報ファイルへのアクセスを区分する。",
    "topics": [
      "aml-kyc-criminal-proceeds"
    ]
  },
  {
    "id": "source-shugiin-222-bill-20-progress-20261124",
    "title": "第222回国会 閣法第20号・議案審議経過",
    "authority": "衆議院",
    "url": "https://www.shugiin.go.jp/Internet/itdb_gian.nsf/html/gian/keika/1DE36F2.htm",
    "type": "government_material",
    "typeLabel": "一次資料・衆議院／議案審議経過",
    "importance": "高",
    "whyImportant": "整備法案も11月24日に衆議院本会議で可決し、同日に参議院が受理。11月25日の照合時点では、参議院への付託・審議結果と公布の各欄は未記載。",
    "topics": [
      "aml-kyc-criminal-proceeds"
    ]
  },
  {
    "id": "source-shugiin-222-bill-20-text-20261023",
    "title": "第222回国会 閣法第20号・法人等の実質的支配者に係る情報の把握等に関する法律の施行に伴う関係法律の整備等に関する法律案（本文）",
    "authority": "衆議院",
    "publishedAt": "2026-10-23",
    "url": "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/honbun/houan/g22209020.htm",
    "type": "government_material",
    "typeLabel": "一次資料・内閣提出法律案",
    "importance": "高",
    "whyImportant": "第7条は犯収法上の取引時確認を改める案。主法案に基づいて対象法人等が自ら行う届出とは別の手続。",
    "topics": [
      "aml-kyc-criminal-proceeds"
    ]
  }
];
  const list = window.SOURCE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url)) ||
        (item.lawId && list.some(x => x.id !== item.id && x.lawId === item.lawId))) {
      throw new Error("Conflicting beneficial ownership record: " + item.id);
    }
  }
  window.SOURCE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();

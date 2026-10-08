// Verified October 8 additions. Existing records and freshness are preserved.
(() => {
  const additions = [
  {
    "id": "source-mhlw-overwork-campaign-release-20261008",
    "title": "11月は「過労死等防止啓発月間」です",
    "type": "government_material",
    "typeLabel": "一次資料・過重労働解消キャンペーン／重点監督",
    "authority": "厚生労働省",
    "publishedAt": "2026-10-08",
    "url": "https://www.mhlw.go.jp/stf/newpage_76625.html",
    "importance": "高",
    "whyImportant": "令和8年11月の過重労働解消キャンペーンとして、長時間労働・賃金不払残業等への重点監督、相談受付、労使への協力要請を確認できる。日付は発表ページの10月8日付表記による（月別一覧は10月7日掲載欄）。",
    "topics": [
      "overtime-36-agreement-supervision"
    ]
  },
  {
    "id": "source-mhlw-overwork-campaign-2026",
    "title": "過重労働解消キャンペーン（令和8年11月）",
    "type": "government_material",
    "typeLabel": "一次資料・重点監督の対象／確認事項",
    "authority": "厚生労働省",
    "publishedAt": null,
    "url": "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/roudoukijun/campaign_00004.html",
    "importance": "高",
    "whyImportant": "11月1日から30日までの実施期間、重点監督の対象、36協定・未払残業・労働時間把握・健康福祉確保措置の確認事項を示す。ページ自体の公開日は確認できないため登録しない。",
    "topics": [
      "overtime-36-agreement-supervision"
    ]
  },
  {
    "id": "source-ppc-large-breach-warning-20261007",
    "title": "大規模な漏えい等事案を踏まえた対応について（注意喚起）・改訂WARNING",
    "type": "government_material",
    "typeLabel": "注意喚起・安全管理措置参考資料",
    "authority": "個人情報保護委員会",
    "publishedAt": "2026-10-07",
    "url": "https://www.ppc.go.jp/files/pdf/261007_houdou.pdf",
    "importance": "高",
    "whyImportant": "大量保有データの保管必要性、グループ会社・クラウド・APIの不正アクセス対策を点検する一次資料。ガイドライン見直し予定の内容と現行の安全管理義務を区別して確認できる。",
    "topics": [
      "privacy-enforcement-breach-response",
      "cyber-supply-chain"
    ]
  },
  {
    "id": "source-enecho-grid-jcstar-consultation-20261006",
    "title": "「電力品質確保に係る系統連系技術要件ガイドライン」改定案に対する意見公募",
    "type": "government",
    "typeLabel": "一次資料・任意の意見募集",
    "authority": "資源エネルギー庁 電力・ガス事業部 電力基盤整備課",
    "publishedAt": "2026-10-06",
    "url": "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=620340012",
    "importance": "高",
    "whyImportant": "任意の意見募集であり、案の公示日と受付締切を確認できる。確定ルールと区別する基礎資料。",
    "topics": [
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-enecho-grid-jcstar-draft-20261006",
    "title": "電力品質確保に係る系統連系技術要件ガイドライン（改定案）",
    "type": "guidance",
    "typeLabel": "一次資料・系統連系ガイドライン改定案",
    "authority": "資源エネルギー庁 電力・ガス事業部 電力基盤整備課",
    "publishedAt": "2026-10-06",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000322029",
    "importance": "高",
    "whyImportant": "本文7頁の位置付けと9〜11頁の新設案を確認する。対象機器、契約申込みの受付時期別の適用予定、機器変更・増設・交換及び猶予条件を具体化する。",
    "topics": [
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-enecho-grid-jcstar-procedure-20261006",
    "title": "「電力品質確保に係る系統連系技術要件ガイドライン」改定案に対する意見公募要領",
    "type": "government",
    "typeLabel": "一次資料・意見公募要領",
    "authority": "資源エネルギー庁 電力・ガス事業部 電力基盤整備課",
    "publishedAt": "2026-10-06",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000322028",
    "importance": "高",
    "whyImportant": "改定の目的、対象及び2026年10月6日から11月6日必着の意見募集期間を確認できる。",
    "topics": [
      "jc-star-iot-security-labeling"
    ]
  }
];
  const current = window.SOURCE_DATA || [];
  const ids = new Set(current.map(item => item.id));
  for (const item of additions) {
    if (ids.has(item.id)) throw new Error(`Duplicate sources ID: ${item.id}`);
    ids.add(item.id);
  }
  window.SOURCE_DATA = [...current, ...additions];
})();

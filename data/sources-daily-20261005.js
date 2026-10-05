// Verified daily-source additions. Existing themes and freshness dates are unchanged.
(() => {
  const additions = [
  {
    "id": "source-jftc-condominium-bidrigging-20260928",
    "title": "関東地区所在のマンションの管理組合が設計コンサル業者に委託して発注する大規模修繕工事の施工業者らに対する排除措置命令及び課徴金納付命令等について",
    "type": "enforcement",
    "typeLabel": "一次資料・公正取引委員会／排除措置命令等",
    "authority": "公正取引委員会",
    "publishedAt": "2026-09-28",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260928_daiyon.manshon.html",
    "importance": "高",
    "whyImportant": "設計コンサル業者と施工業者による民間発注工事の受注調整と、受注時手数料・情報提供をめぐる競争上の問題を確認できる。",
    "topics": [
      "antitrust-compliance-enforcement"
    ]
  },
  {
    "id": "source-jftc-condominium-consultant-fees-20260928",
    "title": "大規模修繕工事の施工業者から設計コンサル業者に対して支払う手数料等について",
    "type": "guidance",
    "typeLabel": "一次資料・公正取引委員会／手数料・情報提供に関する留意事項",
    "authority": "公正取引委員会",
    "publishedAt": "2026-09-28",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260928_daiyon_manshon_09.pdf",
    "importance": "高",
    "whyImportant": "受注に連動する手数料の取決め、非公開の予算・選定基準・見積情報の提供、参加条件への働きかけという具体的な競争阻害リスクを示す。",
    "topics": [
      "antitrust-compliance-enforcement"
    ]
  },
  {
    "id": "source-mhlw-thp-revision-overview-20260928",
    "title": "「事業場における労働者の健康保持増進のための指針」の改正について（報告）（第189回安全衛生分科会 資料2-1）",
    "type": "meeting_material",
    "typeLabel": "一次資料・審議会報告資料（2026年9月28日）",
    "authority": "厚生労働省労働基準局安全衛生部労働衛生課",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/content/11201250/001752902.pdf",
    "importance": "高",
    "whyImportant": "THP指針を疾病の早期発見・早期治療まで広げる改正案の概要と、2026年10月公示・公布日適用の予定を示す。",
    "topics": [
      "treatment-work-support",
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-thp-revision-draft-20260928",
    "title": "事業場における労働者の健康保持増進のための指針（案）（第189回安全衛生分科会 資料2-2）",
    "type": "draft",
    "typeLabel": "一次資料・指針改正案（2026年9月28日会議資料）",
    "authority": "厚生労働省",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/content/11201250/001752903.pdf",
    "importance": "高",
    "whyImportant": "二次予防の取組、治療と就業の両立支援との接続、健康情報取扱いの留意点を原文で確認できる。改正公示番号・日付は未確定の案。",
    "topics": [
      "treatment-work-support",
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mlit-mobility-data-guideline-20260918",
    "title": "モビリティ・データの活用推進に向けたガイドライン",
    "type": "guidance",
    "typeLabel": "一次資料・国土交通省／モビリティデータ提供ガイドライン",
    "authority": "国土交通省 総合政策局 公共交通政策部門 モビリティサービス推進課",
    "publishedAt": "2026-09-18",
    "url": "https://www.mlit.go.jp/sogoseisaku/transport/content/002023787.pdf",
    "importance": "高",
    "whyImportant": "改正地域交通法28条の対象範囲とデータ提供に応じない正当な理由の例示、利用目的・加工・費用・公開範囲・覚書等の調整手順を具体化する。法5条の地域公共交通計画への活用と法28条の応諾義務を区別できる。",
    "topics": [
      "regional-public-transport-act-2026"
    ]
  },
  {
    "id": "source-mlit-regional-transport-guidance-publication-20260918",
    "title": "改正地域交通法の施行に向け関係法令・ガイドラインを整備します ～「交通空白」解消は成長投資～",
    "type": "government_material",
    "typeLabel": "一次資料・国土交通省／ガイドライン公表と下位法令整備",
    "authority": "国土交通省",
    "publishedAt": "2026-09-18",
    "url": "https://www.mlit.go.jp/report/press/sogo12_hh_000547.html",
    "importance": "高",
    "whyImportant": "モビリティ・データの活用推進に向けたガイドラインの公表日を2026年9月18日と明示する。ガイドラインの公表と、関係法令の10月16日施行を分けて確認できる。",
    "topics": [
      "regional-public-transport-act-2026"
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

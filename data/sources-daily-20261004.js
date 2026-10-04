// Verified daily-source additions; existing topics and freshness dates remain unchanged.
(() => {
  const additions = [
  {
    "id": "source-fsa-financial-privacy-cyber-reporting-20260928",
    "title": "「金融機関における個人情報保護に関するQ&A」の改正について",
    "type": "guideline",
    "typeLabel": "一次資料・金融庁／個人情報漏えい等報告Q&A",
    "authority": "金融庁",
    "publishedAt": "2026-09-28",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260928/20260928.html",
    "importance": "高",
    "whyImportant": "金融分野の個人データ等漏えい報告について、その他サイバー攻撃等事案共通様式の利用を明確化したQ&A改正と2026年10月1日の適用を確認できる。",
    "topics": [
      "privacy-enforcement-breach-response",
      "cyber-countermeasures-critical-infrastructure"
    ]
  },
  {
    "id": "source-fsa-financial-privacy-cyber-reporting-redline-20260928",
    "title": "金融機関における個人情報保護に関するQ&Aの一部改正（新旧対照表）",
    "type": "guideline",
    "typeLabel": "一次資料・金融庁／Q&A新旧対照表",
    "authority": "金融庁",
    "publishedAt": "2026-09-28",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260928/bessi01.pdf",
    "importance": "高",
    "whyImportant": "新設の問Ⅴ-8により、様式2・3の使い分け、金融分野のシステム障害に伴う漏えいへの様式3利用、官民連携基盤と各報告先への提出の区別を確認できる。",
    "topics": [
      "privacy-enforcement-breach-response",
      "cyber-countermeasures-critical-infrastructure"
    ]
  },
  {
    "id": "source-jftc-fujiseisakujo-payment-delay-20260929",
    "title": "株式会社不二製作所に対する勧告について",
    "type": "report",
    "typeLabel": "一次資料・公正取引委員会／取適法勧告",
    "authority": "公正取引委員会・中小企業庁",
    "publishedAt": "2026-09-29",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260929_fujiseisakujo.html",
    "importance": "高",
    "whyImportant": "60日超の支払、手形交付、支払期日までに満額の金銭と引き換えにくい電子記録債権の使用を支払遅延とした具体的な執行事例。",
    "topics": [
      "payment-terms-60day-notice",
      "fair-subcontract-transactions"
    ]
  },
  {
    "id": "source-jftc-fujiseisakujo-payment-recommendation-20260929",
    "title": "株式会社不二製作所に対する勧告について（勧告書・概要・参照条文）",
    "type": "report",
    "typeLabel": "一次資料・公正取引委員会／勧告書",
    "authority": "公正取引委員会・中小企業庁",
    "publishedAt": "2026-09-29",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260929_fujiseisakujo.pdf",
    "importance": "高",
    "whyImportant": "電子記録債権の支払期日が委託代金の支払期日より後に到来する設計、従業員基準の適用、既払額の控除、遅延利息・手数料と再発防止措置の勧告を確認できる。",
    "topics": [
      "payment-terms-60day-notice",
      "fair-subcontract-transactions"
    ]
  },
  {
    "id": "source-cao-cyber-reporting-guidance-20261001",
    "title": "サイバー対処能力強化法に基づく特別社会基盤事業者による特定侵害事象等の報告等に関する制度の解説（特定重要電子計算機の届出及び特定侵害事象等の報告）",
    "type": "government",
    "typeLabel": "一次資料・関係府省／届出・報告制度の確定版解説",
    "authority": "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
    "publishedAt": "2026-10-01",
    "url": "https://www.cao.go.jp/cybersecurity/pdf/cyber_kaisetsu_202610.pdf",
    "importance": "最高",
    "whyImportant": "特定重要電子計算機の範囲、資産届出の対象・免除・期限、インシデントの認知・速報・詳報、委託先・クラウド利用時の報告対応を具体例とFAQで確認できる、2026年10月1日付の公式制度解説。",
    "topics": [
      "cyber-countermeasures-critical-infrastructure"
    ]
  },
  {
    "id": "source-mhlw-sds-council-materials-20260928",
    "title": "第189回労働政策審議会安全衛生分科会（資料）",
    "type": "meeting_material",
    "typeLabel": "一次資料・審議会資料（2026年9月28日）",
    "authority": "厚生労働省",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/stf/shingi/newpage_00064.html",
    "importance": "高",
    "whyImportant": "9月28日のSDS通知事項追加案と同日答申を、資料1-1・1-2及び答申原本へ接続する。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-sds-notification-draft-20260928",
    "title": "労働安全衛生規則の一部を改正する省令案要綱（第189回安全衛生分科会 資料1-1）",
    "authority": "厚生労働省",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/content/11201250/001752900.pdf",
    "type": "draft",
    "typeLabel": "一次資料・省令案要綱（2026年9月28日付け）",
    "importance": "高",
    "whyImportant": "SDS通知事項追加の案と2030年4月1日の施行予定を示す。省令の公布済み又は施行済みの証拠ではない。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-sds-notification-overview-20260928",
    "title": "労働安全衛生規則の一部を改正する省令案の概要について（諮問）（SDSにおける通知事項の追加関係）（資料1-2）",
    "authority": "厚生労働省労働基準局安全衛生部化学物質対策課",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/content/11201250/001752901.pdf",
    "type": "draft",
    "typeLabel": "一次資料・省令案概要／審議会資料",
    "importance": "高",
    "whyImportant": "成分識別番号、保護具情報、化学物質区分の追加案を具体化し、適用条件・例外と2026年10月公布予定を示す。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-mhlw-sds-notification-response-20260928",
    "title": "労働安全衛生規則の一部を改正する省令案要綱に係る答申（令和8年9月28日付け労審発第1807号）",
    "authority": "労働政策審議会",
    "publishedAt": "2026-09-28",
    "url": "https://www.mhlw.go.jp/content/11201250/001753308.pdf",
    "type": "official_material",
    "typeLabel": "一次資料・労働政策審議会答申（2026年9月28日付け）",
    "importance": "高",
    "whyImportant": "諮問された省令案を妥当とする答申。審議会の判断と省令の公布・施行を区別する根拠。",
    "topics": [
      "occupational-safety-health-reform"
    ]
  },
  {
    "id": "source-supreme-court-linear-bid-rigging-20260914",
    "title": "最高裁判所第三小法廷令和8年9月14日決定（令和5年（あ）第395号・独占禁止法違反被告事件）",
    "authority": "最高裁判所第三小法廷",
    "publishedAt": "2026-09-16",
    "url": "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-97059.pdf",
    "type": "court_case",
    "typeLabel": "最高裁決定／2026年9月14日決定・9月16日掲載",
    "importance": "高",
    "whyImportant": "各社の客観的な役務供給可能性を検討した上で、受注予定者・見積価格等の情報交換による競争の実質的制限を認めた事例。",
    "topics": [
      "antitrust-compliance-enforcement"
    ]
  }
];
  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  window.SOURCE_DATA = existing.concat(additions.filter(a => !existing.some(x => x && x.id === a.id)));
})();

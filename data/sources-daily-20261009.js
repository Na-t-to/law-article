// Verified October 9 daily batch. Guards preserve canonical records and reject stale replacements.
(() => {
  const current = window.SOURCE_DATA || [];
  const additions = [
  {
    "id": "source-mhlw-shingi-index-20261008-workers133",
    "title": "厚生労働省・審議会等の新着情報（第133回労災保険部会資料の掲載日）",
    "type": "government_material",
    "typeLabel": "公式掲載日索引",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/stf/new-info/shingi.html",
    "importance": "中",
    "whyImportant": "第133回労災保険部会資料が2026年10月8日掲載欄にあることを確認する日付根拠。会議開催日や諮問書案の日付とは区別する。",
    "topics": [
      "workers-compensation-insurance-2026-reform"
    ]
  },
  {
    "id": "source-mhlw-workers-comp-council133-20261008",
    "title": "第133回労働政策審議会労働条件分科会労災保険部会資料",
    "type": "government_material",
    "typeLabel": "審議会資料・省令案諮問",
    "authority": "厚生労働省",
    "publishedAt": "2026-10-08",
    "url": "https://www.mhlw.go.jp/stf/newpage_76665.html",
    "importance": "高",
    "whyImportant": "2026年10月9日開催の部会について、関係政省令案と遅発性疾病の給付基礎日額に関する独立した省令案を掲載。掲載日は公式新着索引による。",
    "topics": [
      "workers-compensation-insurance-2026-reform"
    ]
  },
  {
    "id": "source-mhlw-late-onset-benefit-order-outline-20261009",
    "title": "第133回労災保険部会 資料2-1：労災保険法施行規則等の一部を改正する省令案要綱等",
    "type": "government_material",
    "typeLabel": "省令案要綱・諮問書案",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/content/11601000/001758100.pdf",
    "importance": "高",
    "whyImportant": "遅発性疾病に係る給付基礎日額、メリット収支率の算定および公布の日から施行するという案の一次資料。表紙は10月9日付の諮問書案で、個別PDFの初回ウェブ公表日は特定していない。",
    "topics": [
      "workers-compensation-insurance-2026-reform"
    ]
  },
  {
    "id": "source-mhlw-late-onset-benefit-order-explanation-20261009",
    "title": "第133回労災保険部会 資料2-2：労災保険法施行規則等の改正について（諮問）",
    "type": "government_material",
    "typeLabel": "省令案説明・過去の審議意見",
    "authority": "厚生労働省",
    "url": "https://www.mhlw.go.jp/content/11601000/001758101.pdf",
    "importance": "高",
    "whyImportant": "対象疾病・発症時の雇用要件・賃金比較・メリット制の提案を説明し、遡及適用に関する第131・132回部会の意見を収録。委員意見と確定した経過措置を分けて読む必要がある。",
    "topics": [
      "workers-compensation-insurance-2026-reform"
    ]
  },
  {
    "id": "source-kanpo-architects-contract-decrees-20261009",
    "title": "建築士法の一部の施行期日政令（令和8年政令第323号）・建築士法施行令改正（同第324号）",
    "type": "law",
    "typeLabel": "一次資料・公布政令／官報号外第223号2頁",
    "authority": "官報（内閣府）",
    "publishedAt": "2026-10-09",
    "url": "https://www.kanpo.go.jp/20261009/20261009g00223/20261009g002230002f.html",
    "importance": "高",
    "whyImportant": "2026年10月9日の実際の公布本文。第323号は改正法附則1条2号の施行を2027年4月1日と定め、第324号も同日施行とする。閣議決定時の案文とは区別して施行日を確定する。",
    "topics": [
      "architects-contracts-2026"
    ]
  },
  {
    "id": "source-egov-drone-supply-policy-proposal-20261005",
    "title": "無人航空機に係る安定供給確保を図るための取組方針の改正案に対する意見公募（595320035）",
    "type": "government",
    "typeLabel": "一次資料・意見公募／案件情報",
    "authority": "経済産業省（e-Gov掲載）",
    "publishedAt": "2026-10-05",
    "url": "https://public-comment.e-gov.go.jp/pcm/detail?CLASSNAME=PCMMSTDETAIL&Mode=0&id=595320035",
    "importance": "高",
    "whyImportant": "意見募集の公示日が2026年10月5日、締切が11月3日23時59分であることを確認する。改正方針の適用開始日とは区別する。",
    "topics": [
      "economic-security-tech-control",
      "supply-chain-security-scs-2026",
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-meti-drone-supply-policy-draft-20261005",
    "title": "無人航空機に係る安定供給確保を図るための取組方針改定（案）",
    "type": "government",
    "typeLabel": "一次資料・28頁の取組方針案",
    "authority": "経済産業省（e-Gov掲載）",
    "publishedAt": "2026-10-05",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000322026",
    "importance": "高",
    "whyImportant": "供給確保計画の認定に係る実施体制要件へのサイバーインシデント報告の追加案、SCS・JC-STARの推奨、官公需への支援、経過措置案を確認する。改定日・適用日は空欄のため推定しない。",
    "topics": [
      "economic-security-tech-control",
      "supply-chain-security-scs-2026",
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-meti-drone-supply-policy-redline-20261005",
    "title": "無人航空機に係る安定供給確保を図るための取組方針 新旧対照表（案）",
    "type": "government",
    "typeLabel": "一次資料・5頁の新旧対照表",
    "authority": "経済産業省（e-Gov掲載）",
    "publishedAt": "2026-10-05",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000322027",
    "importance": "高",
    "whyImportant": "既存の方針内容と今回の追加・変更案を区別する。供給途絶リスクへの措置、インシデント報告、サイバー対策の具体化、官公需等の追加箇所を確認する。",
    "topics": [
      "economic-security-tech-control",
      "supply-chain-security-scs-2026",
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-meti-drone-supply-policy-procedure-20261005",
    "title": "無人航空機に係る安定供給確保を図るための取組方針の改正案に対する意見公募要領",
    "type": "government",
    "typeLabel": "一次資料・意見公募要領",
    "authority": "経済産業省（e-Gov掲載）",
    "publishedAt": "2026-10-05",
    "url": "https://public-comment.e-gov.go.jp/pcm/download?seqNo=0000322025",
    "importance": "高",
    "whyImportant": "10月5日付の募集要領で11月3日必着の意見募集期間、提出方法、募集対象を確認する。改定方針の成立・適用日を示す資料ではない。",
    "topics": [
      "economic-security-tech-control",
      "supply-chain-security-scs-2026",
      "jc-star-iot-security-labeling"
    ]
  },
  {
    "id": "source-fsa-penalty-hearing-digital-final-20260916",
    "title": "令和５年金融商品取引法等改正及び社債、株式等の振替に関する法律等改正（３年６月以内施行）に係る内閣府令の公布及びパブリックコメントの結果等について",
    "type": "government",
    "typeLabel": "一次資料・内閣府令公布／パブリックコメント結果",
    "authority": "金融庁",
    "publishedAt": "2026-09-16",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260916/20260916.html",
    "importance": "最高",
    "whyImportant": "2023年法律第79号・第80号の一部施行に伴う、金商法・公認会計士法の課徴金審判手続デジタル化の実施府令を公表し、2026年11月30日の施行を明示する。",
    "topics": [
      "fsa-penalty-hearing-digitalization"
    ]
  },
  {
    "id": "source-fsa-penalty-hearing-digital-comments-20260916",
    "title": "課徴金審判手続デジタル化：コメントの概要及びコメントに対する金融庁の考え方（別紙1）",
    "type": "government",
    "typeLabel": "一次資料・パブリックコメント回答",
    "authority": "金融庁",
    "publishedAt": "2026-09-16",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260916/01.pdf",
    "importance": "高",
    "whyImportant": "オンライン審問の周囲確認、メール通知不着、外国での公示送達等を画一的な手順にせず個別判断する考え方と、記録媒体による複写を残す理由を示す。",
    "topics": [
      "fsa-penalty-hearing-digitalization"
    ]
  },
  {
    "id": "source-fsa-penalty-hearing-fiea-ordinance-20260916",
    "title": "金融商品取引法第六章の二の規定による課徴金に関する内閣府令の一部を改正する内閣府令（別紙2）",
    "type": "law_text",
    "typeLabel": "一次資料・公布された内閣府令／新旧対照表",
    "authority": "金融庁",
    "publishedAt": "2026-09-16",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260916/02.pdf",
    "importance": "最高",
    "whyImportant": "金商法の課徴金審判における電子記録・申立て・送達・審問の実施細則と、2026年11月30日施行及び対象規定ごとの経過措置を確認できる。",
    "topics": [
      "fsa-penalty-hearing-digitalization"
    ]
  },
  {
    "id": "source-fsa-penalty-hearing-cpa-ordinance-20260916",
    "title": "公認会計士法の規定による課徴金に関する内閣府令の一部を改正する内閣府令（別紙3）",
    "type": "law_text",
    "typeLabel": "一次資料・公布された内閣府令／新旧対照表",
    "authority": "金融庁",
    "publishedAt": "2026-09-16",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260916/03.pdf",
    "importance": "最高",
    "whyImportant": "公認会計士法の課徴金審判における電子記録・申立て・送達・審問の実施細則と、2026年11月30日施行及び対象規定ごとの経過措置を確認できる。",
    "topics": [
      "fsa-penalty-hearing-digitalization"
    ]
  }
];
  const replacements = [];
  const ids = new Set(current.map(item => item.id));
  for (const item of additions) {
    if (ids.has(item.id)) throw new Error(`Duplicate sources ID: ${item.id}`);
    ids.add(item.id);
  }
  const patched = new Map();
  for (const patch of replacements) {
    const actual = current.find(item => item.id === patch.id);
    if (!actual || JSON.stringify(actual) !== JSON.stringify(patch.expected)) throw new Error(`Stale sources replacement: ${patch.id}`);
    if (patched.has(patch.id)) throw new Error(`Duplicate sources replacement: ${patch.id}`);
    patched.set(patch.id, patch.value);
  }
  window.SOURCE_DATA = [...current.map(item => patched.get(item.id) || item), ...additions];
})();

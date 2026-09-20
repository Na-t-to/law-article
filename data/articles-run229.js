(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };
  const reformEventId = "pension-reform-social-insurance-expansion-2025";
  const additions = [
    {
      id: "article-mhlw-social-insurance-expansion-2025",
      title: "社会保険の加入対象の拡大について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-20",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000147284_00021.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／2025年年金制度改正・社会保険適用拡大",
      status: "adopted",
      summary: "2025年年金制度改正法による被用者保険の適用拡大をまとめた厚生労働省の公式ページ。短時間労働者の月額8.8万円以上という賃金要件の撤廃、企業規模要件の2027年から2035年にかけた段階的縮小・撤廃、2029年10月からの個人事業所の業種要件撤廃、対象者の保険料負担を軽減する保険料調整措置を整理している。",
      whyImportant: [
        "いわゆる『106万円の壁』の撤廃だけでなく、企業規模要件の段階施行と個人事業所の適用拡大まで一つの公式資料で確認できる",
        "人事・給与実務では対象者の労働時間、企業規模、資格取得時期を将来の施行日ごとに管理する必要があることが分かる",
        "適用拡大に伴う本人負担を軽減する保険料調整措置も含め、制度変更と移行支援を一体で確認できる"
      ],
      audience: ["人事・労務", "企業法務", "給与・社会保険担当", "経営企画"],
      audienceReason: "短時間労働者の社会保険加入対象がいつ・どの企業まで広がるかを把握し、対象者抽出、コスト試算、届出・説明体制を段階的に準備するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-part-time-workers"],
      relatedIssues: ["social-insurance-wage-threshold-abolition", "social-insurance-enterprise-size-expansion", "social-insurance-individual-business-expansion", "social-insurance-premium-adjustment"],
      primarySourceIds: ["source-mhlw-social-insurance-expansion-2025"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-social-insurance-expansion-2025"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2025年年金制度改正による短時間労働者の社会保険適用拡大を、賃金要件・企業規模要件・個人事業所・保険料調整から独立整理した。"
    },
    {
      id: "article-jps-premium-adjustment-20260911",
      title: "保険料調整制度とは",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-20",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      sourceType: "primary",
      sourceLabel: "一次資料・日本年金機構／保険料調整制度",
      status: "adopted",
      summary: "社会保険の適用拡大で新たに加入対象となる短時間労働者の就業調整を抑えるため、一定の対象事業所が本人の健康保険料・厚生年金保険料を一時的に追加負担し、標準報酬月額12.6万円以下の対象者の本人負担を通算3年間軽減できる保険料調整制度の公式案内。事業主の追加負担は一定期間経過後に調整され、最終的な事業主納付額を増やさない仕組みや、対象事業所・申出の考え方を示す。",
      whyImportant: [
        "2026年10月から始まる移行支援を、制度概要だけでなく対象事業所・対象被保険者・利用期間という給与実務の単位で確認できる",
        "社会保険加入義務と本人負担軽減を混同せず、加入判定後の移行支援として制度を位置付けられる",
        "給与控除、従業員説明、申出期限の準備を施行直前に具体化する一次資料になる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "経理"],
      audienceReason: "2026年10月開始前に、制度利用の対象可否、本人負担の計算、申出・給与控除の実務を準備するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-part-time-workers"],
      relatedIssues: ["social-insurance-premium-adjustment", "social-insurance-wage-threshold-abolition"],
      primarySourceIds: ["source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-20260911"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-social-insurance-expansion-2025", "source-jps-premium-adjustment-20260911"],
      legacyReformInference: false,
      whatChanged: "施行準備補強／2026年10月開始の保険料調整制度について、対象者・3年間の軽減・申出を日本年金機構の最新実務資料で追加した。"
    },
    {
      id: "article-tmi-pension-reform-social-insurance-20250620",
      title: "【労働法ブログ】令和７年年金制度改正法の成立について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-20",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17174.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／2025年年金制度改正と人事労務",
      status: "adopted",
      summary: "2025年年金制度改正法について、公的年金・私的年金の主要改正を企業の人事労務の観点から整理した解説。短時間労働者の賃金要件撤廃と企業規模要件の段階的縮小、個人事業所の適用拡大、3年間の保険料負担軽減措置を、従来制度との差分や具体的な企業規模のスケジュールとともに説明している。",
      whyImportant: [
        "公式資料の制度説明を、どの企業・短時間労働者がいつ対象になるかという人事労務の判定単位へ落としている",
        "2027年・2029年・2032年・2035年の企業規模要件の段階変更を並べ、長期の施行管理が必要なことを把握できる",
        "最低賃金減額特例対象者、既存の個人事業所の経過措置、保険料負担軽減措置など、例外・移行対応をまとめて確認できる"
      ],
      audience: ["人事・労務", "企業法務", "給与・社会保険担当", "経営企画"],
      audienceReason: "厚生労働省の一次資料を読んだ後、改正前後の差分、例外、段階施行を人事制度・給与実務のロードマップへ落とすのに向くため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-part-time-workers"],
      relatedIssues: ["social-insurance-wage-threshold-abolition", "social-insurance-enterprise-size-expansion", "social-insurance-individual-business-expansion", "social-insurance-premium-adjustment"],
      primarySourceIds: ["source-mhlw-social-insurance-expansion-2025"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-social-insurance-expansion-2025"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／社会保険適用拡大の段階施行、例外、保険料負担軽減を企業の人事労務対応へ落とす解説を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

(() => {
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };
  const addition = {
    id: "article-mof-fatf-io4-dnfbps-20260918",
    title: "5次のトリセツ―FATF第5次対日相互審査で示す官民のチカラ― 第5回：IO4（DNFBPsの監督・予防措置）",
    publisher: "財務省",
    author: "財務省 国際局 資金移転対策室",
    publishedAt: "2026-09-18",
    collectedAt: "2026-09-20",
    url: "https://www.mof.go.jp/public_relations/finance/202609/202609i.html",
    sourceType: "primary",
    sourceLabel: "一次資料・財務省／FATF第5次相互審査・DNFBPs",
    status: "adopted",
    summary: "FATF第5次相互審査で独立した評価分野となったDNFBPsのIO4について、参入管理、監督当局と事業者のリスク理解、顧客管理・疑わしい取引届出等の予防措置、モニタリング、是正措置という6つの主要課題を整理し、先行する各国審査の指摘から有効性評価の着眼点を示す財務省の解説。",
    whyImportant: [
      "不動産、宝石・貴金属等のDNFBPsについて、本人確認の形式遵守だけでなく、自社リスク理解・継続モニタリング・疑わしい取引届出・内部管理まで有効性として評価される軸を把握できる",
      "第5次相互審査ではDNFBPsが独立したIO4として評価され、金融機関中心だったAML/CFTの有効性評価が非金融事業者にも明確に及ぶことを一次資料で確認できる",
      "先行審査国で、リスク評価不足、疑わしい取引届出の少なさ、リスクベース監督や是正措置の弱さが実際の評価論点になっており、日本企業の自己点検項目へ落とせる"
    ],
    audience: ["不動産・宝石等の特定事業者", "企業法務・コンプライアンス", "内部監査", "経営企画"],
    audienceReason: "FATF第5次対日相互審査を見据え、DNFBPとしての法定義務だけでなく、リスク評価・顧客管理・届出・内部管理の有効性を自己点検するため。",
    categories: ["危機管理・コンプライアンス", "金融規制"],
    relatedTopics: ["aml-kyc-criminal-proceeds"],
    relatedIssues: ["aml-dnfbp-governance"],
    primarySourceIds: ["source-mof-fatf-io4-dnfbps-20260918"],
    legacyReformInference: false,
    whatChanged: "論点補強／FATF第5次相互審査で独立評価されるDNFBPsについて、形式整備ではなくリスクベース運用・監督・是正までの有効性評価軸を一次資料で補強した。"
  };
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!ids.has(addition.id) && !urls.has(normalizeUrl(addition.url))) window.ARTICLE_DATA = existing.concat(addition);
})();

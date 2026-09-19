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

  const additions = [
    {
      id: "article-npa-aml-annual-report-20260312",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）",
      publisher: "警察庁",
      author: "警察庁 犯罪収益対策室（JAFIC）",
      publishedAt: "2026-03-12",
      collectedAt: "2026-09-19",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・警察庁JAFIC／AML年次報告書",
      status: "adopted",
      summary: "犯罪収益移転防止法の施行状況とAML/CFTの国内外動向をまとめる年次報告書。令和7年版はDNFBPsを特集し、疑わしい取引の年間通知101万9,405件のうちDNFBPsは439件（約0.04％）にとどまり、金融機関側ではDNFBPsに関係する疑わしい取引情報が把握される一方、対応するDNFBPs側の届出が確認されない例を示す。2027年4月の本人確認方法見直しも特集している。",
      whyImportant: [
        "DNFBPsの疑わしい取引届出が全体に比して極めて少ないという当局の問題意識を一次資料で確認できる",
        "不動産、宝石・貴金属、郵便物受取等の業種でどのようなマネー・ローンダリングリスクが想定されているかを具体例とともに確認できる",
        "FATF第5次対日相互審査を見据え、DNFBPsのリスク理解・届出・アウトリーチの強化が政策課題であることを把握できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "不動産・貴金属等の特定事業者", "AML/CFT担当", "内部監査"],
      audienceReason: "自社がDNFBP・特定事業者に該当する場合のリスク評価、疑わしい取引届出、本人確認の見直しを、当局の最新の施行状況と問題意識から点検するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-dnfbp-governance", "aml-identity-verification-2027"],
      primarySourceIds: ["source-npa-aml-annual-report-2025"],
      legacyReformInference: false,
      whatChanged: "テーマ補強／DNFBPsの疑わしい取引届出・リスクベース対応の実効性と、2027年4月の本人確認見直しを警察庁年次報告書の一次資料で補強した。"
    },
    {
      id: "article-tmi-dnfbp-aml-cft-20260917",
      title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-19",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／DNFBPsのAML/CFT",
      status: "adopted",
      summary: "警察庁JAFICの令和7年年次報告書を起点に、宅地建物取引、宝石・貴金属、郵便物受取等のDNFBPsについて、犯収法上の義務、業種別ガイドライン、リスクベース・アプローチ、疑わしい取引届出、本人確認見直し、法人口座悪用防止を一体で整理する。形式的な規程整備で終わらず、統括管理者、リスク評価、教育、内部監査、取締役会等での実質的議論までセルフチェックへ落としている。",
      whyImportant: [
        "リスクベース・アプローチは法定の取引時確認要件を任意に緩和する考え方ではないと明確にし、ルール遵守とリスク管理を分けて理解できる",
        "疑わしい取引届出の少なさを『有効性』の問題として捉え、検知・監視・分析、取引拒絶判断、リスク評価への還元まで運用へ落としている",
        "内部規程、統括管理者、教育、内部監査、取締役会等の関与をチェック項目化しており、DNFBPのAML/CFTガバナンスを具体的に点検できる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "宅地建物取引業者", "宝石・貴金属等取扱事業者", "内部監査・リスク管理"],
      audienceReason: "犯収法対応を取引時確認だけで終わらせず、自社リスクの評価、疑わしい取引の検知・届出、教育・監査・経営関与まで実装するため。",
      categories: ["危機管理・コンプライアンス", "契約"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-dnfbp-governance", "aml-identity-verification-2027", "aml-2026-account-remittance"],
      primarySourceIds: ["source-npa-aml-annual-report-2025", "source-npa-aml-amendment-2026", "source-npa-aml-overview-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／DNFBPsのAML/CFTを、法定義務、リスク評価、疑わしい取引届出、モニタリング、内部規程・教育・監査・経営関与まで一つの運用サイクルとして整理した。"
    },
    {
      id: "article-mhlw-business-transfer-guideline-amendment-20260120",
      title: "「事業譲渡又は合併を行うに当たって会社等が留意すべき事項に関する指針」の一部改正について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-01-20",
      collectedAt: "2026-09-20",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudouseisaku/saihen/68297_00001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／事業譲渡等指針2026年改正",
      status: "adopted",
      summary: "企業価値担保権の創設を受け、事業譲渡等指針を改正した厚生労働省の公式資料。2026年1月20日に告示され、同年5月25日から適用された。企業価値担保権の実行手続では管財人による情報提供、労働組合との誠実な団体交渉、労働者・労働組合等との事前協議等を示し、担保権設定時には会社による平時の労使コミュニケーション促進を位置付ける。",
      whyImportant: [
        "企業価値担保権の設定・実行と事業譲渡時の労働契約承継を接続する現行の公式ルールを確認できる",
        "管財人・会社・労働者・労働組合それぞれの情報提供、交渉、協議の役割を施行済み指針から確認できる",
        "資金調達段階から労使コミュニケーションを平時のガバナンスとして設計する必要性を示している"
      ],
      audience: ["企業法務", "M&A担当", "人事・労務", "財務・資金調達担当", "金融機関法務"],
      audienceReason: "企業価値担保権を利用する資金調達や、その実行に伴う事業譲渡で、労働契約・団体交渉・説明協議を取引実務へ組み込むため。",
      categories: ["M&A", "労務", "会社法"],
      relatedTopics: ["corporate-restructuring-labor"],
      relatedIssues: ["restructuring-business-transfer-consent", "restructuring-enterprise-value-security-labor"],
      primarySourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      reformEventId: "business-transfer-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      reformEffectiveDates: ["2026-05-25"],
      reformEffectiveDateSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／企業価値担保権の創設を踏まえた事業譲渡等指針の2026年改正と、設定・実行時の労使対応を追加した。"
    },
    {
      id: "article-mhlw-restructuring-labor-council-20260703",
      title: "第7回 労働政策審議会 労働条件分科会「組織再編に伴う労働関係の調整に関する部会」議事録",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-07-03",
      collectedAt: "2026-09-20",
      url: "https://www.mhlw.go.jp/stf/newpage_75551.html",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／組織再編時の労働関係見直し",
      status: "adopted",
      summary: "合併・事業譲渡・会社分割の現行ルール、2014年頃以降の裁判例・労働委員会命令を整理し、組織再編時の労働者保護の今後を議論した審議会議事録。事業譲渡について雇用承継ルールや労使協議を法制化すべきとの労働者側意見と、多様な事業譲渡や事業再生の柔軟性を損なうため一律の当然承継には慎重であるべきとの意見が明確に対置されている。",
      whyImportant: [
        "現行の合併・事業譲渡・会社分割を同じものとして扱わず、労働契約承継の違いを取引類型ごとに確認できる",
        "事業譲渡の個別同意では署名だけでなく説明内容と検討時間が重要という実務上の示唆を確認できる",
        "労働者保護の法制化強化と事業再生・取引柔軟性の確保という対立軸を一次資料から追える"
      ],
      audience: ["企業法務", "M&A担当", "人事・労務", "労務コンプライアンス", "事業再生担当"],
      audienceReason: "現行ルールと今後の制度見直しを分け、取引スキーム選択、労働者説明、組合対応を設計するため。",
      categories: ["M&A", "労務", "会社法"],
      relatedTopics: ["corporate-restructuring-labor"],
      relatedIssues: ["restructuring-labor-current-framework", "restructuring-business-transfer-consent", "restructuring-labor-policy-review"],
      primarySourceIds: ["source-mhlw-restructuring-labor-council-20260703"],
      reformEventId: "corporate-restructuring-labor-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-restructuring-labor-council-20260703"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／組織再編時の労働者保護について、現行ルールと2026年の制度見直し議論を分離し、労使の対立する政策論点を追加した。"
    },
    {
      id: "article-ey-restructuring-labor-enterprise-value-security-20260206",
      title: "組織再編に伴う労働関係の調整に関する議論",
      publisher: "EY Japan",
      author: "EY弁護士法人",
      publishedAt: "2026-02-06",
      collectedAt: "2026-09-20",
      url: "https://www.ey.com/ja_jp/technical/ey-japan-tax-library/tax-alerts/2026/tax-alerts-02-06-02",
      sourceType: "secondary",
      sourceLabel: "実務解説・EY弁護士法人／企業価値担保権と労働関係",
      status: "adopted",
      summary: "企業価値担保権の実行が原則として管財人主導の事業譲渡で行われることを踏まえ、事業譲渡時の労働者の個別承諾、管財人からの情報提供、団体交渉、労働者・労働組合等との事前協議、担保権設定時の平時の労使コミュニケーションを実務へ落とす解説。資金調達・企業価値評価と労務対応を別々に扱わない視点がある。",
      whyImportant: [
        "事業譲渡時の労働者承諾を形式的な同意取得ではなく十分な理解と説明のプロセスとして整理している",
        "管財人の情報提供・団交・事前協議を、承継先の労働条件や承継予定者の範囲、労働協約まで具体化している",
        "企業価値担保権の設定段階から労使コミュニケーションを行うことが資金調達・企業価値にも関係し得ると実務的に接続している"
      ],
      audience: ["企業法務", "M&A担当", "人事・労務", "財務・資金調達担当", "金融機関・事業再生担当"],
      audienceReason: "企業価値担保権と事業譲渡の労務論点を、管財人・会社・労働者・組合それぞれの具体的な行動に落とすため。",
      categories: ["M&A", "労務", "会社法"],
      relatedTopics: ["corporate-restructuring-labor"],
      relatedIssues: ["restructuring-business-transfer-consent", "restructuring-enterprise-value-security-labor"],
      primarySourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      reformEventId: "business-transfer-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      reformEffectiveDates: ["2026-05-25"],
      reformEffectiveDateSourceIds: ["source-mhlw-business-transfer-guideline-20260120"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／企業価値担保権の設定・実行と事業譲渡時の説明・同意・団交・協議を、資金調達から雇用承継まで一つの実務フローとして整理した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

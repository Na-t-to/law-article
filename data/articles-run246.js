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
      id: "article-businesslawyers-miura-jsox-qa-20231113",
      title: "第22回 2023年11月に押さえておくべき企業法務の最新動向",
      publisher: "BUSINESS LAWYERS／三浦法律事務所",
      author: "木内 敬（内部統制報告制度項目）",
      publishedAt: "2023-11-13",
      collectedAt: "2026-09-24",
      url: "https://www.businesslawyers.jp/articles/1339",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／J-SOX Q&A・事例集改訂",
      status: "adopted",
      summary: "2023年8月31日の金融庁『内部統制報告制度に関するQ&A』『事例集』改訂を企業法務向けに整理した解説。評価範囲について従来の『連結売上高のおおむね3分の2』を固定的に適用するのではなく、総資産や税引前利益等の指標も含めて財務報告への影響から判断する考え方、内部統制報告書の例示削減、重要勘定として売上・売掛金・棚卸資産を機械的に扱わない方向を具体的に説明する。",
      whyImportant: [
        "改訂基準の抽象的な『リスクベース』を、従来実務で固定化しやすかった2/3基準・3勘定の扱いがどう変わったかというレビュー作業へ落としている",
        "内部統制報告書の記載例が削られたことを『自由化』と短絡せず、投資家との建設的な対話に資する開示という目的から自社の説明を組み立てる必要性を確認できる",
        "法務・経理・内部監査が、評価範囲の根拠を過年度踏襲ではなく当年度のリスクから説明できるかを点検する際の入口になる"
      ],
      audience: ["上場会社法務", "経理・財務", "内部監査", "内部統制担当", "監査役等・取締役会事務局"],
      audienceReason: "評価範囲の選定基準や内部統制報告書の記載を、改訂Q&A・事例集に沿って過年度踏襲からリスクベースへ見直すため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-evaluation-scope", "jsox-report-deficiency-correction"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630",
        "source-fsa-jsox-qa-casebook-20230831"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2023年J-SOX改訂を、評価範囲の固定的な2/3基準・3勘定からリスクベースの判断へ移す実務として整理した。"
    },
    {
      id: "article-pwc-jsox-revision-points-20231206",
      title: "J-SOX基準等改訂ポイントの解説",
      publisher: "PwC Japanグループ",
      author: "白髭 英一、平井 雄二",
      publishedAt: "2023-12-06",
      collectedAt: "2026-09-24",
      url: "https://www.pwc.com/jp/ja/knowledge/prmagazine/pwcs-view/202311/47-01.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・PwC／J-SOX基準・実施基準改訂",
      status: "adopted",
      summary: "2023年のJ-SOX基準・実施基準改訂を、内部統制の基本的枠組みと評価・報告の双方から詳細に整理する解説。不正リスク、経営者による内部統制の無効化、IT委託・サイバーリスク、3線モデル、評価範囲のリスクベース化、IT統制の評価頻度、内部統制報告書の判断事由・重要な不備の是正状況までを一つの実装マップとして示している。",
      whyImportant: [
        "評価範囲だけでなく、不正・経営者による無効化・IT・ガバナンスという改訂の全体像を、企業の内部統制担当が何を見直すかという粒度で追える",
        "IT統制の評価について特定年数を機械的に当てはめず、IT環境の変化から評価頻度を判断する点を明確にし、クラウド・委託・サイバー対応へ接続できる",
        "内部統制報告書で重要な事業拠点の指標・割合、重要勘定、個別追加範囲の判断事由まで説明する必要性を、実務上の記載事項として整理している"
      ],
      audience: ["内部統制担当", "経理・財務", "内部監査", "情報システム・IT統制担当", "監査役等・取締役会事務局"],
      audienceReason: "2024年4月適用の改訂を、評価範囲、報告書、IT統制、不正リスク、ガバナンスの横断的な対応計画へ落とすため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス", "個人情報・AI・情報セキュリティ"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-evaluation-scope", "jsox-report-deficiency-correction", "jsox-fraud-override-it"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／2023年J-SOX改訂を、評価範囲・報告だけでなく不正、無効化、IT、3線モデルまで横断して実装できる資料を追加した。"
    },
    {
      id: "article-ey-jsox-fraud-risk-20240612",
      title: "改訂内部統制基準適用を契機に、不正リスク対応の観点から今企業がすべきこと 第2回：重要な不正リスクの特定と現状評価並びに継続的な評価体制の整備",
      publisher: "EY Japan",
      author: "荒張 健",
      publishedAt: "2024-06-12",
      collectedAt: "2026-09-24",
      url: "https://www.ey.com/ja_jp/insights/forensic-integrity-services/identification-of-significant-fraud-risks-assessment-of-the-current-situation-and-establishment-of-a-continuous-evaluation-system",
      sourceType: "secondary",
      sourceLabel: "実務解説・EY／J-SOX改訂後の不正リスク評価",
      status: "adopted",
      summary: "改訂J-SOXの適用開始後に、不正リスクの考慮と内部統制の無効化への対応を継続的なリスク評価プロセスへ落とす解説。全ての不正リスクへ一律対応するのではなく、自社・同業他社の不正事例、事業環境変化、不正のトライアングル等から重要な不正リスクを特定し、既存統制の十分性と残存リスクを評価し、環境変化に応じて統制を更新する流れを示す。",
      whyImportant: [
        "基準が要求する『不正リスクの考慮』を、リスクシナリオの設定、現状統制の評価、残存リスクへの追加対応という継続プロセスへ具体化している",
        "過去の自社不正だけでなく同業他社の事例や事業環境変化まで入力にし、内部統制が一度設計したまま形骸化するのを防ぐ観点を提供する",
        "法務・内部監査・経理・経営が、不正リスクへの対応の合理性を後から説明できる証跡設計を考える材料になる"
      ],
      audience: ["内部監査", "内部統制担当", "コンプライアンス", "経理・財務", "経営企画・リスク管理"],
      audienceReason: "改訂基準の不正リスク・内部統制無効化対応を、重要リスクの特定から継続的な見直しまで社内プロセスへ落とすため。",
      categories: ["危機管理・コンプライアンス", "金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-fraud-override-it"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "バックフィル／改訂J-SOXの不正リスク・内部統制無効化対応を、重要リスクの特定、統制評価、残存リスク対応、継続的見直しの運用へ落とす実務解説を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

(() => {
  const ARTICLE = "article-tmi-digital-municipal-bonds-2026";
  const BAD_ARTICLE = "article-tmi-digital-local-bonds-20260424";
  const TOPIC = "digital-local-bonds-2026";
  const REFORM = "local-finance-act-digital-local-bonds-2026";
  const SOURCE_BILL = "source-shugiin-digital-local-bonds-bill-2026";
  const SOURCE_HISTORY = "source-sangiin-digital-local-bonds-enactment-2026";
  const SOURCE_EGOV = "source-egov-local-finance-act-digital-bonds-2026";

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === TOPIC);
  if (topic) {
    topic.referenceArticleIds = Array.from(new Set((topic.referenceArticleIds || []).map((id) => id === BAD_ARTICLE ? ARTICLE : id).filter(Boolean)));
  }

  const event = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === REFORM);
  if (event) event.articleIds = [ARTICLE];

  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === ARTICLE);
  if (!article) return;

  article.summary = "デジタル地方債を主題に、従来の証券発行地方債・登録地方債・振替地方債の違い、2026年地方財政法改正案による地方債原簿と会社法の社債規定の準用、2027年4月施行を見据えた法的構造を整理する実務解説。民間の社債STを先行例として、地域金融機関をハブとする販売・決済、住民・関係人口への直接金融、非金銭的特典や資金使途の可視化まで社会実装の論点へ落としている。";
  article.whyImportant = [
    "証券発行地方債・登録地方債・振替地方債の違いから、なぜ地方債原簿と会社法準用がデジタル証券方式の制度基盤になるのかを一続きで理解できる",
    "法改正の説明にとどまらず、地方銀行、ST基盤、デジタル決済、投資家接点を組み合わせた実装イメージまで提示している",
    "地域住民向けの小口発行や非金銭的特典について、自治体の公平性・説明責任との整合が必要という公法上の制約も示しており、商品企画だけで走るリスクを避けられる"
  ];
  article.audience = ["金融機関・証券会社", "Fintech・ST事業者", "自治体法務・財政担当", "企業法務・金融法務", "地域金融・事業開発担当"];
  article.audienceReason = "2027年4月の制度施行を前に、地方債の権利管理、発行・販売・決済の役割分担、地域向け商品設計を法務・システムの両面から準備するため。";
  article.sourceLabel = "法律事務所・実務解説／デジタル地方債・社債ST";
  article.categories = Array.from(new Set([...(article.categories || []), "AI・デジタル"]));
  article.relatedTopics = Array.from(new Set([...(article.relatedTopics || []), TOPIC]));
  article.relatedIssues = Array.from(new Set([...(article.relatedIssues || []), "digital-local-bonds-legal-basis-2027", "digital-local-bond-register-rights-management", "digital-local-bonds-public-accountability"]));
  article.primarySourceIds = [SOURCE_BILL, SOURCE_HISTORY, SOURCE_EGOV];
  article.reformEventId = REFORM;
  article.reformStageAtPublication = "proposal";
  article.reformStageSourceIds = [SOURCE_BILL, SOURCE_HISTORY];
  article.legacyReformInference = false;
  article.whatChanged = "既存ARTICLE実質更新／デジタル地方債を中心テーマとして再整理し、2026年地方財政法改正の地方債原簿・会社法準用・2027年4月施行と実装論へ一次資料を接続した。";
})();

(() => {
  if (window.__LAW_INDEX_RUN246_SHAPE_MARKS_APPLIED__) return;
  window.__LAW_INDEX_RUN246_SHAPE_MARKS_APPLIED__ = true;

  const TOPIC = "applied-art-mass-products-copyright";
  const STRATEGY_ISSUE = "applied-art-product-design-rights-strategy";
  const SHAPE_ISSUE = "applied-art-shape-trademark-distinctiveness";
  const SOURCE_GUIDELINES = "source-jpo-trademark-examination-guidelines-2026";
  const SOURCE_GODZILLA = "source-ip-highcourt-godzilla-3d-mark-20241030";
  const SOURCE_MARTENS = "source-ip-highcourt-dr-martens-position-mark-20230810";
  const ARTICLE_POCKY = "article-tmi-pocky-3d-trademark-20260220";
  const ARTICLE_GODZILLA = "article-tmi-godzilla-3d-trademark-20250311";
  const ARTICLE_MARTENS = "article-tmi-dr-martens-position-trademark-20240202";

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(Array.isArray(values) ? values : [])].filter(Boolean)));

  const sourceAdditions = [
    {
      id: SOURCE_GUIDELINES,
      title: "商標審査基準（第3条第2項・使用による識別性ほか）",
      type: "guideline",
      typeLabel: "一次資料・特許庁／商標審査基準",
      authority: "特許庁",
      publishedAt: "2026-04-01",
      url: "https://www.jpo.go.jp/system/laws/rule/guideline/trademark/kijun/",
      importance: "最高",
      whyImportant: "商品形状や位置商標を含む商標について、商標法3条1項の識別力と同条2項の使用による識別力を審査する現行基準。使用期間・地域・販売数量、広告、需要者認識調査等をどのように総合評価するかを確認する基礎資料。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_GODZILLA,
      title: "知財高裁令和6年10月30日判決・令和6年（行ケ）第10047号（シン・ゴジラ立体商標）",
      type: "case",
      typeLabel: "一次資料・知的財産高等裁判所／立体商標・使用による識別力",
      authority: "知的財産高等裁判所",
      publishedAt: "2024-10-30",
      url: "https://www.courts.go.jp/ip/eng/assets/ip/eng/chizai_en/chizai_en-pdf-3584.pdf",
      importance: "最高",
      whyImportant: "シン・ゴジラの立体形状について、3条1項3号該当性を維持しつつ3条2項の使用による識別力を肯定した裁判例。シリーズ全体の認知、販売実績、アンケート、適切に管理されたライセンシー使用を総合考慮した。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_MARTENS,
      title: "知財高裁令和5年8月10日判決・令和5年（行ケ）第10003号（Dr. Martens位置商標）",
      type: "case",
      typeLabel: "一次資料・知的財産高等裁判所／位置商標・使用による識別力",
      authority: "知的財産高等裁判所",
      publishedAt: "2023-08-10",
      url: "https://www.courts.go.jp/ip/app/files/hanrei_jp/311/092311_hanrei.pdf",
      importance: "最高",
      whyImportant: "黄色ステッチの位置商標について、黒色の靴では相当程度の識別力を認めつつ、出願商標が基礎色を限定していないため3条2項の適用を否定した裁判例。実際の使用態様と出願範囲の一致が重要であることを示す。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.SOURCE_DATA = existingSources.concat(sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url))));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    let issues = Array.isArray(topic.issues) ? topic.issues.slice() : [];
    issues = issues.map((issue) => {
      if (!issue || issue.id !== STRATEGY_ISSUE) return issue;
      return {
        ...issue,
        sourceIds: addMany(issue.sourceIds, [SOURCE_GUIDELINES, SOURCE_GODZILLA, SOURCE_MARTENS])
      };
    });
    if (!issues.some((issue) => issue && issue.id === SHAPE_ISSUE)) {
      issues.push({
        id: SHAPE_ISSUE,
        title: "商品形状・位置商標の使用による識別力をどう立証するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "商品形状や位置標章が本来的な識別力を欠く場合でも、長期間・広範な使用、販売実績、広告・包装での継続的な提示、需要者認識調査等から特定事業者の出所表示として認識されるに至ったことを立証できれば、商標法3条2項による登録余地がある。もっとも、実際に識別力を獲得した使用態様と出願商標の範囲がずれると登録が否定され得る。",
        exception: "著名な商品やキャラクターであっても、形状自体が当然に商標登録されるわけではない。商品の機能・美感に通常採択される形状等として3条1項3号に該当し得ることを前提に、3条2項の立証と出願範囲の設計を別途行う必要がある。",
        uncertain: "認知度調査に必要な水準、使用期間、販売量、広告規模等に一律の数値基準はなく、指定商品、需要者層、使用態様、ライセンス管理、出願商標との同一性等を総合評価する。",
        sourceIds: [SOURCE_GUIDELINES, SOURCE_GODZILLA, SOURCE_MARTENS]
      });
    }
    return {
      ...topic,
      lastUpdated: "2026-09-24",
      lastVerified: "2026-09-24",
      sourceIds: addMany(topic.sourceIds, [SOURCE_GUIDELINES, SOURCE_GODZILLA, SOURCE_MARTENS]),
      referenceArticleIds: addMany(topic.referenceArticleIds, [ARTICLE_POCKY, ARTICLE_GODZILLA, ARTICLE_MARTENS]),
      practicalImpacts: addUnique(topic.practicalImpacts, "商品形状・位置標章の立体商標／位置商標によるブランド保護"),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addMany(currentSummary.facts, [
          "知財高裁はシン・ゴジラ立体商標事件で、商品の形状として商標法3条1項3号に該当するとしつつ、シリーズ全体の著名性、販売実績、アンケート、ライセンシー使用等を総合し、3条2項の使用による識別力を肯定した。",
          "Dr. Martensの黄色ステッチ位置商標事件では、黒色の靴との組合せでは相当程度の識別力が認められた一方、出願商標が基礎色を限定していなかったため、出願範囲全体について3条2項の適用は否定された。"
        ]),
        interpretations: addUnique(currentSummary.interpretations, "量産商品の形状保護は、著作権・意匠権だけでなく、長期使用で出所表示機能を獲得した特徴について立体商標・位置商標を組み合わせる多層的な権利戦略として検討できる。"),
        implications: addUnique(currentSummary.implications, "将来の3条2項立証を見据え、商品形状の継続性、販売・広告実績、包装上の形状表示、ライセンス管理、需要者認識調査の設計と原資料を継続的に保存する。")
      }
    };
  });

  const articleAdditions = [
    {
      id: ARTICLE_POCKY,
      title: "The shape of “Pocky” is now trademarked in Japan",
      publisher: "TMI総合法律事務所",
      author: "飯田 遥",
      publishedAt: "2026-02-20",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18011.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／Pocky立体商標・使用による識別力",
      status: "adopted",
      summary: "Pockyの商品形状が2025年7月25日に立体商標登録された審査経過を、商標法3条1項3号の拒絶理由と3条2項の使用による識別力の立証から整理する実務解説。約60年の継続使用、年間約5億箱の販売、包装上での形状提示、全国の16〜79歳1,036人を対象とした認知度調査など、商品形状をブランド資産として権利化する際の証拠設計を具体的に追える。",
      whyImportant: [
        "商品形状そのものが一般的な形状として本来的識別力を欠く場合でも、使用実績・包装表示・認知度調査を積み上げて3条2項の登録へつなげる実務を具体例で確認できる",
        "認知度調査は単独で決め手になるのではなく、販売量、使用期間、地域、広告・宣伝等と合わせて全国的な出所認識を立証する必要があることが分かる",
        "著作権や意匠権だけでは保護期間・要件に限界がある商品形状について、長期ブランド形成後の商標権という別ルートを権利ポートフォリオへ組み込む材料になる"
      ],
      audience: ["知財・ブランド法務", "商品開発", "マーケティング", "模倣品対策担当", "商標出願担当"],
      audienceReason: "商品形状を長期的なブランド資産として権利化するための証拠収集、認知度調査、出願範囲の設計を検討するため。",
      categories: ["知的財産"],
      relatedTopics: [TOPIC],
      relatedIssues: [STRATEGY_ISSUE, SHAPE_ISSUE],
      primarySourceIds: [SOURCE_GUIDELINES],
      legacyReformInference: false,
      whatChanged: "バックフィル／Pockyの立体商標登録を素材に、商品形状の使用による識別力と証拠設計を商品デザインの権利戦略へ追加した。"
    },
    {
      id: ARTICLE_GODZILLA,
      title: "Japan IP High Court approved the “Godzilla” 3D shape as a Trademark",
      publisher: "TMI総合法律事務所",
      author: "飯田 遥",
      publishedAt: "2025-03-11",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/16771.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・判例解説／シン・ゴジラ立体商標",
      status: "adopted",
      summary: "知財高裁令和6年10月30日判決を素材に、シン・ゴジラの立体形状について使用による識別力が肯定された理由を整理する判例解説。約102万個・約26.5億円の販売、シリーズ全体の著名性、64％超の自由回答型認知調査、ライセンシーによる使用を適切な管理の下で出願人の使用として評価した点まで追う。",
      whyImportant: [
        "立体形状の3条2項判断で、当該商品の使用だけでなく、連続するキャラクター・シリーズの著名性が需要者認識へ与える影響を考慮した裁判例を確認できる",
        "ライセンシー使用でも、出願人が形状・出所表示を適切に管理していれば3条2項の『使用』として評価され得るため、ライセンス契約・ブランド管理と商標出願を接続できる",
        "販売量・売上・アンケートだけでなく、既存ブランド資産との連続性を含めて証拠を組み立てる視点を得られる"
      ],
      audience: ["知財・ブランド法務", "エンターテインメント法務", "ライセンス担当", "商標出願担当", "商品化・MD担当"],
      audienceReason: "キャラクターや立体形状について、ライセンス使用を含むブランド実績を3条2項の立証へどう接続するか検討するため。",
      categories: ["知的財産"],
      relatedTopics: [TOPIC],
      relatedIssues: [STRATEGY_ISSUE, SHAPE_ISSUE],
      primarySourceIds: [SOURCE_GUIDELINES, SOURCE_GODZILLA],
      legacyReformInference: false,
      whatChanged: "バックフィル／シン・ゴジラ立体商標判決から、シリーズ著名性・ライセンス使用・認知調査を3条2項の立証へ組み込む論点を追加した。"
    },
    {
      id: ARTICLE_MARTENS,
      title: "IP High Court Decision on Position Trademark – Scope of Distinctiveness",
      publisher: "TMI総合法律事務所",
      author: "波田野晴朗、栗下清治、松本 陸",
      publishedAt: "2024-02-02",
      collectedAt: "2026-09-24",
      url: "https://www.tmi.gr.jp/eyes/blog/2024/15445.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・判例解説／Dr. Martens位置商標",
      status: "adopted",
      summary: "Dr. Martensの黄色ステッチ位置商標について、知財高裁令和5年8月10日判決の識別力判断を整理する解説。黒色の靴との組合せでは相当程度の識別力や38.1〜47.6％の認知調査結果が評価された一方、出願商標は基礎色を限定しておらず、非黒色の商品まで含む範囲について使用による識別力の証拠が足りないとして登録が否定された。",
      whyImportant: [
        "実際にブランドとして認識されている使用態様と、願書で取りに行く商標の範囲がずれると、十分な認知実績があっても3条2項の適用に失敗し得ることを示す",
        "需要者調査の数字だけでなく、どの色・どの位置・どの商品態様について認識されているかを切り分けて立証する必要性が分かる",
        "商標登録が難しい場合でも、不正競争防止法の商品等表示として保護される可能性との関係を比較でき、権利行使ルートを一つに固定しない設計に役立つ"
      ],
      audience: ["知財・ブランド法務", "商標出願担当", "商品デザイン担当", "模倣品対策担当", "訴訟・紛争担当"],
      audienceReason: "位置商標・商品デザインについて、出願範囲と実際の使用・認知の一致を検証し、商標法と不正競争防止法の保護を組み合わせるため。",
      categories: ["知的財産"],
      relatedTopics: [TOPIC],
      relatedIssues: [STRATEGY_ISSUE, SHAPE_ISSUE],
      primarySourceIds: [SOURCE_GUIDELINES, SOURCE_MARTENS],
      legacyReformInference: false,
      whatChanged: "バックフィル／Dr. Martens位置商標判決から、出願商標の範囲と実際に識別力を獲得した使用態様を一致させる重要性を追加した。"
    }
  ];

  const existingArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(existingArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(existingArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existingArticles.concat(articleAdditions.filter((item) => !articleIds.has(item.id) && !articleUrls.has(normalizeUrl(item.url))));
})();

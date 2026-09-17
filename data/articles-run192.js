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

  const amlTopic = "criminal-proceeds-aml-ekyc-2026-2027";
  const amlLawEvent = "criminal-proceeds-act-2026-amendment";
  const amlRulesEvent = "criminal-proceeds-identification-rules-2027";
  const amlLawSource = "source-npa-aml-amendment-2026";
  const amlRulesSource = "source-npa-jafic-annual-report-2025-identity-review";
  const copyrightTopic = "copyright-record-performance-right-2026";
  const copyrightEvent = "copyright-act-record-performance-2026";
  const copyrightLawSource = "source-mext-copyright-record-performance-law-2026";
  const copyrightPolicySource = "source-mext-copyright-record-performance-enactment-20260617";

  const additions = [
    {
      id: "article-npa-aml-amendment-2026",
      title: "令和8年犯罪収益移転防止法の改正について",
      publisher: "警察庁",
      author: "警察庁",
      publishedAt: "2026-06-10",
      collectedAt: "2026-09-17",
      url: "https://www.npa.go.jp/bureau/sosikihanzai/hansyu/houritukaisei.html",
      sourceType: "primary",
      sourceLabel: "一次資料・犯罪収益移転防止法2026年改正",
      status: "adopted",
      summary: "2026年改正犯罪収益移転防止法の公式解説ページ。預貯金通帳等の不正譲渡等に対する罰則引上げ、いわゆる『送金犯罪』の罰則新設、架空名義口座を利用した新たな措置の三本柱を示し、前二者は2026年7月10日施行、架空名義口座措置は公布日から1年以内の政令指定日に施行すると整理している。",
      whyImportant: [
        "2026年改正の三つの柱と施行時期を警察庁の一次資料から確認できる",
        "すでに施行済みの罰則改正と、政令指定日待ちの架空名義口座措置を混同せず追跡できる",
        "金融・決済サービスの不正利用対策や送金仲介フローを見直す法的な起点になる"
      ],
      audience: ["企業法務", "AML/CFT担当", "金融・決済事業者", "コンプライアンス担当", "リスク管理担当"],
      audienceReason: "2026年改正の確定内容と段階施行を一次資料で確認し、施行済み対応と今後の施行準備を分けるため。",
      categories: ["危機管理・コンプライアンス", "金融・資本市場"],
      relatedTopics: [amlTopic],
      relatedIssues: ["aml-money-transfer-offense-2026", "aml-fictitious-account-measures-2026"],
      primarySourceIds: [amlLawSource],
      reformEventId: amlLawEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amlLawSource],
      legacyReformInference: false,
      whatChanged: "2026年改正の罰則強化・送金犯罪・架空名義口座対策を新テーマの基準点として追加し、施行済み部分と政令指定待ち部分を分離した。"
    },
    {
      id: "article-npa-jafic-identity-review-2026",
      title: "犯罪収益移転防止に関する年次報告書（令和7年）特集2・本人確認方法の見直し",
      publisher: "警察庁・JAFIC",
      author: "警察庁犯罪収益対策室（JAFIC）",
      publishedAt: "2026-03-12",
      collectedAt: "2026-09-17",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/nenzihokoku/data/jafic_2025.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・本人確認方法見直し／2027年4月施行",
      status: "adopted",
      summary: "犯罪収益移転防止法施行規則の本人確認方法見直しを特集したJAFICの公式年次報告書。2027年4月1日施行を前提に、対面ではICチップ付き本人確認書類の提示時にチップ情報の読み取りを必須化し、非対面でも自然人についてICチップ情報の送信を原則とするなど、従来の画像送信・原本送付等の方式を再編する。",
      whyImportant: [
        "2027年4月1日の全面施行に向け、本人確認フローの具体的な変更点を一次資料で確認できる",
        "オンラインだけでなく対面本人確認にもICチップ読取が及ぶため、端末・店頭運用・委託先の改修範囲を把握できる",
        "存置される方法と廃止・縮小される方法を条項単位で追えるため、移行設計の基礎資料になる"
      ],
      audience: ["AML/CFT担当", "企業法務", "金融・決済事業者", "eKYC・プロダクト担当", "店舗運営・業務設計担当"],
      audienceReason: "2027年4月の本人確認方法変更に備え、現行方式と新方式の差分を一次資料から具体的に棚卸しするため。",
      categories: ["危機管理・コンプライアンス", "金融・資本市場", "AI・デジタル"],
      relatedTopics: [amlTopic],
      relatedIssues: ["aml-identity-verification-2027"],
      primarySourceIds: [amlRulesSource],
      reformEventId: amlRulesEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amlRulesSource],
      legacyReformInference: false,
      whatChanged: "2027年4月の本人確認方法見直しを、eKYCだけでなく対面を含む全体的な業務変更として新テーマへ追加した。"
    },
    {
      id: "article-tmi-aml-ekyc-2026",
      title: "〖犯収法ブログ〗犯罪収益移転防止法施行規則の改正による本人確認方法の厳格化について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-03-30",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18168.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／本人確認・eKYC見直し",
      status: "adopted",
      summary: "2027年4月1日に全面施行される本人確認方法の見直しを、現行方式と改正後方式の対応表で整理する実務解説。オンライン本人確認利用者だけでなく、対面の本人確認も変更されるため法2条2項の特定事業者全体に影響し得ることを明示し、ICチップ読取、JPKI、画像方式の廃止等を実務目線で説明する。",
      whyImportant: [
        "改正前後の本人確認方式を具体的に対応付けており、システム・マニュアル改訂にそのまま使いやすい",
        "eKYC事業者だけの問題ではなく、対面取引を行う特定事業者にも影響することを明確にしている",
        "本人確認書類・ICチップ・JPKI等の選択肢を整理し、一次資料を実装要件へ落とし込む助けになる"
      ],
      audience: ["AML/CFT担当", "企業法務", "eKYC担当", "金融・不動産・クレジット等の特定事業者", "IT・業務企画"],
      audienceReason: "規則改正の条文を、現場の本人確認方式・システム改修・例外フローへ落とすため。",
      categories: ["危機管理・コンプライアンス", "金融・資本市場", "AI・デジタル"],
      relatedTopics: [amlTopic],
      relatedIssues: ["aml-identity-verification-2027"],
      primarySourceIds: [amlRulesSource],
      reformEventId: amlRulesEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amlRulesSource],
      legacyReformInference: false,
      whatChanged: "一次資料だけでは読み取りにくい本人確認方式の改正前後を実務フローへ落とす解説を補完した。"
    },
    {
      id: "article-tmi-aml-amendment-2026",
      title: "Overview of the 2026 Amendments to the Act on Prevention of Transfer of Criminal Proceeds",
      publisher: "TMI総合法律事務所",
      author: "大塚尚・菊田行紘・野間敬和ほか",
      publishedAt: "2026-08-18",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18693.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／犯罪収益移転防止法2026年改正",
      status: "adopted",
      summary: "2026年改正犯罪収益移転防止法の三本柱を、金融機関・事業者の実務への影響まで整理する解説。送金犯罪について、自己名義口座等を使った第三者のための資金移動が一定の場合に処罰対象となること、法人にも両罰規定が及び得ること、従来の犯罪収益等隠匿罪との構成要件の違いを説明し、架空名義口座措置の金融機関との連携課題も示す。",
      whyImportant: [
        "『送金犯罪』を、従来のマネロン犯罪との違いと事業者の通常業務との境界から理解できる",
        "法人・従業員の責任や、取引先の依頼で資金移動を仲介する場合の契約上・業務上の確認点まで踏み込んでいる",
        "施行済みの罰則部分と、施行日待ちの架空名義口座措置を一体で見つつ段階を分けて読める"
      ],
      audience: ["企業法務", "AML/CFT担当", "金融・決済事業者", "コンプライアンス担当", "事業開発担当"],
      audienceReason: "2026年改正を、刑事罰の条文確認だけでなく、送金・決済サービスと社内統制の実務リスクへ落とすため。",
      categories: ["危機管理・コンプライアンス", "金融・資本市場"],
      relatedTopics: [amlTopic],
      relatedIssues: ["aml-money-transfer-offense-2026", "aml-fictitious-account-measures-2026"],
      primarySourceIds: [amlLawSource],
      reformEventId: amlLawEvent,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [amlLawSource],
      legacyReformInference: false,
      whatChanged: "送金犯罪の構成と事業者への波及、架空名義口座措置の実務課題を一次資料の概要から一段深く補完した。"
    },
    {
      id: "article-mext-copyright-record-performance-law-2026",
      title: "著作権法の一部を改正する法律（令和8年法律第48号）",
      publisher: "文部科学省・文化庁",
      author: "文部科学省・文化庁",
      publishedAt: "2026-06-24",
      collectedAt: "2026-09-17",
      url: "https://www.mext.go.jp/b_menu/houan/kakutei/detail/mext_00005.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年著作権法改正／レコード演奏・伝達権",
      status: "adopted",
      summary: "レコード演奏・伝達権を創設した2026年著作権法改正の成立法律ページ。実演家・レコード製作者について、商業用レコードの公の再生・伝達に対する二次使用料請求権を新設し、文化庁長官による指定団体、二次使用料規程、利用者側との協議・裁定等の仕組みを設ける。関係規定は公布日から3年以内の政令指定日に施行される。",
      whyImportant: [
        "新しいレコード演奏・伝達権の法的構造を法律概要・条文・新旧対照表から直接確認できる",
        "店舗BGM等の利用を禁止する許諾権ではなく、実演家・レコード製作者への二次使用料請求権であることを確認できる",
        "指定団体・二次使用料規程の法定手続と、具体的な施行日は今後という段階を切り分けられる"
      ],
      audience: ["企業法務", "知的財産担当", "店舗・施設運営", "イベント・エンタメ担当", "契約担当"],
      audienceReason: "BGM利用の費用・契約影響を検討する前提として、成立済みの権利内容と未確定の実施詳細を一次資料で分けるため。",
      categories: ["知的財産", "契約・取引", "メディア・エンタテインメント"],
      relatedTopics: [copyrightTopic],
      relatedIssues: [
        "copyright-record-performance-right-scope-2026",
        "copyright-record-performance-right-administration-2026",
        "copyright-record-performance-right-effective-date-2026"
      ],
      primarySourceIds: [copyrightLawSource, copyrightPolicySource],
      reformEventId: copyrightEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [copyrightLawSource],
      legacyReformInference: false,
      whatChanged: "2026年著作権法改正で創設されたレコード演奏・伝達権を新テーマ化し、権利の射程・指定団体制度・施行準備を分離して整理した。"
    },
    {
      id: "article-amt-copyright-record-performance-2026",
      title: "令和8年著作権法改正（レコード演奏・伝達権の創設）",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "村上遼・角田匠吾",
      publishedAt: "2026-08-05",
      collectedAt: "2026-09-17",
      url: "https://www.amt-law.com/en/insights/newsletters/newsletter_20260805001_en_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／レコード演奏・伝達権",
      status: "adopted",
      summary: "2026年著作権法改正を、既存の著作権・著作隣接権との関係から整理するニュースレター。レコード演奏・伝達権を四つの二次使用料請求権に分解し、禁止権ではないこと、指定団体制度を通じた権利行使・徴収の構造を条文ベースで説明する。",
      whyImportant: [
        "作詞家・作曲家等の著作権と、実演家・レコード製作者の新しい著作隣接権を区別して理解できる",
        "再生・伝達、実演家・レコード製作者という四つの権利関係を条文構造に沿って整理している",
        "指定団体制度を含め、利用者が誰とどのような権利処理をする制度なのかを実務的に把握できる"
      ],
      audience: ["企業法務", "知的財産担当", "店舗・施設運営", "エンタメ・イベント担当", "BGMサービス事業者"],
      audienceReason: "新設権利を既存の著作権処理と混同せず、支払・契約・運用の論点へ落とすため。",
      categories: ["知的財産", "契約・取引", "メディア・エンタテインメント"],
      relatedTopics: [copyrightTopic],
      relatedIssues: ["copyright-record-performance-right-scope-2026", "copyright-record-performance-right-administration-2026"],
      primarySourceIds: [copyrightLawSource, copyrightPolicySource],
      reformEventId: copyrightEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [copyrightLawSource],
      legacyReformInference: false,
      whatChanged: "新設権利を四つの二次使用料請求権と指定団体制度に分解する解説を追加し、既存の著作権処理との違いを読みやすくした。"
    },
    {
      id: "article-not-copyright-record-performance-2026",
      title: "著作権法改正―レコード演奏・伝達権の創設―",
      publisher: "長島・大野・常松法律事務所",
      author: "粂内将人・佐藤巴南・富永有美",
      publishedAt: "2026-06-26",
      collectedAt: "2026-09-17",
      url: "https://www.nagashima.com/publications/publication20260626-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／レコード演奏・伝達権",
      status: "adopted",
      summary: "レコード演奏・伝達権の成立直後に、店舗BGMだけでなくイベント・スポーツ競技会・文化芸術分野の発表会等への波及を示し、利用者負担、効率的で公平な徴収、小規模事業者への影響、分配方法など施行までに残る実務課題を整理する解説。英語版では徴収方式やストリーミングサービスの商用利用規約との関係まで具体的に検討している。",
      whyImportant: [
        "『店舗BGMの新料金』に矮小化せず、イベント・スポーツ・文化施設等まで利用場面を広く捉えられる",
        "法律で確定した権利と、徴収方法・料金・小規模事業者への配慮など未確定の運用を明確に分けている",
        "BGMサービスやストリーミング利用の契約・料金負担・利用実績管理まで、施行準備の実務論点を先取りできる"
      ],
      audience: ["企業法務", "知的財産担当", "店舗・施設運営", "イベント・スポーツ担当", "調達・契約担当"],
      audienceReason: "新制度が実際の施設運営・イベント・BGM契約へどう波及するかを、未確定部分も含めて準備するため。",
      categories: ["知的財産", "契約・取引", "メディア・エンタテインメント"],
      relatedTopics: [copyrightTopic],
      relatedIssues: [
        "copyright-record-performance-right-scope-2026",
        "copyright-record-performance-right-administration-2026",
        "copyright-record-performance-right-effective-date-2026"
      ],
      primarySourceIds: [copyrightLawSource, copyrightPolicySource],
      reformEventId: copyrightEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [copyrightLawSource],
      legacyReformInference: false,
      whatChanged: "施行前に残る料金・徴収・小規模事業者・分配の論点と、店舗以外への波及を補完し、法務・施設運営が準備すべき範囲を広げた。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

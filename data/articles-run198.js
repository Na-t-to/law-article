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

  const ipTopic = "ip-knowhow-data-transactions";
  const ipSource = "source-ip-knowhow-data-guideline-2026";
  const socialTopic = "social-insurance-short-time-workers-2026";
  const socialEvent = "pension-reform-2025-social-insurance-expansion";
  const pensionLaw = "source-pension-reform-act-20250620";
  const effectiveNotice = "source-mhlw-pension-effective-notice-20260915";
  const shortTimeSource = "source-nenkin-short-time-expansion-20260916";
  const premiumSource = "source-nenkin-premium-adjustment-20260911";

  const additions = [
    {
      id: "article-tmi-ip-transaction-guideline-20260515",
      title: "『知的財産権・ノウハウ・データの適切な取引のための優越的地位の濫用等に関する指針（案）』の解説 ～知財・競争法実務の現場から読み解く～",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-05-15",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18349.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／知財取引指針",
      status: "adopted",
      summary: "知財取引指針の案段階を、全業種・ノウハウ・データへの拡張、独禁法等の指針としての位置付け、NDA・工場見学・産業データ、無償の中間成果物やPoC、共同研究開発、非侵害保証などの契約実務へ落として解説する。最終指針公表後も、契約・情報管理の具体策を読む資料として価値がある。",
      whyImportant: [
        "指針の抽象的な行為類型を、片務的NDA、工場見学、リアルタイム産業データ、無償PoC・中間成果物など具体的な交渉場面へ展開している",
        "知財対価を一律に分離・ロイヤルティ化すればよいわけではなく、私的自治と個別協議を残すべきという反作用まで示している",
        "段階的な情報開示、タイムスタンプ、商社を介した基本契約の見直しなど、受発注双方の運用へ落とし込める"
      ],
      audience: ["企業法務", "知財部門", "研究開発・調達部門", "契約審査担当"],
      audienceReason: "最終指針の行為類型を、NDA・共同研究・業務委託・知財条項の具体的なレビューと交渉手順へ変換するため。",
      categories: ["知的財産", "契約", "独占禁止法・競争法"],
      relatedTopics: [ipTopic],
      relatedIssues: ["iptx-information-disclosure", "iptx-value-compensation", "iptx-rnd-ownership", "iptx-warranty-liability"],
      primarySourceIds: [ipSource],
      legacyReformInference: false,
      whatChanged: "整理変更なし／知財取引指針をNDA・情報開示・対価・共同研究・責任分担へ落とし込む実務解説を追加した。"
    },
    {
      id: "article-mhlw-pension-effective-notice-20260915",
      title: "令和7年年金制度改正法の一部施行に伴う関係政令等について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-17",
      url: "https://www.mhlw.go.jp/hourei/doc/tsuchi/T260915T0020.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／施行期日・関係政令等",
      status: "adopted",
      summary: "令和7年年金制度改正法の一部について2026年10月1日を施行日とし、短時間労働者の月額8.8万円賃金要件撤廃に伴う厚生年金保険法施行令等の整備を示す一次資料。",
      whyImportant: [
        "公布後3年以内とされていた賃金要件撤廃の具体的施行日を2026年10月1日と確認できる",
        "最低賃金減額特例対象者など、賃金要件撤廃後の例外的取扱いを下位法令と合わせて確認する基準になる",
        "10月の資格取得・給与対応を『予定』ではなく確定した施行ルールで管理できる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務"],
      audienceReason: "2026年10月の短時間労働者の加入判定と給与・資格取得対応を確定ルールで準備するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [socialTopic],
      relatedIssues: ["social-insurance-2026-wage-requirement"],
      primarySourceIds: [pensionLaw, effectiveNotice],
      reformEventId: socialEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [effectiveNotice],
      legacyReformInference: false,
      whatChanged: "社会保険適用拡大を新テーマ化し、2026年10月1日の賃金要件撤廃を確定情報として整理した。"
    },
    {
      id: "article-nenkin-short-time-expansion-20260916",
      title: "短時間労働者に対する健康保険・厚生年金保険の適用の拡大",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.nenkin.go.jp/tokusetsu/tekiyokakudai.html",
      sourceType: "primary",
      sourceLabel: "一次資料・日本年金機構／適用拡大案内",
      status: "adopted",
      summary: "短時間労働者の社会保険適用拡大について、2026年10月の月額8.8万円要件撤廃と、2027年以降の企業規模要件の段階的拡大を事業主・労働者向けに整理する最新案内。",
      whyImportant: [
        "2026年10月の賃金要件撤廃を、実際の加入手続を担う日本年金機構の最新案内で確認できる",
        "企業規模ごとの2027年・2029年・2032年・2035年の適用時期を人事の中期計画へ落とせる",
        "『106万円の壁』だけでなく週20時間等の加入条件を併せて確認できる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "経営企画"],
      audienceReason: "自社の企業規模と短時間労働者の働き方から、いつ誰が加入対象になるかを実務上確認するため。",
      categories: ["労務"],
      relatedTopics: [socialTopic],
      relatedIssues: ["social-insurance-2026-wage-requirement", "social-insurance-2027-enterprise-size"],
      primarySourceIds: [pensionLaw, effectiveNotice, shortTimeSource],
      reformEventId: socialEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [effectiveNotice],
      legacyReformInference: false,
      whatChanged: "新テーマに、日本年金機構の最新適用拡大案内を追加し、企業規模別の対応時期を整理した。"
    },
    {
      id: "article-nenkin-premium-adjustment-20260911",
      title: "保険料調整制度とは",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      sourceType: "primary",
      sourceLabel: "一次資料・日本年金機構／保険料調整制度",
      status: "adopted",
      summary: "2026年10月から始まる保険料調整制度について、対象事業所が事業主の保険料負担割合を一時的に引き上げ、標準報酬月額12.6万円以下の対象短時間労働者の本人負担を通算3年間軽減し、追加負担相当額は原則として納付後に還付される仕組みを示す。",
      whyImportant: [
        "制度の対象事業所・対象被保険者・利用期間を公式案内から確認できる",
        "加入対象拡大に伴う手取り減少への対応を、保険料負担割合の変更と追加負担相当額の還付を組み合わせる制度として理解できる",
        "給与計算、本人説明、申出期限の管理を始める基準資料になる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "財務・経営管理"],
      audienceReason: "保険料調整制度を利用するかを判断し、給与計算と申出手続を準備するため。",
      categories: ["労務"],
      relatedTopics: [socialTopic],
      relatedIssues: ["social-insurance-2026-premium-adjustment"],
      primarySourceIds: [pensionLaw, premiumSource],
      reformEventId: socialEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [premiumSource],
      legacyReformInference: false,
      whatChanged: "新テーマに、2026年10月開始の保険料調整制度の対象者・期間・負担構造を追加した。"
    },
    {
      id: "article-tmi-pension-reform-20250620",
      title: "【労働法ブログ】令和7年年金制度改正法の成立について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17174.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／年金制度改正法",
      status: "adopted",
      summary: "2025年年金制度改正法を企業人事の視点から解説し、短時間労働者の月額8.8万円要件撤廃、企業規模要件の10年間の段階的撤廃、個人事業所の業種要件撤廃、保険料負担軽減措置までを一つの実務スケジュールとして整理する。",
      whyImportant: [
        "賃金要件と企業規模要件を別々の施行スケジュールとして整理し、人事実務への影響が読みやすい",
        "最低賃金減額特例対象者の例外や、既存個人事業所の経過措置など見落としやすい境界を説明している",
        "企業規模拡大に伴う事業主負担と保険料調整措置を同じ人事労務の文脈で読める"
      ],
      audience: ["企業法務", "人事・労務", "給与・社会保険担当"],
      audienceReason: "改正法全体のうち、雇用・社会保険実務に直結する変更と時間軸を一度に把握するため。",
      categories: ["労務"],
      relatedTopics: [socialTopic],
      relatedIssues: [
        "social-insurance-2026-wage-requirement",
        "social-insurance-2027-enterprise-size",
        "social-insurance-2026-premium-adjustment",
        "social-insurance-2029-individual-establishments"
      ],
      primarySourceIds: [pensionLaw],
      reformEventId: socialEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [pensionLaw],
      legacyReformInference: false,
      whatChanged: "新テーマに、年金制度改正を企業人事の施行スケジュールへ落とす基礎的な実務解説を追加した。"
    },
    {
      id: "article-tmi-labor-update-social-insurance-20260915",
      title: "【労働法ブログ】労働法最新情報（2026年9月15日）",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所 労働法プラクティスグループ",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18816.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／社会保険10月施行アップデート",
      status: "adopted",
      summary: "2026年10月1日の月額8.8万円賃金要件撤廃を前に、9月11日の政省令、最低賃金減額特例対象者の扱い、日本年金機構の保険料調整制度、短時間の正規型労働者として使用される個人事業主等の資格取扱いをまとめた直前アップデート。",
      whyImportant: [
        "成立法の一般解説だけでは拾いにくい9月の施行政省令と例外取扱いを直前にまとめている",
        "賃金要件撤廃と保険料調整制度を同じ10月1日の人事・給与対応として確認できる",
        "社会保険加入対象の例外や境界事例について、厚労省・年金機構の最新資料へ直接たどれる"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務"],
      audienceReason: "2026年10月1日の施行直前に、対象者抽出と例外確認を最新の政省令・実務資料で最終点検するため。",
      categories: ["労務"],
      relatedTopics: [socialTopic],
      relatedIssues: ["social-insurance-2026-wage-requirement", "social-insurance-2026-premium-adjustment"],
      primarySourceIds: [pensionLaw, effectiveNotice, premiumSource],
      reformEventId: socialEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [effectiveNotice],
      legacyReformInference: false,
      whatChanged: "新テーマに、2026年10月施行直前の政省令・例外取扱い・保険料調整制度を横断する実務アップデートを追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
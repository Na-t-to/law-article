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

  const topic = "patent-network-inventions-infringement-review-2026";
  const courtIssue = "patent-network-territoriality-2025";
  const guidanceIssue = "patent-network-guidance-review-2026";
  const deterrenceIssue = "patent-infringement-deterrence-review-2026";
  const reformEventId = "patent-act-network-inventions-infringement-review-2026";
  const jpo56 = "source-jpo-patent-system-committee-56-2026";
  const jpo57 = "source-jpo-patent-system-committee-57-2026";
  const court = "source-supreme-court-network-patent-2025";

  const additions = [
    {
      id: "article-supreme-court-network-patent-2025",
      title: "最高裁令和7年3月3日判決―国外サーバを含むネットワークシステムと特許法上の『生産』",
      publisher: "最高裁判所",
      author: "最高裁判所第二小法廷",
      publishedAt: "2025-03-03",
      collectedAt: "2026-09-17",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93839.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・最高裁判決／ネットワーク関連発明",
      status: "adopted",
      summary: "米国所在サーバから日本所在端末へファイルを配信し、国外サーバと国内端末を含むシステムを構築する行為について、最高裁が特許法2条3項1号の『生産』該当性を判断した判決。国外行為・国外構成を含むというだけで日本の特許権の効力を否定せず、行為とシステムを全体として実質的に国内の生産と評価できるかを見る枠組みを示した。",
      whyImportant: [
        "国外サーバを使うクラウド・配信サービスでも、日本特許の侵害リスクをサーバ所在地だけで判定できないことを最高裁の一次資料から確認できる",
        "日本向けサービスの情報処理過程、国内端末での発明効果、国外サーバ所在地の意味、特許権者への経済的影響という具体的な評価事情を把握できる",
        "2026年の特許制度小委員会が進めるネットワーク関連発明の『考え方の整理』の出発点となる判例を直接確認できる"
      ],
      audience: ["知的財産・特許担当", "企業法務", "SaaS・クラウド事業者", "プロダクト・技術担当", "紛争担当"],
      audienceReason: "越境クラウド・ネットワークサービスのFTO、特許クリアランス、システム設計、紛争対応で、日本特許の地理的射程を評価する基準点にするため。",
      categories: ["知的財産", "AI・デジタル", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: [courtIssue],
      primarySourceIds: [court],
      legacyReformInference: false,
      whatChanged: "新テーマを追加／国外サーバを含むネットワークシステムについて、実質的に国内の『生産』と評価できる場合に日本の特許権が及び得るという最高裁の判断を基準点として整理した。"
    },
    {
      id: "article-jpo-patent-system-committee-56-2026",
      title: "第56回特許制度小委員会 議事次第・配布資料一覧",
      publisher: "特許庁",
      author: "特許庁",
      publishedAt: "2026-06-12",
      collectedAt: "2026-09-17",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/56-shiryou.html",
      sourceType: "primary",
      sourceLabel: "一次資料・特許制度見直し／ネットワーク関連発明・侵害抑止",
      status: "adopted",
      summary: "2026年6月16日の第56回特許制度小委員会の公式資料一覧。国際的な事業活動におけるネットワーク関連発明等の適切な権利保護、AI技術の発達を踏まえた特許制度、知的財産の侵害抑止を議題とし、資料1『特許制度に関する検討課題について』を公表している。",
      whyImportant: [
        "ネットワーク関連発明と侵害抑止が、2026年の特許制度見直しで正式な審議テーマになっていることを一次資料で確認できる",
        "最高裁判決後も直ちに法改正へ進まず、『考え方の整理』や制度対応の要否を検討している段階を追う基準点になる",
        "侵害抑止の検討で、損害賠償・推定覆滅・悪質侵害・証拠収集といった論点を継続追跡する入口になる"
      ],
      audience: ["知的財産・特許担当", "企業法務", "紛争担当", "技術・プロダクト担当"],
      audienceReason: "ネットワーク関連発明の行政整理と、侵害抑止に関する制度見直しの進行段階を一次資料から追うため。",
      categories: ["知的財産", "AI・デジタル", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: [guidanceIssue, deterrenceIssue],
      primarySourceIds: [jpo56],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [jpo56],
      legacyReformInference: false,
      whatChanged: "新テーマを追加／ネットワーク関連発明の『考え方の整理』と、侵害抑止の民事救済・証拠収集等を未確定の制度見直しとして追跡する構造を追加した。"
    },
    {
      id: "article-tmi-patent-system-committee-56-2026",
      title: "第56回特許制度小委員会（2026年6月16日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山智恵・齋藤俊",
      publishedAt: "2026-06-23",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18487.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／特許制度小委員会 第56回",
      status: "adopted",
      summary: "第56回特許制度小委員会に委員・オブザーバーとして参加する弁護士が、ネットワーク関連発明の『考え方の整理』、AIと特許制度、侵害抑止の統計・論点を解説した記事。特に、ネットワーク関連発明では拙速なルール化を避けた柔軟な行政整理を目指していること、侵害抑止では利益吐き出し型損害賠償等も含め議論されたが法改正の結論には至っていないことを整理する。",
      whyImportant: [
        "公式資料の論点を、委員会に参加する実務家の視点から、企業がどこに注目すべきかまで読み解ける",
        "ネットワーク関連発明を直ちに条文化せず『考え方の整理』で柔軟性を確保しようとする政策意図を理解しやすい",
        "2019年改正後の損害賠償統計について法改正との因果関係は不明という留保を含め、侵害抑止議論を過度に先取りせず読める"
      ],
      audience: ["知的財産・特許担当", "企業法務", "紛争担当", "SaaS・クラウド事業者"],
      audienceReason: "特許庁資料の数字・審議項目を、ネットワーク事業と特許紛争の実務上の意味へ落として理解するため。",
      categories: ["知的財産", "AI・デジタル", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: [guidanceIssue, deterrenceIssue],
      primarySourceIds: [jpo56],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [jpo56],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／ネットワーク関連発明の行政整理と侵害抑止の検討を、委員会参加者の解説から実務上の意味・留保まで把握できる資料を追加した。"
    },
    {
      id: "article-tmi-patent-system-committee-57-2026",
      title: "第57回特許制度小委員会（2026年8月20日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山智恵・齋藤俊",
      publishedAt: "2026-08-24",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18724.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／特許制度小委員会 第57回",
      status: "adopted",
      summary: "第57回特許制度小委員会の審議を、委員・オブザーバーとして参加する弁護士が解説した記事。ネットワーク関連発明では被疑侵害行為の類型と海外事例を用いた『考え方の整理』のドラフト準備・構成案へ議論が進み、侵害抑止では令和元年以降の損害賠償・推定覆滅の集計、悪質侵害への民事救済、諸外国制度、証拠収集が検討されたことを具体化する。",
      whyImportant: [
        "2026年6月段階の抽象的な方向性から、8月には『考え方の整理』のドラフト準備・構成案まで進んだことを追える",
        "侵害抑止について、判決上の損害賠償額約56億円と推定覆滅利益額約144億円という問題意識や、単独理由で5割以上の覆滅が認定された事例の存在を把握できる",
        "悪質侵害への民事救済、諸外国の金銭的救済、証拠収集を一体の制度検討として捉えつつ、なお継続審議であることを確認できる"
      ],
      audience: ["知的財産・特許担当", "企業法務", "紛争担当", "経営・知財戦略担当"],
      audienceReason: "次の制度改正・行政整理につながり得る論点の成熟度を把握し、訴訟・ライセンス・FTOの準備を早めるため。",
      categories: ["知的財産", "AI・デジタル", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: [guidanceIssue, deterrenceIssue],
      primarySourceIds: [jpo57],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [jpo57],
      legacyReformInference: false,
      whatChanged: "テーマ更新／ネットワーク関連発明の『考え方の整理』がドラフト準備・構成案の検討へ進んだことと、悪質侵害・損害賠償・証拠収集の制度議論の具体化を反映した。"
    },
    {
      id: "article-not-patent-territoriality-2025",
      title: "Patents: – The Principle of Territoriality: Two Notable Judgments of the Supreme Court of Japan rendered on March 3, 2025",
      publisher: "長島・大野・常松法律事務所",
      author: "戸崎健司・羽鳥貴広・加藤希",
      publishedAt: "2025-03-25",
      collectedAt: "2026-09-17",
      url: "https://www.nagashima.com/en/publications/publication20250307-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／ネットワーク関連発明と属地主義",
      status: "adopted",
      summary: "2025年3月3日の最高裁2判決を、プログラムの電気通信回線を通じた提供等に関するDwango Iと、国外サーバ・国内端末を含むシステムの『生産』に関するDwango IIに分けて解説したニュースレター。最高裁の判断要素を整理しつつ、判例の射程を特定の越境実施行為に関するものとして慎重に評価している。",
      whyImportant: [
        "最高裁2判決を一体で読み、プログラム配信とシステム構築という異なる実施行為を区別できる",
        "国内サービス提供の情報処理、国内端末での効果、国外サーバ所在地の意味、経済的影響という判断事情を実務向けに整理している",
        "判決の先例的射程を広げすぎず、ネットワーク関連発明の制度議論との関係まで接続している"
      ],
      audience: ["知的財産・特許担当", "企業法務", "SaaS・クラウド事業者", "紛争担当", "国際取引担当"],
      audienceReason: "越境ネットワーク発明の最高裁判例を、二つの事件の違いと実務上の評価要素を対応付けて理解するため。",
      categories: ["知的財産", "AI・デジタル", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: [courtIssue],
      primarySourceIds: [court],
      legacyReformInference: false,
      whatChanged: "整理変更なし／最高裁2判決の違いと判断事情、射程を独立した実務解説で補強した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

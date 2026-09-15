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

  const articles = [
    {
      id: "article-jftc-antitrust-compliance-guide-2025",
      title: "企業における独占禁止法コンプライアンスプログラムの整備・運用状況に関する実態調査及び実効的な独占禁止法コンプライアンスプログラムの整備・運用のためのガイドの改訂について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-15",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2025/jun/250620kigyou_compliance..html",
      sourceType: "primary",
      sourceLabel: "一次資料／独占禁止法コンプライアンス・実態調査／改訂ガイド",
      status: "adopted",
      summary: "上場企業を対象に独占禁止法コンプライアンスプログラムの整備・運用状況を調査し、その結果を踏まえて公取委のガイドを改訂した資料。従来のカルテル・談合対応に加え、アルゴリズム活用に伴うカルテルリスク、労務費等の価格転嫁、私的独占・不公正な取引方法、監査におけるAI活用、中小企業の取組、社内規程・マニュアル作成上のポイントまで対象を広げている。",
      whyImportant: [
        "独禁法コンプライアンスを規程・研修の形式的整備ではなく、経営トップ、リスク分析、相談、監査、内部通報、疑義発生後の対応まで含む継続的なプログラムとして点検できる",
        "2025年改訂でAI・アルゴリズム、価格転嫁、私的独占・不公正な取引方法など近時の企業実務に直結するリスクが明示的に追加されている",
        "実態調査で得られた企業の好取組・失敗事例と、社内規程・マニュアルの作成ポイントを制度設計へ落とし込める",
        "全企業に一律のフルスペック対応を求めるのではなく、自社のリスクとリソースに応じて優先順位を付ける前提を確認できる"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "経営企画", "営業・調達管理"],
      audienceReason: "独占禁止法リスクを自社の事業・組織に合わせて評価し、規程、研修、相談、監査、内部通報、調査対応を一体で見直すため。",
      categories: ["独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: ["antitrust-compliance-enforcement"],
      relatedIssues: ["antitrust-compliance-risk-based-program", "antitrust-competitor-contact-controls", "antitrust-detection-investigation-response"],
      primarySourceIds: ["source-jftc-antitrust-compliance-guide-2023", "source-jftc-antitrust-compliance-guide-2025"],
      legacyReformInference: false,
      whatChanged: "新規テーマ作成／2025年改訂の独禁法コンプライアンスガイドを基礎に、平時の予防・発見から疑義発生後の調査・当局対応までを一つの棚として整理した。"
    },
    {
      id: "article-jftc-antitrust-enforcement-fy2025",
      title: "令和7年度における独占禁止法違反事件の処理状況について",
      publisher: "公正取引委員会",
      author: "公正取引委員会",
      publishedAt: "2026-06-08",
      collectedAt: "2026-09-15",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2026/jun/260608_kanki.html",
      sourceType: "primary",
      sourceLabel: "一次資料／独占禁止法・2025年度執行状況",
      status: "adopted",
      summary: "公正取引委員会による2025年度の独占禁止法違反事件の処理状況。11件の排除措置命令と4件の確約計画認定、課徴金、警告・注意、価格カルテル・入札談合、優越的地位の濫用、デジタル分野の審査、課徴金減免・調査協力減算の利用状況等を体系的に示している。課徴金減免制度に基づく報告等は182件で、前年度の109件から増加した。",
      whyImportant: [
        "企業がどの行為類型・市場を監査や研修の重点に置くかを、直近の公取委執行実績から更新できる",
        "カルテル・談合だけでなく、優越的地位の濫用、再販売価格拘束、デジタル分野、価格転嫁等を含む執行の広がりを確認できる",
        "課徴金減免申請182件という利用状況から、違反疑義を早期に把握して申請判断へ移る体制の重要性を実務的に把握できる",
        "排除措置命令・確約・警告・注意は法的性質が異なるため、処理類型を区別して事案を読む基礎になる"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "営業・販売管理", "調達管理"],
      audienceReason: "公取委の直近の執行重点を自社の独禁法リスク評価、監査計画、研修・相談体制へ反映するため。",
      categories: ["独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: ["antitrust-compliance-enforcement"],
      relatedIssues: ["antitrust-detection-investigation-response", "antitrust-enforcement-priorities-2026"],
      primarySourceIds: ["source-jftc-antitrust-enforcement-fy2025"],
      legacyReformInference: false,
      whatChanged: "執行動向補完／2025年度の法的措置、警告・注意、課徴金減免、デジタル分野等をコンプライアンスの重点見直しに接続した。"
    },
    {
      id: "article-not-antitrust-compliance-guide-2024",
      title: "「実効的な独占禁止法コンプライアンスプログラムの整備・運用のためのガイド－カルテル・談合への対応を中心として－」の公表",
      publisher: "長島・大野・常松法律事務所",
      author: "田中亮平・福原あゆみ・深水大輔・高井志穂",
      publishedAt: "2024-02-01",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20240201-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／独禁法コンプライアンス・カルテル／談合",
      status: "adopted",
      summary: "公取委の2023年独禁法コンプライアンスガイドを、企業が実際に整備すべき制度・運用へ分解した実務解説。経営トップのコミットメント、リスクベース分析、競争事業者との接触ルール、研修・相談、監査、内部通報、社内リニエンシー、違反疑義発生時の資料保全・社内調査、定期的な評価・更新までを一連のプログラムとして整理している。",
      whyImportant: [
        "公取委ガイドの抽象的な構成要素を、社内規程、事前承認・事後報告、研修、監査、内部通報等の具体的な実装単位へ落とせる",
        "競争事業者との接触について、事前承認、問題となり得る話題への対応、事後報告、証跡管理まで一続きで確認できる",
        "違反疑義発生後の資料破棄・隠匿・改ざん禁止、証拠保全、社内調査、課徴金減免制度の利用等を危機対応フローとして読める",
        "コンプライアンス体制が形骸化した場合の取締役の善管注意義務リスクまで含め、単なる独禁法担当者向け施策ではなくガバナンス課題として理解できる"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "取締役・経営管理", "内部通報担当"],
      audienceReason: "公取委ガイドを自社の規程・承認・研修・監査・内部通報・社内調査フローへ具体化するため。",
      categories: ["独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: ["antitrust-compliance-enforcement"],
      relatedIssues: ["antitrust-compliance-risk-based-program", "antitrust-competitor-contact-controls", "antitrust-detection-investigation-response"],
      primarySourceIds: ["source-jftc-antitrust-compliance-guide-2023"],
      legacyReformInference: false,
      whatChanged: "実務解説補完／公取委ガイドを競合接触管理、内部通報・社内リニエンシー、証拠保全・社内調査等の具体的な企業運用へ落とした。"
    },
    {
      id: "article-amt-jftc-enforcement-fy2025",
      title: "The Japan Fair Trade Commission Published \"Enforcement of the Antimonopoly Act in FY2025\"",
      publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
      author: "Yoshiharu Usuki・Takashi Inoue",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-15",
      url: "https://amt-law.com/en/insights/trending-news/trending-news_20260804001_en_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／公取委・2025年度執行動向",
      status: "adopted",
      summary: "公取委の2025年度独禁法執行を、法的措置の件数だけでなく、価格カルテル・入札談合、Google・Visa等のIT／デジタル分野、課徴金減免・調査協力減算、価格転嫁等に関する警告・注意の動向から整理した実務解説。警告等は正式な違反認定ではなくても公表によるレピュテーションリスクがあるため、企業のコンプライアンス強化を促している。",
      whyImportant: [
        "年度統計を、企業がどの領域を優先的に監査・研修すべきかという実務上の意味に翻訳している",
        "価格カルテル・入札談合とIT・デジタル分野を並べて、公取委の執行対象が伝統的な競争制限行為からデジタル市場まで広がっていることを確認できる",
        "課徴金減免申請の増加と調査協力減算の利用状況を、違反疑義発生時の迅速な意思決定の重要性として読める",
        "警告・注意は違反認定と区別しつつ、公表によるレピュテーションリスクをコンプライアンス上の考慮要素として示している"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "競争法担当", "経営管理"],
      audienceReason: "公取委の年次執行統計を、リスク評価・監査重点・当局対応・レピュテーション管理へ落とすため。",
      categories: ["独占禁止法・競争法", "危機管理・コンプライアンス"],
      relatedTopics: ["antitrust-compliance-enforcement"],
      relatedIssues: ["antitrust-detection-investigation-response", "antitrust-enforcement-priorities-2026"],
      primarySourceIds: ["source-jftc-antitrust-enforcement-fy2025"],
      legacyReformInference: false,
      whatChanged: "実務解説補完／2025年度の公取委執行を、監査重点、リニエンシー判断、公表リスクを含む企業コンプライアンスの観点から補完した。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

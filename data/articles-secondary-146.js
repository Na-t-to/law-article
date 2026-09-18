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

  const boardSource = {
    id: "source-fsa-board-function-casebook-2026",
    title: "取締役会の機能強化の取組みに関する事例集2026",
    type: "report",
    typeLabel: "金融庁・実務事例集",
    authority: "金融庁",
    publishedAt: "2026-07-21",
    url: "https://www.fsa.go.jp/news/r7/singi/20260721/10.pdf",
    importance: "高",
    whyImportant: "2026年改訂コーポレートガバナンス・コードが重視する取締役会の機能強化について、上場会社24社へのヒアリングを基に、取締役会の役割・責務、CEOサクセッション、社外取締役、取締役会事務局、実効性評価等の具体的な運用例を整理した金融庁の公式事例集。特定の型を一律に求めるものではなく、自社の取締役会像を検討するための実務参照資料として位置付けられている。",
    topics: ["corporate-governance-code-2026"]
  };

  let currentSources = window.SOURCE_DATA || [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(boardSource.id) && !sourceUrls.has(normalizeUrl(boardSource.url))) {
    currentSources = currentSources.concat([boardSource]);
    window.SOURCE_DATA = currentSources;
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== "corporate-governance-code-2026") return topic;
    return {
      ...topic,
      sourceIds: Array.from(new Set([...(topic.sourceIds || []), boardSource.id]))
    };
  });

  const articles = [
    {
      id: "article-fsa-board-function-casebook-2026",
      title: "取締役会の機能強化の取組みに関する事例集2026",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-07-21",
      collectedAt: "2026-09-15",
      url: "https://www.fsa.go.jp/news/r7/singi/20260721/10.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・実務事例集／取締役会の機能強化",
      status: "adopted",
      summary: "2026年改訂コーポレートガバナンス・コードが重視する取締役会の機能強化について、金融庁がプライム・スタンダード市場の上場会社24社へのヒアリングを基に具体例を整理した事例集。取締役会の在るべき姿と経営陣への権限委譲、CEOサクセッション、社外取締役同士・投資家との対話、取締役会事務局の組織・事前準備・情報非対称性の解消、実効性評価の設計と結果活用までを横断しており、改訂コードの『機能強化』を会議運営と組織設計へ落とす際の公式な実務参照資料になる。",
      whyImportant: [
        "改訂コードが抽象的に求める取締役会の機能強化を、取締役会の役割、執行側への権限委譲、議題設定、社外取締役の活用といった具体的な運用例で確認できる",
        "取締役会事務局について、議長との事前連携、出席者への事前説明、重点テーマの設定、情報非対称性の解消など、会議の実効性を左右する実務を独立した論点として整理している",
        "実効性評価をアンケート実施で終わらせず、課題抽出、改善施策、開示へつなげる事例を含み、CG報告書の説明と実際の取締役会運営を接続しやすい",
        "事例集自体が全社一律のベストプラクティスを要求しないと明示しており、プリンシプルベースで自社の取締役会像を検討するという2026年改訂の趣旨と整合する"
      ],
      audience: ["企業法務", "コーポレート・ガバナンス担当", "取締役会事務局", "経営企画", "IR・開示担当"],
      audienceReason: "2026年改訂コードへの対応を規程・開示の修正だけで終わらせず、取締役会の役割分担、議題、事前準備、社外取締役支援、実効性評価の運用まで具体化するため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: ["cg-code-board-function", "cg-code-reporting-transition"],
      primarySourceIds: ["source-fsa-board-function-casebook-2026", "source-fsa-cg-code-2026", "source-jpx-cg-code-2026"],
      reformEventId: "corporate-governance-code-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-fsa-cg-code-2026", "source-jpx-cg-code-2026"],
      legacyReformInference: false,
      whatChanged: "バックフィル／2026年改訂CGコードの取締役会機能強化について、役割分担、社外取締役、事務局、実効性評価を具体例で確認できる金融庁事例集を独立ARTICLEとして追加した。"
    },
    {
      id: "article-amt-space-act-enactment-2026",
      title: "Enactment of the Amended \"Space Activities Act\" — Overview of the Amendments and Remaining Issues",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "Wataru Shimizu・Tomoki Yamada",
      publishedAt: "2026-08-19",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260819001_en_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／2026年宇宙活動法改正",
      status: "adopted",
      summary: "2026年改正宇宙活動法について、規制対象を人工衛星の打上げから宇宙ロケットの打上げ一般へ拡張した点を起点に、打上げ許可の審査事項、許可されたもの以外の搭載禁止、人工衛星等の打上げ前適合認定、所有・管理権限等の申請資料、宇宙空間の有害な汚染防止、第三者損害に関する無過失責任・責任集中の再構成まで整理する。人の宇宙飛行、再使用型ロケット、将来の宇宙輸送システムは今後の規制・審査基準・追加検討に残ることも明示しており、成立済み部分と継続検討事項を切り分ける補助になる。",
      whyImportant: [
        "打上げ許可の審査を、目的、ロケット・射場の安全基準、搭載物の用途・構造、有害な宇宙汚染防止、申請者の実行能力まで具体化しており、公式概要より申請実務の見取り図を得やすい",
        "打上げ前適合認定について、対象物の所有・管理権限、投入先・配置先、物理的構造等の提出情報まで触れており、衛星・ペイロード側の準備事項を把握しやすい",
        "落下ロケット等の第三者損害について、無過失責任、求償、責任集中が新しい打上げ概念に合わせて再整理された点を示し、打上げ契約・保険・責任分担の検討に接続できる",
        "人の宇宙飛行、再使用型ロケット、将来の宇宙輸送システムを今回の成立済み改正から分離しており、未確定事項を成立済みルールとして扱う誤りを避けられる"
      ],
      audience: ["企業法務", "宇宙・航空事業者", "ロケット打上げ事業者", "衛星・ペイロード事業者", "保険・リスク管理担当"],
      audienceReason: "2026年改正を、許可申請、搭載物認定、汚染防止、損害賠償、将来規制という事業実務の単位で整理し、契約・許認可・保険対応へ落とすため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: ["space-activities-act-2026-rocket-launch"],
      relatedIssues: ["space-act-rocket-launch-scope-2026", "space-act-satellite-liability-2026", "space-act-future-transport-rules-2026"],
      primarySourceIds: ["source-cao-space-act-enactment-2026", "source-cao-space-act-lawtext-2026", "source-cao-space-act-overview-2026", "source-cao-space-act-final-review-2025"],
      reformEventId: "space-activities-act-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cao-space-act-enactment-2026", "source-cao-space-act-lawtext-2026"],
      legacyReformInference: false,
      whatChanged: "バックフィル／2026年宇宙活動法改正について、打上げ許可の審査事項、搭載物の適合認定、第三者損害の責任集中と、将来規制として残る事項を補強した。"
    },
    {
      id: "article-miyake-privacy-rules-20260917",
      title: "令和8年改正個人情報保護法　政令・規則の中身が動き出した～同意例外・子供・顔特徴データ・安全管理措置",
      publisher: "三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-18",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E4%BB%A4%E5%92%8C8%E5%B9%B4%E6%94%B9%E6%AD%A3%E5%80%8B%E4%BA%BA%E6%83%85%E5%A0%B1%E4%BF%9D-2/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／2026年改正個人情報保護法の政令・規則案と施行準備",
      status: "adopted",
      summary: "2026年9月16日の第369回個人情報保護委員会資料を、成立済みの改正法と未確定の政令・規則・ガイドラインに切り分けて解説する。新しい同意例外の枠、家族による予約や3Dセキュア等の検討例、16歳未満の子供の個人情報、顔特徴データの周知、利用停止等、安全管理措置の例示見直しまでを条文と資料の関係で整理する。特に、政令・規則は法律の枠を超えて例外を広げられないため柔軟な下位ルールを前提に設計しないこと、安全管理措置ガイドラインの見直しは改正法本体より早い日程で進むため別工程で準備することを実務上の注意点として示す。",
      whyImportant: [
        "9月16日の一次資料を、成立済みの改正法と案段階の下位ルールに分け、企業が今確定事項として扱える範囲を明確にしている",
        "同意例外、子供、顔特徴データ、安全管理措置を、データフロー・同意UI・年齢対応・カメラ周知・セキュリティ管理という実装課題へ接続している",
        "政令・規則で例外が広く救済されることを前提にしないという解釈上の境界を示し、施行準備の過剰な楽観を避けられる",
        "安全管理措置ガイドライン見直しが改正法本体と別の早い工程で進む点を示し、プライバシー部門とセキュリティ部門の準備順序を組み立てやすい"
      ],
      audience: ["企業法務", "個人情報・プライバシー担当", "AI・データ担当", "プロダクト・UX担当", "情報セキュリティ担当"],
      audienceReason: "2026年改正法の施行準備を、成立済み法律・案段階の下位ルール・安全管理措置ガイドラインの別工程に分け、同意UIや年齢対応、顔特徴データ、セキュリティ実装へ落とすため。",
      categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
      relatedTopics: ["personal-information-protection-2026-amendment", "privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric", "privacy-enforcement-safety-management"],
      primarySourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-rulemaking-basic-1-2026", "source-ppc-security-measures-guideline-review-2026"],
      reformEventId: "privacy-law-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-rulemaking-basic-1-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説追加／9月16日に具体化が始まった政令・規則案を、成立済み法律との境界、同意UI・子供・顔特徴データ・安全管理措置の実装、施行準備の時間軸まで含めて整理した。"
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
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

  const civilTopic = "ai-civil-liability-governance-2026";
  const civilIssues = [
    "ai-civil-support-reliance-classification-2026",
    "ai-civil-user-duty-business-process-2026",
    "ai-civil-developer-provider-duty-2026",
    "ai-civil-product-liability-update-2026"
  ];
  const civilSource = "source-meti-ai-civil-liability-guide-2026";

  const publicityTopic = "ai-publicity-voice-rights-2026";
  const publicityIssues = [
    "ai-publicity-voice-protection-2026",
    "ai-publicity-disclaimer-identifiability-2026",
    "ai-publicity-provider-dataset-liability-2026"
  ];
  const publicitySource = "source-moj-ai-publicity-voice-report-2026";

  const additions = [
    {
      id: "article-meti-ai-civil-liability-guide-2026",
      title: "「AI利活用における民事責任の解釈適用に関する手引き」を公表しました",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-04-09",
      collectedAt: "2026-09-17",
      url: "https://www.meti.go.jp/press/2026/04/20260409001/20260409001.html",
      sourceType: "primary",
      sourceLabel: "一次資料・AI利活用の民事責任／2026年手引き",
      status: "adopted",
      summary: "AIを用いたサービス・システムが事故や第三者損害に寄与した場面について、不法行為法を中心に現行法の解釈適用の方向性を整理した経産省手引き。配送ルート最適化AI、弁護士業務支援AI、画像生成AI、取引審査AI、外観検査AI、AMR、AIエージェントを題材に、補助／支援型と依拠／代替型という利用形態も整理する。",
      whyImportant: [
        "AI事故の民事責任について新しい特別法を前提とせず、現行の不法行為法・製造物責任法をAIの具体例へどう当てはめるかを一次資料で確認できる",
        "利用者・開発者・提供者ごとに、どのような設計、説明、確認、監視が注意義務の検討要素になり得るかをユースケース別に追える",
        "AIエージェントやフィジカルAIまで射程に含み、AI導入審査、契約、ログ、事故対応を責任論と接続するための基礎資料になる"
      ],
      audience: ["企業法務", "AIガバナンス担当", "プロダクト・開発担当", "リスク管理", "製造・品質保証"],
      audienceReason: "AIを業務へ組み込む際の人の関与、設計・説明、監視、記録、事故対応を、民事責任の観点から事前に設計するため。",
      categories: ["AI・デジタル", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [civilTopic],
      relatedIssues: civilIssues,
      primarySourceIds: [civilSource],
      legacyReformInference: false,
      whatChanged: "新テーマを追加／AI利活用時の不法行為責任・製造物責任を、補助／支援型と依拠／代替型、利用者・開発者・提供者、業務プロセス設計という軸で整理した。"
    },
    {
      id: "article-tmi-ai-agent-civil-liability-reliance-2026",
      title: "AIエージェントの法的留意点 民事責任②　依拠・代替型について ―経産省「AI利活用における民事責任の手引き」を踏まえた検討―",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-05-25",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18375.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／依拠・代替型AIの民事責任・ガバナンス",
      status: "adopted",
      summary: "経産省手引きの依拠／代替型を、訴訟実務と業務プロセスの観点から掘り下げる解説。二類型を機械的な責任判定に使わず具体的な注意義務を見るべきこと、フィジカルAIでは製造物責任と利用者側の安全配慮義務の評価時点がずれ得ること、AI利用者は引渡後も継続的なリスク管理が必要となることを整理する。",
      whyImportant: [
        "補助／支援型か依拠／代替型かというラベル自体より、実際の業務プロセスと各時点の具体的な注意義務が重要だという実務的な読み替えを示している",
        "AMR等のフィジカルAIについて、製造物責任上の引渡時点と利用者の事故発生時点の安全配慮義務を切り分け、アップデート後のリスク管理まで視野に入れている",
        "内部統制、品質管理、労働安全衛生、情報セキュリティ等の既存フレームワークをAIガバナンスへ接続する視点がある"
      ],
      audience: ["企業法務", "AIガバナンス担当", "製造・物流", "品質保証", "リスク管理", "訴訟・紛争担当"],
      audienceReason: "経産省手引きの類型論を実際の注意義務、業務プロセス、フィジカルAIの事故対応へ落とし込むため。",
      categories: ["AI・デジタル", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [civilTopic],
      relatedIssues: civilIssues,
      primarySourceIds: [civilSource],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／補助・支援型／依拠・代替型を機械的な責任判定にせず、具体的注意義務、業務プロセス、フィジカルAIの継続的リスク管理へ落とす視点を追加した。"
    },
    {
      id: "article-pwc-ai-agent-governance-civil-liability-2026",
      title: "AIエージェント利用者に求められるAIガバナンス―「AI利活用における民事責任の解釈適用に関する手引き」から読み解く法的リスク低減の視点",
      publisher: "PwC Japanグループ",
      author: "北村 導人、山田 裕貴、黒瀧 海詩、髙松 礼奈、橋本 哲哉",
      publishedAt: "2026-07-28",
      collectedAt: "2026-09-17",
      url: "https://www.pwc.com/jp/ja/knowledge/news/legal-news/legal-20260728-3.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・PwC／AIエージェント利用者の民事責任・ガバナンス",
      status: "adopted",
      summary: "経産省手引きを踏まえ、依拠／代替型AIエージェントを利用する事業者の責任判断構造と、法的リスクを低減するためのAIガバナンスを整理する実務解説。AIエージェントの自律性を前提に、個々の出力を全面再検証する発想から、用途設定、監視、介入、記録を含む業務プロセスの統制へ視点を移す。",
      whyImportant: [
        "AIエージェント利用企業に焦点を絞り、民事責任の整理を導入時・利用時のAIガバナンスへ接続している",
        "人による個別確認が難しい自律処理について、どのような統制をプロセス側へ置くかという実装論として読める",
        "法務だけでなくIT・リスク管理・内部統制が共同で確認すべき項目を整理する材料になる"
      ],
      audience: ["企業法務", "AIガバナンス担当", "情報システム", "内部統制", "リスク管理", "AIエージェント導入担当"],
      audienceReason: "AIエージェントを人の判断代替として使う業務で、個別出力の確認に依存しない統制・監視・介入設計を検討するため。",
      categories: ["AI・デジタル", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [civilTopic],
      relatedIssues: ["ai-civil-user-duty-business-process-2026", "ai-civil-developer-provider-duty-2026"],
      primarySourceIds: [civilSource],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／AIエージェント利用者の注意義務を、個々の出力の再確認ではなく、用途設定・監視・介入・記録を含むAIガバナンスとして具体化する資料を追加した。"
    },
    {
      id: "article-moj-ai-publicity-voice-report-2026",
      title: "肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書の公表について",
      publisher: "法務省",
      author: "法務省",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-17",
      url: "https://www.moj.go.jp/MINJI/minji05_00778.html",
      sourceType: "primary",
      sourceLabel: "一次資料・生成AIによるパブリシティ権侵害等に関する解釈指針",
      status: "adopted",
      summary: "生成AIの普及に伴う肖像・声等の無断利用を念頭に、現行法・判例法理の解釈適用を整理した法務省検討会報告書。パブリシティ権、肖像等をみだりに利用されない人格的利益、損害賠償の範囲、差止め、不正競争防止法の適用等を複数の想定事例で検討する。",
      whyImportant: [
        "生成AIで他人の肖像・声を生成・利用する場面を、既存のパブリシティ権・人格的利益の判例法理へどう当てはめるかを公式に整理している",
        "生成物の利用者だけでなく、生成AIモデル・サービスや学習用データセットの提供態様まで検討対象としている",
        "損害賠償だけでなく差止めや不正競争防止法との関係まで含み、広告・音声・メディア・AIサービスの運用設計に直結する"
      ],
      audience: ["企業法務", "知的財産担当", "生成AIサービス事業者", "広告・マーケティング", "芸能・メディア", "コンテンツ制作"],
      audienceReason: "実在人物の肖像・声を生成AIで扱う企画・サービスについて、許諾、表示、宣伝、提供者責任、差止め対応を現行法ベースで審査するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: [publicityTopic],
      relatedIssues: publicityIssues,
      primarySourceIds: [publicitySource],
      legacyReformInference: false,
      whatChanged: "新テーマを追加／生成AIによる肖像・声の無断利用について、パブリシティ権・人格的利益・差止め・サービス提供者責任を現行法の解釈指針として整理した。"
    },
    {
      id: "article-uslf-ai-voice-rights-2026-09-04",
      title: "生成AIで第三者の声を再現することは許されるのか―法務省報告書が示した「声の権利」の輪郭―",
      publisher: "弁護士法人内田・鮫島法律事務所",
      author: "高瀬 亜富",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-17",
      url: "https://www.it-houmu.com/archives/2780",
      sourceType: "secondary",
      sourceLabel: "実務解説・内田・鮫島／生成AIと声・パブリシティ権",
      status: "adopted",
      summary: "法務省報告書を基礎に、人の声が人物識別情報・人格の象徴としてパブリシティ権や人格的利益の保護対象となり得ることを実務向けに解説する記事。独立した新しい『声の権利』が創設されたわけではなく、声の類似性と本人を想起させる周辺情報を含めて既存法上の評価を行うと整理する。",
      whyImportant: [
        "『声の権利』という新規制が始まったという誤読を避け、現行の不法行為法・判例法理の問題として位置付けられる",
        "声そのものの類似度だけでなく、人物名、説明、タイトル等の周辺情報が本人識別の評価に影響し得ることを実務的に把握できる",
        "声優・ナレーター等との契約でAI学習・生成・二次利用の許諾範囲を明文化する必要性へつながる"
      ],
      audience: ["企業法務", "知的財産担当", "音声・動画制作", "芸能・メディア", "広告・マーケティング", "AIサービス担当"],
      audienceReason: "他人の声を生成・加工・公開する企画について、新法の有無と既存法上の識別性・利用態様を分けて審査するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: [publicityTopic],
      relatedIssues: ["ai-publicity-voice-protection-2026", "ai-publicity-disclaimer-identifiability-2026"],
      primarySourceIds: [publicitySource],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／『声の権利』を新法と誤解せず、声の類似性と本人を想起させる周辺情報を含めてパブリシティ権・人格的利益を評価する視点を追加した。"
    },
    {
      id: "article-uslf-ai-voice-provider-liability-2026-09-04",
      title: "「あの声が作れる」を売りにする音声生成サービス―法務省の解釈指針から見る提供事業者の責任―",
      publisher: "弁護士法人内田・鮫島法律事務所",
      author: "高瀬 亜富",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-17",
      url: "https://www.it-houmu.com/archives/2786",
      sourceType: "secondary",
      sourceLabel: "実務解説・内田・鮫島／音声生成AI提供者・データセットの責任",
      status: "adopted",
      summary: "音声生成AIの提供者側に焦点を当て、モデル・サービスの提供が常に侵害になるわけではない一方、著名人と同一・類似の声を容易に生成できることをセールスポイントとして有償提供する場合や、特定人の学習を目的としてデータセットを販売・訴求する場合には、提供行為自体が問題となり得ると解説する。",
      whyImportant: [
        "侵害コンテンツを直接作る利用者だけでなく、サービス提供者自身のプロモーションや商品設計が責任評価の対象になり得ることを明確にしている",
        "一般的な学習用データセットと特定人の学習を目的として販売・訴求するデータセットを分けて検討する視点がある",
        "フィルタリングだけを免責策とせず、マーケティング、通報・削除、利用規約、対応記録まで運用として設計する必要性を示している"
      ],
      audience: ["生成AIサービス事業者", "企業法務", "知的財産担当", "プロダクト担当", "マーケティング", "コンテンツ・データ事業者"],
      audienceReason: "音声生成サービスや学習用データセットの設計・訴求・運用が、利用者の行為とは別に提供者責任へつながる可能性を審査するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: [publicityTopic],
      relatedIssues: ["ai-publicity-provider-dataset-liability-2026", "ai-publicity-disclaimer-identifiability-2026"],
      primarySourceIds: [publicitySource],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／音声生成AIの提供者について、特定著名人の再現容易性を売りにする提供態様、データセット販売、フィルタ・通報・規約設計を責任論へ接続した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

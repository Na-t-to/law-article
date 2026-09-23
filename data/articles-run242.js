(() => {
  if (window.__LAW_INDEX_RUN242_APPLIED__) return;
  window.__LAW_INDEX_RUN242_APPLIED__ = true;

  const PRIVACY_TOPIC = "personal-information-protection-2026-amendment";
  const CONSUMER_TOPIC = "consumer-contract-law-review-2026";
  const PRIVACY_REFORM = "privacy-law-2026-amendment";
  const CONSUMER_REFORM = "consumer-contract-law-review-2026";
  const PPC_SOURCE = "source-ppc-369-rule-design-20260916";
  const CAA_INTERIM_SOURCE = "source-caa-consumer-contract-interim-final-20260910";
  const CAA_COMMENT_SOURCE = "source-caa-consumer-contract-public-comment-20260916";
  const PRIVACY_ARTICLE = "article-miyake-privacy-rule-design-20260918";
  const CONSUMER_ARTICLE = "article-miyake-consumer-contract-interim-20260919";

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
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const sources = [
    {
      id: PPC_SOURCE,
      title: "第369回個人情報保護委員会・改正法の政令・規則整備に向けた基本的な考え方（案）①",
      type: "admin_document",
      typeLabel: "個人情報保護委員会・施行準備資料",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260916/",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法について、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等の政令・委員会規則の具体化に初めて踏み込んだ基本的な考え方（案）を公表した一次資料。",
      topics: [PRIVACY_TOPIC]
    },
    {
      id: CAA_INTERIM_SOURCE,
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      type: "policy",
      typeLabel: "消費者庁・制度見直し中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/notice/entry/047482/",
      importance: "高",
      whyImportant: "消費者の多様な脆弱性、契約からの解放、継続的契約の解約妨害・更新・変更、解約料等について、検討会が案段階を経て正式な中間取りまとめとして公表した一次資料。",
      topics: [CONSUMER_TOPIC]
    },
    {
      id: CAA_COMMENT_SOURCE,
      title: "『消費者契約法検討会 中間取りまとめ』に関する御意見募集について",
      type: "public_comment",
      typeLabel: "消費者庁・パブリックコメント",
      authority: "消費者庁",
      publishedAt: "2026-09-16",
      url: "https://www.caa.go.jp/notice/entry/047564/",
      importance: "高",
      whyImportant: "2026年9月10日の中間取りまとめについて、法制的な検討に先立つ意見募集が開始されたことを示す一次資料。現時点では法案・成立法ではないことを区別して追う基準になる。",
      topics: [CONSUMER_TOPIC]
    }
  ];

  let currentSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  sources.forEach((source) => {
    if (sourceIds.has(source.id) || sourceUrls.has(normalizeUrl(source.url))) return;
    currentSources = currentSources.concat([source]);
    sourceIds.add(source.id);
    sourceUrls.add(normalizeUrl(source.url));
  });
  window.SOURCE_DATA = currentSources;

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || (topic.slug !== PRIVACY_TOPIC && topic.slug !== CONSUMER_TOPIC)) return topic;
    const currentSummary = topic.currentSummary || {};
    if (topic.slug === PRIVACY_TOPIC) {
      const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
        if (!issue || !["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"].includes(issue.id)) return issue;
        return { ...issue, sourceIds: addUnique(issue.sourceIds, PPC_SOURCE) };
      });
      return {
        ...topic,
        lastUpdated: "2026-09-23",
        lastVerified: "2026-09-23",
        overview: addUnique(topic.overview, "2026年9月16日の第369回個人情報保護委員会では、改正法の施行に向け、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等について、政令・委員会規則でどこまで具体化するかの基本的な考え方（案）が初めて示された。"),
        currentSummary: {
          ...currentSummary,
          facts: addUniqueMany(currentSummary.facts, [
            "2026年9月16日、個人情報保護委員会は、本人の意思に反しない取扱い、16歳未満の子供、顔特徴データ等を対象に、改正法の政令・規則整備に向けた基本的な考え方（案）を公表した。",
            "本人同意不要の新たな例外については、本人が同意する意思を有している又は同意すべき立場にあり、不測の権利利益侵害をもたらさないことが自明な場合という枠内で、規則による具体化を検討している。",
            "顔特徴データ等については、現時点で規律対象となる特定生体個人識別符号として顔特徴データを対象とする方向を示し、カメラ等の周辺で本人が十分認識できる分かりやすい周知方法等を検討している。"
          ]),
          interpretations: addUniqueMany(currentSummary.interpretations, [
            "同意不要例外は事業者側の利便性や同意取得負担を理由に広く使える仕組みではなく、本人側から見て同意が自明といえる類型に限定して具体化される方向である。",
            "顔特徴データ等の対応はプライバシーポリシーへの一般的記載だけでなく、カメラ・センサーの設置場所における表示や利用停止等請求への導線まで含めて設計する必要がある。"
          ]),
          implications: addUniqueMany(currentSummary.implications, [
            "本人同意を不要とする新例外の利用を想定するデータフローでは、規則の類型に形式的に当てはめるだけでなく、本人の意思に反しないことと不測の権利利益侵害がないことを場面ごとに説明・記録できるようにする。",
            "子供向け・子供利用が想定されるサービスと顔認証・AIカメラ等について、2026年9月16日資料で示された例外・周知の方向性に照らして既存フローを再点検する。"
          ]),
          uncertain: addUniqueMany(currentSummary.uncertain, [
            "2026年9月16日の資料は基本的な考え方の案であり、具体的な政令・委員会規則・ガイドラインは今後の意見交換・ヒアリング・パブリックコメント等を経て変更され得る。",
            "統計作成等の特例、委託先、漏えい等、連絡可能個人関連情報、オプトアウト、課徴金等は9月16日の検討対象外であり、次回以降の具体化を確認する必要がある。"
          ])
        },
        issues,
        sourceIds: addUnique(topic.sourceIds, PPC_SOURCE)
      };
    }

    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || !["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"].includes(issue.id)) return issue;
      return { ...issue, sourceIds: addUnique(issue.sourceIds, CAA_INTERIM_SOURCE) };
    });
    return {
      ...topic,
      lastUpdated: "2026-09-23",
      lastVerified: "2026-09-23",
      overview: addUnique(topic.overview, "2026年9月10日、消費者庁の検討会は中間取りまとめを正式に公表し、9月16日から法制的な検討に先立つパブリックコメントを開始した。中間取りまとめは法案ではなく、今後の法制化過程で変更され得る。"),
      currentSummary: {
        ...currentSummary,
        facts: addUniqueMany(currentSummary.facts, [
          "2026年9月10日、消費者契約法検討会の中間取りまとめが正式に公表され、9月16日から10月31日まで意見募集が行われている。",
          "中間取りまとめは、消費者の多様な脆弱性への配慮、一定の場合の契約からの解放、継続的契約における解約妨害の禁止・合理的な離脱方法、自動更新・重要変更時の通知、解約料に関する情報提供・説明等を主要論点としている。",
          "現段階は法案提出前の制度検討であり、中間取りまとめの内容がそのまま成立法になると確定したものではない。"
        ]),
        interpretations: addUniqueMany(currentSummary.interpretations, [
          "見直し案は規律の強度が一様ではなく、解約妨害の禁止・差止、重要な約款変更時の通知、配慮・説明等を区別して読む必要がある。",
          "法制化を待たず、解約導線、約款変更の通知設計、解約料の算定根拠・説明資料を棚卸しすると、自社実務と検討中規律のずれを把握しやすい。"
        ]),
        implications: addUniqueMany(currentSummary.implications, [
          "サブスクリプション等について、解約導線・解約受付・自動更新通知・重要な約款変更通知を一連の顧客体験として点検する。",
          "解約料・違約金について、現行法上の平均的損害の基準と、検討中の情報提供・説明強化を分けて管理し、算定根拠を説明できる資料を整える。"
        ]),
        uncertain: addUniqueMany(currentSummary.uncertain, [
          "2026年9月10日の中間取りまとめは法案ではなく、パブリックコメント後の法制的検討で条文・対象範囲・法的効果が変更される可能性がある。",
          "解約妨害の具体的類型、配慮規定・契約からの解放手段の最終要件、解約料規律の条文構造、施行時期は未確定である。"
        ])
      },
      issues,
      sourceIds: addUniqueMany(topic.sourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE])
    };
  });

  window.REFORM_EVENT_DATA = (Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : []).map((event) => {
    if (!event || (event.id !== PRIVACY_REFORM && event.id !== CONSUMER_REFORM)) return event;
    if (event.id === PRIVACY_REFORM) {
      return {
        ...event,
        matchSourceIds: addUnique(event.matchSourceIds, PPC_SOURCE),
        sourceIds: addUnique(event.sourceIds, PPC_SOURCE)
      };
    }
    return {
      ...event,
      matchSourceIds: addUniqueMany(event.matchSourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE]),
      sourceIds: addUniqueMany(event.sourceIds, [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE])
    };
  });

  const updates = [
    {
      id: "update-privacy-20260916-rule-design",
      source: PPC_SOURCE,
      headline: "個人情報保護法2026年改正の政令・規則設計が具体化",
      publishedAt: "2026-09-16",
      type: "law-update",
      typeLabel: "施行準備",
      summary: "第369回個人情報保護委員会の基本的な考え方（案）を反映し、同意不要例外、子供、顔特徴データ等について下位ルールの具体化方向を現在整理へ追加した。",
      whatChanged: "8月26日の『どこで定めるか』という全体像から、9月16日に『何をどこまで定めるか』という具体的な規則設計へ進んだ。",
      affectedTopics: [PRIVACY_TOPIC],
      affectedIssues: [
        { topic: PRIVACY_TOPIC, issue: "privacy-2026-consent-exceptions", before: "具体類型は今後の規則等を確認", after: "本人側から見た自明性を軸に規則で具体化する方向を確認" },
        { topic: PRIVACY_TOPIC, issue: "privacy-2026-children", before: "法定代理人対応の例外等は未具体化", after: "規則で定め得る例外の基本的な枠を確認" },
        { topic: PRIVACY_TOPIC, issue: "privacy-2026-biometric", before: "対象データ・周知方法等は未具体化", after: "顔特徴データを中心とする対象・周知方法の方向性を確認" }
      ],
      before: "改正法と政令・規則等で定める事項の全体像を基に、下位ルールの具体化を待つ整理。",
      after: "本人同意不要例外、子供、顔特徴データ等について、規則が定め得る範囲と実務設計の方向を追える整理。",
      keyPoints: ["同意不要例外は本人側から見た自明性の枠内で具体化", "顔特徴データの周知は設置場所での分かりやすい表示等を検討", "今回対象外の論点は次回以降の委員会資料を継続確認"],
      importance: "重要",
      tags: ["個人情報", "施行準備"],
      confidence: "fact"
    },
    {
      id: "update-consumer-contract-20260910-interim",
      source: CAA_INTERIM_SOURCE,
      headline: "消費者契約法見直しが中間取りまとめ・意見募集段階へ",
      publishedAt: "2026-09-10",
      type: "law-update",
      typeLabel: "制度見直し",
      summary: "8月31日の中間取りまとめ案から、9月10日の正式な中間取りまとめと9月16日開始のパブリックコメントへ進んだことを反映した。",
      whatChanged: "検討会案の段階から正式な中間取りまとめへ進み、法制的検討に先立つ意見募集が始まった。",
      affectedTopics: [CONSUMER_TOPIC],
      affectedIssues: [
        { topic: CONSUMER_TOPIC, issue: "consumer-contract-vulnerability-release", before: "中間取りまとめ案を追跡", after: "正式な中間取りまとめとして方向性を追跡" },
        { topic: CONSUMER_TOPIC, issue: "consumer-contract-cancellation-obstruction", before: "案段階の解約妨害規律", after: "中間取りまとめ・パブコメ段階の解約妨害規律" },
        { topic: CONSUMER_TOPIC, issue: "consumer-contract-cancellation-fees", before: "案段階の解約料整理", after: "中間取りまとめ・パブコメ段階の説明強化方向" }
      ],
      before: "2026年8月31日の中間取りまとめ（案）を基に、9月9日の検討会での修正可能性を残して整理。",
      after: "2026年9月10日の中間取りまとめと9月16日開始の意見募集を基準に、法案前の制度検討として追跡。",
      keyPoints: ["中間取りまとめは法案ではない", "解約妨害・重要変更通知・配慮等で規律の強度が異なる", "10月31日まで意見募集が行われる"],
      importance: "重要",
      tags: ["消費者法・表示", "契約"],
      confidence: "fact"
    }
  ];
  const existingUpdateIds = new Set((window.UPDATE_DATA || []).map((item) => item && item.id).filter(Boolean));
  window.UPDATE_DATA = (window.UPDATE_DATA || []).concat(updates.filter((item) => !existingUpdateIds.has(item.id)));

  const articles = [
    {
      id: PRIVACY_ARTICLE,
      title: "政令・規則の整備が『中身』の議論へ―令和8年9月16日 第369回個人情報保護委員会 公表資料の解説―（個人情報保護法ニュース No.23）",
      publisher: "三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-23",
      url: "https://www.miyake.gr.jp/notice/%E6%94%BF%E4%BB%A4%E3%83%BB%E8%A6%8F%E5%89%87%E3%81%AE%E6%95%B4%E5%82%99%E3%81%8C%E3%80%8C%E4%B8%AD%E8%BA%AB%E3%80%8D%E3%81%AE%E8%AD%B0%E8%AB%96%E3%81%B8%E2%80%95-%E4%BB%A4%E5%92%8C%EF%BC%98%E5%B9%B4/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／個人情報保護法2026年改正・下位ルール",
      status: "adopted",
      summary: "第369回個人情報保護委員会が示した2026年改正法の政令・規則整備の基本的な考え方を条文単位で読み解く実務解説。本人の意思に反しない同意不要例外について、事業者側の利便性ではなく本人側から見た自明性を軸に狭く具体化される方向を整理し、16歳未満の子供と顔特徴データ等の例外・周知、今後の検討スケジュールまで企業対応へ落としている。",
      whyImportant: ["8月26日の全体像から一歩進み、政令・規則で何をどこまで定め得るかという実体面を整理している", "同意不要例外を広い包括条項として期待せず、本人側から見た自明性と個別判断・記録を重視すべきことが分かる", "顔特徴データの周知方法をカメラ等の設置場所での掲示・本人請求導線まで実務へ落としている", "今回の検討対象と次回以降の論点を分け、施行準備の優先順位を付けやすい"],
      audience: ["企業法務", "プライバシー担当", "BtoCサービス担当", "AI・データ利活用担当", "情報セキュリティ"],
      audienceReason: "改正法の条文だけでは決まらない同意・子供・顔特徴データの実装を、今後の政令・規則の方向性に沿って準備するため。",
      categories: ["個人情報", "AI・デジタル"],
      relatedTopics: [PRIVACY_TOPIC],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"],
      primarySourceIds: [PPC_SOURCE, "source-privacy-law-2026-amendment", "source-privacy-law-2026-rulemap"],
      reformEventId: PRIVACY_REFORM,
      reformStageAtPublication: "promulgated",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", PPC_SOURCE],
      legacyReformInference: false,
      whatChanged: "施行準備／政令・規則の全体像だけでなく、同意不要例外・子供・顔特徴データについて規則が定め得る範囲と実務設計の方向を補強した。"
    },
    {
      id: CONSUMER_ARTICLE,
      title: "【動画解説・動画資料】消費者契約法アップデート 中間取りまとめとパブリックコメント～配慮規定・契約からの解放手段・サブスクの解約・解約料",
      publisher: "三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-09-19",
      collectedAt: "2026-09-23",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E6%B6%88%E8%B2%BB%E8%80%85%E5%A5%91%E7%B4%84%E6%B3%95%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／消費者契約法2026年見直し",
      status: "adopted",
      summary: "2026年9月10日の消費者契約法検討会中間取りまとめと9月16日開始のパブリックコメントを、配慮規定、契約からの解放、サブスクリプションの解約妨害・自動更新、重要な約款変更、解約料という実務単位で整理する解説。中間取りまとめは法案ではないことを明示しつつ、禁止・差止、通知義務、努力義務・配慮など規律の強度を分け、現行法の下でも先行して点検できる解約導線・通知・解約料説明を示している。",
      whyImportant: ["中間取りまとめを成立済みルールと誤認せず、法案前の制度検討として正確に位置付けている", "解約妨害、重要変更通知、配慮・説明について規律の強度が異なることを分けて説明している", "サブスクの解約導線、自動更新、約款変更通知、解約料の説明というプロダクト・契約実務へ具体化している", "パブリックコメント前に自社実務を棚卸しし、制度案が機能するかを検証する順序まで示している"],
      audience: ["企業法務", "消費者向けサービス担当", "EC・サブスクリプション事業者", "プロダクト・UX担当", "カスタマーサポート"],
      audienceReason: "消費者契約法の見直しを法案前の段階で正確に追いながら、解約・更新・約款変更・解約料の実務を先行点検するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: [CONSUMER_TOPIC],
      relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees"],
      primarySourceIds: [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE, "source-consumer-contract-act-current"],
      reformEventId: CONSUMER_REFORM,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [CAA_INTERIM_SOURCE, CAA_COMMENT_SOURCE],
      legacyReformInference: false,
      whatChanged: "制度見直し／中間取りまとめ案から正式な中間取りまとめ・意見募集段階へ進んだ状態と、企業が先行点検できる実務項目を補強した。"
    }
  ];

  let currentArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (articleIds.has(article.id) || articleUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    articleIds.add(article.id);
    articleUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

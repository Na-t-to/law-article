(() => {
  const topicSlug = "reinsurance-air-risk-management";
  const reformEventId = "insurance-reinsurance-risk-management-guideline-2026";
  const monitoringSourceId = "source-fsa-insurance-monitoring-2025-reinsurance";
  const draftSourceId = "source-fsa-reinsurance-supervisory-guideline-draft-2026";
  const finalSourceId = "source-fsa-reinsurance-supervisory-guideline-final-2026";

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

  const sources = [
    {
      id: monitoringSourceId,
      title: "2025年 保険モニタリングレポート",
      type: "report",
      typeLabel: "金融庁・保険モニタリングレポート",
      authority: "金融庁",
      publishedAt: "2025-07-04",
      url: "https://www.fsa.go.jp/news/r7/hoken/20250704/20250704.html",
      importance: "高",
      whyImportant: "生命保険会社の再保険利用、資産集約型再保険（AIR）を含む再保険リスク管理について、金融庁のモニタリング結果と監督上の問題意識を示した基礎資料。2026年の監督指針改正を読む前提となる。",
      topics: [topicSlug]
    },
    {
      id: draftSourceId,
      title: "「保険会社向けの総合的な監督指針」の一部改正（案）（再保険リスク管理）",
      type: "guideline",
      typeLabel: "監督指針改正案・パブリックコメント（旧）",
      authority: "金融庁",
      publishedAt: "2026-04-08",
      url: "https://www.fsa.go.jp/news/r7/hoken/20260408/20260408.html",
      importance: "高",
      whyImportant: "再保険取引、とりわけ資産集約型再保険について、リスク移転、ストレス、出再先集中、担保、リキャプチャー、利益相反等の管理高度化を初めて具体的に示した改正案。現在は最終化済みのため制度形成過程を確認する資料として扱う。",
      topics: [topicSlug]
    },
    {
      id: finalSourceId,
      title: "「保険会社向けの総合的な監督指針」の一部改正・パブリックコメント結果（再保険リスク管理）",
      type: "guideline",
      typeLabel: "監督指針・最終ルール",
      authority: "金融庁",
      publishedAt: "2026-07-01",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260701/20260701.html",
      importance: "最高",
      whyImportant: "再保険契約の経済的実態に基づくリスク移転判断、AIRのストレステスト、出再先集中、担保・倒産隔離、リキャプチャー、利益相反、情報取得・モニタリング等を監督指針として確定し、2026年7月1日から適用した一次資料。",
      topics: [topicSlug]
    }
  ];

  const existingSources = window.SOURCE_DATA || [];
  const existingSourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const existingSourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const sourceAdditions = sources.filter((item) => !existingSourceIds.has(item.id) && !existingSourceUrls.has(normalizeUrl(item.url)));
  if (sourceAdditions.length) window.SOURCE_DATA = existingSources.concat(sourceAdditions);

  const topic = {
    slug: topicSlug,
    title: "再保険取引・資産集約型再保険（AIR）",
    categories: ["契約・取引", "危機管理・コンプライアンス"],
    summary: "2026年7月1日適用の保険会社向け監督指針を基礎に、再保険の実質的なリスク移転、資産集約型再保険（AIR）のストレス・集中リスク、担保・リキャプチャー、利益相反、クロスボーダー契約の実効性を整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "生命保険会社では、リスク移転だけでなく再保険会社の資産運用力の活用等を目的とした再保険取引が拡大しており、長期の保険負債と対応資産のリスクを包括的に移す資産集約型再保険（AIR）の管理が監督上の重点になっている。",
      "金融庁は2026年7月1日、再保険リスク管理に関する監督指針を改正し、形式的な契約条項だけでなく経済的実態に基づくリスク移転、複数出再先の悪化・リキャプチャー等を含むストレス、集中管理、担保の実効性、利益相反等を明確化した。",
      "このテーマでは、2025年の保険モニタリングで示された問題意識から2026年の最終監督指針までをつなぎ、再保険を財務・資本政策だけでなく契約、リスク管理、ガバナンス、法的実効性の一体問題として追う。"
    ],
    currentSummary: {
      facts: [
        "金融庁は2026年7月1日、再保険取引の利用拡大を踏まえて『保険会社向けの総合的な監督指針』を改正し、同日から適用した。",
        "再保険に付した部分について責任準備金を積み立てない取扱いの可否は、リスク移転の確実性や再保険金回収の蓋然性に着目し、契約構造、経済的実態、リスクの所在を踏まえて総合的に判断し、形式的な条項の有無だけで判断しないことが明確化された。",
        "大規模かつ長期のAIRでは、出再先の健全性、資産運用、リスク管理態勢を分析し、市場ストレスやリキャプチャー、再保険会社の破綻等が財務健全性へ与える影響を検討することが求められる。",
        "保有・出再政策には、出再先の健全性基準、再保険会社・属性・法域ごとの集中基準、担保の質・流動性・分散・倒産隔離、リキャプチャー方針、利益相反管理、情報取得・継続モニタリング等を契約の性質に応じて組み込むことが求められる。"
      ],
      interpretations: [
        "AIRは資本効率や運用利回りだけで評価するのではなく、出再先の信用・運用・流動性と、自社へリスクが戻る局面を一つのシナリオとして管理する必要がある。",
        "担保があることだけで出再先リスクを十分に軽減したとはいえず、市場混乱時の担保価値、換金性、分散、倒産隔離、追加担保・不足時対応まで確認する必要がある。",
        "クロスボーダー再保険では、準拠法、紛争解決、担保・信託の実効性、リキャプチャー時の資産返還を複数法域にまたがって実行できるかを契約締結前から確認する必要がある。"
      ],
      implications: [
        "取締役会等が承認する保有・出再政策について、出再先・法域・グループ単位の集中上限、健全性評価、例外承認、見直しトリガーを点検する。",
        "AIR契約では、担保資産の適格性・ヘアカット・追加担保、信託・倒産隔離、情報提供、リキャプチャー事由・手順、資産返還後の流動性管理を契約・手順書へ落とす。",
        "ストレステストでは、複数の再保険会社の信用悪化・破綻、リキャプチャー同時発生、担保価値毀損、資産リバランス、責任準備金積立てへの影響を組み合わせる。",
        "出再先や資産運用会社との資本・人的関係がある場合は、利益相反の特定・管理、第二線・第三線による独立評価、継続的な情報取得を設計する。"
      ],
      uncertain: [
        "2026年7月の監督指針適用後、金融庁のモニタリングでAIRの集中上限、担保運用、リキャプチャー手順等がどこまで具体化されるかは継続確認が必要である。",
        "海外再保険会社・信託・担保を用いる案件の契約実務は法域や商品構造で差が大きく、監督指針だけで画一的な契約条件を導くことはできない。"
      ]
    },
    issues: [
      {
        id: "reinsurance-risk-transfer-accounting",
        title: "再保険によるリスク移転と責任準備金不積立てをどう判断するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "責任準備金を積み立てない取扱いの可否は、再保険契約がリスクを将来にわたり確実に移転するか、再保険金回収の蓋然性が高いかを、契約構造・経済的実態・リスクの所在に基づいて総合判断する。",
        exception: "担保・信託等がある場合でも、リスクが実質的に出再者へ戻る構造、回収遅延、実質的なリスク移転を伴わないファイナンス目的等があれば別途評価する。",
        uncertain: "個別の商品・再保険契約でどの程度のリスク移転を認めるかは、契約構造と事実関係に応じた判断が必要である。",
        sourceIds: [finalSourceId]
      },
      {
        id: "reinsurance-air-stress-concentration",
        title: "AIRのストレス・出再先集中をどう管理するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "大規模・長期のAIRでは、複数出再先の健全性悪化、リキャプチャー、破綻等が同時に生じるシナリオと、ソルベンシー・財務・資産リバランスへの影響を含むストレステストを行い、再保険会社・属性・法域ごとの集中基準を設ける。",
        exception: "保有リスクに対する出再割合が軽微な場合など、取引規模・期間・性質により求められる管理の深度は異なる。",
        uncertain: "集中上限やストレス水準の具体値は各社のリスク選好・取引構造に応じて設計する必要がある。",
        sourceIds: [monitoringSourceId, finalSourceId]
      },
      {
        id: "reinsurance-collateral-recapture",
        title: "担保・倒産隔離・リキャプチャーをどう設計するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "担保の質・水準・流動性・分散、市場混乱時の価値毀損、倒産隔離、担保不足時の対応を確認し、リキャプチャーの権利・トリガー・手続と、資産返還後の信用・流動性リスクへの対応をあらかじめ設計する。",
        exception: "担保方式、信託、資産留保型等の構造により法的・実務的な管理方法は異なる。",
        uncertain: "市場慣行としての担保条件・リキャプチャー条項は今後の案件と監督実務の蓄積を確認する必要がある。",
        sourceIds: [finalSourceId]
      },
      {
        id: "reinsurance-governance-conflicts",
        title: "再保険ガバナンス・利益相反・モニタリングをどう組むか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "保有・出再政策を取締役会等で決定し、リスク管理・保険数理・コンプライアンス等の統制機能と内部監査が独立して評価する。関係会社・資産運用会社等との利益相反を管理し、契約上の情報取得権を確保して継続的に出再先をモニタリングする。",
        exception: "グループ内再保険であっても外部取引と同様に経済的実態とリスクを確認し、関係性だけを理由に管理を緩めない。",
        uncertain: "第二線・第三線の具体的な審査頻度や資料粒度は取引規模・複雑性に応じた設計が必要である。",
        sourceIds: [monitoringSourceId, finalSourceId]
      },
      {
        id: "reinsurance-crossborder-contract",
        title: "クロスボーダー再保険の契約実効性をどう確保するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "複数法域にまたがる再保険では、契約の準拠法・紛争解決、担保・信託・倒産隔離、リキャプチャーや資産返還を実行できる法的枠組みを確認し、必要に応じて専門家意見等で実効性を検証する。",
        exception: "法的実効性は出再先所在地、資産所在地、担保・信託スキーム、紛争解決条項等によって異なり、一律に判断できない。",
        uncertain: "クロスボーダー案件での実務標準は法域ごとに異なるため、契約更新・制度変更時の再確認が必要である。",
        sourceIds: [finalSourceId]
      }
    ],
    sourceIds: [monitoringSourceId, draftSourceId, finalSourceId],
    practicalImpacts: [
      "保有・出再政策",
      "再保険協約書・担保／信託契約",
      "担保・出再先モニタリング",
      "リキャプチャー手順書",
      "ストレステスト",
      "利益相反・第二線／第三線管理",
      "クロスボーダー法的実効性"
    ]
  };

  const currentTopics = window.TOPIC_DATA || [];
  if (!currentTopics.some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = currentTopics.concat(topic);
  }

  const reformEvent = {
    id: reformEventId,
    title: "保険会社向け監督指針・再保険リスク管理 2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "insurance-supervisory-guideline-reinsurance-risk-management",
    lawLabel: "保険会社向け総合的監督指針・再保険リスク管理",
    relatedTopics: [topicSlug],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-07-01"],
    effectiveDateSourceIds: [finalSourceId],
    matchSourceIds: [draftSourceId, finalSourceId],
    sourceIds: [draftSourceId, finalSourceId]
  };

  const currentReforms = window.REFORM_EVENT_DATA || [];
  if (!currentReforms.some((item) => item && item.id === reformEventId)) {
    window.REFORM_EVENT_DATA = currentReforms.concat(reformEvent);
  }

  const articles = [
    {
      id: "article-fsa-insurance-monitoring-2025-reinsurance",
      title: "2025年 保険モニタリングレポート",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2025-07-04",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r7/hoken/20250704/20250704.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／保険モニタリング",
      status: "adopted",
      summary: "金融庁が2024事務年度の保険会社モニタリング結果をまとめたレポート。生命保険会社の再保険について、資産集約型再保険を含む利用状況と、出再判断、契約条件、出再先・担保のモニタリング、信用悪化時の対応、第二線・第三線のガバナンスなどを監督上の課題として整理している。",
      whyImportant: [
        "2026年の監督指針改正に先立ち、金融庁がAIRを含む生命再保険のどこを監督上のリスクと見ていたかを確認できる",
        "再保険の利用目的だけでなく、出再先選定、契約、継続モニタリング、信用悪化時対応まで一連の管理として把握できる",
        "最終監督指針を、単発のルール追加ではなくモニタリングから規律具体化へ至った流れとして読める"
      ],
      audience: ["保険会社法務・コンプライアンス", "リスク管理", "保険数理", "内部監査"],
      audienceReason: "AIRを含む再保険取引について、金融庁の問題意識と2026年監督指針改正の背景を把握するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["reinsurance-air-stress-concentration", "reinsurance-governance-conflicts"],
      primarySourceIds: [monitoringSourceId],
      legacyReformInference: false,
      whatChanged: "新テーマ／2026年監督指針改正の前提となった生命再保険・AIRのモニタリング結果を基礎資料として追加した。"
    },
    {
      id: "article-fsa-reinsurance-supervisory-guideline-final-2026",
      title: "「保険会社向けの総合的な監督指針」の一部改正・パブリックコメント結果（再保険リスク管理）",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-07-01",
      collectedAt: "2026-09-14",
      url: "https://www.fsa.go.jp/news/r8/hoken/20260701/20260701.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／再保険リスク管理・監督指針",
      status: "adopted",
      summary: "再保険取引の利用拡大を踏まえ、金融庁が再保険リスク管理に関する監督指針を最終化し2026年7月1日から適用した資料。実質的なリスク移転、AIRのストレス、出再先集中、担保、リキャプチャー、利益相反、情報取得、クロスボーダーでの法的実効性等を具体化した。",
      whyImportant: [
        "責任準備金不積立ての判断について、形式的な条項ではなく契約構造・経済的実態・リスクの所在を基礎にすることを明確化した",
        "AIRについて、複数出再先の悪化・破綻やリキャプチャーを含むストレスと集中管理、担保の実効性まで一体で求める最終ルールである",
        "契約・担保・情報取得・利益相反・内部統制・危機時対応を横断するため、法務だけでなくリスク管理・数理・内部監査の共通基準になる"
      ],
      audience: ["保険会社法務・コンプライアンス", "リスク管理", "保険数理", "内部監査", "再保険担当"],
      audienceReason: "2026年7月1日から適用済みの再保険リスク管理基準を、契約・ガバナンス・ストレス管理へ反映するため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["reinsurance-risk-transfer-accounting", "reinsurance-air-stress-concentration", "reinsurance-collateral-recapture", "reinsurance-governance-conflicts", "reinsurance-crossborder-contract"],
      primarySourceIds: [finalSourceId, monitoringSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "新テーマ／再保険リスク管理とAIRの契約・担保・ストレス・ガバナンスを2026年7月1日適用の最終監督指針に基づいて整理した。"
    },
    {
      id: "article-amt-reinsurance-air-supervisory-guideline-2026-05-07",
      title: "【金融法務】再保険取引に関する監督指針改正案の概要 ―資産集約型再保険を中心に―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "高橋 祐太朗・柗下 滉平・佐藤 龍（サポート：村井 惠悟、監修：出張 智己・牧野 達彦）",
      publishedAt: "2026-05-07",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260507001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／再保険・AIR",
      status: "adopted",
      summary: "金融庁の2026年4月監督指針改正案を、資産集約型再保険（AIR）の実務に即して整理した解説。出再先・担保資産、リキャプチャー、内部規程、準拠法等を契約・管理の具体的な検討単位へ落とし込んでいる。現在は7月1日の最終監督指針と対照して読む制度形成期の実務資料として位置付ける。",
      whyImportant: [
        "監督指針の抽象的な着眼点を、担保資産、信託、追加担保、リキャプチャー手続、内部規程という実装項目に分解している",
        "海外再保険会社を用いる際の準拠法・担保の法的実効性・現地法確認など、一次資料だけでは見えにくい契約実務を補う",
        "公開時は改正案段階だったため、最終化後の現在は案から確定ルールへの制度形成過程と実務対応をつなぐ資料として使える"
      ],
      audience: ["保険会社法務", "再保険担当", "リスク管理", "コンプライアンス", "保険数理"],
      audienceReason: "最終監督指針を再保険協約書、担保・信託、リキャプチャー手順、内部規程、クロスボーダー法務へ落とし込むため。",
      categories: ["契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["reinsurance-risk-transfer-accounting", "reinsurance-collateral-recapture", "reinsurance-governance-conflicts", "reinsurance-crossborder-contract"],
      primarySourceIds: [draftSourceId, finalSourceId, monitoringSourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [draftSourceId],
      whatChanged: "整理変更なし／AIRの担保・リキャプチャー・内部規程・準拠法まで監督指針を実務へ落とす法律事務所解説を補完した。"
    }
  ];

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const articleAdditions = articles.filter((item) => !existingArticleIds.has(item.id) && !existingArticleUrls.has(normalizeUrl(item.url)));
  if (articleAdditions.length) window.ARTICLE_DATA = currentArticles.concat(articleAdditions);
})();

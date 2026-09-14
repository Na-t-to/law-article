(() => {
  const topicSlug = "mbo-controlling-shareholder-fairness";
  const reformEventId = "tse-mbo-fairness-rules-2025";
  const finalSourceId = "source-jpx-mbo-fairness-rules-2025";

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
      id: finalSourceId,
      title: "MBOや支配株主による完全子会社化に関する上場制度の見直し等に係る有価証券上場規程等の一部改正について",
      type: "guideline",
      typeLabel: "東証上場規程等・最終改正",
      authority: "東京証券取引所",
      publishedAt: "2025-07-07",
      url: "https://www.jpx.co.jp/rules-participants/rules/revise/um3qrc000001o3n5-att/gaiyo.pdf",
      importance: "最高",
      whyImportant: "MBO、支配株主・その他の関係会社等による完全子会社化等について、特別委員会から一般株主にとって公正であることに関する意見を取得・開示し、取引の是非・取引条件の公正性・手続の公正性を検討する新ルールと、2025年7月22日の施行日を確認できる一次資料。",
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
    title: "MBO・支配株主等による完全子会社化の公正性確保",
    categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
    summary: "2025年7月22日施行の東証上場規程等を基礎に、MBOや支配株主・その他の関係会社等による完全子会社化で求められる特別委員会、一般株主への公正性、取引条件・手続の検討、必要かつ十分な開示を整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "MBOや支配株主等による非公開化は、買収者と一般株主の間に構造的な利益相反と情報の非対称性が生じやすく、価格だけでなく意思決定過程そのものの公正性が問題になる。",
      "東京証券取引所は2025年7月22日から企業行動規範を見直し、対象取引では独立性を有するメンバーで構成される特別委員会から『一般株主にとって公正であること』に関する意見を取得し、取引の是非・取引条件・手続の公正性について検討内容を含める枠組みを導入した。",
      "このテーマでは、東証規則上の義務と、実務上それを特別委員会の諮問事項、株式価値算定、マーケット・チェック、公正性担保措置、適時開示・公開買付届出書へどう落とすかを分けて追う。"
    ],
    currentSummary: {
      facts: [
        "東証の2025年改正は2025年7月22日に施行され、同日以後にMBOや支配株主・その他の関係会社等による完全子会社化等を決定するものから適用される。",
        "対象取引では、独立性を有する社外取締役、社外監査役、社外有識者で構成される特別委員会から意見を取得する。",
        "意見の基準は従来の『少数株主にとって不利益でないこと』から『一般株主にとって公正であること』へ見直され、取引の是非、取引条件の公正性、手続の公正性について特別委員会の検討・判断内容を含める。",
        "その他の関係会社等による完全子会社化等についても、必要かつ十分な適時開示を行う枠組みが明確化された。"
      ],
      interpretations: [
        "特別委員会の役割は形式的な賛否確認ではなく、企業価値向上の観点、対価・方法等の取引条件、交渉・公正性担保措置を一体として検証するプロセス管理へ比重が移っている。",
        "適時開示と公開買付届出書は法的根拠が異なるが、実務上は同じ取引事実を説明するため、特別委員会の答申、価値算定の前提、公正性担保措置について整合した記載を早期に設計する必要がある。",
        "DCF等の価値算定では結論値だけでなく、財務予測の作成過程・前提、割引率、継続価値、非事業用資産等を後から説明できるよう、算定過程と根拠資料を残す重要性が高まっている。"
      ],
      implications: [
        "取引初期に、買収者との利害関係を踏まえて特別委員会メンバーの独立性を確認し、諮問事項・権限・情報アクセス・専門家選任を設計する。",
        "特別委員会の答申は、取引の是非、取引条件の公正性、手続の公正性の三軸に対応して検討記録を残す。",
        "マーケット・チェック、MoM条件、強圧性排除等の公正性担保措置は、採否だけでなく採用しない理由と全体として公正性が確保される理由まで説明できるようにする。",
        "適時開示、公開買付届出書、特別委員会答申、株式価値算定資料の用語・前提・時系列を横断チェックする。"
      ],
      uncertain: [
        "個別取引で必要とされる開示粒度や、公正性担保措置を採用しない場合の説明水準は、案件構造と今後の実務蓄積によって具体化していく。",
        "形式上の対象外取引でも構造的利益相反が強い場合にどこまで同等の手続を採用するかは、取引の実質に応じた判断が必要である。"
      ]
    },
    issues: [
      {
        id: "mbo-fairness-covered-transactions",
        title: "どの非公開化取引でMBO等の企業行動規範が適用されるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "MBOや支配株主・その他の関係会社等による完全子会社化等を決定し、上場廃止が見込まれる場合を中心に、東証規則上の対象行為に該当するか確認する。",
        exception: "具体的な対象範囲は買収者の属性、支配関係、公開買付け後の一連のスクイーズアウト等を含む取引構造により異なる。",
        uncertain: "形式上の対象外でも構造的利益相反が強い取引について、同等の公正性確保措置を任意に採用すべきかは個別判断となる。",
        sourceIds: [finalSourceId]
      },
      {
        id: "mbo-fairness-special-committee",
        title: "特別委員会の意見を何について取得するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "独立性を有するメンバーで構成される特別委員会から、対象取引が一般株主にとって公正であることに関する意見を取得し、開示する。",
        exception: "委員の独立性や利害関係は形式的な肩書だけでなく、買収者・対象会社・取引との関係を踏まえて確認する必要がある。",
        uncertain: "案件固有の利害関係がある場合の委員適格性や代替的な体制の十分性は事実関係に応じて判断する。",
        sourceIds: [finalSourceId]
      },
      {
        id: "mbo-fairness-three-axes",
        title: "取引の公正性をどの観点で検討するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "特別委員会の意見には、対象行為の是非、買収対価・方法・種類等の取引条件の公正性、取引条件の公正さを担保する手続の公正性についての検討・判断を含める。",
        exception: "各観点で何を重点確認すべきかは、MBO、親子上場解消、その他の関係会社による買収など取引類型により異なる。",
        uncertain: "どの公正性担保措置の組合せが十分かは一律に決まらず、取引全体としての評価が必要となる。",
        sourceIds: [finalSourceId]
      },
      {
        id: "mbo-fairness-disclosure",
        title: "公正性確保の検討をどこまで開示するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "対象取引では特別委員会の意見を開示し、その他の関係会社等による完全子会社化等についても必要かつ十分な適時開示を行う。",
        exception: "企業秘密等の取扱いと開示の必要性は、現行の東証ガイドブック・個別開示項目に沿って調整する。",
        uncertain: "価値算定前提や検討過程について実務上どの粒度まで開示すべきかは、今後の案件・東証運用の蓄積も確認する必要がある。",
        sourceIds: [finalSourceId]
      }
    ],
    sourceIds: [finalSourceId],
    practicalImpacts: [
      "特別委員会の設置・独立性確認",
      "諮問事項・答申書・議事記録",
      "株式価値算定・DCF前提資料",
      "公正性担保措置・マーケットチェック",
      "適時開示・公開買付届出書",
      "スクイーズアウト手続",
      "取締役会の意思決定記録"
    ]
  };

  const currentTopics = window.TOPIC_DATA || [];
  if (!currentTopics.some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = currentTopics.concat(topic);
  }

  const reformEvent = {
    id: reformEventId,
    title: "東証・MBO等の公正性確保ルール 2025年改正",
    eventType: "regulation_or_guideline",
    lawId: "tse-mbo-fairness-rules",
    lawLabel: "東証有価証券上場規程・MBO等の企業行動規範",
    relatedTopics: [topicSlug],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2025-07-22"],
    effectiveDateSourceIds: [finalSourceId],
    matchSourceIds: [finalSourceId],
    sourceIds: [finalSourceId]
  };

  const currentReforms = window.REFORM_EVENT_DATA || [];
  if (!currentReforms.some((item) => item && item.id === reformEventId)) {
    window.REFORM_EVENT_DATA = currentReforms.concat(reformEvent);
  }

  const articles = [
    {
      id: "article-jpx-mbo-fairness-rules-2025",
      title: "MBOや支配株主による完全子会社化に関する上場制度の見直し等に係る有価証券上場規程等の一部改正について",
      publisher: "東京証券取引所",
      author: "東京証券取引所",
      publishedAt: "2025-07-07",
      collectedAt: "2026-09-14",
      url: "https://www.jpx.co.jp/rules-participants/rules/revise/um3qrc000001o3n5-att/gaiyo.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・東証上場規程等／MBO・支配株主取引",
      status: "adopted",
      summary: "東京証券取引所が、MBOや支配株主・その他の関係会社等による完全子会社化等について企業行動規範を見直した最終資料。特別委員会から一般株主にとって公正であることに関する意見を取得・開示し、取引の是非、取引条件の公正性、手続の公正性を検討する枠組みを示し、2025年7月22日から施行した。",
      whyImportant: [
        "MBO等の対象範囲、特別委員会、一般株主にとっての公正性という現行ルールの骨格を一次資料で確認できる",
        "取引の是非・取引条件・手続という三つの検討軸が明示され、特別委員会の答申や取締役会資料を設計する基準になる",
        "2025年7月22日施行と、同日以後に決定する対象取引から適用されることを確認できる"
      ],
      audience: ["上場会社法務", "M&A担当", "取締役・社外取締役", "FA・公開買付実務担当"],
      audienceReason: "MBO・親子上場解消その他の利益相反性が高い非公開化案件で、東証規則上の手続・意見・開示の基準点を確認するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["mbo-fairness-covered-transactions", "mbo-fairness-special-committee", "mbo-fairness-three-axes", "mbo-fairness-disclosure"],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "新テーマ／2025年7月22日施行のMBO・支配株主等による完全子会社化の公正性確保ルールを一次資料から整理した。"
    },
    {
      id: "article-tmi-mbo-new-rules-tob-filing-2025-07-18",
      title: "【パブコメ後更新版】MBO新ルールの公開買付届出書作成への影響について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-07-18",
      collectedAt: "2026-09-14",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17272.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所実務解説／MBO・東証規則・公開買付開示",
      status: "adopted",
      summary: "2025年7月7日のパブリックコメント結果を反映したMBO新ルールを、公開買付届出書・適時開示の実務へ落とした解説。特別委員会の諮問・答申、公正性担保措置の採否と説明、マーケット・チェック、DCF法の財務予測・割引率・継続価値等の開示拡充を具体的に整理する。",
      whyImportant: [
        "東証規則上の抽象的な『公正性』を、特別委員会の諮問事項・答申内容・公正性担保措置の記載へ具体化している",
        "積極的なマーケット・チェックを行わない場合の説明や取引保護条項など、案件設計と開示をつなぐ論点を確認できる",
        "適時開示の変更が公開買付届出書の記載実務へどう波及するかを示し、複数開示書類間の整合を取る際に使いやすい"
      ],
      audience: ["上場会社法務", "M&A担当", "公開買付実務担当", "FA", "特別委員会事務局"],
      audienceReason: "確定した東証ルールを、公開買付届出書・適時開示・特別委員会答申・株式価値算定の実務に反映するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["mbo-fairness-special-committee", "mbo-fairness-three-axes", "mbo-fairness-disclosure"],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "新テーマ／MBO新ルールを特別委員会・公正性担保措置・マーケットチェック・DCF開示・公開買付届出書へ落とす実務解説を追加した。"
    },
    {
      id: "article-not-mbo-controlling-shareholder-rules-2025-09-26",
      title: "Tokyo Stock Exchange Tightens Rules on MBOs and Controlling Shareholder Buyouts: Enhanced Disclosure and Minority Protection",
      publisher: "長島・大野・常松法律事務所",
      author: "Yusei Uji",
      publishedAt: "2025-09-26",
      collectedAt: "2026-09-14",
      url: "https://www.nagashima.com/en/publications/publication20250926-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／MBO・支配株主取引",
      status: "adopted",
      summary: "2025年7月22日施行後の東証MBO等ルールを、構造的な利益相反という制度趣旨から、対象取引、特別委員会、一般株主にとっての公正性、必要かつ十分な開示、DCF等の価値算定前提まで俯瞰する英語実務解説。対象となる支配株主・その他の関係会社等や二段階買収の射程も整理する。",
      whyImportant: [
        "MBOだけでなく支配株主・その他の関係会社等による完全子会社化まで対象範囲を具体例で整理し、適用判定の入口として使える",
        "従来の『不利益でない』から『公正である』への基準変更を、構造的利益相反と一般株主保護の文脈で説明している",
        "施行後の視点から、特別委員会意見の開示と価値算定前提の開示強化を一つの実務フローとして確認できる"
      ],
      audience: ["上場会社法務", "M&A担当", "海外投資家対応", "クロスボーダーM&A担当", "社外取締役"],
      audienceReason: "施行済みの東証ルールの射程と制度趣旨を、海外関係者とも共有できる形で確認するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: [topicSlug],
      relatedIssues: ["mbo-fairness-covered-transactions", "mbo-fairness-special-committee", "mbo-fairness-disclosure"],
      primarySourceIds: [finalSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [finalSourceId],
      whatChanged: "新テーマ／施行後の対象範囲・利益相反・特別委員会・開示強化を横断する実務解説を追加した。"
    }
  ];

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const articleAdditions = articles.filter((item) => !existingArticleIds.has(item.id) && !existingArticleUrls.has(normalizeUrl(item.url)));
  if (articleAdditions.length) window.ARTICLE_DATA = currentArticles.concat(articleAdditions);
})();

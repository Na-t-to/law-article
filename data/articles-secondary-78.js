(() => {
  const topicSlug = "copyright-unmanaged-works-adjudication";
  const reformEventId = "copyright-unmanaged-works-2023-amendment";
  const guideSourceId = "source-bunka-unmanaged-works-handbook-2026";
  const articleId = "article-bunka-unmanaged-works-handbook-2026";
  const deloitteArticleId = "article-deloitte-unmanaged-works-2026";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));
  const replaceText = (items, startsWith, replacement) =>
    (items || []).map((item) => (String(item).startsWith(startsWith) ? replacement : item));

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: guideSourceId,
      title: "裁定の手引き ～権利者や利用可否の意思が不明な著作物等の利用について～（令和8年3月・Ver.1.03）",
      type: "guideline",
      typeLabel: "一次資料・文化庁／裁定実務手引き",
      authority: "文化庁",
      publishedAt: "2026-03-31",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/chosakukensha_fumei/tyosakubutsu/pdf/94355201_01.pdf",
      importance: "最高",
      whyImportant: "2026年4月開始の未管理著作物裁定制度について、対象著作物の確認、利用ルール・利用申込受付用連絡先の判定、権利者探索、意思確認措置、14日間の無応答確認、申請・補償金・取消しまでを定める文化庁の現行実務手引き。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;

    const facts = replaceText(
      topic.currentSummary && topic.currentSummary.facts,
      "判明した国内連絡先へ利用希望を伝え",
      "『利用ルール』又は『利用申込を受け付けるための連絡先』が表示されている著作物等は、原則として未管理著作物裁定制度の対象外となる。これらが表示されておらず、探索で一般的な連絡先のみが判明した場合は、利用希望を明示して意思確認措置を行い、到達日の翌日から14日間応答がないこと等を確認する。"
    );
    const interpretations = replaceText(
      topic.currentSummary && topic.currentSummary.interpretations,
      "自社コンテンツを意図せず制度利用の対象にされたくない権利者側では",
      "自社コンテンツを制度利用の対象から外したい権利者側では、『無断転載禁止』等の利用ルール又は利用申込を受け付けるための連絡先を明示する。単なる一般問い合わせ先と利用申込受付用の連絡先は区別して管理する。"
    );
    const implications = replaceText(
      topic.currentSummary && topic.currentSummary.implications,
      "再利用したい著作物ごとに",
      "再利用したい著作物ごとに、集中管理の有無、利用ルール、利用申込受付用連絡先、一般的な権利者連絡先を区別して確認し、探索・意思確認の証跡を保存する。"
    );

    const issues = (topic.issues || []).map((issue) => {
      if (issue.id === "unmanaged-works-eligibility") {
        return {
          ...issue,
          conclusion: "集中管理の有無に加え、『利用ルール』又は『利用申込を受け付けるための連絡先』が表示されていないかを確認する。いずれかが表示されている著作物等は原則として未管理著作物裁定制度の対象にならない。",
          exception: "著作権表示や一般的な問い合わせ先があるだけで直ちに対象外になるわけではなく、その表示が利用可否の意思又は利用申込受付用の連絡先を示すものかを文化庁の手引きに沿って判定する。",
          uncertain: "表示の効力が及ぶ著作物の範囲や、個別の記載が利用ルール・利用申込受付用連絡先に当たるかは、掲載場所・文言・著作物との関係を確認する。",
          sourceIds: addUniqueStrings(issue.sourceIds, [guideSourceId])
        };
      }
      if (issue.id === "unmanaged-works-search-contact") {
        return {
          ...issue,
          conclusion: "著作物周辺、一般的なウェブ検索、分野横断権利情報検索システム等で、利用ルール又は利用申込受付用連絡先の表示を先に確認する。これらが表示されていない場合に、探索で判明した一般的な連絡先へ利用希望を明示して意思確認措置を行い、到達後の無応答等を記録する。",
          exception: "利用申込を受け付けるための連絡先が表示されている場合は、その窓口へ連絡して応答がなくても、未管理著作物裁定制度の対象にはならない。14日間の無応答による意思不明の扱いは、利用ルール・利用申込受付用連絡先が表示されていないことを確認した上で行う意思確認措置の場面で問題となる。",
          uncertain: "探索で見つかった連絡先が一般問い合わせ先か利用申込受付用連絡先かは表示文言・掲載場所で変わるため、個別に確認する。",
          sourceIds: addUniqueStrings(issue.sourceIds, [guideSourceId])
        };
      }
      if (issue.id === "unmanaged-works-system-choice") {
        return { ...issue, sourceIds: addUniqueStrings(issue.sourceIds, [guideSourceId]) };
      }
      if (issue.id === "unmanaged-works-rightsholder-display") {
        return {
          ...issue,
          conclusion: "自社コンテンツを制度対象から外したい場合は、ウェブページや著作物周辺に『無断転載禁止』等の利用ルール、又は利用申込を受け付けるための連絡先を明示する。",
          exception: "一般的な問い合わせ先・お客様相談窓口など、利用申込の受付窓口であることが読み取れない表示は、それだけでは『利用申込を受け付けるための連絡先』に当たらない場合がある。",
          uncertain: "意思表示の効力が複数の著作物へ及ぶかは、掲載位置と記載内容から対象範囲を確認する。",
          sourceIds: addUniqueStrings(issue.sourceIds, [guideSourceId])
        };
      }
      return issue;
    });

    return {
      ...topic,
      lastUpdated: "2026-09-11",
      lastVerified: "2026-09-11",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts,
        interpretations,
        implications
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [guideSourceId])
    };
  });

  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) =>
    event.id !== reformEventId
      ? event
      : {
          ...event,
          matchSourceIds: addUniqueStrings(event.matchSourceIds, [guideSourceId]),
          sourceIds: addUniqueStrings(event.sourceIds, [guideSourceId])
        }
  );

  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).map((article) => {
    if (article.id !== deloitteArticleId) return article;
    return {
      ...article,
      whyImportant: (article.whyImportant || []).map((item) =>
        String(item).startsWith("国内の連絡先へ利用希望を伝えた後14日間応答がない場合")
          ? "権利者探索と14日間の無応答確認を実務化しているが、14日ルールの前提は文化庁の現行手引き・FAQで確認する必要がある。特に、利用申込受付用の連絡先が表示されている場合は、その窓口が無応答でも未管理著作物裁定制度の対象にはならない。"
          : item
      ),
      primarySourceIds: addUniqueStrings(article.primarySourceIds, [guideSourceId])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "裁定の手引き ～権利者や利用可否の意思が不明な著作物等の利用について～（令和8年3月・Ver.1.03）",
      publisher: "文化庁",
      author: "文化庁著作権課",
      publishedAt: "2026-03-31",
      collectedAt: "2026-09-11",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/chosakukensha_fumei/tyosakubutsu/pdf/94355201_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・文化庁／未管理著作物裁定制度の現行実務手引き",
      status: "adopted",
      summary: "2026年4月1日に運用開始した未管理著作物裁定制度と従来の著作権者不明等の場合の裁定制度について、対象要件、探索・意思確認、申請、補償金、利用期間、取消しを一体で示す文化庁の実務手引き。未管理著作物裁定では、利用ルール又は利用申込受付用連絡先が表示されている著作物等は原則対象外とし、それらが表示されていないことを確認した後、判明した一般的な連絡先に利用希望を明示して意思確認を行い、所定の場合には到達日の翌日から14日間の無応答を確認するという順序を具体化している。",
      whyImportant: [
        "『利用申込を受け付けるための連絡先』と一般問い合わせ先を区別し、前者が表示されている場合は未管理著作物裁定の対象にならないことを公式に確認できる",
        "14日間の無応答ルールを、利用ルール・利用申込受付用連絡先の不存在確認の後に行う意思確認措置として位置付けられる",
        "利用者側の探索証跡と、権利者側の利用ルール・ライセンス窓口表示を同じ手続構造から設計できる"
      ],
      audience: [
        "企業法務・知的財産",
        "コンテンツ・アーカイブ担当",
        "出版・メディア・広報"
      ],
      audienceReason: "未管理著作物裁定制度を実際に使う際の探索・連絡手順と、自社コンテンツを制度対象から外すための表示設計を、文化庁の現行運用に沿って確認するため。",
      categories: ["知的財産", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "unmanaged-works-eligibility",
        "unmanaged-works-search-contact",
        "unmanaged-works-system-choice",
        "unmanaged-works-rightsholder-display"
      ],
      primarySourceIds: [guideSourceId],
      reformEventId,
      reformStageAtPublication: "effective",
      reformStageSourceIds: [guideSourceId],
      whatChanged: "行政運用の精緻化／14日間の無応答ルールを、利用ルール・利用申込受付用連絡先の不存在確認と区別して整理した。"
    }
  ]);

  window.UPDATE_DATA = addUniqueById(window.UPDATE_DATA, [
    {
      id: "update-unmanaged-works-contact-rule-2026-09",
      source: guideSourceId,
      headline: "未管理著作物裁定の『14日ルール』と利用申込窓口の関係を精緻化",
      publishedAt: "2026-09-11",
      type: "summary-update",
      typeLabel: "行政運用・整理精緻化",
      summary: "文化庁の現行『裁定の手引き』とFAQを再確認し、未管理著作物裁定制度では、利用ルール又は利用申込受付用連絡先が表示されている著作物等は原則対象外であり、14日間の無応答確認はこれらが表示されていない場合の意思確認措置として扱うことをテーマ整理へ反映した。",
      whatChanged: "『判明した国内連絡先に連絡して14日間応答がなければ利用可能性がある』という一般化を改め、連絡先の用途を先に判定する二段階の整理へ変更した。",
      affectedTopics: [topicSlug],
      affectedIssues: [
        {
          topic: topicSlug,
          issue: "unmanaged-works-search-contact",
          before: "判明した国内連絡先へ利用希望を伝え、14日間応答がない場合を中心に整理",
          after: "利用ルール・利用申込受付用連絡先の表示有無を先に確認し、それらがない場合の一般連絡先への意思確認で14日間の無応答を扱う整理"
        },
        {
          topic: topicSlug,
          issue: "unmanaged-works-rightsholder-display",
          before: "問い合わせ先と利用ルールを広く表示することを推奨",
          after: "利用ルール又は利用申込受付用連絡先と、単なる一般問い合わせ先を区別して表示・管理する整理"
        }
      ],
      before: "連絡先が判明した場合の14日間無応答をやや広く記述しており、一般問い合わせ先と利用申込受付用連絡先の違いが十分に明示されていなかった。",
      after: "文化庁手引きに沿い、利用申込受付用連絡先が表示されている著作物等は原則制度対象外であり、14日ルールはそのような表示がない場合の意思確認措置として適用されることを明示した。",
      keyPoints: [
        "『利用ルール』又は『利用申込を受け付けるための連絡先』が表示されている著作物等は原則として制度対象外",
        "単なる一般問い合わせ先は、利用申込受付用連絡先と同じではない",
        "14日間の無応答確認は、利用ルール・利用申込受付用連絡先の不存在を確認した後の意思確認措置で行う"
      ],
      importance: "重要",
      tags: ["知的財産", "著作権"],
      confidence: "fact"
    }
  ]);
})();

(() => {
  const topicSlug = "social-insurance-expansion-pension-reform-2025";
  const workerSourceId = "source-mhlw-shorttime-regular-worker-insurance-20260914";
  const officerSourceId = "source-mhlw-officer-freelancer-insurance-amendment-20260914";
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...additions]));

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== topicSlug) return topic;

    const issueId = "social-insurance-substance-freelancer-shorttime";
    const issues = Array.isArray(topic.issues) ? [...topic.issues] : [];
    if (!issues.some((issue) => issue && issue.id === issueId)) {
      issues.push({
        id: issueId,
        title: "個人事業主・フリーランスの形式的な雇用・役員就任で被保険者資格を取得できるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "健康保険・厚生年金の被保険者資格は、正社員・役員という名称や資格取得届だけでは決まらず、常用的使用関係と業務・報酬の実態から判断する。個人事業主等を勤務時間が極端に短い正規型労働者として雇用する事案で、報酬が業務の対価として経常的な支払いと認められず、かつ業務が経常的な労務の提供と認められない場合は、原則として被保険者資格を有しない。",
        exception: "通知は主として、個人事業主等から会費等を徴収し不適切な健康保険等の適用が疑われる事案を想定している。二要件の一方だけに該当する場合や通常の短時間勤務については、労働日数・時間、就労形態、勤務内容等の実態から個別具体的に総合判断する。",
        uncertain: "会費等が報酬以下の場合、関連法人への支払いがある場合、役員としての経営参画や労務提供が限定的な場合などは、金額・時間だけで機械的に判定せず個別事案の実態確認が必要になる。",
        sourceIds: [workerSourceId, officerSourceId]
      });
    }

    return {
      ...topic,
      lastUpdated: "2026-09-15",
      lastVerified: "2026-09-15",
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings((topic.currentSummary && topic.currentSummary.facts) || [], [
          "厚生労働省は2026年9月14日、個人事業主・フリーランス等を勤務時間が極端に短い正規型労働者として雇用する事案について、報酬が業務の対価として経常的な支払いと認められず、かつ業務が経常的な労務の提供と認められない場合は、原則として健康保険・厚生年金の被保険者資格を有しないとする通知を発出した。",
          "同日、法人の役員である個人事業主等に関する2026年3月通知も改正され、会費等が報酬以下でも報酬の多くを占める状態が常態化する場合や、相互互助的な活動、関連法人への会費支払い等を含めて実態判断することが明確化された。"
        ]),
        interpretations: addUniqueStrings((topic.currentSummary && topic.currentSummary.interpretations) || [], [
          "被保険者資格は雇用契約・役員就任・届出という形式だけで確保できず、事業所との常用的使用関係、実質的な労務提供、業務対価としての報酬を総合して判断する必要がある。"
        ]),
        implications: addUniqueStrings((topic.currentSummary && topic.currentSummary.implications) || [], [
          "個人事業主・フリーランスを短時間の正規型労働者や役員として受け入れる場合は、報酬と会費・委託費等の資金関係、実労働時間、具体的な指揮命令・業務内容、役員の経営参画を確認し、資格取得届の前提となる実態を記録する。",
          "本人から会費等を徴収する雇用・役員スキームでは、関連法人への支払いを含め、保険料負担の軽減を主目的とする形式的な使用関係と評価されるリスクを点検する。"
        ]),
        uncertain: addUniqueStrings((topic.currentSummary && topic.currentSummary.uncertain) || [], [
          "2026年9月14日通知は通常の短時間勤務を一律に被保険者資格なしとするものではなく、疑義がある事案の実態判断を明確化したものなので、個別案件では報酬・会費等・労働時間・業務内容を総合して確認する。"
        ])
      },
      issues,
      sourceIds: addUniqueStrings(topic.sourceIds, [workerSourceId, officerSourceId]),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "個人事業主・フリーランスの被保険者資格判定",
        "会費等徴収型の雇用・役員スキーム点検"
      ])
    };
  });

  const additions = [
    {
      id: "article-mhlw-shorttime-regular-worker-insurance-20260914",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱いについて",
      publisher: "厚生労働省",
      author: "厚生労働省 保険局保険課・年金局事業管理課",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/content/12512000/001749381.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・行政通知／健康保険・厚生年金の被保険者資格",
      status: "adopted",
      summary: "個人事業主・フリーランス等を勤務時間が極端に短い正規型労働者として雇用し、健康保険・厚生年金の資格取得届を出す一方で、会費等を徴収する事案について、常用的使用関係の判断を明確化した通知。報酬が業務対価として経常的な支払いと認められないことと、業務が経常的な労務提供と認められないことの双方に該当する場合は原則資格なしとし、一方だけに該当する場合も就労実態から総合判断する。",
      whyImportant: [
        "『正社員』という契約名称や資格取得届だけでなく、労働日数・時間、就労形態、勤務内容等から常用的使用関係を判断することを明確にしている",
        "報酬を上回る会費等、自己資金が実質的に報酬へ戻る構造、関連法人への会費支払いなど、形式的な被保険者資格取得を見分ける具体的な観点が示された",
        "極端に短い勤務時間、自己研さん、活動報告・情報共有、相互互助、個人事業そのものを形式的に業務とするケース等を、経常的な労務提供でない可能性がある例として確認できる",
        "通知は通常の短時間勤務者を一律に排除するものではなく、主として会費等を徴収し不適切な適用が疑われる事案を想定すると明示している"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "個人事業主・フリーランスを活用する事業部門"],
      audienceReason: "個人事業主・フリーランスを短時間の正規型労働者として雇用する場合に、健康保険・厚生年金の資格取得が実態上認められるかを事前点検するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-pension-reform-2025"],
      relatedIssues: ["social-insurance-substance-freelancer-shorttime"],
      primarySourceIds: ["source-mhlw-shorttime-regular-worker-insurance-20260914"],
      whatChanged: "行政解釈明確化／個人事業主等を極端に短い正規型労働者として雇用する事案について、常用的使用関係と被保険者資格の具体的な判断枠組みが示された。"
    },
    {
      id: "article-mhlw-officer-freelancer-insurance-amendment-20260914",
      title: "『法人の役員である個人事業主等に係る被保険者資格の取扱いについて』の一部改正について",
      publisher: "厚生労働省",
      author: "厚生労働省 保険局保険課・年金局事業管理課",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/content/12512000/001749393.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・行政通知改正／役員の被保険者資格",
      status: "adopted",
      summary: "法人の役員である個人事業主・フリーランス等の健康保険・厚生年金の資格判断を示した2026年3月通知を改正。会費等が役員報酬と同額以下でも報酬の多くを占める状態が常態化する場合や、活動が役員間の相互互助に過ぎない場合、関連法人への会費支払いが実質的な役員就任条件となる場合等について、経営参画・経常的労務提供・報酬の実態から資格を判断することを明確にした。",
      whyImportant: [
        "会費等が役員報酬を上回る場合だけでなく、同額以下でも報酬の多くを占める場合は実態判断が必要と明確化した",
        "役員相互の研さん・業務紹介等の相互互助に過ぎない活動を、経営参画を内容とする経常的労務提供かどうかの判断要素として追加した",
        "関連法人への会費等の支払いでも、役員就任の実質的条件で単なる資金移動と評価される場合は一体として見る考え方が示された",
        "役員会出席、決裁権、指揮命令権、代表者への報告、会議以外の業務・出勤頻度等を含む実態確認に使える"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "企業法務", "役員管理・コーポレート担当"],
      audienceReason: "個人事業主・フリーランスを法人役員として受け入れる場合に、役員報酬・会費等と実際の経営参画を踏まえて被保険者資格を確認するため。",
      categories: ["労務", "会社法・ガバナンス"],
      relatedTopics: ["social-insurance-expansion-pension-reform-2025"],
      relatedIssues: ["social-insurance-substance-freelancer-shorttime"],
      primarySourceIds: ["source-mhlw-officer-freelancer-insurance-amendment-20260914"],
      whatChanged: "行政解釈更新／個人事業主等である役員について、会費等が報酬以下のケースや相互互助的活動、関連法人への支払いを含む資格判断が追加で明確化された。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id)));
})();

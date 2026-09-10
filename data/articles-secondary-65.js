(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "insider-trading-information-management";
  const jpxSourceId = "source-jpx-jiriss-transition-2026";
  const preventionIssueId = "insider-prevention-controls";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: jpxSourceId,
      title: "新制度移行に伴うJ-IRISSの運営終了に関するお知らせ",
      type: "guideline",
      typeLabel: "自主規制・内部者取引未然防止",
      authority: "日本取引所自主規制法人",
      publishedAt: "2026-05-25",
      url: "https://www.jpx.co.jp/regulation/preventing/activity/02.html",
      importance: "高",
      whyImportant: "J-IRISS終了後も、日本証券業協会の新制度の下で証券会社が提供データベース等と顧客情報を年1回以上照合し、上場会社役職員の口座を不公正取引の未然防止へ利用する現在の運用を確認できる。",
      topics: [topicSlug]
    }
  ]);

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-10";
    topic.lastVerified = "2026-09-10";
    topic.sourceIds = addUniqueString(topic.sourceIds, jpxSourceId);
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "重要情報の集約・売買事前チェック・Need to Know・疑義発生後対応");

    if (!Array.isArray(topic.issues)) topic.issues = [];
    if (!topic.issues.some((issue) => issue.id === preventionIssueId)) {
      topic.issues.push({
        id: preventionIssueId,
        title: "事前チェック・Need to Know・意図的違反への備えをどう設計するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "自社・他社の未公表重要情報をコンプライアンス部門等へ集約し、役職員・会社による株式売買を事前確認する仕組みを基礎にしつつ、情報アクセスを業務上必要な者へ限定するNeed to Know、研修、経営陣から独立した通報・調査ルート、疑義発生後の迅速な調査・当局協力を組み合わせる。",
        exception: "事前許可、売買の原則禁止、事前・事後届出などの設計は役職・部署・情報アクセス可能性や会社の事業特性によって異なる。他社情報は公表・案件終了等を外部から確認しにくく、管理解除の判断が自社情報より難しい場合がある。",
        uncertain: "意図的な規程違反を内部統制だけで完全に防ぐことはできず、必要な売買制限、アクセス統制、監視・教育の水準は会社ごとに設計する必要がある。証券会社側の役職員口座照合も、発行会社自身の情報管理・売買ルールを代替するものではない。",
        sourceIds: ["source-fsa-fiea-law-2026", "source-sesc-nippo-insider-2026", jpxSourceId]
      });
    }

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "J-IRISSは2026年5月25日に運営を終了したが、日本証券業協会の新制度では、証券会社が提供された新データベース等と自社の顧客情報を年1回以上照合し、上場会社役職員と確認された口座を不公正取引の未然防止等に活用する仕組みが続いている。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "売買の事前許可と重要情報の一元管理だけでは意図的な違反や経営陣による統制無効化を防ぎ切れないため、Need to Know、内部通報・調査の独立性、反復研修、疑義発生後の危機管理までを一体の防止策として設計する必要がある。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "インサイダー取引防止規程では、自社・他社情報の社内集約、株式売買の事前確認、情報アクセス制限、研修、家族・知人名義や情報伝達・取引推奨のリスク、疑義発生後の調査・当局協力までを一連の運用として棚卸しする。"
      );
    }
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-jpx-jiriss-transition-2026",
      title: "新制度移行に伴うJ-IRISSの運営終了に関するお知らせ",
      publisher: "日本取引所自主規制法人",
      author: "日本取引所自主規制法人",
      publishedAt: "2026-05-25",
      collectedAt: "2026-09-10",
      url: "https://www.jpx.co.jp/regulation/preventing/activity/02.html",
      sourceType: "primary",
      sourceLabel: "一次資料・自主規制／内部者取引未然防止",
      status: "adopted",
      summary: "上場会社役職員情報を使って証券会社の顧客口座を照合してきたJ-IRISSが2026年5月25日に運営終了し、日本証券業協会の新制度へ移行したことを示す公式案内。新制度でも証券会社は、協会から提供される新データベース等と顧客情報を年1回以上照合し、上場会社役職員と確認された口座を登録してインサイダー取引等の未然防止へ利用する。",
      whyImportant: [
        "J-IRISS終了を内部者取引の照合制度そのものの廃止と誤解せず、2026年5月25日以降の現在の仕組みを確認できる",
        "発行会社側の情報管理・売買ルールと、証券会社側の顧客口座照合という二つの予防線を分けて理解できる",
        "役職員情報・口座管理に関する社内説明やコンプライアンス研修で、旧制度名だけを残さないための更新材料になる"
      ],
      audience: ["上場会社の企業法務", "コンプライアンス・内部者取引管理担当", "総務・役員管理担当"],
      audienceReason: "J-IRISS終了後の役職員口座照合の現在地を確認し、自社のインサイダー取引防止規程・研修・社内説明を現行制度に合わせるため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [preventionIssueId],
      primarySourceIds: [jpxSourceId],
      whatChanged: "テーマ補強／J-IRISS終了後も続く証券会社側の役職員口座照合を、インサイダー取引の未然防止統制として現行化した。"
    },
    {
      id: "article-nishimura-insider-compliance-2026",
      title: "インサイダー取引の防止(コンプライアンス)について考える",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "木目田 裕・宮本 聡・西田 朝輝・澤井 雅登・藤尾 春香",
      publishedAt: "2026-03-31",
      collectedAt: "2026-09-10",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_crisis_management_260331",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／インサイダー取引防止・重要情報管理",
      status: "adopted",
      summary: "インサイダー情報をコンプライアンス部門へ集約し、会社・役職員の株式売買可否を事前確認する基本構造を出発点に、その弱点と補完策を掘り下げる実務解説。他社情報の管理解除の難しさ、意図的違反や経営陣による統制無効化、家族・友人名義や情報伝達・取引推奨への限界を踏まえ、Need to Know、独立した内部通報・調査ルート、社外役員の牽制、反復研修、疑義発生後の事実調査・当局協力・再発防止までを一体で論じている。",
      whyImportant: [
        "法改正の説明にとどまらず、インサイダー情報の社内集約と売買事前チェックを具体的な内部統制フローとして整理している",
        "他社の未公表情報は公表・案件終了等を自社から確認しにくく、管理解除が難しいという実務上の詰まりどころを明示している",
        "事前申請を故意に回避する違反や経営陣による統制無効化は仕組みだけでは防ぎ切れないとし、Need to Know、通報・調査の独立性、社外役員による牽制へ対策を広げている",
        "疑義が生じた後の迅速な事実調査、当局への協力、原因解明、処分・再発防止、ステークホルダー説明まで危機管理としてつないでいる"
      ],
      audience: ["上場会社の企業法務", "コンプライアンス・内部監査", "M&A・経営企画", "役職員研修担当"],
      audienceReason: "インサイダー取引防止規程を法令知識の周知だけで終わらせず、情報集約、売買事前確認、アクセス制限、牽制、研修、違反疑義への対応まで運用として設計するため。",
      categories: ["金融商品取引・開示・IR", "M&A", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [preventionIssueId, "insider-crossborder-information-transmission", "insider-penalties-account-assistance"],
      primarySourceIds: ["source-fsa-fiea-law-2026", "source-sesc-nippo-insider-2026", jpxSourceId],
      whatChanged: "テーマ補強／重要情報の一元管理・株式売買の事前チェックに加え、Need to Know、意図的違反への牽制、研修、違反疑義発生後の危機管理を独立論点として整理した。"
    }
  ]);
})();

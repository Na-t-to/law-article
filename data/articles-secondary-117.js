(() => {
  const privacyTopicSlug = "ai-personal-data";
  const recruitmentTopicSlug = "ai-recruitment-rpo-employment-placement";
  const privacyRulemakingSourceId = "source-ppc-privacy-2026-rulemaking-process";
  const recruitmentEnforcementSourceId = "source-mhlw-recruitment-info-provider-suspension-2026";
  const recruitmentIssueId = "rpo-info-provider-reporting-enforcement";

  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && (item.id || item.slug)));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id || item.slug)));
  };
  const addUniqueStrings = (target, additions) => Array.from(new Set([...(target || []), ...(additions || [])]));
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: privacyRulemakingSourceId,
      title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則・ガイドライン等の整備に関する今後の進め方（案）について",
      type: "administrative",
      typeLabel: "一次資料・個人情報保護委員会／改正法施行準備",
      authority: "個人情報保護委員会",
      publishedAt: "2026-09-09",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260909/",
      importance: "高",
      whyImportant: "2026年改正個人情報保護法について、公布後も政令・委員会規則・ガイドライン等の整備が続いていることを示す個人情報保護委員会の最新の施行準備資料。下位ルールが未確定の領域を成立済みルールと混同せず追跡するための基準点となる。",
      topics: [privacyTopicSlug]
    },
    {
      id: recruitmentEnforcementSourceId,
      title: "特定募集情報等提供事業者に対する事業停止命令について",
      type: "enforcement",
      typeLabel: "一次資料・厚生労働省／職業安定法に基づく事業停止命令",
      authority: "厚生労働省",
      publishedAt: "2026-09-11",
      url: "https://www.mhlw.go.jp/stf/newpage_76028.html",
      importance: "高",
      whyImportant: "特定募集情報等提供事業者が事業概況報告書を提出せず、業務改善命令にも違反したことを理由として、職業安定法43条の4に基づく事業停止命令が発出された具体的な執行例。募集情報等提供に分類されても、届出・報告・監督対応を含む継続的な法令遵守が必要であることを確認できる。",
      topics: [recruitmentTopicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug === privacyTopicSlug) {
      return {
        ...topic,
        lastVerified: "2026-09-13",
        sourceIds: addUniqueStrings(topic.sourceIds, [privacyRulemakingSourceId])
      };
    }
    if (topic.slug !== recruitmentTopicSlug) return topic;

    const currentSummary = topic.currentSummary ? { ...topic.currentSummary } : {};
    currentSummary.facts = addUniqueText(
      currentSummary.facts,
      "2026年9月11日、厚生労働省は、事業概況報告書を期限後も提出せず、2026年5月22日の業務改善命令にも違反した特定募集情報等提供事業者に対し、報告書が提出されるまで全ての特定募集情報等提供事業を停止するよう命じた。"
    );
    currentSummary.interpretations = addUniqueText(
      currentSummary.interpretations,
      "採用サービスが職業紹介ではなく募集情報等提供に分類される場合でも、特定募集情報等提供事業に該当すれば、届出後の事業概況報告や行政命令への対応を含む継続的な規制対応が必要である。サービス区分の判定は許可・届出の入口であって、そこでコンプライアンスが完結するわけではない。"
    );
    currentSummary.implications = addUniqueText(
      currentSummary.implications,
      "募集情報等提供事業者・採用プラットフォームのベンダー審査では、職業紹介許可の有無だけでなく、特定募集情報等提供事業の届出状況、事業概況報告の提出体制、行政からの改善命令等への対応履歴も確認する。"
    );

    return {
      ...topic,
      lastUpdated: "2026-09-13",
      lastVerified: "2026-09-13",
      sourceIds: addUniqueStrings(topic.sourceIds, [recruitmentEnforcementSourceId]),
      practicalImpacts: addUniqueText(topic.practicalImpacts, "募集情報等提供事業の届出後報告・行政監督対応"),
      currentSummary,
      issues: addUniqueById(topic.issues, [
        {
          id: recruitmentIssueId,
          title: "募集情報等提供事業者の届出後の報告・行政監督をどう管理するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "特定募集情報等提供事業者には事業概況報告書の提出義務があり、報告義務違反に対する業務改善命令にも従わない場合、職業安定法43条の4に基づく事業停止命令の対象となり得る。採用サービスの規制対応は、職業紹介該当性や届出要否の判定だけでなく、届出後の定期報告と監督対応まで含めて管理する必要がある。",
          exception: "具体的な義務の範囲は、当該サービスが特定募集情報等提供事業に該当するか、事業者の業務内容や法令上の区分によって異なる。",
          uncertain: "個別サービスの機能変更によって職業紹介と募集情報等提供の境界をまたぐ場合の許認可・報告実務は、実際の機能・運用に即して継続的に再評価する必要がある。",
          sourceIds: [recruitmentEnforcementSourceId, "source-mhlw-recruitment-info-placement-boundary"]
        }
      ])
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-ppc-privacy-2026-rulemaking-process",
      title: "改正個人情報保護法　政令・規則・ガイドライン等の整備に関する今後の進め方",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-13",
      url: "https://www.ppc.go.jp/aboutus/minutes/2026/20260909/",
      sourceType: "primary",
      sourceLabel: "一次資料・改正個人情報保護法の施行準備",
      status: "adopted",
      summary: "第368回個人情報保護委員会で、2026年改正個人情報保護法の施行に向けた政令・委員会規則・ガイドライン等の整備の進め方が議題となった。改正法は公布済みだが、事業者実務を具体化する下位ルールの整備が引き続き進行中であることを確認できる。",
      whyImportant: [
        "改正法の成立・公布と、政令・委員会規則・ガイドライン等の具体化を分けて追うための最新の一次資料である",
        "統計作成等の特例、委託先規律、第三者提供など、企業実務への落とし込みに必要な細則が今後も更新されることを確認できる",
        "法改正情報の段階を『施行済み』へ先走らせず、公布・施行待ちとして管理する根拠になる"
      ],
      audience: ["企業法務", "プライバシー・個人情報保護担当", "AI・データガバナンス担当", "情報システム・セキュリティ担当"],
      audienceReason: "2026年改正法への対応計画について、法律本文で確定した事項と今後の下位ルールで具体化される事項を切り分けるため。",
      categories: ["個人情報・AI・情報セキュリティ"],
      relatedTopics: [privacyTopicSlug],
      relatedIssues: ["ai-statistical-use", "ai-outsourcing", "ai-transfer"],
      primarySourceIds: [privacyRulemakingSourceId, "source-privacy-law-2026-amendment"],
      reformEventId: "personal-information-protection-act-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [privacyRulemakingSourceId, "source-privacy-law-2026-amendment"],
      whatChanged: "施行準備更新／2026年改正個人情報保護法は公布済みだが、政令・委員会規則・ガイドライン等の具体化が継続していることを最新の委員会資料で確認し、法改正段階を公布・施行待ちとして追跡した。"
    },
    {
      id: "article-tmi-privacy-2026-statistical-exception",
      title: "[連載] 令和8年改正個人情報保護法研究：《第2回》統計作成等の特例",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-05-13",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18326.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・統計作成等の特例／AI開発",
      status: "adopted",
      summary: "2026年改正法案の統計作成等の特例について、公開済みの要配慮個人情報の取得、個人情報・個人関連情報の第三者提供、公表・書面合意、再提供制限、安全管理、外国第三者提供などの要件を整理し、AI開発や委託先による自社目的利用での活用可能性と未確定論点を検討する実務解説。",
      whyImportant: [
        "統計作成等の特例を単なる『AI学習なら同意不要』と捉えず、取得・提供・受領後利用・再提供・安全管理の条件を分解して確認できる",
        "委託先が受領データを自社の分析技術やAI精度改善に使う場面など、企業のデータ取引・AI委託に直結するケースを具体的に検討している",
        "規則・ガイドラインで明確化が必要な点を示しており、成立後も下位ルールを追うべき理由が分かる"
      ],
      audience: ["企業法務", "プライバシー・個人情報保護担当", "AI開発・データ事業担当", "AI・データサービスの契約担当"],
      audienceReason: "AI開発・データ分析のための取得や第三者提供について、改正法の特例を使える条件と契約・公表・安全管理上の対応を具体化するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引"],
      relatedTopics: [privacyTopicSlug],
      relatedIssues: ["ai-statistical-use"],
      primarySourceIds: ["source-privacy-law-2026-amendment"],
      reformEventId: "personal-information-protection-act-2026-amendment",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-privacy-law-2026-amendment"],
      whatChanged: "整理変更なし／統計作成等の特例について、AI開発・データ提供・委託の具体的な適用条件と残された下位ルール上の論点を補う実務解説を追加。"
    },
    {
      id: "article-mhlw-recruitment-info-provider-suspension-2026",
      title: "特定募集情報等提供事業者に対する事業停止命令について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-13",
      url: "https://www.mhlw.go.jp/stf/newpage_76028.html",
      sourceType: "primary",
      sourceLabel: "一次資料・募集情報等提供事業者への事業停止命令",
      status: "adopted",
      summary: "厚生労働省が、事業概況報告書を期限後も提出せず、2026年5月22日の業務改善命令にも違反した特定募集情報等提供事業者に対し、職業安定法43条の4に基づき、報告書が提出されるまで全ての特定募集情報等提供事業を停止するよう命じた事案。",
      whyImportant: [
        "募集情報等提供事業者に対して事業停止命令まで行われた具体的な執行例であり、届出後の報告義務が実際に監督されていることが分かる",
        "採用サービスが職業紹介に当たらない場合でも規制対応が終わるわけではなく、募集情報等提供事業側の義務を別途管理する必要性が明確になる",
        "採用AI・RPOベンダーの法令適合性を、職業紹介許可の有無だけで評価しないための実務的な材料になる"
      ],
      audience: ["人事・採用担当", "企業法務", "採用AI・RPO事業者", "HR Tech・求人プラットフォーム事業者", "ベンダー管理担当"],
      audienceReason: "採用サービスの事業区分を確認した後に必要となる、届出・事業概況報告・行政監督への対応まで含めてコンプライアンスを設計するため。",
      categories: ["労務・人事", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [recruitmentTopicSlug],
      relatedIssues: [recruitmentIssueId, "rpo-contract-licensing-controls"],
      primarySourceIds: [recruitmentEnforcementSourceId],
      whatChanged: "実務補強／職業紹介と募集情報等提供の境界整理に加え、募集情報等提供事業者には届出後の事業概況報告と行政監督対応が必要であり、違反時には事業停止命令まであり得ることを執行例として追加した。"
    }
  ]);
})();

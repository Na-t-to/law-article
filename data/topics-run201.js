(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "ai-publicity-voice-rights-2026");
  if (!topic) return;

  const hearingSource = "source-meti-unfair-competition-ai-likeness-hearing-20260911";
  const mojSource = "source-moj-ai-publicity-voice-report-2026";
  const articleId = "article-meti-unfair-competition-ai-likeness-hearing-20260911";
  const issueId = "ai-publicity-ucpa-policy-review-2026";

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  topic.summary = "法務省の2026年8月『生成AIによるパブリシティ権侵害等に関する解釈指針』を軸に、生成AIで他人の肖像・声を生成・公開・サービス提供する場合の現行法上の論点を整理する。2026年9月11日には経済産業省の不正競争防止小委員会で関係者ヒアリングが行われ、不正競争防止法による追加的な制度整備の要否も検討対象となったが、法改正の方向・内容は未決である。";

  topic.overview = appendUnique(topic.overview, [
    "2026年9月11日の第30回不正競争防止小委員会では、法務省と実演家・業界団体から、生成AIによる肖像・声の無断利用についてヒアリングが行われた。現行法の解釈だけでなく、不正競争防止法による追加的な法的整備の必要性も検討対象となっているが、会合は関係者の実態・制度要望を聴く段階であり、改正案や新たな禁止行為が決定したわけではない。"
  ]);

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendUnique(topic.currentSummary.facts, [
    "2026年9月11日、第30回産業構造審議会知的財産分科会不正競争防止小委員会で、生成AIによる肖像・声の無断利用について法務省と実演家・業界団体からヒアリングが行われた。",
    "関係者からは、不正競争防止法上の保護対象として声をより明確に扱うこと、本人以外の団体・所属事務所等による権利行使、AI学習用の音声データ等の保護など複数の制度要望が示されたが、いずれも現時点で政府案・委員会合意ではない。"
  ]);
  topic.currentSummary.interpretations = appendUnique(topic.currentSummary.interpretations, [
    "法務省報告書が示す現行法の解釈と、経産省小委員会で示された将来の制度要望は区別して読む必要がある。9月11日時点で企業に新しい法定義務が追加されたわけではない。"
  ]);
  topic.currentSummary.implications = appendUnique(topic.currentSummary.implications, [
    "肖像・声を扱うAIサービス、広告、音声モデル、出演者契約では現行法に基づく権利処理を続けつつ、不競法上の保護対象、請求主体、学習用データ保護が今後どのように具体化されるかを継続確認する。"
  ]);
  topic.currentSummary.uncertain = appendUnique(topic.currentSummary.uncertain, [
    "不正競争防止法を改正するか、改正する場合に声・肖像をどの要件で保護し、誰に請求権を認め、AI学習用データをどう扱うかは未決であり、今後の小委員会審議を確認する必要がある。"
  ]);

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "不正競争防止法による肖像・声の保護は見直されるか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "2026年9月11日の不正競争防止小委員会で、生成AIによる肖像・声の無断利用について関係者ヒアリングが行われ、不正競争防止法による追加的な法的整備の要否が検討対象となった。現時点では制度案・改正内容は決まっていない。",
      exception: "業界団体等から示された『声』の明記、団体・所属事務所等による請求、AI学習用データの保護等は関係者の要望・提案であり、政府案や委員会の合意として扱わない。",
      uncertain: "今後の審議で、保護対象・要件、請求主体、学習段階と生成・利用段階の切分け、海外サービスへの執行、適法な創作との均衡をどのように制度化するかを確認する必要がある。",
      sourceIds: [hearingSource, mojSource]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [hearingSource]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["不正競争防止法の制度見直しモニタリング"]);
})();

(() => {
  const additions = [
    {
      slug: "consumer-contract-act-review-2026",
      title: "消費者契約法2026年見直し／脆弱性・継続契約・解約料",
      categories: ["契約", "危機管理・コンプライアンス"],
      summary: "2026年9月10日の消費者契約法検討会中間取りまとめと、9月16日開始の意見募集を軸に、消費者の多様な脆弱性への配慮、重大な結果をもたらす契約からの解放、継続契約の解約・更新・契約変更通知、解約料規律の見直しを追う。いずれも検討段階であり、法案・成立済みルールではない。",
      lastUpdated: "2026-09-18",
      lastVerified: "2026-09-18",
      isNew: true,
      overview: [
        "消費者庁の検討会は2026年9月10日、中間取りまとめを公表した。消費者の年齢や認知・経験、置かれた状況などにより適切な判断が難しくなる場面を踏まえ、事業者に求める配慮の考え方や、一定の場合に契約関係から離脱できる仕組みを含む見直しの方向性を示している。",
        "継続契約では、解約を不当に妨げる行為への規律、合理的に利用可能な解約方法の確保、解約条件・更新・重要な契約変更の通知、死亡時の手続など、契約締結後の『出口』まで制度設計の対象となっている。",
        "解約料についても現行ルールの見直しが検討されているが、要件や立証責任の設計には複数案があり、現時点で確定した規律ではない。中間取りまとめは2026年9月16日から10月31日まで任意の意見募集に付されている。"
      ],
      currentSummary: {
        facts: [
          "消費者庁は2026年9月10日、『現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ』を公表した。",
          "中間取りまとめは、消費者の多様な脆弱性を踏まえた配慮、一定の重大な結果をもたらす契約からの解放、継続契約の解約・更新・契約変更通知、解約料規律等の見直し方向を示している。",
          "中間取りまとめに対する意見募集は2026年9月16日から10月31日まで実施されている。"
        ],
        interpretations: [
          "現段階は検討会の中間取りまとめと意見募集であり、条文案・国会提出法案・成立済みルールとして扱ってはならない。",
          "事業者側の実務では、契約締結時の説明だけでなく、更新・変更・解約という契約ライフサイクル全体の設計が今後の規律対象になり得る点が重要である。"
        ],
        implications: [
          "サブスクリプションその他の継続契約について、申込方法と比べて解約が不合理に難しくなっていないか、解約条件・更新時期・重要な契約変更の通知設計を棚卸しする。",
          "高齢者その他判断能力が状況により低下し得る顧客との契約について、説明・確認・第三者関与等の運用を今後の制度具体化に合わせて見直せるよう整理する。",
          "解約料・違約金を設定する事業では、今後の立証責任・算定ルールの具体化を継続確認する。"
        ],
        uncertain: [
          "重大な結果をもたらす契約からの解放制度の対象契約、判断困難性の要件、第三者関与の方法等は未確定である。",
          "解約料規律の要件・立証責任には複数の考え方が示されており、最終的な制度設計は今後の検討・法制化過程を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "consumer-contract-2026-principles-vulnerability",
          title: "消費者の多様な脆弱性を踏まえた配慮をどう制度化するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "中間取りまとめは、消費者の多様な脆弱性を前提に事業者の配慮を促す方向を示しているが、具体的な法的義務・ガイドライン・官民の取組の組合せは未確定である。",
          exception: "すべての消費者を一律に脆弱と扱う制度や、個別事情を無視した過度な画一規制が確定したわけではない。",
          uncertain: "法令上の義務にする範囲、ガイドライン等で具体化する範囲、実効性確保の仕組みを今後確認する必要がある。",
          sourceIds: ["source-caa-consumer-contract-interim-20260910", "source-egov-consumer-contract-interim-comment-20260916"]
        },
        {
          id: "consumer-contract-2026-serious-result-release",
          title: "重大な結果をもたらす契約からの解放制度をどう設計するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "消費者が適切な判断をすることが困難な状況で、契約により重大な結果が生じる場合に契約関係から解放する仕組みが検討されている。",
          exception: "対象契約や判断困難性、重大な結果の範囲、第三者関与等は具体化途上であり、現時点で一般的な取消権等が新設されたわけではない。",
          uncertain: "要件・効果・行使期間・第三者による見守りとの関係など制度の核心部分が今後の検討対象である。",
          sourceIds: ["source-caa-consumer-contract-interim-20260910"]
        },
        {
          id: "consumer-contract-2026-continuous-contract-exit",
          title: "継続契約の解約妨害・合理的な出口をどう規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "継続契約について、解約を不当に妨げる行為を規律し、合理的に利用可能な解約方法を確保し、解約方法・条件等を分かりやすく提供する方向が検討されている。",
          exception: "契約申込と解約を完全に同一手順にする義務等が確定したわけではなく、合理性の具体的基準は今後の制度化に委ねられている。",
          uncertain: "どの程度の手続差・連絡手段の制限・本人確認等が許容されるか、差止め対象の範囲を含めて具体化待ちである。",
          sourceIds: ["source-caa-consumer-contract-interim-20260910"]
        },
        {
          id: "consumer-contract-2026-renewal-change-fees",
          title: "更新・重要変更の通知と解約料規律をどう見直すか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "更新時の退出機会確保、重要な契約変更の事前通知、解約料規律の見直しが検討対象となっている。",
          exception: "解約料の算定・立証責任については複数案が示されており、事業者に一律の新たな立証義務が確定したわけではない。",
          uncertain: "通知対象となる変更、通知時期・方法、解約料について誰が何を立証するか等の詳細は今後の法制化過程で確認する必要がある。",
          sourceIds: ["source-caa-consumer-contract-interim-20260910"]
        }
      ],
      sourceIds: ["source-caa-consumer-contract-interim-20260910", "source-egov-consumer-contract-interim-comment-20260916"],
      practicalImpacts: [
        "サブスクリプション・継続契約の解約導線棚卸し",
        "更新・重要な契約変更の通知設計",
        "解約料・違約金条項のモニタリング",
        "判断困難な消費者への説明・確認プロセス"
      ]
    },
    {
      slug: "digital-transactions-scta-review-2026",
      title: "特商法・デジタル取引2026年見直し／ダークパターン・チャット勧誘",
      categories: ["契約", "危機管理・コンプライアンス"],
      summary: "2026年9月10日のデジタル取引・特定商取引法等検討会中間取りまとめと、9月16日開始の意見募集を軸に、SNS等のチャット勧誘、ダークパターンを含む表示・UI、最終確認画面、アップセル、電子的な契約記録、解約妨害への規律見直しを追う。現段階は政策提案であり、法案・成立済みルールではない。",
      lastUpdated: "2026-09-18",
      lastVerified: "2026-09-18",
      isNew: true,
      overview: [
        "消費者庁の検討会は2026年9月10日、インターネット取引の一連のプロセスを対象とする中間取りまとめを公表した。SNSのDM、電子メール、SMS等を使った個別・双方向の勧誘、表示・UI、申込時の最終確認、契約後の解約までが見直し対象となっている。",
        "ダークパターンについては、重要条件を認識しにくくする表示、虚偽の口コミ・利用状況・在庫・タイムセール情報、反復的・威迫的な操作要求等を念頭に規律の具体化・拡張が検討されている一方、通常の利便性向上や適法な営業活動を過度に規制しないことも明記されている。",
        "中間取りまとめは、注文直前の最終確認で支払総額や重要条件を分散させない表示、注文後の条件変更時の比較表示、電子的な契約記録の提供、申込時に比べ不合理に複雑な解約導線への規律等も検討対象としている。2026年9月16日から10月31日まで意見募集が行われている。"
      ],
      currentSummary: {
        facts: [
          "消費者庁は2026年9月10日、『デジタル取引・特定商取引法等検討会中間取りまとめ』を公表した。",
          "中間取りまとめは、SNS等を用いる個別的なチャット勧誘、ダークパターンを含む表示・UI、最終確認画面、アップセル、契約記録、解約手続等の規律見直しを提案している。",
          "中間取りまとめに対する意見募集は2026年9月16日から10月31日まで実施されている。"
        ],
        interpretations: [
          "現時点では中間取りまとめと意見募集の段階で、個々のUI類型が直ちに違法となったわけではない。",
          "今後の規律が広告文言だけでなく、表示の強弱、ボタン配置、画面遷移、選択肢の初期設定、契約後の解約導線まで対象とする方向に進んでいる点が企業法務上重要である。"
        ],
        implications: [
          "EC・アプリ・サブスクリプション事業では、価格・数量・期間等の重要条件、在庫・タイマー・口コミ等の表示、プリセレクション、アップセル、最終確認画面をUI/UX単位で棚卸しする。",
          "SNSのDM・メール・SMS等で個別の消費者と双方向にやり取りして勧誘する営業プロセスについて、今後の電話勧誘販売類似規制の対象範囲を確認する。",
          "申込手続と解約手続の手間・チャネル・画面遷移を比較し、合理的理由なく解約だけを過度に困難にしていないかを法務・Web・マーケティング横断で確認する。"
        ],
        uncertain: [
          "ダークパターン規律の包括要件、ブラックリスト・ホワイトリストの具体内容、通常の営業UIとの境界は未確定である。",
          "チャット等による勧誘の対象範囲、クーリング・オフ等の要件、最終確認・解約規律の具体的な条文化と施行時期は今後の検討事項である。"
        ]
      },
      issues: [
        {
          id: "digital-scta-2026-chat-solicitation",
          title: "SNS・メール等のチャット勧誘をどこまで電話勧誘販売類似に規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "特定の消費者との双方向のやり取りを通じて不意打ち的に契約を勧誘する一定のチャット等について、目的明示、再勧誘禁止、クーリング・オフ等の電話勧誘販売類似規制を設ける方向が検討されている。",
          exception: "双方向のやり取りを予定しない一斉配信や単発のポップアップ表示まで当然に同じ規律対象とする方向が確定しているわけではない。",
          uncertain: "どの程度の個別性・双方向性・不意打ち性を要件とするか、具体的な適用範囲は今後の制度設計を確認する必要がある。",
          sourceIds: ["source-caa-digital-scta-interim-20260910"]
        },
        {
          id: "digital-scta-2026-dark-pattern-ui",
          title: "ダークパターンを含む表示・UIをどう規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "重要条件を認識しにくくする表示、虚偽の口コミ・利用状況・在庫・タイムセール情報、反復的・威迫的な操作要求等について、表示・UI全体を対象に規律を具体化・拡張する方向が検討されている。",
          exception: "商品を分かりやすく示すことや購入手続を円滑にする通常のUIまで広く禁止する趣旨ではなく、利便性・創意工夫との均衡が課題とされている。",
          uncertain: "包括規定と個別禁止類型をどう組み合わせるか、下位法令・ガイドラインでどのUIを違法・適法例として示すかは未確定である。",
          sourceIds: ["source-caa-digital-scta-interim-20260910"]
        },
        {
          id: "digital-scta-2026-final-confirmation",
          title: "最終確認・アップセル・契約記録の表示義務をどう見直すか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "支払総額や重要条件を分散させず最終確認時に認識しやすく示すこと、注文後に条件変更を提示する場合の前後比較、契約内容を後から確認できる電子的記録の提供等が検討されている。",
          exception: "具体的な表示項目・表示方法・交付方法は確定しておらず、現行義務に直ちに追加されたわけではない。",
          uncertain: "アップセルのどの類型を対象とするか、電子的契約記録の内容・方法・時期など詳細は今後の法令設計を確認する必要がある。",
          sourceIds: ["source-caa-digital-scta-interim-20260910"]
        },
        {
          id: "digital-scta-2026-cancellation-obstruction",
          title: "オンライン解約の不当な遅延・過度な複雑化をどう規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "解約を不当に遅延させる行為や、契約手続と比較して合理的理由なく過度に複雑な解約手続を課す行為を規律対象とする方向が検討されている。",
          exception: "申込と解約の手順を完全に同一にすることや、本人確認その他合理的な解約手続まで禁止することが確定したわけではない。",
          uncertain: "『合理的理由』『過度に複雑』の判断基準、違反時の行政・民事効果等は今後の具体化を確認する必要がある。",
          sourceIds: ["source-caa-digital-scta-interim-20260910"]
        }
      ],
      sourceIds: ["source-caa-digital-scta-interim-20260910", "source-egov-digital-scta-interim-comment-20260916"],
      practicalImpacts: [
        "EC・アプリのUI/UX法務レビュー",
        "SNS・DM営業の勧誘フロー棚卸し",
        "最終確認画面・アップセル表示の点検",
        "注文後の契約記録提供",
        "解約・退会導線の複雑性チェック"
      ]
    }
  ];

  const existing = new Set((window.TOPIC_DATA || []).map((item) => item && item.slug));
  const fresh = additions.filter((item) => !existing.has(item.slug));
  if (fresh.length) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(fresh);
})();

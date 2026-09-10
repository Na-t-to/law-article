(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };
  const addUniqueBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.slug));
    return (target || []).concat(additions.filter((item) => !existing.has(item.slug)));
  };

  const topicSlug = "digital-transactions-specified-commercial-transactions-review-2026";
  const sourceId = "source-caa-digital-transactions-interim-report-20260910";
  const articleId = "article-caa-digital-transactions-interim-report-20260910";
  const reformEventId = "digital-transactions-specified-commercial-transactions-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: sourceId,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      type: "report",
      typeLabel: "消費者庁検討会・中間取りまとめ",
      authority: "消費者庁",
      publishedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      importance: "高",
      whyImportant: "SNS・メール等のチャット勧誘、広告・UIによる意思決定誘導、定期購入・アップセル・解約導線、デジタルプラットフォームの役割など、デジタル取引と特定商取引法等の今後の制度見直し方向を消費者庁検討会が整理した公式の中間取りまとめ。現行法の改正成立や施行を示す資料ではない。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "デジタル取引・特定商取引法見直し（2026年）",
      categories: ["消費者法", "契約", "危機管理・コンプライアンス"],
      summary: "2026年9月10日の消費者庁中間取りまとめを起点に、チャット等による勧誘、広告・UIによる意思決定誘導、定期購入・解約導線、デジタルプラットフォームの役割など、デジタル取引に関する特定商取引法等の見直しを、現行法と検討中の制度を分けて追う。",
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      isNew: true,
      overview: [
        "消費者庁のデジタル取引・特定商取引法等検討会は2026年9月10日、中間取りまとめを公表した。これは今後必要な措置の方向性を示す政策検討資料であり、記載された規律が現時点で成立・施行したものではない。",
        "中間取りまとめは、SNSのダイレクトメッセージ、電子メール、SMS等を含む双方向の『チャット等』による不意打ち性の高い勧誘について、電話勧誘販売と共通する性質を踏まえた規律を検討する方向を示す。",
        "広告・UI、最終確認画面、定期購入、アップセル、解約手続、プラットフォーム上の広告など、契約締結前から解約までのデジタル導線全体が検討対象になっているため、広告文言だけでなくプロダクト・営業運用も含めて追跡する必要がある。"
      ],
      currentSummary: {
        facts: [
          "2026年9月10日の中間取りまとめは、デジタル取引を含む消費者取引の環境変化を踏まえ、今後必要な制度措置の方向性を整理した検討会報告であり、新たな法的義務を直ちに発生させるものではない。",
          "不意打ち性の高いチャット等による勧誘について、事業者名・勧誘目的等の告知、不実告知・事実不告知や威迫・困惑行為、拒絶後の再勧誘、契約書面、クーリング・オフ等を電話勧誘販売と同様に規律する方向が示された。",
          "広告場面では、広告であることを判別しにくい表示への規律を含む意思決定誘導への対応、契約場面では最終確認画面、定期購入、アップセル、支払総額・契約期間・解約条件等の表示の在り方が検討対象とされた。",
          "デジタルプラットフォームや広告プラットフォームについて、取引当事者の責任を前提としつつ、消費者が安心して取引できる環境の確保に積極的な役割を果たすことや、ソフトロー・官民協働を活用する方向が示された。"
        ],
        interpretations: [
          "今回の整理は『通信販売一般に直ちにクーリング・オフが導入された』という意味ではない。提案は、不意打ち性の高いチャット等の勧誘を経た取引を中心に、従来の通信販売とは異なる規律を設ける方向を示したものとして追う必要がある。",
          "規制対象の中心が広告コピーだけでなく、DM・チャットの開始方法、画面遷移、プラン提示、アップセル、解約フロー等へ広がる可能性があるため、法務審査の単位を『表示文言』から『取引導線』へ広げる準備が有用である。",
          "プラットフォームに関する提言は、個々の販売業者等の責任を置き換えるものではなく、取引基盤提供者による安全確保の役割を追加的に検討するものとして分けて読む必要がある。"
        ],
        implications: [
          "SNSのDM、電子メール、SMS、チャット、オンラインセミナー等を使う営業・マーケティングについて、誰が開始し、勧誘目的をいつ示し、拒絶後の連絡をどう停止するかを棚卸しする。",
          "EC・アプリの最終確認画面、定期購入、アップセル、支払総額、契約期間、解約条件、解約導線を画面単位ではなく一連のユーザーフローとして保存・点検できるようにする。",
          "広告出稿先・マーケットプレイス・SNS等のプラットフォームについて、違反広告やアカウントへの対応、事業者確認、行政要請への対応窓口を確認する。",
          "法案・政省令案等が具体化するまでは現行の特定商取引法、景品表示法、消費者契約法等に基づく審査を維持し、中間取りまとめの提案を現行義務として先取りしない。"
        ],
        uncertain: [
          "チャット等による勧誘の最終的な対象範囲、不意打ち性の判断基準、勧誘目的告知・再勧誘禁止・契約書面・クーリング・オフ等の具体的要件は、今後の法制化・下位法令等の検討に委ねられる。",
          "広告・UIに対する具体的な禁止類型、行政規律と民事効の関係、プラットフォームに求める措置の法的性質・対象範囲・時期は未確定である。",
          "消費者契約法側の制度見直しとの接続や、最終的にどの法律・政省令・ガイドラインへ各措置を置くかは今後の検討を確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "digital-transaction-chat-solicitation-2026",
          title: "チャット等による不意打ち勧誘をどこまで規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "中間取りまとめは、特定の相手方との双方向のチャット等について、事業者から開始する場合や、勧誘目的を告げない・著しく有利な条件を示すなどして消費者側から開始させる場合を念頭に、電話勧誘販売と同等の規律を講ずる方向を示した。",
          exception: "応答を想定しない一斉配信や単発のポップアップ等は、それのみではチャット等による勧誘規制の対象としない方向が示されている一方、既存の訪問販売・電話勧誘販売規制に該当する可能性は別途残る。",
          uncertain: "最終的な規制対象となる通信手段・誘引方法、不意打ち性の基準、既存契約の履行・管理連絡等の除外範囲は未確定である。",
          sourceIds: [sourceId]
        },
        {
          id: "digital-transaction-ui-advertising-2026",
          title: "広告・UIによる意思決定誘導をどう規律するか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "中間取りまとめは、実際には広告であるにもかかわらず広告と判別しにくい表示への禁止・明示等を含め、オンライン上の表示・UIが消費者の意思決定を歪める問題へ行政規律を中心に対応する方向を示した。",
          exception: "広告一般への一律規制は、取引類型ごとの特性や既存の勧誘・書面・広告表示規制との関係を踏まえて慎重に検討すべきとの整理も含まれている。",
          uncertain: "具体的な禁止類型、適用要件、景品表示法その他の既存規制との役割分担、民事上の効果は未確定である。",
          sourceIds: [sourceId]
        },
        {
          id: "digital-transaction-contract-cancellation-2026",
          title: "定期購入・アップセル・解約導線をどう見直すか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "最終確認画面の機能を維持しつつ、『定期縛りなし』『いつでも解約可能』等の表示、アップセル、支払総額・契約期間・解約条件の分散表示など、申込みから解約までの取引条件を消費者が把握しにくい設計への追加対応が検討されている。",
          exception: "現行の通信販売に関する最終確認画面規制等は引き続き適用されており、中間取りまとめはその現行規律を消滅・停止させるものではない。",
          uncertain: "追加的な表示義務、解約手続規制、民事効、電子書面等の具体的な制度設計は今後の検討事項である。",
          sourceIds: [sourceId]
        },
        {
          id: "digital-platform-consumer-transaction-role-2026",
          title: "デジタルプラットフォームにどの役割を求めるか",
          status: "pending",
          stage: "draft",
          views: [],
          conclusion: "中間取りまとめは、販売業者等の責任を前提とした上で、取引・広告のプラットフォーム提供事業者等にも消費者の安心・安全確保へ積極的な役割を求め、ソフトローや官民協働も活用する方向を示した。",
          exception: "取引基盤提供者が個々の取引当事者の責任を全面的に代替するとの整理ではなく、取引類型・機能・実効性を踏まえた制度設計が必要とされている。",
          uncertain: "削除要請、アカウント対応、事業者確認その他の具体的措置を誰にどの法形式で課すかは未確定である。",
          sourceIds: [sourceId]
        }
      ],
      sourceIds: [sourceId],
      practicalImpacts: [
        "SNS・チャット・メール営業の勧誘フロー",
        "EC・アプリの広告表示・UIレビュー",
        "定期購入・アップセル・最終確認画面",
        "解約導線・カスタマーサポート",
        "プラットフォーム・広告出稿管理"
      ]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "デジタル取引・特定商取引法等・2026年制度見直し",
      eventType: "policy_review",
      lawId: "digital-transactions-specified-commercial-transactions-review",
      lawLabel: "デジタル取引・特定商取引法等見直し",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "unknown",
      matchSourceIds: [sourceId],
      sourceIds: [sourceId],
      articleIds: [articleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: articleId,
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-10",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・中間取りまとめ／デジタル取引・特定商取引法等見直し",
      status: "adopted",
      summary: "消費者庁検討会が2026年9月10日に公表した中間取りまとめ。SNS・メール等のチャット勧誘について電話勧誘販売と共通する不意打ち性を踏まえた規律を検討するほか、広告・UIによる意思決定誘導、定期購入・アップセル・解約導線、デジタルプラットフォームの役割など、今後の制度見直しの方向を示す。現時点で新たな規律が成立・施行したものではない。",
      whyImportant: [
        "チャット等による不意打ち勧誘について、勧誘目的の告知、不実告知等の禁止、拒絶後の再勧誘禁止、契約・解約場面の保護まで具体的な検討方向が示された",
        "広告文言だけでなく、広告性の認識、画面遷移、定期購入、アップセル、総額・期間・解約条件、解約導線などUI・取引設計自体が規律対象になり得ることを公式資料で確認できる",
        "法改正成立前の中間取りまとめとして記録することで、現行法と今後の政策提案を混同せず、法案・政省令・ガイドライン等への具体化を追跡できる"
      ],
      audience: ["企業法務", "EC・デジタルサービス事業者", "広告・マーケティング担当", "プロダクト・UX担当", "コンプライアンス"],
      audienceReason: "SNS勧誘、広告・UI、定期購入、アップセル、解約、プラットフォーム利用を含むデジタル取引フローについて、将来の制度変更がどこへ影響し得るかを現行法と分けて把握するため。",
      categories: ["消費者法", "契約", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-transaction-chat-solicitation-2026", "digital-transaction-ui-advertising-2026", "digital-transaction-contract-cancellation-2026", "digital-platform-consumer-transaction-role-2026"],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceId],
      whatChanged: "新テーマ追加／デジタル取引・特定商取引法等の2026年制度見直しについて、チャット勧誘、広告・UI、契約・解約、プラットフォームの各論点を、現行法と検討中の提案を分けて追跡する棚を追加した。"
    }
  ]);
})();

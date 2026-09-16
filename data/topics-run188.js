(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const without = (items, removals) => (Array.isArray(items) ? items : []).filter((item) => !removals.includes(item));

  const digital = (window.TOPIC_DATA || []).find((item) => item?.slug === "digital-commerce-tokusho-review");
  if (digital) {
    const finalSource = "source-caa-digital-tokusho-interim-final-2026";
    const commentSource = "source-caa-digital-tokusho-public-comment-2026";
    const oldDraft = "source-caa-digital-tokusho-interim-2026";
    digital.lastUpdated = "2026-09-17";
    digital.lastVerified = "2026-09-17";
    digital.overview = [
      "消費者庁のデジタル取引・特定商取引法等検討会は、2026年9月10日に中間とりまとめを公表し、チャットを用いた勧誘、消費者の判断を歪める画面設計、通信販売の最終確認画面、レスキュー・点検商法などについて制度見直しの方向を整理した。",
      "双方向チャットについては、事業者側からの働きかけや消費者の誘引を契機に個別・継続的なやり取りが行われる場合、電話勧誘販売に近い不意打ち性・圧力が生じ得るとして、氏名・目的の明示、虚偽・不告知、威迫、再勧誘、クーリング・オフ等を参考にした規律が検討されている。",
      "ECでは、ダークパターンを名称ごとの禁止リストにするのではなく、誤認を招く又は攻撃的なインターフェースを包括的に捉える方向が示され、最終確認画面では総支払額や重要条件を分断せず分かりやすく表示することも論点になっている。",
      "中間とりまとめは2026年9月16日から10月31日までパブリックコメントに付されている。現時点では法改正・省令改正等が成立した段階ではなく、制度見直し案として扱う必要がある。"
    ];
    digital.currentSummary = {
      facts: [
        "2026年9月10日に『デジタル取引・特定商取引法等検討会 中間とりまとめ』が公表された。",
        "中間とりまとめは、双方向のテキストチャットによる勧誘、ダークパターン、通信販売の最終確認画面、契約書面の電子交付、レスキュー・点検商法等を主要論点として整理している。",
        "チャット勧誘では、一方向の広告・メッセージ一般ではなく、事業者の働きかけ等を契機とした個別・双方向のやり取りが電話勧誘販売に近い性質を持ち得ることを踏まえた規律が検討されている。",
        "中間とりまとめは2026年9月16日から10月31日まで意見募集に付されており、具体的な条文・施行日はまだ確定していない。"
      ],
      interpretations: [
        "チャット機能を備えるだけで直ちに電話勧誘販売型の規律対象になるという整理ではない。誰が接触を開始したか、個別性、双方向性、勧誘の継続性等を分けて見る必要がある。",
        "ダークパターン対応は、既知の名称をチェックするだけでは足りない。消費者の認知・選択を歪める設計になっていないかを、導線、初期設定、ボタンの強調、重要条件の配置、総額表示等から評価する方向が示されている。",
        "最終確認画面やアップセルでは、形式的に情報がどこかに存在することより、注文確定前に契約全体の重要情報を比較・把握できる表示設計が重要になる。"
      ],
      implications: [
        "EC・サブスクリプションの購入フローについて、総支払額、継続条件、解約条件、アップセル前後の差分が最終確認画面で一体的に把握できるかを点検する。",
        "チャットボット、有人チャット、SNSのDM等を使った販売について、勧誘開始の契機、再勧誘、表示・ログ保存、クーリング・オフ対応を棚卸しする。",
        "レスキュー・点検サービスでは、Web上の入口価格と現場提示価格の差、追加作業の説明、解約妨害の有無を重点的に確認する。"
      ],
      uncertain: [
        "中間とりまとめは制度見直しの方向を示す段階であり、規律対象の具体的範囲、要件、違反効果、施行時期は今後の法令化・パブリックコメント後の検討を確認する必要がある。"
      ]
    };

    const issueUpdates = {
      "dt-chat-solicitation": {
        conclusion: "事業者側の働きかけ等を契機とした個別・双方向のテキストチャットについて、電話勧誘販売に近い不意打ち性・圧力を踏まえ、氏名・目的の明示、虚偽・不告知、威迫、再勧誘、クーリング・オフ等を参考にした規律が検討されている。",
        uncertain: "対象となるチャットの具体的要件や法形式は未確定で、パブリックコメント後の制度設計を追う必要がある。"
      },
      "dt-ui-steering": {
        conclusion: "ダークパターンを個別類型の網羅的禁止リストに固定するのではなく、消費者を誤認させ又は過度に圧迫して意思決定を歪めるインターフェースを包括的に捉える方向が示されている。",
        uncertain: "違反判断の具体的基準や、特定商取引法・景品表示法・消費者契約法等との役割分担は今後の検討事項である。"
      },
      "dt-cancellation-contract": {
        conclusion: "通信販売の最終確認画面では、総支払額や継続・解約等の重要条件を分断せず把握できる表示が重視され、契約成立後の電子的な契約内容提供やアップセル前後の比較可能性も見直し論点になっている。",
        uncertain: "表示義務の具体的な粒度、電子交付の要件、取消し等の効果は今後の制度化を確認する必要がある。"
      },
      "dt-platform": {
        conclusion: "デジタル取引の消費者保護は、販売事業者の表示・勧誘だけでなく、プラットフォームやインターフェースが取引判断へ与える影響も含めて検討されている。",
        uncertain: "プラットフォーム側に追加される具体的義務や既存法制との接続はなお検討段階である。"
      }
    };
    (digital.issues || []).forEach((issue) => {
      const update = issueUpdates[issue?.id];
      if (!update) return;
      issue.status = "pending";
      issue.stage = "draft";
      issue.conclusion = update.conclusion;
      issue.uncertain = update.uncertain;
      issue.sourceIds = appendUnique(without(issue.sourceIds, [oldDraft]), [finalSource, commentSource]);
    });
    digital.sourceIds = appendUnique(without(digital.sourceIds, [oldDraft]), [finalSource, commentSource]);
    digital.referenceArticleIds = appendUnique(digital.referenceArticleIds, ["article-caa-digital-tokusho-interim-final-2026"]);
  }

  const consumer = (window.TOPIC_DATA || []).find((item) => item?.slug === "consumer-contract-law-review-2026");
  if (consumer) {
    const finalSource = "source-caa-consumer-contract-interim-final-2026";
    const commentSource = "source-caa-consumer-contract-public-comment-2026";
    const oldDraft = "source-caa-consumer-contract-interim-draft-2026";
    consumer.lastUpdated = "2026-09-17";
    consumer.lastVerified = "2026-09-17";
    consumer.overview = [
      "消費者契約法検討会は2026年9月10日に中間取りまとめを公表し、消費者の判断能力・状況の脆弱性に着目した契約離脱、継続契約の解約妨害、更新・重要変更の通知、解約料、ECの定型約款などを今後の制度見直し課題として整理した。",
      "判断が適切にできない状態と深刻な不利益が重なる場合の新たな契約離脱手段については、対象場面を限定しつつ第三者の関与等も含めた濫用防止策が検討されているが、要件・効果はなお未確定である。",
      "サブスクリプション等の継続契約では、解約を不当に困難にする行為の禁止、合理的な解約手段、更新前通知、契約の重要変更の通知、消費者死亡時の取扱いなどを整備する方向が示され、適格消費者団体による差止めとの接続も検討されている。",
      "中間取りまとめは2026年9月16日から10月31日までパブリックコメントに付されている。解約料規律を含め複数案が残る論点があり、現時点では成立済みルールとして扱わない。"
    ];
    consumer.currentSummary = {
      facts: [
        "2026年9月10日に消費者契約法検討会の中間取りまとめが公表され、9月16日から10月31日まで意見募集に付されている。",
        "判断困難状態と深刻な不利益を組み合わせた新たな契約離脱の仕組み、継続契約の解約妨害、更新・重要変更通知、消費者死亡時の対応等が制度見直し候補として整理された。",
        "解約料については消費者契約法9条1号の『平均的な損害』をめぐり、立証負担や合理的な価格差の扱いなど複数のアプローチが残っている。",
        "EC利用規約については、民法の定型約款規律と消費者契約法の不当条項規制を重ねて検討する必要がある。"
      ],
      interpretations: [
        "脆弱性に着目した契約離脱は、属性だけで一律に取消し・解除を認める制度ではなく、契約時の判断困難性と結果の重大性を組み合わせて対象を絞る方向で検討されている。",
        "サブスクリプション対応では、契約締結時の表示だけでなく、解約手段の合理性、更新・条件変更の通知、死亡時の停止・精算までライフサイクル全体で設計する必要がある。",
        "EC規約の違約金・高額負担条項は、文言だけでなく、消費者が認識し得る表示位置・強調・取引額との均衡も民法・消費者契約法上の評価に関係し得る。"
      ],
      implications: [
        "継続契約・サブスクリプションについて、申込み導線と同程度に解約導線が合理的か、更新前・重要変更時の通知が機能しているかを点検する。",
        "違約金・キャンセル料について、損害算定根拠、通常価格との差、表示のタイミングと目立ち方を記録・説明できる状態にする。",
        "高齢者等の脆弱性が問題になり得る商材では、契約時の意思確認や第三者関与の運用を今後の制度化に備えて棚卸しする。"
      ],
      uncertain: [
        "中間取りまとめは法案・改正法ではなく、契約離脱の要件、解約料の立証構造、差止め対象、施行時期等は今後の制度設計とパブリックコメント結果を確認する必要がある。"
      ]
    };

    const issueUpdates = {
      "consumer-contract-vulnerability-release": {
        conclusion: "消費者が適切な判断をすることが困難な状態にあり、契約により深刻な不利益を受ける場合を念頭に、新たな契約離脱の仕組みを設ける方向が検討されている。第三者の関与等を含む濫用防止も論点である。",
        uncertain: "対象となる判断困難状態、結果の重大性、第三者関与、効果等の具体要件は未確定である。"
      },
      "consumer-contract-cancellation-obstruction": {
        conclusion: "継続契約について、解約を不当に困難にする行為の禁止、合理的な解約手段、更新前通知、重要な契約変更の通知、消費者死亡時の取扱い等を整備する方向が示されている。",
        uncertain: "義務対象となる契約類型、通知時期・方法、差止め対象となる行為の具体化は今後の検討事項である。"
      },
      "consumer-contract-cancellation-fees": {
        conclusion: "消費者契約法9条1号の解約料規律について、平均的損害の立証負担や合理的な価格差をどう扱うか複数の制度案が引き続き検討されている。",
        uncertain: "中間取りまとめでも単一案には確定しておらず、立証責任・推定規定・価格差の扱い等の最終制度は未定である。"
      },
      "consumer-contract-ec-standard-terms": {
        conclusion: "EC利用規約が民法上の定型約款に当たる場合、組入れと不当条項規制を確認し、消費者契約法10条等も重ねて評価する。高額な違約金等では、条項の内容だけでなく表示位置・強調・取引額との均衡も実務上重要になる。",
        uncertain: "個別条項の有効性は、契約内容、表示態様、消費者の認識可能性、負担の程度など具体的事情に左右される。"
      }
    };
    (consumer.issues || []).forEach((issue) => {
      const update = issueUpdates[issue?.id];
      if (!update) return;
      if (issue.id !== "consumer-contract-ec-standard-terms") {
        issue.status = "pending";
        issue.stage = "draft";
      }
      issue.conclusion = update.conclusion;
      issue.uncertain = update.uncertain;
      const extra = issue.id === "consumer-contract-ec-standard-terms" ? ["source-civil-code-current", "source-consumer-contract-act-current"] : [];
      issue.sourceIds = appendUnique(without(issue.sourceIds, [oldDraft]), [finalSource, commentSource, ...extra]);
    });
    consumer.sourceIds = appendUnique(without(consumer.sourceIds, [oldDraft]), [finalSource, commentSource, "source-civil-code-current", "source-consumer-contract-act-current"]);
    consumer.referenceArticleIds = appendUnique(consumer.referenceArticleIds, [
      "article-caa-consumer-contract-interim-final-2026",
      "article-tmi-ec-standard-terms-penalty-2026"
    ]);
  }
})();

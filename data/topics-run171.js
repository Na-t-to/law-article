(() => {
  const topicSlug = "child-sexual-violence-prevention-dbs";
  if ((window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) return;

  window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([{
    slug: topicSlug,
    title: "こども性暴力防止法／日本版DBS・施行準備",
    categories: ["労務"],
    summary: "2026年12月25日に施行されるこども性暴力防止法について、対象事業者・従事者、犯罪事実確認、情報管理、安全確保措置、民間教育保育等事業者の認定、人事労務上の対応を整理する。",
    lastUpdated: "2026-09-16",
    lastVerified: "2026-09-16",
    isNew: true,
    overview: [
      "こども性暴力防止法は2024年6月19日に成立、同月26日に公布され、施行期日政令により2026年12月25日に施行されます。",
      "学校設置者等には、対象となる教員等について犯罪事実確認を行い、児童対象性暴力等を防止するための安全確保措置や情報管理等を講ずることが求められます。民間教育保育等事業者は認定を受けることで同等の義務を負い、認定表示を利用できます。",
      "施行ガイドラインや2026年8月改訂の横断指針では、犯歴確認だけでなく、研修、相談体制、早期把握、情報管理、配置転換等を含む防止体制全体が重要とされています。",
      "犯罪事実確認の結果を受けた雇用上の措置は、こども性暴力防止法上の防止措置義務だけで当然に解雇等が有効になるものではなく、労働契約法その他の労働法制との整合も個別に検討する必要があります。"
    ],
    currentSummary: {
      facts: [
        "こども性暴力防止法は2026年12月25日に施行される。",
        "学校設置者等は、教員等を対象に犯罪事実確認を行い、児童対象性暴力等を防止するための安全確保措置、研修・周知、情報管理等を実施する必要がある。",
        "認定を受けた民間教育保育等事業者も、犯罪事実確認や安全確保措置等について法定事業者と同等の義務を負う。",
        "こども家庭庁は2026年1月9日に施行ガイドラインを策定し、2026年8月には教育・保育等事業者向けの横断指針を改訂した。"
      ],
      interpretations: [
        "実務対応は犯罪歴照会の手続だけでは完結せず、採用・配置、研修、相談、調査、情報アクセス、保存・廃棄、就業規則等を一つの防止体制として設計する必要がある。",
        "防止措置として雇用上の措置を検討する場合も、その措置が労働法上有効かは別途判断する必要がある。"
      ],
      implications: [
        "対象事業・対象従事者を洗い出し、法定事業者か認定対象事業者かを整理する。",
        "犯罪事実確認の申請・記録・アクセス権限・保存・廃棄を含む情報管理フローを設計する。",
        "採用時の確認事項、就業規則、配置転換・懲戒・解雇等の規程と防止措置の関係を人事労務と法務で点検する。",
        "相談窓口、研修、児童等への周知、事案把握後の対応ルールを施行前に整備する。"
      ],
      uncertain: [
        "個別の職種・業務が対象従事者に該当するか、具体的な安全確保措置として何が必要かは、業務実態とガイドラインに照らした個別判断が必要。",
        "犯罪事実確認の結果を受けた配置転換・内定取消・解雇等の有効性は、具体的な事実関係と労働法上の要件によって左右される。"
      ]
    },
    issues: [
      {
        id: "child-safety-dbs-scope-certification",
        title: "どの事業者・従事者が法対象となり、認定制度をどう使うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "学校設置者等は法定義務の対象であり、一定の民間教育保育等事業者は認定を受けることで犯罪事実確認・安全確保措置等の義務を負い、認定表示を利用できる。対象該当性は事業類型と従事業務に基づいて確認する。",
        exception: "認定対象となる民間事業者は自動的に法定義務の対象になるわけではなく、認定の有無を区別する。",
        uncertain: "複合事業や周辺業務の従事者については、具体的な業務内容に照らした確認が必要。",
        sourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109"]
      },
      {
        id: "child-safety-dbs-criminal-record-information",
        title: "犯罪事実確認と情報管理をどう設計するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "対象従事者について法定の犯罪事実確認を行うとともに、確認結果を含む機微な情報について、アクセス制御、目的外利用防止、適切な保管・廃棄等の管理を行う必要がある。",
        exception: "一般的な採用時の身元確認と法定の犯罪事実確認を同一視しない。",
        uncertain: "事業者ごとの権限設計や既存人事システムとの接続方法は、組織規模・業務フローに応じて設計する必要がある。",
        sourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109"]
      },
      {
        id: "child-safety-dbs-prevention-employment",
        title: "安全確保措置と雇用上の措置をどう接続するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "研修、相談体制、早期把握、配置上の対応等を含む安全確保措置を整備し、雇用上の措置を行う場合は、こども性暴力防止法上の義務と労働契約法等に基づく有効性判断を分けて検討する。",
        exception: "法上の防止措置義務があることだけで、内定取消、配置転換、懲戒、解雇等が当然に有効となるわけではない。",
        uncertain: "具体的な措置の選択と有効性は、確認結果、業務内容、代替配置の可能性、就業規則、採用時の説明等によって異なる。",
        sourceIds: ["source-cfa-child-sexual-violence-guideline-20260109", "source-cfa-child-safety-cross-guideline-20260821"]
      }
    ],
    sourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109", "source-cfa-child-safety-cross-guideline-20260821"],
    practicalImpacts: ["採用・配置", "犯罪事実確認", "個人情報・機微情報管理", "就業規則・懲戒", "研修・相談体制", "学校・保育・学習塾等の運営"]
  }]);
})();

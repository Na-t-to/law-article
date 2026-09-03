(() => {
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const electronic = topics.find((item) => item.slug === "electronic-contract");
  if (electronic) {
    electronic.lastUpdated = "2026-09-02";
    electronic.lastVerified = "2026-09-02";
    electronic.sourceIds = Array.from(new Set([...(electronic.sourceIds || []), "source-digital-sign-modernization-2025", "source-commercial-registry-remote-sign-2025"]));
    const identity = (electronic.issues || []).find((issue) => issue.id === "econtract-identity");
    if (identity) identity.sourceIds = Array.from(new Set([...(identity.sourceIds || []), "source-commercial-registry-remote-sign-2025", "source-digital-sign-modernization-2025"]));
    const log = (electronic.issues || []).find((issue) => issue.id === "econtract-log");
    if (log) log.sourceIds = Array.from(new Set([...(log.sourceIds || []), "source-digital-sign-modernization-2025", "source-commercial-registry-remote-sign-2025"]));
    if (electronic.currentSummary?.facts && !electronic.currentSummary.facts.some((item) => item.includes("リモート署名"))) {
      electronic.currentSummary.facts.push("商業登記電子証明書について、GビズIDと連携し署名鍵をクラウド上で管理するリモート署名方式が案内されており、法人代表者等の電子署名でも鍵管理・認可方法が更新されている。");
    }
    if (Array.isArray(electronic.practicalImpacts) && !electronic.practicalImpacts.includes("署名鍵・GビズIDの権限管理")) electronic.practicalImpacts.push("署名鍵・GビズIDの権限管理");
  }

  window.TOPIC_DATA = topics.concat([
    {
      slug: "generative-ai-ip-rights",
      title: "生成AIと知的財産・肖像／声",
      categories: ["AI・デジタル", "知的財産", "広告・表示"],
      summary: "生成AIの学習・生成・提供に伴う著作権、知財保護・透明性、肖像・声の無断利用を、文化庁・知的財産戦略本部・法務省の一次資料と実務解説から整理する。",
      lastUpdated: "2026-09-03",
      lastVerified: "2026-09-03",
      isNew: true,
      overview: [
        "生成AIの知財リスクは、学習データの利用、生成物の利用、サービス提供者の透明性、人物の肖像・声の利用で問題になる法的根拠が異なります。",
        "文化庁は著作権について学習段階と生成・利用段階を分け、2026年8月には政府が生成AI事業者向けの知財保護・透明性プリンシプル・コードを確定しました。",
        "同じ2026年8月には、法務省が肖像・声等の無断利用についてパブリシティ権等の民事責任に関する解釈指針を公表しています。",
        "このテーマでは、AI一般のガバナンスではなく、知財・人格的利益・コンテンツ利用に関する具体的な権利処理と対外説明を追います。"
      ],
      currentSummary: {
        facts: [
          "文化庁の『AIと著作権に関する考え方について』は、AI学習段階と生成・利用段階を分け、著作権法30条の4、類似性、依拠性等の考え方を整理している。",
          "2026年8月25日に確定したプリンシプル・コードは、生成AI開発者・提供者にAIモデル・学習データ等の情報開示と権利者・利用者からの照会対応を求め、コンプライ・オア・エクスプレインを採る。",
          "法務省は2026年8月7日、生成AIの普及等を背景として、肖像・声等の無断利用に関するパブリシティ権等の民事責任を現行法・判例法理から整理した報告書を公表した。"
        ],
        interpretations: [
          "『学習に使えるか』と『生成物を公開・販売できるか』は別の判断であり、同じ著作物についても段階ごとに確認する必要がある。",
          "生成AIサービス提供者は、知財侵害を避ける技術・運用だけでなく、モデルや学習データ、権利保護措置をどこまで外部へ説明するかが実務課題になる。",
          "人物の肖像・声を生成・利用する場合は、著作権の有無だけで審査を終えず、パブリシティ権その他の民事上の利益も確認する必要がある。"
        ],
        implications: [
          "AIサービスの提供・調達時に、学習データ、知財保護措置、権利者照会、利用者照会への対応を確認項目に含める。",
          "画像・音声生成を広告や商品へ利用する場合、既存著作物との類似性・依拠性と、人物の肖像・声の権利処理を別々に審査する。",
          "生成AI利用規程やコンテンツ審査フローで、参照画像・プロンプト・生成物・利用目的・権利確認の記録を残す。"
        ],
        uncertain: [
          "国内の生成AI著作権訴訟・裁判例の蓄積はなお限定的で、文化庁の考え方は個別事件の結論を直接決めるものではない。",
          "プリンシプル・コードの届出・運用実務や実効性は、適用開始後の事業者対応と政府のフォローアップを継続確認する必要がある。",
          "肖像・声の無断利用は事案の商業性、利用態様、本人の顧客吸引力等に左右され、個別案件の評価が必要になる。"
        ]
      },
      issues: [
        { id: "ai-ip-training-generation", title: "AI学習と生成・利用の著作権判断をどう分けるか", status: "interpreted", stage: "effective", views: [], conclusion: "学習段階では著作権法30条の4等の適用を確認し、生成・利用段階では既存著作物との類似性・依拠性等を別に評価する。", exception: "著作権者の利益を不当に害する場合など、権利制限規定が適用されない場面がある。", uncertain: "生成AI固有の国内裁判例の蓄積は限定的で、個別の学習・生成方法によって評価が変わる。", sourceIds: ["source-bunka-ai-copyright-2024"] },
        { id: "ai-ip-transparency", title: "生成AI事業者は何を開示するか", status: "authoritative", stage: "effective", views: [], conclusion: "プリンシプル・コードに沿い、モデル・学習データ・知財保護措置等について原則を実施するか、実施しない理由を説明する。", exception: "営業秘密、セキュリティその他の正当な非開示理由との調整が必要になる。", uncertain: "届出開始後の具体的な開示実務や業界水準は今後の運用を確認する。", sourceIds: ["source-ai-ip-principle-code-2026"] },
        { id: "ai-ip-rights-response", title: "権利者・利用者からの照会にどう対応するか", status: "authoritative", stage: "effective", views: [], conclusion: "生成AI事業者は、権利者やAI利用者からの知財・透明性に関する照会へ対応する仕組みを整え、説明可能性を確保する。", exception: "照会内容により、権利侵害の有無、秘密情報、第三者情報の扱いを個別に整理する必要がある。", uncertain: "回答範囲・速度・証拠保存などの実務慣行は運用開始後の蓄積を待つ部分がある。", sourceIds: ["source-ai-ip-principle-code-2026"] },
        { id: "ai-ip-publicity", title: "肖像・声を生成・利用するときの民事責任", status: "interpreted", stage: "effective", views: [], conclusion: "著作権だけでなく、肖像・声の利用態様や商業的価値等を踏まえてパブリシティ権等の民事上の利益侵害を検討する。", exception: "人物の著名性、利用目的、表現内容等により保護される利益と違法性判断が変わる。", uncertain: "生成AIによる具体的利用類型について裁判例が十分に蓄積しているわけではなく、個別事案の評価が必要。", sourceIds: ["source-moj-publicity-ai-2026"] }
      ],
      sourceIds: ["source-ai-ip-principle-code-2026", "source-moj-publicity-ai-2026", "source-bunka-ai-copyright-2024"],
      practicalImpacts: ["AIサービス提供方針・透明性開示", "AIベンダー選定・契約", "生成物の知財レビュー", "広告・コンテンツ審査", "肖像・音声の権利処理", "プロンプト・参照素材・生成履歴の記録"]
    }
  ]);
})();

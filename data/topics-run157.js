(() => {
  const topicSlug = "cyber-countermeasures-critical-infrastructure";
  const sourceId = "source-nco-critical-infrastructure-safety-guideline-2026";
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (!topic) return;

  topic.lastUpdated = "2026-09-15";
  topic.lastVerified = "2026-09-15";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "国家サイバー統括室は2026年9月11日、重要インフラ所管省庁等が安全基準等の策定に当たって参照するための『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を策定した。重要インフラ統一基準と同じ2026年10月1日に施行予定である。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "重要インフラ統一基準から各分野の安全基準等へ具体化する際の共通参照文書は、2026年9月11日の安全基準等策定ガイドライン確定により、案段階から最終版へ移った。企業は統一基準だけでなく、自社分野の所管省庁・業界団体がこのガイドラインを踏まえて安全基準等をどう改定するかを追う必要がある。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "2026年10月1日の施行に向け、安全基準等策定ガイドラインの最終版を基準に、自社分野の強制基準・推奨基準・業界ガイドライン・内規の改定状況を確認する。"
  );
  topic.currentSummary.uncertain = (topic.currentSummary.uncertain || []).filter(
    (text) => !String(text).includes("安全基準等策定ガイドラインは2026年8月5日公表の案")
  );
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "安全基準等策定ガイドライン自体は2026年9月11日に確定したが、各重要インフラ分野の安全基準等へどのように反映されるかは所管省庁・業界団体ごとに確認が必要である。"
  );

  const issue = (topic.issues || []).find((item) => item && item.id === "cyber-critical-infrastructure-unified-standard");
  if (issue) {
    issue.conclusion = "重要インフラ統一基準は、2025年改正サイバーセキュリティ基本法に基づき、重要インフラ事業者等が分野・事業者横断的に実施すべき対策を促進する政府機関の施策に関する統一基準である。2026年9月11日には、所管省庁等が安全基準等を策定する際に参照する安全基準等策定ガイドラインも確定し、両文書は2026年10月1日に施行予定である。";
    issue.exception = "統一基準・安全基準等策定ガイドラインを、サイバー対処能力強化法の届出・インシデント報告等の直接的な法定義務や、すべての重要インフラ事業者へ一律に罰則付き義務を課す文書と同一視しない。";
    issue.uncertain = "ガイドラインは最終化されたが、各所管省庁・業界団体が整備する分野別の安全基準等への具体的な反映内容は継続確認が必要である。";
    issue.sourceIds = addUnique(issue.sourceIds, sourceId);
  }
})();

(() => {
  const topicSlug = "market-manipulation-trading-controls";
  if ((window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) return;

  window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
    {
      slug: topicSlug,
      title: "相場操縦・不公正取引／売買管理",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      summary: "金融商品取引法159条の相場操縦規制について、対当売買・見せ玉・買上がり・終値形成、誘引目的の判断、売買審査・内部管理、2026年金商法改正による高速取引の課徴金算定見直しを整理する。",
      lastUpdated: "2026-09-16",
      lastVerified: "2026-09-16",
      isNew: true,
      overview: [
        "相場操縦規制は、単に『不自然な注文を出したか』だけでなく、取引を活発に見せたり相場を人為的に変動させたりして他の投資者を売買へ誘引する目的、注文・約定の態様、前後の事情等を踏まえて評価されます。",
        "日本取引所自主規制法人は、対当売買、見せ玉、寄付き・終値への関与など不公正取引につながるおそれのある注文・売買を売買審査システムで抽出し、疑わしい取引を証券取引等監視委員会へ報告しています。",
        "2026年9月15日のエコミック株式の事案では、自己の買い注文に売り注文を対当させる行為、成行・高指値による買上がり、買い注文の重層的発注を組み合わせた10取引日の一連売買について課徴金納付命令の勧告が行われました。",
        "2026年金商法改正では、有価証券の不公正取引規制等の見直しの一環として、高速取引行為者による相場操縦の課徴金算定を実態に合わせて執行しやすくする見直しが盛り込まれていますが、当該部分は施行前です。"
      ],
      currentSummary: {
        facts: [
          "金融商品取引法159条は、誘引目的を伴う一連の売買等による相場操縦や、取引状況について他の投資者に誤解を生じさせる目的で行う仮装売買・馴合売買等を禁止している。",
          "日本取引所自主規制法人は、株価・売買高の急変や情報提供等を端緒に日々売買審査を行い、不公正と疑われる取引を証券取引等監視委員会へ報告している。",
          "2026年9月15日のエコミック株式の課徴金勧告では、2024年5月30日から6月12日までの10取引日に、対当売買、買上がり、重層的な買い注文等を行った一連の取引が金商法159条2項1号違反と認定され、課徴金76万円が勧告された。",
          "2026年7月に成立・公布された金商法等改正には、高速取引行為者による相場操縦等について課徴金算定・執行を見直す規定が含まれるが、2026年9月16日時点では当該改正部分は施行前である。"
        ],
        interpretations: [
          "売買管理では、自己対当、約定意思の乏しい大量注文・取消し、直前約定値を上回る反復的な買付け、寄付き・終値付近への注文集中などを単独で機械判定するのではなく、数量、価格、時間帯、約定・取消しの推移、保有ポジション、執行目的を組み合わせて確認する必要がある。",
          "2025年6月27日の東京地裁判決を扱う三浦法律事務所の解説によれば、実際の売買需要が存在し、行為者にとって合理的な執行方法であったとしても、それだけで誘引目的が否定されるわけではなく、取引態様、前後事情、動機・認識等を総合して判断される。",
          "市場監視は取引所自主規制法人と証券監視委の情報連携を前提にしているため、社内では単一注文だけでなく、複数日・複数注文・関連口座を通じた一連のパターンを追える記録と調査手順を持つ方が実務的である。"
        ],
        implications: [
          "自己売買、ヘッジ、指数リバランス、自己株式・持株処分その他の大口執行では、発注の必要性、数量根拠、時間帯、価格条件、マーケット・インパクト抑制策を事前・事後に説明できるよう記録する。",
          "売買監視アラートでは、自己対当、短時間の反復的な成行・高指値、板への重層注文と取消し、寄付き・終値形成への過度な関与などを組み合わせてレビューする。",
          "社内調査では、アラート対象注文だけでなく前後のポジション構築、関連する注文・取消し、担当者の認識、当時の社内ルール・市場慣行まで含めて証跡を保全する。"
        ],
        uncertain: [
          "相場操縦の成否は個別の取引目的・態様・市場状況に依存するため、対当売買や大口注文など特定の外形だけから違反を一律に判定しない。",
          "2026年改正の有価証券に関する不公正取引規制等については、具体的な政令指定施行日と下位法令・運用の最終形を継続確認する必要がある。"
        ]
      },
      issues: [
        {
          id: "market-manipulation-prohibited-patterns",
          title: "対当売買・見せ玉・買上がり等をどう識別するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "対当売買、見せ玉、反復的な買上がり、寄付き・終値への作為的な関与などは、取引を活発に見せたり相場を人為的に動かしたりする態様として売買審査上の重要な着眼点となる。個々の注文だけでなく、一連の売買・委託を通じた効果と目的を確認する。",
          exception: "対当売買、大口注文、成行注文、高指値、注文取消し等の外形だけで直ちに違反となるわけではない。正当な取引目的・市場状況・注文態様を含め個別に評価する。",
          uncertain: "アルゴリズム執行など注文数が多い取引では、どの範囲を一連の取引として評価するかが事案ごとに異なり得る。",
          sourceIds: ["source-jpx-market-manipulation-guide", "source-sesc-unfair-trading-casebook-2026", "source-sesc-ecomic-market-manipulation-2026"]
        },
        {
          id: "market-manipulation-inducement-purpose",
          title: "正当な取引需要・合理的な執行でも誘引目的は否定されるか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "2025年6月27日の東京地裁判決を扱う実務解説では、現実の売買需要や行為者にとっての経済合理性があっても誘引目的とは併存し得ると整理されている。取引の時期・数量・価格・方法、前後の事情、動機、ガイドラインや市場への影響に関する認識等を総合して検討する。",
          exception: "この整理は個別事件の地裁判決を法律事務所が解説したものであり、あらゆる実需取引に同じ結論を機械的に当てはめるものではない。個別事案では判決・行政処分の原資料と事実関係を確認する。",
          uncertain: "2025年判決の今後の上級審での扱いや、異なる市場・執行手法への射程は継続確認が必要である。",
          sourceIds: ["source-fsa-nitto-market-manipulation-order-2018", "source-miura-closing-price-market-manipulation-2025", "source-jpx-market-manipulation-guide"]
        },
        {
          id: "market-manipulation-surveillance-response",
          title: "売買審査・アラート・調査対応をどう設計するか",
          status: "interpreted",
          stage: "effective",
          views: [],
          conclusion: "自己対当、重層注文・取消し、反復的な買上がり、寄付き・終値付近への注文集中等をアラート候補とし、ポジション、執行目的、関連注文、複数日の取引を含めてレビューする。疑義発生時に発注根拠・承認・ログ・担当者認識を再現できる証跡管理を組み込む。",
          exception: "取引所の売買審査例は不公正取引につながるおそれのある形態を示すものであり、アラート発生自体を法令違反認定と同一視しない。",
          uncertain: "適切な閾値や監視期間は流動性、商品、執行手法、顧客・自己取引の別によって異なるため、自社データで継続調整する必要がある。",
          sourceIds: ["source-jpx-market-manipulation-guide", "source-sesc-unfair-trading-casebook-2026", "source-sesc-ecomic-market-manipulation-2026", "source-miura-closing-price-market-manipulation-2025"]
        },
        {
          id: "market-manipulation-hft-surcharge-2026",
          title: "2026年金商法改正で高速取引の課徴金算定はどう変わるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "2026年金商法等改正では、有価証券の不公正取引規制等の見直しの一環として、高速取引行為者による相場操縦等について課徴金算定を実態に即して行えるよう制度が見直された。改正規定は成立・公布済みだが、この論点の施行前後を区別して管理する。",
          exception: "施行前の行為に改正後の課徴金算定を遡及適用するものではなく、現行事件は行為時点の法令で評価する。",
          uncertain: "具体的な政令指定施行日と施行後の算定・執行実務は、下位法令・監視委の公表資料を継続確認する。",
          sourceIds: ["source-fsa-fiea-law-2026", "source-fsa-fiea-unfair-trading-explanation-2026"]
        }
      ],
      sourceIds: [
        "source-jpx-market-manipulation-guide",
        "source-sesc-unfair-trading-casebook-2026",
        "source-sesc-ecomic-market-manipulation-2026",
        "source-fsa-nitto-market-manipulation-order-2018",
        "source-miura-closing-price-market-manipulation-2025",
        "source-fsa-fiea-law-2026",
        "source-fsa-fiea-unfair-trading-explanation-2026"
      ],
      practicalImpacts: [
        "自己売買・ヘッジ・指数連動取引・大口執行を扱う部門は、発注目的、必要数量、執行時間、価格条件、マーケット・インパクト低減策を事前ルールと事後レビューの双方に落とす。",
        "コンプライアンス部門は、自己対当、見せ玉に類する大量注文・取消し、買上がり、寄付き・終値への注文集中について、単発注文ではなく一連取引として追えるアラートと調査導線を整備する。",
        "アラート後の調査では、注文・約定ログだけでなく、ポジション、関連口座、社内チャット・指示、執行アルゴリズムの設定、承認記録を保全し、取引目的と担当者認識を再現できる状態にする。",
        "2026年改正の高速取引に関する課徴金算定は施行日確定後に売買管理・制裁リスク評価へ反映し、現行規制と施行前の改正規定を混同しない。"
      ]
    }
  ]);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "securities-monitoring-2026");
  if (!topic) return;

  const issueId = "secm-public-fund-liquidity-2027";
  const sourceId = "source-fsa-public-fund-liquidity-guideline-20260916";
  const articleId = "article-fsa-public-fund-liquidity-guideline-20260916";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.summary = "証券取引等監視委員会の令和8事務年度証券モニタリング基本方針と前年度の事例集に加え、2027年10月から適用される公募投資信託の流動性リスク管理に関する監督指針改正を基礎に、顧客本位・適合性、サイバー・システムリスク、AML/CFT、業容変更・新商品、引受審査、利益相反、投資運用業の流動性リスク管理を追う。";

  topic.overview = appendTextUnique(
    topic.overview,
    "金融庁は2026年9月16日、IOSCOが2025年5月に公表した集団投資スキームの流動性リスク管理に関する勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すため、金融商品取引業者等向けの総合的な監督指針を改正した。改正後の監督指針は2027年10月1日から適用される。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "金融庁は2026年9月16日、公募投資信託の流動性リスク管理に関する監督指針改正を最終化し、2027年10月1日から適用すると公表した。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "今回の改正は、公募投資信託の流動性リスク管理を監督上の評価・モニタリングへ明確に組み込むものである。監督指針上の着眼点と、個別ファンドで採るべき具体的な管理手段を同一視せず、確定した監督指針、自主規制、商品設計・社内規程を分けて実装する必要がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "投資運用会社は2027年10月1日の適用に向け、公募投資信託の商品設計・解約条件・流動性リスク管理態勢・モニタリングを棚卸しし、監督指針の確定内容とのギャップを計画的に解消する。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "公募投資信託の流動性リスク管理を2027年10月適用へどう準備するか",
      status: "interpreted",
      stage: "enacted",
      views: [],
      conclusion: "金融庁はIOSCO勧告等を踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促す監督指針改正を最終化した。2027年10月1日の適用に向け、商品ごとの流動性リスク管理態勢と商品設計・解約条件等を確定した監督指針に照らして点検する。",
      exception: "監督指針は監督上の評価・着眼点を示すものであり、すべての公募投資信託について一つの管理手段を機械的に義務付けるものとして扱わない。具体的な対応はファンド特性、確定した自主規制・社内規程等と併せて確認する。",
      uncertain: "適用開始までの自主規制・実務運用の細部や各社の商品別対応は更新され得るため、2027年10月まで継続的な確認が必要である。",
      sourceIds: [sourceId]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "公募投資信託の流動性リスク管理・2027年10月適用準備"
  ]);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "digital-commerce-tokusho-review");
  if (!topic) return;

  const sourceId = "source-caa-pionet-door-to-door-analysis-20260917";
  const issueId = "dt-ad-triggered-visit-sales";
  const articleId = "article-caa-pionet-door-to-door-analysis-20260917";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.summary = "SNS・チャット勧誘、UIによる意思決定への働きかけ、契約内容の確認・保存、プラットフォームの役割に加え、ネット広告を起点に消費者が訪問を依頼する取引や解約妨害の実態など、デジタル化で変化する取引導線を踏まえた特定商取引法等の見直しを、法制化前の検討段階から追う。";
  topic.overview = appendTextUnique(
    topic.overview,
    "消費者庁は2026年9月17日、PIO-NETの相談データを用いた訪問販売等の分析調査報告書を公表した。2015年度から2024年度にかけて、インターネット広告を見た消費者が事業者の訪問を依頼した相談の割合が大きく増えており、デジタル広告と対面取引を別々に見るだけでは捉えにくいトラブル構造が示されている。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "消費者庁の2026年9月17日PIO-NET分析では、訪問販売に関する相談のうちインターネット広告を見て来訪を要請した類型が2015年度4.1%から2024年度36.3%へ増加し、2024年度の当該類型では価格トラブル70.3%、勧誘手法31.5%、契約書面30.9%が確認された。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "ネット広告を見た消費者が自ら訪問を依頼したという形式だけで取引リスクを低く評価せず、広告表示、訪問依頼、現地見積り・勧誘、契約書面、解約までを一つの顧客導線として法務レビューする必要性が高まっている。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "住宅設備・修理等の訪問型サービスでは、ネット広告の価格表示から訪問時の見積り・追加提案、契約書面、クーリング・オフ・解約対応までのログと説明内容を横断して点検する。"
  );
  topic.currentSummary.uncertain = appendTextUnique(
    topic.currentSummary.uncertain,
    "PIO-NET分析は制度検討の基礎資料であり、それ自体が新たな禁止行為・表示義務・解約権を創設するものではない。調査で示された実態が最終的にどの法令・ガイドラインへ反映されるかは今後の検討を確認する必要がある。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "ネット広告から訪問依頼へ移る取引を、表示・訪問販売・解約規律でどう捉えるか",
      status: "pending",
      stage: "draft",
      views: [],
      conclusion: "ネット広告を起点に消費者が訪問を依頼する取引が増えており、広告上の価格・条件、訪問時の勧誘・見積り、契約書面、解約対応を分断せず一連の取引導線として検証する。消費者庁のPIO-NET分析は、この類型に価格・勧誘・書面トラブルが集中していることを示す基礎資料となる。",
      exception: "消費者から訪問を依頼した取引が一律に同じ法的評価になるわけではない。特定商取引法上の適用関係・除外、広告表示の評価、クーリング・オフ等は具体的な接触・勧誘・契約経緯に即して確認する。",
      uncertain: "2026年9月時点では制度見直しの検討段階であり、ネット広告起点の訪問依頼を対象とする新たな規律の範囲・要件・効果は確定していない。",
      sourceIds: [sourceId, "source-caa-digital-scta-interim-20260910"]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [
    "source-caa-digital-scta-interim-20260910",
    "source-egov-digital-scta-interim-comment-20260916",
    sourceId
  ]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [
    "article-caa-digital-scta-interim-20260910",
    "article-spring-dark-pattern-ui-20260909",
    articleId
  ]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "ネット広告から訪問見積り・契約・解約までの導線監査"
  ]);
})();

(() => {
  const additions = [
    {
      slug: "supply-chain-security-scs-2026",
      title: "SCS評価制度／サプライチェーン・サイバーセキュリティと取引先管理",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "独占禁止法・下請・フリーランス", "危機管理・コンプライアンス"],
      summary: "経済産業省・国家サイバー統括室のSCS評価制度と、公正取引委員会・経済産業省が示す取適法・独占禁止法上の取引適正化を一つの棚で追い、取引先へ求めるセキュリティ水準の設計、評価・証跡、費用負担、価格交渉、契約・調達運用を整理する。",
      lastUpdated: "2026-09-18",
      lastVerified: "2026-09-18",
      isNew: true,
      overview: [
        "経済産業省と内閣官房国家サイバー統括室は2026年3月27日、SCS（Supply Chain Security）評価制度の制度構築方針を公表した。取引先ごとに異なるセキュリティ要求の負担を抑えつつ、共通基準で対策状況を可視化し、サプライチェーン全体の水準を底上げすることが狙いである。",
        "SCS評価制度は法令上の取得義務を課す規制ではなく任意の制度である。★3・★4は2026年度末頃の申請受付開始を目指しており、具体的な開始時期や提出様式等は制度運営基盤の整備状況に応じて具体化される。★5は今後さらに設計される。",
        "IPAが制度を運営し、★3はセキュリティ専門家の確認を経た自己評価、★4は評価機関による第三者評価と技術検証を基本とする。発注側は取引先の役割・リスクに応じて必要な段階を検討し、受注側は要求事項への適合状況を示すことが想定されている。",
        "セキュリティ対策の要請が合理的な必要性を欠く、対策コストを踏まえた価格協議をしない、合理的範囲を超える費用負担を求める、特定製品・サービスを不当に強制するといった場合は、取適法や独占禁止法上の問題が生じ得る。セキュリティ強化と取引適正化を同じ調達プロセスで設計する必要がある。"
      ],
      currentSummary: {
        facts: [
          "SCS評価制度は、サプライチェーンを構成する企業のセキュリティ対策状況を共通基準で評価・可視化する任意制度であり、制度自体が★取得を法令上義務付けるものではない。",
          "★3・★4は2026年度末頃の制度開始を目指しているが、制度運営基盤の整備状況等により時期が変わる可能性がある。★5は2026年度以降も要求事項・評価基準・評価スキームの具体化が続く。",
          "IPAの制度設計では、★3は専門家確認付き自己評価、★4は第三者評価と技術検証を採用し、上位段階は下位段階の要求事項を包含するが、★3取得を★4取得の前提とはしていない。",
          "公正取引委員会・経済産業省は、発注側が取引先へ組織的なサイバーセキュリティ対策を求める場面について、価格交渉・費用負担を含む想定事例を示し、独占禁止法・取適法との関係を整理している。"
        ],
        interpretations: [
          "公的制度としては任意でも、個別の取引契約や調達基準でSCSの段階が要求されれば、当事者間では実質的な取引条件になり得る。したがって『法令上の義務』と『契約上の要求』を分けて説明・運用することが重要である。",
          "SCSの段階をそのまま全取引先へ一律要求するのではなく、アクセスする情報・システム、事業継続への影響、取引先の役割等に応じて要求水準を決め、必要性を説明できるようにすることが、セキュリティと取引適正化の双方に資する。"
        ],
        implications: [
          "委託先・取引先をリスクと役割で層別化し、既存のセキュリティチェックシートや監査項目をSCSの★3・★4要求事項とマッピングする。",
          "契約・調達条件では、要求する水準、評価・証跡、再評価、改善計画、インシデント報告、再委託、費用負担、価格協議、条件変更時の扱いを一体で設計する。",
          "情報セキュリティ部門だけでなく、調達・法務・事業部門が、要求の合理的必要性と取引先の追加コストを確認し、価格協議や記録保存まで含む運用フローを整える。"
        ],
        uncertain: [
          "★3・★4の制度開始日は2026年度末頃という目標であり、具体的な申請受付日・提出様式・運用細目は今後の公表を確認する必要がある。",
          "★5の要求事項・評価基準・評価スキームは今後さらに具体化されるため、現時点の★3・★4と同じ確定度で扱わない。"
        ]
      },
      issues: [
        {
          id: "scs-scheme-status-2026",
          title: "SCS評価制度は何を義務付け、いつ始まるのか",
          status: "authoritative",
          stage: "under_revision",
          views: [],
          conclusion: "SCS評価制度は、取引先のセキュリティ対策状況を共通基準で可視化する任意制度である。★3・★4は2026年度末頃の申請受付開始を目指しているが、具体的な開始時期等は制度運営基盤の整備に応じて今後確定する。",
          exception: "制度自体は★取得を法令上強制するものではない一方、取引当事者が契約・調達条件として特定の水準を合意することはあり得る。『未取得なら法律上取引できない』という制度ではない。",
          uncertain: "具体的な申請日、提出様式、運用細目、★5の設計は引き続き具体化される。",
          sourceIds: ["source-meti-scs-policy-20260327", "source-meti-scs-portal-20260706", "source-ipa-scs-details-20260421"]
        },
        {
          id: "scs-star3-star4-evaluation",
          title: "★3・★4の評価を取引先管理へどう組み込むか",
          status: "authoritative",
          stage: "under_revision",
          views: [],
          conclusion: "★3はセキュリティ専門家の確認を経た自己評価、★4は評価機関による第三者評価と技術検証を基本とする。発注側は取引先の役割・リスクに応じた水準を検討し、既存の質問票・監査・契約上の確認事項との重複や不足を整理する。",
          exception: "上位段階は下位段階の要求事項を包含するが、★3を先に取得しなければ★4を取得できない制度ではない。また、全取引先に同一の段階を要求することが制度上予定されているわけでもない。",
          uncertain: "評価ガイド、各種様式、評価機関等の運用詳細は更新され得るため、制度開始前にIPAの最新公表を確認する。",
          sourceIds: ["source-meti-scs-policy-20260327", "source-ipa-scs-details-20260421"]
        },
        {
          id: "scs-procurement-contract-implementation",
          title: "SCSを調達・契約条件へ落とすとき何を定めるか",
          status: "interpreted",
          stage: "under_revision",
          views: [],
          conclusion: "SCSを要求水準の共通言語として使いつつ、対象となる取引・システム・情報の範囲、要求する段階、評価結果の提示、改善・再評価、インシデント報告、再委託、費用負担、価格協議を契約・調達手続で具体化する。要求の必要性と合理性を説明できる設計にする。",
          exception: "SCSは任意制度であり、★取得要求だけで自社の委託先監督や契約上の情報管理義務が自動的に充足されるわけではない。逆に、制度水準を超える対策を求める場合も、個別リスクに基づく合理的な理由があれば直ちに不適切とは限らない。",
          uncertain: "制度開始後の市場慣行、取引類型ごとの標準的な要求水準、証跡・更新頻度等は今後形成される。",
          sourceIds: ["source-meti-scs-policy-20260327", "source-ipa-scs-details-20260421", "source-jftc-cyber-partnership-20251226"]
        },
        {
          id: "scs-competition-transaction-law",
          title: "取引先へのセキュリティ要求と取適法・独占禁止法をどう両立するか",
          status: "authoritative",
          stage: "effective",
          views: [],
          conclusion: "発注側が組織的なサイバーセキュリティ対策を取引先へ求める場合、合理的な必要性を示し、必要な説明・協議を行い、追加コストについて価格交渉に適切に応じる。合理的必要性のない対策強制、協議を欠く一方的な代金決定、合理的範囲を超える費用負担、不要な特定製品・サービスの利用強制は取適法・独占禁止法上問題となり得る。",
          exception: "SCSに基づく対策であれば個別取引のあらゆる要求が当然に適法になるわけではない。取引上の地位、対象取引、要求内容、必要性、費用・価格協議の経緯等を具体的に確認する。",
          uncertain: "個別の取引が取適法の適用対象となるか、独占禁止法上の優越的地位が認められるか等は具体的な当事者・取引関係による。",
          sourceIds: ["source-jftc-cyber-partnership-20251226", "source-meti-scs-policy-20260327"]
        }
      ],
      sourceIds: [
        "source-meti-scs-policy-20260327",
        "source-meti-scs-portal-20260706",
        "source-ipa-scs-details-20260421",
        "source-jftc-cyber-partnership-20251226"
      ],
      referenceArticleIds: [
        "article-meti-scs-policy-20260327",
        "article-ipa-scs-details-20260421",
        "article-jftc-cyber-partnership-20251226",
        "article-unitis-ushijima-scs-contract-20260421"
      ],
      practicalImpacts: [
        "取引先のリスク層別化と★3・★4要求水準の設計",
        "セキュリティ質問票・監査・契約条項とSCS要求事項のマッピング",
        "取引先の対策コストを踏まえた価格協議・費用負担・記録保存",
        "調達・法務・情報セキュリティの横断運用"
      ]
    }
  ];

  const existing = new Set((window.TOPIC_DATA || []).map((item) => item && item.slug));
  const fresh = additions.filter((item) => !existing.has(item.slug));
  if (fresh.length) window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(fresh);
})();

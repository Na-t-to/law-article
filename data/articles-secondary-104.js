(() => {
  const topicSlug = "patent-system-review-network-infringement-2026";
  const source56Id = "source-jpo-patent-subcommittee-56-2026";
  const source57Id = "source-jpo-patent-subcommittee-57-2026";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: source56Id,
      title: "第56回特許制度小委員会 議事次第・配布資料一覧（資料1 特許制度に関する検討課題について）",
      type: "guidance",
      typeLabel: "一次資料・特許庁／特許制度小委員会",
      authority: "特許庁",
      publishedAt: "2026-06-12",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/56-shiryou.html",
      importance: "最高",
      whyImportant: "2026年6月16日の第56回特許制度小委員会で、越境するネットワーク関連発明、AIと特許制度、侵害抑止を検討した公式資料。越境行為の『考え方の整理』と、悪質侵害・損害賠償等の制度検討の出発点を確認できる。",
      topics: [topicSlug]
    },
    {
      id: source57Id,
      title: "第57回特許制度小委員会 資料1 特許制度に関する検討課題について",
      type: "guidance",
      typeLabel: "一次資料・特許庁／特許制度小委員会",
      authority: "特許庁",
      publishedAt: "2026-08-20",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/document/57-shiryou/01.pdf",
      importance: "最高",
      whyImportant: "第57回特許制度小委員会で、越境するネットワーク関連発明の『考え方の整理』の構成案と、悪質な特許侵害に対する民事救済・証拠収集の在り方をさらに具体化した公式資料。現時点では法改正の確定資料ではなく検討段階の基礎資料として読む必要がある。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "特許制度見直し・越境ネットワーク発明／侵害抑止（2026）",
      categories: ["知的財産"],
      summary: "国境をまたぐクラウド・ネットワーク型発明の侵害判断と、悪質な特許侵害に対する民事救済・証拠収集の強化について、2026年の特許制度小委員会の検討状況を追う。現時点で法改正は確定していない。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "クラウドや分散システムでは、発明の構成要素や処理が国内外に分かれ、特許法上の『実施』をどこで行ったと評価するかが権利行使とサービス設計の双方に影響する。",
        "特許制度小委員会は、拙速に条文改正へ進むのではなく、実質的に国内の実施行為と認められるかを判断する際の要素を、被疑侵害行為の類型と海外事例を使って『考え方の整理』として示す方向で検討している。",
        "同時に、侵害者に利益が残り得るとの問題意識から、悪質な侵害への民事救済、損害額推定の覆滅、証拠収集手続等も検討されているが、具体的な法改正内容はまだ確定していない。"
      ],
      currentSummary: {
        facts: [
          "2026年6月16日の第56回特許制度小委員会では、国際的な事業活動におけるネットワーク関連発明等の適切な権利保護、AI技術を踏まえた特許制度、知的財産の侵害抑止が議題となった。",
          "ネットワーク関連発明については、被疑侵害行為を類型化し、実質的に国内の実施行為と認められるかの判断要素や海外事例を示す『考え方の整理』を作成・公表する方向で検討が進められている。",
          "2026年8月20日の第57回特許制度小委員会では、『考え方の整理』のドラフトに向けた構成案と、特許侵害における民事救済・証拠収集手続の在り方が引き続き議論された。",
          "侵害抑止では、令和元年以降の判決について、支払を命じられた損害賠償額の総額約56億円に対し、損害額推定の覆滅が認められた利益額の総額約144億円との分析が委員会資料で示され、悪質侵害に対する救済強化の要否が検討されている。"
        ],
        interpretations: [
          "越境ネットワーク発明は、サーバ所在地だけで機械的に結論を出すのではなく、被疑侵害行為の類型、国内利用との実質的な結び付き、各構成要素の役割等を踏まえた予測可能な判断枠組みを示そうとしている段階と読める。",
          "侵害抑止の議論は、単に損害賠償額を一律に引き上げる方向で確定したものではなく、何を『悪質な侵害』とみるか、現行102条の推定・覆滅との関係、諸外国制度、証拠収集を含む民事救済全体を再検討している段階である。"
        ],
        implications: [
          "クラウド・SaaS・分散処理を含む発明では、出願・クレーム設計時に国内外の処理分担を可視化し、権利行使時にどの行為を国内実施として主張するかを検討できるようにする。",
          "他社特許のクリアランスでは、国内サーバの有無だけでなく、国内ユーザーへのサービス提供や複数主体の行為がどう組み合わさるかまで確認する。",
          "特許侵害紛争では、侵害者利益、推定覆滅事由、悪質性を示す事情、証拠の所在を早期に整理し、制度改正の進展に応じて訴訟・交渉戦略を見直す。"
        ],
        uncertain: [
          "ネットワーク関連発明の『考え方の整理』はまだ作成過程であり、最終的な判断要素・類型・法的な位置付けは確定していない。",
          "悪質な侵害への追加的な民事救済や利益吐き出し型の制度を含む特許法改正を行うか、行う場合の要件・効果は未確定である。"
        ]
      },
      issues: [
        {
          id: "patent-cross-border-network-invention",
          title: "国境をまたぐネットワーク関連発明を国内の特許侵害としてどう評価するか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "特許庁は、被疑侵害行為の類型と海外事例を整理し、実質的に国内の実施行為と認められるかの判断で考慮され得る要素を『考え方の整理』として示す方向で検討している。現時点で新たな法定要件が確定したわけではない。",
          exception: "具体的な侵害成否は、クレーム構成、国内外の処理・主体、サービス提供形態等の個別事情と現行法・裁判例に基づいて判断する必要がある。",
          uncertain: "『考え方の整理』の最終文言、類型、裁判実務での位置付け、将来的に法改正へ進むかは引き続き検討対象。",
          sourceIds: [source56Id, source57Id]
        },
        {
          id: "patent-malicious-infringement-remedies",
          title: "悪質な特許侵害に対する民事救済を強化するか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "特許制度小委員会では、侵害者に利益が残り得るとの問題意識を踏まえ、悪質な侵害への民事救済、損害額推定の覆滅、諸外国の金銭的救済制度等を検討しているが、具体的な法改正方針はまだ確定していない。",
          exception: "現時点の損害賠償請求は現行特許法102条等を前提に判断され、将来の制度案を先取りして請求範囲・法的効果を確定することはできない。",
          uncertain: "『悪質』の定義、追加救済の種類、現行の損害推定制度との関係、立証要件・上限等は未確定。",
          sourceIds: [source56Id, source57Id]
        },
        {
          id: "patent-infringement-evidence-collection",
          title: "特許侵害訴訟の証拠収集手続を見直すか",
          status: "pending",
          stage: "under_revision",
          views: [],
          conclusion: "第57回特許制度小委員会では、侵害抑止の検討の一部として証拠収集手続の在り方も論点化されている。現時点では具体的な改正内容は確定していない。",
          exception: "現行事件では現行の査証制度、文書提出命令その他の手続を前提に証拠収集を設計する。",
          uncertain: "既存制度の運用改善にとどまるか、法改正を伴う手続強化へ進むか、対象・要件をどう設計するかは今後の審議による。",
          sourceIds: [source57Id]
        }
      ],
      sourceIds: [source56Id, source57Id],
      practicalImpacts: ["クラウド・SaaS・分散システムの特許出願／クレーム設計", "越境サービスのFTO・クリアランス調査", "特許侵害警告・訴訟戦略", "損害額・侵害者利益の立証", "証拠保全・証拠収集", "知財部と事業部のサービス設計レビュー"]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-jpo-patent-subcommittee-56-2026",
      title: "第56回特許制度小委員会 議事次第・配布資料一覧",
      publisher: "特許庁",
      author: "産業構造審議会 知的財産分科会 特許制度小委員会",
      publishedAt: "2026-06-12",
      collectedAt: "2026-09-12",
      url: "https://www.jpo.go.jp/resources/shingikai/sangyo-kouzou/shousai/tokkyo_shoi/56-shiryou.html",
      sourceType: "primary",
      sourceLabel: "一次資料・特許制度見直し／委員会資料",
      status: "adopted",
      summary: "越境するネットワーク関連発明、AIと特許制度、侵害抑止を議題とした第56回特許制度小委員会の公式資料。ネットワーク関連発明では『考え方の整理』のための被疑侵害行為の類型、侵害抑止では損害賠償・推定覆滅・企業アンケート等を提示している。",
      whyImportant: ["2026年の特許制度見直しで何が正式な検討課題になっているかを一次資料から確認できる", "越境ネットワーク発明について直ちに法改正ではなく『考え方の整理』を作る方向であることを把握できる", "侵害抑止の議論を損害賠償額、推定覆滅、クリアランス・特許表示等のデータとともに確認できる"],
      audience: ["知財・特許担当", "企業法務", "クラウド・SaaS事業担当", "知財訴訟担当"],
      audienceReason: "特許制度の検討状況を二次資料だけでなく公式の審議資料から確認し、現在のルールと将来の検討事項を切り分けるため。",
      categories: ["知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: ["patent-cross-border-network-invention", "patent-malicious-infringement-remedies"],
      primarySourceIds: [source56Id],
      whatChanged: "新規整理／2026年の特許制度小委員会における越境ネットワーク発明と侵害抑止の検討を独立テーマとして整理。"
    },
    {
      id: "article-tmi-patent-subcommittee-56-2026",
      title: "第56回特許制度小委員会（2026年6月16日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山 智恵 / 齋藤 俊",
      publishedAt: "2026-06-23",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18487.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所実務解説・特許制度／知財紛争",
      status: "adopted",
      summary: "第56回特許制度小委員会の3論点を、委員・オブザーバーの立場から整理した解説。越境ネットワーク発明の類型整理、AI関連論点、侵害抑止の統計を紹介し、いずれも直ちに法改正へ進む結論ではないことを明確にしている。",
      whyImportant: ["一次資料の分量が大きい委員会議論を、制度変更が決まった部分と未確定の検討事項に分けて読める", "越境ネットワーク発明の『考え方の整理』が権利行使・サービス提供・出願の各場面で使うことを想定している点を説明している", "悪質侵害、利益吐き出し型損害賠償の可能性、ADR利用等を企業実務に関係する統計とともに整理している"],
      audience: ["知財・特許担当", "企業法務", "知財訴訟担当", "クラウド・IT事業担当"],
      audienceReason: "委員会資料を企業の出願・クリアランス・侵害対応にどう読むか、かつ未確定論点を現行ルールと混同しないため。",
      categories: ["知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: ["patent-cross-border-network-invention", "patent-malicious-infringement-remedies"],
      primarySourceIds: [source56Id],
      whatChanged: "新規整理／第56回審議の制度検討と企業実務への意味を補う代表的な二次資料を追加。"
    },
    {
      id: "article-tmi-patent-subcommittee-57-2026",
      title: "第57回特許制度小委員会（2026年8月20日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山 智恵 / 齋藤 俊",
      publishedAt: "2026-08-24",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18724.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所実務解説・特許制度／知財紛争",
      status: "adopted",
      summary: "第57回特許制度小委員会で進んだ越境ネットワーク発明の『考え方の整理』の構成案と、悪質な特許侵害に対する民事救済・証拠収集の議論を整理する。損害賠償額約56億円と推定覆滅利益額約144億円という委員会資料の分析も紹介する。",
      whyImportant: ["越境ネットワーク発明について、抽象論から被疑侵害行為の類型・海外事例を含むドラフト準備へ進んだことが分かる", "侵害抑止について、悪質性の定義、民事救済、証拠収集を含めて法改正も視野に議論が続いていることを確認できる", "法改正が確定したかのように先取りせず、現在の検討地点と次の確認ポイントを短時間で把握できる"],
      audience: ["知財・特許担当", "企業法務", "知財訴訟担当", "クラウド・SaaS事業担当"],
      audienceReason: "2026年8月時点の検討の進展を追い、出願・FTO・侵害訴訟のどこに将来影響し得るかを把握するため。",
      categories: ["知的財産"],
      relatedTopics: [topicSlug],
      relatedIssues: ["patent-cross-border-network-invention", "patent-malicious-infringement-remedies", "patent-infringement-evidence-collection"],
      primarySourceIds: [source57Id],
      whatChanged: "新規整理／第57回審議で具体化した『考え方の整理』と民事救済・証拠収集の検討を追加。"
    }
  ]);
})();
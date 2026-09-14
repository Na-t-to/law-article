(() => {
  const topicSlug = "plant-variety-ip-important-varieties-2026";
  const seedReformId = "plant-variety-protection-seed-act-2026-amendment";
  const importantVarietiesReformId = "important-varieties-act-2026";

  const sourceSeedHub = "source-maff-seed-act-2026-amendment";
  const sourceSeedQa = "source-maff-seed-act-2026-qa";
  const sourceSeedTerm = "source-maff-breeders-right-term-2026";
  const sourceImportantLaw = "source-maff-important-varieties-act-2026";
  const sourceImportantOverview = "source-shugiin-important-varieties-act-2026-overview";
  const sourceImportantRulesDraft = "source-egov-important-varieties-rules-draft-2026";
  const sourceImportantPolicyDraft = "source-egov-important-varieties-basic-policy-draft-2026";

  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const addUniqueBy = (target, additions, getKey) => {
    const result = [...(target || [])];
    const keys = new Set(result.map(getKey).filter(Boolean));
    for (const item of additions || []) {
      const key = getKey(item);
      if (!key || keys.has(key)) continue;
      result.push(item);
      keys.add(key);
    }
    return result;
  };

  const sources = [
    {
      id: sourceSeedHub,
      title: "種苗法の改正について（令和8年改正）",
      type: "law",
      typeLabel: "改正法・公的資料",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/",
      importance: "最高",
      whyImportant: "2026年種苗法改正の成立、条文、概要、Q&Aへの公式な入口であり、育成者権保護強化の一次資料をまとめて確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceSeedQa,
      title: "令和8年度種苗法改正に関するQ&A",
      type: "guideline",
      typeLabel: "行政Q&A",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/r8kaisei_qa.html",
      importance: "最高",
      whyImportant: "2026年7月24日と12月1日の段階施行、出願中品種の輸出差止め、輸出目的保管、損害額算定等の具体的な適用関係を確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceSeedTerm,
      title: "品種登録公表（令和8年改正後の育成者権存続期間）",
      type: "guideline",
      typeLabel: "行政公表",
      authority: "農林水産省",
      publishedAt: "2026-09-10",
      url: "https://www.maff.go.jp/j/shokusan/hinshu/gazette/touroku/touroku.html",
      importance: "高",
      whyImportant: "2026年7月24日時点で存続している育成者権について、存続期間が35年、永年性植物は40年へ延長されたことを公式に確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceImportantLaw,
      title: "第221回国会提出法律案（重要品種法・種苗法改正）",
      type: "law",
      typeLabel: "成立法・国会提出資料",
      authority: "農林水産省",
      publishedAt: "2026-07-24",
      url: "https://www.maff.go.jp/j/law/bill/221.html",
      importance: "最高",
      whyImportant: "重要品種法の2026年7月17日成立、7月24日公布、主要部分が公布後6か月以内の政令指定日に施行されることを確認できる公式資料。",
      topics: [topicSlug]
    },
    {
      id: sourceImportantOverview,
      title: "重要品種の育成及びその種苗の生産の振興に関する法律案 概要",
      type: "law",
      typeLabel: "国会・法律案概要",
      authority: "衆議院",
      publishedAt: "2026-06-16",
      url: "https://www.shugiin.go.jp/internet/itdb_rchome.nsf/html/rchome/Horitsu/nousui2760D361245567AC49258E12000408BF.htm",
      importance: "最高",
      whyImportant: "国の基本方針、重要品種育成事業計画の認定、研究設備利用・ドローン手続・品種登録料等の支援措置など、新法の制度骨格を確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceImportantRulesDraft,
      title: "重要品種法施行規則案に関する意見募集",
      type: "guideline",
      typeLabel: "施行規則案・パブリックコメント",
      authority: "農林水産省 / e-Gov",
      publishedAt: "2026-08-31",
      url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004400",
      importance: "高",
      whyImportant: "重要品種育成事業・種苗生産事業の認定等を具体化する施行規則案が意見募集段階にあることを確認できる。",
      topics: [topicSlug]
    },
    {
      id: sourceImportantPolicyDraft,
      title: "重要品種の育成及びその種苗の生産の振興に関する基本的な方針案に関する意見募集",
      type: "guideline",
      typeLabel: "基本方針案・パブリックコメント",
      authority: "農林水産省 / e-Gov",
      publishedAt: "2026-09-08",
      url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004401",
      importance: "高",
      whyImportant: "重要品種法5条に基づく基本方針がまだ案段階で、2026年10月7日まで意見募集されていることを確認できる。",
      topics: [topicSlug]
    }
  ];

  const currentSources = window.SOURCE_DATA || [];
  const sourceUrls = new Set(currentSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const sourceIds = new Set(currentSources.map((item) => item && item.id).filter(Boolean));
  const sourceAdditions = sources.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (sourceAdditions.length) window.SOURCE_DATA = currentSources.concat(sourceAdditions);

  const topic = {
    slug: topicSlug,
    title: "種苗法・育成者権／重要品種法（2026年改正・新法）",
    categories: ["知的財産", "契約"],
    summary: "2026年種苗法改正による育成者権保護の強化と、新設された重要品種法による気候変動等対応品種の育成・種苗生産支援を、施行済み・施行待ち・下位ルール案に分けて整理する。",
    lastUpdated: "2026-09-14",
    lastVerified: "2026-09-14",
    isNew: true,
    overview: [
      "2026年7月に成立・公布された種苗法改正は、育成者権の存続期間延長に加え、出願中品種の海外流出防止、輸出目的保管、損害額算定・侵害立証、種苗の貸渡し等について保護を強化する。",
      "同時に成立した重要品種法は、高温耐性・耐病性・多収性等の重要品種について、国の基本方針、育成事業計画・種苗生産事業計画の認定と支援措置を設ける。",
      "両制度は同じ品種開発・種苗ビジネスに関係するが、種苗法は育成者権という知的財産権の保護、重要品種法は重要品種の育成・生産を政策的に促進する制度として分けて確認する。",
      "2026年9月14日時点では、種苗法改正は一部施行済み・残部は12月1日施行予定であり、重要品種法の主要部分は施行日未確定、施行規則案と基本方針案はパブリックコメント中である。"
    ],
    currentSummary: {
      facts: [
        "種苗法の一部を改正する法律（令和8年法律第72号）は2026年7月17日に成立し、7月24日に公布された。育成者権の存続期間延長等は公布日に施行され、その他の主要改正は2026年12月1日に施行される。",
        "2026年7月24日時点で現に存続していた育成者権は、存続期間が品種登録の日から35年、永年性植物は40年に延長された。",
        "12月1日施行部分には、出願中品種について海外流出により回復困難な損害が生じるおそれがある場合の差止め、登録品種の輸出目的保管への権利行使、損害額算定・侵害立証等の強化が含まれる。",
        "重要品種の育成及びその種苗の生産の振興に関する法律（令和8年法律第71号）は2026年7月17日に成立し、7月24日に公布された。主要部分は公布日から6か月以内の政令指定日に施行される。",
        "重要品種法は、国の基本方針、重要品種育成事業計画・種苗生産事業計画の認定等を設ける。2026年9月14日時点で施行規則案は9月29日まで、基本方針案は10月7日までパブリックコメント中である。"
      ],
      interpretations: [
        "品種開発・種苗事業の法務では、既に効力が生じている育成者権期間延長、12月1日から効力が生じる権利強化、施行日と下位ルールが未確定な重要品種法を一つの『2026年制度改正』として混同せず工程を分けて管理する必要がある。",
        "海外流出対策は輸出行為だけでなく、その前段階の保管や出願中品種の警告・差止めへ広がるため、ライセンス、物流、保管、証拠保全の運用まで育成者権管理と接続する。",
        "重要品種法の認定制度は研究開発・種苗生産の支援制度でもあるため、対象となり得る企業・研究機関は知財保護と事業計画認定の双方を見て開発・共同研究スキームを設計する。"
      ],
      implications: [
        "保有・利用する登録品種について、改正後の権利満了日を台帳、ライセンス契約、ロイヤルティ管理へ反映する。",
        "海外持出制限を利用する品種は、12月1日以降の届出・表示と、輸出目的保管を検知できる物流・倉庫管理を確認する。",
        "出願中品種の海外流出リスクがある場合に備え、警告、相手方特定、輸出準備行為、損害・緊急性を示す資料を保存できる手順を整える。",
        "重要品種の育成・種苗生産に関わる事業者は、施行規則・基本方針の確定後に、認定対象、申請事項、支援措置、都道府県計画との接続を確認する。"
      ],
      uncertain: [
        "重要品種法の主要部分の具体的な施行日は、2026年9月14日時点では政令指定日が確認できていない。",
        "重要品種法の施行規則と基本方針はパブリックコメント中であり、認定要件・申請実務・重要品種の政策上の具体的な運用は最終版を確認する必要がある。",
        "種苗法改正の12月1日施行部分についても、輸出制限表示等の省令事項は施行前の最終ルールを確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "plant-variety-right-term-2026",
        title: "育成者権の存続期間延長を既存権利へどう反映するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "2026年7月24日時点で存続する育成者権について、存続期間を品種登録の日から35年、永年性植物は40年として管理し、権利満了日とライセンス期間等を見直す。",
        exception: "2026年7月24日より前に既に消滅した育成者権が復活するものではない。",
        uncertain: "個別品種の存続状況は品種登録公表等で確認する。",
        sourceIds: [sourceSeedHub, sourceSeedQa, sourceSeedTerm]
      },
      {
        id: "plant-variety-pending-export-injunction-2026",
        title: "出願中品種の海外流出へどこまで差止めを使えるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "12月1日以降、出願公表後の品種について所定の警告を行い、海外流出により回復困難な損害が生じるおそれがある場合には、品種登録前でも裁判所へ輸出等の差止めを求める制度を利用し得る。",
        exception: "無条件に差止められるわけではなく、警告、権利化の蓋然性、回復困難な損害のおそれ等を個別に確認し、裁判所から担保提供を求められる場合がある。",
        uncertain: "制度利用の実務水準は施行後の申立事例・裁判例の蓄積を確認する必要がある。",
        sourceIds: [sourceSeedHub, sourceSeedQa]
      },
      {
        id: "plant-variety-export-storage-remedies-2026",
        title: "輸出目的保管・損害額・侵害立証の強化へどう対応するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "12月1日以降の改正ルールを前提に、海外持出制限品種について輸出目的保管まで権利管理の対象に含め、侵害時は改正後の損害額算定・立証ルールも踏まえて証拠を保全する。",
        exception: "輸出目的保管は外形的・客観的に輸出目的が認められるかが重要で、通常の国内保管を当然に侵害と扱うものではない。",
        uncertain: "輸出制限表示等の省令上の具体的な扱いは12月1日までの最終化を確認する。",
        sourceIds: [sourceSeedHub, sourceSeedQa]
      },
      {
        id: "important-variety-certification-support-2026",
        title: "重要品種の育成・種苗生産の認定制度をどう使うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "重要品種法は、国の基本方針の下で重要品種育成事業計画・種苗生産事業計画の認定制度を設け、認定事業へ研究設備利用、ドローン手続、品種登録料等に関する支援措置を用意する。",
        exception: "どの品種・事業計画でも自動的に認定される制度ではなく、法律・下位ルール・基本方針に基づく要件確認が必要である。",
        uncertain: "主要部分の施行日と、認定申請の具体的な様式・要件は施行規則等の最終化を確認する必要がある。",
        sourceIds: [sourceImportantLaw, sourceImportantOverview, sourceImportantRulesDraft]
      },
      {
        id: "important-variety-implementation-rules-2026",
        title: "重要品種法の施行規則・基本方針はどこまで確定しているか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "2026年9月14日時点では、施行規則案と基本方針案はいずれもパブリックコメント中であり、案の内容を確定ルールとして運用へ固定しない。",
        exception: "法律本体は成立・公布済みであるため、新法の存在や制度骨格まで未確定という意味ではない。",
        uncertain: "施行規則は9月29日、基本方針は10月7日の意見募集終了後に修正され得るため、最終公示と施行日政令を確認する。",
        sourceIds: [sourceImportantLaw, sourceImportantRulesDraft, sourceImportantPolicyDraft]
      }
    ],
    sourceIds: [sourceSeedHub, sourceSeedQa, sourceSeedTerm, sourceImportantLaw, sourceImportantOverview, sourceImportantRulesDraft, sourceImportantPolicyDraft],
    practicalImpacts: [
      "育成者権・品種登録台帳",
      "ライセンス・共同研究契約",
      "海外持出制限・輸出管理",
      "物流・倉庫の輸出目的保管管理",
      "侵害警告・差止め・証拠保全",
      "重要品種育成事業計画・認定申請",
      "種苗生産事業計画・都道府県対応"
    ]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item && item.slug === topicSlug)) {
    window.TOPIC_DATA = [...(window.TOPIC_DATA || []), topic];
  }

  const reforms = [
    {
      id: seedReformId,
      title: "種苗法・2026年改正（育成者権保護強化）",
      eventType: "law_amendment",
      lawId: "plant-variety-protection-and-seed-act",
      lawLabel: "種苗法",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-07-24", "2026-12-01"],
      effectiveDateNote: "育成者権の存続期間延長等は2026年7月24日施行／その他の主要改正は2026年12月1日施行",
      effectiveDateSourceIds: [sourceSeedQa],
      matchSourceIds: [sourceSeedHub, sourceSeedQa, sourceSeedTerm],
      sourceIds: [sourceSeedHub, sourceSeedQa, sourceSeedTerm]
    },
    {
      id: importantVarietiesReformId,
      title: "重要品種法（気候変動等対応品種法）・2026年制定",
      eventType: "new_law",
      lawId: "important-varieties-act",
      lawLabel: "重要品種の育成及びその種苗の生産の振興に関する法律",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "relative",
      effectiveDateNote: "2026年7月24日公布／主要部分は公布日から6か月以内の政令指定日（特段の定めがあるものを除く）",
      effectiveDateSourceIds: [sourceImportantLaw],
      matchSourceIds: [sourceImportantRulesDraft, sourceImportantPolicyDraft],
      sourceIds: [sourceImportantLaw, sourceImportantOverview, sourceImportantRulesDraft, sourceImportantPolicyDraft]
    }
  ];

  window.REFORM_EVENT_DATA = addUniqueBy(window.REFORM_EVENT_DATA || [], reforms, (item) => item && item.id);

  const articles = [
    {
      id: "article-maff-seed-act-2026-amendment",
      title: "種苗法の改正について（令和8年改正）",
      publisher: "農林水産省",
      author: "農林水産省",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-14",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年種苗法改正",
      status: "adopted",
      summary: "2026年種苗法改正の条文・概要・Q&Aをまとめた農林水産省の公式ページ。育成者権の存続期間延長は2026年7月24日から効力が生じ、出願中品種の海外流出差止め、輸出目的保管への権利行使、損害額算定・侵害立証等の主要改正は12月1日に施行される。",
      whyImportant: [
        "2026年改正の正式な条文・概要・Q&Aへ遡れる基準点で、施行済み部分と12月1日施行部分を分けて確認できる",
        "育成者権の存続期間だけでなく、出願中品種・輸出目的保管・損害額・侵害立証まで権利行使実務が広く変わる",
        "海外流出防止を知財部門だけでなく、ライセンス、物流、倉庫、輸出管理、証拠保全へ接続して設計する必要性が見える"
      ],
      audience: ["知財・法務", "種苗・農業・食品事業", "研究開発", "物流・輸出管理"],
      audienceReason: "12月1日の主要改正施行までに、権利台帳、ライセンス、海外持出制限、物流・保管、侵害対応を改正法へ対応付けるため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["plant-variety-right-term-2026", "plant-variety-pending-export-injunction-2026", "plant-variety-export-storage-remedies-2026"],
      primarySourceIds: [sourceSeedHub, sourceSeedQa, sourceSeedTerm],
      reformEventId: seedReformId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [sourceSeedQa],
      whatChanged: "新テーマ追加／育成者権の期間延長と12月1日施行の海外流出・権利行使強化を、段階施行として整理した。"
    },
    {
      id: "article-egov-important-varieties-basic-policy-draft-2026",
      title: "重要品種の育成及びその種苗の生産の振興に関する基本的な方針案についての意見・情報の募集について",
      publisher: "農林水産省 / e-Gov",
      author: "農林水産省",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-14",
      url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004401",
      sourceType: "primary",
      sourceLabel: "一次資料・重要品種法の基本方針案／パブリックコメント",
      status: "adopted",
      summary: "重要品種法5条に基づく基本方針案のパブリックコメント。2026年9月8日に公示され、10月7日まで意見募集中である。施行規則案も8月31日から別途意見募集されており、新法の認定・運用詳細はなお最終化前であることを追える。",
      whyImportant: [
        "成立済みの重要品種法について、制度骨格から具体的な政策・認定運用へ移る施行準備段階を確認できる",
        "基本方針案がまだパブリックコメント中であるため、案段階の要件を確定ルールとして先取りしないための基準点になる",
        "同時進行する施行規則案と併せて、認定申請・事業計画・都道府県対応の確定時期を追える"
      ],
      audience: ["農業・種苗・食品企業", "研究開発", "知財・法務", "事業開発"],
      audienceReason: "重要品種法の施行準備で、基本方針・施行規則がどこまで確定しているかを区別し、認定制度への準備時期を判断するため。",
      categories: ["知的財産", "契約"],
      relatedTopics: [topicSlug],
      relatedIssues: ["important-variety-certification-support-2026", "important-variety-implementation-rules-2026"],
      primarySourceIds: [sourceImportantLaw, sourceImportantOverview, sourceImportantRulesDraft, sourceImportantPolicyDraft],
      reformEventId: importantVarietiesReformId,
      reformStageAtPublication: "proposal",
      reformStageSourceIds: [sourceImportantPolicyDraft],
      whatChanged: "新テーマ追加／重要品種法の基本方針・施行規則がパブリックコメント段階にあることを、成立済み法律本体と分けて整理した。"
    },
    {
      id: "article-amt-plant-variety-seed-important-varieties-2026-09-08",
      title: "Amendment to the Plant Variety Protection and Seed Act and Enactment of the Act on the Promotion of the Breeding of Important Varieties and Production of Their Propagating Material",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "Miki Goto / Yuki Takemoto",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-14",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260908001_en_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／種苗法改正・重要品種法",
      status: "adopted",
      summary: "2026年種苗法改正と重要品種法制定を横断して整理する実務解説。種苗法について、育成者権の10年延長、出願中の保護、輸出目的保管、損害額算定、侵害立証、種苗の貸渡しまで保護強化を概観し、重要品種法について国・都道府県の方針・計画と育成・種苗生産事業の認定制度を整理している。",
      whyImportant: [
        "二つの法律を、知的財産権の保護強化と重要品種の育成・普及促進という異なる政策手段として短く横断整理できる",
        "種苗法改正の実務影響を、存続期間だけでなく海外流出防止、損害・立証、貸渡しまで一続きで把握できる",
        "重要品種法について、国の基本方針・都道府県計画・育成事業認定・種苗生産事業認定の関係を一次資料より読みやすく整理している"
      ],
      audience: ["知財・法務", "種苗・農業・食品事業", "研究開発・事業開発"],
      audienceReason: "種苗法改正と重要品種法を一つの事業文脈で捉えつつ、権利保護と政策支援の役割を混同せず施行対応を整理するため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["plant-variety-right-term-2026", "plant-variety-pending-export-injunction-2026", "plant-variety-export-storage-remedies-2026", "important-variety-certification-support-2026"],
      primarySourceIds: [sourceSeedHub, sourceSeedQa, sourceImportantLaw, sourceImportantOverview],
      reformEventId: seedReformId,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [sourceSeedQa],
      whatChanged: "新テーマ追加／種苗法改正と重要品種法を、育成者権保護と品種育成支援の二つの制度として横断できる実務解説を追加した。"
    }
  ];

  const currentArticles = window.ARTICLE_DATA || [];
  const existingArticleIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingArticleUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const articleAdditions = articles.filter((item) => !existingArticleIds.has(item.id) && !existingArticleUrls.has(normalizeUrl(item.url)));
  if (articleAdditions.length) window.ARTICLE_DATA = currentArticles.concat(articleAdditions);
})();

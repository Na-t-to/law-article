(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "economic-security-promotion-act-2026-oesa");
  if (!topic) return;

  const guideline = "source-cao-oesa-basic-guideline-20260911";
  const cabinet = "source-kantei-economic-security-cabinet-20260911";
  const gazette = "source-kanpo-economic-security-effective-20260916";
  const sources = [guideline, cabinet, gazette];

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  topic.summary = "2026年改正経済安全保障推進法・JBIC法について、OESA、特定重要物資に不可欠な役務、官民協議会等は2026年9月18日に施行される。9月11日にはOESAの特定海外事業促進基本指針も閣議決定され、対象事業・認定基準・情報管理が具体化した。医療分野の基幹インフラ追加は別段階で、施行日はなお未確定である。";

  topic.overview = [
    "令和8年法律第38号は2026年6月17日に公布され、経済安全保障推進法と株式会社国際協力銀行法を改正した。2026年9月16日公布の施行期日政令により、改正法附則1条本文と3号に掲げる規定は9月18日に施行され、OESA、特定重要物資に不可欠な役務を取り込む仕組み、官民協議会等が動き出す。",
    "2026年9月11日には『特定海外事業の促進に関する基本指針』が閣議決定された。OESAの対象は、国際輸送網の強靱化、特定社会基盤役務に用いる海外施設・設備、重要技術の海外展開等の特定海外事業で、計画認定と主務大臣・JBICの支援を組み合わせる。",
    "OESAの計画認定では、事業が基本指針に適合すること、円滑・確実な実施体制と資金調達があること、OESA情報を適切に管理する体制があること等が審査される。重要技術の流出防止、国内への裨益、人権尊重等も実施上の重要事項として示されている。",
    "基幹インフラ制度への医療分野追加は改正法で成立済みだが、今回の9月18日施行の対象とは別で、公布から1年6か月以内の政令指定日までに施行される。対象病院・設備等の下位ルールと施行日を引き続き分けて追う必要がある。"
  ];

  topic.currentSummary = {
    facts: [
      "2026年9月11日、経済安全保障推進法の基本方針・各基本指針の改定と、新設OESAの『特定海外事業の促進に関する基本指針』が閣議決定された。",
      "2026年9月16日の官報号外第206号で、令和8年政令第288号により改正法附則1条本文および3号に掲げる規定の施行日が2026年9月18日と定められた。",
      "9月18日施行の範囲には、OESA・JBIC関係、特定重要物資に不可欠な役務を取り込む仕組み、官民協議会等が含まれる。K Programの一部改正は7月17日に先行施行済みである。",
      "OESA基本指針は、国際輸送網の強靱化、特定社会基盤役務に用いる海外施設・設備、重要技術の海外展開等を対象事業として示し、計画認定では基本指針適合性、実施体制・資金調達、情報管理体制等を確認する。",
      "医療分野を基幹インフラ制度へ追加する部分は9月18日施行には含まれず、施行日・指定基準・対象設備等の具体化を引き続き待つ段階である。"
    ],
    interpretations: [
      "OESAは単なる資金支援メニューではなく、事業内容、実施体制、資金調達、経済安全保障上の情報管理を一体で審査する認定制度として案件初期から準備する必要がある。",
      "重要技術を含む案件では、海外展開による便益だけでなく、コア技術・機微情報の流出防止策を事業計画・契約・アクセス管理へ落とすことが認定実務上重要になる。",
      "9月18日に主要部分が施行されても、医療分野の基幹インフラ追加まで施行済みになったと扱わない。改正法の段階施行を制度単位で管理する必要がある。"
    ],
    implications: [
      "海外インフラ・物流・重要サービス・重要技術案件では、OESAの対象類型、国内への裨益、実施体制、資金調達、情報管理を投資審査・事業計画の初期チェックへ追加する。",
      "OESA利用を検討する案件では、JBIC支援だけを先に見るのではなく、主務大臣の計画認定に必要な体制・資金・情報管理・許認可を一体で整える。",
      "特定重要物資に関係する事業では、物資そのものだけでなく不可欠な役務・重要サプライヤーも供給網として棚卸しし、9月18日施行後の取組方針・支援措置を確認する。",
      "病院・医療DX関連事業者は、医療分野の施行期日政令と対象事業者・特定重要設備の下位法令を別途追跡する。"
    ],
    uncertain: [
      "OESAの具体的な申請様式、審査運用、JBICの個別条件や案件形成実務は、9月18日の制度開始後の公表資料・運用蓄積を継続確認する必要がある。",
      "医療分野の基幹インフラ追加は成立済みだが、具体的な施行日、指定基準、対象設備等はなお今後の下位法令・運用資料を確認する必要がある。"
    ]
  };

  const issueMap = new Map((topic.issues || []).map((issue) => [issue?.id, issue]));
  const service = issueMap.get("economic-security-critical-services-2026");
  if (service) {
    service.status = "authoritative";
    service.stage = "enacted";
    service.conclusion = "特定重要物資の供給に不可欠で専ら供給のために用いられる役務を制度へ取り込み、供給途絶リスクへの協力要請等を含む改正部分は2026年9月18日に施行される。";
    service.uncertain = "個別の役務・支援対象や取組方針への具体的な反映は、施行後の指定・運用を確認する必要がある。";
    service.sourceIds = appendUnique(service.sourceIds, [cabinet, gazette]);
  }

  const oesa = issueMap.get("economic-security-oesa-jbic-2026");
  if (oesa) {
    oesa.status = "authoritative";
    oesa.stage = "enacted";
    oesa.conclusion = "OESAは2026年9月18日に施行される。9月11日閣議決定の基本指針は、国際輸送網の強靱化、特定社会基盤役務に用いる海外施設・設備、重要技術の海外展開等を対象類型として示し、計画認定で基本指針適合性、実施体制・資金調達、情報管理体制等を確認する。";
    oesa.exception = "海外事業一般が対象になるわけではなく、基本指針上の特定海外事業に該当し、認定基準を満たす必要がある。外為法、輸出管理、現地法その他の規制は別途確認する。";
    oesa.uncertain = "個別案件の認定審査、JBICの支援条件、申請実務は制度開始後の運用を継続確認する必要がある。";
    oesa.sourceIds = appendUnique(oesa.sourceIds, sources);
  }

  const council = issueMap.get("economic-security-public-private-council-2026");
  if (council) {
    council.status = "authoritative";
    council.stage = "enacted";
    council.uncertain = "制度は2026年9月18日に施行されるが、個別の協議会の設置、参加主体、議題、情報管理の具体的運用は今後の公表・運用を確認する。";
    council.sourceIds = appendUnique(council.sourceIds, [cabinet, gazette]);
  }

  const medical = issueMap.get("economic-security-medical-infrastructure-2026");
  if (medical) {
    medical.status = "pending";
    medical.stage = "enacted";
    medical.uncertain = "医療分野の追加は2026年9月18日施行の対象外であり、具体的な施行日、指定基準、対象設備等の確定を待つ必要がある。";
    medical.sourceIds = appendUnique(medical.sourceIds, [gazette]);
  }

  topic.sourceIds = appendUnique(topic.sourceIds, sources);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [
    "article-cao-oesa-basic-guideline-20260911",
    "article-kanpo-economic-security-effective-20260916"
  ]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "OESA計画認定・情報管理",
    "2026年9月18日施行対応",
    "重要技術の海外展開・流出防止"
  ]);
})();

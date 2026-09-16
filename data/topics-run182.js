(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addMany = (list, values) => (values || []).reduce((next, value) => addUnique(next, value), Array.isArray(list) ? [...list] : []);

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "privacy-enforcement-breach-response");
  if (!topic) return;

  const guideline = "source-ppc-security-measures-guideline-review-2026";
  const warning = "source-ppc-unauthorized-access-warning-2024";
  const commonReport = "source-nco-cyber-common-reporting-2025";

  topic.lastUpdated = "2026-09-17";
  topic.lastVerified = "2026-09-17";
  topic.sourceIds = addMany(topic.sourceIds, [guideline, warning, commonReport]);
  topic.overview = addUnique(topic.overview, "2026年9月16日、個人情報保護委員会は安全管理措置の手法例を現代化する見直しを開始し、クラウド、多要素認証、ゼロトラスト、侵入後の横展開対策等を追加・再整理する方向を示しました。現時点では検討案であり、具体的な手法例が直ちに新たな必須義務になったわけではありません。");

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "個人情報保護委員会は2026年9月16日、2016年策定時から大きく変わっていないガイドライン（通則編）別添の安全管理措置について、クラウド、多要素認証、ゼロトラスト、特権アカウント最小化、侵害システムの停止・隔離等を手法例へ反映する見直し方向を示した。2026年12月頃にパブリックコメント、2027年2月頃に改正決定、2027年4月施行を予定している。");
  topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "2024年12月のPPC注意喚起は、不正アクセスによる漏えいの原因として、公開済み脆弱性やパッチ遅延・認証不備だけでなく、グループ会社・海外拠点を足掛かりとする侵入、組織間アクセス制御、委託先・クラウド管理等を挙げている。");
  topic.currentSummary.interpretations = addUnique(topic.currentSummary.interpretations, "安全管理措置ガイドラインの見直しでは、法的に『講じなければならない措置』と、その実践方法にすぎない『手法の例示』の対応関係を明確化する方針が示されている。クラウド・MFA・ゼロトラスト等の例示候補を、2026年9月時点で一律必須の技術要件として扱わない。");
  topic.currentSummary.implications = addUnique(topic.currentSummary.implications, "クラウド利用、特権ID、多要素認証、内部・外部を問わないアクセス判断、侵害後のアカウント無効化・システム隔離を、自社の安全管理措置チェックリストで現状把握し、2027年のガイドライン改正に備える。");
  topic.currentSummary.implications = addUnique(topic.currentSummary.implications, "委託・再委託契約では、事故時に原因・被害範囲・再発防止策を速やかに共有できる条項、再委託先のセキュリティ確認、複数の当局報告へ協力する体制を平時から確認する。");
  topic.currentSummary.uncertain = addUnique(topic.currentSummary.uncertain, "2026年9月16日の安全管理措置見直しは方向性の案であり、最終的な例示・文言・施行時期は今後の委員会審議とパブリックコメントを確認する必要がある。");

  const issueMap = new Map((topic.issues || []).map((issue) => [issue && issue.id, issue]));
  const safety = issueMap.get("privacy-enforcement-safety-management");
  if (safety) {
    safety.sourceIds = addMany(safety.sourceIds, [guideline, warning]);
    safety.conclusion = "現行法上は、取り扱う個人データ・システム・脅威等に応じた必要かつ適切な安全管理措置が必要であり、公開済み脆弱性の放置、弱い認証、アクセス制御不備等は実際に指導対象となっている。PPCは2026年9月から、クラウド、多要素認証、ゼロトラスト、横展開対策等をガイドラインの手法例へ反映する見直しを進めている。";
    safety.uncertain = "2026年9月16日に示されたクラウド・MFA・ゼロトラスト・横展開対策等は見直し方向の案であり、手法例の最終文言は今後確定する。手法例自体も、全事業者に一律同じ実装を義務付けるものではない。";
  }
  const vendor = issueMap.get("privacy-enforcement-vendor-supervision");
  if (vendor) vendor.sourceIds = addMany(vendor.sourceIds, [warning]);
  const breach = issueMap.get("privacy-enforcement-breach-reporting");
  if (breach) breach.sourceIds = addMany(breach.sourceIds, [commonReport]);
  const forensic = issueMap.get("privacy-incident-forensics-readiness");
  if (forensic) forensic.sourceIds = addMany(forensic.sourceIds, [guideline, warning]);

  topic.practicalImpacts = addMany(topic.practicalImpacts, ["クラウド・MFA・ゼロトラスト", "特権ID・横展開対策", "再委託先・事故時情報共有", "DDoS・ランサムウェア共通報告様式"]);
})();

(() => {
  const slug = "customer-harassment-jobseeker-sexual-harassment-2026";
  if ((window.TOPIC_DATA || []).some((item) => item && item.slug === slug)) return;
  window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([{
    slug,
    title: "カスタマーハラスメント・求職者等セクハラ／2026年10月施行",
    categories: ["労務", "危機管理・コンプライアンス"],
    summary: "2026年10月1日から義務化されるカスタマーハラスメント防止措置と、求職者等へのセクシュアルハラスメント防止措置を、対象範囲・相談体制・事後対応・現場運用・採用実務に分けて追う。",
    lastUpdated: "2026-09-17",
    lastVerified: "2026-09-17",
    isNew: true,
    overview: [
      "2025年の法改正により、2026年10月1日からカスタマーハラスメント防止措置は労働施策総合推進法、求職者等へのセクシュアルハラスメント防止措置は男女雇用機会均等法に基づく事業主の義務となります。",
      "カスタマーハラスメントは、顧客等の言動、業務の性質等に照らして社会通念上許容される範囲を超えること、その結果として労働者の就業環境が害されることの3要素を全て満たす場合が対象で、BtoBの取引先担当者や電話・SNS上の言動も含み得ます。",
      "求職者等セクシュアルハラスメントは、応募者だけでなく説明会、インターンシップ、教育・看護実習、OB・OG訪問等を含み、SNSや通常の就業場所以外での接触も対象になり得ます。",
      "二つの義務は関連するハラスメント対策として同じ棚で追いますが、法改正情報では労働施策総合推進法と男女雇用機会均等法を別の法律グループとして管理します。"
    ],
    currentSummary: {
      facts: [
        "カスタマーハラスメント防止措置と求職者等へのセクシュアルハラスメント防止措置はいずれも2026年10月1日から事業主の義務となる。",
        "カスタマーハラスメント対策では、方針・対処内容の明確化と周知、相談体制、事実確認・被害者配慮・再発防止、特に悪質な事案への対処体制、プライバシー保護と相談等を理由とする不利益取扱い防止等が必要になる。",
        "求職者等セクシュアルハラスメント対策では、禁止方針に加え、面談時間・場所・SNS等の接触ルールを明確化し、求職者等が利用できる相談窓口を周知し、相談後の事実確認・配慮・行為者措置・再発防止等を行う必要がある。"
      ],
      interpretations: [
        "カスタマーハラスメントは顧客からの苦情や厳しい要求を広く排除する制度ではなく、契約内容、要求の理由、手段・態様、業種・業態等を踏まえて『社会通念上許容される範囲』を超えるかを判断する必要がある。",
        "施行対応は相談窓口を設けるだけでは足りず、現場で誰が判断し、どこで対応を打ち切り、管理職・本社・警察等へいつエスカレーションするかまで運用へ落とす必要がある。",
        "求職者等セクハラでは、採用担当者だけでなく、インターン・実習受入部署やOB・OG訪問に対応する一般社員も対象になり得るため、採用部門だけで閉じた対策では不十分になりやすい。"
      ],
      implications: [
        "カスタマーハラスメントについて、正当な苦情との判断基準、録音・録画、複数人対応、退店・電話終了、警察通報、本社報告等を含む対応マニュアルと現場QAを整備する。",
        "相談窓口、被害者保護、プライバシー保護、不利益取扱い禁止、事後の再発防止を既存ハラスメント規程・就業規則・研修と接続する。",
        "採用面接、説明会、インターン、実習、OB・OG訪問について、面談場所・時間、SNS等の連絡手段、相談窓口の周知、違反時の調査・是正フローを明確化する。"
      ],
      uncertain: [
        "個別の言動がカスタマーハラスメントに該当するかは、要求内容・手段・態様、業種・業務の性質、労働者の属性・心身の状況等を踏まえた個別判断になる。",
        "消費者の権利や障害者差別解消法上の合理的配慮要求等を、カスタマーハラスメントとして不適切に排除しないよう運用上の線引きが必要になる。"
      ]
    },
    issues: [
      {
        id: "customer-harassment-definition-2026",
        title: "どの顧客言動がカスタマーハラスメントに当たるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月施行の制度では、①事業に関係する顧客等の言動、②業務の性質その他の事情に照らして社会通念上許容される範囲を超えること、③労働者の就業環境が害されることの3要素を全て満たす場合がカスタマーハラスメントとなる。BtoBの取引先担当者や電話・SNS上の言動も含み得る。",
        exception: "正当な苦情や要求、障害者差別解消法に基づく合理的配慮の求め等が当然にカスタマーハラスメントになるわけではない。",
        uncertain: "『社会通念上許容される範囲』は業種・契約内容・要求の理由・手段・態様・労働者の状況等を踏まえて個別判断する。",
        sourceIds: ["source-mhlw-customer-harassment-2026"]
      },
      {
        id: "customer-harassment-employer-measures-2026",
        title: "事業主はカスハラ防止措置をどう実装するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月1日から、事業主はカスハラへの方針・対処内容の明確化と周知、相談体制、迅速な事実確認・被害者配慮・再発防止、特に悪質な事案への対処体制、プライバシー保護・不利益取扱い防止等を整備する必要がある。",
        exception: "具体的な対処方法は業種・業態・顧客接点等に応じて設計する必要があり、すべての苦情に一律の対応拒否を行うことを求めるものではない。",
        uncertain: "施行後の行政指導・裁判例等により、業種別の具体的な運用水準が蓄積する可能性がある。",
        sourceIds: ["source-mhlw-customer-harassment-2026"]
      },
      {
        id: "jobseeker-sexual-harassment-employer-measures-2026",
        title: "求職者等セクハラ防止を採用・インターン実務へどう落とすか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "2026年10月1日から、事業主は労働者による求職者等への性的言動で求職活動等が阻害されることを防止するため、禁止方針、面談・連絡ルール、求職者等が利用できる相談窓口、相談後の事実確認・被害者配慮・行為者措置・再発防止、プライバシー保護等を整備する必要がある。",
        exception: "対象は採用応募者に限られず、就職説明会、インターンシップ、教育・看護実習、OB・OG訪問等を含む一方、専ら教育目的の社会科見学等は対象外となり得る。",
        uncertain: "個別の活動が『求職活動等』に該当するか、具体的な接触ルールの水準は活動形態に応じて判断する必要がある。",
        sourceIds: ["source-mhlw-jobseeker-sexual-harassment-2026"]
      }
    ],
    sourceIds: ["source-mhlw-customer-harassment-2026", "source-mhlw-jobseeker-sexual-harassment-2026"],
    referenceArticleIds: ["article-mhlw-customer-harassment-2026", "article-mhlw-jobseeker-sexual-harassment-2026", "article-tmi-customer-harassment-practical-2026"],
    practicalImpacts: ["カスハラ対応マニュアル", "相談窓口・被害者保護", "現場エスカレーション・警察通報", "録音・録画・事実確認", "採用面接・インターン・実習", "OB・OG訪問", "SNS・連絡ルール", "ハラスメント研修・規程"]
  }]);
})();

window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    slug: "early-business-rehabilitation-procedure",
    title: "早期事業再生法・多数決型私的整理",
    categories: ["事業再生・金融", "契約"],
    summary: "2026年12月11日施行の早期事業再生法について、倒産前の利用要件、対象となる金融債権、多数決と裁判所認可、担保・ファイナンス・リース、手続中の弁済・プレDIPファイナンスを整理する。",
    lastUpdated: "2026-09-15",
    lastVerified: "2026-09-15",
    isNew: true,
    overview: [
      "早期事業再生法は、倒産状態に至る前の『経済的に窮境に陥るおそれ』がある事業者について、公正中立な指定確認調査機関の関与の下、金融債権者の多数決と裁判所の認可により金融債権の権利関係を調整できる新しい事業再生手続です。",
      "手続開始時の公示をせず、原則として商取引債権や労働債権を対象外とし、対象債権者に限定した非公開の手続として進められる点が、法的整理との大きな違いです。",
      "権利変更議案は、議決権総額の4分の3以上の同意等により可決され、反対債権者を含めて非保全債権の権利変更を可能にします。担保付債権、ファイナンス・リース債権、保証協会付き融資、外国金融機関等の扱いは、施行規則・告示・Q&Aまで確認する必要があります。",
      "2026年6月30日に施行規則・資産評定基準・Q&Aが公表され、制度の対象範囲、一時停止・弁済禁止、労働組合等への通知、資産評定、指定確認調査機関などの運用が具体化されました。"
    ],
    currentSummary: {
      facts: [
        "早期事業再生法（令和7年法律第67号）は2025年6月13日に公布され、主要規定は2026年12月11日に施行される。",
        "対象となるのは倒産状態に至る前の経済的に窮境に陥るおそれのある事業者で、経済産業大臣の指定を受けた指定確認調査機関が利用開始要件等を確認する。",
        "権利変更議案は、原則として議決権総額の4分の3以上の同意等で可決され、その後の裁判所認可により反対債権者を含む非保全債権の権利変更が可能となる。",
        "2026年6月30日に施行規則と資産評定基準が公布され、経済産業省Q&Aも公表された。施行規則は金融機関等・貸付債権等の範囲、一時停止の要請、労働組合等への通知、指定確認調査機関等を具体化している。"
      ],
      interpretations: [
        "従来の準則型私的整理が原則として対象債権者全員の同意を必要とするのに対し、本手続は多数決と裁判所認可により反対金融債権者を拘束できるため、法的整理と私的整理の中間的な『第三の手続』として位置付けられる。",
        "対象債権者・対象債権は法令で画定されるため、債務者が任意に金融債権者を選別する手続ではない。特に担保付債権の保全・非保全部分、ファイナンス・リース、保証協会付き融資、外国金融機関の扱いは、議決権や権利変更範囲に直結する。",
        "非公開性は事業価値の毀損回避に資する一方、上場会社の適時開示、労働組合等への通知、金融機関内部の与信・引当てなど、制度外の開示・運用要請との調整が必要になる。",
        "プレDIPファイナンスは手続開始後の新規資金として対象債権から外れる場面があるが、後続の法的整理に移行した場合の優先性は別問題となるため、融資条件・担保・後続手続まで見据えた設計が必要である。"
      ],
      implications: [
        "債務者は、資金繰りが破綻する前に利用要件、対象債権者、担保・リース・保証関係を一覧化し、既存の事業再生ADR等との比較を行う。",
        "金融機関・リース会社・信用保証協会等は、通知受領時の担当部署、議決権額・担保評価、弁済停止、権利変更議案の審査、裁判所認可への対応を事前に整える。",
        "ファイナンス・リースでは、中途解約禁止要件・フルペイアウト要件、対象債権該当性、資産評定、通知漏れや誤分類が手続全体へ与える影響を確認する。",
        "施行前に、融資契約・リース契約・保証契約のデフォルト条項、一時停止要請との関係、情報共有・秘密保持、プレDIP融資の社内ルールを点検する。"
      ],
      uncertain: [
        "制度は2026年12月11日施行前であり、指定確認調査機関の実際の運用、裁判所の認可実務、担保評価・対象債権分類の運用蓄積は施行後に形成される。",
        "ファイナンス・リース債権者を対象債権者から除外する運用など、Q&A・実務解説上なお検討余地が示される論点がある。"
      ]
    },
    issues: [
      {
        id: "early-rehab-eligibility-scope",
        title: "どの段階の事業者が利用できるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "倒産状態に至る前の『経済的に窮境に陥るおそれ』がある事業者が対象であり、指定確認調査機関による利用開始要件等の確認を受けて手続を進める。",
        exception: "既に倒産状態にある場合や法定の利用要件を満たさない場合は、本手続ではなく他の再生・倒産手続を検討する必要がある。",
        uncertain: "実際の事案で『窮境に陥るおそれ』をどの時点・資料で判断するかは、指定確認調査機関の運用蓄積も確認する必要がある。",
        sourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026"]
      },
      {
        id: "early-rehab-vote-court-approval",
        title: "多数決と裁判所認可でどこまで権利変更できるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "権利変更議案は原則として議決権総額の4分の3以上の同意等により可決され、裁判所の認可を経て反対債権者を含む非保全債権の権利変更を可能にする。",
        exception: "保全債権部分は多数決による権利変更の対象ではなく、担保権の評価・保全額の確定を別途整理する必要がある。",
        uncertain: "認可申立てや異議・抗告を含む裁判所実務は、施行後の事例蓄積を確認する必要がある。",
        sourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026"]
      },
      {
        id: "early-rehab-target-claims-security-leases",
        title: "対象債権・担保・ファイナンス・リースをどう判定するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "対象債権者・対象債権は法令上の金融機関等・貸付債権等の定義から判定し、担保付債権は保全・非保全部分を区別する。一定のファイナンス・リース債権も対象となるため、契約類型と資産評定を照合する。",
        exception: "商取引債権・労働債権等は原則として対象外であり、同じ『リース』でも法令上のファイナンス・リース契約に当たらないものまで一律に対象としない。",
        uncertain: "契約の実質、担保価値、通知の有無等により対象性・議決権・権利変更範囲が変わるため、個別案件で確認が必要である。",
        sourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026", "source-meti-early-business-rehabilitation-working-group-report-2026"]
      },
      {
        id: "early-rehab-stay-confidentiality-labor",
        title: "一時停止・非公開性・労働組合等への通知をどう運用するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "対象債権者に対する一時停止要請・弁済制限を管理しつつ、手続開始時の公示をしない非公開性を前提に情報管理する。他方、施行規則が定める労働組合等への通知など必要な情報提供は別途履行する。",
        exception: "非公開手続であっても、上場会社の適時開示その他の法令・契約上の開示義務まで当然に免除されるわけではない。",
        uncertain: "対外公表のタイミングやステークホルダー対応は会社属性・契約・市場規則等に左右される。",
        sourceIds: ["source-early-business-rehabilitation-act-2025", "source-meti-early-business-rehabilitation-rules-qa-2026"]
      },
      {
        id: "early-rehab-predip-followon",
        title: "プレDIPファイナンスと後続手続をどう設計するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "早期事業再生中の新規資金は対象債権・一時停止要請との関係を法令・Q&Aで確認し、後に民事再生・会社更生へ移行した場合の取扱いまで含めて融資条件と担保を設計する。",
        exception: "先行する準則型私的整理中のプレDIPと純粋私的整理中のプレDIPでは、早期事業再生手続での例外弁済の扱いが同一ではない。",
        uncertain: "施行後の案件で、新規資金供給をどの程度促進できるか、後続法的整理での評価を含め実務形成を追う必要がある。",
        sourceIds: ["source-meti-early-business-rehabilitation-rules-qa-2026", "source-meti-early-business-rehabilitation-working-group-report-2026"]
      }
    ],
    sourceIds: [
      "source-early-business-rehabilitation-act-2025",
      "source-meti-early-business-rehabilitation-rules-qa-2026",
      "source-meti-early-business-rehabilitation-working-group-report-2026",
      "source-fsa-early-business-rehabilitation-financial-rules-2026"
    ],
    practicalImpacts: ["事業再生手続の選択", "金融債権者・対象債権の特定", "担保評価・議決権算定", "ファイナンス・リース契約", "信用保証協会付き融資", "一時停止・弁済管理", "労働組合等への通知", "プレDIPファイナンス", "上場会社の情報管理・適時開示"]
  }
]);

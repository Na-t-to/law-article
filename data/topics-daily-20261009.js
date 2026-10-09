// Verified October 9 daily batch. Guards preserve canonical records and reject stale replacements.
(() => {
  const current = window.TOPIC_DATA || [];
  const additions = [
  {
    "slug": "fsa-penalty-hearing-digitalization",
    "title": "課徴金審判手続のデジタル化（金商法・公認会計士法）",
    "categories": [
      "金融商品取引・開示・IR",
      "危機管理・コンプライアンス",
      "AI・デジタル"
    ],
    "summary": "2026年11月30日施行の実施府令を基礎に、金融商品取引法・公認会計士法の課徴金審判における電子申立て、送達・記録、オンライン審問と経過措置を整理する。",
    "lastUpdated": "2026-10-09",
    "lastVerified": "2026-10-09",
    "isNew": true,
    "overview": [
      "金融庁は2026年9月16日、2023年法律第79号・第80号の一部施行に伴う課徴金審判手続の実施府令を公布し、2026年11月30日から施行すると公表した。",
      "対象は金商法・公認会計士法の課徴金納付命令に係る審判手続であり、違反行為や課徴金算定を扱う実体規制の改正とは分けて管理する。",
      "電子申立てと送達の届出・通知、オンライン審問の実施条件、各決定の時期による経過措置を、案件対応の準備事項として確認する。"
    ],
    "currentSummary": {
      "facts": [
        "両府令の施行日は2026年11月30日。今回の実施府令は2023年改正法の特定部分に対応し、2026年の金商法改正全体の施行日を示すものではない。",
        "電子調書、電子申立て等、電磁的記録の送達・複写、ウェブ会議による審問の実施細則が整備された。",
        "インターネットを利用した送達では、届出済みメールアドレスへの通知と、電子情報処理組織による送達の仕組みを区別する。",
        "経過措置は開始決定記録等と納付命令等の決定記録を分け、対象規定ごとに施行日前後の決定日等を基準にする。"
      ],
      "interpretations": [
        "施行対応は書類を電子化するだけでは足りず、案件ごとの適用規定、代理人との受信・提出の分担、オンライン審問を利用できる条件を別々に確認する整理が有用である。"
      ],
      "implications": [
        "継続案件では開始決定・納付命令等の決定・変更処分の日付を整理し、附則2条の対象規定を個別に照合する。",
        "電子申立てを利用する場合は、送達に関する届出、通知先メールアドレスと受信確認担当、電子記録を確認する手順を代理人と確認する。",
        "オンライン審問を希望する場合は、同席者・周囲の状況・通信環境を事前に確認し、場所の適否について審判官の判断を受けられるよう準備する。"
      ],
      "uncertain": [
        "通知不着への対応とオンライン審問時の周囲確認は、金融庁の回答上、個別事例に即して判断される。一律の補助連絡や画角確認手順を確定済み要件として扱わない。"
      ]
    },
    "issues": [
      {
        "id": "fsa-hearing-commencement-transitions",
        "title": "11月30日の施行と経過措置を、どの手続・決定ごとに判断するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "両府令は2026年11月30日施行。附則2条1項は、開始決定記録とその引用に関する指定規定を施行日以後の審判手続開始決定に適用する。同条2項は、納付命令等の決定記録に関する指定規定を当該決定の日で区分し、金商法では課徴金額等の変更処分も区分する。",
        "exception": "施行日前の対象決定・処分については、それぞれ指定された規定につき従前の例による。開始日だけで既存事件の全手続を旧ルールと扱う規定ではない。",
        "uncertain": "個別事件では、開始決定と納付命令等の決定・変更処分の各日付を確認し、対象規定ごとに経過措置を照合する。",
        "sourceIds": [
          "source-fsa-penalty-hearing-digital-final-20260916",
          "source-fsa-penalty-hearing-fiea-ordinance-20260916",
          "source-fsa-penalty-hearing-cpa-ordinance-20260916"
        ]
      },
      {
        "id": "fsa-hearing-electronic-filing-service-records",
        "title": "電子申立て・インターネット送達・メール通知をどう区別するか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "電子申立て等は、電子情報処理組織を通じ必要事項を入力する方式で行い、原則としてその際にインターネット送達を受けるための届出も行う。電磁的記録の送達に伴う通知は届け出たメールアドレスに送信する。電子記録の複写には、利用者端末のファイルへの記録のほか、金融庁設置端末から利用者の記録媒体へ記録する方法がある。",
        "exception": "既に送達に関する届出がある場合は、電子申立ての際の重複届出は不要。メール通知と送達の仕組みを混同せず、書類の送達に関する規定や記録媒体による複写も区別する。",
        "uncertain": "金融庁は、メール通知の不着への対応を個別事例に即して判断すると回答している。電話での補助連絡や受領確認ボタンを一律に義務付けたものではない。",
        "sourceIds": [
          "source-fsa-penalty-hearing-fiea-ordinance-20260916",
          "source-fsa-penalty-hearing-cpa-ordinance-20260916",
          "source-fsa-penalty-hearing-digital-comments-20260916"
        ]
      },
      {
        "id": "fsa-hearing-video-examination-safeguards",
        "title": "オンライン審問の利用と参加場所にはどの条件があるか",
        "status": "authoritative",
        "stage": "enacted",
        "views": [],
        "conclusion": "ウェブ会議による参考人・被審人審問は、法定の場合で審判官が相当と認めるときに限られる。府令は指定職員・被審人等の意見聴取、審判官が相当と認める場所、陳述に不当な影響を与えるおそれがある者が在席しないこと等を定める。",
        "exception": "指定職員・被審人側との同席制限には法定の場合に例外がある。適当な場所を確保できない場合は、金融庁は原則どおり審判廷で審問を行うべきと説明している。",
        "uncertain": "周囲の状況確認は個別事例ごとに審判官が適当と認める方法で行う。360度の撮影確認や専用ブース設置が一律に義務付けられたわけではない。",
        "sourceIds": [
          "source-fsa-penalty-hearing-fiea-ordinance-20260916",
          "source-fsa-penalty-hearing-cpa-ordinance-20260916",
          "source-fsa-penalty-hearing-digital-comments-20260916"
        ]
      }
    ],
    "sourceIds": [
      "source-fsa-penalty-hearing-digital-final-20260916",
      "source-fsa-penalty-hearing-digital-comments-20260916",
      "source-fsa-penalty-hearing-fiea-ordinance-20260916",
      "source-fsa-penalty-hearing-cpa-ordinance-20260916"
    ],
    "referenceArticleIds": [
      "article-fsa-penalty-hearing-digital-final-20260916"
    ],
    "practicalImpacts": [
      "11月30日施行に向けた継続案件の経過措置確認",
      "電子申立て・送達通知の受信と担当分担",
      "電子記録の複写・証拠提出方法の確認",
      "オンライン審問の場所・同席者・通信環境の準備"
    ]
  }
];
  const replacements = [];
  const ids = new Set(current.map(item => item.slug));
  for (const item of additions) {
    if (ids.has(item.slug)) throw new Error(`Duplicate topics ID: ${item.slug}`);
    ids.add(item.slug);
  }
  const patched = new Map();
  for (const patch of replacements) {
    const actual = current.find(item => item.slug === patch.id);
    if (!actual || JSON.stringify(actual) !== JSON.stringify(patch.expected)) throw new Error(`Stale topics replacement: ${patch.id}`);
    if (patched.has(patch.id)) throw new Error(`Duplicate topics replacement: ${patch.id}`);
    patched.set(patch.id, patch.value);
  }
  window.TOPIC_DATA = [...current.map(item => patched.get(item.slug) || item), ...additions];
})();

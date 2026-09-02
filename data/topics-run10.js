window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).concat([
  {
    slug: "sustainability-disclosure-ssbj",
    title: "SSBJ基準・サステナビリティ開示",
    categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス"],
    summary: "SSBJ基準の法定開示への段階適用、温室効果ガス開示の現行基準、Scope3の責任・サプライチェーン法務を一次資料と実務解説から追う。",
    lastUpdated: "2026-09-02",
    lastVerified: "2026-09-02",
    isNew: true,
    overview: [
      "金融庁は2026年2月、プライム市場の一定規模以上の上場会社にSSBJ基準準拠のサステナビリティ情報を有価証券報告書等で開示する制度を確定しました。",
      "SSBJ基準自体もISSB基準の改訂を受けて更新されるため、適用時期だけでなく現行基準と改訂履歴を追う必要があります。",
      "とくにScope3はサプライチェーン全体から情報を集めるため、開示責任だけでなく独禁法、取適法、営業秘密、契約・データ管理へ実務が広がります。"
    ],
    currentSummary: {
      facts: [
        "プライム市場上場会社のうち平均時価総額1兆円以上の会社にSSBJ基準準拠の開示が義務付けられ、平均時価総額は直前事業年度末とその前4事業年度末の時価総額の平均で判定する。",
        "原則は2028年3月31日以後終了事業年度から適用し、平均時価総額3兆円以上の会社は2027年3月31日以後終了事業年度から前倒しで適用される。",
        "適用開始年度と翌年度には二段階開示が認められ、将来情報・Scope3定量情報には推論過程等と社内開示手続の記載が求められる。",
        "SSBJは2026年3月、ISSBの2025年12月改訂を受けて適用基準・一般開示基準・気候関連開示基準を改正した。"
      ],
      interpretations: [
        "SSBJ対応はサステナビリティ報告だけの作業ではなく、有価証券報告書の作成・レビュー・証拠化を含む開示統制の問題として扱う必要がある。",
        "Scope3の情報収集では、取引先への要求内容や事業者間のデータ共有が独禁法・取適法・営業秘密の問題を生み得るため、算定フローと契約・法務レビューを分断しない方がよい。"
      ],
      implications: [
        "自社の平均時価総額から適用時期を判定し、二段階開示を使うかを含めて開示工程を設計する。",
        "Scope3・将来情報の算定根拠、推論過程、レビュー手続を後から説明できる形で記録する。",
        "サプライヤーから取得する排出量データの目的・範囲・利用・秘密保持を契約と運用で整理する。"
      ],
      uncertain: [
        "SSBJ基準は国際基準の改訂に応じて更新されるため、適用開始までの追加改訂を継続確認する必要がある。",
        "Scope3の具体的な開示実務やセーフハーバーの運用は、制度適用後の実務蓄積を確認する必要がある。"
      ]
    },
    issues: [
      { id: "ssbj-applicability", title: "どの会社にいつSSBJ基準が義務化されるか", status: "段階適用確定", statusTone: "confirmed", conclusion: "プライム市場の平均時価総額1兆円以上を対象とし、原則2028年3月31日以後終了事業年度、3兆円以上は2027年3月31日以後終了事業年度から適用する。", exception: "上場後5事業年度を経過していない場合は、経過した事業年度末の平均で判定する。", uncertain: "今後の制度変更や追加対象拡大は継続確認する。", sourceIds: ["source-fsa-ssbj-mandatory-2026"] },
      { id: "ssbj-two-step-disclosure", title: "二段階開示をどう使うか", status: "経過措置あり", statusTone: "watch", conclusion: "適用開始年度と翌年度は、所定のサステナビリティ情報を後から訂正報告書で提出する二段階開示が可能。", exception: "提出期限や開示対象は改正府令・金融庁の考え方に従う。", uncertain: "各社が実際にどの程度利用するかは適用開始後の実務を見る必要がある。", sourceIds: ["source-fsa-ssbj-mandatory-2026"] },
      { id: "ssbj-scope3-safe-harbor", title: "Scope3・将来情報の責任リスクをどう抑えるか", status: "ガイドライン整備", statusTone: "confirmed", conclusion: "推論過程や差異要因、社内開示手続等を合理的な範囲で具体的に記載することが、Scope3定量情報の虚偽記載等の責任評価で重要になる。", exception: "具体的記載をすれば常に免責されるという制度ではなく、事実関係ごとの評価が必要。", uncertain: "実際の責任判断の蓄積は今後確認が必要。", sourceIds: ["source-fsa-ssbj-mandatory-2026"] },
      { id: "ssbj-current-standard", title: "適用すべきSSBJ基準の現行版は何か", status: "現行基準あり", statusTone: "watch", conclusion: "2026年3月にはGHG排出開示について適用・一般・気候関連の3基準が改正されており、基準本文と改訂履歴を確認する。", exception: "国際基準の変更に応じて今後も改訂され得る。", uncertain: "追加改訂の有無を継続監視する。", sourceIds: ["source-ssbj-ghg-amendment-2026"] },
      { id: "ssbj-scope3-supplychain", title: "Scope3の取引先データ収集をどう設計するか", status: "実務対応", statusTone: "review", conclusion: "排出量データの取得・共有は、必要性と範囲を限定し、競争上重要な情報、取引条件、営業秘密の扱いを含めて法務レビューする。", exception: "環境目的であることだけで競争法上の問題が消えるわけではない。", uncertain: "業界別のデータ共有スキームや取引実態によって評価が変わる。", sourceIds: ["source-fsa-ssbj-mandatory-2026", "source-ssbj-ghg-amendment-2026"] }
    ],
    sourceIds: ["source-fsa-ssbj-mandatory-2026", "source-ssbj-ghg-amendment-2026"],
    practicalImpacts: ["有価証券報告書の開示統制", "SSBJ適用判定・開示工程", "Scope3算定・証拠化", "サプライヤー情報収集", "データ共有・営業秘密管理", "取適法・独禁法レビュー"]
  },
  {
    slug: "companies-act-review-shareholders",
    title: "会社法制見直し・株主総会／実質株主",
    categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
    summary: "会社法制（株式・株主総会等関係）の見直しを、中間試案を基礎にバーチャル総会、実質株主確認、株主提案、開示合理化など企業実務への影響から追う。",
    lastUpdated: "2026-09-02",
    lastVerified: "2026-09-02",
    isNew: true,
    overview: [
      "法制審議会では、株式発行、株主総会、企業統治を広く対象に次期会社法制の見直しが進んでいます。",
      "2026年4月公表の中間試案には、バーチャルオンリー株主総会、実質株主確認制度、株主総会のデジタル化・会議体規律、株主提案権、事業報告等と有価証券報告書の開示合理化などが含まれます。",
      "まだ成立法ではないため、現行実務と将来の制度案を混同せず、総会・IR・株主管理に影響する論点を継続的に追う棚とします。"
    ],
    currentSummary: {
      facts: [
        "中間試案は、株式の発行の在り方、株主総会の在り方、企業統治その他の規律を3部構成で検討している。",
        "株主総会関係では、バーチャルオンリー株主総会、実質株主確認制度、招集・議決権行使のデジタル化、会議体規律、株主提案権の見直しが提示されている。",
        "企業統治等では、指名委員会等設置会社、責任限定契約、事業報告等と有価証券報告書の開示合理化が検討対象に含まれる。"
      ],
      interpretations: [
        "実質株主確認制度は、名義株主の管理だけでなく、会社と投資家の対話や議決権行使の前提を変え得るため、総務・IR・法務の共同論点になる。",
        "総会前の有価証券報告書開示と会社法上の事業報告等の合理化は、開示書類を別々に作る現行工程そのものを見直す可能性がある。",
        "バーチャル総会や会議体規律の見直しは、定款・招集・通信障害対応・決議の瑕疵リスクを含めて追う必要がある。"
      ],
      implications: [
        "総会運営、定款、招集通知、電子提供、議決権行使の現行フローを棚卸しし、制度案が確定した際の変更箇所を把握しておく。",
        "実質株主への照会・通知・エンゲージメントの現行運用を整理し、法改正案とのギャップを追う。",
        "有価証券報告書の総会前開示と事業報告等の作成工程を、法務・IR・経理・監査で横断して確認する。"
      ],
      uncertain: [
        "中間試案は検討段階であり、最終要綱、法案、成立法の内容は確定していない。",
        "各制度の施行時期・経過措置・法務省令レベルの詳細は今後の審議を継続確認する必要がある。"
      ]
    },
    issues: [
      { id: "companies-act-virtual-meetings", title: "バーチャル株主総会をどう制度化するか", status: "中間試案", statusTone: "watch", conclusion: "バーチャルオンリー株主総会の実施要件、手続、決議取消しの特則、延期・続行等を会社法上の恒久制度として検討している。", exception: "具体的な要件や対象会社は最終案で変更され得る。", uncertain: "成立法・施行時期は未確定。", sourceIds: ["source-moj-companies-act-interim-2026"] },
      { id: "companies-act-beneficial-shareholders", title: "実質株主をどう確認・通知させるか", status: "中間試案", statusTone: "watch", conclusion: "会社から実質株主を確認する制度と、株主側から会社への通知を義務付ける制度の双方が検討されている。", exception: "確認対象、通知事項、違反時の効果などは制度案の確定を待つ。", uncertain: "最終要綱での制度設計は未確定。", sourceIds: ["source-moj-companies-act-interim-2026"] },
      { id: "companies-act-meeting-body", title: "株主総会を『会議体』としてどこまで合理化するか", status: "中間試案", statusTone: "watch", conclusion: "事前の議決権行使がある場合の決議や書面決議など、総会・社債権者集会の手続合理化が検討されている。", exception: "株主権保護との調整が必要。", uncertain: "最終案の要件・効果は未確定。", sourceIds: ["source-moj-companies-act-interim-2026"] },
      { id: "companies-act-shareholder-proposals", title: "株主提案権の要件をどう見直すか", status: "中間試案", statusTone: "watch", conclusion: "議決権数要件や行使期限の見直しが検討されている。", exception: "権利行使機会と会社側の総会準備負担の調整が必要。", uncertain: "採用される案は未確定。", sourceIds: ["source-moj-companies-act-interim-2026"] },
      { id: "companies-act-disclosure-rationalization", title: "事業報告等と有価証券報告書をどう合理化するか", status: "中間試案", statusTone: "watch", conclusion: "総会前の有価証券報告書開示を踏まえ、会社法上の事業報告等と金商法上の開示を合理化する案が検討されている。", exception: "監査・開示責任・総会時期との整合が必要。", uncertain: "一本化・省略の最終的な範囲は未確定。", sourceIds: ["source-moj-companies-act-interim-2026"] }
    ],
    sourceIds: ["source-moj-companies-act-interim-2026"],
    practicalImpacts: ["株主総会運営・定款", "招集通知・電子提供", "実質株主の確認・エンゲージメント", "株主提案対応", "総会前有報開示", "事業報告等の作成・監査工程"]
  }
]);

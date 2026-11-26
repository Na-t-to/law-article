(() => {
  const additions = [
  {
    "id": "article-ppc-apppi-concrete-subrules-20261125",
    "title": "顔特徴データの取扱い、事前に本人通知か掲示：個人情報保護法の下位ルール整備",
    "publisher": "個人情報保護委員会",
    "author": "個人情報保護委員会",
    "publishedAt": "2026-11-25",
    "collectedAt": "2026-11-26",
    "url": "https://www.ppc.go.jp/files/pdf/261125_gutaitekinanaiyounitsuite_1.pdf",
    "sourceType": "primary",
    "sourceLabel": "一次資料・個人情報保護委員会の決定資料",
    "status": "adopted",
    "summary": "個人情報保護委員会は11月25日、改正個人情報保護法（令和8年法律第56号）の政令・規則に盛り込む内容の第1弾を決めた。今回の対象を顔特徴データに絞り、事前周知の方法と追加事項を示した。同意の例外、16歳未満の者の利用停止等請求の例外も具体化した。委員会が決めたのは下位ルールの内容に関する方針で、政令・規則の公布ではない。",
    "whyImportant": [
      "顔特徴データの範囲と周知方法（決定資料 p.10–11）：顔画像そのもの一般ではなく、個人を識別できるように変換した顔特徴データを今回の政令の対象とする案。原則は本人への事前通知、または本人から直接撮影等で取得する場合に、撮影前に本人の来訪が想定される場所での目立つ掲示。16歳未満の場合は、原則として法定代理人が周知の相手になる。店の入口の掲示にQRコードを載せ、詳細をウェブに置く方法が例示されている。",
      "例外的な周知（決定資料 p.11）：通常の通知・掲示の両方が難しいことが前提。生命・身体・財産の保護に必要なときは、本人等が容易に認識できる別の方法を認める方針。16歳未満の本人が法定代理人の同伴なしに来訪する想定の場所で事業者が自ら撮影等する場合は、法定代理人が事前に認識できる期間と周知方法を求める案。",
      "掲示や通知に盛り込む内容（決定資料 p.12）：法律が挙げる利用目的等に加え、取扱いが相当といえる理由、方法・期間、個人データに含まれる場合の安全管理措置（周知が安全管理を妨げるおそれがあるものは除く）、利用停止等請求への対応、苦情の窓口等を追加する案。取扱期間の長さを一律に定めたものではない。",
      "同意の例外と子供の利用停止（決定資料 p.4、p.7）：本人が契約を結ぼうとしていることが明らかで、その締結に必要不可欠な場合などを限定列挙する案。16歳未満の者の利用停止等請求について、法律で具体的に列挙された11の例外に準ずる例外を政令で追加しない方針も示す。",
      "次の確認点（11月25日更新の工程表）：2027年1月下旬は政令・規則案を扱う目安で、施行日や意見募集期限ではない。11月26日の確認時点では今回の細目について意見募集の開始は確認できていない。顔認証を使う事業者は、撮影前に利用者が通る場所、周知すべき処理・取扱期間と停止請求の窓口を洗い出し、最終ルールと照合する。"
    ],
    "audience": [
      "企業法務",
      "個人情報保護・プライバシー担当",
      "店舗・施設の顔認証システム担当"
    ],
    "audienceReason": "9月段階の方向性に続き、実際にどこで何を知らせるかという運用設計を、未確定の細目と区別して点検できる。",
    "categories": [
      "個人情報",
      "危機管理・コンプライアンス"
    ],
    "relatedTopics": [
      "personal-information-protection-2026-amendment"
    ],
    "relatedIssues": [
      "privacy-2026-biometric",
      "privacy-2026-children",
      "privacy-2026-consent-exceptions"
    ],
    "primarySourceIds": [
      "source-ppc-apppi-concrete-subrules-20261125",
      "source-ppc-apppi-rulemaking-schedule-20261125"
    ],
    "reformEventId": "privacy-law-2026-amendment",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": [
      "source-ppc-apppi-concrete-subrules-20261125"
    ],
    "whatChanged": "9月の基本的な考え方に続く11月25日の委員会決定を収録。顔特徴データの事前周知と限定例外の内容を整理し、改正法の施行時期・テーマ確認日は変更しない。"
  }
];
  const list = window.ARTICLE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        list.some(x => x.id !== item.id && x.url === item.url)) {
      throw new Error("Conflicting November 25 PPC subrules record: " + item.id);
    }
  }
  window.ARTICLE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();

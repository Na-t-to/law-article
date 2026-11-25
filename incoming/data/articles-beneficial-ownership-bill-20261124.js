(() => {
  const additions = [
  {
    "id": "article-shugiin-beneficial-ownership-bill-20261124",
    "title": "実質的支配者の届出法案が衆院通過：対象の既存法人も施行日から30日以内",
    "publisher": "衆議院",
    "author": "衆議院",
    "publishedAt": "2026-11-24",
    "collectedAt": "2026-11-25",
    "url": "https://www.shugiin.go.jp/internet/itdb_gian.nsf/html/gian/keika/1DE36DE.htm",
    "sourceType": "primary",
    "sourceLabel": "一次資料・議案審議経過（11月24日議決）／法律案",
    "status": "adopted",
    "summary": "第222回国会の閣法第19号（実質的支配者の情報を把握・届出する法案）と第20号（関係法律の整備法案）は、11月24日に衆議院本会議で可決され、同日に参議院が受理した。第19号の案では、施行時に既に存在する対象法人等も、本則の施行日から30日以内に法務大臣へ初回届出を行う。11月25日確認時点で成立・公布は確認されておらず、具体的な施行日は未確定。",
    "whyImportant": [
      "対象と届出事項（第2・3・5条）：法案が定義する上場会社や国・地方公共団体等は除外され、一定の外国法人・団体、投資事業有限責任組合、有限責任事業組合も含む。対象法人等は支配者の氏名・名称、住所、該当区分等を把握して最新に保つ措置を取り、届出に証明情報等を添える案。法務大臣が国の機関から所定の方法で取得できる場合は証明情報等の提供は不要となる。",
      "30日の起算日（第5・6条、附則第1・2条）：既存法人等の初回は本則施行日、新設法人等の初回は区分に応じた成立日等、記録済み事項の変更・誤りは原則として知った日。別の政令指定日から本則施行前の届出も可能とする案で、先行届出後に施行前の変更・誤りを知った場合には本則施行日が起算日となる。",
      "施行時期（附則第1条）：本則は公布から1年6か月以内の政令指定日とする案。先行届出に関する規定は公布から1年以内の別の政令指定日とする。今すぐ届出が必要という意味ではなく、2027年施行とも確定していない。",
      "届出と取引時確認の違い（閣法第20号第7条、閣法第19号第10～12条）：整備法案は特定事業者による犯収法上の取引時確認を別途見直す。情報ファイルは一般公開の台帳ではない。特定事業者による照会は犯収法上の措置に必要な場合に限られ、対象法人等の事前同意が原則（一定の金融機関等は例外）。",
      "実務上の示唆：施行後に短い期限で初回届出が必要となり得るため、対象となり得る法人・組合ごとに、支配者情報の根拠、担当部署、変更を把握する経路を整理しておく。届出の様式や受付日は、成立後の法令と案内を確認する。"
    ],
    "audience": [
      "企業法務",
      "総務・グループ会社管理",
      "コンプライアンス担当",
      "投資事業有限責任組合・有限責任事業組合の運営担当"
    ],
    "audienceReason": "取引相手方の本人確認とは別に、自社やグループの対象法人等が自ら届け出る案。成立前に対象の見当を付け、情報の把握・更新を誰が担うか考えるため。",
    "categories": [
      "危機管理・コンプライアンス",
      "会社法・ガバナンス"
    ],
    "relatedTopics": [
      "aml-kyc-criminal-proceeds"
    ],
    "relatedIssues": [],
    "primarySourceIds": [
      "source-shugiin-222-bill-19-progress-20261124",
      "source-shugiin-222-bill-19-text-20261023",
      "source-shugiin-222-bill-20-progress-20261124",
      "source-shugiin-222-bill-20-text-20261023"
    ],
    "reformEventId": "beneficial-ownership-reporting-law-2026",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": [
      "source-shugiin-222-bill-19-progress-20261124",
      "source-shugiin-222-bill-20-progress-20261124"
    ],
    "whatChanged": "第222回国会の閣法第19・20号の衆院通過を収録。既存法人等の初回届出の起算日を確認し、本則施行は相対期日の法案として別イベントに整理。"
  }
];
  const list = window.ARTICLE_DATA || [];
  for (const item of additions) {
    const matches = list.filter(x => x.id === item.id);
    if (matches.length > 1 || (matches.length === 1 && JSON.stringify(matches[0]) !== JSON.stringify(item)) ||
        (item.url && list.some(x => x.id !== item.id && x.url === item.url)) ||
        (item.lawId && list.some(x => x.id !== item.id && x.lawId === item.lawId))) {
      throw new Error("Conflicting beneficial ownership record: " + item.id);
    }
  }
  window.ARTICLE_DATA = [...list, ...additions.filter(item => !list.some(x => x.id === item.id))];
})();

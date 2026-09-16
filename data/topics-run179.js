(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const companyTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "companies-act-review-shareholders");
  if (companyTopic) {
    const round1 = "source-moj-company-law-outline-round1-2026";
    const round3 = "source-moj-company-law-outline-round3-2026";
    companyTopic.lastUpdated = "2026-09-16";
    companyTopic.lastVerified = "2026-09-16";
    companyTopic.sourceIds = addUnique(addUnique(companyTopic.sourceIds, round1), round3);
    companyTopic.overview = addUnique(
      companyTopic.overview,
      "中間試案へのパブリックコメントと参考人意見を経て、2026年6月24日の第15回会議から要綱案の取りまとめに向けた検討へ移行し、8月26日の第17回会議まで複数回にわたり各論点の案が修正・具体化されています。現時点では要綱・法案・成立法ではありません。"
    );
    companyTopic.currentSummary = companyTopic.currentSummary || {};
    companyTopic.currentSummary.facts = addUnique(
      companyTopic.currentSummary.facts,
      "2026年6月24日の第15回会議から、中間試案へのパブリックコメントと参考人意見を踏まえた『要綱案の取りまとめに向けた検討』が始まり、株式交付・現物出資、バーチャル株主総会、実質株主確認制度について中間試案からの修正を含む提案が示された。"
    );
    companyTopic.currentSummary.facts = addUnique(
      companyTopic.currentSummary.facts,
      "2026年8月26日の第17回会議では、調査者・検査役、指名委員会等設置会社、責任限定契約、事業報告等と有価証券報告書の開示合理化が要綱案取りまとめに向けて審議された。"
    );
    companyTopic.currentSummary.interpretations = addUnique(
      companyTopic.currentSummary.interpretations,
      "2026年3月の中間試案だけでは現在の検討状況を十分に表さないため、パブリックコメント後にどの選択肢が採用・修正・追加されたかを部会資料13以降で追う必要がある。"
    );
    companyTopic.currentSummary.implications = addUnique(
      companyTopic.currentSummary.implications,
      "上場会社の法務・総務・IRは、現行法対応と将来改正を分けたうえで、バーチャル総会の通信障害対応、実質株主確認・議決権停止、事業報告等と有報の開示合理化について社内工程への影響を継続確認する。"
    );
    companyTopic.currentSummary.uncertain = addUnique(
      companyTopic.currentSummary.uncertain,
      "要綱案取りまとめに向けた検討は継続中であり、部会資料13～15の提案は最終的な要綱・法案ではない。今後の部会審議で内容が変更され得る。"
    );

    const issueById = new Map((companyTopic.issues || []).map((issue) => [issue && issue.id, issue]));
    const virtual = issueById.get("companies-act-virtual-meetings");
    if (virtual) {
      virtual.status = "pending";
      virtual.stage = "draft";
      virtual.sourceIds = addUnique(virtual.sourceIds, round1);
      virtual.conclusion = "バーチャルオンリー株主総会の恒久制度化に加え、パブリックコメント後の部会資料13では、通信障害時の決議取消しに関するセーフハーバーについて、合理的な通信障害対策を総会開始前に『用意』することを中心に評価する方向へ文言・趣旨が具体化されている。";
      virtual.uncertain = "セーフハーバーを含む制度案は要綱案取りまとめに向けた検討段階であり、最終的な条文、法務省令上の対策措置、施行時期は未確定である。";
    }
    const beneficial = issueById.get("companies-act-beneficial-shareholders");
    if (beneficial) {
      beneficial.status = "pending";
      beneficial.stage = "draft";
      beneficial.sourceIds = addUnique(beneficial.sourceIds, round1);
      beneficial.conclusion = "会社から実質株主を確認する制度と株主側から会社へ通知する制度の双方が検討されており、パブリックコメント後は、会社側確認ルートでも過料に加えて議決権停止措置を設ける案や、株主側通知義務違反の原因・帰責性に応じて議決権停止の対象・治癒時期を調整する案が示されている。";
      beneficial.uncertain = "議決権停止の具体的要件・手続・対象範囲はなお検討段階で、外国投資家・共同保有者を含む実務運用は最終的な要綱・法案を確認する必要がある。";
    }
    const disclosure = issueById.get("companies-act-disclosure-rationalization");
    if (disclosure) {
      disclosure.status = "pending";
      disclosure.stage = "draft";
      disclosure.sourceIds = addUnique(disclosure.sourceIds, round3);
      disclosure.uncertain = "2026年8月の第17回会議でも要綱案取りまとめに向けて検討が続いており、事業報告等と有価証券報告書の役割分担・具体的な合理化方法は未確定である。";
    }
  }

  const agmTopic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "agm-pre-disclosure-company-law-reform");
  if (agmTopic) {
    const round3 = "source-moj-company-law-outline-round3-2026";
    agmTopic.lastUpdated = "2026-09-16";
    agmTopic.lastVerified = "2026-09-16";
    agmTopic.sourceIds = addUnique(agmTopic.sourceIds, round3);
    agmTopic.currentSummary = agmTopic.currentSummary || {};
    agmTopic.currentSummary.facts = addUnique(
      agmTopic.currentSummary.facts,
      "2026年8月26日の会社法制部会第17回会議では、要綱案取りまとめに向けた論点として、事業報告等と有価証券報告書の開示合理化が改めて審議された。"
    );
    agmTopic.currentSummary.uncertain = addUnique(
      agmTopic.currentSummary.uncertain,
      "会社法上の事業報告等と金商法上の有価証券報告書の合理化はなお要綱案取りまとめに向けた検討段階で、現行の総会・開示義務を変更する確定ルールではない。"
    );
    const issue = (agmTopic.issues || []).find((item) => item && item.id === "agm-disclosure-rationalization");
    if (issue) issue.sourceIds = addUnique(issue.sourceIds, round3);
  }
})();

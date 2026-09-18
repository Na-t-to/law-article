(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "merger-control-antitrust");
  if (!topic) return;

  const sourceId = "source-jftc-oki-hitachi-atm-merger-20260918";
  const articleId = "article-jftc-oki-hitachi-atm-merger-20260918";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "公正取引委員会は2026年9月18日、沖電気工業と日立チャネルソリューションズによるATM・営業店端末等の事業統合について、当事会社が申し出た問題解消措置を前提に排除措置命令を行わない旨を通知した。ATMの紙幣入出金部・通帳記帳部では統合後シェア100％、ATM完成品では約65％となり、水平型に加えて投入物閉鎖を伴う垂直型、ATM監視受託業への排除を伴う混合型の競争懸念が認定された。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "問題解消措置は事業譲渡に限られない。競争機微情報へのアクセス・異動制限、既存取引先への供給確約、周辺サービスに必要な情報提供、モニタリングトラスティによる履行監視を、問題となる水平・垂直・混合型の競争懸念に対応付けて設計する余地がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "高シェアの水平統合や川上・川下をまたぐM&Aでは、シェアだけでなく代替供給者の供給余力、切替コスト、入力物への依存、周辺サービスに必要な仕様情報までDDし、必要な場合は供給・情報遮断・監視の措置と継続期間を案件条件へ織り込む。"
  );

  for (const issueId of ["mc-substantive-review", "mc-remedies", "mc-predeal-planning"]) {
    const issue = (topic.issues || []).find((item) => item?.id === issueId);
    if (issue) issue.sourceIds = appendUnique(issue.sourceIds, [sourceId]);
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "供給確約・情報遮断・モニタリングトラスティを組み合わせた企業結合問題解消措置"
  ]);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "securities-monitoring-2026");
  if (!topic) return;

  const sourceId = "source-fsa-etf-cash-setting-rule-20260918";
  const articleId = "article-fsa-etf-cash-setting-rule-20260918";
  const issueId = "secm-etf-cash-setting-2026";

  topic.lastUpdated = "2026-09-18";
  topic.lastVerified = "2026-09-18";
  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = appendTextUnique(
    topic.currentSummary.facts,
    "金融庁は2026年9月18日、現物拠出型ETFの構成銘柄のうち設定申込者の株券等所有割合が30％を超える銘柄に相当する部分を金銭で設定できるよう、投資信託及び投資法人に関する法律施行規則を改正し、同日施行した。"
  );
  topic.currentSummary.interpretations = appendTextUnique(
    topic.currentSummary.interpretations,
    "今回の改正は現物拠出型ETFの設定実務を柔軟化するものであり、公開買付制度そのものを改正するものではない。30％基準の対象銘柄に関する金銭設定の範囲・取得経費と、TOBその他の規制を分けて管理する必要がある。"
  );
  topic.currentSummary.implications = appendTextUnique(
    topic.currentSummary.implications,
    "現物拠出型ETFを扱う投資運用会社・指定参加者等は、30％基準の判定、金銭設定の処理、対象銘柄取得に必要な経費の拠出、約款・システム・オペレーションへの反映要否を施行済みルールに照らして確認する。"
  );

  topic.issues = Array.isArray(topic.issues) ? topic.issues : [];
  if (!topic.issues.some((issue) => issue?.id === issueId)) {
    topic.issues.push({
      id: issueId,
      title: "現物拠出型ETFの30％超構成銘柄を金銭で設定する場合をどう運用するか",
      status: "authoritative",
      stage: "effective",
      views: [],
      conclusion: "2026年9月18日施行の改正施行規則により、現物拠出型ETFの構成銘柄のうち設定申込者の株券等所有割合が30％を超える銘柄に相当する部分は金銭で設定できる。金融庁のパブリックコメント回答では、30％を超過する数量部分だけでなく当該銘柄に相当する部分を金銭のみで設定でき、当該銘柄を投資信託財産で取得するために必要な経費相当額も拠出させることが示されている。",
      exception: "この改正は現物拠出型ETFについて金銭設定できる場合を追加するものであり、公開買付制度その他の制度を改正するものではない。",
      uncertain: "個別商品の約款・システム・指定参加者との事務フローへどのように反映するかは、各商品の設計と関係者の運用に応じて確認する必要がある。",
      sourceIds: [sourceId]
    });
  }

  topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
  topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
  topic.practicalImpacts = appendUnique(topic.practicalImpacts, [
    "現物拠出型ETFの30％基準・金銭設定・取得経費のオペレーション確認"
  ]);
})();

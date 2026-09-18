(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const child = (window.TOPIC_DATA || []).find((item) => item?.slug === "child-sexual-violence-prevention-dbs");
  if (child) {
    const qaUpdateSource = "source-cfa-child-sexual-violence-qa-revision-20260918";
    const qaUpdateArticle = "article-cfa-child-sexual-violence-qa-revision-20260918";
    const laborArticle = "article-tmi-child-dbs-employment-measures-20251031";

    child.lastUpdated = "2026-09-19";
    child.lastVerified = "2026-09-19";
    child.currentSummary = child.currentSummary || {};
    child.currentSummary.facts = appendTextUnique(
      child.currentSummary.facts,
      "こども家庭庁は2026年9月2日の施行ガイドライン改訂等を踏まえ、9月18日にこども性暴力防止法Q&Aを改訂し、基礎編・応用編の複数設問を追加・更新した。"
    );
    child.currentSummary.interpretations = appendTextUnique(
      child.currentSummary.interpretations,
      "法上の防止措置義務があることだけで、内定取消・本採用拒否・配置転換・解雇・懲戒等の個別の雇用上の措置が当然に有効になるわけではない。措置ごとに労働関係法令上の要件も満たす必要がある。"
    );
    child.currentSummary.implications = appendTextUnique(
      child.currentSummary.implications,
      "施行準備では2026年9月2日改訂ガイドラインと9月18日改訂Q&Aを正本として、求人票・誓約書・内定通知・就業規則・情報管理規程等を最終確認する。"
    );

    for (const issueId of ["dbs-covered-business-work", "dbs-criminal-check", "dbs-prevention-employment", "dbs-information-management"]) {
      const issue = (child.issues || []).find((item) => item?.id === issueId);
      if (issue) issue.sourceIds = appendUnique(issue.sourceIds, [qaUpdateSource]);
    }

    child.sourceIds = appendUnique(child.sourceIds, [qaUpdateSource]);
    child.referenceArticleIds = appendUnique(child.referenceArticleIds, [qaUpdateArticle, laborArticle]);
    child.practicalImpacts = appendUnique(child.practicalImpacts, [
      "2026年9月改訂ガイドライン・Q&Aの施行前最終確認",
      "犯罪事実確認後の雇用措置と労働法上の要件確認"
    ]);
  }

  const whistle = (window.TOPIC_DATA || []).find((item) => item?.slug === "whistleblower-internal-reporting");
  if (whistle) {
    const articleId = "article-miyake-whistleblower-practical-20260428";
    whistle.lastUpdated = "2026-09-19";
    whistle.lastVerified = "2026-09-19";
    whistle.currentSummary = whistle.currentSummary || {};
    whistle.currentSummary.interpretations = appendTextUnique(
      whistle.currentSummary.interpretations,
      "2026年12月1日施行対応は内部通報規程だけで完結させず、受付・調査・是正・通報者保護・従事者の各マニュアル、業務委託契約・退職時誓約・秘密保持契約、対象者別研修まで同じ制度設計として突合するのが実務的である。"
    );
    whistle.currentSummary.implications = appendTextUnique(
      whistle.currentSummary.implications,
      "フリーランス等への窓口周知、通報者探索を避けるヒアリング手順、通報後の人事・契約上の措置のモニタリングを、規程改定と同時に運用へ落とす。"
    );
    whistle.referenceArticleIds = appendUnique(whistle.referenceArticleIds, [articleId]);
    whistle.practicalImpacts = appendUnique(whistle.practicalImpacts, [
      "内部通報規程・各種マニュアル・契約書の一体改訂",
      "フリーランス等への窓口周知と通報後モニタリング"
    ]);
  }
})();

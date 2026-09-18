(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };
  const replaceMatchingText = (items, predicate, replacement) => {
    const current = Array.isArray(items) ? items : [];
    const filtered = current.filter((item) => !predicate(String(item || "")));
    return filtered.includes(replacement) ? filtered : filtered.concat(replacement);
  };

  const critical = (window.TOPIC_DATA || []).find((item) => item?.slug === "cyber-countermeasures-critical-infrastructure");
  if (critical) {
    const safetySource = "source-nco-critical-infrastructure-safety-guideline-20260911";
    const commonSource = "source-nco-cyber-common-reporting-20260915";
    const fsaSource = "source-fsa-cyber-common-reporting-guidelines-20260918";
    const safetyArticle = "article-nco-critical-infrastructure-safety-guideline-20260911";
    const commonArticle = "article-nco-cyber-common-reporting-20260915";
    const fsaArticle = "article-fsa-cyber-common-reporting-guidelines-20260918";
    const amtArticle = "article-amt-critical-infrastructure-unified-standard-20260904";

    critical.lastUpdated = "2026-09-19";
    critical.lastVerified = "2026-09-19";
    critical.currentSummary = critical.currentSummary || {};
    critical.currentSummary.facts = appendTextUnique(
      critical.currentSummary.facts,
      "国家サイバー統括室は2026年9月11日、重要インフラ所管省庁等が安全基準等を策定・改定する際に参照する『重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン』を確定し、重要インフラ統一基準とともに2026年10月1日施行予定としている。"
    );
    critical.currentSummary.facts = appendTextUnique(
      critical.currentSummary.facts,
      "2026年9月15日には関係省庁の被害報告一元化申合せとDDoS・ランサムウェア共通様式が改定され、『その他サイバー攻撃等事案共通様式』が新設された。金融庁は9月18日、監督指針等のサイバー事案報告をこの共通様式へ移行し、10月1日から適用すると公表した。"
    );
    critical.currentSummary.interpretations = appendTextUnique(
      critical.currentSummary.interpretations,
      "2026年10月1日に向けた準備では、サイバー対処能力強化法の法定届出・報告、重要インフラ統一基準・安全基準等、関係省庁共通様式、所管業法・監督指針上の報告を別レイヤーとして整理し、同じインシデントから必要な報告先・期限・項目を引けるようにする必要がある。"
    );
    critical.currentSummary.implications = appendTextUnique(
      critical.currentSummary.implications,
      "10月1日までに、既存のインシデント報告票・エスカレーション表を共通様式と所管当局の運用へ突合し、DDoS・ランサムウェア以外のサイバー攻撃も含めて必要情報を初動から収集できるよう更新する。"
    );
    critical.currentSummary.uncertain = replaceMatchingText(
      critical.currentSummary.uncertain,
      (text) => text.includes("安全基準等策定ガイドライン") && text.includes("案"),
      "安全基準等策定ガイドライン自体は2026年9月11日に確定した。今後は、各重要インフラ所管省庁・業界団体が分野別の安全基準等へどのように反映し、実運用・監督で定着させるかを継続確認する必要がある。"
    );

    const unifiedIssue = (critical.issues || []).find((item) => item?.id === "cyber-critical-infrastructure-unified-standard");
    if (unifiedIssue) {
      unifiedIssue.sourceIds = appendUnique(unifiedIssue.sourceIds, [safetySource]);
      unifiedIssue.uncertain = "安全基準等策定ガイドライン自体は2026年9月11日に確定した。今後は、各重要インフラ所管省庁・業界団体による分野別の安全基準等への反映と運用を継続確認する。";
    }

    const reportingIssue = (critical.issues || []).find((item) => item?.id === "cyber-countermeasures-reporting");
    if (reportingIssue) {
      reportingIssue.sourceIds = appendUnique(reportingIssue.sourceIds, [commonSource, fsaSource]);
      reportingIssue.uncertain = "共通様式は報告実務を横断化するが、サイバー対処能力強化法、業法・監督指針、個人情報保護法等で報告主体・対象・期限・提出先が同一になるわけではない。対象制度ごとの要件と所管当局の最新運用を確認する。";
    }

    critical.sourceIds = appendUnique(critical.sourceIds, [safetySource, commonSource, fsaSource]);
    critical.referenceArticleIds = appendUnique(critical.referenceArticleIds, [safetyArticle, commonArticle, fsaArticle, amtArticle]);
    critical.practicalImpacts = appendUnique(critical.practicalImpacts, [
      "サイバー攻撃被害報告の共通様式・所管当局別報告フロー",
      "重要インフラ分野別安全基準等への反映確認"
    ]);
  }

  const supply = (window.TOPIC_DATA || []).find((item) => item?.slug === "cyber-supply-chain");
  if (supply) {
    const commonSource = "source-nco-cyber-common-reporting-20260915";
    const noandtArticle = "article-noandt-cyber-supply-chain-reporting-202508";

    supply.lastUpdated = "2026-09-19";
    supply.lastVerified = "2026-09-19";
    supply.currentSummary = supply.currentSummary || {};
    supply.currentSummary.interpretations = appendTextUnique(
      supply.currentSummary.interpretations,
      "サプライチェーン経由の事故では、再委託先まで含む情報取得ルートと、自社・委託先のどちらがどの当局・顧客へ何を報告するかを契約締結時から設計しておかないと、初動時に必要情報が上がらず報告が遅れやすい。"
    );
    supply.currentSummary.implications = appendTextUnique(
      supply.currentSummary.implications,
      "委託・再委託契約で、事故認知時の通知トリガー、共通様式へ転記できる情報項目、ログ・証拠の保存、顧客・当局向け報告への協力、報告主体間の役割分担を具体化する。"
    );

    for (const issueId of ["cyber-contract", "cyber-incident-chain"]) {
      const issue = (supply.issues || []).find((item) => item?.id === issueId);
      if (issue) issue.sourceIds = appendUnique(issue.sourceIds, [commonSource]);
    }

    supply.sourceIds = appendUnique(supply.sourceIds, [commonSource]);
    supply.referenceArticleIds = appendUnique(supply.referenceArticleIds, [noandtArticle]);
    supply.practicalImpacts = appendUnique(supply.practicalImpacts, ["再委託先を含む事故報告・情報共有の契約設計"]);
  }
})();

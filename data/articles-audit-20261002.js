// Structural audit repairs: preserve published IDs and existing update prose.
// Run in the articles group after all earlier merge/cleanup deltas.
(() => {
  if (window.__LAW_INDEX_REFERENCE_AUDIT_20261002__) return;
  window.__LAW_INDEX_REFERENCE_AUDIT_20261002__ = true;

  // Established cleanup/translation aliases. The original publisher URL and title
  // remain available to the renderer; canonical article cards are not duplicated.
  const articleAliases = {
  "article-sangiin-mobile-law-2026": "article-sangiin-mobile-id-amendment-2026",
  "article-ushijima-mobile-law-2026": "article-ushijima-mobile-id-amendment-2026",
  "article-tmi-aml-identity-verification-2026-03-30": "article-tmi-aml-identity-2026",
  "article-meti-corporate-takeover-guidelines-qa-2026": "article-meti-acquisition-guidelines-qa-2026",
  "article-not-corporate-takeover-guidelines-qa-2026": "article-not-acquisition-guidelines-qa-2026",
  "article-tmi-aml-identity-verification-2026": "article-tmi-aml-identity-2026",
  "article-fsa-bank-investment-subsidiary-2026": "article-fsa-bank-business-scope-reform-2026",
  "article-tmi-bank-business-succession-2026": "article-tmi-bank-subsidiary-business-succession-2026",
  "article-jftc-toridoll-deduction-2026": "article-jftc-toridoll-price-reduction-2026",
  "article-caa-digital-tokusho-interim-final-2026": "article-caa-digital-tokusho-interim-2026",
  "article-caa-consumer-contract-interim-final-2026": "article-caa-consumer-contract-interim-draft-2026",
  "article-tmi-securities-monitoring-policy-2026-part1": "article-tmi-securities-monitoring-2026-1",
  "article-tmi-securities-monitoring-policy-2026-part2": "article-tmi-securities-monitoring-2026-2",
  "article-sesc-monitoring-policy-20260731": "article-sesc-securities-monitoring-policy-2026",
  "article-sesc-monitoring-casebook-20260731": "article-sesc-securities-monitoring-cases-2026",
  "article-noandt-cyber-supply-chain-reporting-202508": "article-not-cyber-supply-chain-incident-reporting-2025",
  "article-meti-takeover-guideline-20230831": "article-meti-corporate-takeover-guidelines-2023",
  "article-noandt-security-clearance-hr-part2-20250319": "article-nagashima-security-clearance-hr-outsourcing-2025",
  "article-caa-digital-transactions-interim-20260910": "article-caa-digital-tokusho-interim-2026",
  "article-caa-consumer-contract-interim-20260910": "article-caa-consumer-contract-interim-draft-2026"
};
  const aliasMetadata = {
  "article-sangiin-mobile-law-2026": {
    "canonicalId": "article-sangiin-mobile-id-amendment-2026",
    "title": "携帯電話不正利用防止法・令和8年改正法案 議案審議情報・要旨",
    "url": "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221080221033.htm",
    "publisher": "参議院",
    "publishedAt": "2026-05-29"
  },
  "article-ushijima-mobile-law-2026": {
    "canonicalId": "article-ushijima-mobile-id-amendment-2026",
    "title": "携帯電話不正利用防止法　令和8年改正法の概要",
    "url": "https://www.ushijima-law.gr.jp/client-alert_seminar/client-alert/20260805identification/",
    "publisher": "牛島総合法律事務所",
    "publishedAt": "2026-08-05"
  },
  "article-tmi-aml-identity-verification-2026-03-30": {
    "canonicalId": "article-tmi-aml-identity-2026",
    "title": "【犯収法ブログ】犯罪収益移転防止法施行規則の改正による本人確認方法の厳格化について",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18168.html",
    "publisher": "TMI総合法律事務所",
    "publishedAt": "2026-03-30"
  },
  "article-meti-corporate-takeover-guidelines-qa-2026": {
    "canonicalId": "article-meti-acquisition-guidelines-qa-2026",
    "title": "「企業買収における行動指針」のポイント・Q&A等を策定しました",
    "url": "https://www.meti.go.jp/press/2026/07/20260730002.html",
    "publisher": "経済産業省",
    "publishedAt": "2026-07-30"
  },
  "article-not-corporate-takeover-guidelines-qa-2026": {
    "canonicalId": "article-not-acquisition-guidelines-qa-2026",
    "title": "「企業買収における行動指針」のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
    "url": "https://www.nagashima.com/publications/publication20260804-1/",
    "publisher": "長島・大野・常松法律事務所",
    "publishedAt": "2026-08-04"
  },
  "article-caa-digital-tokusho-interim-final-2026": {
    "canonicalId": "article-caa-digital-tokusho-interim-2026",
    "title": "デジタル取引・特定商取引法等検討会 中間取りまとめ",
    "url": "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005",
    "publisher": "消費者庁",
    "publishedAt": "2026-09-10"
  },
  "article-caa-consumer-contract-interim-final-2026": {
    "canonicalId": "article-caa-consumer-contract-interim-draft-2026",
    "title": "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
    "url": "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006",
    "publisher": "消費者庁",
    "publishedAt": "2026-09-10"
  },
  "article-tmi-securities-monitoring-policy-2026-part1": {
    "canonicalId": "article-tmi-securities-monitoring-2026-1",
    "title": "Key Areas of Focus in the SESC’s Securities Monitoring for Program Year 2026: An Overview of the SESC’s Basic Policy (Part 1)",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18778.html",
    "publisher": "TMI総合法律事務所",
    "publishedAt": "2026-09-09"
  },
  "article-tmi-securities-monitoring-policy-2026-part2": {
    "canonicalId": "article-tmi-securities-monitoring-2026-2",
    "title": "Key Areas of Focus in the SESC’s Securities Monitoring for Program Year 2026: An Overview of the SESC’s Basic Policy (Part 2)",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18779.html",
    "publisher": "TMI総合法律事務所",
    "publishedAt": "2026-09-09"
  },
  "article-tmi-aml-identity-verification-2026": {
    "canonicalId": "article-tmi-aml-identity-2026",
    "title": "【犯収法ブログ】犯罪収益移転防止法施行規則の改正による本人確認方法の厳格化について",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18168.html",
    "publisher": "TMI総合法律事務所",
    "publishedAt": "2026-03-30"
  },
  "article-fsa-bank-investment-subsidiary-2026": {
    "canonicalId": "article-fsa-bank-business-scope-reform-2026",
    "title": "『銀行法施行規則等の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
    "url": "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
    "publisher": "金融庁",
    "publishedAt": "2026-06-12"
  },
  "article-tmi-bank-business-succession-2026": {
    "canonicalId": "article-tmi-bank-subsidiary-business-succession-2026",
    "title": "銀行子会社による事業承継支援（令和8年6月銀行法施行規則改正を踏まえて）",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18659.html",
    "publisher": "TMI総合法律事務所",
    "publishedAt": "2026-08-04"
  },
  "article-jftc-toridoll-deduction-2026": {
    "canonicalId": "article-jftc-toridoll-price-reduction-2026",
    "title": "株式会社トリドールホールディングスに対する勧告について",
    "url": "https://www.jftc.go.jp/houdou/pressrelease/2026/sep/260909_toridollholdings.html",
    "publisher": "公正取引委員会",
    "publishedAt": "2026-09-09"
  },
  "article-sesc-monitoring-policy-20260731": {
    "canonicalId": "article-sesc-securities-monitoring-policy-2026",
    "title": "令和8事務年度 証券モニタリング基本方針",
    "url": "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-2.html",
    "publisher": "証券取引等監視委員会",
    "publishedAt": "2026-07-31"
  },
  "article-sesc-monitoring-casebook-20260731": {
    "canonicalId": "article-sesc-securities-monitoring-cases-2026",
    "title": "証券モニタリング概要・事例集（令和8年7月）",
    "url": "https://www.fsa.go.jp/sesc/news/c_2026/2026/20260731-1.html",
    "publisher": "証券取引等監視委員会",
    "publishedAt": "2026-07-31"
  },
  "article-noandt-cyber-supply-chain-reporting-202508": {
    "canonicalId": "article-not-cyber-supply-chain-incident-reporting-2025",
    "title": "サプライチェーンにおけるサイバーセキュリティリスク対応の近時の動向（3） ～DDoS・ランサムウェア攻撃におけるインシデント報告様式の統一化等～",
    "url": "https://www.noandt.com/wp-content/uploads/2025/08/compliance_no110.pdf",
    "publisher": "長島・大野・常松法律事務所",
    "publishedAt": "2025-08"
  },
  "article-meti-takeover-guideline-20230831": {
    "canonicalId": "article-meti-corporate-takeover-guidelines-2023",
    "title": "企業買収における行動指針―企業価値の向上と株主利益の確保に向けて―",
    "url": "https://www.meti.go.jp/policy/economy/keiei_innovation/keizaihousei/fair-ma-rule/ma-guideline-publications.html",
    "publisher": "経済産業省",
    "publishedAt": "2023-08-31"
  },
  "article-noandt-security-clearance-hr-part2-20250319": {
    "canonicalId": "article-nagashima-security-clearance-hr-outsourcing-2025",
    "title": "セキュリティ・クリアランス制度下での人事労務管理（後編） ～既存従業員の取扱い・業務委託時の留意点～",
    "url": "https://www.nagashima.com/publications/publication20250319-1/",
    "publisher": "長島・大野・常松法律事務所",
    "publishedAt": "2025-03-19"
  },
  "article-caa-digital-transactions-interim-20260910": {
    "canonicalId": "article-caa-digital-tokusho-interim-2026",
    "title": "デジタル取引・特定商取引法等検討会 中間取りまとめ",
    "url": "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/",
    "publisher": "消費者庁",
    "publishedAt": "2026-09-10"
  },
  "article-caa-consumer-contract-interim-20260910": {
    "canonicalId": "article-caa-consumer-contract-interim-draft-2026",
    "title": "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
    "url": "https://www.caa.go.jp/notice/entry/047482/",
    "publisher": "消費者庁",
    "publishedAt": "2026-09-10"
  }
};
  window.ARTICLE_ALIASES = Object.freeze({
    ...(window.ARTICLE_ALIASES || {}), ...articleAliases
  });
  window.ARTICLE_ALIAS_METADATA = Object.freeze({
    ...(window.ARTICLE_ALIAS_METADATA || {}), ...aliasMetadata
  });

  const sourceAliases = {
    "source-nco-critical-infrastructure-safety-guideline-20260911": "source-nco-critical-infrastructure-safety-guideline-2026",
    "source-caa-consumer-contract-interim-final-2026": "source-caa-consumer-contract-interim-draft-2026"
  };
  const topicAliases = {
    "social-insurance-expansion-pension-reform-2025": "social-insurance-expansion-2025"
  };
  const issueAliases = {
    "social-insurance-premium-adjustment": "social-insurance-premium-adjustment-2026"
  };
  const topics = window.TOPIC_DATA || [];
  const topicBySlug = new Map(topics.map((topic) => [topic.slug, topic]));
  window.UPDATE_DATA = (window.UPDATE_DATA || []).map((update) => {
    const affectedTopics = (update.affectedTopics || []).map((slug) => topicAliases[slug] || slug);
    const affectedIssues = (update.affectedIssues || []).map((affected) => {
      if (typeof affected === "string") {
        const matches = affectedTopics.filter((slug) =>
          (topicBySlug.get(slug)?.issues || []).some((issue) => issue.id === affected));
        // Never guess a shelf, invent a granular delta, or erase an unresolved ID.
        if (matches.length !== 1) return affected;
        return { topic: matches[0], issue: affected };
      }
      if (!affected || typeof affected !== "object") return affected;
      return { ...affected,
        topic: topicAliases[affected.topic] || affected.topic,
        issue: issueAliases[affected.issue] || affected.issue
      };
    });
    return { ...update,
      source: sourceAliases[update.source] || update.source,
      affectedTopics,
      affectedIssues
    };
  });
})();

// Preserve exact historical issue/event identifiers without changing any content.
(() => {
  window.TOPIC_ISSUE_ALIASES = Object.freeze({
  "securities-monitoring-2026": {
    "securities-monitoring-best-interest-suitability": "securities-monitoring-best-interest-suitability-2026",
    "securities-monitoring-system-frontier-ai": "securities-monitoring-system-frontier-ai-2026",
    "securities-monitoring-aml-outsourcing": "securities-monitoring-aml-outsourcing-2026",
    "securities-monitoring-business-change-controls": "securities-monitoring-business-model-governance-2026",
    "securities-monitoring-business-type-controls": "securities-monitoring-entity-specific-controls-2026"
  },
  "social-insurance-expansion-2025": {
    "social-insurance-2026-wage-requirement": "social-insurance-short-time-coverage-expansion",
    "social-insurance-2027-enterprise-size": "social-insurance-short-time-coverage-expansion",
    "social-insurance-2026-premium-adjustment": "social-insurance-premium-adjustment-2026",
    "social-insurance-2029-individual-establishments": "social-insurance-individual-business-expansion-2029",
    "social-insurance-formal-qualification-substance-2026": "social-insurance-short-hours-qualification-2026",
    "social-insurance-wage-threshold-abolition": "social-insurance-short-time-coverage-expansion",
    "social-insurance-enterprise-size-expansion": "social-insurance-short-time-coverage-expansion",
    "social-insurance-individual-business-expansion": "social-insurance-individual-business-expansion-2029",
    "social-insurance-premium-adjustment": "social-insurance-premium-adjustment-2026",
    "social-insurance-short-regular-self-employed-qualification": "social-insurance-short-hours-qualification-2026",
    "social-insurance-wage-threshold": "social-insurance-short-time-coverage-expansion",
    "social-insurance-company-size": "social-insurance-short-time-coverage-expansion",
    "social-insurance-individual-business": "social-insurance-individual-business-expansion-2029",
    "social-insurance-substance-freelancer-shorttime": "social-insurance-short-hours-qualification-2026",
    "social-insurance-nominal-employment-qualification-2026": "social-insurance-short-hours-qualification-2026"
  },
  "listed-company-takeover-guidelines": {
    "takeover-bona-fide-proposal": "takeover-serious-proposal",
    "takeover-qualitative-value": "takeover-qualitative-enterprise-value"
  },
  "ssbj-statutory-sustainability-disclosure": {
    "ssbj-mandatory-application-timing-2026": "ssbj-application-scope",
    "ssbj-scope3-safe-harbor-2026": "ssbj-scope3-liability",
    "ssbj-shk-ghg-practical-standard-2026": "ssbj-shk-practice-standard-2026",
    "ssbj-scope3-supply-chain-contract-risk-2026": "ssbj-supplychain-data"
  },
  "advertising-display-control": {
    "display-price-conditions": "display-minimum-price-claims"
  },
  "ai-civil-liability": {
    "ai-civil-support-reliance-classification-2026": "ai-liability-classification",
    "ai-civil-user-duty-business-process-2026": "ai-liability-user-duty",
    "ai-civil-developer-provider-duty-2026": "ai-liability-provider-duty",
    "ai-civil-product-liability-update-2026": "ai-liability-physical-product"
  },
  "economic-security-information-clearance": {
    "security-clearance-qualifying-business": "economic-security-qualified-business",
    "security-clearance-recruitment-prescreening": "economic-security-recruitment-prescreening",
    "security-clearance-outsourcing": "economic-security-outsourcing",
    "security-clearance-first-year-operation": "economic-security-operation-status"
  },
  "digital-commerce-tokusho-review": {
    "dt-social-solicitation": "dt-chat-solicitation"
  }
});
  window.REFORM_EVENT_ALIASES = Object.freeze({
  "criminal-proceeds-act-2026-amendment": "aml-account-remittance-2026-amendment",
  "child-sexual-violence-prevention-act-2024-2026": "child-sexual-violence-prevention-act-2024",
  "child-sexual-violence-prevention-act-2026": "child-sexual-violence-prevention-act-2024",
  "consumer-contract-act-review-2026-interim": "consumer-contract-law-review-2026",
  "consumer-contract-act-review-2026": "consumer-contract-law-review-2026",
  "plant-variety-protection-seed-act-2026-amendment": "seed-act-2026-amendment",
  "important-varieties-act-2026": "important-varieties-act-2026-enactment",
  "early-business-restructuring-act-2025": "early-business-rehabilitation-act-2025",
  "early-business-recovery-act-2025": "early-business-rehabilitation-act-2025",
  "fiea-foreign-vf-rule-2026": "fiea-overseas-vf-foreign-fund-exemption-2026",
  "payment-services-act-cross-border-collection-2026": "payment-services-act-cross-border-collection-2025",
  "patent-system-network-infringement-2026-review": "patent-act-network-inventions-infringement-review-2026",
  "fiea-startup-funding-2026-amendment": "fiea-startup-capital-2026-amendment",
  "labor-policy-customer-harassment-2025-amendment": "customer-harassment-obligation-2026",
  "specified-commercial-transactions-digital-review-2026-interim": "specified-commercial-transactions-digital-review-2026",
  "digital-commerce-tokusho-2026-review": "specified-commercial-transactions-digital-review-2026",
  "fsa-public-fund-liquidity-guideline-2027": "public-investment-trust-liquidity-guideline-2026",
  "labor-policy-customer-harassment-2026": "customer-harassment-obligation-2026",
  "criminal-proceeds-identification-rules-2027": "aml-identity-verification-2027-rules",
  "equal-employment-jobseeker-sexual-harassment-2025-amendment": "equal-opportunity-jobseeker-sexual-harassment-2025",
  "banking-regulations-investment-subsidiary-2026": "banking-act-investment-subsidiary-2026",
  "business-transfer-guideline-2026": "business-transfer-guideline-2026-amendment",
  "corporate-restructuring-labor-review-2026": "corporate-restructuring-labor-policy-review-2026",
  "important-variety-breeding-act-2026": "important-varieties-act-2026-enactment",
  "fiea-2026-crypto-reform": "crypto-assets-fiea-2026-amendment",
  "digital-commerce-tokusho-review-2026": "specified-commercial-transactions-digital-review-2026",
  "digital-transactions-tokusho-review-2026": "specified-commercial-transactions-digital-review-2026",
  "pension-reform-2025-social-insurance-expansion": "employee-social-insurance-expansion-2025-amendment",
  "pension-reform-social-insurance-expansion-2025": "employee-social-insurance-expansion-2025-amendment",
  "aml-identity-verification-regulations-2027": "aml-identity-verification-2027-rules"
});
})();

// These historical mappings explicitly split one issue into multiple issues.
// Render all destinations; do not choose one legal conclusion as equivalent.
(() => {
  window.TOPIC_ISSUE_GROUP_ALIASES = Object.freeze({
    "economic-security-information-clearance": Object.freeze({
      "security-clearance-employee-consent-hr": Object.freeze([
        "economic-security-suitability-assessment",
        "economic-security-hr-purpose-limit"
      ])
    }),
    "job-seeker-sexual-harassment": Object.freeze({
      "jobseeker-sexual-harassment-employer-measures-2026": Object.freeze([
        "jobseeker-sh-scope",
        "jobseeker-sh-recruiting-rules",
        "jobseeker-sh-consultation-response"
      ])
    })
  });
})();

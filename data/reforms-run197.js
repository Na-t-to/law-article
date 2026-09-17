(() => {
  const additions = [
    {
      id: "payment-services-act-cross-border-collection-2026",
      title: "資金決済法・クロスボーダー収納代行規制（2026年施行）",
      eventType: "law_amendment",
      lawId: "payment-services-act",
      lawLabel: "資金決済法",
      relatedTopics: ["payment-services-cross-border-collection-2026"],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2026-06-01"],
      effectiveDateNote: "クロスボーダー収納代行規制を含む主要規定と関係政令・内閣府令・事務ガイドラインは2026年6月1日に施行・適用。改正法には一部公布日施行の規定がある。",
      effectiveDateSourceIds: ["source-fsa-payment-services-amendment-final-20260522"],
      matchSourceIds: ["source-fsa-payment-services-amendment-final-20260522", "source-shugiin-payment-services-law66-20250613"],
      sourceIds: ["source-fsa-payment-services-amendment-final-20260522", "source-shugiin-payment-services-law66-20250613"],
      articleIds: [
        "article-fsa-payment-services-amendment-final-20260522",
        "article-tmi-cross-border-collection-20260827",
        "article-nishimura-cross-border-collection-20260717"
      ]
    },
    {
      id: "fiea-2026-crypto-reform",
      title: "金融商品取引法・2026年暗号資産規制改正",
      eventType: "law_amendment",
      lawId: "financial-instruments-exchange-act",
      lawLabel: "金融商品取引法",
      relatedTopics: ["crypto-financial-instruments-reform-2026"],
      effectiveDateStatus: "phased",
      effectiveDates: ["2026-08-12"],
      effectiveDateNote: "無登録業の罰則引上げ・犯則調査権限追加は2026年8月12日に先行施行済み。暗号資産規制の金商法移管、情報公表、業規制、インサイダー規制等の本体は2026年7月23日の公布から1年以内の政令指定日に施行。",
      effectiveDateSourceIds: ["source-fsa-fiea-payment-amendment-law-20260723", "source-fsa-fiea-20day-effective-20260729"],
      matchSourceIds: [
        "source-fsa-fiea-payment-amendment-overview-20260715",
        "source-fsa-fiea-payment-amendment-law-20260723",
        "source-fsa-fiea-20day-effective-20260729"
      ],
      sourceIds: [
        "source-fsa-fiea-payment-amendment-overview-20260715",
        "source-fsa-fiea-payment-amendment-law-20260723",
        "source-fsa-fiea-20day-effective-20260729"
      ],
      articleIds: [
        "article-fsa-fiea-payment-amendment-20260715",
        "article-fsa-fiea-20day-effective-20260729",
        "article-businesslawyers-noandt-crypto-reform-20260828"
      ]
    }
  ];

  const existing = new Set((window.REFORM_EVENT_DATA || []).map((item) => item && item.id));
  const fresh = additions.filter((item) => !existing.has(item.id));
  if (fresh.length) window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat(fresh);
})();

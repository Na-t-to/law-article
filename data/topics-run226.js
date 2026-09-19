(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? list.slice() : [];
    if (!next.includes(value)) next.push(value);
    return next;
  };

  const advertising = (window.TOPIC_DATA || []).find((item) => item && item.slug === "advertising-display-control");
  if (advertising) {
    advertising.lastUpdated = "2026-09-20";
    advertising.lastVerified = "2026-09-20";
    advertising.sourceIds = addUnique(advertising.sourceIds, "source-caa-kinpodo-funeral-price-order-20260918");
    advertising.referenceArticleIds = addUnique(advertising.referenceArticleIds, "article-caa-kinpodo-funeral-price-order-20260918");

    if (!(advertising.issues || []).some((issue) => issue && issue.id === "display-price-conditions")) {
      advertising.issues = (advertising.issues || []).concat({
        id: "display-price-conditions",
        title: "広告の最低価格と実際にその価格で利用できる条件をどう一致させるか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "広告で特定のサービス内容と最低価格を一体として訴求する場合、その価格で実際に当該サービスを利用できる条件・範囲が表示から受ける印象と対応しているかを確認する。例外的な場合を除き大幅に高い費用が必要なのに、広告されたサービスが低い最低価格から利用できるように示す表示は、有利誤認となり得る。",
        exception: "低価格の別プラン自体が実在していても、広告全体から消費者が認識する対象役務と当該低価格プランの内容が異なる場合には、それだけで表示の問題が解消されるとは限らない。",
        uncertain: "有利誤認の該当性は、価格表示だけでなく、同時に示された役務内容、音声・映像、注記、実際にその価格で利用できる割合・条件等を含む表示全体から個別に判断される。",
        sourceIds: ["source-caa-kinpodo-funeral-price-order-20260918"]
      });
    }

    if (advertising.currentSummary) {
      advertising.currentSummary.facts = addUnique(
        advertising.currentSummary.facts,
        "消費者庁は2026年9月18日、貸切ホールを用いる家族葬について『家族葬 10.45万円〜』等と表示しながら、実際には僅かな場合を除き30万8000円以上が必要だった表示を有利誤認として措置命令した。"
      );
      advertising.currentSummary.interpretations = addUnique(
        advertising.currentSummary.interpretations,
        "価格表示の審査では、低価格プランが形式的に存在するかだけでなく、広告全体から一般消費者がどのサービスをその価格で利用できると受け取るかと、実際の提供条件が一致しているかを見る必要がある。"
      );
      advertising.currentSummary.implications = addUnique(
        advertising.currentSummary.implications,
        "『○円〜』『最低○円』等の広告は、同時に訴求するサービス内容、適用条件、実際の販売・提供実績を広告審査で突合し、例外的にしか成立しない価格を中心表示に使わない。"
      );
    }

    advertising.practicalImpacts = addUnique(advertising.practicalImpacts, "価格表示・最安値広告の審査");
  }

  const consumerContract = (window.TOPIC_DATA || []).find((item) => item && item.slug === "consumer-contract-law-review-2026");
  if (consumerContract) {
    consumerContract.referenceArticleIds = addUnique(consumerContract.referenceArticleIds, "article-businesslawyers-mhm-terms-injunction-20260916");
    consumerContract.practicalImpacts = addUnique(consumerContract.practicalImpacts, "利用規約の免責・専属管轄・一方的変更・パスワード条項");
  }

  const customerHarassment = (window.TOPIC_DATA || []).find((item) => item && item.slug === "customer-harassment");
  if (customerHarassment) {
    customerHarassment.referenceArticleIds = addUnique(customerHarassment.referenceArticleIds, "article-businesslawyers-nishino-customer-harassment-line-20260915");
    customerHarassment.practicalImpacts = addUnique(customerHarassment.practicalImpacts, "カスハラ対応の打切り・エスカレーション基準");
  }
})();

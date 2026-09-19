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

  const cyberCritical = (window.TOPIC_DATA || []).find((item) => item && item.slug === "cyber-countermeasures-critical-infrastructure");
  if (cyberCritical) {
    cyberCritical.lastUpdated = "2026-09-20";
    cyberCritical.lastVerified = "2026-09-20";
    cyberCritical.sourceIds = addUnique(cyberCritical.sourceIds, "source-fsa-cyber-reporting-common-forms-20260918");
    cyberCritical.referenceArticleIds = addUnique(cyberCritical.referenceArticleIds, "article-fsa-cyber-reporting-common-forms-20260918");

    if (!(cyberCritical.issues || []).some((issue) => issue && issue.id === "cyber-financial-common-reporting-forms")) {
      cyberCritical.issues = (cyberCritical.issues || []).concat({
        id: "cyber-financial-common-reporting-forms",
        title: "金融分野のサイバー報告を共通様式へどう移行するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "金融庁所管の幅広い金融事業者は、2026年10月1日から、監督指針等に基づくシステム障害・サイバーセキュリティ事案の報告様式を、関係省庁申合せに基づくDDoS、ランサムウェア、その他サイバー攻撃等の3つの共通様式へ移行する。社内のインシデント報告票、当局報告手順、担当者・システムの入力項目を新様式へ対応させる必要がある。",
        exception: "共通様式への移行は、サイバー対処能力強化法の届出・特定侵害事象等の報告義務や重要インフラ統一基準と同一の制度ではない。また、様式が共通化されても、報告トリガー、提出先、金融分野固有の補足事項まで全制度で同一になるわけではない。",
        uncertain: "金融分野以外の各所管制度・安全基準等で同じ共通様式がどの範囲まで採用されるか、また複数当局への報告運用がどこまで実質的に一元化されるかは、各所管省庁の最新資料を継続確認する必要がある。",
        sourceIds: ["source-fsa-cyber-reporting-common-forms-20260918"]
      });
    }

    if (cyberCritical.currentSummary) {
      cyberCritical.currentSummary.facts = addUnique(
        cyberCritical.currentSummary.facts,
        "金融庁は2026年9月18日、関係省庁申合せの9月15日改正で『その他サイバー攻撃等事案共通様式』が追加されたことを受け、主要行、地域金融機関、保険、金融商品取引、貸金、資金決済、暗号資産等の監督指針・事務ガイドラインの報告様式を共通様式へ移行し、2026年10月1日から適用すると公表した。"
      );
      cyberCritical.currentSummary.interpretations = addUnique(
        cyberCritical.currentSummary.interpretations,
        "金融分野では、サイバー対処能力強化法の直接義務とは別に、既存の金融監督上の障害・サイバー報告が関係省庁の共通様式へ移行する。複数の報告制度を一つの義務と誤認せず、トリガー・提出先・様式・補足項目を報告経路ごとに整理する必要がある。"
      );
      cyberCritical.currentSummary.implications = addUnique(
        cyberCritical.currentSummary.implications,
        "金融事業者は、DDoS・ランサムウェア・その他サイバー攻撃等の3様式と金融分野の補足事項を既存のインシデント対応手順へマッピングし、旧様式からの入力項目・連絡先・提出フローを2026年10月1日までに更新する。"
      );
    }

    cyberCritical.practicalImpacts = addUnique(cyberCritical.practicalImpacts, "金融分野のサイバー被害報告共通様式");
  }
})();

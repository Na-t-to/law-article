(() => {
  const topicSlug = "aml-identity-verification-2027";
  const reformEventId = "aml-identity-verification-regulations-2027";
  const remoteSourceId = "source-jafic-aml-rule-2025-order-3";
  const faceSourceId = "source-jafic-aml-rule-2026-order-1";
  const remoteArticleId = "article-jafic-aml-rule-2025-order-3";
  const faceArticleId = "article-jafic-aml-rule-2026-order-1";
  const tmiArticleId = "article-tmi-aml-identity-verification-2026-03-30";

  const addUniqueById = (target, additions) => {
    const keyOf = (item) => item && (item.id || item.slug);
    const existing = new Set((target || []).map(keyOf));
    return (target || []).concat(additions.filter((item) => !existing.has(keyOf(item))));
  };

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: remoteSourceId,
      title: "犯罪による収益の移転防止に関する法律施行規則の一部を改正する命令（令和7年8省共同命令第3号）",
      type: "regulation",
      typeLabel: "一次資料・施行規則改正／非対面本人確認",
      authority: "警察庁 JAFIC",
      publishedAt: "2025-06-24",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/hourei/250624/anbun02.pdf",
      importance: "最高",
      whyImportant: "犯罪収益移転防止法施行規則の非対面本人確認方法を改め、本人確認書類の画像・写しだけに依存する複数の方式を廃止・厳格化する改正命令。本人確認フローやeKYCシステムの2027年4月1日対応の直接の法的根拠。",
      topics: [topicSlug]
    },
    {
      id: faceSourceId,
      title: "犯罪による収益の移転防止に関する法律施行規則の一部を改正する命令（令和8年8省共同命令第1号）",
      type: "regulation",
      typeLabel: "一次資料・施行規則改正／対面本人確認",
      authority: "警察庁 JAFIC",
      publishedAt: "2026-03-06",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/hourei/260306/anbun.pdf",
      importance: "最高",
      whyImportant: "犯罪収益移転防止法施行規則の対面本人確認方法を改め、ICチップ読取りを組み込む方式への厳格化や従来方式の廃止を定める改正命令。非対面改正と同じ2027年4月1日に施行される。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = addUniqueById(window.TOPIC_DATA, [
    {
      slug: topicSlug,
      title: "犯収法・取引時確認／eKYC・本人確認（2027年厳格化）",
      categories: ["危機管理・コンプライアンス", "金融", "契約・取引"],
      summary: "犯罪収益移転防止法の特定事業者が行う取引時確認について、2027年4月1日に全面施行される本人確認方法の厳格化を、対面・非対面の両方から整理する。",
      lastUpdated: "2026-09-12",
      lastVerified: "2026-09-12",
      isNew: true,
      overview: [
        "2025年・2026年の施行規則改正により、本人確認書類の画像や写しだけに依存する方法が大きく縮小され、ICチップ情報の読取りや公的個人認証を軸とする本人確認へ移行する。主要な改正部分は2027年4月1日に施行される。",
        "影響はオンライン金融サービスに限られない。犯罪収益移転防止法2条2項の特定事業者には、金融機関等のほか、ファイナンスリース、クレジットカード、宅地建物取引、宝石・貴金属、郵便物受取・電話受付代行等、士業なども含まれ、対面本人確認も改正される。",
        "このテーマでは、法令上利用できる本人確認方式と、自社が実際に採用する方式、システム・委託先・規程・マニュアルの移行を分けて管理する。"
      ],
      currentSummary: {
        facts: [
          "令和7年8省共同命令第3号は非対面取引の本人確認方法を改め、現行の本人確認書類の外見画像と本人の容貌画像を照合する方式、本人確認書類の画像情報だけを送信する方式の一部、本人確認書類の写しを用いる方式などを廃止又は厳格化する。",
          "令和8年8省共同命令第1号は対面取引の本人確認方法を改め、写真付き本人確認書類の提示だけで足りる現行方式を、原則として外見確認に加えてICチップの読取りを行う方式へ厳格化し、補完書類等を組み合わせる一部方式を廃止する。",
          "令和7年8省共同命令第3号と令和8年8省共同命令第1号の主要な本人確認方法改正は、いずれも2027年4月1日に施行される。"
        ],
        interpretations: [
          "改正の実務上の中心は『eKYCを使っているか』ではなく、自社の取引時確認が画像・写し、ICチップ、公的個人認証、転送不要郵便等のどの方式に依存しているかを特定することにある。",
          "法令上複数の本人確認方法が残るため、すべての事業者が同一技術を導入しなければならないわけではない。自社が採用する方式を選び、その方式に必要な本人確認書類・端末・アプリ・郵送・委託先の要件を実装する必要がある。"
        ],
        implications: [
          "顧客オンボーディングを対面・非対面に分け、現在利用する本人確認方式を施行規則6条の方式へ対応付けて、2027年4月以降も存続するかを棚卸しする。",
          "廃止・厳格化対象の方式を利用している場合は、ICチップ読取り、公的個人認証、原本送付・転送不要郵便等の代替方式を選び、システム改修、本人確認ベンダーとの契約、利用規約・プライバシー表示、社内規程・マニュアルを更新する。",
          "本人確認方法の変更が顧客離脱率やサポート負荷に影響するため、法務・コンプライアンスだけでなくプロダクト、営業・店舗、CS、IT、委託先を含む移行計画を作る。"
        ],
        uncertain: [
          "個別サービスでどの本人確認方式を採用できるかは、顧客属性、取引類型、本人確認書類、対面・非対面のチャネル、関係業法等によって異なる。犯収法以外の本人確認規制も別途確認する。"
        ]
      },
      issues: [
        {
          id: "aml-kyc-nonface-image-methods",
          title: "2027年4月以降、非対面本人確認で画像・写しだけの方式を使えるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "従来利用されてきた本人確認書類の外見画像と本人の容貌画像を照合する方式や、本人確認書類の画像・写しだけに依存する複数の方式は廃止又は一部廃止される。ICチップ読取情報、公的個人認証、原本送付と転送不要郵便など、改正後も認められる方式へ移行する必要がある。",
          exception: "画像を用いるすべての処理が一律に禁止されるわけではなく、改正後の施行規則が認める本人確認方法の構成要素として利用される場合がある。方式単位で確認する。",
          uncertain: "自社の現行フローが施行規則上どの方式に該当するか、本人確認ベンダーの実装が改正後方式を満たすかは個別確認が必要。",
          sourceIds: [remoteSourceId]
        },
        {
          id: "aml-kyc-face-ic-reading",
          title: "対面本人確認も2027年4月に変わるか",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "変わる。写真付き本人確認書類を提示して外見を確認するだけで足りる現行方式は厳格化され、改正後はICチップを備える本人確認書類について外見確認に加えてICチップ読取りを行う方式が中心になる。一部の補完書類併用方式も廃止される。",
          exception: "ICチップを利用できない顧客等に対する別方式も残るため、対面取引の全件で同一のICチップ方式だけを採らなければならないという意味ではない。",
          uncertain: "店舗端末や本人確認書類の種類、顧客属性に応じて利用可能な方式を確認し、例外フローを設計する必要がある。",
          sourceIds: [faceSourceId]
        },
        {
          id: "aml-kyc-scope",
          title: "2027年本人確認改正は金融機関だけの問題か",
          status: "authoritative",
          stage: "enacted",
          views: [],
          conclusion: "金融機関だけではない。犯罪収益移転防止法2条2項の特定事業者が対象であり、ファイナンスリース、クレジットカード、宅地建物取引、宝石・貴金属、郵便物受取・電話受付代行等、士業などにも影響し得る。",
          exception: "各業種で取引時確認が必要となる取引・顧客や確認事項は同一ではない。特定事業者に該当するだけで全取引に同一フローが必要になるわけではない。",
          uncertain: "自社の事業・取引が特定事業者のどの類型に該当し、どの取引で確認義務が発生するかは個別に確認する。",
          sourceIds: [remoteSourceId, faceSourceId]
        },
        {
          id: "aml-kyc-system-operations",
          title: "2027年4月施行に向けて何を変更するか",
          status: "interpreted",
          stage: "enacted",
          views: [],
          conclusion: "現行の本人確認方式を施行規則上の方式へ対応付け、廃止・厳格化されるフローを特定したうえで、採用する代替方式を決め、システム・端末、本人確認ベンダー、契約、規程・マニュアル、顧客案内を施行日までに整合させる。",
          exception: "法令上利用可能な方式をすべて実装する必要はなく、事業者は自社の顧客・チャネルに応じて適法な方式を選択できる。",
          uncertain: "移行に必要な期間は既存システムや委託構成によって異なるため、本人確認ベンダーのロードマップとテスト期間を含めて逆算する。",
          sourceIds: [remoteSourceId, faceSourceId]
        }
      ],
      sourceIds: [remoteSourceId, faceSourceId],
      practicalImpacts: ["本人確認フローの棚卸し", "eKYC・ICチップ読取り対応", "店舗・オンライン本人確認のシステム改修", "本人確認ベンダーとの契約・仕様確認", "社内規程・マニュアル更新"]
    }
  ]);

  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [
    {
      id: reformEventId,
      title: "犯罪収益移転防止法施行規則・本人確認方法の2027年厳格化",
      eventType: "regulation_or_guideline",
      lawId: "criminal-proceeds-transfer-prevention-rule",
      lawLabel: "犯罪収益移転防止法施行規則",
      relatedTopics: [topicSlug],
      effectiveDateStatus: "confirmed",
      effectiveDates: ["2027-04-01"],
      effectiveDateSourceIds: [remoteSourceId, faceSourceId],
      matchSourceIds: [remoteSourceId, faceSourceId],
      sourceIds: [remoteSourceId, faceSourceId],
      articleIds: [remoteArticleId, faceArticleId, tmiArticleId]
    }
  ]);

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: remoteArticleId,
      title: "犯罪収益移転防止法施行規則の一部を改正する命令（令和7年8省共同命令第3号）",
      publisher: "警察庁 JAFIC",
      author: "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
      publishedAt: "2025-06-24",
      collectedAt: "2026-09-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/hourei/250624/anbun02.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・施行規則改正／非対面本人確認",
      status: "adopted",
      summary: "犯罪収益移転防止法施行規則の非対面本人確認方法を改める共同命令。本人確認書類の外見画像と本人の容貌画像を照合する方式や、本人確認書類の画像・写しに依存する複数の方式を廃止・一部廃止・厳格化し、2027年4月1日に施行する。",
      whyImportant: ["非対面本人確認の廃止・存続方式を判断する直接の法令資料", "eKYCのシステム改修要否を現行方式ごとに確認できる", "2027年4月1日という移行期限の根拠になる"],
      audience: ["企業法務", "AML・コンプライアンス", "金融・決済", "不動産・リース・高額商品取引", "プロダクト・IT"],
      audienceReason: "現在の本人確認フローが2027年4月以降も利用可能かを判定し、代替方式とシステム移行を決めるため。",
      categories: ["危機管理・コンプライアンス", "金融", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["aml-kyc-nonface-image-methods", "aml-kyc-scope", "aml-kyc-system-operations"],
      primarySourceIds: [remoteSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [remoteSourceId],
      whatChanged: "制度変更／非対面本人確認について、本人確認書類の画像・写しに依存する複数の方式を廃止・厳格化し、2027年4月1日に施行する。"
    },
    {
      id: faceArticleId,
      title: "犯罪収益移転防止法施行規則の一部を改正する命令（令和8年8省共同命令第1号）",
      publisher: "警察庁 JAFIC",
      author: "内閣府・総務省・法務省・財務省・厚生労働省・農林水産省・経済産業省・国土交通省",
      publishedAt: "2026-03-06",
      collectedAt: "2026-09-12",
      url: "https://www.npa.go.jp/sosikihanzai/jafic/hourei/260306/anbun.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・施行規則改正／対面本人確認",
      status: "adopted",
      summary: "犯罪収益移転防止法施行規則の対面本人確認方法を改める共同命令。従来、写真付き本人確認書類の提示で行えた方式をICチップ読取りを組み込む方式へ厳格化し、一部の補完書類併用方式を廃止する。主要部分は2027年4月1日施行。",
      whyImportant: ["2027年対応がオンラインeKYCだけでなく店舗等の対面本人確認にも及ぶことを確認できる", "ICチップ読取りを含む改正後方式の直接の法令資料", "店舗端末・手続マニュアルの改修範囲を決める根拠になる"],
      audience: ["企業法務", "AML・コンプライアンス", "店舗・営業企画", "金融・不動産・高額商品取引", "IT"],
      audienceReason: "対面取引の本人確認手続、端末、書類受付、例外フローを2027年4月施行に合わせて更新するため。",
      categories: ["危機管理・コンプライアンス", "金融", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["aml-kyc-face-ic-reading", "aml-kyc-scope", "aml-kyc-system-operations"],
      primarySourceIds: [faceSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [faceSourceId],
      whatChanged: "制度変更／対面本人確認について、ICチップ読取りを組み込む方式への厳格化等を行い、2027年4月1日に施行する。"
    },
    {
      id: tmiArticleId,
      title: "【犯収法ブログ】犯罪収益移転防止法施行規則の改正による本人確認方法の厳格化について",
      publisher: "TMI総合法律事務所",
      author: "大塚尚・菊田行紘・野間敬和・野口真吾・片尾すみれ・片桐龍也",
      publishedAt: "2026-03-30",
      collectedAt: "2026-09-12",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18168.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説",
      status: "adopted",
      summary: "2025年・2026年の犯収法施行規則改正を横断し、2027年4月以降の本人確認方式を対面・非対面に分けて整理した実務解説。画像・写し中心の方式の廃止、ICチップ読取りの原則化、公的個人認証、残る代替方式を比較し、金融機関だけでなくすべての特定事業者に影響し得ること、システム・社内規程・マニュアルの見直しが必要になることまで落としている。",
      whyImportant: ["複数の共同命令で段階的に変わった方式名を2027年4月時点の姿に組み直している", "オンラインだけでなく対面取引、金融以外の特定事業者への影響を具体化している", "法令上の方式差をシステム改修・委託先・規程・マニュアルの実務へ接続している"],
      audience: ["企業法務", "AML・コンプライアンス", "プロダクト・IT", "本人確認業務担当", "特定事業者の管理部門"],
      audienceReason: "複数の改正命令を一体として読み、現行フローのどこが廃止・厳格化されるかと実装タスクを短時間で把握するため。",
      categories: ["危機管理・コンプライアンス", "金融", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["aml-kyc-nonface-image-methods", "aml-kyc-face-ic-reading", "aml-kyc-scope", "aml-kyc-system-operations"],
      primarySourceIds: [remoteSourceId, faceSourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [remoteSourceId, faceSourceId],
      whatChanged: "実務整理／2025年・2026年の施行規則改正を統合し、2027年4月以降の対面・非対面本人確認方式とシステム・規程対応を整理した。"
    }
  ]);
})();

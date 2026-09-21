(() => {
  const TOPIC = "performer-entertainment-transactions";
  const SOURCE_GUIDELINE = "source-jftc-performer-entertainment-guideline-20250930";
  const SOURCE_SURVEY = "source-jftc-performer-entertainment-survey-20241226";
  const REFORM_EVENT = "performer-entertainment-transaction-guideline-2025";
  const normalizeUrl = (value) => {
    try {
      const url = new URL(String(value || "").trim());
      url.protocol = "https:";
      url.hash = "";
      [...url.searchParams.keys()].forEach((key) => {
        if (/^utm_/i.test(key) || ["fbclid", "gclid", "yclid"].includes(key)) url.searchParams.delete(key);
      });
      url.hostname = url.hostname.toLowerCase();
      url.pathname = url.pathname.replace(/\/+$/, "") || "/";
      url.searchParams.sort();
      return url.toString();
    } catch {
      return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, "");
    }
  };

  const sourceAdditions = [
    {
      id: SOURCE_GUIDELINE,
      title: "実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針",
      type: "guideline",
      typeLabel: "内閣官房・公正取引委員会／実演家等取引適正化指針",
      authority: "内閣官房・公正取引委員会",
      publishedAt: "2025-09-30",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2025/sep/250930_geinoushishin.html",
      importance: "最高",
      whyImportant: "実演家と荸能事務所、放送事業者等、レコード会社との取引について、契約期間・競業避止・移籍独立、権利利用、報酬、契約条件の書面化、再録禁止等を独占禁止法等の観点から具体化し、17の採るほき行動と問題となり得る行動例を示す公式指針。",
      topics: [TOPIC]
    },
    {
      id: SOURCE_SURVEY,
      title: "音楽・放送番組等の分野の実演家と芸能事務所との取引等に関する実態調査（クリエイター支援のための取引適正化に向けた実態調査）",
      type: "report",
      typeLabel: "公正取引委員会・実態調査",
      authority: "公正取引委員会",
      publishedAt: "2024-12-26",
      url: "https://www.jftc.go.jp/houdou/pressrelease/2024/dec/241226_geinou.html",
      importance: "高",
      whyImportant: "芸能分野の契約期間、移籍・独立、競業避止、権利帰属・利用、報酬、放送事業者・レコード会社との取引等の実態を調査し、2025年の取引適正化指針の基礎となった公式報告。",
      topics: [TOPIC]
    }
  ];
  const existingSources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceIds = new Set(existingSources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(existingSources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshSources = sourceAdditions.filter((item) => !sourceIds.has(item.id) && !sourceUrls.has(normalizeUrl(item.url)));
  if (freshSources.length) window.SOURCE_DATA = existingSources.concat(freshSources);

  const topic = {
    slug: TOPIC,
    title: "実演家・芸能事務所等の取引適正化",
    categories: ["独占禁止法・競争法", "契約", "知的財産"],
    summary: "実演家と荸能事務所、放送事業者等、レコード会社との取引について、2025年9月30日の公式指針を基礎に、契約期間・競業避止、移籍・独立、権利利用、報酬、契約条件の書面化、再録禁止を企業実務向けに整理する。",
    lastUpdated: "2026-09-22",
    lastVerified: "2026-09-22",
    isNew: true,
    overview: [
      "内閣官房と公正取引委員会は2025年9月30日、2024年12月の実態調査を基に、実演家と荸能事務所、放送事業者等、レコード会社との取引について独占禁止法等の具体的な考え方を示す指針を公表した。",
      "指針は、芸能事務所について契約期間・更新、競業避止、移籍・独立、実演家の権利、報酬等を扱い、放送事業者等について契約条件の書面化と協議、レコード会社について再録禁止条項等を扱う。",
      "実務では、新規契約だけでなく既存の専属契約、更新条項、退所時の条件、権利帰属・利用許諾、報酬・費用控除、放送出演・レコーディング契約を棚卸しし、必要性・相当性と説明・協議の記録を確認する必要がある。",
      "この指針は荸能事務所だけの問題ではなく、放送事業者、番組制作会社、レコード会社、広告・スポンサー企業など、実演家の起用やコンテンツ取引に関わる企業のコンプライアンスにも関係する。"
    ],
    currentSummary: {
      facts: [
        "内閣官房と公正取引委員会は2025年9月30日、『実演家等と芸能事務所、放送事業者等及びレコード会社との取引の適正化に関する指針』を公表した。",
        "同指針は、2024年12月26日に公表された音楽・放送番組等の分野の実演家と芸能事務所との取引等に関する実態調査を基礎としている。",
        "指針は17の採るべき行動を示し、指針に沿わない行為により公正な競争を阻害するおそれがあるなど独占禁止法等に違反する場合には、公正取引委員会が厳正に対処する旨を示している。",
        "荸能事務所との関係では契約期間・更新、競業避止、移籍・独立、権利利用、報酬等、放送事業者等との関係では契約条件の書面化・協議、レコード会社との関係では再録禁止条項等が主要論点として整理されている。"
      ],
      interpretations: [
        "専属契約や競業避止条項は存在すること自体だけで評価せず、投資回収その他の目的、対象業務、期間、必要性・相当性、実演家の活動機会への影響を具体的に確認する必要がある。",
        "移籍・独立時の金銭支払、権利利用の制限、取引先への働き掛け等は、契約条項だけでなく実際の運用や業界内の協調行動を含めて競争制限効果を確認する必要がある。",
        "指針対応は新規ひな形の修正だけでは足りず、既存契約の棚卸し、説明・協議プロセス、報酬計算、権利管理、退所・契約終了フローまで一体で見直す方が実務上有効である。"
      ],
      implications: [
        "専属契約の契約期間、自動更新、事務所側だけの延長権、契約終了後の競業避止・活動制限を一覧化し、必要性・相当性を再点検する。",
        "移籍・独立時の金銭支払、退所後の活動や名称・成果物利用、他社への働き掛けに関する条項と実運用を確認する。",
        "実演家の著作隣接権等や名称・成果物に関する権利の帰属・利用許諾、報酬・二次使用料・SNS・ファンクラブ・グッズ収益、経費控除の説明と協議方法を整える。",
        "放送・番組制作の発注では報酬、業務内容、拘束期間、支払条件等を可能な限り書面・電子データで示し、実演家・荸能事務所が交渉できる機会を設ける。",
        "レコード契約の再録禁止は対象楽曲、期間、起算点、投資回収との市係を確認し、必要かで相当な篆盖へ限定する。"
      ],
      uncertain: [
        "優越�xの在無や溷用試件仛取引等への試誙は、当事巓の取引上の在在、代替可能性、制限の目的、期間、立争への影響等の趁体的事情により刦断される。",
        "実演家が労像者、フリーランス、事業者はいずれとして歱艱れるか、また取引適正化関連法令が適用されるかは契約名だけでなく実態と各法の要件を個別に確認する必要がある。"
      ]
    },
    issues: [
      {
        id: "performer-contract-period-noncompete",
        title: "専属契約の契約期間・更新・競業避止をどう設計するか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "契約期間・更新条件を明確にし、事務所偈�k�. 9��y�a8�j�n��em��9idy�!9�`�.��o����ۚ���������.W�"ۖ�3���ʃ�.��n��j�����Ƈ��r�ZO���������n��O���
K�ߖ���j�����zK�8�8(�8.YknjZ�zy�Z�nK�ފ�~8�y��y�N8�ZNY�8�8z�njZޘ�j�.8~8�8�8�zy�Z�nK��h�8~Z��[��8~8�8(�8�8(.jIΊ��8�8(�8""��W�6WF���.�+.ZH�h�^�8~8�Y��X��8(Ny��8�K��x8�8�8�YknjZ�z{�Z�nx�j��jyd"9�!��9b*y���c9kf9g*8�fx��h-9d"8�i�࠸� yb-�fd8�k����f�����'�e���c:`c�n���j��j��x�j��a8�b�हb)x�e�`���fx��� ���[��\�Z[���`"�b)y�hzh!x�k�`jy��y�)��k�k���%9k���j9.��b�y�`8�k�e��/�� y��z,��a�yk�y�yb-�fd9�'�e��� y.������b���y�bx�j�m�c���ex�8��� �����\��RYΈ���T��W��RQSS�K��T��W��T��VWB�K�Y��\��ܛY\�]�[�ٙ\�Z[�\[�[��H��]N����y�cx�����9���हb-�fd8�fx���hzh!x���`b��*8स�jx�a�)�����b�. 8�*H���]\Έ�]]ܚ]]]�H���Y�N��Y��X�]�H���Y]�Έ�K��ۘ�\�[ێ�����/&�������.��ह.#yod��j�i�8�d���a�zb+z,�y��x� y�.�b�yi�9k��� yc�o%yab8�n8�k�c��cy����dx� z)!��l9.��b�y�`8�9.���kz !yf��/d��j��8�����/&�b-�fd9�bxऺ`o��dx� yk���%9k���c9c�o%yab8ऺ!��,x�j�`n9����i��cx���9h��ह讹/�x�fx��� ���^�\[ێ��idy�!9�`�.���`��k�쯹���9d"9�!��8�j�,���*:,�9��x�o��i�. 9o��ڮ��[��\�Z[���`!�b)x�k��+��ey�hy.������*yb*ya��!��c9d"9�!��8�b�`c��$8� yidy�!9a�yk�x�j8�e�h�Yk���k�,�9��x���b*y���j�o�8�f8�i�b)9��x�ex�8��� �����\��RYΈ���T��W��RQSS�K��T��W��T��VWB�K�Y��\��ܛY\�\�Y��X��\[��][ۈ��]N��k���%9k���k��*yb*yb*y�*8� yh,zak8・経費控除をどう对応するか。",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "実演家の実演から生じる権利等の帰属・利用条件と、報酬・二次使用料・SNS・ファンクラブ・グッズ費収益配、経費控除をできるだけ明確ね���jםj�Z�ǫ��
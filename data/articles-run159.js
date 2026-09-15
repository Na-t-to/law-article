(() => {
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
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  const digitalEvent = (window.REFORM_EVENT_DATA || []).find((item) => item && item.id === "digital-commerce-tokusho-2026-review");
  if (digitalEvent) {
    digitalEvent.matchSourceIds = addUnique(digitalEvent.matchSourceIds, "source-caa-digital-tokusho-interim-final-2026");
    digitalEvent.sourceIds = addUnique(digitalEvent.sourceIds, "source-caa-digital-tokusho-interim-final-2026");
  }

  const additions = [
    {
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-15",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／消費者契約法見直し・中間取りまとめ",
      status: "adopted",
      summary: "消費者の多様な脆弱性、継続的契約の解約妨害・更新・契約変更、解約料等について、2026年9月10日時点の検討結果を正式な中間取りまとめとして整理した一次資料。解約料の立証責任等は、事業者側に立証責任を置くA案と、損害の性質に応じて消費者・事業者へ分けるB案を併記しており、制度選択はなお未確定である。法案成立・施行済みルールではない。",
      whyImportant: [
        "8月31日の中間取りまとめ案が正式な中間取りまとめとなり、消費者契約法見直しの現時点の基準資料が更新された",
        "解約妨害、合理的な離脱方法、更新・重要な契約変更の事前通知など、サブスクリプション等の契約・解約運用に直結する検討事項を一体で確認できる",
        "解約料の立証責任についてA案・B案が併記されており、旧整理のように『一律の立証責任転換を見送った』と単純化できないことを確認できる"
      ],
      audience: ["企業法務", "消費者向けサービス担当", "EC・サブスクリプション企画", "カスタマーサポート"],
      audienceReason: "約款だけでなく、解約導線、更新・契約変更通知、解約料の説明と立証資料まで含む将来対応を、現行法と検討中の制度案を分けて準備するため。",
      categories: ["契約", "消費者法・表示", "AI・デジタル"],
      relatedTopics: ["consumer-contract-law-review-2026"],
      relatedIssues: [
        "consumer-contract-vulnerability-release",
        "consumer-contract-cancellation-obstruction",
        "consumer-contract-cancellation-fees"
      ],
      primarySourceIds: ["source-caa-consumer-contract-interim-final-2026"],
      reformEventId: "consumer-contract-law-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-consumer-contract-interim-final-2026"],
      legacyReformInference: false,
      whatChanged: "中間取りまとめ案が正式な中間取りまとめとなった。特に解約料の立証責任等は、単純な転換見送りではなくA案・B案を併記して今後の検討に委ねる整理であることを反映した。"
    },
    {
      id: "article-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-15",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／デジタル取引・特定商取引法等見直し・中間取りまとめ",
      status: "adopted",
      summary: "SNS・チャット等による勧誘、通信販売の表示・UI、契約・解約、デジタルプラットフォームに加え、レスキュー商法・点検商法、後出しマルチ等について2026年9月10日時点の制度見直しの方向を正式な中間取りまとめとして整理した一次資料。低価格表示で訪問を誘発して現場で大幅な高額契約を勧誘する類型や、消費者の意思確認前の作業着手等への規律強化も示すが、具体的な法案・条文・施行時期は未確定である。",
      whyImportant: [
        "9月2日の中間とりまとめ案が正式な中間取りまとめとなり、デジタル取引・特定商取引法等の制度見直しを追う基準資料が更新された",
        "SNS・チャット勧誘、申込み画面・UI、契約・解約、プラットフォームというオンライン取引の論点を一連の顧客導線として確認できる",
        "レスキュー商法・点検商法について、広告価格と現場価格の著しい乖離、意思確認前の作業着手、クーリング・オフ妨害等を具体的な規制候補として整理している"
      ],
      audience: ["企業法務", "EC・アプリ運営", "マーケティング", "カスタマーサポート", "訪問・緊急駆け付けサービス担当"],
      audienceReason: "広告・勧誘から申込み、作業開始、契約確認、解約・クーリング・オフまで、将来の規律強化が想定される顧客導線を現行ルールと分けて棚卸しするため。",
      categories: ["消費者法・表示", "契約", "AI・デジタル"],
      relatedTopics: ["digital-commerce-tokusho-review"],
      relatedIssues: [
        "dt-chat-solicitation",
        "dt-ui-steering",
        "dt-cancellation-contract",
        "dt-platform",
        "dt-rescue-inspection-sales"
      ],
      primarySourceIds: ["source-caa-digital-tokusho-interim-final-2026"],
      reformEventId: "digital-commerce-tokusho-2026-review",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-digital-tokusho-interim-final-2026"],
      legacyReformInference: false,
      whatChanged: "中間とりまとめ案が正式な中間取りまとめとなり、オンライン取引に加えてレスキュー商法・点検商法等の訪問型取引についても、規律強化の方向を既存テーマへ明示した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
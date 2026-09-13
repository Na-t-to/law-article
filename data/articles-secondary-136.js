(() => {
  const topicSlug = "customer-harassment";
  const responseIssueId = "ch-response";
  const sourceId = "source-mhlw-customer-harassment-manual-2026-09";
  const reformEventId = "customer-harassment-obligation-2026";
  const guidelineSourceId = "source-customer-harassment-guideline-2026";

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

  const addUniqueString = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const addUniqueStrings = (target, values) => {
    let next = Array.isArray(target) ? [...target] : [];
    (values || []).forEach((value) => {
      if (value && !next.includes(value)) next.push(value);
    });
    return next;
  };

  const source = {
    id: sourceId,
    title: "カスタマーハラスメント対策企業マニュアル（令和8年度改訂版）",
    type: "guideline",
    typeLabel: "厚生労働省・実務マニュアル",
    authority: "厚生労働省",
    publishedAt: "2026-09-08",
    url: "https://www.mhlw.go.jp/content/11900000/000915233.pdf",
    importance: "最高",
    whyImportant: "2026年10月1日のカスタマーハラスメント防止措置義務化を前に、基本方針、相談体制、対応方法・手順、教育・研修、事実確認、被害者配慮、再発防止、悪質事案対応、記録管理までを企業の運用手順へ具体化した厚生労働省の令和8年度改訂マニュアル。",
    topics: [topicSlug]
  };

  const sources = window.SOURCE_DATA || [];
  const sourceIds = new Set(sources.map((item) => item && item.id).filter(Boolean));
  const sourceUrls = new Set(sources.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!sourceIds.has(source.id) && !sourceUrls.has(normalizeUrl(source.url))) {
    window.SOURCE_DATA = sources.concat(source);
  }

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic || topic.slug !== topicSlug) return topic;

    const issues = (topic.issues || []).map((issue) => {
      if (!issue || issue.id !== responseIssueId) return issue;
      return {
        ...issue,
        sourceIds: addUniqueString(issue.sourceIds, sourceId)
      };
    });

    return {
      ...topic,
      summary: "2026年10月1日から全ての事業主に義務付けられるカスタマーハラスメント防止措置について、指針の定義と厚生労働省の令和8年度改訂マニュアルを基に、社内方針・相談・初動・記録・研修までの実装を整理する。",
      lastUpdated: "2026-09-14",
      lastVerified: "2026-09-14",
      overview: addUniqueStrings(topic.overview, [
        "厚生労働省は2026年9月8日、10月1日の法定義務化を踏まえて『カスタマーハラスメント対策企業マニュアル』令和8年度改訂版を公表した。法定措置を、事前準備・相談・対応手順・研修・事案記録・取引先対応等の企業運用へ落とし込む実務資料として扱う。"
      ]),
      currentSummary: {
        ...(topic.currentSummary || {}),
        facts: addUniqueStrings(topic.currentSummary?.facts, [
          "厚生労働省は2026年9月8日、改正労働施策総合推進法とカスタマーハラスメント防止指針を反映した『カスタマーハラスメント対策企業マニュアル（令和8年度改訂版）』を公表した。",
          "改訂マニュアルは、基本方針・基本姿勢の明確化、相談対応体制、対応方法・手順、教育・研修、事実関係の確認、被害者への配慮、再発防止、悪質事案への対処、プライバシー保護・不利益取扱い禁止までを一連の運用として整理している。",
          "マニュアルはBtoCだけでなくBtoBの取引相手も『顧客等』に含まれ得ることを明示し、取引先間で事実確認等の協力が必要となる場面や、自社従業員が他社でハラスメントを行った場合の対応も扱っている。",
          "厚生労働省は令和8年度内に対策実施企業へのヒアリング結果を追記し、マニュアルを再改訂する予定としている。"
        ]),
        interpretations: addUniqueStrings(topic.currentSummary?.interpretations, [
          "防止指針が法定義務の骨格を示すのに対し、改訂マニュアルはその義務を現場権限、相談経路、対応手順、記録様式、研修へ変換する実装レイヤーとして使うのが適切である。",
          "カスタマーハラスメント対応は顧客対応部門だけの問題ではなく、BtoBの取引先との協力や、自社従業員が他社に対して行為者となる場合の人事・懲戒対応まで含む組織横断の統制として設計する必要がある。"
        ]),
        implications: addUniqueStrings(topic.currentSummary?.implications, [
          "既存の社内マニュアルを、基本方針、相談窓口、現場の対応権限、対応方法・手順、教育・研修、事実確認、被害者配慮、再発防止、悪質事案対応、プライバシー保護・不利益取扱い禁止の各項目に照らして点検する。",
          "事案の申出内容、対応経緯、結果を記録して関係部署で共有し、再発防止や運用見直しに利用できる記録・報告フローを整える。",
          "取引先から自社従業員の行為について事実確認等の協力を求められた場合の窓口・調査・人事対応をあらかじめ決める。"
        ]),
        uncertain: addUniqueStrings(topic.currentSummary?.uncertain, [
          "令和8年度内に企業ヒアリングを踏まえたマニュアル再改訂が予定されているため、事例・運用例の追加や更新を継続確認する。"
        ])
      },
      issues,
      sourceIds: addUniqueString(topic.sourceIds, sourceId),
      practicalImpacts: addUniqueStrings(topic.practicalImpacts, [
        "対応マニュアル・権限設計",
        "研修・ロールプレイ",
        "事案記録・取引先協力フロー"
      ])
    };
  });

  window.REFORM_DATA = (window.REFORM_DATA || []).map((event) => {
    if (!event || event.id !== reformEventId) return event;
    return {
      ...event,
      matchSourceIds: addUniqueString(event.matchSourceIds, sourceId),
      sourceIds: addUniqueString(event.sourceIds, sourceId)
    };
  });

  const article = {
    id: "article-mhlw-customer-harassment-manual-2026-09",
    title: "カスタマーハラスメント対策企業マニュアル（令和8年度改訂版）",
    publisher: "厚生労働省",
    author: "カスタマーハラスメント対策企業マニュアル改訂及び業種別カスタマーハラスメント対策の取組支援事業 改訂検討委員会",
    publishedAt: "2026-09-08",
    collectedAt: "2026-09-14",
    url: "https://www.mhlw.go.jp/content/11900000/000915233.pdf",
    sourceType: "primary",
    sourceLabel: "一次資料・厚生労働省／実務マニュアル",
    status: "adopted",
    summary: "2026年10月1日のカスタマーハラスメント防止措置義務化を踏まえて厚生労働省が改訂した企業向け実務マニュアル。方針・相談体制・対応方法と手順・研修という事前準備から、事実確認、被害者配慮、再発防止、悪質事案への対処、記録管理、取引先との協力まで、法定措置を企業の運用フローへ具体化している。",
    whyImportant: [
      "防止指針の義務項目を、現場が使う対応マニュアル、相談経路、権限、記録、研修へ落とし込むための公式な実装資料として使える",
      "BtoCに限らずBtoBの取引相手も対象となり得ることや、取引先企業との事実確認・協力、自社従業員が行為者となる場合の対応まで整理している",
      "厚生労働省が令和8年度内の再改訂を予定しているため、10月1日の施行時点で使う暫定的な運用基準と、今後の更新対象を分けて管理できる"
    ],
    audience: ["人事・労務", "企業法務", "顧客対応・店舗責任者", "営業・取引先管理"],
    audienceReason: "施行直前に、法定措置を社内マニュアル、相談窓口、現場権限、研修、記録・報告へ具体的に実装するため。",
    categories: ["労務", "危機管理・コンプライアンス"],
    relatedTopics: [topicSlug],
    relatedIssues: ["ch-definition", responseIssueId],
    primarySourceIds: [sourceId, guidelineSourceId],
    reformEventId,
    reformStageAtPublication: "finalized_pending",
    reformStageSourceIds: [guidelineSourceId, sourceId],
    whatChanged: "テーマ更新／法定措置を社内マニュアル・相談・対応手順・研修・記録・取引先協力へ落とし込む厚生労働省の令和8年度改訂マニュアルを追加した。"
  };

  const articles = window.ARTICLE_DATA || [];
  const articleIds = new Set(articles.map((item) => item && item.id).filter(Boolean));
  const articleUrls = new Set(articles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  if (!articleIds.has(article.id) && !articleUrls.has(normalizeUrl(article.url))) {
    window.ARTICLE_DATA = articles.concat(article);
  }
})();

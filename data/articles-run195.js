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

  const topic = "plant-variety-seed-law-2026";
  const seedEvent = "plant-variety-protection-seed-act-2026-amendment";
  const varietyEvent = "important-variety-breeding-act-2026";
  const seedSource = "source-maff-seed-amendment-2026";
  const lawSource = "source-maff-important-variety-law-2026";
  const policySource = "source-maff-important-variety-policy-draft-2026";

  const additions = [
    {
      id: "article-maff-seed-amendment-2026",
      title: "種苗法の改正について（令和8年改正）",
      publisher: "農林水産省",
      author: "農林水産省",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-17",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年改正種苗法／公式Q&A",
      status: "adopted",
      summary: "2026年改正種苗法の概要・条文・新旧対照・Q&Aを集約する農林水産省の公式ページ。育成者権の存続期間延長等は2026年7月24日に施行済みで、出願品種の輸出差止め、輸出目的保管、損害額算定、登録品種名称による推定、貸渡し等の主要改正は12月1日に施行される。Q&Aは警告を前提とする出願品種の輸出差止め、輸出目的保管の具体例、損害額算定の使い方まで整理している。",
      whyImportant: [
        "段階施行を一次資料で確認でき、7月24日施行済み部分と12月1日施行部分を混同せずに管理できる",
        "登録後だけでなく出願中・輸出前保管・貸渡しまで海外流出防止の管理点が広がることを具体的に把握できる",
        "損害額算定と品種同一性の推定が強化され、権利行使時の数量・名称・取引記録の重要性が分かる"
      ],
      audience: ["企業法務", "知的財産担当", "種苗・食品・アグリバイオ事業者", "大学・研究機関"],
      audienceReason: "2026年12月1日の主要改正施行に向けて、知財台帳、ライセンス、物流・輸出、証拠管理を一体で点検するため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: ["seed-2026-term-scope", "seed-2026-pending-export-lease", "seed-2026-damages-proof", "seed-2026-licensing-operation"],
      primarySourceIds: [seedSource, lawSource],
      reformEventId: seedEvent,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [seedSource, lawSource],
      legacyReformInference: false,
      whatChanged: "2026年改正種苗法を新テーマとして追加し、7月24日の先行施行と12月1日の主要施行を分け、出願中保護・輸出目的保管・損害立証・貸渡しまで整理した。"
    },
    {
      id: "article-maff-important-variety-policy-20260907",
      title: "第1回気候変動等対応品種育成・普及小委員会 配布資料",
      publisher: "農林水産省",
      author: "食料・農業・農村政策審議会",
      publishedAt: "2026-09-07",
      collectedAt: "2026-09-17",
      url: "https://www.maff.go.jp/j/council/seisaku/kikaku/hinsyu/260907.html",
      sourceType: "primary",
      sourceLabel: "一次資料・気候変動等対応品種法／基本方針案",
      status: "adopted",
      summary: "2026年7月に成立・公布された気候変動等対応品種法の施行準備として、国の基本方針案等を審議する第1回小委員会資料。新法は国の基本方針、農林水産大臣による重要品種育成事業計画の認定、都道府県基本計画、都道府県知事による種苗生産事業活動計画の認定等を設けるが、9月時点では施行規則等とともに具体化の途中にある。",
      whyImportant: [
        "成立済みの新法と、施行前に具体化中の基本方針・認定運用を分けて追える",
        "育種機関・事業者・自治体がどの計画を作り、どの主体が認定するのか制度実装の入口を確認できる",
        "種苗法の育成者権保護とは別の政策支援・計画認定制度であることを明確にできる"
      ],
      audience: ["企業法務", "知的財産担当", "種苗・アグリバイオ事業者", "大学・研究機関", "自治体担当"],
      audienceReason: "新法の認定・支援制度を利用する可能性がある組織が、確定法と施行準備中の要件を区別して準備するため。",
      categories: ["知的財産", "契約"],
      relatedTopics: [topic],
      relatedIssues: ["important-variety-plan-framework", "seed-2026-licensing-operation"],
      primarySourceIds: [lawSource, policySource],
      reformEventId: varietyEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource, policySource],
      legacyReformInference: false,
      whatChanged: "気候変動等対応品種法を種苗法とは別の新法イベントとして追加し、基本方針・計画認定の施行準備を独立して追えるようにした。"
    },
    {
      id: "article-amt-seed-important-variety-20260908",
      title: "Amendment to the Plant Variety Protection and Seed Act and Enactment of the Act on the Promotion of the Breeding of Important Varieties and Production of Their Propagating Material",
      publisher: "Anderson Mori & Tomotsune",
      author: "Miki Goto / Yuki Takemoto",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-17",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260908001_en_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／種苗法改正と重要品種新法",
      status: "adopted",
      summary: "2026年改正種苗法と重要品種新法を一つの実務解説で対比するAMTの記事。種苗法では育成者権の10年延長に加え、出願中保護、輸出目的保管、損害額算定、侵害立証、貸渡しに関する措置を整理し、新法では国の基本方針、都道府県基本計画、育成事業計画・種苗生産事業活動計画の認定枠組みを説明する。",
      whyImportant: [
        "二つの法律を『権利保護の強化』と『重要品種の育成・生産促進』という異なる機能として短く比較できる",
        "種苗法改正の個別論点を、育成者が適切な経済的利益を得ることと国内品種の国際競争力という制度目的へ接続して読める",
        "新法の計画認定制度を育成者権等の知的財産保護と併せて見る必要性が分かり、研究開発・ライセンス・事業計画の横断整理に使いやすい"
      ],
      audience: ["企業法務", "知的財産担当", "種苗・食品・ライフサイエンス事業者", "大学・研究機関"],
      audienceReason: "一次資料を読む前後に二法の機能分担を把握し、権利管理と育成・生産計画を混同せず実務対応へ落とすため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: [topic],
      relatedIssues: ["seed-2026-term-scope", "seed-2026-pending-export-lease", "seed-2026-damages-proof", "important-variety-plan-framework", "seed-2026-licensing-operation"],
      primarySourceIds: [seedSource, lawSource, policySource],
      reformEventId: seedEvent,
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: [seedSource, lawSource],
      legacyReformInference: false,
      whatChanged: "種苗法改正と気候変動等対応品種法を、権利保護と育成・生産促進という別制度として横断できる実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

(() => {
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (!list.includes(value)) list.push(value);
    return list;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "patent-network-infringement-review-2026");
  if (topic) {
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    topic.sourceIds = addUnique(topic.sourceIds, "source-courts-dwango-fc2-program-2025");
    topic.sourceIds = addUnique(topic.sourceIds, "source-courts-dwango-fc2-system-2025");

    const currentIssueId = "patent-crossborder-network-current-law";
    if (!(topic.issues || []).some((issue) => issue && issue.id === currentIssueId)) {
      topic.issues = (topic.issues || []).concat([{
        id: currentIssueId,
        title: "国外サーバーを含むネットワーク型サービスに日本の特許権が及ぶか",
        status: "authoritative",
        stage: "effective",
        views: [],
        conclusion: "国外で行為の一部が行われ、国外サーバーを含む場合でも、それだけで日本の特許権の効力が当然に排除されるわけではない。2025年3月3日の最高裁判決は、国内端末へのプログラム配信や、国外サーバーと国内端末を含むシステム構築について、事案全体を実質的に評価して日本国内の『提供』『譲渡等』『生産』に当たり得るとした。",
        exception: "最高裁判決は具体的なサービス・発明を前提とする事例判断であり、あらゆる越境配信・クラウド利用が日本国内の実施になると一般化してはならない。",
        uncertain: "判決が直接扱っていない被疑侵害行為についての射程、考慮要素の重み付けは今後の裁判例と特許庁の『考え方の整理』を確認する必要がある。",
        sourceIds: ["source-courts-dwango-fc2-program-2025", "source-courts-dwango-fc2-system-2025"]
      }]);
    }

    const reviewIssue = (topic.issues || []).find((issue) => issue && issue.id === "patent-crossborder-network-implementation");
    if (reviewIssue) {
      reviewIssue.sourceIds = addUnique(reviewIssue.sourceIds, "source-courts-dwango-fc2-program-2025");
      reviewIssue.sourceIds = addUnique(reviewIssue.sourceIds, "source-courts-dwango-fc2-system-2025");
      reviewIssue.conclusion = "2025年3月3日の最高裁判決により、国外サーバーを含む行為でも実質的に国内の実施行為と評価され得ることが現行法上示されている。その射程外の態様について予見可能性を高めるため、特許庁は被疑侵害行為の類型と海外事例を用いた『考え方の整理』を検討中である。";
      reviewIssue.exception = "最高裁判決による現行法上の判断と、特許庁が検討中の『考え方の整理』を混同しない。具体的な侵害判断は発明の構成、行為主体、国内外で行われる処理、国内との結び付き等に左右される。";
    }

    topic.currentSummary = topic.currentSummary || {};
    topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "最高裁は2025年3月3日、国外サーバーから国内端末へプログラムを配信する行為について、特許法2条3項1号の『電気通信回線を通じた提供』及び101条1号の『譲渡等』に当たり得ると判断した。");
    topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "同日の別判決では、国外サーバーからファイルを配信し、国外サーバーと国内端末を含むシステムを構築する行為について、行為全体を実質的に評価して国内の『生産』に当たり得ると判断した。");
    topic.currentSummary.interpretations = addUnique(topic.currentSummary.interpretations, "現行法の基準点である最高裁判決と、最高裁判決が直接扱っていない類型について特許庁が検討する『考え方の整理』を分けて管理する必要がある。");
    topic.currentSummary.implications = addUnique(topic.currentSummary.implications, "国外サーバーを利用していることだけを根拠に日本特許の侵害リスクを否定せず、2025年最高裁判決の事案との共通点・相違点を確認する。");
  }

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

  const additions = [
    {
      id: "article-courts-dwango-fc2-program-2025",
      title: "令和5年（受）第14号・第15号 特許権侵害差止等請求事件",
      publisher: "最高裁判所",
      author: "最高裁判所第二小法廷",
      publishedAt: "2025-03-03",
      collectedAt: "2026-09-15",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93838.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／最高裁判決・越境プログラム配信",
      status: "adopted",
      summary: "米国所在サーバーから日本国内のユーザー端末へプログラムを配信する行為について、国外で行為の一部が行われていることのみを理由に日本の特許法上の実施から外れるとはせず、事案の具体的事情の下で、特許法2条3項1号の『電気通信回線を通じた提供』及び101条1号の『譲渡等』に当たり得るとした最高裁判決。",
      whyImportant: ["国外サーバーを利用するだけで日本特許の侵害リスクが当然に排除されるわけではないことを最高裁判決から確認できる", "クラウド・配信型サービスで、送信元サーバーの所在地と国内端末への提供を分けて侵害分析する出発点になる", "特許庁が検討中の『考え方の整理』と現行法の確定部分を分けて読む基準になる"],
      audience: ["企業法務", "知財・特許担当", "IT・クラウド事業担当"],
      audienceReason: "国外サーバーを含むサービス設計について、日本特許の侵害リスクをサーバー所在地だけで判断せず、現行最高裁判例に照らして点検するため。",
      categories: ["知的財産", "AI・デジタル"],
      relatedTopics: ["patent-network-infringement-review-2026"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-implementation"],
      primarySourceIds: ["source-courts-dwango-fc2-program-2025"],
      legacyReformInference: false,
      whatChanged: "論点補強／越境ネットワーク発明について、国外サーバーから国内端末へのプログラム配信を日本特許法上の『提供』『譲渡等』として評価し得る最高裁判決を現行法の基準点として追加した。"
    },
    {
      id: "article-courts-dwango-fc2-system-2025",
      title: "令和5年（受）第2028号 特許権侵害差止等請求事件",
      publisher: "最高裁判所",
      author: "最高裁判所第二小法廷",
      publishedAt: "2025-03-03",
      collectedAt: "2026-09-15",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93839.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／最高裁判決・越境システム構築",
      status: "adopted",
      summary: "国外サーバーから国内端末へファイルを配信し、国外サーバーと国内端末を含むシステムを構築する行為について、行為全体を実質的に評価し、日本国内における特許法上の『生産』に当たり得るとした最高裁判決。",
      whyImportant: ["ネットワーク型システムの構成要素が国外にある場合でも、国内の『生産』となり得ることを最高裁が示した基準点である", "SaaS・クラウド・配信サービスで、サーバーと国内端末をまたぐシステム構築を請求項単位で分析する必要性を確認できる", "2026年の特許制度見直しで議論される予見可能性の課題を、確定判例と未確定の政策整理に分けて把握できる"],
      audience: ["企業法務", "知財・特許担当", "IT・クラウド事業担当"],
      audienceReason: "国外サーバーと国内端末を組み合わせるシステムについて、現行判例に基づく日本特許の侵害リスクを設計段階から点検するため。",
      categories: ["知的財産", "AI・デジタル"],
      relatedTopics: ["patent-network-infringement-review-2026"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-implementation"],
      primarySourceIds: ["source-courts-dwango-fc2-system-2025"],
      legacyReformInference: false,
      whatChanged: "論点補強／国外サーバーと国内端末から成るシステムの構築について、日本国内の『生産』と評価し得る最高裁判決を現行法基準として追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url))));
})();

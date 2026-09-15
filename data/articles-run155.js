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

  const additions = [
    {
      id: "article-moj-genai-publicity-rights-guidance-2026",
      title: "肖像、声等の無断利用による民事責任の在り方に関する検討会取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―",
      publisher: "法務省",
      author: "肖像、声等の無断利用による民事責任の在り方に関する検討会",
      publishedAt: "2026-08-07",
      collectedAt: "2026-09-15",
      url: "https://www.moj.go.jp/MINJI/minji05_00778.html",
      sourceType: "primary",
      sourceLabel: "一次資料／法務省・生成AIパブリシティ権等解釈指針",
      status: "adopted",
      summary: "生成AIの普及に伴う肖像・声等の無断利用について、現行法と判例法理を前提に、パブリシティ権、肖像等をみだりに利用されない人格的利益、損害賠償・差止め、不正競争防止法の適用を7つの想定事例で整理した法務省検討会の取りまとめ。声も具体的事情に応じて保護対象となり得ることを明示する。",
      whyImportant: ["生成AIによる肖像・声利用について新しい禁止規定ではなく現行法の解釈基準を示す一次資料である", "俳優・歌手・声優、性的ディープフェイク、非営利利用、ライセンス、故人まで具体的な想定事例でリスクを確認できる", "パブリシティ権と人格的利益、不正競争防止法を同じ問題として混同せず要件ごとに検討できる"],
      audience: ["企業法務", "知財担当", "AI・プロダクト担当", "広告・メディア・エンタメ担当"],
      audienceReason: "実在人物を想起させる画像・映像・音声を生成AIで作成・公開・商用利用する際の権利処理と紛争予防の基準点になるため。",
      categories: ["知的財産", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: ["genai-portrait-voice-publicity-rights"],
      relatedIssues: ["genai-publicity-right-portrait-voice", "genai-personality-interest-portrait-voice", "genai-publicity-remedies-licensing", "genai-publicity-ucpa-overlap"],
      primarySourceIds: ["source-moj-genai-publicity-rights-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ／生成AIによる肖像・声の無断利用について、パブリシティ権と人格的利益、救済、契約・不競法との関係を現行法の解釈指針として整理した。"
    },
    {
      id: "article-not-genai-publicity-rights-report-upper-2026",
      title: "『肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―』のポイント（上）",
      publisher: "長島・大野・常松法律事務所",
      author: "東崎賢治・小槻英之・井原諄・富永有美",
      publishedAt: "2026-08-18",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260818-2/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／生成AI・パブリシティ権",
      status: "adopted",
      summary: "法務省の2026年8月報告書について、ピンク・レディー事件最高裁判決など従来の判例法理と生成AI利用を接続し、パブリシティ権侵害の成否を中心に解説する。報告書が法的拘束力を持つ新ルールではなく、裁判例の乏しい生成AI事案の予測可能性を高める解釈指針である点を明確にする。",
      whyImportant: ["生成AIに特有の独立した侵害基準が設けられたと誤解せず、従来のパブリシティ権判例との接続を理解できる", "声の法的保護を含め、顧客吸引力と利用目的・態様をどう切り分けて見るかの補助線になる", "法務省報告書と2025年の不正競争防止法上の整理の役割の違いも確認できる"],
      audience: ["企業法務", "知財担当", "AI・プロダクト担当", "広告・メディア・エンタメ担当"],
      audienceReason: "一次資料だけでは掴みにくい判例法理との関係と生成AI事案への当てはめを実務目線で確認するため。",
      categories: ["知的財産", "AI・デジタル"],
      relatedTopics: ["genai-portrait-voice-publicity-rights"],
      relatedIssues: ["genai-publicity-right-portrait-voice", "genai-publicity-ucpa-overlap"],
      primarySourceIds: ["source-moj-genai-publicity-rights-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／法務省解釈指針を従来のパブリシティ権判例と接続し、生成AI事案での侵害判断を読むための実務解説を追加。"
    },
    {
      id: "article-not-genai-publicity-rights-report-lower-2026",
      title: "『肖像、声等の無断利用による民事責任の在り方に関する検討会 取りまとめ報告書―生成AIによるパブリシティ権侵害等に関する解釈指針―』のポイント（下）",
      publisher: "長島・大野・常松法律事務所",
      author: "東崎賢治・小槻英之・井原諄・富永有美",
      publishedAt: "2026-08-19",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260819-2/",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニュースレター／肖像・声の人格的利益",
      status: "adopted",
      summary: "法務省報告書のうち、肖像等をみだりに利用されない人格的利益の侵害を中心に、俳優の生成動画、歌手・声優の生成音源、性的な生成画像・音源、非営利利用、所属事務所への利用許諾・譲渡、故人の利用という7つの想定事例と実務上の留意点を整理する。",
      whyImportant: ["収益目的がない利用でも人格的利益の侵害が問題となり得ることを、パブリシティ権とは別の軸で理解できる", "性的ディープフェイクや声の無断合成を含む具体例から、公開前審査で確認すべき事情を抽出できる", "所属事務所へのライセンス・譲渡や故人の利用など、契約・権利処理の未確定部分を把握できる"],
      audience: ["企業法務", "知財担当", "AI・プロダクト担当", "広告・メディア・エンタメ担当"],
      audienceReason: "生成AI利用時の人格的利益への配慮、権利処理、削除・差止め対応を具体的な想定事例から設計するため。",
      categories: ["知的財産", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: ["genai-portrait-voice-publicity-rights"],
      relatedIssues: ["genai-personality-interest-portrait-voice", "genai-publicity-remedies-licensing"],
      primarySourceIds: ["source-moj-genai-publicity-rights-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／人格的利益、性的ディープフェイク、非営利利用、ライセンス・故人利用まで想定事例に沿って読む実務解説を追加。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url))));
})();

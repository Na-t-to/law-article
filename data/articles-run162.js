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
      id: "article-maff-seed-law-qa-2026",
      title: "令和8年度種苗法改正に関するQ&A",
      publisher: "農林水産省",
      author: "農林水産省",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-15",
      url: "https://www.maff.go.jp/j/shokusan/syubyouhou/r8kaisei_qa.html",
      sourceType: "primary",
      sourceLabel: "一次資料／種苗法・2026年改正／施行Q&A",
      status: "adopted",
      summary: "2026年種苗法改正について、育成者権の存続期間延長、出願品種の輸出差止め、登録品種の輸出目的保管、損害賠償額算定、貸渡し、優先審査、第三者意見募集等を具体的なQ&Aで整理した農林水産省資料。育成者権の存続期間延長等は7月24日施行、その他の主要改正は12月1日施行であることも明示している。",
      whyImportant: [
        "既に施行された育成者権の存続期間延長と、12月1日施行の権利行使強化を分けて確認できる",
        "海外流出対策を、輸出そのものだけでなく出願中の差止めと輸出目的保管まで時系列で確認できる",
        "損害賠償・立証・貸渡しなど、ライセンス契約や侵害対応へ直接影響する改正点を実務例で確認できる"
      ],
      audience: ["企業法務", "知的財産", "種苗・農業関連事業者", "輸出・物流担当"],
      audienceReason: "保有する育成者権、品種ライセンス、海外持出し、物流・保管、侵害対応を2026年改正へ合わせて点検する基準になるため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: ["plant-variety-seed-act-2026"],
      relatedIssues: ["seed-act-breeders-right-extension", "seed-act-export-protection", "seed-act-remedies-leasing"],
      primarySourceIds: ["source-maff-seed-law-qa-2026"],
      reformEventId: "seed-act-2026-amendment",
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: ["source-maff-seed-law-qa-2026"],
      legacyReformInference: false,
      whatChanged: "2026年種苗法改正を新しい研究テーマとして追加し、7月24日施行部分と12月1日施行部分を分離して整理した。"
    },
    {
      id: "article-maff-important-varieties-policy-2026",
      title: "第1回気候変動等対応品種育成・普及小委員会 配布資料",
      publisher: "農林水産省",
      author: "農林水産省",
      publishedAt: "2026-09-07",
      collectedAt: "2026-09-15",
      url: "https://www.maff.go.jp/j/council/seisaku/kikaku/hinsyu/260907.html",
      sourceType: "primary",
      sourceLabel: "一次資料／重要品種法／基本方針案・施行準備",
      status: "adopted",
      summary: "2026年に制定された重要品種の育成及びその種苗の生産の振興に関する法律に基づき、国が策定する基本方針案と説明資料を初めて審議した小委員会資料。重要品種の育成・種苗生産を国・都道府県の計画と事業認定で促進する制度が、施行に向けて具体化していることを確認できる。",
      whyImportant: [
        "種苗法の育成者権強化とは別に、重要品種の育成・種苗生産を政策的に促進する新制度の実装を追える",
        "新法成立後に基本方針がどのように具体化されているかを一次資料から確認できる",
        "育種・種苗生産事業者が将来の計画認定や支援措置を検討するための早期の基準資料になる"
      ],
      audience: ["企業法務", "知的財産", "種苗・農業関連事業者", "研究開発担当", "事業企画"],
      audienceReason: "重要品種法の施行前に、基本方針と認定制度の具体化を把握し、対象事業・計画認定の準備を検討するため。",
      categories: ["知的財産", "契約"],
      relatedTopics: ["plant-variety-seed-act-2026"],
      relatedIssues: ["important-varieties-framework", "important-varieties-basic-policy"],
      primarySourceIds: ["source-maff-important-varieties-act-2026", "source-maff-important-varieties-policy-draft-2026"],
      reformEventId: "important-varieties-act-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-maff-important-varieties-act-2026", "source-maff-important-varieties-policy-draft-2026"],
      legacyReformInference: false,
      whatChanged: "重要品種法について、成立・公布済みの新法と、2026年9月7日に示された基本方針案を分けて追う論点を追加した。"
    },
    {
      id: "article-amt-seed-important-varieties-2026",
      title: "Amendment to the Plant Variety Protection and Seed Act and Enactment of the Act on the Promotion of the Breeding of Important Varieties and Production of Their Propagating Material",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "後藤未来・竹本祐希",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260908001_en_001/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／種苗法改正・重要品種法",
      status: "adopted",
      summary: "2026年種苗法改正による育成者権の10年延長、出願中・輸出段階の保護、損害賠償・立証、貸渡し等の変更と、重要品種法による国の基本方針、都道府県基本計画、育成・種苗生産の計画認定を一つの制度環境として整理した実務解説。知的財産保護と気候変動等への品種育成政策が同時に進む構造を理解しやすい。",
      whyImportant: [
        "種苗法改正を個別条文の列挙ではなく、品種の海外流出防止と育成者への経済的還元という目的から整理している",
        "同時成立した重要品種法との役割分担を整理し、育成者権保護と育成・普及政策を混同せず読める",
        "知財・ライフサイエンス実務の観点から、種苗事業者が見るべき制度変更を短く横断できる"
      ],
      audience: ["企業法務", "知的財産", "種苗・農業関連事業者", "ライフサイエンス", "事業企画"],
      audienceReason: "二つの法律を別々に読むだけでは見えにくい、育成者権保護と重要品種政策の関係を実務目線で把握するため。",
      categories: ["知的財産", "契約", "国際取引"],
      relatedTopics: ["plant-variety-seed-act-2026"],
      relatedIssues: ["seed-act-breeders-right-extension", "seed-act-export-protection", "seed-act-remedies-leasing", "important-varieties-framework"],
      primarySourceIds: ["source-maff-seed-law-qa-2026", "source-maff-important-varieties-act-2026"],
      reformEventId: "seed-act-2026-amendment",
      reformStageAtPublication: "partially_effective",
      reformStageSourceIds: ["source-maff-seed-law-qa-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／種苗法改正と重要品種法を、育成者権保護と品種育成・普及政策の二層構造として読む実務解説を追加"
    },
    {
      id: "article-mod-defense-transfer-principles-2026",
      title: "「防衛装備移転三原則」等の一部改正について",
      publisher: "防衛省",
      author: "防衛省",
      publishedAt: "2026-04-21",
      collectedAt: "2026-09-15",
      url: "https://www.mod.go.jp/j/press/news/2026/04/21a.html",
      sourceType: "primary",
      sourceLabel: "一次資料／防衛装備移転三原則・運用指針／2026年改正",
      status: "adopted",
      summary: "政府が2026年4月21日に国家安全保障会議・閣議で防衛装備移転三原則と運用指針を改正した公式資料。従来、完成品の移転を救難・輸送・警戒・監視・掃海の5類型へ限定していた枠組みを見直し、改正後は個別案件ごとの審査を前提に海外移転の対象を広げた。",
      whyImportant: [
        "防衛・デュアルユース関連企業の海外案件で、従来の5類型を前提とした社内ルールを更新する基準点になる",
        "制度上の対象拡大と、個別案件での厳格な審査・移転後管理を同時に確認する必要があることを示す",
        "外為法上の輸出管理だけでは完結しない、防衛装備固有の政府方針・運用指針を追える"
      ],
      audience: ["企業法務", "輸出管理", "経済安全保障", "防衛・製造業", "事業開発"],
      audienceReason: "防衛装備・関連技術の海外移転案件で、三原則・運用指針、外為法、契約上の用途・第三国移転管理を一体で確認するため。",
      categories: ["国際取引", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: ["economic-security-tech-control"],
      relatedIssues: ["econsec-defense-equipment-transfer", "econsec-export-control"],
      primarySourceIds: ["source-mod-defense-transfer-principles-2026"],
      reformEventId: "defense-equipment-transfer-principles-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-mod-defense-transfer-principles-2026"],
      legacyReformInference: false,
      whatChanged: "経済安全保障・輸出管理テーマに、防衛装備移転三原則・運用指針の2026年改正を独立論点として追加した。"
    },
    {
      id: "article-na-defense-transfer-principles-2026",
      title: "防衛装備移転三原則・運用指針の抜本的改正",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "桜田雄紀・石戸信平・廣瀨詠太郎・新本寛人",
      publishedAt: "2026-05-15",
      collectedAt: "2026-09-15",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/competition_law_international_trade_260515",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／防衛装備移転・経済安全保障",
      status: "adopted",
      summary: "2026年4月21日の防衛装備移転三原則・運用指針改正について、完成品移転を原則5類型に限定していた従前制度から、個別審査を前提に制度上より広い移転を可能とする枠組みへ変わった点を、安全保障貿易管理・国際取引の実務から整理する解説。",
      whyImportant: [
        "公式資料だけでは把握しづらい、5類型撤廃が企業の海外移転案件へ与える実務上の意味を整理している",
        "防衛装備移転を輸出管理、グローバルコンプライアンス、製造業・航空宇宙・海事の案件設計へ接続している",
        "対象範囲の拡大を自由化と誤解せず、案件ごとの審査・管理が残ることを実務目線で確認できる"
      ],
      audience: ["企業法務", "輸出管理", "経済安全保障", "防衛・製造業", "国際取引"],
      audienceReason: "改正の制度差分を、自社の輸出審査・契約・用途管理・海外事業へ落とし込む際の論点を確認するため。",
      categories: ["国際取引", "危機管理・コンプライアンス", "情報セキュリティ"],
      relatedTopics: ["economic-security-tech-control"],
      relatedIssues: ["econsec-defense-equipment-transfer", "econsec-export-control"],
      primarySourceIds: ["source-mod-defense-transfer-principles-2026"],
      reformEventId: "defense-equipment-transfer-principles-2026",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-mod-defense-transfer-principles-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／防衛装備移転三原則の5類型撤廃を輸出管理・契約実務へ落とす法律事務所解説を追加"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-maff-seed-act-amendment-2026", title: "種苗法の改正について（令和8年改正）", publisher: "農林水産省", author: "農林水産省", publishedAt: "2026-07-17", collectedAt: "2026-09-16", url: "https://www.maff.go.jp/j/shokusan/syubyouhou/", sourceType: "primary", sourceLabel: "一次資料／2026年種苗法改正", status: "adopted",
      summary: "2026年7月17日に成立した種苗法改正の公式ページ。育成者権の存続期間延長、品種登録出願中の保護、輸出目的の種苗保管、損害額算定・侵害立証、種苗の貸渡し等に関する改正を、法律概要・条文・新旧対照表・Q&Aから確認できる。",
      whyImportant: ["育成者権の存続期間延長と海外流出対策を含む2026年改正の公式な入口で、法務・知財実務の基準資料になる", "2026年7月24日施行部分と12月1日施行部分があるため、改正事項ごとに対応時期を分けて管理できる", "契約・ライセンスだけでなく、輸出物流、種苗保管、貸渡し、侵害対応の運用まで見直す必要がある"],
      audience: ["知財・法務", "品種育成・研究開発", "種苗・農業関連事業", "輸出・物流担当"], audienceReason: "育成者権の期間、利用範囲、海外流出対策、侵害対応を改正後のルールへ切り替えるため。", categories: ["知的財産"], relatedTopics: ["plant-variety-seed-act-2026"], relatedIssues: ["seed-act-breeders-right-term-2026", "seed-act-export-remedies-2026"], primarySourceIds: ["source-maff-seed-act-amendment-2026", "source-maff-seed-act-qa-2026", "source-egov-seed-act-current"], reformEventId: "seed-act-2026-amendment", reformStageAtPublication: "finalized_pending", reformStageSourceIds: ["source-maff-seed-act-amendment-2026"], legacyReformInference: false, whatChanged: "新テーマ追加／2026年種苗法改正を、育成者権の存続期間延長と12月施行の海外流出対策・権利行使強化に分けて整理した。"
    },
    {
      id: "article-egov-important-varieties-rule-draft-2026", title: "重要品種の育成及びその種苗の生産の振興に関する法律施行規則案についての意見・情報の募集について", publisher: "農林水産省・e-Gov", author: "農林水産省", publishedAt: "2026-08-31", collectedAt: "2026-09-16", url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004400", sourceType: "primary", sourceLabel: "一次資料／重要品種新法施行規則案", status: "adopted", summary: "重要品種新法の施行に必要な施行規則案についてのパブリックコメント。重要品種育成事業計画、都道府県基本計画、重要品種種苗生産事業活動計画等の具体的な申請・手続事項を定める案で、2026年9月29日まで意見を募集している。", whyImportant: ["成立済みの重要品種新法を実務で利用するための申請・認定手続が具体化し始めたことを確認できる", "育成事業者・種苗生産事業者・都道府県が準備すべき情報や手続の方向性を把握できる", "まだ案段階なので、成立済みの法律本体と最終化前の下位ルールを混同しないための基準点になる"], audience: ["知財・法務", "品種育成・研究開発", "種苗生産事業者", "農業関連事業"], audienceReason: "重要品種新法の計画認定を利用する場合に、施行規則で具体化される申請・認定手続を先行確認するため。", categories: ["知的財産"], relatedTopics: ["plant-variety-seed-act-2026"], relatedIssues: ["important-varieties-certification-2026", "important-varieties-rulemaking-2026"], primarySourceIds: ["source-egov-important-varieties-act-2026", "source-egov-important-varieties-rule-draft-2026"], reformEventId: "important-varieties-act-2026-enactment", reformStageAtPublication: "finalized_pending", reformStageSourceIds: ["source-egov-important-varieties-act-2026"], legacyReformInference: false, whatChanged: "新テーマ追加／重要品種新法の施行規則案を、成立済み法律とは別の案段階として整理し、計画認定の実装を追えるようにした。"
    },
    {
      id: "article-egov-important-varieties-basic-policy-draft-2026", title: "重要品種の育成及びその種苗の生産の振興に関する基本的な方針案についての意見・情報の募集について", publisher: "農林水産省・e-Gov", author: "農林水産省", publishedAt: "2026-09-08", collectedAt: "2026-09-16", url: "https://public-comment.e-gov.go.jp/servlet/Public?CLASSNAME=PCMMSTDETAIL&Mode=0&id=550004401", sourceType: "primary", sourceLabel: "一次資料／重要品種新法・基本方針案", status: "adopted", summary: "重要品種新法5条に基づく国の基本方針案についてのパブリックコメント。重要品種の育成・種苗生産をどの方向で支援し、認定制度を運用するかの基礎となる方針案で、2026年10月7日まで意見を募集している。", whyImportant: ["重要品種新法の支援対象・政策目的を、法律の抽象規定から実際の制度運用へつなぐ基本方針の案を確認できる", "品種育成・種苗生産の事業計画を検討する企業が、認定制度の狙いと今後の政策方向を先行把握できる", "パブリックコメント中の案であり、最終版確定前に社内制度を固定しないための段階管理に使える"], audience: ["知財・法務", "品種育成・研究開発", "種苗生産事業者", "経営企画"], audienceReason: "重要品種の育成・種苗生産に関する国の基本方針と認定制度の政策方向を把握するため。", categories: ["知的財産"], relatedTopics: ["plant-variety-seed-act-2026"], relatedIssues: ["important-varieties-certification-2026", "important-varieties-rulemaking-2026"], primarySourceIds: ["source-egov-important-varieties-act-2026", "source-egov-important-varieties-basic-policy-draft-2026"], reformEventId: "important-varieties-act-2026-enactment", reformStageAtPublication: "finalized_pending", reformStageSourceIds: ["source-egov-important-varieties-act-2026"], legacyReformInference: false, whatChanged: "新テーマ追加／重要品種新法の基本方針案を追加し、法律本体・施行規則案・基本方針案の段階を分離して追えるようにした。"
    },
    {
      id: "article-amt-seed-important-varieties-2026", title: "Amendment to the \"Plant Variety Protection and Seed Act\" and Enactment of the \"Act on the Promotion of the Breeding of Important Varieties and Production of Their Propagating Material\"", publisher: "アンダーソン・毛利・友常法律事務所", author: "Miki Goto・Yuki Takemoto", publishedAt: "2026-09-08", collectedAt: "2026-09-16", url: "https://www.amt-law.com/en/insights/trending-news/trending-news_20260908001_en_001/", sourceType: "secondary", sourceLabel: "実務解説／種苗法改正・重要品種新法", status: "adopted", summary: "2026年種苗法改正と重要品種新法を一体で整理したAMTの実務解説。育成者権の10年延長、出願中保護、輸出目的保管、損害額・立証、貸渡し等の保護強化に加え、重要品種新法の国の基本方針、育成事業計画・種苗生産事業活動計画の認定制度を条文ベースで説明している。", whyImportant: ["二つの法律を、育成者への適切な経済的還元と重要品種の育成・普及促進という連続した政策として理解できる", "種苗法の権利保護強化だけでなく、重要品種新法の計画認定制度まで条文番号付きで整理している", "知財部門、研究開発、種苗生産、事業部門がそれぞれどの改正を追うべきか切り分けやすい"], audience: ["知財・法務", "品種育成・研究開発", "種苗・農業関連事業", "経営企画"], audienceReason: "二つの2026年制度改正を、権利保護と事業支援の両面から短時間で俯瞰するため。", categories: ["知的財産"], relatedTopics: ["plant-variety-seed-act-2026"], relatedIssues: ["seed-act-breeders-right-term-2026", "seed-act-export-remedies-2026", "important-varieties-certification-2026"], primarySourceIds: ["source-maff-seed-act-amendment-2026", "source-maff-seed-act-qa-2026", "source-egov-important-varieties-act-2026"], reformEventId: "seed-act-2026-amendment", reformStageAtPublication: "partially_effective", reformStageSourceIds: ["source-maff-seed-act-qa-2026", "source-egov-seed-act-current"], legacyReformInference: false, whatChanged: "整理変更なし／種苗法改正と重要品種新法を、育成者権保護と計画認定・種苗生産振興の両面から読む実務解説を追加。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

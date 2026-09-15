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
      id: "article-mhlw-short-hours-self-employed-insurance-2026",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html",
      sourceType: "primary",
      sourceLabel: "一次資料／社会保険・被保険者資格通知",
      status: "adopted",
      summary: "厚生労働省が2026年9月14日に発出した通知。勤務時間が極端に短い正規型労働者として事業所に使用される個人事業主等について、健康保険・厚生年金保険の被保険者資格を、契約名称だけでなく労働日数・時間、就労形態、業務内容、報酬の対価性等の実態から判断する取扱いを明確化し、同年3月の法人役員に関する通知も一部改正した。",
      whyImportant: [
        "個人事業主・フリーランスを形式的に短時間の正規型労働者として雇用し社会保険へ加入させるスキームについて、資格判断を実態ベースで行うことが明確になった",
        "人事・給与・法務は、勤務時間だけでなく業務内容、指揮命令、報酬の対価性、会費等の金銭関係まで確認する必要がある",
        "通常の短時間勤務者を一律に資格なしとするものではなく、個別具体的な使用関係の確認が必要である"
      ],
      audience: ["人事・労務", "給与・社会保険", "法務", "フリーランス・兼業管理"],
      audienceReason: "短時間の雇用と個人事業を組み合わせる働き方について、社会保険の資格取得・維持を実態に即して判定するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-short-hours-qualification-2026"],
      primarySourceIds: ["source-mhlw-short-hours-self-employed-insurance-2026", "source-mhlw-officer-self-employed-insurance-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／個人事業主等を極端に短時間の正規型労働者として使用する場合の被保険者資格を、契約名称ではなく使用関係・報酬等の実態から判断する2026年9月14日通知を整理した。"
    },
    {
      id: "article-jps-premium-adjustment-2026",
      title: "保険料調整制度とは",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-16",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      sourceType: "primary",
      sourceLabel: "一次資料／社会保険・保険料調整制度",
      status: "adopted",
      summary: "社会保険の適用拡大に伴う短時間労働者の就業調整を抑えるため、一定の事業所において標準報酬月額12.6万円以下の短時間労働者の本人負担を通算3年間軽減する保険料調整制度の公式案内。2026年10月から一定の任意特定適用事業所等で始まり、2027年10月以降の適用拡大対象事業所にも順次広がる。",
      whyImportant: [
        "2026年10月開始の新しい保険料負担軽減制度について、対象事業所・対象被保険者・利用期間を実務レベルで確認できる",
        "適用拡大による手取り減少を理由とする就業調整への対応策であり、人事・給与計算・本人説明に直結する",
        "対象はすべての短時間労働者ではなく、事業所区分・標準報酬月額・申出等の要件を確認する必要がある"
      ],
      audience: ["人事・労務", "給与・社会保険", "経営企画", "法務"],
      audienceReason: "2026年10月以降の対象者判定、申出、給与控除、本人説明を準備するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-premium-adjustment-2026", "social-insurance-short-time-coverage-expansion"],
      primarySourceIds: ["source-jps-premium-adjustment-2026", "source-mhlw-pension-reform-law-2025", "source-mhlw-social-insurance-expansion-2025"],
      reformEventId: "employee-social-insurance-expansion-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-jps-premium-adjustment-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年10月から始まる保険料調整制度を、対象事業所・対象被保険者・3年間の本人負担軽減と適用拡大の時系列に分けて整理した。"
    },
    {
      id: "article-tmi-pension-reform-2025",
      title: "【労働法ブログ】令和７年年金制度改正法の成立について",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2025-06-20",
      collectedAt: "2026-09-16",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17174.html",
      sourceType: "secondary",
      sourceLabel: "実務解説／2025年年金制度改正・社会保険適用拡大",
      status: "adopted",
      summary: "2025年年金制度改正法について、短時間労働者の賃金要件・企業規模要件の撤廃スケジュール、2029年からの個人事業所への適用拡大、適用拡大で新たに加入する労働者の保険料負担軽減措置を実務目線で整理した解説。段階的な施行に合わせて企業が人事・給与運用を準備する際の全体像をつかみやすい。",
      whyImportant: [
        "企業規模要件を2027年・2029年・2032年・2035年の段階施行として整理しており、中長期の人員・社会保険コスト計画へ落とし込みやすい",
        "個人事業所の適用拡大と経過措置、短時間労働者の保険料負担軽減措置まで一つの記事で把握できる",
        "一次資料の条文・制度説明だけでは見通しづらい人事実務上の準備時期を俯瞰する補助線になる"
      ],
      audience: ["人事・労務", "給与・社会保険", "経営企画", "法務"],
      audienceReason: "複数年にわたる適用拡大のスケジュールを踏まえ、対象者・コスト・給与事務・就業調整対策を計画するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-short-time-coverage-expansion", "social-insurance-premium-adjustment-2026", "social-insurance-individual-business-expansion-2029"],
      primarySourceIds: ["source-mhlw-pension-reform-law-2025", "source-mhlw-social-insurance-expansion-2025"],
      reformEventId: "employee-social-insurance-expansion-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-pension-reform-law-2025"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／2025年年金制度改正について、短時間労働者の適用拡大、個人事業所への拡大、保険料負担軽減を企業実務の時系列で読める解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

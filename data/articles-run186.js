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

  const topic = "social-insurance-expansion-pension-reform-2025";
  const issues = ["social-insurance-wage-threshold", "social-insurance-employer-preparation"];
  const mhlwSource = "source-mhlw-social-insurance-related-order-2026";
  const expansionSource = "source-jps-social-insurance-expansion-2026-09-16";
  const adjustmentSource = "source-jps-insurance-premium-adjustment-2026";

  const additions = [
    {
      id: "article-jps-social-insurance-expansion-2026-09-16",
      title: "短時間労働者に対する健康保険・厚生年金保険の適用拡大",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.nenkin.go.jp/tokusetsu/tekiyokakudai.html",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年10月の賃金要件撤廃／任意加入案内",
      status: "adopted",
      summary: "短時間労働者の健康保険・厚生年金保険について、月額8.8万円以上という賃金要件を2026年10月に撤廃することと、最低賃金法7条の減額特例対象者が任意加入できる制度を同月から開始することを案内する日本年金機構の最新ページ。",
      whyImportant: [
        "既存テーマで未確定扱いだった賃金要件撤廃の時期が2026年10月で確定したことを、実施機関の最新案内で確認できる",
        "賃金要件撤廃後も週20時間・学生除外・企業規模要件等が残るため、『106万円の壁がなくなる＝全員加入』という誤解を避けられる",
        "最低賃金の減額特例対象者について任意加入制度が始まることを押さえ、通常の加入判定とは別の例外運用が必要だと分かる"
      ],
      audience: ["企業法務", "人事・労務", "給与・社会保険担当", "中小企業管理部門"],
      audienceReason: "2026年10月1日の制度切替に向け、加入対象者の抽出、資格取得、給与・人事システム、本人説明を確定ルールに合わせて更新するため。",
      categories: ["労務・人事"],
      relatedTopics: [topic],
      relatedIssues: issues,
      primarySourceIds: [mhlwSource, expansionSource],
      reformEventId: "pension-reform-2025-social-insurance-expansion",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [mhlwSource, expansionSource],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: [expansionSource],
      legacyReformInference: false,
      whatChanged: "テーマ更新／短時間労働者の月額8.8万円以上という賃金要件の撤廃時期を2026年10月1日として確定し、最低賃金の減額特例対象者に対する任意加入の例外運用を反映した。"
    },
    {
      id: "article-jps-insurance-premium-adjustment-2026",
      title: "保険料調整制度とは",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      sourceType: "primary",
      sourceLabel: "一次資料・短時間労働者の保険料調整制度",
      status: "adopted",
      summary: "社会保険の適用拡大に伴う就業調整を抑えるため、対象事業所の事業主が一時的に保険料を追加負担し、標準報酬月額12.6万円以下の対象短時間労働者の本人負担を通算3年間軽減できる保険料調整制度の概要を示す日本年金機構資料。",
      whyImportant: [
        "2026年10月以降の任意特定適用事業所や、2027年10月以降の企業規模要件縮小で新たに対象となる事業所等について、制度利用の対象を実施機関資料で確認できる",
        "対象被保険者が標準報酬月額12.6万円以下の短時間労働者であることと、軽減期間が通算3年間であることを把握できる",
        "資格取得の有無と保険料負担軽減を別制度として整理でき、給与控除・本人説明・予算設計へ落とし込みやすい"
      ],
      audience: ["人事・労務", "給与・社会保険担当", "中小企業管理部門", "企業法務"],
      audienceReason: "適用拡大で新たに加入する従業員の本人負担と事業主負担を、資格取得手続とは別に設計するため。",
      categories: ["労務・人事"],
      relatedTopics: [topic],
      relatedIssues: ["social-insurance-employer-preparation"],
      primarySourceIds: [adjustmentSource],
      reformEventId: "pension-reform-2025-social-insurance-expansion",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [adjustmentSource],
      legacyReformInference: false,
      whatChanged: "実務運用を補完／2026年10月以降に始まる保険料調整制度について、対象事業所・対象被保険者・3年間の負担軽減を施行準備論点へ追加した。"
    },
    {
      id: "article-tmi-labor-update-social-insurance-2026-09-15",
      title: "【労働法ブログ】労働法最新情報（2026年9月15日）",
      publisher: "TMI総合法律事務所",
      author: "労働法プラクティスグループ",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18816.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／賃金要件撤廃・例外・保険料調整制度",
      status: "adopted",
      summary: "2026年10月1日の短時間労働者の賃金要件撤廃について、最低賃金法の減額特例対象者に関する例外、勤務時間が短い正規型労働者として使用される個人事業主等の取扱い、保険料調整制度の開始を横断的に整理するTMIの労働法アップデート。",
      whyImportant: [
        "単に『8.8万円要件がなくなる』と説明するだけでなく、同時に施行・公表された例外や周辺運用をまとめて確認できる",
        "最低賃金の減額特例対象者を通常の短時間労働者と分ける必要性を実務目線で把握できる",
        "保険料調整制度や短時間の正規型労働者に関する最新運用まで一つのチェックリストとして追える"
      ],
      audience: ["企業法務", "人事・労務", "給与・社会保険担当", "社労士連携担当"],
      audienceReason: "2026年10月の制度切替について、法令・日本年金機構資料だけでは分散している実務上の変更点をまとめて把握するため。",
      categories: ["労務・人事"],
      relatedTopics: [topic],
      relatedIssues: issues,
      primarySourceIds: [mhlwSource, expansionSource, adjustmentSource],
      reformEventId: "pension-reform-2025-social-insurance-expansion",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [mhlwSource, expansionSource, adjustmentSource],
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: [expansionSource],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／賃金要件撤廃と同時期に動く最低賃金減額特例対象者の例外、短時間の正規型労働者の取扱い、保険料調整制度を横断して確認できる資料を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

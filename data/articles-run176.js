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
      id: "article-mhlw-social-insurance-short-regular-sole-proprietor-2026",
      title: "勤務時間が短い正規型の労働者として事業所に使用されている個人事業主等に係る被保険者資格の取扱い等について",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/stf/houdou/newpage_75927.html",
      sourceType: "primary",
      sourceLabel: "一次資料／社会保険・名目的雇用と被保険者資格",
      status: "adopted",
      summary: "個人事業主・フリーランス等を勤務時間が極端に短い正規型労働者として雇用し、健康保険・厚生年金保険へ加入させるケースについて、契約の文言ではなく常用的使用関係の実態で被保険者資格を判断することを厚生労働省が明確化した通知。報酬が業務対価として経常的な支払いと認められないことと、業務が経常的な労務提供と認められないことの双方に該当する場合は、原則として被保険者資格を有しないものとして取り扱う。",
      whyImportant: [
        "雇用契約書上『正規型労働者』としていることだけでは社会保険の被保険者資格を基礎付けず、労働日数・時間・就労形態・勤務内容を含む実態確認が必要になる",
        "労働者から会費・広告費・掲載料・コンサルタント料・協力金・委託費等を徴収し、それが報酬の多くを占める運用は、報酬の実質を疑わせる具体的な確認ポイントになる",
        "個人事業主としての活動を形式的に雇用業務へ付け替えるだけの設計や、極端に短い勤務・形式的な情報共有等は、常用的使用関係の有無を改めて確認する必要がある"
      ],
      audience: ["人事・労務", "給与・社会保険", "企業法務", "コンプライアンス"],
      audienceReason: "副業・フリーランス・個人事業主との雇用併存スキームについて、社会保険加入のための形式的な雇用になっていないかを契約と実態の両面から点検するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-nominal-employment-qualification-2026"],
      primarySourceIds: ["source-mhlw-social-insurance-short-regular-sole-proprietor-2026"],
      legacyReformInference: false,
      whatChanged: "社会保険テーマを更新／短時間の正規型雇用と個人事業を組み合わせるケースについて、被保険者資格を契約名義ではなく常用的使用関係の実態から判断する論点を追加した。"
    },
    {
      id: "article-jps-social-insurance-premium-adjustment-2026",
      title: "保険料調整制度とは",
      publisher: "日本年金機構",
      author: "日本年金機構",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-16",
      url: "https://www.nenkin.go.jp/service/kounen/hokenryo/hokenryochosei/gaiyo.html",
      sourceType: "primary",
      sourceLabel: "一次資料／社会保険適用拡大・保険料調整制度",
      status: "adopted",
      summary: "社会保険の適用拡大で新たに健康保険・厚生年金保険へ加入する一定の短時間労働者について、標準報酬月額12.6万円以下を対象に、事業主が保険料を一時的に追加負担して本人負担を通算3年間軽減する保険料調整制度の公式案内。事業主の追加負担分は原則として後の保険料から還付され、制度利用には対象事業所から期限内の申出が必要となる。",
      whyImportant: [
        "2026年10月以降に任意特定適用事業所となる場合や、2027年以降の企業規模要件縮小で新たに特定適用事業所となる場合の移行支援を、加入判定とセットで設計できる",
        "制度は事業所単位で適用され、対象となる短時間労働者のうち一部だけを任意に選んで適用することはできない",
        "事業主の追加負担は原則還付される一方、申出期限、保険料の期限内納付、3年間の継続運用など給与・社会保険実務上の管理項目が生じる"
      ],
      audience: ["人事・労務", "給与・社会保険", "経理", "経営企画"],
      audienceReason: "社会保険適用拡大に伴う従業員負担の急増を抑える制度について、対象事業所・対象者・申出・給与控除・還付まで実務フローを準備するため。",
      categories: ["労務"],
      relatedTopics: ["social-insurance-expansion-2025"],
      relatedIssues: ["social-insurance-premium-adjustment-2026"],
      primarySourceIds: ["source-jps-social-insurance-premium-adjustment-2026"],
      reformEventId: "employee-social-insurance-expansion-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-jps-social-insurance-premium-adjustment-2026"],
      legacyReformInference: false,
      whatChanged: "法改正実装を補強／2025年年金制度改正に伴う保険料調整制度について、対象事業所・対象者・3年間の軽減・申出と還付の実務を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

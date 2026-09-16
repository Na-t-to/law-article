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

  const topicSlug = "digital-wage-payment-2026";
  const additions = [
    {
      id: "article-mhlw-digital-wage-review-20260916",
      title: "資金移動業者の口座への賃金支払制度について（第211回労働政策審議会労働条件分科会 資料No.1）",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-16",
      url: "https://www.mhlw.go.jp/content/11201250/001749946.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・賃金デジタル払い／2026年制度見直し",
      status: "adopted",
      summary: "賃金のデジタル払い制度について、資金移動業者の破綻時の資産保全、指定代替口座、個人情報の第三者認証、1円単位払出しの指定要件を検証した2026年9月16日の労働政策審議会資料。6営業日以内の全額弁済や預貯金口座等に限定する代替口座要件は維持しつつ、保証額・重複保証、認証範囲、払出し方法の運用を明確化・柔軟化する方向を示す。",
      whyImportant: [
        "制度施行後の検証で、どの労働者保護要件を維持し、どの実装を柔軟化するのかを一次資料で確認できる",
        "改正資金決済法の直接返還制度と賃金デジタル払いの保証設計を接続して確認できる",
        "資金移動業者の指定審査・システム設計・認証対応に直結する今後のガイドラインやQ&A改定方向を先取りして把握できる"
      ],
      audience: ["企業法務", "人事・労務", "給与制度担当", "資金移動業者・決済事業者", "金融法務・コンプライアンス"],
      audienceReason: "現行義務と検討中の見直しを混同せず、使用者側の導入運用と資金移動業者側の指定要件の双方を更新するため。",
      categories: ["労務", "契約・取引"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-wage-provider-safety-requirements", "digital-wage-review-2026"],
      primarySourceIds: ["source-mhlw-digital-wage-review-20260916", "source-mhlw-digital-wage-ordinance-20221128", "source-mhlw-digital-wage-portal"],
      reformEventId: "digital-wage-system-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-digital-wage-review-20260916"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／賃金デジタル払いの指定要件について、2026年9月16日時点の維持事項と明確化・柔軟化の方向を整理した。"
    },
    {
      id: "article-tmi-digital-wage-practical-20230510",
      title: "【労働法ブログ】デジタル給与払導入のために必要な社内対応",
      publisher: "TMI総合法律事務所",
      author: "森安博行・森嵩夏",
      publishedAt: "2023-05-10",
      collectedAt: "2026-09-16",
      url: "https://www.tmi.gr.jp/eyes/blog/2023/14608.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・労働法／賃金デジタル払い導入",
      status: "adopted",
      summary: "2023年の制度開始時点で、デジタル給与払を使用者側から導入する際の社内対応を整理した実務解説。制度が任意の支払方法であることを確認した上で、社内周知・希望者把握、就業規則・賃金規程の改訂、労使協定、労働者への説明と自由意思に基づく個別同意までを具体的な導入フローとして示す。",
      whyImportant: [
        "一次資料上の要件を、実際の就業規則・賃金規程・労使協定・同意取得へ落とす順序が具体的",
        "使用者にも労働者にもデジタル払いを強制できないことと、導入意思決定を分けて整理している",
        "2026年の資金移動業者側の制度見直しと切り分けて、使用者側に残る基本的な導入実務を確認できる"
      ],
      audience: ["人事・労務", "企業法務", "給与・人事システム担当", "就業規則担当"],
      audienceReason: "制度を採用するかの判断から規程改訂・労使協定・個別同意まで、導入時の社内タスクへ落とすため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["digital-wage-employer-introduction"],
      primarySourceIds: ["source-mhlw-digital-wage-ordinance-20221128", "source-mhlw-digital-wage-notice-20221128"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／制度開始時から変わらない使用者側の導入実務を、労使協定・規程改訂・個別同意まで具体化する解説としてバックフィル採用した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

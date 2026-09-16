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

  const topicSlug = "child-sexual-violence-prevention-dbs";
  const reformEventId = "child-sexual-violence-prevention-act-2024-2026";
  const additions = [
    {
      id: "article-cfa-child-sexual-violence-guideline-20260109",
      title: "こども性暴力防止法施行ガイドラインの策定について",
      publisher: "こども家庭庁",
      author: "こども家庭庁",
      publishedAt: "2026-01-09",
      collectedAt: "2026-09-16",
      url: "https://www.cfa.go.jp/press/89afdf3b-a7ca-408e-b213-b2802cce394f",
      sourceType: "primary",
      sourceLabel: "一次資料・こども性暴力防止法／施行ガイドライン",
      status: "adopted",
      summary: "2026年12月25日施行のこども性暴力防止法について、対象事業者・対象従事者、犯罪事実確認、安全確保措置、情報管理、民間教育保育等事業者の認定等の具体的運用を示すこども家庭庁の施行ガイドライン。",
      whyImportant: [
        "条文だけでは判断しにくい対象範囲と実務運用を公式ガイドラインで確認できる",
        "犯罪事実確認だけでなく、安全確保措置・情報管理・研修等を含む施行準備の全体像を確認できる",
        "2026年12月25日の施行に向けて規程・人事フロー・情報管理を整備する基準になる"
      ],
      audience: ["学校・教育事業者", "保育事業者", "学習塾・スポーツ等の民間教育事業者", "人事・労務", "企業法務"],
      audienceReason: "施行前に対象者の洗い出しと犯罪事実確認・防止措置・情報管理の運用設計を行うため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["child-safety-dbs-scope-certification", "child-safety-dbs-criminal-record-information", "child-safety-dbs-prevention-employment"],
      primarySourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-portal"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／こども性暴力防止法の施行ガイドラインを、対象範囲・犯罪事実確認・安全確保措置・情報管理の基礎資料として追加した。"
    },
    {
      id: "article-cfa-child-safety-cross-guideline-20260821",
      title: "教育・保育等を提供する事業者による児童対象性暴力等の防止等の取組を横断的に促進するための指針",
      publisher: "こども家庭庁",
      author: "こども家庭庁",
      publishedAt: "2026-08-21",
      collectedAt: "2026-09-16",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou/odanshishin",
      sourceType: "primary",
      sourceLabel: "一次資料・児童対象性暴力防止／横断指針",
      status: "adopted",
      summary: "こども性暴力防止法施行ガイドラインの策定等を踏まえ、2026年8月に改訂された横断指針。相談窓口の周知、研修、事案の早期把握等を含め、教育・保育等を提供する事業者の防止体制を横断的に整理する。",
      whyImportant: [
        "犯罪歴確認だけに施行準備を矮小化せず、相談・研修・早期把握を含む防止体制として設計できる",
        "法定義務の対象か否かだけでなく、教育・保育等の現場で共通して参考となる防止策を確認できる",
        "2026年8月改訂版として施行直前の実務準備に使える"
      ],
      audience: ["学校・教育事業者", "保育事業者", "民間教育事業者", "コンプライアンス担当", "人事・労務"],
      audienceReason: "相談・研修・周知・事案対応を含む組織的な性暴力防止体制を施行前に点検するため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["child-safety-dbs-prevention-employment"],
      primarySourceIds: ["source-cfa-child-safety-cross-guideline-20260821", "source-cfa-child-sexual-violence-guideline-20260109"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-portal"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年8月改訂の横断指針を追加し、施行準備を犯罪事実確認だけでなく相談・研修・早期把握を含む防止体制として整理した。"
    },
    {
      id: "article-tmi-child-sexual-violence-act-overview-20260501",
      title: "［連載］こども性暴力防止法 基礎解説（第1回）―こども性暴力防止法の全体像―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-05-01",
      collectedAt: "2026-09-16",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18302.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／こども性暴力防止法・日本版DBS",
      status: "adopted",
      summary: "こども家庭庁の施行ガイドラインを踏まえ、こども性暴力防止法の制度全体、対象事業者・従事者、犯罪事実確認と防止措置の位置付けを実務向けに整理した解説。旧連載と異なり、確定した施行ガイドラインを前提に現行の制度運用を説明している。",
      whyImportant: [
        "法・政省令・施行ガイドラインの関係を一枚の制度像として把握しやすい",
        "こども家庭庁アドバイザーを務める執筆者が、条文だけでは見えにくい実務の読み順を整理している",
        "人事労務・採用・配置・情報管理を法対応へ落とし込む入口として使いやすい"
      ],
      audience: ["学校・教育事業者", "保育事業者", "民間教育事業者", "人事・労務", "企業法務"],
      audienceReason: "一次資料の要求を人事・運用へ落とし込むための実務的な読み解きを得るため。",
      categories: ["労務"],
      relatedTopics: [topicSlug],
      relatedIssues: ["child-safety-dbs-scope-certification", "child-safety-dbs-criminal-record-information", "child-safety-dbs-prevention-employment"],
      primarySourceIds: ["source-cfa-child-sexual-violence-act-portal", "source-cfa-child-sexual-violence-guideline-20260109"],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-act-portal"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／確定した施行ガイドラインを踏まえた実務解説として、制度全体と人事・運用への落とし込みを補完した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

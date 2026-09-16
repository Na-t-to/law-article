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

  const superseded = new Set([
    "article-caa-digital-tokusho-interim-2026",
    "article-caa-consumer-contract-interim-draft-2026"
  ]);
  (window.ARTICLE_DATA || []).forEach((article) => {
    if (superseded.has(article?.id)) article.status = "collected";
  });

  const additions = [
    {
      id: "article-caa-digital-tokusho-interim-final-2026",
      title: "デジタル取引・特定商取引法等検討会 中間とりまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-17",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・中間とりまとめ／パブリックコメント中",
      status: "adopted",
      summary: "デジタル取引と特定商取引法制の見直しについて、双方向チャットによる勧誘、ダークパターン、通信販売の最終確認画面、契約内容の電子交付、レスキュー・点検商法等の課題と規律の方向を整理した中間とりまとめ。2026年9月16日から10月31日まで意見募集に付されている。",
      whyImportant: [
        "チャット販売を一律に規制するのではなく、事業者側の働きかけや個別・双方向性を踏まえて電話勧誘販売に近い場面を抽出する考え方を確認できる",
        "ダークパターンを名称の列挙ではなく、誤認・圧力によって消費者の意思決定を歪めるUIとして包括的に捉える方向が示されている",
        "最終確認画面の総支払額・継続条件・解約条件、アップセル前後の比較、レスキュー・点検商法などEC実務へ直接落とせる論点が多い"
      ],
      audience: ["企業法務", "EC・通販事業者", "プロダクト・UX担当", "カスタマーサポート"],
      audienceReason: "今後の法改正を待つだけでなく、販売チャット、購入導線、最終確認画面、解約・現場販売の現行設計を先行点検するため。",
      categories: ["消費者法・表示", "契約・取引", "AI・デジタル"],
      relatedTopics: ["digital-commerce-tokusho-review"],
      relatedIssues: ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-platform"],
      primarySourceIds: ["source-caa-digital-tokusho-interim-final-2026", "source-caa-digital-tokusho-public-comment-2026"],
      reformEventId: "digital-commerce-tokusho-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-digital-tokusho-interim-final-2026", "source-caa-digital-tokusho-public-comment-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／9月2日の中間とりまとめ案から9月10日の最終中間とりまとめへ差し替え、9月16日のパブリックコメント開始と、チャット勧誘・UI・最終確認画面・レスキュー商法の整理を反映した。"
    },
    {
      id: "article-caa-consumer-contract-interim-final-2026",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-17",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・中間取りまとめ／パブリックコメント中",
      status: "adopted",
      summary: "消費者契約法の見直しについて、判断困難状態と深刻な不利益に着目した契約離脱、継続契約の解約妨害、更新・重要変更通知、消費者死亡時の取扱い、解約料、EC定型約款等を整理した中間取りまとめ。2026年9月16日から10月31日まで意見募集に付されている。",
      whyImportant: [
        "脆弱性を属性で固定せず、契約時の判断困難性と結果の重大性を組み合わせる新たな離脱制度の方向を確認できる",
        "サブスク等について、解約妨害だけでなく合理的な解約手段、更新前通知、重要変更通知、死亡時対応まで契約ライフサイクル全体で論点化している",
        "解約料規律は複数案が残っており、確定ルールと誤認せず今後の制度化を追う基準資料になる"
      ],
      audience: ["企業法務", "サブスクリプション事業者", "EC事業者", "カスタマーサポート・契約管理"],
      audienceReason: "契約締結、更新、変更、解約、死亡時対応、解約料まで消費者契約の運用を将来の見直し方向に照らして棚卸しするため。",
      categories: ["消費者法・表示", "契約・取引"],
      relatedTopics: ["consumer-contract-law-review-2026"],
      relatedIssues: ["consumer-contract-vulnerability-release", "consumer-contract-cancellation-obstruction", "consumer-contract-cancellation-fees", "consumer-contract-ec-standard-terms"],
      primarySourceIds: ["source-caa-consumer-contract-interim-final-2026", "source-caa-consumer-contract-public-comment-2026"],
      reformEventId: "consumer-contract-law-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-caa-consumer-contract-interim-final-2026", "source-caa-consumer-contract-public-comment-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／8月31日の中間取りまとめ案から9月10日の最終中間取りまとめへ差し替え、9月16日の意見募集開始と、脆弱性・解約妨害・更新通知・解約料の未確定部分を整理した。"
    },
    {
      id: "article-tmi-ec-standard-terms-penalty-2026",
      title: "【デジタルプラットフォームと法】第7回「デジタルプラットフォームとEC利用規約（定型約款）における留意点（主として違約金条項を念頭に）」",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-03-23",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18151.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／EC利用規約・定型約款・違約金",
      status: "adopted",
      summary: "EC利用規約を民法上の定型約款として扱う場合の組入れ・不当条項規制と、消費者契約法10条との関係を、違約金条項を中心に裁判例も交えて整理する実務解説。高額負担条項では、内容だけでなく表示時期・位置・強調の程度や通常の取引額との均衡も実務上重要になることを示す。",
      whyImportant: [
        "民法548条の2と消費者契約法10条を同じ『不当条項』として雑に処理せず、要件と効果の違いを踏まえてEC規約を確認できる",
        "高額な違約金が問題となった裁判例から、消費者が条項を認識できる表示設計や負担の予測可能性が重要だと分かる",
        "利用規約の文言レビューだけでなく、申込み画面・リンク位置・強調表示まで法務とUXが一緒に点検すべき理由が具体的である"
      ],
      audience: ["企業法務", "EC・プラットフォーム事業者", "プロダクト・UX担当", "契約管理"],
      audienceReason: "EC利用規約の違約金・高負担条項を、条文だけでなく実際の提示方法まで含めてレビューするため。",
      categories: ["契約・取引", "消費者法・表示", "AI・デジタル"],
      relatedTopics: ["consumer-contract-law-review-2026"],
      relatedIssues: ["consumer-contract-ec-standard-terms"],
      primarySourceIds: ["source-civil-code-current", "source-consumer-contract-act-current"],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／EC定型約款の有効性を、民法・消費者契約法だけでなく表示時期・位置・強調・負担の予測可能性まで含めて確認できる資料を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

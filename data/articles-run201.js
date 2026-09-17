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
      id: "article-meti-unfair-competition-ai-likeness-hearing-20260911",
      title: "第30回 産業構造審議会 知的財産分科会 不正競争防止小委員会",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.youtube.com/watch?v=jgvgSwTx3GE",
      sourceType: "primary",
      sourceLabel: "一次資料・不正競争防止小委員会／生成AIの肖像・声に関する関係者ヒアリング",
      status: "adopted",
      summary: "2026年9月11日の不正競争防止小委員会で、生成AIによる肖像・声の無断利用について法務省と実演家・業界団体からヒアリングを行った公式会合。法務省の現行法解釈を踏まえつつ、声の明示的保護、本人以外の請求主体、AI学習用データの保護等を含む制度要望が示され、不正競争防止法による追加的な法的整備の要否が検討対象となった。法改正や新たな禁止行為を決定した会合ではない。",
      whyImportant: [
        "法務省の8月報告書による現行法解釈から一歩進み、不正競争防止法の制度見直しを含む政策検討が実際の審議会で扱われ始めたことを確認できる",
        "実演家・業界団体が、声の保護、請求主体、AI学習用データ、海外サービスへの対応等についてどの部分を現行法の課題として捉えているかを追える",
        "制度要望と現行法を混同せず、将来の改正可能性を企業のAI・コンテンツ契約や権利処理のモニタリング項目へ落とすための基礎資料になる"
      ],
      audience: ["企業法務", "知的財産担当", "AIガバナンス担当", "エンタテインメント・メディア", "広告・マーケティング", "AIサービス提供者"],
      audienceReason: "生成AIで実在人物の肖像・声を扱う事業について、現行法上の対応と将来の不競法見直しを分けて追跡するため。",
      categories: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
      relatedTopics: ["ai-publicity-voice-rights-2026"],
      relatedIssues: [
        "ai-publicity-voice-protection-2026",
        "ai-publicity-provider-dataset-liability-2026",
        "ai-publicity-ucpa-policy-review-2026"
      ],
      primarySourceIds: [
        "source-meti-unfair-competition-ai-likeness-hearing-20260911",
        "source-moj-ai-publicity-voice-report-2026"
      ],
      legacyReformInference: false,
      whatChanged: "テーマ更新／生成AIの肖像・声について、法務省による現行法解釈に加え、経産省の不正競争防止小委員会で追加的な制度整備の要否が実際に検討され始めたことを追加した。法改正決定とは扱わない。"
    },
    {
      id: "article-caa-consumer-contract-interim-20260910",
      title: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "現代社会における消費者取引の在り方を踏まえた消費者契約法検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-18",
      url: "https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／消費者契約法見直し中間取りまとめ",
      status: "adopted",
      summary: "消費者契約法の2026年見直しについて、消費者の多様な脆弱性への配慮、適切な判断が困難な状況で重大な結果をもたらす契約からの解放、継続契約の解約妨害・合理的な出口、更新・重要変更通知、死亡時手続、解約料規律等の方向性をまとめた公式中間取りまとめ。2026年9月16日から意見募集が始まっており、条文案・成立済みルールではない。",
      whyImportant: [
        "今後の消費者契約法見直しで、契約締結時だけでなく更新・変更・解約まで契約ライフサイクル全体が規律対象になり得ることを一次資料で確認できる",
        "消費者の判断困難性と契約がもたらす重大な結果を組み合わせた新たな解放制度の検討方向と、未確定な設計要素を追える",
        "解約料の立証・算定など複数案が残る論点を、確定ルールと誤認せずモニタリングできる"
      ],
      audience: ["企業法務", "消費者向け事業", "サブスクリプション事業", "EC・プラットフォーム", "カスタマーサポート", "コンプライアンス"],
      audienceReason: "BtoC契約の申込・更新・変更・解約・解約料の制度見直しを、検討段階から事業プロセスへ対応付けるため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: ["consumer-contract-act-review-2026"],
      relatedIssues: [
        "consumer-contract-2026-principles-vulnerability",
        "consumer-contract-2026-serious-result-release",
        "consumer-contract-2026-continuous-contract-exit",
        "consumer-contract-2026-renewal-change-fees"
      ],
      primarySourceIds: [
        "source-caa-consumer-contract-interim-20260910",
        "source-egov-consumer-contract-interim-comment-20260916"
      ],
      reformEventId: "consumer-contract-act-review-2026-interim",
      reformStageAtPublication: "proposal",
      legacyReformInference: false,
      whatChanged: "新規テーマ／消費者契約法の2026年中間取りまとめを追加。中間取りまとめ・意見募集段階であり、法案・成立済みルールとは扱わない。"
    },
    {
      id: "article-caa-digital-scta-interim-20260910",
      title: "デジタル取引・特定商取引法等検討会 中間取りまとめ",
      publisher: "消費者庁",
      author: "デジタル取引・特定商取引法等検討会",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-18",
      url: "https://www.caa.go.jp/policies/policy/consumer_transaction/meeting_materials/review_meeting_005/assets/consumer_transaction_cms101_260910_01.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・消費者庁／デジタル取引・特商法等見直し中間取りまとめ",
      status: "adopted",
      summary: "SNS等の個別・双方向チャット勧誘、ダークパターンを含む表示・UI、最終確認画面・アップセル、注文後の契約記録、解約妨害など、インターネット上の取引プロセス全体を対象に規律見直しの方向性を示した公式中間取りまとめ。2026年9月16日から意見募集が始まっており、具体的な禁止類型・法改正内容・施行時期は未確定である。",
      whyImportant: [
        "広告文言の真偽だけでなく、表示の強弱、ボタン配置、画面遷移、選択肢、アップセル、解約導線まで法務レビュー対象になり得る方向を一次資料で確認できる",
        "チャット等による勧誘に電話勧誘販売類似の規律を及ぼす案について、対象と対象外の境界を検討段階から追える",
        "ダークパターン規律について、通常の有用なUIを過度に規制しないという留保と、ブラックリスト等による具体化案を併せて確認できる"
      ],
      audience: ["企業法務", "EC・プラットフォーム", "アプリ事業者", "マーケティング", "Web・UX担当", "カスタマーサポート", "コンプライアンス"],
      audienceReason: "EC・アプリの表示、申込、アップセル、契約記録、解約、SNS営業を横断して、今後の特商法等の規律見直しに備えるため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: ["digital-transactions-scta-review-2026"],
      relatedIssues: [
        "digital-scta-2026-chat-solicitation",
        "digital-scta-2026-dark-pattern-ui",
        "digital-scta-2026-final-confirmation",
        "digital-scta-2026-cancellation-obstruction"
      ],
      primarySourceIds: [
        "source-caa-digital-scta-interim-20260910",
        "source-egov-digital-scta-interim-comment-20260916"
      ],
      reformEventId: "specified-commercial-transactions-digital-review-2026-interim",
      reformStageAtPublication: "proposal",
      legacyReformInference: false,
      whatChanged: "新規テーマ／デジタル取引・特商法等の2026年中間取りまとめを追加。中間取りまとめ・意見募集段階であり、法案・成立済みルールとは扱わない。"
    },
    {
      id: "article-spring-dark-pattern-ui-20260909",
      title: "ダークパターンへの規制強化の動き―企業に求められるECサイト・UI設計の見直し",
      publisher: "スプリング法律事務所",
      author: "石井 林太郎",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-18",
      url: "https://spring-partners.com/topics/3538/",
      sourceType: "secondary",
      sourceLabel: "実務解説・スプリング法律事務所／ダークパターンとEC・UI設計",
      status: "adopted",
      summary: "デジタル取引・特商法等検討会の中間取りまとめ案を、EC・アプリ・サブスクリプション事業のUI/UXへ具体化した実務解説。重要条件の視認性、プリセレクション、虚偽の在庫・タイマー、最終確認、アップセル、注文後メール、解約導線を点検対象として整理し、法務・マーケティング・Web制作の横断レビューを提案する。記事自身も法改正・施行時期は未確定と明記している。",
      whyImportant: [
        "一次資料の抽象的なダークパターン規律を、文字・配置・ボタン・画面遷移・初期選択等の具体的なUI監査項目へ落としている",
        "申込から注文後メール、解約・退会まで一連の顧客導線を法務・マーケティング・Web担当が横断して点検するという実務運用を示している",
        "通常のマーケティング施策を一律に止めるのではなく、重要情報の分かりやすさ、不当な誘導、申込と解約の不合理な非対称性に着目する整理が実務的である"
      ],
      audience: ["企業法務", "EC・アプリ事業者", "マーケティング", "Web・UX担当", "コンプライアンス"],
      audienceReason: "検討中の規律を、実際のサイト・アプリのUI/UX棚卸しと部門横断レビューへ落とし込むため。",
      categories: ["契約", "危機管理・コンプライアンス"],
      relatedTopics: ["digital-transactions-scta-review-2026"],
      relatedIssues: [
        "digital-scta-2026-dark-pattern-ui",
        "digital-scta-2026-final-confirmation",
        "digital-scta-2026-cancellation-obstruction",
        "digital-scta-2026-chat-solicitation"
      ],
      primarySourceIds: ["source-caa-digital-scta-interim-20260910"],
      reformEventId: "specified-commercial-transactions-digital-review-2026-interim",
      reformStageAtPublication: "proposal",
      legacyReformInference: false,
      whatChanged: "新規テーマの実務解説／中間取りまとめ案をEC・アプリのUI/UX監査へ落とし込む参考解説を追加。記事公開時点も制度案段階である。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

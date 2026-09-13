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
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id).filter(Boolean));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueBySlug = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.slug).filter(Boolean));
    return (target || []).concat((additions || []).filter((item) => item && !existing.has(item.slug)));
  };

  const topicSlug = "medical-biological-research-ethics-guideline";
  const sourceId = "source-medical-biological-research-ethics-guideline-2026";
  const reformEventId = "medical-biological-research-ethics-guideline-2026-amendment";

  const source = {
    id: sourceId,
    title: "『人を対象とする生命科学・医学系研究に関する倫理指針』の一部改正について",
    type: "guideline",
    typeLabel: "文部科学省・厚生労働省・経済産業省／研究倫理指針・2026年改正",
    authority: "文部科学省・厚生労働省・経済産業省",
    publishedAt: "2026-08-28",
    url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
    importance: "最高",
    whyImportant: "2026年8月27日に告示され、同年12月1日に施行される生命科学・医学系研究倫理指針の改正内容と施行日を確認できる公式資料。インフォームド・コンセント等の手続、加工情報等の取扱い、既存試料・情報の利用・提供、外国提供、多機関共同研究の倫理審査を大きく整理している。",
    topics: [topicSlug]
  };

  const topic = {
    slug: topicSlug,
    title: "生命科学・医学系研究倫理指針・研究データ実務",
    categories: ["個人情報", "危機管理・コンプライアンス"],
    summary: "2026年12月1日施行の『人を対象とする生命科学・医学系研究に関する倫理指針』改正について、IC／オプトアウト、加工情報等と個人情報保護法の関係、既存試料・情報の利用・提供、外国提供、多機関共同研究の一括倫理審査を整理する。",
    lastUpdated: "2026-09-13",
    lastVerified: "2026-09-13",
    isNew: true,
    overview: [
      "人を対象とする生命科学・医学系研究では、個人情報保護法だけでなく、研究対象者の保護と研究の適正な実施を目的とする生命科学・医学系研究倫理指針への対応が必要になる。",
      "2026年8月27日告示の改正指針は、複雑化していた同意手続を研究リスクに応じたIC又はオプトアウトへ整理し、仮名加工情報・匿名加工情報・個人関連情報は個人情報保護法の規律に沿って扱う構造へ改める。",
      "既存試料・情報の二次利用・他機関提供や外国提供、多機関共同研究の倫理審査も見直されるため、研究計画書、同意文書、オプトアウト文書、試料・データ提供手順、倫理審査SOPを横断して更新する必要がある。",
      "改正指針の施行日は2026年12月1日であり、施行前の現行手続と改正後の手続を混同せず、未公表の新ガイダンスを継続確認する。"
    ],
    currentSummary: {
      facts: [
        "文部科学省、厚生労働省及び経済産業省は2026年8月27日に改正指針を告示し、2026年12月1日から施行することとした。",
        "研究を『侵襲を伴う研究又は介入を行う研究』『試料を用いる研究』『試料を用いない研究』に整理し、研究対象者等へのリスクに応じてIC又はオプトアウトを行う構造へ見直した。",
        "『文書IC』『口頭IC』『適切な同意』という用語を『IC』へ整理し、仮名加工情報、匿名加工情報及び個人関連情報の取扱いは個人情報保護法の規定に則るものとした。",
        "既存試料・情報の利用・提供では、既存情報にも既存試料と同様の要件を適用し、一定の場合には原則としてオプトアウトを用いる構造へ整理した。事前に外国提供を含む包括的な同意を取得している既存試料・情報等についても、要件を満たせばオプトアウトによる外国提供を可能とした。",
        "多機関共同研究では、侵襲・介入研究の新規申請について一の倫理審査委員会による一括審査を必須とし、その他の研究についても一括審査を原則とした。"
      ],
      interpretations: [
        "改正対応は同意書の文言修正だけでは足りず、研究類型の判定、IC／オプトアウトの選択、個人情報保護法上の適法化根拠、試料・情報の提供手続を一つの研究開始フローとして再設計する必要がある。",
        "仮名加工情報・匿名加工情報・個人関連情報について倫理指針上の上乗せ規律が整理されても、個人情報保護法上の要件や研究機関内の情報管理・契約管理が不要になるわけではない。",
        "多機関共同研究では各機関で同じ審査を重ねる運用から一括審査を中心とする方向へ移るため、代表機関、共同研究機関、倫理審査委員会の役割分担と変更管理を先に決めておく必要がある。"
      ],
      implications: [
        "2026年12月1日までに、研究計画書、説明・同意文書、オプトアウト文書、既存試料・情報の提供記録、外国提供手順、倫理審査SOPを改正指針に照らして棚卸しする。",
        "既存試料・情報の二次利用・他機関提供では、取得時の同意範囲、取得手続、個人情報保護法上の例外事由、研究内容の特定、オプトアウトの可否を記録として追えるようにする。",
        "製薬・医療機器・研究支援企業が大学・医療機関等との共同研究やデータ提供を行う場合、契約上のデータ利用範囲と研究倫理上の同意・審査・提供手続が一致しているかを確認する。",
        "多機関共同研究では一括審査の主体、各機関の長による許可、変更申請、重大な逸脱・有害事象等の情報共有経路を研究開始前に明確化する。"
      ],
      uncertain: [
        "文部科学省の公式ページでは2026年改正に対応する新ガイダンスは後日掲載とされており、施行時の具体的な運用例・様式等は公表後に再確認する必要がある。",
        "『介入』の定義は今回の見直し対象から外され、引き続き検討事項とされているため、境界事例では現行の定義・ガイダンスと今後の更新を確認する。"
      ]
    },
    issues: [
      {
        id: "medical-research-ethics-consent-2026",
        title: "研究類型ごとにICとオプトアウトをどう選ぶか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "研究を侵襲・介入研究、試料を用いる研究、試料を用いない研究に整理し、改正指針第8の要件に従って研究対象者等へのリスク、試料・情報の新規取得か既存利用か、個人情報保護法上の例外等を確認してIC又はオプトアウトを選択する。",
        exception: "個人を識別できない既存試料の利用や、個人情報保護法上の例外事由、包括的同意の範囲内で研究内容が特定された場合など、類型ごとの例外・簡略化要件がある。",
        uncertain: "『介入』の定義は引き続き検討事項とされており、今後のガイダンス更新を確認する必要がある。",
        sourceIds: [sourceId]
      },
      {
        id: "medical-research-ethics-data-categories-2026",
        title: "仮名加工情報・匿名加工情報・個人関連情報をどう扱うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "仮名加工情報、匿名加工情報及び個人関連情報の取扱いは、改正後の倫理指針で独自の上乗せ手続を重ねるのではなく、個人情報保護法の各関係規定に則って判断する。",
        exception: "情報の加工区分や提供態様によって個人情報保護法上の適用条文・義務は異なり、倫理審査や機関内手続が別の理由で必要となる場合もある。",
        uncertain: "個別の情報がどの法的区分に当たるか、研究機関ごとの情報管理措置をどう設計するかは具体的なデータ・処理方法に応じて判断する。",
        sourceIds: [sourceId]
      },
      {
        id: "medical-research-ethics-existing-data-crossborder-2026",
        title: "既存試料・情報の二次利用・他機関提供・外国提供をどう行うか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "既存試料・情報の取得経緯、取得時の同意範囲、個人情報保護法上の例外事由、研究内容の特定を確認し、改正指針が定める条件を満たす場合はオプトアウトを用いる。外国提供についても、外国提供を含む包括的同意を取得済みでその範囲内の研究が特定された場合などにはオプトアウトが可能となる。",
        exception: "提供する試料・情報の性質、提供先、本人同意の取得可能性、個人情報保護法上の外国第三者提供規律等によりIC、倫理審査委員会の意見、機関の長の許可等が必要となる場合がある。",
        uncertain: "新ガイダンスで示される『適切な手続を経て取得された』等の具体例と、改正個人情報保護法の施行準備との接続を継続確認する必要がある。",
        sourceIds: [sourceId]
      },
      {
        id: "medical-research-ethics-central-review-2026",
        title: "多機関共同研究の一括倫理審査をどう運用するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "多機関共同研究の新規申請では、侵襲・介入研究について一の倫理審査委員会による一括審査を必須とし、その他の研究についても一括審査を原則として研究計画を審査する。",
        exception: "研究類型により通常審査・迅速審査の扱いは異なり、倫理審査委員会の判断で迅速審査から通常審査へ移すことも妨げられない。",
        uncertain: "代表機関と共同研究機関の具体的な役割分担、審査依頼・変更管理の運用は、新ガイダンスと各機関のSOPを踏まえて整備する必要がある。",
        sourceIds: [sourceId]
      }
    ],
    sourceIds: [sourceId],
    practicalImpacts: [
      "研究計画書・研究倫理SOP",
      "説明文書・同意書・オプトアウト文書",
      "試料・研究データ提供契約",
      "個人情報・研究データ管理",
      "多機関共同研究の倫理審査・変更管理",
      "外国への試料・研究データ提供"
    ]
  };

  const reform = {
    id: reformEventId,
    title: "生命科学・医学系研究倫理指針・2026年改正",
    eventType: "regulation_or_guideline",
    lawId: "medical-biological-research-ethics-guideline",
    lawLabel: "人を対象とする生命科学・医学系研究に関する倫理指針",
    relatedTopics: [topicSlug],
    effectiveDateStatus: "confirmed",
    effectiveDates: ["2026-12-01"],
    effectiveDateSourceIds: [sourceId],
    matchSourceIds: [sourceId],
    sourceIds: [sourceId]
  };

  const articles = [
    {
      id: "article-mext-medical-biological-research-ethics-2026",
      title: "『人を対象とする生命科学・医学系研究に関する倫理指針』の一部改正について",
      publisher: "文部科学省",
      author: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-13",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      sourceType: "primary",
      sourceLabel: "一次資料・研究倫理／2026年改正",
      status: "adopted",
      summary: "2026年8月27日に告示され、同年12月1日に施行される生命科学・医学系研究倫理指針の改正概要。研究類型とリスクに応じて同意手続をIC又はオプトアウトへ整理し、仮名加工情報・匿名加工情報・個人関連情報は個人情報保護法に沿って扱う構造へ改めるほか、既存試料・情報の利用・提供、外国提供、多機関共同研究の一括倫理審査を見直している。",
      whyImportant: [
        "2026年12月1日の施行日と、施行準備で変更すべき研究倫理手続を公式資料から確認できる",
        "同意手続の整理、加工情報等と個人情報保護法の関係、既存試料・情報の二次利用・提供を一つの改正として把握できる",
        "多機関共同研究の一括倫理審査が侵襲・介入研究では必須、その他の研究では原則となるため、共同研究の審査フロー見直しに直結する",
        "新ガイダンスが未公表であることを踏まえ、確定した指針本文と今後の運用具体化を分けて管理できる"
      ],
      audience: ["企業法務", "研究開発・臨床研究担当", "個人情報・データガバナンス担当", "製薬・医療機器・ヘルスケア事業担当"],
      audienceReason: "大学・医療機関等との共同研究、試料・研究データの利用・提供、倫理審査、同意取得を2026年12月施行の新手続へ移行するため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "medical-research-ethics-consent-2026",
        "medical-research-ethics-data-categories-2026",
        "medical-research-ethics-existing-data-crossborder-2026",
        "medical-research-ethics-central-review-2026"
      ],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "新テーマ作成／2026年12月1日施行の研究倫理指針改正を、同意手続、研究データ、外国提供、一括倫理審査の4論点で追跡する棚を追加した。"
    },
    {
      id: "article-tmi-medical-biological-research-ethics-2026",
      title: "『人を対象とする生命科学・医学系研究に関する倫理指針』令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-13",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／生命科学・医学系研究倫理指針",
      status: "adopted",
      summary: "2026年改正のうち特にIC等の手続を深掘りし、従来の文書IC・口頭IC・適切な同意・オプトアウトという複雑な構造から、ICとオプトアウトを中心とする判断へ整理された点を具体的な研究類型ごとに説明する実務解説。仮名加工情報等を個人情報保護法へ委ねる整理、既存試料・情報の利用・提供、提供のみを行う者、外国提供まで手続の境界を示し、今後のガイダンスを踏まえたSOP見直しの必要性を整理している。",
      whyImportant: [
        "改正前後の同意手続を研究類型ごとに比較し、どの場面でIC・オプトアウト・倫理審査等が必要になるかを実務フローとして読みやすい",
        "仮名加工情報・匿名加工情報・個人関連情報について倫理指針の上乗せが整理される意味を、個人情報保護法との役割分担から説明している",
        "既存試料・情報の取得時の包括的同意、他機関提供、外国提供を具体的に分解し、共同研究やデータ提供契約の確認事項へ落とし込みやすい",
        "『介入』の定義や今後のガイダンスなど残る未確定事項を明示し、確定ルールと今後の運用具体化を区別できる"
      ],
      audience: ["企業法務", "研究開発・臨床研究担当", "個人情報・データガバナンス担当", "製薬・医療機器・ヘルスケア事業担当"],
      audienceReason: "改正指針の条文構造を、研究計画、IC・オプトアウト、既存データ利用、他機関・外国提供という具体的な研究実務へ落とすため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: [
        "medical-research-ethics-consent-2026",
        "medical-research-ethics-data-categories-2026",
        "medical-research-ethics-existing-data-crossborder-2026",
        "medical-research-ethics-central-review-2026"
      ],
      primarySourceIds: [sourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [sourceId],
      whatChanged: "新テーマ補強／IC・オプトアウト、加工情報等、既存試料・情報、外国提供を研究類型ごとに解く実務解説を追加した。"
    }
  ];

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [source]);
  window.TOPIC_DATA = addUniqueBySlug(window.TOPIC_DATA, [topic]);
  window.REFORM_EVENT_DATA = addUniqueById(window.REFORM_EVENT_DATA, [reform]);

  const currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const freshArticles = articles.filter((article) => !existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url)));
  window.ARTICLE_DATA = currentArticles.concat(freshArticles);
})();

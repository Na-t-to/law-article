(() => {
  const verifiedAt = "2026-09-17";
  const rulesSource = "source-ppc-privacy-rules-basic-thinking-20260916";
  const rulesArticle = "article-ppc-privacy-rules-basic-thinking-20260916";
  const safeguardsSource = "source-ppc-safeguards-guideline-review-20260916";
  const safeguardsArticle = "article-ppc-safeguards-guideline-review-20260916";

  const pushUnique = (list, value) => {
    if (!Array.isArray(list) || list.includes(value)) return;
    list.push(value);
  };
  const pushText = (list, text, marker) => {
    if (!Array.isArray(list) || list.some((item) => String(item || "").includes(marker))) return;
    list.push(text);
  };
  const appendSentence = (item, key, sentence, marker) => {
    if (!item) return;
    const current = String(item[key] || "").trim();
    if (current.includes(marker)) return;
    item[key] = current ? `${current} ${sentence}` : sentence;
  };

  const amendment = (window.TOPIC_DATA || []).find((item) => item?.slug === "personal-information-protection-2026-amendment");
  if (amendment) {
    amendment.lastUpdated = verifiedAt;
    amendment.lastVerified = verifiedAt;
    amendment.sourceIds = amendment.sourceIds || [];
    amendment.referenceArticleIds = amendment.referenceArticleIds || [];
    pushUnique(amendment.sourceIds, rulesSource);
    pushUnique(amendment.referenceArticleIds, rulesArticle);

    const summary = amendment.currentSummary || {};
    pushText(summary.facts, "2026年9月16日、個人情報保護委員会は改正法の政令・委員会規則整備に向けた基本的な考え方（案）①を公表し、同意取得例外、16歳未満の子供、顔特徴データ等について具体化の方向を示した。", "2026年9月16日");
    pushText(summary.implications, "同意取得・年齢確認・法定代理人への通知、顔特徴データを扱うカメラ等の周知設計について、9月16日案を使って現行フローとの差分を棚卸しする。ただし案段階のため確定仕様として実装しない。", "9月16日案");
    pushText(summary.uncertain, "9月16日の資料は政令・規則の『基本的な考え方（案）』であり、具体的な対象範囲・周知方法・例外・ガイドライン記載は今後の委員会審議で変わり得る。", "基本的な考え方（案）");

    const issues = amendment.issues || [];
    const consent = issues.find((issue) => issue?.id === "privacy-2026-consent-exceptions");
    const children = issues.find((issue) => issue?.id === "privacy-2026-children");
    const biometric = issues.find((issue) => issue?.id === "privacy-2026-biometric");

    for (const issue of [consent, children, biometric].filter(Boolean)) {
      issue.sourceIds = issue.sourceIds || [];
      pushUnique(issue.sourceIds, rulesSource);
    }
    appendSentence(consent, "conclusion", "9月16日案では、取得の状況からみて本人の意思に反せず、本人の権利利益を害しないことが明らかな場合の具体的な範囲を委員会規則等で定める方向が示された。", "9月16日案");
    appendSentence(consent, "uncertain", "この具体化はまだ案段階であり、最終の委員会規則・ガイドラインで対象類型と判断基準を確認する必要がある。", "まだ案段階");

    appendSentence(children, "conclusion", "9月16日案では、16歳未満について法定代理人を同意・通知等へ関与させること、一定の場合に違法行為の有無を問わない利用停止等請求を認めること、本人の最善の利益を優先して考慮する責務を具体化する方向が示された。", "9月16日案");
    appendSentence(children, "uncertain", "法定代理人関与の例外や年齢確認の実務、利用停止等の除外、ガイドライン上の具体例は今後の下位ルールで確定する。", "法定代理人関与の例外");

    appendSentence(biometric, "conclusion", "9月16日案では、顔特徴データ等について、取扱い・利用目的・元となる身体的特徴・利用停止請求手続等の周知、本人関与の強化、オプトアウト第三者提供からの除外を具体化する方向が示された。", "9月16日案");
    appendSentence(biometric, "uncertain", "顔特徴データ等の具体的範囲、周知方法・例外、カメラ設置場所での表示方法等は政令・委員会規則・ガイドラインで今後確定する。", "カメラ設置場所");
  }

  const enforcement = (window.TOPIC_DATA || []).find((item) => item?.slug === "privacy-enforcement-breach-response");
  if (enforcement) {
    enforcement.lastUpdated = verifiedAt;
    enforcement.lastVerified = verifiedAt;
    enforcement.sourceIds = enforcement.sourceIds || [];
    enforcement.referenceArticleIds = enforcement.referenceArticleIds || [];
    enforcement.issues = enforcement.issues || [];
    pushUnique(enforcement.sourceIds, safeguardsSource);
    pushUnique(enforcement.referenceArticleIds, safeguardsArticle);

    const summary = enforcement.currentSummary || {};
    pushText(summary.facts, "2026年9月16日、個人情報保護委員会は安全管理措置ガイドラインの例示について、クラウド、MFA、ゼロトラスト、特権アカウント管理、ランサムウェア等の横展開対策を踏まえた追加・再整理の検討を開始した。", "安全管理措置ガイドラインの例示");
    pushText(summary.implications, "現行の安全管理措置を前提に、クラウドの責任分界、MFA、動的・文脈的なアクセス制御、特権IDの最小化、侵害時の停止・隔離・アカウント無効化を社内基準とのギャップ確認項目に加える。", "動的・文脈的");
    pushText(summary.uncertain, "9月16日資料は検討方向であり、例示の追加・再構成や施行時期は今後の委員会審議・パブリックコメント等で変更され得る。", "例示の追加・再構成");

    if (!enforcement.issues.some((issue) => issue?.id === "privacy-safeguards-guideline-modernization-2026")) {
      enforcement.issues.push({
        id: "privacy-safeguards-guideline-modernization-2026",
        title: "安全管理措置ガイドラインの例示はどう更新されるか",
        status: "pending",
        stage: "draft",
        views: [],
        conclusion: "個人情報保護委員会は、クラウド、MFA、ゼロトラスト、特権アカウントの利用最小化、侵害時の停止・隔離・アカウント無効化等を、安全管理措置の『手法の例示』へ追加・整理する方向を検討している。また、『講じなければならない措置』と例示の対応関係を明確にする方向も示している。",
        exception: "9月16日資料は検討案であり、記載された技術・運用が現時点で一律の法的義務として新設されたものではない。現行ガイドライン上の義務とリスクに応じた安全管理措置が引き続き基準となる。",
        uncertain: "資料では今後のガイドライン案・意見募集・決定へ進む予定が示されているが、最終文言、具体的な例示、適用時期は未確定である。",
        sourceIds: [safeguardsSource]
      });
    }
  }
})();

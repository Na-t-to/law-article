(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item.id));
    return (target || []).concat(additions.filter((item) => !existing.has(item.id)));
  };

  const topicSlug = "securities-monitoring-2026";
  const policySourceId = "source-sesc-securities-monitoring-policy-2026";
  const underwritingSourceId = "source-jsda-ipo-underwriting-review-2026";

  window.SOURCE_DATA = addUniqueById(window.SOURCE_DATA, [
    {
      id: underwritingSourceId,
      title: "新規上場時の会計不正事例を踏まえた引受審査に関するガイドライン",
      type: "guideline",
      typeLabel: "自主規制ガイドライン・引受審査",
      authority: "日本証券業協会",
      publishedAt: "2026-03-18",
      url: "https://www.jsda.or.jp/shijyo/minasama/hikiukeshinsa.html",
      importance: "高",
      whyImportant: "新規上場時の会計不正事例を踏まえ、主幹事会員がゲートキーパーとして引受審査を行う際の留意事項を整理した自主規制上の実務資料。令和8事務年度方針が大手証券会社グループの重点として掲げる引受審査態勢を具体化して読む基礎になる。",
      topics: [topicSlug]
    }
  ]);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (topic.slug !== topicSlug) return topic;
    return {
      ...topic,
      lastUpdated: "2026-09-10",
      lastVerified: "2026-09-10",
      issues: (topic.issues || []).map((issue) =>
        issue.id !== "securities-monitoring-entity-specific-controls-2026"
          ? issue
          : {
              ...issue,
              conclusion: "大手証券では法人関係情報・売買審査・引受審査、ネット証券ではサイバー・取引時確認・売買管理、準大手・地域証券では業容変化・新商品審査、投資運用業では親会社等との取引・利益相反の事後検証等が明示されている。IPO引受審査では、日本証券業協会の2026年ガイドラインが、不正リスクに応じた確認、内部通報情報への対応、経営者・監査役等・独立役員への確認等を具体化している。",
              exception: "業態別項目は重点を示すもので、列挙外の法令・内部管理事項が検証対象外になるわけではない。日本証券業協会の引受審査ガイドラインは主幹事会員の引受審査に関する留意事項であり、すべての金融商品取引業者に同じ手順を求めるものではない。",
              sourceIds: Array.from(new Set([...(issue.sourceIds || []), underwritingSourceId]))
            }
      ),
      sourceIds: Array.from(new Set([...(topic.sourceIds || []), underwritingSourceId]))
    };
  });

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-jsda-ipo-underwriting-review-2026",
      title: "新規上場時の会計不正事例を踏まえた引受審査に関するガイドライン",
      publisher: "日本証券業協会",
      author: "日本証券業協会",
      publishedAt: "2026-03-18",
      collectedAt: "2026-09-10",
      url: "https://www.jsda.or.jp/shijyo/minasama/hikiukeshinsa.html",
      sourceType: "primary",
      sourceLabel: "一次資料・自主規制ガイドライン／引受審査",
      status: "adopted",
      summary: "新規上場時の発行者による会計不正事例を踏まえ、主幹事会員がゲートキーパーとして引受審査機能を発揮するための留意事項を整理した日本証券業協会のガイドライン。不正リスクに応じた確認、内部通報体制・不正情報への対応、経営者・監査役等・独立役員への確認などを示す。",
      whyImportant: [
        "令和8事務年度の証券モニタリング方針が重点に掲げる引受審査態勢を具体化して読める",
        "IPO審査を資料受領の形式確認ではなく、会計不正リスクに応じた追加確認へつなげられる",
        "内部通報情報、監査役等、独立役員を引受審査の情報源としてどう扱うかを確認できる"
      ],
      audience: ["証券会社法務・引受審査", "IPO担当", "コンプライアンス・内部監査"],
      audienceReason: "主幹事証券会社の引受審査について、会計不正リスクを踏まえた具体的な審査手順と確認先を設計するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["securities-monitoring-entity-specific-controls-2026"],
      primarySourceIds: [underwritingSourceId, policySourceId],
      whatChanged: "自主規制実務更新／新規上場時の会計不正を踏まえ、主幹事会員の引受審査で特に留意すべき確認事項がガイドラインとして具体化された。"
    }
  ]);
})();

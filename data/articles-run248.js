(() => {
  if (window.__LAW_INDEX_RUN248__) return;
  window.__LAW_INDEX_RUN248__ = true;
  const SPECIFIC = "digital-commerce-tokusho-review";
  const BROAD = "consumer-law-digital-contract-review";
  const FINAL = "source-caa-digital-tokusho-interim-2026";
  const COMMENT = "source-caa-digital-tokusho-public-comment-20260916";
  const ARTICLE = "article-maku-tokusho-digital-dark-pattern-20260910";
  const REFORM = "specified-commercial-transactions-digital-review-2026";
  const uniq = (xs) => [...new Set((xs || []).filter(Boolean))];
  const norm = (value) => {
    try {
      const u = new URL(String(value || "").trim());
      u.hash = "";
      [...u.searchParams.keys()].forEach((k) => { if (/^utm_/i.test(k) || ["fbclid", "gclid", "yclid"].includes(k)) u.searchParams.delete(k); });
      u.pathname = u.pathname.replace(/\/+$/, "") || "/";
      u.searchParams.sort();
      return u.toString();
    } catch { return String(value || "").trim().replace(/#.*$/, "").replace(/\/$/, ""); }
  };
  const source = {
    id: COMMENT,
    title: "「デジタル取引・特定商取引法等検討会中間取りまとめ」に関する意見募集について",
    type: "public_comment",
    typeLabel: "一次資料・消費者庁／意見募集",
    authority: "消費者庁",
    publishedAt: "2026-09-16",
    url: "https://www.caa.go.jp/notice/entry/047545/",
    importance: "高",
    whyImportant: "2026年9月10日の中間取りまとめについて9月16日から10月31日まで意見募集が行われており、制度見直しが成立・施行済みではなく検討段階にあることを確認できる。",
    topics: [SPECIFIC, BROAD]
  };
  const sources = window.SOURCE_DATA || [];
  if (!sources.some((x) => x && (x.id === COMMENT || norm(x.url) === norm(source.url)))) window.SOURCE_DATA = sources.concat(source);
  window.SOURCE_DATA = (window.SOURCE_DATA || []).map((x) => x && x.id === FINAL ? { ...x, topics: uniq([SPECIFIC, BROAD, ...(x.topics || [])]) } : x);

  window.TOPIC_DATA = (window.TOPIC_DATA || []).map((topic) => {
    if (!topic) return topic;
    if (topic.slug === SPECIFIC) {
      const issues = [...(topic.issues || [])];
      if (!issues.some((x) => x && x.id === "dt-cancellation-friction")) issues.push({
        id: "dt-cancellation-friction",
        title: "返品特約・解約導線の不当な負荷をどう規律するか",
        status: "authoritative",
        stage: "draft",
        views: [],
        conclusion: "2026年9月10日の中間取りまとめは、返品特約だけを理由に民法上の解除等まで一律に拒む行為や、解約を不当に遅延させる行為、契約時と比べ合理的理由なく過度に複雑な解約手続を課す行為への規律を検討する方向を示した。",
        exception: "適切な本人確認や契約内容確認など合理的な手続まで一律に否定する趣旨ではない。",
        uncertain: "具体的な適用要件、行政上・民事上の効果、消費者契約法の継続契約見直しとの役割分担は今後の法制化で確認する必要がある。",
        sourceIds: [FINAL]
      });
      return {
        ...topic,
        lastUpdated: "2026-09-25",
        lastVerified: "2026-09-25",
        summary: "SNS・チャット勧誘、ダークパターン、最終確認画面・電子書面、返品・解約導線など、2026年9月10日の中間取りまとめで具体化した特定商取引法等のデジタル取引見直しを、成立前の提案段階として追う。",
        currentSummary: {
          facts: [
            "2026年9月10日に中間取りまとめが公表され、9月16日から10月31日まで意見募集が行われている。現時点では成立・施行済みのルールではない。",
            "中間取りまとめは、不意打ち性の高いチャット等の個別勧誘について、電話勧誘販売に近い規律と8日間のクーリング・オフ等を検討する方向を示している。",
            "オンライン表示・UIではダークパターンへの包括的な規律、契約場面では最終確認画面と契約後の電子書面、解約場面では返品特約の濫用や不当な遅延・複雑化への対応が検討されている。"
          ],
          interpretations: ["広告表現だけでなく、勧誘開始から申込み、契約確認、解約までの一連のデジタル導線を法務・プロダクト・CS横断で点検する論点として扱う必要性が高まっている。"],
          implications: ["現行法対応と将来の制度案を分けた上で、チャット勧誘、重要条件の表示、契約後の確認手段、解約導線を先行して棚卸しする。"],
          uncertain: ["中間取りまとめは政策提案であり、対象範囲・要件・効果はパブリックコメント後の法案・下位法令等で変わり得る。"]
        },
        issues,
        sourceIds: uniq([FINAL, COMMENT, ...(topic.sourceIds || [])]),
        referenceArticleIds: uniq(["article-caa-digital-tokusho-interim-2026", ARTICLE, ...(topic.referenceArticleIds || [])]),
        practicalImpacts: uniq([...(topic.practicalImpacts || []), "返品・解約導線", "契約後の電子的な確認手段"])
      };
    }
    if (topic.slug === BROAD) return { ...topic, lastVerified: "2026-09-25", sourceIds: uniq([COMMENT, ...(topic.sourceIds || [])]), referenceArticleIds: uniq([ARTICLE, ...(topic.referenceArticleIds || [])]) };
    return topic;
  });
  window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).map((event) => event && event.id === REFORM ? {
    ...event,
    relatedTopics: uniq([SPECIFIC, BROAD, ...(event.relatedTopics || [])]),
    sourceIds: uniq([FINAL, COMMENT, ...(event.sourceIds || [])]),
    articleIds: uniq(["article-caa-digital-tokusho-interim-2026", ARTICLE, ...(event.articleIds || [])])
  } : event);

  const article = {
    id: ARTICLE,
    title: "DM営業が「電話勧誘販売」並みに規律される日＆ついに動き出すUI（ダークパターン）規制──特商法改正「中間とりまとめ」を読む①",
    publisher: "MAKU法律事務所",
    author: "MAKU法律事務所",
    publishedAt: "2026-09-10",
    collectedAt: "2026-09-25",
    url: "https://maku-law.com/tokushoho-dark-pattern-regulation/",
    sourceType: "secondary",
    sourceLabel: "法律事務所・実務解説／デジタル取引・特定商取引法見直し",
    status: "adopted",
    summary: "2026年9月10日の中間取りまとめを、チャット等の個別勧誘、ダークパターン、最終確認画面・契約後の電子書面、返品・解約導線という企業実務の単位で整理する解説。一次資料だけでは判断しにくい運用上の境界と未確定部分を分けて読める。",
    whyImportant: ["不意打ち性の高いデジタル勧誘と通常の通信販売の境界を実務フローで考えられる", "UI規律を単なるデザイン禁止ではなく消費者の認識・選択への作用として整理している", "申込み・契約確認・解約を一連の運用として点検する視点を補える"],
    audience: ["企業法務", "EC・デジタルサービス法務", "プロダクト・UX担当", "マーケティング", "カスタマーサポート"],
    audienceReason: "法案成立前の段階で、どのデジタル導線を先に棚卸しすべきかを確定ルールと提案事項を分けて検討するため。",
    categories: ["消費者法・表示", "契約・取引", "電子契約"],
    relatedTopics: [SPECIFIC, BROAD],
    relatedIssues: ["dt-chat-solicitation", "dt-ui-steering", "dt-cancellation-contract", "dt-cancellation-friction", "consumer-review-chat-solicitation", "consumer-review-dark-patterns"],
    primarySourceIds: [FINAL],
    reformEventId: REFORM,
    reformStageAtPublication: "proposal",
    reformStageSourceIds: [FINAL],
    legacyReformInference: false,
    whatChanged: "実務解説補強／2026年9月10日の中間取りまとめを、勧誘・UI・契約確認・返品／解約の運用論点へ落とす参考解説を追加した。"
  };
  const articles = window.ARTICLE_DATA || [];
  if (!articles.some((x) => x && (x.id === ARTICLE || norm(x.url) === norm(article.url)))) window.ARTICLE_DATA = articles.concat(article);
})();
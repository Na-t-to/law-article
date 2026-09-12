(() => {
  const addUniqueById = (target, additions) => {
    const existing = new Set((target || []).map((item) => item && item.id));
    return (target || []).concat(additions.filter((item) => item && !existing.has(item.id)));
  };
  const addUniqueText = (target, value) => {
    const next = Array.isArray(target) ? [...target] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topicSlug = "early-business-recovery";
  const primarySourceId = "source-meti-early-business-recovery-rules-2026";
  const reformEventId = "early-business-recovery-act-2025";

  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-12";
    topic.lastVerified = "2026-09-12";
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "ファイナンス・リース債権の整理");
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "保証協会付き融資・外国金融機関");
    topic.practicalImpacts = addUniqueText(topic.practicalImpacts, "一時停止要請・プレDIPファイナンス");

    if (topic.currentSummary) {
      topic.currentSummary.facts = addUniqueText(
        topic.currentSummary.facts,
        "2026年6月30日の施行規則・告示・Q&Aにより、ファイナンス・リース債権、信用保証協会の求償権、一定の外国金融機関等も対象債権・対象債権者となり得ることや、一時停止要請、プレDIPファイナンスの取扱いが具体化されている。"
      );
      topic.currentSummary.interpretations = addUniqueText(
        topic.currentSummary.interpretations,
        "対象債権者・対象債権の洗い出しは従来の私的整理より広くなり得る。とくにファイナンス・リース、保証協会付き融資、外国金融機関を貸付債権等一覧表から漏らすと変更確認が必要になるため、手続開始前の債権者マッピングが重要になる。"
      );
      topic.currentSummary.implications = addUniqueText(
        topic.currentSummary.implications,
        "債務者側は、銀行借入だけでなくファイナンス・リース、保証協会付き融資、外国金融機関、担保・非保全部分、先行私的整理中のプレDIPファイナンスを含めて債権者・債権一覧を作成し、一時停止要請と資金繰りへの影響を事前にシミュレーションする。"
      );
      topic.currentSummary.uncertain = addUniqueText(
        topic.currentSummary.uncertain,
        "2026年9月時点では施行前であり、指定確認調査機関の指定・業務規程、裁判所手続の運用、施行後の案件での担保評価・手続選択などは引き続き確認が必要である。"
      );
    }
  }

  window.ARTICLE_DATA = addUniqueById(window.ARTICLE_DATA, [
    {
      id: "article-noandt-early-business-recovery-practice-2026",
      title: "【2026年12月11日施行】早期事業再生手続―金融機関・リース債権者・信用保証協会等の対象債権者及び利用を検討する債務者が押さえておくべき制度の特徴と重要点―",
      publisher: "長島・大野・常松法律事務所",
      author: "鐘ヶ江洋祐・髙野紘輝",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-12",
      url: "https://www.nagashima.com/publications/publication20260911-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／早期事業再生法・施行直前対応",
      status: "adopted",
      summary: "2026年12月11日施行の早期事業再生法について、6月30日に確定した施行規則・資産評定基準・178項目のQ&Aを踏まえ、対象債権者・対象債権、一時停止要請、プレDIPファイナンス、従来の私的整理との使い分けを施行直前の実務目線で整理する。とくに、担保付債権の保全・非保全部分、ファイナンス・リース債権、保証協会付き融資、外国金融機関、対象債権者の漏れが判明した場合の変更確認など、一次資料だけでは見通しにくい案件運用を具体化している。",
      whyImportant: [
        "6月30日の最終施行規則・Q&Aを前提にした施行直前の解説であり、3月のWG取りまとめ解説より現行ルールに近い実務像を確認できる",
        "権利変更の対象が非保全債権に限られる一方、保全債権も一時停止要請等の対象になり得るなど、担保付債権の二層構造を具体的に整理している",
        "ファイナンス・リース、信用保証協会、外国金融機関等を含む対象債権者・対象債権の洗い出しと、漏れが判明した場合の変更確認まで踏み込んでいる",
        "一時停止要請が原則として支払停止や当然の期限利益喪失事由とはならないこと、プレDIPファイナンスの保護、先行する私的整理からの移行など、債務者・金融機関双方の初動に直結する"
      ],
      audience: ["企業法務", "財務・経営企画", "事業再生・M&A担当", "金融機関法務・審査", "リース会社・信用保証実務担当"],
      audienceReason: "施行前に、対象債権者・債権の棚卸し、一時停止要請、担保評価、プレDIPファイナンス、既存私的整理からの移行を案件単位で準備するため。",
      categories: ["契約", "会社法・ガバナンス", "事業再生・金融"],
      relatedTopics: [topicSlug],
      relatedIssues: ["ebr-eligibility", "ebr-financial-claims", "ebr-voting-court", "ebr-process"],
      primarySourceIds: [primarySourceId],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [primarySourceId],
      whatChanged: "実務補強／最終施行規則・Q&Aを前提に、ファイナンス・リース、保証協会付き融資、外国金融機関、担保付債権、一時停止要請、プレDIPファイナンスまで施行直前の案件対応を具体化した。"
    }
  ]);
})();
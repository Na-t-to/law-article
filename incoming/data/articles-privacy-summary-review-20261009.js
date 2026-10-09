// Five bounded corrections to the October 1 rulemaking status and statutory
// commencement exceptions, verified against PPC primary materials on 2026-10-09.
// Loaded after historical article deltas that also amend topic summaries.
(() => {
  const changes = [
  {
    "slug": "ai-personal-data",
    "section": "facts",
    "index": 5,
    "before": "個人情報保護委員会は、統計作成等・委託先・漏えい等に関する改正法の下位ルールについて、2026年9月下旬から10月上旬に『基本的考え方②』として議論する当面のスケジュールを示している。",
    "after": "個人情報保護委員会は2026年10月1日、統計作成等の特例、委託先の取扱い、漏えい等報告・本人通知に関する『基本的な考え方②』を決定・公表した。具体的な政令・規則・ガイドラインの最終化や施行とは区別する。"
  },
  {
    "slug": "ai-personal-data",
    "section": "implications",
    "index": 6,
    "before": "AI開発の統計作成等特例やAIサービス委託の施行準備は、9月下旬以降の基本的考え方、意見交換・ヒアリング、具体案、パブリックコメントを段階的に追って更新する。",
    "after": "AI開発の統計作成等特例やAIサービス委託の施行準備では、10月1日の基本的な考え方②に示された公表・記録、目的外利用防止、越境移転、委託契約等の検討方向を確認し、意見交換・ヒアリング、具体案、パブリックコメント、最終ルールを段階的に追う。"
  },
  {
    "slug": "ai-personal-data",
    "section": "uncertain",
    "index": 2,
    "before": "統計作成等・委託先に関する9月下旬から10月上旬の検討時期は当面の予定であり、対象範囲や基準適合体制等の最終ルールが確定したものではない。",
    "after": "統計作成等・委託先・漏えい等報告に関する基本的な考え方②は10月1日に決定・公表されたが、対象範囲や基準適合体制等に関する具体的な政令・規則・ガイドラインは整備段階にある。基本的な考え方の決定を、特例の施行や最終ルールの確定として扱わない。"
  },
  {
    "slug": "personal-information-protection-2026-amendment",
    "section": "uncertain",
    "index": 1,
    "before": "施行日は現時点で特定の日付として確定しておらず、個別規定の施行時期も今後の政令等を確認する必要がある。",
    "after": "主要部分の施行日は、公布の日から起算して2年を超えない範囲内において政令で定める日とされており、具体的な暦日は引き続き確認が必要である。一方、附則第1条には公布日施行や公布の日から6か月を経過した日の施行等の例外があるため、個別規定ごとに区別して管理する。"
  },
  {
    "slug": "personal-information-protection-2026-amendment",
    "section": "uncertain",
    "index": 6,
    "before": "9月16日の政令・規則整備資料と安全管理措置ガイドライン見直しは、いずれも案・検討段階であり、今後の委員会審議・意見交換・パブリックコメントを経て変更され得る。統計作成等、委託先、漏えい等、連絡可能個人関連情報、オプトアウト、課徴金等は今回の具体化対象外で、次回以降の議論を待つ必要がある。",
    "after": "政令・規則の整備に向けた基本的な考え方は、2026年9月16日に①（同意例外、子供、顔特徴データ等）、10月1日に②（統計作成等、委託先、漏えい等報告・本人通知）が決定された。ただし、これらは最終的な政令・規則・ガイドラインではなく、具体的な要件は意見交換・ヒアリング、委員会審議、パブリックコメント等を経て具体化される。連絡可能個人関連情報、オプトアウト、課徴金等の次の議論と、安全管理措置ガイドラインの別途の見直しも継続確認する。"
  }
];
  if (!Array.isArray(window.TOPIC_DATA)) throw new Error('Privacy review: missing topics');
  // Validate all targets before applying any change. Reapplication is idempotent.
  for (const change of changes) {
    const matches = window.TOPIC_DATA.filter((topic) => topic.slug === change.slug);
    if (matches.length !== 1) throw new Error(`Privacy review: expected one ${change.slug}`);
    const value = matches[0].currentSummary?.[change.section]?.[change.index];
    if (value !== change.before && value !== change.after) {
      throw new Error(`Privacy review: unexpected previous text at ${change.slug}/${change.section}/${change.index}`);
    }
  }
  window.TOPIC_DATA = window.TOPIC_DATA.map((topic) => {
    const relevant = changes.filter((change) => change.slug === topic.slug);
    if (!relevant.length) return topic;
    const currentSummary = { ...topic.currentSummary };
    for (const change of relevant) {
      currentSummary[change.section] = [...currentSummary[change.section]];
      currentSummary[change.section][change.index] = change.after;
    }
    return { ...topic, currentSummary, lastUpdated: "2026-10-09", lastVerified: "2026-10-09" };
  });
})();

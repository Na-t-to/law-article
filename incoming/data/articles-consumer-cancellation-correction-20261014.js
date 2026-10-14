// Approved bounded correction, verified 2026-10-14 against printed pp.26-29.
// Source: https://www.caa.go.jp/policies/policy/consumer_system/meeting_materials/review_meeting_006/assets/consumer_system_cms205_260910_01.pdf#page=32
// Runs after all historical article deltas. No topic-wide verification/date advance.
(() => {
  const changes = [
  {
    "kind": "article",
    "path": [
      "whyImportant",
      2
    ],
    "before": "解約料は立証責任等についてA案・B案を併記しており、単純に『立証責任転換を見送った』とは整理できない",
    "after": "A案・B案・折衷案は、消費者側の立証困難への対応として検討された案であり、委員間の共通認識の形成には至っていない。中間取りまとめは、今回は消費者契約法9条1項1号を見直さず、まず解約料条項の説明に係る既存制度を拡充する方向を示した。更に検討を続けるべきとの意見も記録されており、将来の再検討を否定するものではない。"
  },
  {
    "kind": "article",
    "path": [
      "whatChanged"
    ],
    "before": "2026年9月10日の正式な中間取りまとめを再確認し、解約料についてA案・B案が併記されている点を反映して、従来の『9条1項1号自体を見直さない』という粗い整理を修正した。",
    "after": "2026年10月14日、正式な中間取りまとめの印刷26〜29頁に照らし、解約料に関するA案・B案・折衷案の検討経過と、今回は9条1項1号を見直さず説明制度の拡充を先に進める方向とを区別するよう訂正した。継続検討を求める意見もあり、成立・施行済みの制度変更を意味しない。確認・訂正は解約料部分に限る。"
  },
  {
    "kind": "topic",
    "path": [
      "overview",
      6
    ],
    "before": "解約料についても現行ルールの見直しが検討されているが、要件や立証責任の設計には複数案があり、現時点で確定した規律ではない。中間取りまとめは2026年9月16日から10月31日まで任意の意見募集に付されている。",
    "after": "A案・B案・折衷案は、消費者側の立証困難への対応として検討された案であり、委員間の共通認識の形成には至っていない。中間取りまとめは、今回は消費者契約法9条1項1号を見直さず、まず解約料条項の説明に係る既存制度を拡充する方向を示した。中間取りまとめは2026年9月16日から10月31日まで任意の意見募集に付されている。"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "facts",
      3
    ],
    "before": "2026年9月10日の中間取りまとめは、解約料に関する消費者契約法9条1項1号の立証責任等について、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記し、引き続き検討する整理としている。",
    "after": "A案・B案・折衷案は、消費者側の立証困難への対応として検討された案であり、委員間の共通認識の形成には至っていない。中間取りまとめは、今回は消費者契約法9条1項1号を見直さず、まず解約料条項の説明に係る既存制度を拡充する方向を示した。（解約料部分のみ2026年10月14日訂正。テーマ全体の再検証ではない。）"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "interpretations",
      2
    ],
    "before": "解約料は現行9条1項1号の基準を維持する方向なので、現在の有効性判断と、将来の説明・情報提供強化の施行準備を分けて管理する。",
    "after": "解約料は今回9条1項1号を見直さず説明制度を拡充する方向なので、現行法上の有効性判断と、今後の説明・情報提供制度の具体化に備える作業を分けて管理する。成立・施行済みの変更として扱わない。"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "interpretations",
      4
    ],
    "before": "解約料の立証責任は正式な中間取りまとめでも制度選択が確定していない。A案・B案の比較検討が続いているため、現行法上の『平均的な損害』の判断と将来の制度案を分けて管理する必要がある。",
    "after": "検討経過にA案・B案・折衷案が掲載されていることと、中間取りまとめが今回示した方向は区別する必要がある。中間取りまとめは、今回は消費者契約法9条1項1号を見直さず、まず解約料条項の説明に係る既存制度を拡充する方向を示した。更に検討を続けるべきとの意見も記録されており、将来の再検討を否定するものではない。"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "implications",
      6
    ],
    "before": "解約料・違約金を設定する事業では、今後の立証責任・算定ルールの具体化を継続確認する。",
    "after": "解約料・違約金を設定する事業では、説明・情報提供制度の具体化を確認するとともに、立証困難への対応を含む将来の再検討の動向も継続確認する。"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "uncertain",
      4
    ],
    "before": "解約料についてA案・B案のどちらを採るか、価格差別目的の解約料に関する具体的基準、最終条文、施行時期は未確定である。",
    "after": "説明制度の具体的内容・義務化の範囲、最終条文、施行時期は未確定である。A案・B案・折衷案が今回採用されたものではなく、将来の再検討の内容・時期も確定していない。"
  },
  {
    "kind": "topic",
    "path": [
      "currentSummary",
      "uncertain",
      6
    ],
    "before": "解約料規律の要件・立証責任には複数の考え方が示されており、最終的な制度設計は今後の検討・法制化過程を確認する必要がある。",
    "after": "更に検討を続けるべきとの意見も記録されており、将来の再検討を否定するものではない。今回の説明制度拡充の方向と、将来の9条1項1号・立証責任等の再検討を分けて追う。"
  },
  {
    "kind": "topic",
    "path": [
      "issues",
      2,
      "conclusion"
    ],
    "before": "2026年9月10日の中間取りまとめは、消費者契約法9条1項1号の立証責任等について、事業者側に立証責任を置き一定の価格差別目的の解約料に別基準を設けるA案と、原状回復賠償に相当する部分等は消費者側、それ以外は事業者側に立証責任を置くB案を併記しており、制度選択は未確定である。あわせて、解約料条項の説明に関する既存制度の拡充も検討されている。",
    "after": "2026年9月10日の中間取りまとめは、今回は消費者契約法9条1項1号を見直さず、まず解約料条項の説明に係る既存制度を拡充する方向を示した。A案・B案・折衷案は、消費者側の立証困難への対応として検討された案であり、委員間の共通認識の形成には至っていない。"
  },
  {
    "kind": "topic",
    "path": [
      "issues",
      2,
      "uncertain"
    ],
    "before": "A案・B案のどちらを採るか、価格差別目的の解約料に関する具体的基準、説明制度の義務化範囲、最終条文、施行時期は未確定である。",
    "after": "更に検討を続けるべきとの意見も記録されており、将来の再検討を否定するものではない。説明制度の具体的内容・義務化の範囲、最終条文、施行時期は未確定である。今回の取りまとめは成立法・施行済みルールではない。"
  },
  {
    "kind": "topic",
    "path": [
      "issues",
      9,
      "conclusion"
    ],
    "before": "更新時の退出機会確保、重要な契約変更の事前通知、解約料規律の見直しが検討対象となっている。",
    "after": "更新時の退出機会確保、重要な契約変更の事前通知が検討対象となっている。解約料については、今回は9条1項1号を見直さず、まず説明制度を拡充する方向が示されている。"
  },
  {
    "kind": "topic",
    "path": [
      "issues",
      9,
      "exception"
    ],
    "before": "解約料の算定・立証責任については複数案が示されており、事業者に一律の新たな立証義務が確定したわけではない。",
    "after": "A案・B案・折衷案は、消費者側の立証困難への対応として検討された案であり、委員間の共通認識の形成には至っていない。事業者に一律の新たな立証責任が成立・施行したものではない。"
  },
  {
    "kind": "topic",
    "path": [
      "issues",
      9,
      "uncertain"
    ],
    "before": "通知対象となる変更、通知時期・方法、解約料について誰が何を立証するか等の詳細は今後の法制化過程で確認する必要がある。",
    "after": "通知対象となる変更、通知時期・方法、解約料の説明制度の具体的内容等は今後の法制化過程で確認する必要がある。更に検討を続けるべきとの意見も記録されており、将来の再検討を否定するものではない。"
  }
];
  const getTarget = kind => {
    const items = kind === 'article' ? window.ARTICLE_DATA : window.TOPIC_DATA;
    const matches = (items || []).filter(item => kind === 'article' ? item.id === "article-caa-consumer-contract-interim-draft-2026" : item.slug === "consumer-contract-law-review-2026");
    if (matches.length !== 1) throw new Error('Consumer cancellation correction: expected one target');
    return matches[0];
  };
  // Validate every precondition before any mutation; replay is idempotent.
  for (const change of changes) {
    let value = getTarget(change.kind);
    for (const key of change.path) value = value[key];
    if (value !== change.before && value !== change.after) throw new Error('Consumer cancellation correction: unexpected original at ' + change.path.join('.'));
  }
  for (const change of changes) {
    let parent = getTarget(change.kind);
    for (const key of change.path.slice(0, -1)) parent = parent[key];
    parent[change.path.at(-1)] = change.after;
  }
})();

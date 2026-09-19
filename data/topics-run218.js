(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "security-assignment-retention-title");
  if (topic) {
    const articleId = "article-businesslawyers-oehashi-security-assignment-practice-20250623";
    const primarySourceId = "source-moj-security-assignment-act-2025";

    topic.lastUpdated = "2026-09-19";
    topic.lastVerified = "2026-09-19";
    topic.currentSummary = topic.currentSummary || {};

    topic.currentSummary.interpretations = appendTextUnique(
      topic.currentSummary.interpretations,
      "集合動産譲渡担保では設定者による目的動産の処分が原則として認められる一方、契約で処分権限を制限できる。集合債権譲渡担保では設定者に取立権限を持たせるには契約上の定めが必要であり、権限の範囲と喪失事由を契約で明確にする重要性が増す。"
    );
    topic.currentSummary.implications = appendTextUnique(
      topic.currentSummary.implications,
      "集合動産・集合債権を担保にする契約では、通常時の処分・取立権限、権限を失うトリガー、実行通知、第三債務者への通知、倒産開始時の取扱いを一連の運用として見直す。"
    );

    if (!(topic.issues || []).some((item) => item?.id === "security-assignment-collection-authority")) {
      topic.issues = (topic.issues || []).concat({
        id: "security-assignment-collection-authority",
        title: "集合動産・集合債権の処分・取立権限を契約でどう設計するか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "集合動産では設定者の処分権限の範囲を、集合債権では設定者の取立権限とその喪失事由を契約上明確にする。実行通知や倒産開始時に権限がどう切り替わるかも、第三債務者への通知を含めて運用へ落とす。",
        exception: "集合動産の処分権限を逸脱した場合の第三者保護や、集合債権の取立権限喪失を第三債務者へ対抗するための通知など、当事者間の契約だけでは完結しない規律がある。",
        uncertain: "施行に向けた下位法令・登記運用や、個別取引での条項例・実務慣行は引き続き確認が必要。",
        sourceIds: [primarySourceId]
      });
    }

    topic.referenceArticleIds = appendUnique(topic.referenceArticleIds, [articleId]);
    topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["集合動産の処分権限・集合債権の取立権限"]);
  }

  const newTopic = {
    slug: "medical-biological-research-ethics-2026",
    title: "生命科学・医学系研究倫理指針・2026年改正",
    categories: ["個人情報", "危機管理・コンプライアンス"],
    summary: "2026年8月27日に告示され、12月1日から施行される「人を対象とする生命科学・医学系研究に関する倫理指針」の改正について、IC・オプトアウト、個人情報保護法との役割分担、多機関共同研究の倫理審査、既存試料・情報の取扱いを整理する。",
    lastUpdated: "2026-09-19",
    lastVerified: "2026-09-19",
    isNew: true,
    overview: [
      "文部科学省・厚生労働省・経済産業省は2026年8月27日、「人を対象とする生命科学・医学系研究に関する倫理指針」を一部改正し、同年12月1日から施行する。",
      "改正は、個人情報保護法改正のたびに指針へ上乗せ規定を追加して複雑化した同意手続を整理し、仮名加工情報・匿名加工情報・個人関連情報については個人情報保護法の規定に則る構造へ寄せる。",
      "研究を侵襲・介入、試料を用いる研究、試料を用いない研究に分け、リスクに応じてIC又はオプトアウトを求める。既存試料・情報の利用・提供では、一定の場合にオプトアウトを基本とする。",
      "多機関共同研究では、侵襲・介入研究について一の倫理審査委員会による一括審査を必須とし、その他の研究でも原則として一括審査とする。"
    ],
    currentSummary: {
      facts: [
        "改正指針は2026年8月27日に告示され、2026年12月1日から施行される。",
        "「文書IC」「口頭IC」「適切な同意」の用語は「IC」に統一され、研究のリスクに応じてIC又はオプトアウトを行う構造へ整理された。",
        "仮名加工情報、匿名加工情報及び個人関連情報の取扱いは、個人情報保護法の関係規定に則って行うものとされた。",
        "既存試料・情報を利用・提供する研究では、適切な手続を経て取得されたこと等の要件を満たす場合、原則としてオプトアウトを行う整理が導入された。",
        "多機関共同研究の倫理審査は、侵襲・介入研究では一括審査を必須とし、その他の研究では原則として一括審査とされた。"
      ],
      interpretations: [
        "研究機関・医療機関・企業は、個人情報保護法上の適法性と倫理指針上のIC・オプトアウト・倫理審査を同じチェックリストに混在させず、どの情報類型・研究類型にどの規律がかかるかを分けて確認する必要がある。",
        "既存試料・情報の二次利用では、取得時の手続、包括同意の範囲、研究内容の特定、提供元・提供先の手続確認を一連のデータガバナンスとして追えるようにすることが重要になる。",
        "多機関共同研究では、各機関で重複審査する運用から、一括審査を前提とした役割・責任・資料共有の設計へ移行する必要がある。"
      ],
      implications: [
        "2026年12月1日までに研究計画書、説明・同意文書、オプトアウト文書、倫理審査申請様式を改正指針と突合する。",
        "仮名加工情報・匿名加工情報・個人関連情報について、倫理指針独自の手続と個人情報保護法上の義務を取り違えないよう社内・院内フローを更新する。",
        "既存試料・情報の利用・提供では、取得経緯、包括同意、研究内容の特定、提供元手続の確認を記録できるようにする。",
        "多機関共同研究の一括審査に対応するため、代表研究機関と共同研究機関の役割、審査資料、変更管理、情報共有を見直す。"
      ],
      uncertain: [
        "介入の定義など今回の改正対象から外れて引き続き検討される論点があり、今後のガイダンスや追加見直しを継続確認する必要がある。",
        "個々の研究でIC、オプトアウト、倫理審査、機関長許可のどの手続が必要かは、試料・情報の種類、取得時点、取得経緯、提供先、外国提供の有無等で変わる。"
      ]
    },
    issues: [
      {
        id: "medical-research-ethics-ic-optout",
        title: "ICとオプトアウトを研究類型ごとにどう切り分けるか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "侵襲・介入研究や新たに試料を取得する研究ではICを基本とし、既存試料・情報の利用・提供や一定の情報のみを用いる研究では、法定例外や包括同意等の要件に応じてオプトアウトを利用する構造へ整理する。",
        exception: "要配慮個人情報の新規取得、外国提供、取得時の同意内容などにより、ICの要否や簡略化・オプトアウトの可否は変わる。",
        uncertain: "個別研究への適用では改正指針本文に加え、今後のガイダンスで具体化される運用を確認する必要がある。",
        sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"]
      },
      {
        id: "medical-research-ethics-pipa-alignment",
        title: "仮名加工情報等を倫理指針と個人情報保護法でどう整理するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "仮名加工情報、匿名加工情報及び個人関連情報については、改正指針上、個人情報保護法の関係規定に則って取り扱う構造とし、従来の指針独自の上乗せ規律を整理する。",
        exception: "研究全体について倫理指針の他の規定や倫理審査が不要になることを意味せず、情報類型以外の研究手続は別途確認する。",
        uncertain: "個人情報保護法自体の今後の改正やガイドライン更新により、参照すべき具体的規律が変わり得る。",
        sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"]
      },
      {
        id: "medical-research-ethics-multisite-review",
        title: "多機関共同研究の倫理審査をどう一括化するか",
        status: "authoritative",
        stage: "enacted",
        views: [],
        conclusion: "侵襲・介入研究の多機関共同研究は一の倫理審査委員会による一括審査を必須とし、その他の多機関共同研究でも原則として一括審査とする。",
        exception: "研究のリスクに応じて通常審査・迅速審査の扱いが異なり、倫理審査委員会が迅速審査ではなく通常審査を行うことも妨げられない。",
        uncertain: "代表機関・共同研究機関間の具体的な資料共有や変更管理の実務は、各機関の規程・今後のガイダンスも確認する必要がある。",
        sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"]
      },
      {
        id: "medical-research-ethics-transition",
        title: "12月1日施行へ研究実務をどう切り替えるか",
        status: "interpreted",
        stage: "enacted",
        views: [],
        conclusion: "新規・変更研究の申請様式や同意・オプトアウト手続を12月1日施行の改正指針へ合わせつつ、実施中研究については経過措置の適用可否を個別に確認して旧ルールと新ルールを混在させない。",
        exception: "現行指針等により実施中の研究は、個人情報保護関連法令・ガイドラインを遵守する場合に限り、なお従前の例によることができる。",
        uncertain: "機関内規程・様式の具体的な切替日や既存研究の変更時の取扱いは、各機関の運用と今後のガイダンスを確認する必要がある。",
        sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"]
      }
    ],
    sourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
    referenceArticleIds: ["article-mext-medical-research-ethics-guideline-20260828", "article-tmi-medical-research-ethics-guideline-20260901"],
    practicalImpacts: ["研究計画書", "説明・同意文書", "オプトアウト文書", "倫理審査委員会運用", "多機関共同研究", "医療・研究データの二次利用", "外国への試料・情報提供"]
  };

  if (!(window.TOPIC_DATA || []).some((item) => item?.slug === newTopic.slug)) {
    window.TOPIC_DATA = (window.TOPIC_DATA || []).concat(newTopic);
  }
})();

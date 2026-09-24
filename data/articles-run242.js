(() => {
  if (window.__LAW_INDEX_RUN242_APPLIED__) return;
  window.__LAW_INDEX_RUN242_APPLIED__ = true;

  const TOPIC = "consumer-contract-law-review-2026";
  const REFORM = "consumer-contract-law-review-2026";
  const ARTICLE = "article-miyake-consumer-contract-update-20260919";
  const INTERIM = "source-caa-consumer-contract-interim-draft-2026";
  const COMMENT = "source-caa-consumer-contract-public-comment-2026";

  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addUniqueMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(values || [])].filter(Boolean)));

  const article = (window.ARTICLE_DATA || []).find((item) => item && item.id === ARTICLE);
  if (article) {
    article.relatedTopics = addUnique(article.relatedTopics, TOPIC);
    article.relatedIssues = addUniqueMany(article.relatedIssues, [
      "consumer-contract-vulnerability-release",
      "consumer-contract-cancellation-obstruction",
      "consumer-contract-cancellation-fees"
    ]);
    article.primarySourceIds = addUniqueMany(article.primarySourceIds, [INTERIM, COMMENT]);
    article.reformEventId = REFORM;
    article.reformStageAtPublication = "proposal";
    article.reformStageSourceIds = addUniqueMany(article.reformStageSourceIds, [INTERIM, COMMENT]);
    article.legacyReformInference = false;
  }

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || ![
        "consumer-contract-vulnerability-release",
        "consumer-contract-cancellation-obstruction",
        "consumer-contract-cancellation-fees"
      ].includes(issue.id)) return issue;
      return { ...issue, sourceIds: addUnique(issue.sourceIds, INTERIM) };
    });
    return {
      ...topic,
      sourceIds: addUniqueMany(topic.sourceIds, [INTERIM, COMMENT]),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      issues
    };
  });

  const reform = (window.REFORM_EVENT_DATA || []).find((event) => event && event.id === REFORM);
  if (reform) {
    reform.matchSourceIds = addUniqueMany(reform.matchSourceIds, [INTERIM, COMMENT]);
    reform.sourceIds = addUniqueMany(reform.sourceIds, [INTERIM, COMMENT]);
    reform.articleIds = addUnique(reform.articleIds, ARTICLE);
  }
})();

(() => {
  if (window.__LAW_INDEX_PRIVACY_SUBRULES_20260916_APPLIED__) return;
  window.__LAW_INDEX_PRIVACY_SUBRULES_20260916_APPLIED__ = true;

  const TOPIC = "personal-information-protection-2026-amendment";
  const REFORM = "privacy-law-2026-amendment";
  const RULE_SOURCE_DEFAULT = "source-ppc-privacy-subrules-basic-20260916";
  const SECURITY_SOURCE_DEFAULT = "source-ppc-privacy-security-guideline-review-20260916";
  const ARTICLE_DEFAULT = "article-miyake-privacy-subrules-20260918";
  const ARTICLE_URL = "https://www.miyake.gr.jp/notice/%E6%94%BF%E4%BB%A4%E3%83%BB%E8%A6%8F%E5%89%87%E3%81%AE%E6%95%B4%E5%82%99%E3%81%8C%E3%80%8C%E4%B8%AD%E8%BA%AB%E3%80%8D%E3%81%AE%E8%AD%B0%E8%AB%96%E3%81%B8%E2%80%95-%E4%BB%A4%E5%92%8C%EF%BC%98%E5%B9%B4/";
  const RULE_URL = "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf";
  const SECURITY_URL = "https://www.ppc.go.jp/files/pdf/260916_shiryou-2.pdf";

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
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const addMany = (items, values) => Array.from(new Set([...(Array.isArray(items) ? items : []), ...(Array.isArray(values) ? values : [])].filter(Boolean)));

  let sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const sourceByUrl = (url) => sources.find((item) => item && normalizeUrl(item.url) === normalizeUrl(url));

  const ruleSource = sourceByUrl(RULE_URL) || {
    id: RULE_SOURCE_DEFAULT,
    title: "個人情報の保護に関する法律等の一部を改正する法律　政令・規則の整備に向けた基本的な考え方（案）について①（適正なデータ利活用の推進、リスクに適切に対応した規律①）",
    type: "guideline",
    typeLabel: "個人情報保護委員会・政令／規則整備案",
    authority: "個人情報保護委員会",
    publishedAt: "2026-09-16",
    url: RULE_URL,
    importance: "最高",
    whyImportant: "2026年改正個人情報保護法の下位ルールについて、本人同意不要の例外、16歳未満の子供、顔特徴データ等の三項目で、政令・委員会規則に定め得る範囲と具体的な追加候補を初めて示した施行準備の一次資料。いずれも案段階であり、今後の議論・意見公募で変更され得る。",
    topics: [TOPIC]
  };
  if (!sourceByUrl(RULE_URL)) {
    sources = sources.concat(ruleSource);
    window.SOURCE_DATA = sources;
  }
  const RULE_SOURCE = ruleSource.id;

  const securitySource = sourceByUrl(SECURITY_URL) || {
    id: SECURITY_SOURCE_DEFAULT,
    title: "個人情報の保護に関する法律についてのガイドライン（通則編）等における安全管理措置の手法の例示の追加等の検討について",
    type: "guideline",
    typeLabel: "個人情報保護委員会・安全管理措置ガイドライン見直し案",
    authority: "個人情報保護委員会",
    publishedAt: "2026-09-16",
    url: SECURITY_URL,
    importance: "高",
    whyImportant: "安全管理措置ガイドライン別添について、クラウド、多要素認証、ゼロトラスト、侵入後の横展開対策等を例示へ取り込む見直しの方向性と、2027年4月施行を目指すスケジュール案を示した一次資料。",
    topics: [TOPIC]
  };
  if (!sourceByUrl(SECURITY_URL)) {
    sources = (Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : []).concat(securitySource);
    window.SOURCE_DATA = sources;
  }
  const SECURITY_SOURCE = securitySource.id;

  const existingArticle = (Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : []).find((item) => item && normalizeUrl(item.url) === normalizeUrl(ARTICLE_URL));
  const ARTICLE = existingArticle?.id || ARTICLE_DEFAULT;

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;
    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue) return issue;
      if (issue.id === "privacy-2026-consent-exceptions") {
        return {
          ...issue,
          conclusion: "改正法は、契約履行のため必要やむを得ないことが明らかな場合等について、目的外利用・要配慮個人情報の取得・第三者提供等に関する本人同意の例外を拡張する。2026年9月16日の基本的な考え方（案）は、規則で追加できるのは、本人が同意する意思を有し又は同意すべき立場にあり、本人にとって不測の権利利益侵害をもたらさないことが自明な場合に限るとの枠を示し、本人以外の第三者との契約履行（家族による宿泊予約等）と、本人の要望に応じるため契約締結前に必要な処理（3-Dセキュア等）を追加候補として論点提示している。",
          exception: "9月16日資料は政令・規則の『基本的な考え方（案）』であり、例示された類型がそのまま最終規則として確定したものではない。事業上便利であるというだけで同意不要となる一般条項ではなく、自明性と不測の権利利益侵害がないことが前提となる。",
          uncertain: "追加類型の最終的な規則文言・判断基準・ガイドライン上の具体例は、今後の委員会審議、意見交換、パブリックコメント等を経て具体化される。",
          sourceIds: addUnique(issue.sourceIds, RULE_SOURCE)
        };
      }
      if (issue.id === "privacy-2026-children") {
        return {
          ...issue,
          conclusion: "改正法は、本人が16歳未満の場合、法所定の同意・通知等について原則として法定代理人を対象とする規律を設けるほか、一定の利用停止等・第三者提供停止請求を事業者側の違反の有無にかかわらず認める枠組みを導入する。2026年9月16日の基本的な考え方（案）は、同意例外についても法定代理人が同意する意思を有し又は同意すべき立場にあり、子供本人に不測の権利利益侵害をもたらさないことが自明な場合に限って規則化できるとの枠を示している。",
          exception: "規定ごとに対象年齢や例外が異なり、未成年者の最善の利益への配慮は16歳未満だけを対象とするものではない。9月16日資料も最終規則ではなく案段階である。",
          uncertain: "年齢確認の方法、法定代理人対応の例外、利用停止等請求の追加例外、『必要な措置』の具体化などは、今後の政令・規則・ガイドライン・Q&Aを確認する。",
          sourceIds: addUnique(issue.sourceIds, RULE_SOURCE)
        };
      }
      if (issue.id === "privacy-2026-biometric") {
        return {
          ...issue,
          conclusion: "改正法は特定生体個人情報について一定事項の周知、利用停止等・第三者提供停止請求に関する特則、オプトアウトによる第三者提供からの除外等を設ける。2026年9月16日の基本的な考え方（案）は、政令で定める対象としてまず顔特徴データを候補とし、周知方法について監視カメラ・センサー等の周辺や検知対象者が十分認識できる場所での分かりやすい掲示等を検討する方向を示している。",
          exception: "すべての生体情報を一律に対象とするものではなく、政令対象は本人が関知しないうちに容易に取得でき、一意性・不変性が高く、識別効果が長期継続する等の特性を踏まえて検討される。顔特徴データ以外を対象とするかも未確定である。",
          uncertain: "対象となる生体データの具体的範囲、周知事項・方法、利用停止等請求の例外は案段階で、今後の政令・規則・ガイドライン・Q&Aにより確定する。",
          sourceIds: addUnique(issue.sourceIds, RULE_SOURCE)
        };
      }
      return issue;
    });
    return {
      ...topic,
      lastUpdated: "2026-09-25",
      lastVerified: "2026-09-25",
      sourceIds: addMany(topic.sourceIds, [RULE_SOURCE, SECURITY_SOURCE]),
      referenceArticleIds: addUnique(topic.referenceArticleIds, ARTICLE),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addMany(currentSummary.facts, [
          "個人情報保護委員会は2026年9月16日、2026年改正法の政令・規則整備について、本人同意不要の例外、子供の個人情報、顔特徴データ等の三項目に関する『基本的な考え方（案）』を初めて公表した。",
          "同日、個人情報保護委員会は安全管理措置ガイドライン別添の現代化方針も示し、クラウド、多要素認証、ゼロトラスト、侵入後の横展開対策等を例示へ取り込む方向と、2027年4月施行を目指すスケジュール案を公表した。"
        ]),
        interpretations: addUnique(currentSummary.interpretations, "9月16日資料は、改正法の同意例外を事業者判断で広く使える一般条項とせず、『本人の意思に反しないこと・不測の権利利益侵害がないことが自明』という狭い枠の中で規則化する方向を示しているため、例外利用時は対象類型と判断根拠を記録できる設計が重要になる。"),
        implications: addMany(currentSummary.implications, [
          "予約・決済・本人認証等で改正後の同意例外を見込む業務は、第三者との契約履行か、本人の要望に応じる契約締結前処理かを切り分け、最終規則が出る前に一律な同意不要運用へ移行しない。",
          "顔認証・入退室管理・店舗カメラ等は、顔特徴データの取得場所での掲示、利用目的、利用停止等請求の導線を現行運用と照合し、下位ルール確定後に差分対応できるよう棚卸しする。",
          "安全管理措置は改正法本体の施行だけを待たず、クラウド利用、多要素認証、特権アカウント、侵害時の停止・隔離等について2027年4月のガイドライン見直し予定を見据えて先行点検する。"
        ]),
        uncertain: addUnique(currentSummary.uncertain, "9月16日の政令・規則整備資料と安全管理措置ガイドライン見直しは、いずれも案・検討段階であり、今後の委員会審議・意見交換・パブリックコメントを経て変更され得る。統計作成等、委託先、漏えい等、連絡可能個人関連情報、オプトアウト、課徴金等は今回の具体化対象外で、次回以降の議論を待つ必要がある。")
      }
    };
  });

  if (!existingArticle) {
    const article = {
      id: ARTICLE_DEFAULT,
      title: "政令・規則の整備が『中身』の議論へ― 令和８年９月16日 第369回個人情報保護委員会 公表資料の解説 ―（個人情報保護法ニュース No.23）",
      publisher: "弁護士法人三宅法律事務所",
      author: "渡邉 雅之",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-25",
      url: ARTICLE_URL,
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／2026年改正個人情報保護法・政令／規則",
      status: "adopted",
      summary: "2026年9月16日の第369回個人情報保護委員会資料を、2026年改正個人情報保護法の条文委任と対応付けて整理する実務解説。本人同意不要の例外を『自明性』等の枠から広げ過ぎないこと、第三者との契約履行・契約締結前の本人要望対応という追加候補、16歳未満の子供への読替え、顔特徴データの対象・周知、安全管理措置ガイドラインの見直しを横断し、確定ルールと案段階を切り分けて施行準備へ落としている。",
      whyImportant: [
        "8月26日の『全体像』から一歩進み、政令・規則に何をどこまで書けるかという初の具体案を、改正条文と実務フローへ対応付けて読める",
        "本人同意不要の例外を広く解釈せず、自明性・不測の権利利益侵害がないことを判断軸として、予約・決済・本人認証等の業務にどこまで使えるかを検討できる",
        "子供・顔特徴データに加え、安全管理措置ガイドラインのクラウド、多要素認証、ゼロトラスト、横展開対策と2027年4月の見直し予定を一つの施行準備表として把握できる",
        "統計作成等、委託先、漏えい等、連絡可能個人関連情報、オプトアウト、課徴金は今回未検討であることも明示し、未確定事項を確定ルールとして先取りしにくい"
      ],
      audience: ["企業法務", "プライバシー・DPO", "データ・プロダクト担当", "広告・マーケティング担当", "情報システム・セキュリティ担当"],
      audienceReason: "改正法の下位ルールが具体化し始めた段階で、どの業務を先に棚卸しし、何をまだ確定扱いしないかを分けて施行準備へ落とすため。",
      categories: ["個人情報", "AI・デジタル", "危機管理・コンプライアンス"],
      relatedTopics: [TOPIC],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"],
      primarySourceIds: [RULE_SOURCE, SECURITY_SOURCE, "source-privacy-law-2026-amendment", "source-privacy-law-2026-rulemap"],
      reformEventId: REFORM,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", RULE_SOURCE],
      legacyReformInference: false,
      whatChanged: "施行準備更新／2026年改正個人情報保護法について、本人同意例外・16歳未満・顔特徴データの政令／規則整備の初の具体案と、安全管理措置ガイドライン見直しの方向性を一次資料と実務解説で反映した。"
    };
    window.ARTICLE_DATA = (Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : []).concat(article);
  }

  const reform = (Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : []).find((event) => event && event.id === REFORM);
  if (reform) {
    reform.matchSourceIds = addMany(reform.matchSourceIds, [RULE_SOURCE, SECURITY_SOURCE]);
    reform.sourceIds = addMany(reform.sourceIds, [RULE_SOURCE, SECURITY_SOURCE]);
    reform.articleIds = addUnique(reform.articleIds, ARTICLE);
  }

  const updateId = "update-privacy-2026-09-16-subrules";
  if (Array.isArray(window.UPDATE_DATA) && !window.UPDATE_DATA.some((item) => item && item.id === updateId)) {
    window.UPDATE_DATA = window.UPDATE_DATA.concat({
      id: updateId,
      source: RULE_SOURCE,
      headline: "2026年改正個人情報保護法の政令・規則整備案①を反映",
      publishedAt: "2026-09-16",
      type: "law-update",
      typeLabel: "施行準備・政令／規則案",
      summary: "個人情報保護委員会が、本人同意不要の例外、16歳未満の子供、顔特徴データ等について、政令・委員会規則に定め得る範囲と追加候補を示す初の『基本的な考え方（案）』を公表したため、施行準備の整理を更新した。",
      whatChanged: "下位ルールが具体化待ちという整理から、同意例外の自明性の枠、第三者契約・契約前処理の候補、子供への読替え、顔特徴データの対象・周知方法について案段階の方向性まで追える整理へ更新した。",
      affectedTopics: [TOPIC],
      affectedIssues: [
        { topic: TOPIC, issue: "privacy-2026-consent-exceptions", before: "具体的な適用場面は規則・ガイドライン待ち", after: "同意例外の自明性の枠と、第三者契約履行・契約締結前処理の追加候補を案段階で登録" },
        { topic: TOPIC, issue: "privacy-2026-children", before: "年齢確認・法定代理人対応等の下位ルール待ち", after: "子供についても同意例外を自明性の枠で規則化する方向を案段階で登録" },
        { topic: TOPIC, issue: "privacy-2026-biometric", before: "対象生体データ・周知方法の下位ルール待ち", after: "顔特徴データを中心とする対象候補と、カメラ・センサー周辺等での周知方向を案段階で登録" }
      ],
      before: "改正法の条文と8月26日の全体像を基礎に、政令・規則・ガイドラインの具体化を待つ整理。",
      after: "9月16日の第369回委員会資料を反映し、三項目について政令・規則が取り得る範囲と具体候補を、未確定の案として区別して追跡。",
      keyPoints: [
        "本人同意不要の追加例外は、自明性と不測の権利利益侵害がないことを狭い枠として検討されている",
        "第三者との契約履行と契約締結前の本人要望対応が追加候補として論点提示された",
        "子供・顔特徴データの具体化も案段階で、今後の委員会審議・パブリックコメントで変更され得る"
      ],
      importance: "最重要",
      tags: ["個人情報", "施行準備"],
      confidence: "fact"
    });
  }
})();

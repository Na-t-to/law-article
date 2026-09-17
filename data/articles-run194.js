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

  const topic = "child-sexual-violence-prevention-dbs-2026";
  const event = "child-sexual-violence-prevention-act-2026";
  const lawSource = "source-cfa-child-sexual-violence-prevention-act-2026";
  const practiceSource = "source-cfa-child-sexual-violence-practice-materials-2026";

  const additions = [
    {
      id: "article-cfa-child-sexual-violence-prevention-act-2026",
      title: "こども性暴力防止法（法令・通知・施行ガイドライン）",
      publisher: "こども家庭庁",
      author: "こども家庭庁",
      publishedAt: "2024-06-26",
      collectedAt: "2026-09-17",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou",
      sourceType: "primary",
      sourceLabel: "一次資料・こども性暴力防止法／施行ガイドライン",
      status: "adopted",
      summary: "こども性暴力防止法の法律・施行期日政令・施行令・施行規則・告示・ガイドライン・Q&A・ひな型・施行準備資料を集約する公式ページ。法律は2024年6月26日公布、2026年12月25日施行で、学校・認可保育所等の義務事業者と、認定を受ける一定の民間教育保育等事業者を区別して制度を運用する。2026年9月2日には施行ガイドラインと複数のひな型が更新され、9月4日には義務事業者用施行準備ガイドVer.1.1が周知された。",
      whyImportant: [
        "施行日、対象事業者、下位法令、ガイドライン、Q&Aを一つの公式ページから追える制度全体の基準点になる",
        "犯罪事実確認だけでなく、対処規程、研修、情報管理、採用・就業規則等の施行準備資料まで確認できる",
        "2026年9月時点のガイドライン・ひな型更新を把握でき、古い準備資料だけで運用設計するのを防げる"
      ],
      audience: ["企業法務", "人事・労務", "学校法人・保育事業者", "学習塾・スポーツ等の民間教育事業者", "コンプライアンス担当"],
      audienceReason: "2026年12月25日の施行に向け、現行の確定ルールと施行準備資料を一次資料からまとめて確認するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: [
        "child-dbs-covered-businesses-work",
        "child-dbs-prevention-and-check",
        "child-dbs-information-management",
        "child-dbs-private-provider-recognition"
      ],
      primarySourceIds: [lawSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource],
      legacyReformInference: false,
      whatChanged: "こども性暴力防止法を新テーマ・新法改正イベントとして追加し、2026年12月25日の確定施行日と9月時点の施行準備資料を基準点にした。"
    },
    {
      id: "article-cfa-child-sexual-violence-practice-materials-2026",
      title: "こども性暴力防止法に関する解説動画・資料",
      publisher: "こども家庭庁",
      author: "こども家庭庁",
      publishedAt: "2026-09-09",
      collectedAt: "2026-09-17",
      url: "https://www.cfa.go.jp/policies/child-safety/efforts/koseibouhou/jigyousya",
      sourceType: "primary",
      sourceLabel: "一次資料・施行実務／労務・情報管理・研修",
      status: "adopted",
      summary: "こども性暴力防止法の事業者向け実務教材を集約した公式ページ。制度全体の解説だけでなく、児童対象性暴力等の事案発生時対応、防止措置と労働法制等を踏まえた留意点、情報管理措置、研修の企画・実施・記録管理までを分けて整理している。2026年9月には演習資料や情報管理関連の手引き等も更新されている。",
      whyImportant: [
        "犯罪事実確認だけでは足りない施行対応を、労務・危機対応・研修・情報管理の実務へ展開できる",
        "事案発生時の聴き取り・保護者対応など、平時のチェックだけでは見落としやすい危機管理論点を確認できる",
        "情報管理責任者・担当者向けの具体的教材があり、機微な確認情報のアクセス権限・記録管理を設計する起点になる"
      ],
      audience: ["企業法務", "人事・労務", "コンプライアンス・危機管理", "情報管理担当", "教育・保育事業者"],
      audienceReason: "施行準備を制度理解から社内規程・研修・情報管理・有事対応へ落とし込むため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: [
        "child-dbs-prevention-and-check",
        "child-dbs-employment-measures",
        "child-dbs-information-management"
      ],
      primarySourceIds: [lawSource, practiceSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource],
      legacyReformInference: false,
      whatChanged: "新テーマに、労働法制・情報管理・研修・事案対応まで含む公式実装資料を追加し、『DBS照会だけの制度』ではない整理を明確にした。"
    },
    {
      id: "article-tmi-child-sexual-violence-overview-20260501",
      title: "［連載］こども性暴力防止法 基礎解説（第1回）―こども性暴力防止法の全体像―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-05-01",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18302.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／こども性暴力防止法の全体像",
      status: "adopted",
      summary: "こども家庭庁のこども性暴力防止法アドバイザーを務める弁護士による2026年版の基礎解説。学校・認可保育所等と認定を受けた民間教育保育等事業者を対象に、犯罪事実確認、初犯防止対策、防止措置を含む制度の全体像を示し、ガイドライン・Q&Aを実務対応の基準として読む位置付けを整理する。",
      whyImportant: [
        "『日本版DBS』を犯罪歴確認だけでなく初犯防止・防止措置まで含む制度として短く把握できる",
        "施行ガイドラインとQ&Aをどのように実務で使うかの入口になり、一次資料の読み順をつくれる",
        "執筆者がこども家庭庁の制度アドバイザーで、現在の2026年施行準備を踏まえた解説として参照価値が高い"
      ],
      audience: ["企業法務", "人事・労務", "教育・保育事業者", "コンプライアンス担当"],
      audienceReason: "制度の全体像と一次資料の関係を短時間でつかみ、社内の対応プロジェクトを立ち上げるため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: ["child-dbs-prevention-and-check"],
      primarySourceIds: [lawSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource],
      legacyReformInference: false,
      whatChanged: "新法の全体像を一次資料の薄い言い換えではなく、犯罪事実確認・初犯防止・防止措置を一体で読む実務解説として補完した。"
    },
    {
      id: "article-tmi-child-sexual-violence-scope-20260710",
      title: "［連載］こども性暴力防止法 基礎解説（第3回）―こども性暴力防止法の適用対象（対象事業・対象業務）―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-10",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18558.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／対象事業・対象業務",
      status: "adopted",
      summary: "こども性暴力防止法の適用対象を、義務事業者である学校設置者等と、認定を受けた場合に義務を負う民間教育保育等事業者に分け、対象業務従事者を具体的な職種まで整理する解説。職種の一部が対象となり得る場合は、支配性・継続性・閉鎖性の3要件から実態で判断し、オンラインでの接触も閉鎖性に含み得ることを具体化する。",
      whyImportant: [
        "制度対応の最初の難所である『誰をチェック対象にするか』を職種表と3要件で具体的に判断できる",
        "スポット勤務やオンライン接触など、職種名だけでは判定できないケースの考え方を示している",
        "学校・保育・障害児支援・民間教育など複数の対象事業を横断して整理しており、グループ事業の棚卸しに使いやすい"
      ],
      audience: ["企業法務", "人事・労務", "教育・保育事業者", "福祉事業者", "事業企画担当"],
      audienceReason: "対象事業・対象業務従事者を過不足なく特定し、犯罪事実確認や研修の対象範囲を設計するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: ["child-dbs-covered-businesses-work"],
      primarySourceIds: [lawSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource],
      legacyReformInference: false,
      whatChanged: "新テーマに、対象事業・対象業務を支配性・継続性・閉鎖性から具体判定する実務解説を追加した。"
    },
    {
      id: "article-tmi-child-sexual-violence-recognition-20260724",
      title: "［連載］こども性暴力防止法 基礎解説（第4回）―認定制度―",
      publisher: "TMI総合法律事務所",
      author: "益原大亮",
      publishedAt: "2026-07-24",
      collectedAt: "2026-09-17",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18597.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／民間教育保育等事業者の認定",
      status: "adopted",
      summary: "学習塾等を含む民間教育保育等事業者の認定制度を、認定・共同認定の要件、認定後に負う措置義務、認定事業者マーク、事業単位の申請、フランチャイズでの事業者単位の扱い、関連システムを含めて整理する解説。認定は単なる表示制度ではなく、犯罪事実確認、早期把握、相談、対処規程、研修、情報管理等の体制整備を前提とすることが分かる。",
      whyImportant: [
        "任意の認定と、認定後に発生する学校設置者等と同様の義務を明確に分けて理解できる",
        "フランチャイズ本部の認定が加盟店へ当然に及ばないなど、事業構造に即した申請単位を確認できる",
        "認定事業者マーク取得だけではなく、責任者・相談・規程・研修・情報管理まで含む実装要件を把握できる"
      ],
      audience: ["企業法務", "学習塾・スポーツ等の民間教育事業者", "フランチャイズ本部・加盟店", "人事・コンプライアンス担当"],
      audienceReason: "認定を取得するか、どの事業・法人単位で申請するか、取得後の運用負担まで含めて判断するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topic],
      relatedIssues: ["child-dbs-private-provider-recognition", "child-dbs-prevention-and-check", "child-dbs-information-management"],
      primarySourceIds: [lawSource],
      reformEventId: event,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [lawSource],
      legacyReformInference: false,
      whatChanged: "新テーマに、民間教育保育等事業者の認定を事業単位・フランチャイズ・体制整備まで落とす実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

(() => {
  const appendUnique = (items, additions) => [...new Set([...(Array.isArray(items) ? items : []), ...additions])];
  const appendTextUnique = (items, text) => {
    const current = Array.isArray(items) ? items : [];
    return current.includes(text) ? current : current.concat(text);
  };
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

  const sourceId = "source-iphc-sep-employee-invention-20250918";
  const topic = (window.TOPIC_DATA || []).find((item) => item?.slug === "employee-inventions-patent-act-35");
  if (topic) {
    topic.lastUpdated = "2026-09-19";
    topic.lastVerified = "2026-09-19";
    topic.currentSummary = topic.currentSummary || {};

    topic.currentSummary.facts = appendTextUnique(
      topic.currentSummary.facts,
      "知財高裁2025年9月18日判決（令和6年（ネ）第10040号）は、平成16年改正前の特許法35条3項・4項に基づく職務発明対価請求で、DVDビデオ規格の規格必須特許（SEP）リストに掲載され、他のリスト掲載特許と一体としてライセンス料の支払対象となった特許について、現実に実施されていなくても使用者の独占の利益が発生し得ると判断し、既払の実施報奨金を控除した3378万9124円等の支払を認めた。"
    );
    topic.currentSummary.interpretations = appendTextUnique(
      topic.currentSummary.interpretations,
      "SEP・パテントプール等では、個別特許の現実の実施だけでなく、標準必須特許としての評価、特許リストへの掲載、包括ライセンスの対象となっていた事実、権利不行使の対価を含むライセンス収益との結び付きも、使用者が受ける利益を評価する材料になり得る。もっとも、2025年知財高裁判決の直接の法的根拠は平成16年改正前の特許法35条であり、現行制度へ金額・貢献度を機械的に移植しない。"
    );
    topic.currentSummary.implications = appendTextUnique(
      topic.currentSummary.implications,
      "職務発明が標準化・パテントプール・包括ライセンス・クロスライセンスに組み込まれる場合は、SEP判定・リスト掲載の根拠、ライセンス対象範囲と収益、実施状況、標準化活動への会社の寄与、共同発明者間の貢献、既払報奨を後から追える資料として残す。"
    );
    topic.currentSummary.uncertain = appendTextUnique(
      topic.currentSummary.uncertain,
      "2025年知財高裁判決は平成16年改正前の『相当の対価』制度の事案であり、現行特許法35条7項の算定や、異なるSEPプール・包括ライセンス・クロスライセンスの収益配分へどこまで同じ評価が及ぶかは個別事案に依存する。"
    );

    if (!(topic.issues || []).some((item) => item?.id === "employee-invention-license-revenue-sep")) {
      topic.issues = (topic.issues || []).concat({
        id: "employee-invention-license-revenue-sep",
        title: "SEP・包括ライセンス収益を職務発明の利益評価へどう反映するか",
        status: "interpreted",
        stage: "effective",
        views: [],
        conclusion: "2025年知財高裁判決の旧法事案では、特許が技術的評価を経てSEPリストに掲載され、他の特許と一体で許諾・ライセンス料の対象となっていた場合、結果的に現実の実施がなくても使用者の独占の利益を直ちに否定しないとされた。実施の有無だけでなく、標準化・リスト掲載・包括ライセンスの構造と収益への寄与を確認する。",
        exception: "同判決の直接の法的根拠は平成16年改正前の特許法35条3項・4項である。判決で認定された使用者貢献度98％、共同発明者間の原告貢献度50％等を現行制度や別案件へそのまま当てはめることはできない。",
        uncertain: "現行特許法35条7項の算定、別のSEPプールやクロスライセンス、事後的な必須性評価が異なる案件での収益配分は、ライセンス条件・標準化活動・証拠関係に応じた個別判断が必要。",
        sourceIds: [sourceId]
      });
    }

    topic.sourceIds = appendUnique(topic.sourceIds, [sourceId]);
    topic.practicalImpacts = appendUnique(topic.practicalImpacts, ["SEP・パテントプール／包括ライセンスの職務発明報奨算定"]);
  }

  const additions = [
    {
      id: "article-iphc-sep-employee-invention-20250918",
      title: "知財高裁2025年9月18日判決（令和6年（ネ）第10040号 職務発明対価請求控訴事件）",
      publisher: "裁判所",
      author: "知的財産高等裁判所第2部",
      publishedAt: "2025-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-point_pdf-95377.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・知財高裁判決／SEP・職務発明対価",
      status: "adopted",
      summary: "平成16年改正前の特許法35条3項・4項に基づく職務発明対価請求で、DVDビデオ規格のSEPリストに掲載され、他のリスト掲載特許と一体として許諾・ライセンス料の対象となった特許について、現実に実施されていなくても使用者の独占の利益が否定されないとした知財高裁判決。裁判所は、事後的な必須性・実施の有無は独占の利益の有無を決める一律の入口ではなく、相当の対価の算定における貢献度評価で考慮し得ると整理し、使用者貢献度98％、共同発明者間の原告貢献度50％等を踏まえ、既払報奨金控除後3378万9124円等の支払を認めた。",
      whyImportant: [
        "標準必須特許として評価され特許リストへ掲載され、包括ライセンス料の対象となったこと自体が、個別特許の現実の実施とは別に使用者の利益へつながり得ることを一次資料で確認できる",
        "事後的な必須性・実施の有無を『職務発明対価が発生するか否か』の二値判断だけに使わず、ライセンス構造や貢献度の評価と分けて検討する視点を得られる",
        "直接の法的根拠は平成16年改正前の特許法35条であり、現行の『相当の利益』制度へ判決の割合や算定を機械的に移植できないという射程も併せて確認できる"
      ],
      audience: ["企業法務", "知的財産部門", "研究開発部門", "人事・労務", "ライセンス担当"],
      audienceReason: "SEP・パテントプール・包括ライセンスに関係する職務発明について、実施実績だけでは捉えにくいライセンス価値と報奨算定の証拠をどう残すか検討するため。",
      categories: ["知的財産", "労務", "契約"],
      relatedTopics: ["employee-inventions-patent-act-35"],
      relatedIssues: ["employee-invention-license-revenue-sep"],
      primarySourceIds: [sourceId],
      legacyReformInference: false,
      whatChanged: "テーマ補強／職務発明の利益評価に、SEPリスト掲載と包括ライセンス収益をどう反映するかという判例上の論点を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

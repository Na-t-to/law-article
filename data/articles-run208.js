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

  const additions = [
    {
      id: "article-uchisaiwai-rpm-guideline-20260727",
      title: "メーカーの販売価格指定はどこまで許されるか｜流通・取引慣行ガイドライン改正",
      publisher: "内幸町国際総合法律事務所",
      author: "櫻町直樹",
      publishedAt: "2026-07-27",
      collectedAt: "2026-09-18",
      url: "https://uchisaiwai-law.com/n.sakura/blog/article20260727.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・内幸町国際総合法律事務所／指定価格制度と契約・費用負担",
      status: "adopted",
      summary: "2026年7月の流通・取引慣行ガイドライン改正を、メーカーの販売制度・契約実務へ落とした解説。売買・委託販売等の契約名ではなく、返品、在庫、契約不適合、滅失・毀損、代金回収不能の危険と、保管・配送・広告等の費用を誰が実際に負担するかが重要と整理する。メーカーが費用項目と負担方法を明示し、不足について販売店が協議を申し出られる仕組みを設けることや、取引基本契約・覚書・返品規程と実運用を突き合わせる実務チェックまで示す。",
      whyImportant: [
        "一次資料の『危険・費用をメーカーが負担する』という基準を、返品規程、費用精算、在庫・代金回収等の契約・運用項目へ具体化している",
        "費用項目をメーカーが一方的に決めるのではなく、販売店から不足を申し出て協議する手続まで含めた運用設計を確認できる",
        "ガイドライン改正に法令上の施行日があるわけではなく、独禁法の運用上の考え方を明確化したものだという境界も整理している"
      ],
      audience: ["企業法務", "販売店・代理店契約担当", "営業・流通担当", "経理・費用精算", "コンプライアンス担当"],
      audienceReason: "指定価格型の施策を契約条項だけでなく返品・費用・在庫・決済の実運用へ落とし込み、一次資料の要件をチェック可能な項目へ変換するため。",
      categories: ["独占禁止法・競争法", "契約", "危機管理・コンプライアンス"],
      relatedTopics: ["distribution-resale-price"],
      relatedIssues: ["rpm-principle", "rpm-risk-cost-exception"],
      primarySourceIds: [
        "source-jftc-distribution-guideline-2026",
        "source-jftc-distribution-guideline-current-20260708",
        "source-jftc-rpm-faq-20260708"
      ],
      reformEventId: "distribution-guideline-rpm-2026-amendment",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jftc-distribution-guideline-2026", "source-jftc-distribution-guideline-current-20260708"],
      legacyReformInference: false,
      whatChanged: "既存テーマ補完／ガイドラインの抽象基準を、返品・在庫・費用・協議・契約書と実運用の突合という企業実務へ落とし込む解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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

  const additions = [
    {
      id: "article-not-corporate-takeover-guidelines-20260804",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-18",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／企業買収行動指針Q&Aと取締役会対応",
      status: "adopted",
      summary: "2026年7月30日の企業買収行動指針Q&A等を、取締役会の案件対応へ落とし込んだ解説。高値提案だけで『望ましい買収』が決まるわけではないこと、真摯な買収提案の具体性・目的・実現可能性を総合判断すること、買収者の属性・資力・実績・買収後方針、取引条件、規制承認を確認し、買収者案とスタンド・アローン等を比較することを整理する。従業員・取引先、サステナビリティ、サプライチェーン・経済安全保障等の定性的要素も、将来キャッシュフローや割引率との合理的な結び付きがあれば企業価値評価に織り込めると説明する。",
      whyImportant: [
        "『最高価格を選ぶ義務』という単純化を避けつつ、価格が重要な要素であることと、企業価値・株主共同の利益をどう分けて検討するかを具体化している",
        "真摯な検討で確認すべき買収者情報、取引条件、規制承認、スタンド・アローンとの比較、説明責任を取締役会の作業項目として整理している",
        "定性的要素を企業価値へ組み込む場合のキャッシュフロー・割引率との接続、定量化または説得的説明の必要性まで示している"
      ],
      audience: ["上場会社法務", "取締役会事務局", "M&A・経営企画", "IR・コーポレートガバナンス"],
      audienceReason: "同意なき買収を含む買収提案を受けた際、提案の真摯性、情報要求、企業価値比較、株主説明を取締役会プロセスへ落とすため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: [
        "takeover-guideline-desirable-acquisition",
        "takeover-guideline-serious-proposal",
        "takeover-guideline-board-review",
        "takeover-guideline-qualitative-value"
      ],
      primarySourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／2026年Q&A等を、最高価格・真摯性・取締役会の検討プロセス・定性的企業価値の実務へ落とし込む代表的解説として追加した。"
    },
    {
      id: "article-amt-corporate-takeover-guidelines-20260903",
      title: "【M&A】『企業買収における行動指針』のポイント及びQ&A等の公表① ―『企業買収における行動指針』のポイント等の概要―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "青柳良則・佐橋雄介",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-18",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260903001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／企業買収行動指針のポイント・誤解整理",
      status: "adopted",
      summary: "企業買収行動指針の2026年ポイント・Q&Aが、2023年指針を改訂せず趣旨を明確化する資料であることを確認し、高値であれば望ましい買収なのか、従業員・取引先等の意向や経済安全保障を企業価値へどう反映するか、買収提案に備えて平時に何を整えるかを整理した解説。独立性の高い取締役会、事業計画・資本構成・ポートフォリオの継続的検証、投資家対話や情報開示を、買収提案を受けた際の比較・説明基盤として位置付ける。",
      whyImportant: [
        "2026年文書が指針の改訂ではなく、実務上生じた誤解を解くための明確化であることを明示している",
        "高い買収価格と企業価値を同一視しないこと、定性的要素をキャッシュフロー・割引率へ接続して考慮することを、研究会で確認された誤解と対比して理解できる",
        "買収提案を受けた後の対応だけでなく、独立性の高い取締役会、事業計画・資本構成・ポートフォリオ、投資家対話・情報開示という平時の準備まで接続している"
      ],
      audience: ["上場会社法務", "取締役会事務局", "M&A・経営企画", "IR・コーポレートガバナンス"],
      audienceReason: "2026年の解釈資料を『指針改正』と誤解せず、平時のガバナンスから買収提案受領後の企業価値評価まで一続きで設計するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines-2026"],
      relatedIssues: [
        "takeover-guideline-desirable-acquisition",
        "takeover-guideline-board-review",
        "takeover-guideline-qualitative-value"
      ],
      primarySourceIds: ["source-meti-corporate-takeover-guideline-2023", "source-meti-corporate-takeover-qna-20260730"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／2023年指針を維持するという制度上の位置付けと、平時の企業価値向上・取締役会設計まで含む実務的な読み方を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

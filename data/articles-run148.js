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

  const articles = [
    {
      id: "article-mhlw-business-transfer-labor-guideline-2026",
      title: "「事業譲渡又は合併を行うに当たって会社等が留意すべき事項に関する指針」の一部改正について",
      publisher: "厚生労働省",
      author: "厚生労働省 労働基準局 労働関係法課",
      publishedAt: "2026-01-20",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudouseisaku/saihen/68297_00001.html",
      sourceType: "primary",
      sourceLabel: "一次資料／事業譲渡等指針・2026年改正",
      status: "adopted",
      summary: "2026年5月25日から適用される事業譲渡等指針の改正をまとめた厚生労働省の公式ページ。企業価値担保権の実行による事業譲渡を念頭に、管財人による労働者・労働組合への情報提供、団体交渉への誠実対応、譲渡の背景・承継先・労働条件・承継対象等についての事前協議を整理し、会社には平時から労使コミュニケーションを促進することを求めている。",
      whyImportant: [
        "企業価値担保権の実行を担保・再生手続だけでなく労働者保護の観点から扱う公式基準を確認できる",
        "管財人が情報提供・団体交渉・労働者や労働組合との協議をどこまで行うべきかの基準になる",
        "企業側にも設定・実行以前の平時から経営課題等をめぐる労使コミュニケーションを促す点が、通常の事業譲渡対応より一歩広い",
        "2026年5月25日適用という確定済みルールを、現在進行中の組織再編労働法制の見直しと分けて管理できる"
      ],
      audience: ["企業法務", "人事・労務", "M&A担当", "事業再生・金融担当"],
      audienceReason: "事業譲渡や企業価値担保権の設定・実行を検討する際に、労使への情報提供・協議・承諾取得を取引工程へ組み込むため。",
      categories: ["M&A", "労務", "事業再生・金融"],
      relatedTopics: ["corporate-reorganization-labor-succession", "enterprise-value-security-business-lending"],
      relatedIssues: ["business-transfer-labor-guideline-2026"],
      primarySourceIds: ["source-mhlw-business-transfer-labor-guideline-2026"],
      reformEventId: "business-transfer-labor-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-business-transfer-labor-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／2026年5月25日適用の事業譲渡等指針改正を、企業価値担保権実行時の情報提供・団体交渉・労使協議として整理した。"
    },
    {
      id: "article-ey-corporate-reorganization-labor-2026",
      title: "組織再編に伴う労働関係の調整に関する議論",
      publisher: "EY弁護士法人",
      author: "EY弁護士法人",
      publishedAt: "2026-02-06",
      collectedAt: "2026-09-15",
      url: "https://www.ey.com/ja_jp/technical/ey-japan-tax-library/tax-alerts/2026/tax-alerts-02-06-02",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／事業譲渡等指針・企業価値担保権",
      status: "adopted",
      summary: "企業価値担保権の実行で管財人が事業譲渡を行う場面を軸に、2026年事業譲渡等指針改正の労働法務上の意味を解説する。労働契約移転には原則として労働者本人の承諾が必要であることを前提に、管財人による個々の労働者への情報提供、労働組合からの団体交渉への誠実対応、譲渡理由・スポンサー・労働条件・承継予定者範囲・労働協約等をめぐる事前協議、会社の平時の情報提供・対話まで実務対応へ落としている。",
      whyImportant: [
        "事業性融資推進法と労働法制を横断し、企業価値担保権の実行時に誰が何を説明・協議するかを役割ごとに整理している",
        "事業譲渡における労働者本人の承諾と、管財人・労働組合・スポンサーとの協議を別の手続として把握できる",
        "譲渡の背景、スポンサーの債務履行見込み、労働条件、承継予定労働者、労働協約など、案件資料に落とし込む具体的な説明事項が分かる",
        "企業側の対応を実行時だけでなく、平時の労働者・労働組合への情報提供と対話まで遡って示している"
      ],
      audience: ["企業法務", "人事・労務", "M&A担当", "事業再生・金融担当"],
      audienceReason: "企業価値担保権を利用する会社や事業譲渡案件で、管財人・スポンサー・労使の役割と準備事項を具体化するため。",
      categories: ["M&A", "労務", "事業再生・金融"],
      relatedTopics: ["corporate-reorganization-labor-succession", "enterprise-value-security-business-lending"],
      relatedIssues: ["business-transfer-labor-guideline-2026"],
      primarySourceIds: ["source-mhlw-business-transfer-labor-guideline-2026"],
      reformEventId: "business-transfer-labor-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-business-transfer-labor-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "参考解説追加／2026年事業譲渡等指針改正を、管財人・会社・労働者・労働組合の役割と案件実務へ落とした。"
    },
    {
      id: "article-mhlw-corporate-reorg-labor-review-2026-07",
      title: "第7回 労働政策審議会労働条件分科会「組織再編に伴う労働関係の調整に関する部会」議事録",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-07-03",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/newpage_75551.html",
      sourceType: "primary",
      sourceLabel: "一次資料／組織再編労働法制・制度見直し",
      status: "adopted",
      summary: "組織再編に伴う労働者保護の見直しに向け、合併・会社分割・事業譲渡の現行制度と主要裁判例・命令例を横断的に確認した部会議事録。合併は当然承継、会社分割は主従事要件等を備える労働契約承継法、事業譲渡は合意を基礎とするという制度差を示すほか、会社分割の5条協議が全く又は著しく不十分な場合に承継効力が争われ得る裁判例などを整理している。",
      whyImportant: [
        "M&A・組織再編の手法によって労働契約承継の法的構成が異なることを行政の最新検討資料から確認できる",
        "会社分割の5条協議・7条措置を単なる形式手続ではなく承継効力にも関わり得る実質的なプロセスとして把握できる",
        "再編手法を超えて共通する労働条件変更や集団的労使関係の論点も検討対象となっていることが分かる",
        "将来の制度見直しの出発点となる現行法・裁判例の棚卸しとして使える"
      ],
      audience: ["企業法務", "人事・労務", "M&A担当"],
      audienceReason: "再編スキーム選択時に、労働契約の承継・異議申出・説明協議の差を現行制度と裁判例から確認するため。",
      categories: ["M&A", "労務"],
      relatedTopics: ["corporate-reorganization-labor-succession"],
      relatedIssues: ["reorg-labor-scheme-differences", "reorg-labor-split-procedure", "reorg-labor-policy-review-2026"],
      primarySourceIds: ["source-labor-contract-succession-act", "source-mhlw-corporate-reorg-labor-review-2026-07"],
      reformEventId: "corporate-reorganization-labor-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-corporate-reorg-labor-review-2026-07"],
      legacyReformInference: false,
      whatChanged: "新テーマ作成／合併・会社分割・事業譲渡の労働契約承継ルールと、会社分割の5条協議・7条措置を制度見直しの基礎として整理した。"
    },
    {
      id: "article-mhlw-corporate-reorg-labor-review-2026-09",
      title: "第8回 労働政策審議会労働条件分科会「組織再編に伴う労働関係の調整に関する部会」（資料）",
      publisher: "厚生労働省",
      author: "厚生労働省／労働政策審議会",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/newpage_76153.html",
      sourceType: "primary",
      sourceLabel: "一次資料／組織再編労働法制・最新検討",
      status: "adopted",
      summary: "2026年9月14日の組織再編部会資料。M&A調査会社からのヒアリングに加え、EU・ドイツ・フランス・英国の事業移転時の労働法制を比較し、自動承継の適用範囲、労働者の承継拒否、労働条件変更、労使コミュニケーション等を検討素材としている。事業性融資推進法の附帯決議が求めた、合併・事業譲渡を含む組織再編時の労働者保護に関するより広い制度検討が継続していることを確認できる。",
      whyImportant: [
        "2026年5月の事業譲渡等指針改正で検討が完結したわけではなく、組織再編労働法制全体の見直しが現在も進行中であることを確認できる",
        "EU・ドイツ・フランス・英国では事業移転に伴う労働契約の自動承継が基礎となるなど、日本の事業譲渡との制度差が比較されている",
        "承継拒否、労働条件の変更、情報提供・協議など、今後の日本の制度設計で論点になり得る項目が具体化している",
        "資料は検討段階であり、海外制度を日本の現行ルールとして先取りしてはならないことも明確に管理できる"
      ],
      audience: ["企業法務", "人事・労務", "M&A担当", "制度調査担当"],
      audienceReason: "M&A・組織再編に関する労働者保護ルールの将来変更を、現行義務と区別して早期に追跡するため。",
      categories: ["M&A", "労務"],
      relatedTopics: ["corporate-reorganization-labor-succession"],
      relatedIssues: ["reorg-labor-scheme-differences", "reorg-labor-policy-review-2026"],
      primarySourceIds: ["source-mhlw-corporate-reorg-labor-review-2026-09", "source-labor-contract-succession-act"],
      reformEventId: "corporate-reorganization-labor-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-mhlw-corporate-reorg-labor-review-2026-09"],
      legacyReformInference: false,
      whatChanged: "制度見直し追跡／2026年9月14日のM&A実態・海外法制比較を追加し、現行ルールと将来の制度検討を分離して追えるようにした。"
    }
  ];

  let currentArticles = window.ARTICLE_DATA || [];
  const existingIds = new Set(currentArticles.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(currentArticles.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  articles.forEach((article) => {
    if (existingIds.has(article.id) || existingUrls.has(normalizeUrl(article.url))) return;
    currentArticles = currentArticles.concat([article]);
    existingIds.add(article.id);
    existingUrls.add(normalizeUrl(article.url));
  });
  window.ARTICLE_DATA = currentArticles;
})();

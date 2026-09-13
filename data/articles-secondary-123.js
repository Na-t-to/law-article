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
      id: "article-noandt-whistleblower-grievance-2026",
      title: "公益通報者保護法の改正を踏まえ、企業の内部通報窓口とグリーバンス・メカニズムの設計・運用はどうあるべきか",
      publisher: "長島・大野・常松法律事務所",
      author: "福原あゆみ",
      publishedAt: "2026-06-10",
      collectedAt: "2026-09-13",
      url: "https://www.nagashima.com/publications/publication20260610-1/",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／公益通報・グリーバンス・メカニズム",
      status: "adopted",
      summary: "2026年12月1日施行の改正公益通報者保護法を踏まえ、社内の内部通報窓口、ハラスメント窓口、サプライヤー・取引先向け窓口、人権グリーバンス・メカニズムの役割と重なりを整理する実務解説。フリーランスへの保護拡大により複数窓口で公益通報を受領し得ること、窓口ごとのレポーティングライン・従事者指定・秘密保持を整える必要があること、取引先と調査協力する際の通報者同意・保護、複数窓口の情報を匿名化して組織的問題を把握する運用まで具体化している。",
      whyImportant: [
        "複数の通報・相談窓口を持つ企業について、窓口名ではなく利用対象者・受付対象・レポーティングラインを棚卸しし、どの窓口でも公益通報を受領し得る前提で従事者指定や秘密保持を整える必要性を示している",
        "フリーランスへの保護拡大と、人権グリーバンス・メカニズムの外部ステークホルダー向け機能を横断して整理し、内部通報制度とサプライチェーン上の苦情処理を別々に設計し過ぎるリスクを把握できる",
        "取引先に関する申告で情報提供・調査協力を求める場合も、通報者の秘密保持と必要な同意を前提にしつつ、取引先へ不利益取扱い防止や是正状況の確認を求める運用を具体化している",
        "複数窓口が個別案件を分断して処理すると組織的・反復的な不正を見逃し得るため、匿名化等に配慮した横断分析という内部統制上の論点を補っている"
      ],
      audience: ["危機管理・コンプライアンス", "企業法務", "内部監査", "人権・サステナビリティ", "人事"],
      audienceReason: "改正法施行前に、内部通報・ハラスメント・取引先向け相談・人権グリーバンス等の複数窓口を一体で棚卸しし、受付後の秘密保持、従事者指定、取引先連携、横断分析まで運用設計するため。",
      categories: ["危機管理・コンプライアンス", "労務・人事", "契約・取引"],
      relatedTopics: ["whistleblower-internal-reporting", "business-human-rights-dd"],
      relatedIssues: ["wb-scope-freelance", "wb-system-controls", "wb-records-notice", "bhr-remedy-grievance"],
      primarySourceIds: ["source-caa-whistleblower-amendment-2025", "source-whistleblower-guideline-2026", "source-meti-bhr-guideline-2022"],
      reformEventId: "whistleblower-protection-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-caa-whistleblower-amendment-2025", "source-caa-whistleblower-guideline-2026"],
      whatChanged: "整理変更なし／改正公益通報者保護法を踏まえ、複数の申告窓口と人権グリーバンス・メカニズムを横断して、従事者指定・秘密保持・取引先連携・横断分析へ落とす実務解説を追加した。"
    }
  ];

  const current = window.ARTICLE_DATA || [];
  const existingIds = new Set(current.map((item) => item && item.id).filter(Boolean));
  const existingUrls = new Set(current.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (additions.length) window.ARTICLE_DATA = current.concat(additions);
})();

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
      id: "article-na-human-rights-crisis-response-20260917",
      title: "サステナビリティ経営の戦略法務第22回 人権問題に対する危機管理対応 ―国際人権基準を踏まえた実践的アプローチ―",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "渡邉純子・衛藤葵・藤尾春香・石田愛子",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-18",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260917",
      sourceType: "secondary",
      sourceLabel: "実務解説・西村あさひ／人権問題の危機管理",
      status: "adopted",
      summary: "人権問題が顕在化した局面では、国内法上の責任やコンプライアンス違反の有無だけで対応を終えず、被害申告後の対応の適切性、被害者救済、経営陣への情報共有などを国際人権基準の観点から危機管理として捉える必要があることを解説する。",
      whyImportant: [
        "平時の人権デュー・ディリジェンスだけでなく、人権リスクが実際に発覚・申告された後の初動、調査、救済、経営エスカレーションまでを同じ管理サイクルへ接続している",
        "従来型の企業不祥事対応で中心となりやすい法的責任・コンプライアンス違反の有無だけでは、人権問題への対応として十分でない場合があるという実務上の差分を明確にしている",
        "危機管理、社内調査、内部通報・グリーバンス、人権・サステナビリティ、経営報告を部門横断で設計する際の論点整理に使える"
      ],
      audience: ["企業法務", "コンプライアンス・危機管理", "人権・サステナビリティ担当", "内部通報・社内調査担当"],
      audienceReason: "人権問題の申告・発覚後に、法的責任調査だけでなく、被害者保護・救済、経営共有、再発防止を含む対応フローを設計するため。",
      categories: ["危機管理・コンプライアンス", "国際取引", "労務"],
      relatedTopics: ["business-human-rights-dd"],
      relatedIssues: ["bhr-crisis-response", "bhr-remedy-grievance", "bhr-dd-cycle"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"],
      legacyReformInference: false,
      whatChanged: "ビジネスと人権の棚に、平時の人権DDだけでなく、人権問題の申告・発覚後における危機管理、被害者救済、経営エスカレーションという実務レイヤーを追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

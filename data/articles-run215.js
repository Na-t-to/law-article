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
      id: "article-nishimura-european-model-clauses-bhr-20251017",
      title: "ビジネスと人権のフロントライン: 責任ある持続可能なサプライチェーンのための欧州モデル条項",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "湯川 雄介・伴 真範・長岡 隼平",
      publishedAt: "2025-10-17",
      collectedAt: "2026-09-19",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_251017",
      sourceType: "secondary",
      sourceLabel: "実務解説・西村あさひ／人権DD・契約条項",
      status: "adopted",
      summary: "国連『ビジネスと人権に関する指導原則』は人権尊重責任の履行手段として契約条項の利用自体を必須としていない一方、契約条項は負の影響へ対処するための『影響力（leverage）』として機能し得ることを出発点に、欧州モデル条項を素材としてサプライチェーン契約と人権デュー・ディリジェンスの接続を整理する実務解説。モデル条項を最終的な法的ルールとして扱うのではなく、人権DDを取引条件へ落とすための設計資料として読む価値がある。",
      whyImportant: [
        "人権条項を入れたこと自体を人権DDの完了とせず、契約を負の影響の予防・軽減・対処に使う『影響力』の一つとして位置付ける視点を得られる",
        "サプライヤー行動規範、情報提供・協力、是正、救済、取引継続・終了などを、法務だけでなく調達・サステナビリティ運用と接続して検討する入口になる",
        "欧州モデル条項は策定・更新が続く実務資料であり、ひな形の文言を固定ルールとしてコピーするのではなく、現行のモデル本文と自社の取引構造を都度確認すべきことを意識できる"
      ],
      audience: ["企業法務", "調達・購買", "人権・サステナビリティ担当", "国際取引担当"],
      audienceReason: "取引先への人権要求を一方的な遵守条項で終わらせず、人権DDの実効性を高める契約・調達プロセスとして設計するため。",
      categories: ["契約", "危機管理・コンプライアンス", "国際取引"],
      relatedTopics: ["business-human-rights-dd"],
      relatedIssues: ["bhr-dd-cycle", "bhr-remedy-grievance"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023"],
      legacyReformInference: false,
      whatChanged: "ビジネスと人権の棚に、人権DDを取引条件へ実装する手段として契約条項と『影響力』の関係を整理する実務解説を追加した。"
    },
    {
      id: "article-nishimura-sustainability-ma-dd-20260831",
      title: "サステナビリティ経営の戦略法務第21回 M&AにおけるサステナビリティDDの再考―SSBJ基準時代に改めて考える上場会社としての留意点―（後編）",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "渡邉 純子・衛藤 葵・井口 義隆・町田 竜太",
      publishedAt: "2026-08-31",
      collectedAt: "2026-09-23",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260831",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／M&A・サステナビリティDD",
      status: "adopted",
      summary: "M&Aでサステナビリティ・ESGを切り口としたデュー・ディリジェンスを行う際に、一般的な法務DDとの相違点、契約上の対応、PMIへの反映を整理する実務解説。買収対象会社のサステナビリティリスクを買い手グループへ取り込むことや、買収後の人権・環境DD、サステナビリティ情報開示へ影響が及ぶことを前提に、参照基準・調査対象・契約・買収後対応を一続きで考える必要性を示す。",
      whyImportant: [
        "M&Aを法令違反や偶発債務の確認だけで終わらせず、買収対象の人権・環境等のサステナビリティリスクを買い手グループへ取り込む取引として捉え直せる",
        "一般的な法務DDとサステナビリティDDでは参照する基準や対象範囲が異なり得るため、既存のDDチェックリストへ単純に項目を足すだけでは足りないという設計上の差を確認できる",
        "発見事項をDD報告で止めず、契約上の対応とPMIへ引き継ぎ、買収後の人権・環境DDや情報開示と接続する実務フローを検討できる"
      ],
      audience: ["企業法務", "M&A担当", "サステナビリティ・人権担当", "経営企画・PMI担当"],
      audienceReason: "買収前のサステナビリティリスク把握を、契約条件と買収後の人権DD・環境DD・情報開示まで切れ目なく引き継ぐため。",
      categories: ["M&A", "危機管理・コンプライアンス", "国際取引"],
      relatedTopics: ["business-human-rights-dd"],
      relatedIssues: ["bhr-ma-dd"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023", "source-mofa-bhr-nap-2025"],
      legacyReformInference: false,
      whatChanged: "バックフィル／M&AのサステナビリティDDについて、一般法務DDとの差分、契約上の対応、PMIへの引継ぎを一続きで確認できる実務解説を追加した。"
    },
    {
      id: "article-nishimura-human-rights-crisis-management-20260917",
      title: "サステナビリティ経営の戦略法務第22回 人権問題に対する危機管理対応―国際人権基準を踏まえた実践的アプローチ―",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "渡邉 純子・衛藤 葵・藤尾 春香・石田 愛子",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-23",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260917",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／ビジネスと人権・危機管理",
      status: "adopted",
      summary: "企業の人権問題への危機管理を、国内法上の法的責任やコンプライアンス違反の有無だけで捉えず、国際人権基準を踏まえて考える実務解説。加害行為そのものに加え、被害申告を受けた後の対応の適切性、被害者救済の在り方、経営陣への情報共有も企業対応の評価対象になり得ることを示し、人権リスクが顕在化した後の初動・救済・社内連携を平時の人権DDと切り離さず考える入口になる。",
      whyImportant: [
        "国内法上の責任が直ちに認められるかという確認だけでは、人権問題への企業対応として十分でない場合があるという危機管理上の視点を得られる",
        "問題となった行為だけでなく、被害申告後の対応、被害者救済、経営陣への情報共有そのものが評価対象になり得るため、通報・調査・救済・エスカレーションを一体で点検できる",
        "人権DDを平時のリスク特定に限定せず、リスク顕在化後の危機管理と救済までつながる継続的な管理プロセスとして考える材料になる"
      ],
      audience: ["企業法務", "サステナビリティ・人権担当", "コンプライアンス・内部通報担当", "危機管理・経営企画"],
      audienceReason: "人権問題が顕在化した際に、違法性判断だけでなく、被害者対応、救済、経営陣への共有を含む危機管理の初動とエスカレーションを設計するため。",
      categories: ["危機管理・コンプライアンス", "国際取引"],
      relatedTopics: ["business-human-rights-dd"],
      relatedIssues: ["bhr-dd-cycle", "bhr-remedy-grievance"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"],
      legacyReformInference: false,
      whatChanged: "新規採用／人権問題の危機管理について、違法性の有無だけでなく被害申告後の対応・救済・経営陣への情報共有まで追う実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-na-ma-sustainability-dd-ssbj-2026-part1",
      title: "サステナビリティ経営の戦略法務第20回 M&AにおけるサステナビリティDDの再考―SSBJ基準時代に改めて考える上場会社としての留意点―（前編）",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "渡邉 純子・衛藤 葵・井口 義隆・町田 竜太",
      publishedAt: "2026-08-20",
      collectedAt: "2026-09-14",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260820",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニューズレター・M&A／サステナビリティDD",
      status: "adopted",
      summary: "M&Aでは、買い手が対象会社のサステナビリティリスクを自社グループへ取り込むだけでなく、買収後の人権・環境DDやサステナビリティ情報開示にも影響が及ぶことを出発点に、上場会社がSSBJ基準を意識してサステナビリティDDを行う必要性を整理する解説。平時のサステナビリティ管理とディール時の調査を分断せず、買収判断と買収後の開示・管理へつなぐ視点を示す。",
      whyImportant: [
        "サステナビリティDDをM&A固有のチェック項目として閉じず、買収後の人権・環境DDとサステナビリティ開示へ連続するプロセスとして捉えられる",
        "上場会社では、対象会社のリスク・機会が買収後のグループ経営とSSBJ基準に基づく開示へ波及し得るため、投資判断と開示統制を早い段階から接続する必要があることを確認できる",
        "従来の法務DDだけでは拾い切れない人権・環境・サステナビリティ上の論点を、案件ごとの重要性に応じて調査範囲へ組み込む入口になる"
      ],
      audience: ["M&A法務", "企業法務", "経営企画", "サステナビリティ担当", "IR・開示担当"],
      audienceReason: "買収対象会社のサステナビリティリスクを、ディール判断だけでなく買収後の人権・環境DD、SSBJ開示、グループ管理まで見通して調査設計するため。",
      categories: ["M&A", "危機管理・コンプライアンス", "金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["business-human-rights-dd", "ssbj-statutory-sustainability-disclosure"],
      relatedIssues: ["bhr-ma-dd", "bhr-risk-identification", "ssbj-application-scope"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023", "source-ssbj-standards-current"],
      whatChanged: "整理変更なし／M&AのサステナビリティDDを、買収後の人権・環境DDとSSBJ開示へ連続させる実務解説を補完した。"
    },
    {
      id: "article-na-ma-sustainability-dd-ssbj-2026-part2",
      title: "サステナビリティ経営の戦略法務第21回 M&AにおけるサステナビリティDDの再考―SSBJ基準時代に改めて考える上場会社としての留意点―（後編）",
      publisher: "西村あさひ法律事務所・外国法共同事業",
      author: "渡邉 純子・衛藤 葵・井口 義隆・町田 竜太",
      publishedAt: "2026-08-31",
      collectedAt: "2026-09-14",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260831",
      sourceType: "secondary",
      sourceLabel: "法律事務所ニューズレター・M&A／サステナビリティDD",
      status: "adopted",
      summary: "前編を踏まえ、サステナビリティDDと一般的な法務DDの相違を、参照する基準や対象範囲等から整理し、調査で把握した事項を取引契約上の対応とPost Merger Integration（PMI）へどう引き継ぐかを解説する。M&A固有の時間・情報制約の下で確認したサステナビリティ課題を、契約締結時だけで終わらせず、買収後の管理・是正プロセスへ接続する点に実務上の価値がある。",
      whyImportant: [
        "一般的な法務DDとの重複と相違を整理でき、サステナビリティDDを別建てで漫然と広げるのではなく調査目的・基準・範囲を設計しやすい",
        "DDで発見した人権・環境・サステナビリティ課題を取引契約上の手当てへ反映し、クロージング後のPMIへ引き継ぐという一連の流れを確認できる",
        "買収前に完全な調査が難しい事項を、買収後の追加調査、管理体制の統合、継続的なDDへつなぐ観点から、M&A法務とサステナビリティ担当の役割分担を検討しやすい"
      ],
      audience: ["M&A法務", "企業法務", "経営企画", "サステナビリティ担当", "PMI担当"],
      audienceReason: "サステナビリティDDの調査結果を、契約対応と買収後の管理・是正・継続DDへ切れ目なく引き継ぐ実務フローを設計するため。",
      categories: ["M&A", "危機管理・コンプライアンス", "会社法・ガバナンス"],
      relatedTopics: ["business-human-rights-dd", "ssbj-statutory-sustainability-disclosure"],
      relatedIssues: ["bhr-ma-dd", "bhr-dd-cycle"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-meti-bhr-practical-reference-2023", "source-ssbj-standards-current"],
      whatChanged: "整理変更なし／サステナビリティDDと法務DDの役割分担、契約上の対応、PMIへの引継ぎを具体化する実務解説を補完した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const additions = articles.filter((article) => !existingIds.has(article.id) && !existingUrls.has(normalizeUrl(article.url)));
  if (additions.length) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions);
  }
})();

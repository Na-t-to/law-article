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
      id: "article-businesslawyers-oehashi-security-assignment-practice-20250623",
      title: "譲渡担保契約及び所有権留保契約に関する法律の概要と実務対応",
      publisher: "BUSINESS LAWYERS",
      author: "佐藤俊・辻田俊幸（弁護士法人大江橋法律事務所）",
      publishedAt: "2025-06-23",
      collectedAt: "2026-09-19",
      url: "https://www.businesslawyers.jp/articles/1469",
      sourceType: "secondary",
      sourceLabel: "実務解説・大江橋法律事務所／譲渡担保法の概要と実務対応",
      status: "adopted",
      summary: "2025年6月に公布された譲渡担保法・整備法を、譲渡担保権の効力、対抗要件・優劣、実行、倒産手続、所有権留保、登記制度まで横断して解説する実務記事。特に、集合動産では設定者の処分権限の範囲を、集合債権では設定者の取立権限とその喪失事由を契約に明記する重要性を示し、私的実行や倒産開始後の新規加入財産の扱いまで契約・回収実務へ落としている。",
      whyImportant: [
        "法改正の項目ごとに実務影響度を示し、施行前に優先して点検すべき契約・登記・回収手順を見分けやすい",
        "集合動産譲渡担保では設定者の処分権限が原則として認められる一方、その範囲を契約で制限できるため、処分権限の条項設計が従来以上に重要になることを具体化している",
        "集合債権譲渡担保では設定者の取立権限を契約で付与すること、実行通知や倒産開始による権限喪失、第三債務者への通知まで一連の運用として整理している",
        "占有改定劣後ルール、私的実行、倒産後の新規加入財産、所有権留保登記まで一つの記事で確認でき、一次資料と施行前の契約棚卸しをつなぐ実務解説として密度が高い"
      ],
      audience: ["企業法務", "金融・財務担当", "金融機関・ノンバンク", "債権管理・回収担当", "契約・取引管理担当"],
      audienceReason: "譲渡担保法の全体像を押さえつつ、集合動産・集合債権の契約条項、対抗要件、実行・倒産対応を施行前に具体的に見直す担当者に向くため。",
      categories: ["契約"],
      relatedTopics: ["security-assignment-retention-title"],
      relatedIssues: [
        "security-assignment-statutory-rules",
        "security-assignment-priority-preservation",
        "security-assignment-collection-authority",
        "security-assignment-enforcement-insolvency"
      ],
      primarySourceIds: ["source-moj-security-assignment-act-2025"],
      reformEventId: "security-assignment-retention-title-act-2025",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-moj-security-assignment-act-2025"],
      whatChanged: "テーマ補強／集合動産の処分権限と集合債権の取立権限を契約条項へ落とす論点を追加し、優先順位・実行・倒産対応まで横断する実務解説を採用"
    },
    {
      id: "article-mext-medical-research-ethics-guideline-20260828",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」の一部改正について",
      publisher: "文部科学省",
      author: "文部科学省・厚生労働省・経済産業省",
      publishedAt: "2026-08-28",
      collectedAt: "2026-09-19",
      url: "https://www.mext.go.jp/b_menu/houdou/mext_01679.html",
      sourceType: "primary",
      sourceLabel: "一次資料・生命・医学系研究倫理指針令和8年改正",
      status: "adopted",
      summary: "文部科学省・厚生労働省・経済産業省が2026年8月27日に告示した生命・医学系研究倫理指針の改正内容を示す公式資料。12月1日施行に向け、患者・市民参画、用語定義、IC・オプトアウト、仮名加工情報等と個人情報保護法の関係、既存試料・情報の利用・提供・外国提供、多機関共同研究の一括倫理審査、経過措置を整理している。",
      whyImportant: [
        "改正指針の施行日が2026年12月1日と確定し、研究機関・医療機関・企業が更新すべき手続の基準日を一次資料で確認できる",
        "従来の「文書IC」「口頭IC」「適切な同意」をICへ統一し、研究リスクに応じてIC又はオプトアウトを選ぶ構造へ整理したことを公式に示している",
        "仮名加工情報・匿名加工情報・個人関連情報を個人情報保護法の規定に則って扱う方向へ整理し、倫理指針独自の上乗せ規律と一般法の関係を見直している",
        "多機関共同研究の一括倫理審査を侵襲・介入研究で必須、その他で原則とし、審査運用にも直接影響する"
      ],
      audience: ["企業法務", "医療・ヘルスケア事業担当", "研究開発・臨床研究担当", "個人情報保護担当", "倫理審査委員会事務局"],
      audienceReason: "人を対象とする生命科学・医学系研究を実施・共同実施・データ提供する組織が、2026年12月1日までに研究・同意・倫理審査・データ提供手続を更新する基礎資料になるため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["medical-biological-research-ethics-2026"],
      relatedIssues: ["medical-research-ethics-ic-optout", "medical-research-ethics-pipa-alignment", "medical-research-ethics-multisite-review", "medical-research-ethics-transition"],
      primarySourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      reformEventId: "medical-biological-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／生命・医学系研究倫理指針の2026年改正を、IC・オプトアウト、個人情報保護法との役割分担、多機関共同研究の一括審査、12月1日施行準備の棚として追加"
    },
    {
      id: "article-tmi-medical-research-ethics-guideline-20260901",
      title: "「人を対象とする生命科学・医学系研究に関する倫理指針」令和8年改正の公表",
      publisher: "TMI総合法律事務所",
      author: "溝端俊介",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-19",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18750.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・生命・医学系研究倫理指針改正の実務解説",
      status: "adopted",
      summary: "2026年改正のうち特に大きく変わるインフォームド・コンセント規律を、現行指針との比較から研究類型別に整理する実務解説。仮名加工情報・匿名加工情報・個人関連情報について個人情報保護法へ規律を寄せる点、ICとオプトアウトへの整理、既存試料・情報の二次利用・提供、提供のみを行う者、外国提供まで具体的に説明する。",
      whyImportant: [
        "公式資料の改正項目を列挙するだけでなく、現行指針の複雑な同意構造がなぜ問題となり、改正後に何を参照すればよいかを改正前後で比較している",
        "新規試料、既存試料、新規情報、既存情報、提供のみを行う者、提供を受ける側、外国提供まで、実務で迷いやすい場面を研究類型ごとに分解している",
        "「適切な手続を経て」の意味として、虚偽取得や本人が全く予期できない利用・提供を避けること、研究者の異動に伴う無断持出しへの注意まで、ガイダンス案を踏まえて運用へ落としている",
        "個人情報保護法だけを見て研究データ利用の可否を判断せず、倫理指針上の研究手続と並行して確認する必要があることを具体化している"
      ],
      audience: ["企業法務", "医療・ヘルスケア事業担当", "研究開発・臨床研究担当", "個人情報保護担当", "倫理審査委員会事務局"],
      audienceReason: "改正指針の条文構造を、研究計画・IC・オプトアウト・既存データ利用・提供実務へ具体的に置き換えて確認したい担当者に向くため。",
      categories: ["個人情報", "危機管理・コンプライアンス"],
      relatedTopics: ["medical-biological-research-ethics-2026"],
      relatedIssues: ["medical-research-ethics-ic-optout", "medical-research-ethics-pipa-alignment", "medical-research-ethics-transition"],
      primarySourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      reformEventId: "medical-biological-research-ethics-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mext-medical-research-ethics-guideline-20260827"],
      legacyReformInference: false,
      whatChanged: "参考解説追加／2026年改正のIC・オプトアウトと個人情報保護法への接続を研究類型別の運用へ落とす実務解説を追加"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

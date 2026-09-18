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
      id: "article-ppc-privacy-rulemaking-basic-1-2026",
      title: "個人情報の保護に関する法律等の一部を改正する法律 政令・規則の整備に向けた基本的な考え方（案）について①",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-16",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・政令／規則整備検討資料",
      status: "adopted",
      summary: "2026年改正個人情報保護法の施行に向けた下位ルール整備の第1弾。本人同意が不要となる場合、16歳未満の子供の個人情報、顔特徴データ等の特定生体個人情報について、政令・委員会規則・ガイドラインで具体化する際の基本的な考え方と論点を示す。家族によるホテル予約や3-Dセキュアを例に同意不要例外を検討し、特定生体個人情報については現段階で顔特徴データを対象候補とし、カメラ等の周辺での分かりやすい周知を検討している。",
      whyImportant: [
        "2026年8月の下位ルール全体像から一段進み、本人同意不要例外・子供・生体情報について具体的な規則候補と判断軸が示された",
        "契約履行のため『必要やむを得ない』場合について、必要性に加えて他の手段では契約目的を達成できない場合に限定するという解釈が明示され、同意取得フローの見直しに直結する",
        "特定生体個人情報の対象候補と周知方法の方向が具体化され、顔認証・AIカメラ等の表示、本人請求、運用設計を施行前に準備できる"
      ],
      audience: ["企業法務", "プライバシー・個人情報担当", "情報セキュリティ", "プロダクト・EC担当", "AI・データ活用担当"],
      audienceReason: "改正法の施行前に、同意取得・第三者提供、子供向けサービス、顔認証・カメラのデータフローと画面・掲示・社内判断基準を具体化するため。",
      categories: ["個人情報", "AI・デジタル", "情報セキュリティ"],
      relatedTopics: ["personal-information-protection-2026-amendment"],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"],
      primarySourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-rulemaking-basic-1-2026"],
      reformEventId: "privacy-law-2026-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-privacy-law-2026-amendment", "source-ppc-privacy-rulemaking-basic-1-2026"],
      legacyReformInference: false,
      whatChanged: "施行準備を具体化／2026年改正法について、本人同意不要例外、16歳未満の子供、特定生体個人情報の政令・規則整備に向けた判断軸と具体例が示された。改正法自体は成立・公布済みだが未施行で、下位ルールはなお検討段階。"
    },
    {
      id: "article-fsa-public-fund-liquidity-guideline-2026",
      title: "『金融商品取引業者等向けの総合的な監督指針』の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.fsa.go.jp/news/r8/shouken/20260916/20260916.html",
      sourceType: "primary",
      sourceLabel: "一次資料・監督指針改正／パブリックコメント結果",
      status: "adopted",
      summary: "IOSCOの2025年勧告・実施ガイダンスを踏まえ、公募投資信託の流動性リスク管理について投資運用業者に適切な対応を促すため、金融庁が監督指針改正を最終化した資料。運用財産の流動性管理の評価項目として、保有資産の流動性に応じた解約条件や変動型の信託財産留保額など、公募投資信託の流動性に関する合理的な措置が追加され、2027年10月1日から適用される。",
      whyImportant: [
        "案ではなく最終化された監督指針改正であり、2027年10月1日という適用日まで確定している",
        "保有資産の流動性と解約条件を対応させ、変動型の信託財産留保額を含む合理的措置を検討することが、投資運用業者に対する監督上の評価項目として明示された",
        "パブリックコメントを受けて適用範囲が『公募投資信託』であることが明示され、私募を含む全運用財産への一律ルールと誤読しにくくなった"
      ],
      audience: ["資産運用会社の法務・コンプライアンス", "投資運用・商品企画", "リスク管理", "投資信託業務担当"],
      audienceReason: "公募投資信託の商品設計・解約条件・信託財産留保額・流動性管理態勢を、2027年10月の監督指針適用までに点検するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["public-investment-trust-liquidity-risk"],
      relatedIssues: ["fund-liquidity-supervisory-guideline", "fund-liquidity-redemption-lmt"],
      primarySourceIds: ["source-fsa-public-fund-liquidity-guideline-2026"],
      reformEventId: "public-investment-trust-liquidity-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-public-fund-liquidity-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "最終化・適用日確定／公募投資信託の流動性について、資産の流動性に応じた解約条件や変動型の信託財産留保額等の合理的措置を監督上の評価項目に追加し、2027年10月1日から適用することが確定した。"
    },
    {
      id: "article-pwc-fund-liquidity-regulation-2025",
      title: "ファンドニュース（148）流動性規制の動向",
      publisher: "PwC Japan有限責任監査法人",
      author: "若本裕介",
      publishedAt: "2025-08-06",
      collectedAt: "2026-09-17",
      url: "https://www.pwc.com/jp/ja/knowledge/column/fund-news/fund-news148-liquidity-regulation.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・資産運用／流動性規制",
      status: "adopted",
      summary: "FSB・IOSCOの流動性リスク管理改革を整理し、日本の公募投資信託実務への影響を考察する解説。スイング・プライシング、デュアル・プライシング、希釈化防止賦課金等のLMT、資産・ポートフォリオの流動性分類、ガバナンス・ストレステストを整理したうえで、日本で一般的な固定型の信託財産留保額が国際基準上の希釈化防止LMTとして十分か、変動型の導入や実務慣行・システムの見直しが必要になり得る点を示す。",
      whyImportant: [
        "監督指針の短い文言だけでは分からない、IOSCOが想定する希釈化防止LMTの類型と流動性コストの考え方を具体的に把握できる",
        "低流動性・非流動性資産を含むファンドでは、日次解約の可否、通知期間、LMTを資産の流動性と組み合わせて設計するという背景ロジックを理解できる",
        "日本で固定額が多い信託財産留保額について、変動型への移行や関連規制・実務慣行・システム対応が論点になり得ることを、国内実務に引き付けて整理している"
      ],
      audience: ["資産運用会社の法務・コンプライアンス", "投資運用・商品企画", "リスク管理", "ファンド管理・システム担当"],
      audienceReason: "2027年の監督指針適用を見据え、LMTの選択肢と資産流動性・解約条件・システム対応の関係を実務レベルで理解するため。",
      categories: ["金融商品取引・開示・IR", "危機管理・コンプライアンス"],
      relatedTopics: ["public-investment-trust-liquidity-risk"],
      relatedIssues: ["fund-liquidity-redemption-lmt"],
      primarySourceIds: ["source-fsa-iosco-fund-liquidity-2025", "source-fsa-public-fund-liquidity-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "実務解説を補完／IOSCOのLMT・カテゴリーアプローチと、日本の固定型信託財産留保額から変動型等への見直し可能性を、国内運用実務に接続する解説をバックフィルした。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
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
      id: "article-fsa-corporate-governance-code-2026",
      title: "コーポレートガバナンス・コード（2026年改訂版）の確定について",
      publisher: "金融庁・東京証券取引所",
      author: "金融庁・東京証券取引所",
      publishedAt: "2026-07-21",
      collectedAt: "2026-09-16",
      url: "https://www.fsa.go.jp/news/r7/singi/20260721.html",
      sourceType: "primary",
      sourceLabel: "一次資料／コーポレートガバナンス・コード2026年改訂",
      status: "adopted",
      summary: "金融庁と東京証券取引所が2026年7月21日に確定・公表したコーポレートガバナンス・コードの2026年改訂版。プリンシプルベース・アプローチとコンプライ・オア・エクスプレインの実質化、成長投資・経営資源配分、取締役会の機能強化、有価証券報告書の総会前開示などを中心にコード全体を再整理した。東京証券取引所は同日、改訂に係る有価証券上場規程の一部改正を施行している。",
      whyImportant: [
        "上場会社のガバナンス対応を、旧コードの補充原則ベースのチェックから2026年改訂後の原則・解釈指針へ切り替える基準点になる",
        "成長投資と経営資源配分、独立社外取締役・取締役会事務局、総会前開示という取締役会・法務・IRが共同で対応すべき論点を一体で確認できる",
        "2026年7月21日に施行済みであり、将来案ではなく現行の上場会社実務として対応状況を点検する必要がある"
      ],
      audience: ["上場会社法務", "取締役会事務局", "経営企画・財務", "IR・開示担当"],
      audienceReason: "2026年改訂後のコードを、取締役会運営、資本配分、開示、コーポレート・ガバナンス報告書へ落とし込むため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: [
        "cg-code-principles-interpretation-guidance",
        "cg-code-growth-investment-resource-allocation",
        "cg-code-board-function-independent-directors",
        "cg-code-annual-report-before-agm"
      ],
      primarySourceIds: [
        "source-fsa-corporate-governance-code-2026",
        "source-jpx-corporate-governance-code-2026",
        "source-jpx-corporate-governance-code-current"
      ],
      reformEventId: "corporate-governance-code-2026-revision",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jpx-corporate-governance-code-2026"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2026年7月21日に施行されたコーポレートガバナンス・コード改訂を、原則体系、成長投資・経営資源配分、取締役会機能、総会前開示の4論点で整理した。"
    },
    {
      id: "article-not-corporate-governance-code-2026",
      title: "2026年コーポレートガバナンス・コードの改訂",
      publisher: "長島・大野・常松法律事務所",
      author: "田勢華也子・加藤綾夏",
      publishedAt: "2026-08-27",
      collectedAt: "2026-09-16",
      url: "https://www.nagashima.com/publications/publication20260827-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説／2026年コーポレートガバナンス・コード改訂",
      status: "adopted",
      summary: "2026年改訂版コードの体系見直しと実務対応を、上場会社向けに具体化した解説。補充原則の廃止と解釈指針の位置付け、成長投資・経営資源配分の説明と検証、独立社外取締役・取締役会事務局の機能強化、有価証券報告書の総会前開示を、パブリックコメント回答や会社法制見直しとの関係まで含めて整理している。",
      whyImportant: [
        "解釈指針を新たなチェックリストとして機械的に運用しないという2026年改訂の狙いを、パブリックコメント回答も踏まえて実務的に説明している",
        "成長投資について、設備・研究開発・人的資本・知的財産・M&A等を含む資源配分と取締役会のPDCAへ落とし込んでいる",
        "独立社外取締役の数だけでなく、質・独立性、資料の事前共有、年間議題、審議時間、取締役会事務局の機能まで具体化している",
        "総会前の有価証券報告書開示を一律の法定期限と誤解せず、会社法上の事業報告等との重複や制度見直しを含めて準備できる"
      ],
      audience: ["上場会社法務", "取締役会事務局", "経営企画・財務", "IR・開示担当"],
      audienceReason: "最終コードの抽象的な原則を、取締役会の議題・情報提供・資源配分・開示工程へ具体化するため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-governance-code-2026"],
      relatedIssues: [
        "cg-code-principles-interpretation-guidance",
        "cg-code-growth-investment-resource-allocation",
        "cg-code-board-function-independent-directors",
        "cg-code-annual-report-before-agm"
      ],
      primarySourceIds: [
        "source-fsa-corporate-governance-code-2026",
        "source-jpx-corporate-governance-code-2026",
        "source-jpx-corporate-governance-code-current"
      ],
      reformEventId: "corporate-governance-code-2026-revision",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-jpx-corporate-governance-code-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／2026年改訂の趣旨を、解釈指針、成長投資、取締役会機能、総会前開示の実務へ落とし込む参考解説を追加。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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
      id: "article-moj-ebl-outline-20240909",
      title: "法制審議会第200回会議―商法（船荷証券等関係）等の改正に関する要綱",
      publisher: "法務省",
      author: "法務省・法制審議会",
      publishedAt: "2024-09-09",
      collectedAt: "2026-09-20",
      url: "https://www.moj.go.jp/shingi1/shingi03500044_00004.html",
      sourceType: "primary",
      sourceLabel: "一次資料・法務省／電子船荷証券の改正要綱",
      status: "adopted",
      summary: "法制審議会が2024年9月9日に、船荷証券等の電子化に関する要綱を全会一致で採択し、法務大臣へ答申した公式資料。法務省は、船荷証券等の交付が必要な取引について、電磁的記録の提供によりその交付に代えることができるようにする改正方針と説明している。2026年9月時点でも法案成立には至っていないため、現行法ではなく立法方針として扱う。",
      whyImportant: [
        "電子船荷証券法制について、中間試案ではなく法制審議会の最終要綱という立法準備上の到達点を確認できる",
        "紙の船荷証券の交付を電磁的記録の提供で代替するという改正の核心を一次資料から把握できる",
        "要綱答申と法案成立・施行を区別し、法改正情報の段階を過大評価しないための基準になる"
      ],
      audience: ["企業法務", "国際取引担当", "物流・海運担当", "貿易金融担当", "DX・システム担当"],
      audienceReason: "電子B/Lを導入・検討する際に、日本法の制度整備がどこまで進んでいるかを一次資料で押さえ、現行実務と将来法制を分けるため。",
      categories: ["契約", "国際取引", "AI・デジタル"],
      relatedTopics: ["electronic-bill-of-lading-trade-dx"],
      relatedIssues: ["ebl-legislative-status", "ebl-control-transfer-record", "ebl-paper-conversion-operational"],
      primarySourceIds: ["source-moj-ebl-outline-20240909"],
      reformEventId: "commercial-code-ebl-review-2024",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-ebl-outline-20240909"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／電子船荷証券に関する2024年法制審議会要綱を、成立前の商法見直しとして独立整理した。"
    },
    {
      id: "article-japan-pi-ebl-interim-20230421",
      title: "【コラム】『電子B/L法制の検討状況』―中間試案を踏まえて―",
      publisher: "日本船主責任相互保険組合（Japan P&I Club）",
      author: "山下和哉（弁護士法人東町法律事務所）",
      publishedAt: "2023-04-21",
      collectedAt: "2026-09-20",
      url: "https://www.piclub.or.jp/ja/news/37286",
      sourceType: "secondary",
      sourceLabel: "実務解説・弁護士／電子B/L中間試案・P&I実務",
      status: "adopted",
      summary: "2023年中間試案を基礎に、規約型eBLの法的限界、MLETRのsingularity・control・integrity、電子船荷証券記録の支配・移転、紙との転換、電子裏書、P&I保険上の留意点までを海運実務から解説する。最終要綱前の記事であるため、個別の選択肢は現行の確定ルールではなく、制度の背景と実務論点を理解するための資料として位置付ける。",
      whyImportant: [
        "eBLを単なる紙のPDF化ではなく、権利の唯一性・支配・移転・完全性を実現する仕組みとして理解できる",
        "規約型eBLでは参加者間の合意で運用していることや、第三者関係の法的不確実性という法制化前の実務課題を具体化している",
        "P&I保険、システム障害、紙との転換など、法改正資料だけでは薄い導入・運用上の論点まで確認できる"
      ],
      audience: ["企業法務", "国際取引担当", "海運・物流担当", "貿易金融担当", "保険・リスク管理"],
      audienceReason: "法制化前からeBLを使う場合の契約・システム・保険上の論点と、将来の法定eBLの設計思想をつなげて理解するため。",
      categories: ["契約", "国際取引", "AI・デジタル"],
      relatedTopics: ["electronic-bill-of-lading-trade-dx"],
      relatedIssues: ["ebl-control-transfer-record", "ebl-current-contractual-use", "ebl-paper-conversion-operational"],
      primarySourceIds: ["source-moj-ebl-interim-20230308", "source-moj-ebl-outline-20240909"],
      reformEventId: "commercial-code-ebl-review-2024",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-ebl-interim-20230308"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／電子B/Lの支配・移転・技術要件、規約型運用、P&I保険、紙との転換を中間試案段階から実務へ落とした。"
    },
    {
      id: "article-trade-dx-ebl-request-20260901",
      title: "船荷証券の電子化に向けた商法改正法案の早期提出・成立を三谷法務副大臣に要望",
      publisher: "一般社団法人日本貿易DX協会",
      author: "一般社団法人日本貿易DX協会",
      publishedAt: "2026-09-01",
      collectedAt: "2026-09-20",
      url: "https://www.trade-dx.or.jp/news/2026-09-01-bl-request",
      sourceType: "secondary",
      sourceLabel: "業界実務・日本貿易DX協会／電子B/L法制化の進捗",
      status: "adopted",
      summary: "2026年8月31日に法務副大臣へ提出した、船荷証券等の電子化に係る商法等改正法案の早期提出・成立要望。2024年9月の法制審議会答申から約2年が経過しても法案提出に至っていないこと、紙B/Lの到着遅延が近距離航路で貨物引取り・保証状対応等のコストを生むこと、eBL法制化が貿易DXの基盤になることを業界実務から示す。",
      whyImportant: [
        "2026年9月時点でも法案未提出であるという制度の現在地を、貿易実務側の最新の要望から確認できる",
        "紙B/L原本の到着遅延、貨物引取り、銀行・船会社との調整、保証状差入れという具体的なペーパーベース実務のコストを示している",
        "eBL法制化を単独の商法改正ではなく、貿易プラットフォームや企業間データ連携を含む貿易DXの基盤として捉えられる"
      ],
      audience: ["企業法務", "国際取引担当", "物流・海運担当", "貿易実務担当", "DX・システム担当"],
      audienceReason: "法制審議会答申後の現在地と、電子化の遅れが実務に与えるコストを確認し、制度対応の優先度を判断するため。",
      categories: ["契約", "国際取引", "AI・デジタル"],
      relatedTopics: ["electronic-bill-of-lading-trade-dx"],
      relatedIssues: ["ebl-legislative-status", "ebl-current-contractual-use"],
      primarySourceIds: ["source-moj-ebl-outline-20240909"],
      reformEventId: "commercial-code-ebl-review-2024",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-ebl-outline-20240909"],
      legacyReformInference: false,
      whatChanged: "制度進捗補強／2024年答申後も法案未提出である2026年9月の現在地と、紙B/Lが生む貿易実務上のコストを追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

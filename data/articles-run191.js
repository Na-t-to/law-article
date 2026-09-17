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

  const reformEventId = "privacy-law-2026-amendment";
  const amendmentSource = "source-privacy-law-2026-amendment";
  const rulesSource = "source-ppc-privacy-rules-basic-thinking-20260916";
  const safeguardsSource = "source-ppc-safeguards-guideline-review-20260916";

  const additions = [
    {
      id: "article-ppc-privacy-rules-basic-thinking-20260916",
      title: "2026年改正個人情報保護法 政令・規則の整備に向けた基本的な考え方（案）①",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-1.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・2026年改正個人情報保護法／政令・規則案の検討",
      status: "adopted",
      summary: "成立・公布済みの2026年改正個人情報保護法について、政令・委員会規則の整備に向けた最初の基本的な考え方（案）を示す資料。同意取得例外では『取得の状況からみて本人の意思に反しないため本人の権利利益を害しないことが明らか』な取扱いの具体化を検討し、16歳未満の子供では法定代理人の関与・違法行為の有無を問わない利用停止等・最善の利益への配慮を、顔特徴データ等では周知事項・利用停止等・オプトアウト提供除外の具体化を進める。資料自体は案であり、最終の政令・規則・ガイドラインではない。",
      whyImportant: [
        "7月の改正法公布後も未確定だった下位ルールについて、個人情報保護委員会が具体化の方向を初めて示した一次資料である",
        "同意取得例外、16歳未満の子供、顔特徴データ等について、企業がデータフロー・同意UI・年齢確認・カメラ掲示等の施行準備を始める際の論点を具体化できる",
        "成立済みの法律と、なお案段階の政令・規則・ガイドラインを分離して追跡できる"
      ],
      audience: ["企業法務", "個人情報・プライバシー担当", "AI・データ担当", "プロダクト・UX担当", "セキュリティ担当"],
      audienceReason: "2026年改正法の施行準備について、下位ルールで具体化される可能性が高い事項と、まだ確定していない事項を一次資料で切り分けるため。",
      categories: ["個人情報", "AI・デジタル"],
      relatedTopics: ["personal-information-protection-2026-amendment"],
      relatedIssues: ["privacy-2026-consent-exceptions", "privacy-2026-children", "privacy-2026-biometric"],
      primarySourceIds: [rulesSource],
      reformEventId,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [amendmentSource],
      legacyReformInference: false,
      whatChanged: "2026年改正法の下位ルールについて、同意取得例外・16歳未満・顔特徴データ等の具体化方向が9月16日の基本的な考え方（案）で示されたため、未確定部分を一段具体化した。"
    },
    {
      id: "article-ppc-safeguards-guideline-review-20260916",
      title: "個人情報保護法ガイドラインの安全管理措置『手法の例示』追加等の検討",
      publisher: "個人情報保護委員会",
      author: "個人情報保護委員会事務局",
      publishedAt: "2026-09-16",
      collectedAt: "2026-09-17",
      url: "https://www.ppc.go.jp/files/pdf/260916_shiryou-2.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・安全管理措置ガイドライン見直し",
      status: "adopted",
      summary: "個人情報保護法ガイドライン（通則編）別添の安全管理措置について、2016年以来の技術環境変化を踏まえ、クラウドサービス、MFA、ゼロトラスト、特権アカウントの最小化、ランサムウェア等の横展開を防ぐ停止・隔離・アカウント無効化などを『手法の例示』として追加・整理する検討資料。法令上『講じなければならない措置』と、それを実現する例示との対応関係も明確化する方向を示す。現時点では検討案で、現在の法的義務を直ちに置き換えるものではない。",
      whyImportant: [
        "安全管理措置の例示を、クラウド・MFA・ゼロトラスト・ランサムウェア等の現在の脅威と運用へ更新する具体的な検討方向を一次資料で確認できる",
        "ガイドライン上の法的義務と、実装方法の例示を区別し直す方向が示され、セキュリティ基準の社内説明や監査で『例示＝一律必須』と誤読するリスクを下げられる",
        "委託先・クラウド・特権ID・インシデント封じ込めを含む安全管理措置の見直し計画を先回りして棚卸しできる"
      ],
      audience: ["個人情報・プライバシー担当", "情報セキュリティ担当", "企業法務", "内部監査", "IT・クラウド運用担当"],
      audienceReason: "安全管理措置の現行義務を維持しつつ、将来のガイドライン改訂で例示される可能性がある技術・運用を準備対象として整理するため。",
      categories: ["個人情報", "情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["privacy-enforcement-breach-response"],
      relatedIssues: ["privacy-safeguards-guideline-modernization-2026"],
      primarySourceIds: [safeguardsSource],
      legacyReformInference: false,
      whatChanged: "安全管理措置ガイドラインの例示について、クラウド・MFA・ゼロトラスト・特権ID・横展開対策を追加整理する検討が9月16日に始まったため、現行義務と将来の例示見直しを分離して追跡する論点を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

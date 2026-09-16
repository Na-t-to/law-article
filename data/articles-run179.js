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
      id: "article-moj-company-law-outline-round1-2026",
      title: "法制審議会会社法制（株式・株主総会等関係）部会第15回会議",
      publisher: "法務省",
      author: "法制審議会会社法制（株式・株主総会等関係）部会",
      publishedAt: "2026-06-24",
      collectedAt: "2026-09-16",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00339.html",
      sourceType: "primary",
      sourceLabel: "一次資料・要綱案取りまとめ検討",
      status: "adopted",
      summary: "中間試案へのパブリックコメントと参考人意見を踏まえ、会社法制見直しについて要綱案の取りまとめに向けた検討を開始した第15回会議。株式交付・現物出資、バーチャル株主総会・社債権者集会、実質株主確認制度について、中間試案と同様または修正した提案を審議している。現時点では要綱・法案・成立法ではない。",
      whyImportant: [
        "2026年3月の中間試案から、パブリックコメント後の要綱案取りまとめフェーズへ進んだことを一次資料で確認できる",
        "バーチャル株主総会や実質株主確認制度について、中間試案の選択肢がパブコメを受けて修正・具体化されている",
        "未成立の検討案を現行法と混同せず、どの論点が次段階へ残ったかを追う基準点になる"
      ],
      audience: ["企業法務", "株主総会担当", "IR・開示担当", "コーポレートガバナンス担当"],
      audienceReason: "次期会社法改正の検討が中間試案後にどう具体化しているかを追い、総会・株主管理の将来対応を早めに棚卸しするため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["companies-act-review-shareholders"],
      relatedIssues: ["companies-act-virtual-meetings", "companies-act-beneficial-shareholders"],
      primarySourceIds: ["source-moj-company-law-outline-round1-2026", "source-moj-company-law-interim-2026"],
      reformEventId: "companies-act-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-company-law-outline-round1-2026"],
      legacyReformInference: false,
      whatChanged: "中間試案後の段階更新／パブコメ・参考人意見を踏まえ、会社法制見直しが要綱案取りまとめに向けた検討へ進み、バーチャル総会・実質株主確認等の案が修正・具体化された。"
    },
    {
      id: "article-moj-company-law-outline-round3-2026",
      title: "法制審議会会社法制（株式・株主総会等関係）部会第17回会議",
      publisher: "法務省",
      author: "法制審議会会社法制（株式・株主総会等関係）部会",
      publishedAt: "2026-08-26",
      collectedAt: "2026-09-16",
      url: "https://www.moj.go.jp/shingi1/shingi04900001_00341.html",
      sourceType: "primary",
      sourceLabel: "一次資料・要綱案取りまとめ検討",
      status: "adopted",
      summary: "要綱案取りまとめに向けた第3回の検討。会社法316条2項の調査者制度、株主総会招集手続等の検査役申立権者、指名委員会等設置会社、責任限定契約、事業報告等と有価証券報告書の開示合理化を審議した。中間試案後の論点具体化が進んでいるが、なお検討段階である。",
      whyImportant: [
        "第15回から続く要綱案取りまとめフェーズが、企業統治・責任限定・開示合理化まで進んだことを確認できる",
        "会社法の事業報告等と金商法の有価証券報告書の重複整理が、総会前開示実務と接続する改正論点として引き続き検討されている",
        "要綱・法案成立前の資料であるため、現在の義務と将来案を分けて管理する基準点になる"
      ],
      audience: ["企業法務", "株主総会担当", "IR・開示担当", "コーポレートガバナンス担当"],
      audienceReason: "企業統治・役員責任・法定開示の将来変更について、要綱案取りまとめ段階の論点を現行実務と分けて追うため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["companies-act-review-shareholders", "agm-pre-disclosure-company-law-reform"],
      relatedIssues: ["companies-act-disclosure-rationalization", "agm-disclosure-rationalization"],
      primarySourceIds: ["source-moj-company-law-outline-round3-2026", "source-moj-company-law-interim-2026"],
      reformEventId: "companies-act-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-company-law-outline-round3-2026"],
      legacyReformInference: false,
      whatChanged: "検討範囲を更新／要綱案取りまとめに向けた検討が企業統治・責任限定・事業報告等と有報の開示合理化まで進み、中間試案後の改正論点がさらに具体化した。"
    },
    {
      id: "article-amt-company-law-postcomment-round1-2026",
      title: "「速報・詳解 会社法改正動向」第15回会議 速報",
      publisher: "商事法務 CODE",
      author: "野村直弘・浦地智暉（アンダーソン・毛利・友常法律事務所）",
      publishedAt: "2026-07-16",
      collectedAt: "2026-09-16",
      url: "https://code.shojihomu.jp/document/019f636bae5ee80f97ebec4c",
      sourceType: "secondary",
      sourceLabel: "法律事務所解説・会社法改正",
      status: "adopted",
      summary: "第15回会議の部会資料13について、中間試案から変更された項目をパブリックコメントとの関係まで含めて整理する実務解説。株式交付の対象拡張、バーチャル株主総会の通信障害セーフハーバーの文言修正、実質株主確認制度における議決権停止措置など、一次資料だけでは追いにくい差分を具体的に示す。",
      whyImportant: [
        "中間試案とパブコメ後の部会資料13の差分を、変更理由とともに確認できる",
        "バーチャル総会では通信障害対策を総会開始前の準備措置として捉える方向が明確化された点を実務的に説明している",
        "実質株主確認では会社側確認ルートにも議決権停止措置を加える案や、株主側通知義務違反の治癒ルールの差異まで整理している"
      ],
      audience: ["企業法務", "株主総会担当", "IR・株主管理", "コーポレートガバナンス担当"],
      audienceReason: "中間試案を読んだだけでは把握しにくいパブコメ後の修正点を、総会・株主管理の実務影響に即して確認するため。",
      categories: ["会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["companies-act-review-shareholders"],
      relatedIssues: ["companies-act-virtual-meetings", "companies-act-beneficial-shareholders"],
      primarySourceIds: ["source-moj-company-law-outline-round1-2026", "source-moj-company-law-interim-2026"],
      reformEventId: "companies-act-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-moj-company-law-outline-round1-2026"],
      legacyReformInference: false,
      whatChanged: "パブコメ後の修正点を補完／中間試案から部会資料13への差分を、バーチャル総会のセーフハーバーと実質株主確認制度を中心に実務解説で補った。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

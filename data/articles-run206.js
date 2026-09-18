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
      id: "article-mhlw-customer-harassment-guideline-20260226",
      title: "事業主が職場における顧客等の言動に起因する問題に関して雇用管理上講ずべき措置等についての指針",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-02-26",
      collectedAt: "2026-09-18",
      url: "https://www.mhlw.go.jp/content/11900000/001662584.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／カスタマーハラスメント防止指針",
      status: "adopted",
      summary: "改正労働施策総合推進法33条に基づき、カスタマーハラスメントの3要素、社会通念上許容される範囲を超える言動の典型例、事業主が講ずべき雇用管理上の措置を具体化した法定指針。正当な苦情・申入れはカスハラに当たらないことを明示し、方針・対処内容の周知、相談体制、迅速な事実確認・被害者配慮・再発防止、悪質事案への抑止措置等を定める。",
      whyImportant: [
        "2026年10月義務化への対応で、何をカスハラと判断し、何を事業主の必須措置として整備するかの中核一次資料である",
        "正当な苦情まで排除しない境界と、電話・SNS、取引先・施設利用者等も含む対象範囲を確認できる",
        "管理職への報告、複数人対応、録音・録画、対応終了、警察・本社・法務との連携など現場ルールの具体化に直接使える"
      ],
      audience: ["人事・労務", "法務・コンプライアンス", "顧客対応・コールセンター", "店舗・現場管理者", "危機管理"],
      audienceReason: "2026年10月1日の施行までに、定義・必須措置・現場対応を法定指針に沿って整備するため。",
      categories: ["労務・人事", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-2026"],
      relatedIssues: [
        "customer-harassment-definition-2026",
        "customer-harassment-employer-measures-2026",
        "customer-harassment-response-rules-2026"
      ],
      primarySourceIds: [
        "source-mhlw-customer-harassment-guideline-20260226",
        "source-mhlw-customer-harassment-law-20260723"
      ],
      reformEventId: "labor-policy-customer-harassment-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-customer-harassment-law-20260723"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／2026年10月義務化に向け、カスハラの定義と事業主の必須措置を法定指針から整理した。"
    },
    {
      id: "article-mhlw-pharmacist-duty-20260708",
      title: "薬剤師の調剤応需義務等について",
      publisher: "厚生労働省",
      author: "厚生労働省医薬局長",
      publishedAt: "2026-07-08",
      collectedAt: "2026-09-18",
      url: "https://www.mhlw.go.jp/content/001720004.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・厚生労働省／薬剤師の調剤応需義務とカスハラ",
      status: "adopted",
      summary: "薬剤師法21条の調剤応需義務について、従来の限定的な行政解釈を見直し、緊急性、時間帯、患者と薬局・薬剤師の信頼関係等を総合して調剤拒否の正当理由を判断する枠組みを示した通知。カスハラに該当してもそれだけで拒否を正当化せず、信頼関係が既に失われているかを別途検討し、調剤義務と薬機法上の販売・授与の可否も分けて扱う。",
      whyImportant: [
        "カスハラ対策の『毅然と対応する』という労務上の要請と、業種固有の応需義務を別レイヤーで考える必要性を一次資料で示す",
        "暴力・威嚇、暴言・人格否定、執拗な謝罪要求等の事例と、信頼関係喪失・緊急性等の判断要素を具体化している",
        "顧客対応の打切り・サービス拒否を社内マニュアル化する際に、業法上の義務を確認する必要があることを示す代表例になる"
      ],
      audience: ["薬局・医療法人の法務・コンプライアンス", "薬剤師・薬局管理者", "人事・労務", "顧客対応", "危機管理"],
      audienceReason: "カスハラ発生時の従業員保護と調剤応需義務・薬機法上の義務を両立させる判断基準を確認するため。",
      categories: ["労務・人事", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-2026"],
      relatedIssues: ["customer-harassment-service-duty-2026"],
      primarySourceIds: ["source-mhlw-pharmacist-dispensing-duty-20260708"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／カスハラ該当性と業種固有の応需義務・サービス拒否の可否を分けて考える論点を追加した。"
    },
    {
      id: "article-mhlw-portal-customer-harassment-rules-20260914",
      title: "カスハラへの対応ルールのポイント",
      publisher: "厚生労働省「あかるい職場応援団」",
      author: "原 昌登",
      publishedAt: "2026-09-14",
      collectedAt: "2026-09-18",
      url: "https://www.no-harassment.mhlw.go.jp/countermeasure/column_no-hara/c2609/",
      sourceType: "secondary",
      sourceLabel: "実務解説・厚生労働省ポータル／現場で機能するカスハラ対応ルール",
      status: "adopted",
      summary: "2026年10月1日の義務化を直前に、カスハラ防止指針が求める『対処の内容』を現場で使えるルールへ落とすポイントを解説する。管理職への報告、複数人対応、録音・録画、十分な説明後も要求が続く場合の対応終了、警察・本社・法務への連携を紹介し、長時間対応の目安などは曖昧語ではなく具体的に設定しつつ、重大な暴言等では目安時間を待つ必要がないことを示す。",
      whyImportant: [
        "施行直前の実務で詰まりやすい『毅然と対応する』を、誰が何をするかという対応権限・手順へ具体化している",
        "時間基準は法定の一律ルールではなく、現場で判断をそろえるための運用目安として設計するという重要な区別を示す",
        "基本方針を掲げるだけでなく、マニュアル・研修・エスカレーション設計まで必要になることを簡潔に把握できる"
      ],
      audience: ["人事・労務", "法務・コンプライアンス", "顧客対応・コールセンター", "店舗・現場管理者"],
      audienceReason: "指針上の抽象的な対処内容を、現場で迷わず使える具体的なルールへ落とすため。",
      categories: ["労務・人事", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-2026"],
      relatedIssues: ["customer-harassment-employer-measures-2026", "customer-harassment-response-rules-2026"],
      primarySourceIds: [
        "source-mhlw-customer-harassment-guideline-20260226",
        "source-mhlw-customer-harassment-law-20260723"
      ],
      reformEventId: "labor-policy-customer-harassment-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-customer-harassment-law-20260723"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／施行直前の実務解説として、対処ルールを具体的な権限・手順・判断目安へ落とす観点を追加した。"
    },
    {
      id: "article-tmi-customer-harassment-20260402",
      title: "【労働法ブログ】企業におけるカスタマーハラスメント対策について",
      publisher: "TMI総合法律事務所",
      author: "近藤圭介・松本梓・梶原大暉",
      publishedAt: "2026-04-02",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18180.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI／カスハラ措置義務とマニュアル・研修・安全配慮",
      status: "adopted",
      summary: "改正法とカスハラ防止指針の必須措置を整理した上で、各社の実態を反映したマニュアル、現場QA、ロールプレイ研修、相談・報告手順、事案データベース、複数人対応、メンタルヘルス配慮まで実装策を具体化する。NHKサービスセンター事件も取り上げ、迷惑電話の監視・転送・切断等の既存ルールが安全配慮義務の評価にどう関係したかを示す。",
      whyImportant: [
        "法定措置を規程整備だけでなく、マニュアル、研修、記録、複数人対応、メンタルヘルス支援まで運用へ落としている",
        "正当なクレームとカスハラの判断、警察・本社への報告手続、よくある質問など、企業ごとに埋めるべき項目が具体的である",
        "裁判例を通じ、実際に機能している対応ルール・エスカレーションが安全配慮義務の観点でも重要になることを示す"
      ],
      audience: ["人事・労務", "法務・コンプライアンス", "管理職", "顧客対応・コールセンター", "内部監査"],
      audienceReason: "2026年10月施行へ向け、法定措置を自社のマニュアル・研修・相談対応・安全配慮へ落とすため。",
      categories: ["労務・人事", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-2026"],
      relatedIssues: [
        "customer-harassment-definition-2026",
        "customer-harassment-employer-measures-2026",
        "customer-harassment-response-rules-2026"
      ],
      primarySourceIds: [
        "source-mhlw-customer-harassment-guideline-20260226",
        "source-mhlw-customer-harassment-law-20260723"
      ],
      reformEventId: "labor-policy-customer-harassment-2026",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-mhlw-customer-harassment-law-20260723"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／法定措置をマニュアル・研修・事案記録・複数人対応・安全配慮へ落とす実務解説を追加した。"
    },
    {
      id: "article-mhm-pharmacy-customer-harassment-20260910",
      title: "薬剤師の応需義務と改正労働施策総合推進法を踏まえた薬局におけるカスタマーハラスメント対策について",
      publisher: "森・濱田松本法律事務所外国法共同事業",
      author: "徳田安崇・一井梨緒",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-18",
      url: "https://org-www.morihamada.com/ja/insights/newsletters/145541",
      sourceType: "secondary",
      sourceLabel: "実務解説・森・濱田松本／薬局のカスハラと調剤応需義務",
      status: "adopted",
      summary: "2026年7月8日の厚生労働省通知と10月施行のカスハラ措置義務を横断し、薬局で顧客対応を打ち切れる場面を薬剤師法21条の調剤応需義務と薬機法上の販売・授与の枠組みに分けて整理する。カスハラ該当性だけでは調剤拒否を正当化せず、信頼関係喪失、緊急性、時間帯、調剤ミス誘発や他患者の安全等を考慮する必要があることを具体化している。",
      whyImportant: [
        "一般的なカスハラ対策を、独自の応需義務を負う薬局実務へ落とした高付加価値の業種別解説である",
        "従業員保護のための対応打切りと、薬剤師法上の調剤拒否、薬機法上の販売・授与拒否を別々に判断する必要性を明確にする",
        "『カスハラならサービス拒否できる』という過度な一般化を防ぎ、業法・緊急性・安全性を含む意思決定フローへ接続できる"
      ],
      audience: ["薬局・医療法人の法務・コンプライアンス", "薬剤師・薬局管理者", "人事・労務", "医療分野の危機管理"],
      audienceReason: "カスハラ防止措置と薬剤師の応需義務を同じ現場手順の中で矛盾なく設計するため。",
      categories: ["労務・人事", "危機管理・コンプライアンス"],
      relatedTopics: ["customer-harassment-2026"],
      relatedIssues: ["customer-harassment-employer-measures-2026", "customer-harassment-service-duty-2026"],
      primarySourceIds: [
        "source-mhlw-customer-harassment-guideline-20260226",
        "source-mhlw-pharmacist-dispensing-duty-20260708"
      ],
      legacyReformInference: false,
      whatChanged: "新規テーマ／カスハラ対策と業種固有の応需義務を別レイヤーで評価する実務解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

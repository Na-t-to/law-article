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
      id: "article-ipa-ransomware-lessons-20260908",
      title: "ランサムウェア被害から学ぶ教訓集 ～経営者のためのランサムウェア対策ハンドブック～",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "IPA セキュリティセンター",
      publishedAt: "2026-09-08",
      collectedAt: "2026-09-20",
      url: "https://www.ipa.go.jp/security/todokede/crack-virus/ransomware_lessons_learned.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／ランサムウェア被害の教訓集",
      status: "adopted",
      summary: "国内のランサムウェア被害組織へのヒアリング等を基礎に、侵入型ランサムウェアの特徴と、経営者・情報システム部門・事業部門が平時から準備すべき事項を整理したIPAのハンドブック。暗号化の発覚時点では攻撃が最終段階に達していることを前提に、迅速な経営判断、侵害調査、復旧、業務継続、バックアップ、ログ、対外説明等を具体化する。",
      whyImportant: [
        "実際の国内被害事例を基礎に、技術対策だけでなく経営判断、業務継続、復旧、広報・説明までを一つのインシデント対応として読める",
        "暗号化が見つかった時点より前に侵入・横展開・データ持出しが進んでいるという前提から、ログ、EDR、バックアップ、初動体制を点検できる",
        "法務・コンプライアンスが情シス任せにせず、証拠保全、当局・警察対応、取引先説明等を事前にプレイブック化する基礎になる"
      ],
      audience: ["企業法務", "情報セキュリティ担当", "危機管理・BCP担当", "経営企画", "内部監査"],
      audienceReason: "ランサムウェア対応を平時の準備、初動、復旧、対外説明まで横断して演習・点検するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "基礎資料追加／国内被害事例を基礎に、ランサムウェアの経営判断・初動・復旧・対外説明を整理したIPAの最新ハンドブックを追加した。"
    },
    {
      id: "article-miyake-ransomware-lessons-20260910",
      title: "その時、会社は動けますか？～IPA「ランサムウェア被害から学ぶ教訓集」から読み解く法務・コンプライアンス担当者のための実務対応",
      publisher: "三宅法律事務所",
      author: "弁護士法人三宅法律事務所",
      publishedAt: "2026-09-10",
      collectedAt: "2026-09-20",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E3%81%9D%E3%81%AE%E6%99%82%E3%80%81%E4%BC%9A%E7%A4%BE%E3%81%AF%E5%8B%95%E3%81%91%E3%81%BE%E3%81%99/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／ランサムウェア危機管理",
      status: "adopted",
      summary: "IPAの2026年ランサムウェア教訓集を基礎に、被害時の危機管理、個人情報保護、証拠保全、対外説明、取締役会・監査等を法務・コンプライアンスの実務へ接続する解説。情シスに警察・当局対応、取引先説明、調査、復旧が集中して復旧自体を妨げる事例も踏まえ、役割分担と経営判断を平時から設計する必要性を示す。",
      whyImportant: [
        "IPAの技術・危機管理上の教訓を、当局報告、本人・取引先通知、証拠保全、公表、取締役会報告という法務タスクへ変換している",
        "事故時に情シスへ業務を集中させるリスクを示し、法務・広報・経営・外部専門家の役割分担を平時から決める示唆がある",
        "身代金対応や『漏えい』と『漏えいのおそれ』等、対外説明で確定事実と調査中事項を分ける危機管理の視点を持てる"
      ],
      audience: ["企業法務", "コンプライアンス担当", "情報セキュリティ担当", "危機管理・広報", "取締役会事務局"],
      audienceReason: "ランサムウェア発生時に法務・情シス・広報・経営が同時並行で動くプレイブックを設計するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-ransomware-preparation-response"],
      primarySourceIds: ["source-ipa-ransomware-lessons-20260908"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／IPAのランサムウェア教訓を、証拠保全、当局・取引先対応、対外説明、取締役会判断へ落とした実務解説を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

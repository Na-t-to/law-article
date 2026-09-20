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
      id: "source-nco-critical-infra-framework-20260911",
      title: "重要インフラ統一基準・安全基準等策定ガイドライン（2026年）",
      type: "guideline",
      typeLabel: "一次資料・国家サイバー統括室／重要インフラ統一基準・ガイドライン",
      authority: "内閣官房 国家サイバー統括室",
      publishedAt: "2026-09-11",
      url: "https://www.cyber.go.jp/policy/group/infra/policy.html",
      importance: "高",
      whyImportant: "2026年7月31日決定の重要インフラ統一基準と、9月11日策定の安全基準等策定ガイドラインの公式導線。両者が2026年10月1日施行予定であること、分野横断の統一基準、経営関与、サプライチェーン、レジリエンス等の制度上の位置付けを確認できる。",
      topics: ["cybersecurity-incident-response-critical-infrastructure"]
    },
    {
      id: "source-fsa-cyber-common-reporting-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      type: "guideline",
      typeLabel: "一次資料・金融庁／サイバー攻撃報告共通様式への移行",
      authority: "金融庁",
      publishedAt: "2026-09-18",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      importance: "高",
      whyImportant: "DDoS・ランサムウェアに加えて『その他サイバー攻撃等事案共通様式』を整備した関係省庁申合せを受け、銀行・保険・金融商品取引業者・資金移動業者・暗号資産交換業者等の監督指針等を共通様式へ移行し、2026年10月1日から適用する最終公表。",
      topics: ["cybersecurity-incident-response-critical-infrastructure"]
    },
    {
      id: "source-ipa-ransomware-lessons-20260908",
      title: "ランサムウェア被害から学ぶ教訓集 ～経営者のためのランサムウェア対策ハンドブック～",
      type: "report",
      typeLabel: "一次資料・IPA／ランサムウェア被害の教訓集",
      authority: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-09-08",
      url: "https://www.ipa.go.jp/security/todokede/crack-virus/ransomware_lessons_learned.html",
      importance: "高",
      whyImportant: "国内の被害組織へのヒアリング等を基礎に、ランサムウェアの侵入・二重脅迫、経営判断、初動、復旧、バックアップ、ログ、対外説明等を具体的に整理した実務基礎資料。技術対策と危機管理・法務対応を接続する材料となる。",
      topics: ["cybersecurity-incident-response-critical-infrastructure"]
    }
  ];

  const existing = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url)));
  if (fresh.length) window.SOURCE_DATA = existing.concat(fresh);
})();

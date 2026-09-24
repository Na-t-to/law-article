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
      id: "article-businesslawyers-miura-jsox-qa-20231113",
      title: "第22回 2023年11月に押さえておくべき企業法務の最新動向",
      publisher: "BUSINESS LAWYERS／三浦法律事務所",
      author: "木内 敬（内部統制報告制度項目）",
      publishedAt: "2023-11-13",
      collectedAt: "2026-09-24",
      url: "https://www.businesslawyers.jp/articles/1339",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／J-SOX Q&A・事例集改訂",
      status: "adopted",
      summary: "2023年8月31日の金融庁『内部統制報告制度に関するQ&A』『事例集』改訂を企業法務向けに整理した解説。評価範囲について従来の『連結売上高のおおむね3分の2』を固定的に適用するのではなく、総資産や税引前利益等の指標も含めて財務報告への影響から判断する考え方、内部統制報告書の例示削減、重要勘定として売上・売掛金・棚卸資産を機械的に扱わない方向を具体的に説明する。",
      whyImportant: [
        "改訂基準の抽象的な『リスクベース』を、従来実務で固定化しやすかった2/3基準・3勘定の扱いがどう変わったかというレビュー作業へ落としている",
        "内部統制報告書の記載例が削られたことを『自由化』と短絡せず、投資家との建設的な対話に資する開示という目的から自社の説明を組み立てる必要性を確認できる",
        "法務・経理・内部監査が、評価範囲の根拠を過年度踏襲ではなく当年度のリスクから説明できるかを点検する際の入口になる"
      ],
      audience: ["上場会社法務", "経理・財務", "内部監査", "内部統制担当", "監査役等・取締役会事務局"],
      audienceReason: "評価範囲の選定基準や内部統制報告書の記載を、改訂Q&A・事例集に沿って過年度踏襲からリスクベースへ見直すため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-evaluation-scope", "jsox-report-deficiency-correction"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630",
        "source-fsa-jsox-qa-casebook-20230831"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "新テーマ追加／2023年J-SOX改訂を、評価範囲の固定的な2/3基準・3勘定からリスクベースの判断へ移す実務として整理した。"
    },
    {
      id: "article-pwc-jsox-revision-points-20231206",
      title: "J-SOX基準等改訂ポイントの解説",
      publisher: "PwC Japanグループ",
      author: "白髭 英一、平井 雄二",
      publishedAt: "2023-12-06",
      collectedAt: "2026-09-24",
      url: "https://www.pwc.com/jp/ja/knowledge/prmagazine/pwcs-view/202311/47-01.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・PwC／J-SOX基準・実施基準改訂",
      status: "adopted",
      summary: "2023年のJ-SOX基準・実施基準改訂を、内部統制の基本的枠組みと評価・報告の双方から詳細に整理する解説。不正リスク、経営者による内部統制の無効化、IT委託・サイバーリスク、3線モデル、評価範囲のリスクベース化、IT統制の評価頻度、内部統制報告書の判断事由・重要な不備の是正状況までを一つの実装マップとして示している。",
      whyImportant: [
        "評価範囲だけでなく、不正・経営者による無効化・IT・ガバナンスという改訂の全体像を、企業の内部統制担当が何を見直すかという粒度で追える",
        "IT統制の評価について特定年数を機械的に当てはめず、IT環境の変化から評価頻度を判断する点を明確にし、クラウド・委託・サイバー対応へ接続できる",
        "内部統制報告書で重要な事業拠点の指標・割合、重要勘定、個別追加範囲の判断事由まで説明する必要性を、実務上の記載事項として整理している"
      ],
      audience: ["内部統制担当", "経理・財務", "内部監査", "情報システム・IT統制担当", "監査役等・取締役会事務局"],
      audienceReason: "2024年4月適用の改訂を、評価範囲、報告書、IT統制、不正リスク、ガバナンスの横断的な対応計画へ落とすため。",
      categories: ["金融商品取引・開示・IR", "会社法・ガバナンス", "危機管理・コンプライアンス", "個人情報・AI・情報セキュリティ"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-evaluation-scope", "jsox-report-deficiency-correction", "jsox-fraud-override-it"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "新テーマ補強／2023年J-SOX改訂を、評価範囲・報告だけでなく不正、無効化、IT、3線モデルまで横断して実装できる資料を追加した。"
    },
    {
      id: "article-ey-jsox-fraud-risk-20240612",
      title: "改訂内部統制基準適用を契機に、不正リスク対応の観点から今企業がすべきこと 第2回：重要な不正リスクの特定と現状評価並びに継続的な評価体制の整備",
      publisher: "EY Japan",
      author: "荒張 健",
      publishedAt: "2024-06-12",
      collectedAt: "2026-09-24",
      url: "https://www.ey.com/ja_jp/insights/forensic-integrity-services/identification-of-significant-fraud-risks-assessment-of-the-current-situation-and-establishment-of-a-continuous-evaluation-system",
      sourceType: "secondary",
      sourceLabel: "実務解説・EY／J-SOX改訂後の不正リスク評価",
      status: "adopted",
      summary: "改訂J-SOXの適用開始後に、不正リスクの考慮と内部統制の無効化への対応を継続的なリスク評価プロセスへ落とす解説。全ての不正リスクへ一律対応するのではなく、自社・同業他社の不正事例、事業環境変化、不正のトライアングル等から重要な不正リスクを特定し、既存統制の十分性と残存リスクを評価し、環境変化に応じて統制を更新する流れを示す。",
      whyImportant: [
        "基準が要求する『不正リスクの考慮』を、リスクシナリオの設定、現状統制の評価、残存リスクへの追加対応という継続プロセスへ具体化している",
        "過去の自社不正だけでなく同業他社の事例や事業環境変化まで入力にし、内部統制が一度設計したまま形骸化するのを防ぐ観点を提供する",
        "法務・内部監査・経理・経営が、不正リスクへの対応の合理性を後から説明できる証跡設計を考える材料になる"
      ],
      audience: ["内部監査", "内部統制担当", "コンプライアンス", "経理・財務", "経営企画・リスク管理"],
      audienceReason: "改訂基準の不正リスク・内部統制無効化対応を、重要リスクの特定から継続的な見直しまで社内プロセスへ落とすため。",
      categories: ["危機管理・コンプライアンス", "金融商品取引・開示・IR", "会社法・ガバナンス"],
      relatedTopics: ["j-sox-internal-control-reporting"],
      relatedIssues: ["jsox-fraud-override-it"],
      primarySourceIds: [
        "source-fsa-jsox-standards-20230407",
        "source-fsa-jsox-ordinance-guideline-20230630"
      ],
      reformEventId: "jsox-2023-internal-control-revision",
      reformStageAtPublication: "effective",
      reformStageSourceIds: ["source-fsa-jsox-ordinance-guideline-20230630"],
      legacyReformInference: false,
      whatChanged: "バックフィル／改訂J-SOXの不正リスク・内部統制無効化対応を、重要リスクの特定、統制評価、残存リスク対応、継続的見直しの運用へ落とす実務解説を追加した。"
    }
  ];
  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

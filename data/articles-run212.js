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
      id: "article-nco-critical-infrastructure-safety-guideline-20260911",
      title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
      publisher: "国家サイバー統括室",
      author: "国家サイバー統括室",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-19",
      url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・国家サイバー統括室／重要インフラ安全基準等策定ガイドライン確定版",
      status: "adopted",
      summary: "重要インフラ所管省庁等が分野別の安全基準等を策定・改定する際に参照するガイドラインの確定版。2026年9月11日に策定され、7月31日決定の重要インフラ統一基準とともに10月1日施行予定。8月公表の案段階を終えたため、企業側の追跡対象は最終版そのものから各所管省庁・業界団体の安全基準等への具体的反映へ移る。",
      whyImportant: [
        "既存テーマで『最終版待ち』としていた資料が確定し、2026年10月1日の施行準備を確定資料ベースへ更新できる",
        "重要インフラ統一基準と、各分野で具体化される安全基準等との接続点を確認できる",
        "重要インフラ事業者だけでなく、ITベンダー・クラウド・SOC等が顧客要求や契約条件の変化を追う際の基準点になる"
      ],
      audience: ["重要インフラ事業者の法務・コンプライアンス", "CISO・情報セキュリティ", "IT調達・ベンダー管理", "クラウド・SOC・SIer等の提供事業者"],
      audienceReason: "2026年10月1日の施行に向け、分野別安全基準等の改定を追跡し、自社規程・リスク管理・委託先管理へ反映するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
      primarySourceIds: ["source-nco-critical-infrastructure-safety-guideline-20260911"],
      reformEventId: "critical-infrastructure-safety-guideline-2026",
      reformStageAtPublication: "finalized_pending",
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-nco-critical-infrastructure-safety-guideline-20260911"],
      legacyReformInference: false,
      whatChanged: "テーマ・法改正情報更新／案段階だった重要インフラ安全基準等策定ガイドラインが2026年9月11日に確定し、10月1日施行予定となった。"
    },
    {
      id: "article-nco-cyber-common-reporting-20260915",
      title: "サイバー攻撃時の報告様式の統一について（DDoS攻撃、ランサムウェア事案、その他サイバー攻撃等）",
      publisher: "国家サイバー統括室",
      author: "国家サイバー統括室",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-19",
      url: "https://www.cyber.go.jp/policy/group/cyber/policy.html",
      sourceType: "primary",
      sourceLabel: "一次資料・国家サイバー統括室／サイバー攻撃被害報告の共通様式",
      status: "adopted",
      summary: "サイバー攻撃による被害時の報告負担軽減と政府対応の迅速化を目的とする関係省庁の報告様式共通化。2026年9月15日に被害報告一元化申合せとDDoS・ランサムウェア共通様式が改定され、新たに『その他サイバー攻撃等事案共通様式』が制定された。対象手続一覧に加え、警察相談や所管省庁から共通様式での報告を求められた場合にも利用できる。",
      whyImportant: [
        "DDoS・ランサムウェア以外のサイバー攻撃についても共通様式が整備され、事故時の情報収集項目を横断的に設計しやすくなった",
        "同じ事故について複数の行政機関・警察へ報告する実務で、報告票を制度ごとに一から作る負担を下げる基盤になる",
        "委託先・SOC・クラウドから受け取る初動情報を、共通様式へ転記できる粒度で契約・運用へ落とす検討材料になる"
      ],
      audience: ["企業法務・コンプライアンス", "CISO・CSIRT", "危機管理", "重要インフラ事業者", "ITベンダー・SOC・クラウド事業者"],
      audienceReason: "サイバー事故時の報告先・様式・初動情報の収集を一本化し、委託先からの情報取得まで含めた報告フローを設計するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure", "cyber-supply-chain"],
      relatedIssues: ["cyber-countermeasures-reporting", "cyber-incident-chain"],
      primarySourceIds: ["source-nco-cyber-common-reporting-20260915"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／2026年9月15日にサイバー攻撃被害報告の共通様式が拡充され、『その他サイバー攻撃等事案共通様式』が新設された。"
    },
    {
      id: "article-fsa-cyber-common-reporting-guidelines-20260918",
      title: "「主要行等向けの総合的な監督指針」等の一部改正（案）に対するパブリックコメントの結果等の公表について",
      publisher: "金融庁",
      author: "金融庁",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.fsa.go.jp/news/r8/sonota/20260918/20260918.html",
      sourceType: "primary",
      sourceLabel: "一次資料・金融庁／サイバー事案報告の共通様式移行・監督指針等改正",
      status: "adopted",
      summary: "主要行、地域金融機関、保険会社、金融商品取引業者、貸金業者、資金移動業者、暗号資産交換業者等の監督指針・事務ガイドラインについて、システム障害・サイバーセキュリティ事案の報告様式を関係省庁の共通様式へ移行する確定改正。2026年9月15日の共通様式拡充を受け、9月18日にパブリックコメント結果と改正内容が公表され、10月1日から適用される。",
      whyImportant: [
        "金融分野の幅広い業態で、サイバー事案の監督当局向け報告実務が2026年10月1日から共通様式ベースへ切り替わる",
        "既存の社内報告票・当局報告手順・システム障害対応手順を10月1日までに改訂すべき具体的なトリガーになる",
        "NCOの共通様式と所管当局の監督指針を別資料として追いながら、実務上は一つの報告フローへ接続する必要があることが分かる"
      ],
      audience: ["金融機関の法務・コンプライアンス", "CISO・CSIRT", "システムリスク管理", "金融商品取引業者・決済・暗号資産事業者"],
      audienceReason: "2026年10月1日からの新しいサイバー事案報告様式に合わせ、当局報告の社内手順・帳票・初動情報収集を更新するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "金融商品取引・開示・IR"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-countermeasures-reporting"],
      primarySourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918", "source-nco-cyber-common-reporting-20260915"],
      reformEventId: "fsa-cyber-reporting-supervisory-guidelines-2026",
      reformStageAtPublication: "finalized_pending",
      reformEffectiveDates: ["2026-10-01"],
      reformEffectiveDateSourceIds: ["source-fsa-cyber-common-reporting-guidelines-20260918"],
      legacyReformInference: false,
      whatChanged: "法改正情報更新／金融庁の監督指針等でサイバーセキュリティ事案の報告様式を関係省庁共通様式へ移行し、2026年10月1日から適用することが確定した。"
    },
    {
      id: "article-amt-critical-infrastructure-unified-standard-20260904",
      title: "【サイバー＆AIセキュリティ】サイバーセキュリティ戦略本部、「重要インフラのサイバーセキュリティ対策のための統一基準」等を決定",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "清水 亘／石川 雅人",
      publishedAt: "2026-09-04",
      collectedAt: "2026-09-19",
      url: "https://www.amt-law.com/insights/newsletters/ddrlc98_p/",
      sourceType: "secondary",
      sourceLabel: "実務解説・法律事務所／重要インフラ統一基準・行動計画・サイバーセキュリティ2026",
      status: "adopted",
      summary: "2026年7月31日に決定された重要インフラ統一基準と行動計画改定について、作成背景、適用範囲、安全基準等に規定されるべき事項を整理し、同時期の『サイバーセキュリティ2026』、Project YATA-Shield、脅威ハンティング方針まで接続して読む実務解説。統一基準を単独のチェックリストとしてではなく、重要インフラのガバナンス・リスク管理・政府施策の全体像の中で位置付けられる。",
      whyImportant: [
        "一次資料だけでは分散している統一基準、行動計画、年度施策、脅威ハンティング方針の関係を一つの実務地図として確認できる",
        "重要インフラ事業者に求められる対応を、適用範囲・安全基準等の整備・経営ガバナンスの観点から読み解ける",
        "2026年10月1日に向けて何を一次資料で追うべきかを整理する入口として使いやすい"
      ],
      audience: ["重要インフラ事業者の法務・コンプライアンス", "CISO・情報セキュリティ", "経営企画・リスク管理", "ITベンダー"],
      audienceReason: "統一基準と周辺政策を横断して把握し、自社のガバナンス・安全基準・リスク管理へ落とす論点を整理するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: ["cyber-countermeasures-critical-infrastructure"],
      relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
      primarySourceIds: ["source-nco-critical-infrastructure-unified-standard-2026"],
      reformEventId: "critical-infrastructure-unified-standard-2026",
      reformStageAtPublication: "finalized_pending",
      legacyReformInference: false,
      whatChanged: "整理変更なし／重要インフラ統一基準・行動計画・サイバーセキュリティ2026を横断して読む実務解説をバックフィル追加。"
    },
    {
      id: "article-noandt-cyber-supply-chain-reporting-202508",
      title: "サプライチェーンにおけるサイバーセキュリティリスク対応の近時の動向（3） ～DDoS・ランサムウェア攻撃におけるインシデント報告様式の統一化等～",
      publisher: "長島・大野・常松法律事務所",
      author: "工藤 靖",
      publishedAt: "2025-08",
      collectedAt: "2026-09-19",
      url: "https://www.noandt.com/wp-content/uploads/2025/08/compliance_no110.pdf",
      sourceType: "secondary",
      sourceLabel: "実務解説・法律事務所／サプライチェーンの再委託先管理・インシデント報告",
      status: "adopted",
      summary: "サプライチェーン型サイバー事故を題材に、再委託先等の管理、契約による情報取得・監査、DDoS・ランサムウェアの共通報告様式、個人データ漏えい報告との関係、委託元・委託先間の情報共有までを一連の実務として整理する解説。事故発生後に責任主体や報告情報を決めるのではなく、平時の契約・ガバナンスで役割を定める必要性が分かる。",
      whyImportant: [
        "再委託・再々委託を含む下位サプライチェーンの管理を、事前承諾・資料提出・監査・情報共有の契約設計へ落としている",
        "行政報告、個人情報漏えい報告、顧客への情報共有が並行する事故対応で、委託元・委託先の役割分担を事前に決める必要性を具体化している",
        "2026年9月に拡充された共通報告様式を読む際の実務的な土台として現在も参照価値が高い"
      ],
      audience: ["企業法務・コンプライアンス", "CISO・CSIRT", "IT調達・ベンダー管理", "クラウド・システム開発・保守の契約担当"],
      audienceReason: "委託先・再委託先を原因とするサイバー事故について、契約条項、情報取得、当局報告、顧客対応の役割分担を事前設計するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: ["cyber-supply-chain"],
      relatedIssues: ["cyber-contract", "cyber-incident-chain"],
      primarySourceIds: ["source-nco-cyber-common-reporting-20260915", "source-cyber-infra-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "整理変更なし／再委託先管理とインシデント報告・情報共有を契約実務へ落とした2025年の高品質解説をバックフィル追加。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

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

  const cyberTopic = "cyber-countermeasures-critical-infrastructure";
  const cyberEvent = "critical-infrastructure-unified-standard-2026";
  const cyberUnifiedSource = "source-nco-critical-infrastructure-unified-standard-2026";
  const cyberGuidelineSource = "source-nco-critical-infrastructure-safety-guideline-20260911";
  const bhrTopic = "business-human-rights-dd";

  const additions = [
    {
      id: "article-nco-critical-infrastructure-safety-guideline-20260911",
      title: "重要インフラのサイバーセキュリティに係る安全基準等策定ガイドライン",
      publisher: "国家サイバー統括室",
      author: "国家サイバー統括室",
      publishedAt: "2026-09-11",
      collectedAt: "2026-09-17",
      url: "https://www.cyber.go.jp/policy/group/infra/siryou/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・重要インフラ安全基準等策定ガイドライン確定版",
      status: "adopted",
      summary: "国家サイバー統括室が2026年9月11日に確定した、重要インフラ所管省庁や業界団体等が分野別の安全基準等を策定する際に参照するガイドライン。重要インフラ統一基準とともに2026年10月1日施行予定であり、8月5日の案・意見募集段階から最終化した。",
      whyImportant: [
        "既存テーマで未確定としていた安全基準等策定ガイドラインが確定し、施行準備の基準点が変わった",
        "統一基準の分野横断的な要求を、所管省庁・業界団体が分野別の安全基準等へ落とすための公式な参照枠組みを確認できる",
        "サイバー対処能力強化法の届出・報告義務と、重要インフラの安全基準等の整備を別制度として追える"
      ],
      audience: ["重要インフラ事業者", "企業法務", "情報セキュリティ担当", "CISO・リスク管理", "IT・調達担当"],
      audienceReason: "10月1日の施行前に、自社分野の安全基準等への反映と内部統制・委託管理への影響を確認するため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: [cyberTopic],
      relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
      primarySourceIds: [cyberGuidelineSource],
      reformEventId: cyberEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cyberGuidelineSource],
      legacyReformInference: false,
      whatChanged: "安全基準等策定ガイドラインを案段階から2026年9月11日の確定版へ更新し、10月1日施行予定の統一基準と一体で追跡できるようにした。"
    },
    {
      id: "article-miyake-critical-infrastructure-guideline-20260913",
      title: "重要インフラ・サイバーセキュリティ新ガイドライン2026～パブリックコメント結果を踏まえた『経営・法務・実務』の読み方",
      publisher: "三宅法律事務所",
      author: "渡邉雅之",
      publishedAt: "2026-09-13",
      collectedAt: "2026-09-17",
      url: "https://www.miyake.gr.jp/notice/%E3%80%90%E5%8B%95%E7%94%BB%E8%A7%A3%E8%AA%AC%E3%83%BB%E5%8B%95%E7%94%BB%E8%B3%87%E6%96%99%E3%80%91%E9%87%8D%E8%A6%81%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9%E3%83%BB%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC/",
      sourceType: "secondary",
      sourceLabel: "実務解説・三宅法律事務所／重要インフラ新ガイドライン",
      status: "adopted",
      summary: "9月11日の確定版とパブリックコメント結果を踏まえ、重要インフラのサイバーセキュリティをIT部門だけの課題ではなく、任務保証・経営リスク・取締役責任として読む実務解説。CISOの権限と取締役会、クラウド・委託先・サプライチェーン・IT/OTの一体管理、検知・対応・復旧を含むレジリエンス、委託契約のセキュリティ条項などへ落とし込む。",
      whyImportant: [
        "163頁規模のガイドラインを、経営・法務が確認すべき統制項目へ圧縮している",
        "クラウド・委託先・サプライチェーン・IT/OTを、契約とガバナンスの問題として具体化している",
        "完全防御だけでなく検知・対応・復旧を含むレジリエンスへ軸足を移す実務上の意味を説明している"
      ],
      audience: ["企業法務", "取締役・経営企画", "CISO・情報セキュリティ担当", "調達・IT担当", "重要インフラ事業者"],
      audienceReason: "最終ガイドラインを、取締役会・CISO・委託契約・サプライチェーン管理の具体的な確認事項へ落とすため。",
      categories: ["情報セキュリティ", "危機管理・コンプライアンス", "契約"],
      relatedTopics: [cyberTopic],
      relatedIssues: ["cyber-critical-infrastructure-unified-standard"],
      primarySourceIds: [cyberUnifiedSource, cyberGuidelineSource],
      reformEventId: cyberEvent,
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: [cyberGuidelineSource],
      legacyReformInference: false,
      whatChanged: "最終ガイドラインを経営・法務・契約実務へ落とす高付加価値の二次資料を追加した。"
    },
    {
      id: "article-nishimura-human-rights-crisis-management-20260917",
      title: "サステナビリティ経営の戦略法務第22回 人権問題に対する危機管理対応―国際人権基準を踏まえた実践的アプローチ―",
      publisher: "西村あさひ",
      author: "渡邉純子・衛藤葵・藤尾春香・石田愛子",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-17",
      url: "https://www.nishimura.com/ja/knowledge/newsletters/corporate_260917",
      sourceType: "secondary",
      sourceLabel: "実務解説・西村あさひ／人権問題の危機管理",
      status: "adopted",
      summary: "企業不祥事対応を国内法上の責任や通常のコンプライアンス判断だけで完結させず、国際人権基準を踏まえて人権問題として対応する実務解説。加害行為そのものに加え、被害申告後の対応の適切性、被害者救済、経営陣への情報共有なども危機管理の評価対象になることを示し、平時の人権DD・グリーバンスメカニズムと有事対応を接続する視点を補う。",
      whyImportant: [
        "既存テーマの人権DD・救済を、実際に人権問題が顕在化した後の危機管理へ接続できる",
        "国内法上の責任の有無だけでは不十分になり得る場面を示し、国際人権基準を危機対応の判断軸へ加える",
        "被害申告後の対応、被害者救済、経営陣への情報共有という、通常の質問票型DDでは拾いにくい実務論点を補完する"
      ],
      audience: ["企業法務", "コンプライアンス担当", "サステナビリティ・人権担当", "内部通報・調査担当", "経営企画"],
      audienceReason: "重大な人権リスクが顕在化した際に、法的責任確認だけでなく救済・経営報告・ステークホルダー対応まで含む危機管理を設計するため。",
      categories: ["危機管理・コンプライアンス", "国際取引", "労務", "M&A"],
      relatedTopics: [bhrTopic],
      relatedIssues: ["bhr-crisis-response", "bhr-remedy-grievance", "bhr-dd-cycle"],
      primarySourceIds: ["source-meti-bhr-guideline-2022", "source-mofa-bhr-nap-2025"],
      legacyReformInference: false,
      whatChanged: "既存の人権DDテーマに、人権問題が顕在化した後の危機管理・被害者救済・経営報告という有事対応の論点を補完した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

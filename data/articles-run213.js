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
      id: "article-cfa-child-sexual-violence-qa-revision-20260918",
      title: "こども性暴力防止法に関するQ&Aの改訂について（2026年9月18日）",
      publisher: "こども家庭庁",
      author: "こども家庭庁支援局",
      publishedAt: "2026-09-18",
      collectedAt: "2026-09-19",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/80127231-8582-476e-a6e7-9347e725ed96/bd3ee897/20260918_policies_child-safety_efforts_koseibouhou_90.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料・こども家庭庁／こども性暴力防止法Q&A改訂通知",
      status: "adopted",
      summary: "2026年9月2日の施行ガイドライン改訂等を踏まえ、こども性暴力防止法Q&Aへ基礎編・応用編の新規設問を追加し、既存設問も更新したことを周知する通知。法律施行まで約3か月の段階で、事業者からの照会を反映した最新Q&Aを確認すべきことが明確になった。",
      whyImportant: [
        "施行直前期の実務照会を反映してQ&Aが追加・更新されており、古い解説だけで運用を固定するリスクを避けられる",
        "2026年9月2日のガイドライン改訂とセットで、対象事業・対象業務、採用・配置、犯罪事実確認、情報管理等の運用を再点検するトリガーになる",
        "既存の施行準備テーマを、9月時点の現行一次資料で再検証できる"
      ],
      audience: ["教育・保育事業者の法務・コンプライアンス", "人事・労務", "制度導入責任者"],
      audienceReason: "施行準備の途中で前提が古くならないよう、9月時点のQ&A差分を確認し、社内規程・手続へ反映するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-covered-business-work", "dbs-criminal-check", "dbs-prevention-employment", "dbs-information-management"],
      primarySourceIds: ["source-cfa-child-sexual-violence-qa-revision-20260918", "source-cfa-child-sexual-violence-guideline-2026"],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ更新／2026年9月18日にQ&Aが追加・更新されたため、施行準備を9月2日改訂ガイドラインと最新Q&Aで再確認する整理を追加した。"
    },
    {
      id: "article-tmi-child-dbs-employment-measures-20251031",
      title: "【労働法ブログ】第6回 日本版DBS（こども性暴力防止法）の解説―防止措置と労働関係法令",
      publisher: "TMI総合法律事務所",
      author: "益原 大亮",
      publishedAt: "2025-10-31",
      collectedAt: "2026-09-19",
      url: "https://www.tmi.gr.jp/eyes/blog/2025/17652.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・法律事務所／日本版DBSと雇用上の防止措置",
      status: "adopted",
      summary: "こども性暴力防止法上の防止措置を、内定取消、本採用拒否、配置転換、普通解雇、懲戒処分等の労働法上の要件と接続して整理した実務解説。法上の防止措置義務があることだけで個々の雇用上の措置が当然に有効になるわけではない点を明示し、施行前から求人・内定・就業規則等を整える必要性を示す。",
      whyImportant: [
        "一次資料の制度説明だけでは見落としやすい『防止措置義務と労働法上の有効性は別問題』という実務上の境界を具体化している",
        "内定取消・本採用拒否・配置転換・解雇・懲戒を個別の労働法ルールへ接続しており、人事判断の機械化を避ける材料になる",
        "求人票、誓約書、内定通知、就業規則を採用段階から整備する必要性を示し、法務・人事の共同実装へ落とし込める"
      ],
      audience: ["教育・保育事業者の人事・労務", "企業法務", "学校法人", "採用・労務担当"],
      audienceReason: "犯罪事実確認結果を踏まえた人事措置を、こども性暴力防止法と労働法の双方に適合する形で設計するため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: ["child-sexual-violence-prevention-dbs"],
      relatedIssues: ["dbs-prevention-employment", "dbs-criminal-check"],
      primarySourceIds: ["source-cfa-child-sexual-violence-guideline-2026", "source-cfa-child-sexual-violence-qa-revision-20260918"],
      reformEventId: "child-sexual-violence-prevention-act-2024",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-cfa-child-sexual-violence-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ補強／犯罪事実確認後の雇用上の防止措置を、内定取消・配置転換・解雇等の労働法上の要件と切り分けて整理した。"
    },
    {
      id: "article-miyake-whistleblower-practical-20260428",
      title: "改正公益通報者保護法の指針・指針解説を踏まえた実務対応―施行日までに見直すべき規程・マニュアル・書式―",
      publisher: "三宅法律事務所",
      author: "渡邉 雅之",
      publishedAt: "2026-04-28",
      collectedAt: "2026-09-19",
      url: "https://www.miyake.gr.jp/notice/%E5%85%AC%E7%9B%8A%E9%80%9A%E5%A0%B1%E8%80%85%E4%BF%9D%E8%AD%B7%E6%B3%95%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E6%8C%87%E9%87%9D%E3%83%BB%E6%8C%87%E9%87%9D%E8%A7%A3%E8%AA%AC%E3%81%AE%E6%94%B9%E6%AD%A3/",
      sourceType: "secondary",
      sourceLabel: "実務解説・法律事務所／改正公益通報者保護法の規程・契約・研修対応",
      status: "adopted",
      summary: "改正法・指針を、内部通報規程、受付・調査・是正・通報者保護マニュアル、従事者指定、業務委託契約、退職時誓約、秘密保持契約、対象者別研修へ落とす実務解説。フリーランス等への窓口周知、通報者探索を避けるヒアリング、通報後の人事・契約上の不利益取扱いモニタリングまで具体化している。",
      whyImportant: [
        "一次資料だけでは分散する改正事項を、総務・労務・法務が実際に直す文書・手順へ対応付けている",
        "フリーランス・業務委託先への周知方法や契約書への窓口情報記載など、社外関係者を含む実装まで踏み込んでいる",
        "通報者探索の禁止をヒアリング質問例、利益相反チェック、研修対象別の設計へ落としており、制度を形骸化させない示唆がある"
      ],
      audience: ["企業法務・コンプライアンス", "総務・人事・労務", "内部通報窓口・調査担当", "監査・ガバナンス担当"],
      audienceReason: "2026年12月1日の施行までに、規程改定だけでなく契約・マニュアル・研修を含む運用体制を完成させるため。",
      categories: ["危機管理・コンプライアンス", "労務", "契約"],
      relatedTopics: ["whistleblower-internal-reporting"],
      relatedIssues: ["wb-scope-freelance", "wb-system-controls", "wb-obstruction-search", "wb-retaliation-employment", "wb-records-notice"],
      primarySourceIds: ["source-caa-whistleblower-amendment-2025", "source-whistleblower-guideline-2026", "source-caa-whistleblower-guideline-2026"],
      reformEventId: "whistleblower-protection-2025-amendment",
      reformStageAtPublication: "finalized_pending",
      reformStageSourceIds: ["source-caa-whistleblower-amendment-2025", "source-caa-whistleblower-guideline-2026"],
      legacyReformInference: false,
      whatChanged: "テーマ補強／改正公益通報者保護法を規程・マニュアル・契約・研修・通報後モニタリングへ落とす実務対応を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();

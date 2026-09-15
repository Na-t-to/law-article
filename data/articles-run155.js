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
      id: "article-meti-corporate-takeover-guidelines-2023",
      title: "『企業買収における行動指針』を策定しました",
      publisher: "経済産業省",
      author: "経済産業省 経済産業政策局 産業組織課",
      publishedAt: "2023-08-31",
      collectedAt: "2026-09-15",
      url: "https://www.meti.go.jp/press/2023/08/20230831003/20230831003.html",
      sourceType: "primary",
      sourceLabel: "一次資料／企業買収における行動指針",
      status: "adopted",
      summary: "上場会社の経営支配権を取得する買収を中心に、企業価値・株主共同の利益、株主意思、透明性の三原則を示し、買収提案を巡る取締役・取締役会の行動規範、買収の透明性、買収への対応方針・対抗措置等のベストプラクティスを体系化した経済産業省の基礎指針。",
      whyImportant: ["同意なき買収を含む上場会社M&Aで、対象会社・買収者・株主の共通の判断枠組みになる", "買収提案を受けた取締役会がどの段階で何を検討・開示すべきかの基礎を確認できる", "2026年のポイント・Q&Aを読む際に、補足された部分と従来からの指針内容を分けて理解できる"],
      audience: ["企業法務", "取締役・経営企画", "M&A担当", "IR・コーポレートガバナンス担当"],
      audienceReason: "上場会社が買収提案を受領した場合の取締役会対応と、買収者側の情報提供・透明性確保の基準点を把握するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-board-response"],
      relatedIssues: ["takeover-guidelines-desirable-acquisition", "takeover-guidelines-serious-proposal", "takeover-guidelines-serious-review", "takeover-guidelines-value-price-explanation"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023"],
      legacyReformInference: false,
      whatChanged: "新規テーマ作成／企業買収における行動指針を、上場会社の買収提案対応を読むための基礎資料として整理した。"
    },
    {
      id: "article-meti-corporate-takeover-guidance-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等を策定しました",
      publisher: "経済産業省",
      author: "経済産業省 経済産業政策局 産業組織課",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-15",
      url: "https://www.meti.go.jp/press/2026/07/20260730002.html",
      sourceType: "primary",
      sourceLabel: "一次資料／企業買収行動指針・公式補足文書",
      status: "adopted",
      summary: "2023年の『企業買収における行動指針』を維持することを前提に、その趣旨を正しく理解・実践するための『解釈について』『ポイント』『Q&A』を公表したもの。高い価格だけで望ましい買収とはならないこと、真摯な買収提案の判断枠組み、取締役会の真摯な検討、定性要素の企業価値への織込み、複数提案の選択等を具体化する。",
      whyImportant: ["2023年指針の改訂ではなく、実務で生じていた誤解を解く公式な解釈・補足であることを確認できる", "対象会社の取締役会が買収提案を受領してから比較検討・説明するまでの判断枠組みが具体化されている", "最高価格ではない提案への賛同や買収拒否が問題となる場面で、企業価値と株主共同の利益をどう整理するかの基準になる"],
      audience: ["企業法務", "取締役・経営企画", "M&A担当", "IR・コーポレートガバナンス担当"],
      audienceReason: "2026年時点の公式な補足を踏まえて、買収提案の受領・検討・交渉・説明の社内プロセスを更新するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-board-response"],
      relatedIssues: ["takeover-guidelines-desirable-acquisition", "takeover-guidelines-serious-proposal", "takeover-guidelines-serious-review", "takeover-guidelines-value-price-explanation"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "整理具体化／2023年指針を維持したまま、高値だけで望ましい買収としないこと、真摯な提案・検討、企業価値評価、複数提案の選択を公式Q&Aで具体化した。"
    },
    {
      id: "article-not-corporate-takeover-guidance-qa-2026",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤遼太",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-15",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説／法律事務所ニュースレター",
      status: "adopted",
      summary: "2026年Q&Aの各問を取締役会の実務に引き付け、望ましい買収は最高価格だけで決まらないこと、真摯な提案の具体性・目的・実現可能性、買収者への合理的な質問、スタンド・アローンとの定量比較、定性的要素の企業価値への織込み、最高価格ではない提案を選ぶ場合の説明責任まで一連の判断フローとして整理する。",
      whyImportant: ["Q&Aの抽象的な原則を、対象会社取締役会が確認する情報・比較方法・説明責任へ落としている", "買収者の資金裏付け、許認可、トラックレコード、シナジー・ディスシナジー等、真摯な検討で見るべき項目が具体的である", "従業員・取引先、サプライチェーン、経済安全保障等の定性要素を企業価値へどう接続し、保身目的の曖昧な主張と区別するかを整理している"],
      audience: ["企業法務", "取締役会事務局", "経営企画・M&A担当", "IR担当"],
      audienceReason: "買収提案を受けた対象会社側で、取締役会資料、買収者への質問、比較評価、議事録・株主説明のチェックリストを作る際に使いやすいため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-board-response"],
      relatedIssues: ["takeover-guidelines-desirable-acquisition", "takeover-guidelines-serious-proposal", "takeover-guidelines-serious-review", "takeover-guidelines-value-price-explanation"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "整理補強／公式Q&Aを、取締役会の情報収集・比較検討・交渉・株主説明へ落とし込む実務解説を追加した。"
    },
    {
      id: "article-amt-corporate-takeover-guidance-2026",
      title: "【M&A】『企業買収における行動指針』のポイント及びQ&A等の公表① ―『企業買収における行動指針』のポイント等の概要―",
      publisher: "アンダーソン・毛利・友常法律事務所外国法共同事業",
      author: "青柳良則・佐橋雄介",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-15",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260903001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説／法律事務所ニュースレター",
      status: "adopted",
      summary: "2026年のポイント・Q&Aとパブリックコメント回答を照合し、2023年指針を改訂するものではないこと、平時の企業価値向上策が買収提案との比較基準になること、定性的価値をキャッシュフロー・割引率へ接続して評価すること、真摯な検討に経営判断原則が妥当し広い裁量があることなどを整理する。",
      whyImportant: ["ポイント・Q&Aだけでなくパブリックコメント回答まで用いて、2026年補足文書の射程と誤解しやすい点を確認できる", "平時の事業計画・資本政策・資本市場との対話が、買収提案受領後の比較検討と株主説明の基盤になることを明確にしている", "高値提示を否定的に扱うものではないこと、経営判断原則、質問・定量比較など、取締役会の裁量と手続を分けて把握できる"],
      audience: ["企業法務", "取締役会事務局", "経営企画・M&A担当", "コーポレートガバナンス担当"],
      audienceReason: "公式文書とパブコメ回答を横断し、取締役会の裁量を支える平時・有事のプロセスを実務的に確認するため。",
      categories: ["M&A", "会社法・ガバナンス"],
      relatedTopics: ["corporate-takeover-guidelines-board-response"],
      relatedIssues: ["takeover-guidelines-desirable-acquisition", "takeover-guidelines-serious-proposal", "takeover-guidelines-serious-review", "takeover-guidelines-value-price-explanation"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-guidance-2026"],
      legacyReformInference: false,
      whatChanged: "整理補強／2026年補足文書とパブコメ回答を通じ、平時の準備、取締役会の裁量、企業価値評価、真摯な検討の具体像を補強した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url))));
})();
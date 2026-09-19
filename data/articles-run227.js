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
      id: "article-meti-corporate-takeover-qa-20260730",
      title: "『企業買収における行動指針』のポイント・Q&A等を策定",
      publisher: "経済産業省",
      author: "経済産業省",
      publishedAt: "2026-07-30",
      collectedAt: "2026-09-20",
      url: "https://www.meti.go.jp/press/2026/07/20260730002/20260730002.html",
      sourceType: "primary",
      sourceLabel: "一次資料・経済産業省／企業買収行動指針の解釈・ポイント・Q&A",
      status: "adopted",
      summary: "経済産業省が、2023年『企業買収における行動指針』を維持することを前提に、指針の趣旨を正しく理解・実践するための『解釈について』『ポイント』『Q&A』を策定した一次資料。高い買収価格だけで望ましい買収と判断しないこと、真摯な買収提案の具体性・目的の正当性・実現可能性、取締役会による真摯な検討、企業価値評価とステークホルダー要素、複数提案の比較等を具体化している。",
      whyImportant: [
        "2023年指針そのものの改訂ではなく、実務上生じていた誤解を解く公式の解釈・判断枠組みとして今後の上場会社M&Aで参照価値が高い",
        "対象会社取締役会が買収提案を受領してから、真摯性の確認、情報収集、比較検討、説明に至るプロセスを組み立てる直接資料になる",
        "『最高価格を選べば足りる』『高値なら拒否できない』といった単純化を避け、企業価値と株主共同の利益を分けて検討する必要性を確認できる"
      ],
      audience: ["企業法務", "取締役・経営企画", "M&A担当", "IR・コーポレートガバナンス担当"],
      audienceReason: "買収提案を受ける側・行う側の双方で、提案書、取締役会審議、バリュエーション、株主説明を2026年の公式Q&Aに合わせて整えるため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-sincere-proposal", "takeover-serious-review", "takeover-stakeholder-enterprise-value", "takeover-competing-bids", "takeover-guideline-legal-effect"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-qa-20260730"],
      legacyReformInference: false,
      whatChanged: "新規テーマ追加／2026年7月30日の公式解釈・ポイント・Q&Aを基礎に、企業買収行動指針の判断枠組みを独立テーマとして整理した。"
    },
    {
      id: "article-noandt-corporate-takeover-qa-20260804",
      title: "『企業買収における行動指針』のポイント・Q&A等の公表 ～取締役会の対応と買収実務への示唆～",
      publisher: "長島・大野・常松法律事務所",
      author: "斉藤 遼太弁護士",
      publishedAt: "2026-08-04",
      collectedAt: "2026-09-20",
      url: "https://www.nagashima.com/publications/publication20260804-1/",
      sourceType: "secondary",
      sourceLabel: "実務解説・NO&T／企業買収行動指針Q&Aと取締役会対応",
      status: "adopted",
      summary: "経済産業省の2026年Q&Aを、取締役会が実際に使う判断手順へ落とした実務解説。望ましい買収、真摯な買収提案、真摯な検討、企業価値の定量・定性評価、価格と企業価値が一致しない場面、複数提案、指針と取締役責任の関係までQ&A各問に沿って整理する。",
      whyImportant: [
        "真摯な買収提案について、取引主要条件、買収後方針、資金裏付け、独禁法・外為法等の許認可という初期確認項目へ具体化している",
        "買収者への合理的な質問、シナジー・ディスシナジー、スタンド・アローンとの比較、定量化できない事項の扱いなど、取締役会資料へ落としやすい",
        "最高価格以外を支持し得る例外局面と説明責任、指針が会社法上の義務を直接定めるものではないことまで一続きで確認できる"
      ],
      audience: ["企業法務", "取締役会事務局", "経営企画・M&A担当", "上場会社IR担当"],
      audienceReason: "買収提案受領後の取締役会プロセスを、公式Q&Aの文言だけでなく質問・比較・記録・説明という実務単位へ変換するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-sincere-proposal", "takeover-serious-review", "takeover-stakeholder-enterprise-value", "takeover-competing-bids", "takeover-guideline-legal-effect"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-qa-20260730"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／真摯な提案の入口審査、買収者への質問、スタンド・アローンとの比較、競合提案、取締役責任まで取締役会の実務手順を補強した。"
    },
    {
      id: "article-amt-corporate-takeover-points-20260903",
      title: "『企業買収における行動指針』のポイント及びQ&A等の公表①―『企業買収における行動指針』のポイント等の概要―",
      publisher: "アンダーソン・毛利・友常法律事務所",
      author: "青柳 良則弁護士・佐橋 雄介弁護士",
      publishedAt: "2026-09-03",
      collectedAt: "2026-09-20",
      url: "https://www.amt-law.com/insights/newsletters/newsletter_20260903001_ja_001/",
      sourceType: "secondary",
      sourceLabel: "実務解説・AMT／企業買収行動指針のポイント",
      status: "adopted",
      summary: "経済産業省が2026年7月30日に公表した補足文書について、2023年指針を改訂するものではないという位置付けを確認した上で、平時の企業価値向上、望ましい買収、企業価値、買収提案受領時、真摯な検討、特別委員会、株主への情報・時間の提供等を整理するニュースレター。",
      whyImportant: [
        "高い買収価格だけで望ましい買収とはならない一方、価格が企業価値を示す重要要素でもあるという両面を丁寧に整理している",
        "従業員・取引先、ガバナンス、サステナブルな事業活動、経済安全保障等を将来キャッシュフロー・割引率への影響として企業価値に接続する考え方が分かる",
        "2026年補足文書が指針本体の改訂ではなく、誤解を解くための明確化である点をパブコメ回答も踏まえて確認できる"
      ],
      audience: ["企業法務", "M&A担当", "取締役・経営企画", "コーポレートガバナンス担当"],
      audienceReason: "企業価値・価格・ステークホルダー要素を混同せず、取締役会が説明可能な評価軸へ整理するため。",
      categories: ["M&A", "会社法・ガバナンス", "金融商品取引・開示・IR"],
      relatedTopics: ["corporate-takeover-guidelines"],
      relatedIssues: ["takeover-desirable-acquisition", "takeover-stakeholder-enterprise-value", "takeover-serious-review"],
      primarySourceIds: ["source-meti-corporate-takeover-guidelines-2023", "source-meti-corporate-takeover-qa-20260730"],
      legacyReformInference: false,
      whatChanged: "実務解説補強／企業価値と買収価格の関係、ステークホルダー・サステナビリティ・経済安全保障を企業価値評価へ織り込む際の考え方を補強した。"
    }
  ];

  const existing = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const ids = new Set(existing.map((item) => item && item.id).filter(Boolean));
  const urls = new Set(existing.map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = existing.concat(additions.filter((item) => !ids.has(item.id) && !urls.has(normalizeUrl(item.url))));
})();

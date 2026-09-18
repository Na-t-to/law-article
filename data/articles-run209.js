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
      id: "article-meti-jcstar-launch-20250325",
      title: "IoT製品に対するセキュリティラベリング制度（JC-STAR）の運用を開始しました",
      publisher: "経済産業省",
      author: "経済産業省・独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2025-03-25",
      collectedAt: "2026-09-18",
      url: "https://www.meti.go.jp/press/2024/03/20250325007/20250325007.html",
      sourceType: "primary",
      sourceLabel: "一次資料・経済産業省／JC-STAR運用開始",
      status: "adopted",
      summary: "IoT製品のセキュリティ要件への適合性を共通基準で評価・可視化するJC-STARの運用開始資料。IP通信を行う幅広いIoT製品を対象とする任意の多段階制度で、★1は共通の最低限要件、★2〜★4は製品類型ごとの要件とする。★1・★2は自己適合宣言、★3・★4は第三者評価を基礎にラベルを付与し、政府調達等での活用や海外制度との相互承認も進める。",
      whyImportant: [
        "JC-STARを法令上の一律の取得義務と誤解せず、任意制度としての位置付けを公式資料から確認できる",
        "対象製品、★1〜★4の制度設計、自己適合宣言と第三者評価の違いを制度開始時点の一次資料で押さえられる",
        "製品ベンダー側の認証対応と、調達側の選定基準という二つの実務を同じ制度の中で整理できる"
      ],
      audience: ["IoT製品ベンダー法務", "情報セキュリティ", "製品開発・品質保証", "調達・購買", "コンプライアンス"],
      audienceReason: "JC-STARの制度上の位置付けと対象範囲、評価レベル、調達での使われ方を一次資料から確認するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-level-evaluation"],
      primarySourceIds: ["source-meti-jcstar-launch-20250325"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／JC-STARの制度開始、任意性、対象範囲、★1〜★4の評価方式を基礎資料として追加した。"
    },
    {
      id: "article-ipa-jcstar-portal-20260731",
      title: "セキュリティ要件適合評価及びラベリング制度（JC-STAR）",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-31",
      collectedAt: "2026-09-18",
      url: "https://www.ipa.go.jp/security/jc-star/index.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／JC-STAR現行制度ポータル",
      status: "adopted",
      summary: "IPAの現行JC-STARポータル。★1・★2は自己適合宣言、★3・★4は第三者評価を用いること、ラベルは想定脅威に対する最低限の水準への適合を示すもので完全なセキュリティを保証しないことを明示する。さらに、受理番号通知前や仮登録番号のない状態で『JC-STAR適合予定』『適合ラベル対応』『適合ラベル取得申請中』等と表示することを認めておらず、不正表示への対応可能性も示している。",
      whyImportant: [
        "制度レベルごとの評価方式と、ラベルが保証する範囲・保証しない範囲を現行公式ページで確認できる",
        "製品ページや提案書における『適合予定』『申請中』等の取得前表示について、IPAの明確な運用ルールが示されている",
        "法務・マーケティング・セキュリティが、申請手続と外部表示を同じ承認フローで管理する必要性を把握できる"
      ],
      audience: ["IoT製品ベンダー法務", "広報・マーケティング", "情報セキュリティ", "製品開発・品質保証", "調達・購買"],
      audienceReason: "最新の制度運用、ラベルの意味、取得前表示の管理を製品・広告・提案実務へ落とすため。",
      categories: ["個人情報・AI・情報セキュリティ", "消費者法・表示", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-level-evaluation", "jcstar-procurement-use", "jcstar-label-claims"],
      primarySourceIds: ["source-ipa-jcstar-portal-20260731", "source-ipa-jcstar-star3-20260612"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／現行の評価方式、ラベルの限界、取得前の誤認表示ルールを追加した。"
    },
    {
      id: "article-ipa-jcstar-procurement-20260709",
      title: "JC-STAR活用に向けた取り組み",
      publisher: "独立行政法人情報処理推進機構（IPA）",
      author: "独立行政法人情報処理推進機構（IPA）",
      publishedAt: "2026-07-09",
      collectedAt: "2026-09-18",
      url: "https://www.ipa.go.jp/security/jc-star/leverage.html",
      sourceType: "primary",
      sourceLabel: "一次資料・IPA／JC-STARの調達・利活用",
      status: "adopted",
      summary: "JC-STARを政府機関等、重要インフラ事業者、地方公共団体等の調達要件へ組み込み、業界標準としてラベル製品の製造・販売・選定を促し、海外制度との相互承認によって適合評価負担を軽減する方向を示す公式資料。任意ラベルであっても、調達基準への採用を通じて企業取引上の重要性が高まる構造を確認できる。",
      whyImportant: [
        "『任意制度だから企業法務には関係が薄い』という見方では拾えない、調達・契約上の実務インパクトを確認できる",
        "調達側がラベルを最低要件・選定根拠として使う場面と、システム重要度に応じた追加審査の必要性を整理できる",
        "製品ベンダー側では、ラベル対応が政府・重要インフラ等の市場アクセスや提案条件に接続し得ることを把握できる"
      ],
      audience: ["調達・購買", "情報セキュリティ", "委託先・サプライチェーン管理", "IoT製品ベンダー法務", "営業企画"],
      audienceReason: "JC-STARを製品認証の話だけで終わらせず、調達条件・ベンダー選定・契約審査の証跡としてどう使うか検討するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-procurement-use"],
      primarySourceIds: ["source-ipa-jcstar-procurement-20260709", "source-meti-jcstar-launch-20250325"],
      legacyReformInference: false,
      whatChanged: "新規テーマ／任意制度であるJC-STARが政府・重要インフラ等の調達基準へ接続する実務上の意味を整理した。"
    },
    {
      id: "article-unitis-tmi-jcstar-20251208",
      title: "JC-STAR制度の概要とセキュリティ業務への影響（対象製品、レベル、時期等）",
      publisher: "UNITIS",
      author: "寺門峻佑・田山翔・梶原尚樹（TMI総合法律事務所）",
      publishedAt: "2025-12-08",
      collectedAt: "2026-09-18",
      url: "https://unitis.jp/articles/18754/",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI総合法律事務所／JC-STARの製品・調達実務",
      status: "adopted",
      summary: "JC-STARをIoT製品ベンダーと調達・利用企業の双方から解説する実務記事。ベンダー側では、対象製品の洗い出し・製品類型判定、適合要件とのGAP分析、対応計画の策定・実施、申請・証跡整備を一連のプロセスとして整理する。調達側では、選定理由の明確化、最低限のセキュリティ水準の確保、サプライチェーンリスク低減、情報透明性の向上という活用価値を示す。制度スケジュールは公開時点の記載を含むため、現在の整備状況はIPA一次資料で補正して読む必要がある。",
      whyImportant: [
        "一次資料の制度説明を、対象製品の棚卸し、GAP分析、対応計画、申請・証跡というベンダーの実装フローへ落としている",
        "調達企業側のメリットを、選定理由、最低水準、サプライチェーンリスク、透明性という観点で整理している",
        "制度導入をセキュリティ部門だけの仕事にせず、法務・製品・営業・調達をまたぐ業務設計として読む価値がある"
      ],
      audience: ["IoT製品ベンダー法務", "情報セキュリティ", "製品開発・品質保証", "調達・購買", "コンプライアンス"],
      audienceReason: "公式要件を自社の製品台帳・GAP分析・証跡・調達フローへ変換する際の実務手順を把握するため。",
      categories: ["個人情報・AI・情報セキュリティ", "契約・取引", "危機管理・コンプライアンス"],
      relatedTopics: ["jc-star-iot-security-labeling"],
      relatedIssues: ["jcstar-voluntary-scope", "jcstar-level-evaluation", "jcstar-procurement-use"],
      primarySourceIds: [
        "source-meti-jcstar-launch-20250325",
        "source-ipa-jcstar-portal-20260731",
        "source-ipa-jcstar-procurement-20260709",
        "source-ipa-jcstar-star3-20260612"
      ],
      legacyReformInference: false,
      whatChanged: "新規テーマ／JC-STARの公式要件を、製品棚卸し・GAP分析・証跡・調達判断へ落とす代表的な実務解説を追加した。"
    },
    {
      id: "article-tmi-dnfbp-aml-cft-20260917",
      title: "【犯収法ブログ】事業会社（DNFBPs）のAML/CFT対策",
      publisher: "TMI総合法律事務所",
      author: "TMI総合法律事務所",
      publishedAt: "2026-09-17",
      collectedAt: "2026-09-18",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18831.html",
      sourceType: "secondary",
      sourceLabel: "実務解説・TMI総合法律事務所／DNFBPsのAML・CFT",
      status: "adopted",
      summary: "金融機関以外の事業会社、とりわけ宅建業者、宝石・貴金属等取扱事業者、郵便物受取・電話受付代行・電話転送サービス等のDNFBPsについて、犯収法上の義務、各省庁ガイドライン、リスクベース・アプローチ、有効性検証を一体で整理する実務解説。2027年4月の本人確認方法厳格化、2026年改正による法人口座悪用対策も踏まえ、統括管理者、内部規程、リスク評価、教育、内部監査、取締役会での実質的議論、顧客管理・取引モニタリング、疑わしい取引の届出までセルフチェックに落としている。DNFBPsに該当しない事業会社については、犯収法上の特定事業者としての義務と、銀行等への確認協力・自社サービスや法人口座の悪用防止という一般的なコンプライアンス対応を区別している。",
      whyImportant: [
        "金融機関中心で語られがちなAML/CFTを、DNFBPsの事業会社に必要な統括管理・規程・リスク評価・教育・監査・取締役会議論まで具体化している",
        "『リスクベースだから法定の取引時確認要件を緩和できる』わけではないという境界を示し、法定義務とリスクに応じた追加措置を切り分けやすい",
        "DNFBPsに該当しない一般事業会社にも、犯収法上の特定事業者義務を拡張せず、法人口座やサービスの悪用・捜査協力・レピュテーションを別のリスク管理として整理できる"
      ],
      audience: ["企業法務", "コンプライアンス", "内部監査", "宅建・不動産事業", "宝石・貴金属等取扱事業", "本人確認・顧客管理担当"],
      audienceReason: "自社が犯収法上の特定事業者・DNFBPに当たるかを起点に、2026年改正と2027年本人確認厳格化を規程・システム・監査・経営報告へ落とすため。",
      categories: ["危機管理・コンプライアンス", "契約・取引"],
      relatedTopics: ["aml-kyc-criminal-proceeds"],
      relatedIssues: ["aml-2026-account-remittance", "aml-fictitious-account", "aml-identity-verification-2027"],
      primarySourceIds: ["source-npa-aml-amendment-2026", "source-npa-aml-overview-2026"],
      legacyReformInference: false,
      whatChanged: "既存AMLテーマ／金融機関以外のDNFBPsについて、法定義務・リスクベース・有効性検証・ガバナンスを実務フローへ落とす代表的解説を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  const fresh = additions.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)));
  if (fresh.length) window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(fresh);
})();
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

  const articles = [
    {
      id: "article-courts-dwango-fc2-program-2025",
      title: "令和5年（受）第14号・第15号 特許権侵害差止等請求事件",
      publisher: "最高裁判所",
      author: "最高裁判所第二小法廷",
      publishedAt: "2025-03-03",
      collectedAt: "2026-09-15",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93838.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／最高裁判決・越境プログラム配信",
      status: "adopted",
      summary: "米国所在サーバーから日本国内のユーザー端末へプログラムを配信する行為について、国外で行為の一部が行われていることのみを理由に日本の特許法上の実施から外れるとはせず、事案の具体的事情の下で、特許法2条3項1号の『電気通信回線を通じた提供』及び101条1号の『譲渡等』に当たり得るとした最高裁判決。越境型のクラウド・配信サービスについて、サーバー所在地だけでなく国内端末との結び付き等を含めて評価する基準点となる。",
      whyImportant: [
        "国外サーバーを利用するだけで日本特許の侵害リスクが当然に排除されるわけではないことを最高裁判決から確認できる",
        "クラウド・配信型サービスで、送信元サーバーの所在地と国内端末への提供を分けて侵害分析する出発点になる",
        "2026年に特許庁が検討している越境ネットワーク発明の『考え方の整理』を、現行法の確定部分と将来の整理に分けて読む基準になる"
      ],
      audience: ["企業法務", "知的財産", "プロダクト・開発", "クラウド・配信サービス担当"],
      audienceReason: "国外サーバーを含むサービス設計について、日本特許の侵害リスクをサーバー所在地だけで判断せず、現行最高裁判例に照らして点検するため。",
      categories: ["知的財産", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["patent-system-review-crossborder-infringement"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-guidance-review"],
      primarySourceIds: ["source-courts-dwango-fc2-program-2025"],
      legacyReformInference: false,
      whatChanged: "新規テーマ作成／越境ネットワーク発明について、国外サーバーから国内端末へのプログラム配信を日本特許法上の『提供』『譲渡等』として評価し得る最高裁判決を現行法の基準点として整理した。"
    },
    {
      id: "article-courts-dwango-fc2-system-2025",
      title: "令和5年（受）第2028号 特許権侵害差止等請求事件",
      publisher: "最高裁判所",
      author: "最高裁判所第二小法廷",
      publishedAt: "2025-03-03",
      collectedAt: "2026-09-15",
      url: "https://www.courts.go.jp/assets/hanrei/hanrei-pdf-93839.pdf",
      sourceType: "primary",
      sourceLabel: "一次資料／最高裁判決・越境システム構築",
      status: "adopted",
      summary: "国外サーバーから国内端末へファイルを配信し、国外サーバーと国内端末を含むシステムを構築する行為について、行為全体を実質的に評価し、日本国内における特許法上の『生産』に当たり得るとした最高裁判決。ネットワーク型システムの一部が国外に置かれる場合でも、国内との結び付きや発明の効果等を含む事案全体から評価する必要があることを示す。",
      whyImportant: [
        "ネットワーク型システムの構成要素が国外にある場合でも、国内の『生産』となり得ることを最高裁が示した基準点である",
        "SaaS・クラウド・配信サービスで、サーバーと国内端末をまたぐシステムの構築行為を請求項単位で分析する必要性を確認できる",
        "2026年の特許制度見直しで議論される予見可能性の課題を、確定判例と未確定の政策整理に分けて把握できる"
      ],
      audience: ["企業法務", "知的財産", "プロダクト・開発", "クラウド・配信サービス担当"],
      audienceReason: "国外サーバーと国内端末を組み合わせるシステムについて、現行判例に基づく日本特許の侵害リスクを設計段階から点検するため。",
      categories: ["知的財産", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["patent-system-review-crossborder-infringement"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-guidance-review"],
      primarySourceIds: ["source-courts-dwango-fc2-system-2025"],
      legacyReformInference: false,
      whatChanged: "新規テーマ作成／国外サーバーと国内端末から成るシステムの構築について、日本国内の『生産』と評価し得る最高裁判決を越境型サービスの現行法基準として追加した。"
    },
    {
      id: "article-tmi-patent-subcommittee-56-2026",
      title: "第56回特許制度小委員会（2026年6月16日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山智恵・齋藤俊",
      publishedAt: "2026-06-23",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18487.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／特許制度見直し・越境侵害／侵害抑止",
      status: "adopted",
      summary: "第56回特許制度小委員会の委員・オブザーバーが、越境ネットワーク関連発明、AIと特許制度、侵害抑止の審議を解説。越境型については、最高裁判決以外の態様の予見可能性を高めるため、拙速なルール化よりも被疑侵害行為の類型と考慮要素を整理する『考え方の整理』を進める方向を説明する。侵害抑止については、企業アンケートや2019年改正後の損害賠償実務を踏まえ、悪質な侵害に対する追加的な民事救済の要否を含めて検討が続いていることを整理する。",
      whyImportant: [
        "特許庁の議事要旨だけでは分かりにくい越境型侵害の論点を、2025年最高裁判決と『考え方の整理』の関係から具体化している",
        "確定した現行判例と、2026年に検討中の行政上の整理・将来の制度改正を明確に分けて読める",
        "侵害経験、クリアランス調査、特許表示、故意侵害、ADR利用等の企業調査を踏まえ、侵害抑止を企業の紛争予防・証拠管理へつなげて理解できる",
        "悪質な侵害に対する追加的な民事救済は議論段階であり、直ちに現行法の損害賠償ルールが変わったわけではないことを確認できる"
      ],
      audience: ["企業法務", "知的財産", "訴訟・紛争担当", "クラウド・AIサービス担当"],
      audienceReason: "最高裁判例の射程と、特許庁が検討する越境侵害・侵害抑止の将来方向を分離して把握し、サービス設計と紛争対応を更新するため。",
      categories: ["知的財産", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["patent-system-review-crossborder-infringement"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-guidance-review", "patent-infringement-civil-remedies-review"],
      primarySourceIds: ["source-jpo-patent-subcommittee-56-2026", "source-courts-dwango-fc2-program-2025", "source-courts-dwango-fc2-system-2025"],
      reformEventId: "patent-system-infringement-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-jpo-patent-subcommittee-56-2026"],
      whatChanged: "実務解説補完／越境ネットワーク発明の『考え方の整理』と、悪質な侵害に対する民事救済の検討を、現行の最高裁判例と未確定の政策レビューに分けて整理した。"
    },
    {
      id: "article-tmi-patent-subcommittee-57-2026",
      title: "第57回特許制度小委員会（2026年8月20日）の審議について",
      publisher: "TMI総合法律事務所",
      author: "松山智恵・齋藤俊",
      publishedAt: "2026-08-24",
      collectedAt: "2026-09-15",
      url: "https://www.tmi.gr.jp/eyes/blog/2026/18724.html",
      sourceType: "secondary",
      sourceLabel: "法律事務所・実務解説／特許制度見直し・越境侵害／侵害抑止",
      status: "adopted",
      summary: "第57回特許制度小委員会の委員・オブザーバーによる続報。越境ネットワーク関連発明について、被疑侵害行為の類型や海外の考え方を踏まえた『考え方の整理』のドラフト準備が進んでいることを解説する。侵害抑止では、2019年改正後の裁判例を基に、認容された損害額の合計約56億円に対し推定覆滅に用いられた侵害者利益額の合計が約144億円であったとの特許庁資料を紹介し、悪質な侵害への民事救済や査証制度等の証拠収集手続を含む検討が継続しているとする。いずれも法改正の成立・施行を意味するものではない。",
      whyImportant: [
        "6月時点の論点整理から、越境型侵害の『考え方の整理』のドラフト準備へ進んだことを追える",
        "侵害者利益と認容損害額の乖離を、悪質な侵害への追加的救済を検討する政策背景として確認できる",
        "査証制度を含む証拠収集手続の見直しが、侵害抑止と並行して検討されていることを把握できる",
        "制度変更はなお検討段階であり、現行法上の権利行使は2025年最高裁判決や現行特許法に基づく必要があることを区別して読める"
      ],
      audience: ["企業法務", "知的財産", "訴訟・紛争担当", "クラウド・AIサービス担当"],
      audienceReason: "越境侵害の行政上の整理と、損害賠償・証拠収集に関する将来の制度変更の検討進度を継続的に把握するため。",
      categories: ["知的財産", "国際取引", "危機管理・コンプライアンス"],
      relatedTopics: ["patent-system-review-crossborder-infringement"],
      relatedIssues: ["patent-crossborder-network-current-law", "patent-crossborder-network-guidance-review", "patent-infringement-civil-remedies-review", "patent-evidence-collection-review"],
      primarySourceIds: ["source-jpo-patent-subcommittee-56-2026", "source-courts-dwango-fc2-program-2025", "source-courts-dwango-fc2-system-2025"],
      reformEventId: "patent-system-infringement-review-2026",
      reformStageAtPublication: "proposal",
      reformStageSourceIds: ["source-jpo-patent-subcommittee-56-2026"],
      whatChanged: "検討進展／越境ネットワーク発明の『考え方の整理』のドラフト準備と、悪質な侵害への民事救済・証拠収集手続の継続検討を追加した。"
    }
  ];

  const existingIds = new Set((window.ARTICLE_DATA || []).map((item) => item && item.id));
  const existingUrls = new Set((window.ARTICLE_DATA || []).map((item) => normalizeUrl(item && item.url)).filter(Boolean));
  window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat(
    articles.filter((item) => !existingIds.has(item.id) && !existingUrls.has(normalizeUrl(item.url)))
  );
})();

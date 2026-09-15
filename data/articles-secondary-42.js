(() => {
  const labourStandardsSource = (window.SOURCE_DATA || []).find((item) => item.id === "source-labour-standards-act");
  if (labourStandardsSource && Array.isArray(labourStandardsSource.topics) && !labourStandardsSource.topics.includes("overtime-36-agreement-supervision")) {
    labourStandardsSource.topics.push("overtime-36-agreement-supervision");
  }
})();

window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "overtime-36-agreement-supervision",
    "title": "36協定・時間外労働／監督指導・健康福祉確保措置",
    "categories": ["労務"],
    "summary": "時間外労働の法定上限と36協定・特別条項の基本を前提に、2026年9月1日から見直された労働基準監督署の監督指導と、健康・福祉確保措置の実施確認、相談・訪問支援への対応を整理する。",
    "lastUpdated": "2026-09-09",
    "lastVerified": "2026-09-09",
    "isNew": true,
    "overview": [
      "2026年9月1日から、厚生労働省は36協定・特別条項に関する相談支援を拡充し、労働基準監督署の時間外労働に関する指導運用を見直した。",
      "見直されたのは、時間外・休日労働の時間数だけに着目して1か月45時間以内への削減を求める一律の行政指導であり、労働基準法上の時間外労働の上限規制そのものが緩和されたわけではない。",
      "監督指導では、各事業場が36協定で定めた健康及び福祉を確保するための措置の実施状況を重点的に確認し、事業場の状況に応じて必要な指導を行う。過重労働による健康障害のおそれが高い場合の指導も継続する。",
      "企業実務では、36協定届の時間数だけでなく、特別条項を発動する手続、健康・福祉確保措置の実施と記録、労働時間の実績を一体で点検する必要がある。"
    ],
    "currentSummary": {
      "facts": [
        "労働基準法上、時間外労働の上限は原則として月45時間・年360時間であり、臨時的な特別の事情がある場合でも特別条項付き36協定による上限が定められている。2026年9月の監督指導見直しでこれらの法定上限は変更されていない。",
        "厚生労働省は2026年9月1日から、時間外・休日労働時間数のみに着目して1か月45時間以内への削減を求める一律の指導を見直した。",
        "見直し後は、各事業場が36協定で定める健康及び福祉を確保するための措置の実施状況を重点的に確認し、確認した状況に応じて必要な指導を行う。過重労働による健康障害のおそれが高い場合には引き続き必要な指導を行う。",
        "同日から、働き方改革推進支援センターに36協定・特別条項等の専門相談窓口を設け、同センターと労働基準監督署によるアウトリーチ型の訪問支援も実施する。"
      ],
      "interpretations": [
        "『45時間以内への一律指導の見直し』を長時間労働の法的上限の緩和と読むのは適切でない。法定上限と、監督署が適法な36協定の範囲内で行う行政指導の運用を分けて管理する必要がある。",
        "監督対応では、36協定を提出していることだけで足りるという発想を避け、協定に記載した健康・福祉確保措置が実際に実施されているか、特別条項を発動する際の手続が運用されているかを証跡とともに確認できる状態にしておく方がよい。"
      ],
      "implications": [
        "現行の36協定と特別条項について、対象業務、延長時間、特別の事情、健康・福祉確保措置、発動手続を棚卸しする。",
        "健康・福祉確保措置について、対象者、実施日、実施内容、担当部署を後から確認できる記録方法を整える。",
        "月45時間超の時間外労働が発生する部署では、法定上限の遵守と特別条項の発動回数・手続を継続して管理する。",
        "労基署からの照会・監督時に、36協定届、労働時間実績、健康・福祉確保措置の実施記録を相互に照合できるようにする。"
      ],
      "uncertain": [
        "監督指導の具体的な確認項目・深度は個々の事業場の労働時間、健康リスク、36協定の内容等によって異なり、一律のチェックリストだけで監督対応を確定できない。",
        "今回の運用見直し後の監督事例はまだ蓄積途上であり、労働局・労基署の運用や追加資料を継続して確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "overtime-statutory-limits",
        "title": "時間外労働の法定上限は変わったか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年9月の見直しは監督指導の運用変更であり、労働基準法上の上限規制を変更するものではない。原則月45時間・年360時間等の法定上限は引き続き遵守する。",
        "exception": "業種・業務による特例や適用関係は労働基準法の個別規定を確認する。",
        "uncertain": "法令自体の将来の改正議論が生じた場合は、監督指導の運用変更と分けて追う。",
        "sourceIds": ["source-labour-standards-act", "source-mhlw-overtime-supervision-2026"]
      },
      {
        "id": "overtime-supervision-2026",
        "title": "2026年9月から労基署の監督指導は何を重点確認するか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "時間数のみに着目した月45時間以内への一律指導を見直し、36協定で定めた健康及び福祉を確保するための措置の実施状況を重点確認し、事業場の状況に応じて必要な指導を行う。",
        "exception": "過重労働による健康障害のおそれが高い場合や重大・悪質な事案への必要な指導・厳正な対応は継続する。",
        "uncertain": "具体的な監督の確認範囲は事業場の状況に応じるため、運用事例の蓄積を継続確認する。",
        "sourceIds": ["source-mhlw-overtime-supervision-2026"]
      },
      {
        "id": "overtime-special-clause-health-measures",
        "title": "特別条項と健康・福祉確保措置をどう運用・記録するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "36協定・特別条項に記載した健康・福祉確保措置と発動手続を実際の長時間労働者への対応に結び付け、実施状況を後から説明できる記録とともに運用する。",
        "exception": "必要な措置の選択・運用は協定内容や事業場の実態によって異なるため、他社の様式をそのまま流用せず自社の協定内容と照合する。",
        "uncertain": "2026年9月以降に監督署がどの記録をどの程度確認するかは事案ごとに異なり得る。",
        "sourceIds": ["source-labour-standards-act", "source-mhlw-overtime-supervision-2026"]
      }
    ],
    "sourceIds": ["source-labour-standards-act", "source-mhlw-overtime-supervision-2026"],
    "practicalImpacts": ["36協定・特別条項", "労働時間管理", "健康・福祉確保措置", "措置の実施記録", "労基署監督対応", "人事・労務マニュアル"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-mhlw-overtime-supervision-2026",
    "title": "時間外労働等に係る相談・支援及び監督指導を見直します",
    "type": "government_material",
    "typeLabel": "一次資料・監督指導運用／36協定",
    "authority": "厚生労働省",
    "publishedAt": "2026-08-19",
    "url": "https://www.mhlw.go.jp/stf/newpage_75454.html",
    "importance": "最高",
    "whyImportant": "2026年9月1日からの36協定相談支援と労働基準監督署の監督指導見直しについて、開始日、見直す指導、健康・福祉確保措置の重点確認を直接確認できる一次資料。",
    "topics": ["overtime-36-agreement-supervision"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-mhlw-overtime-supervision-2026",
    "title": "時間外労働等に係る相談・支援及び監督指導を見直します",
    "publisher": "厚生労働省",
    "author": "厚生労働省",
    "publishedAt": "2026-08-19",
    "collectedAt": "2026-09-09",
    "url": "https://www.mhlw.go.jp/stf/newpage_75454.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・労働基準監督署の監督指導見直し",
    "status": "adopted",
    "summary": "2026年9月1日から、36協定・特別条項に関する専門相談窓口と訪問支援を開始するとともに、時間外・休日労働時間数だけに着目して1か月45時間以内への削減を求める一律の指導を見直し、36協定で定めた健康及び福祉を確保するための措置の実施状況を重点確認することを示した厚生労働省の公式資料。法定の時間外労働上限そのものを変更する資料ではない。",
    "whyImportant": [
      "2026年9月1日から実際に変わった監督指導の運用を一次資料で確認できる",
      "『45時間以内への一律指導の見直し』と法定上限の緩和を混同せずに整理できる",
      "36協定に書いた健康・福祉確保措置を実施・記録する実務の重要性を監督方針から確認できる",
      "相談窓口とアウトリーチ型訪問支援の新しい運用も把握できる"
    ],
    "audience": ["人事・労務", "企業法務", "労働時間管理担当", "管理職"],
    "audienceReason": "36協定・特別条項の運用と労基署対応を、2026年9月以降の監督方針に合わせて点検するため。",
    "categories": ["労務"],
    "relatedTopics": ["overtime-36-agreement-supervision"],
    "relatedIssues": ["overtime-statutory-limits", "overtime-supervision-2026", "overtime-special-clause-health-measures"],
    "primarySourceIds": ["source-mhlw-overtime-supervision-2026", "source-labour-standards-act"],
    "whatChanged": "2026年9月1日からの36協定相談支援と労働基準監督署の時間外労働に関する監督指導見直しを一次資料として整理した。"
  },
  {
    "id": "article-tm-nagoya-overtime-guidance-2026",
    "title": "【実務】「残業45時間」一律指導の見直しは長時間労働の容認なのか ―9月から労基署が見る「健康確保措置」と「発動手続」を読み解く―",
    "publisher": "社会保険労務士法人T&M Nagoya",
    "author": "社会保険労務士法人T&M Nagoya",
    "publishedAt": "2026-08-25",
    "collectedAt": "2026-09-09",
    "url": "https://www.mh5.jp/announce2_96964.html",
    "sourceType": "secondary",
    "sourceLabel": "実務解説・36協定／監督指導見直し",
    "status": "adopted",
    "summary": "2026年9月の監督指導見直しについて、労働基準法・施行規則・36協定指針自体は改正されていないことを確認した上で、法的上限と行政指導を切り分け、特別条項の健康・福祉確保措置、発動手続、実施記録を企業がどう点検すべきかへ落とした実務解説。一次資料から確定できる事項と筆者の予測・実務的推奨を区別している。",
    "whyImportant": [
      "『月45時間』という法定原則と、今回見直された一律の行政指導を分けて理解できる",
      "36協定届の健康・福祉確保措置欄や特別条項の発動手続を、実施記録まで含む点検項目へ落としている",
      "制度変更を『残業規制の緩和』と誤解して社内運用を緩めるリスクを避けやすい",
      "一次資料に明示された内容と、今後の監督実務に関する推測を区別して読める"
    ],
    "audience": ["人事・労務", "企業法務", "労働時間管理担当", "経営管理"],
    "audienceReason": "公式発表の短い監督方針を、36協定の記載・発動・健康確保措置・記録という日常運用へ具体化するため。",
    "categories": ["労務"],
    "relatedTopics": ["overtime-36-agreement-supervision"],
    "relatedIssues": ["overtime-statutory-limits", "overtime-supervision-2026", "overtime-special-clause-health-measures"],
    "primarySourceIds": ["source-mhlw-overtime-supervision-2026", "source-labour-standards-act"],
    "whatChanged": "監督指導見直しについて、法定上限と行政指導を分離し、健康・福祉確保措置と特別条項の発動手続・実施記録へ落とす実務整理を補完した。"
  }
]);

(() => {
  const topicSlug = "overtime-36-agreement-supervision";
  const sourceId = "source-mhlw-long-hours-supervision-fy2025-2026";
  const articleId = "article-mhlw-long-hours-supervision-fy2025-2026";
  const addUnique = (values, value) => {
    const list = Array.isArray(values) ? [...values] : [];
    if (value && !list.includes(value)) list.push(value);
    return list;
  };

  if (!(window.SOURCE_DATA || []).some((source) => source && source.id === sourceId)) {
    window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([{
      id: sourceId,
      title: "長時間労働が疑われる事業場に対する令和7年度の監督指導結果",
      type: "government_material",
      typeLabel: "一次資料・労基署監督実績／長時間労働",
      authority: "厚生労働省",
      publishedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/newpage_76158.html",
      importance: "最高",
      whyImportant: "長時間労働が疑われる高リスク事業場に対する令和7年度の監督指導について、違法な時間外労働、賃金不払残業、健康障害防止措置、労働時間把握の不備を件数・割合と監督事例から確認でき、2026年9月以降の監督対応で優先して点検すべき実務領域を具体化できる一次資料。",
      topics: [topicSlug]
    }]);
  }

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === topicSlug);
  if (topic) {
    topic.lastUpdated = "2026-09-15";
    topic.lastVerified = "2026-09-15";
    topic.sourceIds = addUnique(topic.sourceIds, sourceId);
    topic.currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "令和7年度（2025年4月～2026年3月）は、長時間労働が疑われる29,150事業場へ監督指導が行われ、11,228事業場（38.5％）で違法な時間外労働、1,901事業場（6.5％）で賃金不払残業、5,919事業場（20.3％）で過重労働による健康障害防止措置の未実施が確認された。");
    topic.currentSummary.facts = addUnique(topic.currentSummary.facts, "同監督指導では、12,811事業場（43.9％）に過重労働による健康障害防止措置が不十分として改善指導が行われ、4,045事業場（13.9％）には労働時間の把握が不適正として指導が行われた。");
    topic.currentSummary.interpretations = addUnique(topic.currentSummary.interpretations, "監督結果は長時間労働が疑われる事業場を選別して実施した監督の集計であり、全事業場における違反率を示す統計ではない。一方、36協定の適法性だけでなく、賃金支払、健康障害防止措置、客観的な労働時間把握が実際の監督で横断的に確認されていることを示す。"
    );
    topic.currentSummary.implications = addUnique(topic.currentSummary.implications, "監督対応の社内点検では、36協定・特別条項と実績時間の突合に加え、未払残業の有無、80時間超労働者への面接指導等、客観的な労働時間把握と自己申告との差異まで同じ監査単位で確認する。"
    );
    topic.practicalImpacts = addUnique(topic.practicalImpacts, "賃金不払残業・客観的労働時間把握の監査");

    ["overtime-supervision-2026", "overtime-special-clause-health-measures"].forEach((id) => {
      const issue = (topic.issues || []).find((item) => item && item.id === id);
      if (issue) issue.sourceIds = addUnique(issue.sourceIds, sourceId);
    });
  }

  if (!(window.ARTICLE_DATA || []).some((article) => article && (article.id === articleId || article.url === "https://www.mhlw.go.jp/stf/newpage_76158.html"))) {
    window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([{
      id: articleId,
      title: "長時間労働が疑われる事業場に対する令和7年度の監督指導結果",
      publisher: "厚生労働省",
      author: "厚生労働省",
      publishedAt: "2026-09-15",
      collectedAt: "2026-09-15",
      url: "https://www.mhlw.go.jp/stf/newpage_76158.html",
      sourceType: "primary",
      sourceLabel: "一次資料・労基署監督実績／長時間労働",
      status: "adopted",
      summary: "時間外・休日労働が月80時間を超えると考えられる事業場や過労死等の労災請求があった事業場等を対象とした令和7年度の労基署監督指導結果。29,150事業場のうち11,228事業場で違法な時間外労働、1,901事業場で賃金不払残業、5,919事業場で健康障害防止措置の未実施を確認し、労働時間把握の不適正についても4,045事業場を指導した。高リスク事業場を対象とする集計であり、全事業場の違反率ではない。",
      whyImportant: [
        "36協定違反だけでなく、賃金不払残業、健康障害防止措置、労働時間把握が監督で同時に確認されることを実績から把握できる",
        "違法な時間外労働が確認された事業場のうち4,991事業場で月80時間超、2,842事業場で月100時間超の時間外・休日労働が認められ、長時間労働の監督リスクを具体的に把握できる",
        "2026年9月の監督指導運用見直し後も、過重労働による健康障害防止や重大・悪質事案への対応が重要であることを、直前年度の実績と併せて確認できる"
      ],
      audience: ["人事・労務", "企業法務", "労働時間管理担当", "内部監査・コンプライアンス"],
      audienceReason: "労基署監督で実際に指摘される領域を把握し、36協定、実労働時間、未払残業、健康確保、労働時間把握を横断した監査項目へ落とすため。",
      categories: ["労務", "危機管理・コンプライアンス"],
      relatedTopics: [topicSlug],
      relatedIssues: ["overtime-supervision-2026", "overtime-special-clause-health-measures"],
      primarySourceIds: [sourceId, "source-labour-standards-act"],
      whatChanged: "監督実績補完／2026年9月の監督指導運用見直しを読む基礎として、直前年度の長時間労働監督で実際に多かった違反・指導領域を追加した。"
    }]);
  }
})();
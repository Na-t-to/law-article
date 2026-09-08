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

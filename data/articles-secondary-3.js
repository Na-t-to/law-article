window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "employee-stock-compensation-wage-status",
    "title": "従業員向け株式報酬・賃金該当性",
    "categories": ["労務", "会社法・ガバナンス"],
    "summary": "従業員向け株式報酬について、現行会社法上の株式無償交付の扱い、2026年会社法制見直しで示された対象拡大案、労働基準法上の賃金該当性と通貨払原則、制度設計・規程整備上の留意点を整理する。",
    "lastUpdated": "2026-09-07",
    "lastVerified": "2026-09-07",
    "isNew": true,
    "overview": [
      "現行会社法では、上場会社が取締役等に報酬として株式を無償交付する仕組みは設けられている一方、使用人等への同様の無償交付は一般化されておらず、実務では金銭報酬債権の現物出資等を用いる設計が行われています。",
      "2026年3月18日の会社法制見直し中間試案は、使用人等への株式無償交付の対象拡大を検討対象とする一方、労働基準法上の『賃金』該当性について整理が必要であると明示しています。",
      "株式報酬を設計する際は、会社法上の交付方法だけでなく、労働基準法11条・24条、既存の現金賃金との関係、就業規則・報酬規程上の位置付け、株式・金銭のいずれで給付するかを分けて確認する必要があります。"
    ],
    "currentSummary": {
      "facts": [
        "会社法202条の2は上場会社の取締役等に対する報酬等としての株式交付に特則を置いているが、使用人等への株式無償交付を同じ仕組みで一般的に認める現行規定にはなっていない。",
        "法制審議会会社法制（株式・株主総会等関係）部会は2026年3月18日に中間試案を取りまとめ、使用人等への株式無償交付の対象拡大を検討対象とした。中間試案は、結論を得るに当たり労働基準法上の『賃金』該当性の整理が必要であるとしている。",
        "労働基準法11条は賃金を『労働の対償として使用者が労働者に支払うすべてのもの』と定義し、24条は通貨払・直接払・全額払・毎月払等を原則とする。"
      ],
      "interpretations": [
        "株式報酬という名称だけで賃金該当性を一律に判断せず、現金賃金を代替しているか、労働契約・就業規則・報酬規程でどのように位置付けているか、給付条件や金銭給付との関係を制度ごとに確認する必要がある。",
        "経済産業省のインセンティブ報酬ガイダンス等で示される既存の整理は重要な参照材料になるが、RS・RSU・PSU・ストックオプション・ファントムストック等で給付構造が異なるため、同じ要件を機械的に当てはめるのは避けるべきである。"
      ],
      "implications": [
        "新たに従業員向け株式報酬を導入・変更する場合は、現金賃金・賞与を減額して置き換える設計になっていないかを確認する。",
        "就業規則、労働条件通知書、株式報酬規程、取締役会・株主総会資料で、賃金とインセンティブ報酬の位置付けが矛盾しないようにする。",
        "会社法制見直しが具体化した場合は、会社法上の交付手続だけでなく、厚生労働省による賃金該当性の整理や労働基準法24条との関係を併せて確認する。"
      ],
      "uncertain": [
        "使用人等への株式無償交付の対象拡大は中間試案段階であり、最終的な改正内容・要件・施行時期は確定していない。",
        "株式報酬全般について一律に賃金該当性を処理できる行政上の最終整理は確認できず、制度類型ごとの評価が必要である。"
      ]
    },
    "issues": [
      {
        "id": "employee-stock-direct-share-grant",
        "title": "使用人等への株式無償交付はどう見直されようとしているか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "2026年3月の中間試案では、使用人等にも一定の要件で株式を無償交付できるよう会社法上の対象を拡大する方向が検討されているが、現時点では案段階であり成立済みのルールとして扱わない。",
        "exception": "現在利用できる株式報酬スキームは、株式無償交付だけでなく、金銭報酬債権の現物出資、ストックオプションその他の方式があり、方式ごとに法的構成が異なる。",
        "uncertain": "対象会社・対象者・決定手続・労働法上の整理を含む最終案は今後の審議で変わり得る。",
        "sourceIds": ["source-companies-act-current", "source-moj-company-law-interim-2026"]
      },
      {
        "id": "employee-stock-compensation-wage-status",
        "title": "株式報酬は労働基準法上の『賃金』に当たるか",
        "status": "pending",
        "stage": "under_revision",
        "views": [],
        "conclusion": "株式報酬を一律に賃金外と扱うのではなく、労働の対償性、現金賃金との代替関係、制度規程上の位置付け、給付形態等から個別に検討する。中間試案も使用人等への無償交付を制度化する前提として賃金該当性の整理が必要であると明示している。",
        "exception": "金銭で決済するファントムストック等と実株式・新株予約権を交付する制度では、労働基準法24条との問題の現れ方が同じとは限らない。",
        "uncertain": "広範な株式報酬類型に共通する最終的な行政整理は確認できず、今後の厚生労働省等の整理を追う必要がある。",
        "sourceIds": ["source-labour-standards-act", "source-moj-company-law-interim-2026", "source-meti-incentive-compensation-guidance-2025"]
      },
      {
        "id": "employee-stock-compensation-documentation",
        "title": "就業規則・報酬規程と制度設計をどう整合させるか",
        "status": "interpreted",
        "stage": "not_applicable",
        "views": [],
        "conclusion": "株式報酬を導入する場合は、既存の現金賃金を代替する制度か、別建てのインセンティブかを明確にし、就業規則・労働条件通知書・報酬規程・付与契約の記載と実際の運用を整合させる。",
        "exception": "規程に『賃金ではない』と記載するだけで賃金該当性が当然に決まるものではなく、実質的な給付構造と労働の対償性の検討が必要である。",
        "uncertain": "マルス・クローバック等を含む株式報酬固有の労働法上の有効性については、制度類型や事案ごとの検討が残る。",
        "sourceIds": ["source-labour-standards-act", "source-meti-incentive-compensation-guidance-2025"]
      }
    ],
    "sourceIds": ["source-companies-act-current", "source-labour-standards-act", "source-moj-company-law-interim-2026", "source-meti-incentive-compensation-guidance-2025"]
  },
  {
    "slug": "bank-subsidiary-business-succession",
    "title": "銀行子会社・投資専門会社による事業承継支援",
    "categories": ["事業再生・金融", "M&A"],
    "summary": "銀行・銀行持株会社の投資専門子会社による事業承継会社への資金供給について、子会社・議決権保有規制の基本構造と、2026年6月15日施行の銀行法施行規則等改正による投資対象・業務範囲の拡充を整理する。",
    "lastUpdated": "2026-09-07",
    "lastVerified": "2026-09-07",
    "isNew": true,
    "overview": [
      "銀行グループによる事業承継支援では、銀行法上の子会社規制・議決権保有規制を前提に、投資専門会社を通じた資金供給の要件を確認する必要があります。",
      "2026年6月15日に施行された銀行法施行規則等の改正により、投資専門会社の投資対象が拡充され、事業承継会社について上場会社であっても資金供給が可能となりました。",
      "同改正では投資専門会社の業務範囲にM&A仲介業務も追加されており、銀行グループが資本参加とM&A支援を組み合わせる際の選択肢が広がっています。"
    ],
    "currentSummary": {
      "facts": [
        "金融庁は2026年6月12日に銀行法施行規則等の改正内閣府令・監督指針等を公布し、投資専門会社の投資対象拡充と業務範囲拡充を最終化した。",
        "投資対象拡充には、株式会社以外への資金供給、ベンチャービジネス会社へのクロスオーバー投資、上場会社である事業承継会社への資金供給が含まれる。",
        "投資専門会社の業務範囲にはM&A仲介業務が追加された。これらの主要改正は2026年6月15日から施行・適用されている。"
      ],
      "interpretations": [
        "事業承継案件で銀行グループの資金を利用する場合、単なる融資の可否だけでなく、投資主体が銀行本体・投資専門会社・ファンドのどこになるか、子会社規制・議決権保有規制・業務範囲規制を案件構造に沿って確認する必要がある。",
        "上場会社が事業承継会社として投資対象に入ったことで、非上場オーナー企業だけを前提とした案件探索では拾えなかった支援類型が増えた。"
      ],
      "implications": [
        "事業承継・M&A案件では、対象会社の上場有無、承継支援の必要性、投資期間、取得議決権、投資主体を初期段階で整理する。",
        "銀行グループと協働する場合は、資金供給とM&A仲介を同一グループが担う可能性を踏まえ、利益相反管理・情報管理・役割分担も確認する。"
      ],
      "uncertain": [
        "改正施行後の案件蓄積はまだ浅く、上場事業承継会社への投資やM&A仲介業務を組み合わせた実務運用は今後の事例を確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "bank-investment-subsidiary-business-succession-scope",
        "title": "投資専門会社はどの事業承継会社へ資金供給できるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年6月15日施行の改正により、投資専門会社の投資対象が拡充され、事業承継会社については上場会社であっても資金供給の対象とすることができるようになった。",
        "exception": "対象会社が事業承継会社に該当するか、投資主体・議決権保有・投資期間等の具体的要件は銀行法・銀行法施行規則等に沿って個別に確認する。",
        "uncertain": "上場事業承継会社への投資実務は施行直後で事例蓄積が少ない。",
        "sourceIds": ["source-fsa-bank-investment-subsidiary-2026"]
      },
      {
        "id": "bank-investment-subsidiary-ma-intermediation",
        "title": "投資専門会社はM&A仲介業務を行えるか",
        "status": "authoritative",
        "stage": "effective",
        "views": [],
        "conclusion": "2026年改正により、銀行等の投資専門会社の業務範囲にM&A仲介業務が追加され、2026年6月15日から施行・適用されている。",
        "exception": "具体的な業務実施では、銀行グループの利益相反管理、顧客情報管理、監督指針その他の業務運営上の規律も確認する。",
        "uncertain": "資本参加とM&A仲介を同時に行う案件での運用慣行は今後の事例を確認する必要がある。",
        "sourceIds": ["source-fsa-bank-investment-subsidiary-2026"]
      },
      {
        "id": "bank-investment-subsidiary-transaction-structure",
        "title": "事業承継支援の投資主体・議決権・出口をどう設計するか",
        "status": "interpreted",
        "stage": "effective",
        "views": [],
        "conclusion": "案件ごとに銀行本体・投資専門会社・ファンド等の投資主体、取得議決権、保有可能期間、出口方針を整理し、子会社規制・議決権保有規制・業務範囲規制に適合する構造を設計する。",
        "exception": "2026年改正は投資対象・業務範囲を拡充するものであり、銀行法上の子会社・議決権保有規制そのものを一般的に撤廃するものではない。",
        "uncertain": "個別案件で許容される投資・支援の組合せは、対象会社の属性と具体的なファンド・子会社構造に左右される。",
        "sourceIds": ["source-fsa-bank-investment-subsidiary-2026"]
      }
    ],
    "sourceIds": ["source-fsa-bank-investment-subsidiary-2026"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-companies-act-current",
    "title": "会社法（平成17年法律第86号）",
    "type": "law",
    "typeLabel": "法律",
    "authority": "e-Gov法令検索",
    "publishedAt": "2005-07-26",
    "url": "https://laws.e-gov.go.jp/law/417AC0000000086",
    "importance": "最高",
    "whyImportant": "株式の募集・割当てと上場会社の取締役等に対する株式交付の現行条文を確認し、使用人等への無償交付を検討する出発点になる。",
    "topics": ["employee-stock-compensation-wage-status"]
  },
  {
    "id": "source-meti-incentive-compensation-guidance-2025",
    "title": "スタートアップの成長に向けたインセンティブ報酬ガイダンス―人材獲得のためのストックオプション活用術―",
    "type": "guideline",
    "typeLabel": "行政ガイダンス・実務資料",
    "authority": "経済産業省",
    "publishedAt": "2025-02-10",
    "url": "https://www.meti.go.jp/press/2024/02/20250210002/20250210002.html",
    "importance": "高",
    "whyImportant": "ストックオプションを中心とするインセンティブ報酬の制度設計・実務手続を確認でき、従業員向け株式報酬の労務・会社法上の論点を検討する際の公的な実務資料になる。",
    "topics": ["employee-stock-compensation-wage-status"]
  },
  {
    "id": "source-fsa-bank-investment-subsidiary-2026",
    "title": "『銀行法施行規則等の一部を改正する内閣府令』等の公布及びパブリックコメントの結果等について",
    "type": "guideline",
    "typeLabel": "改正内閣府令・監督指針／パブリックコメント結果",
    "authority": "金融庁",
    "publishedAt": "2026-06-12",
    "url": "https://www.fsa.go.jp/news/r7/ginkou/20260612/20260612.html",
    "importance": "最高",
    "whyImportant": "投資専門会社の投資対象拡充、上場事業承継会社への資金供給、M&A仲介業務追加と、主要改正の2026年6月15日施行・適用を最終資料で確認できる。",
    "topics": ["bank-subsidiary-business-succession"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "companies-act-employee-share-grants-review-2026",
    "title": "会社法制見直し・使用人等への株式無償交付",
    "eventType": "policy_review",
    "lawId": "companies-act",
    "lawLabel": "会社法",
    "relatedTopics": ["employee-stock-compensation-wage-status"],
    "effectiveDateStatus": "unknown",
    "sourceIds": ["source-moj-company-law-interim-2026"]
  },
  {
    "id": "banking-regulations-investment-subsidiary-2026",
    "title": "銀行法施行規則等・投資専門会社の投資対象／業務範囲拡充",
    "eventType": "regulation_or_guideline",
    "lawId": "banking-act",
    "lawLabel": "銀行法・銀行法施行規則",
    "relatedTopics": ["bank-subsidiary-business-succession"],
    "effectiveDateStatus": "confirmed",
    "effectiveDates": ["2026-06-15"],
    "effectiveDateSourceIds": ["source-fsa-bank-investment-subsidiary-2026"],
    "matchSourceIds": ["source-fsa-bank-investment-subsidiary-2026"],
    "sourceIds": ["source-fsa-bank-investment-subsidiary-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-tmi-employee-stock-compensation-wage-status-2026",
    "title": "【労働法ブログ】株式報酬の賃金該当性について",
    "publisher": "TMI総合法律事務所",
    "author": "東 駿佑",
    "publishedAt": "2026-06-25",
    "collectedAt": "2026-09-07",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18506.html",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／従業員向け株式報酬・会社法制見直し",
    "status": "adopted",
    "summary": "従業員向け株式報酬について、現行会社法上の株式無償交付の制約と2026年会社法制見直し中間試案を起点に、労働基準法上の『賃金』該当性を整理する実務解説。賃金に該当した場合の通貨払原則、既存の行政資料が示す判断材料、現金賃金との代替、就業規則・報酬規程上の位置付け、株式報酬と金銭決済型報酬の違いまで踏み込んでいる。",
    "whyImportant": [
      "会社法上の株式無償交付の対象拡大と、労働基準法上の賃金該当性という別の法分野を一つの制度設計として接続している",
      "株式報酬を一律に賃金外とみなさず、現金賃金の代替、規程上の位置付け、給付比率等を確認する必要性を具体化している",
      "既存の行政上の整理が退職時の自社株式付与等を前提としていたことを踏まえ、RS・RSU・PSU・ファントムストック等への機械的な転用に注意を促している",
      "中間試案自体が賃金該当性の整理を今後の課題としているため、会社法改正だけを追うと見落としやすい労務側の論点を補完できる"
    ],
    "audience": ["企業法務", "人事・労務", "報酬制度担当", "上場会社・スタートアップのコーポレート担当"],
    "audienceReason": "従業員向け株式報酬を導入・変更する際に、会社法上の交付手続と労働基準法上の賃金規制を分けずに制度・規程・運用へ落とすため。",
    "categories": ["労務", "会社法・ガバナンス"],
    "relatedTopics": ["employee-stock-compensation-wage-status"],
    "relatedIssues": ["employee-stock-direct-share-grant", "employee-stock-compensation-wage-status", "employee-stock-compensation-documentation"],
    "primarySourceIds": ["source-companies-act-current", "source-labour-standards-act", "source-moj-company-law-interim-2026", "source-meti-incentive-compensation-guidance-2025"],
    "reformEventId": "companies-act-employee-share-grants-review-2026",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-moj-company-law-interim-2026"],
    "whatChanged": "新規テーマ作成／従業員向け株式報酬について、会社法上の株式無償交付見直しと労働基準法上の賃金該当性を横断して整理する棚を追加した。"
  },
  {
    "id": "article-tmi-bank-subsidiary-business-succession-2026",
    "title": "銀行子会社による事業承継支援（令和8年6月銀行法施行規則改正を踏まえて）",
    "publisher": "TMI総合法律事務所",
    "author": "溝端 俊介",
    "publishedAt": "2026-08-04",
    "collectedAt": "2026-09-07",
    "url": "https://www.tmi.gr.jp/eyes/blog/2026/18659.html",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・実務解説／銀行子会社・事業承継支援",
    "status": "adopted",
    "summary": "銀行・銀行持株会社の特定子会社（投資専門会社）による事業承継会社への資金供給について、銀行法上の子会社規制・議決権保有規制、事業承継会社の定義・投資期間を整理し、2026年6月15日施行の銀行法施行規則等改正による上場事業承継会社への資金供給や投資対象拡充を実務目線で解説する。",
    "whyImportant": [
      "金融庁の改正概要だけでは追いにくい銀行本体・投資専門会社・事業承継会社の関係を、子会社規制と議決権保有規制から順に整理している",
      "上場会社である事業承継会社も投資対象になったという2026年改正の意味を、既存の事業承継ファンド実務と接続して理解できる",
      "特定子会社を通じた議決権取得・保有可能期間など、案件ストラクチャーを作る際に必要な規制上の確認事項まで踏み込んでいる",
      "銀行グループによる事業承継・M&A支援を、融資だけでなく出資・ファンド・仲介を含む選択肢として検討する入口になる"
    ],
    "audience": ["金融機関法務・企画", "M&A・事業承継担当", "企業法務", "ファンド・投資担当"],
    "audienceReason": "銀行グループの投資専門会社を使った事業承継支援について、2026年改正後の投資対象と銀行法上の構造制約を案件設計へ落とすため。",
    "categories": ["事業再生・金融", "M&A"],
    "relatedTopics": ["bank-subsidiary-business-succession"],
    "relatedIssues": ["bank-investment-subsidiary-business-succession-scope", "bank-investment-subsidiary-ma-intermediation", "bank-investment-subsidiary-transaction-structure"],
    "primarySourceIds": ["source-fsa-bank-investment-subsidiary-2026"],
    "reformEventId": "banking-regulations-investment-subsidiary-2026",
    "reformStageAtPublication": "effective",
    "reformStageSourceIds": ["source-fsa-bank-investment-subsidiary-2026"],
    "whatChanged": "新規テーマ作成／銀行の投資専門会社による事業承継支援について、2026年6月施行の投資対象・業務範囲拡充を含む規制構造を整理する棚を追加した。"
  }
]);

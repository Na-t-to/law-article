window.TOPIC_DATA = (window.TOPIC_DATA || []).concat([
  {
    "slug": "bank-agency-api-baas",
    "title": "銀行代理業・API／BaaS連携・媒介該当性",
    "categories": ["事業再生・金融", "AI・デジタル", "契約"],
    "summary": "金融庁が2026年7月30日に公表した銀行代理業関係の監督指針改正案を基礎に、API・BaaS連携での提供主体・責任表示、顧客情報管理、送客・リンク・比較表示・ランキング等の銀行代理業（媒介）該当性を整理する。2026年9月8日時点では改正案段階であり、最終指針として先取りしない。",
    "lastUpdated": "2026-09-08",
    "lastVerified": "2026-09-08",
    "isNew": true,
    "overview": [
      "銀行と非金融事業者等がAPIを通じて一体的なサービスを提供すると、利用者から見て、誰がアプリを提供し、誰が預金・送金等の銀行サービスを提供し、事故時に誰が責任を負うのかが分かりにくくなる。金融庁の2026年改正案は、この誤認防止と銀行代理業の媒介該当性を同時に具体化する。",
      "媒介該当性は、ウェブサイトへの掲載、リンク設定、アプリからの遷移といった形式だけで決まらず、特定の顧客を銀行との契約締結へ向けて誘引していると評価できるかを、一連の行為全体から実質的に判断する方向が示されている。",
      "銀行が作成した説明をそのまま提示して申込・契約手続を銀行と顧客の間で完結させる場合と、連携事業者が独自に情報を追加・加工し、商品を推奨・説明したり、ランキングやアルゴリズムで特定商品を上位表示したりする場合では、媒介該当性の評価が変わり得る。",
      "2026年7月30日の改正案は8月31日に意見募集を終了したが、金融庁は『パブリックコメント終了後、所要の手続を経て適用予定』としており、2026年9月8日時点で最終化・適用開始は確認できない。現行ルールと改正案を分けて管理する。"
    ],
    "currentSummary": {
      "facts": [
        "銀行法上、銀行のために預金等の受入れ、資金の貸付け等、為替取引を内容とする契約の締結の代理又は媒介を営業として行う銀行代理業には原則として許可が必要である。",
        "金融庁は2026年7月30日、API等を活用した他事業者との連携について、利用者の誤認防止措置と他事業者の行為の銀行代理業（媒介）該当性を明確化する監督指針改正案を公表した。意見募集は8月31日に終了した。",
        "改正案は、連携アプリ等について、提供主体、銀行サービスの内容と提供銀行、銀行と連携事業者の関係、事故時の責任・補償、問合せ先を利用者が容易に確認できる方法で説明することを着眼点とする。『○○バンク』等の名称を用いる場合には、連携サービスの名称であること、銀行サービスは銀行が提供すること等の追加説明も想定する。",
        "改正案は、インターネット上の表示等を用いる場合でも、特定の者を銀行との契約締結へ向けて誘引していると評価できるときは一連の行為が媒介に当たり得るとする一方、銀行が相手方であることと銀行による説明が明示され、連携事業者が独自の情報追加・加工、勧誘・推奨・説明、条件交渉等を行わない場合は媒介に至らないことがあり得るとする。",
        "2018年の銀行法等ガイドラインは、銀行から受ける経済的対価が契約の条件確定・締結への関与の対価かを実質で判断し、対価が銀行取引の成約高等に連動することは銀行代理行為に係る対価であることを推認させる要素になると整理している。"
      ],
      "interpretations": [
        "API・BaaS連携では、銀行代理業の許可要否を契約書の役割分担だけで判断せず、実際の画面、導線、説明文、FAQ、ランキング、レコメンド、申込遷移まで含めてレビューする必要がある。",
        "媒介に至らない送客・情報提供として設計する場合でも、連携サービスの提供主体・銀行サービスの提供主体・責任分界・問合せ先を明確にする利用者保護の検討は別に残る。『許可不要なら表示対応も不要』とはならない。",
        "三宅法律事務所は、2026年改正案が示す誘引行為・UI等の判断要素と、2018年銀行法等ガイドラインの報酬面の判断軸を併せて見る必要があると整理しており、商品設計と報酬設計を分断しない審査が実務上有用である。"
      ],
      "implications": [
        "銀行と提携事業者は、既存のAPI・BaaS連携について、サービス名、提供主体、銀行名、責任・補償、問合せ先がアプリやウェブ上で容易に確認できるか棚卸しする。",
        "提携契約では、銀行提供コンテンツを相手方が加工できる範囲、独自説明・推奨の可否、ランキングやアルゴリズムの設計権限、申込導線への関与、顧客対応の分担を具体化する。",
        "顧客情報を連携事業者が受け取る場合は、情報の受領者と利用目的を明示し、顧客の同意なく流用されないための契約・システム・運用を確認する。",
        "成果連動報酬、成約件数連動、残高連動等の報酬体系がある場合は、2018年銀行法等ガイドラインと実際の誘引行為を併せ、媒介該当性への影響を確認する。",
        "非対面で銀行代理業を行う場合は、銀行代理業者である旨の表示が他の記載と判別しやすい色調・レイアウトになっているかを画面単位で確認する。"
      ],
      "uncertain": [
        "2026年改正案の最終文言、パブリックコメントへの回答、正式な適用開始日は2026年9月8日時点で確認できない。最終公表後に案との差分と適用日を一次資料で再確認する必要がある。"
      ]
    },
    "issues": [
      {
        "id": "bank-api-mediation-boundary",
        "title": "API・送客・リンクが銀行代理業の「媒介」になる境界",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "2026年改正案では、ウェブ表示やリンクという形式ではなく、特定の顧客を銀行との契約締結へ向けて誘引していると評価できるかを一連の行為全体から実質的に判断する。銀行が相手方・説明主体であることを明示し、事業者が独自の追加情報、加工、勧誘・推奨・説明、条件交渉等を行わない場合は媒介に至らないことがあり得る。",
        "exception": "単なるリンクや銀行提供コンテンツの転載でも、独自の推奨・説明と組み合わされる場合や、画面全体として契約締結への誘引が認められる場合は評価が変わり得る。",
        "uncertain": "改正案は未確定であり、最終指針とパブリックコメント回答で判断要素が修正・補足される可能性がある。",
        "sourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026", "source-fsa-bank-law-guideline-2018", "source-bank-act-current"]
      },
      {
        "id": "bank-api-customer-confusion",
        "title": "BaaS・API連携で提供主体・責任をどう表示するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "改正案は、アプリ等の提供主体、銀行サービスの内容・提供銀行、銀行と連携事業者の関係、事故時の責任・補償、問合せ先を、利用者が容易に確認できる場所・方法で説明することを着眼点とする。",
        "exception": "『○○バンク』等の名称を用いる場合は、名称だけで連携事業者自身が銀行サービスを提供しているとの誤認が生じないよう、連携サービス名であることや銀行サービスの実際の提供主体を追加説明する方向が示されている。",
        "uncertain": "最終指針での文言と具体的な表示水準は、パブリックコメント結果を含めて確認する必要がある。",
        "sourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026"]
      },
      {
        "id": "bank-api-content-ranking",
        "title": "比較表示・推奨・ランキング／アルゴリズムをどう設計するか",
        "status": "interpreted",
        "stage": "draft",
        "views": [],
        "conclusion": "銀行提供コンテンツの単純転載やリンク設定だけで直ちに媒介になるわけではないが、連携事業者が情報を加工し、独自に商品を推奨・説明したり、特定の商品を上位表示するデザインやアルゴリズムを設けたりすることは、媒介該当性を高める要素になり得る。",
        "exception": "最終判断は表示やアルゴリズムの存在だけではなく、申込手続、顧客への働きかけ、契約条件への関与等を含む一連の実態による。",
        "uncertain": "どの程度の表示順・パーソナライズ・比較説明が『誘引』に当たるかは個別事案依存であり、最終指針・当局運用の蓄積が必要である。",
        "sourceIds": ["source-fsa-bank-agency-api-majorbanks-diff-2026", "source-fsa-bank-law-guideline-2018"]
      },
      {
        "id": "bank-api-customer-data",
        "title": "連携事業者が受け取る顧客情報をどう管理するか",
        "status": "pending",
        "stage": "draft",
        "views": [],
        "conclusion": "改正案は、連携事業者が顧客情報を受け取る場合、情報の受領者と利用目的を明示し、顧客の同意なく情報が流用されないよう適切な対応を講じることを着眼点とする。",
        "exception": "個人情報保護法その他の既存規律は別途適用されるため、監督指針上の着眼点だけでデータ利用の適法性が決まるわけではない。",
        "uncertain": "最終指針で求められる具体的な説明・同意・管理水準は今後の最終化を確認する。",
        "sourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026"]
      }
    ],
    "sourceIds": ["source-bank-act-current", "source-fsa-bank-law-guideline-2018", "source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026"],
    "practicalImpacts": ["BaaS・API提携契約", "銀行代理業の許可要否審査", "アプリ・ウェブUI／導線", "比較・レコメンド・ランキング設計", "顧客情報・同意管理", "報酬設計", "非対面の標識表示", "提携先モニタリング"]
  }
]);

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-bank-act-current",
    "title": "銀行法",
    "type": "law",
    "typeLabel": "現行法令",
    "authority": "e-Gov法令検索",
    "publishedAt": "1981-06-01",
    "url": "https://laws.e-gov.go.jp/document?lawid=356AC0000000059",
    "importance": "最高",
    "whyImportant": "銀行代理業の定義と許可制度を確認する基礎法令。媒介該当性の検討は銀行法2条14項・52条の36等を起点に行う。",
    "topics": ["bank-agency-api-baas"]
  },
  {
    "id": "source-fsa-bank-law-guideline-2018",
    "title": "銀行法等に関する留意事項について（銀行法等ガイドライン）",
    "type": "government",
    "typeLabel": "行政ガイドライン",
    "authority": "金融庁",
    "publishedAt": "2018-05-30",
    "url": "https://www.fsa.go.jp/news/30/ginkou/20180530/08.pdf",
    "importance": "高",
    "whyImportant": "銀行代理業の対象外となり得る行為と、経済的対価が契約の条件確定・締結への関与の対価に当たるかの判断軸を示す基礎資料。2026年改正案の行為面の判断要素と併読する価値が高い。",
    "topics": ["bank-agency-api-baas"]
  },
  {
    "id": "source-fsa-bank-agency-api-draft-2026",
    "title": "「主要行等向けの総合的な監督指針」等の一部改正（案）の公表について（銀行代理業関係等）",
    "type": "government",
    "typeLabel": "監督指針改正案・パブリックコメント",
    "authority": "金融庁",
    "publishedAt": "2026-07-30",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260730-2/20260730-2.html",
    "importance": "最高",
    "whyImportant": "API等を活用した他事業者との連携における誤認防止措置と銀行代理業（媒介）該当性の明確化を目的とする2026年改正案の公式公表ページ。意見募集終了後も最終化前であることと適用時期の状態を確認できる。",
    "topics": ["bank-agency-api-baas"]
  },
  {
    "id": "source-fsa-bank-agency-api-majorbanks-diff-2026",
    "title": "「主要行等向けの総合的な監督指針」の一部改正（案）（新旧対照表）",
    "type": "government",
    "typeLabel": "監督指針改正案・新旧対照表",
    "authority": "金融庁",
    "publishedAt": "2026-07-30",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260730-2/01.pdf",
    "importance": "最高",
    "whyImportant": "API連携時の提供主体・責任表示、顧客情報保護、インターネット表示を含む誘引行為、許可不要行為、比較サイト・ランキング、非対面の標識表示を具体的に確認できる改正案本文。",
    "topics": ["bank-agency-api-baas"]
  }
]);

window.REFORM_EVENT_DATA = (window.REFORM_EVENT_DATA || []).concat([
  {
    "id": "bank-agency-api-supervisory-guideline-2026-draft",
    "title": "銀行代理業・API連携に関する監督指針・2026年改正案",
    "eventType": "regulation_or_guideline",
    "lawId": "bank-supervisory-guideline-bank-agency-api",
    "lawLabel": "銀行監督指針（銀行代理業・API連携）",
    "relatedTopics": ["bank-agency-api-baas"],
    "effectiveDateStatus": "unknown",
    "sourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-fsa-bank-agency-api-draft-2026",
    "title": "「主要行等向けの総合的な監督指針」等の一部改正（案）の公表について（銀行代理業関係等）",
    "publisher": "金融庁",
    "author": "金融庁監督局銀行第一課ほか",
    "publishedAt": "2026-07-30",
    "collectedAt": "2026-09-08",
    "url": "https://www.fsa.go.jp/news/r8/sonota/20260730-2/20260730-2.html",
    "sourceType": "primary",
    "sourceLabel": "一次資料・監督指針改正案／銀行代理業・API連携",
    "status": "adopted",
    "summary": "銀行等がAPI等を活用して他事業者と連携するサービスについて、利用者の誤認防止措置と他事業者の銀行代理業（媒介）該当性を具体化する監督指針改正案。提供主体・責任・問合せ先、顧客情報、オンライン上の誘引行為、単純リンク・転載、独自説明・推奨、ランキング／アルゴリズム、非対面標識表示まで示す。2026年9月8日時点では意見募集終了後の案段階で、適用日は未確定。",
    "whyImportant": [
      "BaaS・API連携で誰が何を提供し誰が責任を負うのかという誤認防止の具体的な表示事項を確認できる",
      "ウェブ上の表示・送客・リンク・比較表示が銀行代理業の媒介に当たるかを『誘引行為』と一連の実態から判断する方向を一次資料で把握できる",
      "改正案の段階であり、現行ルールとして先取りせず最終化を追う必要があることを公式ページで確認できる"
    ],
    "audience": ["銀行・金融機関の法務・コンプライアンス", "BaaS・FinTech事業者", "事業会社の金融サービス企画", "プロダクト・UI担当"],
    "audienceReason": "API・BaaS連携の企画、画面、契約、顧客情報、銀行代理業の許可要否を、当局の最新改正案に照らして棚卸しするため。",
    "categories": ["事業再生・金融", "AI・デジタル", "契約"],
    "relatedTopics": ["bank-agency-api-baas"],
    "relatedIssues": ["bank-api-mediation-boundary", "bank-api-customer-confusion", "bank-api-content-ranking", "bank-api-customer-data"],
    "primarySourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026", "source-fsa-bank-law-guideline-2018", "source-bank-act-current"],
    "reformEventId": "bank-agency-api-supervisory-guideline-2026-draft",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-fsa-bank-agency-api-draft-2026"],
    "whatChanged": "新規テーマ作成／API・BaaS連携の誤認防止と銀行代理業の媒介該当性を、現行法・2018年ガイドラインと2026年改正案を分けて整理した。"
  },
  {
    "id": "article-fsa-bank-law-guideline-2018",
    "title": "銀行法等に関する留意事項について（銀行法等ガイドライン）",
    "publisher": "金融庁",
    "author": "金融庁総務企画局",
    "publishedAt": "2018-05-30",
    "collectedAt": "2026-09-08",
    "url": "https://www.fsa.go.jp/news/30/ginkou/20180530/08.pdf",
    "sourceType": "primary",
    "sourceLabel": "一次資料・銀行代理業該当性／経済的対価の基礎ガイドライン",
    "status": "adopted",
    "summary": "銀行代理業の対象とならない行為や経済的対価の評価を示す金融庁ガイドライン。銀行から受ける対価が契約の条件確定・締結への関与の対価かを名目ではなく実質で判断し、システム利用料・広告料・顧客同意を得た情報提供料等の例と、銀行取引の成約高等に連動する報酬が媒介対価を推認させる点を示す。",
    "whyImportant": [
      "2026年改正案が行為・UI面を具体化する前提となる、銀行代理業該当性の既存判断枠組みを直接確認できる",
      "報酬の名目ではなく実質で判断すること、成約連動報酬が媒介該当性を推認させることを一次資料で押さえられる",
      "BaaS・送客契約では画面設計だけでなく報酬設計も同じ許可要否審査に含める必要があることを理解できる"
    ],
    "audience": ["銀行・金融機関の法務・コンプライアンス", "FinTech・BaaS事業者", "アライアンス・契約担当"],
    "audienceReason": "2026年改正案の誘引行為基準と既存の報酬面の判断軸を併読し、媒介該当性を一面的に判断しないため。",
    "categories": ["事業再生・金融", "契約"],
    "relatedTopics": ["bank-agency-api-baas"],
    "relatedIssues": ["bank-api-mediation-boundary", "bank-api-content-ranking"],
    "primarySourceIds": ["source-fsa-bank-law-guideline-2018", "source-bank-act-current"],
    "whatChanged": "整理変更なし／2026年改正案と併読する基礎資料として、銀行代理業の対象外行為と経済的対価・成約連動報酬の判断軸を補った。"
  },
  {
    "id": "article-miyake-bank-agency-mediation-2026",
    "title": "「媒介」と「媒介に至らない行為」の境界線―「主要行等向けの総合的な監督指針」等の一部改正（案）（銀行代理業関係等）―（金融規制ニュース）",
    "publisher": "三宅法律事務所",
    "author": "渡邉雅之",
    "publishedAt": "2026-08-01",
    "collectedAt": "2026-09-08",
    "url": "https://www.miyake.gr.jp/notice/%E3%80%8C%E5%AA%92%E4%BB%8B%E3%80%8D%E3%81%A8%E3%80%8C%E5%AA%92%E4%BB%8B%E3%81%AB%E8%87%B3%E3%82%89%E3%81%AA%E3%81%84%E8%A1%8C%E7%82%BA%E3%80%8D%E3%81%AE%E5%A2%83%E7%95%8C%E7%B7%9A%E2%80%95%E3%80%80/",
    "sourceType": "secondary",
    "sourceLabel": "法律事務所・銀行代理業／BaaS・API実務解説",
    "status": "adopted",
    "summary": "金融庁の2026年銀行代理業関係監督指針改正案を、誘引行為、許可不要行為、API連携時の誤認防止、非対面標識表示まで条項別に整理し、2018年銀行法等ガイドラインの報酬面の判断軸や、保険募集・金融商品仲介・貸付媒介・ビジネスマッチングへの示唆まで接続する実務解説。画面・導線・コンテンツ加工・ランキング／アルゴリズム・報酬を一体で確認するチェックポイントを示す。",
    "whyImportant": [
      "単なる改正案の要約ではなく、UI・導線・推奨・説明・ランキング／アルゴリズムが媒介該当性にどう関係するかを実務へ落としている",
      "2018年銀行法等ガイドラインの報酬軸と2026年改正案の行為軸を組み合わせ、契約・画面・報酬を横断して審査する視点を得られる",
      "銀行代理業に限らず、外国銀行代理業務、金融サービス仲介、保険募集、金融商品仲介、貸付媒介等の『媒介』判断への横断的な示唆を整理している"
    ],
    "audience": ["銀行・金融機関の法務・コンプライアンス", "FinTech・BaaS事業者", "事業会社の金融サービス企画", "プロダクト・UI担当"],
    "audienceReason": "改正案を実際の提携契約、画面・導線、ランキング、報酬設計のチェック項目へ落とし込み、許可要否と利用者保護を同時に検討するため。",
    "categories": ["事業再生・金融", "AI・デジタル", "契約"],
    "relatedTopics": ["bank-agency-api-baas"],
    "relatedIssues": ["bank-api-mediation-boundary", "bank-api-customer-confusion", "bank-api-content-ranking", "bank-api-customer-data"],
    "primarySourceIds": ["source-fsa-bank-agency-api-draft-2026", "source-fsa-bank-agency-api-majorbanks-diff-2026", "source-fsa-bank-law-guideline-2018", "source-bank-act-current"],
    "reformEventId": "bank-agency-api-supervisory-guideline-2026-draft",
    "reformStageAtPublication": "proposal",
    "reformStageSourceIds": ["source-fsa-bank-agency-api-draft-2026"],
    "whatChanged": "整理変更なし／改正案の誘引行為・UI・顧客誤認防止を、既存ガイドラインの報酬軸と提携契約・プロダクト実務へ接続する解説を追加した。"
  }
]);

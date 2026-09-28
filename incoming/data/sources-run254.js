(() => {
  if (window.__LAW_INDEX_RUN254_SOURCE_APPLIED__) return;
  window.__LAW_INDEX_RUN254_SOURCE_APPLIED__ = true;
  const additions = [
    {id:"source-egov-waste-management-act-2026",title:"廃棄物の処理及び清掃に関する法律（現行法）",type:"government_material",typeLabel:"一次資料・e-Gov／廃棄物処理法",authority:"e-Gov法令検索",publishedAt:"2026-06-19",url:"https://laws.e-gov.go.jp/law/345AC0000000137",importance:"最高",whyImportant:"排出事業者責任、産業廃棄物の処理委託、マニフェスト、措置命令等の根拠となる廃棄物処理法の現行条文。",topics:["waste-outsourcing-resource-circulation"]},
    {id:"source-env-waste-fair-transaction-guideline-20260413",title:"廃棄物処理業の取引適正化に関するガイドラインの公表について",type:"guideline",typeLabel:"一次資料・環境省／廃棄物処理業の取引適正化",authority:"環境省",publishedAt:"2026-04-13",url:"https://www.env.go.jp/press/press_04040.html",importance:"高",whyImportant:"労務費・燃料費等の上昇を踏まえ、廃棄物処理業の価格転嫁と取引適正化を進めるための行政ガイドライン公表資料。",topics:["waste-outsourcing-resource-circulation"]},
    {id:"source-egov-resource-effective-use-act-20260401",title:"資源の有効な利用の促進に関する法律（2026年4月1日施行時点）",type:"government_material",typeLabel:"一次資料・e-Gov／資源有効利用促進法",authority:"e-Gov法令検索",publishedAt:"2026-04-01",url:"https://laws.e-gov.go.jp/law/403AC0000000048/20260401_507AC0000000052",importance:"高",whyImportant:"2026年4月1日施行の改正を含む資源有効利用促進法の時点法令。再生資源利用、環境配慮設計、自主回収・再資源化等の制度基盤を確認できる。",topics:["waste-outsourcing-resource-circulation"]},
    {id:"source-env-advanced-recycling-certifications-20260430",title:"再資源化事業等高度化法の認定状況",type:"government_material",typeLabel:"一次資料・環境省／再資源化事業等高度化法の認定",authority:"環境省",publishedAt:"2026-04-30",url:"https://www.env.go.jp/page_00463.html",importance:"高",whyImportant:"再資源化事業等高度化法に基づく高度再資源化事業・高度分離回収事業の認定状況を確認でき、2026年4月30日の初回認定を含む制度運用の一次資料。",topics:["waste-outsourcing-resource-circulation"]},
    {id:"source-env-circular-economy-action-plan-20260421",title:"循環経済行動計画",type:"government_material",typeLabel:"一次資料・環境省／循環経済行動計画",authority:"環境省・循環経済に関する関係閣僚会議",publishedAt:"2026-04-21",url:"https://www.env.go.jp/guide/photo_report/report_01160.html",importance:"高",whyImportant:"再生資源供給サプライチェーンの強靱化を掲げ、2030年までに官民で約1兆円の投資を目指す政府の循環経済政策の現在地を示す。",topics:["waste-outsourcing-resource-circulation"]}
  ];
  const normalizeUrl=(value)=>{try{const url=new URL(String(value||"").trim());url.protocol="https:";url.hash="";[...url.searchParams.keys()].forEach((key)=>{if(/^utm_/i.test(key)||["fbclid","gclid","yclid"].includes(key))url.searchParams.delete(key);});url.hostname=url.hostname.toLowerCase();url.pathname=url.pathname.replace(/\/+$/,"")||"/";url.searchParams.sort();return url.toString();}catch{return String(value||"").trim().replace(/#.*$/,"").replace(/\/$/,"");}};
  const existing=Array.isArray(window.SOURCE_DATA)?window.SOURCE_DATA:[];
  const ids=new Set(existing.map((item)=>item&&item.id).filter(Boolean));
  const urls=new Set(existing.map((item)=>normalizeUrl(item&&item.url)).filter(Boolean));
  const fresh=additions.filter((item)=>!ids.has(item.id)&&!urls.has(normalizeUrl(item.url)));
  if(fresh.length) window.SOURCE_DATA=existing.concat(fresh);
})();
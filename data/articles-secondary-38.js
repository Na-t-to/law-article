(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item.slug === "ai-legal-support-attorney-act");
  if (!topic) return;
  topic.lastVerified = "2026-09-08";
  const addUnique = (target, values) => {
    if (!Array.isArray(target)) return;
    values.forEach((value) => { if (!target.includes(value)) target.push(value); });
  };
  addUnique(topic.sourceIds, [
    "source-moj-ai-legal-services-guideline-2026",
    "source-moj-ai-contract-guideline-2023",
    "source-moj-ai-legal-rulemaking-roadmap-2026"
  ]);
  const issueSources = {
    "ai-legal-incident-scope": ["source-moj-ai-legal-services-guideline-2026", "source-moj-ai-contract-guideline-2023"],
    "ai-legal-value-neutral": ["source-moj-ai-legal-services-guideline-2026"],
    "ai-legal-governance": ["source-moj-ai-legal-services-guideline-2026", "source-moj-ai-legal-rulemaking-roadmap-2026"],
    "ai-legal-user-procurement": ["source-moj-ai-legal-services-guideline-2026", "source-moj-ai-legal-rulemaking-roadmap-2026"]
  };
  (topic.issues || []).forEach((issue) => addUnique(issue.sourceIds, issueSources[issue.id] || []));
})();

window.SOURCE_DATA = (window.SOURCE_DATA || []).concat([
  {
    "id": "source-moj-ai-legal-services-guideline-2026",
    "title": "ビジネス分野におけるAI等法務業務支援サービス提供と弁護士法第72条の関係について",
    "type": "government",
    "typeLabel": "法務省・2026年ガイドライン",
    "authority": "法務省大臣官房司法法制部",
    "publishedAt": "2026-08-21",
    "url": "https://www.moj.go.jp/content/001469040.pdf",
    "importance": "最高",
    "whyImportant": "事件性、サービス提供者への行為帰属、価値中立性、企業法務で通常抵触しない利用類型、提供者・利用者のガバナンス上の留意事項を具体化した中心一次資料。",
    "topics": ["ai-legal-support-attorney-act"]
  },
  {
    "id": "source-moj-ai-contract-guideline-2023",
    "title": "AI等を用いた契約書等関連業務支援サービスの提供と弁護士法第72条との関係について",
    "type": "government",
    "typeLabel": "法務省・2023年リーガルテックガイドライン",
    "authority": "法務省大臣官房司法法制部",
    "publishedAt": "2023-08-01",
    "url": "https://www.moj.go.jp/content/001400675.pdf",
    "importance": "最高",
    "whyImportant": "報酬目的、事件性、鑑定その他の法律事務、利用者が弁護士である場合等の基本整理を示し、2026年ガイドラインが補完・拡充する基礎となる一次資料。",
    "topics": ["ai-legal-support-attorney-act"]
  },
  {
    "id": "source-moj-ai-legal-rulemaking-roadmap-2026",
    "title": "AI等を活用した法務業務及びその支援の将来像を見据えたルールメイキングの在り方検討のロードマップについて",
    "type": "government",
    "typeLabel": "法務省・ルールメイキングロードマップ",
    "authority": "法務省大臣官房司法法制部",
    "publishedAt": "2026-08-21",
    "url": "https://www.moj.go.jp/content/001469041.pdf",
    "importance": "高",
    "whyImportant": "2026年ガイドラインを最終到達点とせず、AIを活用した法務業務・支援について継続的にルールメイキングを検討する方針を確認する一次資料。",
    "topics": ["ai-legal-support-attorney-act"]
  }
]);

window.ARTICLE_DATA = (window.ARTICLE_DATA || []).concat([
  {
    "id": "article-jila-ai-legal-services-guideline-2026",
    "title": "＜速報・有識者解説＞ 法務省『ビジネス分野におけるAI等法務業務支援サービス提供と弁護士法第72条の関係について』（令和8年ガイドライン）―対話で学ぶ、組織内弁護士・法務部門のための5つの核心",
    "publisher": "日本組織内弁護士協会（JILA）",
    "author": "渡部友一郎・春日舞",
    "publishedAt": "2026-08-24",
    "collectedAt": "2026-09-08",
    "url": "https://jila.jp/2026/08/6588/",
    "sourceType": "secondary",
    "sourceLabel": "実務解説・AI法務支援／事件性・価値中立性",
    "status": "adopted",
    "summary": "2026年ガイドラインを2023年版との関係から読み解き、対象が契約書等関連業務からビジネス分野のAI法務支援一般・汎用AI・一定のAPI提供へ広がったこと、利用者の入力があっても提供者の設計した自動法務支援機能は提供者の行為として評価され得ること、事件性のある利用への設計・機能上の特化と不適切利用把握後の対応を『価値中立性』の観点から整理する。企業側の通常利用類型、親会社法務部門による子会社支援、組織内弁護士による精査、ベンダーDD・利用規程・表示・エスカレーションまで具体化している。",
    "whyImportant": [
      "2023年版との連続性、新たに追加された対象範囲、行為帰属と価値中立性という難しい論点を原文の注記まで追って整理している",
      "契約レビューだけでなく、リサーチ、内部通報調査、事業再編、内部調査、取締役会支援等の企業法務ユースケースを具体的に分けて読める",
      "ベンダー選定、利用規程、注意表示、濫用把握後のエスカレーションまで、利用企業側で実装できる確認事項へ落としている"
    ],
    "audience": ["企業法務", "組織内弁護士", "リーガルテック事業者", "AIプロダクト担当", "購買・ベンダー管理"],
    "audienceReason": "2026年ガイドラインを条文・判例・注記と企業法務の具体的ユースケースへ接続し、AI利用ルールとベンダーDDを設計するため。",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "relatedTopics": ["ai-legal-support-attorney-act"],
    "relatedIssues": ["ai-legal-incident-scope", "ai-legal-value-neutral", "ai-legal-governance", "ai-legal-user-procurement"],
    "primarySourceIds": ["source-moj-ai-legal-services-guideline-2026", "source-moj-ai-contract-guideline-2023", "source-moj-ai-legal-rulemaking-roadmap-2026"],
    "whatChanged": "整理変更なし／2026年ガイドラインの事件性・価値中立性・通常利用類型を、社内AI利用ルール、ベンダーDD、注意表示、エスカレーションへ落とし込む解説を既存テーマへ追加した。"
  },
  {
    "id": "article-jila-legaltech-guideline-training-2023",
    "title": "臨時研修会レポート｜法務省 x JILA｜法務省幹部をお招きした『リーガルテックガイドライン』研修",
    "publisher": "日本組織内弁護士協会（JILA）",
    "author": "日本組織内弁護士協会（JILA）",
    "publishedAt": "2023-10-19",
    "collectedAt": "2026-09-08",
    "url": "https://jila.jp/2023/10/3692/",
    "sourceType": "secondary",
    "sourceLabel": "実務解説・2023年リーガルテックガイドライン／基礎整理",
    "status": "adopted",
    "summary": "法務省担当者による2023年リーガルテックガイドラインの解説を踏まえ、報酬目的、事件性、サービスの機能・表示、利用者という判断要素を整理する。通常の企業法務における契約締結に向けた話し合いや法的問題点の検討は多くの場合事件性がない一方、紛争発生後の和解契約等は事件性が認められ得ること、非定型入力を法的に処理して具体提案する機能は『鑑定』に該当し得ること、組織内弁護士が自ら精査・修正して利用する場合の整理など、2026年版を読む基礎を確認できる。",
    "whyImportant": [
      "2026年ガイドラインが変更せず引き継いだ報酬目的・事件性・法律事務・弁護士利用の基本整理を確認できる",
      "事件性を契約類型で決めず、当事者関係・経緯・背景事情から個別判断するという基礎を法務省担当者の解説とともに追える",
      "2023年から2026年への行政解釈の連続性と、今回どこが新たに補完・拡充されたのかを比較する基準になる"
    ],
    "audience": ["企業法務", "組織内弁護士", "リーガルテック事業者", "AIプロダクト担当"],
    "audienceReason": "2026年ガイドラインだけでは省略される2023年版の基本要件を確認し、事件性・法律事務・弁護士利用の判断を時系列で理解するため。",
    "categories": ["AI・デジタル", "契約", "危機管理・コンプライアンス"],
    "relatedTopics": ["ai-legal-support-attorney-act"],
    "relatedIssues": ["ai-legal-incident-scope", "ai-legal-user-procurement"],
    "primarySourceIds": ["source-moj-ai-contract-guideline-2023"],
    "whatChanged": "整理変更なし／2026年ガイドラインが維持する2023年版の報酬目的・事件性・法律事務・弁護士利用の基本整理を既存テーマへバックフィルした。"
  }
]);

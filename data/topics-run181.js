(() => {
  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };

  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "personal-information-protection-2026-amendment");
  if (!topic) return;

  const sourceId = "source-ppc-privacy-rulemaking-basic-1-2026";
  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.sourceIds = addUnique(topic.sourceIds, sourceId);
  topic.overview = addUnique(
    topic.overview,
    "2026年9月16日の個人情報保護委員会では、2026年改正法の施行に向けた政令・規則整備の『基本的な考え方（案）』の第1弾として、本人同意が不要となる場合、16歳未満の子供の個人情報、顔特徴データ等の特定生体個人情報について具体的な論点と方向性が示されました。現時点では下位ルールの検討案であり、最終的な政令・規則・ガイドラインではありません。"
  );

  topic.currentSummary = topic.currentSummary || {};
  topic.currentSummary.facts = addUnique(
    topic.currentSummary.facts,
    "2026年9月16日の第369回個人情報保護委員会で、改正法の政令・規則整備に向けた基本的な考え方（案）の第1弾が示され、本人同意の例外、16歳未満の子供、特定生体個人情報が具体化対象となった。"
  );
  topic.currentSummary.interpretations = addUnique(
    topic.currentSummary.interpretations,
    "契約履行に関する本人同意不要例外の『必要やむを得ない』は、必要性があり、かつ他の手段では契約目的を達成できない場合に限定する方向で、単に業務上便利であるという理由だけでは足りない。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "家族によるホテル予約や3-Dセキュア等、本人以外が関与する契約・契約締結前のデータ共有について、同意不要例外を使えるかをデータフロー単位で確認し、必要性と代替手段の有無を記録する。"
  );
  topic.currentSummary.implications = addUnique(
    topic.currentSummary.implications,
    "顔特徴データを扱うカメラ・センサーでは、機器周辺や検知対象者が十分認識できる場所での周知を前提に、表示内容、利用停止等請求への導線、Web上の詳細説明を設計する。"
  );
  topic.currentSummary.uncertain = addUnique(
    topic.currentSummary.uncertain,
    "2026年9月16日資料は政令・規則整備の基本的な考え方と論点の案であり、具体的な規則文言、周知事項・方法、例外類型は今後の委員会審議・ガイドライン等で変更・具体化され得る。"
  );

  const issueMap = new Map((topic.issues || []).map((issue) => [issue && issue.id, issue]));
  const consent = issueMap.get("privacy-2026-consent-exceptions");
  if (consent) {
    consent.sourceIds = addUnique(consent.sourceIds, sourceId);
    consent.conclusion = "改正法は契約履行のため必要やむを得ないことが明らかな場合等について本人同意の例外を拡張する。2026年9月16日の委員会資料では、『必要やむを得ない』を必要性があり他の手段では契約目的を達成できない場合に限定する方向が示され、本人以外の家族によるホテル予約や、契約締結前の3-Dセキュアに伴うデバイス情報提供等を追加的な規則対象の例として検討している。";
    consent.uncertain = "家族予約、契約締結前のデータ共有その他の類型は政令・規則整備に向けた案であり、最終的な規則文言・判断基準・ガイドライン上の例示は今後の審議を確認する。";
  }

  const children = issueMap.get("privacy-2026-children");
  if (children) {
    children.sourceIds = addUnique(children.sourceIds, sourceId);
    children.uncertain = "法定代理人の関与に関する例外や、違法行為等の有無を問わない利用停止等請求の例外は2026年9月16日の委員会資料で具体化の方向が示されたが、最終的な政令・規則・ガイドラインは今後の審議を確認する。";
  }

  const biometric = issueMap.get("privacy-2026-biometric");
  if (biometric) {
    biometric.sourceIds = addUnique(biometric.sourceIds, sourceId);
    biometric.conclusion = "改正法は特定生体個人情報について周知義務、利用停止等請求の特則、オプトアウト提供の禁止を設ける。2026年9月16日の委員会資料では、現段階の対象候補として顔特徴データを挙げ、周知方法についてカメラ・センサー周辺など検知対象者が十分認識できる場所での分かりやすい掲示を軸に具体化する方向が示された。";
    biometric.uncertain = "顔特徴データ以外を対象とするか、周知事項・周知方法、利用停止等請求の例外類型は政令・規則の検討段階であり、最終ルールを確認する必要がある。";
  }

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "家族予約等の第三者契約に伴うデータ共有");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "3-Dセキュア等の契約締結前データ共有");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "顔認証・カメラ周辺の周知表示");
})();

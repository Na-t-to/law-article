(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "enterprise-value-security-business-lending");
  if (!topic) return;

  if (Array.isArray(topic.overview)) {
    topic.overview = topic.overview.map((value) => String(value).startsWith("2026年8月31日の金融審議会への諮問を受け、9月16日に")
      ? "2026年8月31日の金融審議会への諮問を受け、金融庁は2026年9月16日10時から『成長企業への資金供給の在り方等に関するワーキング・グループ』第1回会合を開催予定とし、配付資料を事前公表しました。事業者向け貸付けに係る貸金業規制の柔構造化が正式な検討対象となり、配付資料では国内拠点を持たない外国金融機関等による大企業等向けシンジケートローン参加が具体的な論点として提示されています。"
      : value);
  }

  const facts = topic.currentSummary?.facts;
  if (Array.isArray(facts)) {
    topic.currentSummary.facts = facts.map((value) => String(value).startsWith("金融庁は2026年9月16日の第1回WGで")
      ? "金融庁が2026年9月16日の第1回WGに向けて事前公表した配付資料では、国内拠点を持たない外国金融機関等が、大企業等を借り手とし、国内法令上の権限を持つ者がアレンジャー・エージェントを務めるシンジケートローンに参加する場合について、貸金業登録の人的・財産的要件、3年ごとの更新、債権譲受規制等を柔構造化することが検討論点として提示されている。"
      : value);
  }

  const uncertain = topic.currentSummary?.uncertain;
  if (Array.isArray(uncertain)) {
    topic.currentSummary.uncertain = uncertain.map((value) => String(value).startsWith("第1回WG段階では")
      ? "第1回WGの配付資料段階では、規制緩和の対象となる借り手・融資形態・外国金融機関の要件、残すべき行為規制、国内代表者等の具体的要件は未確定であり、現行の貸金業法上の免許・登録要件が直ちに緩和されたわけではない。"
      : value);
  }
})();

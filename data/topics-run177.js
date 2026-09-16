(() => {
  const topic = (window.TOPIC_DATA || []).find((item) => item && item.slug === "trade-secret-management");
  if (!topic) return;

  const addUnique = (list, value) => {
    const next = Array.isArray(list) ? [...list] : [];
    if (value && !next.includes(value)) next.push(value);
    return next;
  };
  const addUniqueText = (list, value) => addUnique(list, value);

  topic.lastUpdated = "2026-09-16";
  topic.lastVerified = "2026-09-16";
  topic.currentSummary = topic.currentSummary || {};

  topic.currentSummary.facts = addUniqueText(
    topic.currentSummary.facts,
    "2025年3月31日改訂の営業秘密管理指針は、営業秘密の管理単位を法人全体と一律に捉えず、適切に秘密管理されている管理単位で生成AIに営業秘密を学習用データとして利用し、企業内の別管理単位へ出力される場合でも、直ちに秘密管理性が否定されるものではないと整理している。一方、企業外の第三者が利用できる生成AI等へ情報を提供する場合は、秘密管理性が否定され得る。"
  );
  topic.currentSummary.facts = addUniqueText(
    topic.currentSummary.facts,
    "同改訂は非公知性について、公知情報の組合せでも組合せ自体が容易に知られず、又は取得に相当の時間・費用を要して財産的価値が残る場合は非公知性を認め得ること、ダークウェブへの掲載だけで直ちに非公知性を失うわけではないこと、リバースエンジニアリングで容易に抽出できるか否かが非公知性判断に影響することを明確化した。"
  );
  topic.currentSummary.interpretations = addUniqueText(
    topic.currentSummary.interpretations,
    "営業秘密の『非公知性』は、情報がどこかに存在するかだけでなく、一般の者が通常の方法で容易にアクセス・取得できるか、取得に必要な技術・時間・費用がどの程度かという実質で評価する必要がある。AI学習データや製品に化体した技術情報でも同じ観点が重要になる。"
  );
  topic.currentSummary.implications = addUniqueText(
    topic.currentSummary.implications,
    "生成AIを利用する部門ごとに、入力可能な秘密情報、出力先、外部サービスへの送信可否、学習・二次利用条件を整理し、管理単位とアクセス権限が実態に合っているか点検する。"
  );
  topic.currentSummary.implications = addUniqueText(
    topic.currentSummary.implications,
    "営業秘密の棚卸しでは、公開情報を組み合わせたデータセットやAI学習データ、製品から解析可能な技術情報についても、取得困難性・コスト・リバースエンジニアリングの難易度を含めて保護対象性を評価する。"
  );
  topic.currentSummary.uncertain = addUniqueText(
    topic.currentSummary.uncertain,
    "営業秘密管理指針は法的保護の判断で重要な参照資料だが裁判規範そのものではなく、生成AI利用、ダークウェブ流出、リバースエンジニアリング等の具体的事案で秘密管理性・非公知性が認められるかは、情報の性質と実際の管理・取得可能性に応じて個別に判断される。"
  );

  topic.practicalImpacts = addUnique(topic.practicalImpacts, "生成AIの入力・学習・出力と管理単位の設計");
  topic.practicalImpacts = addUnique(topic.practicalImpacts, "AI学習データ・公開情報組合せ・リバースエンジニアリングの非公知性評価");
})();

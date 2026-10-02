(() => {
  const SOURCE = "source-ai-ip-principle-code-filing-20260908";
  const ARTICLE = "article-nishimura-ai-ip-principle-final-20260928";
  const add = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));
  const removeIf = (items, pattern) => (Array.isArray(items) ? items : []).filter((value) => !pattern.test(String(value)));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic) return topic;

    if (topic.slug === "generative-ai-ip-principle-code") {
      const current = topic.currentSummary || {};
      const facts = removeIf(current.facts, /届出開始時期.*別途/);
      facts.push("知的財産戦略本部は2026年9月8日、プリンシプル・コード受入れの届出を2026年10月26日から開始することと届出様式を公表した。");
      const implications = removeIf(current.implications, /届出.*継続確認|開始時期/);
      implications.push("2026年10月26日の届出開始に向け、原則ごとのコンプライ／エクスプレイン判断、公開ページ、社内承認、届出様式を整える。");
      const uncertain = removeIf(current.uncertain, /届出開始時期|2026年9月3日時点/);
      uncertain.push("届出先等の具体的な提出方法は届出開始日に案内予定であり、10月26日時点の公式案内を確認する必要がある。");

      const issues = (topic.issues || []).map((issue) => issue && issue.id === "ai-ip-code-acceptance" ? {
        ...issue,
        status: "authoritative",
        conclusion: "原則ごとに実施・説明の方針を確定し、対外説明の根拠を保存する。受入れ届出は2026年10月26日から開始し、公表済みの様式に沿って準備する。",
        exception: "コードは法令上の義務ではなく、受入れ表明自体も任意である。ただし、受入れ表明後は公開内容と実際の運用の整合性を確保する。",
        uncertain: "届出先等の具体的な提出方法は開始日に別途案内される。",
        sourceIds: add(issue.sourceIds, SOURCE)
      } : issue);

      return {
        ...topic,
        lastUpdated: "2026-09-28",
        lastVerified: "2026-09-28",
        overview: add(removeIf(topic.overview, /届出.*別途|現時点では届出開始/), "受入れ届出は2026年10月26日から開始し、公式の届出様式も公表済みである。届出先等の詳細は開始日に案内される。"),
        sourceIds: add(topic.sourceIds, SOURCE),
        referenceArticleIds: add(topic.referenceArticleIds, ARTICLE),
        currentSummary: {...current, facts, implications, uncertain},
        issues
      };
    }

    if (topic.slug === "generative-ai-ip-rights") {
      const current = topic.currentSummary || {};
      return {
        ...topic,
        lastUpdated: "2026-09-28",
        lastVerified: "2026-09-28",
        sourceIds: add(topic.sourceIds, SOURCE),
        referenceArticleIds: add(topic.referenceArticleIds, ARTICLE),
        currentSummary: {
          ...current,
          facts: add(current.facts, "プリンシプル・コード受入れの届出は2026年10月26日から開始し、届出様式は2026年9月8日に公式公表された。"),
          implications: add(current.implications, "生成AIサービス提供者は、10月26日の届出開始に向けて対外開示と原則ごとのコンプライ／エクスプレイン判断を確定する。"),
          uncertain: add(current.uncertain, "届出先等の具体的な提出方法は開始日に公表予定であり、運用開始時の案内を確認する。")
        }
      };
    }

    return topic;
  });
})();
(() => {
  const addition = {
    id: "update-ai-ip-principle-code-filing-2026-09-08",
    source: "source-ai-ip-principle-code-filing-20260908",
    headline: "生成AI知財プリンシプル・コードの届出開始日・様式が確定",
    publishedAt: "2026-09-08",
    type: "guideline-update",
    typeLabel: "運用開始準備",
    summary: "知的財産戦略本部が、生成AI知財プリンシプル・コード受入れの届出を2026年10月26日から開始することと届出様式を公表した。",
    whatChanged: "「届出開始時期・様式は別途公表待ち」だった整理を、10月26日開始・様式公表済みの実装準備段階へ更新した。届出先等の詳細は開始日に公表予定として残す。",
    affectedTopics: ["generative-ai-ip-principle-code", "generative-ai-ip-rights"],
    affectedIssues: [{
      topic: "generative-ai-ip-principle-code",
      issue: "ai-ip-code-acceptance",
      before: "受入れ届出の開始時期・様式は公式案内待ち",
      after: "2026年10月26日から届出開始。届出様式は公表済みで、届出先等は開始日に案内予定"
    }],
    before: "コード本文と概要開示例は確定済みだが、受入れ届出の開始時期・様式は未確定。",
    after: "10月26日の届出開始日と様式が確定し、事業者は対外開示・社内承認・届出準備を具体的な期限で進められる。",
    keyPoints: [
      "受入れ届出は2026年10月26日開始",
      "届出様式は2026年9月8日に公式公表",
      "届出先等の具体的な提出方法は開始日に案内予定"
    ],
    importance: "重要",
    tags: ["AI・デジタル", "知的財産", "危機管理・コンプライアンス"],
    confidence: "fact"
  };
  const existing = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  if (!existing.some((item) => item && item.id === addition.id)) {
    window.UPDATE_DATA = existing.concat(addition);
  }
})();
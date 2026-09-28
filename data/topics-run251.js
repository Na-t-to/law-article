(() => {
  if (window.__LAW_INDEX_RUN251_TOPIC_APPLIED__) return;
  window.__LAW_INDEX_RUN251_TOPIC_APPLIED__ = true;

  const TOPIC = "fair-subcontract-transactions";
  const ISSUE = "toriteki-price-consultation";
  const SOURCE = "source-jftc-petroleum-price-pass-through-20260925";
  const addUnique = (items, value) => Array.from(new Set([...(Array.isArray(items) ? items : []), value].filter(Boolean)));

  window.TOPIC_DATA = (Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : []).map((topic) => {
    if (!topic || topic.slug !== TOPIC) return topic;

    const currentSummary = topic.currentSummary || { facts: [], interpretations: [], implications: [], uncertain: [] };
    const issues = (Array.isArray(topic.issues) ? topic.issues : []).map((issue) => {
      if (!issue || issue.id !== ISSUE) return issue;
      return {
        ...issue,
        conclusion: "受託側の価格協議の申出を受け止め、必要な情報を踏まえて実質的な協議を行い、その過程を説明できるよう記録する。価格転嫁に応じない場合は、独占禁止法上も理由を書面・電子メール等で回答せず価格を据え置くことが問題となり得るため、協議結果と理由を記録・回答する。",
        exception: "相手の要求額を必ず受け入れる義務ではなく、協議の内容と価格決定の合理性を個別に見る。また、取適法の適用対象外でも、取引上優越した地位にある発注者による一方的な価格据置き等は独占禁止法上の優越的地位の濫用として問題となり得る。",
        uncertain: "2026年9月の緊急調査ではサプライチェーン下流ほど転嫁が進みにくい傾向等が確認され、公取委は令和8年度調査と立入調査を継続して年内に結果公表を予定しているため、業種別の執行・注意喚起の具体化を継続確認する。",
        sourceIds: addUnique(issue.sourceIds, SOURCE)
      };
    });

    return {
      ...topic,
      lastUpdated: "2026-09-28",
      sourceIds: addUnique(topic.sourceIds, SOURCE),
      practicalImpacts: addUnique(addUnique(topic.practicalImpacts, "価格協議を申し出やすい受付・エスカレーション設計"), "価格転嫁を受け入れない場合の理由回答・記録"),
      issues,
      currentSummary: {
        ...currentSummary,
        facts: addUnique(
          addUnique(
            addUnique(currentSummary.facts, "公取委の2026年9月25日緊急調査では、石油関連製品等の価格高騰について15万名へ回答を依頼し27,622名が回答した。影響があった受注者のうち、発注者との協議で価格転嫁を一部でも受け入れてもらえたとの回答は51.7％だった。"),
            "同調査では、現時点で価格協議を申し出ていない受注者が38.5％おり、発注者との力関係や一定時期にしか価格改定を行わない商慣習など、協議を申し出づらい事情も確認された。"
          ),
          "価格転嫁を受け入れてもらえなかった受注者のうち、発注者から書面・電子メール等で理由回答があったのは17.5％で、口頭説明のみが55.2％、説明・回答ともになしが27.4％だった。公取委は価格転嫁が円滑でない業種の優越的地位濫用と取適法違反について厳正に対応する方針を示している。"
        ),
        interpretations: addUnique(
          addUnique(currentSummary.interpretations, "価格協議の実効性は、申出が来た後に応答するだけでなく、取引上の力関係や社内の価格改定時期が受託側の申出を事実上妨げていないかまで点検する必要がある。"),
          "価格転嫁を受け入れない場合は、結論だけでなく、検討したコスト上昇要因・判断根拠・回答内容を後から確認できる形で残すことが、独占禁止法上の一方的な価格据置きリスクと取適法上の協議義務の双方への対応になる。"
        ),
        implications: addUnique(
          addUnique(currentSummary.implications, "価格改定の受付窓口、申出の方法、担当者から決裁者へのエスカレーションを明示し、取引先が価格協議を申し出られる状態を作る。"),
          "価格転嫁を全部又は一部受け入れない場合は、検討材料と理由を文書・電子メール等で回答し、協議日時・参加者・提示資料・回答を案件単位で保存する。"
        )
      }
    };
  });
})();
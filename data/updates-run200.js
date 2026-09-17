(() => {
  const addition = {
    id: "update-economic-security-oesa-2026-09-17",
    source: "source-kanpo-economic-security-effective-20260916",
    headline: "OESA等の主要改正が9月18日施行、基本指針も確定",
    publishedAt: "2026-09-17",
    type: "law-update",
    typeLabel: "施行準備",
    summary: "改正経済安全保障推進法・JBIC法について、OESA等の主要規定の施行日が2026年9月18日に確定し、OESA基本指針で対象事業・認定基準・情報管理が具体化した。",
    whatChanged: "『公布後1年以内・基本指針待ち』だったOESA等を、9月18日施行・確定基本指針に基づく実装段階へ更新した。医療分野の基幹インフラ追加は未施行として分離した。",
    affectedTopics: ["economic-security-promotion-act-2026-oesa"],
    affectedIssues: [
      {
        topic: "economic-security-promotion-act-2026-oesa",
        issue: "economic-security-oesa-jbic-2026",
        before: "施行日・基本指針・認定運用を継続確認",
        after: "2026年9月18日施行。対象事業・認定基準・情報管理は9月11日基本指針で確定"
      },
      {
        topic: "economic-security-promotion-act-2026-oesa",
        issue: "economic-security-medical-infrastructure-2026",
        before: "改正法成立・施行日未確定",
        after: "9月18日施行の対象外であることを明示し、引き続き施行日・下位ルール待ちとして管理"
      }
    ],
    before: "OESA・不可欠役務・官民協議会等は相対的な施行期限と今後の基本指針を追跡。",
    after: "OESA等の主要規定を2026年9月18日施行として管理し、確定したOESA基本指針から認定・情報管理の実務を追跡。",
    keyPoints: [
      "OESA等の主要改正規定は2026年9月18日施行",
      "OESA基本指針は対象類型、実施体制・資金調達、情報管理を認定基準として具体化",
      "医療分野の基幹インフラ追加は別段階で、9月18日施行と混同しない"
    ],
    importance: "最重要",
    tags: ["経済安全保障", "国際取引"],
    confidence: "fact"
  };

  if (!(window.UPDATE_DATA || []).some((item) => item?.id === addition.id)) {
    window.UPDATE_DATA = (window.UPDATE_DATA || []).concat([addition]);
  }
})();

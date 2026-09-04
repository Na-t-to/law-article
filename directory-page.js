(() => {
  const page = document.body.dataset.directoryPage;
  const topics = Array.isArray(window.TOPIC_DATA) ? window.TOPIC_DATA : [];
  const sources = Array.isArray(window.SOURCE_DATA) ? window.SOURCE_DATA : [];
  const updates = Array.isArray(window.UPDATE_DATA) ? window.UPDATE_DATA : [];
  const reformEvents = Array.isArray(window.REFORM_EVENT_DATA) ? window.REFORM_EVENT_DATA : [];
  const allArticles = Array.isArray(window.ARTICLE_DATA) ? window.ARTICLE_DATA : [];
  const articles = (window.uniqueKnowledgeArticles?.(allArticles) || allArticles).filter((article) => article.status === "adopted");
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const pad = (value) => String(value).padStart(2, "0");

  window.assertKnowledgeData?.(topics, sources, allArticles);

  const latestUpdateFor = (topic) => updates.filter((update) => update.affectedTopics.includes(topic.slug)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  const topicsForArticle = (article) => article.relatedTopics.map((slug) => topics.find((topic) => topic.slug === slug)).filter(Boolean);

  if (page === "topics") {
    let selectedField = "all";
    let filtersExpanded = false;
    const collapsedFieldLimit = 8;
    const preferredFields = ["AI・デジタル", "個人情報", "労務", "契約", "会社法", "消費者法", "独占禁止法・競争法", "情報セキュリティ", "知的財産", "M&A", "国際取引"];
    const availableFields = [...new Set(topics.flatMap((topic) => topic.categories))];
    const fields = [...preferredFields.filter((field) => availableFields.includes(field)), ...availableFields.filter((field) => !preferredFields.includes(field)).sort((left, right) => left.localeCompare(right, "ja"))];

    const renderFilters = () => {
      const collapsedFields = fields.slice(0, collapsedFieldLimit);
      const selectedIsHidden = selectedField !== "all" && !collapsedFields.includes(selectedField);
      const visibleFields = filtersExpanded ? fields : [...collapsedFields, ...(selectedIsHidden ? [selectedField] : [])];
      const hiddenCount = Math.max(0, fields.length - collapsedFieldLimit);
      const buttons = ["all", ...visibleFields].map((field) => {
        const label = field === "all" ? "すべて" : field;
        const count = field === "all" ? topics.length : topics.filter((topic) => topic.categories.includes(field)).length;
        return `<button class="field-filter${selectedField === field ? " is-active" : ""}" type="button" data-field="${escapeHtml(field)}"><span>${escapeHtml(label)}</span><small>${pad(count)}</small></button>`;
      }).join("");
      const more = hiddenCount ? `<button class="field-filter filter-more" type="button" data-filter-more aria-expanded="${filtersExpanded ? "true" : "false"}"><span>${filtersExpanded ? "表示を減らす" : "さらに表示"}</span><small>${filtersExpanded ? "−" : `+${hiddenCount}`}</small></button>` : "";
      document.querySelector("#fieldFilters").innerHTML = buttons + more;
    };

    const renderTopics = () => {
      const visible = topics.filter((topic) => selectedField === "all" || topic.categories.includes(selectedField)).sort((left, right) => right.lastUpdated.localeCompare(left.lastUpdated));
      document.querySelector("#topicList").innerHTML = visible.length ? visible.map((topic) => {
        const latest = latestUpdateFor(topic);
        return `<a class="topic-row" href="topics/${escapeHtml(topic.slug)}.html"><div class="topic-name-cell"><div class="topic-name-line"><strong>${escapeHtml(topic.title)}</strong>${topic.isNew ? `<span class="new-badge">NEW</span>` : ""}</div><div class="topic-categories">${topic.categories.map((category) => `<span>${escapeHtml(category)}</span>`).join(" / ")}</div></div><div class="topic-stat"><strong>${pad(topic.issues.length)}</strong><span>論点</span></div><div class="topic-stat"><strong>${pad(topic.sourceIds.length)}</strong><span>主要資料</span></div><div class="topic-change"><strong>最終更新 <time datetime="${escapeHtml(topic.lastUpdated)}">${escapeHtml(topic.lastUpdated)}</time></strong><small>${latest ? escapeHtml(latest.headline) : ""}</small></div></a>`;
      }).join("") : `<div class="empty-inline">この分野のテーマはまだ登録されていません。</div>`;
    };

    document.querySelector("#topicCount").innerHTML = `<strong>${pad(topics.length)}</strong><span>テーマ</span>`;
    document.querySelector("#fieldFilters").addEventListener("click", (event) => {
      const moreButton = event.target.closest("[data-filter-more]");
      if (moreButton) {
        filtersExpanded = !filtersExpanded;
        renderFilters();
        return;
      }
      const button = event.target.closest("[data-field]");
      if (!button) return;
      selectedField = button.dataset.field;
      renderFilters();
      renderTopics();
    });
    renderFilters();
    renderTopics();
  }

  if (page === "reforms") {
    const selectedLaw = new URLSearchParams(window.location.search).get("law");
    const reformInfo = (article) => {
      const inferred = window.getLegalReformInfo?.(article, topics) || { isReform: false };
      return { isReform: inferred.isReform };
    };
    const reformLaw = (article) => {
      if (window.getLegalReformLaw) return window.getLegalReformLaw(article, topics);
      const topic = topicsForArticle(article)[0];
      return topic ? { id: `topic-${topic.slug}`, label: topic.title } : { id: "other-legal-reform", label: "その他の法改正・制度変更" };
    };
    const eventForArticle = (article) => {
      if (article.reformEventId) return reformEvents.find((event) => event.id === article.reformEventId) || null;
      const primarySourceIds = Array.isArray(article.primarySourceIds) ? article.primarySourceIds : [];
      const matches = reformEvents.filter((event) => {
        if (Array.isArray(event.articleIds) && event.articleIds.includes(article.id)) return true;
        return Array.isArray(event.matchSourceIds) && event.matchSourceIds.some((id) => primarySourceIds.includes(id));
      });
      return matches.length === 1 ? matches[0] : null;
    };
    const articleEffectiveDate = (article) => window.getLegalReformEffectiveDate?.(article, topics) || null;
    const eventTiming = (event) => window.getLegalReformEventTiming?.(event) || null;
    const formatPublishedDate = (value) => {
      const [year, month, day] = value.split("-").map(Number);
      return `${year}年${month}月${day}日公開`;
    };
    const reforms = articles.map((article) => {
      const event = eventForArticle(article);
      const law = event ? { id: event.lawId, label: event.lawLabel } : reformLaw(article);
      const reform = reformInfo(article);
      if (event) reform.isReform = true;
      return { article, reform, event, law };
    }).filter(({ reform }) => reform.isReform).sort((left, right) => (right.article.collectedAt || "").localeCompare(left.article.collectedAt || "") || right.article.publishedAt.localeCompare(left.article.publishedAt));

    const now = new Date();
    const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const timingStateFor = (group) => {
      if (group.event) {
        const timing = group.eventTiming;
        if (!timing) return "unverified";
        if (["planned", "relative", "phased"].includes(timing.status)) return "pending";
        if (timing.sortKey) return timing.sortKey >= todayKey ? "upcoming" : "completed";
        return "unverified";
      }
      if (group.effectiveDate?.sortKey) return group.effectiveDate.sortKey >= todayKey ? "upcoming" : "completed";
      return "unorganized";
    };
    const stateRank = Object.freeze({ upcoming: 0, pending: 1, completed: 2, unverified: 3, unorganized: 3 });
    const stateLabel = Object.freeze({ upcoming: "施行前・適用前", pending: "予定・段階施行", completed: "施行済み・適用済み", unverified: "施行時期未確認", unorganized: "改正イベント未整理" });

    const groups = [...reforms.reduce((map, item) => {
      const groupId = item.event ? `event-${item.event.id}` : `legacy-${item.law.id}`;
      if (!map.has(groupId)) {
        map.set(groupId, {
          id: groupId,
          title: item.event?.title || item.law.label,
          law: item.law,
          event: item.event,
          eventTiming: item.event ? eventTiming(item.event) : null,
          items: [],
          effectiveDate: null,
          latestCollectedAt: ""
        });
      }
      const group = map.get(groupId);
      group.items.push(item);
      if ((item.article.collectedAt || "") > group.latestCollectedAt) group.latestCollectedAt = item.article.collectedAt;
      if (!group.event) {
        const candidate = articleEffectiveDate(item.article);
        if (candidate && (!group.effectiveDate || candidate.sortKey > group.effectiveDate.sortKey)) group.effectiveDate = candidate;
      }
      return map;
    }, new Map()).values()].map((group) => ({ ...group, timingState: timingStateFor(group) })).sort((left, right) => {
      const leftKey = left.event ? (left.eventTiming?.sortKey || "") : (left.effectiveDate?.sortKey || "");
      const rightKey = right.event ? (right.eventTiming?.sortKey || "") : (right.effectiveDate?.sortKey || "");
      const leftRank = stateRank[left.timingState];
      const rightRank = stateRank[right.timingState];
      if (leftRank !== rightRank) return leftRank - rightRank;
      if (leftKey && rightKey) return rightKey.localeCompare(leftKey) || right.latestCollectedAt.localeCompare(left.latestCollectedAt);
      if (leftKey) return -1;
      if (rightKey) return 1;
      if (left.timingState !== right.timingState) return left.timingState === "unverified" ? -1 : 1;
      if (Boolean(left.event) !== Boolean(right.event)) return left.event ? -1 : 1;
      return right.latestCollectedAt.localeCompare(left.latestCollectedAt);
    });

    const effectiveLabel = (group) => {
      if (group.event) return group.eventTiming?.label || "施行時期 未登録";
      if (group.effectiveDate) return `施行日 ${group.effectiveDate.label}（記事単位の暫定整理）`;
      return "改正イベント未整理";
    };
    const renderGroup = (group) => {
      const selected = selectedLaw && (selectedLaw === group.law.id || selectedLaw === group.event?.id);
      const meta = group.event ? `法令・制度 ${group.law.label} / 最終追加 ` : "最終追加 ";
      return `<details class="reform-law-group" data-timing-state="${escapeHtml(group.timingState)}" id="${escapeHtml(group.id)}"${selected ? " open" : ""}><summary><div><strong>${escapeHtml(group.title)}</strong><small>${escapeHtml(meta)}<time datetime="${escapeHtml(group.latestCollectedAt)}">${escapeHtml(group.latestCollectedAt)}</time><b class="reform-state-badge">${escapeHtml(stateLabel[group.timingState])}</b></small></div><span class="reform-effective-date">${escapeHtml(effectiveLabel(group))}</span><span class="reform-count">${pad(group.items.length)}件</span><em>記事を見る</em></summary><div class="reform-law-articles">${group.items.map(({ article }) => `<article><div><a href="article.html?id=${encodeURIComponent(article.id)}"><strong>${escapeHtml(article.title)}</strong></a><small>${escapeHtml(article.publisher)} / ${escapeHtml(article.sourceLabel)}</small></div><time class="reform-published-date" datetime="${escapeHtml(article.publishedAt)}">${escapeHtml(formatPublishedDate(article.publishedAt))}</time></article>`).join("")}</div></details>`;
    };
    const sections = [
      { states: ["upcoming"], label: "施行前・適用前", hint: "確定した施行・適用日が遅いものから表示" },
      { states: ["pending"], label: "予定・段階施行・時期未確定", hint: "予定日、相対期日、段階施行を確定日と分けて表示" },
      { states: ["completed"], label: "施行済み・適用済み", hint: "確定日が新しいものから表示" },
      { states: ["unverified", "unorganized"], label: "未確認・未整理", hint: "施行時期または改正イベントの整理待ち" }
    ];

    const eventCount = groups.filter((group) => group.event).length;
    const unorganizedArticleCount = groups.filter((group) => !group.event).reduce((sum, group) => sum + group.items.length, 0);
    document.querySelector("#reformCount").innerHTML = `<strong>${pad(eventCount)}</strong><span>改正イベント${unorganizedArticleCount ? ` / 未整理 ${pad(unorganizedArticleCount)}記事` : ""}</span>`;
    document.querySelector("#reformList").innerHTML = groups.length ? sections.map((section) => {
      const sectionGroups = groups.filter((group) => section.states.includes(group.timingState));
      if (!sectionGroups.length) return "";
      return `<section class="reform-status-section" data-timing-section="${escapeHtml(section.states[0])}"><div class="reform-status-heading"><strong>${escapeHtml(section.label)}</strong><small>${escapeHtml(section.hint)}</small><span>${pad(sectionGroups.length)}件</span></div>${sectionGroups.map(renderGroup).join("")}</section>`;
    }).join("") : `<div class="empty-inline">法改正に該当する記事・資料はまだありません。</div>`;
    if (selectedLaw) {
      const target = groups.find((group) => selectedLaw === group.law.id || selectedLaw === group.event?.id);
      if (target) document.querySelector(`#${CSS.escape(target.id)}`)?.scrollIntoView({ block: "start" });
    }
  }
})();

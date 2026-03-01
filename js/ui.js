// UI rendering functions
import state from './state.js';
import { getProgress, isDayUnlocked, renderStreak, updateStreakIfNeeded, saveProgress } from './progress.js';
import { getRecHistory } from './save.js';
import { drawWaveform, renderScoreRing } from './speech/pronunciation.js';

const $ = s => document.querySelector(s);

/* ---- Category Tabs ---- */
export function renderCategoryTabs(LIFE_CATEGORIES) {
  const el = $('#categoryTabs');
  if (!el) return;
  const cats = LIFE_CATEGORIES || [];
  if (!cats.length) { el.innerHTML = ''; return; }
  let html = '<button class="cat-tab' + (state.activeCategoryFilter === null ? ' active' : '') + '" onclick="window.filterCategory(null)">\u5168\u90E8</button>';
  for (const c of cats) {
    html += `<button class="cat-tab${state.activeCategoryFilter === c.id ? ' active' : ''}" onclick="window.filterCategory('${c.id}')">${c.label}</button>`;
  }
  el.innerHTML = html;
}

/* ---- Learning Step Highlight ---- */
export function updateLearningStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('lstep' + i);
    if (!el) continue;
    el.classList.remove('active', 'done');
    if (i < stepNum) el.classList.add('done');
    else if (i === stepNum) el.classList.add('active');
  }
}

/* ---- Render Recording Comparison ---- */
export function renderRecCompare(getSentences) {
  const el = document.getElementById('recCompare');
  if (!el) return;
  const s = getSentences()[state.idx];
  if (!s) { el.innerHTML = ''; return; }
  const hasRec = state.recBlob && state.recSentenceId === s.id;
  const history = getRecHistory(s.id);
  if (!hasRec && history.length === 0) { el.innerHTML = ''; return; }
  let html = '<div class="compare-area">';
  html += '<div class="compare-label">\u5F55\u97F3\u5BF9\u6BD4</div>';
  if (hasRec) {
    html += `<div class="compare-btns">
      <button class="compare-btn native" id="cmpNative" onclick="window.playNative()">&#9654; \u6807\u51C6\u53D1\u97F3</button>
      <button class="compare-btn user" id="cmpUser" onclick="window.playUser()">&#9679; \u4F60\u7684\u53D1\u97F3</button>
    </div>
    <div class="waveform-wrap">
      <div class="waveform-box"><label>\u6807\u51C6\u53D1\u97F3</label><canvas class="waveform-canvas" id="waveNative"></canvas></div>
      <div class="waveform-box"><label>\u4F60\u7684\u53D1\u97F3</label><canvas class="waveform-canvas" id="waveUser"></canvas></div>
    </div>
    <div class="score-wrap">
      <div class="score-ring-container" id="scoreRing"></div>
      <div class="score-label">\u8282\u594F\u5339\u914D</div>
      <div class="score-detail" id="scoreDetail"></div>
    </div>`;
  }
  if (history.length > 0) {
    html += '<div class="rec-history"><div class="rec-history-label">\u6700\u8FD1\u5F55\u97F3</div><div class="rec-history-list">';
    history.forEach((h, i) => {
      const c = h.score >= 70 ? 'var(--ok)' : h.score >= 40 ? 'var(--acc)' : 'var(--red)';
      const t = new Date(h.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      html += `<div class="rec-hist-item" onclick="window.playHistRec(${i})">
        <span class="rec-hist-score" style="color:${c}">${h.score}</span>
        <span class="rec-hist-play">\u25B6</span>
        <span class="rec-hist-time">${t}</span>
      </div>`;
    });
    html += '</div></div>';
  }
  html += '</div>';
  el.innerHTML = html;
  // Re-draw cached waveforms
  if (hasRec && state._userAudioBuf) {
    setTimeout(() => {
      drawWaveform(state._userAudioBuf, 'waveUser');
      if (state._nativeAudioBuf) drawWaveform(state._nativeAudioBuf, 'waveNative');
    }, 30);
  }
  if (hasRec && state.recScore !== null) {
    renderScoreRing(state.recScore, 0, 0, state.recUserDur || 0, state.recNativeDur || 0);
  }
}

/* ---- Render Day Switcher ---- */
export function renderDaySwitcher(ALL_DAYS, dayMeta, getGeneratedDay) {
  const days = [...dayMeta];
  // Add generated days (15-20)
  for (let gd = 15; gd <= 20; gd++) {
    const gen = getGeneratedDay(gd);
    const cats = [...new Set(gen.sentences.map(s => s.cat))].slice(0, 2).map(c => (c.charAt(0).toUpperCase() + c.slice(1))).join('+');
    days.push({ n: gd, label: `\u7B2C${gd}\u5929`, sub: cats || '\u7EFC\u5408', data: gen.sentences });
  }
  let pills = '', overview = '';
  for (const d of days) {
    const p = getProgress(d.n);
    const unlocked = isDayUnlocked(d.n);
    const pct = d.data.length ? Math.round(p.learned.length / d.data.length * 100) : 0;
    const badge = !unlocked ? '\u672A\u89E3\u9501' : p.quizBest > 0 ? `${p.quizBest}%` : d.n > 1 && pct === 0 ? '\u65B0' : `${pct}%`;
    pills += `<button class="day-pill${state.currentDay === d.n ? ' active' : ''}${!unlocked ? ' locked' : ''}" onclick="switchDay(${d.n})">
      <span class="day-pill-label">${d.label}</span>
      <span class="day-pill-sub">${d.sub}</span>
      <span class="day-pill-badge">${badge}</span>
    </button>`;
    overview += `<span class="day-ov-badge${state.currentDay === d.n ? ' active' : ''}${!unlocked ? ' locked' : ''}">${d.label} ${unlocked ? (p.quizBest >= 60 ? '\u901A\u8FC7' : pct > 0 ? '...' : '\u65B0') : '--'} ${unlocked ? pct + '%' : '\u65B0'}</span>`;
  }
  $('#daySwitcher').innerHTML = pills;
  $('#dayOverview').innerHTML = overview;
  $('#dayBadge').textContent = `\u7B2C${state.currentDay}\u5929`;
  // Auto-scroll
  const activePill = $('#daySwitcher .day-pill.active');
  if (activePill) activePill.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
}

/* ---- Main Render ---- */
export function render(deps) {
  const { getSentences, getScenes, aiEngine, LIFE_CATEGORIES, SR, Quiz, DailyChallenge, ALL_DAYS, dayMeta, getGeneratedDay, ShadowMode, stopRecording: stopRec } = deps;

  if (state.isRecording) stopRec();
  // Clean up rhythm animation
  state.rhythmTimers.forEach(t => clearTimeout(t));
  state.rhythmTimers = [];
  // Stop comparison audio
  if (state.cmpAudio) { state.cmpAudio.pause(); state.cmpAudio = null; }

  const sents = getSentences();
  const scenes = getScenes();
  if (!sents.length) {
    $('#card').innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--dim)"><p style="font-size:28px;margin-bottom:12px;font-weight:900">---</p><p>\u4ECA\u5929\u6682\u65E0\u53E5\u5B50\u52A0\u8F7D\u3002</p></div>';
    $('#count').textContent = '0 / 0';
    $('#prog').style.width = '0%';
    return;
  }
  if (state.idx >= sents.length) state.idx = sents.length - 1;
  if (state.idx < 0) state.idx = 0;
  const s = sents[state.idx];
  if (!s) return;
  const sc = scenes[s.id] || { icon: "...", colors: ["#6366f1", "#818cf8"], title: "", sub: "" };
  const p = getProgress();
  const tog = $('#cnToggle');
  tog.classList.toggle('on', state.cnMode);
  tog.setAttribute('aria-checked', String(state.cnMode));
  const pctVal = Math.round((state.idx + 1) / sents.length * 100);
  $('#prog').style.width = pctVal + '%';
  const progBar = $('#progBar');
  if (progBar) { progBar.setAttribute('aria-valuenow', String(pctVal)); }
  $('#count').textContent = `${state.idx + 1} / ${sents.length}`;
  $('#prev').disabled = state.idx === 0;
  $('#next').disabled = state.idx === sents.length - 1;

  const dots = s.words.map((w, i) => {
    const stressed = s.stress[i] >= 0.8;
    const mid = s.stress[i] >= 0.4 && s.stress[i] < 0.8;
    const size = stressed ? 36 : mid ? 22 : 14;
    const cls = stressed ? 'big' : 'small';
    const lblCls = stressed ? 'loud' : '';
    return `<div class="stress-word"><div class="stress-dot ${cls}" style="width:${size}px;height:${size}px"></div><span class="stress-label ${lblCls}">${stressed ? w.toUpperCase() : w}</span></div>`;
  }).join('');

  // Phoneme tips
  let phonemeTipsHtml = '';
  if (aiEngine && aiEngine.phonemeMapper) {
    try {
      const sentenceErrors = aiEngine.phonemeMapper.getSentenceErrors(s.words);
      if (sentenceErrors.length > 0) {
        phonemeTipsHtml = '<div class="section"><div class="section-label">\u5E38\u89C1\u9519\u8BEF\uFF08\u4E2D\u56FD\u4EBA\u6613\u9519\uFF09</div>';
        sentenceErrors.slice(0, 4).forEach(e => {
          phonemeTipsHtml += `<div class="tip" style="margin-bottom:6px;white-space:pre-line">${e.tipCn}</div>`;
        });
        phonemeTipsHtml += '</div>';
      }
    } catch (e) {}
  }

  // Difficulty
  const stressedCount = s.stress.filter(x => x >= 0.8).length;
  const wordCount = s.words.length;
  const diffLevel = wordCount <= 3 ? '\u7B80\u5355' : wordCount <= 6 ? (stressedCount >= 3 ? '\u4E2D\u7B49' : '\u7B80\u5355') : '\u8F83\u96BE';
  const diffColor = diffLevel === '\u7B80\u5355' ? 'var(--ok)' : diffLevel === '\u4E2D\u7B49' ? 'var(--acc)' : 'var(--red)';

  // Scene emoji
  const sceneEmojis = (s.scene && s.scene.length <= 10) ? s.scene : sc.icon;

  // Render category tabs
  renderCategoryTabs(LIFE_CATEGORIES);

  $('#card').innerHTML = `
    <!-- Learning step indicators -->
    <div class="learning-steps">
      <div class="learning-step active" id="lstep1"><span class="learning-step-num">1</span> \u770B\u573A\u666F</div>
      <span class="learning-step-arrow">\u2192</span>
      <div class="learning-step" id="lstep2"><span class="learning-step-num">2</span> \u542C\u53D1\u97F3</div>
      <span class="learning-step-arrow">\u2192</span>
      <div class="learning-step" id="lstep3"><span class="learning-step-num">3</span> \u8DDF\u6211\u8BFB</div>
      <span class="learning-step-arrow">\u2192</span>
      <div class="learning-step" id="lstep4"><span class="learning-step-num">4</span> \u770B\u7ED3\u679C</div>
    </div>

    <div class="cat">${s.cat} \u00B7 ${state.idx + 1}/${sents.length}
      <span style="margin-left:8px;font-size:11px;padding:2px 8px;border-radius:8px;background:rgba(255,255,255,0.06);color:${diffColor};font-weight:700">\u96BE\u5EA6\uFF1A${diffLevel}</span>
    </div>

    <!-- Scene -->
    <div class="scene-card-immersive" style="background:linear-gradient(135deg,${sc.colors[0]},${sc.colors[1]})">
      <div class="scene-badge">${sc.title || s.cat}</div>
      <div class="scene-emojis">${sceneEmojis}</div>
      <div class="scene-context-zh">${sc.sub || ''}</div>
      <div class="scene-phrase-en">${s.text}</div>
      <div class="scene-translation-zh">${s.cn}</div>
    </div>

    <!-- Listen -->
    <div class="step-label"><span class="step-icon">\uD83D\uDC42</span> \u542C\u4E00\u542C</div>
    <div class="stress-row">${dots}</div>
    <div class="sentence">${s.text}</div>
    <div class="ipa">${s.ipa}</div>
    <div class="audio-row">
      <button class="audio-btn primary" id="playBtn" onclick="window.speak()" aria-label="\u542C\u4E00\u542C">&#9654; \u542C\u4E00\u542C</button>
      <button class="audio-btn slow" onclick="window.speakSlow()" aria-label="\u6162\u901F\u64AD\u653E">\u6162\u901F 0.7x</button>
      <button class="audio-btn" style="background:#f59e0b" onclick="window.rhythmPlay()" aria-label="\u8282\u62CD\u52A8\u753B">&#9835; \u8282\u62CD</button>
    </div>

    <!-- Record -->
    <div class="step-label"><span class="step-icon">\uD83C\uDFA4</span> \u8DDF\u6211\u8BFB</div>
    <div class="audio-row">
      <button class="audio-btn rec-btn" id="recBtn" onclick="window.toggleRecord()" aria-label="\u5F55\u97F3" style="flex:1;max-width:200px;justify-content:center">&#9679; \u5F55\u97F3</button>
    </div>

    <!-- Results -->
    <div id="recCompare"></div>
    <div class="pitch-legend"><span class="native">\u6807\u51C6\u53D1\u97F3</span><span class="user">\u4F60\u7684\u53D1\u97F3</span></div>
    <canvas class="pitch-canvas" id="pitchCanvas"></canvas>

    <button class="shadow-trigger" onclick="ShadowMode.start()">&#127919; \u8DDF\u8BFB\u7EC3\u4E60</button>

    <div class="section">
      <div class="section-label">\u8FD9\u53E5\u8BDD\u7684\u610F\u601D</div>
      <div class="section-text">${s.meaning}</div>
    </div>
    ${phonemeTipsHtml}
    <div class="section">
      <div class="section-label">\u53E5\u578B</div>
      <div class="pattern">${s.pattern}</div>
    </div>
    <div class="section">
      <div class="section-label">\u540C\u7C7B\u8868\u8FBE</div>
      <div class="variants">${s.variants.map(v => `<div class="variant">${v}</div>`).join('')}</div>
    </div>
    <div class="section">
      <div class="section-label">\u8282\u594F\u63D0\u793A</div>
      <div class="tip">${s.tip}</div>
    </div>
    <div class="section">
      <div class="section-label">\u4E2D\u5F0F\u82F1\u8BED\u9677\u9631</div>
      <div class="trap">${s.trap}</div>
    </div>
    <button class="learn-btn ${p.learned.includes(s.id) ? 'learned' : 'unlearned'}" onclick="window.toggleLearned()" aria-label="${p.learned.includes(s.id) ? '\u53D6\u6D88\u6807\u8BB0' : '\u6807\u8BB0\u5DF2\u5B66\u4F1A'}" aria-pressed="${p.learned.includes(s.id) ? 'true' : 'false'}">
      ${p.learned.includes(s.id) ? '&#10003; \u5DF2\u5B66\u4F1A\uFF01' : '\u6807\u8BB0\u4E3A\u5DF2\u5B66\u4F1A'}
    </button>
    ${p.learned.length >= 5 ? '<button class="quiz-trigger" onclick="Quiz.start()" aria-label="\u5F00\u59CB\u6D4B\u9A8C\uFF08' + p.learned.length + '\u4E2A\u53E5\u5B50\uFF09">\u6D4B\u9A8C\u4E00\u4E0B\uFF01\uFF08' + p.learned.length + '\u4E2A\u53E5\u5B50\uFF09</button>' : ''}
    <div class="menu-actions">
      <button class="menu-action-btn review-btn" onclick="SR.start()" aria-label="\u590D\u4E60\u5361\u7247">
        \uD83D\uDCDA \u590D\u4E60${(typeof SR !== 'undefined' && SR.getDueCount() > 0) ? '<span class="sr-badge" id="srBadge">' + SR.getDueCount() + '</span>' : ''}
      </button>
      <button class="menu-action-btn challenge-btn" onclick="DailyChallenge.start()" aria-label="\u6BCF\u65E5\u6311\u6218">
        \u26A1 \u6BCF\u65E5\u6311\u6218
      </button>
    </div>
  `;
  renderStreak(getSentences);
  renderDaySwitcher(ALL_DAYS, dayMeta, getGeneratedDay);
  renderRecCompare(getSentences);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  try { localStorage.setItem(`re-idx-day${state.currentDay}`, state.idx); } catch {}
}

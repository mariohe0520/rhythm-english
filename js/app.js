// Main entry point — imports all modules, wires up globals
import state from './state.js';

// Data imports
import { DAY1, SCENES } from '../data/sentences.js';
import { DAY2, SCENES_DAY2 } from '../data/day2.js';
import { DAY3, SCENES_DAY3 } from '../data/day3.js';
import { DAY4, SCENES_DAY4 } from '../data/day4.js';
import { DAY5, SCENES_DAY5 } from '../data/day5.js';
import { DAY6, SCENES_DAY6 } from '../data/day6.js';
import { DAY7, SCENES_DAY7 } from '../data/day7.js';
import { DAY8, SCENES_DAY8 } from '../data/day8.js';
import { DAY9, SCENES_DAY9 } from '../data/day9.js';
import { DAY10, SCENES_DAY10 } from '../data/day10.js';
import { DAY11, SCENES_DAY11 } from '../data/day11.js';
import { DAY12, SCENES_DAY12 } from '../data/day12.js';
import { DAY13, SCENES_DAY13 } from '../data/day13.js';
import { DAY14, SCENES_DAY14 } from '../data/day14.js';
import { DAY15, SCENES_DAY15 } from '../data/day15.js';
import { DAY16, SCENES_DAY16 } from '../data/day16.js';
import { DAY17, SCENES_DAY17 } from '../data/day17.js';
import { DAY18, SCENES_DAY18 } from '../data/day18.js';
import { DAY19, SCENES_DAY19 } from '../data/day19.js';
import { DAY20, SCENES_DAY20 } from '../data/day20.js';
import { DAY21, SCENES_DAY21 } from '../data/day21.js';
import { DAY22, SCENES_DAY22 } from '../data/day22.js';
import { generateDay } from '../data/generator.js';
import { LIFE_SENTENCES, LIFE_CATS } from '../data/life-categories.js';

// Engine imports
import { createEngine } from '../modules/ai-engine.js';
import { PatternLibrary, ConnectedSpeechRules, IntonationPatterns, ShadowingScript, WeaknessProfiler, LIFE_CATEGORIES } from '../modules/content-engine.js';

// Module imports
import { playAudio, cancelSpeech } from './speech/tts.js';
import { startRecording, stopRecording, initAudioUnlock } from './speech/stt.js';
import { analyzeAndScore } from './speech/pronunciation.js';
import { getRecHistory } from './save.js';
import { migrateOldProgress, getProgress, saveProgress, isDayUnlocked, updateStreakIfNeeded, updateXP, addXP, todayStr } from './progress.js';
import { render, renderDaySwitcher, renderCategoryTabs, renderRecCompare, updateLearningStep } from './ui.js';
import { createCoachPanel } from './ai-coach.js';
import { createShadowMode, rhythmPlay } from './practice/follow-read.js';
import CustomPractice from './practice/free-practice.js';

/* ---- AI Engine ---- */
let aiEngine = null;
try { aiEngine = createEngine(); } catch (e) { console.warn('AI engine init:', e); }
const patternLib = new PatternLibrary();
const speechRules = new ConnectedSpeechRules();
const intonationPatterns = new IntonationPatterns();
const weaknessProfiler = new WeaknessProfiler();

/* ---- Day Data ---- */
const ALL_DAYS = [DAY1, DAY2, DAY3, DAY4, DAY5, DAY6, DAY7, DAY8, DAY9, DAY10, DAY11, DAY12, DAY13, DAY14, DAY15, DAY16, DAY17, DAY18, DAY19, DAY20, DAY21, DAY22];
const ALL_SCENES = [SCENES, SCENES_DAY2, SCENES_DAY3, SCENES_DAY4, SCENES_DAY5, SCENES_DAY6, SCENES_DAY7, SCENES_DAY8, SCENES_DAY9, SCENES_DAY10, SCENES_DAY11, SCENES_DAY12, SCENES_DAY13, SCENES_DAY14, SCENES_DAY15, SCENES_DAY16, SCENES_DAY17, SCENES_DAY18, SCENES_DAY19, SCENES_DAY20, SCENES_DAY21, SCENES_DAY22];

const generatedCache = {};
function getGeneratedDay(day) { if (!generatedCache[day]) generatedCache[day] = generateDay(day); return generatedCache[day]; }
function getAllSentencesForDay() {
  if (state.currentDay <= 22) return ALL_DAYS[state.currentDay - 1] || DAY1;
  return getGeneratedDay(state.currentDay).sentences;
}
function getSentences() {
  // 如果过滤的是生活场景分类，从 LIFE_SENTENCES 里取
  if (state.activeCategoryFilter && LIFE_CATS.includes(state.activeCategoryFilter)) {
    return LIFE_SENTENCES.filter(s => s.cat === state.activeCategoryFilter);
  }
  const all = getAllSentencesForDay();
  if (!state.activeCategoryFilter) return all;
  const filtered = all.filter(s => s.cat === state.activeCategoryFilter);
  return filtered.length ? filtered : all; // 无匹配时显示全部
}
function getScenes() { if (state.currentDay <= 22) return ALL_SCENES[state.currentDay - 1] || SCENES; return getGeneratedDay(state.currentDay).scenes; }

/* Day metadata for UI switcher */
const dayMeta = [
  { n: 1, label: '\u7B2C1\u5929', sub: '\u5546\u52A1\u4F1A\u8BAE', data: DAY1 },
  { n: 2, label: '\u7B2C2\u5929', sub: '\u8C08\u5224', data: DAY2 },
  { n: 3, label: '\u7B2C3\u5929', sub: '\u9886\u5BFC\u529B', data: DAY3 },
  { n: 4, label: '\u7B2C4\u5929', sub: '\u4EA7\u54C1/\u6280\u672F', data: DAY4 },
  { n: 5, label: '\u7B2C5\u5929', sub: '\u51B2\u7A81\u89E3\u51B3', data: DAY5 },
  { n: 6, label: '\u7B2C6\u5929', sub: '\u793E\u4EA4\u7F51\u7EDC', data: DAY6 },
  { n: 7, label: '\u7B2C7\u5929', sub: '\u5371\u673A\u6C9F\u901A', data: DAY7 },
  { n: 8, label: '\u7B2C8\u5929', sub: '\u9762\u8BD5', data: DAY8 },
  { n: 9, label: '\u7B2C9\u5929', sub: '\u6F14\u8BB2', data: DAY9 },
  { n: 10, label: '\u7B2C10\u5929', sub: '\u8DE8\u6587\u5316', data: DAY10 },
  { n: 11, label: '\u7B2C11\u5929', sub: '\u8FDC\u7A0B\u5DE5\u4F5C', data: DAY11 },
  { n: 12, label: '\u7B2C12\u5929', sub: '\u9500\u552E', data: DAY12 },
  { n: 13, label: '第13天', sub: '公开演讲', data: DAY13 },
  { n: 14, label: '第14天', sub: 'AI与未来', data: DAY14 },
  { n: 15, label: '第15天', sub: 'IELTS·家乡', data: DAY15 },
  { n: 16, label: '第16天', sub: 'IELTS·工作学习', data: DAY16 },
  { n: 17, label: '第17天', sub: 'IELTS·爱好', data: DAY17 },
  { n: 18, label: '第18天', sub: 'IELTS·家庭', data: DAY18 },
  { n: 19, label: '第19天', sub: 'IELTS·科技', data: DAY19 },
  { n: 20, label: '第20天', sub: 'IELTS·健康饮食', data: DAY20 },
  { n: 21, label: '第21天', sub: 'IELTS·描述经历', data: DAY21 },
  { n: 22, label: '第22天', sub: 'IELTS·社会议题', data: DAY22 }
];

/* ---- Migrate old data ---- */
migrateOldProgress();

/* ---- Initialize index ---- */
state.idx = parseInt(localStorage.getItem(`re-idx-day${state.currentDay}`) || '0') || 0;

/* ---- Guard locked day ---- */
if (!isDayUnlocked(state.currentDay)) {
  let d = 1;
  for (let i = 14; i >= 1; i--) { if (isDayUnlocked(i)) { d = i; break; } }
  state.currentDay = d;
  try { localStorage.setItem('re-currentDay', String(d)); } catch {}
  state.idx = parseInt(localStorage.getItem(`re-idx-day${state.currentDay}`) || '0') || 0;
}

/* ---- iOS AudioContext unlock ---- */
initAudioUnlock();

/* ---- Create Coach Panel ---- */
const CoachPanel = createCoachPanel(getSentences, aiEngine, weaknessProfiler, speechRules, intonationPatterns);

/* ---- Create Shadow Mode ---- */
const ShadowMode = createShadowMode(getSentences, ShadowingScript);

/* ---- Deps object for render ---- */
const renderDeps = {
  getSentences,
  getScenes,
  aiEngine,
  LIFE_CATEGORIES,
  LIFE_CATS,
  SR: null, // will be set below
  Quiz: null,
  DailyChallenge: null,
  ALL_DAYS,
  dayMeta,
  getGeneratedDay,
  ShadowMode,
  stopRecording
};

/* ---- Wrapped render ---- */
function doRender() {
  render(renderDeps);
}

/* ---- Wrapped renderRecCompare ---- */
function doRenderRecCompare() {
  renderRecCompare(getSentences);
}

/* ---- Wrapped analyzeAndScore ---- */
async function doAnalyzeAndScore() {
  await analyzeAndScore(getSentences, aiEngine, weaknessProfiler, CoachPanel, updateLearningStep);
}

/* ---- Set ShadowMode callbacks ---- */
ShadowMode._renderRecCompare = doRenderRecCompare;
ShadowMode._analyzeAndScore = doAnalyzeAndScore;

/* ---- Quiz Engine ---- */
const Quiz = {
  questions: [], current: 0, score: 0, answered: false, results: [],

  generate() {
    const sents = getSentences();
    const p = getProgress();
    const pool = p.learned.length >= 5 ? sents.filter(s => p.learned.includes(s.id)) : sents.slice(0, 10);
    if (pool.length < 4) return false;
    this.questions = []; this.current = 0; this.score = 0; this.results = [];
    const shuffled = [...pool].sort(() => Math.random() - .5).slice(0, 10);
    for (const s of shuffled) {
      const qType = Math.random();
      if (qType < 0.33) {
        const wrong = pool.filter(x => x.id !== s.id).sort(() => Math.random() - .5).slice(0, 3).map(x => x.cn);
        const opts = [s.cn, ...wrong].sort(() => Math.random() - .5);
        this.questions.push({ type: 'meaning', prompt: s.text, hint: '\u8FD9\u53E5\u8BDD\u662F\u4EC0\u4E48\u610F\u601D\uFF1F', options: opts, answer: s.cn, sentenceId: s.id });
      } else if (qType < 0.66) {
        const wrong = pool.filter(x => x.id !== s.id).sort(() => Math.random() - .5).slice(0, 3).map(x => x.text);
        const opts = [s.text, ...wrong].sort(() => Math.random() - .5);
        this.questions.push({ type: 'scene', prompt: s.cn, hint: '\u5BF9\u5E94\u54EA\u4E2A\u82F1\u8BED\u53E5\u5B50\uFF1F', options: opts, answer: s.text, sentenceId: s.id });
      } else {
        const stressedWords = s.words.filter((_, i) => s.stress[i] >= 0.8);
        if (stressedWords.length === 0) continue;
        const target = stressedWords[Math.floor(Math.random() * stressedWords.length)];
        const wrong = s.words.filter((_, i) => s.words[i] !== target && s.stress[i] < 0.5);
        const uniqueWrong = [...new Set(wrong)].slice(0, 3);
        if (uniqueWrong.length < 2) continue;
        const opts = [target, ...uniqueWrong].sort(() => Math.random() - .5);
        this.questions.push({ type: 'stress', prompt: s.text, hint: '\u54EA\u4E2A\u8BCD\u7684\u91CD\u97F3\u6700\u5F3A\uFF1F', options: opts, answer: target, sentenceId: s.id });
      }
    }
    return this.questions.length >= 3;
  },

  start() {
    if (!this.generate()) { alert('\u5148\u5B66\u4F1A\u81F3\u5C115\u4E2A\u53E5\u5B50\u518D\u6D4B\u9A8C\uFF01'); return; }
    this._prevFocus = document.activeElement;
    document.querySelector('#quizOverlay').classList.add('active');
    this.renderQuestion();
    const firstOpt = document.querySelector('#quizOverlay .quiz-opt');
    if (firstOpt) setTimeout(() => firstOpt.focus(), 100);
  },

  renderQuestion() {
    const q = this.questions[this.current];
    this.answered = false;
    document.querySelector('#quizProgress').innerHTML = this.questions.map((_, i) => {
      let cls = 'quiz-pip';
      if (i < this.current) cls += this.results[i] ? ' done' : ' wrong';
      else if (i === this.current) cls += ' current';
      return `<div class="${cls}"></div>`;
    }).join('');
    document.querySelector('#quizContent').innerHTML = `
      <div class="quiz-q">${q.prompt}</div>
      <div class="quiz-hint">${q.hint}</div>
      <div class="quiz-opts" role="radiogroup">${q.options.map((o, i) =>
        `<button class="quiz-opt" data-idx="${i}" tabindex="0" role="radio" aria-checked="false" type="button">${o}</button>`
      ).join('')}</div>
      <div id="quizFeedback"></div>
      <button class="quiz-next-btn" id="quizNextBtn" style="display:none" onclick="Quiz.next()">\u7EE7\u7EED</button>
    `;
    document.querySelectorAll('#quizContent .quiz-opt').forEach((el, i) => {
      el.addEventListener('click', () => Quiz.pick(i));
      el.addEventListener('touchend', (e) => { e.preventDefault(); Quiz.pick(i); });
    });
  },

  pick(i) {
    if (this.answered) return;
    this.answered = true;
    const q = this.questions[this.current];
    const picked = q.options[i];
    const correct = picked === q.answer;
    this.results.push(correct);
    if (correct) this.score++;
    else if (typeof SR !== 'undefined') SR.addCard(q.sentenceId, state.currentDay);
    document.querySelectorAll('.quiz-opt').forEach((el, j) => {
      if (q.options[j] === q.answer) el.classList.add('correct');
      else if (j === i && !correct) el.classList.add('wrong');
    });
    const fb = document.querySelector('#quizFeedback');
    fb.className = 'quiz-feedback ' + (correct ? 'right' : 'wrong');
    fb.textContent = correct ? ['\u5B8C\u7F8E\uFF01', '\u7B54\u5BF9\u4E86\uFF01', '\u592A\u68D2\u4E86\uFF01'][Math.floor(Math.random() * 3)] :
      `\u7B54\u9519\u4E86\u2014\u2014\u6B63\u786E\u7B54\u6848\uFF1A${q.answer}`;
    document.querySelector('#quizNextBtn').style.display = 'block';
  },

  next() {
    this.current++;
    if (this.current >= this.questions.length) { this.showResults(); return; }
    this.renderQuestion();
  },

  showResults() {
    const pct = Math.round(this.score / this.questions.length * 100);
    const xpEarned = this.score * 10;
    addXP(xpEarned);
    const unlockNames = ['\u7B2C2\u5929\uFF1A\u8C08\u5224', '\u7B2C3\u5929\uFF1A\u9886\u5BFC\u529B', '\u7B2C4\u5929\uFF1A\u4EA7\u54C1/\u6280\u672F', '\u7B2C5\u5929\uFF1A\u51B2\u7A81\u89E3\u51B3', '\u7B2C6\u5929\uFF1A\u793E\u4EA4\u7F51\u7EDC', '\u7B2C7\u5929\uFF1A\u5371\u673A\u6C9F\u901A', '\u7B2C8\u5929\uFF1A\u9762\u8BD5', '\u7B2C9\u5929\uFF1A\u6F14\u8BB2', '\u7B2C10\u5929\uFF1A\u8DE8\u6587\u5316', '\u7B2C11\u5929\uFF1A\u8FDC\u7A0B\u5DE5\u4F5C', '\u7B2C12\u5929\uFF1A\u9500\u552E', '\u7B2C13\u5929\uFF1A\u516C\u5F00\u6F14\u8BB2', '\u7B2C14\u5929\uFF1AAI\u4E0E\u672A\u6765', '\u7B2C15\u5929+\uFF1A\u65E0\u9650\u7EC3\u4E60'];
    const unlocksBefore = [];
    for (let u = 2; u <= 15; u++) unlocksBefore.push(isDayUnlocked(u));
    const p = getProgress();
    p.quizBest = Math.max(p.quizBest || 0, pct);
    updateStreakIfNeeded(p);
    saveProgress(p);
    const unlocksAfter = [];
    for (let u = 2; u <= 15; u++) unlocksAfter.push(isDayUnlocked(u));
    let unlockHtml = '';
    for (let u = 0; u < 14; u++) {
      if (!unlocksBefore[u] && unlocksAfter[u]) unlockHtml += `<div style="text-align:center;margin:16px 0;padding:16px;background:rgba(16,185,129,.1);border-radius:12px;font-size:15px;color:var(--ok);font-weight:700">* ${unlockNames[u]} \u5DF2\u89E3\u9501\uFF01</div>`;
    }
    document.querySelector('#quizContent').innerHTML = `
      <div class="quiz-score">
        <div class="quiz-score-num">${pct}%</div>
        <div class="quiz-score-label">${this.score}/${this.questions.length} \u7B54\u5BF9</div>
        <div class="quiz-xp">+${xpEarned} XP</div>
      </div>
      ${unlockHtml}
      <button class="quiz-next-btn" onclick="Quiz.close()" style="margin-top:20px">\u5B8C\u6210</button>
    `;
    document.querySelector('#quizProgress').innerHTML = this.questions.map((_, i) => {
      return `<div class="quiz-pip${this.results[i] ? ' done' : ' wrong'}"></div>`;
    }).join('');
  },

  close() {
    document.querySelector('#quizOverlay').classList.remove('active');
    this.questions = []; this.current = 0; this.score = 0; this.results = [];
    doRender();
    if (this._prevFocus && this._prevFocus.focus) this._prevFocus.focus();
  }
};

/* ---- Spaced Repetition (SR) ---- */
const SR = {
  KEY: 'sr_cards',
  _queue: [], _currentIdx: 0, _revealed: false, _audio: null,

  getCards() { try { return JSON.parse(localStorage.getItem(this.KEY) || '[]'); } catch { return []; } },
  saveCards(cards) { try { localStorage.setItem(this.KEY, JSON.stringify(cards)); } catch (e) { console.warn('SR save failed', e); } },

  addCard(sentenceId, dayNum) {
    const cards = this.getCards();
    const d = dayNum || state.currentDay;
    if (cards.find(c => c.sentenceId === sentenceId && c.dayNum === d)) return;
    const now = Date.now();
    cards.push({ sentenceId, dayNum: d, lastReview: now, interval: 60000, easeFactor: 2.5, dueDate: now });
    this.saveCards(cards);
  },

  getDueCards() { const now = Date.now(); return this.getCards().filter(c => c.dueDate <= now); },
  getDueCount() { return this.getDueCards().length; },

  rate(sentenceId, dayNum, rating) {
    const cards = this.getCards();
    const card = cards.find(c => c.sentenceId === sentenceId && c.dayNum === dayNum);
    if (!card) return;
    const now = Date.now();
    card.lastReview = now;
    switch (rating) {
      case 'again': card.interval = 60000; card.easeFactor = Math.max(1.3, card.easeFactor - 0.2); break;
      case 'hard': card.interval = Math.round(card.interval * 1.2); card.easeFactor = Math.max(1.3, card.easeFactor - 0.1); break;
      case 'good': card.interval = Math.round(card.interval * card.easeFactor); break;
      case 'easy': card.interval = Math.round(card.interval * card.easeFactor * 1.3); card.easeFactor += 0.1; break;
    }
    card.dueDate = now + card.interval;
    this.saveCards(cards);
  },

  findSentence(card) {
    if (card.dayNum <= 14) return (ALL_DAYS[card.dayNum - 1] || []).find(s => s.id === card.sentenceId);
    return (getGeneratedDay(card.dayNum).sentences || []).find(s => s.id === card.sentenceId);
  },

  _formatInterval(ms) {
    if (ms < 60000) return '<1\u5206'; if (ms < 3600000) return Math.round(ms / 60000) + '\u5206';
    if (ms < 86400000) return Math.round(ms / 3600000) + '\u65F6'; return Math.round(ms / 86400000) + '\u5929';
  },

  start() {
    this._queue = this.getDueCards();
    if (!this._queue.length) { alert('\u6CA1\u6709\u9700\u8981\u590D\u4E60\u7684\u5361\u7247\uFF01'); return; }
    this._currentIdx = 0; this._revealed = false;
    document.getElementById('reviewOverlay').classList.add('active');
    this.renderCard();
  },

  renderCard() {
    const card = this._queue[this._currentIdx];
    if (!card) { this.showComplete(); return; }
    const sentence = this.findSentence(card);
    if (!sentence) { this._currentIdx++; this.renderCard(); return; }
    const total = this._queue.length, current = this._currentIdx + 1;
    const dots = sentence.words.map((w, i) => {
      const stressed = sentence.stress[i] >= 0.8, mid = sentence.stress[i] >= 0.4 && sentence.stress[i] < 0.8;
      const size = stressed ? 36 : mid ? 22 : 14, cls = stressed ? 'big' : 'small', lblCls = stressed ? 'loud' : '';
      return `<div class="stress-word"><div class="stress-dot ${cls}" style="width:${size}px;height:${size}px"></div><span class="stress-label ${lblCls}">${stressed ? w.toUpperCase() : w}</span></div>`;
    }).join('');
    let html = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
        <button class="nav-btn" onclick="SR.close()" aria-label="Close review" style="font-size:16px">\u2715</button>
        <span style="color:var(--dim);font-size:13px">${current} / ${total} \u5F85\u590D\u4E60</span>
      </div>
      <div style="text-align:center;margin-bottom:20px">
        <div class="cat">\u7B2C${card.dayNum}\u5929 \u00B7 \u590D\u4E60</div>
        <div class="stress-row">${dots}</div>
        <div class="sentence">${sentence.text}</div>
        <div class="ipa">${sentence.ipa}</div>
        <div class="audio-row" style="margin-top:16px">
          <button class="audio-btn primary" onclick="SR.playAudio(1)" aria-label="\u542C\u4E00\u542C">\u25B6 \u542C\u4E00\u542C</button>
          <button class="audio-btn slow" onclick="SR.playAudio(0.7)" aria-label="\u6162\u901F">0.7x</button>
        </div>
      </div>`;
    if (this._revealed) {
      html += `
        <div style="text-align:center;margin:20px 0">
          <div class="cn-helper">${sentence.cn}</div>
          <div style="margin-top:12px;font-size:13px;color:var(--dim)">${sentence.meaning}</div>
        </div>
        <div style="text-align:center;margin-top:12px;font-size:13px;color:var(--dim);margin-bottom:8px">\u4F60\u8BB0\u5F97\u591A\u597D\uFF1F</div>
        <div class="sr-rating-row">
          <button class="sr-rate-btn sr-again" onclick="SR.rateAndNext('again')">\u518D\u6765<br><span>1\u5206\u949F</span></button>
          <button class="sr-rate-btn sr-hard" onclick="SR.rateAndNext('hard')">\u56F0\u96BE<br><span>${this._formatInterval(card.interval * 1.2)}</span></button>
          <button class="sr-rate-btn sr-good" onclick="SR.rateAndNext('good')">\u8FD8\u884C<br><span>${this._formatInterval(card.interval * card.easeFactor)}</span></button>
          <button class="sr-rate-btn sr-easy" onclick="SR.rateAndNext('easy')">\u7B80\u5355<br><span>${this._formatInterval(card.interval * card.easeFactor * 1.3)}</span></button>
        </div>`;
    } else {
      html += `<button class="quiz-next-btn" onclick="SR.reveal()" style="margin-top:20px">\u663E\u793A\u7B54\u6848</button>`;
    }
    document.getElementById('reviewContent').innerHTML = html;
  },

  playAudio(rate) {
    if (this._audio) { this._audio.pause(); this._audio = null; }
    cancelSpeech();
    const card = this._queue[this._currentIdx]; if (!card) return;
    const sentence = this.findSentence(card); if (!sentence) return;
    const id = String(sentence.id).padStart(2, '0');
    this._audio = new Audio('audio/' + id + '.mp3');
    this._audio.playbackRate = rate || 1;
    this._audio.onerror = () => {
      if (typeof speechSynthesis !== 'undefined') {
        const u = new SpeechSynthesisUtterance(sentence.text);
        u.lang = 'en-US'; u.rate = (rate || 1) * 0.85; speechSynthesis.speak(u);
      }
    };
    this._audio.play().catch(() => { if (this._audio && this._audio.onerror) this._audio.onerror(); });
  },

  reveal() { this._revealed = true; this.renderCard(); },

  rateAndNext(rating) {
    const card = this._queue[this._currentIdx];
    if (card) this.rate(card.sentenceId, card.dayNum, rating);
    this._currentIdx++; this._revealed = false;
    if (this._audio) { this._audio.pause(); this._audio = null; }
    this.renderCard();
  },

  showComplete() {
    document.getElementById('reviewContent').innerHTML = `
      <div style="text-align:center;padding:60px 20px">
        <div style="font-size:48px;margin-bottom:16px">\uD83C\uDF89</div>
        <div style="font-size:24px;font-weight:900;margin-bottom:8px">\u5168\u90E8\u5B8C\u6210\uFF01</div>
        <div style="color:var(--dim);margin-bottom:24px">\u6CA1\u6709\u66F4\u591A\u9700\u8981\u590D\u4E60\u7684\u5361\u7247\u4E86</div>
        <button class="quiz-next-btn" onclick="SR.close()">\u8FD4\u56DE</button>
      </div>`;
  },

  close() {
    document.getElementById('reviewOverlay').classList.remove('active');
    if (this._audio) { this._audio.pause(); this._audio = null; }
    doRender();
  }
};

/* ---- Daily Challenge ---- */
const DailyChallenge = {
  KEY_BEST: 'dc_best', KEY_STREAK: 'dc_streak',
  _questions: [], _current: 0, _score: 0, _timer: null, _timeLeft: 90, _startTime: 0, _results: [], _answered: false,

  _seedHash(str) { let h = 0; for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0; return Math.abs(h); },
  _seededRng(seed) { let s = seed || 1; return function() { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; },

  getAllSentences() {
    const all = [];
    for (let d = 1; d <= 14; d++) { if (isDayUnlocked(d)) ALL_DAYS[d - 1].forEach(s => all.push({ ...s, dayNum: d })); }
    for (let d = 15; d <= 20; d++) { if (isDayUnlocked(d)) getGeneratedDay(d).sentences.forEach(s => all.push({ ...s, dayNum: d })); }
    return all;
  },

  generateQuestions() {
    const dateStr = new Date().toDateString();
    const seed = this._seedHash(dateStr);
    const rng = this._seededRng(seed);
    const allS = this.getAllSentences();
    if (allS.length < 10) return false;
    const shuffled = [...allS];
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
    const selected = shuffled.slice(0, 10);
    this._questions = [];
    for (const s of selected) {
      const qType = rng();
      if (qType < 0.5) {
        const wrong = [...allS].filter(x => x.id !== s.id || x.dayNum !== s.dayNum);
        for (let i = wrong.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [wrong[i], wrong[j]] = [wrong[j], wrong[i]]; }
        const opts = [s.cn, ...wrong.slice(0, 3).map(x => x.cn)];
        for (let i = opts.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [opts[i], opts[j]] = [opts[j], opts[i]]; }
        this._questions.push({ prompt: s.text, hint: '\u8FD9\u53E5\u8BDD\u662F\u4EC0\u4E48\u610F\u601D\uFF1F', options: opts, answer: s.cn, sentenceId: s.id, dayNum: s.dayNum });
      } else {
        const wrong = [...allS].filter(x => x.id !== s.id || x.dayNum !== s.dayNum);
        for (let i = wrong.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [wrong[i], wrong[j]] = [wrong[j], wrong[i]]; }
        const opts = [s.text, ...wrong.slice(0, 3).map(x => x.text)];
        for (let i = opts.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [opts[i], opts[j]] = [opts[j], opts[i]]; }
        this._questions.push({ prompt: s.cn, hint: '\u5BF9\u5E94\u54EA\u4E2A\u82F1\u8BED\u53E5\u5B50\uFF1F', options: opts, answer: s.text, sentenceId: s.id, dayNum: s.dayNum });
      }
    }
    return this._questions.length >= 3;
  },

  getBest() { return parseInt(localStorage.getItem(this.KEY_BEST) || '0'); },
  getStreak() { try { return JSON.parse(localStorage.getItem(this.KEY_STREAK) || '{"count":0,"lastDate":null}'); } catch { return { count: 0, lastDate: null }; } },

  start() {
    if (!this.generateQuestions()) { alert('\u53E5\u5B50\u4E0D\u591F\uFF01\u8BF7\u5148\u89E3\u9501\u66F4\u591A\u5929\u3002'); return; }
    this._current = 0; this._score = 0; this._timeLeft = 90; this._results = []; this._answered = false; this._startTime = Date.now();
    document.getElementById('challengeOverlay').classList.add('active');
    this._startTimer(); this.renderQuestion();
  },

  _startTimer() {
    if (this._timer) clearInterval(this._timer);
    this._timer = setInterval(() => {
      this._timeLeft = Math.max(0, 90 - Math.floor((Date.now() - this._startTime) / 1000));
      const el = document.getElementById('dcTimer');
      if (el) { el.textContent = this._timeLeft + 's'; el.style.color = this._timeLeft <= 10 ? 'var(--red)' : this._timeLeft <= 30 ? 'var(--acc)' : 'var(--ok)'; }
      const bar = document.getElementById('dcTimerBar');
      if (bar) bar.style.width = (this._timeLeft / 90 * 100) + '%';
      if (this._timeLeft <= 0) { clearInterval(this._timer); this._timer = null; this.timeUp(); }
    }, 250);
  },

  renderQuestion() {
    if (this._current >= this._questions.length) { this.showResults(); return; }
    const q = this._questions[this._current]; this._answered = false;
    const total = this._questions.length, current = this._current + 1;
    document.getElementById('challengeContent').innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="color:var(--dim);font-size:13px">${current}/${total}</span>
        <div class="dc-timer-wrap"><span class="dc-timer" id="dcTimer">${this._timeLeft}s</span></div>
        <span style="color:var(--acc);font-size:13px;font-weight:700">\u5F97\u5206\uFF1A${this._score}</span>
      </div>
      <div class="dc-timer-bar-wrap"><div class="dc-timer-bar" id="dcTimerBar" style="width:${this._timeLeft / 90 * 100}%"></div></div>
      <div class="quiz-progress" style="margin-bottom:16px">${this._questions.map((_, i) => {
        let cls = 'quiz-pip'; if (i < this._current) cls += this._results[i] ? ' done' : ' wrong'; else if (i === this._current) cls += ' current'; return '<div class="' + cls + '"></div>';
      }).join('')}</div>
      <div class="quiz-q">${q.prompt}</div>
      <div class="quiz-hint">${q.hint}</div>
      <div class="quiz-opts">${q.options.map((o, i) =>
        '<button class="quiz-opt" type="button" tabindex="0" data-idx="' + i + '">' + o + '</button>'
      ).join('')}</div>
      <div id="dcFeedback"></div>`;
    document.querySelectorAll('#challengeContent .quiz-opt').forEach((el, i) => {
      el.addEventListener('click', () => DailyChallenge.pick(i));
      el.addEventListener('touchend', (e) => { e.preventDefault(); DailyChallenge.pick(i); });
    });
  },

  pick(i) {
    if (this._answered) return; this._answered = true;
    const q = this._questions[this._current], picked = q.options[i], correct = picked === q.answer;
    this._results.push(correct);
    if (correct) { this._score += 100 + this._timeLeft; }
    else { SR.addCard(q.sentenceId, q.dayNum); }
    document.querySelectorAll('#challengeContent .quiz-opt').forEach((el, j) => {
      if (q.options[j] === q.answer) el.classList.add('correct');
      else if (j === i && !correct) el.classList.add('wrong');
    });
    const fb = document.getElementById('dcFeedback');
    if (fb) { fb.className = 'quiz-feedback ' + (correct ? 'right' : 'wrong'); fb.textContent = correct ? '+' + (100 + this._timeLeft) + ' \u5206\uFF01' : '\u7B54\u9519\u4E86\u2014\u2014' + q.answer; }
    setTimeout(() => { this._current++; this.renderQuestion(); }, 800);
  },

  timeUp() { while (this._results.length < this._questions.length) this._results.push(false); this.showResults(); },

  showResults() {
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
    const best = this.getBest(), isNewBest = this._score > best;
    if (isNewBest) try { localStorage.setItem(this.KEY_BEST, String(this._score)); } catch {}
    const today = new Date().toDateString(), streakData = this.getStreak();
    if (streakData.lastDate !== today) {
      const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
      streakData.count = streakData.lastDate === yesterday.toDateString() ? (streakData.count || 0) + 1 : 1;
      streakData.lastDate = today;
      try { localStorage.setItem(this.KEY_STREAK, JSON.stringify(streakData)); } catch {}
    }
    const correctCount = this._results.filter(r => r).length;
    const xpEarned = correctCount * 15; addXP(xpEarned);
    document.getElementById('challengeContent').innerHTML = `
      <div style="text-align:center;padding:30px 0">
        <div style="font-size:48px;margin-bottom:12px">${isNewBest ? '\uD83C\uDFC6' : '\u26A1'}</div>
        <div style="font-size:48px;font-weight:900;background:linear-gradient(135deg,var(--acc),var(--ok));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:8px">${this._score}</div>
        <div style="color:var(--dim);font-size:14px;margin-bottom:4px">${correctCount}/${this._questions.length} \u7B54\u5BF9</div>
        <div style="color:var(--acc);font-size:16px;font-weight:700;margin:8px 0">+${xpEarned} XP</div>
        ${isNewBest ? '<div style="color:var(--ok);font-size:16px;font-weight:700;margin:12px 0">\uD83C\uDF89 \u65B0\u7EAA\u5F55\uFF01</div>' : '<div style="color:var(--dim);font-size:13px;margin:12px 0">\u6700\u9AD8\u5206\uFF1A' + Math.max(best, this._score) + '</div>'}
        <div class="dc-streak-display">
          <span style="font-size:28px">\uD83D\uDD25</span>
          <span style="font-size:24px;font-weight:900;color:var(--acc)">${streakData.count}</span>
          <span style="color:var(--dim);font-size:13px">\u5929\u8FDE\u7EED</span>
        </div>
        <div style="margin-top:24px">
          <button class="quiz-next-btn" onclick="DailyChallenge.close()">\u5B8C\u6210</button>
        </div>
      </div>`;
  },

  close() {
    document.getElementById('challengeOverlay').classList.remove('active');
    if (this._timer) { clearInterval(this._timer); this._timer = null; }
    doRender();
  }
};

/* ---- Set renderDeps references ---- */
renderDeps.SR = SR;
renderDeps.Quiz = Quiz;
renderDeps.DailyChallenge = DailyChallenge;

/* ---- Switch Day ---- */
window.switchDay = function(day) {
  if (!isDayUnlocked(day)) return;
  if (state.audio) { state.audio.pause(); state.audio.src = ''; state.audio = null; }
  cancelSpeech();
  try { localStorage.setItem(`re-idx-day${state.currentDay}`, String(state.idx)); } catch {}
  state.currentDay = day;
  try { localStorage.setItem('re-currentDay', String(day)); } catch {}
  state.idx = parseInt(localStorage.getItem(`re-idx-day${state.currentDay}`) || '0') || 0;
  const len = getSentences().length;
  if (state.idx >= len) state.idx = len - 1;
  if (state.idx < 0) state.idx = 0;
  renderDaySwitcher(ALL_DAYS, dayMeta, getGeneratedDay);
  doRender();
};

/* ---- Toggle Learned ---- */
window.toggleLearned = function() {
  const sents = getSentences();
  if (!sents.length) return;
  const p = getProgress();
  const sid = sents[state.idx].id;
  const i = p.learned.indexOf(sid);
  if (i >= 0) p.learned.splice(i, 1); else p.learned.push(sid);
  updateStreakIfNeeded(p);
  saveProgress(p);
  doRender();
};

/* ---- CN Toggle ---- */
window.toggleCN = function() {
  state.cnMode = !state.cnMode;
  try { localStorage.setItem('re-cn', state.cnMode ? '1' : '0'); } catch {}
  const tog = document.querySelector('#cnToggle');
  tog.classList.toggle('on', state.cnMode);
  tog.setAttribute('aria-checked', String(state.cnMode));
  doRender();
};

/* ---- Category Filter ---- */
window.filterCategory = function(cat) {
  state.activeCategoryFilter = cat;
  state.idx = 0; // 切换分类时跳回第一句
  doRender();
};

/* ---- Audio playback ---- */
window.speak = function() { updateLearningStep(2); playAudio(1, getSentences); };
window.speakSlow = function() { updateLearningStep(2); playAudio(0.7, getSentences); };
window.rhythmPlay = function() { rhythmPlay(getSentences); };

/* ---- Recording ---- */
window.toggleRecord = async function() {
  updateLearningStep(3);
  if (state.isRecording) stopRecording();
  else await startRecording(getSentences, doRenderRecCompare, doAnalyzeAndScore);
};

/* ---- Playback ---- */
window.playNative = function() {
  if (state.cmpAudio) { state.cmpAudio.pause(); state.cmpAudio = null; }
  playAudio(1, getSentences);
};
window.playUser = function() {
  if (!state.recUrl) return;
  if (state.cmpAudio) { state.cmpAudio.pause(); state.cmpAudio = null; }
  state.cmpAudio = new Audio(state.recUrl);
  const btn = document.getElementById('cmpUser');
  if (btn) btn.classList.add('cplaying');
  state.cmpAudio.onended = () => { if (btn) btn.classList.remove('cplaying'); state.cmpAudio = null; };
  state.cmpAudio.play().catch(e => { console.warn('playUser failed:', e); if (btn) btn.classList.remove('cplaying'); state.cmpAudio = null; });
};
window.playHistRec = function(i) {
  const s = getSentences()[state.idx];
  const hist = getRecHistory(s.id);
  if (!hist[i]) return;
  if (state.cmpAudio) { state.cmpAudio.pause(); state.cmpAudio = null; }
  state.cmpAudio = new Audio(hist[i].b64);
  state.cmpAudio.onended = () => { state.cmpAudio = null; };
  state.cmpAudio.play();
};

/* ---- Navigation ---- */
window.go = function(dir) {
  if (state.navLock) return;
  state.navLock = true;
  const sents = getSentences();
  if (!sents.length) { state.navLock = false; return; }
  const card = document.querySelector('#card');
  card.classList.add(dir > 0 ? 'slide-l' : 'slide-r');
  setTimeout(() => {
    state.idx = Math.max(0, Math.min(sents.length - 1, state.idx + dir));
    card.classList.remove('slide-l', 'slide-r');
    doRender();
    state.navLock = false;
  }, 220);
};

/* ---- Touch / Keyboard ---- */
document.addEventListener('touchstart', e => { state.sx = e.touches[0].clientX; state.sy = e.touches[0].clientY; state.swiping = true; }, { passive: true });
document.addEventListener('touchend', e => {
  if (!state.swiping) return;
  state.swiping = false;
  const dx = e.changedTouches[0].clientX - state.sx;
  const dy = e.changedTouches[0].clientY - state.sy;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) { dx < 0 ? window.go(1) : window.go(-1); }
}, { passive: true });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (document.querySelector('#reviewOverlay').classList.contains('active')) { SR.close(); return; }
    if (document.querySelector('#challengeOverlay').classList.contains('active')) { DailyChallenge.close(); return; }
  }
  if (document.querySelector('#quizOverlay').classList.contains('active') || document.querySelector('#reviewOverlay').classList.contains('active') || document.querySelector('#challengeOverlay').classList.contains('active')) return;
  if (e.key === 'ArrowRight') window.go(1);
  if (e.key === 'ArrowLeft') window.go(-1);
  if (e.key === ' ') { e.preventDefault(); window.speak(); }
});

/* ---- Expose globals for inline onclick ---- */
window.Quiz = Quiz;
window.SR = SR;
window.DailyChallenge = DailyChallenge;
window.ShadowMode = ShadowMode;
window.CoachPanel = CoachPanel;
window.CustomPractice = CustomPractice;

/* ---- Init ---- */
clearTimeout(window.__loaderTimer);
(function() { var d = document.getElementById('_appLoader'); if (d) d.remove(); })();
updateXP();
doRender();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');

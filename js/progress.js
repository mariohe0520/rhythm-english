// XP, progress tracking, streak, day unlock
import state from './state.js';

const DEFAULT_PROGRESS = { learned: [], streak: 0, lastDate: null, history: [], quizBest: 0 };

/* ---- Migrate old single-day progress (one-time) ---- */
export function migrateOldProgress() {
  const old = localStorage.getItem('re-progress');
  if (old) { localStorage.setItem('re-progress-day1', old); localStorage.removeItem('re-progress'); }
  const oi = localStorage.getItem('re-idx');
  if (oi !== null) { localStorage.setItem('re-idx-day1', oi); localStorage.removeItem('re-idx'); }
}

/* ---- Progress (per-day) ---- */
export function getProgress(day) {
  const d = day || state.currentDay;
  try {
    const raw = localStorage.getItem(`re-progress-day${d}`);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    const p = JSON.parse(raw);
    return { ...JSON.parse(JSON.stringify(DEFAULT_PROGRESS)), ...p };
  } catch (e) {
    console.warn('Progress data corrupted, resetting day', d, e);
    return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
  }
}

export function saveProgress(p, day) {
  const d = day || state.currentDay;
  try { localStorage.setItem(`re-progress-day${d}`, JSON.stringify(p)); }
  catch (e) { console.warn('Failed to save progress (storage full?)', e); }
}

export function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

/* ---- Day Unlock ---- */
export function isDayUnlocked(day) {
  if (day <= 1) return true;
  if (day <= 14) return getProgress(day - 1).quizBest >= 60;
  return getProgress(14).quizBest >= 60;
}

/* ---- Streak Helper ---- */
export function updateStreakIfNeeded(p) {
  const today = todayStr();
  if (p.lastDate !== today) {
    if (p.lastDate) {
      const d = new Date(p.lastDate); d.setDate(d.getDate() + 1);
      p.streak = d.toISOString().slice(0, 10) === today ? (p.streak || 0) + 1 : 1;
    } else p.streak = 1;
    p.lastDate = today;
    if (!p.history) p.history = [];
    if (!p.history.includes(today)) p.history.push(today);
  }
  return p;
}

export function renderStreak(getSentences) {
  const p = getProgress();
  const sents = getSentences();
  const streak = p.streak || 0;
  const today = todayStr();
  const dots = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    const done = p.history && p.history.includes(ds);
    const isToday = ds === today;
    dots.push(`<div class="streak-d${done ? ' done' : ''}${isToday ? ' today' : ''}"></div>`);
  }
  const streakBar = document.querySelector('#streakBar');
  if (streakBar) {
    streakBar.innerHTML = `
      <span class="streak-fire" style="font-size:18px;font-weight:900;color:var(--acc)">*</span>
      <span class="streak-num">${streak}</span>
      <span class="streak-label">\u5929\u8FDE\u7EED</span>
      <div class="streak-dots">${dots.join('')}</div>`;
  }
  const completeSummary = document.querySelector('#completeSummary');
  if (completeSummary) {
    completeSummary.innerHTML = `\u5DF2\u5B66 <b>${p.learned.length}</b>/${sents.length} \u4E2A\u53E5\u5B50 \u00B7 \u7B2C${state.currentDay}\u5929`;
  }
}

/* ---- XP System ---- */
export function getXP() {
  return parseInt(localStorage.getItem('re-xp') || '0');
}

export function addXP(n) {
  const x = getXP() + n;
  try { localStorage.setItem('re-xp', String(x)); } catch {}
  const el = document.querySelector('#xpNum');
  if (el) el.textContent = x;
  return x;
}

export function updateXP() {
  const el = document.querySelector('#xpNum');
  if (el) el.textContent = getXP();
}

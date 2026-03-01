// Storage wrappers with error handling
import state from './state.js';

export function getRecHistory(sid) {
  try {
    return JSON.parse(localStorage.getItem(`re-rec-${sid}`) || '[]');
  } catch {
    return [];
  }
}

let _savingRecording = false;

export function saveRecording(sid, score) {
  if (!state.recBlob || _savingRecording) return;
  _savingRecording = true;
  const reader = new FileReader();
  reader.onload = () => {
    _savingRecording = false;
    const key = `re-rec-${sid}`;
    let hist = JSON.parse(localStorage.getItem(key) || '[]');
    hist.unshift({ b64: reader.result, score, ts: Date.now() });
    if (hist.length > 3) hist = hist.slice(0, 3);
    try {
      localStorage.setItem(key, JSON.stringify(hist));
    } catch (e) {
      if (hist.length > 1) {
        hist = hist.slice(0, 1);
        try { localStorage.setItem(key, JSON.stringify(hist)); } catch {}
      }
    }
    // Only update history list, do NOT call renderRecCompare to avoid infinite loop
    const histList = document.querySelector('.rec-history-list');
    if (histList) {
      let hhtml = '';
      hist.forEach((h, i) => {
        const c = h.score >= 70 ? 'var(--ok)' : h.score >= 40 ? 'var(--acc)' : 'var(--red)';
        const t = new Date(h.ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        hhtml += `<div class="rec-hist-item" onclick="window.playHistRec(${i})">
          <span class="rec-hist-score" style="color:${c}">${h.score}</span>
          <span class="rec-hist-play">\u25B6</span>
          <span class="rec-hist-time">${t}</span>
        </div>`;
      });
      histList.innerHTML = hhtml;
    }
  };
  reader.onerror = () => { _savingRecording = false; };
  reader.readAsDataURL(state.recBlob);
}

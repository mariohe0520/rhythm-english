// Shadow/follow-read practice mode
import state from '../state.js';
import { playAudio, cancelSpeech } from '../speech/tts.js';
import { startRecording, stopRecording } from '../speech/stt.js';

export function createShadowMode(getSentences, ShadowingScript) {
  const ShadowMode = {
    _script: null,
    _sentenceData: null,
    _plan: null,
    _currentStep: 0,

    start() {
      const s = getSentences()[state.idx];
      if (!s) return;
      this._sentenceData = s;
      this._plan = ShadowingScript.createPlan(s);
      this._currentStep = 0;
      document.getElementById('shadowOverlay').classList.add('active');
      this.render();
    },

    render() {
      if (!this._plan) return;
      const steps = this._plan.steps;
      const chunks = this._plan.chunks || [];
      let html = '';
      html += `<div class="sentence" style="margin-bottom:16px;font-size:18px">${this._sentenceData.text}</div>`;
      html += `<div class="ipa" style="margin-bottom:16px">${this._sentenceData.ipa}</div>`;

      steps.forEach((step, i) => {
        const isCurrent = i === this._currentStep;
        const isDone = i < this._currentStep;
        const showChunks = isCurrent && i === 1 && chunks.length;
        html += `<div class="shadow-step${isCurrent ? ' current' : ''}${isDone ? ' done' : ''}">
          <div class="shadow-step-num">\u7B2C ${step.step} \u6B65</div>
          <div class="shadow-step-title">${step.name}</div>
          <div class="shadow-step-desc">${step.instruction}</div>
          ${step.actions ? '<ul style="margin:8px 0;padding-left:20px;font-size:12px;color:var(--dim)">' + step.actions.map(a => '<li style="margin:4px 0">' + a + '</li>').join('') + '</ul>' : ''}
          ${showChunks ? '<div class="shadow-chunks">' + chunks.map((c, j) =>
            '<button class="shadow-chunk" onclick="ShadowMode.playChunk(' + j + ')">' + c.stressMarked + '</button>'
          ).join('') + '</div>' : ''}
          ${isCurrent ? '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">' +
            '<button class="audio-btn primary" onclick="ShadowMode.listen(' + i + ')">\u542C\u4E00\u542C</button>' +
            (i >= 2 ? '<button class="audio-btn rec-btn" onclick="ShadowMode.record()">\u5F55\u97F3</button>' : '') +
            '<button class="audio-btn" style="background:var(--acc)" onclick="ShadowMode.next()">\u4E0B\u4E00\u6B65</button>' +
          '</div>' : ''}
        </div>`;
      });

      document.getElementById('shadowContent').innerHTML = html;
    },

    listen(stepIdx) {
      const s = this._sentenceData;
      if (!s) return;
      playAudio(stepIdx === 0 ? 0.7 : 1, getSentences);
    },

    playChunk(chunkIdx) {
      if (typeof speechSynthesis === 'undefined') return;
      const chunk = this._plan?.chunks?.[chunkIdx];
      if (!chunk) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(chunk.text);
      u.lang = 'en-US'; u.rate = 0.75;
      speechSynthesis.speak(u);
    },

    async record() {
      // The callbacks will be bound in app.js
      await startRecording(getSentences, ShadowMode._renderRecCompare, ShadowMode._analyzeAndScore);
    },

    next() {
      if (!this._plan) return;
      this._currentStep = Math.min(this._currentStep + 1, this._plan.steps.length - 1);
      this.render();
    },

    close() {
      document.getElementById('shadowOverlay').classList.remove('active');
      if (state.isRecording) stopRecording();
    },

    // These will be set from app.js
    _renderRecCompare: null,
    _analyzeAndScore: null
  };

  return ShadowMode;
}

/* ---- Rhythm Play ---- */
export function rhythmPlay(getSentences) {
  const { playAudio: playAudioFn } = { playAudio };
  const s = getSentences()[state.idx];
  if (!s) return;
  // Cancel any running rhythm animation
  state.rhythmTimers.forEach(t => clearTimeout(t));
  state.rhythmTimers = [];
  playAudioFn(0.85, getSentences);
  const words = document.querySelectorAll('.stress-word');
  if (!words.length) return;
  const stressRow = document.querySelector('.stress-row');
  if (!stressRow) return;
  stressRow.querySelectorAll('.rhythm-ball').forEach(b => b.remove());
  // Pre-calculate positions
  const positions = [];
  const parentRect = stressRow.getBoundingClientRect();
  words.forEach(w => {
    const r = w.getBoundingClientRect();
    positions.push(r.left - parentRect.left + r.width / 2 - 6);
  });
  const ball = document.createElement('div');
  ball.className = 'rhythm-ball';
  stressRow.style.position = 'relative';
  stressRow.appendChild(ball);
  let elapsed = 0;
  s.words.forEach((w, i) => {
    const stressed = s.stress[i] >= 0.8;
    const wordTime = stressed ? 280 : 180;
    const tid = setTimeout(() => {
      requestAnimationFrame(() => {
        const wordEl = words[i];
        if (!wordEl || !ball.parentNode) return;
        ball.style.left = positions[i] + 'px';
        ball.style.top = '-16px';
        ball.className = 'rhythm-ball' + (stressed ? ' big' : '');
        ball.style.animation = 'none';
        void ball.offsetWidth;
        ball.style.animation = (stressed ? 'ballBounceBig' : 'ballBounce') + ' ' + (stressed ? '0.35s' : '0.25s') + ' ease';
        words.forEach(w => w.classList.remove('active'));
        wordEl.classList.add('active');
      });
    }, elapsed);
    state.rhythmTimers.push(tid);
    elapsed += wordTime;
  });
  const cleanupTid = setTimeout(() => {
    if (ball.parentNode) ball.remove();
    words.forEach(w => w.classList.remove('active'));
  }, elapsed + 500);
  state.rhythmTimers.push(cleanupTid);
}

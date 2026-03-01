// Pronunciation assessment: scoring, waveforms, pitch contour
import state from '../state.js';
import { getAudioCtx } from './stt.js';
import { saveRecording } from '../save.js';

/* ---- Pause Detection ---- */
export function detectPauses(audioBuf) {
  const data = audioBuf.getChannelData(0);
  const sr = audioBuf.sampleRate;
  const winSize = Math.floor(sr * 0.05);
  const minSilence = Math.floor(sr * 0.2);
  let silent = 0, pauses = 0, inSilence = false;
  for (let i = 0; i < data.length; i += winSize) {
    let sum = 0; const end = Math.min(i + winSize, data.length);
    for (let j = i; j < end; j++) sum += Math.abs(data[j]);
    const avg = sum / (end - i);
    if (avg < 0.015) { silent += (end - i); if (silent >= minSilence && !inSilence) { pauses++; inSilence = true; } }
    else { silent = 0; inSilence = false; }
  }
  return pauses;
}

/* ---- Waveform Drawing ---- */
export function drawWaveform(audioBuf, canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth * dpr;
  const H = canvas.offsetHeight * dpr;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);
  const data = audioBuf.getChannelData(0);
  const bars = 40;
  const barW = W / bars;
  const samplesPerBar = Math.floor(data.length / bars);
  const color = canvasId === 'waveNative' ? '#6366f1' : '#10b981';
  for (let i = 0; i < bars; i++) {
    let sum = 0;
    for (let j = 0; j < samplesPerBar; j++) sum += Math.abs(data[i * samplesPerBar + j] || 0);
    const avg = sum / samplesPerBar;
    const barH = Math.max(2, avg * H * 3.5);
    const x = i * barW + 1;
    const y = (H - barH) / 2;
    ctx.fillStyle = color;
    ctx.beginPath();
    if (ctx.roundRect) { ctx.roundRect(x, y, barW - 2, barH, 2); ctx.fill(); }
    else ctx.fillRect(x, y, barW - 2, barH);
  }
}

/* ---- Score Ring Rendering ---- */
export function renderScoreRing(score, dS, pS, uDur, nDur) {
  const el = document.getElementById('scoreRing');
  if (!el) return;
  const color = score >= 70 ? 'var(--ok)' : score >= 40 ? 'var(--acc)' : 'var(--red)';
  const C = 2 * Math.PI * 34;
  const offset = C - (score / 100) * C;
  el.innerHTML = `
    <svg class="score-ring-svg" width="80" height="80" viewBox="0 0 80 80">
      <circle class="score-ring-bg" cx="40" cy="40" r="34"/>
      <circle class="score-ring-fg" cx="40" cy="40" r="34" stroke="${color}"
        stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
    </svg>
    <span class="score-num" style="color:${color}">${score}</span>`;
  const detail = document.getElementById('scoreDetail');
  if (detail) {
    const durPct = Math.round(Math.max(0, Math.min(100, dS / 60 * 100)));
    const pPct = Math.round(Math.max(0, Math.min(100, pS / 40 * 100)));
    detail.innerHTML = `\u65F6\u957F\uFF1A${uDur ? uDur.toFixed(1) : '?'}\u79D2 vs ${nDur ? nDur.toFixed(1) : '?'}\u79D2 (${durPct}%) \u00B7 \u8282\u594F\uFF1A${pPct}%`;
  }
  setTimeout(() => {
    const fg = el.querySelector('.score-ring-fg');
    if (fg) fg.setAttribute('stroke-dashoffset', offset);
  }, 50);
}

/* ---- AI Score Rendering ---- */
export function renderAIScore(result) {
  const el = document.getElementById('scoreRing');
  if (!el) return;
  const score = result.rhythm.overall;
  const color = score >= 70 ? 'var(--ok)' : score >= 40 ? 'var(--acc)' : 'var(--red)';
  const C = 2 * Math.PI * 34;
  const offset = C - (score / 100) * C;
  el.innerHTML = `
    <svg class="score-ring-svg" width="80" height="80" viewBox="0 0 80 80">
      <circle class="score-ring-bg" cx="40" cy="40" r="34"/>
      <circle class="score-ring-fg" cx="40" cy="40" r="34" stroke="${color}"
        stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
    </svg>
    <span class="score-num" style="color:${color}">${score}</span>`;
  setTimeout(() => {
    const fg = el.querySelector('.score-ring-fg');
    if (fg) fg.setAttribute('stroke-dashoffset', offset);
  }, 50);

  const detail = document.getElementById('scoreDetail');
  if (detail) {
    detail.innerHTML = `
      <div class="ai-score-grid">
        <div class="ai-score-item"><label>\u91CD\u97F3</label><div class="val" style="color:${result.rhythm.stressAccuracy >= 70 ? 'var(--ok)' : 'var(--acc)'}">${result.rhythm.stressAccuracy || 0}</div></div>
        <div class="ai-score-item"><label>\u8282\u594F</label><div class="val" style="color:${result.rhythm.timingRatio >= 70 ? 'var(--ok)' : 'var(--acc)'}">${result.rhythm.timingRatio || 0}</div></div>
        <div class="ai-score-item"><label>\u8BED\u8C03</label><div class="val" style="color:${result.rhythm.intonation >= 70 ? 'var(--ok)' : 'var(--acc)'}">${result.rhythm.intonation || 0}</div></div>
        <div class="ai-score-item"><label>\u6D41\u7545\u5EA6</label><div class="val" style="color:${result.rhythm.connectedSpeech >= 70 ? 'var(--ok)' : 'var(--acc)'}">${result.rhythm.connectedSpeech || 0}</div></div>
      </div>
      ${result.rhythm.feedback && result.rhythm.feedback.length ? '<div class="coach-tip" style="margin-top:8px">' + result.rhythm.feedback.join('<br>') + '</div>' : ''}
      ${result.sentenceErrors && result.sentenceErrors.length ? '<div style="margin-top:8px">' + result.sentenceErrors.slice(0, 4).map(e => '<span class="phoneme-tip" style="white-space:pre-line">' + e.tipCn + '</span>').join(' ') + '</div>' : ''}
    `;
  }

  // Draw pitch contour if available
  if (result.prosody && result.prosody.overlay) {
    drawPitchContour(result.prosody.overlay);
  }
}

/* ---- Pitch Contour Drawing ---- */
export function drawPitchContour(overlay) {
  const canvas = document.getElementById('pitchCanvas');
  if (!canvas || !overlay) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth * dpr;
  const H = canvas.offsetHeight * dpr;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const ref = overlay.reference || [];
  const usr = overlay.user || [];
  if (!ref.length && !usr.length) return;

  const allFreqs = [...ref, ...usr].filter(f => f > 0);
  if (!allFreqs.length) return;
  const minF = Math.min(...allFreqs) * 0.9;
  const maxF = Math.max(...allFreqs) * 1.1;
  const range = maxF - minF || 1;

  function drawLine(data, color, lineWidth) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth * dpr;
    ctx.lineJoin = 'round';
    let started = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i] <= 0) { started = false; continue; }
      const x = (i / data.length) * W;
      const y = H - (data[i] - minF) / range * H;
      if (!started) { ctx.moveTo(x, y); started = true; }
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  drawLine(ref, 'rgba(99,102,241,0.7)', 2);
  drawLine(usr, 'rgba(52,211,153,0.9)', 2);
}

/* ---- Analyze and Score ---- */
export async function analyzeAndScore(getSentences, aiEngine, weaknessProfiler, CoachPanel, updateLearningStep) {
  if (!state.recBlob || state._analyzing) return;
  state._analyzing = true;
  try {
    const actx = getAudioCtx();
    let userAudio = null;
    try {
      const userBuf = await state.recBlob.arrayBuffer();
      userAudio = await actx.decodeAudioData(userBuf.slice(0));
      state._userAudioBuf = userAudio;
      state.recUserDur = userAudio.duration;
      drawWaveform(userAudio, 'waveUser');
    } catch (de) {
      console.warn('decodeAudioData failed, continuing with AI analysis:', de);
      if (!state.recUserDur) state.recUserDur = Math.max(1, state.recBlob.size / 2000);
    }
    const s = getSentences()[state.idx];
    const id = String(s.id).padStart(2, '0');

    // Try AI engine analysis
    if (aiEngine) {
      try {
        const nativeResp = await fetch('audio/' + id + '.mp3');
        let nativeBlob = null;
        if (nativeResp.ok) nativeBlob = await nativeResp.blob();

        const result = await aiEngine.analyzeRecording(state.recBlob, nativeBlob, {
          words: s.words,
          stress: s.stress,
          sentenceId: s.id,
          dayNum: state.currentDay
        });

        if (nativeBlob) {
          const natBuf = await nativeBlob.arrayBuffer();
          const natAudio = await actx.decodeAudioData(natBuf.slice(0));
          state._nativeAudioBuf = natAudio;
          state.recNativeDur = natAudio.duration;
          drawWaveform(natAudio, 'waveNative');
        }

        state.recScore = result.rhythm.overall;
        renderAIScore(result);
        updateLearningStep(4);
        saveRecording(s.id, state.recScore);

        // Update weakness profiler
        weaknessProfiler.recordAttempt({
          scores: {
            stress: (result.rhythm.stressAccuracy || 0) / 100,
            intonation: (result.rhythm.intonation || 0) / 100,
            linking: (result.rhythm.connectedSpeech || 0) / 100,
            speed: (result.rhythm.timingRatio || 0) / 100,
            vowels: 0.7,
            consonants: 0.7
          }
        });

        // Update coach panel if open
        if (document.getElementById('coachPanel').classList.contains('open')) {
          CoachPanel.render();
        }

        state._analyzing = false;
        return;
      } catch (e) { console.warn('AI analysis fallback:', e); }
    }

    // Fallback to basic analysis
    let nativeDur = s.words.length * 0.3;
    let nativePauses = Math.max(0, Math.floor(s.words.length / 5) - 1);
    try {
      const resp = await fetch('audio/' + id + '.mp3');
      if (resp.ok) {
        const natBuf = await resp.arrayBuffer();
        const natAudio = await actx.decodeAudioData(natBuf.slice(0));
        nativeDur = natAudio.duration;
        nativePauses = detectPauses(natAudio);
        state._nativeAudioBuf = natAudio;
        state.recNativeDur = nativeDur;
        drawWaveform(natAudio, 'waveNative');
      }
    } catch {}
    const userDur = userAudio ? userAudio.duration : (state.recUserDur || 3);
    state.recUserDur = userDur;
    const durRatio = userDur / Math.max(nativeDur, 0.5);
    const durScore = Math.max(0, 60 * (1 - Math.abs(durRatio - 1) * 2));
    const userPauses = userAudio ? detectPauses(userAudio) : 0;
    const pauseDiff = Math.abs(userPauses - nativePauses);
    const pauseScore = Math.max(0, 40 - pauseDiff * 12);
    const totalScore = Math.round(Math.min(100, Math.max(0, durScore + pauseScore)));
    state.recScore = totalScore;
    renderScoreRing(totalScore, durScore, pauseScore, userDur, nativeDur);
    updateLearningStep(4);
    saveRecording(s.id, state.recScore);
  } catch (e) { console.error('Analysis error:', e); }
  finally { state._analyzing = false; }
}

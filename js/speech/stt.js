// Speech-to-text: recording, AudioContext, WAV encoding
import state from '../state.js';
import { REC_TIMEOUT_MS } from '../config.js';

/* ---- AudioContext ---- */
export function getAudioCtx() {
  if (!state.audioCtx) {
    state.audioCtx = new (window.AudioContext || window.webkitAudioContext)({
      latencyHint: 'interactive',
      sampleRate: 44100
    });
  }
  if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
  return state.audioCtx;
}

/* iOS AudioContext unlock */
export function initAudioUnlock() {
  let _unlocked = false;
  function _unlockAudio() {
    if (_unlocked) return;
    _unlocked = true;
    if (window.AudioContext || window.webkitAudioContext) {
      const actx = getAudioCtx();
      actx.resume().catch(() => {});
    }
  }
  document.addEventListener('touchstart', _unlockAudio, { once: true, passive: true });
  document.addEventListener('click', _unlockAudio, { once: true, passive: true });
}

/* ---- MIME type detection ---- */
export function getRecMimeType() {
  if (typeof MediaRecorder === 'undefined') return '';
  const types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/aac', 'audio/ogg;codecs=opus'];
  for (const t of types) { if (MediaRecorder.isTypeSupported(t)) return t; }
  return '';
}

/* ---- WAV encoder for Safari fallback ---- */
export function encodeWAV(samples, sampleRate) {
  const buf = new ArrayBuffer(44 + samples.length * 2);
  const v = new DataView(buf);
  function ws(o, s) { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }
  ws(0, 'RIFF'); v.setUint32(4, 36 + samples.length * 2, true); ws(8, 'WAVE');
  ws(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, sampleRate, true); v.setUint32(28, sampleRate * 2, true);
  v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  ws(36, 'data'); v.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return new Blob([v], { type: 'audio/wav' });
}

/* ---- Recording ---- */
export async function startRecording(getSentences, renderRecCompare, analyzeAndScore) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, latency: 0 }
    });
    state.recChunks = [];
    state.recSentenceId = getSentences()[state.idx].id;
    state.recScore = null;
    state.recUserDur = null;
    state.recNativeDur = null;
    state._userAudioBuf = null;
    state._nativeAudioBuf = null;

    const mimeType = getRecMimeType();
    const useMediaRecorder = typeof MediaRecorder !== 'undefined' && mimeType !== '';

    if (useMediaRecorder) {
      const opts = { audioBitsPerSecond: 64000 };
      if (mimeType) opts.mimeType = mimeType;
      state.mediaRecorder = new MediaRecorder(stream, opts);
      state.mediaRecorder.ondataavailable = e => { if (e.data.size > 0) state.recChunks.push(e.data); };
      state.mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        state.recBlob = new Blob(state.recChunks, { type: mimeType || 'audio/webm' });
        if (state.recUrl) URL.revokeObjectURL(state.recUrl);
        state.recUrl = URL.createObjectURL(state.recBlob);
        state.isRecording = false;
        if (state.recTimerId) { clearInterval(state.recTimerId); state.recTimerId = null; }
        const btn = document.getElementById('recBtn');
        if (btn) { btn.classList.remove('recording'); btn.innerHTML = '&#9679; \u5F55\u97F3'; }
        renderRecCompare();
        await analyzeAndScore();
      };
      state.mediaRecorder.start(50);
    } else {
      /* AudioContext + ScriptProcessor fallback (old Safari) */
      const actx = getAudioCtx();
      state._fallbackStream = stream;
      state._fallbackSource = actx.createMediaStreamSource(stream);
      state._fallbackProcessor = actx.createScriptProcessor(2048, 1, 1);
      state._fallbackChunks = [];
      state._fallbackProcessor.onaudioprocess = e => {
        if (!state.isRecording) return;
        const input = e.inputBuffer.getChannelData(0);
        state._fallbackChunks.push(new Float32Array(input));
      };
      state._fallbackSource.connect(state._fallbackProcessor);
      state._fallbackProcessor.connect(actx.destination);
      state.mediaRecorder = {
        state: 'recording',
        stop: function() {
          state._fallbackProcessor.disconnect();
          state._fallbackSource.disconnect();
          stream.getTracks().forEach(t => t.stop());
          const totalLen = state._fallbackChunks.reduce((a, c) => a + c.length, 0);
          const merged = new Float32Array(totalLen);
          let offset = 0;
          for (const chunk of state._fallbackChunks) { merged.set(chunk, offset); offset += chunk.length; }
          state.recBlob = encodeWAV(merged, actx.sampleRate);
          if (state.recUrl) URL.revokeObjectURL(state.recUrl);
          state.recUrl = URL.createObjectURL(state.recBlob);
          state.isRecording = false;
          if (state.recTimerId) { clearInterval(state.recTimerId); state.recTimerId = null; }
          const btn = document.getElementById('recBtn');
          if (btn) { btn.classList.remove('recording'); btn.innerHTML = '&#9679; \u5F55\u97F3'; }
          state._fallbackStream = null; state._fallbackSource = null;
          state._fallbackProcessor = null; state._fallbackChunks = [];
          renderRecCompare();
          analyzeAndScore();
        }
      };
    }

    state.isRecording = true;
    state.recStartTime = Date.now();
    const btn = document.getElementById('recBtn');
    if (btn) { btn.classList.add('recording'); btn.innerHTML = '&#9632; <span class="rec-timer">0.0s</span>'; }
    state.recTimerId = setInterval(() => {
      const el = document.querySelector('.rec-timer');
      if (el) el.textContent = ((Date.now() - state.recStartTime) / 1000).toFixed(1) + 's';
    }, 100);
    setTimeout(() => { if (state.isRecording) stopRecording(); }, REC_TIMEOUT_MS);
  } catch (e) {
    console.error('Mic error:', e.name, e.message);
    state.isRecording = false;
    if (state.recTimerId) { clearInterval(state.recTimerId); state.recTimerId = null; }
    const btn = document.getElementById('recBtn');
    if (btn) { btn.classList.remove('recording'); btn.innerHTML = '&#9679; \u5F55\u97F3'; }
    let msg = '\u65E0\u6CD5\u4F7F\u7528\u9EA6\u514B\u98CE\uFF0C\u8BF7\u91CD\u8BD5\u3002';
    if (e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError') {
      msg = '\u9EA6\u514B\u98CE\u6743\u9650\u88AB\u62D2\u7EDD\u3002\n\n\u8BF7\u5728\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E2D\u627E\u5230\u672C\u7AD9\u70B9\uFF0C\n\u5141\u8BB8\u9EA6\u514B\u98CE\u6743\u9650\u540E\u5237\u65B0\u9875\u9762\u3002';
    } else if (e.name === 'NotFoundError' || e.name === 'DevicesNotFoundError') {
      msg = '\u672A\u627E\u5230\u9EA6\u514B\u98CE\u8BBE\u5907\uFF0C\n\u8BF7\u786E\u8BA4\u9EA6\u514B\u98CE\u5DF2\u6B63\u786E\u8FDE\u63A5\u3002';
    } else if (e.name === 'NotSupportedError') {
      msg = '\u6B64\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5F55\u97F3\u3002\n\u8BF7\u4F7F\u7528 Chrome \u6216 Safari\uFF08iOS 14.5+\uFF09\u3002';
    } else if (e.name === 'NotReadableError' || e.name === 'TrackStartError') {
      msg = '\u9EA6\u514B\u98CE\u88AB\u5176\u4ED6\u5E94\u7528\u5360\u7528\uFF0C\n\u8BF7\u5173\u95ED\u5176\u4ED6\u4F7F\u7528\u9EA6\u514B\u98CE\u7684\u5E94\u7528\u540E\u91CD\u8BD5\u3002';
    }
    alert(msg);
  }
}

export function stopRecording() {
  if (state.mediaRecorder) {
    if (typeof state.mediaRecorder.stop === 'function') state.mediaRecorder.stop();
  }
  state.isRecording = false;
  if (state.recTimerId) { clearInterval(state.recTimerId); state.recTimerId = null; }
  const btn = document.getElementById('recBtn');
  if (btn) { btn.classList.remove('recording'); btn.innerHTML = '&#9679; \u5F55\u97F3'; }
}

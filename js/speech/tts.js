// Text-to-speech wrapper with iOS compatibility
import state from '../state.js';

export function speak(text, rate = 1, lang = 'en-US') {
  if (typeof speechSynthesis === 'undefined') return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = rate * 0.85;
  speechSynthesis.speak(u);
}

export function cancelSpeech() {
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
}

/**
 * Play audio file with 3-level fallback: MP3 -> M4A -> TTS
 */
export function playAudio(rate = 1, getSentences) {
  if (state.audio) {
    state.audio.pause();
    state.audio.onplay = null;
    state.audio.onended = null;
    state.audio.onerror = null;
    state.audio.src = '';
    state.audio = null;
  }
  cancelSpeech();

  const sents = getSentences();
  if (!sents.length) return;
  const s = sents[state.idx];
  if (!s) return;
  const id = String(s.id).padStart(2, '0');
  const btn = document.getElementById('playBtn');

  function fallbackToTTS() {
    if (btn) btn.classList.remove('playing');
    speak(s.text, rate);
  }

  function tryM4a() {
    state.audio = new Audio('audio/' + id + '.m4a');
    state.audio.playbackRate = rate;
    state.audio.onplay = () => { if (btn) btn.classList.add('playing'); };
    state.audio.onended = () => { if (btn) btn.classList.remove('playing'); };
    state.audio.onerror = fallbackToTTS;
    state.audio.play().catch(() => { if (state.audio && state.audio.onerror) state.audio.onerror(); });
  }

  state.audio = new Audio('audio/' + id + '.mp3');
  state.audio.playbackRate = rate;
  state.audio.onplay = () => { if (btn) btn.classList.add('playing'); };
  state.audio.onended = () => { if (btn) btn.classList.remove('playing'); };
  state.audio.onerror = tryM4a;
  state.audio.play().catch(() => { if (state.audio && state.audio.onerror) state.audio.onerror(); });
}

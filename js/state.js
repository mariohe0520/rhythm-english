// Shared mutable state across all modules
const state = {
  currentDay: parseInt(localStorage.getItem('re-currentDay') || '1') || 1,
  idx: 0,
  cnMode: localStorage.getItem('re-cn') === '1',
  audio: null,
  isRecording: false,
  mediaRecorder: null,
  recChunks: [],
  recBlob: null,
  recUrl: null,
  recSentenceId: null,
  recScore: null,
  recTimerId: null,
  recStartTime: 0,
  recUserDur: null,
  recNativeDur: null,
  _userAudioBuf: null,
  _nativeAudioBuf: null,
  audioCtx: null,
  cmpAudio: null,
  rhythmTimers: [],
  navLock: false,
  activeCategoryFilter: null,
  // Swipe state
  sx: 0,
  sy: 0,
  swiping: false,
  // Fallback recorder state
  _fallbackStream: null,
  _fallbackSource: null,
  _fallbackProcessor: null,
  _fallbackChunks: [],
  _analyzing: false,
  _savingRecording: false
};

export default state;

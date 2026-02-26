/**
 * @fileoverview Comprehensive AI Pronunciation Analysis Engine for Rhythm English.
 *
 * A self-contained, browser-only ES module that provides real-time pitch detection,
 * rhythm/prosody analysis, adaptive coaching, and phoneme-level error detection
 * tailored for Chinese speakers learning English.
 *
 * No external dependencies. Uses Web Audio API, localStorage, and modern ES2020+.
 *
 * @module ai-engine
 * @version 1.0.0
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Minimum frequency (Hz) considered voiced speech */
const MIN_F0 = 75;
/** Maximum frequency (Hz) considered voiced speech */
const MAX_F0 = 500;
/** RMS threshold below which a frame is considered silence */
const SILENCE_THRESHOLD = 0.015;
/** Autocorrelation confidence floor for voiced detection */
const CONFIDENCE_THRESHOLD = 0.85;
/** Default sample rate for analysis windows */
const DEFAULT_SAMPLE_RATE = 44100;
/** Frame size in seconds for pitch analysis */
const FRAME_DURATION = 0.02;
/** Hop size in seconds between frames */
const HOP_DURATION = 0.01;

// ---------------------------------------------------------------------------
// 1. PitchDetector
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} PitchFrame
 * @property {number} time      - Timestamp in seconds from the start of recording
 * @property {number} frequency - Detected F0 in Hz (0 if unvoiced)
 * @property {number} confidence - Detection confidence 0..1
 * @property {number} rms       - Root mean square energy of the frame
 */

/**
 * Real-time fundamental frequency (F0) extraction using autocorrelation
 * on Web Audio API AnalyserNode data.
 *
 * Handles noise floor detection, voiced/unvoiced classification, and produces
 * a pitch contour over time suitable for prosody analysis.
 */
export class PitchDetector {
  /**
   * @param {Object} [options]
   * @param {number} [options.sampleRate=44100]       - Audio sample rate
   * @param {number} [options.fftSize=2048]           - AnalyserNode FFT size
   * @param {number} [options.minF0=75]               - Lowest detectable pitch
   * @param {number} [options.maxF0=500]              - Highest detectable pitch
   * @param {number} [options.silenceThreshold=0.015] - RMS below this is silence
   * @param {number} [options.confidenceThreshold=0.85] - Autocorrelation peak floor
   */
  constructor(options = {}) {
    this.sampleRate = options.sampleRate || DEFAULT_SAMPLE_RATE;
    this.fftSize = options.fftSize || 2048;
    this.minF0 = options.minF0 || MIN_F0;
    this.maxF0 = options.maxF0 || MAX_F0;
    this.silenceThreshold = options.silenceThreshold || SILENCE_THRESHOLD;
    this.confidenceThreshold = options.confidenceThreshold || CONFIDENCE_THRESHOLD;

    /** @type {AudioContext|null} */
    this._ctx = null;
    /** @type {AnalyserNode|null} */
    this._analyser = null;
    /** @type {MediaStreamAudioSourceNode|null} */
    this._source = null;
    /** @type {PitchFrame[]} */
    this._contour = [];
    this._running = false;
    this._startTime = 0;
    this._rafId = 0;
  }

  /**
   * Start real-time pitch tracking from the microphone.
   * @param {MediaStream} stream - getUserMedia stream
   * @returns {Promise<void>}
   */
  async start(stream) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this._ctx = new AudioCtx();
    this.sampleRate = this._ctx.sampleRate;

    this._analyser = this._ctx.createAnalyser();
    this._analyser.fftSize = this.fftSize;

    this._source = this._ctx.createMediaStreamSource(stream);
    this._source.connect(this._analyser);

    this._contour = [];
    this._running = true;
    this._startTime = performance.now();
    this._tick();
  }

  /** Stop real-time tracking and return the accumulated contour. */
  stop() {
    this._running = false;
    if (this._rafId) cancelAnimationFrame(this._rafId);
    if (this._source) this._source.disconnect();
    if (this._ctx && this._ctx.state !== 'closed') {
      this._ctx.close().catch(() => {});
    }
    return this.getContour();
  }

  /**
   * Return the current pitch contour (array of PitchFrame).
   * @returns {PitchFrame[]}
   */
  getContour() {
    return this._contour.slice();
  }

  /**
   * Analyze an offline AudioBuffer and return the full pitch contour.
   * Useful for analyzing a pre-recorded blob without real-time streaming.
   * @param {AudioBuffer} audioBuffer
   * @returns {PitchFrame[]}
   */
  analyzeBuffer(audioBuffer) {
    const data = audioBuffer.getChannelData(0);
    const sr = audioBuffer.sampleRate;
    const frameLen = Math.round(FRAME_DURATION * sr);
    const hopLen = Math.round(HOP_DURATION * sr);
    const contour = [];

    for (let offset = 0; offset + frameLen <= data.length; offset += hopLen) {
      const frame = data.subarray(offset, offset + frameLen);
      const time = offset / sr;
      const rms = this._computeRMS(frame);

      if (rms < this.silenceThreshold) {
        contour.push({ time, frequency: 0, confidence: 0, rms });
        continue;
      }

      const { frequency, confidence } = this._autocorrelate(frame, sr);
      contour.push({ time, frequency, confidence, rms });
    }

    return contour;
  }

  // -- Private ---------------------------------------------------------------

  /** @private */
  _tick() {
    if (!this._running) return;
    const buf = new Float32Array(this._analyser.fftSize);
    this._analyser.getFloatTimeDomainData(buf);

    const time = (performance.now() - this._startTime) / 1000;
    const rms = this._computeRMS(buf);

    if (rms < this.silenceThreshold) {
      this._contour.push({ time, frequency: 0, confidence: 0, rms });
    } else {
      const { frequency, confidence } = this._autocorrelate(buf, this.sampleRate);
      this._contour.push({ time, frequency, confidence, rms });
    }

    this._rafId = requestAnimationFrame(() => this._tick());
  }

  /**
   * Compute RMS energy of a Float32Array.
   * @param {Float32Array} buf
   * @returns {number}
   * @private
   */
  _computeRMS(buf) {
    let sum = 0;
    for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
    return Math.sqrt(sum / buf.length);
  }

  /**
   * Autocorrelation-based pitch detection.
   * Finds the lag with the highest normalized autocorrelation that
   * falls within the expected F0 range.
   *
   * @param {Float32Array} buf
   * @param {number} sr - sample rate
   * @returns {{frequency: number, confidence: number}}
   * @private
   */
  _autocorrelate(buf, sr) {
    const n = buf.length;
    const minLag = Math.floor(sr / this.maxF0);
    const maxLag = Math.ceil(sr / this.minF0);

    // Compute energy for normalization
    let energy0 = 0;
    for (let i = 0; i < n; i++) energy0 += buf[i] * buf[i];
    if (energy0 < 1e-10) return { frequency: 0, confidence: 0 };

    let bestLag = 0;
    let bestCorr = -1;

    for (let lag = minLag; lag <= maxLag && lag < n; lag++) {
      let corr = 0;
      let energyLag = 0;
      for (let i = 0; i < n - lag; i++) {
        corr += buf[i] * buf[i + lag];
        energyLag += buf[i + lag] * buf[i + lag];
      }
      // Normalized autocorrelation
      const norm = Math.sqrt(energy0 * energyLag);
      if (norm > 0) corr /= norm;

      if (corr > bestCorr) {
        bestCorr = corr;
        bestLag = lag;
      }
    }

    if (bestCorr < this.confidenceThreshold || bestLag === 0) {
      return { frequency: 0, confidence: bestCorr };
    }

    // Parabolic interpolation around the peak for sub-sample accuracy
    const prev = this._corrAtLag(buf, bestLag - 1, energy0);
    const curr = bestCorr;
    const next = this._corrAtLag(buf, bestLag + 1, energy0);
    const shift = (prev - next) / (2 * (prev - 2 * curr + next));
    const refinedLag = bestLag + (isFinite(shift) ? shift : 0);

    const frequency = sr / refinedLag;
    return {
      frequency: frequency >= this.minF0 && frequency <= this.maxF0 ? frequency : 0,
      confidence: Math.max(0, Math.min(1, bestCorr))
    };
  }

  /**
   * Compute normalized autocorrelation at a specific lag.
   * @private
   */
  _corrAtLag(buf, lag, energy0) {
    if (lag < 0 || lag >= buf.length) return -1;
    const n = buf.length;
    let corr = 0;
    let energyLag = 0;
    for (let i = 0; i < n - lag; i++) {
      corr += buf[i] * buf[i + lag];
      energyLag += buf[i + lag] * buf[i + lag];
    }
    const norm = Math.sqrt(energy0 * energyLag);
    return norm > 0 ? corr / norm : -1;
  }
}

// ---------------------------------------------------------------------------
// 2. RhythmAnalyzer
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} RhythmScore
 * @property {number} overall         - Combined score 0..100
 * @property {number} stressAccuracy  - How well the user stressed the right syllables 0..100
 * @property {number} timingRatio     - Ratio of stressed:unstressed duration quality 0..100
 * @property {number} intonation      - Intonation pattern match 0..100
 * @property {number} connectedSpeech - Linking/elision quality 0..100
 * @property {number} speakingRate    - Words per minute
 * @property {string} intonationPattern - Detected pattern: "rising"|"falling"|"rise-fall"|"flat"
 * @property {string[]} feedback      - Human-readable feedback items
 */

/**
 * Analyzes rhythm, stress, intonation, and connected speech from a pitch contour
 * combined with expected stress patterns from the lesson data.
 */
export class RhythmAnalyzer {
  /**
   * Analyze a user's recording against the expected stress pattern.
   *
   * @param {PitchFrame[]} contour        - Pitch contour from PitchDetector
   * @param {string[]}     words          - Array of words (e.g. ["Let's","kick","things","off"])
   * @param {number[]}     expectedStress - Stress weight per word (0..1, >=0.8 = stressed)
   * @returns {RhythmScore}
   */
  analyze(contour, words, expectedStress) {
    if (!contour.length || !words.length) {
      return this._emptyScore();
    }

    const voicedFrames = contour.filter(f => f.frequency > 0 && f.confidence > 0.5);
    const totalDuration = contour.length > 0
      ? contour[contour.length - 1].time - contour[0].time
      : 0;
    const speakingRate = totalDuration > 0 ? (words.length / totalDuration) * 60 : 0;

    // Segment the contour into approximate word regions (equal division)
    const segments = this._segmentByWords(contour, words.length);

    // -- Stress accuracy --
    const stressAccuracy = this._computeStressAccuracy(segments, expectedStress);

    // -- Timing ratio --
    const timingRatio = this._computeTimingRatio(segments, expectedStress);

    // -- Intonation pattern --
    const { score: intonation, pattern: intonationPattern } =
      this._computeIntonation(contour, words);

    // -- Connected speech --
    const connectedSpeech = this._computeConnectedSpeech(contour, segments);

    // -- Overall (weighted combination) --
    const overall = Math.round(
      stressAccuracy * 0.35 +
      timingRatio * 0.25 +
      intonation * 0.20 +
      connectedSpeech * 0.20
    );

    const feedback = this._generateFeedback(
      stressAccuracy, timingRatio, intonation, connectedSpeech,
      speakingRate, intonationPattern, words, expectedStress
    );

    return {
      overall: clamp(overall, 0, 100),
      stressAccuracy: Math.round(stressAccuracy),
      timingRatio: Math.round(timingRatio),
      intonation: Math.round(intonation),
      connectedSpeech: Math.round(connectedSpeech),
      speakingRate: Math.round(speakingRate),
      intonationPattern,
      feedback
    };
  }

  // -- Private ---------------------------------------------------------------

  /**
   * Divide the contour into N roughly equal segments corresponding to words.
   * @private
   */
  _segmentByWords(contour, wordCount) {
    const segSize = Math.max(1, Math.floor(contour.length / wordCount));
    const segments = [];
    for (let i = 0; i < wordCount; i++) {
      const start = i * segSize;
      const end = i === wordCount - 1 ? contour.length : (i + 1) * segSize;
      segments.push(contour.slice(start, end));
    }
    return segments;
  }

  /**
   * Score how well the user's energy/pitch patterns match expected stress.
   * Stressed syllables should have higher RMS and wider pitch range.
   * @private
   */
  _computeStressAccuracy(segments, expectedStress) {
    if (segments.length === 0) return 50;

    const energies = segments.map(seg => {
      if (seg.length === 0) return 0;
      return seg.reduce((sum, f) => sum + f.rms, 0) / seg.length;
    });
    const pitchRanges = segments.map(seg => {
      const voiced = seg.filter(f => f.frequency > 0);
      if (voiced.length < 2) return 0;
      const freqs = voiced.map(f => f.frequency);
      return Math.max(...freqs) - Math.min(...freqs);
    });

    // Normalize to 0..1
    const maxE = Math.max(...energies, 1e-10);
    const maxP = Math.max(...pitchRanges, 1e-10);
    const normE = energies.map(e => e / maxE);
    const normP = pitchRanges.map(p => p / maxP);

    // Combined prominence = 0.6*energy + 0.4*pitch_range
    const prominence = normE.map((e, i) => 0.6 * e + 0.4 * normP[i]);

    // Compare ranking: stressed words should have higher prominence
    let correct = 0;
    let total = 0;
    const medianProm = median(prominence);

    for (let i = 0; i < expectedStress.length && i < prominence.length; i++) {
      const expectHigh = expectedStress[i] >= 0.8;
      const expectLow = expectedStress[i] < 0.4;
      if (expectHigh || expectLow) {
        total++;
        const isHigh = prominence[i] >= medianProm;
        if ((expectHigh && isHigh) || (expectLow && !isHigh)) correct++;
      }
    }

    return total > 0 ? (correct / total) * 100 : 70;
  }

  /**
   * Check whether stressed syllables are approximately 1.5-2x the duration
   * of unstressed syllables (measured by voiced frame count).
   * @private
   */
  _computeTimingRatio(segments, expectedStress) {
    const stressedDurations = [];
    const unstressedDurations = [];

    for (let i = 0; i < segments.length && i < expectedStress.length; i++) {
      const voicedCount = segments[i].filter(f => f.frequency > 0).length;
      if (expectedStress[i] >= 0.8) stressedDurations.push(voicedCount);
      else if (expectedStress[i] < 0.4) unstressedDurations.push(voicedCount);
    }

    if (stressedDurations.length === 0 || unstressedDurations.length === 0) return 65;

    const avgStressed = mean(stressedDurations);
    const avgUnstressed = mean(unstressedDurations);
    if (avgUnstressed < 1) return 70;

    const ratio = avgStressed / avgUnstressed;
    // Ideal ratio is around 1.5-2.0 for English stress timing
    const idealMin = 1.3;
    const idealMax = 2.5;
    if (ratio >= idealMin && ratio <= idealMax) return 100;
    const dist = ratio < idealMin
      ? (idealMin - ratio) / idealMin
      : (ratio - idealMax) / idealMax;
    return Math.max(0, Math.round(100 - dist * 120));
  }

  /**
   * Detect and score the intonation pattern of the utterance.
   * @private
   */
  _computeIntonation(contour, words) {
    const voiced = contour.filter(f => f.frequency > 0 && f.confidence > 0.5);
    if (voiced.length < 4) return { score: 50, pattern: 'flat' };

    const total = voiced.length;
    const q1 = voiced.slice(0, Math.floor(total / 3));
    const q3 = voiced.slice(Math.floor(total * 2 / 3));

    const avgFirst = mean(q1.map(f => f.frequency));
    const avgLast = mean(q3.map(f => f.frequency));
    const midFrames = voiced.slice(Math.floor(total / 3), Math.floor(total * 2 / 3));
    const avgMid = midFrames.length > 0 ? mean(midFrames.map(f => f.frequency)) : avgFirst;

    const riseFall = avgMid > avgFirst && avgMid > avgLast;
    const rising = avgLast > avgFirst * 1.08;
    const falling = avgFirst > avgLast * 1.08;

    // Detect whether the sentence is a question (simple heuristic)
    const lastWord = (words[words.length - 1] || '').toLowerCase().replace(/[?.!]/g, '');
    const text = words.join(' ');
    const isQuestion = text.endsWith('?') ||
      /^(where|what|when|who|how|why|is|are|do|does|did|can|could|would|will|shall)/i.test(text);

    let pattern = 'flat';
    let score = 60;

    if (riseFall) {
      pattern = 'rise-fall';
      // Rise-fall is common for statements; reward if not a yes/no question
      score = isQuestion ? 55 : 85;
    } else if (rising) {
      pattern = 'rising';
      // Rising is good for questions
      score = isQuestion ? 90 : 60;
    } else if (falling) {
      pattern = 'falling';
      // Falling is natural for statements and wh-questions
      score = isQuestion ? 70 : 85;
    } else {
      pattern = 'flat';
      // Flat intonation is generally undesirable
      score = 40;
    }

    return { score, pattern };
  }

  /**
   * Measure connected speech quality: fewer long pauses within the utterance
   * and smoother energy transitions indicate better linking.
   * @private
   */
  _computeConnectedSpeech(contour, segments) {
    if (contour.length < 10) return 50;

    // Count internal pauses (silence stretches > 200ms)
    let silentRun = 0;
    let internalPauses = 0;
    const hopTime = contour.length > 1
      ? contour[1].time - contour[0].time
      : HOP_DURATION;
    const pauseThreshold = Math.round(0.2 / hopTime);

    // Skip leading/trailing silence
    let firstVoiced = 0;
    let lastVoiced = contour.length - 1;
    while (firstVoiced < contour.length && contour[firstVoiced].rms < SILENCE_THRESHOLD) firstVoiced++;
    while (lastVoiced > firstVoiced && contour[lastVoiced].rms < SILENCE_THRESHOLD) lastVoiced--;

    for (let i = firstVoiced; i <= lastVoiced; i++) {
      if (contour[i].rms < SILENCE_THRESHOLD) {
        silentRun++;
        if (silentRun === pauseThreshold) internalPauses++;
      } else {
        silentRun = 0;
      }
    }

    // Ideal: few pauses for a short phrase
    const wordCount = segments.length;
    const expectedPauses = Math.max(0, Math.floor(wordCount / 5) - 1);
    const pausePenalty = Math.abs(internalPauses - expectedPauses) * 15;

    // Smoothness: standard deviation of RMS across voiced frames
    const voicedRMS = contour.slice(firstVoiced, lastVoiced + 1)
      .filter(f => f.rms >= SILENCE_THRESHOLD)
      .map(f => f.rms);
    const rmsStd = voicedRMS.length > 1 ? stddev(voicedRMS) : 0;
    // Lower std = smoother = better (but some variation is natural)
    const smoothnessScore = Math.max(0, 100 - rmsStd * 800);

    return clamp(Math.round((smoothnessScore * 0.5) + (Math.max(0, 100 - pausePenalty) * 0.5)), 0, 100);
  }

  /**
   * Generate human-readable feedback strings.
   * @private
   */
  _generateFeedback(stressAcc, timingR, inton, connected, wpm, pattern, words, stress) {
    const fb = [];

    if (stressAcc >= 85) fb.push('Great stress placement -- you hit the strong beats!');
    else if (stressAcc >= 60) fb.push('Stress is close, but some key words need more emphasis.');
    else {
      const heavyWords = words.filter((_, i) => stress[i] >= 0.8);
      fb.push(`Try punching harder on: ${heavyWords.map(w => w.toUpperCase()).join(', ')}`);
    }

    if (timingR < 50) fb.push('Unstressed syllables should be shorter and lighter -- let them slide.');
    if (pattern === 'flat') fb.push('Your pitch sounds flat. Try exaggerating the melody more.');
    if (pattern === 'rising' && !words.join(' ').endsWith('?')) {
      fb.push('Your pitch rises at the end -- for statements, let it fall.');
    }

    if (wpm > 0) {
      if (wpm > 200) fb.push('You are speaking quite fast. Slow down to nail the rhythm first.');
      else if (wpm < 80) fb.push('A bit slow -- once you feel the rhythm, try speeding up naturally.');
    }

    if (connected < 50) fb.push('Too many pauses between words. Try linking them together smoothly.');

    return fb;
  }

  /** @private */
  _emptyScore() {
    return {
      overall: 0, stressAccuracy: 0, timingRatio: 0, intonation: 0,
      connectedSpeech: 0, speakingRate: 0, intonationPattern: 'flat', feedback: []
    };
  }
}

// ---------------------------------------------------------------------------
// 3. ProsodyComparator
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} ProsodyComparison
 * @property {number}   similarity      - Overall similarity score 0..100
 * @property {number}   pitchSimilarity - Pitch contour similarity 0..100
 * @property {number}   tempSimilarity  - Tempo/timing similarity 0..100
 * @property {Object[]} problemAreas    - Identified issues
 * @property {string}   problemAreas[].type - "too_flat"|"wrong_direction"|"too_fast"|"too_slow"
 * @property {number}   problemAreas[].startTime
 * @property {number}   problemAreas[].endTime
 * @property {string}   problemAreas[].description
 * @property {Object}   overlay         - Aligned contours for visualization
 * @property {number[]} overlay.reference - Reference pitch values (aligned)
 * @property {number[]} overlay.user      - User pitch values (aligned)
 * @property {number[]} overlay.times     - Shared time axis
 */

/**
 * Compares a user's pitch contour against a reference (native) contour
 * using Dynamic Time Warping for alignment, then scores similarity
 * and identifies specific problem areas.
 */
export class ProsodyComparator {
  /**
   * Compare user contour against a reference contour.
   *
   * @param {PitchFrame[]} userContour
   * @param {PitchFrame[]} refContour
   * @returns {ProsodyComparison}
   */
  compare(userContour, refContour) {
    // Extract voiced pitch sequences
    const userPitch = this._extractPitchSeries(userContour);
    const refPitch = this._extractPitchSeries(refContour);

    if (userPitch.length < 3 || refPitch.length < 3) {
      return this._emptyComparison();
    }

    // Normalize pitches to semitones relative to the speaker's mean
    const userSemi = this._toSemitones(userPitch);
    const refSemi = this._toSemitones(refPitch);

    // Dynamic Time Warping
    const { path, distance } = this._dtw(userSemi, refSemi);

    // Pitch contour similarity from DTW distance
    const avgDist = distance / path.length;
    const pitchSimilarity = clamp(Math.round(100 - avgDist * 8), 0, 100);

    // Tempo similarity: ratio of durations
    const userDur = userContour.length > 0
      ? userContour[userContour.length - 1].time - userContour[0].time
      : 0;
    const refDur = refContour.length > 0
      ? refContour[refContour.length - 1].time - refContour[0].time
      : 0;
    const tempoRatio = refDur > 0 ? userDur / refDur : 1;
    const tempSimilarity = clamp(Math.round(100 - Math.abs(tempoRatio - 1) * 120), 0, 100);

    // Overall similarity
    const similarity = Math.round(pitchSimilarity * 0.65 + tempSimilarity * 0.35);

    // Build aligned overlay for visualization
    const overlay = this._buildOverlay(userSemi, refSemi, userContour, refContour, path);

    // Identify problem areas
    const problemAreas = this._findProblems(
      userSemi, refSemi, userContour, refContour, path, tempoRatio
    );

    return {
      similarity: clamp(similarity, 0, 100),
      pitchSimilarity,
      tempSimilarity,
      problemAreas,
      overlay
    };
  }

  // -- Private ---------------------------------------------------------------

  /** Extract voiced pitch values as {index, freq} pairs. @private */
  _extractPitchSeries(contour) {
    return contour
      .filter(f => f.frequency > 0 && f.confidence > 0.5)
      .map(f => f.frequency);
  }

  /** Convert Hz array to semitones relative to mean. @private */
  _toSemitones(freqs) {
    const meanF = mean(freqs);
    if (meanF <= 0) return freqs.map(() => 0);
    return freqs.map(f => 12 * Math.log2(f / meanF));
  }

  /**
   * Dynamic Time Warping with squared Euclidean distance.
   * Returns optimal alignment path and total distance.
   * Uses a Sakoe-Chiba band to limit computation.
   * @private
   */
  _dtw(seq1, seq2) {
    const n = seq1.length;
    const m = seq2.length;
    const bandWidth = Math.max(10, Math.round(Math.max(n, m) * 0.25));

    // Cost matrix (use flat array for performance)
    const INF = 1e12;
    const cost = new Float64Array(n * m).fill(INF);
    const idx = (i, j) => i * m + j;

    cost[0] = Math.abs(seq1[0] - seq2[0]);

    for (let i = 0; i < n; i++) {
      const jMin = Math.max(0, Math.round(i * m / n) - bandWidth);
      const jMax = Math.min(m - 1, Math.round(i * m / n) + bandWidth);

      for (let j = jMin; j <= jMax; j++) {
        const d = Math.abs(seq1[i] - seq2[j]);
        if (i === 0 && j === 0) {
          cost[idx(0, 0)] = d;
        } else {
          const c1 = i > 0 ? cost[idx(i - 1, j)] : INF;
          const c2 = j > 0 ? cost[idx(i, j - 1)] : INF;
          const c3 = i > 0 && j > 0 ? cost[idx(i - 1, j - 1)] : INF;
          cost[idx(i, j)] = d + Math.min(c1, c2, c3);
        }
      }
    }

    // Backtrack to find optimal path
    const path = [];
    let i = n - 1;
    let j = m - 1;
    path.push([i, j]);

    while (i > 0 || j > 0) {
      if (i === 0) { j--; }
      else if (j === 0) { i--; }
      else {
        const c1 = cost[idx(i - 1, j)];
        const c2 = cost[idx(i, j - 1)];
        const c3 = cost[idx(i - 1, j - 1)];
        const minC = Math.min(c1, c2, c3);
        if (minC === c3) { i--; j--; }
        else if (minC === c1) { i--; }
        else { j--; }
      }
      path.push([i, j]);
    }

    path.reverse();
    return { path, distance: cost[idx(n - 1, m - 1)] };
  }

  /**
   * Build aligned pitch arrays for visual overlay.
   * @private
   */
  _buildOverlay(userSemi, refSemi, userContour, refContour, path) {
    const reference = [];
    const user = [];
    const times = [];

    for (let k = 0; k < path.length; k++) {
      const [ui, ri] = path[k];
      user.push(userSemi[ui] || 0);
      reference.push(refSemi[ri] || 0);
      // Use normalized time
      times.push(k / path.length);
    }

    return { reference, user, times };
  }

  /**
   * Identify specific problem regions along the alignment path.
   * @private
   */
  _findProblems(userSemi, refSemi, userContour, refContour, path, tempoRatio) {
    const problems = [];
    const chunkSize = Math.max(3, Math.floor(path.length / 5));

    for (let c = 0; c < path.length; c += chunkSize) {
      const end = Math.min(c + chunkSize, path.length);
      const chunkUser = [];
      const chunkRef = [];

      for (let k = c; k < end; k++) {
        const [ui, ri] = path[k];
        chunkUser.push(userSemi[ui] || 0);
        chunkRef.push(refSemi[ri] || 0);
      }

      const userRange = Math.max(...chunkUser) - Math.min(...chunkUser);
      const refRange = Math.max(...chunkRef) - Math.min(...chunkRef);
      const userDelta = chunkUser[chunkUser.length - 1] - chunkUser[0];
      const refDelta = chunkRef[chunkRef.length - 1] - chunkRef[0];

      const sectionStart = c / path.length;
      const sectionEnd = end / path.length;

      // Too flat: user range much smaller than reference
      if (refRange > 2 && userRange < refRange * 0.4) {
        problems.push({
          type: 'too_flat',
          startTime: sectionStart,
          endTime: sectionEnd,
          description: 'Pitch is too flat here -- try more variation'
        });
      }

      // Wrong direction: user goes up when reference goes down, or vice versa
      if (Math.abs(refDelta) > 1.5 && Math.abs(userDelta) > 1) {
        if ((refDelta > 0 && userDelta < -1) || (refDelta < 0 && userDelta > 1)) {
          problems.push({
            type: 'wrong_direction',
            startTime: sectionStart,
            endTime: sectionEnd,
            description: refDelta > 0
              ? 'Pitch should rise here, but yours falls'
              : 'Pitch should fall here, but yours rises'
          });
        }
      }
    }

    // Global tempo issues
    if (tempoRatio > 1.3) {
      problems.push({
        type: 'too_slow',
        startTime: 0,
        endTime: 1,
        description: `You spoke ${Math.round((tempoRatio - 1) * 100)}% slower than native pace`
      });
    } else if (tempoRatio < 0.7) {
      problems.push({
        type: 'too_fast',
        startTime: 0,
        endTime: 1,
        description: `You spoke ${Math.round((1 - tempoRatio) * 100)}% faster than native pace`
      });
    }

    return problems;
  }

  /** @private */
  _emptyComparison() {
    return {
      similarity: 0,
      pitchSimilarity: 0,
      tempSimilarity: 0,
      problemAreas: [],
      overlay: { reference: [], user: [], times: [] }
    };
  }
}

// ---------------------------------------------------------------------------
// 4. AdaptiveCoach
// ---------------------------------------------------------------------------

/** @private localStorage key for coach data */
const COACH_STORAGE_KEY = 'ai_coach_data';

/**
 * @typedef {Object} CoachRecommendation
 * @property {number}   sentenceId
 * @property {number}   dayNum
 * @property {string}   reason
 * @property {number}   priority  - Higher = more urgent
 */

/**
 * @typedef {Object} WeaknessProfile
 * @property {string}   pattern    - e.g. "flat_questions", "rushed_unstressed", "missing_final_consonant"
 * @property {number}   severity   - 0..1 (EMA of failures)
 * @property {string}   feedbackEn - English feedback
 * @property {string}   feedbackCn - Chinese feedback
 */

/**
 * Adaptive coaching system that tracks performance history,
 * identifies weakness patterns, and recommends targeted practice
 * using spaced repetition combined with weakness-based scheduling.
 */
export class AdaptiveCoach {
  /**
   * @param {Object} [options]
   * @param {number} [options.emaAlpha=0.2] - Exponential moving average smoothing
   */
  constructor(options = {}) {
    this.emaAlpha = options.emaAlpha || 0.2;
    this._data = this._load();
  }

  /**
   * Record a practice result for a sentence.
   *
   * @param {number}      sentenceId
   * @param {number}      dayNum
   * @param {RhythmScore}  score      - From RhythmAnalyzer
   * @param {string}      intonationPattern
   * @param {string[]}    words
   * @param {number[]}    stress
   */
  recordResult(sentenceId, dayNum, score, intonationPattern, words, stress) {
    const key = `${dayNum}_${sentenceId}`;
    if (!this._data.history[key]) {
      this._data.history[key] = {
        sentenceId, dayNum, words, stress,
        attempts: 0,
        bestScore: 0,
        emaScore: 50,
        lastAttempt: 0,
        interval: 60000,
        weaknesses: []
      };
    }

    const entry = this._data.history[key];
    entry.attempts++;
    entry.lastAttempt = Date.now();
    entry.bestScore = Math.max(entry.bestScore, score.overall);
    entry.emaScore = this._ema(entry.emaScore, score.overall);

    // Track weaknesses
    entry.weaknesses = [];
    if (score.stressAccuracy < 60) entry.weaknesses.push('stress');
    if (score.timingRatio < 50) entry.weaknesses.push('timing');
    if (score.intonation < 50) entry.weaknesses.push('intonation');
    if (score.connectedSpeech < 50) entry.weaknesses.push('connected');
    if (intonationPattern === 'flat') entry.weaknesses.push('flat_pitch');

    // Update spaced repetition interval
    if (score.overall >= 85) {
      entry.interval = Math.min(entry.interval * 2.5, 7 * 86400000);
    } else if (score.overall >= 60) {
      entry.interval = Math.min(entry.interval * 1.5, 3 * 86400000);
    } else {
      entry.interval = 60000; // Reset to 1 minute for poor performance
    }

    // Update global weakness tracking
    this._updateGlobalWeaknesses(score, intonationPattern);

    this._save();
  }

  /**
   * Get the user's current difficulty level based on overall EMA.
   * @returns {"beginner"|"intermediate"|"advanced"}
   */
  getDifficultyLevel() {
    const ema = this._data.globalEma;
    if (ema >= 80) return 'advanced';
    if (ema >= 55) return 'intermediate';
    return 'beginner';
  }

  /**
   * Get personalized feedback based on accumulated weakness patterns.
   * @param {string} [lang="en"] - "en" for English, "cn" for Chinese
   * @returns {WeaknessProfile[]}
   */
  getWeaknessProfile(lang = 'en') {
    const weaknesses = this._data.weaknesses;
    const profiles = [];

    for (const [pattern, severity] of Object.entries(weaknesses)) {
      if (severity < 0.3) continue; // Only report significant weaknesses
      const fb = WEAKNESS_FEEDBACK[pattern];
      if (!fb) continue;
      profiles.push({
        pattern,
        severity,
        feedbackEn: fb.en,
        feedbackCn: fb.cn
      });
    }

    // Sort by severity descending
    profiles.sort((a, b) => b.severity - a.severity);
    return profiles;
  }

  /**
   * Get personalized feedback string combining top weaknesses.
   * @param {string} [lang="en"]
   * @returns {string}
   */
  getPersonalizedFeedback(lang = 'en') {
    const profiles = this.getWeaknessProfile(lang);
    if (profiles.length === 0) {
      return lang === 'cn'
        ? 'Keep going -- you\'re making great progress!'
        : 'Keep going -- you\'re making great progress!';
    }

    const top = profiles.slice(0, 3);
    const lines = top.map(p => lang === 'cn' ? p.feedbackCn : p.feedbackEn);
    return lines.join(' ');
  }

  /**
   * Recommend sentences to practice next.
   * Combines spaced repetition scheduling with weakness-based prioritization.
   *
   * @param {Array}  allSentences  - Array of {id, dayNum, words, stress, text}
   * @param {number} [count=5]     - Number of recommendations
   * @returns {CoachRecommendation[]}
   */
  recommend(allSentences, count = 5) {
    const now = Date.now();
    const scored = [];

    for (const s of allSentences) {
      const key = `${s.dayNum}_${s.id}`;
      const entry = this._data.history[key];

      let priority = 50; // Base priority for never-attempted sentences
      let reason = 'New sentence -- try it out!';

      if (entry) {
        // Spaced repetition: is it due?
        const timeSince = now - entry.lastAttempt;
        const isDue = timeSince >= entry.interval;

        if (isDue) {
          // Due items get higher priority, especially if struggling
          priority = 70 + (100 - entry.emaScore) * 0.3;
          reason = entry.emaScore < 50
            ? 'Needs more work -- keep practicing!'
            : 'Time to review this one';
        } else if (entry.emaScore >= 85) {
          priority = 10; // Mastered, low priority
          reason = 'Mastered';
        } else {
          priority = 30 + (100 - entry.emaScore) * 0.2;
          reason = 'Building confidence';
        }

        // Bonus for weakness alignment with global weaknesses
        const globalWeak = Object.entries(this._data.weaknesses)
          .filter(([_, sev]) => sev > 0.5)
          .map(([p]) => p);

        if (entry.weaknesses) {
          const overlap = entry.weaknesses.filter(w =>
            globalWeak.some(gw => gw.includes(w) || w.includes(gw))
          );
          priority += overlap.length * 8;
          if (overlap.length > 0) reason = 'Targets your weak area: ' + overlap.join(', ');
        }
      }

      scored.push({
        sentenceId: s.id,
        dayNum: s.dayNum,
        reason,
        priority,
        text: s.text
      });
    }

    // Sort by priority descending, take top N
    scored.sort((a, b) => b.priority - a.priority);
    return scored.slice(0, count).map(({ sentenceId, dayNum, reason, priority }) => ({
      sentenceId, dayNum, reason, priority
    }));
  }

  /**
   * Get summary statistics for the user's overall performance.
   * @returns {{totalAttempts: number, averageScore: number, level: string, streakDays: number}}
   */
  getStats() {
    const entries = Object.values(this._data.history);
    const totalAttempts = entries.reduce((s, e) => s + e.attempts, 0);
    const scores = entries.filter(e => e.attempts > 0).map(e => e.emaScore);
    const averageScore = scores.length > 0 ? Math.round(mean(scores)) : 0;

    return {
      totalAttempts,
      averageScore,
      level: this.getDifficultyLevel(),
      globalEma: Math.round(this._data.globalEma)
    };
  }

  /** Reset all coach data. */
  reset() {
    this._data = this._defaultData();
    this._save();
  }

  // -- Private ---------------------------------------------------------------

  /** @private */
  _ema(prev, current) {
    return prev * (1 - this.emaAlpha) + current * this.emaAlpha;
  }

  /** @private */
  _updateGlobalWeaknesses(score, intonationPattern) {
    const w = this._data.weaknesses;

    // Update each weakness dimension as an EMA of failure indicators
    w.stress = this._ema(w.stress || 0, score.stressAccuracy < 60 ? 1 : 0);
    w.timing = this._ema(w.timing || 0, score.timingRatio < 50 ? 1 : 0);
    w.flat_pitch = this._ema(w.flat_pitch || 0, intonationPattern === 'flat' ? 1 : 0);
    w.intonation = this._ema(w.intonation || 0, score.intonation < 50 ? 1 : 0);
    w.connected = this._ema(w.connected || 0, score.connectedSpeech < 50 ? 1 : 0);
    w.too_fast = this._ema(w.too_fast || 0, score.speakingRate > 200 ? 1 : 0);
    w.too_slow = this._ema(w.too_slow || 0, score.speakingRate < 80 && score.speakingRate > 0 ? 1 : 0);
    w.rushed_unstressed = this._ema(w.rushed_unstressed || 0, score.timingRatio < 40 ? 1 : 0);

    // Update global EMA
    this._data.globalEma = this._ema(this._data.globalEma, score.overall);
  }

  /** @private */
  _load() {
    try {
      const raw = localStorage.getItem(COACH_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Ensure all expected fields exist
        return { ...this._defaultData(), ...parsed };
      }
    } catch (e) {
      console.warn('AdaptiveCoach: failed to load data', e);
    }
    return this._defaultData();
  }

  /** @private */
  _save() {
    try {
      localStorage.setItem(COACH_STORAGE_KEY, JSON.stringify(this._data));
    } catch (e) {
      console.warn('AdaptiveCoach: failed to save data', e);
    }
  }

  /** @private */
  _defaultData() {
    return {
      history: {},
      weaknesses: {},
      globalEma: 50,
      createdAt: Date.now()
    };
  }
}

/**
 * Bilingual feedback templates for common weakness patterns.
 * @private
 */
const WEAKNESS_FEEDBACK = {
  stress: {
    en: 'You often miss stress placement. Focus on making content words (nouns, verbs, adjectives) louder and longer.',
    cn: 'You often miss stress placement. Focus on making content words louder and longer. (Zhongyindian changchang bu zhunque. Shide, zhuyao mingci, dongci, xingrongci geng da sheng, geng chang.)'
  },
  timing: {
    en: 'Your stressed and unstressed syllables sound too similar in length. Let unstressed syllables shrink.',
    cn: 'Your stressed and unstressed syllables are too similar. Let unstressed ones shrink. (Zhongdu he feichongdu yinjie changdu tai xiangtong. Rang feichongdu yinjie suoduan.)'
  },
  flat_pitch: {
    en: 'Your pitch tends to stay flat. Try exaggerating the ups and downs -- think of it like singing.',
    cn: 'Your pitch is too flat. Exaggerate the ups and downs -- think of it like singing. (Yudiao tai pingtan. Kuazhang shengdiao de qifu -- ba ta xiang xiang cheng changge.)'
  },
  intonation: {
    en: 'Your intonation pattern does not match. Questions should rise; statements should fall at the end.',
    cn: 'Intonation does not match. Questions rise, statements fall at the end. (Yudiao moshi bu dui. Yiwen shangsheng, chenshu xiaxiang.)'
  },
  connected: {
    en: 'You are pausing too much between words. Try to link words together more smoothly.',
    cn: 'Too many pauses between words. Link them together smoothly. (Ci zhi jian tingdun tai duo. Shizhe ba ci lianqi lai.)'
  },
  too_fast: {
    en: 'You tend to speak too fast. Slow down so the rhythm has room to breathe.',
    cn: 'Speaking too fast. Slow down for better rhythm. (Shuo de tai kuai. Fang man sudu, rang jiezou you kongjian huxi.)'
  },
  too_slow: {
    en: 'You tend to speak too slowly. Try to let the words flow at a more natural pace.',
    cn: 'Speaking too slowly. Let words flow at a natural pace. (Shuo de tai man. Rang ci geng ziran de liudong.)'
  },
  rushed_unstressed: {
    en: 'You rush through unstressed syllables too aggressively. They should be reduced, but not deleted.',
    cn: 'Unstressed syllables are too rushed. Reduce them but do not delete. (Feichongdu yinjie tai cangcu. Jianshao dan bushi shanchu.)'
  }
};

// ---------------------------------------------------------------------------
// 5. PhonemeMapper
// ---------------------------------------------------------------------------

/**
 * @typedef {Object} PhonemeAnalysis
 * @property {string}   word        - Original word
 * @property {string[]} phonemes    - Approximate phoneme sequence
 * @property {Object[]} errors      - Detected potential errors for Chinese speakers
 * @property {string}   errors[].phoneme  - The problematic phoneme
 * @property {string}   errors[].type     - Error type identifier
 * @property {string}   errors[].tipEn    - English correction tip
 * @property {string}   errors[].tipCn    - Chinese correction tip
 */

/**
 * Rule-based English phoneme mapper with Chinese-speaker error detection.
 * Maps words to approximate phoneme sequences without requiring any API,
 * then identifies likely pronunciation errors based on common L1 transfer
 * patterns from Mandarin Chinese.
 */
export class PhonemeMapper {
  constructor() {
    /** @private */
    this._cache = new Map();
  }

  /**
   * Map a word to its approximate phoneme sequence and detect potential errors.
   *
   * @param {string} word
   * @returns {PhonemeAnalysis}
   */
  analyzeWord(word) {
    const lower = word.toLowerCase().replace(/[^a-z']/g, '');
    if (!lower) return { word, phonemes: [], errors: [] };

    if (this._cache.has(lower)) return this._cache.get(lower);

    const phonemes = this._wordToPhonemes(lower);
    const errors = this._detectErrors(lower, phonemes);
    const result = { word, phonemes, errors };
    this._cache.set(lower, result);
    return result;
  }

  /**
   * Analyze an entire sentence and return per-word analysis.
   *
   * @param {string[]} words
   * @returns {PhonemeAnalysis[]}
   */
  analyzeSentence(words) {
    return words.map(w => this.analyzeWord(w));
  }

  /**
   * Get a summary of all potential error patterns for a sentence,
   * deduplicated and sorted by severity for Chinese speakers.
   *
   * @param {string[]} words
   * @returns {Object[]} Array of {phoneme, type, tipEn, tipCn, count}
   */
  getSentenceErrors(words) {
    const allErrors = [];
    for (const w of words) {
      const { errors } = this.analyzeWord(w);
      allErrors.push(...errors);
    }

    // Deduplicate by type
    const byType = new Map();
    for (const err of allErrors) {
      if (!byType.has(err.type)) {
        byType.set(err.type, { ...err, count: 1 });
      } else {
        byType.get(err.type).count++;
      }
    }

    return Array.from(byType.values()).sort((a, b) => b.count - a.count);
  }

  // -- Private: Rule-based phoneme mapping -----------------------------------

  /**
   * Convert a word to an approximate phoneme sequence using letter-to-sound rules.
   * This is intentionally simplified -- it covers the most common English patterns
   * sufficient for error detection purposes, not full TTS accuracy.
   * @private
   */
  _wordToPhonemes(word) {
    // Check irregular/common words first
    const irregular = IRREGULAR_PHONEMES[word];
    if (irregular) return irregular.split(' ');

    const phonemes = [];
    let i = 0;

    while (i < word.length) {
      const remaining = word.slice(i);
      let matched = false;

      // Try multi-character patterns (longest match first)
      for (const [pattern, phoneme] of DIGRAPH_RULES) {
        if (remaining.startsWith(pattern)) {
          if (phoneme) phonemes.push(phoneme);
          i += pattern.length;
          matched = true;
          break;
        }
      }

      if (matched) continue;

      // Single character rules
      const ch = word[i];
      const nextCh = word[i + 1] || '';
      const prevCh = word[i - 1] || '';

      if (VOWELS.has(ch)) {
        // Check for silent-e pattern (CVCe)
        const isSilentE = ch !== 'e' && i + 2 < word.length &&
          !VOWELS.has(word[i + 1]) && word[i + 2] === 'e' &&
          (i + 3 >= word.length || !VOWELS.has(word[i + 3]));

        if (isSilentE) {
          phonemes.push(LONG_VOWELS[ch] || ch);
        } else {
          phonemes.push(SHORT_VOWELS[ch] || ch);
        }
      } else {
        // Consonant
        const phoneme = CONSONANT_MAP[ch];
        if (phoneme) phonemes.push(phoneme);
      }

      i++;
    }

    return phonemes;
  }

  /**
   * Detect common Chinese-speaker pronunciation errors.
   * @private
   */
  _detectErrors(word, phonemes) {
    const errors = [];

    for (let i = 0; i < phonemes.length; i++) {
      const p = phonemes[i];
      const isWordFinal = i === phonemes.length - 1;

      // th -> s/z confusion
      if (p === 'TH' || p === 'DH') {
        errors.push({
          phoneme: p,
          type: 'th_confusion',
          tipEn: `"${p === 'TH' ? 'th' : 'th'}" in "${word}": Put your tongue between your teeth and blow air. Do NOT say "${p === 'TH' ? 's' : 'z'}".`,
          tipCn: `"${word}" zhong de "th": she tou fang zai shangxia ya chi zhijian chui qi. Bu yao shuo cheng "${p === 'TH' ? 's' : 'z'}".`
        });
      }

      // r -> l confusion
      if (p === 'R') {
        errors.push({
          phoneme: p,
          type: 'r_l_confusion',
          tipEn: `"r" in "${word}": Curl your tongue back. Do NOT touch the roof of your mouth. It is not "l".`,
          tipCn: `"${word}" zhong de "r": she jian xiang hou juan. Bu yao peng dao kou qiang ding bu. Ta bu shi "l".`
        });
      }

      // v -> w confusion
      if (p === 'V') {
        errors.push({
          phoneme: p,
          type: 'v_w_confusion',
          tipEn: `"v" in "${word}": Bite your lower lip gently and vibrate. Do NOT round your lips like "w".`,
          tipCn: `"${word}" zhong de "v": qingqing yao xia chun, rang ta zhen dong. Bu yao ba zui chunn yuan qi xiang "w".`
        });
      }

      // Final consonant dropping
      if (isWordFinal && FINAL_CONSONANTS.has(p)) {
        errors.push({
          phoneme: p,
          type: 'final_consonant_drop',
          tipEn: `Do not drop the final "${p.toLowerCase()}" in "${word}". Release the sound clearly at the end.`,
          tipCn: `Bu yao diu diao "${word}" jiewei de "${p.toLowerCase()}". Qingchu de shi fang zuihou de sheng yin.`
        });
      }

      // Short vs long vowel (bit vs beat)
      if (VOWEL_LENGTH_PAIRS[p]) {
        const pair = VOWEL_LENGTH_PAIRS[p];
        errors.push({
          phoneme: p,
          type: 'vowel_length',
          tipEn: `Watch the vowel length in "${word}": "${pair.short}" (short, relaxed) vs "${pair.long}" (long, tense). Chinese speakers often make them the same.`,
          tipCn: `Zhuyi "${word}" zhong de yuan yin changdu: "${pair.short}" (duan, fangsong) he "${pair.long}" (chang, jinzhang). Zhongguo xuesheng changchang ba ta men shuo de yiyang.`
        });
      }

      // -ng final (adding extra 'g' sound)
      if (p === 'NG') {
        errors.push({
          phoneme: p,
          type: 'ng_final',
          tipEn: `The "ng" in "${word}" is one nasal sound. Do NOT add an extra "g" at the end.`,
          tipCn: `"${word}" zhong de "ng" shi yi ge bi yin. Bu yao zai zuihou jia shang "g" de sheng yin.`
        });
      }
    }

    return errors;
  }
}

// -- PhonemeMapper lookup tables ---------------------------------------------

/** @private */
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/** @private */
const SHORT_VOWELS = { a: 'AE', e: 'EH', i: 'IH', o: 'AA', u: 'AH' };

/** @private */
const LONG_VOWELS = { a: 'EY', e: 'IY', i: 'AY', o: 'OW', u: 'UW' };

/** @private */
const CONSONANT_MAP = {
  b: 'B', c: 'K', d: 'D', f: 'F', g: 'G', h: 'HH', j: 'JH',
  k: 'K', l: 'L', m: 'M', n: 'N', p: 'P', q: 'K', r: 'R',
  s: 'S', t: 'T', v: 'V', w: 'W', x: 'K', y: 'Y', z: 'Z'
};

/**
 * Multi-character patterns ordered longest-first for greedy matching.
 * Null phoneme means the letters are silent or absorbed by another rule.
 * @private
 */
const DIGRAPH_RULES = [
  ['ough', 'AO'],
  ['tion', 'SH AH N'.split(' ').join('|')],
  ['sion', 'ZH AH N'.split(' ').join('|')],
  ['tch', 'CH'],
  ['dge', 'JH'],
  ['igh', 'AY'],
  ['ght', 'T'],
  ['wh', 'W'],
  ['th', 'TH'],
  ['sh', 'SH'],
  ['ch', 'CH'],
  ['ph', 'F'],
  ['ng', 'NG'],
  ['ck', 'K'],
  ['wr', 'R'],
  ['kn', 'N'],
  ['gn', 'N'],
  ['qu', 'KW'],
  ['oo', 'UW'],
  ['ee', 'IY'],
  ['ea', 'IY'],
  ['ai', 'EY'],
  ['ay', 'EY'],
  ['oa', 'OW'],
  ['ow', 'OW'],
  ['ou', 'AW'],
  ['oi', 'OY'],
  ['oy', 'OY'],
  ['au', 'AO'],
  ['aw', 'AO'],
  ['er', 'ER'],
  ['ir', 'ER'],
  ['ur', 'ER'],
  ['ar', 'AA R'.split(' ').join('|')],
  ['or', 'AO R'.split(' ').join('|')],
].map(([pattern, phoneme]) => [pattern, phoneme]);

/** @private Common irregular word pronunciations */
const IRREGULAR_PHONEMES = {
  the: 'DH AH',
  a: 'AH',
  an: 'AH N',
  to: 'T UW',
  of: 'AH V',
  is: 'IH Z',
  are: 'AA R',
  was: 'W AA Z',
  were: 'W ER',
  been: 'B IH N',
  have: 'HH AE V',
  has: 'HH AE Z',
  do: 'D UW',
  does: 'D AH Z',
  done: 'D AH N',
  said: 'S EH D',
  says: 'S EH Z',
  would: 'W UH D',
  could: 'K UH D',
  should: 'SH UH D',
  though: 'DH OW',
  through: 'TH R UW',
  thought: 'TH AO T',
  enough: 'IH N AH F',
  laugh: 'L AE F',
  cough: 'K AO F',
  once: 'W AH N S',
  one: 'W AH N',
  two: 'T UW',
  know: 'N OW',
  knife: 'N AY F',
  write: 'R AY T',
  wrong: 'R AO NG',
  walk: 'W AO K',
  talk: 'T AO K',
  half: 'HH AE F',
  calm: 'K AA M',
  listen: 'L IH S AH N',
  often: 'AO F AH N',
  where: 'W EH R',
  there: 'DH EH R',
  their: 'DH EH R',
  "they're": 'DH EH R',
  what: 'W AH T',
  who: 'HH UW',
  why: 'W AY',
  how: 'HH AW',
  "let's": 'L EH T S',
  "we're": 'W IH R',
  "i'll": 'AY L',
  "i'm": 'AY M',
  "you're": 'Y UH R',
  "can't": 'K AE N T',
  "don't": 'D OW N T',
  "won't": 'W OW N T',
  "didn't": 'D IH D AH N T',
  "couldn't": 'K UH D AH N T',
  "shouldn't": 'SH UH D AH N T',
  "wouldn't": 'W UH D AH N T',
  "it's": 'IH T S',
  "that's": 'DH AE T S',
  "there's": 'DH EH R Z',
  this: 'DH IH S',
  that: 'DH AE T',
  these: 'DH IY Z',
  those: 'DH OW Z',
  thing: 'TH IH NG',
  think: 'TH IH NG K',
  things: 'TH IH NG Z',
  with: 'W IH TH',
  something: 'S AH M TH IH NG',
  anything: 'EH N IY TH IH NG',
  nothing: 'N AH TH IH NG',
  everything: 'EH V R IY TH IH NG',
  people: 'P IY P AH L',
  business: 'B IH Z N IH S',
  schedule: 'S K EH JH UW L',
  because: 'B IH K AO Z',
  before: 'B IH F AO R',
  between: 'B IH T W IY N',
  about: 'AH B AW T',
  after: 'AE F T ER',
  again: 'AH G EH N',
  against: 'AH G EH N S T',
  already: 'AO L R EH D IY',
  always: 'AO L W EY Z',
  another: 'AH N AH DH ER',
  together: 'T AH G EH DH ER',
  circle: 'S ER K AH L',
  follow: 'F AA L OW',
  kick: 'K IH K',
  off: 'AO F',
  tight: 'T AY T',
  time: 'T AY M',
  page: 'P EY JH',
  same: 'S EY M',
  need: 'N IY D',
  make: 'M EY K',
  take: 'T EY K',
  give: 'G IH V',
  come: 'K AH M',
  going: 'G OW IH NG',
  getting: 'G EH T IH NG',
  looking: 'L UH K IH NG',
  working: 'W ER K IH NG',
  meeting: 'M IY T IH NG',
  picking: 'P IH K IH NG'
};

/** Consonants commonly dropped at word-final position by Chinese speakers. @private */
const FINAL_CONSONANTS = new Set([
  'B', 'D', 'G', 'K', 'P', 'T', 'V', 'Z', 'TH', 'DH', 'S', 'F', 'L', 'N', 'M'
]);

/** Vowel length pairs that Chinese speakers often confuse. @private */
const VOWEL_LENGTH_PAIRS = {
  'IH': { short: '/ɪ/ (bit)', long: '/iː/ (beat)' },
  'UH': { short: '/ʊ/ (book)', long: '/uː/ (boot)' },
  'AE': { short: '/ae/ (bat)', long: '/ɑː/ (bath)' }
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/**
 * Clamp a value between min and max.
 * @param {number} val
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
function clamp(val, lo, hi) {
  return Math.max(lo, Math.min(hi, val));
}

/**
 * Arithmetic mean of a number array.
 * @param {number[]} arr
 * @returns {number}
 */
function mean(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

/**
 * Median of a number array.
 * @param {number[]} arr
 * @returns {number}
 */
function median(arr) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Standard deviation of a number array.
 * @param {number[]} arr
 * @returns {number}
 */
function stddev(arr) {
  if (arr.length < 2) return 0;
  const m = mean(arr);
  const variance = arr.reduce((s, v) => s + (v - m) * (v - m), 0) / arr.length;
  return Math.sqrt(variance);
}

// ---------------------------------------------------------------------------
// Convenience factory
// ---------------------------------------------------------------------------

/**
 * Create a complete analysis pipeline with all components pre-wired.
 * This is the recommended entry point for integrating the engine.
 *
 * @returns {{
 *   pitchDetector: PitchDetector,
 *   rhythmAnalyzer: RhythmAnalyzer,
 *   prosodyComparator: ProsodyComparator,
 *   adaptiveCoach: AdaptiveCoach,
 *   phonemeMapper: PhonemeMapper,
 *   analyzeRecording: Function
 * }}
 *
 * @example
 * import { createEngine } from './modules/ai-engine.js';
 *
 * const engine = createEngine();
 *
 * // After recording a blob:
 * const result = await engine.analyzeRecording(userBlob, nativeBlob, {
 *   words: ["Let's","kick","things","off"],
 *   stress: [0.3, 1, 0.3, 1],
 *   sentenceId: 1,
 *   dayNum: 1
 * });
 *
 * console.log(result.rhythm);      // RhythmScore
 * console.log(result.prosody);     // ProsodyComparison (if nativeBlob provided)
 * console.log(result.phonemes);    // PhonemeAnalysis[]
 * console.log(result.feedback);    // string
 * console.log(result.coaching);    // CoachRecommendation[]
 */
export function createEngine(options = {}) {
  const pitchDetector = new PitchDetector(options.pitch);
  const rhythmAnalyzer = new RhythmAnalyzer();
  const prosodyComparator = new ProsodyComparator();
  const adaptiveCoach = new AdaptiveCoach(options.coach);
  const phonemeMapper = new PhonemeMapper();

  /**
   * Full analysis pipeline: decode audio, extract pitch, analyze rhythm,
   * compare prosody, detect phoneme errors, and update coaching state.
   *
   * @param {Blob} userBlob           - User's recorded audio blob
   * @param {Blob|null} nativeBlob    - Native reference audio blob (optional)
   * @param {Object} sentenceData     - Sentence metadata
   * @param {string[]} sentenceData.words
   * @param {number[]} sentenceData.stress
   * @param {number}   sentenceData.sentenceId
   * @param {number}   sentenceData.dayNum
   * @returns {Promise<Object>}
   */
  async function analyzeRecording(userBlob, nativeBlob, sentenceData) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();

    try {
      // Decode user audio
      const userArrayBuf = await userBlob.arrayBuffer();
      const userAudio = await ctx.decodeAudioData(userArrayBuf);
      const userContour = pitchDetector.analyzeBuffer(userAudio);

      // Rhythm analysis
      const rhythm = rhythmAnalyzer.analyze(
        userContour,
        sentenceData.words,
        sentenceData.stress
      );

      // Prosody comparison (if native audio provided)
      let prosody = null;
      if (nativeBlob) {
        const nativeArrayBuf = await nativeBlob.arrayBuffer();
        const nativeAudio = await ctx.decodeAudioData(nativeArrayBuf);
        const nativeContour = pitchDetector.analyzeBuffer(nativeAudio);
        prosody = prosodyComparator.compare(userContour, nativeContour);
      }

      // Phoneme analysis
      const phonemes = phonemeMapper.analyzeSentence(sentenceData.words);
      const sentenceErrors = phonemeMapper.getSentenceErrors(sentenceData.words);

      // Update coach
      adaptiveCoach.recordResult(
        sentenceData.sentenceId,
        sentenceData.dayNum,
        rhythm,
        rhythm.intonationPattern,
        sentenceData.words,
        sentenceData.stress
      );

      // Generate combined feedback
      const coachFeedback = adaptiveCoach.getPersonalizedFeedback('en');

      return {
        rhythm,
        prosody,
        phonemes,
        sentenceErrors,
        contour: userContour,
        feedback: coachFeedback,
        level: adaptiveCoach.getDifficultyLevel(),
        stats: adaptiveCoach.getStats()
      };
    } finally {
      if (ctx.state !== 'closed') {
        ctx.close().catch(() => {});
      }
    }
  }

  return {
    pitchDetector,
    rhythmAnalyzer,
    prosodyComparator,
    adaptiveCoach,
    phonemeMapper,
    analyzeRecording
  };
}

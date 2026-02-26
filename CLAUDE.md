# CLAUDE.md — Rhythm English

## Project Overview

**Rhythm English** is a Progressive Web App (PWA) for learning business English through rhythm and stress patterns. It simulates the neural pathway babies use to learn language: See (visual scene) → Hear (native audio) → Connect (rhythm pattern) → Speak (record and compare). The app targets iOS Safari as its primary platform and is designed to work fully offline.

## Tech Stack

- **Pure vanilla JavaScript** (ES6 modules) — no frameworks, no build tools, no bundler
- **Single HTML file** (`index.html`) — all CSS and JS are embedded inline (~1,770 lines)
- **PWA** — service worker (`sw.js`) + manifest for offline support and home screen install
- **Web Audio API** — recording, waveform analysis, rhythm scoring
- **Web Speech API** — TTS fallback when native MP3 audio is unavailable
- **LocalStorage** — all user state persistence (progress, recordings, XP, streaks)

## File Structure

```
rhythm-english/
├── index.html          # App shell: embedded CSS (lines 10-577) + JS (lines 578-1769)
├── manifest.json       # PWA manifest (name, icons, theme)
├── sw.js               # Service worker — cache-first with on-demand caching
├── ARCHITECTURE.md     # Design philosophy and module breakdown (Chinese)
├── CLAUDE.md           # This file
├── audio/
│   ├── 01.mp3 … 30.mp3  # Native speaker recordings for Day 1 (30 files)
├── data/
│   ├── sentences.js      # Day 1 data — exports DAY1 (array) and SCENES (object)
│   ├── day2.js … day14.js  # Days 2-14 — each exports DAY{N} and SCENES_DAY{N}
│   └── generator.js      # Procedural sentence generator for Day 15+
```

## Architecture

The app is organized into 6 conceptual modules, all implemented inside `index.html`:

| Module | Purpose | Brain Analogy |
|--------|---------|---------------|
| **DATA** | Sentence data with stress values, IPA, categories | Foundation |
| **SCENE** | Visual scene cards (emoji + colors + title) | Visual cortex |
| **AUDIO** | Native MP3 playback + TTS fallback + slow mode | Auditory cortex |
| **RHYTHM** | Bouncing gold ball animation synced to stress | Wernicke's area |
| **SPEAK** | Recording + waveform + rhythm scoring (0-100) | Broca's area |
| **CORE** | XP, streaks, spaced repetition, quiz, daily challenge | Feedback loop |

## Sentence Data Structure

Every sentence object follows this schema (defined in `data/sentences.js` and `data/day{N}.js`):

```javascript
{
  id: 1,                              // Unique across all days
  cat: "Opening",                     // Category name
  scene: "🚀👥💬",                    // Emoji scene
  text: "Let's kick things off",      // English sentence
  words: ["Let's","kick","things","off"],
  stress: [0.3, 1, 0.3, 1],          // Per-word stress (0–1)
  ipa: "/lɛts kɪk θɪŋz ɔːf/",       // IPA pronunciation
  meaning: "A natural way to start…", // English explanation
  cn: "开始吧",                        // Chinese translation
  trap: "Let us begin the meeting…",  // Common textbook mistake
  tip: "KICK and OFF are heavy…",     // Pronunciation tip
  pattern: "Let's + [verb] + …",      // Grammar pattern
  variants: ["Let's dive right in",…] // Alternative phrasings
}
```

Days 1-14 have 30 hand-curated sentences each (420 total). Days 15+ are generated procedurally by `data/generator.js` using a seeded PRNG and template system.

## Key Conventions

### JavaScript
- **No build step** — files are served directly; ES module `import`/`export` syntax
- **Global state** in `index.html`: `currentDay`, `idx`, `cnMode`, `mediaRecorder`, `recBlob`, `recScore`
- **DOM helper**: `const $ = s => document.querySelector(s)` (defined in index.html)
- **Naming**: camelCase for functions/variables, UPPERCASE for constants and data exports (`DAY1`, `SCENES`, `CATS`)
- **Error handling**: try/catch with graceful fallbacks (e.g., TTS when audio file missing, AudioContext when MediaRecorder unavailable)

### CSS
- **CSS custom properties** on `:root`: `--bg`, `--bg2`, `--card`, `--pri` (#6366f1 indigo), `--acc` (#f0b429 gold), `--ok` (#34d399 emerald), `--txt`, `--dim`, `--red`
- **Dark theme only** — deep navy/charcoal backgrounds with gold and indigo accents
- **Glass morphism** — `backdrop-filter: blur()` on overlays and cards
- **Safe area handling** — `env(safe-area-inset-*)` throughout for iOS notch compatibility
- **No BEM** — short descriptive classes: `.hdr`, `.badge`, `.stress-row`, `.scene-card`, `.quiz-overlay`

### Data Files
- Each day file (`day{N}.js`) exports `DAY{N}` (sentence array) and `SCENES_DAY{N}` (scene metadata object)
- Day 1 is special: exports `DAY1` and `SCENES` (no suffix)
- IDs are globally unique and sequential: Day 1 = 1–30, Day 2 = 31–60, etc.
- Every sentence must have all fields — the render function depends on all of them

### Service Worker
- **Cache version**: `rhythm-v15` — bump this number when changing cached assets
- **Day 1 audio** is pre-cached on install; Days 2-14 audio is cached on first fetch
- **All data files** and `generator.js` are pre-cached
- When updating assets, always update the `CACHE` version string in `sw.js`

## LocalStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `re-xp` | number | Total experience points |
| `re-progress-day{N}` | JSON | `{learned:[], streak, lastDate, history, quizBest}` |
| `re-rec-{sentenceId}` | JSON | Recording history `[{b64, score, ts}, ...]` |
| `re-cn-mode` | string | Chinese helper toggle state |
| `re-idx-day{N}` | number | Last viewed sentence index per day |
| `re-sr-cards` | JSON | Spaced repetition card queue |
| `re-dc-best` | number | Daily challenge best score |
| `re-dc-streak` | number | Daily challenge streak count |

## Game Mechanics

- **Day unlocking**: Must score 60%+ on the previous day's quiz to unlock next day
- **Quiz**: 10 questions per quiz, 3 types — meaning (CN→EN), scene (emoji→EN), stress (identify stressed word)
- **XP**: Earned from quiz answers and daily challenge
- **Spaced repetition**: 4 difficulty levels (Again, Hard, Good, Easy) adjust review intervals
- **Daily challenge**: Timed quiz (30s per question), bonus for speed, streak tracking
- **Rhythm scoring**: Compares recording to native audio via duration ratio (60pts) + pause detection (40pts)

## Development Workflow

### Running Locally
No build step needed. Serve files with any static HTTP server:
```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```
Then open `http://localhost:8000` in a browser (preferably Safari for full compatibility testing).

### Making Changes
1. **UI/Logic changes** — edit `index.html` directly (CSS is lines 10-577, JS is lines 578-1769)
2. **New day content** — create `data/day{N}.js` following the existing pattern, add import in `index.html`, register in `sw.js` ASSETS, and bump the cache version
3. **Generator updates** — edit `data/generator.js` (template-based system with vocab pools)
4. **Audio files** — place MP3s in `audio/` directory, named `{NN}.mp3` (zero-padded)

### Adding a New Day (Checklist)
1. Create `data/day{N}.js` exporting `DAY{N}` (30 sentences) and `SCENES_DAY{N}`
2. Add `import {DAY{N}, SCENES_DAY{N}} from './data/day{N}.js'` in `index.html`
3. Register the new day in the `getSentences()` switch/if block
4. Add `'./data/day{N}.js'` to the `ASSETS` array in `sw.js`
5. Bump `CACHE` version in `sw.js` (e.g., `rhythm-v16`)
6. Add 30 MP3 files to `audio/` if native recordings are available

### Commit Message Convention
The project uses conventional-style prefixes:
- `feat:` — new feature or content
- `fix:` — bug fix
- `hotfix:` — critical fix for production-breaking issue
- `visual:` — UI/style changes
- Versioned commits: `v{N}: description` for major milestones

## Important Constraints

- **No build tools** — no webpack, no TypeScript, no CSS preprocessors
- **No frameworks** — no React, Vue, Angular; vanilla DOM manipulation only
- **iOS Safari first** — test all features in Safari; `MediaRecorder` may need `AudioContext` fallback
- **Offline-first** — everything must work without network after initial load
- **All state in LocalStorage** — no backend, no database, no cloud sync
- **Single page** — no routing; overlays toggled via `display: none`/`flex`
- **No environment variables or API keys** — fully self-contained static site
- **Bilingual** — every sentence must include Chinese translation (`cn` field)
- **Deterministic generation** — generator uses seeded PRNG so same day always produces same sentences

## Testing

No automated test suite exists. Testing is manual:
- **Primary**: iOS Safari (target platform)
- **Secondary**: Chrome, Firefox desktop
- **Key flows to verify**: audio playback, recording + waveform, quiz interactions, day switching, offline behavior, safe-area rendering on notched devices

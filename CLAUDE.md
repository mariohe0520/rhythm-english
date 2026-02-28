# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This App Does

English pronunciation learning PWA for Chinese speakers. Teaches 30 sentences/day across 14 days using rhythm, stress patterns, and AI pronunciation coaching. Designed for iPhone — no installation needed, works like a native app via "Add to Home Screen."

## No Build Step

Pure HTML/JS/CSS — open `index.html` directly in browser or serve with any static server:
```bash
cd /Users/mario/.openclaw/workspace/apps/rhythm-english
python3 -m http.server 3456
# then open http://localhost:3456
```

Deploy: `git add -A && git commit -m "..." && git push` → GitHub Pages auto-builds.

## Architecture

All content and logic is in `index.html` (112KB). Two external ES modules:

| File | Role |
|------|------|
| `index.html` | Entire app: all UI, core learning loop, Day 1-14 sentence data, recording/scoring, quiz engine, XP system, AI coach panel |
| `modules/ai-engine.js` | Pronunciation analysis: `PitchDetector`, `RhythmAnalyzer`, `ProsodyComparator`, `AdaptiveCoach`, `PhonemeMapper`. `createEngine()` is the entry point. |
| `modules/content-engine.js` | Learning content: `PatternLibrary`, `ConnectedSpeechRules`, `IntonationPatterns`, `ShadowingScript`, `WeaknessProfiler` |
| `data/sentences.js` | Day 1 sentences (exports `DAY1`, `SCENES`) |
| `data/day2.js … day14.js` | Days 2-14 (exports `DAY{N}`, `SCENES_DAY{N}`) |
| `data/generator.js` | Procedurally generates Day 15+ content |
| `sw.js` | Service Worker — pre-caches everything for offline use |

## Critical: Service Worker Cache

When adding new files (especially in `modules/`), **always add them to `ASSETS` in `sw.js`** and **bump the cache version** (`const CACHE = 'rhythm-vXX'`). If modules aren't pre-cached, they fail to load on slow connections causing a completely blank white screen.

Current version: `rhythm-v16`

## Key Patterns

- `<script type="module">` at the bottom of index.html imports all data + modules. If ANY import fails, the entire script block fails silently — page shows blank. Check SW cache first.
- `render()` at line 2252 is the app init call — it runs after all imports succeed
- Progress stored in `localStorage` with key prefix `re-` (e.g., `re-progress-day1`, `re-idx-day5`)
- `getSentences()` / `getScenes()` return data for `currentDay` — days 1-14 from data files, days 15+ from generator
- All UI text is in Chinese (Simplified). English content is NOT translated — only coaching tips are in Chinese.

## Sentence Data Format

Each sentence object must have: `id` (int), `text` (English), `cn` (Chinese translation), `meaning` (Chinese explanation), `ipa` (IPA phonetics), `words` (array of words), `stress` (array of 0.0-1.0 stress values matching words length), `cat` (category), `scene` (emoji string).

const CACHE = 'rhythm-v26'; // v26: 全课程真实场景照片（14天商务+6类生活）
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './css/practice.css',
  './js/config.js',
  './js/state.js',
  './js/save.js',
  './js/progress.js',
  './js/speech/tts.js',
  './js/speech/stt.js',
  './js/speech/pronunciation.js',
  './js/practice/follow-read.js',
  './js/practice/free-practice.js',
  './js/ai-coach.js',
  './js/ui.js',
  './js/app.js',
  './data/sentences.js',
  './data/day2.js',
  './data/day3.js',
  './data/day4.js',
  './data/day5.js',
  './data/day6.js',
  './data/day7.js',
  './data/day8.js',
  './data/day9.js',
  './data/day10.js',
  './data/day11.js',
  './data/day12.js',
  './data/day13.js',
  './data/day14.js',
  './data/generator.js',
  './data/life-categories.js',
  './data/lessons.json',
  './modules/ai-engine.js',
  './modules/content-engine.js',
  './manifest.json',
  './images/scenes/social.jpg',
  './images/scenes/daily.jpg',
  './images/scenes/shopping.jpg',
  './images/scenes/dining.jpg',
  './images/scenes/travel.jpg',
  './images/scenes/entertainment.jpg',
  './data/day-photos.js',
  './images/days/meeting.jpg',
  './images/days/negotiation.jpg',
  './images/days/leadership.jpg',
  './images/days/tech.jpg',
  './images/days/conflict.jpg',
  './images/days/networking.jpg',
  './images/days/crisis.jpg',
  './images/days/interview.jpg',
  './images/days/presentation.jpg',
  './images/days/crosscultural.jpg',
  './images/days/remote.jpg',
  './images/days/sales.jpg',
  './images/days/publicspeaking.jpg',
  './images/days/ai-future.jpg'
];
// Pre-cache audio files for Day 1 (01-30)
for (let i = 1; i <= 30; i++) ASSETS.push(`./audio/${String(i).padStart(2,'0')}.mp3`);
// Day 2-14 audio cached on demand via network-first strategy

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => {
      if (r) return r;
      return fetch(e.request).then(response => {
        // Cache audio, data files, and Unsplash lifestyle photos on first fetch
        if (response.ok && (e.request.url.includes('/audio/') || e.request.url.includes('/data/') || e.request.url.includes('images.unsplash.com'))) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => new Response('Offline', { status: 503 }));
    })
  );
});

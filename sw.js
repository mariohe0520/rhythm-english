const CACHE = 'rhythm-v14';
const ASSETS = [
  './',
  './index.html',
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
  './manifest.json'
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
        // Cache audio and data files on first fetch
        if (response.ok && (e.request.url.includes('/audio/') || e.request.url.includes('/data/'))) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => new Response('Offline', { status: 503 }));
    })
  );
});

const CACHE = 'rhythm-v9';
const ASSETS = [
  './',
  './index.html',
  './data/sentences.js',
  './data/day2.js',
  './manifest.json'
];
// Pre-cache audio files for Day 1 (01-30)
for (let i = 1; i <= 30; i++) ASSETS.push(`./audio/${String(i).padStart(2,'0')}.mp3`);
// Day 2 audio (31-60) cached on demand via network-first strategy

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
        // Cache audio files on first fetch (Day 2 audio)
        if (response.ok && e.request.url.includes('/audio/')) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => new Response('Offline', { status: 503 }));
    })
  );
});

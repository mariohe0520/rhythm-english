const CACHE = 'rhythm-v4';
const ASSETS = ['./', './index.html', './data/sentences.js', './manifest.json'];
// Pre-cache audio files
for (let i = 1; i <= 30; i++) ASSETS.push(`./audio/${String(i).padStart(2,'0')}.mp3`);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

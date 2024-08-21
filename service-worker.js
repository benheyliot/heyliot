const CACHE_NAME = 'photo-app-cache';
const urlsToCache = [
  '/heyliot/',  // Adjust if needed based on the actual path
  '/heyliot/index.html',
  '/heyliot/service-worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
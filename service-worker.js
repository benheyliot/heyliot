const CACHE_NAME = 'offline-cache';
const urlsToCache = [
  '/',
  '/index.html',
  // Ajoutez ici d'autres ressources (CSS, JS, images) que vous souhaitez mettre en cache
];

// Le service worker s'installe.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Gestion des requêtes réseau.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(
        newResponse => {
          if (newResponse && newResponse.status === 200 && newResponse.type === 'basic') {
            let responseClone = newResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return newResponse;
        }
      );
    })
  );
});
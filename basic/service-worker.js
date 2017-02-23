self.addEventListener('install', event => {
  // Install step: caches & storage init goes here
  console.log('install', event);
});

self.addEventListener('fetch', event => {
  // Browser sent a request to a resource
  console.log('fetch', event);
  event.respondWith(fetch(event.request));
});

self.addEventListener('activate', event => {
  // Service Worker is activated!
  console.log('activate', event);
});

self.addEventListener('install', event => {

  // Install step: caches & storage init goes here
  console.log('install', event);

  // Wait until we cache all the resources
  event.waitUntil(

    // Put assets in cache
    caches
      .open('v1')
      .then(cache => {
        return cache.addAll([
          '.',
          './index.html',
          '../style.css',
          './offline-page1.html',
          './offline-page2.html',
          './fallback-page.html',
          './images/mva-logo-whitebackground.png'
        ]);
      })

  );

});




self.addEventListener('fetch', event => {

  // Browser sent a request to a resource
  console.log('fetch', event);

  // Respond with cached asset (if any), pass-through otherwise
  event.respondWith(

    caches
      .match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        // if offline, respond with a fallback content
        return caches.match('./fallback-page.html')
      })

  );
});

self.addEventListener('activate', event => {
  // Service Worker is activated!
  console.log('activate', event);
});

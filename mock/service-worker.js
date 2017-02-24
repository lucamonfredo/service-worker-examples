self.addEventListener('install', event => {
  // Install step: caches & storage init goes here
  console.log('install', event);
});




self.addEventListener('fetch', event => {
  // Browser sent a request to a resource
  console.log('fetch', event);

  const url = new URL(event.request.url);
  // mock a response if the URL matches
  if (url.pathname.includes('/mockme')) {
    // response body
    const body = {
      message: "HERE'S THE TEAPOT!!!"
    };
    // response headers
    const init = {
      status: 418,
      statusText: 'TEAPOT',
      headers: {
        'Content-Type': 'application/json',
        // Optional
        'X-Mock-Response': 'yes'
      }
    };
    var mockResponse = new Response(JSON.stringify(body), init);
    // respond with the mock
    event.respondWith(mockResponse);
  }

});




self.addEventListener('activate', event => {
  // Service Worker is activated!
  console.log('activate', event);
});

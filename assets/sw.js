let cacheVersion = 'v1.1';
let urlsToCache = [
    '/css/bundle.min.css',
    '/js/bundle.min.js',
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('v1').then(function (c) {
            return c.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                let fetchRequest = e.request.clone();
                return fetch(fetchRequest).then(
                    (response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        let responseToCache = response.clone();
                        caches.open(cacheVersion)
                            .then((cache) => {
                                cache.put(e.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});
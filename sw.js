// FootyStrength Service Worker — Cache-first offline support

const CACHE_NAME = 'footystrength-v2';
const BASE = '/footy-strength';

const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/manifest.json',
  BASE + '/css/styles.css',
  BASE + '/js/data.js',
  BASE + '/js/store.js',
  BASE + '/js/app.js',
  BASE + '/icon.svg',
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first, fall back to network (skip videos)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Don't cache videos — serve directly from network
  if (event.request.url.includes('/videos/')) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      if (event.request.mode === 'navigate') {
        return caches.match(BASE + '/index.html');
      }
    })
  );
});

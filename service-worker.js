const cacheName = 'word-wizard-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './logo.png',
  './en.json','./es.json','./fr.json','./de.json','./it.json',
  './pt.json','./nl.json','./sv.json','./ru.json','./ja.json'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(resp => resp || fetch(evt.request))
  );
});
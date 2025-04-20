
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("grapiuna-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./script.js",
        "./fundo3.jpg",
        "./logo-extintores.png",
        "./icon-192.png",
        "./icon-512.png",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

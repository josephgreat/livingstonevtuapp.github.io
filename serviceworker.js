const vtucache = "livingstone-vtu-v1";
const assets = [
  "/",
  "/index.html",
  "/Dashboard.html",
  "/fundwallet.html",
  "/about.html",
  "/login.html",
  "/signup.html",
  "/subscription.html",
  "/offline.html",
  "/images/logo.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntill(
    caches.open(vtucache).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

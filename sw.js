/* Nejdřív se zkusí stáhnout aktuální verze z internetu.
   Když internet není, vezme se poslední uložená kopie.
   Díky tomu se studentům po tvé úpravě vždycky načte nová verze. */
const CACHE = "nakup-za-koruny";
const SOUBORY = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SOUBORY)).catch(() => {}));
});

self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(odpoved => {
        const kopie = odpoved.clone();
        caches.open(CACHE).then(c => c.put(e.request, kopie)).catch(() => {});
        return odpoved;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});

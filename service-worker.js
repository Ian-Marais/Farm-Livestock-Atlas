const CACHE_VERSION = "sa-livestock-atlas-v5";
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const OFFLINE_URL = "./offline.html";

const APP_SHELL = [
  "./",
  "./index.html",
  "./feedback.html",
  "./login.html",
  "./signup.html",
  "./profile.html",
  "./offline.html",
  "./styles.css",
  "./i18n.js",
  "./auth.js",
  "./maps.js",
  "./script.js",
  "./feedback.js",
  "./manifest.webmanifest",
  "./CNAME",
  "./icons/logo-mark.svg",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable.png",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./icons/icon-maskable.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => ![SHELL_CACHE, RUNTIME_CACHE].includes(key))
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

function isHttpRequest(request) {
  return request.url.startsWith("http://") || request.url.startsWith("https://");
}

function shouldUseNetworkFirst(request) {
  const url = new URL(request.url);
  return url.pathname.endsWith("/manifest.webmanifest") || url.pathname.endsWith("/manifest.json");
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET" || !isHttpRequest(request)) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  if (shouldUseNetworkFirst(request)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === "error") {
            return response;
          }

          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === "error") {
          return response;
        }

        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
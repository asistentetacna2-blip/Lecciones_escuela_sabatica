const VERSION = 'esa-v1';
const ARCHIVOS = [
  './',
  './index.html',
  './style.css',
  './lecciones.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(VERSION).then((cache) =>
      // allSettled: si falta algún ícono, la instalación no falla
      Promise.allSettled(ARCHIVOS.map((a) => cache.add(a)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves.filter((c) => c !== VERSION).map((c) => caches.delete(c))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evento) => {
  const peticion = evento.request;
  const url = new URL(peticion.url);

  if (peticion.method !== 'GET' || url.origin !== self.location.origin) return;

  // No interceptar audios: necesitan peticiones Range (iOS) y son archivos pesados
  if (url.pathname.includes('/audios/') || peticion.headers.has('range')) return;

  // Estrategia: caché primero, y actualización en segundo plano
  evento.respondWith(
    caches.match(peticion).then((enCache) => {
      const red = fetch(peticion)
        .then((respuesta) => {
          if (respuesta && respuesta.ok) {
            const copia = respuesta.clone();
            caches.open(VERSION).then((cache) => cache.put(peticion, copia));
          }
          return respuesta;
        })
        .catch(() => enCache || (peticion.mode === 'navigate' ? caches.match('./index.html') : undefined));

      return enCache || red;
    })
  );
});
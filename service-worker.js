// Service Worker for Markdown Converter (MDC)
const CACHE_NAME = 'mdc-cache-v1';
const APP_PREFIX = 'mdc-';
const VERSION = 'v1';
const CACHE_KEY = APP_PREFIX + VERSION;

// Assets to cache immediately on service worker installation
const CORE_ASSETS = [
  './',
  './index.html',
  './help.html',
  './manifest.json',
  './icons/icon-192x192.svg',
  './icons/icon-512x512.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.2.5/purify.min.js'
];

// Additional assets to cache as they're requested
const RUNTIME_ASSETS = [
  './screenshots/desktop.svg',
  './screenshots/mobile.svg'
];

// Combined asset list
const ALL_ASSETS = [...CORE_ASSETS, ...RUNTIME_ASSETS];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_KEY)
      .then(cache => {
        console.log('[Service Worker] Caching core assets');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => {
        // Skip waiting forces the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Cache installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        // Filter for caches that start with our app prefix but aren't current
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName.startsWith(APP_PREFIX) && cacheName !== CACHE_KEY;
          }).map(cacheName => {
            console.log('[Service Worker] Removing old cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Claiming clients');
        // Take control of all clients ASAP
        return self.clients.claim();
      })
  );
});

// Helper function to determine if request should be cached
function shouldCache(url) {
  // Don't cache browser extensions, chrome requests, etc.
  if (url.startsWith('chrome-extension://') || url.startsWith('chrome://')) {
    return false;
  }
  
  // Only cache same-origin requests and selected CDN resources
  const isSameOrigin = url.startsWith(self.location.origin);
  const isTrustedCDN = url.includes('cdnjs.cloudflare.com');
  
  return isSameOrigin || isTrustedCDN;
}

// Helper function to handle network requests with cache fallback
async function fetchWithCacheFallback(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // If successful, clone and cache
    if (networkResponse && networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      caches.open(CACHE_KEY)
        .then(cache => {
          cache.put(request, responseClone);
        });
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    console.log('[Service Worker] Network request failed, using cache for:', request.url);
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If item isn't in cache, return a 404 page or default offline page
    if (request.mode === 'navigate') {
      // For navigation requests, return a simple offline page
      return new Response(
        '<html><body><h1>Offline</h1><p>The Markdown Converter is currently offline.</p></body></html>',
        { headers: { 'Content-Type': 'text/html' } }
      );
    }
    
    // Return an error response
    return new Response('Network and cache both failed.');
  }
}

// Fetch event - network first, falling back to cache
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  const requestUrl = new URL(event.request.url);
  
  // Skip if we shouldn't cache this request
  if (!shouldCache(requestUrl.href)) {
    return;
  }
  
  // Handle fetch with our custom strategy
  event.respondWith(fetchWithCacheFallback(event.request));
});

// Message event - handle specific commands from the main page
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

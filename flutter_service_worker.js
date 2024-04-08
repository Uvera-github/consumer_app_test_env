'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "94d4b955673ea43135bf4c9560aa670c",
"index.html": "20f2552c49dc19b0fd47e2b9885bc506",
"/": "20f2552c49dc19b0fd47e2b9885bc506",
"main.dart.js": "54b142ea8cd6cbeb4e2d09b1bfd78195",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "755e0d6b2a55c9696c1f433afb62276c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "24408854d5bf6e2ee9047c7c41815ebb",
"assets/AssetManifest.json": "a1fee5bffb3a2deb0c974f32dc91bf3f",
"assets/NOTICES": "aa49a5ebdb35c3c1c3e2dff4906402f0",
"assets/FontManifest.json": "ccdd727fef73363c19a5b18a96414b88",
"assets/AssetManifest.bin.json": "8f7e6318ee8ef607f541fd5075ebaecf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "73c72db7d34f9f4ad4bf2bf6cca88413",
"assets/fonts/MaterialIcons-Regular.otf": "dbff3a864f390b096df91182b8af7f71",
"assets/assets/imgs/naqwa2.png": "043f35d27f403b64eed3124365a38f65",
"assets/assets/imgs/arrow_right.png": "bd2809828f6cb5134bd88e38e13988be",
"assets/assets/imgs/event_available.png": "c797e2a33a9fc91ed2229ea496b54d82",
"assets/assets/imgs/thermometer.png": "4219d174013a732b0e6f0bcb8ce699ff",
"assets/assets/imgs/naqwa1.png": "3fe63de60a4c251bc2b8ebf29745336a",
"assets/assets/imgs/close_small.png": "785c682d467f098e6d74b7c0b699864b",
"assets/assets/imgs/naaqwat_logo.png": "5ee941e69c2285ef46971e07b5745953",
"assets/assets/imgs/Group%25202.png": "ef97dd842689b178f1a3666d26ee4abf",
"assets/assets/imgs/Group%25203.png": "f8e00ba35a4b7514704329d15d3850f8",
"assets/assets/imgs/cer1.png": "8bdfa5d60b1dcc70337a6bf74fd3851f",
"assets/assets/imgs/map_icon.png": "ea63424a68f583f06d44bedc613c6e12",
"assets/assets/imgs/Group%25201.png": "bbcc87c9d669440ba7bfea38ba907afd",
"assets/assets/imgs/arrow_left.png": "445d4460c1e5e53b1af5c012b7f110c4",
"assets/assets/imgs/instagram.png": "341f445f672d10e1f036850b50ff6ad6",
"assets/assets/imgs/cer2.png": "167e92aecd9e822866156f9baaec8727",
"assets/assets/imgs/event_busy.png": "ab0967ccc8a1ec3e87c347cbffa2b69a",
"assets/assets/imgs/cover_photo.png": "4ca0a36899d6e875f902eb8c543c740b",
"assets/assets/imgs/map.png": "fa5264d75cfee4ca62d10553097aa121",
"assets/assets/imgs/map_first.png": "302ab5389a95a311c56598f4298fa7e9",
"assets/assets/imgs/UveraLogo_b.png": "43a4d7ee92a97d41c013f512549e237c",
"assets/assets/imgs/map_second.png": "674b6a7556848052beb755181b09a592",
"assets/assets/imgs/naaqwat.png": "4599cd547ef0ebd367e2662799c02c0d",
"assets/assets/imgs/weight.png": "73b9b37c810c904120e8b039c73c3123",
"assets/assets/imgs/farm.jpeg": "b3ddbc65511f75f4541ede9fc7516743",
"assets/assets/imgs/UveraLogo.png": "57451bb1245e2c525de3bb4fc8e9332e",
"assets/assets/imgs/map.jpeg": "d135ca708f1c3efcf9c890943dabff68",
"assets/assets/imgs/second.png": "ff815bcaefa9f694482f1cbe534ff40d",
"assets/assets/imgs/generic.png": "b4952686f917c68efa8580d9479f3825",
"assets/assets/imgs/uvera_white.png": "8d7b73b1a9e7b4cebd4d6fa1c162102a",
"assets/assets/imgs/Foodline.png": "a70c239576a9385dc5e2c29d116ffecd",
"assets/assets/imgs/fourth.png": "aa2bc7a20fb4f06d2bb262a7f93466ae",
"assets/assets/imgs/map_first_active.png": "302ab5389a95a311c56598f4298fa7e9",
"assets/assets/imgs/third.png": "3f72641c4f5e225436c876037d5b90f4",
"assets/assets/imgs/snapchat.png": "e9d6bca8fa20177a48d746d299d5fbc9",
"assets/assets/imgs/marker.png": "5873b99d554bf7cbaddf04b43798b89d",
"assets/assets/imgs/first.png": "3af2f4e341e0f10daf185a5e47d27aa5",
"assets/assets/imgs/green_dot.png": "e8319b9868b2ed5df90e7e527dcf3fe6",
"assets/assets/imgs/bg.png": "05c0185bffa35ee158d793022af9eec9",
"assets/assets/langs/en.json": "5e282c06225ca30110a37be9dffb1c84",
"assets/assets/langs/ar.json": "e7899a4520bbfc69b28f3ce7ceb1713c",
"assets/assets/fonts/century-gothic/Century%2520Gothic.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

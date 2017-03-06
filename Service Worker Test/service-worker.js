console.log("Hi from a service worker!");
this.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('v1').then(function (cache) {
			return cache.addAll([
				"index.html",
				"cursor.png",
				"service-worker.js",
				"app.js",
				"manifest.json",
				"icon.png",
				"/"
			]);
		})
	);
});
this.addEventListener('fetch', function (event) {
	event.respondWith(
		fetch(event.request).catch (function () {
			return caches.match(event.request);
		})
	);
});

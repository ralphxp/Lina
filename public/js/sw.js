let FILES = [
	"/",
	"/home",
	"/register",
	"/js/																																																																																																																																																																																																																																										sw.js",
	"/js/app.js",
	"/js/quick-action.js",
	"/css/app.css",
	"/css/bootstrap.css",
	"/css/font-awesome.min.css",
	"/drawables/android/ic_launcher-web.png"
]

self.addEventListener('install', e=>{

	e.waitUntil(

		caches.open('lina-offline')
			.then(cache=>{
				return cache.addAll(FILES)
			})
			.catch(err=>{
				console.error(err)
			})


	)

})

self.addEventListener('fetch', e=>{
	e.respondWith(
		caches.match(e.request)
			.then(response=>{
				return response || fetch(e.request)
			})
	)
});
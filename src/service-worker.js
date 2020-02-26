const cacheName="cache-v1";
const cacheAssets=[
    "/"
]


self.addEventListener("install",(e)=>{
    console.log("SW Installed");
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            cache.addAll(cacheAssets)
        }).then(()=>self.skipWaiting())
    )
})

self.addEventListener("activate",(e)=>{
    console.log("SW activated");
    e.waitUntil(
        caches.keys().then(cacheNames=>{
            return Promise.all(cacheNames.map(cache=>{
                if(cache !==cacheName){
                    //SW clear old cache
                    return caches.delete(cache);
                }
            }))
        })
    )
})
//call fetch event
self.addEventListener("fetch",(e)=>{
    console.log("SW fetching");
   e.respondWith(
       fetch(e.request).catch(()=>{
           //make copy clone of response
           caches.match(e.request)
       })
   )
})
/*
* self.addEventListener("fetch",(e)=>{
    console.log("SW fetching");
   e.respondWith(
       fetch(e.request).then(res=>{
           const resClone=res.clone();
           caches.open(cacheName).then(cache=>{
               cache.put(e.request,resClone);
           });
           return res;
       }).catch((err)=>{
           caches.match(e.request).then(res=>res)
       })
   )
})*/
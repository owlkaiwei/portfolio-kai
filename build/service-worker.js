"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7a2d97f64d870cdf3e46b0b164df0fd3"],["/static/css/main.22308842.css","d5d7e731da54bf74016da3d1efef984c"],["/static/js/main.de03c9ed.js","8c05da16579d79cfd9bfc786f00081c4"],["/static/media/IA.6c725854.png","6c725854eb48cc840d4751411d1828cc"],["/static/media/Kaiwei_Wang_Resume.8342538c.pdf","8342538cc9fefd1760fc4a257f630bf9"],["/static/media/affinity.2aaf742f.png","2aaf742f58c6784984b1bdee3c8442dc"],["/static/media/alternative_1@x2.27013ef2.png","27013ef2e3dbde0d37e4052555393be0"],["/static/media/alternative_1_big@x2.a56dc159.png","a56dc159058ff30bd12a592e9d530377"],["/static/media/alternative_2@x2.a0c2e6b1.png","a0c2e6b14c9edb9b8f8a6eb886cb8340"],["/static/media/alternative_2_big@x2.4c6e0437.png","4c6e0437974a1be965e54f50c4f7d937"],["/static/media/alternative_3@x2.41c97a80.png","41c97a8003842b032c78da7ac3f817df"],["/static/media/alternative_3_big@x2.d44bcf8f.png","d44bcf8f6c626ba9c529a56ebc5bbd10"],["/static/media/alternative_4@x2.353e27c8.png","353e27c8ff1bdd29662a35c8822daab1"],["/static/media/alternative_4_big@x2.d64ee21c.png","d64ee21cb2d49d73cb41af2e6cfc550f"],["/static/media/api_object_full.163ca6aa.png","163ca6aa2ab35fbb37040434af5b0c90"],["/static/media/api_object_short.6e29fde4.png","6e29fde412b3a7b4b29f43c075966660"],["/static/media/banner.0b8c5129.svg","0b8c51298b8a4837933c1f5f10afe22e"],["/static/media/color@x2.f30d4e1f.png","f30d4e1f91606ec0e74069a69945ab50"],["/static/media/current_product.ea9adc40.png","ea9adc40affe6d3d17c170e9b900cf3f"],["/static/media/data_billboard.526d5689.png","526d56895dae095409ca1aba78d3c35b"],["/static/media/data_scheme@x2.922fca6a.png","922fca6ab541a8970dc009ded0cf5acc"],["/static/media/design_guideline@x3_profile.9df087e7.png","9df087e7134a79113eb5267742fbc5cd"],["/static/media/design_guideline_light.40f04476.png","40f04476a90c2139c06d880a4325c56a"],["/static/media/design_principles@x2.f88f094d.png","f88f094d550eb9c5e6671bbf791be8ae"],["/static/media/design_sprint_4.ee2ea084.png","ee2ea0844917ea244c33e7a7cba669d0"],["/static/media/diagram@x1.978efe5a.svg","978efe5ac0fa048edee1710f80b4873c"],["/static/media/energy_tempo@x2.738f5e99.png","738f5e9948a10bc4c00c0cf1de686476"],["/static/media/goals@x2.845c52ee.png","845c52eebeeb3b966b2ed03fe307b550"],["/static/media/group.c5acf07d.jpg","c5acf07d82fd17dbdedacf2b1a0d9da2"],["/static/media/gtmobile_thumbnail.196dea58.png","196dea58b73e1de7c9ace98371a701c2"],["/static/media/head.e3a9ccfe.png","e3a9ccfe32bc2ea9af41ec69bdece2c9"],["/static/media/highlevel.add7ae97.svg","add7ae978840a6ebcb9cc845eab2524b"],["/static/media/hover_year@x2.0bf4b87e.png","0bf4b87e615583e9ebf3e34ef98438f8"],["/static/media/imlc_thumbnail.113ba4d3.png","113ba4d399ae3fe95d6c424e2bc6f795"],["/static/media/interaction_highlevel@x2.9e23c0c4.png","9e23c0c42efefca4a3da2507d1e295ee"],["/static/media/interface@x1.46fd9c9b.png","46fd9c9b488e87ebe4e92ce8be424e64"],["/static/media/interview@x5.6ba01ea4.png","6ba01ea4d27e3c0b467622f7aa737580"],["/static/media/latex_thumbnail.a3c88aae.png","a3c88aae861859180c062911f3769da3"],["/static/media/load.b660dd2b.svg","b660dd2bb532d278aab3dbf77cbdc053"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/mantra@x1.b5cb36c0.png","b5cb36c0d70a59b0d9caf923bd77f7b3"],["/static/media/mantra_bg@x1.004442c6.png","004442c6cdc28bd33539ec346f7e43e1"],["/static/media/metaphor.2058d696.png","2058d696d3b4728b777dccf7af1bd9f7"],["/static/media/mood_thumbnail.36f5dda8.png","36f5dda870590dc15198fb98710c8942"],["/static/media/one_person_tap.39ecebe1.gif","39ecebe1ded5e02c0e7523b5ceab529d"],["/static/media/people_on_phone.77b475b6.png","77b475b6c2ad481002edbef7c81221db"],["/static/media/persona.823b4ab9.png","823b4ab9487177366ae3bb8500ec1f18"],["/static/media/piano_thumbnail.cc124235.png","cc1242356a7d3a864b0456b00eab77d2"],["/static/media/pokecraft_thumbnail.39fe687a.png","39fe687af62f448fc065dbb09641f05c"],["/static/media/portrait-2.d534b0c9.jpg","d534b0c98119064be5dfc45aa22ae3e1"],["/static/media/proposal_small.82f9eea1.png","82f9eea1746adeaafbfa1380e1eb6768"],["/static/media/prototype.6d16dc1e.png","6d16dc1e704467855c1797e01acc9f10"],["/static/media/question@x5.562b4e76.png","562b4e76f9cde3e4e8d3018bbe5c4a09"],["/static/media/report_tag_shortened.b6067cce.gif","b6067ccecb5e896dd336baa46e16552c"],["/static/media/responsive@x2.dc80c339.png","dc80c339fd19257048767cea560e7fb9"],["/static/media/song_detail.90070f79.gif","90070f794e251c433c899762e2999f31"],["/static/media/step.178e8ba1.svg","178e8ba15d3326d0aeadd11f153b97c4"],["/static/media/survey.97345400.png","97345400a5d957686f694a554cb80863"],["/static/media/system.df8b3f26.svg","df8b3f269d8e58f33115fce870e39db7"],["/static/media/taptile_banner.c841d1c6.svg","c841d1c651ff9ffe57c60989a8bec365"],["/static/media/taptile_concept.61657490.gif","61657490ee73aadf54ed6a68b9dec619"],["/static/media/taptile_logo.c37d8860.svg","c37d8860d3634affbd1bedc70b0948a5"],["/static/media/taptile_thumbnail.67c10f47.png","67c10f47c79b5cb2cb8f067ef0bccaa3"],["/static/media/text-bd.50ebc816.svg","50ebc816c5f46168480d5a288077bb8f"],["/static/media/text-xyx.1312124f.svg","1312124ff0ae64cb8e8da60a4c7a54fb"],["/static/media/tiles.43537eae.svg","43537eaec8cfe6938cb210c630c35919"],["/static/media/typeface@x2.0f3a15fd.png","0f3a15fd9905a6fcaf589511cb265e2b"],["/static/media/visual.3f913d87.gif","3f913d87bc90b5dd1fcd23e1e41a3d1c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
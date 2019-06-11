/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_coercion/js/0-75deb21bc2df737b5b03.js","ad640cb60a9cefa6bcbcf766ff55ef22"],["/br_coercion/js/1-53327fe1871d5dd9f662.js","e5c75ad9d0da658c3838aa7f7fdee336"],["/br_coercion/js/10-11dd32ed22c87c595b49.js","3abf4268e90fbbf4ec3ad44a8d6e9120"],["/br_coercion/js/11-b3ed2091f296ad5fa3f1.js","47b0e4239639b2d21f2acfa5f6c2827e"],["/br_coercion/js/12-6aea09661391b64cee32.js","77383b279aadcc176d76a424e15eedeb"],["/br_coercion/js/13-fe4896d6c27d657dc48d.js","a45e3dce51384ad2abc8422a1c19dac7"],["/br_coercion/js/14-bcfeacaf8ad8f2fed3dc.js","e756dc3214a24ac34d5726c39ee302d2"],["/br_coercion/js/15-5b36f9150ca0ff20185e.js","ea44582f2c65bfb5d8763a29ae82a961"],["/br_coercion/js/16-8cecc671ba9ceb479f56.js","28e746fa7927629d8ffffae20d02fa64"],["/br_coercion/js/17-b8e853ea7f29cda5563e.js","7bf03e97b4d23c652432bfaf0eb0a5ed"],["/br_coercion/js/18-615aac2a2dbc30087d1a.js","411819ddf601c95488f6502b95962aca"],["/br_coercion/js/19-3aeda260f5e295403d37.js","d2eee17a8ddddce6b4aef1b3031e5bea"],["/br_coercion/js/2-4f07ac2b019fc6055e81.js","09bf0aa68906f8571ed540765ee05dd1"],["/br_coercion/js/20-40d0b7240db50fd297cd.js","a892414a1daf876122fedc89b5f92013"],["/br_coercion/js/21-ddf108a79d421ea833ee.js","26d4b82241307ff4d4e2b5eda3212978"],["/br_coercion/js/22-b687efde92cfab074bda.js","0d0617ce1589c304b50be209cdd14953"],["/br_coercion/js/23-a3179a5b4d415e8905c9.js","bf5da906c1fad8fc884bb6f5c5d7d5bf"],["/br_coercion/js/24-f1eabf358e0a02277251.js","e0b9e42b6e89d62fc9402a5dcceb0b6b"],["/br_coercion/js/25-69de805a9e60ee9532d3.js","23d2ce0e47b39e501b17ce8cac2303d7"],["/br_coercion/js/26-693322b1e24d31951755.js","abf6ec1ffc36305f912974d50c776e88"],["/br_coercion/js/27-7e434eb0e7af3112eb64.js","a1c48fa80ffbe2d77eef825e3bea3dd8"],["/br_coercion/js/28-d99feb68a05e46fe7e24.js","cc2b891a04f3f98799f98f3b5686ced0"],["/br_coercion/js/29-21932a2fa2f78d36563b.js","fccd00cc7fad89814fefa3f34b962f9b"],["/br_coercion/js/3-6eead60ce6e484a89f84.js","8a9ca46bd3b0b1f19c2fc4fa4a59c2af"],["/br_coercion/js/30-a0636655749c049c7737.js","a4fd7fc3d2d249756732a077bdd1db81"],["/br_coercion/js/31-8ebc9babcd75d87dd849.js","be92bd5c2a9df2ea0a120402cace96bc"],["/br_coercion/js/32-d46e0f8c0a9296348392.js","0716e9c9033b8339429f5bdc2684d718"],["/br_coercion/js/33-09be7eed53eeb610016c.js","7d7fac9f5dcd74287080895e27008f5c"],["/br_coercion/js/34-d6c665a26c948152ce30.js","fe0e4ee581c1a653f2207eb1e62b485b"],["/br_coercion/js/35-36bc0bb640bd162dade6.js","2f61bf91ca88c18dce50d582a1d33cb0"],["/br_coercion/js/36-55042fca3041b5eb7a91.js","3d2da2ec9d52b871b06e9f6781800990"],["/br_coercion/js/37-23b1dcdbd30dbbb85587.js","ff489b52467a9e475e13b3cca6a0480f"],["/br_coercion/js/38-4db811925dfb587a5ae8.js","80e18eba6be708acf5cd6344cd784c09"],["/br_coercion/js/39-0823ea78d3bf7ae54174.js","d9201021c912a3a08f81d4254fd98408"],["/br_coercion/js/4-3a37d1cdb165ae888d6b.js","45571b45d122b8bdee18e84fbab59c99"],["/br_coercion/js/40-eccb523d7bfee4efa6a3.js","5b8c6ef789619470916a49c706444a30"],["/br_coercion/js/404-fdd90647aa54964fb1ed.js","d28beeeefb443ba436beb10748bc929b"],["/br_coercion/js/41-9ecc6c81d71f6db22510.js","e3ec1f7fee09f91afc790bc83f7f5a01"],["/br_coercion/js/42-f0e9133f486f3cf46c1b.js","127254e9875c38c5289684d64a4b7c22"],["/br_coercion/js/43-18447a24460691389120.js","3372e35e0d9cae42647f42292b70a706"],["/br_coercion/js/44-33aca49d050fad068398.js","bd4aba941747c25bd3066f6486f040fb"],["/br_coercion/js/45-b75183565dbd0229a3ff.js","c250b60f1c16a0deb25ad5f801434f52"],["/br_coercion/js/46-47199c93f75a88cd8603.js","19ce424fcaf7b29c1684689ea390677f"],["/br_coercion/js/47-96aef5b97505ac20167d.js","9924c948814ccf3330cfd09391eaf630"],["/br_coercion/js/48-3a31871d7702a8488c94.js","126b31941adc108a5c91f442079bb3b9"],["/br_coercion/js/49-a21240bbe0999f39284f.js","acc590bbeaadaedce1b96eb830d834c1"],["/br_coercion/js/5-7619865d7ced1814edb6.js","2c467a1ff914920211bca11ef2b80ef9"],["/br_coercion/js/50-0ad389ca36ebd6d5e772.js","2ba2fe14365ba9aee92b16fde420bf37"],["/br_coercion/js/51-dd5cccddb4b452cdddfb.js","55737a3a70db1fede8333cc6d06ddec3"],["/br_coercion/js/52-3c3afa5ca6ba528a2c1e.js","86e0928b4845c0a3838150760a8fa5e6"],["/br_coercion/js/53-1fdcb83682fb2fb790e8.js","4b026da93666cd687239b35ab424c468"],["/br_coercion/js/54-548b74749d7ad514eb59.js","8b39c0cdee4ff18ccf25e495d1e444ae"],["/br_coercion/js/55-e68891121fede4f3e35b.js","c0c518128638de3d00a2e2b94acf413e"],["/br_coercion/js/56-6ef1da24910a4554b9de.js","ae685c3f1a89a5f2d05f5c4db520c903"],["/br_coercion/js/57-d418406cadcb67c7cb42.js","961ab9080c348615f263c2a1d842e83a"],["/br_coercion/js/58-b7c4786b23142f4d6635.js","2b15368c04d4fca150a87ebf644ff582"],["/br_coercion/js/59-7316507ad42533655036.js","0ed80b39390a3dc8a482c23e506ec5c1"],["/br_coercion/js/6-f66928ac15d3161cf71d.js","98df80201403d363d3e6e3f05dbdca3f"],["/br_coercion/js/60-70d541ff15fb8d23d5ea.js","9a12fc3f4541ee11c2b00d724042f221"],["/br_coercion/js/61-39950f11c0abcc955142.js","c374f5efe1132977ec1508ef481d7aab"],["/br_coercion/js/62-61c43c18a3cc91c59cfb.js","f1719d7a7aeeab9342f94e0c71583545"],["/br_coercion/js/63-3362ac94a66b2c68154c.js","968b32437b8f9acd9386715d0882a4c2"],["/br_coercion/js/64-1c364bb355fd42393af9.js","3208175a7d1cf2ead45fc0d916fd8505"],["/br_coercion/js/65-106fc48844c80ee4fc51.js","1a7e2fe8da73412cc888dc78252c60ca"],["/br_coercion/js/7-bdfef2d9e35fe5c66cd3.js","2723b533beb8b1f3ae96ba191726155b"],["/br_coercion/js/8-78cbff0e88d19e34e614.js","0c21fca98ea4d936338615c1817eb824"],["/br_coercion/js/9-a9afc1fa00b8884662a0.js","1cbf0a9c7c8b8fbfd771117472606b38"],["/br_coercion/js/account_password-e80bbb197cad5fe3d04b.js","3086aeaaf593c62d8aeb00e4c9eb3699"],["/br_coercion/js/api_token-455796411755cc9d240f.js","3840dc074599647488b4bd5b6d9e91b5"],["/br_coercion/js/authorized_application-87b6b5bc246c480c716e.js","cc1a1285b69b21872719396a7b717aba"],["/br_coercion/js/binary.js","477cdcf09d5c2c564723d9e38254588f"],["/br_coercion/js/binary_common.min.js","fd37992220030136a741168d82ede118"],["/br_coercion/js/cashier_password-40a473d15da490ee7be5.js","ca551e4e15acb086c8a5a0b6353db2eb"],["/br_coercion/js/contract-22860ba28ce847042516.js","4af49da7f35e5c05696fcd19556fed28"],["/br_coercion/js/financial_assessment-f2b2875bd22a7717c1ad.js","c63db696003c7c4e23df50a6b7136b4d"],["/br_coercion/js/limits-b108abb5bcd4b46ba7b5.js","08bf2636551b59c3b9dfbdf53c4ce759"],["/br_coercion/js/login_history-dcb5548da21ab243acf1.js","386aafd1fb1cacdbc89ae1fcaea84f07"],["/br_coercion/js/open_positions-69200ab30147a993acbd.js","8e01c2abbe6d4d3d7fb46eb422b286e8"],["/br_coercion/js/open_positions~portfolio~profit_table~statement-1976ff7d31c98be81a38.js","f36d6a0e54b9e7f6df84bd76326cd37c"],["/br_coercion/js/open_positions~profit_table~statement-57eeaeb8ac78d2b0a05d.js","48b53c73acd5f5a053fbe38a0d8f2a86"],["/br_coercion/js/personal_details-3f27d12d238da8ef9393.js","7ea320294cb7c4c45666e5d8381fb723"],["/br_coercion/js/portfolio-2ba844396df077541ab1.js","db155fe95cacd90d6dd4891641dabe80"],["/br_coercion/js/profit_table-5d00d040b72a6a0a4976.js","833987561b0b241c2e26f700791975ad"],["/br_coercion/js/react_mobx.min.js","2a9f1b1086dcaa755accb9febc5f0d1c"],["/br_coercion/js/reports-bca776944d698dee67a7.js","5cf0c0b9aa6282fe439e8e9a3b61457b"],["/br_coercion/js/self_exclusion-7b24d88cd6b9f04ae3d0.js","8aa3545dce9d12a58151e76dc411802d"],["/br_coercion/js/settings-ee411577a3c3a94f2f4e.js","99567149f298dddd642738765476fb70"],["/br_coercion/js/smart_chart-d17c6f4b371d99b2407d.js","ea85ef219df66e648f14836c900b2c53"],["/br_coercion/js/statement-74154da86d5e996eddb8.js","d266ddc439fcf7f1d012b7d67f00e030"],["/br_coercion/js/vendor.min.js","61942f0c9df015a460d14ba6a4f2ab0f"],["/br_coercion/js/vendors~smart_chart-400aa5149b55131c5a15.js","2989931fdfc9e12c067070d1c5b39de2"]];
var cacheName = 'sw-precache-v3-sw-precache-webpack-plugin-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








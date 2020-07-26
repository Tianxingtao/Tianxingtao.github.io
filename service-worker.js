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

var precacheConfig = [["D:/Blog/public/2020/07/24/uninstall_asia/index.html","a15dc45ccf7864b4562ddcfbd08fbd9f"],["D:/Blog/public/2020/07/25/crack_IDEA/index.html","4db8ec4266d8ce9f168caf6b8056e9ac"],["D:/Blog/public/2020/07/25/crack_navicat/index.html","9487cc1ba2d98d3cc4eb98f62962bd87"],["D:/Blog/public/2020/07/25/crack_sublime/index.html","1af778c4325ed3cfa3a57f9ac22e1c8b"],["D:/Blog/public/2020/07/25/install_git/index.html","4ff5c4def355304fbc920b9d43ab6651"],["D:/Blog/public/2020/07/25/software_list/index.html","a4bd2445b11af313fe8d9ffdfae8d990"],["D:/Blog/public/2020/07/26/crack_charles/index.html","bd6a4093d2ffacda63e22c6b68bf557c"],["D:/Blog/public/404.html","ed36f61922a251895dc8df1f8b4d9176"],["D:/Blog/public/about/index.html","e0aa89123c06ccebbd48254f3b276528"],["D:/Blog/public/archives/2020/07/index.html","ae476016b3a2330a7b29ee81afdc48a5"],["D:/Blog/public/archives/2020/index.html","8fd8f1a07841c70818468294b1eaa7e7"],["D:/Blog/public/archives/index.html","e68adf2ef4e83fda1aec723153802e72"],["D:/Blog/public/css/index.css","d8d713d64fbd1a1f3d3dc057acdcf49d"],["D:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog/public/images/crack_IDEA/UTF-8.png","fe9e2ced42506a733efa2c81efb2e4d5"],["D:/Blog/public/images/crack_IDEA/VM.png","017d983dfe062c3d32b69dd71a782ee4"],["D:/Blog/public/images/crack_IDEA/category.png","382cd78b5eb220f3caba34b5f66ffff6"],["D:/Blog/public/images/crack_IDEA/delete.png","7df55f5efdce15c4831eb0af4373fd38"],["D:/Blog/public/images/crack_IDEA/free_30.png","5157adc2aa0a8bcc3408cd440a3c634c"],["D:/Blog/public/images/crack_IDEA/register.png","e78c0a3d8ab5ec1fe559d4ac26c678e5"],["D:/Blog/public/images/crack_IDEA/register_success.png","32da39002c8a6a1e2bf3426a4fa25ab6"],["D:/Blog/public/images/crack_IDEA/tomcat.png","738fe9dffa976f7396c758103621d725"],["D:/Blog/public/images/crack_navicat/action_generate.png","54b380c772e435d1bb3e1c45a1611bc0"],["D:/Blog/public/images/crack_navicat/generate.png","c5e7142da4fb350dca142332895968c9"],["D:/Blog/public/images/crack_navicat/patch.png","4d2e3cf4ebe1045ad054480b4177c631"],["D:/Blog/public/images/crack_navicat/patch_success.png","e4dc9ac933e2bbaf21b55256d2ab8043"],["D:/Blog/public/images/crack_navicat/regedit.png","b99b9972e21a9e91fd96f44e5ecbaed0"],["D:/Blog/public/images/crack_navicat/success.png","f5a61aa3a9ebefe477308aae94fcf260"],["D:/Blog/public/images/crack_navicat/success_info.png","6c7de2e0c124f31fb145a118ff550f97"],["D:/Blog/public/images/index/avatar_1.jpg","9e91ded63afbbcc5b9dee84483a789aa"],["D:/Blog/public/images/index/avatar_2.jpg","ff14b66234156bf4477dd1df69dfd291"],["D:/Blog/public/images/index/back.jpg","727ae87ac8e6f59635ab6bb59ffc715b"],["D:/Blog/public/images/index/chrome.png","788b6170e36906853815ea369c2b2d1a"],["D:/Blog/public/images/index/cover_1.jpg","1f3087a2ba970df564149474f3471fbd"],["D:/Blog/public/images/index/cover_2.jpg","2ed49597af7275d81bd5dcf26cd3a66a"],["D:/Blog/public/images/index/cover_3.jpg","d407a88054dda9a0da1931d65f1428de"],["D:/Blog/public/images/index/cover_4.jpg","4ca832369a4c1deec32e76d6a65fc3e8"],["D:/Blog/public/images/install_git/install_git.png","b82c2312419fe5d05f2ae07d9221075c"],["D:/Blog/public/images/software_list/HWINFO.png","dcb7f61407659992ccfd566c27efaefd"],["D:/Blog/public/images/software_list/SpaceSniffer.png","9b772ae42127ec9902ed1539b6d63285"],["D:/Blog/public/images/software_list/Wox.jpg","d573ebf8bacd5f83a40f2171417a0043"],["D:/Blog/public/images/uninstall_asia/uninstall_asia.png","b70d6b2d69f2d2fe1f471ce8503ddba6"],["D:/Blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog/public/index.html","ff9a77fde090ad50f3e37f4e592711f0"],["D:/Blog/public/js/main.js","b382597891e958e71bb7c1099977ec66"],["D:/Blog/public/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["D:/Blog/public/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["D:/Blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/Blog/public/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["D:/Blog/public/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["D:/Blog/public/tags/software/index.html","c21dc321f2b5a66072fa26e0591c2e76"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
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








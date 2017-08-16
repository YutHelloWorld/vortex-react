/* ========================================================

   ** Browser Normalizer **

   This file is responsible for normalizing the browser environment before
   the application starts. Doing this allows us to safely use modern language
   features even when the end user is running an older browser.

   The following polyfills are included by default:

   1) Object.assign
   2) Promise
   3) Fetch
   Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。
   例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，
   以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。
   如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。
   由于使用babel-polyfill引入的垫片并不都是我们所需要的,重要的一点是引入的垫片挂在全局对象下，
   会污染全局对象，而且引入大小在80K。babel-runtime 的做法是自己手动引入 helper 函数。
   但 babel-runtime 也有问题，第一，很不方便，第二，在代码中中直接引入 helper 函数，意味着不能共享，造成最终打包出来的文件里有很多重复的 helper 代码。
   所以，babel 又开发了 babel-plugin-transform-runtime，
   这个模块会将我们的代码重写，如将 Promise 重写成 _Promise（只是打比方），
   然后引入_Promise helper 函数。这样就避免了重复打包代码和手动引入模块的痛苦。
   这里我们只手工引入工程需要的垫片,包括Object.assign、Promise、Fetch，
   同时不启用babel-plugin-transform-runtime的polyfill
   ====================================================== */

// 1) Object.assign
// ------------------------------------
// We can't rely on Object.assign being a function since it may be buggy, so
// defer to `object-assign`. If our Object.assign implementation is correct
// (determined by `object-assign` internally) the polyfill will be discarded
// and the native implementation used.
Object.assign = require('object-assign')

// 2) Promise
// ------------------------------------
if (typeof Promise === 'undefined') {
  require('promise/lib/rejection-tracking').enable()
  window.Promise = require('promise/lib/es6-extensions.js')
}

// 3) Fetch
// ------------------------------------
// Fetch polyfill depends on a Promise implementation, so it must come after
// the feature check / polyfill above.
if (typeof window.fetch === 'undefined') {
  require('whatwg-fetch')
}

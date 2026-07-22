module.exports = [
"[project]/OneDrive/PantreeApp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-ssr] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return `${prefix}${pathname}${query}${hash}`;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-ssr] (ecmascript)");
const _parsepath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return `${(0, _removetrailingslash.removeTrailingSlash)(pathname)}${query}${hash}`;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-ssr] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/normalize-trailing-slash.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null,
    ScrollBehavior: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    },
    ScrollBehavior: function() {
        return ScrollBehavior;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    return PrefetchKind;
}({});
var ScrollBehavior = /*#__PURE__*/ function(ScrollBehavior) {
    /** Use per-node ScrollRef to decide whether to scroll. */ ScrollBehavior[ScrollBehavior["Default"] = 0] = "Default";
    /** Suppress scroll entirely (e.g. scroll={false} on Link or router.push). */ ScrollBehavior[ScrollBehavior["NoScroll"] = 1] = "NoScroll";
    return ScrollBehavior;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Shared types and constants for the Segment Cache.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FetchStrategy: null,
    NavigationResultTag: null,
    PrefetchPriority: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FetchStrategy: function() {
        return FetchStrategy;
    },
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    PrefetchPriority: function() {
        return PrefetchPriority;
    }
});
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
var PrefetchPriority = /*#__PURE__*/ function(PrefetchPriority) {
    /**
   * Assigned to the most recently hovered/touched link. Special network
   * bandwidth is reserved for this task only. There's only ever one Intent-
   * priority task at a time; when a new Intent task is scheduled, the previous
   * one is bumped down to Default.
   */ PrefetchPriority[PrefetchPriority["Intent"] = 2] = "Intent";
    /**
   * The default priority for prefetch tasks.
   */ PrefetchPriority[PrefetchPriority["Default"] = 1] = "Default";
    /**
   * Assigned to tasks when they spawn non-blocking background work, like
   * revalidating a partially cached entry to see if more data is available.
   */ PrefetchPriority[PrefetchPriority["Background"] = 0] = "Background";
    return PrefetchPriority;
}({});
var FetchStrategy = /*#__PURE__*/ function(FetchStrategy) {
    // Deliberately ordered so we can easily compare two segments
    // and determine if one segment is "more specific" than another
    // (i.e. if it's likely that it contains more data)
    FetchStrategy[FetchStrategy["LoadingBoundary"] = 0] = "LoadingBoundary";
    FetchStrategy[FetchStrategy["PPR"] = 1] = "PPR";
    FetchStrategy[FetchStrategy["PPRRuntime"] = 2] = "PPRRuntime";
    FetchStrategy[FetchStrategy["Full"] = 3] = "Full";
    return FetchStrategy;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TypeScript trick to simulate opaque types, like in Flow.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    const originalUrl = new URL(originalHref);
    const cacheKey = {
        pathname: originalUrl.pathname,
        search: originalUrl.search,
        nextUrl: nextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * App Router types - Client-safe types for the Next.js App Router
 *
 * This file contains type definitions that can be safely imported
 * by both client-side and server-side code without circular dependencies.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrefetchHint", {
    enumerable: true,
    get: function() {
        return PrefetchHint;
    }
});
var PrefetchHint = /*#__PURE__*/ function(PrefetchHint) {
    // This segment has a runtime prefetch enabled (via unstable_instant with
    // prefetch: 'runtime'). Per-segment only, does not propagate to ancestors.
    PrefetchHint[PrefetchHint["HasRuntimePrefetch"] = 1] = "HasRuntimePrefetch";
    // This segment or one of its descendants has an instant config defined
    // (any truthy unstable_instant, regardless of prefetch mode). Propagates
    // upward so the root segment reflects the entire subtree.
    PrefetchHint[PrefetchHint["SubtreeHasInstant"] = 2] = "SubtreeHasInstant";
    // This segment itself has a loading.tsx boundary.
    PrefetchHint[PrefetchHint["SegmentHasLoadingBoundary"] = 4] = "SegmentHasLoadingBoundary";
    // A descendant segment (but not this one) has a loading.tsx boundary.
    // Propagates upward so the root reflects the entire subtree.
    PrefetchHint[PrefetchHint["SubtreeHasLoadingBoundary"] = 8] = "SubtreeHasLoadingBoundary";
    // This segment is the root layout of the application.
    PrefetchHint[PrefetchHint["IsRootLayout"] = 16] = "IsRootLayout";
    // This segment's response includes its parent's data inlined into it.
    // Set at build time by the segment size measurement pass.
    PrefetchHint[PrefetchHint["ParentInlinedIntoSelf"] = 32] = "ParentInlinedIntoSelf";
    // This segment's data is inlined into one of its children — don't fetch
    // it separately. Set at build time by the segment size measurement pass.
    PrefetchHint[PrefetchHint["InlinedIntoChild"] = 64] = "InlinedIntoChild";
    // On a __PAGE__: this page's response includes the head (metadata/viewport)
    // at the end of its SegmentPrefetch[] array.
    PrefetchHint[PrefetchHint["HeadInlinedIntoSelf"] = 128] = "HeadInlinedIntoSelf";
    // On the root hint node: the head was NOT inlined into any page — fetch
    // it separately. Absence of this bit means the head is bundled into a page.
    PrefetchHint[PrefetchHint["HeadOutlined"] = 256] = "HeadOutlined";
    return PrefetchHint;
}({});
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Vary Params Decoding
 *
 * This module is shared between server and client.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "readVaryParams", {
    enumerable: true,
    get: function() {
        return readVaryParams;
    }
});
function readVaryParams(thenable) {
    // Attach a no-op listener to force Flight to synchronously resolve the
    // thenable. When a thenable arrives from the Flight stream, it may be in an
    // intermediate 'resolved_model' state (data received but not unwrapped).
    // Calling .then() triggers Flight to transition it to 'fulfilled', making
    // the value available synchronously. React uses this same optimization
    // internally to avoid unnecessary microtasks.
    thenable.then(noop);
    // If the thenable is still not 'fulfilled' after calling .then(), the server
    // failed to resolve it before the stream ended. Treat as unknown.
    if (thenable.status !== 'fulfilled') {
        return null;
    }
    return thenable.value;
}
const noop = ()=>{};
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_ACTION_REVALIDATED_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_HTML_REQUEST_ID_HEADER: null,
    NEXT_INSTANT_PREFETCH_HEADER: null,
    NEXT_INSTANT_TEST_COOKIE: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REQUEST_ID_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_ACTION_REVALIDATED_HEADER: function() {
        return NEXT_ACTION_REVALIDATED_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_HTML_REQUEST_ID_HEADER: function() {
        return NEXT_HTML_REQUEST_ID_HEADER;
    },
    NEXT_INSTANT_PREFETCH_HEADER: function() {
        return NEXT_INSTANT_PREFETCH_HEADER;
    },
    NEXT_INSTANT_TEST_COOKIE: function() {
        return NEXT_INSTANT_TEST_COOKIE;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REQUEST_ID_HEADER: function() {
        return NEXT_REQUEST_ID_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const NEXT_INSTANT_PREFETCH_HEADER = 'next-instant-navigation-testing-prefetch';
const NEXT_INSTANT_TEST_COOKIE = 'next-instant-navigation-testing';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function() {
        return useAppDevRenderingIndicator;
    }
});
const _react = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)");
const useAppDevRenderingIndicator = ()=>{
    const [isPending, startTransition] = (0, _react.useTransition)();
    (0, _react.useEffect)(()=>{
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    dispatchGestureState: null,
    refreshOnInstantNavigationUnlock: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    dispatchGestureState: function() {
        return dispatchGestureState;
    },
    refreshOnInstantNavigationUnlock: function() {
        return refreshOnInstantNavigationUnlock;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function refreshOnInstantNavigationUnlock() {
    if ("TURBOPACK compile-time truthy", 1) {
        if (dispatch !== null) {
            dispatch({
                type: _routerreducertypes.ACTION_REFRESH,
                bypassCacheInvalidation: true
            });
        } else {
            window.location.reload();
        }
    }
}
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
// Optimistic state setter for experimental_gesturePush. Only should be used
// during a gesture transition.
let setGestureRouterState = null;
function dispatchGestureState(state) {
    if (setGestureRouterState === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    setGestureRouterState(state);
}
const __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
const promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    const [canonicalState, setState] = _react.default.useState(actionQueue.state);
    // Wrap the canonical state in useOptimistic to support
    // experimental_gesturePush. During a gesture transition, this returns a fork
    // of the router state that represents the eventual target if/when the gesture
    // completes. Otherwise it returns the canonical state.
    const [state, setGesture] = (0, _react.useOptimistic)(canonicalState);
    if (("TURBOPACK compile-time value", "undefined") !== 'undefined') {
        setGestureRouterState = setGesture;
    }
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    let nextDispatch;
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        nextDispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    if (("TURBOPACK compile-time value", "undefined") !== 'undefined') {
        dispatch = nextDispatch;
    }
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    const stateWithDebugInfo = (0, _react.useMemo)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            let promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                const debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then((asyncState)=>{
                    if (asyncState.debugInfo !== null) {
                        debugInfo.push(...asyncState.debugInfo);
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = `${basePath}/__nextjs_source-map`;
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return `${filename}.map`;
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    NOT_FOUND_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    computeSelectedLayoutSegment: null,
    getSegmentValue: null,
    getSelectedLayoutSegmentPath: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    NOT_FOUND_SEGMENT_KEY: function() {
        return NOT_FOUND_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    computeSelectedLayoutSegment: function() {
        return computeSelectedLayoutSegment;
    },
    getSegmentValue: function() {
        return getSegmentValue;
    },
    getSelectedLayoutSegmentPath: function() {
        return getSelectedLayoutSegmentPath;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found';
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HEAD_REQUEST_KEY: null,
    ROOT_SEGMENT_REQUEST_KEY: null,
    appendSegmentRequestKeyPart: null,
    convertSegmentPathToStaticExportFilename: null,
    createSegmentRequestKeyPart: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HEAD_REQUEST_KEY: function() {
        return HEAD_REQUEST_KEY;
    },
    ROOT_SEGMENT_REQUEST_KEY: function() {
        return ROOT_SEGMENT_REQUEST_KEY;
    },
    appendSegmentRequestKeyPart: function() {
        return appendSegmentRequestKeyPart;
    },
    convertSegmentPathToStaticExportFilename: function() {
        return convertSegmentPathToStaticExportFilename;
    },
    createSegmentRequestKeyPart: function() {
        return createSegmentRequestKeyPart;
    }
});
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const ROOT_SEGMENT_REQUEST_KEY = '';
const HEAD_REQUEST_KEY = '/_head';
function createSegmentRequestKeyPart(segment) {
    if (typeof segment === 'string') {
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
            // The Flight Router State type sometimes includes the search params in
            // the page segment. However, the Segment Cache tracks this as a separate
            // key. So, we strip the search params here, and then add them back when
            // the cache entry is turned back into a FlightRouterState. This is an
            // unfortunate consequence of the FlightRouteState being used both as a
            // transport type and as a cache key; we'll address this once more of the
            // Segment Cache implementation has settled.
            // TODO: We should hoist the search params out of the FlightRouterState
            // type entirely, This is our plan for dynamic route params, too.
            return _segment.PAGE_SEGMENT_KEY;
        }
        const safeName = // But params typically don't include the leading slash. We should use
        // a different encoding to avoid this special case.
        segment === '/_not-found' ? '_not-found' : encodeToFilesystemAndURLSafeString(segment);
        // Since this is not a dynamic segment, it's fully encoded. It does not
        // need to be "hydrated" with a param value.
        return safeName;
    }
    const name = segment[0];
    const paramType = segment[2];
    const safeName = encodeToFilesystemAndURLSafeString(name);
    const encodedName = '$' + paramType + '$' + safeName;
    return encodedName;
}
function appendSegmentRequestKeyPart(parentRequestKey, parallelRouteKey, childRequestKeyPart) {
    // Aside from being filesystem safe, segment keys are also designed so that
    // each segment and parallel route creates its own subdirectory. Roughly in
    // the same shape as the source app directory. This is mostly just for easier
    // debugging (you can open up the build folder and navigate the output); if
    // we wanted to do we could just use a flat structure.
    // Omit the parallel route key for children, since this is the most
    // common case. Saves some bytes (and it's what the app directory does).
    const slotKey = parallelRouteKey === 'children' ? childRequestKeyPart : `@${encodeToFilesystemAndURLSafeString(parallelRouteKey)}/${childRequestKeyPart}`;
    return parentRequestKey + '/' + slotKey;
}
// Define a regex pattern to match the most common characters found in a route
// param. It excludes anything that might not be cross-platform filesystem
// compatible, like |. It does not need to be precise because the fallback is to
// just base64url-encode the whole parameter, which is fine; we just don't do it
// by default for compactness, and for easier debugging.
const simpleParamValueRegex = /^[a-zA-Z0-9\-_@]+$/;
function encodeToFilesystemAndURLSafeString(value) {
    if (simpleParamValueRegex.test(value)) {
        return value;
    }
    // If there are any unsafe characters, base64url-encode the entire value.
    // We also add a ! prefix so it doesn't collide with the simple case.
    const base64url = btoa(value).replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove trailing '='
    ;
    return '!' + base64url;
}
function convertSegmentPathToStaticExportFilename(segmentPath) {
    return `__next${segmentPath.replace(/\//g, '.')}.txt`;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    doesStaticSegmentAppearInURL: null,
    getCacheKeyForDynamicParam: null,
    getParamValueFromCacheKey: null,
    getRenderedPathname: null,
    getRenderedSearch: null,
    parseDynamicParamFromURLPart: null,
    urlSearchParamsToParsedUrlQuery: null,
    urlToUrlWithoutFlightMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    doesStaticSegmentAppearInURL: function() {
        return doesStaticSegmentAppearInURL;
    },
    getCacheKeyForDynamicParam: function() {
        return getCacheKeyForDynamicParam;
    },
    getParamValueFromCacheKey: function() {
        return getParamValueFromCacheKey;
    },
    getRenderedPathname: function() {
        return getRenderedPathname;
    },
    getRenderedSearch: function() {
        return getRenderedSearch;
    },
    parseDynamicParamFromURLPart: function() {
        return parseDynamicParamFromURLPart;
    },
    urlSearchParamsToParsedUrlQuery: function() {
        return urlSearchParamsToParsedUrlQuery;
    },
    urlToUrlWithoutFlightMarker: function() {
        return urlToUrlWithoutFlightMarker;
    }
});
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
function getRenderedSearch(response) {
    // If the server performed a rewrite, the search params used to render the
    // page will be different from the params in the request URL. In this case,
    // the response will include a header that gives the rewritten search query.
    const rewrittenQuery = response.headers.get(_approuterheaders.NEXT_REWRITTEN_QUERY_HEADER);
    if (rewrittenQuery !== null) {
        return rewrittenQuery === '' ? '' : '?' + rewrittenQuery;
    }
    // If the header is not present, there was no rewrite, so we use the search
    // query of the response URL.
    return urlToUrlWithoutFlightMarker(new URL(response.url)).search;
}
function getRenderedPathname(response) {
    // If the server performed a rewrite, the pathname used to render the
    // page will be different from the pathname in the request URL. In this case,
    // the response will include a header that gives the rewritten pathname.
    const rewrittenPath = response.headers.get(_approuterheaders.NEXT_REWRITTEN_PATH_HEADER);
    return rewrittenPath ?? urlToUrlWithoutFlightMarker(new URL(response.url)).pathname;
}
// Pathname parts come from `URL.pathname.split('/')`, so they are already
// in the encoded form the URL parser produces. The server-side equivalent
// (`get-dynamic-param.ts`) starts from a decoded param value and applies
// `encodeURIComponent` once. The two encodings are not the same — for
// example, the URL parser leaves `,` and `:` untouched while
// `encodeURIComponent` percent-encodes them. To produce the same canonical
// form on the client (and avoid double-encoding `%xx` sequences such as
// `%2F` → `%252F`), we decode the URL part first and re-encode it.
function canonicalizeURLPart(part) {
    try {
        return encodeURIComponent(decodeURIComponent(part));
    } catch  {
        // `decodeURIComponent` throws on malformed sequences. Fall back to the
        // already-encoded form rather than failing the navigation.
        return part;
    }
}
function parseDynamicParamFromURLPart(paramType, pathnameParts, partIndex) {
    // This needs to match the behavior in get-dynamic-param.ts.
    switch(paramType){
        // Catchalls
        case 'c':
            {
                // Catchalls receive all the remaining URL parts. If there are no
                // remaining pathname parts, return an empty array.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>canonicalizeURLPart(s)) : [];
            }
        // Catchall intercepted
        case 'ci(..)(..)':
        case 'ci(.)':
        case 'ci(..)':
        case 'ci(...)':
            {
                const prefix = paramType.length - 2;
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s, i)=>{
                    if (i === 0) {
                        return canonicalizeURLPart(s.slice(prefix));
                    }
                    return canonicalizeURLPart(s);
                }) : [];
            }
        // Optional catchalls
        case 'oc':
            {
                // Optional catchalls receive all the remaining URL parts, unless this is
                // the end of the pathname, in which case they return null.
                return partIndex < pathnameParts.length ? pathnameParts.slice(partIndex).map((s)=>canonicalizeURLPart(s)) : null;
            }
        // Dynamic
        case 'd':
            {
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return canonicalizeURLPart(pathnameParts[partIndex]);
            }
        // Dynamic intercepted
        case 'di(..)(..)':
        case 'di(.)':
        case 'di(..)':
        case 'di(...)':
            {
                const prefix = paramType.length - 2;
                if (partIndex >= pathnameParts.length) {
                    // The route tree expected there to be more parts in the URL than there
                    // actually are. This could happen if the x-nextjs-rewritten-path header
                    // is incorrectly set, or potentially due to bug in Next.js. TODO:
                    // Should this be a hard error? During a prefetch, we can just abort.
                    // During a client navigation, we could trigger a hard refresh. But if
                    // it happens during initial render, we don't really have any
                    // recovery options.
                    return '';
                }
                return canonicalizeURLPart(pathnameParts[partIndex].slice(prefix));
            }
        default:
            paramType;
            return '';
    }
}
function doesStaticSegmentAppearInURL(segment) {
    // This is not a parameterized segment; however, we need to determine
    // whether or not this segment appears in the URL. For example, this route
    // groups do not appear in the URL, so they should be skipped. Any other
    // special cases must be handled here.
    // TODO: Consider encoding this directly into the router tree instead of
    // inferring it on the client based on the segment type. Something like
    // a `doesAppearInURL` flag in FlightRouterState.
    if (segment === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY || // For some reason, the loader tree sometimes includes extra __PAGE__
    // "layouts" when part of a parallel route. But it's not a leaf node.
    // Otherwise, we wouldn't need this special case because pages are
    // always leaf nodes.
    // TODO: Investigate why the loader produces these fake page segments.
    segment.startsWith(_segment.PAGE_SEGMENT_KEY) || // Route groups.
    segment[0] === '(' && segment.endsWith(')') || segment === _segment.DEFAULT_SEGMENT_KEY || segment === '/_not-found') {
        return false;
    } else {
        // All other segment types appear in the URL
        return true;
    }
}
function getCacheKeyForDynamicParam(paramValue, renderedSearch) {
    // This needs to match the logic in get-dynamic-param.ts, until we're able to
    // unify the various implementations so that these are always computed on
    // the client.
    if (typeof paramValue === 'string') {
        // TODO: Refactor or remove this helper function to accept a string rather
        // than the whole segment type. Also we can probably just append the
        // search string instead of turning it into JSON.
        const pageSegmentWithSearchParams = (0, _segment.addSearchParamsIfPageSegment)(paramValue, Object.fromEntries(new URLSearchParams(renderedSearch)));
        return pageSegmentWithSearchParams;
    } else if (paramValue === null) {
        return '';
    } else {
        return paramValue.join('/');
    }
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url);
    urlWithoutFlightParameters.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return urlWithoutFlightParameters;
}
function getParamValueFromCacheKey(paramCacheKey, paramType) {
    // Turn the cache key string sent by the server (as part of FlightRouterState)
    // into a value that can be passed to `useParams` and client components.
    const isCatchAll = paramType === 'c' || paramType === 'oc';
    if (isCatchAll) {
        // Catch-all param keys are a concatenation of the path segments.
        // See equivalent logic in `getSelectedParams`.
        // TODO: We should just pass the array directly, rather than concatenate
        // it to a string and then split it back to an array. It needs to be an
        // array in some places, like when passing a key React, but we can convert
        // it at runtime in those places.
        return paramCacheKey.split('/');
    }
    return paramCacheKey;
}
function urlSearchParamsToParsedUrlQuery(searchParams) {
    // Converts a URLSearchParams object to the same type used by the server when
    // creating search params props, i.e. the type returned by Node's
    // "querystring" module.
    const result = {};
    for (const [key, value] of searchParams.entries()){
        if (result[key] === undefined) {
            result[key] = value;
        } else if (Array.isArray(result[key])) {
            result[key].push(value);
        } else {
            result[key] = [
                result[key],
                value
            ];
        }
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash = true) {
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createInitialRSCPayloadFromFallbackPrerender: null,
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createInitialRSCPayloadFromFallbackPrerender: function() {
        return createInitialRSCPayloadFromFallbackPrerender;
    },
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: segmentPath[segmentPath.length - 1] ?? '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function createInitialRSCPayloadFromFallbackPrerender(response, fallbackInitialRSCPayload) {
    // This is a static fallback page. In order to hydrate the page, we need to
    // parse the client params from the URL, but to account for the possibility
    // that the page was rewritten, we need to check the response headers
    // for x-nextjs-rewritten-path or x-nextjs-rewritten-query headers. Since
    // we can't access the headers of the initial document response, the client
    // performs a fetch request to the current location. Since it's possible that
    // the fetch request will be dynamically rewritten to a different path than
    // the initial document, this fetch request delivers _all_ the hydration data
    // for the page; it was not inlined into the document, like it normally
    // would be.
    //
    // TODO: Consider treating the case where fetch is rewritten to a different
    // path from the document as a special deopt case. We should optimistically
    // assume this won't happen, inline the data into the document, and perform
    // a minimal request (like a HEAD or range request) to verify that the
    // response matches. Tricky to get right because we need to account for
    // all the different deployment environments we support, like output:
    // "export" mode, where we currently don't assume that custom response
    // headers are present.
    // Patch the Flight data sent by the server with the correct params parsed
    // from the URL + response object.
    const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(new URL(location.href));
    const originalFlightDataPath = fallbackInitialRSCPayload.f[0];
    const originalFlightRouterState = originalFlightDataPath[0];
    const payload = {
        c: canonicalUrl.split('/'),
        q: renderedSearch,
        i: fallbackInitialRSCPayload.i,
        f: [
            [
                fillInFallbackFlightRouterState(originalFlightRouterState, renderedPathname, renderedSearch),
                originalFlightDataPath[1],
                originalFlightDataPath[2],
                originalFlightDataPath[2]
            ]
        ],
        m: fallbackInitialRSCPayload.m,
        G: fallbackInitialRSCPayload.G,
        S: fallbackInitialRSCPayload.S,
        h: fallbackInitialRSCPayload.h
    };
    if (fallbackInitialRSCPayload.b) {
        payload.b = fallbackInitialRSCPayload.b;
    }
    return payload;
}
function fillInFallbackFlightRouterState(flightRouterState, renderedPathname, renderedSearch) {
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    return fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, index);
}
function fillInFallbackFlightRouterStateImpl(flightRouterState, renderedSearch, pathnameParts, pathnamePartsIndex) {
    const originalSegment = flightRouterState[0];
    let newSegment;
    let doesAppearInURL;
    if (typeof originalSegment === 'string') {
        newSegment = originalSegment;
        doesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(originalSegment);
    } else {
        const paramName = originalSegment[0];
        const paramType = originalSegment[2];
        const staticSiblings = originalSegment[3];
        const paramValue = (0, _routeparams.parseDynamicParamFromURLPart)(paramType, pathnameParts, pathnamePartsIndex);
        const cacheKey = (0, _routeparams.getCacheKeyForDynamicParam)(paramValue, renderedSearch);
        newSegment = [
            paramName,
            cacheKey,
            paramType,
            staticSiblings
        ];
        doesAppearInURL = true;
    }
    // Only increment the index if the segment appears in the URL. If it's a
    // "virtual" segment, like a route group, it remains the same.
    const childPathnamePartsIndex = doesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
    const children = flightRouterState[1];
    const newChildren = {};
    for(let key in children){
        const childFlightRouterState = children[key];
        newChildren[key] = fillInFallbackFlightRouterStateImpl(childFlightRouterState, renderedSearch, pathnameParts, childPathnamePartsIndex);
    }
    const newState = [
        newSegment,
        newChildren,
        null,
        flightRouterState[3],
        flightRouterState[4]
    ];
    return newState;
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map((flightDataPath)=>getFlightDataPartsFromPath(flightDataPath));
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _refreshState, refreshMarker, prefetchHints] = flightRouterState;
    // Strip client-only data from the segment
    const cleanedSegment = stripClientOnlyDataFromSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes
    ];
    if (refreshMarker) {
        result[2] = null // null slightly more compact than undefined
        ;
        result[3] = refreshMarker;
    }
    // Append optional fields if present
    if (prefetchHints !== undefined) {
        result[4] = prefetchHints;
    }
    // Everything else is used only by the client and is not needed for requests.
    return result;
}
/**
 * Strips client-only data from segments:
 * - Search parameters from __PAGE__ segments
 * - staticSiblings from dynamic segment tuples (only needed for client-side
 *   prefetch reuse decisions)
 */ function stripClientOnlyDataFromSegment(segment) {
    if (typeof segment === 'string') {
        // Strip search params from __PAGE__ segments
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
            return _segment.PAGE_SEGMENT_KEY;
        }
        return segment;
    }
    // Dynamic segment tuple: [paramName, paramCacheKey, paramType, staticSiblings]
    // Strip staticSiblings (4th element) since server doesn't need it
    const [paramName, paramCacheKey, paramType] = segment;
    return [
        paramName,
        paramCacheKey,
        paramType,
        null
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/hash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeCacheBustingSearchParam: null,
    computeLegacyCacheBustingSearchParam: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeCacheBustingSearchParam: function() {
        return computeCacheBustingSearchParam;
    },
    computeLegacyCacheBustingSearchParam: function() {
        return computeLegacyCacheBustingSearchParam;
    }
});
const _hash = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/hash.js [app-ssr] (ecmascript)");
const CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES = 12;
const textEncoder = new TextEncoder();
function encodeCacheBustingSearchParam(bytes) {
    let binary = '';
    for(let i = 0; i < bytes.length; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function normalizeCacheBustingInput(value) {
    if (value === undefined) {
        return '0';
    }
    return Array.isArray(value) ? value.join(',') : value;
}
function createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return null;
    }
    return [
        prefetchHeader ?? '0',
        normalizeCacheBustingInput(segmentPrefetchHeader),
        normalizeCacheBustingInput(stateTreeHeader),
        normalizeCacheBustingInput(nextUrlHeader)
    ].join(',');
}
async function computeCacheBustingSearchParamFromInput(input) {
    // Truncate SHA-256 to 96 bits to keep `_rsc` compact
    const digest = await globalThis.crypto.subtle.digest('SHA-256', textEncoder.encode(input));
    return encodeCacheBustingSearchParam(new Uint8Array(digest).subarray(0, CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES));
}
async function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    const input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
    if (input === null) {
        return '';
    }
    return computeCacheBustingSearchParamFromInput(input);
}
function computeLegacyCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    const input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
    if (input === null) {
        return '';
    }
    return (0, _hash.hexHash)(input);
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    setCacheBustingSearchParam: null,
    setCacheBustingSearchParamWithHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setCacheBustingSearchParam: function() {
        return setCacheBustingSearchParam;
    },
    setCacheBustingSearchParamWithHash: function() {
        return setCacheBustingSearchParamWithHash;
    }
});
const _cachebustingsearchparam = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/cache-busting-search-param.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
async function computeClientCacheBustingSearchParam(headers) {
    if (typeof globalThis.crypto?.subtle?.digest === 'function') {
        return (0, _cachebustingsearchparam.computeCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
    }
    return (0, _cachebustingsearchparam.computeLegacyCacheBustingSearchParam)(headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER], headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER], headers[_approuterheaders.NEXT_URL]);
}
const setCacheBustingSearchParam = async (url, headers)=>{
    const uniqueCacheKey = await computeClientCacheBustingSearchParam(headers);
    setCacheBustingSearchParamWithHash(url, uniqueCacheKey);
};
const setCacheBustingSearchParamWithHash = (url, hash)=>{
    /**
   * Note that we intentionally do not use `url.searchParams.set` here:
   *
   * const url = new URL('https://example.com/search?q=custom%20spacing');
   * url.searchParams.set('_rsc', 'abc123');
   * console.log(url.toString()); // Outputs: https://example.com/search?q=custom+spacing&_rsc=abc123
   *                                                                             ^ <--- this is causing confusion
   * This is in fact intended based on https://url.spec.whatwg.org/#interface-urlsearchparams, but
   * we want to preserve the %20 as %20 if that's what the user passed in, hence the custom
   * logic below.
   */ const existingSearch = url.search;
    const rawQuery = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
    // Always remove any existing cache busting param and add a fresh one to ensure
    // we have the correct value based on current request headers
    const pairs = rawQuery.split('&').filter((pair)=>pair && !pair.startsWith(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=`));
    if (hash.length > 0) {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}=${hash}`);
    } else {
        pairs.push(`${_approuterheaders.NEXT_RSC_UNION_QUERY}`);
    }
    url.search = pairs.length ? `?${pairs.join('&')}` : '';
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAssetToken: null,
    getAssetTokenQuery: null,
    getDeploymentId: null,
    getDeploymentIdQuery: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAssetToken: function() {
        return getAssetToken;
    },
    getAssetTokenQuery: function() {
        return getAssetTokenQuery;
    },
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQuery: function() {
        return getDeploymentIdQuery;
    }
});
let deploymentId;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    // Client side: replaced with globalThis.NEXT_DEPLOYMENT_ID
    // Server side: left as is or replaced with a string or replaced with false
    deploymentId = ("TURBOPACK compile-time value", false) || undefined;
}
function getDeploymentId() {
    return deploymentId;
}
function getDeploymentIdQuery(ampersand = false) {
    let id = getDeploymentId();
    if (id) {
        return `${ampersand ? '&' : '?'}dpl=${id}`;
    }
    return '';
}
function getAssetToken() {
    return ("TURBOPACK compile-time value", "") || ("TURBOPACK compile-time value", false);
}
function getAssetTokenQuery(ampersand = false) {
    let id = getAssetToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/navigation-build-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
//
// Starts as an empty string. In practice, because setNavigationBuildId is called during initialization
// before hydration starts, this will always get reassigned to the actual ID before it's ever needed
// by a navigation. If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
//
// Note that this can also be initialized with the deployment id instead (if available). So it's not
// the same as "the build id", but we are running out of alternative names for "build id or
// deployment id".
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getNavigationBuildId: null,
    setNavigationBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNavigationBuildId: function() {
        return getNavigationBuildId;
    },
    setNavigationBuildId: function() {
        return setNavigationBuildId;
    }
});
let globalBuildId = '';
function setNavigationBuildId(buildId) {
    globalBuildId = buildId;
}
function getNavigationBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR_SECONDS: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    HTML_CONTENT_TYPE_HEADER: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    JSON_CONTENT_TYPE_HEADER: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_ROOT_PARAM_TAG_ID: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_NAV_DEPLOYMENT_ID_HEADER: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NEXT_RESUME_STATE_LENGTH_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PROXY_FILENAME: null,
    PROXY_LOCATION_REGEXP: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    TEXT_PLAIN_CONTENT_TYPE_HEADER: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null,
    WEB_SOCKET_MAX_RECONNECTIONS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR_SECONDS: function() {
        return CACHE_ONE_YEAR_SECONDS;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_ROOT_PARAM_TAG_ID: function() {
        return NEXT_CACHE_ROOT_PARAM_TAG_ID;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_NAV_DEPLOYMENT_ID_HEADER: function() {
        return NEXT_NAV_DEPLOYMENT_ID_HEADER;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NEXT_RESUME_STATE_LENGTH_HEADER: function() {
        return NEXT_RESUME_STATE_LENGTH_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PROXY_FILENAME: function() {
        return PROXY_FILENAME;
    },
    PROXY_LOCATION_REGEXP: function() {
        return PROXY_LOCATION_REGEXP;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    },
    WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return WEB_SOCKET_MAX_RECONNECTIONS;
    }
});
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_NAV_DEPLOYMENT_ID_HEADER = 'x-nextjs-deployment-id';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_RESUME_STATE_LENGTH_HEADER = 'x-next-resume-state-length';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const NEXT_CACHE_ROOT_PARAM_TAG_ID = '_N_RP_';
const CACHE_ONE_YEAR_SECONDS = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNavigatingToNewRootLayout", {
    enumerable: true,
    get: function() {
        return isNavigatingToNewRootLayout;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)");
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree.segment;
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    const currentIsRootLayout = ((currentTree[4] ?? 0) & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    const nextIsRootLayout = (nextTree.prefetchHints & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    if (currentIsRootLayout) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextIsRootLayout;
    }
    // Current tree didn't have its root layout here, must have changed.
    if (nextIsRootLayout) {
        return true;
    }
    const slots = nextTree.slots;
    const currentTreeChildren = currentTree[1];
    if (slots !== null) {
        for(const slot in slots){
            const nextTreeChild = slots[slot];
            const currentTreeChild = currentTreeChildren[slot];
            if (currentTreeChild === undefined || isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild)) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/reducers/committed-state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getLastCommittedTree: null,
    setLastCommittedTree: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getLastCommittedTree: function() {
        return getLastCommittedTree;
    },
    setLastCommittedTree: function() {
        return setLastCommittedTree;
    }
});
// The tree from the last state that was committed to the browser history
// (i.e., the last state for which HistoryUpdater's useInsertionEffect ran).
// This lets the server-patch reducer distinguish between retrying a
// navigation that already pushed a history entry vs one whose transition
// suspended and never committed.
//
// Currently only used by the server-patch retry logic, but this module is a
// stepping stone toward a broader refactor of the navigation queue. The
// existing AppRouter action queue will eventually be replaced by a more
// reactive model that explicitly tracks pending vs committed navigation
// state. This file will likely evolve into (or be subsumed by) that new
// implementation.
let lastCommittedTree = null;
function getLastCommittedTree() {
    return lastCommittedTree;
}
function setLastCommittedTree(tree) {
    lastCommittedTree = tree;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/lru.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cleanup: null,
    deleteFromLru: null,
    lruPut: null,
    updateLruSize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cleanup: function() {
        return cleanup;
    },
    deleteFromLru: function() {
        return deleteFromLru;
    },
    lruPut: function() {
        return lruPut;
    },
    updateLruSize: function() {
        return updateLruSize;
    }
});
const _cachemap = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
// We use an LRU for memory management. We must update this whenever we add or
// remove a new cache entry, or when an entry changes size.
let head = null;
let lruSize = 0;
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
const maxLruSize = 50 * 1024 * 1024 // 50 MB
;
function lruPut(node) {
    if (head === node) {
        // Already at the head
        return;
    }
    const prev = node.prev;
    const next = node.next;
    if (next === null || prev === null) {
        // This is an insertion
        lruSize += node.size;
        // Whenever we add an entry, we need to check if we've exceeded the
        // max size. We don't evict entries immediately; they're evicted later in
        // an asynchronous task.
        ensureCleanupIsScheduled();
    } else {
        // This is a move. Remove from its current position.
        prev.next = next;
        next.prev = prev;
    }
    // Move to the front of the list
    if (head === null) {
        // This is the first entry
        node.prev = node;
        node.next = node;
    } else {
        // Add to the front of the list
        const tail = head.prev;
        node.prev = tail;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            tail.next = node;
        }
        node.next = head;
        head.prev = node;
    }
    head = node;
}
function updateLruSize(node, newNodeSize) {
    // This is a separate function from `put` so that we can resize the entry
    // regardless of whether it's currently being tracked by the LRU.
    const prevNodeSize = node.size;
    node.size = newNodeSize;
    if (node.next === null) {
        // This entry is not currently being tracked by the LRU.
        return;
    }
    // Update the total LRU size
    lruSize = lruSize - prevNodeSize + newNodeSize;
    ensureCleanupIsScheduled();
}
function deleteFromLru(deleted) {
    const next = deleted.next;
    const prev = deleted.prev;
    if (next !== null && prev !== null) {
        lruSize -= deleted.size;
        deleted.next = null;
        deleted.prev = null;
        // Remove from the list
        if (head === deleted) {
            // Update the head
            if (next === head) {
                // This was the last entry
                head = null;
            } else {
                head = next;
                prev.next = next;
                next.prev = prev;
            }
        } else {
            prev.next = next;
            next.prev = prev;
        }
    } else {
    // Already deleted
    }
}
function ensureCleanupIsScheduled() {
    if (lruSize <= maxLruSize) {
        return;
    }
    // To schedule cleanup, ping the prefetch scheduler. At the end of its work
    // loop, once there are no queued tasks and no in-progress requests, it will
    // call cleanup().
    (0, _scheduler.pingPrefetchScheduler)();
}
function cleanup() {
    if (lruSize <= maxLruSize) {
        return;
    }
    // Evict entries until we're at 90% capacity. We can assume this won't
    // infinite loop because even if `maxLruSize` were 0, eventually
    // `deleteFromLru` sets `head` to `null` when we run out entries.
    const ninetyPercentMax = maxLruSize * 0.9;
    while(lruSize > ninetyPercentMax && head !== null){
        const tail = head.prev;
        // In practice, this is never null, but that isn't encoded in the type
        if (tail !== null) {
            // Delete the entry from the map. In turn, this will remove it from
            // the LRU.
            (0, _cachemap.deleteMapEntry)(tail);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Fallback: null,
    createCacheMap: null,
    deleteFromCacheMap: null,
    deleteMapEntry: null,
    getFromCacheMap: null,
    isValueExpired: null,
    setInCacheMap: null,
    setSizeInCacheMap: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Fallback: function() {
        return Fallback;
    },
    createCacheMap: function() {
        return createCacheMap;
    },
    deleteFromCacheMap: function() {
        return deleteFromCacheMap;
    },
    deleteMapEntry: function() {
        return deleteMapEntry;
    },
    getFromCacheMap: function() {
        return getFromCacheMap;
    },
    isValueExpired: function() {
        return isValueExpired;
    },
    setInCacheMap: function() {
        return setInCacheMap;
    },
    setSizeInCacheMap: function() {
        return setSizeInCacheMap;
    }
});
const _lru = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/lru.js [app-ssr] (ecmascript)");
const Fallback = {};
// This is a special internal key that is used for "revalidation" entries. It's
// an implementation detail that shouldn't leak outside of this module.
const Revalidation = {};
function createCacheMap() {
    const cacheMap = {
        parent: null,
        key: null,
        value: null,
        map: null,
        // LRU-related fields
        prev: null,
        next: null,
        size: 0
    };
    return cacheMap;
}
function getOrInitialize(cacheMap, keys, isRevalidation) {
    // Go through each level of keys until we find the entry that matches, or
    // create a new entry if one doesn't exist.
    //
    // This function will only return entries that match the keypath _exactly_.
    // Unlike getWithFallback, it will not access fallback entries unless it's
    // explicitly part of the keypath.
    let entry = cacheMap;
    let remainingKeys = keys;
    let key = null;
    while(true){
        const previousKey = key;
        if (remainingKeys !== null) {
            key = remainingKeys.value;
            remainingKeys = remainingKeys.parent;
        } else if (isRevalidation && previousKey !== Revalidation) {
            // During a revalidation, we append an internal "Revalidation" key to
            // the end of the keypath. The "normal" entry is its parent.
            // However, if the parent entry is currently empty, we don't need to store
            // this as a revalidation entry. Just insert the revalidation into the
            // normal slot.
            if (entry.value === null) {
                return entry;
            }
            // Otheriwse, create a child entry.
            key = Revalidation;
        } else {
            break;
        }
        let map = entry.map;
        if (map !== null) {
            const existingEntry = map.get(key);
            if (existingEntry !== undefined) {
                // Found a match. Keep going.
                entry = existingEntry;
                continue;
            }
        } else {
            map = new Map();
            entry.map = map;
        }
        // No entry exists yet at this level. Create a new one.
        const newEntry = {
            parent: entry,
            key,
            value: null,
            map: null,
            // LRU-related fields
            prev: null,
            next: null,
            size: 0
        };
        map.set(key, newEntry);
        entry = newEntry;
    }
    return entry;
}
function getFromCacheMap(now, currentCacheVersion, rootEntry, keys, isRevalidation) {
    const entry = getEntryWithFallbackImpl(now, currentCacheVersion, rootEntry, keys, isRevalidation, 0);
    if (entry === null || entry.value === null) {
        return null;
    }
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    return entry.value;
}
function isValueExpired(now, currentCacheVersion, value) {
    return value.staleAt <= now || value.version < currentCacheVersion;
}
function lazilyEvictIfNeeded(now, currentCacheVersion, entry) {
    // We have a matching entry, but before we can return it, we need to check if
    // it's still fresh. Otherwise it should be treated the same as a cache miss.
    if (entry.value === null) {
        // This entry has no value, so there's nothing to evict.
        return entry;
    }
    const value = entry.value;
    if (isValueExpired(now, currentCacheVersion, value)) {
        // The value expired. Lazily evict it from the cache, and return null. This
        // is conceptually the same as a cache miss.
        deleteMapEntry(entry);
        return null;
    }
    // The matched entry has not expired. Return it.
    return entry;
}
function getEntryWithFallbackImpl(now, currentCacheVersion, entry, keys, isRevalidation, previousKey) {
    // This is similar to getExactEntry, but if an exact match is not found for
    // a key, it will return the fallback entry instead. This is recursive at
    // every level, e.g. an entry with keypath [a, Fallback, c, Fallback] is
    // valid match for [a, b, c, d].
    //
    // It will return the most specific match available.
    let key;
    let remainingKeys;
    if (keys !== null) {
        key = keys.value;
        remainingKeys = keys.parent;
    } else if (isRevalidation && previousKey !== Revalidation) {
        // During a revalidation, we append an internal "Revalidation" key to
        // the end of the keypath.
        key = Revalidation;
        remainingKeys = null;
    } else {
        // There are no more keys. This is the terminal entry.
        // TODO: When performing a lookup during a navigation, as opposed to a
        // prefetch, we may want to skip entries that are Pending if there's also
        // a Fulfilled fallback entry. Tricky to say, though, since if it's
        // already pending, it's likely to stream in soon. Maybe we could do this
        // just on slow connections and offline mode.
        return lazilyEvictIfNeeded(now, currentCacheVersion, entry);
    }
    const map = entry.map;
    if (map !== null) {
        const existingEntry = map.get(key);
        if (existingEntry !== undefined) {
            // Found an exact match for this key. Keep searching.
            const result = getEntryWithFallbackImpl(now, currentCacheVersion, existingEntry, remainingKeys, isRevalidation, key);
            if (result !== null) {
                return result;
            }
        }
        // No match found for this key. Check if there's a fallback.
        const fallbackEntry = map.get(Fallback);
        if (fallbackEntry !== undefined) {
            // Found a fallback for this key. Keep searching.
            return getEntryWithFallbackImpl(now, currentCacheVersion, fallbackEntry, remainingKeys, isRevalidation, key);
        }
    }
    return null;
}
function setInCacheMap(cacheMap, keys, value, isRevalidation) {
    // Add a value to the map at the given keypath. If the value is already
    // part of the map, it's removed from its previous keypath. (NOTE: This is
    // unlike a regular JS map, but the behavior is intentional.)
    const entry = getOrInitialize(cacheMap, keys, isRevalidation);
    setMapEntryValue(entry, value);
    // This is an LRU access. Move the entry to the front of the list.
    (0, _lru.lruPut)(entry);
    (0, _lru.updateLruSize)(entry, value.size);
}
function setMapEntryValue(entry, value) {
    if (entry.value !== null) {
        // There's already a value at the given keypath. Disconnect the old value
        // from the map. We're not calling `deleteMapEntry` here because the
        // entry itself is still in the map. We just want to overwrite its value.
        dropRef(entry.value);
        entry.value = null;
    }
    // This value may already be in the map at a different keypath.
    // Grab a reference before we overwrite it.
    const oldEntry = value.ref;
    entry.value = value;
    value.ref = entry;
    (0, _lru.updateLruSize)(entry, value.size);
    if (oldEntry !== null && oldEntry !== entry && oldEntry.value === value) {
        // This value is already in the map at a different keypath in the map.
        // Values only exist at a single keypath at a time. Remove it from the
        // previous keypath.
        //
        // Note that only the internal map entry is garbage collected; we don't
        // call `dropRef` here because it's still in the map, just
        // at a new keypath (the one we just set, above).
        deleteMapEntry(oldEntry);
    }
}
function deleteFromCacheMap(value) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    dropRef(value);
    deleteMapEntry(entry);
}
function dropRef(value) {
    // Drop the value from the map by setting its `ref` backpointer to
    // null. This is a separate operation from `deleteMapEntry` because when
    // re-keying a value we need to be able to delete the old, internal map
    // entry without garbage collecting the value itself.
    value.ref = null;
}
function deleteMapEntry(entry) {
    // Delete the entry from the cache.
    entry.value = null;
    (0, _lru.deleteFromLru)(entry);
    // Check if we can garbage collect the entry.
    const map = entry.map;
    if (map === null) {
        // Since this entry has no value, and also no child entries, we can
        // garbage collect it. Remove it from its parent, and keep garbage
        // collecting the parents until we reach a non-empty entry.
        let parent = entry.parent;
        let key = entry.key;
        while(parent !== null){
            const parentMap = parent.map;
            if (parentMap !== null) {
                parentMap.delete(key);
                if (parentMap.size === 0) {
                    // We just removed the last entry in the parent map.
                    parent.map = null;
                    if (parent.value === null) {
                        // The parent node has no child entries, nor does it have a value
                        // on itself. It can be garbage collected. Keep going.
                        key = parent.key;
                        parent = parent.parent;
                        continue;
                    }
                }
            }
            break;
        }
    } else {
        // Check if there's a revalidating entry. If so, promote it to a
        // "normal" entry, since the normal one was just deleted.
        const revalidatingEntry = map.get(Revalidation);
        if (revalidatingEntry !== undefined && revalidatingEntry.value !== null) {
            setMapEntryValue(entry, revalidatingEntry.value);
        }
    }
}
function setSizeInCacheMap(value, size) {
    const entry = value.ref;
    if (entry === null) {
        // This value is not a member of any map.
        return;
    }
    // Except during initialization (when the size is set to 0), this is the only
    // place the `size` field should be updated, to ensure it's in sync with the
    // the LRU.
    value.size = size;
    (0, _lru.updateLruSize)(entry, size);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    appendLayoutVaryPath: null,
    clonePageVaryPathWithNewSearchParams: null,
    finalizeLayoutVaryPath: null,
    finalizeMetadataVaryPath: null,
    finalizePageVaryPath: null,
    getFulfilledRouteVaryPath: null,
    getFulfilledSegmentVaryPath: null,
    getPartialLayoutVaryPath: null,
    getPartialPageVaryPath: null,
    getRenderedSearchFromVaryPath: null,
    getRouteVaryPath: null,
    getSegmentVaryPathForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendLayoutVaryPath: function() {
        return appendLayoutVaryPath;
    },
    clonePageVaryPathWithNewSearchParams: function() {
        return clonePageVaryPathWithNewSearchParams;
    },
    finalizeLayoutVaryPath: function() {
        return finalizeLayoutVaryPath;
    },
    finalizeMetadataVaryPath: function() {
        return finalizeMetadataVaryPath;
    },
    finalizePageVaryPath: function() {
        return finalizePageVaryPath;
    },
    getFulfilledRouteVaryPath: function() {
        return getFulfilledRouteVaryPath;
    },
    getFulfilledSegmentVaryPath: function() {
        return getFulfilledSegmentVaryPath;
    },
    getPartialLayoutVaryPath: function() {
        return getPartialLayoutVaryPath;
    },
    getPartialPageVaryPath: function() {
        return getPartialPageVaryPath;
    },
    getRenderedSearchFromVaryPath: function() {
        return getRenderedSearchFromVaryPath;
    },
    getRouteVaryPath: function() {
        return getRouteVaryPath;
    },
    getSegmentVaryPathForRequest: function() {
        return getSegmentVaryPathForRequest;
    }
});
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
function getRouteVaryPath(pathname, search, nextUrl) {
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        id: null,
        value: pathname,
        parent: {
            id: '?',
            value: search,
            parent: {
                id: null,
                value: nextUrl,
                parent: null
            }
        }
    };
    return varyPath;
}
function getFulfilledRouteVaryPath(pathname, search, nextUrl, couldBeIntercepted) {
    // This is called when a route's data is fulfilled. The cache entry will be
    // re-keyed based on which inputs the response varies by.
    // requestKey -> searchParams -> nextUrl
    const varyPath = {
        id: null,
        value: pathname,
        parent: {
            id: '?',
            value: search,
            parent: {
                id: null,
                value: couldBeIntercepted ? nextUrl : _cachemap.Fallback,
                parent: null
            }
        }
    };
    return varyPath;
}
function appendLayoutVaryPath(parentPath, cacheKey, paramName) {
    const varyPathPart = {
        id: paramName,
        value: cacheKey,
        parent: parentPath
    };
    return varyPathPart;
}
function finalizeLayoutVaryPath(requestKey, varyPath) {
    const layoutVaryPath = {
        id: null,
        value: requestKey,
        parent: varyPath
    };
    return layoutVaryPath;
}
function getPartialLayoutVaryPath(finalizedVaryPath) {
    // This is the inverse of finalizeLayoutVaryPath.
    return finalizedVaryPath.parent;
}
function finalizePageVaryPath(requestKey, renderedSearch, varyPath) {
    // Unlike layouts, a page segment's vary path also includes the search string.
    // requestKey -> searchParams -> pathParams
    const pageVaryPath = {
        id: null,
        value: requestKey,
        parent: {
            id: '?',
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getPartialPageVaryPath(finalizedVaryPath) {
    // This is the inverse of finalizePageVaryPath.
    return finalizedVaryPath.parent.parent;
}
function finalizeMetadataVaryPath(pageRequestKey, renderedSearch, varyPath) {
    // The metadata "segment" is not a real segment because it doesn't exist in
    // the normal structure of the route tree, but in terms of caching, it
    // behaves like a page segment because it varies by all the same params as
    // a page.
    //
    // To keep the protocol for querying the server simple, the request key for
    // the metadata does not include any path information. It's unnecessary from
    // the server's perspective, because unlike page segments, there's only one
    // metadata response per URL, i.e. there's no need to distinguish multiple
    // parallel pages.
    //
    // However, this means the metadata request key is insufficient for
    // caching the the metadata in the client cache, because on the client we
    // use the request key to distinguish the metadata entry from all other
    // page's metadata entries.
    //
    // So instead we create a simulated request key based on the page segment.
    // Conceptually this is equivalent to the request key the server would have
    // assigned the metadata segment if it treated it as part of the actual
    // route structure.
    // If there are multiple parallel pages, we use whichever is the first one.
    // This is fine because the only difference between request keys for
    // different parallel pages are things like route groups and parallel
    // route slots. As long as it's always the same one, it doesn't matter.
    const pageVaryPath = {
        id: null,
        // Append the actual metadata request key to the page request key. Note
        // that we're not using a separate vary path part; it's unnecessary because
        // these are not conceptually separate inputs.
        value: pageRequestKey + _segmentvalueencoding.HEAD_REQUEST_KEY,
        parent: {
            id: '?',
            value: renderedSearch,
            parent: varyPath
        }
    };
    return pageVaryPath;
}
function getSegmentVaryPathForRequest(fetchStrategy, tree) {
    // This is used for storing pending requests in the cache. We want to choose
    // the most generic vary path based on the strategy used to fetch it, i.e.
    // static/PPR versus runtime prefetching, so that it can be reused as much
    // as possible.
    //
    // We may be able to re-key the response to something even more generic once
    // we receive it — for example, if the server tells us that the response
    // doesn't vary on a particular param — but even before we send the request,
    // we know some params are reusable based on the fetch strategy alone. For
    // example, a static prefetch will never vary on search params.
    //
    // The original vary path with all the params filled in is stored on the
    // route tree object. We will clone this one to create a new vary path
    // where certain params are replaced with Fallback.
    //
    // This result of this function is not stored anywhere. It's only used to
    // access the cache a single time.
    //
    // TODO: Rather than create a new list object just to access the cache, the
    // plan is to add the concept of a "vary mask". This will represent all the
    // params that can be treated as Fallback. (Or perhaps the inverse.)
    const originalVaryPath = tree.varyPath;
    // Only page segments (and the special "metadata" segment, which is treated
    // like a page segment for the purposes of caching) may contain search
    // params. There's no reason to include them in the vary path otherwise.
    if (tree.isPage) {
        // Only a runtime prefetch will include search params in the vary path.
        // Static prefetches never include search params, so they can be reused
        // across all possible search param values.
        const doesVaryOnSearchParams = fetchStrategy === _types.FetchStrategy.Full || fetchStrategy === _types.FetchStrategy.PPRRuntime;
        if (!doesVaryOnSearchParams) {
            // The response from the the server will not vary on search params. Clone
            // the end of the original vary path to replace the search params
            // with Fallback.
            //
            // requestKey -> searchParams -> pathParams
            //               ^ This part gets replaced with Fallback
            const searchParamsVaryPath = originalVaryPath.parent;
            const pathParamsVaryPath = searchParamsVaryPath.parent;
            const patchedVaryPath = {
                id: null,
                value: originalVaryPath.value,
                parent: {
                    id: '?',
                    value: _cachemap.Fallback,
                    parent: pathParamsVaryPath
                }
            };
            return patchedVaryPath;
        }
    }
    // The request does vary on search params. We don't need to modify anything.
    return originalVaryPath;
}
function clonePageVaryPathWithNewSearchParams(originalVaryPath, newSearch) {
    // requestKey -> searchParams -> pathParams
    //               ^ This part gets replaced with newSearch
    const searchParamsVaryPath = originalVaryPath.parent;
    const clonedVaryPath = {
        id: null,
        value: originalVaryPath.value,
        parent: {
            id: '?',
            value: newSearch,
            parent: searchParamsVaryPath.parent
        }
    };
    return clonedVaryPath;
}
function getRenderedSearchFromVaryPath(varyPath) {
    const searchParams = varyPath.parent.value;
    return typeof searchParams === 'string' ? searchParams : null;
}
function getFulfilledSegmentVaryPath(original, varyParams) {
    // Re-keys a segment's vary path based on which params the segment actually
    // depends on. Params that are NOT in the varyParams set are replaced with
    // Fallback, allowing the cache entry to be reused across different values of
    // those params.
    // This is called when a segment is fulfilled with data from the server. The
    // varyParams set comes from the server and indicates which params were
    // accessed during rendering.
    const clone = {
        id: original.id,
        // If the id is null, this node is not a param (e.g., it's a request key).
        // If the id is in the varyParams set, keep the original value.
        // Otherwise, replace with Fallback to make it reusable.
        value: original.id === null || varyParams.has(original.id) ? original.value : _cachemap.Fallback,
        parent: original.parent === null ? null : getFulfilledSegmentVaryPath(original.parent, varyParams)
    };
    return clone;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Optimistic Routing (Known Routes)
 *
 * This module enables the client to predict route structure for URLs that
 * haven't been prefetched yet, based on previously learned route patterns.
 * When successful, this allows skipping the route tree prefetch request
 * entirely.
 *
 * The core idea is that many URLs map to the same route structure. For example,
 * /blog/post-1 and /blog/post-2 both resolve to /blog/[slug]. Once we've
 * prefetched one, we can predict the structure of the other.
 *
 * However, we can't always make this prediction. Static siblings (like
 * /blog/featured alongside /blog/[slug]) have different route structures.
 * When we learn a dynamic route, we also learn its static siblings so we
 * know when NOT to apply the prediction.
 *
 * Main entry points:
 *
 * 1. discoverKnownRoute: Called after receiving a route tree from the server.
 *    Traverses the route tree, compares URL parts to segments, and populates
 *    the known route tree if they match. Routes are always inserted into the
 *    cache.
 *
 * 2. matchKnownRoute: Called when looking up a route with no cache entry.
 *    Matches the candidate URL against learned patterns. Returns a synthetic
 *    cache entry if successful, or null to fall back to server resolution.
 *
 * Rewrite detection happens during traversal: if a URL path part doesn't match
 * the corresponding route segment, we stop populating the known route tree
 * (since the mapping is incorrect) but still insert the route into the cache.
 *
 * The known route tree is append-only with no eviction. Route patterns are
 * derived from the filesystem, so they don't become stale within a session.
 * Cache invalidation on deploy clears everything anyway.
 *
 * Current limitations (deopt to server resolution):
 * - Rewrites: Detected during traversal (tree not populated, but route cached)
 * - Intercepted routes: The route tree varies by referrer (Next-Url header),
 *   so we can't predict the correct structure from the URL alone. Patterns are
 *   still stored during discovery (so the trie stays populated for non-
 *   intercepted siblings), but matching bails out when the pattern is marked
 *   as interceptable.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    discoverKnownRoute: null,
    matchKnownRoute: null,
    resetKnownRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    discoverKnownRoute: function() {
        return discoverKnownRoute;
    },
    matchKnownRoute: function() {
        return matchKnownRoute;
    },
    resetKnownRoutes: function() {
        return resetKnownRoutes;
    }
});
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)");
function createEmptyPart() {
    return {
        staticChildren: null,
        dynamicChild: null,
        dynamicChildParamName: null,
        dynamicChildParamType: null,
        pattern: null
    };
}
// The root of the known route tree.
let knownRouteTreeRoot = createEmptyPart();
function discoverKnownRoute(now, pathname, nextUrl, pendingEntry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite) {
    const tree = routeTree;
    const pathnameParts = pathname.split('/').filter((p)=>p !== '');
    const firstPart = pathnameParts.length > 0 ? pathnameParts[0] : null;
    const remainingParts = pathnameParts.length > 0 ? pathnameParts.slice(1) : [];
    if (pendingEntry !== null) {
        // Fulfill the pending entry first
        const fulfilledEntry = (0, _cache.fulfillRouteCacheEntry)(now, pendingEntry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
        if (hasDynamicRewrite) {
            fulfilledEntry.hasDynamicRewrite = true;
        }
        // Populate the known route tree (handles rewrite detection internally).
        // The entry is already in the cache; this just stores it as a pattern
        // if the URL matches the route structure.
        discoverKnownRoutePart(knownRouteTreeRoot, tree, firstPart, remainingParts, fulfilledEntry, now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
        return fulfilledEntry;
    }
    // No pending entry - discoverKnownRoutePart will create one and insert it
    // into the cache, or return an existing pattern if one exists.
    return discoverKnownRoutePart(knownRouteTreeRoot, tree, firstPart, remainingParts, null, now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
}
/**
 * Gets or creates the dynamic child node for a KnownRoutePart.
 * A node can have at most one dynamic child (you can't have both [slug] and
 * [id] at the same route level), so we either return existing or create new.
 */ function discoverDynamicChild(part, paramName, paramType) {
    if (part.dynamicChild !== null) {
        return part.dynamicChild;
    }
    const newChild = createEmptyPart();
    // Type assertion needed because we're converting from "without" to "with"
    // dynamic child variant.
    const mutablePart = part;
    mutablePart.dynamicChild = newChild;
    mutablePart.dynamicChildParamName = paramName;
    mutablePart.dynamicChildParamType = paramType;
    return newChild;
}
/**
 * Recursive workhorse for discoverKnownRoute.
 *
 * Walks the route tree and URL parts in parallel, building out the known
 * route tree as it goes. At each step:
 * 1. Determines if the current segment appears in the URL (dynamic/static)
 * 2. Validates URL matches route structure (detects rewrites)
 * 3. Creates/updates the corresponding KnownRoutePart node
 * 4. Records static siblings for future matching
 * 5. Recurses into child slots (parallel routes)
 *
 * If a URL/route mismatch is detected (rewrite), we stop building the known
 * route tree but still cache the route entry for direct lookup.
 */ function discoverKnownRoutePart(parentKnownRoutePart, routeTree, urlPart, remainingParts, existingEntry, now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite) {
    const segment = routeTree.segment;
    let segmentAppearsInURL;
    let paramName = null;
    let paramType = null;
    let staticSiblings = null;
    if (typeof segment === 'string') {
        segmentAppearsInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(segment);
    } else {
        // Dynamic segment tuple: [paramName, paramCacheKey, paramType, staticSiblings]
        paramName = segment[0];
        paramType = segment[2];
        staticSiblings = segment[3];
        segmentAppearsInURL = true;
    }
    let knownRoutePart = parentKnownRoutePart;
    let nextUrlPart = urlPart;
    let nextRemainingParts = remainingParts;
    if (segmentAppearsInURL) {
        // Check for mismatch: if this is a static segment, the URL part must match
        if (paramName === null && urlPart !== segment) {
            // URL doesn't match route structure (likely a rewrite).
            // Don't populate the known route tree, just write the route into the
            // cache and return immediately.
            if (existingEntry !== null) {
                return existingEntry;
            }
            return (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
        }
        // URL matches route structure. Build the known route tree.
        if (paramName !== null && paramType !== null) {
            // Dynamic segment
            knownRoutePart = discoverDynamicChild(parentKnownRoutePart, paramName, paramType);
            // Record static siblings as placeholder parts.
            // IMPORTANT: We use the null vs Map distinction to track whether
            // siblings are known at this level:
            // - staticChildren: null = siblings unknown (can't safely match dynamic)
            // - staticChildren: Map = siblings known (even if empty)
            // This matters in dev mode where webpack may not know all siblings yet.
            if (staticSiblings !== null) {
                // Siblings are known - ensure we have a Map (even if empty)
                if (parentKnownRoutePart.staticChildren === null) {
                    parentKnownRoutePart.staticChildren = new Map();
                }
                for (const sibling of staticSiblings){
                    if (!parentKnownRoutePart.staticChildren.has(sibling)) {
                        parentKnownRoutePart.staticChildren.set(sibling, createEmptyPart());
                    }
                }
            }
        } else {
            // Static segment
            if (parentKnownRoutePart.staticChildren === null) {
                parentKnownRoutePart.staticChildren = new Map();
            }
            let existingChild = parentKnownRoutePart.staticChildren.get(urlPart);
            if (existingChild === undefined) {
                existingChild = createEmptyPart();
                parentKnownRoutePart.staticChildren.set(urlPart, existingChild);
            }
            knownRoutePart = existingChild;
        }
        // Advance to next URL part
        nextUrlPart = remainingParts.length > 0 ? remainingParts[0] : null;
        nextRemainingParts = remainingParts.length > 0 ? remainingParts.slice(1) : [];
    }
    // else: Transparent segment (route group, __PAGE__, etc.)
    // Stay at the same known route part, don't advance URL parts
    // Recurse into child routes. A route tree can have multiple parallel routes
    // (e.g., @modal alongside children). Each parallel route is a separate
    // branch, but they all share the same URL - we just need to traverse all
    // branches to build out the known route tree.
    const slots = routeTree.slots;
    let resultFromChildren = null;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childRouteTree = slots[parallelRouteKey];
            // Skip branches with refreshState set - these were reused from a
            // different route (e.g., a "default" parallel slot) and don't represent
            // the actual route structure for this URL.
            if (childRouteTree.refreshState !== null) {
                continue;
            }
            const result = discoverKnownRoutePart(knownRoutePart, childRouteTree, nextUrlPart, nextRemainingParts, existingEntry, now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching, hasDynamicRewrite);
            // All parallel route branches share the same URL, so they should all
            // reach compatible leaf nodes. We capture any result.
            resultFromChildren = result;
        }
        if (resultFromChildren !== null) {
            return resultFromChildren;
        }
        // Defensive fallback: no children returned a result. This shouldn't happen
        // for valid route trees, but handle it gracefully.
        if (existingEntry !== null) {
            return existingEntry;
        }
        return (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    }
    // Reached a page node. Create/get the route cache entry and store as a
    // pattern. First, check if there's already a pattern for this route.
    if (knownRoutePart.pattern !== null) {
        // If this route has a dynamic rewrite, mark the existing pattern.
        if (hasDynamicRewrite) {
            knownRoutePart.pattern.hasDynamicRewrite = true;
        }
        return knownRoutePart.pattern;
    }
    // Get or create the entry
    let entry;
    if (existingEntry !== null) {
        // Already have a fulfilled entry, use it directly. It's already in the
        // route cache map.
        entry = existingEntry;
    } else {
        // Create the entry and insert it into the route cache map.
        entry = (0, _cache.writeRouteIntoCache)(now, pathname, nextUrl, fullTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    }
    if (hasDynamicRewrite) {
        entry.hasDynamicRewrite = true;
    }
    // Store as pattern
    knownRoutePart.pattern = entry;
    return entry;
}
function matchKnownRoute(pathname, search) {
    const pathnameParts = pathname.split('/').filter((p)=>p !== '');
    const resolvedParams = new Map();
    const match = matchKnownRoutePart(knownRouteTreeRoot, pathnameParts, 0, resolvedParams);
    if (match === null) {
        return null;
    }
    const matchedPart = match.part;
    const pattern = match.pattern;
    // If the pattern could be intercepted, we can't safely use it for prediction.
    // Interception routes resolve to different route trees depending on the
    // referrer (the Next-Url header), which means the same URL can map to
    // different page components depending on where the navigation originated.
    // Since the known route tree only stores a single pattern per URL shape, we
    // can't distinguish between the intercepted and non-intercepted cases, so we
    // bail out to server resolution.
    //
    // TODO: We could store interception behavior in the known route tree itself
    // (e.g., which segments use interception markers and what they resolve to).
    // With enough information embedded in the trie, we could match interception
    // routes entirely on the client without a server round-trip.
    if (pattern.couldBeIntercepted) {
        return null;
    }
    // "Reify" the pattern: clone the template tree with concrete param values.
    // This substitutes resolved params (e.g., slug: "hello") into dynamic
    // segments and recomputes vary paths for correct segment cache keying.
    const acc = {
        metadataVaryPath: null
    };
    const reifiedTree = reifyRouteTree(pattern.tree, resolvedParams, search, null, acc);
    // The metadata tree is a flat page node without the intermediate layout
    // structure. Clone it with the updated metadata vary path collected during
    // the main tree traversal.
    const metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        // This shouldn't be reachable for a valid route tree.
        return null;
    }
    const reifiedMetadata = (0, _cache.createMetadataRouteTree)(metadataVaryPath);
    // Create a synthetic (predicted) entry and store it as the new pattern.
    //
    // Why replace the pattern? We intentionally update the pattern with this
    // synthetic entry so that if our prediction was wrong (server returns a
    // different pathname due to dynamic rewrite), the entry gets marked with
    // hasDynamicRewrite. Future predictions for this route will see the flag
    // and bail out to server resolution instead of making the same mistake.
    const syntheticEntry = {
        canonicalUrl: pathname + search,
        status: _cache.EntryStatus.Fulfilled,
        blockedTasks: null,
        tree: reifiedTree,
        metadata: reifiedMetadata,
        couldBeIntercepted: pattern.couldBeIntercepted,
        supportsPerSegmentPrefetching: pattern.supportsPerSegmentPrefetching,
        hasDynamicRewrite: false,
        renderedSearch: search,
        ref: null,
        size: pattern.size,
        staleAt: pattern.staleAt,
        version: pattern.version
    };
    matchedPart.pattern = syntheticEntry;
    return syntheticEntry;
}
/**
 * Recursively matches a URL against the known route tree.
 *
 * Matching priority (most specific first):
 * 1. Static children - exact path segment match
 * 2. Dynamic child - [param], [...param], [[...param]]
 * 3. Direct pattern - when no more URL parts remain
 *
 * Collects resolved param values in resolvedParams as it traverses.
 * Returns null if no match found (caller should fall back to server).
 */ function matchKnownRoutePart(part, pathnameParts, partIndex, resolvedParams) {
    const urlPart = partIndex < pathnameParts.length ? pathnameParts[partIndex] : null;
    // If staticChildren is null, we don't know what static routes exist at this
    // level. This happens in webpack dev mode where routes are compiled
    // on-demand. We can't safely match a dynamicChild because the URL part might
    // be a static sibling we haven't discovered yet. Example: We know
    // /blog/[slug] exists, but haven't compiled /blog/featured. A request for
    // /blog/featured would incorrectly match /blog/[slug].
    if (part.staticChildren === null) {
        // The only safe match is a direct pattern when no URL parts remain.
        if (urlPart === null) {
            const pattern = part.pattern;
            if (pattern !== null && !pattern.hasDynamicRewrite) {
                return {
                    part,
                    pattern
                };
            }
        }
        return null;
    }
    // Static children take priority over dynamic. This ensures /blog/featured
    // matches its own route rather than /blog/[slug].
    if (urlPart !== null) {
        const staticChild = part.staticChildren.get(urlPart);
        if (staticChild !== undefined) {
            // Check if this is an "unknown" placeholder part. These are created when
            // we learn about static siblings (from the route tree's staticSiblings
            // field) but haven't prefetched them yet. We know the path exists but
            // don't know its structure, so we can't predict it.
            if (staticChild.pattern === null && staticChild.dynamicChild === null && staticChild.staticChildren === null) {
                // Bail out - server must resolve this route.
                return null;
            }
            const match = matchKnownRoutePart(staticChild, pathnameParts, partIndex + 1, resolvedParams);
            if (match !== null) {
                return match;
            }
            // Static child is a real node (not a placeholder) but its subtree
            // didn't match the remaining URL parts. This means the route exists
            // in the static subtree but hasn't been fully discovered yet. Do not
            // fall through to try the dynamic child — the static match is
            // authoritative. Bail out to server resolution.
            return null;
        }
    }
    // Try dynamic child
    if (part.dynamicChild !== null) {
        const dynamicPart = part.dynamicChild;
        const paramName = part.dynamicChildParamName;
        const paramType = part.dynamicChildParamType;
        const dynamicPattern = dynamicPart.pattern;
        switch(paramType){
            case 'c':
                // Required catch-all [...param]: consumes 1+ URL parts
                if (dynamicPattern !== null && !dynamicPattern.hasDynamicRewrite && urlPart !== null) {
                    resolvedParams.set(paramName, pathnameParts.slice(partIndex));
                    return {
                        part: dynamicPart,
                        pattern: dynamicPattern
                    };
                }
                break;
            case 'oc':
                // Optional catch-all [[...param]]: consumes 0+ URL parts
                if (dynamicPattern !== null && !dynamicPattern.hasDynamicRewrite) {
                    if (urlPart !== null) {
                        resolvedParams.set(paramName, pathnameParts.slice(partIndex));
                        return {
                            part: dynamicPart,
                            pattern: dynamicPattern
                        };
                    }
                    // urlPart is null - can match with zero parts, but a direct pattern
                    // (e.g., page.tsx alongside [[...param]]) takes precedence.
                    if (part.pattern === null || part.pattern.hasDynamicRewrite) {
                        resolvedParams.set(paramName, []);
                        return {
                            part: dynamicPart,
                            pattern: dynamicPattern
                        };
                    }
                }
                break;
            case 'd':
                // Regular dynamic [param]: consumes exactly 1 URL part.
                // Unlike catch-all which terminates here, regular dynamic must
                // continue recursing to find the leaf pattern.
                if (urlPart !== null) {
                    resolvedParams.set(paramName, urlPart);
                    return matchKnownRoutePart(dynamicPart, pathnameParts, partIndex + 1, resolvedParams);
                }
                break;
            // Intercepted routes use relative path markers like (.), (..), (...)
            // Their behavior depends on navigation context (soft vs hard nav),
            // so we can't predict them client-side. Defer to server.
            case 'ci(..)(..)':
            case 'ci(.)':
            case 'ci(..)':
            case 'ci(...)':
            case 'di(..)(..)':
            case 'di(.)':
            case 'di(..)':
            case 'di(...)':
                return null;
            default:
                paramType;
        }
    }
    // No children matched. If we've consumed all URL parts, check for a direct
    // pattern at this node (the route terminates here).
    if (urlPart === null) {
        const pattern = part.pattern;
        if (pattern !== null && !pattern.hasDynamicRewrite) {
            return {
                part,
                pattern
            };
        }
    }
    return null;
}
/**
 * "Reify" means to make concrete - we take an abstract pattern (the template
 * route tree) and produce a concrete instance with actual param values.
 *
 * This function clones a RouteTree, substituting dynamic segment values from
 * resolvedParams and computing new vary paths. The vary path encodes param
 * values so segment cache entries can be correctly keyed.
 *
 * Example: Pattern for /blog/[slug] with resolvedParams { slug: "hello" }
 * produces a tree where segment [slug] has cacheKey "hello".
 */ function reifyRouteTree(pattern, resolvedParams, search, parentPartialVaryPath, acc) {
    const originalSegment = pattern.segment;
    let newSegment = originalSegment;
    let partialVaryPath;
    if (typeof originalSegment !== 'string') {
        // Dynamic segment: compute new cache key and append to partial vary path
        const paramName = originalSegment[0];
        const paramType = originalSegment[2];
        const staticSiblings = originalSegment[3];
        const newValue = resolvedParams.get(paramName);
        if (newValue !== undefined) {
            const newCacheKey = Array.isArray(newValue) ? newValue.join('/') : newValue;
            newSegment = [
                paramName,
                newCacheKey,
                paramType,
                staticSiblings
            ];
            partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, newCacheKey, paramName);
        } else {
            // Param not found in resolvedParams - keep original and inherit partial
            // TODO: This should never happen. Bail out with null.
            partialVaryPath = parentPartialVaryPath;
        }
    } else {
        // Static segment: inherit partial vary path from parent
        partialVaryPath = parentPartialVaryPath;
    }
    // Recurse into children with the (possibly updated) partial vary path
    let newSlots = null;
    if (pattern.slots !== null) {
        newSlots = {};
        for(const key in pattern.slots){
            newSlots[key] = reifyRouteTree(pattern.slots[key], resolvedParams, search, partialVaryPath, acc);
        }
    }
    if (pattern.isPage) {
        // Page segment: finalize with search params
        const newVaryPath = (0, _varypath.finalizePageVaryPath)(pattern.requestKey, search, partialVaryPath);
        // Collect metadata vary path (first page wins, same as original algorithm)
        if (acc.metadataVaryPath === null) {
            acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(pattern.requestKey, search, partialVaryPath);
        }
        return {
            requestKey: pattern.requestKey,
            segment: newSegment,
            refreshState: pattern.refreshState,
            slots: newSlots,
            prefetchHints: pattern.prefetchHints,
            isPage: true,
            varyPath: newVaryPath
        };
    } else {
        // Layout segment: finalize without search params
        const newVaryPath = (0, _varypath.finalizeLayoutVaryPath)(pattern.requestKey, partialVaryPath);
        return {
            requestKey: pattern.requestKey,
            segment: newSegment,
            refreshState: pattern.refreshState,
            slots: newSlots,
            prefetchHints: pattern.prefetchHints,
            isPage: false,
            varyPath: newVaryPath
        };
    }
}
function resetKnownRoutes() {
    knownRouteTreeRoot = createEmptyPart();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Navigation lock for the Instant Navigation Testing API.
 *
 * Manages the in-memory lock (a promise) that gates dynamic data writes
 * during instant navigation captures, and owns all cookie state
 * transitions (pending → captured-MPA, pending → captured-SPA).
 *
 * External actors (Playwright, devtools) set [0] to start a lock scope
 * and delete the cookie to end one. Next.js writes captured values.
 * The CookieStore handler distinguishes them by value: pending = external,
 * captured = self-write (ignored).
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isNavigationLocked: null,
    startListeningForInstantNavigationCookie: null,
    transitionToCapturedSPA: null,
    updateCapturedSPAToTree: null,
    waitForNavigationLockIfActive: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNavigationLocked: function() {
        return isNavigationLocked;
    },
    startListeningForInstantNavigationCookie: function() {
        return startListeningForInstantNavigationCookie;
    },
    transitionToCapturedSPA: function() {
        return transitionToCapturedSPA;
    },
    updateCapturedSPAToTree: function() {
        return updateCapturedSPAToTree;
    },
    waitForNavigationLockIfActive: function() {
        return waitForNavigationLockIfActive;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
function parseCookieValue(raw) {
    try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length >= 3) {
            const rawState = parsed[2];
            return rawState === null ? 'mpa' : 'spa';
        }
    } catch  {}
    return 'pending';
}
function writeCookieValue(value) {
    if (typeof cookieStore === 'undefined') {
        return;
    }
    // Read the existing cookie to preserve its attributes (domain, path),
    // then write back with the new value. This updates the same cookie
    // entry that the external actor created, regardless of how it was
    // scoped.
    cookieStore.get(_approuterheaders.NEXT_INSTANT_TEST_COOKIE).then((existing)=>{
        if (existing) {
            const options = {
                name: _approuterheaders.NEXT_INSTANT_TEST_COOKIE,
                value: JSON.stringify(value),
                path: existing.path ?? '/'
            };
            if (existing.domain) {
                options.domain = existing.domain;
            }
            cookieStore.set(options);
        }
    });
}
let lockState = null;
function acquireLock() {
    if (lockState !== null) {
        return;
    }
    let resolve;
    const promise = new Promise((r)=>{
        resolve = r;
    });
    lockState = {
        promise,
        resolve: resolve
    };
}
function releaseLock() {
    if (lockState !== null) {
        lockState.resolve();
        lockState = null;
    }
}
function startListeningForInstantNavigationCookie() {
    if ("TURBOPACK compile-time truthy", 1) {
        // If the server served a static shell, this is an MPA page load
        // while the lock is held. Transition to captured-MPA and acquire.
        if (self.__next_instant_test) {
            if (typeof cookieStore !== 'undefined') {
                // If the cookie was already cleared during the MPA page
                // transition, reload to get the full dynamic page.
                cookieStore.get(_approuterheaders.NEXT_INSTANT_TEST_COOKIE).then((cookie)=>{
                    if (!cookie) {
                        window.location.reload();
                    }
                });
            }
            writeCookieValue([
                1,
                `c${Math.random()}`,
                null
            ]);
            acquireLock();
        }
        if (typeof cookieStore === 'undefined') {
            return;
        }
        cookieStore.addEventListener('change', (event)=>{
            for (const cookie of event.changed){
                if (cookie.name === _approuterheaders.NEXT_INSTANT_TEST_COOKIE) {
                    const state = parseCookieValue(cookie.value ?? '');
                    if (state !== 'pending') {
                        // Captured value — our own transition. Ignore.
                        return;
                    }
                    // Pending value — external actor starting a new lock scope.
                    if (lockState !== null) {
                        releaseLock();
                    }
                    acquireLock();
                    return;
                }
            }
            for (const cookie of event.deleted){
                if (cookie.name === _approuterheaders.NEXT_INSTANT_TEST_COOKIE) {
                    releaseLock();
                    (0, _useactionqueue.refreshOnInstantNavigationUnlock)();
                    return;
                }
            }
        });
    }
}
function transitionToCapturedSPA(fromTree, toTree) {
    if ("TURBOPACK compile-time truthy", 1) {
        writeCookieValue([
            1,
            `c${Math.random()}`,
            {
                from: fromTree,
                to: toTree
            }
        ]);
    }
}
function updateCapturedSPAToTree(fromTree, toTree) {
    if ("TURBOPACK compile-time truthy", 1) {
        writeCookieValue([
            1,
            `c${Math.random()}`,
            {
                from: fromTree,
                to: toTree
            }
        ]);
    }
}
function isNavigationLocked() {
    if ("TURBOPACK compile-time truthy", 1) {
        return lockState !== null;
    }
    //TURBOPACK unreachable
    ;
}
async function waitForNavigationLockIfActive() {
    if ("TURBOPACK compile-time truthy", 1) {
        if (lockState !== null) {
            await lockState.promise;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    FreshnessPolicy: null,
    createInitialCacheNodeForHydration: null,
    isDeferredRsc: null,
    spawnDynamicRequests: null,
    startPPRNavigation: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    FreshnessPolicy: function() {
        return FreshnessPolicy;
    },
    createInitialCacheNodeForHydration: function() {
        return createInitialCacheNodeForHydration;
    },
    isDeferredRsc: function() {
        return isDeferredRsc;
    },
    spawnDynamicRequests: function() {
        return spawnDynamicRequests;
    },
    startPPRNavigation: function() {
        return startPPRNavigation;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _isnavigatingtonewrootlayout = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/is-navigating-to-new-root-layout.js [app-ssr] (ecmascript)");
const _committedstate = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/reducers/committed-state.js [app-ssr] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _optimisticroutes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-ssr] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-ssr] (ecmascript)");
var FreshnessPolicy = /*#__PURE__*/ function(FreshnessPolicy) {
    FreshnessPolicy[FreshnessPolicy["Default"] = 0] = "Default";
    FreshnessPolicy[FreshnessPolicy["Hydration"] = 1] = "Hydration";
    FreshnessPolicy[FreshnessPolicy["HistoryTraversal"] = 2] = "HistoryTraversal";
    FreshnessPolicy[FreshnessPolicy["RefreshAll"] = 3] = "RefreshAll";
    FreshnessPolicy[FreshnessPolicy["HMRRefresh"] = 4] = "HMRRefresh";
    FreshnessPolicy[FreshnessPolicy["Gesture"] = 5] = "Gesture";
    return FreshnessPolicy;
}({});
const noop = ()=>{};
function createInitialCacheNodeForHydration(navigatedAt, initialTree, seedData, seedHead, seedDynamicStaleAt) {
    // Create the initial cache node tree, using the data embedded into the
    // HTML document.
    const accumulation = {
        separateRefreshUrls: null,
        scrollRef: null
    };
    const task = createCacheNodeOnNavigation(navigatedAt, initialTree, null, 1, seedData, seedHead, seedDynamicStaleAt, false, accumulation);
    return task;
}
function startPPRNavigation(navigatedAt, oldUrl, oldRenderedSearch, oldCacheNode, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, accumulation) {
    const didFindRootLayout = false;
    const parentNeedsDynamicRequest = false;
    const parentRefreshState = null;
    const oldRootRefreshState = {
        canonicalUrl: (0, _createhreffromurl.createHrefFromUrl)(oldUrl),
        renderedSearch: oldRenderedSearch
    };
    return updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode !== null ? oldCacheNode : undefined, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, didFindRootLayout, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest, oldRootRefreshState, parentRefreshState, accumulation);
}
function updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNode, oldRouterState, newRouteTree, newMetadataVaryPath, freshness, didFindRootLayout, seedData, seedHead, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest, oldRootRefreshState, parentRefreshState, accumulation) {
    // Check if this segment matches the one in the previous route.
    const oldSegment = oldRouterState[0];
    const newSegment = createSegmentFromRouteTree(newRouteTree);
    if (!(0, _matchsegments.matchSegment)(newSegment, oldSegment)) {
        // This segment does not match the previous route. We're now entering the
        // new part of the target route. Switch to the "create" path.
        if (// highest-level layout in a route tree is referred to as the "root"
        // layout.) This could mean that we're navigating between two different
        // root layouts. When this happens, we perform a full-page (MPA-style)
        // navigation.
        //
        // However, the algorithm for deciding where to start rendering a route
        // (i.e. the one performed in order to reach this function) is stricter
        // than the one used to detect a change in the root layout. So just
        // because we're re-rendering a segment outside of the root layout does
        // not mean we should trigger a full-page navigation.
        //
        // Specifically, we handle dynamic parameters differently: two segments
        // are considered the same even if their parameter values are different.
        //
        // Refer to isNavigatingToNewRootLayout for details.
        //
        // Note that we only have to perform this extra traversal if we didn't
        // already discover a root layout in the part of the tree that is
        // unchanged. We also only need to compare the subtree that is not
        // shared. In the common case, this branch is skipped completely.
        !didFindRootLayout && (0, _isnavigatingtonewrootlayout.isNavigatingToNewRootLayout)(oldRouterState, newRouteTree) || // The global Not Found route (app/global-not-found.tsx) is a special
        // case, because it acts like a root layout, but in the router tree, it
        // is rendered in the same position as app/layout.tsx.
        //
        // Any navigation to the global Not Found route should trigger a
        // full-page navigation.
        //
        // TODO: We should probably model this by changing the key of the root
        // segment when this happens. Then the root layout check would work
        // as expected, without a special case.
        newSegment === _segment.NOT_FOUND_SEGMENT_KEY) {
            return null;
        }
        return createCacheNodeOnNavigation(navigatedAt, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest, accumulation);
    }
    const newSlots = newRouteTree.slots;
    const oldRouterStateChildren = oldRouterState[1];
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    // We're currently traversing the part of the tree that was also part of
    // the previous route. If we discover a root layout, then we don't need to
    // trigger an MPA navigation.
    const childDidFindRootLayout = didFindRootLayout || (newRouteTree.prefetchHints & _approutertypes.PrefetchHint.IsRootLayout) !== 0;
    let shouldRefreshDynamicData = false;
    switch(freshness){
        case 0:
        case 2:
        case 1:
        case 5:
            shouldRefreshDynamicData = false;
            break;
        case 3:
        case 4:
            shouldRefreshDynamicData = true;
            break;
        default:
            freshness;
            break;
    }
    // TODO: We're not consistent about how we do this check. Some places
    // check if the segment starts with PAGE_SEGMENT_KEY, but most seem to
    // check if there any any children, which is why I'm doing it here. We
    // should probably encode an empty children set as `null` though. Either
    // way, we should update all the checks to be consistent.
    const isLeafSegment = newSlots === null;
    // Get the data for this segment. Since it was part of the previous route,
    // usually we just clone the data from the old CacheNode. However, during a
    // refresh or a revalidation, there won't be any existing CacheNode. So we
    // may need to consult the prefetch cache, like we would for a new segment.
    let newCacheNode;
    let needsDynamicRequest;
    if (oldCacheNode !== undefined && !shouldRefreshDynamicData && // During a same-page navigation, we always refetch the page segments
    !(isLeafSegment && isSamePageNavigation)) {
        // Reuse the existing CacheNode
        const dropPrefetchRsc = false;
        newCacheNode = reuseSharedCacheNode(dropPrefetchRsc, oldCacheNode);
        needsDynamicRequest = false;
    } else {
        // If this is part of a refresh, ignore the existing CacheNode and create a
        // new one.
        const seedRsc = seedData !== null ? seedData[0] : null;
        const result = createCacheNodeForSegment(navigatedAt, newRouteTree, seedRsc, newMetadataVaryPath, seedHead, freshness, seedDynamicStaleAt);
        newCacheNode = result.cacheNode;
        needsDynamicRequest = result.needsDynamicRequest;
        // Carry forward the old node's scrollRef. This preserves scroll
        // intent when a prior navigation's cache node is replaced by a
        // refresh before the scroll handler has had a chance to fire —
        // e.g. when router.push() and router.refresh() are called in the
        // same startTransition batch.
        if (oldCacheNode !== undefined) {
            newCacheNode.scrollRef = oldCacheNode.scrollRef;
        }
    }
    // During a refresh navigation, there's a special case that happens when
    // entering a "default" slot. The default slot may not be part of the
    // current route; it may have been reused from an older route. If so,
    // we need to fetch its data from the old route's URL rather than current
    // route's URL. Keep track of this as we traverse the tree.
    const maybeRefreshState = newRouteTree.refreshState;
    const refreshState = maybeRefreshState !== undefined && maybeRefreshState !== null ? maybeRefreshState : parentRefreshState;
    // If this segment itself needs to fetch new data from the server, then by
    // definition it is being refreshed. Track its refresh URL so we know which
    // URL to request the data from.
    if (needsDynamicRequest && refreshState !== null) {
        accumulateRefreshUrl(accumulation, refreshState);
    }
    // As we diff the trees, we may sometimes modify (copy-on-write, not mutate)
    // the Route Tree that was returned by the server — for example, in the case
    // of default parallel routes, we preserve the currently active segment. To
    // avoid mutating the original tree, we clone the router state children along
    // the return path.
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    // Most navigations require a request to fetch additional data from the
    // server, either because the data was not already prefetched, or because the
    // target route contains dynamic data that cannot be prefetched.
    //
    // However, if the target route is fully static, and it's already completely
    // loaded into the segment cache, then we can skip the server request.
    //
    // This starts off as `false`, and is set to `true` if any of the child
    // routes requires a dynamic request.
    let childNeedsDynamicRequest = false;
    // As we traverse the children, we'll construct a FlightRouterState that can
    // be sent to the server to request the dynamic data. If it turns out that
    // nothing in the subtree is dynamic (i.e. childNeedsDynamicRequest is false
    // at the end), then this will be discarded.
    // TODO: We can probably optimize the format of this data structure to only
    // include paths that are dynamic. Instead of reusing the
    // FlightRouterState type.
    let dynamicRequestTreeChildren = {};
    let newCacheNodeSlots = null;
    if (newSlots !== null) {
        const oldCacheNodeSlots = oldCacheNode !== undefined ? oldCacheNode.slots : null;
        newCacheNode.slots = newCacheNodeSlots = {};
        taskChildren = new Map();
        for(let parallelRouteKey in newSlots){
            let newRouteTreeChild = newSlots[parallelRouteKey];
            const oldRouterStateChild = oldRouterStateChildren[parallelRouteKey];
            if (oldRouterStateChild === undefined) {
                // This should never happen, but if it does, it suggests a malformed
                // server response. Trigger a full-page navigation.
                return null;
            }
            let seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
            const oldSegmentChild = oldRouterStateChild[0];
            let newSegmentChild = createSegmentFromRouteTree(newRouteTreeChild);
            let seedHeadChild = seedHead;
            if (// was stashed in the history entry as-is.
            freshness !== 2 && newSegmentChild === _segment.DEFAULT_SEGMENT_KEY && oldSegmentChild !== _segment.DEFAULT_SEGMENT_KEY) {
                // This is a "default" segment. These are never sent by the server during
                // a soft navigation; instead, the client reuses whatever segment was
                // already active in that slot on the previous route.
                newRouteTreeChild = reuseActiveSegmentInDefaultSlot(newRouteTree, parallelRouteKey, oldRootRefreshState, oldRouterStateChild);
                newSegmentChild = createSegmentFromRouteTree(newRouteTreeChild);
                // Since we're switching to a different route tree, these are no
                // longer valid, because they correspond to the outer tree.
                seedDataChild = null;
                seedHeadChild = null;
            }
            const oldCacheNodeChild = oldCacheNodeSlots !== null ? oldCacheNodeSlots[parallelRouteKey] : undefined;
            const taskChild = updateCacheNodeOnNavigation(navigatedAt, oldUrl, oldCacheNodeChild, oldRouterStateChild, newRouteTreeChild, newMetadataVaryPath, freshness, childDidFindRootLayout, seedDataChild ?? null, seedHeadChild, seedDynamicStaleAt, isSamePageNavigation, parentNeedsDynamicRequest || needsDynamicRequest, oldRootRefreshState, refreshState, accumulation);
            if (taskChild === null) {
                // One of the child tasks discovered a change to the root layout.
                // Immediately unwind from this recursive traversal. This will trigger a
                // full-page navigation.
                return null;
            }
            // Recursively propagate up the child tasks.
            taskChildren.set(parallelRouteKey, taskChild);
            newCacheNodeSlots[parallelRouteKey] = taskChild.node;
            // The child tree's route state may be different from the prefetched
            // route sent by the server. We need to clone it as we traverse back up
            // the tree.
            const taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                // Something in the child tree is dynamic.
                childNeedsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        }
    }
    const newFlightRouterState = [
        createSegmentFromRouteTree(newRouteTree),
        patchedRouterStateChildren,
        refreshState !== null ? [
            refreshState.canonicalUrl,
            refreshState.renderedSearch
        ] : null,
        null,
        newRouteTree.prefetchHints
    ];
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: newFlightRouterState,
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newFlightRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        refreshState,
        children: taskChildren
    };
}
/**
 * Assigns a ScrollRef to a new leaf CacheNode so the scroll handler
 * knows to scroll to it after navigation. All leaves in the same
 * navigation share the same ScrollRef — the first segment to scroll
 * consumes it, preventing others from also scrolling.
 *
 * This is only called inside `createCacheNodeOnNavigation`, which only
 * runs when segments diverge from the previous route. So for a refresh
 * where the route structure stays the same, segments match, the update
 * path is taken, and this function is never called — no scroll ref is
 * assigned. A scroll ref is only assigned when the route actually
 * changed (e.g. a redirect, or a dynamic condition on the server that
 * produces a different route).
 *
 * Skipped during hydration (initial render should not scroll) and
 * history traversal (scroll restoration is handled separately).
 */ function accumulateScrollRef(freshness, cacheNode, accumulation) {
    switch(freshness){
        case 0:
        case 5:
        case 3:
        case 4:
            if (accumulation.scrollRef === null) {
                accumulation.scrollRef = {
                    current: true
                };
            }
            cacheNode.scrollRef = accumulation.scrollRef;
            break;
        case 1:
            break;
        case 2:
            break;
        default:
            freshness;
            break;
    }
}
function createCacheNodeOnNavigation(navigatedAt, newRouteTree, newMetadataVaryPath, freshness, seedData, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest, accumulation) {
    // Same traversal as updateCacheNodeNavigation, but simpler. We switch to this
    // path once we reach the part of the tree that was not in the previous route.
    // We don't need to diff against the old tree, we just need to create a new
    // one. We also don't need to worry about any refresh-related logic.
    //
    // For the most part, this is a subset of updateCacheNodeOnNavigation, so any
    // change that happens in this function likely needs to be applied to that
    // one, too. However there are some places where the behavior intentionally
    // diverges, which is why we keep them separate.
    const newSegment = createSegmentFromRouteTree(newRouteTree);
    const newSlots = newRouteTree.slots;
    const seedDataChildren = seedData !== null ? seedData[1] : null;
    const seedRsc = seedData !== null ? seedData[0] : null;
    const result = createCacheNodeForSegment(navigatedAt, newRouteTree, seedRsc, newMetadataVaryPath, seedHead, freshness, seedDynamicStaleAt);
    const newCacheNode = result.cacheNode;
    const needsDynamicRequest = result.needsDynamicRequest;
    const isLeafSegment = newSlots === null;
    if (isLeafSegment) {
        accumulateScrollRef(freshness, newCacheNode, accumulation);
    }
    let patchedRouterStateChildren = {};
    let taskChildren = null;
    let childNeedsDynamicRequest = false;
    let dynamicRequestTreeChildren = {};
    let newCacheNodeSlots = null;
    if (newSlots !== null) {
        newCacheNode.slots = newCacheNodeSlots = {};
        taskChildren = new Map();
        for(let parallelRouteKey in newSlots){
            const newRouteTreeChild = newSlots[parallelRouteKey];
            const seedDataChild = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
            const taskChild = createCacheNodeOnNavigation(navigatedAt, newRouteTreeChild, newMetadataVaryPath, freshness, seedDataChild ?? null, seedHead, seedDynamicStaleAt, parentNeedsDynamicRequest || needsDynamicRequest, accumulation);
            taskChildren.set(parallelRouteKey, taskChild);
            newCacheNodeSlots[parallelRouteKey] = taskChild.node;
            const taskChildRoute = taskChild.route;
            patchedRouterStateChildren[parallelRouteKey] = taskChildRoute;
            const dynamicRequestTreeChild = taskChild.dynamicRequestTree;
            if (dynamicRequestTreeChild !== null) {
                childNeedsDynamicRequest = true;
                dynamicRequestTreeChildren[parallelRouteKey] = dynamicRequestTreeChild;
            } else {
                dynamicRequestTreeChildren[parallelRouteKey] = taskChildRoute;
            }
        }
    }
    const newFlightRouterState = [
        newSegment,
        patchedRouterStateChildren,
        null,
        null,
        newRouteTree.prefetchHints
    ];
    return {
        status: needsDynamicRequest ? 0 : 1,
        route: newFlightRouterState,
        node: newCacheNode,
        dynamicRequestTree: createDynamicRequestTree(newFlightRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest),
        // This route is not part of the current tree, so there's no reason to
        // track the refresh URL.
        refreshState: null,
        children: taskChildren
    };
}
function createSegmentFromRouteTree(newRouteTree) {
    if (newRouteTree.isPage) {
        // In a dynamic server response, the server embeds the search params into
        // the segment key, but in a static one it's omitted. The client handles
        // this inconsistency by adding the search params back right at the end.
        //
        // TODO: The only thing this is used for is to create a cache key for
        // ChildSegmentMap. But we already track the `renderedSearch` everywhere as
        // part of the varyPath. The plan is get rid of ChildSegmentMap and
        // store the page data in a CacheMap using the varyPath, like we do
        // for prefetches. Then we can remove it from the segment key.
        //
        // As an incremental step, we can grab the search params from the varyPath.
        const renderedSearch = (0, _varypath.getRenderedSearchFromVaryPath)(newRouteTree.varyPath);
        if (renderedSearch === null) {
            return _segment.PAGE_SEGMENT_KEY;
        }
        // This is based on equivalent logic in addSearchParamsIfPageSegment, used
        // on the server.
        const stringifiedQuery = JSON.stringify(Object.fromEntries(new URLSearchParams(renderedSearch)));
        return stringifiedQuery !== '{}' ? _segment.PAGE_SEGMENT_KEY + '?' + stringifiedQuery : _segment.PAGE_SEGMENT_KEY;
    }
    return newRouteTree.segment;
}
function patchRouterStateWithNewChildren(baseRouterState, newChildren) {
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
function createDynamicRequestTree(newRouterState, dynamicRequestTreeChildren, needsDynamicRequest, childNeedsDynamicRequest, parentNeedsDynamicRequest) {
    // Create a FlightRouterState that instructs the server how to render the
    // requested segment.
    //
    // Or, if neither this segment nor any of the children require a new data,
    // then we return `null` to skip the request.
    let dynamicRequestTree = null;
    if (needsDynamicRequest) {
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
        // The "refetch" marker is set on the top-most segment that requires new
        // data. We can omit it if a parent was already marked.
        if (!parentNeedsDynamicRequest) {
            dynamicRequestTree[3] = 'refetch';
        }
    } else if (childNeedsDynamicRequest) {
        // This segment does not request new data, but at least one of its
        // children does.
        dynamicRequestTree = patchRouterStateWithNewChildren(newRouterState, dynamicRequestTreeChildren);
    } else {
        dynamicRequestTree = null;
    }
    return dynamicRequestTree;
}
function accumulateRefreshUrl(accumulation, refreshState) {
    // This is a refresh navigation, and we're inside a "default" slot that's
    // not part of the current route; it was reused from an older route. In
    // order to get fresh data for this reused route, we need to issue a
    // separate request using the old route's URL.
    //
    // Track these extra URLs in the accumulated result. Later, we'll construct
    // an appropriate request for each unique URL in the final set. The reason
    // we don't do it immediately here is so we can deduplicate multiple
    // instances of the same URL into a single request. See
    // listenForDynamicRequest for more details.
    const refreshUrl = refreshState.canonicalUrl;
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    if (separateRefreshUrls === null) {
        accumulation.separateRefreshUrls = new Set([
            refreshUrl
        ]);
    } else {
        separateRefreshUrls.add(refreshUrl);
    }
}
function reuseActiveSegmentInDefaultSlot(parentRouteTree, parallelRouteKey, oldRootRefreshState, oldRouterState) {
    // This is a "default" segment. These are never sent by the server during a
    // soft navigation; instead, the client reuses whatever segment was already
    // active in that slot on the previous route. This means if we later need to
    // refresh the segment, it will have to be refetched from the previous route's
    // URL. We store it in the Flight Router State.
    let reusedUrl;
    let reusedRenderedSearch;
    const oldRefreshState = oldRouterState[2];
    if (oldRefreshState !== undefined && oldRefreshState !== null) {
        // This segment was already reused from an even older route. Keep its
        // existing URL and refresh state.
        reusedUrl = oldRefreshState[0];
        reusedRenderedSearch = oldRefreshState[1];
    } else {
        // Since this route didn't already have a refresh state, it must have been
        // reachable from the root of the old route. So we use the refresh state
        // that represents the old route.
        reusedUrl = oldRootRefreshState.canonicalUrl;
        reusedRenderedSearch = oldRootRefreshState.renderedSearch;
    }
    const acc = {
        metadataVaryPath: null
    };
    const reusedRouteTree = (0, _cache.convertReusedFlightRouterStateToRouteTree)(parentRouteTree, parallelRouteKey, oldRouterState, reusedRenderedSearch, acc);
    reusedRouteTree.refreshState = {
        canonicalUrl: reusedUrl,
        renderedSearch: reusedRenderedSearch
    };
    return reusedRouteTree;
}
function reuseSharedCacheNode(dropPrefetchRsc, existingCacheNode) {
    // Clone the CacheNode that was already present in the previous tree.
    // Carry forward the scrollRef so scroll intent from a prior navigation
    // survives tree rebuilds (e.g. push + refresh in the same batch).
    return createCacheNode(existingCacheNode.rsc, dropPrefetchRsc ? null : existingCacheNode.prefetchRsc, existingCacheNode.head, dropPrefetchRsc ? null : existingCacheNode.prefetchHead, existingCacheNode.scrollRef);
}
function createCacheNodeForSegment(now, tree, seedRsc, metadataVaryPath, seedHead, freshness, dynamicStaleAt) {
    // Construct a new CacheNode using data from the BFCache, the client's
    // Segment Cache, or seeded from a server response.
    //
    // If there's a cache miss, or if we only have a partial hit, we'll render
    // the partial state immediately, and spawn a request to the server to fill
    // in the missing data.
    //
    // If the segment is fully cached on the client already, we can omit this
    // segment from the server request.
    //
    // If we already have a dynamic data response associated with this navigation,
    // as in the case of a Server Action-initiated redirect or refresh, we may
    // also be able to use that data without spawning a new request. (This is
    // referred to as the "seed" data.)
    const isPage = tree.isPage;
    // During certain kinds of navigations, we may be able to render from
    // the BFCache.
    switch(freshness){
        case 0:
            {
                // Check BFCache during regular navigations. The entry's staleAt
                // determines whether it's still fresh. This is used when
                // staleTimes.dynamic is configured globally or when a page exports
                // unstable_dynamicStaleTime for per-page control.
                const bfcacheEntry = (0, _bfcache.readFromBFCacheDuringRegularNavigation)(now, tree.varyPath);
                if (bfcacheEntry !== null) {
                    return {
                        cacheNode: createCacheNode(bfcacheEntry.rsc, bfcacheEntry.prefetchRsc, bfcacheEntry.head, bfcacheEntry.prefetchHead),
                        needsDynamicRequest: false
                    };
                }
                break;
            }
        case 1:
            {
                // This is not related to the BFCache but it is a special case.
                //
                // We should never spawn network requests during hydration. We must treat
                // the initial payload as authoritative, because the initial page load is
                // used as a last-ditch mechanism for recovering the app.
                //
                // This is also an important safety check because if this leaks into the
                // server rendering path (which theoretically it never should because the
                // server payload should be consistent), the server would hang because these
                // promises would never resolve.
                //
                // TODO: There is an existing case where the global "not found" boundary
                // triggers this path. But it does render correctly despite that. That's an
                // unusual render path so it's not surprising, but we should look into
                // modeling it in a more consistent way. See also the /_notFound special
                // case in updateCacheNodeOnNavigation.
                const rsc = seedRsc;
                const prefetchRsc = null;
                const head = isPage ? seedHead : null;
                const prefetchHead = null;
                (0, _bfcache.writeToBFCache)(now, tree.varyPath, rsc, prefetchRsc, head, prefetchHead, dynamicStaleAt);
                if (isPage && metadataVaryPath !== null) {
                    (0, _bfcache.writeHeadToBFCache)(now, metadataVaryPath, head, prefetchHead, dynamicStaleAt);
                }
                return {
                    cacheNode: createCacheNode(rsc, prefetchRsc, head, prefetchHead),
                    needsDynamicRequest: false
                };
            }
        case 2:
            const bfcacheEntry = (0, _bfcache.readFromBFCache)(tree.varyPath);
            if (bfcacheEntry !== null) {
                // Only show prefetched data if the dynamic data is still pending. This
                // avoids a flash back to the prefetch state in a case where it's highly
                // likely to have already streamed in.
                //
                // Tehnically, what we're actually checking is whether the dynamic
                // network response was received. But since it's a streaming response,
                // this does not mean that all the dynamic data has fully streamed in.
                // It just means that _some_ of the dynamic data was received. But as a
                // heuristic, we assume that the rest dynamic data will stream in
                // quickly, so it's still better to skip the prefetch state.
                const oldRsc = bfcacheEntry.rsc;
                const oldRscDidResolve = !isDeferredRsc(oldRsc) || oldRsc.status !== 'pending';
                const dropPrefetchRsc = oldRscDidResolve;
                return {
                    cacheNode: createCacheNode(bfcacheEntry.rsc, dropPrefetchRsc ? null : bfcacheEntry.prefetchRsc, bfcacheEntry.head, dropPrefetchRsc ? null : bfcacheEntry.prefetchHead),
                    needsDynamicRequest: false
                };
            }
            break;
        case 3:
        case 4:
        case 5:
            break;
        default:
            freshness;
            break;
    }
    let cachedRsc = null;
    let isCachedRscPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.varyPath);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    cachedRsc = segmentEntry.rsc;
                    isCachedRscPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    cachedRsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    // Because the request is still pending, we typically don't know yet
                    // whether the response will be partial. We shouldn't skip this segment
                    // during the dynamic navigation request. Otherwise, we might need to
                    // do yet another request to fill in the remaining data, creating
                    // a waterfall.
                    //
                    // The one exception is if this segment is being fetched with via
                    // prefetch={true} (i.e. the "force stale" or "full" strategy). If so,
                    // we can assume the response will be full. This field is set to `false`
                    // for such segments.
                    isCachedRscPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                {
                    segmentEntry;
                    break;
                }
        }
    }
    // Now combine the cached data with the seed data to determine what we can
    // render immediately, versus what needs to stream in later.
    // A partial state to show immediately while we wait for the final data to
    // arrive. If `rsc` is already a complete value (not partial), or if we
    // don't have any useful partial state, this will be `null`.
    let prefetchRsc;
    // The final, resolved segment data. If the data is missing, this will be a
    // promise that resolves to the eventual data. A resolved value of `null`
    // means the data failed to load; the LayoutRouter will suspend indefinitely
    // until the router updates again (refer to finishNavigationTask).
    let rsc;
    let doesSegmentNeedDynamicRequest;
    if (seedRsc !== null) {
        // We already have a dynamic server response for this segment.
        if (isCachedRscPartial) {
            // The seed data may still be streaming in, so it's worth showing the
            // partial cached state in the meantime.
            prefetchRsc = cachedRsc;
            rsc = seedRsc;
        } else {
            // We already have a completely cached segment. Ignore the seed data,
            // which may still be streaming in. This shouldn't happen in the normal
            // case because the client will inform the server which segments are
            // already fully cached, and the server will skip rendering them.
            prefetchRsc = null;
            rsc = cachedRsc;
        }
        doesSegmentNeedDynamicRequest = false;
    } else {
        if (isCachedRscPartial) {
            // The cached data contains dynamic holes, or it's missing entirely. We'll
            // show the partial state immediately (if available), and stream in the
            // final data.
            //
            // Create a pending promise that we can later write to when the
            // data arrives from the server.
            prefetchRsc = cachedRsc;
            rsc = createDeferredRsc();
        } else {
            // The data is fully cached.
            prefetchRsc = null;
            rsc = cachedRsc;
        }
        doesSegmentNeedDynamicRequest = isCachedRscPartial;
    }
    // If this is a page segment, we need to do the same for the head. This
    // follows analogous logic to the segment data above.
    // TODO: We don't need to store the head on the page segment's CacheNode; we
    // can lift it to the main state object. Then we can also delete
    // findHeadCache.
    let prefetchHead = null;
    let head = null;
    let doesHeadNeedDynamicRequest = isPage;
    if (isPage) {
        let cachedHead = null;
        let isCachedHeadPartial = true;
        if (metadataVaryPath !== null) {
            const metadataEntry = (0, _cache.readSegmentCacheEntry)(now, metadataVaryPath);
            if (metadataEntry !== null) {
                switch(metadataEntry.status){
                    case _cache.EntryStatus.Fulfilled:
                        {
                            cachedHead = metadataEntry.rsc;
                            isCachedHeadPartial = metadataEntry.isPartial;
                            break;
                        }
                    case _cache.EntryStatus.Pending:
                        {
                            cachedHead = (0, _cache.waitForSegmentCacheEntry)(metadataEntry).then((entry)=>entry !== null ? entry.rsc : null);
                            isCachedHeadPartial = metadataEntry.isPartial;
                            break;
                        }
                    case _cache.EntryStatus.Empty:
                    case _cache.EntryStatus.Rejected:
                        {
                            break;
                        }
                    default:
                        {
                            metadataEntry;
                            break;
                        }
                }
            }
        }
        if (("TURBOPACK compile-time value", false) && isCachedHeadPartial) {
            // TODO: When optimistic routing is enabled, don't block on waiting for
            // the viewport to resolve. This is a temporary workaround until Vary
            // Params are tracked when rendering the metadata. We'll fix it before
            // this feature is stable. However, it's not a critical issue because 1)
            // it will stream in eventually anyway 2) metadata is wrapped in an
            // internal Suspense boundary, so is always non-blocking; this only
            // affects the viewport node, which is meant to blocking, however... 3)
            // before Segment Cache landed this wasn't always the case, anyway, so
            // it's unlikely that many people are relying on this behavior. Still,
            // will be fixed before stable. It's the very next step in the sequence of
            // work on this project.
            //
            // This line of code works because the App Router treats `null` as
            // "no renderable head available", rather than an empty head. React treats
            // an empty string as empty.
            cachedHead = '';
        }
        if (seedHead !== null) {
            if (isCachedHeadPartial) {
                prefetchHead = cachedHead;
                head = seedHead;
            } else {
                prefetchHead = null;
                head = cachedHead;
            }
            doesHeadNeedDynamicRequest = false;
        } else {
            if (isCachedHeadPartial) {
                prefetchHead = cachedHead;
                head = createDeferredRsc();
            } else {
                prefetchHead = null;
                head = cachedHead;
            }
            doesHeadNeedDynamicRequest = isCachedHeadPartial;
        }
    }
    // Now that we're creating a new segment, write its data to the BFCache. A
    // subsequent back/forward navigation will reuse this same data, until or
    // unless it's cleared by a refresh/revalidation.
    //
    // Skip BFCache writes for optimistic navigations since they are transient
    // and will be replaced by the canonical navigation.
    if (freshness !== 5) {
        (0, _bfcache.writeToBFCache)(now, tree.varyPath, rsc, prefetchRsc, head, prefetchHead, dynamicStaleAt);
        if (isPage && metadataVaryPath !== null) {
            (0, _bfcache.writeHeadToBFCache)(now, metadataVaryPath, head, prefetchHead, dynamicStaleAt);
        }
    }
    return {
        cacheNode: createCacheNode(rsc, prefetchRsc, head, prefetchHead),
        // TODO: We should store this field on the CacheNode itself. I think we can
        // probably unify NavigationTask, CacheNode, and DeferredRsc into a
        // single type. Or at least CacheNode and DeferredRsc.
        needsDynamicRequest: doesSegmentNeedDynamicRequest || doesHeadNeedDynamicRequest
    };
}
function createCacheNode(rsc, prefetchRsc, head, prefetchHead, scrollRef = null) {
    return {
        rsc,
        prefetchRsc,
        head,
        prefetchHead,
        slots: null,
        scrollRef
    };
}
// Represents whether the previuos navigation resulted in a route tree mismatch.
// A mismatch results in a refresh of the page. If there are two successive
// mismatches, we will fall back to an MPA navigation, to prevent a retry loop.
let previousNavigationDidMismatch = false;
function spawnDynamicRequests(task, primaryUrl, nextUrl, freshnessPolicy, accumulation, // prediction. Passed through so it can be marked as having a dynamic rewrite
// if the server returns a different pathname than expected (indicating
// dynamic rewrite behavior that varies by param value).
routeCacheEntry, // server-patch retry logic so it can inherit the intent if the original
// transition hasn't committed yet.
navigateType) {
    const dynamicRequestTree = task.dynamicRequestTree;
    if (dynamicRequestTree === null) {
        // This navigation was fully cached. There are no dynamic requests to spawn.
        previousNavigationDidMismatch = false;
        return;
    }
    // This is intentionally not an async function to discourage the caller from
    // awaiting the result. Any subsequent async operations spawned by this
    // function should result in a separate navigation task, rather than
    // block the original one.
    //
    // In this function we spawn (but do not await) all the network requests that
    // block the navigation, and collect the promises. The next function,
    // `finishNavigationTask`, can await the promises in any order without
    // accidentally introducing a network waterfall.
    const primaryRequestPromise = fetchMissingDynamicData(task, dynamicRequestTree, primaryUrl, nextUrl, freshnessPolicy, routeCacheEntry);
    const separateRefreshUrls = accumulation.separateRefreshUrls;
    let refreshRequestPromises = null;
    if (separateRefreshUrls !== null) {
        // There are multiple URLs that we need to request the data from. This
        // happens when a "default" parallel route slot is present in the tree, and
        // its data cannot be fetched from the current route. We need to split the
        // combined dynamic request tree into separate requests per URL.
        // TODO: Create a scoped dynamic request tree that omits anything that
        // is not relevant to the given URL. Without doing this, the server may
        // sometimes render more data than necessary; this is not a regression
        // compared to the pre-Segment Cache implementation, though, just an
        // optimization we can make in the future.
        // Construct a request tree for each additional refresh URL. This will
        // prune away everything except the parts of the tree that match the
        // given refresh URL.
        refreshRequestPromises = [];
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(primaryUrl);
        for (const refreshUrl of separateRefreshUrls){
            if (refreshUrl === canonicalUrl) {
                continue;
            }
            // TODO: Create a scoped dynamic request tree that omits anything that
            // is not relevant to the given URL. Without doing this, the server may
            // sometimes render more data than necessary; this is not a regression
            // compared to the pre-Segment Cache implementation, though, just an
            // optimization we can make in the future.
            // const scopedDynamicRequestTree = splitTaskByURL(task, refreshUrl)
            const scopedDynamicRequestTree = dynamicRequestTree;
            if (scopedDynamicRequestTree !== null) {
                refreshRequestPromises.push(fetchMissingDynamicData(task, scopedDynamicRequestTree, new URL(refreshUrl, location.origin), // time the refresh URL was set, not the current Next-Url. Need to
                // start tracking this alongside the refresh URL. In the meantime,
                // if a refresh fails due to a mismatch, it will trigger a
                // hard refresh.
                nextUrl, freshnessPolicy, routeCacheEntry));
            }
        }
    }
    // Further async operations are moved into this separate function to
    // discourage sequential network requests.
    const voidPromise = finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises, routeCacheEntry, navigateType);
    // `finishNavigationTask` is responsible for error handling, so we can attach
    // noop callbacks to this promise.
    voidPromise.then(noop, noop);
}
async function finishNavigationTask(task, nextUrl, primaryRequestPromise, refreshRequestPromises, routeCacheEntry, navigateType) {
    // Wait for all the requests to finish, or for the first one to fail.
    let exitStatus = await waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises);
    // Once the all the requests have finished, check the tree for any remaining
    // pending tasks. If anything is still pending, it means the server response
    // does not match the client, and we must refresh to get back to a consistent
    // state. We can skip this step if we already detected a mismatch during the
    // first phase; it doesn't matter in that case because we're going to refresh
    // the whole tree regardless.
    if (exitStatus === 0) {
        exitStatus = abortRemainingPendingTasks(task, null, null);
    }
    switch(exitStatus){
        case 0:
            {
                // The task has completely finished. There's no missing data. Exit.
                previousNavigationDidMismatch = false;
                return;
            }
        case 1:
            {
                // Some data failed to finish loading. Trigger a soft retry.
                // TODO: As an extra precaution against soft retry loops, consider
                // tracking whether a navigation was itself triggered by a retry. If two
                // happen in a row, fall back to a hard retry.
                const isHardRetry = false;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route, routeCacheEntry, navigateType);
                return;
            }
        case 2:
            {
                // Some data failed to finish loading in a non-recoverable way, such as a
                // network error. Trigger an MPA navigation.
                //
                // Hard navigating/refreshing is how we prevent an infinite retry loop
                // caused by a network error — when the network fails, we fall back to the
                // browser behavior for offline navigations. In the future, Next.js may
                // introduce its own custom handling of offline navigations, but that
                // doesn't exist yet.
                const isHardRetry = true;
                const primaryRequestResult = await primaryRequestPromise;
                dispatchRetryDueToTreeMismatch(isHardRetry, primaryRequestResult.url, nextUrl, primaryRequestResult.seed, task.route, routeCacheEntry, navigateType);
                return;
            }
        default:
            {
                return exitStatus;
            }
    }
}
function waitForRequestsToFinish(primaryRequestPromise, refreshRequestPromises) {
    // Custom async combinator logic. This could be replaced by Promise.any but
    // we don't assume that's available.
    //
    // Each promise resolves once the server responsds and the data is written
    // into the CacheNode tree. Resolve the combined promise once all the
    // requests finish.
    //
    // Or, resolve as soon as one of the requests fails, without waiting for the
    // others to finish.
    return new Promise((resolve)=>{
        const onFulfill = (result)=>{
            if (result.exitStatus === 0) {
                remainingCount--;
                if (remainingCount === 0) {
                    // All the requests finished successfully.
                    resolve(0);
                }
            } else {
                // One of the requests failed. Exit with a failing status.
                // NOTE: It's possible for one of the requests to fail with SoftRetry
                // and a later one to fail with HardRetry. In this case, we choose to
                // retry immediately, rather than delay the retry until all the requests
                // finish. If it fails again, we will hard retry on the next
                // attempt, anyway.
                resolve(result.exitStatus);
            }
        };
        // onReject shouldn't ever be called because fetchMissingDynamicData's
        // entire body is wrapped in a try/catch. This is just defensive.
        const onReject = ()=>resolve(2);
        // Attach the listeners to the promises.
        let remainingCount = 1;
        primaryRequestPromise.then(onFulfill, onReject);
        if (refreshRequestPromises !== null) {
            remainingCount += refreshRequestPromises.length;
            refreshRequestPromises.forEach((refreshRequestPromise)=>refreshRequestPromise.then(onFulfill, onReject));
        }
    });
}
function dispatchRetryDueToTreeMismatch(isHardRetry, retryUrl, retryNextUrl, seed, baseTree, // prediction. If the navigation results in a mismatch, we mark it as having
// a dynamic rewrite so future predictions bail out.
routeCacheEntry, originalNavigateType) {
    // If the navigation used a route prediction, mark it as having a dynamic
    // rewrite since it resulted in a mismatch.
    if (routeCacheEntry !== null) {
        (0, _cache.markRouteEntryAsDynamicRewrite)(routeCacheEntry);
    } else if (seed !== null) {
        // Even without a direct reference to the route cache entry, we can still
        // mark the route as having a dynamic rewrite by traversing the known route
        // tree. This handles cases where the navigation didn't originate from a
        // route prediction, but still needs to mark the pattern.
        const metadataVaryPath = seed.metadataVaryPath;
        if (metadataVaryPath !== null) {
            const now = Date.now();
            (0, _optimisticroutes.discoverKnownRoute)(now, retryUrl.pathname, retryNextUrl, null, seed.routeTree, metadataVaryPath, false, (0, _createhreffromurl.createHrefFromUrl)(retryUrl), false, true // hasDynamicRewrite
            );
        }
    }
    // Invalidate all route cache entries. Other entries may have been derived
    // from the template before we knew it had a dynamic rewrite. This also
    // triggers re-prefetching of visible links.
    (0, _cache.invalidateRouteCacheEntries)(retryNextUrl, baseTree);
    // If this is the second time in a row that a navigation resulted in a
    // mismatch, fall back to a hard (MPA) refresh.
    isHardRetry = isHardRetry || previousNavigationDidMismatch;
    previousNavigationDidMismatch = true;
    // If the original navigation hasn't committed to the browser history yet
    // (the transition suspended before React committed), inherit its push/replace
    // intent. Otherwise, the pushState already ran, so use 'replace' to avoid
    // creating a duplicate history entry.
    //
    // This works because React entangles the retry's state update with the
    // original pending transition — they commit together as a single batch,
    // so the navigate type from the retry is what HistoryUpdater ultimately sees.
    //
    // TODO: Ideally this check would happen right before we schedule the React
    // update (i.e., closer to where the action is dispatched into the queue),
    // not here where the action is constructed. But the current action queue
    // doesn't provide a natural place for that. Revisit when we refactor the
    // action queue into a more reactive navigation model.
    const lastCommitted = (0, _committedstate.getLastCommittedTree)();
    const retryNavigateType = lastCommitted !== null && baseTree !== lastCommitted ? originalNavigateType : 'replace';
    const retryAction = {
        type: _routerreducertypes.ACTION_SERVER_PATCH,
        previousTree: baseTree,
        url: retryUrl,
        nextUrl: retryNextUrl,
        seed,
        mpa: isHardRetry,
        navigateType: retryNavigateType
    };
    (0, _useactionqueue.dispatchAppRouterAction)(retryAction);
}
async function fetchMissingDynamicData(task, dynamicRequestTree, url, nextUrl, freshnessPolicy, routeCacheEntry) {
    try {
        const result = await (0, _fetchserverresponse.fetchServerResponse)(url, {
            flightRouterState: dynamicRequestTree,
            nextUrl,
            isHmrRefresh: freshnessPolicy === 4
        });
        if (typeof result === 'string') {
            // fetchServerResponse will return an href to indicate that the SPA
            // navigation failed. For example, if the server triggered a hard
            // redirect, or the fetch request errored. Initiate an MPA navigation
            // to the given href.
            return {
                exitStatus: 2,
                url: new URL(result, location.origin),
                seed: null
            };
        }
        const now = Date.now();
        const seed = (0, _navigation.convertServerPatchToFullTree)(now, task.route, result.flightData, result.renderedSearch, result.dynamicStaleTime);
        // If the navigation lock is active, wait for it to be released before
        // writing the dynamic data. This allows tests to assert on the prefetched
        // UI state.
        if ("TURBOPACK compile-time truthy", 1) {
            await waitForNavigationLock();
        }
        if (routeCacheEntry !== null && result.staticStageData !== null) {
            const { response: staticStageResponse, isResponsePartial } = result.staticStageData;
            (0, _cache.getStaleAt)(now, staticStageResponse.s).then((staleAt)=>{
                const buildId = result.responseHeaders.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? staticStageResponse.b;
                (0, _cache.writeStaticStageResponseIntoCache)(now, staticStageResponse.f, buildId, staticStageResponse.h, staleAt, dynamicRequestTree, result.renderedSearch, isResponsePartial);
            }).catch(()=>{
            // The static stage processing failed. Not fatal — the navigation
            // completed normally, we just won't write into the cache.
            });
        }
        if (routeCacheEntry !== null && result.runtimePrefetchStream !== null) {
            (0, _cache.processRuntimePrefetchStream)(now, result.runtimePrefetchStream, dynamicRequestTree, result.renderedSearch).then((processed)=>{
                if (processed !== null) {
                    (0, _cache.writeDynamicRenderResponseIntoCache)(now, _types.FetchStrategy.PPRRuntime, processed.flightDatas, processed.buildId, processed.isResponsePartial, processed.headVaryParams, processed.staleAt, processed.navigationSeed, null);
                }
            }).catch(()=>{
            // The runtime prefetch cache write failed. Not fatal — the
            // navigation completed normally, we just won't cache runtime data.
            });
        }
        // result.dynamicStaleTime is in seconds (from the server's `d` field).
        // Convert to an absolute timestamp using the centralized helper.
        const dynamicStaleAt = (0, _bfcache.computeDynamicStaleAt)(now, result.dynamicStaleTime);
        const didReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(task, seed.routeTree, seed.data, seed.head, dynamicStaleAt, result.debugInfo);
        return {
            exitStatus: didReceiveUnknownParallelRoute ? 1 : 0,
            url: new URL(result.canonicalUrl, location.origin),
            seed
        };
    } catch  {
        // This shouldn't happen because fetchServerResponse's entire body is
        // wrapped in a try/catch. If it does, though, it implies the server failed
        // to respond with any tree at all. So we must fall back to a hard retry.
        return {
            exitStatus: 2,
            url: url,
            seed: null
        };
    }
}
function writeDynamicDataIntoNavigationTask(task, serverRouteTree, dynamicData, dynamicHead, dynamicStaleAt, debugInfo) {
    if (task.status === 0 && dynamicData !== null) {
        task.status = 1;
        finishPendingCacheNode(task.node, dynamicData, dynamicHead, debugInfo);
        // Update the BFCache entry's staleAt for this segment with the value
        // from the dynamic response. This applies the per-page
        // unstable_dynamicStaleTime if set, or the default DYNAMIC_STALETIME_MS.
        // We only update segments that received dynamic data — static segments
        // are unaffected.
        (0, _bfcache.updateBFCacheEntryStaleAt)(serverRouteTree.varyPath, dynamicStaleAt);
    }
    const taskChildren = task.children;
    const serverChildren = serverRouteTree.slots;
    const dynamicDataChildren = dynamicData !== null ? dynamicData[1] : null;
    // Detect whether the server sends a parallel route slot that the client
    // doesn't know about.
    let didReceiveUnknownParallelRoute = false;
    if (taskChildren !== null) {
        if (serverChildren !== null) {
            for(const parallelRouteKey in serverChildren){
                const serverRouteTreeChild = serverChildren[parallelRouteKey];
                const dynamicDataChild = dynamicDataChildren !== null ? dynamicDataChildren[parallelRouteKey] : null;
                const taskChild = taskChildren.get(parallelRouteKey);
                if (taskChild === undefined) {
                    // The server sent a child segment that the client doesn't know about.
                    //
                    // When we receive an unknown parallel route, we must consider it a
                    // mismatch. This is unlike the case where the segment itself
                    // mismatches, because multiple routes can be active simultaneously.
                    // But a given layout should never have a mismatching set of
                    // child slots.
                    //
                    // Theoretically, this should only happen in development during an HMR
                    // refresh, because the set of parallel routes for a layout does not
                    // change over the lifetime of a build/deployment. In production, we
                    // should have already mismatched on either the build id or the segment
                    // path. But as an extra precaution, we validate in prod, too.
                    didReceiveUnknownParallelRoute = true;
                } else {
                    const taskSegment = taskChild.route[0];
                    const serverSegment = createSegmentFromRouteTree(serverRouteTreeChild);
                    if ((0, _matchsegments.matchSegment)(serverSegment, taskSegment) && dynamicDataChild !== null && dynamicDataChild !== undefined) {
                        // Found a match for this task. Keep traversing down the task tree.
                        const childDidReceiveUnknownParallelRoute = writeDynamicDataIntoNavigationTask(taskChild, serverRouteTreeChild, dynamicDataChild, dynamicHead, dynamicStaleAt, debugInfo);
                        if (childDidReceiveUnknownParallelRoute) {
                            didReceiveUnknownParallelRoute = true;
                        }
                    }
                }
            }
        } else {
            if (serverChildren !== null) {
                // The server sent a child segment that the client doesn't know about.
                didReceiveUnknownParallelRoute = true;
            }
        }
    }
    return didReceiveUnknownParallelRoute;
}
function finishPendingCacheNode(cacheNode, dynamicData, dynamicHead, debugInfo) {
    // Writes a dynamic response into an existing Cache Node tree. This does _not_
    // create a new tree, it updates the existing tree in-place. So it must follow
    // the Suspense rules of cache safety — it can resolve pending promises, but
    // it cannot overwrite existing data. It can add segments to the tree (because
    // a missing segment will cause the layout router to suspend).
    // but it cannot delete them.
    //
    // We must resolve every promise in the tree, or else it will suspend
    // indefinitely. If we did not receive data for a segment, we will resolve its
    // data promise to `null` to trigger a lazy fetch during render.
    // Use the dynamic data from the server to fulfill the deferred RSC promise
    // on the Cache Node.
    const rsc = cacheNode.rsc;
    const dynamicSegmentData = dynamicData[0];
    if (dynamicSegmentData === null) {
        // This is an empty CacheNode; this particular server request did not
        // render this segment. There may be a separate pending request that will,
        // though, so we won't abort the task until all pending requests finish.
        return;
    }
    if (rsc === null) {
        // This is a lazy cache node. We can overwrite it. This is only safe
        // because we know that the LayoutRouter suspends if `rsc` is `null`.
        cacheNode.rsc = dynamicSegmentData;
    } else if (isDeferredRsc(rsc)) {
        // This is a deferred RSC promise. We can fulfill it with the data we just
        // received from the server. If it was already resolved by a different
        // navigation, then this does nothing because we can't overwrite data.
        rsc.resolve(dynamicSegmentData, debugInfo);
    } else {
    // This is not a deferred RSC promise, nor is it empty, so it must have
    // been populated by a different navigation. We must not overwrite it.
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved with the dynamic head from
    // the server.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(dynamicHead, debugInfo);
    }
}
function abortRemainingPendingTasks(task, error, debugInfo) {
    let exitStatus;
    if (task.status === 0) {
        // The data for this segment is still missing.
        task.status = 2;
        abortPendingCacheNode(task.node, error, debugInfo);
        // If the server failed to fulfill the data for this segment, it implies
        // that the route tree received from the server mismatched the tree that
        // was previously prefetched.
        //
        // In an app with fully static routes and no proxy-driven redirects or
        // rewrites, this should never happen, because the route for a URL would
        // always be the same across multiple requests. So, this implies that some
        // runtime routing condition changed, likely in a proxy, without being
        // pushed to the client.
        //
        // When this happens, we treat this the same as a refresh(). The entire
        // tree will be re-rendered from the root.
        if (task.refreshState === null) {
            // Trigger a "soft" refresh. Essentially the same as calling `refresh()`
            // in a Server Action.
            exitStatus = 1;
        } else {
            // The mismatch was discovered inside an inactive parallel route. This
            // implies the inactive parallel route is no longer reachable at the URL
            // that originally rendered it. Fall back to an MPA refresh.
            // TODO: An alternative could be to trigger a soft refresh but to _not_
            // re-use the inactive parallel routes this time. Similar to what would
            // happen if were to do a hard refrehs, but without the HTML page.
            exitStatus = 2;
        }
    } else {
        // This segment finished. (An error here is treated as Done because they are
        // surfaced to the application during render.)
        exitStatus = 0;
    }
    const taskChildren = task.children;
    if (taskChildren !== null) {
        for (const [, taskChild] of taskChildren){
            const childExitStatus = abortRemainingPendingTasks(taskChild, error, debugInfo);
            // Propagate the exit status up the tree. The statuses are ordered by
            // their precedence.
            if (childExitStatus > exitStatus) {
                exitStatus = childExitStatus;
            }
        }
    }
    return exitStatus;
}
function abortPendingCacheNode(cacheNode, error, debugInfo) {
    const rsc = cacheNode.rsc;
    if (isDeferredRsc(rsc)) {
        if (error === null) {
            // This will trigger a lazy fetch during render.
            rsc.resolve(null, debugInfo);
        } else {
            // This will trigger an error during rendering.
            rsc.reject(error, debugInfo);
        }
    }
    // Check if this is a leaf segment. If so, it will have a `head` property with
    // a pending promise that needs to be resolved. If an error was provided, we
    // will not resolve it with an error, since this is rendered at the root of
    // the app. We want the segment to error, not the entire app.
    const head = cacheNode.head;
    if (isDeferredRsc(head)) {
        head.resolve(null, debugInfo);
    }
}
const DEFERRED = Symbol();
function isDeferredRsc(value) {
    return value && typeof value === 'object' && value.tag === DEFERRED;
}
function createDeferredRsc() {
    // Create an unresolved promise that represents data derived from a Flight
    // response. The promise will be resolved later as soon as we start receiving
    // data from the server, i.e. as soon as the Flight client decodes and returns
    // the top-level response object.
    // The `_debugInfo` field contains profiling information. Promises that are
    // created by Flight already have this info added by React; for any derived
    // promise created by the router, we need to transfer the Flight debug info
    // onto the derived promise.
    //
    // The debug info represents the latency between the start of the navigation
    // and the start of rendering. (It does not represent the time it takes for
    // whole stream to finish.)
    const debugInfo = [];
    let resolve;
    let reject;
    const pendingRsc = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    pendingRsc.status = 'pending';
    pendingRsc.resolve = (value, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const fulfilledRsc = pendingRsc;
            fulfilledRsc.status = 'fulfilled';
            fulfilledRsc.value = value;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            resolve(value);
        }
    };
    pendingRsc.reject = (error, responseDebugInfo)=>{
        if (pendingRsc.status === 'pending') {
            const rejectedRsc = pendingRsc;
            rejectedRsc.status = 'rejected';
            rejectedRsc.reason = error;
            if (responseDebugInfo !== null) {
                // Transfer the debug info to the derived promise.
                debugInfo.push.apply(debugInfo, responseDebugInfo);
            }
            reject(error);
        }
    };
    pendingRsc.tag = DEFERRED;
    pendingRsc._debugInfo = debugInfo;
    return pendingRsc;
}
/**
 * Helper for the Instant Navigation Testing API. Waits for the navigation lock
 * to be released before returning. The network request has already completed by
 * the time this is called, so this only delays writing the dynamic data.
 *
 * Not exposed in production builds by default.
 */ async function waitForNavigationLock() {
    if ("TURBOPACK compile-time truthy", 1) {
        const { waitForNavigationLockIfActive } = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-ssr] (ecmascript)");
        await waitForNavigationLockIfActive();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    compareAppPaths: null,
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compareAppPaths: function() {
        return compareAppPaths;
    },
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function compareAppPaths(a, b) {
    const aHasSlot = a.includes('/@');
    const bHasSlot = b.includes('/@');
    if (aHasSlot && !bHasSlot) return -1;
    if (!aHasSlot && bHasSlot) return 1;
    return a.localeCompare(b);
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-ssr] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    extractSourcePageFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    extractSourcePageFromFlightRouterState: function() {
        return extractSourcePageFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
const segmentToSourcePagePathname = (segment)=>{
    if (typeof segment === 'string') {
        if (segment === 'children') return '';
        if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return 'page';
        return segment;
    }
    const [paramName, , dynamicParamType] = segment;
    switch(dynamicParamType){
        case 'c':
            return `[...${paramName}]`;
        case 'ci(..)(..)':
            return `(..)(..)[...${paramName}]`;
        case 'ci(.)':
            return `(.)[...${paramName}]`;
        case 'ci(..)':
            return `(..)[...${paramName}]`;
        case 'ci(...)':
            return `(...)[...${paramName}]`;
        case 'oc':
            return `[[...${paramName}]]`;
        case 'd':
            return `[${paramName}]`;
        case 'di(..)(..)':
            return `(..)(..)[${paramName}]`;
        case 'di(.)':
            return `(.)[${paramName}]`;
        case 'di(..)':
            return `(..)[${paramName}]`;
        case 'di(...)':
            return `(...)[${paramName}]`;
        default:
            dynamicParamType;
            return `[${paramName}]`;
    }
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return `${acc}/${segment}`;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    const parallelRoutes = flightRouterState[1] ?? {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function extractSourcePageSegmentsFromFlightRouterState(flightRouterState) {
    const segment = segmentToSourcePagePathname(flightRouterState[0]);
    if (segment === _segment.DEFAULT_SEGMENT_KEY) {
        return undefined;
    }
    if (segment === 'page') {
        return [
            segment
        ];
    }
    const parallelRoutes = flightRouterState[1] ?? {};
    const childrenPath = parallelRoutes.children ? extractSourcePageSegmentsFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        return segment === '' ? childrenPath : [
            removeLeadingSlash(segment),
            ...childrenPath
        ];
    }
    for (const [key, value] of Object.entries(parallelRoutes)){
        if (key === 'children') continue;
        const childPath = extractSourcePageSegmentsFromFlightRouterState(value);
        if (childPath !== undefined) {
            return segment === '' ? childPath : [
                removeLeadingSlash(segment),
                ...childPath
            ];
        }
    }
    return undefined;
}
function extractSourcePageFromFlightRouterState(flightRouterState) {
    const sourcePageSegments = extractSourcePageSegmentsFromFlightRouterState(flightRouterState);
    return sourcePageSegments ? `/${sourcePageSegments.join('/')}` : undefined;
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return extractPathFromFlightRouterState(treeB) ?? '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return `${segmentToPathname(segmentB)}/${changedPath}`;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params = {}) {
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/lib/javascript-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Adapted from React's sanitizeURL function found here: https://github.com/facebook/react/blob/b565373afd0cc1988497e1107106e851e8cfb261/packages/react-dom-bindings/src/shared/sanitizeURL.js
// A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isJavaScriptURLString", {
    enumerable: true,
    get: function() {
        return isJavaScriptURLString;
    }
});
const isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function isJavaScriptURLString(url) {
    return isJavaScriptProtocol.test('' + url);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    completeHardNavigation: null,
    completeSoftNavigation: null,
    completeTraverseNavigation: null,
    convertServerPatchToFullTree: null,
    navigate: null,
    navigateToKnownRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    completeHardNavigation: function() {
        return completeHardNavigation;
    },
    completeSoftNavigation: function() {
        return completeSoftNavigation;
    },
    completeTraverseNavigation: function() {
        return completeTraverseNavigation;
    },
    convertServerPatchToFullTree: function() {
        return convertServerPatchToFullTree;
    },
    navigate: function() {
        return navigate;
    },
    navigateToKnownRoute: function() {
        return navigateToKnownRoute;
    }
});
const _fetchserverresponse = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _optimisticroutes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-ssr] (ecmascript)");
const _javascripturl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/lib/javascript-url.js [app-ssr] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-ssr] (ecmascript)");
function navigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    // Instant Navigation Testing API: when the lock is active, ensure a
    // prefetch task has been initiated before proceeding with the navigation.
    // This guarantees that segment data requests are at least pending, even
    // for routes that already have a cached route tree. Without this, the
    // static shell might be incomplete because some segments were never
    // requested.
    if ("TURBOPACK compile-time truthy", 1) {
        const { isNavigationLocked } = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-ssr] (ecmascript)");
        if (isNavigationLocked()) {
            return ensurePrefetchThenNavigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType);
        }
    }
    return navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType);
}
function navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    const now = Date.now();
    const href = url.href;
    const cacheKey = (0, _cachekey.createCacheKey)(href, nextUrl);
    const route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        return navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, route);
    }
    // There was no matching route tree in the cache. Let's see if we can
    // construct an "optimistic" route tree using the deprecated search-params
    // based matching. This is only used when the new optimisticRouting flag is
    // disabled.
    //
    // Do not construct an optimistic route tree if there was a cache hit, but
    // the entry has a rejected status, since it may have been rejected due to a
    // rewrite or redirect based on the search params.
    //
    // TODO: There are multiple reasons a prefetch might be rejected; we should
    // track them explicitly and choose what to do here based on that.
    if ("TURBOPACK compile-time truthy", 1) {
        if (route === null || route.status !== _cache.EntryStatus.Rejected) {
            const optimisticRoute = (0, _cache.deprecated_requestOptimisticRouteCacheEntry)(now, url, nextUrl);
            if (optimisticRoute !== null) {
                // We have an optimistic route tree. Proceed with the normal flow.
                return navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, optimisticRoute);
            }
        }
    }
    // There's no matching prefetch for this route in the cache. We must lazily
    // fetch it from the server before we can perform the navigation.
    //
    // TODO: If this is a gesture navigation, instead of performing a
    // dynamic request, we should do a runtime prefetch.
    return navigateToUnknownRoute(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType).catch(()=>{
        // If the navigation fails, return the current state
        return state;
    });
}
function navigateToKnownRoute(now, state, url, canonicalUrl, navigationSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, debugInfo, // prediction. Passed through so it can be marked as having a dynamic rewrite
// if the server returns a different pathname (indicating dynamic rewrite
// behavior).
//
// When null, the navigation did not use route prediction - either because
// the route was already fully cached, or it's a navigation that doesn't
// involve prediction (refresh, history traversal, server action, etc.).
// In these cases, if a mismatch occurs, we still mark the route as having a
// dynamic rewrite by traversing the known route tree (see
// dispatchRetryDueToTreeMismatch).
routeCacheEntry) {
    // A version of navigate() that accepts the target route tree as an argument
    // rather than reading it from the prefetch cache.
    const accumulation = {
        separateRefreshUrls: null,
        scrollRef: null
    };
    // We special case navigations to the exact same URL as the current location.
    // It's a common UI pattern for apps to refresh when you click a link to the
    // current page. So when this happens, we refresh the dynamic data in the page
    // segments.
    //
    // Note that this does not apply if the any part of the hash or search query
    // has changed. This might feel a bit weird but it makes more sense when you
    // consider that the way to trigger this behavior is to click the same link
    // multiple times.
    //
    // TODO: We should probably refresh the *entire* route when this case occurs,
    // not just the page segments. Essentially treating it the same as a refresh()
    // triggered by an action, which is the more explicit way of modeling the UI
    // pattern described above.
    //
    // Also note that this only refreshes the dynamic data, not static/ cached
    // data. If the page segment is fully static and prefetched, the request is
    // skipped. (This is also how refresh() works.)
    const isSamePageNavigation = url.href === currentUrl.href;
    const task = (0, _pprnavigations.startPPRNavigation)(now, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, navigationSeed.routeTree, navigationSeed.metadataVaryPath, freshnessPolicy, navigationSeed.data, navigationSeed.head, navigationSeed.dynamicStaleAt, isSamePageNavigation, accumulation);
    if (task !== null) {
        if (freshnessPolicy !== _pprnavigations.FreshnessPolicy.Gesture) {
            (0, _pprnavigations.spawnDynamicRequests)(task, url, nextUrl, freshnessPolicy, accumulation, routeCacheEntry, navigateType);
        }
        return completeSoftNavigation(state, url, nextUrl, task.route, task.node, navigationSeed.renderedSearch, canonicalUrl, navigateType, scrollBehavior, accumulation.scrollRef, debugInfo);
    }
    // Could not perform a SPA navigation. Revert to a full-page (MPA) navigation.
    return completeHardNavigation(state, url, navigateType);
}
function navigateUsingPrefetchedRouteTree(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType, route) {
    const routeTree = route.tree;
    const canonicalUrl = route.canonicalUrl + url.hash;
    const renderedSearch = route.renderedSearch;
    const prefetchSeed = {
        renderedSearch,
        routeTree,
        metadataVaryPath: route.metadata.varyPath,
        data: null,
        head: null,
        dynamicStaleAt: (0, _bfcache.computeDynamicStaleAt)(now, _bfcache.UnknownDynamicStaleTime)
    };
    return navigateToKnownRoute(now, state, url, canonicalUrl, prefetchSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, null, route);
}
// Used to request all the dynamic data for a route, rather than just a subset,
// e.g. during a refresh or a revalidation. Typically this gets constructed
// during the normal flow when diffing the route tree, but for an unprefetched
// navigation, where we don't know the structure of the target route, we use
// this instead.
const DynamicRequestTreeForEntireRoute = [
    '',
    {},
    null,
    'refetch'
];
async function navigateToUnknownRoute(now, state, url, currentUrl, currentRenderedSearch, nextUrl, currentCacheNode, currentFlightRouterState, freshnessPolicy, scrollBehavior, navigateType) {
    // Runs when a navigation happens but there's no cached prefetch we can use.
    // Don't bother to wait for a prefetch response; go straight to a full
    // navigation that contains both static and dynamic data in a single stream.
    // (This is unlike the old navigation implementation, which instead blocks
    // the dynamic request until a prefetch request is received.)
    //
    // To avoid duplication of logic, we're going to pretend that the tree
    // returned by the dynamic request is, in fact, a prefetch tree. Then we can
    // use the same server response to write the actual data into the CacheNode
    // tree. So it's the same flow as the "happy path" (prefetch, then
    // navigation), except we use a single server response for both stages.
    let dynamicRequestTree;
    switch(freshnessPolicy){
        case _pprnavigations.FreshnessPolicy.Default:
        case _pprnavigations.FreshnessPolicy.HistoryTraversal:
        case _pprnavigations.FreshnessPolicy.Gesture:
            dynamicRequestTree = currentFlightRouterState;
            break;
        case _pprnavigations.FreshnessPolicy.Hydration:
        case _pprnavigations.FreshnessPolicy.RefreshAll:
        case _pprnavigations.FreshnessPolicy.HMRRefresh:
            dynamicRequestTree = DynamicRequestTreeForEntireRoute;
            break;
        default:
            freshnessPolicy;
            dynamicRequestTree = currentFlightRouterState;
            break;
    }
    const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
        flightRouterState: dynamicRequestTree,
        nextUrl
    });
    const result = await promiseForDynamicServerResponse;
    if (typeof result === 'string') {
        // This is an MPA navigation.
        const redirectUrl = new URL(result, location.origin);
        return completeHardNavigation(state, redirectUrl, navigateType);
    }
    const { flightData, canonicalUrl, renderedSearch, couldBeIntercepted, supportsPerSegmentPrefetching, dynamicStaleTime, staticStageData, runtimePrefetchStream, responseHeaders, debugInfo } = result;
    // Since the response format of dynamic requests and prefetches is slightly
    // different, we'll need to massage the data a bit. Create FlightRouterState
    // tree that simulates what we'd receive as the result of a prefetch.
    const navigationSeed = convertServerPatchToFullTree(now, currentFlightRouterState, flightData, renderedSearch, dynamicStaleTime);
    // Learn the route pattern so we can predict it for future navigations.
    // hasDynamicRewrite is false because this is a fresh navigation to an
    // unknown route - any rewrite detection happens during the traversal inside
    // discoverKnownRoute. The hasDynamicRewrite param is only set to true when
    // retrying after a tree mismatch (see dispatchRetryDueToTreeMismatch).
    const metadataVaryPath = navigationSeed.metadataVaryPath;
    if (metadataVaryPath !== null) {
        (0, _optimisticroutes.discoverKnownRoute)(now, url.pathname, nextUrl, null, navigationSeed.routeTree, metadataVaryPath, couldBeIntercepted, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), supportsPerSegmentPrefetching, false // hasDynamicRewrite - not a retry, rewrite detection happens during traversal
        );
        if (staticStageData !== null) {
            const { response: staticStageResponse, isResponsePartial } = staticStageData;
            // Write the static stage of the response into the segment cache so that
            // subsequent navigations can serve cached static segments instantly.
            (0, _cache.getStaleAt)(now, staticStageResponse.s).then((staleAt)=>{
                const buildId = responseHeaders.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? staticStageResponse.b;
                (0, _cache.writeStaticStageResponseIntoCache)(now, staticStageResponse.f, buildId, staticStageResponse.h, staleAt, currentFlightRouterState, renderedSearch, isResponsePartial);
            }).catch(()=>{
            // The static stage processing failed. Not fatal — the navigation
            // completed normally, we just won't write into the cache.
            });
        }
        if (runtimePrefetchStream !== null) {
            (0, _cache.processRuntimePrefetchStream)(now, runtimePrefetchStream, currentFlightRouterState, renderedSearch).then((processed)=>{
                if (processed !== null) {
                    (0, _cache.writeDynamicRenderResponseIntoCache)(now, _types.FetchStrategy.PPRRuntime, processed.flightDatas, processed.buildId, processed.isResponsePartial, processed.headVaryParams, processed.staleAt, processed.navigationSeed, null);
                }
            }).catch(()=>{
            // The runtime prefetch cache write failed. Not fatal — the
            // navigation completed normally, we just won't cache runtime data.
            });
        }
    }
    return navigateToKnownRoute(now, state, url, (0, _createhreffromurl.createHrefFromUrl)(canonicalUrl), navigationSeed, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, freshnessPolicy, nextUrl, scrollBehavior, navigateType, debugInfo, // came directly from the server. If a mismatch occurs during dynamic data
    // fetch, the retry handler will traverse the known route tree to mark the
    // entry as having a dynamic rewrite.
    null);
}
function completeHardNavigation(state, url, navigateType) {
    if ((0, _javascripturl.isJavaScriptURLString)(url.href)) {
        console.error('Next.js has blocked a javascript: URL as a security precaution.');
        return state;
    }
    const newState = {
        canonicalUrl: url.origin === location.origin ? (0, _createhreffromurl.createHrefFromUrl)(url) : url.href,
        pushRef: {
            pendingPush: navigateType === 'push',
            mpaNavigation: true,
            preserveCustomHistoryState: false
        },
        // TODO: None of the rest of these values are consistent with the incoming
        // navigation. We rely on the fact that AppRouter will suspend and trigger
        // a hard navigation before it accesses any of these values. But instead
        // we should trigger the hard navigation and blocking any subsequent
        // router updates without updating React.
        renderedSearch: state.renderedSearch,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        tree: state.tree,
        nextUrl: state.nextUrl,
        previousNextUrl: state.previousNextUrl,
        debugInfo: null
    };
    return newState;
}
function completeSoftNavigation(oldState, url, referringNextUrl, tree, cache, renderedSearch, canonicalUrl, navigateType, scrollBehavior, scrollRef, collectedDebugInfo) {
    // The "Next-Url" is a special representation of the URL that Next.js
    // uses to implement interception routes.
    // TODO: Get rid of this extra traversal by computing this during the
    // same traversal that computes the tree itself. We should also figure out
    // what is the minimum information needed for the server to correctly
    // intercept the route.
    const changedPath = (0, _computechangedpath.computeChangedPath)(oldState.tree, tree);
    const nextUrlForNewRoute = changedPath ? changedPath : oldState.nextUrl;
    // This value is stored on the state as `previousNextUrl`; the naming is
    // confusing. What it represents is the "Next-Url" header that was used to
    // fetch the incoming route. It's essentially the refererer URL, but in a
    // Next.js specific format. During refreshes, this is sent back to the server
    // instead of the current route's "Next-Url" so that the same interception
    // logic is applied as during the original navigation.
    const previousNextUrl = referringNextUrl;
    // Check if the only thing that changed was the hash fragment.
    const oldUrl = new URL(oldState.canonicalUrl, url);
    const onlyHashChange = // navigations are always same-origin.
    url.pathname === oldUrl.pathname && url.search === oldUrl.search && url.hash !== oldUrl.hash;
    // Determine whether and how the page should scroll after this
    // navigation.
    //
    // By default, we scroll to the segments that were navigated to — i.e.
    // segments in the new part of the route, as opposed to shared segments
    // that were already part of the previous route. All newly navigated
    // segments share a single ScrollRef. When they mount, the first one
    // to mount initiates the scroll. They share a ref so that only one
    // scroll happens per navigation.
    //
    // If a subsequent navigation produces new segments, those supersede
    // any pending scroll from the previous navigation by invalidating its
    // ScrollRef. If a navigation doesn't produce any new segments (e.g.
    // a refresh where the route structure didn't change), any pending
    // scrolls from previous navigations are unaffected.
    //
    // The branches below handle special cases layered on top of this
    // default model.
    let activeScrollRef;
    let forceScroll;
    if (scrollBehavior === _routerreducertypes.ScrollBehavior.NoScroll) {
        // The user explicitly opted out of scrolling (e.g. scroll={false}
        // on a Link or router.push).
        //
        // If this navigation created new scroll targets (scrollRef !== null),
        // neutralize them. If it didn't, any prior scroll targets carried
        // forward on the cache nodes via reuseSharedCacheNode remain active.
        if (scrollRef !== null) {
            scrollRef.current = false;
        }
        activeScrollRef = oldState.focusAndScrollRef.scrollRef;
        forceScroll = false;
    } else if (onlyHashChange) {
        // Hash-only navigations should scroll regardless of per-node state.
        // Create a fresh ref so the first segment to scroll consumes it.
        //
        // Invalidate any scroll ref from a prior navigation that hasn't
        // been consumed yet.
        const oldScrollRef = oldState.focusAndScrollRef.scrollRef;
        if (oldScrollRef !== null) {
            oldScrollRef.current = false;
        }
        // Also invalidate any per-node refs that were accumulated during
        // this navigation's tree construction — the hash-only ref
        // supersedes them.
        if (scrollRef !== null) {
            scrollRef.current = false;
        }
        activeScrollRef = {
            current: true
        };
        forceScroll = true;
    } else {
        // Default case. Use the accumulated scrollRef (may be null if no
        // new segments were created). The handler checks per-node refs, so
        // unchanged parallel route slots won't scroll.
        activeScrollRef = scrollRef;
        // If this navigation created new scroll targets, invalidate any
        // pending scroll from a previous navigation.
        if (scrollRef !== null) {
            const oldScrollRef = oldState.focusAndScrollRef.scrollRef;
            if (oldScrollRef !== null) {
                oldScrollRef.current = false;
            }
        }
        forceScroll = false;
    }
    const newState = {
        canonicalUrl,
        renderedSearch,
        pushRef: {
            pendingPush: navigateType === 'push',
            mpaNavigation: false,
            preserveCustomHistoryState: false
        },
        focusAndScrollRef: {
            scrollRef: activeScrollRef,
            forceScroll,
            onlyHashChange,
            hashFragment: //
            // Empty hash should trigger default behavior of scrolling layout into
            // view. #top is handled in layout-router.
            //
            // Refer to `ScrollAndFocusHandler` for details on how this is used.
            scrollBehavior !== _routerreducertypes.ScrollBehavior.NoScroll && url.hash !== '' ? decodeURIComponent(url.hash.slice(1)) : oldState.focusAndScrollRef.hashFragment
        },
        cache,
        tree,
        nextUrl: nextUrlForNewRoute,
        previousNextUrl,
        debugInfo: collectedDebugInfo
    };
    return newState;
}
function completeTraverseNavigation(state, url, renderedSearch, cache, tree, nextUrl) {
    return {
        // Set canonical url
        canonicalUrl: (0, _createhreffromurl.createHrefFromUrl)(url),
        renderedSearch,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // Ensures that the custom history state that was set is preserved when applying this update.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: state.focusAndScrollRef,
        cache,
        // Restore provided tree
        tree,
        nextUrl,
        // TODO: We need to restore previousNextUrl, too, which represents the
        // Next-Url that was used to fetch the data. Anywhere we fetch using the
        // canonical URL, there should be a corresponding Next-Url.
        previousNextUrl: null,
        debugInfo: null
    };
}
function convertServerPatchToFullTree(now, currentTree, flightData, renderedSearch, dynamicStaleTimeSeconds) {
    // During a client navigation or prefetch, the server sends back only a patch
    // for the parts of the tree that have changed.
    //
    // This applies the patch to the base tree to create a full representation of
    // the resulting tree.
    //
    // The return type includes a full FlightRouterState tree and a full
    // CacheNodeSeedData tree. (Conceptually these are the same tree, and should
    // eventually be unified, but there's still lots of existing code that
    // operates on FlightRouterState trees alone without the CacheNodeSeedData.)
    //
    // TODO: This similar to what apply-router-state-patch-to-tree does. It
    // will eventually fully replace it. We should get rid of all the remaining
    // places where we iterate over the server patch format. This should also
    // eventually replace normalizeFlightData.
    let baseTree = currentTree;
    let baseData = null;
    let head = null;
    if (flightData !== null) {
        for (const { segmentPath, tree: treePatch, seedData: dataPatch, head: headPatch } of flightData){
            const result = convertServerPatchToFullTreeImpl(baseTree, baseData, treePatch, dataPatch, segmentPath, renderedSearch, 0);
            baseTree = result.tree;
            baseData = result.data;
            // This is the same for all patches per response, so just pick an
            // arbitrary one
            head = headPatch;
        }
    }
    const finalFlightRouterState = baseTree;
    // Convert the final FlightRouterState into a RouteTree type.
    //
    // TODO: Eventually, FlightRouterState will evolve to being a transport format
    // only. The RouteTree type will become the main type used for dealing with
    // routes on the client, and we'll store it in the state directly.
    const acc = {
        metadataVaryPath: null
    };
    const routeTree = (0, _cache.convertRootFlightRouterStateToRouteTree)(finalFlightRouterState, renderedSearch, acc);
    return {
        routeTree,
        metadataVaryPath: acc.metadataVaryPath,
        data: baseData,
        renderedSearch,
        head,
        dynamicStaleAt: (0, _bfcache.computeDynamicStaleAt)(now, dynamicStaleTimeSeconds)
    };
}
function convertServerPatchToFullTreeImpl(baseRouterState, baseData, treePatch, dataPatch, segmentPath, renderedSearch, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return {
            tree: treePatch,
            data: dataPatch
        };
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: We receive the FlightRouterState patch in the same request as the
    // seed data patch. Therefore we don't need to worry about diffing the segment
    // values; we can assume the server sent us a correct result.
    const updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    const baseTreeChildren = baseRouterState[1];
    const baseSeedDataChildren = baseData !== null ? baseData[1] : null;
    const newTreeChildren = {};
    const newSeedDataChildren = {};
    for(const parallelRouteKey in baseTreeChildren){
        const childBaseRouterState = baseTreeChildren[parallelRouteKey];
        const childBaseSeedData = baseSeedDataChildren !== null ? baseSeedDataChildren[parallelRouteKey] ?? null : null;
        if (parallelRouteKey === updatedParallelRouteKey) {
            const result = convertServerPatchToFullTreeImpl(childBaseRouterState, childBaseSeedData, treePatch, dataPatch, segmentPath, renderedSearch, // the end of the segment path.
            index + 2);
            newTreeChildren[parallelRouteKey] = result.tree;
            newSeedDataChildren[parallelRouteKey] = result.data;
        } else {
            // This child is not being patched. Copy it over as-is.
            newTreeChildren[parallelRouteKey] = childBaseRouterState;
            newSeedDataChildren[parallelRouteKey] = childBaseSeedData;
        }
    }
    let clonedTree;
    let clonedSeedData;
    // Clone all the fields except the children.
    // Clone the FlightRouterState tree. Based on equivalent logic in
    // apply-router-state-patch-to-tree, but should confirm whether we need to
    // copy all of these fields. Not sure the server ever sends, e.g. the
    // refetch marker.
    clonedTree = [
        baseRouterState[0],
        newTreeChildren
    ];
    if (2 in baseRouterState) {
        const compressedRefreshState = baseRouterState[2];
        if (compressedRefreshState !== undefined && compressedRefreshState !== null) {
            // Since this part of the tree was patched with new data, any parent
            // refresh states should be updated to reflect the new rendered search
            // value. (The refresh state acts like a "context provider".) All pages
            // within the same server response share the same renderedSearch value,
            // but the same RouteTree could be composed from multiple different
            // routes, and multiple responses.
            clonedTree[2] = [
                compressedRefreshState[0],
                renderedSearch
            ];
        }
    }
    if (3 in baseRouterState) {
        clonedTree[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clonedTree[4] = baseRouterState[4];
    }
    // Clone the CacheNodeSeedData tree.
    const isEmptySeedDataPartial = true;
    clonedSeedData = [
        null,
        newSeedDataChildren,
        null,
        isEmptySeedDataPartial,
        null
    ];
    return {
        tree: clonedTree,
        data: clonedSeedData
    };
}
/**
 * Instant Navigation Testing API: ensures a prefetch task has been initiated
 * and completed before proceeding with the navigation. This guarantees that
 * segment data requests are at least pending, even for routes whose route
 * tree is already cached.
 *
 * After the prefetch completes, delegates to the normal navigation flow.
 */ async function ensurePrefetchThenNavigate(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType) {
    const link = (0, _links.getLinkForCurrentNavigation)();
    const fetchStrategy = link !== null ? link.fetchStrategy : _types.FetchStrategy.PPR;
    // Transition the cookie to captured-SPA immediately, before waiting
    // for the prefetch. This ensures the devtools panel can update its UI
    // right away, even if the prefetch takes time (e.g. dev compilation).
    // The "to" tree starts as null and is filled in after the prefetch
    // resolves and the navigation produces a new router state.
    const { transitionToCapturedSPA, updateCapturedSPAToTree } = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-ssr] (ecmascript)");
    transitionToCapturedSPA(currentFlightRouterState, null);
    const cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    await new Promise((resolve)=>{
        (0, _scheduler.schedulePrefetchTask)(cacheKey, currentFlightRouterState, fetchStrategy, _types.PrefetchPriority.Default, null, resolve // _onComplete callback
        );
    });
    // Prefetch is complete. Proceed with the normal navigation flow, which
    // will now find the route in the cache.
    const result = await navigateImpl(state, url, currentUrl, currentRenderedSearch, currentCacheNode, currentFlightRouterState, nextUrl, freshnessPolicy, scrollBehavior, navigateType);
    // Update the cookie with the resolved "to" tree so the devtools
    // panel can display both routes immediately.
    updateCapturedSPAToTree(currentFlightRouterState, result.tree);
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DYNAMIC_STALETIME_MS: null,
    STATIC_STALETIME_MS: null,
    navigateReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DYNAMIC_STALETIME_MS: function() {
        return DYNAMIC_STALETIME_MS;
    },
    STATIC_STALETIME_MS: function() {
        return STATIC_STALETIME_MS;
    },
    navigateReducer: function() {
        return navigateReducer;
    }
});
const _navigation = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-ssr] (ecmascript)");
const DYNAMIC_STALETIME_MS = Number(("TURBOPACK compile-time value", "0")) * 1000;
const STATIC_STALETIME_MS = (0, _cache.getStaleTimeMs)(Number(("TURBOPACK compile-time value", "300")));
function navigateReducer(state, action) {
    const { url, isExternalUrl, navigateType, scrollBehavior } = action;
    if (isExternalUrl) {
        return (0, _navigation.completeHardNavigation)(state, url, navigateType);
    }
    // Handles case where `<meta http-equiv="refresh">` tag is present,
    // which will trigger an MPA navigation.
    if (document.getElementById('__next-page-redirect')) {
        return (0, _navigation.completeHardNavigation)(state, url, navigateType);
    }
    // Temporary glue code between the router reducer and the new navigation
    // implementation. Eventually we'll rewrite the router reducer to a
    // state machine.
    const currentUrl = new URL(state.canonicalUrl, location.origin);
    const currentRenderedSearch = state.renderedSearch;
    return (0, _navigation.navigate)(state, url, currentUrl, currentRenderedSearch, state.cache, state.tree, state.nextUrl, _pprnavigations.FreshnessPolicy.Default, scrollBehavior, navigateType);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnknownDynamicStaleTime: null,
    computeDynamicStaleAt: null,
    invalidateBfCache: null,
    readFromBFCache: null,
    readFromBFCacheDuringRegularNavigation: null,
    updateBFCacheEntryStaleAt: null,
    writeHeadToBFCache: null,
    writeToBFCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnknownDynamicStaleTime: function() {
        return UnknownDynamicStaleTime;
    },
    computeDynamicStaleAt: function() {
        return computeDynamicStaleAt;
    },
    invalidateBfCache: function() {
        return invalidateBfCache;
    },
    readFromBFCache: function() {
        return readFromBFCache;
    },
    readFromBFCacheDuringRegularNavigation: function() {
        return readFromBFCacheDuringRegularNavigation;
    },
    updateBFCacheEntryStaleAt: function() {
        return updateBFCacheEntryStaleAt;
    },
    writeHeadToBFCache: function() {
        return writeHeadToBFCache;
    },
    writeToBFCache: function() {
        return writeToBFCache;
    }
});
const _navigatereducer = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const UnknownDynamicStaleTime = -1;
function computeDynamicStaleAt(now, dynamicStaleTimeSeconds) {
    return dynamicStaleTimeSeconds !== UnknownDynamicStaleTime ? now + dynamicStaleTimeSeconds * 1000 : now + _navigatereducer.DYNAMIC_STALETIME_MS;
}
const bfcacheMap = (0, _cachemap.createCacheMap)();
let currentBfCacheVersion = 0;
function invalidateBfCache() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function writeToBFCache(now, varyPath, rsc, prefetchRsc, head, prefetchHead, dynamicStaleAt) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const entry = undefined;
    const isRevalidation = undefined;
}
function writeHeadToBFCache(now, varyPath, head, prefetchHead, dynamicStaleAt) {
    // Read the special "segment" that represents the head data.
    writeToBFCache(now, varyPath, head, prefetchHead, null, null, dynamicStaleAt);
}
function updateBFCacheEntryStaleAt(varyPath, newStaleAt) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const isRevalidation = undefined;
    // Read with staleness bypass (-1) so we can update even stale entries
    const entry = undefined;
}
function readFromBFCache(varyPath) {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    const isRevalidation = undefined;
}
function readFromBFCacheDuringRegularNavigation(now, varyPath) {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
    const isRevalidation = undefined;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/dev/debug-channel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createDebugChannel: null,
    getOrCreateDebugChannelReadableWriterPair: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createDebugChannel: function() {
        return createDebugChannel;
    },
    getOrCreateDebugChannelReadableWriterPair: function() {
        return getOrCreateDebugChannelReadableWriterPair;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const pairs = new Map();
const DEBUG_CHANNEL_STORAGE_KEY_PREFIX = '__next_debug_channel:';
// Buffer for the initial document's debug channel data. Written to
// sessionStorage once complete so it can be restored when the browser serves
// the page from HTTP cache (back-forward navigation, tab duplication, etc.).
let initialDocumentDebugChunks = [];
function persistDebugChannelToSessionStorage(requestId) {
    const key = DEBUG_CHANNEL_STORAGE_KEY_PREFIX + requestId;
    const value = JSON.stringify(initialDocumentDebugChunks.map((chunk)=>{
        let binary = '';
        for(let i = 0; i < chunk.byteLength; i++){
            binary += String.fromCharCode(chunk[i]);
        }
        return btoa(binary);
    }));
    try {
        sessionStorage.setItem(key, value);
    } catch  {
        // Likely a quota error. Drop entries from previous documents in this tab
        // (we only need to restore the current one's entry on cache restore) and
        // retry once. If it still fails, skip silently — the location.reload()
        // fallback in createDebugChannel handles this case.
        for(let i = sessionStorage.length - 1; i >= 0; i--){
            const k = sessionStorage.key(i);
            if (k?.startsWith(DEBUG_CHANNEL_STORAGE_KEY_PREFIX) && k !== key) {
                sessionStorage.removeItem(k);
            }
        }
        try {
            sessionStorage.setItem(key, value);
        } catch  {}
    }
}
function wasServedFromCache() {
    try {
        // There is exactly one PerformanceNavigationTiming entry per page load.
        const entry = performance.getEntriesByType('navigation')[0];
        return entry?.transferSize === 0;
    } catch  {
        return false;
    }
}
function restoreDebugChannelFromSessionStorage(requestId) {
    try {
        const serializedData = sessionStorage.getItem(DEBUG_CHANNEL_STORAGE_KEY_PREFIX + requestId);
        if (!serializedData) {
            return undefined;
        }
        const chunks = JSON.parse(serializedData).map((base64)=>{
            const binary = atob(base64);
            const bytes = new Uint8Array(binary.length);
            for(let i = 0; i < binary.length; i++){
                bytes[i] = binary.charCodeAt(i);
            }
            return bytes;
        });
        return new ReadableStream({
            start (controller) {
                for (const chunk of chunks){
                    controller.enqueue(chunk);
                }
                controller.close();
            }
        });
    } catch  {
        return undefined;
    }
}
function getOrCreateDebugChannelReadableWriterPair(requestId) {
    let pair = pairs.get(requestId);
    if (!pair) {
        // Only buffer chunks for the initial document's debug channel, not for
        // client-side navigation requests.
        const shouldBuffer = requestId === self.__next_r;
        const { readable, writable } = new TransformStream({
            transform (chunk, controller) {
                if (shouldBuffer) {
                    initialDocumentDebugChunks.push(chunk.slice());
                }
                controller.enqueue(chunk);
            }
        });
        pair = {
            readable,
            writer: writable.getWriter()
        };
        pairs.set(requestId, pair);
        pair.writer.closed.then(()=>{
            if (shouldBuffer) {
                persistDebugChannelToSessionStorage(requestId);
            }
        }).finally(()=>pairs.delete(requestId));
    }
    return pair;
}
function createDebugChannel(requestHeaders) {
    let requestId;
    if (requestHeaders) {
        requestId = requestHeaders[_approuterheaders.NEXT_REQUEST_ID_HEADER] ?? undefined;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a ${JSON.stringify(_approuterheaders.NEXT_REQUEST_ID_HEADER)} request header.`), "__NEXT_ERROR_CODE", {
                value: "E854",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        requestId = self.__next_r;
        if (!requestId) {
            throw Object.defineProperty(new _invarianterror.InvariantError(`Expected a request ID to be defined for the document via self.__next_r.`), "__NEXT_ERROR_CODE", {
                value: "E806",
                enumerable: false,
                configurable: true
            });
        }
    }
    // Only attempt to restore the sessionStorage debug channel entry for the
    // initial document load (no request headers). Client-side navigations pass
    // request headers and should always use the WebSocket-backed debug channel.
    if (!requestHeaders && wasServedFromCache()) {
        const readable = restoreDebugChannelFromSessionStorage(requestId);
        if (readable) {
            return {
                readable
            };
        }
        // Debug channel can't be restored — debug deps would block hydration.
        // Force a fresh page load from the server. Return a never-closing stream
        // so the Flight client stays parked until the reload tears the document
        // down, instead of synchronously erroring with "Connection closed.".
        location.reload();
        return {
            readable: new ReadableStream()
        };
    }
    const { readable } = getOrCreateDebugChannelReadableWriterPair(requestId);
    return {
        readable
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    decodeStaticStage: null,
    fetchServerResponse: null,
    processFetch: null,
    resolveStaticStageData: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    decodeStaticStage: function() {
        return decodeStaticStage;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    },
    processFetch: function() {
        return processFetch;
    },
    resolveStaticStageData: function() {
        return resolveStaticStageData;
    }
});
const _client = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)");
const _setcachebustingsearchparam = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/set-cache-busting-search-param.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
const _navigationbuildid = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/navigation-build-id.js [app-ssr] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-ssr] (ecmascript)");
const createFromReadableStream = _client.createFromReadableStream;
const createFromFetch = _client.createFromFetch;
let createDebugChannel;
if ("TURBOPACK compile-time truthy", 1) {
    createDebugChannel = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/dev/debug-channel.js [app-ssr] (ecmascript)").createDebugChannel;
}
function doMpaNavigation(url) {
    return (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(url, location.origin)).toString();
}
let isPageUnloading = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)
    };
    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    // In static export mode, we need to modify the URL to request the .txt file,
    // but we should preserve the original URL for the canonical URL and error handling.
    const originalUrl = url;
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Typically, during a navigation, we decode the response using Flight's
        // `createFromFetch` API, which accepts a `fetch` promise.
        // TODO: Remove this check once the old PPR flag is removed
        const isLegacyPPR = ("TURBOPACK compile-time value", true) && !("TURBOPACK compile-time value", true);
        const shouldImmediatelyDecode = !isLegacyPPR;
        const res = await createFetch(url, headers, 'auto', shouldImmediatelyDecode);
        const responseUrl = (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(res.url));
        const canonicalUrl = res.redirected ? responseUrl : originalUrl;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!res.headers.get('vary')?.includes(_approuterheaders.NEXT_URL);
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        // TODO: This needs to happen in the Flight Client.
        // Or Webpack needs to include the runtime update in the Flight response as
        // a blocking script.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let flightResponsePromise = res.flightResponsePromise;
        if (flightResponsePromise === null) {
            // Typically, `createFetch` would have already started decoding the
            // Flight response. If it hasn't, though, we need to decode it now.
            // TODO: This should only be reachable if legacy PPR is enabled (i.e. PPR
            // without Cache Components). Remove this branch once legacy PPR
            // is deleted.
            flightResponsePromise = createFromNextReadableStream(res.body, headers, {
                allowPartialStream: postponed
            });
        }
        const [flightResponse, cacheData] = await Promise.all([
            flightResponsePromise,
            res.cacheData
        ]);
        if ((res.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? flightResponse.b) !== (0, _navigationbuildid.getNavigationBuildId)()) {
            // The server build does not match the client build.
            return doMpaNavigation(res.url);
        }
        const normalizedFlightData = (0, _flightdatahelpers.normalizeFlightData)(flightResponse.f);
        if (typeof normalizedFlightData === 'string') {
            return doMpaNavigation(normalizedFlightData);
        }
        const staticStageData = cacheData !== null ? await resolveStaticStageData(cacheData, flightResponse, headers) : null;
        return {
            flightData: normalizedFlightData,
            canonicalUrl: canonicalUrl,
            // TODO: We should be able to read this from the rewrite header, not the
            // Flight response. Theoretically they should always agree, but there are
            // currently some cases where it's incorrect for interception routes. We
            // can always trust the value in the response body. However, per-segment
            // prefetch responses don't embed the value in the body; they rely on the
            // header alone. So we need to investigate why the header is sometimes
            // wrong for interception routes.
            renderedSearch: flightResponse.q,
            couldBeIntercepted: interception,
            supportsPerSegmentPrefetching: flightResponse.S,
            postponed,
            // The dynamicStaleTime is only present in the response body when
            // a page exports unstable_dynamicStaleTime and this is a dynamic render.
            // When absent (UnknownDynamicStaleTime), the client falls back to the
            // global DYNAMIC_STALETIME_MS. The value is in seconds.
            dynamicStaleTime: flightResponse.d ?? _bfcache.UnknownDynamicStaleTime,
            staticStageData,
            runtimePrefetchStream: flightResponse.p ?? null,
            responseHeaders: res.headers,
            debugInfo: flightResponsePromise._debugInfo ?? null
        };
    } catch (err) {
        if (!isPageUnloading) {
            console.error(`Failed to fetch RSC payload for ${originalUrl}. Falling back to browser navigation.`, err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return originalUrl.toString();
    }
}
async function processFetch(response) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!response.body) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected RSC navigation response to have a body'), "__NEXT_ERROR_CODE", {
                value: "E1088",
                enumerable: false,
                configurable: true
            });
        }
        const { stream, isPartial } = await (0, _cache.stripIsPartialByte)(response.body);
        let responseStream;
        let cacheData;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            responseStream = stream;
            cacheData = {
                isResponsePartial: isPartial
            };
        }
        const strippedResponse = new Response(responseStream, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
        });
        // The Response constructor doesn't preserve `url` or `redirected` from
        // the original. We need both: `url` for React DevTools and `redirected`
        // for the redirect replay logic below.
        Object.defineProperty(strippedResponse, 'url', {
            value: response.url
        });
        Object.defineProperty(strippedResponse, 'redirected', {
            value: response.redirected
        });
        return {
            response: strippedResponse,
            cacheData
        };
    }
    //TURBOPACK unreachable
    ;
}
async function resolveStaticStageData(cacheData, flightResponse, headers) {
    const { isResponsePartial, responseBodyClone } = cacheData;
    if (responseBodyClone) {
        if (!isResponsePartial) {
            // Fully static — cache the entire decoded response as-is.
            responseBodyClone.cancel();
            return {
                response: flightResponse,
                isResponsePartial: false
            };
        }
        if (flightResponse.l !== undefined) {
            // Partially static — truncate the body clone at the byte boundary and
            // decode it.
            const response = await decodeStaticStage(responseBodyClone, flightResponse.l, headers);
            return {
                response,
                isResponsePartial: true
            };
        }
        // No caching — cancel the unused clone.
        responseBodyClone.cancel();
    }
    return null;
}
async function decodeStaticStage(responseBodyClone, staticStageByteLengthPromise, headers) {
    const staticStageByteLength = await staticStageByteLengthPromise;
    const truncatedStream = truncateStream(responseBodyClone, staticStageByteLength);
    return createFromNextReadableStream(truncatedStream, headers, {
        allowPartialStream: true
    });
}
async function createFetch(url, headers, fetchPriority, shouldImmediatelyDecode, signal) {
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const deploymentId = (0, _deploymentid.getDeploymentId)();
    if (deploymentId) {
        headers['x-deployment-id'] = deploymentId;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (self.__next_r) {
            headers[_approuterheaders.NEXT_HTML_REQUEST_ID_HEADER] = self.__next_r;
        }
        // Create a new request ID for the server action request. The server uses
        // this to tag debug information sent via WebSocket to the client, which
        // then routes those chunks to the debug channel associated with this ID.
        headers[_approuterheaders.NEXT_REQUEST_ID_HEADER] = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    }
    const fetchOptions = {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    };
    // `fetchUrl` is slightly different from `url` because we add a cache-busting
    // search param to it. This should not leak outside of this function, so we
    // track them separately.
    let fetchUrl = new URL(url);
    await (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    let processed = fetch(fetchUrl, fetchOptions).then(processFetch);
    let fetchPromise = processed.then(({ response })=>response);
    // Immediately pass the fetch promise to the Flight client so that the debug
    // info includes the latency from the client to the server. The internal timer
    // in React starts as soon as `createFromFetch` is called.
    //
    // The only case where we don't do this is during a prefetch, because a
    // top-level prefetch response never blocks a navigation; if it hasn't already
    // been written into the cache by the time the navigation happens, the router
    // will go straight to a dynamic request.
    let flightResponsePromise = shouldImmediatelyDecode ? createFromNextFetch(fetchPromise, headers) : null;
    let browserResponse = await fetchPromise;
    // If the server responds with a redirect (e.g. 307), and the redirected
    // location does not contain the cache busting search param set in the
    // original request, the response is likely invalid — when following the
    // redirect, the browser forwards the request headers, but since the cache
    // busting search param is missing, the server will reject the request due to
    // a mismatch.
    //
    // Ideally, we would be able to intercept the redirect response and perform it
    // manually, instead of letting the browser automatically follow it, but this
    // is not allowed by the fetch API.
    //
    // So instead, we must "replay" the redirect by fetching the new location
    // again, but this time we'll append the cache busting search param to prevent
    // a mismatch.
    //
    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
    // custom status code, to prevent the browser from automatically following it.
    //
    // This does not affect Server Action-based redirects; those are encoded
    // differently, as part of the Flight body. It only affects redirects that
    // occur in a middleware or a third-party proxy.
    let redirected = browserResponse.redirected;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Remove the cache busting search param from the response URL, to prevent it
    // from leaking outside of this function.
    const responseUrl = new URL(browserResponse.url, fetchUrl);
    responseUrl.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const rscResponse = {
        url: responseUrl.href,
        // This is true if any redirects occurred, either automatically by the
        // browser, or manually by us. So it's different from
        // `browserResponse.redirected`, which only tells us whether the browser
        // followed a redirect, and only for the last response in the chain.
        redirected,
        // These can be copied from the last browser response we received. We
        // intentionally only expose the subset of fields that are actually used
        // elsewhere in the codebase.
        ok: browserResponse.ok,
        headers: browserResponse.headers,
        body: browserResponse.body,
        status: browserResponse.status,
        // This is the exact promise returned by `createFromFetch`. It contains
        // debug information that we need to transfer to any derived promises that
        // are later rendered by React.
        flightResponsePromise: flightResponsePromise,
        cacheData: processed.then(({ cacheData })=>cacheData)
    };
    return rscResponse;
}
function createFromNextReadableStream(flightStream, requestHeaders, options) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders),
        unstable_allowPartialStream: options?.allowPartialStream
    });
}
function createFromNextFetch(promiseForResponse, requestHeaders) {
    return createFromFetch(promiseForResponse, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL,
        debugChannel: createDebugChannel && createDebugChannel(requestHeaders)
    });
}
function truncateStream(stream, byteLength) {
    const reader = stream.getReader();
    let remaining = byteLength;
    return new ReadableStream({
        async pull (controller) {
            if (remaining <= 0) {
                reader.cancel();
                controller.close();
                return;
            }
            const { done, value } = await reader.read();
            if (done) {
                controller.close();
                return;
            }
            if (value.byteLength <= remaining) {
                controller.enqueue(value);
                remaining -= value.byteLength;
            } else {
                controller.enqueue(value.subarray(0, remaining));
                remaining = 0;
                reader.cancel();
                controller.close();
            }
        },
        cancel () {
            reader.cancel();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createPromiseWithResolvers", {
    enumerable: true,
    get: function() {
        return createPromiseWithResolvers;
    }
});
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EntryStatus: null,
    attemptToFulfillDynamicSegmentFromBFCache: null,
    attemptToUpgradeSegmentFromBFCache: null,
    canNewFetchStrategyProvideMoreContent: null,
    convertReusedFlightRouterStateToRouteTree: null,
    convertRootFlightRouterStateToRouteTree: null,
    convertRouteTreeToFlightRouterState: null,
    createDetachedSegmentCacheEntry: null,
    createMetadataRouteTree: null,
    deprecated_requestOptimisticRouteCacheEntry: null,
    fetchInlinedSegmentsOnCacheMiss: null,
    fetchRouteOnCacheMiss: null,
    fetchSegmentOnCacheMiss: null,
    fetchSegmentPrefetchesUsingDynamicRequest: null,
    fulfillRouteCacheEntry: null,
    getCurrentRouteCacheVersion: null,
    getCurrentSegmentCacheVersion: null,
    getStaleAt: null,
    getStaleTimeMs: null,
    invalidateEntirePrefetchCache: null,
    invalidateRouteCacheEntries: null,
    invalidateSegmentCacheEntries: null,
    markRouteEntryAsDynamicRewrite: null,
    overwriteRevalidatingSegmentCacheEntry: null,
    pingInvalidationListeners: null,
    processRuntimePrefetchStream: null,
    readOrCreateRevalidatingSegmentEntry: null,
    readOrCreateRouteCacheEntry: null,
    readOrCreateSegmentCacheEntry: null,
    readRouteCacheEntry: null,
    readSegmentCacheEntry: null,
    stripIsPartialByte: null,
    upgradeToPendingSegment: null,
    upsertSegmentEntry: null,
    waitForSegmentCacheEntry: null,
    writeDynamicRenderResponseIntoCache: null,
    writeRouteIntoCache: null,
    writeStaticStageResponseIntoCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntryStatus: function() {
        return EntryStatus;
    },
    attemptToFulfillDynamicSegmentFromBFCache: function() {
        return attemptToFulfillDynamicSegmentFromBFCache;
    },
    attemptToUpgradeSegmentFromBFCache: function() {
        return attemptToUpgradeSegmentFromBFCache;
    },
    canNewFetchStrategyProvideMoreContent: function() {
        return canNewFetchStrategyProvideMoreContent;
    },
    convertReusedFlightRouterStateToRouteTree: function() {
        return convertReusedFlightRouterStateToRouteTree;
    },
    convertRootFlightRouterStateToRouteTree: function() {
        return convertRootFlightRouterStateToRouteTree;
    },
    convertRouteTreeToFlightRouterState: function() {
        return convertRouteTreeToFlightRouterState;
    },
    createDetachedSegmentCacheEntry: function() {
        return createDetachedSegmentCacheEntry;
    },
    createMetadataRouteTree: function() {
        return createMetadataRouteTree;
    },
    deprecated_requestOptimisticRouteCacheEntry: function() {
        return deprecated_requestOptimisticRouteCacheEntry;
    },
    fetchInlinedSegmentsOnCacheMiss: function() {
        return fetchInlinedSegmentsOnCacheMiss;
    },
    fetchRouteOnCacheMiss: function() {
        return fetchRouteOnCacheMiss;
    },
    fetchSegmentOnCacheMiss: function() {
        return fetchSegmentOnCacheMiss;
    },
    fetchSegmentPrefetchesUsingDynamicRequest: function() {
        return fetchSegmentPrefetchesUsingDynamicRequest;
    },
    fulfillRouteCacheEntry: function() {
        return fulfillRouteCacheEntry;
    },
    getCurrentRouteCacheVersion: function() {
        return getCurrentRouteCacheVersion;
    },
    getCurrentSegmentCacheVersion: function() {
        return getCurrentSegmentCacheVersion;
    },
    getStaleAt: function() {
        return getStaleAt;
    },
    getStaleTimeMs: function() {
        return getStaleTimeMs;
    },
    invalidateEntirePrefetchCache: function() {
        return invalidateEntirePrefetchCache;
    },
    invalidateRouteCacheEntries: function() {
        return invalidateRouteCacheEntries;
    },
    invalidateSegmentCacheEntries: function() {
        return invalidateSegmentCacheEntries;
    },
    markRouteEntryAsDynamicRewrite: function() {
        return markRouteEntryAsDynamicRewrite;
    },
    overwriteRevalidatingSegmentCacheEntry: function() {
        return overwriteRevalidatingSegmentCacheEntry;
    },
    pingInvalidationListeners: function() {
        return pingInvalidationListeners;
    },
    processRuntimePrefetchStream: function() {
        return processRuntimePrefetchStream;
    },
    readOrCreateRevalidatingSegmentEntry: function() {
        return readOrCreateRevalidatingSegmentEntry;
    },
    readOrCreateRouteCacheEntry: function() {
        return readOrCreateRouteCacheEntry;
    },
    readOrCreateSegmentCacheEntry: function() {
        return readOrCreateSegmentCacheEntry;
    },
    readRouteCacheEntry: function() {
        return readRouteCacheEntry;
    },
    readSegmentCacheEntry: function() {
        return readSegmentCacheEntry;
    },
    stripIsPartialByte: function() {
        return stripIsPartialByte;
    },
    upgradeToPendingSegment: function() {
        return upgradeToPendingSegment;
    },
    upsertSegmentEntry: function() {
        return upsertSegmentEntry;
    },
    waitForSegmentCacheEntry: function() {
        return waitForSegmentCacheEntry;
    },
    writeDynamicRenderResponseIntoCache: function() {
        return writeDynamicRenderResponseIntoCache;
    },
    writeRouteIntoCache: function() {
        return writeRouteIntoCache;
    },
    writeStaticStageResponseIntoCache: function() {
        return writeStaticStageResponseIntoCache;
    }
});
const _varyparamsdecoding = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.js [app-ssr] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/app-router-headers.js [app-ssr] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _varypath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/vary-path.js [app-ssr] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/route-params.js [app-ssr] (ecmascript)");
const _cachemap = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-map.js [app-ssr] (ecmascript)");
const _segmentvalueencoding = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js [app-ssr] (ecmascript)");
const _flightdatahelpers = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/flight-data-helpers.js [app-ssr] (ecmascript)");
const _navigatereducer = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/reducers/navigate-reducer.js [app-ssr] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _promisewithresolvers = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/promise-with-resolvers.js [app-ssr] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/bfcache.js [app-ssr] (ecmascript)");
const _optimisticroutes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/optimistic-routes.js [app-ssr] (ecmascript)");
const _navigation = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation.js [app-ssr] (ecmascript)");
const _navigationbuildid = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/navigation-build-id.js [app-ssr] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/lib/constants.js [app-ssr] (ecmascript)");
function getStaleTimeMs(staleTimeSeconds) {
    return Math.max(staleTimeSeconds, 30) * 1000;
}
var EntryStatus = /*#__PURE__*/ function(EntryStatus) {
    EntryStatus[EntryStatus["Empty"] = 0] = "Empty";
    EntryStatus[EntryStatus["Pending"] = 1] = "Pending";
    EntryStatus[EntryStatus["Fulfilled"] = 2] = "Fulfilled";
    EntryStatus[EntryStatus["Rejected"] = 3] = "Rejected";
    return EntryStatus;
}({});
const isOutputExportMode = ("TURBOPACK compile-time value", "development") === 'production' && ("TURBOPACK compile-time value", void 0) === 'export';
const MetadataOnlyRequestTree = [
    '',
    {},
    null,
    'metadata-only'
];
let routeCacheMap = (0, _cachemap.createCacheMap)();
let segmentCacheMap = (0, _cachemap.createCacheMap)();
// All invalidation listeners for the whole cache are tracked in single set.
// Since we don't yet support tag or path-based invalidation, there's no point
// tracking them any more granularly than this. Once we add granular
// invalidation, that may change, though generally the model is to just notify
// the listeners and allow the caller to poll the prefetch cache with a new
// prefetch task if desired.
let invalidationListeners = null;
// Incrementing counters used to track cache invalidations. Route and segment
// caches have separate versions so they can be invalidated independently.
// Invalidation does not eagerly evict anything from the cache; entries are
// lazily evicted when read.
let currentRouteCacheVersion = 0;
let currentSegmentCacheVersion = 0;
function getCurrentRouteCacheVersion() {
    return currentRouteCacheVersion;
}
function getCurrentSegmentCacheVersion() {
    return currentSegmentCacheVersion;
}
function invalidateEntirePrefetchCache(nextUrl, tree) {
    currentRouteCacheVersion++;
    currentSegmentCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function invalidateRouteCacheEntries(nextUrl, tree) {
    currentRouteCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function invalidateSegmentCacheEntries(nextUrl, tree) {
    currentSegmentCacheVersion++;
    (0, _links.pingVisibleLinks)(nextUrl, tree);
    pingInvalidationListeners(nextUrl, tree);
}
function attachInvalidationListener(task) {
    // This function is called whenever a prefetch task reads a cache entry. If
    // the task has an onInvalidate function associated with it — i.e. the one
    // optionally passed to router.prefetch(onInvalidate) — then we attach that
    // listener to the every cache entry that the task reads. Then, if an entry
    // is invalidated, we call the function.
    if (task.onInvalidate !== null) {
        if (invalidationListeners === null) {
            invalidationListeners = new Set([
                task
            ]);
        } else {
            invalidationListeners.add(task);
        }
    }
}
function notifyInvalidationListener(task) {
    const onInvalidate = task.onInvalidate;
    if (onInvalidate !== null) {
        // Clear the callback from the task object to guarantee it's not called more
        // than once.
        task.onInvalidate = null;
        // This is a user-space function, so we must wrap in try/catch.
        try {
            onInvalidate();
        } catch (error) {
            if (typeof reportError === 'function') {
                reportError(error);
            } else {
                console.error(error);
            }
        }
    }
}
function pingInvalidationListeners(nextUrl, tree) {
    // The rough equivalent of pingVisibleLinks, but for onInvalidate callbacks.
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    if (invalidationListeners !== null) {
        const tasks = invalidationListeners;
        invalidationListeners = null;
        for (const task of tasks){
            if ((0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
                notifyInvalidationListener(task);
            }
        }
    }
}
function readRouteCacheEntry(now, key) {
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    const existingEntry = (0, _cachemap.getFromCacheMap)(now, getCurrentRouteCacheVersion(), routeCacheMap, varyPath, isRevalidation);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // No cache hit. Attempt to construct from template using the new
    // optimistic routing mechanism (pattern-based matching).
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
function readSegmentCacheEntry(now, varyPath) {
    const isRevalidation = false;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentSegmentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function readRevalidatingSegmentCacheEntry(now, varyPath) {
    const isRevalidation = true;
    return (0, _cachemap.getFromCacheMap)(now, getCurrentSegmentCacheVersion(), segmentCacheMap, varyPath, isRevalidation);
}
function waitForSegmentCacheEntry(pendingEntry) {
    // Because the entry is pending, there's already a in-progress request.
    // Attach a promise to the entry that will resolve when the server responds.
    let promiseWithResolvers = pendingEntry.promise;
    if (promiseWithResolvers === null) {
        promiseWithResolvers = pendingEntry.promise = (0, _promisewithresolvers.createPromiseWithResolvers)();
    } else {
    // There's already a promise we can use
    }
    return promiseWithResolvers.promise;
}
function createDetachedRouteCacheEntry() {
    return {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        metadata: null,
        // This is initialized to true because we don't know yet whether the route
        // could be intercepted. It's only set to false once we receive a response
        // from the server.
        couldBeIntercepted: true,
        // Similarly, we don't yet know if the route supports PPR.
        supportsPerSegmentPrefetching: false,
        renderedSearch: null,
        // Map-related fields
        ref: null,
        size: 0,
        // Since this is an empty entry, there's no reason to ever evict it. It will
        // be updated when the data is populated.
        staleAt: Infinity,
        version: getCurrentRouteCacheVersion()
    };
}
function readOrCreateRouteCacheEntry(now, task, key) {
    attachInvalidationListener(task);
    const existingEntry = readRouteCacheEntry(now, key);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const pendingEntry = createDetachedRouteCacheEntry();
    const varyPath = (0, _varypath.getRouteVaryPath)(key.pathname, key.search, key.nextUrl);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, pendingEntry, isRevalidation);
    return pendingEntry;
}
function deprecated_requestOptimisticRouteCacheEntry(now, requestedUrl, nextUrl) {
    // This function is called during a navigation when there was no matching
    // route tree in the prefetch cache. Before de-opting to a blocking,
    // unprefetched navigation, we will first attempt to construct an "optimistic"
    // route tree by checking the cache for similar routes.
    //
    // Check if there's a route with the same pathname, but with different
    // search params. We can then base our optimistic route tree on this entry.
    //
    // Conceptually, we are simulating what would happen if we did perform a
    // prefetch the requested URL, under the assumption that the server will
    // not redirect or rewrite the request in a different manner than the
    // base route tree. This assumption might not hold, in which case we'll have
    // to recover when we perform the dynamic navigation request. However, this
    // is what would happen if a route were dynamically rewritten/redirected
    // in between the prefetch and the navigation. So the logic needs to exist
    // to handle this case regardless.
    // Look for a route with the same pathname, but with an empty search string.
    // TODO: There's nothing inherently special about the empty search string;
    // it's chosen somewhat arbitrarily, with the rationale that it's the most
    // likely one to exist. But we should update this to match _any_ search
    // string. The plan is to generalize this logic alongside other improvements
    // related to "fallback" cache entries.
    const requestedSearch = requestedUrl.search;
    if (requestedSearch === '') {
        // The caller would have already checked if a route with an empty search
        // string is in the cache. So we can bail out here.
        return null;
    }
    const urlWithoutSearchParams = new URL(requestedUrl);
    urlWithoutSearchParams.search = '';
    const routeWithNoSearchParams = readRouteCacheEntry(now, (0, _cachekey.createCacheKey)(urlWithoutSearchParams.href, nextUrl));
    if (routeWithNoSearchParams === null || routeWithNoSearchParams.status !== 2) {
        // Bail out of constructing an optimistic route tree. This will result in
        // a blocking, unprefetched navigation.
        return null;
    }
    // Now we have a base route tree we can "patch" with our optimistic values.
    // Optimistically assume that redirects for the requested pathname do
    // not vary on the search string. Therefore, if the base route was
    // redirected to a different search string, then the optimistic route
    // should be redirected to the same search string. Otherwise, we use
    // the requested search string.
    const canonicalUrlForRouteWithNoSearchParams = new URL(routeWithNoSearchParams.canonicalUrl, requestedUrl.origin);
    const optimisticCanonicalSearch = canonicalUrlForRouteWithNoSearchParams.search !== '' ? canonicalUrlForRouteWithNoSearchParams.search : requestedSearch;
    // Similarly, optimistically assume that rewrites for the requested
    // pathname do not vary on the search string. Therefore, if the base
    // route was rewritten to a different search string, then the optimistic
    // route should be rewritten to the same search string. Otherwise, we use
    // the requested search string.
    const optimisticRenderedSearch = routeWithNoSearchParams.renderedSearch !== '' ? routeWithNoSearchParams.renderedSearch : requestedSearch;
    const optimisticUrl = new URL(routeWithNoSearchParams.canonicalUrl, location.origin);
    optimisticUrl.search = optimisticCanonicalSearch;
    const optimisticCanonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(optimisticUrl);
    const optimisticRouteTree = deprecated_createOptimisticRouteTree(routeWithNoSearchParams.tree, optimisticRenderedSearch);
    const optimisticMetadataTree = deprecated_createOptimisticRouteTree(routeWithNoSearchParams.metadata, optimisticRenderedSearch);
    // Clone the base route tree, and override the relevant fields with our
    // optimistic values.
    const optimisticEntry = {
        canonicalUrl: optimisticCanonicalUrl,
        status: 2,
        // This isn't cloned because it's instance-specific
        blockedTasks: null,
        tree: optimisticRouteTree,
        metadata: optimisticMetadataTree,
        couldBeIntercepted: routeWithNoSearchParams.couldBeIntercepted,
        supportsPerSegmentPrefetching: routeWithNoSearchParams.supportsPerSegmentPrefetching,
        hasDynamicRewrite: routeWithNoSearchParams.hasDynamicRewrite,
        // Override the rendered search with the optimistic value.
        renderedSearch: optimisticRenderedSearch,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt: routeWithNoSearchParams.staleAt,
        version: routeWithNoSearchParams.version
    };
    // Do not insert this entry into the cache. It only exists so we can
    // perform the current navigation. Just return it to the caller.
    return optimisticEntry;
}
function deprecated_createOptimisticRouteTree(tree, newRenderedSearch) {
    // Create a new route tree that identical to the original one except for
    // the rendered search string, which is contained in the vary path.
    let clonedSlots = null;
    const originalSlots = tree.slots;
    if (originalSlots !== null) {
        clonedSlots = {};
        for(const parallelRouteKey in originalSlots){
            const childTree = originalSlots[parallelRouteKey];
            clonedSlots[parallelRouteKey] = deprecated_createOptimisticRouteTree(childTree, newRenderedSearch);
        }
    }
    // We only need to clone the vary path if the route is a page.
    if (tree.isPage) {
        return {
            requestKey: tree.requestKey,
            segment: tree.segment,
            refreshState: tree.refreshState,
            varyPath: (0, _varypath.clonePageVaryPathWithNewSearchParams)(tree.varyPath, newRenderedSearch),
            isPage: true,
            slots: clonedSlots,
            prefetchHints: tree.prefetchHints
        };
    }
    return {
        requestKey: tree.requestKey,
        segment: tree.segment,
        refreshState: tree.refreshState,
        varyPath: tree.varyPath,
        isPage: false,
        slots: clonedSlots,
        prefetchHints: tree.prefetchHints
    };
}
function readOrCreateSegmentCacheEntry(now, fetchStrategy, tree) {
    const existingEntry = readSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache. The stale time is set to a
    // default value; the actual stale time will be set when the entry is
    // fulfilled with data from the server response.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(now);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function readOrCreateRevalidatingSegmentEntry(now, fetchStrategy, tree) {
    // This function is called when we've already confirmed that a particular
    // segment is cached, but we want to perform another request anyway in case it
    // returns more complete and/or fresher data than we already have. The logic
    // for deciding whether to replace the existing entry is handled elsewhere;
    // this function just handles retrieving a cache entry that we can use to
    // track the revalidation.
    //
    // The reason revalidations are stored in the cache is because we need to be
    // able to dedupe multiple revalidation requests. The reason they have to be
    // handled specially is because we shouldn't overwrite a "normal" entry if
    // one exists at the same keypath. So, for each internal cache location, there
    // is a special "revalidation" slot that is used solely for this purpose.
    //
    // You can think of it as if all the revalidation entries were stored in a
    // separate cache map from the canonical entries, and then transfered to the
    // canonical cache map once the request is complete — this isn't how it's
    // actually implemented, since it's more efficient to store them in the same
    // data structure as the normal entries, but that's how it's modeled
    // conceptually.
    // TODO: Once we implement Fallback behavior for params, where an entry is
    // re-keyed based on response information, we'll need to account for the
    // possibility that the keypath of the previous entry is more generic than
    // the keypath of the revalidating entry. In other words, the server could
    // return a less generic entry upon revalidation. For now, though, this isn't
    // a concern because the keypath is based solely on the prefetch strategy,
    // not on data contained in the response.
    const existingEntry = readRevalidatingSegmentCacheEntry(now, tree.varyPath);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache. The stale time is set to a
    // default value; the actual stale time will be set when the entry is
    // fulfilled with data from the server response.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(now);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function overwriteRevalidatingSegmentCacheEntry(now, fetchStrategy, tree) {
    // This function is called when we've already decided to replace an existing
    // revalidation entry. Create a new entry and write it into the cache,
    // overwriting the previous value. The stale time is set to a default value;
    // the actual stale time will be set when the entry is fulfilled with data
    // from the server response.
    const varyPathForRequest = (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
    const pendingEntry = createDetachedSegmentCacheEntry(now);
    const isRevalidation = true;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPathForRequest, pendingEntry, isRevalidation);
    return pendingEntry;
}
function upsertSegmentEntry(now, varyPath, candidateEntry) {
    // We have a new entry that has not yet been inserted into the cache. Before
    // we do so, we need to confirm whether it takes precedence over the existing
    // entry (if one exists).
    // TODO: We should not upsert an entry if its key was invalidated in the time
    // since the request was made. We can do that by passing the "owner" entry to
    // this function and confirming it's the same as `existingEntry`.
    if ((0, _cachemap.isValueExpired)(now, getCurrentSegmentCacheVersion(), candidateEntry)) {
        // The entry is expired. We cannot upsert it.
        return null;
    }
    const existingEntry = readSegmentCacheEntry(now, varyPath);
    if (existingEntry !== null) {
        // Don't replace a more specific segment with a less-specific one. A case where this
        // might happen is if the existing segment was fetched via
        // `<Link prefetch={true}>`.
        if (// than the segment we already have in the cache, so it can't have more content.
        candidateEntry.fetchStrategy !== existingEntry.fetchStrategy && !canNewFetchStrategyProvideMoreContent(existingEntry.fetchStrategy, candidateEntry.fetchStrategy) || // The existing entry isn't partial, but the new one is.
        // (TODO: can this be true if `candidateEntry.fetchStrategy >= existingEntry.fetchStrategy`?)
        !existingEntry.isPartial && candidateEntry.isPartial) {
            // We're going to leave revalidating entry in the cache so that it doesn't
            // get revalidated again unnecessarily. Downgrade the Fulfilled entry to
            // Rejected and null out the data so it can be garbage collected. We leave
            // `staleAt` intact to prevent subsequent revalidation attempts only until
            // the entry expires.
            const rejectedEntry = candidateEntry;
            rejectedEntry.status = 3;
            rejectedEntry.rsc = null;
            return null;
        }
        // Evict the existing entry from the cache.
        (0, _cachemap.deleteFromCacheMap)(existingEntry);
    }
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(segmentCacheMap, varyPath, candidateEntry, isRevalidation);
    return candidateEntry;
}
function createDetachedSegmentCacheEntry(now) {
    // Default stale time for pending segment cache entries. The actual stale time
    // is set when the entry is fulfilled with data from the server response.
    const staleAt = now + 30 * 1000;
    const emptyEntry = {
        status: 0,
        // Default to assuming the fetch strategy will be PPR. This will be updated
        // when a fetch is actually initiated.
        fetchStrategy: _types.FetchStrategy.PPR,
        rsc: null,
        isPartial: true,
        promise: null,
        // Map-related fields
        ref: null,
        size: 0,
        staleAt,
        version: 0
    };
    return emptyEntry;
}
function upgradeToPendingSegment(emptyEntry, fetchStrategy) {
    const pendingEntry = emptyEntry;
    pendingEntry.status = 1;
    pendingEntry.fetchStrategy = fetchStrategy;
    if (fetchStrategy === _types.FetchStrategy.Full) {
        // We can assume the response will contain the full segment data. Set this
        // to false so we know it's OK to omit this segment from any navigation
        // requests that may happen while the data is still pending.
        pendingEntry.isPartial = false;
    }
    // Set the version here, since this is right before the request is initiated.
    // The next time the segment cache version is incremented, the entry will
    // effectively be evicted. This happens before initiating the request, rather
    // than when receiving the response, because it's guaranteed to happen
    // before the data is read on the server.
    pendingEntry.version = getCurrentSegmentCacheVersion();
    return pendingEntry;
}
function attemptToFulfillDynamicSegmentFromBFCache(now, segment, tree) {
    // Attempts to fulfill an empty segment cache entry using data from the
    // bfcache. This is only valid during a Full prefetch (i.e. one that includes
    // dynamic data), because the bfcache stores data from navigations which
    // always include dynamic data.
    // We always use the canonical vary path when checking the bfcache. This is
    // the same operation we'd use to access the cache during a
    // regular navigation.
    const varyPath = tree.varyPath;
    // Read from the BFCache without expiring it (pass -1). We check freshness
    // ourselves using navigatedAt, because the BFCache's staleAt may have been
    // overridden by a per-page unstable_dynamicStaleTime and can't be used to
    // derive the original request time.
    const bfcacheEntry = (0, _bfcache.readFromBFCache)(varyPath);
    if (bfcacheEntry !== null) {
        // The stale time for dynamic prefetches (default: 5 mins) is different
        // from the stale time for regular navigations (default: 0 secs). Use
        // navigatedAt to compute the correct expiry for prefetch purposes.
        const dynamicPrefetchStaleAt = bfcacheEntry.navigatedAt + _navigatereducer.STATIC_STALETIME_MS;
        if (now > dynamicPrefetchStaleAt) {
            return null;
        }
        const pendingSegment = upgradeToPendingSegment(segment, _types.FetchStrategy.Full);
        const isPartial = false;
        return fulfillSegmentCacheEntry(pendingSegment, bfcacheEntry.rsc, dynamicPrefetchStaleAt, isPartial);
    }
    return null;
}
function attemptToUpgradeSegmentFromBFCache(now, tree) {
    const varyPath = tree.varyPath;
    const bfcacheEntry = (0, _bfcache.readFromBFCache)(varyPath);
    if (bfcacheEntry !== null) {
        const dynamicPrefetchStaleAt = bfcacheEntry.navigatedAt + _navigatereducer.STATIC_STALETIME_MS;
        if (now > dynamicPrefetchStaleAt) {
            return null;
        }
        const pendingSegment = upgradeToPendingSegment(createDetachedSegmentCacheEntry(now), _types.FetchStrategy.Full);
        const isPartial = false;
        const newEntry = fulfillSegmentCacheEntry(pendingSegment, bfcacheEntry.rsc, dynamicPrefetchStaleAt, isPartial);
        const segmentVaryPath = (0, _varypath.getSegmentVaryPathForRequest)(_types.FetchStrategy.Full, tree);
        const upserted = upsertSegmentEntry(now, segmentVaryPath, newEntry);
        if (upserted !== null && upserted.status === 2) {
            return upserted;
        }
    }
    return null;
}
function pingBlockedTasks(entry) {
    const blockedTasks = entry.blockedTasks;
    if (blockedTasks !== null) {
        for (const task of blockedTasks){
            (0, _scheduler.pingPrefetchTask)(task);
        }
        entry.blockedTasks = null;
    }
}
function createMetadataRouteTree(metadataVaryPath) {
    // The Head is not actually part of the route tree, but other than that, it's
    // fetched and cached like a segment. Some functions expect a RouteTree
    // object, so rather than fork the logic in all those places, we use this
    // "fake" one.
    const metadata = {
        requestKey: _segmentvalueencoding.HEAD_REQUEST_KEY,
        segment: _segmentvalueencoding.HEAD_REQUEST_KEY,
        refreshState: null,
        varyPath: metadataVaryPath,
        // The metadata isn't really a "page" (though it isn't really a "segment"
        // either) but for the purposes of how this field is used, it behaves like
        // one. If this logic ever gets more complex we can change this to an enum.
        isPage: true,
        slots: null,
        prefetchHints: 0
    };
    return metadata;
}
function fulfillRouteCacheEntry(now, entry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching) {
    // Get the rendered search from the vary path
    const renderedSearch = (0, _varypath.getRenderedSearchFromVaryPath)(metadataVaryPath) ?? '';
    const fulfilledEntry = entry;
    fulfilledEntry.status = 2;
    fulfilledEntry.tree = tree;
    fulfilledEntry.metadata = createMetadataRouteTree(metadataVaryPath);
    // Route structure is essentially static — it only changes on deploy.
    // Always use the static stale time.
    // NOTE: An exception is rewrites/redirects in middleware or proxy, which can
    // change routes dynamically. We have other strategies for handling those.
    fulfilledEntry.staleAt = now + _navigatereducer.STATIC_STALETIME_MS;
    fulfilledEntry.couldBeIntercepted = couldBeIntercepted;
    fulfilledEntry.canonicalUrl = canonicalUrl;
    fulfilledEntry.renderedSearch = renderedSearch;
    fulfilledEntry.supportsPerSegmentPrefetching = supportsPerSegmentPrefetching;
    fulfilledEntry.hasDynamicRewrite = false;
    pingBlockedTasks(entry);
    return fulfilledEntry;
}
function writeRouteIntoCache(now, pathname, nextUrl, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching) {
    const pendingEntry = createDetachedRouteCacheEntry();
    const fulfilledEntry = fulfillRouteCacheEntry(now, pendingEntry, tree, metadataVaryPath, couldBeIntercepted, canonicalUrl, supportsPerSegmentPrefetching);
    const renderedSearch = fulfilledEntry.renderedSearch;
    const varyPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, renderedSearch, nextUrl, couldBeIntercepted);
    const isRevalidation = false;
    (0, _cachemap.setInCacheMap)(routeCacheMap, varyPath, fulfilledEntry, isRevalidation);
    return fulfilledEntry;
}
function markRouteEntryAsDynamicRewrite(entry) {
    entry.hasDynamicRewrite = true;
// Note: The caller is responsible for also calling invalidateRouteCacheEntries
// to invalidate other entries that may have been derived from this template
// before we knew it had a dynamic rewrite.
}
function fulfillSegmentCacheEntry(segmentCacheEntry, rsc, staleAt, isPartial) {
    const fulfilledEntry = segmentCacheEntry;
    fulfilledEntry.status = 2;
    fulfilledEntry.rsc = rsc;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.isPartial = isPartial;
    // Resolve any listeners that were waiting for this data.
    if (segmentCacheEntry.promise !== null) {
        segmentCacheEntry.promise.resolve(fulfilledEntry);
        // Free the promise for garbage collection.
        fulfilledEntry.promise = null;
    }
    return fulfilledEntry;
}
function rejectRouteCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    pingBlockedTasks(entry);
}
function rejectSegmentCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    if (entry.promise !== null) {
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function convertRootTreePrefetchToRouteTree(rootTree, renderedPathname, renderedSearch, acc) {
    // Remove trailing and leading slashes
    const pathnameParts = renderedPathname.split('/').filter((p)=>p !== '');
    const index = 0;
    const rootSegment = _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY;
    return convertTreePrefetchToRouteTree(rootTree.tree, rootSegment, null, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, pathnameParts, index, renderedSearch, acc);
}
function convertTreePrefetchToRouteTree(prefetch, segment, partialVaryPath, requestKey, pathnameParts, pathnamePartsIndex, renderedSearch, acc) {
    // Converts the route tree sent by the server into the format used by the
    // cache. The cached version of the tree includes additional fields, such as a
    // cache key for each segment. Since this is frequently accessed, we compute
    // it once instead of on every access. This same cache key is also used to
    // request the segment from the server.
    let slots = null;
    let isPage;
    let varyPath;
    const prefetchSlots = prefetch.slots;
    if (prefetchSlots !== null) {
        isPage = false;
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        slots = {};
        for(let parallelRouteKey in prefetchSlots){
            const childPrefetch = prefetchSlots[parallelRouteKey];
            const childSegmentName = childPrefetch.name;
            const childParam = childPrefetch.param;
            let childDoesAppearInURL;
            let childSegment;
            let childPartialVaryPath;
            if (childParam !== null) {
                // This segment is parameterized. Get the param from the pathname.
                const childParamValue = (0, _routeparams.parseDynamicParamFromURLPart)(childParam.type, pathnameParts, pathnamePartsIndex);
                // Assign a cache key to the segment, based on the param value. In the
                // pre-Segment Cache implementation, the server computes this and sends
                // it in the body of the response. In the Segment Cache implementation,
                // the server sends an empty string and we fill it in here.
                // TODO: We're intentionally not adding the search param to page
                // segments here; it's tracked separately and added back during a read.
                // This would clearer if we waited to construct the segment until it's
                // read from the cache, since that's effectively what we're
                // doing anyway.
                const childParamKey = // cacheComponents is enabled.
                childParam.key !== null ? childParam.key : (0, _routeparams.getCacheKeyForDynamicParam)(childParamValue, '');
                childPartialVaryPath = (0, _varypath.appendLayoutVaryPath)(partialVaryPath, childParamKey, childSegmentName);
                childSegment = [
                    childSegmentName,
                    childParamKey,
                    childParam.type,
                    childParam.siblings
                ];
                childDoesAppearInURL = true;
            } else {
                // This segment does not have a param. Inherit the partial vary path of
                // the parent.
                childPartialVaryPath = partialVaryPath;
                childSegment = childSegmentName;
                childDoesAppearInURL = (0, _routeparams.doesStaticSegmentAppearInURL)(childSegmentName);
            }
            // Only increment the index if the segment appears in the URL. If it's a
            // "virtual" segment, like a route group, it remains the same.
            const childPathnamePartsIndex = childDoesAppearInURL ? pathnamePartsIndex + 1 : pathnamePartsIndex;
            const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
            const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
            slots[parallelRouteKey] = convertTreePrefetchToRouteTree(childPrefetch, childSegment, childPartialVaryPath, childRequestKey, pathnameParts, childPathnamePartsIndex, renderedSearch, acc);
        }
    } else {
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    return {
        requestKey,
        segment,
        refreshState: null,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        varyPath: varyPath,
        isPage: isPage,
        slots,
        prefetchHints: prefetch.prefetchHints
    };
}
function convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc) {
    return convertFlightRouterStateToRouteTree(flightRouterState, _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY, null, renderedSearch, acc);
}
function convertReusedFlightRouterStateToRouteTree(parentRouteTree, parallelRouteKey, flightRouterState, renderedSearch, acc) {
    // Create a RouteTree for a FlightRouterState that was reused from an older
    // route. This happens during a navigation when a parallel route slot does not
    // match the target route; we reuse whatever slot was already active.
    // Unlike a FlightRouterState, the RouteTree type contains backreferences to
    // the parent segments. Append the vary path to the parent's vary path.
    const parentPartialVaryPath = parentRouteTree.isPage ? (0, _varypath.getPartialPageVaryPath)(parentRouteTree.varyPath) : (0, _varypath.getPartialLayoutVaryPath)(parentRouteTree.varyPath);
    const segment = flightRouterState[0];
    // And the request key.
    const parentRequestKey = parentRouteTree.requestKey;
    const requestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(segment);
    const requestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(parentRequestKey, parallelRouteKey, requestKeyPart);
    return convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, renderedSearch, acc);
}
function convertFlightRouterStateToRouteTree(flightRouterState, requestKey, parentPartialVaryPath, parentRenderedSearch, acc) {
    const originalSegment = flightRouterState[0];
    // If the FlightRouterState has a refresh state, then this segment is part of
    // an inactive parallel route. It has a different rendered search query than
    // the outer parent route. In order to construct the inactive route correctly,
    // we must restore the query that was originally used to render it.
    const compressedRefreshState = flightRouterState[2] ?? null;
    const refreshState = compressedRefreshState !== null ? {
        canonicalUrl: compressedRefreshState[0],
        renderedSearch: compressedRefreshState[1]
    } : null;
    const renderedSearch = refreshState !== null ? refreshState.renderedSearch : parentRenderedSearch;
    let segment;
    let partialVaryPath;
    let isPage;
    let varyPath;
    if (Array.isArray(originalSegment)) {
        isPage = false;
        const paramCacheKey = originalSegment[1];
        const paramName = originalSegment[0];
        partialVaryPath = (0, _varypath.appendLayoutVaryPath)(parentPartialVaryPath, paramCacheKey, paramName);
        varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        segment = originalSegment;
    } else {
        // This segment does not have a param. Inherit the partial vary path of
        // the parent.
        partialVaryPath = parentPartialVaryPath;
        if (requestKey.endsWith(_segment.PAGE_SEGMENT_KEY)) {
            // This is a page segment.
            isPage = true;
            // The navigation implementation expects the search params to be included
            // in the segment. However, in the case of a static response, the search
            // params are omitted. So the client needs to add them back in when reading
            // from the Segment Cache.
            //
            // For consistency, we'll do this for dynamic responses, too.
            //
            // TODO: We should move search params out of FlightRouterState and handle
            // them entirely on the client, similar to our plan for dynamic params.
            segment = _segment.PAGE_SEGMENT_KEY;
            varyPath = (0, _varypath.finalizePageVaryPath)(requestKey, renderedSearch, partialVaryPath);
            // The metadata "segment" is not part the route tree, but it has the same
            // conceptual params as a page segment. Write the vary path into the
            // accumulator object. If there are multiple parallel pages, we use the
            // first one. Which page we choose is arbitrary as long as it's
            // consistently the same one every time every time. See
            // finalizeMetadataVaryPath for more details.
            if (acc.metadataVaryPath === null) {
                acc.metadataVaryPath = (0, _varypath.finalizeMetadataVaryPath)(requestKey, renderedSearch, partialVaryPath);
            }
        } else {
            // This is a layout segment.
            isPage = false;
            segment = originalSegment;
            varyPath = (0, _varypath.finalizeLayoutVaryPath)(requestKey, partialVaryPath);
        }
    }
    let slots = null;
    const parallelRoutes = flightRouterState[1];
    for(let parallelRouteKey in parallelRoutes){
        const childRouterState = parallelRoutes[parallelRouteKey];
        const childSegment = childRouterState[0];
        // TODO: Eventually, the param values will not be included in the response
        // from the server. We'll instead fill them in on the client by parsing
        // the URL. This is where we'll do that.
        const childRequestKeyPart = (0, _segmentvalueencoding.createSegmentRequestKeyPart)(childSegment);
        const childRequestKey = (0, _segmentvalueencoding.appendSegmentRequestKeyPart)(requestKey, parallelRouteKey, childRequestKeyPart);
        const childTree = convertFlightRouterStateToRouteTree(childRouterState, childRequestKey, partialVaryPath, renderedSearch, acc);
        if (slots === null) {
            slots = {
                [parallelRouteKey]: childTree
            };
        } else {
            slots[parallelRouteKey] = childTree;
        }
    }
    return {
        requestKey,
        segment,
        refreshState,
        // TODO: Cheating the type system here a bit because TypeScript can't tell
        // that the type of isPage and varyPath are consistent. The fix would be to
        // create separate constructors and call the appropriate one from each of
        // the branches above. Just seems a bit overkill only for one field so I'll
        // leave it as-is for now. If isPage were wrong it would break the behavior
        // and we'd catch it quickly, anyway.
        varyPath: varyPath,
        isPage: isPage,
        slots,
        prefetchHints: flightRouterState[4] ?? 0
    };
}
function convertRouteTreeToFlightRouterState(routeTree) {
    const parallelRoutes = {};
    if (routeTree.slots !== null) {
        for(const parallelRouteKey in routeTree.slots){
            parallelRoutes[parallelRouteKey] = convertRouteTreeToFlightRouterState(routeTree.slots[parallelRouteKey]);
        }
    }
    const flightRouterState = [
        routeTree.segment,
        parallelRoutes,
        null,
        null
    ];
    return flightRouterState;
}
async function fetchRouteOnCacheMiss(entry, key) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    const pathname = key.pathname;
    const search = key.search;
    const nextUrl = key.nextUrl;
    const segmentPath = '/_tree';
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: segmentPath
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    // Tell the server to perform a static pre-render for the Instant Navigation
    // Testing API. Static pre-renders don't normally happen during development.
    addInstantPrefetchHeaderIfLocked(headers);
    try {
        const url = new URL(pathname + search, location.origin);
        let response;
        let urlAfterRedirects;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // "Server" mode. We can use request headers instead of the pathname.
            // TODO: The eventual plan is to get rid of our custom request headers and
            // encode everything into the URL, using a similar strategy to the
            // "output: export" block above.
            response = await fetchPrefetchResponse(url, headers);
            urlAfterRedirects = response !== null && response.redirected ? new URL(response.url) : url;
        }
        if (!response || !response.ok || // 204 is a Cache miss. Though theoretically this shouldn't happen when
        // PPR is enabled, because we always respond to route tree requests, even
        // if it needs to be blockingly generated on demand.
        response.status === 204 || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
            return null;
        }
        // TODO: The canonical URL is the href without the origin. I think
        // historically the reason for this is because the initial canonical URL
        // gets passed as a prop to the top-level React component, which means it
        // needs to be computed during SSR. If it were to include the origin, it
        // would need to always be same as location.origin on the client, to prevent
        // a hydration mismatch. To sidestep this complexity, we omit the origin.
        //
        // However, since this is neither a native URL object nor a fully qualified
        // URL string, we need to be careful about how we use it. To prevent subtle
        // mistakes, we should create a special type for it, instead of just string.
        // Or, we should just use a (readonly) URL object instead. The type of the
        // prop that we pass to seed the initial state does not need to be the same
        // type as the state itself.
        const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(urlAfterRedirects);
        // Check whether the response varies based on the Next-Url header.
        const varyHeader = response.headers.get('vary');
        const couldBeIntercepted = varyHeader !== null && varyHeader.includes(_approuterheaders.NEXT_URL);
        // TODO: The `closed` promise was originally used to track when a streaming
        // network connection closes, so the scheduler could limit concurrent
        // connections. Now that prefetch responses are buffered, `closed` is
        // resolved immediately after buffering — before the outer function even
        // returns. This mechanism is only still meaningful for dynamic (Full)
        // prefetches, which use incremental streaming. Consider removing the
        // `closed` plumbing for buffered prefetch paths.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route.
        const routeIsPPREnabled = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '2' || // In output: "export" mode, we can't rely on response headers. But if we
        // receive a well-formed response, we can assume it's a static response,
        // because all data is static in this mode.
        isOutputExportMode;
        if (routeIsPPREnabled) {
            const { stream: prefetchStream, size: responseSize } = await createNonTaskyPrefetchResponseStream(response.body);
            closed.resolve();
            (0, _cachemap.setSizeInCacheMap)(entry, responseSize);
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                allowPartialStream: true
            });
            if ((response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            // Get the params that were used to render the target page. These may
            // be different from the params in the request URL, if the page
            // was rewritten.
            const renderedPathname = (0, _routeparams.getRenderedPathname)(response);
            const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
            // Convert the server-sent data into the RouteTree format used by the
            // client cache.
            //
            // During this traversal, we accumulate additional data into this
            // "accumulator" object.
            const acc = {
                metadataVaryPath: null
            };
            const routeTree = convertRootTreePrefetchToRouteTree(serverData, renderedPathname, renderedSearch, acc);
            const metadataVaryPath = acc.metadataVaryPath;
            if (metadataVaryPath === null) {
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            (0, _optimisticroutes.discoverKnownRoute)(Date.now(), pathname, nextUrl, entry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, false // hasDynamicRewrite
            );
        } else {
            // PPR is not enabled for this route. The server responds with a
            // different format (FlightRouterState) that we need to convert.
            // TODO: We will unify the responses eventually. I'm keeping the types
            // separate for now because FlightRouterState has so many
            // overloaded concerns.
            const { stream: prefetchStream, size: responseSize } = await createNonTaskyPrefetchResponseStream(response.body);
            closed.resolve();
            (0, _cachemap.setSizeInCacheMap)(entry, responseSize);
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                allowPartialStream: true
            });
            if ((response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.b) !== (0, _navigationbuildid.getNavigationBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: We should cache the fact that this is an MPA navigation.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            // Read head vary params synchronously. Individual segments carry their
            // own thenables in CacheNodeSeedData.
            const headVaryParamsThenable = serverData.h;
            const headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
            writeDynamicTreeResponseIntoCache(Date.now(), // using the LoadingBoundary fetch strategy, so mark their cache entries accordingly.
            _types.FetchStrategy.LoadingBoundary, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, headVaryParams, pathname, nextUrl);
        }
        if (!couldBeIntercepted) {
            // This route will never be intercepted. So we can use this entry for all
            // requests to this route, regardless of the Next-Url header. This works
            // because when reading the cache we always check for a valid
            // non-intercepted entry first.
            // Re-key the entry. The `set` implementation handles removing it from
            // its previous position in the cache. We don't need to do anything to
            // update the LRU, because the entry is already in it.
            // TODO: Treat this as an upsert — should check if an entry already
            // exists at the new keypath, and if so, whether we should keep that
            // one instead.
            const fulfilledVaryPath = (0, _varypath.getFulfilledRouteVaryPath)(pathname, search, nextUrl, couldBeIntercepted);
            const isRevalidation = false;
            (0, _cachemap.setInCacheMap)(routeCacheMap, fulfilledVaryPath, entry, isRevalidation);
        }
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentOnCacheMiss(route, segmentCacheEntry, routeKey, tree) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice it writes the result to the
    // cache entry directly, rather than return data that is then written by
    // the caller.
    //
    // Segment fetches are non-blocking so we don't need to ping the scheduler
    // on completion.
    // Use the canonical URL to request the segment, not the original URL. These
    // are usually the same, but the canonical URL will be different if the route
    // tree response was redirected. To avoid an extra waterfall on every segment
    // request, we pass the redirected URL instead of the original one.
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = routeKey.nextUrl;
    const requestKey = tree.requestKey;
    const normalizedRequestKey = requestKey === _segmentvalueencoding.ROOT_SEGMENT_REQUEST_KEY ? // `_index` instead of as an empty string. This should be treated as
    // an implementation detail and not as a stable part of the protocol.
    // It just needs to match the equivalent logic that happens when
    // prerendering the responses. It should not leak outside of Next.js.
    '/_index' : requestKey;
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: normalizedRequestKey
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    // Tell the server to perform a static pre-render for the Instant Navigation
    // Testing API. Static pre-renders don't normally happen during development.
    addInstantPrefetchHeaderIfLocked(headers);
    const requestUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : url;
    try {
        const response = await fetchPrefetchResponse(requestUrl, headers);
        if (!response || !response.ok || response.status === 204 || // Cache miss
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route. Theoretically this should never happen
        // because we only issue requests for segments once we've verified that
        // the route supports PPR.
        response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && // In output: "export" mode, we can't rely on response headers. But if
        // we receive a well-formed response, we can assume it's a static
        // response, because all data is static in this mode.
        !isOutputExportMode || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        // See TODO in fetchRouteOnCacheMiss about removing `closed` for
        // buffered prefetch paths.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        const { stream: prefetchStream, size: responseSize } = await createNonTaskyPrefetchResponseStream(response.body);
        closed.resolve();
        (0, _cachemap.setSizeInCacheMap)(segmentCacheEntry, responseSize);
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
            allowPartialStream: true
        });
        if ((response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
            // The server build does not match the client. Treat as a 404. During
            // an actual navigation, the router will trigger an MPA navigation.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        const now = Date.now();
        const staleAt = now + getStaleTimeMs(serverData.staleTime);
        const fulfilledEntry = fulfillSegmentCacheEntry(segmentCacheEntry, serverData.rsc, staleAt, serverData.isPartial);
        // If the server tells us which params the segment varies by, we can re-key
        // the entry to a more generic vary path. This allows the entry to be reused
        // across different param values for params that the segment doesn't
        // actually depend on.
        const varyParams = serverData.varyParams;
        const fulfilledVaryPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _varypath.getSegmentVaryPathForRequest)(segmentCacheEntry.fetchStrategy, tree);
        // Re-key and upsert the entry at the fulfilled vary path. This ensures
        // the entry is stored at the most generic path possible based on which
        // params the segment actually depends on.
        upsertSegmentEntry(now, fulfilledVaryPath, fulfilledEntry);
        return {
            value: fulfilledEntry,
            // Return a promise that resolves when the network connection closes, so
            // the scheduler can track the number of concurrent network connections.
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchInlinedSegmentsOnCacheMiss(route, routeKey, tree, spawnedEntries) {
    // When prefetch inlining is enabled, all segment data for a route is bundled
    // into a single /_inlined response instead of individual per-segment
    // requests. This function fetches that response and walks the tree to fill
    // all segment cache entries at once.
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = routeKey.nextUrl;
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: '/' + _segment.PAGE_SEGMENT_KEY
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    addInstantPrefetchHeaderIfLocked(headers);
    try {
        const response = await fetchPrefetchResponse(url, headers);
        if (!response || !response.ok || response.status === 204 || response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' && !isOutputExportMode || !response.body) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        // See TODO in fetchRouteOnCacheMiss about removing `closed` for
        // buffered prefetch paths.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        const { stream: prefetchStream } = await createNonTaskyPrefetchResponseStream(response.body);
        closed.resolve();
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
            allowPartialStream: true
        });
        if ((response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.tree.segment.buildId) !== (0, _navigationbuildid.getNavigationBuildId)()) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        const now = Date.now();
        // Walk the inlined tree in parallel with the RouteTree and fill
        // segment cache entries.
        fillInlinedSegmentEntries(now, route, tree, serverData.tree, spawnedEntries);
        // Fill the head entry.
        const headStaleAt = now + getStaleTimeMs(serverData.head.staleTime);
        const headKey = route.metadata.requestKey;
        const ownedHeadEntry = spawnedEntries.get(headKey);
        if (ownedHeadEntry !== undefined) {
            fulfillSegmentCacheEntry(ownedHeadEntry, serverData.head.rsc, headStaleAt, serverData.head.isPartial);
        } else {
            // The head was already cached. Try to upsert if the entry is empty.
            const existingEntry = readOrCreateSegmentCacheEntry(now, _types.FetchStrategy.PPR, route.metadata);
            if (existingEntry.status === 0) {
                fulfillSegmentCacheEntry(upgradeToPendingSegment(existingEntry, _types.FetchStrategy.PPR), serverData.head.rsc, headStaleAt, serverData.head.isPartial);
            }
        }
        // Reject any remaining entries that were not fulfilled by the response.
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return null;
    }
}
function fillInlinedSegmentEntries(now, route, tree, inlinedNode, spawnedEntries) {
    // Check if the spawned entries map has an entry for this segment's key.
    const segment = inlinedNode.segment;
    const staleAt = now + getStaleTimeMs(segment.staleTime);
    const ownedEntry = spawnedEntries.get(tree.requestKey);
    if (ownedEntry !== undefined) {
        // We own this entry. Fulfill it directly.
        fulfillSegmentCacheEntry(ownedEntry, segment.rsc, staleAt, segment.isPartial);
    } else {
        // Not owned by us — this is extra data from the inlined response for a
        // segment that was already cached. Try to upsert if the entry is empty.
        const existingEntry = readOrCreateSegmentCacheEntry(now, _types.FetchStrategy.PPR, tree);
        if (existingEntry.status === 0) {
            fulfillSegmentCacheEntry(upgradeToPendingSegment(existingEntry, _types.FetchStrategy.PPR), segment.rsc, staleAt, segment.isPartial);
        }
    }
    // Recurse into children.
    if (tree.slots !== null && inlinedNode.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childInlinedNode = inlinedNode.slots[parallelRouteKey];
            if (childInlinedNode !== undefined) {
                fillInlinedSegmentEntries(now, route, childTree, childInlinedNode, spawnedEntries);
            }
        }
    }
}
async function fetchSegmentPrefetchesUsingDynamicRequest(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries) {
    const key = task.key;
    const url = new URL(route.canonicalUrl, location.origin);
    const nextUrl = key.nextUrl;
    if (spawnedEntries.size === 1 && spawnedEntries.has(route.metadata.requestKey)) {
        // The only thing pending is the head. Instruct the server to
        // skip over everything else.
        dynamicRequestTree = MetadataOnlyRequestTree;
    }
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(dynamicRequestTree)
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    switch(fetchStrategy){
        case _types.FetchStrategy.Full:
            {
                break;
            }
        case _types.FetchStrategy.PPRRuntime:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '2';
                break;
            }
        case _types.FetchStrategy.LoadingBoundary:
            {
                headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
                break;
            }
        default:
            {
                fetchStrategy;
            }
    }
    try {
        const response = await fetchPrefetchResponse(url, headers);
        if (!response || !response.ok || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
        if (renderedSearch !== route.renderedSearch) {
            // The search params that were used to render the target page are
            // different from the search params in the request URL. This only happens
            // when there's a dynamic rewrite in between the tree prefetch and the
            // data prefetch.
            // TODO: For now, since this is an edge case, we reject the prefetch, but
            // the proper way to handle this is to evict the stale route tree entry
            // then fill the cache with the new response.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes. Only meaningful for Full
        // (dynamic) prefetches which use incremental streaming. For buffered
        // paths, this is resolved immediately — see TODO in fetchRouteOnCacheMiss.
        const closed = (0, _promisewithresolvers.createPromiseWithResolvers)();
        let fulfilledEntries = null;
        let prefetchStream;
        let bufferedResponseSize = null;
        if (fetchStrategy === _types.FetchStrategy.Full) {
            // Full prefetches are dynamic responses stored in the prefetch cache.
            // They don't carry vary params or other cache metadata, so there's no
            // need to buffer them. Use the incremental version to allow data to be
            // processed as it arrives.
            prefetchStream = createIncrementalPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(totalBytesReceivedSoFar) {
                // When processing a dynamic response, we don't know how large each
                // individual segment is, so approximate by assigning each segment
                // the average of the total response size.
                if (fulfilledEntries === null) {
                    // Haven't received enough data yet to know which segments
                    // were included.
                    return;
                }
                const averageSize = totalBytesReceivedSoFar / fulfilledEntries.length;
                for (const entry of fulfilledEntries){
                    (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
                }
            });
        } else {
            const { stream, size } = await createNonTaskyPrefetchResponseStream(response.body);
            closed.resolve();
            prefetchStream = stream;
            bufferedResponseSize = size;
        }
        const [serverData, cacheData] = await Promise.all([
            (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream, headers, {
                allowPartialStream: true
            }),
            response.cacheData
        ]);
        // Read head vary params synchronously. Individual segments carry their
        // own thenables in CacheNodeSeedData.
        const headVaryParamsThenable = serverData.h;
        const headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
        const now = Date.now();
        const staleAt = await getStaleAt(now, serverData.s, response);
        // PPRRuntime prefetches are partial when the server marks the response
        // as '~' (Partial). Full/LoadingBoundary prefetches are always complete.
        const isResponsePartial = fetchStrategy === _types.FetchStrategy.PPRRuntime && (cacheData?.isResponsePartial ?? false);
        // Aside from writing the data into the cache, this function also returns
        // the entries that were fulfilled, so we can streamingly update their sizes
        // in the LRU as more data comes in.
        const buildId = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.b;
        const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
        if (typeof flightDatas === 'string') {
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        const navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, dynamicRequestTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
        fulfilledEntries = writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, spawnedEntries);
        // For buffered responses, update LRU sizes now that we know which
        // entries were fulfilled.
        if (bufferedResponseSize !== null && fulfilledEntries !== null && fulfilledEntries.length > 0) {
            const averageSize = bufferedResponseSize / fulfilledEntries.length;
            for (const entry of fulfilledEntries){
                (0, _cachemap.setSizeInCacheMap)(entry, averageSize);
            }
        }
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            value: null,
            closed: closed.promise
        };
    } catch (error) {
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return null;
    }
}
function writeDynamicTreeResponseIntoCache(now, fetchStrategy, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, headVaryParams, originalPathname, nextUrl) {
    const renderedSearch = (0, _routeparams.getRenderedSearch)(response);
    const normalizedFlightDataResult = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (// MPA navigation.
    typeof normalizedFlightDataResult === 'string' || normalizedFlightDataResult.length !== 1) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightData = normalizedFlightDataResult[0];
    if (!flightData.isRootRender) {
        // Unexpected response format.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightRouterState = flightData.tree;
    // If the response was postponed, segments may contain dynamic holes.
    // The head has its own partiality flag (flightDataEntry.isHeadPartial)
    // which is handled separately in writeDynamicRenderResponseIntoCache.
    const isResponsePartial = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '1';
    // Convert the server-sent data into the RouteTree format used by the
    // client cache.
    //
    // During this traversal, we accumulate additional data into this
    // "accumulator" object.
    const acc = {
        metadataVaryPath: null
    };
    const routeTree = convertRootFlightRouterStateToRouteTree(flightRouterState, renderedSearch, acc);
    const metadataVaryPath = acc.metadataVaryPath;
    if (metadataVaryPath === null) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    (0, _optimisticroutes.discoverKnownRoute)(now, originalPathname, nextUrl, entry, routeTree, metadataVaryPath, couldBeIntercepted, canonicalUrl, routeIsPPREnabled, false // hasDynamicRewrite
    );
    // If the server sent segment data as part of the response, we should write
    // it into the cache to prevent a second, redundant prefetch request.
    // TODO: This is a leftover branch from before Client Segment Cache was
    // enabled everywhere. Tree prefetches should never include segment data.  We
    // can delete it. Leaving for a subsequent PR.
    const navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, flightRouterState, normalizedFlightDataResult, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    const buildId = response.headers.get(_constants.NEXT_NAV_DEPLOYMENT_ID_HEADER) ?? serverData.b;
    writeDynamicRenderResponseIntoCache(now, fetchStrategy, normalizedFlightDataResult, buildId, isResponsePartial, headVaryParams, getStaleAtFromHeader(now, response), navigationSeed, null);
}
function rejectSegmentEntriesIfStillPending(entries, staleAt) {
    const fulfilledEntries = [];
    for (const entry of entries.values()){
        if (entry.status === 1) {
            rejectSegmentCacheEntry(entry, staleAt);
        } else if (entry.status === 2) {
            fulfilledEntries.push(entry);
        }
    }
    return fulfilledEntries;
}
function writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, spawnedEntries) {
    if (buildId && buildId !== (0, _navigationbuildid.getNavigationBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        if (spawnedEntries !== null) {
            rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        }
        return null;
    }
    const routeTree = navigationSeed.routeTree;
    const metadataTree = navigationSeed.metadataVaryPath !== null ? createMetadataRouteTree(navigationSeed.metadataVaryPath) : null;
    for (const flightDataEntry of flightDatas){
        const seedData = flightDataEntry.seedData;
        if (seedData !== null) {
            // The data sent by the server represents only a subtree of the app. We
            // need to find the part of the task tree that matches the response.
            //
            // segmentPath represents the parent path of subtree. It's a repeating
            // pattern of parallel route key and segment:
            //
            //   [string, Segment, string, Segment, string, Segment, ...]
            const segmentPath = flightDataEntry.segmentPath;
            let tree = routeTree;
            for(let i = 0; i < segmentPath.length; i += 2){
                const parallelRouteKey = segmentPath[i];
                if (tree?.slots?.[parallelRouteKey] !== undefined) {
                    tree = tree.slots[parallelRouteKey];
                } else {
                    if (spawnedEntries !== null) {
                        rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
                    }
                    return null;
                }
            }
            writeSeedDataIntoCache(now, fetchStrategy, tree, staleAt, seedData, isResponsePartial, spawnedEntries);
        }
        const head = flightDataEntry.head;
        if (head !== null && metadataTree !== null) {
            // When Cache Components is enabled, the server conservatively marks
            // the head as partial during static generation (isPossiblyPartialHead
            // in app-render.tsx), even for fully static pages where the head is
            // actually complete. When the response is non-partial, we override
            // this since the server confirmed no dynamic content exists.
            //
            // Without Cache Components, the server always sends the correct
            // isHeadPartial value, so no override is needed.
            const isHeadPartial = !isResponsePartial && ("TURBOPACK compile-time value", true) ? false : flightDataEntry.isHeadPartial;
            fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, head, isHeadPartial, staleAt, // parameter.
            headVaryParams, metadataTree, spawnedEntries);
        }
    }
    // Any entry that's still pending was intentionally not rendered by the
    // server, because it was inside the loading boundary. Mark them as rejected
    // so we know not to fetch them again.
    // TODO: If PPR is enabled on some routes but not others, then it's possible
    // that a different page is able to do a per-segment prefetch of one of the
    // segments we're marking as rejected here. We should mark on the segment
    // somehow that the reason for the rejection is because of a non-PPR prefetch.
    // That way a per-segment prefetch knows to disregard the rejection.
    if (spawnedEntries !== null) {
        const fulfilledEntries = rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        return fulfilledEntries;
    }
    return null;
}
function writeSeedDataIntoCache(now, fetchStrategy, tree, staleAt, seedData, isResponsePartial, entriesOwnedByCurrentTask) {
    // This function is used to write the result of a runtime server request
    // (CacheNodeSeedData) into the prefetch cache.
    const rsc = seedData[0];
    const isPartial = rsc === null || isResponsePartial;
    const varyParamsThenable = seedData[4];
    // Each segment carries its own vary params thenable in the seed data. The
    // thenable resolves to the set of params the segment accessed during render.
    // A null thenable means tracking was not enabled (not a prerender).
    const varyParams = varyParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(varyParamsThenable) : null;
    fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, rsc, isPartial, staleAt, varyParams, tree, entriesOwnedByCurrentTask);
    // Recursively write the child data into the cache.
    const slots = tree.slots;
    if (slots !== null) {
        const seedDataChildren = seedData[1];
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childSeedData = seedDataChildren[parallelRouteKey];
            if (childSeedData !== null && childSeedData !== undefined) {
                writeSeedDataIntoCache(now, fetchStrategy, childTree, staleAt, childSeedData, isResponsePartial, entriesOwnedByCurrentTask);
            }
        }
    }
}
function fulfillEntrySpawnedByRuntimePrefetch(now, fetchStrategy, rsc, isPartial, staleAt, segmentVaryParams, tree, entriesOwnedByCurrentTask) {
    // We should only write into cache entries that are owned by us. Or create
    // a new one and write into that. We must never write over an entry that was
    // created by a different task, because that causes data races.
    const ownedEntry = entriesOwnedByCurrentTask !== null ? entriesOwnedByCurrentTask.get(tree.requestKey) : undefined;
    if (ownedEntry !== undefined) {
        const fulfilledEntry = fulfillSegmentCacheEntry(ownedEntry, rsc, staleAt, isPartial);
        // Re-key the entry based on which params the segment actually depends on.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } else {
        // There's no matching entry. Attempt to create a new one.
        const possiblyNewEntry = readOrCreateSegmentCacheEntry(now, fetchStrategy, tree);
        if (possiblyNewEntry.status === 0) {
            // Confirmed this is a new entry. We can fulfill it.
            const newEntry = possiblyNewEntry;
            const fulfilledEntry = fulfillSegmentCacheEntry(upgradeToPendingSegment(newEntry, fetchStrategy), rsc, staleAt, isPartial);
            // Re-key the entry based on which params the segment actually depends on.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } else {
            // There was already an entry in the cache. But we may be able to
            // replace it with the new one from the server.
            const newEntry = fulfillSegmentCacheEntry(upgradeToPendingSegment(createDetachedSegmentCacheEntry(now), fetchStrategy), rsc, staleAt, isPartial);
            // Use the fulfilled vary path if available, otherwise fall back to
            // the request vary path.
            const varyPath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _varypath.getSegmentVaryPathForRequest)(fetchStrategy, tree);
            upsertSegmentEntry(now, varyPath, newEntry);
        }
    }
}
async function fetchPrefetchResponse(url, headers) {
    const fetchPriority = 'low';
    // When issuing a prefetch request, don't immediately decode the response; we
    // use the lower level `createFromResponse` API instead because we need to do
    // some extra processing of the response stream. See
    // `createNonTaskyPrefetchResponseStream` for more details.
    const shouldImmediatelyDecode = false;
    const response = await (0, _fetchserverresponse.createFetch)(url, headers, fetchPriority, shouldImmediatelyDecode);
    if (!response.ok) {
        return null;
    }
    // Check the content type
    if ("TURBOPACK compile-time falsy", 0) {
    // In output: "export" mode, we relaxed about the content type, since it's
    // not Next.js that's serving the response. If the status is OK, assume the
    // response is valid. If it's not a valid response, the Flight client won't
    // be able to decode it, and we'll treat it as a miss.
    } else {
        const contentType = response.headers.get('content-type');
        const isFlightResponse = contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if (!isFlightResponse) {
            return null;
        }
    }
    return response;
}
async function createNonTaskyPrefetchResponseStream(body) {
    // Buffer the entire response before passing it to the Flight client. This
    // ensures that when Flight processes the stream, all model data is available
    // synchronously. This is important for readVaryParams, which synchronously
    // checks the thenable status — if data arrived in multiple network chunks,
    // the thenables might not yet be fulfilled.
    //
    // TODO: There are too many intermediate stream transformations in the
    // prefetch response pipeline (e.g. stripIsPartialByte, this function).
    // These could all be consolidated into a single transformation. Refactor
    // once the cached navigations experiment lands.
    //
    // Read the entire response from the network.
    const reader = body.getReader();
    const chunks = [];
    let size = 0;
    while(true){
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        size += value.byteLength;
    }
    // Concatenate into a single chunk so that Flight's processBinaryChunk
    // processes all rows synchronously in one call. Multiple chunks would not
    // be sufficient: even though reader.read() resolves as a microtask for
    // already-enqueued data, the `await` continuation from
    // createFromReadableStream can interleave between chunks. If the root
    // model row isn't the first row (e.g. outlined values come first), the
    // PromiseResolveThenableJob from `await` can cause the root to initialize
    // eagerly, scheduling the continuation before remaining chunks (including
    // promise value rows) are processed. A single chunk avoids this.
    let buffer;
    if (chunks.length === 1) {
        buffer = chunks[0];
    } else if (chunks.length > 1) {
        buffer = new Uint8Array(size);
        let offset = 0;
        for (const chunk of chunks){
            buffer.set(chunk, offset);
            offset += chunk.byteLength;
        }
    } else {
        buffer = new Uint8Array(0);
    }
    const stream = new ReadableStream({
        start (controller) {
            controller.enqueue(buffer);
            controller.close();
        }
    });
    return {
        stream,
        size
    };
}
/**
 * Creates a streaming (non-buffered) prefetch response stream for dynamic/Full
 * prefetches. These are essentially dynamic responses that get stored in the
 * prefetch cache — they don't carry vary params or other cache metadata that
 * requires synchronous thenable resolution, so there's no need to buffer them.
 * They should continue to stream so consumers can process data as it arrives.
 */ function createIncrementalPrefetchResponseStream(originalFlightStream, onStreamClose, onResponseSizeUpdate) {
    // While processing the original stream, we incrementally update the size
    // of the cache entry in the LRU.
    let totalByteLength = 0;
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    // Incrementally update the size of the cache entry in the LRU.
                    totalByteLength += value.byteLength;
                    onResponseSizeUpdate(totalByteLength);
                    continue;
                }
                controller.close();
                onStreamClose();
                return;
            }
        }
    });
}
function addSegmentPathToUrlInOutputExportMode(url, segmentPath) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return url;
}
function canNewFetchStrategyProvideMoreContent(currentStrategy, newStrategy) {
    return currentStrategy < newStrategy;
}
/**
 * Adds the instant prefetch header if the navigation lock is active.
 * Uses a lazy require to ensure dead code elimination.
 */ function addInstantPrefetchHeaderIfLocked(headers) {
    if ("TURBOPACK compile-time truthy", 1) {
        const { isNavigationLocked } = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/navigation-testing-lock.js [app-ssr] (ecmascript)");
        if (isNavigationLocked()) {
            headers[_approuterheaders.NEXT_INSTANT_PREFETCH_HEADER] = '1';
        }
    }
}
function getStaleAtFromHeader(now, response) {
    const staleTimeSeconds = parseInt(response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER) ?? '', 10);
    const staleTimeMs = !isNaN(staleTimeSeconds) ? getStaleTimeMs(staleTimeSeconds) : _navigatereducer.STATIC_STALETIME_MS;
    return now + staleTimeMs;
}
async function getStaleAt(now, staleTimeIterable, response) {
    if (staleTimeIterable !== undefined) {
        // Iterate the async iterable and take the last yielded value. The server
        // yields updated staleTime values during the render; the last one is the
        // final staleTime.
        let staleTimeSeconds;
        for await (const value of staleTimeIterable){
            staleTimeSeconds = value;
        }
        if (staleTimeSeconds !== undefined) {
            const staleTimeMs = isNaN(staleTimeSeconds) ? _navigatereducer.STATIC_STALETIME_MS : getStaleTimeMs(staleTimeSeconds);
            return now + staleTimeMs;
        }
    }
    if (response !== undefined) {
        return getStaleAtFromHeader(now, response);
    }
    return now + _navigatereducer.STATIC_STALETIME_MS;
}
function writeStaticStageResponseIntoCache(now, flightData, buildId, headVaryParamsThenable, staleAt, baseTree, renderedSearch, isResponsePartial) {
    const fetchStrategy = isResponsePartial ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    const headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
    const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(flightData);
    if (typeof flightDatas === 'string') {
        return;
    }
    const navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, baseTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    writeDynamicRenderResponseIntoCache(now, fetchStrategy, flightDatas, buildId, isResponsePartial, headVaryParams, staleAt, navigationSeed, null // spawnedEntries — no pre-created entries; will create or upsert
    );
}
async function processRuntimePrefetchStream(now, runtimePrefetchStream, baseTree, renderedSearch) {
    const { stream, isPartial } = await stripIsPartialByte(runtimePrefetchStream);
    const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(stream, undefined, {
        allowPartialStream: true
    });
    const headVaryParamsThenable = serverData.h;
    const headVaryParams = headVaryParamsThenable !== null ? (0, _varyparamsdecoding.readVaryParams)(headVaryParamsThenable) : null;
    const staleAt = await getStaleAt(now, serverData.s);
    const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (typeof flightDatas === 'string') {
        return null;
    }
    const navigationSeed = (0, _navigation.convertServerPatchToFullTree)(now, baseTree, flightDatas, renderedSearch, _bfcache.UnknownDynamicStaleTime);
    return {
        flightDatas,
        navigationSeed,
        buildId: serverData.b,
        isResponsePartial: isPartial,
        headVaryParams,
        staleAt
    };
}
async function stripIsPartialByte(stream) {
    // When there is no recognized marker byte, the fallback depends on whether
    // Cached Navigations is enabled. When enabled, dynamic navigation responses
    // don't have a marker but may contain dynamic holes, so they are treated as
    // partial. When disabled, unmarked responses are treated as non-partial.
    const defaultIsPartial = !!("TURBOPACK compile-time value", false);
    const reader = stream.getReader();
    const { done, value } = await reader.read();
    if (done || !value || value.byteLength === 0) {
        return {
            stream: new ReadableStream({
                start: (c)=>c.close()
            }),
            isPartial: defaultIsPartial
        };
    }
    const firstByte = value[0];
    const hasMarker = firstByte === 0x23 || firstByte === 0x7e;
    const isPartial = hasMarker ? firstByte === 0x7e : defaultIsPartial;
    const remainder = hasMarker ? value.byteLength > 1 ? value.subarray(1) : null : value;
    return {
        isPartial,
        stream: new ReadableStream({
            start (controller) {
                if (remainder) {
                    controller.enqueue(remainder);
                }
            },
            async pull (controller) {
                const result = await reader.read();
                if (result.done) {
                    controller.close();
                } else {
                    controller.enqueue(result.value);
                }
            }
        })
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelPrefetchTask: null,
    isPrefetchTaskDirty: null,
    pingPrefetchScheduler: null,
    pingPrefetchTask: null,
    reschedulePrefetchTask: null,
    schedulePrefetchTask: null,
    startRevalidationCooldown: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelPrefetchTask: function() {
        return cancelPrefetchTask;
    },
    isPrefetchTaskDirty: function() {
        return isPrefetchTaskDirty;
    },
    pingPrefetchScheduler: function() {
        return pingPrefetchScheduler;
    },
    pingPrefetchTask: function() {
        return pingPrefetchTask;
    },
    reschedulePrefetchTask: function() {
        return reschedulePrefetchTask;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    },
    startRevalidationCooldown: function() {
        return startRevalidationCooldown;
    }
});
const _approutertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/app-router-types.js [app-ssr] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/match-segments.js [app-ssr] (ecmascript)");
const _cache = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _lru = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/lru.js [app-ssr] (ecmascript)");
const scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn).catch((error)=>setTimeout(()=>{
            throw error;
        }));
const taskHeap = [];
let inProgressRequests = 0;
let sortIdCounter = 0;
let didScheduleMicrotask = false;
// The most recently hovered (or touched, etc) link, i.e. the most recent task
// scheduled at Intent priority. There's only ever a single task at Intent
// priority at a time. We reserve special network bandwidth for this task only.
let mostRecentlyHoveredLink = null;
// CDN cache propagation delay after revalidation (in milliseconds)
const REVALIDATION_COOLDOWN_MS = 300;
// Timeout handle for the revalidation cooldown. When non-null, prefetch
// requests are blocked to allow CDN cache propagation.
let revalidationCooldownTimeoutHandle = null;
function startRevalidationCooldown() {
    // Clear any existing timeout in case multiple revalidations happen
    // in quick succession.
    if (revalidationCooldownTimeoutHandle !== null) {
        clearTimeout(revalidationCooldownTimeoutHandle);
    }
    // Schedule the cooldown to expire after the delay.
    revalidationCooldownTimeoutHandle = setTimeout(()=>{
        revalidationCooldownTimeoutHandle = null;
        // Retry the prefetch queue now that the cooldown has expired.
        pingPrefetchScheduler();
    }, REVALIDATION_COOLDOWN_MS);
}
function schedulePrefetchTask(key, treeAtTimeOfPrefetch, fetchStrategy, priority, onInvalidate, _onComplete) {
    // Spawn a new prefetch task
    const task = {
        key,
        treeAtTimeOfPrefetch,
        routeCacheVersion: (0, _cache.getCurrentRouteCacheVersion)(),
        segmentCacheVersion: (0, _cache.getCurrentSegmentCacheVersion)(),
        priority,
        phase: 1,
        hasBackgroundWork: false,
        spawnedRuntimePrefetches: null,
        fetchStrategy,
        sortId: sortIdCounter++,
        isCanceled: false,
        onInvalidate,
        _heapIndex: -1
    };
    if ("TURBOPACK compile-time truthy", 1) {
        task._onComplete = _onComplete;
    }
    trackMostRecentlyHoveredLink(task);
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    pingPrefetchScheduler();
    return task;
}
function cancelPrefetchTask(task) {
    // Remove the prefetch task from the queue. If the task already completed,
    // then this is a no-op.
    //
    // We must also explicitly mark the task as canceled so that a blocked task
    // does not get added back to the queue when it's pinged by the network.
    task.isCanceled = true;
    heapDelete(taskHeap, task);
    if ("TURBOPACK compile-time truthy", 1) {
        // Call completion callback. In practice this shouldn't be reached for
        // test-initiated prefetches since cancellation is only used by the Link
        // component when elements scroll out of viewport.
        const onComplete = task._onComplete;
        task._onComplete = undefined;
        onComplete?.();
    }
}
function reschedulePrefetchTask(task, treeAtTimeOfPrefetch, fetchStrategy, priority) {
    // Bump the prefetch task to the top of the queue, as if it were a fresh
    // task. This is essentially the same as canceling the task and scheduling
    // a new one, except it reuses the original object.
    //
    // The primary use case is to increase the priority of a Link-initated
    // prefetch on hover.
    //
    // Note: _onComplete is not reset here because it's preserved on the same
    // task object. When the rescheduled task completes, the original callback
    // will still be invoked.
    // Un-cancel the task, in case it was previously canceled.
    task.isCanceled = false;
    task.phase = 1;
    // Assign a new sort ID to move it ahead of all other tasks at the same
    // priority level. (Higher sort IDs are processed first.)
    task.sortId = sortIdCounter++;
    task.priority = // Intent priority, even if the rescheduled priority is lower.
    task === mostRecentlyHoveredLink ? _types.PrefetchPriority.Intent : priority;
    task.treeAtTimeOfPrefetch = treeAtTimeOfPrefetch;
    task.fetchStrategy = fetchStrategy;
    trackMostRecentlyHoveredLink(task);
    if (task._heapIndex !== -1) {
        // The task is already in the queue.
        heapResift(taskHeap, task);
    } else {
        heapPush(taskHeap, task);
    }
    pingPrefetchScheduler();
}
function isPrefetchTaskDirty(task, nextUrl, tree) {
    // This is used to quickly bail out of a prefetch task if the result is
    // guaranteed to not have changed since the task was initiated. This is
    // strictly an optimization — theoretically, if it always returned true, no
    // behavior should change because a full prefetch task will effectively
    // perform the same checks.
    return task.routeCacheVersion !== (0, _cache.getCurrentRouteCacheVersion)() || task.segmentCacheVersion !== (0, _cache.getCurrentSegmentCacheVersion)() || task.treeAtTimeOfPrefetch !== tree || task.key.nextUrl !== nextUrl;
}
function trackMostRecentlyHoveredLink(task) {
    // Track the mostly recently hovered link, i.e. the most recently scheduled
    // task at Intent priority. There must only be one such task at a time.
    if (task.priority === _types.PrefetchPriority.Intent && task !== mostRecentlyHoveredLink) {
        if (mostRecentlyHoveredLink !== null) {
            // Bump the previously hovered link's priority down to Default.
            if (mostRecentlyHoveredLink.priority !== _types.PrefetchPriority.Background) {
                mostRecentlyHoveredLink.priority = _types.PrefetchPriority.Default;
                heapResift(taskHeap, mostRecentlyHoveredLink);
            }
        }
        mostRecentlyHoveredLink = task;
    }
}
function pingPrefetchScheduler() {
    if (didScheduleMicrotask) {
        // Already scheduled a task to process the queue
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 *
 * Also checks if we're within the revalidation cooldown window, during which
 * prefetch requests are delayed to allow CDN cache propagation.
 */ function hasNetworkBandwidth(task) {
    // Check if we're within the revalidation cooldown window
    if (revalidationCooldownTimeoutHandle !== null) {
        // We're within the cooldown window. Return false to prevent prefetching.
        // When the cooldown expires, the timeout will call ensureWorkIsScheduled()
        // to retry the queue.
        return false;
    }
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    // TODO: Consider reserving some amount of bandwidth for static prefetches.
    if (task.priority === _types.PrefetchPriority.Intent) {
        // The most recently hovered link is allowed to exceed the default limit.
        //
        // The goal is to always have enough bandwidth to start a new prefetch
        // request when hovering over a link.
        //
        // However, because we don't abort in-progress requests, it's still possible
        // we'll run out of bandwidth. When links are hovered in quick succession,
        // there could be multiple hover requests running simultaneously.
        return inProgressRequests < 12;
    }
    // The default limit is lower than the limit for a hovered link.
    return inProgressRequests < 4;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    return prefetchSubtask.then((result)=>{
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            onPrefetchConnectionClosed();
            return null;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        result.closed.then(onPrefetchConnectionClosed);
        return result.value;
    });
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    pingPrefetchScheduler();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (task.isCanceled || // Check if prefetch is already queued.
    task._heapIndex !== -1) {
        return;
    }
    // Add the task back to the queue.
    heapPush(taskHeap, task);
    pingPrefetchScheduler();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    const now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    let task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth(task)){
        task.routeCacheVersion = (0, _cache.getCurrentRouteCacheVersion)();
        task.segmentCacheVersion = (0, _cache.getCurrentSegmentCacheVersion)();
        const exitStatus = pingRoute(now, task);
        // These fields are only valid for a single attempt. Reset them after each
        // iteration of the task queue.
        const hasBackgroundWork = task.hasBackgroundWork;
        task.hasBackgroundWork = false;
        task.spawnedRuntimePrefetches = null;
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                heapPop(taskHeap);
                // Continue to the next task
                task = heapPeek(taskHeap);
                continue;
            case 2:
                if (task.phase === 1) {
                    // Finished prefetching the route tree. Proceed to prefetching
                    // the segments.
                    task.phase = 0;
                    heapResift(taskHeap, task);
                } else if (hasBackgroundWork) {
                    // The task spawned additional background work. Reschedule the task
                    // at background priority.
                    task.priority = _types.PrefetchPriority.Background;
                    heapResift(taskHeap, task);
                } else {
                    // The prefetch is complete. Continue to the next task.
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Notify the Instant Navigation Testing API that the prefetch has
                        // completed, so it can proceed with navigation.
                        const onComplete = task._onComplete;
                        task._onComplete = undefined;
                        onComplete?.();
                    }
                    heapPop(taskHeap);
                }
                task = heapPeek(taskHeap);
                continue;
            default:
                exitStatus;
        }
    }
    // Run LRU cleanup only when the scheduler is fully idle: no queued tasks and
    // no in-progress requests. At that point, all active prefetch tasks have
    // finished reading from the cache (moving recently used entries to the front
    // of the list), so only genuinely stale data gets evicted.
    if (task === null && inProgressRequests === 0) {
        (0, _lru.cleanup)();
    }
}
/**
 * Check this during a prefetch task to determine if background work can be
 * performed. If so, it evaluates to `true`. Otherwise, it returns `false`,
 * while also scheduling a background task to run later. Usage:
 *
 * @example
 * if (background(task)) {
 *   // Perform background-pri work
 * }
 */ function background(task) {
    if (task.priority === _types.PrefetchPriority.Background) {
        return true;
    }
    task.hasBackgroundWork = true;
    return false;
}
function pingRoute(now, task) {
    const key = task.key;
    const route = (0, _cache.readOrCreateRouteCacheEntry)(now, task, key);
    const exitStatus = pingRootRouteTree(now, task, route);
    if (exitStatus !== 0 && key.search !== '') {
        // If the URL has a non-empty search string, also prefetch the pathname
        // without the search string. We use the searchless route tree as a base for
        // optimistic routing; see requestOptimisticRouteCacheEntry for details.
        //
        // Note that we don't need to prefetch any of the segment data. Just the
        // route tree.
        //
        // TODO: This is a temporary solution; the plan is to replace this by adding
        // a wildcard lookup method to the TupleMap implementation. This is
        // non-trivial to implement because it needs to account for things like
        // fallback route entries, hence this temporary workaround.
        const url = new URL(key.pathname, location.origin);
        const keyWithoutSearch = (0, _cachekey.createCacheKey)(url.href, key.nextUrl);
        const routeWithoutSearch = (0, _cache.readOrCreateRouteCacheEntry)(now, task, keyWithoutSearch);
        switch(routeWithoutSearch.status){
            case _cache.EntryStatus.Empty:
                {
                    if (background(task)) {
                        routeWithoutSearch.status = _cache.EntryStatus.Pending;
                        spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(routeWithoutSearch, keyWithoutSearch));
                    }
                    break;
                }
            case _cache.EntryStatus.Pending:
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                {
                    break;
                }
            default:
                routeWithoutSearch;
        }
    }
    return exitStatus;
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also `<Link prefetch={true}>`
                // which prefetch both static *and* dynamic data.
                // Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task.key));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                const blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                if (task.phase !== 0) {
                    // Do not prefetch segment data until we've entered the segment phase.
                    return 2;
                }
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth(task)) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                const tree = route.tree;
                // A task's fetch strategy gets set to `PPR` for any "auto" prefetch.
                // If it turned out that the route isn't PPR-enabled, we need to use `LoadingBoundary` instead.
                // We don't need to do this for runtime prefetches, because those are only available in
                // `cacheComponents`, where every route is PPR.
                let fetchStrategy;
                if (tree.prefetchHints & _approutertypes.PrefetchHint.SubtreeHasInstant) {
                    // If `instant` is defined anywhere on the target route, ignore the
                    // fetch strategy and switch to unified strategy used by Cache
                    // Components (called `PPR` for now, will likely be renamed).
                    //
                    // In practice, this just means that a "full" prefetch (<Link
                    // prefetch={true}>) has no effect. You're meant to use Runtime
                    // Prefetching instead — that's the new pattern that replaces
                    // prefetch={true}.
                    //
                    // The reason we check for `instant` rather than the `cacheComponents`
                    // flag is to support incremental adoption. `prefetch={true}` will
                    // continue to work until you opt into `instant`.
                    fetchStrategy = _types.FetchStrategy.PPR;
                } else if (task.fetchStrategy === _types.FetchStrategy.PPR) {
                    fetchStrategy = route.supportsPerSegmentPrefetching ? _types.FetchStrategy.PPR : _types.FetchStrategy.LoadingBoundary;
                } else {
                    fetchStrategy = task.fetchStrategy;
                }
                switch(fetchStrategy){
                    case _types.FetchStrategy.PPR:
                        {
                            // For Cache Components pages, each segment may be prefetched
                            // statically or using a runtime request, based on various
                            // configurations and heuristics. We'll do this in two passes: first
                            // traverse the tree and perform all the static prefetches.
                            //
                            // Then, if there are any segments that need a runtime request,
                            // do another pass to perform a runtime prefetch.
                            pingStaticHead(now, task, route);
                            const exitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, task.treeAtTimeOfPrefetch, tree);
                            if (exitStatus === 0) {
                                // Child yielded without finishing.
                                return 0;
                            }
                            const spawnedRuntimePrefetches = task.spawnedRuntimePrefetches;
                            if (spawnedRuntimePrefetches !== null) {
                                // During the first pass, we discovered segments that require a
                                // runtime prefetch. Do a second pass to construct a request tree.
                                const spawnedEntries = new Map();
                                pingRuntimeHead(now, task, route, spawnedEntries, _types.FetchStrategy.PPRRuntime);
                                const requestTree = pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries);
                                let needsDynamicRequest = spawnedEntries.size > 0;
                                if (needsDynamicRequest) {
                                    // Perform a dynamic prefetch request and populate the cache with
                                    // the result.
                                    spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, _types.FetchStrategy.PPRRuntime, requestTree, spawnedEntries));
                                }
                            }
                            return 2;
                        }
                    case _types.FetchStrategy.Full:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // Prefetch multiple segments using a single dynamic request.
                            // TODO: We can consolidate this branch with previous one by modeling
                            // it as if the first segment in the new tree has runtime prefetching
                            // enabled. Will do this as a follow-up refactor. Might want to remove
                            // the special metatdata case below first. In the meantime, it's not
                            // really that much duplication, just would be nice to remove one of
                            // these codepaths.
                            const spawnedEntries = new Map();
                            pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy);
                            const dynamicRequestTree = diffRouteTreeAgainstCurrent(now, task, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries, fetchStrategy);
                            let needsDynamicRequest = spawnedEntries.size > 0;
                            if (needsDynamicRequest) {
                                spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesUsingDynamicRequest)(task, route, fetchStrategy, dynamicRequestTree, spawnedEntries));
                            }
                            return 2;
                        }
                    default:
                        fetchStrategy;
                }
                break;
            }
        default:
            {
                route;
            }
    }
    return 2;
}
function pingStaticHead(now, task, route) {
    // The Head data for a page (metadata, viewport) is not really a route
    // segment, in the sense that it doesn't appear in the route tree. But we
    // store it in the cache as if it were, using a special key.
    pingStaticSegmentData(now, task, route, (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route.metadata), task.key, route.metadata);
}
function pingRuntimeHead(now, task, route, spawnedEntries, fetchStrategy) {
    pingRouteTreeAndIncludeDynamicData(now, task, route, route.metadata, false, spawnedEntries, // and LoadingBoundary
    fetchStrategy === _types.FetchStrategy.LoadingBoundary ? _types.FetchStrategy.Full : fetchStrategy);
}
// TODO: Rename dynamic -> runtime throughout this module
function pingSharedPartOfCacheComponentsTree(now, task, route, oldTree, newTree) {
    // When Cache Components is enabled (or PPR, or a fully static route when PPR
    // is disabled; those cases are treated equivalently to Cache Components), we
    // start by prefetching each segment individually. Once we reach the "new"
    // part of the tree — the part that doesn't exist on the current page — we
    // may choose to switch to a runtime prefetch instead, based on the
    // information sent by the server in the route tree.
    //
    // The traversal starts in the "shared" part of the tree. Once we reach the
    // "new" part of the tree, we switch to a different traversal,
    // pingNewPartOfCacheComponentsTree.
    // Prefetch this segment's static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, newTree);
    pingStaticSegmentData(now, task, route, segment, task.key, newTree);
    // Recursively ping the children.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            if (!hasNetworkBandwidth(task)) {
                // Stop prefetching segments until there's more bandwidth.
                return 0;
            }
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            let childExitStatus;
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // We're still in the "shared" part of the tree.
                childExitStatus = pingSharedPartOfCacheComponentsTree(now, task, route, oldTreeChild, newTreeChild);
            } else {
                // We've entered the "new" part of the tree. Switch
                // traversal functions.
                childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, newTreeChild);
            }
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    return 2;
}
function pingNewPartOfCacheComponentsTree(now, task, route, tree) {
    // We're now prefetching in the "new" part of the tree, the part that doesn't
    // exist on the current page. (In other words, we're deeper than the
    // shared layouts.) Segments in here default to being prefetched statically.
    // However, if the server instructs us to, we may switch to a runtime
    // prefetch instead. Traverse the tree and check at each segment.
    if (tree.prefetchHints & _approutertypes.PrefetchHint.HasRuntimePrefetch) {
        // This route has a runtime prefetch response. Since we're below the shared
        // layout, everything from this point should be prefetched using a single,
        // combined runtime request, rather than using per-segment static requests.
        // This is true even if some of the child segments are known to be fully
        // static — once we've decided to perform a runtime prefetch, we might as
        // well respond with the static segments in the same roundtrip. (That's how
        // regular navigations work, too.) We'll still skip over segments that are
        // already cached, though.
        //
        // It's the server's responsibility to set a reasonable value of
        // `hasRuntimePrefetch`. Currently it's user-defined, but eventually, the
        // server may send a value of `false` even if the user opts in, if it
        // determines during build that the route is always fully static. There are
        // more optimizations we can do once we implement fallback param
        // tracking, too.
        //
        // Use the task object to collect the segments that need a runtime prefetch.
        // This will signal to the outer task queue that a second traversal is
        // required to construct a request tree.
        if (task.spawnedRuntimePrefetches === null) {
            task.spawnedRuntimePrefetches = new Set([
                tree.requestKey
            ]);
        } else {
            task.spawnedRuntimePrefetches.add(tree.requestKey);
        }
        // Then exit the traversal without prefetching anything further.
        return 2;
    }
    // This segment should not be runtime prefetched. Prefetch its static data.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, tree);
    pingStaticSegmentData(now, task, route, segment, task.key, tree);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth(task)) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childExitStatus = pingNewPartOfCacheComponentsTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function diffRouteTreeAgainstCurrent(now, task, route, oldTree, newTree, spawnedEntries, fetchStrategy) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    let requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild?.[0];
            if (oldTreeChildSegment !== undefined && doesCurrentSegmentMatchCachedSegment(route, newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                const requestTreeChild = diffRouteTreeAgainstCurrent(now, task, route, oldTreeChild, newTreeChild, spawnedEntries, fetchStrategy);
                requestTreeChildren[parallelRouteKey] = requestTreeChild;
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                switch(fetchStrategy){
                    case _types.FetchStrategy.LoadingBoundary:
                        {
                            // When PPR is disabled, we can't prefetch per segment. We must
                            // fallback to the old prefetch behavior and send a dynamic request.
                            // Only routes that include a loading boundary can be prefetched in
                            // this way.
                            //
                            // This is simlar to a "full" prefetch, but we're much more
                            // conservative about which segments to include in the request.
                            //
                            // The server will only render up to the first loading boundary
                            // inside new part of the tree. If there's no loading boundary
                            // anywhere in the tree, the server will never return any data, so
                            // we can skip the request.
                            const subtreeHasLoadingBoundary = (newTreeChild.prefetchHints & (_approutertypes.PrefetchHint.SegmentHasLoadingBoundary | _approutertypes.PrefetchHint.SubtreeHasLoadingBoundary)) !== 0;
                            const requestTreeChild = subtreeHasLoadingBoundary ? pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, newTreeChild, null, spawnedEntries) : (0, _cache.convertRouteTreeToFlightRouterState)(newTreeChild);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.PPRRuntime:
                        {
                            // This is a runtime prefetch. Fetch all cacheable data in the tree,
                            // not just the static PPR shell.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    case _types.FetchStrategy.Full:
                        {
                            // This is a "full" prefetch. Fetch all the data in the tree, both
                            // static and dynamic. We issue roughly the same request that we
                            // would during a real navigation. The goal is that once the
                            // navigation occurs, the router should not have to fetch any
                            // additional data.
                            //
                            // Although the response will include dynamic data, opting into a
                            // Full prefetch — via <Link prefetch={true}> — implicitly
                            // instructs the cache to treat the response as "static", or non-
                            // dynamic, since the whole point is to cache it for
                            // future navigations.
                            //
                            // Construct a tree (currently a FlightRouterState) that represents
                            // which segments need to be prefetched and which ones are already
                            // cached. If the tree is empty, then we can exit. Otherwise, we'll
                            // send the request tree to the server and use the response to
                            // populate the segment cache.
                            const requestTreeChild = pingRouteTreeAndIncludeDynamicData(now, task, route, newTreeChild, false, spawnedEntries, fetchStrategy);
                            requestTreeChildren[parallelRouteKey] = requestTreeChild;
                            break;
                        }
                    default:
                        fetchStrategy;
                }
            }
        }
    }
    const requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, tree, refetchMarkerContext, spawnedEntries) {
    // This function is similar to pingRouteTreeAndIncludeDynamicData, except the
    // server is only going to return a minimal loading state — it will stop
    // rendering at the first loading boundary. Whereas a Full prefetch is
    // intentionally aggressive and tries to pretfetch all the data that will be
    // needed for a navigation, a LoadingBoundary prefetch is much more
    // conservative. For example, it will omit from the request tree any segment
    // that is already cached, regardles of whether it's partial or full. By
    // contrast, a Full prefetch will refetch partial segments.
    // "inside-shared-layout" tells the server where to start looking for a
    // loading boundary.
    let refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, task.fetchStrategy, tree);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                spawnedEntries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(segment, // might not include it in the pending response. If another route is able
                // to issue a per-segment request, we'll do that in the background.
                _types.FetchStrategy.LoadingBoundary));
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                const segmentHasLoadingBoundary = (tree.prefetchHints & _approutertypes.PrefetchHint.SegmentHasLoadingBoundary) !== 0;
                if (segmentHasLoadingBoundary) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingPPRDisabledRouteTreeUpToLoadingBoundary(now, task, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker
    ];
    return requestTree;
}
function pingRouteTreeAndIncludeDynamicData(now, task, route, tree, isInsideRefetchingParent, spawnedEntries, fetchStrategy) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to. But even though this is a "new" tree, some of the individual segments
    // may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path add an
    // explicit "refetch" marker so the server knows where to start rendering.
    // Once the server starts rendering along a path, it keeps rendering the
    // entire subtree.
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, // and we have to use the former here.
    // We can have a task with `FetchStrategy.PPR` where some of its segments are configured to
    // always use runtime prefetching (via `export const prefetch`), and those should check for
    // entries that include search params.
    fetchStrategy, tree);
    let spawnedSegment = null;
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached.
                if (fetchStrategy === _types.FetchStrategy.Full) {
                    // Check if there's a matching entry in the bfcache. If so, fulfill the
                    // segment using the bfcache entry instead of issuing a new request.
                    const fulfilled = (0, _cache.attemptToFulfillDynamicSegmentFromBFCache)(now, segment, tree);
                    if (fulfilled !== null) {
                        break;
                    }
                }
                // Include it in the request.
                spawnedSegment = (0, _cache.upgradeToPendingSegment)(segment, fetchStrategy);
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                if (segment.isPartial && (0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    // The cached segment contains dynamic holes, and was prefetched using a
                    // less specific strategy than the current one. This means we're in one
                    // of these cases:
                    //   - we have a static prefetch, and we're doing a runtime prefetch
                    //   - we have a static or runtime prefetch, and we're doing a Full
                    //     prefetch (or a navigation).
                    // In either case, we need to include it in the request to get a more
                    // specific (or full) version. However, if there's a non-stale bfcache
                    // entry from a previous navigation, prefer that over making a new
                    // request.
                    if (fetchStrategy === _types.FetchStrategy.Full) {
                        const fulfilled = (0, _cache.attemptToUpgradeSegmentFromBFCache)(now, tree);
                        if (fulfilled !== null) {
                            break;
                        }
                    }
                    spawnedSegment = pingFullSegmentRevalidation(now, tree, fetchStrategy);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
        case _cache.EntryStatus.Rejected:
            {
                // There's either another prefetch currently in progress, or the previous
                // attempt failed. If the new strategy can provide more content, fetch it again.
                if ((0, _cache.canNewFetchStrategyProvideMoreContent)(segment.fetchStrategy, fetchStrategy)) {
                    spawnedSegment = pingFullSegmentRevalidation(now, tree, fetchStrategy);
                }
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRouteTreeAndIncludeDynamicData(now, task, route, childTree, isInsideRefetchingParent || spawnedSegment !== null, spawnedEntries, fetchStrategy);
        }
    }
    if (spawnedSegment !== null) {
        // Add the pending entry to the result map.
        spawnedEntries.set(tree.requestKey, spawnedSegment);
    }
    // Don't bother to add a refetch marker if one is already present in a parent.
    const refetchMarker = !isInsideRefetchingParent && spawnedSegment !== null ? 'refetch' : null;
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker
    ];
    return requestTree;
}
function pingRuntimePrefetches(now, task, route, tree, spawnedRuntimePrefetches, spawnedEntries) {
    // Construct a request tree (FlightRouterState) for a runtime prefetch. If
    // a segment is part of the runtime prefetch, the tree is constructed by
    // diffing against what's already in the prefetch cache. Otherwise, we send
    // a regular FlightRouterState with no special markers.
    //
    // See pingRouteTreeAndIncludeDynamicData for details.
    if (spawnedRuntimePrefetches.has(tree.requestKey)) {
        // This segment needs a runtime prefetch.
        return pingRouteTreeAndIncludeDynamicData(now, task, route, tree, false, spawnedEntries, _types.FetchStrategy.PPRRuntime);
    }
    let requestTreeChildren = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = pingRuntimePrefetches(now, task, route, childTree, spawnedRuntimePrefetches, spawnedEntries);
        }
    }
    // This segment is not part of the runtime prefetch. Clone the base tree.
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        null
    ];
    return requestTree;
}
function pingStaticSegmentData(now, task, route, segment, routeKey, tree) {
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Upgrade to Pending so we know there's already a request in progress
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(segment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            {
                // There's already a request in progress. Depending on what kind of
                // request it is, we may want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a pending request, but because it's using the old
                        // prefetching strategy, we can't be sure if it will be fulfilled by
                        // the response — it might be inside the loading boundary. Perform
                        // a revalidation, but because it's speculative, wait to do it at
                        // background priority.
                        if (background(task)) {
                            // TODO: Instead of speculatively revalidating, consider including
                            // `hasLoading` in the route tree prefetch response.
                            pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        }
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                // The existing entry in the cache was rejected. Depending on how it
                // was originally fetched, we may or may not want to revalidate it.
                switch(segment.fetchStrategy){
                    case _types.FetchStrategy.PPR:
                    case _types.FetchStrategy.PPRRuntime:
                    case _types.FetchStrategy.Full:
                        break;
                    case _types.FetchStrategy.LoadingBoundary:
                        // There's a rejected entry, but it was fetched using the loading
                        // boundary strategy. So the reason it wasn't returned by the server
                        // might just be because it was inside a loading boundary. Or because
                        // there was a dynamic rewrite. Revalidate it using the per-
                        // segment strategy.
                        //
                        // Because a rejected segment will definitely prevent the segment (and
                        // all of its children) from rendering, we perform this revalidation
                        // immediately instead of deferring it to a background task.
                        pingPPRSegmentRevalidation(now, route, routeKey, tree);
                        break;
                    default:
                        segment.fetchStrategy;
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            break;
        default:
            segment;
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
/**
 * Walks the RouteTree (including the head metadata) and collects any segments
 * that are still Empty into a Map, upgrading them to Pending. These entries
 * will be fulfilled by the inlined prefetch response.
 */ function collectInlinedEntries(now, route) {
    const entries = new Map();
    collectInlinedEntriesImpl(now, route.tree, entries);
    // Also collect the head/metadata entry.
    const headEntry = (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, route.metadata);
    if (headEntry.status === _cache.EntryStatus.Empty) {
        entries.set(route.metadata.requestKey, (0, _cache.upgradeToPendingSegment)(headEntry, _types.FetchStrategy.PPR));
    }
    return entries;
}
function collectInlinedEntriesImpl(now, tree, entries) {
    const entry = (0, _cache.readOrCreateSegmentCacheEntry)(now, _types.FetchStrategy.PPR, tree);
    if (entry.status === _cache.EntryStatus.Empty) {
        entries.set(tree.requestKey, (0, _cache.upgradeToPendingSegment)(entry, _types.FetchStrategy.PPR));
    }
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            collectInlinedEntriesImpl(now, tree.slots[parallelRouteKey], entries);
        }
    }
}
function pingPPRSegmentRevalidation(now, route, routeKey, tree) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, _types.FetchStrategy.PPR, tree);
    switch(revalidatingSegment.status){
        case _cache.EntryStatus.Empty:
            // Spawn a prefetch request. The fetch function handles upserting
            // the entry at the correct fulfilled vary path upon completion.
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, (0, _cache.upgradeToPendingSegment)(revalidatingSegment, _types.FetchStrategy.PPR), routeKey, tree));
            break;
        case _cache.EntryStatus.Pending:
            break;
        case _cache.EntryStatus.Fulfilled:
        case _cache.EntryStatus.Rejected:
            break;
        default:
            revalidatingSegment;
    }
}
function pingFullSegmentRevalidation(now, tree, fetchStrategy) {
    const revalidatingSegment = (0, _cache.readOrCreateRevalidatingSegmentEntry)(now, fetchStrategy, tree);
    if (revalidatingSegment.status === _cache.EntryStatus.Empty) {
        // During a Full/PPRRuntime prefetch, a single dynamic request is made for all the
        // segments that we need. So we don't initiate a request here directly. By
        // returning a pending entry from this function, it signals to the caller
        // that this segment should be included in the request that's sent to
        // the server.
        const pendingSegment = (0, _cache.upgradeToPendingSegment)(revalidatingSegment, fetchStrategy);
        // The upsert is handled by fulfillEntrySpawnedByRuntimePrefetch
        // when the dynamic prefetch response is written into the cache.
        return pendingSegment;
    } else {
        // There's already a revalidation in progress.
        const nonEmptyRevalidatingSegment = revalidatingSegment;
        if ((0, _cache.canNewFetchStrategyProvideMoreContent)(nonEmptyRevalidatingSegment.fetchStrategy, fetchStrategy)) {
            // The existing revalidation was fetched using a less specific strategy.
            // Reset it and start a new revalidation.
            const emptySegment = (0, _cache.overwriteRevalidatingSegmentCacheEntry)(now, fetchStrategy, tree);
            const pendingSegment = (0, _cache.upgradeToPendingSegment)(emptySegment, fetchStrategy);
            // The upsert is handled by fulfillEntrySpawnedByRuntimePrefetch
            // when the dynamic prefetch response is written into the cache.
            return pendingSegment;
        }
        switch(nonEmptyRevalidatingSegment.status){
            case _cache.EntryStatus.Pending:
                // There's already an in-progress prefetch that includes this segment.
                return null;
            case _cache.EntryStatus.Fulfilled:
            case _cache.EntryStatus.Rejected:
                // A previous revalidation attempt finished, but we chose not to replace
                // the existing entry in the cache. Don't try again until or unless the
                // revalidation entry expires.
                return null;
            default:
                nonEmptyRevalidatingSegment;
                return null;
        }
    }
}
function doesCurrentSegmentMatchCachedSegment(route, currentSegment, cachedSegment) {
    if (cachedSegment === _segment.PAGE_SEGMENT_KEY) {
        // In the FlightRouterState stored by the router, the page segment has the
        // rendered search params appended to the name of the segment. In the
        // prefetch cache, however, this is stored separately. So, when comparing
        // the router's current FlightRouterState to the cached FlightRouterState,
        // we need to make sure we compare both parts of the segment.
        // TODO: This is not modeled clearly. We use the same type,
        // FlightRouterState, for both the CacheNode tree _and_ the prefetch cache
        // _and_ the server response format, when conceptually those are three
        // different things and treated in different ways. We should encode more of
        // this information into the type design so mistakes are less likely.
        return currentSegment === (0, _segment.addSearchParamsIfPageSegment)(_segment.PAGE_SEGMENT_KEY, Object.fromEntries(new URLSearchParams(route.renderedSearch)));
    }
    // Non-page segments are compared using the same function as the server
    return (0, _matchsegments.matchSegment)(cachedSegment, currentSegment);
}
// -----------------------------------------------------------------------------
// The remainder of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    // `priority` is an integer, where higher numbers are higher priority.
    const priorityDiff = b.priority - a.priority;
    if (priorityDiff !== 0) {
        return priorityDiff;
    }
    // If the priority is the same, check which phase the prefetch is in — is it
    // prefetching the route tree, or the segments? Route trees are prioritized.
    const phaseDiff = b.phase - a.phase;
    if (phaseDiff !== 0) {
        return phaseDiff;
    }
    // Finally, check the insertion order. `sortId` is an incrementing counter
    // assigned to prefetches. We want to process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    const index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    const first = heap[0];
    first._heapIndex = -1;
    const last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
function heapDelete(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        node._heapIndex = -1;
        if (heap.length !== 0) {
            const last = heap.pop();
            if (last !== node) {
                heap[index] = last;
                last._heapIndex = index;
                heapSiftDown(heap, last, index);
            }
        }
    }
}
function heapResift(heap, node) {
    const index = node._heapIndex;
    if (index !== -1) {
        if (index === 0) {
            heapSiftDown(heap, node, 0);
        } else {
            const parentIndex = index - 1 >>> 1;
            const parent = heap[parentIndex];
            if (compareQueuePriority(parent, node) > 0) {
                // The parent is larger. Sift up.
                heapSiftUp(heap, node, index);
            } else {
                // The parent is smaller (or equal). Sift down.
                heapSiftDown(heap, node, index);
            }
        }
    }
}
function heapSiftUp(heap, node, i) {
    let index = i;
    while(index > 0){
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    const halfLength = length >>> 1;
    while(index < halfLength){
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    getLinkForCurrentNavigation: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function() {
        return PENDING_LINK_STATUS;
    },
    getLinkForCurrentNavigation: function() {
        return getLinkForCurrentNavigation;
    },
    mountFormInstance: function() {
        return mountFormInstance;
    },
    mountLinkInstance: function() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function() {
        return unmountPrefetchableInstance;
    }
});
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _cachekey = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
let linkForMostRecentNavigation = null;
const PENDING_LINK_STATUS = {
    pending: true
};
const IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(()=>{
        linkForMostRecentNavigation?.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link?.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
function getLinkForCurrentNavigation() {
    return linkForMostRecentNavigation;
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
const prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
const prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    const existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return null;
    }
}
function mountLinkInstance(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        const prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            const instance = {
                router,
                fetchStrategy,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus
    };
    return instance;
}
function mountFormInstance(element, href, router, fetchStrategy) {
    const prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    const instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _scheduler.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    const instance = undefined;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    const instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _types.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    // Ensures that app-router-instance is not compiled in the server bundle
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function pingVisibleLinks(nextUrl, tree) {
    // For each currently visible link, cancel the existing prefetch task (if it
    // exists) and schedule a new one. This is effectively the same as if all the
    // visible links left and then re-entered the viewport.
    //
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    for (const instance of prefetchableAndVisible){
        const task = instance.prefetchTask;
        if (task !== null && !(0, _scheduler.isPrefetchTaskDirty)(task, nextUrl, tree)) {
            continue;
        }
        // Something changed. Cancel the existing prefetch task and schedule a
        // new one.
        if (task !== null) {
            (0, _scheduler.cancelPrefetchTask)(task);
        }
        const cacheKey = (0, _cachekey.createCacheKey)(instance.prefetchHref, nextUrl);
        instance.prefetchTask = (0, _scheduler.schedulePrefetchTask)(cacheKey, tree, instance.fetchStrategy, _types.PrefetchPriority.Default, null);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-ssr] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-ssr] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/has-base-path.js [app-ssr] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils/error-once.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/use-merged-ref.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils.js [app-ssr] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/add-base-path.js [app-ssr] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils/warn-once.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/links.js [app-ssr] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-ssr] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/components/segment-cache/types.js [app-ssr] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/shared/lib/utils/error-once.js [app-ssr] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (router !== null) {
            linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
        }
        return ()=>{
            if (linkInstanceRef.current) {
                (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                linkInstanceRef.current = null;
            }
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (prefetchProp === true) {
            return _types.FetchStrategy.Full;
        }
        // `null` or `"auto"`: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport.
        // This will also include invalid prop values that don't match the types specified here.
        // (although those should've been filtered out by prop validation in dev)
        prefetchProp;
        return _types.FetchStrategy.PPR;
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * Map of ARIAMixin properties to attributes
 */ __turbopack_context__.s([
    "ElementInternals",
    ()=>ElementInternalsShimWithRealType,
    "ElementInternalsShim",
    ()=>ElementInternalsShim,
    "HYDRATE_INTERNALS_ATTR_PREFIX",
    ()=>HYDRATE_INTERNALS_ATTR_PREFIX,
    "ariaMixinAttributes",
    ()=>ariaMixinAttributes
]);
const ariaMixinAttributes = {
    ariaAtomic: 'aria-atomic',
    ariaAutoComplete: 'aria-autocomplete',
    ariaBrailleLabel: 'aria-braillelabel',
    ariaBrailleRoleDescription: 'aria-brailleroledescription',
    ariaBusy: 'aria-busy',
    ariaChecked: 'aria-checked',
    ariaColCount: 'aria-colcount',
    ariaColIndex: 'aria-colindex',
    ariaColIndexText: 'aria-colindextext',
    ariaColSpan: 'aria-colspan',
    ariaCurrent: 'aria-current',
    ariaDescription: 'aria-description',
    ariaDisabled: 'aria-disabled',
    ariaExpanded: 'aria-expanded',
    ariaHasPopup: 'aria-haspopup',
    ariaHidden: 'aria-hidden',
    ariaInvalid: 'aria-invalid',
    ariaKeyShortcuts: 'aria-keyshortcuts',
    ariaLabel: 'aria-label',
    ariaLevel: 'aria-level',
    ariaLive: 'aria-live',
    ariaModal: 'aria-modal',
    ariaMultiLine: 'aria-multiline',
    ariaMultiSelectable: 'aria-multiselectable',
    ariaOrientation: 'aria-orientation',
    ariaPlaceholder: 'aria-placeholder',
    ariaPosInSet: 'aria-posinset',
    ariaPressed: 'aria-pressed',
    ariaReadOnly: 'aria-readonly',
    ariaRelevant: 'aria-relevant',
    ariaRequired: 'aria-required',
    ariaRoleDescription: 'aria-roledescription',
    ariaRowCount: 'aria-rowcount',
    ariaRowIndex: 'aria-rowindex',
    ariaRowIndexText: 'aria-rowindextext',
    ariaRowSpan: 'aria-rowspan',
    ariaSelected: 'aria-selected',
    ariaSetSize: 'aria-setsize',
    ariaSort: 'aria-sort',
    ariaValueMax: 'aria-valuemax',
    ariaValueMin: 'aria-valuemin',
    ariaValueNow: 'aria-valuenow',
    ariaValueText: 'aria-valuetext',
    role: 'role'
};
const ElementInternalsShim = class ElementInternals {
    get shadowRoot() {
        // Grab the shadow root instance from the Element shim
        // to ensure that the shadow root is always available
        // to the internals instance even if the mode is 'closed'
        return this.__host.__shadowRoot;
    }
    constructor(_host){
        this.ariaActiveDescendantElement = null;
        this.ariaAtomic = '';
        this.ariaAutoComplete = '';
        this.ariaBrailleLabel = '';
        this.ariaBrailleRoleDescription = '';
        this.ariaBusy = '';
        this.ariaChecked = '';
        this.ariaColCount = '';
        this.ariaColIndex = '';
        this.ariaColIndexText = '';
        this.ariaColSpan = '';
        this.ariaControlsElements = null;
        this.ariaCurrent = '';
        this.ariaDescribedByElements = null;
        this.ariaDescription = '';
        this.ariaDetailsElements = null;
        this.ariaDisabled = '';
        this.ariaErrorMessageElements = null;
        this.ariaExpanded = '';
        this.ariaFlowToElements = null;
        this.ariaHasPopup = '';
        this.ariaHidden = '';
        this.ariaInvalid = '';
        this.ariaKeyShortcuts = '';
        this.ariaLabel = '';
        this.ariaLabelledByElements = null;
        this.ariaLevel = '';
        this.ariaLive = '';
        this.ariaModal = '';
        this.ariaMultiLine = '';
        this.ariaMultiSelectable = '';
        this.ariaOrientation = '';
        this.ariaOwnsElements = null;
        this.ariaPlaceholder = '';
        this.ariaPosInSet = '';
        this.ariaPressed = '';
        this.ariaReadOnly = '';
        this.ariaRelevant = '';
        this.ariaRequired = '';
        this.ariaRoleDescription = '';
        this.ariaRowCount = '';
        this.ariaRowIndex = '';
        this.ariaRowIndexText = '';
        this.ariaRowSpan = '';
        this.ariaSelected = '';
        this.ariaSetSize = '';
        this.ariaSort = '';
        this.ariaValueMax = '';
        this.ariaValueMin = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.role = '';
        this.form = null;
        this.labels = [];
        this.states = new Set();
        this.validationMessage = '';
        this.validity = {};
        this.willValidate = true;
        this.__host = _host;
    }
    checkValidity() {
        // TODO(augustjk) Consider actually implementing logic.
        // See https://github.com/lit/lit/issues/3740
        console.warn('`ElementInternals.checkValidity()` was called on the server.' + 'This method always returns true.');
        return true;
    }
    reportValidity() {
        return true;
    }
    setFormValue() {}
    setValidity() {}
};
const ElementInternalsShimWithRealType = ElementInternalsShim;
;
const HYDRATE_INTERNALS_ATTR_PREFIX = 'hydrate-internals-';
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/events.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomEvent",
    ()=>CustomEventShimWithRealType,
    "CustomEventShim",
    ()=>CustomEventShimWithRealType,
    "Event",
    ()=>EventShimWithRealType,
    "EventShim",
    ()=>EventShimWithRealType
]);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var __classPrivateFieldSet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Event_cancelable, _Event_bubbles, _Event_composed, _Event_defaultPrevented, _Event_timestamp, _Event_propagationStopped, _Event_type, _Event_target, _Event_isBeingDispatched, _a, _CustomEvent_detail, _b;
// Event phases
const NONE = 0;
const CAPTURING_PHASE = 1;
const AT_TARGET = 2;
const BUBBLING_PHASE = 3;
const enumerableProperty = {
    __proto__: null
};
enumerableProperty.enumerable = true;
Object.freeze(enumerableProperty);
// TODO: Remove this when we remove support for vm modules (--experimental-vm-modules).
const EventShim = (_a = class Event {
    constructor(type, options = {}){
        _Event_cancelable.set(this, false);
        _Event_bubbles.set(this, false);
        _Event_composed.set(this, false);
        _Event_defaultPrevented.set(this, false);
        _Event_timestamp.set(this, Date.now());
        _Event_propagationStopped.set(this, false);
        _Event_type.set(this, void 0);
        _Event_target.set(this, void 0);
        _Event_isBeingDispatched.set(this, void 0);
        this.NONE = NONE;
        this.CAPTURING_PHASE = CAPTURING_PHASE;
        this.AT_TARGET = AT_TARGET;
        this.BUBBLING_PHASE = BUBBLING_PHASE;
        if (arguments.length === 0) throw new Error(`The type argument must be specified`);
        if (typeof options !== 'object' || !options) {
            throw new Error(`The "options" argument must be an object`);
        }
        const { bubbles, cancelable, composed } = options;
        __classPrivateFieldSet(this, _Event_cancelable, !!cancelable, "f");
        __classPrivateFieldSet(this, _Event_bubbles, !!bubbles, "f");
        __classPrivateFieldSet(this, _Event_composed, !!composed, "f");
        __classPrivateFieldSet(this, _Event_type, `${type}`, "f");
        __classPrivateFieldSet(this, _Event_target, null, "f");
        __classPrivateFieldSet(this, _Event_isBeingDispatched, false, "f");
    }
    initEvent(_type, _bubbles, _cancelable) {
        throw new Error('Method not implemented.');
    }
    stopImmediatePropagation() {
        this.stopPropagation();
    }
    preventDefault() {
        __classPrivateFieldSet(this, _Event_defaultPrevented, true, "f");
    }
    get target() {
        return __classPrivateFieldGet(this, _Event_target, "f");
    }
    get currentTarget() {
        return __classPrivateFieldGet(this, _Event_target, "f");
    }
    get srcElement() {
        return __classPrivateFieldGet(this, _Event_target, "f");
    }
    get type() {
        return __classPrivateFieldGet(this, _Event_type, "f");
    }
    get cancelable() {
        return __classPrivateFieldGet(this, _Event_cancelable, "f");
    }
    get defaultPrevented() {
        return __classPrivateFieldGet(this, _Event_cancelable, "f") && __classPrivateFieldGet(this, _Event_defaultPrevented, "f");
    }
    get timeStamp() {
        return __classPrivateFieldGet(this, _Event_timestamp, "f");
    }
    composedPath() {
        return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? [
            __classPrivateFieldGet(this, _Event_target, "f")
        ] : [];
    }
    get returnValue() {
        return !__classPrivateFieldGet(this, _Event_cancelable, "f") || !__classPrivateFieldGet(this, _Event_defaultPrevented, "f");
    }
    get bubbles() {
        return __classPrivateFieldGet(this, _Event_bubbles, "f");
    }
    get composed() {
        return __classPrivateFieldGet(this, _Event_composed, "f");
    }
    get eventPhase() {
        return __classPrivateFieldGet(this, _Event_isBeingDispatched, "f") ? _a.AT_TARGET : _a.NONE;
    }
    get cancelBubble() {
        return __classPrivateFieldGet(this, _Event_propagationStopped, "f");
    }
    set cancelBubble(value) {
        if (value) {
            __classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
        }
    }
    stopPropagation() {
        __classPrivateFieldSet(this, _Event_propagationStopped, true, "f");
    }
    get isTrusted() {
        return false;
    }
}, _Event_cancelable = new WeakMap(), _Event_bubbles = new WeakMap(), _Event_composed = new WeakMap(), _Event_defaultPrevented = new WeakMap(), _Event_timestamp = new WeakMap(), _Event_propagationStopped = new WeakMap(), _Event_type = new WeakMap(), _Event_target = new WeakMap(), _Event_isBeingDispatched = new WeakMap(), _a.NONE = NONE, _a.CAPTURING_PHASE = CAPTURING_PHASE, _a.AT_TARGET = AT_TARGET, _a.BUBBLING_PHASE = BUBBLING_PHASE, _a);
Object.defineProperties(EventShim.prototype, {
    initEvent: enumerableProperty,
    stopImmediatePropagation: enumerableProperty,
    preventDefault: enumerableProperty,
    target: enumerableProperty,
    currentTarget: enumerableProperty,
    srcElement: enumerableProperty,
    type: enumerableProperty,
    cancelable: enumerableProperty,
    defaultPrevented: enumerableProperty,
    timeStamp: enumerableProperty,
    composedPath: enumerableProperty,
    returnValue: enumerableProperty,
    bubbles: enumerableProperty,
    composed: enumerableProperty,
    eventPhase: enumerableProperty,
    cancelBubble: enumerableProperty,
    stopPropagation: enumerableProperty,
    isTrusted: enumerableProperty
});
// TODO: Remove this when we remove support for vm modules (--experimental-vm-modules).
const CustomEventShim = (_b = class CustomEvent extends EventShim {
    constructor(type, options = {}){
        super(type, options);
        _CustomEvent_detail.set(this, void 0);
        __classPrivateFieldSet(this, _CustomEvent_detail, options?.detail ?? null, "f");
    }
    initCustomEvent(_type, _bubbles, _cancelable, _detail) {
        throw new Error('Method not implemented.');
    }
    get detail() {
        return __classPrivateFieldGet(this, _CustomEvent_detail, "f");
    }
}, _CustomEvent_detail = new WeakMap(), _b);
Object.defineProperties(CustomEventShim.prototype, {
    detail: enumerableProperty
});
const EventShimWithRealType = EventShim;
const CustomEventShimWithRealType = CustomEventShim;
;
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/css.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSRule",
    ()=>CSSRuleShimWithRealType,
    "CSSRuleList",
    ()=>CSSRuleListShimWithRealType,
    "CSSStyleSheet",
    ()=>CSSStyleSheetShimWithRealType,
    "CSSStyleSheetShim",
    ()=>CSSStyleSheetShimWithRealType,
    "MediaList",
    ()=>MediaListShimWithRealType,
    "StyleSheet",
    ()=>StyleSheetShimWithRealType
]);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var _a;
const MediaListShim = class MediaList extends Array {
    get mediaText() {
        return this.join(', ');
    }
    toString() {
        return this.mediaText;
    }
    appendMedium(medium) {
        if (!this.includes(medium)) {
            this.push(medium);
        }
    }
    deleteMedium(medium) {
        const index = this.indexOf(medium);
        if (index !== -1) {
            this.splice(index, 1);
        }
    }
    item(index) {
        return this[index] ?? null;
    }
};
const MediaListShimWithRealType = MediaListShim;
;
const StyleSheetShim = class StyleSheet {
    constructor(){
        this.__media = new MediaListShim();
        this.disabled = false;
    }
    get href() {
        return null;
    }
    get media() {
        return this.__media;
    }
    get ownerNode() {
        return null;
    }
    get parentStyleSheet() {
        return null;
    }
    get title() {
        return null;
    }
    get type() {
        return 'text/css';
    }
};
const StyleSheetShimWithRealType = StyleSheetShim;
;
const CSSRuleShim = (_a = class CSSRule {
    constructor(){
        this.STYLE_RULE = 1;
        this.CHARSET_RULE = 2;
        this.IMPORT_RULE = 3;
        this.MEDIA_RULE = 4;
        this.FONT_FACE_RULE = 5;
        this.PAGE_RULE = 6;
        this.NAMESPACE_RULE = 10;
        this.KEYFRAMES_RULE = 7;
        this.KEYFRAME_RULE = 8;
        this.SUPPORTS_RULE = 12;
        this.COUNTER_STYLE_RULE = 11;
        this.FONT_FEATURE_VALUES_RULE = 14;
        this.MARGIN_RULE = 9;
        this.__parentStyleSheet = null;
        this.cssText = '';
    }
    get parentRule() {
        return null;
    }
    get parentStyleSheet() {
        return this.__parentStyleSheet;
    }
    get type() {
        return 0;
    }
}, _a.STYLE_RULE = 1, _a.CHARSET_RULE = 2, _a.IMPORT_RULE = 3, _a.MEDIA_RULE = 4, _a.FONT_FACE_RULE = 5, _a.PAGE_RULE = 6, _a.NAMESPACE_RULE = 10, _a.KEYFRAMES_RULE = 7, _a.KEYFRAME_RULE = 8, _a.SUPPORTS_RULE = 12, _a.COUNTER_STYLE_RULE = 11, _a.FONT_FEATURE_VALUES_RULE = 14, _a.MARGIN_RULE = 9, _a);
const CSSRuleShimWithRealType = CSSRuleShim;
;
const CSSRuleListShim = class CSSRuleList extends Array {
    item(index) {
        return this[index] ?? null;
    }
};
const CSSRuleListShimWithRealType = CSSRuleListShim;
;
const CSSStyleSheetShim = class CSSStyleSheet extends StyleSheetShim {
    constructor(){
        super(...arguments);
        this.__rules = new CSSRuleListShim();
    }
    get cssRules() {
        return this.__rules;
    }
    get ownerRule() {
        return null;
    }
    get rules() {
        return this.cssRules;
    }
    addRule(_selector, _style, _index) {
        throw new Error('Method not implemented.');
    }
    deleteRule(_index) {
        throw new Error('Method not implemented.');
    }
    insertRule(_rule, _index) {
        throw new Error('Method not implemented.');
    }
    removeRule(_index) {
        throw new Error('Method not implemented.');
    }
    replace(text) {
        this.replaceSync(text);
        return Promise.resolve(this);
    }
    replaceSync(text) {
        this.__rules.length = 0;
        const rule = new CSSRuleShim();
        rule.cssText = text;
        this.__rules.push(rule);
    }
};
const CSSStyleSheetShimWithRealType = CSSStyleSheetShim;
;
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomElementRegistry",
    ()=>CustomElementRegistryShimWithRealType,
    "Document",
    ()=>DocumentShimWithRealType,
    "Element",
    ()=>ElementShimWithRealType,
    "EventTarget",
    ()=>EventTargetShimWithRealType,
    "HTMLElement",
    ()=>HTMLElementShimWithRealType,
    "HTMLSlotElement",
    ()=>HTMLSlotElementShimWithRealType,
    "Node",
    ()=>NodeShimWithRealType,
    "ShadowRoot",
    ()=>ShadowRootShimWithRealType,
    "Window",
    ()=>WindowShimWithRealType,
    "customElements",
    ()=>customElements,
    "document",
    ()=>document,
    "window",
    ()=>window
]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$element$2d$internals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$css$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/lib/css.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// In an empty Node.js vm, we need to patch the global context.
// TODO: Remove these globalThis assignments when we remove support
// for vm modules (--experimental-vm-modules).
globalThis.Event ??= __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"];
globalThis.CustomEvent ??= __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEventShim"];
const constructionToken = Symbol();
const isCaptureEventListener = (options)=>typeof options === 'boolean' ? options : options?.capture ?? false;
const enumerableProperty = {
    __proto__: null
};
enumerableProperty.enumerable = true;
Object.freeze(enumerableProperty);
/**
 * This is a basic implementation of an EventTarget.
 *
 * This is not fully spec compliant (e.g. validation),
 * but should work well enough for our use cases.
 *
 * @see https://dom.spec.whatwg.org/#eventtarget
 *
 * Example Event Path
 * ------------------
 *
 * Note that this depends on the logic in `packages/labs/ssr/src/lib/render-value.ts`.
 * Any element that is not a custom element or a slot element is skipped in the chain.
 *
 * <main>
 *   <my-el1>
 *     #shadow-dom (open)
 *       <div>
 *         <slot></slot>
 *         <my-el2>
 *           #shadow-dom (closed)
 *             <slot></slot>
 *             <event-dispatcher3></event-dispatcher3>
 *           <slot name="nested"></slot>
 *         </my-el2>
 *       </div>
 *     <event-dispatcher1></event-dispatcher1>
 *     <event-dispatcher2 slot="nested"></event-dispatcher2>
 *   </my-el1>
 * </main>
 *
 * Given the previous structure, the event path of this shim would be as follows,
 * for the given dispatcher with an event that bubbles (document-fragment
 * represents a ShadowRoot/#shadow-dom instance):
 *
 * <event-dispatcher1>:
 * [event-dispatcher1, slot{my-el1}, document-fragment{my-el1}, my-el1, document]
 *
 * <event-dispatcher2>:
 * [
 *   event-dispatcher2,
 *   slot[name="nested"]{my-el1},
 *   slot{my-el2},
 *   document-fragment{my-el2},
 *   my-el2,
 *   document-fragment{my-el1},
 *   my-el1,
 *   document
 * ]
 *
 * <event-dispatcher3> (without composed):
 * [event-dispatcher3, document-fragment{my-el2}]
 *
 * <event-dispatcher3> (composed):
 * [
 *   event-dispatcher3,
 *   document-fragment{my-el2},
 *   my-el2,
 *   document-fragment{my-el1},
 *   my-el1,
 *   document
 * ]
 */ class EventTarget {
    constructor(){
        this.__eventListeners = new Map();
        this.__captureEventListeners = new Map();
    }
    addEventListener(type, callback, options) {
        if (callback === undefined || callback === null) {
            return;
        }
        const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
        let eventListeners = eventListenersMap.get(type);
        if (eventListeners === undefined) {
            eventListeners = new Map();
            eventListenersMap.set(type, eventListeners);
        } else if (eventListeners.has(callback)) {
            return;
        }
        const normalizedOptions = typeof options === 'object' && options ? options : {};
        normalizedOptions.signal?.addEventListener('abort', ()=>this.removeEventListener(type, callback, options));
        eventListeners.set(callback, normalizedOptions ?? {});
    }
    removeEventListener(type, callback, options) {
        if (callback === undefined || callback === null) {
            return;
        }
        const eventListenersMap = isCaptureEventListener(options) ? this.__captureEventListeners : this.__eventListeners;
        const eventListeners = eventListenersMap.get(type);
        if (eventListeners !== undefined) {
            eventListeners.delete(callback);
            if (!eventListeners.size) {
                eventListenersMap.delete(type);
            }
        }
    }
    dispatchEvent(event) {
        let composedPath = this.__resolveFullEventPath();
        if (!event.composed && this.__host) {
            // If the event is not composed and the event was dispatched inside
            // shadow DOM, we need to stop the event chain before the host of the
            // shadow DOM.
            composedPath = composedPath.slice(0, composedPath.indexOf(this.__host));
        }
        // We need to patch various properties that would either be empty or wrong
        // in this scenario.
        let stopPropagation = false;
        let stopImmediatePropagation = false;
        let eventPhase = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].NONE;
        let target = null;
        let tmpTarget = null;
        let currentTarget = null;
        const originalStopPropagation = event.stopPropagation;
        const originalStopImmediatePropagation = event.stopImmediatePropagation;
        Object.defineProperties(event, {
            target: {
                get () {
                    return target ?? tmpTarget;
                },
                ...enumerableProperty
            },
            srcElement: {
                get () {
                    return event.target;
                },
                ...enumerableProperty
            },
            currentTarget: {
                get () {
                    return currentTarget;
                },
                ...enumerableProperty
            },
            eventPhase: {
                get () {
                    return eventPhase;
                },
                ...enumerableProperty
            },
            composedPath: {
                value: ()=>composedPath,
                ...enumerableProperty
            },
            stopPropagation: {
                value: ()=>{
                    stopPropagation = true;
                    originalStopPropagation.call(event);
                },
                ...enumerableProperty
            },
            stopImmediatePropagation: {
                value: ()=>{
                    stopImmediatePropagation = true;
                    originalStopImmediatePropagation.call(event);
                },
                ...enumerableProperty
            }
        });
        // An event handler can either be a function, an object with a handleEvent
        // method or null. This function takes care to call the event handler
        // correctly.
        const invokeEventListener = (listener, options, eventListenerMap)=>{
            if (typeof listener === 'function') {
                listener(event);
            } else if (typeof listener?.handleEvent === 'function') {
                listener.handleEvent(event);
            }
            if (options.once) {
                eventListenerMap.delete(listener);
            }
        };
        // When an event is finished being dispatched, which can be after the event
        // tree has been traversed or stopPropagation/stopImmediatePropagation has
        // been called. Once that is the case, the currentTarget and eventPhase
        // need to be reset and a value, representing whether the event has not
        // been prevented, needs to be returned.
        const finishDispatch = ()=>{
            currentTarget = null;
            eventPhase = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].NONE;
            return !event.defaultPrevented;
        };
        // An event starts with the capture order, where it starts from the top.
        // This is done even if bubbles is set to false, which is the default.
        const captureEventPath = composedPath.slice().reverse();
        // If the event target, which dispatches the event, is either in the light DOM
        // or the event is not composed, the target is always itself. If that is not
        // the case, the target needs to be retargeted: https://dom.spec.whatwg.org/#retarget
        target = !this.__host || !event.composed ? this : null;
        const retarget = (eventTargets)=>{
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            tmpTarget = this;
            while(tmpTarget.__host && eventTargets.includes(tmpTarget.__host)){
                tmpTarget = tmpTarget.__host;
            }
        };
        for (const eventTarget of captureEventPath){
            if (!target && (!tmpTarget || tmpTarget === eventTarget.__host)) {
                retarget(captureEventPath.slice(captureEventPath.indexOf(eventTarget)));
            }
            currentTarget = eventTarget;
            eventPhase = eventTarget === event.target ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].AT_TARGET : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].CAPTURING_PHASE;
            const captureEventListeners = eventTarget.__captureEventListeners.get(event.type);
            if (captureEventListeners) {
                for (const [listener, options] of captureEventListeners){
                    invokeEventListener(listener, options, captureEventListeners);
                    if (stopImmediatePropagation) {
                        // Event.stopImmediatePropagation() stops any following invocation
                        // of an event handler even on the same event target.
                        return finishDispatch();
                    }
                }
            }
            if (stopPropagation) {
                // Event.stopPropagation() stops any following invocation
                // of an event handler for any following event targets.
                return finishDispatch();
            }
        }
        const bubbleEventPath = event.bubbles ? composedPath : [
            this
        ];
        tmpTarget = null;
        for (const eventTarget of bubbleEventPath){
            if (!target && (!tmpTarget || eventTarget === tmpTarget.__host)) {
                retarget(bubbleEventPath.slice(0, bubbleEventPath.indexOf(eventTarget) + 1));
            }
            currentTarget = eventTarget;
            eventPhase = eventTarget === event.target ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].AT_TARGET : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventShim"].BUBBLING_PHASE;
            const eventListeners = eventTarget.__eventListeners.get(event.type);
            if (eventListeners) {
                for (const [listener, options] of eventListeners){
                    invokeEventListener(listener, options, eventListeners);
                    if (stopImmediatePropagation) {
                        // Event.stopImmediatePropagation() stops any following invocation
                        // of an event handler even on the same event target.
                        return finishDispatch();
                    }
                }
            }
            if (stopPropagation) {
                // Event.stopPropagation() stops any following invocation
                // of an event handler for any following event targets.
                return finishDispatch();
            }
        }
        return finishDispatch();
    }
    __resolveFullEventPath() {
        if (this.__eventPathCache) {
            return this.__eventPathCache;
        } else if (!this.__eventTargetParent) {
            return this.__eventPathCache = [
                this,
                documentShim,
                windowShim
            ];
        } else {
            return this.__eventPathCache = [
                this,
                ...this.__eventTargetParent.__resolveFullEventPath()
            ];
        }
    }
}
const EventTargetShimWithRealType = EventTarget;
;
const attributes = new WeakMap();
const attributesForElement = (element)=>{
    let attrs = attributes.get(element);
    if (attrs === undefined) {
        attributes.set(element, attrs = new Map());
    }
    return attrs;
};
// The typings around the exports below are a little funky:
//
// 1. We want the `name` of the shim classes to match the real ones at runtime,
//    hence e.g. `class Element`.
// 2. We can't shadow the global types with a simple class declaration, because
//    then we can't reference the global types for casting, hence e.g.
//    `const ElementShim = class Element`.
// 3. We want to export the classes typed as the real ones, hence e.g.
//    `const ElementShimWithRealType = ElementShim as object as typeof Element;`.
// 4. We want the exported names to match the real ones, hence e.g.
//    `export {ElementShimWithRealType as Element}`.
const NodeShim = class Node extends EventTarget {
    getRootNode(options) {
        if (options?.composed) {
            return document;
        }
        // getRootNode returns the containing ShadowRoot instance, even if that was
        // created in closed mode.
        const host = this.__host;
        return host?.__shadowRoot ?? document;
    }
};
const NodeShimWithRealType = NodeShim;
;
const DocumentShim = class Document extends NodeShim {
    get adoptedStyleSheets() {
        return [];
    }
    createTreeWalker() {
        return {};
    }
    createTextNode() {
        return {};
    }
    createElement() {
        return {};
    }
};
const DocumentShimWithRealType = DocumentShim;
;
const documentShim = new DocumentShim();
const document = documentShim;
;
const WindowShim = class Window extends NodeShim {
    constructor(token){
        super();
        if (token !== constructionToken) {
            throw new TypeError('Illegal constructor');
        }
        Object.assign(this, globalThis, {
            CustomElementRegistry,
            customElements,
            document,
            Document: DocumentShim,
            Element: ElementShim,
            EventTarget,
            HTMLElement: HTMLElementShim,
            Node: NodeShim,
            ShadowRoot: ShadowRootShim,
            window: this,
            Window: WindowShim
        });
    }
};
const WindowShimWithRealType = WindowShim;
;
const ElementShim = class Element extends NodeShim {
    constructor(){
        super(...arguments);
        this.__shadowRootMode = null;
        this.__shadowRoot = null;
        this.__internals = null;
    }
    get attributes() {
        return Array.from(attributesForElement(this)).map(([name, value])=>({
                name,
                value
            }));
    }
    get shadowRoot() {
        if (this.__shadowRootMode === 'closed') {
            return null;
        }
        return this.__shadowRoot;
    }
    get localName() {
        return this.constructor.__localName;
    }
    get tagName() {
        return this.localName?.toUpperCase();
    }
    setAttribute(name, value) {
        // Emulate browser behavior that silently casts all values to string. E.g.
        // `42` becomes `"42"` and `{}` becomes `"[object Object]""`.
        attributesForElement(this).set(name, String(value));
    }
    removeAttribute(name) {
        attributesForElement(this).delete(name);
    }
    toggleAttribute(name, force) {
        // Steps reference https://dom.spec.whatwg.org/#dom-element-toggleattribute
        if (this.hasAttribute(name)) {
            // Step 5
            if (force === undefined || !force) {
                this.removeAttribute(name);
                return false;
            }
        } else {
            // Step 4
            if (force === undefined || force) {
                // Step 4.1
                this.setAttribute(name, '');
                return true;
            } else {
                // Step 4.2
                return false;
            }
        }
        // Step 6
        return true;
    }
    hasAttribute(name) {
        return attributesForElement(this).has(name);
    }
    attachShadow(init) {
        this.__shadowRootMode = init.mode;
        const shadowRoot = new ShadowRootShim(constructionToken, init);
        shadowRoot.__eventTargetParent = this;
        shadowRoot.__host = this;
        return this.__shadowRoot = shadowRoot;
    }
    attachInternals() {
        if (this.__internals !== null) {
            throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ` + `ElementInternals for the specified element was already attached.`);
        }
        const internals = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$lib$2f$element$2d$internals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementInternalsShim"](this);
        this.__internals = internals;
        return internals;
    }
    getAttribute(name) {
        const value = attributesForElement(this).get(name);
        return value ?? null;
    }
};
const ElementShimWithRealType = ElementShim;
;
const HTMLElementShim = class HTMLElement extends ElementShim {
};
const HTMLElementShimWithRealType = HTMLElementShim;
;
const HTMLSlotElementShim = class HTMLSlotElement extends HTMLElementShim {
    get localName() {
        return 'slot';
    }
};
const HTMLSlotElementShimWithRealType = HTMLSlotElementShim;
;
const ShadowRootShim = class ShadowRoot extends NodeShim {
    get host() {
        return this.__host;
    }
    constructor(constructionToken, init){
        super();
        if (constructionToken !== constructionToken) {
            throw new TypeError('Illegal constructor');
        }
        this.mode = init.mode;
    }
};
const ShadowRootShimWithRealType = ShadowRootShim;
;
// For convenience, we provide a global instance of a HTMLElement as an event
// target. This facilitates registering global event handlers
// (e.g. for @lit/context ContextProvider).
// We use this in in the SSR render function.
// Note, this is a bespoke element and not simply `document` or `window` since
// user code relies on these being undefined in the server environment.
globalThis.litServerRoot ??= Object.defineProperty(new HTMLElementShimWithRealType(), 'localName', {
    // Patch localName (and tagName) to return a unique name.
    get () {
        return 'lit-server-root';
    }
});
function promiseWithResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
class CustomElementRegistry {
    constructor(){
        this.__definitions = new Map();
        this.__reverseDefinitions = new Map();
        this.__pendingWhenDefineds = new Map();
    }
    define(name, ctor) {
        if (this.__definitions.has(name)) {
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn(`'CustomElementRegistry' already has "${name}" defined. ` + `This may have been caused by live reload or hot module ` + `replacement in which case it can be safely ignored.\n` + `Make sure to test your application with a production build as ` + `repeat registrations will throw in production.`);
            } else //TURBOPACK unreachable
            ;
        }
        if (this.__reverseDefinitions.has(ctor)) {
            throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': ` + `the constructor has already been used with this registry for the ` + `tag name ${this.__reverseDefinitions.get(ctor)}`);
        }
        // Provide tagName and localName for the component.
        ctor.__localName = name;
        this.__definitions.set(name, {
            ctor,
            // Note it's important we read `observedAttributes` in case it is a getter
            // with side-effects, as is the case in Lit, where it triggers class
            // finalization.
            //
            // TODO(aomarks) To be spec compliant, we should also capture the
            // registration-time lifecycle methods like `connectedCallback`. For them
            // to be actually accessible to e.g. the Lit SSR element renderer, though,
            // we'd need to introduce a new API for accessing them (since `get` only
            // returns the constructor).
            observedAttributes: ctor.observedAttributes ?? []
        });
        this.__reverseDefinitions.set(ctor, name);
        this.__pendingWhenDefineds.get(name)?.resolve(ctor);
        this.__pendingWhenDefineds.delete(name);
    }
    get(name) {
        const definition = this.__definitions.get(name);
        return definition?.ctor;
    }
    getName(ctor) {
        return this.__reverseDefinitions.get(ctor) ?? null;
    }
    initialize(_root) {
        throw new Error(`customElements.initialize is not currently supported in SSR. ` + `Please file a bug if you need it.`);
    }
    upgrade(_element) {
        // In SSR this doesn't make a lot of sense, so we do nothing.
        throw new Error(`customElements.upgrade is not currently supported in SSR. ` + `Please file a bug if you need it.`);
    }
    async whenDefined(name) {
        const definition = this.__definitions.get(name);
        if (definition) {
            return definition.ctor;
        }
        let withResolvers = this.__pendingWhenDefineds.get(name);
        if (!withResolvers) {
            withResolvers = promiseWithResolvers();
            this.__pendingWhenDefineds.set(name, withResolvers);
        }
        return withResolvers.promise;
    }
}
const CustomElementRegistryShimWithRealType = CustomElementRegistry;
;
const customElements = new CustomElementRegistryShimWithRealType();
// The window variable instantiation must happen after all shims
// have been declared, as they will be included in the window instance.
const windowShim = new WindowShim(constructionToken);
const window = windowShim;
;
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/css-tag.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CSSResult",
    ()=>CSSResult,
    "adoptStyles",
    ()=>adoptStyles,
    "css",
    ()=>css,
    "getCompatibleStyle",
    ()=>getCompatibleStyle,
    "supportsAdoptingStyleSheets",
    ()=>supportsAdoptingStyleSheets,
    "unsafeCSS",
    ()=>unsafeCSS
]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ // Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */ const supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */ class CSSResult {
    constructor(cssText, strings, safeToken){
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value)=>{
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    } else if (typeof value === 'number') {
        return value;
    } else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` + `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` + `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */ const unsafeCSS = (value)=>new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */ const css = (strings, ...values)=>{
    const cssText = strings.length === 1 ? strings[0] : values.reduce((acc, v, idx)=>acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic the native feature](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */ const adoptStyles = (renderRoot, styles)=>{
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s)=>s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
        for (const s of styles){
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        }
    }
};
const cssResultFromStyleSheet = (sheet)=>{
    let cssText = '';
    for (const rule of sheet.cssRules){
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets || global.CSSStyleSheet === undefined ? (s)=>s : (s)=>s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
;
}),
"[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/reactive-element.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReactiveElement",
    ()=>ReactiveElement,
    "defaultConverter",
    ()=>defaultConverter,
    "notEqual",
    ()=>notEqual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit-labs/ssr-dom-shim/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/css-tag.js [app-ssr] (ecmascript)");
;
;
;
// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
const { is, defineProperty, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, getPrototypeOf } = Object;
// Lets a minifier replace globalThis references with a minified name
const global = globalThis;
{
    global.customElements ??= __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["customElements"];
}let issueWarning;
const trustedTypes = global.trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';
const polyfillSupport = global.reactiveElementPolyfillSupportDevMode;
{
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    global.litIssuedWarnings ??= new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    queueMicrotask(()=>{
        issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
        // Issue polyfill support warning.
        if (global.ShadyDOM?.inUse && polyfillSupport === undefined) {
            issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` + `the \`polyfill-support\` module has not been loaded.`);
        }
    });
}/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */ const debugLogEvent = (event)=>{
    const shouldEmit = global.emitLitDebugLogEvents;
    if (!shouldEmit) {
        return;
    }
    global.dispatchEvent(new CustomEvent('lit-debug', {
        detail: event
    }));
};
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ /*@__INLINE__*/ const JSCompiler_renameProperty = (prop, _obj)=>prop;
const defaultConverter = {
    toAttribute (value, type) {
        switch(type){
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute (value, type) {
        let fromValue = value;
        switch(type){
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                } catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */ const notEqual = (value, old)=>!is(value, old);
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    useDefault: false,
    hasChanged: notEqual
};
// Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
Symbol.metadata ??= Symbol('metadata');
// Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
global.litPropertyMetadata ??= new WeakMap();
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclasses to render updates as desired.
 * @noInheritDoc
 */ class ReactiveElement extends (globalThis.HTMLElement ?? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2d$labs$2f$ssr$2d$dom$2d$shim$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTMLElement"]) {
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */ static addInitializer(initializer) {
        this.__prepare();
        (this._initializers ??= []).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */ static get observedAttributes() {
        // Ensure we've created all properties
        this.finalize();
        // this.__attributeToPropertyMap is only undefined after finalize() in
        // ReactiveElement itself. ReactiveElement.observedAttributes is only
        // accessed with ReactiveElement as the receiver when a subclass or mixin
        // calls super.observedAttributes
        return this.__attributeToPropertyMap && [
            ...this.__attributeToPropertyMap.keys()
        ];
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */ static createProperty(name, options = defaultPropertyDeclaration) {
        // If this is a state property, force the attribute to false.
        if (options.state) {
            options.attribute = false;
        }
        this.__prepare();
        // Whether this property is wrapping accessors.
        // Helps control the initial value change and reflection logic.
        if (this.prototype.hasOwnProperty(name)) {
            options = Object.create(options);
            options.wrapped = true;
        }
        this.elementProperties.set(name, options);
        if (!options.noAccessor) {
            const key = // when doing HMR.
            Symbol.for(`${String(name)} (@property() cache)`);
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                defineProperty(this.prototype, name, descriptor);
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */ static getPropertyDescriptor(name, key, options) {
        const { get, set } = getOwnPropertyDescriptor(this.prototype, name) ?? {
            get () {
                return this[key];
            },
            set (v) {
                this[key] = v;
            }
        };
        if (get == null) {
            if ('value' in (getOwnPropertyDescriptor(this.prototype, name) ?? {})) {
                throw new Error(`Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it's actually declared as a value on the prototype. ` + `Usually this is due to using @property or @state on a method.`);
            }
            issueWarning('reactive-property-without-getter', `Field ${JSON.stringify(String(name))} on ` + `${this.name} was declared as a reactive property ` + `but it does not have a getter. This will be an error in a ` + `future version of Lit.`);
        }
        return {
            get,
            set (value) {
                const oldValue = get?.call(this);
                set?.call(this, value);
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */ static getPropertyOptions(name) {
        return this.elementProperties.get(name) ?? defaultPropertyDeclaration;
    }
    /**
     * Initializes static own properties of the class used in bookkeeping
     * for element properties, initializers, etc.
     *
     * Can be called multiple times by code that needs to ensure these
     * properties exist before using them.
     *
     * This method ensures the superclass is finalized so that inherited
     * property metadata can be copied down.
     * @nocollapse
     */ static __prepare() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties'))) {
            // Already prepared
            return;
        }
        // Finalize any superclasses
        const superCtor = getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [
                ...superCtor._initializers
            ];
        }
        // Initialize elementProperties from the superclass
        this.elementProperties = new Map(superCtor.elementProperties);
    }
    /**
     * Finishes setting up the class so that it's ready to be registered
     * as a custom element and instantiated.
     *
     * This method is called by the ReactiveElement.observedAttributes getter.
     * If you override the observedAttributes getter, you must either call
     * super.observedAttributes to trigger finalization, or call finalize()
     * yourself.
     *
     * @nocollapse
     */ static finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized'))) {
            return;
        }
        this.finalized = true;
        this.__prepare();
        // Create properties from the static properties block:
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties'))) {
            const props = this.properties;
            const propKeys = [
                ...getOwnPropertyNames(props),
                ...getOwnPropertySymbols(props)
            ];
            for (const p of propKeys){
                this.createProperty(p, props[p]);
            }
        }
        // Create properties from standard decorator metadata:
        const metadata = this[Symbol.metadata];
        if (metadata !== null) {
            const properties = litPropertyMetadata.get(metadata);
            if (properties !== undefined) {
                for (const [p, options] of properties){
                    this.elementProperties.set(p, options);
                }
            }
        }
        // Create the attribute-to-property map
        this.__attributeToPropertyMap = new Map();
        for (const [p, options] of this.elementProperties){
            const attr = this.__attributeNameForProperty(p, options);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        {
            if (this.hasOwnProperty('createProperty')) {
                issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' + 'The override will not be called with standard decorators');
            }
            if (this.hasOwnProperty('getPropertyDescriptor')) {
                issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' + 'The override will not be called with standard decorators');
            }
        }
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */ static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set){
                elementStyles.unshift((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompatibleStyle"])(s));
            }
        } else if (styles !== undefined) {
            elementStyles.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompatibleStyle"])(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */ static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    constructor(){
        super();
        this.__instanceProperties = undefined;
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */ this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */ this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */ this.__reflectingProperty = null;
        this.__initialize();
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     */ __initialize() {
        this.__updatePromise = new Promise((res)=>this.enableUpdating = res);
        this._$changedProperties = new Map();
        // This enqueues a microtask that must run before the first update, so it
        // must be called before requestUpdate()
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        this.constructor._initializers?.forEach((i)=>i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */ addController(controller) {
        (this.__controllers ??= new Set()).add(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            controller.hostConnected?.();
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */ removeController(controller) {
        this.__controllers?.delete(controller);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs.
     */ __saveInstanceProperties() {
        const instanceProperties = new Map();
        const elementProperties = this.constructor.elementProperties;
        for (const p of elementProperties.keys()){
            if (this.hasOwnProperty(p)) {
                instanceProperties.set(p, this[p]);
                delete this[p];
            }
        }
        if (instanceProperties.size > 0) {
            this.__instanceProperties = instanceProperties;
        }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */ createRenderRoot() {
        const renderRoot = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adoptStyles"])(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */ connectedCallback() {
        // Create renderRoot before controllers `hostConnected`
        this.renderRoot ??= this.createRenderRoot();
        this.enableUpdating(true);
        this.__controllers?.forEach((c)=>c.hostConnected?.());
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */ enableUpdating(_requestedUpdate) {}
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */ disconnectedCallback() {
        this.__controllers?.forEach((c)=>c.hostDisconnected?.());
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [responding to attribute changes](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */ attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value) {
        const elemProperties = this.constructor.elementProperties;
        const options = elemProperties.get(name);
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = options.converter?.toAttribute !== undefined ? options.converter : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (this.constructor.enabledWarnings.includes('migration') && attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` + `undefined on element ${this.localName}. The attribute will be ` + `removed, but in the previous version of \`ReactiveElement\`, ` + `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            } else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */ _$attributeToProperty(name, value) {
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function' ? {
                fromAttribute: options.converter
            } : options.converter?.fromAttribute !== undefined ? options.converter : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            const convertedValue = converter.fromAttribute(value, options.type);
            this[propName] = convertedValue ?? this.__defaultValues?.get(propName) ?? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            convertedValue;
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @param useNewValue if true, the newValue argument is used instead of
     *     reading the property value. This is important to use if the reactive
     *     property is a standard private accessor, as opposed to a plain
     *     property, since private members can't be dynamically read by name.
     * @param newValue the new value of the property. This is only used if
     *     `useNewValue` is true.
     * @category updates
     */ requestUpdate(name, oldValue, options, useNewValue = false, newValue) {
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            if (name instanceof Event) {
                issueWarning(``, `The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()`);
            }
            const ctor = this.constructor;
            if (useNewValue === false) {
                newValue = this[name];
            }
            options ??= ctor.getPropertyOptions(name);
            const changed = (options.hasChanged ?? notEqual)(newValue, oldValue) || options.useDefault && options.reflect && newValue === this.__defaultValues?.get(name) && !this.hasAttribute(ctor.__attributeNameForProperty(name, options));
            if (changed) {
                this._$changeProperty(name, oldValue, options);
            } else {
                // Abort the request if the property should not be considered changed.
                return;
            }
        }
        if (this.isUpdatePending === false) {
            this.__updatePromise = this.__enqueueUpdate();
        }
    }
    /**
     * @internal
     */ _$changeProperty(name, oldValue, { useDefault, reflect, wrapped }, initializeValue) {
        // Record default value when useDefault is used. This allows us to
        // restore this value when the attribute is removed.
        if (useDefault && !(this.__defaultValues ??= new Map()).has(name)) {
            this.__defaultValues.set(name, initializeValue ?? oldValue ?? this[name]);
            // if this is not wrapping an accessor, it must be an initial setting
            // and in this case we do not want to record the change or reflect.
            if (wrapped !== true || initializeValue !== undefined) {
                return;
            }
        }
        // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
        // vs just Map.set()
        if (!this._$changedProperties.has(name)) {
            // On the initial change, the old value should be `undefined`, except
            // with `useDefault`
            if (!this.hasUpdated && !useDefault) {
                oldValue = undefined;
            }
            this._$changedProperties.set(name, oldValue);
        }
        // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `__reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.
        if (reflect === true && this.__reflectingProperty !== name) {
            (this.__reflectingProperties ??= new Set()).add(name);
        }
    }
    /**
     * Sets up the element to asynchronously update.
     */ async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        } catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */ scheduleUpdate() {
        const result = this.performUpdate();
        if (this.constructor.enabledWarnings.includes('async-perform-update') && typeof result?.then === 'function') {
            issueWarning('async-perform-update', `Element ${this.localName} returned a Promise from performUpdate(). ` + `This behavior is deprecated and will be removed in a future ` + `version of ReactiveElement.`);
        }
        return result;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * @category updates
     */ performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent?.({
            kind: 'update'
        });
        if (!this.hasUpdated) {
            // Create renderRoot before first update. This occurs in `connectedCallback`
            // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
            this.renderRoot ??= this.createRenderRoot();
            {
                // Produce warning if any reactive properties on the prototype are
                // shadowed by class fields. Instance fields set before upgrade are
                // deleted by this point, so any own property is caused by class field
                // initialization in the constructor.
                const ctor = this.constructor;
                const shadowedProperties = [
                    ...ctor.elementProperties.keys()
                ].filter((p)=>this.hasOwnProperty(p) && p in getPrototypeOf(this));
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` + `trigger updates as expected because they are set using class ` + `fields: ${shadowedProperties.join(', ')}. ` + `Native class fields and some compiled output will overwrite ` + `accessors used for detecting changes. See ` + `https://lit.dev/msg/class-field-shadowing ` + `for more information.`);
                }
            }
            // Mixin instance properties once, if they exist.
            if (this.__instanceProperties) {
                // TODO (justinfagnani): should we use the stored value? Could a new value
                // have been set since we stored the own property value?
                for (const [p, value] of this.__instanceProperties){
                    this[p] = value;
                }
                this.__instanceProperties = undefined;
            }
            // Trigger initial value reflection and populate the initial
            // `changedProperties` map, but only for the case of properties created
            // via `createProperty` on accessors, which will not have already
            // populated the `changedProperties` map since they are not set.
            // We can't know if these accessors had initializers, so we just set
            // them anyway - a difference from experimental decorators on fields and
            // standard decorators on auto-accessors.
            // For context see:
            // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
            const elementProperties = this.constructor.elementProperties;
            if (elementProperties.size > 0) {
                for (const [p, options] of elementProperties){
                    const { wrapped } = options;
                    const value = this[p];
                    if (wrapped === true && !this._$changedProperties.has(p) && value !== undefined) {
                        this._$changeProperty(p, undefined, options, value);
                    }
                }
            }
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                this.__controllers?.forEach((c)=>c.hostUpdate?.());
                this.update(changedProperties);
            } else {
                this.__markUpdated();
            }
        } catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */ willUpdate(_changedProperties) {}
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        this.__controllers?.forEach((c)=>c.hostUpdated?.());
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (this.isUpdatePending && this.constructor.enabledWarnings.includes('change-in-update')) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` + `(generally because a property was set) ` + `after an update completed, causing a new update to be scheduled. ` + `This is inefficient and should be avoided unless the next update ` + `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */ get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */ getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ update(_changedProperties) {
        // The forEach() expression will only run when __reflectingProperties is
        // defined, and it returns undefined, setting __reflectingProperties to
        // undefined
        this.__reflectingProperties &&= this.__reflectingProperties.forEach((p)=>this.__propertyToAttribute(p, this[p]));
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */ firstUpdated(_changedProperties) {}
}
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */ ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */ ReactiveElement.shadowRootOptions = {
    mode: 'open'
};
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties')] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized')] = new Map();
// Apply polyfills if available
polyfillSupport?.({
    ReactiveElement
});
// Dev mode warnings...
{
    // Default warning set.
    ReactiveElement.enabledWarnings = [
        'change-in-update',
        'async-perform-update'
    ];
    const ensureOwnWarnings = function(ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings'))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function(warning) {
        ensureOwnWarnings(this);
        if (!this.enabledWarnings.includes(warning)) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function(warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
(global.reactiveElementVersions ??= []).push('2.1.2');
if (global.reactiveElementVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
    });
}
;
}),
"[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_$LH",
    ()=>_$LH,
    "html",
    ()=>html,
    "mathml",
    ()=>mathml,
    "noChange",
    ()=>noChange,
    "nothing",
    ()=>nothing,
    "render",
    ()=>render,
    "svg",
    ()=>svg
]);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ // Allows minifiers to rename references to globalThis
const global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */ const debugLogEvent = (event)=>{
    const shouldEmit = global.emitLitDebugLogEvents;
    if (!shouldEmit) {
        return;
    }
    global.dispatchEvent(new CustomEvent('lit-debug', {
        detail: event
    }));
};
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
{
    global.litIssuedWarnings ??= new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += code ? ` See https://lit.dev/msg/${code} for more information.` : '';
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    queueMicrotask(()=>{
        issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    });
}const wrap = (node)=>node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */ const policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
    createHTML: (s)=>s
}) : undefined;
const identityFunction = (value)=>value;
const noopSanitizer = (_node, _name, _type)=>identityFunction;
/** Sets the global sanitizer factory. */ const setSanitizer = (newSanitizer)=>{
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` + ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */ const _testOnlyClearSanitizerFactoryDoNotCallOrElse = ()=>{
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type)=>{
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${Math.random().toFixed(9).slice(2)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = global.document === undefined ? {
    createTreeWalker () {
        return {};
    }
} : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = ()=>d.createComment('');
const isPrimitive = (value)=>value === null || typeof value != 'object' && typeof value != 'function';
const isArray = Array.isArray;
const isIterable = (value)=>isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof value?.[Symbol.iterator] === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */ const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */ const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */ const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */ const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */ const HTML_RESULT = 1;
const SVG_RESULT = 2;
const MATHML_RESULT = 3;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */ const tag = (type)=>(strings, ...values)=>{
        // Warn against templates octal escape sequences
        // We do this here rather than in render so that the warning is closer to the
        // template definition.
        if (strings.some((s)=>s === undefined)) {
            console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
        }
        {
            // Import static-html.js results in a circular dependency which g3 doesn't
            // handle. Instead we know that static values must have the field
            // `_$litStatic$`.
            if (values.some((val)=>val?.['_$litStatic$'])) {
                issueWarning('', `Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n` + `Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);
            }
        }
        return {
            // This property needs to remain unminified.
            ['_$litType$']: type,
            strings,
            values
        };
    };
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */ const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus not be properly contained within an `<svg>` HTML
 * element.
 */ const svg = tag(SVG_RESULT);
/**
 * Interprets a template literal as MathML fragment that can efficiently render
 * to and update a container.
 *
 * ```ts
 * const num = mathml`<mn>1</mn>`;
 *
 * const eq = html`
 *   <math>
 *     ${num}
 *   </math>`;
 * ```
 *
 * The `mathml` *tag function* should only be used for MathML fragments, or
 * elements that would be contained **inside** a `<math>` HTML element. A common
 * error is placing a `<math>` *element* in a template tagged with the `mathml`
 * tag function. The `<math>` element is an HTML element and should be used
 * within a template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an MathML fragment from the
 * `render()` method, as the MathML fragment will be contained within the
 * element's shadow root and thus not be properly contained within a `<math>`
 * HTML element.
 */ const mathml = tag(MATHML_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */ const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */ const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - they must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */ const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */ );
let sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!isArray(tsa) || !tsa.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */ const getTemplateHtml = (strings, type)=>{
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : type === MATHML_RESULT ? '<math>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for(let i = 0; i < l; i++){
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while(lastIndex < s.length){
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                } else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                } else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                }
            } else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex ?? textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                } else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                } else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
                }
            } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            } else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            } else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : type === MATHML_RESULT ? '</math>' : '');
    // Returned as an array for terseness
    return [
        trustFromTemplateString(strings, htmlResult),
        attrNames
    ];
};
class Template {
    constructor(// This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options){
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Re-parent SVG or MathML nodes into template root
        if (type === SVG_RESULT || type === MATHML_RESULT) {
            const wrapper = this.el.content.firstChild;
            wrapper.replaceWith(...wrapper.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while((node = walker.nextNode()) !== null && parts.length < partCount){
            if (node.nodeType === 1) {
                {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) && node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` + `elements. See https://lit.dev/msg/expression-in-${tag} for more ` + `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        } else issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    for (const name of node.getAttributeNames()){
                        if (name.endsWith(boundAttributeSuffix)) {
                            const realName = attrNames[attrNameIndex++];
                            const value = node.getAttribute(name);
                            const statics = value.split(marker);
                            const m = /([.?@])?(.*)/.exec(realName);
                            parts.push({
                                type: ATTRIBUTE_PART,
                                index: nodeIndex,
                                name: m[2],
                                strings: statics,
                                ctor: m[1] === '.' ? PropertyPart : m[1] === '?' ? BooleanAttributePart : m[1] === '@' ? EventPart : AttributePart
                            });
                            node.removeAttribute(name);
                        } else if (name.startsWith(marker)) {
                            parts.push({
                                type: ELEMENT_PART,
                                index: nodeIndex
                            });
                            node.removeAttribute(name);
                        }
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes ? trustedTypes.emptyScript : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for child parts
                        for(let i = 0; i < lastIndex; i++){
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({
                                type: CHILD_PART,
                                index: ++nodeIndex
                            });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            } else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({
                        type: CHILD_PART,
                        index: nodeIndex
                    });
                } else {
                    let i = -1;
                    while((i = node.data.indexOf(marker, i + 1)) !== -1){
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({
                            type: COMMENT_PART,
                            index: nodeIndex
                        });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        {
            // If there was a duplicate attribute on a tag, then when the tag is
            // parsed into an element the attribute gets de-duplicated. We can detect
            // this mismatch if we haven't precisely consumed every attribute name
            // when preparing the template. This works because `attrNames` is built
            // from the template string and `attrNameIndex` comes from processing the
            // resulting DOM.
            if (attrNames.length !== attrNameIndex) {
                throw new Error(`Detected duplicate attribute bindings. This occurs if your template ` + `has duplicate attributes on an element tag. For example ` + `"<input ?disabled=\${true} ?disabled=\${false}>" contains a ` + `duplicate "disabled" attribute. The error was detected in ` + `the following template: \n` + '`' + strings.join('${...}') + '`');
            }
        }
        // We could set walker.currentNode to another node here to prevent a memory
        // leak, but every time we prepare a template, we immediately render it
        // and re-use the walker in new TemplateInstance._clone().
        debugLogEvent && debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */ static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined ? parent.__directives?.[attributeIndex] : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value) ? undefined : value['_$litDirective$'];
    if (currentDirective?.constructor !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        currentDirective?.['_$notifyDirectiveConnectionChanged']?.(false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        } else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            (parent.__directives ??= [])[attributeIndex] = currentDirective;
        } else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */ class TemplateInstance {
    constructor(template, parent){
        this._$parts = [];
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        const { el: { content }, parts: parts } = this._$template;
        const fragment = (options?.creationScope ?? d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while(templatePart !== undefined){
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                } else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                } else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._$parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== templatePart?.index) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        // We need to set the currentNode away from the cloned tree so that we
        // don't hold onto the tree even if the tree is detached and should be
        // freed.
        walker.currentNode = d;
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._$parts){
            if (part !== undefined) {
                debugLogEvent && debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                } else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return this._$parent?._$isConnected ?? this.__isConnected;
    }
    constructor(startNode, endNode, parent, options){
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = options?.isConnected ?? true;
        {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */ get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined && parentNode?.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */ ) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */ get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */ get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        if (this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent && debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            } else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
        // This property needs to remain unminified.
        } else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        } else if (value.nodeType !== undefined) {
            if (this.options?.host === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` + `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        } else if (isIterable(value)) {
            this._commitIterable(value);
        } else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
    }
    _commitNode(value) {
        if (this._$committedValue !== value) {
            this._$clear();
            if (sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = this._$startNode.parentNode?.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    {
                        if (parentNodeName === 'STYLE') {
                            message = `Lit does not support binding inside style nodes. ` + `This is a security risk, as style injection attacks can ` + `exfiltrate data and spoof UIs. ` + `Consider instead using css\`...\` literals ` + `to compose styles, and do dynamic styling with ` + `css custom properties, ::parts, <slot>s, ` + `and by mutating the DOM rather than stylesheets.`;
                        } else {
                            message = `Lit does not support binding inside script nodes. ` + `This is a security risk, as it could allow arbitrary ` + `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options
            });
            node.data = value;
        } else {
            {
                const textNode = d.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent && debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options
                });
                textNode.data = value;
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
        if (this._$committedValue?._$template === template) {
            debugLogEvent && debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._$parts,
                options: this.options,
                values
            });
            this._$committedValue._update(values);
        } else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent && debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values
            });
            instance._update(values);
            debugLogEvent && debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._$parts,
                options: this.options,
                fragment,
                values
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */ _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, template = new Template(result));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value){
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
            } else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives
     *     in those Parts.
     *
     * @internal
     */ _$clear(start = wrap(this._$startNode).nextSibling, from) {
        this._$notifyConnectionChanged?.(false, true, from);
        while(start !== this._$endNode){
            // The non-null assertion is safe because if _$startNode.nextSibling is
            // null, then _$endNode is also null, and we would not have entered this
            // loop.
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this method
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */ setConnected(isConnected) {
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            this._$notifyConnectionChanged?.(isConnected);
        } else {
            throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
        }
    }
}
class AttributePart {
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    constructor(element, name, strings, parent, options){
        this.type = ATTRIBUTE_PART;
        /** @internal */ this._$committedValue = nothing;
        /** @internal */ this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        } else {
            this._$committedValue = nothing;
        }
        {
            this._sanitizer = undefined;
        }
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */ _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
            if (change) {
                this._$committedValue = value;
            }
        } else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for(i = 0; i < strings.length - 1; i++){
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change ||= !isPrimitive(v) || v !== this._$committedValue[i];
                if (v === nothing) {
                    value = nothing;
                } else if (value !== nothing) {
                    value += (v ?? '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */ _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        } else {
            {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value ?? '');
            }
            debugLogEvent && debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options
            });
            wrap(this.element).setAttribute(this.name, value ?? '');
        }
    }
}
class PropertyPart extends AttributePart {
    constructor(){
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */ _commitValue(value) {
        {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent && debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
class BooleanAttributePart extends AttributePart {
    constructor(){
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */ _commitValue(value) {
        debugLogEvent && debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options
        });
        wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options){
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */ _$setValue(newListener, directiveParent = this) {
        newListener = resolveDirective(this, newListener, directiveParent, 0) ?? nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
        debugLogEvent && debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call(this.options?.host ?? this.element, event);
        } else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options){
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */ this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent && debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */ const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in tests and private-ssr-support
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart
};
// Apply polyfills if available
const polyfillSupport = global.litHtmlPolyfillSupportDevMode;
polyfillSupport?.(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
(global.litHtmlVersions ??= []).push('3.3.3');
if (global.litHtmlVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` + `Loading multiple versions is not recommended.`);
    });
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */ const render = (value, container, options)=>{
    if (container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = debugLogRenderId++;
    const partOwnerNode = options?.renderBefore ?? container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent && debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part
    });
    if (part === undefined) {
        const endNode = options?.renderBefore ?? null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options ?? {});
    }
    part._$setValue(value);
    debugLogEvent && debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part
    });
    return part;
};
{
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
};
}),
"[project]/OneDrive/PantreeApp/node_modules/lit-element/development/lit-element.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LitElement",
    ()=>LitElement,
    "_$LE",
    ()=>_$LE
]);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 * LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 * Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/reactive-element.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-ssr] (ecmascript)");
;
;
;
;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ /*@__INLINE__*/ const JSCompiler_renameProperty = (prop, _obj)=>prop;
const DEV_MODE = true;
// Allows minifiers to rename references to globalThis
const global = globalThis;
let issueWarning;
if ("TURBOPACK compile-time truthy", 1) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    global.litIssuedWarnings ??= new Set();
    /**
     * Issue a warning if we haven't already, based either on `code` or `warning`.
     * Warnings are disabled automatically only by `warning`; disabling via `code`
     * can be done by users.
     */ issueWarning = (code, warning)=>{
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!global.litIssuedWarnings.has(warning) && !global.litIssuedWarnings.has(code)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
}
class LitElement extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactiveElement"] {
    constructor(){
        super(...arguments);
        /**
         * @category rendering
         */ this.renderOptions = {
            host: this
        };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */ createRenderRoot() {
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        this.renderOptions.renderBefore ??= renderRoot.firstChild;
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */ update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["render"])(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */ connectedCallback() {
        super.connectedCallback();
        this.__childPart?.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */ disconnectedCallback() {
        super.disconnectedCallback();
        this.__childPart?.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */ render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noChange"];
    }
}
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */ LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
// Install hydration if available
global.litElementHydrateSupport?.({
    LitElement
});
// Apply polyfills if available
const polyfillSupport = ("TURBOPACK compile-time truthy", 1) ? global.litElementPolyfillSupportDevMode : "TURBOPACK unreachable";
polyfillSupport?.({
    LitElement
});
const _$LE = {
    _$attributeToProperty: (el, name, value)=>{
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el)=>el._$changedProperties
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
(global.litElementVersions ??= []).push('4.2.2');
if (DEV_MODE && global.litElementVersions.length > 1) {
    queueMicrotask(()=>{
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` + `is not recommended.`);
    });
}
}),
"[project]/OneDrive/PantreeApp/node_modules/lit/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$reactive$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/reactive-element.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-element/development/lit-element.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
}),
];

//# sourceMappingURL=1ua3_0wnjsc9._.js.map
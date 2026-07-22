module.exports = [
"[project]/OneDrive/PantreeApp/components/search-bar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-element/development/lit-element.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/css-tag.js [app-ssr] (ecmascript)");
;
class SearchBar extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
    createRenderRoot() {
        return super.createRenderRoot(); // disables Shadow DOM
    }
    static get tag() {
        return "search-bar";
    }
    static get properties() {
        return {
            query: {
                type: String
            },
            items: {
                type: Array
            },
            filtered: {
                type: Array
            }
        };
    }
    constructor(){
        super();
        this.query = "";
        this.items = [];
        this.filtered = [];
    }
    async connectedCallback() {
        super.connectedCallback();
        const res = await fetch("../../items.json");
        const data = await res.json();
        this.items = data.items;
        this.filtered = data.items;
    }
    onInput(e) {
        this.query = e.target.value.toLowerCase();
        this.filtered = this.items.filter((item)=>item.name.toLowerCase().includes(this.query));
    }
    selectItem(item) {
        this.dispatchEvent(new CustomEvent("item-selected", {
            detail: item,
            bubbles: true,
            composed: true
        }));
    }
    static get styles() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"]`
        :host {
            margin-bottom: 24px;
        }
            div.wrapper {
                display: flex;
                gap: 24px;
                border-radius: 40px;
                text-align: center;
                background-color: #F3E5D9;
                padding: 10px 24px;
                font-size: 16px;
            }
            img {
                height: 24px;
            }
            input {
                font-style: italic; 
                color:#705B48; 
                font-size: 16px;
                background: none; 
                border:none;
                width: 100%;
            }
            input:focus {
                outline: none;
            }
            ul {
                list-style: none;
                padding: 0;
                margin: 8px;
            }
            li {
                cursor: pointer;
                padding: 6px 6px;
            }
            li:hover {
                font-weight: bold;
            }
        `;
    }
    render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
            <div class="wrapper">
                <span><img src="/assets/images/search.svg"></span>
                <input type="text" placeholder="Search..." @input=${this.onInput}/>
            </div>
            <div>
                ${this.query ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
                        <ul>
                            ${this.filtered.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"]`
                                    <li @click=${()=>this.selectItem(item)}>
                                        ${item.name}
                                    </li>
                                `)}
                        </ul>
                    ` : null}
            </div>
        `;
    }
}
customElements.define(SearchBar.tag, SearchBar);
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[project]/OneDrive/PantreeApp/components/login-button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginButton",
    ()=>LoginButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$search$2d$bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/search-bar.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../profile-store.jsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../profileHandlers.jsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../user-auth.jsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$console__$5b$external$5d$__$28$node$3a$console$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:console [external] (node:console, cjs)");
"use client";
;
;
;
;
;
;
;
;
const LoginButton = ()=>{
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("create");
    const [showAuth, setShowAuth] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    connectedCallback = ()=>{
        super.connectedCallback();
        window.addEventListener("profile-changed", ()=>{
            ("TURBOPACK compile-time value", void 0).showAuth = false;
            ("TURBOPACK compile-time value", void 0).requestUpdate();
        });
    };
    profileStore.load();
    if (profileStore.loading) {
        return html`<p>Loading...</p>`;
    }
    if (profileStore.user) {
        return html`<p>Welcome, ${profileStore.user.name}</p>
        <button @click=${onSignOut}>Sign out</button>`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowAuth(true),
                className: mode === "login" ? "login" : 'create',
                children: mode === "login" ? "Login" : 'Get Started'
            }, void 0, false, {
                fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                lineNumber: 36,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            showAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                onClick: ()=>setShowAuth(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    class: "card",
                    onClick: (e)=>e.stopPropagation(),
                    children: renderAuth(mode, ()=>setShowAuth(false))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                    lineNumber: 42,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                lineNumber: 41,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)) : null,
            ";"
        ]
    }, void 0, true);
};
customElements.define("login-button", LoginButton);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1vvwjob._.js.map
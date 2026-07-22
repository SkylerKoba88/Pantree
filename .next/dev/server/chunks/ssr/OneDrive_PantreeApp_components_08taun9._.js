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
"use client";
;
;
;
;
;
;
;
const LoginButton = ({ mode: initialMode = "create" })=>{
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMode);
    const [showAuth, setShowAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        profileStore.load();
        const handleProfileChange = ()=>{
            setShowAuth(false);
            forceUpdate({});
        };
        window.addEventListener("profile-changed", handleProfileChange);
        return ()=>{
            window.removeEventListener("profile-changed", handleProfileChange);
        };
    }, []);
    if (profileStore.loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
            lineNumber: 32,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (profileStore.user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Welcome, ",
                        profileStore.user.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onSignOut,
                    children: "Sign out"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowAuth(true),
                className: mode === "login" ? "login" : "create",
                children: mode === "login" ? "Login" : "Get Started"
            }, void 0, false, {
                fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                onClick: ()=>setShowAuth(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    onClick: (e)=>e.stopPropagation(),
                    children: renderAuth(mode, ()=>setShowAuth(false))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/PantreeApp/components/login-button.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
];

//# sourceMappingURL=OneDrive_PantreeApp_components_08taun9._.js.map
module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/OneDrive/PantreeApp/components/search-bar.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-element/development/lit-element.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/css-tag.js [app-rsc] (ecmascript)");
;
class SearchBar extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["css"]`
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
            <div class="wrapper">
                <span><img src="/assets/images/search.svg"></span>
                <input type="text" placeholder="Search..." @input=${this.onInput}/>
            </div>
            <div>
                ${this.query ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
                        <ul>
                            ${this.filtered.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
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
"[project]/OneDrive/PantreeApp/components/profileHandlers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onInput",
    ()=>onInput,
    "onSave",
    ()=>onSave,
    "onSignOut",
    ()=>onSignOut
]);
(()=>{
    const e = new Error("Cannot find module './profile-store.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
function onInput(field) {
    return (event)=>{
        profileStore.update(field, event.target.value);
    };
}
const TOAST_STYLE = `
  .profile-saved-toast {
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 8px;
    padding: 16px 32px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-size: 15px;
    color: #1E1E1E;
    z-index: 200;
    white-space: nowrap;
    animation: profileToastFade 2.5s ease forwards;
  }
  @keyframes profileToastFade {
    0%   { opacity: 0; transform: translateX(-50%) translateY(10px); }
    15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
    75%  { opacity: 1; }
    100% { opacity: 0; }
  }
`;
function ensureToastStyles() {
    if (!document.getElementById("profile-toast-styles")) {
        const style = document.createElement("style");
        style.id = "profile-toast-styles";
        style.textContent = TOAST_STYLE;
        document.head.appendChild(style);
    }
}
function onSave() {
    profileStore.save();
    ensureToastStyles();
    const toast = document.createElement("div");
    toast.className = "profile-saved-toast";
    toast.textContent = "Profile saved!";
    document.body.appendChild(toast);
    setTimeout(()=>toast.remove(), 2500);
}
function onSignOut() {
    localStorage.removeItem("profile");
    profileStore.user = null;
    window.location.hash = "/";
    window.dispatchEvent(new CustomEvent("profile-changed"));
}
}),
"[project]/OneDrive/PantreeApp/components/user-auth.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onSignIn",
    ()=>onSignIn,
    "renderAuth",
    ()=>renderAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './profile-store.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function renderAuth(mode = "create", onClose = null) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
    <section style="display: flex; flex-direction: column; padding: 24px; gap: 16px;">
      ${onClose ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
        <button @click=${onClose} style="align-self: flex-end; background: none; border: none; font-size: 18px; cursor: pointer; color: #705B48; padding: 0; line-height: 1;">✕</button>
      ` : null}

      <h2 style="margin: 0 0 12px 0;">${mode === "login" ? "Login" : "Create Account"}</h2>

      <label>
        Name
        <input id="name" />
      </label>

      <label>
        Email
        <input id="email" type="email" />
      </label>

      <button style="background-color: #CB2127;
            color: white;
            border: none;
            padding: 12px 48px;
            border-radius: 40px;
            font-size: 16px;
            font-weight: medium;
            cursor: pointer;" @click=${onSignIn}>
        ${mode === "login" ? "Login" : "Sign Up"}
      </button>
    </section>
  `;
}
function onSignIn(event) {
    const form = event.target.closest("section");
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    if (!name || !email) {
        alert("Please enter name and email");
        return;
    }
    profileStore.user = {
        name,
        email
    };
    localStorage.setItem("profile", JSON.stringify(profileStore.user));
    window.dispatchEvent(new CustomEvent("profile-changed"));
}
}),
"[project]/OneDrive/PantreeApp/components/login-button.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginButton",
    ()=>LoginButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-element/development/lit-element.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/lit-html/node/development/lit-html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/@lit/reactive-element/node/development/css-tag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$search$2d$bar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/search-bar.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './profile-store.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$profileHandlers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/profileHandlers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$user$2d$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/user-auth.js [app-rsc] (ecmascript)");
;
;
;
;
;
class LoginButton extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$element$2f$development$2f$lit$2d$element$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LitElement"] {
    createRenderRoot() {
        return super.createRenderRoot(); // disables Shadow DOM
    }
    static properties = {
        mode: {
            type: String
        },
        showAuth: {
            type: Boolean
        }
    };
    constructor(){
        super();
        this.mode = "create";
        this.showAuth = false;
    }
    static styles = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f40$lit$2f$reactive$2d$element$2f$node$2f$development$2f$css$2d$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["css"]`
        button {
            background-color: #CB2127;
            color: white;
            border: none;
            padding: 12px 48px;
            border-radius: 40px;
            font-size: 16px;
            font-weight: medium;
            cursor: pointer;
        }
        .login {
            background-color: #1E1E1E;
        }
        .modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .card {
            display: flex;
            flex-direction: column;
            background: white;
            border-radius: 8px;
            width: 300px;
        }
    `;
    connectedCallback() {
        super.connectedCallback();
        profileStore.load();
        window.addEventListener("profile-changed", ()=>{
            this.showAuth = false;
            this.requestUpdate();
        });
    }
    render() {
        if (profileStore.loading) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`<p>Loading...</p>`;
        }
        if (profileStore.user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`<p>Welcome, ${profileStore.user.name}</p>
            <button @click=${__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$profileHandlers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onSignOut"]}>Sign out</button>`;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
        <button @click=${()=>this.showAuth = true} class="${this.mode === "login" ? "login" : 'create'}">
            ${this.mode === "login" ? "Login" : 'Get Started'}
        </button>

        ${this.showAuth ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$lit$2d$html$2f$node$2f$development$2f$lit$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["html"]`
            <div class="modal" @click=${()=>this.showAuth = false}>
                <div class="card" @click=${(e)=>e.stopPropagation()}>
                    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$user$2d$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderAuth"])(this.mode, ()=>this.showAuth = false)}
                </div>
            </div>
        ` : null}`;
    }
}
customElements.define("login-button", LoginButton);
}),
"[project]/OneDrive/PantreeApp/components/profile-store.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profileStore",
    ()=>profileStore
]);
const profileStore = {
    loading: false,
    user: null,
    load () {
        this.loading = true;
        const cached = localStorage.getItem("profile");
        if (cached) {
            this.user = JSON.parse(cached);
            window.dispatchEvent(new CustomEvent("profile-changed"));
        }
        this.loading = false;
    },
    update (field, value) {
        this.user = {
            ...this.user,
            [field]: value
        };
        localStorage.setItem("profile", JSON.stringify(this.user));
    },
    save () {
        localStorage.setItem("profile", JSON.stringify(this.user));
    },
    clear () {
        this.user = null;
        localStorage.removeItem("profile");
    }
};
}),
"[project]/OneDrive/PantreeApp/components/pwa-install.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pwaInstall",
    ()=>pwaInstall,
    "triggerInstall",
    ()=>triggerInstall
]);
const pwaInstall = {
    deferredPrompt: null,
    isStandalone: window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
};
window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    pwaInstall.deferredPrompt = e;
    window.dispatchEvent(new CustomEvent('pwa-install-ready'));
});
window.addEventListener('appinstalled', ()=>{
    pwaInstall.deferredPrompt = null;
    pwaInstall.isStandalone = true;
    window.dispatchEvent(new CustomEvent('pwa-install-ready'));
});
async function triggerInstall() {
    if (!pwaInstall.deferredPrompt) return;
    pwaInstall.deferredPrompt.prompt();
    const { outcome } = await pwaInstall.deferredPrompt.userChoice;
    pwaInstall.deferredPrompt = null;
    window.dispatchEvent(new CustomEvent('pwa-install-ready'));
}
}),
"[project]/OneDrive/PantreeApp/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$login$2d$button$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/login-button.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$profile$2d$store$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/profile-store.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$pwa$2d$install$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/PantreeApp/components/pwa-install.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Home() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$profile$2d$store$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileStore"].user;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen px-4 py-10 text-slate-900 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; margin: 24px;",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "./assets/images/Logo.svg",
                        className: "width: 64px"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "color: #CB2127",
                        children: "Pantree"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center m-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: [
                                        "Welcome back, ",
                                        user.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "nav-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#/pantry",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "./assets/images/pantry-white.svg",
                                                    className: "h-5 pr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, this),
                                                "My Pantry"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#/my-lists",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "./assets/images/list-white.svg",
                                                    className: "h-5 pr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, this),
                                                "My Lists"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#/recipes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "./assets/images/recipe-white.svg",
                                                    className: "h-5 pr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                "Recipes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#/profile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "./assets/images/profile-white.svg",
                                                    className: "h-5 pr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                "Profile"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Welcome to Pantree!"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "The grocery tracking app"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "m-6 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$login$2d$button$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoginButton"], {
                                    mode: "create"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex gap-3 text-center justify-self-center flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Track Items"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    "|",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Save Money"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    "|",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Reduce Waste"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-direction-column gap-3 text-center justify-self-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Already have an account?"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$login$2d$button$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoginButton"], {
                                        mode: "login"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    ";",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            !__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$pwa$2d$install$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pwaInstall"].isStandalone && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$pwa$2d$install$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pwaInstall"].deferredPrompt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-content-center mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$PantreeApp$2f$components$2f$pwa$2d$install$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["triggerInstall"],
                                    className: "bg-[#F3E5D9] text-[#705B48] b-none px-4 py-2 br-6 text-size-2 cursor-pointer",
                                    children: "Download the App"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this) : null,
                            ";"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/PantreeApp/app/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/OneDrive/PantreeApp/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/OneDrive/PantreeApp/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0w7cw08._.js.map
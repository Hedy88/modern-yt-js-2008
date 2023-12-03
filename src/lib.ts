// export utils
export * from "./utils/http.js";
export * from "./utils/dom.js";
export * from "./utils/url.js";
export * from "./utils/cookies.js";

// export stuff
export * from "./onLoad.js";

declare global {
    interface Window { google: object }
}

// google function hooks to intergrate with the google search api.
window.google = window.google || {};
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { isBrowserSupported as Ay } from "./assets/BanubaSDK-34db11e0.js";
const showDomMode = "open";
const Widget = ({ name, src, exports = [], events = [] }) => {
  if (typeof customElements === "undefined")
    return;
  if (customElements.get(name))
    return;
  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "_bridge");
        if (typeof src !== "string")
          src = `${src}`;
        const root = this.attachShadow({ mode: showDomMode });
        const link = document.createElement("link");
        link.href = src;
        link.rel = "modulepreload preload";
        link.as = "script";
        link.crossOrigin = "";
        this.prepend(link);
        const style = document.createElement("style");
        style.textContent = ":host{display:contents}";
        root.append(style);
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        const script = document.createElement("script");
        script.type = "module";
        script.src = URL.createObjectURL(
          new Blob([`import c from"${src}";self.create=(o)=>new c(o)`], {
            type: "text/javascript"
          })
        );
        this._bridge = new Promise((resolve) => script.onload = resolve).then(
          () => iframe.contentWindow.create({
            target: root,
            props: attrs2props(this.attributes)
          })
        );
        for (const name2 of exports)
          Object.defineProperty(this, name2, {
            value: (...args) => this._bridge.then((component) => component[name2](...args)),
            enumerable: false,
            configurable: false,
            writable: false
          });
        for (const type of events)
          this._bridge.then(
            (component) => component.$on(type, (event) => this.dispatchEvent(event))
          );
        iframe.onload = () => iframe.contentDocument.head.append(script);
        document.head.append(iframe);
      }
      disconnectedCallback() {
      }
    }
  );
};
const attrs2props = (attrs) => Object.fromEntries(Array.from(attrs, ({ name, value }) => [camelCase(name), value]));
const camelCase = (str) => str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
const index = Widget({
  name: "tint-vto",
  /**
   * To isolate the app scripts, it must run on a separate Realm (see @lib/widget for details on the Realm).
   * To run the app on the separate Realm, it must be loaded from an external script file.
   * The path to the script file differs between Vite’s `dev` and `build modes, so the environment variable is presented.
   * The actual variable value is set by vite.config.ts.
   */
  src: new URL("./assets/app.js", import.meta["url"]),
  // the ["url"] syntax is used to trick Vite to note transpile the import.meta.url
  exports: ["open", "close", "useWebcam", "usePhoto", "applyProduct", "applyProductByCustomerSku"],
  events: [
    "open",
    "close",
    "addToCart",
    "removeFromCart",
    "redirectToCart",
    "applyProduct",
    "removeAppliedProduct",
    "replaceAppliedProduct",
    "demo"
  ]
});
const isBrowserSupported = () => typeof window !== "undefined" && import.meta && Ay();
export {
  index as default,
  isBrowserSupported
};

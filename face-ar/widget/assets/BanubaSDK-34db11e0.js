var _a;
var Sh = Object.defineProperty;
var Th = (r, o, n) => o in r ? Sh(r, o, { enumerable: true, configurable: true, writable: true, value: n }) : r[o] = n;
var fe = (r, o, n) => (Th(r, typeof o != "symbol" ? o + "" : o, n), n);
let Ch = 0;
const ws = () => Ch++, vs = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2FkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCh7ZGF0YTp0fSk9Pntjb25zdCBzPXtpZDp0LmlkfTtzZXRUaW1lb3V0KHBvc3RNZXNzYWdlLHQudGltZW91dCxzKX0pfSkoKTsK", wa = typeof window < "u" && window.Blob && new Blob([atob(vs)], { type: "text/javascript;charset=utf-8" });
function Rh() {
  let r;
  try {
    if (r = wa && (window.URL || window.webkitURL).createObjectURL(wa), !r)
      throw "";
    return new Worker(r);
  } catch {
    return new Worker("data:application/javascript;base64," + vs);
  } finally {
    r && (window.URL || window.webkitURL).revokeObjectURL(r);
  }
}
let Sn;
const Ei = /* @__PURE__ */ new Map(), Es = (r, o) => {
  const n = ws(), l = { id: n, timeout: o };
  return Ei.set(l.id, r), Sn || (Sn = new Rh(), Sn.onmessage = ({ data: b }) => {
    const v = Ei.get(b.id);
    Ei.delete(b.id), v();
  }), Sn.postMessage(l), n;
}, Fh = 60, va = 1e3 / Fh, Tn = [];
let Ea = 0;
const xs = (r) => {
  const o = ws();
  if (Tn.length === 0) {
    const n = performance.now(), l = va - (n - Ea) % va;
    Es(() => {
      const b = Ea = performance.now(), v = [...Tn];
      Tn.length = 0, v.forEach((w) => w(b));
    }, l);
  }
  return Tn.push(r), o;
}, Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  requestAnimationFrame: xs,
  setTimeout: Es
}, Symbol.toStringTag, { value: "Module" })), Ih = (...r) => window.setTimeout(...r), kn = /* @__PURE__ */ new Map(), Ph = (r) => {
  const o = window.requestAnimationFrame((...n) => {
    kn.delete(o), r(...n);
  });
  return kn.set(o, r), o;
};
typeof document < "u" && document.addEventListener("visibilitychange", () => {
  document.visibilityState !== "visible" && kn.forEach((r, o) => {
    kn.delete(o), cancelAnimationFrame(o), xs(r);
  });
});
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  requestAnimationFrame: Ph,
  setTimeout: Ih
}, Symbol.toStringTag, { value: "Module" })), kh = typeof document < "u" ? document : { visibilityState: "hidden" }, Ss = () => kh.visibilityState === "visible" ? Dh : Ah, On = (r) => Ss().requestAnimationFrame(r), Ts = (r, o) => Ss().setTimeout(r, o), Cs = (r) => Promise.resolve().then(r), uo = {
  requestAnimationFrame: On,
  setTimeout: Ts
}, Ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nextTick: Cs,
  requestAnimationFrame: On,
  setTimeout: Ts,
  timers: uo
}, Symbol.toStringTag, { value: "Module" })), Lh = () => new Promise((r) => On(r)), lo = (r = -1) => function(o, n, l) {
  const b = l, v = b.value;
  return { ...b, value: async function* (...D) {
    const k = v.apply(this, D);
    let N = 0, ee = 0;
    for (; ; ) {
      const le = 1e3 / r, Z = 0.1 * le;
      for (; (ee = performance.now()) - N < le - Z; )
        await Lh();
      N = ee;
      const { done: z, value: pe } = await k.next();
      if (z)
        return pe;
      const _e = yield pe;
      typeof _e < "u" && (r = _e);
    }
  } };
}, jn = async (r, o = {}) => new Promise((n) => {
  const l = document.createElement("video");
  if (l.muted = true, l.controls = false, l.playsInline = true, Object.assign(l, o), r instanceof globalThis.MediaStream)
    l.srcObject = r, l.addEventListener("ended", () => l.srcObject = null, { once: true }), r.addEventListener("inactive", () => l.dispatchEvent(new CustomEvent("ended")), {
      once: true
    });
  else {
    if (typeof r != "string") {
      const v = r = URL.createObjectURL(r);
      l.addEventListener("emptied", () => URL.revokeObjectURL(v), { once: true });
    }
    l.crossOrigin = "anonymous", l.src = r, l.addEventListener("ended", () => l.src = "", { once: true });
  }
  l.style.position = "fixed", l.style.zIndex = "-9999999", l.style.opacity = "0.0000000001", document.body.appendChild(l), l.addEventListener("emptied", () => l.remove(), { once: true });
  const b = setInterval(() => l.readyState, 300);
  l.addEventListener("play", () => clearInterval(b), { once: true }), l.addEventListener("play", () => n(l), { once: true }), l.addEventListener("loadedmetadata", () => l.play(), { once: true });
}), Mh = (r) => new Promise((o, n) => {
  const l = document.createElement("img");
  l.onload = () => o(l), l.onerror = n, l.crossOrigin = "anonymous", l.src = typeof r == "string" ? r : URL.createObjectURL(r);
}), xa = /* @__PURE__ */ new Map(), Bh = (r, o, n) => r * (1 - n) + o * n, Hi = (r) => `webar::${r}:start`, xi = (r) => `webar::${r}:end`, fo = (r) => {
  let o = { internalName: r + ":" + Math.random() };
  return performance.mark(Hi(o.internalName)), o;
}, co = (r) => {
  const o = r.internalName;
  performance.mark(xi(o));
  let n = performance.measure(o, Hi(o), xi(o));
  n || (n = performance.getEntriesByName(o)[0]), performance.clearMarks(Hi(o)), performance.clearMarks(xi(o)), performance.clearMeasures(o);
  const { duration: l } = n, b = o.split(":")[0];
  let { averagedDuration: v = 0 } = xa.get(b) || {};
  return v = Bh(v, l, 0.05), xa.set(b, { averagedDuration: v }), { instantDuration: l, averagedDuration: v };
}, Rs = (r, o = (n) => console.warn(n)) => function(n, l, b) {
  const v = b.value;
  if (typeof v != "function")
    throw new TypeError("Only functions can be marked as deprecated");
  return { ...b, value: function(...D) {
    return o.call(
      this,
      `DEPRECATION: ${n.constructor.name}.${l}() is deprecated. ${r}`
    ), v.call(this, ...D);
  } };
};
let Yr = class {
  constructor() {
    fe(this, "_emitter", new EventTarget());
  }
  addEventListener(o, n, l) {
    this._emitter.addEventListener(o, n, l);
  }
  removeEventListener(o, n, l) {
    this._emitter.removeEventListener(o, n, l);
  }
  dispatchEvent(o) {
    return this._emitter.dispatchEvent(o);
  }
  removeAllEventListeners() {
    this._emitter = new EventTarget();
  }
};
const Nh = (r, o, n) => fetch(r, o).then((l) => {
  if (!l.body)
    return l;
  let b = 0;
  const v = Number(l.headers.get("content-length") || 0), w = l.body.getReader();
  return new Response(
    new ReadableStream({
      async start(y) {
        var _a2;
        for (; ; ) {
          const { done: D, value: k } = await w.read();
          if (D ? b = v : b += k.byteLength, (_a2 = n == null ? void 0 : n.onProgress) == null ? void 0 : _a2.call(n, { total: v, transferred: b }), D)
            break;
          y.enqueue(k);
        }
        y.close();
      }
    }),
    l
  );
}), Ay = () => (
  // The meta.env.SUPPORTED_BROWSERS will be replaced during build with RegExp, see vite.config.js
  /Edge?\/(79|[89]\d|\d{3,})(\.\d+|)(\.\d+|)|Firefox\/(6[5-9]|[7-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[7-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|Maci.* Version\/(1[5-9]|[2-9]\d|\d{3,})\.\d+([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(4[4-9]|[5-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(1[5-9]|[2-9]\d|\d{3,})[._]\d+([._]\d+|)|Mobile Safari.+OPR\/(7[2-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Chrom(ium|e)\/(10[7-9]|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(1[3-9]|[2-9]\d|\d{3,})\.\d+\.\d+|SamsungBrowser\/([7-9]|\d{2,})\.\d+|Android.+MQ{2}Browser\/(1[3-9]|[2-9]\d|\d{3,})(\.\d+|)(\.\d+|)|baidubrowser[\s/](1[3-9]|[2-9]\d|\d{3,})(\.\d+|)(\.\d+|)/.test(navigator.userAgent)
), Oh = typeof window < "u" && /^((?!chrome|android).)*safari/i.test((_a = window.navigator) == null ? void 0 : _a.userAgent), Fs = typeof OffscreenCanvas < "u" && !Oh, As = {
  // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#avoid_alphafalse_which_can_be_expensive
  alpha: true,
  antialias: false,
  depth: false,
  // since this context is designed to process video, it's better to be synchronized with the browser renderer
  desynchronized: false,
  // avoid setting `powerPreference` to `"high-performance"` - it highly increases GPU usage
  // powerPreference: "high-performance",
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  stencil: false
};
let se;
const jh = (() => {
  if (typeof window > "u")
    return false;
  se ?? (se = Ln().getContext("webgl2", As));
  const r = se.createTexture();
  se.bindTexture(se.TEXTURE_2D, r), se.texImage2D(se.TEXTURE_2D, 0, se.RGB, 1, 1, 0, se.RGB, se.UNSIGNED_BYTE, null);
  const o = se.createFramebuffer();
  se.bindFramebuffer(se.FRAMEBUFFER, o), se.framebufferTexture2D(se.FRAMEBUFFER, se.COLOR_ATTACHMENT0, se.TEXTURE_2D, r, 0);
  const n = se.getParameter(se.IMPLEMENTATION_COLOR_READ_FORMAT);
  return se.bindFramebuffer(se.FRAMEBUFFER, null), se.bindTexture(se.TEXTURE_2D, null), se.deleteFramebuffer(o), se.deleteTexture(r), n === se.RGB;
})(), Sa = async (r, o, n = "RGBA") => {
  se ?? (se = Ln().getContext("webgl2", As));
  const l = se.canvas.width = r.width, b = se.canvas.height = r.height;
  n === "RGB" && se.pixelStorei(se.PACK_ALIGNMENT, 1);
  const v = se.createTexture();
  se.bindTexture(se.TEXTURE_2D, v), se.texParameteri(se.TEXTURE_2D, se.TEXTURE_MIN_FILTER, se.NEAREST), se.texParameteri(se.TEXTURE_2D, se.TEXTURE_MAG_FILTER, se.LINEAR), se.texImage2D(se.TEXTURE_2D, 0, se[n], se[n], se.UNSIGNED_BYTE, r);
  const w = se.createFramebuffer();
  se.bindFramebuffer(se.FRAMEBUFFER, w), se.framebufferTexture2D(se.FRAMEBUFFER, se.COLOR_ATTACHMENT0, se.TEXTURE_2D, v, 0);
  const y = se.createBuffer();
  se.bindBuffer(se.PIXEL_PACK_BUFFER, y), se.bufferData(se.PIXEL_PACK_BUFFER, o.byteLength, se.STREAM_READ), se.readPixels(0, 0, l, b, se[n], se.UNSIGNED_BYTE, 0), se.bindBuffer(se.PIXEL_PACK_BUFFER, null), se.bindFramebuffer(se.FRAMEBUFFER, null), se.deleteFramebuffer(w), se.bindTexture(se.TEXTURE_2D, null), se.deleteTexture(v);
  const D = se.fenceSync(se.SYNC_GPU_COMMANDS_COMPLETE, 0);
  se.flush(), await Uh(se, D).finally(() => se.deleteSync(D)), se.bindBuffer(se.PIXEL_PACK_BUFFER, y), se.getBufferSubData(
    se.PIXEL_PACK_BUFFER,
    0,
    new DataView(o.buffer()),
    o.byteOffset,
    o.byteLength
  ), se.bindBuffer(se.PIXEL_PACK_BUFFER, null), se.deleteBuffer(y), se.canvas.width = se.canvas.height = 0;
}, Uh = (r, o) => new Promise(
  (n, l) => function b() {
    const v = r.clientWaitSync(o, 0, 0);
    if (v === r.WAIT_FAILED)
      return l(new Error("GPU operations complete wait failed"));
    if (v === r.CONDITION_SATISFIED || v === r.ALREADY_SIGNALED)
      return n();
    uo.setTimeout(b, 2);
  }()
);
function Wh(r = 300, o = 150) {
  const n = document.createElement("canvas");
  return n.width = r, n.height = o, n;
}
function $h(r = 300, o = 150) {
  return new OffscreenCanvas(r, o);
}
function Ln(r = 300, o = 150) {
  return Fs ? $h(r, o) : Wh(r, o);
}
const ho = (r = {}) => ({ getOptions: (n) => {
  let l = n instanceof HTMLVideoElement ? n.videoWidth : n.width, b = n instanceof HTMLVideoElement ? n.videoHeight : n.height, v = 0, w = 0, y = l, D = b;
  return r.crop && ([v, w, y, D] = r.crop(y, D), [l, b] = [y, D]), r.resize && ([l, b] = r.resize(l, b)), {
    visibleRect: { x: v, y: w, width: y, height: D },
    displayWidth: l,
    displayHeight: b,
    flipY: !!r.horizontalFlip
  };
} });
class po {
  constructor(o, n = {}) {
    fe(this, "_texture", null);
    const l = n.displayWidth ?? (o instanceof HTMLVideoElement ? o.videoWidth : o.width), b = n.displayHeight ?? (o instanceof HTMLVideoElement ? o.videoHeight : o.height), { x: v = 0, y: w = 0, width: y = l, height: D = b } = n.visibleRect ?? {}, k = Ln(l, b), N = k.getContext("2d");
    n.flipY && (N.translate(k.width, 0), N.scale(-1, 1)), N.drawImage(o, v, w, y, D, 0, 0, k.width, k.height), this._texture = k;
  }
  /** @internal */
  get texture() {
    return this._texture;
  }
  get width() {
    var _a2;
    return ((_a2 = this._texture) == null ? void 0 : _a2.width) ?? 0;
  }
  get height() {
    var _a2;
    return ((_a2 = this._texture) == null ? void 0 : _a2.height) ?? 0;
  }
  /** Pixel format of the Frame */
  get format() {
    return this._texture ? jh ? "RGB" : "RGBA" : null;
  }
  /** @returns The number of bytes required to hold the Frame pixels */
  allocationSize(o) {
    if (!this.format)
      throw new Error("Failed to execute 'allocationSize' on 'Frame': Frame is closed.");
    const { width: n, height: l } = o || this;
    return n * l * this.format.length;
  }
  /** Copies the Frame pixels to the destination */
  async copyTo(o, n) {
    if (!this._texture)
      throw new Error("Failed to execute 'copyTo' on 'Frame': Frame is closed.");
    if (!n)
      return await Sa(this._texture, o, this.format);
    const l = Ln(n.width, n.height).getContext(
      "2d"
    );
    l.drawImage(this._texture, 0, 0, l.canvas.width, l.canvas.height), await Sa(l.canvas, o, this.format), l.canvas.width = l.canvas.height = 0;
  }
  /** Releases GPU resources held by the Frame */
  close() {
    this._texture && (this._texture.width = this._texture.height = 0), this._texture = null;
  }
}
var Gh = Object.defineProperty, Vh = Object.getOwnPropertyDescriptor, zh = (r, o, n, l) => {
  for (var b = l > 1 ? void 0 : l ? Vh(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (b = (l ? w(o, n, b) : w(b)) || b);
  return l && b && Gh(o, n, b), b;
}, Is;
let Hh = class {
  constructor(o) {
    fe(this, "_src");
    fe(this, "kind", "image");
    this._src = o;
  }
  async *[Is = Symbol.asyncIterator](o) {
    const n = await Mh(this._src), l = ho(o);
    yield new po(n, l.getOptions(n)), URL.revokeObjectURL(n.src), n.src = "";
  }
};
zh([
  lo(30)
], Hh.prototype, Is, 1);
var Kh = Object.defineProperty, Yh = Object.getOwnPropertyDescriptor, Xh = (r, o, n, l) => {
  for (var b = l > 1 ? void 0 : l ? Yh(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (b = (l ? w(o, n, b) : w(b)) || b);
  return l && b && Kh(o, n, b), b;
}, Ps, Wt;
const Ds = (Wt = class {
  /**
   * Creates MediaStream input from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/MediaStream | MediaStream}
   * @example
   * ```ts
   * const stream = new MediaStream(
   *  await navigator.mediaDevices.getUserMedia({ video: true })
   * )
   * ```
   */
  constructor(o) {
    fe(this, "_stream");
    fe(this, "kind", "stream");
    if (!Wt.cache.has(o))
      Wt.cache.set(o, this);
    else
      return Wt.cache.get(o);
    this._stream = o;
  }
  async *[Ps = Symbol.asyncIterator](o) {
    const n = await jn(this._stream), l = ho(o), b = "requestVideoFrameCallback" in n ? n.requestVideoFrameCallback.bind(n) : requestAnimationFrame;
    for (; !n.paused; )
      await new Promise(b), yield new po(n, l.getOptions(n));
    URL.revokeObjectURL(n.src), n.src = "", n.srcObject = null;
  }
  /** Stops underlying media stream */
  stop() {
    for (const o of this._stream.getVideoTracks())
      o.stop();
    this._stream && Wt.cache.delete(this._stream);
  }
}, fe(Wt, "cache", /* @__PURE__ */ new WeakMap()), Wt);
Xh([
  lo(30)
], Ds.prototype, Ps, 1);
let Si = Ds;
var Zh = Object.defineProperty, qh = Object.getOwnPropertyDescriptor, Qh = (r, o, n, l) => {
  for (var b = l > 1 ? void 0 : l ? qh(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (b = (l ? w(o, n, b) : w(b)) || b);
  return l && b && Zh(o, n, b), b;
}, ks;
const Jh = {
  loop: false
};
class ep {
  /** @param options - options to be merged with {@link defaultVideoOptions} */
  constructor(o, n) {
    fe(this, "_src");
    fe(this, "_options");
    fe(this, "_video", null);
    fe(this, "kind", "video");
    this._src = o, this._options = {
      ...Jh,
      ...n
    };
  }
  async *[ks = Symbol.asyncIterator](o) {
    const n = await (this._video ?? (this._video = jn(this._src, this._options))), l = ho(o), b = "requestVideoFrameCallback" in n ? n.requestVideoFrameCallback.bind(n) : requestAnimationFrame;
    for (; !n.paused; )
      await new Promise(b), yield new po(n, l.getOptions(n));
  }
  /** Stops underlying video */
  stop() {
    this._video && this._video.then(
      (o) => (URL.revokeObjectURL(o.src), o.src = "", o.srcObject = null)
    ), this._video = null;
  }
}
Qh([
  lo(30)
], ep.prototype, ks, 1);
const tp = `#define GLSLIFY 1
attribute vec2 a_position;
varying vec2 v_tex_uv;

void main() {
  v_tex_uv.x = (a_position.x + 1.) * .5;
  v_tex_uv.y = 1. - (a_position.y + 1.) * .5;
  gl_Position = vec4(a_position, 0., 1.);
}
`, rp = `precision highp float;
#define GLSLIFY 1

varying vec2 v_tex_uv;

uniform sampler2D u_texture;
uniform vec2 u_viewsize;

/**
 * u_filters.x - denoising algorithm to use
 *   1 - FSR
 *   2 - Bilateral
 *   any other value - none
 * u_filters.y - light correction coefficient in [0, 2]
 *   1 - no light correction
 */
uniform vec2 u_filters;

// https://github.com/glslify/glslify#importing-a-glsl-module
// https://github.com/glslify/glslify#passing-references-between-modules
// Copyright (c) 2021 Advanced Micro Devices, Inc. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// FidelityFX FSR v1.0.2 by AMD
// ported to mpv by agyild - https://gist.github.com/agyild/82219c545228d70c5604f865ce0b0ce5
// ported to WebGL by goingdigital - https://www.shadertoy.com/view/stXSWB
// using colorspace functions from tobspr - https://github.com/tobspr/GLSL-Color-Spaces/blob/master/ColorSpaces.inc.glsl

#define SHARPENING 2.0 // Sharpening intensity: Adjusts sharpening intensity by averaging the original pixels to the sharpened result. 1.0 is the unmodified default. 0.0 to 1.0.
#define CONTRAST 2.0 // Adjusts the range the shader adapts to high contrast (0 is not all the way off). Higher values = more high contrast sharpening. 0.0 to 1.0.
#define PERFORMANCE 1 // Whether to use optimizations for performance with loss of quality

// Used to convert from linear RGB to XYZ space
const mat3 RGB_2_XYZ_2717090884 = (mat3(
  0.4124564, 0.2126729, 0.0193339,
  0.3575761, 0.7151522, 0.1191920,
  0.1804375, 0.0721750, 0.9503041
));

// Used to convert from XYZ to linear RGB space
const mat3 XYZ_2_RGB_2717090884 = (mat3(
   3.2404542,-0.9692660, 0.0556434,
  -1.5371385, 1.8760108,-0.2040259,
  -0.4985314, 0.0415560, 1.0572252
));
// Converts a color from linear RGB to XYZ space
vec3 rgb_to_xyz_2717090884(vec3 rgb) {
  return RGB_2_XYZ_2717090884 * rgb;
}

// Converts a color from XYZ to linear RGB space
vec3 xyz_to_rgb_2717090884(vec3 xyz) {
  return XYZ_2_RGB_2717090884 * xyz;
}

/* EASU stage
*
* This takes a reduced resolution source, and scales it up while preserving detail.
*
* Updates:
*   stretch definition fixed. Thanks nehon for the bug report!
*/

vec3 FsrEasuCF(vec2 p) {
  vec2 uv = (p + .5) / u_viewsize;
  vec4 color = texture2D(u_texture, uv);
    return rgb_to_xyz_2717090884(color.rgb);
}

/**** EASU ****/
void FsrEasuCon(
  out vec4 con0,
  out vec4 con1,
  out vec4 con2,
  out vec4 con3,
  // This the rendered image resolution being upscaled
  vec2 inputViewportInPixels,
  // This is the resolution of the resource containing the input image (useful for dynamic resolution)
  vec2 inputSizeInPixels,
  // This is the display resolution which the input image gets upscaled to
  vec2 outputSizeInPixels
)
{
  // Output integer position to a pixel position in viewport.
  con0 = vec4(
    inputViewportInPixels.x/outputSizeInPixels.x,
    inputViewportInPixels.y/outputSizeInPixels.y,
    .5*inputViewportInPixels.x/outputSizeInPixels.x-.5,
    .5*inputViewportInPixels.y/outputSizeInPixels.y-.5
  );
  // Viewport pixel position to normalized image space.
  // This is used to get upper-left of 'F' tap.
  con1 = vec4(1.,1.,1.,-1.)/inputSizeInPixels.xyxy;
  // Centers of gather4, first offset from upper-left of 'F'.
  //      +---+---+
  //      |   |   |
  //      +--(0)--+
  //      | b | c |
  //  +---F---+---+---+
  //  | e | f | g | h |
  //  +--(1)--+--(2)--+
  //  | i | j | k | l |
  //  +---+---+---+---+
  //      | n | o |
  //      +--(3)--+
  //      |   |   |
  //      +---+---+
  // These are from (0) instead of 'F'.
  con2 = vec4(-1.,2.,1.,2.)/inputSizeInPixels.xyxy;
  con3 = vec4(0.,4.,0.,0.)/inputSizeInPixels.xyxy;
}

// Filtering for a given tap for the scalar.
void FsrEasuTapF(
  inout vec3 aC, // Accumulated color, with negative lobe.
  inout float aW, // Accumulated weight.
  vec2 off_0, // Pixel offset from resolve position to tap.
  vec2 dir_0, // Gradient direction.
  vec2 len_0, // Length.
  float lob_0, // Negative lobe strength.
  float clp_0, // Clipping point.
  vec3 c_0
)
{
  // Tap color.
  // Rotate offset by direction.
  vec2 v = vec2(dot(off_0, dir_0), dot(off_0,vec2(-dir_0.y,dir_0.x)));
  // Anisotropy.
  v *= len_0;
  // Compute distance^2.
  float d2 = min(dot(v,v),clp_0);
  // Limit to the window as at corner, 2 taps can easily be outside.
  // Approximation of lancos2 without sin() or rcp(), or sqrt() to get x.
  //  (25/16 * (2/5 * x^2 - 1)^2 - (25/16 - 1)) * (1/4 * x^2 - 1)^2
  //  |_______________________________________|   |_______________|
  //                   base                             window
  // The general form of the 'base' is,
  //  (a*(b*x^2-1)^2-(a-1))
  // Where 'a=1/(2*b-b^2)' and 'b' moves around the negative lobe.
  float wB = .4 * d2 - 1.;
  float wA = lob_0 * d2 -1.;
  wB *= wB;
  wA *= wA;
  wB = 1.5625*wB-.5625;
  float w=  wB * wA;
  // Do weighted average.
  aC += c_0*w;
  aW += w;
}

//------------------------------------------------------------------------------------------------------------------------------
// Accumulate direction and length.
void FsrEasuSetF(
    inout vec2 dir,
    inout float len,
    float w,
    float lA,float lB,float lC,float lD,float lE
)
{
  // Direction is the '+' diff.
  //    a
  //  b c d
  //    e
  // Then takes magnitude from abs average of both sides of 'c'.
  // Length converts gradient reversal to 0, smoothly to non-reversal at 1, shaped, then adding horz and vert terms.
  float lenX = max(abs(lD - lC), abs(lC - lB));
  float dirX = lD - lB;
  dir.x += dirX * w;
  lenX = clamp(abs(dirX)/lenX,0.,1.);
  lenX *= lenX;
  len += lenX * w;
  // Repeat for the y axis.
  float lenY = max(abs(lE - lC), abs(lC - lA));
  float dirY = lE - lA;
  dir.y += dirY * w;
  lenY = clamp(abs(dirY) / lenY,0.,1.);
  lenY *= lenY;
  len += lenY * w;
}

//------------------------------------------------------------------------------------------------------------------------------
void FsrEasuF(
  out vec3 pix,
  vec2 ip, // Integer pixel position in output.
  // Constants generated by FsrEasuCon().
  vec4 con0, // xy = output to input scale, zw = first pixel offset correction
  vec4 con1_0,
  vec4 con2_0,
  vec4 con3_0
)
{
  //------------------------------------------------------------------------------------------------------------------------------
  // Get position of 'f'.
  vec2 pp = ip * con0.xy + con0.zw; // Corresponding input pixel/subpixel
  vec2 fp = floor(pp);// fp = source nearest pixel
  pp -= fp; // pp = source subpixel

  //------------------------------------------------------------------------------------------------------------------------------
  // 12-tap kernel.
  //    b c
  //  e f g h
  //  i j k l
  //    n o
  // Gather 4 ordering.
  //  a b
  //  r g
  vec2 p0 = fp * con1_0.xy + con1_0.zw;
  
  // These are from p0 to avoid pulling two constants on pre-Navi hardware.
  vec2 p1 = p0 + con2_0.xy;
  vec2 p2 = p0 + con2_0.zw;
  vec2 p3 = p0 + con3_0.xy;

  // TextureGather is not available on WebGL2
  vec4 off = vec4(-.5,.5,-.5,.5)*con1_0.xxyy;
  // textureGather to texture offsets
  // x=west y=east z=north w=south
  vec3 bC = FsrEasuCF(p0 + off.xw); float bL = bC.g + 0.5 *(bC.r + bC.b);
  vec3 cC = FsrEasuCF(p0 + off.yw); float cL = cC.g + 0.5 *(cC.r + cC.b);
  vec3 iC = FsrEasuCF(p1 + off.xw); float iL = iC.g + 0.5 *(iC.r + iC.b);
  vec3 jC = FsrEasuCF(p1 + off.yw); float jL = jC.g + 0.5 *(jC.r + jC.b);
  vec3 fC = FsrEasuCF(p1 + off.yz); float fL = fC.g + 0.5 *(fC.r + fC.b);
  vec3 eC = FsrEasuCF(p1 + off.xz); float eL = eC.g + 0.5 *(eC.r + eC.b);
  vec3 kC = FsrEasuCF(p2 + off.xw); float kL = kC.g + 0.5 *(kC.r + kC.b);
  vec3 lC = FsrEasuCF(p2 + off.yw); float lL = lC.g + 0.5 *(lC.r + lC.b);
  vec3 hC = FsrEasuCF(p2 + off.yz); float hL = hC.g + 0.5 *(hC.r + hC.b);
  vec3 gC = FsrEasuCF(p2 + off.xz); float gL = gC.g + 0.5 *(gC.r + gC.b);
  vec3 oC = FsrEasuCF(p3 + off.yz); float oL = oC.g + 0.5 *(oC.r + oC.b);
  vec3 nC = FsrEasuCF(p3 + off.xz); float nL = nC.g + 0.5 *(nC.r + nC.b);
 
  //------------------------------------------------------------------------------------------------------------------------------
  // Simplest multi-channel approximate luma possible (luma times 2, in 2 FMA/MAD).
  // Accumulate for bilinear interpolation.
  vec2 dir = vec2(0.);
  float len = 0.;

  FsrEasuSetF(dir, len, (1.-pp.x)*(1.-pp.y), bL, eL, fL, gL, jL);
  FsrEasuSetF(dir, len,    pp.x  *(1.-pp.y), cL, fL, gL, hL, kL);
  FsrEasuSetF(dir, len, (1.-pp.x)*  pp.y  , fL, iL, jL, kL, nL);
  FsrEasuSetF(dir, len,    pp.x  *  pp.y  , gL, jL, kL, lL, oL);

  //------------------------------------------------------------------------------------------------------------------------------
  // Normalize with approximation, and cleanup close to zero.
  vec2 dir2 = dir * dir;
  float dirR = dir2.x + dir2.y;
  bool zro = dirR < (1.0/32768.0);
  dirR = inversesqrt(dirR);
#if (PERFORMANCE == 1)
  if (zro) {
    vec4 w = vec4(0.0);
    w.x = (1.0 - pp.x) * (1.0 - pp.y);
    w.y =        pp.x  * (1.0 - pp.y);
    w.z = (1.0 - pp.x) *        pp.y;
    w.w =        pp.x  *        pp.y;
    pix.r = clamp(dot(w, vec4(fL, gL, jL, kL)), 0.0, 1.0);
    return;
  }
#elif (PERFORMANCE == 0)
  dirR = zro ? 1.0 : dirR;
  dir.x = zro ? 1.0 : dir.x;
#endif
  dir *= vec2(dirR);
  // Transform from {0 to 2} to {0 to 1} range, and shape with square.
  len = len * 0.5;
  len *= len;
  // Stretch kernel {1.0 vert|horz, to sqrt(2.0) on diagonal}.
  float stretch = dot(dir,dir) / (max(abs(dir.x), abs(dir.y)));
  // Anisotropic length after rotation,
  //  x := 1.0 lerp to 'stretch' on edges
  //  y := 1.0 lerp to 2x on edges
  vec2 len2 = vec2(1. +(stretch-1.0)*len, 1. -.5 * len);
  // Based on the amount of 'edge',
  // the window shifts from +/-{sqrt(2.0) to slightly beyond 2.0}.
  float lob = .5 - .29 * len;
  // Set distance^2 clipping point to the end of the adjustable window.
  float clp = 1./lob;

  //------------------------------------------------------------------------------------------------------------------------------
  // Accumulation mixed with min/max of 4 nearest.
  //    b c
  //  e f g h
  //  i j k l
  //    n o
  // Accumulation.
  vec3 aC = vec3(0);
  float aW = 0.;
  FsrEasuTapF(aC, aW, vec2( 0.,-1.)-pp, dir, len2, lob, clp, bC);
  FsrEasuTapF(aC, aW, vec2( 1.,-1.)-pp, dir, len2, lob, clp, cC);
  FsrEasuTapF(aC, aW, vec2(-1., 1.)-pp, dir, len2, lob, clp, iC);
  FsrEasuTapF(aC, aW, vec2( 0., 1.)-pp, dir, len2, lob, clp, jC);
  FsrEasuTapF(aC, aW, vec2( 0., 0.)-pp, dir, len2, lob, clp, fC);
  FsrEasuTapF(aC, aW, vec2(-1., 0.)-pp, dir, len2, lob, clp, eC);
  FsrEasuTapF(aC, aW, vec2( 1., 1.)-pp, dir, len2, lob, clp, kC);
  FsrEasuTapF(aC, aW, vec2( 2., 1.)-pp, dir, len2, lob, clp, lC);
  FsrEasuTapF(aC, aW, vec2( 2., 0.)-pp, dir, len2, lob, clp, hC);
  FsrEasuTapF(aC, aW, vec2( 1., 0.)-pp, dir, len2, lob, clp, gC);
  FsrEasuTapF(aC, aW, vec2( 1., 2.)-pp, dir, len2, lob, clp, oC);
  FsrEasuTapF(aC, aW, vec2( 0., 2.)-pp, dir, len2, lob, clp, nC);
  //------------------------------------------------------------------------------------------------------------------------------
  // Normalize and dering.
#if (PERFORMANCE == 1)
pix = aC/aW;
#elif (PERFORMANCE == 0)
  vec3 min4 = min(min(fC,gC),min(jC,kC));
  vec3 max4 = max(max(fC,gC),max(jC,kC));
  pix=min(max4,max(min4,aC/aW));
#endif
}

void EASU( out vec4 fragColor, in vec2 fragCoord )
{
  vec3 c;
  vec4 con0,con1,con2,con3;
  
  // "rendersize" refers to size of source image before upscaling.
  vec2 rendersize = u_viewsize;
  FsrEasuCon(
    con0, con1, con2, con3, rendersize, rendersize, rendersize
  );
  FsrEasuF(c, fragCoord, con0, con1, con2, con3);
  
  fragColor = vec4(xyz_to_rgb_2717090884(c.xyz), 1);
}

vec4 getPixel(vec2 pos) {
  vec2 coord = (pos + .5) / u_viewsize;
  coord.y = 1.0 - coord.y;
  return texture2D(u_texture, coord);
}

vec4 fsr_easu_2717090884(vec2 uv) {
  vec4 e = getPixel(gl_FragCoord.xy);

    
  vec4 e_xyz = vec4(rgb_to_xyz_2717090884(e.rgb), 1);
  EASU(e_xyz, (gl_FragCoord.xy + 0.5) / u_viewsize);  
  
  // fetch a 3x3 neighborhood around the pixel 'e',
  //  a b c
  //  d(e)f
  //  g h i 
  vec3 a = getPixel(gl_FragCoord.xy + vec2(-1.0,-1.0)).rgb;
  vec3 b = getPixel(gl_FragCoord.xy + vec2( 0.0,-1.0)).rgb;
  vec3 c = getPixel(gl_FragCoord.xy + vec2( 1.0,-1.0)).rgb;
  vec3 f = getPixel(gl_FragCoord.xy + vec2( 1.0, 0.0)).rgb;
  vec3 g = getPixel(gl_FragCoord.xy + vec2(-1.0, 1.0)).rgb;
  vec3 h = getPixel(gl_FragCoord.xy + vec2( 0.0, 1.0)).rgb;
  vec3 d = getPixel(gl_FragCoord.xy + vec2(-1.0, 0.0)).rgb;
  vec3 i = getPixel(gl_FragCoord.xy + vec2( 1.0, 1.0)).rgb;;
  // Soft min and max.
  //  a b c     b
  //  d e f * 0.5 + d e f * 0.5
  //  g h i     h
  // These are 2.0x bigger (factored out the extra multiply).

  vec3 mnRGB = min(min(min(d, e.rgb), min(f, b)), h);
  vec3 mnRGB2 = min(mnRGB, min(min(a, c), min(g, i)));
  mnRGB += mnRGB2;

  vec3 mxRGB = max(max(max(d, e.rgb), max(f, b)), h);
  vec3 mxRGB2 = max(mxRGB, max(max(a, c), max(g, i)));
  mxRGB += mxRGB2;

  // Smooth minimum distance to signal limit divided by smooth max.
  vec3 rcpMRGB = 1.0 / mxRGB;
  vec3 ampRGB = clamp(min(mnRGB, 2.0 - mxRGB) * rcpMRGB, 0.0, 1.0);

  // Shaping amount of sharpening.
  ampRGB = inversesqrt(ampRGB);

  float peak = -3.0 * clamp(CONTRAST, 0.0, 1.0) + 8.0;
  vec3 wRGB = -(1.0 / (ampRGB * peak));

  vec3 rcpWeightRGB = 1.0 / (4.0 * wRGB + 1.0);

  //          0 w 0
  //  Filter shape: w 1 w
  //          0 w 0
  vec3 window = (b + d) + (f + h);
  vec3 outColor = clamp((window * wRGB + e.rgb) * rcpWeightRGB, 0.0, 1.0);

  return vec4(mix(e.rgb, outColor, SHARPENING), e.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

#define DIFF 1.0
#define RADIUS 4.0

void bilateral_iter_3977570374(vec2 random_dir, vec2 radius, float diff, vec4 pixel, vec2 uv, inout vec3 result, inout float totalWeight)
{
  vec2 dir = random_dir * radius;
  vec3 randomPixel = texture2D(u_texture, uv + dir).xyz;
  vec3 delta = randomPixel - pixel.rgb;
  float weight = exp(-dot(delta, delta) / diff);
  result += randomPixel * weight;
  totalWeight += weight;
}

vec4 bilateral(vec2 uv)
{
  vec2 radius = (RADIUS / u_viewsize);
  float diff = DIFF / 255.0;
  vec4 pixel = texture2D(u_texture, uv);
  vec3 result = vec3(0.0, 0.0, 0.0);
  float totalWeight = 0.0;

  // uroll loop and substitute precalculated random vectors for GLSL 1.0 ES:

  bilateral_iter_3977570374(vec2(-0.886051297,0.447155535), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.270759493,0.537728608), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.896959424,0.440607518), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.804274619,0.125076547), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.373693645,0.240383312), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.850325704,-0.192106694), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.453608066,0.889671504), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.280496657,0.206442386), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.840040743,-0.36367026), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.151598319,-0.884027064), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.221440807,0.593896627), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.797481239,-0.243254974), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.48824361,0.225083455), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.0387817062,0.838459492), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(0.92897892,-0.133588716), radius, diff, pixel, uv, result, totalWeight);
  bilateral_iter_3977570374(vec2(-0.693672359,-0.706737161), radius, diff, pixel, uv, result, totalWeight);
  
  result = result / totalWeight;    
  return vec4(result, pixel.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

vec3 rgb2hsv(vec3 c)
{
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec4 light_correction_1117569599(vec4 c, float s)
{
  vec3 hsv = rgb2hsv(c.rgb);
  hsv.y = pow(hsv.y, pow(s, -0.5));
  hsv.z = pow(hsv.z, s);
  vec3 rgb = hsv2rgb(hsv);
  return vec4(rgb, c.a);
}

// https://github.com/glslify/glslify#exporting-a-glsl-module

void main() {
  vec4 c;

  if (u_filters.x == 1.)
    c = fsr_easu_2717090884(v_tex_uv);
  else if (u_filters.x == 2.)
    c = bilateral(v_tex_uv);
  else
    c = texture2D(u_texture, v_tex_uv);

  if (u_filters.y != 1.)
    c = light_correction_1117569599(c, u_filters.y);

  gl_FragColor = c;
}`, np = (r, o, n) => {
  const l = r.createProgram();
  return r.attachShader(l, o), r.attachShader(l, n), r.linkProgram(l), r.useProgram(l), l;
}, Ta = (r, o, n) => {
  const l = r.createShader(o);
  return r.shaderSource(l, n), r.compileShader(l), l;
}, ip = (r) => {
  const o = r.createTexture();
  return r.bindTexture(r.TEXTURE_2D, o), r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, null), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.bindTexture(r.TEXTURE_2D, null), o;
}, Ca = (r, o) => {
  let n = 0, l = 1;
  const b = document.createElement("canvas"), v = b.captureStream(30), w = b.getContext("webgl"), y = Ta(w, w.VERTEX_SHADER, tp), D = Ta(w, w.FRAGMENT_SHADER, rp), k = np(w, y, D), N = ip(w);
  w.bindTexture(w.TEXTURE_2D, N);
  const ee = w.getAttribLocation(k, "a_position"), le = w.createBuffer();
  w.bindBuffer(w.ARRAY_BUFFER, le), w.bufferData(
    w.ARRAY_BUFFER,
    // prettier-ignore
    new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      -1,
      1,
      1
    ]),
    w.STATIC_DRAW
  ), w.enableVertexAttribArray(ee), w.vertexAttribPointer(ee, 2, w.FLOAT, false, 0, 0);
  const Z = w.getUniformLocation(k, "u_viewsize"), z = w.getUniformLocation(k, "u_filters");
  w.uniform2fv(z, new Float32Array([n, l])), jn(r).then((_e) => {
    var _a2;
    const de = ((_a2 = _e.requestVideoFrameCallback) == null ? void 0 : _a2.bind(_e)) || uo.requestAnimationFrame;
    (function re() {
      _e.ended || !v.active || (de(re), w.texImage2D(w.TEXTURE_2D, 0, w.RGBA, w.RGBA, w.UNSIGNED_BYTE, _e), (b.width !== _e.videoWidth || b.height !== _e.videoHeight) && (w.viewport(0, 0, b.width = _e.videoWidth, b.height = _e.videoHeight), w.uniform2fv(Z, new Float32Array([b.width, b.height]))), w.drawArrays(w.TRIANGLES, 0, 6));
    })();
  }), w.deleteProgram(k), w.deleteShader(D), w.deleteShader(y);
  const pe = {
    /** Enhanced stream */
    stream: v,
    /**
     * @param {number} value - denoise algorithm to use
     *  - Pass 1 to use FSR algorithm
     *  - Pass 2 to use Bilateral algorithm
     *  - Pass any other number to disabled denoising
     */
    denoise(_e) {
      w.uniform2fv(z, new Float32Array([n = _e, l]));
    },
    /**
     * @param {number} value - exposure compensation coefficient in [0, 2] range
     *  - Pass value less than to 1 increase exposure
     *  - Pass value greater than 1 to reduce exposure
     * See the {@link https://fujifilm-dsc.com/en/manual/x-pro2/images/exp_exposure_480.gif | image} for visual example
     * Inspired by MediaTrackConstraints {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#exposurecompensation | Exposure compensation} parameter.
     */
    exposureCompensation(_e) {
      w.uniform2fv(z, new Float32Array([n, l = _e]));
    }
  };
  if (o)
    for (const [_e, de] of Object.entries(o))
      pe[_e](de);
  return pe;
}, op = typeof screen < "u" && screen.height > screen.width, Ki = {
  facingMode: "user",
  width: { min: 640, ideal: 1280, max: 1920 },
  height: { min: 480, ideal: 720, max: 1080 },
  resizeMode: { ideal: "crop-and-scale" }
};
op && (delete Ki.width, delete Ki.height);
class Py {
  /**
   * @param videoConstraints - constraints to be merged with {@link defaultVideoConstraints}
   * and to be passed to {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia | navigator.mediaDevices.getUserMedia()}
   */
  constructor(o) {
    fe(this, "_stream", null);
    fe(this, "_constraints");
    fe(this, "_preferences", {});
    fe(this, "_enhancer", null);
    fe(this, "kind", "stream");
    this._constraints = {
      ...Ki,
      ...o
    };
  }
  /**
   * Specifies if the webcam is currently active.
   *
   * The webcam is considered active if it has been started and has not been stopped afterwards
   */
  get active() {
    return !!this._stream;
  }
  /**
   * @param {number} algorithm - denoise algorithm to use
   *  - Pass false or 0 to disabled denoising
   *  - Pass true or 1 to use FSR algorithm
   *  - Pass 2 to use Bilateral algorithm
   * @internal
   */
  denoise(o) {
    var _a2;
    this._preferences.denoise = Number(o), (_a2 = this._enhancer) == null ? void 0 : _a2.denoise(this._preferences.denoise);
  }
  /**
   * @param {number} coefficient - exposure compensation coefficient in [0, 2] range
   *  - Pass value less than 1 to increase exposure
   *  - Pass value greater than 1 to reduce exposure
   * See the {@link https://fujifilm-dsc.com/en/manual/x-pro2/images/exp_exposure_480.gif | image} for visual example
   * @internal
   */
  setExposureCompensation(o) {
    var _a2;
    this._preferences.exposureCompensation = o, (_a2 = this._enhancer) == null ? void 0 : _a2.exposureCompensation(this._preferences.exposureCompensation);
  }
  /**
   * Manually starts webcam
   *
   * > Ordinary webcam is lazily started during async iteration over it.
   * >
   * > But sometimes you may want to manually pre-start webcam e.g during parallel creation of a {@link Player} instance:
   * > ```ts
   * > const [webcam, player] = await Promise.all([
   * >  new Webcam().start(),
   * >  Player.create({ clientToken: "xxx-xxx-xxx" }),
   * > ])
   * >
   * > player.use(webcam)
   * > ```
   */
  async start() {
    return await (this._stream ?? (this._stream = Ra(this._constraints))), this;
  }
  /**
   * Yields a sequence of {@link Frame | frames}
   * @internal
   */
  async *[Symbol.asyncIterator](o) {
    const n = await (this._stream ?? (this._stream = Ra(this._constraints))), l = this._enhancer = Ti(this._preferences) ? Ca(n, this._preferences) : null;
    let v = new Si(l ? l.stream : n)[Symbol.asyncIterator]({ horizontalFlip: true, ...o }), w;
    for (; ; ) {
      if (!this._enhancer && Ti(this._preferences)) {
        const k = this._enhancer = Ca(n, this._preferences);
        v = new Si(k.stream)[Symbol.asyncIterator]({ horizontalFlip: true, ...o });
      }
      this._enhancer && !Ti(this._preferences) && (this._enhancer.stream.getTracks().forEach((N) => N.stop()), this._enhancer = null, v = new Si(n)[Symbol.asyncIterator]({ horizontalFlip: true, ...o }));
      const { done: y, value: D } = await v.next(w);
      if (y)
        break;
      w = yield D;
    }
    this.stop();
  }
  /** Turns off webcam */
  stop() {
    this._stream && this._stream.then((o) => o.getTracks().forEach((n) => n.stop())), this._enhancer && this._enhancer.stream.getTracks().forEach((o) => o.stop()), this._stream = null, this._enhancer = null;
  }
}
const Ra = async (r) => {
  if (typeof navigator.mediaDevices > "u")
    throw new Error(
      `SecureContext is required to access webcam
It‘s likely you need to set up HTTPS/TLS for your website
See https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Encryption_based_security for details `
    );
  return await navigator.mediaDevices.getUserMedia({ video: r });
}, Ti = (r) => typeof r.exposureCompensation == "number" && r.exposureCompensation !== 1 || r.denoise === 1 || r.denoise === 2, Dy = { createVideoElement: jn };
let ap = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ls = (r = 21) => {
  let o = "", n = r;
  for (; n--; )
    o += ap[Math.random() * 64 | 0];
  return o;
};
const Ms = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBjPVVpbnQ4QXJyYXkseD1VaW50MTZBcnJheSxEPVVpbnQzMkFycmF5LEg9bmV3IGMoWzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMCwwLDAsMF0pLEk9bmV3IGMoWzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTMsMCwwXSksbDE9bmV3IGMoWzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdKSxKPWZ1bmN0aW9uKHIsdCl7Zm9yKHZhciBhPW5ldyB4KDMxKSxuPTA7bjwzMTsrK24pYVtuXT10Kz0xPDxyW24tMV07Zm9yKHZhciB2PW5ldyBEKGFbMzBdKSxuPTE7bjwzMDsrK24pZm9yKHZhciBpPWFbbl07aTxhW24rMV07KytpKXZbaV09aS1hW25dPDw1fG47cmV0dXJuW2Esdl19LEs9SihILDIpLFE9S1swXSxzMT1LWzFdO1FbMjhdPTI1OCxzMVsyNThdPTI4O2Zvcih2YXIgYzE9SihJLDApLGQxPWMxWzBdLFU9bmV3IHgoMzI3NjgpLHU9MDt1PDMyNzY4OysrdSl7dmFyIFM9KHUmNDM2OTApPj4+MXwodSYyMTg0NSk8PDE7Uz0oUyY1MjQyOCk+Pj4yfChTJjEzMTA3KTw8MixTPShTJjYxNjgwKT4+PjR8KFMmMzg1NSk8PDQsVVt1XT0oKFMmNjUyODApPj4+OHwoUyYyNTUpPDw4KT4+PjF9Zm9yKHZhciBrPWZ1bmN0aW9uKHQsYSxuKXtmb3IodmFyIHY9dC5sZW5ndGgsaT0wLHM9bmV3IHgoYSk7aTx2OysraSl0W2ldJiYrK3NbdFtpXS0xXTt2YXIgZj1uZXcgeChhKTtmb3IoaT0wO2k8YTsrK2kpZltpXT1mW2ktMV0rc1tpLTFdPDwxO3ZhciBvO2lmKG4pe289bmV3IHgoMTw8YSk7dmFyIGU9MTUtYTtmb3IoaT0wO2k8djsrK2kpaWYodFtpXSlmb3IodmFyIGw9aTw8NHx0W2ldLGI9YS10W2ldLGQ9Zlt0W2ldLTFdKys8PGIseT1kfCgxPDxiKS0xO2Q8PXk7KytkKW9bVVtkXT4+PmVdPWx9ZWxzZSBmb3Iobz1uZXcgeCh2KSxpPTA7aTx2OysraSl0W2ldJiYob1tpXT1VW2ZbdFtpXS0xXSsrXT4+PjE1LXRbaV0pO3JldHVybiBvfSxCPW5ldyBjKDI4OCksdT0wO3U8MTQ0OysrdSlCW3VdPTg7Zm9yKHZhciB1PTE0NDt1PDI1NjsrK3UpQlt1XT05O2Zvcih2YXIgdT0yNTY7dTwyODA7Kyt1KUJbdV09Nztmb3IodmFyIHU9MjgwO3U8Mjg4OysrdSlCW3VdPTg7Zm9yKHZhciBWPW5ldyBjKDMyKSx1PTA7dTwzMjsrK3UpVlt1XT01O3ZhciBoMT1rKEIsOSwxKSxnMT1rKFYsNSwxKSxXPWZ1bmN0aW9uKHIpe2Zvcih2YXIgdD1yWzBdLGE9MTthPHIubGVuZ3RoOysrYSlyW2FdPnQmJih0PXJbYV0pO3JldHVybiB0fSx3PWZ1bmN0aW9uKHIsdCxhKXt2YXIgbj10Lzh8MDtyZXR1cm4ocltuXXxyW24rMV08PDgpPj4odCY3KSZhfSxYPWZ1bmN0aW9uKHIsdCl7dmFyIGE9dC84fDA7cmV0dXJuKHJbYV18clthKzFdPDw4fHJbYSsyXTw8MTYpPj4odCY3KX0sdzE9ZnVuY3Rpb24ocil7cmV0dXJuKHIrNykvOHwwfSxqPWZ1bmN0aW9uKHIsdCxhKXsodD09bnVsbHx8dDwwKSYmKHQ9MCksKGE9PW51bGx8fGE+ci5sZW5ndGgpJiYoYT1yLmxlbmd0aCk7dmFyIG49bmV3KHIuQllURVNfUEVSX0VMRU1FTlQ9PTI/eDpyLkJZVEVTX1BFUl9FTEVNRU5UPT00P0Q6YykoYS10KTtyZXR1cm4gbi5zZXQoci5zdWJhcnJheSh0LGEpKSxufSxtMT1bInVuZXhwZWN0ZWQgRU9GIiwiaW52YWxpZCBibG9jayB0eXBlIiwiaW52YWxpZCBsZW5ndGgvbGl0ZXJhbCIsImludmFsaWQgZGlzdGFuY2UiLCJzdHJlYW0gZmluaXNoZWQiLCJubyBzdHJlYW0gaGFuZGxlciIsLCJubyBjYWxsYmFjayIsImludmFsaWQgVVRGLTggZGF0YSIsImV4dHJhIGZpZWxkIHRvbyBsb25nIiwiZGF0ZSBub3QgaW4gcmFuZ2UgMTk4MC0yMDk5IiwiZmlsZW5hbWUgdG9vIGxvbmciLCJzdHJlYW0gZmluaXNoaW5nIiwiaW52YWxpZCB6aXAgZGF0YSJdLGg9ZnVuY3Rpb24ocix0LGEpe3ZhciBuPW5ldyBFcnJvcih0fHxtMVtyXSk7aWYobi5jb2RlPXIsRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG4saCksIWEpdGhyb3cgbjtyZXR1cm4gbn0sYjE9ZnVuY3Rpb24ocix0LGEpe3ZhciBuPXIubGVuZ3RoO2lmKCFufHxhJiZhLmYmJiFhLmwpcmV0dXJuIHR8fG5ldyBjKDApO3ZhciB2PSF0fHxhLGk9IWF8fGEuaTthfHwoYT17fSksdHx8KHQ9bmV3IGMobiozKSk7dmFyIHM9ZnVuY3Rpb24odTEpe3ZhciB2MT10Lmxlbmd0aDtpZih1MT52MSl7dmFyIGYxPW5ldyBjKE1hdGgubWF4KHYxKjIsdTEpKTtmMS5zZXQodCksdD1mMX19LGY9YS5mfHwwLG89YS5wfHwwLGU9YS5ifHwwLGw9YS5sLGI9YS5kLGQ9YS5tLHk9YS5uLFI9bio4O2Rve2lmKCFsKXtmPXcocixvLDEpO3ZhciBZPXcocixvKzEsMyk7aWYobys9MyxZKWlmKFk9PTEpbD1oMSxiPWcxLGQ9OSx5PTU7ZWxzZSBpZihZPT0yKXt2YXIgQz13KHIsbywzMSkrMjU3LHIxPXcocixvKzEwLDE1KSs0LHQxPUMrdyhyLG8rNSwzMSkrMTtvKz0xNDtmb3IodmFyIEY9bmV3IGModDEpLEc9bmV3IGMoMTkpLGc9MDtnPHIxOysrZylHW2wxW2ddXT13KHIsbytnKjMsNyk7bys9cjEqMztmb3IodmFyIGExPVcoRyksQjE9KDE8PGExKS0xLFIxPWsoRyxhMSwxKSxnPTA7Zzx0MTspe3ZhciBuMT1SMVt3KHIsbyxCMSldO28rPW4xJjE1O3ZhciBwPW4xPj4+NDtpZihwPDE2KUZbZysrXT1wO2Vsc2V7dmFyIHo9MCxOPTA7Zm9yKHA9PTE2PyhOPTMrdyhyLG8sMyksbys9Mix6PUZbZy0xXSk6cD09MTc/KE49Myt3KHIsbyw3KSxvKz0zKTpwPT0xOCYmKE49MTErdyhyLG8sMTI3KSxvKz03KTtOLS07KUZbZysrXT16fX12YXIgaTE9Ri5zdWJhcnJheSgwLEMpLF89Ri5zdWJhcnJheShDKTtkPVcoaTEpLHk9VyhfKSxsPWsoaTEsZCwxKSxiPWsoXyx5LDEpfWVsc2UgaCgxKTtlbHNle3ZhciBwPXcxKG8pKzQsTD1yW3AtNF18cltwLTNdPDw4LFo9cCtMO2lmKFo+bil7aSYmaCgwKTticmVha312JiZzKGUrTCksdC5zZXQoci5zdWJhcnJheShwLFopLGUpLGEuYj1lKz1MLGEucD1vPVoqOCxhLmY9Zjtjb250aW51ZX1pZihvPlIpe2kmJmgoMCk7YnJlYWt9fXYmJnMoZSsxMzEwNzIpO2Zvcih2YXIgWTE9KDE8PGQpLTEsRjE9KDE8PHkpLTEsJD1vOzskPW8pe3ZhciB6PWxbWChyLG8pJlkxXSxUPXo+Pj40O2lmKG8rPXomMTUsbz5SKXtpJiZoKDApO2JyZWFrfWlmKHp8fGgoMiksVDwyNTYpdFtlKytdPVQ7ZWxzZSBpZihUPT0yNTYpeyQ9byxsPW51bGw7YnJlYWt9ZWxzZXt2YXIgbzE9VC0yNTQ7aWYoVD4yNjQpe3ZhciBnPVQtMjU3LE09SFtnXTtvMT13KHIsbywoMTw8TSktMSkrUVtnXSxvKz1NfXZhciBQPWJbWChyLG8pJkYxXSxPPVA+Pj40O1B8fGgoMyksbys9UCYxNTt2YXIgXz1kMVtPXTtpZihPPjMpe3ZhciBNPUlbT107Xys9WChyLG8pJigxPDxNKS0xLG8rPU19aWYobz5SKXtpJiZoKDApO2JyZWFrfXYmJnMoZSsxMzEwNzIpO2Zvcih2YXIgZTE9ZStvMTtlPGUxO2UrPTQpdFtlXT10W2UtX10sdFtlKzFdPXRbZSsxLV9dLHRbZSsyXT10W2UrMi1fXSx0W2UrM109dFtlKzMtX107ZT1lMX19YS5sPWwsYS5wPSQsYS5iPWUsYS5mPWYsbCYmKGY9MSxhLm09ZCxhLmQ9YixhLm49eSl9d2hpbGUoIWYpO3JldHVybiBlPT10Lmxlbmd0aD90OmoodCwwLGUpfSx5MT1uZXcgYygwKSxFPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIHJbdF18clt0KzFdPDw4fSxtPWZ1bmN0aW9uKHIsdCl7cmV0dXJuKHJbdF18clt0KzFdPDw4fHJbdCsyXTw8MTZ8clt0KzNdPDwyNCk+Pj4wfSxxPWZ1bmN0aW9uKHIsdCl7cmV0dXJuIG0ocix0KSttKHIsdCs0KSo0Mjk0OTY3Mjk2fTtmdW5jdGlvbiBFMShyLHQpe3JldHVybiBiMShyLHQpfXZhciBBPXR5cGVvZiBUZXh0RGVjb2RlcjwidSImJm5ldyBUZXh0RGVjb2RlcixwMT0wO3RyeXtBLmRlY29kZSh5MSx7c3RyZWFtOiEwfSkscDE9MX1jYXRjaHt9dmFyIFMxPWZ1bmN0aW9uKHIpe2Zvcih2YXIgdD0iIixhPTA7Oyl7dmFyIG49clthKytdLHY9KG4+MTI3KSsobj4yMjMpKyhuPjIzOSk7aWYoYSt2PnIubGVuZ3RoKXJldHVyblt0LGoocixhLTEpXTt2P3Y9PTM/KG49KChuJjE1KTw8MTh8KHJbYSsrXSY2Myk8PDEyfChyW2ErK10mNjMpPDw2fHJbYSsrXSY2MyktNjU1MzYsdCs9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxuPj4xMCw1NjMyMHxuJjEwMjMpKTp2JjE/dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgobiYzMSk8PDZ8clthKytdJjYzKTp0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChuJjE1KTw8MTJ8KHJbYSsrXSY2Myk8PDZ8clthKytdJjYzKTp0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKG4pfX07ZnVuY3Rpb24gQzEocix0KXtpZih0KXtmb3IodmFyIGE9IiIsbj0wO248ci5sZW5ndGg7bis9MTYzODQpYSs9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHIuc3ViYXJyYXkobixuKzE2Mzg0KSk7cmV0dXJuIGF9ZWxzZXtpZihBKXJldHVybiBBLmRlY29kZShyKTt2YXIgdj1TMShyKSxpPXZbMF0scz12WzFdO3JldHVybiBzLmxlbmd0aCYmaCg4KSxpfX12YXIgXzE9ZnVuY3Rpb24ocix0KXtyZXR1cm4gdCszMCtFKHIsdCsyNikrRShyLHQrMjgpfSx4MT1mdW5jdGlvbihyLHQsYSl7dmFyIG49RShyLHQrMjgpLHY9QzEoci5zdWJhcnJheSh0KzQ2LHQrNDYrbiksIShFKHIsdCs4KSYyMDQ4KSksaT10KzQ2K24scz1tKHIsdCsyMCksZj1hJiZzPT00Mjk0OTY3Mjk1P3oxKHIsaSk6W3MsbShyLHQrMjQpLG0ocix0KzQyKV0sbz1mWzBdLGU9ZlsxXSxsPWZbMl07cmV0dXJuW0Uocix0KzEwKSxvLGUsdixpK0Uocix0KzMwKStFKHIsdCszMiksbF19LHoxPWZ1bmN0aW9uKHIsdCl7Zm9yKDtFKHIsdCkhPTE7dCs9NCtFKHIsdCsyKSk7cmV0dXJuW3Eocix0KzEyKSxxKHIsdCs0KSxxKHIsdCsyMCldfTtmdW5jdGlvbiBUMShyLHQpe2Zvcih2YXIgYT17fSxuPXIubGVuZ3RoLTIyO20ocixuKSE9MTAxMDEwMjU2Oy0tbikoIW58fHIubGVuZ3RoLW4+NjU1NTgpJiZoKDEzKTt2YXIgdj1FKHIsbis4KTtpZighdilyZXR1cm57fTt2YXIgaT1tKHIsbisxNikscz1pPT00Mjk0OTY3Mjk1O3MmJihuPW0ocixuLTEyKSxtKHIsbikhPTEwMTA3NTc5MiYmaCgxMyksdj1tKHIsbiszMiksaT1tKHIsbis0OCkpO2Zvcih2YXIgZj10JiZ0LmZpbHRlcixvPTA7bzx2Oysrbyl7dmFyIGU9eDEocixpLHMpLGw9ZVswXSxiPWVbMV0sZD1lWzJdLHk9ZVszXSxSPWVbNF0sWT1lWzVdLEM9XzEocixZKTtpPVIsKCFmfHxmKHtuYW1lOnksc2l6ZTpiLG9yaWdpbmFsU2l6ZTpkLGNvbXByZXNzaW9uOmx9KSkmJihsP2w9PTg/YVt5XT1FMShyLnN1YmFycmF5KEMsQytiKSxuZXcgYyhkKSk6aCgxNCwidW5rbm93biBjb21wcmVzc2lvbiB0eXBlICIrbCk6YVt5XT1qKHIsQyxDK2IpKX1yZXR1cm4gYX1jb25zdCBrMT1yPT5UMShyLHtmaWx0ZXI6KHtuYW1lOnQsc2l6ZTphfSk9PiEoYT09PTB8fHQuc3RhcnRzV2l0aCgiX19NQUNPU1gvIikpfSk7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKHtkYXRhOnJ9KT0+e2xldCB0O3RyeXt0PXtpZDpyLmlkLGRhdGE6azEoci5kYXRhKX19Y2F0Y2goYSl7dD17aWQ6ci5pZCxlcnJvcjphLm1lc3NhZ2V9fXBvc3RNZXNzYWdlKHQpfSl9KSgpOwo=", Fa = typeof window < "u" && window.Blob && new Blob([atob(Ms)], { type: "text/javascript;charset=utf-8" });
function sp() {
  let r;
  try {
    if (r = Fa && (window.URL || window.webkitURL).createObjectURL(Fa), !r)
      throw "";
    return new Worker(r);
  } catch {
    return new Worker("data:application/javascript;base64," + Ms);
  } finally {
    r && (window.URL || window.webkitURL).revokeObjectURL(r);
  }
}
let jr;
const up = async (r) => new Promise((o, n) => {
  const l = Ls(), b = new Uint8Array(r), v = { id: l, data: b };
  jr || (jr = new sp());
  const w = ({ data: y }) => {
    y.id === v.id && (jr.removeEventListener("message", w), "error" in y && n(new Error(y.error)), "data" in y && o(y.data));
  };
  jr.addEventListener("message", w), jr.postMessage(v, [r]);
}), Ci = "/";
class Bs {
  constructor(o) {
    fe(this, "_source", null);
    fe(this, "_fs", null);
    fe(this, "_mountpoint", Ci);
    fe(this, "_data", {});
    this._source = o;
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const b = n == null ? void 0 : n.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const y = b ? { onProgress: (...D) => b(w, ...D) } : {};
          return this.preload(v, y);
        })
      );
    }
    const l = new this(o);
    return await l.load(n), l;
  }
  /** Template method for data fetching */
  async _fetch(o, n) {
    return await Nh(o, {}, n).then((l) => {
      if (l.ok)
        return l.blob();
      throw new Error(
        `Failed to fetch ${o.url} ${l.status} (${l.statusText})`
      );
    }).then((l) => {
      if (l.size > 0)
        return l;
      throw new Error(`The source must not be empty. Received ${l.size} bytes size source.`);
    });
  }
  /** Template method for data decompression */
  async _unzip(o) {
    if (!o.type.includes("zip"))
      throw new TypeError(
        `The source type must be "application/zip"-like. Received: "${o.type}".`
      );
    return await o.arrayBuffer().then(up).then((n) => Object.entries(n)).then((n) => Object.fromEntries(n));
  }
  /** Loads the resource data */
  async load(o) {
    let n = this._source;
    return typeof n == "string" && (n = new Request(n)), n instanceof Request && (n = await this._fetch(n, o)), n instanceof Blob && (n = await this._unzip(n)), n instanceof Object && n.constructor === Object && await Promise.all(
      Object.entries(n).map(([l, b]) => this.writeFile(l, b))
    ), this._source = null, this._data;
  }
  _fsWriteFile(o, n) {
    this._fs && (o = `${this._mountpoint}${o.startsWith("/") ? o.substring(1) : o}`, this._fs.writeFile(o, n));
  }
  async writeFile(o, n) {
    const l = new Uint8Array(n instanceof Blob ? await n.arrayBuffer() : n);
    this._data[o] = l, this._fsWriteFile(o, this._data[o]);
  }
  /** Mounts the resource to the supplied file system */
  mount(o, n = Ci) {
    this._fs = o, this._mountpoint = n.endsWith("/") ? n : `${n}/`, Object.entries(this._data).forEach(([l, b]) => this._fsWriteFile(l, b));
  }
  /** Unmounts the resource from the previously supplied file system */
  unmount() {
    this._fs = null, this._mountpoint = Ci;
  }
}
var lp = Object.defineProperty, fp = Object.getOwnPropertyDescriptor, cp = (r, o, n, l) => {
  for (var b = l > 1 ? void 0 : l ? fp(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (b = (l ? w(o, n, b) : w(b)) || b);
  return l && b && lp(o, n, b), b;
};
class dp {
  constructor(o) {
    fe(this, "name", `effects/${Ls()}`);
    fe(this, "_player", null);
    fe(this, "_resource");
    this._resource = new hp(o);
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const b = n == null ? void 0 : n.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const y = b ? { onProgress: (...D) => b(w, ...D) } : {};
          return this.preload(v, y);
        })
      );
    }
    const l = new this(o);
    return await l._load(n), l;
  }
  /** Loads the effect data */
  async _load(o) {
    await this._resource.load(o);
  }
  /** Loads the effect data, mounts it to the player‘s file system */
  async _bind(o) {
    await this._resource.load(), this._player = o, this._resource.mount(this._player.FS, this.name);
  }
  /** Unmounts the effect data from the previously specified player‘s file system */
  _unbind() {
    this._resource.unmount(), this._player = null;
  }
  async writeFile(o, n) {
    return this._resource.writeFile(o, n);
  }
  callJsMethod(o, n = "") {
    if (!this._player) {
      console.warn("The method won't evaluate: the effect is not applied to a player.");
      return;
    }
    return this._player.callJsMethod(o, n);
  }
  /**
   * Evaluates JavaScript in context of the effect.
   *
   * The script won't evaluate if the effect is not applied to a player
   * @example
   * ```ts
   * const makeup = new Effect("/path/to/Makeup.zip")
   *
   * await player.applyEffect(makeup)
   *
   * // ...
   *
   * const electricBlueColor = "0.09 0.25 0.38"
   *
   * await makeup.evalJs(`Eyes.color("${electricBlueColor}")`)
   * ```
   */
  async evalJs(o) {
    if (!this._player) {
      console.warn("The script won't evaluate: the effect is not applied to a player.");
      return;
    }
    return await this._player.evalJs(o);
  }
}
cp([
  Rs("Please, use Effect.evalJs() instead.")
], dp.prototype, "callJsMethod", 1);
class hp extends Bs {
  async _unzip(o) {
    let n = await super._unzip(o);
    const b = Object.keys(n).map((y) => y.split("/").find(Boolean)), v = b[0];
    return b.every((y) => y === v) && (n = Object.fromEntries(
      Object.entries(n).map(([y, D]) => [
        y.replace(`${v}/`, ""),
        D
      ])
    )), n;
  }
}
let ky = class {
  constructor(o) {
    fe(this, "_resource");
    this._resource = new Bs(o);
  }
  static async preload(o, n) {
    if (Array.isArray(o)) {
      const b = n == null ? void 0 : n.onProgress;
      return await Promise.all(
        o.map((v, w) => {
          const y = b ? { onProgress: (...D) => b(w, ...D) } : {};
          return this.preload(v, y);
        })
      );
    }
    const l = new this(o);
    return await l._load(n), l;
  }
  /** Loads the module data */
  async _load(o) {
    await this._resource.load(o);
  }
  /** Loads the module data, mounts it to the player's file system */
  async _bind(o) {
    await this._resource.load(), this._resource.mount(o.FS);
  }
};
var pp = (() => {
  var r = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return function(n) {
    n = n || {};
    var n = typeof n < "u" ? n : {}, l, b;
    n.ready = new Promise(function(e, t) {
      l = e, b = t;
    }), n.expectedDataFileDownloads || (n.expectedDataFileDownloads = 0), n.expectedDataFileDownloads++, function() {
      if (!n.ENVIRONMENT_IS_PTHREAD) {
        var e = function(t) {
          typeof window == "object" ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
          var i = "BanubaSDK.data", a = "BanubaSDK.data";
          typeof n.locateFilePackage == "function" && !n.locateFile && (n.locateFile = n.locateFilePackage, pe("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
          var s = n.locateFile ? n.locateFile(a, "") : a, c = t.remote_package_size;
          function m(I, U, j, V) {
            var J = new XMLHttpRequest();
            J.open("GET", I, true), J.responseType = "arraybuffer", J.onprogress = function(ce) {
              var he = I, we = U;
              if (ce.total && (we = ce.total), ce.loaded) {
                J.addedTotal ? n.dataFileDownloads[he].loaded = ce.loaded : (J.addedTotal = true, n.dataFileDownloads || (n.dataFileDownloads = {}), n.dataFileDownloads[he] = { loaded: ce.loaded, total: we });
                var G = 0, ie = 0, ve = 0;
                for (var Ee in n.dataFileDownloads) {
                  var Me = n.dataFileDownloads[Ee];
                  G += Me.total, ie += Me.loaded, ve++;
                }
                G = Math.ceil(G * n.expectedDataFileDownloads / ve), n.setStatus && n.setStatus("Downloading data... (" + ie + "/" + G + ")");
              } else
                n.dataFileDownloads || n.setStatus && n.setStatus("Downloading data...");
            }, J.onerror = function(ce) {
              throw new Error("NetworkError for: " + I);
            }, J.onload = function(ce) {
              if (J.status == 200 || J.status == 304 || J.status == 206 || J.status == 0 && J.response) {
                var he = J.response;
                j(he);
              } else
                throw new Error(J.statusText + " : " + J.responseURL);
            }, J.send(null);
          }
          var g = null, E = n.getPreloadedPackage ? n.getPreloadedPackage(s, c) : null;
          E || m(s, c, function(I) {
            g ? (g(I), g = null) : E = I;
          });
          function A() {
            function I(ce, he) {
              if (!ce)
                throw he + new Error().stack;
            }
            n.FS_createPath("/", "bnb_js", true, true), n.FS_createPath("/", "bnb_shaders", true, true), n.FS_createPath("/bnb_shaders", "bnb", true, true), n.FS_createPath("/bnb_shaders/bnb", "lib", true, true), n.FS_createPath("/", "frx", true, true);
            function U(ce, he, we) {
              this.start = ce, this.end = he, this.audio = we;
            }
            U.prototype = { requests: {}, open: function(ce, he) {
              this.name = he, this.requests[he] = this, n.addRunDependency("fp " + this.name);
            }, send: function() {
            }, onload: function() {
              var ce = this.byteArray.subarray(this.start, this.end);
              this.finish(ce);
            }, finish: function(ce) {
              var he = this;
              n.FS_createDataFile(this.name, null, ce, true, true, true), n.removeRunDependency("fp " + he.name), this.requests[this.name] = null;
            } };
            for (var j = t.files, V = 0; V < j.length; ++V)
              new U(j[V].start, j[V].end, j[V].audio || 0).open("GET", j[V].filename);
            function J(ce) {
              I(ce, "Loading data file failed."), I(ce.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
              var he = new Uint8Array(ce);
              U.prototype.byteArray = he;
              for (var we = t.files, G = 0; G < we.length; ++G)
                U.prototype.requests[we[G].filename].onload();
              n.removeRunDependency("datafile_BanubaSDK.data");
            }
            n.addRunDependency("datafile_BanubaSDK.data"), n.preloadResults || (n.preloadResults = {}), n.preloadResults[i] = { fromCache: false }, E ? (J(E), E = null) : g = J;
          }
          n.calledRun ? A() : (n.preRun || (n.preRun = []), n.preRun.push(A));
        };
        e({ files: [{ filename: "/bnb_js/.empty", start: 0, end: 20 }, { filename: "/bnb_js/background.js", start: 20, end: 3352 }, { filename: "/bnb_js/console.js", start: 3352, end: 3912 }, { filename: "/bnb_js/global.js", start: 3912, end: 4293 }, { filename: "/bnb_js/legacy.js", start: 4293, end: 8570 }, { filename: "/bnb_js/light_streaks.js", start: 8570, end: 18277 }, { filename: "/bnb_js/timers.js", start: 18277, end: 21596 }, { filename: "/bnb_shaders/.empty", start: 21596, end: 21615 }, { filename: "/bnb_shaders/bnb/anim_transform.glsl", start: 21615, end: 21778 }, { filename: "/bnb_shaders/bnb/color_spaces.glsl", start: 21778, end: 27625 }, { filename: "/bnb_shaders/bnb/decode_int1010102.glsl", start: 27625, end: 28314 }, { filename: "/bnb_shaders/bnb/get_bone.glsl", start: 28314, end: 28736 }, { filename: "/bnb_shaders/bnb/get_transform.glsl", start: 28736, end: 29375 }, { filename: "/bnb_shaders/bnb/glsl.frag", start: 29375, end: 29937 }, { filename: "/bnb_shaders/bnb/glsl.vert", start: 29937, end: 30718 }, { filename: "/bnb_shaders/bnb/lib/apply_light_streaks.frag", start: 30718, end: 31030 }, { filename: "/bnb_shaders/bnb/lib/apply_light_streaks.vert", start: 31030, end: 31279 }, { filename: "/bnb_shaders/bnb/lib/auto_morph.frag", start: 31279, end: 31392 }, { filename: "/bnb_shaders/bnb/lib/auto_morph.vert", start: 31392, end: 32004 }, { filename: "/bnb_shaders/bnb/lib/auto_morph_fisheye.frag", start: 32004, end: 32117 }, { filename: "/bnb_shaders/bnb/lib/auto_morph_fisheye.vert", start: 32117, end: 32624 }, { filename: "/bnb_shaders/bnb/lib/beauty_morph.frag", start: 32624, end: 32738 }, { filename: "/bnb_shaders/bnb/lib/beauty_morph.vert", start: 32738, end: 33887 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_downscale.frag", start: 33887, end: 34761 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_downscale.vert", start: 34761, end: 34960 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale.frag", start: 34960, end: 35955 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale.vert", start: 35955, end: 36290 }, { filename: "/bnb_shaders/bnb/lib/bg_blur_upscale_apply.frag", start: 36290, end: 37495 }, { filename: "/bnb_shaders/bnb/lib/camera.frag", start: 37495, end: 38076 }, { filename: "/bnb_shaders/bnb/lib/camera.vert", start: 38076, end: 38395 }, { filename: "/bnb_shaders/bnb/lib/camera_bgmask.frag", start: 38395, end: 39154 }, { filename: "/bnb_shaders/bnb/lib/camera_bgmask.vert", start: 39154, end: 39543 }, { filename: "/bnb_shaders/bnb/lib/copy_pixels.frag", start: 39543, end: 39717 }, { filename: "/bnb_shaders/bnb/lib/copy_pixels.vert", start: 39717, end: 39966 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_0.frag", start: 39966, end: 40952 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_0.vert", start: 40952, end: 41537 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_1.frag", start: 41537, end: 42523 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_1.vert", start: 42523, end: 43108 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_2.frag", start: 43108, end: 44094 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_2.vert", start: 44094, end: 44679 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_3.frag", start: 44679, end: 45665 }, { filename: "/bnb_shaders/bnb/lib/filter_light_streaks_3.vert", start: 45665, end: 46250 }, { filename: "/bnb_shaders/bnb/lib/gltf.frag", start: 46250, end: 48684 }, { filename: "/bnb_shaders/bnb/lib/gltf.vert", start: 48684, end: 49933 }, { filename: "/bnb_shaders/bnb/lib/gltf_spec_gloss.frag", start: 49933, end: 52340 }, { filename: "/bnb_shaders/bnb/lib/gltf_spec_gloss.vert", start: 52340, end: 53589 }, { filename: "/bnb_shaders/bnb/lib/gltf_transmissive.frag", start: 53589, end: 56461 }, { filename: "/bnb_shaders/bnb/lib/gltf_transmissive.vert", start: 56461, end: 57837 }, { filename: "/bnb_shaders/bnb/lib/init_light_streaks.frag", start: 57837, end: 58167 }, { filename: "/bnb_shaders/bnb/lib/init_light_streaks.vert", start: 58167, end: 58416 }, { filename: "/bnb_shaders/bnb/lib/mesh_morph.frag", start: 58416, end: 58530 }, { filename: "/bnb_shaders/bnb/lib/mesh_morph.vert", start: 58530, end: 60413 }, { filename: "/bnb_shaders/bnb/lib/morph_apply.frag", start: 60413, end: 60756 }, { filename: "/bnb_shaders/bnb/lib/morph_apply.vert", start: 60756, end: 62938 }, { filename: "/bnb_shaders/bnb/lib/morph_blur.frag", start: 62938, end: 64261 }, { filename: "/bnb_shaders/bnb/lib/morph_blur.vert", start: 64261, end: 64587 }, { filename: "/bnb_shaders/bnb/lib/retouch.frag", start: 64587, end: 68279 }, { filename: "/bnb_shaders/bnb/lib/retouch.vert", start: 68279, end: 68837 }, { filename: "/bnb_shaders/bnb/lib/static_pos.frag", start: 68837, end: 68948 }, { filename: "/bnb_shaders/bnb/lib/static_pos.vert", start: 68948, end: 69214 }, { filename: "/bnb_shaders/bnb/lib/uv_morph.frag", start: 69214, end: 69327 }, { filename: "/bnb_shaders/bnb/lib/uv_morph.vert", start: 69327, end: 69834 }, { filename: "/bnb_shaders/bnb/lib/vbg.frag", start: 69834, end: 70663 }, { filename: "/bnb_shaders/bnb/lib/vbg.vert", start: 70663, end: 71703 }, { filename: "/bnb_shaders/bnb/lut.glsl", start: 71703, end: 76232 }, { filename: "/bnb_shaders/bnb/math.glsl", start: 76232, end: 76232 }, { filename: "/bnb_shaders/bnb/matrix_operations.glsl", start: 76232, end: 76716 }, { filename: "/bnb_shaders/bnb/morph_transform.glsl", start: 76716, end: 77774 }, { filename: "/bnb_shaders/bnb/quat_rotation.glsl", start: 77774, end: 79168 }, { filename: "/bnb_shaders/bnb/sample_camera.glsl", start: 79168, end: 80105 }, { filename: "/bnb_shaders/bnb/samplers_declaration.glsl", start: 80105, end: 82849 }, { filename: "/bnb_shaders/bnb/texture_bicubic.glsl", start: 82849, end: 84207 }, { filename: "/bnb_shaders/bnb/textures_lookup.glsl", start: 84207, end: 85407 }, { filename: "/bnb_shaders/bnb/transform_uv.glsl", start: 85407, end: 87844 }, { filename: "/bnb_shaders/bnb/version.glsl", start: 87844, end: 88066 }, { filename: "/frx/frx.js", start: 88066, end: 90588 }, { filename: "/resources-versions.txt", start: 90588, end: 93026 }, { filename: "/watermark.png", start: 93026, end: 95512 }, { filename: "/watermark_blurred.png", start: 95512, end: 117945 }], remote_package_size: 117945 });
      }
    }();
    var v = Object.assign({}, n), w = "./this.program", y = (e, t) => {
      throw t;
    }, D = true, k = false, N = "";
    function ee(e) {
      return n.locateFile ? n.locateFile(e, N) : N + e;
    }
    var le, Z;
    typeof document < "u" && document.currentScript && (N = document.currentScript.src), r && (N = r), N.indexOf("blob:") !== 0 ? N = N.substr(0, N.replace(/[?#].*/, "").lastIndexOf("/") + 1) : N = "", le = (e) => {
      var t = new XMLHttpRequest();
      return t.open("GET", e, false), t.send(null), t.responseText;
    }, Z = (e, t, i) => {
      var a = new XMLHttpRequest();
      a.open("GET", e, true), a.responseType = "arraybuffer", a.onload = () => {
        if (a.status == 200 || a.status == 0 && a.response) {
          t(a.response);
          return;
        }
        i();
      }, a.onerror = i, a.send(null);
    };
    var z = n.print || console.log.bind(console), pe = n.printErr || console.warn.bind(console);
    Object.assign(n, v), v = null, n.thisProgram && (w = n.thisProgram), n.quit && (y = n.quit);
    var _e = 4, de;
    n.wasmBinary && (de = n.wasmBinary);
    var re = n.noExitRuntime || true;
    typeof WebAssembly != "object" && R("no native wasm support detected");
    var Fe, Ne = false, ye;
    function Ue(e, t) {
      e || R(t);
    }
    var We = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function Ge(e, t, i) {
      for (var a = t + i, s = t; e[s] && !(s >= a); )
        ++s;
      if (s - t > 16 && e.buffer && We)
        return We.decode(e.subarray(t, s));
      for (var c = ""; t < s; ) {
        var m = e[t++];
        if (!(m & 128)) {
          c += String.fromCharCode(m);
          continue;
        }
        var g = e[t++] & 63;
        if ((m & 224) == 192) {
          c += String.fromCharCode((m & 31) << 6 | g);
          continue;
        }
        var E = e[t++] & 63;
        if ((m & 240) == 224 ? m = (m & 15) << 12 | g << 6 | E : m = (m & 7) << 18 | g << 12 | E << 6 | e[t++] & 63, m < 65536)
          c += String.fromCharCode(m);
        else {
          var A = m - 65536;
          c += String.fromCharCode(55296 | A >> 10, 56320 | A & 1023);
        }
      }
      return c;
    }
    function Se(e, t) {
      return e ? Ge(ue, e, t) : "";
    }
    function oe(e, t, i, a) {
      if (!(a > 0))
        return 0;
      for (var s = i, c = i + a - 1, m = 0; m < e.length; ++m) {
        var g = e.charCodeAt(m);
        if (g >= 55296 && g <= 57343) {
          var E = e.charCodeAt(++m);
          g = 65536 + ((g & 1023) << 10) | E & 1023;
        }
        if (g <= 127) {
          if (i >= c)
            break;
          t[i++] = g;
        } else if (g <= 2047) {
          if (i + 1 >= c)
            break;
          t[i++] = 192 | g >> 6, t[i++] = 128 | g & 63;
        } else if (g <= 65535) {
          if (i + 2 >= c)
            break;
          t[i++] = 224 | g >> 12, t[i++] = 128 | g >> 6 & 63, t[i++] = 128 | g & 63;
        } else {
          if (i + 3 >= c)
            break;
          t[i++] = 240 | g >> 18, t[i++] = 128 | g >> 12 & 63, t[i++] = 128 | g >> 6 & 63, t[i++] = 128 | g & 63;
        }
      }
      return t[i] = 0, i - s;
    }
    function ge(e, t, i) {
      return oe(e, ue, t, i);
    }
    function $e(e) {
      for (var t = 0, i = 0; i < e.length; ++i) {
        var a = e.charCodeAt(i);
        a <= 127 ? t++ : a <= 2047 ? t += 2 : a >= 55296 && a <= 57343 ? (t += 4, ++i) : t += 3;
      }
      return t;
    }
    var De, me, ue, Pe, Te, B, ne, te, be;
    function Ae(e) {
      De = e, n.HEAP8 = me = new Int8Array(e), n.HEAP16 = Pe = new Int16Array(e), n.HEAP32 = B = new Int32Array(e), n.HEAPU8 = ue = new Uint8Array(e), n.HEAPU16 = Te = new Uint16Array(e), n.HEAPU32 = ne = new Uint32Array(e), n.HEAPF32 = te = new Float32Array(e), n.HEAPF64 = be = new Float64Array(e);
    }
    var ct, dt = [], it = [], xt = [];
    function _t() {
      return re;
    }
    function Je() {
      if (n.preRun)
        for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length; )
          gt(n.preRun.shift());
      ze(dt);
    }
    function ot() {
      !n.noFSInit && !h.init.initialized && h.init(), h.ignorePermissions = false, ze(it);
    }
    function At() {
      if (n.postRun)
        for (typeof n.postRun == "function" && (n.postRun = [n.postRun]); n.postRun.length; )
          L(n.postRun.shift());
      ze(xt);
    }
    function gt(e) {
      dt.unshift(e);
    }
    function st(e) {
      it.unshift(e);
    }
    function L(e) {
      xt.unshift(e);
    }
    var O = 0, q = null;
    function d(e) {
      O++, n.monitorRunDependencies && n.monitorRunDependencies(O);
    }
    function p(e) {
      if (O--, n.monitorRunDependencies && n.monitorRunDependencies(O), O == 0 && q) {
        var t = q;
        q = null, t();
      }
    }
    function R(e) {
      n.onAbort && n.onAbort(e), e = "Aborted(" + e + ")", pe(e), Ne = true, ye = 1, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw b(t), t;
    }
    var M = "data:application/octet-stream;base64,";
    function X(e) {
      return e.startsWith(M);
    }
    var Y;
    Y = "BanubaSDK.wasm", X(Y) || (Y = ee(Y));
    function xe(e) {
      try {
        if (e == Y && de)
          return new Uint8Array(de);
        throw "both async and sync fetching of the wasm failed";
      } catch (t) {
        R(t);
      }
    }
    function Be() {
      return !de && D && typeof fetch == "function" ? fetch(Y, { credentials: "same-origin" }).then(function(e) {
        if (!e.ok)
          throw "failed to load wasm binary file at '" + Y + "'";
        return e.arrayBuffer();
      }).catch(function() {
        return xe(Y);
      }) : Promise.resolve().then(function() {
        return xe(Y);
      });
    }
    function S() {
      var e = { env: ua, wasi_snapshot_preview1: ua };
      function t(m, g) {
        var E = m.exports;
        n.asm = E, Fe = n.asm.memory, Ae(Fe.buffer), ct = n.asm.__indirect_function_table, st(n.asm.__wasm_call_ctors), p();
      }
      d();
      function i(m) {
        t(m.instance);
      }
      function a(m) {
        return Be().then(function(g) {
          return WebAssembly.instantiate(g, e);
        }).then(function(g) {
          return g;
        }).then(m, function(g) {
          pe("failed to asynchronously prepare wasm: " + g), R(g);
        });
      }
      function s() {
        return !de && typeof WebAssembly.instantiateStreaming == "function" && !X(Y) && typeof fetch == "function" ? fetch(Y, { credentials: "same-origin" }).then(function(m) {
          var g = WebAssembly.instantiateStreaming(m, e);
          return g.then(i, function(E) {
            return pe("wasm streaming compile failed: " + E), pe("falling back to ArrayBuffer instantiation"), a(i);
          });
        }) : a(i);
      }
      if (n.instantiateWasm)
        try {
          var c = n.instantiateWasm(e, t);
          return c;
        } catch (m) {
          pe("Module.instantiateWasm callback failed with error: " + m), b(m);
        }
      return s().catch(b), {};
    }
    var T, _;
    function u() {
      return /electron/i.test(navigator.userAgent);
    }
    function f() {
      function e() {
        var s = self.top, c = self.parent, m = [];
        do {
          try {
            m.push(c.location.href);
          } catch {
          }
          c && (c = c.parent);
        } while (c && c !== s);
        return m;
      }
      var t = [self.location.href].concat(Array.from("ancestorOrigins" in self.location ? self.location.ancestorOrigins : e())).map(function(s) {
        return new URL(s.replace(/^blob:/, "")).hostname;
      }).find(function(s) {
        return !!s;
      }), i = $e(t) + 1, a = Ct(i);
      return ge(t, a, i), a;
    }
    function C(e) {
      const t = Se(e), i = h.readFile(t), a = document.createElement("video"), s = URL.createObjectURL(new Blob([i], { type: "video/mp4" })), c = n.proxyVideoRequestsTo;
      return a.muted = true, a.autoplay = false, a.controls = false, a.playsInline = true, a.src = c ? c + encodeURIComponent(s) : s, Ze.toHandle(a);
    }
    function P(e) {
      const t = Ze.toValue(e);
      URL.revokeObjectURL(t.src), t.src = "";
    }
    function W() {
      return n.getRandomValue();
    }
    function K() {
      if (n.getRandomValue === void 0)
        try {
          var e = typeof window == "object" ? window : self, t = typeof e.crypto < "u" ? e.crypto : e.msCrypto, i = function() {
            var c = new Uint32Array(1);
            return t.getRandomValues(c), c[0] >>> 0;
          };
          i(), n.getRandomValue = i;
        } catch {
          try {
            var a = require("crypto"), s = function() {
              var m = a.randomBytes(4);
              return (m[0] << 24 | m[1] << 16 | m[2] << 8 | m[3]) >>> 0;
            };
            s(), n.getRandomValue = s;
          } catch {
            throw "No secure random number generator found";
          }
        }
    }
    function Re(e) {
      this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
    }
    function ze(e) {
      for (; e.length > 0; )
        e.shift()(n);
    }
    function Ve(e) {
      return Ct(e + 24) + 24;
    }
    function Ye(e) {
      this.excPtr = e, this.ptr = e - 24, this.set_type = function(t) {
        ne[this.ptr + 4 >> 2] = t;
      }, this.get_type = function() {
        return ne[this.ptr + 4 >> 2];
      }, this.set_destructor = function(t) {
        ne[this.ptr + 8 >> 2] = t;
      }, this.get_destructor = function() {
        return ne[this.ptr + 8 >> 2];
      }, this.set_refcount = function(t) {
        B[this.ptr >> 2] = t;
      }, this.set_caught = function(t) {
        t = t ? 1 : 0, me[this.ptr + 12 >> 0] = t;
      }, this.get_caught = function() {
        return me[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(t) {
        t = t ? 1 : 0, me[this.ptr + 13 >> 0] = t;
      }, this.get_rethrown = function() {
        return me[this.ptr + 13 >> 0] != 0;
      }, this.init = function(t, i) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(i), this.set_refcount(0), this.set_caught(false), this.set_rethrown(false);
      }, this.add_ref = function() {
        var t = B[this.ptr >> 2];
        B[this.ptr >> 2] = t + 1;
      }, this.release_ref = function() {
        var t = B[this.ptr >> 2];
        return B[this.ptr >> 2] = t - 1, t === 1;
      }, this.set_adjusted_ptr = function(t) {
        ne[this.ptr + 16 >> 2] = t;
      }, this.get_adjusted_ptr = function() {
        return ne[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var t = ha(this.get_type());
        if (t)
          return ne[this.excPtr >> 2];
        var i = this.get_adjusted_ptr();
        return i !== 0 ? i : this.excPtr;
      };
    }
    function Oe(e, t, i) {
      var a = new Ye(e);
      throw a.init(t, i), e;
    }
    var ke = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
      var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return t.exec(e).slice(1);
    }, normalizeArray: (e, t) => {
      for (var i = 0, a = e.length - 1; a >= 0; a--) {
        var s = e[a];
        s === "." ? e.splice(a, 1) : s === ".." ? (e.splice(a, 1), i++) : i && (e.splice(a, 1), i--);
      }
      if (t)
        for (; i; i--)
          e.unshift("..");
      return e;
    }, normalize: (e) => {
      var t = ke.isAbs(e), i = e.substr(-1) === "/";
      return e = ke.normalizeArray(e.split("/").filter((a) => !!a), !t).join("/"), !e && !t && (e = "."), e && i && (e += "/"), (t ? "/" : "") + e;
    }, dirname: (e) => {
      var t = ke.splitPath(e), i = t[0], a = t[1];
      return !i && !a ? "." : (a && (a = a.substr(0, a.length - 1)), i + a);
    }, basename: (e) => {
      if (e === "/")
        return "/";
      e = ke.normalize(e), e = e.replace(/\/$/, "");
      var t = e.lastIndexOf("/");
      return t === -1 ? e : e.substr(t + 1);
    }, join: function() {
      var e = Array.prototype.slice.call(arguments);
      return ke.normalize(e.join("/"));
    }, join2: (e, t) => ke.normalize(e + "/" + t) };
    function mr() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var e = new Uint8Array(1);
        return () => (crypto.getRandomValues(e), e[0]);
      } else
        return () => R("randomDevice");
    }
    var ut = { resolve: function() {
      for (var e = "", t = false, i = arguments.length - 1; i >= -1 && !t; i--) {
        var a = i >= 0 ? arguments[i] : h.cwd();
        if (typeof a != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!a)
          return "";
        e = a + "/" + e, t = ke.isAbs(a);
      }
      return e = ke.normalizeArray(e.split("/").filter((s) => !!s), !t).join("/"), (t ? "/" : "") + e || ".";
    }, relative: (e, t) => {
      e = ut.resolve(e).substr(1), t = ut.resolve(t).substr(1);
      function i(A) {
        for (var I = 0; I < A.length && A[I] === ""; I++)
          ;
        for (var U = A.length - 1; U >= 0 && A[U] === ""; U--)
          ;
        return I > U ? [] : A.slice(I, U - I + 1);
      }
      for (var a = i(e.split("/")), s = i(t.split("/")), c = Math.min(a.length, s.length), m = c, g = 0; g < c; g++)
        if (a[g] !== s[g]) {
          m = g;
          break;
        }
      for (var E = [], g = m; g < a.length; g++)
        E.push("..");
      return E = E.concat(s.slice(m)), E.join("/");
    } };
    function bt(e, t, i) {
      var a = i > 0 ? i : $e(e) + 1, s = new Array(a), c = oe(e, s, 0, s.length);
      return t && (s.length = c), s;
    }
    var rt = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(e, t) {
      rt.ttys[e] = { input: [], output: [], ops: t }, h.registerDevice(e, rt.stream_ops);
    }, stream_ops: { open: function(e) {
      var t = rt.ttys[e.node.rdev];
      if (!t)
        throw new h.ErrnoError(43);
      e.tty = t, e.seekable = false;
    }, close: function(e) {
      e.tty.ops.fsync(e.tty);
    }, fsync: function(e) {
      e.tty.ops.fsync(e.tty);
    }, read: function(e, t, i, a, s) {
      if (!e.tty || !e.tty.ops.get_char)
        throw new h.ErrnoError(60);
      for (var c = 0, m = 0; m < a; m++) {
        var g;
        try {
          g = e.tty.ops.get_char(e.tty);
        } catch {
          throw new h.ErrnoError(29);
        }
        if (g === void 0 && c === 0)
          throw new h.ErrnoError(6);
        if (g == null)
          break;
        c++, t[i + m] = g;
      }
      return c && (e.node.timestamp = Date.now()), c;
    }, write: function(e, t, i, a, s) {
      if (!e.tty || !e.tty.ops.put_char)
        throw new h.ErrnoError(60);
      try {
        for (var c = 0; c < a; c++)
          e.tty.ops.put_char(e.tty, t[i + c]);
      } catch {
        throw new h.ErrnoError(29);
      }
      return a && (e.node.timestamp = Date.now()), c;
    } }, default_tty_ops: { get_char: function(e) {
      if (!e.input.length) {
        var t = null;
        if (typeof window < "u" && typeof window.prompt == "function" ? (t = window.prompt("Input: "), t !== null && (t += `
`)) : typeof readline == "function" && (t = readline(), t !== null && (t += `
`)), !t)
          return null;
        e.input = bt(t, true);
      }
      return e.input.shift();
    }, put_char: function(e, t) {
      t === null || t === 10 ? (z(Ge(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync: function(e) {
      e.output && e.output.length > 0 && (z(Ge(e.output, 0)), e.output = []);
    } }, default_tty1_ops: { put_char: function(e, t) {
      t === null || t === 10 ? (pe(Ge(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync: function(e) {
      e.output && e.output.length > 0 && (pe(Ge(e.output, 0)), e.output = []);
    } } };
    function ei(e, t) {
      return ue.fill(0, e, e + t), e;
    }
    function Ku(e, t) {
      return Math.ceil(e / t) * t;
    }
    function Do(e) {
      e = Ku(e, 65536);
      var t = ca(65536, e);
      return t ? ei(t, e) : 0;
    }
    var Ie = { ops_table: null, mount: function(e) {
      return Ie.createNode(null, "/", 16895, 0);
    }, createNode: function(e, t, i, a) {
      if (h.isBlkdev(i) || h.isFIFO(i))
        throw new h.ErrnoError(63);
      Ie.ops_table || (Ie.ops_table = { dir: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr, lookup: Ie.node_ops.lookup, mknod: Ie.node_ops.mknod, rename: Ie.node_ops.rename, unlink: Ie.node_ops.unlink, rmdir: Ie.node_ops.rmdir, readdir: Ie.node_ops.readdir, symlink: Ie.node_ops.symlink }, stream: { llseek: Ie.stream_ops.llseek } }, file: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr }, stream: { llseek: Ie.stream_ops.llseek, read: Ie.stream_ops.read, write: Ie.stream_ops.write, allocate: Ie.stream_ops.allocate, mmap: Ie.stream_ops.mmap, msync: Ie.stream_ops.msync } }, link: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr, readlink: Ie.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: Ie.node_ops.getattr, setattr: Ie.node_ops.setattr }, stream: h.chrdev_stream_ops } });
      var s = h.createNode(e, t, i, a);
      return h.isDir(s.mode) ? (s.node_ops = Ie.ops_table.dir.node, s.stream_ops = Ie.ops_table.dir.stream, s.contents = {}) : h.isFile(s.mode) ? (s.node_ops = Ie.ops_table.file.node, s.stream_ops = Ie.ops_table.file.stream, s.usedBytes = 0, s.contents = null) : h.isLink(s.mode) ? (s.node_ops = Ie.ops_table.link.node, s.stream_ops = Ie.ops_table.link.stream) : h.isChrdev(s.mode) && (s.node_ops = Ie.ops_table.chrdev.node, s.stream_ops = Ie.ops_table.chrdev.stream), s.timestamp = Date.now(), e && (e.contents[t] = s, e.timestamp = s.timestamp), s;
    }, getFileDataAsTypedArray: function(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
    }, expandFileStorage: function(e, t) {
      var i = e.contents ? e.contents.length : 0;
      if (!(i >= t)) {
        var a = 1024 * 1024;
        t = Math.max(t, i * (i < a ? 2 : 1.125) >>> 0), i != 0 && (t = Math.max(t, 256));
        var s = e.contents;
        e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(s.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage: function(e, t) {
      if (e.usedBytes != t)
        if (t == 0)
          e.contents = null, e.usedBytes = 0;
        else {
          var i = e.contents;
          e.contents = new Uint8Array(t), i && e.contents.set(i.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
        }
    }, node_ops: { getattr: function(e) {
      var t = {};
      return t.dev = h.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, h.isDir(e.mode) ? t.size = 4096 : h.isFile(e.mode) ? t.size = e.usedBytes : h.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
    }, setattr: function(e, t) {
      t.mode !== void 0 && (e.mode = t.mode), t.timestamp !== void 0 && (e.timestamp = t.timestamp), t.size !== void 0 && Ie.resizeFileStorage(e, t.size);
    }, lookup: function(e, t) {
      throw h.genericErrors[44];
    }, mknod: function(e, t, i, a) {
      return Ie.createNode(e, t, i, a);
    }, rename: function(e, t, i) {
      if (h.isDir(e.mode)) {
        var a;
        try {
          a = h.lookupNode(t, i);
        } catch {
        }
        if (a)
          for (var s in a.contents)
            throw new h.ErrnoError(55);
      }
      delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = i, t.contents[i] = e, t.timestamp = e.parent.timestamp, e.parent = t;
    }, unlink: function(e, t) {
      delete e.contents[t], e.timestamp = Date.now();
    }, rmdir: function(e, t) {
      var i = h.lookupNode(e, t);
      for (var a in i.contents)
        throw new h.ErrnoError(55);
      delete e.contents[t], e.timestamp = Date.now();
    }, readdir: function(e) {
      var t = [".", ".."];
      for (var i in e.contents)
        e.contents.hasOwnProperty(i) && t.push(i);
      return t;
    }, symlink: function(e, t, i) {
      var a = Ie.createNode(e, t, 41471, 0);
      return a.link = i, a;
    }, readlink: function(e) {
      if (!h.isLink(e.mode))
        throw new h.ErrnoError(28);
      return e.link;
    } }, stream_ops: { read: function(e, t, i, a, s) {
      var c = e.node.contents;
      if (s >= e.node.usedBytes)
        return 0;
      var m = Math.min(e.node.usedBytes - s, a);
      if (m > 8 && c.subarray)
        t.set(c.subarray(s, s + m), i);
      else
        for (var g = 0; g < m; g++)
          t[i + g] = c[s + g];
      return m;
    }, write: function(e, t, i, a, s, c) {
      if (t.buffer === me.buffer && (c = false), !a)
        return 0;
      var m = e.node;
      if (m.timestamp = Date.now(), t.subarray && (!m.contents || m.contents.subarray)) {
        if (c)
          return m.contents = t.subarray(i, i + a), m.usedBytes = a, a;
        if (m.usedBytes === 0 && s === 0)
          return m.contents = t.slice(i, i + a), m.usedBytes = a, a;
        if (s + a <= m.usedBytes)
          return m.contents.set(t.subarray(i, i + a), s), a;
      }
      if (Ie.expandFileStorage(m, s + a), m.contents.subarray && t.subarray)
        m.contents.set(t.subarray(i, i + a), s);
      else
        for (var g = 0; g < a; g++)
          m.contents[s + g] = t[i + g];
      return m.usedBytes = Math.max(m.usedBytes, s + a), a;
    }, llseek: function(e, t, i) {
      var a = t;
      if (i === 1 ? a += e.position : i === 2 && h.isFile(e.node.mode) && (a += e.node.usedBytes), a < 0)
        throw new h.ErrnoError(28);
      return a;
    }, allocate: function(e, t, i) {
      Ie.expandFileStorage(e.node, t + i), e.node.usedBytes = Math.max(e.node.usedBytes, t + i);
    }, mmap: function(e, t, i, a, s) {
      if (!h.isFile(e.node.mode))
        throw new h.ErrnoError(43);
      var c, m, g = e.node.contents;
      if (!(s & 2) && g.buffer === De)
        m = false, c = g.byteOffset;
      else {
        if ((i > 0 || i + t < g.length) && (g.subarray ? g = g.subarray(i, i + t) : g = Array.prototype.slice.call(g, i, i + t)), m = true, c = Do(t), !c)
          throw new h.ErrnoError(48);
        me.set(g, c);
      }
      return { ptr: c, allocated: m };
    }, msync: function(e, t, i, a, s) {
      return Ie.stream_ops.write(e, t, 0, a, i, false), 0;
    } } };
    function Yu(e, t, i, a) {
      var s = a ? "" : "al " + e;
      Z(e, (c) => {
        Ue(c, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(c)), s && p();
      }, (c) => {
        if (i)
          i();
        else
          throw 'Loading data file "' + e + '" failed.';
      }), s && d();
    }
    var h = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: (e, t = {}) => {
      if (e = ut.resolve(e), !e)
        return { path: "", node: null };
      var i = { follow_mount: true, recurse_count: 0 };
      if (t = Object.assign(i, t), t.recurse_count > 8)
        throw new h.ErrnoError(32);
      for (var a = e.split("/").filter((U) => !!U), s = h.root, c = "/", m = 0; m < a.length; m++) {
        var g = m === a.length - 1;
        if (g && t.parent)
          break;
        if (s = h.lookupNode(s, a[m]), c = ke.join2(c, a[m]), h.isMountpoint(s) && (!g || g && t.follow_mount) && (s = s.mounted.root), !g || t.follow)
          for (var E = 0; h.isLink(s.mode); ) {
            var A = h.readlink(c);
            c = ut.resolve(ke.dirname(c), A);
            var I = h.lookupPath(c, { recurse_count: t.recurse_count + 1 });
            if (s = I.node, E++ > 40)
              throw new h.ErrnoError(32);
          }
      }
      return { path: c, node: s };
    }, getPath: (e) => {
      for (var t; ; ) {
        if (h.isRoot(e)) {
          var i = e.mount.mountpoint;
          return t ? i[i.length - 1] !== "/" ? i + "/" + t : i + t : i;
        }
        t = t ? e.name + "/" + t : e.name, e = e.parent;
      }
    }, hashName: (e, t) => {
      for (var i = 0, a = 0; a < t.length; a++)
        i = (i << 5) - i + t.charCodeAt(a) | 0;
      return (e + i >>> 0) % h.nameTable.length;
    }, hashAddNode: (e) => {
      var t = h.hashName(e.parent.id, e.name);
      e.name_next = h.nameTable[t], h.nameTable[t] = e;
    }, hashRemoveNode: (e) => {
      var t = h.hashName(e.parent.id, e.name);
      if (h.nameTable[t] === e)
        h.nameTable[t] = e.name_next;
      else
        for (var i = h.nameTable[t]; i; ) {
          if (i.name_next === e) {
            i.name_next = e.name_next;
            break;
          }
          i = i.name_next;
        }
    }, lookupNode: (e, t) => {
      var i = h.mayLookup(e);
      if (i)
        throw new h.ErrnoError(i, e);
      for (var a = h.hashName(e.id, t), s = h.nameTable[a]; s; s = s.name_next) {
        var c = s.name;
        if (s.parent.id === e.id && c === t)
          return s;
      }
      return h.lookup(e, t);
    }, createNode: (e, t, i, a) => {
      var s = new h.FSNode(e, t, i, a);
      return h.hashAddNode(s), s;
    }, destroyNode: (e) => {
      h.hashRemoveNode(e);
    }, isRoot: (e) => e === e.parent, isMountpoint: (e) => !!e.mounted, isFile: (e) => (e & 61440) === 32768, isDir: (e) => (e & 61440) === 16384, isLink: (e) => (e & 61440) === 40960, isChrdev: (e) => (e & 61440) === 8192, isBlkdev: (e) => (e & 61440) === 24576, isFIFO: (e) => (e & 61440) === 4096, isSocket: (e) => (e & 49152) === 49152, flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: (e) => {
      var t = h.flagModes[e];
      if (typeof t > "u")
        throw new Error("Unknown file open mode: " + e);
      return t;
    }, flagsToPermissionString: (e) => {
      var t = ["r", "w", "rw"][e & 3];
      return e & 512 && (t += "w"), t;
    }, nodePermissions: (e, t) => h.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0, mayLookup: (e) => {
      var t = h.nodePermissions(e, "x");
      return t || (e.node_ops.lookup ? 0 : 2);
    }, mayCreate: (e, t) => {
      try {
        return h.lookupNode(e, t), 20;
      } catch {
      }
      return h.nodePermissions(e, "wx");
    }, mayDelete: (e, t, i) => {
      var a;
      try {
        a = h.lookupNode(e, t);
      } catch (c) {
        return c.errno;
      }
      var s = h.nodePermissions(e, "wx");
      if (s)
        return s;
      if (i) {
        if (!h.isDir(a.mode))
          return 54;
        if (h.isRoot(a) || h.getPath(a) === h.cwd())
          return 10;
      } else if (h.isDir(a.mode))
        return 31;
      return 0;
    }, mayOpen: (e, t) => e ? h.isLink(e.mode) ? 32 : h.isDir(e.mode) && (h.flagsToPermissionString(t) !== "r" || t & 512) ? 31 : h.nodePermissions(e, h.flagsToPermissionString(t)) : 44, MAX_OPEN_FDS: 4096, nextfd: (e = 0, t = h.MAX_OPEN_FDS) => {
      for (var i = e; i <= t; i++)
        if (!h.streams[i])
          return i;
      throw new h.ErrnoError(33);
    }, getStream: (e) => h.streams[e], createStream: (e, t, i) => {
      h.FSStream || (h.FSStream = function() {
        this.shared = {};
      }, h.FSStream.prototype = {}, Object.defineProperties(h.FSStream.prototype, { object: { get: function() {
        return this.node;
      }, set: function(s) {
        this.node = s;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } }, flags: { get: function() {
        return this.shared.flags;
      }, set: function(s) {
        this.shared.flags = s;
      } }, position: { get: function() {
        return this.shared.position;
      }, set: function(s) {
        this.shared.position = s;
      } } })), e = Object.assign(new h.FSStream(), e);
      var a = h.nextfd(t, i);
      return e.fd = a, h.streams[a] = e, e;
    }, closeStream: (e) => {
      h.streams[e] = null;
    }, chrdev_stream_ops: { open: (e) => {
      var t = h.getDevice(e.node.rdev);
      e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e);
    }, llseek: () => {
      throw new h.ErrnoError(70);
    } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t) => e << 8 | t, registerDevice: (e, t) => {
      h.devices[e] = { stream_ops: t };
    }, getDevice: (e) => h.devices[e], getMounts: (e) => {
      for (var t = [], i = [e]; i.length; ) {
        var a = i.pop();
        t.push(a), i.push.apply(i, a.mounts);
      }
      return t;
    }, syncfs: (e, t) => {
      typeof e == "function" && (t = e, e = false), h.syncFSRequests++, h.syncFSRequests > 1 && pe("warning: " + h.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      var i = h.getMounts(h.root.mount), a = 0;
      function s(m) {
        return h.syncFSRequests--, t(m);
      }
      function c(m) {
        if (m)
          return c.errored ? void 0 : (c.errored = true, s(m));
        ++a >= i.length && s(null);
      }
      i.forEach((m) => {
        if (!m.type.syncfs)
          return c(null);
        m.type.syncfs(m, e, c);
      });
    }, mount: (e, t, i) => {
      var a = i === "/", s = !i, c;
      if (a && h.root)
        throw new h.ErrnoError(10);
      if (!a && !s) {
        var m = h.lookupPath(i, { follow_mount: false });
        if (i = m.path, c = m.node, h.isMountpoint(c))
          throw new h.ErrnoError(10);
        if (!h.isDir(c.mode))
          throw new h.ErrnoError(54);
      }
      var g = { type: e, opts: t, mountpoint: i, mounts: [] }, E = e.mount(g);
      return E.mount = g, g.root = E, a ? h.root = E : c && (c.mounted = g, c.mount && c.mount.mounts.push(g)), E;
    }, unmount: (e) => {
      var t = h.lookupPath(e, { follow_mount: false });
      if (!h.isMountpoint(t.node))
        throw new h.ErrnoError(28);
      var i = t.node, a = i.mounted, s = h.getMounts(a);
      Object.keys(h.nameTable).forEach((m) => {
        for (var g = h.nameTable[m]; g; ) {
          var E = g.name_next;
          s.includes(g.mount) && h.destroyNode(g), g = E;
        }
      }), i.mounted = null;
      var c = i.mount.mounts.indexOf(a);
      i.mount.mounts.splice(c, 1);
    }, lookup: (e, t) => e.node_ops.lookup(e, t), mknod: (e, t, i) => {
      var a = h.lookupPath(e, { parent: true }), s = a.node, c = ke.basename(e);
      if (!c || c === "." || c === "..")
        throw new h.ErrnoError(28);
      var m = h.mayCreate(s, c);
      if (m)
        throw new h.ErrnoError(m);
      if (!s.node_ops.mknod)
        throw new h.ErrnoError(63);
      return s.node_ops.mknod(s, c, t, i);
    }, create: (e, t) => (t = t !== void 0 ? t : 438, t &= 4095, t |= 32768, h.mknod(e, t, 0)), mkdir: (e, t) => (t = t !== void 0 ? t : 511, t &= 1023, t |= 16384, h.mknod(e, t, 0)), mkdirTree: (e, t) => {
      for (var i = e.split("/"), a = "", s = 0; s < i.length; ++s)
        if (i[s]) {
          a += "/" + i[s];
          try {
            h.mkdir(a, t);
          } catch (c) {
            if (c.errno != 20)
              throw c;
          }
        }
    }, mkdev: (e, t, i) => (typeof i > "u" && (i = t, t = 438), t |= 8192, h.mknod(e, t, i)), symlink: (e, t) => {
      if (!ut.resolve(e))
        throw new h.ErrnoError(44);
      var i = h.lookupPath(t, { parent: true }), a = i.node;
      if (!a)
        throw new h.ErrnoError(44);
      var s = ke.basename(t), c = h.mayCreate(a, s);
      if (c)
        throw new h.ErrnoError(c);
      if (!a.node_ops.symlink)
        throw new h.ErrnoError(63);
      return a.node_ops.symlink(a, s, e);
    }, rename: (e, t) => {
      var i = ke.dirname(e), a = ke.dirname(t), s = ke.basename(e), c = ke.basename(t), m, g, E;
      if (m = h.lookupPath(e, { parent: true }), g = m.node, m = h.lookupPath(t, { parent: true }), E = m.node, !g || !E)
        throw new h.ErrnoError(44);
      if (g.mount !== E.mount)
        throw new h.ErrnoError(75);
      var A = h.lookupNode(g, s), I = ut.relative(e, a);
      if (I.charAt(0) !== ".")
        throw new h.ErrnoError(28);
      if (I = ut.relative(t, i), I.charAt(0) !== ".")
        throw new h.ErrnoError(55);
      var U;
      try {
        U = h.lookupNode(E, c);
      } catch {
      }
      if (A !== U) {
        var j = h.isDir(A.mode), V = h.mayDelete(g, s, j);
        if (V)
          throw new h.ErrnoError(V);
        if (V = U ? h.mayDelete(E, c, j) : h.mayCreate(E, c), V)
          throw new h.ErrnoError(V);
        if (!g.node_ops.rename)
          throw new h.ErrnoError(63);
        if (h.isMountpoint(A) || U && h.isMountpoint(U))
          throw new h.ErrnoError(10);
        if (E !== g && (V = h.nodePermissions(g, "w"), V))
          throw new h.ErrnoError(V);
        h.hashRemoveNode(A);
        try {
          g.node_ops.rename(A, E, c);
        } catch (J) {
          throw J;
        } finally {
          h.hashAddNode(A);
        }
      }
    }, rmdir: (e) => {
      var t = h.lookupPath(e, { parent: true }), i = t.node, a = ke.basename(e), s = h.lookupNode(i, a), c = h.mayDelete(i, a, true);
      if (c)
        throw new h.ErrnoError(c);
      if (!i.node_ops.rmdir)
        throw new h.ErrnoError(63);
      if (h.isMountpoint(s))
        throw new h.ErrnoError(10);
      i.node_ops.rmdir(i, a), h.destroyNode(s);
    }, readdir: (e) => {
      var t = h.lookupPath(e, { follow: true }), i = t.node;
      if (!i.node_ops.readdir)
        throw new h.ErrnoError(54);
      return i.node_ops.readdir(i);
    }, unlink: (e) => {
      var t = h.lookupPath(e, { parent: true }), i = t.node;
      if (!i)
        throw new h.ErrnoError(44);
      var a = ke.basename(e), s = h.lookupNode(i, a), c = h.mayDelete(i, a, false);
      if (c)
        throw new h.ErrnoError(c);
      if (!i.node_ops.unlink)
        throw new h.ErrnoError(63);
      if (h.isMountpoint(s))
        throw new h.ErrnoError(10);
      i.node_ops.unlink(i, a), h.destroyNode(s);
    }, readlink: (e) => {
      var t = h.lookupPath(e), i = t.node;
      if (!i)
        throw new h.ErrnoError(44);
      if (!i.node_ops.readlink)
        throw new h.ErrnoError(28);
      return ut.resolve(h.getPath(i.parent), i.node_ops.readlink(i));
    }, stat: (e, t) => {
      var i = h.lookupPath(e, { follow: !t }), a = i.node;
      if (!a)
        throw new h.ErrnoError(44);
      if (!a.node_ops.getattr)
        throw new h.ErrnoError(63);
      return a.node_ops.getattr(a);
    }, lstat: (e) => h.stat(e, true), chmod: (e, t, i) => {
      var a;
      if (typeof e == "string") {
        var s = h.lookupPath(e, { follow: !i });
        a = s.node;
      } else
        a = e;
      if (!a.node_ops.setattr)
        throw new h.ErrnoError(63);
      a.node_ops.setattr(a, { mode: t & 4095 | a.mode & -4096, timestamp: Date.now() });
    }, lchmod: (e, t) => {
      h.chmod(e, t, true);
    }, fchmod: (e, t) => {
      var i = h.getStream(e);
      if (!i)
        throw new h.ErrnoError(8);
      h.chmod(i.node, t);
    }, chown: (e, t, i, a) => {
      var s;
      if (typeof e == "string") {
        var c = h.lookupPath(e, { follow: !a });
        s = c.node;
      } else
        s = e;
      if (!s.node_ops.setattr)
        throw new h.ErrnoError(63);
      s.node_ops.setattr(s, { timestamp: Date.now() });
    }, lchown: (e, t, i) => {
      h.chown(e, t, i, true);
    }, fchown: (e, t, i) => {
      var a = h.getStream(e);
      if (!a)
        throw new h.ErrnoError(8);
      h.chown(a.node, t, i);
    }, truncate: (e, t) => {
      if (t < 0)
        throw new h.ErrnoError(28);
      var i;
      if (typeof e == "string") {
        var a = h.lookupPath(e, { follow: true });
        i = a.node;
      } else
        i = e;
      if (!i.node_ops.setattr)
        throw new h.ErrnoError(63);
      if (h.isDir(i.mode))
        throw new h.ErrnoError(31);
      if (!h.isFile(i.mode))
        throw new h.ErrnoError(28);
      var s = h.nodePermissions(i, "w");
      if (s)
        throw new h.ErrnoError(s);
      i.node_ops.setattr(i, { size: t, timestamp: Date.now() });
    }, ftruncate: (e, t) => {
      var i = h.getStream(e);
      if (!i)
        throw new h.ErrnoError(8);
      if (!(i.flags & 2097155))
        throw new h.ErrnoError(28);
      h.truncate(i.node, t);
    }, utime: (e, t, i) => {
      var a = h.lookupPath(e, { follow: true }), s = a.node;
      s.node_ops.setattr(s, { timestamp: Math.max(t, i) });
    }, open: (e, t, i) => {
      if (e === "")
        throw new h.ErrnoError(44);
      t = typeof t == "string" ? h.modeStringToFlags(t) : t, i = typeof i > "u" ? 438 : i, t & 64 ? i = i & 4095 | 32768 : i = 0;
      var a;
      if (typeof e == "object")
        a = e;
      else {
        e = ke.normalize(e);
        try {
          var s = h.lookupPath(e, { follow: !(t & 131072) });
          a = s.node;
        } catch {
        }
      }
      var c = false;
      if (t & 64)
        if (a) {
          if (t & 128)
            throw new h.ErrnoError(20);
        } else
          a = h.mknod(e, i, 0), c = true;
      if (!a)
        throw new h.ErrnoError(44);
      if (h.isChrdev(a.mode) && (t &= -513), t & 65536 && !h.isDir(a.mode))
        throw new h.ErrnoError(54);
      if (!c) {
        var m = h.mayOpen(a, t);
        if (m)
          throw new h.ErrnoError(m);
      }
      t & 512 && !c && h.truncate(a, 0), t &= -131713;
      var g = h.createStream({ node: a, path: h.getPath(a), flags: t, seekable: true, position: 0, stream_ops: a.stream_ops, ungotten: [], error: false });
      return g.stream_ops.open && g.stream_ops.open(g), n.logReadFiles && !(t & 1) && (h.readFiles || (h.readFiles = {}), e in h.readFiles || (h.readFiles[e] = 1)), g;
    }, close: (e) => {
      if (h.isClosed(e))
        throw new h.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (t) {
        throw t;
      } finally {
        h.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed: (e) => e.fd === null, llseek: (e, t, i) => {
      if (h.isClosed(e))
        throw new h.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek)
        throw new h.ErrnoError(70);
      if (i != 0 && i != 1 && i != 2)
        throw new h.ErrnoError(28);
      return e.position = e.stream_ops.llseek(e, t, i), e.ungotten = [], e.position;
    }, read: (e, t, i, a, s) => {
      if (a < 0 || s < 0)
        throw new h.ErrnoError(28);
      if (h.isClosed(e))
        throw new h.ErrnoError(8);
      if ((e.flags & 2097155) === 1)
        throw new h.ErrnoError(8);
      if (h.isDir(e.node.mode))
        throw new h.ErrnoError(31);
      if (!e.stream_ops.read)
        throw new h.ErrnoError(28);
      var c = typeof s < "u";
      if (!c)
        s = e.position;
      else if (!e.seekable)
        throw new h.ErrnoError(70);
      var m = e.stream_ops.read(e, t, i, a, s);
      return c || (e.position += m), m;
    }, write: (e, t, i, a, s, c) => {
      if (a < 0 || s < 0)
        throw new h.ErrnoError(28);
      if (h.isClosed(e))
        throw new h.ErrnoError(8);
      if (!(e.flags & 2097155))
        throw new h.ErrnoError(8);
      if (h.isDir(e.node.mode))
        throw new h.ErrnoError(31);
      if (!e.stream_ops.write)
        throw new h.ErrnoError(28);
      e.seekable && e.flags & 1024 && h.llseek(e, 0, 2);
      var m = typeof s < "u";
      if (!m)
        s = e.position;
      else if (!e.seekable)
        throw new h.ErrnoError(70);
      var g = e.stream_ops.write(e, t, i, a, s, c);
      return m || (e.position += g), g;
    }, allocate: (e, t, i) => {
      if (h.isClosed(e))
        throw new h.ErrnoError(8);
      if (t < 0 || i <= 0)
        throw new h.ErrnoError(28);
      if (!(e.flags & 2097155))
        throw new h.ErrnoError(8);
      if (!h.isFile(e.node.mode) && !h.isDir(e.node.mode))
        throw new h.ErrnoError(43);
      if (!e.stream_ops.allocate)
        throw new h.ErrnoError(138);
      e.stream_ops.allocate(e, t, i);
    }, mmap: (e, t, i, a, s) => {
      if (a & 2 && !(s & 2) && (e.flags & 2097155) !== 2)
        throw new h.ErrnoError(2);
      if ((e.flags & 2097155) === 1)
        throw new h.ErrnoError(2);
      if (!e.stream_ops.mmap)
        throw new h.ErrnoError(43);
      return e.stream_ops.mmap(e, t, i, a, s);
    }, msync: (e, t, i, a, s) => e.stream_ops.msync ? e.stream_ops.msync(e, t, i, a, s) : 0, munmap: (e) => 0, ioctl: (e, t, i) => {
      if (!e.stream_ops.ioctl)
        throw new h.ErrnoError(59);
      return e.stream_ops.ioctl(e, t, i);
    }, readFile: (e, t = {}) => {
      if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary")
        throw new Error('Invalid encoding type "' + t.encoding + '"');
      var i, a = h.open(e, t.flags), s = h.stat(e), c = s.size, m = new Uint8Array(c);
      return h.read(a, m, 0, c, 0), t.encoding === "utf8" ? i = Ge(m, 0) : t.encoding === "binary" && (i = m), h.close(a), i;
    }, writeFile: (e, t, i = {}) => {
      i.flags = i.flags || 577;
      var a = h.open(e, i.flags, i.mode);
      if (typeof t == "string") {
        var s = new Uint8Array($e(t) + 1), c = oe(t, s, 0, s.length);
        h.write(a, s, 0, c, void 0, i.canOwn);
      } else if (ArrayBuffer.isView(t))
        h.write(a, t, 0, t.byteLength, void 0, i.canOwn);
      else
        throw new Error("Unsupported data type");
      h.close(a);
    }, cwd: () => h.currentPath, chdir: (e) => {
      var t = h.lookupPath(e, { follow: true });
      if (t.node === null)
        throw new h.ErrnoError(44);
      if (!h.isDir(t.node.mode))
        throw new h.ErrnoError(54);
      var i = h.nodePermissions(t.node, "x");
      if (i)
        throw new h.ErrnoError(i);
      h.currentPath = t.path;
    }, createDefaultDirectories: () => {
      h.mkdir("/tmp"), h.mkdir("/home"), h.mkdir("/home/web_user");
    }, createDefaultDevices: () => {
      h.mkdir("/dev"), h.registerDevice(h.makedev(1, 3), { read: () => 0, write: (t, i, a, s, c) => s }), h.mkdev("/dev/null", h.makedev(1, 3)), rt.register(h.makedev(5, 0), rt.default_tty_ops), rt.register(h.makedev(6, 0), rt.default_tty1_ops), h.mkdev("/dev/tty", h.makedev(5, 0)), h.mkdev("/dev/tty1", h.makedev(6, 0));
      var e = mr();
      h.createDevice("/dev", "random", e), h.createDevice("/dev", "urandom", e), h.mkdir("/dev/shm"), h.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: () => {
      h.mkdir("/proc");
      var e = h.mkdir("/proc/self");
      h.mkdir("/proc/self/fd"), h.mount({ mount: () => {
        var t = h.createNode(e, "fd", 16895, 73);
        return t.node_ops = { lookup: (i, a) => {
          var s = +a, c = h.getStream(s);
          if (!c)
            throw new h.ErrnoError(8);
          var m = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => c.path } };
          return m.parent = m, m;
        } }, t;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: () => {
      n.stdin ? h.createDevice("/dev", "stdin", n.stdin) : h.symlink("/dev/tty", "/dev/stdin"), n.stdout ? h.createDevice("/dev", "stdout", null, n.stdout) : h.symlink("/dev/tty", "/dev/stdout"), n.stderr ? h.createDevice("/dev", "stderr", null, n.stderr) : h.symlink("/dev/tty1", "/dev/stderr"), h.open("/dev/stdin", 0), h.open("/dev/stdout", 1), h.open("/dev/stderr", 1);
    }, ensureErrnoError: () => {
      h.ErrnoError || (h.ErrnoError = function(t, i) {
        this.node = i, this.setErrno = function(a) {
          this.errno = a;
        }, this.setErrno(t), this.message = "FS error";
      }, h.ErrnoError.prototype = new Error(), h.ErrnoError.prototype.constructor = h.ErrnoError, [44].forEach((e) => {
        h.genericErrors[e] = new h.ErrnoError(e), h.genericErrors[e].stack = "<generic error, no stack>";
      }));
    }, staticInit: () => {
      h.ensureErrnoError(), h.nameTable = new Array(4096), h.mount(Ie, {}, "/"), h.createDefaultDirectories(), h.createDefaultDevices(), h.createSpecialDirectories(), h.filesystems = { MEMFS: Ie };
    }, init: (e, t, i) => {
      h.init.initialized = true, h.ensureErrnoError(), n.stdin = e || n.stdin, n.stdout = t || n.stdout, n.stderr = i || n.stderr, h.createStandardStreams();
    }, quit: () => {
      h.init.initialized = false;
      for (var e = 0; e < h.streams.length; e++) {
        var t = h.streams[e];
        t && h.close(t);
      }
    }, getMode: (e, t) => {
      var i = 0;
      return e && (i |= 365), t && (i |= 146), i;
    }, findObject: (e, t) => {
      var i = h.analyzePath(e, t);
      return i.exists ? i.object : null;
    }, analyzePath: (e, t) => {
      try {
        var i = h.lookupPath(e, { follow: !t });
        e = i.path;
      } catch {
      }
      var a = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
      try {
        var i = h.lookupPath(e, { parent: true });
        a.parentExists = true, a.parentPath = i.path, a.parentObject = i.node, a.name = ke.basename(e), i = h.lookupPath(e, { follow: !t }), a.exists = true, a.path = i.path, a.object = i.node, a.name = i.node.name, a.isRoot = i.path === "/";
      } catch (s) {
        a.error = s.errno;
      }
      return a;
    }, createPath: (e, t, i, a) => {
      e = typeof e == "string" ? e : h.getPath(e);
      for (var s = t.split("/").reverse(); s.length; ) {
        var c = s.pop();
        if (c) {
          var m = ke.join2(e, c);
          try {
            h.mkdir(m);
          } catch {
          }
          e = m;
        }
      }
      return m;
    }, createFile: (e, t, i, a, s) => {
      var c = ke.join2(typeof e == "string" ? e : h.getPath(e), t), m = h.getMode(a, s);
      return h.create(c, m);
    }, createDataFile: (e, t, i, a, s, c) => {
      var m = t;
      e && (e = typeof e == "string" ? e : h.getPath(e), m = t ? ke.join2(e, t) : e);
      var g = h.getMode(a, s), E = h.create(m, g);
      if (i) {
        if (typeof i == "string") {
          for (var A = new Array(i.length), I = 0, U = i.length; I < U; ++I)
            A[I] = i.charCodeAt(I);
          i = A;
        }
        h.chmod(E, g | 146);
        var j = h.open(E, 577);
        h.write(j, i, 0, i.length, 0, c), h.close(j), h.chmod(E, g);
      }
      return E;
    }, createDevice: (e, t, i, a) => {
      var s = ke.join2(typeof e == "string" ? e : h.getPath(e), t), c = h.getMode(!!i, !!a);
      h.createDevice.major || (h.createDevice.major = 64);
      var m = h.makedev(h.createDevice.major++, 0);
      return h.registerDevice(m, { open: (g) => {
        g.seekable = false;
      }, close: (g) => {
        a && a.buffer && a.buffer.length && a(10);
      }, read: (g, E, A, I, U) => {
        for (var j = 0, V = 0; V < I; V++) {
          var J;
          try {
            J = i();
          } catch {
            throw new h.ErrnoError(29);
          }
          if (J === void 0 && j === 0)
            throw new h.ErrnoError(6);
          if (J == null)
            break;
          j++, E[A + V] = J;
        }
        return j && (g.node.timestamp = Date.now()), j;
      }, write: (g, E, A, I, U) => {
        for (var j = 0; j < I; j++)
          try {
            a(E[A + j]);
          } catch {
            throw new h.ErrnoError(29);
          }
        return I && (g.node.timestamp = Date.now()), j;
      } }), h.mkdev(s, c, m);
    }, forceLoadFile: (e) => {
      if (e.isDevice || e.isFolder || e.link || e.contents)
        return true;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      if (le)
        try {
          e.contents = bt(le(e.url), true), e.usedBytes = e.contents.length;
        } catch {
          throw new h.ErrnoError(29);
        }
      else
        throw new Error("Cannot load without read() or XMLHttpRequest.");
    }, createLazyFile: (e, t, i, a, s) => {
      if (typeof XMLHttpRequest < "u") {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var g;
      } else
        var g = { isDevice: false, url: i };
      var E = h.createFile(e, t, g, a, s);
      g.contents ? E.contents = g.contents : g.url && (E.contents = null, E.url = g.url), Object.defineProperties(E, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var A = {}, I = Object.keys(E.stream_ops);
      I.forEach((j) => {
        var V = E.stream_ops[j];
        A[j] = function() {
          return h.forceLoadFile(E), V.apply(null, arguments);
        };
      });
      function U(j, V, J, ce, he) {
        var we = j.node.contents;
        if (he >= we.length)
          return 0;
        var G = Math.min(we.length - he, ce);
        if (we.slice)
          for (var ie = 0; ie < G; ie++)
            V[J + ie] = we[he + ie];
        else
          for (var ie = 0; ie < G; ie++)
            V[J + ie] = we.get(he + ie);
        return G;
      }
      return A.read = (j, V, J, ce, he) => (h.forceLoadFile(E), U(j, V, J, ce, he)), A.mmap = (j, V, J, ce, he) => {
        h.forceLoadFile(E);
        var we = Do(V);
        if (!we)
          throw new h.ErrnoError(48);
        return U(j, me, we, V, J), { ptr: we, allocated: true };
      }, E.stream_ops = A, E;
    }, createPreloadedFile: (e, t, i, a, s, c, m, g, E, A) => {
      var I = t ? ut.resolve(ke.join2(e, t)) : e;
      function U(j) {
        function V(J) {
          A && A(), g || h.createDataFile(e, t, J, a, s, E), c && c(), p();
        }
        $.handledByPreloadPlugin(j, I, V, () => {
          m && m(), p();
        }) || V(j);
      }
      d(), typeof i == "string" ? Yu(i, (j) => U(j), m) : U(i);
    }, indexedDB: () => window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, DB_NAME: () => "EM_FS_" + window.location.pathname, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: (e, t, i) => {
      t = t || (() => {
      }), i = i || (() => {
      });
      var a = h.indexedDB();
      try {
        var s = a.open(h.DB_NAME(), h.DB_VERSION);
      } catch (c) {
        return i(c);
      }
      s.onupgradeneeded = () => {
        z("creating db");
        var c = s.result;
        c.createObjectStore(h.DB_STORE_NAME);
      }, s.onsuccess = () => {
        var c = s.result, m = c.transaction([h.DB_STORE_NAME], "readwrite"), g = m.objectStore(h.DB_STORE_NAME), E = 0, A = 0, I = e.length;
        function U() {
          A == 0 ? t() : i();
        }
        e.forEach((j) => {
          var V = g.put(h.analyzePath(j).object.contents, j);
          V.onsuccess = () => {
            E++, E + A == I && U();
          }, V.onerror = () => {
            A++, E + A == I && U();
          };
        }), m.onerror = i;
      }, s.onerror = i;
    }, loadFilesFromDB: (e, t, i) => {
      t = t || (() => {
      }), i = i || (() => {
      });
      var a = h.indexedDB();
      try {
        var s = a.open(h.DB_NAME(), h.DB_VERSION);
      } catch (c) {
        return i(c);
      }
      s.onupgradeneeded = i, s.onsuccess = () => {
        var c = s.result;
        try {
          var m = c.transaction([h.DB_STORE_NAME], "readonly");
        } catch (j) {
          i(j);
          return;
        }
        var g = m.objectStore(h.DB_STORE_NAME), E = 0, A = 0, I = e.length;
        function U() {
          A == 0 ? t() : i();
        }
        e.forEach((j) => {
          var V = g.get(j);
          V.onsuccess = () => {
            h.analyzePath(j).exists && h.unlink(j), h.createDataFile(ke.dirname(j), ke.basename(j), V.result, true, true, true), E++, E + A == I && U();
          }, V.onerror = () => {
            A++, E + A == I && U();
          };
        }), m.onerror = i;
      }, s.onerror = i;
    } }, Ce = { DEFAULT_POLLMASK: 5, calculateAt: function(e, t, i) {
      if (ke.isAbs(t))
        return t;
      var a;
      if (e === -100)
        a = h.cwd();
      else {
        var s = Ce.getStreamFromFD(e);
        a = s.path;
      }
      if (t.length == 0) {
        if (!i)
          throw new h.ErrnoError(44);
        return a;
      }
      return ke.join2(a, t);
    }, doStat: function(e, t, i) {
      try {
        var a = e(t);
      } catch (s) {
        if (s && s.node && ke.normalize(t) !== ke.normalize(h.getPath(s.node)))
          return -54;
        throw s;
      }
      return B[i >> 2] = a.dev, B[i + 8 >> 2] = a.ino, B[i + 12 >> 2] = a.mode, ne[i + 16 >> 2] = a.nlink, B[i + 20 >> 2] = a.uid, B[i + 24 >> 2] = a.gid, B[i + 28 >> 2] = a.rdev, _ = [a.size >>> 0, (T = a.size, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[i + 40 >> 2] = _[0], B[i + 44 >> 2] = _[1], B[i + 48 >> 2] = 4096, B[i + 52 >> 2] = a.blocks, _ = [Math.floor(a.atime.getTime() / 1e3) >>> 0, (T = Math.floor(a.atime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[i + 56 >> 2] = _[0], B[i + 60 >> 2] = _[1], ne[i + 64 >> 2] = 0, _ = [Math.floor(a.mtime.getTime() / 1e3) >>> 0, (T = Math.floor(a.mtime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[i + 72 >> 2] = _[0], B[i + 76 >> 2] = _[1], ne[i + 80 >> 2] = 0, _ = [Math.floor(a.ctime.getTime() / 1e3) >>> 0, (T = Math.floor(a.ctime.getTime() / 1e3), +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[i + 88 >> 2] = _[0], B[i + 92 >> 2] = _[1], ne[i + 96 >> 2] = 0, _ = [a.ino >>> 0, (T = a.ino, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[i + 104 >> 2] = _[0], B[i + 108 >> 2] = _[1], 0;
    }, doMsync: function(e, t, i, a, s) {
      if (!h.isFile(t.node.mode))
        throw new h.ErrnoError(43);
      if (a & 2)
        return 0;
      var c = ue.slice(e, e + i);
      h.msync(t, c, s, i, a);
    }, varargs: void 0, get: function() {
      Ce.varargs += 4;
      var e = B[Ce.varargs - 4 >> 2];
      return e;
    }, getStr: function(e) {
      var t = Se(e);
      return t;
    }, getStreamFromFD: function(e) {
      var t = h.getStream(e);
      if (!t)
        throw new h.ErrnoError(8);
      return t;
    } };
    function Xu(e, t) {
      try {
        return e = Ce.getStr(e), h.chmod(e, t), 0;
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function Zu(e, t) {
      try {
        return h.fchmod(e, t), 0;
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function qu(e) {
      return B[la() >> 2] = e, e;
    }
    function Qu(e, t, i) {
      Ce.varargs = i;
      try {
        var a = Ce.getStreamFromFD(e);
        switch (t) {
          case 0: {
            var s = Ce.get();
            if (s < 0)
              return -28;
            var c;
            return c = h.createStream(a, s), c.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return a.flags;
          case 4: {
            var s = Ce.get();
            return a.flags |= s, 0;
          }
          case 5: {
            var s = Ce.get(), m = 0;
            return Pe[s + m >> 1] = 2, 0;
          }
          case 6:
          case 7:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            return qu(28), -1;
          default:
            return -28;
        }
      } catch (g) {
        if (typeof h > "u" || !(g instanceof h.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function Ju(e, t) {
      try {
        var i = Ce.getStreamFromFD(e);
        return Ce.doStat(h.stat, i.path, t);
      } catch (a) {
        if (typeof h > "u" || !(a instanceof h.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function ko(e, t) {
      return t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + t * 4294967296 : NaN;
    }
    function el(e, t, i) {
      try {
        var a = ko(t, i);
        return isNaN(a) ? -61 : (h.ftruncate(e, a), 0);
      } catch (s) {
        if (typeof h > "u" || !(s instanceof h.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function tl(e, t) {
      try {
        if (t === 0)
          return -28;
        var i = h.cwd(), a = $e(i) + 1;
        return t < a ? -68 : (ge(i, e, t), a);
      } catch (s) {
        if (typeof h > "u" || !(s instanceof h.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function rl(e, t, i) {
      try {
        var a = Ce.getStreamFromFD(e);
        a.getdents || (a.getdents = h.readdir(a.path));
        for (var s = 280, c = 0, m = h.llseek(a, 0, 1), g = Math.floor(m / s); g < a.getdents.length && c + s <= i; ) {
          var E, A, I = a.getdents[g];
          if (I === ".")
            E = a.node.id, A = 4;
          else if (I === "..") {
            var U = h.lookupPath(a.path, { parent: true });
            E = U.node.id, A = 4;
          } else {
            var j = h.lookupNode(a.node, I);
            E = j.id, A = h.isChrdev(j.mode) ? 2 : h.isDir(j.mode) ? 4 : h.isLink(j.mode) ? 10 : 8;
          }
          _ = [E >>> 0, (T = E, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[t + c >> 2] = _[0], B[t + c + 4 >> 2] = _[1], _ = [(g + 1) * s >>> 0, (T = (g + 1) * s, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[t + c + 8 >> 2] = _[0], B[t + c + 12 >> 2] = _[1], Pe[t + c + 16 >> 1] = 280, me[t + c + 18 >> 0] = A, ge(I, t + c + 19, 256), c += s, g += 1;
        }
        return h.llseek(a, g * s, 0), c;
      } catch (V) {
        if (typeof h > "u" || !(V instanceof h.ErrnoError))
          throw V;
        return -V.errno;
      }
    }
    function nl(e, t, i) {
      Ce.varargs = i;
      try {
        var a = Ce.getStreamFromFD(e);
        switch (t) {
          case 21509:
          case 21505:
            return a.tty ? 0 : -59;
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            return a.tty ? 0 : -59;
          case 21519: {
            if (!a.tty)
              return -59;
            var s = Ce.get();
            return B[s >> 2] = 0, 0;
          }
          case 21520:
            return a.tty ? -28 : -59;
          case 21531: {
            var s = Ce.get();
            return h.ioctl(a, t, s);
          }
          case 21523:
            return a.tty ? 0 : -59;
          case 21524:
            return a.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (c) {
        if (typeof h > "u" || !(c instanceof h.ErrnoError))
          throw c;
        return -c.errno;
      }
    }
    function il(e, t) {
      try {
        return e = Ce.getStr(e), Ce.doStat(h.lstat, e, t);
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function ol(e, t, i) {
      try {
        return t = Ce.getStr(t), t = Ce.calculateAt(e, t), t = ke.normalize(t), t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)), h.mkdir(t, i, 0), 0;
      } catch (a) {
        if (typeof h > "u" || !(a instanceof h.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function al(e, t, i, a) {
      try {
        t = Ce.getStr(t);
        var s = a & 256, c = a & 4096;
        return a = a & -4353, t = Ce.calculateAt(e, t, c), Ce.doStat(s ? h.lstat : h.stat, t, i);
      } catch (m) {
        if (typeof h > "u" || !(m instanceof h.ErrnoError))
          throw m;
        return -m.errno;
      }
    }
    function sl(e, t, i, a) {
      Ce.varargs = a;
      try {
        t = Ce.getStr(t), t = Ce.calculateAt(e, t);
        var s = a ? Ce.get() : 0;
        return h.open(t, i, s).fd;
      } catch (c) {
        if (typeof h > "u" || !(c instanceof h.ErrnoError))
          throw c;
        return -c.errno;
      }
    }
    function ul(e, t, i, a) {
      try {
        if (t = Ce.getStr(t), t = Ce.calculateAt(e, t), a <= 0)
          return -28;
        var s = h.readlink(t), c = Math.min(a, $e(s)), m = me[i + c];
        return ge(s, i, a + 1), me[i + c] = m, c;
      } catch (g) {
        if (typeof h > "u" || !(g instanceof h.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function ll(e, t, i, a) {
      try {
        return t = Ce.getStr(t), a = Ce.getStr(a), t = Ce.calculateAt(e, t), a = Ce.calculateAt(i, a), h.rename(t, a), 0;
      } catch (s) {
        if (typeof h > "u" || !(s instanceof h.ErrnoError))
          throw s;
        return -s.errno;
      }
    }
    function fl(e, t) {
      try {
        return e = Ce.getStr(e), Ce.doStat(h.stat, e, t);
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function cl(e, t) {
      try {
        return e = Ce.getStr(e), t = Ce.getStr(t), h.symlink(e, t), 0;
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return -i.errno;
      }
    }
    function dl(e, t, i) {
      try {
        return t = Ce.getStr(t), t = Ce.calculateAt(e, t), i === 0 ? h.unlink(t) : i === 512 ? h.rmdir(t) : R("Invalid flags passed to unlinkat"), 0;
      } catch (a) {
        if (typeof h > "u" || !(a instanceof h.ErrnoError))
          throw a;
        return -a.errno;
      }
    }
    function hl(e) {
    }
    var Lo = "To use dlopen, you need enable dynamic linking, see https://github.com/emscripten-core/emscripten/wiki/Linking";
    function pl(e, t) {
      R(Lo);
    }
    function ml(e, t) {
      R(Lo);
    }
    function _l(e, t, i, a, s) {
    }
    function Qr(e) {
      switch (e) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + e);
      }
    }
    function yl() {
      for (var e = new Array(256), t = 0; t < 256; ++t)
        e[t] = String.fromCharCode(t);
      Mo = e;
    }
    var Mo = void 0;
    function et(e) {
      for (var t = "", i = e; ue[i]; )
        t += Mo[ue[i++]];
      return t;
    }
    var _r = {}, rr = {}, Jr = {}, gl = 48, bl = 57;
    function en(e) {
      if (e === void 0)
        return "_unknown";
      e = e.replace(/[^a-zA-Z0-9_]/g, "$");
      var t = e.charCodeAt(0);
      return t >= gl && t <= bl ? "_" + e : e;
    }
    function tn(e, t) {
      return e = en(e), new Function("body", "return function " + e + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(t);
    }
    function ti(e, t) {
      var i = tn(t, function(a) {
        this.name = t, this.message = a;
        var s = new Error(a).stack;
        s !== void 0 && (this.stack = this.toString() + `
` + s.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, i;
    }
    var yr = void 0;
    function Le(e) {
      throw new yr(e);
    }
    var Bo = void 0;
    function rn(e) {
      throw new Bo(e);
    }
    function St(e, t, i) {
      e.forEach(function(g) {
        Jr[g] = t;
      });
      function a(g) {
        var E = i(g);
        E.length !== e.length && rn("Mismatched type converter count");
        for (var A = 0; A < e.length; ++A)
          It(e[A], E[A]);
      }
      var s = new Array(t.length), c = [], m = 0;
      t.forEach((g, E) => {
        rr.hasOwnProperty(g) ? s[E] = rr[g] : (c.push(g), _r.hasOwnProperty(g) || (_r[g] = []), _r[g].push(() => {
          s[E] = rr[g], ++m, m === c.length && a(s);
        }));
      }), c.length === 0 && a(s);
    }
    function It(e, t, i = {}) {
      if (!("argPackAdvance" in t))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var a = t.name;
      if (e || Le('type "' + a + '" must have a positive integer typeid pointer'), rr.hasOwnProperty(e)) {
        if (i.ignoreDuplicateRegistrations)
          return;
        Le("Cannot register type '" + a + "' twice");
      }
      if (rr[e] = t, delete Jr[e], _r.hasOwnProperty(e)) {
        var s = _r[e];
        delete _r[e], s.forEach((c) => c());
      }
    }
    function wl(e, t, i, a, s) {
      var c = Qr(i);
      t = et(t), It(e, { name: t, fromWireType: function(m) {
        return !!m;
      }, toWireType: function(m, g) {
        return g ? a : s;
      }, argPackAdvance: 8, readValueFromPointer: function(m) {
        var g;
        if (i === 1)
          g = me;
        else if (i === 2)
          g = Pe;
        else if (i === 4)
          g = B;
        else
          throw new TypeError("Unknown boolean type size: " + t);
        return this.fromWireType(g[m >> c]);
      }, destructorFunction: null });
    }
    function vl(e) {
      if (!(this instanceof Kt) || !(e instanceof Kt))
        return false;
      for (var t = this.$$.ptrType.registeredClass, i = this.$$.ptr, a = e.$$.ptrType.registeredClass, s = e.$$.ptr; t.baseClass; )
        i = t.upcast(i), t = t.baseClass;
      for (; a.baseClass; )
        s = a.upcast(s), a = a.baseClass;
      return t === a && i === s;
    }
    function El(e) {
      return { count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType };
    }
    function ri(e) {
      function t(i) {
        return i.$$.ptrType.registeredClass.name;
      }
      Le(t(e) + " instance already deleted");
    }
    var ni = false;
    function No(e) {
    }
    function xl(e) {
      e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }
    function Oo(e) {
      e.count.value -= 1;
      var t = e.count.value === 0;
      t && xl(e);
    }
    function jo(e, t, i) {
      if (t === i)
        return e;
      if (i.baseClass === void 0)
        return null;
      var a = jo(e, t, i.baseClass);
      return a === null ? null : i.downcast(a);
    }
    var Uo = {};
    function Sl() {
      return Object.keys(Dr).length;
    }
    function Tl() {
      var e = [];
      for (var t in Dr)
        Dr.hasOwnProperty(t) && e.push(Dr[t]);
      return e;
    }
    var Ir = [];
    function ii() {
      for (; Ir.length; ) {
        var e = Ir.pop();
        e.$$.deleteScheduled = false, e.delete();
      }
    }
    var Pr = void 0;
    function Cl(e) {
      Pr = e, Ir.length && Pr && Pr(ii);
    }
    function Rl() {
      n.getInheritedInstanceCount = Sl, n.getLiveInheritedInstances = Tl, n.flushPendingDeletes = ii, n.setDelayFunction = Cl;
    }
    var Dr = {};
    function Fl(e, t) {
      for (t === void 0 && Le("ptr should not be undefined"); e.baseClass; )
        t = e.upcast(t), e = e.baseClass;
      return t;
    }
    function Al(e, t) {
      return t = Fl(e, t), Dr[t];
    }
    function nn(e, t) {
      (!t.ptrType || !t.ptr) && rn("makeClassHandle requires ptr and ptrType");
      var i = !!t.smartPtrType, a = !!t.smartPtr;
      return i !== a && rn("Both smartPtrType and smartPtr must be specified"), t.count = { value: 1 }, kr(Object.create(e, { $$: { value: t } }));
    }
    function Il(e) {
      var t = this.getPointee(e);
      if (!t)
        return this.destructor(e), null;
      var i = Al(this.registeredClass, t);
      if (i !== void 0) {
        if (i.$$.count.value === 0)
          return i.$$.ptr = t, i.$$.smartPtr = e, i.clone();
        var a = i.clone();
        return this.destructor(e), a;
      }
      function s() {
        return this.isSmartPointer ? nn(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: t, smartPtrType: this, smartPtr: e }) : nn(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
      }
      var c = this.registeredClass.getActualType(t), m = Uo[c];
      if (!m)
        return s.call(this);
      var g;
      this.isConst ? g = m.constPointerType : g = m.pointerType;
      var E = jo(t, this.registeredClass, g.registeredClass);
      return E === null ? s.call(this) : this.isSmartPointer ? nn(g.registeredClass.instancePrototype, { ptrType: g, ptr: E, smartPtrType: this, smartPtr: e }) : nn(g.registeredClass.instancePrototype, { ptrType: g, ptr: E });
    }
    function kr(e) {
      return typeof FinalizationRegistry > "u" ? (kr = (t) => t, e) : (ni = new FinalizationRegistry((t) => {
        Oo(t.$$);
      }), kr = (t) => {
        var i = t.$$, a = !!i.smartPtr;
        if (a) {
          var s = { $$: i };
          ni.register(t, s, t);
        }
        return t;
      }, No = (t) => ni.unregister(t), kr(e));
    }
    function Pl() {
      if (this.$$.ptr || ri(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var e = kr(Object.create(Object.getPrototypeOf(this), { $$: { value: El(this.$$) } }));
      return e.$$.count.value += 1, e.$$.deleteScheduled = false, e;
    }
    function Dl() {
      this.$$.ptr || ri(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Le("Object already scheduled for deletion"), No(this), Oo(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }
    function kl() {
      return !this.$$.ptr;
    }
    function Ll() {
      return this.$$.ptr || ri(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && Le("Object already scheduled for deletion"), Ir.push(this), Ir.length === 1 && Pr && Pr(ii), this.$$.deleteScheduled = true, this;
    }
    function Ml() {
      Kt.prototype.isAliasOf = vl, Kt.prototype.clone = Pl, Kt.prototype.delete = Dl, Kt.prototype.isDeleted = kl, Kt.prototype.deleteLater = Ll;
    }
    function Kt() {
    }
    function oi(e, t, i) {
      if (e[t].overloadTable === void 0) {
        var a = e[t];
        e[t] = function() {
          return e[t].overloadTable.hasOwnProperty(arguments.length) || Le("Function '" + i + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments);
        }, e[t].overloadTable = [], e[t].overloadTable[a.argCount] = a;
      }
    }
    function ai(e, t, i) {
      n.hasOwnProperty(e) ? ((i === void 0 || n[e].overloadTable !== void 0 && n[e].overloadTable[i] !== void 0) && Le("Cannot register public name '" + e + "' twice"), oi(n, e, e), n.hasOwnProperty(i) && Le("Cannot register multiple overloads of a function with the same number of arguments (" + i + ")!"), n[e].overloadTable[i] = t) : (n[e] = t, i !== void 0 && (n[e].numArguments = i));
    }
    function Bl(e, t, i, a, s, c, m, g) {
      this.name = e, this.constructor = t, this.instancePrototype = i, this.rawDestructor = a, this.baseClass = s, this.getActualType = c, this.upcast = m, this.downcast = g, this.pureVirtualFunctions = [];
    }
    function on(e, t, i) {
      for (; t !== i; )
        t.upcast || Le("Expected null or instance of " + i.name + ", got an instance of " + t.name), e = t.upcast(e), t = t.baseClass;
      return e;
    }
    function Nl(e, t) {
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), 0;
      t.$$ || Le('Cannot pass "' + fi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name);
      var i = t.$$.ptrType.registeredClass, a = on(t.$$.ptr, i, this.registeredClass);
      return a;
    }
    function Ol(e, t) {
      var i;
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), this.isSmartPointer ? (i = this.rawConstructor(), e !== null && e.push(this.rawDestructor, i), i) : 0;
      t.$$ || Le('Cannot pass "' + fi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && t.$$.ptrType.isConst && Le("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
      var a = t.$$.ptrType.registeredClass;
      if (i = on(t.$$.ptr, a, this.registeredClass), this.isSmartPointer)
        switch (t.$$.smartPtr === void 0 && Le("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            t.$$.smartPtrType === this ? i = t.$$.smartPtr : Le("Cannot convert argument of type " + (t.$$.smartPtrType ? t.$$.smartPtrType.name : t.$$.ptrType.name) + " to parameter type " + this.name);
            break;
          case 1:
            i = t.$$.smartPtr;
            break;
          case 2:
            if (t.$$.smartPtrType === this)
              i = t.$$.smartPtr;
            else {
              var s = t.clone();
              i = this.rawShare(i, Ze.toHandle(function() {
                s.delete();
              })), e !== null && e.push(this.rawDestructor, i);
            }
            break;
          default:
            Le("Unsupporting sharing policy");
        }
      return i;
    }
    function jl(e, t) {
      if (t === null)
        return this.isReference && Le("null is not a valid " + this.name), 0;
      t.$$ || Le('Cannot pass "' + fi(t) + '" as a ' + this.name), t.$$.ptr || Le("Cannot pass deleted object as a pointer of type " + this.name), t.$$.ptrType.isConst && Le("Cannot convert argument of type " + t.$$.ptrType.name + " to parameter type " + this.name);
      var i = t.$$.ptrType.registeredClass, a = on(t.$$.ptr, i, this.registeredClass);
      return a;
    }
    function an(e) {
      return this.fromWireType(B[e >> 2]);
    }
    function Ul(e) {
      return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
    }
    function Wl(e) {
      this.rawDestructor && this.rawDestructor(e);
    }
    function $l(e) {
      e !== null && e.delete();
    }
    function Gl() {
      Pt.prototype.getPointee = Ul, Pt.prototype.destructor = Wl, Pt.prototype.argPackAdvance = 8, Pt.prototype.readValueFromPointer = an, Pt.prototype.deleteObject = $l, Pt.prototype.fromWireType = Il;
    }
    function Pt(e, t, i, a, s, c, m, g, E, A, I) {
      this.name = e, this.registeredClass = t, this.isReference = i, this.isConst = a, this.isSmartPointer = s, this.pointeeType = c, this.sharingPolicy = m, this.rawGetPointee = g, this.rawConstructor = E, this.rawShare = A, this.rawDestructor = I, !s && t.baseClass === void 0 ? a ? (this.toWireType = Nl, this.destructorFunction = null) : (this.toWireType = jl, this.destructorFunction = null) : this.toWireType = Ol;
    }
    function Wo(e, t, i) {
      n.hasOwnProperty(e) || rn("Replacing nonexistant public symbol"), n[e].overloadTable !== void 0 && i !== void 0 ? n[e].overloadTable[i] = t : (n[e] = t, n[e].argCount = i);
    }
    function Vl(e, t, i) {
      var a = n["dynCall_" + e];
      return i && i.length ? a.apply(null, [t].concat(i)) : a.call(null, t);
    }
    var sn = [];
    function Yt(e) {
      var t = sn[e];
      return t || (e >= sn.length && (sn.length = e + 1), sn[e] = t = ct.get(e)), t;
    }
    function zl(e, t, i) {
      if (e.includes("j"))
        return Vl(e, t, i);
      var a = Yt(t).apply(null, i);
      return a;
    }
    function Hl(e, t) {
      var i = [];
      return function() {
        return i.length = 0, Object.assign(i, arguments), zl(e, t, i);
      };
    }
    function ht(e, t) {
      e = et(e);
      function i() {
        return e.includes("j") ? Hl(e, t) : Yt(t);
      }
      var a = i();
      return typeof a != "function" && Le("unknown function pointer with signature " + e + ": " + t), a;
    }
    var $o = void 0;
    function Go(e) {
      var t = fa(e), i = et(t);
      return Dt(t), i;
    }
    function nr(e, t) {
      var i = [], a = {};
      function s(c) {
        if (!a[c] && !rr[c]) {
          if (Jr[c]) {
            Jr[c].forEach(s);
            return;
          }
          i.push(c), a[c] = true;
        }
      }
      throw t.forEach(s), new $o(e + ": " + i.map(Go).join([", "]));
    }
    function Kl(e, t, i, a, s, c, m, g, E, A, I, U, j) {
      I = et(I), c = ht(s, c), g && (g = ht(m, g)), A && (A = ht(E, A)), j = ht(U, j);
      var V = en(I);
      ai(V, function() {
        nr("Cannot construct " + I + " due to unbound types", [a]);
      }), St([e, t, i], a ? [a] : [], function(J) {
        J = J[0];
        var ce, he;
        a ? (ce = J.registeredClass, he = ce.instancePrototype) : he = Kt.prototype;
        var we = tn(V, function() {
          if (Object.getPrototypeOf(this) !== G)
            throw new yr("Use 'new' to construct " + I);
          if (ie.constructor_body === void 0)
            throw new yr(I + " has no accessible constructor");
          var ae = ie.constructor_body[arguments.length];
          if (ae === void 0)
            throw new yr("Tried to invoke ctor of " + I + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(ie.constructor_body).toString() + ") parameters instead!");
          return ae.apply(this, arguments);
        }), G = Object.create(he, { constructor: { value: we } });
        we.prototype = G;
        var ie = new Bl(I, we, G, j, ce, c, g, A), ve = new Pt(I, ie, true, false, false), Ee = new Pt(I + "*", ie, false, false, false), Me = new Pt(I + " const*", ie, false, true, false);
        return Uo[e] = { pointerType: Ee, constPointerType: Me }, Wo(V, we), [ve, Ee, Me];
      });
    }
    function Vo(e, t) {
      if (!(e instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
      var i = tn(e.name || "unknownFunctionName", function() {
      });
      i.prototype = e.prototype;
      var a = new i(), s = e.apply(a, t);
      return s instanceof Object ? s : a;
    }
    function si(e) {
      for (; e.length; ) {
        var t = e.pop(), i = e.pop();
        i(t);
      }
    }
    function un(e, t, i, a, s) {
      var c = t.length;
      c < 2 && Le("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var m = t[1] !== null && i !== null, g = false, E = 1; E < t.length; ++E)
        if (t[E] !== null && t[E].destructorFunction === void 0) {
          g = true;
          break;
        }
      for (var A = t[0].name !== "void", I = "", U = "", E = 0; E < c - 2; ++E)
        I += (E !== 0 ? ", " : "") + "arg" + E, U += (E !== 0 ? ", " : "") + "arg" + E + "Wired";
      var j = "return function " + en(e) + "(" + I + `) {
if (arguments.length !== ` + (c - 2) + `) {
throwBindingError('function ` + e + " called with ' + arguments.length + ' arguments, expected " + (c - 2) + ` args!');
}
`;
      g && (j += `var destructors = [];
`);
      var V = g ? "destructors" : "null", J = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], ce = [Le, a, s, si, t[0], t[1]];
      m && (j += "var thisWired = classParam.toWireType(" + V + `, this);
`);
      for (var E = 0; E < c - 2; ++E)
        j += "var arg" + E + "Wired = argType" + E + ".toWireType(" + V + ", arg" + E + "); // " + t[E + 2].name + `
`, J.push("argType" + E), ce.push(t[E + 2]);
      if (m && (U = "thisWired" + (U.length > 0 ? ", " : "") + U), j += (A ? "var rv = " : "") + "invoker(fn" + (U.length > 0 ? ", " : "") + U + `);
`, g)
        j += `runDestructors(destructors);
`;
      else
        for (var E = m ? 1 : 2; E < t.length; ++E) {
          var he = E === 1 ? "thisWired" : "arg" + (E - 2) + "Wired";
          t[E].destructorFunction !== null && (j += he + "_dtor(" + he + "); // " + t[E].name + `
`, J.push(he + "_dtor"), ce.push(t[E].destructorFunction));
        }
      A && (j += `var ret = retType.fromWireType(rv);
return ret;
`), j += `}
`, J.push(j);
      var we = Vo(Function, J).apply(null, ce);
      return we;
    }
    function ln(e, t) {
      for (var i = [], a = 0; a < e; a++)
        i.push(ne[t + a * 4 >> 2]);
      return i;
    }
    function Yl(e, t, i, a, s, c, m) {
      var g = ln(i, a);
      t = et(t), c = ht(s, c), St([], [e], function(E) {
        E = E[0];
        var A = E.name + "." + t;
        function I() {
          nr("Cannot call " + A + " due to unbound types", g);
        }
        t.startsWith("@@") && (t = Symbol[t.substring(2)]);
        var U = E.registeredClass.constructor;
        return U[t] === void 0 ? (I.argCount = i - 1, U[t] = I) : (oi(U, t, A), U[t].overloadTable[i - 1] = I), St([], g, function(j) {
          var V = [j[0], null].concat(j.slice(1)), J = un(A, V, null, c, m);
          return U[t].overloadTable === void 0 ? (J.argCount = i - 1, U[t] = J) : U[t].overloadTable[i - 1] = J, [];
        }), [];
      });
    }
    function Xl(e, t, i, a, s, c) {
      Ue(t > 0);
      var m = ln(t, i);
      s = ht(a, s), St([], [e], function(g) {
        g = g[0];
        var E = "constructor " + g.name;
        if (g.registeredClass.constructor_body === void 0 && (g.registeredClass.constructor_body = []), g.registeredClass.constructor_body[t - 1] !== void 0)
          throw new yr("Cannot register multiple constructors with identical number of parameters (" + (t - 1) + ") for class '" + g.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return g.registeredClass.constructor_body[t - 1] = () => {
          nr("Cannot construct " + g.name + " due to unbound types", m);
        }, St([], m, function(A) {
          return A.splice(1, 0, null), g.registeredClass.constructor_body[t - 1] = un(E, A, null, s, c), [];
        }), [];
      });
    }
    function Zl(e, t, i, a, s, c, m, g) {
      var E = ln(i, a);
      t = et(t), c = ht(s, c), St([], [e], function(A) {
        A = A[0];
        var I = A.name + "." + t;
        t.startsWith("@@") && (t = Symbol[t.substring(2)]), g && A.registeredClass.pureVirtualFunctions.push(t);
        function U() {
          nr("Cannot call " + I + " due to unbound types", E);
        }
        var j = A.registeredClass.instancePrototype, V = j[t];
        return V === void 0 || V.overloadTable === void 0 && V.className !== A.name && V.argCount === i - 2 ? (U.argCount = i - 2, U.className = A.name, j[t] = U) : (oi(j, t, I), j[t].overloadTable[i - 2] = U), St([], E, function(J) {
          var ce = un(I, J, A, c, m);
          return j[t].overloadTable === void 0 ? (ce.argCount = i - 2, j[t] = ce) : j[t].overloadTable[i - 2] = ce, [];
        }), [];
      });
    }
    function zo(e, t, i) {
      return e instanceof Object || Le(i + ' with invalid "this": ' + e), e instanceof t.registeredClass.constructor || Le(i + ' incompatible with "this" of type ' + e.constructor.name), e.$$.ptr || Le("cannot call emscripten binding method " + i + " on deleted object"), on(e.$$.ptr, e.$$.ptrType.registeredClass, t.registeredClass);
    }
    function ql(e, t, i, a, s, c, m, g, E, A) {
      t = et(t), s = ht(a, s), St([], [e], function(I) {
        I = I[0];
        var U = I.name + "." + t, j = { get: function() {
          nr("Cannot access " + U + " due to unbound types", [i, m]);
        }, enumerable: true, configurable: true };
        return E ? j.set = () => {
          nr("Cannot access " + U + " due to unbound types", [i, m]);
        } : j.set = (V) => {
          Le(U + " is a read-only property");
        }, Object.defineProperty(I.registeredClass.instancePrototype, t, j), St([], E ? [i, m] : [i], function(V) {
          var J = V[0], ce = { get: function() {
            var we = zo(this, I, U + " getter");
            return J.fromWireType(s(c, we));
          }, enumerable: true };
          if (E) {
            E = ht(g, E);
            var he = V[1];
            ce.set = function(we) {
              var G = zo(this, I, U + " setter"), ie = [];
              E(A, G, he.toWireType(ie, we)), si(ie);
            };
          }
          return Object.defineProperty(I.registeredClass.instancePrototype, t, ce), [];
        }), [];
      });
    }
    var ui = [], Tt = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
    function li(e) {
      e > 4 && --Tt[e].refcount === 0 && (Tt[e] = void 0, ui.push(e));
    }
    function Ql() {
      for (var e = 0, t = 5; t < Tt.length; ++t)
        Tt[t] !== void 0 && ++e;
      return e;
    }
    function Jl() {
      for (var e = 5; e < Tt.length; ++e)
        if (Tt[e] !== void 0)
          return Tt[e];
      return null;
    }
    function ef() {
      n.count_emval_handles = Ql, n.get_first_emval = Jl;
    }
    var Ze = { toValue: (e) => (e || Le("Cannot use deleted val. handle = " + e), Tt[e].value), toHandle: (e) => {
      switch (e) {
        case void 0:
          return 1;
        case null:
          return 2;
        case true:
          return 3;
        case false:
          return 4;
        default: {
          var t = ui.length ? ui.pop() : Tt.length;
          return Tt[t] = { refcount: 1, value: e }, t;
        }
      }
    } };
    function tf(e, t) {
      t = et(t), It(e, { name: t, fromWireType: function(i) {
        var a = Ze.toValue(i);
        return li(i), a;
      }, toWireType: function(i, a) {
        return Ze.toHandle(a);
      }, argPackAdvance: 8, readValueFromPointer: an, destructorFunction: null });
    }
    function rf(e, t, i) {
      switch (t) {
        case 0:
          return function(a) {
            var s = i ? me : ue;
            return this.fromWireType(s[a]);
          };
        case 1:
          return function(a) {
            var s = i ? Pe : Te;
            return this.fromWireType(s[a >> 1]);
          };
        case 2:
          return function(a) {
            var s = i ? B : ne;
            return this.fromWireType(s[a >> 2]);
          };
        default:
          throw new TypeError("Unknown integer type: " + e);
      }
    }
    function nf(e, t, i, a) {
      var s = Qr(i);
      t = et(t);
      function c() {
      }
      c.values = {}, It(e, { name: t, constructor: c, fromWireType: function(m) {
        return this.constructor.values[m];
      }, toWireType: function(m, g) {
        return g.value;
      }, argPackAdvance: 8, readValueFromPointer: rf(t, s, a), destructorFunction: null }), ai(t, c);
    }
    function fn(e, t) {
      var i = rr[e];
      return i === void 0 && Le(t + " has unknown type " + Go(e)), i;
    }
    function of(e, t, i) {
      var a = fn(e, "enum");
      t = et(t);
      var s = a.constructor, c = Object.create(a.constructor.prototype, { value: { value: i }, constructor: { value: tn(a.name + "_" + t, function() {
      }) } });
      s.values[i] = c, s[t] = c;
    }
    function fi(e) {
      if (e === null)
        return "null";
      var t = typeof e;
      return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
    }
    function af(e, t) {
      switch (t) {
        case 2:
          return function(i) {
            return this.fromWireType(te[i >> 2]);
          };
        case 3:
          return function(i) {
            return this.fromWireType(be[i >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + e);
      }
    }
    function sf(e, t, i) {
      var a = Qr(i);
      t = et(t), It(e, { name: t, fromWireType: function(s) {
        return s;
      }, toWireType: function(s, c) {
        return c;
      }, argPackAdvance: 8, readValueFromPointer: af(t, a), destructorFunction: null });
    }
    function uf(e, t, i, a, s, c) {
      var m = ln(t, i);
      e = et(e), s = ht(a, s), ai(e, function() {
        nr("Cannot call " + e + " due to unbound types", m);
      }, t - 1), St([], m, function(g) {
        var E = [g[0], null].concat(g.slice(1));
        return Wo(e, un(e, E, null, s, c), t - 1), [];
      });
    }
    function lf(e, t, i) {
      switch (t) {
        case 0:
          return i ? function(s) {
            return me[s];
          } : function(s) {
            return ue[s];
          };
        case 1:
          return i ? function(s) {
            return Pe[s >> 1];
          } : function(s) {
            return Te[s >> 1];
          };
        case 2:
          return i ? function(s) {
            return B[s >> 2];
          } : function(s) {
            return ne[s >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + e);
      }
    }
    function ff(e, t, i, a, s) {
      t = et(t);
      var c = Qr(i), m = (I) => I;
      if (a === 0) {
        var g = 32 - 8 * i;
        m = (I) => I << g >>> g;
      }
      var E = t.includes("unsigned"), A;
      E ? A = function(I, U) {
        return U >>> 0;
      } : A = function(I, U) {
        return U;
      }, It(e, { name: t, fromWireType: m, toWireType: A, argPackAdvance: 8, readValueFromPointer: lf(t, c, a !== 0), destructorFunction: null });
    }
    function cf(e, t, i) {
      var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], s = a[t];
      function c(m) {
        m = m >> 2;
        var g = ne, E = g[m], A = g[m + 1];
        return new s(De, A, E);
      }
      i = et(i), It(e, { name: i, fromWireType: c, argPackAdvance: 8, readValueFromPointer: c }, { ignoreDuplicateRegistrations: true });
    }
    function df(e, t, i, a, s, c, m, g, E, A, I, U) {
      i = et(i), c = ht(s, c), g = ht(m, g), A = ht(E, A), U = ht(I, U), St([e], [t], function(j) {
        j = j[0];
        var V = new Pt(i, j.registeredClass, false, false, true, j, a, c, g, A, U);
        return [V];
      });
    }
    function hf(e, t) {
      t = et(t);
      var i = t === "std::string";
      It(e, { name: t, fromWireType: function(a) {
        var s = ne[a >> 2], c = a + 4, m;
        if (i)
          for (var g = c, E = 0; E <= s; ++E) {
            var A = c + E;
            if (E == s || ue[A] == 0) {
              var I = A - g, U = Se(g, I);
              m === void 0 ? m = U : (m += String.fromCharCode(0), m += U), g = A + 1;
            }
          }
        else {
          for (var j = new Array(s), E = 0; E < s; ++E)
            j[E] = String.fromCharCode(ue[c + E]);
          m = j.join("");
        }
        return Dt(a), m;
      }, toWireType: function(a, s) {
        s instanceof ArrayBuffer && (s = new Uint8Array(s));
        var c, m = typeof s == "string";
        m || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Int8Array || Le("Cannot pass non-string to std::string"), i && m ? c = $e(s) : c = s.length;
        var g = Ct(4 + c + 1), E = g + 4;
        if (ne[g >> 2] = c, i && m)
          ge(s, E, c + 1);
        else if (m)
          for (var A = 0; A < c; ++A) {
            var I = s.charCodeAt(A);
            I > 255 && (Dt(E), Le("String has UTF-16 code units that do not fit in 8 bits")), ue[E + A] = I;
          }
        else
          for (var A = 0; A < c; ++A)
            ue[E + A] = s[A];
        return a !== null && a.push(Dt, g), g;
      }, argPackAdvance: 8, readValueFromPointer: an, destructorFunction: function(a) {
        Dt(a);
      } });
    }
    var Ho = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function pf(e, t) {
      for (var i = e, a = i >> 1, s = a + t / 2; !(a >= s) && Te[a]; )
        ++a;
      if (i = a << 1, i - e > 32 && Ho)
        return Ho.decode(ue.subarray(e, i));
      for (var c = "", m = 0; !(m >= t / 2); ++m) {
        var g = Pe[e + m * 2 >> 1];
        if (g == 0)
          break;
        c += String.fromCharCode(g);
      }
      return c;
    }
    function mf(e, t, i) {
      if (i === void 0 && (i = 2147483647), i < 2)
        return 0;
      i -= 2;
      for (var a = t, s = i < e.length * 2 ? i / 2 : e.length, c = 0; c < s; ++c) {
        var m = e.charCodeAt(c);
        Pe[t >> 1] = m, t += 2;
      }
      return Pe[t >> 1] = 0, t - a;
    }
    function _f(e) {
      return e.length * 2;
    }
    function yf(e, t) {
      for (var i = 0, a = ""; !(i >= t / 4); ) {
        var s = B[e + i * 4 >> 2];
        if (s == 0)
          break;
        if (++i, s >= 65536) {
          var c = s - 65536;
          a += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
        } else
          a += String.fromCharCode(s);
      }
      return a;
    }
    function gf(e, t, i) {
      if (i === void 0 && (i = 2147483647), i < 4)
        return 0;
      for (var a = t, s = a + i - 4, c = 0; c < e.length; ++c) {
        var m = e.charCodeAt(c);
        if (m >= 55296 && m <= 57343) {
          var g = e.charCodeAt(++c);
          m = 65536 + ((m & 1023) << 10) | g & 1023;
        }
        if (B[t >> 2] = m, t += 4, t + 4 > s)
          break;
      }
      return B[t >> 2] = 0, t - a;
    }
    function bf(e) {
      for (var t = 0, i = 0; i < e.length; ++i) {
        var a = e.charCodeAt(i);
        a >= 55296 && a <= 57343 && ++i, t += 4;
      }
      return t;
    }
    function wf(e, t, i) {
      i = et(i);
      var a, s, c, m, g;
      t === 2 ? (a = pf, s = mf, m = _f, c = () => Te, g = 1) : t === 4 && (a = yf, s = gf, m = bf, c = () => ne, g = 2), It(e, { name: i, fromWireType: function(E) {
        for (var A = ne[E >> 2], I = c(), U, j = E + 4, V = 0; V <= A; ++V) {
          var J = E + 4 + V * t;
          if (V == A || I[J >> g] == 0) {
            var ce = J - j, he = a(j, ce);
            U === void 0 ? U = he : (U += String.fromCharCode(0), U += he), j = J + t;
          }
        }
        return Dt(E), U;
      }, toWireType: function(E, A) {
        typeof A != "string" && Le("Cannot pass non-string to C++ string type " + i);
        var I = m(A), U = Ct(4 + I + t);
        return ne[U >> 2] = I >> g, s(A, U + 4, I + t), E !== null && E.push(Dt, U), U;
      }, argPackAdvance: 8, readValueFromPointer: an, destructorFunction: function(E) {
        Dt(E);
      } });
    }
    function vf(e, t) {
      t = et(t), It(e, { isVoid: true, name: t, argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(i, a) {
      } });
    }
    function Ef(e) {
      var t = He.xhrs[e];
      t && (delete He.xhrs[e], t.readyState > 0 && t.readyState < 4 && t.abort());
    }
    var xf = true;
    function Sf() {
      return xf;
    }
    function Tf(e, t, i) {
      e = Ze.toValue(e), t = fn(t, "emval::as");
      var a = [], s = Ze.toHandle(a);
      return ne[i >> 2] = s, t.toWireType(a, e);
    }
    function Ko(e, t) {
      for (var i = new Array(e), a = 0; a < e; ++a)
        i[a] = fn(ne[t + a * _e >> 2], "parameter " + a);
      return i;
    }
    function Cf(e, t, i, a) {
      e = Ze.toValue(e);
      for (var s = Ko(t, i), c = new Array(t), m = 0; m < t; ++m) {
        var g = s[m];
        c[m] = g.readValueFromPointer(a), a += g.argPackAdvance;
      }
      var E = e.apply(void 0, c);
      return Ze.toHandle(E);
    }
    var Rf = {};
    function ci(e) {
      var t = Rf[e];
      return t === void 0 ? et(e) : t;
    }
    var di = [];
    function Ff(e, t, i, a) {
      e = di[e], t = Ze.toValue(t), i = ci(i), e(t, i, null, a);
    }
    function Af(e) {
      var t = di.length;
      return di.push(e), t;
    }
    var Yo = [];
    function If(e, t) {
      var i = Ko(e, t), a = i[0], s = a.name + "_$" + i.slice(1).map(function(J) {
        return J.name;
      }).join("_") + "$", c = Yo[s];
      if (c !== void 0)
        return c;
      for (var m = ["retType"], g = [a], E = "", A = 0; A < e - 1; ++A)
        E += (A !== 0 ? ", " : "") + "arg" + A, m.push("argType" + A), g.push(i[1 + A]);
      for (var I = en("methodCaller_" + s), U = "return function " + I + `(handle, name, destructors, args) {
`, j = 0, A = 0; A < e - 1; ++A)
        U += "    var arg" + A + " = argType" + A + ".readValueFromPointer(args" + (j ? "+" + j : "") + `);
`, j += i[A + 1].argPackAdvance;
      U += "    var rv = handle[name](" + E + `);
`;
      for (var A = 0; A < e - 1; ++A)
        i[A + 1].deleteObject && (U += "    argType" + A + ".deleteObject(arg" + A + `);
`);
      a.isVoid || (U += `    return retType.toWireType(destructors, rv);
`), U += `};
`, m.push(U);
      var V = Vo(Function, m).apply(null, g);
      return c = Af(V), Yo[s] = c, c;
    }
    function Pf(e) {
      return e = ci(e), Ze.toHandle(n[e]);
    }
    function Df(e, t) {
      return e = Ze.toValue(e), t = Ze.toValue(t), Ze.toHandle(e[t]);
    }
    function kf(e) {
      e > 4 && (Tt[e].refcount += 1);
    }
    function Lf(e) {
      return e = Ze.toValue(e), typeof e == "number";
    }
    function Mf(e) {
      return Ze.toHandle(ci(e));
    }
    function Bf(e) {
      var t = Ze.toValue(e);
      si(t), li(e);
    }
    function Nf(e, t, i) {
      e = Ze.toValue(e), t = Ze.toValue(t), i = Ze.toValue(i), e[t] = i;
    }
    function Of(e, t) {
      e = fn(e, "_emval_take_value");
      var i = e.readValueFromPointer(t);
      return Ze.toHandle(i);
    }
    function Xo(e) {
      return ne[e >> 2] + B[e + 4 >> 2] * 4294967296;
    }
    function jf(e, t) {
      var i = new Date(Xo(e) * 1e3);
      B[t >> 2] = i.getUTCSeconds(), B[t + 4 >> 2] = i.getUTCMinutes(), B[t + 8 >> 2] = i.getUTCHours(), B[t + 12 >> 2] = i.getUTCDate(), B[t + 16 >> 2] = i.getUTCMonth(), B[t + 20 >> 2] = i.getUTCFullYear() - 1900, B[t + 24 >> 2] = i.getUTCDay();
      var a = Date.UTC(i.getUTCFullYear(), 0, 1, 0, 0, 0, 0), s = (i.getTime() - a) / (1e3 * 60 * 60 * 24) | 0;
      B[t + 28 >> 2] = s;
    }
    function Lr(e) {
      return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
    }
    var Uf = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Wf = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function Zo(e) {
      var t = Lr(e.getFullYear()), i = t ? Uf : Wf, a = i[e.getMonth()] + e.getDate() - 1;
      return a;
    }
    function $f(e, t) {
      var i = new Date(Xo(e) * 1e3);
      B[t >> 2] = i.getSeconds(), B[t + 4 >> 2] = i.getMinutes(), B[t + 8 >> 2] = i.getHours(), B[t + 12 >> 2] = i.getDate(), B[t + 16 >> 2] = i.getMonth(), B[t + 20 >> 2] = i.getFullYear() - 1900, B[t + 24 >> 2] = i.getDay();
      var a = Zo(i) | 0;
      B[t + 28 >> 2] = a, B[t + 36 >> 2] = -(i.getTimezoneOffset() * 60);
      var s = new Date(i.getFullYear(), 0, 1), c = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(), m = s.getTimezoneOffset(), g = (c != m && i.getTimezoneOffset() == Math.min(m, c)) | 0;
      B[t + 32 >> 2] = g;
    }
    function Gf(e) {
      var t = new Date(B[e + 20 >> 2] + 1900, B[e + 16 >> 2], B[e + 12 >> 2], B[e + 8 >> 2], B[e + 4 >> 2], B[e >> 2], 0), i = B[e + 32 >> 2], a = t.getTimezoneOffset(), s = new Date(t.getFullYear(), 0, 1), c = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), m = s.getTimezoneOffset(), g = Math.min(m, c);
      if (i < 0)
        B[e + 32 >> 2] = +(c != m && g == a);
      else if (i > 0 != (g == a)) {
        var E = Math.max(m, c), A = i > 0 ? g : E;
        t.setTime(t.getTime() + (A - a) * 6e4);
      }
      B[e + 24 >> 2] = t.getDay();
      var I = Zo(t) | 0;
      return B[e + 28 >> 2] = I, B[e >> 2] = t.getSeconds(), B[e + 4 >> 2] = t.getMinutes(), B[e + 8 >> 2] = t.getHours(), B[e + 12 >> 2] = t.getDate(), B[e + 16 >> 2] = t.getMonth(), B[e + 20 >> 2] = t.getYear(), t.getTime() / 1e3 | 0;
    }
    function Vf(e, t, i, a, s, c, m) {
      try {
        var g = Ce.getStreamFromFD(a), E = h.mmap(g, e, s, t, i), A = E.ptr;
        return B[c >> 2] = E.allocated, ne[m >> 2] = A, 0;
      } catch (I) {
        if (typeof h > "u" || !(I instanceof h.ErrnoError))
          throw I;
        return -I.errno;
      }
    }
    function zf(e, t, i, a, s, c) {
      try {
        var m = Ce.getStreamFromFD(s);
        i & 2 && Ce.doMsync(e, m, t, a, c), h.munmap(m);
      } catch (g) {
        if (typeof h > "u" || !(g instanceof h.ErrnoError))
          throw g;
        return -g.errno;
      }
    }
    function cn(e) {
      var t = $e(e) + 1, i = Ct(t);
      return i && oe(e, me, i, t), i;
    }
    function Hf(e, t, i) {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(a, 0, 1), c = new Date(a, 6, 1), m = s.getTimezoneOffset(), g = c.getTimezoneOffset(), E = Math.max(m, g);
      ne[e >> 2] = E * 60, B[t >> 2] = +(m != g);
      function A(J) {
        var ce = J.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return ce ? ce[1] : "GMT";
      }
      var I = A(s), U = A(c), j = cn(I), V = cn(U);
      g < m ? (ne[i >> 2] = j, ne[i + 4 >> 2] = V) : (ne[i >> 2] = V, ne[i + 4 >> 2] = j);
    }
    function Kf() {
      R("");
    }
    function hi(e, t) {
      if ($.mainLoop.timingMode = e, $.mainLoop.timingValue = t, !$.mainLoop.func)
        return 1;
      if ($.mainLoop.running || ($.mainLoop.running = true), e == 0)
        $.mainLoop.scheduler = function() {
          var m = Math.max(0, $.mainLoop.tickStartTime + t - dn()) | 0;
          setTimeout($.mainLoop.runner, m);
        }, $.mainLoop.method = "timeout";
      else if (e == 1)
        $.mainLoop.scheduler = function() {
          $.requestAnimationFrame($.mainLoop.runner);
        }, $.mainLoop.method = "rAF";
      else if (e == 2) {
        if (typeof setImmediate > "u") {
          var i = [], a = "setimmediate", s = (c) => {
            (c.data === a || c.data.target === a) && (c.stopPropagation(), i.shift()());
          };
          addEventListener("message", s, true), setImmediate = function(m) {
            i.push(m), postMessage(a, "*");
          };
        }
        $.mainLoop.scheduler = function() {
          setImmediate($.mainLoop.runner);
        }, $.mainLoop.method = "immediate";
      }
      return 0;
    }
    var dn;
    dn = () => performance.now();
    function Yf(e) {
      ye = e, _t() || (n.onExit && n.onExit(e), Ne = true), y(e, new Re(e));
    }
    function Xf(e, t) {
      ye = e, Yf(e);
    }
    var Zf = Xf;
    function qf(e) {
      if (e instanceof Re || e == "unwind")
        return ye;
      y(1, e);
    }
    function Qf(e, t, i, a, s) {
      Ue(!$.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), $.mainLoop.func = e, $.mainLoop.arg = a;
      var c = $.mainLoop.currentlyRunningMainloop;
      function m() {
        return !(c < $.mainLoop.currentlyRunningMainloop);
      }
      if ($.mainLoop.running = false, $.mainLoop.runner = function() {
        if (!Ne) {
          if ($.mainLoop.queue.length > 0) {
            var E = Date.now(), A = $.mainLoop.queue.shift();
            if (A.func(A.arg), $.mainLoop.remainingBlockers) {
              var I = $.mainLoop.remainingBlockers, U = I % 1 == 0 ? I - 1 : Math.floor(I);
              A.counted ? $.mainLoop.remainingBlockers = U : (U = U + 0.5, $.mainLoop.remainingBlockers = (8 * I + U) / 9);
            }
            if (z('main loop blocker "' + A.name + '" took ' + (Date.now() - E) + " ms"), $.mainLoop.updateStatus(), !m())
              return;
            setTimeout($.mainLoop.runner, 0);
            return;
          }
          if (m()) {
            if ($.mainLoop.currentFrameNumber = $.mainLoop.currentFrameNumber + 1 | 0, $.mainLoop.timingMode == 1 && $.mainLoop.timingValue > 1 && $.mainLoop.currentFrameNumber % $.mainLoop.timingValue != 0) {
              $.mainLoop.scheduler();
              return;
            } else
              $.mainLoop.timingMode == 0 && ($.mainLoop.tickStartTime = dn());
            $.mainLoop.runIter(e), m() && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), $.mainLoop.scheduler());
          }
        }
      }, s || (t && t > 0 ? hi(0, 1e3 / t) : hi(1, 1), $.mainLoop.scheduler()), i)
        throw "unwind";
    }
    function hn(e) {
      if (!Ne)
        try {
          e();
        } catch (t) {
          qf(t);
        }
    }
    function qo(e, t) {
      return setTimeout(function() {
        hn(e);
      }, t);
    }
    function Mr(e) {
      Mr.shown || (Mr.shown = {}), Mr.shown[e] || (Mr.shown[e] = 1, pe(e));
    }
    var $ = { mainLoop: { running: false, scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function() {
      $.mainLoop.scheduler = null, $.mainLoop.currentlyRunningMainloop++;
    }, resume: function() {
      $.mainLoop.currentlyRunningMainloop++;
      var e = $.mainLoop.timingMode, t = $.mainLoop.timingValue, i = $.mainLoop.func;
      $.mainLoop.func = null, Qf(i, 0, false, $.mainLoop.arg, true), hi(e, t), $.mainLoop.scheduler();
    }, updateStatus: function() {
      if (n.setStatus) {
        var e = n.statusMessage || "Please wait...", t = $.mainLoop.remainingBlockers, i = $.mainLoop.expectedBlockers;
        t ? t < i ? n.setStatus(e + " (" + (i - t) + "/" + i + ")") : n.setStatus(e) : n.setStatus("");
      }
    }, runIter: function(e) {
      if (!Ne) {
        if (n.preMainLoop) {
          var t = n.preMainLoop();
          if (t === false)
            return;
        }
        hn(e), n.postMainLoop && n.postMainLoop();
      }
    } }, isFullscreen: false, pointerLock: false, moduleContextCreatedCallbacks: [], workers: [], init: function() {
      if (n.preloadPlugins || (n.preloadPlugins = []), $.initted)
        return;
      $.initted = true;
      try {
        new Blob(), $.hasBlobConstructor = true;
      } catch {
        $.hasBlobConstructor = false, pe("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      $.BlobBuilder = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : $.hasBlobConstructor ? null : pe("warning: no BlobBuilder"), $.URLObject = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : void 0, !n.noImageDecoding && typeof $.URLObject > "u" && (pe("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), n.noImageDecoding = true);
      var e = {};
      e.canHandle = function(c) {
        return !n.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(c);
      }, e.handle = function(c, m, g, E) {
        var A = null;
        if ($.hasBlobConstructor)
          try {
            A = new Blob([c], { type: $.getMimetype(m) }), A.size !== c.length && (A = new Blob([new Uint8Array(c).buffer], { type: $.getMimetype(m) }));
          } catch (V) {
            Mr("Blob constructor present but fails: " + V + "; falling back to blob builder");
          }
        if (!A) {
          var I = new $.BlobBuilder();
          I.append(new Uint8Array(c).buffer), A = I.getBlob();
        }
        var U = $.URLObject.createObjectURL(A), j = new Image();
        j.onload = () => {
          Ue(j.complete, "Image " + m + " could not be decoded");
          var V = document.createElement("canvas");
          V.width = j.width, V.height = j.height;
          var J = V.getContext("2d");
          J.drawImage(j, 0, 0), $.URLObject.revokeObjectURL(U), g && g(c);
        }, j.onerror = (V) => {
          z("Image " + U + " could not be decoded"), E && E();
        }, j.src = U;
      }, n.preloadPlugins.push(e);
      var t = {};
      t.canHandle = function(c) {
        return !n.noAudioDecoding && c.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      }, t.handle = function(c, m, g, E) {
        var A = false;
        function I(ce) {
          A || (A = true, g && g(c));
        }
        function U() {
          A || (A = true, new Audio(), E && E());
        }
        if ($.hasBlobConstructor) {
          try {
            var j = new Blob([c], { type: $.getMimetype(m) });
          } catch {
            return U();
          }
          var V = $.URLObject.createObjectURL(j), J = new Audio();
          J.addEventListener("canplaythrough", () => I(), false), J.onerror = function(he) {
            if (A)
              return;
            pe("warning: browser could not fully decode audio " + m + ", trying slower base64 approach");
            function we(G) {
              for (var ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ve = "=", Ee = "", Me = 0, ae = 0, at = 0; at < G.length; at++)
                for (Me = Me << 8 | G[at], ae += 8; ae >= 6; ) {
                  var je = Me >> ae - 6 & 63;
                  ae -= 6, Ee += ie[je];
                }
              return ae == 2 ? (Ee += ie[(Me & 3) << 4], Ee += ve + ve) : ae == 4 && (Ee += ie[(Me & 15) << 2], Ee += ve), Ee;
            }
            J.src = "data:audio/x-" + m.substr(-3) + ";base64," + we(c), I();
          }, J.src = V, qo(function() {
            I();
          }, 1e4);
        } else
          return U();
      }, n.preloadPlugins.push(t);
      function i() {
        $.pointerLock = document.pointerLockElement === n.canvas || document.mozPointerLockElement === n.canvas || document.webkitPointerLockElement === n.canvas || document.msPointerLockElement === n.canvas;
      }
      var a = n.canvas;
      a && (a.requestPointerLock = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock || a.msRequestPointerLock || (() => {
      }), a.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
      }), a.exitPointerLock = a.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", i, false), document.addEventListener("mozpointerlockchange", i, false), document.addEventListener("webkitpointerlockchange", i, false), document.addEventListener("mspointerlockchange", i, false), n.elementPointerLock && a.addEventListener("click", (s) => {
        !$.pointerLock && n.canvas.requestPointerLock && (n.canvas.requestPointerLock(), s.preventDefault());
      }, false));
    }, handledByPreloadPlugin: function(e, t, i, a) {
      $.init();
      var s = false;
      return n.preloadPlugins.forEach(function(c) {
        s || c.canHandle(t) && (c.handle(e, t, i, a), s = true);
      }), s;
    }, createContext: function(e, t, i, a) {
      if (t && n.ctx && e == n.canvas)
        return n.ctx;
      var s, c;
      if (t) {
        var m = { antialias: false, alpha: false, majorVersion: typeof WebGL2RenderingContext < "u" ? 2 : 1 };
        if (a)
          for (var g in a)
            m[g] = a[g];
        typeof Q < "u" && (c = Q.createContext(e, m), c && (s = Q.getContext(c).GLctx));
      } else
        s = e.getContext("2d");
      return s ? (i && (t || Ue(typeof H > "u", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), n.ctx = s, t && Q.makeContextCurrent(c), n.useWebGL = t, $.moduleContextCreatedCallbacks.forEach(function(E) {
        E();
      }), $.init()), s) : null;
    }, destroyContext: function(e, t, i) {
    }, fullscreenHandlersInstalled: false, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen: function(e, t) {
      $.lockPointer = e, $.resizeCanvas = t, typeof $.lockPointer > "u" && ($.lockPointer = true), typeof $.resizeCanvas > "u" && ($.resizeCanvas = false);
      var i = n.canvas;
      function a() {
        $.isFullscreen = false;
        var c = i.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === c ? (i.exitFullscreen = $.exitFullscreen, $.lockPointer && i.requestPointerLock(), $.isFullscreen = true, $.resizeCanvas ? $.setFullscreenCanvasSize() : $.updateCanvasDimensions(i)) : (c.parentNode.insertBefore(i, c), c.parentNode.removeChild(c), $.resizeCanvas ? $.setWindowedCanvasSize() : $.updateCanvasDimensions(i)), n.onFullScreen && n.onFullScreen($.isFullscreen), n.onFullscreen && n.onFullscreen($.isFullscreen);
      }
      $.fullscreenHandlersInstalled || ($.fullscreenHandlersInstalled = true, document.addEventListener("fullscreenchange", a, false), document.addEventListener("mozfullscreenchange", a, false), document.addEventListener("webkitfullscreenchange", a, false), document.addEventListener("MSFullscreenChange", a, false));
      var s = document.createElement("div");
      i.parentNode.insertBefore(s, i), s.appendChild(i), s.requestFullscreen = s.requestFullscreen || s.mozRequestFullScreen || s.msRequestFullscreen || (s.webkitRequestFullscreen ? () => s.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (s.webkitRequestFullScreen ? () => s.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null), s.requestFullscreen();
    }, exitFullscreen: function() {
      if (!$.isFullscreen)
        return false;
      var e = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
      };
      return e.apply(document, []), true;
    }, nextRAF: 0, fakeRequestAnimationFrame: function(e) {
      var t = Date.now();
      if ($.nextRAF === 0)
        $.nextRAF = t + 1e3 / 60;
      else
        for (; t + 2 >= $.nextRAF; )
          $.nextRAF += 1e3 / 60;
      var i = Math.max($.nextRAF - t, 0);
      setTimeout(e, i);
    }, requestAnimationFrame: function(e) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(e);
        return;
      }
      var t = $.fakeRequestAnimationFrame;
      t(e);
    }, safeSetTimeout: function(e, t) {
      return qo(e, t);
    }, safeRequestAnimationFrame: function(e) {
      return $.requestAnimationFrame(function() {
        hn(e);
      });
    }, getMimetype: function(e) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[e.substr(e.lastIndexOf(".") + 1)];
    }, getUserMedia: function(e) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e);
    }, getMovementX: function(e) {
      return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    }, getMovementY: function(e) {
      return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    }, getMouseWheelDelta: function(e) {
      var t = 0;
      switch (e.type) {
        case "DOMMouseScroll":
          t = e.detail / 3;
          break;
        case "mousewheel":
          t = e.wheelDelta / 120;
          break;
        case "wheel":
          switch (t = e.deltaY, e.deltaMode) {
            case 0:
              t /= 100;
              break;
            case 1:
              t /= 3;
              break;
            case 2:
              t *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + e.type;
      }
      return t;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function(e) {
      if ($.pointerLock)
        e.type != "mousemove" && "mozMovementX" in e ? $.mouseMovementX = $.mouseMovementY = 0 : ($.mouseMovementX = $.getMovementX(e), $.mouseMovementY = $.getMovementY(e)), typeof SDL < "u" ? ($.mouseX = SDL.mouseX + $.mouseMovementX, $.mouseY = SDL.mouseY + $.mouseMovementY) : ($.mouseX += $.mouseMovementX, $.mouseY += $.mouseMovementY);
      else {
        var t = n.canvas.getBoundingClientRect(), i = n.canvas.width, a = n.canvas.height, s = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, c = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset;
        if (e.type === "touchstart" || e.type === "touchend" || e.type === "touchmove") {
          var m = e.touch;
          if (m === void 0)
            return;
          var g = m.pageX - (s + t.left), E = m.pageY - (c + t.top);
          g = g * (i / t.width), E = E * (a / t.height);
          var A = { x: g, y: E };
          if (e.type === "touchstart")
            $.lastTouches[m.identifier] = A, $.touches[m.identifier] = A;
          else if (e.type === "touchend" || e.type === "touchmove") {
            var I = $.touches[m.identifier];
            I || (I = A), $.lastTouches[m.identifier] = I, $.touches[m.identifier] = A;
          }
          return;
        }
        var U = e.pageX - (s + t.left), j = e.pageY - (c + t.top);
        U = U * (i / t.width), j = j * (a / t.height), $.mouseMovementX = U - $.mouseX, $.mouseMovementY = j - $.mouseY, $.mouseX = U, $.mouseY = j;
      }
    }, resizeListeners: [], updateResizeListeners: function() {
      var e = n.canvas;
      $.resizeListeners.forEach(function(t) {
        t(e.width, e.height);
      });
    }, setCanvasSize: function(e, t, i) {
      var a = n.canvas;
      $.updateCanvasDimensions(a, e, t), i || $.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function() {
      if (typeof SDL < "u") {
        var e = ne[SDL.screen >> 2];
        e = e | 8388608, B[SDL.screen >> 2] = e;
      }
      $.updateCanvasDimensions(n.canvas), $.updateResizeListeners();
    }, setWindowedCanvasSize: function() {
      if (typeof SDL < "u") {
        var e = ne[SDL.screen >> 2];
        e = e & -8388609, B[SDL.screen >> 2] = e;
      }
      $.updateCanvasDimensions(n.canvas), $.updateResizeListeners();
    }, updateCanvasDimensions: function(e, t, i) {
      t && i ? (e.widthNative = t, e.heightNative = i) : (t = e.widthNative, i = e.heightNative);
      var a = t, s = i;
      if (n.forcedAspectRatio && n.forcedAspectRatio > 0 && (a / s < n.forcedAspectRatio ? a = Math.round(s * n.forcedAspectRatio) : s = Math.round(a / n.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && typeof screen < "u") {
        var c = Math.min(screen.width / a, screen.height / s);
        a = Math.round(a * c), s = Math.round(s * c);
      }
      $.resizeCanvas ? (e.width != a && (e.width = a), e.height != s && (e.height = s), typeof e.style < "u" && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != i && (e.height = i), typeof e.style < "u" && (a != t || s != i ? (e.style.setProperty("width", a + "px", "important"), e.style.setProperty("height", s + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))));
    } }, F = { QUEUE_INTERVAL: 25, QUEUE_LOOKAHEAD: 0.1, DEVICE_NAME: "Emscripten OpenAL", CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture", ALC_EXTENSIONS: { ALC_SOFT_pause_device: true, ALC_SOFT_HRTF: true }, AL_EXTENSIONS: { AL_EXT_float32: true, AL_SOFT_loop_points: true, AL_SOFT_source_length: true, AL_EXT_source_distance_model: true, AL_SOFT_source_spatialize: true }, _alcErr: 0, alcErr: 0, deviceRefCounts: {}, alcStringCache: {}, paused: false, stringCache: {}, contexts: {}, currentCtx: null, buffers: { 0: { id: 0, refCount: 0, audioBuf: null, frequency: 0, bytesPerSample: 2, channels: 1, length: 0 } }, paramArray: [], _nextId: 1, newId: function() {
      return F.freeIds.length > 0 ? F.freeIds.pop() : F._nextId++;
    }, freeIds: [], scheduleContextAudio: function(e) {
      if (!($.mainLoop.timingMode === 1 && document.visibilityState != "visible"))
        for (var t in e.sources)
          F.scheduleSourceAudio(e.sources[t]);
    }, scheduleSourceAudio: function(e, t) {
      if (!($.mainLoop.timingMode === 1 && document.visibilityState != "visible") && e.state === 4114) {
        for (var i = F.updateSourceTime(e), a = e.bufStartTime, s = e.bufOffset, c = e.bufsProcessed, m = 0; m < e.audioQueue.length; m++) {
          var g = e.audioQueue[m];
          a = g._startTime + g._duration, s = 0, c += g._skipCount + 1;
        }
        t || (t = F.QUEUE_LOOKAHEAD);
        for (var E = i + t, A = 0; a < E; ) {
          if (c >= e.bufQueue.length)
            if (e.looping)
              c %= e.bufQueue.length;
            else
              break;
          var I = e.bufQueue[c % e.bufQueue.length];
          if (I.length === 0) {
            if (A++, A === e.bufQueue.length)
              break;
          } else {
            var g = e.context.audioCtx.createBufferSource();
            g.buffer = I.audioBuf, g.playbackRate.value = e.playbackRate, (I.audioBuf._loopStart || I.audioBuf._loopEnd) && (g.loopStart = I.audioBuf._loopStart, g.loopEnd = I.audioBuf._loopEnd);
            var U = 0;
            e.type === 4136 && e.looping ? (U = Number.POSITIVE_INFINITY, g.loop = true, I.audioBuf._loopStart && (g.loopStart = I.audioBuf._loopStart), I.audioBuf._loopEnd && (g.loopEnd = I.audioBuf._loopEnd)) : U = (I.audioBuf.duration - s) / e.playbackRate, g._startOffset = s, g._duration = U, g._skipCount = A, A = 0, g.connect(e.gain), typeof g.start < "u" ? (a = Math.max(a, e.context.audioCtx.currentTime), g.start(a, s)) : typeof g.noteOn < "u" && (a = Math.max(a, e.context.audioCtx.currentTime), g.noteOn(a)), g._startTime = a, e.audioQueue.push(g), a += U;
          }
          s = 0, c++;
        }
      }
    }, updateSourceTime: function(e) {
      var t = e.context.audioCtx.currentTime;
      if (e.state !== 4114)
        return t;
      isFinite(e.bufStartTime) || (e.bufStartTime = t - e.bufOffset / e.playbackRate, e.bufOffset = 0);
      for (var i = 0; e.audioQueue.length; ) {
        var a = e.audioQueue[0];
        if (e.bufsProcessed += a._skipCount, i = a._startTime + a._duration, t < i)
          break;
        e.audioQueue.shift(), e.bufStartTime = i, e.bufOffset = 0, e.bufsProcessed++;
      }
      if (e.bufsProcessed >= e.bufQueue.length && !e.looping)
        F.setSourceState(e, 4116);
      else if (e.type === 4136 && e.looping) {
        var s = e.bufQueue[0];
        if (s.length === 0)
          e.bufOffset = 0;
        else {
          var c = (t - e.bufStartTime) * e.playbackRate, m = s.audioBuf._loopStart || 0, g = s.audioBuf._loopEnd || s.audioBuf.duration;
          g <= m && (g = s.audioBuf.duration), c < g ? e.bufOffset = c : e.bufOffset = m + (c - m) % (g - m);
        }
      } else if (e.audioQueue[0])
        e.bufOffset = (t - e.audioQueue[0]._startTime) * e.playbackRate;
      else {
        if (e.type !== 4136 && e.looping) {
          var E = F.sourceDuration(e) / e.playbackRate;
          E > 0 && (e.bufStartTime += Math.floor((t - e.bufStartTime) / E) * E);
        }
        for (var A = 0; A < e.bufQueue.length; A++) {
          if (e.bufsProcessed >= e.bufQueue.length)
            if (e.looping)
              e.bufsProcessed %= e.bufQueue.length;
            else {
              F.setSourceState(e, 4116);
              break;
            }
          var s = e.bufQueue[e.bufsProcessed];
          if (s.length > 0) {
            if (i = e.bufStartTime + s.audioBuf.duration / e.playbackRate, t < i) {
              e.bufOffset = (t - e.bufStartTime) * e.playbackRate;
              break;
            }
            e.bufStartTime = i;
          }
          e.bufOffset = 0, e.bufsProcessed++;
        }
      }
      return t;
    }, cancelPendingSourceAudio: function(e) {
      F.updateSourceTime(e);
      for (var t = 1; t < e.audioQueue.length; t++) {
        var i = e.audioQueue[t];
        i.stop();
      }
      e.audioQueue.length > 1 && (e.audioQueue.length = 1);
    }, stopSourceAudio: function(e) {
      for (var t = 0; t < e.audioQueue.length; t++)
        e.audioQueue[t].stop();
      e.audioQueue.length = 0;
    }, setSourceState: function(e, t) {
      t === 4114 ? ((e.state === 4114 || e.state == 4116) && (e.bufsProcessed = 0, e.bufOffset = 0), F.stopSourceAudio(e), e.state = 4114, e.bufStartTime = Number.NEGATIVE_INFINITY, F.scheduleSourceAudio(e)) : t === 4115 ? e.state === 4114 && (F.updateSourceTime(e), F.stopSourceAudio(e), e.state = 4115) : t === 4116 ? e.state !== 4113 && (e.state = 4116, e.bufsProcessed = e.bufQueue.length, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, F.stopSourceAudio(e)) : t === 4113 && e.state !== 4113 && (e.state = 4113, e.bufsProcessed = 0, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, F.stopSourceAudio(e));
    }, initSourcePanner: function(e) {
      if (e.type !== 4144) {
        for (var t = F.buffers[0], i = 0; i < e.bufQueue.length; i++)
          if (e.bufQueue[i].id !== 0) {
            t = e.bufQueue[i];
            break;
          }
        if (e.spatialize === 1 || e.spatialize === 2 && t.channels === 1) {
          if (e.panner)
            return;
          e.panner = e.context.audioCtx.createPanner(), F.updateSourceGlobal(e), F.updateSourceSpace(e), e.panner.connect(e.context.gain), e.gain.disconnect(), e.gain.connect(e.panner);
        } else {
          if (!e.panner)
            return;
          e.panner.disconnect(), e.gain.disconnect(), e.gain.connect(e.context.gain), e.panner = null;
        }
      }
    }, updateContextGlobal: function(e) {
      for (var t in e.sources)
        F.updateSourceGlobal(e.sources[t]);
    }, updateSourceGlobal: function(e) {
      var t = e.panner;
      if (t) {
        t.refDistance = e.refDistance, t.maxDistance = e.maxDistance, t.rolloffFactor = e.rolloffFactor, t.panningModel = e.context.hrtf ? "HRTF" : "equalpower";
        var i = e.context.sourceDistanceModel ? e.distanceModel : e.context.distanceModel;
        switch (i) {
          case 0:
            t.distanceModel = "inverse", t.refDistance = 340282e33;
            break;
          case 53249:
          case 53250:
            t.distanceModel = "inverse";
            break;
          case 53251:
          case 53252:
            t.distanceModel = "linear";
            break;
          case 53253:
          case 53254:
            t.distanceModel = "exponential";
            break;
        }
      }
    }, updateListenerSpace: function(e) {
      var t = e.audioCtx.listener;
      t.positionX ? (t.positionX.value = e.listener.position[0], t.positionY.value = e.listener.position[1], t.positionZ.value = e.listener.position[2]) : t.setPosition(e.listener.position[0], e.listener.position[1], e.listener.position[2]), t.forwardX ? (t.forwardX.value = e.listener.direction[0], t.forwardY.value = e.listener.direction[1], t.forwardZ.value = e.listener.direction[2], t.upX.value = e.listener.up[0], t.upY.value = e.listener.up[1], t.upZ.value = e.listener.up[2]) : t.setOrientation(e.listener.direction[0], e.listener.direction[1], e.listener.direction[2], e.listener.up[0], e.listener.up[1], e.listener.up[2]);
      for (var i in e.sources)
        F.updateSourceSpace(e.sources[i]);
    }, updateSourceSpace: function(e) {
      if (e.panner) {
        var t = e.panner, i = e.position[0], a = e.position[1], s = e.position[2], c = e.direction[0], m = e.direction[1], g = e.direction[2], E = e.context.listener, A = E.position[0], I = E.position[1], U = E.position[2];
        if (e.relative) {
          var j = -E.direction[0], V = -E.direction[1], J = -E.direction[2], ce = E.up[0], he = E.up[1], we = E.up[2], G = function(_a2, ya, ga) {
            var ba = Math.sqrt(_a2 * _a2 + ya * ya + ga * ga);
            return ba < Number.EPSILON ? 0 : 1 / ba;
          }, ie = G(j, V, J);
          j *= ie, V *= ie, J *= ie, ie = G(ce, he, we), ce *= ie, he *= ie, we *= ie;
          var ve = he * J - we * V, Ee = we * j - ce * J, Me = ce * V - he * j;
          ie = G(ve, Ee, Me), ve *= ie, Ee *= ie, Me *= ie, ce = V * Me - J * Ee, he = J * ve - j * Me, we = j * Ee - V * ve;
          var ae = c, at = m, je = g;
          c = ae * ve + at * ce + je * j, m = ae * Ee + at * he + je * V, g = ae * Me + at * we + je * J, ae = i, at = a, je = s, i = ae * ve + at * ce + je * j, a = ae * Ee + at * he + je * V, s = ae * Me + at * we + je * J, i += A, a += I, s += U;
        }
        t.positionX ? (i != t.positionX.value && (t.positionX.value = i), a != t.positionY.value && (t.positionY.value = a), s != t.positionZ.value && (t.positionZ.value = s)) : t.setPosition(i, a, s), t.orientationX ? (c != t.orientationX.value && (t.orientationX.value = c), m != t.orientationY.value && (t.orientationY.value = m), g != t.orientationZ.value && (t.orientationZ.value = g)) : t.setOrientation(c, m, g);
        var wt = e.dopplerShift, Rt = e.velocity[0], wr = e.velocity[1], Ft = e.velocity[2], kt = E.velocity[0], ir = E.velocity[1], Xe = E.velocity[2];
        if (i === A && a === I && s === U || Rt === kt && wr === ir && Ft === Xe)
          e.dopplerShift = 1;
        else {
          var pt = e.context.speedOfSound, yt = e.context.dopplerFactor, vn = A - i, En = I - a, xn = U - s, ma = Math.sqrt(vn * vn + En * En + xn * xn), wi = (vn * kt + En * ir + xn * Xe) / ma, vi = (vn * Rt + En * wr + xn * Ft) / ma;
          wi = Math.min(wi, pt / yt), vi = Math.min(vi, pt / yt), e.dopplerShift = (pt - yt * wi) / (pt - yt * vi);
        }
        e.dopplerShift !== wt && F.updateSourceRate(e);
      }
    }, updateSourceRate: function(e) {
      if (e.state === 4114) {
        F.cancelPendingSourceAudio(e);
        var t = e.audioQueue[0];
        if (!t)
          return;
        var i;
        e.type === 4136 && e.looping ? i = Number.POSITIVE_INFINITY : i = (t.buffer.duration - t._startOffset) / e.playbackRate, t._duration = i, t.playbackRate.value = e.playbackRate, F.scheduleSourceAudio(e);
      }
    }, sourceDuration: function(e) {
      for (var t = 0, i = 0; i < e.bufQueue.length; i++) {
        var a = e.bufQueue[i].audioBuf;
        t += a ? a.duration : 0;
      }
      return t;
    }, sourceTell: function(e) {
      F.updateSourceTime(e);
      for (var t = 0, i = 0; i < e.bufsProcessed; i++)
        e.bufQueue[i].audioBuf && (t += e.bufQueue[i].audioBuf.duration);
      return t += e.bufOffset, t;
    }, sourceSeek: function(e, t) {
      var i = e.state == 4114;
      if (i && F.setSourceState(e, 4113), e.bufQueue[e.bufsProcessed].audioBuf !== null) {
        for (e.bufsProcessed = 0; t > e.bufQueue[e.bufsProcessed].audioBuf.duration; )
          t -= e.bufQueue[e.bufsProcessed].audiobuf.duration, e.bufsProcessed++;
        e.bufOffset = t;
      }
      i && F.setSourceState(e, 4114);
    }, getGlobalParam: function(e, t) {
      if (!F.currentCtx)
        return null;
      switch (t) {
        case 49152:
          return F.currentCtx.dopplerFactor;
        case 49155:
          return F.currentCtx.speedOfSound;
        case 53248:
          return F.currentCtx.distanceModel;
        default:
          return F.currentCtx.err = 40962, null;
      }
    }, setGlobalParam: function(e, t, i) {
      if (F.currentCtx)
        switch (t) {
          case 49152:
            if (!Number.isFinite(i) || i < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            F.currentCtx.dopplerFactor = i, F.updateListenerSpace(F.currentCtx);
            break;
          case 49155:
            if (!Number.isFinite(i) || i <= 0) {
              F.currentCtx.err = 40963;
              return;
            }
            F.currentCtx.speedOfSound = i, F.updateListenerSpace(F.currentCtx);
            break;
          case 53248:
            switch (i) {
              case 0:
              case 53249:
              case 53250:
              case 53251:
              case 53252:
              case 53253:
              case 53254:
                F.currentCtx.distanceModel = i, F.updateContextGlobal(F.currentCtx);
                break;
              default:
                F.currentCtx.err = 40963;
                return;
            }
            break;
          default:
            F.currentCtx.err = 40962;
            return;
        }
    }, getListenerParam: function(e, t) {
      if (!F.currentCtx)
        return null;
      switch (t) {
        case 4100:
          return F.currentCtx.listener.position;
        case 4102:
          return F.currentCtx.listener.velocity;
        case 4111:
          return F.currentCtx.listener.direction.concat(F.currentCtx.listener.up);
        case 4106:
          return F.currentCtx.gain.gain.value;
        default:
          return F.currentCtx.err = 40962, null;
      }
    }, setListenerParam: function(e, t, i) {
      if (F.currentCtx) {
        if (i === null) {
          F.currentCtx.err = 40962;
          return;
        }
        var a = F.currentCtx.listener;
        switch (t) {
          case 4100:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2])) {
              F.currentCtx.err = 40963;
              return;
            }
            a.position[0] = i[0], a.position[1] = i[1], a.position[2] = i[2], F.updateListenerSpace(F.currentCtx);
            break;
          case 4102:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2])) {
              F.currentCtx.err = 40963;
              return;
            }
            a.velocity[0] = i[0], a.velocity[1] = i[1], a.velocity[2] = i[2], F.updateListenerSpace(F.currentCtx);
            break;
          case 4106:
            if (!Number.isFinite(i) || i < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            F.currentCtx.gain.gain.value = i;
            break;
          case 4111:
            if (!Number.isFinite(i[0]) || !Number.isFinite(i[1]) || !Number.isFinite(i[2]) || !Number.isFinite(i[3]) || !Number.isFinite(i[4]) || !Number.isFinite(i[5])) {
              F.currentCtx.err = 40963;
              return;
            }
            a.direction[0] = i[0], a.direction[1] = i[1], a.direction[2] = i[2], a.up[0] = i[3], a.up[1] = i[4], a.up[2] = i[5], F.updateListenerSpace(F.currentCtx);
            break;
          default:
            F.currentCtx.err = 40962;
            return;
        }
      }
    }, getBufferParam: function(e, t, i) {
      if (F.currentCtx) {
        var a = F.buffers[t];
        if (!a || t === 0) {
          F.currentCtx.err = 40961;
          return;
        }
        switch (i) {
          case 8193:
            return a.frequency;
          case 8194:
            return a.bytesPerSample * 8;
          case 8195:
            return a.channels;
          case 8196:
            return a.length * a.bytesPerSample * a.channels;
          case 8213:
            return a.length === 0 ? [0, 0] : [(a.audioBuf._loopStart || 0) * a.frequency, (a.audioBuf._loopEnd || a.length) * a.frequency];
          default:
            return F.currentCtx.err = 40962, null;
        }
      }
    }, setBufferParam: function(e, t, i, a) {
      if (F.currentCtx) {
        var s = F.buffers[t];
        if (!s || t === 0) {
          F.currentCtx.err = 40961;
          return;
        }
        if (a === null) {
          F.currentCtx.err = 40962;
          return;
        }
        switch (i) {
          case 8196:
            if (a !== 0) {
              F.currentCtx.err = 40963;
              return;
            }
            break;
          case 8213:
            if (a[0] < 0 || a[0] > s.length || a[1] < 0 || a[1] > s.Length || a[0] >= a[1]) {
              F.currentCtx.err = 40963;
              return;
            }
            if (s.refCount > 0) {
              F.currentCtx.err = 40964;
              return;
            }
            s.audioBuf && (s.audioBuf._loopStart = a[0] / s.frequency, s.audioBuf._loopEnd = a[1] / s.frequency);
            break;
          default:
            F.currentCtx.err = 40962;
            return;
        }
      }
    }, getSourceParam: function(e, t, i) {
      if (!F.currentCtx)
        return null;
      var a = F.currentCtx.sources[t];
      if (!a)
        return F.currentCtx.err = 40961, null;
      switch (i) {
        case 514:
          return a.relative;
        case 4097:
          return a.coneInnerAngle;
        case 4098:
          return a.coneOuterAngle;
        case 4099:
          return a.pitch;
        case 4100:
          return a.position;
        case 4101:
          return a.direction;
        case 4102:
          return a.velocity;
        case 4103:
          return a.looping;
        case 4105:
          return a.type === 4136 ? a.bufQueue[0].id : 0;
        case 4106:
          return a.gain.gain.value;
        case 4109:
          return a.minGain;
        case 4110:
          return a.maxGain;
        case 4112:
          return a.state;
        case 4117:
          return a.bufQueue.length === 1 && a.bufQueue[0].id === 0 ? 0 : a.bufQueue.length;
        case 4118:
          return a.bufQueue.length === 1 && a.bufQueue[0].id === 0 || a.looping ? 0 : a.bufsProcessed;
        case 4128:
          return a.refDistance;
        case 4129:
          return a.rolloffFactor;
        case 4130:
          return a.coneOuterGain;
        case 4131:
          return a.maxDistance;
        case 4132:
          return F.sourceTell(a);
        case 4133:
          var s = F.sourceTell(a);
          return s > 0 && (s *= a.bufQueue[0].frequency), s;
        case 4134:
          var s = F.sourceTell(a);
          return s > 0 && (s *= a.bufQueue[0].frequency * a.bufQueue[0].bytesPerSample), s;
        case 4135:
          return a.type;
        case 4628:
          return a.spatialize;
        case 8201:
          for (var g = 0, c = 0, m = 0; m < a.bufQueue.length; m++)
            g += a.bufQueue[m].length, a.bufQueue[m].id !== 0 && (c = a.bufQueue[m].bytesPerSample * a.bufQueue[m].channels);
          return g * c;
        case 8202:
          for (var g = 0, m = 0; m < a.bufQueue.length; m++)
            g += a.bufQueue[m].length;
          return g;
        case 8203:
          return F.sourceDuration(a);
        case 53248:
          return a.distanceModel;
        default:
          return F.currentCtx.err = 40962, null;
      }
    }, setSourceParam: function(e, t, i, a) {
      if (F.currentCtx) {
        var s = F.currentCtx.sources[t];
        if (!s) {
          F.currentCtx.err = 40961;
          return;
        }
        if (a === null) {
          F.currentCtx.err = 40962;
          return;
        }
        switch (i) {
          case 514:
            if (a === 1)
              s.relative = true, F.updateSourceSpace(s);
            else if (a === 0)
              s.relative = false, F.updateSourceSpace(s);
            else {
              F.currentCtx.err = 40963;
              return;
            }
            break;
          case 4097:
            if (!Number.isFinite(a)) {
              F.currentCtx.err = 40963;
              return;
            }
            s.coneInnerAngle = a, s.panner && (s.panner.coneInnerAngle = a % 360);
            break;
          case 4098:
            if (!Number.isFinite(a)) {
              F.currentCtx.err = 40963;
              return;
            }
            s.coneOuterAngle = a, s.panner && (s.panner.coneOuterAngle = a % 360);
            break;
          case 4099:
            if (!Number.isFinite(a) || a <= 0) {
              F.currentCtx.err = 40963;
              return;
            }
            if (s.pitch === a)
              break;
            s.pitch = a, F.updateSourceRate(s);
            break;
          case 4100:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              F.currentCtx.err = 40963;
              return;
            }
            s.position[0] = a[0], s.position[1] = a[1], s.position[2] = a[2], F.updateSourceSpace(s);
            break;
          case 4101:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              F.currentCtx.err = 40963;
              return;
            }
            s.direction[0] = a[0], s.direction[1] = a[1], s.direction[2] = a[2], F.updateSourceSpace(s);
            break;
          case 4102:
            if (!Number.isFinite(a[0]) || !Number.isFinite(a[1]) || !Number.isFinite(a[2])) {
              F.currentCtx.err = 40963;
              return;
            }
            s.velocity[0] = a[0], s.velocity[1] = a[1], s.velocity[2] = a[2], F.updateSourceSpace(s);
            break;
          case 4103:
            if (a === 1) {
              if (s.looping = true, F.updateSourceTime(s), s.type === 4136 && s.audioQueue.length > 0) {
                var c = s.audioQueue[0];
                c.loop = true, c._duration = Number.POSITIVE_INFINITY;
              }
            } else if (a === 0) {
              s.looping = false;
              var m = F.updateSourceTime(s);
              if (s.type === 4136 && s.audioQueue.length > 0) {
                var c = s.audioQueue[0];
                c.loop = false, c._duration = s.bufQueue[0].audioBuf.duration / s.playbackRate, c._startTime = m - s.bufOffset / s.playbackRate;
              }
            } else {
              F.currentCtx.err = 40963;
              return;
            }
            break;
          case 4105:
            if (s.state === 4114 || s.state === 4115) {
              F.currentCtx.err = 40964;
              return;
            }
            if (a === 0) {
              for (var g in s.bufQueue)
                s.bufQueue[g].refCount--;
              s.bufQueue.length = 1, s.bufQueue[0] = F.buffers[0], s.bufsProcessed = 0, s.type = 4144;
            } else {
              var E = F.buffers[a];
              if (!E) {
                F.currentCtx.err = 40963;
                return;
              }
              for (var g in s.bufQueue)
                s.bufQueue[g].refCount--;
              s.bufQueue.length = 0, E.refCount++, s.bufQueue = [E], s.bufsProcessed = 0, s.type = 4136;
            }
            F.initSourcePanner(s), F.scheduleSourceAudio(s);
            break;
          case 4106:
            if (!Number.isFinite(a) || a < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            s.gain.gain.value = a;
            break;
          case 4109:
            if (!Number.isFinite(a) || a < 0 || a > Math.min(s.maxGain, 1)) {
              F.currentCtx.err = 40963;
              return;
            }
            s.minGain = a;
            break;
          case 4110:
            if (!Number.isFinite(a) || a < Math.max(0, s.minGain) || a > 1) {
              F.currentCtx.err = 40963;
              return;
            }
            s.maxGain = a;
            break;
          case 4128:
            if (!Number.isFinite(a) || a < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            s.refDistance = a, s.panner && (s.panner.refDistance = a);
            break;
          case 4129:
            if (!Number.isFinite(a) || a < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            s.rolloffFactor = a, s.panner && (s.panner.rolloffFactor = a);
            break;
          case 4130:
            if (!Number.isFinite(a) || a < 0 || a > 1) {
              F.currentCtx.err = 40963;
              return;
            }
            s.coneOuterGain = a, s.panner && (s.panner.coneOuterGain = a);
            break;
          case 4131:
            if (!Number.isFinite(a) || a < 0) {
              F.currentCtx.err = 40963;
              return;
            }
            s.maxDistance = a, s.panner && (s.panner.maxDistance = a);
            break;
          case 4132:
            if (a < 0 || a > F.sourceDuration(s)) {
              F.currentCtx.err = 40963;
              return;
            }
            F.sourceSeek(s, a);
            break;
          case 4133:
            var U = F.sourceDuration(s);
            if (U > 0) {
              var A;
              for (var I in s.bufQueue)
                if (I) {
                  A = s.bufQueue[I].frequency;
                  break;
                }
              a /= A;
            }
            if (a < 0 || a > U) {
              F.currentCtx.err = 40963;
              return;
            }
            F.sourceSeek(s, a);
            break;
          case 4134:
            var U = F.sourceDuration(s);
            if (U > 0) {
              var j;
              for (var I in s.bufQueue)
                if (I) {
                  var E = s.bufQueue[I];
                  j = E.frequency * E.bytesPerSample * E.channels;
                  break;
                }
              a /= j;
            }
            if (a < 0 || a > U) {
              F.currentCtx.err = 40963;
              return;
            }
            F.sourceSeek(s, a);
            break;
          case 4628:
            if (a !== 0 && a !== 1 && a !== 2) {
              F.currentCtx.err = 40963;
              return;
            }
            s.spatialize = a, F.initSourcePanner(s);
            break;
          case 8201:
          case 8202:
          case 8203:
            F.currentCtx.err = 40964;
            break;
          case 53248:
            switch (a) {
              case 0:
              case 53249:
              case 53250:
              case 53251:
              case 53252:
              case 53253:
              case 53254:
                s.distanceModel = a, F.currentCtx.sourceDistanceModel && F.updateContextGlobal(F.currentCtx);
                break;
              default:
                F.currentCtx.err = 40963;
                return;
            }
            break;
          default:
            F.currentCtx.err = 40962;
            return;
        }
      }
    }, captures: {}, sharedCaptureAudioCtx: null, requireValidCaptureDevice: function(e, t) {
      if (e === 0)
        return F.alcErr = 40961, null;
      var i = F.captures[e];
      if (!i)
        return F.alcErr = 40961, null;
      var a = i.mediaStreamError;
      return a ? (F.alcErr = 40961, null) : i;
    } };
    function Jf(e, t, i, a, s) {
      if (F.currentCtx) {
        var c = F.buffers[e];
        if (!c) {
          F.currentCtx.err = 40963;
          return;
        }
        if (s <= 0) {
          F.currentCtx.err = 40963;
          return;
        }
        var m = null;
        try {
          switch (t) {
            case 4352:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(1, a, s);
                for (var g = m.getChannelData(0), E = 0; E < a; ++E)
                  g[E] = ue[i++] * 78125e-7 - 1;
              }
              c.bytesPerSample = 1, c.channels = 1, c.length = a;
              break;
            case 4353:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(1, a >> 1, s);
                var g = m.getChannelData(0);
                i >>= 1;
                for (var E = 0; E < a >> 1; ++E)
                  g[E] = Pe[i++] * 30517578125e-15;
              }
              c.bytesPerSample = 2, c.channels = 1, c.length = a >> 1;
              break;
            case 4354:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(2, a >> 1, s);
                for (var g = m.getChannelData(0), A = m.getChannelData(1), E = 0; E < a >> 1; ++E)
                  g[E] = ue[i++] * 78125e-7 - 1, A[E] = ue[i++] * 78125e-7 - 1;
              }
              c.bytesPerSample = 1, c.channels = 2, c.length = a >> 1;
              break;
            case 4355:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(2, a >> 2, s);
                var g = m.getChannelData(0), A = m.getChannelData(1);
                i >>= 1;
                for (var E = 0; E < a >> 2; ++E)
                  g[E] = Pe[i++] * 30517578125e-15, A[E] = Pe[i++] * 30517578125e-15;
              }
              c.bytesPerSample = 2, c.channels = 2, c.length = a >> 2;
              break;
            case 65552:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(1, a >> 2, s);
                var g = m.getChannelData(0);
                i >>= 2;
                for (var E = 0; E < a >> 2; ++E)
                  g[E] = te[i++];
              }
              c.bytesPerSample = 4, c.channels = 1, c.length = a >> 2;
              break;
            case 65553:
              if (a > 0) {
                m = F.currentCtx.audioCtx.createBuffer(2, a >> 3, s);
                var g = m.getChannelData(0), A = m.getChannelData(1);
                i >>= 2;
                for (var E = 0; E < a >> 3; ++E)
                  g[E] = te[i++], A[E] = te[i++];
              }
              c.bytesPerSample = 4, c.channels = 2, c.length = a >> 3;
              break;
            default:
              F.currentCtx.err = 40963;
              return;
          }
          c.frequency = s, c.audioBuf = m;
        } catch {
          F.currentCtx.err = 40963;
          return;
        }
      }
    }
    function ec(e, t) {
      if (F.currentCtx) {
        for (var i = 0; i < e; ++i) {
          var a = B[t + i * 4 >> 2];
          if (a !== 0) {
            if (!F.buffers[a]) {
              F.currentCtx.err = 40961;
              return;
            }
            if (F.buffers[a].refCount) {
              F.currentCtx.err = 40964;
              return;
            }
          }
        }
        for (var i = 0; i < e; ++i) {
          var a = B[t + i * 4 >> 2];
          a !== 0 && (F.deviceRefCounts[F.buffers[a].deviceId]--, delete F.buffers[a], F.freeIds.push(a));
        }
      }
    }
    function Qo(e, t, i) {
      switch (t) {
        case 514:
        case 4097:
        case 4098:
        case 4103:
        case 4105:
        case 4128:
        case 4129:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 4628:
        case 8201:
        case 8202:
        case 53248:
          F.setSourceParam("alSourcei", e, t, i);
          break;
        default:
          F.setSourceParam("alSourcei", e, t, null);
          break;
      }
    }
    function tc(e, t) {
      if (F.currentCtx) {
        for (var i = 0; i < e; ++i) {
          var a = B[t + i * 4 >> 2];
          if (!F.currentCtx.sources[a]) {
            F.currentCtx.err = 40961;
            return;
          }
        }
        for (var i = 0; i < e; ++i) {
          var a = B[t + i * 4 >> 2];
          F.setSourceState(F.currentCtx.sources[a], 4116), Qo(a, 4105, 0), delete F.currentCtx.sources[a], F.freeIds.push(a);
        }
      }
    }
    function rc(e, t) {
      if (F.currentCtx)
        for (var i = 0; i < e; ++i) {
          var a = { deviceId: F.currentCtx.deviceId, id: F.newId(), refCount: 0, audioBuf: null, frequency: 0, bytesPerSample: 2, channels: 1, length: 0 };
          F.deviceRefCounts[a.deviceId]++, F.buffers[a.id] = a, B[t + i * 4 >> 2] = a.id;
        }
    }
    function nc(e, t) {
      if (F.currentCtx)
        for (var i = 0; i < e; ++i) {
          var a = F.currentCtx.audioCtx.createGain();
          a.connect(F.currentCtx.gain);
          var s = { context: F.currentCtx, id: F.newId(), type: 4144, state: 4113, bufQueue: [F.buffers[0]], audioQueue: [], looping: false, pitch: 1, dopplerShift: 1, gain: a, minGain: 0, maxGain: 1, panner: null, bufsProcessed: 0, bufStartTime: Number.NEGATIVE_INFINITY, bufOffset: 0, relative: false, refDistance: 1, maxDistance: 340282e33, rolloffFactor: 1, position: [0, 0, 0], velocity: [0, 0, 0], direction: [0, 0, 0], coneOuterGain: 0, coneInnerAngle: 360, coneOuterAngle: 360, distanceModel: 53250, spatialize: 2, get playbackRate() {
            return this.pitch * this.dopplerShift;
          } };
          F.currentCtx.sources[s.id] = s, B[t + i * 4 >> 2] = s.id;
        }
    }
    function ic() {
      if (!F.currentCtx)
        return 40964;
      var e = F.currentCtx.err;
      return F.currentCtx.err = 0, e;
    }
    function oc(e, t, i) {
      var a = F.getSourceParam("alGetSourcei", e, t);
      if (a !== null) {
        if (!i) {
          F.currentCtx.err = 40963;
          return;
        }
        switch (t) {
          case 514:
          case 4097:
          case 4098:
          case 4103:
          case 4105:
          case 4112:
          case 4117:
          case 4118:
          case 4128:
          case 4129:
          case 4131:
          case 4132:
          case 4133:
          case 4134:
          case 4135:
          case 4628:
          case 8201:
          case 8202:
          case 53248:
            B[i >> 2] = a;
            break;
          default:
            F.currentCtx.err = 40962;
            return;
        }
      }
    }
    function ac(e) {
      if (F.stringCache[e])
        return F.stringCache[e];
      var t;
      switch (e) {
        case 0:
          t = "No Error";
          break;
        case 40961:
          t = "Invalid Name";
          break;
        case 40962:
          t = "Invalid Enum";
          break;
        case 40963:
          t = "Invalid Value";
          break;
        case 40964:
          t = "Invalid Operation";
          break;
        case 40965:
          t = "Out of Memory";
          break;
        case 45057:
          t = "Emscripten";
          break;
        case 45058:
          t = "1.1";
          break;
        case 45059:
          t = "WebAudio";
          break;
        case 45060:
          t = "";
          for (var i in F.AL_EXTENSIONS)
            t = t.concat(i), t = t.concat(" ");
          t = t.trim();
          break;
        default:
          return F.currentCtx && (F.currentCtx.err = 40962), 0;
      }
      return t = cn(t), F.stringCache[e] = t, t;
    }
    function sc(e) {
      if (F.currentCtx) {
        var t = F.currentCtx.sources[e];
        if (!t) {
          F.currentCtx.err = 40961;
          return;
        }
        F.setSourceState(t, 4115);
      }
    }
    function uc(e) {
      if (F.currentCtx) {
        var t = F.currentCtx.sources[e];
        if (!t) {
          F.currentCtx.err = 40961;
          return;
        }
        F.setSourceState(t, 4114);
      }
    }
    function lc(e) {
      if (F.currentCtx) {
        var t = F.currentCtx.sources[e];
        if (!t) {
          F.currentCtx.err = 40961;
          return;
        }
        F.setSourceState(t, 4116);
      }
    }
    function fc(e, t, i) {
      switch (t) {
        case 4097:
        case 4098:
        case 4099:
        case 4106:
        case 4109:
        case 4110:
        case 4128:
        case 4129:
        case 4130:
        case 4131:
        case 4132:
        case 4133:
        case 4134:
        case 8203:
          F.setSourceParam("alSourcef", e, t, i);
          break;
        default:
          F.setSourceParam("alSourcef", e, t, null);
          break;
      }
    }
    function cc(e) {
      return !(e in F.deviceRefCounts) || F.deviceRefCounts[e] > 0 ? 0 : (delete F.deviceRefCounts[e], F.freeIds.push(e), 1);
    }
    function dc(e, t, i) {
      e.addEventListener(t, i, { once: true });
    }
    function Jo(e, t) {
      t || (t = [document, document.getElementById("canvas")]), ["keydown", "mousedown", "touchstart"].forEach(function(i) {
        t.forEach(function(a) {
          a && dc(a, i, () => {
            e.state === "suspended" && e.resume();
          });
        });
      });
    }
    function hc(e, t) {
      if (!(e in F.deviceRefCounts))
        return F.alcErr = 40961, 0;
      var i = null, a = [], s = null;
      if (t >>= 2, t)
        for (var c = 0, m = 0; c = B[t++], a.push(c), c !== 0; )
          switch (m = B[t++], a.push(m), c) {
            case 4103:
              i || (i = {}), i.sampleRate = m;
              break;
            case 4112:
            case 4113:
              break;
            case 6546:
              switch (m) {
                case 0:
                  s = false;
                  break;
                case 1:
                  s = true;
                  break;
                case 2:
                  break;
                default:
                  return F.alcErr = 40964, 0;
              }
              break;
            case 6550:
              if (m !== 0)
                return F.alcErr = 40964, 0;
              break;
            default:
              return F.alcErr = 40964, 0;
          }
      var g = window.AudioContext || window.webkitAudioContext, E = null;
      try {
        i ? E = new g(i) : E = new g();
      } catch (V) {
        return V.name === "NotSupportedError" ? F.alcErr = 40964 : F.alcErr = 40961, 0;
      }
      Jo(E), typeof E.createGain > "u" && (E.createGain = E.createGainNode);
      var A = E.createGain();
      A.connect(E.destination);
      var I = { deviceId: e, id: F.newId(), attrs: a, audioCtx: E, listener: { position: [0, 0, 0], velocity: [0, 0, 0], direction: [0, 0, 0], up: [0, 0, 0] }, sources: [], interval: setInterval(function() {
        F.scheduleContextAudio(I);
      }, F.QUEUE_INTERVAL), gain: A, distanceModel: 53250, speedOfSound: 343.3, dopplerFactor: 1, sourceDistanceModel: false, hrtf: s || false, _err: 0, get err() {
        return this._err;
      }, set err(V) {
        (this._err === 0 || V === 0) && (this._err = V);
      } };
      if (F.deviceRefCounts[e]++, F.contexts[I.id] = I, s !== null)
        for (var U in F.contexts) {
          var j = F.contexts[U];
          j.deviceId === e && (j.hrtf = s, F.updateContextGlobal(j));
        }
      return I.id;
    }
    function pc(e) {
      var t = F.contexts[e];
      if (F.currentCtx === t) {
        F.alcErr = 40962;
        return;
      }
      F.contexts[e].interval && clearInterval(F.contexts[e].interval), F.deviceRefCounts[t.deviceId]--, delete F.contexts[e], F.freeIds.push(e);
    }
    function mc(e) {
      var t = F.alcErr;
      return F.alcErr = 0, t;
    }
    function _c(e, t) {
      if (F.alcStringCache[t])
        return F.alcStringCache[t];
      var i;
      switch (t) {
        case 0:
          i = "No Error";
          break;
        case 40961:
          i = "Invalid Device";
          break;
        case 40962:
          i = "Invalid Context";
          break;
        case 40963:
          i = "Invalid Enum";
          break;
        case 40964:
          i = "Invalid Value";
          break;
        case 40965:
          i = "Out of Memory";
          break;
        case 4100:
          if (typeof AudioContext < "u" || typeof webkitAudioContext < "u")
            i = F.DEVICE_NAME;
          else
            return 0;
          break;
        case 4101:
          typeof AudioContext < "u" || typeof webkitAudioContext < "u" ? i = F.DEVICE_NAME.concat("\0") : i = "\0";
          break;
        case 785:
          i = F.CAPTURE_DEVICE_NAME;
          break;
        case 784:
          if (e === 0)
            i = F.CAPTURE_DEVICE_NAME.concat("\0");
          else {
            var a = F.requireValidCaptureDevice(e, "alcGetString");
            if (!a)
              return 0;
            i = a.deviceName;
          }
          break;
        case 4102:
          if (!e)
            return F.alcErr = 40961, 0;
          i = "";
          for (var s in F.ALC_EXTENSIONS)
            i = i.concat(s), i = i.concat(" ");
          i = i.trim();
          break;
        default:
          return F.alcErr = 40963, 0;
      }
      return i = cn(i), F.alcStringCache[t] = i, i;
    }
    function yc(e) {
      return e === 0 ? F.currentCtx = null : F.currentCtx = F.contexts[e], 1;
    }
    function gc(e) {
      if (e) {
        var t = Se(e);
        if (t !== F.DEVICE_NAME)
          return 0;
      }
      if (typeof AudioContext < "u" || typeof webkitAudioContext < "u") {
        var i = F.newId();
        return F.deviceRefCounts[i] = 0, i;
      }
      return 0;
    }
    function bc() {
      return Date.now();
    }
    function ea() {
      return 2147483648;
    }
    function wc() {
      return ea();
    }
    function vc() {
      return !k;
    }
    function Ec(e, t, i) {
      ue.copyWithin(e, t, t + i);
    }
    function xc(e) {
      try {
        return Fe.grow(e - De.byteLength + 65535 >>> 16), Ae(Fe.buffer), 1;
      } catch {
      }
    }
    function Sc(e) {
      var t = ue.length;
      e = e >>> 0;
      var i = ea();
      if (e > i)
        return false;
      let a = (E, A) => E + (A - E % A) % A;
      for (var s = 1; s <= 4; s *= 2) {
        var c = t * (1 + 0.2 / s);
        c = Math.min(c, e + 100663296);
        var m = Math.min(i, a(Math.max(e, c), 65536)), g = xc(m);
        if (g)
          return true;
      }
      return false;
    }
    var He = { xhrs: {}, setu64: function(e, t) {
      ne[e >> 2] = t, ne[e + 4 >> 2] = t / 4294967296 | 0;
    }, openDatabase: function(e, t, i, a) {
      try {
        var s = indexedDB.open(e, t);
      } catch (c) {
        return a(c);
      }
      s.onupgradeneeded = (c) => {
        var m = c.target.result;
        m.objectStoreNames.contains("FILES") && m.deleteObjectStore("FILES"), m.createObjectStore("FILES");
      }, s.onsuccess = (c) => i(c.target.result), s.onerror = (c) => a(c);
    }, staticInit: function() {
      var e = (i) => {
        He.dbInstance = i, p();
      }, t = () => {
        He.dbInstance = false, p();
      };
      He.openDatabase("emscripten_filesystem", 1, e, t), (typeof ENVIRONMENT_IS_FETCH_WORKER > "u" || !ENVIRONMENT_IS_FETCH_WORKER) && d();
    } };
    function pi(e, t, i, a, s) {
      var c = ne[e + 8 >> 2];
      if (!c) {
        i(e, 0, "no url specified!");
        return;
      }
      var m = Se(c), g = e + 112, E = Se(g);
      E || (E = "GET");
      var A = ne[g + 52 >> 2], I = ne[g + 56 >> 2], U = !!ne[g + 60 >> 2], j = ne[g + 68 >> 2], V = ne[g + 72 >> 2], J = ne[g + 76 >> 2], ce = ne[g + 80 >> 2], he = ne[g + 84 >> 2], we = ne[g + 88 >> 2], G = !!(A & 1), ie = !!(A & 2), ve = !!(A & 64), Ee = j ? Se(j) : void 0, Me = V ? Se(V) : void 0, ae = new XMLHttpRequest();
      if (ae.withCredentials = U, ae.open(E, m, !ve, Ee, Me), ve || (ae.timeout = I), ae.url_ = m, ae.responseType = "arraybuffer", ce) {
        var at = Se(ce);
        ae.overrideMimeType(at);
      }
      if (J)
        for (; ; ) {
          var je = ne[J >> 2];
          if (!je)
            break;
          var wt = ne[J + 4 >> 2];
          if (!wt)
            break;
          J += 8;
          var Rt = Se(je), wr = Se(wt);
          ae.setRequestHeader(Rt, wr);
        }
      var Ft = ne[e + 0 >> 2];
      He.xhrs[Ft] = ae;
      var kt = he && we ? ue.slice(he, he + we) : null;
      function ir() {
        var Xe = 0, pt = 0;
        ae.response && G && ne[e + 12 >> 2] === 0 && (pt = ae.response.byteLength), pt > 0 && (Xe = Ct(pt), ue.set(new Uint8Array(ae.response), Xe)), ne[e + 12 >> 2] = Xe, He.setu64(e + 16, pt), He.setu64(e + 24, 0);
        var yt = ae.response ? ae.response.byteLength : 0;
        yt && He.setu64(e + 32, yt), Te[e + 40 >> 1] = ae.readyState, Te[e + 42 >> 1] = ae.status, ae.statusText && ge(ae.statusText, e + 44, 64);
      }
      ae.onload = (Xe) => {
        Ft in He.xhrs && (ir(), ae.status >= 200 && ae.status < 300 ? t && t(e, ae, Xe) : i && i(e, ae, Xe));
      }, ae.onerror = (Xe) => {
        Ft in He.xhrs && (ir(), i && i(e, ae, Xe));
      }, ae.ontimeout = (Xe) => {
        Ft in He.xhrs && i && i(e, ae, Xe);
      }, ae.onprogress = (Xe) => {
        if (Ft in He.xhrs) {
          var pt = G && ie && ae.response ? ae.response.byteLength : 0, yt = 0;
          pt > 0 && G && ie && (yt = Ct(pt), ue.set(new Uint8Array(ae.response), yt)), ne[e + 12 >> 2] = yt, He.setu64(e + 16, pt), He.setu64(e + 24, Xe.loaded - pt), He.setu64(e + 32, Xe.total), Te[e + 40 >> 1] = ae.readyState, ae.readyState >= 3 && ae.status === 0 && Xe.loaded > 0 && (ae.status = 200), Te[e + 42 >> 1] = ae.status, ae.statusText && ge(ae.statusText, e + 44, 64), a && a(e, ae, Xe), yt && Dt(yt);
        }
      }, ae.onreadystatechange = (Xe) => {
        Ft in He.xhrs && (Te[e + 40 >> 1] = ae.readyState, ae.readyState >= 2 && (Te[e + 42 >> 1] = ae.status), s && s(e, ae, Xe));
      };
      try {
        ae.send(kt);
      } catch (Xe) {
        i && i(e, ae, Xe);
      }
    }
    function ta(e, t, i, a, s) {
      if (!e) {
        s(t, 0, "IndexedDB not available!");
        return;
      }
      var c = t + 112, m = ne[c + 64 >> 2];
      m || (m = ne[t + 8 >> 2]);
      var g = Se(m);
      try {
        var E = e.transaction(["FILES"], "readwrite"), A = E.objectStore("FILES"), I = A.put(i, g);
        I.onsuccess = (U) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ge("OK", t + 44, 64), a(t, 0, g);
        }, I.onerror = (U) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 413, ge("Payload Too Large", t + 44, 64), s(t, 0, U);
        };
      } catch (U) {
        s(t, 0, U);
      }
    }
    function Tc(e, t, i, a) {
      if (!e) {
        a(t, 0, "IndexedDB not available!");
        return;
      }
      var s = t + 112, c = ne[s + 64 >> 2];
      c || (c = ne[t + 8 >> 2]);
      var m = Se(c);
      try {
        var g = e.transaction(["FILES"], "readonly"), E = g.objectStore("FILES"), A = E.get(m);
        A.onsuccess = (I) => {
          if (I.target.result) {
            var U = I.target.result, j = U.byteLength || U.length, V = Ct(j);
            ue.set(new Uint8Array(U), V), ne[t + 12 >> 2] = V, He.setu64(t + 16, j), He.setu64(t + 24, 0), He.setu64(t + 32, j), Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ge("OK", t + 44, 64), i(t, 0, U);
          } else
            Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ge("Not Found", t + 44, 64), a(t, 0, "no data");
        }, A.onerror = (I) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ge("Not Found", t + 44, 64), a(t, 0, I);
        };
      } catch (I) {
        a(t, 0, I);
      }
    }
    function Cc(e, t, i, a) {
      if (!e) {
        a(t, 0, "IndexedDB not available!");
        return;
      }
      var s = t + 112, c = ne[s + 64 >> 2];
      c || (c = ne[t + 8 >> 2]);
      var m = Se(c);
      try {
        var g = e.transaction(["FILES"], "readwrite"), E = g.objectStore("FILES"), A = E.delete(m);
        A.onsuccess = (I) => {
          var U = I.target.result;
          ne[t + 12 >> 2] = 0, He.setu64(t + 16, 0), He.setu64(t + 24, 0), He.setu64(t + 32, 0), Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 200, ge("OK", t + 44, 64), i(t, 0, U);
        }, A.onerror = (I) => {
          Te[t + 40 >> 1] = 4, Te[t + 42 >> 1] = 404, ge("Not Found", t + 44, 64), a(t, 0, I);
        };
      } catch (I) {
        a(t, 0, I);
      }
    }
    function Rc(e, t, i, a, s) {
      var c = e + 112, m = Se(c), g = ne[c + 36 >> 2], E = ne[c + 40 >> 2], A = ne[c + 44 >> 2], I = ne[c + 48 >> 2], U = ne[c + 52 >> 2], j = !!(U & 4), V = !!(U & 32), J = !!(U & 16), ce = !!(U & 64);
      function he(je) {
        ce ? je() : hn(je);
      }
      var we = (je, wt, Rt) => {
        he(() => {
          g ? Yt(g)(je) : t && t(je);
        });
      }, G = (je, wt, Rt) => {
        he(() => {
          A ? Yt(A)(je) : a && a(je);
        });
      }, ie = (je, wt, Rt) => {
        he(() => {
          E ? Yt(E)(je) : i && i(je);
        });
      }, ve = (je, wt, Rt) => {
        he(() => {
          I ? Yt(I)(je) : s && s(je);
        });
      }, Ee = (je, wt, Rt) => {
        pi(je, we, ie, G, ve);
      }, Me = (je, wt, Rt) => {
        var wr = (kt, ir, Xe) => {
          he(() => {
            g ? Yt(g)(kt) : t && t(kt);
          });
        }, Ft = (kt, ir, Xe) => {
          he(() => {
            g ? Yt(g)(kt) : t && t(kt);
          });
        };
        ta(He.dbInstance, je, wt.response, wr, Ft);
      }, ae = (je, wt, Rt) => {
        pi(je, Me, ie, G, ve);
      };
      if (m === "EM_IDB_STORE") {
        var at = ne[c + 84 >> 2];
        ta(He.dbInstance, e, ue.slice(at, at + ne[c + 88 >> 2]), we, ie);
      } else if (m === "EM_IDB_DELETE")
        Cc(He.dbInstance, e, we, ie);
      else if (!J)
        Tc(He.dbInstance, e, we, V ? ie : j ? ae : Ee);
      else if (!V)
        pi(e, j ? Me : we, ie, G, ve);
      else
        return 0;
      return e;
    }
    var mi = {};
    function Fc() {
      return w || "./this.program";
    }
    function Br() {
      if (!Br.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: Fc() };
        for (var i in mi)
          mi[i] === void 0 ? delete t[i] : t[i] = mi[i];
        var a = [];
        for (var i in t)
          a.push(i + "=" + t[i]);
        Br.strings = a;
      }
      return Br.strings;
    }
    function Ac(e, t, i) {
      for (var a = 0; a < e.length; ++a)
        me[t++ >> 0] = e.charCodeAt(a);
      i || (me[t >> 0] = 0);
    }
    function Ic(e, t) {
      var i = 0;
      return Br().forEach(function(a, s) {
        var c = t + i;
        ne[e + s * 4 >> 2] = c, Ac(a, c), i += a.length + 1;
      }), 0;
    }
    function Pc(e, t) {
      var i = Br();
      ne[e >> 2] = i.length;
      var a = 0;
      return i.forEach(function(s) {
        a += s.length + 1;
      }), ne[t >> 2] = a, 0;
    }
    function Dc(e) {
      try {
        var t = Ce.getStreamFromFD(e);
        return h.close(t), 0;
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return i.errno;
      }
    }
    function kc(e, t) {
      try {
        var i = Ce.getStreamFromFD(e), a = i.tty ? 2 : h.isDir(i.mode) ? 3 : h.isLink(i.mode) ? 7 : 4;
        return me[t >> 0] = a, 0;
      } catch (s) {
        if (typeof h > "u" || !(s instanceof h.ErrnoError))
          throw s;
        return s.errno;
      }
    }
    function Lc(e, t, i, a) {
      for (var s = 0, c = 0; c < i; c++) {
        var m = ne[t >> 2], g = ne[t + 4 >> 2];
        t += 8;
        var E = h.read(e, me, m, g, a);
        if (E < 0)
          return -1;
        if (s += E, E < g)
          break;
      }
      return s;
    }
    function Mc(e, t, i, a) {
      try {
        var s = Ce.getStreamFromFD(e), c = Lc(s, t, i);
        return ne[a >> 2] = c, 0;
      } catch (m) {
        if (typeof h > "u" || !(m instanceof h.ErrnoError))
          throw m;
        return m.errno;
      }
    }
    function Bc(e, t, i, a, s) {
      try {
        var c = ko(t, i);
        if (isNaN(c))
          return 61;
        var m = Ce.getStreamFromFD(e);
        return h.llseek(m, c, a), _ = [m.position >>> 0, (T = m.position, +Math.abs(T) >= 1 ? T > 0 ? (Math.min(+Math.floor(T / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((T - +(~~T >>> 0)) / 4294967296) >>> 0 : 0)], B[s >> 2] = _[0], B[s + 4 >> 2] = _[1], m.getdents && c === 0 && a === 0 && (m.getdents = null), 0;
      } catch (g) {
        if (typeof h > "u" || !(g instanceof h.ErrnoError))
          throw g;
        return g.errno;
      }
    }
    function Nc(e) {
      try {
        var t = Ce.getStreamFromFD(e);
        return t.stream_ops && t.stream_ops.fsync ? t.stream_ops.fsync(t) : 0;
      } catch (i) {
        if (typeof h > "u" || !(i instanceof h.ErrnoError))
          throw i;
        return i.errno;
      }
    }
    function Oc(e, t, i, a) {
      for (var s = 0, c = 0; c < i; c++) {
        var m = ne[t >> 2], g = ne[t + 4 >> 2];
        t += 8;
        var E = h.write(e, me, m, g, a);
        if (E < 0)
          return -1;
        s += E;
      }
      return s;
    }
    function jc(e, t, i, a) {
      try {
        var s = Ce.getStreamFromFD(e), c = Oc(s, t, i);
        return ne[a >> 2] = c, 0;
      } catch (m) {
        if (typeof h > "u" || !(m instanceof h.ErrnoError))
          throw m;
        return m.errno;
      }
    }
    function pn(e) {
      for (var t = e.split("."), i = 0; i < 4; i++) {
        var a = Number(t[i]);
        if (isNaN(a))
          return null;
        t[i] = a;
      }
      return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0;
    }
    function Nr(e) {
      return parseInt(e);
    }
    function _i(e) {
      var t, i, a, s, c = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, m = [];
      if (!c.test(e))
        return null;
      if (e === "::")
        return [0, 0, 0, 0, 0, 0, 0, 0];
      for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t = e.split(":"), t[t.length - 4] = Nr(t[t.length - 4]) + Nr(t[t.length - 3]) * 256, t[t.length - 3] = Nr(t[t.length - 2]) + Nr(t[t.length - 1]) * 256, t = t.slice(0, t.length - 2)) : t = e.split(":"), a = 0, s = 0, i = 0; i < t.length; i++)
        if (typeof t[i] == "string")
          if (t[i] === "Z") {
            for (s = 0; s < 8 - t.length + 1; s++)
              m[i + s] = 0;
            a = s - 1;
          } else
            m[i + a] = bn(parseInt(t[i], 16));
        else
          m[i + a] = t[i];
      return [m[1] << 16 | m[0], m[3] << 16 | m[2], m[5] << 16 | m[4], m[7] << 16 | m[6]];
    }
    var Xt = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name: function(e) {
      var t = pn(e);
      if (t !== null || (t = _i(e), t !== null))
        return e;
      var i;
      if (Xt.address_map.addrs[e])
        i = Xt.address_map.addrs[e];
      else {
        var a = Xt.address_map.id++;
        Ue(a < 65535, "exceeded max address mappings of 65535"), i = "172.29." + (a & 255) + "." + (a & 65280), Xt.address_map.names[i] = e, Xt.address_map.addrs[e] = i;
      }
      return i;
    }, lookup_addr: function(e) {
      return Xt.address_map.names[e] ? Xt.address_map.names[e] : null;
    } };
    function ra(e) {
      return (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255);
    }
    function Uc(e) {
      var t = "", i = 0, a = 0, s = 0, c = 0, m = 0, g = 0, E = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], A = true, I = "";
      for (g = 0; g < 5; g++)
        if (E[g] !== 0) {
          A = false;
          break;
        }
      if (A) {
        if (I = ra(E[6] | E[7] << 16), E[5] === -1)
          return t = "::ffff:", t += I, t;
        if (E[5] === 0)
          return t = "::", I === "0.0.0.0" && (I = ""), I === "0.0.0.1" && (I = "1"), t += I, t;
      }
      for (i = 0; i < 8; i++)
        E[i] === 0 && (i - s > 1 && (m = 0), s = i, m++), m > a && (a = m, c = i - a + 1);
      for (i = 0; i < 8; i++) {
        if (a > 1 && E[i] === 0 && i >= c && i < c + a) {
          i === c && (t += ":", c === 0 && (t += ":"));
          continue;
        }
        t += Number(da(E[i] & 65535)).toString(16), t += i < 7 ? ":" : "";
      }
      return t;
    }
    function Wc(e, t, i, a, s) {
      switch (t) {
        case 2:
          i = pn(i), ei(e, 16), s && (B[s >> 2] = 16), Pe[e >> 1] = t, B[e + 4 >> 2] = i, Pe[e + 2 >> 1] = bn(a);
          break;
        case 10:
          i = _i(i), ei(e, 28), s && (B[s >> 2] = 28), B[e >> 2] = t, B[e + 8 >> 2] = i[0], B[e + 12 >> 2] = i[1], B[e + 16 >> 2] = i[2], B[e + 20 >> 2] = i[3], Pe[e + 2 >> 1] = bn(a);
          break;
        default:
          return 5;
      }
      return 0;
    }
    function $c(e, t, i, a) {
      var s = 0, c = 0, m = 0, g = 0, E = 0, A = 0, I;
      function U(j, V, J, ce, he, we) {
        var G, ie, ve, Ee;
        return ie = j === 10 ? 28 : 16, he = j === 10 ? Uc(he) : ra(he), G = Ct(ie), Ee = Wc(G, j, he, we), Ue(!Ee), ve = Ct(32), B[ve + 4 >> 2] = j, B[ve + 8 >> 2] = V, B[ve + 12 >> 2] = J, B[ve + 24 >> 2] = ce, ne[ve + 20 >> 2] = G, j === 10 ? B[ve + 16 >> 2] = 28 : B[ve + 16 >> 2] = 16, B[ve + 28 >> 2] = 0, ve;
      }
      if (i && (m = B[i >> 2], g = B[i + 4 >> 2], E = B[i + 8 >> 2], A = B[i + 12 >> 2]), E && !A && (A = E === 2 ? 17 : 6), !E && A && (E = A === 17 ? 2 : 1), A === 0 && (A = 6), E === 0 && (E = 1), !e && !t)
        return -2;
      if (m & -1088 || i !== 0 && B[i >> 2] & 2 && !e)
        return -1;
      if (m & 32)
        return -2;
      if (E !== 0 && E !== 1 && E !== 2)
        return -7;
      if (g !== 0 && g !== 2 && g !== 10)
        return -6;
      if (t && (t = Se(t), c = parseInt(t, 10), isNaN(c)))
        return m & 1024 ? -2 : -8;
      if (!e)
        return g === 0 && (g = 2), m & 1 || (g === 2 ? s = gn(2130706433) : s = [0, 0, 0, 1]), I = U(g, E, A, null, s, c), ne[a >> 2] = I, 0;
      if (e = Se(e), s = pn(e), s !== null)
        if (g === 0 || g === 2)
          g = 2;
        else if (g === 10 && m & 8)
          s = [0, 0, gn(65535), s], g = 10;
        else
          return -2;
      else if (s = _i(e), s !== null)
        if (g === 0 || g === 10)
          g = 10;
        else
          return -2;
      return s != null ? (I = U(g, E, A, e, s, c), ne[a >> 2] = I, 0) : m & 4 ? -2 : (e = Xt.lookup_name(e), s = pn(e), g === 0 ? g = 2 : g === 10 && (s = [0, 0, gn(65535), s]), I = U(g, E, A, null, s, c), ne[a >> 2] = I, 0);
    }
    function mn(e, t) {
      mn.randomDevice || (mn.randomDevice = mr());
      for (var i = 0; i < t; i++)
        me[e + i >> 0] = mn.randomDevice();
      return 0;
    }
    var Q = { counter: 1, buffers: [], programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function(t) {
      Q.lastError || (Q.lastError = t);
    }, getNewId: function(e) {
      for (var t = Q.counter++, i = e.length; i < t; i++)
        e[i] = null;
      return t;
    }, getSource: function(e, t, i, a) {
      for (var s = "", c = 0; c < t; ++c) {
        var m = a ? B[a + c * 4 >> 2] : -1;
        s += Se(B[i + c * 4 >> 2], m < 0 ? void 0 : m);
      }
      return s;
    }, createContext: function(e, t) {
      if (!e.getContextSafariWebGL2Fixed) {
        let s = function(c, m) {
          var g = e.getContextSafariWebGL2Fixed(c, m);
          return c == "webgl" == g instanceof WebGLRenderingContext ? g : null;
        };
        e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = s;
      }
      var i = t.majorVersion > 1 ? e.getContext("webgl2", t) : e.getContext("webgl", t);
      if (!i)
        return 0;
      var a = Q.registerContext(i, t);
      return a;
    }, registerContext: function(e, t) {
      var i = Q.getNewId(Q.contexts), a = { handle: i, attributes: t, version: t.majorVersion, GLctx: e };
      return e.canvas && (e.canvas.GLctxObject = a), Q.contexts[i] = a, i;
    }, makeContextCurrent: function(e) {
      return Q.currentContext = Q.contexts[e], n.ctx = H = Q.currentContext && Q.currentContext.GLctx, !(e && !H);
    }, getContext: function(e) {
      return Q.contexts[e];
    }, deleteContext: function(e) {
      Q.currentContext === Q.contexts[e] && (Q.currentContext = null), typeof JSEvents == "object" && JSEvents.removeAllHandlersOnTarget(Q.contexts[e].GLctx.canvas), Q.contexts[e] && Q.contexts[e].GLctx.canvas && (Q.contexts[e].GLctx.canvas.GLctxObject = void 0), Q.contexts[e] = null;
    } };
    function Gc(e) {
      H.activeTexture(e);
    }
    function Vc(e, t) {
      H.attachShader(Q.programs[e], Q.shaders[t]);
    }
    function zc(e, t) {
      e == 35051 ? H.currentPixelPackBufferBinding = t : e == 35052 && (H.currentPixelUnpackBufferBinding = t), H.bindBuffer(e, Q.buffers[t]);
    }
    function Hc(e, t, i, a, s) {
      H.bindBufferRange(e, t, Q.buffers[i], a, s);
    }
    function Kc(e, t) {
      H.bindFramebuffer(e, Q.framebuffers[t]);
    }
    function Yc(e, t) {
      H.bindRenderbuffer(e, Q.renderbuffers[t]);
    }
    function Xc(e, t) {
      H.bindTexture(e, Q.textures[t]);
    }
    function Zc(e) {
      H.bindVertexArray(Q.vaos[e]);
    }
    function qc(e) {
      H.blendEquation(e);
    }
    function Qc(e, t) {
      H.blendFunc(e, t);
    }
    function Jc(e, t, i, a) {
      H.blendFuncSeparate(e, t, i, a);
    }
    function ed(e, t, i, a, s, c, m, g, E, A) {
      H.blitFramebuffer(e, t, i, a, s, c, m, g, E, A);
    }
    function td(e, t, i, a) {
      Q.currentContext.version >= 2 ? i && t ? H.bufferData(e, ue, a, i, t) : H.bufferData(e, t, a) : H.bufferData(e, i ? ue.subarray(i, i + t) : t, a);
    }
    function rd(e, t, i, a) {
      if (Q.currentContext.version >= 2) {
        i && H.bufferSubData(e, t, ue, a, i);
        return;
      }
      H.bufferSubData(e, t, ue.subarray(a, a + i));
    }
    function nd(e, t, i) {
      H.clearBufferfv(e, t, te, i >> 2);
    }
    function id(e, t, i, a) {
      H.colorMask(!!e, !!t, !!i, !!a);
    }
    function od(e) {
      H.compileShader(Q.shaders[e]);
    }
    function ad(e, t, i, a, s, c, m, g) {
      if (Q.currentContext.version >= 2) {
        H.currentPixelUnpackBufferBinding || !m ? H.compressedTexImage2D(e, t, i, a, s, c, m, g) : H.compressedTexImage2D(e, t, i, a, s, c, ue, g, m);
        return;
      }
      H.compressedTexImage2D(e, t, i, a, s, c, g ? ue.subarray(g, g + m) : null);
    }
    function sd(e, t, i, a, s, c, m, g, E) {
      H.currentPixelUnpackBufferBinding ? H.compressedTexImage3D(e, t, i, a, s, c, m, g, E) : H.compressedTexImage3D(e, t, i, a, s, c, m, ue, E, g);
    }
    function ud(e, t, i, a, s, c, m, g) {
      H.copyTexSubImage2D(e, t, i, a, s, c, m, g);
    }
    function ld() {
      var e = Q.getNewId(Q.programs), t = H.createProgram();
      return t.name = e, t.maxUniformLength = t.maxAttributeLength = t.maxUniformBlockNameLength = 0, t.uniformIdCounter = 1, Q.programs[e] = t, e;
    }
    function fd(e) {
      var t = Q.getNewId(Q.shaders);
      return Q.shaders[t] = H.createShader(e), t;
    }
    function cd(e, t) {
      for (var i = 0; i < e; i++) {
        var a = B[t + i * 4 >> 2], s = Q.buffers[a];
        s && (H.deleteBuffer(s), s.name = 0, Q.buffers[a] = null, a == H.currentPixelPackBufferBinding && (H.currentPixelPackBufferBinding = 0), a == H.currentPixelUnpackBufferBinding && (H.currentPixelUnpackBufferBinding = 0));
      }
    }
    function dd(e, t) {
      for (var i = 0; i < e; ++i) {
        var a = B[t + i * 4 >> 2], s = Q.framebuffers[a];
        s && (H.deleteFramebuffer(s), s.name = 0, Q.framebuffers[a] = null);
      }
    }
    function hd(e) {
      if (e) {
        var t = Q.programs[e];
        if (!t) {
          Q.recordError(1281);
          return;
        }
        H.deleteProgram(t), t.name = 0, Q.programs[e] = null;
      }
    }
    function pd(e, t) {
      for (var i = 0; i < e; i++) {
        var a = B[t + i * 4 >> 2], s = Q.renderbuffers[a];
        s && (H.deleteRenderbuffer(s), s.name = 0, Q.renderbuffers[a] = null);
      }
    }
    function md(e) {
      if (e) {
        var t = Q.shaders[e];
        if (!t) {
          Q.recordError(1281);
          return;
        }
        H.deleteShader(t), Q.shaders[e] = null;
      }
    }
    function _d(e, t) {
      for (var i = 0; i < e; i++) {
        var a = B[t + i * 4 >> 2], s = Q.textures[a];
        s && (H.deleteTexture(s), s.name = 0, Q.textures[a] = null);
      }
    }
    function yd(e, t) {
      for (var i = 0; i < e; i++) {
        var a = B[t + i * 4 >> 2];
        H.deleteVertexArray(Q.vaos[a]), Q.vaos[a] = null;
      }
    }
    function gd(e) {
      H.depthFunc(e);
    }
    function bd(e) {
      H.depthMask(!!e);
    }
    function wd(e) {
      H.disable(e);
    }
    function vd(e, t, i) {
      H.drawArrays(e, t, i);
    }
    function Ed(e, t, i, a) {
      H.drawArraysInstanced(e, t, i, a);
    }
    var yi = [];
    function xd(e, t) {
      for (var i = yi[e], a = 0; a < e; a++)
        i[a] = B[t + a * 4 >> 2];
      H.drawBuffers(i);
    }
    function Sd(e, t, i, a) {
      H.drawElements(e, t, i, a);
    }
    function Td(e, t, i, a, s) {
      H.drawElementsInstanced(e, t, i, a, s);
    }
    function Cd(e) {
      H.enable(e);
    }
    function Rd(e) {
      H.enableVertexAttribArray(e);
    }
    function Fd(e, t, i, a) {
      H.framebufferRenderbuffer(e, t, i, Q.renderbuffers[a]);
    }
    function Ad(e, t, i, a, s) {
      H.framebufferTexture2D(e, t, i, Q.textures[a], s);
    }
    function Id(e) {
      H.frontFace(e);
    }
    function Or(e, t, i, a) {
      for (var s = 0; s < e; s++) {
        var c = H[i](), m = c && Q.getNewId(a);
        c ? (c.name = m, a[m] = c) : Q.recordError(1282), B[t + s * 4 >> 2] = m;
      }
    }
    function Pd(e, t) {
      Or(e, t, "createBuffer", Q.buffers);
    }
    function Dd(e, t) {
      Or(e, t, "createFramebuffer", Q.framebuffers);
    }
    function kd(e, t) {
      Or(e, t, "createRenderbuffer", Q.renderbuffers);
    }
    function Ld(e, t) {
      Or(e, t, "createTexture", Q.textures);
    }
    function Md(e, t) {
      Or(e, t, "createVertexArray", Q.vaos);
    }
    function Bd(e) {
      H.generateMipmap(e);
    }
    function Nd() {
      var e = H.getError() || Q.lastError;
      return Q.lastError = 0, e;
    }
    function Od(e, t) {
      ne[e >> 2] = t, ne[e + 4 >> 2] = (t - ne[e >> 2]) / 4294967296;
    }
    function jd(e, t, i) {
      if (!t) {
        Q.recordError(1281);
        return;
      }
      var a = void 0;
      switch (e) {
        case 36346:
          a = 1;
          break;
        case 36344:
          i != 0 && i != 1 && Q.recordError(1280);
          return;
        case 34814:
        case 36345:
          a = 0;
          break;
        case 34466:
          var s = H.getParameter(34467);
          a = s ? s.length : 0;
          break;
        case 33309:
          if (Q.currentContext.version < 2) {
            Q.recordError(1282);
            return;
          }
          var c = H.getSupportedExtensions() || [];
          a = 2 * c.length;
          break;
        case 33307:
        case 33308:
          if (Q.currentContext.version < 2) {
            Q.recordError(1280);
            return;
          }
          a = e == 33307 ? 3 : 0;
          break;
      }
      if (a === void 0) {
        var m = H.getParameter(e);
        switch (typeof m) {
          case "number":
            a = m;
            break;
          case "boolean":
            a = m ? 1 : 0;
            break;
          case "string":
            Q.recordError(1280);
            return;
          case "object":
            if (m === null)
              switch (e) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068: {
                  a = 0;
                  break;
                }
                default: {
                  Q.recordError(1280);
                  return;
                }
              }
            else if (m instanceof Float32Array || m instanceof Uint32Array || m instanceof Int32Array || m instanceof Array) {
              for (var g = 0; g < m.length; ++g)
                switch (i) {
                  case 0:
                    B[t + g * 4 >> 2] = m[g];
                    break;
                  case 2:
                    te[t + g * 4 >> 2] = m[g];
                    break;
                  case 4:
                    me[t + g >> 0] = m[g] ? 1 : 0;
                    break;
                }
              return;
            } else
              try {
                a = m.name | 0;
              } catch (E) {
                Q.recordError(1280), pe("GL_INVALID_ENUM in glGet" + i + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + E + ")");
                return;
              }
            break;
          default:
            Q.recordError(1280), pe("GL_INVALID_ENUM in glGet" + i + "v: Native code calling glGet" + i + "v(" + e + ") and it returns " + m + " of type " + typeof m + "!");
            return;
        }
      }
      switch (i) {
        case 1:
          Od(t, a);
          break;
        case 0:
          B[t >> 2] = a;
          break;
        case 2:
          te[t >> 2] = a;
          break;
        case 4:
          me[t >> 0] = a ? 1 : 0;
          break;
      }
    }
    function Ud(e, t) {
      jd(e, t, 0);
    }
    function Wd(e, t, i, a) {
      var s = H.getProgramInfoLog(Q.programs[e]);
      s === null && (s = "(unknown error)");
      var c = t > 0 && a ? ge(s, a, t) : 0;
      i && (B[i >> 2] = c);
    }
    function $d(e, t, i) {
      if (!i) {
        Q.recordError(1281);
        return;
      }
      if (e >= Q.counter) {
        Q.recordError(1281);
        return;
      }
      if (e = Q.programs[e], t == 35716) {
        var a = H.getProgramInfoLog(e);
        a === null && (a = "(unknown error)"), B[i >> 2] = a.length + 1;
      } else if (t == 35719) {
        if (!e.maxUniformLength)
          for (var s = 0; s < H.getProgramParameter(e, 35718); ++s)
            e.maxUniformLength = Math.max(e.maxUniformLength, H.getActiveUniform(e, s).name.length + 1);
        B[i >> 2] = e.maxUniformLength;
      } else if (t == 35722) {
        if (!e.maxAttributeLength)
          for (var s = 0; s < H.getProgramParameter(e, 35721); ++s)
            e.maxAttributeLength = Math.max(e.maxAttributeLength, H.getActiveAttrib(e, s).name.length + 1);
        B[i >> 2] = e.maxAttributeLength;
      } else if (t == 35381) {
        if (!e.maxUniformBlockNameLength)
          for (var s = 0; s < H.getProgramParameter(e, 35382); ++s)
            e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, H.getActiveUniformBlockName(e, s).length + 1);
        B[i >> 2] = e.maxUniformBlockNameLength;
      } else
        B[i >> 2] = H.getProgramParameter(e, t);
    }
    function Gd(e, t, i, a) {
      var s = H.getShaderInfoLog(Q.shaders[e]);
      s === null && (s = "(unknown error)");
      var c = t > 0 && a ? ge(s, a, t) : 0;
      i && (B[i >> 2] = c);
    }
    function Vd(e, t, i) {
      if (!i) {
        Q.recordError(1281);
        return;
      }
      if (t == 35716) {
        var a = H.getShaderInfoLog(Q.shaders[e]);
        a === null && (a = "(unknown error)");
        var s = a ? a.length + 1 : 0;
        B[i >> 2] = s;
      } else if (t == 35720) {
        var c = H.getShaderSource(Q.shaders[e]), m = c ? c.length + 1 : 0;
        B[i >> 2] = m;
      } else
        B[i >> 2] = H.getShaderParameter(Q.shaders[e], t);
    }
    function na(e) {
      return e.slice(-1) == "]" && e.lastIndexOf("[");
    }
    function zd(e) {
      var t = e.uniformLocsById, i = e.uniformSizeAndIdsByName, a, s;
      if (!t)
        for (e.uniformLocsById = t = {}, e.uniformArrayNamesById = {}, a = 0; a < H.getProgramParameter(e, 35718); ++a) {
          var c = H.getActiveUniform(e, a), m = c.name, g = c.size, E = na(m), A = E > 0 ? m.slice(0, E) : m, I = e.uniformIdCounter;
          for (e.uniformIdCounter += g, i[A] = [g, I], s = 0; s < g; ++s)
            t[I] = s, e.uniformArrayNamesById[I++] = A;
        }
    }
    function Hd(e, t) {
      if (t = Se(t), e = Q.programs[e]) {
        zd(e);
        var i = e.uniformLocsById, a = 0, s = t, c = na(t);
        c > 0 && (a = Nr(t.slice(c + 1)) >>> 0, s = t.slice(0, c));
        var m = e.uniformSizeAndIdsByName[s];
        if (m && a < m[0] && (a += m[1], i[a] = i[a] || H.getUniformLocation(e, t)))
          return a;
      } else
        Q.recordError(1281);
      return -1;
    }
    function Kd(e, t, i) {
      for (var a = yi[t], s = 0; s < t; s++)
        a[s] = B[i + s * 4 >> 2];
      H.invalidateFramebuffer(e, a);
    }
    function Yd(e) {
      e = Q.programs[e], H.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {};
    }
    function Xd(e, t) {
      e == 3317 && (Q.unpackAlignment = t), H.pixelStorei(e, t);
    }
    function Zd(e, t, i, a) {
      function s(g, E) {
        return g + E - 1 & -E;
      }
      var c = e * i, m = s(c, a);
      return t * m;
    }
    function qd(e) {
      var t = { 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 };
      return t[e - 6402] || 1;
    }
    function gr(e) {
      return e -= 5120, e == 0 ? me : e == 1 ? ue : e == 2 ? Pe : e == 4 ? B : e == 6 ? te : e == 5 || e == 28922 || e == 28520 || e == 30779 || e == 30782 ? ne : Te;
    }
    function br(e) {
      return 31 - Math.clz32(e.BYTES_PER_ELEMENT);
    }
    function gi(e, t, i, a, s, c) {
      var m = gr(e), g = br(m), E = 1 << g, A = qd(t) * E, I = Zd(i, a, A, Q.unpackAlignment);
      return m.subarray(s >> g, s + I >> g);
    }
    function Qd(e, t, i, a, s, c, m) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelPackBufferBinding)
          H.readPixels(e, t, i, a, s, c, m);
        else {
          var g = gr(c);
          H.readPixels(e, t, i, a, s, c, g, m >> br(g));
        }
        return;
      }
      var E = gi(c, s, i, a, m);
      if (!E) {
        Q.recordError(1280);
        return;
      }
      H.readPixels(e, t, i, a, s, c, E);
    }
    function Jd(e, t, i, a) {
      H.renderbufferStorage(e, t, i, a);
    }
    function eh(e, t, i, a, s) {
      H.renderbufferStorageMultisample(e, t, i, a, s);
    }
    function th(e, t, i, a) {
      var s = Q.getSource(e, t, i, a);
      H.shaderSource(Q.shaders[e], s);
    }
    function rh(e, t, i, a, s, c, m, g, E) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelUnpackBufferBinding)
          H.texImage2D(e, t, i, a, s, c, m, g, E);
        else if (E) {
          var A = gr(g);
          H.texImage2D(e, t, i, a, s, c, m, g, A, E >> br(A));
        } else
          H.texImage2D(e, t, i, a, s, c, m, g, null);
        return;
      }
      H.texImage2D(e, t, i, a, s, c, m, g, E ? gi(g, m, a, s, E) : null);
    }
    function nh(e, t, i, a, s, c, m, g, E, A) {
      if (H.currentPixelUnpackBufferBinding)
        H.texImage3D(e, t, i, a, s, c, m, g, E, A);
      else if (A) {
        var I = gr(E);
        H.texImage3D(e, t, i, a, s, c, m, g, E, I, A >> br(I));
      } else
        H.texImage3D(e, t, i, a, s, c, m, g, E, null);
    }
    function ih(e, t, i) {
      H.texParameteri(e, t, i);
    }
    function oh(e, t, i, a, s) {
      H.texStorage2D(e, t, i, a, s);
    }
    function ah(e, t, i, a, s, c) {
      H.texStorage3D(e, t, i, a, s, c);
    }
    function sh(e, t, i, a, s, c, m, g, E) {
      if (Q.currentContext.version >= 2) {
        if (H.currentPixelUnpackBufferBinding)
          H.texSubImage2D(e, t, i, a, s, c, m, g, E);
        else if (E) {
          var A = gr(g);
          H.texSubImage2D(e, t, i, a, s, c, m, g, A, E >> br(A));
        } else
          H.texSubImage2D(e, t, i, a, s, c, m, g, null);
        return;
      }
      var I = null;
      E && (I = gi(g, m, s, c, E)), H.texSubImage2D(e, t, i, a, s, c, m, g, I);
    }
    function uh(e, t, i, a, s, c, m, g, E, A, I) {
      if (H.currentPixelUnpackBufferBinding)
        H.texSubImage3D(e, t, i, a, s, c, m, g, E, A, I);
      else if (I) {
        var U = gr(A);
        H.texSubImage3D(e, t, i, a, s, c, m, g, E, A, U, I >> br(U));
      } else
        H.texSubImage3D(e, t, i, a, s, c, m, g, E, A, null);
    }
    function Zt(e) {
      var t = H.currentProgram;
      if (t) {
        var i = t.uniformLocsById[e];
        return typeof i == "number" && (t.uniformLocsById[e] = i = H.getUniformLocation(t, t.uniformArrayNamesById[e] + (i > 0 ? "[" + i + "]" : ""))), i;
      } else
        Q.recordError(1282);
    }
    function lh(e, t) {
      H.uniform1f(Zt(e), t);
    }
    function fh(e, t) {
      H.uniform1i(Zt(e), t);
    }
    function ch(e, t) {
      H.uniform1ui(Zt(e), t);
    }
    function dh(e, t, i) {
      H.uniform2f(Zt(e), t, i);
    }
    var bi = [];
    function hh(e, t, i) {
      if (Q.currentContext.version >= 2) {
        t && H.uniform2fv(Zt(e), te, i >> 2, t * 2);
        return;
      }
      if (t <= 144)
        for (var a = bi[2 * t - 1], s = 0; s < 2 * t; s += 2)
          a[s] = te[i + 4 * s >> 2], a[s + 1] = te[i + (4 * s + 4) >> 2];
      else
        var a = te.subarray(i >> 2, i + t * 8 >> 2);
      H.uniform2fv(Zt(e), a);
    }
    function ph(e, t, i) {
      if (Q.currentContext.version >= 2) {
        t && H.uniform4fv(Zt(e), te, i >> 2, t * 4);
        return;
      }
      if (t <= 72) {
        var a = bi[4 * t - 1], s = te;
        i >>= 2;
        for (var c = 0; c < 4 * t; c += 4) {
          var m = i + c;
          a[c] = s[m], a[c + 1] = s[m + 1], a[c + 2] = s[m + 2], a[c + 3] = s[m + 3];
        }
      } else
        var a = te.subarray(i >> 2, i + t * 16 >> 2);
      H.uniform4fv(Zt(e), a);
    }
    function mh(e) {
      e = Q.programs[e], H.useProgram(e), H.currentProgram = e;
    }
    function _h(e, t, i, a, s) {
      H.vertexAttribIPointer(e, t, i, a, s);
    }
    function yh(e, t, i, a, s, c) {
      H.vertexAttribPointer(e, t, i, !!a, s, c);
    }
    function gh(e, t, i, a) {
      H.viewport(e, t, i, a);
    }
    function bh(e, t) {
      for (var i = 0, a = 0; a <= t; i += e[a++])
        ;
      return i;
    }
    var ia = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], oa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function wh(e, t) {
      for (var i = new Date(e.getTime()); t > 0; ) {
        var a = Lr(i.getFullYear()), s = i.getMonth(), c = (a ? ia : oa)[s];
        if (t > c - i.getDate())
          t -= c - i.getDate() + 1, i.setDate(1), s < 11 ? i.setMonth(s + 1) : (i.setMonth(0), i.setFullYear(i.getFullYear() + 1));
        else
          return i.setDate(i.getDate() + t), i;
      }
      return i;
    }
    function vh(e, t) {
      me.set(e, t);
    }
    function aa(e, t, i, a) {
      var s = B[a + 40 >> 2], c = { tm_sec: B[a >> 2], tm_min: B[a + 4 >> 2], tm_hour: B[a + 8 >> 2], tm_mday: B[a + 12 >> 2], tm_mon: B[a + 16 >> 2], tm_year: B[a + 20 >> 2], tm_wday: B[a + 24 >> 2], tm_yday: B[a + 28 >> 2], tm_isdst: B[a + 32 >> 2], tm_gmtoff: B[a + 36 >> 2], tm_zone: s ? Se(s) : "" }, m = Se(i), g = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
      for (var E in g)
        m = m.replace(new RegExp(E, "g"), g[E]);
      var A = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], I = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function U(G, ie, ve) {
        for (var Ee = typeof G == "number" ? G.toString() : G || ""; Ee.length < ie; )
          Ee = ve[0] + Ee;
        return Ee;
      }
      function j(G, ie) {
        return U(G, ie, "0");
      }
      function V(G, ie) {
        function ve(Me) {
          return Me < 0 ? -1 : Me > 0 ? 1 : 0;
        }
        var Ee;
        return (Ee = ve(G.getFullYear() - ie.getFullYear())) === 0 && (Ee = ve(G.getMonth() - ie.getMonth())) === 0 && (Ee = ve(G.getDate() - ie.getDate())), Ee;
      }
      function J(G) {
        switch (G.getDay()) {
          case 0:
            return new Date(G.getFullYear() - 1, 11, 29);
          case 1:
            return G;
          case 2:
            return new Date(G.getFullYear(), 0, 3);
          case 3:
            return new Date(G.getFullYear(), 0, 2);
          case 4:
            return new Date(G.getFullYear(), 0, 1);
          case 5:
            return new Date(G.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(G.getFullYear() - 1, 11, 30);
        }
      }
      function ce(G) {
        var ie = wh(new Date(G.tm_year + 1900, 0, 1), G.tm_yday), ve = new Date(ie.getFullYear(), 0, 4), Ee = new Date(ie.getFullYear() + 1, 0, 4), Me = J(ve), ae = J(Ee);
        return V(Me, ie) <= 0 ? V(ae, ie) <= 0 ? ie.getFullYear() + 1 : ie.getFullYear() : ie.getFullYear() - 1;
      }
      var he = { "%a": function(G) {
        return A[G.tm_wday].substring(0, 3);
      }, "%A": function(G) {
        return A[G.tm_wday];
      }, "%b": function(G) {
        return I[G.tm_mon].substring(0, 3);
      }, "%B": function(G) {
        return I[G.tm_mon];
      }, "%C": function(G) {
        var ie = G.tm_year + 1900;
        return j(ie / 100 | 0, 2);
      }, "%d": function(G) {
        return j(G.tm_mday, 2);
      }, "%e": function(G) {
        return U(G.tm_mday, 2, " ");
      }, "%g": function(G) {
        return ce(G).toString().substring(2);
      }, "%G": function(G) {
        return ce(G);
      }, "%H": function(G) {
        return j(G.tm_hour, 2);
      }, "%I": function(G) {
        var ie = G.tm_hour;
        return ie == 0 ? ie = 12 : ie > 12 && (ie -= 12), j(ie, 2);
      }, "%j": function(G) {
        return j(G.tm_mday + bh(Lr(G.tm_year + 1900) ? ia : oa, G.tm_mon - 1), 3);
      }, "%m": function(G) {
        return j(G.tm_mon + 1, 2);
      }, "%M": function(G) {
        return j(G.tm_min, 2);
      }, "%n": function() {
        return `
`;
      }, "%p": function(G) {
        return G.tm_hour >= 0 && G.tm_hour < 12 ? "AM" : "PM";
      }, "%S": function(G) {
        return j(G.tm_sec, 2);
      }, "%t": function() {
        return "	";
      }, "%u": function(G) {
        return G.tm_wday || 7;
      }, "%U": function(G) {
        var ie = G.tm_yday + 7 - G.tm_wday;
        return j(Math.floor(ie / 7), 2);
      }, "%V": function(G) {
        var ie = Math.floor((G.tm_yday + 7 - (G.tm_wday + 6) % 7) / 7);
        if ((G.tm_wday + 371 - G.tm_yday - 2) % 7 <= 2 && ie++, ie) {
          if (ie == 53) {
            var Ee = (G.tm_wday + 371 - G.tm_yday) % 7;
            Ee != 4 && (Ee != 3 || !Lr(G.tm_year)) && (ie = 1);
          }
        } else {
          ie = 52;
          var ve = (G.tm_wday + 7 - G.tm_yday - 1) % 7;
          (ve == 4 || ve == 5 && Lr(G.tm_year % 400 - 1)) && ie++;
        }
        return j(ie, 2);
      }, "%w": function(G) {
        return G.tm_wday;
      }, "%W": function(G) {
        var ie = G.tm_yday + 7 - (G.tm_wday + 6) % 7;
        return j(Math.floor(ie / 7), 2);
      }, "%y": function(G) {
        return (G.tm_year + 1900).toString().substring(2);
      }, "%Y": function(G) {
        return G.tm_year + 1900;
      }, "%z": function(G) {
        var ie = G.tm_gmtoff, ve = ie >= 0;
        return ie = Math.abs(ie) / 60, ie = ie / 60 * 100 + ie % 60, (ve ? "+" : "-") + ("0000" + ie).slice(-4);
      }, "%Z": function(G) {
        return G.tm_zone;
      }, "%%": function() {
        return "%";
      } };
      m = m.replace(/%%/g, "\0\0");
      for (var E in he)
        m.includes(E) && (m = m.replace(new RegExp(E, "g"), he[E](c)));
      m = m.replace(/\0\0/g, "%");
      var we = bt(m, false);
      return we.length > t ? 0 : (vh(we, e), we.length - 1);
    }
    function Eh(e, t, i, a, s) {
      return aa(e, t, i, a);
    }
    var sa = function(e, t, i, a) {
      e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = h.nextInode++, this.name = t, this.mode = i, this.node_ops = {}, this.stream_ops = {}, this.rdev = a;
    }, _n = 365, yn = 146;
    Object.defineProperties(sa.prototype, { read: { get: function() {
      return (this.mode & _n) === _n;
    }, set: function(e) {
      e ? this.mode |= _n : this.mode &= ~_n;
    } }, write: { get: function() {
      return (this.mode & yn) === yn;
    }, set: function(e) {
      e ? this.mode |= yn : this.mode &= ~yn;
    } }, isFolder: { get: function() {
      return h.isDir(this.mode);
    } }, isDevice: { get: function() {
      return h.isChrdev(this.mode);
    } } }), h.FSNode = sa, h.staticInit(), n.FS_createPath = h.createPath, n.FS_createDataFile = h.createDataFile, n.FS_createPreloadedFile = h.createPreloadedFile, n.FS_unlink = h.unlink, n.FS_createLazyFile = h.createLazyFile, n.FS_createDevice = h.createDevice, yl(), yr = n.BindingError = ti(Error, "BindingError"), Bo = n.InternalError = ti(Error, "InternalError"), Ml(), Rl(), Gl(), $o = n.UnboundTypeError = ti(Error, "UnboundTypeError"), ef(), n.requestFullscreen = function(t, i) {
      $.requestFullscreen(t, i);
    }, n.requestAnimationFrame = function(t) {
      $.requestAnimationFrame(t);
    }, n.setCanvasSize = function(t, i, a) {
      $.setCanvasSize(t, i, a);
    }, n.pauseMainLoop = function() {
      $.mainLoop.pause();
    }, n.resumeMainLoop = function() {
      $.mainLoop.resume();
    }, n.getUserMedia = function() {
      $.getUserMedia();
    }, n.createContext = function(t, i, a, s) {
      return $.createContext(t, i, a, s);
    }, He.staticInit();
    for (var H, qt = 0; qt < 32; ++qt)
      yi.push(new Array(qt));
    for (var xh = new Float32Array(288), qt = 0; qt < 288; ++qt)
      bi[qt] = xh.subarray(0, qt + 1);
    var ua = { __cxa_allocate_exception: Ve, __cxa_throw: Oe, __syscall_chmod: Xu, __syscall_fchmod: Zu, __syscall_fcntl64: Qu, __syscall_fstat64: Ju, __syscall_ftruncate64: el, __syscall_getcwd: tl, __syscall_getdents64: rl, __syscall_ioctl: nl, __syscall_lstat64: il, __syscall_mkdirat: ol, __syscall_newfstatat: al, __syscall_openat: sl, __syscall_readlinkat: ul, __syscall_renameat: ll, __syscall_stat64: fl, __syscall_symlink: cl, __syscall_unlinkat: dl, _dlinit: hl, _dlopen_js: pl, _dlsym_js: ml, _embind_register_bigint: _l, _embind_register_bool: wl, _embind_register_class: Kl, _embind_register_class_class_function: Yl, _embind_register_class_constructor: Xl, _embind_register_class_function: Zl, _embind_register_class_property: ql, _embind_register_emval: tf, _embind_register_enum: nf, _embind_register_enum_value: of, _embind_register_float: sf, _embind_register_function: uf, _embind_register_integer: ff, _embind_register_memory_view: cf, _embind_register_smart_ptr: df, _embind_register_std_string: hf, _embind_register_std_wstring: wf, _embind_register_void: vf, _emscripten_fetch_free: Ef, _emscripten_get_now_is_monotonic: Sf, _emval_as: Tf, _emval_call: Cf, _emval_call_void_method: Ff, _emval_decref: li, _emval_get_method_caller: If, _emval_get_module_property: Pf, _emval_get_property: Df, _emval_incref: kf, _emval_is_number: Lf, _emval_new_cstring: Mf, _emval_run_destructors: Bf, _emval_set_property: Nf, _emval_take_value: Of, _gmtime_js: jf, _localtime_js: $f, _mktime_js: Gf, _mmap_js: Vf, _munmap_js: zf, _tzset_js: Hf, abort: Kf, alBufferData: Jf, alDeleteBuffers: ec, alDeleteSources: tc, alGenBuffers: rc, alGenSources: nc, alGetError: ic, alGetSourcei: oc, alGetString: ac, alSourcePause: sc, alSourcePlay: uc, alSourceStop: lc, alSourcef: fc, alSourcei: Qo, alcCloseDevice: cc, alcCreateContext: hc, alcDestroyContext: pc, alcGetError: mc, alcGetString: _c, alcMakeContextCurrent: yc, alcOpenDevice: gc, bnb_get_random_value: W, bnb_randombytes_init_if_needed: K, create_video: C, delete_video: P, emscripten_date_now: bc, emscripten_get_heap_max: wc, emscripten_get_now: dn, emscripten_is_main_browser_thread: vc, emscripten_memcpy_big: Ec, emscripten_resize_heap: Sc, emscripten_start_fetch: Rc, environ_get: Ic, environ_sizes_get: Pc, exit: Zf, fd_close: Dc, fd_fdstat_get: kc, fd_read: Mc, fd_seek: Bc, fd_sync: Nc, fd_write: jc, get_current_hostname: f, getaddrinfo: $c, getentropy: mn, glActiveTexture: Gc, glAttachShader: Vc, glBindBuffer: zc, glBindBufferRange: Hc, glBindFramebuffer: Kc, glBindRenderbuffer: Yc, glBindTexture: Xc, glBindVertexArray: Zc, glBlendEquation: qc, glBlendFunc: Qc, glBlendFuncSeparate: Jc, glBlitFramebuffer: ed, glBufferData: td, glBufferSubData: rd, glClearBufferfv: nd, glColorMask: id, glCompileShader: od, glCompressedTexImage2D: ad, glCompressedTexImage3D: sd, glCopyTexSubImage2D: ud, glCreateProgram: ld, glCreateShader: fd, glDeleteBuffers: cd, glDeleteFramebuffers: dd, glDeleteProgram: hd, glDeleteRenderbuffers: pd, glDeleteShader: md, glDeleteTextures: _d, glDeleteVertexArrays: yd, glDepthFunc: gd, glDepthMask: bd, glDisable: wd, glDrawArrays: vd, glDrawArraysInstanced: Ed, glDrawBuffers: xd, glDrawElements: Sd, glDrawElementsInstanced: Td, glEnable: Cd, glEnableVertexAttribArray: Rd, glFramebufferRenderbuffer: Fd, glFramebufferTexture2D: Ad, glFrontFace: Id, glGenBuffers: Pd, glGenFramebuffers: Dd, glGenRenderbuffers: kd, glGenTextures: Ld, glGenVertexArrays: Md, glGenerateMipmap: Bd, glGetError: Nd, glGetIntegerv: Ud, glGetProgramInfoLog: Wd, glGetProgramiv: $d, glGetShaderInfoLog: Gd, glGetShaderiv: Vd, glGetUniformLocation: Hd, glInvalidateFramebuffer: Kd, glLinkProgram: Yd, glPixelStorei: Xd, glReadPixels: Qd, glRenderbufferStorage: Jd, glRenderbufferStorageMultisample: eh, glShaderSource: th, glTexImage2D: rh, glTexImage3D: nh, glTexParameteri: ih, glTexStorage2D: oh, glTexStorage3D: ah, glTexSubImage2D: sh, glTexSubImage3D: uh, glUniform1f: lh, glUniform1i: fh, glUniform1ui: ch, glUniform2f: dh, glUniform2fv: hh, glUniform4fv: ph, glUseProgram: mh, glVertexAttribIPointer: _h, glVertexAttribPointer: yh, glViewport: gh, is_electron: u, strftime: aa, strftime_l: Eh };
    S(), n.___wasm_call_ctors = function() {
      return (n.___wasm_call_ctors = n.asm.__wasm_call_ctors).apply(null, arguments);
    };
    var Ct = n._malloc = function() {
      return (Ct = n._malloc = n.asm.malloc).apply(null, arguments);
    }, la = n.___errno_location = function() {
      return (la = n.___errno_location = n.asm.__errno_location).apply(null, arguments);
    }, Dt = n._free = function() {
      return (Dt = n._free = n.asm.free).apply(null, arguments);
    }, fa = n.___getTypeName = function() {
      return (fa = n.___getTypeName = n.asm.__getTypeName).apply(null, arguments);
    };
    n.__embind_initialize_bindings = function() {
      return (n.__embind_initialize_bindings = n.asm._embind_initialize_bindings).apply(null, arguments);
    };
    var gn = n._htonl = function() {
      return (gn = n._htonl = n.asm.htonl).apply(null, arguments);
    }, bn = n._htons = function() {
      return (bn = n._htons = n.asm.htons).apply(null, arguments);
    }, ca = n._emscripten_builtin_memalign = function() {
      return (ca = n._emscripten_builtin_memalign = n.asm.emscripten_builtin_memalign).apply(null, arguments);
    }, da = n._ntohs = function() {
      return (da = n._ntohs = n.asm.ntohs).apply(null, arguments);
    }, ha = n.___cxa_is_pointer_type = function() {
      return (ha = n.___cxa_is_pointer_type = n.asm.__cxa_is_pointer_type).apply(null, arguments);
    };
    n.dynCall_jii = function() {
      return (n.dynCall_jii = n.asm.dynCall_jii).apply(null, arguments);
    }, n.dynCall_jiii = function() {
      return (n.dynCall_jiii = n.asm.dynCall_jiii).apply(null, arguments);
    }, n.dynCall_viiij = function() {
      return (n.dynCall_viiij = n.asm.dynCall_viiij).apply(null, arguments);
    }, n.dynCall_viijjiii = function() {
      return (n.dynCall_viijjiii = n.asm.dynCall_viijjiii).apply(null, arguments);
    }, n.dynCall_iiiiji = function() {
      return (n.dynCall_iiiiji = n.asm.dynCall_iiiiji).apply(null, arguments);
    }, n.dynCall_iiiijii = function() {
      return (n.dynCall_iiiijii = n.asm.dynCall_iiiijii).apply(null, arguments);
    }, n.dynCall_iijjj = function() {
      return (n.dynCall_iijjj = n.asm.dynCall_iijjj).apply(null, arguments);
    }, n.dynCall_viij = function() {
      return (n.dynCall_viij = n.asm.dynCall_viij).apply(null, arguments);
    }, n.dynCall_ji = function() {
      return (n.dynCall_ji = n.asm.dynCall_ji).apply(null, arguments);
    }, n.dynCall_iiffj = function() {
      return (n.dynCall_iiffj = n.asm.dynCall_iiffj).apply(null, arguments);
    }, n.dynCall_vijjiii = function() {
      return (n.dynCall_vijjiii = n.asm.dynCall_vijjiii).apply(null, arguments);
    }, n.dynCall_viiiji = function() {
      return (n.dynCall_viiiji = n.asm.dynCall_viiiji).apply(null, arguments);
    }, n.dynCall_viiijii = function() {
      return (n.dynCall_viiijii = n.asm.dynCall_viiijii).apply(null, arguments);
    }, n.dynCall_vij = function() {
      return (n.dynCall_vij = n.asm.dynCall_vij).apply(null, arguments);
    }, n.dynCall_iiiiiij = function() {
      return (n.dynCall_iiiiiij = n.asm.dynCall_iiiiiij).apply(null, arguments);
    }, n.dynCall_viijji = function() {
      return (n.dynCall_viijji = n.asm.dynCall_viijji).apply(null, arguments);
    }, n.dynCall_viiiij = function() {
      return (n.dynCall_viiiij = n.asm.dynCall_viiiij).apply(null, arguments);
    }, n.dynCall_viiiiji = function() {
      return (n.dynCall_viiiiji = n.asm.dynCall_viiiiji).apply(null, arguments);
    }, n.dynCall_iiiji = function() {
      return (n.dynCall_iiiji = n.asm.dynCall_iiiji).apply(null, arguments);
    }, n.dynCall_jijjiii = function() {
      return (n.dynCall_jijjiii = n.asm.dynCall_jijjiii).apply(null, arguments);
    }, n.dynCall_jijiii = function() {
      return (n.dynCall_jijiii = n.asm.dynCall_jijiii).apply(null, arguments);
    }, n.dynCall_jijiiii = function() {
      return (n.dynCall_jijiiii = n.asm.dynCall_jijiiii).apply(null, arguments);
    }, n.dynCall_jijii = function() {
      return (n.dynCall_jijii = n.asm.dynCall_jijii).apply(null, arguments);
    }, n.dynCall_jijiiiiii = function() {
      return (n.dynCall_jijiiiiii = n.asm.dynCall_jijiiiiii).apply(null, arguments);
    }, n.dynCall_jijj = function() {
      return (n.dynCall_jijj = n.asm.dynCall_jijj).apply(null, arguments);
    }, n.dynCall_viji = function() {
      return (n.dynCall_viji = n.asm.dynCall_viji).apply(null, arguments);
    }, n.dynCall_iijijjji = function() {
      return (n.dynCall_iijijjji = n.asm.dynCall_iijijjji).apply(null, arguments);
    }, n.dynCall_iiiij = function() {
      return (n.dynCall_iiiij = n.asm.dynCall_iiiij).apply(null, arguments);
    }, n.dynCall_iiji = function() {
      return (n.dynCall_iiji = n.asm.dynCall_iiji).apply(null, arguments);
    }, n.dynCall_jijij = function() {
      return (n.dynCall_jijij = n.asm.dynCall_jijij).apply(null, arguments);
    }, n.dynCall_iijijji = function() {
      return (n.dynCall_iijijji = n.asm.dynCall_iijijji).apply(null, arguments);
    }, n.dynCall_jij = function() {
      return (n.dynCall_jij = n.asm.dynCall_jij).apply(null, arguments);
    }, n.dynCall_jiji = function() {
      return (n.dynCall_jiji = n.asm.dynCall_jiji).apply(null, arguments);
    }, n.dynCall_viiijj = function() {
      return (n.dynCall_viiijj = n.asm.dynCall_viiijj).apply(null, arguments);
    }, n.dynCall_iiij = function() {
      return (n.dynCall_iiij = n.asm.dynCall_iiij).apply(null, arguments);
    }, n.dynCall_iijii = function() {
      return (n.dynCall_iijii = n.asm.dynCall_iijii).apply(null, arguments);
    }, n.dynCall_iiijiji = function() {
      return (n.dynCall_iiijiji = n.asm.dynCall_iiijiji).apply(null, arguments);
    }, n.dynCall_iiijiii = function() {
      return (n.dynCall_iiijiii = n.asm.dynCall_iiijiii).apply(null, arguments);
    }, n.dynCall_viijii = function() {
      return (n.dynCall_viijii = n.asm.dynCall_viijii).apply(null, arguments);
    }, n.dynCall_iiiiij = function() {
      return (n.dynCall_iiiiij = n.asm.dynCall_iiiiij).apply(null, arguments);
    }, n.dynCall_iiiiijj = function() {
      return (n.dynCall_iiiiijj = n.asm.dynCall_iiiiijj).apply(null, arguments);
    }, n.dynCall_iiiiiijj = function() {
      return (n.dynCall_iiiiiijj = n.asm.dynCall_iiiiiijj).apply(null, arguments);
    }, n.dynCall_jjj = function() {
      return (n.dynCall_jjj = n.asm.dynCall_jjj).apply(null, arguments);
    }, n.dynCall_iiiijj = function() {
      return (n.dynCall_iiiijj = n.asm.dynCall_iiiijj).apply(null, arguments);
    }, n.dynCall_viijj = function() {
      return (n.dynCall_viijj = n.asm.dynCall_viijj).apply(null, arguments);
    }, n.dynCall_viiijjjj = function() {
      return (n.dynCall_viiijjjj = n.asm.dynCall_viiijjjj).apply(null, arguments);
    }, n.___start_em_js = 1272084, n.___stop_em_js = 1274218, n.addRunDependency = d, n.removeRunDependency = p, n.FS_createPath = h.createPath, n.FS_createDataFile = h.createDataFile, n.FS_createPreloadedFile = h.createPreloadedFile, n.FS_createLazyFile = h.createLazyFile, n.FS_createDevice = h.createDevice, n.FS_unlink = h.unlink, n.FS = h, n.GL = Q;
    var wn;
    q = function e() {
      wn || pa(), wn || (q = e);
    };
    function pa(e) {
      if (O > 0 || (Je(), O > 0))
        return;
      function t() {
        wn || (wn = true, n.calledRun = true, !Ne && (ot(), l(n), n.onRuntimeInitialized && n.onRuntimeInitialized(), At()));
      }
      n.setStatus ? (n.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          n.setStatus("");
        }, 1), t();
      }, 1)) : t();
    }
    if (n.preInit)
      for (typeof n.preInit == "function" && (n.preInit = [n.preInit]); n.preInit.length > 0; )
        n.preInit.pop()();
    return pa(), Jo = function() {
    }, n.ready;
  };
})();
const mp = pp, _p = () => {
  const r = document.createElement("canvas");
  return r.style.maxWidth = "100%", r.style.objectFit = "cover", r;
}, yp = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])), gp = yp, bp = (r) => (r !== "" && !r.endsWith("/") && (r += "/"), (o) => r + o), wp = (r) => (o) => r[o], vp = async (r, o = {}) => {
  var _a2, _b, _c, _d;
  if (await gp())
    (_a2 = o.info) == null ? void 0 : _a2.call(o, 'The platform supports SIMD. Going to use "BanubaSDK.simd.wasm"');
  else
    return (_b = o.info) == null ? void 0 : _b.call(o, 'The platform does not support SIMD. Using "BanubaSDK.wasm"'), r;
  const l = r("BanubaSDK.simd.wasm");
  return l ? await fetch(l, { method: "HEAD" }).then((v) => v.ok) ? (v) => {
    const [w, y] = v.split(".");
    if (y !== "wasm")
      return r(v);
    const D = [w, "simd", y].join(".");
    return r(D);
  } : ((_c = o.warn) == null ? void 0 : _c.call(
    o,
    `Unable to fetch "BanubaSDK.simd.wasm" from the "${l}". Using "BanubaSDK.wasm" as a fallback`
  ), r) : ((_d = o.warn) == null ? void 0 : _d.call(
    o,
    '"BanubaSDK.simd.wasm" is missing in the "locateFile" option. Using "BanubaSDK.wasm" as a fallback'
  ), r);
}, Ep = (() => {
  try {
    return new URL(".", self.location).toString();
  } catch {
    return "";
  }
})(), xp = async (r, o) => (typeof r > "u" && (r = Ep), typeof r == "string" && (r = bp(r)), typeof r == "object" && (r = wp(r)), r = await vp(r, o), r);
var Wr = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.WARNING = "warn", r.INFO = "info", r.DEBUG = "debug", r))(Wr || {});
function Sp(r) {
  const o = Object.keys(Wr).reverse().find((l) => typeof r[Wr[l]] == "function") ?? "ERROR", n = (l) => {
    for (const v in Wr)
      if (l.includes(v)) {
        const w = r[Wr[v]];
        if (typeof w == "function") {
          w.call(r, l);
          return;
        }
      }
    const b = r.debug;
    typeof b == "function" && b.call(r, l);
  };
  return {
    logLevel: o,
    print: n,
    printErr: n
  };
}
const Tp = ["isAliasOf", "clone", "delete", "isDeleted", "deleteLater"], Cp = ["size", "get", "set", "push_back"], Ns = (r) => {
  if (r == null || typeof r != "function")
    return false;
  const { prototype: o } = r;
  return o ? Tp.every((n) => n in o) : false;
}, Os = (r) => r == null || typeof r != "object" ? false : Ns(r.constructor), Aa = (r) => Os(r) && Cp.every((o) => o in r), Rp = (r, o) => new Proxy(r, {
  // instance methods
  get(l, b) {
    const v = l[b];
    return typeof v == "function" ? js(v, o) : v;
  }
}), js = (r, o) => new Proxy(r, {
  apply(l, b, v) {
    try {
      const w = l.apply(b, v);
      return Os(w) ? Rp(w, o) : w;
    } catch (w) {
      throw typeof w == "number" && (w = new Error(o(w))), w;
    }
  }
}), Fp = (r, o) => new Proxy(r, {
  construct(l, b) {
    try {
      return new l(...b);
    } catch (v) {
      throw typeof v == "number" && (v = new Error(o(v))), v;
    }
  },
  // static methods
  get(l, b) {
    const v = l[b];
    return typeof v == "function" ? js(v, o) : v;
  }
}), Ap = (r, o) => {
  for (const [n, l] of Object.entries(r))
    Ns(l) && Object.defineProperty(r, n, { value: Fp(l, o) });
}, Ip = "recognizer_features_update";
async function Pp({
  clientToken: r,
  locateFile: o,
  canvas: n = _p(),
  logger: l = { warn: console.warn, error: console.error },
  ...b
}) {
  const v = await xp(o, l), { logLevel: w, print: y, printErr: D } = Sp(l), k = await new Promise(
    (N, ee) => mp({
      locateFile: v,
      /**
       * Do *not* pass `canvas` here, it *must* be set later to workaround Emscripten memory leaks
       */
      // canvas,
      print: y,
      printErr: D,
      onAbort: (le) => {
        le instanceof WebAssembly.CompileError && ee(
          new Error(
            `Failed to compile "BanubaSDK.wasm": the file "${v(
              "BanubaSDK.wasm"
            )}" is invalid. This error is usually caused by misconfigured "locateFile" option, see https://docs.banuba.com/face-ar-sdk-v1/generated/typedoc/modules.html#SDKOptions. Original Error: ` + le
          )
        );
      },
      ...b
    }).then(N, ee)
  );
  return Ap(k, (N) => k.getExceptionMessage(N)), k.UtilityManager.initialize(new k.VectorString(), r), k.UtilityManager.setLogLevel(k.SeverityLevel[w]), k.setCanvasSize = (N, ee) => {
    Object.assign(n, { width: N, height: ee });
  }, k.createContext(n, true, true, {
    alpha: true,
    antialias: false,
    depth: false,
    // desynchronized: true,
    // powerPreference: "high-performance",
    premultipliedAlpha: false,
    preserveDrawingBuffer: true,
    stencil: false
  }), k.canvas = n, Us(k.ctx), k;
}
function Us(r) {
  const o = ["EXT_color_buffer_half_float", "EXT_color_buffer_float"];
  for (const n of o)
    r.getExtension(n);
}
var lt = /* @__PURE__ */ ((r) => (r[r.Running = 0] = "Running", r[r.Idle = 1] = "Idle", r[r.Paused = 2] = "Paused", r))(lt || {}), Ws = { exports: {} }, Ri = { exports: {} }, er = {}, Xr = {};
Xr.byteLength = Lp;
Xr.toByteArray = Bp;
Xr.fromByteArray = jp;
var Bt = [], vt = [], Dp = typeof Uint8Array < "u" ? Uint8Array : Array, Fi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vr = 0, kp = Fi.length; vr < kp; ++vr)
  Bt[vr] = Fi[vr], vt[Fi.charCodeAt(vr)] = vr;
vt["-".charCodeAt(0)] = 62;
vt["_".charCodeAt(0)] = 63;
function $s(r) {
  var o = r.length;
  if (o % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = r.indexOf("=");
  n === -1 && (n = o);
  var l = n === o ? 0 : 4 - n % 4;
  return [n, l];
}
function Lp(r) {
  var o = $s(r), n = o[0], l = o[1];
  return (n + l) * 3 / 4 - l;
}
function Mp(r, o, n) {
  return (o + n) * 3 / 4 - n;
}
function Bp(r) {
  var o, n = $s(r), l = n[0], b = n[1], v = new Dp(Mp(r, l, b)), w = 0, y = b > 0 ? l - 4 : l, D;
  for (D = 0; D < y; D += 4)
    o = vt[r.charCodeAt(D)] << 18 | vt[r.charCodeAt(D + 1)] << 12 | vt[r.charCodeAt(D + 2)] << 6 | vt[r.charCodeAt(D + 3)], v[w++] = o >> 16 & 255, v[w++] = o >> 8 & 255, v[w++] = o & 255;
  return b === 2 && (o = vt[r.charCodeAt(D)] << 2 | vt[r.charCodeAt(D + 1)] >> 4, v[w++] = o & 255), b === 1 && (o = vt[r.charCodeAt(D)] << 10 | vt[r.charCodeAt(D + 1)] << 4 | vt[r.charCodeAt(D + 2)] >> 2, v[w++] = o >> 8 & 255, v[w++] = o & 255), v;
}
function Np(r) {
  return Bt[r >> 18 & 63] + Bt[r >> 12 & 63] + Bt[r >> 6 & 63] + Bt[r & 63];
}
function Op(r, o, n) {
  for (var l, b = [], v = o; v < n; v += 3)
    l = (r[v] << 16 & 16711680) + (r[v + 1] << 8 & 65280) + (r[v + 2] & 255), b.push(Np(l));
  return b.join("");
}
function jp(r) {
  for (var o, n = r.length, l = n % 3, b = [], v = 16383, w = 0, y = n - l; w < y; w += v)
    b.push(Op(r, w, w + v > y ? y : w + v));
  return l === 1 ? (o = r[n - 1], b.push(
    Bt[o >> 2] + Bt[o << 4 & 63] + "=="
  )) : l === 2 && (o = (r[n - 2] << 8) + r[n - 1], b.push(
    Bt[o >> 10] + Bt[o >> 4 & 63] + Bt[o << 2 & 63] + "="
  )), b.join("");
}
var Un = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Un.read = function(r, o, n, l, b) {
  var v, w, y = b * 8 - l - 1, D = (1 << y) - 1, k = D >> 1, N = -7, ee = n ? b - 1 : 0, le = n ? -1 : 1, Z = r[o + ee];
  for (ee += le, v = Z & (1 << -N) - 1, Z >>= -N, N += y; N > 0; v = v * 256 + r[o + ee], ee += le, N -= 8)
    ;
  for (w = v & (1 << -N) - 1, v >>= -N, N += l; N > 0; w = w * 256 + r[o + ee], ee += le, N -= 8)
    ;
  if (v === 0)
    v = 1 - k;
  else {
    if (v === D)
      return w ? NaN : (Z ? -1 : 1) * (1 / 0);
    w = w + Math.pow(2, l), v = v - k;
  }
  return (Z ? -1 : 1) * w * Math.pow(2, v - l);
};
Un.write = function(r, o, n, l, b, v) {
  var w, y, D, k = v * 8 - b - 1, N = (1 << k) - 1, ee = N >> 1, le = b === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, Z = l ? 0 : v - 1, z = l ? 1 : -1, pe = o < 0 || o === 0 && 1 / o < 0 ? 1 : 0;
  for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (y = isNaN(o) ? 1 : 0, w = N) : (w = Math.floor(Math.log(o) / Math.LN2), o * (D = Math.pow(2, -w)) < 1 && (w--, D *= 2), w + ee >= 1 ? o += le / D : o += le * Math.pow(2, 1 - ee), o * D >= 2 && (w++, D /= 2), w + ee >= N ? (y = 0, w = N) : w + ee >= 1 ? (y = (o * D - 1) * Math.pow(2, b), w = w + ee) : (y = o * Math.pow(2, ee - 1) * Math.pow(2, b), w = 0)); b >= 8; r[n + Z] = y & 255, Z += z, y /= 256, b -= 8)
    ;
  for (w = w << b | y, k += b; k > 0; r[n + Z] = w & 255, Z += z, w /= 256, k -= 8)
    ;
  r[n + Z - z] |= pe * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const o = Xr, n = Un, l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = y, r.SlowBuffer = re, r.INSPECT_MAX_BYTES = 50;
  const b = 2147483647;
  r.kMaxLength = b, y.TYPED_ARRAY_SUPPORT = v(), !y.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function v() {
    try {
      const _ = new Uint8Array(1), u = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(_, u), _.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(y.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (y.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(y.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (y.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(_) {
    if (_ > b)
      throw new RangeError('The value "' + _ + '" is invalid for option "size"');
    const u = new Uint8Array(_);
    return Object.setPrototypeOf(u, y.prototype), u;
  }
  function y(_, u, f) {
    if (typeof _ == "number") {
      if (typeof u == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return ee(_);
    }
    return D(_, u, f);
  }
  y.poolSize = 8192;
  function D(_, u, f) {
    if (typeof _ == "string")
      return le(_, u);
    if (ArrayBuffer.isView(_))
      return z(_);
    if (_ == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _
      );
    if (Y(_, ArrayBuffer) || _ && Y(_.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(_, SharedArrayBuffer) || _ && Y(_.buffer, SharedArrayBuffer)))
      return pe(_, u, f);
    if (typeof _ == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const C = _.valueOf && _.valueOf();
    if (C != null && C !== _)
      return y.from(C, u, f);
    const P = _e(_);
    if (P)
      return P;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof _[Symbol.toPrimitive] == "function")
      return y.from(_[Symbol.toPrimitive]("string"), u, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _
    );
  }
  y.from = function(_, u, f) {
    return D(_, u, f);
  }, Object.setPrototypeOf(y.prototype, Uint8Array.prototype), Object.setPrototypeOf(y, Uint8Array);
  function k(_) {
    if (typeof _ != "number")
      throw new TypeError('"size" argument must be of type number');
    if (_ < 0)
      throw new RangeError('The value "' + _ + '" is invalid for option "size"');
  }
  function N(_, u, f) {
    return k(_), _ <= 0 ? w(_) : u !== void 0 ? typeof f == "string" ? w(_).fill(u, f) : w(_).fill(u) : w(_);
  }
  y.alloc = function(_, u, f) {
    return N(_, u, f);
  };
  function ee(_) {
    return k(_), w(_ < 0 ? 0 : de(_) | 0);
  }
  y.allocUnsafe = function(_) {
    return ee(_);
  }, y.allocUnsafeSlow = function(_) {
    return ee(_);
  };
  function le(_, u) {
    if ((typeof u != "string" || u === "") && (u = "utf8"), !y.isEncoding(u))
      throw new TypeError("Unknown encoding: " + u);
    const f = Fe(_, u) | 0;
    let C = w(f);
    const P = C.write(_, u);
    return P !== f && (C = C.slice(0, P)), C;
  }
  function Z(_) {
    const u = _.length < 0 ? 0 : de(_.length) | 0, f = w(u);
    for (let C = 0; C < u; C += 1)
      f[C] = _[C] & 255;
    return f;
  }
  function z(_) {
    if (Y(_, Uint8Array)) {
      const u = new Uint8Array(_);
      return pe(u.buffer, u.byteOffset, u.byteLength);
    }
    return Z(_);
  }
  function pe(_, u, f) {
    if (u < 0 || _.byteLength < u)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (_.byteLength < u + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let C;
    return u === void 0 && f === void 0 ? C = new Uint8Array(_) : f === void 0 ? C = new Uint8Array(_, u) : C = new Uint8Array(_, u, f), Object.setPrototypeOf(C, y.prototype), C;
  }
  function _e(_) {
    if (y.isBuffer(_)) {
      const u = de(_.length) | 0, f = w(u);
      return f.length === 0 || _.copy(f, 0, 0, u), f;
    }
    if (_.length !== void 0)
      return typeof _.length != "number" || xe(_.length) ? w(0) : Z(_);
    if (_.type === "Buffer" && Array.isArray(_.data))
      return Z(_.data);
  }
  function de(_) {
    if (_ >= b)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b.toString(16) + " bytes");
    return _ | 0;
  }
  function re(_) {
    return +_ != _ && (_ = 0), y.alloc(+_);
  }
  y.isBuffer = function(u) {
    return u != null && u._isBuffer === true && u !== y.prototype;
  }, y.compare = function(u, f) {
    if (Y(u, Uint8Array) && (u = y.from(u, u.offset, u.byteLength)), Y(f, Uint8Array) && (f = y.from(f, f.offset, f.byteLength)), !y.isBuffer(u) || !y.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (u === f)
      return 0;
    let C = u.length, P = f.length;
    for (let W = 0, K = Math.min(C, P); W < K; ++W)
      if (u[W] !== f[W]) {
        C = u[W], P = f[W];
        break;
      }
    return C < P ? -1 : P < C ? 1 : 0;
  }, y.isEncoding = function(u) {
    switch (String(u).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, y.concat = function(u, f) {
    if (!Array.isArray(u))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (u.length === 0)
      return y.alloc(0);
    let C;
    if (f === void 0)
      for (f = 0, C = 0; C < u.length; ++C)
        f += u[C].length;
    const P = y.allocUnsafe(f);
    let W = 0;
    for (C = 0; C < u.length; ++C) {
      let K = u[C];
      if (Y(K, Uint8Array))
        W + K.length > P.length ? (y.isBuffer(K) || (K = y.from(K)), K.copy(P, W)) : Uint8Array.prototype.set.call(
          P,
          K,
          W
        );
      else if (y.isBuffer(K))
        K.copy(P, W);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      W += K.length;
    }
    return P;
  };
  function Fe(_, u) {
    if (y.isBuffer(_))
      return _.length;
    if (ArrayBuffer.isView(_) || Y(_, ArrayBuffer))
      return _.byteLength;
    if (typeof _ != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof _
      );
    const f = _.length, C = arguments.length > 2 && arguments[2] === true;
    if (!C && f === 0)
      return 0;
    let P = false;
    for (; ; )
      switch (u) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return d(_).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return M(_).length;
        default:
          if (P)
            return C ? -1 : d(_).length;
          u = ("" + u).toLowerCase(), P = true;
      }
  }
  y.byteLength = Fe;
  function Ne(_, u, f) {
    let C = false;
    if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u))
      return "";
    for (_ || (_ = "utf8"); ; )
      switch (_) {
        case "hex":
          return ne(this, u, f);
        case "utf8":
        case "utf-8":
          return me(this, u, f);
        case "ascii":
          return Te(this, u, f);
        case "latin1":
        case "binary":
          return B(this, u, f);
        case "base64":
          return De(this, u, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, u, f);
        default:
          if (C)
            throw new TypeError("Unknown encoding: " + _);
          _ = (_ + "").toLowerCase(), C = true;
      }
  }
  y.prototype._isBuffer = true;
  function ye(_, u, f) {
    const C = _[u];
    _[u] = _[f], _[f] = C;
  }
  y.prototype.swap16 = function() {
    const u = this.length;
    if (u % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < u; f += 2)
      ye(this, f, f + 1);
    return this;
  }, y.prototype.swap32 = function() {
    const u = this.length;
    if (u % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let f = 0; f < u; f += 4)
      ye(this, f, f + 3), ye(this, f + 1, f + 2);
    return this;
  }, y.prototype.swap64 = function() {
    const u = this.length;
    if (u % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let f = 0; f < u; f += 8)
      ye(this, f, f + 7), ye(this, f + 1, f + 6), ye(this, f + 2, f + 5), ye(this, f + 3, f + 4);
    return this;
  }, y.prototype.toString = function() {
    const u = this.length;
    return u === 0 ? "" : arguments.length === 0 ? me(this, 0, u) : Ne.apply(this, arguments);
  }, y.prototype.toLocaleString = y.prototype.toString, y.prototype.equals = function(u) {
    if (!y.isBuffer(u))
      throw new TypeError("Argument must be a Buffer");
    return this === u ? true : y.compare(this, u) === 0;
  }, y.prototype.inspect = function() {
    let u = "";
    const f = r.INSPECT_MAX_BYTES;
    return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">";
  }, l && (y.prototype[l] = y.prototype.inspect), y.prototype.compare = function(u, f, C, P, W) {
    if (Y(u, Uint8Array) && (u = y.from(u, u.offset, u.byteLength)), !y.isBuffer(u))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u
      );
    if (f === void 0 && (f = 0), C === void 0 && (C = u ? u.length : 0), P === void 0 && (P = 0), W === void 0 && (W = this.length), f < 0 || C > u.length || P < 0 || W > this.length)
      throw new RangeError("out of range index");
    if (P >= W && f >= C)
      return 0;
    if (P >= W)
      return -1;
    if (f >= C)
      return 1;
    if (f >>>= 0, C >>>= 0, P >>>= 0, W >>>= 0, this === u)
      return 0;
    let K = W - P, Re = C - f;
    const ze = Math.min(K, Re), Ve = this.slice(P, W), Ye = u.slice(f, C);
    for (let Oe = 0; Oe < ze; ++Oe)
      if (Ve[Oe] !== Ye[Oe]) {
        K = Ve[Oe], Re = Ye[Oe];
        break;
      }
    return K < Re ? -1 : Re < K ? 1 : 0;
  };
  function Ue(_, u, f, C, P) {
    if (_.length === 0)
      return -1;
    if (typeof f == "string" ? (C = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, xe(f) && (f = P ? 0 : _.length - 1), f < 0 && (f = _.length + f), f >= _.length) {
      if (P)
        return -1;
      f = _.length - 1;
    } else if (f < 0)
      if (P)
        f = 0;
      else
        return -1;
    if (typeof u == "string" && (u = y.from(u, C)), y.isBuffer(u))
      return u.length === 0 ? -1 : We(_, u, f, C, P);
    if (typeof u == "number")
      return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? P ? Uint8Array.prototype.indexOf.call(_, u, f) : Uint8Array.prototype.lastIndexOf.call(_, u, f) : We(_, [u], f, C, P);
    throw new TypeError("val must be string, number or Buffer");
  }
  function We(_, u, f, C, P) {
    let W = 1, K = _.length, Re = u.length;
    if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
      if (_.length < 2 || u.length < 2)
        return -1;
      W = 2, K /= 2, Re /= 2, f /= 2;
    }
    function ze(Ye, Oe) {
      return W === 1 ? Ye[Oe] : Ye.readUInt16BE(Oe * W);
    }
    let Ve;
    if (P) {
      let Ye = -1;
      for (Ve = f; Ve < K; Ve++)
        if (ze(_, Ve) === ze(u, Ye === -1 ? 0 : Ve - Ye)) {
          if (Ye === -1 && (Ye = Ve), Ve - Ye + 1 === Re)
            return Ye * W;
        } else
          Ye !== -1 && (Ve -= Ve - Ye), Ye = -1;
    } else
      for (f + Re > K && (f = K - Re), Ve = f; Ve >= 0; Ve--) {
        let Ye = true;
        for (let Oe = 0; Oe < Re; Oe++)
          if (ze(_, Ve + Oe) !== ze(u, Oe)) {
            Ye = false;
            break;
          }
        if (Ye)
          return Ve;
      }
    return -1;
  }
  y.prototype.includes = function(u, f, C) {
    return this.indexOf(u, f, C) !== -1;
  }, y.prototype.indexOf = function(u, f, C) {
    return Ue(this, u, f, C, true);
  }, y.prototype.lastIndexOf = function(u, f, C) {
    return Ue(this, u, f, C, false);
  };
  function Ge(_, u, f, C) {
    f = Number(f) || 0;
    const P = _.length - f;
    C ? (C = Number(C), C > P && (C = P)) : C = P;
    const W = u.length;
    C > W / 2 && (C = W / 2);
    let K;
    for (K = 0; K < C; ++K) {
      const Re = parseInt(u.substr(K * 2, 2), 16);
      if (xe(Re))
        return K;
      _[f + K] = Re;
    }
    return K;
  }
  function Se(_, u, f, C) {
    return X(d(u, _.length - f), _, f, C);
  }
  function oe(_, u, f, C) {
    return X(p(u), _, f, C);
  }
  function ge(_, u, f, C) {
    return X(M(u), _, f, C);
  }
  function $e(_, u, f, C) {
    return X(R(u, _.length - f), _, f, C);
  }
  y.prototype.write = function(u, f, C, P) {
    if (f === void 0)
      P = "utf8", C = this.length, f = 0;
    else if (C === void 0 && typeof f == "string")
      P = f, C = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(C) ? (C = C >>> 0, P === void 0 && (P = "utf8")) : (P = C, C = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const W = this.length - f;
    if ((C === void 0 || C > W) && (C = W), u.length > 0 && (C < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let K = false;
    for (; ; )
      switch (P) {
        case "hex":
          return Ge(this, u, f, C);
        case "utf8":
        case "utf-8":
          return Se(this, u, f, C);
        case "ascii":
        case "latin1":
        case "binary":
          return oe(this, u, f, C);
        case "base64":
          return ge(this, u, f, C);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $e(this, u, f, C);
        default:
          if (K)
            throw new TypeError("Unknown encoding: " + P);
          P = ("" + P).toLowerCase(), K = true;
      }
  }, y.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function De(_, u, f) {
    return u === 0 && f === _.length ? o.fromByteArray(_) : o.fromByteArray(_.slice(u, f));
  }
  function me(_, u, f) {
    f = Math.min(_.length, f);
    const C = [];
    let P = u;
    for (; P < f; ) {
      const W = _[P];
      let K = null, Re = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
      if (P + Re <= f) {
        let ze, Ve, Ye, Oe;
        switch (Re) {
          case 1:
            W < 128 && (K = W);
            break;
          case 2:
            ze = _[P + 1], (ze & 192) === 128 && (Oe = (W & 31) << 6 | ze & 63, Oe > 127 && (K = Oe));
            break;
          case 3:
            ze = _[P + 1], Ve = _[P + 2], (ze & 192) === 128 && (Ve & 192) === 128 && (Oe = (W & 15) << 12 | (ze & 63) << 6 | Ve & 63, Oe > 2047 && (Oe < 55296 || Oe > 57343) && (K = Oe));
            break;
          case 4:
            ze = _[P + 1], Ve = _[P + 2], Ye = _[P + 3], (ze & 192) === 128 && (Ve & 192) === 128 && (Ye & 192) === 128 && (Oe = (W & 15) << 18 | (ze & 63) << 12 | (Ve & 63) << 6 | Ye & 63, Oe > 65535 && Oe < 1114112 && (K = Oe));
        }
      }
      K === null ? (K = 65533, Re = 1) : K > 65535 && (K -= 65536, C.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), C.push(K), P += Re;
    }
    return Pe(C);
  }
  const ue = 4096;
  function Pe(_) {
    const u = _.length;
    if (u <= ue)
      return String.fromCharCode.apply(String, _);
    let f = "", C = 0;
    for (; C < u; )
      f += String.fromCharCode.apply(
        String,
        _.slice(C, C += ue)
      );
    return f;
  }
  function Te(_, u, f) {
    let C = "";
    f = Math.min(_.length, f);
    for (let P = u; P < f; ++P)
      C += String.fromCharCode(_[P] & 127);
    return C;
  }
  function B(_, u, f) {
    let C = "";
    f = Math.min(_.length, f);
    for (let P = u; P < f; ++P)
      C += String.fromCharCode(_[P]);
    return C;
  }
  function ne(_, u, f) {
    const C = _.length;
    (!u || u < 0) && (u = 0), (!f || f < 0 || f > C) && (f = C);
    let P = "";
    for (let W = u; W < f; ++W)
      P += Be[_[W]];
    return P;
  }
  function te(_, u, f) {
    const C = _.slice(u, f);
    let P = "";
    for (let W = 0; W < C.length - 1; W += 2)
      P += String.fromCharCode(C[W] + C[W + 1] * 256);
    return P;
  }
  y.prototype.slice = function(u, f) {
    const C = this.length;
    u = ~~u, f = f === void 0 ? C : ~~f, u < 0 ? (u += C, u < 0 && (u = 0)) : u > C && (u = C), f < 0 ? (f += C, f < 0 && (f = 0)) : f > C && (f = C), f < u && (f = u);
    const P = this.subarray(u, f);
    return Object.setPrototypeOf(P, y.prototype), P;
  };
  function be(_, u, f) {
    if (_ % 1 !== 0 || _ < 0)
      throw new RangeError("offset is not uint");
    if (_ + u > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  y.prototype.readUintLE = y.prototype.readUIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || be(u, f, this.length);
    let P = this[u], W = 1, K = 0;
    for (; ++K < f && (W *= 256); )
      P += this[u + K] * W;
    return P;
  }, y.prototype.readUintBE = y.prototype.readUIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || be(u, f, this.length);
    let P = this[u + --f], W = 1;
    for (; f > 0 && (W *= 256); )
      P += this[u + --f] * W;
    return P;
  }, y.prototype.readUint8 = y.prototype.readUInt8 = function(u, f) {
    return u = u >>> 0, f || be(u, 1, this.length), this[u];
  }, y.prototype.readUint16LE = y.prototype.readUInt16LE = function(u, f) {
    return u = u >>> 0, f || be(u, 2, this.length), this[u] | this[u + 1] << 8;
  }, y.prototype.readUint16BE = y.prototype.readUInt16BE = function(u, f) {
    return u = u >>> 0, f || be(u, 2, this.length), this[u] << 8 | this[u + 1];
  }, y.prototype.readUint32LE = y.prototype.readUInt32LE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216;
  }, y.prototype.readUint32BE = y.prototype.readUInt32BE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]);
  }, y.prototype.readBigUInt64LE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24, W = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + C * 2 ** 24;
    return BigInt(P) + (BigInt(W) << BigInt(32));
  }), y.prototype.readBigUInt64BE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u], W = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + C;
    return (BigInt(P) << BigInt(32)) + BigInt(W);
  }), y.prototype.readIntLE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || be(u, f, this.length);
    let P = this[u], W = 1, K = 0;
    for (; ++K < f && (W *= 256); )
      P += this[u + K] * W;
    return W *= 128, P >= W && (P -= Math.pow(2, 8 * f)), P;
  }, y.prototype.readIntBE = function(u, f, C) {
    u = u >>> 0, f = f >>> 0, C || be(u, f, this.length);
    let P = f, W = 1, K = this[u + --P];
    for (; P > 0 && (W *= 256); )
      K += this[u + --P] * W;
    return W *= 128, K >= W && (K -= Math.pow(2, 8 * f)), K;
  }, y.prototype.readInt8 = function(u, f) {
    return u = u >>> 0, f || be(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u];
  }, y.prototype.readInt16LE = function(u, f) {
    u = u >>> 0, f || be(u, 2, this.length);
    const C = this[u] | this[u + 1] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, y.prototype.readInt16BE = function(u, f) {
    u = u >>> 0, f || be(u, 2, this.length);
    const C = this[u + 1] | this[u] << 8;
    return C & 32768 ? C | 4294901760 : C;
  }, y.prototype.readInt32LE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24;
  }, y.prototype.readInt32BE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3];
  }, y.prototype.readBigInt64LE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (C << 24);
    return (BigInt(P) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24);
  }), y.prototype.readBigInt64BE = S(function(u) {
    u = u >>> 0, L(u, "offset");
    const f = this[u], C = this[u + 7];
    (f === void 0 || C === void 0) && O(u, this.length - 8);
    const P = (f << 24) + // Overflow
    this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
    return (BigInt(P) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + C);
  }), y.prototype.readFloatLE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), n.read(this, u, true, 23, 4);
  }, y.prototype.readFloatBE = function(u, f) {
    return u = u >>> 0, f || be(u, 4, this.length), n.read(this, u, false, 23, 4);
  }, y.prototype.readDoubleLE = function(u, f) {
    return u = u >>> 0, f || be(u, 8, this.length), n.read(this, u, true, 52, 8);
  }, y.prototype.readDoubleBE = function(u, f) {
    return u = u >>> 0, f || be(u, 8, this.length), n.read(this, u, false, 52, 8);
  };
  function Ae(_, u, f, C, P, W) {
    if (!y.isBuffer(_))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (u > P || u < W)
      throw new RangeError('"value" argument is out of bounds');
    if (f + C > _.length)
      throw new RangeError("Index out of range");
  }
  y.prototype.writeUintLE = y.prototype.writeUIntLE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !P) {
      const Re = Math.pow(2, 8 * C) - 1;
      Ae(this, u, f, C, Re, 0);
    }
    let W = 1, K = 0;
    for (this[f] = u & 255; ++K < C && (W *= 256); )
      this[f + K] = u / W & 255;
    return f + C;
  }, y.prototype.writeUintBE = y.prototype.writeUIntBE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, C = C >>> 0, !P) {
      const Re = Math.pow(2, 8 * C) - 1;
      Ae(this, u, f, C, Re, 0);
    }
    let W = C - 1, K = 1;
    for (this[f + W] = u & 255; --W >= 0 && (K *= 256); )
      this[f + W] = u / K & 255;
    return f + C;
  }, y.prototype.writeUint8 = y.prototype.writeUInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1;
  }, y.prototype.writeUint16LE = y.prototype.writeUInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, y.prototype.writeUint16BE = y.prototype.writeUInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, y.prototype.writeUint32LE = y.prototype.writeUInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4;
  }, y.prototype.writeUint32BE = y.prototype.writeUInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  };
  function ct(_, u, f, C, P) {
    st(u, C, P, _, f, 7);
    let W = Number(u & BigInt(4294967295));
    _[f++] = W, W = W >> 8, _[f++] = W, W = W >> 8, _[f++] = W, W = W >> 8, _[f++] = W;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return _[f++] = K, K = K >> 8, _[f++] = K, K = K >> 8, _[f++] = K, K = K >> 8, _[f++] = K, f;
  }
  function dt(_, u, f, C, P) {
    st(u, C, P, _, f, 7);
    let W = Number(u & BigInt(4294967295));
    _[f + 7] = W, W = W >> 8, _[f + 6] = W, W = W >> 8, _[f + 5] = W, W = W >> 8, _[f + 4] = W;
    let K = Number(u >> BigInt(32) & BigInt(4294967295));
    return _[f + 3] = K, K = K >> 8, _[f + 2] = K, K = K >> 8, _[f + 1] = K, K = K >> 8, _[f] = K, f + 8;
  }
  y.prototype.writeBigUInt64LE = S(function(u, f = 0) {
    return ct(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), y.prototype.writeBigUInt64BE = S(function(u, f = 0) {
    return dt(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), y.prototype.writeIntLE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, !P) {
      const ze = Math.pow(2, 8 * C - 1);
      Ae(this, u, f, C, ze - 1, -ze);
    }
    let W = 0, K = 1, Re = 0;
    for (this[f] = u & 255; ++W < C && (K *= 256); )
      u < 0 && Re === 0 && this[f + W - 1] !== 0 && (Re = 1), this[f + W] = (u / K >> 0) - Re & 255;
    return f + C;
  }, y.prototype.writeIntBE = function(u, f, C, P) {
    if (u = +u, f = f >>> 0, !P) {
      const ze = Math.pow(2, 8 * C - 1);
      Ae(this, u, f, C, ze - 1, -ze);
    }
    let W = C - 1, K = 1, Re = 0;
    for (this[f + W] = u & 255; --W >= 0 && (K *= 256); )
      u < 0 && Re === 0 && this[f + W + 1] !== 0 && (Re = 1), this[f + W] = (u / K >> 0) - Re & 255;
    return f + C;
  }, y.prototype.writeInt8 = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1;
  }, y.prototype.writeInt16LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2;
  }, y.prototype.writeInt16BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2;
  }, y.prototype.writeInt32LE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4;
  }, y.prototype.writeInt32BE = function(u, f, C) {
    return u = +u, f = f >>> 0, C || Ae(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4;
  }, y.prototype.writeBigInt64LE = S(function(u, f = 0) {
    return ct(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), y.prototype.writeBigInt64BE = S(function(u, f = 0) {
    return dt(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function it(_, u, f, C, P, W) {
    if (f + C > _.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function xt(_, u, f, C, P) {
    return u = +u, f = f >>> 0, P || it(_, u, f, 4), n.write(_, u, f, C, 23, 4), f + 4;
  }
  y.prototype.writeFloatLE = function(u, f, C) {
    return xt(this, u, f, true, C);
  }, y.prototype.writeFloatBE = function(u, f, C) {
    return xt(this, u, f, false, C);
  };
  function _t(_, u, f, C, P) {
    return u = +u, f = f >>> 0, P || it(_, u, f, 8), n.write(_, u, f, C, 52, 8), f + 8;
  }
  y.prototype.writeDoubleLE = function(u, f, C) {
    return _t(this, u, f, true, C);
  }, y.prototype.writeDoubleBE = function(u, f, C) {
    return _t(this, u, f, false, C);
  }, y.prototype.copy = function(u, f, C, P) {
    if (!y.isBuffer(u))
      throw new TypeError("argument should be a Buffer");
    if (C || (C = 0), !P && P !== 0 && (P = this.length), f >= u.length && (f = u.length), f || (f = 0), P > 0 && P < C && (P = C), P === C || u.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (C < 0 || C >= this.length)
      throw new RangeError("Index out of range");
    if (P < 0)
      throw new RangeError("sourceEnd out of bounds");
    P > this.length && (P = this.length), u.length - f < P - C && (P = u.length - f + C);
    const W = P - C;
    return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, C, P) : Uint8Array.prototype.set.call(
      u,
      this.subarray(C, P),
      f
    ), W;
  }, y.prototype.fill = function(u, f, C, P) {
    if (typeof u == "string") {
      if (typeof f == "string" ? (P = f, f = 0, C = this.length) : typeof C == "string" && (P = C, C = this.length), P !== void 0 && typeof P != "string")
        throw new TypeError("encoding must be a string");
      if (typeof P == "string" && !y.isEncoding(P))
        throw new TypeError("Unknown encoding: " + P);
      if (u.length === 1) {
        const K = u.charCodeAt(0);
        (P === "utf8" && K < 128 || P === "latin1") && (u = K);
      }
    } else
      typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
    if (f < 0 || this.length < f || this.length < C)
      throw new RangeError("Out of range index");
    if (C <= f)
      return this;
    f = f >>> 0, C = C === void 0 ? this.length : C >>> 0, u || (u = 0);
    let W;
    if (typeof u == "number")
      for (W = f; W < C; ++W)
        this[W] = u;
    else {
      const K = y.isBuffer(u) ? u : y.from(u, P), Re = K.length;
      if (Re === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
      for (W = 0; W < C - f; ++W)
        this[W + f] = K[W % Re];
    }
    return this;
  };
  const Je = {};
  function ot(_, u, f) {
    Je[_] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: u.apply(this, arguments),
          writable: true,
          configurable: true
        }), this.name = `${this.name} [${_}]`, delete this.name;
      }
      get code() {
        return _;
      }
      set code(P) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value: P,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${_}]: ${this.message}`;
      }
    };
  }
  ot(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(_) {
      return _ ? `${_} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ot(
    "ERR_INVALID_ARG_TYPE",
    function(_, u) {
      return `The "${_}" argument must be of type number. Received type ${typeof u}`;
    },
    TypeError
  ), ot(
    "ERR_OUT_OF_RANGE",
    function(_, u, f) {
      let C = `The value of "${_}" is out of range.`, P = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? P = At(String(f)) : typeof f == "bigint" && (P = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (P = At(P)), P += "n"), C += ` It must be ${u}. Received ${P}`, C;
    },
    RangeError
  );
  function At(_) {
    let u = "", f = _.length;
    const C = _[0] === "-" ? 1 : 0;
    for (; f >= C + 4; f -= 3)
      u = `_${_.slice(f - 3, f)}${u}`;
    return `${_.slice(0, f)}${u}`;
  }
  function gt(_, u, f) {
    L(u, "offset"), (_[u] === void 0 || _[u + f] === void 0) && O(u, _.length - (f + 1));
  }
  function st(_, u, f, C, P, W) {
    if (_ > f || _ < u) {
      const K = typeof u == "bigint" ? "n" : "";
      let Re;
      throw W > 3 ? u === 0 || u === BigInt(0) ? Re = `>= 0${K} and < 2${K} ** ${(W + 1) * 8}${K}` : Re = `>= -(2${K} ** ${(W + 1) * 8 - 1}${K}) and < 2 ** ${(W + 1) * 8 - 1}${K}` : Re = `>= ${u}${K} and <= ${f}${K}`, new Je.ERR_OUT_OF_RANGE("value", Re, _);
    }
    gt(C, P, W);
  }
  function L(_, u) {
    if (typeof _ != "number")
      throw new Je.ERR_INVALID_ARG_TYPE(u, "number", _);
  }
  function O(_, u, f) {
    throw Math.floor(_) !== _ ? (L(_, f), new Je.ERR_OUT_OF_RANGE(f || "offset", "an integer", _)) : u < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(
      f || "offset",
      `>= ${f ? 1 : 0} and <= ${u}`,
      _
    );
  }
  const q = /[^+/0-9A-Za-z-_]/g;
  function x(_) {
    if (_ = _.split("=")[0], _ = _.trim().replace(q, ""), _.length < 2)
      return "";
    for (; _.length % 4 !== 0; )
      _ = _ + "=";
    return _;
  }
  function d(_, u) {
    u = u || 1 / 0;
    let f;
    const C = _.length;
    let P = null;
    const W = [];
    for (let K = 0; K < C; ++K) {
      if (f = _.charCodeAt(K), f > 55295 && f < 57344) {
        if (!P) {
          if (f > 56319) {
            (u -= 3) > -1 && W.push(239, 191, 189);
            continue;
          } else if (K + 1 === C) {
            (u -= 3) > -1 && W.push(239, 191, 189);
            continue;
          }
          P = f;
          continue;
        }
        if (f < 56320) {
          (u -= 3) > -1 && W.push(239, 191, 189), P = f;
          continue;
        }
        f = (P - 55296 << 10 | f - 56320) + 65536;
      } else
        P && (u -= 3) > -1 && W.push(239, 191, 189);
      if (P = null, f < 128) {
        if ((u -= 1) < 0)
          break;
        W.push(f);
      } else if (f < 2048) {
        if ((u -= 2) < 0)
          break;
        W.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((u -= 3) < 0)
          break;
        W.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((u -= 4) < 0)
          break;
        W.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return W;
  }
  function p(_) {
    const u = [];
    for (let f = 0; f < _.length; ++f)
      u.push(_.charCodeAt(f) & 255);
    return u;
  }
  function R(_, u) {
    let f, C, P;
    const W = [];
    for (let K = 0; K < _.length && !((u -= 2) < 0); ++K)
      f = _.charCodeAt(K), C = f >> 8, P = f % 256, W.push(P), W.push(C);
    return W;
  }
  function M(_) {
    return o.toByteArray(x(_));
  }
  function X(_, u, f, C) {
    let P;
    for (P = 0; P < C && !(P + f >= u.length || P >= _.length); ++P)
      u[P + f] = _[P];
    return P;
  }
  function Y(_, u) {
    return _ instanceof u || _ != null && _.constructor != null && _.constructor.name != null && _.constructor.name === u.name;
  }
  function xe(_) {
    return _ !== _;
  }
  const Be = function() {
    const _ = "0123456789abcdef", u = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const C = f * 16;
      for (let P = 0; P < 16; ++P)
        u[C + P] = _[f] + _[P];
    }
    return u;
  }();
  function S(_) {
    return typeof BigInt > "u" ? T : _;
  }
  function T() {
    throw new Error("BigInt not supported");
  }
})(er);
var tt = {
  ArrayIsArray(r) {
    return Array.isArray(r);
  },
  ArrayPrototypeIncludes(r, o) {
    return r.includes(o);
  },
  ArrayPrototypeIndexOf(r, o) {
    return r.indexOf(o);
  },
  ArrayPrototypeJoin(r, o) {
    return r.join(o);
  },
  ArrayPrototypeMap(r, o) {
    return r.map(o);
  },
  ArrayPrototypePop(r, o) {
    return r.pop(o);
  },
  ArrayPrototypePush(r, o) {
    return r.push(o);
  },
  ArrayPrototypeSlice(r, o, n) {
    return r.slice(o, n);
  },
  Error,
  FunctionPrototypeCall(r, o, ...n) {
    return r.call(o, ...n);
  },
  FunctionPrototypeSymbolHasInstance(r, o) {
    return Function.prototype[Symbol.hasInstance].call(r, o);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(r, o) {
    return Object.defineProperties(r, o);
  },
  ObjectDefineProperty(r, o, n) {
    return Object.defineProperty(r, o, n);
  },
  ObjectGetOwnPropertyDescriptor(r, o) {
    return Object.getOwnPropertyDescriptor(r, o);
  },
  ObjectKeys(r) {
    return Object.keys(r);
  },
  ObjectSetPrototypeOf(r, o) {
    return Object.setPrototypeOf(r, o);
  },
  Promise,
  PromisePrototypeCatch(r, o) {
    return r.catch(o);
  },
  PromisePrototypeThen(r, o, n) {
    return r.then(o, n);
  },
  PromiseReject(r) {
    return Promise.reject(r);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(r, o) {
    return r.test(o);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(r, o, n) {
    return r.slice(o, n);
  },
  StringPrototypeToLowerCase(r) {
    return r.toLowerCase();
  },
  StringPrototypeToUpperCase(r) {
    return r.toUpperCase();
  },
  StringPrototypeTrim(r) {
    return r.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  TypedArrayPrototypeSet(r, o, n) {
    return r.set(o, n);
  },
  Uint8Array
}, Gs = { exports: {} };
(function(r) {
  const o = er, n = Object.getPrototypeOf(async function() {
  }).constructor, l = globalThis.Blob || o.Blob, b = typeof l < "u" ? function(y) {
    return y instanceof l;
  } : function(y) {
    return false;
  };
  class v extends Error {
    constructor(y) {
      if (!Array.isArray(y))
        throw new TypeError(`Expected input to be an Array, got ${typeof y}`);
      let D = "";
      for (let k = 0; k < y.length; k++)
        D += `    ${y[k].stack}
`;
      super(D), this.name = "AggregateError", this.errors = y;
    }
  }
  r.exports = {
    AggregateError: v,
    kEmptyObject: Object.freeze({}),
    once(w) {
      let y = false;
      return function(...D) {
        y || (y = true, w.apply(this, D));
      };
    },
    createDeferredPromise: function() {
      let w, y;
      return {
        promise: new Promise((k, N) => {
          w = k, y = N;
        }),
        resolve: w,
        reject: y
      };
    },
    promisify(w) {
      return new Promise((y, D) => {
        w((k, ...N) => k ? D(k) : y(...N));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(w, ...y) {
      return w.replace(/%([sdifj])/g, function(...[D, k]) {
        const N = y.shift();
        return k === "f" ? N.toFixed(6) : k === "j" ? JSON.stringify(N) : k === "s" && typeof N == "object" ? `${N.constructor !== Object ? N.constructor.name : ""} {}`.trim() : N.toString();
      });
    },
    inspect(w) {
      switch (typeof w) {
        case "string":
          if (w.includes("'"))
            if (w.includes('"')) {
              if (!w.includes("`") && !w.includes("${"))
                return `\`${w}\``;
            } else
              return `"${w}"`;
          return `'${w}'`;
        case "number":
          return isNaN(w) ? "NaN" : Object.is(w, -0) ? String(w) : w;
        case "bigint":
          return `${String(w)}n`;
        case "boolean":
        case "undefined":
          return String(w);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(w) {
        return w instanceof n;
      },
      isArrayBufferView(w) {
        return ArrayBuffer.isView(w);
      }
    },
    isBlob: b
  }, r.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(Gs);
var Vt = Gs.exports, mo = {}, Ur = { exports: {} }, Ia;
function _o() {
  if (Ia)
    return Ur.exports;
  Ia = 1;
  const { AbortController: r, AbortSignal: o } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return Ur.exports = r, Ur.exports.AbortSignal = o, Ur.exports.default = r, Ur.exports;
}
const { format: Up, inspect: Mn, AggregateError: Wp } = Vt, $p = globalThis.AggregateError || Wp, Gp = Symbol("kIsNodeError"), Vp = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], zp = /^([A-Z][a-z0-9]*)+$/, Hp = "__node_internal_", Wn = {};
function fr(r, o) {
  if (!r)
    throw new Wn.ERR_INTERNAL_ASSERTION(o);
}
function Pa(r) {
  let o = "", n = r.length;
  const l = r[0] === "-" ? 1 : 0;
  for (; n >= l + 4; n -= 3)
    o = `_${r.slice(n - 3, n)}${o}`;
  return `${r.slice(0, n)}${o}`;
}
function Kp(r, o, n) {
  if (typeof o == "function")
    return fr(
      o.length <= n.length,
      // Default options do not count.
      `Code: ${r}; The provided arguments length (${n.length}) does not match the required ones (${o.length}).`
    ), o(...n);
  const l = (o.match(/%[dfijoOs]/g) || []).length;
  return fr(
    l === n.length,
    `Code: ${r}; The provided arguments length (${n.length}) does not match the required ones (${l}).`
  ), n.length === 0 ? o : Up(o, ...n);
}
function nt(r, o, n) {
  n || (n = Error);
  class l extends n {
    constructor(...v) {
      super(Kp(r, o, v));
    }
    toString() {
      return `${this.name} [${r}]: ${this.message}`;
    }
  }
  Object.defineProperties(l.prototype, {
    name: {
      value: n.name,
      writable: true,
      enumerable: false,
      configurable: true
    },
    toString: {
      value() {
        return `${this.name} [${r}]: ${this.message}`;
      },
      writable: true,
      enumerable: false,
      configurable: true
    }
  }), l.prototype.code = r, l.prototype[Gp] = true, Wn[r] = l;
}
function Da(r) {
  const o = Hp + r.name;
  return Object.defineProperty(r, "name", {
    value: o
  }), r;
}
function Yp(r, o) {
  if (r && o && r !== o) {
    if (Array.isArray(o.errors))
      return o.errors.push(r), o;
    const n = new $p([o, r], o.message);
    return n.code = o.code, n;
  }
  return r || o;
}
let Xp = class extends Error {
  constructor(o = "The operation was aborted", n = void 0) {
    if (n !== void 0 && typeof n != "object")
      throw new Wn.ERR_INVALID_ARG_TYPE("options", "Object", n);
    super(o, n), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
nt("ERR_ASSERTION", "%s", Error);
nt(
  "ERR_INVALID_ARG_TYPE",
  (r, o, n) => {
    fr(typeof r == "string", "'name' must be a string"), Array.isArray(o) || (o = [o]);
    let l = "The ";
    r.endsWith(" argument") ? l += `${r} ` : l += `"${r}" ${r.includes(".") ? "property" : "argument"} `, l += "must be ";
    const b = [], v = [], w = [];
    for (const D of o)
      fr(typeof D == "string", "All expected entries have to be of type string"), Vp.includes(D) ? b.push(D.toLowerCase()) : zp.test(D) ? v.push(D) : (fr(D !== "object", 'The value "object" should be written as "Object"'), w.push(D));
    if (v.length > 0) {
      const D = b.indexOf("object");
      D !== -1 && (b.splice(b, D, 1), v.push("Object"));
    }
    if (b.length > 0) {
      switch (b.length) {
        case 1:
          l += `of type ${b[0]}`;
          break;
        case 2:
          l += `one of type ${b[0]} or ${b[1]}`;
          break;
        default: {
          const D = b.pop();
          l += `one of type ${b.join(", ")}, or ${D}`;
        }
      }
      (v.length > 0 || w.length > 0) && (l += " or ");
    }
    if (v.length > 0) {
      switch (v.length) {
        case 1:
          l += `an instance of ${v[0]}`;
          break;
        case 2:
          l += `an instance of ${v[0]} or ${v[1]}`;
          break;
        default: {
          const D = v.pop();
          l += `an instance of ${v.join(", ")}, or ${D}`;
        }
      }
      w.length > 0 && (l += " or ");
    }
    switch (w.length) {
      case 0:
        break;
      case 1:
        w[0].toLowerCase() !== w[0] && (l += "an "), l += `${w[0]}`;
        break;
      case 2:
        l += `one of ${w[0]} or ${w[1]}`;
        break;
      default: {
        const D = w.pop();
        l += `one of ${w.join(", ")}, or ${D}`;
      }
    }
    if (n == null)
      l += `. Received ${n}`;
    else if (typeof n == "function" && n.name)
      l += `. Received function ${n.name}`;
    else if (typeof n == "object") {
      var y;
      if ((y = n.constructor) !== null && y !== void 0 && y.name)
        l += `. Received an instance of ${n.constructor.name}`;
      else {
        const D = Mn(n, {
          depth: -1
        });
        l += `. Received ${D}`;
      }
    } else {
      let D = Mn(n, {
        colors: false
      });
      D.length > 25 && (D = `${D.slice(0, 25)}...`), l += `. Received type ${typeof n} (${D})`;
    }
    return l;
  },
  TypeError
);
nt(
  "ERR_INVALID_ARG_VALUE",
  (r, o, n = "is invalid") => {
    let l = Mn(o);
    return l.length > 128 && (l = l.slice(0, 128) + "..."), `The ${r.includes(".") ? "property" : "argument"} '${r}' ${n}. Received ${l}`;
  },
  TypeError
);
nt(
  "ERR_INVALID_RETURN_VALUE",
  (r, o, n) => {
    var l;
    const b = n != null && (l = n.constructor) !== null && l !== void 0 && l.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`;
    return `Expected ${r} to be returned from the "${o}" function but got ${b}.`;
  },
  TypeError
);
nt(
  "ERR_MISSING_ARGS",
  (...r) => {
    fr(r.length > 0, "At least one arg needs to be specified");
    let o;
    const n = r.length;
    switch (r = (Array.isArray(r) ? r : [r]).map((l) => `"${l}"`).join(" or "), n) {
      case 1:
        o += `The ${r[0]} argument`;
        break;
      case 2:
        o += `The ${r[0]} and ${r[1]} arguments`;
        break;
      default:
        {
          const l = r.pop();
          o += `The ${r.join(", ")}, and ${l} arguments`;
        }
        break;
    }
    return `${o} must be specified`;
  },
  TypeError
);
nt(
  "ERR_OUT_OF_RANGE",
  (r, o, n) => {
    fr(o, 'Missing "range" argument');
    let l;
    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? l = Pa(String(n)) : typeof n == "bigint" ? (l = String(n), (n > 2n ** 32n || n < -(2n ** 32n)) && (l = Pa(l)), l += "n") : l = Mn(n), `The value of "${r}" is out of range. It must be ${o}. Received ${l}`;
  },
  RangeError
);
nt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
nt("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
nt("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
nt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
nt("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
nt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
nt("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
nt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
nt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
nt("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
nt("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var mt = {
  AbortError: Xp,
  aggregateTwoErrors: Da(Yp),
  hideStackFrames: Da,
  codes: Wn
};
const {
  ArrayIsArray: yo,
  ArrayPrototypeIncludes: Vs,
  ArrayPrototypeJoin: zs,
  ArrayPrototypeMap: Zp,
  NumberIsInteger: go,
  NumberIsNaN: qp,
  NumberMAX_SAFE_INTEGER: Qp,
  NumberMIN_SAFE_INTEGER: Jp,
  NumberParseInt: e0,
  ObjectPrototypeHasOwnProperty: t0,
  RegExpPrototypeExec: Hs,
  String: r0,
  StringPrototypeToUpperCase: n0,
  StringPrototypeTrim: i0
} = tt, {
  hideStackFrames: Et,
  codes: { ERR_SOCKET_BAD_PORT: o0, ERR_INVALID_ARG_TYPE: ft, ERR_INVALID_ARG_VALUE: Fr, ERR_OUT_OF_RANGE: cr, ERR_UNKNOWN_SIGNAL: ka }
} = mt, { normalizeEncoding: a0 } = Vt, { isAsyncFunction: s0, isArrayBufferView: u0 } = Vt.types, La = {};
function l0(r) {
  return r === (r | 0);
}
function f0(r) {
  return r === r >>> 0;
}
const c0 = /^[0-7]+$/, d0 = "must be a 32-bit unsigned integer or an octal string";
function h0(r, o, n) {
  if (typeof r > "u" && (r = n), typeof r == "string") {
    if (Hs(c0, r) === null)
      throw new Fr(o, r, d0);
    r = e0(r, 8);
  }
  return Ks(r, o), r;
}
const p0 = Et((r, o, n = Jp, l = Qp) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  if (r < n || r > l)
    throw new cr(o, `>= ${n} && <= ${l}`, r);
}), m0 = Et((r, o, n = -2147483648, l = 2147483647) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  if (r < n || r > l)
    throw new cr(o, `>= ${n} && <= ${l}`, r);
}), Ks = Et((r, o, n = false) => {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (!go(r))
    throw new cr(o, "an integer", r);
  const l = n ? 1 : 0, b = 4294967295;
  if (r < l || r > b)
    throw new cr(o, `>= ${l} && <= ${b}`, r);
});
function bo(r, o) {
  if (typeof r != "string")
    throw new ft(o, "string", r);
}
function _0(r, o, n = void 0, l) {
  if (typeof r != "number")
    throw new ft(o, "number", r);
  if (n != null && r < n || l != null && r > l || (n != null || l != null) && qp(r))
    throw new cr(
      o,
      `${n != null ? `>= ${n}` : ""}${n != null && l != null ? " && " : ""}${l != null ? `<= ${l}` : ""}`,
      r
    );
}
const y0 = Et((r, o, n) => {
  if (!Vs(n, r)) {
    const b = "must be one of: " + zs(
      Zp(n, (v) => typeof v == "string" ? `'${v}'` : r0(v)),
      ", "
    );
    throw new Fr(o, r, b);
  }
});
function Ys(r, o) {
  if (typeof r != "boolean")
    throw new ft(o, "boolean", r);
}
function Ai(r, o, n) {
  return r == null || !t0(r, o) ? n : r[o];
}
const g0 = Et((r, o, n = null) => {
  const l = Ai(n, "allowArray", false), b = Ai(n, "allowFunction", false);
  if (!Ai(n, "nullable", false) && r === null || !l && yo(r) || typeof r != "object" && (!b || typeof r != "function"))
    throw new ft(o, "Object", r);
}), b0 = Et((r, o) => {
  if (r != null && typeof r != "object" && typeof r != "function")
    throw new ft(o, "a dictionary", r);
}), wo = Et((r, o, n = 0) => {
  if (!yo(r))
    throw new ft(o, "Array", r);
  if (r.length < n) {
    const l = `must be longer than ${n}`;
    throw new Fr(o, r, l);
  }
});
function w0(r, o) {
  wo(r, o);
  for (let n = 0; n < r.length; n++)
    bo(r[n], `${o}[${n}]`);
}
function v0(r, o) {
  wo(r, o);
  for (let n = 0; n < r.length; n++)
    Ys(r[n], `${o}[${n}]`);
}
function E0(r, o = "signal") {
  if (bo(r, o), La[r] === void 0)
    throw La[n0(r)] !== void 0 ? new ka(r + " (signals must use all capital letters)") : new ka(r);
}
const x0 = Et((r, o = "buffer") => {
  if (!u0(r))
    throw new ft(o, ["Buffer", "TypedArray", "DataView"], r);
});
function S0(r, o) {
  const n = a0(o), l = r.length;
  if (n === "hex" && l % 2 !== 0)
    throw new Fr("encoding", o, `is invalid for data of length ${l}`);
}
function T0(r, o = "Port", n = true) {
  if (typeof r != "number" && typeof r != "string" || typeof r == "string" && i0(r).length === 0 || +r !== +r >>> 0 || r > 65535 || r === 0 && !n)
    throw new o0(o, r, n);
  return r | 0;
}
const C0 = Et((r, o) => {
  if (r !== void 0 && (r === null || typeof r != "object" || !("aborted" in r)))
    throw new ft(o, "AbortSignal", r);
}), R0 = Et((r, o) => {
  if (typeof r != "function")
    throw new ft(o, "Function", r);
}), F0 = Et((r, o) => {
  if (typeof r != "function" || s0(r))
    throw new ft(o, "Function", r);
}), A0 = Et((r, o) => {
  if (r !== void 0)
    throw new ft(o, "undefined", r);
});
function I0(r, o, n) {
  if (!Vs(n, r))
    throw new ft(o, `('${zs(n, "|")}')`, r);
}
const P0 = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Ma(r, o) {
  if (typeof r > "u" || !Hs(P0, r))
    throw new Fr(
      o,
      r,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function D0(r) {
  if (typeof r == "string")
    return Ma(r, "hints"), r;
  if (yo(r)) {
    const o = r.length;
    let n = "";
    if (o === 0)
      return n;
    for (let l = 0; l < o; l++) {
      const b = r[l];
      Ma(b, "hints"), n += b, l !== o - 1 && (n += ", ");
    }
    return n;
  }
  throw new Fr(
    "hints",
    r,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var $n = {
  isInt32: l0,
  isUint32: f0,
  parseFileMode: h0,
  validateArray: wo,
  validateStringArray: w0,
  validateBooleanArray: v0,
  validateBoolean: Ys,
  validateBuffer: x0,
  validateDictionary: b0,
  validateEncoding: S0,
  validateFunction: R0,
  validateInt32: m0,
  validateInteger: p0,
  validateNumber: _0,
  validateObject: g0,
  validateOneOf: y0,
  validatePlainFunction: F0,
  validatePort: T0,
  validateSignalName: E0,
  validateString: bo,
  validateUint32: Ks,
  validateUndefined: A0,
  validateUnion: I0,
  validateAbortSignal: C0,
  validateLinkHeaderValue: D0
}, vo = { exports: {} }, Xs = { exports: {} }, qe = Xs.exports = {}, Lt, Mt;
function Yi() {
  throw new Error("setTimeout has not been defined");
}
function Xi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Lt = setTimeout : Lt = Yi;
  } catch {
    Lt = Yi;
  }
  try {
    typeof clearTimeout == "function" ? Mt = clearTimeout : Mt = Xi;
  } catch {
    Mt = Xi;
  }
})();
function Zs(r) {
  if (Lt === setTimeout)
    return setTimeout(r, 0);
  if ((Lt === Yi || !Lt) && setTimeout)
    return Lt = setTimeout, setTimeout(r, 0);
  try {
    return Lt(r, 0);
  } catch {
    try {
      return Lt.call(null, r, 0);
    } catch {
      return Lt.call(this, r, 0);
    }
  }
}
function k0(r) {
  if (Mt === clearTimeout)
    return clearTimeout(r);
  if ((Mt === Xi || !Mt) && clearTimeout)
    return Mt = clearTimeout, clearTimeout(r);
  try {
    return Mt(r);
  } catch {
    try {
      return Mt.call(null, r);
    } catch {
      return Mt.call(this, r);
    }
  }
}
var Ut = [], Tr = false, lr, In = -1;
function L0() {
  !Tr || !lr || (Tr = false, lr.length ? Ut = lr.concat(Ut) : In = -1, Ut.length && qs());
}
function qs() {
  if (!Tr) {
    var r = Zs(L0);
    Tr = true;
    for (var o = Ut.length; o; ) {
      for (lr = Ut, Ut = []; ++In < o; )
        lr && lr[In].run();
      In = -1, o = Ut.length;
    }
    lr = null, Tr = false, k0(r);
  }
}
qe.nextTick = function(r) {
  var o = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      o[n - 1] = arguments[n];
  Ut.push(new Qs(r, o)), Ut.length === 1 && !Tr && Zs(qs);
};
function Qs(r, o) {
  this.fun = r, this.array = o;
}
Qs.prototype.run = function() {
  this.fun.apply(null, this.array);
};
qe.title = "browser";
qe.browser = true;
qe.env = {};
qe.argv = [];
qe.version = "";
qe.versions = {};
function zt() {
}
qe.on = zt;
qe.addListener = zt;
qe.once = zt;
qe.off = zt;
qe.removeListener = zt;
qe.removeAllListeners = zt;
qe.emit = zt;
qe.prependListener = zt;
qe.prependOnceListener = zt;
qe.listeners = function(r) {
  return [];
};
qe.binding = function(r) {
  throw new Error("process.binding is not supported");
};
qe.cwd = function() {
  return "/";
};
qe.chdir = function(r) {
  throw new Error("process.chdir is not supported");
};
qe.umask = function() {
  return 0;
};
var dr = Xs.exports;
const { Symbol: Gn, SymbolAsyncIterator: Ba, SymbolIterator: Na, SymbolFor: Js } = tt, eu = Gn("kDestroyed"), tu = Gn("kIsErrored"), Zi = Gn("kIsReadable"), ru = Gn("kIsDisturbed"), M0 = Js("nodejs.webstream.isClosedPromise"), B0 = Js("nodejs.webstream.controllerErrorFunction");
function Vn(r, o = false) {
  var n;
  return !!(r && typeof r.pipe == "function" && typeof r.on == "function" && (!o || typeof r.pause == "function" && typeof r.resume == "function") && (!r._writableState || ((n = r._readableState) === null || n === void 0 ? void 0 : n.readable) !== false) && // Duplex
  (!r._writableState || r._readableState));
}
function zn(r) {
  var o;
  return !!(r && typeof r.write == "function" && typeof r.on == "function" && (!r._readableState || ((o = r._writableState) === null || o === void 0 ? void 0 : o.writable) !== false));
}
function N0(r) {
  return !!(r && typeof r.pipe == "function" && r._readableState && typeof r.on == "function" && typeof r.write == "function");
}
function jt(r) {
  return r && (r._readableState || r._writableState || typeof r.write == "function" && typeof r.on == "function" || typeof r.pipe == "function" && typeof r.on == "function");
}
function nu(r) {
  return !!(r && !jt(r) && typeof r.pipeThrough == "function" && typeof r.getReader == "function" && typeof r.cancel == "function");
}
function iu(r) {
  return !!(r && !jt(r) && typeof r.getWriter == "function" && typeof r.abort == "function");
}
function ou(r) {
  return !!(r && !jt(r) && typeof r.readable == "object" && typeof r.writable == "object");
}
function O0(r) {
  return nu(r) || iu(r) || ou(r);
}
function j0(r, o) {
  return r == null ? false : o === true ? typeof r[Ba] == "function" : o === false ? typeof r[Na] == "function" : typeof r[Ba] == "function" || typeof r[Na] == "function";
}
function Hn(r) {
  if (!jt(r))
    return null;
  const o = r._writableState, n = r._readableState, l = o || n;
  return !!(r.destroyed || r[eu] || l != null && l.destroyed);
}
function au(r) {
  if (!zn(r))
    return null;
  if (r.writableEnded === true)
    return true;
  const o = r._writableState;
  return o != null && o.errored ? false : typeof (o == null ? void 0 : o.ended) != "boolean" ? null : o.ended;
}
function U0(r, o) {
  if (!zn(r))
    return null;
  if (r.writableFinished === true)
    return true;
  const n = r._writableState;
  return n != null && n.errored ? false : typeof (n == null ? void 0 : n.finished) != "boolean" ? null : !!(n.finished || o === false && n.ended === true && n.length === 0);
}
function W0(r) {
  if (!Vn(r))
    return null;
  if (r.readableEnded === true)
    return true;
  const o = r._readableState;
  return !o || o.errored ? false : typeof (o == null ? void 0 : o.ended) != "boolean" ? null : o.ended;
}
function su(r, o) {
  if (!Vn(r))
    return null;
  const n = r._readableState;
  return n != null && n.errored ? false : typeof (n == null ? void 0 : n.endEmitted) != "boolean" ? null : !!(n.endEmitted || o === false && n.ended === true && n.length === 0);
}
function uu(r) {
  return r && r[Zi] != null ? r[Zi] : typeof (r == null ? void 0 : r.readable) != "boolean" ? null : Hn(r) ? false : Vn(r) && r.readable && !su(r);
}
function lu(r) {
  return typeof (r == null ? void 0 : r.writable) != "boolean" ? null : Hn(r) ? false : zn(r) && r.writable && !au(r);
}
function $0(r, o) {
  return jt(r) ? Hn(r) ? true : !((o == null ? void 0 : o.readable) !== false && uu(r) || (o == null ? void 0 : o.writable) !== false && lu(r)) : null;
}
function G0(r) {
  var o, n;
  return jt(r) ? r.writableErrored ? r.writableErrored : (o = (n = r._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && o !== void 0 ? o : null : null;
}
function V0(r) {
  var o, n;
  return jt(r) ? r.readableErrored ? r.readableErrored : (o = (n = r._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && o !== void 0 ? o : null : null;
}
function z0(r) {
  if (!jt(r))
    return null;
  if (typeof r.closed == "boolean")
    return r.closed;
  const o = r._writableState, n = r._readableState;
  return typeof (o == null ? void 0 : o.closed) == "boolean" || typeof (n == null ? void 0 : n.closed) == "boolean" ? (o == null ? void 0 : o.closed) || (n == null ? void 0 : n.closed) : typeof r._closed == "boolean" && fu(r) ? r._closed : null;
}
function fu(r) {
  return typeof r._closed == "boolean" && typeof r._defaultKeepAlive == "boolean" && typeof r._removedConnection == "boolean" && typeof r._removedContLen == "boolean";
}
function cu(r) {
  return typeof r._sent100 == "boolean" && fu(r);
}
function H0(r) {
  var o;
  return typeof r._consuming == "boolean" && typeof r._dumped == "boolean" && ((o = r.req) === null || o === void 0 ? void 0 : o.upgradeOrConnect) === void 0;
}
function K0(r) {
  if (!jt(r))
    return null;
  const o = r._writableState, n = r._readableState, l = o || n;
  return !l && cu(r) || !!(l && l.autoDestroy && l.emitClose && l.closed === false);
}
function Y0(r) {
  var o;
  return !!(r && ((o = r[ru]) !== null && o !== void 0 ? o : r.readableDidRead || r.readableAborted));
}
function X0(r) {
  var o, n, l, b, v, w, y, D, k, N;
  return !!(r && ((o = (n = (l = (b = (v = (w = r[tu]) !== null && w !== void 0 ? w : r.readableErrored) !== null && v !== void 0 ? v : r.writableErrored) !== null && b !== void 0 ? b : (y = r._readableState) === null || y === void 0 ? void 0 : y.errorEmitted) !== null && l !== void 0 ? l : (D = r._writableState) === null || D === void 0 ? void 0 : D.errorEmitted) !== null && n !== void 0 ? n : (k = r._readableState) === null || k === void 0 ? void 0 : k.errored) !== null && o !== void 0 ? o : !((N = r._writableState) === null || N === void 0) && N.errored));
}
var Ht = {
  kDestroyed: eu,
  isDisturbed: Y0,
  kIsDisturbed: ru,
  isErrored: X0,
  kIsErrored: tu,
  isReadable: uu,
  kIsReadable: Zi,
  kIsClosedPromise: M0,
  kControllerErrorFunction: B0,
  isClosed: z0,
  isDestroyed: Hn,
  isDuplexNodeStream: N0,
  isFinished: $0,
  isIterable: j0,
  isReadableNodeStream: Vn,
  isReadableStream: nu,
  isReadableEnded: W0,
  isReadableFinished: su,
  isReadableErrored: V0,
  isNodeStream: jt,
  isWebStream: O0,
  isWritable: lu,
  isWritableNodeStream: zn,
  isWritableStream: iu,
  isWritableEnded: au,
  isWritableFinished: U0,
  isWritableErrored: G0,
  isServerRequest: H0,
  isServerResponse: cu,
  willEmitClose: K0,
  isTransformStream: ou
};
const Qt = dr, { AbortError: du, codes: Z0 } = mt, { ERR_INVALID_ARG_TYPE: q0, ERR_STREAM_PREMATURE_CLOSE: Oa } = Z0, { kEmptyObject: qi, once: Qi } = Vt, { validateAbortSignal: Q0, validateFunction: J0, validateObject: em, validateBoolean: tm } = $n, { Promise: rm, PromisePrototypeThen: nm } = tt, {
  isClosed: im,
  isReadable: ja,
  isReadableNodeStream: Ii,
  isReadableStream: om,
  isReadableFinished: Ua,
  isReadableErrored: Wa,
  isWritable: $a,
  isWritableNodeStream: Ga,
  isWritableStream: am,
  isWritableFinished: Va,
  isWritableErrored: za,
  isNodeStream: sm,
  willEmitClose: um,
  kIsClosedPromise: lm
} = Ht;
function fm(r) {
  return r.setHeader && typeof r.abort == "function";
}
const Ji = () => {
};
function hu(r, o, n) {
  var l, b;
  if (arguments.length === 2 ? (n = o, o = qi) : o == null ? o = qi : em(o, "options"), J0(n, "callback"), Q0(o.signal, "options.signal"), n = Qi(n), om(r) || am(r))
    return cm(r, o, n);
  if (!sm(r))
    throw new q0("stream", ["ReadableStream", "WritableStream", "Stream"], r);
  const v = (l = o.readable) !== null && l !== void 0 ? l : Ii(r), w = (b = o.writable) !== null && b !== void 0 ? b : Ga(r), y = r._writableState, D = r._readableState, k = () => {
    r.writable || le();
  };
  let N = um(r) && Ii(r) === v && Ga(r) === w, ee = Va(r, false);
  const le = () => {
    ee = true, r.destroyed && (N = false), !(N && (!r.readable || v)) && (!v || Z) && n.call(r);
  };
  let Z = Ua(r, false);
  const z = () => {
    Z = true, r.destroyed && (N = false), !(N && (!r.writable || w)) && (!w || ee) && n.call(r);
  }, pe = (ye) => {
    n.call(r, ye);
  };
  let _e = im(r);
  const de = () => {
    _e = true;
    const ye = za(r) || Wa(r);
    if (ye && typeof ye != "boolean")
      return n.call(r, ye);
    if (v && !Z && Ii(r, true) && !Ua(r, false))
      return n.call(r, new Oa());
    if (w && !ee && !Va(r, false))
      return n.call(r, new Oa());
    n.call(r);
  }, re = () => {
    _e = true;
    const ye = za(r) || Wa(r);
    if (ye && typeof ye != "boolean")
      return n.call(r, ye);
    n.call(r);
  }, Fe = () => {
    r.req.on("finish", le);
  };
  fm(r) ? (r.on("complete", le), N || r.on("abort", de), r.req ? Fe() : r.on("request", Fe)) : w && !y && (r.on("end", k), r.on("close", k)), !N && typeof r.aborted == "boolean" && r.on("aborted", de), r.on("end", z), r.on("finish", le), o.error !== false && r.on("error", pe), r.on("close", de), _e ? Qt.nextTick(de) : y != null && y.errorEmitted || D != null && D.errorEmitted ? N || Qt.nextTick(re) : (!v && (!N || ja(r)) && (ee || $a(r) === false) || !w && (!N || $a(r)) && (Z || ja(r) === false) || D && r.req && r.aborted) && Qt.nextTick(re);
  const Ne = () => {
    n = Ji, r.removeListener("aborted", de), r.removeListener("complete", le), r.removeListener("abort", de), r.removeListener("request", Fe), r.req && r.req.removeListener("finish", le), r.removeListener("end", k), r.removeListener("close", k), r.removeListener("finish", le), r.removeListener("end", z), r.removeListener("error", pe), r.removeListener("close", de);
  };
  if (o.signal && !_e) {
    const ye = () => {
      const Ue = n;
      Ne(), Ue.call(
        r,
        new du(void 0, {
          cause: o.signal.reason
        })
      );
    };
    if (o.signal.aborted)
      Qt.nextTick(ye);
    else {
      const Ue = n;
      n = Qi((...We) => {
        o.signal.removeEventListener("abort", ye), Ue.apply(r, We);
      }), o.signal.addEventListener("abort", ye);
    }
  }
  return Ne;
}
function cm(r, o, n) {
  let l = false, b = Ji;
  if (o.signal)
    if (b = () => {
      l = true, n.call(
        r,
        new du(void 0, {
          cause: o.signal.reason
        })
      );
    }, o.signal.aborted)
      Qt.nextTick(b);
    else {
      const w = n;
      n = Qi((...y) => {
        o.signal.removeEventListener("abort", b), w.apply(r, y);
      }), o.signal.addEventListener("abort", b);
    }
  const v = (...w) => {
    l || Qt.nextTick(() => n.apply(r, w));
  };
  return nm(r[lm].promise, v, v), Ji;
}
function dm(r, o) {
  var n;
  let l = false;
  return o === null && (o = qi), (n = o) !== null && n !== void 0 && n.cleanup && (tm(o.cleanup, "cleanup"), l = o.cleanup), new rm((b, v) => {
    const w = hu(r, o, (y) => {
      l && w(), y ? v(y) : b();
    });
  });
}
vo.exports = hu;
vo.exports.finished = dm;
var tr = vo.exports;
const Nt = dr, {
  aggregateTwoErrors: hm,
  codes: { ERR_MULTIPLE_CALLBACK: pm },
  AbortError: mm
} = mt, { Symbol: pu } = tt, { kDestroyed: _m, isDestroyed: ym, isFinished: gm, isServerRequest: bm } = Ht, mu = pu("kDestroy"), eo = pu("kConstruct");
function _u(r, o, n) {
  r && (o && !o.errored && (o.errored = r), n && !n.errored && (n.errored = r));
}
function wm(r, o) {
  const n = this._readableState, l = this._writableState, b = l || n;
  return l != null && l.destroyed || n != null && n.destroyed ? (typeof o == "function" && o(), this) : (_u(r, l, n), l && (l.destroyed = true), n && (n.destroyed = true), b.constructed ? Ha(this, r, o) : this.once(mu, function(v) {
    Ha(this, hm(v, r), o);
  }), this);
}
function Ha(r, o, n) {
  let l = false;
  function b(v) {
    if (l)
      return;
    l = true;
    const w = r._readableState, y = r._writableState;
    _u(v, y, w), y && (y.closed = true), w && (w.closed = true), typeof n == "function" && n(v), v ? Nt.nextTick(vm, r, v) : Nt.nextTick(yu, r);
  }
  try {
    r._destroy(o || null, b);
  } catch (v) {
    b(v);
  }
}
function vm(r, o) {
  to(r, o), yu(r);
}
function yu(r) {
  const o = r._readableState, n = r._writableState;
  n && (n.closeEmitted = true), o && (o.closeEmitted = true), (n != null && n.emitClose || o != null && o.emitClose) && r.emit("close");
}
function to(r, o) {
  const n = r._readableState, l = r._writableState;
  l != null && l.errorEmitted || n != null && n.errorEmitted || (l && (l.errorEmitted = true), n && (n.errorEmitted = true), r.emit("error", o));
}
function Em() {
  const r = this._readableState, o = this._writableState;
  r && (r.constructed = true, r.closed = false, r.closeEmitted = false, r.destroyed = false, r.errored = null, r.errorEmitted = false, r.reading = false, r.ended = r.readable === false, r.endEmitted = r.readable === false), o && (o.constructed = true, o.destroyed = false, o.closed = false, o.closeEmitted = false, o.errored = null, o.errorEmitted = false, o.finalCalled = false, o.prefinished = false, o.ended = o.writable === false, o.ending = o.writable === false, o.finished = o.writable === false);
}
function ro(r, o, n) {
  const l = r._readableState, b = r._writableState;
  if (b != null && b.destroyed || l != null && l.destroyed)
    return this;
  l != null && l.autoDestroy || b != null && b.autoDestroy ? r.destroy(o) : o && (b && !b.errored && (b.errored = o), l && !l.errored && (l.errored = o), n ? Nt.nextTick(to, r, o) : to(r, o));
}
function xm(r, o) {
  if (typeof r._construct != "function")
    return;
  const n = r._readableState, l = r._writableState;
  n && (n.constructed = false), l && (l.constructed = false), r.once(eo, o), !(r.listenerCount(eo) > 1) && Nt.nextTick(Sm, r);
}
function Sm(r) {
  let o = false;
  function n(l) {
    if (o) {
      ro(r, l ?? new pm());
      return;
    }
    o = true;
    const b = r._readableState, v = r._writableState, w = v || b;
    b && (b.constructed = true), v && (v.constructed = true), w.destroyed ? r.emit(mu, l) : l ? ro(r, l, true) : Nt.nextTick(Tm, r);
  }
  try {
    r._construct((l) => {
      Nt.nextTick(n, l);
    });
  } catch (l) {
    Nt.nextTick(n, l);
  }
}
function Tm(r) {
  r.emit(eo);
}
function Ka(r) {
  return (r == null ? void 0 : r.setHeader) && typeof r.abort == "function";
}
function gu(r) {
  r.emit("close");
}
function Cm(r, o) {
  r.emit("error", o), Nt.nextTick(gu, r);
}
function Rm(r, o) {
  !r || ym(r) || (!o && !gm(r) && (o = new mm()), bm(r) ? (r.socket = null, r.destroy(o)) : Ka(r) ? r.abort() : Ka(r.req) ? r.req.abort() : typeof r.destroy == "function" ? r.destroy(o) : typeof r.close == "function" ? r.close() : o ? Nt.nextTick(Cm, r, o) : Nt.nextTick(gu, r), r.destroyed || (r[_m] = true));
}
var Ar = {
  construct: xm,
  destroyer: Rm,
  destroy: wm,
  undestroy: Em,
  errorOrDestroy: ro
}, Eo = { exports: {} }, Cr = typeof Reflect == "object" ? Reflect : null, Ya = Cr && typeof Cr.apply == "function" ? Cr.apply : function(o, n, l) {
  return Function.prototype.apply.call(o, n, l);
}, Pn;
Cr && typeof Cr.ownKeys == "function" ? Pn = Cr.ownKeys : Object.getOwnPropertySymbols ? Pn = function(o) {
  return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
} : Pn = function(o) {
  return Object.getOwnPropertyNames(o);
};
function Fm(r) {
  console && console.warn && console.warn(r);
}
var bu = Number.isNaN || function(o) {
  return o !== o;
};
function Ke() {
  Ke.init.call(this);
}
Eo.exports = Ke;
Eo.exports.once = Dm;
Ke.EventEmitter = Ke;
Ke.prototype._events = void 0;
Ke.prototype._eventsCount = 0;
Ke.prototype._maxListeners = void 0;
var Xa = 10;
function Kn(r) {
  if (typeof r != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof r);
}
Object.defineProperty(Ke, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return Xa;
  },
  set: function(r) {
    if (typeof r != "number" || r < 0 || bu(r))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + r + ".");
    Xa = r;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(o) {
  if (typeof o != "number" || o < 0 || bu(o))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + o + ".");
  return this._maxListeners = o, this;
};
function wu(r) {
  return r._maxListeners === void 0 ? Ke.defaultMaxListeners : r._maxListeners;
}
Ke.prototype.getMaxListeners = function() {
  return wu(this);
};
Ke.prototype.emit = function(o) {
  for (var n = [], l = 1; l < arguments.length; l++)
    n.push(arguments[l]);
  var b = o === "error", v = this._events;
  if (v !== void 0)
    b = b && v.error === void 0;
  else if (!b)
    return false;
  if (b) {
    var w;
    if (n.length > 0 && (w = n[0]), w instanceof Error)
      throw w;
    var y = new Error("Unhandled error." + (w ? " (" + w.message + ")" : ""));
    throw y.context = w, y;
  }
  var D = v[o];
  if (D === void 0)
    return false;
  if (typeof D == "function")
    Ya(D, this, n);
  else
    for (var k = D.length, N = Tu(D, k), l = 0; l < k; ++l)
      Ya(N[l], this, n);
  return true;
};
function vu(r, o, n, l) {
  var b, v, w;
  if (Kn(n), v = r._events, v === void 0 ? (v = r._events = /* @__PURE__ */ Object.create(null), r._eventsCount = 0) : (v.newListener !== void 0 && (r.emit(
    "newListener",
    o,
    n.listener ? n.listener : n
  ), v = r._events), w = v[o]), w === void 0)
    w = v[o] = n, ++r._eventsCount;
  else if (typeof w == "function" ? w = v[o] = l ? [n, w] : [w, n] : l ? w.unshift(n) : w.push(n), b = wu(r), b > 0 && w.length > b && !w.warned) {
    w.warned = true;
    var y = new Error("Possible EventEmitter memory leak detected. " + w.length + " " + String(o) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    y.name = "MaxListenersExceededWarning", y.emitter = r, y.type = o, y.count = w.length, Fm(y);
  }
  return r;
}
Ke.prototype.addListener = function(o, n) {
  return vu(this, o, n, false);
};
Ke.prototype.on = Ke.prototype.addListener;
Ke.prototype.prependListener = function(o, n) {
  return vu(this, o, n, true);
};
function Am() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Eu(r, o, n) {
  var l = { fired: false, wrapFn: void 0, target: r, type: o, listener: n }, b = Am.bind(l);
  return b.listener = n, l.wrapFn = b, b;
}
Ke.prototype.once = function(o, n) {
  return Kn(n), this.on(o, Eu(this, o, n)), this;
};
Ke.prototype.prependOnceListener = function(o, n) {
  return Kn(n), this.prependListener(o, Eu(this, o, n)), this;
};
Ke.prototype.removeListener = function(o, n) {
  var l, b, v, w, y;
  if (Kn(n), b = this._events, b === void 0)
    return this;
  if (l = b[o], l === void 0)
    return this;
  if (l === n || l.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete b[o], b.removeListener && this.emit("removeListener", o, l.listener || n));
  else if (typeof l != "function") {
    for (v = -1, w = l.length - 1; w >= 0; w--)
      if (l[w] === n || l[w].listener === n) {
        y = l[w].listener, v = w;
        break;
      }
    if (v < 0)
      return this;
    v === 0 ? l.shift() : Im(l, v), l.length === 1 && (b[o] = l[0]), b.removeListener !== void 0 && this.emit("removeListener", o, y || n);
  }
  return this;
};
Ke.prototype.off = Ke.prototype.removeListener;
Ke.prototype.removeAllListeners = function(o) {
  var n, l, b;
  if (l = this._events, l === void 0)
    return this;
  if (l.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : l[o] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete l[o]), this;
  if (arguments.length === 0) {
    var v = Object.keys(l), w;
    for (b = 0; b < v.length; ++b)
      w = v[b], w !== "removeListener" && this.removeAllListeners(w);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = l[o], typeof n == "function")
    this.removeListener(o, n);
  else if (n !== void 0)
    for (b = n.length - 1; b >= 0; b--)
      this.removeListener(o, n[b]);
  return this;
};
function xu(r, o, n) {
  var l = r._events;
  if (l === void 0)
    return [];
  var b = l[o];
  return b === void 0 ? [] : typeof b == "function" ? n ? [b.listener || b] : [b] : n ? Pm(b) : Tu(b, b.length);
}
Ke.prototype.listeners = function(o) {
  return xu(this, o, true);
};
Ke.prototype.rawListeners = function(o) {
  return xu(this, o, false);
};
Ke.listenerCount = function(r, o) {
  return typeof r.listenerCount == "function" ? r.listenerCount(o) : Su.call(r, o);
};
Ke.prototype.listenerCount = Su;
function Su(r) {
  var o = this._events;
  if (o !== void 0) {
    var n = o[r];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
Ke.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Pn(this._events) : [];
};
function Tu(r, o) {
  for (var n = new Array(o), l = 0; l < o; ++l)
    n[l] = r[l];
  return n;
}
function Im(r, o) {
  for (; o + 1 < r.length; o++)
    r[o] = r[o + 1];
  r.pop();
}
function Pm(r) {
  for (var o = new Array(r.length), n = 0; n < o.length; ++n)
    o[n] = r[n].listener || r[n];
  return o;
}
function Dm(r, o) {
  return new Promise(function(n, l) {
    function b(w) {
      r.removeListener(o, v), l(w);
    }
    function v() {
      typeof r.removeListener == "function" && r.removeListener("error", b), n([].slice.call(arguments));
    }
    Cu(r, o, v, { once: true }), o !== "error" && km(r, b, { once: true });
  });
}
function km(r, o, n) {
  typeof r.on == "function" && Cu(r, "error", o, n);
}
function Cu(r, o, n, l) {
  if (typeof r.on == "function")
    l.once ? r.once(o, n) : r.on(o, n);
  else if (typeof r.addEventListener == "function")
    r.addEventListener(o, function b(v) {
      l.once && r.removeEventListener(o, b), n(v);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof r);
}
var xo = Eo.exports;
const { ArrayIsArray: Lm, ObjectSetPrototypeOf: Ru } = tt, { EventEmitter: Yn } = xo;
function Xn(r) {
  Yn.call(this, r);
}
Ru(Xn.prototype, Yn.prototype);
Ru(Xn, Yn);
Xn.prototype.pipe = function(r, o) {
  const n = this;
  function l(N) {
    r.writable && r.write(N) === false && n.pause && n.pause();
  }
  n.on("data", l);
  function b() {
    n.readable && n.resume && n.resume();
  }
  r.on("drain", b), !r._isStdio && (!o || o.end !== false) && (n.on("end", w), n.on("close", y));
  let v = false;
  function w() {
    v || (v = true, r.end());
  }
  function y() {
    v || (v = true, typeof r.destroy == "function" && r.destroy());
  }
  function D(N) {
    k(), Yn.listenerCount(this, "error") === 0 && this.emit("error", N);
  }
  no(n, "error", D), no(r, "error", D);
  function k() {
    n.removeListener("data", l), r.removeListener("drain", b), n.removeListener("end", w), n.removeListener("close", y), n.removeListener("error", D), r.removeListener("error", D), n.removeListener("end", k), n.removeListener("close", k), r.removeListener("close", k);
  }
  return n.on("end", k), n.on("close", k), r.on("close", k), r.emit("pipe", n), r;
};
function no(r, o, n) {
  if (typeof r.prependListener == "function")
    return r.prependListener(o, n);
  !r._events || !r._events[o] ? r.on(o, n) : Lm(r._events[o]) ? r._events[o].unshift(n) : r._events[o] = [n, r._events[o]];
}
var So = {
  Stream: Xn,
  prependListener: no
}, Fu = { exports: {} };
(function(r) {
  const { AbortError: o, codes: n } = mt, { isNodeStream: l, isWebStream: b, kControllerErrorFunction: v } = Ht, w = tr, { ERR_INVALID_ARG_TYPE: y } = n, D = (k, N) => {
    if (typeof k != "object" || !("aborted" in k))
      throw new y(N, "AbortSignal", k);
  };
  r.exports.addAbortSignal = function(N, ee) {
    if (D(N, "signal"), !l(ee) && !b(ee))
      throw new y("stream", ["ReadableStream", "WritableStream", "Stream"], ee);
    return r.exports.addAbortSignalNoValidate(N, ee);
  }, r.exports.addAbortSignalNoValidate = function(k, N) {
    if (typeof k != "object" || !("aborted" in k))
      return N;
    const ee = l(N) ? () => {
      N.destroy(
        new o(void 0, {
          cause: k.reason
        })
      );
    } : () => {
      N[v](
        new o(void 0, {
          cause: k.reason
        })
      );
    };
    return k.aborted ? ee() : (k.addEventListener("abort", ee), w(N, () => k.removeEventListener("abort", ee))), N;
  };
})(Fu);
var Zn = Fu.exports;
const { StringPrototypeSlice: Za, SymbolIterator: Mm, TypedArrayPrototypeSet: Cn, Uint8Array: Bm } = tt, { Buffer: Pi } = er, { inspect: Nm } = Vt;
var Om = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(o) {
    const n = {
      data: o,
      next: null
    };
    this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
  }
  unshift(o) {
    const n = {
      data: o,
      next: this.head
    };
    this.length === 0 && (this.tail = n), this.head = n, ++this.length;
  }
  shift() {
    if (this.length === 0)
      return;
    const o = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, o;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(o) {
    if (this.length === 0)
      return "";
    let n = this.head, l = "" + n.data;
    for (; (n = n.next) !== null; )
      l += o + n.data;
    return l;
  }
  concat(o) {
    if (this.length === 0)
      return Pi.alloc(0);
    const n = Pi.allocUnsafe(o >>> 0);
    let l = this.head, b = 0;
    for (; l; )
      Cn(n, l.data, b), b += l.data.length, l = l.next;
    return n;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(o, n) {
    const l = this.head.data;
    if (o < l.length) {
      const b = l.slice(0, o);
      return this.head.data = l.slice(o), b;
    }
    return o === l.length ? this.shift() : n ? this._getString(o) : this._getBuffer(o);
  }
  first() {
    return this.head.data;
  }
  *[Mm]() {
    for (let o = this.head; o; o = o.next)
      yield o.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(o) {
    let n = "", l = this.head, b = 0;
    do {
      const v = l.data;
      if (o > v.length)
        n += v, o -= v.length;
      else {
        o === v.length ? (n += v, ++b, l.next ? this.head = l.next : this.head = this.tail = null) : (n += Za(v, 0, o), this.head = l, l.data = Za(v, o));
        break;
      }
      ++b;
    } while ((l = l.next) !== null);
    return this.length -= b, n;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(o) {
    const n = Pi.allocUnsafe(o), l = o;
    let b = this.head, v = 0;
    do {
      const w = b.data;
      if (o > w.length)
        Cn(n, w, l - o), o -= w.length;
      else {
        o === w.length ? (Cn(n, w, l - o), ++v, b.next ? this.head = b.next : this.head = this.tail = null) : (Cn(n, new Bm(w.buffer, w.byteOffset, o), l - o), this.head = b, b.data = w.slice(o));
        break;
      }
      ++v;
    } while ((b = b.next) !== null);
    return this.length -= v, n;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](o, n) {
    return Nm(this, {
      ...n,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: false
    });
  }
};
const { MathFloor: jm, NumberIsInteger: Um } = tt, { ERR_INVALID_ARG_VALUE: Wm } = mt.codes;
function $m(r, o, n) {
  return r.highWaterMark != null ? r.highWaterMark : o ? r[n] : null;
}
function Au(r) {
  return r ? 16 : 16 * 1024;
}
function Gm(r, o, n, l) {
  const b = $m(o, l, n);
  if (b != null) {
    if (!Um(b) || b < 0) {
      const v = l ? `options.${n}` : "options.highWaterMark";
      throw new Wm(v, b);
    }
    return jm(b);
  }
  return Au(r.objectMode);
}
var To = {
  getHighWaterMark: Gm,
  getDefaultHighWaterMark: Au
}, Iu = {}, io = { exports: {} }, Pu = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  var o = Xr, n = Un, l = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = y, r.SlowBuffer = re, r.INSPECT_MAX_BYTES = 50;
  var b = 2147483647;
  r.kMaxLength = b, y.TYPED_ARRAY_SUPPORT = v(), !y.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function v() {
    try {
      var x = new Uint8Array(1), d = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(d, Uint8Array.prototype), Object.setPrototypeOf(x, d), x.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(y.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (y.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(y.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (y.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(x) {
    if (x > b)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
    var d = new Uint8Array(x);
    return Object.setPrototypeOf(d, y.prototype), d;
  }
  function y(x, d, p) {
    if (typeof x == "number") {
      if (typeof d == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return ee(x);
    }
    return D(x, d, p);
  }
  y.poolSize = 8192;
  function D(x, d, p) {
    if (typeof x == "string")
      return le(x, d);
    if (ArrayBuffer.isView(x))
      return z(x);
    if (x == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
      );
    if (L(x, ArrayBuffer) || x && L(x.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (L(x, SharedArrayBuffer) || x && L(x.buffer, SharedArrayBuffer)))
      return pe(x, d, p);
    if (typeof x == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var R = x.valueOf && x.valueOf();
    if (R != null && R !== x)
      return y.from(R, d, p);
    var M = _e(x);
    if (M)
      return M;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof x[Symbol.toPrimitive] == "function")
      return y.from(
        x[Symbol.toPrimitive]("string"),
        d,
        p
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
    );
  }
  y.from = function(x, d, p) {
    return D(x, d, p);
  }, Object.setPrototypeOf(y.prototype, Uint8Array.prototype), Object.setPrototypeOf(y, Uint8Array);
  function k(x) {
    if (typeof x != "number")
      throw new TypeError('"size" argument must be of type number');
    if (x < 0)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
  }
  function N(x, d, p) {
    return k(x), x <= 0 ? w(x) : d !== void 0 ? typeof p == "string" ? w(x).fill(d, p) : w(x).fill(d) : w(x);
  }
  y.alloc = function(x, d, p) {
    return N(x, d, p);
  };
  function ee(x) {
    return k(x), w(x < 0 ? 0 : de(x) | 0);
  }
  y.allocUnsafe = function(x) {
    return ee(x);
  }, y.allocUnsafeSlow = function(x) {
    return ee(x);
  };
  function le(x, d) {
    if ((typeof d != "string" || d === "") && (d = "utf8"), !y.isEncoding(d))
      throw new TypeError("Unknown encoding: " + d);
    var p = Fe(x, d) | 0, R = w(p), M = R.write(x, d);
    return M !== p && (R = R.slice(0, M)), R;
  }
  function Z(x) {
    for (var d = x.length < 0 ? 0 : de(x.length) | 0, p = w(d), R = 0; R < d; R += 1)
      p[R] = x[R] & 255;
    return p;
  }
  function z(x) {
    if (L(x, Uint8Array)) {
      var d = new Uint8Array(x);
      return pe(d.buffer, d.byteOffset, d.byteLength);
    }
    return Z(x);
  }
  function pe(x, d, p) {
    if (d < 0 || x.byteLength < d)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (x.byteLength < d + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var R;
    return d === void 0 && p === void 0 ? R = new Uint8Array(x) : p === void 0 ? R = new Uint8Array(x, d) : R = new Uint8Array(x, d, p), Object.setPrototypeOf(R, y.prototype), R;
  }
  function _e(x) {
    if (y.isBuffer(x)) {
      var d = de(x.length) | 0, p = w(d);
      return p.length === 0 || x.copy(p, 0, 0, d), p;
    }
    if (x.length !== void 0)
      return typeof x.length != "number" || O(x.length) ? w(0) : Z(x);
    if (x.type === "Buffer" && Array.isArray(x.data))
      return Z(x.data);
  }
  function de(x) {
    if (x >= b)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b.toString(16) + " bytes");
    return x | 0;
  }
  function re(x) {
    return +x != x && (x = 0), y.alloc(+x);
  }
  y.isBuffer = function(d) {
    return d != null && d._isBuffer === true && d !== y.prototype;
  }, y.compare = function(d, p) {
    if (L(d, Uint8Array) && (d = y.from(d, d.offset, d.byteLength)), L(p, Uint8Array) && (p = y.from(p, p.offset, p.byteLength)), !y.isBuffer(d) || !y.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (d === p)
      return 0;
    for (var R = d.length, M = p.length, X = 0, Y = Math.min(R, M); X < Y; ++X)
      if (d[X] !== p[X]) {
        R = d[X], M = p[X];
        break;
      }
    return R < M ? -1 : M < R ? 1 : 0;
  }, y.isEncoding = function(d) {
    switch (String(d).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  }, y.concat = function(d, p) {
    if (!Array.isArray(d))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (d.length === 0)
      return y.alloc(0);
    var R;
    if (p === void 0)
      for (p = 0, R = 0; R < d.length; ++R)
        p += d[R].length;
    var M = y.allocUnsafe(p), X = 0;
    for (R = 0; R < d.length; ++R) {
      var Y = d[R];
      if (L(Y, Uint8Array))
        X + Y.length > M.length ? y.from(Y).copy(M, X) : Uint8Array.prototype.set.call(
          M,
          Y,
          X
        );
      else if (y.isBuffer(Y))
        Y.copy(M, X);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      X += Y.length;
    }
    return M;
  };
  function Fe(x, d) {
    if (y.isBuffer(x))
      return x.length;
    if (ArrayBuffer.isView(x) || L(x, ArrayBuffer))
      return x.byteLength;
    if (typeof x != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof x
      );
    var p = x.length, R = arguments.length > 2 && arguments[2] === true;
    if (!R && p === 0)
      return 0;
    for (var M = false; ; )
      switch (d) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return Je(x).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return gt(x).length;
        default:
          if (M)
            return R ? -1 : Je(x).length;
          d = ("" + d).toLowerCase(), M = true;
      }
  }
  y.byteLength = Fe;
  function Ne(x, d, p) {
    var R = false;
    if ((d === void 0 || d < 0) && (d = 0), d > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, d >>>= 0, p <= d))
      return "";
    for (x || (x = "utf8"); ; )
      switch (x) {
        case "hex":
          return ne(this, d, p);
        case "utf8":
        case "utf-8":
          return me(this, d, p);
        case "ascii":
          return Te(this, d, p);
        case "latin1":
        case "binary":
          return B(this, d, p);
        case "base64":
          return De(this, d, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, d, p);
        default:
          if (R)
            throw new TypeError("Unknown encoding: " + x);
          x = (x + "").toLowerCase(), R = true;
      }
  }
  y.prototype._isBuffer = true;
  function ye(x, d, p) {
    var R = x[d];
    x[d] = x[p], x[p] = R;
  }
  y.prototype.swap16 = function() {
    var d = this.length;
    if (d % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var p = 0; p < d; p += 2)
      ye(this, p, p + 1);
    return this;
  }, y.prototype.swap32 = function() {
    var d = this.length;
    if (d % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var p = 0; p < d; p += 4)
      ye(this, p, p + 3), ye(this, p + 1, p + 2);
    return this;
  }, y.prototype.swap64 = function() {
    var d = this.length;
    if (d % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var p = 0; p < d; p += 8)
      ye(this, p, p + 7), ye(this, p + 1, p + 6), ye(this, p + 2, p + 5), ye(this, p + 3, p + 4);
    return this;
  }, y.prototype.toString = function() {
    var d = this.length;
    return d === 0 ? "" : arguments.length === 0 ? me(this, 0, d) : Ne.apply(this, arguments);
  }, y.prototype.toLocaleString = y.prototype.toString, y.prototype.equals = function(d) {
    if (!y.isBuffer(d))
      throw new TypeError("Argument must be a Buffer");
    return this === d ? true : y.compare(this, d) === 0;
  }, y.prototype.inspect = function() {
    var d = "", p = r.INSPECT_MAX_BYTES;
    return d = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (d += " ... "), "<Buffer " + d + ">";
  }, l && (y.prototype[l] = y.prototype.inspect), y.prototype.compare = function(d, p, R, M, X) {
    if (L(d, Uint8Array) && (d = y.from(d, d.offset, d.byteLength)), !y.isBuffer(d))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof d
      );
    if (p === void 0 && (p = 0), R === void 0 && (R = d ? d.length : 0), M === void 0 && (M = 0), X === void 0 && (X = this.length), p < 0 || R > d.length || M < 0 || X > this.length)
      throw new RangeError("out of range index");
    if (M >= X && p >= R)
      return 0;
    if (M >= X)
      return -1;
    if (p >= R)
      return 1;
    if (p >>>= 0, R >>>= 0, M >>>= 0, X >>>= 0, this === d)
      return 0;
    for (var Y = X - M, xe = R - p, Be = Math.min(Y, xe), S = this.slice(M, X), T = d.slice(p, R), _ = 0; _ < Be; ++_)
      if (S[_] !== T[_]) {
        Y = S[_], xe = T[_];
        break;
      }
    return Y < xe ? -1 : xe < Y ? 1 : 0;
  };
  function Ue(x, d, p, R, M) {
    if (x.length === 0)
      return -1;
    if (typeof p == "string" ? (R = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, O(p) && (p = M ? 0 : x.length - 1), p < 0 && (p = x.length + p), p >= x.length) {
      if (M)
        return -1;
      p = x.length - 1;
    } else if (p < 0)
      if (M)
        p = 0;
      else
        return -1;
    if (typeof d == "string" && (d = y.from(d, R)), y.isBuffer(d))
      return d.length === 0 ? -1 : We(x, d, p, R, M);
    if (typeof d == "number")
      return d = d & 255, typeof Uint8Array.prototype.indexOf == "function" ? M ? Uint8Array.prototype.indexOf.call(x, d, p) : Uint8Array.prototype.lastIndexOf.call(x, d, p) : We(x, [d], p, R, M);
    throw new TypeError("val must be string, number or Buffer");
  }
  function We(x, d, p, R, M) {
    var X = 1, Y = x.length, xe = d.length;
    if (R !== void 0 && (R = String(R).toLowerCase(), R === "ucs2" || R === "ucs-2" || R === "utf16le" || R === "utf-16le")) {
      if (x.length < 2 || d.length < 2)
        return -1;
      X = 2, Y /= 2, xe /= 2, p /= 2;
    }
    function Be(f, C) {
      return X === 1 ? f[C] : f.readUInt16BE(C * X);
    }
    var S;
    if (M) {
      var T = -1;
      for (S = p; S < Y; S++)
        if (Be(x, S) === Be(d, T === -1 ? 0 : S - T)) {
          if (T === -1 && (T = S), S - T + 1 === xe)
            return T * X;
        } else
          T !== -1 && (S -= S - T), T = -1;
    } else
      for (p + xe > Y && (p = Y - xe), S = p; S >= 0; S--) {
        for (var _ = true, u = 0; u < xe; u++)
          if (Be(x, S + u) !== Be(d, u)) {
            _ = false;
            break;
          }
        if (_)
          return S;
      }
    return -1;
  }
  y.prototype.includes = function(d, p, R) {
    return this.indexOf(d, p, R) !== -1;
  }, y.prototype.indexOf = function(d, p, R) {
    return Ue(this, d, p, R, true);
  }, y.prototype.lastIndexOf = function(d, p, R) {
    return Ue(this, d, p, R, false);
  };
  function Ge(x, d, p, R) {
    p = Number(p) || 0;
    var M = x.length - p;
    R ? (R = Number(R), R > M && (R = M)) : R = M;
    var X = d.length;
    R > X / 2 && (R = X / 2);
    for (var Y = 0; Y < R; ++Y) {
      var xe = parseInt(d.substr(Y * 2, 2), 16);
      if (O(xe))
        return Y;
      x[p + Y] = xe;
    }
    return Y;
  }
  function Se(x, d, p, R) {
    return st(Je(d, x.length - p), x, p, R);
  }
  function oe(x, d, p, R) {
    return st(ot(d), x, p, R);
  }
  function ge(x, d, p, R) {
    return st(gt(d), x, p, R);
  }
  function $e(x, d, p, R) {
    return st(At(d, x.length - p), x, p, R);
  }
  y.prototype.write = function(d, p, R, M) {
    if (p === void 0)
      M = "utf8", R = this.length, p = 0;
    else if (R === void 0 && typeof p == "string")
      M = p, R = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(R) ? (R = R >>> 0, M === void 0 && (M = "utf8")) : (M = R, R = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var X = this.length - p;
    if ((R === void 0 || R > X) && (R = X), d.length > 0 && (R < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    M || (M = "utf8");
    for (var Y = false; ; )
      switch (M) {
        case "hex":
          return Ge(this, d, p, R);
        case "utf8":
        case "utf-8":
          return Se(this, d, p, R);
        case "ascii":
        case "latin1":
        case "binary":
          return oe(this, d, p, R);
        case "base64":
          return ge(this, d, p, R);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return $e(this, d, p, R);
        default:
          if (Y)
            throw new TypeError("Unknown encoding: " + M);
          M = ("" + M).toLowerCase(), Y = true;
      }
  }, y.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function De(x, d, p) {
    return d === 0 && p === x.length ? o.fromByteArray(x) : o.fromByteArray(x.slice(d, p));
  }
  function me(x, d, p) {
    p = Math.min(x.length, p);
    for (var R = [], M = d; M < p; ) {
      var X = x[M], Y = null, xe = X > 239 ? 4 : X > 223 ? 3 : X > 191 ? 2 : 1;
      if (M + xe <= p) {
        var Be, S, T, _;
        switch (xe) {
          case 1:
            X < 128 && (Y = X);
            break;
          case 2:
            Be = x[M + 1], (Be & 192) === 128 && (_ = (X & 31) << 6 | Be & 63, _ > 127 && (Y = _));
            break;
          case 3:
            Be = x[M + 1], S = x[M + 2], (Be & 192) === 128 && (S & 192) === 128 && (_ = (X & 15) << 12 | (Be & 63) << 6 | S & 63, _ > 2047 && (_ < 55296 || _ > 57343) && (Y = _));
            break;
          case 4:
            Be = x[M + 1], S = x[M + 2], T = x[M + 3], (Be & 192) === 128 && (S & 192) === 128 && (T & 192) === 128 && (_ = (X & 15) << 18 | (Be & 63) << 12 | (S & 63) << 6 | T & 63, _ > 65535 && _ < 1114112 && (Y = _));
        }
      }
      Y === null ? (Y = 65533, xe = 1) : Y > 65535 && (Y -= 65536, R.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), R.push(Y), M += xe;
    }
    return Pe(R);
  }
  var ue = 4096;
  function Pe(x) {
    var d = x.length;
    if (d <= ue)
      return String.fromCharCode.apply(String, x);
    for (var p = "", R = 0; R < d; )
      p += String.fromCharCode.apply(
        String,
        x.slice(R, R += ue)
      );
    return p;
  }
  function Te(x, d, p) {
    var R = "";
    p = Math.min(x.length, p);
    for (var M = d; M < p; ++M)
      R += String.fromCharCode(x[M] & 127);
    return R;
  }
  function B(x, d, p) {
    var R = "";
    p = Math.min(x.length, p);
    for (var M = d; M < p; ++M)
      R += String.fromCharCode(x[M]);
    return R;
  }
  function ne(x, d, p) {
    var R = x.length;
    (!d || d < 0) && (d = 0), (!p || p < 0 || p > R) && (p = R);
    for (var M = "", X = d; X < p; ++X)
      M += q[x[X]];
    return M;
  }
  function te(x, d, p) {
    for (var R = x.slice(d, p), M = "", X = 0; X < R.length - 1; X += 2)
      M += String.fromCharCode(R[X] + R[X + 1] * 256);
    return M;
  }
  y.prototype.slice = function(d, p) {
    var R = this.length;
    d = ~~d, p = p === void 0 ? R : ~~p, d < 0 ? (d += R, d < 0 && (d = 0)) : d > R && (d = R), p < 0 ? (p += R, p < 0 && (p = 0)) : p > R && (p = R), p < d && (p = d);
    var M = this.subarray(d, p);
    return Object.setPrototypeOf(M, y.prototype), M;
  };
  function be(x, d, p) {
    if (x % 1 !== 0 || x < 0)
      throw new RangeError("offset is not uint");
    if (x + d > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  y.prototype.readUintLE = y.prototype.readUIntLE = function(d, p, R) {
    d = d >>> 0, p = p >>> 0, R || be(d, p, this.length);
    for (var M = this[d], X = 1, Y = 0; ++Y < p && (X *= 256); )
      M += this[d + Y] * X;
    return M;
  }, y.prototype.readUintBE = y.prototype.readUIntBE = function(d, p, R) {
    d = d >>> 0, p = p >>> 0, R || be(d, p, this.length);
    for (var M = this[d + --p], X = 1; p > 0 && (X *= 256); )
      M += this[d + --p] * X;
    return M;
  }, y.prototype.readUint8 = y.prototype.readUInt8 = function(d, p) {
    return d = d >>> 0, p || be(d, 1, this.length), this[d];
  }, y.prototype.readUint16LE = y.prototype.readUInt16LE = function(d, p) {
    return d = d >>> 0, p || be(d, 2, this.length), this[d] | this[d + 1] << 8;
  }, y.prototype.readUint16BE = y.prototype.readUInt16BE = function(d, p) {
    return d = d >>> 0, p || be(d, 2, this.length), this[d] << 8 | this[d + 1];
  }, y.prototype.readUint32LE = y.prototype.readUInt32LE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), (this[d] | this[d + 1] << 8 | this[d + 2] << 16) + this[d + 3] * 16777216;
  }, y.prototype.readUint32BE = y.prototype.readUInt32BE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), this[d] * 16777216 + (this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3]);
  }, y.prototype.readIntLE = function(d, p, R) {
    d = d >>> 0, p = p >>> 0, R || be(d, p, this.length);
    for (var M = this[d], X = 1, Y = 0; ++Y < p && (X *= 256); )
      M += this[d + Y] * X;
    return X *= 128, M >= X && (M -= Math.pow(2, 8 * p)), M;
  }, y.prototype.readIntBE = function(d, p, R) {
    d = d >>> 0, p = p >>> 0, R || be(d, p, this.length);
    for (var M = p, X = 1, Y = this[d + --M]; M > 0 && (X *= 256); )
      Y += this[d + --M] * X;
    return X *= 128, Y >= X && (Y -= Math.pow(2, 8 * p)), Y;
  }, y.prototype.readInt8 = function(d, p) {
    return d = d >>> 0, p || be(d, 1, this.length), this[d] & 128 ? (255 - this[d] + 1) * -1 : this[d];
  }, y.prototype.readInt16LE = function(d, p) {
    d = d >>> 0, p || be(d, 2, this.length);
    var R = this[d] | this[d + 1] << 8;
    return R & 32768 ? R | 4294901760 : R;
  }, y.prototype.readInt16BE = function(d, p) {
    d = d >>> 0, p || be(d, 2, this.length);
    var R = this[d + 1] | this[d] << 8;
    return R & 32768 ? R | 4294901760 : R;
  }, y.prototype.readInt32LE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), this[d] | this[d + 1] << 8 | this[d + 2] << 16 | this[d + 3] << 24;
  }, y.prototype.readInt32BE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), this[d] << 24 | this[d + 1] << 16 | this[d + 2] << 8 | this[d + 3];
  }, y.prototype.readFloatLE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), n.read(this, d, true, 23, 4);
  }, y.prototype.readFloatBE = function(d, p) {
    return d = d >>> 0, p || be(d, 4, this.length), n.read(this, d, false, 23, 4);
  }, y.prototype.readDoubleLE = function(d, p) {
    return d = d >>> 0, p || be(d, 8, this.length), n.read(this, d, true, 52, 8);
  }, y.prototype.readDoubleBE = function(d, p) {
    return d = d >>> 0, p || be(d, 8, this.length), n.read(this, d, false, 52, 8);
  };
  function Ae(x, d, p, R, M, X) {
    if (!y.isBuffer(x))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (d > M || d < X)
      throw new RangeError('"value" argument is out of bounds');
    if (p + R > x.length)
      throw new RangeError("Index out of range");
  }
  y.prototype.writeUintLE = y.prototype.writeUIntLE = function(d, p, R, M) {
    if (d = +d, p = p >>> 0, R = R >>> 0, !M) {
      var X = Math.pow(2, 8 * R) - 1;
      Ae(this, d, p, R, X, 0);
    }
    var Y = 1, xe = 0;
    for (this[p] = d & 255; ++xe < R && (Y *= 256); )
      this[p + xe] = d / Y & 255;
    return p + R;
  }, y.prototype.writeUintBE = y.prototype.writeUIntBE = function(d, p, R, M) {
    if (d = +d, p = p >>> 0, R = R >>> 0, !M) {
      var X = Math.pow(2, 8 * R) - 1;
      Ae(this, d, p, R, X, 0);
    }
    var Y = R - 1, xe = 1;
    for (this[p + Y] = d & 255; --Y >= 0 && (xe *= 256); )
      this[p + Y] = d / xe & 255;
    return p + R;
  }, y.prototype.writeUint8 = y.prototype.writeUInt8 = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 1, 255, 0), this[p] = d & 255, p + 1;
  }, y.prototype.writeUint16LE = y.prototype.writeUInt16LE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 2, 65535, 0), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2;
  }, y.prototype.writeUint16BE = y.prototype.writeUInt16BE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 2, 65535, 0), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2;
  }, y.prototype.writeUint32LE = y.prototype.writeUInt32LE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 4, 4294967295, 0), this[p + 3] = d >>> 24, this[p + 2] = d >>> 16, this[p + 1] = d >>> 8, this[p] = d & 255, p + 4;
  }, y.prototype.writeUint32BE = y.prototype.writeUInt32BE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 4, 4294967295, 0), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4;
  }, y.prototype.writeIntLE = function(d, p, R, M) {
    if (d = +d, p = p >>> 0, !M) {
      var X = Math.pow(2, 8 * R - 1);
      Ae(this, d, p, R, X - 1, -X);
    }
    var Y = 0, xe = 1, Be = 0;
    for (this[p] = d & 255; ++Y < R && (xe *= 256); )
      d < 0 && Be === 0 && this[p + Y - 1] !== 0 && (Be = 1), this[p + Y] = (d / xe >> 0) - Be & 255;
    return p + R;
  }, y.prototype.writeIntBE = function(d, p, R, M) {
    if (d = +d, p = p >>> 0, !M) {
      var X = Math.pow(2, 8 * R - 1);
      Ae(this, d, p, R, X - 1, -X);
    }
    var Y = R - 1, xe = 1, Be = 0;
    for (this[p + Y] = d & 255; --Y >= 0 && (xe *= 256); )
      d < 0 && Be === 0 && this[p + Y + 1] !== 0 && (Be = 1), this[p + Y] = (d / xe >> 0) - Be & 255;
    return p + R;
  }, y.prototype.writeInt8 = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 1, 127, -128), d < 0 && (d = 255 + d + 1), this[p] = d & 255, p + 1;
  }, y.prototype.writeInt16LE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 2, 32767, -32768), this[p] = d & 255, this[p + 1] = d >>> 8, p + 2;
  }, y.prototype.writeInt16BE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 2, 32767, -32768), this[p] = d >>> 8, this[p + 1] = d & 255, p + 2;
  }, y.prototype.writeInt32LE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 4, 2147483647, -2147483648), this[p] = d & 255, this[p + 1] = d >>> 8, this[p + 2] = d >>> 16, this[p + 3] = d >>> 24, p + 4;
  }, y.prototype.writeInt32BE = function(d, p, R) {
    return d = +d, p = p >>> 0, R || Ae(this, d, p, 4, 2147483647, -2147483648), d < 0 && (d = 4294967295 + d + 1), this[p] = d >>> 24, this[p + 1] = d >>> 16, this[p + 2] = d >>> 8, this[p + 3] = d & 255, p + 4;
  };
  function ct(x, d, p, R, M, X) {
    if (p + R > x.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function dt(x, d, p, R, M) {
    return d = +d, p = p >>> 0, M || ct(x, d, p, 4), n.write(x, d, p, R, 23, 4), p + 4;
  }
  y.prototype.writeFloatLE = function(d, p, R) {
    return dt(this, d, p, true, R);
  }, y.prototype.writeFloatBE = function(d, p, R) {
    return dt(this, d, p, false, R);
  };
  function it(x, d, p, R, M) {
    return d = +d, p = p >>> 0, M || ct(x, d, p, 8), n.write(x, d, p, R, 52, 8), p + 8;
  }
  y.prototype.writeDoubleLE = function(d, p, R) {
    return it(this, d, p, true, R);
  }, y.prototype.writeDoubleBE = function(d, p, R) {
    return it(this, d, p, false, R);
  }, y.prototype.copy = function(d, p, R, M) {
    if (!y.isBuffer(d))
      throw new TypeError("argument should be a Buffer");
    if (R || (R = 0), !M && M !== 0 && (M = this.length), p >= d.length && (p = d.length), p || (p = 0), M > 0 && M < R && (M = R), M === R || d.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (R < 0 || R >= this.length)
      throw new RangeError("Index out of range");
    if (M < 0)
      throw new RangeError("sourceEnd out of bounds");
    M > this.length && (M = this.length), d.length - p < M - R && (M = d.length - p + R);
    var X = M - R;
    return this === d && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(p, R, M) : Uint8Array.prototype.set.call(
      d,
      this.subarray(R, M),
      p
    ), X;
  }, y.prototype.fill = function(d, p, R, M) {
    if (typeof d == "string") {
      if (typeof p == "string" ? (M = p, p = 0, R = this.length) : typeof R == "string" && (M = R, R = this.length), M !== void 0 && typeof M != "string")
        throw new TypeError("encoding must be a string");
      if (typeof M == "string" && !y.isEncoding(M))
        throw new TypeError("Unknown encoding: " + M);
      if (d.length === 1) {
        var X = d.charCodeAt(0);
        (M === "utf8" && X < 128 || M === "latin1") && (d = X);
      }
    } else
      typeof d == "number" ? d = d & 255 : typeof d == "boolean" && (d = Number(d));
    if (p < 0 || this.length < p || this.length < R)
      throw new RangeError("Out of range index");
    if (R <= p)
      return this;
    p = p >>> 0, R = R === void 0 ? this.length : R >>> 0, d || (d = 0);
    var Y;
    if (typeof d == "number")
      for (Y = p; Y < R; ++Y)
        this[Y] = d;
    else {
      var xe = y.isBuffer(d) ? d : y.from(d, M), Be = xe.length;
      if (Be === 0)
        throw new TypeError('The value "' + d + '" is invalid for argument "value"');
      for (Y = 0; Y < R - p; ++Y)
        this[Y + p] = xe[Y % Be];
    }
    return this;
  };
  var xt = /[^+/0-9A-Za-z-_]/g;
  function _t(x) {
    if (x = x.split("=")[0], x = x.trim().replace(xt, ""), x.length < 2)
      return "";
    for (; x.length % 4 !== 0; )
      x = x + "=";
    return x;
  }
  function Je(x, d) {
    d = d || 1 / 0;
    for (var p, R = x.length, M = null, X = [], Y = 0; Y < R; ++Y) {
      if (p = x.charCodeAt(Y), p > 55295 && p < 57344) {
        if (!M) {
          if (p > 56319) {
            (d -= 3) > -1 && X.push(239, 191, 189);
            continue;
          } else if (Y + 1 === R) {
            (d -= 3) > -1 && X.push(239, 191, 189);
            continue;
          }
          M = p;
          continue;
        }
        if (p < 56320) {
          (d -= 3) > -1 && X.push(239, 191, 189), M = p;
          continue;
        }
        p = (M - 55296 << 10 | p - 56320) + 65536;
      } else
        M && (d -= 3) > -1 && X.push(239, 191, 189);
      if (M = null, p < 128) {
        if ((d -= 1) < 0)
          break;
        X.push(p);
      } else if (p < 2048) {
        if ((d -= 2) < 0)
          break;
        X.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((d -= 3) < 0)
          break;
        X.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((d -= 4) < 0)
          break;
        X.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return X;
  }
  function ot(x) {
    for (var d = [], p = 0; p < x.length; ++p)
      d.push(x.charCodeAt(p) & 255);
    return d;
  }
  function At(x, d) {
    for (var p, R, M, X = [], Y = 0; Y < x.length && !((d -= 2) < 0); ++Y)
      p = x.charCodeAt(Y), R = p >> 8, M = p % 256, X.push(M), X.push(R);
    return X;
  }
  function gt(x) {
    return o.toByteArray(_t(x));
  }
  function st(x, d, p, R) {
    for (var M = 0; M < R && !(M + p >= d.length || M >= x.length); ++M)
      d[M + p] = x[M];
    return M;
  }
  function L(x, d) {
    return x instanceof d || x != null && x.constructor != null && x.constructor.name != null && x.constructor.name === d.name;
  }
  function O(x) {
    return x !== x;
  }
  var q = function() {
    for (var x = "0123456789abcdef", d = new Array(256), p = 0; p < 16; ++p)
      for (var R = p * 16, M = 0; M < 16; ++M)
        d[R + M] = x[p] + x[M];
    return d;
  }();
})(Pu);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(r, o) {
  var n = Pu, l = n.Buffer;
  function b(w, y) {
    for (var D in w)
      y[D] = w[D];
  }
  l.from && l.alloc && l.allocUnsafe && l.allocUnsafeSlow ? r.exports = n : (b(n, o), o.Buffer = v);
  function v(w, y, D) {
    return l(w, y, D);
  }
  v.prototype = Object.create(l.prototype), b(l, v), v.from = function(w, y, D) {
    if (typeof w == "number")
      throw new TypeError("Argument must not be a number");
    return l(w, y, D);
  }, v.alloc = function(w, y, D) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    var k = l(w);
    return y !== void 0 ? typeof D == "string" ? k.fill(y, D) : k.fill(y) : k.fill(0), k;
  }, v.allocUnsafe = function(w) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    return l(w);
  }, v.allocUnsafeSlow = function(w) {
    if (typeof w != "number")
      throw new TypeError("Argument must be a number");
    return n.SlowBuffer(w);
  };
})(io, io.exports);
var Vm = io.exports, Co = Vm.Buffer, qa = Co.isEncoding || function(r) {
  switch (r = "" + r, r && r.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function zm(r) {
  if (!r)
    return "utf8";
  for (var o; ; )
    switch (r) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return r;
      default:
        if (o)
          return;
        r = ("" + r).toLowerCase(), o = true;
    }
}
function Hm(r) {
  var o = zm(r);
  if (typeof o != "string" && (Co.isEncoding === qa || !qa(r)))
    throw new Error("Unknown encoding: " + r);
  return o || r;
}
Iu.StringDecoder = Zr;
function Zr(r) {
  this.encoding = Hm(r);
  var o;
  switch (this.encoding) {
    case "utf16le":
      this.text = Qm, this.end = Jm, o = 4;
      break;
    case "utf8":
      this.fillLast = Xm, o = 4;
      break;
    case "base64":
      this.text = e_, this.end = t_, o = 3;
      break;
    default:
      this.write = r_, this.end = n_;
      return;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Co.allocUnsafe(o);
}
Zr.prototype.write = function(r) {
  if (r.length === 0)
    return "";
  var o, n;
  if (this.lastNeed) {
    if (o = this.fillLast(r), o === void 0)
      return "";
    n = this.lastNeed, this.lastNeed = 0;
  } else
    n = 0;
  return n < r.length ? o ? o + this.text(r, n) : this.text(r, n) : o || "";
};
Zr.prototype.end = qm;
Zr.prototype.text = Zm;
Zr.prototype.fillLast = function(r) {
  if (this.lastNeed <= r.length)
    return r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, r.length), this.lastNeed -= r.length;
};
function Di(r) {
  return r <= 127 ? 0 : r >> 5 === 6 ? 2 : r >> 4 === 14 ? 3 : r >> 3 === 30 ? 4 : r >> 6 === 2 ? -1 : -2;
}
function Km(r, o, n) {
  var l = o.length - 1;
  if (l < n)
    return 0;
  var b = Di(o[l]);
  return b >= 0 ? (b > 0 && (r.lastNeed = b - 1), b) : --l < n || b === -2 ? 0 : (b = Di(o[l]), b >= 0 ? (b > 0 && (r.lastNeed = b - 2), b) : --l < n || b === -2 ? 0 : (b = Di(o[l]), b >= 0 ? (b > 0 && (b === 2 ? b = 0 : r.lastNeed = b - 3), b) : 0));
}
function Ym(r, o, n) {
  if ((o[0] & 192) !== 128)
    return r.lastNeed = 0, "�";
  if (r.lastNeed > 1 && o.length > 1) {
    if ((o[1] & 192) !== 128)
      return r.lastNeed = 1, "�";
    if (r.lastNeed > 2 && o.length > 2 && (o[2] & 192) !== 128)
      return r.lastNeed = 2, "�";
  }
}
function Xm(r) {
  var o = this.lastTotal - this.lastNeed, n = Ym(this, r);
  if (n !== void 0)
    return n;
  if (this.lastNeed <= r.length)
    return r.copy(this.lastChar, o, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  r.copy(this.lastChar, o, 0, r.length), this.lastNeed -= r.length;
}
function Zm(r, o) {
  var n = Km(this, r, o);
  if (!this.lastNeed)
    return r.toString("utf8", o);
  this.lastTotal = n;
  var l = r.length - (n - this.lastNeed);
  return r.copy(this.lastChar, 0, l), r.toString("utf8", o, l);
}
function qm(r) {
  var o = r && r.length ? this.write(r) : "";
  return this.lastNeed ? o + "�" : o;
}
function Qm(r, o) {
  if ((r.length - o) % 2 === 0) {
    var n = r.toString("utf16le", o);
    if (n) {
      var l = n.charCodeAt(n.length - 1);
      if (l >= 55296 && l <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1], n.slice(0, -1);
    }
    return n;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = r[r.length - 1], r.toString("utf16le", o, r.length - 1);
}
function Jm(r) {
  var o = r && r.length ? this.write(r) : "";
  if (this.lastNeed) {
    var n = this.lastTotal - this.lastNeed;
    return o + this.lastChar.toString("utf16le", 0, n);
  }
  return o;
}
function e_(r, o) {
  var n = (r.length - o) % 3;
  return n === 0 ? r.toString("base64", o) : (this.lastNeed = 3 - n, this.lastTotal = 3, n === 1 ? this.lastChar[0] = r[r.length - 1] : (this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1]), r.toString("base64", o, r.length - n));
}
function t_(r) {
  var o = r && r.length ? this.write(r) : "";
  return this.lastNeed ? o + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : o;
}
function r_(r) {
  return r.toString(this.encoding);
}
function n_(r) {
  return r && r.length ? this.write(r) : "";
}
const Qa = dr, { PromisePrototypeThen: i_, SymbolAsyncIterator: Ja, SymbolIterator: es } = tt, { Buffer: o_ } = er, { ERR_INVALID_ARG_TYPE: a_, ERR_STREAM_NULL_VALUES: s_ } = mt.codes;
function u_(r, o, n) {
  let l;
  if (typeof o == "string" || o instanceof o_)
    return new r({
      objectMode: true,
      ...n,
      read() {
        this.push(o), this.push(null);
      }
    });
  let b;
  if (o && o[Ja])
    b = true, l = o[Ja]();
  else if (o && o[es])
    b = false, l = o[es]();
  else
    throw new a_("iterable", ["Iterable"], o);
  const v = new r({
    objectMode: true,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...n
  });
  let w = false;
  v._read = function() {
    w || (w = true, D());
  }, v._destroy = function(k, N) {
    i_(
      y(k),
      () => Qa.nextTick(N, k),
      // nextTick is here in case cb throws
      (ee) => Qa.nextTick(N, ee || k)
    );
  };
  async function y(k) {
    const N = k != null, ee = typeof l.throw == "function";
    if (N && ee) {
      const { value: le, done: Z } = await l.throw(k);
      if (await le, Z)
        return;
    }
    if (typeof l.return == "function") {
      const { value: le } = await l.return();
      await le;
    }
  }
  async function D() {
    for (; ; ) {
      try {
        const { value: k, done: N } = b ? await l.next() : l.next();
        if (N)
          v.push(null);
        else {
          const ee = k && typeof k.then == "function" ? await k : k;
          if (ee === null)
            throw w = false, new s_();
          if (v.push(ee))
            continue;
          w = false;
        }
      } catch (k) {
        v.destroy(k);
      }
      break;
    }
  }
  return v;
}
var Du = u_, ki, ts;
function qn() {
  if (ts)
    return ki;
  ts = 1;
  const r = dr, {
    ArrayPrototypeIndexOf: o,
    NumberIsInteger: n,
    NumberIsNaN: l,
    NumberParseInt: b,
    ObjectDefineProperties: v,
    ObjectKeys: w,
    ObjectSetPrototypeOf: y,
    Promise: D,
    SafeSet: k,
    SymbolAsyncIterator: N,
    Symbol: ee
  } = tt;
  ki = te, te.ReadableState = ne;
  const { EventEmitter: le } = xo, { Stream: Z, prependListener: z } = So, { Buffer: pe } = er, { addAbortSignal: _e } = Zn, de = tr;
  let re = Vt.debuglog("stream", (S) => {
    re = S;
  });
  const Fe = Om, Ne = Ar, { getHighWaterMark: ye, getDefaultHighWaterMark: Ue } = To, {
    aggregateTwoErrors: We,
    codes: {
      ERR_INVALID_ARG_TYPE: Ge,
      ERR_METHOD_NOT_IMPLEMENTED: Se,
      ERR_OUT_OF_RANGE: oe,
      ERR_STREAM_PUSH_AFTER_EOF: ge,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: $e
    }
  } = mt, { validateObject: De } = $n, me = ee("kPaused"), { StringDecoder: ue } = Iu, Pe = Du;
  y(te.prototype, Z.prototype), y(te, Z);
  const Te = () => {
  }, { errorOrDestroy: B } = Ne;
  function ne(S, T, _) {
    typeof _ != "boolean" && (_ = T instanceof $t()), this.objectMode = !!(S && S.objectMode), _ && (this.objectMode = this.objectMode || !!(S && S.readableObjectMode)), this.highWaterMark = S ? ye(this, S, "readableHighWaterMark", _) : Ue(false), this.buffer = new Fe(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[me] = null, this.errorEmitted = false, this.emitClose = !S || S.emitClose !== false, this.autoDestroy = !S || S.autoDestroy !== false, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = S && S.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, S && S.encoding && (this.decoder = new ue(S.encoding), this.encoding = S.encoding);
  }
  function te(S) {
    if (!(this instanceof te))
      return new te(S);
    const T = this instanceof $t();
    this._readableState = new ne(S, this, T), S && (typeof S.read == "function" && (this._read = S.read), typeof S.destroy == "function" && (this._destroy = S.destroy), typeof S.construct == "function" && (this._construct = S.construct), S.signal && !T && _e(S.signal, this)), Z.call(this, S), Ne.construct(this, () => {
      this._readableState.needReadable && ot(this, this._readableState);
    });
  }
  te.prototype.destroy = Ne.destroy, te.prototype._undestroy = Ne.undestroy, te.prototype._destroy = function(S, T) {
    T(S);
  }, te.prototype[le.captureRejectionSymbol] = function(S) {
    this.destroy(S);
  }, te.prototype.push = function(S, T) {
    return be(this, S, T, false);
  }, te.prototype.unshift = function(S, T) {
    return be(this, S, T, true);
  };
  function be(S, T, _, u) {
    re("readableAddChunk", T);
    const f = S._readableState;
    let C;
    if (f.objectMode || (typeof T == "string" ? (_ = _ || f.defaultEncoding, f.encoding !== _ && (u && f.encoding ? T = pe.from(T, _).toString(f.encoding) : (T = pe.from(T, _), _ = ""))) : T instanceof pe ? _ = "" : Z._isUint8Array(T) ? (T = Z._uint8ArrayToBuffer(T), _ = "") : T != null && (C = new Ge("chunk", ["string", "Buffer", "Uint8Array"], T))), C)
      B(S, C);
    else if (T === null)
      f.reading = false, xt(S, f);
    else if (f.objectMode || T && T.length > 0)
      if (u)
        if (f.endEmitted)
          B(S, new $e());
        else {
          if (f.destroyed || f.errored)
            return false;
          Ae(S, f, T, true);
        }
      else if (f.ended)
        B(S, new ge());
      else {
        if (f.destroyed || f.errored)
          return false;
        f.reading = false, f.decoder && !_ ? (T = f.decoder.write(T), f.objectMode || T.length !== 0 ? Ae(S, f, T, false) : ot(S, f)) : Ae(S, f, T, false);
      }
    else
      u || (f.reading = false, ot(S, f));
    return !f.ended && (f.length < f.highWaterMark || f.length === 0);
  }
  function Ae(S, T, _, u) {
    T.flowing && T.length === 0 && !T.sync && S.listenerCount("data") > 0 ? (T.multiAwaitDrain ? T.awaitDrainWriters.clear() : T.awaitDrainWriters = null, T.dataEmitted = true, S.emit("data", _)) : (T.length += T.objectMode ? 1 : _.length, u ? T.buffer.unshift(_) : T.buffer.push(_), T.needReadable && _t(S)), ot(S, T);
  }
  te.prototype.isPaused = function() {
    const S = this._readableState;
    return S[me] === true || S.flowing === false;
  }, te.prototype.setEncoding = function(S) {
    const T = new ue(S);
    this._readableState.decoder = T, this._readableState.encoding = this._readableState.decoder.encoding;
    const _ = this._readableState.buffer;
    let u = "";
    for (const f of _)
      u += T.write(f);
    return _.clear(), u !== "" && _.push(u), this._readableState.length = u.length, this;
  };
  const ct = 1073741824;
  function dt(S) {
    if (S > ct)
      throw new oe("size", "<= 1GiB", S);
    return S--, S |= S >>> 1, S |= S >>> 2, S |= S >>> 4, S |= S >>> 8, S |= S >>> 16, S++, S;
  }
  function it(S, T) {
    return S <= 0 || T.length === 0 && T.ended ? 0 : T.objectMode ? 1 : l(S) ? T.flowing && T.length ? T.buffer.first().length : T.length : S <= T.length ? S : T.ended ? T.length : 0;
  }
  te.prototype.read = function(S) {
    re("read", S), S === void 0 ? S = NaN : n(S) || (S = b(S, 10));
    const T = this._readableState, _ = S;
    if (S > T.highWaterMark && (T.highWaterMark = dt(S)), S !== 0 && (T.emittedReadable = false), S === 0 && T.needReadable && ((T.highWaterMark !== 0 ? T.length >= T.highWaterMark : T.length > 0) || T.ended))
      return re("read: emitReadable", T.length, T.ended), T.length === 0 && T.ended ? M(this) : _t(this), null;
    if (S = it(S, T), S === 0 && T.ended)
      return T.length === 0 && M(this), null;
    let u = T.needReadable;
    if (re("need readable", u), (T.length === 0 || T.length - S < T.highWaterMark) && (u = true, re("length less than watermark", u)), T.ended || T.reading || T.destroyed || T.errored || !T.constructed)
      u = false, re("reading, ended or constructing", u);
    else if (u) {
      re("do read"), T.reading = true, T.sync = true, T.length === 0 && (T.needReadable = true);
      try {
        this._read(T.highWaterMark);
      } catch (C) {
        B(this, C);
      }
      T.sync = false, T.reading || (S = it(_, T));
    }
    let f;
    return S > 0 ? f = R(S, T) : f = null, f === null ? (T.needReadable = T.length <= T.highWaterMark, S = 0) : (T.length -= S, T.multiAwaitDrain ? T.awaitDrainWriters.clear() : T.awaitDrainWriters = null), T.length === 0 && (T.ended || (T.needReadable = true), _ !== S && T.ended && M(this)), f !== null && !T.errorEmitted && !T.closeEmitted && (T.dataEmitted = true, this.emit("data", f)), f;
  };
  function xt(S, T) {
    if (re("onEofChunk"), !T.ended) {
      if (T.decoder) {
        const _ = T.decoder.end();
        _ && _.length && (T.buffer.push(_), T.length += T.objectMode ? 1 : _.length);
      }
      T.ended = true, T.sync ? _t(S) : (T.needReadable = false, T.emittedReadable = true, Je(S));
    }
  }
  function _t(S) {
    const T = S._readableState;
    re("emitReadable", T.needReadable, T.emittedReadable), T.needReadable = false, T.emittedReadable || (re("emitReadable", T.flowing), T.emittedReadable = true, r.nextTick(Je, S));
  }
  function Je(S) {
    const T = S._readableState;
    re("emitReadable_", T.destroyed, T.length, T.ended), !T.destroyed && !T.errored && (T.length || T.ended) && (S.emit("readable"), T.emittedReadable = false), T.needReadable = !T.flowing && !T.ended && T.length <= T.highWaterMark, x(S);
  }
  function ot(S, T) {
    !T.readingMore && T.constructed && (T.readingMore = true, r.nextTick(At, S, T));
  }
  function At(S, T) {
    for (; !T.reading && !T.ended && (T.length < T.highWaterMark || T.flowing && T.length === 0); ) {
      const _ = T.length;
      if (re("maybeReadMore read 0"), S.read(0), _ === T.length)
        break;
    }
    T.readingMore = false;
  }
  te.prototype._read = function(S) {
    throw new Se("_read()");
  }, te.prototype.pipe = function(S, T) {
    const _ = this, u = this._readableState;
    u.pipes.length === 1 && (u.multiAwaitDrain || (u.multiAwaitDrain = true, u.awaitDrainWriters = new k(u.awaitDrainWriters ? [u.awaitDrainWriters] : []))), u.pipes.push(S), re("pipe count=%d opts=%j", u.pipes.length, T);
    const C = (!T || T.end !== false) && S !== r.stdout && S !== r.stderr ? W : ut;
    u.endEmitted ? r.nextTick(C) : _.once("end", C), S.on("unpipe", P);
    function P(bt, rt) {
      re("onunpipe"), bt === _ && rt && rt.hasUnpiped === false && (rt.hasUnpiped = true, ze());
    }
    function W() {
      re("onend"), S.end();
    }
    let K, Re = false;
    function ze() {
      re("cleanup"), S.removeListener("close", ke), S.removeListener("finish", mr), K && S.removeListener("drain", K), S.removeListener("error", Oe), S.removeListener("unpipe", P), _.removeListener("end", W), _.removeListener("end", ut), _.removeListener("data", Ye), Re = true, K && u.awaitDrainWriters && (!S._writableState || S._writableState.needDrain) && K();
    }
    function Ve() {
      Re || (u.pipes.length === 1 && u.pipes[0] === S ? (re("false write response, pause", 0), u.awaitDrainWriters = S, u.multiAwaitDrain = false) : u.pipes.length > 1 && u.pipes.includes(S) && (re("false write response, pause", u.awaitDrainWriters.size), u.awaitDrainWriters.add(S)), _.pause()), K || (K = gt(_, S), S.on("drain", K));
    }
    _.on("data", Ye);
    function Ye(bt) {
      re("ondata");
      const rt = S.write(bt);
      re("dest.write", rt), rt === false && Ve();
    }
    function Oe(bt) {
      if (re("onerror", bt), ut(), S.removeListener("error", Oe), S.listenerCount("error") === 0) {
        const rt = S._writableState || S._readableState;
        rt && !rt.errorEmitted ? B(S, bt) : S.emit("error", bt);
      }
    }
    z(S, "error", Oe);
    function ke() {
      S.removeListener("finish", mr), ut();
    }
    S.once("close", ke);
    function mr() {
      re("onfinish"), S.removeListener("close", ke), ut();
    }
    S.once("finish", mr);
    function ut() {
      re("unpipe"), _.unpipe(S);
    }
    return S.emit("pipe", _), S.writableNeedDrain === true ? u.flowing && Ve() : u.flowing || (re("pipe resume"), _.resume()), S;
  };
  function gt(S, T) {
    return function() {
      const u = S._readableState;
      u.awaitDrainWriters === T ? (re("pipeOnDrain", 1), u.awaitDrainWriters = null) : u.multiAwaitDrain && (re("pipeOnDrain", u.awaitDrainWriters.size), u.awaitDrainWriters.delete(T)), (!u.awaitDrainWriters || u.awaitDrainWriters.size === 0) && S.listenerCount("data") && S.resume();
    };
  }
  te.prototype.unpipe = function(S) {
    const T = this._readableState, _ = {
      hasUnpiped: false
    };
    if (T.pipes.length === 0)
      return this;
    if (!S) {
      const f = T.pipes;
      T.pipes = [], this.pause();
      for (let C = 0; C < f.length; C++)
        f[C].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    const u = o(T.pipes, S);
    return u === -1 ? this : (T.pipes.splice(u, 1), T.pipes.length === 0 && this.pause(), S.emit("unpipe", this, _), this);
  }, te.prototype.on = function(S, T) {
    const _ = Z.prototype.on.call(this, S, T), u = this._readableState;
    return S === "data" ? (u.readableListening = this.listenerCount("readable") > 0, u.flowing !== false && this.resume()) : S === "readable" && !u.endEmitted && !u.readableListening && (u.readableListening = u.needReadable = true, u.flowing = false, u.emittedReadable = false, re("on readable", u.length, u.reading), u.length ? _t(this) : u.reading || r.nextTick(L, this)), _;
  }, te.prototype.addListener = te.prototype.on, te.prototype.removeListener = function(S, T) {
    const _ = Z.prototype.removeListener.call(this, S, T);
    return S === "readable" && r.nextTick(st, this), _;
  }, te.prototype.off = te.prototype.removeListener, te.prototype.removeAllListeners = function(S) {
    const T = Z.prototype.removeAllListeners.apply(this, arguments);
    return (S === "readable" || S === void 0) && r.nextTick(st, this), T;
  };
  function st(S) {
    const T = S._readableState;
    T.readableListening = S.listenerCount("readable") > 0, T.resumeScheduled && T[me] === false ? T.flowing = true : S.listenerCount("data") > 0 ? S.resume() : T.readableListening || (T.flowing = null);
  }
  function L(S) {
    re("readable nexttick read 0"), S.read(0);
  }
  te.prototype.resume = function() {
    const S = this._readableState;
    return S.flowing || (re("resume"), S.flowing = !S.readableListening, O(this, S)), S[me] = false, this;
  };
  function O(S, T) {
    T.resumeScheduled || (T.resumeScheduled = true, r.nextTick(q, S, T));
  }
  function q(S, T) {
    re("resume", T.reading), T.reading || S.read(0), T.resumeScheduled = false, S.emit("resume"), x(S), T.flowing && !T.reading && S.read(0);
  }
  te.prototype.pause = function() {
    return re("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (re("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[me] = true, this;
  };
  function x(S) {
    const T = S._readableState;
    for (re("flow", T.flowing); T.flowing && S.read() !== null; )
      ;
  }
  te.prototype.wrap = function(S) {
    let T = false;
    S.on("data", (u) => {
      !this.push(u) && S.pause && (T = true, S.pause());
    }), S.on("end", () => {
      this.push(null);
    }), S.on("error", (u) => {
      B(this, u);
    }), S.on("close", () => {
      this.destroy();
    }), S.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      T && S.resume && (T = false, S.resume());
    };
    const _ = w(S);
    for (let u = 1; u < _.length; u++) {
      const f = _[u];
      this[f] === void 0 && typeof S[f] == "function" && (this[f] = S[f].bind(S));
    }
    return this;
  }, te.prototype[N] = function() {
    return d(this);
  }, te.prototype.iterator = function(S) {
    return S !== void 0 && De(S, "options"), d(this, S);
  };
  function d(S, T) {
    typeof S.read != "function" && (S = te.wrap(S, {
      objectMode: true
    }));
    const _ = p(S, T);
    return _.stream = S, _;
  }
  async function* p(S, T) {
    let _ = Te;
    function u(P) {
      this === S ? (_(), _ = Te) : _ = P;
    }
    S.on("readable", u);
    let f;
    const C = de(
      S,
      {
        writable: false
      },
      (P) => {
        f = P ? We(f, P) : null, _(), _ = Te;
      }
    );
    try {
      for (; ; ) {
        const P = S.destroyed ? null : S.read();
        if (P !== null)
          yield P;
        else {
          if (f)
            throw f;
          if (f === null)
            return;
          await new D(u);
        }
      }
    } catch (P) {
      throw f = We(f, P), f;
    } finally {
      (f || (T == null ? void 0 : T.destroyOnReturn) !== false) && (f === void 0 || S._readableState.autoDestroy) ? Ne.destroyer(S, null) : (S.off("readable", u), C());
    }
  }
  v(te.prototype, {
    readable: {
      __proto__: null,
      get() {
        const S = this._readableState;
        return !!S && S.readable !== false && !S.destroyed && !S.errorEmitted && !S.endEmitted;
      },
      set(S) {
        this._readableState && (this._readableState.readable = !!S);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return !!(this._readableState.readable !== false && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(S) {
        this._readableState && (this._readableState.flowing = S);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.objectMode : false;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.destroyed : false;
      },
      set(S) {
        this._readableState && (this._readableState.destroyed = S);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._readableState ? this._readableState.endEmitted : false;
      }
    }
  }), v(ne.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[me] !== false;
      },
      set(S) {
        this[me] = !!S;
      }
    }
  }), te._fromList = R;
  function R(S, T) {
    if (T.length === 0)
      return null;
    let _;
    return T.objectMode ? _ = T.buffer.shift() : !S || S >= T.length ? (T.decoder ? _ = T.buffer.join("") : T.buffer.length === 1 ? _ = T.buffer.first() : _ = T.buffer.concat(T.length), T.buffer.clear()) : _ = T.buffer.consume(S, T.decoder), _;
  }
  function M(S) {
    const T = S._readableState;
    re("endReadable", T.endEmitted), T.endEmitted || (T.ended = true, r.nextTick(X, T, S));
  }
  function X(S, T) {
    if (re("endReadableNT", S.endEmitted, S.length), !S.errored && !S.closeEmitted && !S.endEmitted && S.length === 0) {
      if (S.endEmitted = true, T.emit("end"), T.writable && T.allowHalfOpen === false)
        r.nextTick(Y, T);
      else if (S.autoDestroy) {
        const _ = T._writableState;
        (!_ || _.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (_.finished || _.writable === false)) && T.destroy();
      }
    }
  }
  function Y(S) {
    S.writable && !S.writableEnded && !S.destroyed && S.end();
  }
  te.from = function(S, T) {
    return Pe(te, S, T);
  };
  let xe;
  function Be() {
    return xe === void 0 && (xe = {}), xe;
  }
  return te.fromWeb = function(S, T) {
    return Be().newStreamReadableFromReadableStream(S, T);
  }, te.toWeb = function(S, T) {
    return Be().newReadableStreamFromStreamReadable(S, T);
  }, te.wrap = function(S, T) {
    var _, u;
    return new te({
      objectMode: (_ = (u = S.readableObjectMode) !== null && u !== void 0 ? u : S.objectMode) !== null && _ !== void 0 ? _ : true,
      ...T,
      destroy(f, C) {
        Ne.destroyer(S, f), C(f);
      }
    }).wrap(S);
  }, ki;
}
var Li, rs;
function ku() {
  if (rs)
    return Li;
  rs = 1;
  const r = dr, {
    ArrayPrototypeSlice: o,
    Error: n,
    FunctionPrototypeSymbolHasInstance: l,
    ObjectDefineProperty: b,
    ObjectDefineProperties: v,
    ObjectSetPrototypeOf: w,
    StringPrototypeToLowerCase: y,
    Symbol: D,
    SymbolHasInstance: k
  } = tt;
  Li = ue, ue.WritableState = De;
  const { EventEmitter: N } = xo, ee = So.Stream, { Buffer: le } = er, Z = Ar, { addAbortSignal: z } = Zn, { getHighWaterMark: pe, getDefaultHighWaterMark: _e } = To, {
    ERR_INVALID_ARG_TYPE: de,
    ERR_METHOD_NOT_IMPLEMENTED: re,
    ERR_MULTIPLE_CALLBACK: Fe,
    ERR_STREAM_CANNOT_PIPE: Ne,
    ERR_STREAM_DESTROYED: ye,
    ERR_STREAM_ALREADY_FINISHED: Ue,
    ERR_STREAM_NULL_VALUES: We,
    ERR_STREAM_WRITE_AFTER_END: Ge,
    ERR_UNKNOWN_ENCODING: Se
  } = mt.codes, { errorOrDestroy: oe } = Z;
  w(ue.prototype, ee.prototype), w(ue, ee);
  function ge() {
  }
  const $e = D("kOnFinished");
  function De(L, O, q) {
    typeof q != "boolean" && (q = O instanceof $t()), this.objectMode = !!(L && L.objectMode), q && (this.objectMode = this.objectMode || !!(L && L.writableObjectMode)), this.highWaterMark = L ? pe(this, L, "writableHighWaterMark", q) : _e(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    const x = !!(L && L.decodeStrings === false);
    this.decodeStrings = !x, this.defaultEncoding = L && L.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = te.bind(void 0, O), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, me(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !L || L.emitClose !== false, this.autoDestroy = !L || L.autoDestroy !== false, this.errored = null, this.closed = false, this.closeEmitted = false, this[$e] = [];
  }
  function me(L) {
    L.buffered = [], L.bufferedIndex = 0, L.allBuffers = true, L.allNoop = true;
  }
  De.prototype.getBuffer = function() {
    return o(this.buffered, this.bufferedIndex);
  }, b(De.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function ue(L) {
    const O = this instanceof $t();
    if (!O && !l(ue, this))
      return new ue(L);
    this._writableState = new De(L, this, O), L && (typeof L.write == "function" && (this._write = L.write), typeof L.writev == "function" && (this._writev = L.writev), typeof L.destroy == "function" && (this._destroy = L.destroy), typeof L.final == "function" && (this._final = L.final), typeof L.construct == "function" && (this._construct = L.construct), L.signal && z(L.signal, this)), ee.call(this, L), Z.construct(this, () => {
      const q = this._writableState;
      q.writing || dt(this, q), Je(this, q);
    });
  }
  b(ue, k, {
    __proto__: null,
    value: function(L) {
      return l(this, L) ? true : this !== ue ? false : L && L._writableState instanceof De;
    }
  }), ue.prototype.pipe = function() {
    oe(this, new Ne());
  };
  function Pe(L, O, q, x) {
    const d = L._writableState;
    if (typeof q == "function")
      x = q, q = d.defaultEncoding;
    else {
      if (!q)
        q = d.defaultEncoding;
      else if (q !== "buffer" && !le.isEncoding(q))
        throw new Se(q);
      typeof x != "function" && (x = ge);
    }
    if (O === null)
      throw new We();
    if (!d.objectMode)
      if (typeof O == "string")
        d.decodeStrings !== false && (O = le.from(O, q), q = "buffer");
      else if (O instanceof le)
        q = "buffer";
      else if (ee._isUint8Array(O))
        O = ee._uint8ArrayToBuffer(O), q = "buffer";
      else
        throw new de("chunk", ["string", "Buffer", "Uint8Array"], O);
    let p;
    return d.ending ? p = new Ge() : d.destroyed && (p = new ye("write")), p ? (r.nextTick(x, p), oe(L, p, true), p) : (d.pendingcb++, Te(L, d, O, q, x));
  }
  ue.prototype.write = function(L, O, q) {
    return Pe(this, L, O, q) === true;
  }, ue.prototype.cork = function() {
    this._writableState.corked++;
  }, ue.prototype.uncork = function() {
    const L = this._writableState;
    L.corked && (L.corked--, L.writing || dt(this, L));
  }, ue.prototype.setDefaultEncoding = function(O) {
    if (typeof O == "string" && (O = y(O)), !le.isEncoding(O))
      throw new Se(O);
    return this._writableState.defaultEncoding = O, this;
  };
  function Te(L, O, q, x, d) {
    const p = O.objectMode ? 1 : q.length;
    O.length += p;
    const R = O.length < O.highWaterMark;
    return R || (O.needDrain = true), O.writing || O.corked || O.errored || !O.constructed ? (O.buffered.push({
      chunk: q,
      encoding: x,
      callback: d
    }), O.allBuffers && x !== "buffer" && (O.allBuffers = false), O.allNoop && d !== ge && (O.allNoop = false)) : (O.writelen = p, O.writecb = d, O.writing = true, O.sync = true, L._write(q, x, O.onwrite), O.sync = false), R && !O.errored && !O.destroyed;
  }
  function B(L, O, q, x, d, p, R) {
    O.writelen = x, O.writecb = R, O.writing = true, O.sync = true, O.destroyed ? O.onwrite(new ye("write")) : q ? L._writev(d, O.onwrite) : L._write(d, p, O.onwrite), O.sync = false;
  }
  function ne(L, O, q, x) {
    --O.pendingcb, x(q), ct(O), oe(L, q);
  }
  function te(L, O) {
    const q = L._writableState, x = q.sync, d = q.writecb;
    if (typeof d != "function") {
      oe(L, new Fe());
      return;
    }
    q.writing = false, q.writecb = null, q.length -= q.writelen, q.writelen = 0, O ? (q.errored || (q.errored = O), L._readableState && !L._readableState.errored && (L._readableState.errored = O), x ? r.nextTick(ne, L, q, O, d) : ne(L, q, O, d)) : (q.buffered.length > q.bufferedIndex && dt(L, q), x ? q.afterWriteTickInfo !== null && q.afterWriteTickInfo.cb === d ? q.afterWriteTickInfo.count++ : (q.afterWriteTickInfo = {
      count: 1,
      cb: d,
      stream: L,
      state: q
    }, r.nextTick(be, q.afterWriteTickInfo)) : Ae(L, q, 1, d));
  }
  function be({ stream: L, state: O, count: q, cb: x }) {
    return O.afterWriteTickInfo = null, Ae(L, O, q, x);
  }
  function Ae(L, O, q, x) {
    for (!O.ending && !L.destroyed && O.length === 0 && O.needDrain && (O.needDrain = false, L.emit("drain")); q-- > 0; )
      O.pendingcb--, x();
    O.destroyed && ct(O), Je(L, O);
  }
  function ct(L) {
    if (L.writing)
      return;
    for (let d = L.bufferedIndex; d < L.buffered.length; ++d) {
      var O;
      const { chunk: p, callback: R } = L.buffered[d], M = L.objectMode ? 1 : p.length;
      L.length -= M, R(
        (O = L.errored) !== null && O !== void 0 ? O : new ye("write")
      );
    }
    const q = L[$e].splice(0);
    for (let d = 0; d < q.length; d++) {
      var x;
      q[d](
        (x = L.errored) !== null && x !== void 0 ? x : new ye("end")
      );
    }
    me(L);
  }
  function dt(L, O) {
    if (O.corked || O.bufferProcessing || O.destroyed || !O.constructed)
      return;
    const { buffered: q, bufferedIndex: x, objectMode: d } = O, p = q.length - x;
    if (!p)
      return;
    let R = x;
    if (O.bufferProcessing = true, p > 1 && L._writev) {
      O.pendingcb -= p - 1;
      const M = O.allNoop ? ge : (Y) => {
        for (let xe = R; xe < q.length; ++xe)
          q[xe].callback(Y);
      }, X = O.allNoop && R === 0 ? q : o(q, R);
      X.allBuffers = O.allBuffers, B(L, O, true, O.length, X, "", M), me(O);
    } else {
      do {
        const { chunk: M, encoding: X, callback: Y } = q[R];
        q[R++] = null;
        const xe = d ? 1 : M.length;
        B(L, O, false, xe, M, X, Y);
      } while (R < q.length && !O.writing);
      R === q.length ? me(O) : R > 256 ? (q.splice(0, R), O.bufferedIndex = 0) : O.bufferedIndex = R;
    }
    O.bufferProcessing = false;
  }
  ue.prototype._write = function(L, O, q) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: L,
            encoding: O
          }
        ],
        q
      );
    else
      throw new re("_write()");
  }, ue.prototype._writev = null, ue.prototype.end = function(L, O, q) {
    const x = this._writableState;
    typeof L == "function" ? (q = L, L = null, O = null) : typeof O == "function" && (q = O, O = null);
    let d;
    if (L != null) {
      const p = Pe(this, L, O);
      p instanceof n && (d = p);
    }
    return x.corked && (x.corked = 1, this.uncork()), d || (!x.errored && !x.ending ? (x.ending = true, Je(this, x, true), x.ended = true) : x.finished ? d = new Ue("end") : x.destroyed && (d = new ye("end"))), typeof q == "function" && (d || x.finished ? r.nextTick(q, d) : x[$e].push(q)), this;
  };
  function it(L) {
    return L.ending && !L.destroyed && L.constructed && L.length === 0 && !L.errored && L.buffered.length === 0 && !L.finished && !L.writing && !L.errorEmitted && !L.closeEmitted;
  }
  function xt(L, O) {
    let q = false;
    function x(d) {
      if (q) {
        oe(L, d ?? Fe());
        return;
      }
      if (q = true, O.pendingcb--, d) {
        const p = O[$e].splice(0);
        for (let R = 0; R < p.length; R++)
          p[R](d);
        oe(L, d, O.sync);
      } else
        it(O) && (O.prefinished = true, L.emit("prefinish"), O.pendingcb++, r.nextTick(ot, L, O));
    }
    O.sync = true, O.pendingcb++;
    try {
      L._final(x);
    } catch (d) {
      x(d);
    }
    O.sync = false;
  }
  function _t(L, O) {
    !O.prefinished && !O.finalCalled && (typeof L._final == "function" && !O.destroyed ? (O.finalCalled = true, xt(L, O)) : (O.prefinished = true, L.emit("prefinish")));
  }
  function Je(L, O, q) {
    it(O) && (_t(L, O), O.pendingcb === 0 && (q ? (O.pendingcb++, r.nextTick(
      (x, d) => {
        it(d) ? ot(x, d) : d.pendingcb--;
      },
      L,
      O
    )) : it(O) && (O.pendingcb++, ot(L, O))));
  }
  function ot(L, O) {
    O.pendingcb--, O.finished = true;
    const q = O[$e].splice(0);
    for (let x = 0; x < q.length; x++)
      q[x]();
    if (L.emit("finish"), O.autoDestroy) {
      const x = L._readableState;
      (!x || x.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (x.endEmitted || x.readable === false)) && L.destroy();
    }
  }
  v(ue.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : false;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : false;
      },
      set(L) {
        this._writableState && (this._writableState.destroyed = L);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const L = this._writableState;
        return !!L && L.writable !== false && !L.destroyed && !L.errored && !L.ending && !L.ended;
      },
      set(L) {
        this._writableState && (this._writableState.writable = !!L);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : false;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : false;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : false;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const L = this._writableState;
        return L ? !L.destroyed && !L.ending && L.needDrain : false;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: false,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: false,
      get: function() {
        return !!(this._writableState.writable !== false && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const At = Z.destroy;
  ue.prototype.destroy = function(L, O) {
    const q = this._writableState;
    return !q.destroyed && (q.bufferedIndex < q.buffered.length || q[$e].length) && r.nextTick(ct, q), At.call(this, L, O), this;
  }, ue.prototype._undestroy = Z.undestroy, ue.prototype._destroy = function(L, O) {
    O(L);
  }, ue.prototype[N.captureRejectionSymbol] = function(L) {
    this.destroy(L);
  };
  let gt;
  function st() {
    return gt === void 0 && (gt = {}), gt;
  }
  return ue.fromWeb = function(L, O) {
    return st().newStreamWritableFromWritableStream(L, O);
  }, ue.toWeb = function(L) {
    return st().newWritableStreamFromStreamWritable(L);
  }, Li;
}
var Mi, ns;
function l_() {
  if (ns)
    return Mi;
  ns = 1;
  const r = dr, o = er, {
    isReadable: n,
    isWritable: l,
    isIterable: b,
    isNodeStream: v,
    isReadableNodeStream: w,
    isWritableNodeStream: y,
    isDuplexNodeStream: D
  } = Ht, k = tr, {
    AbortError: N,
    codes: { ERR_INVALID_ARG_TYPE: ee, ERR_INVALID_RETURN_VALUE: le }
  } = mt, { destroyer: Z } = Ar, z = $t(), pe = qn(), { createDeferredPromise: _e } = Vt, de = Du, re = globalThis.Blob || o.Blob, Fe = typeof re < "u" ? function(oe) {
    return oe instanceof re;
  } : function(oe) {
    return false;
  }, Ne = globalThis.AbortController || _o().AbortController, { FunctionPrototypeCall: ye } = tt;
  class Ue extends z {
    constructor(oe) {
      super(oe), (oe == null ? void 0 : oe.readable) === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), (oe == null ? void 0 : oe.writable) === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
    }
  }
  Mi = function Se(oe, ge) {
    if (D(oe))
      return oe;
    if (w(oe))
      return Ge({
        readable: oe
      });
    if (y(oe))
      return Ge({
        writable: oe
      });
    if (v(oe))
      return Ge({
        writable: false,
        readable: false
      });
    if (typeof oe == "function") {
      const { value: De, write: me, final: ue, destroy: Pe } = We(oe);
      if (b(De))
        return de(Ue, De, {
          // TODO (ronag): highWaterMark?
          objectMode: true,
          write: me,
          final: ue,
          destroy: Pe
        });
      const Te = De == null ? void 0 : De.then;
      if (typeof Te == "function") {
        let B;
        const ne = ye(
          Te,
          De,
          (te) => {
            if (te != null)
              throw new le("nully", "body", te);
          },
          (te) => {
            Z(B, te);
          }
        );
        return B = new Ue({
          // TODO (ronag): highWaterMark?
          objectMode: true,
          readable: false,
          write: me,
          final(te) {
            ue(async () => {
              try {
                await ne, r.nextTick(te, null);
              } catch (be) {
                r.nextTick(te, be);
              }
            });
          },
          destroy: Pe
        });
      }
      throw new le("Iterable, AsyncIterable or AsyncFunction", ge, De);
    }
    if (Fe(oe))
      return Se(oe.arrayBuffer());
    if (b(oe))
      return de(Ue, oe, {
        // TODO (ronag): highWaterMark?
        objectMode: true,
        writable: false
      });
    if (typeof (oe == null ? void 0 : oe.writable) == "object" || typeof (oe == null ? void 0 : oe.readable) == "object") {
      const De = oe != null && oe.readable ? w(oe == null ? void 0 : oe.readable) ? oe == null ? void 0 : oe.readable : Se(oe.readable) : void 0, me = oe != null && oe.writable ? y(oe == null ? void 0 : oe.writable) ? oe == null ? void 0 : oe.writable : Se(oe.writable) : void 0;
      return Ge({
        readable: De,
        writable: me
      });
    }
    const $e = oe == null ? void 0 : oe.then;
    if (typeof $e == "function") {
      let De;
      return ye(
        $e,
        oe,
        (me) => {
          me != null && De.push(me), De.push(null);
        },
        (me) => {
          Z(De, me);
        }
      ), De = new Ue({
        objectMode: true,
        writable: false,
        read() {
        }
      });
    }
    throw new ee(
      ge,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      oe
    );
  };
  function We(Se) {
    let { promise: oe, resolve: ge } = _e();
    const $e = new Ne(), De = $e.signal;
    return {
      value: Se(
        async function* () {
          for (; ; ) {
            const ue = oe;
            oe = null;
            const { chunk: Pe, done: Te, cb: B } = await ue;
            if (r.nextTick(B), Te)
              return;
            if (De.aborted)
              throw new N(void 0, {
                cause: De.reason
              });
            ({ promise: oe, resolve: ge } = _e()), yield Pe;
          }
        }(),
        {
          signal: De
        }
      ),
      write(ue, Pe, Te) {
        const B = ge;
        ge = null, B({
          chunk: ue,
          done: false,
          cb: Te
        });
      },
      final(ue) {
        const Pe = ge;
        ge = null, Pe({
          done: true,
          cb: ue
        });
      },
      destroy(ue, Pe) {
        $e.abort(), Pe(ue);
      }
    };
  }
  function Ge(Se) {
    const oe = Se.readable && typeof Se.readable.read != "function" ? pe.wrap(Se.readable) : Se.readable, ge = Se.writable;
    let $e = !!n(oe), De = !!l(ge), me, ue, Pe, Te, B;
    function ne(te) {
      const be = Te;
      Te = null, be ? be(te) : te && B.destroy(te);
    }
    return B = new Ue({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(oe != null && oe.readableObjectMode),
      writableObjectMode: !!(ge != null && ge.writableObjectMode),
      readable: $e,
      writable: De
    }), De && (k(ge, (te) => {
      De = false, te && Z(oe, te), ne(te);
    }), B._write = function(te, be, Ae) {
      ge.write(te, be) ? Ae() : me = Ae;
    }, B._final = function(te) {
      ge.end(), ue = te;
    }, ge.on("drain", function() {
      if (me) {
        const te = me;
        me = null, te();
      }
    }), ge.on("finish", function() {
      if (ue) {
        const te = ue;
        ue = null, te();
      }
    })), $e && (k(oe, (te) => {
      $e = false, te && Z(oe, te), ne(te);
    }), oe.on("readable", function() {
      if (Pe) {
        const te = Pe;
        Pe = null, te();
      }
    }), oe.on("end", function() {
      B.push(null);
    }), B._read = function() {
      for (; ; ) {
        const te = oe.read();
        if (te === null) {
          Pe = B._read;
          return;
        }
        if (!B.push(te))
          return;
      }
    }), B._destroy = function(te, be) {
      !te && Te !== null && (te = new N()), Pe = null, me = null, ue = null, Te === null ? be(te) : (Te = be, Z(ge, te), Z(oe, te));
    }, B;
  }
  return Mi;
}
var Bi, is;
function $t() {
  if (is)
    return Bi;
  is = 1;
  const {
    ObjectDefineProperties: r,
    ObjectGetOwnPropertyDescriptor: o,
    ObjectKeys: n,
    ObjectSetPrototypeOf: l
  } = tt;
  Bi = w;
  const b = qn(), v = ku();
  l(w.prototype, b.prototype), l(w, b);
  {
    const N = n(v.prototype);
    for (let ee = 0; ee < N.length; ee++) {
      const le = N[ee];
      w.prototype[le] || (w.prototype[le] = v.prototype[le]);
    }
  }
  function w(N) {
    if (!(this instanceof w))
      return new w(N);
    b.call(this, N), v.call(this, N), N ? (this.allowHalfOpen = N.allowHalfOpen !== false, N.readable === false && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), N.writable === false && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
  }
  r(w.prototype, {
    writable: {
      __proto__: null,
      ...o(v.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...o(v.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...o(v.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...o(v.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...o(v.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...o(v.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...o(v.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...o(v.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...o(v.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(N) {
        this._readableState && this._writableState && (this._readableState.destroyed = N, this._writableState.destroyed = N);
      }
    }
  });
  let y;
  function D() {
    return y === void 0 && (y = {}), y;
  }
  w.fromWeb = function(N, ee) {
    return D().newStreamDuplexFromReadableWritablePair(N, ee);
  }, w.toWeb = function(N) {
    return D().newReadableWritablePairFromDuplex(N);
  };
  let k;
  return w.from = function(N) {
    return k || (k = l_()), k(N, "body");
  }, Bi;
}
const { ObjectSetPrototypeOf: Lu, Symbol: f_ } = tt;
var Mu = Gt;
const { ERR_METHOD_NOT_IMPLEMENTED: c_ } = mt.codes, Ro = $t(), { getHighWaterMark: d_ } = To;
Lu(Gt.prototype, Ro.prototype);
Lu(Gt, Ro);
const Gr = f_("kCallback");
function Gt(r) {
  if (!(this instanceof Gt))
    return new Gt(r);
  const o = r ? d_(this, r, "readableHighWaterMark", true) : null;
  o === 0 && (r = {
    ...r,
    highWaterMark: null,
    readableHighWaterMark: o,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: r.writableHighWaterMark || 0
  }), Ro.call(this, r), this._readableState.sync = false, this[Gr] = null, r && (typeof r.transform == "function" && (this._transform = r.transform), typeof r.flush == "function" && (this._flush = r.flush)), this.on("prefinish", h_);
}
function oo(r) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((o, n) => {
    if (o) {
      r ? r(o) : this.destroy(o);
      return;
    }
    n != null && this.push(n), this.push(null), r && r();
  }) : (this.push(null), r && r());
}
function h_() {
  this._final !== oo && oo.call(this);
}
Gt.prototype._final = oo;
Gt.prototype._transform = function(r, o, n) {
  throw new c_("_transform()");
};
Gt.prototype._write = function(r, o, n) {
  const l = this._readableState, b = this._writableState, v = l.length;
  this._transform(r, o, (w, y) => {
    if (w) {
      n(w);
      return;
    }
    y != null && this.push(y), b.ended || // Backwards compat.
    v === l.length || // Backwards compat.
    l.length < l.highWaterMark ? n() : this[Gr] = n;
  });
};
Gt.prototype._read = function() {
  if (this[Gr]) {
    const r = this[Gr];
    this[Gr] = null, r();
  }
};
const { ObjectSetPrototypeOf: Bu } = tt;
var Nu = Rr;
const Fo = Mu;
Bu(Rr.prototype, Fo.prototype);
Bu(Rr, Fo);
function Rr(r) {
  if (!(this instanceof Rr))
    return new Rr(r);
  Fo.call(this, r);
}
Rr.prototype._transform = function(r, o, n) {
  n(null, r);
};
const $r = dr, { ArrayIsArray: p_, Promise: m_, SymbolAsyncIterator: __ } = tt, Bn = tr, { once: y_ } = Vt, g_ = Ar, os = $t(), {
  aggregateTwoErrors: b_,
  codes: {
    ERR_INVALID_ARG_TYPE: ao,
    ERR_INVALID_RETURN_VALUE: Ni,
    ERR_MISSING_ARGS: w_,
    ERR_STREAM_DESTROYED: v_,
    ERR_STREAM_PREMATURE_CLOSE: E_
  },
  AbortError: x_
} = mt, { validateFunction: S_, validateAbortSignal: T_ } = $n, {
  isIterable: ar,
  isReadable: Oi,
  isReadableNodeStream: Dn,
  isNodeStream: as,
  isTransformStream: Er,
  isWebStream: C_,
  isReadableStream: ji,
  isReadableEnded: R_
} = Ht, F_ = globalThis.AbortController || _o().AbortController;
let Ui, Wi;
function ss(r, o, n) {
  let l = false;
  r.on("close", () => {
    l = true;
  });
  const b = Bn(
    r,
    {
      readable: o,
      writable: n
    },
    (v) => {
      l = !v;
    }
  );
  return {
    destroy: (v) => {
      l || (l = true, g_.destroyer(r, v || new v_("pipe")));
    },
    cleanup: b
  };
}
function A_(r) {
  return S_(r[r.length - 1], "streams[stream.length - 1]"), r.pop();
}
function $i(r) {
  if (ar(r))
    return r;
  if (Dn(r))
    return I_(r);
  throw new ao("val", ["Readable", "Iterable", "AsyncIterable"], r);
}
async function* I_(r) {
  Wi || (Wi = qn()), yield* Wi.prototype[__].call(r);
}
async function Rn(r, o, n, { end: l }) {
  let b, v = null;
  const w = (k) => {
    if (k && (b = k), v) {
      const N = v;
      v = null, N();
    }
  }, y = () => new m_((k, N) => {
    b ? N(b) : v = () => {
      b ? N(b) : k();
    };
  });
  o.on("drain", w);
  const D = Bn(
    o,
    {
      readable: false
    },
    w
  );
  try {
    o.writableNeedDrain && await y();
    for await (const k of r)
      o.write(k) || await y();
    l && o.end(), await y(), n();
  } catch (k) {
    n(b !== k ? b_(b, k) : k);
  } finally {
    D(), o.off("drain", w);
  }
}
async function Gi(r, o, n, { end: l }) {
  Er(o) && (o = o.writable);
  const b = o.getWriter();
  try {
    for await (const v of r)
      await b.ready, b.write(v).catch(() => {
      });
    await b.ready, l && await b.close(), n();
  } catch (v) {
    try {
      await b.abort(v), n(v);
    } catch (w) {
      n(w);
    }
  }
}
function P_(...r) {
  return Ou(r, y_(A_(r)));
}
function Ou(r, o, n) {
  if (r.length === 1 && p_(r[0]) && (r = r[0]), r.length < 2)
    throw new w_("streams");
  const l = new F_(), b = l.signal, v = n == null ? void 0 : n.signal, w = [];
  T_(v, "options.signal");
  function y() {
    Z(new x_());
  }
  v == null ? void 0 : v.addEventListener("abort", y);
  let D, k;
  const N = [];
  let ee = 0;
  function le(de) {
    Z(de, --ee === 0);
  }
  function Z(de, re) {
    if (de && (!D || D.code === "ERR_STREAM_PREMATURE_CLOSE") && (D = de), !(!D && !re)) {
      for (; N.length; )
        N.shift()(D);
      v == null ? void 0 : v.removeEventListener("abort", y), l.abort(), re && (D || w.forEach((Fe) => Fe()), $r.nextTick(o, D, k));
    }
  }
  let z;
  for (let de = 0; de < r.length; de++) {
    const re = r[de], Fe = de < r.length - 1, Ne = de > 0, ye = Fe || (n == null ? void 0 : n.end) !== false, Ue = de === r.length - 1;
    if (as(re)) {
      let We = function(Ge) {
        Ge && Ge.name !== "AbortError" && Ge.code !== "ERR_STREAM_PREMATURE_CLOSE" && le(Ge);
      };
      if (ye) {
        const { destroy: Ge, cleanup: Se } = ss(re, Fe, Ne);
        N.push(Ge), Oi(re) && Ue && w.push(Se);
      }
      re.on("error", We), Oi(re) && Ue && w.push(() => {
        re.removeListener("error", We);
      });
    }
    if (de === 0)
      if (typeof re == "function") {
        if (z = re({
          signal: b
        }), !ar(z))
          throw new Ni("Iterable, AsyncIterable or Stream", "source", z);
      } else
        ar(re) || Dn(re) || Er(re) ? z = re : z = os.from(re);
    else if (typeof re == "function") {
      if (Er(z)) {
        var pe;
        z = $i((pe = z) === null || pe === void 0 ? void 0 : pe.readable);
      } else
        z = $i(z);
      if (z = re(z, {
        signal: b
      }), Fe) {
        if (!ar(z, true))
          throw new Ni("AsyncIterable", `transform[${de - 1}]`, z);
      } else {
        var _e;
        Ui || (Ui = Nu);
        const We = new Ui({
          objectMode: true
        }), Ge = (_e = z) === null || _e === void 0 ? void 0 : _e.then;
        if (typeof Ge == "function")
          ee++, Ge.call(
            z,
            (ge) => {
              k = ge, ge != null && We.write(ge), ye && We.end(), $r.nextTick(le);
            },
            (ge) => {
              We.destroy(ge), $r.nextTick(le, ge);
            }
          );
        else if (ar(z, true))
          ee++, Rn(z, We, le, {
            end: ye
          });
        else if (ji(z) || Er(z)) {
          const ge = z.readable || z;
          ee++, Rn(ge, We, le, {
            end: ye
          });
        } else
          throw new Ni("AsyncIterable or Promise", "destination", z);
        z = We;
        const { destroy: Se, cleanup: oe } = ss(z, false, true);
        N.push(Se), Ue && w.push(oe);
      }
    } else if (as(re)) {
      if (Dn(z)) {
        ee += 2;
        const We = D_(z, re, le, {
          end: ye
        });
        Oi(re) && Ue && w.push(We);
      } else if (Er(z) || ji(z)) {
        const We = z.readable || z;
        ee++, Rn(We, re, le, {
          end: ye
        });
      } else if (ar(z))
        ee++, Rn(z, re, le, {
          end: ye
        });
      else
        throw new ao(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          z
        );
      z = re;
    } else if (C_(re)) {
      if (Dn(z))
        ee++, Gi($i(z), re, le, {
          end: ye
        });
      else if (ji(z) || ar(z))
        ee++, Gi(z, re, le, {
          end: ye
        });
      else if (Er(z))
        ee++, Gi(z.readable, re, le, {
          end: ye
        });
      else
        throw new ao(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          z
        );
      z = re;
    } else
      z = os.from(re);
  }
  return (b != null && b.aborted || v != null && v.aborted) && $r.nextTick(y), z;
}
function D_(r, o, n, { end: l }) {
  let b = false;
  if (o.on("close", () => {
    b || n(new E_());
  }), r.pipe(o, {
    end: false
  }), l) {
    let v = function() {
      b = true, o.end();
    };
    R_(r) ? $r.nextTick(v) : r.once("end", v);
  } else
    n();
  return Bn(
    r,
    {
      readable: true,
      writable: false
    },
    (v) => {
      const w = r._readableState;
      v && v.code === "ERR_STREAM_PREMATURE_CLOSE" && w && w.ended && !w.errored && !w.errorEmitted ? r.once("end", n).once("error", n) : n(v);
    }
  ), Bn(
    o,
    {
      readable: false,
      writable: true
    },
    n
  );
}
var Ao = {
  pipelineImpl: Ou,
  pipeline: P_
};
const { pipeline: k_ } = Ao, Fn = $t(), { destroyer: L_ } = Ar, {
  isNodeStream: An,
  isReadable: us,
  isWritable: ls,
  isWebStream: Vi,
  isTransformStream: or,
  isWritableStream: fs,
  isReadableStream: cs
} = Ht, {
  AbortError: M_,
  codes: { ERR_INVALID_ARG_VALUE: ds, ERR_MISSING_ARGS: B_ }
} = mt, N_ = tr;
var ju = function(...o) {
  if (o.length === 0)
    throw new B_("streams");
  if (o.length === 1)
    return Fn.from(o[0]);
  const n = [...o];
  if (typeof o[0] == "function" && (o[0] = Fn.from(o[0])), typeof o[o.length - 1] == "function") {
    const Z = o.length - 1;
    o[Z] = Fn.from(o[Z]);
  }
  for (let Z = 0; Z < o.length; ++Z)
    if (!(!An(o[Z]) && !Vi(o[Z]))) {
      if (Z < o.length - 1 && !(us(o[Z]) || cs(o[Z]) || or(o[Z])))
        throw new ds(`streams[${Z}]`, n[Z], "must be readable");
      if (Z > 0 && !(ls(o[Z]) || fs(o[Z]) || or(o[Z])))
        throw new ds(`streams[${Z}]`, n[Z], "must be writable");
    }
  let l, b, v, w, y;
  function D(Z) {
    const z = w;
    w = null, z ? z(Z) : Z ? y.destroy(Z) : !le && !ee && y.destroy();
  }
  const k = o[0], N = k_(o, D), ee = !!(ls(k) || fs(k) || or(k)), le = !!(us(N) || cs(N) || or(N));
  if (y = new Fn({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(k != null && k.writableObjectMode),
    readableObjectMode: !!(N != null && N.writableObjectMode),
    writable: ee,
    readable: le
  }), ee) {
    if (An(k))
      y._write = function(z, pe, _e) {
        k.write(z, pe) ? _e() : l = _e;
      }, y._final = function(z) {
        k.end(), b = z;
      }, k.on("drain", function() {
        if (l) {
          const z = l;
          l = null, z();
        }
      });
    else if (Vi(k)) {
      const pe = (or(k) ? k.writable : k).getWriter();
      y._write = async function(_e, de, re) {
        try {
          await pe.ready, pe.write(_e).catch(() => {
          }), re();
        } catch (Fe) {
          re(Fe);
        }
      }, y._final = async function(_e) {
        try {
          await pe.ready, pe.close().catch(() => {
          }), b = _e;
        } catch (de) {
          _e(de);
        }
      };
    }
    const Z = or(N) ? N.readable : N;
    N_(Z, () => {
      if (b) {
        const z = b;
        b = null, z();
      }
    });
  }
  if (le) {
    if (An(N))
      N.on("readable", function() {
        if (v) {
          const Z = v;
          v = null, Z();
        }
      }), N.on("end", function() {
        y.push(null);
      }), y._read = function() {
        for (; ; ) {
          const Z = N.read();
          if (Z === null) {
            v = y._read;
            return;
          }
          if (!y.push(Z))
            return;
        }
      };
    else if (Vi(N)) {
      const z = (or(N) ? N.readable : N).getReader();
      y._read = async function() {
        for (; ; )
          try {
            const { value: pe, done: _e } = await z.read();
            if (!y.push(pe))
              return;
            if (_e) {
              y.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return y._destroy = function(Z, z) {
    !Z && w !== null && (Z = new M_()), v = null, l = null, b = null, w === null ? z(Z) : (w = z, An(N) && L_(N, Z));
  }, y;
};
const Uu = globalThis.AbortController || _o().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: O_, ERR_INVALID_ARG_TYPE: qr, ERR_MISSING_ARGS: j_, ERR_OUT_OF_RANGE: U_ },
  AbortError: Ot
} = mt, { validateAbortSignal: hr, validateInteger: W_, validateObject: pr } = $n, $_ = tt.Symbol("kWeak"), { finished: G_ } = tr, V_ = ju, { addAbortSignalNoValidate: z_ } = Zn, { isWritable: H_, isNodeStream: K_ } = Ht, {
  ArrayPrototypePush: Y_,
  MathFloor: X_,
  Number: Z_,
  NumberIsNaN: q_,
  Promise: hs,
  PromiseReject: ps,
  PromisePrototypeThen: Q_,
  Symbol: Wu
} = tt, Nn = Wu("kEmpty"), ms = Wu("kEof");
function J_(r, o) {
  if (o != null && pr(o, "options"), (o == null ? void 0 : o.signal) != null && hr(o.signal, "options.signal"), K_(r) && !H_(r))
    throw new O_("stream", r, "must be writable");
  const n = V_(this, r);
  return o != null && o.signal && z_(o.signal, n), n;
}
function Qn(r, o) {
  if (typeof r != "function")
    throw new qr("fn", ["Function", "AsyncFunction"], r);
  o != null && pr(o, "options"), (o == null ? void 0 : o.signal) != null && hr(o.signal, "options.signal");
  let n = 1;
  return (o == null ? void 0 : o.concurrency) != null && (n = X_(o.concurrency)), W_(n, "concurrency", 1), (async function* () {
    var b, v;
    const w = new Uu(), y = this, D = [], k = w.signal, N = {
      signal: k
    }, ee = () => w.abort();
    o != null && (b = o.signal) !== null && b !== void 0 && b.aborted && ee(), o == null || (v = o.signal) === null || v === void 0 || v.addEventListener("abort", ee);
    let le, Z, z = false;
    function pe() {
      z = true;
    }
    async function _e() {
      try {
        for await (let Fe of y) {
          var de;
          if (z)
            return;
          if (k.aborted)
            throw new Ot();
          try {
            Fe = r(Fe, N);
          } catch (Ne) {
            Fe = ps(Ne);
          }
          Fe !== Nn && (typeof ((de = Fe) === null || de === void 0 ? void 0 : de.catch) == "function" && Fe.catch(pe), D.push(Fe), le && (le(), le = null), !z && D.length && D.length >= n && await new hs((Ne) => {
            Z = Ne;
          }));
        }
        D.push(ms);
      } catch (Fe) {
        const Ne = ps(Fe);
        Q_(Ne, void 0, pe), D.push(Ne);
      } finally {
        var re;
        z = true, le && (le(), le = null), o == null || (re = o.signal) === null || re === void 0 || re.removeEventListener("abort", ee);
      }
    }
    _e();
    try {
      for (; ; ) {
        for (; D.length > 0; ) {
          const de = await D[0];
          if (de === ms)
            return;
          if (k.aborted)
            throw new Ot();
          de !== Nn && (yield de), D.shift(), Z && (Z(), Z = null);
        }
        await new hs((de) => {
          le = de;
        });
      }
    } finally {
      w.abort(), z = true, Z && (Z(), Z = null);
    }
  }).call(this);
}
function ey(r = void 0) {
  return r != null && pr(r, "options"), (r == null ? void 0 : r.signal) != null && hr(r.signal, "options.signal"), (async function* () {
    let n = 0;
    for await (const b of this) {
      var l;
      if (r != null && (l = r.signal) !== null && l !== void 0 && l.aborted)
        throw new Ot({
          cause: r.signal.reason
        });
      yield [n++, b];
    }
  }).call(this);
}
async function $u(r, o = void 0) {
  for await (const n of Io.call(this, r, o))
    return true;
  return false;
}
async function ty(r, o = void 0) {
  if (typeof r != "function")
    throw new qr("fn", ["Function", "AsyncFunction"], r);
  return !await $u.call(
    this,
    async (...n) => !await r(...n),
    o
  );
}
async function ry(r, o) {
  for await (const n of Io.call(this, r, o))
    return n;
}
async function ny(r, o) {
  if (typeof r != "function")
    throw new qr("fn", ["Function", "AsyncFunction"], r);
  async function n(l, b) {
    return await r(l, b), Nn;
  }
  for await (const l of Qn.call(this, n, o))
    ;
}
function Io(r, o) {
  if (typeof r != "function")
    throw new qr("fn", ["Function", "AsyncFunction"], r);
  async function n(l, b) {
    return await r(l, b) ? l : Nn;
  }
  return Qn.call(this, n, o);
}
class iy extends j_ {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function oy(r, o, n) {
  var l;
  if (typeof r != "function")
    throw new qr("reducer", ["Function", "AsyncFunction"], r);
  n != null && pr(n, "options"), (n == null ? void 0 : n.signal) != null && hr(n.signal, "options.signal");
  let b = arguments.length > 1;
  if (n != null && (l = n.signal) !== null && l !== void 0 && l.aborted) {
    const k = new Ot(void 0, {
      cause: n.signal.reason
    });
    throw this.once("error", () => {
    }), await G_(this.destroy(k)), k;
  }
  const v = new Uu(), w = v.signal;
  if (n != null && n.signal) {
    const k = {
      once: true,
      [$_]: this
    };
    n.signal.addEventListener("abort", () => v.abort(), k);
  }
  let y = false;
  try {
    for await (const k of this) {
      var D;
      if (y = true, n != null && (D = n.signal) !== null && D !== void 0 && D.aborted)
        throw new Ot();
      b ? o = await r(o, k, {
        signal: w
      }) : (o = k, b = true);
    }
    if (!y && !b)
      throw new iy();
  } finally {
    v.abort();
  }
  return o;
}
async function ay(r) {
  r != null && pr(r, "options"), (r == null ? void 0 : r.signal) != null && hr(r.signal, "options.signal");
  const o = [];
  for await (const l of this) {
    var n;
    if (r != null && (n = r.signal) !== null && n !== void 0 && n.aborted)
      throw new Ot(void 0, {
        cause: r.signal.reason
      });
    Y_(o, l);
  }
  return o;
}
function sy(r, o) {
  const n = Qn.call(this, r, o);
  return (async function* () {
    for await (const b of n)
      yield* b;
  }).call(this);
}
function Gu(r) {
  if (r = Z_(r), q_(r))
    return 0;
  if (r < 0)
    throw new U_("number", ">= 0", r);
  return r;
}
function uy(r, o = void 0) {
  return o != null && pr(o, "options"), (o == null ? void 0 : o.signal) != null && hr(o.signal, "options.signal"), r = Gu(r), (async function* () {
    var l;
    if (o != null && (l = o.signal) !== null && l !== void 0 && l.aborted)
      throw new Ot();
    for await (const v of this) {
      var b;
      if (o != null && (b = o.signal) !== null && b !== void 0 && b.aborted)
        throw new Ot();
      r-- <= 0 && (yield v);
    }
  }).call(this);
}
function ly(r, o = void 0) {
  return o != null && pr(o, "options"), (o == null ? void 0 : o.signal) != null && hr(o.signal, "options.signal"), r = Gu(r), (async function* () {
    var l;
    if (o != null && (l = o.signal) !== null && l !== void 0 && l.aborted)
      throw new Ot();
    for await (const v of this) {
      var b;
      if (o != null && (b = o.signal) !== null && b !== void 0 && b.aborted)
        throw new Ot();
      if (r-- > 0)
        yield v;
      else
        return;
    }
  }).call(this);
}
mo.streamReturningOperators = {
  asIndexedPairs: ey,
  drop: uy,
  filter: Io,
  flatMap: sy,
  map: Qn,
  take: ly,
  compose: J_
};
mo.promiseReturningOperators = {
  every: ty,
  forEach: ny,
  reduce: oy,
  toArray: ay,
  some: $u,
  find: ry
};
var zi, _s;
function Vu() {
  if (_s)
    return zi;
  _s = 1;
  const { ArrayPrototypePop: r, Promise: o } = tt, { isIterable: n, isNodeStream: l, isWebStream: b } = Ht, { pipelineImpl: v } = Ao, { finished: w } = tr;
  zu();
  function y(...D) {
    return new o((k, N) => {
      let ee, le;
      const Z = D[D.length - 1];
      if (Z && typeof Z == "object" && !l(Z) && !n(Z) && !b(Z)) {
        const z = r(D);
        ee = z.signal, le = z.end;
      }
      v(
        D,
        (z, pe) => {
          z ? N(z) : k(pe);
        },
        {
          signal: ee,
          end: le
        }
      );
    });
  }
  return zi = {
    finished: w,
    pipeline: y
  }, zi;
}
var ys;
function zu() {
  if (ys)
    return Ri.exports;
  ys = 1;
  const { Buffer: r } = er, { ObjectDefineProperty: o, ObjectKeys: n, ReflectApply: l } = tt, {
    promisify: { custom: b }
  } = Vt, { streamReturningOperators: v, promiseReturningOperators: w } = mo, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: y }
  } = mt, D = ju, { pipeline: k } = Ao, { destroyer: N } = Ar, ee = tr, le = Vu(), Z = Ht, z = Ri.exports = So.Stream;
  z.isDisturbed = Z.isDisturbed, z.isErrored = Z.isErrored, z.isReadable = Z.isReadable, z.Readable = qn();
  for (const _e of n(v)) {
    let re = function(...Fe) {
      if (new.target)
        throw y();
      return z.Readable.from(l(de, this, Fe));
    };
    const de = v[_e];
    o(re, "name", {
      __proto__: null,
      value: de.name
    }), o(re, "length", {
      __proto__: null,
      value: de.length
    }), o(z.Readable.prototype, _e, {
      __proto__: null,
      value: re,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  for (const _e of n(w)) {
    let re = function(...Fe) {
      if (new.target)
        throw y();
      return l(de, this, Fe);
    };
    const de = w[_e];
    o(re, "name", {
      __proto__: null,
      value: de.name
    }), o(re, "length", {
      __proto__: null,
      value: de.length
    }), o(z.Readable.prototype, _e, {
      __proto__: null,
      value: re,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }
  z.Writable = ku(), z.Duplex = $t(), z.Transform = Mu, z.PassThrough = Nu, z.pipeline = k;
  const { addAbortSignal: pe } = Zn;
  return z.addAbortSignal = pe, z.finished = ee, z.destroy = N, z.compose = D, o(z, "promises", {
    __proto__: null,
    configurable: true,
    enumerable: true,
    get() {
      return le;
    }
  }), o(k, b, {
    __proto__: null,
    enumerable: true,
    get() {
      return le.pipeline;
    }
  }), o(ee, b, {
    __proto__: null,
    enumerable: true,
    get() {
      return le.finished;
    }
  }), z.Stream = z, z._isUint8Array = function(de) {
    return de instanceof Uint8Array;
  }, z._uint8ArrayToBuffer = function(de) {
    return r.from(de.buffer, de.byteOffset, de.byteLength);
  }, Ri.exports;
}
(function(r) {
  const o = zu(), n = Vu(), l = o.Readable.destroy;
  r.exports = o.Readable, r.exports._uint8ArrayToBuffer = o._uint8ArrayToBuffer, r.exports._isUint8Array = o._isUint8Array, r.exports.isDisturbed = o.isDisturbed, r.exports.isErrored = o.isErrored, r.exports.isReadable = o.isReadable, r.exports.Readable = o.Readable, r.exports.Writable = o.Writable, r.exports.Duplex = o.Duplex, r.exports.Transform = o.Transform, r.exports.PassThrough = o.PassThrough, r.exports.addAbortSignal = o.addAbortSignal, r.exports.finished = o.finished, r.exports.destroy = o.destroy, r.exports.destroy = l, r.exports.pipeline = o.pipeline, r.exports.compose = o.compose, Object.defineProperty(o, "promises", {
    configurable: true,
    enumerable: true,
    get() {
      return n;
    }
  }), r.exports.Stream = o.Stream, r.exports.default = r.exports;
})(Ws);
var Po = Ws.exports;
const ur = class ur2 extends Yr {
  constructor(n) {
    super();
    fe(this, "readable");
    fe(this, "fps", 30);
    this.readable = new Po.Readable({
      read: async () => {
        const l = fo(ur2.PRODUCED_EVENT), { done: b, value: v } = await n.next(this.fps), w = co(l);
        if (b) {
          this.readable.push(null), this.dispatchEvent(new CustomEvent(ur2.EMPTIED_EVENT));
          return;
        }
        this.readable.push(v), this.dispatchEvent(new CustomEvent(ur2.PRODUCED_EVENT, { detail: w }));
      },
      objectMode: true
    });
  }
  pipe(n) {
    return this.readable.pipe(n);
  }
  unpipe() {
    return this.readable.unpipe();
  }
  destroy() {
    this.removeAllEventListeners(), this.readable.unpipe();
  }
};
fe(ur, "EMPTIED_EVENT", "emptied"), fe(ur, "PRODUCED_EVENT", "produced");
let sr = ur;
class fy {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  allocate(o) {
    const n = this._module._malloc(o);
    return {
      buffer: () => this._module.HEAPU8.buffer,
      byteOffset: n,
      byteLength: o
    };
  }
  release(o) {
    const n = typeof o == "number" ? o : o.byteOffset;
    this._module._free(n);
  }
}
class cy {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  allocate(o) {
    const n = this._module.canvas.getContext("webgl2"), l = n.createTexture();
    n.bindTexture(n.TEXTURE_2D, l), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), o && n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, o), n.bindTexture(n.TEXTURE_2D, null);
    const b = this._module.GL.getNewId(this._module.GL.textures);
    return this._module.GL.textures[b] = l, { id: b };
  }
  release(o) {
    const n = typeof o == "number" ? o : o.id;
    this._module.canvas.getContext("webgl2").deleteTexture(this._module.GL.textures[n]), this._module.GL.textures[n] = null;
  }
}
const Hr = class Hr2 extends Yr {
  constructor(n, l, b) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_heap");
    fe(this, "_gl");
    fe(this, "_processor");
    fe(this, "_lastFrame", null);
    fe(this, "transform");
    this._sdk = n, this._effectPlayer = l, this._heap = new fy(this._sdk), this._gl = new cy(this._sdk);
    const v = this._sdk.ProcessorConfiguration.create();
    switch (b) {
      case "image":
        v.setUseOfflineMode(true), v.setUseFutureFilter(false), v.setUseFutureInterpolate(false);
        break;
      case "video":
        v.setUseOfflineMode(false), v.setUseFutureFilter(false), v.setUseFutureInterpolate(false);
        break;
      case "stream":
      default:
        v.setUseOfflineMode(false), v.setUseFutureFilter(false), v.setUseFutureInterpolate(true);
        break;
    }
    this._processor = b === "image" ? this._sdk.FrameProcessor.createPhotoProcessor(v) : this._sdk.FrameProcessor.createRealtimeProcessor(
      this._sdk.RealtimeProcessorMode.SYNC,
      v
    ), v.delete(), this._effectPlayer.setFrameProcessor(this._processor), this.transform = new Po.Transform({
      transform: async (w, y, D) => {
        var _a2, _b;
        (_a2 = this._lastFrame) == null ? void 0 : _a2.close(), this._lastFrame = w;
        const k = await this._process(w);
        (_b = this.transform) == null ? void 0 : _b.push({
          frame: {
            width: w.width,
            height: w.height
          },
          result: k
        }), D();
      },
      flush: (w) => {
      },
      objectMode: true
    });
  }
  async _process(n) {
    const l = dy(n.width, n.height), b = this._heap.allocate(n.allocationSize(l)), v = this._gl.allocate(n.texture);
    await n.copyTo(b, l);
    const w = this._sdk.FrameData.makeFromBpc8WithTexID(
      v.id,
      b.byteOffset,
      () => (this._heap.release(b), this._gl.release(v)),
      l.width,
      l.height,
      // TODO: Use the camera orientation from the frame
      this._sdk.CameraOrientation.DEG_0,
      this._sdk.PixelFormat[n.format],
      false,
      0
    ), y = fo(Hr2.PROCESSED_EVENT), D = (this._processor.push(w), this._processor.pop());
    w.delete();
    const k = co(y);
    return this.dispatchEvent(new CustomEvent(Hr2.PROCESSED_EVENT, { detail: k })), D;
  }
  async rerun() {
    if (!this._lastFrame || !this.transform)
      return false;
    const n = { width: this._lastFrame.width, height: this._lastFrame.height };
    return await this._process(this._lastFrame).then(
      (l) => this.transform.push({
        frame: n,
        result: l
      })
    ), true;
  }
  pipe(n) {
    return this.transform.pipe(n);
  }
  unpipe() {
    var _a2;
    return (_a2 = this.transform) == null ? void 0 : _a2.unpipe();
  }
  destroy() {
    this.removeAllEventListeners(), this._processor.delete(), this._lastFrame && (this._lastFrame.close(), this._lastFrame = null), this.unpipe();
  }
};
fe(Hr, "PROCESSED_EVENT", "processed");
let Vr = Hr;
function dy(r, o) {
  const l = Math.min(r, o);
  if (l < 480)
    return { width: r, height: o };
  const b = l / 480;
  return r = Math.ceil(r / b), o = Math.ceil(o / b), { width: r, height: o };
}
const hy = typeof devicePixelRatio < "u" ? devicePixelRatio : 1, Kr = class Kr2 extends Yr {
  constructor(n, l, b = hy) {
    super();
    fe(this, "writable");
    fe(this, "fps", 30);
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_effectManager");
    fe(this, "_lastResult", null);
    fe(this, "_preferences");
    fe(this, "_width", 0);
    fe(this, "_height", 0);
    fe(this, "_then", 0);
    this._sdk = n, this._effectPlayer = l, this._effectManager = l.effectManager(), this._preferences = { devicePixelRatio: b }, this.writable = new Po.Writable({
      write: async (v, w, y) => {
        var _a2;
        (_a2 = this._lastResult) == null ? void 0 : _a2.result.delete(), this._lastResult = v, await this._render(v), y();
      },
      objectMode: true
    });
  }
  get frameSize() {
    return {
      width: this._width,
      height: this._height
    };
  }
  get renderSize() {
    return {
      width: this._sdk.canvas.width,
      height: this._sdk.canvas.height
    };
  }
  updateSurfaceSize() {
    this._width = this._height = 0;
  }
  async _render({ frame: n, result: l }) {
    const b = await new Promise(On);
    if (l.isDeleted())
      return;
    const v = 1e3 / this.fps, w = 0.1 * v;
    if (b - this._then < v - w)
      return;
    this._then = b;
    const y = l.frameData;
    if (this._width !== n.width || this._height !== n.height) {
      this._width = n.width, this._height = n.height;
      const { width: N, height: ee } = py(
        n.width,
        n.height,
        this._preferences.devicePixelRatio
      );
      this._sdk.setCanvasSize(N, ee), this._effectManager.setEffectSize(N, ee), this._effectPlayer.surfaceChanged(N, ee);
    }
    const D = fo(Kr2.RENDERED_EVENT);
    this._effectPlayer.drawWithExternalFrameData(y), y.delete();
    const k = co(D);
    this._sdk.ctx.bindFramebuffer(this._sdk.ctx.READ_FRAMEBUFFER, null), this.dispatchEvent(new CustomEvent(Kr2.RENDERED_EVENT, { detail: k }));
  }
  async rerun() {
    return this._lastResult ? (await this._render(this._lastResult), true) : false;
  }
  destroy() {
    this.removeAllEventListeners(), this._effectManager.delete(), this._lastResult && (this._lastResult.result.delete(), this._lastResult = null), this.writable.end();
  }
};
fe(Kr, "RENDERED_EVENT", "rendered");
let zr = Kr;
function py(r, o, n) {
  const l = Math.round(self.devicePixelRatio), [b, v] = [screen.width * l, screen.height * l], w = Math.max(1, b / r), y = Math.max(1, v / o), D = Math.max(w, y);
  n = Math.min(n, D);
  const k = r * n, N = o * n;
  return { width: k, height: N };
}
const Jt = class Jt2 extends Yr {
  constructor(n, l, b) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_state", lt.Paused);
    fe(this, "_producer");
    fe(this, "_processor");
    fe(this, "_renderer");
    fe(this, "_preferences", {
      fps: 30,
      idleOnEmpty: true
    });
    this._sdk = n, this._effectPlayer = l, this._producer = new sr(/* @__PURE__ */ async function* () {
    }()), this._processor = new Vr(n, l, "stream"), this._renderer = new zr(n, l, b == null ? void 0 : b.devicePixelRatio), this._renderer.addEventListener(
      zr.RENDERED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Jt2.FRAME_RENDERED_EVENT, { detail: v }))
    );
  }
  get state() {
    return this._state;
  }
  get frameSize() {
    return this._renderer.frameSize;
  }
  get preferences() {
    return this._preferences;
  }
  /** Changes the pipeline frames generator */
  use(n, l) {
    const b = this._sdk, v = this._effectPlayer;
    this._producer.destroy(), this._processor.destroy(), this._producer = new sr(n[Symbol.asyncIterator](l)), this._producer.addEventListener(
      sr.PRODUCED_EVENT,
      ({ detail: w }) => this.dispatchEvent(new CustomEvent(Jt2.FRAME_RECEIVED_EVENT, { detail: w }))
    ), this._processor = new Vr(b, v, n.kind), this._processor.addEventListener(
      Vr.PROCESSED_EVENT,
      ({ detail: w }) => this.dispatchEvent(new CustomEvent(Jt2.FRAME_PROCESSED_EVENT, { detail: w }))
    ), this._producer.addEventListener(sr.EMPTIED_EVENT, () => this._state = lt.Idle, {
      once: true
    }), this._producer.addEventListener(
      sr.EMPTIED_EVENT,
      () => {
        this._renderer.addEventListener(
          zr.RENDERED_EVENT,
          async () => {
            for (; this._state === lt.Idle && !this._preferences.idleOnEmpty; )
              if (!await this._renderer.rerun())
                return;
          },
          { once: true }
        );
      },
      { once: true }
    ), this._state === lt.Idle && (this._state = lt.Running), this._state === lt.Running && this._producer.pipe(this._processor.transform).pipe(this._renderer.writable);
  }
  /** Runs loop of processing of input frames as well as rendering */
  run({ fps: n = this._preferences.fps, idleOnEmpty: l = true }) {
    Object.assign(this._preferences, { fps: n, idleOnEmpty: l }), this._producer.fps = n, this._renderer.fps = n, !(this._state === lt.Running || this._state === lt.Idle) && (this._producer.pipe(this._processor.transform).pipe(this._renderer.writable), this._state = lt.Running);
  }
  /** Runs on-off re-run of the last processing and rendering */
  pause() {
    this._state !== lt.Paused && (this._producer.unpipe(), this._processor.unpipe(), this._state = lt.Paused);
  }
  /** Runs on-off re-run of the last rendering */
  async rerun() {
    this._state === lt.Idle && await this._processor.rerun();
  }
  /** Pauses input‘s frames retrieval, processing and rendering */
  async rerender() {
    this._state === lt.Idle && await this._renderer.rerun();
  }
  /** Cleans up the pipeline resources like received frames, allocated memory and gl resources */
  destroy() {
    this.pause(), this._producer.destroy(), this._processor.destroy(), this._renderer.destroy();
  }
  updateSurfaceSize() {
    this._renderer.updateSurfaceSize();
  }
};
fe(Jt, "FRAME_RECEIVED_EVENT", "framereceived"), fe(Jt, "FRAME_PROCESSED_EVENT", "frameprocessed"), fe(Jt, "FRAME_RENDERED_EVENT", "framerendered");
let xr = Jt;
class my {
  /** @internal */
  constructor(o) {
    fe(this, "_fd");
    fe(this, "_cache", /* @__PURE__ */ new Map());
    this._fd = o;
  }
  get(o) {
    if (Array.isArray(o))
      return o.map((w) => this.get(w));
    const n = o.split("."), l = n.length;
    let b = l, v = this._fd;
    for (let w = false; !w && b > 0; --b) {
      const y = n.slice(0, b).join(".");
      this._cache.has(y) && (w = true, v = this._cache.get(y), ++b);
    }
    for (; v != null && b < l; ++b) {
      const w = n[b];
      let y = v[w];
      if (typeof y > "u") {
        const k = "get" + w[0].toUpperCase() + w.slice(1);
        y = v[k];
      }
      if (typeof y > "u" && Aa(v)) {
        const k = parseInt(w);
        isNaN(k) || (y = v.get(k));
      }
      if (typeof y == "function")
        try {
          y = y.apply(v);
        } catch {
          y = void 0;
        }
      const D = n.slice(0, b + 1).join(".");
      if (o === D && Aa(y)) {
        const k = y;
        y = new Array(k.size());
        for (let N = 0, ee = k.size(); N < ee; ++N)
          y[N] = k.get(N);
      }
      this._cache.set(D, v = y);
    }
    return b === l ? v : void 0;
  }
  /** @hidden */
  addTimestampUs(o) {
    this._fd.addTimestampUs(o);
  }
}
class gs {
  constructor(o) {
    fe(this, "_module");
    this._module = o;
  }
  exists(o) {
    try {
      return this._module.FS.lstat(o), true;
    } catch (n) {
      if (n.errno === 44 || n.code === "ENOENT")
        return false;
      throw n;
    }
  }
  writeFile(o, n) {
    const l = o.split("/");
    l[0] === "" && l.shift(), l.length > 1 && l.reduce((b, v) => (this.exists(b) || this._module.FS.mkdir(b), `${b}/${v}`)), this._module.FS.writeFile(o, n);
  }
}
var _y = Object.defineProperty, yy = Object.getOwnPropertyDescriptor, gy = (r, o, n, l) => {
  for (var b = l > 1 ? void 0 : l ? yy(o, n) : o, v = r.length - 1, w; v >= 0; v--)
    (w = r[v]) && (b = (l ? w(o, n, b) : w(b)) || b);
  return l && b && _y(o, n, b), b;
};
const by = {
  useFutureInterpolate: true,
  logger: console
};
var Qe;
const Hu = (Qe = class extends Yr {
  constructor(n, l = {}) {
    super();
    fe(this, "_sdk");
    fe(this, "_effectPlayer");
    fe(this, "_effectManager");
    fe(this, "_pipeline");
    fe(this, "_preferences");
    this._sdk = n, this._preferences = {
      ...by,
      ...l
    };
    const b = this._sdk.EffectPlayerConfiguration.create(this._sdk.canvas.width, this._sdk.canvas.height);
    this._effectPlayer = this._sdk.EffectPlayer.create(b), b.delete(), this._effectManager = this._effectPlayer.effectManager(), this._effectPlayer.setRecognizerUseFutureInterpolate(this._preferences.useFutureInterpolate), this._effectPlayer.surfaceCreated(this._sdk.canvas.width, this._sdk.canvas.height), this._effectPlayer.addFrameDataListener((v) => {
      this.dispatchEvent(
        new CustomEvent(Qe.FRAME_DATA_EVENT, { detail: new my(v) })
      );
    }), this._effectManager.addEffectActivatedListener(() => {
      const v = this._effectManager.current();
      this.dispatchEvent(new CustomEvent(Qe.EFFECT_ACTIVATED_EVENT, { detail: v }));
    }), this._effectManager.addEffectEventListener(async (v) => {
      v === Ip && (await new Promise((w) => Cs(w)), this._pipeline.rerun());
    }), this._pipeline = new xr(this._sdk, this._effectPlayer, {
      devicePixelRatio: l.devicePixelRatio
    }), this._pipeline.addEventListener(
      xr.FRAME_RECEIVED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_RECEIVED_EVENT, { detail: v }))
    ), this._pipeline.addEventListener(
      xr.FRAME_PROCESSED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_PROCESSED_EVENT, { detail: v }))
    ), this._pipeline.addEventListener(
      xr.FRAME_RENDERED_EVENT,
      ({ detail: v }) => this.dispatchEvent(new CustomEvent(Qe.FRAME_RENDERED_EVENT, { detail: v }))
    ), this.canvas.addEventListener("webglcontextlost", async (v) => {
      v.preventDefault(), this._effectPlayer.playbackStop(), await this.pause(), this._effectPlayer.surfaceDestroyed();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      Us(this._sdk.ctx), this._effectPlayer.surfaceCreated(this._sdk.canvas.width, this._sdk.canvas.height), this._pipeline.updateSurfaceSize(), this.play(), this._effectPlayer.playbackPlay();
    }), this.setVolume(0);
  }
  /**
   * Creates {@link Player} instance.
   *
   * See {@link SDKOptions} and {@link PlayerOptions} for all the possible parameters.
   *
   * @example
   * ```ts
   * const player = await Player.create({ clientToken: "xxx-xxx-xxx", devicePixelRatio: 1 })
   * ```
   */
  static async create(n) {
    const l = await Pp(n);
    return new this(l, n);
  }
  /**
   * Underlying HTMLCanvasElement
   * @internal
   */
  get canvas() {
    return this._sdk.canvas;
  }
  /**
   * The size of the last rendered frame.
   *
   * May be bigger then {@link Player.canvas} size. See {@link calculateSurfaceSize}
   * @internal
   */
  get frameSize() {
    return this._pipeline.frameSize;
  }
  /** @internal */
  get preferences() {
    return {
      ...this._preferences,
      pauseOnEmpty: this._pipeline.preferences.idleOnEmpty
    };
  }
  get isPlaying() {
    return this._pipeline.state === lt.Running;
  }
  /**
   * Uses the input as frames source
   * @example
   * ```ts
   * player.use(new Webcam())
   * ```
   */
  use(n, l) {
    this._pipeline.use(n, l);
  }
  /**
   * Adds additional modules like `face_tracker`, `background` and {@link Module | many others} to the Player and makes them available for effects
   * @example
   * ```ts
   * const frx = new Module("/path/to/face_tracker.zip")
   *
   * await player.addModule(frx)
   * ```
   */
  async addModule(...n) {
    await Promise.all(n.map((l) => l._bind({ FS: new gs(this._sdk) })));
  }
  /**
   * Applies an effect to input
   * @example
   * ```ts
   * const octopus = new Effect("/path/to/Octopus.zip")
   *
   * await player.applyEffect(octopus)
   * ```
   */
  async applyEffect(n) {
    const l = this, b = n.name;
    return await n._bind({
      FS: new gs(this._sdk),
      evalJs: this._evalJs.bind(this),
      callJsMethod: this._callJsMethod.bind(this)
    }), new Promise((v) => {
      var _a2, _b, _c, _d;
      this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, w, { once: true }), this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, y);
      try {
        this._effectManager.load(b);
      } catch (D) {
        this.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, w), this.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, y), n._unbind(), this.clearEffect(), (_b = (_a2 = this._preferences.logger).warn) == null ? void 0 : _b.call(_a2, "The effect was force cleared due to the exception:"), (_d = (_c = this._preferences.logger).error) == null ? void 0 : _d.call(_c, D);
      }
      function w({ detail: D }) {
        v(D);
      }
      function y({ detail: D }) {
        D.url() !== `/${b}/` && (l.removeEventListener(Qe.EFFECT_ACTIVATED_EVENT, y), n._unbind());
      }
    });
  }
  /** Clears effect applied to input */
  async clearEffect() {
    return new Promise((n) => {
      this.addEventListener(Qe.EFFECT_ACTIVATED_EVENT, () => n(), { once: true }), this._effectManager.load("");
    });
  }
  callJsMethod(n, l = "") {
    return this._callJsMethod(n, l);
  }
  /** Sets effect volume from 0 to 1 */
  setVolume(n) {
    this._effectManager.setEffectVolume(n), this.dispatchEvent(new CustomEvent("volumechange", { detail: n }));
  }
  /**
   * Starts input processing.
   *
   * Accepts playback options object with optional `fps` and `pauseOnEmpty` keys.
   *
   * @example
   * ```ts
   * /// The `fps` playback option persists between invocations:
   *
   * const desiredFps = 25
   *
   * player.play({ fps: desiredFps })
   * player.play() // same as passing `{ fps: desiredFps }`
   * ```
   * @example
   * ```ts
   * /// The `pauseOnEmpty` playback option resets to `true` between invocations:
   *
   * await player.use(new Image(file))
   * player.applyEffect(new Effect("path/to/Spider.zip")) // an effect with animations
   *
   * player.play({ pauseOnEmpty: false })
   * player.play() // same as passing `{ pauseOnEmpty: true }`
   * ```
   */
  play(n = {}) {
    this._pipeline.run({
      fps: n.fps,
      idleOnEmpty: n.pauseOnEmpty
    });
  }
  /** Stops input processing */
  pause() {
    this._pipeline.pause();
  }
  /** Destroys the {@link Player} instance, clears all the resources used */
  async destroy() {
    this.pause(), this.removeAllEventListeners(), await this.clearEffect(), this._pipeline.destroy(), this._effectPlayer.surfaceDestroyed(), this._effectManager.delete(), this._effectPlayer.delete();
    for (const n in this)
      n.startsWith("_") && Object.defineProperty(this, n, {
        get() {
          throw new Error("The player is destroyed.");
        },
        set() {
          throw new Error("The player is destroyed.");
        }
      });
  }
  async _evalJs(n) {
    return new Promise(async (l) => {
      const b = this._effectManager.current().evalJsSync(n);
      await this._pipeline.rerender(), l(b);
    });
  }
  /** @deprecated */
  async _callJsMethod(n, l = "") {
    this._effectManager.current().callJsMethod(n, l), await this._pipeline.rerender();
  }
}, /**
* Triggered when a frame is received from the specified {@link Input}
* @event
*/
fe(Qe, "FRAME_RECEIVED_EVENT", "framereceived"), /**
* Triggered when a frame is processed by underlying neural networks
* @event
*/
fe(Qe, "FRAME_PROCESSED_EVENT", "frameprocessed"), /**
* Triggered when a frame is rendered
* @event */
fe(Qe, "FRAME_RENDERED_EVENT", "framerendered"), /**
* Triggered when a new {@link FrameData} is ready
* @example
* ```ts
* player.addEventListener("framedata", ({ detail: frameData }) => {
*   const hasFace = frameData.get("frxRecognitionResult.faces.0.hasFace")
*   if (!hasFace) return
*
*   const landmarks = frameData.get("frxRecognitionResult.faces.0.landmarks")
*   console.log(landmarks)
* })
* ```
* @event
*/
fe(Qe, "FRAME_DATA_EVENT", "framedata"), /**
* Triggered when an {@link Effect} is activated
*
* Note: By default the {@link Player} starts with an "empty" {@link Effect} applied
* which does nothing but rendering
*
* @event
*/
fe(Qe, "EFFECT_ACTIVATED_EVENT", "effectactivated"), Qe);
gy([
  Rs("Please, use Effect.evalJs() instead.")
], Hu.prototype, "callJsMethod", 1);
let Oy = Hu;
const Jn = (r) => {
  if (!(r && "canvas" in r))
    throw new Error(
      `The "player" must be a Player instance, but "${r}" is received. Make sure you haven't forgot to place "await" before Player.create() call.`
    );
}, so = /* @__PURE__ */ new WeakMap(), wy = (r, o) => {
  Jn(r);
  const n = typeof o == "string" ? document.querySelector(o) : o;
  if (!(n instanceof HTMLElement))
    throw new Error("Target container is not a DOM element");
  if (n instanceof HTMLMediaElement || n instanceof HTMLCanvasElement)
    throw new Error("Target container must be a plain html element like `div`");
  so.set(n, r), n.appendChild(r.canvas);
  const { pauseOnEmpty: l } = r.preferences;
  r.play({ pauseOnEmpty: l });
}, vy = (r) => {
  const o = typeof r == "string" ? document.querySelector(r) : r;
  if (!(o instanceof HTMLElement))
    throw new Error("Target container is not a DOM element");
  const n = so.get(o);
  n && o.removeChild(n.canvas), so.delete(o);
}, jy = { render: wy, unmount: vy };
class Uy {
  constructor(o) {
    fe(this, "_player");
    Jn(o), this._player = o;
  }
  /**
   * @param settings - Output photo settings
   * @returns Snapshot of the current {@link Player} state
   */
  async takePhoto(o) {
    const n = this._player.canvas, { width: l, height: b } = this._player.frameSize, v = Ey(n, (o == null ? void 0 : o.width) ?? l, (o == null ? void 0 : o.height) ?? b);
    return await new Promise(
      (w, y) => v.toBlob(
        (D) => D ? w(D) : y(new Error("Unexpected error: Unable to create Blob")),
        (o == null ? void 0 : o.type) ?? "image/jpeg",
        o == null ? void 0 : o.quality
      )
    );
  }
}
const Ey = (r, o = r.width, n = r.height) => {
  if (o !== r.width || n !== r.height) {
    const b = xy(o, n);
    return b.getContext("2d").drawImage(r, 0, 0, b.width, b.height), b;
  }
  return r;
}, xy = (r, o) => {
  let n;
  return Fs ? (n = new OffscreenCanvas(r, o), n.toBlob = function(l, b, v) {
    this.convertToBlob({ type: b, quality: v }).then(l).catch((w) => l(null));
  }) : (n = document.createElement("canvas"), n.width = r, n.height = o), n;
}, Sy = typeof MediaStream < "u" ? MediaStream : class {
  constructor() {
    throw new Error("The environment does not support MediaStream API");
  }
}, Sr = class Sr2 extends Sy {
  constructor(o) {
    Jn(o), super();
    const n = Sr2.cache.get(o);
    if (!n || !n.active) {
      let l = o.canvas;
      if (((l.getContext("webgl2") || l.getContext("webgl")).getContextAttributes() || {}).alpha) {
        const w = l, y = (l = document.createElement("canvas")).getContext("2d", {
          alpha: false
        });
        o.addEventListener("framerendered", () => {
          y.canvas.width = w.width, y.canvas.height = w.height, y.drawImage(w, 0, 0, w.width, w.height);
        });
      }
      l.captureStream().getTracks().forEach((w) => this.addTrack(w)), Sr2.cache.set(o, this);
    }
    return Sr2.cache.get(o);
  }
  /**
   * @returns
   * Video {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack | MediaStreamTrack}
   * of given index from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getVideoTracks | MediaStream.getVideoTracks()} list
   */
  getVideoTrack(o = 0) {
    return this.getVideoTracks()[o];
  }
  /**
   * @returns
   * Audio {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack | MediaStreamTrack}
   * of given index from {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream/getAudioTracks | MediaStream.getAudioTracks()} list
   */
  getAudioTrack(o = 0) {
    return this.getAudioTracks()[o];
  }
  /** Stops the capture */
  stop() {
    this.getTracks().forEach((o) => o.stop());
  }
};
fe(Sr, "cache", /* @__PURE__ */ new WeakMap());
let bs = Sr;
const Ty = typeof MediaRecorder < "u" ? MediaRecorder : class {
  constructor() {
    throw new Error("The environment does not support MediaRecorder API");
  }
};
class Wy extends Ty {
  constructor(o, n) {
    Jn(o);
    const l = o.canvas.captureStream();
    super(l, n);
  }
  /**
   * Stops video recording
   * @returns The recorder video
   */
  async stop() {
    return new Promise((o, n) => {
      const l = (v) => {
        super.removeEventListener("dataavailable", l), super.removeEventListener("error", b), o(v.data);
      }, b = (v) => {
        super.removeEventListener("dataavailable", l), super.removeEventListener("error", b), n(v);
      };
      super.addEventListener("dataavailable", l), super.addEventListener("error", b), super.stop();
    });
  }
}
const $y = "1.9.1.3-12-g63360850fe";
export {
  jy as Dom,
  dp as Effect,
  my as FrameData,
  Hh as Image,
  Uy as ImageCapture,
  Si as MediaStream,
  bs as MediaStreamCapture,
  ky as Module,
  Oy as Player,
  $y as VERSION,
  ep as Video,
  Wy as VideoRecorder,
  Py as Webcam,
  Pp as createSDK,
  by as defaultPlayerOptions,
  Ki as defaultVideoConstraints,
  Jh as defaultVideoOptions,
  Ay as isBrowserSupported,
  gp as isSimdSupported,
  Ry as timers,
  Dy as utils
};

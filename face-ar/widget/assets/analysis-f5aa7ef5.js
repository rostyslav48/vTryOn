import { Module as ky, Effect as dp } from "./BanubaSDK-34db11e0.js";
import { W as debug, X as preload$1, Y as getPlayer, Z as AnalysisResources, _ as AnalysisEffect, $ as Analysis$1, a0 as useWebcam$1, a1 as get, a2 as resize, a3 as crop, a4 as render$1, a5 as destroy$1, a6 as SDK } from "./app.js";
const FRAME_DATA_EVENT = "framedata";
let _modules;
let _effect;
let _preloading = null;
const preload = async () => {
  if (_preloading)
    return _preloading;
  debug("Starting preloading of analysis resources");
  await (_preloading = preload$1(
    SDK,
    AnalysisResources,
    AnalysisEffect
  ).catch((error) => {
    _preloading = null;
    throw error;
  }));
  debug("Analysis resources preloaded");
};
let _isEffectApplyInProgress = false;
const start = async () => {
  if (_isEffectApplyInProgress)
    return;
  else
    _isEffectApplyInProgress = true;
  debug("Starting analysis");
  const tasks = [];
  tasks.push(getPlayer());
  if (!_modules)
    tasks.push(ky.preload(AnalysisResources));
  if (!_effect)
    tasks.push(dp.preload(AnalysisEffect));
  try {
    const [player, modules, effect] = await Promise.all(tasks);
    if (modules)
      await player.addModule(..._modules = modules), debug("Analysis modules loaded");
    if (effect)
      _effect = effect, debug("Analysis effect loaded");
    if (Analysis$1.effect !== _effect)
      await player.applyEffect(Analysis$1.effect = _effect);
    debug("Analysis effect applied");
  } finally {
    _isEffectApplyInProgress = false;
  }
};
const _listeners = {
  face: /* @__PURE__ */ new Set(),
  lightning: /* @__PURE__ */ new Set()
};
const addEventListener = (type, listener) => {
  _listeners[type].add(listener);
};
const removeEventListener = (type, listener) => {
  if (_listeners[type].has(listener))
    _listeners[type].delete(listener);
};
const dispatchEvent = (type, event) => {
  _listeners[type].forEach((listener) => listener(event));
};
let _lightCoeff = 1;
const _frameDataEventListener = ({ detail: frameData }) => {
  const hasFace = frameData.get("frxRecognitionResult.faces.0.hasFace");
  const coeff = hasFace ? frameData.get("lightCorrection") : _lightCoeff;
  _lightCoeff = coeff;
  dispatchEvent("face", hasFace);
  dispatchEvent("lightning", coeff >= 0.8);
};
const _addFrameDataEventListener = async () => {
  const player$1 = await getPlayer();
  player$1.addEventListener(FRAME_DATA_EVENT, _frameDataEventListener);
};
const _removeFrameDataEventListener = async () => {
  const player$1 = await getPlayer();
  player$1.removeEventListener(FRAME_DATA_EVENT, _frameDataEventListener);
};
const useWebcam = async () => {
  const webcam = await useWebcam$1();
  _addFrameDataEventListener();
  debug("Using Webcam for analysis");
  return webcam;
};
const usePhoto = async (source) => {
  const image = get(source);
  if (Analysis$1.source === image)
    return;
  const player$1 = await getPlayer();
  player$1.use(Analysis$1.source = image, { resize, crop });
  debug("Using Image for analysis", source);
};
const render = async (container) => {
  await render$1(container);
};
const unmount = async (container) => {
  _removeFrameDataEventListener();
  Analysis$1.lastSource = Analysis$1.source;
  debug("Analysis removed from container", container);
};
const destroy = async () => {
  await destroy$1();
};
const Analysis = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addEventListener,
  destroy,
  dispatchEvent,
  preload,
  removeEventListener,
  render,
  start,
  unmount,
  usePhoto,
  useWebcam
}, Symbol.toStringTag, { value: "Module" }));
export {
  Analysis as A,
  addEventListener as a,
  unmount as b,
  removeEventListener as c,
  render as r,
  start as s,
  useWebcam as u
};

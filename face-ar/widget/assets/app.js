var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
import { Webcam as Py, utils as Dy, Image as Hh, isSimdSupported as gp, Dom as jy, Module as ky, Effect as dp } from "./BanubaSDK-34db11e0.js";
function noop$1() {
}
const identity$1 = (x) => x;
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function add_location(element2, file2, line, column, char) {
  element2.__svelte_meta = {
    loc: { file: file2, line, column, char }
  };
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal$1(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop$1;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function exclude_internal_props(props) {
  const result2 = {};
  for (const k in props)
    if (k[0] !== "$")
      result2[k] = props[k];
  return result2;
}
function compute_rest_props(props, keys2) {
  const rest = {};
  keys2 = new Set(keys2);
  for (const k in props)
    if (!keys2.has(k) && k[0] !== "$")
      rest[k] = props[k];
  return rest;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop$1;
}
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop$1;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root2 = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root2 && root2.host) {
    return root2;
  }
  return node.ownerDocument;
}
function append_empty_stylesheet(node) {
  const style_element = element("style");
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data2) {
  return document.createTextNode(data2);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
  return function(event) {
    event.preventDefault();
    return fn.call(this, event);
  };
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
const always_set_through_set_attribute = ["width", "height"];
function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key2 in attributes) {
    if (attributes[key2] == null) {
      node.removeAttribute(key2);
    } else if (key2 === "style") {
      node.style.cssText = attributes[key2];
    } else if (key2 === "__value") {
      node.value = node[key2] = attributes[key2];
    } else if (descriptors[key2] && descriptors[key2].set && always_set_through_set_attribute.indexOf(key2) === -1) {
      node[key2] = attributes[key2];
    } else {
      attr(node, key2, attributes[key2]);
    }
  }
}
function set_svg_attributes(node, attributes) {
  for (const key2 in attributes) {
    attr(node, key2, attributes[key2]);
  }
}
function set_custom_element_data_map(node, data_map) {
  Object.keys(data_map).forEach((key2) => {
    set_custom_element_data(node, key2, data_map[key2]);
  });
}
function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === "boolean" && value === "" ? true : value;
  } else {
    attr(node, prop, value);
  }
}
function set_dynamic_element_data(tag) {
  return /-/.test(tag) ? set_custom_element_data_map : set_attributes;
}
function init_binding_group(group) {
  let _inputs;
  return {
    /* push */
    p(...inputs) {
      _inputs = inputs;
      _inputs.forEach((input) => group.push(input));
    },
    /* remove */
    r() {
      _inputs.forEach((input) => group.splice(group.indexOf(input), 1));
    }
  };
}
function to_number(value) {
  return value === "" ? null : +value;
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key2, value, important) {
  if (value == null) {
    node.style.removeProperty(key2);
  } else {
    node.style.setProperty(key2, value, important ? "important" : "");
  }
}
function toggle_class(element2, name, toggle) {
  element2.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
const managed_styles = /* @__PURE__ */ new Map();
let active = 0;
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return hash2 >>> 0;
}
function create_style_information(doc, node) {
  const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
  managed_styles.set(doc, info);
  return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step2 = 16.666 / duration;
  let keyframes = "{\n";
  for (let p = 0; p <= 1; p += step2) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
  }
  const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node.style.animation || "";
  node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}
function delete_rule(node, name) {
  const previous = (node.style.animation || "").split(", ");
  const next = previous.filter(
    name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1
    // remove all Svelte animations
  );
  const deleted = previous.length - next.length;
  if (deleted) {
    node.style.animation = next.join(", ");
    active -= deleted;
    if (!active)
      clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active)
      return;
    managed_styles.forEach((info) => {
      const { ownerNode } = info.stylesheet;
      if (ownerNode)
        detach(ownerNode);
    });
    managed_styles.clear();
  });
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext$2(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext$2(key2) {
  return get_current_component().$$.context.get(key2);
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
let promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
const outroing = /* @__PURE__ */ new Set();
let outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
  const options = { direction: "in" };
  let config2 = fn(node, params, options);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;
  function cleanup() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function go() {
    const { delay = 0, duration = 300, easing = identity$1, tick: tick2 = noop$1, css } = config2 || null_transition;
    if (css)
      animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick2(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task)
      task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, "start"));
    task = loop((now2) => {
      if (running) {
        if (now2 >= end_time) {
          tick2(1, 0);
          dispatch(node, true, "end");
          cleanup();
          return running = false;
        }
        if (now2 >= start_time) {
          const t = easing((now2 - start_time) / duration);
          tick2(t, 1 - t);
        }
      }
      return running;
    });
  }
  let started = false;
  return {
    start() {
      if (started)
        return;
      started = true;
      delete_rule(node);
      if (is_function(config2)) {
        config2 = config2(options);
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate() {
      started = false;
    },
    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}
function create_out_transition(node, fn, params) {
  const options = { direction: "out" };
  let config2 = fn(node, params, options);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;
  function go() {
    const { delay = 0, duration = 300, easing = identity$1, tick: tick2 = noop$1, css } = config2 || null_transition;
    if (css)
      animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, "start"));
    loop((now2) => {
      if (running) {
        if (now2 >= end_time) {
          tick2(0, 1);
          dispatch(node, false, "end");
          if (!--group.r) {
            run_all(group.c);
          }
          return false;
        }
        if (now2 >= start_time) {
          const t = easing((now2 - start_time) / duration);
          tick2(1 - t, t);
        }
      }
      return running;
    });
  }
  if (is_function(config2)) {
    wait().then(() => {
      config2 = config2(options);
      go();
    });
  } else {
    go();
  }
  return {
    end(reset) {
      if (reset && config2.tick) {
        config2.tick(1, 0);
      }
      if (running) {
        if (animation_name)
          delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}
function create_bidirectional_transition(node, fn, params, intro) {
  const options = { direction: "both" };
  let config2 = fn(node, params, options);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function init2(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b) {
    const { delay = 0, duration = 300, easing = identity$1, tick: tick2 = noop$1, css } = config2 || null_transition;
    const program = {
      start: now() + delay,
      b
    };
    if (!b) {
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }
      if (b)
        tick2(0, 1);
      running_program = init2(program, duration);
      add_render_callback(() => dispatch(node, b, "start"));
      loop((now2) => {
        if (pending_program && now2 > pending_program.start) {
          running_program = init2(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, "start");
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config2.css);
          }
        }
        if (running_program) {
          if (now2 >= running_program.end) {
            tick2(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, "end");
            if (!pending_program) {
              if (running_program.b) {
                clear_animation();
              } else {
                if (!--running_program.group.r)
                  run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now2 >= running_program.start) {
            const p = now2 - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick2(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b) {
      if (is_function(config2)) {
        wait().then(() => {
          config2 = config2(options);
          go(b);
        });
      } else {
        go(b);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy2, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  const updates = [];
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key2 = get_key(child_ctx);
    let block = lookup.get(key2);
    if (!block) {
      block = create_each_block(key2, child_ctx);
      block.c();
    } else if (dynamic) {
      updates.push(() => block.p(child_ctx, dirty));
    }
    new_lookup.set(key2, new_blocks[i] = block);
    if (key2 in old_indexes)
      deltas.set(key2, Math.abs(i - old_indexes[key2]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy2(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key))
      destroy2(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  run_all(updates);
  return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
  const keys2 = /* @__PURE__ */ new Set();
  for (let i = 0; i < list.length; i++) {
    const key2 = get_key(get_context(ctx, list, i));
    if (keys2.has(key2)) {
      throw new Error("Cannot have duplicate keys in a keyed each");
    }
    keys2.add(key2);
  }
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key2 in o) {
        if (!(key2 in n))
          to_null_out[key2] = 1;
      }
      for (const key2 in n) {
        if (!accounted_for[key2]) {
          update2[key2] = n[key2];
          accounted_for[key2] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key2 in o) {
        accounted_for[key2] = 1;
      }
    }
  }
  for (const key2 in to_null_out) {
    if (!(key2 in update2))
      update2[key2] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function bind(component, name, callback) {
  const index2 = component.$$.props[name];
  if (index2 !== void 0) {
    component.$$.bound[index2] = callback;
    callback(component.$$.ctx[index2]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop$1,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}
class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop$1;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop$1;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index2 = callbacks.indexOf(callback);
      if (index2 !== -1)
        callbacks.splice(index2, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
}
function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({ version: "3.59.2" }, detail), { bubbles: true }));
}
function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", { target, node });
  append(target, node);
}
function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", { target, node, anchor });
  insert(target, node, anchor);
}
function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", { node });
  detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default)
    modifiers.push("preventDefault");
  if (has_stop_propagation)
    modifiers.push("stopPropagation");
  if (has_stop_immediate_propagation)
    modifiers.push("stopImmediatePropagation");
  dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
    dispose();
  };
}
function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null)
    dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
  else
    dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
}
function prop_dev(node, property2, value) {
  node[property2] = value;
  dispatch_dev("SvelteDOMSetProperty", { node, property: property2, value });
}
function set_data_dev(text2, data2) {
  data2 = "" + data2;
  if (text2.data === data2)
    return;
  dispatch_dev("SvelteDOMSetData", { node: text2, data: data2 });
  text2.data = data2;
}
function validate_each_argument(arg) {
  if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
    let msg = "{#each} only iterates over array-like objects.";
    if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
      msg += " You can use a spread to convert this iterable into an array.";
    }
    throw new Error(msg);
  }
}
function validate_slots(name, slot, keys2) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys2.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
function validate_dynamic_element(tag) {
  const is_string = typeof tag === "string";
  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}
function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    console.warn(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
  }
}
function construct_svelte_component_dev(component, props) {
  const error_message = "this={...} of <svelte:component> should specify a Svelte component.";
  try {
    const instance2 = new component(props);
    if (!instance2.$$ || !instance2.$set || !instance2.$on || !instance2.$destroy) {
      throw new Error(error_message);
    }
    return instance2;
  } catch (err) {
    const { message } = err;
    if (typeof message === "string" && message.indexOf("is not a constructor") !== -1) {
      throw new Error(error_message);
    } else {
      throw err;
    }
  }
}
class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }
    super();
  }
  $destroy() {
    super.$destroy();
    this.$destroy = () => {
      console.warn("Component was already destroyed");
    };
  }
  $capture_state() {
  }
  $inject_state() {
  }
}
const create$a = (base, headers) => {
  const doFetch = (request) => {
    if (!(request instanceof Request))
      request = new Request(request);
    if (headers)
      for (const [key2, value] of Object.entries(headers))
        request.headers.append(key2, value);
    return fetch(request).then(
      (r) => {
        var _a;
        return ((_a = r.headers.get("content-type")) == null ? void 0 : _a.includes("application/json")) ? r.json() : r.blob();
      }
    );
  };
  const get2 = async (path, query = {}) => {
    const url = new URL(path, base);
    for (const [name, value] of Object.entries(query))
      url.searchParams.append(name, String(value));
    const headers2 = { Authorization: "test" };
    return doFetch(
      new Request(url, {
        headers: headers2,
        method: "GET"
      })
    );
  };
  const post = async (path, data2) => {
    const url = new URL(path, base);
    const headers2 = {};
    if (data2 instanceof FormData)
      headers2["content-type"] = "multipart/form-data";
    else if (typeof data2 === "object")
      headers2["content-type"] = "application/json", headers2["Authorization"] = "test", data2 = JSON.stringify(data2);
    return doFetch(
      new Request(url, {
        headers: headers2,
        method: "POST",
        body: data2
      })
    );
  };
  return { get: get2, post };
};
const create$9 = (base, headers) => {
  const http = create$a(base, headers);
  return (query, variables = {}) => http.post("", { query, variables }).then(({ data: data2, errors }) => {
    if (!errors)
      return data2;
    else
      throw errors;
  });
};
const GetBestMatchPageData = `query GetBestMatchPageData($brand: String, $season: SeasonType, $creamRanges: CreamColorRangeFilter, $productsLimit: Int, $looksLimit: Int, $withBrand: Boolean = true) {
  looks(brand: $brand, limit: $looksLimit) {
    items {
      ...LookFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
  looksBrands {
    name
    slug
  }
  productsGroups(brand: $brand) {
    type
    products(limit: $productsLimit, season: $season, creamRanges: $creamRanges) {
      items {
        ...ProductFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
}

fragment LookFragment on Look {
  id
  name
  brand @include(if: $withBrand)
  cover
  products {
    products {
      ...ProductFragment
    }
    selectedSkus {
      ...ProductSkuFragment
    }
  }
}

fragment ProductFragment on Product {
  id
  name
  type
  brand @include(if: $withBrand)
  cover
  isRecommended
  skus {
    ...ProductSkuFragment
  }
}

fragment ProductSkuFragment on ProductSku {
  id
  name
  sku
  url
  vto {
    ...VTOFragment
  }
}

fragment VTOFragment on VTO {
  id
  season
  region
  color
  finish
  coverage
  skincare {
    min
    minunit
    max
    maxunit
  }
}

fragment PageInfoFragment on PageInfo {
  hasNext
}`;
const GetSkinCarePageData = `query GetSkinCarePageData($brand: String, $season: SeasonType, $productsLimit: Int, $withBrand: Boolean = true) {
  skincareBundles {
    items {
      id
      name
      brand
      brandSlug
      cover
      products {
        products {
          ...ProductFragment
        }
      }
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
  skincareProductsCategorised(brand: $brand) {
    category {
      id
      name
    }
    products {
      type
      products(limit: $productsLimit, season: $season) {
        items {
          ...ProductFragment
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
}

fragment ProductFragment on Product {
  id
  name
  type
  brand @include(if: $withBrand)
  cover
  isRecommended
  skus {
    ...ProductSkuFragment
  }
}

fragment ProductSkuFragment on ProductSku {
  id
  name
  sku
  url
  vto {
    ...VTOFragment
  }
}

fragment VTOFragment on VTO {
  id
  season
  region
  color
  finish
  coverage
  skincare {
    min
    minunit
    max
    maxunit
  }
}

fragment PageInfoFragment on PageInfo {
  hasNext
}`;
const GetLooks = `query GetLooks($brand: String, $offset: Int, $limit: Int, $withBrand: Boolean = true) {
  looks(brand: $brand, offset: $offset, limit: $limit) {
    items {
      ...LookFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}

fragment LookFragment on Look {
  id
  name
  brand @include(if: $withBrand)
  cover
  products {
    products {
      ...ProductFragment
    }
    selectedSkus {
      ...ProductSkuFragment
    }
  }
}

fragment ProductFragment on Product {
  id
  name
  type
  brand @include(if: $withBrand)
  cover
  isRecommended
  skus {
    ...ProductSkuFragment
  }
}

fragment ProductSkuFragment on ProductSku {
  id
  name
  sku
  url
  vto {
    ...VTOFragment
  }
}

fragment VTOFragment on VTO {
  id
  season
  region
  color
  finish
  coverage
  skincare {
    min
    minunit
    max
    maxunit
  }
}

fragment PageInfoFragment on PageInfo {
  hasNext
}`;
const GetProducts = `query GetProducts($brand: String, $type: ProductType, $skus: [ID!], $customerSkus: [ID!], $season: SeasonType, $creamRanges: CreamColorRangeFilter, $offset: Int, $limit: Int, $withBrand: Boolean = true) {
  products(
    brand: $brand
    type: $type
    skus: $skus
    customerSkus: $customerSkus
    season: $season
    creamRanges: $creamRanges
    offset: $offset
    limit: $limit
  ) {
    items {
      ...ProductFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
}

fragment ProductFragment on Product {
  id
  name
  type
  brand @include(if: $withBrand)
  cover
  isRecommended
  skus {
    ...ProductSkuFragment
  }
}

fragment ProductSkuFragment on ProductSku {
  id
  name
  sku
  url
  vto {
    ...VTOFragment
  }
}

fragment VTOFragment on VTO {
  id
  season
  region
  color
  finish
  coverage
  skincare {
    min
    minunit
    max
    maxunit
  }
}

fragment PageInfoFragment on PageInfo {
  hasNext
}`;
const Queries = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetBestMatchPageData,
  GetLooks,
  GetProducts,
  GetSkinCarePageData
}, Symbol.toStringTag, { value: "Module" }));
const gql = create$9("https://svc.dev.tintvto.com/graphql", {
  "x-api-key": "da2-2myoeqyqpjfnzcmukoajfw6jce"
});
const create$8 = (loader) => {
  let p;
  const client = {
    log: (...args) => {
      (p ?? (p = loader())).then((c) => c.log(...args));
    }
  };
  return client;
};
const DATA_LAYER = "dataLayer";
const isEnabled$1 = {}.VITE_GTM_ID;
let gtm = null;
if (isEnabled$1)
  gtm = create$8(
    () => new Promise((resolve2, reject) => {
      var _a;
      const script = document.createElement("script");
      script.defer = true;
      script.onload = () => {
        var _a2, _b;
        return resolve2((_b = (_a2 = script.ownerDocument) == null ? void 0 : _a2.defaultView) == null ? void 0 : _b[DATA_LAYER]);
      };
      script.onerror = reject;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${{}.VITE_GTM_ID}&l=${encodeURIComponent(DATA_LAYER)}`;
      const head = ((_a = window.frameElement) == null ? void 0 : _a.parentNode) || document.head;
      head.appendChild(script);
    }).then((dataLayer) => {
      dataLayer.push({ event: "gtm.js", "gtm.start": (/* @__PURE__ */ new Date()).getTime() });
      const log2 = (eventName, eventProps = {}) => {
        if (typeof eventProps !== "object" || eventProps === null)
          eventProps = { eventProps };
        dataLayer.push({ event: eventName, ...eventProps });
      };
      return { log: log2 };
    })
  );
const gtm$1 = gtm;
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
let mixpanel = null;
const isEnabled = {}.VITE_MIXPANEL_TOKEN;
const MIXPANEL_APP_NAME = "tint";
if (isEnabled)
  mixpanel = create$8(
    () => __vitePreload(() => import("./mixpanel.min-e3f81f47.js"), true ? [] : void 0, import.meta.url).then(({ init: init2 }) => {
      const mp = init2(
        {}.VITE_MIXPANEL_TOKEN,
        { api_transport: "sendBeacon", disable_cookie: true },
        MIXPANEL_APP_NAME
      );
      mp.identify();
      const log2 = (eventName, eventProps = {}) => {
        if (typeof eventProps !== "object" || eventProps === null)
          eventProps = { eventProps };
        mp.track(eventName, eventProps);
      };
      return { log: log2 };
    })
  );
const mixpanel$1 = mixpanel;
const log = async (...args) => {
  if (gtm$1)
    gtm$1.log(...args);
  if (mixpanel$1)
    mixpanel$1.log(...args);
  console.debug("[analytics] log(", ...args, ")");
};
const analytics = new Proxy(
  {},
  { get: (_, prop) => (data2) => log(prop, data2 ?? {}) }
);
const cx = (...args) => args.filter(Boolean).join(" ");
const capitalize = (str) => str.replace(/^(.)/, (_, c) => c.toUpperCase());
const getSvelteRoot = () => {
  return get_current_component().$$.root;
};
const subscriber_queue$1 = [];
function readable(value, start2) {
  return {
    subscribe: writable$1(value, start2).subscribe
  };
}
function writable$1(value, start2 = noop$1) {
  let stop2;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal$1(value, new_value)) {
      value = new_value;
      if (stop2) {
        const run_queue = !subscriber_queue$1.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue$1.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue$1.length; i += 2) {
            subscriber_queue$1[i][0](subscriber_queue$1[i + 1]);
          }
          subscriber_queue$1.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop2 = start2(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop2) {
        stop2();
        stop2 = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop$1;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result2 = fn(single ? values[0] : values, set);
      if (auto) {
        set(result2);
      } else {
        cleanup = is_function(result2) ? result2 : noop$1;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (started) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    started = true;
    sync();
    return function stop2() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    };
  });
}
const media = (...args) => {
  const root2 = getSvelteRoot();
  const window2 = root2.ownerDocument.defaultView;
  const mq = window2.matchMedia(...args);
  return readable(mq.matches, (set) => {
    mq.onchange = ({ matches }) => set(matches);
    return () => mq.onchange = null;
  });
};
const __vite_glob_0_0 = "" + new URL("add-to-cart-3bc4d9d2.svg", import.meta.url).href;
const __vite_glob_0_1 = "" + new URL("added-to-cart-22eb9c79.svg", import.meta.url).href;
const __vite_glob_0_2 = "" + new URL("advisor-e3f5d729.svg", import.meta.url).href;
const __vite_glob_0_3 = "" + new URL("analysis-0c0f3cfa.svg", import.meta.url).href;
const __vite_glob_0_4 = "" + new URL("applied-d38b1431.svg", import.meta.url).href;
const __vite_glob_0_5 = "" + new URL("arrow-down-e2b60811.svg", import.meta.url).href;
const __vite_glob_0_6 = "" + new URL("arrow-left-6ad5d455.svg", import.meta.url).href;
const __vite_glob_0_7 = "" + new URL("arrow-right-to-line-d323ab75.svg", import.meta.url).href;
const __vite_glob_0_8 = "" + new URL("arrow-right-fee62705.svg", import.meta.url).href;
const __vite_glob_0_9 = "" + new URL("arrow-small-up-c026530c.svg", import.meta.url).href;
const __vite_glob_0_10 = "" + new URL("arrow-up-1435288d.svg", import.meta.url).href;
const __vite_glob_0_11 = "" + new URL("back-dbb4957f.svg", import.meta.url).href;
const __vite_glob_0_12 = "" + new URL("bag-677ada8a.svg", import.meta.url).href;
const __vite_glob_0_13 = "" + new URL("before-45288bce.svg", import.meta.url).href;
const __vite_glob_0_14 = "" + new URL("best-match-a226a15d.svg", import.meta.url).href;
const __vite_glob_0_15 = "" + new URL("book-a-demo-cb84da19.svg", import.meta.url).href;
const __vite_glob_0_16 = "" + new URL("checkmark-lg-afb796e2.svg", import.meta.url).href;
const __vite_glob_0_17 = "" + new URL("checkmark-md-f88a6424.svg", import.meta.url).href;
const __vite_glob_0_18 = "" + new URL("checkmark-sm-37c31f2f.svg", import.meta.url).href;
const __vite_glob_0_19 = "" + new URL("checkmark-xs-c0726a05.svg", import.meta.url).href;
const __vite_glob_0_20 = "" + new URL("checkmark-d70951b2.svg", import.meta.url).href;
const __vite_glob_0_21 = "" + new URL("chevron-down-888904db.svg", import.meta.url).href;
const __vite_glob_0_22 = "" + new URL("chevron-left-47cfe864.svg", import.meta.url).href;
const __vite_glob_0_23 = "" + new URL("chevron-right-4382ef2e.svg", import.meta.url).href;
const __vite_glob_0_24 = "" + new URL("chevron-small-down-504f0bea.svg", import.meta.url).href;
const __vite_glob_0_25 = "" + new URL("chevron-small-left-57df94da.svg", import.meta.url).href;
const __vite_glob_0_26 = "" + new URL("chevron-small-right-144ed087.svg", import.meta.url).href;
const __vite_glob_0_27 = "" + new URL("chevron-small-up-e78c7919.svg", import.meta.url).href;
const __vite_glob_0_28 = "" + new URL("chevron-up-aa7961f6.svg", import.meta.url).href;
const __vite_glob_0_29 = "" + new URL("chevron-xs-down-47646c54.svg", import.meta.url).href;
const __vite_glob_0_30 = "" + new URL("chevron-xs-up-145cdee6.svg", import.meta.url).href;
const __vite_glob_0_31 = "" + new URL("close-circle-acab4f79.svg", import.meta.url).href;
const __vite_glob_0_32 = "" + new URL("close-small-bceba333.svg", import.meta.url).href;
const __vite_glob_0_33 = "" + new URL("close-xs-6decdb6f.svg", import.meta.url).href;
const __vite_glob_0_34 = "" + new URL("close-9b8861e6.svg", import.meta.url).href;
const __vite_glob_0_35 = "" + new URL("delete-a7dc7d33.svg", import.meta.url).href;
const __vite_glob_0_36 = "" + new URL("dots-7feb5330.svg", import.meta.url).href;
const __vite_glob_0_37 = "" + new URL("external-link-3fb469d8.svg", import.meta.url).href;
const __vite_glob_0_38 = "" + new URL("forward-fea68316.svg", import.meta.url).href;
const __vite_glob_0_39 = "" + new URL("full-ab2b2038.svg", import.meta.url).href;
const __vite_glob_0_40 = "" + new URL("gift-selection-cb6b495d.svg", import.meta.url).href;
const __vite_glob_0_41 = "" + new URL("hide-5556d348.svg", import.meta.url).href;
const __vite_glob_0_42 = "" + new URL("info-circle-bcd2b6d5.svg", import.meta.url).href;
const __vite_glob_0_43 = "" + new URL("info-9fbb8de7.svg", import.meta.url).href;
const __vite_glob_0_44 = "" + new URL("logo-31ce9c1b.svg", import.meta.url).href;
const __vite_glob_0_45 = "" + new URL("makeup-transfer-1274ba04.svg", import.meta.url).href;
const __vite_glob_0_46 = "" + new URL("menu-ecf4e1e5.svg", import.meta.url).href;
const __vite_glob_0_47 = "" + new URL("plus-in-circle-c6baab3c.svg", import.meta.url).href;
const __vite_glob_0_48 = "" + new URL("recommend-m-332dd3de.svg", import.meta.url).href;
const __vite_glob_0_49 = "" + new URL("recommend-xs-46ffb682.svg", import.meta.url).href;
const __vite_glob_0_50 = "" + new URL("selector-d9716bf2.svg", import.meta.url).href;
const __vite_glob_0_51 = "" + new URL("show-48a30435.svg", import.meta.url).href;
const __vite_glob_0_52 = "" + new URL("skin-care-ddb9e1d5.svg", import.meta.url).href;
const __vite_glob_0_53 = "" + new URL("tag-sale-1c50546c.svg", import.meta.url).href;
const { Error: Error_1 } = globals;
const file$4 = "src/lib/elements/Icon/InlineSVG.svelte";
function add_css$4(target) {
  append_styles(target, "svelte-1xdx97u", "svg.svelte-1xdx97u{display:inline-block\n}");
}
function create_fragment$8(ctx) {
  let svg_1;
  let raw_value = (
    /*svg*/
    ctx[0].innerHTML + ""
  );
  let svg_1_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    /*svg*/
    ctx[0].attributes,
    /*$$restProps*/
    ctx[2]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_1_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_1_levels[i]);
  }
  const block = {
    c: function create2() {
      svg_1 = svg_element("svg");
      set_svg_attributes(svg_1, svg_data);
      toggle_class(svg_1, "svelte-1xdx97u", true);
      add_location(svg_1, file$4, 42, 0, 1460);
    },
    l: function claim(nodes) {
      throw new Error_1("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg_1, anchor);
      svg_1.innerHTML = raw_value;
      ctx[6](svg_1);
    },
    p: function update2(ctx2, [dirty]) {
      if (dirty & /*svg*/
      1 && raw_value !== (raw_value = /*svg*/
      ctx2[0].innerHTML + ""))
        svg_1.innerHTML = raw_value;
      set_svg_attributes(svg_1, svg_data = get_spread_update(svg_1_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        dirty & /*svg*/
        1 && /*svg*/
        ctx2[0].attributes,
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2]
      ]));
      toggle_class(svg_1, "svelte-1xdx97u", true);
    },
    i: noop$1,
    o: noop$1,
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(svg_1);
      ctx[6](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const cache = /* @__PURE__ */ new Map();
const load = (src, opts = {}) => {
  if (!cache.has(src))
    cache.set(src, fetch(src, opts).then((response) => {
      if (!response.ok)
        throw new Error(`${response.status}: Failed to fetch SVG from ${src}`);
      return response.text();
    }).then((text2) => new DOMParser().parseFromString(text2, "text/xml").querySelector("svg")).then((svg) => {
      const attributes = Object.fromEntries(Array.from(svg.attributes, ({ name, value }) => [name, value]));
      const innerHTML = svg.innerHTML;
      return { attributes, innerHTML };
    }));
  return cache.get(src).catch((error) => {
    cache.delete(src);
    throw error;
  });
};
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = ["src", "fetchPriority"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("InlineSVG", slots, []);
  let { src } = $$props;
  let { fetchPriority = void 0 } = $$props;
  let mounted = false;
  let svg = {
    attributes: { width: 0, height: 0 },
    innerHTML: ""
  };
  const dispatch2 = createEventDispatcher();
  let self2;
  onMount(() => $$invalidate(5, mounted = true));
  afterUpdate(() => {
    var _a;
    return ((_a = self2 == null ? void 0 : self2.children) == null ? void 0 : _a.length) && dispatch2("load", self2);
  });
  $$self.$$.on_mount.push(function() {
    if (src === void 0 && !("src" in $$props || $$self.$$.bound[$$self.$$.props["src"]])) {
      console.warn("<InlineSVG> was created without expected prop 'src'");
    }
  });
  function svg_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      self2 = $$value;
      $$invalidate(1, self2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("src" in $$new_props)
      $$invalidate(3, src = $$new_props.src);
    if ("fetchPriority" in $$new_props)
      $$invalidate(4, fetchPriority = $$new_props.fetchPriority);
  };
  $$self.$capture_state = () => ({
    cache,
    load,
    afterUpdate,
    createEventDispatcher,
    onMount,
    src,
    fetchPriority,
    mounted,
    svg,
    dispatch: dispatch2,
    self: self2
  });
  $$self.$inject_state = ($$new_props) => {
    if ("src" in $$props)
      $$invalidate(3, src = $$new_props.src);
    if ("fetchPriority" in $$props)
      $$invalidate(4, fetchPriority = $$new_props.fetchPriority);
    if ("mounted" in $$props)
      $$invalidate(5, mounted = $$new_props.mounted);
    if ("svg" in $$props)
      $$invalidate(0, svg = $$new_props.svg);
    if ("self" in $$props)
      $$invalidate(1, self2 = $$new_props.self);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*mounted, src, fetchPriority*/
    56) {
      mounted && load(src, fetchPriority ? { priority: fetchPriority } : {}).then((s) => $$invalidate(0, svg = s)).catch((e) => dispatch2("error", e));
    }
  };
  return [svg, self2, $$restProps, src, fetchPriority, mounted, svg_1_binding];
}
class InlineSVG extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal$1, { src: 3, fetchPriority: 4 }, add_css$4);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "InlineSVG",
      options,
      id: create_fragment$8.name
    });
  }
  get src() {
    throw new Error_1("<InlineSVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set src(value) {
    throw new Error_1("<InlineSVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get fetchPriority() {
    throw new Error_1("<InlineSVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fetchPriority(value) {
    throw new Error_1("<InlineSVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const key$3 = Symbol("icons_base");
const setBase = (path) => setContext$2(key$3, path);
const getBase = () => getContext$2(key$3);
function create_fragment$7(ctx) {
  let inlinesvg;
  let current;
  const inlinesvg_spread_levels = [
    /*$$restProps*/
    ctx[3],
    { src: (
      /*_src*/
      ctx[1]
    ) }
  ];
  let inlinesvg_props = {};
  for (let i = 0; i < inlinesvg_spread_levels.length; i += 1) {
    inlinesvg_props = assign(inlinesvg_props, inlinesvg_spread_levels[i]);
  }
  inlinesvg = new InlineSVG({ props: inlinesvg_props, $$inline: true });
  inlinesvg.$on(
    "error",
    /*error_handler*/
    ctx[5]
  );
  const block = {
    c: function create2() {
      create_component(inlinesvg.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(inlinesvg, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const inlinesvg_changes = dirty & /*$$restProps, _src*/
      10 ? get_spread_update(inlinesvg_spread_levels, [
        dirty & /*$$restProps*/
        8 && get_spread_object(
          /*$$restProps*/
          ctx2[3]
        ),
        dirty & /*_src*/
        2 && { src: (
          /*_src*/
          ctx2[1]
        ) }
      ]) : {};
      inlinesvg.$set(inlinesvg_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(inlinesvg.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(inlinesvg.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(inlinesvg, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const icons = Object.fromEntries(Object.entries(/* @__PURE__ */ Object.assign({ "./svg/add-to-cart.svg": __vite_glob_0_0, "./svg/added-to-cart.svg": __vite_glob_0_1, "./svg/advisor.svg": __vite_glob_0_2, "./svg/analysis.svg": __vite_glob_0_3, "./svg/applied.svg": __vite_glob_0_4, "./svg/arrow-down.svg": __vite_glob_0_5, "./svg/arrow-left.svg": __vite_glob_0_6, "./svg/arrow-right-to-line.svg": __vite_glob_0_7, "./svg/arrow-right.svg": __vite_glob_0_8, "./svg/arrow-small-up.svg": __vite_glob_0_9, "./svg/arrow-up.svg": __vite_glob_0_10, "./svg/back.svg": __vite_glob_0_11, "./svg/bag.svg": __vite_glob_0_12, "./svg/before.svg": __vite_glob_0_13, "./svg/best-match.svg": __vite_glob_0_14, "./svg/book-a-demo.svg": __vite_glob_0_15, "./svg/checkmark-lg.svg": __vite_glob_0_16, "./svg/checkmark-md.svg": __vite_glob_0_17, "./svg/checkmark-sm.svg": __vite_glob_0_18, "./svg/checkmark-xs.svg": __vite_glob_0_19, "./svg/checkmark.svg": __vite_glob_0_20, "./svg/chevron-down.svg": __vite_glob_0_21, "./svg/chevron-left.svg": __vite_glob_0_22, "./svg/chevron-right.svg": __vite_glob_0_23, "./svg/chevron-small-down.svg": __vite_glob_0_24, "./svg/chevron-small-left.svg": __vite_glob_0_25, "./svg/chevron-small-right.svg": __vite_glob_0_26, "./svg/chevron-small-up.svg": __vite_glob_0_27, "./svg/chevron-up.svg": __vite_glob_0_28, "./svg/chevron-xs-down.svg": __vite_glob_0_29, "./svg/chevron-xs-up.svg": __vite_glob_0_30, "./svg/close-circle.svg": __vite_glob_0_31, "./svg/close-small.svg": __vite_glob_0_32, "./svg/close-xs.svg": __vite_glob_0_33, "./svg/close.svg": __vite_glob_0_34, "./svg/delete.svg": __vite_glob_0_35, "./svg/dots.svg": __vite_glob_0_36, "./svg/external-link.svg": __vite_glob_0_37, "./svg/forward.svg": __vite_glob_0_38, "./svg/full.svg": __vite_glob_0_39, "./svg/gift-selection.svg": __vite_glob_0_40, "./svg/hide.svg": __vite_glob_0_41, "./svg/info-circle.svg": __vite_glob_0_42, "./svg/info.svg": __vite_glob_0_43, "./svg/logo.svg": __vite_glob_0_44, "./svg/makeup-transfer.svg": __vite_glob_0_45, "./svg/menu.svg": __vite_glob_0_46, "./svg/plus-in-circle.svg": __vite_glob_0_47, "./svg/recommend-m.svg": __vite_glob_0_48, "./svg/recommend-xs.svg": __vite_glob_0_49, "./svg/selector.svg": __vite_glob_0_50, "./svg/show.svg": __vite_glob_0_51, "./svg/skin-care.svg": __vite_glob_0_52, "./svg/tag-sale.svg": __vite_glob_0_53 })).map(([path, url]) => [path.replace(/\.\/svg\/(.*?)\.\w+$/, "$1"), url]));
function instance$7($$self, $$props, $$invalidate) {
  let _src;
  const omit_props_names = ["variant", "src"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Icon", slots, []);
  const base = getBase();
  let { variant = "" } = $$props;
  let { src = "" } = $$props;
  const error_handler = () => (
    // fallback
    variant && base && $$invalidate(1, _src = icons[variant])
  );
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("variant" in $$new_props)
      $$invalidate(0, variant = $$new_props.variant);
    if ("src" in $$new_props)
      $$invalidate(4, src = $$new_props.src);
  };
  $$self.$capture_state = () => ({
    icons,
    InlineSVG,
    getBase,
    base,
    variant,
    src,
    _src
  });
  $$self.$inject_state = ($$new_props) => {
    if ("variant" in $$props)
      $$invalidate(0, variant = $$new_props.variant);
    if ("src" in $$props)
      $$invalidate(4, src = $$new_props.src);
    if ("_src" in $$props)
      $$invalidate(1, _src = $$new_props._src);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*src, variant*/
    17) {
      $$invalidate(1, _src = src || (base ? `${base}${variant}.svg` : icons[variant]));
    }
  };
  return [variant, _src, base, $$restProps, src, error_handler];
}
class Icon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal$1, { variant: 0, src: 4 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Icon",
      options,
      id: create_fragment$7.name
    });
  }
  get variant() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get src() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set src(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/lib/elements/IconButton/IconButton.svelte";
function add_css$3(target) {
  append_styles(target, "svelte-chl1d", "button.svelte-chl1d{display:flex;align-items:center;justify-content:center;border-radius:9999px;outline:2px solid transparent;outline-offset:2px;transition-property:background-color,color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.normal.svelte-chl1d{border-width:1px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--tint-text-dark)\n}.normal.active.svelte-chl1d,.normal.svelte-chl1d:hover{--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))\n}.normal.svelte-chl1d:active{--tw-bg-opacity:1;background-color:rgb(243 243 243 / var(--tw-bg-opacity))\n}.normal.svelte-chl1d:disabled{--tw-border-opacity:1;border-color:rgb(238 238 238 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:0.3\n}.normal.sm.svelte-chl1d{border-width:0px\n}.overlay.svelte-chl1d{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:var(--tint-text-light)\n}.overlay.svelte-chl1d:hover{--tw-bg-opacity:0.4\n}.overlay.svelte-chl1d:active{--tw-bg-opacity:0.5\n}.overlay.active.svelte-chl1d{--tw-bg-opacity:0.75\n}.overlay.svelte-chl1d:disabled{--tw-bg-opacity:0.12;--tw-text-opacity:0.6\n}.sm.svelte-chl1d{height:24px;width:24px\n}.base.svelte-chl1d{height:32px;width:32px\n}.lg.svelte-chl1d{height:40px;width:40px\n}.xl.svelte-chl1d{height:44px;width:44px\n}");
}
function create_fragment$6(ctx) {
  let button;
  let icon_1;
  let current;
  let mounted;
  let dispose;
  icon_1 = new Icon({
    props: { variant: (
      /*icon*/
      ctx[0]
    ) },
    $$inline: true
  });
  let button_levels = [
    /*$$restProps*/
    ctx[5],
    { class: (
      /*classes*/
      ctx[4]
    ) },
    { disabled: (
      /*disabled*/
      ctx[1]
    ) },
    { "data-qa": (
      /*qa*/
      ctx[3]
    ) }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  const block = {
    c: function create2() {
      button = element("button");
      create_component(icon_1.$$.fragment);
      set_attributes(button, button_data);
      toggle_class(
        button,
        "active",
        /*active*/
        ctx[2]
      );
      toggle_class(button, "svelte-chl1d", true);
      add_location(button, file$3, 14, 0, 373);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      mount_component(icon_1, button, null);
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[8],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update2(ctx2, [dirty]) {
      const icon_1_changes = {};
      if (dirty & /*icon*/
      1)
        icon_1_changes.variant = /*icon*/
        ctx2[0];
      icon_1.$set(icon_1_changes);
      set_attributes(button, button_data = get_spread_update(button_levels, [
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        (!current || dirty & /*classes*/
        16) && { class: (
          /*classes*/
          ctx2[4]
        ) },
        (!current || dirty & /*disabled*/
        2) && { disabled: (
          /*disabled*/
          ctx2[1]
        ) },
        (!current || dirty & /*qa*/
        8) && { "data-qa": (
          /*qa*/
          ctx2[3]
        ) }
      ]));
      toggle_class(
        button,
        "active",
        /*active*/
        ctx2[2]
      );
      toggle_class(button, "svelte-chl1d", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(button);
      destroy_component(icon_1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  let classes;
  const omit_props_names = ["icon", "variant", "size", "disabled", "active", "qa"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("IconButton", slots, []);
  let { icon } = $$props;
  let { variant = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { disabled = false } = $$props;
  let { active: active2 = false } = $$props;
  let { qa = void 0 } = $$props;
  $$self.$$.on_mount.push(function() {
    if (icon === void 0 && !("icon" in $$props || $$self.$$.bound[$$self.$$.props["icon"]])) {
      console.warn("<IconButton> was created without expected prop 'icon'");
    }
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("icon" in $$new_props)
      $$invalidate(0, icon = $$new_props.icon);
    if ("variant" in $$new_props)
      $$invalidate(6, variant = $$new_props.variant);
    if ("size" in $$new_props)
      $$invalidate(7, size = $$new_props.size);
    if ("disabled" in $$new_props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("active" in $$new_props)
      $$invalidate(2, active2 = $$new_props.active);
    if ("qa" in $$new_props)
      $$invalidate(3, qa = $$new_props.qa);
  };
  $$self.$capture_state = () => ({
    Icon,
    cx,
    icon,
    variant,
    size,
    disabled,
    active: active2,
    qa,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("icon" in $$props)
      $$invalidate(0, icon = $$new_props.icon);
    if ("variant" in $$props)
      $$invalidate(6, variant = $$new_props.variant);
    if ("size" in $$props)
      $$invalidate(7, size = $$new_props.size);
    if ("disabled" in $$props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("active" in $$props)
      $$invalidate(2, active2 = $$new_props.active);
    if ("qa" in $$props)
      $$invalidate(3, qa = $$new_props.qa);
    if ("classes" in $$props)
      $$invalidate(4, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(4, classes = cx("tint-icon-button", $$restProps.class, variant, size));
  };
  return [icon, disabled, active2, qa, classes, $$restProps, variant, size, click_handler];
}
class IconButton extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$6,
      create_fragment$6,
      safe_not_equal$1,
      {
        icon: 0,
        variant: 6,
        size: 7,
        disabled: 1,
        active: 2,
        qa: 3
      },
      add_css$3
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "IconButton",
      options,
      id: create_fragment$6.name
    });
  }
  get icon() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set icon(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get variant() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const key$2 = Symbol("router");
const setRouter = (router) => setContext$2(key$2, router);
const useRouter = () => getContext$2(key$2);
const defineConfig = (config2) => config2.filter(Boolean);
function create_if_block$2(ctx) {
  let componenttree;
  let current;
  componenttree = new ComponentTree({
    props: { components: (
      /*children*/
      ctx[0]
    ) },
    $$inline: true
  });
  const block = {
    c: function create2() {
      create_component(componenttree.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(componenttree, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const componenttree_changes = {};
      if (dirty & /*children*/
      1)
        componenttree_changes.components = /*children*/
        ctx2[0];
      componenttree.$set(componenttree_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(componenttree.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(componenttree.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(componenttree, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(6:2) {#if children.length > 0}",
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let t;
  let current;
  let if_block = (
    /*children*/
    ctx[0].length > 0 && create_if_block$2(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  const block = {
    c: function create2() {
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (
        /*children*/
        ctx2[0].length > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*children*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy2(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: "(5:0) <svelte:component this={Component}>",
    ctx
  });
  return block;
}
function create_fragment$5(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*Component*/
    ctx[1]
  );
  function switch_props(ctx2) {
    return {
      props: {
        $$slots: { default: [create_default_slot$3] },
        $$scope: { ctx: ctx2 }
      },
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
  }
  const block = {
    c: function create2() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const switch_instance_changes = {};
      if (dirty & /*$$scope, children*/
      17) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (dirty & /*Component*/
      2 && switch_value !== (switch_value = /*Component*/
      ctx2[1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  let Component;
  let children2;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ComponentTree", slots, ["default"]);
  let { components } = $$props;
  $$self.$$.on_mount.push(function() {
    if (components === void 0 && !("components" in $$props || $$self.$$.bound[$$self.$$.props["components"]])) {
      console.warn("<ComponentTree> was created without expected prop 'components'");
    }
  });
  const writable_props = ["components"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ComponentTree> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("components" in $$props2)
      $$invalidate(2, components = $$props2.components);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ components, children: children2, Component });
  $$self.$inject_state = ($$props2) => {
    if ("components" in $$props2)
      $$invalidate(2, components = $$props2.components);
    if ("children" in $$props2)
      $$invalidate(0, children2 = $$props2.children);
    if ("Component" in $$props2)
      $$invalidate(1, Component = $$props2.Component);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*components*/
    4) {
      $$invalidate(1, [Component, ...children2] = components, Component, ($$invalidate(0, children2), $$invalidate(2, components)));
    }
  };
  return [children2, Component, components, slots, $$scope];
}
class ComponentTree extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal$1, { components: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ComponentTree",
      options,
      id: create_fragment$5.name
    });
  }
  get components() {
    throw new Error("<ComponentTree>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set components(value) {
    throw new Error("<ComponentTree>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const normalize = (path = "") => {
  if (path.endsWith("/"))
    path = path.slice(0, -1);
  if (!path.startsWith("/"))
    path = "/" + path;
  return path;
};
const join = (...paths) => paths.map(normalize).join("").replace("//", "/");
const resolve = (...paths) => {
  const chunks = [];
  for (let path of paths) {
    path = path.endsWith("/") ? path.slice(0, -1) : path;
    for (const part of path.split("/")) {
      if (part === "..")
        chunks.pop();
      if (part.startsWith("."))
        continue;
      if (part === "")
        chunks.length = 0;
      else
        chunks.push(part);
    }
  }
  return normalize(chunks.join("/"));
};
const interopDefault = (obj) => obj && ("default" in obj ? obj.default : obj);
const match = (pattern, path, options = { exact: false }) => {
  const currentPath = typeof pattern === "string" ? pattern : pattern.pathname;
  return options.exact ? currentPath === path : currentPath.includes(path);
};
const createMemoryHistory = (init2) => {
  const history = writable$1({
    index: 0,
    locations: [toLocation(init2)]
  });
  const goto = (location, { replace: replace2 = false } = {}) => history.update(({ index: index2, locations }) => {
    location = toLocation(location);
    const { pathname: current } = locations[index2];
    const { pathname: next } = location;
    location.pathname = resolve(current, next);
    if (replace2)
      index2 -= 1;
    if (index2 < locations.length - 1)
      locations = locations.slice(0, index2 + 1);
    index2 = locations.push(location) - 1;
    return { index: index2, locations };
  });
  const push = (location) => goto(location);
  const replace = (location) => goto(location, { replace: true });
  const go = (steps) => history.update(({ index: index2, locations }) => {
    index2 = Math.max(0, Math.min(index2 + steps, locations.length - 1));
    return { index: index2, locations };
  });
  const back = () => go(-1);
  const forward = () => go(1);
  const { subscribe: subscribe2 } = derived(history, ({ index: index2, locations }) => ({ location: locations[index2] }));
  return {
    push,
    replace,
    go,
    forward,
    back,
    subscribe: subscribe2,
    match
  };
};
const toLocation = (location) => {
  if (typeof location === "string") {
    const [pathname2, search] = location.split("?");
    const query2 = Object.fromEntries(new URLSearchParams(search).entries());
    return { pathname: pathname2, query: query2 };
  }
  const { pathname, query = {} } = location;
  return { pathname, query };
};
const createResolve = (configs) => {
  const routes = createRoutesLookup(configs);
  const loaders = /* @__PURE__ */ new Map();
  return async (pathname, context) => {
    const route = routes[pathname];
    if (!route)
      return;
    const components = [];
    for (const action of route.actions) {
      const ret = await action(context);
      if (ret == null)
        continue;
      if ("redirect" in ret)
        return ret;
      if ("load" in ret) {
        if (!loaders.has(ret))
          loaders.set(ret, ret.load());
        await loaders.get(ret);
      }
      components.push(interopDefault(ret));
    }
    return {
      pathname,
      components
    };
  };
};
const createRoutesLookup = (configs) => {
  const lookup = {};
  for (const { path = "", action = () => {
  }, children: children2 = [] } of configs) {
    const route = {
      path: normalize(path),
      actions: [action]
    };
    lookup[route.path] = route;
    const childrenLookup = createRoutesLookup(children2);
    for (const child of Object.values(childrenLookup)) {
      child.path = join(route.path, child.path);
      child.actions = route.actions.concat(child.actions);
      lookup[child.path] = child;
    }
  }
  return lookup;
};
const { console: console_1$1 } = globals;
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
    null
  );
  const block = {
    c: function create2() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2048)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy2(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: "(59:0) <ComponentTree {components}>",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let componenttree;
  let current;
  componenttree = new ComponentTree({
    props: {
      components: (
        /*components*/
        ctx[0]
      ),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create2() {
      create_component(componenttree.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(componenttree, target, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const componenttree_changes = {};
      if (dirty & /*components*/
      1)
        componenttree_changes.components = /*components*/
        ctx2[0];
      if (dirty & /*$$scope*/
      2048) {
        componenttree_changes.$$scope = { dirty, ctx: ctx2 };
      }
      componenttree.$set(componenttree_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(componenttree.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(componenttree.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(componenttree, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
var Paths;
(function(Paths2) {
  Paths2["BestMatch"] = "/best-match";
  Paths2["SkinCare"] = "/skin-care";
  Paths2["GiftSelection"] = "/gift-selection";
  Paths2["MakeupTransfer"] = "/makeup-transfer";
  Paths2["BeautyAdvisor"] = "/beauty-advisor";
  Paths2["BookADemo"] = "/book-a-demo";
  Paths2["Terms"] = "/terms";
  Paths2["ImageSource"] = "/image-source";
  Paths2["FaceAnalysis"] = "/face-analysis";
  Paths2["Empty"] = "";
})(Paths || (Paths = {}));
const routerPath = writable$1({
  current: Paths.Empty,
  previous: Paths.Empty
});
const dataPath = writable$1(Paths.Empty);
const loading = writable$1(false);
const isDataPathChanged = () => [Paths.BestMatch, Paths.GiftSelection, Paths.SkinCare].includes(get_store_value(routerPath).current) && get_store_value(routerPath).current !== get_store_value(dataPath);
const updateDataPath = () => dataPath.set(get_store_value(routerPath).current);
function instance$4($$self, $$props, $$invalidate) {
  let components;
  let $routerPath, $$unsubscribe_routerPath = noop$1;
  let $history;
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(8, $routerPath = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_routerPath());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Router", slots, ["default"]);
  let { routes } = $$props;
  let { initialPath = "" } = $$props;
  let { context = void 0 } = $$props;
  const ctx = context;
  const resolve2 = createResolve(routes);
  const history = createMemoryHistory(normalize(initialPath));
  validate_store(history, "history");
  component_subscribe($$self, history, (value) => $$invalidate(9, $history = value));
  const dispatch2 = createEventDispatcher();
  let location;
  let route;
  let pending = Promise.resolve();
  setRouter(history);
  $$self.$$.on_mount.push(function() {
    if (routes === void 0 && !("routes" in $$props || $$self.$$.bound[$$self.$$.props["routes"]])) {
      console_1$1.warn("<Router> was created without expected prop 'routes'");
    }
  });
  const writable_props = ["routes", "initialPath", "context"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console_1$1.warn(`<Router> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(2, routes = $$props2.routes);
    if ("initialPath" in $$props2)
      $$invalidate(3, initialPath = $$props2.initialPath);
    if ("context" in $$props2)
      $$invalidate(4, context = $$props2.context);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    get: get_store_value,
    writable: writable$1,
    Paths,
    routerPath,
    dataPath,
    loading,
    isDataPathChanged,
    updateDataPath,
    createEventDispatcher,
    tick,
    ComponentTree,
    setRouter,
    createMemoryHistory,
    createResolve,
    normalize,
    routes,
    initialPath,
    context,
    ctx,
    resolve: resolve2,
    history,
    dispatch: dispatch2,
    location,
    route,
    pending,
    components,
    $routerPath,
    $history
  });
  $$self.$inject_state = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(2, routes = $$props2.routes);
    if ("initialPath" in $$props2)
      $$invalidate(3, initialPath = $$props2.initialPath);
    if ("context" in $$props2)
      $$invalidate(4, context = $$props2.context);
    if ("location" in $$props2)
      $$invalidate(5, location = $$props2.location);
    if ("route" in $$props2)
      $$invalidate(6, route = $$props2.route);
    if ("pending" in $$props2)
      $$invalidate(7, pending = $$props2.pending);
    if ("components" in $$props2)
      $$invalidate(0, components = $$props2.components);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$history*/
    512) {
      $$invalidate(5, location = $history.location);
    }
    if ($$self.$$.dirty & /*pending, location*/
    160) {
      $$invalidate(7, pending = pending.then(() => tick()).then(() => resolve2(location.pathname, { ...ctx, location })).then((resolved) => {
        if (!resolved)
          return console.warn(`A route for path "${location.pathname}" is not found.`);
        if ("redirect" in resolved)
          return history.replace(resolved.redirect);
        $$invalidate(6, route = resolved);
      }));
    }
    if ($$self.$$.dirty & /*route*/
    64) {
      $$invalidate(0, components = route ? route.components : []);
    }
    if ($$self.$$.dirty & /*route, $routerPath*/
    320) {
      {
        dispatch2("change", route);
        const currentPath = $routerPath.current;
        set_store_value(
          routerPath,
          $routerPath = {
            previous: currentPath,
            current: (route == null ? void 0 : route.pathname) || Paths.Empty
          },
          $routerPath
        );
      }
    }
  };
  return [
    components,
    history,
    routes,
    initialPath,
    context,
    location,
    route,
    pending,
    $routerPath,
    $history,
    slots,
    $$scope
  ];
}
class Router extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal$1, { routes: 2, initialPath: 3, context: 4 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Router",
      options,
      id: create_fragment$4.name
    });
  }
  get routes() {
    throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set routes(value) {
    throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get initialPath() {
    throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set initialPath(value) {
    throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get context() {
    throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set context(value) {
    throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const key$1 = Symbol("layout");
const setContext$1 = (ctx) => setContext$2(key$1, ctx);
const getContext$1 = () => getContext$2(key$1);
const file$2 = "src/lib/elements/Modal/Modal.svelte";
function add_css$2(target) {
  append_styles(target, "svelte-1tveb4f", 'dialog.svelte-1tveb4f{position:fixed;top:0px;left:0px;z-index:9999999;display:flex;height:100%;width:100%;-webkit-appearance:none;appearance:none;align-items:center;justify-content:center;background-color:rgb(0 0 0 / 0.4);padding:0px\n}@media(min-width: 1280px){dialog.svelte-1tveb4f{padding:40px\n    }}dialog.svelte-1tveb4f button.close-button{position:absolute;top:12px;right:12px;z-index:20\n}@media(min-width: 768px){dialog.svelte-1tveb4f button.close-button{top:8px;right:8px\n    }}dialog.svelte-1tveb4f:not([data-open="true"]){display:none\n}dialog.svelte-1tveb4f>:first-child{overflow:hidden;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))\n}');
}
function create_if_block$1(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      class: "close-button",
      icon: "close",
      variant: "overlay"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*close*/
    ctx[1]
  );
  const block = {
    c: function create2() {
      create_component(iconbutton.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: noop$1,
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(19:2) {#if showClose}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let dialog;
  let t;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let if_block = (
    /*showClose*/
    ctx[2] && create_if_block$1(ctx)
  );
  let dialog_levels = [
    /*$$restProps*/
    ctx[3],
    { "data-open": (
      /*isOpen*/
      ctx[0]
    ) }
  ];
  let dialog_data = {};
  for (let i = 0; i < dialog_levels.length; i += 1) {
    dialog_data = assign(dialog_data, dialog_levels[i]);
  }
  const block = {
    c: function create2() {
      dialog = element("dialog");
      if (default_slot)
        default_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      set_attributes(dialog, dialog_data);
      toggle_class(dialog, "svelte-1tveb4f", true);
      add_location(dialog, file$2, 16, 0, 627);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, dialog, anchor);
      if (default_slot) {
        default_slot.m(dialog, null);
      }
      append_dev(dialog, t);
      if (if_block)
        if_block.m(dialog, null);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*showClose*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*showClose*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(dialog, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      set_attributes(dialog, dialog_data = get_spread_update(dialog_levels, [
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3],
        (!current || dirty & /*isOpen*/
        1) && { "data-open": (
          /*isOpen*/
          ctx2[0]
        ) }
      ]));
      toggle_class(dialog, "svelte-1tveb4f", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(dialog);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  let showClose;
  const omit_props_names = ["isOpen", "open", "close"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $routerPath;
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(5, $routerPath = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Modal", slots, ["default"]);
  let { isOpen = false } = $$props;
  const open = () => $$invalidate(0, isOpen = true);
  const close = () => $$invalidate(0, isOpen = false);
  const dispatch2 = createEventDispatcher();
  const ctx = getContext$1();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("isOpen" in $$new_props)
      $$invalidate(0, isOpen = $$new_props.isOpen);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    routerPath,
    isMobileDevice,
    getContext: getContext$1,
    IconButton,
    isOpen,
    open,
    close,
    dispatch: dispatch2,
    ctx,
    showClose,
    $routerPath
  });
  $$self.$inject_state = ($$new_props) => {
    if ("isOpen" in $$props)
      $$invalidate(0, isOpen = $$new_props.isOpen);
    if ("showClose" in $$props)
      $$invalidate(2, showClose = $$new_props.showClose);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$routerPath*/
    32) {
      $$invalidate(2, showClose = (!isMobileDevice() || !ctx.routes.map(({ path }) => path).includes($routerPath.current)) && !ctx.demo);
    }
    if ($$self.$$.dirty & /*isOpen*/
    1) {
      dispatch2(isOpen ? "open" : "close");
    }
  };
  return [isOpen, close, showClose, $$restProps, open, $routerPath, $$scope, slots];
}
class Modal extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal$1, { isOpen: 0, open: 4, close: 1 }, add_css$2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Modal",
      options,
      id: create_fragment$3.name
    });
  }
  get isOpen() {
    throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isOpen(value) {
    throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get open() {
    return this.$$.ctx[4];
  }
  set open(value) {
    throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get close() {
    return this.$$.ctx[1];
  }
  set close(value) {
    throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const create$7 = () => {
  const { set, update: update2, subscribe: subscribe2 } = writable$1(null);
  const isEmpty2 = () => !get_store_value({ subscribe: subscribe2 });
  const isWebcam = () => {
    var _a;
    return ((_a = get_store_value({ subscribe: subscribe2 })) == null ? void 0 : _a.type) === "webcam";
  };
  const isPhoto = () => {
    var _a;
    return ((_a = get_store_value({ subscribe: subscribe2 })) == null ? void 0 : _a.type) === "photo";
  };
  return {
    set,
    update: update2,
    subscribe: subscribe2,
    isEmpty: isEmpty2,
    isWebcam,
    isPhoto
  };
};
const source = create$7();
const percent = writable$1(0);
const step = writable$1(0);
const completed = derived(percent, ($percent) => $percent === 100);
const result = writable$1(null);
const isEmpty = () => !get_store_value(completed);
const clear = () => {
  result.set(null);
  step.set(0);
  percent.set(0);
};
const sca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear,
  completed,
  isEmpty,
  percent,
  result,
  step
}, Symbol.toStringTag, { value: "Module" }));
let _isGift = false;
let _isSourceChanged = false;
const setGift = (value) => _isGift = value;
const isGift = () => _isGift;
const setSourceChanged = (value) => _isSourceChanged = value;
const isSourceChanged = () => _isSourceChanged;
const isAccepted = () => Boolean(localStorage.getItem("terms-of-use"));
const accept = () => localStorage.setItem("terms-of-use", "true");
const terms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accept,
  isAccepted
}, Symbol.toStringTag, { value: "Module" }));
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const demoEmitter = mitt();
const showAd = (detail) => demoEmitter.emit("showAd", detail);
const pickADate = () => demoEmitter.emit("pickADate");
const onDemoEvent = (event, handler) => demoEmitter.on(event, handler);
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
const subscriber_queue = [];
function writable(value, start2 = noop) {
  let stop2;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop2) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop2 = start2(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop2();
        stop2 = null;
      }
    };
  }
  return { set, update: update2, subscribe: subscribe2 };
}
function undoable(initial, capacity, accept2) {
  let states = [initial];
  let inAction = true;
  let index2 = 0;
  const store = writable(initial);
  if (typeof accept2 !== "function") {
    accept2 = () => true;
  }
  store.subscribe((newValue) => {
    if (!inAction && accept2(newValue)) {
      if (states.length > index2 + 1) {
        states = states.slice(0, index2 + 1);
      }
      states.push(newValue);
      index2++;
      if (capacity > 1 && states.length > capacity) {
        states.shift();
        index2 = states.length;
      }
    }
  });
  inAction = false;
  const undo = () => {
    inAction = true;
    if (index2 > 0) {
      index2--;
    }
    store.set(states[index2]);
    inAction = false;
  };
  const redo = () => {
    inAction = true;
    if (index2 < states.length - 1) {
      index2++;
    }
    store.set(states[index2]);
    inAction = false;
  };
  const canUndo = () => {
    return index2 > 0;
  };
  const canRedo = () => {
    return index2 < states.length - 1;
  };
  const reset = (clear2) => {
    inAction = true;
    index2 = 0;
    store.set(states[index2]);
    if (clear2) {
      states = states.slice(0, 1);
    }
    inAction = false;
  };
  const length = () => {
    return states.length;
  };
  return {
    subscribe: store.subscribe,
    set: store.set,
    update: store.update,
    undo,
    redo,
    canUndo,
    canRedo,
    reset,
    length
  };
}
let sessionId;
let customerId;
const trackedProducts = /* @__PURE__ */ new Set();
const billingInit = (id2) => {
  customerId = id2;
  fetch(`${"https://dev-billing-svc.tintvto.com"}/v1/customer/session?id=${customerId}`, {
    method: "POST"
  }).then((res) => res.json()).then((data2) => sessionId = data2);
};
const billingTrackProduct = async (itemId) => {
  if (!customerId) {
    return;
  }
  if (!trackedProducts.has(itemId)) {
    trackedProducts.add(itemId);
    console.debug("[billing] try on product", itemId);
    const hasVto = await fetch(`${"https://dev-billing-svc.tintvto.com"}/v1/customer/has-vto`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        customerId: parseInt(customerId),
        sessionId
      })
    }).then((res) => res.json());
    if (hasVto) {
      await fetch(`${"https://dev-billing-svc.tintvto.com"}/v1/customer/consume-vto`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          customerId: parseInt(customerId),
          sessionId,
          itemId: parseInt(itemId)
        })
      }).then((res) => res.json());
      return true;
    } else {
      return false;
    }
  }
};
const removeKeyRecursive = (obj, keyToRemove) => {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === "object") {
        obj[prop] = removeKeyRecursive(obj[prop], keyToRemove);
      } else if (prop === keyToRemove) {
        delete obj[prop];
      }
    }
  }
  return obj;
};
const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }
  const copiedObject = {};
  for (const key2 in obj) {
    if (obj.hasOwnProperty(key2)) {
      copiedObject[key2] = deepCopy(obj[key2]);
    }
  }
  return copiedObject;
};
const removeProductIds = (products2, prop = "id") => products2.map((product) => removeKeyRecursive(product, prop));
const isEqual = (x, y) => {
  var _a, _b;
  const regionX = (_a = x.skus[0]) == null ? void 0 : _a.vto.region;
  const regionY = (_b = y.skus[0]) == null ? void 0 : _b.vto.region;
  return regionX === regionY;
};
const create$6 = ({ multiple = true } = {}) => {
  const { subscribe: subscribe2, set, update: update2, undo, redo, canUndo, canRedo, reset } = undoable([]);
  const emitter = mitt();
  const add = (...products2) => {
    update2(($products) => {
      products2.forEach(async ({ id: id2 }) => await billingTrackProduct(id2));
      if (!multiple || products2.some(({ skus }) => {
        var _a, _b;
        return Boolean((_b = (_a = skus[0]) == null ? void 0 : _a.vto) == null ? void 0 : _b.skincare);
      }))
        return products2.slice(0, 1);
      const toExclude = new Set(
        $products.filter((prev) => products2.find((next) => isEqual(prev, next)))
      );
      return $products.filter((p) => !toExclude.has(p)).concat(products2);
    });
    emitter.emit("add", removeProductIds(deepCopy(products2)));
  };
  const replace = (...products2) => {
    set(products2);
    products2.forEach(async ({ id: id2 }) => await billingTrackProduct(id2));
    emitter.emit("replace", removeProductIds(deepCopy(products2)));
  };
  const remove = (...products2) => {
    update2(($products) => {
      const toExclude = new Set(products2.map((p) => p.id));
      return $products.filter((p) => !toExclude.has(p.id));
    });
    emitter.emit("remove", removeProductIds(deepCopy(products2)));
  };
  const clear2 = () => reset(true);
  const on = (event, handler = () => null) => {
    emitter.on(event, handler);
    return () => {
      emitter.off(event, handler);
    };
  };
  const productsQueue = [];
  const updateQueue = (...products2) => products2.forEach((product) => productsQueue.push(product));
  const applyQueue = () => {
    if (productsQueue.length)
      replace(...productsQueue);
  };
  const clearQueue = () => {
    while (productsQueue.length)
      productsQueue.pop();
  };
  return {
    subscribe: subscribe2,
    add,
    replace,
    remove,
    clear: clear2,
    undo,
    redo,
    canUndo,
    canRedo,
    updateQueue,
    applyQueue,
    clearQueue,
    on
  };
};
const create$5 = () => {
  const { subscribe: subscribe2, update: update2 } = writable$1([]);
  const emitter = mitt();
  const add = (...products2) => {
    const toInclude = products2.map((p) => p.id);
    update2((products22) => [...products22, ...toInclude]);
    emitter.emit("add", removeProductIds(deepCopy(products2)));
  };
  const remove = (...products2) => {
    const toExclude = new Set(products2.map((p) => p.id));
    update2((products22) => products22.filter((p) => !toExclude.has(p)));
    emitter.emit("remove", removeProductIds(deepCopy(products2)));
  };
  const redirect = () => {
    emitter.emit("redirect");
  };
  const on = (event, handler = () => null) => {
    emitter.on(event, handler);
    return () => {
      emitter.off(event, handler);
    };
  };
  return {
    subscribe: subscribe2,
    add,
    remove,
    redirect,
    on
  };
};
const types$1 = writable$1([]);
const items$1 = writable$1([]);
const data$3 = { types: types$1, items: items$1 };
const CategoryNameByType = {
  POPULAR: "Popular"
};
const create$4 = (appliedProducts2) => {
  const activeCategory = writable$1();
  const categories = derived([types$1, activeCategory], ([$types, $active]) => {
    return $types.map((type) => ({
      type,
      name: CategoryNameByType[type],
      active: type === $active
    }));
  });
  const appliedLook = derived([items$1, appliedProducts2], ([$items, $appliedProducts]) => {
    var _a;
    const applied = new Set($appliedProducts.map((p) => p.id));
    return (_a = $items.find((l) => l.products.products.every((p) => applied.has(p.id)))) == null ? void 0 : _a.id;
  });
  const looks2 = derived(
    [items$1, appliedLook],
    ([$items, $appliedLook]) => {
      return $items.map((look) => ({
        ...look,
        active: look.id === $appliedLook
      }));
    }
  );
  const { subscribe: subscribe2 } = derived(
    [categories, looks2, appliedLook],
    ([$categories, $items, $appliedLook]) => ({
      categories: $categories,
      items: $items,
      appliedLook: $items.find(({ id: id2 }) => id2 === $appliedLook)
    })
  );
  const changeCategory = ({ type }) => activeCategory.set(type);
  const select = (look) => appliedProducts2.replace(...look.products.products);
  const clear2 = (look) => appliedProducts2.remove(...look.products.products);
  const unsubscribe = types$1.subscribe(($types) => {
    if (!$types.length)
      return;
    const active2 = get_store_value(activeCategory);
    if (!active2)
      activeCategory.set($types[0]);
    setTimeout(unsubscribe);
  });
  return {
    subscribe: subscribe2,
    changeCategory,
    select,
    clear: clear2
  };
};
const brandFilters = writable$1([]);
const data$2 = { brandFilters };
const create$3 = () => {
  const predicate = writable$1({ brand: "all" });
  const brands = derived(
    [brandFilters, predicate],
    ([$filters, $predicate]) => $filters.map((filter2) => ({
      ...filter2,
      active: ($predicate == null ? void 0 : $predicate.brand) === filter2.slug
    }))
  );
  const { subscribe: subscribe2 } = derived([brands, predicate], ([$brands, $predicate]) => ({
    brands: $brands,
    predicate: $predicate
  }));
  const filter = (by) => predicate.set(by);
  const filterByBrand = (brand) => filter({ brand: brand.slug });
  return {
    subscribe: subscribe2,
    filter,
    filterByBrand
  };
};
var english = /* @__PURE__ */ ((english2) => {
  english2["bestMatch"] = "Best Match";
  english2["giftSelection"] = "Gift selection";
  english2["cart"] = "Cart";
  english2["tipsForVirtualTryOn"] = "Tips for virtual try-on";
  english2["tipsForPhoto"] = "Tips for photo";
  english2["faceUncovered"] = "Face uncovered";
  english2["headInTheFrame"] = "Head in the frame";
  english2["lookStraight"] = "Look straight";
  english2["evenLighting"] = "Even lighting";
  english2["liveCamera"] = "Live camera";
  english2["addPhoto"] = "Add photo";
  english2["dragItHere"] = "Drag it here";
  english2["uploadPhoto"] = "Upload photo";
  english2["dropFileHereToUpload"] = "or drop file here to upload";
  english2["faceAnalysis"] = "Face analysis";
  english2["putYourFaceInTheFrame"] = "Put your face in the frame";
  english2["weWillAnalyzeYourFaceAndSuggestPersonalizedProducts"] = "We will analyze your face and suggest personalized products";
  english2["pleaseDontMove"] = "Please, don’t move";
  english2["faceNotDetected"] = "Face not detected";
  english2["notEnoughLight"] = "Not enough light";
  english2["lightTheFaceFromTheFront"] = "Light the face from the front";
  english2["analyzing"] = "Analyzing";
  english2["skinType"] = "Skin type";
  english2["skinTone"] = "Skin tone";
  english2["colorType"] = "Color type";
  english2["celebritiesColorType"] = "Color type";
  english2["facialFeatures"] = "Facial features";
  english2["personalizedProductRecommendationsAreReady"] = "Personalized product recommendations are ready.";
  english2["analysisFinished"] = "Analysis finished";
  english2["bestLookForYour"] = "Best looks for your type";
  english2["bestLookForYou"] = "Best looks for you";
  english2["bestForYourType"] = "Best for your type";
  english2["typeWillEnjoy"] = "type will enjoy";
  english2["recommendedForYou"] = "recommended for you";
  english2["recommended"] = "recommended";
  english2["spring"] = "Spring";
  english2["summer"] = "Summer";
  english2["autumn"] = "Autumn";
  english2["winter"] = "Winter";
  english2["all"] = "All";
  english2["appliedProducts"] = "Applied products";
  english2["products"] = "products";
  english2["goToCart"] = "Go to cart";
  english2["addAllToCart"] = "Add all to cart";
  english2["poweredBy"] = "Powered by";
  english2["pleaseSelectItems"] = "Please, select items";
  english2["CompleteLookWith"] = "Complete look with";
  english2["bbAndCCcream"] = "BB & CC cream";
  english2["blush"] = "Blush";
  english2["cheeks"] = "Cheeks";
  english2["concealer"] = "Concealer";
  english2["contour"] = "Contour";
  english2["eyebrowPencil"] = "Eyebrow pencil";
  english2["eyeliner"] = "Eyeliner";
  english2["eyeshadow"] = "Eyeshadow";
  english2["eyesAndBrows"] = "Eyes and brows";
  english2["foundation"] = "Foundation";
  english2["lipGloss"] = "Lip gloss";
  english2["highlighter"] = "Highlighter";
  english2["lipliner"] = "Lipliner";
  english2["lipstick"] = "Lipstick";
  english2["mascara"] = "Mascara";
  english2["forYou"] = "For you";
  english2["best"] = "Best";
  english2["hide"] = "hide";
  english2["show"] = "show";
  english2["productAddedToCart"] = "Product added to cart";
  english2["addedToCart"] = "Added to cart";
  english2["addToCart"] = "Add to cart";
  english2["clearAll"] = "Clear all";
  english2["delete"] = "Delete";
  english2["product"] = "product";
  english2["clear"] = "clear";
  english2["apply"] = "apply";
  english2["applied"] = "Applied";
  english2["cartApplied"] = "Applied";
  english2["included"] = "Included";
  english2["closeApp"] = "Close app";
  english2["termsOfUse"] = "Terms of use";
  english2["agreeAndContinue"] = "Agree and continue";
  english2["weInformYouThatYouAreAboutToActivateTheVirtualTryOn"] = "We inform you that you are about to activate the virtual try-on feature through the device's camera. We will not store your facial data or attempt to identify you. Your image will not be saved, stored, shared or used for any purpose other than to allow you to use the feature. All processing of your image will take place only on your personal device.";
  english2["byClickingOnLiveModeOrSelectingAPhoto"] = "By clicking on live mode or selecting a photo, you agree to the terms of use.";
  english2["personalGuidanceForType"] = "Personal guidance for type";
  english2["yourCharacteristics"] = "Your characteristics";
  english2["skinTones"] = "Skin tones";
  english2["faceTones"] = "Face tones";
  english2["browsTones"] = "Brows tones";
  english2["hairTones"] = "Hair tones";
  english2["eyeTones"] = "Eye tones";
  english2["bestColors"] = "Best colors";
  english2["hair"] = "Hair";
  english2["jewelry"] = "Jewelry";
  english2["clothes"] = "Clothes";
  english2["shoes"] = "Shoes";
  english2["appearanceType"] = "Appearance type";
  english2["celebritiesWithThe"] = "Celebrities with the";
  english2["yourAppearanceIsFullOfContrastingShades"] = "Your appearance is full of contrasting shades. So it’s better to combine vibrant colors with neutral ones, like purple and pale gray.";
  english2["yourAppearanceIsFullOfBrightAndFreshColorsOfTheSpringSun"] = "Your appearance is full of bright and fresh colors of the spring sun. To bring out your charm, stick with warm and vibrant hues";
  english2["naturePaintedYourLookInSoftPastelColors"] = "Nature painted your look in soft, pastel colors. Flatter your features with pale, grayish, and blue-based hues.";
  english2["justLikeAutumnLeavesYourColorsAreRichAndWarm"] = "Just like autumn leaves, your colors are rich and warm. Choose golden, brown, and red hues to highlight your charming look.";
  english2["giftTitle"] = "Pick up a gift for your friend";
  english2["giftTip"] = "Upload a photo with the person for whom you’re choosing a gift.";
  english2["giftAddPhoto"] = "Add a photo";
  english2["analysis"] = "Analysis";
  english2["pickUpAGift"] = "Pick up a gift";
  english2["continueWithUploadedPhoto"] = "Continue with uploaded photo";
  english2["giftSelectionFinished"] = "Gift selection finished.";
  return english2;
})(english || {});
var portuguese = /* @__PURE__ */ ((portuguese2) => {
  portuguese2["bestMatch"] = "Melhor match";
  portuguese2["tipsForVirtualTryOn"] = "Dicas para descobrir o seu tom​ ideal";
  portuguese2["faceUncovered"] = "Prenda o cabelo​ e dispense acessórios";
  portuguese2["headInTheFrame"] = "Centralize o rosto na tela​";
  portuguese2["lookStraight"] = "Olhe para frente​";
  portuguese2["evenLighting"] = "Utilize luz natural​";
  portuguese2["liveCamera"] = "Abrir a câmera​";
  portuguese2["addPhoto"] = "Selecionar foto​";
  portuguese2["dragItHere"] = "ou solte seu arquivo aqui";
  portuguese2["uploadPhoto"] = "Upload da foto​";
  portuguese2["faceAnalysis"] = "Análise do rosto";
  portuguese2["putYourFaceInTheFrame"] = "Centralize seu rosto no quadro";
  portuguese2["weWillAnalyzeYourFaceAndSuggestPersonalizedProducts"] = "Nós vamos analisar o seu rosto e sugerir produtos personalizados";
  portuguese2["pleaseDontMove"] = "Por favor, não se mova";
  portuguese2["faceNotDetected"] = "Rosto não detectado";
  portuguese2["notEnoughLight"] = "Iluminação insuficiente";
  portuguese2["lightTheFaceFromTheFront"] = "Garanta que seu rosto está bem iluminado";
  portuguese2["analyzing"] = "Analisando";
  portuguese2["skinType"] = "Tipo de pele";
  portuguese2["skinTone"] = "Tom de pele";
  portuguese2["colorType"] = "Fundo de cor";
  portuguese2["celebritiesColorType"] = "Fundo de cor";
  portuguese2["facialFeatures"] = "Características faciais";
  portuguese2["personalizedProductRecommendationsAreReady"] = "Os produtos recomendados para você estão disponíveis";
  portuguese2["analysisFinished"] = "Análise concluída";
  portuguese2["bestLookForYour"] = "Sugestões de look para você";
  portuguese2["bestLookForYou"] = "Sugestões de look para você";
  portuguese2["bestForYourType"] = "Melhor para o seu tipo";
  portuguese2["recommendedForYou"] = "recomendado para si";
  portuguese2["recommended"] = "recomendado";
  portuguese2["spring"] = "Primavera";
  portuguese2["summer"] = "Verão";
  portuguese2["autumn"] = "Outono";
  portuguese2["winter"] = "Inverno";
  portuguese2["all"] = "todos";
  portuguese2["appliedProducts"] = "Produtos selecionados​";
  portuguese2["goToCart"] = "Finalizar pedido​";
  portuguese2["addAllToCart"] = "Adicionar à sacola";
  portuguese2["poweredBy"] = "Desenvolvido por";
  portuguese2["pleaseSelectItems"] = "Por favor, selecione um produto";
  portuguese2["CompleteLookWith"] = "Complete o look com";
  portuguese2["bbAndCCcream"] = "BB & CC cream";
  portuguese2["blush"] = "Blush";
  portuguese2["cheeks"] = "Bochechas";
  portuguese2["concealer"] = "Corretivo líquido​";
  portuguese2["contour"] = "Contorno";
  portuguese2["eyebrowPencil"] = "Lápis para sobrancelha";
  portuguese2["eyeliner"] = "Delineador";
  portuguese2["eyeshadow"] = "Sombra";
  portuguese2["eyesAndBrows"] = "Olhos e sobrancelhas";
  portuguese2["foundation"] = "Base líquida";
  portuguese2["lipGloss"] = "Gloss labial";
  portuguese2["highlighter"] = "Iluminador";
  portuguese2["lipliner"] = "Delineador labial";
  portuguese2["lipstick"] = "Batom";
  portuguese2["mascara"] = "Rímel";
  portuguese2["forYou"] = "Para você";
  portuguese2["hide"] = "ocultar";
  portuguese2["show"] = "exibir";
  portuguese2["productAddedToCart"] = "Produtos adicionados​";
  portuguese2["addedToCart"] = "Excluir da sacola​";
  portuguese2["addToCart"] = "Adicionar à sacola​";
  portuguese2["clearAll"] = "Limpar seleção";
  portuguese2["delete"] = "Excluir";
  portuguese2["products"] = "produtos";
  portuguese2["product"] = "produto";
  portuguese2["clear"] = "limpar";
  portuguese2["apply"] = "aplicar";
  portuguese2["applied"] = "Aplicado";
  portuguese2["included"] = "Incluído";
  portuguese2["closeApp"] = "Fechar aplicação";
  portuguese2["termsOfUse"] = "Termos de uso​";
  portuguese2["agreeAndContinue"] = "Concordar e continuar​";
  portuguese2["weInformYouThatYouAreAboutToActivateTheVirtualTryOn"] = "Informamos que você está prestes a ativar o recurso de teste virtual através da câmera do seu computador ou celular. Não armazenaremos seus dados faciais nem tentaremos identificá-lo. Sua imagem não será salva, armazenada, compartilhada ou usada para qualquer finalidade que não seja escolher o seu tom ideal de base ou corretivo. Todo o processamento da sua imagem ocorrerá apenas no seu dispositivo pessoal.";
  portuguese2["byClickingOnLiveModeOrSelectingAPhoto"] = "Ao abrir a câmera ou selecionar uma foto, você concorda com os termos de uso.";
  portuguese2["personalGuidanceForType"] = "Recomendações pessoais por tipo";
  portuguese2["yourCharacteristics"] = "Suas características";
  portuguese2["skinTones"] = "Tons de pele";
  portuguese2["hairTones"] = "Tons de cabelo";
  portuguese2["eyeTones"] = "Tons de cor de olho";
  portuguese2["faceTones"] = "Tons de rosto";
  portuguese2["browsTones"] = "Tons de sobrancelhas";
  portuguese2["bestColors"] = "Melhores cores";
  portuguese2["hair"] = "Cabelo";
  portuguese2["jewelry"] = "Joias";
  portuguese2["clothes"] = "Roupas";
  portuguese2["shoes"] = "Sapatos";
  portuguese2["appearanceType"] = "Tipo de aparência";
  portuguese2["celebritiesWithThe"] = "Celebridades com o";
  portuguese2["yourAppearanceIsFullOfContrastingShades"] = "Sua aparência tem muitos tons contrastantes. Por isso, é melhor combinar cores vibrantes com neutras, como roxo e cinza claro";
  portuguese2["yourAppearanceIsFullOfBrightAndFreshColorsOfTheSpringSun"] = "Sua aparência está repleta de cores vivas e frescas do sol da primavera. Para realçar o seu charme, opte por tons quentes e vibrantes";
  portuguese2["naturePaintedYourLookInSoftPastelColors"] = "A natureza pintou seu visual com cores suaves e pastéis. Valorize suas características com tons delicados e suaves, acinzentados e com base em azul";
  portuguese2["justLikeAutumnLeavesYourColorsAreRichAndWarm"] = "Assim como as folhas de outono, suas cores são ricas e quentes. Escolha tons dourados, marrons e vermelhos para realçar seu visual charmoso.";
  return portuguese2;
})(portuguese || {});
var lithuanian = /* @__PURE__ */ ((lithuanian2) => {
  lithuanian2["bestMatch"] = "Rekomenduojama Jums";
  lithuanian2["giftSelection"] = "Dovanos pasirinkimas";
  lithuanian2["cart"] = "Krepšelis";
  lithuanian2["tipsForVirtualTryOn"] = "Patarimai virtualiam makiažo bandymui";
  lithuanian2["tipsForPhoto"] = "Patarimai fotografuojant";
  lithuanian2["faceUncovered"] = "Atidenkite veidą";
  lithuanian2["headInTheFrame"] = "Laikykite galvą rėmelyje";
  lithuanian2["lookStraight"] = "Žiūrėkite tiesiai";
  lithuanian2["evenLighting"] = "Tolygus apšvietimas";
  lithuanian2["liveCamera"] = "Aktyvuoti kamerą";
  lithuanian2["addPhoto"] = "Įkelti nuotrauką";
  lithuanian2["dragItHere"] = "Nutempkite čia";
  lithuanian2["uploadPhoto"] = "Įkelti nuotrauką";
  lithuanian2["dropFileHereToUpload"] = "nutempkite failą, kad įkeltumėte";
  lithuanian2["faceAnalysis"] = "Veido analizė";
  lithuanian2["putYourFaceInTheFrame"] = "Laikykite galvą rėmelyje";
  lithuanian2["weWillAnalyzeYourFaceAndSuggestPersonalizedProducts"] = "Išanalizuosime Jūsų veidą ir pasiūlysime individualius produktus";
  lithuanian2["pleaseDontMove"] = "Nejudėkite";
  lithuanian2["faceNotDetected"] = "Veidas neaptiktas";
  lithuanian2["notEnoughLight"] = "Nepakanka apšvietimo";
  lithuanian2["lightTheFaceFromTheFront"] = "Apšvieskite veidą iš priekio";
  lithuanian2["analyzing"] = "Analizuojama";
  lithuanian2["skinType"] = "Odos tipas";
  lithuanian2["skinTone"] = "Odos atspalvis";
  lithuanian2["colorType"] = "Spalvos tipas";
  lithuanian2["facialFeatures"] = "Veido bruožai";
  lithuanian2["personalizedProductRecommendationsAreReady"] = "Asmeninės produktų rekomendacijos yra paruoštos.";
  lithuanian2["analysisFinished"] = "Analizė baigta.";
  lithuanian2["bestLookForYour"] = "Jūsų spalvinis tipas";
  lithuanian2["bestLookForYou"] = "Geriausia looks for you";
  lithuanian2["bestForYourType"] = "Geriausia Jūsų tipui";
  lithuanian2["typeWillEnjoy"] = "spalviniam tipui patiks ";
  lithuanian2["recommendedForYou"] = "Rekomenduojama Jums";
  lithuanian2["recommended"] = "Rekomenduojama";
  lithuanian2["spring"] = "Pavasaris";
  lithuanian2["summer"] = "Vasara";
  lithuanian2["autumn"] = "Ruduo";
  lithuanian2["winter"] = "Žiema";
  lithuanian2["all"] = "Visi";
  lithuanian2["appliedProducts"] = "Pritaikyti produktai";
  lithuanian2["products"] = "produktai";
  lithuanian2["goToCart"] = "Eiti į krepšelį";
  lithuanian2["addAllToCart"] = "Įdėti į krepšelį";
  lithuanian2["poweredBy"] = "Sukurtas";
  lithuanian2["pleaseSelectItems"] = "Prašome pasirinkti prekes";
  lithuanian2["CompleteLookWith"] = "Produktų katalogas";
  lithuanian2["bbAndCCcream"] = "BB ir CC kremai";
  lithuanian2["blush"] = "Skaistalai";
  lithuanian2["cheeks"] = "Skruostai";
  lithuanian2["concealer"] = "Korektorius";
  lithuanian2["contour"] = "Kontūras";
  lithuanian2["eyebrowPencil"] = "Antakių priemonės";
  lithuanian2["eyeliner"] = "Akių pieštukas";
  lithuanian2["eyeshadow"] = "Akių šešėliai";
  lithuanian2["eyesAndBrows"] = "Akys ir antakiai";
  lithuanian2["foundation"] = "Pudra";
  lithuanian2["lipGloss"] = "Lūpų blizgis";
  lithuanian2["highlighter"] = "Highlighter'iai";
  lithuanian2["lipliner"] = "Lūpų pieštukas";
  lithuanian2["lipstick"] = "Lūpų dažai";
  lithuanian2["mascara"] = "Tušas";
  lithuanian2["forYou"] = "Jums";
  lithuanian2["best"] = "Tinka";
  lithuanian2["hide"] = "Paslėpti";
  lithuanian2["show"] = "Rodyti";
  lithuanian2["productAddedToCart"] = "Prekė įdėta į krepšelį";
  lithuanian2["addedToCart"] = "Įdėta į krepšelį";
  lithuanian2["addToCart"] = "Į krepšelį";
  lithuanian2["clearAll"] = "Išvalyti viską";
  lithuanian2["delete"] = "Ištrinti";
  lithuanian2["product"] = "product";
  lithuanian2["clear"] = "Išvalyti";
  lithuanian2["apply"] = "Taikyti";
  lithuanian2["applied"] = "Taikoma";
  lithuanian2["cartApplied"] = "Pritaikyti";
  lithuanian2["included"] = "Įtraukta";
  lithuanian2["closeApp"] = "Uždaryti";
  lithuanian2["termsOfUse"] = "Naudojimo sąlygos";
  lithuanian2["agreeAndContinue"] = "Sutikti ir tęsti";
  lithuanian2["weInformYouThatYouAreAboutToActivateTheVirtualTryOn"] = "Informuojame, kad ketinate aktyvuoti virtualaus matavimosi funkciją per įrenginio kamerą. Mes nesaugosime jūsų veido duomenų ir nebandysime jūsų identifikuoti. Jūsų vaizdas nebus išsaugomas, saugomas, bendrinamas ar naudojamas jokiais kitais tikslais, išskyrus tam, kad galėtumėte naudotis šia funkcija. Visas jūsų vaizdo apdorojimas vyks tik jūsų asmeniniame įrenginyje. Pasirinkdami naudoti kamerą arba įkeldami nuotrauką, sutinkate su naudojimo sąlygomis.";
  lithuanian2["byClickingOnLiveModeOrSelectingAPhoto"] = "Spustelėdami tiesioginį režimą arba pasirinkdami nuotrauką, sutinkate su naudojimo sąlygomis.";
  lithuanian2["personalGuidanceForType"] = "Asmeninis spalvinis tipas";
  lithuanian2["yourCharacteristics"] = "Jūsų savybės";
  lithuanian2["skinTones"] = "Odos atspalviai";
  lithuanian2["hairTones"] = "Plaukų tonai";
  lithuanian2["eyeTones"] = "Akių tonai";
  lithuanian2["faceTones"] = "Veido tonai";
  lithuanian2["browsTones"] = "Antakių tonai";
  lithuanian2["bestColors"] = "Geriausios spalvos";
  lithuanian2["hair"] = "Plaukai";
  lithuanian2["jewelry"] = "Papuošalai";
  lithuanian2["clothes"] = "Drabužiai";
  lithuanian2["shoes"] = "Avalynė";
  lithuanian2["appearanceType"] = "Išvaizdos tipas";
  lithuanian2["celebritiesWithThe"] = "Įžymybės su jūsų spalviniu tipu";
  lithuanian2["celebritiesColorType"] = "";
  lithuanian2["yourAppearanceIsFullOfContrastingShades"] = "Jūsų išvaizda kupina kontrastingų atspalvių. Taigi ryškias spalvas geriau derinti su neutraliomis, pavyzdžiui, violetine ir šviesiai pilka.";
  lithuanian2["yourAppearanceIsFullOfBrightAndFreshColorsOfTheSpringSun"] = "Jūsų išvaizda kupina ryškių ir gaivių pavasario saulės spalvų. Norėdami išryškinti savo žavesį, laikykitės šiltų ir ryškių atspalvių";
  lithuanian2["naturePaintedYourLookInSoftPastelColors"] = "Gamta nuspalvino jūsų išvaizdą švelniomis, pastelinėmis spalvomis. Palyginkite savo bruožus blyškiais, pilkšvais ir mėlynais atspalviais.";
  lithuanian2["justLikeAutumnLeavesYourColorsAreRichAndWarm"] = "Kaip ir rudens lapai, jūsų spalvos sodrios ir šiltos. Pasirinkite auksinius, rudus ir raudonus atspalvius, kad paryškintumėte savo žavingą išvaizdą.";
  lithuanian2["giftTitle"] = "Išrinkite dovaną savo draugei ar draugui";
  lithuanian2["giftTip"] = "Įkelkite nuotrauką žmogaus, kuriam renkate dovaną.";
  lithuanian2["giftAddPhoto"] = "Įkelti nuotrauką";
  lithuanian2["analysis"] = "Analizė";
  lithuanian2["pickUpAGift"] = "Pasirinkite dovaną";
  lithuanian2["continueWithUploadedPhoto"] = "Įkelti nuotrauką";
  lithuanian2["giftSelectionFinished"] = "Dovanos pasirinkimas baigtas.";
  return lithuanian2;
})(lithuanian || {});
const languages = {
  english,
  portuguese,
  lithuanian
};
const language = writable$1(english);
const setActiveLanguage = (_language) => language.set({
  ...languages.english,
  ...languages[_language]
});
const types = writable$1([]);
const items = writable$1([]);
const ProductNameByProductType = derived(language, ($language) => ({
  EYES: "Eyes",
  EYELINER: $language.eyeliner,
  EYESHADOW: $language.eyeshadow,
  EYELASHES: $language.mascara,
  // TODO: remove the temporary fallback when back-end fixed the type to MASCARA
  EYEBROWS: $language.eyebrowPencil,
  MASCARA: $language.mascara,
  BLUSH: $language.blush,
  FOUNDATION: $language.foundation,
  LIPSTICK: $language.lipstick,
  HIGHLIGHTER: $language.highlighter,
  CONTOUR: $language.contour,
  CONCEALER: $language.concealer,
  LIPLINER: $language.lipliner,
  GLOSS: $language.lipGloss,
  BB_CC_CREAM: $language.bbAndCCcream,
  EYES_AND_BROWS: $language.eyesAndBrows,
  CHEEKS: $language.cheeks,
  FACIAL_MASK: "Facial Mask",
  SERUM: "Serum",
  EXFOLITATORS: "Exfolitators",
  HYDRATING_CREAM: "Hydrating Cream",
  ANTI_AGEING_CREAM: "Anti-ageing Cream",
  TONER: "Toner",
  EYE_CREAM: "Eye cream",
  ANTI_ACNE: "Anti-acne",
  ANTI_WRINKLE: "Anti-wrinkle"
}));
const data$1 = { types, items };
const create$2 = (appliedProducts2, sca2, skinCare2) => {
  const activeCategory = writable$1();
  const categories = derived(
    [types, activeCategory, ProductNameByProductType],
    ([$types, $active, $ProductNameByProductType]) => {
      return $types.map(({ type, categoryType }) => ({
        type,
        categoryType,
        name: $ProductNameByProductType[type],
        active: type === $active
      }));
    }
  );
  const products2 = derived(
    [items, appliedProducts2, sca2, skinCare2.enabled, skinCare2.recommendationList],
    ([$items, $appliedProducts, $sca, $skinCareEnabled, $skinCareRecommendationList]) => {
      const activeIds = new Set($appliedProducts.map((p) => p.id));
      return $items.map((item) => {
        const product = {
          ...item,
          active: activeIds.has(item.id)
        };
        if ($skinCareEnabled) {
          if ($skinCareRecommendationList.has(product.type)) {
            product.recommendation = "recommended";
          }
        } else if ($sca) {
          if (product.isRecommended)
            product.recommendation = "recommended";
        }
        return product;
      });
    }
  );
  const productsByCategory = derived([products2, categories], ([$products, $categories]) => {
    const active2 = $categories.find((c) => c.active);
    return $products.filter((p) => p.type === (active2 == null ? void 0 : active2.type));
  });
  const changeCategory = ({ type }) => activeCategory.set(type);
  const setDefaultCategory = (categoryType) => {
    const defaultCategory = get_store_value(categories).find((item) => item.categoryType === categoryType);
    if (defaultCategory) {
      changeCategory(defaultCategory);
    }
  };
  const unsubscribe = types.subscribe(($types) => {
    if (!$types.length)
      return;
    const active2 = get_store_value(activeCategory);
    if (!active2)
      activeCategory.set($types[0].type);
    setTimeout(unsubscribe);
  });
  return {
    categories,
    items: productsByCategory,
    setDefaultCategory,
    changeCategory,
    select: appliedProducts2.add,
    clear: appliedProducts2.remove
  };
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result2 = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result2;
}
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result2 = Array(length);
  while (++index2 < length) {
    result2[index2] = iteratee(array[index2], index2, array);
  }
  return result2;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
var INFINITY$2 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY$2 ? "-0" : result2;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY$1 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root$1, "WeakMap");
const WeakMap$2 = WeakMap$1;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var objectProto$8 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result2 = Array(n);
  while (++index2 < n) {
    result2[index2] = iteratee(index2);
  }
  return result2;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule && freeModule.require && freeModule.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$5.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
    isIndex(key2, length)))) {
      result2.push(key2);
    }
  }
  return result2;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result2 = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$4.call(object, key2) && key2 != "constructor") {
      result2.push(key2);
    }
  }
  return result2;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashGet(key2) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result2 = data2[key2];
    return result2 === HASH_UNDEFINED$2 ? void 0 : result2;
  }
  return hasOwnProperty$3.call(data2, key2) ? data2[key2] : void 0;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashHas(key2) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key2] !== void 0 : hasOwnProperty$2.call(data2, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data2 = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data2[key2] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  return index2 < 0 ? void 0 : data2[index2][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
  if (index2 < 0) {
    ++this.size;
    data2.push([key2, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data2 = map.__data__;
  return isKeyable(key2) ? data2[typeof key2 == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key2) {
  var result2 = getMapData(this, key2)["delete"](key2);
  this.size -= result2 ? 1 : 0;
  return result2;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data2 = getMapData(this, key2), size = data2.size;
  data2.set(key2, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key2)) {
      return cache2.get(key2);
    }
    var result2 = func.apply(this, args);
    memoized.cache = cache2.set(key2, result2) || cache2;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize(func, function(key2) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key2;
  });
  var cache2 = result2.cache;
  return result2;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result2;
});
const stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get$1(object, path, defaultValue) {
  var result2 = object == null ? void 0 : baseGet(object, path);
  return result2 === void 0 ? defaultValue : result2;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data2 = this.__data__, result2 = data2["delete"](key2);
  this.size = data2.size;
  return result2;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key2, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache) {
    var pairs = data2.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache(pairs);
  }
  data2.set(key2, value);
  this.size = data2.size;
  return this;
}
function Stack(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object);
  return isArray$1(object) ? result2 : arrayPush(result2, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$2 && getTag(new Map$2()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result2 = baseGetTag(value), Ctor = result2 == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result2;
  };
}
const getTag$1 = getTag;
var Uint8Array2 = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache2, key2) {
  return cache2.has(key2);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result2 = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result2 = false;
      break;
    }
    if (seen2) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen2.push(othIndex);
        }
      })) {
        result2 = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result2 = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result2;
}
function mapToArray(map) {
  var index2 = -1, result2 = Array(map.size);
  map.forEach(function(value, key2) {
    result2[++index2] = [key2, value];
  });
  return result2;
}
function setToArray(set) {
  var index2 = -1, result2 = Array(set.size);
  set.forEach(function(value) {
    result2[++index2] = value;
  });
  return result2;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result2;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key2 = objProps[index2];
    if (!(isPartial ? key2 in other : hasOwnProperty$1.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result2 = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key2 = objProps[index2];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result2 = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result2 && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result2 = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result2;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source2, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data2 = matchData[index2];
    if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data2 = matchData[index2];
    var key2 = data2[0], objValue = object[key2], srcValue = data2[1];
    if (noCustomizer && data2[2]) {
      if (objValue === void 0 && !(key2 in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result2 = customizer(objValue, srcValue, key2, object, source2, stack);
      }
      if (!(result2 === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result2)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result2 = keys(object), length = result2.length;
  while (length--) {
    var key2 = result2[length], value = object[key2];
    result2[length] = [key2, value, isStrictComparable(value)];
  }
  return result2;
}
function matchesStrictComparable(key2, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
  };
}
function baseMatches(source2) {
  var matchData = getMatchData(source2);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source2 || baseIsMatch(object, source2, matchData);
  };
}
function baseHasIn(object, key2) {
  return object != null && key2 in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result2 = false;
  while (++index2 < length) {
    var key2 = toKey(path[index2]);
    if (!(result2 = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result2 || ++index2 != length) {
    return result2;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get$1(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key2) {
  return function(object) {
    return object == null ? void 0 : object[key2];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseGt(value, other) {
  return value > other;
}
function baseExtremum(array, iteratee, comparator) {
  var index2 = -1, length = array.length;
  while (++index2 < length) {
    var value = array[index2], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
      var computed = current, result2 = value;
    }
  }
  return result2;
}
function maxBy(array, iteratee) {
  return array && array.length ? baseExtremum(array, baseIteratee(iteratee), baseGt) : void 0;
}
var nativeFloor = Math.floor, nativeRandom$1 = Math.random;
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom$1() * (upper - lower + 1));
}
var freeParseFloat = parseFloat;
var nativeMin = Math.min, nativeRandom = Math.random;
function random$1(lower, upper, floating) {
  if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
    upper = floating = void 0;
  }
  if (floating === void 0) {
    if (typeof upper == "boolean") {
      floating = upper;
      upper = void 0;
    } else if (typeof lower == "boolean") {
      floating = lower;
      lower = void 0;
    }
  }
  if (lower === void 0 && upper === void 0) {
    lower = 0;
    upper = 1;
  } else {
    lower = toFinite(lower);
    if (upper === void 0) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom();
    return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
  }
  return baseRandom(lower, upper);
}
var SeasonType = /* @__PURE__ */ ((SeasonType2) => {
  SeasonType2["Winter"] = "WINTER";
  SeasonType2["Spring"] = "SPRING";
  SeasonType2["Summer"] = "SUMMER";
  SeasonType2["Autumn"] = "AUTUMN";
  return SeasonType2;
})(SeasonType || {});
var ProductType = /* @__PURE__ */ ((ProductType2) => {
  ProductType2["Eyeliner"] = "EYELINER";
  ProductType2["Eyeshadow"] = "EYESHADOW";
  ProductType2["Eyelashes"] = "EYELASHES";
  ProductType2["Eyebrows"] = "EYEBROWS";
  ProductType2["Mascara"] = "MASCARA";
  ProductType2["Blush"] = "BLUSH";
  ProductType2["Foundation"] = "FOUNDATION";
  ProductType2["Lipstick"] = "LIPSTICK";
  ProductType2["Highlighter"] = "HIGHLIGHTER";
  ProductType2["Contour"] = "CONTOUR";
  ProductType2["Concealer"] = "CONCEALER";
  ProductType2["Lipliner"] = "LIPLINER";
  ProductType2["Gloss"] = "GLOSS";
  ProductType2["BbСсCream"] = "BB_CC_CREAM";
  ProductType2["EyesAndBrows"] = "EYES_AND_BROWS";
  ProductType2["Cheeks"] = "CHEEKS";
  ProductType2["Cleansers"] = "CLEANSERS";
  ProductType2["AntiAcne"] = "ANTI_ACNE";
  ProductType2["Toner"] = "TONER";
  ProductType2["Exfolitators"] = "EXFOLITATORS";
  ProductType2["Serum"] = "SERUM";
  ProductType2["FacialMask"] = "FACIAL_MASK";
  ProductType2["EyeCream"] = "EYE_CREAM";
  ProductType2["HydratingCream"] = "HYDRATING_CREAM";
  ProductType2["AntiWrinkle"] = "ANTI_WRINKLE";
  ProductType2["AntiAgeingCream"] = "ANTI_AGEING_CREAM";
  return ProductType2;
})(ProductType || {});
const CROP_AR = 2 / 3;
const crop = (width, height) => {
  const ar = width / height;
  const [croppedWidth, croppedHeight] = ar > CROP_AR ? [height * CROP_AR, height] : [width, width / CROP_AR];
  return [
    Math.round((width - croppedWidth) / 2),
    Math.round(height - croppedHeight) / 2,
    Math.round(croppedWidth),
    Math.round(croppedHeight)
  ];
};
const debounce = (func, delay = 200) => {
  let timeout;
  const cancel = () => clearTimeout(timeout);
  const debounced = function(...args) {
    cancel();
    timeout = setTimeout(() => {
      timeout = void 0;
      func.apply(this, args);
    }, delay);
  };
  debounced.cancel = cancel;
  return debounced;
};
let id = 0;
const uniqId = () => `${++id}`;
const random = (min = 0, max = 1) => min + Math.random() * (max - min);
const uniqBy = (arr, iteratee) => {
  const seen2 = /* @__PURE__ */ new Set();
  const result2 = [];
  for (const item of arr) {
    const key2 = iteratee(item);
    if (!seen2.has(key2))
      seen2.add(key2), result2.push(item);
  }
  return result2;
};
const debug = (...msg) => console.debug("WebAR |", ...msg);
class Webcam extends Py {
  constructor() {
    super(...arguments);
    __publicField(this, "_debouncedStop", debounce(function() {
      debug("Webcam.stop()");
      this.stop();
    }, 250));
  }
  cancelStop() {
    this._debouncedStop.cancel();
    debug("Webcam.scheduleStop() canceled");
  }
  scheduleStop() {
    debug("Webcam.scheduleStop()");
    this._debouncedStop();
  }
  async takePhoto() {
    const video = await Dy.createVideoElement(await this["_stream"]);
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    video.src = "", video.srcObject = null;
    const blob = await new Promise(
      (resolve2, reject) => canvas.toBlob(
        (blob2) => blob2 ? resolve2(blob2) : reject(new Error("Unexpected error: Unable to take Webcam photo"))
      )
    );
    return blob;
  }
}
const webcam = new Webcam({
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  facingMode: { ideal: "user" },
  // @ts-expect-error
  resizeMode: "none"
});
const images = /* @__PURE__ */ new WeakMap();
const get = (key2) => {
  if (key2 === "webcam")
    return webcam;
  if (!images.has(key2))
    images.set(key2, new Hh(key2));
  return images.get(key2);
};
const resize = (width, height) => {
  const screenW = Math.round(screen.availWidth * devicePixelRatio / 4) * 4;
  const screenH = Math.round(screen.availHeight * devicePixelRatio / 4) * 4;
  if (width <= screenW && height <= screenH)
    return [width, height];
  const maxRatio = Math.max(width / screenW, height / screenH);
  return [Math.round(width / maxRatio), Math.round(height / maxRatio)];
};
const data = "" + new URL("BanubaSDK-04e572f8.data", import.meta.url).href;
const simd = "" + new URL("BanubaSDK.simd-509a0567.wasm", import.meta.url).href;
const wasm = "" + new URL("BanubaSDK-ce9db4e5.wasm", import.meta.url).href;
const eyes = "" + new URL("eyes-bbd5c6b1.zip", import.meta.url).href;
const frx = "" + new URL("face_tracker.splitted-bf1bc9c860aee76e-b6f5fb76.zip", import.meta.url).href;
const frx_offline = "" + new URL("face_tracker.splitted-cd6f6f7015649793-cbd83798.zip", import.meta.url).href;
const frx_online = "" + new URL("face_tracker.splitted-cee7b2eb36b50311-5b5e29e5.zip", import.meta.url).href;
const frx_lite = "" + new URL("face_tracker_lite.splitted-bf1bc9c860aee76e-7af4223c.zip", import.meta.url).href;
const frx_lite_offline = "" + new URL("face_tracker_lite.splitted-cd6f6f7015649793-d8a109c1.zip", import.meta.url).href;
const frx_lite_online = "" + new URL("face_tracker_lite.splitted-cee7b2eb36b50311-a5854d59.zip", import.meta.url).href;
const lips = "" + new URL("lips-5b252096.zip", import.meta.url).href;
const face = "" + new URL("skin.patched.splitted-4c1f39f66753a998-ea8a3034.zip", import.meta.url).href;
const skin = "" + new URL("skin.patched.splitted-c7343de2085f8b99-6c4faed7.zip", import.meta.url).href;
const preloads = /* @__PURE__ */ new Map();
const preload$2 = (resource, opts = {}) => {
  opts = {
    as: "fetch",
    fetchPriority: "low",
    ...opts
  };
  if (["fetch", "font"].includes(opts.as))
    opts.crossOrigin = "";
  if (!preloads.has(resource))
    preloads.set(
      resource,
      new Promise((res, rej) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = resource;
        link.onerror = rej;
        link.onload = () => res();
        Object.assign(link, opts);
        document.head.prepend(link);
      })
    );
  return preloads.get(resource);
};
const requestCameraPermissions = async () => {
  const isAlreadyGranted = "permissions" in navigator ? await navigator.permissions.query({ name: "camera" }).then(({ state }) => state === "granted").catch((_) => false) : false;
  if (isAlreadyGranted)
    return true;
  if (typeof navigator.mediaDevices === "undefined") {
    throw new Error(
      "SecureContext is required to access webcam\nIt's likely you need to set up HTTPS/TLS for your website\nSee https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Encryption_based_security for details "
    );
  }
  return await navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => stream.getTracks().forEach((track) => track.stop())).then(() => true).catch(() => false);
};
const Eyelashes = "" + new URL("Eyelashes2-42ccd9a2.zip", import.meta.url).href;
const Analysis$1 = "" + new URL("empty_effect-d3364d53.zip", import.meta.url).href;
const Makeup = "" + new URL("makeup-dc62c639.zip", import.meta.url).href;
const Shimmer = "" + new URL("shimmer-a5262e38.zip", import.meta.url).href;
const SkinCare = "" + new URL("skin_care-432221c3.zip", import.meta.url).href;
const Beauty$2 = "" + new URL("ultima-75870b8f.zip", import.meta.url).href;
const SDK = [async () => await gp() ? simd : wasm, data];
const AnalysisResources = [
  isSafari() ? frx_lite : frx,
  isSafari() ? frx_lite_online : frx_online,
  eyes
];
const BeautyResources = (filter) => {
  const all = typeof filter === "undefined";
  const online = all || filter === "online";
  const offline = all || filter === "offline";
  return [
    isSafari() ? frx_lite : frx,
    online && (isSafari() ? frx_lite_online : frx_online),
    offline && (isSafari() ? frx_lite_offline : frx_offline),
    face,
    offline && skin,
    lips
  ].filter(Boolean);
};
var EffectType = /* @__PURE__ */ ((EffectType2) => {
  EffectType2[EffectType2["beauty"] = 0] = "beauty";
  EffectType2[EffectType2["makeup"] = 1] = "makeup";
  EffectType2[EffectType2["skinCare"] = 2] = "skinCare";
  EffectType2[EffectType2["shimmer"] = 3] = "shimmer";
  EffectType2[EffectType2["eyelashes"] = 4] = "eyelashes";
  return EffectType2;
})(EffectType || {});
const getEffect = (effect) => {
  switch (effect) {
    case 0:
      return Beauty$2;
    case 1:
      return Makeup;
    case 2:
      return SkinCare;
    case 3:
      return Shimmer;
    case 4:
      return Eyelashes;
  }
};
const AnalysisEffect = Analysis$1;
const BeautyEffect = Beauty$2;
const SkinCareEffect = SkinCare;
const preload$1 = async (...resources) => {
  await Promise.all(
    resources.flat(2).map((resource) => {
      if (typeof resource === "string")
        return preload$2(resource);
      return Promise.resolve(resource()).then(preload$2);
    })
  );
};
function isSafari() {
  return /(iP(hone|od|ad).*)|(Version\/)\d+.*Safari/.test(navigator.userAgent);
}
const createState = () => {
  return {
    effect: null,
    source: null,
    lastSource: null
  };
};
const Analysis = createState();
const Beauty$1 = Analysis;
const config$1 = {
  clientToken: "Qk5CIErl6VLcyPS9qB4IsGc5HFXbHkjJjs1yB7WQHxNDAxqjirAdwpSLxPoJu5Zq1p505LYHOinK8tLgzYmlmeBsmx9pWTgoBnD2edlZf1uvTdGdcvh3nqY9eQk=",
  devicePixelRatio: 1,
  locateFile: {
    "BanubaSDK.data": data,
    "BanubaSDK.wasm": wasm,
    "BanubaSDK.simd.wasm": simd
  }
};
const setClientToken = (clientToken) => config$1.clientToken = clientToken ?? config$1.clientToken;
let _player;
const getPlayer = async () => {
  if (!_player)
    _player = __vitePreload(() => import("./BanubaSDK-34db11e0.js"), true ? [] : void 0, import.meta.url).then(({ Player }) => Player.create(config$1)).then((player2) => (debug("Player loaded"), player2));
  return _player;
};
let _isEffectClearInProgress$1 = false;
const stop$1 = async () => {
  if (_isEffectClearInProgress$1)
    return;
  else
    _isEffectClearInProgress$1 = true;
  try {
    const player2 = await getPlayer();
    if (Analysis.effect)
      Analysis.effect = null, await player2.clearEffect();
    debug("Analysis effect cleared");
  } finally {
    _isEffectClearInProgress$1 = false;
  }
};
const useWebcam$1 = async () => {
  const webcam2 = get("webcam");
  if (webcam2.active)
    webcam2.cancelStop();
  if (Analysis.source === webcam2 && webcam2.active)
    return webcam2;
  const player2 = await getPlayer();
  player2.use(Analysis.source = webcam2, { crop });
  debug("Using Webcam for player");
  return webcam2;
};
const usePhoto$1 = async (source2) => {
  const player2 = await getPlayer();
  const image = get(source2);
  player2.use(Analysis.source = image, { resize, crop });
  player2.play({ pauseOnEmpty: false });
};
let isListening = false;
const visibilityChangeListener = async () => {
  const isActive = document.visibilityState === "visible";
  const webcam2 = get("webcam");
  if (Analysis.source !== webcam2)
    return;
  if (!isActive) {
    webcam2.stop();
  } else {
    await useWebcam$1();
    const player2 = await getPlayer();
    player2.play();
  }
};
const _addVisibilityChangListener = () => {
  if (isListening)
    return;
  document.addEventListener("visibilitychange", visibilityChangeListener);
  isListening = true;
};
const _removeVisibilityChangListener = () => {
  if (!isListening)
    return;
  document.removeEventListener("visibilitychange", visibilityChangeListener);
  isListening = false;
};
const render$1 = async (container) => {
  debug("Rendering player to container", container);
  const webcam2 = get("webcam");
  const player2 = await getPlayer();
  player2.play({ pauseOnEmpty: !(Analysis.source instanceof Hh) });
  if (Analysis.source === webcam2) {
    await new Promise(
      (resolve2) => player2.addEventListener("framereceived", resolve2, { once: true })
    );
    await new Promise(
      (resolve2) => player2.addEventListener("frameprocessed", resolve2, { once: true })
    );
    await new Promise(
      (resolve2) => player2.addEventListener("framerendered", resolve2, { once: true })
    );
  }
  _addVisibilityChangListener();
  jy.render(player2, container);
};
const unmount$1 = async (container) => {
  const webcam2 = get("webcam");
  if (Analysis.source === webcam2)
    webcam2.stop();
  jy.unmount(container);
  _removeVisibilityChangListener();
  Analysis.lastSource = Analysis.source;
  debug("Player removed from container", container);
};
const destroy$1 = async () => {
  const player2 = await getPlayer();
  player2.destroy();
  debug("Player has been destroyed");
};
const player = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  destroy: destroy$1,
  getPlayer,
  render: render$1,
  stop: stop$1,
  unmount: unmount$1,
  usePhoto: usePhoto$1,
  useWebcam: useWebcam$1
}, Symbol.toStringTag, { value: "Module" }));
let _modules;
let _currentEffectType;
let _effects = {
  beauty: null,
  skinCare: null,
  makeup: null,
  shimmer: null,
  eyelashes: null
};
let _isEffectApplyInProgress = false;
const _toggleEffect = async (effectType, script) => {
  var _a;
  if (_isEffectApplyInProgress)
    return;
  if (_currentEffectType !== effectType) {
    _isEffectApplyInProgress = true;
    _currentEffectType = effectType;
    const player$1 = await getPlayer();
    await player$1.clearEffect();
    if (!_effects[effectType])
      _effects[effectType] = await dp.preload(
        getEffect(EffectType[effectType])
      );
    await player$1.applyEffect(_effects[effectType]);
  }
  if (script)
    await ((_a = _effects[effectType]) == null ? void 0 : _a.evalJs(script));
  _isEffectApplyInProgress = false;
};
const _sendEvent = async (eventName, eventProps) => {
  const player$1 = await getPlayer();
  player$1["_sdk"].Informer.sendEvent(player$1["_sdk"].LicenseManager.instance(), eventName, eventProps);
};
let _preloading = null;
const preload2 = async (filter) => {
  if (_preloading)
    return _preloading;
  debug("Starting preloading of beauty resources");
  await (_preloading = preload$1(
    SDK,
    BeautyResources(filter),
    BeautyEffect,
    SkinCareEffect
  ).then(() => BeautyResources(filter)).catch((error) => {
    _preloading = null;
    throw error;
  }));
  debug("Beauty resources preloaded");
};
const start = async () => {
  if (_isEffectApplyInProgress)
    return;
  else
    _isEffectApplyInProgress = true;
  debug("Starting beauty");
  const tasks2 = [];
  tasks2.push(getPlayer());
  if (!_modules || !_modules.length)
    tasks2.push(ky.preload(_preloading ? await _preloading : BeautyResources()));
  if (!_effects.beauty)
    tasks2.push(dp.preload(getEffect(EffectType.beauty)));
  try {
    const [player2, modules, effect] = await Promise.all(tasks2);
    if (modules)
      await player2.addModule(..._modules = modules), debug("Beauty modules loaded");
    if (effect) {
      _effects.beauty = effect;
      debug("Beauty effect loaded");
    }
    if (Beauty$1.effect !== _effects.beauty && _effects.beauty) {
      await player2.applyEffect(Beauty$1.effect = _effects.beauty);
      _currentEffectType = "beauty";
    }
    debug("Beauty effect applied");
  } finally {
    _isEffectApplyInProgress = false;
  }
};
let _isEffectClearInProgress = false;
const stop = async () => {
  if (_isEffectClearInProgress)
    return;
  else
    _isEffectClearInProgress = true;
  _effects.beauty = null;
  _effects.makeup = null;
  _effects.skinCare = null;
  _modules = [];
  try {
    const player$1 = await getPlayer();
    if (Beauty$1.effect)
      Beauty$1.effect = null, await player$1.clearEffect();
    debug("Beauty effect cleared");
  } finally {
    _isEffectClearInProgress = false;
  }
};
const setActiveProblems = async (variant, problems) => {
  var _a;
  await _toggleEffect("skinCare");
  if (problems.length > 0) {
    await ((_a = _effects.skinCare) == null ? void 0 : _a.evalJs(
      `setActive(${variant}, ${problems.map((e) => `"${e}"`).join()})`
    ));
  }
};
const setFaceSmooth = async (face2, eyes2) => {
  var _a;
  await _toggleEffect("beauty");
  await ((_a = _effects.beauty) == null ? void 0 : _a.evalJs(`setSmoothWeights(${face2}, ${eyes2})`));
};
const setClearProblems = async (problems) => {
  var _a;
  await _toggleEffect("skinCare");
  if (problems.length > 0) {
    await ((_a = _effects.skinCare) == null ? void 0 : _a.evalJs(`setClear(${problems.map((e) => `"${e}"`).join()})`));
  }
};
const clearAllProblems = async () => {
  var _a;
  await _toggleEffect("skinCare");
  await ((_a = _effects.skinCare) == null ? void 0 : _a.evalJs(`clearAll()`));
};
const setState = async (state) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const json = JSON.stringify(state, null, 2);
  _sendEvent("setState", json);
  if (((_a = state == null ? void 0 : state.lipstick) == null ? void 0 : _a.finish) === "shimmer") {
    await _toggleEffect("shimmer");
    debug("shimmer activated");
    return;
  }
  if ((_b = state == null ? void 0 : state.eyelashes) == null ? void 0 : _b.finish.includes("eyelashes_")) {
    await _toggleEffect(
      "eyelashes",
      `eyelashesLoadTexture("images/${(_c = state == null ? void 0 : state.eyelashes) == null ? void 0 : _c.finish}.png")`
    );
    debug("eyelashes effect activated");
    return;
  }
  await _toggleEffect("beauty");
  if (((_d = state == null ? void 0 : state.lipstick) == null ? void 0 : _d.finish) === "shiny") {
    const color = (_e = state == null ? void 0 : state.lipstick) == null ? void 0 : _e.color.split(" ");
    color.push("1.0");
    await ((_f = _effects.beauty) == null ? void 0 : _f.evalJs(`setLipsShine([${color}], 1.0, 1.0, 1.0, 1.0, 1.0, 0, 0, 0)`));
  } else if (((_g = state == null ? void 0 : state.lipstick) == null ? void 0 : _g.finish) !== "shiny") {
    await ((_h = _effects.beauty) == null ? void 0 : _h.evalJs(`setLipsShine([0, 0, 0, 0], 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0)`));
  }
  await ((_i = _effects.beauty) == null ? void 0 : _i.evalJs(`setState(${json})`));
  debug("set beauty state", json);
};
const useWebcam = async () => {
  var _a;
  const webcam2 = await useWebcam$1();
  (_a = _effects.beauty) == null ? void 0 : _a.evalJs(`setMode("speed")`);
  debug("Using Webcam for beauty");
  return webcam2;
};
const usePhoto = async (source2) => {
  var _a;
  await usePhoto$1(source2);
  (_a = _effects.beauty) == null ? void 0 : _a.evalJs(`setMode("quality")`);
  debug("Using Image for beauty", source2);
};
const stopWebcam = () => {
  const webcam2 = get("webcam");
  if (Beauty$1.source !== webcam2)
    return;
  webcam2.stop();
};
const startWebcam = async () => {
  const webcam2 = get("webcam");
  if (Beauty$1.source !== webcam2)
    return;
  await useWebcam();
  const player$1 = await getPlayer();
  player$1.play();
};
const render = async (container) => {
  await render$1(container);
};
const unmount = async (container) => {
  await unmount$1(container);
};
const destroy = async () => {
  await destroy$1();
};
const Beauty = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clearAllProblems,
  destroy,
  preload: preload2,
  render,
  setActiveProblems,
  setClearProblems,
  setFaceSmooth,
  setState,
  start,
  startWebcam,
  stop,
  stopWebcam,
  unmount,
  usePhoto,
  useWebcam
}, Symbol.toStringTag, { value: "Module" }));
var SkinCareRegion = /* @__PURE__ */ ((SkinCareRegion2) => {
  SkinCareRegion2["Foundation"] = "foundation";
  SkinCareRegion2["Concealer"] = "concealer";
  return SkinCareRegion2;
})(SkinCareRegion || {});
const problemsData = {
  none: {
    title: "None",
    tabTitle: "None",
    color: "#000000",
    products: [
      ProductType.FacialMask,
      ProductType.Serum,
      ProductType.Exfolitators,
      ProductType.HydratingCream,
      ProductType.Toner
    ]
  },
  rosacea: {
    title: "Pigmentation",
    tabTitle: "Pigmentation",
    color: "#ef5350",
    products: [
      ProductType.FacialMask,
      ProductType.Serum,
      ProductType.AntiAgeingCream,
      ProductType.Toner
    ]
  },
  // allergy: {
  //   title: "Allergy",
  //   color: "#336699",
  // },
  acne: {
    title: "Acne",
    tabTitle: "Acne",
    color: "#5279ff",
    products: [ProductType.AntiAcne, ProductType.Exfolitators]
  },
  // pigmentation: {
  //   title: "Pigmentation",
  //   color: "#553333",
  // },
  pores: {
    title: "Enlarged pores",
    tabTitle: "Pores",
    color: "#eec307",
    products: [ProductType.FacialMask, ProductType.HydratingCream, ProductType.Toner]
  },
  // rosacea: {
  //   title: "Rosacea",
  //   color: "#32d50c",
  // },
  // sensitivity: {
  //   title: "Sensitivity",
  //   color: "#ff0000",
  // },
  wrinkles: {
    title: "Wrinkles",
    tabTitle: "Wrinkles",
    color: "#000000",
    products: [
      ProductType.FacialMask,
      ProductType.Serum,
      ProductType.Exfolitators,
      ProductType.HydratingCream,
      ProductType.AntiAgeingCream,
      ProductType.Toner,
      ProductType.EyeCream,
      ProductType.AntiWrinkle
    ]
  }
};
const getProblemsByAge = (age) => {
  const problems = [];
  if (age >= 14 && age <= 25) {
    problems.push("acne");
  }
  if (age > 25) {
    problems.push("pores");
  }
  if (age > 30) {
    problems.push("wrinkles");
  }
  return problems;
};
const calculateEffectValue = (week, max, age) => {
  const t = week / (max || 1);
  const t0 = 0.35;
  const b = -0.08 * age + 10;
  const maxEffectValue = 3;
  return maxEffectValue / (1 + Math.exp(-b * (t - t0)));
};
const create$1 = () => {
  const problems = writable$1([]);
  const age = writable$1(0);
  const problemsVariant = writable$1(0);
  const recommendationList = writable$1(/* @__PURE__ */ new Set());
  const isQuizDone = writable$1(false);
  const showQuizWizard = writable$1(false);
  const showProblems = writable$1(false);
  const rangeValue = writable$1(0);
  const enabled = derived(routerPath, ($routerPath) => $routerPath.current === Paths.SkinCare);
  const appliedProductVto = derived(
    appliedProducts,
    ($appliedProducts) => {
      var _a, _b;
      return (_b = (_a = maxBy($appliedProducts, (item) => {
        var _a2, _b2;
        return (_b2 = (_a2 = item == null ? void 0 : item.skus[0]) == null ? void 0 : _a2.vto.skincare) == null ? void 0 : _b2.max;
      })) == null ? void 0 : _a.skus[0]) == null ? void 0 : _b.vto;
    }
  );
  const setEffect = async (data2) => {
    var _a, _b, _c, _d, _e;
    if (!get_store_value(enabled)) {
      return;
    }
    if ((_a = get_store_value(appliedProductVto)) == null ? void 0 : _a.skincare) {
      showProblems.set(false);
      const max = ((_c = (_b = get_store_value(appliedProductVto)) == null ? void 0 : _b.skincare) == null ? void 0 : _c.max) || 1;
      const value = calculateEffectValue(data2, max, get_store_value(age));
      if (((_d = get_store_value(appliedProductVto)) == null ? void 0 : _d.region) === SkinCareRegion.Foundation) {
        await setFaceSmooth(value, 0);
      }
      if (((_e = get_store_value(appliedProductVto)) == null ? void 0 : _e.region) === SkinCareRegion.Concealer) {
        await setFaceSmooth(0, value);
      }
    } else {
      showProblems.set(true);
      await setFaceSmooth(0, 0);
      rangeValue.set(0);
    }
  };
  rangeValue.subscribe(setEffect);
  appliedProducts.subscribe((products2) => {
    if (get_store_value(enabled)) {
      showProblems.set(products2.length === 0);
      rangeValue.set(0);
    }
  });
  const setQuizData = (data2) => {
    isQuizDone.set(true);
    age.set(data2.age);
    const problemsByAge = getProblemsByAge(data2.age);
    const problemsSet = Array.from(/* @__PURE__ */ new Set([...data2.problems, ...problemsByAge])).filter(
      (problem) => problem !== "none"
    );
    problems.set(problemsSet);
    const dataList = [
      ProductType.FacialMask,
      ProductType.Serum,
      ProductType.Exfolitators,
      ProductType.HydratingCream,
      ProductType.Toner
    ];
    problemsSet.forEach((problem) => {
      dataList.push(...problemsData[problem].products);
    });
    recommendationList.set(new Set(dataList));
    showProblems.set(true);
  };
  const getProblemData = (problem) => problemsData[problem];
  const getProblemsList = () => Object.keys(problemsData);
  const resetQuiz = () => {
    isQuizDone.set(false);
    problems.set([]);
    recommendationList.set(/* @__PURE__ */ new Set());
    showProblems.set(false);
    problemsVariant.set(random$1(0, 9));
  };
  const hide = async () => {
    if (get_store_value(enabled)) {
      await setFaceSmooth(0, 0);
    }
  };
  const show = async () => {
    if (get_store_value(enabled)) {
      await setEffect(get_store_value(rangeValue));
    }
  };
  const exports2 = {
    setQuizData,
    resetQuiz,
    getProblemData,
    getProblemsList,
    problems,
    isQuizDone,
    showQuizWizard,
    showProblems,
    rangeValue,
    hide,
    show,
    enabled,
    recommendationList,
    problemsVariant
  };
  const { subscribe: subscribe2, set, update: update2 } = writable$1();
  return {
    subscribe: subscribe2,
    set,
    update: update2,
    ...exports2
  };
};
const create = (appliedProducts2) => {
  const hidden = writable$1([]);
  const show = (product) => {
    hidden.update(($hidden) => $hidden.filter((id2) => id2 !== product.id));
  };
  const hide = (product) => {
    hidden.update(($hidden) => $hidden.concat([product.id]));
  };
  const swatchByProduct = writable$1(/* @__PURE__ */ new Map());
  const swatch = (product, swatch2) => {
    swatchByProduct.update((map) => map.set(product.id, swatch2.id));
  };
  const isComparing = writable$1(false);
  const compare = () => {
    isComparing.update(($isComparing) => !$isComparing);
  };
  const items2 = derived(
    [appliedProducts2, hidden, swatchByProduct],
    ([$appliedProducts, $hidden, $swatchByProduct]) => {
      return $appliedProducts.map(({ skus, ...product }) => ({
        ...product,
        swatches: skus.map(({ id: id2, vto: vto2 }) => {
          const activeSwatchId = $swatchByProduct.get(product.id) ?? skus[0].id;
          const color = vto2rgb(vto2.color);
          const active2 = id2 === activeSwatchId;
          const sku = skus[0].sku;
          const url = skus[0].url;
          return { id: id2, color, active: active2, vto: vto2, sku: sku ?? null, url: url ?? null };
        }),
        visible: !$hidden.includes(product.id)
      }));
    }
  );
  const { subscribe: subscribe2 } = derived(
    [appliedProducts2, isComparing, items2, hidden],
    ([, $isComparing, $items, $hidden]) => ({
      canUndo: appliedProducts2.canUndo(),
      canRedo: appliedProducts2.canRedo(),
      isComparing: $isComparing,
      categories: new Set($items.map(({ type }) => type)),
      items: $items,
      hidden: $hidden
    })
  );
  return {
    subscribe: subscribe2,
    show,
    hide,
    swatch,
    clear: () => hidden.set([]),
    compare,
    replace: appliedProducts2.replace,
    add: appliedProducts2.add,
    remove: appliedProducts2.remove,
    undo: appliedProducts2.undo,
    redo: appliedProducts2.redo
  };
};
function vto2rgb(color) {
  const [r = 0, g = 0, b = 0, a = 1] = color.split(/\s+,?/).slice(0, 4).map((c) => parseFloat(c)).map((c, i) => i === 3 ? c : c * 255).map((c) => c.toFixed());
  return `rgba(${r},${g},${b},${a})`;
}
const appliedProducts = create$6();
const skinCare = create$1();
const cart = create$5();
const vto = create(appliedProducts);
const products = create$2(appliedProducts, result, skinCare);
const looks = create$4(appliedProducts);
const looksFilter = create$3();
const clearDataItems = () => {
  data$1.types.set([]);
  data$1.items.set([]);
  data$3.items.set([]);
};
const key = Symbol("app");
const setContext = (ctx) => setContext$2(key, ctx);
const getContext = () => getContext$2(key) ?? {};
const index = (settings) => defineConfig([
  {
    action: () => {
      __vitePreload(() => import("./index-0c59340a.js"), true ? ["./index-0c59340a.js","./analysis-f5aa7ef5.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url).then(
        ({ Analysis: Analysis2, Beauty: Beauty2 }) => Promise.resolve(settings.faceAnalysis ? Analysis2.preload() : null).then(() => {
          if (source.isWebcam())
            Beauty2.preload("online");
          else if (source.isPhoto())
            Beauty2.preload("offline");
          else
            Beauty2.preload();
        })
      );
    },
    children: [...auxiliary(settings), ...app(settings)]
  }
]);
const auxiliary = (settings) => defineConfig([
  settings.terms && {
    path: Paths.Terms,
    action: () => __vitePreload(() => import("./index-16d353a2.js"), true ? ["./index-16d353a2.js","./Button-7f464a41.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url)
  },
  settings.imageSourceSelection && {
    path: Paths.ImageSource,
    action: () => __vitePreload(() => import("./index-0133c33d.js"), true ? ["./index-0133c33d.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./ImageSourceSelector-9e517dfa.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url)
  },
  settings.faceAnalysis && {
    path: Paths.FaceAnalysis,
    action: () => __vitePreload(() => import("./index-be4157d2.js"), true ? ["./index-be4157d2.js","./CameraFrameCapture-385f9690.js","./BanubaSDK-34db11e0.js","./index-2d8ed87d.js","./checkmark-md-244737c7.js","./analysis-f5aa7ef5.js"] : void 0, import.meta.url)
  }
]);
const app = (settings) => defineConfig([
  {
    action: () => __vitePreload(() => import("./index-be9feab1.js"), true ? ["./index-be9feab1.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url),
    children: defineConfig([
      settings.bestMatch && {
        path: Paths.BestMatch,
        action: async (ctx) => {
          if (settings.terms && !isAccepted())
            return {
              redirect: {
                pathname: Paths.Terms,
                query: { onComplete: ctx.location.pathname }
              }
            };
          if (settings.imageSourceSelection && source.isEmpty()) {
            return {
              redirect: {
                pathname: Paths.ImageSource,
                query: { onComplete: ctx.location.pathname }
              }
            };
          }
          if (isGift() && isSourceChanged()) {
            return __vitePreload(() => import("./index-0133c33d.js"), true ? ["./index-0133c33d.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./ImageSourceSelector-9e517dfa.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
          }
          if (settings.faceAnalysis && isEmpty() && isSourceChanged()) {
            return __vitePreload(() => import("./index-be4157d2.js"), true ? ["./index-be4157d2.js","./CameraFrameCapture-385f9690.js","./BanubaSDK-34db11e0.js","./index-2d8ed87d.js","./checkmark-md-244737c7.js","./analysis-f5aa7ef5.js"] : void 0, import.meta.url);
          }
          setGift(false);
          if (settings.faceAnalysis && isEmpty() && !isSourceChanged())
            return {
              redirect: {
                pathname: Paths.FaceAnalysis,
                query: { onComplete: ctx.location.pathname }
              }
            };
          setSourceChanged(false);
          return __vitePreload(() => import("./index-98f60700.js"), true ? ["./index-98f60700.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
        }
      },
      settings.makeupTransfer && {
        path: Paths.MakeupTransfer
      },
      settings.giftSelection && {
        path: Paths.GiftSelection,
        action: async () => {
          setGift(true);
          if (settings.faceAnalysis && isEmpty()) {
            setSourceChanged(true);
            return __vitePreload(() => import("./gift-847fadcc.js"), true ? ["./gift-847fadcc.js","./CameraFrameCapture-385f9690.js","./BanubaSDK-34db11e0.js","./index-2d8ed87d.js","./checkmark-md-244737c7.js","./analysis-f5aa7ef5.js"] : void 0, import.meta.url);
          }
          if (settings.imageSourceSelection && source.isEmpty() || !isSourceChanged()) {
            return __vitePreload(() => import("./gift-82dc3d36.js"), true ? ["./gift-82dc3d36.js","./ImageSourceSelector-9e517dfa.js","./Button-7f464a41.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
          }
          return __vitePreload(() => import("./index-98f60700.js"), true ? ["./index-98f60700.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
        }
      },
      settings.beautyAdvisor && {
        path: Paths.BeautyAdvisor
      },
      settings.skinCare && {
        path: Paths.SkinCare,
        action: (ctx) => {
          if (settings.terms && !isAccepted())
            return {
              redirect: {
                pathname: Paths.Terms,
                query: { onComplete: ctx.location.pathname }
              }
            };
          if (settings.imageSourceSelection && source.isEmpty()) {
            return {
              redirect: {
                pathname: Paths.ImageSource,
                query: { onComplete: ctx.location.pathname }
              }
            };
          }
          if (isGift() && isSourceChanged()) {
            return __vitePreload(() => import("./index-0133c33d.js"), true ? ["./index-0133c33d.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./ImageSourceSelector-9e517dfa.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
          }
          if (settings.faceAnalysis && isEmpty() && isSourceChanged()) {
            return __vitePreload(() => import("./index-be4157d2.js"), true ? ["./index-be4157d2.js","./CameraFrameCapture-385f9690.js","./BanubaSDK-34db11e0.js","./index-2d8ed87d.js","./checkmark-md-244737c7.js","./analysis-f5aa7ef5.js"] : void 0, import.meta.url);
          }
          setGift(false);
          if (settings.faceAnalysis && isEmpty() && !isSourceChanged())
            return {
              redirect: {
                pathname: Paths.FaceAnalysis,
                query: { onComplete: ctx.location.pathname }
              }
            };
          setSourceChanged(false);
          return __vitePreload(() => import("./index-98f60700.js"), true ? ["./index-98f60700.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url);
        }
      },
      settings.bookADemo && {
        path: Paths.BookADemo
      }
    ])
  }
]);
const navigation = (settings) => {
  const [{ children: children2 }] = app(settings);
  return children2.map(({ path, action }) => ({
    path,
    unimplemented: !action
  }));
};
const defaultNavigationFlow = (settings, entry) => {
  const pages2 = [
    settings.terms && !isAccepted() && "terms",
    settings.imageSourceSelection && source.isEmpty() && "image-source",
    settings.faceAnalysis && isEmpty() && "face-analysis",
    entry
  ].filter(Boolean);
  return {
    initial: () => pages2[0],
    next: (to) => {
      if (to.startsWith("/"))
        to = to.slice(1);
      const idx = pages2.findIndex((page) => page === to);
      return idx !== -1 ? pages2[idx + 1] : void 0;
    },
    preload: async (page) => {
      await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./_layout/index.ts": () => __vitePreload(() => import("./index-be9feab1.js"), true ? ["./index-be9feab1.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url), "./best-match/index.ts": () => __vitePreload(() => import("./index-98f60700.js"), true ? ["./index-98f60700.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url), "./face-analysis/index.ts": () => __vitePreload(() => import("./index-be4157d2.js"), true ? ["./index-be4157d2.js","./CameraFrameCapture-385f9690.js","./BanubaSDK-34db11e0.js","./index-2d8ed87d.js","./checkmark-md-244737c7.js","./analysis-f5aa7ef5.js"] : void 0, import.meta.url), "./image-source/index.ts": () => __vitePreload(() => import("./index-0133c33d.js"), true ? ["./index-0133c33d.js","./BestMatch-ac293868.js","./Button-7f464a41.js","./checkmark-md-244737c7.js","./index-2d8ed87d.js","./Floating-aa1e9f05.js","./ImageSourceSelector-9e517dfa.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url), "./terms/index.ts": () => __vitePreload(() => import("./index-16d353a2.js"), true ? ["./index-16d353a2.js","./Button-7f464a41.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url) }), `./${page}/index.ts`);
    }
  };
};
const pages = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  app,
  auxiliary,
  default: index,
  defaultNavigationFlow,
  language,
  navigation,
  setActiveLanguage,
  setAppContext: setContext,
  setLayoutContext: setContext$1
}, Symbol.toStringTag, { value: "Module" }));
function create_fragment$2(ctx) {
  const block = {
    c: noop$1,
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: noop$1,
    p: noop$1,
    i: noop$1,
    o: noop$1,
    d: noop$1
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("StyleSheet", slots, []);
  let { href } = $$props;
  let { fonts = /fonts.*\.css/.test(href) } = $$props;
  const svelteRoot = getSvelteRoot();
  const htmlRoot = svelteRoot.getRootNode();
  const head = htmlRoot.nodeType === Node.DOCUMENT_NODE ? htmlRoot.head : (
    // There is an [issue](https://stackoverflow.com/a/60526280), that the `@font-face` directives may not work insidethe the ShadowRoot.
    // A common workaround is to add the styles to the [shadownRoot.host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host) rather than `shadowRoot` itself.
    fonts ? htmlRoot.host : htmlRoot
  );
  onMount(() => {
    const link = head.appendChild(document.createElement("link"));
    link.rel = "stylesheet";
    link.href = href;
    return () => link.remove();
  });
  $$self.$$.on_mount.push(function() {
    if (href === void 0 && !("href" in $$props || $$self.$$.bound[$$self.$$.props["href"]])) {
      console.warn("<StyleSheet> was created without expected prop 'href'");
    }
  });
  const writable_props = ["href", "fonts"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<StyleSheet> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("href" in $$props2)
      $$invalidate(0, href = $$props2.href);
    if ("fonts" in $$props2)
      $$invalidate(1, fonts = $$props2.fonts);
  };
  $$self.$capture_state = () => ({
    onMount,
    getSvelteRoot,
    href,
    fonts,
    svelteRoot,
    htmlRoot,
    head
  });
  $$self.$inject_state = ($$props2) => {
    if ("href" in $$props2)
      $$invalidate(0, href = $$props2.href);
    if ("fonts" in $$props2)
      $$invalidate(1, fonts = $$props2.fonts);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [href, fonts];
}
class StyleSheet extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal$1, { href: 0, fonts: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "StyleSheet",
      options,
      id: create_fragment$2.name
    });
  }
  get href() {
    throw new Error("<StyleSheet>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set href(value) {
    throw new Error("<StyleSheet>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get fonts() {
    throw new Error("<StyleSheet>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set fonts(value) {
    throw new Error("<StyleSheet>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/lib/elements/Tooltips/Tooltips.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-1glnujc", "span.svelte-1glnujc{border-radius:4px;--tw-bg-opacity:1;background-color:rgb(56 56 60 / var(--tw-bg-opacity));padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;font-size:12px;line-height:16px;color:var(--tint-text-light)\n}");
}
function create_default_slot$1(ctx) {
  let span;
  let t;
  const block = {
    c: function create2() {
      span = element("span");
      t = text(
        /*title*/
        ctx[2]
      );
      attr_dev(span, "class", "svelte-1glnujc");
      add_location(span, file$1, 46, 2, 1381);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update2(ctx2, dirty) {
      if (dirty & /*title*/
      4)
        set_data_dev(
          t,
          /*title*/
          ctx2[2]
        );
    },
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(46:0) <svelte:component this={FloatingComponent} bind:this={tooltip} offset={[4, 0]}>",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*FloatingComponent*/
    ctx[1]
  );
  function switch_props(ctx2) {
    let switch_instance_props = {
      offset: [4, 0],
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx: ctx2 }
    };
    return {
      props: switch_instance_props,
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    ctx[5](switch_instance);
  }
  const block = {
    c: function create2() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update2(ctx2, [dirty]) {
      const switch_instance_changes = {};
      if (dirty & /*$$scope, title*/
      260) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (dirty & /*FloatingComponent*/
      2 && switch_value !== (switch_value = /*FloatingComponent*/
      ctx2[1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx2));
          ctx2[5](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      ctx[5](null);
      if (detaching)
        detach_dev(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let $isHoverSupported;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Tooltips", slots, []);
  const isHoverSupported = media("(any-hover: hover)");
  validate_store(isHoverSupported, "isHoverSupported");
  component_subscribe($$self, isHoverSupported, (value) => $$invalidate(6, $isHoverSupported = value));
  const root2 = getSvelteRoot();
  let FloatingComponent;
  let tooltip;
  let anchor = null;
  let title = "";
  onMount(() => {
    if (!$isHoverSupported)
      return;
    __vitePreload(() => import("./index-e7287504.js"), true ? ["./index-e7287504.js","./Floating-aa1e9f05.js","./index-2d8ed87d.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url).then((m) => $$invalidate(1, FloatingComponent = m.default));
  });
  onMount(() => {
    if (!$isHoverSupported)
      return;
    const hover = ({ target }) => {
      let el = target;
      while (el && !el.title) {
        if (el === anchor)
          return;
        el = el.parentElement;
      }
      if (el && el.title) {
        $$invalidate(4, anchor = el);
        $$invalidate(2, title = el.title);
        el.title = "";
      } else {
        if (anchor)
          $$invalidate(4, anchor.title = title, anchor);
        $$invalidate(4, anchor = null);
      }
    };
    root2.addEventListener("pointerover", hover);
    root2.addEventListener("pointerleave", hover);
    return () => {
      root2.removeEventListener("pointerover", hover);
      root2.removeEventListener("pointerleave", hover);
    };
  });
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Tooltips> was created with unknown prop '${key2}'`);
  });
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      tooltip = $$value;
      $$invalidate(0, tooltip);
    });
  }
  $$self.$capture_state = () => ({
    onMount,
    getSvelteRoot,
    media,
    isHoverSupported,
    root: root2,
    FloatingComponent,
    tooltip,
    anchor,
    title,
    $isHoverSupported
  });
  $$self.$inject_state = ($$props2) => {
    if ("FloatingComponent" in $$props2)
      $$invalidate(1, FloatingComponent = $$props2.FloatingComponent);
    if ("tooltip" in $$props2)
      $$invalidate(0, tooltip = $$props2.tooltip);
    if ("anchor" in $$props2)
      $$invalidate(4, anchor = $$props2.anchor);
    if ("title" in $$props2)
      $$invalidate(2, title = $$props2.title);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*tooltip, anchor*/
    17) {
      tooltip && (anchor ? tooltip.open(anchor) : tooltip.close());
    }
  };
  return [
    tooltip,
    FloatingComponent,
    title,
    isHoverSupported,
    anchor,
    switch_instance_binding
  ];
}
class Tooltips extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal$1, {}, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Tooltips",
      options,
      id: create_fragment$1.name
    });
  }
}
let sentry;
const isSentryEnabled = {}.VITE_SENTRYJS_DSN;
const onError = (e) => {
  initSentry(e.error);
};
const onUnhandledRejection = (e) => initSentry(e.reason);
const logError = (error) => sentry.then((Sentry) => Sentry.captureException(error));
if (isSentryEnabled) {
  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onUnhandledRejection);
}
function initSentry(error) {
  if (!sentry) {
    sentry = Promise.resolve().then(
      () => Promise.all([__vitePreload(() => import("./sentry.min-2474af7f.js"), true ? [] : void 0, import.meta.url)]).then(
        ([{ init: init2, captureException, BrowserTracing }]) => {
          init2({
            environment: "development",
            release: "0.5.2-524-g3aed9e88",
            dsn: {}.VITE_SENTRYJS_DSN,
            integrations: [new BrowserTracing()],
            tracesSampleRate: 1
          });
          return { captureException };
        }
      )
    ).then((sentry2) => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      return sentry2;
    });
    logError(error);
  }
}
const Fonts = "" + new URL("fonts-379acebb.css", import.meta.url).href;
const RouteSettingByConfigFeature = {
  camera_analysis: "faceAnalysis",
  makeup_virtual_try_on: "bestMatch",
  makeup_transfer: "makeupTransfer",
  gift_selection: "giftSelection",
  beauty_ai_advisor: "beautyAdvisor",
  book_a_demo: "bookADemo",
  skin_care: "skinCare"
};
const config = (token, overrides) => {
  const {
    brand,
    entry = "best-match",
    features,
    customerId: customerId2,
    language: language2 = "english",
    version
  } = parse(token);
  const routes = {};
  for (const feature of features) {
    const setting = RouteSettingByConfigFeature[feature];
    if (setting)
      routes[setting] = true;
  }
  Object.assign(routes, overrides);
  return {
    brand,
    entry,
    routes,
    customerId: customerId2,
    language: language2,
    version,
    features
  };
};
const parse = (token) => {
  try {
    return JSON.parse(window.atob(token));
  } catch {
    console.error("Incorrect or malformed token");
    return {
      features: [],
      products: []
    };
  }
};
const { console: console_1 } = globals;
const file = "src/App.svelte";
function add_css(target) {
  append_styles(target, "svelte-lxbv9d", `*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:host *:focus{outline:none}:root,:host{--tint-text-dark:#16161a;--tint-text-light:#ffffff;--tint-button-primary-background:#16161a;--tint-button-primary-background-hover:#39393c;--tint-button-primary-background-active:#515154;--tint-button-primary-background-disabled:#b9b9ba;--tint-button-secondary-background:#efefef;--tint-button-secondary-background-hover:#e7e7e7;--tint-button-secondary-background-active:#dfdfdf;--tint-button-secondary-background-disabled:#f7f7f7;--tint-button-sm-radius:18px;--tint-button-base-radius:18px;--tint-button-lg-radius:26px;--tint-item-badge-recommended:#0fa429;--tint-item-badge-applied:#16161a;--tint-item-badge-radius:999px;--tint-item-border:#dcdcdd;--tint-item-border-hover:#737376;--tint-item-border-applied:#16161a;--tint-navbar-background:#16161a;--tint-notification-background:#38383c}:root,:host,dialog{font-family:"Nunito Sans",sans-serif;color:var(--tint-text-dark)}h1,h2,h3,h4,h5,h6{font-weight:700}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.container{width:100%}@media(min-width: 640px){.container{max-width:640px}}@media(min-width: 768px){.container{max-width:768px}}@media(min-width: 1024px){.container{max-width:1024px}}@media(min-width: 1280px){.container{max-width:1280px}}@media(min-width: 1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.\\!visible{visibility:visible !important}.\\!invisible{visibility:hidden !important}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.top-\\[0\\.125rem\\]{top:2px}.left-\\[1\\.625rem\\]{left:26px}.top-0{top:0px}.left-0{left:0px}.top-1\\/2{top:50%}.left-1\\/2{left:50%}.-top-2{top:-8px}.bottom-1{bottom:4px}.left-10{left:40px}.top-3{top:12px}.-right-6{right:-24px}.bottom-8{bottom:32px}.bottom-0{bottom:0px}.top-\\[-0\\.125rem\\]{top:-2px}.left-\\[-0\\.5rem\\]{left:-8px}.bottom-3{bottom:12px}.right-3{right:12px}.top-\\[-0\\.25rem\\]{top:-4px}.left-\\[-0\\.25rem\\]{left:-4px}.top-1{top:4px}.right-1{right:4px}.top-2{top:8px}.right-2{right:8px}.left-1{left:4px}.-bottom-\\[calc\\(0\\.75rem\\+1px\\)\\]{bottom:calc(calc(12px + 1px) * -1)}.bottom-2{bottom:8px}.top-4{top:16px}.right-4{right:16px}.right-0{right:0px}.-right-2{right:-8px}.left-3{left:12px}.bottom-9{bottom:36px}.-top-\\[1px\\]{top:-1px}.-left-\\[1px\\]{left:-1px}.-right-\\[1px\\]{right:-1px}.-top-4{top:-16px}.-left-6{left:-24px}.top-\\[7\\.5rem\\]{top:120px}.top-5{top:20px}.right-5{right:20px}.left-4{left:16px}.z-10{z-index:10}.z-20{z-index:20}.z-\\[9\\]{z-index:9}.-z-\\[1\\]{z-index:-1}.z-\\[9000\\]{z-index:9000}.z-\\[10000\\]{z-index:10000}.z-\\[1\\]{z-index:1}.z-\\[99999999\\]{z-index:99999999}.z-\\[9999999\\]{z-index:9999999}.z-50{z-index:50}.z-40{z-index:40}.-order-1{order:-1}.col-start-2{grid-column-start:2}.row-span-2{grid-row:span 2 / span 2}.float-left{float:left}.m-auto{margin:auto}.m-2{margin:8px}.m-\\[0\\.625rem\\]{margin:10px}.m-0{margin:0px}.mx-auto{margin-left:auto;margin-right:auto}.mx-6{margin-left:24px;margin-right:24px}.mx-3{margin-left:12px;margin-right:12px}.my-3{margin-top:12px;margin-bottom:12px}.my-2{margin-top:8px;margin-bottom:8px}.mx-2{margin-left:8px;margin-right:8px}.mb-auto{margin-bottom:auto}.mb-4{margin-bottom:16px}.mr-1{margin-right:4px}.mt-20{margin-top:80px}.mt-2{margin-top:8px}.mt-10{margin-top:40px}.mb-2{margin-bottom:8px}.ml-auto{margin-left:auto}.mr-\\[2\\.75rem\\]{margin-right:44px}.-mr-1{margin-right:-4px}.-mb-2{margin-bottom:-8px}.-mt-3{margin-top:-12px}.mr-auto{margin-right:auto}.-mb-1{margin-bottom:-4px}.ml-1{margin-left:4px}.-ml-1{margin-left:-4px}.mr-5{margin-right:20px}.mt-\\[calc\\(var\\(--item-width-sm\\)\\/2\\)\\]{margin-top:calc(var(--item-width-sm) / 2)}.mb-3{margin-bottom:12px}.ml-3{margin-left:12px}.mb-7{margin-bottom:28px}.mb-\\[calc\\(0\\.75rem\\+1px\\)\\]{margin-bottom:calc(12px + 1px)}.mt-4{margin-top:16px}.mb-6{margin-bottom:24px}.-ml-5{margin-left:-20px}.mb-0{margin-bottom:0px}.mt-12{margin-top:48px}.mb-5{margin-bottom:20px}.mr-0\\.5{margin-right:2px}.mr-0{margin-right:0px}.ml-2{margin-left:8px}.-mt-2{margin-top:-8px}.mt-3{margin-top:12px}.mr-8{margin-right:32px}.mb-1{margin-bottom:4px}.mt-1{margin-top:4px}.mt-0{margin-top:0px}.-mt-\\[5\\.5rem\\]{margin-top:-88px}.mt-7{margin-top:28px}.mb-8{margin-bottom:32px}.mb-10{margin-bottom:40px}.-mt-2\\.5{margin-top:-10px}.mt-6{margin-top:24px}.mr-3{margin-right:12px}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.h-screen{height:100vh}.h-full{height:100%}.h-3{height:12px}.h-8{height:32px}.h-\\[6rem\\]{height:96px}.h-16{height:64px}.h-12{height:48px}.h-\\[1\\.125rem\\]{height:18px}.h-10{height:40px}.h-4{height:16px}.h-\\[3\\.75rem\\]{height:60px}.h-6{height:24px}.h-0{height:0px}.h-14{height:56px}.h-20{height:80px}.h-5{height:20px}.h-px{height:1px}.h-9{height:36px}.h-\\[9\\.75rem\\]{height:156px}.h-11{height:44px}.h-2\\.5{height:10px}.h-2{height:8px}.h-7{height:28px}.h-\\[2\\.625rem\\]{height:42px}.h-\\[32rem\\]{height:512px}.h-\\[19\\.5rem\\]{height:312px}.h-\\[18\\.5rem\\]{height:296px}.h-\\[2\\.5rem\\]{height:40px}.h-\\[4rem\\]{height:64px}.h-1{height:4px}.h-\\[calc\\(100\\%\\+2px\\)\\]{height:calc(100% + 2px)}.h-\\[1\\.5rem\\]{height:24px}.h-\\[2\\.75rem\\]{height:44px}.h-\\[50px\\]{height:50px}.h-\\[3\\.125rem\\]{height:50px}.h-\\[72\\%\\]{height:72%}.h-\\[1px\\]{height:1px}.h-0\\.5{height:2px}.max-h-\\[775px\\]{max-height:775px}.max-h-\\[25rem\\]{max-height:400px}.max-h-screen{max-height:100vh}.max-h-40{max-height:160px}.min-h-0{min-height:0px}.min-h-\\[3rem\\]{min-height:48px}.min-h-\\[2rem\\]{min-height:32px}.min-h-\\[2\\.25rem\\]{min-height:36px}.min-h-\\[2\\.5rem\\]{min-height:40px}.min-h-\\[60\\%\\]{min-height:60%}.w-full{width:100%}.w-screen{width:100vw}.w-3{width:12px}.w-\\[19\\.375rem\\]{width:310px}.w-\\[6rem\\]{width:96px}.w-8{width:32px}.w-\\[1\\.125rem\\]{width:18px}.w-10{width:40px}.w-4{width:16px}.w-\\[3\\.75rem\\]{width:60px}.w-6{width:24px}.w-\\[var\\(--item-width-sm\\)\\]{width:var(--item-width-sm)}.w-14{width:56px}.w-20{width:80px}.w-\\[5\\.4rem\\]{width:86.4px}.w-9{width:36px}.w-\\[18rem\\]{width:288px}.w-2\\.5{width:10px}.w-2{width:8px}.w-7{width:28px}.w-5{width:20px}.w-\\[2\\.625rem\\]{width:42px}.w-\\[30rem\\]{width:480px}.w-0{width:0px}.w-\\[17\\.5rem\\]{width:280px}.w-max{width:max-content}.w-\\[23\\.875rem\\]{width:382px}.w-\\[20\\.875rem\\]{width:334px}.w-\\[calc\\(var\\(--value\\)\\*1\\%\\)\\]{width:calc(var(--value) * 1%)}.w-\\[calc\\(3rem\\+2px\\)\\]{width:calc(48px + 2px)}.w-\\[1\\.5rem\\]{width:24px}.w-\\[2\\.75rem\\]{width:44px}.w-\\[50px\\]{width:50px}.w-\\[3\\.125rem\\]{width:50px}.w-\\[6\\.5rem\\]{width:104px}.w-\\[7\\.5rem\\]{width:120px}.w-\\[105\\%\\]{width:105%}.w-\\[6\\.975rem\\]{width:111.6px}.w-\\[33\\.125rem\\]{width:530px}.w-\\[8rem\\]{width:128px}.w-16{width:64px}.min-w-0{min-width:0px}.min-w-\\[14rem\\]{min-width:224px}.min-w-\\[17\\.375rem\\]{min-width:278px}.min-w-\\[4\\.0625rem\\]{min-width:65px}.max-w-\\[22\\.375rem\\]{max-width:358px}.max-w-\\[calc\\(50\\%-0\\.5rem\\)\\]{max-width:calc(50% - 8px)}.max-w-\\[15\\.5rem\\]{max-width:248px}.max-w-\\[48rem\\]{max-width:768px}.max-w-full{max-width:100%}.max-w-\\[17\\.375rem\\]{max-width:278px}.flex-shrink-0{flex-shrink:0}.shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.flex-grow{flex-grow:1}.flex-grow-0{flex-grow:0}.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-0{flex-basis:0px}.origin-\\[50\\%_52\\%\\]{transform-origin:50% 52%}.origin-\\[50\\%_48\\%\\]{transform-origin:50% 48%}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-full{--tw-translate-y:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-\\[calc\\(100\\%\\+0\\.5rem\\)\\]{--tw-translate-y:calc(calc(100% + 8px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-full{--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.animate-\\[fade-in_150ms_ease-out_forwards\\]{animation:fade-in 150ms ease-out forwards}.animate-\\[fade-out_150ms_ease-in_forwards\\]{animation:fade-out 150ms ease-in forwards}.animate-\\[lds-ring_1\\.2s_cubic-bezier\\(0\\.5\\2c 0\\2c 0\\.5\\2c 1\\)_infinite\\]{animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite}.cursor-default{cursor:default}.cursor-auto{cursor:auto}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;user-select:none}.resize{resize:both}.appearance-none{-webkit-appearance:none;appearance:none}.grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.grid-rows-2{grid-template-rows:repeat(2, minmax(0, 1fr))}.grid-rows-1{grid-template-rows:repeat(1, minmax(0, 1fr))}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-4{gap:16px}.gap-7{gap:28px}.gap-3{gap:12px}.gap-1{gap:4px}.gap-8{gap:32px}.gap-2{gap:8px}.gap-0{gap:0px}.gap-y-4{row-gap:16px}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-ellipsis{text-overflow:ellipsis}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:4px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-xl{border-radius:12px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-md{border-radius:6px}.rounded-\\[var\\(--tint-item-badge-radius\\)\\]{border-radius:var(--tint-item-badge-radius)}.rounded-none{border-radius:0px}.rounded-2xl{border-radius:18px}.rounded-\\[var\\(--tint-button-sm-radius\\)\\]{border-radius:var(--tint-button-sm-radius)}.rounded-\\[var\\(--tint-button-base-radius\\)\\]{border-radius:var(--tint-button-base-radius)}.rounded-\\[var\\(--tint-button-lg-radius\\)\\]{border-radius:var(--tint-button-lg-radius)}.rounded-b-xl{border-bottom-right-radius:12px;border-bottom-left-radius:12px}.border{border-width:1px}.border-2{border-width:2px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-none{border-style:none}.border-\\[\\#dcdcdd\\]{--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity))}.border-\\[\\#16161a\\]{--tw-border-opacity:1;border-color:rgb(22 22 26 / var(--tw-border-opacity))}.border-\\[\\#eee\\]{--tw-border-opacity:1;border-color:rgb(238 238 238 / var(--tw-border-opacity))}.border-slate-300\\/30{border-color:rgb(203 213 225 / 0.3)}.border-\\[\\#eeeeee\\]{--tw-border-opacity:1;border-color:rgb(238 238 238 / var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-\\[\\#4ccc75\\]{--tw-border-opacity:1;border-color:rgb(76 204 117 / var(--tw-border-opacity))}.border-b-current{border-bottom-color:currentColor}.bg-\\[\\#f9b74a\\]{--tw-bg-opacity:1;background-color:rgb(249 183 74 / var(--tw-bg-opacity))}.bg-slate-300\\/30{background-color:rgb(203 213 225 / 0.3)}.bg-\\[\\#ff2d55\\]{--tw-bg-opacity:1;background-color:rgb(255 45 85 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[\\#f4f4f4\\]{--tw-bg-opacity:1;background-color:rgb(244 244 244 / var(--tw-bg-opacity))}.bg-black\\/40{background-color:rgb(0 0 0 / 0.4)}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-\\[var\\(--tint-item-badge-applied\\)\\]{background-color:var(--tint-item-badge-applied)}.bg-\\[var\\(--tint-item-badge-recommended\\)\\]{background-color:var(--tint-item-badge-recommended)}.bg-\\[\\#dcdcdd\\]{--tw-bg-opacity:1;background-color:rgb(220 220 221 / var(--tw-bg-opacity))}.bg-\\[var\\(--tint-button-primary-background\\)\\]{background-color:var(--tint-button-primary-background)}.bg-\\[var\\(--tint-button-primary-background-hover\\)\\]{background-color:var(--tint-button-primary-background-hover)}.bg-\\[var\\(--tint-button-primary-background-active\\)\\]{background-color:var(--tint-button-primary-background-active)}.bg-\\[var\\(--tint-button-primary-background-disabled\\)\\]{background-color:var(--tint-button-primary-background-disabled)}.bg-\\[var\\(--tint-button-secondary-background\\)\\]{background-color:var(--tint-button-secondary-background)}.bg-\\[var\\(--tint-button-secondary-background-hover\\)\\]{background-color:var(--tint-button-secondary-background-hover)}.bg-\\[var\\(--tint-button-secondary-background-active\\)\\]{background-color:var(--tint-button-secondary-background-active)}.bg-\\[var\\(--tint-button-secondary-background-disabled\\)\\]{background-color:var(--tint-button-secondary-background-disabled)}.bg-\\[\\#16161a\\]{--tw-bg-opacity:1;background-color:rgb(22 22 26 / var(--tw-bg-opacity))}.bg-\\[\\#4ccc75\\]{--tw-bg-opacity:1;background-color:rgb(76 204 117 / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-black\\/30{background-color:rgb(0 0 0 / 0.3)}.bg-slate-300\\/20{background-color:rgb(203 213 225 / 0.2)}.bg-\\[\\#f8f8f8\\]{--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))}.bg-\\[\\#f3f3f3\\]{--tw-bg-opacity:1;background-color:rgb(243 243 243 / var(--tw-bg-opacity))}.bg-\\[\\#fff\\]{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[var\\(--tint-navbar-background\\)\\]{background-color:var(--tint-navbar-background)}.bg-\\[var\\(--tint-notification-background\\)\\]{background-color:var(--tint-notification-background)}.bg-\\[\\#38383c\\]{--tw-bg-opacity:1;background-color:rgb(56 56 60 / var(--tw-bg-opacity))}.bg-\\[var\\(--tint-text-dark\\)\\]{background-color:var(--tint-text-dark)}.bg-slate-300\\/50{background-color:rgb(203 213 225 / 0.5)}.bg-black\\/10{background-color:rgb(0 0 0 / 0.1)}.bg-\\[\\#b9b9ba\\]{--tw-bg-opacity:1;background-color:rgb(185 185 186 / var(--tw-bg-opacity))}.bg-opacity-25{--tw-bg-opacity:0.25}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-opacity-\\[0\\.12\\]{--tw-bg-opacity:0.12}.bg-opacity-0{--tw-bg-opacity:0}.bg-opacity-\\[0\\.07\\]{--tw-bg-opacity:0.07}.bg-opacity-\\[0\\.15\\]{--tw-bg-opacity:0.15}.bg-opacity-20{--tw-bg-opacity:0.2}.bg-gradient-to-b{background-image:linear-gradient(to bottom, var(--tw-gradient-stops))}.bg-\\[image\\:var\\(--icon-sm\\)\\]{background-image:var(--icon-sm)}.bg-\\[image\\:var\\(--icon-xs\\)\\]{background-image:var(--icon-xs)}.bg-\\[image\\:var\\(--icon-lg\\)\\]{background-image:var(--icon-lg)}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-to:rgb(0 0 0 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.bg-\\[center_left_0\\.25rem\\]{background-position:center left 4px}.bg-center{background-position:center}.bg-no-repeat{background-repeat:no-repeat}.fill-\\[\\#f3f3f3\\]{fill:#f3f3f3}.fill-\\[\\#f8f8f8\\]{fill:#f8f8f8}.fill-\\[\\#fcededf3\\]{fill:#fcededf3}.stroke-\\[\\#737376\\]{stroke:#737376}.stroke-\\[\\#dcdcdd\\]{stroke:#dcdcdd}.stroke-\\[\\#e64f4f\\]{stroke:#e64f4f}.object-cover{object-fit:cover}.p-4{padding:16px}.p-8{padding:32px}.p-3{padding:12px}.p-2{padding:8px}.p-0{padding:0px}.px-4{padding-left:16px;padding-right:16px}.py-0{padding-top:0px;padding-bottom:0px}.px-10{padding-left:40px;padding-right:40px}.py-7{padding-top:28px;padding-bottom:28px}.px-5{padding-left:20px;padding-right:20px}.py-3{padding-top:12px;padding-bottom:12px}.py-1\\.5{padding-top:6px;padding-bottom:6px}.py-1{padding-top:4px;padding-bottom:4px}.px-1{padding-left:4px;padding-right:4px}.px-3{padding-left:12px;padding-right:12px}.px-2{padding-left:8px;padding-right:8px}.px-0\\.5{padding-left:2px;padding-right:2px}.px-0{padding-left:0px;padding-right:0px}.py-2{padding-top:8px;padding-bottom:8px}.px-6{padding-left:24px;padding-right:24px}.py-\\[0\\.625rem\\]{padding-top:10px;padding-bottom:10px}.py-\\[0\\.3125rem\\]{padding-top:5px;padding-bottom:5px}.py-4{padding-top:16px;padding-bottom:16px}.px-\\[1\\.125rem\\]{padding-left:18px;padding-right:18px}.py-\\[calc\\(0\\.5rem-2px\\)\\]{padding-top:calc(8px - 2px);padding-bottom:calc(8px - 2px)}.py-8{padding-top:32px;padding-bottom:32px}.pb-\\[100\\%\\]{padding-bottom:100%}.pb-\\[calc\\(410\\/768\\*100\\%\\)\\]{padding-bottom:calc(410 / 768 * 100%)}.pl-4{padding-left:16px}.pr-4{padding-right:16px}.pt-6{padding-top:24px}.pt-3{padding-top:12px}.pb-3{padding-bottom:12px}.pb-\\[32\\%\\]{padding-bottom:32%}.pb-8{padding-bottom:32px}.pb-4{padding-bottom:16px}.pl-1\\.5{padding-left:6px}.pl-1{padding-left:4px}.pl-7{padding-left:28px}.pt-1{padding-top:4px}.text-center{text-align:center}.text-4xl{font-size:36px;line-height:40px}.text-2xl{font-size:24px;line-height:32px}.text-xl{font-size:20px;line-height:28px}.text-sm{font-size:14px;line-height:20px}.text-base{font-size:16px;line-height:24px}.text-\\[3\\.375rem\\]{font-size:54px}.text-xs{font-size:12px;line-height:16px}.text-5xl{font-size:48px;line-height:1}.text-3xl{font-size:30px;line-height:36px}.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-normal{font-weight:400}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.leading-\\[1\\.22\\]{line-height:1.22}.text-\\[\\#4ccc75\\]{--tw-text-opacity:1;color:rgb(76 204 117 / var(--tw-text-opacity))}.text-\\[\\#38383c\\]{--tw-text-opacity:1;color:rgb(56 56 60 / var(--tw-text-opacity))}.text-\\[var\\(--tint-text-light\\)\\]{color:var(--tint-text-light)}.text-\\[\\#1a1616\\]{--tw-text-opacity:1;color:rgb(26 22 22 / var(--tw-text-opacity))}.text-\\[\\#2d2d36\\]{--tw-text-opacity:1;color:rgb(45 45 54 / var(--tw-text-opacity))}.text-\\[var\\(--tint-text-dark\\)\\]{color:var(--tint-text-dark)}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-opacity-60{--tw-text-opacity:0.6}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-60{opacity:0.6}.opacity-75{opacity:0.75}.opacity-50{opacity:0.5}.opacity-100{opacity:1}.shadow-\\[0_-4px_24px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.15\\)\\]{--tw-shadow:0 -4px 24px 0 rgba(0,0,0,0.15);--tw-shadow-colored:0 -4px 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1px_var\\(--tint-item-border\\)\\]{--tw-shadow:inset 0 0 0 1px var(--tint-item-border);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1px_var\\(--tint-item-border-hover\\)\\]{--tw-shadow:inset 0 0 0 1px var(--tint-item-border-hover);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[inset_0_0_0_1\\.5px_var\\(--tint-item-border-applied\\)\\]{--tw-shadow:inset 0 0 0 1.5px var(--tint-item-border-applied);--tw-shadow-colored:inset 0 0 0 1.5px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-\\[inset_0_-1px_\\#dcdcdd\\]{--tw-shadow:inset 0 -1px #dcdcdd;--tw-shadow-colored:inset 0 -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.blur-lg{--tw-blur:blur(16px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[background-color\\2c opacity\\]{transition-property:background-color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[background-color\\2c color\\2c opacity\\]{transition-property:background-color,color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[width\\2c transform\\]{transition-property:width,transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-\\[width\\]{transition-property:width;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.delay-700{transition-delay:700ms}.delay-\\[0s\\]{transition-delay:0s}.duration-200{transition-duration:200ms}.content-\\[\\"\\"\\]{--tw-content:"";content:var(--tw-content)}.content-\\[\\'\\'\\]{--tw-content:'';content:var(--tw-content)}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.\\[text-shadow\\:0_3px_8px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.5\\)\\]{text-shadow:0 3px 8px rgba(0,0,0,0.5)}.hover\\:underline:hover{text-decoration-line:underline}@media not all and (min-width: 768px){.max-md\\:h-full{height:100%}.max-md\\:transition-\\[height\\]{transition-property:height;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}}@media(max-width: 360px){.max-\\[360px\\]\\:-ml-6{margin-left:-24px}}@media(min-width: 768px){.md\\:relative{position:relative}.md\\:left-\\[7\\.5rem\\]{left:120px}.md\\:-right-9{right:-36px}.md\\:right-5{right:20px}.md\\:top-2{top:8px}.md\\:bottom-8{bottom:32px}.md\\:top-6{top:24px}.md\\:-top-4{top:-16px}.md\\:top-auto{top:auto}.md\\:top-5{top:20px}.md\\:left-5{left:20px}.md\\:mx-0{margin-left:0px;margin-right:0px}.md\\:mt-3{margin-top:12px}.md\\:mb-4{margin-bottom:16px}.md\\:mb-0{margin-bottom:0px}.md\\:-mt-4{margin-top:-16px}.md\\:mt-\\[calc\\(var\\(--item-width-md\\)\\/2\\)\\]{margin-top:calc(var(--item-width-md) / 2)}.md\\:mt-10{margin-top:40px}.md\\:mb-2{margin-bottom:8px}.md\\:mt-4{margin-top:16px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:h-\\[8\\.5rem\\]{height:136px}.md\\:h-5{height:20px}.md\\:h-auto{height:auto}.md\\:h-\\[31rem\\]{height:496px}.md\\:h-10{height:40px}.md\\:h-8{height:32px}.md\\:max-h-\\[14rem\\]{max-height:224px}.md\\:w-\\[21rem\\]{width:336px}.md\\:w-\\[8\\.5rem\\]{width:136px}.md\\:w-\\[var\\(--item-width-md\\)\\]{width:var(--item-width-md)}.md\\:w-full{width:100%}.md\\:w-\\[43\\.5rem\\]{width:696px}.md\\:w-\\[6\\.75rem\\]{width:108px}.md\\:w-8{width:32px}.md\\:w-\\[41rem\\]{width:656px}.md\\:w-\\[30\\.74rem\\]{width:491.84px}.md\\:w-\\[47\\%\\]{width:47%}.md\\:min-w-\\[17\\.5rem\\]{min-width:280px}.md\\:max-w-\\[33\\.375rem\\]{max-width:534px}.md\\:max-w-\\[40rem\\]{max-width:640px}.md\\:max-w-\\[22\\.375rem\\]{max-width:358px}.md\\:max-w-\\[15\\.5rem\\]{max-width:248px}.md\\:max-w-\\[19\\.25rem\\]{max-width:308px}.md\\:grow{flex-grow:1}.md\\:grow-0{flex-grow:0}.md\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr))}.md\\:flex-col{flex-direction:column}.md\\:items-center{align-items:center}.md\\:gap-5{gap:20px}.md\\:gap-4{gap:16px}.md\\:gap-20{gap:80px}.md\\:gap-1{gap:4px}.md\\:gap-2{gap:8px}.md\\:gap-x-3{column-gap:12px}.md\\:gap-y-8{row-gap:32px}.md\\:rounded-lg{border-radius:8px}.md\\:rounded-\\[1rem\\]{border-radius:16px}.md\\:bg-\\[image\\:var\\(--icon-md\\)\\]{background-image:var(--icon-md)}.md\\:p-8{padding:32px}.md\\:p-5{padding:20px}.md\\:p-10{padding:40px}.md\\:py-10{padding-top:40px;padding-bottom:40px}.md\\:py-\\[4\\.125rem\\]{padding-top:66px;padding-bottom:66px}.md\\:py-4{padding-top:16px;padding-bottom:16px}.md\\:px-8{padding-left:32px;padding-right:32px}.md\\:pb-\\[calc\\(410\\/768\\*100\\%\\)\\]{padding-bottom:calc(410 / 768 * 100%)}.md\\:pl-8{padding-left:32px}.md\\:pr-8{padding-right:32px}.md\\:pb-\\[calc\\(576\\/768\\*100\\%\\)\\]{padding-bottom:calc(576 / 768 * 100%)}.md\\:pb-\\[100\\%\\]{padding-bottom:100%}.md\\:pb-\\[30\\%\\]{padding-bottom:30%}.md\\:pt-4{padding-top:16px}.md\\:pr-5{padding-right:20px}.md\\:pl-4{padding-left:16px}.md\\:pl-0{padding-left:0px}.md\\:text-center{text-align:center}.md\\:text-xl{font-size:20px;line-height:28px}.md\\:shadow-\\[0_4px_16px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\2c 0_0_4px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.05\\)\\]{--tw-shadow:0 4px 16px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.05);--tw-shadow-colored:0 4px 16px 0 var(--tw-shadow-color), 0 0 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}}@media(min-width: 1024px){.lg\\:visible{visibility:visible}.lg\\:relative{position:relative}.lg\\:bottom-5{bottom:20px}.lg\\:left-10{left:40px}.lg\\:bottom-6{bottom:24px}.lg\\:-order-1{order:-1}.lg\\:order-2{order:2}.lg\\:order-1{order:1}.lg\\:m-6{margin:24px}.lg\\:-mx-5{margin-left:-20px;margin-right:-20px}.lg\\:-mt-8{margin-top:-32px}.lg\\:ml-0{margin-left:0px}.lg\\:mt-\\[12\\.5rem\\]{margin-top:200px}.lg\\:mt-\\[calc\\(var\\(--item-width-lg\\)\\/2\\)\\]{margin-top:calc(var(--item-width-lg) / 2)}.lg\\:mr-0{margin-right:0px}.lg\\:mb-0{margin-bottom:0px}.lg\\:mt-0{margin-top:0px}.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:h-auto{height:auto}.lg\\:h-full{height:100%}.lg\\:h-\\[14rem\\]{height:224px}.lg\\:h-\\[2\\.625rem\\]{height:42px}.lg\\:h-11{height:44px}.lg\\:max-h-\\[none\\]{max-height:none}.lg\\:w-\\[calc\\(360\\/\\(960\\+-2\\*24\\)\\*100\\%\\)\\]{width:calc(360 / (960 + -2 * 24) * 100%)}.lg\\:w-\\[47\\.5rem\\]{width:760px}.lg\\:w-\\[calc\\(430\\/\\(1024\\)\\*100\\%\\)\\]{width:calc(430 / (1024) * 100%)}.lg\\:w-\\[40\\%\\]{width:40%}.lg\\:w-\\[var\\(--item-width-lg\\)\\]{width:var(--item-width-lg)}.lg\\:w-full{width:100%}.lg\\:w-\\[2\\.625rem\\]{width:42px}.lg\\:w-\\[9\\.25rem\\]{width:148px}.lg\\:max-w-\\[29\\.375rem\\]{max-width:470px}.lg\\:max-w-\\[462px\\]{max-width:462px}.lg\\:max-w-\\[398px\\]{max-width:398px}.lg\\:grow{flex-grow:1}.lg\\:flex-row{flex-direction:row}.lg\\:flex-wrap{flex-wrap:wrap}.lg\\:gap-6{gap:24px}.lg\\:bg-\\[image\\:var\\(--icon-lg\\)\\]{background-image:var(--icon-lg)}.lg\\:p-6{padding:24px}.lg\\:px-4{padding-left:16px;padding-right:16px}.lg\\:pr-2{padding-right:8px}.lg\\:pb-0{padding-bottom:0px}.lg\\:pb-\\[120\\%\\]{padding-bottom:120%}.lg\\:text-\\[5\\.25rem\\]{font-size:84px}.lg\\:leading-\\[1\\.38\\]{line-height:1.38}.lg\\:hover\\:w-\\[17\\.5rem\\]:hover{width:280px}}@media(min-width: 1280px){.xl\\:m-8{margin:32px}.xl\\:hidden{display:none}.xl\\:h-\\[48\\.4375rem\\]{height:775px}.xl\\:max-h-\\[48\\.5rem\\]{max-height:776px}.xl\\:w-\\[75rem\\]{width:1200px}.xl\\:w-\\[calc\\(398\\/\\(1136\\+-2\\*32\\)\\*100\\%\\)\\]{width:calc(398 / (1136 + -2 * 32) * 100%)}.xl\\:w-\\[calc\\(568\\/\\(1200\\)\\*100\\%\\)\\]{width:calc(568 / (1200) * 100%)}.xl\\:max-w-\\[75rem\\]{max-width:1200px}.xl\\:gap-8{gap:32px}}.\\[\\&\\>\\*\\]\\:\\!absolute>*{position:absolute !important}.\\[\\&\\>\\*\\]\\:top-0>*{top:0px}.\\[\\&\\>\\*\\]\\:left-0>*{left:0px}.\\[\\&\\>\\*\\]\\:h-full>*{height:100%}.\\[\\&\\>\\*\\]\\:w-full>*{width:100%}.\\[\\&\\>\\*\\]\\:shrink-0>*{flex-shrink:0}`);
}
function create_if_block(ctx) {
  let stylesheet0;
  let t;
  let stylesheet1;
  let current;
  stylesheet0 = new StyleSheet({
    props: {
      href: `${/*whiteLabelEndpoint*/
      ctx[3]}/${/*brand*/
      ctx[4]}/fonts.css`
    },
    $$inline: true
  });
  stylesheet1 = new StyleSheet({
    props: {
      href: `${/*whiteLabelEndpoint*/
      ctx[3]}/${/*brand*/
      ctx[4]}/theme.css`
    },
    $$inline: true
  });
  const block = {
    c: function create2() {
      create_component(stylesheet0.$$.fragment);
      t = space();
      create_component(stylesheet1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(stylesheet0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(stylesheet1, target, anchor);
      current = true;
    },
    p: noop$1,
    i: function intro(local) {
      if (current)
        return;
      transition_in(stylesheet0.$$.fragment, local);
      transition_in(stylesheet1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(stylesheet0.$$.fragment, local);
      transition_out(stylesheet1.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(stylesheet0, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(stylesheet1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(99:0) {#if brand}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let slot;
  const block = {
    c: function create2() {
      slot = element("slot");
      attr_dev(slot, "name", "overlay");
      add_location(slot, file, 119, 4, 4635);
    },
    m: function mount(target, anchor) {
      insert_dev(target, slot, anchor);
    },
    p: noop$1,
    d: function destroy2(detaching) {
      if (detaching)
        detach_dev(slot);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(115:2) <Router     routes={pages.default(routes)}     initialPath={entry}     on:change={({ detail }) => (route = detail)}   >",
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let router;
  let current;
  router = new Router({
    props: {
      routes: index(
        /*routes*/
        ctx[6]
      ),
      initialPath: (
        /*entry*/
        ctx[5]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  router.$on(
    "change",
    /*change_handler*/
    ctx[17]
  );
  const block = {
    c: function create2() {
      create_component(router.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(router, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      const router_changes = {};
      if (dirty[1] & /*$$scope*/
      4) {
        router_changes.$$scope = { dirty, ctx: ctx2 };
      }
      router.$set(router_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(router.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(router.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(router, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(104:0) <Modal   class={`tint-widget ${isMobileDevice() && \\"tint-mobile\\"}`}   bind:this={modal}   on:close={() => wcam?.stop()}   on:open={() => analytics.app_opened()}   on:close={() => analytics.close_app()}   on:open={async () => await startWebcam()}   on:close={() => stopWebcam()}   on:open   on:close >',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let stylesheet;
  let t0;
  let t1;
  let modal_1;
  let t2;
  let tooltips;
  let current;
  stylesheet = new StyleSheet({ props: { href: Fonts }, $$inline: true });
  let if_block = (
    /*brand*/
    ctx[4] && create_if_block(ctx)
  );
  let modal_1_props = {
    class: `tint-widget ${isMobileDevice() && "tint-mobile"}`,
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  modal_1 = new Modal({ props: modal_1_props, $$inline: true });
  ctx[18](modal_1);
  modal_1.$on(
    "close",
    /*close_handler_1*/
    ctx[19]
  );
  modal_1.$on(
    "open",
    /*open_handler_1*/
    ctx[20]
  );
  modal_1.$on(
    "close",
    /*close_handler_2*/
    ctx[21]
  );
  modal_1.$on(
    "open",
    /*open_handler_2*/
    ctx[22]
  );
  modal_1.$on(
    "close",
    /*close_handler_3*/
    ctx[23]
  );
  modal_1.$on(
    "open",
    /*open_handler*/
    ctx[24]
  );
  modal_1.$on(
    "close",
    /*close_handler*/
    ctx[25]
  );
  tooltips = new Tooltips({ $$inline: true });
  const block = {
    c: function create2() {
      create_component(stylesheet.$$.fragment);
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      create_component(modal_1.$$.fragment);
      t2 = space();
      create_component(tooltips.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(stylesheet, target, anchor);
      insert_dev(target, t0, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(modal_1, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(tooltips, target, anchor);
      current = true;
    },
    p: function update2(ctx2, dirty) {
      if (
        /*brand*/
        ctx2[4]
      )
        if_block.p(ctx2, dirty);
      const modal_1_changes = {};
      if (dirty[0] & /*route*/
      1 | dirty[1] & /*$$scope*/
      4) {
        modal_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal_1.$set(modal_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(stylesheet.$$.fragment, local);
      transition_in(if_block);
      transition_in(modal_1.$$.fragment, local);
      transition_in(tooltips.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(stylesheet.$$.fragment, local);
      transition_out(if_block);
      transition_out(modal_1.$$.fragment, local);
      transition_out(tooltips.$$.fragment, local);
      current = false;
    },
    d: function destroy2(detaching) {
      destroy_component(stylesheet, detaching);
      if (detaching)
        detach_dev(t0);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(t1);
      ctx[18](null);
      destroy_component(modal_1, detaching);
      if (detaching)
        detach_dev(t2);
      destroy_component(tooltips, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let $imageSource;
  validate_store(source, "imageSource");
  component_subscribe($$self, source, ($$value) => $$invalidate(26, $imageSource = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("App", slots, []);
  let { token = "eyJmZWF0dXJlcyI6WyJtYWtldXBfdmlydHVhbF90cnlfb24iLCJtdWx0aXBsZV9za3VfdHJ5X29uIiwiY3VzdG9tX21ha2V1cF9sb29rcyIsImNhbWVyYV9hbmFseXNpcyIsInBlcnNvbmFsaXplZF9za3UiLCJiZWF1dHlfYWlfYWR2aXNvciIsImFuYWx5dGljcyIsInVpX2JyYW5kX2N1c3RvbWl6YXRpb24iLCJzZWFzb25hbF9jb2xvcl9hbmFseXNpcyIsIm1ha2V1cF90cmFuc2ZlciIsImNhbWVyYV9xdWFsaXR5X2Jvb3N0ZXIiLCJnaWZ0X3NlbGVjdGlvbiIsInNraW5jYXJlX3JlY29tbWVuZGF0aW9ucyIsInNraW5fY2FyZSJdLCJwcm9kdWN0cyI6WyJleWVsaW5lciIsImV5ZXNoYWRvdyIsIm1hc2NhcmEiLCJibHVzaCIsImZvdW5kYXRpb24iLCJsaXBzdGljayIsImV5ZWJyb3ciLCJoaWdobGlnaHRlciIsImNvbnRvdXIiLCJjb25jZWFsZXIiLCJleWVfY29sb3IiLCJza2luX3Ntb290aGVyIl0sImVudHJ5IjoiYmVzdC1tYXRjaCJ9" } = $$props;
  let { sdkToken = "Qk5CIErl6VLcyPS9qB4IsGc5HFXbHkjJjs1yB7WQHxNDAxqjirAdwpSLxPoJu5Zq1p505LYHOinK8tLgzYmlmeBsmx9pWTgoBnD2edlZf1uvTdGdcvh3nqY9eQk=" } = $$props;
  let { skipTerms = false } = $$props;
  let { skipSource = false } = $$props;
  const whiteLabelEndpoint = {}.VITE_WL_ENDPOINT ?? "";
  if (typeof skipTerms !== "boolean")
    skipTerms = true;
  if (typeof skipSource !== "boolean")
    skipSource = true;
  const open = () => modal.open();
  const close = () => modal.close();
  let modal;
  let wcam;
  const useWebcam2 = () => requestCameraPermissions().then((granted) => {
    analytics.camera_permission(granted);
    if (!granted)
      return null;
    set_store_value(source, $imageSource = { type: "webcam" }, $imageSource);
    return $$invalidate(2, wcam = {
      stop: () => set_store_value(source, $imageSource = null, $imageSource)
    });
  });
  const usePhoto2 = (photo) => {
    set_store_value(source, $imageSource = { type: "photo", data: photo }, $imageSource);
  };
  const applyProduct = (...products2) => appliedProducts.updateQueue(...products2);
  const applyProductByCustomerSku = async (customerSkuIds) => {
    const products2 = await gql(GetProducts, { customerSkus: customerSkuIds }).then(({ products: products3 }) => products3.items);
    if (products2.length < customerSkuIds.length) {
      for (const skuId of customerSkuIds)
        if (!products2.find((p) => p.skus.find((s) => s.sku === skuId)))
          console.warn(`The products with SKU ID "${skuId}" is not found or does not exist`);
    }
    applyProduct(...products2);
  };
  const dispatch2 = createEventDispatcher();
  cart.on("add", (products2) => dispatch2("addToCart", products2));
  cart.on("remove", (products2) => dispatch2("removeFromCart", products2));
  cart.on("redirect", () => dispatch2("redirectToCart"));
  appliedProducts.on("add", (products2) => dispatch2("applyProduct", products2));
  appliedProducts.on("remove", (products2) => dispatch2("removeAppliedProduct", products2));
  appliedProducts.on("replace", (products2) => dispatch2("replaceAppliedProduct", products2));
  const { brand, entry, routes, customerId: customerId2, language: language2, version, features } = config(token, {
    terms: !skipTerms,
    imageSourceSelection: !skipSource
  });
  if (language2)
    setActiveLanguage(language2);
  setClientToken(sdkToken);
  setContext({ brand });
  setContext$1({
    routes: navigation(routes),
    close,
    demo: routes.bookADemo,
    recommendationSystemVersion: version === "recommendationSystem",
    productsLinks: features.includes("products_links")
  });
  if (brand)
    setBase(`${whiteLabelEndpoint}/${brand}/icons/`);
  let route;
  const flow = defaultNavigationFlow(routes, entry);
  onMount(() => {
    onDemoEvent("pickADate", () => dispatch2("demo"));
    if (customerId2)
      billingInit(customerId2);
  });
  const writable_props = ["token", "sdkToken", "skipTerms", "skipSource"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console_1.warn(`<App> was created with unknown prop '${key2}'`);
  });
  const change_handler = ({ detail }) => $$invalidate(0, route = detail);
  function modal_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modal = $$value;
      $$invalidate(1, modal);
    });
  }
  const close_handler_1 = () => wcam == null ? void 0 : wcam.stop();
  const open_handler_1 = () => analytics.app_opened();
  const close_handler_2 = () => analytics.close_app();
  const open_handler_2 = async () => await startWebcam();
  const close_handler_3 = () => stopWebcam();
  function open_handler(event) {
    bubble.call(this, $$self, event);
  }
  function close_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("token" in $$props2)
      $$invalidate(9, token = $$props2.token);
    if ("sdkToken" in $$props2)
      $$invalidate(10, sdkToken = $$props2.sdkToken);
    if ("skipTerms" in $$props2)
      $$invalidate(7, skipTerms = $$props2.skipTerms);
    if ("skipSource" in $$props2)
      $$invalidate(8, skipSource = $$props2.skipSource);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    Queries,
    gql,
    analytics,
    Modal,
    StyleSheet,
    Tooltips,
    setIconBase: setBase,
    Router,
    requestCameraPermissions,
    isMobileDevice,
    setClientToken,
    startWebcam,
    stopWebcam,
    billingInit,
    onDemoEvent,
    Fonts,
    pages,
    setActiveLanguage,
    setAppContext: setContext,
    setLayoutContext: setContext$1,
    appliedProducts,
    cart,
    imageSource: source,
    config,
    token,
    sdkToken,
    skipTerms,
    skipSource,
    whiteLabelEndpoint,
    open,
    close,
    modal,
    wcam,
    useWebcam: useWebcam2,
    usePhoto: usePhoto2,
    applyProduct,
    applyProductByCustomerSku,
    dispatch: dispatch2,
    brand,
    entry,
    routes,
    customerId: customerId2,
    language: language2,
    version,
    features,
    route,
    flow,
    $imageSource
  });
  $$self.$inject_state = ($$props2) => {
    if ("token" in $$props2)
      $$invalidate(9, token = $$props2.token);
    if ("sdkToken" in $$props2)
      $$invalidate(10, sdkToken = $$props2.sdkToken);
    if ("skipTerms" in $$props2)
      $$invalidate(7, skipTerms = $$props2.skipTerms);
    if ("skipSource" in $$props2)
      $$invalidate(8, skipSource = $$props2.skipSource);
    if ("modal" in $$props2)
      $$invalidate(1, modal = $$props2.modal);
    if ("wcam" in $$props2)
      $$invalidate(2, wcam = $$props2.wcam);
    if ("route" in $$props2)
      $$invalidate(0, route = $$props2.route);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*route*/
    1) {
      {
        const next = route ? flow.next(route.pathname) : flow.initial();
        next && flow.preload(next);
      }
    }
  };
  return [
    route,
    modal,
    wcam,
    whiteLabelEndpoint,
    brand,
    entry,
    routes,
    skipTerms,
    skipSource,
    token,
    sdkToken,
    open,
    close,
    useWebcam2,
    usePhoto2,
    applyProduct,
    applyProductByCustomerSku,
    change_handler,
    modal_1_binding,
    close_handler_1,
    open_handler_1,
    close_handler_2,
    open_handler_2,
    close_handler_3,
    open_handler,
    close_handler
  ];
}
class App extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal$1,
      {
        token: 9,
        sdkToken: 10,
        skipTerms: 7,
        skipSource: 8,
        open: 11,
        close: 12,
        useWebcam: 13,
        usePhoto: 14,
        applyProduct: 15,
        applyProductByCustomerSku: 16
      },
      add_css,
      [-1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "App",
      options,
      id: create_fragment.name
    });
  }
  get token() {
    throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set token(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get sdkToken() {
    throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sdkToken(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get skipTerms() {
    throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set skipTerms(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get skipSource() {
    throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set skipSource(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get open() {
    return this.$$.ctx[11];
  }
  set open(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get close() {
    return this.$$.ctx[12];
  }
  set close(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get useWebcam() {
    return this.$$.ctx[13];
  }
  set useWebcam(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get usePhoto() {
    return this.$$.ctx[14];
  }
  set usePhoto(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get applyProduct() {
    return this.$$.ctx[15];
  }
  set applyProduct(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get applyProductByCustomerSku() {
    return this.$$.ctx[16];
  }
  set applyProductByCustomerSku(value) {
    throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  Analysis as $,
  set_data_dev as A,
  Beauty as B,
  transition_in as C,
  transition_out as D,
  detach_dev as E,
  destroy_component as F,
  run_all as G,
  accept as H,
  construct_svelte_component_dev as I,
  step as J,
  percent as K,
  result as L,
  source as M,
  routerPath as N,
  skinCare as O,
  Paths as P,
  setSourceChanged as Q,
  empty as R,
  SvelteComponentDev as S,
  group_outros as T,
  check_outros as U,
  set_store_value as V,
  debug as W,
  preload$1 as X,
  getPlayer as Y,
  AnalysisResources as Z,
  AnalysisEffect as _,
  stopWebcam as a,
  SeasonType as a$,
  useWebcam$1 as a0,
  get as a1,
  resize as a2,
  crop as a3,
  render$1 as a4,
  destroy$1 as a5,
  SDK as a6,
  setGift as a7,
  sca as a8,
  clear as a9,
  pickADate as aA,
  showAd as aB,
  Icon as aC,
  globals as aD,
  setContext$1 as aE,
  setContext$2 as aF,
  getContext$2 as aG,
  IconButton as aH,
  getSvelteRoot as aI,
  writable$1 as aJ,
  action_destroyer as aK,
  add_render_callback as aL,
  create_in_transition as aM,
  create_out_transition as aN,
  onMount as aO,
  tick as aP,
  create_bidirectional_transition as aQ,
  src_url_equal as aR,
  set_attributes as aS,
  __vitePreload as aT,
  random as aU,
  onDestroy as aV,
  readable as aW,
  subscribe as aX,
  InlineSVG as aY,
  svg_element as aZ,
  requestCameraPermissions as a_,
  noop$1 as aa,
  validate_each_argument as ab,
  compute_rest_props as ac,
  assign as ad,
  exclude_internal_props as ae,
  cx as af,
  null_to_empty as ag,
  toggle_class as ah,
  destroy_each as ai,
  validate_dynamic_element as aj,
  validate_void_dynamic_element as ak,
  create_slot as al,
  bubble as am,
  set_dynamic_element_data as an,
  update_slot_base as ao,
  get_all_dirty_from_scope as ap,
  get_slot_changes as aq,
  get_spread_update as ar,
  identity$1 as as,
  binding_callbacks as at,
  completed as au,
  loading as av,
  cart as aw,
  getContext$1 as ax,
  createEventDispatcher as ay,
  isMobileDevice as az,
  startWebcam as b,
  bind as b0,
  media as b1,
  get_spread_object as b2,
  add_flush_callback as b3,
  is_function as b4,
  prop_dev as b5,
  toString as b6,
  debounce as b7,
  uniqId as b8,
  init_binding_group as b9,
  uniqBy as bA,
  GetProducts as bB,
  start as bC,
  unmount as bD,
  isSourceChanged as bE,
  useWebcam as bF,
  usePhoto as bG,
  render as bH,
  setState as bI,
  isDataPathChanged as bJ,
  updateDataPath as bK,
  clearDataItems as bL,
  set_style as ba,
  set_input_value as bb,
  to_number as bc,
  capitalize as bd,
  validate_each_keys as be,
  update_keyed_each as bf,
  outro_and_destroy_block as bg,
  clearAllProblems as bh,
  setActiveProblems as bi,
  appliedProducts as bj,
  vto as bk,
  onDemoEvent as bl,
  gql as bm,
  GetSkinCarePageData as bn,
  GetBestMatchPageData as bo,
  get_store_value as bp,
  data$1 as bq,
  data$3 as br,
  looksFilter as bs,
  data$2 as bt,
  products as bu,
  looks as bv,
  derived as bw,
  getContext as bx,
  Queries as by,
  GetLooks as bz,
  safe_not_equal$1 as c,
  dispatch_dev as d,
  App as default,
  append_styles as e,
  component_subscribe as f,
  validate_slots as g,
  analytics as h,
  init as i,
  element as j,
  text as k,
  language as l,
  space as m,
  create_component as n,
  attr_dev as o,
  player as p,
  add_location as q,
  insert_dev as r,
  setClientToken as s,
  terms as t,
  useRouter as u,
  validate_store as v,
  append_dev as w,
  mount_component as x,
  listen_dev as y,
  prevent_default as z
};

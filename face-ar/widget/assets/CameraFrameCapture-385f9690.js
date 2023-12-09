import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, ac as compute_rest_props, g as validate_slots, ad as assign, ae as exclude_internal_props, af as cx, j as element, o as attr_dev, ag as null_to_empty, q as add_location, r as insert_dev, aa as noop, E as detach_dev, at as binding_callbacks, ab as validate_each_argument, aS as set_attributes, ah as toggle_class, ar as get_spread_update, ai as destroy_each, aO as onMount, R as empty, T as group_outros, D as transition_out, U as check_outros, C as transition_in, al as create_slot, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, aT as __vitePreload, aU as random, v as validate_store, au as completed, f as component_subscribe, J as step, l as language, K as percent, ay as createEventDispatcher, aC as Icon, n as create_component, x as mount_component, F as destroy_component, m as space, k as text, w as append_dev, y as listen_dev, A as set_data_dev, aL as add_render_callback, aM as create_in_transition, aN as create_out_transition, M as source, aV as onDestroy, aW as readable, aX as subscribe } from "./app.js";
import { timers as Ry } from "./BanubaSDK-34db11e0.js";
import { f as fade } from "./index-2d8ed87d.js";
import { m as md } from "./checkmark-md-244737c7.js";
import { a as addEventListener, s as start, A as Analysis, u as useWebcam, r as render, b as unmount, c as removeEventListener } from "./analysis-f5aa7ef5.js";
const CheckmarkLg = "" + new URL("checkmark-lg-afb796e2.svg", import.meta.url).href;
const sm = "" + new URL("checkmark-sm-37c31f2f.svg", import.meta.url).href;
const xs = "" + new URL("checkmark-xs-c0726a05.svg", import.meta.url).href;
const file$4 = "src/lib/elements/Checkmark/Checkmark.svelte";
function add_css$4(target) {
  append_styles(target, "svelte-tx4ze0", "i.svelte-tx4ze0{display:inline-block;height:28px;width:28px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(220 220 221 / var(--tw-bg-opacity));background-image:var(--icon-sm);background-position:center;background-repeat:no-repeat;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 768px){i.svelte-tx4ze0{height:32px;width:32px;background-image:var(--icon-md)\n    }}@media(min-width: 1024px){i.svelte-tx4ze0{height:42px;width:42px;background-image:var(--icon-lg)\n    }}.xs.svelte-tx4ze0{height:20px;width:20px;background-image:var(--icon-xs)\n}.lg.svelte-tx4ze0{height:42px;width:42px;background-image:var(--icon-lg)\n}.active.svelte-tx4ze0{--tw-bg-opacity:1;background-color:rgb(76 204 117 / var(--tw-bg-opacity))\n}");
}
function create_fragment$5(ctx) {
  let i;
  let i_class_value;
  const block = {
    c: function create() {
      i = element("i");
      attr_dev(i, "class", i_class_value = null_to_empty(
        /*classes*/
        ctx[1]
      ) + " svelte-tx4ze0");
      add_location(i, file$4, 20, 0, 857);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);
      ctx[4](i);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*classes*/
      2 && i_class_value !== (i_class_value = null_to_empty(
        /*classes*/
        ctx2[1]
      ) + " svelte-tx4ze0")) {
        attr_dev(i, "class", i_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(i);
      ctx[4](null);
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
  let classes;
  const omit_props_names = ["active", "size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Checkmark", slots, []);
  let { active = false } = $$props;
  let { size = "auto" } = $$props;
  let container;
  function i_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(0, container);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("active" in $$new_props)
      $$invalidate(2, active = $$new_props.active);
    if ("size" in $$new_props)
      $$invalidate(3, size = $$new_props.size);
  };
  $$self.$capture_state = () => ({
    lg: CheckmarkLg,
    md,
    sm,
    xs,
    cx,
    active,
    size,
    container,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("active" in $$props)
      $$invalidate(2, active = $$new_props.active);
    if ("size" in $$props)
      $$invalidate(3, size = $$new_props.size);
    if ("container" in $$props)
      $$invalidate(0, container = $$new_props.container);
    if ("classes" in $$props)
      $$invalidate(1, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(1, classes = cx("tint-checkmark", $$restProps.class, size, active && "active"));
    if ($$self.$$.dirty & /*container*/
    1) {
      container && (container.style.setProperty("--icon-xs", `url("${xs}")`), container.style.setProperty("--icon-sm", `url("${sm}")`), container.style.setProperty("--icon-md", `url("${md}")`), container.style.setProperty("--icon-lg", `url("${CheckmarkLg}")`));
    }
  };
  return [container, classes, active, size, i_binding];
}
class Checkmark extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { active: 2, size: 3 }, add_css$4);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Checkmark",
      options,
      id: create_fragment$5.name
    });
  }
  get active() {
    throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/lib/elements/Progress/Progress.svelte";
function add_css$3(target) {
  append_styles(target, "svelte-zebwr2", '.tint-progress.svelte-zebwr2{display:inline-flex;height:8px;width:100%;gap:4px;border-radius:4px\n}@media(min-width: 1024px){.tint-progress.svelte-zebwr2{gap:8px\n    }}.chunk.svelte-zebwr2{position:relative;height:100%;width:100%;border-radius:inherit;--tw-bg-opacity:1;background-color:rgb(220 220 221 / var(--tw-bg-opacity))\n}.chunk.svelte-zebwr2::after{position:absolute;top:0px;left:0px;height:100%;width:calc(var(--value) * 1%);border-radius:inherit;--tw-bg-opacity:1;background-color:rgb(76 204 117 / var(--tw-bg-opacity));transition-property:width;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-content:"";content:var(--tw-content)\n}');
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  child_ctx[8] = i;
  const constants_0 = (
    /*max*/
    child_ctx[0] / /*chunks*/
    child_ctx[2]
  );
  child_ctx[5] = constants_0;
  const constants_1 = clamp(
    /*value*/
    (child_ctx[1] - /*idx*/
    child_ctx[8] * /*relativeMax*/
    child_ctx[5]) / /*relativeMax*/
    child_ctx[5] * 100,
    0,
    /*max*/
    child_ctx[0]
  );
  child_ctx[6] = constants_1;
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let div_style_value;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "chunk svelte-zebwr2");
      attr_dev(div, "style", div_style_value = `--value: ${/*relativeValue*/
      ctx[6]}`);
      add_location(div, file$3, 20, 4, 579);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*value, max, chunks*/
      7 && div_style_value !== (div_style_value = `--value: ${/*relativeValue*/
      ctx2[6]}`)) {
        attr_dev(div, "style", div_style_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(18:2) {#each new Array(chunks) as _, idx}",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let div;
  let each_value = new Array(
    /*chunks*/
    ctx[2]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let div_levels = [
    { class: "tint-progress" },
    { role: "progressbar" },
    { "aria-valuemax": (
      /*max*/
      ctx[0]
    ) },
    { "aria-valuenow": (
      /*value*/
      ctx[1]
    ) },
    /*$$restProps*/
    ctx[3]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      set_attributes(div, div_data);
      toggle_class(div, "svelte-zebwr2", true);
      add_location(div, file$3, 10, 0, 286);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*clamp, value, max, chunks*/
      7) {
        each_value = new Array(
          /*chunks*/
          ctx2[2]
        );
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        { class: "tint-progress" },
        { role: "progressbar" },
        dirty & /*max*/
        1 && { "aria-valuemax": (
          /*max*/
          ctx2[0]
        ) },
        dirty & /*value*/
        2 && { "aria-valuenow": (
          /*value*/
          ctx2[1]
        ) },
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3]
      ]));
      toggle_class(div, "svelte-zebwr2", true);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks, detaching);
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
const clamp = (x, min, max) => Math.min(Math.max(min, x), max);
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["max", "value", "chunks"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Progress", slots, []);
  let { max = 100 } = $$props;
  let { value = max / 2 } = $$props;
  let { chunks = 1 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("max" in $$new_props)
      $$invalidate(0, max = $$new_props.max);
    if ("value" in $$new_props)
      $$invalidate(1, value = $$new_props.value);
    if ("chunks" in $$new_props)
      $$invalidate(2, chunks = $$new_props.chunks);
  };
  $$self.$capture_state = () => ({ clamp, max, value, chunks });
  $$self.$inject_state = ($$new_props) => {
    if ("max" in $$props)
      $$invalidate(0, max = $$new_props.max);
    if ("value" in $$props)
      $$invalidate(1, value = $$new_props.value);
    if ("chunks" in $$props)
      $$invalidate(2, chunks = $$new_props.chunks);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [max, value, chunks, $$restProps];
}
class Progress extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { max: 0, value: 1, chunks: 2 }, add_css$3);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Progress",
      options,
      id: create_fragment$4.name
    });
  }
  get max() {
    throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get chunks() {
    throw new Error("<Progress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set chunks(value) {
    throw new Error("<Progress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_else_block$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
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
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(12:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*mounted*/
    ctx[1] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*mounted*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*mounted*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(8:0) {#if intro}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
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
    d: function destroy(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(9:2) {#if mounted}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*intro*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Transition", slots, ["default"]);
  let { intro = false } = $$props;
  let mounted = false;
  onMount(() => $$invalidate(1, mounted = true));
  const writable_props = ["intro"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Transition> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("intro" in $$props2)
      $$invalidate(0, intro = $$props2.intro);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ onMount, intro, mounted });
  $$self.$inject_state = ($$props2) => {
    if ("intro" in $$props2)
      $$invalidate(0, intro = $$props2.intro);
    if ("mounted" in $$props2)
      $$invalidate(1, mounted = $$props2.mounted);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [intro, mounted, $$scope, slots];
}
class Transition extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { intro: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Transition",
      options,
      id: create_fragment$3.name
    });
  }
  get intro() {
    throw new Error("<Transition>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intro(value) {
    throw new Error("<Transition>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const toBase64 = async (file2) => {
  const base64DataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file2);
  });
  return base64DataUrl.replace(/^data:.*?,/, "");
};
const rgbToHex = (rgb) => "#" + rgb.split(" ").map((value) => {
  const hex = Math.round(parseFloat(value) * 255).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}).join("");
var AnalysisStep = /* @__PURE__ */ ((AnalysisStep2) => {
  AnalysisStep2[AnalysisStep2["SkinType"] = 0] = "SkinType";
  AnalysisStep2[AnalysisStep2["SkinTone"] = 1] = "SkinTone";
  AnalysisStep2[AnalysisStep2["ColorType"] = 2] = "ColorType";
  AnalysisStep2[AnalysisStep2["FacialFeatures"] = 3] = "FacialFeatures";
  return AnalysisStep2;
})(AnalysisStep || {});
var Season = /* @__PURE__ */ ((Season2) => {
  Season2[Season2["SPRING"] = 0] = "SPRING";
  Season2[Season2["SUMMER"] = 1] = "SUMMER";
  Season2[Season2["AUTUMN"] = 2] = "AUTUMN";
  Season2[Season2["WINTER"] = 3] = "WINTER";
  return Season2;
})(Season || {});
const creamColorRangesEndpoint = `${"https://dev-rest-api.tintvto.com/rnd-beauty/v1/"}bb-cc-recommender-v2`;
const analyze = async (image, onProgress = () => {
}) => {
  const [probabilities, Seasons, Colors, creamRanges] = await Promise.all([
    fetch("https://dev-rest-api.tintvto.com/rnd-beauty/v1/", {
      method: "POST",
      body: JSON.stringify({
        isBase64Encoded: true,
        body: await toBase64(image)
      })
    }).then((r) => r.json()),
    __vitePreload(() => import("./seasons-0defa84f.js"), true ? ["./seasons-0defa84f.js","./app.js","./BanubaSDK-34db11e0.js"] : void 0, import.meta.url).then((m) => m.default),
    fetch("https://dev-rest-api.tintvto.com/rnd-beauty/v1/colors", {
      method: "POST",
      body: JSON.stringify({
        isBase64Encoded: true,
        body: await toBase64(image)
      })
    }).then((r) => r.json()),
    fetch(creamColorRangesEndpoint, {
      method: "POST",
      body: JSON.stringify({
        isBase64Encoded: true,
        body: await toBase64(image)
      })
    }).then((r) => r.json()),
    fakeProgress(onProgress)
  ]);
  const face = rgbToHex(Colors[0]);
  const hair = rgbToHex(Colors[1]);
  const brows = rgbToHex(Colors[2]);
  const eyes = rgbToHex(Colors[3]);
  const index = probabilities.indexOf(Math.max(...probabilities));
  const season = Season[index];
  const description = Seasons[season];
  description.eyeTones = [eyes];
  description.hairTones = [hair];
  description.faceTones = [face];
  description.browsTones = [brows];
  return {
    season,
    ...description,
    creamRanges
  };
};
const fakeProgress = async (onProgress = () => {
}) => {
  const duration = random(3.8 * 1e3, 4.8 * 1e3);
  const durationByStep = {
    [
      0
      /* SkinType */
    ]: duration * 0.25,
    [
      1
      /* SkinTone */
    ]: duration * 0.19,
    [
      2
      /* ColorType */
    ]: duration * 0.22,
    [
      3
      /* FacialFeatures */
    ]: duration * 0.34
  };
  let percent2 = 0;
  for (const [step2, duration2] of Object.entries(durationByStep)) {
    const range = 100 / Object.keys(durationByStep).length;
    onProgress({ percent: percent2, step: +step2 });
    await delay(300);
    for await (const _ of ticks(range, duration2))
      onProgress({ percent: ++percent2, step: +step2 });
  }
};
const delay = (t) => new Promise((r) => Ry.setTimeout(r, t));
async function* ticks(count, duration) {
  const dt = duration / count;
  while (count-- > 0)
    yield await delay(dt);
}
const SCA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnalysisStep,
  Season,
  analyze,
  fakeProgress
}, Symbol.toStringTag, { value: "Module" }));
const file$2 = "src/pages/face-analysis/AnalysisProgress.svelte";
function add_css$2(target) {
  append_styles(target, "svelte-1wh7x2f", "section.svelte-1wh7x2f.svelte-1wh7x2f{position:relative;height:100%;width:100%\n}@media(min-width: 1280px){section.svelte-1wh7x2f.svelte-1wh7x2f{max-height:776px;max-width:1200px;border-radius:12px\n    }}section.svelte-1wh7x2f>*{position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}article.svelte-1wh7x2f.svelte-1wh7x2f{position:relative;display:flex;flex-shrink:0;flex-direction:column;align-items:center\n}article.svelte-1wh7x2f>p.svelte-1wh7x2f{display:flex;align-items:center;text-align:center\n}h2.svelte-1wh7x2f.svelte-1wh7x2f{position:absolute;top:-8px;display:flex;--tw-translate-y:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));flex-direction:column;align-items:center;gap:16px;font-size:20px;line-height:28px\n}@media(min-width: 768px){h2.svelte-1wh7x2f.svelte-1wh7x2f{gap:20px;font-size:24px;line-height:32px\n    }}div.svelte-1wh7x2f.svelte-1wh7x2f{display:flex;flex-shrink:0;flex-direction:column;gap:28px;text-align:center\n}label.svelte-1wh7x2f.svelte-1wh7x2f{display:flex;flex-direction:column;gap:12px;font-size:20px;line-height:28px;font-weight:700\n}@media(min-width: 768px){label.svelte-1wh7x2f.svelte-1wh7x2f{gap:16px;font-size:24px;line-height:32px\n    }}label.svelte-1wh7x2f.svelte-1wh7x2f{width:310px\n}@media(min-width: 768px){label.svelte-1wh7x2f.svelte-1wh7x2f{width:336px\n    }}@media(min-width: 1024px){label.svelte-1wh7x2f.svelte-1wh7x2f{width:760px\n    }}label.svelte-1wh7x2f+p.svelte-1wh7x2f{display:flex;justify-content:center;font-size:16px;line-height:24px\n}label.svelte-1wh7x2f+p.svelte-1wh7x2f>:first-child{margin-right:4px;--tw-text-opacity:1;color:rgb(76 204 117 / var(--tw-text-opacity));transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}label.svelte-1wh7x2f+p.svelte-1wh7x2f:not(.completed)>:first-child{opacity:0;transition-property:none\n}label.svelte-1wh7x2f+p.svelte-1wh7x2f path{stroke:currentColor\n}");
}
function create_else_block_1(ctx) {
  let transition;
  let current;
  transition = new Transition({
    props: {
      intro: (
        /*intro*/
        ctx[0]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(transition.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(transition, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const transition_changes = {};
      if (dirty & /*intro*/
      1)
        transition_changes.intro = /*intro*/
        ctx2[0];
      if (dirty & /*$$scope, done, title, $percent, isGift, $language*/
      16502) {
        transition_changes.$$scope = { dirty, ctx: ctx2 };
      }
      transition.$set(transition_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(transition.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(transition.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(transition, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(41:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let article;
  let h2;
  let checkmark;
  let t0;
  let t1;
  let p;
  let t2_value = (
    /*$language*/
    ctx[5].personalizedProductRecommendationsAreReady + ""
  );
  let t2;
  let article_intro;
  let current;
  let mounted;
  let dispose;
  checkmark = new Checkmark({
    props: { size: "lg", active: true },
    $$inline: true
  });
  function select_block_type_1(ctx2, dirty) {
    if (
      /*isGift*/
      ctx2[1]
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      article = element("article");
      h2 = element("h2");
      create_component(checkmark.$$.fragment);
      t0 = space();
      if_block.c();
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      attr_dev(h2, "class", "svelte-1wh7x2f");
      add_location(h2, file$2, 30, 6, 1114);
      attr_dev(p, "class", "svelte-1wh7x2f");
      add_location(p, file$2, 38, 6, 1310);
      attr_dev(article, "class", "svelte-1wh7x2f");
      add_location(article, file$2, 26, 4, 974);
    },
    m: function mount(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, h2);
      mount_component(checkmark, h2, null);
      append_dev(h2, t0);
      if_block.m(h2, null);
      append_dev(article, t1);
      append_dev(article, p);
      append_dev(p, t2);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          article,
          "introend",
          /*introend_handler*/
          ctx[12],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(h2, null);
        }
      }
      if ((!current || dirty & /*$language*/
      32) && t2_value !== (t2_value = /*$language*/
      ctx2[5].personalizedProductRecommendationsAreReady + ""))
        set_data_dev(t2, t2_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(checkmark.$$.fragment, local);
      if (local) {
        if (!article_intro) {
          add_render_callback(() => {
            article_intro = create_in_transition(article, fade, { delay: 400, duration: 800 });
            article_intro.start();
          });
        }
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(checkmark.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      destroy_component(checkmark);
      if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(26:2) {#if finished}",
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let div;
  let label;
  let span;
  let t0_value = `${/*isGift*/
  ctx[1] ? (
    /*$language*/
    ctx[5].giftSelection
  ) : (
    /*$language*/
    ctx[5].analyzing
  )} ${/*$percent*/
  ctx[6]}%`;
  let t0;
  let t1;
  let progress;
  let t2;
  let p;
  let icon;
  let t3;
  let t4;
  let t5;
  let div_intro;
  let div_outro;
  let current;
  progress = new Progress({
    props: {
      value: (
        /*$percent*/
        ctx[6]
      ),
      chunks: (
        /*titles*/
        ctx[7].length
      )
    },
    $$inline: true
  });
  icon = new Icon({
    props: { src: CheckmarkLg },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      label = element("label");
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      create_component(progress.$$.fragment);
      t2 = space();
      p = element("p");
      create_component(icon.$$.fragment);
      t3 = space();
      t4 = text(
        /*title*/
        ctx[4]
      );
      t5 = text("...");
      add_location(span, file$2, 45, 10, 1642);
      attr_dev(label, "class", "svelte-1wh7x2f");
      add_location(label, file$2, 44, 8, 1624);
      attr_dev(p, "class", "svelte-1wh7x2f");
      toggle_class(
        p,
        "completed",
        /*done*/
        ctx[2]
      );
      add_location(p, file$2, 48, 8, 1818);
      attr_dev(div, "class", "svelte-1wh7x2f");
      add_location(div, file$2, 42, 6, 1428);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, label);
      append_dev(label, span);
      append_dev(span, t0);
      append_dev(label, t1);
      mount_component(progress, label, null);
      append_dev(div, t2);
      append_dev(div, p);
      mount_component(icon, p, null);
      append_dev(p, t3);
      append_dev(p, t4);
      append_dev(p, t5);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & /*isGift, $language, $percent*/
      98) && t0_value !== (t0_value = `${/*isGift*/
      ctx2[1] ? (
        /*$language*/
        ctx2[5].giftSelection
      ) : (
        /*$language*/
        ctx2[5].analyzing
      )} ${/*$percent*/
      ctx2[6]}%`))
        set_data_dev(t0, t0_value);
      const progress_changes = {};
      if (dirty & /*$percent*/
      64)
        progress_changes.value = /*$percent*/
        ctx2[6];
      progress.$set(progress_changes);
      if (!current || dirty & /*title*/
      16)
        set_data_dev(
          t4,
          /*title*/
          ctx2[4]
        );
      if (!current || dirty & /*done*/
      4) {
        toggle_class(
          p,
          "completed",
          /*done*/
          ctx2[2]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(progress.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (div_outro)
            div_outro.end(1);
          div_intro = create_in_transition(div, fade, { delay: 100, duration: 600 });
          div_intro.start();
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(progress.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      if (div_intro)
        div_intro.invalidate();
      div_outro = create_out_transition(div, fade, { duration: 150 });
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(progress);
      destroy_component(icon);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(42:4) <Transition {intro}>",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let t_value = (
    /*$language*/
    ctx[5].analysisFinished + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      32 && t_value !== (t_value = /*$language*/
      ctx2[5].analysisFinished + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(35:8) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let t_value = (
    /*$language*/
    ctx[5].giftSelectionFinished + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      32 && t_value !== (t_value = /*$language*/
      ctx2[5].giftSelectionFinished + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(33:8) {#if isGift}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let section;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*finished*/
      ctx2[3]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      section = element("section");
      if_block.c();
      attr_dev(section, "class", "tint-face-analysis svelte-1wh7x2f");
      add_location(section, file$2, 24, 0, 916);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      if_blocks[current_block_type_index].m(section, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(section, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if_blocks[current_block_type_index].d();
    }
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
  let title;
  let done;
  let $completed;
  let $step;
  let $language;
  let $percent;
  validate_store(completed, "completed");
  component_subscribe($$self, completed, ($$value) => $$invalidate(10, $completed = $$value));
  validate_store(step, "step");
  component_subscribe($$self, step, ($$value) => $$invalidate(11, $step = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(5, $language = $$value));
  validate_store(percent, "percent");
  component_subscribe($$self, percent, ($$value) => $$invalidate(6, $percent = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AnalysisProgress", slots, []);
  const titles = [
    $language.skinType,
    $language.skinTone,
    $language.colorType,
    $language.facialFeatures
  ];
  let { intro = false } = $$props;
  let { isGift = false } = $$props;
  const dispatch = createEventDispatcher();
  let current = $step;
  let finished = $completed;
  const move = () => $$invalidate(9, current = $step);
  const writable_props = ["intro", "isGift"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AnalysisProgress> was created with unknown prop '${key}'`);
  });
  const introend_handler = () => setTimeout(() => dispatch("ended"), 600);
  $$self.$$set = ($$props2) => {
    if ("intro" in $$props2)
      $$invalidate(0, intro = $$props2.intro);
    if ("isGift" in $$props2)
      $$invalidate(1, isGift = $$props2.isGift);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    fade,
    Checkmark,
    Icon,
    Progress,
    Transition,
    CheckmarkLg,
    language,
    completed,
    percent,
    step,
    titles,
    intro,
    isGift,
    dispatch,
    current,
    finished,
    move,
    done,
    title,
    $completed,
    $step,
    $language,
    $percent
  });
  $$self.$inject_state = ($$props2) => {
    if ("intro" in $$props2)
      $$invalidate(0, intro = $$props2.intro);
    if ("isGift" in $$props2)
      $$invalidate(1, isGift = $$props2.isGift);
    if ("current" in $$props2)
      $$invalidate(9, current = $$props2.current);
    if ("finished" in $$props2)
      $$invalidate(3, finished = $$props2.finished);
    if ("done" in $$props2)
      $$invalidate(2, done = $$props2.done);
    if ("title" in $$props2)
      $$invalidate(4, title = $$props2.title);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*current*/
    512) {
      $$invalidate(4, title = titles[current]);
    }
    if ($$self.$$.dirty & /*current, $step, $completed*/
    3584) {
      $$invalidate(2, done = current < $step || $completed);
    }
    if ($$self.$$.dirty & /*done*/
    4) {
      done && setTimeout(move, 600);
    }
    if ($$self.$$.dirty & /*$completed*/
    1024) {
      $completed && setTimeout(() => $$invalidate(3, finished = true), 600);
    }
  };
  return [
    intro,
    isGift,
    done,
    finished,
    title,
    $language,
    $percent,
    titles,
    dispatch,
    current,
    $completed,
    $step,
    introend_handler
  ];
}
class AnalysisProgress extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { intro: 0, isGift: 1 }, add_css$2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AnalysisProgress",
      options,
      id: create_fragment$2.name
    });
  }
  get intro() {
    throw new Error("<AnalysisProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set intro(value) {
    throw new Error("<AnalysisProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get isGift() {
    throw new Error("<AnalysisProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isGift(value) {
    throw new Error("<AnalysisProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/pages/face-analysis/Viewer.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-tzp8wl", "div.svelte-tzp8wl,div.svelte-tzp8wl>canvas{height:100%;width:100%\n}");
}
function create_fragment$1(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "svelte-tzp8wl");
      add_location(div, file$1, 25, 0, 1079);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      ctx[4](div);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[4](null);
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
  let $imageSource;
  validate_store(source, "imageSource");
  component_subscribe($$self, source, ($$value) => $$invalidate(3, $imageSource = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Viewer", slots, []);
  const dispatch = createEventDispatcher();
  const takePhoto = () => useWebcam().then((wcam) => wcam.takePhoto());
  let webar;
  let loaded = false;
  const hasFaceEventListener = (res) => dispatch("hasFace", res);
  const hasLightEventListener = (res) => dispatch("hasLight", res);
  onMount(() => {
    addEventListener("face", hasFaceEventListener);
    addEventListener("lightning", hasLightEventListener);
    start().then(() => $$invalidate(2, loaded = true));
  });
  onDestroy(() => {
    unmount(webar);
    removeEventListener("face", hasFaceEventListener);
    removeEventListener("lightning", hasLightEventListener);
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Viewer> was created with unknown prop '${key}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      webar = $$value;
      $$invalidate(0, webar);
    });
  }
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onDestroy,
    onMount,
    Analysis,
    imageSource: source,
    dispatch,
    takePhoto,
    webar,
    loaded,
    hasFaceEventListener,
    hasLightEventListener,
    $imageSource
  });
  $$self.$inject_state = ($$props2) => {
    if ("webar" in $$props2)
      $$invalidate(0, webar = $$props2.webar);
    if ("loaded" in $$props2)
      $$invalidate(2, loaded = $$props2.loaded);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$imageSource, loaded*/
    12) {
      $imageSource && $imageSource.type === "webcam" && loaded && useWebcam();
    }
    if ($$self.$$.dirty & /*loaded, webar*/
    5) {
      loaded && render(webar);
    }
  };
  return [webar, takePhoto, loaded, $imageSource, div_binding];
}
class Viewer extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { takePhoto: 1 }, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Viewer",
      options,
      id: create_fragment$1.name
    });
  }
  get takePhoto() {
    return this.$$.ctx[1];
  }
  set takePhoto(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/pages/face-analysis/CameraFrameCapture.svelte";
function add_css(target) {
  append_styles(target, "svelte-5cgw0j", `section.svelte-5cgw0j{display:flex;height:100%;width:100%;flex-direction:column}@media(min-width: 1024px){section.svelte-5cgw0j{flex-direction:row}}@media(min-width: 1280px){section.svelte-5cgw0j{max-height:776px;max-width:1200px;border-radius:12px}}dialog.svelte-5cgw0j{bottom:4px;z-index:10;display:flex;height:32px;min-width:224px;align-items:center;justify-content:center;gap:4px;border-radius:8px;--tw-bg-opacity:1;background-color:rgb(249 183 74 / var(--tw-bg-opacity));font-size:14px;line-height:20px;--tw-text-opacity:1;color:rgb(56 56 60 / var(--tw-text-opacity))}@media(min-width: 1024px){dialog.svelte-5cgw0j{bottom:20px;height:56px}}dialog.hasLight.svelte-5cgw0j,dialog.svelte-5cgw0j:not(.hasFace){display:none}section.svelte-5cgw0j{position:relative}section.svelte-5cgw0j::after{pointer-events:none;position:absolute;top:0px;left:0px;z-index:10;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-delay:700ms;transition-duration:200ms;--tw-content:"";content:var(--tw-content)}section.svelte-5cgw0j:not(.flash)::after{opacity:0}div.svelte-5cgw0j{position:relative;display:flex;width:100%;flex-shrink:0;flex-grow:1;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(244 244 244 / var(--tw-bg-opacity))}@media(min-width: 768px){div.svelte-5cgw0j{flex-grow:0;padding-bottom:calc(576 / 768 * 100%)}}@media(min-width: 1024px){div.svelte-5cgw0j{padding-bottom:0px;width:calc(430 / (1024) * 100%)}}@media(min-width: 1280px){div.svelte-5cgw0j{width:calc(568 / (1200) * 100%)}}@media(min-width: 1024px){div.svelte-5cgw0j{order:2;margin:24px;margin-left:0px}}@media(min-width: 1280px){div.svelte-5cgw0j{margin:32px;margin-left:0px}}div.svelte-5cgw0j>:first-child{position:absolute;top:0px;left:0px;height:100%;width:100%}@media(min-width: 1024px){div.svelte-5cgw0j>:first-child{position:relative;height:100%;flex-grow:1}}div.svelte-5cgw0j::after{position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:rgb(0 0 0 / 0.4);--tw-content:"";content:var(--tw-content);background:url("data:image/svg+xml,%3Csvg viewBox='-30 -40 373 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='154.5' cy='218.5' rx='154.5' ry='218.5' stroke='%23FFF' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
        center / contain no-repeat,
      rgba(0, 0, 0, 0.4);-webkit-mask:linear-gradient(#000, #000),
      url("data:image/svg+xml,%3Csvg viewBox='-30 -40 373 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='154.5' cy='218.5' rx='154.5' ry='218.5' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
        center / contain no-repeat;mask:linear-gradient(#000, #000),
      url("data:image/svg+xml,%3Csvg viewBox='-30 -40 373 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='154.5' cy='218.5' rx='154.5' ry='218.5' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
        center / contain no-repeat;-webkit-mask-composite:xor;mask-composite:exclude}@media(min-width: 768px){div.svelte-5cgw0j::after{background:url("data:image/svg+xml,%3Csvg  viewBox='-60 -60 575 645' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='227.5' cy='262.5' rx='227.5' ry='262.5' stroke='%23FFF' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
          center / contain no-repeat,
        rgba(0, 0, 0, 0.4);-webkit-mask:linear-gradient(#000, #000),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-60 -60 575 645'%3E%%3Cellipse cx='227.5' cy='262.5' rx='227.5' ry='262.5' fill='%23fff'/%3E%3C/svg%3E%0A")
          center / contain no-repeat;mask:linear-gradient(#000, #000),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-60 -60 575 645'%3E%%3Cellipse cx='227.5' cy='262.5' rx='227.5' ry='262.5' fill='%23fff'/%3E%3C/svg%3E%0A")
          center / contain no-repeat;-webkit-mask-composite:xor;mask-composite:exclude
  }}div.hasFace.svelte-5cgw0j::after{background:url("data:image/svg+xml,%3Csvg viewBox='-30 -40 373 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='154.5' cy='218.5' rx='154.5' ry='218.5' stroke='%23fb4' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
        center / contain no-repeat,
      rgba(0, 0, 0, 0.4)}@media(min-width: 768px){div.hasFace.svelte-5cgw0j::after{background:url("data:image/svg+xml,%3Csvg  viewBox='-60 -60 575 645' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='227.5' cy='262.5' rx='227.5' ry='262.5' stroke='%23fb4' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
          center / contain no-repeat,
        rgba(0, 0, 0, 0.4)
  }}div.hasFace.hasLight.svelte-5cgw0j::after{background:url("data:image/svg+xml,%3Csvg viewBox='-30 -40 373 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='154.5' cy='218.5' rx='154.5' ry='218.5' stroke='%231ea' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
        center / contain no-repeat,
      rgba(0, 0, 0, 0.4)}@media(min-width: 768px){div.hasFace.hasLight.svelte-5cgw0j::after{background:url("data:image/svg+xml,%3Csvg  viewBox='-60 -60 575 645' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='227.5' cy='262.5' rx='227.5' ry='262.5' stroke='%231ea' stroke-width='5' fill-rule='evenodd'/%3E%3C/svg%3E%0A")
          center / contain no-repeat,
        rgba(0, 0, 0, 0.4)
  }}div.svelte-5cgw0j{font-size:16px;line-height:24px;font-weight:700;color:var(--tint-text-light)}span.svelte-5cgw0j{width:max-content}.countdown.svelte-5cgw0j{position:absolute;left:40px;z-index:10;font-size:54px;line-height:1.22;text-shadow:0 3px 8px rgba(0,0,0,0.5)}@media(min-width: 768px){.countdown.svelte-5cgw0j{left:120px}}@media(min-width: 1024px){.countdown.svelte-5cgw0j{left:40px;font-size:84px;line-height:1.38}}.hint.svelte-5cgw0j{position:absolute;top:12px;left:50%;z-index:10;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media(min-width: 1024px){.hint.svelte-5cgw0j{font-size:24px;line-height:32px}}article.svelte-5cgw0j{margin-left:auto;margin-right:auto;display:flex;flex-direction:column;gap:16px;padding-left:40px;padding-right:40px;padding-top:28px;padding-bottom:28px}@media(min-width: 768px){article.svelte-5cgw0j{max-width:534px;flex-grow:1;gap:20px;padding-top:40px;padding-bottom:40px}}@media(min-width: 1024px){article.svelte-5cgw0j{margin-top:200px;max-width:470px;padding-right:10px}}h2.svelte-5cgw0j{font-size:20px;line-height:28px}@media(min-width: 768px){h2.svelte-5cgw0j{font-size:24px;line-height:32px}}p.svelte-5cgw0j{font-size:14px;line-height:20px}@media(min-width: 768px){p.svelte-5cgw0j{font-size:16px;line-height:24px}}`);
}
function create_if_block(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*$countdown*/
        ctx[7]
      );
      attr_dev(span, "class", "countdown svelte-5cgw0j");
      add_location(span, file, 37, 19, 1224);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$countdown*/
      128)
        set_data_dev(
          t,
          /*$countdown*/
          ctx2[7]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(38:4) {#if countdown}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div;
  let viewer_1;
  let t0;
  let t1;
  let span;
  let t2;
  let t3;
  let dialog;
  let icon;
  let t4;
  let p0;
  let t5_value = (
    /*$language*/
    ctx[3].notEnoughLight + ""
  );
  let t5;
  let t6;
  let article;
  let h2;
  let t7_value = (
    /*$language*/
    ctx[3].faceAnalysis + ""
  );
  let t7;
  let t8;
  let p1;
  let t9_value = (
    /*$language*/
    ctx[3].weWillAnalyzeYourFaceAndSuggestPersonalizedProducts + ""
  );
  let t9;
  let current;
  let mounted;
  let dispose;
  let viewer_1_props = {};
  viewer_1 = new Viewer({ props: viewer_1_props, $$inline: true });
  ctx[8](viewer_1);
  viewer_1.$on(
    "hasFace",
    /*hasFace_handler*/
    ctx[9]
  );
  viewer_1.$on(
    "hasLight",
    /*hasLight_handler*/
    ctx[10]
  );
  let if_block = (
    /*countdown*/
    ctx[4] && create_if_block(ctx)
  );
  icon = new Icon({
    props: { variant: "info-circle" },
    $$inline: true
  });
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      create_component(viewer_1.$$.fragment);
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      span = element("span");
      t2 = text(
        /*hint*/
        ctx[5]
      );
      t3 = space();
      dialog = element("dialog");
      create_component(icon.$$.fragment);
      t4 = space();
      p0 = element("p");
      t5 = text(t5_value);
      t6 = space();
      article = element("article");
      h2 = element("h2");
      t7 = text(t7_value);
      t8 = space();
      p1 = element("p");
      t9 = text(t9_value);
      attr_dev(span, "class", "hint svelte-5cgw0j");
      add_location(span, file, 38, 4, 1277);
      attr_dev(p0, "class", "svelte-5cgw0j");
      add_location(p0, file, 42, 6, 1396);
      attr_dev(dialog, "class", "svelte-5cgw0j");
      toggle_class(
        dialog,
        "hasLight",
        /*hasLight*/
        ctx[6]
      );
      toggle_class(
        dialog,
        "hasFace",
        /*hasFace*/
        ctx[2]
      );
      add_location(dialog, file, 40, 4, 1315);
      attr_dev(div, "class", "viewer svelte-5cgw0j");
      toggle_class(
        div,
        "hasLight",
        /*hasLight*/
        ctx[6]
      );
      toggle_class(
        div,
        "hasFace",
        /*hasFace*/
        ctx[2]
      );
      add_location(div, file, 31, 2, 1001);
      attr_dev(h2, "class", "svelte-5cgw0j");
      add_location(h2, file, 46, 4, 1469);
      attr_dev(p1, "class", "svelte-5cgw0j");
      add_location(p1, file, 47, 4, 1507);
      attr_dev(article, "class", "svelte-5cgw0j");
      add_location(article, file, 45, 2, 1455);
      attr_dev(section, "class", "tint-face-analysis svelte-5cgw0j");
      toggle_class(
        section,
        "flash",
        /*countdown*/
        ctx[4] && /*$countdown*/
        ctx[7] === 0
      );
      add_location(section, file, 26, 0, 871);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      mount_component(viewer_1, div, null);
      append_dev(div, t0);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t1);
      append_dev(div, span);
      append_dev(span, t2);
      append_dev(div, t3);
      append_dev(div, dialog);
      mount_component(icon, dialog, null);
      append_dev(dialog, t4);
      append_dev(dialog, p0);
      append_dev(p0, t5);
      append_dev(section, t6);
      append_dev(section, article);
      append_dev(article, h2);
      append_dev(h2, t7);
      append_dev(article, t8);
      append_dev(article, p1);
      append_dev(p1, t9);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          section,
          "transitionend",
          /*transitionend_handler*/
          ctx[11],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      const viewer_1_changes = {};
      viewer_1.$set(viewer_1_changes);
      if (
        /*countdown*/
        ctx2[4]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div, t1);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (!current || dirty & /*hint*/
      32)
        set_data_dev(
          t2,
          /*hint*/
          ctx2[5]
        );
      if ((!current || dirty & /*$language*/
      8) && t5_value !== (t5_value = /*$language*/
      ctx2[3].notEnoughLight + ""))
        set_data_dev(t5, t5_value);
      if (!current || dirty & /*hasLight*/
      64) {
        toggle_class(
          dialog,
          "hasLight",
          /*hasLight*/
          ctx2[6]
        );
      }
      if (!current || dirty & /*hasFace*/
      4) {
        toggle_class(
          dialog,
          "hasFace",
          /*hasFace*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*hasLight*/
      64) {
        toggle_class(
          div,
          "hasLight",
          /*hasLight*/
          ctx2[6]
        );
      }
      if (!current || dirty & /*hasFace*/
      4) {
        toggle_class(
          div,
          "hasFace",
          /*hasFace*/
          ctx2[2]
        );
      }
      if ((!current || dirty & /*$language*/
      8) && t7_value !== (t7_value = /*$language*/
      ctx2[3].faceAnalysis + ""))
        set_data_dev(t7, t7_value);
      if ((!current || dirty & /*$language*/
      8) && t9_value !== (t9_value = /*$language*/
      ctx2[3].weWillAnalyzeYourFaceAndSuggestPersonalizedProducts + ""))
        set_data_dev(t9, t9_value);
      if (!current || dirty & /*countdown, $countdown*/
      144) {
        toggle_class(
          section,
          "flash",
          /*countdown*/
          ctx2[4] && /*$countdown*/
          ctx2[7] === 0
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(viewer_1.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(viewer_1.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      ctx[8](null);
      destroy_component(viewer_1);
      if (if_block)
        if_block.d();
      destroy_component(icon);
      mounted = false;
      dispose();
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
const createCountdown = (time) => readable(time, (set) => {
  const it = setInterval(
    () => {
      set(time -= 1);
      if (time <= 0)
        clearInterval(it);
    },
    1e3
  );
  return () => clearInterval(it);
});
function instance($$self, $$props, $$invalidate) {
  let hasFace;
  let hasLight;
  let hint;
  let $language;
  let $countdown, $$unsubscribe_countdown = noop, $$subscribe_countdown = () => ($$unsubscribe_countdown(), $$unsubscribe_countdown = subscribe(countdown, ($$value) => $$invalidate(7, $countdown = $$value)), countdown);
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(3, $language = $$value));
  $$self.$$.on_destroy.push(() => $$unsubscribe_countdown());
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CameraFrameCapture", slots, []);
  const dispatch = createEventDispatcher();
  let viewer;
  let countdown = null;
  validate_store(countdown, "countdown");
  $$subscribe_countdown();
  let flash = false;
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CameraFrameCapture> was created with unknown prop '${key}'`);
  });
  function viewer_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      viewer = $$value;
      $$invalidate(0, viewer);
    });
  }
  const hasFace_handler = ({ detail }) => $$invalidate(2, hasFace = detail);
  const hasLight_handler = ({ detail }) => $$invalidate(6, hasLight = detail);
  const transitionend_handler = () => $$invalidate(1, flash = true);
  $$self.$capture_state = () => ({
    readable,
    createCountdown,
    createEventDispatcher,
    Icon,
    language,
    Viewer,
    dispatch,
    viewer,
    countdown,
    flash,
    hasFace,
    hint,
    hasLight,
    $language,
    $countdown
  });
  $$self.$inject_state = ($$props2) => {
    if ("viewer" in $$props2)
      $$invalidate(0, viewer = $$props2.viewer);
    if ("countdown" in $$props2)
      $$subscribe_countdown($$invalidate(4, countdown = $$props2.countdown));
    if ("flash" in $$props2)
      $$invalidate(1, flash = $$props2.flash);
    if ("hasFace" in $$props2)
      $$invalidate(2, hasFace = $$props2.hasFace);
    if ("hint" in $$props2)
      $$invalidate(5, hint = $$props2.hint);
    if ("hasLight" in $$props2)
      $$invalidate(6, hasLight = $$props2.hasLight);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*hasFace, $language*/
    12) {
      $$invalidate(5, hint = hasFace ? $language.pleaseDontMove : $language.putYourFaceInTheFrame);
    }
    if ($$self.$$.dirty & /*flash, viewer*/
    3) {
      flash && viewer.takePhoto().then((photo) => dispatch("photo", photo));
    }
    if ($$self.$$.dirty & /*hasFace*/
    4) {
      hasFace ? $$subscribe_countdown($$invalidate(4, countdown = createCountdown(3))) : $$subscribe_countdown($$invalidate(4, countdown = null));
    }
  };
  $$invalidate(2, hasFace = false);
  $$invalidate(6, hasLight = false);
  return [
    viewer,
    flash,
    hasFace,
    $language,
    countdown,
    hint,
    hasLight,
    $countdown,
    viewer_1_binding,
    hasFace_handler,
    hasLight_handler,
    transitionend_handler
  ];
}
class CameraFrameCapture extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CameraFrameCapture",
      options,
      id: create_fragment.name
    });
  }
}
export {
  AnalysisProgress as A,
  CameraFrameCapture as C,
  SCA as S,
  analyze as a
};

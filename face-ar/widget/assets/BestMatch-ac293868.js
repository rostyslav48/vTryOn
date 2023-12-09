import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, g as validate_slots, aI as getSvelteRoot, ay as createEventDispatcher, al as create_slot, R as empty, r as insert_dev, C as transition_in, T as group_outros, D as transition_out, U as check_outros, E as detach_dev, at as binding_callbacks, j as element, o as attr_dev, q as add_location, ah as toggle_class, w as append_dev, y as listen_dev, aK as action_destroyer, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, aL as add_render_callback, aQ as create_bidirectional_transition, G as run_all, I as construct_svelte_component_dev, b0 as bind, b1 as media, v as validate_store, f as component_subscribe, aO as onMount, aP as tick, aC as Icon, ad as assign, n as create_component, x as mount_component, ar as get_spread_update, b2 as get_spread_object, b3 as add_flush_callback, F as destroy_component, am as bubble, m as space, b4 as is_function, ac as compute_rest_props, ae as exclude_internal_props, af as cx, ag as null_to_empty, b5 as prop_dev, b6 as toString, b7 as debounce, b8 as uniqId, aa as noop, k as text, A as set_data_dev, aj as validate_dynamic_element, ak as validate_void_dynamic_element, an as set_dynamic_element_data, aF as setContext, aG as getContext, aJ as writable, V as set_store_value, b9 as init_binding_group, aS as set_attributes, aH as IconButton, ba as set_style, bb as set_input_value, bc as to_number, N as routerPath, l as language, P as Paths, ab as validate_each_argument, ai as destroy_each, h as analytics, bd as capitalize$1, aR as src_url_equal, ax as getContext$1, az as isMobileDevice, O as skinCare, aB as showAd, be as validate_each_keys, bf as update_keyed_each, bg as outro_and_destroy_block, bh as clearAllProblems, bi as setActiveProblems, bj as appliedProducts, bk as vto, bl as onDemoEvent, aA as pickADate, bm as gql, bn as GetSkinCarePageData, bo as GetBestMatchPageData, bp as get_store_value, L as result, bq as data, br as data$1, bs as looksFilter, bt as data$2, bu as products, bv as looks, bw as derived, aw as cart, u as useRouter, bx as getContext$2, by as Queries, bz as GetLooks, bA as uniqBy, bB as GetProducts, M as source, bC as start, bD as unmount, B as Beauty, bE as isSourceChanged, bF as useWebcam, bG as usePhoto, bH as render, bI as setState, av as loading, bJ as isDataPathChanged, bK as updateDataPath, bL as clearDataItems } from "./app.js";
import { B as Button, S as Spinner } from "./Button-7f464a41.js";
import { m as md } from "./checkmark-md-244737c7.js";
import { c as cubicOut, s as sineInOut, a as slide, f as fade } from "./index-2d8ed87d.js";
import { c as clickOutside, p as portal$1, F as Floating } from "./Floating-aa1e9f05.js";
const getScrollParent = (element2) => {
  let scrollParent = element2;
  do
    if (/(auto|scroll)/.test(getComputedStyle(scrollParent).overflowY))
      break;
  while (scrollParent = scrollParent.parentElement);
  return scrollParent;
};
const defaultOpts = {
  visible: true,
  invisible: true
};
const visibility = (el, opts = {}) => {
  let observer;
  const update = (opts2) => {
    opts2 = { ...defaultOpts, ...opts2 };
    if (observer)
      observer.disconnect();
    if (!opts2.visible && !opts2.invisible)
      return;
    if (typeof IntersectionObserver === "undefined")
      return;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (opts2.visible && entry.isIntersecting)
          el.dispatchEvent(new CustomEvent("visible", { detail: entry }));
        if (opts2.invisible && !entry.isIntersecting)
          el.dispatchEvent(new CustomEvent("invisible", { detail: entry }));
      },
      { root: getScrollParent(el), threshold: [0.01] }
    );
    observer.observe(el);
  };
  const destroy = () => observer == null ? void 0 : observer.disconnect();
  update(opts);
  return { update, destroy };
};
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  let xValue = x;
  let xUnit = "px";
  if (typeof x === "string") {
    const xMatch = x.match(/([-\d.]+)(\D+)/);
    xValue = Number(xMatch[1]);
    xUnit = xMatch[2];
  }
  let yValue = y;
  let yUnit = "px";
  if (typeof y === "string") {
    const yMatch = y.match(/([-\d.]+)(\D+)/);
    yValue = Number(yMatch[1]);
    yUnit = yMatch[2];
  }
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
				transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
				opacity: ${target_opacity - od * u}`
  };
}
const file$z = "src/lib/elements/Details/Drawer.svelte";
function add_css$y(target) {
  append_styles(target, "svelte-9cjrez", 'aside.svelte-9cjrez{position:fixed;left:0px;top:0px;z-index:99999999;display:flex;height:100%;width:100%;flex-direction:column;overflow:hidden}@keyframes svelte-9cjrez-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes svelte-9cjrez-fade-out{0%{opacity:1}100%{opacity:0}}aside.svelte-9cjrez::before{position:absolute;left:0px;top:0px;display:block;height:100%;width:100%;animation:svelte-9cjrez-fade-in 150ms ease-out forwards;background-color:rgb(0 0 0 / 0.3);transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-content:"";content:var(--tw-content)}aside.svelte-9cjrez:not(.open)::before{animation:svelte-9cjrez-fade-out 150ms ease-in forwards}div.svelte-9cjrez{display:flex;min-height:0px;flex-grow:1;flex-direction:column}div.svelte-9cjrez::before{pointer-events:none;display:block;width:100%;padding-bottom:100%;--tw-content:"";content:var(--tw-content)}div.svelte-9cjrez>*{min-height:0px;flex-grow:1}');
}
const get_default_slot_changes$3 = (dirty) => ({ close: dirty & /*open*/
1 });
const get_default_slot_context$3 = (ctx) => ({ close: (
  /*func*/
  ctx[5]
) });
function create_if_block$l(ctx) {
  let aside;
  let div;
  let div_transition;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_default_slot_context$3
  );
  const block = {
    c: function create() {
      aside = element("aside");
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "svelte-9cjrez");
      add_location(div, file$z, 13, 4, 449);
      attr_dev(aside, "class", "svelte-9cjrez");
      toggle_class(
        aside,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(aside, file$z, 12, 2, 386);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, aside, anchor);
      append_dev(aside, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[8](aside);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            div,
            "outrostart",
            /*outrostart_handler*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          action_destroyer(clickOutside.call(
            null,
            div,
            /*root*/
            ctx[2]
          )),
          listen_dev(
            div,
            "click_outside",
            /*click_outside_handler*/
            ctx[7],
            false,
            false,
            false,
            false
          ),
          action_destroyer(portal$1.call(
            null,
            aside,
            /*root*/
            ctx[2]
          ))
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, open*/
        9)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[3],
              dirty,
              get_default_slot_changes$3
            ),
            get_default_slot_context$3
          );
        }
      }
      if (!current || dirty & /*open*/
      1) {
        toggle_class(
          aside,
          "open",
          /*open*/
          ctx[0]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div_transition)
            div_transition = create_bidirectional_transition(
              div,
              fly,
              {
                duration: 250,
                opacity: 0.85,
                y: "100%",
                easing: sineInOut
              },
              true
            );
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(
            div,
            fly,
            {
              duration: 250,
              opacity: 0.85,
              y: "100%",
              easing: sineInOut
            },
            false
          );
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(aside);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching && div_transition)
        div_transition.end();
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$l.name,
    type: "if",
    source: "(12:0) {#if open}",
    ctx
  });
  return block;
}
function create_fragment$D(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*open*/
    ctx[0] && create_if_block$l(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*open*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$l(ctx2);
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
    id: create_fragment$D.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$D($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Drawer", slots, ["default"]);
  const root = getSvelteRoot();
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let container;
  const writable_props = ["open"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Drawer> was created with unknown prop '${key2}'`);
  });
  const func = () => $$invalidate(0, open = false);
  const outrostart_handler = () => (
    /* force outro animation */
    container.classList.remove("open")
  );
  const click_outside_handler = () => $$invalidate(0, open = false);
  function aside_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(1, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    easing: sineInOut,
    clickOutside,
    getSvelteRoot,
    portal: portal$1,
    fly,
    root,
    dispatch,
    open,
    container
  });
  $$self.$inject_state = ($$props2) => {
    if ("open" in $$props2)
      $$invalidate(0, open = $$props2.open);
    if ("container" in $$props2)
      $$invalidate(1, container = $$props2.container);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*open*/
    1) {
      dispatch(open ? "open" : "close");
    }
  };
  return [
    open,
    container,
    root,
    $$scope,
    slots,
    func,
    outrostart_handler,
    click_outside_handler,
    aside_binding
  ];
}
class Drawer extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$D, create_fragment$D, safe_not_equal, { open: 0 }, add_css$y);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Drawer",
      options,
      id: create_fragment$D.name
    });
  }
  get open() {
    throw new Error("<Drawer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Drawer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$y = "src/lib/elements/Details/Details.svelte";
function add_css$x(target) {
  append_styles(target, "svelte-bu84b1", "div.svelte-bu84b1{position:relative;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:16px;padding-top:12px\n}@media(min-width: 768px){div.svelte-bu84b1{height:auto;border-radius:8px;padding:20px;padding-top:16px;--tw-shadow:0 4px 16px 0 rgba(0,0,0,0.1),0 0 4px 0 rgba(0,0,0,0.05);--tw-shadow-colored:0 4px 16px 0 var(--tw-shadow-color), 0 0 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n    }}div.svelte-bu84b1>*{min-height:0px\n}button.svelte-bu84b1{position:absolute;top:12px;right:16px;float:left;border-style:none;background-color:transparent;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 768px){button.svelte-bu84b1{top:16px\n    }}");
}
const get_default_slot_changes$2 = (dirty) => ({ close: dirty & /*close*/
131072 });
const get_default_slot_context$2 = (ctx) => ({ close: (
  /*close*/
  ctx[17]
) });
function create_if_block$k(ctx) {
  let button;
  let icon;
  let current;
  let mounted;
  let dispose;
  icon = new Icon({
    props: { variant: "close" },
    $$inline: true
  });
  const block = {
    c: function create() {
      button = element("button");
      create_component(icon.$$.fragment);
      attr_dev(button, "class", "svelte-bu84b1");
      add_location(button, file$y, 35, 6, 1399);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, button, anchor);
      mount_component(icon, button, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          function() {
            if (is_function(
              /*close*/
              ctx[17]
            ))
              ctx[17].apply(this, arguments);
          },
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      destroy_component(icon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$k.name,
    type: "if",
    source: "(35:4) {#if closeBtn}",
    ctx
  });
  return block;
}
function create_default_slot$i(ctx) {
  let div;
  let t;
  let current;
  let if_block = (
    /*closeBtn*/
    ctx[0] && create_if_block$k(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[11].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    get_default_slot_context$2
  );
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "tint-popper svelte-bu84b1");
      add_location(div, file$y, 33, 2, 1348);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*closeBtn*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*closeBtn*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$k(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, close*/
        163840)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
              dirty,
              get_default_slot_changes$2
            ),
            get_default_slot_context$2
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$i.name,
    type: "slot",
    source: "(33:0) <svelte:component this={Component} {...props} bind:open on:open on:close let:close>",
    ctx
  });
  return block;
}
function create_fragment$C(ctx) {
  let switch_instance;
  let updating_open;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    /*props*/
    ctx[2]
  ];
  function switch_instance_open_binding(value) {
    ctx[12](value);
  }
  var switch_value = (
    /*Component*/
    ctx[3]
  );
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: {
        default: [
          create_default_slot$i,
          ({ close }) => ({ 17: close }),
          ({ close }) => close ? 131072 : 0
        ]
      },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    if (
      /*open*/
      ctx2[1] !== void 0
    ) {
      switch_instance_props.open = /*open*/
      ctx2[1];
    }
    return {
      props: switch_instance_props,
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "open", switch_instance_open_binding));
    switch_instance.$on(
      "open",
      /*open_handler*/
      ctx[13]
    );
    switch_instance.$on(
      "close",
      /*close_handler*/
      ctx[14]
    );
  }
  const block = {
    c: function create() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const switch_instance_changes = dirty & /*props*/
      4 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
        /*props*/
        ctx2[2]
      )]) : {};
      if (dirty & /*$$scope, close, closeBtn*/
      163841) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      2) {
        updating_open = true;
        switch_instance_changes.open = /*open*/
        ctx2[1];
        add_flush_callback(() => updating_open = false);
      }
      if (dirty & /*Component*/
      8 && switch_value !== (switch_value = /*Component*/
      ctx2[3])) {
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
          binding_callbacks.push(() => bind(switch_instance, "open", switch_instance_open_binding));
          switch_instance.$on(
            "open",
            /*open_handler*/
            ctx2[13]
          );
          switch_instance.$on(
            "close",
            /*close_handler*/
            ctx2[14]
          );
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$C.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$C($$self, $$props, $$invalidate) {
  let Component;
  let props;
  let asDrawer;
  let $isMdViewport;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Details", slots, ["default"]);
  let { anchor } = $$props;
  let { placement = "bottom" } = $$props;
  let { offset = [0, 0] } = $$props;
  let { breakpoint = 768 } = $$props;
  let { closeBtn = true } = $$props;
  const dispatch = createEventDispatcher();
  let open = false;
  const isMdViewport = media(`(min-width: ${breakpoint}px)`);
  validate_store(isMdViewport, "isMdViewport");
  component_subscribe($$self, isMdViewport, (value) => $$invalidate(10, $isMdViewport = value));
  onMount(() => {
    const _open = () => $$invalidate(1, open = asDrawer && true);
    const p = (anchor ? Promise.resolve() : tick()).then(() => {
      const isHTMLElement = anchor instanceof HTMLElement;
      const off = isHTMLElement ? anchor.addEventListener("click", _open) : anchor.$on("click", _open);
      return () => isHTMLElement ? anchor.removeEventListener("click", _open) : off();
    });
    return () => p.then((cleanup) => cleanup());
  });
  $$self.$$.on_mount.push(function() {
    if (anchor === void 0 && !("anchor" in $$props || $$self.$$.bound[$$self.$$.props["anchor"]])) {
      console.warn("<Details> was created without expected prop 'anchor'");
    }
  });
  const writable_props = ["anchor", "placement", "offset", "breakpoint", "closeBtn"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Details> was created with unknown prop '${key2}'`);
  });
  function switch_instance_open_binding(value) {
    open = value;
    $$invalidate(1, open);
  }
  function open_handler(event) {
    bubble.call(this, $$self, event);
  }
  function close_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("anchor" in $$props2)
      $$invalidate(5, anchor = $$props2.anchor);
    if ("placement" in $$props2)
      $$invalidate(6, placement = $$props2.placement);
    if ("offset" in $$props2)
      $$invalidate(7, offset = $$props2.offset);
    if ("breakpoint" in $$props2)
      $$invalidate(8, breakpoint = $$props2.breakpoint);
    if ("closeBtn" in $$props2)
      $$invalidate(0, closeBtn = $$props2.closeBtn);
    if ("$$scope" in $$props2)
      $$invalidate(15, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    tick,
    Floating,
    Icon,
    media,
    Drawer,
    anchor,
    placement,
    offset,
    breakpoint,
    closeBtn,
    dispatch,
    open,
    isMdViewport,
    asDrawer,
    props,
    Component,
    $isMdViewport
  });
  $$self.$inject_state = ($$props2) => {
    if ("anchor" in $$props2)
      $$invalidate(5, anchor = $$props2.anchor);
    if ("placement" in $$props2)
      $$invalidate(6, placement = $$props2.placement);
    if ("offset" in $$props2)
      $$invalidate(7, offset = $$props2.offset);
    if ("breakpoint" in $$props2)
      $$invalidate(8, breakpoint = $$props2.breakpoint);
    if ("closeBtn" in $$props2)
      $$invalidate(0, closeBtn = $$props2.closeBtn);
    if ("open" in $$props2)
      $$invalidate(1, open = $$props2.open);
    if ("asDrawer" in $$props2)
      $$invalidate(9, asDrawer = $$props2.asDrawer);
    if ("props" in $$props2)
      $$invalidate(2, props = $$props2.props);
    if ("Component" in $$props2)
      $$invalidate(3, Component = $$props2.Component);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*open*/
    2) {
      dispatch("open", open);
    }
    if ($$self.$$.dirty & /*$isMdViewport*/
    1024) {
      $$invalidate(9, asDrawer = !$isMdViewport);
    }
    if ($$self.$$.dirty & /*asDrawer*/
    512) {
      $$invalidate(3, Component = asDrawer ? Drawer : Floating);
    }
    if ($$self.$$.dirty & /*asDrawer, open, anchor, placement, offset*/
    738) {
      $$invalidate(2, props = asDrawer ? { open } : { anchor, placement, offset });
    }
  };
  return [
    closeBtn,
    open,
    props,
    Component,
    isMdViewport,
    anchor,
    placement,
    offset,
    breakpoint,
    asDrawer,
    $isMdViewport,
    slots,
    switch_instance_open_binding,
    open_handler,
    close_handler,
    $$scope
  ];
}
class Details extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$C,
      create_fragment$C,
      safe_not_equal,
      {
        anchor: 5,
        placement: 6,
        offset: 7,
        breakpoint: 8,
        closeBtn: 0
      },
      add_css$x
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Details",
      options,
      id: create_fragment$C.name
    });
  }
  get anchor() {
    throw new Error("<Details>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set anchor(value) {
    throw new Error("<Details>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get placement() {
    throw new Error("<Details>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set placement(value) {
    throw new Error("<Details>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get offset() {
    throw new Error("<Details>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set offset(value) {
    throw new Error("<Details>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get breakpoint() {
    throw new Error("<Details>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set breakpoint(value) {
    throw new Error("<Details>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get closeBtn() {
    throw new Error("<Details>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set closeBtn(value) {
    throw new Error("<Details>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$x = "src/lib/elements/Disclosure/Disclosure.svelte";
function add_css$w(target) {
  append_styles(target, "svelte-1qg5pyz", ".tint-disclosure.svelte-1qg5pyz.svelte-1qg5pyz{display:flex;flex-direction:column\n}.tint-disclosure.open.dir-down.svelte-1qg5pyz button.svelte-1qg5pyz>.icon{transform-origin:50% 52%;--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.tint-disclosure.open.dir-up.svelte-1qg5pyz button.svelte-1qg5pyz>.icon{transform-origin:50% 48%;--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.summary.svelte-1qg5pyz.svelte-1qg5pyz{display:flex;align-items:center;font-size:16px;line-height:24px\n}button.svelte-1qg5pyz.svelte-1qg5pyz{pointer-events:auto;position:relative;margin-right:auto;display:flex;flex-shrink:0;align-items:center;justify-content:center;font-size:14px;line-height:20px;font-weight:700\n}button.svelte-1qg5pyz>.icon{margin-left:4px;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.content.svelte-1qg5pyz.svelte-1qg5pyz{display:flex;flex-direction:column\n}");
}
const get_default_slot_changes$1 = (dirty) => ({ close: dirty & /*open*/
1 });
const get_default_slot_context$1 = (ctx) => ({ close: (
  /*func*/
  ctx[8]
) });
const get_button_slot_changes$1 = (dirty) => ({ close: dirty & /*open*/
1 });
const get_button_slot_context$1 = (ctx) => ({ close: (
  /*func*/
  ctx[8]
) });
const get_title_slot_changes$2 = (dirty) => ({ close: dirty & /*open*/
1 });
const get_title_slot_context$2 = (ctx) => ({ close: (
  /*func*/
  ctx[8]
) });
function create_if_block$j(ctx) {
  let div;
  let div_transition;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    get_default_slot_context$1
  );
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "content svelte-1qg5pyz");
      add_location(div, file$x, 25, 4, 999);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, open*/
        33)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              get_default_slot_changes$1
            ),
            get_default_slot_context$1
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div_transition)
            div_transition = create_bidirectional_transition(div, slide, {}, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, slide, {}, false);
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$j.name,
    type: "if",
    source: "(25:2) {#if open}",
    ctx
  });
  return block;
}
function create_fragment$B(ctx) {
  let div1;
  let div0;
  let button;
  let t0;
  let icon_1;
  let t1;
  let t2;
  let div1_class_value;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = (
    /*#slots*/
    ctx[6].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    get_title_slot_context$2
  );
  icon_1 = new Icon({
    props: { class: "icon", variant: (
      /*icon*/
      ctx[2]
    ) },
    $$inline: true
  });
  const button_slot_template = (
    /*#slots*/
    ctx[6].button
  );
  const button_slot = create_slot(
    button_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    get_button_slot_context$1
  );
  let if_block = (
    /*open*/
    ctx[0] && create_if_block$j(ctx)
  );
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      if (title_slot)
        title_slot.c();
      t0 = space();
      create_component(icon_1.$$.fragment);
      t1 = space();
      if (button_slot)
        button_slot.c();
      t2 = space();
      if (if_block)
        if_block.c();
      button.disabled = /*disabled*/
      ctx[1];
      attr_dev(button, "class", "svelte-1qg5pyz");
      add_location(button, file$x, 18, 4, 800);
      attr_dev(div0, "class", "summary svelte-1qg5pyz");
      attr_dev(div0, "tabindex", "-1");
      attr_dev(
        div0,
        "aria-expanded",
        /*open*/
        ctx[0]
      );
      add_location(div0, file$x, 17, 2, 739);
      attr_dev(div1, "class", div1_class_value = null_to_empty(
        /*classes*/
        ctx[3]
      ) + " svelte-1qg5pyz");
      toggle_class(
        div1,
        "open",
        /*open*/
        ctx[0]
      );
      add_location(div1, file$x, 16, 0, 704);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, button);
      if (title_slot) {
        title_slot.m(button, null);
      }
      append_dev(button, t0);
      mount_component(icon_1, button, null);
      append_dev(div0, t1);
      if (button_slot) {
        button_slot.m(div0, null);
      }
      append_dev(div1, t2);
      if (if_block)
        if_block.m(div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button,
            "click",
            /*click_handler_1*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "click",
            /*click_handler*/
            ctx[7],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope, open*/
        33)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              get_title_slot_changes$2
            ),
            get_title_slot_context$2
          );
        }
      }
      const icon_1_changes = {};
      if (dirty & /*icon*/
      4)
        icon_1_changes.variant = /*icon*/
        ctx2[2];
      icon_1.$set(icon_1_changes);
      if (!current || dirty & /*disabled*/
      2) {
        prop_dev(
          button,
          "disabled",
          /*disabled*/
          ctx2[1]
        );
      }
      if (button_slot) {
        if (button_slot.p && (!current || dirty & /*$$scope, open*/
        33)) {
          update_slot_base(
            button_slot,
            button_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              button_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              get_button_slot_changes$1
            ),
            get_button_slot_context$1
          );
        }
      }
      if (!current || dirty & /*open*/
      1) {
        attr_dev(
          div0,
          "aria-expanded",
          /*open*/
          ctx2[0]
        );
      }
      if (
        /*open*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*open*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$j(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*classes*/
      8 && div1_class_value !== (div1_class_value = null_to_empty(
        /*classes*/
        ctx2[3]
      ) + " svelte-1qg5pyz")) {
        attr_dev(div1, "class", div1_class_value);
      }
      if (!current || dirty & /*classes, open*/
      9) {
        toggle_class(
          div1,
          "open",
          /*open*/
          ctx2[0]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(icon_1.$$.fragment, local);
      transition_in(button_slot, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot, local);
      transition_out(icon_1.$$.fragment, local);
      transition_out(button_slot, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (title_slot)
        title_slot.d(detaching);
      destroy_component(icon_1);
      if (button_slot)
        button_slot.d(detaching);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$B.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$B($$self, $$props, $$invalidate) {
  let classes;
  let icon;
  const omit_props_names = ["open", "dir", "disabled"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Disclosure", slots, ["title", "button", "default"]);
  let { open = false } = $$props;
  let { dir = "down" } = $$props;
  let { disabled = false } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  const func = () => $$invalidate(0, open = !open);
  const click_handler_1 = () => $$invalidate(0, open = !open);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("dir" in $$new_props)
      $$invalidate(4, dir = $$new_props.dir);
    if ("disabled" in $$new_props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    slide,
    Icon,
    cx,
    open,
    dir,
    disabled,
    icon,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("open" in $$props)
      $$invalidate(0, open = $$new_props.open);
    if ("dir" in $$props)
      $$invalidate(4, dir = $$new_props.dir);
    if ("disabled" in $$props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("icon" in $$props)
      $$invalidate(2, icon = $$new_props.icon);
    if ("classes" in $$props)
      $$invalidate(3, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(3, classes = cx("tint-disclosure", $$restProps.class, `dir-${dir}`));
    if ($$self.$$.dirty & /*dir*/
    16) {
      $$invalidate(2, icon = `chevron-small-${dir}`);
    }
  };
  return [
    open,
    disabled,
    icon,
    classes,
    dir,
    $$scope,
    slots,
    click_handler,
    func,
    click_handler_1
  ];
}
class Disclosure extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$B, create_fragment$B, safe_not_equal, { open: 0, dir: 4, disabled: 1 }, add_css$w);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Disclosure",
      options,
      id: create_fragment$B.name
    });
  }
  get open() {
    throw new Error("<Disclosure>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<Disclosure>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get dir() {
    throw new Error("<Disclosure>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set dir(value) {
    throw new Error("<Disclosure>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Disclosure>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<Disclosure>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function baseSlice(array, start2, end) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start2 > end ? 0 : end - start2 >>> 0;
  start2 >>>= 0;
  var result2 = Array(length);
  while (++index < length) {
    result2[index] = array[index + start2];
  }
  return result2;
}
function castSlice(array, start2, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start2 && end >= length ? array : baseSlice(array, start2, end);
}
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function asciiToArray(string) {
  return string.split("");
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var upperFirst = createCaseFirst("toUpperCase");
const upperFirst$1 = upperFirst;
function capitalize(string) {
  return upperFirst$1(toString(string).toLowerCase());
}
const file$w = "src/lib/elements/Notification/Notification.svelte";
function add_css$v(target) {
  append_styles(target, "svelte-1f66yyu", "div.svelte-1f66yyu{display:flex;width:max-content;border-radius:8px;background-color:var(--tint-notification-background);padding-top:12px;padding-bottom:12px;padding-left:18px;padding-right:18px;font-size:14px;line-height:20px;color:var(--tint-text-light)\n}div.svelte-1f66yyu>*{flex-shrink:0\n}div.svelte-1f66yyu>:first-child{height:20px;width:20px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(56 56 60 / var(--tw-text-opacity))\n}div.svelte-1f66yyu>:first-child>path{stroke:currentColor\n}span.svelte-1f66yyu{padding-left:10px;padding-right:10px\n}");
}
function create_if_block$i(ctx) {
  let previous_key = (
    /*notification*/
    ctx[0].id
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      key_block.m(target, anchor);
      insert_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*notification*/
      1 && safe_not_equal(previous_key, previous_key = /*notification*/
      ctx2[0].id)) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$i.name,
    type: "if",
    source: "(12:0) {#if notification}",
    ctx
  });
  return block;
}
function create_if_block_1$a(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: { variant: "checkmark-xs" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$a.name,
    type: "if",
    source: '(19:6) {#if notification.type === \\"success\\"}',
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div;
  let t0;
  let span;
  let t1_value = (
    /*notification*/
    ctx[0].text + ""
  );
  let t1;
  let div_class_value;
  let div_transition;
  let current;
  let if_block = (
    /*notification*/
    ctx[0].type === "success" && create_if_block_1$a(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      attr_dev(span, "class", "svelte-1f66yyu");
      add_location(span, file$w, 19, 6, 710);
      attr_dev(div, "class", div_class_value = null_to_empty(
        /*$$restProps*/
        ctx[1].class
      ) + " svelte-1f66yyu");
      attr_dev(div, "data-qa", "tint-notification");
      add_location(div, file$w, 13, 4, 497);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t0);
      append_dev(div, span);
      append_dev(span, t1);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*notification*/
        ctx[0].type === "success"
      ) {
        if (if_block) {
          if (dirty & /*notification*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$a(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if ((!current || dirty & /*notification*/
      1) && t1_value !== (t1_value = /*notification*/
      ctx[0].text + ""))
        set_data_dev(t1, t1_value);
      if (!current || dirty & /*$$restProps*/
      2 && div_class_value !== (div_class_value = null_to_empty(
        /*$$restProps*/
        ctx[1].class
      ) + " svelte-1f66yyu")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (!current)
          return;
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, { duration: 300, easing: sineInOut }, true);
        div_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      if (!div_transition)
        div_transition = create_bidirectional_transition(div, fade, { duration: 300, easing: sineInOut }, false);
      div_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      if (detaching && div_transition)
        div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(13:2) {#key notification.id}",
    ctx
  });
  return block;
}
function create_fragment$A(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*notification*/
    ctx[0] && create_if_block$i(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*notification*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*notification*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$i(ctx2);
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
    id: create_fragment$A.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$A($$self, $$props, $$invalidate) {
  const omit_props_names = ["success"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Notification", slots, []);
  let notification = null;
  const set = (data2) => $$invalidate(0, notification = { id: uniqId(), ...data2 });
  const clear = debounce(() => $$invalidate(0, notification = null), 3e3);
  const success = (text2) => set({ type: "success", text: text2 });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
  };
  $$self.$capture_state = () => ({
    easing: sineInOut,
    fade,
    debounce,
    uniqId,
    Icon,
    notification,
    set,
    clear,
    success
  });
  $$self.$inject_state = ($$new_props) => {
    if ("notification" in $$props)
      $$invalidate(0, notification = $$new_props.notification);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*notification*/
    1) {
      notification && clear();
    }
  };
  return [notification, $$restProps, success];
}
class Notification extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$A, create_fragment$A, safe_not_equal, { success: 2 }, add_css$v);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Notification",
      options,
      id: create_fragment$A.name
    });
  }
  get success() {
    return this.$$.ctx[2];
  }
  set success(value) {
    throw new Error("<Notification>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$v = "src/lib/elements/Price/Price.svelte";
function create_dynamic_element$1(ctx) {
  let svelte_element;
  let t;
  let svelte_element_class_value;
  let svelte_element_levels = [
    {
      class: svelte_element_class_value = /*$$restProps*/
      ctx[2].class
    }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  const block = {
    c: function create() {
      svelte_element = element(
        /*as*/
        ctx[0]
      );
      t = text(
        /*price*/
        ctx[1]
      );
      set_dynamic_element_data(
        /*as*/
        ctx[0]
      )(svelte_element, svelte_element_data);
      add_location(svelte_element, file$v, 19, 0, 502);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, svelte_element, anchor);
      append_dev(svelte_element, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*price*/
      2)
        set_data_dev(
          t,
          /*price*/
          ctx2[1]
        );
      set_dynamic_element_data(
        /*as*/
        ctx2[0]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        4 && svelte_element_class_value !== (svelte_element_class_value = /*$$restProps*/
        ctx2[2].class) && { class: svelte_element_class_value }
      ]));
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svelte_element);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element$1.name,
    type: "child_dynamic_element",
    source: "(20:0) <svelte:element this={as} class={$$restProps.class}>",
    ctx
  });
  return block;
}
function create_fragment$z(ctx) {
  let previous_tag = (
    /*as*/
    ctx[0]
  );
  let svelte_element_anchor;
  validate_dynamic_element(
    /*as*/
    ctx[0]
  );
  validate_void_dynamic_element(
    /*as*/
    ctx[0]
  );
  let svelte_element = (
    /*as*/
    ctx[0] && create_dynamic_element$1(ctx)
  );
  const block = {
    c: function create() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_dev(target, svelte_element_anchor, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*as*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*as*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*as*/
          ctx2[0]
        )) {
          svelte_element.d(1);
          validate_dynamic_element(
            /*as*/
            ctx2[0]
          );
          validate_void_dynamic_element(
            /*as*/
            ctx2[0]
          );
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*as*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*as*/
        ctx2[0];
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$z.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const formatters = /* @__PURE__ */ new Map();
const getFormatter = (currency) => {
  if (!formatters.has(currency))
    formatters.set(currency, new Intl.NumberFormat(["en-US"], { currency, style: "currency" }));
  return formatters.get(currency);
};
function instance$z($$self, $$props, $$invalidate) {
  let formatter;
  let price;
  const omit_props_names = ["as", "currency", "amount"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Price", slots, []);
  let { as = "span" } = $$props;
  let { currency } = $$props;
  let { amount } = $$props;
  $$self.$$.on_mount.push(function() {
    if (currency === void 0 && !("currency" in $$props || $$self.$$.bound[$$self.$$.props["currency"]])) {
      console.warn("<Price> was created without expected prop 'currency'");
    }
    if (amount === void 0 && !("amount" in $$props || $$self.$$.bound[$$self.$$.props["amount"]])) {
      console.warn("<Price> was created without expected prop 'amount'");
    }
  });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("currency" in $$new_props)
      $$invalidate(3, currency = $$new_props.currency);
    if ("amount" in $$new_props)
      $$invalidate(4, amount = $$new_props.amount);
  };
  $$self.$capture_state = () => ({
    formatters,
    getFormatter,
    as,
    currency,
    amount,
    formatter,
    price
  });
  $$self.$inject_state = ($$new_props) => {
    if ("as" in $$props)
      $$invalidate(0, as = $$new_props.as);
    if ("currency" in $$props)
      $$invalidate(3, currency = $$new_props.currency);
    if ("amount" in $$props)
      $$invalidate(4, amount = $$new_props.amount);
    if ("formatter" in $$props)
      $$invalidate(5, formatter = $$new_props.formatter);
    if ("price" in $$props)
      $$invalidate(1, price = $$new_props.price);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*currency*/
    8) {
      $$invalidate(5, formatter = getFormatter(currency));
    }
    if ($$self.$$.dirty & /*formatter, amount*/
    48) {
      $$invalidate(1, price = formatter.format(amount));
    }
  };
  return [as, price, $$restProps, currency, amount, formatter];
}
class Price extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$z, create_fragment$z, safe_not_equal, { as: 0, currency: 3, amount: 4 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Price",
      options,
      id: create_fragment$z.name
    });
  }
  get as() {
    throw new Error("<Price>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set as(value) {
    throw new Error("<Price>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get currency() {
    throw new Error("<Price>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set currency(value) {
    throw new Error("<Price>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get amount() {
    throw new Error("<Price>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amount(value) {
    throw new Error("<Price>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const name = Symbol("group_name");
const selected = Symbol("group_value");
const setName = (value) => setContext(name, value);
const getName = () => getContext(name);
const setSelected$1 = (value) => setContext(selected, value);
const getSelected$1 = () => getContext(selected);
function create_default_slot$h(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount2(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
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
    id: create_default_slot$h.name,
    type: "slot",
    source: '(14:0) <Slider class={$$restProps.class} as=\\"ul\\">',
    ctx
  });
  return block;
}
function create_fragment$y(ctx) {
  let slider;
  let current;
  slider = new Slider({
    props: {
      class: (
        /*$$restProps*/
        ctx[1].class
      ),
      as: "ul",
      $$slots: { default: [create_default_slot$h] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(slider.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const slider_changes = {};
      if (dirty & /*$$restProps*/
      2)
        slider_changes.class = /*$$restProps*/
        ctx2[1].class;
      if (dirty & /*$$scope*/
      64) {
        slider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      slider.$set(slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$y.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$y($$self, $$props, $$invalidate) {
  const omit_props_names = ["name", "value"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selected;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("RadioGroup", slots, ["default"]);
  let { name: name2 = "radio-group" } = $$props;
  let { value = void 0 } = $$props;
  setName(name2);
  const selected2 = setSelected$1(writable(value));
  validate_store(selected2, "selected");
  component_subscribe($$self, selected2, (value2) => $$invalidate(4, $selected = value2));
  const dispatch = createEventDispatcher();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("name" in $$new_props)
      $$invalidate(2, name2 = $$new_props.name);
    if ("value" in $$new_props)
      $$invalidate(3, value = $$new_props.value);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    writable,
    Slider,
    setName,
    setSelected: setSelected$1,
    name: name2,
    value,
    selected: selected2,
    dispatch,
    $selected
  });
  $$self.$inject_state = ($$new_props) => {
    if ("name" in $$props)
      $$invalidate(2, name2 = $$new_props.name);
    if ("value" in $$props)
      $$invalidate(3, value = $$new_props.value);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    8) {
      set_store_value(selected2, $selected = value, $selected);
    }
    if ($$self.$$.dirty & /*$selected, value*/
    24) {
      $selected !== value && dispatch("change", $selected);
    }
  };
  return [selected2, $$restProps, name2, value, $selected, slots, $$scope];
}
class RadioGroup extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$y, create_fragment$y, safe_not_equal, { name: 2, value: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "RadioGroup",
      options,
      id: create_fragment$y.name
    });
  }
  get name() {
    throw new Error("<RadioGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<RadioGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<RadioGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<RadioGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$u = "src/lib/elements/Radio/Radio.svelte";
function add_css$u(target) {
  append_styles(target, "svelte-1615s0r", "input.svelte-1615s0r{position:absolute;top:0px;left:0px;height:100%;width:100%;-webkit-appearance:none;appearance:none;border-radius:inherit;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}label.svelte-1615s0r{position:relative;display:flex;min-height:32px;align-items:center;justify-content:center;border-radius:var(--tint-button-base-radius);border-width:1px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:16px;padding-right:16px;padding-top:4px;padding-bottom:4px;font-size:12px;line-height:16px;font-weight:600;color:var(--tint-text-dark);--tw-text-opacity:0.9\n}label.svelte-1615s0r:hover{--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))\n}label.svelte-1615s0r:active{--tw-bg-opacity:1;background-color:rgb(243 243 243 / var(--tw-bg-opacity))\n}.disabled.svelte-1615s0r{pointer-events:none;--tw-text-opacity:0.3\n}.disabled.svelte-1615s0r:not(.active){--tw-border-opacity:1;border-color:rgb(238 238 238 / var(--tw-border-opacity))\n}.active.svelte-1615s0r{border-color:transparent;background-color:var(--tint-button-primary-background);color:var(--tint-text-light);--tw-text-opacity:1\n}.active.svelte-1615s0r:hover{background-color:var(--tint-button-primary-background-hover)\n}.active.svelte-1615s0r:active{background-color:var(--tint-button-primary-background-active)\n}.active.disabled.svelte-1615s0r{background-color:var(--tint-button-primary-background-disabled);--tw-text-opacity:0.6\n}");
}
function create_fragment$x(ctx) {
  let label;
  let span;
  let t;
  let input;
  let value_has_changed = false;
  let label_class_value;
  let current;
  let binding_group;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  binding_group = init_binding_group(
    /*$$binding_groups*/
    ctx[10][0]
  );
  const block = {
    c: function create() {
      label = element("label");
      span = element("span");
      if (default_slot)
        default_slot.c();
      t = space();
      input = element("input");
      add_location(span, file$u, 9, 2, 279);
      attr_dev(input, "type", "radio");
      attr_dev(input, "role", "button");
      attr_dev(
        input,
        "name",
        /*name*/
        ctx[4]
      );
      input.__value = /*value*/
      ctx[0];
      input.value = input.__value;
      input.disabled = /*disabled*/
      ctx[1];
      attr_dev(input, "class", "svelte-1615s0r");
      add_location(input, file$u, 12, 2, 311);
      attr_dev(label, "class", label_class_value = null_to_empty(
        /*$$restProps*/
        ctx[6].class
      ) + " svelte-1615s0r");
      toggle_class(
        label,
        "active",
        /*active*/
        ctx[3]
      );
      toggle_class(
        label,
        "disabled",
        /*disabled*/
        ctx[1]
      );
      add_location(label, file$u, 8, 0, 215);
      binding_group.p(input);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, span);
      if (default_slot) {
        default_slot.m(span, null);
      }
      append_dev(label, t);
      append_dev(label, input);
      input.checked = input.__value === /*$selected*/
      ctx[2];
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          input,
          "change",
          /*input_change_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*value*/
      1) {
        prop_dev(
          input,
          "__value",
          /*value*/
          ctx2[0]
        );
        input.value = input.__value;
        value_has_changed = true;
      }
      if (!current || dirty & /*disabled*/
      2) {
        prop_dev(
          input,
          "disabled",
          /*disabled*/
          ctx2[1]
        );
      }
      if (value_has_changed || dirty & /*$selected*/
      4) {
        input.checked = input.__value === /*$selected*/
        ctx2[2];
      }
      if (!current || dirty & /*$$restProps*/
      64 && label_class_value !== (label_class_value = null_to_empty(
        /*$$restProps*/
        ctx2[6].class
      ) + " svelte-1615s0r")) {
        attr_dev(label, "class", label_class_value);
      }
      if (!current || dirty & /*$$restProps, active*/
      72) {
        toggle_class(
          label,
          "active",
          /*active*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*$$restProps, disabled*/
      66) {
        toggle_class(
          label,
          "disabled",
          /*disabled*/
          ctx2[1]
        );
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
      if (detaching)
        detach_dev(label);
      if (default_slot)
        default_slot.d(detaching);
      binding_group.r();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$x.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$x($$self, $$props, $$invalidate) {
  let active;
  const omit_props_names = ["value", "disabled"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selected;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Radio", slots, ["default"]);
  let { value } = $$props;
  let { disabled = false } = $$props;
  const name2 = getName();
  const selected2 = getSelected$1();
  validate_store(selected2, "selected");
  component_subscribe($$self, selected2, (value2) => $$invalidate(2, $selected = value2));
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Radio> was created without expected prop 'value'");
    }
  });
  const $$binding_groups = [[]];
  function input_change_handler() {
    $selected = this.__value;
    selected2.set($selected);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("disabled" in $$new_props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    getName,
    getSelected: getSelected$1,
    value,
    disabled,
    name: name2,
    selected: selected2,
    active,
    $selected
  });
  $$self.$inject_state = ($$new_props) => {
    if ("value" in $$props)
      $$invalidate(0, value = $$new_props.value);
    if ("disabled" in $$props)
      $$invalidate(1, disabled = $$new_props.disabled);
    if ("active" in $$props)
      $$invalidate(3, active = $$new_props.active);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$selected, value*/
    5) {
      $$invalidate(3, active = $selected === value);
    }
  };
  return [
    value,
    disabled,
    $selected,
    active,
    name2,
    selected2,
    $$restProps,
    $$scope,
    slots,
    input_change_handler,
    $$binding_groups
  ];
}
class Radio extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$x, create_fragment$x, safe_not_equal, { value: 0, disabled: 1 }, add_css$u);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Radio",
      options,
      id: create_fragment$x.name
    });
  }
  get value() {
    throw new Error("<Radio>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Radio>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Radio>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<Radio>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$t = "src/lib/elements/Rating/Rating.svelte";
function add_css$t(target) {
  append_styles(target, "svelte-1p5fjgk", `div.svelte-1p5fjgk{display:inline-flex;white-space:nowrap;font-size:12px;line-height:16px}meter.svelte-1p5fjgk{height:16px;width:80px;-webkit-appearance:none;appearance:none}meter.svelte-1p5fjgk::-webkit-meter-bar,meter.svelte-1p5fjgk::-webkit-meter-optimum-value{background:none}meter.svelte-1p5fjgk::-moz-meter-bar{background:none}meter.svelte-1p5fjgk{background-image:linear-gradient(
      to right,
      #f9b74a,
      #f9b74a var(--value),
      #dcdcdd var(--value),
      #dcdcdd
    );-webkit-mask:url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.685 13.845c.175.13.368.178.581.145.213-.034.435-.133.666-.298l3.07-2.188 3.064 2.188c.235.165.458.264.669.298a.738.738 0 0 0 .577-.145.756.756 0 0 0 .316-.495c.037-.205.008-.437-.085-.696l-1.216-3.497 3.095-2.153c.235-.161.4-.334.495-.52a.71.71 0 0 0 .04-.577.76.76 0 0 0-.386-.445c-.189-.097-.427-.143-.715-.139l-3.793.03-1.15-3.516c-.088-.27-.21-.478-.361-.622A.773.773 0 0 0 8.002 1a.773.773 0 0 0-.55.215c-.152.144-.273.351-.362.622L5.935 5.353l-3.794-.03c-.284-.004-.52.042-.708.139a.76.76 0 0 0-.386.439c-.073.2-.06.394.036.58.098.188.264.362.499.523L4.67 9.157l-1.21 3.497c-.093.26-.121.491-.085.696.037.204.14.37.31.495z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E")
      repeat-x;mask:url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.685 13.845c.175.13.368.178.581.145.213-.034.435-.133.666-.298l3.07-2.188 3.064 2.188c.235.165.458.264.669.298a.738.738 0 0 0 .577-.145.756.756 0 0 0 .316-.495c.037-.205.008-.437-.085-.696l-1.216-3.497 3.095-2.153c.235-.161.4-.334.495-.52a.71.71 0 0 0 .04-.577.76.76 0 0 0-.386-.445c-.189-.097-.427-.143-.715-.139l-3.793.03-1.15-3.516c-.088-.27-.21-.478-.361-.622A.773.773 0 0 0 8.002 1a.773.773 0 0 0-.55.215c-.152.144-.273.351-.362.622L5.935 5.353l-3.794-.03c-.284-.004-.52.042-.708.139a.76.76 0 0 0-.386.439c-.073.2-.06.394.036.58.098.188.264.362.499.523L4.67 9.157l-1.21 3.497c-.093.26-.121.491-.085.696.037.204.14.37.31.495z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E")
      repeat-x}span.svelte-1p5fjgk{margin-left:4px}`);
}
function create_fragment$w(ctx) {
  let div;
  let meter;
  let t0;
  let span;
  let t1;
  let div_levels = [
    /*$$restProps*/
    ctx[4]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  const block = {
    c: function create() {
      div = element("div");
      meter = element("meter");
      t0 = space();
      span = element("span");
      t1 = text(
        /*value*/
        ctx[0]
      );
      attr_dev(
        meter,
        "min",
        /*min*/
        ctx[2]
      );
      attr_dev(
        meter,
        "max",
        /*max*/
        ctx[3]
      );
      meter.value = /*value*/
      ctx[0];
      attr_dev(meter, "class", "svelte-1p5fjgk");
      add_location(meter, file$t, 8, 2, 187);
      attr_dev(span, "class", "svelte-1p5fjgk");
      add_location(span, file$t, 9, 2, 238);
      set_attributes(div, div_data);
      toggle_class(div, "svelte-1p5fjgk", true);
      add_location(div, file$t, 7, 0, 162);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, meter);
      ctx[5](meter);
      append_dev(div, t0);
      append_dev(div, span);
      append_dev(span, t1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        prop_dev(
          meter,
          "value",
          /*value*/
          ctx2[0]
        );
      }
      if (dirty & /*value*/
      1)
        set_data_dev(
          t1,
          /*value*/
          ctx2[0]
        );
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & /*$$restProps*/
      16 && /*$$restProps*/
      ctx2[4]]));
      toggle_class(div, "svelte-1p5fjgk", true);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[5](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$w.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$w($$self, $$props, $$invalidate) {
  const omit_props_names = ["value"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Rating", slots, []);
  let { value } = $$props;
  let min = 0;
  let max = 5;
  let rating;
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Rating> was created without expected prop 'value'");
    }
  });
  function meter_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      rating = $$value;
      $$invalidate(1, rating);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
  };
  $$self.$capture_state = () => ({ value, min, max, rating });
  $$self.$inject_state = ($$new_props) => {
    if ("value" in $$props)
      $$invalidate(0, value = $$new_props.value);
    if ("min" in $$props)
      $$invalidate(2, min = $$new_props.min);
    if ("max" in $$props)
      $$invalidate(3, max = $$new_props.max);
    if ("rating" in $$props)
      $$invalidate(1, rating = $$new_props.rating);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*rating, value*/
    3) {
      rating && rating.style.setProperty("--value", `${value / max * 100}%`);
    }
  };
  return [value, rating, min, max, $$restProps, meter_binding];
}
class Rating extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$w, create_fragment$w, safe_not_equal, { value: 0 }, add_css$t);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Rating",
      options,
      id: create_fragment$w.name
    });
  }
  get value() {
    throw new Error("<Rating>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Rating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$s = "src/lib/elements/Slider/ScrollSnap.svelte";
function add_css$s(target) {
  append_styles(target, "svelte-7ze3qc", ".scroll-snap.svelte-7ze3qc{display:flex;max-width:100%;flex-wrap:nowrap;overflow-x:auto;overflow-y:auto;overscroll-behavior-x:none;scrollbar-width:none\n}.scroll-snap.svelte-7ze3qc::-webkit-scrollbar{display:none\n}.scroll-snap.svelte-7ze3qc>*{flex-shrink:0;flex-grow:0;flex-basis:auto\n}");
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  let svelte_element_levels = [
    {
      class: svelte_element_class_value = null_to_empty(
        /*classes*/
        ctx[2]
      ) + " svelte-7ze3qc"
    }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  const block = {
    c: function create() {
      svelte_element = element(
        /*as*/
        ctx[0]
      );
      if (default_slot)
        default_slot.c();
      set_dynamic_element_data(
        /*as*/
        ctx[0]
      )(svelte_element, svelte_element_data);
      add_location(svelte_element, file$s, 163, 0, 7268);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[14](svelte_element);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*as*/
        ctx2[0]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*classes*/
        4 && svelte_element_class_value !== (svelte_element_class_value = null_to_empty(
          /*classes*/
          ctx2[2]
        ) + " svelte-7ze3qc")) && { class: svelte_element_class_value }
      ]));
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
      if (detaching)
        detach_dev(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      ctx[14](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element.name,
    type: "child_dynamic_element",
    source: "(164:0) <svelte:element this={as} class={classes} bind:this={container}>",
    ctx
  });
  return block;
}
function create_fragment$v(ctx) {
  let previous_tag = (
    /*as*/
    ctx[0]
  );
  let svelte_element_anchor;
  let current;
  validate_dynamic_element(
    /*as*/
    ctx[0]
  );
  validate_void_dynamic_element(
    /*as*/
    ctx[0]
  );
  let svelte_element = (
    /*as*/
    ctx[0] && create_dynamic_element(ctx)
  );
  const block = {
    c: function create() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert_dev(target, svelte_element_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*as*/
        ctx2[0]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*as*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*as*/
          ctx2[0]
        )) {
          svelte_element.d(1);
          validate_dynamic_element(
            /*as*/
            ctx2[0]
          );
          validate_void_dynamic_element(
            /*as*/
            ctx2[0]
          );
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*as*/
          ctx2[0];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*as*/
        ctx2[0];
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o: function outro(local) {
      transition_out(svelte_element);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$v.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const MIN_SCROLL_DURATION = 150;
const ONE_SLIDE_SCROLL_DURATION = 350;
const scroll = (element2, shift) => new Promise((done) => {
  if (shift === 0)
    return done();
  const easeInOutCubic = (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const dir = Math.sign(shift);
  const distance = Math.abs(Math.round(shift));
  const duration = Math.max(MIN_SCROLL_DURATION, ONE_SLIDE_SCROLL_DURATION * (distance / element2.offsetWidth));
  let start2 = 0;
  let scrolled = 0;
  (function loop(now) {
    if (!now)
      return requestAnimationFrame(loop);
    if (!start2)
      start2 = now;
    const dt = Math.min((now - start2) / duration, 1);
    const shift2 = distance * easeInOutCubic(dt);
    const dx = Math.round(shift2 - scrolled);
    element2.scrollLeft += dir * dx;
    scrolled += dx;
    if (scrolled === distance)
      return done();
    if (scrolled && element2.scrollLeft === 0)
      return done();
    if (scrolled && Math.ceil(element2.scrollLeft + element2.offsetWidth) === element2.scrollWidth)
      return done();
    requestAnimationFrame(loop);
  })();
});
function instance$v($$self, $$props, $$invalidate) {
  let classes;
  let canSlideBack;
  let canSlideForward;
  const omit_props_names = ["as", "loop", "slideBack", "slideForward"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ScrollSnap", slots, ["default"]);
  let { as = "div" } = $$props;
  let { loop = false } = $$props;
  let container;
  let firstVisibleElement;
  let lastVisibleElement;
  let firstFullyVisibleElement;
  let lastFullyVisibleElement;
  const dispatch = createEventDispatcher();
  const slideBack = () => {
    const prev = firstFullyVisibleElement.previousElementSibling;
    let targetScrollLeft = prev.offsetLeft + prev.offsetWidth - container.offsetWidth;
    let snapElement = firstFullyVisibleElement;
    while (snapElement && snapElement.offsetLeft > targetScrollLeft)
      snapElement = snapElement.previousElementSibling;
    if (snapElement && snapElement.offsetLeft < targetScrollLeft) {
      snapElement = snapElement.nextElementSibling;
      targetScrollLeft = snapElement.offsetLeft;
    }
    scroll(container, targetScrollLeft - container.scrollLeft);
  };
  const slideForward = () => {
    const next = lastFullyVisibleElement.nextElementSibling;
    if (!next)
      return;
    const shiftToBecomeVisible = next.offsetLeft - container.scrollLeft;
    scroll(container, shiftToBecomeVisible);
  };
  onMount(() => {
    const visibleElements = /* @__PURE__ */ new Set();
    const fullyVisibleElements = /* @__PURE__ */ new Set();
    const intersection = new IntersectionObserver(
      (entries) => {
        for (const { intersectionRatio, target } of entries) {
          intersectionRatio > 0 ? visibleElements.add(target) : visibleElements.delete(target);
          intersectionRatio > 0.99 ? fullyVisibleElements.add(target) : fullyVisibleElements.delete(target);
        }
        for (const element2 of visibleElements) {
          if (!visibleElements.has(element2.previousElementSibling))
            $$invalidate(6, firstVisibleElement = element2);
          if (!visibleElements.has(element2.nextElementSibling))
            $$invalidate(7, lastVisibleElement = element2);
        }
        if (firstVisibleElement)
          $$invalidate(8, firstFullyVisibleElement = fullyVisibleElements.has(firstVisibleElement) ? firstVisibleElement : firstVisibleElement.nextElementSibling);
        if (lastVisibleElement)
          $$invalidate(9, lastFullyVisibleElement = fullyVisibleElements.has(lastVisibleElement) ? lastVisibleElement : lastVisibleElement.previousElementSibling);
      },
      { root: container, threshold: [0, 0.99] }
    );
    for (const child of container.children)
      intersection.observe(child);
    const mutation = new MutationObserver(() => {
      intersection.disconnect();
      visibleElements.clear(), fullyVisibleElements.clear();
      for (const child of container.children)
        intersection.observe(child);
    });
    mutation.observe(container, { childList: true });
    return () => {
      mutation.disconnect();
      intersection.disconnect();
    };
  });
  onMount(() => {
    const snap = debounce(
      () => {
        if (Math.round(container.scrollLeft + container.offsetWidth) === container.scrollWidth)
          return;
        const left = firstVisibleElement;
        const right = left.nextElementSibling;
        const dxLeft = container.scrollLeft - left.offsetLeft;
        const dxRight = left.offsetWidth - dxLeft;
        const snapElement = dxLeft < dxRight ? left : right;
        const shift = snapElement.offsetLeft - container.scrollLeft;
        container.removeEventListener("scroll", snap);
        scroll(container, shift).then(() => container.addEventListener("scroll", snap));
      },
      50
    );
    container.addEventListener("scroll", snap);
    return () => {
      snap.cancel();
      container.removeEventListener("scroll", snap);
    };
  });
  function svelte_element_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(1, container), $$invalidate(3, loop), $$invalidate(6, firstVisibleElement), $$invalidate(7, lastVisibleElement);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("loop" in $$new_props)
      $$invalidate(3, loop = $$new_props.loop);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    MIN_SCROLL_DURATION,
    ONE_SLIDE_SCROLL_DURATION,
    scroll,
    createEventDispatcher,
    onMount,
    debounce,
    cx,
    as,
    loop,
    container,
    firstVisibleElement,
    lastVisibleElement,
    firstFullyVisibleElement,
    lastFullyVisibleElement,
    dispatch,
    slideBack,
    slideForward,
    canSlideForward,
    canSlideBack,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("as" in $$props)
      $$invalidate(0, as = $$new_props.as);
    if ("loop" in $$props)
      $$invalidate(3, loop = $$new_props.loop);
    if ("container" in $$props)
      $$invalidate(1, container = $$new_props.container);
    if ("firstVisibleElement" in $$props)
      $$invalidate(6, firstVisibleElement = $$new_props.firstVisibleElement);
    if ("lastVisibleElement" in $$props)
      $$invalidate(7, lastVisibleElement = $$new_props.lastVisibleElement);
    if ("firstFullyVisibleElement" in $$props)
      $$invalidate(8, firstFullyVisibleElement = $$new_props.firstFullyVisibleElement);
    if ("lastFullyVisibleElement" in $$props)
      $$invalidate(9, lastFullyVisibleElement = $$new_props.lastFullyVisibleElement);
    if ("canSlideForward" in $$props)
      $$invalidate(10, canSlideForward = $$new_props.canSlideForward);
    if ("canSlideBack" in $$props)
      $$invalidate(11, canSlideBack = $$new_props.canSlideBack);
    if ("classes" in $$props)
      $$invalidate(2, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(2, classes = cx($$restProps.class, "scroll-snap"));
    if ($$self.$$.dirty & /*loop, firstVisibleElement, lastVisibleElement, container*/
    202) {
      $: {
        if (!loop)
          break $;
        if (!firstVisibleElement || !lastVisibleElement)
          break $;
        if (!firstVisibleElement.previousElementSibling) {
          const last = container.lastElementChild;
          if (last === lastVisibleElement)
            break $;
          const preLast = last.previousElementSibling;
          const shift = container.scrollWidth - (preLast.offsetLeft + preLast.offsetWidth);
          container.prepend(last), $$invalidate(1, container.scrollLeft += shift, container);
        }
        if (!lastVisibleElement.nextElementSibling) {
          const first = container.firstElementChild;
          if (first === firstVisibleElement)
            break $;
          const second = first.nextElementSibling;
          const shift = second.offsetLeft;
          container.append(first), $$invalidate(1, container.scrollLeft -= shift, container);
        }
      }
    }
    if ($$self.$$.dirty & /*container, firstFullyVisibleElement*/
    258) {
      $$invalidate(11, canSlideBack = container && container.firstElementChild !== firstFullyVisibleElement);
    }
    if ($$self.$$.dirty & /*container, lastFullyVisibleElement*/
    514) {
      $$invalidate(10, canSlideForward = container && container.lastElementChild !== lastFullyVisibleElement);
    }
    if ($$self.$$.dirty & /*canSlideBack, canSlideForward*/
    3072) {
      dispatch("change", {
        back: canSlideBack,
        forward: canSlideForward
      });
    }
  };
  return [
    as,
    container,
    classes,
    loop,
    slideBack,
    slideForward,
    firstVisibleElement,
    lastVisibleElement,
    firstFullyVisibleElement,
    lastFullyVisibleElement,
    canSlideForward,
    canSlideBack,
    $$scope,
    slots,
    svelte_element_binding
  ];
}
class ScrollSnap extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$v,
      create_fragment$v,
      safe_not_equal,
      {
        as: 0,
        loop: 3,
        slideBack: 4,
        slideForward: 5
      },
      add_css$s
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ScrollSnap",
      options,
      id: create_fragment$v.name
    });
  }
  get as() {
    throw new Error("<ScrollSnap>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set as(value) {
    throw new Error("<ScrollSnap>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get loop() {
    throw new Error("<ScrollSnap>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set loop(value) {
    throw new Error("<ScrollSnap>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get slideBack() {
    return this.$$.ctx[4];
  }
  set slideBack(value) {
    throw new Error("<ScrollSnap>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get slideForward() {
    return this.$$.ctx[5];
  }
  set slideForward(value) {
    throw new Error("<ScrollSnap>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$r = "src/lib/elements/Slider/Slider.svelte";
function add_css$r(target) {
  append_styles(target, "svelte-l1ew9a", "div.svelte-l1ew9a{position:relative\n}div.svelte-l1ew9a::before,div.svelte-l1ew9a::after{pointer-events:none;position:absolute;top:-1px;z-index:10;height:calc(100% + 2px);width:calc(48px + 2px);transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-content:'';content:var(--tw-content)\n}div.svelte-l1ew9a::before{left:-1px;background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#fff;--tw-gradient-to:rgb(255 255 255 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-stops:var(--tw-gradient-from), #fff 42%, var(--tw-gradient-to)\n}div.svelte-l1ew9a::after{right:-1px;background-image:linear-gradient(to left, var(--tw-gradient-stops));--tw-gradient-from:#fff;--tw-gradient-to:rgb(255 255 255 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-stops:var(--tw-gradient-from), #fff 42%, var(--tw-gradient-to)\n}div.svelte-l1ew9a::before,div.svelte-l1ew9a::after,div.svelte-l1ew9a>.back,div.svelte-l1ew9a>.forward{visibility:hidden\n}@media(min-width: 1024px){div.svelte-l1ew9a::before,div.svelte-l1ew9a::after,div.svelte-l1ew9a>.back,div.svelte-l1ew9a>.forward{visibility:visible\n      }}div.svelte-l1ew9a:not(:hover)::before,div.svelte-l1ew9a:not(:hover)::after,div.svelte-l1ew9a:not(:hover)>.back,div.svelte-l1ew9a:not(:hover)>.forward{opacity:0\n}div.svelte-l1ew9a:not(.back-visible)::before,div.svelte-l1ew9a:not(.forward-visible)::after,div.svelte-l1ew9a:not(.back-visible)>.back,div.svelte-l1ew9a:not(.forward-visible)>.forward{pointer-events:none;opacity:0\n}div.svelte-l1ew9a .back,div.svelte-l1ew9a .forward{position:absolute;top:50%;z-index:20;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}div.svelte-l1ew9a .back{left:0px\n}div.svelte-l1ew9a .forward{right:0px\n}");
}
function create_default_slot$g(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount2(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32768)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
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
    id: create_default_slot$g.name,
    type: "slot",
    source: "(20:2) <ScrollSnap     {as}     {loop}     {...$$restProps}     class={$$restProps.class}     bind:this={scroller}     on:change={(event) => {       canSlideBack = event.detail.back       canSlideForward = event.detail.forward     }}   >",
    ctx
  });
  return block;
}
function create_fragment$u(ctx) {
  let div;
  let scrollsnap;
  let t0;
  let iconbutton0;
  let t1;
  let iconbutton1;
  let div_class_value;
  let current;
  const scrollsnap_spread_levels = [
    { as: (
      /*as*/
      ctx[0]
    ) },
    { loop: (
      /*loop*/
      ctx[1]
    ) },
    /*$$restProps*/
    ctx[9],
    { class: (
      /*$$restProps*/
      ctx[9].class
    ) }
  ];
  let scrollsnap_props = {
    $$slots: { default: [create_default_slot$g] },
    $$scope: { ctx }
  };
  for (let i = 0; i < scrollsnap_spread_levels.length; i += 1) {
    scrollsnap_props = assign(scrollsnap_props, scrollsnap_spread_levels[i]);
  }
  scrollsnap = new ScrollSnap({ props: scrollsnap_props, $$inline: true });
  ctx[11](scrollsnap);
  scrollsnap.$on(
    "change",
    /*change_handler*/
    ctx[12]
  );
  iconbutton0 = new IconButton({
    props: {
      class: "back",
      icon: `${/*icon*/
      ctx[8]}-left`,
      size: (
        /*size*/
        ctx[2]
      ),
      disabled: !/*canSlideBack*/
      ctx[6]
    },
    $$inline: true
  });
  iconbutton0.$on(
    "click",
    /*click_handler*/
    ctx[13]
  );
  iconbutton1 = new IconButton({
    props: {
      class: "forward",
      icon: `${/*icon*/
      ctx[8]}-right`,
      size: (
        /*size*/
        ctx[2]
      ),
      disabled: !/*canSlideForward*/
      ctx[7]
    },
    $$inline: true
  });
  iconbutton1.$on(
    "click",
    /*click_handler_1*/
    ctx[14]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(scrollsnap.$$.fragment);
      t0 = space();
      create_component(iconbutton0.$$.fragment);
      t1 = space();
      create_component(iconbutton1.$$.fragment);
      attr_dev(div, "class", div_class_value = null_to_empty(
        /*wrapper*/
        ctx[3]
      ) + " svelte-l1ew9a");
      attr_dev(
        div,
        "data-qa",
        /*qa*/
        ctx[4]
      );
      toggle_class(
        div,
        "back-visible",
        /*canSlideBack*/
        ctx[6]
      );
      toggle_class(
        div,
        "forward-visible",
        /*canSlideForward*/
        ctx[7]
      );
      add_location(div, file$r, 13, 0, 400);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(scrollsnap, div, null);
      append_dev(div, t0);
      mount_component(iconbutton0, div, null);
      append_dev(div, t1);
      mount_component(iconbutton1, div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const scrollsnap_changes = dirty & /*as, loop, $$restProps*/
      515 ? get_spread_update(scrollsnap_spread_levels, [
        dirty & /*as*/
        1 && { as: (
          /*as*/
          ctx2[0]
        ) },
        dirty & /*loop*/
        2 && { loop: (
          /*loop*/
          ctx2[1]
        ) },
        dirty & /*$$restProps*/
        512 && get_spread_object(
          /*$$restProps*/
          ctx2[9]
        ),
        dirty & /*$$restProps*/
        512 && { class: (
          /*$$restProps*/
          ctx2[9].class
        ) }
      ]) : {};
      if (dirty & /*$$scope*/
      32768) {
        scrollsnap_changes.$$scope = { dirty, ctx: ctx2 };
      }
      scrollsnap.$set(scrollsnap_changes);
      const iconbutton0_changes = {};
      if (dirty & /*icon*/
      256)
        iconbutton0_changes.icon = `${/*icon*/
        ctx2[8]}-left`;
      if (dirty & /*size*/
      4)
        iconbutton0_changes.size = /*size*/
        ctx2[2];
      if (dirty & /*canSlideBack*/
      64)
        iconbutton0_changes.disabled = !/*canSlideBack*/
        ctx2[6];
      iconbutton0.$set(iconbutton0_changes);
      const iconbutton1_changes = {};
      if (dirty & /*icon*/
      256)
        iconbutton1_changes.icon = `${/*icon*/
        ctx2[8]}-right`;
      if (dirty & /*size*/
      4)
        iconbutton1_changes.size = /*size*/
        ctx2[2];
      if (dirty & /*canSlideForward*/
      128)
        iconbutton1_changes.disabled = !/*canSlideForward*/
        ctx2[7];
      iconbutton1.$set(iconbutton1_changes);
      if (!current || dirty & /*wrapper*/
      8 && div_class_value !== (div_class_value = null_to_empty(
        /*wrapper*/
        ctx2[3]
      ) + " svelte-l1ew9a")) {
        attr_dev(div, "class", div_class_value);
      }
      if (!current || dirty & /*qa*/
      16) {
        attr_dev(
          div,
          "data-qa",
          /*qa*/
          ctx2[4]
        );
      }
      if (!current || dirty & /*wrapper, canSlideBack*/
      72) {
        toggle_class(
          div,
          "back-visible",
          /*canSlideBack*/
          ctx2[6]
        );
      }
      if (!current || dirty & /*wrapper, canSlideForward*/
      136) {
        toggle_class(
          div,
          "forward-visible",
          /*canSlideForward*/
          ctx2[7]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(scrollsnap.$$.fragment, local);
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(scrollsnap.$$.fragment, local);
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[11](null);
      destroy_component(scrollsnap);
      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$u.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$u($$self, $$props, $$invalidate) {
  let icon;
  const omit_props_names = ["as", "loop", "size", "wrapper", "qa"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Slider", slots, ["default"]);
  let { as = void 0 } = $$props;
  let { loop = void 0 } = $$props;
  let { size = "base" } = $$props;
  let { wrapper = void 0 } = $$props;
  let { qa = void 0 } = $$props;
  let scroller;
  let canSlideBack = false;
  let canSlideForward = false;
  function scrollsnap_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      scroller = $$value;
      $$invalidate(5, scroller);
    });
  }
  const change_handler = (event) => {
    $$invalidate(6, canSlideBack = event.detail.back);
    $$invalidate(7, canSlideForward = event.detail.forward);
  };
  const click_handler = () => scroller.slideBack();
  const click_handler_1 = () => scroller.slideForward();
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("loop" in $$new_props)
      $$invalidate(1, loop = $$new_props.loop);
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("wrapper" in $$new_props)
      $$invalidate(3, wrapper = $$new_props.wrapper);
    if ("qa" in $$new_props)
      $$invalidate(4, qa = $$new_props.qa);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    IconButton,
    ScrollSnap,
    as,
    loop,
    size,
    wrapper,
    qa,
    scroller,
    canSlideBack,
    canSlideForward,
    icon
  });
  $$self.$inject_state = ($$new_props) => {
    if ("as" in $$props)
      $$invalidate(0, as = $$new_props.as);
    if ("loop" in $$props)
      $$invalidate(1, loop = $$new_props.loop);
    if ("size" in $$props)
      $$invalidate(2, size = $$new_props.size);
    if ("wrapper" in $$props)
      $$invalidate(3, wrapper = $$new_props.wrapper);
    if ("qa" in $$props)
      $$invalidate(4, qa = $$new_props.qa);
    if ("scroller" in $$props)
      $$invalidate(5, scroller = $$new_props.scroller);
    if ("canSlideBack" in $$props)
      $$invalidate(6, canSlideBack = $$new_props.canSlideBack);
    if ("canSlideForward" in $$props)
      $$invalidate(7, canSlideForward = $$new_props.canSlideForward);
    if ("icon" in $$props)
      $$invalidate(8, icon = $$new_props.icon);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*size*/
    4) {
      $$invalidate(8, icon = ["sm", "base"].includes(size) ? "chevron-small" : "chevron");
    }
  };
  return [
    as,
    loop,
    size,
    wrapper,
    qa,
    scroller,
    canSlideBack,
    canSlideForward,
    icon,
    $$restProps,
    slots,
    scrollsnap_binding,
    change_handler,
    click_handler,
    click_handler_1,
    $$scope
  ];
}
class Slider extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$u,
      create_fragment$u,
      safe_not_equal,
      {
        as: 0,
        loop: 1,
        size: 2,
        wrapper: 3,
        qa: 4
      },
      add_css$r
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Slider",
      options,
      id: create_fragment$u.name
    });
  }
  get as() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set as(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get loop() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set loop(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get wrapper() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set wrapper(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$q = "src/lib/elements/Swatch/Swatch.svelte";
function add_css$q(target) {
  append_styles(target, "svelte-bkux3l", "button.svelte-bkux3l{display:inline-flex;height:32px;width:32px;align-items:center;justify-content:center;border-radius:9999px;color:var(--tint-text-light)\n}");
}
function create_if_block$h(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: { variant: "checkmark" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$h.name,
    type: "if",
    source: "(9:2) {#if active}",
    ctx
  });
  return block;
}
function create_fragment$t(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*active*/
    ctx[0] && create_if_block$h(ctx)
  );
  let button_levels = [
    /*$$restProps*/
    ctx[2],
    { style: (
      /*style*/
      ctx[1]
    ) }
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  const block = {
    c: function create() {
      button = element("button");
      if (if_block)
        if_block.c();
      set_attributes(button, button_data);
      toggle_class(button, "svelte-bkux3l", true);
      add_location(button, file$q, 7, 0, 198);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, button, anchor);
      if (if_block)
        if_block.m(button, null);
      if (button.autofocus)
        button.focus();
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[4],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*active*/
        ctx2[0]
      ) {
        if (if_block) {
          if (dirty & /*active*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$h(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(button, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        dirty & /*$$restProps*/
        4 && /*$$restProps*/
        ctx2[2],
        (!current || dirty & /*style*/
        2) && { style: (
          /*style*/
          ctx2[1]
        ) }
      ]));
      toggle_class(button, "svelte-bkux3l", true);
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
        detach_dev(button);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$t.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$t($$self, $$props, $$invalidate) {
  let style;
  const omit_props_names = ["color", "active"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Swatch", slots, []);
  let { color } = $$props;
  let { active = false } = $$props;
  $$self.$$.on_mount.push(function() {
    if (color === void 0 && !("color" in $$props || $$self.$$.bound[$$self.$$.props["color"]])) {
      console.warn("<Swatch> was created without expected prop 'color'");
    }
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("color" in $$new_props)
      $$invalidate(3, color = $$new_props.color);
    if ("active" in $$new_props)
      $$invalidate(0, active = $$new_props.active);
  };
  $$self.$capture_state = () => ({ Icon, cx, color, active, style });
  $$self.$inject_state = ($$new_props) => {
    if ("color" in $$props)
      $$invalidate(3, color = $$new_props.color);
    if ("active" in $$props)
      $$invalidate(0, active = $$new_props.active);
    if ("style" in $$props)
      $$invalidate(1, style = $$new_props.style);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(1, style = cx(`background-color: ${color};`, $$restProps.style));
  };
  return [active, style, $$restProps, color, click_handler];
}
class Swatch extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$t, create_fragment$t, safe_not_equal, { color: 3, active: 0 }, add_css$q);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Swatch",
      options,
      id: create_fragment$t.name
    });
  }
  get color() {
    throw new Error("<Swatch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<Swatch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<Swatch>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<Swatch>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const key = Symbol("selected_tab");
const setSelected = (value) => setContext(key, value);
const getSelected = () => getContext(key);
function add_css$p(target) {
  append_styles(target, "svelte-dgudki", "ul.tint-tabs{max-width:100%;gap:32px;--tw-shadow:inset 0 -1px #dcdcdd;--tw-shadow-colored:inset 0 -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}");
}
function create_default_slot$f(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount2(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
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
    id: create_default_slot$f.name,
    type: "slot",
    source: '(16:0) <Slider as=\\"ul\\" size=\\"sm\\" role=\\"tablist\\" {...$$restProps} class={classes} {qa}>',
    ctx
  });
  return block;
}
function create_fragment$s(ctx) {
  let slider;
  let current;
  const slider_spread_levels = [
    { as: "ul" },
    { size: "sm" },
    { role: "tablist" },
    /*$$restProps*/
    ctx[3],
    { class: (
      /*classes*/
      ctx[1]
    ) },
    { qa: (
      /*qa*/
      ctx[0]
    ) }
  ];
  let slider_props = {
    $$slots: { default: [create_default_slot$f] },
    $$scope: { ctx }
  };
  for (let i = 0; i < slider_spread_levels.length; i += 1) {
    slider_props = assign(slider_props, slider_spread_levels[i]);
  }
  slider = new Slider({ props: slider_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(slider.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(slider, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const slider_changes = dirty & /*$$restProps, classes, qa*/
      11 ? get_spread_update(slider_spread_levels, [
        slider_spread_levels[0],
        slider_spread_levels[1],
        slider_spread_levels[2],
        dirty & /*$$restProps*/
        8 && get_spread_object(
          /*$$restProps*/
          ctx2[3]
        ),
        dirty & /*classes*/
        2 && { class: (
          /*classes*/
          ctx2[1]
        ) },
        dirty & /*qa*/
        1 && { qa: (
          /*qa*/
          ctx2[0]
        ) }
      ]) : {};
      if (dirty & /*$$scope*/
      128) {
        slider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      slider.$set(slider_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(slider, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$s.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$s($$self, $$props, $$invalidate) {
  let classes;
  const omit_props_names = ["value", "qa"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selected;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Tabs", slots, ["default"]);
  let { value } = $$props;
  let { qa = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const selected2 = setSelected(writable(value));
  validate_store(selected2, "selected");
  component_subscribe($$self, selected2, (value2) => $$invalidate(5, $selected = value2));
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Tabs> was created without expected prop 'value'");
    }
  });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(4, value = $$new_props.value);
    if ("qa" in $$new_props)
      $$invalidate(0, qa = $$new_props.qa);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    writable,
    Slider,
    cx,
    setSelected,
    value,
    qa,
    dispatch,
    selected: selected2,
    classes,
    $selected
  });
  $$self.$inject_state = ($$new_props) => {
    if ("value" in $$props)
      $$invalidate(4, value = $$new_props.value);
    if ("qa" in $$props)
      $$invalidate(0, qa = $$new_props.qa);
    if ("classes" in $$props)
      $$invalidate(1, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(1, classes = cx("tint-tabs", $$restProps.class));
    if ($$self.$$.dirty & /*value*/
    16) {
      set_store_value(selected2, $selected = value, $selected);
    }
    if ($$self.$$.dirty & /*$selected, value*/
    48) {
      $selected && $selected !== value && dispatch("change", $selected);
    }
  };
  return [qa, classes, selected2, $$restProps, value, $selected, slots, $$scope];
}
class Tabs extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$s, create_fragment$s, safe_not_equal, { value: 4, qa: 0 }, add_css$p);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Tabs",
      options,
      id: create_fragment$s.name
    });
  }
  get value() {
    throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<Tabs>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<Tabs>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$p = "src/lib/elements/Tabs/Tab.svelte";
function add_css$o(target) {
  append_styles(target, "svelte-1uww59x", "button.svelte-1uww59x{display:flex;align-items:center;border-top-width:2px;border-bottom-width:2px;border-color:transparent;padding-top:calc(8px - 2px);padding-bottom:calc(8px - 2px);font-size:14px;line-height:20px;font-weight:600;opacity:0.6;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media(min-width: 768px){button.svelte-1uww59x{font-size:16px;line-height:24px}}button.svelte-1uww59x:hover{opacity:0.8}button.svelte-1uww59x:active{opacity:0.9}button.svelte-1uww59x:disabled{opacity:0.3}button.selected.svelte-1uww59x{border-bottom-color:currentColor;opacity:1}");
}
function create_fragment$r(ctx) {
  let li;
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  const block = {
    c: function create() {
      li = element("li");
      button = element("button");
      if (default_slot)
        default_slot.c();
      attr_dev(button, "role", "tab");
      attr_dev(
        button,
        "aria-selected",
        /*isSelected*/
        ctx[3]
      );
      attr_dev(
        button,
        "data-qa",
        /*qa*/
        ctx[1]
      );
      attr_dev(button, "class", "svelte-1uww59x");
      toggle_class(
        button,
        "selected",
        /*isSelected*/
        ctx[3]
      );
      add_location(button, file$p, 8, 2, 191);
      add_location(li, file$p, 7, 0, 184);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, button);
      if (default_slot) {
        default_slot.m(button, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[7],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*isSelected*/
      8) {
        attr_dev(
          button,
          "aria-selected",
          /*isSelected*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*qa*/
      2) {
        attr_dev(
          button,
          "data-qa",
          /*qa*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*isSelected*/
      8) {
        toggle_class(
          button,
          "selected",
          /*isSelected*/
          ctx2[3]
        );
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
      if (detaching)
        detach_dev(li);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$r.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$r($$self, $$props, $$invalidate) {
  let isSelected;
  let $selected;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Tab", slots, ["default"]);
  let { value } = $$props;
  let { qa = void 0 } = $$props;
  const selected2 = getSelected();
  validate_store(selected2, "selected");
  component_subscribe($$self, selected2, (value2) => $$invalidate(2, $selected = value2));
  $$self.$$.on_mount.push(function() {
    if (value === void 0 && !("value" in $$props || $$self.$$.bound[$$self.$$.props["value"]])) {
      console.warn("<Tab> was created without expected prop 'value'");
    }
  });
  const writable_props = ["value", "qa"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Tab> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => set_store_value(selected2, $selected = value, $selected);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("qa" in $$props2)
      $$invalidate(1, qa = $$props2.qa);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    getSelected,
    value,
    qa,
    selected: selected2,
    isSelected,
    $selected
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("qa" in $$props2)
      $$invalidate(1, qa = $$props2.qa);
    if ("isSelected" in $$props2)
      $$invalidate(3, isSelected = $$props2.isSelected);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$selected, value*/
    5) {
      $$invalidate(3, isSelected = $selected === value);
    }
  };
  return [value, qa, $selected, isSelected, selected2, $$scope, slots, click_handler];
}
class Tab extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$r, create_fragment$r, safe_not_equal, { value: 0, qa: 1 }, add_css$o);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Tab",
      options,
      id: create_fragment$r.name
    });
  }
  get value() {
    throw new Error("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$o = "src/lib/elements/Range/Range.svelte";
function add_css$n(target) {
  append_styles(target, "svelte-hz4rec", 'div.svelte-hz4rec{position:relative;display:flex;height:44px;width:100%;align-items:center;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;padding-top:12px;padding-bottom:12px;padding-left:16px;padding-right:16px\n}.hide.svelte-hz4rec{pointer-events:none;--tw-blur:blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\n}.hint.svelte-hz4rec{position:absolute;bottom:36px;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;background-color:var(--tint-text-dark);padding-left:16px;padding-right:16px;padding-top:4px;padding-bottom:4px;font-size:14px;line-height:20px;color:var(--tint-text-light)\n}span.svelte-hz4rec{margin-left:8px;margin-right:8px;font-size:12px;line-height:16px;color:var(--tint-text-light)\n}input.svelte-hz4rec{width:100%;cursor:pointer;-webkit-appearance:none;appearance:none;border-radius:9999px;outline:2px solid transparent;outline-offset:2px\n}input[type="range"].svelte-hz4rec::-webkit-slider-runnable-track{height:4px;-webkit-appearance:none;appearance:none;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;background:linear-gradient(90deg, #ffffff var(--p), rgba(0, 0, 0, 0.25) var(--p))\n}input[type="range"].svelte-hz4rec::-webkit-slider-thumb{margin-top:-8px;height:20px;width:20px;-webkit-appearance:none;appearance:none;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))\n}');
}
function create_if_block$g(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*hintText*/
        ctx[9]
      );
      set_style(
        span,
        "left",
        /*left*/
        ctx[10] + "px"
      );
      attr_dev(span, "class", "hint svelte-hz4rec");
      add_location(span, file$o, 18, 4, 535);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*hintText*/
      512)
        set_data_dev(
          t,
          /*hintText*/
          ctx2[9]
        );
      if (dirty & /*left*/
      1024) {
        set_style(
          span,
          "left",
          /*left*/
          ctx2[10] + "px"
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$g.name,
    type: "if",
    source: "(18:2) {#if showHint}",
    ctx
  });
  return block;
}
function create_fragment$q(ctx) {
  let div;
  let span0;
  let t0;
  let t1;
  let t2;
  let input;
  let t3;
  let span1;
  let t4;
  let mounted;
  let dispose;
  let if_block = (
    /*showHint*/
    ctx[8] && create_if_block$g(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      span0 = element("span");
      t0 = text(
        /*startLabel*/
        ctx[1]
      );
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      input = element("input");
      t3 = space();
      span1 = element("span");
      t4 = text(
        /*endLabel*/
        ctx[2]
      );
      attr_dev(span0, "class", "svelte-hz4rec");
      add_location(span0, file$o, 16, 2, 488);
      attr_dev(input, "class", "input-range svelte-hz4rec");
      attr_dev(input, "type", "range");
      attr_dev(input, "step", "1");
      attr_dev(
        input,
        "min",
        /*min*/
        ctx[3]
      );
      attr_dev(
        input,
        "max",
        /*max*/
        ctx[4]
      );
      set_style(
        input,
        "--p",
        /*percent*/
        ctx[11] + "%"
      );
      add_location(input, file$o, 20, 2, 605);
      attr_dev(span1, "class", "svelte-hz4rec");
      add_location(span1, file$o, 33, 2, 892);
      attr_dev(
        div,
        "data-qa",
        /*qa*/
        ctx[6]
      );
      attr_dev(div, "class", "svelte-hz4rec");
      toggle_class(
        div,
        "hide",
        /*hide*/
        ctx[5]
      );
      add_location(div, file$o, 15, 0, 456);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, span0);
      append_dev(span0, t0);
      append_dev(div, t1);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t2);
      append_dev(div, input);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      ctx[14](input);
      append_dev(div, t3);
      append_dev(div, span1);
      append_dev(span1, t4);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "change",
            /*input_change_input_handler*/
            ctx[13]
          ),
          listen_dev(
            input,
            "input",
            /*input_change_input_handler*/
            ctx[13]
          ),
          listen_dev(
            input,
            "mousedown",
            /*mousedown_handler*/
            ctx[15],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "mouseup",
            /*mouseup_handler*/
            ctx[16],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "mouseout",
            /*mouseout_handler*/
            ctx[17],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*startLabel*/
      2)
        set_data_dev(
          t0,
          /*startLabel*/
          ctx2[1]
        );
      if (
        /*showHint*/
        ctx2[8]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$g(ctx2);
          if_block.c();
          if_block.m(div, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*min*/
      8) {
        attr_dev(
          input,
          "min",
          /*min*/
          ctx2[3]
        );
      }
      if (dirty & /*max*/
      16) {
        attr_dev(
          input,
          "max",
          /*max*/
          ctx2[4]
        );
      }
      if (dirty & /*percent*/
      2048) {
        set_style(
          input,
          "--p",
          /*percent*/
          ctx2[11] + "%"
        );
      }
      if (dirty & /*value*/
      1) {
        set_input_value(
          input,
          /*value*/
          ctx2[0]
        );
      }
      if (dirty & /*endLabel*/
      4)
        set_data_dev(
          t4,
          /*endLabel*/
          ctx2[2]
        );
      if (dirty & /*qa*/
      64) {
        attr_dev(
          div,
          "data-qa",
          /*qa*/
          ctx2[6]
        );
      }
      if (dirty & /*hide*/
      32) {
        toggle_class(
          div,
          "hide",
          /*hide*/
          ctx2[5]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      ctx[14](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$q.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$q($$self, $$props, $$invalidate) {
  let percent;
  let left;
  let hintText;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Range", slots, []);
  let { startLabel = "" } = $$props;
  let { endLabel = "" } = $$props;
  let { unit = "" } = $$props;
  let { min = 0 } = $$props;
  let { max = 0 } = $$props;
  let { value = 0 } = $$props;
  let { hide = false } = $$props;
  let { qa = void 0 } = $$props;
  let showHint = false;
  let inputElement;
  const writable_props = ["startLabel", "endLabel", "unit", "min", "max", "value", "hide", "qa"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Range> was created with unknown prop '${key2}'`);
  });
  function input_change_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputElement = $$value;
      $$invalidate(7, inputElement);
    });
  }
  const mousedown_handler = () => $$invalidate(8, showHint = true);
  const mouseup_handler = () => $$invalidate(8, showHint = false);
  const mouseout_handler = () => $$invalidate(8, showHint = false);
  $$self.$$set = ($$props2) => {
    if ("startLabel" in $$props2)
      $$invalidate(1, startLabel = $$props2.startLabel);
    if ("endLabel" in $$props2)
      $$invalidate(2, endLabel = $$props2.endLabel);
    if ("unit" in $$props2)
      $$invalidate(12, unit = $$props2.unit);
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(4, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("hide" in $$props2)
      $$invalidate(5, hide = $$props2.hide);
    if ("qa" in $$props2)
      $$invalidate(6, qa = $$props2.qa);
  };
  $$self.$capture_state = () => ({
    startLabel,
    endLabel,
    unit,
    min,
    max,
    value,
    hide,
    qa,
    showHint,
    inputElement,
    hintText,
    left,
    percent
  });
  $$self.$inject_state = ($$props2) => {
    if ("startLabel" in $$props2)
      $$invalidate(1, startLabel = $$props2.startLabel);
    if ("endLabel" in $$props2)
      $$invalidate(2, endLabel = $$props2.endLabel);
    if ("unit" in $$props2)
      $$invalidate(12, unit = $$props2.unit);
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(4, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("hide" in $$props2)
      $$invalidate(5, hide = $$props2.hide);
    if ("qa" in $$props2)
      $$invalidate(6, qa = $$props2.qa);
    if ("showHint" in $$props2)
      $$invalidate(8, showHint = $$props2.showHint);
    if ("inputElement" in $$props2)
      $$invalidate(7, inputElement = $$props2.inputElement);
    if ("hintText" in $$props2)
      $$invalidate(9, hintText = $$props2.hintText);
    if ("left" in $$props2)
      $$invalidate(10, left = $$props2.left);
    if ("percent" in $$props2)
      $$invalidate(11, percent = $$props2.percent);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, max*/
    17) {
      $$invalidate(11, percent = value / max * 100);
    }
    if ($$self.$$.dirty & /*inputElement, value, max*/
    145) {
      $$invalidate(10, left = inputElement ? inputElement.offsetLeft + inputElement.offsetWidth * value / max : 0);
    }
    if ($$self.$$.dirty & /*value, startLabel, unit*/
    4099) {
      $$invalidate(9, hintText = value === 0 ? startLabel : `${value} ${unit}`);
    }
  };
  return [
    value,
    startLabel,
    endLabel,
    min,
    max,
    hide,
    qa,
    inputElement,
    showHint,
    hintText,
    left,
    percent,
    unit,
    input_change_input_handler,
    input_binding,
    mousedown_handler,
    mouseup_handler,
    mouseout_handler
  ];
}
class Range extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$q,
      create_fragment$q,
      safe_not_equal,
      {
        startLabel: 1,
        endLabel: 2,
        unit: 12,
        min: 3,
        max: 4,
        value: 0,
        hide: 5,
        qa: 6
      },
      add_css$n
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Range",
      options,
      id: create_fragment$q.name
    });
  }
  get startLabel() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set startLabel(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get endLabel() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set endLabel(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get unit() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set unit(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get hide() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set hide(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<Range>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<Range>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const portal_map = /* @__PURE__ */ new Map();
const createPortal = (node, id = "default") => {
  const key2 = `$$portal.${id}`;
  if (portal_map.has(key2))
    throw `duplicate portal key "${id}"`;
  else
    portal_map.set(key2, node);
  return { destroy: portal_map.delete.bind(portal_map, key2) };
};
const mount = (node, key2) => {
  if (!portal_map.has(key2))
    throw `unknown portal ${key2}`;
  const host = portal_map.get(key2);
  host.insertBefore(node, null);
  return () => host.contains(node) && host.removeChild(node);
};
const portal = (node, id = "default") => {
  let destroy;
  const key2 = `$$portal.${id}`;
  if (!portal_map.has(key2))
    tick().then(() => {
      destroy = mount(node, key2);
    });
  else
    destroy = mount(node, key2);
  return { destroy: () => destroy == null ? void 0 : destroy() };
};
const file$n = "src/lib/components/Cart/CartLayout.svelte";
function add_css$m(target) {
  append_styles(target, "svelte-96zeun", "section.svelte-96zeun.svelte-96zeun{display:flex;flex-direction:column\n}section.svelte-96zeun>*{min-height:0px\n}section.svelte-96zeun>div.svelte-96zeun{display:flex;min-height:48px\n}.details.svelte-96zeun.svelte-96zeun{margin-bottom:-8px;margin-top:-12px;display:flex;flex-grow:1;flex-direction:column\n}@media(min-width: 768px){.details.svelte-96zeun.svelte-96zeun{margin-bottom:0px;margin-top:-16px;max-width:358px\n    }}.tint-cart-fab{position:absolute !important;bottom:12px !important;right:12px !important;padding-top:6px !important;padding-bottom:6px !important\n}@media(min-width: 768px){.tint-cart-fab{right:20px !important\n    }}.tint-cart-fab > span{display:flex;align-items:center;gap:4px\n}");
}
const get_button_slot_changes_1 = (dirty) => ({});
const get_button_slot_context_1 = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
const get_default_slot_changes_1 = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_default_slot_context_1 = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
const get_title_slot_changes_1 = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_title_slot_context_1 = (ctx) => ({ slot: "title", close: (
  /*close*/
  ctx[18]
) });
const get_tint_disclosure_button_slot_changes_1 = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_tint_disclosure_button_slot_context_1 = (ctx) => ({ slot: "button", close: (
  /*close*/
  ctx[18]
) });
const get_button_slot_changes = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_button_slot_context = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
const get_default_slot_changes = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_default_slot_context = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
const get_tint_disclosure_button_slot_changes = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_tint_disclosure_button_slot_context = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
const get_title_slot_changes$1 = (dirty) => ({ close: dirty & /*close*/
262144 });
const get_title_slot_context$1 = (ctx) => ({ close: (
  /*close*/
  ctx[18]
) });
function create_else_block$5(ctx) {
  let section;
  let disclosure;
  let updating_open;
  let t;
  let section_class_value;
  let current;
  function disclosure_open_binding(value) {
    ctx[16](value);
  }
  let disclosure_props = {
    dir: "up",
    disabled: (
      /*disabled*/
      ctx[2]
    ),
    $$slots: {
      button: [
        create_button_slot$1,
        ({ close }) => ({ 18: close }),
        ({ close }) => close ? 262144 : 0
      ],
      title: [
        create_title_slot$1,
        ({ close }) => ({ 18: close }),
        ({ close }) => close ? 262144 : 0
      ],
      default: [
        create_default_slot_2$2,
        ({ close }) => ({ 18: close }),
        ({ close }) => close ? 262144 : 0
      ]
    },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[0] !== void 0
  ) {
    disclosure_props.open = /*open*/
    ctx[0];
  }
  disclosure = new Disclosure({ props: disclosure_props, $$inline: true });
  binding_callbacks.push(() => bind(disclosure, "open", disclosure_open_binding));
  const button_slot_template = (
    /*#slots*/
    ctx[13].button
  );
  const button_slot = create_slot(
    button_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_button_slot_context_1
  );
  const block = {
    c: function create() {
      section = element("section");
      create_component(disclosure.$$.fragment);
      t = space();
      if (button_slot)
        button_slot.c();
      attr_dev(section, "class", section_class_value = null_to_empty(cx(
        /*$$restProps*/
        ctx[9].class,
        "disclosure"
      )) + " svelte-96zeun");
      add_location(section, file$n, 49, 2, 1320);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      mount_component(disclosure, section, null);
      append_dev(section, t);
      if (button_slot) {
        button_slot.m(section, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      const disclosure_changes = {};
      if (dirty & /*disabled*/
      4)
        disclosure_changes.disabled = /*disabled*/
        ctx2[2];
      if (dirty & /*$$scope, close*/
      393216) {
        disclosure_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty & /*open*/
      1) {
        updating_open = true;
        disclosure_changes.open = /*open*/
        ctx2[0];
        add_flush_callback(() => updating_open = false);
      }
      disclosure.$set(disclosure_changes);
      if (button_slot) {
        if (button_slot.p && (!current || dirty & /*$$scope*/
        131072)) {
          update_slot_base(
            button_slot,
            button_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              button_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_button_slot_changes_1
            ),
            get_button_slot_context_1
          );
        }
      }
      if (!current || dirty & /*$$restProps*/
      512 && section_class_value !== (section_class_value = null_to_empty(cx(
        /*$$restProps*/
        ctx2[9].class,
        "disclosure"
      )) + " svelte-96zeun")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(disclosure.$$.fragment, local);
      transition_in(button_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(disclosure.$$.fragment, local);
      transition_out(button_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(disclosure);
      if (button_slot)
        button_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$5.name,
    type: "else",
    source: "(49:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block$f(ctx) {
  let button;
  let t;
  let details;
  let current;
  let button_props = {
    qa: "tint-cart-applied",
    class: cx(
      "tint-cart-fab",
      /*disabled*/
      (ctx[2] || /*isSkinCare*/
      ctx[5]) && "hidden"
    ),
    disabled: (
      /*disabled*/
      ctx[2]
    ),
    variant: (
      /*detailsVisible*/
      ctx[4] ? "black" : "white"
    ),
    count: (
      /*count*/
      ctx[1]
    ),
    size: "sm",
    $$slots: { default: [create_default_slot_1$7] },
    $$scope: { ctx }
  };
  button = new Button({ props: button_props, $$inline: true });
  ctx[14](button);
  details = new Details({
    props: {
      anchor: (
        /*detailsAnchor*/
        ctx[3]
      ),
      offset: [-4, 4],
      placement: "bottom-left-corner",
      closeBtn: false,
      $$slots: {
        default: [
          create_default_slot$e,
          ({ close }) => ({ 18: close }),
          ({ close }) => close ? 262144 : 0
        ]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  details.$on(
    "open",
    /*open_handler*/
    ctx[15]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
      t = space();
      create_component(details.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(button, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(details, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*disabled, isSkinCare*/
      36)
        button_changes.class = cx(
          "tint-cart-fab",
          /*disabled*/
          (ctx2[2] || /*isSkinCare*/
          ctx2[5]) && "hidden"
        );
      if (dirty & /*disabled*/
      4)
        button_changes.disabled = /*disabled*/
        ctx2[2];
      if (dirty & /*detailsVisible*/
      16)
        button_changes.variant = /*detailsVisible*/
        ctx2[4] ? "black" : "white";
      if (dirty & /*count*/
      2)
        button_changes.count = /*count*/
        ctx2[1];
      if (dirty & /*$$scope, $language*/
      131200) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const details_changes = {};
      if (dirty & /*detailsAnchor*/
      8)
        details_changes.anchor = /*detailsAnchor*/
        ctx2[3];
      if (dirty & /*$$scope, $$restProps, close*/
      393728) {
        details_changes.$$scope = { dirty, ctx: ctx2 };
      }
      details.$set(details_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(details.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(details.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      ctx[14](null);
      destroy_component(button, detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(details, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$f.name,
    type: "if",
    source: "(15:0) {#if asDetails}",
    ctx
  });
  return block;
}
function create_default_slot_2$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_default_slot_context_1
  );
  const block = {
    c: function create() {
      if (default_slot)
        default_slot.c();
    },
    m: function mount2(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_default_slot_changes_1
            ),
            get_default_slot_context_1
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
    id: create_default_slot_2$2.name,
    type: "slot",
    source: '(51:4) <Disclosure dir=\\"up\\" bind:open {disabled} let:close>',
    ctx
  });
  return block;
}
function create_title_slot$1(ctx) {
  let current;
  const title_slot_template = (
    /*#slots*/
    ctx[13].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_title_slot_context_1
  );
  const block = {
    c: function create() {
      if (title_slot)
        title_slot.c();
    },
    m: function mount2(target, anchor) {
      if (title_slot) {
        title_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_title_slot_changes_1
            ),
            get_title_slot_context_1
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (title_slot)
        title_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_title_slot$1.name,
    type: "slot",
    source: "(52:6) ",
    ctx
  });
  return block;
}
function create_button_slot$1(ctx) {
  let current;
  const tint_disclosure_button_slot_template = (
    /*#slots*/
    ctx[13]["tint-disclosure-button"]
  );
  const tint_disclosure_button_slot = create_slot(
    tint_disclosure_button_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_tint_disclosure_button_slot_context_1
  );
  const block = {
    c: function create() {
      if (tint_disclosure_button_slot)
        tint_disclosure_button_slot.c();
    },
    m: function mount2(target, anchor) {
      if (tint_disclosure_button_slot) {
        tint_disclosure_button_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (tint_disclosure_button_slot) {
        if (tint_disclosure_button_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            tint_disclosure_button_slot,
            tint_disclosure_button_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              tint_disclosure_button_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_tint_disclosure_button_slot_changes_1
            ),
            get_tint_disclosure_button_slot_context_1
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(tint_disclosure_button_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tint_disclosure_button_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (tint_disclosure_button_slot)
        tint_disclosure_button_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_button_slot$1.name,
    type: "slot",
    source: "(53:6) ",
    ctx
  });
  return block;
}
function create_default_slot_1$7(ctx) {
  let icon;
  let t0;
  let span;
  let t1_value = (
    /*$language*/
    ctx[7].applied + ""
  );
  let t1;
  let current;
  icon = new Icon({
    props: { variant: "applied" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      add_location(span, file$n, 25, 4, 788);
    },
    m: function mount2(target, anchor) {
      mount_component(icon, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, span, anchor);
      append_dev(span, t1);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & /*$language*/
      128) && t1_value !== (t1_value = /*$language*/
      ctx2[7].applied + ""))
        set_data_dev(t1, t1_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$7.name,
    type: "slot",
    source: '(16:2) <Button     qa=\\"tint-cart-applied\\"     class={cx(\\"tint-cart-fab\\", (disabled || isSkinCare) && \\"hidden\\")}     {disabled}     bind:this={detailsAnchor}     variant={detailsVisible ? \\"black\\" : \\"white\\"}     {count}     size=\\"sm\\"   >',
    ctx
  });
  return block;
}
function create_default_slot$e(ctx) {
  let section;
  let div;
  let t0;
  let t1;
  let t2;
  let section_class_value;
  let current;
  const title_slot_template = (
    /*#slots*/
    ctx[13].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_title_slot_context$1
  );
  const tint_disclosure_button_slot_template = (
    /*#slots*/
    ctx[13]["tint-disclosure-button"]
  );
  const tint_disclosure_button_slot = create_slot(
    tint_disclosure_button_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_tint_disclosure_button_slot_context
  );
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_default_slot_context
  );
  const button_slot_template = (
    /*#slots*/
    ctx[13].button
  );
  const button_slot = create_slot(
    button_slot_template,
    ctx,
    /*$$scope*/
    ctx[17],
    get_button_slot_context
  );
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      if (title_slot)
        title_slot.c();
      t0 = space();
      if (tint_disclosure_button_slot)
        tint_disclosure_button_slot.c();
      t1 = space();
      if (default_slot)
        default_slot.c();
      t2 = space();
      if (button_slot)
        button_slot.c();
      attr_dev(div, "class", "svelte-96zeun");
      add_location(div, file$n, 40, 6, 1134);
      attr_dev(section, "class", section_class_value = null_to_empty(cx(
        /*$$restProps*/
        ctx[9].class,
        "details"
      )) + " svelte-96zeun");
      add_location(section, file$n, 39, 4, 1077);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      if (title_slot) {
        title_slot.m(div, null);
      }
      append_dev(div, t0);
      if (tint_disclosure_button_slot) {
        tint_disclosure_button_slot.m(div, null);
      }
      append_dev(section, t1);
      if (default_slot) {
        default_slot.m(section, null);
      }
      append_dev(section, t2);
      if (button_slot) {
        button_slot.m(section, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_title_slot_changes$1
            ),
            get_title_slot_context$1
          );
        }
      }
      if (tint_disclosure_button_slot) {
        if (tint_disclosure_button_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            tint_disclosure_button_slot,
            tint_disclosure_button_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              tint_disclosure_button_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_tint_disclosure_button_slot_changes
            ),
            get_tint_disclosure_button_slot_context
          );
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (button_slot) {
        if (button_slot.p && (!current || dirty & /*$$scope, close*/
        393216)) {
          update_slot_base(
            button_slot,
            button_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[17],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[17]
            ) : get_slot_changes(
              button_slot_template,
              /*$$scope*/
              ctx2[17],
              dirty,
              get_button_slot_changes
            ),
            get_button_slot_context
          );
        }
      }
      if (!current || dirty & /*$$restProps*/
      512 && section_class_value !== (section_class_value = null_to_empty(cx(
        /*$$restProps*/
        ctx2[9].class,
        "details"
      )) + " svelte-96zeun")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(tint_disclosure_button_slot, local);
      transition_in(default_slot, local);
      transition_in(button_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot, local);
      transition_out(tint_disclosure_button_slot, local);
      transition_out(default_slot, local);
      transition_out(button_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (title_slot)
        title_slot.d(detaching);
      if (tint_disclosure_button_slot)
        tint_disclosure_button_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      if (button_slot)
        button_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$e.name,
    type: "slot",
    source: '(28:2) <Details     anchor={detailsAnchor}     offset={[-4, 4]}     placement=\\"bottom-left-corner\\"     let:close     closeBtn={false}     on:open={({ detail }) => {       if (detail !== null) {         detailsVisible = detail       }     }}   >',
    ctx
  });
  return block;
}
function create_fragment$p(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$f, create_else_block$5];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*asDetails*/
      ctx2[6]
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
    m: function mount2(target, anchor) {
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
    id: create_fragment$p.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$p($$self, $$props, $$invalidate) {
  let asDetails;
  let isSkinCare;
  const omit_props_names = ["breakpoint", "count", "disabled", "open"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $routerPath;
  let $isLgViewport;
  let $language;
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(11, $routerPath = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(7, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CartLayout", slots, ["title", "tint-disclosure-button", "default", "button"]);
  let { breakpoint = 1024 } = $$props;
  let { count } = $$props;
  let { disabled = false } = $$props;
  let { open = false } = $$props;
  let detailsAnchor;
  const isLgViewport = media(`(min-width: ${breakpoint}px)`);
  validate_store(isLgViewport, "isLgViewport");
  component_subscribe($$self, isLgViewport, (value) => $$invalidate(12, $isLgViewport = value));
  let detailsVisible = false;
  $$self.$$.on_mount.push(function() {
    if (count === void 0 && !("count" in $$props || $$self.$$.bound[$$self.$$.props["count"]])) {
      console.warn("<CartLayout> was created without expected prop 'count'");
    }
  });
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      detailsAnchor = $$value;
      $$invalidate(3, detailsAnchor);
    });
  }
  const open_handler = ({ detail }) => {
    if (detail !== null) {
      $$invalidate(4, detailsVisible = detail);
    }
  };
  function disclosure_open_binding(value) {
    open = value;
    $$invalidate(0, open);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("breakpoint" in $$new_props)
      $$invalidate(10, breakpoint = $$new_props.breakpoint);
    if ("count" in $$new_props)
      $$invalidate(1, count = $$new_props.count);
    if ("disabled" in $$new_props)
      $$invalidate(2, disabled = $$new_props.disabled);
    if ("open" in $$new_props)
      $$invalidate(0, open = $$new_props.open);
    if ("$$scope" in $$new_props)
      $$invalidate(17, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    Button,
    Details,
    Disclosure,
    Icon,
    cx,
    media,
    Paths,
    routerPath,
    language,
    breakpoint,
    count,
    disabled,
    open,
    detailsAnchor,
    isLgViewport,
    detailsVisible,
    isSkinCare,
    asDetails,
    $routerPath,
    $isLgViewport,
    $language
  });
  $$self.$inject_state = ($$new_props) => {
    if ("breakpoint" in $$props)
      $$invalidate(10, breakpoint = $$new_props.breakpoint);
    if ("count" in $$props)
      $$invalidate(1, count = $$new_props.count);
    if ("disabled" in $$props)
      $$invalidate(2, disabled = $$new_props.disabled);
    if ("open" in $$props)
      $$invalidate(0, open = $$new_props.open);
    if ("detailsAnchor" in $$props)
      $$invalidate(3, detailsAnchor = $$new_props.detailsAnchor);
    if ("detailsVisible" in $$props)
      $$invalidate(4, detailsVisible = $$new_props.detailsVisible);
    if ("isSkinCare" in $$props)
      $$invalidate(5, isSkinCare = $$new_props.isSkinCare);
    if ("asDetails" in $$props)
      $$invalidate(6, asDetails = $$new_props.asDetails);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$isLgViewport*/
    4096) {
      $$invalidate(6, asDetails = !$isLgViewport);
    }
    if ($$self.$$.dirty & /*$routerPath*/
    2048) {
      $$invalidate(5, isSkinCare = $routerPath.current === Paths.SkinCare);
    }
  };
  return [
    open,
    count,
    disabled,
    detailsAnchor,
    detailsVisible,
    isSkinCare,
    asDetails,
    $language,
    isLgViewport,
    $$restProps,
    breakpoint,
    $routerPath,
    $isLgViewport,
    slots,
    button_binding,
    open_handler,
    disclosure_open_binding,
    $$scope
  ];
}
class CartLayout extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$p,
      create_fragment$p,
      safe_not_equal,
      {
        breakpoint: 10,
        count: 1,
        disabled: 2,
        open: 0
      },
      add_css$m
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CartLayout",
      options,
      id: create_fragment$p.name
    });
  }
  get breakpoint() {
    throw new Error("<CartLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set breakpoint(value) {
    throw new Error("<CartLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get count() {
    throw new Error("<CartLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<CartLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<CartLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<CartLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get open() {
    throw new Error("<CartLayout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set open(value) {
    throw new Error("<CartLayout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$m = "src/lib/components/Cart/Swatches.svelte";
function add_css$l(target) {
  append_styles(target, "svelte-1ljrwqv", "div.svelte-1ljrwqv{display:flex\n}div.svelte-1ljrwqv .swatches{position:absolute;top:50%;left:0px;z-index:10;width:100%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}div.svelte-1ljrwqv:not(.open) .swatches{pointer-events:none;opacity:0\n}div.svelte-1ljrwqv .list{display:flex;gap:4px\n}li.svelte-1ljrwqv{padding-left:4px;padding-right:4px;padding-top:24px;padding-bottom:16px\n}li.svelte-1ljrwqv>*{display:flex;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}li.svelte-1ljrwqv:hover>*{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}");
}
function get_each_context$9(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function create_each_block$9(ctx) {
  let li;
  let swatch;
  let t;
  let current;
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[10](
        /*item*/
        ctx[13]
      )
    );
  }
  swatch = new Swatch({
    props: {
      color: (
        /*item*/
        ctx[13].color
      ),
      active: (
        /*item*/
        ctx[13].active
      )
    },
    $$inline: true
  });
  swatch.$on("click", click_handler_1);
  const block = {
    c: function create() {
      li = element("li");
      create_component(swatch.$$.fragment);
      t = space();
      attr_dev(li, "class", "svelte-1ljrwqv");
      add_location(li, file$m, 23, 6, 820);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(swatch, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const swatch_changes = {};
      if (dirty & /*items*/
      1)
        swatch_changes.color = /*item*/
        ctx[13].color;
      if (dirty & /*items*/
      1)
        swatch_changes.active = /*item*/
        ctx[13].active;
      swatch.$set(swatch_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(swatch.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(swatch.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(swatch);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$9.name,
    type: "each",
    source: "(23:4) {#each items as item}",
    ctx
  });
  return block;
}
function create_default_slot$d(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*items*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items, dispatch, hide*/
      49) {
        each_value = /*items*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$9(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$9(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$d.name,
    type: "slot",
    source: '(22:2) <Slider wrapper=\\"swatches\\" class=\\"list\\" as=\\"ul\\" size=\\"sm\\">',
    ctx
  });
  return block;
}
function create_fragment$o(ctx) {
  let div;
  let swatch;
  let t;
  let slider;
  let current;
  swatch = new Swatch({
    props: { color: (
      /*color*/
      ctx[2]
    ) },
    $$inline: true
  });
  swatch.$on(
    "click",
    /*click_handler*/
    ctx[9]
  );
  slider = new Slider({
    props: {
      wrapper: "swatches",
      class: "list",
      as: "ul",
      size: "sm",
      $$slots: { default: [create_default_slot$d] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(swatch.$$.fragment);
      t = space();
      create_component(slider.$$.fragment);
      attr_dev(div, "class", "svelte-1ljrwqv");
      toggle_class(
        div,
        "open",
        /*open*/
        ctx[3]
      );
      add_location(div, file$m, 19, 0, 646);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(swatch, div, null);
      append_dev(div, t);
      mount_component(slider, div, null);
      ctx[11](div);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const swatch_changes = {};
      if (dirty & /*color*/
      4)
        swatch_changes.color = /*color*/
        ctx2[2];
      swatch.$set(swatch_changes);
      const slider_changes = {};
      if (dirty & /*$$scope, items*/
      65537) {
        slider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      slider.$set(slider_changes);
      if (!current || dirty & /*open*/
      8) {
        toggle_class(
          div,
          "open",
          /*open*/
          ctx2[3]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(swatch.$$.fragment, local);
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(swatch.$$.fragment, local);
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(swatch);
      destroy_component(slider);
      ctx[11](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$o.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const visible = writable(null, (set) => {
  return () => set(null);
});
function instance$o($$self, $$props, $$invalidate) {
  let open;
  let active;
  let color;
  let $visible;
  validate_store(visible, "visible");
  component_subscribe($$self, visible, ($$value) => $$invalidate(8, $visible = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Swatches", slots, []);
  let { items = [] } = $$props;
  let self;
  const dispatch = createEventDispatcher();
  const show = () => set_store_value(visible, $visible = self, $visible);
  const hide = () => $visible === self && set_store_value(visible, $visible = null, $visible);
  const toggle = () => $visible === self ? hide() : show();
  const writable_props = ["items"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Swatches> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => toggle();
  const click_handler_1 = (item) => (dispatch("select", item), hide());
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      self = $$value;
      $$invalidate(1, self);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
  };
  $$self.$capture_state = () => ({
    writable,
    visible,
    createEventDispatcher,
    Slider,
    Swatch,
    items,
    self,
    dispatch,
    show,
    hide,
    toggle,
    active,
    color,
    open,
    $visible
  });
  $$self.$inject_state = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
    if ("self" in $$props2)
      $$invalidate(1, self = $$props2.self);
    if ("active" in $$props2)
      $$invalidate(7, active = $$props2.active);
    if ("color" in $$props2)
      $$invalidate(2, color = $$props2.color);
    if ("open" in $$props2)
      $$invalidate(3, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$visible, self*/
    258) {
      $$invalidate(3, open = $visible === self);
    }
    if ($$self.$$.dirty & /*items*/
    1) {
      $$invalidate(7, active = items.find((i) => i.active));
    }
    if ($$self.$$.dirty & /*active*/
    128) {
      $$invalidate(2, color = active ? active.color : "rgba(0, 0, 0, 0.07)");
    }
  };
  return [
    items,
    self,
    color,
    open,
    dispatch,
    hide,
    toggle,
    active,
    $visible,
    click_handler,
    click_handler_1,
    div_binding
  ];
}
class Swatches extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$o, create_fragment$o, safe_not_equal, { items: 0 }, add_css$l);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Swatches",
      options,
      id: create_fragment$o.name
    });
  }
  get items() {
    throw new Error("<Swatches>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Swatches>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$l = "src/lib/components/Cart/Product.svelte";
function add_css$k(target) {
  append_styles(target, "svelte-vzihx4", "article.svelte-vzihx4.svelte-vzihx4{position:relative;display:flex;flex-direction:column\n}article.svelte-vzihx4>:first-child{position:absolute;top:-4px;left:-4px;height:18px;width:18px;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 1280px){article.svelte-vzihx4:not(:hover)>:first-child{opacity:0\n    }}figure.svelte-vzihx4.svelte-vzihx4{display:flex;align-items:center;gap:12px\n}figure.svelte-vzihx4>*{flex-shrink:0;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.hidden.svelte-vzihx4>*{pointer-events:none;cursor:default;opacity:0.3\n}.hidden.svelte-vzihx4>ul.svelte-vzihx4{pointer-events:auto;cursor:auto;opacity:1\n}img.svelte-vzihx4.svelte-vzihx4{height:40px;width:40px;object-fit:contain\n}.description.svelte-vzihx4.svelte-vzihx4{margin-right:auto;display:flex;flex-shrink:1;flex-direction:column;font-size:12px;line-height:16px\n}figcaption.svelte-vzihx4.svelte-vzihx4{min-width:0px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2\n}figcaption.svelte-vzihx4 b.svelte-vzihx4{font-weight:400\n}ul.svelte-vzihx4.svelte-vzihx4{display:flex;gap:16px\n}li.svelte-vzihx4>.tint-add-to-cart>svg{margin-bottom:-4px;margin-right:-4px\n}");
}
function create_if_block_3$6(ctx) {
  let swatches_1;
  let current;
  swatches_1 = new Swatches({
    props: { items: (
      /*swatches*/
      ctx[3]
    ) },
    $$inline: true
  });
  swatches_1.$on(
    "select",
    /*select_handler*/
    ctx[15]
  );
  const block = {
    c: function create() {
      create_component(swatches_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(swatches_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const swatches_1_changes = {};
      if (dirty & /*swatches*/
      8)
        swatches_1_changes.items = /*swatches*/
        ctx2[3];
      swatches_1.$set(swatches_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(swatches_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(swatches_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(swatches_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$6.name,
    type: "if",
    source: "(33:4) {#if swatchesEnabled}",
    ctx
  });
  return block;
}
function create_if_block_2$7(ctx) {
  let b;
  let t;
  const block = {
    c: function create() {
      b = element("b");
      t = text(
        /*brand*/
        ctx[0]
      );
      attr_dev(b, "class", "svelte-vzihx4");
      add_location(b, file$l, 37, 19, 1127);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, b, anchor);
      append_dev(b, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*brand*/
      1)
        set_data_dev(
          t,
          /*brand*/
          ctx2[0]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(b);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$7.name,
    type: "if",
    source: "(38:8) {#if brand}",
    ctx
  });
  return block;
}
function create_if_block_1$9(ctx) {
  let b;
  let price_1;
  let current;
  const price_1_spread_levels = [
    /*price*/
    ctx[4]
  ];
  let price_1_props = {};
  for (let i = 0; i < price_1_spread_levels.length; i += 1) {
    price_1_props = assign(price_1_props, price_1_spread_levels[i]);
  }
  price_1 = new Price({ props: price_1_props, $$inline: true });
  const block = {
    c: function create() {
      b = element("b");
      create_component(price_1.$$.fragment);
      add_location(b, file$l, 40, 17, 1212);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, b, anchor);
      mount_component(price_1, b, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const price_1_changes = dirty & /*price*/
      16 ? get_spread_update(price_1_spread_levels, [get_spread_object(
        /*price*/
        ctx2[4]
      )]) : {};
      price_1.$set(price_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(price_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(price_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(b);
      destroy_component(price_1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$9.name,
    type: "if",
    source: "(41:6) {#if price}",
    ctx
  });
  return block;
}
function create_if_block$e(ctx) {
  let ul;
  let li0;
  let iconbutton0;
  let t;
  let li1;
  let iconbutton1;
  let current;
  iconbutton0 = new IconButton({
    props: {
      icon: (
        /*showhide*/
        ctx[11]
      ),
      size: "sm",
      title: (
        /*visible*/
        ctx[5] ? (
          /*$language*/
          ctx[12].hide
        ) : (
          /*$language*/
          ctx[12].show
        )
      )
    },
    $$inline: true
  });
  iconbutton0.$on(
    "click",
    /*click_handler_1*/
    ctx[16]
  );
  iconbutton1 = new IconButton({
    props: {
      class: `tint-add-to-cart mr-1 ${/*cart*/
      ctx[6] ? "added" : ""}`,
      icon: (
        /*cart*/
        ctx[6] ? "added-to-cart" : "add-to-cart"
      ),
      size: "sm",
      title: (
        /*cart*/
        ctx[6] ? (
          /*$language*/
          ctx[12].addedToCart
        ) : (
          /*$language*/
          ctx[12].addToCart
        )
      )
    },
    $$inline: true
  });
  iconbutton1.$on(
    "click",
    /*click_handler_2*/
    ctx[17]
  );
  iconbutton1.$on(
    "click",
    /*click_handler_3*/
    ctx[18]
  );
  const block = {
    c: function create() {
      ul = element("ul");
      li0 = element("li");
      create_component(iconbutton0.$$.fragment);
      t = space();
      li1 = element("li");
      create_component(iconbutton1.$$.fragment);
      attr_dev(li0, "class", "svelte-vzihx4");
      add_location(li0, file$l, 44, 8, 1294);
      attr_dev(li1, "class", "svelte-vzihx4");
      add_location(li1, file$l, 52, 8, 1516);
      attr_dev(ul, "class", "svelte-vzihx4");
      add_location(ul, file$l, 43, 6, 1281);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, ul, anchor);
      append_dev(ul, li0);
      mount_component(iconbutton0, li0, null);
      append_dev(ul, t);
      append_dev(ul, li1);
      mount_component(iconbutton1, li1, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const iconbutton0_changes = {};
      if (dirty & /*showhide*/
      2048)
        iconbutton0_changes.icon = /*showhide*/
        ctx2[11];
      if (dirty & /*visible, $language*/
      4128)
        iconbutton0_changes.title = /*visible*/
        ctx2[5] ? (
          /*$language*/
          ctx2[12].hide
        ) : (
          /*$language*/
          ctx2[12].show
        );
      iconbutton0.$set(iconbutton0_changes);
      const iconbutton1_changes = {};
      if (dirty & /*cart*/
      64)
        iconbutton1_changes.class = `tint-add-to-cart mr-1 ${/*cart*/
        ctx2[6] ? "added" : ""}`;
      if (dirty & /*cart*/
      64)
        iconbutton1_changes.icon = /*cart*/
        ctx2[6] ? "added-to-cart" : "add-to-cart";
      if (dirty & /*cart, $language*/
      4160)
        iconbutton1_changes.title = /*cart*/
        ctx2[6] ? (
          /*$language*/
          ctx2[12].addedToCart
        ) : (
          /*$language*/
          ctx2[12].addToCart
        );
      iconbutton1.$set(iconbutton1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(ul);
      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$e.name,
    type: "if",
    source: "(43:4) {#if controls}",
    ctx
  });
  return block;
}
function create_fragment$n(ctx) {
  let article;
  let iconbutton;
  let t0;
  let figure;
  let img;
  let img_src_value;
  let t1;
  let t2;
  let div;
  let figcaption;
  let t3;
  let span;
  let t4;
  let t5;
  let t6;
  let current;
  iconbutton = new IconButton({
    props: {
      title: (
        /*$language*/
        ctx[12].delete
      ),
      icon: "close-xs",
      size: "sm"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler*/
    ctx[14]
  );
  let if_block0 = (
    /*swatchesEnabled*/
    ctx[8] && create_if_block_3$6(ctx)
  );
  let if_block1 = (
    /*brand*/
    ctx[0] && create_if_block_2$7(ctx)
  );
  let if_block2 = (
    /*price*/
    ctx[4] && create_if_block_1$9(ctx)
  );
  let if_block3 = (
    /*controls*/
    ctx[7] && create_if_block$e(ctx)
  );
  const block = {
    c: function create() {
      article = element("article");
      create_component(iconbutton.$$.fragment);
      t0 = space();
      figure = element("figure");
      img = element("img");
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      div = element("div");
      figcaption = element("figcaption");
      if (if_block1)
        if_block1.c();
      t3 = space();
      span = element("span");
      t4 = text(
        /*name*/
        ctx[1]
      );
      t5 = space();
      if (if_block2)
        if_block2.c();
      t6 = space();
      if (if_block3)
        if_block3.c();
      attr_dev(
        img,
        "alt",
        /*name*/
        ctx[1]
      );
      if (!src_url_equal(img.src, img_src_value = /*cover*/
      ctx[2]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "svelte-vzihx4");
      add_location(img, file$l, 31, 4, 900);
      add_location(span, file$l, 38, 8, 1155);
      attr_dev(figcaption, "class", "svelte-vzihx4");
      add_location(figcaption, file$l, 36, 6, 1095);
      attr_dev(div, "class", "description svelte-vzihx4");
      add_location(div, file$l, 35, 4, 1063);
      attr_dev(figure, "class", "svelte-vzihx4");
      toggle_class(figure, "hidden", !/*visible*/
      ctx[5]);
      add_location(figure, file$l, 30, 2, 863);
      attr_dev(article, "data-qa", "tint-cart-product-item");
      attr_dev(article, "class", "svelte-vzihx4");
      add_location(article, file$l, 23, 0, 697);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      mount_component(iconbutton, article, null);
      append_dev(article, t0);
      append_dev(article, figure);
      append_dev(figure, img);
      append_dev(figure, t1);
      if (if_block0)
        if_block0.m(figure, null);
      append_dev(figure, t2);
      append_dev(figure, div);
      append_dev(div, figcaption);
      if (if_block1)
        if_block1.m(figcaption, null);
      append_dev(figcaption, t3);
      append_dev(figcaption, span);
      append_dev(span, t4);
      append_dev(div, t5);
      if (if_block2)
        if_block2.m(div, null);
      append_dev(figure, t6);
      if (if_block3)
        if_block3.m(figure, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const iconbutton_changes = {};
      if (dirty & /*$language*/
      4096)
        iconbutton_changes.title = /*$language*/
        ctx2[12].delete;
      iconbutton.$set(iconbutton_changes);
      if (!current || dirty & /*name*/
      2) {
        attr_dev(
          img,
          "alt",
          /*name*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*cover*/
      4 && !src_url_equal(img.src, img_src_value = /*cover*/
      ctx2[2])) {
        attr_dev(img, "src", img_src_value);
      }
      if (
        /*swatchesEnabled*/
        ctx2[8]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*swatchesEnabled*/
          256) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_3$6(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(figure, t2);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*brand*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2$7(ctx2);
          if_block1.c();
          if_block1.m(figcaption, t3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & /*name*/
      2)
        set_data_dev(
          t4,
          /*name*/
          ctx2[1]
        );
      if (
        /*price*/
        ctx2[4]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*price*/
          16) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1$9(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*controls*/
        ctx2[7]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*controls*/
          128) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block$e(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(figure, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*visible*/
      32) {
        toggle_class(figure, "hidden", !/*visible*/
        ctx2[5]);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block2);
      transition_in(if_block3);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block2);
      transition_out(if_block3);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      destroy_component(iconbutton);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$n.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$n($$self, $$props, $$invalidate) {
  let showhide;
  let url;
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(12, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Product", slots, []);
  let { brand = void 0 } = $$props;
  let { name: name2 } = $$props;
  let { cover } = $$props;
  let { swatches = [] } = $$props;
  let { price = void 0 } = $$props;
  let { visible: visible2 = true } = $$props;
  let { cart: cart2 = false } = $$props;
  let { controls = true } = $$props;
  let { swatchesEnabled = true } = $$props;
  let { productsLinks = false } = $$props;
  const dispatch = createEventDispatcher();
  $$self.$$.on_mount.push(function() {
    if (name2 === void 0 && !("name" in $$props || $$self.$$.bound[$$self.$$.props["name"]])) {
      console.warn("<Product> was created without expected prop 'name'");
    }
    if (cover === void 0 && !("cover" in $$props || $$self.$$.bound[$$self.$$.props["cover"]])) {
      console.warn("<Product> was created without expected prop 'cover'");
    }
  });
  const writable_props = [
    "brand",
    "name",
    "cover",
    "swatches",
    "price",
    "visible",
    "cart",
    "controls",
    "swatchesEnabled",
    "productsLinks"
  ];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Product> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => dispatch("clear");
  const select_handler = (event) => dispatch("swatch", event.detail);
  const click_handler_1 = () => dispatch(showhide);
  const click_handler_22 = () => productsLinks ? window.open(url, "_blank") : dispatch(cart2 ? "remove" : "add");
  const click_handler_3 = () => analytics.add_to_cart_clicked_list();
  $$self.$$set = ($$props2) => {
    if ("brand" in $$props2)
      $$invalidate(0, brand = $$props2.brand);
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("swatches" in $$props2)
      $$invalidate(3, swatches = $$props2.swatches);
    if ("price" in $$props2)
      $$invalidate(4, price = $$props2.price);
    if ("visible" in $$props2)
      $$invalidate(5, visible2 = $$props2.visible);
    if ("cart" in $$props2)
      $$invalidate(6, cart2 = $$props2.cart);
    if ("controls" in $$props2)
      $$invalidate(7, controls = $$props2.controls);
    if ("swatchesEnabled" in $$props2)
      $$invalidate(8, swatchesEnabled = $$props2.swatchesEnabled);
    if ("productsLinks" in $$props2)
      $$invalidate(9, productsLinks = $$props2.productsLinks);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    analytics,
    IconButton,
    Price,
    capitalize: capitalize$1,
    language,
    Swatches,
    brand,
    name: name2,
    cover,
    swatches,
    price,
    visible: visible2,
    cart: cart2,
    controls,
    swatchesEnabled,
    productsLinks,
    dispatch,
    url,
    showhide,
    $language
  });
  $$self.$inject_state = ($$props2) => {
    if ("brand" in $$props2)
      $$invalidate(0, brand = $$props2.brand);
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("swatches" in $$props2)
      $$invalidate(3, swatches = $$props2.swatches);
    if ("price" in $$props2)
      $$invalidate(4, price = $$props2.price);
    if ("visible" in $$props2)
      $$invalidate(5, visible2 = $$props2.visible);
    if ("cart" in $$props2)
      $$invalidate(6, cart2 = $$props2.cart);
    if ("controls" in $$props2)
      $$invalidate(7, controls = $$props2.controls);
    if ("swatchesEnabled" in $$props2)
      $$invalidate(8, swatchesEnabled = $$props2.swatchesEnabled);
    if ("productsLinks" in $$props2)
      $$invalidate(9, productsLinks = $$props2.productsLinks);
    if ("url" in $$props2)
      $$invalidate(10, url = $$props2.url);
    if ("showhide" in $$props2)
      $$invalidate(11, showhide = $$props2.showhide);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*visible*/
    32) {
      $$invalidate(11, showhide = visible2 ? "hide" : "show");
    }
    if ($$self.$$.dirty & /*swatches*/
    8) {
      $$invalidate(10, url = swatches[0].url);
    }
  };
  return [
    brand,
    name2,
    cover,
    swatches,
    price,
    visible2,
    cart2,
    controls,
    swatchesEnabled,
    productsLinks,
    url,
    showhide,
    $language,
    dispatch,
    click_handler,
    select_handler,
    click_handler_1,
    click_handler_22,
    click_handler_3
  ];
}
let Product$1 = class Product extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$n,
      create_fragment$n,
      safe_not_equal,
      {
        brand: 0,
        name: 1,
        cover: 2,
        swatches: 3,
        price: 4,
        visible: 5,
        cart: 6,
        controls: 7,
        swatchesEnabled: 8,
        productsLinks: 9
      },
      add_css$k
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Product",
      options,
      id: create_fragment$n.name
    });
  }
  get brand() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set brand(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get name() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cover() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cover(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get swatches() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set swatches(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get price() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set price(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get visible() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set visible(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cart() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cart(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get controls() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set controls(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get swatchesEnabled() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set swatchesEnabled(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get productsLinks() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set productsLinks(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
const file$k = "src/lib/components/Looks/Products.svelte";
function add_css$j(target) {
  append_styles(target, "svelte-rwvsj", "section.svelte-rwvsj{display:flex;flex-direction:column\n}@media(min-width: 768px){section.svelte-rwvsj{max-width:248px\n    }}div.svelte-rwvsj{display:flex;min-height:0px;flex-direction:column;overflow-y:auto;overflow-x:hidden\n}ul.svelte-rwvsj{display:flex;flex-direction:column;gap:12px;padding-bottom:12px\n}@media(min-width: 768px){ul.svelte-rwvsj{gap:8px;padding-bottom:16px\n    }}h3.svelte-rwvsj{margin-bottom:12px;font-size:16px;line-height:24px\n}@media(min-width: 768px){h3.svelte-rwvsj{margin-bottom:16px\n    }}figure.svelte-rwvsj{display:flex;align-items:center\n}figcaption.svelte-rwvsj{margin-left:12px;font-size:14px;line-height:20px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2\n}img.svelte-rwvsj{order:-1;height:56px;width:56px;object-fit:cover\n}");
}
function get_each_context$8(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i].brand;
  child_ctx[5] = list[i].name;
  child_ctx[6] = list[i].cover;
  const constants_0 = (
    /*brand*/
    child_ctx[4] ? `${/*brand*/
    child_ctx[4]} ${/*name*/
    child_ctx[5]}` : (
      /*name*/
      child_ctx[5]
    )
  );
  child_ctx[7] = constants_0;
  return child_ctx;
}
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function fallback_block$2(ctx) {
  let t_value = (
    /*$language*/
    ctx[1].included + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      2 && t_value !== (t_value = /*$language*/
      ctx2[1].included + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block$2.name,
    type: "fallback",
    source: "(9:25) {$language.included}",
    ctx
  });
  return block;
}
function create_each_block$8(ctx) {
  let li;
  let figure;
  let figcaption;
  let t0_value = (
    /*title*/
    ctx[7] + ""
  );
  let t0;
  let t1;
  let img;
  let img_alt_value;
  let img_src_value;
  let t2;
  const block = {
    c: function create() {
      li = element("li");
      figure = element("figure");
      figcaption = element("figcaption");
      t0 = text(t0_value);
      t1 = space();
      img = element("img");
      t2 = space();
      attr_dev(figcaption, "class", "svelte-rwvsj");
      add_location(figcaption, file$k, 15, 12, 378);
      attr_dev(img, "alt", img_alt_value = /*name*/
      ctx[5]);
      if (!src_url_equal(img.src, img_src_value = /*cover*/
      ctx[6]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "svelte-rwvsj");
      add_location(img, file$k, 18, 12, 451);
      attr_dev(figure, "class", "svelte-rwvsj");
      add_location(figure, file$k, 14, 10, 357);
      add_location(li, file$k, 13, 8, 342);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, figure);
      append_dev(figure, figcaption);
      append_dev(figcaption, t0);
      append_dev(figure, t1);
      append_dev(figure, img);
      append_dev(li, t2);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items*/
      1 && t0_value !== (t0_value = /*title*/
      ctx2[7] + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*items*/
      1 && img_alt_value !== (img_alt_value = /*name*/
      ctx2[5])) {
        attr_dev(img, "alt", img_alt_value);
      }
      if (dirty & /*items*/
      1 && !src_url_equal(img.src, img_src_value = /*cover*/
      ctx2[6])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$8.name,
    type: "each",
    source: "(12:6) {#each items as { brand, name, cover }}",
    ctx
  });
  return block;
}
function create_fragment$m(ctx) {
  let section;
  let h3;
  let t;
  let div;
  let ul;
  let current;
  const title_slot_template = (
    /*#slots*/
    ctx[3].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_title_slot_context
  );
  const title_slot_or_fallback = title_slot || fallback_block$2(ctx);
  let each_value = (
    /*items*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      section = element("section");
      h3 = element("h3");
      if (title_slot_or_fallback)
        title_slot_or_fallback.c();
      t = space();
      div = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(h3, "class", "svelte-rwvsj");
      add_location(h3, file$k, 8, 2, 156);
      attr_dev(ul, "class", "svelte-rwvsj");
      add_location(ul, file$k, 10, 4, 224);
      attr_dev(div, "class", "svelte-rwvsj");
      add_location(div, file$k, 9, 2, 214);
      attr_dev(section, "class", "svelte-rwvsj");
      add_location(section, file$k, 7, 0, 144);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, h3);
      if (title_slot_or_fallback) {
        title_slot_or_fallback.m(h3, null);
      }
      append_dev(section, t);
      append_dev(section, div);
      append_dev(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_title_slot_changes
            ),
            get_title_slot_context
          );
        }
      } else {
        if (title_slot_or_fallback && title_slot_or_fallback.p && (!current || dirty & /*$language*/
        2)) {
          title_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (dirty & /*items*/
      1) {
        each_value = /*items*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$8(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$8(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (title_slot_or_fallback)
        title_slot_or_fallback.d(detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$m.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$m($$self, $$props, $$invalidate) {
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(1, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Products", slots, ["title"]);
  let { items = [] } = $$props;
  const writable_props = ["items"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Products> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ language, items, $language });
  $$self.$inject_state = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [items, $language, $$scope, slots];
}
let Products$1 = class Products extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$m, create_fragment$m, safe_not_equal, { items: 0 }, add_css$j);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Products",
      options,
      id: create_fragment$m.name
    });
  }
  get items() {
    throw new Error("<Products>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Products>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
};
const file$j = "src/lib/components/Looks/LookCover.svelte";
function add_css$i(target) {
  append_styles(target, "svelte-14xca9r", "div.svelte-14xca9r.svelte-14xca9r{position:relative;display:grid;height:100%;width:100%;-webkit-user-select:none;user-select:none;grid-template-columns:repeat(2, minmax(0, 1fr));grid-template-rows:repeat(2, minmax(0, 1fr));border-radius:inherit\n}div.one.svelte-14xca9r.svelte-14xca9r{height:0px;grid-template-columns:repeat(1, minmax(0, 1fr));grid-template-rows:repeat(1, minmax(0, 1fr));padding-bottom:100%\n}div.one.svelte-14xca9r>img.svelte-14xca9r{position:absolute;top:0px;left:0px;z-index:-1;height:100%;width:100%;-webkit-user-select:none;user-select:none;border-radius:inherit;object-fit:cover\n}div.three.svelte-14xca9r>img.svelte-14xca9r:first-child{grid-row:span 2 / span 2;border-right-width:1px\n}div.three.svelte-14xca9r>img.svelte-14xca9r:last-child{grid-column-start:2;border-top-width:1px\n}div.four.svelte-14xca9r>img.svelte-14xca9r:first-child{border-right-width:1px;border-bottom-width:1px\n}div.four.svelte-14xca9r>img.svelte-14xca9r:nth-child(2){border-bottom-width:1px\n}div.four.svelte-14xca9r>img.svelte-14xca9r:nth-child(3){border-right-width:1px\n}div.svelte-14xca9r>img.svelte-14xca9r{position:static;z-index:-1;height:100%;width:100%;-webkit-user-select:none;user-select:none;border-radius:0px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity));object-fit:cover\n}");
}
function get_each_context$7(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_else_block$4(ctx) {
  let each_1_anchor;
  let each_value = (
    /*products*/
    ctx[2]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*products*/
      4) {
        each_value = /*products*/
        ctx2[2];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$7(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$7(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$4.name,
    type: "else",
    source: "(10:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block$d(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      attr_dev(
        img,
        "alt",
        /*name*/
        ctx[0]
      );
      if (!src_url_equal(img.src, img_src_value = /*cover*/
      ctx[1]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "fetchpriority", "low");
      attr_dev(img, "class", "svelte-14xca9r");
      add_location(img, file$j, 8, 4, 220);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*name*/
      1) {
        attr_dev(
          img,
          "alt",
          /*name*/
          ctx2[0]
        );
      }
      if (dirty & /*cover*/
      2 && !src_url_equal(img.src, img_src_value = /*cover*/
      ctx2[1])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$d.name,
    type: "if",
    source: "(8:2) {#if cover?.length}",
    ctx
  });
  return block;
}
function create_each_block$7(ctx) {
  let img;
  let img_alt_value;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      attr_dev(img, "alt", img_alt_value = /*product*/
      ctx[4].name);
      if (!src_url_equal(img.src, img_src_value = /*product*/
      ctx[4].cover))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "fetchpriority", "low");
      attr_dev(img, "class", "svelte-14xca9r");
      add_location(img, file$j, 11, 6, 319);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*products*/
      4 && img_alt_value !== (img_alt_value = /*product*/
      ctx2[4].name)) {
        attr_dev(img, "alt", img_alt_value);
      }
      if (dirty & /*products*/
      4 && !src_url_equal(img.src, img_src_value = /*product*/
      ctx2[4].cover)) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$7.name,
    type: "each",
    source: "(11:4) {#each products as product}",
    ctx
  });
  return block;
}
function create_fragment$l(ctx) {
  let div;
  let div_class_value;
  function select_block_type(ctx2, dirty) {
    var _a;
    if (
      /*cover*/
      (_a = ctx2[1]) == null ? void 0 : _a.length
    )
      return create_if_block$d;
    return create_else_block$4;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div = element("div");
      if_block.c();
      attr_dev(div, "class", div_class_value = null_to_empty(
        /*className*/
        ctx[3]
      ) + " svelte-14xca9r");
      add_location(div, file$j, 6, 0, 170);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if_block.m(div, null);
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
      if (dirty & /*className*/
      8 && div_class_value !== (div_class_value = null_to_empty(
        /*className*/
        ctx2[3]
      ) + " svelte-14xca9r")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$l.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$l($$self, $$props, $$invalidate) {
  let className;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("LookCover", slots, []);
  let { name: name2 = "" } = $$props;
  let { cover } = $$props;
  let { products: products2 } = $$props;
  $$self.$$.on_mount.push(function() {
    if (cover === void 0 && !("cover" in $$props || $$self.$$.bound[$$self.$$.props["cover"]])) {
      console.warn("<LookCover> was created without expected prop 'cover'");
    }
    if (products2 === void 0 && !("products" in $$props || $$self.$$.bound[$$self.$$.props["products"]])) {
      console.warn("<LookCover> was created without expected prop 'products'");
    }
  });
  const writable_props = ["name", "cover", "products"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<LookCover> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(1, cover = $$props2.cover);
    if ("products" in $$props2)
      $$invalidate(2, products2 = $$props2.products);
  };
  $$self.$capture_state = () => ({ name: name2, cover, products: products2, className });
  $$self.$inject_state = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(1, cover = $$props2.cover);
    if ("products" in $$props2)
      $$invalidate(2, products2 = $$props2.products);
    if ("className" in $$props2)
      $$invalidate(3, className = $$props2.className);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*cover, products*/
    6) {
      $$invalidate(3, className = cover.length ? "one" : products2.length === 3 ? "three" : "four");
    }
  };
  return [name2, cover, products2, className];
}
class LookCover extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$l, create_fragment$l, safe_not_equal, { name: 0, cover: 1, products: 2 }, add_css$i);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "LookCover",
      options,
      id: create_fragment$l.name
    });
  }
  get name() {
    throw new Error("<LookCover>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<LookCover>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cover() {
    throw new Error("<LookCover>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cover(value) {
    throw new Error("<LookCover>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get products() {
    throw new Error("<LookCover>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set products(value) {
    throw new Error("<LookCover>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$i = "src/lib/components/Cart/SkinCareCartItem.svelte";
function add_css$h(target) {
  append_styles(target, "svelte-1u1vu46", "article.svelte-1u1vu46.svelte-1u1vu46{position:relative;display:flex;width:100%;flex-direction:column\n}article.svelte-1u1vu46>:first-child{position:absolute;top:-4px;left:-4px;z-index:20;height:18px;width:18px;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 1280px){article.svelte-1u1vu46:not(:hover)>:first-child{opacity:0\n    }}figure.svelte-1u1vu46.svelte-1u1vu46{display:flex;align-items:center;gap:12px\n}figure.svelte-1u1vu46>*{flex-shrink:0;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.info.svelte-1u1vu46.svelte-1u1vu46{margin-left:4px;display:flex;height:16px;width:16px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:var(--tint-text-light);transition-property:background-color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.info.svelte-1u1vu46 svg{margin-left:-4px;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.info.svelte-1u1vu46.svelte-1u1vu46:hover{--tw-bg-opacity:0.3\n}.info.svelte-1u1vu46.svelte-1u1vu46:active{--tw-bg-opacity:0.4\n}.cover.svelte-1u1vu46.svelte-1u1vu46{height:60px;width:60px;border-radius:inherit;border-radius:6px;border-width:1px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity))\n}.description.svelte-1u1vu46.svelte-1u1vu46{margin-right:auto;display:flex;height:60px;width:100%;flex-shrink:1;align-items:center;justify-content:space-between;font-size:12px;line-height:16px\n}.description.svelte-1u1vu46>button{margin-right:20px;height:36px\n}figcaption.svelte-1u1vu46.svelte-1u1vu46{display:flex;min-width:0px;align-items:flex-start;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3\n}figcaption.svelte-1u1vu46>.items.svelte-1u1vu46{margin-top:8px;display:flex;align-items:center\n}");
}
function create_if_block_4$4(ctx) {
  let p;
  let b;
  let t_value = (
    /*brand*/
    ctx[0].toUpperCase() + ""
  );
  let t;
  const block = {
    c: function create() {
      p = element("p");
      b = element("b");
      t = text(t_value);
      add_location(b, file$i, 27, 22, 891);
      add_location(p, file$i, 27, 19, 888);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, b);
      append_dev(b, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*brand*/
      1 && t_value !== (t_value = /*brand*/
      ctx2[0].toUpperCase() + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$4.name,
    type: "if",
    source: "(28:8) {#if brand}",
    ctx
  });
  return block;
}
function create_if_block_3$5(ctx) {
  let div;
  let p;
  let t0_value = (
    /*products*/
    ctx[4].products.length + ""
  );
  let t0;
  let t1;
  let t2;
  let button;
  let icon;
  let current;
  let mounted;
  let dispose;
  icon = new Icon({
    props: { variant: "info" },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      p = element("p");
      t0 = text(t0_value);
      t1 = text(" items");
      t2 = space();
      button = element("button");
      create_component(icon.$$.fragment);
      add_location(p, file$i, 31, 12, 1034);
      attr_dev(button, "class", "info svelte-1u1vu46");
      add_location(button, file$i, 32, 12, 1086);
      attr_dev(div, "class", "items svelte-1u1vu46");
      add_location(div, file$i, 30, 10, 1002);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, p);
      append_dev(p, t0);
      append_dev(p, t1);
      append_dev(div, t2);
      append_dev(div, button);
      mount_component(icon, button, null);
      ctx[9](button);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button,
            "click",
            /*click_handler_1*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "click", click_handler_2$1, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & /*products*/
      16) && t0_value !== (t0_value = /*products*/
      ctx2[4].products.length + ""))
        set_data_dev(t0, t0_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(icon);
      ctx[9](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$5.name,
    type: "if",
    source: "(30:8) {#if products?.products?.length}",
    ctx
  });
  return block;
}
function create_if_block_2$6(ctx) {
  let b;
  let price_1;
  let current;
  const price_1_spread_levels = [
    /*price*/
    ctx[3]
  ];
  let price_1_props = {};
  for (let i = 0; i < price_1_spread_levels.length; i += 1) {
    price_1_props = assign(price_1_props, price_1_spread_levels[i]);
  }
  price_1 = new Price({ props: price_1_props, $$inline: true });
  const block = {
    c: function create() {
      b = element("b");
      create_component(price_1.$$.fragment);
      add_location(b, file$i, 43, 17, 1438);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, b, anchor);
      mount_component(price_1, b, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const price_1_changes = dirty & /*price*/
      8 ? get_spread_update(price_1_spread_levels, [get_spread_object(
        /*price*/
        ctx2[3]
      )]) : {};
      price_1.$set(price_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(price_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(price_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(b);
      destroy_component(price_1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$6.name,
    type: "if",
    source: "(44:6) {#if price}",
    ctx
  });
  return block;
}
function create_if_block_1$8(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      $$slots: { default: [create_default_slot_1$6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_3*/
    ctx[11]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, cartButtonText*/
      8224) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$8.name,
    type: "if",
    source: "(45:6) {#if cartButtonText?.length}",
    ctx
  });
  return block;
}
function create_default_slot_1$6(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text(
        /*cartButtonText*/
        ctx[5]
      );
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*cartButtonText*/
      32)
        set_data_dev(
          t,
          /*cartButtonText*/
          ctx2[5]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$6.name,
    type: "slot",
    source: '(46:8) <Button on:click={() => dispatch(\\"cart\\")}>',
    ctx
  });
  return block;
}
function create_if_block$c(ctx) {
  let details;
  let current;
  details = new Details({
    props: {
      anchor: (
        /*info*/
        ctx[6]
      ),
      placement: "top-left-corner",
      offset: [-8, 8],
      $$slots: { default: [create_default_slot$c] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  details.$on(
    "close",
    /*close_handler*/
    ctx[12]
  );
  const block = {
    c: function create() {
      create_component(details.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(details, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const details_changes = {};
      if (dirty & /*info*/
      64)
        details_changes.anchor = /*info*/
        ctx2[6];
      if (dirty & /*$$scope, products*/
      8208) {
        details_changes.$$scope = { dirty, ctx: ctx2 };
      }
      details.$set(details_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(details.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(details.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(details, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$c.name,
    type: "if",
    source: "(51:4) {#if products?.products?.length}",
    ctx
  });
  return block;
}
function create_default_slot$c(ctx) {
  let products_1;
  let current;
  products_1 = new Products$1({
    props: { items: (
      /*products*/
      ctx[4].products
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(products_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(products_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const products_1_changes = {};
      if (dirty & /*products*/
      16)
        products_1_changes.items = /*products*/
        ctx2[4].products;
      products_1.$set(products_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$c.name,
    type: "slot",
    source: '(52:6) <Details         on:close={() => analytics.filter_info_closed({ filter_name: name })}         anchor={info}         placement=\\"top-left-corner\\"         offset={[-8, 8]}       >',
    ctx
  });
  return block;
}
function create_fragment$k(ctx) {
  var _a, _b, _c, _d, _e, _f;
  let article;
  let iconbutton;
  let t0;
  let figure;
  let div0;
  let lookcover;
  let t1;
  let div1;
  let figcaption;
  let t2;
  let p;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let current;
  iconbutton = new IconButton({
    props: {
      title: "Delete",
      icon: "close-xs",
      size: "sm"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler*/
    ctx[8]
  );
  lookcover = new LookCover({
    props: {
      name: (
        /*name*/
        ctx[1]
      ),
      cover: (
        /*cover*/
        ctx[2]
      ),
      products: (
        /*products*/
        (_a = ctx[4]) == null ? void 0 : _a.products
      )
    },
    $$inline: true
  });
  let if_block0 = (
    /*brand*/
    ctx[0] && create_if_block_4$4(ctx)
  );
  let if_block1 = (
    /*products*/
    ((_c = (_b = ctx[4]) == null ? void 0 : _b.products) == null ? void 0 : _c.length) && create_if_block_3$5(ctx)
  );
  let if_block2 = (
    /*price*/
    ctx[3] && create_if_block_2$6(ctx)
  );
  let if_block3 = (
    /*cartButtonText*/
    ((_d = ctx[5]) == null ? void 0 : _d.length) && create_if_block_1$8(ctx)
  );
  let if_block4 = (
    /*products*/
    ((_f = (_e = ctx[4]) == null ? void 0 : _e.products) == null ? void 0 : _f.length) && create_if_block$c(ctx)
  );
  const block = {
    c: function create() {
      article = element("article");
      create_component(iconbutton.$$.fragment);
      t0 = space();
      figure = element("figure");
      div0 = element("div");
      create_component(lookcover.$$.fragment);
      t1 = space();
      div1 = element("div");
      figcaption = element("figcaption");
      if (if_block0)
        if_block0.c();
      t2 = space();
      p = element("p");
      t3 = text(
        /*name*/
        ctx[1]
      );
      t4 = space();
      if (if_block1)
        if_block1.c();
      t5 = space();
      if (if_block2)
        if_block2.c();
      t6 = space();
      if (if_block3)
        if_block3.c();
      t7 = space();
      if (if_block4)
        if_block4.c();
      attr_dev(div0, "class", "cover svelte-1u1vu46");
      add_location(div0, file$i, 21, 4, 680);
      add_location(p, file$i, 28, 8, 937);
      attr_dev(figcaption, "class", "svelte-1u1vu46");
      add_location(figcaption, file$i, 26, 6, 856);
      attr_dev(div1, "class", "description svelte-1u1vu46");
      add_location(div1, file$i, 24, 4, 780);
      attr_dev(figure, "class", "svelte-1u1vu46");
      add_location(figure, file$i, 20, 2, 667);
      attr_dev(article, "class", "svelte-1u1vu46");
      add_location(article, file$i, 18, 0, 562);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      mount_component(iconbutton, article, null);
      append_dev(article, t0);
      append_dev(article, figure);
      append_dev(figure, div0);
      mount_component(lookcover, div0, null);
      append_dev(figure, t1);
      append_dev(figure, div1);
      append_dev(div1, figcaption);
      if (if_block0)
        if_block0.m(figcaption, null);
      append_dev(figcaption, t2);
      append_dev(figcaption, p);
      append_dev(p, t3);
      append_dev(figcaption, t4);
      if (if_block1)
        if_block1.m(figcaption, null);
      append_dev(div1, t5);
      if (if_block2)
        if_block2.m(div1, null);
      append_dev(div1, t6);
      if (if_block3)
        if_block3.m(div1, null);
      append_dev(figure, t7);
      if (if_block4)
        if_block4.m(figure, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      const lookcover_changes = {};
      if (dirty & /*name*/
      2)
        lookcover_changes.name = /*name*/
        ctx2[1];
      if (dirty & /*cover*/
      4)
        lookcover_changes.cover = /*cover*/
        ctx2[2];
      if (dirty & /*products*/
      16)
        lookcover_changes.products = /*products*/
        (_a2 = ctx2[4]) == null ? void 0 : _a2.products;
      lookcover.$set(lookcover_changes);
      if (
        /*brand*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_4$4(ctx2);
          if_block0.c();
          if_block0.m(figcaption, t2);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty & /*name*/
      2)
        set_data_dev(
          t3,
          /*name*/
          ctx2[1]
        );
      if (
        /*products*/
        (_c2 = (_b2 = ctx2[4]) == null ? void 0 : _b2.products) == null ? void 0 : _c2.length
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*products*/
          16) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3$5(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(figcaption, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*price*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*price*/
          8) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_2$6(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, t6);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*cartButtonText*/
        (_d2 = ctx2[5]) == null ? void 0 : _d2.length
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*cartButtonText*/
          32) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_1$8(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div1, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (
        /*products*/
        (_f2 = (_e2 = ctx2[4]) == null ? void 0 : _e2.products) == null ? void 0 : _f2.length
      ) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty & /*products*/
          16) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block$c(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(figure, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(lookcover.$$.fragment, local);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(lookcover.$$.fragment, local);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      destroy_component(iconbutton);
      destroy_component(lookcover);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$k.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const click_handler_2$1 = (event) => event.stopPropagation();
function instance$k($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SkinCareCartItem", slots, []);
  let { brand } = $$props;
  let { name: name2 } = $$props;
  let { cover } = $$props;
  let { price } = $$props;
  let { products: products2 } = $$props;
  let { cartButtonText = "" } = $$props;
  const dispatch = createEventDispatcher();
  let info;
  $$self.$$.on_mount.push(function() {
    if (brand === void 0 && !("brand" in $$props || $$self.$$.bound[$$self.$$.props["brand"]])) {
      console.warn("<SkinCareCartItem> was created without expected prop 'brand'");
    }
    if (name2 === void 0 && !("name" in $$props || $$self.$$.bound[$$self.$$.props["name"]])) {
      console.warn("<SkinCareCartItem> was created without expected prop 'name'");
    }
    if (cover === void 0 && !("cover" in $$props || $$self.$$.bound[$$self.$$.props["cover"]])) {
      console.warn("<SkinCareCartItem> was created without expected prop 'cover'");
    }
    if (price === void 0 && !("price" in $$props || $$self.$$.bound[$$self.$$.props["price"]])) {
      console.warn("<SkinCareCartItem> was created without expected prop 'price'");
    }
    if (products2 === void 0 && !("products" in $$props || $$self.$$.bound[$$self.$$.props["products"]])) {
      console.warn("<SkinCareCartItem> was created without expected prop 'products'");
    }
  });
  const writable_props = ["brand", "name", "cover", "price", "products", "cartButtonText"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SkinCareCartItem> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => dispatch("clear");
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      info = $$value;
      $$invalidate(6, info);
    });
  }
  const click_handler_1 = () => analytics.filter_info_clicked({ filter_name: name2 });
  const click_handler_3 = () => dispatch("cart");
  const close_handler = () => analytics.filter_info_closed({ filter_name: name2 });
  $$self.$$set = ($$props2) => {
    if ("brand" in $$props2)
      $$invalidate(0, brand = $$props2.brand);
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("price" in $$props2)
      $$invalidate(3, price = $$props2.price);
    if ("products" in $$props2)
      $$invalidate(4, products2 = $$props2.products);
    if ("cartButtonText" in $$props2)
      $$invalidate(5, cartButtonText = $$props2.cartButtonText);
  };
  $$self.$capture_state = () => ({
    Button,
    createEventDispatcher,
    analytics,
    Products: Products$1,
    Details,
    Icon,
    IconButton,
    Price,
    LookCover,
    brand,
    name: name2,
    cover,
    price,
    products: products2,
    cartButtonText,
    dispatch,
    info
  });
  $$self.$inject_state = ($$props2) => {
    if ("brand" in $$props2)
      $$invalidate(0, brand = $$props2.brand);
    if ("name" in $$props2)
      $$invalidate(1, name2 = $$props2.name);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("price" in $$props2)
      $$invalidate(3, price = $$props2.price);
    if ("products" in $$props2)
      $$invalidate(4, products2 = $$props2.products);
    if ("cartButtonText" in $$props2)
      $$invalidate(5, cartButtonText = $$props2.cartButtonText);
    if ("info" in $$props2)
      $$invalidate(6, info = $$props2.info);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    brand,
    name2,
    cover,
    price,
    products2,
    cartButtonText,
    info,
    dispatch,
    click_handler,
    button_binding,
    click_handler_1,
    click_handler_3,
    close_handler
  ];
}
class SkinCareCartItem extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$k,
      create_fragment$k,
      safe_not_equal,
      {
        brand: 0,
        name: 1,
        cover: 2,
        price: 3,
        products: 4,
        cartButtonText: 5
      },
      add_css$h
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SkinCareCartItem",
      options,
      id: create_fragment$k.name
    });
  }
  get brand() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set brand(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get name() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cover() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cover(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get price() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set price(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get products() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set products(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cartButtonText() {
    throw new Error("<SkinCareCartItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cartButtonText(value) {
    throw new Error("<SkinCareCartItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$h = "src/lib/components/Cart/Cart.svelte";
function add_css$g(target) {
  append_styles(target, "svelte-1imwu1y", 'h2.svelte-1imwu1y.svelte-1imwu1y{display:inline-block;flex-shrink:0;padding-top:12px;padding-bottom:12px;font-size:16px;line-height:24px}@media(min-width: 768px){h2.svelte-1imwu1y.svelte-1imwu1y{padding-top:16px;padding-bottom:16px}}@media(min-width: 1024px){h2.svelte-1imwu1y.svelte-1imwu1y{padding-top:12px;padding-bottom:12px}}button.svelte-1imwu1y.svelte-1imwu1y{margin-left:auto;margin-right:44px;font-weight:700}@media(min-width: 1024px){button.svelte-1imwu1y.svelte-1imwu1y{margin-right:0px}}ul.svelte-1imwu1y.svelte-1imwu1y{margin-bottom:auto;display:flex;min-height:0px;flex-grow:1;flex-direction:column;gap:16px;overflow-y:auto;overflow-x:hidden}@media(min-width: 768px){ul.svelte-1imwu1y.svelte-1imwu1y{max-height:224px}}@media(min-width: 1024px){ul.svelte-1imwu1y.svelte-1imwu1y{height:224px;max-height:none}}ul.svelte-1imwu1y.svelte-1imwu1y{margin-right:-4px}@media(min-width: 1024px){ul.svelte-1imwu1y.svelte-1imwu1y{padding-right:4px}}.btn-wrap.svelte-1imwu1y.svelte-1imwu1y{position:relative;margin-top:8px;display:flex;flex-shrink:0;gap:8px}.btn-wrap.svelte-1imwu1y>button{width:100%;white-space:nowrap}div[slot="tint-disclosure-button"].svelte-1imwu1y.svelte-1imwu1y{margin-left:auto;display:flex;align-items:center}div[slot="tint-disclosure-button"].svelte-1imwu1y>button.svelte-1imwu1y{margin-right:0px}.btn-wrap.svelte-1imwu1y>.notification{position:absolute;top:-8px;left:50%;--tw-translate-y:-100%;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.skin-care-mobile.svelte-1imwu1y.svelte-1imwu1y{position:absolute;bottom:0px;left:0px;display:flex;height:64px;width:100%;align-items:center;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:16px;--tw-shadow:0 -4px 24px 0 rgba(0,0,0,0.15);--tw-shadow-colored:0 -4px 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.skin-care-mobile.svelte-1imwu1y article .cover{z-index:10;height:48px;width:48px}.skin-care-mobile.svelte-1imwu1y article .items{margin-top:0px}.skin-care-mobile.svelte-1imwu1y article > button{top:-2px;left:-8px}');
}
function get_each_context$6(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[51] = list[i];
  return child_ctx;
}
function create_if_block_5$3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_6$2, create_if_block_7$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*appliedLook*/
      ctx2[1]
    )
      return 0;
    if (
      /*items*/
      ctx2[0].length
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr_dev(div, "class", "skin-care-mobile svelte-1imwu1y");
      add_location(div, file$h, 44, 2, 1816);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(portal.call(null, div, "best-match"));
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        } else {
          if_block = null;
        }
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
        detach_dev(div);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5$3.name,
    type: "if",
    source: "(44:0) {#if isSkinCare && isMobile && (appliedLook || items.length)}",
    ctx
  });
  return block;
}
function create_if_block_7$1(ctx) {
  let skincarecartitem;
  let current;
  const skincarecartitem_spread_levels = [
    /*items*/
    ctx[0][0],
    {
      cartButtonText: (
        /*inCartCount*/
        ctx[4] ? (
          /*$language*/
          ctx[10].goToCart
        ) : (
          /*$language*/
          ctx[10].addToCart
        )
      )
    }
  ];
  let skincarecartitem_props = {};
  for (let i = 0; i < skincarecartitem_spread_levels.length; i += 1) {
    skincarecartitem_props = assign(skincarecartitem_props, skincarecartitem_spread_levels[i]);
  }
  skincarecartitem = new SkinCareCartItem({
    props: skincarecartitem_props,
    $$inline: true
  });
  skincarecartitem.$on(
    "cart",
    /*cart_handler_1*/
    ctx[21]
  );
  skincarecartitem.$on(
    "clear",
    /*clear_handler_1*/
    ctx[22]
  );
  const block = {
    c: function create() {
      create_component(skincarecartitem.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(skincarecartitem, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const skincarecartitem_changes = dirty[0] & /*items, inCartCount, $language*/
      1041 ? get_spread_update(skincarecartitem_spread_levels, [
        dirty[0] & /*items*/
        1 && get_spread_object(
          /*items*/
          ctx2[0][0]
        ),
        dirty[0] & /*inCartCount, $language*/
        1040 && {
          cartButtonText: (
            /*inCartCount*/
            ctx2[4] ? (
              /*$language*/
              ctx2[10].goToCart
            ) : (
              /*$language*/
              ctx2[10].addToCart
            )
          )
        }
      ]) : {};
      skincarecartitem.$set(skincarecartitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(skincarecartitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(skincarecartitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(skincarecartitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_7$1.name,
    type: "if",
    source: "(59:27) ",
    ctx
  });
  return block;
}
function create_if_block_6$2(ctx) {
  let skincarecartitem;
  let current;
  const skincarecartitem_spread_levels = [
    /*appliedLook*/
    ctx[1],
    {
      cartButtonText: (
        /*inCartCount*/
        ctx[4] ? (
          /*$language*/
          ctx[10].goToCart
        ) : (
          /*$language*/
          ctx[10].addToCart
        )
      )
    }
  ];
  let skincarecartitem_props = {};
  for (let i = 0; i < skincarecartitem_spread_levels.length; i += 1) {
    skincarecartitem_props = assign(skincarecartitem_props, skincarecartitem_spread_levels[i]);
  }
  skincarecartitem = new SkinCareCartItem({
    props: skincarecartitem_props,
    $$inline: true
  });
  skincarecartitem.$on(
    "cart",
    /*cart_handler*/
    ctx[19]
  );
  skincarecartitem.$on(
    "clear",
    /*clear_handler*/
    ctx[20]
  );
  const block = {
    c: function create() {
      create_component(skincarecartitem.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(skincarecartitem, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const skincarecartitem_changes = dirty[0] & /*appliedLook, inCartCount, $language*/
      1042 ? get_spread_update(skincarecartitem_spread_levels, [
        dirty[0] & /*appliedLook*/
        2 && get_spread_object(
          /*appliedLook*/
          ctx2[1]
        ),
        dirty[0] & /*inCartCount, $language*/
        1040 && {
          cartButtonText: (
            /*inCartCount*/
            ctx2[4] ? (
              /*$language*/
              ctx2[10].goToCart
            ) : (
              /*$language*/
              ctx2[10].addToCart
            )
          )
        }
      ]) : {};
      skincarecartitem.$set(skincarecartitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(skincarecartitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(skincarecartitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(skincarecartitem, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_6$2.name,
    type: "if",
    source: "(46:4) {#if appliedLook}",
    ctx
  });
  return block;
}
function create_else_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*items*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  let each_1_else = null;
  if (!each_value.length) {
    each_1_else = create_else_block_1$1(ctx);
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      if (each_1_else) {
        each_1_else.c();
      }
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      if (each_1_else) {
        each_1_else.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*items, productsLinks, isAddToCartEnabled, isProductSwatchesEnabled, dispatch, notification, $language*/
      48193 | dirty[1] & /*close*/
      524288) {
        each_value = /*items*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$6(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$6(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
        if (!each_value.length && each_1_else) {
          each_1_else.p(ctx2, dirty);
        } else if (!each_value.length) {
          each_1_else = create_else_block_1$1(ctx2);
          each_1_else.c();
          each_1_else.m(each_1_anchor.parentNode, each_1_anchor);
        } else if (each_1_else) {
          each_1_else.d(1);
          each_1_else = null;
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
      if (each_1_else)
        each_1_else.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$3.name,
    type: "else",
    source: "(108:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_3$4, create_if_block_4$3];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*appliedLook*/
      ctx2[1]
    )
      return 0;
    if (
      /*items*/
      ctx2[0].length
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type_2(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
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
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$5.name,
    type: "if",
    source: "(95:4) {#if isSkinCare}",
    ctx
  });
  return block;
}
function create_else_block_1$1(ctx) {
  let t_value = (
    /*close*/
    (ctx[50](), "")
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[1] & /*close*/
      524288 && t_value !== (t_value = /*close*/
      (ctx2[50](), "")))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1$1.name,
    type: "else",
    source: "(137:6) {:else}",
    ctx
  });
  return block;
}
function create_each_block$6(ctx) {
  let li;
  let product;
  let t;
  let current;
  const product_spread_levels = [
    /*item*/
    ctx[51],
    { productsLinks: (
      /*productsLinks*/
      ctx[11]
    ) },
    { controls: (
      /*isAddToCartEnabled*/
      ctx[12]
    ) },
    {
      swatchesEnabled: (
        /*isProductSwatchesEnabled*/
        ctx[13]
      )
    }
  ];
  function add_handler() {
    return (
      /*add_handler*/
      ctx[33](
        /*item*/
        ctx[51]
      )
    );
  }
  function remove_handler() {
    return (
      /*remove_handler*/
      ctx[36](
        /*item*/
        ctx[51]
      )
    );
  }
  function show_handler() {
    return (
      /*show_handler*/
      ctx[37](
        /*item*/
        ctx[51]
      )
    );
  }
  function hide_handler() {
    return (
      /*hide_handler*/
      ctx[40](
        /*item*/
        ctx[51]
      )
    );
  }
  function swatch_handler(...args) {
    return (
      /*swatch_handler*/
      ctx[43](
        /*item*/
        ctx[51],
        ...args
      )
    );
  }
  function clear_handler_4() {
    return (
      /*clear_handler_4*/
      ctx[44](
        /*item*/
        ctx[51]
      )
    );
  }
  let product_props = {};
  for (let i = 0; i < product_spread_levels.length; i += 1) {
    product_props = assign(product_props, product_spread_levels[i]);
  }
  product = new Product$1({ props: product_props, $$inline: true });
  product.$on("add", add_handler);
  product.$on(
    "add",
    /*add_handler_1*/
    ctx[34]
  );
  product.$on(
    "add",
    /*add_handler_2*/
    ctx[35]
  );
  product.$on("remove", remove_handler);
  product.$on("show", show_handler);
  product.$on(
    "show",
    /*show_handler_1*/
    ctx[38]
  );
  product.$on(
    "show",
    /*show_handler_2*/
    ctx[39]
  );
  product.$on("hide", hide_handler);
  product.$on(
    "hide",
    /*hide_handler_1*/
    ctx[41]
  );
  product.$on(
    "hide",
    /*hide_handler_2*/
    ctx[42]
  );
  product.$on("swatch", swatch_handler);
  product.$on("clear", clear_handler_4);
  product.$on(
    "clear",
    /*clear_handler_5*/
    ctx[45]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(product.$$.fragment);
      t = space();
      add_location(li, file$h, 109, 8, 3813);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(product, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const product_changes = dirty[0] & /*items, productsLinks, isAddToCartEnabled, isProductSwatchesEnabled*/
      14337 ? get_spread_update(product_spread_levels, [
        dirty[0] & /*items*/
        1 && get_spread_object(
          /*item*/
          ctx[51]
        ),
        dirty[0] & /*productsLinks*/
        2048 && { productsLinks: (
          /*productsLinks*/
          ctx[11]
        ) },
        dirty[0] & /*isAddToCartEnabled*/
        4096 && { controls: (
          /*isAddToCartEnabled*/
          ctx[12]
        ) },
        dirty[0] & /*isProductSwatchesEnabled*/
        8192 && {
          swatchesEnabled: (
            /*isProductSwatchesEnabled*/
            ctx[13]
          )
        }
      ]) : {};
      product.$set(product_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(product.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(product.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(product);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$6.name,
    type: "each",
    source: "(109:6) {#each items as item}",
    ctx
  });
  return block;
}
function create_if_block_4$3(ctx) {
  let li;
  let skincarecartitem;
  let current;
  const skincarecartitem_spread_levels = [
    /*items*/
    ctx[0][0]
  ];
  let skincarecartitem_props = {};
  for (let i = 0; i < skincarecartitem_spread_levels.length; i += 1) {
    skincarecartitem_props = assign(skincarecartitem_props, skincarecartitem_spread_levels[i]);
  }
  skincarecartitem = new SkinCareCartItem({
    props: skincarecartitem_props,
    $$inline: true
  });
  skincarecartitem.$on(
    "clear",
    /*clear_handler_3*/
    ctx[32]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(skincarecartitem.$$.fragment);
      add_location(li, file$h, 103, 8, 3643);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(skincarecartitem, li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const skincarecartitem_changes = dirty[0] & /*items*/
      1 ? get_spread_update(skincarecartitem_spread_levels, [get_spread_object(
        /*items*/
        ctx2[0][0]
      )]) : {};
      skincarecartitem.$set(skincarecartitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(skincarecartitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(skincarecartitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(skincarecartitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$3.name,
    type: "if",
    source: "(103:29) ",
    ctx
  });
  return block;
}
function create_if_block_3$4(ctx) {
  let li;
  let skincarecartitem;
  let current;
  const skincarecartitem_spread_levels = [
    /*appliedLook*/
    ctx[1]
  ];
  let skincarecartitem_props = {};
  for (let i = 0; i < skincarecartitem_spread_levels.length; i += 1) {
    skincarecartitem_props = assign(skincarecartitem_props, skincarecartitem_spread_levels[i]);
  }
  skincarecartitem = new SkinCareCartItem({
    props: skincarecartitem_props,
    $$inline: true
  });
  skincarecartitem.$on(
    "clear",
    /*clear_handler_2*/
    ctx[31]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(skincarecartitem.$$.fragment);
      add_location(li, file$h, 96, 8, 3432);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(skincarecartitem, li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const skincarecartitem_changes = dirty[0] & /*appliedLook*/
      2 ? get_spread_update(skincarecartitem_spread_levels, [get_spread_object(
        /*appliedLook*/
        ctx2[1]
      )]) : {};
      skincarecartitem.$set(skincarecartitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(skincarecartitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(skincarecartitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(skincarecartitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$4.name,
    type: "if",
    source: "(96:6) {#if appliedLook}",
    ctx
  });
  return block;
}
function create_default_slot_2$1(ctx) {
  let ul;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_2$5, create_else_block$3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*isSkinCare*/
      ctx2[7]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      ul = element("ul");
      if_block.c();
      attr_dev(ul, "data-qa", "tint-cart-items");
      attr_dev(ul, "class", "svelte-1imwu1y");
      add_location(ul, file$h, 93, 2, 3348);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, ul, anchor);
      if_blocks[current_block_type_index].m(ul, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
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
        if_block.m(ul, null);
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
        detach_dev(ul);
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2$1.name,
    type: "slot",
    source: "(76:0) <CartLayout class={classes} count={allCount} {disabled} bind:open let:close>",
    ctx
  });
  return block;
}
function create_title_slot(ctx) {
  let h2;
  let t0_value = (
    /*$language*/
    ctx[10].cartApplied + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*isCountableCart*/
    ctx[14] && !/*isSkinCare*/
    ctx[7] ? `${/*$language*/
    ctx[10].products} (${/*allCount*/
    ctx[3]})` : `${/*$language*/
    ctx[10].product}`
  );
  let t2;
  const block = {
    c: function create() {
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      attr_dev(h2, "slot", "title");
      attr_dev(h2, "class", "svelte-1imwu1y");
      add_location(h2, file$h, 76, 2, 2789);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, h2, anchor);
      append_dev(h2, t0);
      append_dev(h2, t1);
      append_dev(h2, t2);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$language*/
      1024 && t0_value !== (t0_value = /*$language*/
      ctx2[10].cartApplied + ""))
        set_data_dev(t0, t0_value);
      if (dirty[0] & /*isSkinCare, $language, allCount*/
      1160 && t2_value !== (t2_value = /*isCountableCart*/
      ctx2[14] && !/*isSkinCare*/
      ctx2[7] ? `${/*$language*/
      ctx2[10].products} (${/*allCount*/
      ctx2[3]})` : `${/*$language*/
      ctx2[10].product}`))
        set_data_dev(t2, t2_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_title_slot.name,
    type: "slot",
    source: "(77:2) ",
    ctx
  });
  return block;
}
function create_if_block_1$7(ctx) {
  let button;
  let span;
  let t_value = (
    /*isCountableCart*/
    (ctx[14] ? (
      /*$language*/
      ctx[10].clearAll
    ) : capitalize(
      /*$language*/
      ctx[10].clear
    )) + ""
  );
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      button = element("button");
      span = element("span");
      t = text(t_value);
      add_location(span, file$h, 88, 8, 3228);
      attr_dev(button, "class", "svelte-1imwu1y");
      add_location(button, file$h, 87, 6, 3165);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, span);
      append_dev(span, t);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler_5*/
          ctx[30],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$language*/
      1024 && t_value !== (t_value = /*isCountableCart*/
      (ctx2[14] ? (
        /*$language*/
        ctx2[10].clearAll
      ) : capitalize(
        /*$language*/
        ctx2[10].clear
      )) + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$7.name,
    type: "if",
    source: "(87:4) {#if allCount > 0}",
    ctx
  });
  return block;
}
function create_tint_disclosure_button_slot(ctx) {
  let div;
  let if_block = (
    /*allCount*/
    ctx[3] > 0 && create_if_block_1$7(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr_dev(div, "slot", "tint-disclosure-button");
      attr_dev(div, "class", "svelte-1imwu1y");
      add_location(div, file$h, 85, 2, 3100);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p: function update(ctx2, dirty) {
      if (
        /*allCount*/
        ctx2[3] > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$7(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_tint_disclosure_button_slot.name,
    type: "slot",
    source: "(86:2) ",
    ctx
  });
  return block;
}
function create_if_block$b(ctx) {
  let div;
  let notification_1;
  let t0;
  let button0;
  let t1;
  let button1;
  let current;
  let notification_1_props = { class: "notification" };
  notification_1 = new Notification({
    props: notification_1_props,
    $$inline: true
  });
  ctx[23](notification_1);
  let button0_props = {
    disabled: (
      /*inCartCount*/
      ctx[4] === 0
    ),
    variant: "secondary",
    class: "add",
    size: "base",
    qa: "tint-go-to-cart",
    $$slots: { default: [create_default_slot_1$5] },
    $$scope: { ctx }
  };
  button0 = new Button({ props: button0_props, $$inline: true });
  ctx[24](button0);
  button0.$on(
    "click",
    /*click_handler*/
    ctx[25]
  );
  button1 = new Button({
    props: {
      class: `add ${!/*isAddToCartEnabled*/
      ctx[12] && "disabled"}`,
      size: "base",
      disabled: (
        /*allCount*/
        ctx[3] === /*inCartCount*/
        ctx[4]
      ),
      qa: "tint-add-all-to-cart",
      $$slots: { default: [create_default_slot$b] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button1.$on(
    "click",
    /*click_handler_1*/
    ctx[26]
  );
  button1.$on(
    "click",
    /*click_handler_2*/
    ctx[27]
  );
  button1.$on(
    "click",
    /*click_handler_3*/
    ctx[28]
  );
  button1.$on(
    "click",
    /*click_handler_4*/
    ctx[29]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(notification_1.$$.fragment);
      t0 = space();
      create_component(button0.$$.fragment);
      t1 = space();
      create_component(button1.$$.fragment);
      attr_dev(div, "class", "btn-wrap svelte-1imwu1y");
      add_location(div, file$h, 144, 6, 5272);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(notification_1, div, null);
      append_dev(div, t0);
      mount_component(button0, div, null);
      append_dev(div, t1);
      mount_component(button1, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const notification_1_changes = {};
      notification_1.$set(notification_1_changes);
      const button0_changes = {};
      if (dirty[0] & /*inCartCount*/
      16)
        button0_changes.disabled = /*inCartCount*/
        ctx2[4] === 0;
      if (dirty[0] & /*$language*/
      1024 | dirty[1] & /*$$scope*/
      8388608) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty[0] & /*allCount, inCartCount*/
      24)
        button1_changes.disabled = /*allCount*/
        ctx2[3] === /*inCartCount*/
        ctx2[4];
      if (dirty[0] & /*$language*/
      1024 | dirty[1] & /*$$scope*/
      8388608) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(notification_1.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(notification_1.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[23](null);
      destroy_component(notification_1);
      ctx[24](null);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$b.name,
    type: "if",
    source: "(144:4) {#if !productsLinks}",
    ctx
  });
  return block;
}
function create_default_slot_1$5(ctx) {
  let t_value = (
    /*$language*/
    ctx[10].goToCart + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$language*/
      1024 && t_value !== (t_value = /*$language*/
      ctx2[10].goToCart + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$5.name,
    type: "slot",
    source: '(147:8) <Button           disabled={inCartCount === 0}           variant=\\"secondary\\"           class=\\"add\\"           size=\\"base\\"           bind:this={btn}           on:click={() => dispatch(\\"redirect\\")}           qa=\\"tint-go-to-cart\\">',
    ctx
  });
  return block;
}
function create_default_slot$b(ctx) {
  let t_value = (
    /*$language*/
    ctx[10].addAllToCart + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$language*/
      1024 && t_value !== (t_value = /*$language*/
      ctx2[10].addAllToCart + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$b.name,
    type: "slot",
    source: '(156:8) <Button           class={`add ${!isAddToCartEnabled && \\"disabled\\"}`}           size=\\"base\\"           disabled={allCount === inCartCount}           on:click={() =>             isAddToCartEnabled &&             dispatch(               \\"add\\",               items.filter((i) => !i.cart)             )}           on:click={() => isAddToCartEnabled && notification.success($language.productAddedToCart)}           on:click={() => showAd({ flow: \\"Cart add\\" })}           on:click={() => analytics.add_to_cart_clicked()}           qa=\\"tint-add-all-to-cart\\"         >',
    ctx
  });
  return block;
}
function create_button_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !/*productsLinks*/
  ctx[11] && create_if_block$b(ctx);
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (!/*productsLinks*/
      ctx2[11])
        if_block.p(ctx2, dirty);
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
    id: create_button_slot.name,
    type: "slot",
    source: '(143:2) <svelte:fragment slot=\\"button\\">',
    ctx
  });
  return block;
}
function create_fragment$j(ctx) {
  let t;
  let cartlayout;
  let updating_open;
  let current;
  let if_block = (
    /*isSkinCare*/
    ctx[7] && /*isMobile*/
    ctx[16] && /*appliedLook*/
    (ctx[1] || /*items*/
    ctx[0].length) && create_if_block_5$3(ctx)
  );
  function cartlayout_open_binding(value) {
    ctx[46](value);
  }
  let cartlayout_props = {
    class: (
      /*classes*/
      ctx[9]
    ),
    count: (
      /*allCount*/
      ctx[3]
    ),
    disabled: (
      /*disabled*/
      ctx[8]
    ),
    $$slots: {
      button: [
        create_button_slot,
        ({ close }) => ({ 50: close }),
        ({ close }) => [0, close ? 524288 : 0]
      ],
      "tint-disclosure-button": [
        create_tint_disclosure_button_slot,
        ({ close }) => ({ 50: close }),
        ({ close }) => [0, close ? 524288 : 0]
      ],
      title: [
        create_title_slot,
        ({ close }) => ({ 50: close }),
        ({ close }) => [0, close ? 524288 : 0]
      ],
      default: [
        create_default_slot_2$1,
        ({ close }) => ({ 50: close }),
        ({ close }) => [0, close ? 524288 : 0]
      ]
    },
    $$scope: { ctx }
  };
  if (
    /*open*/
    ctx[2] !== void 0
  ) {
    cartlayout_props.open = /*open*/
    ctx[2];
  }
  cartlayout = new CartLayout({ props: cartlayout_props, $$inline: true });
  binding_callbacks.push(() => bind(cartlayout, "open", cartlayout_open_binding));
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      t = space();
      create_component(cartlayout.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, t, anchor);
      mount_component(cartlayout, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*isSkinCare*/
        ctx2[7] && /*isMobile*/
        ctx2[16] && /*appliedLook*/
        (ctx2[1] || /*items*/
        ctx2[0].length)
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*isSkinCare, appliedLook, items*/
          131) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_5$3(ctx2);
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
      const cartlayout_changes = {};
      if (dirty[0] & /*classes*/
      512)
        cartlayout_changes.class = /*classes*/
        ctx2[9];
      if (dirty[0] & /*allCount*/
      8)
        cartlayout_changes.count = /*allCount*/
        ctx2[3];
      if (dirty[0] & /*disabled*/
      256)
        cartlayout_changes.disabled = /*disabled*/
        ctx2[8];
      if (dirty[0] & /*allCount, inCartCount, items, notification, $language, btn, isSkinCare, appliedLook*/
      1275 | dirty[1] & /*$$scope, close*/
      8912896) {
        cartlayout_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_open && dirty[0] & /*open*/
      4) {
        updating_open = true;
        cartlayout_changes.open = /*open*/
        ctx2[2];
        add_flush_callback(() => updating_open = false);
      }
      cartlayout.$set(cartlayout_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(cartlayout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(cartlayout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(t);
      destroy_component(cartlayout, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$j.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$j($$self, $$props, $$invalidate) {
  let classes;
  let allCount;
  let inCartCount;
  let notInCartCount;
  let disabled;
  let isSkinCare;
  const omit_props_names = ["items", "appliedLook", "autoopen"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $routerPath;
  let $language;
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(18, $routerPath = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(10, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cart", slots, []);
  let { items } = $$props;
  let { appliedLook } = $$props;
  let { autoopen = true } = $$props;
  let open = false;
  let btn;
  let notification;
  const ctx = getContext$1();
  const productsLinks = ctx.productsLinks;
  const isAddToCartEnabled = true;
  const isProductSwatchesEnabled = true;
  const isCountableCart = true;
  const dispatch = createEventDispatcher();
  const isMobile = isMobileDevice();
  $$self.$$.on_mount.push(function() {
    if (items === void 0 && !("items" in $$props || $$self.$$.bound[$$self.$$.props["items"]])) {
      console.warn("<Cart> was created without expected prop 'items'");
    }
    if (appliedLook === void 0 && !("appliedLook" in $$props || $$self.$$.bound[$$self.$$.props["appliedLook"]])) {
      console.warn("<Cart> was created without expected prop 'appliedLook'");
    }
  });
  const cart_handler = () => {
    var _a;
    if (inCartCount) {
      dispatch("redirect");
    } else {
      dispatch("add", (_a = appliedLook == null ? void 0 : appliedLook.products) == null ? void 0 : _a.products);
    }
  };
  const clear_handler = () => {
    var _a;
    return dispatch("removeAll", (_a = appliedLook == null ? void 0 : appliedLook.products) == null ? void 0 : _a.products);
  };
  const cart_handler_1 = () => {
    if (inCartCount) {
      dispatch("redirect");
    } else {
      dispatch("add", items);
    }
  };
  const clear_handler_1 = () => dispatch("removeAll", items);
  function notification_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      notification = $$value;
      $$invalidate(6, notification);
    });
  }
  function button0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      btn = $$value;
      $$invalidate(5, btn);
    });
  }
  const click_handler = () => dispatch("redirect");
  const click_handler_1 = () => isAddToCartEnabled && dispatch("add", items.filter((i) => !i.cart));
  const click_handler_22 = () => isAddToCartEnabled && notification.success($language.productAddedToCart);
  const click_handler_3 = () => showAd({ flow: "Cart add" });
  const click_handler_4 = () => analytics.add_to_cart_clicked();
  const click_handler_5 = () => dispatch("removeAll", items);
  const clear_handler_2 = () => {
    var _a;
    return dispatch("removeAll", (_a = appliedLook == null ? void 0 : appliedLook.products) == null ? void 0 : _a.products);
  };
  const clear_handler_3 = () => dispatch("removeAll", items);
  const add_handler = (item) => dispatch("add", [item]);
  const add_handler_1 = () => notification.success($language.productAddedToCart);
  const add_handler_2 = () => showAd({ flow: "Cart add" });
  const remove_handler = (item) => dispatch("remove", item);
  const show_handler = (item) => dispatch("show", item);
  const show_handler_1 = () => analytics.photo_show_hide_product();
  const show_handler_2 = async () => await skinCare.show();
  const hide_handler = (item) => dispatch("hide", item);
  const hide_handler_1 = () => analytics.photo_show_hide_product();
  const hide_handler_2 = async () => await skinCare.hide();
  const swatch_handler = (item, event) => (
    // no idea how to fix the svelte-check warning since the code below seems legit
    // @ts-ignore: Argument of type '{ product: P; swatch: SwatchItem; }' is not assignable to parameter of type '{ product: P; swatch: P["swatches"][number]; }'.
    dispatch("swatch", { product: item, swatch: event.detail })
  );
  const clear_handler_4 = (item) => dispatch("clear", item);
  const clear_handler_5 = () => analytics.photo_show_delete_product();
  function cartlayout_open_binding(value) {
    open = value;
    $$invalidate(2, open), $$invalidate(17, autoopen), $$invalidate(3, allCount), $$invalidate(0, items);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(49, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("items" in $$new_props)
      $$invalidate(0, items = $$new_props.items);
    if ("appliedLook" in $$new_props)
      $$invalidate(1, appliedLook = $$new_props.appliedLook);
    if ("autoopen" in $$new_props)
      $$invalidate(17, autoopen = $$new_props.autoopen);
  };
  $$self.$capture_state = () => ({
    capitalize,
    createEventDispatcher,
    analytics,
    Button,
    Notification,
    cx,
    Paths,
    routerPath,
    isMobileDevice,
    portal,
    language,
    getContext: getContext$1,
    skinCare,
    showAd,
    CartLayout,
    Product: Product$1,
    SkinCareCartItem,
    items,
    appliedLook,
    autoopen,
    open,
    btn,
    notification,
    ctx,
    productsLinks,
    isAddToCartEnabled,
    isProductSwatchesEnabled,
    isCountableCart,
    dispatch,
    isMobile,
    isSkinCare,
    allCount,
    disabled,
    inCartCount,
    notInCartCount,
    classes,
    $routerPath,
    $language
  });
  $$self.$inject_state = ($$new_props) => {
    if ("items" in $$props)
      $$invalidate(0, items = $$new_props.items);
    if ("appliedLook" in $$props)
      $$invalidate(1, appliedLook = $$new_props.appliedLook);
    if ("autoopen" in $$props)
      $$invalidate(17, autoopen = $$new_props.autoopen);
    if ("open" in $$props)
      $$invalidate(2, open = $$new_props.open);
    if ("btn" in $$props)
      $$invalidate(5, btn = $$new_props.btn);
    if ("notification" in $$props)
      $$invalidate(6, notification = $$new_props.notification);
    if ("isSkinCare" in $$props)
      $$invalidate(7, isSkinCare = $$new_props.isSkinCare);
    if ("allCount" in $$props)
      $$invalidate(3, allCount = $$new_props.allCount);
    if ("disabled" in $$props)
      $$invalidate(8, disabled = $$new_props.disabled);
    if ("inCartCount" in $$props)
      $$invalidate(4, inCartCount = $$new_props.inCartCount);
    if ("notInCartCount" in $$props)
      notInCartCount = $$new_props.notInCartCount;
    if ("classes" in $$props)
      $$invalidate(9, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(9, classes = cx("tint-cart", $$restProps.class));
    if ($$self.$$.dirty[0] & /*items*/
    1) {
      $$invalidate(3, allCount = items.length);
    }
    if ($$self.$$.dirty[0] & /*items*/
    1) {
      $$invalidate(4, inCartCount = items.reduce((a, i) => a + (i.cart ? 1 : 0), 0));
    }
    if ($$self.$$.dirty[0] & /*allCount, inCartCount*/
    24) {
      notInCartCount = allCount - inCartCount;
    }
    if ($$self.$$.dirty[0] & /*allCount*/
    8) {
      $$invalidate(8, disabled = allCount === 0);
    }
    if ($$self.$$.dirty[0] & /*autoopen, allCount*/
    131080) {
      autoopen && $$invalidate(2, open = allCount > 0);
    }
    if ($$self.$$.dirty[0] & /*autoopen, allCount, open*/
    131084) {
      autoopen && allCount > 0 && !open && dispatch("force-close");
    }
    if ($$self.$$.dirty[0] & /*autoopen, allCount, open*/
    131084) {
      !autoopen && allCount > 0 && (open ? analytics.photo_show_clicked() : analytics.photo_applied_products_hide());
    }
    if ($$self.$$.dirty[0] & /*$routerPath*/
    262144) {
      $$invalidate(7, isSkinCare = $routerPath.current === Paths.SkinCare);
    }
  };
  return [
    items,
    appliedLook,
    open,
    allCount,
    inCartCount,
    btn,
    notification,
    isSkinCare,
    disabled,
    classes,
    $language,
    productsLinks,
    isAddToCartEnabled,
    isProductSwatchesEnabled,
    isCountableCart,
    dispatch,
    isMobile,
    autoopen,
    $routerPath,
    cart_handler,
    clear_handler,
    cart_handler_1,
    clear_handler_1,
    notification_1_binding,
    button0_binding,
    click_handler,
    click_handler_1,
    click_handler_22,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    clear_handler_2,
    clear_handler_3,
    add_handler,
    add_handler_1,
    add_handler_2,
    remove_handler,
    show_handler,
    show_handler_1,
    show_handler_2,
    hide_handler,
    hide_handler_1,
    hide_handler_2,
    swatch_handler,
    clear_handler_4,
    clear_handler_5,
    cartlayout_open_binding
  ];
}
class Cart extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { items: 0, appliedLook: 1, autoopen: 17 }, add_css$g, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cart",
      options,
      id: create_fragment$j.name
    });
  }
  get items() {
    throw new Error("<Cart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Cart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get appliedLook() {
    throw new Error("<Cart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set appliedLook(value) {
    throw new Error("<Cart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get autoopen() {
    throw new Error("<Cart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set autoopen(value) {
    throw new Error("<Cart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$g = "src/lib/components/Looks/Look.svelte";
function add_css$f(target) {
  append_styles(target, "svelte-1b81d61", ".tint-look.svelte-1b81d61.svelte-1b81d61{display:flex;width:100%;flex-direction:column;text-align:center;font-size:12px;line-height:16px\n}@media(min-width: 768px){.tint-look.svelte-1b81d61.svelte-1b81d61{font-size:14px;line-height:20px\n    }}.cover.svelte-1b81d61.svelte-1b81d61{position:relative;margin-bottom:8px;display:flex;cursor:pointer;overflow:hidden;border-radius:8px;--tw-shadow:inset 0 0 0 1px var(--tint-item-border);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:box-shadow;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.cover.svelte-1b81d61.svelte-1b81d61:hover{--tw-shadow:inset 0 0 0 1px var(--tint-item-border-hover);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.cover.active.svelte-1b81d61.svelte-1b81d61{--tw-shadow:inset 0 0 0 1.5px var(--tint-item-border-applied);--tw-shadow-colored:inset 0 0 0 1.5px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}@media(min-width: 1024px){.cover.svelte-1b81d61:not(:hover) .info.svelte-1b81d61{opacity:0\n    }}.cover.svelte-1b81d61 .applied-badge.svelte-1b81d61{position:absolute;top:4px;right:4px;z-index:9;display:flex;align-items:center;justify-content:center;border-radius:var(--tint-item-badge-radius);background-color:var(--tint-item-badge-applied);padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;font-size:12px;line-height:16px;font-weight:700;color:var(--tint-text-light)\n}@media(min-width: 768px){.cover.svelte-1b81d61 .applied-badge.svelte-1b81d61{top:8px;right:8px\n    }}.cover.svelte-1b81d61.svelte-1b81d61:not(.active)::after{--tw-translate-y:calc(calc(100% + 8px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}label.svelte-1b81d61.svelte-1b81d61{position:relative;display:inline-block;cursor:pointer;border-radius:inherit;width:100%\n}.info.svelte-1b81d61.svelte-1b81d61{position:absolute;top:4px;right:4px;display:flex;height:24px;width:24px;align-items:center;justify-content:center;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;color:var(--tint-text-light);transition-property:background-color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 768px){.info.svelte-1b81d61.svelte-1b81d61{top:8px;right:8px\n    }}.info.svelte-1b81d61.svelte-1b81d61:hover{--tw-bg-opacity:0.3\n}.info.svelte-1b81d61.svelte-1b81d61:active{--tw-bg-opacity:0.4\n}.description.svelte-1b81d61.svelte-1b81d61{display:flex;flex-direction:column\n}@media(min-width: 768px){.description.svelte-1b81d61.svelte-1b81d61{gap:4px\n    }}h3.svelte-1b81d61.svelte-1b81d61{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase\n}h4.svelte-1b81d61.svelte-1b81d61{overflow:hidden;text-overflow:ellipsis;font-weight:400\n}");
}
function create_if_block_2$4(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[7].applied + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "class", "applied-badge svelte-1b81d61");
      add_location(span, file$g, 20, 6, 569);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      128 && t_value !== (t_value = /*$language*/
      ctx2[7].applied + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$4.name,
    type: "if",
    source: "(20:4) {#if active}",
    ctx
  });
  return block;
}
function create_default_slot$a(ctx) {
  let products_1;
  let current;
  products_1 = new Products$1({
    props: { items: (
      /*products*/
      ctx[4].products
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(products_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(products_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const products_1_changes = {};
      if (dirty & /*products*/
      16)
        products_1_changes.items = /*products*/
        ctx2[4].products;
      products_1.$set(products_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$a.name,
    type: "slot",
    source: '(35:4) <Details       on:close={() => analytics.filter_info_closed({ filter_name: name })}       anchor={info}       placement=\\"bottom-left-corner\\"       offset={[-8, 8]}     >',
    ctx
  });
  return block;
}
function create_if_block_1$6(ctx) {
  let h3;
  let t;
  const block = {
    c: function create() {
      h3 = element("h3");
      t = text(
        /*brand*/
        ctx[1]
      );
      attr_dev(h3, "class", "svelte-1b81d61");
      add_location(h3, file$g, 45, 17, 1318);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*brand*/
      2)
        set_data_dev(
          t,
          /*brand*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$6.name,
    type: "if",
    source: "(46:6) {#if brand}",
    ctx
  });
  return block;
}
function create_if_block$a(ctx) {
  let price_1;
  let current;
  const price_1_spread_levels = [
    { as: "b" },
    /*price*/
    ctx[3]
  ];
  let price_1_props = {};
  for (let i = 0; i < price_1_spread_levels.length; i += 1) {
    price_1_props = assign(price_1_props, price_1_spread_levels[i]);
  }
  price_1 = new Price({ props: price_1_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(price_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(price_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const price_1_changes = dirty & /*price*/
      8 ? get_spread_update(price_1_spread_levels, [price_1_spread_levels[0], get_spread_object(
        /*price*/
        ctx2[3]
      )]) : {};
      price_1.$set(price_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(price_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(price_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(price_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$a.name,
    type: "if",
    source: "(49:4) {#if price}",
    ctx
  });
  return block;
}
function create_fragment$i(ctx) {
  let article;
  let div0;
  let t0;
  let label;
  let lookcover;
  let t1;
  let input;
  let t2;
  let button;
  let icon;
  let t3;
  let details;
  let t4;
  let div2;
  let div1;
  let t5;
  let h4;
  let t6;
  let t7;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*active*/
    ctx[5] && create_if_block_2$4(ctx)
  );
  lookcover = new LookCover({
    props: {
      name: (
        /*name*/
        ctx[0]
      ),
      cover: (
        /*cover*/
        ctx[2]
      ),
      products: (
        /*products*/
        ctx[4].products
      )
    },
    $$inline: true
  });
  icon = new Icon({
    props: { variant: "info" },
    $$inline: true
  });
  details = new Details({
    props: {
      anchor: (
        /*info*/
        ctx[6]
      ),
      placement: "bottom-left-corner",
      offset: [-8, 8],
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  details.$on(
    "close",
    /*close_handler*/
    ctx[11]
  );
  let if_block1 = (
    /*brand*/
    ctx[1] && create_if_block_1$6(ctx)
  );
  let if_block2 = (
    /*price*/
    ctx[3] && create_if_block$a(ctx)
  );
  const block = {
    c: function create() {
      article = element("article");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      label = element("label");
      create_component(lookcover.$$.fragment);
      t1 = space();
      input = element("input");
      t2 = space();
      button = element("button");
      create_component(icon.$$.fragment);
      t3 = space();
      create_component(details.$$.fragment);
      t4 = space();
      div2 = element("div");
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t5 = space();
      h4 = element("h4");
      t6 = text(
        /*name*/
        ctx[0]
      );
      t7 = space();
      if (if_block2)
        if_block2.c();
      attr_dev(input, "type", "checkbox");
      input.checked = /*active*/
      ctx[5];
      input.hidden = true;
      add_location(input, file$g, 24, 6, 716);
      attr_dev(label, "class", "svelte-1b81d61");
      add_location(label, file$g, 22, 4, 638);
      attr_dev(button, "class", "info svelte-1b81d61");
      add_location(button, file$g, 26, 4, 792);
      attr_dev(div0, "class", "cover svelte-1b81d61");
      toggle_class(
        div0,
        "active",
        /*active*/
        ctx[5]
      );
      add_location(div0, file$g, 18, 2, 513);
      attr_dev(h4, "class", "svelte-1b81d61");
      add_location(h4, file$g, 46, 6, 1346);
      add_location(div1, file$g, 44, 4, 1295);
      attr_dev(div2, "class", "description svelte-1b81d61");
      add_location(div2, file$g, 43, 2, 1265);
      attr_dev(article, "class", "tint-look svelte-1b81d61");
      attr_dev(article, "data-qa", "tint-look-item");
      add_location(article, file$g, 17, 0, 458);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_dev(div0, t0);
      append_dev(div0, label);
      mount_component(lookcover, label, null);
      append_dev(label, t1);
      append_dev(label, input);
      append_dev(div0, t2);
      append_dev(div0, button);
      mount_component(icon, button, null);
      ctx[9](button);
      append_dev(div0, t3);
      mount_component(details, div0, null);
      append_dev(article, t4);
      append_dev(article, div2);
      append_dev(div2, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append_dev(div1, t5);
      append_dev(div1, h4);
      append_dev(h4, t6);
      append_dev(div2, t7);
      if (if_block2)
        if_block2.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "click",
            /*click_handler*/
            ctx[8],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "click",
            /*click_handler_1*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "click", click_handler_2, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*active*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2$4(ctx2);
          if_block0.c();
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      const lookcover_changes = {};
      if (dirty & /*name*/
      1)
        lookcover_changes.name = /*name*/
        ctx2[0];
      if (dirty & /*cover*/
      4)
        lookcover_changes.cover = /*cover*/
        ctx2[2];
      if (dirty & /*products*/
      16)
        lookcover_changes.products = /*products*/
        ctx2[4].products;
      lookcover.$set(lookcover_changes);
      if (!current || dirty & /*active*/
      32) {
        prop_dev(
          input,
          "checked",
          /*active*/
          ctx2[5]
        );
      }
      const details_changes = {};
      if (dirty & /*info*/
      64)
        details_changes.anchor = /*info*/
        ctx2[6];
      if (dirty & /*$$scope, products*/
      4112) {
        details_changes.$$scope = { dirty, ctx: ctx2 };
      }
      details.$set(details_changes);
      if (!current || dirty & /*active*/
      32) {
        toggle_class(
          div0,
          "active",
          /*active*/
          ctx2[5]
        );
      }
      if (
        /*brand*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$6(ctx2);
          if_block1.c();
          if_block1.m(div1, t5);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & /*name*/
      1)
        set_data_dev(
          t6,
          /*name*/
          ctx2[0]
        );
      if (
        /*price*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*price*/
          8) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$a(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div2, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lookcover.$$.fragment, local);
      transition_in(icon.$$.fragment, local);
      transition_in(details.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(lookcover.$$.fragment, local);
      transition_out(icon.$$.fragment, local);
      transition_out(details.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      if (if_block0)
        if_block0.d();
      destroy_component(lookcover);
      destroy_component(icon);
      ctx[9](null);
      destroy_component(details);
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$i.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const click_handler_2 = (event) => event.stopPropagation();
function instance$i($$self, $$props, $$invalidate) {
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(7, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Look", slots, []);
  let { name: name2 } = $$props;
  let { brand = void 0 } = $$props;
  let { cover } = $$props;
  let { price = void 0 } = $$props;
  let { products: products2 } = $$props;
  let { active = false } = $$props;
  let info;
  $$self.$$.on_mount.push(function() {
    if (name2 === void 0 && !("name" in $$props || $$self.$$.bound[$$self.$$.props["name"]])) {
      console.warn("<Look> was created without expected prop 'name'");
    }
    if (cover === void 0 && !("cover" in $$props || $$self.$$.bound[$$self.$$.props["cover"]])) {
      console.warn("<Look> was created without expected prop 'cover'");
    }
    if (products2 === void 0 && !("products" in $$props || $$self.$$.bound[$$self.$$.props["products"]])) {
      console.warn("<Look> was created without expected prop 'products'");
    }
  });
  const writable_props = ["name", "brand", "cover", "price", "products", "active"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Look> was created with unknown prop '${key2}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      info = $$value;
      $$invalidate(6, info);
    });
  }
  const click_handler_1 = () => analytics.filter_info_clicked({ filter_name: name2 });
  const close_handler = () => analytics.filter_info_closed({ filter_name: name2 });
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("brand" in $$props2)
      $$invalidate(1, brand = $$props2.brand);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("price" in $$props2)
      $$invalidate(3, price = $$props2.price);
    if ("products" in $$props2)
      $$invalidate(4, products2 = $$props2.products);
    if ("active" in $$props2)
      $$invalidate(5, active = $$props2.active);
  };
  $$self.$capture_state = () => ({
    analytics,
    Details,
    Icon,
    Price,
    language,
    LookCover,
    Products: Products$1,
    name: name2,
    brand,
    cover,
    price,
    products: products2,
    active,
    info,
    $language
  });
  $$self.$inject_state = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("brand" in $$props2)
      $$invalidate(1, brand = $$props2.brand);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("price" in $$props2)
      $$invalidate(3, price = $$props2.price);
    if ("products" in $$props2)
      $$invalidate(4, products2 = $$props2.products);
    if ("active" in $$props2)
      $$invalidate(5, active = $$props2.active);
    if ("info" in $$props2)
      $$invalidate(6, info = $$props2.info);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    name2,
    brand,
    cover,
    price,
    products2,
    active,
    info,
    $language,
    click_handler,
    button_binding,
    click_handler_1,
    close_handler
  ];
}
class Look extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$i,
      create_fragment$i,
      safe_not_equal,
      {
        name: 0,
        brand: 1,
        cover: 2,
        price: 3,
        products: 4,
        active: 5
      },
      add_css$f
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Look",
      options,
      id: create_fragment$i.name
    });
  }
  get name() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get brand() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set brand(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cover() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cover(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get price() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set price(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get products() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set products(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<Look>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<Look>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$f = "src/lib/components/Looks/Looks.svelte";
function add_css$e(target) {
  append_styles(target, "svelte-1m5ufvp", "section.svelte-1m5ufvp{display:flex;flex-direction:column;gap:12px}@media(min-width: 768px){section.svelte-1m5ufvp{gap:16px}}section.svelte-1m5ufvp{--item-width-sm:calc((100% - 3 * 8px) / (3 + 0.07));--item-width-md:calc((100% - 4 * 12px) / (4 + 0.07));--item-width-lg:calc((100% - 2 * 12px) / 3)}section.svelte-1m5ufvp .gallery::before,section.svelte-1m5ufvp .gallery::after{visibility:hidden !important}section.svelte-1m5ufvp .gallery > .back,section.svelte-1m5ufvp .gallery > .forward{top:0px;margin-top:calc(var(--item-width-sm) / 2)}@media(min-width: 768px){section.svelte-1m5ufvp .gallery > .back,section.svelte-1m5ufvp .gallery > .forward{margin-top:calc(var(--item-width-md) / 2)}}@media(min-width: 1024px){section.svelte-1m5ufvp .gallery > .back,section.svelte-1m5ufvp .gallery > .forward{margin-top:calc(var(--item-width-lg) / 2)}}section.svelte-1m5ufvp .gallery > .back{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}section.svelte-1m5ufvp .gallery > .forward{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}section.svelte-1m5ufvp .looks{display:flex;gap:8px}@media(min-width: 768px){section.svelte-1m5ufvp .looks{gap:12px}}div.svelte-1m5ufvp{display:flex;flex-direction:column;padding-top:12px}@media(min-width: 768px){div.svelte-1m5ufvp{gap:4px;padding-top:20px}}h2.svelte-1m5ufvp{font-size:16px;line-height:24px}@media(min-width: 768px){h2.svelte-1m5ufvp{font-size:20px;line-height:28px}}@media(min-width: 1280px){h2.svelte-1m5ufvp{font-size:24px;line-height:32px}}li.svelte-1m5ufvp{width:var(--item-width-sm)}@media(min-width: 768px){li.svelte-1m5ufvp{width:var(--item-width-md)}}@media(min-width: 1024px){li.svelte-1m5ufvp{width:var(--item-width-lg)}}");
}
function get_each_context$5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function get_each_context_1$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
const get_filter_slot_changes = (dirty) => ({});
const get_filter_slot_context = (ctx) => ({});
function get_each_context_2$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}
const get_info_slot_changes = (dirty) => ({});
const get_info_slot_context = (ctx) => ({});
const get_heading_slot_changes$2 = (dirty) => ({});
const get_heading_slot_context$2 = (ctx) => ({});
function fallback_block$1(ctx) {
  let t_value = (
    /*$language*/
    ctx[5].bestLookForYou + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      32 && t_value !== (t_value = /*$language*/
      ctx2[5].bestLookForYou + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block$1.name,
    type: "fallback",
    source: "(21:27) {$language.bestLookForYou}",
    ctx
  });
  return block;
}
function create_if_block_1$5(ctx) {
  let tabs;
  let current;
  tabs = new Tabs({
    props: {
      value: (
        /*activeCategory*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  tabs.$on(
    "change",
    /*change_handler*/
    ctx[8]
  );
  const block = {
    c: function create() {
      create_component(tabs.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(tabs, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const tabs_changes = {};
      if (dirty & /*activeCategory*/
      8)
        tabs_changes.value = /*activeCategory*/
        ctx2[3];
      if (dirty & /*$$scope, categories*/
      16385) {
        tabs_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabs.$set(tabs_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(tabs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tabs, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$5.name,
    type: "if",
    source: "(24:4) {#if categories.length}",
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t_value = (
    /*category*/
    ctx[21].name + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*categories*/
      1 && t_value !== (t_value = /*category*/
      ctx2[21].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(27:10) <Tab value={category}>",
    ctx
  });
  return block;
}
function create_each_block_2$1(ctx) {
  let tab;
  let current;
  tab = new Tab({
    props: {
      value: (
        /*category*/
        ctx[21]
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(tab.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const tab_changes = {};
      if (dirty & /*categories*/
      1)
        tab_changes.value = /*category*/
        ctx2[21];
      if (dirty & /*$$scope, categories*/
      16385) {
        tab_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_2$1.name,
    type: "each",
    source: "(26:8) {#each categories as category}",
    ctx
  });
  return block;
}
function create_default_slot_1$4(ctx) {
  let each_1_anchor;
  let current;
  let each_value_2 = (
    /*categories*/
    ctx[0]
  );
  validate_each_argument(each_value_2);
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*categories*/
      1) {
        each_value_2 = /*categories*/
        ctx2[0];
        validate_each_argument(each_value_2);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2$1(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_2$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$4.name,
    type: "slot",
    source: '(25:6) <Tabs value={activeCategory} on:change={(event) => dispatch(\\"category-change\\", event.detail)}>',
    ctx
  });
  return block;
}
function create_each_block_1$2(key_1, ctx) {
  let li;
  let lookitem;
  let t;
  let current;
  const lookitem_spread_levels = [
    /*item*/
    ctx[16]
  ];
  function click_handler() {
    return (
      /*click_handler*/
      ctx[9](
        /*item*/
        ctx[16]
      )
    );
  }
  function click_handler_22() {
    return (
      /*click_handler_2*/
      ctx[11](
        /*item*/
        ctx[16]
      )
    );
  }
  let lookitem_props = {};
  for (let i = 0; i < lookitem_spread_levels.length; i += 1) {
    lookitem_props = assign(lookitem_props, lookitem_spread_levels[i]);
  }
  lookitem = new Look({ props: lookitem_props, $$inline: true });
  lookitem.$on("click", click_handler);
  lookitem.$on(
    "click",
    /*click_handler_1*/
    ctx[10]
  );
  lookitem.$on("click", click_handler_22);
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      create_component(lookitem.$$.fragment);
      t = space();
      attr_dev(li, "class", "svelte-1m5ufvp");
      add_location(li, file$f, 34, 6, 1128);
      this.first = li;
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(lookitem, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const lookitem_changes = dirty & /*items*/
      2 ? get_spread_update(lookitem_spread_levels, [get_spread_object(
        /*item*/
        ctx[16]
      )]) : {};
      lookitem.$set(lookitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lookitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lookitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(lookitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1$2.name,
    type: "each",
    source: "(34:4) {#each items as item (item.id)}",
    ctx
  });
  return block;
}
function create_if_block$9(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = (
    /*items*/
    ctx[1]
  );
  validate_each_argument(each_value);
  const get_key = (ctx2) => (
    /*item*/
    ctx2[16].id
  );
  validate_each_keys(ctx, each_value, get_each_context$5, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$5(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block$5(key2, child_ctx));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items, dispatch, analytics*/
      66) {
        each_value = /*items*/
        ctx2[1];
        validate_each_argument(each_value);
        group_outros();
        validate_each_keys(ctx2, each_value, get_each_context$5, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$5, each_1_anchor, get_each_context$5);
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$9.name,
    type: "if",
    source: "(56:4) {#if items.length >= 4 && items.length <= 6}",
    ctx
  });
  return block;
}
function create_each_block$5(key_1, ctx) {
  let li;
  let lookitem;
  let t;
  let current;
  const lookitem_spread_levels = [
    /*item*/
    ctx[16]
  ];
  function click_handler_3() {
    return (
      /*click_handler_3*/
      ctx[12](
        /*item*/
        ctx[16]
      )
    );
  }
  function click_handler_4() {
    return (
      /*click_handler_4*/
      ctx[13](
        /*item*/
        ctx[16]
      )
    );
  }
  let lookitem_props = {};
  for (let i = 0; i < lookitem_spread_levels.length; i += 1) {
    lookitem_props = assign(lookitem_props, lookitem_spread_levels[i]);
  }
  lookitem = new Look({ props: lookitem_props, $$inline: true });
  lookitem.$on("click", click_handler_3);
  lookitem.$on("click", click_handler_4);
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      create_component(lookitem.$$.fragment);
      t = space();
      attr_dev(li, "class", "svelte-1m5ufvp");
      add_location(li, file$f, 57, 8, 2067);
      this.first = li;
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(lookitem, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const lookitem_changes = dirty & /*items*/
      2 ? get_spread_update(lookitem_spread_levels, [get_spread_object(
        /*item*/
        ctx[16]
      )]) : {};
      lookitem.$set(lookitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(lookitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(lookitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(lookitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$5.name,
    type: "each",
    source: "(57:6) {#each items as item (item.id)}",
    ctx
  });
  return block;
}
function create_default_slot$9(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t;
  let if_block_anchor;
  let current;
  let each_value_1 = (
    /*items*/
    ctx[1]
  );
  validate_each_argument(each_value_1);
  const get_key = (ctx2) => (
    /*item*/
    ctx2[16].id
  );
  validate_each_keys(ctx, each_value_1, get_each_context_1$2, get_key);
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1$2(ctx, each_value_1, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block_1$2(key2, child_ctx));
  }
  let if_block = (
    /*items*/
    ctx[1].length >= 4 && /*items*/
    ctx[1].length <= 6 && create_if_block$9(ctx)
  );
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items, dispatch, firstClick, showAd, analytics*/
      70) {
        each_value_1 = /*items*/
        ctx2[1];
        validate_each_argument(each_value_1);
        group_outros();
        validate_each_keys(ctx2, each_value_1, get_each_context_1$2, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, t.parentNode, outro_and_destroy_block, create_each_block_1$2, t, get_each_context_1$2);
        check_outros();
      }
      if (
        /*items*/
        ctx2[1].length >= 4 && /*items*/
        ctx2[1].length <= 6
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*items*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$9(ctx2);
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
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach_dev(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$9.name,
    type: "slot",
    source: '(33:2) <Slider wrapper=\\"gallery\\" class=\\"looks mb-\\" as=\\"ul\\" size=\\"lg\\" loop>',
    ctx
  });
  return block;
}
function create_fragment$h(ctx) {
  let section;
  let div;
  let h2;
  let t0;
  let t1;
  let t2;
  let t3;
  let slider;
  let section_class_value;
  let current;
  const heading_slot_template = (
    /*#slots*/
    ctx[7].heading
  );
  const heading_slot = create_slot(
    heading_slot_template,
    ctx,
    /*$$scope*/
    ctx[14],
    get_heading_slot_context$2
  );
  const heading_slot_or_fallback = heading_slot || fallback_block$1(ctx);
  const info_slot_template = (
    /*#slots*/
    ctx[7].info
  );
  const info_slot = create_slot(
    info_slot_template,
    ctx,
    /*$$scope*/
    ctx[14],
    get_info_slot_context
  );
  let if_block = (
    /*categories*/
    ctx[0].length && create_if_block_1$5(ctx)
  );
  const filter_slot_template = (
    /*#slots*/
    ctx[7].filter
  );
  const filter_slot = create_slot(
    filter_slot_template,
    ctx,
    /*$$scope*/
    ctx[14],
    get_filter_slot_context
  );
  slider = new Slider({
    props: {
      wrapper: "gallery",
      class: "looks mb-",
      as: "ul",
      size: "lg",
      loop: true,
      $$slots: { default: [create_default_slot$9] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      h2 = element("h2");
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.c();
      t0 = space();
      if (info_slot)
        info_slot.c();
      t1 = space();
      if (if_block)
        if_block.c();
      t2 = space();
      if (filter_slot)
        filter_slot.c();
      t3 = space();
      create_component(slider.$$.fragment);
      attr_dev(h2, "class", "svelte-1m5ufvp");
      add_location(h2, file$f, 19, 4, 619);
      attr_dev(div, "class", "svelte-1m5ufvp");
      add_location(div, file$f, 18, 2, 609);
      attr_dev(section, "class", section_class_value = null_to_empty(
        /*classes*/
        ctx[4]
      ) + " svelte-1m5ufvp");
      attr_dev(section, "data-qa", "tint-looks");
      add_location(section, file$f, 17, 0, 560);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      append_dev(div, h2);
      if (heading_slot_or_fallback) {
        heading_slot_or_fallback.m(h2, null);
      }
      append_dev(div, t0);
      if (info_slot) {
        info_slot.m(div, null);
      }
      append_dev(div, t1);
      if (if_block)
        if_block.m(div, null);
      append_dev(section, t2);
      if (filter_slot) {
        filter_slot.m(section, null);
      }
      append_dev(section, t3);
      mount_component(slider, section, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (heading_slot) {
        if (heading_slot.p && (!current || dirty & /*$$scope*/
        16384)) {
          update_slot_base(
            heading_slot,
            heading_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[14],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[14]
            ) : get_slot_changes(
              heading_slot_template,
              /*$$scope*/
              ctx2[14],
              dirty,
              get_heading_slot_changes$2
            ),
            get_heading_slot_context$2
          );
        }
      } else {
        if (heading_slot_or_fallback && heading_slot_or_fallback.p && (!current || dirty & /*$language*/
        32)) {
          heading_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (info_slot) {
        if (info_slot.p && (!current || dirty & /*$$scope*/
        16384)) {
          update_slot_base(
            info_slot,
            info_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[14],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[14]
            ) : get_slot_changes(
              info_slot_template,
              /*$$scope*/
              ctx2[14],
              dirty,
              get_info_slot_changes
            ),
            get_info_slot_context
          );
        }
      }
      if (
        /*categories*/
        ctx2[0].length
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*categories*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$5(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (filter_slot) {
        if (filter_slot.p && (!current || dirty & /*$$scope*/
        16384)) {
          update_slot_base(
            filter_slot,
            filter_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[14],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[14]
            ) : get_slot_changes(
              filter_slot_template,
              /*$$scope*/
              ctx2[14],
              dirty,
              get_filter_slot_changes
            ),
            get_filter_slot_context
          );
        }
      }
      const slider_changes = {};
      if (dirty & /*$$scope, items, firstClick*/
      16390) {
        slider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      slider.$set(slider_changes);
      if (!current || dirty & /*classes*/
      16 && section_class_value !== (section_class_value = null_to_empty(
        /*classes*/
        ctx2[4]
      ) + " svelte-1m5ufvp")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(heading_slot_or_fallback, local);
      transition_in(info_slot, local);
      transition_in(if_block);
      transition_in(filter_slot, local);
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(heading_slot_or_fallback, local);
      transition_out(info_slot, local);
      transition_out(if_block);
      transition_out(filter_slot, local);
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.d(detaching);
      if (info_slot)
        info_slot.d(detaching);
      if (if_block)
        if_block.d();
      if (filter_slot)
        filter_slot.d(detaching);
      destroy_component(slider);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$h.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$h($$self, $$props, $$invalidate) {
  let classes;
  let activeCategory;
  const omit_props_names = ["categories", "items"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(5, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Looks", slots, ["heading", "info", "filter"]);
  let { categories = [] } = $$props;
  let { items } = $$props;
  let firstClick = false;
  const dispatch = createEventDispatcher();
  $$self.$$.on_mount.push(function() {
    if (items === void 0 && !("items" in $$props || $$self.$$.bound[$$self.$$.props["items"]])) {
      console.warn("<Looks> was created without expected prop 'items'");
    }
  });
  const change_handler = (event) => dispatch("category-change", event.detail);
  const click_handler = (item) => dispatch(item.active ? "clear" : "select", item);
  const click_handler_1 = () => !firstClick && $$invalidate(2, firstClick = true) && showAd({ flow: "Look" });
  const click_handler_22 = (item) => item.active ? analytics.filter_deleted({ filter_name: item.name }) : analytics.filter_applied({ filter_name: item.name });
  const click_handler_3 = (item) => dispatch(item.active ? "clear" : "select", item);
  const click_handler_4 = (item) => item.active ? analytics.filter_deleted({ filter_name: item.name }) : analytics.filter_applied({ filter_name: item.name });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(15, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("categories" in $$new_props)
      $$invalidate(0, categories = $$new_props.categories);
    if ("items" in $$new_props)
      $$invalidate(1, items = $$new_props.items);
    if ("$$scope" in $$new_props)
      $$invalidate(14, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    analytics,
    Slider,
    Tab,
    Tabs,
    cx,
    language,
    showAd,
    LookItem: Look,
    categories,
    items,
    firstClick,
    dispatch,
    activeCategory,
    classes,
    $language
  });
  $$self.$inject_state = ($$new_props) => {
    if ("categories" in $$props)
      $$invalidate(0, categories = $$new_props.categories);
    if ("items" in $$props)
      $$invalidate(1, items = $$new_props.items);
    if ("firstClick" in $$props)
      $$invalidate(2, firstClick = $$new_props.firstClick);
    if ("activeCategory" in $$props)
      $$invalidate(3, activeCategory = $$new_props.activeCategory);
    if ("classes" in $$props)
      $$invalidate(4, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(4, classes = cx("tint-looks", $$restProps.class));
    if ($$self.$$.dirty & /*categories*/
    1) {
      $$invalidate(3, activeCategory = categories.find((c) => c.active));
    }
  };
  return [
    categories,
    items,
    firstClick,
    activeCategory,
    classes,
    $language,
    dispatch,
    slots,
    change_handler,
    click_handler,
    click_handler_1,
    click_handler_22,
    click_handler_3,
    click_handler_4,
    $$scope
  ];
}
class Looks extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { categories: 0, items: 1 }, add_css$e);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Looks",
      options,
      id: create_fragment$h.name
    });
  }
  get categories() {
    throw new Error("<Looks>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set categories(value) {
    throw new Error("<Looks>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get items() {
    throw new Error("<Looks>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Looks>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$e = "src/lib/components/Products/Product.svelte";
function add_css$d(target) {
  append_styles(target, "svelte-9rcap2", ".tint-product.svelte-9rcap2{position:relative;display:flex;align-items:center\n}@media(min-width: 768px){.tint-product.svelte-9rcap2{flex-direction:column;align-items:stretch\n    }}.tint-product.svelte-9rcap2{font-size:12px;line-height:16px\n}@media(min-width: 768px){.tint-product.svelte-9rcap2{font-size:14px;line-height:20px\n    }}label.svelte-9rcap2{position:relative;display:inline-block;flex-shrink:0;cursor:pointer;overflow:hidden;border-radius:8px;--tw-shadow:inset 0 0 0 1px var(--tint-item-border);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:box-shadow;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;height:80px;width:80px\n}@media(min-width: 768px){label.svelte-9rcap2{height:auto;width:100%;padding-bottom:100%\n    }}label.svelte-9rcap2:hover{--tw-shadow:inset 0 0 0 1px var(--tint-item-border-hover);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}label.active.svelte-9rcap2{--tw-shadow:inset 0 0 0 1.5px var(--tint-item-border-applied);--tw-shadow-colored:inset 0 0 0 1.5px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}label.svelte-9rcap2::after{position:absolute;top:8px;right:8px;display:flex;align-items:center;justify-content:center;border-radius:var(--tint-item-badge-radius);background-color:var(--tint-item-badge-applied);padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;font-size:12px;line-height:16px;font-weight:700;color:var(--tint-text-light);transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 768px){label.svelte-9rcap2::after{content:attr(data-style-type)\n    }}label.svelte-9rcap2:not(.active)::after{--tw-translate-y:calc(calc(100% + 8px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}div.recommendation-badge.svelte-9rcap2:not(.recommended){display:none}div.recommendation-badge.recommended.svelte-9rcap2{position:absolute;bottom:4px;left:4px;z-index:9;display:flex;height:20px;align-items:center;justify-content:center;gap:4px;border-radius:var(--tint-item-badge-radius);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));background-color:var(--tint-item-badge-recommended);background-position:center left 4px;background-repeat:no-repeat;padding-left:8px;padding-right:8px;font-size:12px;line-height:16px;font-weight:600;color:var(--tint-text-light)\n}@media(min-width: 768px){div.recommendation-badge.recommended.svelte-9rcap2{top:8px;height:24px\n    }}img.svelte-9rcap2{position:absolute;top:0px;left:0px;z-index:-1;height:100%;width:100%;-webkit-user-select:none;user-select:none;border-radius:inherit;object-fit:contain\n}.description.svelte-9rcap2{display:flex;min-width:0px;flex-direction:column;gap:4px\n}@media(min-width: 768px){.description.svelte-9rcap2{align-items:center;text-align:center\n    }}.description.svelte-9rcap2{margin-left:12px;margin-right:12px\n}@media(min-width: 768px){.description.svelte-9rcap2{margin-left:0px;margin-right:0px;margin-top:8px\n    }}h3.svelte-9rcap2{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase\n}h4.svelte-9rcap2{font-weight:400\n}.tint-product.svelte-9rcap2>.apply{margin-left:auto;min-width:65px;flex-shrink:0\n}@media(min-width: 768px){.tint-product.svelte-9rcap2>.apply{display:none\n    }}");
}
function create_else_block$2(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[8].forYou + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      add_location(span, file$e, 36, 6, 1035);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      256 && t_value !== (t_value = /*$language*/
      ctx2[8].forYou + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$2.name,
    type: "else",
    source: "(36:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3$3(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[8].best + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      add_location(span, file$e, 34, 6, 987);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      256 && t_value !== (t_value = /*$language*/
      ctx2[8].best + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$3.name,
    type: "if",
    source: "(34:4) {#if $routerPath.current === Paths.GiftSelection}",
    ctx
  });
  return block;
}
function create_if_block_2$3(ctx) {
  let h3;
  let t;
  const block = {
    c: function create() {
      h3 = element("h3");
      t = text(
        /*brand*/
        ctx[1]
      );
      attr_dev(h3, "data-qa", "tint-product-item-brand");
      attr_dev(h3, "class", "svelte-9rcap2");
      add_location(h3, file$e, 45, 17, 1329);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*brand*/
      2)
        set_data_dev(
          t,
          /*brand*/
          ctx2[1]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$3.name,
    type: "if",
    source: "(46:6) {#if brand}",
    ctx
  });
  return block;
}
function create_if_block_1$4(ctx) {
  let rating_1;
  let current;
  rating_1 = new Rating({
    props: { value: (
      /*rating*/
      ctx[3]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(rating_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(rating_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const rating_1_changes = {};
      if (dirty & /*rating*/
      8)
        rating_1_changes.value = /*rating*/
        ctx2[3];
      rating_1.$set(rating_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(rating_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(rating_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(rating_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$4.name,
    type: "if",
    source: "(49:4) {#if rating}",
    ctx
  });
  return block;
}
function create_if_block$8(ctx) {
  let price_1;
  let current;
  const price_1_spread_levels = [
    { as: "b" },
    /*price*/
    ctx[4]
  ];
  let price_1_props = {};
  for (let i = 0; i < price_1_spread_levels.length; i += 1) {
    price_1_props = assign(price_1_props, price_1_spread_levels[i]);
  }
  price_1 = new Price({ props: price_1_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(price_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(price_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const price_1_changes = dirty & /*price*/
      16 ? get_spread_update(price_1_spread_levels, [price_1_spread_levels[0], get_spread_object(
        /*price*/
        ctx2[4]
      )]) : {};
      price_1.$set(price_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(price_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(price_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(price_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$8.name,
    type: "if",
    source: "(50:4) {#if price}",
    ctx
  });
  return block;
}
function create_default_slot$8(ctx) {
  let t_value = (
    /*active*/
    (ctx[6] ? (
      /*$language*/
      ctx[8].clear
    ) : (
      /*$language*/
      ctx[8].apply
    )) + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*active, $language*/
      320 && t_value !== (t_value = /*active*/
      (ctx2[6] ? (
        /*$language*/
        ctx2[8].clear
      ) : (
        /*$language*/
        ctx2[8].apply
      )) + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$8.name,
    type: "slot",
    source: '(52:2) <Button class=\\"apply\\" variant={active ? \\"secondary\\" : \\"primary\\"} size=\\"sm\\" on:click>',
    ctx
  });
  return block;
}
function create_fragment$g(ctx) {
  let article;
  let div0;
  let icon;
  let t0;
  let div0_class_value;
  let div0_style_value;
  let t1;
  let label;
  let input;
  let t2;
  let img;
  let img_src_value;
  let label_data_style_type_value;
  let t3;
  let div2;
  let div1;
  let t4;
  let h4;
  let t5;
  let h4_class_value;
  let t6;
  let t7;
  let t8;
  let button;
  let current;
  let mounted;
  let dispose;
  icon = new Icon({
    props: { variant: "recommend-xs" },
    $$inline: true
  });
  function select_block_type(ctx2, dirty) {
    if (
      /*$routerPath*/
      ctx2[9].current === Paths.GiftSelection
    )
      return create_if_block_3$3;
    return create_else_block$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*brand*/
    ctx[1] && create_if_block_2$3(ctx)
  );
  let if_block2 = (
    /*rating*/
    ctx[3] && create_if_block_1$4(ctx)
  );
  let if_block3 = (
    /*price*/
    ctx[4] && create_if_block$8(ctx)
  );
  button = new Button({
    props: {
      class: "apply",
      variant: (
        /*active*/
        ctx[6] ? "secondary" : "primary"
      ),
      size: "sm",
      $$slots: { default: [create_default_slot$8] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_1*/
    ctx[11]
  );
  const block = {
    c: function create() {
      article = element("article");
      div0 = element("div");
      create_component(icon.$$.fragment);
      t0 = space();
      if_block0.c();
      t1 = space();
      label = element("label");
      input = element("input");
      t2 = space();
      img = element("img");
      t3 = space();
      div2 = element("div");
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t4 = space();
      h4 = element("h4");
      t5 = text(
        /*name*/
        ctx[0]
      );
      t6 = space();
      if (if_block2)
        if_block2.c();
      t7 = space();
      if (if_block3)
        if_block3.c();
      t8 = space();
      create_component(button.$$.fragment);
      attr_dev(div0, "class", div0_class_value = null_to_empty(cx(
        "recommendation-badge",
        /*recommendation*/
        ctx[5]
      )) + " svelte-9rcap2");
      attr_dev(div0, "style", div0_style_value = `content: "${/*$language*/
      ctx[8].forYou}"`);
      add_location(div0, file$e, 31, 2, 793);
      attr_dev(input, "type", "checkbox");
      input.checked = /*active*/
      ctx[6];
      input.hidden = true;
      add_location(input, file$e, 40, 4, 1149);
      attr_dev(
        img,
        "alt",
        /*name*/
        ctx[0]
      );
      if (!src_url_equal(img.src, img_src_value = /*cover*/
      ctx[2]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "fetchpriority", "low");
      attr_dev(img, "class", "svelte-9rcap2");
      add_location(img, file$e, 41, 4, 1212);
      attr_dev(label, "data-style-type", label_data_style_type_value = /*$language*/
      ctx[8].applied);
      attr_dev(label, "class", "svelte-9rcap2");
      toggle_class(
        label,
        "active",
        /*active*/
        ctx[6]
      );
      add_location(label, file$e, 39, 2, 1088);
      attr_dev(h4, "class", h4_class_value = null_to_empty(
        /*clamp*/
        ctx[7]
      ) + " svelte-9rcap2");
      attr_dev(h4, "data-qa", "tint-product-item-name");
      add_location(h4, file$e, 46, 6, 1391);
      add_location(div1, file$e, 44, 4, 1306);
      attr_dev(div2, "class", "description svelte-9rcap2");
      add_location(div2, file$e, 43, 2, 1276);
      attr_dev(article, "class", "tint-product svelte-9rcap2");
      attr_dev(article, "data-qa", "tint-product-item");
      add_location(article, file$e, 30, 0, 732);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, div0);
      mount_component(icon, div0, null);
      append_dev(div0, t0);
      if_block0.m(div0, null);
      append_dev(article, t1);
      append_dev(article, label);
      append_dev(label, input);
      append_dev(label, t2);
      append_dev(label, img);
      append_dev(article, t3);
      append_dev(article, div2);
      append_dev(div2, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append_dev(div1, t4);
      append_dev(div1, h4);
      append_dev(h4, t5);
      append_dev(div2, t6);
      if (if_block2)
        if_block2.m(div2, null);
      append_dev(div2, t7);
      if (if_block3)
        if_block3.m(div2, null);
      append_dev(article, t8);
      mount_component(button, article, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          input,
          "click",
          /*click_handler*/
          ctx[10],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (!current || dirty & /*recommendation*/
      32 && div0_class_value !== (div0_class_value = null_to_empty(cx(
        "recommendation-badge",
        /*recommendation*/
        ctx2[5]
      )) + " svelte-9rcap2")) {
        attr_dev(div0, "class", div0_class_value);
      }
      if (!current || dirty & /*$language*/
      256 && div0_style_value !== (div0_style_value = `content: "${/*$language*/
      ctx2[8].forYou}"`)) {
        attr_dev(div0, "style", div0_style_value);
      }
      if (!current || dirty & /*active*/
      64) {
        prop_dev(
          input,
          "checked",
          /*active*/
          ctx2[6]
        );
      }
      if (!current || dirty & /*name*/
      1) {
        attr_dev(
          img,
          "alt",
          /*name*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*cover*/
      4 && !src_url_equal(img.src, img_src_value = /*cover*/
      ctx2[2])) {
        attr_dev(img, "src", img_src_value);
      }
      if (!current || dirty & /*$language*/
      256 && label_data_style_type_value !== (label_data_style_type_value = /*$language*/
      ctx2[8].applied)) {
        attr_dev(label, "data-style-type", label_data_style_type_value);
      }
      if (!current || dirty & /*active*/
      64) {
        toggle_class(
          label,
          "active",
          /*active*/
          ctx2[6]
        );
      }
      if (
        /*brand*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2$3(ctx2);
          if_block1.c();
          if_block1.m(div1, t4);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & /*name*/
      1)
        set_data_dev(
          t5,
          /*name*/
          ctx2[0]
        );
      if (!current || dirty & /*clamp*/
      128 && h4_class_value !== (h4_class_value = null_to_empty(
        /*clamp*/
        ctx2[7]
      ) + " svelte-9rcap2")) {
        attr_dev(h4, "class", h4_class_value);
      }
      if (
        /*rating*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*rating*/
          8) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_1$4(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div2, t7);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*price*/
        ctx2[4]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*price*/
          16) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block$8(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div2, null);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      const button_changes = {};
      if (dirty & /*active*/
      64)
        button_changes.variant = /*active*/
        ctx2[6] ? "secondary" : "primary";
      if (dirty & /*$$scope, active, $language*/
      4416) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      destroy_component(icon);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      destroy_component(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$g.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$g($$self, $$props, $$invalidate) {
  let $language;
  let $routerPath;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(8, $language = $$value));
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(9, $routerPath = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Product", slots, []);
  let { name: name2 } = $$props;
  let { brand = void 0 } = $$props;
  let { cover } = $$props;
  let { rating = void 0 } = $$props;
  let { price = void 0 } = $$props;
  let { recommendation = void 0 } = $$props;
  let { active = false } = $$props;
  let clamp;
  $$self.$$.on_mount.push(function() {
    if (name2 === void 0 && !("name" in $$props || $$self.$$.bound[$$self.$$.props["name"]])) {
      console.warn("<Product> was created without expected prop 'name'");
    }
    if (cover === void 0 && !("cover" in $$props || $$self.$$.bound[$$self.$$.props["cover"]])) {
      console.warn("<Product> was created without expected prop 'cover'");
    }
  });
  const writable_props = ["name", "brand", "cover", "rating", "price", "recommendation", "active"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Product> was created with unknown prop '${key2}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("brand" in $$props2)
      $$invalidate(1, brand = $$props2.brand);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("rating" in $$props2)
      $$invalidate(3, rating = $$props2.rating);
    if ("price" in $$props2)
      $$invalidate(4, price = $$props2.price);
    if ("recommendation" in $$props2)
      $$invalidate(5, recommendation = $$props2.recommendation);
    if ("active" in $$props2)
      $$invalidate(6, active = $$props2.active);
  };
  $$self.$capture_state = () => ({
    Button,
    Price,
    Rating,
    cx,
    media,
    Icon,
    Paths,
    routerPath,
    language,
    name: name2,
    brand,
    cover,
    rating,
    price,
    recommendation,
    active,
    clamp,
    $language,
    $routerPath
  });
  $$self.$inject_state = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name2 = $$props2.name);
    if ("brand" in $$props2)
      $$invalidate(1, brand = $$props2.brand);
    if ("cover" in $$props2)
      $$invalidate(2, cover = $$props2.cover);
    if ("rating" in $$props2)
      $$invalidate(3, rating = $$props2.rating);
    if ("price" in $$props2)
      $$invalidate(4, price = $$props2.price);
    if ("recommendation" in $$props2)
      $$invalidate(5, recommendation = $$props2.recommendation);
    if ("active" in $$props2)
      $$invalidate(6, active = $$props2.active);
    if ("clamp" in $$props2)
      $$invalidate(7, clamp = $$props2.clamp);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*brand, rating, price*/
    26) {
      {
        const clamps = {
          1: "line-clamp-1",
          2: "line-clamp-2",
          3: "line-clamp-3"
        };
        let lines = 3;
        if (brand)
          lines -= 1;
        if (rating || price)
          lines -= 1;
        $$invalidate(7, clamp = clamps[lines]);
      }
    }
  };
  return [
    name2,
    brand,
    cover,
    rating,
    price,
    recommendation,
    active,
    clamp,
    $language,
    $routerPath,
    click_handler,
    click_handler_1
  ];
}
class Product2 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$g,
      create_fragment$g,
      safe_not_equal,
      {
        name: 0,
        brand: 1,
        cover: 2,
        rating: 3,
        price: 4,
        recommendation: 5,
        active: 6
      },
      add_css$d
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Product",
      options,
      id: create_fragment$g.name
    });
  }
  get name() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get brand() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set brand(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get cover() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set cover(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get rating() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set rating(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get price() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set price(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get recommendation() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set recommendation(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<Product>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<Product>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const scrollIntoViewIfNeeded = (element2) => {
  const scrollParent = getScrollParent(element2);
  if (!scrollParent)
    return;
  const scrollTop = scrollParent.scrollTop;
  const offsetTop = element2.offsetTop;
  if (scrollTop <= offsetTop)
    return;
  scrollParent.scrollBy({ top: offsetTop - scrollTop, behavior: "smooth" });
};
const file$d = "src/lib/components/Products/Products.svelte";
function add_css$c(target) {
  append_styles(target, "svelte-k7czh4", "div.svelte-k7czh4{position:sticky;top:0px;z-index:10;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:12px\n}@media(min-width: 768px){div.svelte-k7czh4{gap:4px;padding-top:20px\n    }}h2.svelte-k7czh4{font-size:16px;line-height:24px\n}@media(min-width: 768px){h2.svelte-k7czh4{font-size:20px;line-height:28px\n    }}@media(min-width: 1280px){h2.svelte-k7czh4{font-size:24px;line-height:32px\n    }}ul.svelte-k7czh4{display:flex;flex-direction:column\n}@media(min-width: 768px){ul.svelte-k7czh4{display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));column-gap:12px;row-gap:32px;padding-top:16px\n    }}@media(min-width: 1024px){ul.svelte-k7czh4{grid-template-columns:repeat(3, minmax(0, 1fr))\n    }}li.svelte-k7czh4{margin-top:12px;margin-bottom:12px\n}@media(min-width: 768px){li.svelte-k7czh4{margin-top:0px;margin-bottom:0px\n    }}li.svelte-k7czh4:not(:last-child){position:relative;margin-bottom:calc(12px + 1px)\n}@media(min-width: 768px){li.svelte-k7czh4:not(:last-child){margin-bottom:0px\n    }}li.svelte-k7czh4:not(:last-child)::after{position:absolute;bottom:calc(calc(12px + 1px) * -1);height:1px;width:100%;--tw-bg-opacity:1;background-color:rgb(220 220 221 / var(--tw-bg-opacity));--tw-content:'';content:var(--tw-content)\n}@media(min-width: 768px){li.svelte-k7czh4:not(:last-child)::after{--tw-content:none;content:var(--tw-content)\n    }}section.svelte-k7czh4>.scroll-to-top{position:sticky;bottom:8px;margin-left:auto;margin-right:auto\n}@media(min-width: 768px){section.svelte-k7czh4>.scroll-to-top{bottom:32px;margin-right:32px\n    }}section.svelte-k7czh4>.scroll-to-top{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}@media(min-width: 1024px){section.svelte-k7czh4>.scroll-to-top{bottom:24px;margin-right:0px\n    }}@media(min-width: 1280px){section.svelte-k7czh4>.scroll-to-top{bottom:32px\n    }}section.svelte-k7czh4>.scroll-to-top:not(.overscrolled){opacity:0\n}");
}
function get_each_context$4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  child_ctx[28] = i;
  return child_ctx;
}
function get_each_context_1$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[29] = list[i];
  return child_ctx;
}
const get_heading_slot_changes$1 = (dirty) => ({});
const get_heading_slot_context$1 = (ctx) => ({});
function fallback_block(ctx) {
  let t_value = (
    /*$language*/
    ctx[7].recommendedForYou + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$language*/
      128 && t_value !== (t_value = /*$language*/
      ctx2[7].recommendedForYou + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: fallback_block.name,
    type: "fallback",
    source: "(43:27) {$language.recommendedForYou}",
    ctx
  });
  return block;
}
function create_if_block$7(ctx) {
  let tabs;
  let current;
  tabs = new Tabs({
    props: {
      wrapper: "categories",
      value: (
        /*activeCategory*/
        ctx[3]
      ),
      qa: "tint-products-categories",
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  tabs.$on(
    "change",
    /*change_handler*/
    ctx[15]
  );
  tabs.$on(
    "change",
    /*change_handler_1*/
    ctx[16]
  );
  const block = {
    c: function create() {
      create_component(tabs.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(tabs, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const tabs_changes = {};
      if (dirty[0] & /*activeCategory*/
      8)
        tabs_changes.value = /*activeCategory*/
        ctx2[3];
      if (dirty[0] & /*$$scope, categories*/
      16777217) {
        tabs_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tabs.$set(tabs_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(tabs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tabs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tabs, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$7.name,
    type: "if",
    source: "(45:4) {#if categories.length && isTabsEnabled}",
    ctx
  });
  return block;
}
function create_default_slot_1$3(ctx) {
  let t_value = (
    /*category*/
    ctx[29].name + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*categories*/
      1 && t_value !== (t_value = /*category*/
      ctx2[29].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$3.name,
    type: "slot",
    source: '(55:10) <Tab value={category} qa=\\"tint-category-item\\">',
    ctx
  });
  return block;
}
function create_each_block_1$1(ctx) {
  let tab;
  let current;
  tab = new Tab({
    props: {
      value: (
        /*category*/
        ctx[29]
      ),
      qa: "tint-category-item",
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(tab.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(tab, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const tab_changes = {};
      if (dirty[0] & /*categories*/
      1)
        tab_changes.value = /*category*/
        ctx2[29];
      if (dirty[0] & /*$$scope, categories*/
      16777217) {
        tab_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tab.$set(tab_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(tab.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tab.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(tab, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1$1.name,
    type: "each",
    source: "(54:8) {#each categories as category}",
    ctx
  });
  return block;
}
function create_default_slot$7(ctx) {
  let each_1_anchor;
  let current;
  let each_value_1 = (
    /*categories*/
    ctx[0]
  );
  validate_each_argument(each_value_1);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*categories*/
      1) {
        each_value_1 = /*categories*/
        ctx2[0];
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1$1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$7.name,
    type: "slot",
    source: '(46:6) <Tabs         wrapper=\\"categories\\"         value={activeCategory}         on:change={(event) => dispatch(\\"category-change\\", event.detail)}         on:change={(event) =>           analytics.product_category_choice_clicked({ category_name: event.detail.name })}         qa=\\"tint-products-categories\\"       >',
    ctx
  });
  return block;
}
function create_each_block$4(key_1, ctx) {
  let li;
  let productitem;
  let t;
  let visibility_action;
  let current;
  let mounted;
  let dispose;
  const productitem_spread_levels = [
    /*item*/
    ctx[26]
  ];
  function click_handler() {
    return (
      /*click_handler*/
      ctx[17](
        /*item*/
        ctx[26]
      )
    );
  }
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[18](
        /*item*/
        ctx[26]
      )
    );
  }
  let productitem_props = {};
  for (let i = 0; i < productitem_spread_levels.length; i += 1) {
    productitem_props = assign(productitem_props, productitem_spread_levels[i]);
  }
  productitem = new Product2({ props: productitem_props, $$inline: true });
  productitem.$on("click", click_handler);
  productitem.$on("click", click_handler_1);
  function visible_handler() {
    return (
      /*visible_handler*/
      ctx[19](
        /*idx*/
        ctx[28]
      )
    );
  }
  function invisible_handler() {
    return (
      /*invisible_handler*/
      ctx[20](
        /*idx*/
        ctx[28]
      )
    );
  }
  function visible_handler_1() {
    return (
      /*visible_handler_1*/
      ctx[21](
        /*idx*/
        ctx[28]
      )
    );
  }
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      create_component(productitem.$$.fragment);
      t = space();
      attr_dev(li, "class", "svelte-k7czh4");
      add_location(li, file$d, 61, 6, 2270);
      this.first = li;
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(productitem, li, null);
      append_dev(li, t);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(visibility_action = visibility.call(null, li, {
            visible: (
              /*idx*/
              ctx[28] === 0 || /*idx*/
              ctx[28] === /*seenIdx*/
              ctx[5]
            ),
            invisible: (
              /*idx*/
              ctx[28] === 0
            )
          })),
          listen_dev(li, "visible", visible_handler, false, false, false, false),
          listen_dev(li, "invisible", invisible_handler, false, false, false, false),
          listen_dev(li, "visible", visible_handler_1, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const productitem_changes = dirty[0] & /*items*/
      2 ? get_spread_update(productitem_spread_levels, [get_spread_object(
        /*item*/
        ctx[26]
      )]) : {};
      productitem.$set(productitem_changes);
      if (visibility_action && is_function(visibility_action.update) && dirty[0] & /*items, seenIdx*/
      34)
        visibility_action.update.call(null, {
          visible: (
            /*idx*/
            ctx[28] === 0 || /*idx*/
            ctx[28] === /*seenIdx*/
            ctx[5]
          ),
          invisible: (
            /*idx*/
            ctx[28] === 0
          )
        });
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(productitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(productitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(productitem);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$4.name,
    type: "each",
    source: "(61:4) {#each items as item, idx (item.id)}",
    ctx
  });
  return block;
}
function create_fragment$f(ctx) {
  let section;
  let div;
  let h2;
  let t0;
  let t1;
  let ul;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t2;
  let iconbutton;
  let section_class_value;
  let current;
  const heading_slot_template = (
    /*#slots*/
    ctx[14].heading
  );
  const heading_slot = create_slot(
    heading_slot_template,
    ctx,
    /*$$scope*/
    ctx[24],
    get_heading_slot_context$1
  );
  const heading_slot_or_fallback = heading_slot || fallback_block(ctx);
  let if_block = (
    /*categories*/
    ctx[0].length && /*isTabsEnabled*/
    ctx[9] && create_if_block$7(ctx)
  );
  let each_value = (
    /*items*/
    ctx[1]
  );
  validate_each_argument(each_value);
  const get_key = (ctx2) => (
    /*item*/
    ctx2[26].id
  );
  validate_each_keys(ctx, each_value, get_each_context$4, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context$4(ctx, each_value, i);
    let key2 = get_key(child_ctx);
    each_1_lookup.set(key2, each_blocks[i] = create_each_block$4(key2, child_ctx));
  }
  iconbutton = new IconButton({
    props: {
      class: cx(
        "scroll-to-top",
        /*overscrolled*/
        ctx[4] && "overscrolled"
      ),
      icon: !/*$isMdViewport*/
      ctx[8] ? "arrow-small-up" : "arrow-up",
      size: !/*$isMdViewport*/
      ctx[8] ? "base" : "lg"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler_2*/
    ctx[22]
  );
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      h2 = element("h2");
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.c();
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      create_component(iconbutton.$$.fragment);
      attr_dev(h2, "class", "svelte-k7czh4");
      add_location(h2, file$d, 41, 4, 1614);
      attr_dev(div, "class", "svelte-k7czh4");
      add_location(div, file$d, 40, 2, 1604);
      attr_dev(ul, "class", "svelte-k7czh4");
      add_location(ul, file$d, 59, 2, 2218);
      attr_dev(section, "class", section_class_value = null_to_empty(
        /*classes*/
        ctx[6]
      ) + " svelte-k7czh4");
      attr_dev(section, "data-qa", "tint-products");
      add_location(section, file$d, 39, 0, 1530);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      append_dev(div, h2);
      if (heading_slot_or_fallback) {
        heading_slot_or_fallback.m(h2, null);
      }
      append_dev(div, t0);
      if (if_block)
        if_block.m(div, null);
      append_dev(section, t1);
      append_dev(section, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      append_dev(section, t2);
      mount_component(iconbutton, section, null);
      ctx[23](section);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (heading_slot) {
        if (heading_slot.p && (!current || dirty[0] & /*$$scope*/
        16777216)) {
          update_slot_base(
            heading_slot,
            heading_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[24],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[24]
            ) : get_slot_changes(
              heading_slot_template,
              /*$$scope*/
              ctx2[24],
              dirty,
              get_heading_slot_changes$1
            ),
            get_heading_slot_context$1
          );
        }
      } else {
        if (heading_slot_or_fallback && heading_slot_or_fallback.p && (!current || dirty[0] & /*$language*/
        128)) {
          heading_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (
        /*categories*/
        ctx2[0].length && /*isTabsEnabled*/
        ctx2[9]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & /*categories*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$7(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty[0] & /*items, seenIdx, overscrolled, dispatch*/
      2098) {
        each_value = /*items*/
        ctx2[1];
        validate_each_argument(each_value);
        group_outros();
        validate_each_keys(ctx2, each_value, get_each_context$4, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block$4, null, get_each_context$4);
        check_outros();
      }
      const iconbutton_changes = {};
      if (dirty[0] & /*overscrolled*/
      16)
        iconbutton_changes.class = cx(
          "scroll-to-top",
          /*overscrolled*/
          ctx2[4] && "overscrolled"
        );
      if (dirty[0] & /*$isMdViewport*/
      256)
        iconbutton_changes.icon = !/*$isMdViewport*/
        ctx2[8] ? "arrow-small-up" : "arrow-up";
      if (dirty[0] & /*$isMdViewport*/
      256)
        iconbutton_changes.size = !/*$isMdViewport*/
        ctx2[8] ? "base" : "lg";
      iconbutton.$set(iconbutton_changes);
      if (!current || dirty[0] & /*classes*/
      64 && section_class_value !== (section_class_value = null_to_empty(
        /*classes*/
        ctx2[6]
      ) + " svelte-k7czh4")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(heading_slot_or_fallback, local);
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(heading_slot_or_fallback, local);
      transition_out(if_block);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (heading_slot_or_fallback)
        heading_slot_or_fallback.d(detaching);
      if (if_block)
        if_block.d();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      destroy_component(iconbutton);
      ctx[23](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$f($$self, $$props, $$invalidate) {
  let classes;
  let activeCategory;
  const omit_props_names = ["categories", "items", "seenItemsThreshold"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $language;
  let $isMdViewport;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(7, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Products", slots, ["heading"]);
  let { categories = [] } = $$props;
  let { items } = $$props;
  let { seenItemsThreshold = void 0 } = $$props;
  let mounted = false;
  let container;
  let overscrolled = false;
  let seenIdx = -1;
  const isTabsEnabled = true;
  const isMdViewport = media(`(min-width: 768px)`);
  validate_store(isMdViewport, "isMdViewport");
  component_subscribe($$self, isMdViewport, (value) => $$invalidate(8, $isMdViewport = value));
  const dispatch = createEventDispatcher();
  onMount(() => $$invalidate(13, mounted = true));
  $$self.$$.on_mount.push(function() {
    if (items === void 0 && !("items" in $$props || $$self.$$.bound[$$self.$$.props["items"]])) {
      console.warn("<Products> was created without expected prop 'items'");
    }
  });
  const change_handler = (event) => dispatch("category-change", event.detail);
  const change_handler_1 = (event) => analytics.product_category_choice_clicked({ category_name: event.detail.name });
  const click_handler = (item) => dispatch("select", item);
  const click_handler_1 = (item) => item.active ? analytics.product_removed({ product_name: item.name }) : analytics.product_applied({ product_name: item.name });
  const visible_handler = (idx) => idx === 0 && $$invalidate(4, overscrolled = false);
  const invisible_handler = (idx) => idx === 0 && $$invalidate(4, overscrolled = true);
  const visible_handler_1 = (idx) => idx === seenIdx && dispatch("seen");
  const click_handler_22 = () => scrollIntoViewIfNeeded(container);
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(2, container);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(25, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("categories" in $$new_props)
      $$invalidate(0, categories = $$new_props.categories);
    if ("items" in $$new_props)
      $$invalidate(1, items = $$new_props.items);
    if ("seenItemsThreshold" in $$new_props)
      $$invalidate(12, seenItemsThreshold = $$new_props.seenItemsThreshold);
    if ("$$scope" in $$new_props)
      $$invalidate(24, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    analytics,
    IconButton,
    Tab,
    Tabs,
    cx,
    media,
    visibility,
    language,
    ProductItem: Product2,
    scrollIntoViewIfNeeded,
    categories,
    items,
    seenItemsThreshold,
    mounted,
    container,
    overscrolled,
    seenIdx,
    isTabsEnabled,
    isMdViewport,
    dispatch,
    activeCategory,
    classes,
    $language,
    $isMdViewport
  });
  $$self.$inject_state = ($$new_props) => {
    if ("categories" in $$props)
      $$invalidate(0, categories = $$new_props.categories);
    if ("items" in $$props)
      $$invalidate(1, items = $$new_props.items);
    if ("seenItemsThreshold" in $$props)
      $$invalidate(12, seenItemsThreshold = $$new_props.seenItemsThreshold);
    if ("mounted" in $$props)
      $$invalidate(13, mounted = $$new_props.mounted);
    if ("container" in $$props)
      $$invalidate(2, container = $$new_props.container);
    if ("overscrolled" in $$props)
      $$invalidate(4, overscrolled = $$new_props.overscrolled);
    if ("seenIdx" in $$props)
      $$invalidate(5, seenIdx = $$new_props.seenIdx);
    if ("activeCategory" in $$props)
      $$invalidate(3, activeCategory = $$new_props.activeCategory);
    if ("classes" in $$props)
      $$invalidate(6, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(6, classes = cx("tint-products", $$restProps.class));
    if ($$self.$$.dirty[0] & /*categories*/
    1) {
      $$invalidate(3, activeCategory = categories.find((c) => c.active));
    }
    if ($$self.$$.dirty[0] & /*activeCategory, mounted, container*/
    8204) {
      activeCategory && mounted && scrollIntoViewIfNeeded(container);
    }
    if ($$self.$$.dirty[0] & /*seenItemsThreshold, items*/
    4098) {
      $: {
        $$invalidate(5, seenIdx = -1);
        if (typeof seenItemsThreshold === "undefined")
          break $;
        if (items.length === 0)
          break $;
        $$invalidate(5, seenIdx = Math.round(seenItemsThreshold < 0 ? Math.max(0, items.length + seenItemsThreshold) : Math.max(seenItemsThreshold, items.length) - 1));
      }
    }
  };
  return [
    categories,
    items,
    container,
    activeCategory,
    overscrolled,
    seenIdx,
    classes,
    $language,
    $isMdViewport,
    isTabsEnabled,
    isMdViewport,
    dispatch,
    seenItemsThreshold,
    mounted,
    slots,
    change_handler,
    change_handler_1,
    click_handler,
    click_handler_1,
    visible_handler,
    invisible_handler,
    visible_handler_1,
    click_handler_22,
    section_binding,
    $$scope
  ];
}
class Products2 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$f,
      create_fragment$f,
      safe_not_equal,
      {
        categories: 0,
        items: 1,
        seenItemsThreshold: 12
      },
      add_css$c,
      [-1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Products",
      options,
      id: create_fragment$f.name
    });
  }
  get categories() {
    throw new Error("<Products>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set categories(value) {
    throw new Error("<Products>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get items() {
    throw new Error("<Products>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Products>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get seenItemsThreshold() {
    throw new Error("<Products>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set seenItemsThreshold(value) {
    throw new Error("<Products>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const closeIcon = "" + new URL("close-small-bceba333.svg", import.meta.url).href;
const Star = "" + new URL("star-5e98f426.svg", import.meta.url).href;
const file$c = "src/lib/components/Season/Season.svelte";
function add_css$b(target) {
  append_styles(target, "svelte-cdhd7b", ".gradient.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{position:absolute;bottom:0px;left:0px;height:64px;width:100%;border-bottom-right-radius:12px;border-bottom-left-radius:12px;background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:transparent;--tw-gradient-to:rgb(0 0 0 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#fff\n}button.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{display:inline;-webkit-appearance:none;appearance:none;padding-left:2px;padding-right:2px;text-transform:capitalize;text-decoration-line:underline\n}.background.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{position:absolute;top:0px;left:0px;z-index:9000;display:none;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));opacity:0.6\n}@media(min-width: 768px){.background.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{display:flex\n    }}.dialog-container.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{position:absolute;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center\n}dialog.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{position:relative;z-index:10000;display:flex;height:100%;width:100%;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0px\n}@media(min-width: 768px){dialog.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{height:496px;width:696px;border-radius:12px\n    }}section.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{overflow-y:auto;padding:16px;padding-top:12px;padding-bottom:32px\n}@media(min-width: 768px){section.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{padding:32px;padding-top:16px\n    }}dialog.svelte-cdhd7b img.close.svelte-cdhd7b.svelte-cdhd7b{position:absolute;top:16px;right:16px;height:24px;width:24px;cursor:pointer\n}@media(min-width: 768px){dialog.svelte-cdhd7b img.close.svelte-cdhd7b.svelte-cdhd7b{top:24px;right:24px\n    }}dialog.svelte-cdhd7b h1.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:8px;margin-top:16px;width:100%;padding-left:16px;padding-right:16px;font-size:16px;line-height:24px;font-weight:700\n}@media(min-width: 768px){dialog.svelte-cdhd7b h1.svelte-cdhd7b.svelte-cdhd7b{margin-top:40px;margin-bottom:8px;text-align:center;font-size:24px;line-height:32px\n    }}article.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b:not(:last-child){margin-bottom:24px\n}@media(min-width: 768px){article.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b:not(:last-child){margin-bottom:28px\n    }}article.svelte-cdhd7b h2.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:12px;font-size:16px;line-height:24px;font-weight:700\n}@media(min-width: 768px){article.svelte-cdhd7b h2.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:16px;font-size:20px;line-height:28px\n    }}h3.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{font-size:14px;line-height:20px;font-weight:700\n}@media(min-width: 768px){h3.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{font-size:16px;line-height:24px\n    }}ul.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{display:flex\n}ul.svelte-cdhd7b li.svelte-cdhd7b.svelte-cdhd7b{margin-right:8px\n}ul.offset.svelte-cdhd7b li.svelte-cdhd7b.svelte-cdhd7b:not(:first-child){margin-left:-20px\n}@media(max-width: 360px){ul.offset.svelte-cdhd7b li.svelte-cdhd7b.svelte-cdhd7b:not(:first-child){margin-left:-24px\n    }}@media(max-width: 320px){ul.offset.svelte-cdhd7b li.svelte-cdhd7b.svelte-cdhd7b:not(:first-child){margin-left:-28px\n    }}.characteristics.svelte-cdhd7b>div.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:16px;display:flex;justify-content:flex-start\n}@media(min-width: 768px){.characteristics.svelte-cdhd7b>div.svelte-cdhd7b.svelte-cdhd7b{gap:24px\n    }}.characteristics.svelte-cdhd7b>p.svelte-cdhd7b.svelte-cdhd7b{font-size:14px;line-height:20px\n}@media(min-width: 768px){.characteristics.svelte-cdhd7b>p.svelte-cdhd7b.svelte-cdhd7b{font-size:16px;line-height:24px\n    }}.characteristics.svelte-cdhd7b h3.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:8px\n}.best-colors.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:8px\n}.best-colors.svelte-cdhd7b ul.svelte-cdhd7b.svelte-cdhd7b{flex-wrap:wrap\n}@media(min-width: 768px){.best-colors.svelte-cdhd7b ul.svelte-cdhd7b.svelte-cdhd7b{flex-wrap:nowrap\n    }}.best-colors.svelte-cdhd7b ul.svelte-cdhd7b li.svelte-cdhd7b{margin-bottom:8px\n}@media(min-width: 768px){.best-colors.svelte-cdhd7b ul.svelte-cdhd7b li.svelte-cdhd7b{margin-bottom:0px\n    }}.best-colors.svelte-cdhd7b>div.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:16px;display:flex;align-items:flex-start\n}@media(min-width: 768px){.best-colors.svelte-cdhd7b>div.svelte-cdhd7b.svelte-cdhd7b{align-items:center\n    }}.best-colors.svelte-cdhd7b h2.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:12px\n}@media(min-width: 768px){.best-colors.svelte-cdhd7b h2.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:16px\n    }}.best-colors.svelte-cdhd7b h3.svelte-cdhd7b.svelte-cdhd7b{width:86.4px;flex-shrink:0\n}@media(min-width: 768px){.best-colors.svelte-cdhd7b h3.svelte-cdhd7b.svelte-cdhd7b{width:108px\n    }}.celebrities.svelte-cdhd7b>div.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:16px;display:flex;gap:16px\n}.celebrities.svelte-cdhd7b .info.svelte-cdhd7b.svelte-cdhd7b{margin-bottom:0px;display:flex;gap:8px\n}@media(min-width: 768px){.celebrities.svelte-cdhd7b .info.svelte-cdhd7b.svelte-cdhd7b{gap:16px\n    }}.celebrities.svelte-cdhd7b .info p.svelte-cdhd7b.svelte-cdhd7b{font-size:14px;line-height:20px\n}@media(min-width: 768px){.celebrities.svelte-cdhd7b .info p.svelte-cdhd7b.svelte-cdhd7b{font-size:16px;line-height:24px\n    }}.celebrities.svelte-cdhd7b img.svelte-cdhd7b.svelte-cdhd7b{max-width:calc(50% - 8px)\n}@media(min-width: 768px){.celebrities.svelte-cdhd7b img.svelte-cdhd7b.svelte-cdhd7b{max-width:308px\n    }}.celebrities.svelte-cdhd7b img.star.svelte-cdhd7b.svelte-cdhd7b{height:32px;width:32px\n}@media(min-width: 768px){.celebrities.svelte-cdhd7b img.star.svelte-cdhd7b.svelte-cdhd7b{height:40px;width:40px\n    }}.color.svelte-cdhd7b.svelte-cdhd7b.svelte-cdhd7b{height:36px;width:36px;border-radius:9999px\n}");
}
function get_each_context$3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  child_ctx[27] = i;
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function create_if_block$6(ctx) {
  let div0;
  let t0;
  let div6;
  let dialog;
  let img0;
  let img0_src_value;
  let t1;
  let h1;
  let t2_value = (
    /*$language*/
    ctx[10].personalGuidanceForType + ""
  );
  let t2;
  let t3;
  let t4_value = (
    /*$language*/
    ctx[10][
      /*title*/
      ctx[0]
    ] + ""
  );
  let t4;
  let t5;
  let section;
  let article0;
  let h20;
  let t6_value = (
    /*$language*/
    ctx[10].yourCharacteristics + ""
  );
  let t6;
  let t7;
  let div1;
  let t8;
  let p0;
  let t9_value = (
    /*$language*/
    ctx[10][
      /*tonesDescription*/
      ctx[5]
    ] + ""
  );
  let t9;
  let t10;
  let article1;
  let h21;
  let t11_value = (
    /*$language*/
    ctx[10].bestColors + ""
  );
  let t11;
  let t12;
  let t13;
  let article2;
  let h22;
  let t14_value = (
    /*$language*/
    ctx[10].appearanceType + ""
  );
  let t14;
  let t15;
  let t16_value = (
    /*$language*/
    ctx[10][
      /*title*/
      ctx[0]
    ].toLowerCase() + ""
  );
  let t16;
  let t17;
  let div2;
  let t18;
  let div4;
  let img1;
  let img1_src_value;
  let t19;
  let div3;
  let h3;
  let t20_value = (
    /*$language*/
    ctx[10].celebritiesWithThe + ""
  );
  let t20;
  let t21;
  let t22;
  let t23;
  let t24_value = (
    /*$language*/
    ctx[10].celebritiesColorType + ""
  );
  let t24;
  let t25;
  let p1;
  let t26_value = (
    /*celebrities*/
    ctx[6].join(", ") + ""
  );
  let t26;
  let t27;
  let div5;
  let mounted;
  let dispose;
  let each_value_3 = [
    /*faceTones*/
    ctx[1],
    /*browsTones*/
    ctx[3],
    /*hairTones*/
    ctx[2],
    /*eyeTones*/
    ctx[4]
  ];
  validate_each_argument(each_value_3);
  let each_blocks_2 = [];
  for (let i = 0; i < 4; i += 1) {
    each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  let each_value_1 = (
    /*bestColorsTitles*/
    ctx[12]
  );
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*appearances*/
    ctx[7]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      div6 = element("div");
      dialog = element("dialog");
      img0 = element("img");
      t1 = space();
      h1 = element("h1");
      t2 = text(t2_value);
      t3 = space();
      t4 = text(t4_value);
      t5 = space();
      section = element("section");
      article0 = element("article");
      h20 = element("h2");
      t6 = text(t6_value);
      t7 = space();
      div1 = element("div");
      for (let i = 0; i < 4; i += 1) {
        each_blocks_2[i].c();
      }
      t8 = space();
      p0 = element("p");
      t9 = text(t9_value);
      t10 = space();
      article1 = element("article");
      h21 = element("h2");
      t11 = text(t11_value);
      t12 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t13 = space();
      article2 = element("article");
      h22 = element("h2");
      t14 = text(t14_value);
      t15 = space();
      t16 = text(t16_value);
      t17 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t18 = space();
      div4 = element("div");
      img1 = element("img");
      t19 = space();
      div3 = element("div");
      h3 = element("h3");
      t20 = text(t20_value);
      t21 = space();
      t22 = text(
        /*title*/
        ctx[0]
      );
      t23 = space();
      t24 = text(t24_value);
      t25 = space();
      p1 = element("p");
      t26 = text(t26_value);
      t27 = space();
      div5 = element("div");
      attr_dev(div0, "class", "background svelte-cdhd7b");
      add_location(div0, file$c, 37, 2, 843);
      attr_dev(img0, "class", "close svelte-cdhd7b");
      if (!src_url_equal(img0.src, img0_src_value = closeIcon))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Close");
      add_location(img0, file$c, 41, 6, 975);
      attr_dev(h1, "class", "svelte-cdhd7b");
      add_location(h1, file$c, 42, 6, 1063);
      attr_dev(h20, "class", "svelte-cdhd7b");
      add_location(h20, file$c, 45, 10, 1195);
      attr_dev(div1, "class", "svelte-cdhd7b");
      add_location(div1, file$c, 46, 10, 1246);
      attr_dev(p0, "class", "svelte-cdhd7b");
      add_location(p0, file$c, 58, 10, 1679);
      attr_dev(article0, "class", "characteristics svelte-cdhd7b");
      add_location(article0, file$c, 44, 8, 1151);
      attr_dev(h21, "class", "svelte-cdhd7b");
      add_location(h21, file$c, 61, 10, 1783);
      attr_dev(article1, "class", "best-colors svelte-cdhd7b");
      add_location(article1, file$c, 60, 8, 1743);
      attr_dev(h22, "class", "svelte-cdhd7b");
      add_location(h22, file$c, 74, 10, 2222);
      attr_dev(div2, "class", "svelte-cdhd7b");
      add_location(div2, file$c, 75, 10, 2301);
      if (!src_url_equal(img1.src, img1_src_value = Star))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Star");
      attr_dev(img1, "class", "star svelte-cdhd7b");
      add_location(img1, file$c, 81, 12, 2494);
      attr_dev(h3, "class", "svelte-cdhd7b");
      add_location(h3, file$c, 83, 14, 2569);
      attr_dev(p1, "class", "svelte-cdhd7b");
      add_location(p1, file$c, 84, 14, 2664);
      add_location(div3, file$c, 82, 12, 2549);
      attr_dev(div4, "class", "info svelte-cdhd7b");
      add_location(div4, file$c, 80, 10, 2463);
      attr_dev(article2, "class", "celebrities svelte-cdhd7b");
      add_location(article2, file$c, 73, 8, 2182);
      attr_dev(section, "class", "svelte-cdhd7b");
      add_location(section, file$c, 43, 6, 1133);
      attr_dev(div5, "class", "gradient svelte-cdhd7b");
      add_location(div5, file$c, 89, 6, 2774);
      attr_dev(dialog, "class", "svelte-cdhd7b");
      add_location(dialog, file$c, 40, 4, 960);
      attr_dev(div6, "class", "dialog-container svelte-cdhd7b");
      add_location(div6, file$c, 39, 2, 899);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, dialog);
      append_dev(dialog, img0);
      append_dev(dialog, t1);
      append_dev(dialog, h1);
      append_dev(h1, t2);
      append_dev(h1, t3);
      append_dev(h1, t4);
      append_dev(dialog, t5);
      append_dev(dialog, section);
      append_dev(section, article0);
      append_dev(article0, h20);
      append_dev(h20, t6);
      append_dev(article0, t7);
      append_dev(article0, div1);
      for (let i = 0; i < 4; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(div1, null);
        }
      }
      append_dev(article0, t8);
      append_dev(article0, p0);
      append_dev(p0, t9);
      append_dev(section, t10);
      append_dev(section, article1);
      append_dev(article1, h21);
      append_dev(h21, t11);
      append_dev(article1, t12);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(article1, null);
        }
      }
      append_dev(section, t13);
      append_dev(section, article2);
      append_dev(article2, h22);
      append_dev(h22, t14);
      append_dev(h22, t15);
      append_dev(h22, t16);
      append_dev(article2, t17);
      append_dev(article2, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div2, null);
        }
      }
      append_dev(article2, t18);
      append_dev(article2, div4);
      append_dev(div4, img1);
      append_dev(div4, t19);
      append_dev(div4, div3);
      append_dev(div3, h3);
      append_dev(h3, t20);
      append_dev(h3, t21);
      append_dev(h3, t22);
      append_dev(h3, t23);
      append_dev(h3, t24);
      append_dev(div3, t25);
      append_dev(div3, p1);
      append_dev(p1, t26);
      append_dev(dialog, t27);
      append_dev(dialog, div5);
      if (!mounted) {
        dispose = [
          action_destroyer(portal.call(null, div0, "best-match")),
          listen_dev(
            img0,
            "click",
            /*click_handler_1*/
            ctx[15],
            false,
            false,
            false,
            false
          ),
          action_destroyer(portal.call(null, div6, "best-match"))
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      1024 && t2_value !== (t2_value = /*$language*/
      ctx2[10].personalGuidanceForType + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*$language, title*/
      1025 && t4_value !== (t4_value = /*$language*/
      ctx2[10][
        /*title*/
        ctx2[0]
      ] + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*$language*/
      1024 && t6_value !== (t6_value = /*$language*/
      ctx2[10].yourCharacteristics + ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*faceTones, browsTones, hairTones, eyeTones, $language, yourColorsTitles*/
      3102) {
        each_value_3 = [
          /*faceTones*/
          ctx2[1],
          /*browsTones*/
          ctx2[3],
          /*hairTones*/
          ctx2[2],
          /*eyeTones*/
          ctx2[4]
        ];
        validate_each_argument(each_value_3);
        let i;
        for (i = 0; i < 4; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_3(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(div1, null);
          }
        }
        for (; i < 4; i += 1) {
          each_blocks_2[i].d(1);
        }
      }
      if (dirty & /*$language, tonesDescription*/
      1056 && t9_value !== (t9_value = /*$language*/
      ctx2[10][
        /*tonesDescription*/
        ctx2[5]
      ] + ""))
        set_data_dev(t9, t9_value);
      if (dirty & /*$language*/
      1024 && t11_value !== (t11_value = /*$language*/
      ctx2[10].bestColors + ""))
        set_data_dev(t11, t11_value);
      if (dirty & /*bestColors, bestColorsTitles, $language*/
      5376) {
        each_value_1 = /*bestColorsTitles*/
        ctx2[12];
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(article1, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*$language*/
      1024 && t14_value !== (t14_value = /*$language*/
      ctx2[10].appearanceType + ""))
        set_data_dev(t14, t14_value);
      if (dirty & /*$language, title*/
      1025 && t16_value !== (t16_value = /*$language*/
      ctx2[10][
        /*title*/
        ctx2[0]
      ].toLowerCase() + ""))
        set_data_dev(t16, t16_value);
      if (dirty & /*appearances*/
      128) {
        each_value = /*appearances*/
        ctx2[7];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div2, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*$language*/
      1024 && t20_value !== (t20_value = /*$language*/
      ctx2[10].celebritiesWithThe + ""))
        set_data_dev(t20, t20_value);
      if (dirty & /*title*/
      1)
        set_data_dev(
          t22,
          /*title*/
          ctx2[0]
        );
      if (dirty & /*$language*/
      1024 && t24_value !== (t24_value = /*$language*/
      ctx2[10].celebritiesColorType + ""))
        set_data_dev(t24, t24_value);
      if (dirty & /*celebrities*/
      64 && t26_value !== (t26_value = /*celebrities*/
      ctx2[6].join(", ") + ""))
        set_data_dev(t26, t26_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div6);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$6.name,
    type: "if",
    source: "(37:0) {#if open}",
    ctx
  });
  return block;
}
function create_each_block_4(ctx) {
  let li;
  let li_style_value;
  const block = {
    c: function create() {
      li = element("li");
      attr_dev(li, "class", "color svelte-cdhd7b");
      attr_dev(li, "style", li_style_value = `background-color:${/*tone*/
      ctx[22]}`);
      add_location(li, file$c, 52, 20, 1507);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*faceTones, browsTones, hairTones, eyeTones*/
      30 && li_style_value !== (li_style_value = `background-color:${/*tone*/
      ctx2[22]}`)) {
        attr_dev(li, "style", li_style_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_4.name,
    type: "each",
    source: "(52:18) {#each tones as tone}",
    ctx
  });
  return block;
}
function create_each_block_3(ctx) {
  let div;
  let h3;
  let t0_value = (
    /*$language*/
    ctx[10][
      /*yourColorsTitles*/
      ctx[11][
        /*idx*/
        ctx[27]
      ]
    ] + ""
  );
  let t0;
  let t1;
  let ul;
  let t2;
  let each_value_4 = (
    /*tones*/
    ctx[25]
  );
  validate_each_argument(each_value_4);
  let each_blocks = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  const block = {
    c: function create() {
      div = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      attr_dev(h3, "class", "svelte-cdhd7b");
      add_location(h3, file$c, 49, 16, 1367);
      attr_dev(ul, "class", "offset svelte-cdhd7b");
      add_location(ul, file$c, 50, 16, 1427);
      add_location(div, file$c, 48, 14, 1345);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h3);
      append_dev(h3, t0);
      append_dev(div, t1);
      append_dev(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      append_dev(div, t2);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      1024 && t0_value !== (t0_value = /*$language*/
      ctx2[10][
        /*yourColorsTitles*/
        ctx2[11][
          /*idx*/
          ctx2[27]
        ]
      ] + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*faceTones, browsTones, hairTones, eyeTones*/
      30) {
        each_value_4 = /*tones*/
        ctx2[25];
        validate_each_argument(each_value_4);
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_4(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_4.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_3.name,
    type: "each",
    source: "(48:12) {#each [faceTones, browsTones, hairTones, eyeTones] as tones, idx}",
    ctx
  });
  return block;
}
function create_each_block_2(ctx) {
  let li;
  let li_style_value;
  const block = {
    c: function create() {
      li = element("li");
      attr_dev(li, "class", "color svelte-cdhd7b");
      attr_dev(li, "style", li_style_value = `background-color:${/*tone*/
      ctx[22]}`);
      add_location(li, file$c, 67, 18, 2018);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*bestColors*/
      256 && li_style_value !== (li_style_value = `background-color:${/*tone*/
      ctx2[22]}`)) {
        attr_dev(li, "style", li_style_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_2.name,
    type: "each",
    source: "(67:16) {#each bestColors[colorArea] as tone}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let div;
  let h3;
  let t0_value = (
    /*$language*/
    ctx[10][
      /*colorArea*/
      ctx[19]
    ] + ""
  );
  let t0;
  let t1;
  let ul;
  let t2;
  let each_value_2 = (
    /*bestColors*/
    ctx[8][
      /*colorArea*/
      ctx[19]
    ]
  );
  validate_each_argument(each_value_2);
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const block = {
    c: function create() {
      div = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      attr_dev(h3, "class", "svelte-cdhd7b");
      add_location(h3, file$c, 64, 14, 1895);
      attr_dev(ul, "class", "svelte-cdhd7b");
      add_location(ul, file$c, 65, 14, 1941);
      attr_dev(div, "class", "svelte-cdhd7b");
      add_location(div, file$c, 63, 12, 1875);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h3);
      append_dev(h3, t0);
      append_dev(div, t1);
      append_dev(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      append_dev(div, t2);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      1024 && t0_value !== (t0_value = /*$language*/
      ctx2[10][
        /*colorArea*/
        ctx2[19]
      ] + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*bestColors, bestColorsTitles*/
      4352) {
        each_value_2 = /*bestColors*/
        ctx2[8][
          /*colorArea*/
          ctx2[19]
        ];
        validate_each_argument(each_value_2);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(63:10) {#each bestColorsTitles as colorArea}",
    ctx
  });
  return block;
}
function create_each_block$3(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      if (!src_url_equal(img.src, img_src_value = /*appearance*/
      ctx[16]))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Sample appearance");
      attr_dev(img, "class", "svelte-cdhd7b");
      add_location(img, file$c, 77, 14, 2367);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*appearances*/
      128 && !src_url_equal(img.src, img_src_value = /*appearance*/
      ctx2[16])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$3.name,
    type: "each",
    source: "(77:12) {#each appearances as appearance}",
    ctx
  });
  return block;
}
function create_fragment$e(ctx) {
  let button;
  let t0_value = (
    /*$language*/
    ctx[10][
      /*title*/
      ctx[0]
    ] + ""
  );
  let t0;
  let t1;
  let if_block_anchor;
  let mounted;
  let dispose;
  let if_block = (
    /*open*/
    ctx[9] && create_if_block$6(ctx)
  );
  const block = {
    c: function create() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      attr_dev(button, "class", "svelte-cdhd7b");
      add_location(button, file$c, 29, 0, 715);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t0);
      insert_dev(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[14],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*$language, title*/
      1025 && t0_value !== (t0_value = /*$language*/
      ctx2[10][
        /*title*/
        ctx2[0]
      ] + ""))
        set_data_dev(t0, t0_value);
      if (
        /*open*/
        ctx2[9]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$6(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
      if (detaching)
        detach_dev(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$e($$self, $$props, $$invalidate) {
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(10, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Season", slots, []);
  let { season } = $$props;
  let { title } = $$props;
  let { faceTones } = $$props;
  let { hairTones } = $$props;
  let { browsTones } = $$props;
  let { eyeTones } = $$props;
  let { tonesDescription } = $$props;
  let { celebrities } = $$props;
  let { appearances } = $$props;
  let { bestColors } = $$props;
  let open = false;
  const yourColorsTitles = ["faceTones", "browsTones", "hairTones", "eyeTones"];
  const bestColorsTitles = [
    "eyeshadow",
    "mascara",
    "lipstick",
    "blush",
    "hair",
    "jewelry",
    "clothes",
    "shoes"
  ];
  $$self.$$.on_mount.push(function() {
    if (season === void 0 && !("season" in $$props || $$self.$$.bound[$$self.$$.props["season"]])) {
      console.warn("<Season> was created without expected prop 'season'");
    }
    if (title === void 0 && !("title" in $$props || $$self.$$.bound[$$self.$$.props["title"]])) {
      console.warn("<Season> was created without expected prop 'title'");
    }
    if (faceTones === void 0 && !("faceTones" in $$props || $$self.$$.bound[$$self.$$.props["faceTones"]])) {
      console.warn("<Season> was created without expected prop 'faceTones'");
    }
    if (hairTones === void 0 && !("hairTones" in $$props || $$self.$$.bound[$$self.$$.props["hairTones"]])) {
      console.warn("<Season> was created without expected prop 'hairTones'");
    }
    if (browsTones === void 0 && !("browsTones" in $$props || $$self.$$.bound[$$self.$$.props["browsTones"]])) {
      console.warn("<Season> was created without expected prop 'browsTones'");
    }
    if (eyeTones === void 0 && !("eyeTones" in $$props || $$self.$$.bound[$$self.$$.props["eyeTones"]])) {
      console.warn("<Season> was created without expected prop 'eyeTones'");
    }
    if (tonesDescription === void 0 && !("tonesDescription" in $$props || $$self.$$.bound[$$self.$$.props["tonesDescription"]])) {
      console.warn("<Season> was created without expected prop 'tonesDescription'");
    }
    if (celebrities === void 0 && !("celebrities" in $$props || $$self.$$.bound[$$self.$$.props["celebrities"]])) {
      console.warn("<Season> was created without expected prop 'celebrities'");
    }
    if (appearances === void 0 && !("appearances" in $$props || $$self.$$.bound[$$self.$$.props["appearances"]])) {
      console.warn("<Season> was created without expected prop 'appearances'");
    }
    if (bestColors === void 0 && !("bestColors" in $$props || $$self.$$.bound[$$self.$$.props["bestColors"]])) {
      console.warn("<Season> was created without expected prop 'bestColors'");
    }
  });
  const writable_props = [
    "season",
    "title",
    "faceTones",
    "hairTones",
    "browsTones",
    "eyeTones",
    "tonesDescription",
    "celebrities",
    "appearances",
    "bestColors"
  ];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Season> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => {
    $$invalidate(9, open = true);
    analytics.main_color_analysis();
  };
  const click_handler_1 = () => $$invalidate(9, open = false);
  $$self.$$set = ($$props2) => {
    if ("season" in $$props2)
      $$invalidate(13, season = $$props2.season);
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("faceTones" in $$props2)
      $$invalidate(1, faceTones = $$props2.faceTones);
    if ("hairTones" in $$props2)
      $$invalidate(2, hairTones = $$props2.hairTones);
    if ("browsTones" in $$props2)
      $$invalidate(3, browsTones = $$props2.browsTones);
    if ("eyeTones" in $$props2)
      $$invalidate(4, eyeTones = $$props2.eyeTones);
    if ("tonesDescription" in $$props2)
      $$invalidate(5, tonesDescription = $$props2.tonesDescription);
    if ("celebrities" in $$props2)
      $$invalidate(6, celebrities = $$props2.celebrities);
    if ("appearances" in $$props2)
      $$invalidate(7, appearances = $$props2.appearances);
    if ("bestColors" in $$props2)
      $$invalidate(8, bestColors = $$props2.bestColors);
  };
  $$self.$capture_state = () => ({
    analytics,
    closeIcon,
    portal,
    language,
    Star,
    season,
    title,
    faceTones,
    hairTones,
    browsTones,
    eyeTones,
    tonesDescription,
    celebrities,
    appearances,
    bestColors,
    open,
    yourColorsTitles,
    bestColorsTitles,
    $language
  });
  $$self.$inject_state = ($$props2) => {
    if ("season" in $$props2)
      $$invalidate(13, season = $$props2.season);
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("faceTones" in $$props2)
      $$invalidate(1, faceTones = $$props2.faceTones);
    if ("hairTones" in $$props2)
      $$invalidate(2, hairTones = $$props2.hairTones);
    if ("browsTones" in $$props2)
      $$invalidate(3, browsTones = $$props2.browsTones);
    if ("eyeTones" in $$props2)
      $$invalidate(4, eyeTones = $$props2.eyeTones);
    if ("tonesDescription" in $$props2)
      $$invalidate(5, tonesDescription = $$props2.tonesDescription);
    if ("celebrities" in $$props2)
      $$invalidate(6, celebrities = $$props2.celebrities);
    if ("appearances" in $$props2)
      $$invalidate(7, appearances = $$props2.appearances);
    if ("bestColors" in $$props2)
      $$invalidate(8, bestColors = $$props2.bestColors);
    if ("open" in $$props2)
      $$invalidate(9, open = $$props2.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    title,
    faceTones,
    hairTones,
    browsTones,
    eyeTones,
    tonesDescription,
    celebrities,
    appearances,
    bestColors,
    open,
    $language,
    yourColorsTitles,
    bestColorsTitles,
    season,
    click_handler,
    click_handler_1
  ];
}
class Season extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$e,
      create_fragment$e,
      safe_not_equal,
      {
        season: 13,
        title: 0,
        faceTones: 1,
        hairTones: 2,
        browsTones: 3,
        eyeTones: 4,
        tonesDescription: 5,
        celebrities: 6,
        appearances: 7,
        bestColors: 8
      },
      add_css$b
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Season",
      options,
      id: create_fragment$e.name
    });
  }
  get season() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set season(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get title() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set title(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get faceTones() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set faceTones(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get hairTones() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set hairTones(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get browsTones() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set browsTones(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get eyeTones() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set eyeTones(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get tonesDescription() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set tonesDescription(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get celebrities() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set celebrities(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get appearances() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set appearances(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get bestColors() {
    throw new Error("<Season>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set bestColors(value) {
    throw new Error("<Season>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$b = "src/lib/components/Viewer/ViewerDemo.svelte";
function add_css$a(target) {
  append_styles(target, "svelte-128w2qu", "article.svelte-128w2qu.svelte-128w2qu{position:absolute;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center;--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)\n}dialog.svelte-128w2qu.svelte-128w2qu{position:relative;display:flex;height:156px;width:288px;flex-direction:column;align-items:center;justify-content:center;border-radius:18px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:32px;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}dialog.svelte-128w2qu>p.svelte-128w2qu{margin-bottom:20px;font-size:20px;line-height:28px;font-weight:700\n}dialog.svelte-128w2qu>.pick{height:44px;width:100%;border-radius:9999px;font-size:16px;line-height:24px\n}dialog.svelte-128w2qu>.close{position:absolute;top:12px;right:12px\n}");
}
function create_default_slot$6(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Pick a date");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$6.name,
    type: "slot",
    source: '(11:4) <Button class=\\"pick\\" on:click={() => dispatch(\\"pick\\")}>',
    ctx
  });
  return block;
}
function create_if_block$5(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      icon: "close",
      variant: "normal",
      size: "base",
      class: "close"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler_1*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: noop,
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
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$5.name,
    type: "if",
    source: "(12:4) {#if close}",
    ctx
  });
  return block;
}
function create_fragment$d(ctx) {
  let article;
  let dialog;
  let p;
  let t1;
  let button;
  let t2;
  let current;
  button = new Button({
    props: {
      class: "pick",
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[2]
  );
  let if_block = (
    /*close*/
    ctx[0] && create_if_block$5(ctx)
  );
  const block = {
    c: function create() {
      article = element("article");
      dialog = element("dialog");
      p = element("p");
      p.textContent = "Book a Demo";
      t1 = space();
      create_component(button.$$.fragment);
      t2 = space();
      if (if_block)
        if_block.c();
      attr_dev(p, "class", "svelte-128w2qu");
      add_location(p, file$b, 9, 4, 279);
      attr_dev(dialog, "class", "svelte-128w2qu");
      add_location(dialog, file$b, 8, 2, 266);
      attr_dev(article, "class", "svelte-128w2qu");
      add_location(article, file$b, 7, 0, 254);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      append_dev(article, dialog);
      append_dev(dialog, p);
      append_dev(dialog, t1);
      mount_component(button, dialog, null);
      append_dev(dialog, t2);
      if (if_block)
        if_block.m(dialog, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (
        /*close*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*close*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$5(ctx2);
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
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      destroy_component(button);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$d($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ViewerDemo", slots, []);
  const dispatch = createEventDispatcher();
  let close = false;
  onMount(() => setTimeout(() => $$invalidate(0, close = true), 3e3));
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ViewerDemo> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => dispatch("pick");
  const click_handler_1 = () => dispatch("close");
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    Button,
    IconButton,
    dispatch,
    close
  });
  $$self.$inject_state = ($$props2) => {
    if ("close" in $$props2)
      $$invalidate(0, close = $$props2.close);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [close, dispatch, click_handler, click_handler_1];
}
class ViewerDemo extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {}, add_css$a);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ViewerDemo",
      options,
      id: create_fragment$d.name
    });
  }
}
const file$a = "src/lib/components/Viewer/ViewerProblemsTabs.svelte";
function add_css$9(target) {
  append_styles(target, "svelte-ip8oji", "ul.svelte-ip8oji{display:flex;flex-direction:row;align-items:flex-end;gap:8px;overflow:auto\n}@media(min-width: 1024px){ul.svelte-ip8oji{flex-wrap:wrap;overflow:visible\n    }}.problem-color.svelte-ip8oji{margin-right:2px;display:inline-block;height:10px;width:10px;border-radius:9999px\n}li.svelte-ip8oji>button{padding-left:8px;padding-top:4px;padding-bottom:4px;padding-right:16px\n}li.svelte-ip8oji>button span{display:flex;align-items:center\n}");
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_if_block$4(ctx) {
  let li;
  let button;
  let current;
  button = new Button({
    props: {
      variant: (
        /*activeTab*/
        ctx[0] === "" ? "overlay-active" : "overlay"
      ),
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[6]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(button.$$.fragment);
      attr_dev(li, "class", "svelte-ip8oji");
      add_location(li, file$a, 9, 4, 351);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(button, li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*activeTab*/
      1)
        button_changes.variant = /*activeTab*/
        ctx2[0] === "" ? "overlay-active" : "overlay";
      if (dirty & /*$$scope*/
      2048) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$4.name,
    type: "if",
    source: "(9:2) {#if $problems.length > 1}",
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("All");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(11:6) <Button         variant={activeTab === \\"\\" ? \\"overlay-active\\" : \\"overlay\\"}         on:click={async () => {           activeTab = \\"\\"           await clearAllProblems()           await setActiveProblems($problemsVariant, $problems)         }}       >',
    ctx
  });
  return block;
}
function create_default_slot$5(ctx) {
  let span;
  let t0;
  let t1_value = (
    /*getProblemData*/
    ctx[4](
      /*problem*/
      ctx[8]
    ).tabTitle + ""
  );
  let t1;
  const block = {
    c: function create() {
      span = element("span");
      t0 = text(" ");
      t1 = text(t1_value);
      attr_dev(span, "class", "problem-color svelte-ip8oji");
      set_style(
        span,
        "background-color",
        /*getProblemData*/
        ctx[4](
          /*problem*/
          ctx[8]
        ).color
      );
      add_location(span, file$a, 39, 8, 1214);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$problems*/
      2) {
        set_style(
          span,
          "background-color",
          /*getProblemData*/
          ctx2[4](
            /*problem*/
            ctx2[8]
          ).color
        );
      }
      if (dirty & /*$problems*/
      2 && t1_value !== (t1_value = /*getProblemData*/
      ctx2[4](
        /*problem*/
        ctx2[8]
      ).tabTitle + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$5.name,
    type: "slot",
    source: '(25:6) <Button         variant={activeTab === problem ? \\"overlay-active\\" : \\"overlay\\"}         on:click={async () => {           if (problem === activeTab) {             activeTab = \\"\\"             await clearAllProblems()             await setActiveProblems($problemsVariant, $problems)           } else {             activeTab = problem             await clearAllProblems()             await setActiveProblems($problemsVariant, [problem])           }         }}         qa=\\"tint-skin-care-problem-item\\"       >',
    ctx
  });
  return block;
}
function create_each_block$2(ctx) {
  let li;
  let button;
  let t;
  let current;
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[7](
        /*problem*/
        ctx[8]
      )
    );
  }
  button = new Button({
    props: {
      variant: (
        /*activeTab*/
        ctx[0] === /*problem*/
        ctx[8] ? "overlay-active" : "overlay"
      ),
      qa: "tint-skin-care-problem-item",
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on("click", click_handler_1);
  const block = {
    c: function create() {
      li = element("li");
      create_component(button.$$.fragment);
      t = space();
      attr_dev(li, "class", "svelte-ip8oji");
      add_location(li, file$a, 23, 4, 691);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(button, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      const button_changes = {};
      if (dirty & /*activeTab, $problems*/
      3)
        button_changes.variant = /*activeTab*/
        ctx[0] === /*problem*/
        ctx[8] ? "overlay-active" : "overlay";
      if (dirty & /*$$scope, $problems*/
      2050) {
        button_changes.$$scope = { dirty, ctx };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$2.name,
    type: "each",
    source: "(23:2) {#each $problems as problem}",
    ctx
  });
  return block;
}
function create_fragment$c(ctx) {
  let ul;
  let t;
  let current;
  let if_block = (
    /*$problems*/
    ctx[1].length > 1 && create_if_block$4(ctx)
  );
  let each_value = (
    /*$problems*/
    ctx[1]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      ul = element("ul");
      if (if_block)
        if_block.c();
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(ul, "data-qa", "tint-skin-care-problems");
      attr_dev(ul, "class", "svelte-ip8oji");
      add_location(ul, file$a, 7, 0, 279);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, ul, anchor);
      if (if_block)
        if_block.m(ul, null);
      append_dev(ul, t);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*$problems*/
        ctx2[1].length > 1
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$problems*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(ul, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & /*activeTab, $problems, clearAllProblems, setActiveProblems, $problemsVariant, getProblemData*/
      23) {
        each_value = /*$problems*/
        ctx2[1];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(ul);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$c($$self, $$props, $$invalidate) {
  let $problems;
  let $problemsVariant;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ViewerProblemsTabs", slots, []);
  const { problems, getProblemData, problemsVariant } = skinCare;
  validate_store(problems, "problems");
  component_subscribe($$self, problems, (value) => $$invalidate(1, $problems = value));
  validate_store(problemsVariant, "problemsVariant");
  component_subscribe($$self, problemsVariant, (value) => $$invalidate(2, $problemsVariant = value));
  let activeTab = "";
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<ViewerProblemsTabs> was created with unknown prop '${key2}'`);
  });
  const click_handler = async () => {
    $$invalidate(0, activeTab = "");
    await clearAllProblems();
    await setActiveProblems($problemsVariant, $problems);
  };
  const click_handler_1 = async (problem) => {
    if (problem === activeTab) {
      $$invalidate(0, activeTab = "");
      await clearAllProblems();
      await setActiveProblems($problemsVariant, $problems);
    } else {
      $$invalidate(0, activeTab = problem);
      await clearAllProblems();
      await setActiveProblems($problemsVariant, [problem]);
    }
  };
  $$self.$capture_state = () => ({
    Button,
    clearAllProblems,
    setActiveProblems,
    skinCare,
    problems,
    getProblemData,
    problemsVariant,
    activeTab,
    $problems,
    $problemsVariant
  });
  $$self.$inject_state = ($$props2) => {
    if ("activeTab" in $$props2)
      $$invalidate(0, activeTab = $$props2.activeTab);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    activeTab,
    $problems,
    $problemsVariant,
    problems,
    getProblemData,
    problemsVariant,
    click_handler,
    click_handler_1
  ];
}
class ViewerProblemsTabs extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {}, add_css$9);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ViewerProblemsTabs",
      options,
      id: create_fragment$c.name
    });
  }
}
const file$9 = "src/lib/components/Viewer/Viewer.svelte";
function add_css$8(target) {
  append_styles(target, "svelte-1yjo6vc", "article.svelte-1yjo6vc.svelte-1yjo6vc{position:relative;--tw-bg-opacity:1;background-color:rgb(244 244 244 / var(--tw-bg-opacity))\n}article.svelte-1yjo6vc>.plug.svelte-1yjo6vc{position:absolute;z-index:1;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgb(244 244 244 / var(--tw-bg-opacity))\n}menu.svelte-1yjo6vc.svelte-1yjo6vc{position:absolute;display:flex;flex-direction:column;align-items:flex-end;gap:8px;padding:12px\n}@media(min-width: 768px){menu.svelte-1yjo6vc.svelte-1yjo6vc{padding-right:20px\n    }}@media(min-width: 1024px){menu.svelte-1yjo6vc.svelte-1yjo6vc{flex-direction:row;padding-left:16px;padding-right:16px\n    }}menu.top.svelte-1yjo6vc.svelte-1yjo6vc{top:0px;right:0px;flex-direction:column;align-items:flex-end;justify-content:flex-end\n}@media(min-width: 1024px){menu.top.svelte-1yjo6vc.svelte-1yjo6vc{width:100%\n    }}.bottom.svelte-1yjo6vc.svelte-1yjo6vc{position:absolute;right:0px;bottom:0px;margin-bottom:12px;display:flex;width:100%;padding:12px\n}@media(min-width: 768px){.bottom.svelte-1yjo6vc.svelte-1yjo6vc{padding-right:20px\n    }}@media(min-width: 1024px){.bottom.svelte-1yjo6vc.svelte-1yjo6vc{margin-bottom:0px;width:100%;flex-direction:row;padding-left:16px;padding-right:16px\n    }}menu.left.svelte-1yjo6vc.svelte-1yjo6vc{position:absolute;left:0px;display:flex;flex-direction:column;align-items:flex-end;gap:8px;padding:12px\n}@media(min-width: 768px){menu.left.svelte-1yjo6vc.svelte-1yjo6vc{padding-left:16px\n    }}@media(min-width: 1024px){menu.left.svelte-1yjo6vc.svelte-1yjo6vc{margin-top:0px;flex-direction:row\n    }}menu.left.svelte-1yjo6vc.svelte-1yjo6vc:not(.recommendationSystem){margin-top:48px\n}@media(min-width: 768px){menu.left.svelte-1yjo6vc.svelte-1yjo6vc:not(.recommendationSystem){margin-top:0px\n    }}@media(min-width: 1024px){.undo.svelte-1yjo6vc.svelte-1yjo6vc,.redo.svelte-1yjo6vc.svelte-1yjo6vc{order:-1\n    }.redo.svelte-1yjo6vc.svelte-1yjo6vc{margin-right:auto\n    }}");
}
function create_if_block_9(ctx) {
  let spinner;
  let t;
  let div;
  let current;
  spinner = new Spinner({
    props: { centered: true, size: "lg" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(spinner.$$.fragment);
      t = space();
      div = element("div");
      attr_dev(div, "class", "plug svelte-1yjo6vc");
      add_location(div, file$9, 41, 4, 1509);
    },
    m: function mount2(target, anchor) {
      mount_component(spinner, target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(spinner.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(spinner.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(spinner, detaching);
      if (detaching)
        detach_dev(t);
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_9.name,
    type: "if",
    source: "(40:2) {#if loading}",
    ctx
  });
  return block;
}
function create_if_block_8(ctx) {
  let viewerdemo;
  let current;
  viewerdemo = new ViewerDemo({ $$inline: true });
  viewerdemo.$on(
    "close",
    /*close_handler*/
    ctx[25]
  );
  viewerdemo.$on(
    "pick",
    /*pick_handler*/
    ctx[26]
  );
  const block = {
    c: function create() {
      create_component(viewerdemo.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(viewerdemo, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(viewerdemo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(viewerdemo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(viewerdemo, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_8.name,
    type: "if",
    source: "(44:2) {#if ctx.demo && demo}",
    ctx
  });
  return block;
}
function create_if_block_7(ctx) {
  let li;
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      qa: "tint-close",
      icon: "close",
      variant: "overlay",
      size: "lg"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler*/
    ctx[27]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(iconbutton.$$.fragment);
      add_location(li, file$9, 52, 6, 1911);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(iconbutton, li, null);
      current = true;
    },
    p: noop,
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(iconbutton);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_7.name,
    type: "if",
    source: "(52:4) {#if mobile && recommendationSystem}",
    ctx
  });
  return block;
}
function create_if_block_4$2(ctx) {
  let li;
  let t;
  let current;
  let if_block0 = (
    /*skinCareEnabled*/
    ctx[8] && create_if_block_6$1(ctx)
  );
  let if_block1 = (
    /*mobile*/
    ctx[19] && create_if_block_5$2(ctx)
  );
  const block = {
    c: function create() {
      li = element("li");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      attr_dev(li, "class", "flex items-center gap-2");
      add_location(li, file$9, 63, 6, 2147);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      if (if_block0)
        if_block0.m(li, null);
      append_dev(li, t);
      if (if_block1)
        if_block1.m(li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*skinCareEnabled*/
        ctx2[8]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & /*skinCareEnabled*/
          256) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_6$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(li, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*mobile*/
        ctx2[19]
      )
        if_block1.p(ctx2, dirty);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$2.name,
    type: "if",
    source: "(63:4) {#if skinCareEnabled || mobile}",
    ctx
  });
  return block;
}
function create_if_block_6$1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: "overlay",
      qa: "tint-skin-care-analysis-button",
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*toggleQuiz*/
    ctx[20]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty[0] & /*$showProblems, $isQuizDone*/
      1536 | dirty[1] & /*$$scope*/
      4) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_6$1.name,
    type: "if",
    source: "(65:8) {#if skinCareEnabled}",
    ctx
  });
  return block;
}
function create_default_slot$4(ctx) {
  let t_value = (
    /*$showProblems*/
    ctx[9] && /*$isQuizDone*/
    ctx[10] ? "Hide analysis" : "Show analysis"
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*$showProblems, $isQuizDone*/
      1536 && t_value !== (t_value = /*$showProblems*/
      ctx2[9] && /*$isQuizDone*/
      ctx2[10] ? "Hide analysis" : "Show analysis"))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$4.name,
    type: "slot",
    source: '(66:10) <Button variant=\\"overlay\\" on:click={toggleQuiz} qa=\\"tint-skin-care-analysis-button\\">',
    ctx
  });
  return block;
}
function create_if_block_5$2(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      qa: "tint-full",
      icon: "full",
      variant: "overlay",
      size: "lg",
      active: (
        /*expanded*/
        ctx[4]
      )
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler_1*/
    ctx[28]
  );
  const block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const iconbutton_changes = {};
      if (dirty[0] & /*expanded*/
      16)
        iconbutton_changes.active = /*expanded*/
        ctx2[4];
      iconbutton.$set(iconbutton_changes);
    },
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
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5$2.name,
    type: "if",
    source: "(70:8) {#if mobile}",
    ctx
  });
  return block;
}
function create_if_block_3$2(ctx) {
  let li;
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      qa: "tint-compare",
      icon: "before",
      variant: "overlay",
      size: "lg",
      active: (
        /*isComparing*/
        ctx[2]
      )
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler_2*/
    ctx[29]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(iconbutton.$$.fragment);
      add_location(li, file$9, 82, 6, 2728);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(iconbutton, li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const iconbutton_changes = {};
      if (dirty[0] & /*isComparing*/
      4)
        iconbutton_changes.active = /*isComparing*/
        ctx2[2];
      iconbutton.$set(iconbutton_changes);
    },
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(iconbutton);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$2.name,
    type: "if",
    source: "(82:4) {#if !skinCareEnabled}",
    ctx
  });
  return block;
}
function create_if_block$3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_1$3, create_if_block_2$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    var _a;
    if (
      /*$showProblems*/
      ctx2[9]
    )
      return 0;
    if (
      /*appliedProductVto*/
      (_a = ctx2[7]) == null ? void 0 : _a.skincare
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      attr_dev(div, "class", "bottom svelte-1yjo6vc");
      attr_dev(div, "data-qa", "tint-canvas-overlay-menu-bottom");
      add_location(div, file$9, 117, 4, 3496);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        } else {
          if_block = null;
        }
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
        detach_dev(div);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$3.name,
    type: "if",
    source: "(117:2) {#if skinCareEnabled}",
    ctx
  });
  return block;
}
function create_if_block_2$2(ctx) {
  let range;
  let updating_value;
  let current;
  function range_value_binding(value) {
    ctx[32](value);
  }
  let range_props = {
    hide: !!/*$vto*/
    ctx[11].hidden.length,
    startLabel: `1 ${/*appliedProductVto*/
    ctx[7].skincare.minunit}`,
    endLabel: `${/*appliedProductVto*/
    ctx[7].skincare.max} ${/*appliedProductVto*/
    ctx[7].skincare.maxunit}`,
    max: (
      /*appliedProductVto*/
      ctx[7].skincare.max
    ),
    unit: (
      /*appliedProductVto*/
      ctx[7].skincare.maxunit
    ),
    qa: "tint-skin-care-range"
  };
  if (
    /*$rangeValue*/
    ctx[12] !== void 0
  ) {
    range_props.value = /*$rangeValue*/
    ctx[12];
  }
  range = new Range({ props: range_props, $$inline: true });
  binding_callbacks.push(() => bind(range, "value", range_value_binding));
  const block = {
    c: function create() {
      create_component(range.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(range, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const range_changes = {};
      if (dirty[0] & /*$vto*/
      2048)
        range_changes.hide = !!/*$vto*/
        ctx2[11].hidden.length;
      if (dirty[0] & /*appliedProductVto*/
      128)
        range_changes.startLabel = `1 ${/*appliedProductVto*/
        ctx2[7].skincare.minunit}`;
      if (dirty[0] & /*appliedProductVto*/
      128)
        range_changes.endLabel = `${/*appliedProductVto*/
        ctx2[7].skincare.max} ${/*appliedProductVto*/
        ctx2[7].skincare.maxunit}`;
      if (dirty[0] & /*appliedProductVto*/
      128)
        range_changes.max = /*appliedProductVto*/
        ctx2[7].skincare.max;
      if (dirty[0] & /*appliedProductVto*/
      128)
        range_changes.unit = /*appliedProductVto*/
        ctx2[7].skincare.maxunit;
      if (!updating_value && dirty[0] & /*$rangeValue*/
      4096) {
        updating_value = true;
        range_changes.value = /*$rangeValue*/
        ctx2[12];
        add_flush_callback(() => updating_value = false);
      }
      range.$set(range_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(range.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(range.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(range, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$2.name,
    type: "if",
    source: "(121:44) ",
    ctx
  });
  return block;
}
function create_if_block_1$3(ctx) {
  let viewerproblemstabs;
  let current;
  viewerproblemstabs = new ViewerProblemsTabs({ $$inline: true });
  const block = {
    c: function create() {
      create_component(viewerproblemstabs.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(viewerproblemstabs, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(viewerproblemstabs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(viewerproblemstabs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(viewerproblemstabs, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$3.name,
    type: "if",
    source: "(119:6) {#if $showProblems}",
    ctx
  });
  return block;
}
function create_fragment$b(ctx) {
  let article;
  let t0;
  let t1;
  let menu0;
  let t2;
  let t3;
  let t4;
  let menu1;
  let li0;
  let iconbutton0;
  let t5;
  let li1;
  let iconbutton1;
  let t6;
  let t7;
  let current;
  let if_block0 = (
    /*loading*/
    ctx[3] && create_if_block_9(ctx)
  );
  let if_block1 = (
    /*ctx*/
    ctx[17].demo && /*demo*/
    ctx[5] && create_if_block_8(ctx)
  );
  let if_block2 = (
    /*mobile*/
    ctx[19] && /*recommendationSystem*/
    ctx[21] && create_if_block_7(ctx)
  );
  let if_block3 = (
    /*skinCareEnabled*/
    (ctx[8] || /*mobile*/
    ctx[19]) && create_if_block_4$2(ctx)
  );
  let if_block4 = !/*skinCareEnabled*/
  ctx[8] && create_if_block_3$2(ctx);
  iconbutton0 = new IconButton({
    props: {
      qa: "tint-undo",
      icon: "back",
      variant: "overlay",
      size: "lg",
      disabled: !/*canUndo*/
      ctx[0]
    },
    $$inline: true
  });
  iconbutton0.$on(
    "click",
    /*click_handler_3*/
    ctx[30]
  );
  iconbutton1 = new IconButton({
    props: {
      qa: "tint-redo",
      icon: "forward",
      variant: "overlay",
      size: "lg",
      disabled: !/*canRedo*/
      ctx[1]
    },
    $$inline: true
  });
  iconbutton1.$on(
    "click",
    /*click_handler_4*/
    ctx[31]
  );
  let if_block5 = (
    /*skinCareEnabled*/
    ctx[8] && create_if_block$3(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[24].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[33],
    null
  );
  const block = {
    c: function create() {
      article = element("article");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      menu0 = element("menu");
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      menu1 = element("menu");
      li0 = element("li");
      create_component(iconbutton0.$$.fragment);
      t5 = space();
      li1 = element("li");
      create_component(iconbutton1.$$.fragment);
      t6 = space();
      if (if_block5)
        if_block5.c();
      t7 = space();
      if (default_slot)
        default_slot.c();
      attr_dev(menu0, "class", "top svelte-1yjo6vc");
      attr_dev(menu0, "data-qa", "tint-canvas-overlay-menu-top");
      add_location(menu0, file$9, 50, 2, 1806);
      attr_dev(li0, "class", "undo svelte-1yjo6vc");
      add_location(li0, file$9, 95, 4, 3027);
      attr_dev(li1, "class", "redo svelte-1yjo6vc");
      add_location(li1, file$9, 105, 4, 3243);
      attr_dev(menu1, "class", "left svelte-1yjo6vc");
      toggle_class(
        menu1,
        "recommendationSystem",
        /*recommendationSystem*/
        ctx[21]
      );
      add_location(menu1, file$9, 94, 2, 2976);
      attr_dev(article, "class", "svelte-1yjo6vc");
      add_location(article, file$9, 38, 0, 1444);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, article, anchor);
      if (if_block0)
        if_block0.m(article, null);
      append_dev(article, t0);
      if (if_block1)
        if_block1.m(article, null);
      append_dev(article, t1);
      append_dev(article, menu0);
      if (if_block2)
        if_block2.m(menu0, null);
      append_dev(menu0, t2);
      if (if_block3)
        if_block3.m(menu0, null);
      append_dev(menu0, t3);
      if (if_block4)
        if_block4.m(menu0, null);
      append_dev(article, t4);
      append_dev(article, menu1);
      append_dev(menu1, li0);
      mount_component(iconbutton0, li0, null);
      append_dev(menu1, t5);
      append_dev(menu1, li1);
      mount_component(iconbutton1, li1, null);
      append_dev(article, t6);
      if (if_block5)
        if_block5.m(article, null);
      append_dev(article, t7);
      if (default_slot) {
        default_slot.m(article, null);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*loading*/
        ctx2[3]
      ) {
        if (if_block0) {
          if (dirty[0] & /*loading*/
          8) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_9(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(article, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*ctx*/
        ctx2[17].demo && /*demo*/
        ctx2[5]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & /*demo*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_8(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(article, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*mobile*/
        ctx2[19] && /*recommendationSystem*/
        ctx2[21]
      )
        if_block2.p(ctx2, dirty);
      if (
        /*skinCareEnabled*/
        ctx2[8] || /*mobile*/
        ctx2[19]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty[0] & /*skinCareEnabled*/
          256) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_4$2(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(menu0, t3);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (!/*skinCareEnabled*/
      ctx2[8]) {
        if (if_block4) {
          if_block4.p(ctx2, dirty);
          if (dirty[0] & /*skinCareEnabled*/
          256) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_3$2(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(menu0, null);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      const iconbutton0_changes = {};
      if (dirty[0] & /*canUndo*/
      1)
        iconbutton0_changes.disabled = !/*canUndo*/
        ctx2[0];
      iconbutton0.$set(iconbutton0_changes);
      const iconbutton1_changes = {};
      if (dirty[0] & /*canRedo*/
      2)
        iconbutton1_changes.disabled = !/*canRedo*/
        ctx2[1];
      iconbutton1.$set(iconbutton1_changes);
      if (
        /*skinCareEnabled*/
        ctx2[8]
      ) {
        if (if_block5) {
          if_block5.p(ctx2, dirty);
          if (dirty[0] & /*skinCareEnabled*/
          256) {
            transition_in(if_block5, 1);
          }
        } else {
          if_block5 = create_if_block$3(ctx2);
          if_block5.c();
          transition_in(if_block5, 1);
          if_block5.m(article, t7);
        }
      } else if (if_block5) {
        group_outros();
        transition_out(if_block5, 1, 1, () => {
          if_block5 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[33],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[33]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[33],
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
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      transition_in(if_block5);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      transition_out(if_block5);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(article);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      destroy_component(iconbutton0);
      destroy_component(iconbutton1);
      if (if_block5)
        if_block5.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  let skinCareEnabled;
  let appliedProductVto;
  let $showQuizWizard;
  let $showProblems;
  let $isQuizDone;
  let $appliedProducts;
  let $routerPath;
  let $vto;
  let $rangeValue;
  validate_store(appliedProducts, "appliedProducts");
  component_subscribe($$self, appliedProducts, ($$value) => $$invalidate(22, $appliedProducts = $$value));
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(23, $routerPath = $$value));
  validate_store(vto, "vto");
  component_subscribe($$self, vto, ($$value) => $$invalidate(11, $vto = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Viewer", slots, ["default"]);
  let { canUndo = false } = $$props;
  let { canRedo = false } = $$props;
  let { isComparing = false } = $$props;
  let { loading: loading2 = false } = $$props;
  let { expanded = false } = $$props;
  const { isQuizDone, showQuizWizard, showProblems, rangeValue } = skinCare;
  validate_store(isQuizDone, "isQuizDone");
  component_subscribe($$self, isQuizDone, (value) => $$invalidate(10, $isQuizDone = value));
  validate_store(showQuizWizard, "showQuizWizard");
  component_subscribe($$self, showQuizWizard, (value) => $$invalidate(34, $showQuizWizard = value));
  validate_store(showProblems, "showProblems");
  component_subscribe($$self, showProblems, (value) => $$invalidate(9, $showProblems = value));
  validate_store(rangeValue, "rangeValue");
  component_subscribe($$self, rangeValue, (value) => $$invalidate(12, $rangeValue = value));
  const ctx = getContext$1();
  let demo = false;
  let analyticDetail;
  onMount(() => onDemoEvent("showAd", (detail) => {
    $$invalidate(5, demo = true);
    $$invalidate(6, analyticDetail = detail);
  }));
  const dispatch = createEventDispatcher();
  let mobile = isMobileDevice();
  const toggleQuiz = () => {
    if ($isQuizDone) {
      set_store_value(showProblems, $showProblems = !$showProblems, $showProblems);
    } else if (!$showQuizWizard) {
      set_store_value(showQuizWizard, $showQuizWizard = true, $showQuizWizard);
    }
  };
  const recommendationSystem = ctx.recommendationSystemVersion;
  const writable_props = ["canUndo", "canRedo", "isComparing", "loading", "expanded"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Viewer> was created with unknown prop '${key2}'`);
  });
  const close_handler = () => ($$invalidate(5, demo = false), analytics.popup_book_demo_closed(analyticDetail));
  const pick_handler = () => (pickADate(), $$invalidate(5, demo = false), analytics.popup_book_demo_date_picked(analyticDetail));
  const click_handler = () => ctx.close();
  const click_handler_1 = () => dispatch("expand");
  const click_handler_22 = () => dispatch("compare");
  const click_handler_3 = () => dispatch("undo");
  const click_handler_4 = () => dispatch("redo");
  function range_value_binding(value) {
    $rangeValue = value;
    rangeValue.set($rangeValue);
  }
  $$self.$$set = ($$props2) => {
    if ("canUndo" in $$props2)
      $$invalidate(0, canUndo = $$props2.canUndo);
    if ("canRedo" in $$props2)
      $$invalidate(1, canRedo = $$props2.canRedo);
    if ("isComparing" in $$props2)
      $$invalidate(2, isComparing = $$props2.isComparing);
    if ("loading" in $$props2)
      $$invalidate(3, loading2 = $$props2.loading);
    if ("expanded" in $$props2)
      $$invalidate(4, expanded = $$props2.expanded);
    if ("$$scope" in $$props2)
      $$invalidate(33, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    analytics,
    Button,
    IconButton,
    Range,
    Spinner,
    Paths,
    routerPath,
    isMobileDevice,
    getContext: getContext$1,
    appliedProducts,
    skinCare,
    vto,
    onDemoEvent,
    pickADate,
    ViewerDemo,
    ViewerProblemsTabs,
    canUndo,
    canRedo,
    isComparing,
    loading: loading2,
    expanded,
    isQuizDone,
    showQuizWizard,
    showProblems,
    rangeValue,
    ctx,
    demo,
    analyticDetail,
    dispatch,
    mobile,
    toggleQuiz,
    recommendationSystem,
    appliedProductVto,
    skinCareEnabled,
    $showQuizWizard,
    $showProblems,
    $isQuizDone,
    $appliedProducts,
    $routerPath,
    $vto,
    $rangeValue
  });
  $$self.$inject_state = ($$props2) => {
    if ("canUndo" in $$props2)
      $$invalidate(0, canUndo = $$props2.canUndo);
    if ("canRedo" in $$props2)
      $$invalidate(1, canRedo = $$props2.canRedo);
    if ("isComparing" in $$props2)
      $$invalidate(2, isComparing = $$props2.isComparing);
    if ("loading" in $$props2)
      $$invalidate(3, loading2 = $$props2.loading);
    if ("expanded" in $$props2)
      $$invalidate(4, expanded = $$props2.expanded);
    if ("demo" in $$props2)
      $$invalidate(5, demo = $$props2.demo);
    if ("analyticDetail" in $$props2)
      $$invalidate(6, analyticDetail = $$props2.analyticDetail);
    if ("mobile" in $$props2)
      $$invalidate(19, mobile = $$props2.mobile);
    if ("appliedProductVto" in $$props2)
      $$invalidate(7, appliedProductVto = $$props2.appliedProductVto);
    if ("skinCareEnabled" in $$props2)
      $$invalidate(8, skinCareEnabled = $$props2.skinCareEnabled);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*$routerPath*/
    8388608) {
      $$invalidate(8, skinCareEnabled = $routerPath.current === Paths.SkinCare);
    }
    if ($$self.$$.dirty[0] & /*$appliedProducts*/
    4194304) {
      $$invalidate(7, appliedProductVto = $appliedProducts.length ? $appliedProducts[0].skus[0].vto : void 0);
    }
  };
  return [
    canUndo,
    canRedo,
    isComparing,
    loading2,
    expanded,
    demo,
    analyticDetail,
    appliedProductVto,
    skinCareEnabled,
    $showProblems,
    $isQuizDone,
    $vto,
    $rangeValue,
    isQuizDone,
    showQuizWizard,
    showProblems,
    rangeValue,
    ctx,
    dispatch,
    mobile,
    toggleQuiz,
    recommendationSystem,
    $appliedProducts,
    $routerPath,
    slots,
    close_handler,
    pick_handler,
    click_handler,
    click_handler_1,
    click_handler_22,
    click_handler_3,
    click_handler_4,
    range_value_binding,
    $$scope
  ];
}
class Viewer extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$b,
      create_fragment$b,
      safe_not_equal,
      {
        canUndo: 0,
        canRedo: 1,
        isComparing: 2,
        loading: 3,
        expanded: 4
      },
      add_css$8,
      [-1, -1]
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Viewer",
      options,
      id: create_fragment$b.name
    });
  }
  get canUndo() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set canUndo(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get canRedo() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set canRedo(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get isComparing() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isComparing(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get loading() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set loading(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get expanded() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set expanded(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const buttonArrowSvg = "" + new URL("button-arrow-a8e0812b.svg", import.meta.url).href;
const progressBgSvg = "" + new URL("progress-bg-0fec0e3c.svg", import.meta.url).href;
const progressSvg = "" + new URL("progress-3e44c1bb.svg", import.meta.url).href;
const file$8 = "src/pages/best-match/Quiz/QuizInfo.svelte";
function add_css$7(target) {
  append_styles(target, "svelte-zbyxxw", ".info.svelte-zbyxxw.svelte-zbyxxw{margin-top:12px;margin-right:32px;display:flex;align-items:center;border-radius:8px;background-color:var(--tint-text-dark);padding-left:20px;padding-right:20px;padding-top:12px;padding-bottom:12px\n}@media(min-width: 1024px){.info.svelte-zbyxxw.svelte-zbyxxw{margin-right:0px;padding-top:16px;padding-bottom:16px\n    }}.text.svelte-zbyxxw.svelte-zbyxxw{margin-left:24px\n}.progress.svelte-zbyxxw.svelte-zbyxxw{position:relative;height:50px;width:50px;flex-shrink:0\n}.progress.svelte-zbyxxw img.svelte-zbyxxw{position:absolute;top:0px;left:0px;height:50px;width:50px\n}.percent.svelte-zbyxxw.svelte-zbyxxw{margin-left:8px;margin-top:12px;color:var(--tint-text-light)\n}.percent.svelte-zbyxxw span.svelte-zbyxxw:first-child{font-size:20px;line-height:28px;font-weight:700\n}.percent.svelte-zbyxxw span.svelte-zbyxxw:last-child{margin-left:-4px;font-size:12px;line-height:16px;font-weight:700\n}p.title.svelte-zbyxxw.svelte-zbyxxw{font-size:14px;line-height:20px;font-weight:700;color:var(--tint-text-light)\n}@media(min-width: 1024px){p.title.svelte-zbyxxw.svelte-zbyxxw{font-size:20px;line-height:28px\n    }}p.sub-title.svelte-zbyxxw.svelte-zbyxxw{display:none;font-size:14px;line-height:20px;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))\n}@media(min-width: 1024px){p.sub-title.svelte-zbyxxw.svelte-zbyxxw{display:block\n    }}button.svelte-zbyxxw.svelte-zbyxxw{margin-left:auto;display:flex;height:36px;width:104px;flex-shrink:0;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:6px;font-size:14px;line-height:20px;font-weight:700;color:var(--tint-text-dark)\n}@media(min-width: 1024px){button.svelte-zbyxxw.svelte-zbyxxw{height:44px;width:148px;font-size:16px;line-height:24px\n    }}button.svelte-zbyxxw img.svelte-zbyxxw{margin-left:4px\n}");
}
function create_fragment$a(ctx) {
  let div3;
  let div1;
  let img0;
  let img0_src_value;
  let t0;
  let img1;
  let img1_src_value;
  let t1;
  let div0;
  let span0;
  let t3;
  let span1;
  let t5;
  let div2;
  let p0;
  let t7;
  let p1;
  let t9;
  let button;
  let t10;
  let img2;
  let img2_src_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div3 = element("div");
      div1 = element("div");
      img0 = element("img");
      t0 = space();
      img1 = element("img");
      t1 = space();
      div0 = element("div");
      span0 = element("span");
      span0.textContent = "81";
      t3 = space();
      span1 = element("span");
      span1.textContent = "%";
      t5 = space();
      div2 = element("div");
      p0 = element("p");
      p0.textContent = "Let's Complete Personal Analysis";
      t7 = space();
      p1 = element("p");
      p1.textContent = "Define and complete personal recommendations";
      t9 = space();
      button = element("button");
      t10 = text("Finish\n    ");
      img2 = element("img");
      if (!src_url_equal(img0.src, img0_src_value = progressBgSvg))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Progress background");
      attr_dev(img0, "class", "svelte-zbyxxw");
      add_location(img0, file$8, 9, 4, 352);
      if (!src_url_equal(img1.src, img1_src_value = progressSvg))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Progress");
      attr_dev(img1, "class", "svelte-zbyxxw");
      add_location(img1, file$8, 10, 4, 410);
      attr_dev(span0, "class", "svelte-zbyxxw");
      add_location(span0, file$8, 12, 6, 483);
      attr_dev(span1, "class", "svelte-zbyxxw");
      add_location(span1, file$8, 13, 6, 505);
      attr_dev(div0, "class", "percent svelte-zbyxxw");
      add_location(div0, file$8, 11, 4, 455);
      attr_dev(div1, "class", "progress svelte-zbyxxw");
      add_location(div1, file$8, 8, 2, 325);
      attr_dev(p0, "class", "title svelte-zbyxxw");
      add_location(p0, file$8, 17, 4, 565);
      attr_dev(p1, "class", "sub-title svelte-zbyxxw");
      add_location(p1, file$8, 18, 4, 633);
      attr_dev(div2, "class", "text svelte-zbyxxw");
      add_location(div2, file$8, 16, 2, 542);
      if (!src_url_equal(img2.src, img2_src_value = buttonArrowSvg))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Arrow right");
      attr_dev(img2, "class", "svelte-zbyxxw");
      add_location(img2, file$8, 22, 4, 816);
      attr_dev(button, "data-qa", "tint-skin-care-quiz-info-finish");
      attr_dev(button, "class", "svelte-zbyxxw");
      add_location(button, file$8, 20, 2, 714);
      attr_dev(div3, "class", "info svelte-zbyxxw");
      attr_dev(div3, "data-qa", "tint-skin-care-quiz-info");
      add_location(div3, file$8, 7, 0, 269);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div1);
      append_dev(div1, img0);
      append_dev(div1, t0);
      append_dev(div1, img1);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div0, span0);
      append_dev(div0, t3);
      append_dev(div0, span1);
      append_dev(div3, t5);
      append_dev(div3, div2);
      append_dev(div2, p0);
      append_dev(div2, t7);
      append_dev(div2, p1);
      append_dev(div3, t9);
      append_dev(div3, button);
      append_dev(button, t10);
      append_dev(button, img2);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[1],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("QuizInfo", slots, []);
  const dispatch = createEventDispatcher();
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<QuizInfo> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => dispatch("finish");
  $$self.$capture_state = () => ({
    createEventDispatcher,
    buttonArrowSvg,
    progressBgSvg,
    progressSvg,
    dispatch
  });
  return [dispatch, click_handler];
}
class QuizInfo extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {}, add_css$7);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "QuizInfo",
      options,
      id: create_fragment$a.name
    });
  }
}
const backIcon = "" + new URL("chevron-left-47cfe864.svg", import.meta.url).href;
const file$7 = "src/pages/best-match/Quiz/QuizWizard/AgeStep.svelte";
function add_css$6(target) {
  append_styles(target, "svelte-p058tk", 'p.svelte-p058tk.svelte-p058tk{font-size:20px;line-height:28px;font-weight:700;color:var(--tint-text-dark)\n}@media(min-width: 768px){p.svelte-p058tk.svelte-p058tk{font-size:24px;line-height:32px\n    }}div.svelte-p058tk.svelte-p058tk{height:100%\n}div.svelte-p058tk div.svelte-p058tk{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;padding-bottom:128px\n}input.svelte-p058tk.svelte-p058tk{margin:0px;height:64px;width:128px;text-align:center;font-size:48px;line-height:1\n}div.svelte-p058tk div span.svelte-p058tk{margin-top:-10px;height:2px;width:64px;--tw-bg-opacity:1;background-color:rgb(185 185 186 / var(--tw-bg-opacity))\n}.filled{background-color:var(--tint-text-dark) !important\n}input.svelte-p058tk.svelte-p058tk::-webkit-outer-spin-button,input.svelte-p058tk.svelte-p058tk::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"].svelte-p058tk.svelte-p058tk{-moz-appearance:textfield}');
}
function create_fragment$9(ctx) {
  let div1;
  let p;
  let t1;
  let div0;
  let input;
  let t2;
  let span;
  let span_class_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      p = element("p");
      p.textContent = "Enter your age";
      t1 = space();
      div0 = element("div");
      input = element("input");
      t2 = space();
      span = element("span");
      attr_dev(p, "class", "svelte-p058tk");
      add_location(p, file$7, 6, 2, 148);
      attr_dev(input, "type", "number");
      attr_dev(input, "placeholder", "20");
      attr_dev(input, "min", "1");
      attr_dev(input, "max", "99");
      attr_dev(input, "step", "1");
      attr_dev(input, "data-qa", "tint-skin-care-quiz-age-input");
      attr_dev(input, "class", "svelte-p058tk");
      add_location(input, file$7, 8, 4, 182);
      attr_dev(span, "class", span_class_value = null_to_empty(typeof /*ageValue*/
      ctx[0] === "number" ? "filled" : "") + " svelte-p058tk");
      add_location(span, file$7, 18, 4, 413);
      attr_dev(div0, "class", "svelte-p058tk");
      add_location(div0, file$7, 7, 2, 172);
      attr_dev(div1, "class", "svelte-p058tk");
      add_location(div1, file$7, 5, 0, 140);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, p);
      append_dev(div1, t1);
      append_dev(div1, div0);
      append_dev(div0, input);
      set_input_value(
        input,
        /*ageValue*/
        ctx[0]
      );
      append_dev(div0, t2);
      append_dev(div0, span);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[2]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[3],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*ageValue*/
      1 && to_number(input.value) !== /*ageValue*/
      ctx2[0]) {
        set_input_value(
          input,
          /*ageValue*/
          ctx2[0]
        );
      }
      if (dirty & /*ageValue*/
      1 && span_class_value !== (span_class_value = null_to_empty(typeof /*ageValue*/
      ctx2[0] === "number" ? "filled" : "") + " svelte-p058tk")) {
        attr_dev(span, "class", span_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AgeStep", slots, []);
  const dispatch = createEventDispatcher();
  let { ageValue } = $$props;
  $$self.$$.on_mount.push(function() {
    if (ageValue === void 0 && !("ageValue" in $$props || $$self.$$.bound[$$self.$$.props["ageValue"]])) {
      console.warn("<AgeStep> was created without expected prop 'ageValue'");
    }
  });
  const writable_props = ["ageValue"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<AgeStep> was created with unknown prop '${key2}'`);
  });
  function input_input_handler() {
    ageValue = to_number(this.value);
    $$invalidate(0, ageValue);
  }
  const input_handler = () => dispatch("change", ageValue);
  $$self.$$set = ($$props2) => {
    if ("ageValue" in $$props2)
      $$invalidate(0, ageValue = $$props2.ageValue);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    dispatch,
    ageValue
  });
  $$self.$inject_state = ($$props2) => {
    if ("ageValue" in $$props2)
      $$invalidate(0, ageValue = $$props2.ageValue);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [ageValue, dispatch, input_input_handler, input_handler];
}
class AgeStep extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { ageValue: 0 }, add_css$6);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AgeStep",
      options,
      id: create_fragment$9.name
    });
  }
  get ageValue() {
    throw new Error("<AgeStep>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set ageValue(value) {
    throw new Error("<AgeStep>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$6 = "src/pages/best-match/Quiz/QuizWizard/SkinProblemsStep.svelte";
function add_css$5(target) {
  append_styles(target, "svelte-19vjcla", "p.svelte-19vjcla.svelte-19vjcla.svelte-19vjcla{font-size:20px;line-height:28px;font-weight:700;color:var(--tint-text-dark)\n}@media(min-width: 768px){p.svelte-19vjcla.svelte-19vjcla.svelte-19vjcla{font-size:24px;line-height:32px\n    }}.problems.svelte-19vjcla.svelte-19vjcla.svelte-19vjcla{margin-top:24px;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:28px\n}label.svelte-19vjcla.svelte-19vjcla.svelte-19vjcla{display:flex;cursor:pointer;align-items:center;font-size:16px;line-height:24px;color:var(--tint-text-dark)\n}label.svelte-19vjcla span.svelte-19vjcla.svelte-19vjcla{margin-right:12px;height:24px;width:24px;border-radius:4px;border-width:2px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity))\n}input.svelte-19vjcla.svelte-19vjcla.svelte-19vjcla{display:none\n}label.svelte-19vjcla input.svelte-19vjcla:checked~span.svelte-19vjcla{--tw-border-opacity:1;border-color:rgb(76 204 117 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(76 204 117 / var(--tw-bg-opacity))\n}");
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let label;
  let input;
  let input_checked_value;
  let t0;
  let span;
  let img;
  let img_src_value;
  let t1_value = skinCare.getProblemData(
    /*problem*/
    ctx[3]
  ).title + "";
  let t1;
  let t2;
  let mounted;
  let dispose;
  function change_handler() {
    return (
      /*change_handler*/
      ctx[2](
        /*problem*/
        ctx[3]
      )
    );
  }
  const block = {
    c: function create() {
      label = element("label");
      input = element("input");
      t0 = space();
      span = element("span");
      img = element("img");
      t1 = text(t1_value);
      t2 = space();
      attr_dev(
        input,
        "id",
        /*problem*/
        ctx[3]
      );
      attr_dev(input, "type", "checkbox");
      input.checked = input_checked_value = /*problemsList*/
      ctx[0].has(
        /*problem*/
        ctx[3]
      );
      attr_dev(input, "data-qa", "tint-skin-care-quiz-problem-item");
      attr_dev(input, "class", "svelte-19vjcla");
      add_location(input, file$6, 12, 8, 451);
      if (!src_url_equal(img.src, img_src_value = md))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "");
      add_location(img, file$6, 18, 17, 678);
      attr_dev(span, "class", "svelte-19vjcla");
      add_location(span, file$6, 18, 11, 672);
      attr_dev(
        label,
        "for",
        /*problem*/
        ctx[3]
      );
      attr_dev(label, "class", "svelte-19vjcla");
      add_location(label, file$6, 11, 6, 421);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, input);
      append_dev(label, t0);
      append_dev(label, span);
      append_dev(span, img);
      append_dev(label, t1);
      append_dev(label, t2);
      if (!mounted) {
        dispose = listen_dev(input, "change", change_handler, false, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*problemsList*/
      1 && input_checked_value !== (input_checked_value = /*problemsList*/
      ctx[0].has(
        /*problem*/
        ctx[3]
      ))) {
        prop_dev(input, "checked", input_checked_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(label);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(11:4) {#each skinCare.getProblemsList() as problem}",
    ctx
  });
  return block;
}
function create_fragment$8(ctx) {
  let div1;
  let p;
  let t1;
  let div0;
  let each_value = skinCare.getProblemsList();
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div1 = element("div");
      p = element("p");
      p.textContent = "What are your skin problems?";
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(p, "class", "svelte-19vjcla");
      add_location(p, file$6, 8, 2, 265);
      attr_dev(div0, "class", "problems svelte-19vjcla");
      attr_dev(div0, "data-qa", "tint-skin-care-quiz-problems");
      add_location(div0, file$6, 9, 2, 303);
      add_location(div1, file$6, 7, 0, 257);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, p);
      append_dev(div1, t1);
      append_dev(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*skinCare, md, problemsList, dispatch*/
      3) {
        each_value = skinCare.getProblemsList();
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      destroy_each(each_blocks, detaching);
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
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SkinProblemsStep", slots, []);
  const dispatch = createEventDispatcher();
  let { problemsList = /* @__PURE__ */ new Set([]) } = $$props;
  const writable_props = ["problemsList"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<SkinProblemsStep> was created with unknown prop '${key2}'`);
  });
  const change_handler = (problem) => dispatch("click", problem);
  $$self.$$set = ($$props2) => {
    if ("problemsList" in $$props2)
      $$invalidate(0, problemsList = $$props2.problemsList);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    md,
    skinCare,
    dispatch,
    problemsList
  });
  $$self.$inject_state = ($$props2) => {
    if ("problemsList" in $$props2)
      $$invalidate(0, problemsList = $$props2.problemsList);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [problemsList, dispatch, change_handler];
}
class SkinProblemsStep extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { problemsList: 0 }, add_css$5);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SkinProblemsStep",
      options,
      id: create_fragment$8.name
    });
  }
  get problemsList() {
    throw new Error("<SkinProblemsStep>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set problemsList(value) {
    throw new Error("<SkinProblemsStep>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$5 = "src/pages/best-match/Quiz/QuizWizard/QuizWizard.svelte";
function add_css$4(target) {
  append_styles(target, "svelte-1hd00gf", ".background.svelte-1hd00gf.svelte-1hd00gf{position:absolute;top:0px;left:0px;z-index:9000;display:none;height:100%;width:100%;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));opacity:0.6\n}@media(min-width: 768px){.background.svelte-1hd00gf.svelte-1hd00gf{display:flex\n    }}.dialog-container.svelte-1hd00gf.svelte-1hd00gf{position:absolute;top:0px;left:0px;display:flex;height:100%;width:100%;align-items:center;justify-content:center\n}dialog.svelte-1hd00gf.svelte-1hd00gf{position:relative;z-index:10000;display:flex;height:100%;width:100%;flex-direction:column;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:16px\n}@media(min-width: 768px){dialog.svelte-1hd00gf.svelte-1hd00gf{height:496px;width:491.84px;border-radius:16px;padding:40px;padding-top:32px\n    }}dialog.svelte-1hd00gf p.svelte-1hd00gf{padding-left:28px;padding-top:4px;font-size:16px;line-height:24px;font-weight:700;color:var(--tint-text-dark)\n}@media(min-width: 768px){dialog.svelte-1hd00gf p.svelte-1hd00gf{padding-left:0px;padding-top:0px\n    }}dialog.svelte-1hd00gf img.svelte-1hd00gf{position:absolute;top:20px;right:20px;height:24px;width:24px;cursor:pointer\n}@media(min-width: 768px){dialog.svelte-1hd00gf img.svelte-1hd00gf{top:20px;right:20px\n    }}dialog.svelte-1hd00gf img.back.svelte-1hd00gf{left:16px\n}@media(min-width: 768px){dialog.svelte-1hd00gf img.back.svelte-1hd00gf{left:20px;display:none\n    }}.progress.svelte-1hd00gf.svelte-1hd00gf{margin-top:16px;margin-bottom:24px;height:8px;width:100%;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(220 220 221 / var(--tw-bg-opacity))\n}.progress.svelte-1hd00gf div.svelte-1hd00gf{height:8px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(76 204 117 / var(--tw-bg-opacity))\n}.step.svelte-1hd00gf.svelte-1hd00gf{height:100%\n}.buttons.svelte-1hd00gf.svelte-1hd00gf{display:flex;width:100%;flex-direction:row-reverse;justify-content:space-between\n}.buttons.svelte-1hd00gf .back{display:none;padding-left:0px;padding-right:0px\n}@media(min-width: 768px){.buttons.svelte-1hd00gf .back{display:flex\n    }}.buttons.svelte-1hd00gf .next{width:100%\n}@media(min-width: 768px){.buttons.svelte-1hd00gf .next{width:47%\n    }}");
}
function create_if_block_1$2(ctx) {
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      img = element("img");
      attr_dev(img, "class", "back svelte-1hd00gf");
      if (!src_url_equal(img.src, img_src_value = backIcon))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Back");
      attr_dev(img, "data-qa", "tint-skin-care-quiz-back");
      add_location(img, file$5, 55, 6, 1600);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, img, anchor);
      if (!mounted) {
        dispose = listen_dev(
          img,
          "click",
          /*click_handler*/
          ctx[9],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$2.name,
    type: "if",
    source: "(55:4) {#if lastStep}",
    ctx
  });
  return block;
}
function create_default_slot_1$1(ctx) {
  let t_value = (
    /*lastStep*/
    ctx[3] ? "Complete" : "Next"
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*lastStep*/
      8 && t_value !== (t_value = /*lastStep*/
      ctx2[3] ? "Complete" : "Next"))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(85:6) <Button         class=\\"next\\"         size=\\"lg\\"         on:click={onNext}         disabled={isNextDisabled}         qa=\\"tint-skin-care-quiz-next-button\\">',
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      class: "back",
      size: "lg",
      variant: "text",
      qa: "tint-skin-care-quiz-back-button",
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_3*/
    ctx[13]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope*/
      16384) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(92:6) {#if lastStep === true}",
    ctx
  });
  return block;
}
function create_default_slot$3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Previous");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$3.name,
    type: "slot",
    source: '(93:8) <Button           class=\\"back\\"           size=\\"lg\\"           variant=\\"text\\"           on:click={() => (currentStep = AgeStep)}           qa=\\"tint-skin-care-quiz-back-button\\">',
    ctx
  });
  return block;
}
function create_fragment$7(ctx) {
  let div0;
  let t0;
  let div5;
  let dialog;
  let t1;
  let p;
  let t3;
  let img;
  let img_src_value;
  let t4;
  let div2;
  let div1;
  let div1_style_value;
  let t5;
  let div3;
  let switch_instance;
  let t6;
  let div4;
  let button;
  let t7;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*lastStep*/
    ctx[3] && create_if_block_1$2(ctx)
  );
  var switch_value = (
    /*currentStep*/
    ctx[1]
  );
  function switch_props(ctx2) {
    return {
      props: {
        problemsList: (
          /*problemsList*/
          ctx2[5]
        ),
        ageValue: (
          /*ageValue*/
          ctx2[0]
        )
      },
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    switch_instance.$on(
      "change",
      /*change_handler*/
      ctx[11]
    );
    switch_instance.$on(
      "click",
      /*click_handler_2*/
      ctx[12]
    );
  }
  button = new Button({
    props: {
      class: "next",
      size: "lg",
      disabled: (
        /*isNextDisabled*/
        ctx[4]
      ),
      qa: "tint-skin-care-quiz-next-button",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*onNext*/
    ctx[8]
  );
  let if_block1 = (
    /*lastStep*/
    ctx[3] === true && create_if_block$2(ctx)
  );
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      div5 = element("div");
      dialog = element("dialog");
      if (if_block0)
        if_block0.c();
      t1 = space();
      p = element("p");
      p.textContent = "Complete Personal Analysis";
      t3 = space();
      img = element("img");
      t4 = space();
      div2 = element("div");
      div1 = element("div");
      t5 = space();
      div3 = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t6 = space();
      div4 = element("div");
      create_component(button.$$.fragment);
      t7 = space();
      if (if_block1)
        if_block1.c();
      attr_dev(div0, "class", "background svelte-1hd00gf");
      add_location(div0, file$5, 50, 0, 1453);
      attr_dev(p, "class", "svelte-1hd00gf");
      add_location(p, file$5, 63, 4, 1783);
      attr_dev(img, "class", "close svelte-1hd00gf");
      if (!src_url_equal(img.src, img_src_value = closeIcon))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Close");
      attr_dev(img, "data-qa", "tint-skin-care-quiz-close");
      add_location(img, file$5, 64, 4, 1821);
      attr_dev(div1, "style", div1_style_value = `width: ${/*progress*/
      ctx[2]}%`);
      attr_dev(div1, "class", "svelte-1hd00gf");
      add_location(div1, file$5, 72, 6, 2009);
      attr_dev(div2, "class", "progress svelte-1hd00gf");
      add_location(div2, file$5, 71, 4, 1980);
      attr_dev(div3, "class", "step svelte-1hd00gf");
      add_location(div3, file$5, 74, 4, 2062);
      attr_dev(div4, "class", "buttons svelte-1hd00gf");
      add_location(div4, file$5, 83, 4, 2309);
      attr_dev(dialog, "class", "svelte-1hd00gf");
      add_location(dialog, file$5, 53, 2, 1566);
      attr_dev(div5, "class", "dialog-container svelte-1hd00gf");
      add_location(div5, file$5, 52, 0, 1507);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div0, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, dialog);
      if (if_block0)
        if_block0.m(dialog, null);
      append_dev(dialog, t1);
      append_dev(dialog, p);
      append_dev(dialog, t3);
      append_dev(dialog, img);
      append_dev(dialog, t4);
      append_dev(dialog, div2);
      append_dev(div2, div1);
      append_dev(dialog, t5);
      append_dev(dialog, div3);
      if (switch_instance)
        mount_component(switch_instance, div3, null);
      append_dev(dialog, t6);
      append_dev(dialog, div4);
      mount_component(button, div4, null);
      append_dev(div4, t7);
      if (if_block1)
        if_block1.m(div4, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(portal.call(null, div0, "best-match")),
          listen_dev(
            img,
            "click",
            /*click_handler_1*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          action_destroyer(portal.call(null, div5, "best-match"))
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*lastStep*/
        ctx2[3]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$2(ctx2);
          if_block0.c();
          if_block0.m(dialog, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty & /*progress*/
      4 && div1_style_value !== (div1_style_value = `width: ${/*progress*/
      ctx2[2]}%`)) {
        attr_dev(div1, "style", div1_style_value);
      }
      const switch_instance_changes = {};
      if (dirty & /*problemsList*/
      32)
        switch_instance_changes.problemsList = /*problemsList*/
        ctx2[5];
      if (dirty & /*ageValue*/
      1)
        switch_instance_changes.ageValue = /*ageValue*/
        ctx2[0];
      if (dirty & /*currentStep*/
      2 && switch_value !== (switch_value = /*currentStep*/
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
          switch_instance.$on(
            "change",
            /*change_handler*/
            ctx2[11]
          );
          switch_instance.$on(
            "click",
            /*click_handler_2*/
            ctx2[12]
          );
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div3, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
      const button_changes = {};
      if (dirty & /*isNextDisabled*/
      16)
        button_changes.disabled = /*isNextDisabled*/
        ctx2[4];
      if (dirty & /*$$scope, lastStep*/
      16392) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (
        /*lastStep*/
        ctx2[3] === true
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*lastStep*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div4, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div5);
      if (if_block0)
        if_block0.d();
      if (switch_instance)
        destroy_component(switch_instance);
      destroy_component(button);
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
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
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("QuizWizard", slots, []);
  const dispatch = createEventDispatcher();
  let ageValue = 24;
  let currentStep = AgeStep;
  let progress = 50;
  let lastStep = false;
  let isNextDisabled = true;
  let problemsList = /* @__PURE__ */ new Set(["none"]);
  const changeProblemsList = (problemId) => {
    const problemSelected = problemsList.has(problemId);
    if (problemSelected) {
      problemsList.delete(problemId);
    } else {
      if (problemId === "none") {
        problemsList.clear();
      } else {
        problemsList.delete("none");
      }
      problemsList.add(problemId);
    }
    $$invalidate(5, problemsList = new Set(Array.from(problemsList)));
  };
  const onNext = () => {
    if (currentStep === AgeStep) {
      $$invalidate(1, currentStep = SkinProblemsStep);
    } else {
      dispatch("done", {
        problems: Array.from(problemsList),
        age: ageValue
      });
    }
  };
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<QuizWizard> was created with unknown prop '${key2}'`);
  });
  const click_handler = () => $$invalidate(1, currentStep = AgeStep);
  const click_handler_1 = () => dispatch("close");
  const change_handler = (e) => $$invalidate(0, ageValue = e.detail);
  const click_handler_22 = ({ detail }) => changeProblemsList(detail);
  const click_handler_3 = () => $$invalidate(1, currentStep = AgeStep);
  $$self.$capture_state = () => ({
    createEventDispatcher,
    Button,
    backIcon,
    closeIcon,
    portal,
    AgeStep,
    SkinProblemsStep,
    dispatch,
    ageValue,
    currentStep,
    progress,
    lastStep,
    isNextDisabled,
    problemsList,
    changeProblemsList,
    onNext
  });
  $$self.$inject_state = ($$props2) => {
    if ("ageValue" in $$props2)
      $$invalidate(0, ageValue = $$props2.ageValue);
    if ("currentStep" in $$props2)
      $$invalidate(1, currentStep = $$props2.currentStep);
    if ("progress" in $$props2)
      $$invalidate(2, progress = $$props2.progress);
    if ("lastStep" in $$props2)
      $$invalidate(3, lastStep = $$props2.lastStep);
    if ("isNextDisabled" in $$props2)
      $$invalidate(4, isNextDisabled = $$props2.isNextDisabled);
    if ("problemsList" in $$props2)
      $$invalidate(5, problemsList = $$props2.problemsList);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*currentStep, ageValue*/
    3) {
      {
        $$invalidate(2, progress = currentStep === AgeStep ? 50 : 100);
        $$invalidate(3, lastStep = currentStep === SkinProblemsStep);
        if (currentStep === AgeStep) {
          $$invalidate(4, isNextDisabled = typeof ageValue !== "number");
        }
      }
    }
  };
  return [
    ageValue,
    currentStep,
    progress,
    lastStep,
    isNextDisabled,
    problemsList,
    dispatch,
    changeProblemsList,
    onNext,
    click_handler,
    click_handler_1,
    change_handler,
    click_handler_22,
    click_handler_3
  ];
}
class QuizWizard extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {}, add_css$4);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "QuizWizard",
      options,
      id: create_fragment$7.name
    });
  }
}
const looksLimit = 50;
const productsLimit = 12;
const updateData = (isSkinCare, onDone, brand, season) => {
  var _a, _b, _c, _d;
  gql(isSkinCare ? GetSkinCarePageData : GetBestMatchPageData, {
    brand,
    season,
    creamRanges: {
      bb: (_b = (_a = get_store_value(result)) == null ? void 0 : _a.creamRanges) == null ? void 0 : _b.BB,
      cc: (_d = (_c = get_store_value(result)) == null ? void 0 : _c.creamRanges) == null ? void 0 : _d.CC
    },
    looksLimit,
    productsLimit,
    withBrand: !brand
  }).then((data$3) => {
    var _a2;
    if (isSkinCare) {
      const { skincareProductsCategorised, skincareBundles } = data$3;
      const skinCareGroups = (_a2 = skincareProductsCategorised[0]) == null ? void 0 : _a2.products;
      const skinCareTypes = skinCareGroups == null ? void 0 : skinCareGroups.map(({ type }) => ({
        type,
        categoryType: "skin-care"
      }));
      const skinCareItems = skinCareGroups == null ? void 0 : skinCareGroups.flatMap((g) => g.products.items);
      data.types.set(skinCareTypes);
      data.items.set(skinCareItems);
      data$1.items.set(
        skincareBundles.items.map((look) => ({
          ...look,
          categoryType: "skin-care"
        }))
      );
    } else {
      const { productsGroups, looks: looks2, looksBrands } = data$3;
      const bestMatchTypes = productsGroups.map(({ type }) => ({
        type,
        categoryType: "best-match"
      }));
      const bestMatchItems = productsGroups.flatMap((g) => g.products.items);
      data.types.set(bestMatchTypes);
      data.items.set(bestMatchItems);
      data$1.items.set(looks2.items.map((look) => ({ ...look, categoryType: "best-match" })));
      if (brand) {
        looksFilter.filterByBrand({ slug: brand });
      } else {
        data$2.brandFilters.set([
          {
            name: "All",
            slug: "all"
          },
          ...looksBrands
        ]);
      }
    }
    if (isSkinCare) {
      products.setDefaultCategory("skin-care");
    } else {
      products.setDefaultCategory("best-match");
    }
  }).then(onDone);
};
const file$4 = "src/pages/best-match/BestMatchStore.svelte";
function add_css$3(target) {
  append_styles(target, "svelte-1f6nknu", "div.svelte-1f6nknu{position:relative;width:100%\n}@media not all and (min-width: 768px){div.svelte-1f6nknu{height:100%;transition-property:height;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms\n    }div.expanded.svelte-1f6nknu{height:48px\n    }}");
}
function create_fragment$6(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "svelte-1f6nknu");
      toggle_class(
        div,
        "expanded",
        /*expanded*/
        ctx[0]
      );
      add_location(div, file$4, 3, 0, 58);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*expanded*/
      1) {
        toggle_class(
          div,
          "expanded",
          /*expanded*/
          ctx2[0]
        );
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
      if (detaching)
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BestMatchStore", slots, ["default"]);
  let { expanded = false } = $$props;
  const writable_props = ["expanded"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BestMatchStore> was created with unknown prop '${key2}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({ expanded });
  $$self.$inject_state = ($$props2) => {
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [expanded, $$scope, slots];
}
class BestMatchStore extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { expanded: 0 }, add_css$3);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BestMatchStore",
      options,
      id: create_fragment$6.name
    });
  }
  get expanded() {
    throw new Error("<BestMatchStore>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set expanded(value) {
    throw new Error("<BestMatchStore>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
function create_fragment$5(ctx) {
  let cart_1;
  let current;
  cart_1 = new Cart({
    props: {
      items: (
        /*$items*/
        ctx[0]
      ),
      appliedLook: (
        /*$looks*/
        ctx[1].appliedLook
      ),
      autoopen: (
        /*$preferences*/
        ctx[2].autoopen
      )
    },
    $$inline: true
  });
  cart_1.$on(
    "add",
    /*add_handler*/
    ctx[4]
  );
  cart_1.$on(
    "remove",
    /*remove_handler*/
    ctx[5]
  );
  cart_1.$on(
    "redirect",
    /*redirect_handler*/
    ctx[6]
  );
  cart_1.$on(
    "removeAll",
    /*removeAll_handler*/
    ctx[7]
  );
  cart_1.$on(
    "hide",
    /*hide_handler*/
    ctx[8]
  );
  cart_1.$on(
    "show",
    /*show_handler*/
    ctx[9]
  );
  cart_1.$on(
    "clear",
    /*clear_handler*/
    ctx[10]
  );
  cart_1.$on(
    "swatch",
    /*swatch_handler*/
    ctx[11]
  );
  cart_1.$on(
    "force-close",
    /*force_close_handler*/
    ctx[12]
  );
  const block = {
    c: function create() {
      create_component(cart_1.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(cart_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const cart_1_changes = {};
      if (dirty & /*$items*/
      1)
        cart_1_changes.items = /*$items*/
        ctx2[0];
      if (dirty & /*$looks*/
      2)
        cart_1_changes.appliedLook = /*$looks*/
        ctx2[1].appliedLook;
      if (dirty & /*$preferences*/
      4)
        cart_1_changes.autoopen = /*$preferences*/
        ctx2[2].autoopen;
      cart_1.$set(cart_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(cart_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(cart_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(cart_1, detaching);
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
const preferences = writable({ autoopen: true });
function instance$5($$self, $$props, $$invalidate) {
  let $items;
  let $looks;
  let $preferences;
  validate_store(looks, "looks");
  component_subscribe($$self, looks, ($$value) => $$invalidate(1, $looks = $$value));
  validate_store(preferences, "preferences");
  component_subscribe($$self, preferences, ($$value) => $$invalidate(2, $preferences = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Cart", slots, []);
  const items = derived([vto, cart], ([{ items: items2 }, ids]) => {
    const cart2 = new Set(ids);
    return items2.map((i) => ({ ...i, cart: cart2.has(i.id) }));
  });
  validate_store(items, "items");
  component_subscribe($$self, items, (value) => $$invalidate(0, $items = value));
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Cart> was created with unknown prop '${key2}'`);
  });
  const add_handler = ({ detail }) => cart.add(...detail);
  const remove_handler = ({ detail }) => cart.remove(detail);
  const redirect_handler = () => cart.redirect();
  const removeAll_handler = ({ detail }) => products.clear(...detail);
  const hide_handler = ({ detail }) => vto.hide(detail);
  const show_handler = ({ detail }) => vto.show(detail);
  const clear_handler = ({ detail }) => vto.remove(detail);
  const swatch_handler = ({ detail }) => vto.swatch(detail.product, detail.swatch);
  const force_close_handler = () => set_store_value(preferences, $preferences.autoopen = false, $preferences);
  $$self.$capture_state = () => ({
    writable,
    preferences,
    derived,
    Cart,
    cart,
    looks,
    products,
    vto,
    items,
    $items,
    $looks,
    $preferences
  });
  return [
    $items,
    $looks,
    $preferences,
    items,
    add_handler,
    remove_handler,
    redirect_handler,
    removeAll_handler,
    hide_handler,
    show_handler,
    clear_handler,
    swatch_handler,
    force_close_handler
  ];
}
class Cart_1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Cart_1",
      options,
      id: create_fragment$5.name
    });
  }
}
const file$3 = "src/pages/best-match/Filters/Brand.svelte";
function add_css$2(target) {
  append_styles(target, "svelte-8mowcc", ".brand-filter{display:flex;gap:12px\n}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_default_slot_1(ctx) {
  let t_value = (
    /*item*/
    ctx[4].name + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items*/
      1 && t_value !== (t_value = /*item*/
      ctx2[4].name + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(18:6) <Radio value={item}>",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let li;
  let radio;
  let t;
  let current;
  radio = new Radio({
    props: {
      value: (
        /*item*/
        ctx[4]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      li = element("li");
      create_component(radio.$$.fragment);
      t = space();
      add_location(li, file$3, 16, 4, 414);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(radio, li, null);
      append_dev(li, t);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const radio_changes = {};
      if (dirty & /*items*/
      1)
        radio_changes.value = /*item*/
        ctx2[4];
      if (dirty & /*$$scope, items*/
      129) {
        radio_changes.$$scope = { dirty, ctx: ctx2 };
      }
      radio.$set(radio_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(radio.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radio.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(radio);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each items as item}",
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*items*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*items*/
      1) {
        each_value = /*items*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(10:0) <RadioGroup   class=\\"brand-filter\\"   value={active}   on:change   on:change={({ detail }) => analytics.filter_brand_selected(detail.name)} >',
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let radiogroup;
  let current;
  radiogroup = new RadioGroup({
    props: {
      class: "brand-filter",
      value: (
        /*active*/
        ctx[1]
      ),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  radiogroup.$on(
    "change",
    /*change_handler*/
    ctx[2]
  );
  radiogroup.$on(
    "change",
    /*change_handler_1*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(radiogroup.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(radiogroup, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const radiogroup_changes = {};
      if (dirty & /*active*/
      2)
        radiogroup_changes.value = /*active*/
        ctx2[1];
      if (dirty & /*$$scope, items*/
      129) {
        radiogroup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      radiogroup.$set(radiogroup_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(radiogroup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(radiogroup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(radiogroup, detaching);
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
function instance$4($$self, $$props, $$invalidate) {
  let active;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Brand", slots, []);
  let { items = [] } = $$props;
  const writable_props = ["items"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Brand> was created with unknown prop '${key2}'`);
  });
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  const change_handler_1 = ({ detail }) => analytics.filter_brand_selected(detail.name);
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
  };
  $$self.$capture_state = () => ({
    analytics,
    Radio,
    RadioGroup,
    items,
    active
  });
  $$self.$inject_state = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
    if ("active" in $$props2)
      $$invalidate(1, active = $$props2.active);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*items*/
    1) {
      $$invalidate(1, active = items.find((i) => i.active));
    }
  };
  return [items, active, change_handler, change_handler_1];
}
class Brand extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { items: 0 }, add_css$2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Brand",
      options,
      id: create_fragment$4.name
    });
  }
  get items() {
    throw new Error("<Brand>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set items(value) {
    throw new Error("<Brand>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/pages/best-match/Looks.svelte";
function create_else_block_1(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[6].bestLookForYou + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "data-qa", "tint-page-title");
      add_location(span, file$2, 54, 6, 2074);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      64 && t_value !== (t_value = /*$language*/
      ctx2[6].bestLookForYou + ""))
        set_data_dev(t, t_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(54:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3$1(ctx) {
  let t0;
  let current_block_type_index;
  let if_block1;
  let t1;
  let if_block2_anchor;
  let current;
  let if_block0 = (
    /*$routerPath*/
    ctx[2].current === Paths.BestMatch && create_if_block_6(ctx)
  );
  const if_block_creators = [create_if_block_5$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*isSkinCare*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block2 = (
    /*$routerPath*/
    ctx[2].current === Paths.GiftSelection && create_if_block_4$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_dev(target, t0, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_dev(target, if_block2_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*$routerPath*/
        ctx2[2].current === Paths.BestMatch
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_6(ctx2);
          if_block0.c();
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(t1.parentNode, t1);
      }
      if (
        /*$routerPath*/
        ctx2[2].current === Paths.GiftSelection
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_4$1(ctx2);
          if_block2.c();
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t0);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(if_block2_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$1.name,
    type: "if",
    source: "(42:4) {#if $SCAResult}",
    ctx
  });
  return block;
}
function create_if_block_6(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[6].bestLookForYour + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "data-qa", "tint-page-title");
      add_location(span, file$2, 43, 8, 1681);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      64 && t_value !== (t_value = /*$language*/
      ctx2[6].bestLookForYour + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_6.name,
    type: "if",
    source: "(43:6) {#if $routerPath.current === Paths.BestMatch}",
    ctx
  });
  return block;
}
function create_else_block$1(ctx) {
  let season;
  let current;
  const season_spread_levels = [
    /*$SCAResult*/
    ctx[5]
  ];
  let season_props = {};
  for (let i = 0; i < season_spread_levels.length; i += 1) {
    season_props = assign(season_props, season_spread_levels[i]);
  }
  season = new Season({ props: season_props, $$inline: true });
  const block = {
    c: function create() {
      create_component(season.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(season, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const season_changes = dirty & /*$SCAResult*/
      32 ? get_spread_update(season_spread_levels, [get_spread_object(
        /*$SCAResult*/
        ctx2[5]
      )]) : {};
      season.$set(season_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(season.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(season.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(season, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(48:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block_5$1(ctx) {
  let span;
  const block = {
    c: function create() {
      span = element("span");
      span.textContent = "Skin Care for your type";
      attr_dev(span, "data-qa", "tint-page-title");
      add_location(span, file$2, 46, 8, 1791);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5$1.name,
    type: "if",
    source: "(46:6) {#if isSkinCare}",
    ctx
  });
  return block;
}
function create_if_block_4$1(ctx) {
  let span;
  let t_value = (
    /*$language*/
    ctx[6].typeWillEnjoy + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      attr_dev(span, "data-qa", "tint-page-title");
      add_location(span, file$2, 51, 8, 1979);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      64 && t_value !== (t_value = /*$language*/
      ctx2[6].typeWillEnjoy + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$1.name,
    type: "if",
    source: "(51:6) {#if $routerPath.current === Paths.GiftSelection}",
    ctx
  });
  return block;
}
function create_heading_slot$2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_3$1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$SCAResult*/
      ctx2[5]
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
    m: function mount2(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
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
    id: create_heading_slot$2.name,
    type: "slot",
    source: '(41:2) <svelte:fragment slot=\\"heading\\">',
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let quizinfo;
  let current;
  quizinfo = new QuizInfo({ $$inline: true });
  quizinfo.$on(
    "finish",
    /*finish_handler*/
    ctx[13]
  );
  const block = {
    c: function create() {
      create_component(quizinfo.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(quizinfo, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(quizinfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(quizinfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(quizinfo, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(59:4) {#if showQuiz === true}",
    ctx
  });
  return block;
}
function create_info_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*showQuiz*/
    ctx[3] === true && create_if_block_2$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*showQuiz*/
        ctx2[3] === true
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*showQuiz*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2$1(ctx2);
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
    id: create_info_slot.name,
    type: "slot",
    source: '(58:2) <svelte:fragment slot=\\"info\\">',
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let brandfilter;
  let current;
  brandfilter = new Brand({
    props: { items: (
      /*$looksFilter*/
      ctx[1].brands
    ) },
    $$inline: true
  });
  brandfilter.$on(
    "change",
    /*change_handler*/
    ctx[12]
  );
  const block = {
    c: function create() {
      create_component(brandfilter.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(brandfilter, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const brandfilter_changes = {};
      if (dirty & /*$looksFilter*/
      2)
        brandfilter_changes.items = /*$looksFilter*/
        ctx2[1].brands;
      brandfilter.$set(brandfilter_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(brandfilter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(brandfilter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(brandfilter, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(64:4) {#if $looksFilter.brands.length && !isSkinCare}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let h2;
  const block = {
    c: function create() {
      h2 = element("h2");
      h2.textContent = "Bundles";
      attr_dev(h2, "class", "text-2xl");
      add_location(h2, file$2, 70, 6, 2581);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, h2, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(70:4) {#if isSkinCare}",
    ctx
  });
  return block;
}
function create_filter_slot(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*$looksFilter*/
    ctx[1].brands.length && !/*isSkinCare*/
    ctx[0] && create_if_block_1$1(ctx)
  );
  let if_block1 = (
    /*isSkinCare*/
    ctx[0] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*$looksFilter*/
        ctx2[1].brands.length && !/*isSkinCare*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$looksFilter, isSkinCare*/
          3) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*isSkinCare*/
        ctx2[0]
      ) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_filter_slot.name,
    type: "slot",
    source: '(63:2) <svelte:fragment slot=\\"filter\\">',
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let looks_1;
  let current;
  const looks_1_spread_levels = [
    {
      items: (
        /*$looks*/
        ctx[4].items.filter(
          /*func*/
          ctx[14]
        )
      )
    },
    { categories: (
      /*$looks*/
      ctx[4].categories
    ) },
    /*$$restProps*/
    ctx[9]
  ];
  let looks_1_props = {
    $$slots: {
      filter: [create_filter_slot],
      info: [create_info_slot],
      heading: [create_heading_slot$2]
    },
    $$scope: { ctx }
  };
  for (let i = 0; i < looks_1_spread_levels.length; i += 1) {
    looks_1_props = assign(looks_1_props, looks_1_spread_levels[i]);
  }
  looks_1 = new Looks({ props: looks_1_props, $$inline: true });
  looks_1.$on(
    "category-change",
    /*category_change_handler*/
    ctx[15]
  );
  looks_1.$on(
    "select",
    /*select_handler*/
    ctx[16]
  );
  looks_1.$on(
    "clear",
    /*clear_handler*/
    ctx[17]
  );
  const block = {
    c: function create() {
      create_component(looks_1.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(looks_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const looks_1_changes = dirty & /*$looks, isSkinCare, $$restProps*/
      529 ? get_spread_update(looks_1_spread_levels, [
        dirty & /*$looks, isSkinCare*/
        17 && {
          items: (
            /*$looks*/
            ctx2[4].items.filter(
              /*func*/
              ctx2[14]
            )
          )
        },
        dirty & /*$looks*/
        16 && { categories: (
          /*$looks*/
          ctx2[4].categories
        ) },
        dirty & /*$$restProps*/
        512 && get_spread_object(
          /*$$restProps*/
          ctx2[9]
        )
      ]) : {};
      if (dirty & /*$$scope, isSkinCare, $looksFilter, showQuiz, $language, $routerPath, $SCAResult*/
      1048687) {
        looks_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      looks_1.$set(looks_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(looks_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(looks_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(looks_1, detaching);
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
const limit$1 = 50;
function instance$3($$self, $$props, $$invalidate) {
  let isSkinCare;
  let showQuiz;
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $looksFilter;
  let $isQuizDone;
  let $routerPath;
  let $looks;
  let $SCAResult;
  let $language;
  validate_store(looksFilter, "looksFilter");
  component_subscribe($$self, looksFilter, ($$value) => $$invalidate(1, $looksFilter = $$value));
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(2, $routerPath = $$value));
  validate_store(looks, "looks");
  component_subscribe($$self, looks, ($$value) => $$invalidate(4, $looks = $$value));
  validate_store(result, "SCAResult");
  component_subscribe($$self, result, ($$value) => $$invalidate(5, $SCAResult = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(6, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Looks", slots, []);
  const { isQuizDone, showQuizWizard } = skinCare;
  validate_store(isQuizDone, "isQuizDone");
  component_subscribe($$self, isQuizDone, (value) => $$invalidate(11, $isQuizDone = value));
  const router = useRouter();
  const { brand } = getContext$2();
  let filter = $looksFilter.predicate.brand;
  const change_handler = ({ detail }) => looksFilter.filterByBrand(detail);
  const finish_handler = () => showQuizWizard.set(true);
  const func = ({ categoryType }) => isSkinCare ? categoryType === "skin-care" : "best-match";
  const category_change_handler = ({ detail }) => looks.changeCategory(detail);
  const select_handler = ({ detail }) => looks.select(detail);
  const clear_handler = ({ detail }) => looks.clear(detail);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
  };
  $$self.$capture_state = () => ({
    Queries,
    gql,
    Looks,
    Season,
    Paths,
    routerPath,
    useRouter,
    getAppContext: getContext$2,
    language,
    SCAResult: result,
    BrandFilter: Brand,
    QuizInfo,
    looks,
    looksData: data$1,
    looksFilter,
    skinCare,
    isQuizDone,
    showQuizWizard,
    router,
    brand,
    limit: limit$1,
    filter,
    isSkinCare,
    showQuiz,
    $looksFilter,
    $isQuizDone,
    $routerPath,
    $looks,
    $SCAResult,
    $language
  });
  $$self.$inject_state = ($$new_props) => {
    if ("filter" in $$props)
      $$invalidate(10, filter = $$new_props.filter);
    if ("isSkinCare" in $$props)
      $$invalidate(0, isSkinCare = $$new_props.isSkinCare);
    if ("showQuiz" in $$props)
      $$invalidate(3, showQuiz = $$new_props.showQuiz);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$routerPath*/
    4) {
      $$invalidate(0, isSkinCare = $routerPath.current === Paths.SkinCare);
    }
    if ($$self.$$.dirty & /*isSkinCare, $isQuizDone*/
    2049) {
      $$invalidate(3, showQuiz = isSkinCare && !$isQuizDone);
    }
    if ($$self.$$.dirty & /*filter, $looksFilter*/
    1026) {
      $: {
        if (filter === $looksFilter.predicate.brand)
          break $;
        else
          $$invalidate(10, filter = $looksFilter.predicate.brand);
        gql(GetLooks, filter === "all" ? { limit: limit$1 } : { brand: filter, withBrand: !brand, limit: limit$1 }).then((resp) => {
          const items = resp.looks.items;
          data$1.items.set(items);
        });
      }
    }
  };
  return [
    isSkinCare,
    $looksFilter,
    $routerPath,
    showQuiz,
    $looks,
    $SCAResult,
    $language,
    isQuizDone,
    showQuizWizard,
    $$restProps,
    filter,
    $isQuizDone,
    change_handler,
    finish_handler,
    func,
    category_change_handler,
    select_handler,
    clear_handler
  ];
}
class Looks_1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Looks_1",
      options,
      id: create_fragment$3.name
    });
  }
}
const get_heading_slot_changes = (dirty) => ({});
const get_heading_slot_context = (ctx) => ({ slot: "heading" });
function create_heading_slot$1(ctx) {
  let current;
  const heading_slot_template = (
    /*#slots*/
    ctx[12].heading
  );
  const heading_slot = create_slot(
    heading_slot_template,
    ctx,
    /*$$scope*/
    ctx[14],
    get_heading_slot_context
  );
  const block = {
    c: function create() {
      if (heading_slot)
        heading_slot.c();
    },
    m: function mount2(target, anchor) {
      if (heading_slot) {
        heading_slot.m(target, anchor);
      }
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (heading_slot) {
        if (heading_slot.p && (!current || dirty & /*$$scope*/
        16384)) {
          update_slot_base(
            heading_slot,
            heading_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[14],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[14]
            ) : get_slot_changes(
              heading_slot_template,
              /*$$scope*/
              ctx2[14],
              dirty,
              get_heading_slot_changes
            ),
            get_heading_slot_context
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(heading_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(heading_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (heading_slot)
        heading_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_heading_slot$1.name,
    type: "slot",
    source: "(73:2) ",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let products_1;
  let current;
  const products_1_spread_levels = [
    { items: (
      /*$items*/
      ctx[0]
    ) },
    { categories: (
      /*categoriesList*/
      ctx[1]
    ) },
    {
      seenItemsThreshold: (
        /*seenItemsThreshold*/
        ctx[4]
      )
    },
    /*$$restProps*/
    ctx[7]
  ];
  let products_1_props = {
    $$slots: { heading: [create_heading_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < products_1_spread_levels.length; i += 1) {
    products_1_props = assign(products_1_props, products_1_spread_levels[i]);
  }
  products_1 = new Products2({ props: products_1_props, $$inline: true });
  products_1.$on(
    "category-change",
    /*category_change_handler*/
    ctx[13]
  );
  products_1.$on(
    "select",
    /*onSelect*/
    ctx[6]
  );
  products_1.$on(
    "seen",
    /*loadMore*/
    ctx[5]
  );
  const block = {
    c: function create() {
      create_component(products_1.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(products_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const products_1_changes = dirty & /*$items, categoriesList, seenItemsThreshold, $$restProps*/
      147 ? get_spread_update(products_1_spread_levels, [
        dirty & /*$items*/
        1 && { items: (
          /*$items*/
          ctx2[0]
        ) },
        dirty & /*categoriesList*/
        2 && { categories: (
          /*categoriesList*/
          ctx2[1]
        ) },
        dirty & /*seenItemsThreshold*/
        16 && {
          seenItemsThreshold: (
            /*seenItemsThreshold*/
            ctx2[4]
          )
        },
        dirty & /*$$restProps*/
        128 && get_spread_object(
          /*$$restProps*/
          ctx2[7]
        )
      ]) : {};
      if (dirty & /*$$scope*/
      16384) {
        products_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      products_1.$set(products_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products_1, detaching);
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
const limit = 24;
function instance$2($$self, $$props, $$invalidate) {
  let categoriesList;
  let offset;
  let type;
  let season;
  const omit_props_names = ["skinCare"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $vto;
  let $looks;
  let $result;
  let $sca;
  let $categories;
  let $items;
  validate_store(vto, "vto");
  component_subscribe($$self, vto, ($$value) => $$invalidate(19, $vto = $$value));
  validate_store(looks, "looks");
  component_subscribe($$self, looks, ($$value) => $$invalidate(20, $looks = $$value));
  validate_store(result, "result");
  component_subscribe($$self, result, ($$value) => $$invalidate(21, $result = $$value));
  validate_store(result, "sca");
  component_subscribe($$self, result, ($$value) => $$invalidate(10, $sca = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Products", slots, ["heading"]);
  let { skinCare: skinCare2 = false } = $$props;
  const { brand } = getContext$2();
  const { items, categories } = products;
  validate_store(items, "items");
  component_subscribe($$self, items, (value) => $$invalidate(0, $items = value));
  validate_store(categories, "categories");
  component_subscribe($$self, categories, (value) => $$invalidate(11, $categories = value));
  const seenItemsThreshold = -limit / 2;
  let hasNext = true;
  let isLoading = false;
  const loadMore = () => {
    var _a, _b;
    if (!hasNext)
      return;
    if (isLoading)
      return;
    isLoading = true;
    gql(GetProducts, {
      brand,
      season,
      type,
      offset,
      limit,
      creamRanges: {
        bb: (_a = $result == null ? void 0 : $result.creamRanges) == null ? void 0 : _a.BB,
        cc: (_b = $result == null ? void 0 : $result.creamRanges) == null ? void 0 : _b.CC
      },
      withBrand: !brand
    }).then(({ products: products2 }) => {
      data.items.update((items2) => uniqBy(items2.concat(products2.items), ({ id }) => id));
      hasNext = products2.pageInfo.hasNext;
    }).finally(() => isLoading = false);
  };
  const onSelect = ({ detail }) => {
    if (detail.active && (!skinCare2 || !$looks.appliedLook)) {
      products.clear(detail);
      return;
    }
    const prevCount = $vto.categories.size;
    products.select(detail);
    const count = $vto.categories.size;
    const countChanged = count !== prevCount;
    if (countChanged && count > 0 && count % 2 === 0)
      showAd({ flow: "Products" });
  };
  const category_change_handler = ({ detail }) => products.changeCategory(detail);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("skinCare" in $$new_props)
      $$invalidate(8, skinCare2 = $$new_props.skinCare);
    if ("$$scope" in $$new_props)
      $$invalidate(14, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    Queries,
    gql,
    Products: Products2,
    uniqBy,
    getAppContext: getContext$2,
    showAd,
    result,
    looks,
    products,
    productsData: data,
    sca: result,
    vto,
    skinCare: skinCare2,
    brand,
    items,
    categories,
    limit,
    seenItemsThreshold,
    hasNext,
    isLoading,
    loadMore,
    onSelect,
    offset,
    type,
    season,
    categoriesList,
    $vto,
    $looks,
    $result,
    $sca,
    $categories,
    $items
  });
  $$self.$inject_state = ($$new_props) => {
    if ("skinCare" in $$props)
      $$invalidate(8, skinCare2 = $$new_props.skinCare);
    if ("hasNext" in $$props)
      hasNext = $$new_props.hasNext;
    if ("isLoading" in $$props)
      isLoading = $$new_props.isLoading;
    if ("offset" in $$props)
      offset = $$new_props.offset;
    if ("type" in $$props)
      $$invalidate(9, type = $$new_props.type);
    if ("season" in $$props)
      season = $$new_props.season;
    if ("categoriesList" in $$props)
      $$invalidate(1, categoriesList = $$new_props.categoriesList);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & /*$categories, skinCare*/
    2304) {
      $$invalidate(1, categoriesList = $categories.filter(({ categoryType }) => skinCare2 ? categoryType === "skin-care" : "best-match"));
    }
    if ($$self.$$.dirty & /*$items*/
    1) {
      offset = $items.length;
    }
    if ($$self.$$.dirty & /*$categories*/
    2048) {
      $$invalidate(9, type = (_a = $categories.find((c) => c.active)) == null ? void 0 : _a.type);
    }
    if ($$self.$$.dirty & /*$sca*/
    1024) {
      season = $sca == null ? void 0 : $sca.season;
    }
    if ($$self.$$.dirty & /*type*/
    512) {
      type && (hasNext = true);
    }
  };
  return [
    $items,
    categoriesList,
    items,
    categories,
    seenItemsThreshold,
    loadMore,
    onSelect,
    $$restProps,
    skinCare2,
    type,
    $sca,
    $categories,
    slots,
    category_change_handler,
    $$scope
  ];
}
class Products_1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { skinCare: 8 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Products_1",
      options,
      id: create_fragment$2.name
    });
  }
  get skinCare() {
    throw new Error("<Products>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set skinCare(value) {
    throw new Error("<Products>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "src/pages/best-match/Viewer.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-tzp8wl", "div.svelte-tzp8wl,div.svelte-tzp8wl>canvas{height:100%;width:100%\n}");
}
function create_default_slot$1(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element("div");
      attr_dev(div, "class", "svelte-tzp8wl");
      add_location(div, file$1, 90, 2, 2890);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, div, anchor);
      ctx[17](div);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      ctx[17](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(77:0) <Viewer   {loading}   canUndo={$vto.canUndo}   {expanded}   canRedo={$vto.canRedo}   isComparing={$vto.isComparing}   on:compare={() => vto.compare()}   on:compare={() => analytics.photo_before_after_clicked()}   on:undo={() => vto.undo()}   on:undo={() => analytics.photo_undo_clicked()}   on:redo={() => vto.redo()}   on:redo={() => analytics.photo_redo_clicked()}   on:expand={() => dispatch(\\"expand\\")} >',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let viewer;
  let current;
  viewer = new Viewer({
    props: {
      loading: (
        /*loading*/
        ctx[3]
      ),
      canUndo: (
        /*$vto*/
        ctx[2].canUndo
      ),
      expanded: (
        /*expanded*/
        ctx[0]
      ),
      canRedo: (
        /*$vto*/
        ctx[2].canRedo
      ),
      isComparing: (
        /*$vto*/
        ctx[2].isComparing
      ),
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  viewer.$on(
    "compare",
    /*compare_handler*/
    ctx[18]
  );
  viewer.$on(
    "compare",
    /*compare_handler_1*/
    ctx[19]
  );
  viewer.$on(
    "undo",
    /*undo_handler*/
    ctx[20]
  );
  viewer.$on(
    "undo",
    /*undo_handler_1*/
    ctx[21]
  );
  viewer.$on(
    "redo",
    /*redo_handler*/
    ctx[22]
  );
  viewer.$on(
    "redo",
    /*redo_handler_1*/
    ctx[23]
  );
  viewer.$on(
    "expand",
    /*expand_handler*/
    ctx[24]
  );
  const block = {
    c: function create() {
      create_component(viewer.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      mount_component(viewer, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const viewer_changes = {};
      if (dirty & /*loading*/
      8)
        viewer_changes.loading = /*loading*/
        ctx2[3];
      if (dirty & /*$vto*/
      4)
        viewer_changes.canUndo = /*$vto*/
        ctx2[2].canUndo;
      if (dirty & /*expanded*/
      1)
        viewer_changes.expanded = /*expanded*/
        ctx2[0];
      if (dirty & /*$vto*/
      4)
        viewer_changes.canRedo = /*$vto*/
        ctx2[2].canRedo;
      if (dirty & /*$vto*/
      4)
        viewer_changes.isComparing = /*$vto*/
        ctx2[2].isComparing;
      if (dirty & /*$$scope, webar*/
      33554434) {
        viewer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      viewer.$set(viewer_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(viewer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(viewer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(viewer, detaching);
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
  let loading2;
  let $problems;
  let $problemsVariant;
  let $showProblems;
  let $routerPath;
  let $vto;
  let $imageSource;
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(15, $routerPath = $$value));
  validate_store(vto, "vto");
  component_subscribe($$self, vto, ($$value) => $$invalidate(2, $vto = $$value));
  validate_store(source, "imageSource");
  component_subscribe($$self, source, ($$value) => $$invalidate(16, $imageSource = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Viewer", slots, []);
  const { showProblems, problems, problemsVariant } = skinCare;
  validate_store(showProblems, "showProblems");
  component_subscribe($$self, showProblems, (value) => $$invalidate(14, $showProblems = value));
  validate_store(problems, "problems");
  component_subscribe($$self, problems, (value) => $$invalidate(12, $problems = value));
  validate_store(problemsVariant, "problemsVariant");
  component_subscribe($$self, problemsVariant, (value) => $$invalidate(13, $problemsVariant = value));
  let { expanded = false } = $$props;
  const dispatch = createEventDispatcher();
  let webcam = null;
  let webar;
  let loaded = false;
  let ready = false;
  let rendered = false;
  onMount(() => {
    start().then(() => $$invalidate(9, loaded = true));
    return () => unmount(webar);
  });
  const writable_props = ["expanded"];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Viewer> was created with unknown prop '${key2}'`);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      webar = $$value;
      $$invalidate(1, webar);
    });
  }
  const compare_handler = () => vto.compare();
  const compare_handler_1 = () => analytics.photo_before_after_clicked();
  const undo_handler = () => vto.undo();
  const undo_handler_1 = () => analytics.photo_undo_clicked();
  const redo_handler = () => vto.redo();
  const redo_handler_1 = () => analytics.photo_redo_clicked();
  const expand_handler = () => dispatch("expand");
  $$self.$$set = ($$props2) => {
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    analytics,
    Viewer,
    Paths,
    routerPath,
    Beauty,
    isSourceChanged,
    appliedProducts,
    skinCare,
    vto,
    imageSource: source,
    showProblems,
    problems,
    problemsVariant,
    expanded,
    dispatch,
    webcam,
    webar,
    loaded,
    ready,
    rendered,
    loading: loading2,
    $problems,
    $problemsVariant,
    $showProblems,
    $routerPath,
    $vto,
    $imageSource
  });
  $$self.$inject_state = ($$props2) => {
    if ("expanded" in $$props2)
      $$invalidate(0, expanded = $$props2.expanded);
    if ("webcam" in $$props2)
      $$invalidate(8, webcam = $$props2.webcam);
    if ("webar" in $$props2)
      $$invalidate(1, webar = $$props2.webar);
    if ("loaded" in $$props2)
      $$invalidate(9, loaded = $$props2.loaded);
    if ("ready" in $$props2)
      $$invalidate(10, ready = $$props2.ready);
    if ("rendered" in $$props2)
      $$invalidate(11, rendered = $$props2.rendered);
    if ("loading" in $$props2)
      $$invalidate(3, loading2 = $$props2.loading);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$imageSource*/
    65536) {
      $imageSource && ($imageSource.type === "webcam" ? $$invalidate(8, webcam = useWebcam()) : usePhoto($imageSource.data)).then(() => $$invalidate(10, ready = true));
    }
    if ($$self.$$.dirty & /*loaded, ready, webar*/
    1538) {
      loaded && ready && render(webar).then(() => $$invalidate(11, rendered = true));
    }
    if ($$self.$$.dirty & /*rendered, $routerPath*/
    34816) {
      $$invalidate(3, loading2 = !rendered || isSourceChanged() && $routerPath.current !== Paths.GiftSelection);
    }
    if ($$self.$$.dirty & /*rendered*/
    2048) {
      {
        if (rendered) {
          appliedProducts.applyQueue();
          appliedProducts.clearQueue();
        }
      }
    }
    if ($$self.$$.dirty & /*$imageSource, webcam*/
    65792) {
      (!$imageSource || $imageSource.type !== "webcam") && webcam && webcam.then((w) => (w.scheduleStop(), $$invalidate(8, webcam = null)));
    }
    if ($$self.$$.dirty & /*loaded, $vto, $routerPath*/
    33284) {
      $: {
        if (!loaded)
          break $;
        const state = {};
        if ($vto.isComparing)
          ;
        else {
          const vtos = $vto.items.filter((i) => i.visible).map((i) => i.swatches).flat().filter((s) => s.active).map((s) => s.vto);
          for (const { region, ...settings } of vtos)
            state[region] = settings;
        }
        if ($routerPath.current !== Paths.SkinCare) {
          setState(state);
        }
      }
    }
    if ($$self.$$.dirty & /*loaded, $routerPath, $showProblems, $problems, $problemsVariant*/
    61952) {
      $: {
        if (!loaded || $routerPath.current !== Paths.SkinCare)
          break $;
        if ($showProblems && $problems.length) {
          setActiveProblems($problemsVariant, $problems);
        } else {
          setState({});
        }
      }
    }
  };
  return [
    expanded,
    webar,
    $vto,
    loading2,
    showProblems,
    problems,
    problemsVariant,
    dispatch,
    webcam,
    loaded,
    ready,
    rendered,
    $problems,
    $problemsVariant,
    $showProblems,
    $routerPath,
    $imageSource,
    div_binding,
    compare_handler,
    compare_handler_1,
    undo_handler,
    undo_handler_1,
    redo_handler,
    redo_handler_1,
    expand_handler
  ];
}
class Viewer_1 extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { expanded: 0 }, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Viewer_1",
      options,
      id: create_fragment$1.name
    });
  }
  get expanded() {
    throw new Error("<Viewer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set expanded(value) {
    throw new Error("<Viewer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/pages/best-match/BestMatch.svelte";
function add_css(target) {
  append_styles(target, "svelte-18f5qvg", "section.svelte-18f5qvg{display:flex;height:100%;width:100%;flex-direction:column}@media(min-width: 1024px){section.svelte-18f5qvg{flex-direction:row;gap:24px;padding:24px}}@media(min-width: 1280px){section.svelte-18f5qvg{gap:32px;padding:32px}}.vto.svelte-18f5qvg{position:relative;display:flex;width:100%;flex-shrink:0;flex-grow:1;flex-direction:column;padding-bottom:100%}@media(min-width: 768px){.vto.svelte-18f5qvg{padding-bottom:calc(410 / 768 * 100%)}}@media(min-width: 1024px){.vto.svelte-18f5qvg{padding-bottom:0px;width:calc(360 / (960 + -2 * 24) * 100%)}}@media(min-width: 1280px){.vto.svelte-18f5qvg{width:calc(398 / (1136 + -2 * 32) * 100%)}}.vto.svelte-18f5qvg>*{min-height:0px}.vto.svelte-18f5qvg>:first-child{position:absolute;top:0px;left:0px;height:100%;width:100%}@media(min-width: 1024px){.vto.svelte-18f5qvg>:first-child{position:relative;height:auto;flex-grow:1}}.vto.svelte-18f5qvg>:last-child{flex-shrink:0}section.svelte-18f5qvg>:nth-child(2){min-height:0px;min-width:0px}@media(min-width: 768px){section.svelte-18f5qvg>:nth-child(2){flex-grow:1}}@media(min-width: 1024px){section.svelte-18f5qvg>:nth-child(2){order:-1;margin-left:-20px;margin-right:-20px;margin-top:-32px;margin-bottom:-32px}}.store.svelte-18f5qvg{height:100%;width:100%;overflow-y:auto;overflow-x:hidden;padding-left:16px}@media(min-width: 768px){.store.svelte-18f5qvg{padding-left:32px}}@media(min-width: 1024px){.store.svelte-18f5qvg{padding-left:20px;padding-right:20px}}.store.svelte-18f5qvg>.looks{margin-bottom:16px}@media(min-width: 768px){.store.svelte-18f5qvg>.looks{margin-bottom:12px}}.store.svelte-18f5qvg>.products > ul{padding-right:16px}@media(min-width: 768px){.store.svelte-18f5qvg>.products > ul{padding-right:32px}}@media(min-width: 1024px){.store.svelte-18f5qvg>.products > ul{padding-right:0px}}.expanded > .store{overflow:hidden}");
}
function create_if_block_5(ctx) {
  let quizwizard;
  let current;
  quizwizard = new QuizWizard({ $$inline: true });
  quizwizard.$on(
    "close",
    /*close_handler*/
    ctx[16]
  );
  quizwizard.$on(
    "done",
    /*done_handler*/
    ctx[17]
  );
  const block = {
    c: function create() {
      create_component(quizwizard.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(quizwizard, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(quizwizard.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(quizwizard.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(quizwizard, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5.name,
    type: "if",
    source: "(53:4) {#if $showQuizWizard}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let looks_1;
  let current;
  looks_1 = new Looks_1({
    props: { class: "looks" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(looks_1.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(looks_1, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(looks_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(looks_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(looks_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(64:6) {#if hasLooks}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let products2;
  let current;
  products2 = new Products_1({
    props: {
      class: "products",
      skinCare: (
        /*isSkinCare*/
        ctx[0]
      ),
      $$slots: { heading: [create_heading_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(products2.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(products2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const products_changes = {};
      if (dirty & /*isSkinCare*/
      1)
        products_changes.skinCare = /*isSkinCare*/
        ctx2[0];
      if (dirty & /*$$scope, $isQuizDone, isSkinCare*/
      8388611) {
        products_changes.$$scope = { dirty, ctx: ctx2 };
      }
      products2.$set(products_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(79:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let products2;
  let current;
  products2 = new Products_1({
    props: {
      class: "products",
      isSkinCare: (
        /*isSkinCare*/
        ctx[0]
      ),
      $$slots: { heading: [create_heading_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(products2.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(products2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const products_changes = {};
      if (dirty & /*isSkinCare*/
      1)
        products_changes.isSkinCare = /*isSkinCare*/
        ctx2[0];
      if (dirty & /*$$scope, $SCAResult, $language*/
      8388868) {
        products_changes.$$scope = { dirty, ctx: ctx2 };
      }
      products2.$set(products_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(72:41) ",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let products2;
  let current;
  products2 = new Products_1({
    props: {
      class: "products",
      skinCare: (
        /*isSkinCare*/
        ctx[0]
      ),
      $$slots: { heading: [create_heading_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(products2.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(products2, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const products_changes = {};
      if (dirty & /*isSkinCare*/
      1)
        products_changes.skinCare = /*isSkinCare*/
        ctx2[0];
      if (dirty & /*$$scope, productsTitle*/
      8388616) {
        products_changes.$$scope = { dirty, ctx: ctx2 };
      }
      products2.$set(products_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(products2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(products2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(products2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(67:6) {#if hasLooks}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let span;
  let t1;
  let if_block_anchor;
  let current;
  let if_block = !/*$isQuizDone*/
  ctx[1] && create_if_block_3(ctx);
  const block = {
    c: function create() {
      span = element("span");
      span.textContent = "Skin care for your type";
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      add_location(span, file, 82, 14, 3044);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      insert_dev(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (!/*$isQuizDone*/
      ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$isQuizDone*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
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
      if (detaching)
        detach_dev(span);
      if (detaching)
        detach_dev(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(82:12) {#if isSkinCare}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let quizinfo;
  let current;
  quizinfo = new QuizInfo({ $$inline: true });
  quizinfo.$on(
    "finish",
    /*finish_handler*/
    ctx[18]
  );
  const block = {
    c: function create() {
      create_component(quizinfo.$$.fragment);
    },
    m: function mount2(target, anchor) {
      mount_component(quizinfo, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(quizinfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(quizinfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(quizinfo, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(85:14) {#if !$isQuizDone}",
    ctx
  });
  return block;
}
function create_heading_slot_2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*isSkinCare*/
    ctx[0] && create_if_block_2(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    m: function mount2(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*isSkinCare*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*isSkinCare*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
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
    id: create_heading_slot_2.name,
    type: "slot",
    source: '(81:10) <svelte:fragment slot=\\"heading\\">',
    ctx
  });
  return block;
}
function create_heading_slot_1(ctx) {
  let span;
  let t0_value = (
    /*$language*/
    ctx[2].bestForYourType + ""
  );
  let t0;
  let t1;
  let season_1;
  let current;
  const season_1_spread_levels = [
    /*$SCAResult*/
    ctx[8]
  ];
  let season_1_props = {};
  for (let i = 0; i < season_1_spread_levels.length; i += 1) {
    season_1_props = assign(season_1_props, season_1_spread_levels[i]);
  }
  season_1 = new Season({ props: season_1_props, $$inline: true });
  const block = {
    c: function create() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      create_component(season_1.$$.fragment);
      add_location(span, file, 74, 12, 2757);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t0);
      insert_dev(target, t1, anchor);
      mount_component(season_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & /*$language*/
      4) && t0_value !== (t0_value = /*$language*/
      ctx2[2].bestForYourType + ""))
        set_data_dev(t0, t0_value);
      const season_1_changes = dirty & /*$SCAResult*/
      256 ? get_spread_update(season_1_spread_levels, [get_spread_object(
        /*$SCAResult*/
        ctx2[8]
      )]) : {};
      season_1.$set(season_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(season_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(season_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      if (detaching)
        detach_dev(t1);
      destroy_component(season_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_heading_slot_1.name,
    type: "slot",
    source: '(74:10) <svelte:fragment slot=\\"heading\\">',
    ctx
  });
  return block;
}
function create_heading_slot(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*productsTitle*/
        ctx[3]
      );
      attr_dev(span, "slot", "heading");
      add_location(span, file, 69, 10, 2547);
    },
    m: function mount2(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*productsTitle*/
      8)
        set_data_dev(
          t,
          /*productsTitle*/
          ctx2[3]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_heading_slot.name,
    type: "slot",
    source: "(70:10) ",
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let t0;
  let div;
  let t1;
  let current_block_type_index;
  let if_block2;
  let current;
  let if_block0 = (
    /*$showQuizWizard*/
    ctx[6] && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*hasLooks*/
    ctx[5] && create_if_block_4(ctx)
  );
  const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*hasLooks*/
      ctx2[5]
    )
      return 0;
    if (
      /*scaNoLooks*/
      ctx2[12] && /*$SCAResult*/
      ctx2[8]
    )
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      div = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if_block2.c();
      attr_dev(div, "class", "store svelte-18f5qvg");
      add_location(div, file, 62, 4, 2309);
    },
    m: function mount2(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      if (if_block1)
        if_block1.m(div, null);
      append_dev(div, t1);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*$showQuizWizard*/
        ctx2[6]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*$showQuizWizard*/
          64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*hasLooks*/
        ctx2[5]
      ) {
        if (if_block1) {
          if (dirty & /*hasLooks*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
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
        if_block2 = if_blocks[current_block_type_index];
        if (!if_block2) {
          if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block2.c();
        } else {
          if_block2.p(ctx2, dirty);
        }
        transition_in(if_block2, 1);
        if_block2.m(div, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div);
      if (if_block1)
        if_block1.d();
      if_blocks[current_block_type_index].d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(52:2) <BestMatchStore {expanded}>",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div;
  let viewer;
  let t0;
  let cart2;
  let t1;
  let bestmatchstore;
  let section_class_value;
  let current;
  let mounted;
  let dispose;
  viewer = new Viewer_1({
    props: { expanded: (
      /*expanded*/
      ctx[4]
    ) },
    $$inline: true
  });
  viewer.$on(
    "expand",
    /*expand_handler*/
    ctx[15]
  );
  cart2 = new Cart_1({ $$inline: true });
  bestmatchstore = new BestMatchStore({
    props: {
      expanded: (
        /*expanded*/
        ctx[4]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      create_component(viewer.$$.fragment);
      t0 = space();
      create_component(cart2.$$.fragment);
      t1 = space();
      create_component(bestmatchstore.$$.fragment);
      attr_dev(div, "class", "vto svelte-18f5qvg");
      add_location(div, file, 47, 2, 1911);
      attr_dev(section, "class", section_class_value = null_to_empty(
        /*$loading*/
        ctx[7] ? "blur-lg" : ""
      ) + " svelte-18f5qvg");
      add_location(section, file, 46, 0, 1833);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount2(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div);
      mount_component(viewer, div, null);
      append_dev(div, t0);
      mount_component(cart2, div, null);
      append_dev(section, t1);
      mount_component(bestmatchstore, section, null);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(createPortal.call(null, section, "best-match"));
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      const viewer_changes = {};
      if (dirty & /*expanded*/
      16)
        viewer_changes.expanded = /*expanded*/
        ctx2[4];
      viewer.$set(viewer_changes);
      const bestmatchstore_changes = {};
      if (dirty & /*expanded*/
      16)
        bestmatchstore_changes.expanded = /*expanded*/
        ctx2[4];
      if (dirty & /*$$scope, isSkinCare, productsTitle, hasLooks, $SCAResult, $language, $isQuizDone, $showQuizWizard*/
      8388975) {
        bestmatchstore_changes.$$scope = { dirty, ctx: ctx2 };
      }
      bestmatchstore.$set(bestmatchstore_changes);
      if (!current || dirty & /*$loading*/
      128 && section_class_value !== (section_class_value = null_to_empty(
        /*$loading*/
        ctx2[7] ? "blur-lg" : ""
      ) + " svelte-18f5qvg")) {
        attr_dev(section, "class", section_class_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(viewer.$$.fragment, local);
      transition_in(cart2.$$.fragment, local);
      transition_in(bestmatchstore.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(viewer.$$.fragment, local);
      transition_out(cart2.$$.fragment, local);
      transition_out(bestmatchstore.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(viewer);
      destroy_component(cart2);
      destroy_component(bestmatchstore);
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
function instance($$self, $$props, $$invalidate) {
  let isSkinCare;
  let hasLooks;
  let $showQuizWizard;
  let $isQuizDone;
  let $language;
  let $routerPath;
  let $looks;
  let $loading;
  let $sca;
  let $SCAResult;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(2, $language = $$value));
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(13, $routerPath = $$value));
  validate_store(looks, "looks");
  component_subscribe($$self, looks, ($$value) => $$invalidate(14, $looks = $$value));
  validate_store(loading, "loading");
  component_subscribe($$self, loading, ($$value) => $$invalidate(7, $loading = $$value));
  validate_store(result, "sca");
  component_subscribe($$self, result, ($$value) => $$invalidate(19, $sca = $$value));
  validate_store(result, "SCAResult");
  component_subscribe($$self, result, ($$value) => $$invalidate(8, $SCAResult = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BestMatch", slots, []);
  const { isQuizDone, setQuizData, showQuizWizard } = skinCare;
  validate_store(isQuizDone, "isQuizDone");
  component_subscribe($$self, isQuizDone, (value) => $$invalidate(1, $isQuizDone = value));
  validate_store(showQuizWizard, "showQuizWizard");
  component_subscribe($$self, showQuizWizard, (value) => $$invalidate(6, $showQuizWizard = value));
  const { brand } = getContext$2();
  const season = $sca == null ? void 0 : $sca.season;
  const router = useRouter();
  const scaNoLooks = true;
  let productsTitle;
  let expanded = false;
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<BestMatch> was created with unknown prop '${key2}'`);
  });
  const expand_handler = () => $$invalidate(4, expanded = !expanded);
  const close_handler = () => showQuizWizard.set(false);
  const done_handler = ({ detail }) => {
    isQuizDone.set(true);
    showQuizWizard.set(false);
    setQuizData(detail);
  };
  const finish_handler = () => showQuizWizard.set(true);
  $$self.$capture_state = () => ({
    Season,
    Paths,
    isDataPathChanged,
    loading,
    routerPath,
    updateDataPath,
    useRouter,
    createPortal,
    QuizInfo,
    QuizWizard,
    updateData,
    getAppContext: getContext$2,
    isSourceChanged,
    language,
    SCAResult: result,
    BestMatchStore,
    Cart: Cart_1,
    Looks: Looks_1,
    Products: Products_1,
    Viewer: Viewer_1,
    appliedProducts,
    clearDataItems,
    looks,
    sca: result,
    skinCare,
    vto,
    isQuizDone,
    setQuizData,
    showQuizWizard,
    brand,
    season,
    router,
    scaNoLooks,
    productsTitle,
    expanded,
    isSkinCare,
    hasLooks,
    $showQuizWizard,
    $isQuizDone,
    $language,
    $routerPath,
    $looks,
    $loading,
    $sca,
    $SCAResult
  });
  $$self.$inject_state = ($$props2) => {
    if ("productsTitle" in $$props2)
      $$invalidate(3, productsTitle = $$props2.productsTitle);
    if ("expanded" in $$props2)
      $$invalidate(4, expanded = $$props2.expanded);
    if ("isSkinCare" in $$props2)
      $$invalidate(0, isSkinCare = $$props2.isSkinCare);
    if ("hasLooks" in $$props2)
      $$invalidate(5, hasLooks = $$props2.hasLooks);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$routerPath*/
    8192) {
      $$invalidate(0, isSkinCare = $routerPath.current === Paths.SkinCare);
    }
    if ($$self.$$.dirty & /*isSkinCare*/
    1) {
      if (isDataPathChanged()) {
        set_store_value(loading, $loading = true, $loading);
        appliedProducts.clear();
        vto.clear();
        clearDataItems();
        updateData(
          isSkinCare,
          () => {
            updateDataPath();
            set_store_value(loading, $loading = false, $loading);
            appliedProducts.clear();
          },
          brand,
          season
        );
      }
    }
    if ($$self.$$.dirty & /*$looks*/
    16384) {
      $$invalidate(5, hasLooks = $looks.items.length > 0);
    }
    if ($$self.$$.dirty & /*$routerPath, $language*/
    8196) {
      if ($routerPath.current === Paths.BestMatch || $routerPath.current === Paths.GiftSelection)
        $$invalidate(3, productsTitle = $language.CompleteLookWith);
    }
    if ($$self.$$.dirty & /*isSkinCare, $isQuizDone*/
    3) {
      if (isSkinCare) {
        $$invalidate(3, productsTitle = "Single products");
        if (!$isQuizDone && !isSourceChanged()) {
          set_store_value(showQuizWizard, $showQuizWizard = true, $showQuizWizard);
        }
      }
    }
  };
  return [
    isSkinCare,
    $isQuizDone,
    $language,
    productsTitle,
    expanded,
    hasLooks,
    $showQuizWizard,
    $loading,
    $SCAResult,
    isQuizDone,
    setQuizData,
    showQuizWizard,
    scaNoLooks,
    $routerPath,
    $looks,
    expand_handler,
    close_handler,
    done_handler,
    finish_handler
  ];
}
class BestMatch extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BestMatch",
      options,
      id: create_fragment.name
    });
  }
}
const BestMatch$1 = BestMatch;
export {
  BestMatch$1 as B
};

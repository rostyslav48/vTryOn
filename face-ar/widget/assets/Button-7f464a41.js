import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, ab as validate_each_argument, ac as compute_rest_props, g as validate_slots, ad as assign, ae as exclude_internal_props, af as cx, j as element, o as attr_dev, ag as null_to_empty, ah as toggle_class, q as add_location, r as insert_dev, aa as noop, E as detach_dev, ai as destroy_each, aj as validate_dynamic_element, ak as validate_void_dynamic_element, al as create_slot, R as empty, C as transition_in, D as transition_out, am as bubble, m as space, an as set_dynamic_element_data, w as append_dev, y as listen_dev, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, T as group_outros, U as check_outros, ar as get_spread_update, n as create_component, x as mount_component, F as destroy_component, k as text, A as set_data_dev } from "./app.js";
const file$1 = "src/lib/elements/Spinner/Spinner.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-rnog5r", "span.svelte-rnog5r.svelte-rnog5r{position:relative;z-index:10;display:inline-block}.sm.svelte-rnog5r.svelte-rnog5r{margin:8px;height:24px;width:24px}.sm.svelte-rnog5r i.svelte-rnog5r{border-width:2px}.lg.svelte-rnog5r.svelte-rnog5r{margin:10px;height:44px;width:44px}.lg.svelte-rnog5r i.svelte-rnog5r{border-width:4px}.centered.svelte-rnog5r.svelte-rnog5r{position:absolute;top:50%;left:50%;margin:0px;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes svelte-rnog5r-lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}i.svelte-rnog5r.svelte-rnog5r{position:absolute;display:block;height:100%;width:100%;animation:svelte-rnog5r-lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-radius:9999px;border-color:transparent;border-top-color:currentColor}i.svelte-rnog5r.svelte-rnog5r:nth-child(1){animation-delay:-0.45s}i.svelte-rnog5r.svelte-rnog5r:nth-child(2){animation-delay:-0.3s}i.svelte-rnog5r.svelte-rnog5r:nth-child(3){animation-delay:-0.15s}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let i;
  const block = {
    c: function create() {
      i = element("i");
      attr_dev(i, "class", "svelte-rnog5r");
      add_location(i, file$1, 12, 4, 344);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(i);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(12:2) {#each new Array(4) as _}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let span;
  let span_class_value;
  let each_value = new Array(4);
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      span = element("span");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(span, "class", span_class_value = null_to_empty(
        /*classes*/
        ctx[1]
      ) + " svelte-rnog5r");
      toggle_class(
        span,
        "centered",
        /*centered*/
        ctx[0]
      );
      add_location(span, file$1, 10, 0, 274);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(span, null);
        }
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*classes*/
      2 && span_class_value !== (span_class_value = null_to_empty(
        /*classes*/
        ctx2[1]
      ) + " svelte-rnog5r")) {
        attr_dev(span, "class", span_class_value);
      }
      if (dirty & /*classes, centered*/
      3) {
        toggle_class(
          span,
          "centered",
          /*centered*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
      destroy_each(each_blocks, detaching);
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
  let classes;
  const omit_props_names = ["size", "centered"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Spinner", slots, []);
  let { size = "sm" } = $$props;
  let { centered = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(2, size = $$new_props.size);
    if ("centered" in $$new_props)
      $$invalidate(0, centered = $$new_props.centered);
  };
  $$self.$capture_state = () => ({ cx, size, centered, classes });
  $$self.$inject_state = ($$new_props) => {
    if ("size" in $$props)
      $$invalidate(2, size = $$new_props.size);
    if ("centered" in $$props)
      $$invalidate(0, centered = $$new_props.centered);
    if ("classes" in $$props)
      $$invalidate(1, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(1, classes = cx("tint-spinner", $$restProps.class, size));
  };
  return [centered, classes, size];
}
class Spinner extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { size: 2, centered: 0 }, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Spinner",
      options,
      id: create_fragment$1.name
    });
  }
  get size() {
    throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get centered() {
    throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set centered(value) {
    throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/lib/elements/Button/Button.svelte";
function add_css(target) {
  append_styles(target, "svelte-zkl1ip", ".tint-button.svelte-zkl1ip{cursor:pointer;text-align:center;font-weight:700;outline:2px solid transparent;outline-offset:2px;transition-property:background-color,color,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.primary.svelte-zkl1ip{background-color:var(--tint-button-primary-background);color:var(--tint-text-light)\n}.primary.svelte-zkl1ip:hover{background-color:var(--tint-button-primary-background-hover)\n}.primary.svelte-zkl1ip:active{background-color:var(--tint-button-primary-background-active)\n}.primary.svelte-zkl1ip:disabled,.primary.disabled.svelte-zkl1ip{background-color:var(--tint-button-primary-background-disabled)\n}.primary.svelte-zkl1ip:disabled:not(.loading),.primary.disabled.svelte-zkl1ip:not(.loading){--tw-text-opacity:0.6\n}.secondary.svelte-zkl1ip{background-color:var(--tint-button-secondary-background);color:var(--tint-text-dark)\n}.secondary.svelte-zkl1ip:hover{background-color:var(--tint-button-secondary-background-hover)\n}.secondary.svelte-zkl1ip:active{background-color:var(--tint-button-secondary-background-active)\n}.secondary.svelte-zkl1ip:disabled,.secondary.disabled.svelte-zkl1ip{background-color:var(--tint-button-secondary-background-disabled)\n}.secondary.svelte-zkl1ip:disabled:not(.loading),.secondary.disabled.svelte-zkl1ip:not(.loading){--tw-text-opacity:0.3\n}.white.svelte-zkl1ip{border-width:1px;--tw-border-opacity:1;border-color:rgb(220 220 221 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));color:var(--tint-text-dark)\n}.black.svelte-zkl1ip{border-width:1px;--tw-border-opacity:1;border-color:rgb(22 22 26 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(22 22 26 / var(--tw-bg-opacity));color:var(--tint-text-light)\n}.overlay.svelte-zkl1ip{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.25;font-weight:400;color:var(--tint-text-light)\n}.overlay-active.svelte-zkl1ip{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;font-weight:400;color:var(--tint-text-light)\n}.sm.svelte-zkl1ip{min-height:32px;border-radius:var(--tint-button-sm-radius);padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px;font-size:12px;line-height:16px\n}.base.svelte-zkl1ip{min-height:36px;border-radius:var(--tint-button-base-radius);padding-left:24px;padding-right:24px;padding-top:8px;padding-bottom:8px;font-size:14px;line-height:20px\n}.lg.svelte-zkl1ip{min-height:40px;border-radius:var(--tint-button-lg-radius);padding-left:40px;padding-right:40px;padding-top:10px;padding-bottom:10px;font-size:16px;line-height:24px\n}.count.svelte-zkl1ip{position:absolute;top:-8px;right:-8px;display:flex;height:24px;width:24px;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 45 85 / var(--tw-bg-opacity));color:var(--tint-text-light)\n}.loading.svelte-zkl1ip{position:relative\n}.loading.svelte-zkl1ip>:first-child{visibility:hidden\n}");
}
function create_if_block_1(ctx) {
  let spinner;
  let current;
  spinner = new Spinner({
    props: { centered: true },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(spinner.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(spinner, target, anchor);
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
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(27:2) {#if loading}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let span;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(
        /*count*/
        ctx[3]
      );
      attr_dev(span, "class", "count svelte-zkl1ip");
      add_location(span, file, 27, 22, 720);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*count*/
      8)
        set_data_dev(
          t,
          /*count*/
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
    id: create_if_block.name,
    type: "if",
    source: "(28:2) {#if count !== null}",
    ctx
  });
  return block;
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let span;
  let t0;
  let t1;
  let svelte_element_disabled_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  let if_block0 = (
    /*loading*/
    ctx[1] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*count*/
    ctx[3] !== null && create_if_block(ctx)
  );
  let svelte_element_levels = [
    /*$$restProps*/
    ctx[6],
    { class: (
      /*classes*/
      ctx[5]
    ) },
    {
      disabled: svelte_element_disabled_value = /*disabled*/
      ctx[2] || /*loading*/
      ctx[1]
    },
    { "data-qa": (
      /*qa*/
      ctx[4]
    ) }
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
      span = element("span");
      if (default_slot)
        default_slot.c();
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      add_location(span, file, 25, 2, 635);
      set_dynamic_element_data(
        /*as*/
        ctx[0]
      )(svelte_element, svelte_element_data);
      toggle_class(
        svelte_element,
        "loading",
        /*loading*/
        ctx[1]
      );
      toggle_class(svelte_element, "svelte-zkl1ip", true);
      add_location(svelte_element, file, 16, 0, 491);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
      append_dev(svelte_element, span);
      if (default_slot) {
        default_slot.m(span, null);
      }
      append_dev(svelte_element, t0);
      if (if_block0)
        if_block0.m(svelte_element, null);
      append_dev(svelte_element, t1);
      if (if_block1)
        if_block1.m(svelte_element, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(
          svelte_element,
          "click",
          /*click_handler*/
          ctx[11],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (
        /*loading*/
        ctx2[1]
      ) {
        if (if_block0) {
          if (dirty & /*loading*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(svelte_element, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*count*/
        ctx2[3] !== null
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(svelte_element, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      set_dynamic_element_data(
        /*as*/
        ctx2[0]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6],
        (!current || dirty & /*classes*/
        32) && { class: (
          /*classes*/
          ctx2[5]
        ) },
        (!current || dirty & /*disabled, loading*/
        6 && svelte_element_disabled_value !== (svelte_element_disabled_value = /*disabled*/
        ctx2[2] || /*loading*/
        ctx2[1])) && { disabled: svelte_element_disabled_value },
        (!current || dirty & /*qa*/
        16) && { "data-qa": (
          /*qa*/
          ctx2[4]
        ) }
      ]));
      toggle_class(
        svelte_element,
        "loading",
        /*loading*/
        ctx2[1]
      );
      toggle_class(svelte_element, "svelte-zkl1ip", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element.name,
    type: "child_dynamic_element",
    source: "(17:0) <svelte:element   this={as}   {...$$restProps}   class={classes}   class:loading   disabled={disabled || loading}   on:click   data-qa={qa} >",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
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
    m: function mount(target, anchor) {
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
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let classes;
  const omit_props_names = ["as", "variant", "size", "loading", "disabled", "count", "qa"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Button", slots, ["default"]);
  let { as = "button" } = $$props;
  let { variant = "primary" } = $$props;
  let { size = "base" } = $$props;
  let { loading = false } = $$props;
  let { disabled = false } = $$props;
  let { count = null } = $$props;
  let { qa = void 0 } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("variant" in $$new_props)
      $$invalidate(7, variant = $$new_props.variant);
    if ("size" in $$new_props)
      $$invalidate(8, size = $$new_props.size);
    if ("loading" in $$new_props)
      $$invalidate(1, loading = $$new_props.loading);
    if ("disabled" in $$new_props)
      $$invalidate(2, disabled = $$new_props.disabled);
    if ("count" in $$new_props)
      $$invalidate(3, count = $$new_props.count);
    if ("qa" in $$new_props)
      $$invalidate(4, qa = $$new_props.qa);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    Spinner,
    cx,
    as,
    variant,
    size,
    loading,
    disabled,
    count,
    qa,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("as" in $$props)
      $$invalidate(0, as = $$new_props.as);
    if ("variant" in $$props)
      $$invalidate(7, variant = $$new_props.variant);
    if ("size" in $$props)
      $$invalidate(8, size = $$new_props.size);
    if ("loading" in $$props)
      $$invalidate(1, loading = $$new_props.loading);
    if ("disabled" in $$props)
      $$invalidate(2, disabled = $$new_props.disabled);
    if ("count" in $$props)
      $$invalidate(3, count = $$new_props.count);
    if ("qa" in $$props)
      $$invalidate(4, qa = $$new_props.qa);
    if ("classes" in $$props)
      $$invalidate(5, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(5, classes = cx($$restProps.class, "tint-button", variant, size, disabled && "disabled"));
  };
  return [
    as,
    loading,
    disabled,
    count,
    qa,
    classes,
    $$restProps,
    variant,
    size,
    $$scope,
    slots,
    click_handler
  ];
}
class Button extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        as: 0,
        variant: 7,
        size: 8,
        loading: 1,
        disabled: 2,
        count: 3,
        qa: 4
      },
      add_css
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment.name
    });
  }
  get as() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set as(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get variant() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set variant(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get loading() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set loading(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get disabled() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set disabled(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get count() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set count(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  Button as B,
  Spinner as S
};

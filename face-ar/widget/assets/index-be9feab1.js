import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, ac as compute_rest_props, g as validate_slots, ad as assign, ae as exclude_internal_props, af as cx, al as create_slot, n as create_component, x as mount_component, C as transition_in, D as transition_out, F as destroy_component, at as binding_callbacks, j as element, o as attr_dev, ag as null_to_empty, q as add_location, r as insert_dev, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, E as detach_dev, v as validate_store, l as language, f as component_subscribe, au as completed, av as loading, aw as cart, u as useRouter, ax as getContext, ay as createEventDispatcher, P as Paths, az as isMobileDevice, aA as pickADate, aB as showAd, h as analytics, aC as Icon, ab as validate_each_argument, m as space, w as append_dev, T as group_outros, U as check_outros, ai as destroy_each, aa as noop, aD as globals, ah as toggle_class, k as text, A as set_data_dev, aF as setContext, aG as getContext$1, aH as IconButton, aI as getSvelteRoot, aJ as writable, V as set_store_value, aK as action_destroyer, y as listen_dev, aL as add_render_callback, aM as create_in_transition, aN as create_out_transition, G as run_all, aj as validate_dynamic_element, ak as validate_void_dynamic_element, R as empty, am as bubble, an as set_dynamic_element_data, z as prevent_default, ar as get_spread_update } from "./app.js";
import { aE } from "./app.js";
import { f as fade } from "./index-2d8ed87d.js";
import { F as Floating, c as clickOutside } from "./Floating-aa1e9f05.js";
import "./BanubaSDK-34db11e0.js";
const file$3 = "src/lib/elements/Popup/Popup.svelte";
function add_css$3(target) {
  append_styles(target, "svelte-wohun3", ".tint-popup.svelte-wohun3{display:flex;flex-shrink:0;align-items:center;border-radius:8px;--tw-bg-opacity:1;background-color:rgb(56 56 60 / var(--tw-bg-opacity));padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px;font-size:14px;line-height:20px;color:var(--tint-text-light)\n}");
}
function create_default_slot$1(ctx) {
  let div;
  let div_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", div_class_value = null_to_empty(
        /*classes*/
        ctx[5]
      ) + " svelte-wohun3");
      add_location(div, file$3, 17, 2, 399);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
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
      if (!current || dirty & /*classes*/
      32 && div_class_value !== (div_class_value = null_to_empty(
        /*classes*/
        ctx2[5]
      ) + " svelte-wohun3")) {
        attr_dev(div, "class", div_class_value);
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
    id: create_default_slot$1.name,
    type: "slot",
    source: "(11:0) <Floating   bind:this={floating}   {anchor}   {placement}   {offset}   on:open={() => setTimeout(() => floating?.close(), delay)} >",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let floating_1;
  let current;
  let floating_1_props = {
    anchor: (
      /*anchor*/
      ctx[0]
    ),
    placement: (
      /*placement*/
      ctx[1]
    ),
    offset: (
      /*offset*/
      ctx[2]
    ),
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  floating_1 = new Floating({ props: floating_1_props, $$inline: true });
  ctx[7](floating_1);
  floating_1.$on(
    "open",
    /*open_handler*/
    ctx[8]
  );
  const block = {
    c: function create() {
      create_component(floating_1.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(floating_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const floating_1_changes = {};
      if (dirty & /*anchor*/
      1)
        floating_1_changes.anchor = /*anchor*/
        ctx2[0];
      if (dirty & /*placement*/
      2)
        floating_1_changes.placement = /*placement*/
        ctx2[1];
      if (dirty & /*offset*/
      4)
        floating_1_changes.offset = /*offset*/
        ctx2[2];
      if (dirty & /*$$scope, classes*/
      544) {
        floating_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      floating_1.$set(floating_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(floating_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(floating_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      ctx[7](null);
      destroy_component(floating_1, detaching);
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
  let classes;
  const omit_props_names = ["anchor", "placement", "offset", "delay"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Popup", slots, ["default"]);
  let { anchor } = $$props;
  let { placement = "bottom" } = $$props;
  let { offset = [0, 0] } = $$props;
  let { delay = 2e3 } = $$props;
  let floating;
  $$self.$$.on_mount.push(function() {
    if (anchor === void 0 && !("anchor" in $$props || $$self.$$.bound[$$self.$$.props["anchor"]])) {
      console.warn("<Popup> was created without expected prop 'anchor'");
    }
  });
  function floating_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      floating = $$value;
      $$invalidate(4, floating);
    });
  }
  const open_handler = () => setTimeout(() => floating == null ? void 0 : floating.close(), delay);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("anchor" in $$new_props)
      $$invalidate(0, anchor = $$new_props.anchor);
    if ("placement" in $$new_props)
      $$invalidate(1, placement = $$new_props.placement);
    if ("offset" in $$new_props)
      $$invalidate(2, offset = $$new_props.offset);
    if ("delay" in $$new_props)
      $$invalidate(3, delay = $$new_props.delay);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    Floating,
    cx,
    anchor,
    placement,
    offset,
    delay,
    floating,
    classes
  });
  $$self.$inject_state = ($$new_props) => {
    if ("anchor" in $$props)
      $$invalidate(0, anchor = $$new_props.anchor);
    if ("placement" in $$props)
      $$invalidate(1, placement = $$new_props.placement);
    if ("offset" in $$props)
      $$invalidate(2, offset = $$new_props.offset);
    if ("delay" in $$props)
      $$invalidate(3, delay = $$new_props.delay);
    if ("floating" in $$props)
      $$invalidate(4, floating = $$new_props.floating);
    if ("classes" in $$props)
      $$invalidate(5, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    $$invalidate(5, classes = cx($$restProps.class, "tint-popup"));
  };
  return [
    anchor,
    placement,
    offset,
    delay,
    floating,
    classes,
    slots,
    floating_1_binding,
    open_handler,
    $$scope
  ];
}
class Popup extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance$3,
      create_fragment$3,
      safe_not_equal,
      {
        anchor: 0,
        placement: 1,
        offset: 2,
        delay: 3
      },
      add_css$3
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Popup",
      options,
      id: create_fragment$3.name
    });
  }
  get anchor() {
    throw new Error("<Popup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set anchor(value) {
    throw new Error("<Popup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get placement() {
    throw new Error("<Popup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set placement(value) {
    throw new Error("<Popup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get offset() {
    throw new Error("<Popup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set offset(value) {
    throw new Error("<Popup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get delay() {
    throw new Error("<Popup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set delay(value) {
    throw new Error("<Popup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { Boolean: Boolean_1 } = globals;
const file$2 = "src/pages/_layout/Layout.svelte";
function add_css$2(target) {
  append_styles(target, "svelte-m77zhr", 'div.svelte-m77zhr.svelte-m77zhr{position:relative;z-index:10;display:flex;height:100%;width:100%\n}@media(min-width: 1280px){div.svelte-m77zhr.svelte-m77zhr{height:775px;width:1200px;border-radius:12px\n    }}div.svelte-m77zhr>:not(:first-child){min-width:0px\n}ul.svelte-m77zhr.svelte-m77zhr{margin-bottom:auto;display:flex;flex-grow:1;flex-direction:column;gap:8px\n}li.svelte-m77zhr.svelte-m77zhr{overflow:hidden\n}li.cart.svelte-m77zhr.svelte-m77zhr{position:relative\n}li.cart.svelte-m77zhr.svelte-m77zhr::before{position:absolute;top:2px;left:26px;display:block;height:12px;width:12px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 45 85 / var(--tw-bg-opacity));--tw-content:"";content:var(--tw-content)\n}li.svelte-m77zhr:not(.bookADemo)+.close.svelte-m77zhr{margin-top:auto\n}@media(min-width: 1280px){.close.svelte-m77zhr.svelte-m77zhr{display:none\n    }}.bookADemo.svelte-m77zhr.svelte-m77zhr{margin-top:auto\n}');
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[19] = list[i];
  child_ctx[23] = list;
  child_ctx[24] = i;
  const constants_0 = !/*route*/
  child_ctx[19].unimplemented;
  child_ctx[20] = constants_0;
  const constants_1 = (
    /*route*/
    child_ctx[19].path === Paths.BestMatch
  );
  child_ctx[21] = constants_1;
  const constants_2 = (
    /*route*/
    child_ctx[19].path === Paths.BookADemo
  );
  child_ctx[22] = constants_2;
  return child_ctx;
}
function create_if_block$1(ctx) {
  let navbar;
  let current;
  navbar = new Navbar({
    props: {
      class: (
        /*$completed*/
        ctx[3] || !/*$loading*/
        ctx[4] ? "" : "pointer-events-none"
      ),
      $$slots: {
        logo: [
          create_logo_slot,
          ({ close }) => ({ 18: close }),
          ({ close }) => close ? 262144 : 0
        ],
        default: [
          create_default_slot,
          ({ close }) => ({ 18: close }),
          ({ close }) => close ? 262144 : 0
        ]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(navbar.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(navbar, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const navbar_changes = {};
      if (dirty & /*$completed, $loading*/
      24)
        navbar_changes.class = /*$completed*/
        ctx2[3] || !/*$loading*/
        ctx2[4] ? "" : "pointer-events-none";
      if (dirty & /*$$scope, close, $language, $cart, routes, items*/
      294951) {
        navbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navbar.$set(navbar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(navbar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(navbar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(65:2) {#if !ctx.recommendationSystemVersion}",
    ctx
  });
  return block;
}
function create_default_slot_5(ctx) {
  let t_value = (
    /*route*/
    ctx[19].title + ""
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
      if (dirty & /*routes*/
      1 && t_value !== (t_value = /*route*/
      ctx2[19].title + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(74:12) <NavItem               icon={route.icon}               active={route.active}               bind:this={items[idx]}               on:click={() => {                 if (bookADemo) pickADate()                  if (ctx.demo && !bestMatch && !bookADemo) showAd()                 else if (implemented && !bookADemo) router.push(route.path)                  close()               }}               on:click={() => analytics.main_left_section_clicked({ section_name: route.title })}               qa={`tint-navbar-item-${route.path.slice(1)}`}             >",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let popup;
  let current;
  popup = new Popup({
    props: {
      anchor: (
        /*items*/
        ctx[1][
          /*idx*/
          ctx[24]
        ]
      ),
      placement: "bottom-start",
      offset: [2, 0],
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(popup.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(popup, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const popup_changes = {};
      if (dirty & /*items*/
      2)
        popup_changes.anchor = /*items*/
        ctx2[1][
          /*idx*/
          ctx2[24]
        ];
      if (dirty & /*$$scope*/
      32768) {
        popup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      popup.$set(popup_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(popup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(popup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(popup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(91:12) {#if route.unimplemented && !ctx.demo}",
    ctx
  });
  return block;
}
function create_default_slot_4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Coming soon");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_4.name,
    type: "slot",
    source: '(92:14) <Popup anchor={items[idx]} placement=\\"bottom-start\\" offset={[2, 0]}>',
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let popup;
  let current;
  popup = new Popup({
    props: {
      anchor: (
        /*items*/
        ctx[1][
          /*idx*/
          ctx[24]
        ]
      ),
      placement: "bottom-start",
      offset: [2, 0],
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(popup.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(popup, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const popup_changes = {};
      if (dirty & /*items*/
      2)
        popup_changes.anchor = /*items*/
        ctx2[1][
          /*idx*/
          ctx2[24]
        ];
      if (dirty & /*$$scope*/
      32768) {
        popup_changes.$$scope = { dirty, ctx: ctx2 };
      }
      popup.$set(popup_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(popup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(popup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(popup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(95:12) {#if ctx.demo && !bestMatch && !bookADemo}",
    ctx
  });
  return block;
}
function create_default_slot_3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Book a demo");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_3.name,
    type: "slot",
    source: '(96:14) <Popup anchor={items[idx]} placement=\\"bottom-start\\" offset={[2, 0]}>',
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let li;
  let navitem;
  let idx = (
    /*idx*/
    ctx[24]
  );
  let t0;
  let t1;
  let current;
  const assign_navitem = () => (
    /*navitem_binding*/
    ctx[10](navitem, idx)
  );
  const unassign_navitem = () => (
    /*navitem_binding*/
    ctx[10](null, idx)
  );
  function click_handler() {
    return (
      /*click_handler*/
      ctx[11](
        /*bookADemo*/
        ctx[22],
        /*bestMatch*/
        ctx[21],
        /*implemented*/
        ctx[20],
        /*route*/
        ctx[19],
        /*close*/
        ctx[18]
      )
    );
  }
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[12](
        /*route*/
        ctx[19]
      )
    );
  }
  let navitem_props = {
    icon: (
      /*route*/
      ctx[19].icon
    ),
    active: (
      /*route*/
      ctx[19].active
    ),
    qa: `tint-navbar-item-${/*route*/
    ctx[19].path.slice(1)}`,
    $$slots: { default: [create_default_slot_5] },
    $$scope: { ctx }
  };
  navitem = new NavItem({ props: navitem_props, $$inline: true });
  assign_navitem();
  navitem.$on("click", click_handler);
  navitem.$on("click", click_handler_1);
  let if_block0 = (
    /*route*/
    ctx[19].unimplemented && !/*ctx*/
    ctx[7].demo && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*ctx*/
    ctx[7].demo && !/*bestMatch*/
    ctx[21] && !/*bookADemo*/
    ctx[22] && create_if_block_3(ctx)
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(navitem.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr_dev(li, "class", "svelte-m77zhr");
      toggle_class(
        li,
        "bookADemo",
        /*bookADemo*/
        ctx[22]
      );
      add_location(li, file$2, 72, 10, 2191);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(navitem, li, null);
      append_dev(li, t0);
      if (if_block0)
        if_block0.m(li, null);
      append_dev(li, t1);
      if (if_block1)
        if_block1.m(li, null);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (idx !== /*idx*/
      ctx[24]) {
        unassign_navitem();
        idx = /*idx*/
        ctx[24];
        assign_navitem();
      }
      const navitem_changes = {};
      if (dirty & /*routes*/
      1)
        navitem_changes.icon = /*route*/
        ctx[19].icon;
      if (dirty & /*routes*/
      1)
        navitem_changes.active = /*route*/
        ctx[19].active;
      if (dirty & /*routes*/
      1)
        navitem_changes.qa = `tint-navbar-item-${/*route*/
        ctx[19].path.slice(1)}`;
      if (dirty & /*$$scope, routes*/
      32769) {
        navitem_changes.$$scope = { dirty, ctx };
      }
      navitem.$set(navitem_changes);
      if (
        /*route*/
        ctx[19].unimplemented && !/*ctx*/
        ctx[7].demo
      ) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
          if (dirty & /*routes*/
          1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(li, t1);
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
        ctx[7].demo && !/*bestMatch*/
        ctx[21] && !/*bookADemo*/
        ctx[22]
      ) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          if (dirty & /*routes*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(li, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (!current || dirty & /*routes, Paths*/
      1) {
        toggle_class(
          li,
          "bookADemo",
          /*bookADemo*/
          ctx[22]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(navitem.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(navitem.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      unassign_navitem();
      destroy_component(navitem);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(69:8) {#each routes as route, idx}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let t;
  let li;
  let navitem;
  let current;
  let if_block = (
    /*$cart*/
    ctx[5].length && create_if_block_2(ctx)
  );
  function click_handler_3() {
    return (
      /*click_handler_3*/
      ctx[14](
        /*close*/
        ctx[18]
      )
    );
  }
  navitem = new NavItem({
    props: {
      as: "button",
      icon: "close-circle",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  navitem.$on("click", click_handler_3);
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      t = space();
      li = element("li");
      create_component(navitem.$$.fragment);
      attr_dev(li, "class", "close svelte-m77zhr");
      add_location(li, file$2, 108, 10, 3503);
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, li, anchor);
      mount_component(navitem, li, null);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*$cart*/
        ctx[5].length
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & /*$cart*/
          32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx);
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
      const navitem_changes = {};
      if (dirty & /*$$scope, $language*/
      32772) {
        navitem_changes.$$scope = { dirty, ctx };
      }
      navitem.$set(navitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(navitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(navitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(t);
      if (detaching)
        detach_dev(li);
      destroy_component(navitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(101:8) {#if isMobileDevice()}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let li;
  let navitem;
  let current;
  navitem = new NavItem({
    props: {
      as: "button",
      icon: "bag",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  navitem.$on(
    "click",
    /*click_handler_2*/
    ctx[13]
  );
  const block = {
    c: function create() {
      li = element("li");
      create_component(navitem.$$.fragment);
      attr_dev(li, "class", "cart svelte-m77zhr");
      add_location(li, file$2, 102, 12, 3303);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      mount_component(navitem, li, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const navitem_changes = {};
      if (dirty & /*$$scope, $language*/
      32772) {
        navitem_changes.$$scope = { dirty, ctx: ctx2 };
      }
      navitem.$set(navitem_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(navitem.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(navitem.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
      destroy_component(navitem);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(102:10) {#if $cart.length}",
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t_value = (
    /*$language*/
    ctx[2].cart + ""
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
      4 && t_value !== (t_value = /*$language*/
      ctx2[2].cart + ""))
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
    source: '(104:14) <NavItem as=\\"button\\" icon=\\"bag\\" on:click={() => cart.redirect()}                 >',
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let t_value = (
    /*$language*/
    ctx[2].closeApp + ""
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
      4 && t_value !== (t_value = /*$language*/
      ctx2[2].closeApp + ""))
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
    source: '(110:12) <NavItem as=\\"button\\" icon=\\"close-circle\\" on:click={() => (ctx.close(), close())}>',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let ul;
  let t;
  let show_if = isMobileDevice();
  let current;
  let each_value = (
    /*routes*/
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
  let if_block = show_if && create_if_block_1$1(ctx);
  const block = {
    c: function create() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      if (if_block)
        if_block.c();
      attr_dev(ul, "class", "svelte-m77zhr");
      add_location(ul, file$2, 67, 6, 1961);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      append_dev(ul, t);
      if (if_block)
        if_block.m(ul, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*routes, Paths, items, ctx, pickADate, showAd, router, close, analytics*/
      262339) {
        each_value = /*routes*/
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
            each_blocks[i].m(ul, t);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (show_if)
        if_block.p(ctx2, dirty);
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean_1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(ul);
      destroy_each(each_blocks, detaching);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(66:4) <Navbar let:close class={$completed || !$loading ? \\"\\" : \\"pointer-events-none\\"}>',
    ctx
  });
  return block;
}
function create_logo_slot(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: { slot: "logo", variant: "logo" },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: noop,
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
    id: create_logo_slot.name,
    type: "slot",
    source: "(67:6) ",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div;
  let t;
  let current;
  let if_block = !/*ctx*/
  ctx[7].recommendationSystemVersion && create_if_block$1(ctx);
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
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
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", "svelte-m77zhr");
      add_location(div, file$2, 63, 0, 1782);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (!/*ctx*/
      ctx2[7].recommendationSystemVersion)
        if_block.p(ctx2, dirty);
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
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let $router;
  let $language;
  let $completed;
  let $loading;
  let $cart;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(2, $language = $$value));
  validate_store(completed, "completed");
  component_subscribe($$self, completed, ($$value) => $$invalidate(3, $completed = $$value));
  validate_store(loading, "loading");
  component_subscribe($$self, loading, ($$value) => $$invalidate(4, $loading = $$value));
  validate_store(cart, "cart");
  component_subscribe($$self, cart, ($$value) => $$invalidate(5, $cart = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Layout", slots, ["default"]);
  const router = useRouter();
  validate_store(router, "router");
  component_subscribe($$self, router, (value) => $$invalidate(8, $router = value));
  const ctx = getContext();
  const dispatch = createEventDispatcher();
  const items = {};
  const RouteSettingByPath = {
    [Paths.BestMatch]: {
      title: $language.bestMatch,
      icon: "best-match"
    },
    [Paths.MakeupTransfer]: {
      title: "Makeup transfer",
      icon: "makeup-transfer"
    },
    [Paths.GiftSelection]: {
      title: $language.giftSelection,
      icon: "gift-selection"
    },
    [Paths.BeautyAdvisor]: { title: "Beauty advisor", icon: "advisor" },
    [Paths.BookADemo]: {
      title: "Book a demo",
      icon: "book-a-demo"
    },
    [Paths.SkinCare]: { title: "Skin care", icon: "skin-care" }
  };
  let routes = ctx.routes.map((route) => {
    const setting = RouteSettingByPath[route.path];
    return setting ? {
      unimplemented: true,
      ...route,
      ...setting,
      active: false
    } : null;
  }).filter(Boolean);
  const writable_props = [];
  Object.keys($$props).forEach((key2) => {
    if (!~writable_props.indexOf(key2) && key2.slice(0, 2) !== "$$" && key2 !== "slot")
      console.warn(`<Layout> was created with unknown prop '${key2}'`);
  });
  function navitem_binding($$value, idx) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      items[idx] = $$value;
      $$invalidate(1, items);
    });
  }
  const click_handler = (bookADemo, bestMatch, implemented, route, close) => {
    if (bookADemo)
      pickADate();
    if (ctx.demo && !bestMatch && !bookADemo)
      showAd();
    else if (implemented && !bookADemo)
      router.push(route.path);
    close();
  };
  const click_handler_1 = (route) => analytics.main_left_section_clicked({ section_name: route.title });
  const click_handler_2 = () => cart.redirect();
  const click_handler_3 = (close) => (ctx.close(), close());
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(15, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    Paths,
    loading,
    isMobileDevice,
    cart,
    pickADate,
    showAd,
    completed,
    createEventDispatcher,
    analytics,
    Icon,
    NavItem,
    Navbar,
    Popup,
    useRouter,
    language,
    getContext,
    router,
    ctx,
    dispatch,
    items,
    RouteSettingByPath,
    routes,
    $router,
    $language,
    $completed,
    $loading,
    $cart
  });
  $$self.$inject_state = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(0, routes = $$props2.routes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*routes, $router*/
    257) {
      $$invalidate(0, routes = routes.map((route) => ({
        ...route,
        active: router.match($router.location, route.path)
      })));
    }
  };
  return [
    routes,
    items,
    $language,
    $completed,
    $loading,
    $cart,
    router,
    ctx,
    $router,
    slots,
    navitem_binding,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    $$scope
  ];
}
class Layout extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, add_css$2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Layout",
      options,
      id: create_fragment$2.name
    });
  }
}
const key = Symbol("open");
const setOpen = (value) => setContext(key, value);
const getOpen = () => getContext$1(key);
const file$1 = "src/lib/elements/Navbar/Navbar.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-177bat9", `div.svelte-177bat9.svelte-177bat9{position:relative;z-index:50;height:100%;transform:translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:0px
}@media(min-width: 1024px){div.svelte-177bat9.svelte-177bat9{width:64px
    }}div.svelte-177bat9.svelte-177bat9::before{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-content:'';content:var(--tw-content)
}@media(min-width: 1024px){div.svelte-177bat9.svelte-177bat9::before{--tw-content:none;content:var(--tw-content)
    }}div.open.svelte-177bat9.svelte-177bat9::before{position:absolute;left:0px;top:0px;height:100%;width:100vw;background-color:rgb(0 0 0 / 0.3)
}nav.svelte-177bat9.svelte-177bat9{display:flex;flex-direction:column
}nav.svelte-177bat9>*{flex-shrink:0
}nav.svelte-177bat9:hover p.svelte-177bat9,nav.open.svelte-177bat9 p.svelte-177bat9{opacity:1
}.menu{position:absolute;top:12px;left:12px;z-index:40
}@media(min-width: 768px){.menu{left:16px
    }}@media(min-width: 1024px){.menu{display:none
    }}.menu.cart::before{position:absolute;top:0px;right:0px;display:block;height:12px;width:12px;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 45 85 / var(--tw-bg-opacity));--tw-content:"";content:var(--tw-content)
}div.svelte-177bat9>:last-child{position:relative;z-index:50;height:100%;width:280px;overflow:hidden;background-color:var(--tint-navbar-background);padding-left:12px;padding-right:12px;padding-top:16px;padding-bottom:16px;color:var(--tint-text-light);transition-property:width,transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:300ms
}@media(min-width: 1024px){div.svelte-177bat9>:last-child{width:100%
    }div.svelte-177bat9>:last-child:hover{width:280px
    }}div.svelte-177bat9>:last-child:not(.open){--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}@media(min-width: 1024px){div.svelte-177bat9>:last-child:not(.open){--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }}.logo.svelte-177bat9.svelte-177bat9{margin-bottom:8px;display:flex;height:60px;align-items:center;justify-content:flex-start
}p.svelte-177bat9.svelte-177bat9{white-space:nowrap;text-align:center;font-size:12px;line-height:16px;--tw-text-opacity:0.6;opacity:0
}p.svelte-177bat9>b.svelte-177bat9{--tw-text-opacity:1
}`);
}
const get_default_slot_changes = (dirty) => ({ close: dirty & /*open*/
2 });
const get_default_slot_context = (ctx) => ({ close: (
  /*func*/
  ctx[11]
) });
const get_logo_slot_changes = (dirty) => ({ close: dirty & /*open*/
2 });
const get_logo_slot_context = (ctx) => ({ close: (
  /*func*/
  ctx[11]
) });
function create_fragment$1(ctx) {
  let div;
  let iconbutton;
  let t0;
  let nav;
  let i;
  let t1;
  let t2;
  let p;
  let t3_value = (
    /*$language*/
    ctx[4].poweredBy + ""
  );
  let t3;
  let t4;
  let b;
  let p_intro;
  let p_outro;
  let nav_class_value;
  let current;
  let mounted;
  let dispose;
  iconbutton = new IconButton({
    props: {
      qa: "tint-menu",
      class: (
        /*menuClasses*/
        ctx[2]
      ),
      icon: "menu",
      variant: "overlay",
      size: "lg"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*click_handler*/
    ctx[10]
  );
  const logo_slot_template = (
    /*#slots*/
    ctx[9].logo
  );
  const logo_slot = create_slot(
    logo_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_logo_slot_context
  );
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(iconbutton.$$.fragment);
      t0 = space();
      nav = element("nav");
      i = element("i");
      if (logo_slot)
        logo_slot.c();
      t1 = space();
      if (default_slot)
        default_slot.c();
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      b = element("b");
      b.textContent = "Banuba";
      attr_dev(i, "class", "logo svelte-177bat9");
      add_location(i, file$1, 34, 4, 958);
      attr_dev(b, "class", "svelte-177bat9");
      add_location(b, file$1, 36, 69, 1110);
      attr_dev(p, "class", "tint-copyright svelte-177bat9");
      add_location(p, file$1, 36, 4, 1045);
      attr_dev(nav, "class", nav_class_value = null_to_empty(
        /*classes*/
        ctx[3]
      ) + " svelte-177bat9");
      toggle_class(
        nav,
        "open",
        /*open*/
        ctx[1]
      );
      toggle_class(
        nav,
        "hover",
        /*hover*/
        ctx[0]
      );
      add_location(nav, file$1, 25, 2, 739);
      attr_dev(div, "class", "svelte-177bat9");
      toggle_class(
        div,
        "open",
        /*open*/
        ctx[1]
      );
      add_location(div, file$1, 16, 0, 571);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(iconbutton, div, null);
      append_dev(div, t0);
      append_dev(div, nav);
      append_dev(nav, i);
      if (logo_slot) {
        logo_slot.m(i, null);
      }
      append_dev(nav, t1);
      if (default_slot) {
        default_slot.m(nav, null);
      }
      append_dev(nav, t2);
      append_dev(nav, p);
      append_dev(p, t3);
      append_dev(p, t4);
      append_dev(p, b);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(clickOutside.call(
            null,
            nav,
            /*root*/
            ctx[5]
          )),
          listen_dev(
            nav,
            "click_outside",
            /*click_outside_handler*/
            ctx[12],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            nav,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[13],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            nav,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[14],
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
      const iconbutton_changes = {};
      if (dirty & /*menuClasses*/
      4)
        iconbutton_changes.class = /*menuClasses*/
        ctx2[2];
      iconbutton.$set(iconbutton_changes);
      if (logo_slot) {
        if (logo_slot.p && (!current || dirty & /*$$scope, open*/
        258)) {
          update_slot_base(
            logo_slot,
            logo_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              logo_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_logo_slot_changes
            ),
            get_logo_slot_context
          );
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, open*/
        258)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if ((!current || dirty & /*$language*/
      16) && t3_value !== (t3_value = /*$language*/
      ctx2[4].poweredBy + ""))
        set_data_dev(t3, t3_value);
      if (!current || dirty & /*classes*/
      8 && nav_class_value !== (nav_class_value = null_to_empty(
        /*classes*/
        ctx2[3]
      ) + " svelte-177bat9")) {
        attr_dev(nav, "class", nav_class_value);
      }
      if (!current || dirty & /*classes, open*/
      10) {
        toggle_class(
          nav,
          "open",
          /*open*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*classes, hover*/
      9) {
        toggle_class(
          nav,
          "hover",
          /*hover*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*open*/
      2) {
        toggle_class(
          div,
          "open",
          /*open*/
          ctx2[1]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      transition_in(logo_slot, local);
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (!current)
          return;
        if (p_outro)
          p_outro.end(1);
        p_intro = create_in_transition(p, fade, {});
        p_intro.start();
      });
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      transition_out(logo_slot, local);
      transition_out(default_slot, local);
      if (p_intro)
        p_intro.invalidate();
      p_outro = create_out_transition(p, fade, {});
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(iconbutton);
      if (logo_slot)
        logo_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching && p_outro)
        p_outro.end();
      mounted = false;
      run_all(dispose);
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
  let menuClasses;
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $cart;
  let $ctx;
  let $language;
  validate_store(cart, "cart");
  component_subscribe($$self, cart, ($$value) => $$invalidate(7, $cart = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(4, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Navbar", slots, ["logo", "default"]);
  const root = getSvelteRoot();
  let hover = false;
  let open = false;
  const ctx = setOpen(writable(false));
  validate_store(ctx, "ctx");
  component_subscribe($$self, ctx, (value) => $$invalidate(15, $ctx = value));
  const click_handler = () => $$invalidate(1, open = true);
  const func = () => $$invalidate(1, open = false);
  const click_outside_handler = () => $$invalidate(1, open = false);
  const mouseenter_handler = () => $$invalidate(0, hover = true);
  const mouseleave_handler = () => $$invalidate(0, hover = false);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    writable,
    fade,
    language,
    cart,
    IconButton,
    clickOutside,
    cx,
    getSvelteRoot,
    setOpen,
    root,
    hover,
    open,
    ctx,
    menuClasses,
    classes,
    $cart,
    $ctx,
    $language
  });
  $$self.$inject_state = ($$new_props) => {
    if ("hover" in $$props)
      $$invalidate(0, hover = $$new_props.hover);
    if ("open" in $$props)
      $$invalidate(1, open = $$new_props.open);
    if ("menuClasses" in $$props)
      $$invalidate(2, menuClasses = $$new_props.menuClasses);
    if ("classes" in $$props)
      $$invalidate(3, classes = $$new_props.classes);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*open, hover*/
    3) {
      set_store_value(ctx, $ctx = open || hover, $ctx);
    }
    $$invalidate(3, classes = cx("tint-navbar", $$restProps.class));
    if ($$self.$$.dirty & /*$cart*/
    128) {
      $$invalidate(2, menuClasses = cx("menu", $cart.length > 0 && "cart"));
    }
  };
  return [
    hover,
    open,
    menuClasses,
    classes,
    $language,
    root,
    ctx,
    $cart,
    $$scope,
    slots,
    click_handler,
    func,
    click_outside_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class Navbar extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {}, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Navbar",
      options,
      id: create_fragment$1.name
    });
  }
}
const file = "src/lib/elements/Navbar/NavItem.svelte";
function add_css(target) {
  append_styles(target, "svelte-hsronf", ".tint-navbar-item.svelte-hsronf{display:flex;height:100%;width:100%;flex-basis:0px;align-items:center;white-space:nowrap;border-radius:8px;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-bg-opacity:0;padding:8px;font-size:14px;line-height:20px;font-weight:600;opacity:0.75;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.tint-navbar-item.svelte-hsronf:hover{--tw-bg-opacity:0.07;opacity:1\n}.tint-navbar-item.active.svelte-hsronf{--tw-bg-opacity:0.15;opacity:1\n}.tint-navbar-item.active.svelte-hsronf:hover,.tint-navbar-item.svelte-hsronf:active{--tw-bg-opacity:0.2;opacity:1\n}.tint-navbar-item.svelte-hsronf>*{flex-shrink:0\n}span.svelte-hsronf{margin-left:8px;display:inline;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms\n}span.hidden.svelte-hsronf{opacity:0;transition-delay:0s;transition-duration:300ms\n}");
}
function create_if_block_1(ctx) {
  let icon_1;
  let current;
  icon_1 = new Icon({
    props: { variant: (
      /*variant*/
      ctx[3]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon_1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & /*variant*/
      8)
        icon_1_changes.variant = /*variant*/
        ctx2[3];
      icon_1.$set(icon_1_changes);
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
    d: function destroy(detaching) {
      destroy_component(icon_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(23:20) ",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let icon_1;
  let current;
  icon_1 = new Icon({
    props: { src: (
      /*src*/
      ctx[4]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon_1.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(icon_1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & /*src*/
      16)
        icon_1_changes.src = /*src*/
        ctx2[4];
      icon_1.$set(icon_1_changes);
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
    d: function destroy(detaching) {
      destroy_component(icon_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(21:2) {#if src}",
    ctx
  });
  return block;
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let current_block_type_index;
  let if_block;
  let t;
  let span;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block, create_if_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*src*/
      ctx2[4]
    )
      return 0;
    if (
      /*variant*/
      ctx2[3]
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  const default_slot_template = (
    /*#slots*/
    ctx[11].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    null
  );
  let svelte_element_levels = [
    { class: "tint-navbar-item" },
    { role: "button" },
    /*$$restProps*/
    ctx[7],
    { "data-qa": (
      /*qa*/
      ctx[2]
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
      if (if_block)
        if_block.c();
      t = space();
      span = element("span");
      if (default_slot)
        default_slot.c();
      attr_dev(span, "class", "svelte-hsronf");
      toggle_class(span, "hidden", !/*open*/
      ctx[5]);
      add_location(span, file, 25, 2, 527);
      set_dynamic_element_data(
        /*as*/
        ctx[0]
      )(svelte_element, svelte_element_data);
      toggle_class(
        svelte_element,
        "active",
        /*active*/
        ctx[1]
      );
      toggle_class(svelte_element, "svelte-hsronf", true);
      add_location(svelte_element, file, 11, 0, 294);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svelte_element, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(svelte_element, null);
      }
      append_dev(svelte_element, t);
      append_dev(svelte_element, span);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen_dev(svelte_element, "click", prevent_default(
          /*click_handler*/
          ctx[12]
        ), false, true, false, false);
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
          if_block.m(svelte_element, t);
        } else {
          if_block = null;
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1024)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*open*/
      32) {
        toggle_class(span, "hidden", !/*open*/
        ctx2[5]);
      }
      set_dynamic_element_data(
        /*as*/
        ctx2[0]
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        { class: "tint-navbar-item" },
        { role: "button" },
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx2[7],
        (!current || dirty & /*qa*/
        4) && { "data-qa": (
          /*qa*/
          ctx2[2]
        ) }
      ]));
      toggle_class(
        svelte_element,
        "active",
        /*active*/
        ctx2[1]
      );
      toggle_class(svelte_element, "svelte-hsronf", true);
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
        detach_dev(svelte_element);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_dynamic_element.name,
    type: "child_dynamic_element",
    source: '(12:0) <svelte:element   this={as}   class=\\"tint-navbar-item\\"   class:active   role=\\"button\\"   on:click|preventDefault   {...$$restProps}   data-qa={qa} >',
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
  let open;
  let src;
  let variant;
  const omit_props_names = ["as", "active", "icon", "qa"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $ctx;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("NavItem", slots, ["default"]);
  let { as = "a" } = $$props;
  let { active = false } = $$props;
  let { icon = "" } = $$props;
  let { qa = void 0 } = $$props;
  const ctx = getOpen();
  validate_store(ctx, "ctx");
  component_subscribe($$self, ctx, (value) => $$invalidate(9, $ctx = value));
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("active" in $$new_props)
      $$invalidate(1, active = $$new_props.active);
    if ("icon" in $$new_props)
      $$invalidate(8, icon = $$new_props.icon);
    if ("qa" in $$new_props)
      $$invalidate(2, qa = $$new_props.qa);
    if ("$$scope" in $$new_props)
      $$invalidate(10, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    Icon,
    getOpen,
    as,
    active,
    icon,
    qa,
    ctx,
    variant,
    src,
    open,
    $ctx
  });
  $$self.$inject_state = ($$new_props) => {
    if ("as" in $$props)
      $$invalidate(0, as = $$new_props.as);
    if ("active" in $$props)
      $$invalidate(1, active = $$new_props.active);
    if ("icon" in $$props)
      $$invalidate(8, icon = $$new_props.icon);
    if ("qa" in $$props)
      $$invalidate(2, qa = $$new_props.qa);
    if ("variant" in $$props)
      $$invalidate(3, variant = $$new_props.variant);
    if ("src" in $$props)
      $$invalidate(4, src = $$new_props.src);
    if ("open" in $$props)
      $$invalidate(5, open = $$new_props.open);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$ctx*/
    512) {
      $$invalidate(5, open = $ctx);
    }
    if ($$self.$$.dirty & /*icon*/
    256) {
      $$invalidate(4, [src, variant] = /\.svg/.test(icon) ? [icon] : [, icon], src, ($$invalidate(3, variant), $$invalidate(8, icon)));
    }
  };
  return [
    as,
    active,
    qa,
    variant,
    src,
    open,
    ctx,
    $$restProps,
    icon,
    $ctx,
    $$scope,
    slots,
    click_handler
  ];
}
class NavItem extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { as: 0, active: 1, icon: 8, qa: 2 }, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "NavItem",
      options,
      id: create_fragment.name
    });
  }
  get as() {
    throw new Error("<NavItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set as(value) {
    throw new Error("<NavItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get active() {
    throw new Error("<NavItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set active(value) {
    throw new Error("<NavItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get icon() {
    throw new Error("<NavItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set icon(value) {
    throw new Error("<NavItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get qa() {
    throw new Error("<NavItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set qa(value) {
    throw new Error("<NavItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  Layout as default,
  aE as setContext
};

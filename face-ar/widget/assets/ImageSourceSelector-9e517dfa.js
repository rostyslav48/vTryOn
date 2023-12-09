import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, aY as InlineSVG, al as create_slot, af as cx, ad as assign, ac as compute_rest_props, g as validate_slots, ay as createEventDispatcher, ae as exclude_internal_props, j as element, n as create_component, m as space, o as attr_dev, q as add_location, ah as toggle_class, aS as set_attributes, r as insert_dev, w as append_dev, x as mount_component, y as listen_dev, z as prevent_default, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, ar as get_spread_update, C as transition_in, D as transition_out, E as detach_dev, F as destroy_component, G as run_all, am as bubble, aZ as svg_element, aa as noop, ab as validate_each_argument, v as validate_store, l as language, f as component_subscribe, h as analytics, a_ as requestCameraPermissions, az as isMobileDevice, I as construct_svelte_component_dev, k as text, A as set_data_dev, T as group_outros, U as check_outros, ai as destroy_each, aH as IconButton } from "./app.js";
import { B as Button } from "./Button-7f464a41.js";
const Frame$1 = "" + new URL("frame-edadad5a.svg", import.meta.url).href;
const file$8 = "src/lib/elements/Dropzone/Dropzone.svelte";
function add_css$4(target) {
  append_styles(target, "svelte-f5nw3a", 'form.svelte-f5nw3a.svelte-f5nw3a{position:relative;height:296px;width:100%;--tw-text-opacity:1;color:rgb(45 45 54 / var(--tw-text-opacity))}form.active.svelte-f5nw3a>div.svelte-f5nw3a{pointer-events:none;opacity:0}form.svelte-f5nw3a:hover rect{fill:#f3f3f3;stroke:#737376}label.svelte-f5nw3a.svelte-f5nw3a{position:relative;display:block;height:100%;width:100%;cursor:pointer;border-radius:8px;--tw-bg-opacity:1;background-color:rgb(248 248 248 / var(--tw-bg-opacity))}label.svelte-f5nw3a svg{height:100%;width:100%;border-radius:inherit}label.svelte-f5nw3a rect{position:absolute;top:0px;left:0px;height:100%;width:100%;fill:#f8f8f8;stroke:#dcdcdd;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}label.active.svelte-f5nw3a rect,label.svelte-f5nw3a:hover rect{fill:#f3f3f3;stroke:#737376}label.svelte-f5nw3a.svelte-f5nw3a::after{pointer-events:none;position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));text-align:center;font-size:16px;line-height:24px;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;content:"Drop file here to upload"}label.svelte-f5nw3a.svelte-f5nw3a:not(.active)::after{opacity:0;--tw-content:"";content:var(--tw-content)}label.svelte-f5nw3a.svelte-f5nw3a:not(.valid)::after{content:"Unsupported file type"}label.svelte-f5nw3a:not(.valid) rect{fill:#fcededf3;stroke:#e64f4f}div.svelte-f5nw3a.svelte-f5nw3a{position:absolute;top:50%;left:50%;--tw-translate-x:-50%;--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}');
}
function create_fragment$8(ctx) {
  let form;
  let label;
  let inlinesvg;
  let t0;
  let input;
  let t1;
  let div;
  let form_class_value;
  let current;
  let mounted;
  let dispose;
  inlinesvg = new InlineSVG({ props: { src: Frame$1 }, $$inline: true });
  inlinesvg.$on(
    "load",
    /*load_handler*/
    ctx[11]
  );
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
  let form_levels = [
    {
      class: form_class_value = cx(
        "dropzone-form",
        /*active*/
        ctx[1] && "active"
      )
    },
    /*$$restProps*/
    ctx[6]
  ];
  let form_data = {};
  for (let i = 0; i < form_levels.length; i += 1) {
    form_data = assign(form_data, form_levels[i]);
  }
  const block = {
    c: function create() {
      form = element("form");
      label = element("label");
      create_component(inlinesvg.$$.fragment);
      t0 = space();
      input = element("input");
      t1 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(input, "data-qa", "tint-dropzone-form-input");
      attr_dev(input, "type", "file");
      attr_dev(
        input,
        "accept",
        /*accept*/
        ctx[0]
      );
      input.hidden = true;
      add_location(input, file$8, 35, 4, 1335);
      attr_dev(label, "class", "tint-dropzone svelte-f5nw3a");
      toggle_class(
        label,
        "active",
        /*active*/
        ctx[1]
      );
      toggle_class(
        label,
        "valid",
        /*valid*/
        ctx[2]
      );
      add_location(label, file$8, 21, 2, 769);
      attr_dev(div, "class", "svelte-f5nw3a");
      add_location(div, file$8, 45, 2, 1600);
      set_attributes(form, form_data);
      toggle_class(form, "svelte-f5nw3a", true);
      add_location(form, file$8, 20, 0, 670);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, form, anchor);
      append_dev(form, label);
      mount_component(inlinesvg, label, null);
      append_dev(label, t0);
      append_dev(label, input);
      append_dev(form, t1);
      append_dev(form, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[12],
            false,
            false,
            false,
            false
          ),
          listen_dev(label, "dragenter", prevent_default(
            /*dragenter_handler*/
            ctx[13]
          ), false, true, false, false),
          listen_dev(label, "dragover", prevent_default(
            /*dragover_handler*/
            ctx[10]
          ), false, true, false, false),
          listen_dev(label, "dragleave", prevent_default(
            /*dragleave_handler*/
            ctx[14]
          ), false, true, false, false),
          listen_dev(label, "dragenter", prevent_default(
            /*dragenter_handler_1*/
            ctx[15]
          ), false, true, false, false),
          listen_dev(label, "drop", prevent_default(
            /*drop_handler*/
            ctx[16]
          ), false, true, false, false),
          listen_dev(label, "drop", prevent_default(
            /*drop_handler_1*/
            ctx[17]
          ), false, true, false, false),
          listen_dev(form, "submit", prevent_default(
            /*submit_handler*/
            ctx[9]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (!current || dirty & /*accept*/
      1) {
        attr_dev(
          input,
          "accept",
          /*accept*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*active*/
      2) {
        toggle_class(
          label,
          "active",
          /*active*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*valid*/
      4) {
        toggle_class(
          label,
          "valid",
          /*valid*/
          ctx2[2]
        );
      }
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
      set_attributes(form, form_data = get_spread_update(form_levels, [
        (!current || dirty & /*active*/
        2 && form_class_value !== (form_class_value = cx(
          "dropzone-form",
          /*active*/
          ctx2[1] && "active"
        ))) && { class: form_class_value },
        dirty & /*$$restProps*/
        64 && /*$$restProps*/
        ctx2[6]
      ]));
      toggle_class(form, "svelte-f5nw3a", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(inlinesvg.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(inlinesvg.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(form);
      destroy_component(inlinesvg);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
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
  let re;
  const omit_props_names = ["accept"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Dropzone", slots, ["default"]);
  let { accept = "*" } = $$props;
  let active = false;
  let valid = true;
  const dispatch = createEventDispatcher();
  const validate = (transfer) => Boolean(transfer && [...transfer.items].every((i) => re.test(i.type)));
  const setFrameBorderRadius = (svg) => {
    const r = getComputedStyle(svg).borderRadius.replace("px", "");
    if (!r)
      return;
    const rect = svg.querySelector("rect");
    rect.setAttribute("rx", r);
    rect.setAttribute("ry", r);
  };
  function submit_handler(event) {
    bubble.call(this, $$self, event);
  }
  function dragover_handler(event) {
    bubble.call(this, $$self, event);
  }
  const load_handler = ({ detail }) => setFrameBorderRadius(detail);
  const input_handler = ({ currentTarget }) => (
    // @ts-expect-error: Object is possibly 'null'.ts(2531)
    dispatch("input", currentTarget.files)
  );
  const dragenter_handler = () => $$invalidate(1, active = true);
  const dragleave_handler = () => $$invalidate(1, active = false);
  const dragenter_handler_1 = ({ dataTransfer }) => $$invalidate(2, valid = validate(dataTransfer));
  const drop_handler = () => $$invalidate(1, active = false);
  const drop_handler_1 = ({ dataTransfer }) => validate(dataTransfer) && dispatch("input", dataTransfer.files);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("accept" in $$new_props)
      $$invalidate(0, accept = $$new_props.accept);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    InlineSVG,
    cx,
    Frame: Frame$1,
    accept,
    active,
    valid,
    dispatch,
    validate,
    setFrameBorderRadius,
    re
  });
  $$self.$inject_state = ($$new_props) => {
    if ("accept" in $$props)
      $$invalidate(0, accept = $$new_props.accept);
    if ("active" in $$props)
      $$invalidate(1, active = $$new_props.active);
    if ("valid" in $$props)
      $$invalidate(2, valid = $$new_props.valid);
    if ("re" in $$props)
      re = $$new_props.re;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*accept*/
    1) {
      re = new RegExp(accept);
    }
    if ($$self.$$.dirty & /*active*/
    2) {
      !active && $$invalidate(2, valid = true);
    }
  };
  return [
    accept,
    active,
    valid,
    dispatch,
    validate,
    setFrameBorderRadius,
    $$restProps,
    $$scope,
    slots,
    submit_handler,
    dragover_handler,
    load_handler,
    input_handler,
    dragenter_handler,
    dragleave_handler,
    dragenter_handler_1,
    drop_handler,
    drop_handler_1
  ];
}
class Dropzone extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { accept: 0 }, add_css$4);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Dropzone",
      options,
      id: create_fragment$8.name
    });
  }
  get accept() {
    throw new Error("<Dropzone>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set accept(value) {
    throw new Error("<Dropzone>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$7 = "src/pages/image-source/ImageSourceSelector/img/face.svelte";
function create_fragment$7(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      attr_dev(path0, "fill-rule", "evenodd");
      attr_dev(path0, "clip-rule", "evenodd");
      attr_dev(path0, "d", "M15.3549 24.0459C15.7691 24.0459 16.1049 24.3817 16.1049 24.7959C16.1049 27.946 16.692 31.652 18.0715 34.5405C19.4485 37.4239 21.5284 39.3469 24.5 39.3469C27.4717 39.3469 29.5515 37.4239 30.9285 34.5405C32.3081 31.652 32.8952 27.946 32.8952 24.7959C32.8952 24.3817 33.231 24.0459 33.6452 24.0459C34.0594 24.0459 34.3952 24.3817 34.3952 24.7959C34.3952 28.092 33.7867 32.0366 32.2821 35.187C30.775 38.3426 28.2822 40.8469 24.5 40.8469C20.7178 40.8469 18.225 38.3426 16.718 35.187C15.2134 32.0366 14.6049 28.092 14.6049 24.7959C14.6049 24.3817 14.9406 24.0459 15.3549 24.0459Z");
      attr_dev(path0, "fill", "currentColor");
      add_location(path0, file$7, 1, 2, 98);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "clip-rule", "evenodd");
      attr_dev(path1, "d", "M24.5 12.105C17.4584 12.105 11.75 17.8134 11.75 24.855C11.75 28.9092 13.6378 31.6367 16.5842 33.2398C16.9481 33.4378 17.0826 33.8932 16.8846 34.2571C16.6866 34.6209 16.2312 34.7554 15.8674 34.5574C12.4544 32.7005 10.25 29.4768 10.25 24.855C10.25 16.9849 16.6299 10.605 24.5 10.605C32.3701 10.605 38.75 16.9849 38.75 24.855C38.75 29.4768 36.5456 32.7005 33.1326 34.5574C32.7688 34.7554 32.3134 34.6209 32.1154 34.2571C31.9174 33.8932 32.0519 33.4378 32.4158 33.2398C35.3622 31.6367 37.25 28.9092 37.25 24.855C37.25 17.8134 31.5416 12.105 24.5 12.105Z");
      attr_dev(path1, "fill", "currentColor");
      add_location(path1, file$7, 7, 2, 766);
      attr_dev(path2, "fill-rule", "evenodd");
      attr_dev(path2, "clip-rule", "evenodd");
      attr_dev(path2, "d", "M19.7277 9.21536C18.5602 10.1302 17.8468 11.4409 17.8468 13.0968C17.8468 13.511 17.511 13.8468 17.0968 13.8468C16.6826 13.8468 16.3468 13.511 16.3468 13.0968C16.3468 10.9569 17.2907 9.2193 18.8026 8.03464C20.2991 6.86202 22.3225 6.25 24.5 6.25C26.6775 6.25 28.7009 6.86202 30.1975 8.03464C31.7094 9.2193 32.6533 10.9569 32.6533 13.0968C32.6533 13.511 32.3175 13.8468 31.9033 13.8468C31.489 13.8468 31.1533 13.511 31.1533 13.0968C31.1533 11.4409 30.4398 10.1302 29.2723 9.21536C28.0894 8.28851 26.4112 7.75 24.5 7.75C22.5889 7.75 20.9106 8.28851 19.7277 9.21536Z");
      attr_dev(path2, "fill", "currentColor");
      add_location(path2, file$7, 13, 2, 1409);
      attr_dev(path3, "fill-rule", "evenodd");
      attr_dev(path3, "clip-rule", "evenodd");
      attr_dev(path3, "d", "M25.2045 17.1784C25.0792 17.0043 24.8851 16.8919 24.6717 16.8701C24.4582 16.8483 24.2456 16.919 24.0876 17.0643L24.0783 17.0729L24.0492 17.0996L23.9351 17.2036C23.8353 17.2943 23.6894 17.4264 23.5059 17.5908C23.1389 17.9196 22.6221 18.3773 22.0239 18.8921C20.8226 19.9258 19.311 21.1741 18.0273 22.0742C16.8052 22.9312 15.1372 23.5954 13.7333 24.0497C13.0391 24.2744 12.4245 24.443 11.9842 24.5553C11.7642 24.6113 11.5884 24.6532 11.4684 24.6809C11.4085 24.6947 11.3625 24.7049 11.3321 24.7116L11.2984 24.719L11.2905 24.7207L11.289 24.721C10.8837 24.8063 10.6242 25.204 10.7094 25.6093C10.7947 26.0147 11.1924 26.2741 11.5978 26.1889L11.4434 25.4549C11.5978 26.1889 11.5976 26.1889 11.5978 26.1889L11.6026 26.1878L11.6137 26.1855L11.6544 26.1766C11.6895 26.1689 11.7403 26.1575 11.8054 26.1425C11.9355 26.1125 12.1226 26.068 12.3548 26.0088C12.8187 25.8905 13.4645 25.7133 14.1951 25.4768C15.6409 25.009 17.4801 24.2899 18.8884 23.3024C20.2351 22.3582 21.7923 21.0703 23.0023 20.0291C23.6064 19.5092 24.1284 19.047 24.5008 18.7134C24.7879 19.0641 25.1896 19.5319 25.6894 20.0568C26.7547 21.1755 28.2856 22.5748 30.1216 23.6476C31.9528 24.7175 33.8344 25.3532 35.2501 25.7218C35.96 25.9066 36.5578 26.0255 36.9807 26.0986C37.1923 26.1351 37.3604 26.1603 37.4773 26.1764C37.5358 26.1845 37.5814 26.1904 37.6133 26.1943L37.6507 26.1987L37.6615 26.2L37.6648 26.2003L37.666 26.2005C37.6662 26.2005 37.6668 26.2006 37.7476 25.4549L37.666 26.2005C38.0778 26.2451 38.4486 25.9476 38.4933 25.5358C38.5379 25.1241 38.2404 24.7541 37.8288 24.7093L37.8229 24.7087L37.7962 24.7055C37.7716 24.7024 37.7335 24.6976 37.6828 24.6906C37.5814 24.6765 37.43 24.654 37.2361 24.6205C36.848 24.5534 36.2916 24.4429 35.628 24.2702C34.2967 23.9236 32.5545 23.3318 30.8784 22.3524C29.2072 21.3759 27.7859 20.0832 26.7757 19.0224C26.2727 18.4942 25.8765 18.0286 25.6074 17.6968C25.4729 17.531 25.3703 17.3989 25.3023 17.3094C25.2683 17.2647 25.2429 17.2307 25.2265 17.2085L25.2086 17.1842L25.2045 17.1784Z");
      attr_dev(path3, "fill", "currentColor");
      add_location(path3, file$7, 19, 2, 2064);
      attr_dev(svg, "width", "48");
      attr_dev(svg, "height", "48");
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$7, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
function instance$7($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Face", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Face> was created with unknown prop '${key}'`);
  });
  return [];
}
class Face extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Face",
      options,
      id: create_fragment$7.name
    });
  }
}
const file$6 = "src/pages/image-source/ImageSourceSelector/img/frame.svelte";
function create_fragment$6(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let path4;
  let path5;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      attr_dev(path0, "fill-rule", "evenodd");
      attr_dev(path0, "clip-rule", "evenodd");
      attr_dev(path0, "d", "M23.9998 14.75C20.0098 14.75 16.75 18.0938 16.75 22.3077C16.75 24.5399 17.569 26.8001 18.9068 28.4931C20.2418 30.1827 22.0384 31.2459 23.9887 31.25C25.849 31.1905 27.6674 30.0614 29.0437 28.3323C30.4191 26.6043 31.2684 24.3765 31.2497 22.3145L31.2496 22.3077H31.2497C31.2497 18.1338 27.9874 14.75 23.9998 14.75ZM15.25 22.3077C15.25 17.3192 19.1285 13.25 23.9998 13.25C28.8725 13.25 32.7479 17.3625 32.7497 22.3042C32.771 24.7571 31.7744 27.3102 30.2173 29.2665C28.663 31.2192 26.4655 32.6772 24.0221 32.7497C24.0191 32.7498 24.0162 32.7498 24.0132 32.7499C24.0088 32.75 24.0043 32.75 23.9998 32.75C21.4701 32.75 19.2711 31.3735 17.7298 29.423C16.1887 27.4726 15.25 24.8867 15.25 22.3077Z");
      attr_dev(path0, "fill", "currentColor");
      add_location(path0, file$6, 1, 2, 98);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "clip-rule", "evenodd");
      attr_dev(path1, "d", "M16.1715 34.4213C15.8015 34.7129 15.75 34.9141 15.75 35C15.75 35.4142 15.4142 35.75 15 35.75C14.5858 35.75 14.25 35.4142 14.25 35C14.25 34.2575 14.7021 33.6695 15.243 33.2432C15.7924 32.8103 16.5409 32.4532 17.3989 32.1672C19.1227 31.5925 21.4565 31.25 24 31.25C26.5435 31.25 28.8773 31.5925 30.6011 32.1672C31.4591 32.4532 32.2076 32.8103 32.757 33.2432C33.2979 33.6695 33.75 34.2575 33.75 35C33.75 35.4142 33.4142 35.75 33 35.75C32.5858 35.75 32.25 35.4142 32.25 35C32.25 34.9141 32.1985 34.7129 31.8285 34.4213C31.467 34.1364 30.8975 33.8471 30.1268 33.5902C28.5933 33.079 26.4271 32.75 24 32.75C21.5729 32.75 19.4067 33.079 17.8732 33.5902C17.1025 33.8471 16.533 34.1364 16.1715 34.4213Z");
      attr_dev(path1, "fill", "currentColor");
      add_location(path1, file$6, 7, 2, 879);
      attr_dev(path2, "fill-rule", "evenodd");
      attr_dev(path2, "clip-rule", "evenodd");
      attr_dev(path2, "d", "M18.5278 7.99821C18.5288 8.41242 18.1938 8.74901 17.7796 8.75L16.6373 8.75273C13.9031 8.78494 12.9458 9.10084 11.9916 9.61117C10.9634 10.161 10.161 10.9634 9.61117 11.9916C9.07331 12.9973 8.75 14.007 8.75 17.116V17.7778C8.75 18.192 8.41421 18.5278 8 18.5278C7.58579 18.5278 7.25 18.192 7.25 17.7778V17.116C7.25 13.8854 7.58678 12.5962 8.28845 11.2842C8.9781 9.99463 9.99463 8.9781 11.2842 8.28845C12.5253 7.62471 13.7465 7.28641 16.6233 7.25279L16.6302 7.25271V7.25274L17.776 7.25C18.1902 7.24901 18.5268 7.584 18.5278 7.99821Z");
      attr_dev(path2, "fill", "currentColor");
      add_location(path2, file$6, 13, 2, 1664);
      attr_dev(path3, "fill-rule", "evenodd");
      attr_dev(path3, "clip-rule", "evenodd");
      attr_dev(path3, "d", "M29.4722 7.99821C29.4712 8.41242 29.8062 8.74901 30.2204 8.75L31.3627 8.75273C34.0969 8.78494 35.0542 9.10084 36.0084 9.61117C37.0366 10.161 37.839 10.9634 38.3888 11.9916C38.9267 12.9973 39.25 14.007 39.25 17.116V17.7778C39.25 18.192 39.5858 18.5278 40 18.5278C40.4142 18.5278 40.75 18.192 40.75 17.7778V17.116C40.75 13.8854 40.4132 12.5962 39.7116 11.2842C39.0219 9.99463 38.0054 8.9781 36.7158 8.28845C35.4747 7.62471 34.2535 7.28641 31.3767 7.25279L31.3698 7.25271V7.25274L30.224 7.25C29.8098 7.24901 29.4732 7.584 29.4722 7.99821Z");
      attr_dev(path3, "fill", "currentColor");
      add_location(path3, file$6, 19, 2, 2285);
      attr_dev(path4, "fill-rule", "evenodd");
      attr_dev(path4, "clip-rule", "evenodd");
      attr_dev(path4, "d", "M18.5278 40.0018C18.5288 39.5876 18.1938 39.251 17.7796 39.25L16.6373 39.2473C13.9031 39.2151 12.9458 38.8992 11.9916 38.3888C10.9634 37.839 10.161 37.0366 9.61117 36.0084C9.07331 35.0027 8.75 33.993 8.75 30.884V30.2222C8.75 29.808 8.41421 29.4722 8 29.4722C7.58579 29.4722 7.25 29.808 7.25 30.2222V30.884C7.25 34.1146 7.58678 35.4038 8.28845 36.7158C8.9781 38.0054 9.99463 39.0219 11.2842 39.7116C12.5253 40.3753 13.7465 40.7136 16.6233 40.7472L16.6302 40.7473V40.7473L17.776 40.75C18.1902 40.751 18.5268 40.416 18.5278 40.0018Z");
      attr_dev(path4, "fill", "currentColor");
      add_location(path4, file$6, 25, 2, 2914);
      attr_dev(path5, "fill-rule", "evenodd");
      attr_dev(path5, "clip-rule", "evenodd");
      attr_dev(path5, "d", "M29.4722 40.0018C29.4712 39.5876 29.8062 39.251 30.2204 39.25L31.3627 39.2473C34.0969 39.2151 35.0542 38.8992 36.0084 38.3888C37.0366 37.839 37.839 37.0366 38.3888 36.0084C38.9267 35.0027 39.25 33.993 39.25 30.884V30.2222C39.25 29.808 39.5858 29.4722 40 29.4722C40.4142 29.4722 40.75 29.808 40.75 30.2222V30.884C40.75 34.1146 40.4132 35.4038 39.7116 36.7158C39.0219 38.0054 38.0054 39.0219 36.7158 39.7116C35.4747 40.3753 34.2535 40.7136 31.3767 40.7472L31.3698 40.7473V40.7473L30.224 40.75C29.8098 40.751 29.4732 40.416 29.4722 40.0018Z");
      attr_dev(path5, "fill", "currentColor");
      add_location(path5, file$6, 31, 2, 3537);
      attr_dev(svg, "width", "48");
      attr_dev(svg, "height", "48");
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$6, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
      append_dev(svg, path4);
      append_dev(svg, path5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
function instance$6($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Frame", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Frame> was created with unknown prop '${key}'`);
  });
  return [];
}
class Frame extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Frame",
      options,
      id: create_fragment$6.name
    });
  }
}
const file$5 = "src/pages/image-source/ImageSourceSelector/img/light.svelte";
function create_fragment$5(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let path4;
  let path5;
  let path6;
  let path7;
  let path8;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      path6 = svg_element("path");
      path7 = svg_element("path");
      path8 = svg_element("path");
      attr_dev(path0, "fill-rule", "evenodd");
      attr_dev(path0, "clip-rule", "evenodd");
      attr_dev(path0, "d", "M24 33.5C29.2467 33.5 33.5 29.2467 33.5 24C33.5 18.7533 29.2467 14.5 24 14.5C18.7533 14.5 14.5 18.7533 14.5 24C14.5 29.2467 18.7533 33.5 24 33.5ZM24 35C30.0751 35 35 30.0751 35 24C35 17.9249 30.0751 13 24 13C17.9249 13 13 17.9249 13 24C13 30.0751 17.9249 35 24 35Z");
      attr_dev(path0, "fill", "currentColor");
      add_location(path0, file$5, 1, 2, 98);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "clip-rule", "evenodd");
      attr_dev(path1, "d", "M37.9654 37.9653C37.6725 38.2582 37.1976 38.2582 36.9047 37.9653L32.6621 33.7226C32.3692 33.4297 32.3692 32.9549 32.6621 32.662C32.955 32.3691 33.4299 32.3691 33.7227 32.662L37.9654 36.9046C38.2583 37.1975 38.2583 37.6724 37.9654 37.9653Z");
      attr_dev(path1, "fill", "currentColor");
      add_location(path1, file$5, 7, 2, 456);
      attr_dev(path2, "fill-rule", "evenodd");
      attr_dev(path2, "clip-rule", "evenodd");
      attr_dev(path2, "d", "M15.3379 15.3378C15.0451 15.6307 14.5702 15.6307 14.2773 15.3378L10.0346 11.0952C9.74175 10.8023 9.74175 10.3274 10.0346 10.0345C10.3275 9.74164 10.8024 9.74164 11.0953 10.0345L15.3379 14.2772C15.6308 14.5701 15.6308 15.0449 15.3379 15.3378Z");
      attr_dev(path2, "fill", "currentColor");
      add_location(path2, file$5, 13, 2, 788);
      attr_dev(path3, "fill-rule", "evenodd");
      attr_dev(path3, "clip-rule", "evenodd");
      attr_dev(path3, "d", "M37.9654 10.0346C38.2583 10.3275 38.2583 10.8024 37.9654 11.0953L33.7228 15.3379C33.4299 15.6308 32.955 15.6308 32.6621 15.3379C32.3692 15.045 32.3692 14.5701 32.6621 14.2773L36.9047 10.0346C37.1976 9.74172 37.6725 9.74172 37.9654 10.0346Z");
      attr_dev(path3, "fill", "currentColor");
      add_location(path3, file$5, 19, 2, 1123);
      attr_dev(path4, "fill-rule", "evenodd");
      attr_dev(path4, "clip-rule", "evenodd");
      attr_dev(path4, "d", "M15.338 32.6621C15.6308 32.9549 15.6308 33.4298 15.338 33.7227L11.0953 37.9654C10.8024 38.2582 10.3275 38.2582 10.0347 37.9654C9.74176 37.6725 9.74176 37.1976 10.0347 36.9047L14.2773 32.6621C14.5702 32.3692 15.0451 32.3692 15.338 32.6621Z");
      attr_dev(path4, "fill", "currentColor");
      add_location(path4, file$5, 25, 2, 1456);
      attr_dev(path5, "fill-rule", "evenodd");
      attr_dev(path5, "clip-rule", "evenodd");
      attr_dev(path5, "d", "M43.75 24C43.75 24.4142 43.4142 24.75 43 24.75L37 24.75C36.5858 24.75 36.25 24.4142 36.25 24C36.25 23.5858 36.5858 23.25 37 23.25L43 23.25C43.4142 23.25 43.75 23.5858 43.75 24Z");
      attr_dev(path5, "fill", "currentColor");
      add_location(path5, file$5, 31, 2, 1788);
      attr_dev(path6, "fill-rule", "evenodd");
      attr_dev(path6, "clip-rule", "evenodd");
      attr_dev(path6, "d", "M11.75 24C11.75 24.4142 11.4142 24.75 11 24.75L5 24.75C4.58579 24.75 4.25 24.4142 4.25 24C4.25 23.5858 4.58579 23.25 5 23.25L11 23.25C11.4142 23.25 11.75 23.5858 11.75 24Z");
      attr_dev(path6, "fill", "currentColor");
      add_location(path6, file$5, 37, 2, 2058);
      attr_dev(path7, "fill-rule", "evenodd");
      attr_dev(path7, "clip-rule", "evenodd");
      attr_dev(path7, "d", "M24 4.25C24.4142 4.25 24.75 4.58579 24.75 5V11C24.75 11.4142 24.4142 11.75 24 11.75C23.5858 11.75 23.25 11.4142 23.25 11V5C23.25 4.58579 23.5858 4.25 24 4.25Z");
      attr_dev(path7, "fill", "currentColor");
      add_location(path7, file$5, 43, 2, 2323);
      attr_dev(path8, "fill-rule", "evenodd");
      attr_dev(path8, "clip-rule", "evenodd");
      attr_dev(path8, "d", "M24 36.25C24.4142 36.25 24.75 36.5858 24.75 37V43C24.75 43.4142 24.4142 43.75 24 43.75C23.5858 43.75 23.25 43.4142 23.25 43V37C23.25 36.5858 23.5858 36.25 24 36.25Z");
      attr_dev(path8, "fill", "currentColor");
      add_location(path8, file$5, 49, 2, 2575);
      attr_dev(svg, "width", "48");
      attr_dev(svg, "height", "48");
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$5, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
      append_dev(svg, path4);
      append_dev(svg, path5);
      append_dev(svg, path6);
      append_dev(svg, path7);
      append_dev(svg, path8);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
function instance$5($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Light", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Light> was created with unknown prop '${key}'`);
  });
  return [];
}
class Light extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Light",
      options,
      id: create_fragment$5.name
    });
  }
}
const file$4 = "src/pages/image-source/ImageSourceSelector/img/look.svelte";
function create_fragment$4(ctx) {
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let path4;
  let path5;
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      attr_dev(path0, "fill-rule", "evenodd");
      attr_dev(path0, "clip-rule", "evenodd");
      attr_dev(path0, "d", "M24 21.75C22.7573 21.75 21.75 22.7573 21.75 24C21.75 25.2427 22.7573 26.25 24 26.25C25.2426 26.25 26.25 25.2427 26.25 24C26.25 22.7573 25.2426 21.75 24 21.75ZM20.25 24C20.25 21.9289 21.9289 20.25 24 20.25C26.071 20.25 27.75 21.9289 27.75 24C27.75 26.0711 26.071 27.75 24 27.75C21.9289 27.75 20.25 26.0711 20.25 24Z");
      attr_dev(path0, "fill", "currentColor");
      add_location(path0, file$4, 1, 2, 98);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "clip-rule", "evenodd");
      attr_dev(path1, "d", "M14.7932 24C16.0984 27.6199 19.7136 30.25 24 30.25C28.2864 30.25 31.9015 27.6199 33.2067 24C31.9015 20.3801 28.2864 17.75 24 17.75C19.7136 17.75 16.0984 20.3801 14.7932 24ZM13.2876 23.7655C14.7273 19.3915 18.9935 16.25 24 16.25C29.0065 16.25 33.2727 19.3916 34.7124 23.7655C34.7625 23.9178 34.7625 24.0822 34.7124 24.2345C33.2727 28.6085 29.0064 31.75 24 31.75C18.9935 31.75 14.7273 28.6085 13.2876 24.2345C13.2375 24.0822 13.2375 23.9178 13.2876 23.7655Z");
      attr_dev(path1, "fill", "currentColor");
      add_location(path1, file$4, 7, 2, 506);
      attr_dev(path2, "fill-rule", "evenodd");
      attr_dev(path2, "clip-rule", "evenodd");
      attr_dev(path2, "d", "M18.5278 7.99821C18.5288 8.41242 18.1938 8.74901 17.7796 8.75L16.6373 8.75273C13.9031 8.78494 12.9458 9.10084 11.9916 9.61117C10.9634 10.161 10.161 10.9634 9.61117 11.9916C9.07331 12.9973 8.75 14.007 8.75 17.116V17.7778C8.75 18.192 8.41421 18.5278 8 18.5278C7.58579 18.5278 7.25 18.192 7.25 17.7778V17.116C7.25 13.8854 7.58678 12.5962 8.28845 11.2842C8.9781 9.99463 9.99463 8.9781 11.2842 8.28845C12.5253 7.62471 13.7465 7.28641 16.6233 7.25279L16.6302 7.25271V7.25274L17.776 7.25C18.1902 7.24901 18.5268 7.584 18.5278 7.99821Z");
      attr_dev(path2, "fill", "currentColor");
      add_location(path2, file$4, 13, 2, 1055);
      attr_dev(path3, "fill-rule", "evenodd");
      attr_dev(path3, "clip-rule", "evenodd");
      attr_dev(path3, "d", "M29.4722 7.99821C29.4712 8.41242 29.8062 8.74901 30.2204 8.75L31.3627 8.75273C34.0969 8.78494 35.0542 9.10084 36.0084 9.61117C37.0366 10.161 37.839 10.9634 38.3888 11.9916C38.9267 12.9973 39.25 14.007 39.25 17.116V17.7778C39.25 18.192 39.5858 18.5278 40 18.5278C40.4142 18.5278 40.75 18.192 40.75 17.7778V17.116C40.75 13.8854 40.4132 12.5962 39.7116 11.2842C39.0219 9.99463 38.0054 8.9781 36.7158 8.28845C35.4747 7.62471 34.2535 7.28641 31.3767 7.25279L31.3698 7.25271V7.25274L30.224 7.25C29.8098 7.24901 29.4732 7.584 29.4722 7.99821Z");
      attr_dev(path3, "fill", "currentColor");
      add_location(path3, file$4, 19, 2, 1676);
      attr_dev(path4, "fill-rule", "evenodd");
      attr_dev(path4, "clip-rule", "evenodd");
      attr_dev(path4, "d", "M18.5278 40.0018C18.5288 39.5876 18.1938 39.251 17.7796 39.25L16.6373 39.2473C13.9031 39.2151 12.9458 38.8992 11.9916 38.3888C10.9634 37.839 10.161 37.0366 9.61117 36.0084C9.07331 35.0027 8.75 33.993 8.75 30.884V30.2222C8.75 29.808 8.41421 29.4722 8 29.4722C7.58579 29.4722 7.25 29.808 7.25 30.2222V30.884C7.25 34.1146 7.58678 35.4038 8.28845 36.7158C8.9781 38.0054 9.99463 39.0219 11.2842 39.7116C12.5253 40.3753 13.7465 40.7136 16.6233 40.7472L16.6302 40.7473V40.7473L17.776 40.75C18.1902 40.751 18.5268 40.416 18.5278 40.0018Z");
      attr_dev(path4, "fill", "currentColor");
      add_location(path4, file$4, 25, 2, 2305);
      attr_dev(path5, "fill-rule", "evenodd");
      attr_dev(path5, "clip-rule", "evenodd");
      attr_dev(path5, "d", "M29.4722 40.0018C29.4712 39.5876 29.8062 39.251 30.2204 39.25L31.3627 39.2473C34.0969 39.2151 35.0542 38.8992 36.0084 38.3888C37.0366 37.839 37.839 37.0366 38.3888 36.0084C38.9267 35.0027 39.25 33.993 39.25 30.884V30.2222C39.25 29.808 39.5858 29.4722 40 29.4722C40.4142 29.4722 40.75 29.808 40.75 30.2222V30.884C40.75 34.1146 40.4132 35.4038 39.7116 36.7158C39.0219 38.0054 38.0054 39.0219 36.7158 39.7116C35.4747 40.3753 34.2535 40.7136 31.3767 40.7472L31.3698 40.7473V40.7473L30.224 40.75C29.8098 40.751 29.4732 40.416 29.4722 40.0018Z");
      attr_dev(path5, "fill", "currentColor");
      add_location(path5, file$4, 31, 2, 2928);
      attr_dev(svg, "width", "48");
      attr_dev(svg, "height", "48");
      attr_dev(svg, "viewBox", "0 0 48 48");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$4, 0, 0, 0);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path0);
      append_dev(svg, path1);
      append_dev(svg, path2);
      append_dev(svg, path3);
      append_dev(svg, path4);
      append_dev(svg, path5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
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
function instance$4($$self, $$props) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Look", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Look> was created with unknown prop '${key}'`);
  });
  return [];
}
class Look extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Look",
      options,
      id: create_fragment$4.name
    });
  }
}
const isHoverSupported = () => matchMedia("(any-hover: hover)").matches;
const isSamsung = () => /Android/i.test(navigator.userAgent);
const isDNDSupported = () => isHoverSupported() && // Samsung-specific bugfix: https://www.ctrl.blog/entry/css-media-hover-samsung.html
!isSamsung();
const file$3 = "src/pages/image-source/ImageSourceSelector/CameraOrPhoto.svelte";
function add_css$3(target) {
  append_styles(target, "svelte-16mkzka", "section.svelte-16mkzka.svelte-16mkzka{display:flex;flex-direction:column;align-items:center\n}article.svelte-16mkzka.svelte-16mkzka{display:flex;flex-direction:column;align-items:center;justify-content:center\n}h1.svelte-16mkzka.svelte-16mkzka{margin-bottom:20px;font-size:16px;line-height:24px\n}@media(min-width: 768px){h1.svelte-16mkzka.svelte-16mkzka{font-size:20px;line-height:28px\n    }}.tips-container.svelte-16mkzka.svelte-16mkzka{margin-bottom:24px;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:16px\n}.tip.svelte-16mkzka.svelte-16mkzka{margin-bottom:4px;display:flex;width:120px;flex-direction:column;align-items:center;font-size:14px;line-height:20px\n}.tip.svelte-16mkzka svg{color:var(--tint-text-dark)\n}.tip.svelte-16mkzka span.svelte-16mkzka{margin-top:4px;display:flex;align-items:center;justify-content:center;text-align:center\n}form.svelte-16mkzka.svelte-16mkzka,form.svelte-16mkzka .buttons.svelte-16mkzka{margin-top:0px !important;display:flex !important;width:100% !important;max-width:278px !important;flex-direction:column !important\n}form.svelte-16mkzka .buttons.svelte-16mkzka button,form.svelte-16mkzka .buttons.svelte-16mkzka label{width:100%\n}.tint-camera-or-photo.svelte-16mkzka .primary{margin-bottom:12px\n}.tint-camera-or-photo.svelte-16mkzka .secondary{margin-bottom:24px\n}form.svelte-16mkzka p.svelte-16mkzka{cursor:pointer;text-align:center;font-size:14px;line-height:20px;font-weight:700;--tw-text-opacity:1;color:rgb(31 41 55 / var(--tw-text-opacity));opacity:0.6\n}");
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let div;
  let switch_instance;
  let t0;
  let span;
  let t1_value = (
    /*tip*/
    ctx[13].title + ""
  );
  let t1;
  let t2;
  let current;
  var switch_value = (
    /*tip*/
    ctx[13].svg
  );
  function switch_props(ctx2) {
    return { $$inline: true };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props());
  }
  const block = {
    c: function create() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      attr_dev(span, "class", "svelte-16mkzka");
      add_location(span, file$3, 42, 10, 1224);
      attr_dev(div, "class", "tip svelte-16mkzka");
      add_location(div, file$3, 40, 8, 1150);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (switch_instance)
        mount_component(switch_instance, div, null);
      append_dev(div, t0);
      append_dev(div, span);
      append_dev(span, t1);
      append_dev(div, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (switch_value !== (switch_value = /*tip*/
      ctx2[13].svg)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, t0);
        } else {
          switch_instance = null;
        }
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
        detach_dev(div);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(40:6) {#each tips as tip}",
    ctx
  });
  return block;
}
function create_default_slot_2(ctx) {
  let t_value = (
    /*$language*/
    ctx[1].liveCamera + ""
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
      2 && t_value !== (t_value = /*$language*/
      ctx2[1].liveCamera + ""))
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
    source: '(50:6) <Button         variant={isMobile ? \\"secondary\\" : \\"primary\\"}         size=\\"lg\\"         on:click={() => requestCameraPermissions().then((granted) => dispatch(\\"webcam\\", granted))}         qa=\\"tint-live-camera\\"       >',
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      as: "label",
      variant: (
        /*isMobile*/
        ctx[4] ? "primary" : "secondary"
      ),
      size: "lg",
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      65538) {
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
    id: create_else_block.name,
    type: "else",
    source: "(68:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let button;
  let current;
  button = new Button({
    props: {
      variant: (
        /*isMobile*/
        ctx[4] ? "primary" : "secondary"
      ),
      size: "lg",
      qa: "tint-upload-photo",
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler_1*/
    ctx[8]
  );
  button.$on(
    "click",
    /*click_handler_2*/
    ctx[9]
  );
  const block = {
    c: function create() {
      create_component(button.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      65538) {
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
    id: create_if_block_1.name,
    type: "if",
    source: "(58:6) {#if dnd}",
    ctx
  });
  return block;
}
function create_default_slot_1$2(ctx) {
  let t0_value = (
    /*$language*/
    ctx[1].uploadPhoto + ""
  );
  let t0;
  let t1;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      attr_dev(input, "type", "file");
      attr_dev(input, "accept", "image/*");
      input.hidden = true;
      add_location(input, file$3, 70, 10, 2146);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "click",
            /*click_handler_3*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[11],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      2 && t0_value !== (t0_value = /*$language*/
      ctx2[1].uploadPhoto + ""))
        set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$2.name,
    type: "slot",
    source: '(69:8) <Button as=\\"label\\" variant={isMobile ? \\"primary\\" : \\"secondary\\"} size=\\"lg\\">',
    ctx
  });
  return block;
}
function create_default_slot$2(ctx) {
  let t_value = (
    /*$language*/
    ctx[1].uploadPhoto + ""
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
      2 && t_value !== (t_value = /*$language*/
      ctx2[1].uploadPhoto + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(59:8) <Button           variant={isMobile ? \\"primary\\" : \\"secondary\\"}           size=\\"lg\\"           on:click={() => dispatch(\\"dnd\\")}           on:click={() => analytics.upload_photo_clicked()}           qa=\\"tint-upload-photo\\"         >',
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let p;
  let t_value = (
    /*$language*/
    ctx[1].continueWithUploadedPhoto + ""
  );
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      attr_dev(p, "class", "svelte-16mkzka");
      add_location(p, file$3, 84, 6, 2601);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
      if (!mounted) {
        dispose = listen_dev(
          p,
          "click",
          /*click_handler_4*/
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
      if (dirty & /*$language*/
      2 && t_value !== (t_value = /*$language*/
      ctx2[1].continueWithUploadedPhoto + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(83:4) {#if showSkip}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let section;
  let article;
  let h1;
  let t0_value = (
    /*$language*/
    ctx[1].tipsForVirtualTryOn + ""
  );
  let t0;
  let t1;
  let div0;
  let t2;
  let form;
  let div1;
  let button;
  let t3;
  let current_block_type_index;
  let if_block0;
  let t4;
  let current;
  let mounted;
  let dispose;
  let each_value = (
    /*tips*/
    ctx[2]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  button = new Button({
    props: {
      variant: (
        /*isMobile*/
        ctx[4] ? "secondary" : "primary"
      ),
      size: "lg",
      qa: "tint-live-camera",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  button.$on(
    "click",
    /*click_handler*/
    ctx[7]
  );
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*dnd*/
      ctx2[3]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*showSkip*/
    ctx[0] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      section = element("section");
      article = element("article");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      form = element("form");
      div1 = element("div");
      create_component(button.$$.fragment);
      t3 = space();
      if_block0.c();
      t4 = space();
      if (if_block1)
        if_block1.c();
      attr_dev(h1, "class", "svelte-16mkzka");
      add_location(h1, file$3, 37, 4, 1042);
      attr_dev(div0, "class", "tips-container svelte-16mkzka");
      add_location(div0, file$3, 38, 4, 1087);
      attr_dev(article, "class", "svelte-16mkzka");
      add_location(article, file$3, 36, 2, 1028);
      attr_dev(div1, "class", "buttons svelte-16mkzka");
      attr_dev(
        div1,
        "style",
        /*isMobile*/
        ctx[4] ? "flex-direction: column-reverse !important;" : ""
      );
      add_location(div1, file$3, 48, 4, 1340);
      attr_dev(form, "class", "svelte-16mkzka");
      add_location(form, file$3, 47, 2, 1304);
      attr_dev(section, "class", "tint-camera-or-photo svelte-16mkzka");
      add_location(section, file$3, 35, 0, 987);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, article);
      append_dev(article, h1);
      append_dev(h1, t0);
      append_dev(article, t1);
      append_dev(article, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_dev(section, t2);
      append_dev(section, form);
      append_dev(form, div1);
      mount_component(button, div1, null);
      append_dev(div1, t3);
      if_blocks[current_block_type_index].m(div1, null);
      append_dev(form, t4);
      if (if_block1)
        if_block1.m(form, null);
      current = true;
      if (!mounted) {
        dispose = listen_dev(form, "submit", prevent_default(
          /*submit_handler*/
          ctx[6]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*$language*/
      2) && t0_value !== (t0_value = /*$language*/
      ctx2[1].tipsForVirtualTryOn + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*tips*/
      4) {
        each_value = /*tips*/
        ctx2[2];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      65538) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if_block0.p(ctx2, dirty);
      if (
        /*showSkip*/
        ctx2[0]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          if_block1.m(form, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(button.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(button.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_each(each_blocks, detaching);
      destroy_component(button);
      if_blocks[current_block_type_index].d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
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
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(1, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CameraOrPhoto", slots, []);
  let { showSkip = false } = $$props;
  const tips = [
    {
      title: $language.faceUncovered,
      svg: Face
    },
    {
      title: $language.headInTheFrame,
      svg: Frame
    },
    {
      title: $language.lookStraight,
      svg: Look
    },
    {
      title: $language.evenLighting,
      svg: Light
    }
  ];
  const dnd = isDNDSupported();
  const isMobile = isMobileDevice();
  const dispatch = createEventDispatcher();
  const writable_props = ["showSkip"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CameraOrPhoto> was created with unknown prop '${key}'`);
  });
  function submit_handler(event) {
    bubble.call(this, $$self, event);
  }
  const click_handler = () => requestCameraPermissions().then((granted) => dispatch("webcam", granted));
  const click_handler_1 = () => dispatch("dnd");
  const click_handler_2 = () => analytics.upload_photo_clicked();
  const click_handler_3 = () => analytics.upload_photo_clicked();
  const input_handler = ({ currentTarget }) => (
    // @ts-expect-error: Object is possibly 'null'.ts(2531)
    dispatch("photo", currentTarget.files[0])
  );
  const click_handler_4 = () => dispatch("skip");
  $$self.$$set = ($$props2) => {
    if ("showSkip" in $$props2)
      $$invalidate(0, showSkip = $$props2.showSkip);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    analytics,
    Button,
    requestCameraPermissions,
    isMobileDevice,
    language,
    FaceSvg: Face,
    FrameSvg: Frame,
    LightSvg: Light,
    LookSvg: Look,
    isDNDSupported,
    showSkip,
    tips,
    dnd,
    isMobile,
    dispatch,
    $language
  });
  $$self.$inject_state = ($$props2) => {
    if ("showSkip" in $$props2)
      $$invalidate(0, showSkip = $$props2.showSkip);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    showSkip,
    $language,
    tips,
    dnd,
    isMobile,
    dispatch,
    submit_handler,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    input_handler,
    click_handler_4
  ];
}
class CameraOrPhoto extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { showSkip: 0 }, add_css$3);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CameraOrPhoto",
      options,
      id: create_fragment$3.name
    });
  }
  get showSkip() {
    throw new Error("<CameraOrPhoto>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showSkip(value) {
    throw new Error("<CameraOrPhoto>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/pages/image-source/ImageSourceSelector/PhotoDropzone.svelte";
function add_css$2(target) {
  append_styles(target, "svelte-10eklpy", "section.svelte-10eklpy{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;gap:16px\n}h2.svelte-10eklpy{font-size:16px;line-height:24px\n}@media(min-width: 768px){h2.svelte-10eklpy{font-size:20px;line-height:28px\n    }}div.svelte-10eklpy{display:flex;flex-direction:column;align-items:center;gap:16px;white-space:nowrap\n}");
}
function create_default_slot_1$1(ctx) {
  let t0_value = (
    /*$language*/
    ctx[0].addPhoto + ""
  );
  let t0;
  let t1;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      attr_dev(input, "type", "file");
      attr_dev(input, "accept", "image/*");
      input.hidden = true;
      add_location(input, file$2, 12, 8, 447);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input, anchor);
      if (!mounted) {
        dispose = listen_dev(
          input,
          "input",
          /*input_handler*/
          ctx[2],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      1 && t0_value !== (t0_value = /*$language*/
      ctx2[0].addPhoto + ""))
        set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1$1.name,
    type: "slot",
    source: '(11:6) <Button as=\\"label\\" size=\\"lg\\" qa=\\"tint-add-photo\\">',
    ctx
  });
  return block;
}
function create_default_slot$1(ctx) {
  let div;
  let button;
  let t0;
  let span;
  let t1;
  let t2_value = (
    /*$language*/
    ctx[0].dragItHere + ""
  );
  let t2;
  let current;
  button = new Button({
    props: {
      as: "label",
      size: "lg",
      qa: "tint-add-photo",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(button.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text("or ");
      t2 = text(t2_value);
      add_location(span, file$2, 21, 6, 719);
      attr_dev(div, "class", "svelte-10eklpy");
      add_location(div, file$2, 9, 4, 348);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(button, div, null);
      append_dev(div, t0);
      append_dev(div, span);
      append_dev(span, t1);
      append_dev(span, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      17) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if ((!current || dirty & /*$language*/
      1) && t2_value !== (t2_value = /*$language*/
      ctx2[0].dragItHere + ""))
        set_data_dev(t2, t2_value);
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
        detach_dev(div);
      destroy_component(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(9:2) <Dropzone accept=\\"image/*\\" on:input={({ detail }) => dispatch(\\"photo\\", detail[0])}>',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let section;
  let h2;
  let t0_value = (
    /*$language*/
    ctx[0].uploadPhoto + ""
  );
  let t0;
  let t1;
  let dropzone;
  let current;
  dropzone = new Dropzone({
    props: {
      accept: "image/*",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  dropzone.$on(
    "input",
    /*input_handler_1*/
    ctx[3]
  );
  const block = {
    c: function create() {
      section = element("section");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      create_component(dropzone.$$.fragment);
      attr_dev(h2, "class", "svelte-10eklpy");
      add_location(h2, file$2, 7, 2, 225);
      attr_dev(section, "class", "svelte-10eklpy");
      add_location(section, file$2, 6, 0, 213);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, h2);
      append_dev(h2, t0);
      append_dev(section, t1);
      mount_component(dropzone, section, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*$language*/
      1) && t0_value !== (t0_value = /*$language*/
      ctx2[0].uploadPhoto + ""))
        set_data_dev(t0, t0_value);
      const dropzone_changes = {};
      if (dirty & /*$$scope, $language*/
      17) {
        dropzone_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropzone.$set(dropzone_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(dropzone.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(dropzone.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(dropzone);
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
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(0, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PhotoDropzone", slots, []);
  const dispatch = createEventDispatcher();
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PhotoDropzone> was created with unknown prop '${key}'`);
  });
  const input_handler = ({ currentTarget }) => (
    // @ts-expect-error: Object is possibly 'null'.ts(2531)
    dispatch("photo", currentTarget.files[0])
  );
  const input_handler_1 = ({ detail }) => dispatch("photo", detail[0]);
  $$self.$capture_state = () => ({
    createEventDispatcher,
    Button,
    Dropzone,
    language,
    dispatch,
    $language
  });
  return [$language, dispatch, input_handler, input_handler_1];
}
class PhotoDropzone extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, add_css$2);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PhotoDropzone",
      options,
      id: create_fragment$2.name
    });
  }
}
const file$1 = "src/pages/image-source/ImageSourceSelector/PhotoGift.svelte";
function add_css$1(target) {
  append_styles(target, "svelte-1rgcmd3", ".photo-gift.svelte-1rgcmd3.svelte-1rgcmd3{width:100%\n}@media(min-width: 768px){.photo-gift.svelte-1rgcmd3.svelte-1rgcmd3{width:auto\n    }}.photo-gift.svelte-1rgcmd3 form.dropzone-form{margin-top:48px;width:100%\n}@media(min-width: 768px){.photo-gift.svelte-1rgcmd3 form.dropzone-form{width:656px\n    }}.photo-gift.svelte-1rgcmd3 form.dropzone-form > div{display:flex;width:100%;flex-direction:column;align-items:center\n}@media(min-width: 768px){.photo-gift.svelte-1rgcmd3 form.dropzone-form > div{width:auto\n    }}.photo-gift.svelte-1rgcmd3 form.dropzone-form > label{height:72%\n}@media(min-width: 768px){.photo-gift.svelte-1rgcmd3 form.dropzone-form > label{height:100%\n    }}.add-photo{position:absolute;top:120px;width:105%\n}@media(min-width: 768px){.add-photo{position:relative;top:auto;width:auto\n    }}form p.svelte-1rgcmd3.svelte-1rgcmd3{margin-top:-88px;font-size:16px;line-height:24px;font-weight:700;--tw-text-opacity:1;color:rgb(26 22 22 / var(--tw-text-opacity));opacity:0.5\n}@media(min-width: 768px){form p.svelte-1rgcmd3.svelte-1rgcmd3{margin-top:28px\n    }}ul.svelte-1rgcmd3.svelte-1rgcmd3{margin-top:8px;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));grid-template-rows:repeat(2, minmax(0, 1fr));gap:0px;row-gap:16px;opacity:0.5\n}@media(min-width: 768px){ul.svelte-1rgcmd3.svelte-1rgcmd3{margin-top:16px;grid-template-columns:repeat(4, minmax(0, 1fr));grid-template-rows:repeat(1, minmax(0, 1fr))\n    }}ul.svelte-1rgcmd3>li.svelte-1rgcmd3{display:flex;width:111.6px;flex-direction:column;align-items:center;text-align:center\n}ul.svelte-1rgcmd3>li.svelte-1rgcmd3 svg{margin-bottom:4px;height:36px;width:36px;color:var(--tint-text-dark)\n}ul.svelte-1rgcmd3>li.svelte-1rgcmd3{font-size:12px;line-height:16px\n}hr.svelte-1rgcmd3.svelte-1rgcmd3{margin-top:28px;margin-bottom:32px;display:none;height:1px;width:530px;background-color:rgb(0 0 0 / 0.1)\n}@media(min-width: 768px){hr.svelte-1rgcmd3.svelte-1rgcmd3{display:block\n    }}.dnd-text.svelte-1rgcmd3.svelte-1rgcmd3{margin-bottom:40px;margin-top:4px;display:none;font-size:14px;line-height:20px;font-weight:400;--tw-text-opacity:1;color:rgb(45 45 54 / var(--tw-text-opacity));opacity:1\n}@media(min-width: 768px){.dnd-text.svelte-1rgcmd3.svelte-1rgcmd3{display:block\n    }}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let li;
  let switch_instance;
  let t0;
  let span;
  let t1_value = (
    /*tip*/
    ctx[5].title + ""
  );
  let t1;
  let t2;
  let current;
  var switch_value = (
    /*tip*/
    ctx[5].svg
  );
  function switch_props(ctx2) {
    return {
      props: { fill: "#ff0000" },
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props());
  }
  const block = {
    c: function create() {
      li = element("li");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      add_location(span, file$1, 35, 10, 966);
      attr_dev(li, "class", "svelte-1rgcmd3");
      add_location(li, file$1, 33, 8, 890);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      if (switch_instance)
        mount_component(switch_instance, li, null);
      append_dev(li, t0);
      append_dev(li, span);
      append_dev(span, t1);
      append_dev(li, t2);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (switch_value !== (switch_value = /*tip*/
      ctx2[5].svg)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, li, t0);
        } else {
          switch_instance = null;
        }
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
        detach_dev(li);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(33:6) {#each tips as tip}",
    ctx
  });
  return block;
}
function create_default_slot_1(ctx) {
  let t0_value = (
    /*$language*/
    ctx[0].addPhoto + ""
  );
  let t0;
  let t1;
  let input;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      t0 = text(t0_value);
      t1 = space();
      input = element("input");
      attr_dev(input, "type", "file");
      attr_dev(input, "accept", "image/*");
      input.hidden = true;
      add_location(input, file$1, 42, 6, 1145);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, input, anchor);
      if (!mounted) {
        dispose = listen_dev(
          input,
          "input",
          /*input_handler*/
          ctx[3],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$language*/
      1 && t0_value !== (t0_value = /*$language*/
      ctx2[0].addPhoto + ""))
        set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(input);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot_1.name,
    type: "slot",
    source: '(41:4) <Button size=\\"lg\\" as=\\"label\\" class=\\"add-photo\\" qa=\\"tint-add-photo\\">',
    ctx
  });
  return block;
}
function create_default_slot(ctx) {
  let p0;
  let t0_value = (
    /*$language*/
    ctx[0].tipsForPhoto + ""
  );
  let t0;
  let t1;
  let ul;
  let t2;
  let hr;
  let t3;
  let button;
  let t4;
  let p1;
  let t5_value = (
    /*$language*/
    ctx[0].dropFileHereToUpload + ""
  );
  let t5;
  let current;
  let each_value = (
    /*tips*/
    ctx[1]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  button = new Button({
    props: {
      size: "lg",
      as: "label",
      class: "add-photo",
      qa: "tint-add-photo",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      hr = element("hr");
      t3 = space();
      create_component(button.$$.fragment);
      t4 = space();
      p1 = element("p");
      t5 = text(t5_value);
      attr_dev(p0, "class", "svelte-1rgcmd3");
      add_location(p0, file$1, 30, 4, 815);
      attr_dev(ul, "class", "svelte-1rgcmd3");
      add_location(ul, file$1, 31, 4, 851);
      attr_dev(hr, "class", "svelte-1rgcmd3");
      add_location(hr, file$1, 39, 4, 1033);
      attr_dev(p1, "class", "dnd-text svelte-1rgcmd3");
      add_location(p1, file$1, 51, 4, 1399);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p0, anchor);
      append_dev(p0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      insert_dev(target, t2, anchor);
      insert_dev(target, hr, anchor);
      insert_dev(target, t3, anchor);
      mount_component(button, target, anchor);
      insert_dev(target, t4, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t5);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if ((!current || dirty & /*$language*/
      1) && t0_value !== (t0_value = /*$language*/
      ctx2[0].tipsForPhoto + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*tips*/
      2) {
        each_value = /*tips*/
        ctx2[1];
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
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      257) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if ((!current || dirty & /*$language*/
      1) && t5_value !== (t5_value = /*$language*/
      ctx2[0].dropFileHereToUpload + ""))
        set_data_dev(t5, t5_value);
    },
    i: function intro(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(ul);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(hr);
      if (detaching)
        detach_dev(t3);
      destroy_component(button, detaching);
      if (detaching)
        detach_dev(t4);
      if (detaching)
        detach_dev(p1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(30:2) <Dropzone accept=\\"image/*\\" on:input={({ detail }) => dispatch(\\"photo\\", detail[0])}>',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div;
  let dropzone;
  let current;
  dropzone = new Dropzone({
    props: {
      accept: "image/*",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  dropzone.$on(
    "input",
    /*input_handler_1*/
    ctx[4]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(dropzone.$$.fragment);
      attr_dev(div, "class", "photo-gift svelte-1rgcmd3");
      add_location(div, file$1, 28, 0, 700);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(dropzone, div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const dropzone_changes = {};
      if (dirty & /*$$scope, $language*/
      257) {
        dropzone_changes.$$scope = { dirty, ctx: ctx2 };
      }
      dropzone.$set(dropzone_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(dropzone.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(dropzone.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(dropzone);
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
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(0, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PhotoGift", slots, []);
  const tips = [
    {
      title: $language.faceUncovered,
      svg: Face
    },
    {
      title: $language.headInTheFrame,
      svg: Frame
    },
    {
      title: $language.lookStraight,
      svg: Look
    },
    {
      title: $language.evenLighting,
      svg: Light
    }
  ];
  const dispatch = createEventDispatcher();
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PhotoGift> was created with unknown prop '${key}'`);
  });
  const input_handler = ({ currentTarget }) => (
    // @ts-expect-error: Object is possibly 'null'.ts(2531)
    dispatch("photo", currentTarget.files[0])
  );
  const input_handler_1 = ({ detail }) => dispatch("photo", detail[0]);
  $$self.$capture_state = () => ({
    createEventDispatcher,
    Button,
    Dropzone,
    language,
    FaceSvg: Face,
    FrameSvg: Frame,
    LightSvg: Light,
    LookSvg: Look,
    tips,
    dispatch,
    $language
  });
  return [$language, tips, dispatch, input_handler, input_handler_1];
}
class PhotoGift extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {}, add_css$1);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PhotoGift",
      options,
      id: create_fragment$1.name
    });
  }
}
const file = "src/pages/image-source/ImageSourceSelector/ImageSourceSelector.svelte";
function add_css(target) {
  append_styles(target, "svelte-4mkrqh", "div.svelte-4mkrqh{position:relative;display:flex;height:100%;width:100%;flex-direction:column;align-items:center\n}div.svelte-4mkrqh>.back{position:absolute;top:-16px;left:-24px\n}@media(min-width: 768px){div.svelte-4mkrqh>.back{top:-16px;left:-56px\n    }}");
}
function create_if_block(ctx) {
  let iconbutton;
  let current;
  iconbutton = new IconButton({
    props: {
      class: "back",
      icon: "arrow-left",
      size: "sm"
    },
    $$inline: true
  });
  iconbutton.$on(
    "click",
    /*toggle*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    m: function mount(target, anchor) {
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
    id: create_if_block.name,
    type: "if",
    source: "(17:2) {#if screen !== CameraOrPhoto && !isGift}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let div;
  let t;
  let switch_instance;
  let current;
  let if_block = (
    /*screen*/
    ctx[2] !== CameraOrPhoto && !/*isGift*/
    ctx[1] && create_if_block(ctx)
  );
  var switch_value = (
    /*screen*/
    ctx[2]
  );
  function switch_props(ctx2) {
    return {
      props: {
        showSkip: (
          /*showSkip*/
          ctx2[0]
        ),
        isGift: (
          /*isGift*/
          ctx2[1]
        )
      },
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    switch_instance.$on(
      "dnd",
      /*dnd*/
      ctx[4]
    );
    switch_instance.$on(
      "webcam",
      /*webcam_handler*/
      ctx[5]
    );
    switch_instance.$on(
      "photo",
      /*photo_handler*/
      ctx[6]
    );
    switch_instance.$on(
      "skip",
      /*skip_handler*/
      ctx[7]
    );
  }
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      attr_dev(div, "class", "svelte-4mkrqh");
      add_location(div, file, 15, 0, 454);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_dev(div, t);
      if (switch_instance)
        mount_component(switch_instance, div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*screen*/
        ctx2[2] !== CameraOrPhoto && !/*isGift*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*screen, isGift*/
          6) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
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
      const switch_instance_changes = {};
      if (dirty & /*showSkip*/
      1)
        switch_instance_changes.showSkip = /*showSkip*/
        ctx2[0];
      if (dirty & /*isGift*/
      2)
        switch_instance_changes.isGift = /*isGift*/
        ctx2[1];
      if (dirty & /*screen*/
      4 && switch_value !== (switch_value = /*screen*/
      ctx2[2])) {
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
            "dnd",
            /*dnd*/
            ctx2[4]
          );
          switch_instance.$on(
            "webcam",
            /*webcam_handler*/
            ctx2[5]
          );
          switch_instance.$on(
            "photo",
            /*photo_handler*/
            ctx2[6]
          );
          switch_instance.$on(
            "skip",
            /*skip_handler*/
            ctx2[7]
          );
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, null);
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
      transition_in(if_block);
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      if (switch_instance)
        destroy_component(switch_instance);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ImageSourceSelector", slots, []);
  let { showSkip = false } = $$props;
  let { isGift = false } = $$props;
  let screen = isGift ? PhotoGift : CameraOrPhoto;
  const toggle = () => $$invalidate(2, screen = isGift ? PhotoGift : CameraOrPhoto);
  const dnd = () => $$invalidate(2, screen = PhotoDropzone);
  const writable_props = ["showSkip", "isGift"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ImageSourceSelector> was created with unknown prop '${key}'`);
  });
  function webcam_handler(event) {
    bubble.call(this, $$self, event);
  }
  function photo_handler(event) {
    bubble.call(this, $$self, event);
  }
  function skip_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("showSkip" in $$props2)
      $$invalidate(0, showSkip = $$props2.showSkip);
    if ("isGift" in $$props2)
      $$invalidate(1, isGift = $$props2.isGift);
  };
  $$self.$capture_state = () => ({
    IconButton,
    CameraOrPhoto,
    PhotoDropzone,
    PhotoGift,
    showSkip,
    isGift,
    screen,
    toggle,
    dnd
  });
  $$self.$inject_state = ($$props2) => {
    if ("showSkip" in $$props2)
      $$invalidate(0, showSkip = $$props2.showSkip);
    if ("isGift" in $$props2)
      $$invalidate(1, isGift = $$props2.isGift);
    if ("screen" in $$props2)
      $$invalidate(2, screen = $$props2.screen);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    showSkip,
    isGift,
    screen,
    toggle,
    dnd,
    webcam_handler,
    photo_handler,
    skip_handler
  ];
}
class ImageSourceSelector extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { showSkip: 0, isGift: 1 }, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ImageSourceSelector",
      options,
      id: create_fragment.name
    });
  }
  get showSkip() {
    throw new Error("<ImageSourceSelector>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showSkip(value) {
    throw new Error("<ImageSourceSelector>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get isGift() {
    throw new Error("<ImageSourceSelector>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set isGift(value) {
    throw new Error("<ImageSourceSelector>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  ImageSourceSelector as I
};

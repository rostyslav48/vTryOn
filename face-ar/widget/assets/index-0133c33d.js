import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, v as validate_store, M as source, f as component_subscribe, N as routerPath, g as validate_slots, u as useRouter, h as analytics, P as Paths, a7 as setGift, Q as setSourceChanged, a8 as sca, V as set_store_value, R as empty, r as insert_dev, C as transition_in, D as transition_out, E as detach_dev, a9 as clear, j as element, n as create_component, o as attr_dev, q as add_location, w as append_dev, x as mount_component, aa as noop, F as destroy_component, m as space } from "./app.js";
import { B as BestMatch } from "./BestMatch-ac293868.js";
import { I as ImageSourceSelector } from "./ImageSourceSelector-9e517dfa.js";
import "./BanubaSDK-34db11e0.js";
import "./Button-7f464a41.js";
import "./checkmark-md-244737c7.js";
import "./index-2d8ed87d.js";
import "./Floating-aa1e9f05.js";
const file = "src/pages/image-source/ImageSource.svelte";
function add_css(target) {
  append_styles(target, "svelte-19256gb", "div.tint-image-source-overlay.svelte-19256gb{position:absolute;top:0px;left:0px;z-index:10;display:flex;height:100%;width:100%;align-items:center;justify-content:center;background-color:rgb(0 0 0 / 0.3)\n}div.tint-image-source.svelte-19256gb{position:relative;z-index:10;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));width:100%;max-width:358px;border-radius:12px;padding-left:40px;padding-right:40px;padding-top:32px;padding-bottom:32px\n}@media(min-width: 768px){div.tint-image-source.svelte-19256gb{max-width:640px;padding-top:40px;padding-bottom:40px;padding-left:80px;padding-right:80px\n    }}");
}
function create_else_block(ctx) {
  let div1;
  let div0;
  let imagesourceselector;
  let current;
  imagesourceselector = new ImageSourceSelector({
    props: { showSkip: !source.isEmpty() },
    $$inline: true
  });
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler_2*/
    ctx[9]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler_3*/
    ctx[10]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler_4*/
    ctx[11]
  );
  imagesourceselector.$on(
    "skip",
    /*skip_handler_1*/
    ctx[12]
  );
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler_3*/
    ctx[13]
  );
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      create_component(imagesourceselector.$$.fragment);
      attr_dev(div0, "class", "tint-image-source svelte-19256gb");
      add_location(div0, file, 49, 4, 1710);
      attr_dev(div1, "class", "tint-image-source-overlay svelte-19256gb");
      add_location(div1, file, 48, 2, 1666);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      mount_component(imagesourceselector, div0, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(imagesourceselector.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(imagesourceselector.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      destroy_component(imagesourceselector);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(48:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let bestmatch;
  let t;
  let div1;
  let div0;
  let imagesourceselector;
  let current;
  bestmatch = new BestMatch({ $$inline: true });
  imagesourceselector = new ImageSourceSelector({
    props: { showSkip: !source.isEmpty() },
    $$inline: true
  });
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler*/
    ctx[3]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler*/
    ctx[4]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler_1*/
    ctx[5]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler_2*/
    ctx[6]
  );
  imagesourceselector.$on(
    "skip",
    /*skip_handler*/
    ctx[7]
  );
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler_1*/
    ctx[8]
  );
  const block = {
    c: function create() {
      create_component(bestmatch.$$.fragment);
      t = space();
      div1 = element("div");
      div0 = element("div");
      create_component(imagesourceselector.$$.fragment);
      attr_dev(div0, "class", "tint-image-source svelte-19256gb");
      add_location(div0, file, 23, 4, 824);
      attr_dev(div1, "class", "tint-image-source-overlay backdrop-blur svelte-19256gb");
      add_location(div1, file, 22, 2, 766);
    },
    m: function mount(target, anchor) {
      mount_component(bestmatch, target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      mount_component(imagesourceselector, div0, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(bestmatch.$$.fragment, local);
      transition_in(imagesourceselector.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(bestmatch.$$.fragment, local);
      transition_out(imagesourceselector.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(bestmatch, detaching);
      if (detaching)
        detach_dev(t);
      if (detaching)
        detach_dev(div1);
      destroy_component(imagesourceselector);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(21:0) {#if !source.isEmpty()}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!source.isEmpty())
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type();
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
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
  let $source;
  let $routerPath;
  validate_store(source, "source");
  component_subscribe($$self, source, ($$value) => $$invalidate(14, $source = $$value));
  validate_store(routerPath, "routerPath");
  component_subscribe($$self, routerPath, ($$value) => $$invalidate(1, $routerPath = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ImageSource", slots, []);
  const router = useRouter();
  let src = null;
  const redirect = () => {
    if ($routerPath.current === Paths.SkinCare && $routerPath.previous === Paths.GiftSelection)
      router.push(Paths.SkinCare);
    else
      router.push(Paths.BestMatch);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ImageSource> was created with unknown prop '${key}'`);
  });
  const webcam_handler = ({ detail: granted }) => {
    setGift(false);
    granted ? (clear(), $$invalidate(0, src = { type: "webcam" })) : alert("Please, grant the camera permission to use this feature");
  };
  const photo_handler = ({ detail: photo }) => (clear(), $$invalidate(0, src = { type: "photo", data: photo }));
  const photo_handler_1 = () => analytics.photo_uploaded();
  const photo_handler_2 = () => setGift(false);
  const skip_handler = () => {
    setGift(false);
    setSourceChanged(false);
    router.push($routerPath.current);
  };
  const webcam_handler_1 = ({ detail: granted }) => {
    analytics.live_camera_clicked();
    analytics.camera_permission(granted);
  };
  const webcam_handler_2 = ({ detail: granted }) => {
    granted ? (clear(), $$invalidate(0, src = { type: "webcam" })) : alert("Please, grant the camera permission to use this feature");
  };
  const photo_handler_3 = ({ detail: photo }) => (clear(), $$invalidate(0, src = { type: "photo", data: photo }));
  const photo_handler_4 = () => analytics.photo_uploaded();
  const skip_handler_1 = () => {
    setSourceChanged(false);
    router.push($routerPath.current);
  };
  const webcam_handler_3 = ({ detail: granted }) => {
    analytics.live_camera_clicked();
    analytics.camera_permission(granted);
  };
  $$self.$capture_state = () => ({
    analytics,
    routerPath,
    useRouter,
    Paths,
    setGift,
    setSourceChanged,
    BestMatch,
    source,
    sca,
    ImageSourceSelector,
    router,
    src,
    redirect,
    $source,
    $routerPath
  });
  $$self.$inject_state = ($$props2) => {
    if ("src" in $$props2)
      $$invalidate(0, src = $$props2.src);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*src*/
    1) {
      src && set_store_value(source, $source = src, $source);
    }
    if ($$self.$$.dirty & /*src*/
    1) {
      src && redirect();
    }
  };
  return [
    src,
    $routerPath,
    router,
    webcam_handler,
    photo_handler,
    photo_handler_1,
    photo_handler_2,
    skip_handler,
    webcam_handler_1,
    webcam_handler_2,
    photo_handler_3,
    photo_handler_4,
    skip_handler_1,
    webcam_handler_3
  ];
}
class ImageSource extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ImageSource",
      options,
      id: create_fragment.name
    });
  }
}
const ImageSource$1 = ImageSource;
export {
  ImageSource$1 as ImageSource,
  ImageSource$1 as default
};

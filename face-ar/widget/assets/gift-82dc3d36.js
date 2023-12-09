import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, v as validate_store, M as source, f as component_subscribe, l as language, g as validate_slots, u as useRouter, h as analytics, P as Paths, a8 as sca, V as set_store_value, j as element, k as text, m as space, n as create_component, o as attr_dev, q as add_location, aR as src_url_equal, r as insert_dev, w as append_dev, x as mount_component, A as set_data_dev, C as transition_in, D as transition_out, E as detach_dev, F as destroy_component, a9 as clear } from "./app.js";
import { I as ImageSourceSelector } from "./ImageSourceSelector-9e517dfa.js";
import "./BanubaSDK-34db11e0.js";
import "./Button-7f464a41.js";
const addPhotoPng = "" + new URL("add-photo-b77666bf.png", import.meta.url).href;
const analysisPng = "" + new URL("analysis-88ad6388.png", import.meta.url).href;
const arrowBottomSvg = "" + new URL("arrow-bottom-3d3e427c.svg", import.meta.url).href;
const arrowTopSvg = "" + new URL("arrow-top-87949fb3.svg", import.meta.url).href;
const giftPng = "" + new URL("gift-27591ed1.png", import.meta.url).href;
const file = "src/pages/image-source/ImageSourceGift.svelte";
function add_css(target) {
  append_styles(target, "svelte-10m696y", ".tint-image-source-gift.svelte-10m696y.svelte-10m696y{margin-left:24px;margin-right:24px;display:flex;height:100%;width:100%;flex-direction:column;align-items:center\n}.tint-image-source-gift.svelte-10m696y>h1.svelte-10m696y{margin-top:80px;font-size:20px;line-height:28px;font-weight:700;--tw-text-opacity:1;color:rgb(26 22 22 / var(--tw-text-opacity))\n}@media(min-width: 768px){.tint-image-source-gift.svelte-10m696y>h1.svelte-10m696y{font-size:24px;line-height:32px\n    }}.tint-image-source-gift.svelte-10m696y>p.svelte-10m696y{margin-top:8px;text-align:center;font-size:14px;line-height:20px;--tw-text-opacity:1;color:rgb(45 45 54 / var(--tw-text-opacity))\n}@media(min-width: 768px){.tint-image-source-gift.svelte-10m696y>p.svelte-10m696y{margin-top:12px;font-size:16px;line-height:24px\n    }}ul.svelte-10m696y.svelte-10m696y{margin-top:40px;display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));gap:16px\n}@media(min-width: 768px){ul.svelte-10m696y.svelte-10m696y{gap:24px\n    }}li.svelte-10m696y.svelte-10m696y{position:relative;display:flex;width:96px;flex-direction:column;align-items:center\n}@media(min-width: 768px){li.svelte-10m696y.svelte-10m696y{width:136px\n    }}li.svelte-10m696y>img.svelte-10m696y{height:96px;width:96px\n}@media(min-width: 768px){li.svelte-10m696y>img.svelte-10m696y{height:136px;width:136px\n    }}li.svelte-10m696y>img.arrow-top{position:absolute;right:-24px;top:0px;height:12px;width:32px\n}@media(min-width: 768px){li.svelte-10m696y>img.arrow-top{right:-36px;height:20px;width:44px\n    }}li.svelte-10m696y>img.arrow-bottom{position:absolute;right:-24px;bottom:32px;height:12px;width:32px\n}@media(min-width: 768px){li.svelte-10m696y>img.arrow-bottom{right:-36px;height:20px;width:44px\n    }}li.svelte-10m696y>p.svelte-10m696y{margin-top:8px;text-align:center;font-size:12px;line-height:16px;font-weight:700;--tw-text-opacity:1;color:rgb(45 45 54 / var(--tw-text-opacity))\n}@media(min-width: 768px){li.svelte-10m696y>p.svelte-10m696y{margin-top:12px;font-size:14px;line-height:20px\n    }}");
}
function create_fragment(ctx) {
  let div;
  let h1;
  let t0_value = (
    /*$language*/
    ctx[1].giftTitle + ""
  );
  let t0;
  let t1;
  let p0;
  let t2_value = (
    /*$language*/
    ctx[1].giftTip + ""
  );
  let t2;
  let t3;
  let ul;
  let li0;
  let img0;
  let img0_src_value;
  let t4;
  let p1;
  let t5_value = (
    /*$language*/
    ctx[1].giftAddPhoto + ""
  );
  let t5;
  let t6;
  let img1;
  let img1_src_value;
  let t7;
  let li1;
  let img2;
  let img2_src_value;
  let t8;
  let p2;
  let t9_value = (
    /*$language*/
    ctx[1].analysis + ""
  );
  let t9;
  let t10;
  let img3;
  let img3_src_value;
  let t11;
  let li2;
  let img4;
  let img4_src_value;
  let t12;
  let p3;
  let t13_value = (
    /*$language*/
    ctx[1].pickUpAGift + ""
  );
  let t13;
  let t14;
  let imagesourceselector;
  let current;
  imagesourceselector = new ImageSourceSelector({ props: { isGift: true }, $$inline: true });
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler*/
    ctx[2]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler*/
    ctx[3]
  );
  imagesourceselector.$on(
    "photo",
    /*photo_handler_1*/
    ctx[4]
  );
  imagesourceselector.$on(
    "webcam",
    /*webcam_handler_1*/
    ctx[5]
  );
  const block = {
    c: function create() {
      div = element("div");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = space();
      ul = element("ul");
      li0 = element("li");
      img0 = element("img");
      t4 = space();
      p1 = element("p");
      t5 = text(t5_value);
      t6 = space();
      img1 = element("img");
      t7 = space();
      li1 = element("li");
      img2 = element("img");
      t8 = space();
      p2 = element("p");
      t9 = text(t9_value);
      t10 = space();
      img3 = element("img");
      t11 = space();
      li2 = element("li");
      img4 = element("img");
      t12 = space();
      p3 = element("p");
      t13 = text(t13_value);
      t14 = space();
      create_component(imagesourceselector.$$.fragment);
      attr_dev(h1, "class", "svelte-10m696y");
      add_location(h1, file, 18, 2, 714);
      attr_dev(p0, "class", "svelte-10m696y");
      add_location(p0, file, 19, 2, 747);
      if (!src_url_equal(img0.src, img0_src_value = addPhotoPng))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Add");
      attr_dev(img0, "class", "svelte-10m696y");
      add_location(img0, file, 22, 6, 796);
      attr_dev(p1, "class", "svelte-10m696y");
      add_location(p1, file, 23, 6, 838);
      attr_dev(img1, "class", "arrow-top svelte-10m696y");
      if (!src_url_equal(img1.src, img1_src_value = arrowTopSvg))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Next");
      add_location(img1, file, 24, 6, 876);
      attr_dev(li0, "class", "svelte-10m696y");
      add_location(li0, file, 21, 4, 785);
      if (!src_url_equal(img2.src, img2_src_value = analysisPng))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Analysis");
      attr_dev(img2, "class", "svelte-10m696y");
      add_location(img2, file, 27, 6, 956);
      attr_dev(p2, "class", "svelte-10m696y");
      add_location(p2, file, 28, 6, 1003);
      attr_dev(img3, "class", "arrow-bottom svelte-10m696y");
      if (!src_url_equal(img3.src, img3_src_value = arrowBottomSvg))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Next");
      add_location(img3, file, 29, 6, 1037);
      attr_dev(li1, "class", "svelte-10m696y");
      add_location(li1, file, 26, 4, 945);
      if (!src_url_equal(img4.src, img4_src_value = giftPng))
        attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Pick up a gift");
      attr_dev(img4, "class", "svelte-10m696y");
      add_location(img4, file, 32, 6, 1123);
      attr_dev(p3, "class", "svelte-10m696y");
      add_location(p3, file, 33, 6, 1172);
      attr_dev(li2, "class", "svelte-10m696y");
      add_location(li2, file, 31, 4, 1112);
      attr_dev(ul, "class", "svelte-10m696y");
      add_location(ul, file, 20, 2, 776);
      attr_dev(div, "class", "tint-image-source-gift svelte-10m696y");
      add_location(div, file, 17, 0, 675);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t0);
      append_dev(div, t1);
      append_dev(div, p0);
      append_dev(p0, t2);
      append_dev(div, t3);
      append_dev(div, ul);
      append_dev(ul, li0);
      append_dev(li0, img0);
      append_dev(li0, t4);
      append_dev(li0, p1);
      append_dev(p1, t5);
      append_dev(li0, t6);
      append_dev(li0, img1);
      append_dev(ul, t7);
      append_dev(ul, li1);
      append_dev(li1, img2);
      append_dev(li1, t8);
      append_dev(li1, p2);
      append_dev(p2, t9);
      append_dev(li1, t10);
      append_dev(li1, img3);
      append_dev(ul, t11);
      append_dev(ul, li2);
      append_dev(li2, img4);
      append_dev(li2, t12);
      append_dev(li2, p3);
      append_dev(p3, t13);
      append_dev(div, t14);
      mount_component(imagesourceselector, div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*$language*/
      2) && t0_value !== (t0_value = /*$language*/
      ctx2[1].giftTitle + ""))
        set_data_dev(t0, t0_value);
      if ((!current || dirty & /*$language*/
      2) && t2_value !== (t2_value = /*$language*/
      ctx2[1].giftTip + ""))
        set_data_dev(t2, t2_value);
      if ((!current || dirty & /*$language*/
      2) && t5_value !== (t5_value = /*$language*/
      ctx2[1].giftAddPhoto + ""))
        set_data_dev(t5, t5_value);
      if ((!current || dirty & /*$language*/
      2) && t9_value !== (t9_value = /*$language*/
      ctx2[1].analysis + ""))
        set_data_dev(t9, t9_value);
      if ((!current || dirty & /*$language*/
      2) && t13_value !== (t13_value = /*$language*/
      ctx2[1].pickUpAGift + ""))
        set_data_dev(t13, t13_value);
    },
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
        detach_dev(div);
      destroy_component(imagesourceselector);
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
  let $language;
  validate_store(source, "source");
  component_subscribe($$self, source, ($$value) => $$invalidate(6, $source = $$value));
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(1, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ImageSourceGift", slots, []);
  const router = useRouter();
  let src = null;
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ImageSourceGift> was created with unknown prop '${key}'`);
  });
  const webcam_handler = ({ detail: granted }) => {
    granted ? (clear(), $$invalidate(0, src = { type: "webcam" })) : alert("Please, grant the camera permission to use this feature");
  };
  const photo_handler = ({ detail: photo }) => (clear(), $$invalidate(0, src = { type: "photo", data: photo }));
  const photo_handler_1 = () => analytics.photo_uploaded();
  const webcam_handler_1 = ({ detail: granted }) => {
    analytics.live_camera_clicked();
    analytics.camera_permission(granted);
  };
  $$self.$capture_state = () => ({
    analytics,
    Paths,
    useRouter,
    language,
    source,
    sca,
    ImageSourceSelector,
    addPhotoPng,
    analysisPng,
    arrowBottomSvg,
    arrowTopSvg,
    giftPng,
    router,
    src,
    $source,
    $language
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
      src && router.push(Paths.GiftSelection);
    }
  };
  return [
    src,
    $language,
    webcam_handler,
    photo_handler,
    photo_handler_1,
    webcam_handler_1
  ];
}
class ImageSourceGift extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ImageSourceGift",
      options,
      id: create_fragment.name
    });
  }
}
const ImageSourceGift$1 = ImageSourceGift;
export {
  ImageSourceGift$1 as ImageSourceGift,
  ImageSourceGift$1 as default
};

import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, I as construct_svelte_component_dev, v as validate_store, J as step, f as component_subscribe, K as percent, L as result, M as source, g as validate_slots, u as useRouter, h as analytics, P as Paths, O as skinCare, Q as setSourceChanged, n as create_component, R as empty, x as mount_component, r as insert_dev, T as group_outros, D as transition_out, F as destroy_component, U as check_outros, C as transition_in, E as detach_dev, V as set_store_value } from "./app.js";
import { S as SCA, A as AnalysisProgress, C as CameraFrameCapture, a as analyze } from "./CameraFrameCapture-385f9690.js";
import "./BanubaSDK-34db11e0.js";
import "./index-2d8ed87d.js";
import "./checkmark-md-244737c7.js";
import "./analysis-f5aa7ef5.js";
function create_fragment(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*screen*/
    ctx[1]
  );
  function switch_props(ctx2) {
    var _a;
    return {
      props: {
        intro: (
          /*$imageSource*/
          ((_a = ctx2[0]) == null ? void 0 : _a.type) === "webcam"
        ),
        isGift: true
      },
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
    switch_instance.$on(
      "photo",
      /*photo_handler*/
      ctx[3]
    );
    switch_instance.$on(
      "ended",
      /*ended_handler*/
      ctx[4]
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
    m: function mount(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      var _a;
      const switch_instance_changes = {};
      if (dirty & /*$imageSource*/
      1)
        switch_instance_changes.intro = /*$imageSource*/
        ((_a = ctx2[0]) == null ? void 0 : _a.type) === "webcam";
      if (dirty & /*screen*/
      2 && switch_value !== (switch_value = /*screen*/
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
            "photo",
            /*photo_handler*/
            ctx2[3]
          );
          switch_instance.$on(
            "ended",
            /*ended_handler*/
            ctx2[4]
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
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let $step;
  let $percent;
  let $result;
  let $imageSource;
  validate_store(step, "step");
  component_subscribe($$self, step, ($$value) => $$invalidate(5, $step = $$value));
  validate_store(percent, "percent");
  component_subscribe($$self, percent, ($$value) => $$invalidate(6, $percent = $$value));
  validate_store(result, "result");
  component_subscribe($$self, result, ($$value) => $$invalidate(7, $result = $$value));
  validate_store(source, "imageSource");
  component_subscribe($$self, source, ($$value) => $$invalidate(0, $imageSource = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FaceAnalysisGift", slots, []);
  const router = useRouter();
  let screen;
  const analyze$1 = async (photo) => {
    setSourceChanged(true);
    analytics.face_analysis_started();
    set_store_value(
      result,
      $result = await analyze(photo, (progress) => {
        set_store_value(percent, $percent = progress.percent, $percent);
        set_store_value(step, $step = progress.step, $step);
      }),
      $result
    );
    skinCare.resetQuiz();
    analytics.face_analysis_finished();
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FaceAnalysisGift> was created with unknown prop '${key}'`);
  });
  const photo_handler = ({ detail }) => $imageSource && set_store_value(source, $imageSource.data = detail, $imageSource);
  const ended_handler = () => router.push(Paths.GiftSelection);
  $$self.$capture_state = () => ({
    analytics,
    Paths,
    useRouter,
    SCA,
    skinCare,
    setSourceChanged,
    imageSource: source,
    AnalysisProgress,
    CameraFrameCapture,
    percent,
    result,
    step,
    router,
    screen,
    analyze: analyze$1,
    $step,
    $percent,
    $result,
    $imageSource
  });
  $$self.$inject_state = ($$props2) => {
    if ("screen" in $$props2)
      $$invalidate(1, screen = $$props2.screen);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$imageSource*/
    1) {
      $: {
        if (!$imageSource)
          break $;
        if ($imageSource.type === "photo")
          $$invalidate(1, screen = AnalysisProgress);
        else if ($imageSource.type === "webcam" && $imageSource.data)
          $$invalidate(1, screen = AnalysisProgress);
        else
          $$invalidate(1, screen = CameraFrameCapture);
      }
    }
    if ($$self.$$.dirty & /*$imageSource*/
    1) {
      $: {
        if (!$imageSource)
          break $;
        if ($imageSource.type === "photo")
          analyze$1($imageSource.data);
        else if ($imageSource.type === "webcam" && $imageSource.data)
          analyze$1($imageSource.data);
      }
    }
  };
  return [$imageSource, screen, router, photo_handler, ended_handler];
}
class FaceAnalysisGift extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FaceAnalysisGift",
      options,
      id: create_fragment.name
    });
  }
}
const FaceAnalysisGift$1 = FaceAnalysisGift;
export {
  FaceAnalysisGift$1 as default
};

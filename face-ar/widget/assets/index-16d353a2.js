import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, v as validate_store, l as language, f as component_subscribe, g as validate_slots, u as useRouter, h as analytics, t as terms, j as element, k as text, m as space, n as create_component, o as attr_dev, q as add_location, r as insert_dev, w as append_dev, x as mount_component, y as listen_dev, z as prevent_default, A as set_data_dev, C as transition_in, D as transition_out, E as detach_dev, F as destroy_component, G as run_all, H as accept } from "./app.js";
import { B as Button } from "./Button-7f464a41.js";
import "./BanubaSDK-34db11e0.js";
const file = "src/pages/terms/Terms.svelte";
function add_css(target) {
  append_styles(target, "svelte-1ort1zl", "section.svelte-1ort1zl{display:flex;max-width:358px;flex-direction:column;gap:32px;border-radius:12px;padding-left:20px;padding-right:20px;padding-top:32px;padding-bottom:32px\n}@media(min-width: 768px){section.svelte-1ort1zl{max-width:640px;gap:80px;padding-top:66px;padding-bottom:66px;padding-left:80px;padding-right:80px\n    }}article.svelte-1ort1zl{display:flex;flex-direction:column;text-align:justify\n}h1.svelte-1ort1zl{margin-bottom:8px;align-self:center;font-size:16px;line-height:24px\n}@media(min-width: 768px){h1.svelte-1ort1zl{margin-bottom:16px;font-size:20px;line-height:28px\n    }}p.svelte-1ort1zl{font-size:14px;line-height:20px\n}form.svelte-1ort1zl{display:flex;min-width:278px;flex-direction:column;align-self:center\n}@media(min-width: 768px){form.svelte-1ort1zl{min-width:280px;max-width:none\n    }}");
}
function create_default_slot(ctx) {
  let t_value = (
    /*$language*/
    ctx[1].agreeAndContinue + ""
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
      ctx2[1].agreeAndContinue + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(23:4) <Button size=\\"lg\\" qa=\\"tint-agree-terms\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let article;
  let h1;
  let t0_value = (
    /*$language*/
    ctx[1].termsOfUse + ""
  );
  let t0;
  let t1;
  let p0;
  let t2_value = (
    /*$language*/
    ctx[1].weInformYouThatYouAreAboutToActivateTheVirtualTryOn + ""
  );
  let t2;
  let t3;
  let p1;
  let t4_value = (
    /*$language*/
    ctx[1].byClickingOnLiveModeOrSelectingAPhoto + ""
  );
  let t4;
  let t5;
  let form;
  let button;
  let current;
  let mounted;
  let dispose;
  button = new Button({
    props: {
      size: "lg",
      qa: "tint-agree-terms",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      section = element("section");
      article = element("article");
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      p0 = element("p");
      t2 = text(t2_value);
      t3 = space();
      p1 = element("p");
      t4 = text(t4_value);
      t5 = space();
      form = element("form");
      create_component(button.$$.fragment);
      attr_dev(h1, "class", "svelte-1ort1zl");
      add_location(h1, file, 11, 4, 354);
      attr_dev(p0, "class", "svelte-1ort1zl");
      add_location(p0, file, 12, 4, 390);
      attr_dev(p1, "class", "svelte-1ort1zl");
      add_location(p1, file, 15, 4, 477);
      attr_dev(article, "class", "svelte-1ort1zl");
      add_location(article, file, 10, 2, 340);
      attr_dev(form, "class", "svelte-1ort1zl");
      add_location(form, file, 17, 2, 549);
      attr_dev(section, "class", "tint-terms svelte-1ort1zl");
      add_location(section, file, 9, 0, 309);
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
      append_dev(article, p0);
      append_dev(p0, t2);
      append_dev(article, t3);
      append_dev(article, p1);
      append_dev(p1, t4);
      append_dev(section, t5);
      append_dev(section, form);
      mount_component(button, form, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(form, "submit", prevent_default(
            /*submit_handler*/
            ctx[4]
          ), false, true, false, false),
          listen_dev(form, "submit", prevent_default(
            /*submit_handler_1*/
            ctx[5]
          ), false, true, false, false),
          listen_dev(form, "submit", prevent_default(
            /*submit_handler_2*/
            ctx[6]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*$language*/
      2) && t0_value !== (t0_value = /*$language*/
      ctx2[1].termsOfUse + ""))
        set_data_dev(t0, t0_value);
      if ((!current || dirty & /*$language*/
      2) && t2_value !== (t2_value = /*$language*/
      ctx2[1].weInformYouThatYouAreAboutToActivateTheVirtualTryOn + ""))
        set_data_dev(t2, t2_value);
      if ((!current || dirty & /*$language*/
      2) && t4_value !== (t4_value = /*$language*/
      ctx2[1].byClickingOnLiveModeOrSelectingAPhoto + ""))
        set_data_dev(t4, t4_value);
      const button_changes = {};
      if (dirty & /*$$scope, $language*/
      130) {
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
        detach_dev(section);
      destroy_component(button);
      mounted = false;
      run_all(dispose);
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
  let redirect;
  let $router;
  let $language;
  validate_store(language, "language");
  component_subscribe($$self, language, ($$value) => $$invalidate(1, $language = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Terms", slots, []);
  const router = useRouter();
  validate_store(router, "router");
  component_subscribe($$self, router, (value) => $$invalidate(3, $router = value));
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Terms> was created with unknown prop '${key}'`);
  });
  const submit_handler = () => accept();
  const submit_handler_1 = () => redirect && router.push(redirect);
  const submit_handler_2 = () => analytics.terms_of_use_agree_clicked();
  $$self.$capture_state = () => ({
    analytics,
    Button,
    useRouter,
    language,
    terms,
    router,
    redirect,
    $router,
    $language
  });
  $$self.$inject_state = ($$props2) => {
    if ("redirect" in $$props2)
      $$invalidate(0, redirect = $$props2.redirect);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$router*/
    8) {
      $$invalidate(0, redirect = $router.location.query.onComplete);
    }
  };
  return [
    redirect,
    $language,
    router,
    $router,
    submit_handler,
    submit_handler_1,
    submit_handler_2
  ];
}
class Terms extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Terms",
      options,
      id: create_fragment.name
    });
  }
}
const Terms$1 = Terms;
export {
  Terms$1 as default
};

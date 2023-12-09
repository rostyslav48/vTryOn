import { S as SvelteComponentDev, i as init, c as safe_not_equal, d as dispatch_dev, e as append_styles, ac as compute_rest_props, g as validate_slots, aI as getSvelteRoot, ay as createEventDispatcher, aO as onMount, aP as tick, ad as assign, ae as exclude_internal_props, al as create_slot, R as empty, r as insert_dev, C as transition_in, T as group_outros, D as transition_out, U as check_outros, E as detach_dev, at as binding_callbacks, j as element, o as attr_dev, ag as null_to_empty, q as add_location, aK as action_destroyer, y as listen_dev, ao as update_slot_base, ap as get_all_dirty_from_scope, aq as get_slot_changes, aL as add_render_callback, aQ as create_bidirectional_transition, G as run_all } from "./app.js";
import { s as sineInOut, f as fade } from "./index-2d8ed87d.js";
const clickOutside = (node, bounding = node.ownerDocument) => {
  const handleClick = (event) => {
    if (node && !node.contains(event.target) && !event.defaultPrevented)
      node.dispatchEvent(new CustomEvent("click_outside", node));
  };
  bounding.addEventListener("click", handleClick, true);
  return {
    destroy: () => bounding.removeEventListener("click", handleClick, true)
  };
};
const portal = (element2, target) => {
  target.appendChild(element2);
  return {
    update: (target2) => target2.appendChild(element2),
    destroy: () => element2.parentNode && element2.parentNode.removeChild(element2)
  };
};
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  {
    if (platform2 == null) {
      console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
    }
    if (middleware.filter((_ref) => {
      let {
        name
      } = _ref;
      return name === "autoPlacement" || name === "flip";
    }).length > 1) {
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
    }
  }
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    {
      if (resetCount > 50) {
        console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
      }
    }
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? {
      ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
const min = Math.min;
const max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = middlewareArguments;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
const shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      await apply({
        ...middlewareArguments,
        ...dimensions
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
const getElementRects = ({
  reference,
  floating
}) => ({
  // https://github.com/floating-ui/floating-ui/blob/master/packages/dom/src/platform.ts#L18
  reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating)),
  floating: { x: 0, y: 0, ...getDimensions(floating) }
});
const getDimensions = (element2) => ({
  width: element2.offsetWidth,
  height: element2.offsetHeight
});
const getClippingRect = ({ element: element2 }) => {
  return getOffsetParent(element2).getBoundingClientRect();
};
const convertOffsetParentRelativeRectToViewportRelativeRect = ({
  rect,
  offsetParent
}) => {
  const parentRect = offsetParent.getBoundingClientRect();
  return {
    ...rect,
    x: rect.x + (parentRect.left + offsetParent.clientLeft),
    y: rect.y + (parentRect.top + offsetParent.clientTop)
  };
};
const getOffsetParent = (element2) => {
  let offsetParent = element2.offsetParent;
  if (!offsetParent) {
    while (offsetParent = element2.parentElement)
      if (/(relative|absolute|fixed)/.test(getComputedStyle(offsetParent).position))
        break;
  }
  return offsetParent;
};
const getDocumentElement = (element2) => element2.ownerDocument;
const getClientRects = () => {
  throw new Error(`The "getClientRects" is not implemented`);
};
const isElement = (obj) => {
  return obj && obj.nodeType === Node.ELEMENT_NODE && obj.style && obj.ownerDocument;
};
const isRTL = () => {
  return false;
};
const getRectRelativeToOffsetParent = (element2, parent) => {
  const elementRect = element2.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  return {
    x: elementRect.left - (parentRect.left + parent.clientLeft),
    y: elementRect.top - (parentRect.top + parent.clientTop),
    width: elementRect.width,
    height: elementRect.height
  };
};
const platform = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getClientRects,
  getClippingRect,
  getDimensions,
  getDocumentElement,
  getElementRects,
  getOffsetParent,
  isElement,
  isRTL
}, Symbol.toStringTag, { value: "Module" }));
const file = "src/lib/elements/Floating/Floating.svelte";
function add_css(target) {
  append_styles(target, "svelte-pfre93", "div.svelte-pfre93{position:absolute;top:0px;left:0px;z-index:99999999;display:flex;flex-direction:column\n}div.svelte-pfre93>*{min-height:0px\n}");
}
const get_default_slot_changes = (dirty) => ({});
const get_default_slot_context = (ctx) => ({ close: (
  /*close*/
  ctx[0]
) });
function create_if_block(ctx) {
  let div;
  let div_class_value;
  let div_transition;
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
    get_default_slot_context
  );
  const block = {
    c: function create() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      attr_dev(div, "class", div_class_value = null_to_empty(
        /*$$restProps*/
        ctx[4].class
      ) + " svelte-pfre93");
      add_location(div, file, 66, 2, 2837);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[11](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(portal.call(
            null,
            div,
            /*root*/
            ctx[3]
          )),
          action_destroyer(clickOutside.call(
            null,
            div,
            /*root*/
            ctx[3]
          )),
          listen_dev(
            div,
            "click_outside",
            /*close*/
            ctx[0],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[9],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*$$restProps*/
      16 && div_class_value !== (div_class_value = null_to_empty(
        /*$$restProps*/
        ctx[4].class
      ) + " svelte-pfre93")) {
        attr_dev(div, "class", div_class_value);
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
            div_transition = create_bidirectional_transition(div, fade, { duration: 200, easing: sineInOut }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      if (local) {
        if (!div_transition)
          div_transition = create_bidirectional_transition(div, fade, { duration: 200, easing: sineInOut }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[11](null);
      if (detaching && div_transition)
        div_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(66:0) {#if trigger}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*trigger*/
    ctx[1] && create_if_block(ctx)
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
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*trigger*/
        ctx2[1]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*trigger*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
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
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  const omit_props_names = ["anchor", "placement", "offset", "open", "close"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Floating", slots, ["default"]);
  let { anchor = void 0 } = $$props;
  let { placement = "bottom" } = $$props;
  let { offset: offset$1 = [0, 0] } = $$props;
  let trigger = null;
  let popup;
  const root = getSvelteRoot();
  const dispatch = createEventDispatcher();
  const open = (anchor2) => $$invalidate(1, trigger = anchor2);
  const close = () => $$invalidate(1, trigger = null);
  onMount(() => {
    const p = (anchor ? Promise.resolve() : tick()).then(() => {
      if (!anchor) {
        return () => {
        };
      }
      const isHTMLElement = anchor instanceof HTMLElement;
      const doOpen = ({ currentTarget }) => open(currentTarget);
      return isHTMLElement ? (anchor.addEventListener("click", doOpen), () => anchor.removeEventListener("click", doOpen)) : anchor.$on("click", doOpen);
    });
    return () => p.then((cleanup) => cleanup());
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      popup = $$value;
      $$invalidate(2, popup);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("anchor" in $$new_props)
      $$invalidate(5, anchor = $$new_props.anchor);
    if ("placement" in $$new_props)
      $$invalidate(6, placement = $$new_props.placement);
    if ("offset" in $$new_props)
      $$invalidate(7, offset$1 = $$new_props.offset);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onMount,
    tick,
    easing: sineInOut,
    fade,
    computePosition,
    offsetMiddleware: offset,
    shiftMiddleware: shift,
    sizeMiddleware: size,
    clickOutside,
    getSvelteRoot,
    portal,
    platform,
    anchor,
    placement,
    offset: offset$1,
    trigger,
    popup,
    root,
    dispatch,
    open,
    close
  });
  $$self.$inject_state = ($$new_props) => {
    if ("anchor" in $$props)
      $$invalidate(5, anchor = $$new_props.anchor);
    if ("placement" in $$props)
      $$invalidate(6, placement = $$new_props.placement);
    if ("offset" in $$props)
      $$invalidate(7, offset$1 = $$new_props.offset);
    if ("trigger" in $$props)
      $$invalidate(1, trigger = $$new_props.trigger);
    if ("popup" in $$props)
      $$invalidate(2, popup = $$new_props.popup);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*trigger*/
    2) {
      dispatch(trigger ? "open" : "close");
    }
    if ($$self.$$.dirty & /*trigger, popup, placement, offset*/
    198) {
      tick().then(() => trigger && computePosition(trigger, popup, {
        platform,
        // wait for svelte to popuate the "popup" element refernce
        strategy: "absolute",
        placement: placement.endsWith("-corner") ? placement.replace("-corner", "").replace("left", "start").replace("right", "end") : placement,
        middleware: [
          offset(({ rects }) => {
            let [mainAxis, crossAxis] = offset$1;
            if (placement.endsWith("-corner")) {
              if (/(left|right)/.test(placement))
                crossAxis += (/left/.test(placement) ? -1 : 1) * rects.floating.width;
            }
            return { mainAxis, crossAxis };
          }),
          size({
            // TODO: somehow retrieve the boundary, i.e. the Widget's current page
            // boundary: ? ,
            apply: ({ availableHeight }) => {
              Object.assign(popup.style, { maxHeight: `${availableHeight}px` });
            }
          }),
          shift({ padding: 12 })
        ]
      }).then(({ x, y }) => Object.assign(popup.style, { left: `${x}px`, top: `${y}px` })));
    }
  };
  return [
    close,
    trigger,
    popup,
    root,
    $$restProps,
    anchor,
    placement,
    offset$1,
    open,
    $$scope,
    slots,
    div_binding
  ];
}
class Floating extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(
      this,
      options,
      instance,
      create_fragment,
      safe_not_equal,
      {
        anchor: 5,
        placement: 6,
        offset: 7,
        open: 8,
        close: 0
      },
      add_css
    );
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Floating",
      options,
      id: create_fragment.name
    });
  }
  get anchor() {
    throw new Error("<Floating>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set anchor(value) {
    throw new Error("<Floating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get placement() {
    throw new Error("<Floating>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set placement(value) {
    throw new Error("<Floating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get offset() {
    throw new Error("<Floating>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set offset(value) {
    throw new Error("<Floating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get open() {
    return this.$$.ctx[8];
  }
  set open(value) {
    throw new Error("<Floating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get close() {
    return this.$$.ctx[0];
  }
  set close(value) {
    throw new Error("<Floating>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  Floating as F,
  clickOutside as c,
  portal as p
};

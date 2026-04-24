goog.provide('reagent.dom.client');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * Create a React Root connected to given container DOM element.
 */
reagent.dom.client.create_root = (function reagent$dom$client$create_root(var_args){
var G__24823 = arguments.length;
switch (G__24823) {
case 1:
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1 = (function (container){
return module$node_modules$react_dom$client.createRoot(container);
}));

(reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$2 = (function (container,options){
return module$node_modules$react_dom$client.createRoot(container,options);
}));

(reagent.dom.client.create_root.cljs$lang$maxFixedArity = 2);

/**
 * Unmount the given React Root
 */
reagent.dom.client.unmount = (function reagent$dom$client$unmount(root){
return root.unmount();
});
reagent.dom.client.reagent_root = (function reagent$dom$client$reagent_root(js_props){
module$node_modules$react$index.useEffect((function (){
var _STAR_always_update_STAR__orig_val__24858 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24859 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24859);

try{reagent.impl.batching.flush_after_render();

return undefined;
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24858);
}}));

var _STAR_always_update_STAR__orig_val__24862 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24863 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24863);

try{return module$node_modules$react$index.createElement(js_props.comp);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__24862);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
reagent.dom.client.render = (function reagent$dom$client$render(var_args){
var G__24868 = arguments.length;
switch (G__24868) {
case 2:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,null);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$4(root,el,compiler,false);
}));

(reagent.dom.client.render.cljs$core$IFn$_invoke$arity$4 = (function (root,el,compiler,strict_mode_QMARK_){
(reagent.impl.batching.react_flush = module$node_modules$react_dom$index.flushSync);

var eff_compiler = (function (){var or__5142__auto__ = compiler;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return reagent.impl.template._STAR_current_default_compiler_STAR_;
}
})();
var comp = (function (){
return reagent.impl.protocols.as_element(eff_compiler,el);
});
var js_props = ({});
var _ = (js_props.comp = comp);
var rg_root_el = module$node_modules$react$index.createElement(reagent.dom.client.reagent_root,js_props);
return root.render(((cljs.core.not(strict_mode_QMARK_))?rg_root_el:module$node_modules$react$index.createElement(module$node_modules$react$index.StrictMode,({}),rg_root_el)));
}));

(reagent.dom.client.render.cljs$lang$maxFixedArity = 4);

reagent.dom.client.hydrate_root = (function reagent$dom$client$hydrate_root(var_args){
var G__24925 = arguments.length;
switch (G__24925) {
case 2:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__24953){
var map__24955 = p__24953;
var map__24955__$1 = cljs.core.__destructure_map(map__24955);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24955__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
(reagent.impl.batching.react_flush = module$node_modules$react_dom$index.flushSync);

var js_props = ({});
var comp = (function (){
return reagent.impl.protocols.as_element(compiler,el);
});
(js_props.comp = comp);

return module$node_modules$react_dom$client.hydrateRoot(container,module$node_modules$react$index.createElement(reagent.dom.client.reagent_root,js_props));
}));

(reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reagent.dom.client.js.map

goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21817__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21819__i = 0, G__21819__a = new Array(arguments.length -  0);
while (G__21819__i < G__21819__a.length) {G__21819__a[G__21819__i] = arguments[G__21819__i + 0]; ++G__21819__i;}
  args = new cljs.core.IndexedSeq(G__21819__a,0,null);
} 
return G__21817__delegate.call(this,args);};
G__21817.cljs$lang$maxFixedArity = 0;
G__21817.cljs$lang$applyTo = (function (arglist__21820){
var args = cljs.core.seq(arglist__21820);
return G__21817__delegate(args);
});
G__21817.cljs$core$IFn$_invoke$arity$variadic = G__21817__delegate;
return G__21817;
})()
);

(o.error = (function() { 
var G__21822__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21822 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21824__i = 0, G__21824__a = new Array(arguments.length -  0);
while (G__21824__i < G__21824__a.length) {G__21824__a[G__21824__i] = arguments[G__21824__i + 0]; ++G__21824__i;}
  args = new cljs.core.IndexedSeq(G__21824__a,0,null);
} 
return G__21822__delegate.call(this,args);};
G__21822.cljs$lang$maxFixedArity = 0;
G__21822.cljs$lang$applyTo = (function (arglist__21825){
var args = cljs.core.seq(arglist__21825);
return G__21822__delegate(args);
});
G__21822.cljs$core$IFn$_invoke$arity$variadic = G__21822__delegate;
return G__21822;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

goog.provide('manas.frontend.app');
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.app !== 'undefined') && (typeof manas.frontend.app.root !== 'undefined')){
} else {
manas.frontend.app.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
manas.frontend.app.render_app_BANG_ = (function manas$frontend$app$render_app_BANG_(){
if(cljs.core.truth_(cljs.core.deref(manas.frontend.app.root))){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(manas.frontend.app.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.map_section], null));
} else {
return null;
}
});
manas.frontend.app.start_app_BANG_ = (function manas$frontend$app$start_app_BANG_(){
cljs.core.reset_BANG_(manas.frontend.app.root,reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app")));

return manas.frontend.app.render_app_BANG_();
});

//# sourceMappingURL=manas.frontend.app.js.map

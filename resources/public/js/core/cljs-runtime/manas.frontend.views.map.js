goog.provide('manas.frontend.views.map');
manas.frontend.views.map.img_w = (1440);
manas.frontend.views.map.img_h = (1920);
manas.frontend.views.map.img_north = 46.26629084547643;
manas.frontend.views.map.img_south = 46.25869538678212;
manas.frontend.views.map.img_west = 20.133819580078125;
manas.frontend.views.map.img_east = 20.1434326171875;
manas.frontend.views.map.lng__GT_px = (function manas$frontend$views$map$lng__GT_px(lng){
return (((lng - manas.frontend.views.map.img_west) / (manas.frontend.views.map.img_east - manas.frontend.views.map.img_west)) * manas.frontend.views.map.img_w);
});
manas.frontend.views.map.lat__GT_py = (function manas$frontend$views$map$lat__GT_py(lat){
return (((manas.frontend.views.map.img_north - lat) / (manas.frontend.views.map.img_north - manas.frontend.views.map.img_south)) * manas.frontend.views.map.img_h);
});
manas.frontend.views.map.boundary = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.137585729121383,46.26232807355396], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.13773635992962,46.26155743394304], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.138532551345605,46.2609296075656], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.13935456518732,46.261001019459144], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.139651523066135,46.26081356304036], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.140400373371932,46.26094448505103], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.14081353216045,46.2614175869837], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.140912518120842,46.26236080318151], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.139259882964552,46.2625928854367], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.138257112153724,46.26266131976024], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.137602944070693,46.26225368796318], null)], null);
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.sim_route !== 'undefined')){
} else {
manas.frontend.views.map.sim_route = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
manas.frontend.views.map.inside_festival_QMARK_ = (function manas$frontend$views$map$inside_festival_QMARK_(lng,lat){
var n = cljs.core.count(manas.frontend.views.map.boundary);
var i = (0);
var j = (n - (1));
var inside = false;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return inside;
} else {
var vec__35869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.boundary,i);
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869,(0),null);
var yi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869,(1),null);
var vec__35872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.boundary,j);
var xj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(0),null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35872,(1),null);
var cross_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((yi > lat),(yj > lat))) && ((lng < ((((xj - xi) / (yj - yi)) * (lat - yi)) + xi))));
var G__35986 = (i + (1));
var G__35987 = i;
var G__35988 = ((cross_QMARK_)?(!(inside)):inside);
i = G__35986;
j = G__35987;
inside = G__35988;
continue;
}
break;
}
});
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.api_places !== 'undefined')){
} else {
manas.frontend.views.map.api_places = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.api_artists !== 'undefined')){
} else {
manas.frontend.views.map.api_artists = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.api_acts !== 'undefined')){
} else {
manas.frontend.views.map.api_acts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_place !== 'undefined')){
} else {
manas.frontend.views.map.modal_place = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_artist !== 'undefined')){
} else {
manas.frontend.views.map.modal_artist = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_day !== 'undefined')){
} else {
manas.frontend.views.map.modal_day = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_closing !== 'undefined')){
} else {
manas.frontend.views.map.modal_closing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.active_nav !== 'undefined')){
} else {
manas.frontend.views.map.active_nav = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stages","stages",-442109532));
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.now_time !== 'undefined')){
} else {
manas.frontend.views.map.now_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
}
window.setInterval((function (){
return cljs.core.reset_BANG_(manas.frontend.views.map.now_time,Date.now());
}),(30000));
manas.frontend.views.map.close_modal_BANG_ = (function manas$frontend$views$map$close_modal_BANG_(){
cljs.core.reset_BANG_(manas.frontend.views.map.modal_closing,true);

return setTimeout((function (){
cljs.core.reset_BANG_(manas.frontend.views.map.modal_place,null);

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_closing,false);
}),(240));
});
manas.frontend.views.map.fetch_places_BANG_ = (function manas$frontend$views$map$fetch_places_BANG_(){
return fetch("/api/places").then((function (p1__35875_SHARP_){
return p1__35875_SHARP_.json();
})).then((function (p1__35876_SHARP_){
return cljs.core.reset_BANG_(manas.frontend.views.map.api_places,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35876_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
manas.frontend.views.map.fetch_artists_BANG_ = (function manas$frontend$views$map$fetch_artists_BANG_(){
return fetch("/api/artists").then((function (p1__35877_SHARP_){
return p1__35877_SHARP_.json();
})).then((function (p1__35878_SHARP_){
return cljs.core.reset_BANG_(manas.frontend.views.map.api_artists,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35878_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
manas.frontend.views.map.fetch_acts_BANG_ = (function manas$frontend$views$map$fetch_acts_BANG_(){
return fetch("/api/acts").then((function (p1__35879_SHARP_){
return p1__35879_SHARP_.json();
})).then((function (p1__35880_SHARP_){
return cljs.core.reset_BANG_(manas.frontend.views.map.api_acts,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35880_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
manas.frontend.views.map.act__GT_ms = (function manas$frontend$views$map$act__GT_ms(date_str,time_str){
if(cljs.core.seq(time_str)){
var vec__35881 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,time_str.split(":"));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35881,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35881,(1),null);
var d = (new Date(date_str));
var h_SINGLEQUOTE_ = (((h < (7)))?(h + (24)):h);
return d.setHours(h_SINGLEQUOTE_,m,(0),(0));
} else {
return null;
}
});
manas.frontend.views.map.countdown = (function manas$frontend$views$map$countdown(ms,now){
var diff_m = ((ms - now) / (60000));
var d = Math.floor((diff_m / (1440)));
var h = Math.floor(cljs.core.mod((diff_m / (60)),(24)));
var m = Math.round(cljs.core.mod(diff_m,(60)));
if((d > (0))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+"d "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"h");
} else {
if((h > (0))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"h "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+"m");
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+"min");

}
}
});
manas.frontend.views.map.day_labels = new cljs.core.PersistentArrayMap(null, 6, ["2026-07-08","Wed","2026-07-09","Thu","2026-07-10","Fri","2026-07-11","Sat","2026-07-12","Sun","2026-07-13","Mon"], null);
manas.frontend.views.map.modal_acts = (function manas$frontend$views$map$modal_acts(place_id,day){
var artist_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),cljs.core.deref(manas.frontend.views.map.api_artists)));
var day_acts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__35885_SHARP_){
var vec__35890 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__35885_SHARP_).split(":"));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35890,(0),null);
if((h < (7))){
return (h + (24));
} else {
return h;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35884_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"place-id","place-id",618174613).cljs$core$IFn$_invoke$arity$1(p1__35884_SHARP_),place_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__35884_SHARP_),day)));
}),cljs.core.deref(manas.frontend.views.map.api_acts)));
var now = cljs.core.deref(manas.frontend.views.map.now_time);
var dated = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__35886_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35886_SHARP_,new cljs.core.Keyword(null,"ms","ms",-1152709733),manas.frontend.views.map.act__GT_ms(day,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__35886_SHARP_)));
}),day_acts);
var past = cljs.core.filterv((function (p1__35887_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__35887_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__35887_SHARP_) < now);
} else {
return and__5140__auto__;
}
}),dated);
var future = cljs.core.filterv((function (p1__35888_SHARP_){
return (((new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__35888_SHARP_) == null)) || ((new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__35888_SHARP_) >= now)));
}),dated);
if(cljs.core.seq(day_acts)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__acts","div.place-modal__acts",1056752172),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$modal_acts_$_iter__35893(s__35894){
return (new cljs.core.LazySeq(null,(function (){
var s__35894__$1 = s__35894;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35894__$1);
if(temp__5823__auto__){
var s__35894__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35894__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35894__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35896 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35895 = (0);
while(true){
if((i__35895 < size__5627__auto__)){
var a = cljs.core._nth(c__5626__auto__,i__35895);
cljs.core.chunk_append(b__35896,(function (){var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(artist_map,new cljs.core.Keyword(null,"artist-id","artist-id",1792982084).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act.past","div.place-modal__act.past",-127864144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35895,artist,a,c__5626__auto__,size__5627__auto__,b__35896,s__35894__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,artist);
});})(i__35895,artist,a,c__5626__auto__,size__5627__auto__,b__35896,s__35894__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(artist)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)], null):null)], null)], null);
})());

var G__35989 = (i__35895 + (1));
i__35895 = G__35989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35896),manas$frontend$views$map$modal_acts_$_iter__35893(cljs.core.chunk_rest(s__35894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35896),null);
}
} else {
var a = cljs.core.first(s__35894__$2);
return cljs.core.cons((function (){var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(artist_map,new cljs.core.Keyword(null,"artist-id","artist-id",1792982084).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act.past","div.place-modal__act.past",-127864144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (artist,a,s__35894__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,artist);
});})(artist,a,s__35894__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(artist)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)], null):null)], null)], null);
})(),manas$frontend$views$map$modal_acts_$_iter__35893(cljs.core.rest(s__35894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(past);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__now-line","div.place-modal__now-line",-788987065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__35889_SHARP_){
if(cljs.core.truth_(p1__35889_SHARP_)){
return setTimeout((function (){
return p1__35889_SHARP_.scrollIntoView(({"behavior": "smooth", "block": "nearest"}));
}),(120));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__now-label","span.place-modal__now-label",1100854738),(function (){var d = (new Date(cljs.core.deref(manas.frontend.views.map.now_time)));
var h = d.getHours();
var m = d.getMinutes();
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((h < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((m < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));
})()], null)], null),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$modal_acts_$_iter__35897(s__35898){
return (new cljs.core.LazySeq(null,(function (){
var s__35898__$1 = s__35898;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35898__$1);
if(temp__5823__auto__){
var s__35898__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35898__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35898__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35900 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35899 = (0);
while(true){
if((i__35899 < size__5627__auto__)){
var a = cljs.core._nth(c__5626__auto__,i__35899);
cljs.core.chunk_append(b__35900,(function (){var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(artist_map,new cljs.core.Keyword(null,"artist-id","artist-id",1792982084).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35899,artist,a,c__5626__auto__,size__5627__auto__,b__35900,s__35898__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,artist);
});})(i__35899,artist,a,c__5626__auto__,size__5627__auto__,b__35900,s__35898__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(artist)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-countdown","span.place-modal__act-countdown",-367947067),manas.frontend.views.map.countdown(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a),now)], null):null)], null);
})());

var G__35990 = (i__35899 + (1));
i__35899 = G__35990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35900),manas$frontend$views$map$modal_acts_$_iter__35897(cljs.core.chunk_rest(s__35898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35900),null);
}
} else {
var a = cljs.core.first(s__35898__$2);
return cljs.core.cons((function (){var artist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(artist_map,new cljs.core.Keyword(null,"artist-id","artist-id",1792982084).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (artist,a,s__35898__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,artist);
});})(artist,a,s__35898__$2,temp__5823__auto__,artist_map,day_acts,now,dated,past,future))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(artist)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(artist)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-countdown","span.place-modal__act-countdown",-367947067),manas.frontend.views.map.countdown(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a),now)], null):null)], null);
})(),manas$frontend$views$map$modal_acts_$_iter__35897(cljs.core.rest(s__35898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(future);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__no-acts","div.place-modal__no-acts",1794476619),"Lineup TBA"], null);
}
});
manas.frontend.views.map.place_modal = (function manas$frontend$views$map$place_modal(){
var temp__5823__auto__ = cljs.core.deref(manas.frontend.views.map.modal_place);
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
var place_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p);
var dates = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35901_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"place-id","place-id",618174613).cljs$core$IFn$_invoke$arity$1(p1__35901_SHARP_),place_id);
}),cljs.core.deref(manas.frontend.views.map.api_acts)))));
var active = (function (){var or__5142__auto__ = cljs.core.deref(manas.frontend.views.map.modal_day);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(dates);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal","div.place-modal",-2043910875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(manas.frontend.views.map.modal_closing))?"closing":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__sheet","div.place-modal__sheet",-905311798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.place-modal__close","button.place-modal__close",-155012707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),manas.frontend.views.map.close_modal_BANG_], null),"\u2715"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__header","div.place-modal__header",-457966856),(cljs.core.truth_(new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(p))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.place-modal__img","img.place-modal__img",-1591491700),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__icon","span.place-modal__icon",832846393),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "O";
}
})()], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__name","span.place-modal__name",841306020),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__body","div.place-modal__body",629752180),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__place-desc","div.place-modal__place-desc",-1190027349),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(p)], null):null),((cljs.core.seq(dates))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__days","div.place-modal__days",-1104117107),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$place_modal_$_iter__35902(s__35903){
return (new cljs.core.LazySeq(null,(function (){
var s__35903__$1 = s__35903;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35903__$1);
if(temp__5823__auto____$1){
var s__35903__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35903__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35903__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35905 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35904 = (0);
while(true){
if((i__35904 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__35904);
cljs.core.chunk_append(b__35905,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__day-tab","div.place-modal__day-tab",747947711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),d,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,active))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35904,d,c__5626__auto__,size__5627__auto__,b__35905,s__35903__$2,temp__5823__auto____$1,place_id,dates,active,p,temp__5823__auto__){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,d);
});})(i__35904,d,c__5626__auto__,size__5627__auto__,b__35905,s__35903__$2,temp__5823__auto____$1,place_id,dates,active,p,temp__5823__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.cljs$core$IFn$_invoke$arity$3(manas.frontend.views.map.day_labels,d,d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__day-date","span.place-modal__day-date",914411019),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(d,/-/))], null)], null));

var G__35991 = (i__35904 + (1));
i__35904 = G__35991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35905),manas$frontend$views$map$place_modal_$_iter__35902(cljs.core.chunk_rest(s__35903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35905),null);
}
} else {
var d = cljs.core.first(s__35903__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__day-tab","div.place-modal__day-tab",747947711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),d,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,active))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d,s__35903__$2,temp__5823__auto____$1,place_id,dates,active,p,temp__5823__auto__){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,d);
});})(d,s__35903__$2,temp__5823__auto____$1,place_id,dates,active,p,temp__5823__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.cljs$core$IFn$_invoke$arity$3(manas.frontend.views.map.day_labels,d,d)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__day-date","span.place-modal__day-date",914411019),cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(d,/-/))], null)], null),manas$frontend$views$map$place_modal_$_iter__35902(cljs.core.rest(s__35903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(dates);
})()], null):null),manas.frontend.views.map.modal_acts(place_id,active)], null)], null)], null);
} else {
return null;
}
});
manas.frontend.views.map.artist_modal = (function manas$frontend$views$map$artist_modal(){
var temp__5823__auto__ = cljs.core.deref(manas.frontend.views.map.modal_artist);
if(cljs.core.truth_(temp__5823__auto__)){
var a = temp__5823__auto__;
var place_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),cljs.core.deref(manas.frontend.views.map.api_places)));
var a_acts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__35907_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__35907_SHARP_))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__35907_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35906_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"artist-id","artist-id",1792982084).cljs$core$IFn$_invoke$arity$1(p1__35906_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a));
}),cljs.core.deref(manas.frontend.views.map.api_acts)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal.artist-modal","div.place-modal.artist-modal",1057351489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,null);
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__sheet","div.place-modal__sheet",-905311798),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__35908_SHARP_){
return p1__35908_SHARP_.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.place-modal__close","button.place-modal__close",-155012707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(manas.frontend.views.map.modal_artist,null);
})], null),"\u2715"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__header","div.place-modal__header",-457966856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__name","span.place-modal__name",841306020),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__artist-bio","div.place-modal__artist-bio",2054933402),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__acts","div.place-modal__acts",1056752172),((cljs.core.seq(a_acts))?(function (){var iter__5628__auto__ = (function manas$frontend$views$map$artist_modal_$_iter__35909(s__35910){
return (new cljs.core.LazySeq(null,(function (){
var s__35910__$1 = s__35910;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__35910__$1);
if(temp__5823__auto____$1){
var s__35910__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35910__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35910__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35912 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35911 = (0);
while(true){
if((i__35911 < size__5627__auto__)){
var act = cljs.core._nth(c__5626__auto__,i__35911);
cljs.core.chunk_append(b__35912,(function (){var place = cljs.core.get.cljs$core$IFn$_invoke$arity$2(place_map,new cljs.core.Keyword(null,"place-id","place-id",618174613).cljs$core$IFn$_invoke$arity$1(act));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(act)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(manas.frontend.views.map.day_labels,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(act),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(act)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(act)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(place))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-stage-icon","span.place-modal__act-stage-icon",2101334575),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(place)], null):null)], null)], null);
})());

var G__35992 = (i__35911 + (1));
i__35911 = G__35992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35912),manas$frontend$views$map$artist_modal_$_iter__35909(cljs.core.chunk_rest(s__35910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35912),null);
}
} else {
var act = cljs.core.first(s__35910__$2);
return cljs.core.cons((function (){var place = cljs.core.get.cljs$core$IFn$_invoke$arity$2(place_map,new cljs.core.Keyword(null,"place-id","place-id",618174613).cljs$core$IFn$_invoke$arity$1(act));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(act)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(manas.frontend.views.map.day_labels,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(act),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(act)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(act)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(place)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(place))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-stage-icon","span.place-modal__act-stage-icon",2101334575),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(place)], null):null)], null)], null);
})(),manas$frontend$views$map$artist_modal_$_iter__35909(cljs.core.rest(s__35910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(a_acts);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__no-acts","div.place-modal__no-acts",1794476619),"No performances scheduled"], null))], null)], null)], null);
} else {
return null;
}
});
manas.frontend.views.map.cr_seg = (function manas$frontend$views$map$cr_seg(pts,n,i){
var pt = (function (j){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pts,cljs.core.mod((j + n),n));
});
var vec__35913 = pt((i - (1)));
var p0x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(0),null);
var p0y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35913,(1),null);
var vec__35916 = pt(i);
var p1x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(0),null);
var p1y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35916,(1),null);
var vec__35919 = pt((i + (1)));
var p2x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919,(0),null);
var p2y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35919,(1),null);
var vec__35922 = pt((i + (2)));
var p3x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922,(0),null);
var p3y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35922,(1),null);
var cp1x = (p1x + ((p2x - p0x) / (6)));
var cp1y = (p1y + ((p2y - p0y) / (6)));
var cp2x = (p2x - ((p3x - p1x) / (6)));
var cp2y = (p2y - ((p3y - p1y) / (6)));
return (""+"C "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp1x)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp1y)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp2x)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp2y)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2x)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2y));
});
manas.frontend.views.map.catmull_rom_path = (function manas$frontend$views$map$catmull_rom_path(pts){
if((cljs.core.count(pts) >= (3))){
var n = cljs.core.count(pts);
var vec__35926 = cljs.core.first(pts);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35926,(1),null);
return (""+"M "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sx)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sy)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35925_SHARP_){
return manas.frontend.views.map.cr_seg(pts,n,p1__35925_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n))))+" Z");
} else {
return null;
}
});
manas.frontend.views.map.place_click_handler = (function manas$frontend$views$map$place_click_handler(p){
return (function (e){
e.stopPropagation();

cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,null);

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_place,p);
});
});
manas.frontend.views.map.place_dot = (function manas$frontend$views$map$place_dot(p){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-btn","div.place-btn",1762443848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%,-50%)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),manas.frontend.views.map.place_click_handler(p)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s1","span.sparkle.s1",-607200068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s2","span.sparkle.s2",1353499359)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s3","span.sparkle.s3",1854057477)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s4","span.sparkle.s4",1487649402)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s5","span.sparkle.s5",84778153)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sparkle.s6","span.sparkle.s6",1306711955)], null)], null);
});
manas.frontend.views.map.amorph_filter = (function manas$frontend$views$map$amorph_filter(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"amorph",new cljs.core.Keyword(null,"x","x",2099068185),"-40%",new cljs.core.Keyword(null,"y","y",-1757859776),"-40%",new cljs.core.Keyword(null,"width","width",-384071477),"180%",new cljs.core.Keyword(null,"height","height",1025178622),"180%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic",new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521),"22",new cljs.core.Keyword(null,"result","result",1415092211),"glow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMerge","feMerge",1663055097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMergeNode","feMergeNode",-1691678771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),"glow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMergeNode","feMergeNode",-1691678771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic"], null)], null)], null)], null);
});
manas.frontend.views.map.centroid = (function manas$frontend$views$map$centroid(pts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pts)) / cljs.core.count(pts)),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pts)) / cljs.core.count(pts))], null);
});
manas.frontend.views.map.place_radial_gradient = (function manas$frontend$views$map$place_radial_gradient(p){
var pts = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p);
var vec__35929 = manas.frontend.views.map.centroid(pts);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(1),null);
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35932){
var vec__35933 = p__35932;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35933,(1),null);
return Math.sqrt((((x - cx) * (x - cx)) + ((y - cy) * (y - cy))));
}),pts));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"grad-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"id","id",-1388402092),(""+"grad-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),"userSpaceOnUse",new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),(r * 1.4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"s0",new cljs.core.Keyword(null,"offset","offset",296498311),"0%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),"#00a896",new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),"0.42"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"stop-color",new cljs.core.Keyword(null,"values","values",372645556),"#00a896;#00d4aa;#00a896",new cljs.core.Keyword(null,"dur","dur",1464522452),"10s",new cljs.core.Keyword(null,"calcMode","calcMode",-1989439090),"spline",new cljs.core.Keyword(null,"keySplines","keySplines",-1138000833),"0.45 0 0.55 1;0.45 0 0.55 1",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),"s100",new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stop-color","stop-color",316173955),"#00a896",new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),"0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"stop-color",new cljs.core.Keyword(null,"values","values",372645556),"#00a896;#00d4aa;#00a896",new cljs.core.Keyword(null,"dur","dur",1464522452),"10s",new cljs.core.Keyword(null,"calcMode","calcMode",-1989439090),"spline",new cljs.core.Keyword(null,"keySplines","keySplines",-1138000833),"0.45 0 0.55 1;0.45 0 0.55 1",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null)], null);
});
manas.frontend.views.map.place_svg_area = (function manas$frontend$views$map$place_svg_area(p,d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"class","class",-2030961996),"place-area",new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"fill","fill",883462889),(""+"url(#grad-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p))+")"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#00a896",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"filter","filter",-948537934),"url(#amorph)",new cljs.core.Keyword(null,"on-click","on-click",1632826543),manas.frontend.views.map.place_click_handler(p)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"stroke",new cljs.core.Keyword(null,"values","values",372645556),"#00a896;#00d4aa;#00a896",new cljs.core.Keyword(null,"dur","dur",1464522452),"10s",new cljs.core.Keyword(null,"calcMode","calcMode",-1989439090),"spline",new cljs.core.Keyword(null,"keySplines","keySplines",-1138000833),"0.45 0 0.55 1;0.45 0 0.55 1",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null);
});
manas.frontend.views.map.place_areas = (function manas$frontend$views$map$place_areas(){
var with_path = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35936_SHARP_){
return manas.frontend.views.map.catmull_rom_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__35936_SHARP_));
}),cljs.core.deref(manas.frontend.views.map.api_places));
var with_path_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),with_path));
var without_path = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35937_SHARP_){
var G__35938 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35937_SHARP_);
return (with_path_ids.cljs$core$IFn$_invoke$arity$1 ? with_path_ids.cljs$core$IFn$_invoke$arity$1(G__35938) : with_path_ids.call(null,G__35938));
}),cljs.core.deref(manas.frontend.views.map.api_places));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$place_areas_$_iter__35939(s__35940){
return (new cljs.core.LazySeq(null,(function (){
var s__35940__$1 = s__35940;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35940__$1);
if(temp__5823__auto__){
var s__35940__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35940__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35940__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35942 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35941 = (0);
while(true){
if((i__35941 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__35941);
cljs.core.chunk_append(b__35942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_dot,p], null));

var G__35993 = (i__35941 + (1));
i__35941 = G__35993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35942),manas$frontend$views$map$place_areas_$_iter__35939(cljs.core.chunk_rest(s__35940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35942),null);
}
} else {
var p = cljs.core.first(s__35940__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_dot,p], null),manas$frontend$views$map$place_areas_$_iter__35939(cljs.core.rest(s__35940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(without_path);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"width","width",-384071477),manas.frontend.views.map.img_w,new cljs.core.Keyword(null,"height","height",1025178622),manas.frontend.views.map.img_h,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.amorph_filter], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.place_radial_gradient,with_path)),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$place_areas_$_iter__35943(s__35944){
return (new cljs.core.LazySeq(null,(function (){
var s__35944__$1 = s__35944;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__35944__$1);
if(temp__5823__auto__){
var s__35944__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35944__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__35944__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__35946 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__35945 = (0);
while(true){
if((i__35945 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__35945);
cljs.core.chunk_append(b__35946,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_svg_area,p,manas.frontend.views.map.catmull_rom_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__35994 = (i__35945 + (1));
i__35945 = G__35994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35946),manas$frontend$views$map$place_areas_$_iter__35943(cljs.core.chunk_rest(s__35944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35946),null);
}
} else {
var p = cljs.core.first(s__35944__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_svg_area,p,manas.frontend.views.map.catmull_rom_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)),manas$frontend$views$map$place_areas_$_iter__35943(cljs.core.rest(s__35944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(with_path);
})()], null)], null);
});
manas.frontend.views.map.nav_menu = (function manas$frontend$views$map$nav_menu(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-menu","div.nav-menu",2129544906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.nav-blob-bg","svg.nav-blob-bg",-1601517734),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 300 68",new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"nav-amorph",new cljs.core.Keyword(null,"x","x",2099068185),"-15%",new cljs.core.Keyword(null,"y","y",-1757859776),"-30%",new cljs.core.Keyword(null,"width","width",-384071477),"130%",new cljs.core.Keyword(null,"height","height",1025178622),"160%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feTurbulence","feTurbulence",2079450215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"fractalNoise",new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),"0.025",new cljs.core.Keyword(null,"numOctaves","numOctaves",810606547),"2",new cljs.core.Keyword(null,"result","result",1415092211),"noise"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feDisplacementMap","feDisplacementMap",176959495),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic",new cljs.core.Keyword(null,"in2","in2",782506768),"noise",new cljs.core.Keyword(null,"scale","scale",-230427353),"10",new cljs.core.Keyword(null,"xChannelSelector","xChannelSelector",778404855),"R",new cljs.core.Keyword(null,"yChannelSelector","yChannelSelector",42690605),"G",new cljs.core.Keyword(null,"result","result",1415092211),"warped"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),"warped",new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521),"7",new cljs.core.Keyword(null,"result","result",1415092211),"glow"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMerge","feMerge",1663055097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMergeNode","feMergeNode",-1691678771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),"glow"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feMergeNode","feMergeNode",-1691678771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),"warped"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],["8","26","#00a896","rgba(0,168,150,0.18)","284","url(#nav-amorph)","1.5","8","26","52"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"stroke",new cljs.core.Keyword(null,"values","values",372645556),"#00a896;#00d4aa;#00a896",new cljs.core.Keyword(null,"dur","dur",1464522452),"10s",new cljs.core.Keyword(null,"calcMode","calcMode",-1989439090),"spline",new cljs.core.Keyword(null,"keySplines","keySplines",-1138000833),"0.45 0 0.55 1;0.45 0 0.55 1",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.nav-buttons","div.nav-buttons",1934111291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nav-btn","button.nav-btn",-1510262707),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(manas.frontend.views.map.active_nav),new cljs.core.Keyword(null,"timetable","timetable",-651277697)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(manas.frontend.views.map.active_nav,new cljs.core.Keyword(null,"timetable","timetable",-651277697));
})], null),"\u229F Timetable"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.nav-btn","button.nav-btn",-1510262707),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(manas.frontend.views.map.active_nav),new cljs.core.Keyword(null,"stages","stages",-442109532)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(manas.frontend.views.map.active_nav,new cljs.core.Keyword(null,"stages","stages",-442109532));
})], null),"\u25C8 Stages"], null)], null)], null);
});
manas.frontend.views.map.clamp_transform = (function manas$frontend$views$map$clamp_transform(p__35947){
var map__35948 = p__35947;
var map__35948__$1 = cljs.core.__destructure_map(map__35948);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var vw = window.innerWidth;
var vh = window.innerHeight;
var min_s = cljs.core.min.cljs$core$IFn$_invoke$arity$2((vw / manas.frontend.views.map.img_w),(vh / manas.frontend.views.map.img_h));
var s = cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_s,cljs.core.min.cljs$core$IFn$_invoke$arity$2((8),scale));
var iw = (manas.frontend.views.map.img_w * s);
var ih = (manas.frontend.views.map.img_h * s);
var extra = (0.3 * cljs.core.min.cljs$core$IFn$_invoke$arity$2(vw,vh));
var cx = ((vw - iw) / (2));
var cy = ((vh - ih) / (2));
var max_x = ((((iw >= vw))?(0):cx) + extra);
var min_x = ((((iw >= vw))?(vw - iw):cx) - extra);
var max_y = ((((ih >= vh))?(0):cy) + extra);
var min_y = ((((ih >= vh))?(vh - ih):cy) - extra);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),s,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_x,cljs.core.min.cljs$core$IFn$_invoke$arity$2(max_x,x)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.max.cljs$core$IFn$_invoke$arity$2(min_y,cljs.core.min.cljs$core$IFn$_invoke$arity$2(max_y,y))], null);
});
manas.frontend.views.map.map_section = (function manas$frontend$views$map$map_section(p__35954){
var map__35955 = p__35954;
var map__35955__$1 = cljs.core.__destructure_map(map__35955);
var dev_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"dev?","dev?",-613971064));
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575),false], null));
var transform = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null));
var user_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var map_ver = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("0");
var touch_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"dragging","dragging",1185097613),false,new cljs.core.Keyword(null,"pinching","pinching",632910169),false,new cljs.core.Keyword(null,"last-x","last-x",1433816434),(0),new cljs.core.Keyword(null,"last-y","last-y",426331717),(0),new cljs.core.Keyword(null,"pinch-dist","pinch-dist",434395378),(0),new cljs.core.Keyword(null,"pinch-cx","pinch-cx",1417180781),(0),new cljs.core.Keyword(null,"pinch-cy","pinch-cy",1682386529),(0)], null));
var watch_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var sim_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var anim_frame = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var node_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animate_px = (function (from,to,on_done){
if(cljs.core.truth_(cljs.core.deref(anim_frame))){
cancelAnimationFrame(cljs.core.deref(anim_frame));
} else {
}

var t0 = performance.now();
var dur = (1800);
var tick = (function manas$frontend$views$map$map_section_$_tick(now){
var t = cljs.core.min.cljs$core$IFn$_invoke$arity$2(1.0,((now - t0) / dur));
var e = ((((3) * t) * t) - ((((2) * t) * t) * t));
var vec__35962 = from;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(1),null);
var vec__35965 = to;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35965,(1),null);
cljs.core.reset_BANG_(user_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(fx + (e * (tx - fx))),(fy + (e * (ty - fy)))], null));

if((t < 1.0)){
return cljs.core.reset_BANG_(anim_frame,requestAnimationFrame(manas$frontend$views$map$map_section_$_tick));
} else {
return (on_done.cljs$core$IFn$_invoke$arity$0 ? on_done.cljs$core$IFn$_invoke$arity$0() : on_done.call(null));
}
});
return cljs.core.reset_BANG_(anim_frame,requestAnimationFrame(tick));
});
var on_wheel = (function (e){
e.preventDefault();

if(cljs.core.truth_(e.ctrlKey)){
var factor = (((e.deltaY > (0)))?0.9:1.1);
var cx = e.clientX;
var cy = e.clientY;
var map__35968 = cljs.core.deref(transform);
var map__35968__$1 = cljs.core.__destructure_map(map__35968);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35968__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var ns = (scale * factor);
var nx = (cx - ((cx - x) * factor));
var ny = (cy - ((cy - y) * factor));
return cljs.core.reset_BANG_(transform,manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),ns,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny], null)));
} else {
var map__35969 = cljs.core.deref(transform);
var map__35969__$1 = cljs.core.__destructure_map(map__35969);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35969__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35969__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35969__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return cljs.core.reset_BANG_(transform,manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"x","x",2099068185),(x - e.deltaX),new cljs.core.Keyword(null,"y","y",-1757859776),(y - e.deltaY)], null)));
}
});
var on_touch_move = (function (e){
e.preventDefault();

var touches = e.touches;
var tr = cljs.core.deref(touch_ref);
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(tr);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1));
} else {
return and__5140__auto__;
}
})())){
var t = (touches[(0)]);
var cx = t.clientX;
var cy = t.clientY;
var dx = (cx - new cljs.core.Keyword(null,"last-x","last-x",1433816434).cljs$core$IFn$_invoke$arity$1(tr));
var dy = (cy - new cljs.core.Keyword(null,"last-y","last-y",426331717).cljs$core$IFn$_invoke$arity$1(tr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"last-x","last-x",1433816434),cx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-y","last-y",426331717),cy], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(transform,(function (p__35970){
var map__35971 = p__35970;
var map__35971__$1 = cljs.core.__destructure_map(map__35971);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),scale,new cljs.core.Keyword(null,"x","x",2099068185),(x + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y + dy)], null));
}));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"pinching","pinching",632910169).cljs$core$IFn$_invoke$arity$1(tr);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(2));
} else {
return and__5140__auto__;
}
})())){
var t1 = (touches[(0)]);
var t2 = (touches[(1)]);
var dx = (t2.clientX - t1.clientX);
var dy = (t2.clientY - t1.clientY);
var d = Math.sqrt(((dx * dx) + (dy * dy)));
var mx = ((t1.clientX + t2.clientX) / (2));
var my = ((t1.clientY + t2.clientY) / (2));
var f = (d / new cljs.core.Keyword(null,"pinch-dist","pinch-dist",434395378).cljs$core$IFn$_invoke$arity$1(tr));
var map__35972 = cljs.core.deref(transform);
var map__35972__$1 = cljs.core.__destructure_map(map__35972);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35972__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35972__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35972__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var ns = (scale * f);
var nx = (mx - ((new cljs.core.Keyword(null,"pinch-cx","pinch-cx",1417180781).cljs$core$IFn$_invoke$arity$1(tr) - x) * f));
var ny = (my - ((new cljs.core.Keyword(null,"pinch-cy","pinch-cy",1682386529).cljs$core$IFn$_invoke$arity$1(tr) - y) * f));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"pinch-dist","pinch-dist",434395378),d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pinch-cx","pinch-cx",1417180781),mx,new cljs.core.Keyword(null,"pinch-cy","pinch-cy",1682386529),my], 0));

return cljs.core.reset_BANG_(transform,manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),ns,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny], null)));
} else {
return null;
}
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var vw_35995 = window.innerWidth;
var vh_35996 = window.innerHeight;
var s_35997 = cljs.core.min.cljs$core$IFn$_invoke$arity$2((vw_35995 / manas.frontend.views.map.img_w),(vh_35996 / manas.frontend.views.map.img_h));
var tx_35998 = ((vw_35995 - (manas.frontend.views.map.img_w * s_35997)) / (2));
var ty_35999 = ((vh_35996 - (manas.frontend.views.map.img_h * s_35997)) / (2));
cljs.core.reset_BANG_(transform,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),tx_35998,new cljs.core.Keyword(null,"y","y",-1757859776),ty_35999,new cljs.core.Keyword(null,"scale","scale",-230427353),s_35997], null));

manas.frontend.views.map.fetch_places_BANG_();

manas.frontend.views.map.fetch_artists_BANG_();

manas.frontend.views.map.fetch_acts_BANG_();

fetch("/api/map-version").then((function (p1__35949_SHARP_){
return p1__35949_SHARP_.text();
})).then((function (p1__35950_SHARP_){
return cljs.core.reset_BANG_(map_ver,p1__35950_SHARP_);
}));

fetch("/api/sim-route").then((function (p1__35951_SHARP_){
return p1__35951_SHARP_.json();
})).then((function (p1__35952_SHARP_){
return cljs.core.reset_BANG_(manas.frontend.views.map.sim_route,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35952_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),false], 0)));
}));

var temp__5823__auto__ = cljs.core.deref(node_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
node.addEventListener("wheel",on_wheel,({"passive": false}));

return node.addEventListener("touchmove",on_touch_move,({"passive": false}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
var temp__5823__auto___36000 = cljs.core.deref(node_ref);
if(cljs.core.truth_(temp__5823__auto___36000)){
var node_36001 = temp__5823__auto___36000;
node_36001.removeEventListener("wheel",on_wheel);

node_36001.removeEventListener("touchmove",on_touch_move);
} else {
}

if(cljs.core.truth_(cljs.core.deref(watch_id))){
navigator.geolocation.clearWatch(cljs.core.deref(watch_id));
} else {
}

if(cljs.core.truth_(cljs.core.deref(anim_frame))){
return cancelAnimationFrame(cljs.core.deref(anim_frame));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__35973){
var map__35974 = p__35973;
var map__35974__$1 = cljs.core.__destructure_map(map__35974);
var dev_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35974__$1,new cljs.core.Keyword(null,"dev?","dev?",-613971064));
var map__35975 = cljs.core.deref(state);
var map__35975__$1 = cljs.core.__destructure_map(map__35975);
var gps_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35975__$1,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077));
var inside_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35975__$1,new cljs.core.Keyword(null,"inside?","inside?",639243696));
var sim_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35975__$1,new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575));
var map__35976 = cljs.core.deref(transform);
var map__35976__$1 = cljs.core.__destructure_map(map__35976);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35976__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35976__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35976__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var upos = cljs.core.deref(user_pos);
var on_touch_start = (function (e){
var touches = e.touches;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(1))){
var t = (touches[(0)]);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pinching","pinching",632910169),false,new cljs.core.Keyword(null,"last-x","last-x",1433816434),t.clientX,new cljs.core.Keyword(null,"last-y","last-y",426331717),t.clientY], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(touches.length,(2))){
var t1 = (touches[(0)]);
var t2 = (touches[(1)]);
var dx = (t2.clientX - t1.clientX);
var dy = (t2.clientY - t1.clientY);
var d = Math.sqrt(((dx * dx) + (dy * dy)));
var mx = ((t1.clientX + t2.clientX) / (2));
var my = ((t1.clientY + t2.clientY) / (2));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"pinching","pinching",632910169),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dragging","dragging",1185097613),false,new cljs.core.Keyword(null,"pinch-dist","pinch-dist",434395378),d,new cljs.core.Keyword(null,"pinch-cx","pinch-cx",1417180781),mx,new cljs.core.Keyword(null,"pinch-cy","pinch-cy",1682386529),my], 0));
} else {
return null;
}
}
});
var on_touch_end = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pinching","pinching",632910169),false], 0));
});
var on_mouse_down = (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pinching","pinching",632910169),false,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),false,new cljs.core.Keyword(null,"last-x","last-x",1433816434),e.clientX,new cljs.core.Keyword(null,"last-y","last-y",426331717),e.clientY], 0));
});
var on_mouse_move = (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(touch_ref)))){
var cx = e.clientX;
var cy = e.clientY;
var dx = (cx - new cljs.core.Keyword(null,"last-x","last-x",1433816434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(touch_ref)));
var dy = (cy - new cljs.core.Keyword(null,"last-y","last-y",426331717).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(touch_ref)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"last-x","last-x",1433816434),cx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-y","last-y",426331717),cy,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),true], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(transform,(function (p__35977){
var map__35978 = p__35977;
var map__35978__$1 = cljs.core.__destructure_map(map__35978);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35978__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35978__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35978__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
return manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),scale__$1,new cljs.core.Keyword(null,"x","x",2099068185),(x__$1 + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(y__$1 + dy)], null));
}));
} else {
return null;
}
});
var on_mouse_up = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
});
var on_mouse_leave = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(touch_ref,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
});
var start_gps = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"loading","loading",-737050189));

return cljs.core.reset_BANG_(watch_id,navigator.geolocation.watchPosition((function (pos){
var lat = pos.coords.latitude;
var lng = pos.coords.longitude;
var to = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.lng__GT_px(lng),manas.frontend.views.map.lat__GT_py(lat)], null);
var from = (function (){var or__5142__auto__ = cljs.core.deref(user_pos);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return to;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"found","found",-584700170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inside?","inside?",639243696),manas.frontend.views.map.inside_festival_QMARK_(lng,lat)], 0));

return animate_px(from,to,(function (){
return null;
}));
}),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"error","error",-978969032));
}),({"enableHighAccuracy": true})));
});
var walk_step = (function manas$frontend$views$map$map_section_$_walk_step(idx){
if((idx >= cljs.core.count(cljs.core.deref(manas.frontend.views.map.sim_route)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575),true);
} else {
var vec__35979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(manas.frontend.views.map.sim_route),idx);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35979,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35979,(1),null);
var to = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.lng__GT_px(lng),manas.frontend.views.map.lat__GT_py(lat)], null);
var from = (function (){var or__5142__auto__ = cljs.core.deref(user_pos);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return to;
}
})();
cljs.core.reset_BANG_(sim_idx,idx);

return animate_px(from,to,(function (){
return manas$frontend$views$map$map_section_$_walk_step((idx + (1)));
}));
}
});
var start_sim = (function (){
if(cljs.core.truth_(cljs.core.deref(watch_id))){
navigator.geolocation.clearWatch(cljs.core.deref(watch_id));
} else {
}

if(cljs.core.truth_(cljs.core.deref(anim_frame))){
cancelAnimationFrame(cljs.core.deref(anim_frame));
} else {
}

cljs.core.reset_BANG_(sim_idx,(0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"found","found",-584700170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575),false], 0));

var vec__35982_36002 = cljs.core.first(cljs.core.deref(manas.frontend.views.map.sim_route));
var lng_36003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982_36002,(0),null);
var lat_36004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982_36002,(1),null);
cljs.core.reset_BANG_(user_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.lng__GT_px(lng_36003),manas.frontend.views.map.lat__GT_py(lat_36004)], null));

return walk_step((1));
});
var stop_sim = (function (){
if(cljs.core.truth_(cljs.core.deref(anim_frame))){
cancelAnimationFrame(cljs.core.deref(anim_frame));
} else {
}

cljs.core.reset_BANG_(sim_idx,(0));

cljs.core.reset_BANG_(user_pos,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077),new cljs.core.Keyword(null,"idle","idle",-2007156861),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575),false], 0));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#garden.map-section","section#garden.map-section",-890702052),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-viewport","div.map-viewport",694807716),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__35953_SHARP_){
return cljs.core.reset_BANG_(node_ref,p1__35953_SHARP_);
}),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),on_touch_start,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),on_touch_end,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),on_mouse_move,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),on_mouse_up,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),on_mouse_leave,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",1185097613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(touch_ref)))?"grabbing":"grab")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-world","div.map-world",695463242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"px,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"px) scale("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale)+")"),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"0 0",new cljs.core.Keyword(null,"width","width",-384071477),manas.frontend.views.map.img_w,new cljs.core.Keyword(null,"height","height",1025178622),manas.frontend.views.map.img_h], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(manas.frontend.views.map.modal_place);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(touch_ref)));
} else {
return and__5140__auto__;
}
})())){
return manas.frontend.views.map.close_modal_BANG_();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(""+"/images/festival-map.png?v="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(map_ver))),new cljs.core.Keyword(null,"width","width",-384071477),manas.frontend.views.map.img_w,new cljs.core.Keyword(null,"height","height",1025178622),manas.frontend.views.map.img_h,new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null)], null),(cljs.core.truth_(upos)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-user-dot","div.map-user-dot",338661536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.first(upos),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.second(upos),new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%,-50%)"], null)], null)], null):null),manas.frontend.views.map.place_areas()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.artist_modal], null),(cljs.core.truth_(dev_QMARK___$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-overlay__actions","div.map-overlay__actions",29990690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn","button.map-btn",-136842962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_gps], null),(function (){var G__35985 = gps_status;
var G__35985__$1 = (((G__35985 instanceof cljs.core.Keyword))?G__35985.fqn:null);
switch (G__35985__$1) {
case "idle":
return "\u25CE Locate me";

break;
case "loading":
return "Searching\u2026";

break;
case "found":
if(cljs.core.truth_(inside_QMARK_)){
return "\u2713 You are here";
} else {
return "\u26A0 Outside festival";
}

break;
case "error":
return "GPS unavailable";

break;
default:
return "\u25CE Locate me";

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn.map-btn--sim","button.map-btn.map-btn--sim",1053354074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_sim], null),(cljs.core.truth_(sim_done_QMARK_)?"\u21BA Again":"\u25B6 Simulate")], null),(((((cljs.core.deref(sim_idx) > (0))) && (cljs.core.not(sim_done_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn.map-btn--stop","button.map-btn.map-btn--stop",1495264457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),stop_sim], null),"\u25FC Stop"], null):null)], null):null)], null);
})], null));
});

//# sourceMappingURL=manas.frontend.views.map.js.map

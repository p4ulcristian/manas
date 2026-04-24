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
manas.frontend.views.map.sim_route = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1385,46.2622], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1387,46.26215], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.139,46.2621], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1391,46.26205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1392,46.262], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1394,46.2621], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.13955,46.26225], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1396,46.2624], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1398,46.2623], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1401,46.2621], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.14,46.26175], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.14,46.2615], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1398,46.26135], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1395,46.26125], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.139,46.2612], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1385,46.26125], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1382,46.26135], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1381,46.26155], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1382,46.2618], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1383,46.26205], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [20.1385,46.2622], null)], null);
manas.frontend.views.map.inside_festival_QMARK_ = (function manas$frontend$views$map$inside_festival_QMARK_(lng,lat){
var n = cljs.core.count(manas.frontend.views.map.boundary);
var i = (0);
var j = (n - (1));
var inside = false;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return inside;
} else {
var vec__20352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.boundary,i);
var xi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(0),null);
var yi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(1),null);
var vec__20355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.boundary,j);
var xj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(0),null);
var yj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(1),null);
var cross_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((yi > lat),(yj > lat))) && ((lng < ((((xj - xi) / (yj - yi)) * (lat - yi)) + xi))));
var G__20419 = (i + (1));
var G__20420 = i;
var G__20421 = ((cross_QMARK_)?(!(inside)):inside);
i = G__20419;
j = G__20420;
inside = G__20421;
continue;
}
break;
}
});
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.api_places !== 'undefined')){
} else {
manas.frontend.views.map.api_places = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_place !== 'undefined')){
} else {
manas.frontend.views.map.modal_place = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_day !== 'undefined')){
} else {
manas.frontend.views.map.modal_day = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof manas !== 'undefined') && (typeof manas.frontend !== 'undefined') && (typeof manas.frontend.views !== 'undefined') && (typeof manas.frontend.views.map !== 'undefined') && (typeof manas.frontend.views.map.modal_closing !== 'undefined')){
} else {
manas.frontend.views.map.modal_closing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
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
return fetch("/api/places").then((function (p1__20358_SHARP_){
return p1__20358_SHARP_.json();
})).then((function (p1__20359_SHARP_){
return cljs.core.reset_BANG_(manas.frontend.views.map.api_places,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__20359_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
});
manas.frontend.views.map.act__GT_ms = (function manas$frontend$views$map$act__GT_ms(date_str,time_str){
if(cljs.core.seq(time_str)){
var vec__20360 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,time_str.split(":"));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20360,(1),null);
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
manas.frontend.views.map.modal_acts = (function manas$frontend$views$map$modal_acts(schedule,day){
var entry = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20363_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__20363_SHARP_),day);
}),schedule));
var acts = new cljs.core.Keyword(null,"acts","acts",-1089848197).cljs$core$IFn$_invoke$arity$1(entry);
var now = cljs.core.deref(manas.frontend.views.map.now_time);
var dated = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20364_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20364_SHARP_,new cljs.core.Keyword(null,"ms","ms",-1152709733),manas.frontend.views.map.act__GT_ms(day,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__20364_SHARP_)));
}),acts);
var past = cljs.core.filterv((function (p1__20365_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__20365_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__20365_SHARP_) < now);
} else {
return and__5140__auto__;
}
}),dated);
var future = cljs.core.filterv((function (p1__20366_SHARP_){
return (((new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__20366_SHARP_) == null)) || ((new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(p1__20366_SHARP_) >= now)));
}),dated);
if(cljs.core.seq(acts)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__acts","div.place-modal__acts",1056752172),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$modal_acts_$_iter__20368(s__20369){
return (new cljs.core.LazySeq(null,(function (){
var s__20369__$1 = s__20369;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20369__$1);
if(temp__5823__auto__){
var s__20369__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20369__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20369__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20371 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20370 = (0);
while(true){
if((i__20370 < size__5627__auto__)){
var a = cljs.core._nth(c__5626__auto__,i__20370);
cljs.core.chunk_append(b__20371,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act.past","div.place-modal__act.past",-127864144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null):null)], null)], null));

var G__20422 = (i__20370 + (1));
i__20370 = G__20422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20371),manas$frontend$views$map$modal_acts_$_iter__20368(cljs.core.chunk_rest(s__20369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20371),null);
}
} else {
var a = cljs.core.first(s__20369__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act.past","div.place-modal__act.past",-127864144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null):null)], null)], null),manas$frontend$views$map$modal_acts_$_iter__20368(cljs.core.rest(s__20369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(past);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__now-line","div.place-modal__now-line",-788987065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__20367_SHARP_){
if(cljs.core.truth_(p1__20367_SHARP_)){
return setTimeout((function (){
return p1__20367_SHARP_.scrollIntoView(({"behavior": "smooth", "block": "nearest"}));
}),(120));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__now-label","span.place-modal__now-label",1100854738),(function (){var d = (new Date(cljs.core.deref(manas.frontend.views.map.now_time)));
var h = d.getHours();
var m = d.getMinutes();
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((h < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((m < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m));
})()], null)], null),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$modal_acts_$_iter__20372(s__20373){
return (new cljs.core.LazySeq(null,(function (){
var s__20373__$1 = s__20373;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20373__$1);
if(temp__5823__auto__){
var s__20373__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20373__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20373__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20375 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20374 = (0);
while(true){
if((i__20374 < size__5627__auto__)){
var a = cljs.core._nth(c__5626__auto__,i__20374);
cljs.core.chunk_append(b__20375,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-countdown","span.place-modal__act-countdown",-367947067),manas.frontend.views.map.countdown(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a),now)], null):null)], null));

var G__20423 = (i__20374 + (1));
i__20374 = G__20423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20375),manas$frontend$views$map$modal_acts_$_iter__20372(cljs.core.chunk_rest(s__20373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20375),null);
}
} else {
var a = cljs.core.first(s__20373__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act","div.place-modal__act",-2097794363),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-time","span.place-modal__act-time",-1367540332),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__act-info","div.place-modal__act-info",-1179367916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-name","span.place-modal__act-name",378479260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-desc","span.place-modal__act-desc",2074566098),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(a)], null):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__act-countdown","span.place-modal__act-countdown",-367947067),manas.frontend.views.map.countdown(new cljs.core.Keyword(null,"ms","ms",-1152709733).cljs$core$IFn$_invoke$arity$1(a),now)], null):null)], null),manas$frontend$views$map$modal_acts_$_iter__20372(cljs.core.rest(s__20373__$2)));
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
var schedule = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"schedule","schedule",349275266).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var active = (function (){var or__5142__auto__ = cljs.core.deref(manas.frontend.views.map.modal_day);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__20377 = schedule;
var G__20377__$1 = (((G__20377 == null))?null:cljs.core.first(G__20377));
if((G__20377__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__20377__$1);
}
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal","div.place-modal",-2043910875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(manas.frontend.views.map.modal_closing))?"closing":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),manas.frontend.views.map.close_modal_BANG_], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__sheet","div.place-modal__sheet",-905311798),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20376_SHARP_){
return p1__20376_SHARP_.stopPropagation();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.place-modal__close","button.place-modal__close",-155012707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),manas.frontend.views.map.close_modal_BANG_], null),"\u2715"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__header","div.place-modal__header",-457966856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__icon","span.place-modal__icon",832846393),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "\u25C9";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.place-modal__name","span.place-modal__name",841306020),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__days","div.place-modal__days",-1104117107),(function (){var iter__5628__auto__ = (function manas$frontend$views$map$place_modal_$_iter__20378(s__20379){
return (new cljs.core.LazySeq(null,(function (){
var s__20379__$1 = s__20379;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20379__$1);
if(temp__5823__auto____$1){
var s__20379__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20379__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20379__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20381 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20380 = (0);
while(true){
if((i__20380 < size__5627__auto__)){
var map__20382 = cljs.core._nth(c__5626__auto__,i__20380);
var map__20382__$1 = cljs.core.__destructure_map(map__20382);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20382__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20382__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__20381,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__day-tab","div.place-modal__day-tab",747947711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),date,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,active))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20380,map__20382,map__20382__$1,date,label,c__5626__auto__,size__5627__auto__,b__20381,s__20379__$2,temp__5823__auto____$1,schedule,active,p,temp__5823__auto__){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,date);
});})(i__20380,map__20382,map__20382__$1,date,label,c__5626__auto__,size__5627__auto__,b__20381,s__20379__$2,temp__5823__auto____$1,schedule,active,p,temp__5823__auto__))
], null),label], null));

var G__20424 = (i__20380 + (1));
i__20380 = G__20424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20381),manas$frontend$views$map$place_modal_$_iter__20378(cljs.core.chunk_rest(s__20379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20381),null);
}
} else {
var map__20383 = cljs.core.first(s__20379__$2);
var map__20383__$1 = cljs.core.__destructure_map(map__20383);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20383__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-modal__day-tab","div.place-modal__day-tab",747947711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),date,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date,active))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20383,map__20383__$1,date,label,s__20379__$2,temp__5823__auto____$1,schedule,active,p,temp__5823__auto__){
return (function (e){
e.stopPropagation();

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,date);
});})(map__20383,map__20383__$1,date,label,s__20379__$2,temp__5823__auto____$1,schedule,active,p,temp__5823__auto__))
], null),label], null),manas$frontend$views$map$place_modal_$_iter__20378(cljs.core.rest(s__20379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(schedule);
})()], null),manas.frontend.views.map.modal_acts(schedule,active)], null)], null);
} else {
return null;
}
});
manas.frontend.views.map.place_buttons = (function manas$frontend$views$map$place_buttons(){
var iter__5628__auto__ = (function manas$frontend$views$map$place_buttons_$_iter__20384(s__20385){
return (new cljs.core.LazySeq(null,(function (){
var s__20385__$1 = s__20385;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20385__$1);
if(temp__5823__auto__){
var s__20385__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20385__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20385__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20387 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20386 = (0);
while(true){
if((i__20386 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__20386);
cljs.core.chunk_append(b__20387,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-btn","div.place-btn",1762443848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%,-50%)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__20386,p,c__5626__auto__,size__5627__auto__,b__20387,s__20385__$2,temp__5823__auto__){
return (function (e){
e.stopPropagation();

cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,null);

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_place,p);
});})(i__20386,p,c__5626__auto__,size__5627__auto__,b__20387,s__20385__$2,temp__5823__auto__))
], null)], null));

var G__20425 = (i__20386 + (1));
i__20386 = G__20425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20387),manas$frontend$views$map$place_buttons_$_iter__20384(cljs.core.chunk_rest(s__20385__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20387),null);
}
} else {
var p = cljs.core.first(s__20385__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.place-btn","div.place-btn",1762443848),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%,-50%)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__20385__$2,temp__5823__auto__){
return (function (e){
e.stopPropagation();

cljs.core.reset_BANG_(manas.frontend.views.map.modal_day,null);

return cljs.core.reset_BANG_(manas.frontend.views.map.modal_place,p);
});})(p,s__20385__$2,temp__5823__auto__))
], null)], null),manas$frontend$views$map$place_buttons_$_iter__20384(cljs.core.rest(s__20385__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.deref(manas.frontend.views.map.api_places));
});
manas.frontend.views.map.clamp_transform = (function manas$frontend$views$map$clamp_transform(p__20388){
var map__20389 = p__20388;
var map__20389__$1 = cljs.core.__destructure_map(map__20389);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20389__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20389__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20389__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
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
manas.frontend.views.map.map_section = (function manas$frontend$views$map$map_section(){
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
var vec__20399 = from;
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(1),null);
var vec__20402 = to;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20402,(1),null);
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
var map__20405 = cljs.core.deref(transform);
var map__20405__$1 = cljs.core.__destructure_map(map__20405);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20405__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20405__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20405__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var ns = (scale * factor);
var nx = (cx - ((cx - x) * factor));
var ny = (cy - ((cy - y) * factor));
return cljs.core.reset_BANG_(transform,manas.frontend.views.map.clamp_transform(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),ns,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny], null)));
} else {
var map__20406 = cljs.core.deref(transform);
var map__20406__$1 = cljs.core.__destructure_map(map__20406);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20406__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20406__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20406__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
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

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(transform,(function (p__20407){
var map__20408 = p__20407;
var map__20408__$1 = cljs.core.__destructure_map(map__20408);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20408__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20408__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20408__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
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
var map__20409 = cljs.core.deref(transform);
var map__20409__$1 = cljs.core.__destructure_map(map__20409);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20409__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
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
var vw_20426 = window.innerWidth;
var vh_20427 = window.innerHeight;
var s_20428 = cljs.core.min.cljs$core$IFn$_invoke$arity$2((vw_20426 / manas.frontend.views.map.img_w),(vh_20427 / manas.frontend.views.map.img_h));
var tx_20429 = ((vw_20426 - (manas.frontend.views.map.img_w * s_20428)) / (2));
var ty_20430 = ((vh_20427 - (manas.frontend.views.map.img_h * s_20428)) / (2));
cljs.core.reset_BANG_(transform,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),tx_20429,new cljs.core.Keyword(null,"y","y",-1757859776),ty_20430,new cljs.core.Keyword(null,"scale","scale",-230427353),s_20428], null));

manas.frontend.views.map.fetch_places_BANG_();

fetch("/api/map-version").then((function (p1__20390_SHARP_){
return p1__20390_SHARP_.text();
})).then((function (p1__20391_SHARP_){
return cljs.core.reset_BANG_(map_ver,p1__20391_SHARP_);
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
var temp__5823__auto___20431 = cljs.core.deref(node_ref);
if(cljs.core.truth_(temp__5823__auto___20431)){
var node_20432 = temp__5823__auto___20431;
node_20432.removeEventListener("wheel",on_wheel);

node_20432.removeEventListener("touchmove",on_touch_move);
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
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__20410 = cljs.core.deref(state);
var map__20410__$1 = cljs.core.__destructure_map(map__20410);
var gps_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20410__$1,new cljs.core.Keyword(null,"gps-status","gps-status",-1898996077));
var inside_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20410__$1,new cljs.core.Keyword(null,"inside?","inside?",639243696));
var sim_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20410__$1,new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575));
var map__20411 = cljs.core.deref(transform);
var map__20411__$1 = cljs.core.__destructure_map(map__20411);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20411__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
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
if((idx >= cljs.core.count(manas.frontend.views.map.sim_route))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"sim-done?","sim-done?",-1496188575),true);
} else {
var vec__20412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(manas.frontend.views.map.sim_route,idx);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20412,(1),null);
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

var vec__20415_20433 = cljs.core.first(manas.frontend.views.map.sim_route);
var lng_20434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415_20433,(0),null);
var lat_20435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20415_20433,(1),null);
cljs.core.reset_BANG_(user_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.lng__GT_px(lng_20434),manas.frontend.views.map.lat__GT_py(lat_20435)], null));

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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#garden.map-section","section#garden.map-section",-890702052),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-viewport","div.map-viewport",694807716),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__20392_SHARP_){
return cljs.core.reset_BANG_(node_ref,p1__20392_SHARP_);
}),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),on_touch_start,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),on_touch_end], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-world","div.map-world",695463242),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translate("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)+"px,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+"px) scale("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale)+")"),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"0 0",new cljs.core.Keyword(null,"width","width",-384071477),manas.frontend.views.map.img_w,new cljs.core.Keyword(null,"height","height",1025178622),manas.frontend.views.map.img_h], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(""+"/images/festival-map.png?v="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(map_ver))),new cljs.core.Keyword(null,"width","width",-384071477),manas.frontend.views.map.img_w,new cljs.core.Keyword(null,"height","height",1025178622),manas.frontend.views.map.img_h,new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null)], null),(cljs.core.truth_(upos)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-user-dot","div.map-user-dot",338661536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.first(upos),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.second(upos),new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%,-50%)"], null)], null)], null):null),manas.frontend.views.map.place_buttons()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manas.frontend.views.map.place_modal], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-overlay__actions","div.map-overlay__actions",29990690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn","button.map-btn",-136842962),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_gps], null),(function (){var G__20418 = gps_status;
var G__20418__$1 = (((G__20418 instanceof cljs.core.Keyword))?G__20418.fqn:null);
switch (G__20418__$1) {
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
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn.map-btn--sim","button.map-btn.map-btn--sim",1053354074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),start_sim], null),(cljs.core.truth_(sim_done_QMARK_)?"\u21BA Again":"\u25B6 Simulate")], null),(((((cljs.core.deref(sim_idx) > (0))) && (cljs.core.not(sim_done_QMARK_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.map-btn.map-btn--stop","button.map-btn.map-btn--stop",1495264457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),stop_sim], null),"\u25FC Stop"], null):null)], null)], null);
})], null));
});

//# sourceMappingURL=manas.frontend.views.map.js.map
